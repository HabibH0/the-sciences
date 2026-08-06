// Module 18 — اَلْعِبَارَاتُ الْفِعْلِيَّةُ: the five verbal phrases (مَصْدَرٌ,
// اِسْمُ الْفَاعِلِ, صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ, اِسْمُ الْمَفْعُوْلِ,
// اِسْمُ التَّفْضِيْلِ), and Unit 5 Section 3 Review (From the Start, Unit 5,
// Section 3, Supplement, pp. 534-560)
//
// l1-l15 converted from content-fstu-new/unit5-3-lesson19..33.js, same
// conversion pattern as module-04..17.js (see module-04.js header comment);
// they continue module-16.js/module-17.js's l1..l11+l1..l11 sequence
// (source lessons 1..18) within the same Unit 5 Section 3. l16 ("المراجعة")
// is generated from unit5-3-summary.js's keyTerms/nouns/verbs -- no new
// teaching content, no exercise gate, mirroring module-14.js's/
// module-15.js's end-of-section review lesson. One keyTerm ("Verbal
// Phrase") is printed in the book with a blank Arabic cell (reproduced as
// such in the source, per its own NOTES field) and is filtered out of the
// quiz/bank generation here since an empty term can't build a real
// question. This section's `structures` entries (unlike unit5-1's flat
// list, but like unit5-2's) are each a full table in their own right, so
// each becomes its own reference-table concept, mirroring module-15.js.

export default {
  "id": "f-ibarat-filiyya",
  "title": "الْعِبَارَاتُ الْفِعْلِيَّةُ",
  "heading": "اَلْوَحْدَةُ الْخَامِسَةُ",
  "subheading": "اَلْقِسْمُ الثَّالِثُ",
  "blurb": "Verbal phrases: nouns like الْمَصْدَر and اِسْم الْفَاعِل that act like a verb with none present — plus a review of Section 3.",
  "lessons": [
    {
      "id": "l1",
      "title": "عبارة المصدر",
      "subtitle": "Supplement: Verbal Phrases",
      "concepts": [
        {
          "heading": "Introduction — what a verbal phrase is",
          "lines": [
            {
              "html": "It has already been studied that both the مَصْدَر and the مُشْتَقَّات can occur in the meaning of a noun, an adjective, or a verb. When the مَصْدَر and the مُشْتَقَّات convey verbal meanings, they can become part of a phrase. These are known as verbal phrases.",
              "list": false
            },
            {
              "html": "These phrases are comprised of a فَاعِل, a مَفْعُوْلٌ بِهِ and other slots of a verbal sentence — even though no verb is present. That is what makes them worth studying separately: a noun is doing a verb's work, and it brings the verb's slots along with it.",
              "list": false
            },
            {
              "html": "اَلْحُجَّاجُ رَاجِعُوْنَ مِنْ عَرَفَةَ الْآنَ — The pilgrims are returning from Arafah now.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In this sentence the اِسْمُ الْفَاعِلِ رَاجِعُوْنَ has its own مَفْعُوْلٌ فِيْهِ — مِنْ عَرَفَةَ and الْآنَ. Together these form a verbal phrase, and that phrase becomes the خَبَر of the مُبْتَدَأ الْحُجَّاجُ.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَلْحُجَّاجُ رَاجِعُوْنَ مِنْ عَرَفَةَ الْآنَ",
                "translation": "The pilgrims are returning from Arafah now.",
                "cells": [
                  "اَلْحُجَّاجُ",
                  "رَاجِعُوْنَ",
                  "مِنْ",
                  "عَرَفَةَ",
                  "الْآنَ"
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
                        "role": "جَارٌّ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "مَجْرُوْرٌ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "اِسْمُ فَاعِلٍ"
                      },
                      {
                        "start": 2,
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
                ]
              }
            },
            {
              "table": {
                "title": "The five types of verbal phrase",
                "headers": [
                  "#",
                  "Built on"
                ],
                "rows": [
                  [
                    "1",
                    "the مَصْدَرٌ"
                  ],
                  [
                    "2",
                    "the اِسْمُ الْفَاعِلِ"
                  ],
                  [
                    "3",
                    "the الصِّفَةُ الْمُشَبَّهَةُ بِاسْمِ الْفَاعِلِ"
                  ],
                  [
                    "4",
                    "the اِسْمُ الْمَفْعُوْلِ"
                  ],
                  [
                    "5",
                    "the اِسْمُ التَّفْضِيْلِ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is a verbal phrase, and which two word-types can it be built on؟",
            "kind": "mcq",
            "options": [
              "A phrase built on a مَصْدَرٌ or مُشْتَقَّات word, that carries verbal slots (فَاعِلٌ, مَفْعُوْلٌ بِهِ, etc.) even though no verb is present",
              "A phrase that always contains a hidden verb pronounced silently",
              "A phrase built only from prepositions",
              "A phrase that can never take a فَاعِلٌ or مَفْعُوْلٌ بِهِ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Construction of a مَصْدَر verbal phrase",
          "lines": [
            {
              "html": "A مَصْدَر verbal phrase consists of essential and non-essential slots. There is one essential slot found in every مَصْدَر verbal phrase: a مَصْدَر slot. There are two non-essential slots: a مُضَافٌ إِلَيْهِ slot, and a غَيْرُ صَرِيْحٍ or مَنْصُوْبٌ slot or slots. A مَصْدَر verbal phrase consists of one or more of these two.",
              "list": false
            },
            {
              "table": {
                "title": "The parts of a مَصْدَر verbal phrase",
                "headers": [
                  "Essential",
                  "Non-essential",
                  "Non-essential"
                ],
                "rows": [
                  [
                    "مَصْدَرٌ",
                    "مُضَافٌ إِلَيْهِ",
                    "مَنْصُوْبٌ / غَيْرُ صَرِيْحٍ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the one essential slot in every مَصْدَر verbal phrase, and what are the two non-essential ones؟",
            "kind": "mcq",
            "options": [
              "Essential: مَصْدَرٌ; non-essential: a مُضَافٌ إِلَيْهِ slot, and a مَنْصُوْبٌ/غَيْرُ صَرِيْحٍ slot",
              "Essential: فَاعِلٌ; non-essential: مَصْدَرٌ and خَبَرٌ",
              "All three slots are essential",
              "Essential: مُضَافٌ إِلَيْهِ; the مَصْدَرٌ itself is optional"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The مُضَافٌ إِلَيْهِ slot",
          "lines": [
            {
              "html": "The مَصْدَرٌ is commonly followed by a مُضَافٌ إِلَيْهِ. Even though the noun will be مَجْرُوْرٌ, it has an إِعْرَابٌ مَحَلِّيٌّ — that is, it gives the meaning of a فَاعِل, a مَفْعُوْلٌ فِيْهِ or a مَفْعُوْلٌ بِهِ. The case ending says 'possessor'; the sense says something more precise.",
              "list": false
            },
            {
              "html": "فَهْمُ الطَّالِبِ — the student's understanding — مُضَافٌ إِلَيْهِ as فَاعِلٌ",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "فَهْمُ الطَّالِبِ",
                "translation": "the student's understanding",
                "cells": [
                  "فَهْمُ",
                  "الطَّالِبِ"
                ],
                "rows": [
                  {
                    "position": "above",
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
                        "start": 0,
                        "end": 0,
                        "role": "مَصْدَرٌ"
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
              "html": "فَهْمُ الدَّرْسِ — the understanding of the lesson — مُضَافٌ إِلَيْهِ as مَفْعُوْلٌ بِهِ",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "فَهْمُ الدَّرْسِ",
                "translation": "the understanding of the lesson",
                "cells": [
                  "فَهْمُ",
                  "الدَّرْسِ"
                ],
                "rows": [
                  {
                    "position": "above",
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
                        "start": 0,
                        "end": 0,
                        "role": "مَصْدَرٌ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "مَفْعُوْلٌ بِهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "قِيَامُ اللَّيْلِ — standing during the night — مُضَافٌ إِلَيْهِ as مَفْعُوْلٌ فِيْهِ",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "قِيَامُ اللَّيْلِ",
                "translation": "standing during the night",
                "cells": [
                  "قِيَامُ",
                  "اللَّيْلِ"
                ],
                "rows": [
                  {
                    "position": "above",
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
                        "start": 0,
                        "end": 0,
                        "role": "مَصْدَرٌ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "مَفْعُوْلٌ فِيْهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Notice that the three phrases are identical in form. Only the meaning of the second word decides which reading applies. A person who can do the action is a فَاعِل; a thing the action is done to is a مَفْعُوْلٌ بِهِ; a time or place is a مَفْعُوْلٌ فِيْهِ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In فَهْمُ الطَّالِبِ vs فَهْمُ الدَّرْسِ, both مُضَافٌ إِلَيْهِ are مَجْرُوْرٌ in form — so what actually distinguishes their meaning؟",
            "kind": "mcq",
            "options": [
              "Their إِعْرَابٌ مَحَلِّيٌّ — the sense decides whether the مُضَافٌ إِلَيْهِ functions as a فَاعِلٌ or a مَفْعُوْلٌ بِهِ",
              "The gender of the مَصْدَرٌ",
              "Word order",
              "There is no real difference — both always mean the same thing"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Summary and the ambiguous case",
          "lines": [
            {
              "table": {
                "title": "The functions of the مُضَافٌ إِلَيْهِ of a مَصْدَرٌ",
                "headers": [
                  "مَصْدَرٌ",
                  "مُضَافٌ إِلَيْهِ",
                  "Its function",
                  "Meaning"
                ],
                "rows": [
                  [
                    "دُعَاءُ",
                    "الْعَبْدِ",
                    "فَاعِلٌ",
                    "the servant's supplication"
                  ],
                  [
                    "دُعَاءُ",
                    "رَبِّهِ",
                    "مَفْعُوْلٌ بِهِ",
                    "supplicating his Lord"
                  ],
                  [
                    "دُعَاءُ",
                    "اللَّيْلِ",
                    "مَفْعُوْلٌ فِيْهِ",
                    "supplication during the night"
                  ]
                ]
              }
            },
            {
              "html": "In some cases the مُضَافٌ إِلَيْهِ can be taken to be either فَاعِل or مَفْعُوْلٌ بِهِ. In اِحْتِرَامُ الْعُلَمَاءِ, الْعُلَمَاء can be the فَاعِل — the ones who are honouring — or the مَفْعُوْلٌ بِهِ — the ones who are being honoured. Only the wider context settles it, and often either reading is defensible.",
              "list": false
            },
            {
              "html": "The same ambiguity is worth watching for in تَرْبِيَةُ الْأَوْلَادِ ('raising the children' or 'the children's upbringing of others'), and in تَمَنِّي الْعِبَادِ. Where one reading is absurd, as with شُرْبُ الْخَمْرِ, the choice makes itself.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Why is اِحْتِرَامُ الْعُلَمَاءِ genuinely ambiguous؟",
            "kind": "mcq",
            "options": [
              "الْعُلَمَاءِ could equally be the فَاعِلٌ (the ones honouring) or the مَفْعُوْلٌ بِهِ (the ones honoured), and only wider context decides",
              "Because احترام has no مُضَافٌ إِلَيْهِ",
              "Because العلماء is مَبْنِيٌّ",
              "Because the phrase can only mean 'the scholars' own respect'"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Verbal phrases and the مَصْدَر phrase",
        "rows": [
          {
            "label": "What they are",
            "arabic": "a noun doing a verb's work",
            "meaning": "the مَصْدَر or a مُشْتَقّ with verbal slots of its own"
          },
          {
            "label": "Five types",
            "arabic": "مَصْدَرٌ, اِسْمُ الْفَاعِلِ, الصِّفَةُ الْمُشَبَّهَةُ, اِسْمُ الْمَفْعُوْلِ, اِسْمُ التَّفْضِيْلِ",
            "meaning": "each treated in turn"
          },
          {
            "label": "Essential slot",
            "arabic": "the مَصْدَرٌ itself",
            "meaning": "every مَصْدَر phrase has one"
          },
          {
            "label": "Non-essential slots",
            "arabic": "مُضَافٌ إِلَيْهِ, and مَنْصُوْبٌ / غَيْرُ صَرِيْحٍ",
            "meaning": "one or more of these"
          },
          {
            "label": "The مُضَافٌ إِلَيْهِ",
            "arabic": "إِعْرَابٌ مَحَلِّيٌّ",
            "meaning": "مَجْرُوْرٌ in form, but a فَاعِل, مَفْعُوْلٌ بِهِ or مَفْعُوْلٌ فِيْهِ in meaning"
          },
          {
            "label": "Examples",
            "arabic": "فَهْمُ الطَّالِبِ / فَهْمُ الدَّرْسِ / قِيَامُ اللَّيْلِ",
            "meaning": "فَاعِلٌ / مَفْعُوْلٌ بِهِ / مَفْعُوْلٌ فِيْهِ"
          },
          {
            "label": "Ambiguity",
            "arabic": "اِحْتِرَامُ الْعُلَمَاءِ",
            "meaning": "either 'honouring the scholars' or 'the scholars' honouring'"
          }
        ]
      },
      "quiz": [
        {
          "q": "What makes a phrase a 'verbal phrase'?",
          "options": [
            "It contains a verb",
            "A مَصْدَر or مُشْتَقّ conveys a verbal meaning and takes verbal slots",
            "It is مَنْصُوْبٌ",
            "It follows a مَوْصُوْلٌ"
          ],
          "correct": 1,
          "explanation": "No verb is present; a noun is doing the verb's work and brings its slots with it."
        },
        {
          "q": "In اَلْحُجَّاجُ رَاجِعُوْنَ مِنْ عَرَفَةَ الْآنَ, what is رَاجِعُوْنَ?",
          "options": [
            "a مَصْدَرٌ",
            "an اِسْمُ فَاعِلٍ",
            "an اِسْمُ مَفْعُوْلٍ",
            "a verb"
          ],
          "correct": 1,
          "explanation": "It carries the meaning of 'returning' and takes its own adverbial slots."
        },
        {
          "q": "How many types of verbal phrase are there?",
          "options": [
            "five",
            "three",
            "four",
            "six"
          ],
          "correct": 0,
          "explanation": "مَصْدَرٌ, اِسْمُ الْفَاعِلِ, الصِّفَةُ الْمُشَبَّهَةُ, اِسْمُ الْمَفْعُوْلِ and اِسْمُ التَّفْضِيْلِ."
        },
        {
          "q": "Which slot is essential in a مَصْدَر verbal phrase?",
          "options": [
            "the مُضَافٌ إِلَيْهِ",
            "the مَنْصُوْبٌ slot",
            "none is essential",
            "the مَصْدَرٌ itself"
          ],
          "correct": 3,
          "explanation": "The other two slots are non-essential and one or more of them may appear."
        },
        {
          "q": "Grammarians call الطَّالِبِ in فَهْمُ الطَّالِبِ an إِعْرَابٌ مَحَلِّيٌّ. What does that mean?",
          "options": [
            "The noun has no case at all",
            "The noun is مَجْرُوْرٌ in form but carries the meaning of another slot",
            "The noun is مَنْصُوْبٌ",
            "The noun is indeclinable"
          ],
          "correct": 1,
          "explanation": "فَهْمُ الطَّالِبِ is a genitive in form and a فَاعِل in sense."
        },
        {
          "q": "In قِيَامُ اللَّيْلِ, the مُضَافٌ إِلَيْهِ functions as…",
          "options": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "مَفْعُوْلٌ فِيْهِ",
            "تَمْيِيْزٌ"
          ],
          "correct": 2,
          "explanation": "اَللَّيْل is a time, so the sense is 'standing during the night'."
        }
      ],
      "bank": [
        {
          "title": "اَلْحُجَّاجُ رَاجِعُوْنَ مِنْ عَرَفَةَ الْآنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Supplement)",
          "sentence": "اَلْحُجَّاجُ رَاجِعُوْنَ مِنْ عَرَفَةَ الْآنَ",
          "translation": "The pilgrims are returning from Arafah now.",
          "cells": [
            "اَلْحُجَّاجُ",
            "رَاجِعُوْنَ",
            "مِنْ",
            "عَرَفَةَ",
            "الْآنَ"
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
                  "role": "اِسْمُ فَاعِلٍ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
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
            "مَصْدَرٌ",
            "فَاعِلٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "فَهْمُ الطَّالِبِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Supplement)",
          "sentence": "فَهْمُ الطَّالِبِ",
          "translation": "the student's understanding",
          "cells": [
            "فَهْمُ",
            "الطَّالِبِ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
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
            "مَفْعُوْلٌ بِهِ",
            "مَفْعُوْلٌ فِيْهِ",
            "اِسْمُ فَاعِلٍ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "فَهْمُ الدَّرْسِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Supplement)",
          "sentence": "فَهْمُ الدَّرْسِ",
          "translation": "the understanding of the lesson",
          "cells": [
            "فَهْمُ",
            "الدَّرْسِ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
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
            "فَاعِلٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "قِيَامُ اللَّيْلِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Supplement)",
          "sentence": "قِيَامُ اللَّيْلِ",
          "translation": "standing during the night",
          "cells": [
            "قِيَامُ",
            "اللَّيْلِ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
          "title": "دُعَاءُ الْعَبْدِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Supplement)",
          "sentence": "دُعَاءُ الْعَبْدِ",
          "translation": "the servant's supplication",
          "cells": [
            "دُعَاءُ",
            "الْعَبْدِ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
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
            "مَفْعُوْلٌ بِهِ",
            "مَفْعُوْلٌ فِيْهِ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "دُعَاءُ رَبِّهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Supplement)",
          "sentence": "دُعَاءُ رَبِّهِ",
          "translation": "supplicating his Lord",
          "cells": [
            "دُعَاءُ",
            "رَبِّ",
            "هِ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
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
            "فَاعِلٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "صَوْمُ رَمَضَانَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Supplement)",
          "sentence": "صَوْمُ رَمَضَانَ",
          "translation": "fasting during Ramadan",
          "cells": [
            "صَوْمُ",
            "رَمَضَانَ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "جُوْعُ الْفُقَرَاءِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Supplement)",
          "sentence": "جُوْعُ الْفُقَرَاءِ",
          "translation": "the hunger of the poor",
          "cells": [
            "جُوْعُ",
            "الْفُقَرَاءِ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
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
            "مَفْعُوْلٌ بِهِ",
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "إِطْعَامُ النَّاسِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Supplement)",
          "sentence": "إِطْعَامُ النَّاسِ",
          "translation": "feeding the people",
          "cells": [
            "إِطْعَامُ",
            "النَّاسِ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
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
            "فَاعِلٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "نَدَامَةُ يَوْمِ الْقِيَامَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Supplement)",
          "sentence": "نَدَامَةُ يَوْمِ الْقِيَامَةِ",
          "translation": "the regret of the Day of Judgement",
          "cells": [
            "نَدَامَةُ",
            "يَوْمِ",
            "الْقِيَامَةِ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
                },
                {
                  "start": 1,
                  "end": 2,
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
          "title": "Book Exercise 1 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In شَرْحُ الْمُعَلِّمِ, the مُضَافٌ إِلَيْهِ functions as…",
          "options": [
            "مَفْعُوْلٌ بِهِ",
            "فَاعِلٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "The teacher does the explaining: 'the teacher's explanation'."
        },
        {
          "title": "Book Exercise 1 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In شَرْحُ الدُّرُوْسِ, the مُضَافٌ إِلَيْهِ functions as…",
          "options": [
            "مَفْعُوْلٌ بِهِ",
            "فَاعِلٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "بَدَلٌ"
          ],
          "correct": 0,
          "explanation": "The lessons are what gets explained; a lesson cannot do the explaining."
        },
        {
          "title": "Book Exercise 1 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In صَوْمُ رَمَضَانَ, why is رَمَضَانَ a مَفْعُوْلٌ فِيْهِ in meaning?",
          "options": [
            "Because it is مَمْنُوْعٌ مِنَ الصَّرْفِ",
            "Because it names the time during which the fasting occurs",
            "Because صَوْمٌ is intransitive",
            "Because it is definite"
          ],
          "correct": 1,
          "explanation": "One does not fast Ramadan the way one drinks wine; Ramadan is when, not what."
        },
        {
          "title": "Book Exercise 1 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In جُوْعُ الْفُقَرَاءِ, why can the مُضَافٌ إِلَيْهِ only be a فَاعِل?",
          "options": [
            "Because الْفُقَرَاء is definite",
            "Because جَاعَ is intransitive and has no object to give",
            "Because جُوْعٌ is a مَصْدَرٌ",
            "Because the phrase is short"
          ],
          "correct": 1,
          "explanation": "A verb with no object cannot lend a مَفْعُوْلٌ بِهِ reading to its مَصْدَرٌ."
        },
        {
          "title": "Book Exercise 1 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In شُرْبُ الْخَمْرِ, the مُضَافٌ إِلَيْهِ is…",
          "options": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "مَفْعُوْلٌ فِيْهِ",
            "ambiguous"
          ],
          "correct": 1,
          "explanation": "Wine is what is drunk; the alternative reading is impossible."
        },
        {
          "title": "Book Exercise 1 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "Unlike شُرْبُ الْخَمْرِ, the مُضَافٌ إِلَيْهِ of اِحْتِرَامُ الْعُلَمَاءِ could be read as either فَاعِلٌ or مَفْعُوْلٌ بِهِ. Why?",
          "options": [
            "Because الْعُلَمَاء is plural",
            "Because scholars can both honour and be honoured, so either reading works",
            "Because اِحْتِرَامٌ is not a مَصْدَرٌ",
            "Because it has no مُضَافٌ إِلَيْهِ"
          ],
          "correct": 1,
          "explanation": "Where the noun is capable of doing the action and of receiving it, only context decides."
        },
        {
          "title": "Book Exercise 1 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In نَدَامَةُ يَوْمِ الْقِيَامَةِ, what is the function of يَوْمِ الْقِيَامَةِ?",
          "options": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "مَفْعُوْلٌ فِيْهِ",
            "نَعْتٌ"
          ],
          "correct": 2,
          "explanation": "'The regret of the Day of Judgement' means the regret felt on that day."
        },
        {
          "title": "Book Exercise 1 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "تَرْبِيَةُ الْأَوْلَادِ and تَرْبِيَةُ الْأَبَوَيْنِ are identical in form. What tells them apart?",
          "options": [
            "the case ending",
            "the number of the second noun",
            "which party can plausibly do the raising and which receives it",
            "the definite article"
          ],
          "correct": 2,
          "explanation": "Children are raised; parents raise — so one reads as مَفْعُوْلٌ بِهِ and the other as فَاعِلٌ."
        },
        {
          "title": "to raise, nurture",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to raise, nurture\"?",
          "options": [
            "رَبَّى يُرَبِّيْ",
            "جَاعَ يَجُوْعُ",
            "بَاعَ يَبِيْعُ",
            "سَجَدَ يَسْجُدُ"
          ],
          "correct": 0
        },
        {
          "title": "to raise, nurture",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَبَّى يُرَبِّيْ mean?",
          "options": [
            "to raise, nurture",
            "to be hungry",
            "to sell",
            "to prostrate"
          ],
          "correct": 0
        },
        {
          "title": "to raise, nurture (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَبَّى يُرَبِّيْ?",
          "options": [
            "تَرْبِيَةً",
            "جُوْعًا",
            "بَيْعًا",
            "سُجُوْدًا"
          ],
          "correct": 0
        },
        {
          "title": "to acknowledge, confess",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to acknowledge, confess\"?",
          "options": [
            "اِعْتَرَفَ يَعْتَرِفُ",
            "جَمَعَ يَجْمَعُ",
            "تَرَكَ يَتْرُكُ",
            "نَدَامَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to acknowledge, confess",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِعْتَرَفَ يَعْتَرِفُ mean?",
          "options": [
            "to acknowledge, confess",
            "to gather, collect",
            "to leave, abandon",
            "regret, remorse"
          ],
          "correct": 0
        },
        {
          "title": "to acknowledge, confess (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِعْتَرَفَ يَعْتَرِفُ?",
          "options": [
            "اِعْتِرَافًا",
            "جَمْعًا",
            "تَرْكًا",
            "تَرْبِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to honour, respect",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to honour, respect\"?",
          "options": [
            "اِحْتَرَمَ يَحْتَرِمُ",
            "بَاعَ يَبِيْعُ",
            "سَجَدَ يَسْجُدُ",
            "دُعَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "to honour, respect",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِحْتَرَمَ يَحْتَرِمُ mean?",
          "options": [
            "to honour, respect",
            "to sell",
            "to prostrate",
            "supplication"
          ],
          "correct": 0
        },
        {
          "title": "to honour, respect (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِحْتَرَمَ يَحْتَرِمُ?",
          "options": [
            "اِحْتِرَامًا",
            "بَيْعًا",
            "سُجُوْدًا",
            "اِعْتِرَافًا"
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
            "تَرَكَ يَتْرُكُ",
            "نَدَامَةٌ",
            "قِيَامٌ"
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
            "to leave, abandon",
            "regret, remorse",
            "standing (in prayer)"
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
            "تَرْكًا",
            "تَرْبِيَةً",
            "اِحْتِرَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to gather, collect",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to gather, collect\"?",
          "options": [
            "جَمَعَ يَجْمَعُ",
            "سَجَدَ يَسْجُدُ",
            "دُعَاءٌ",
            "مَصْدَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to gather, collect",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَمَعَ يَجْمَعُ mean?",
          "options": [
            "to gather, collect",
            "to prostrate",
            "supplication",
            "verbal noun"
          ],
          "correct": 0
        },
        {
          "title": "to gather, collect (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَمَعَ يَجْمَعُ?",
          "options": [
            "جَمْعًا",
            "سُجُوْدًا",
            "اِعْتِرَافًا",
            "جُوْعًا"
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
            "نَدَامَةٌ",
            "قِيَامٌ",
            "مُشْتَقٌّ"
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
            "regret, remorse",
            "standing (in prayer)",
            "derived noun"
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
            "تَرْبِيَةً",
            "اِحْتِرَامًا",
            "جَمْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to leave, abandon",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to leave, abandon\"?",
          "options": [
            "تَرَكَ يَتْرُكُ",
            "دُعَاءٌ",
            "مَصْدَرٌ",
            "إِعْرَابٌ مَحَلِّيٌّ"
          ],
          "correct": 0
        },
        {
          "title": "to leave, abandon",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَرَكَ يَتْرُكُ mean?",
          "options": [
            "to leave, abandon",
            "supplication",
            "verbal noun",
            "positional case marking"
          ],
          "correct": 0
        },
        {
          "title": "to leave, abandon (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَرَكَ يَتْرُكُ?",
          "options": [
            "تَرْكًا",
            "اِعْتِرَافًا",
            "جُوْعًا",
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
            "قِيَامٌ",
            "مُشْتَقٌّ",
            "رَبَّى يُرَبِّيْ"
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
            "standing (in prayer)",
            "derived noun",
            "to raise, nurture"
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
            "اِحْتِرَامًا",
            "جَمْعًا",
            "تَرْكًا"
          ],
          "correct": 0
        },
        {
          "title": "regret, remorse",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"regret, remorse\"?",
          "options": [
            "نَدَامَةٌ",
            "مَصْدَرٌ",
            "إِعْرَابٌ مَحَلِّيٌّ",
            "اِعْتَرَفَ يَعْتَرِفُ"
          ],
          "correct": 0
        },
        {
          "title": "regret, remorse",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَدَامَةٌ mean?",
          "options": [
            "regret, remorse",
            "verbal noun",
            "positional case marking",
            "to acknowledge, confess"
          ],
          "correct": 0
        },
        {
          "title": "regret, remorse (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَدَامَةٌ?",
          "options": [
            "—",
            "أَدْعِيَةٌ",
            "مَصَادِرُ",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "supplication",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"supplication\"?",
          "options": [
            "دُعَاءٌ",
            "مُشْتَقٌّ",
            "رَبَّى يُرَبِّيْ",
            "اِحْتَرَمَ يَحْتَرِمُ"
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
            "derived noun",
            "to raise, nurture",
            "to honour, respect"
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
            "—",
            "مُشْتَقَّاتٌ",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "standing (in prayer)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"standing (in prayer)\"?",
          "options": [
            "قِيَامٌ",
            "إِعْرَابٌ مَحَلِّيٌّ",
            "اِعْتَرَفَ يَعْتَرِفُ",
            "جَاعَ يَجُوْعُ"
          ],
          "correct": 0
        },
        {
          "title": "standing (in prayer)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قِيَامٌ mean?",
          "options": [
            "standing (in prayer)",
            "positional case marking",
            "to acknowledge, confess",
            "to be hungry"
          ],
          "correct": 0
        },
        {
          "title": "standing (in prayer) (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قِيَامٌ?",
          "options": [
            "—",
            "مَصَادِرُ",
            "—",
            "أَدْعِيَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "verbal noun",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"verbal noun\"?",
          "options": [
            "مَصْدَرٌ",
            "رَبَّى يُرَبِّيْ",
            "اِحْتَرَمَ يَحْتَرِمُ",
            "جَمَعَ يَجْمَعُ"
          ],
          "correct": 0
        },
        {
          "title": "verbal noun",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَصْدَرٌ mean?",
          "options": [
            "verbal noun",
            "to raise, nurture",
            "to honour, respect",
            "to gather, collect"
          ],
          "correct": 0
        },
        {
          "title": "verbal noun (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَصْدَرٌ?",
          "options": [
            "مَصَادِرُ",
            "مُشْتَقَّاتٌ",
            "—",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "derived noun",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"derived noun\"?",
          "options": [
            "مُشْتَقٌّ",
            "اِعْتَرَفَ يَعْتَرِفُ",
            "جَاعَ يَجُوْعُ",
            "بَاعَ يَبِيْعُ"
          ],
          "correct": 0
        },
        {
          "title": "derived noun",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُشْتَقٌّ mean?",
          "options": [
            "derived noun",
            "to acknowledge, confess",
            "to be hungry",
            "to sell"
          ],
          "correct": 0
        },
        {
          "title": "derived noun (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُشْتَقٌّ?",
          "options": [
            "مُشْتَقَّاتٌ",
            "—",
            "أَدْعِيَةٌ",
            "مَصَادِرُ"
          ],
          "correct": 0
        },
        {
          "title": "positional case marking",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"positional case marking\"?",
          "options": [
            "إِعْرَابٌ مَحَلِّيٌّ",
            "اِحْتَرَمَ يَحْتَرِمُ",
            "جَمَعَ يَجْمَعُ",
            "تَرَكَ يَتْرُكُ"
          ],
          "correct": 0
        },
        {
          "title": "positional case marking",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does إِعْرَابٌ مَحَلِّيٌّ mean?",
          "options": [
            "positional case marking",
            "to honour, respect",
            "to gather, collect",
            "to leave, abandon"
          ],
          "correct": 0
        },
        {
          "title": "positional case marking (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of إِعْرَابٌ مَحَلِّيٌّ?",
          "options": [
            "—",
            "—",
            "—",
            "مُشْتَقَّاتٌ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l2",
      "title": "نفي عبارة المصدر بعدم",
      "subtitle": "Supplement: Verbal Phrases",
      "concepts": [
        {
          "heading": "The غَيْرُ صَرِيْحٍ and مَنْصُوْبٌ slots",
          "lines": [
            {
              "html": "The مَصْدَرٌ can have regular مَنْصُوْبٌ and غَيْرُ صَرِيْحٍ slots — that is, the ordinary objects and adverbs a verb would take. These slots may occur in two ways.",
              "list": false
            },
            {
              "html": "1. After the مُضَافٌ إِلَيْهِ.",
              "list": false
            },
            {
              "html": "فَهْمُ الطَّالِبِ الدَّرْسَ — the student's understanding of the lesson",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "فَهْمُ الطَّالِبِ الدَّرْسَ",
                "translation": "the student's understanding of the lesson",
                "cells": [
                  "فَهْمُ",
                  "الطَّالِبِ",
                  "الدَّرْسَ"
                ],
                "rows": [
                  {
                    "position": "above",
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
                        "start": 0,
                        "end": 0,
                        "role": "مَصْدَرٌ"
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
              "html": "Here the مَصْدَرٌ has both a doer and an object, exactly as the verb فَهِمَ الطَّالِبُ الدَّرْسَ would. The only difference is that the doer appears as a مُضَافٌ إِلَيْهِ rather than as a مَرْفُوْع noun.",
              "list": false
            },
            {
              "html": "2. Immediately after the مَصْدَرٌ, with no مُضَافٌ إِلَيْهِ in between.",
              "list": false
            },
            {
              "html": "طَلَبٌ لِلْعِلْمِ — seeking knowledge",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "طَلَبٌ لِلْعِلْمِ",
                "translation": "seeking knowledge",
                "cells": [
                  "طَلَبٌ",
                  "لِلْعِلْمِ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "جَارٌّ وَمَجْرُوْرٌ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "مَصْدَرٌ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "The مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ in a verbal phrase is commonly formed with the حَرْفٌ جَارٌّ of لِ. So فَهْمُ الطَّالِبِ لِلدَّرْسِ carries the same meaning as فَهْمُ الطَّالِبِ الدَّرْسَ — 'the student's understanding of the lesson'. The لِ is a device for attaching a second noun once the مُضَافٌ إِلَيْهِ slot is already taken.",
              "list": false
            },
            {
              "html": "This is worth dwelling on, because a مَصْدَرٌ can only have one مُضَافٌ إِلَيْهِ. When both a doer and an object need to be expressed, one of two things happens: either the object comes مَنْصُوْبٌ after the مُضَافٌ إِلَيْهِ, or it comes مَجْرُوْرٌ with لِ. Both are correct and both are common.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Since a مَصْدَرٌ can only have ONE مُضَافٌ إِلَيْهِ, how does the phrase express a doer AND an object together؟",
            "kind": "mcq",
            "options": [
              "The object comes مَنْصُوْبٌ after the مُضَافٌ إِلَيْهِ, or it comes مَجْرُوْرٌ attached with لِ",
              "It simply cannot express both at once",
              "The doer is always dropped in that case",
              "Both must be expressed as two separate مُضَافٌ إِلَيْهِ nouns"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Negating a verbal phrase — عَدَمٌ",
          "lines": [
            {
              "html": "A verbal phrase with a مَصْدَرٌ can be made negative by adding the word عَدَمٌ before it. عَدَمٌ literally means 'absence', and it becomes the مُضَافٌ, with the whole phrase after it as its مُضَافٌ إِلَيْهِ.",
              "list": false
            },
            {
              "html": "عَدَمُ الْفَهْمِ لِلدَّرْسِ — not understanding the lesson",
              "list": true,
              "bullet": true
            },
            {
              "html": "عَدَمُ اسْتِقْبَالِ الْقِبْلَةِ لِلصَّلَاةِ — not facing the Qiblah for the prayer",
              "list": true,
              "bullet": true
            },
            {
              "html": "عَدَمُ احْتِرَامِ الطُّلَّابِ لِأَسَاتِذَتِهِمْ — the students' not respecting their teachers",
              "list": true,
              "bullet": true
            },
            {
              "html": "English has no single word for this, so the translation usually becomes a gerund with 'not' in front of it. Notice too that عَدَمٌ takes the whole phrase into the مَجْرُوْر state, so the مَصْدَرٌ itself now carries a kasrah: عَدَمُ الْفَهْمِ, not عَدَمُ الْفَهْمُ.",
              "list": false
            },
            {
              "table": {
                "title": "Building up a مَصْدَر verbal phrase",
                "headers": [
                  "Form",
                  "Example",
                  "Meaning"
                ],
                "rows": [
                  [
                    "مَصْدَرٌ alone",
                    "طَلَبٌ",
                    "seeking"
                  ],
                  [
                    "+ غَيْرُ صَرِيْحٍ object",
                    "طَلَبٌ لِلْعِلْمِ",
                    "seeking knowledge"
                  ],
                  [
                    "+ مُضَافٌ إِلَيْهِ as فَاعِلٌ",
                    "فَهْمُ الطَّالِبِ",
                    "the student's understanding"
                  ],
                  [
                    "+ both",
                    "فَهْمُ الطَّالِبِ الدَّرْسَ",
                    "the student's understanding of the lesson"
                  ],
                  [
                    "+ both, with لِ",
                    "فَهْمُ الطَّالِبِ لِلدَّرْسِ",
                    "the same"
                  ],
                  [
                    "negated",
                    "عَدَمُ الْفَهْمِ لِلدَّرْسِ",
                    "not understanding the lesson"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "How is a مَصْدَر verbal phrase negated, and what does that do to its case؟",
            "kind": "mcq",
            "options": [
              "By adding عَدَمٌ before it as the مُضَافٌ, which puts the whole phrase into the مَجْرُوْرٌ state",
              "By adding لَا directly before the مَصْدَرٌ with no change to its case",
              "By adding لَمْ before the مَصْدَرٌ",
              "A مَصْدَر verbal phrase cannot be negated"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The remaining slots of a مَصْدَر phrase",
        "rows": [
          {
            "label": "Position 1",
            "arabic": "after the مُضَافٌ إِلَيْهِ",
            "meaning": "فَهْمُ الطَّالِبِ الدَّرْسَ"
          },
          {
            "label": "Position 2",
            "arabic": "immediately after the مَصْدَرٌ",
            "meaning": "طَلَبٌ لِلْعِلْمِ"
          },
          {
            "label": "The لِ",
            "arabic": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ",
            "meaning": "the usual way of attaching an object once إِضَافَة is used up"
          },
          {
            "label": "Equivalent forms",
            "arabic": "فَهْمُ الطَّالِبِ الدَّرْسَ / لِلدَّرْسِ",
            "meaning": "both mean 'the student's understanding of the lesson'"
          },
          {
            "label": "Negation",
            "arabic": "عَدَمٌ",
            "meaning": "عَدَمُ الْفَهْمِ لِلدَّرْسِ — 'not understanding the lesson'"
          },
          {
            "label": "Effect of عَدَمٌ",
            "arabic": "the phrase becomes مَجْرُوْرٌ",
            "meaning": "عَدَمُ الْفَهْمِ, with a kasrah on the مَصْدَرٌ"
          }
        ]
      },
      "quiz": [
        {
          "q": "In how many positions can a مَنْصُوْبٌ or غَيْرُ صَرِيْحٍ slot occur in a مَصْدَر phrase?",
          "options": [
            "one",
            "two",
            "three",
            "four"
          ],
          "correct": 1,
          "explanation": "After the مُضَافٌ إِلَيْهِ, or immediately after the مَصْدَرٌ."
        },
        {
          "q": "In فَهْمُ الطَّالِبِ الدَّرْسَ, what is الدَّرْسَ?",
          "options": [
            "مَفْعُوْلٌ بِهِ",
            "مُضَافٌ إِلَيْهِ",
            "فَاعِلٌ",
            "تَمْيِيْزٌ"
          ],
          "correct": 0,
          "explanation": "The مُضَافٌ إِلَيْهِ slot is taken by الطَّالِبِ, so the object follows مَنْصُوْبٌ."
        },
        {
          "q": "Which حَرْفٌ جَارٌّ commonly forms the object of a verbal phrase?",
          "options": [
            "بِ",
            "مِنْ",
            "لِ",
            "عَنْ"
          ],
          "correct": 2,
          "explanation": "طَلَبٌ لِلْعِلْمِ, فَهْمُ الطَّالِبِ لِلدَّرْسِ."
        },
        {
          "q": "Why is a لِ needed in فَهْمُ الطَّالِبِ لِلدَّرْسِ?",
          "options": [
            "Because فَهْمٌ is intransitive",
            "Because a مَصْدَرٌ can have only one مُضَافٌ إِلَيْهِ, which الطَّالِبِ has taken",
            "Because الدَّرْس is definite",
            "Because the phrase is negative"
          ],
          "correct": 1,
          "explanation": "The preposition provides a second attachment point."
        },
        {
          "q": "How is a مَصْدَر verbal phrase made negative?",
          "options": [
            "with عَدَمٌ before it",
            "with لَا before it",
            "with مَا before it",
            "with لَمْ before it"
          ],
          "correct": 0,
          "explanation": "عَدَمُ الْفَهْمِ لِلدَّرْسِ — 'not understanding the lesson'."
        },
        {
          "q": "What happens to the مَصْدَرٌ when عَدَمٌ is added?",
          "options": [
            "It becomes مَنْصُوْبٌ",
            "It stays مَرْفُوْعٌ",
            "It loses its ال",
            "It becomes مَجْرُوْرٌ, as the مُضَافٌ إِلَيْهِ of عَدَمٌ"
          ],
          "correct": 3,
          "explanation": "عَدَمٌ becomes the مُضَافٌ and the whole phrase its possessor."
        }
      ],
      "bank": [
        {
          "title": "فَهْمُ الطَّالِبِ الدَّرْسَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Supplement)",
          "sentence": "فَهْمُ الطَّالِبِ الدَّرْسَ",
          "translation": "the student's understanding of the lesson",
          "cells": [
            "فَهْمُ",
            "الطَّالِبِ",
            "الدَّرْسَ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
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
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "طَلَبٌ لِلْعِلْمِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Supplement)",
          "sentence": "طَلَبٌ لِلْعِلْمِ",
          "translation": "seeking knowledge",
          "cells": [
            "طَلَبٌ",
            "لِلْعِلْمِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مُضَافٌ إِلَيْهِ",
            "فَاعِلٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ"
          ]
        },
        {
          "title": "عَدَمُ الْفَهْمِ لِلدَّرْسِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Supplement)",
          "sentence": "عَدَمُ الْفَهْمِ لِلدَّرْسِ",
          "translation": "not understanding the lesson",
          "cells": [
            "عَدَمُ",
            "الْفَهْمِ",
            "لِلدَّرْسِ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "role": "مَصْدَرٌ"
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
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْذَارُ الْأَنْبِيَاءِ النَّاسَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Supplement)",
          "sentence": "إِنْذَارُ الْأَنْبِيَاءِ النَّاسَ",
          "translation": "the prophets' warning of the people",
          "cells": [
            "إِنْذَارُ",
            "الْأَنْبِيَاءِ",
            "النَّاسَ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
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
            "مَفْعُوْلٌ فِيْهِ",
            "تَمْيِيْزٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "إِضْلَالُ الشَّيْطَانِ لِلنَّاسِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Supplement)",
          "sentence": "إِضْلَالُ الشَّيْطَانِ لِلنَّاسِ",
          "translation": "Satan's leading of the people astray",
          "cells": [
            "إِضْلَالُ",
            "الشَّيْطَانِ",
            "لِلنَّاسِ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "start": 2,
                  "end": 2,
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
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
          "title": "مَرَضُ الْجَدِّ قَبْلَ مَوْتِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Supplement)",
          "sentence": "مَرَضُ الْجَدِّ قَبْلَ مَوْتِهِ",
          "translation": "the grandfather's illness before his death",
          "cells": [
            "مَرَضُ",
            "الْجَدِّ",
            "قَبْلَ",
            "مَوْتِهِ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
                },
                {
                  "start": 1,
                  "end": 1,
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
          "title": "وَعْدُ اللهِ الْمُحْسِنِيْنَ الْجَنَّةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Supplement)",
          "sentence": "وَعْدُ اللهِ الْمُحْسِنِيْنَ الْجَنَّةَ",
          "translation": "Allah's promise of Paradise to those who do good",
          "cells": [
            "وَعْدُ",
            "اللهِ",
            "الْمُحْسِنِيْنَ",
            "الْجَنَّةَ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
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
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "اِبْتِسَامُكِ فِيْ وَجْهِ أَبِيْكِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Supplement)",
          "sentence": "اِبْتِسَامُكِ فِيْ وَجْهِ أَبِيْكِ",
          "translation": "your (f) smiling in your father's face",
          "cells": [
            "اِبْتِسَامُ",
            "كِ",
            "فِيْ وَجْهِ أَبِيْكِ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "start": 2,
                  "end": 2,
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
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
          "title": "بَعْثُ اللهِ الرُّسُلَ لِهِدَايَةِ النَّاسِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Supplement)",
          "sentence": "بَعْثُ اللهِ الرُّسُلَ لِهِدَايَةِ النَّاسِ",
          "translation": "Allah's sending of the messengers to guide the people",
          "cells": [
            "بَعْثُ",
            "اللهِ",
            "الرُّسُلَ",
            "لِهِدَايَةِ النَّاسِ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
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
                  "role": "مَفْعُوْلٌ لَهُ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "عَدَمُ احْتِرَامِ الطُّلَّابِ لِأَسَاتِذَتِهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Supplement)",
          "sentence": "عَدَمُ احْتِرَامِ الطُّلَّابِ لِأَسَاتِذَتِهِمْ",
          "translation": "the students' not respecting their teachers",
          "cells": [
            "عَدَمُ",
            "احْتِرَامِ",
            "الطُّلَّابِ",
            "لِأَسَاتِذَتِهِمْ"
          ],
          "rows": [
            {
              "position": "above",
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
                  "role": "مَصْدَرٌ وَمُضَافٌ"
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
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "Book Exercise 2 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In إِنْذَارُ الْأَنْبِيَاءِ النَّاسَ, what are the two slots after the مَصْدَرٌ?",
          "options": [
            "two مُضَافٌ إِلَيْهِ",
            "a فَاعِلٌ as مُضَافٌ إِلَيْهِ and a مَنْصُوْب مَفْعُوْلٌ بِهِ",
            "two objects, both مَنْصُوْبٌ",
            "a مَفْعُوْلٌ فِيْهِ and a حَالٌ"
          ],
          "correct": 1,
          "explanation": "'The prophets' warning of the people' — الْأَنْبِيَاءِ warn, النَّاسَ are warned."
        },
        {
          "title": "Book Exercise 2 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In وَعْدُ اللهِ الْمُحْسِنِيْنَ الْجَنَّةَ, how many مَنْصُوْب slots follow the مُضَافٌ إِلَيْهِ?",
          "options": [
            "none",
            "one",
            "two",
            "three"
          ],
          "correct": 2,
          "explanation": "وَعَدَ takes two objects, and the مَصْدَرٌ keeps both: those promised, and what is promised."
        },
        {
          "title": "Book Exercise 2 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In نَوْمِيْ قَبْلَ صَلَاةِ الظُّهْرِ, what is the مُضَافٌ إِلَيْهِ of the مَصْدَرٌ?",
          "options": [
            "قَبْلَ",
            "صَلَاةِ",
            "the attached pronoun يْ",
            "الظُّهْرِ"
          ],
          "correct": 2,
          "explanation": "'My sleeping' — the pronoun is the فَاعِل in meaning; قَبْلَ … is a separate adverbial slot."
        },
        {
          "title": "Book Exercise 2 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In كُفْرُ النَّاسِ لِنِعَمِ اللهِ, what does the لِ carry?",
          "options": [
            "the فَاعِلٌ",
            "the مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ",
            "a مَفْعُوْلٌ فِيْهِ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "النَّاسِ is already the مُضَافٌ إِلَيْهِ, so the object is attached with لِ."
        },
        {
          "title": "Book Exercise 2 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In عَطَشُ الصَّائِمِيْنَ أَيَّامَ رَمَضَانَ, what is أَيَّامَ رَمَضَانَ?",
          "options": [
            "مَفْعُوْلٌ بِهِ",
            "مَفْعُوْلٌ فِيْهِ",
            "تَمْيِيْزٌ",
            "حَالٌ"
          ],
          "correct": 1,
          "explanation": "A time adverb belonging to the مَصْدَرٌ: 'the fasting people's thirst during the days of Ramadan'."
        },
        {
          "title": "Book Exercise 2 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In اِعْتِرَافُ الْمُذْنِبِيْنَ بِذُنُوْبِهِمْ, why is the object formed with بِ rather than لِ?",
          "options": [
            "Because the مَصْدَرٌ is long",
            "Because the underlying verb اِعْتَرَفَ itself takes بِ",
            "Because الْمُذْنِبِيْنَ is plural",
            "Because the phrase is negative"
          ],
          "correct": 1,
          "explanation": "The verbal phrase keeps whatever preposition its verb ordinarily uses."
        },
        {
          "title": "Book Exercise 2 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In حُزْنُ الْأُمِّ عَلَى أُمِّهَا بَعْدَ مَوْتِهَا, how many slots does the مَصْدَرٌ have?",
          "options": [
            "one",
            "two",
            "three",
            "four"
          ],
          "correct": 2,
          "explanation": "A فَاعِل as مُضَافٌ إِلَيْهِ, a غَيْرُ صَرِيْحٍ object with عَلَى, and a مَفْعُوْلٌ فِيْهِ."
        },
        {
          "title": "Book Exercise 2 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "عَدَمُ احْتِرَامِ الطُّلَّابِ لِأَسَاتِذَتِهِمْ contains all three of…",
          "options": [
            "negation, a فَاعِل as مُضَافٌ إِلَيْهِ, and an object with لِ",
            "negation, two objects, and an adverb",
            "two مَصْدَرٌ words and a حَالٌ",
            "an اِسْمُ فَاعِلٍ and two objects"
          ],
          "correct": 0,
          "explanation": "عَدَمُ negates; الطُّلَّابِ are the ones doing the respecting; لِأَسَاتِذَتِهِمْ carries the object."
        },
        {
          "title": "to repel, push away",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to repel, push away\"?",
          "options": [
            "دَفَعَ يَدْفَعُ",
            "بَعَثَ يَبْعَثُ",
            "وَعَدَ يَعِدُ",
            "عَدَمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to repel, push away",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَفَعَ يَدْفَعُ mean?",
          "options": [
            "to repel, push away",
            "to send, raise up",
            "to promise",
            "absence, non-existence"
          ],
          "correct": 0
        },
        {
          "title": "to repel, push away (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of دَفَعَ يَدْفَعُ?",
          "options": [
            "دَفْعًا",
            "بَعْثًا",
            "وَعْدًا",
            "إِقَامَةً"
          ],
          "correct": 0
        },
        {
          "title": "to establish",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to establish\"?",
          "options": [
            "أَقَامَ يُقِيْمُ",
            "اِسْتَقْبَلَ يَسْتَقْبِلُ",
            "كَفَرَ يَكْفُرُ",
            "فِتْنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to establish",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَقَامَ يُقِيْمُ mean?",
          "options": [
            "to establish",
            "to face, turn towards",
            "to be ungrateful, disbelieve",
            "trial, tribulation"
          ],
          "correct": 0
        },
        {
          "title": "to establish (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَقَامَ يُقِيْمُ?",
          "options": [
            "إِقَامَةً",
            "اِسْتِقْبَالًا",
            "كُفْرًا",
            "إِيْتَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to give, bring",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give, bring\"?",
          "options": [
            "آتَى يُؤْتِيْ",
            "وَعَدَ يَعِدُ",
            "عَدَمٌ",
            "مَرْءٌ"
          ],
          "correct": 0
        },
        {
          "title": "to give, bring",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آتَى يُؤْتِيْ mean?",
          "options": [
            "to give, bring",
            "to promise",
            "absence, non-existence",
            "person, man"
          ],
          "correct": 0
        },
        {
          "title": "to give, bring (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آتَى يُؤْتِيْ?",
          "options": [
            "إِيْتَاءً",
            "وَعْدًا",
            "دَفْعًا",
            "بَعْثًا"
          ],
          "correct": 0
        },
        {
          "title": "to send, raise up",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to send, raise up\"?",
          "options": [
            "بَعَثَ يَبْعَثُ",
            "كَفَرَ يَكْفُرُ",
            "فِتْنَةٌ",
            "غَنِيٌّ"
          ],
          "correct": 0
        },
        {
          "title": "to send, raise up",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَعَثَ يَبْعَثُ mean?",
          "options": [
            "to send, raise up",
            "to be ungrateful, disbelieve",
            "trial, tribulation",
            "the rich"
          ],
          "correct": 0
        },
        {
          "title": "to send, raise up (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَعَثَ يَبْعَثُ?",
          "options": [
            "بَعْثًا",
            "كُفْرًا",
            "إِقَامَةً",
            "اِسْتِقْبَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to face, turn towards",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to face, turn towards\"?",
          "options": [
            "اِسْتَقْبَلَ يَسْتَقْبِلُ",
            "عَدَمٌ",
            "مَرْءٌ",
            "مُذْنِبٌ"
          ],
          "correct": 0
        },
        {
          "title": "to face, turn towards",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَقْبَلَ يَسْتَقْبِلُ mean?",
          "options": [
            "to face, turn towards",
            "absence, non-existence",
            "person, man",
            "sinner"
          ],
          "correct": 0
        },
        {
          "title": "to face, turn towards (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَقْبَلَ يَسْتَقْبِلُ?",
          "options": [
            "اِسْتِقْبَالًا",
            "دَفْعًا",
            "إِيْتَاءً",
            "وَعْدًا"
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
            "فِتْنَةٌ",
            "غَنِيٌّ",
            "جَدٌّ"
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
            "trial, tribulation",
            "the rich",
            "grandfather"
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
            "إِقَامَةً",
            "بَعْثًا",
            "كُفْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to be ungrateful, disbelieve",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be ungrateful, disbelieve\"?",
          "options": [
            "كَفَرَ يَكْفُرُ",
            "مَرْءٌ",
            "مُذْنِبٌ",
            "هِدَايَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be ungrateful, disbelieve",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَفَرَ يَكْفُرُ mean?",
          "options": [
            "to be ungrateful, disbelieve",
            "person, man",
            "sinner",
            "guidance"
          ],
          "correct": 0
        },
        {
          "title": "to be ungrateful, disbelieve (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَفَرَ يَكْفُرُ?",
          "options": [
            "كُفْرًا",
            "إِيْتَاءً",
            "اِسْتِقْبَالًا",
            "دَفْعًا"
          ],
          "correct": 0
        },
        {
          "title": "absence, non-existence",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"absence, non-existence\"?",
          "options": [
            "عَدَمٌ",
            "غَنِيٌّ",
            "جَدٌّ",
            "زَمَنٌ"
          ],
          "correct": 0
        },
        {
          "title": "absence, non-existence",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَدَمٌ mean?",
          "options": [
            "absence, non-existence",
            "the rich",
            "grandfather",
            "time, era"
          ],
          "correct": 0
        },
        {
          "title": "absence, non-existence (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَدَمٌ?",
          "options": [
            "—",
            "—",
            "مُذْنِبُوْنَ",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "trial, tribulation",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"trial, tribulation\"?",
          "options": [
            "فِتْنَةٌ",
            "مُذْنِبٌ",
            "هِدَايَةٌ",
            "عَطَشٌ"
          ],
          "correct": 0
        },
        {
          "title": "trial, tribulation",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فِتْنَةٌ mean?",
          "options": [
            "trial, tribulation",
            "sinner",
            "guidance",
            "thirst"
          ],
          "correct": 0
        },
        {
          "title": "trial, tribulation (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of فِتْنَةٌ?",
          "options": [
            "فِتَنٌ",
            "أَغْنِيَاءُ",
            "أَجْدَادٌ",
            "أَزْمَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "person, man",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"person, man\"?",
          "options": [
            "مَرْءٌ",
            "جَدٌّ",
            "زَمَنٌ",
            "دَفَعَ يَدْفَعُ"
          ],
          "correct": 0
        },
        {
          "title": "person, man",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَرْءٌ mean?",
          "options": [
            "person, man",
            "grandfather",
            "time, era",
            "to repel, push away"
          ],
          "correct": 0
        },
        {
          "title": "person, man (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَرْءٌ?",
          "options": [
            "—",
            "مُذْنِبُوْنَ",
            "—",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "the rich",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"the rich\"?",
          "options": [
            "غَنِيٌّ",
            "هِدَايَةٌ",
            "عَطَشٌ",
            "أَقَامَ يُقِيْمُ"
          ],
          "correct": 0
        },
        {
          "title": "the rich",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَنِيٌّ mean?",
          "options": [
            "the rich",
            "guidance",
            "thirst",
            "to establish"
          ],
          "correct": 0
        },
        {
          "title": "the rich (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of غَنِيٌّ?",
          "options": [
            "أَغْنِيَاءُ",
            "أَجْدَادٌ",
            "أَزْمَانٌ",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "sinner",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sinner\"?",
          "options": [
            "مُذْنِبٌ",
            "زَمَنٌ",
            "دَفَعَ يَدْفَعُ",
            "آتَى يُؤْتِيْ"
          ],
          "correct": 0
        },
        {
          "title": "sinner",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُذْنِبٌ mean?",
          "options": [
            "sinner",
            "time, era",
            "to repel, push away",
            "to give, bring"
          ],
          "correct": 0
        },
        {
          "title": "sinner (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُذْنِبٌ?",
          "options": [
            "مُذْنِبُوْنَ",
            "—",
            "—",
            "فِتَنٌ"
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
            "عَطَشٌ",
            "أَقَامَ يُقِيْمُ",
            "بَعَثَ يَبْعَثُ"
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
            "thirst",
            "to establish",
            "to send, raise up"
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
            "أَزْمَانٌ",
            "—",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "guidance",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"guidance\"?",
          "options": [
            "هِدَايَةٌ",
            "دَفَعَ يَدْفَعُ",
            "آتَى يُؤْتِيْ",
            "اِسْتَقْبَلَ يَسْتَقْبِلُ"
          ],
          "correct": 0
        },
        {
          "title": "guidance",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does هِدَايَةٌ mean?",
          "options": [
            "guidance",
            "to repel, push away",
            "to give, bring",
            "to face, turn towards"
          ],
          "correct": 0
        },
        {
          "title": "guidance (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of هِدَايَةٌ?",
          "options": [
            "—",
            "—",
            "فِتَنٌ",
            "أَغْنِيَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "time, era",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"time, era\"?",
          "options": [
            "زَمَنٌ",
            "أَقَامَ يُقِيْمُ",
            "بَعَثَ يَبْعَثُ",
            "وَعَدَ يَعِدُ"
          ],
          "correct": 0
        },
        {
          "title": "time, era",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does زَمَنٌ mean?",
          "options": [
            "time, era",
            "to establish",
            "to send, raise up",
            "to promise"
          ],
          "correct": 0
        },
        {
          "title": "time, era (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of زَمَنٌ?",
          "options": [
            "أَزْمَانٌ",
            "—",
            "—",
            "مُذْنِبُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "thirst",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"thirst\"?",
          "options": [
            "عَطَشٌ",
            "آتَى يُؤْتِيْ",
            "اِسْتَقْبَلَ يَسْتَقْبِلُ",
            "كَفَرَ يَكْفُرُ"
          ],
          "correct": 0
        },
        {
          "title": "thirst",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَطَشٌ mean?",
          "options": [
            "thirst",
            "to give, bring",
            "to face, turn towards",
            "to be ungrateful, disbelieve"
          ],
          "correct": 0
        },
        {
          "title": "thirst (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَطَشٌ?",
          "options": [
            "—",
            "فِتَنٌ",
            "أَغْنِيَاءُ",
            "أَجْدَادٌ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l3",
      "title": "استعمال عبارة المصدر",
      "subtitle": "Supplement: Verbal Phrases",
      "concepts": [
        {
          "heading": "A مَصْدَر phrase as a slot of the sentence",
          "lines": [
            {
              "html": "The previous two lessons built the مَصْدَر verbal phrase from the inside. This lesson places it in a sentence. The rule is short: a مَصْدَر verbal phrase occurs as one of the main slots of a sentence — exactly as any noun would.",
              "list": false
            },
            {
              "html": "شُرْبُ الْخَمْرِ حَرَامٌ — Drinking alcohol is forbidden.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "شُرْبُ الْخَمْرِ حَرَامٌ",
                "translation": "Drinking alcohol is forbidden.",
                "cells": [
                  "شُرْبُ",
                  "الْخَمْرِ",
                  "حَرَامٌ"
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
                        "start": 0,
                        "end": 0,
                        "role": "مَصْدَرٌ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "مَفْعُوْلٌ بِهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Two levels of analysis sit on top of one another. At the sentence level, شُرْبُ الْخَمْرِ is simply the مُبْتَدَأٌ and حَرَامٌ its خَبَرٌ. Inside the phrase, شُرْبُ is a مَصْدَرٌ and الْخَمْرِ its مَفْعُوْلٌ بِهِ, expressed as a مُضَافٌ إِلَيْهِ. Neither level interferes with the other.",
              "list": false
            },
            {
              "html": "Any slot a noun can fill is open to the phrase. In سَأَنْتَظِرُ رُجُوْعَكَ مِنَ السُّوْقِ it is the مَفْعُوْلٌ بِهِ; in أَغْضَبَنِيْ عَدَمُ احْتِرَامِ الطُّلَّابِ it is the فَاعِلٌ; in نَهَى رَسُوْلُ اللهِ ﷺ عَنْ ضَرْبِ الْوَجْهِ it is a مَجْرُوْرٌ; in مِنَ السُّنَّةِ بَدْءُ كُلِّ شَيْءٍ بِاسْمِ اللهِ it is the مُبْتَدَأٌ مُؤَخَّرٌ.",
              "list": false
            },
            {
              "table": {
                "title": "The مَصْدَر phrase in different slots",
                "headers": [
                  "Slot",
                  "Example",
                  "Meaning"
                ],
                "rows": [
                  [
                    "مُبْتَدَأٌ",
                    "شُرْبُ الْخَمْرِ حَرَامٌ",
                    "Drinking alcohol is forbidden"
                  ],
                  [
                    "مُبْتَدَأٌ مُؤَخَّرٌ",
                    "مِنَ السُّنَّةِ بَدْءُ كُلِّ شَيْءٍ بِاسْمِ اللهِ",
                    "It is from the Sunnah to begin everything with Allah's name"
                  ],
                  [
                    "خَبَرٌ",
                    "اَلْغِيْبَةُ ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ",
                    "Backbiting is your mentioning your brother with what he dislikes"
                  ],
                  [
                    "فَاعِلٌ",
                    "أَغْضَبَنِيْ عَدَمُ احْتِرَامِ الطُّلَّابِ",
                    "The students' lack of respect angered me"
                  ],
                  [
                    "مَفْعُوْلٌ بِهِ",
                    "سَأَنْتَظِرُ رُجُوْعَكَ مِنَ السُّوْقِ",
                    "I will wait for your return from the market"
                  ],
                  [
                    "مَجْرُوْرٌ",
                    "نَهَى … عَنْ ضَرْبِ الْوَجْهِ",
                    "He forbade striking the face"
                  ]
                ]
              }
            },
            {
              "html": "Notice how naturally this maps onto English. A مَصْدَر phrase almost always becomes an English gerund — 'drinking alcohol', 'your return', 'striking the face', 'mentioning your brother'. Once you see the gerund in the English, you can be fairly confident there is a مَصْدَر phrase in the Arabic.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is the rule for where a مَصْدَر verbal phrase can occur in a sentence؟",
            "kind": "mcq",
            "options": [
              "It occurs as any of the main slots a noun can fill — مُبْتَدَأٌ, خَبَرٌ, فَاعِلٌ, مَفْعُوْلٌ بِهِ, مَجْرُوْرٌ, etc.",
              "It can only ever be the خَبَرٌ",
              "It can only be the مَفْعُوْلٌ بِهِ",
              "It cannot fill any main sentence slot, only phrase slots"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Definitions built on a مَصْدَر phrase",
          "lines": [
            {
              "html": "One use deserves separate mention. A مَصْدَر phrase is the standard way of stating a definition, because a definition names an action rather than a thing. The pattern is a definite noun as مُبْتَدَأٌ and a مَصْدَر phrase as خَبَرٌ.",
              "list": false
            },
            {
              "html": "اَلْغِيْبَةُ ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ — Backbiting is your mentioning your brother with what he dislikes.",
              "list": true,
              "bullet": true
            },
            {
              "html": "Here the خَبَرٌ is a full مَصْدَر phrase: ذِكْرُ is the مَصْدَرٌ, the كَ is its فَاعِلٌ as مُضَافٌ إِلَيْهِ, أَخَاكَ is its مَفْعُوْلٌ بِهِ, and بِمَا يَكْرَهُ is a شِبْهُ جُمْلَةٍ attached to it. Four slots, no verb.",
              "list": false
            },
            {
              "html": "The same shape appears in اَلْبِرُّ أَنْ تُطِيْعَ أَبَاكَ from Part 8. Arabic has two ways of saying 'X is to do Y': a مَصْدَر phrase, or an أَنْ clause. They are interchangeable in most definitions, which is worth knowing when you come to write your own.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Why is a مَصْدَر phrase the standard way of stating a definition, as in اَلْغِيْبَةُ ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ؟",
            "kind": "mcq",
            "options": [
              "A definition names an action rather than a thing, and a مَصْدَر phrase does exactly that as the خَبَرٌ of a definite مُبْتَدَأٌ",
              "Because مَصْدَر phrases are always شِبْهُ جُمْلَةٍ",
              "Because definitions must always be negative",
              "Because a مَصْدَر phrase can never be a خَبَرٌ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The مَصْدَر phrase inside a sentence",
        "rows": [
          {
            "label": "The rule",
            "arabic": "one of the main slots",
            "meaning": "the phrase behaves as a single noun"
          },
          {
            "label": "Book example",
            "arabic": "شُرْبُ الْخَمْرِ حَرَامٌ",
            "meaning": "'Drinking alcohol is forbidden'"
          },
          {
            "label": "Two levels",
            "arabic": "sentence, then phrase",
            "meaning": "مُبْتَدَأٌ / خَبَرٌ above; مَصْدَرٌ / مَفْعُوْلٌ بِهِ below"
          },
          {
            "label": "Common slots",
            "arabic": "مُبْتَدَأٌ, خَبَرٌ, فَاعِلٌ, مَفْعُوْلٌ بِهِ, مَجْرُوْرٌ",
            "meaning": "all appear in Exercise 3"
          },
          {
            "label": "In English",
            "arabic": "a gerund",
            "meaning": "'drinking', 'your return', 'striking the face'"
          },
          {
            "label": "Definitions",
            "arabic": "اَلْغِيْبَةُ ذِكْرُكَ أَخَاكَ …",
            "meaning": "the standard shape for defining an action"
          }
        ]
      },
      "quiz": [
        {
          "q": "Where does a مَصْدَر verbal phrase occur in a sentence?",
          "options": [
            "only as the مُبْتَدَأٌ",
            "only after a preposition",
            "as one of the main slots, like any noun",
            "only as the خَبَرٌ"
          ],
          "correct": 2,
          "explanation": "The phrase behaves as a single noun and takes whatever slot a noun could take."
        },
        {
          "q": "In شُرْبُ الْخَمْرِ حَرَامٌ, what is the whole phrase شُرْبُ الْخَمْرِ?",
          "options": [
            "خَبَرٌ",
            "مُبْتَدَأٌ",
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ"
          ],
          "correct": 1,
          "explanation": "حَرَامٌ is the خَبَرٌ; the phrase before it is the subject."
        },
        {
          "q": "Within شُرْبُ الْخَمْرِ, what is الْخَمْرِ?",
          "options": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "خَبَرٌ",
            "مَفْعُوْلٌ بِهِ, expressed as a مُضَافٌ إِلَيْهِ"
          ],
          "correct": 3,
          "explanation": "Alcohol is what is drunk, so the possessor carries an object meaning."
        },
        {
          "q": "How does a مَصْدَر phrase usually come out in English?",
          "options": [
            "as a relative clause",
            "as a gerund",
            "as an adjective",
            "as a question"
          ],
          "correct": 1,
          "explanation": "'Drinking alcohol', 'your return', 'striking the face'."
        },
        {
          "q": "Why is a مَصْدَر phrase the natural shape for a definition?",
          "options": [
            "Because it is always definite",
            "Because a definition names an action rather than a thing",
            "Because it must be the خَبَرٌ",
            "Because it cannot be negated"
          ],
          "correct": 1,
          "explanation": "اَلْغِيْبَةُ ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ defines an act by naming it."
        },
        {
          "q": "Which other structure can replace a مَصْدَر phrase in a definition?",
          "options": [
            "an أَنْ clause",
            "a مَا clause",
            "a كَيْ clause",
            "a نَعْت sentence"
          ],
          "correct": 0,
          "explanation": "اَلْبِرُّ أَنْ تُطِيْعَ أَبَاكَ from Part 8 has the same shape and meaning."
        }
      ],
      "bank": [
        {
          "title": "شُرْبُ الْخَمْرِ حَرَامٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Supplement)",
          "sentence": "شُرْبُ الْخَمْرِ حَرَامٌ",
          "translation": "Drinking alcohol is forbidden.",
          "cells": [
            "شُرْبُ",
            "الْخَمْرِ",
            "حَرَامٌ"
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
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
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
            "فَاعِلٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "سَأَنْتَظِرُ رُجُوْعَكَ مِنَ السُّوْقِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Supplement)",
          "sentence": "سَأَنْتَظِرُ رُجُوْعَكَ مِنَ السُّوْقِ",
          "translation": "I will wait for your return from the market.",
          "cells": [
            "سَأَنْتَظِرُ",
            "رُجُوْعَ",
            "كَ",
            "مِنَ السُّوْقِ"
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
                  "role": "مَصْدَرٌ"
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
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اَلْغِيْبَةُ ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Supplement)",
          "sentence": "اَلْغِيْبَةُ ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ",
          "translation": "Backbiting is your mentioning your brother with what he dislikes.",
          "cells": [
            "اَلْغِيْبَةُ",
            "ذِكْرُ",
            "كَ",
            "أَخَاكَ",
            "بِمَا يَكْرَهُ"
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
                  "start": 1,
                  "end": 1,
                  "role": "مَصْدَرٌ"
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
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
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
          "title": "إِنَّ كَثْرَةَ الْكَلَامِ تَضْيِيْعٌ لِلْوَقْتِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Supplement)",
          "sentence": "إِنَّ كَثْرَةَ الْكَلَامِ تَضْيِيْعٌ لِلْوَقْتِ",
          "translation": "Excessive speech is a wasting of time.",
          "cells": [
            "إِنَّ",
            "كَثْرَةَ",
            "الْكَلَامِ",
            "تَضْيِيْعٌ",
            "لِلْوَقْتِ"
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
                  "role": "مَصْدَرٌ"
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
            "فَاعِلٌ",
            "حَالٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "مِنَ السُّنَّةِ بَدْءُ كُلِّ شَيْءٍ بِاسْمِ اللهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Supplement)",
          "sentence": "مِنَ السُّنَّةِ بَدْءُ كُلِّ شَيْءٍ بِاسْمِ اللهِ",
          "translation": "It is from the Sunnah to begin everything with the name of Allah.",
          "cells": [
            "مِنَ السُّنَّةِ",
            "بَدْءُ",
            "كُلِّ شَيْءٍ",
            "بِاسْمِ اللهِ"
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
                  "start": 1,
                  "end": 1,
                  "role": "مَصْدَرٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "نَهَى رَسُوْلُ اللهِ عَنْ ضَرْبِ الْوَجْهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Supplement)",
          "sentence": "نَهَى رَسُوْلُ اللهِ عَنْ ضَرْبِ الْوَجْهِ",
          "translation": "The Messenger of Allah forbade striking the face.",
          "cells": [
            "نَهَى",
            "رَسُوْلُ اللهِ",
            "عَنْ",
            "ضَرْبِ",
            "الْوَجْهِ"
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَصْدَرٌ"
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
            "حَالٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "أَغْضَبَنِيْ عَدَمُ احْتِرَامِ الطُّلَّابِ لِأَسَاتِذَتِهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Supplement)",
          "sentence": "أَغْضَبَنِيْ عَدَمُ احْتِرَامِ الطُّلَّابِ لِأَسَاتِذَتِهِمْ",
          "translation": "The students' lack of respect for their teachers angered me.",
          "cells": [
            "أَغْضَبَنِيْ",
            "عَدَمُ",
            "احْتِرَامِ",
            "الطُّلَّابِ",
            "لِأَسَاتِذَتِهِمْ"
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
                  "role": "مَصْدَرٌ"
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
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "أَمَرَتْنَا الْمُعَلِّمَةُ بِكِتَابَةِ الدُّرُوْسِ لَيْلًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Supplement)",
          "sentence": "أَمَرَتْنَا الْمُعَلِّمَةُ بِكِتَابَةِ الدُّرُوْسِ لَيْلًا",
          "translation": "The teacher instructed us to write the lessons at night.",
          "cells": [
            "أَمَرَتْنَا",
            "الْمُعَلِّمَةُ",
            "بِ",
            "كِتَابَةِ",
            "الدُّرُوْسِ",
            "لَيْلًا"
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
                  "end": 5,
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
                  "role": "مَصْدَرٌ"
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
            "خَبَرٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "لَقَدْ أَعْجَبَنِيْ إِيْثَارُ الصَّحَابَةِ إِخْوَانَهُمْ عَلَى أَنْفُسِهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Supplement)",
          "sentence": "لَقَدْ أَعْجَبَنِيْ إِيْثَارُ الصَّحَابَةِ إِخْوَانَهُمْ عَلَى أَنْفُسِهِمْ",
          "translation": "The Companions' preferring their brothers over themselves impressed me.",
          "cells": [
            "لَقَدْ",
            "أَعْجَبَنِيْ",
            "إِيْثَارُ",
            "الصَّحَابَةِ",
            "إِخْوَانَهُمْ",
            "عَلَى أَنْفُسِهِمْ"
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
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ"
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
                  "start": 2,
                  "end": 2,
                  "role": "مَصْدَرٌ"
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
                  "end": 5,
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "عَزَمَ الْأَبُ عَلَى تَسْمِيَةِ ابْنِهِ عَبْدَ اللهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Supplement)",
          "sentence": "عَزَمَ الْأَبُ عَلَى تَسْمِيَةِ ابْنِهِ عَبْدَ اللهِ",
          "translation": "The father resolved to name his son Abdullah.",
          "cells": [
            "عَزَمَ",
            "الْأَبُ",
            "عَلَى",
            "تَسْمِيَةِ",
            "ابْنِهِ",
            "عَبْدَ اللهِ"
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
                  "role": "مَصْدَرٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
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
            "خَبَرٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "Book Exercise 3 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In سَأَنْتَظِرُ رُجُوْعَكَ مِنَ السُّوْقِ, what is the كَ of رُجُوْعَكَ?",
          "options": [
            "مَفْعُوْلٌ بِهِ of the مَصْدَرٌ",
            "the فَاعِلٌ of the مَصْدَرٌ, as مُضَافٌ إِلَيْهِ",
            "a حَالٌ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "You are the one returning: 'your return'."
        },
        {
          "title": "Book Exercise 3 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In اَلْغِيْبَةُ ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ, how many slots does the مَصْدَرٌ have?",
          "options": [
            "one",
            "two",
            "three",
            "four"
          ],
          "correct": 2,
          "explanation": "A فَاعِل (the كَ), an object (أَخَاكَ), and the شِبْهُ جُمْلَةٍ بِمَا يَكْرَهُ."
        },
        {
          "title": "Book Exercise 3 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In إِنَّ كَثْرَةَ الْكَلَامِ تَضْيِيْعٌ لِلْوَقْتِ, what is تَضْيِيْعٌ لِلْوَقْتِ?",
          "options": [
            "the اِسْمُ إِنَّ",
            "the خَبَرُ إِنَّ, itself a مَصْدَر phrase with a لِ object",
            "a مَفْعُوْلٌ لَهُ",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "The مَصْدَرٌ is indefinite here, so its object is attached with لِ rather than by إِضَافَة."
        },
        {
          "title": "Book Exercise 3 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In أَمَرَتْنَا الْمُعَلِّمَةُ بِكِتَابَةِ الدُّرُوْسِ لَيْلًا, what is لَيْلًا?",
          "options": [
            "a حَالٌ describing the teacher",
            "a مَفْعُوْلٌ فِيْهِ belonging to the مَصْدَرٌ كِتَابَة",
            "a تَمْيِيْزٌ",
            "a second object of أَمَرَ"
          ],
          "correct": 1,
          "explanation": "The writing is what happens at night, so the adverb sits inside the phrase."
        },
        {
          "title": "Book Exercise 3 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In مَا لُبْثُنَا فِي الدُّنْيَا إِلَّا كَسَاعَةٍ وَاحِدَةٍ, what does إِلَّا do?",
          "options": [
            "It introduces a مُسْتَثْنًى from a stated group",
            "It restricts the خَبَرٌ — 'our stay in this world is only like a single hour'",
            "It negates the sentence",
            "It joins two مَصْدَر phrases"
          ],
          "correct": 1,
          "explanation": "مَا negates and the خَبَرٌ slot is empty until إِلَّا, so this is حَصْرٌ."
        },
        {
          "title": "Book Exercise 3 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In عَزَمَ الْأَبُ وَالْأُمُّ عَلَى تَسْمِيَةِ ابْنِهِمَا عَبْدَ اللهِ, what is عَبْدَ اللهِ?",
          "options": [
            "the مُضَافٌ إِلَيْهِ of تَسْمِيَة",
            "a second object of the مَصْدَرٌ — what the son is being named",
            "a بَدَلٌ from ابْنِهِمَا",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "سَمَّى takes two objects, and the مَصْدَرٌ keeps both: naming him 'Abdullah'."
        },
        {
          "title": "Book Exercise 3 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In لَقَدْ رَأَى بَنُوْ إِسْرَائِيْلَ إِغْرَاقَ فِرْعَوْنَ بِأَعْيُنِهِمْ, what slot does the مَصْدَر phrase fill?",
          "options": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "مَجْرُوْرٌ"
          ],
          "correct": 1,
          "explanation": "بَنُوْ إِسْرَائِيْلَ are the ones who saw; the drowning is what they saw."
        },
        {
          "title": "Book Exercise 3 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In لَقَدْ أَعْجَبَنِيْ إِيْثَارُ الصَّحَابَةِ إِخْوَانَهُمْ عَلَى أَنْفُسِهِمْ, what is إِخْوَانَهُمْ?",
          "options": [
            "the فَاعِلٌ of the مَصْدَرٌ",
            "the مَفْعُوْلٌ بِهِ of the مَصْدَرٌ, coming after the مُضَافٌ إِلَيْهِ",
            "a مُضَافٌ إِلَيْهِ ثَانٍ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "The Companions are the doers, expressed by إِضَافَة; their brothers are the ones preferred."
        },
        {
          "title": "to wait for",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to wait for\"?",
          "options": [
            "اِنْتَظَرَ يَنْتَظِرُ",
            "سَمَّى يُسَمِّيْ",
            "أَفْسَدَ يُفْسِدُ",
            "غِيْبَةٌ"
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
            "to name",
            "to spoil, corrupt",
            "backbiting"
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
            "تَسْمِيَةً",
            "إِفْسَادًا",
            "إِيْثَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to prefer over oneself",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to prefer over oneself\"?",
          "options": [
            "آثَرَ يُؤْثِرُ",
            "لَبِثَ يَلْبَثُ",
            "أَعْجَبَ يُعْجِبُ",
            "كَثْرَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to prefer over oneself",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آثَرَ يُؤْثِرُ mean?",
          "options": [
            "to prefer over oneself",
            "to remain, tarry",
            "to impress, please",
            "abundance, excess"
          ],
          "correct": 0
        },
        {
          "title": "to prefer over oneself (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آثَرَ يُؤْثِرُ?",
          "options": [
            "إِيْثَارًا",
            "لُبْثًا",
            "إِعْجَابًا",
            "إِغْرَاقًا"
          ],
          "correct": 0
        },
        {
          "title": "to drown",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to drown\"?",
          "options": [
            "أَغْرَقَ يُغْرِقُ",
            "أَفْسَدَ يُفْسِدُ",
            "غِيْبَةٌ",
            "جَهْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "to drown",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَغْرَقَ يُغْرِقُ mean?",
          "options": [
            "to drown",
            "to spoil, corrupt",
            "backbiting",
            "ignorance of"
          ],
          "correct": 0
        },
        {
          "title": "to drown (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَغْرَقَ يُغْرِقُ?",
          "options": [
            "إِغْرَاقًا",
            "إِفْسَادًا",
            "اِنْتِظَارًا",
            "تَسْمِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to name",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to name\"?",
          "options": [
            "سَمَّى يُسَمِّيْ",
            "أَعْجَبَ يُعْجِبُ",
            "كَثْرَةٌ",
            "مَسْأَلَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to name",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَمَّى يُسَمِّيْ mean?",
          "options": [
            "to name",
            "to impress, please",
            "abundance, excess",
            "issue, question"
          ],
          "correct": 0
        },
        {
          "title": "to name (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَمَّى يُسَمِّيْ?",
          "options": [
            "تَسْمِيَةً",
            "إِعْجَابًا",
            "إِيْثَارًا",
            "لُبْثًا"
          ],
          "correct": 0
        },
        {
          "title": "to remain, tarry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to remain, tarry\"?",
          "options": [
            "لَبِثَ يَلْبَثُ",
            "غِيْبَةٌ",
            "جَهْلٌ",
            "مُصِيْبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to remain, tarry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَبِثَ يَلْبَثُ mean?",
          "options": [
            "to remain, tarry",
            "backbiting",
            "ignorance of",
            "calamity"
          ],
          "correct": 0
        },
        {
          "title": "to remain, tarry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of لَبِثَ يَلْبَثُ?",
          "options": [
            "لُبْثًا",
            "اِنْتِظَارًا",
            "إِغْرَاقًا",
            "إِفْسَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to spoil, corrupt",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to spoil, corrupt\"?",
          "options": [
            "أَفْسَدَ يُفْسِدُ",
            "كَثْرَةٌ",
            "مَسْأَلَةٌ",
            "وَجْهٌ"
          ],
          "correct": 0
        },
        {
          "title": "to spoil, corrupt",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَفْسَدَ يُفْسِدُ mean?",
          "options": [
            "to spoil, corrupt",
            "abundance, excess",
            "issue, question",
            "face"
          ],
          "correct": 0
        },
        {
          "title": "to spoil, corrupt (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَفْسَدَ يُفْسِدُ?",
          "options": [
            "إِفْسَادًا",
            "إِيْثَارًا",
            "تَسْمِيَةً",
            "إِعْجَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to impress, please",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to impress, please\"?",
          "options": [
            "أَعْجَبَ يُعْجِبُ",
            "جَهْلٌ",
            "مُصِيْبَةٌ",
            "حَرَامٌ"
          ],
          "correct": 0
        },
        {
          "title": "to impress, please",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَعْجَبَ يُعْجِبُ mean?",
          "options": [
            "to impress, please",
            "ignorance of",
            "calamity",
            "forbidden"
          ],
          "correct": 0
        },
        {
          "title": "to impress, please (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَعْجَبَ يُعْجِبُ?",
          "options": [
            "إِعْجَابًا",
            "إِغْرَاقًا",
            "لُبْثًا",
            "اِنْتِظَارًا"
          ],
          "correct": 0
        },
        {
          "title": "backbiting",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"backbiting\"?",
          "options": [
            "غِيْبَةٌ",
            "مَسْأَلَةٌ",
            "وَجْهٌ",
            "عَجِيْبٌ"
          ],
          "correct": 0
        },
        {
          "title": "backbiting",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غِيْبَةٌ mean?",
          "options": [
            "backbiting",
            "issue, question",
            "face",
            "amazing, strange"
          ],
          "correct": 0
        },
        {
          "title": "backbiting (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of غِيْبَةٌ?",
          "options": [
            "—",
            "مَسَائِلُ",
            "وُجُوْهٌ",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "abundance, excess",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"abundance, excess\"?",
          "options": [
            "كَثْرَةٌ",
            "مُصِيْبَةٌ",
            "حَرَامٌ",
            "اِنْتَظَرَ يَنْتَظِرُ"
          ],
          "correct": 0
        },
        {
          "title": "abundance, excess",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَثْرَةٌ mean?",
          "options": [
            "abundance, excess",
            "calamity",
            "forbidden",
            "to wait for"
          ],
          "correct": 0
        },
        {
          "title": "abundance, excess (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of كَثْرَةٌ?",
          "options": [
            "—",
            "مَصَائِبُ",
            "—",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "ignorance of",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"ignorance of\"?",
          "options": [
            "جَهْلٌ",
            "وَجْهٌ",
            "عَجِيْبٌ",
            "آثَرَ يُؤْثِرُ"
          ],
          "correct": 0
        },
        {
          "title": "ignorance of",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَهْلٌ mean?",
          "options": [
            "ignorance of",
            "face",
            "amazing, strange",
            "to prefer over oneself"
          ],
          "correct": 0
        },
        {
          "title": "ignorance of (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جَهْلٌ?",
          "options": [
            "—",
            "وُجُوْهٌ",
            "—",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "issue, question",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"issue, question\"?",
          "options": [
            "مَسْأَلَةٌ",
            "حَرَامٌ",
            "اِنْتَظَرَ يَنْتَظِرُ",
            "أَغْرَقَ يُغْرِقُ"
          ],
          "correct": 0
        },
        {
          "title": "issue, question",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَسْأَلَةٌ mean?",
          "options": [
            "issue, question",
            "forbidden",
            "to wait for",
            "to drown"
          ],
          "correct": 0
        },
        {
          "title": "issue, question (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَسْأَلَةٌ?",
          "options": [
            "مَسَائِلُ",
            "—",
            "—",
            "—"
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
            "عَجِيْبٌ",
            "آثَرَ يُؤْثِرُ",
            "سَمَّى يُسَمِّيْ"
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
            "amazing, strange",
            "to prefer over oneself",
            "to name"
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
            "—",
            "—",
            "مَسَائِلُ"
          ],
          "correct": 0
        },
        {
          "title": "face",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"face\"?",
          "options": [
            "وَجْهٌ",
            "اِنْتَظَرَ يَنْتَظِرُ",
            "أَغْرَقَ يُغْرِقُ",
            "لَبِثَ يَلْبَثُ"
          ],
          "correct": 0
        },
        {
          "title": "face",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَجْهٌ mean?",
          "options": [
            "face",
            "to wait for",
            "to drown",
            "to remain, tarry"
          ],
          "correct": 0
        },
        {
          "title": "face (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of وَجْهٌ?",
          "options": [
            "وُجُوْهٌ",
            "—",
            "—",
            "مَصَائِبُ"
          ],
          "correct": 0
        },
        {
          "title": "forbidden",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"forbidden\"?",
          "options": [
            "حَرَامٌ",
            "آثَرَ يُؤْثِرُ",
            "سَمَّى يُسَمِّيْ",
            "أَفْسَدَ يُفْسِدُ"
          ],
          "correct": 0
        },
        {
          "title": "forbidden",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَرَامٌ mean?",
          "options": [
            "forbidden",
            "to prefer over oneself",
            "to name",
            "to spoil, corrupt"
          ],
          "correct": 0
        },
        {
          "title": "forbidden (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حَرَامٌ?",
          "options": [
            "—",
            "—",
            "مَسَائِلُ",
            "وُجُوْهٌ"
          ],
          "correct": 0
        },
        {
          "title": "amazing, strange",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"amazing, strange\"?",
          "options": [
            "عَجِيْبٌ",
            "أَغْرَقَ يُغْرِقُ",
            "لَبِثَ يَلْبَثُ",
            "أَعْجَبَ يُعْجِبُ"
          ],
          "correct": 0
        },
        {
          "title": "amazing, strange",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَجِيْبٌ mean?",
          "options": [
            "amazing, strange",
            "to drown",
            "to remain, tarry",
            "to impress, please"
          ],
          "correct": 0
        },
        {
          "title": "amazing, strange (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَجِيْبٌ?",
          "options": [
            "—",
            "—",
            "مَصَائِبُ",
            "—"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l4",
      "title": "عبارة اسم الفاعل",
      "subtitle": "Supplement: Verbal Phrases",
      "concepts": [
        {
          "heading": "The slots of an اِسْمُ الْفَاعِلِ verbal phrase",
          "lines": [
            {
              "html": "An اِسْمُ الْفَاعِلِ verbal phrase consists of essential and non-essential slots. There are two essential slots found in every one: an اِسْمُ الْفَاعِلِ slot and a فَاعِلٌ slot. There are two non-essential slots: a مُضَافٌ إِلَيْهِ slot, and a غَيْرُ صَرِيْحٍ or مَنْصُوْبٌ slot or slots.",
              "list": false
            },
            {
              "table": {
                "title": "The parts of an اِسْمُ الْفَاعِلِ verbal phrase",
                "headers": [
                  "Essential",
                  "Essential",
                  "Non-essential",
                  "Non-essential"
                ],
                "rows": [
                  [
                    "اِسْمُ فَاعِلٍ",
                    "فَاعِلٌ",
                    "مُضَافٌ إِلَيْهِ",
                    "مَنْصُوْبٌ / غَيْرُ صَرِيْحٍ"
                  ]
                ]
              }
            },
            {
              "html": "Compare this with the مَصْدَر phrase of the previous lessons. There the مَصْدَرٌ alone was essential; here a فَاعِلٌ is essential too. That is because an اِسْمُ الْفَاعِلِ names a doer, so there must always be someone doing — even if the doer is only a concealed pronoun.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Unlike the مَصْدَر phrase, why must an اِسْمُ الْفَاعِلِ verbal phrase always have a فَاعِلٌ as an essential slot؟",
            "kind": "mcq",
            "options": [
              "Because an اِسْمُ الْفَاعِلِ names a doer, so there must always be someone doing — even if only a concealed pronoun",
              "Because اِسْمُ الْفَاعِلِ can never take a مُضَافٌ إِلَيْهِ",
              "Because the فَاعِلٌ is always a stated noun, never hidden",
              "Because an اِسْمُ الْفَاعِلِ has no مَصْدَرٌ equivalent"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The فَاعِلٌ slot",
          "lines": [
            {
              "html": "The اِسْمُ الْفَاعِلِ must have a فَاعِلٌ. This can occur in two ways.",
              "list": false
            },
            {
              "html": "1. As a ضَمِيْرٌ مُسْتَتِرٌ — a concealed pronoun.",
              "list": false
            },
            {
              "html": "اَلرَّجُلُ سَامِعٌ — The man is listening.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَلرَّجُلُ سَامِعٌ",
                "translation": "The man is listening.",
                "cells": [
                  "اَلرَّجُلُ",
                  "سَامِعٌ"
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
                        "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "2. As a regular مَرْفُوْعٌ noun.",
              "list": false
            },
            {
              "html": "اَلرَّجُلُ سَامِعٌ وَلَدُهُ — The man's son is listening.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَلرَّجُلُ سَامِعٌ وَلَدُهُ",
                "translation": "The man's son is listening.",
                "cells": [
                  "اَلرَّجُلُ",
                  "سَامِعٌ",
                  "وَلَدُهُ"
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
                        "role": "اِسْمُ فَاعِلٍ"
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
              "html": "This اِسْمُ الْفَاعِلِ verbal phrase is translated like a جُمْلَةٌ اسْمِيَّةٌ whose خَبَرٌ is a جُمْلَةٌ فِعْلِيَّةٌ — the structure studied in Section 1. So اَلرَّجُلُ سَامِعٌ وَلَدُهُ is 'the man's son is listening', not 'the man, his son is listening'. English drops the outer subject and folds it into a possessive.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In اَلرَّجُلُ سَامِعٌ وَلَدُهُ, how should this be translated, and why؟",
            "kind": "mcq",
            "options": [
              "'The man's son is listening' — the whole phrase is a جُمْلَةٌ اسْمِيَّةٌ whose خَبَرٌ carries a verbal meaning, exactly like the Section-1 pattern",
              "'The man, his son is listening' — translating each word literally",
              "'The man is listening to his son' — treating وَلَدُهُ as an object",
              "It cannot be translated as one sentence"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The مُضَافٌ إِلَيْهِ slot",
          "lines": [
            {
              "html": "When the فَاعِلٌ of the اِسْمُ الْفَاعِلِ is a ضَمِيْرٌ مُسْتَتِرٌ, the word can be followed by a مُضَافٌ إِلَيْهِ. This will be either the مَفْعُوْلٌ بِهِ or the مَفْعُوْلٌ فِيْهِ — the same إِعْرَابٌ مَحَلِّيٌّ seen with the مَصْدَرٌ.",
              "list": false
            },
            {
              "html": "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ — Every soul is going to taste death.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ",
                "translation": "Every soul is going to taste death.",
                "cells": [
                  "كُلُّ نَفْسٍ",
                  "ذَائِقَةُ",
                  "الْمَوْتِ"
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
                        "start": 1,
                        "end": 1,
                        "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هِيَ)"
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
              "html": "هُوَ قَائِمُ اللَّيْلِ — He stands at night.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "هُوَ قَائِمُ اللَّيْلِ",
                "translation": "He stands at night.",
                "cells": [
                  "هُوَ",
                  "قَائِمُ",
                  "اللَّيْلِ"
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
                        "start": 1,
                        "end": 1,
                        "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
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
              "html": "Note the condition carefully: the مُضَافٌ إِلَيْهِ is available only when the فَاعِلٌ is concealed. If a stated noun is already doing duty as the فَاعِلٌ, as in سَامِعٌ وَلَدُهُ, there is nothing left for an إِضَافَة to attach to.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "When is the مُضَافٌ إِلَيْهِ slot available on an اِسْمُ الْفَاعِلِ, as in قَائِمُ اللَّيْلِ؟",
            "kind": "mcq",
            "options": [
              "Only when the فَاعِلٌ is a concealed pronoun — if a stated noun is already the فَاعِلٌ, there's nothing left for an إِضَافَة to attach to",
              "Always, regardless of the فَاعِلٌ",
              "Only when the اِسْمُ الْفَاعِلِ has an ال",
              "Only in the plural"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The غَيْرُ صَرِيْحٍ and مَنْصُوْبٌ slots",
          "lines": [
            {
              "html": "The اِسْمُ الْفَاعِلِ can have regular غَيْرُ صَرِيْحٍ and مَنْصُوْبٌ slots, exactly as a verb would.",
              "list": false
            },
            {
              "html": "خَالِدٌ مُسَافِرٌ إِلَى مَكَّةَ غَدًا — Khalid is travelling to Makkah tomorrow.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "خَالِدٌ مُسَافِرٌ إِلَى مَكَّةَ غَدًا",
                "translation": "Khalid is travelling to Makkah tomorrow.",
                "cells": [
                  "خَالِدٌ",
                  "مُسَافِرٌ",
                  "إِلَى مَكَّةَ",
                  "غَدًا"
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
                        "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
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
              "html": "An اِسْمُ الْفَاعِلِ carries a present or future sense, which is why غَدًا sits comfortably with it. That is also why the book will next compare it directly with the فِعْلٌ مُضَارِعٌ: the two overlap in meaning almost exactly.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Why does غَدًا sit comfortably with an اِسْمُ الْفَاعِلِ خَبَرٌ, as in خَالِدٌ مُسَافِرٌ إِلَى مَكَّةَ غَدًا؟",
            "kind": "mcq",
            "options": [
              "An اِسْمُ الْفَاعِلِ carries a present or future sense",
              "An اِسْمُ الْفَاعِلِ is always in the past tense",
              "غَدًا can only follow a verb, never a noun",
              "مُسَافِرٌ is secretly a مَصْدَرٌ here"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Building an اِسْمُ الْفَاعِلِ verbal phrase",
        "rows": [
          {
            "label": "Essential slots",
            "arabic": "اِسْمُ فَاعِلٍ + فَاعِلٌ",
            "meaning": "unlike the مَصْدَر phrase, a doer is always required"
          },
          {
            "label": "فَاعِلٌ, way 1",
            "arabic": "ضَمِيْرٌ مُسْتَتِرٌ",
            "meaning": "اَلرَّجُلُ سَامِعٌ"
          },
          {
            "label": "فَاعِلٌ, way 2",
            "arabic": "a مَرْفُوْعٌ noun",
            "meaning": "اَلرَّجُلُ سَامِعٌ وَلَدُهُ"
          },
          {
            "label": "Translating way 2",
            "arabic": "as a جُمْلَةٌ اسْمِيَّةٌ with a verbal خَبَرٌ",
            "meaning": "'the man's son is listening', not 'the man his son…'"
          },
          {
            "label": "مُضَافٌ إِلَيْهِ",
            "arabic": "only if the فَاعِلٌ is concealed",
            "meaning": "ذَائِقَةُ الْمَوْتِ (object) / قَائِمُ اللَّيْلِ (adverb)"
          },
          {
            "label": "Other slots",
            "arabic": "مَنْصُوْبٌ and غَيْرُ صَرِيْحٍ",
            "meaning": "خَالِدٌ مُسَافِرٌ إِلَى مَكَّةَ غَدًا"
          },
          {
            "label": "Tense sense",
            "arabic": "present or future",
            "meaning": "which is why غَدًا fits naturally"
          }
        ]
      },
      "quiz": [
        {
          "q": "How many essential slots does an اِسْمُ الْفَاعِلِ verbal phrase have?",
          "options": [
            "one",
            "two",
            "three",
            "four"
          ],
          "correct": 1,
          "explanation": "The اِسْمُ الْفَاعِلِ itself and a فَاعِلٌ."
        },
        {
          "q": "What is the essential slot a مَصْدَر phrase has that an اِسْمُ الْفَاعِلِ phrase adds to?",
          "options": [
            "The مَصْدَر phrase requires only the مَصْدَرٌ; the اِسْمُ الْفَاعِلِ phrase requires a فَاعِلٌ as well",
            "Both require a مُضَافٌ إِلَيْهِ",
            "The مَصْدَر phrase requires an object",
            "There is no difference"
          ],
          "correct": 0,
          "explanation": "An اِسْمُ الْفَاعِلِ names a doer, so a doer must always be present."
        },
        {
          "q": "In اَلرَّجُلُ سَامِعٌ وَلَدُهُ, what is وَلَدُهُ?",
          "options": [
            "مُضَافٌ إِلَيْهِ",
            "the فَاعِلٌ of سَامِعٌ",
            "مَفْعُوْلٌ بِهِ",
            "بَدَلٌ"
          ],
          "correct": 1,
          "explanation": "A stated مَرْفُوْعٌ noun filling the doer slot."
        },
        {
          "q": "How is اَلرَّجُلُ سَامِعٌ وَلَدُهُ correctly translated?",
          "options": [
            "The man, his son is listening",
            "The man's son is listening",
            "The man is listening to his son",
            "The son of the listening man"
          ],
          "correct": 1,
          "explanation": "It reads like a nominal sentence with a verbal خَبَرٌ — the Section 1 structure."
        },
        {
          "q": "When can the اِسْمُ الْفَاعِلِ take a مُضَافٌ إِلَيْهِ?",
          "options": [
            "always",
            "only when the فَاعِلٌ is a stated noun",
            "only when the فَاعِلٌ is a ضَمِيْرٌ مُسْتَتِرٌ",
            "only when it carries an ال"
          ],
          "correct": 2,
          "explanation": "A stated فَاعِلٌ already occupies the position an إِضَافَة would use."
        },
        {
          "q": "In هُوَ قَائِمُ اللَّيْلِ, the مُضَافٌ إِلَيْهِ functions as…",
          "options": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "مَفْعُوْلٌ فِيْهِ",
            "تَمْيِيْزٌ"
          ],
          "correct": 2,
          "explanation": "The night is when the standing happens, not what is stood."
        }
      ],
      "bank": [
        {
          "title": "اَلرَّجُلُ سَامِعٌ وَلَدُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "اَلرَّجُلُ سَامِعٌ وَلَدُهُ",
          "translation": "The man's son is listening.",
          "cells": [
            "اَلرَّجُلُ",
            "سَامِعٌ",
            "وَلَدُهُ"
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
                  "role": "اِسْمُ فَاعِلٍ"
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
            "مُضَافٌ إِلَيْهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ",
          "translation": "Every soul is going to taste death.",
          "cells": [
            "كُلُّ نَفْسٍ",
            "ذَائِقَةُ",
            "الْمَوْتِ"
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
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هِيَ)"
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
            "فَاعِلٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "هُوَ قَائِمُ اللَّيْلِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "هُوَ قَائِمُ اللَّيْلِ",
          "translation": "He stands at night.",
          "cells": [
            "هُوَ",
            "قَائِمُ",
            "اللَّيْلِ"
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
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
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
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "خَالِدٌ مُسَافِرٌ إِلَى مَكَّةَ غَدًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "خَالِدٌ مُسَافِرٌ إِلَى مَكَّةَ غَدًا",
          "translation": "Khalid is travelling to Makkah tomorrow.",
          "cells": [
            "خَالِدٌ",
            "مُسَافِرٌ",
            "إِلَى مَكَّةَ",
            "غَدًا"
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
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
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
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَنَا حَاضِرٌ هٰذَا الدَّرْسَ غَدًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "أَنَا حَاضِرٌ هٰذَا الدَّرْسَ غَدًا",
          "translation": "I am attending this lesson tomorrow.",
          "cells": [
            "أَنَا",
            "حَاضِرٌ",
            "هٰذَا الدَّرْسَ",
            "غَدًا"
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
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (أَنَا)"
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
            "فَاعِلٌ",
            "مُضَافٌ إِلَيْهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "اَلْأَبُ جَالِسٌ أَخُوْهُ عِنْدَ الْمِنْبَرِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "اَلْأَبُ جَالِسٌ أَخُوْهُ عِنْدَ الْمِنْبَرِ",
          "translation": "The father's brother is sitting by the pulpit.",
          "cells": [
            "اَلْأَبُ",
            "جَالِسٌ",
            "أَخُوْهُ",
            "عِنْدَ الْمِنْبَرِ"
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
                  "role": "اِسْمُ فَاعِلٍ"
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
            "مُضَافٌ إِلَيْهِ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "إِنَّ اللهَ جَامِعُ النَّاسِ يَوْمَ الْقِيَامَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "إِنَّ اللهَ جَامِعُ النَّاسِ يَوْمَ الْقِيَامَةِ",
          "translation": "Indeed Allah will gather the people on the Day of Judgement.",
          "cells": [
            "إِنَّ",
            "اللهَ",
            "جَامِعُ",
            "النَّاسِ",
            "يَوْمَ الْقِيَامَةِ"
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
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
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
            "فَاعِلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَيْسَ اللهُ غَافِلًا عَمَّا يَعْمَلُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "لَيْسَ اللهُ غَافِلًا عَمَّا يَعْمَلُوْنَ",
          "translation": "Allah is not heedless of what they do.",
          "cells": [
            "لَيْسَ",
            "اللهُ",
            "غَافِلًا",
            "عَمَّا يَعْمَلُوْنَ"
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
                  "end": 3,
                  "role": "خَبَرُ لَيْسَ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
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
            "فَاعِلٌ",
            "حَالٌ",
            "مُضَافٌ إِلَيْهِ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اَلْمَرْأَةُ صَائِمَةٌ غَدًا مَعَ أَوْلَادِهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "اَلْمَرْأَةُ صَائِمَةٌ غَدًا مَعَ أَوْلَادِهَا",
          "translation": "The woman is fasting tomorrow with her children.",
          "cells": [
            "اَلْمَرْأَةُ",
            "صَائِمَةٌ",
            "غَدًا",
            "مَعَ أَوْلَادِهَا"
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
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هِيَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ ثَانٍ"
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
          "title": "مَاتَ ذٰلِكَ الرَّجُلُ وَهُوَ سَاجِدٌ للهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "مَاتَ ذٰلِكَ الرَّجُلُ وَهُوَ سَاجِدٌ للهِ",
          "translation": "That man died while he was prostrating to Allah.",
          "cells": [
            "مَاتَ",
            "ذٰلِكَ الرَّجُلُ",
            "وَ",
            "هُوَ",
            "سَاجِدٌ للهِ"
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
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
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
            "نَعْتٌ",
            "مَفْعُوْلٌ بِهِ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "Book Exercise 5 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In إِنَّ اللهَ جَامِعُ النَّاسِ يَوْمَ الْقِيَامَةِ, what is النَّاسِ?",
          "options": [
            "the فَاعِلٌ of جَامِعُ",
            "the مَفْعُوْلٌ بِهِ, expressed as a مُضَافٌ إِلَيْهِ",
            "a مَفْعُوْلٌ فِيْهِ",
            "a نَعْتٌ"
          ],
          "correct": 1,
          "explanation": "The people are gathered, so the possessor carries an object meaning."
        },
        {
          "title": "Book Exercise 5 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In إِنَّ اللهَ جَامِعُ النَّاسِ يَوْمَ الْقِيَامَةِ, what is يَوْمَ الْقِيَامَةِ?",
          "options": [
            "مُضَافٌ إِلَيْهِ ثَانٍ",
            "a مَنْصُوْب مَفْعُوْلٌ فِيْهِ belonging to the اِسْمُ فَاعِلٍ",
            "خَبَرُ إِنَّ",
            "حَالٌ"
          ],
          "correct": 1,
          "explanation": "One مُضَافٌ إِلَيْهِ is already used, so the adverb comes مَنْصُوْبٌ after it."
        },
        {
          "title": "Book Exercise 5 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In اَلْأَبُ جَالِسٌ أَخُوْهُ عِنْدَ الْمِنْبَرِ, why is أَخُوْهُ مَرْفُوْعٌ?",
          "options": [
            "It is the مُبْتَدَأٌ",
            "It is the فَاعِلٌ of جَالِسٌ",
            "It is a بَدَلٌ from الْأَبُ",
            "It is the خَبَرٌ"
          ],
          "correct": 1,
          "explanation": "اَلْأَبُ is the مُبْتَدَأٌ; the whole phrase جَالِسٌ أَخُوْهُ عِنْدَ الْمِنْبَرِ is its خَبَرٌ."
        },
        {
          "title": "Book Exercise 5 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In أَنَا حَاضِرٌ هٰذَا الدَّرْسَ غَدًا, what is هٰذَا الدَّرْسَ?",
          "options": [
            "مُضَافٌ إِلَيْهِ",
            "a مَنْصُوْب مَفْعُوْلٌ بِهِ of the اِسْمُ فَاعِلٍ",
            "the فَاعِلٌ",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "An اِسْمُ فَاعِلٍ with tanwīn keeps its object مَنْصُوْبٌ rather than by إِضَافَة."
        },
        {
          "title": "Book Exercise 5 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In مَا أَنَا بِبَائِعٍ بَيْتِيْ بِأَلْفِ جُنَيْهٍ, what does the first بِ do?",
          "options": [
            "It carries the object",
            "It is a زَائِدَة particle attached to the خَبَر of مَا الْمُشَبَّهَةِ بِلَيْسَ",
            "It marks a purpose",
            "It negates the sentence"
          ],
          "correct": 1,
          "explanation": "مَا … بِ is the familiar pattern: 'I am not one who would sell my house'."
        },
        {
          "title": "Book Exercise 5 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In لَيْسَ اللهُ غَافِلًا عَمَّا يَعْمَلُوْنَ, what is غَافِلًا?",
          "options": [
            "اِسْمُ لَيْسَ",
            "خَبَرُ لَيْسَ, heading its own verbal phrase",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "اَللهُ is the اِسْم; غَافِلًا is the مَنْصُوْب خَبَر with عَمَّا يَعْمَلُوْنَ attached to it."
        },
        {
          "title": "Book Exercise 5 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In مَاتَ ذٰلِكَ الرَّجُلُ وَهُوَ سَاجِدٌ للهِ, what is وَهُوَ سَاجِدٌ للهِ?",
          "options": [
            "a نَعْتٌ of الرَّجُلُ",
            "a حَالٌ, a nominal sentence introduced by the وَاوٌ حَالِيَّةٌ",
            "a مَفْعُوْلٌ بِهِ",
            "a second main sentence"
          ],
          "correct": 1,
          "explanation": "The Section 1 structure: 'that man died while he was prostrating to Allah'."
        },
        {
          "title": "Book Exercise 5 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In أَقَارِئَةٌ أَنْتِ ذٰلِكَ الْكِتَابَ غَدًا؟, what is أَنْتِ?",
          "options": [
            "the مُبْتَدَأٌ",
            "the فَاعِلٌ of قَارِئَةٌ, stated as a detached pronoun",
            "a تَأْكِيْدٌ",
            "a بَدَلٌ"
          ],
          "correct": 1,
          "explanation": "The اِسْمُ فَاعِلٍ comes first after the interrogative hamzah and its doer follows."
        },
        {
          "title": "to hear, listen",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hear, listen\"?",
          "options": [
            "سَمِعَ يَسْمَعُ",
            "غَابَ يَغِيْبُ",
            "تَوَفَّى يَتَوَفَّى",
            "مِنْبَرٌ"
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
            "to be absent",
            "to take in full, cause to die",
            "pulpit"
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
            "غِيَابًا",
            "تَوَفِّيًا",
            "اِهْتِدَاءً"
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
            "غَفَلَ يَغْفُلُ",
            "نَفْسٌ",
            "كَبْشٌ"
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
            "to be heedless",
            "soul, self",
            "ram"
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
            "غَفْلَةً",
            "سَمْعًا",
            "غِيَابًا"
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
            "تَوَفَّى يَتَوَفَّى",
            "مِنْبَرٌ",
            "ضَيْفٌ"
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
            "to take in full, cause to die",
            "pulpit",
            "guest"
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
            "تَوَفِّيًا",
            "ذَوْقًا",
            "غَفْلَةً"
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
            "نَفْسٌ",
            "كَبْشٌ",
            "ثَوْبٌ"
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
            "soul, self",
            "ram",
            "garment"
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
            "سَمْعًا",
            "اِهْتِدَاءً",
            "تَوَفِّيًا"
          ],
          "correct": 0
        },
        {
          "title": "to be heedless",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be heedless\"?",
          "options": [
            "غَفَلَ يَغْفُلُ",
            "مِنْبَرٌ",
            "ضَيْفٌ",
            "أَلْفٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be heedless",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَفَلَ يَغْفُلُ mean?",
          "options": [
            "to be heedless",
            "pulpit",
            "guest",
            "thousand"
          ],
          "correct": 0
        },
        {
          "title": "to be heedless (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of غَفَلَ يَغْفُلُ?",
          "options": [
            "غَفْلَةً",
            "ذَوْقًا",
            "غِيَابًا",
            "سَمْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to take in full, cause to die",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take in full, cause to die\"?",
          "options": [
            "تَوَفَّى يَتَوَفَّى",
            "كَبْشٌ",
            "ثَوْبٌ",
            "اِسْمُ فَاعِلٍ"
          ],
          "correct": 0
        },
        {
          "title": "to take in full, cause to die",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَوَفَّى يَتَوَفَّى mean?",
          "options": [
            "to take in full, cause to die",
            "ram",
            "garment",
            "active participle"
          ],
          "correct": 0
        },
        {
          "title": "to take in full, cause to die (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَوَفَّى يَتَوَفَّى?",
          "options": [
            "تَوَفِّيًا",
            "اِهْتِدَاءً",
            "غَفْلَةً",
            "ذَوْقًا"
          ],
          "correct": 0
        },
        {
          "title": "soul, self",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"soul, self\"?",
          "options": [
            "نَفْسٌ",
            "ضَيْفٌ",
            "أَلْفٌ",
            "ضَمِيْرٌ مُسْتَتِرٌ"
          ],
          "correct": 0
        },
        {
          "title": "soul, self",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَفْسٌ mean?",
          "options": [
            "soul, self",
            "guest",
            "thousand",
            "concealed pronoun"
          ],
          "correct": 0
        },
        {
          "title": "soul, self (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَفْسٌ?",
          "options": [
            "نُفُوْسٌ",
            "كِبَاشٌ",
            "ثِيَابٌ",
            "—"
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
            "ثَوْبٌ",
            "اِسْمُ فَاعِلٍ",
            "سَمِعَ يَسْمَعُ"
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
            "garment",
            "active participle",
            "to hear, listen"
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
            "ضُيُوْفٌ",
            "آلَافٌ",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "ram",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"ram\"?",
          "options": [
            "كَبْشٌ",
            "أَلْفٌ",
            "ضَمِيْرٌ مُسْتَتِرٌ",
            "ذَاقَ يَذُوْقُ"
          ],
          "correct": 0
        },
        {
          "title": "ram",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَبْشٌ mean?",
          "options": [
            "ram",
            "thousand",
            "concealed pronoun",
            "to taste"
          ],
          "correct": 0
        },
        {
          "title": "ram (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of كَبْشٌ?",
          "options": [
            "كِبَاشٌ",
            "ثِيَابٌ",
            "—",
            "نُفُوْسٌ"
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
            "اِسْمُ فَاعِلٍ",
            "سَمِعَ يَسْمَعُ",
            "اِهْتَدَى يَهْتَدِيْ"
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
            "active participle",
            "to hear, listen",
            "to be guided"
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
            "آلَافٌ",
            "—",
            "مَنَابِرُ"
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
            "ضَمِيْرٌ مُسْتَتِرٌ",
            "ذَاقَ يَذُوْقُ",
            "غَابَ يَغِيْبُ"
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
            "concealed pronoun",
            "to taste",
            "to be absent"
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
            "نُفُوْسٌ",
            "كِبَاشٌ"
          ],
          "correct": 0
        },
        {
          "title": "thousand",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"thousand\"?",
          "options": [
            "أَلْفٌ",
            "سَمِعَ يَسْمَعُ",
            "اِهْتَدَى يَهْتَدِيْ",
            "غَفَلَ يَغْفُلُ"
          ],
          "correct": 0
        },
        {
          "title": "thousand",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَلْفٌ mean?",
          "options": [
            "thousand",
            "to hear, listen",
            "to be guided",
            "to be heedless"
          ],
          "correct": 0
        },
        {
          "title": "thousand (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَلْفٌ?",
          "options": [
            "آلَافٌ",
            "—",
            "مَنَابِرُ",
            "ضُيُوْفٌ"
          ],
          "correct": 0
        },
        {
          "title": "active participle",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"active participle\"?",
          "options": [
            "اِسْمُ فَاعِلٍ",
            "ذَاقَ يَذُوْقُ",
            "غَابَ يَغِيْبُ",
            "تَوَفَّى يَتَوَفَّى"
          ],
          "correct": 0
        },
        {
          "title": "active participle",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْمُ فَاعِلٍ mean?",
          "options": [
            "active participle",
            "to taste",
            "to be absent",
            "to take in full, cause to die"
          ],
          "correct": 0
        },
        {
          "title": "active participle (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of اِسْمُ فَاعِلٍ?",
          "options": [
            "—",
            "نُفُوْسٌ",
            "كِبَاشٌ",
            "ثِيَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "concealed pronoun",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"concealed pronoun\"?",
          "options": [
            "ضَمِيْرٌ مُسْتَتِرٌ",
            "اِهْتَدَى يَهْتَدِيْ",
            "غَفَلَ يَغْفُلُ",
            "نَفْسٌ"
          ],
          "correct": 0
        },
        {
          "title": "concealed pronoun",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ضَمِيْرٌ مُسْتَتِرٌ mean?",
          "options": [
            "concealed pronoun",
            "to be guided",
            "to be heedless",
            "soul, self"
          ],
          "correct": 0
        },
        {
          "title": "concealed pronoun (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of ضَمِيْرٌ مُسْتَتِرٌ?",
          "options": [
            "—",
            "مَنَابِرُ",
            "ضُيُوْفٌ",
            "آلَافٌ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l5",
      "title": "اسم الفاعل بلا أل",
      "subtitle": "Supplement: Verbal Phrases",
      "concepts": [
        {
          "heading": "The three slots",
          "lines": [
            {
              "html": "The اِسْمُ الْفَاعِلِ in a verbal phrase can occur in two ways: without an ال, and with an ال. This lesson takes the first; the ال case follows next.",
              "list": false
            },
            {
              "html": "When the اِسْمُ الْفَاعِلِ occurs without an ال, it can occur in three slots.",
              "list": false
            },
            {
              "html": "1. As the خَبَرٌ.",
              "list": false
            },
            {
              "html": "هُوَ قَائِمٌ عِنْدَ الْبَابِ — He is standing by the door.",
              "list": true,
              "bullet": true
            },
            {
              "html": "2. As a حَالٌ.",
              "list": false
            },
            {
              "html": "رَأَيْتُهُ قَائِمًا عِنْدَ الْبَابِ — I saw him standing by the door.",
              "list": true,
              "bullet": true
            },
            {
              "html": "3. As its own slot, if it occurs after a هَمْزَةُ الِاسْتِفْهَامِ or a مَا الْمُشَبَّهَةُ بِلَيْسَ.",
              "list": false
            },
            {
              "html": "مَا كَاذِبٌ التَّاجِرُ — The merchant is not lying.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "مَا كَاذِبٌ التَّاجِرُ",
                "translation": "The merchant is not lying.",
                "cells": [
                  "مَا",
                  "كَاذِبٌ",
                  "التَّاجِرُ"
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
                        "role": "اِسْمُ فَاعِلٍ"
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
              "html": "In this case the مَا الْمُشَبَّهَةُ بِلَيْسَ does not have an اِسْمٌ and خَبَرٌ. That is the surprise of the third slot: the اِسْمُ فَاعِلٍ and its فَاعِلٌ stand on their own, and مَا simply negates the whole thing. Contrast مَا الْوَلَدُ كَاذِبًا from Section 2, where مَا does take an اِسْمٌ and a مَنْصُوْب خَبَرٌ.",
              "list": false
            },
            {
              "html": "The difference in case endings makes this visible. In مَا كَاذِبٌ التَّاجِرُ both words are مَرْفُوْعٌ, because one is an اِسْمُ فَاعِلٍ and the other its doer. In مَا الْوَلَدُ كَاذِبًا the second word is مَنْصُوْبٌ, because it is a خَبَرٌ governed by مَا.",
              "list": false
            },
            {
              "table": {
                "title": "The اِسْمُ الْفَاعِلِ without ال",
                "headers": [
                  "Slot",
                  "Example",
                  "Meaning"
                ],
                "rows": [
                  [
                    "خَبَرٌ",
                    "هُوَ قَائِمٌ عِنْدَ الْبَابِ",
                    "He is standing by the door"
                  ],
                  [
                    "حَالٌ",
                    "رَأَيْتُهُ قَائِمًا عِنْدَ الْبَابِ",
                    "I saw him standing by the door"
                  ],
                  [
                    "its own slot",
                    "مَا كَاذِبٌ التَّاجِرُ",
                    "The merchant is not lying"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Besides خَبَرٌ and حَالٌ, in which third context can a bare (ال-less) اِسْمُ الْفَاعِلِ stand as its own slot؟",
            "kind": "mcq",
            "options": [
              "After a هَمْزَةُ الِاسْتِفْهَامِ or a مَا الْمُشَبَّهَةُ بِلَيْسَ, where it takes a فَاعِلٌ of its own with no separate اِسْم/خَبَر needed",
              "After إِنَّ only",
              "After a حَرْفُ عَطْفٍ",
              "It can never stand as its own independent slot"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The اِسْمُ الْفَاعِلِ compared with the مُضَارِع",
          "lines": [
            {
              "html": "The book's Exercise 4 pairs sentences deliberately, one with an اِسْمُ فَاعِلٍ and one with a فِعْلٌ مُضَارِعٌ, so that the overlap becomes obvious. Read them side by side.",
              "list": false
            },
            {
              "html": "هُمْ نَادِمُوْنَ عَلَى مَا فَعَلُوْا — They are regretting what they did.",
              "list": true,
              "bullet": true
            },
            {
              "html": "هُمْ يَنْدَمُوْنَ عَلَى ذُنُوْبِهِمْ — They regret their sins.",
              "list": true,
              "bullet": true
            },
            {
              "html": "اَللهُ جَازٍ كُلَّ نَفْسٍ بِمَا كَسَبَتْ — Allah will recompense every soul for what it earned.",
              "list": true,
              "bullet": true
            },
            {
              "html": "يَجْزِي اللهُ كُلَّ نَفْسٍ بِمَا كَسَبَتْ — Allah recompenses every soul for what it earned.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The two carry almost the same meaning and take the same slots after them — an object, a شِبْهُ جُمْلَةٍ, an adverb. The differences are of form, not of function: the اِسْمُ فَاعِلٍ is a noun, so it can be a مُضَافٌ, can take tanwīn, and agrees with its subject in gender and number; the مُضَارِع is a verb, so it conjugates.",
              "list": false
            },
            {
              "html": "One difference does matter in translation. A مُضَارِع is neutral between present and future; an اِسْمُ فَاعِلٍ often leans towards a settled or ongoing state, and with a future adverb such as غَدًا it reads as a firm intention — 'I am attending this lesson tomorrow'.",
              "list": false
            },
            {
              "html": "Exercise 4 also pairs رَأَى زُبَيْرٌ أَخَاهُ نَاصِرًا فَقِيْرًا with رَأَى زُبَيْرٌ أَخَاهُ يَنْصُرُ فَقِيْرًا. Both mean 'Zubayr saw his brother helping a poor man' — the first with a حَالٌ built on an اِسْمُ فَاعِلٍ, the second with a حَالٌ that is a verbal sentence, as studied in Section 1.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is the main difference in meaning (not slot-taking) between an اِسْمُ الْفَاعِلِ and a فِعْلٌ مُضَارِعٌ that largely overlap, as in هُوَ مُسَافِرٌ غَدًا vs هُوَ يُسَافِرُ غَدًا؟",
            "kind": "mcq",
            "options": [
              "The اِسْمُ الْفَاعِلِ often leans towards a settled/ongoing state or firm intention, while the مُضَارِعٌ is neutral between present and future",
              "The اِسْمُ الْفَاعِلِ can never take an object while the مُضَارِعٌ can",
              "There is no difference in meaning at all, ever",
              "The مُضَارِعٌ can never appear with a future time adverb"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The اِسْمُ الْفَاعِلِ without an ال",
        "rows": [
          {
            "label": "Slot 1",
            "arabic": "خَبَرٌ",
            "meaning": "هُوَ قَائِمٌ عِنْدَ الْبَابِ"
          },
          {
            "label": "Slot 2",
            "arabic": "حَالٌ",
            "meaning": "رَأَيْتُهُ قَائِمًا عِنْدَ الْبَابِ"
          },
          {
            "label": "Slot 3",
            "arabic": "its own slot",
            "meaning": "after a هَمْزَةُ اسْتِفْهَامٍ or مَا الْمُشَبَّهَةُ بِلَيْسَ"
          },
          {
            "label": "Book example",
            "arabic": "مَا كَاذِبٌ التَّاجِرُ",
            "meaning": "'The merchant is not lying'"
          },
          {
            "label": "Its peculiarity",
            "arabic": "مَا has no اِسْمٌ and خَبَرٌ",
            "meaning": "the اِسْمُ فَاعِلٍ and its فَاعِلٌ stand alone, both مَرْفُوْعٌ"
          },
          {
            "label": "Versus the مُضَارِع",
            "arabic": "same slots, different form",
            "meaning": "the اِسْمُ فَاعِلٍ is a noun and agrees; the verb conjugates"
          }
        ]
      },
      "quiz": [
        {
          "q": "In how many slots can an اِسْمُ الْفَاعِلِ without an ال occur?",
          "options": [
            "two",
            "three",
            "four",
            "five"
          ],
          "correct": 1,
          "explanation": "خَبَرٌ, حَالٌ, and its own slot after certain particles."
        },
        {
          "q": "After which two things can the اِسْمُ الْفَاعِلِ stand as its own slot?",
          "options": [
            "كَانَ and لَيْسَ",
            "أَنْ and أَنَّ",
            "a هَمْزَةُ الِاسْتِفْهَامِ or مَا الْمُشَبَّهَةُ بِلَيْسَ",
            "لِ and حَتَّى"
          ],
          "correct": 2,
          "explanation": "Both are things that can head a sentence and take what follows as one unit."
        },
        {
          "q": "In مَا كَاذِبٌ التَّاجِرُ, what is التَّاجِرُ?",
          "options": [
            "اِسْمُ مَا",
            "خَبَرُ مَا",
            "the فَاعِلٌ of كَاذِبٌ",
            "a بَدَلٌ"
          ],
          "correct": 2,
          "explanation": "The اِسْمُ فَاعِلٍ takes its own doer, and مَا simply negates the whole."
        },
        {
          "q": "What is unusual about مَا in مَا كَاذِبٌ التَّاجِرُ?",
          "options": [
            "It is not negating",
            "It has no اِسْمٌ and no خَبَرٌ of its own",
            "It governs a verb",
            "It is interrogative"
          ],
          "correct": 1,
          "explanation": "Both following words are مَرْفُوْعٌ, which shows مَا is not governing them."
        },
        {
          "q": "How does مَا الْوَلَدُ كَاذِبًا differ from مَا كَاذِبٌ التَّاجِرُ?",
          "options": [
            "The first has no negation",
            "In the first, مَا takes a مَرْفُوْعٌ اِسْم and a مَنْصُوْبٌ خَبَر",
            "The first is a question",
            "There is no difference"
          ],
          "correct": 1,
          "explanation": "The fatḥah on كَاذِبًا marks it as a governed خَبَرٌ; in the other sentence both words carry ḍammah."
        },
        {
          "q": "What do paired sentences with an اِسْمُ فَاعِلٍ and a فِعْلٌ مُضَارِعٌ set out to show?",
          "options": [
            "That اِسْمُ فَاعِلٍ and فِعْلٌ مُضَارِعٌ are closely similar in meaning and slots",
            "That the اِسْمُ فَاعِلٍ cannot take an object",
            "That مَا always governs",
            "That the حَالٌ must be a verb"
          ],
          "correct": 0,
          "explanation": "Its sentences are deliberately paired, one with each form."
        }
      ],
      "bank": [
        {
          "title": "مَا كَاذِبٌ التَّاجِرُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 3, Supplement)",
          "sentence": "مَا كَاذِبٌ التَّاجِرُ",
          "translation": "The merchant is not lying.",
          "cells": [
            "مَا",
            "كَاذِبٌ",
            "التَّاجِرُ"
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
                  "role": "اِسْمُ فَاعِلٍ"
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
            "اِسْمُ مَا",
            "خَبَرُ مَا",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ"
          ]
        },
        {
          "title": "هُوَ قَائِمٌ عِنْدَ الْبَابِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 3, Supplement)",
          "sentence": "هُوَ قَائِمٌ عِنْدَ الْبَابِ",
          "translation": "He is standing by the door.",
          "cells": [
            "هُوَ",
            "قَائِمٌ",
            "عِنْدَ الْبَابِ"
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
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
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
            "فَاعِلٌ",
            "حَالٌ",
            "مَفْعُوْلٌ بِهِ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "رَأَيْتُهُ قَائِمًا عِنْدَ الْبَابِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 3, Supplement)",
          "sentence": "رَأَيْتُهُ قَائِمًا عِنْدَ الْبَابِ",
          "translation": "I saw him standing by the door.",
          "cells": [
            "رَأَيْتُهُ",
            "قَائِمًا",
            "عِنْدَ الْبَابِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 1,
                  "end": 2,
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
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
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
            "خَبَرٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "اَللهُ قَادِرٌ عَلَى كُلِّ شَيْءٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 3, Supplement)",
          "sentence": "اَللهُ قَادِرٌ عَلَى كُلِّ شَيْءٍ",
          "translation": "Allah is able to do everything.",
          "cells": [
            "اَللهُ",
            "قَادِرٌ",
            "عَلَى كُلِّ شَيْءٍ"
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
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
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
            "حَالٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "هُمْ نَادِمُوْنَ عَلَى مَا فَعَلُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 3, Supplement)",
          "sentence": "هُمْ نَادِمُوْنَ عَلَى مَا فَعَلُوْا",
          "translation": "They are regretting what they did.",
          "cells": [
            "هُمْ",
            "نَادِمُوْنَ",
            "عَلَى",
            "مَا فَعَلُوْا"
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
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (و)"
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
            "فَاعِلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "رَأَى زُبَيْرٌ أَخَاهُ نَاصِرًا فَقِيْرًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 3, Supplement)",
          "sentence": "رَأَى زُبَيْرٌ أَخَاهُ نَاصِرًا فَقِيْرًا",
          "translation": "Zubayr saw his brother helping a poor man.",
          "cells": [
            "رَأَى",
            "زُبَيْرٌ",
            "أَخَاهُ",
            "نَاصِرًا",
            "فَقِيْرًا"
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
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
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
            "بَدَلٌ"
          ]
        },
        {
          "title": "اَللهُ جَازٍ كُلَّ نَفْسٍ بِمَا كَسَبَتْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 3, Supplement)",
          "sentence": "اَللهُ جَازٍ كُلَّ نَفْسٍ بِمَا كَسَبَتْ",
          "translation": "Allah will recompense every soul for what it earned.",
          "cells": [
            "اَللهُ",
            "جَازٍ",
            "كُلَّ نَفْسٍ",
            "بِمَا كَسَبَتْ"
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
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
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
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "مُضَافٌ إِلَيْهِ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "وَجَدْتُهُ صَابِرًا عَلَى مَا أَصَابَهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "وَجَدْتُهُ صَابِرًا عَلَى مَا أَصَابَهُ",
          "translation": "I found him patient with what befell him.",
          "cells": [
            "وَجَدْتُهُ",
            "صَابِرًا",
            "عَلَى مَا أَصَابَهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 1,
                  "end": 2,
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
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
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
            "حَالٌ",
            "خَبَرٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنَّ اللهَ مُبْتَلِيْكُمْ بِخَيْرٍ وَفِتْنَةٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "إِنَّ اللهَ مُبْتَلِيْكُمْ بِخَيْرٍ وَفِتْنَةٍ",
          "translation": "Indeed Allah is testing you with good and with trial.",
          "cells": [
            "إِنَّ",
            "اللهَ",
            "مُبْتَلِيْ",
            "كُمْ",
            "بِخَيْرٍ وَفِتْنَةٍ"
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
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
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
            "فَاعِلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "أَسْأَلُ اللهَ أَنْ يَتَوَفَّانِيْ وَهُوَ رَاضٍ عَنِّيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "أَسْأَلُ اللهَ أَنْ يَتَوَفَّانِيْ وَهُوَ رَاضٍ عَنِّيْ",
          "translation": "I ask Allah to take my soul while He is pleased with me.",
          "cells": [
            "أَسْأَلُ",
            "اللهَ",
            "أَنْ يَتَوَفَّانِيْ",
            "وَ",
            "هُوَ",
            "رَاضٍ عَنِّيْ"
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
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
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
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
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
            "نَعْتٌ",
            "صِلَةٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "Book Exercise 4 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In مَا هُوَ آكِلًا الْآنَ, why is آكِلًا مَنْصُوْبٌ?",
          "options": [
            "It is a حَالٌ",
            "It is the خَبَرُ مَا, since مَا here does take an اِسْمٌ and خَبَرٌ",
            "It is a مَفْعُوْلٌ بِهِ",
            "It is a تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "هُوَ is the اِسْمُ مَا; contrast مَا كَاذِبٌ التَّاجِرُ, where neither word is governed."
        },
        {
          "title": "Book Exercise 4 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "رَأَى زُبَيْرٌ أَخَاهُ نَاصِرًا فَقِيْرًا and رَأَى زُبَيْرٌ أَخَاهُ يَنْصُرُ فَقِيْرًا differ in that…",
          "options": [
            "the first has no حَالٌ",
            "the حَالٌ is an اِسْمُ فَاعِلٍ phrase in the first and a verbal sentence in the second",
            "the second has two objects",
            "the first is negated"
          ],
          "correct": 1,
          "explanation": "Both mean the same; only the form of the حَالٌ changes."
        },
        {
          "title": "Book Exercise 4 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In اَللهُ جَازٍ كُلَّ نَفْسٍ بِمَا كَسَبَتْ, what is كُلَّ نَفْسٍ?",
          "options": [
            "مُضَافٌ إِلَيْهِ",
            "the مَنْصُوْب object of the اِسْمُ فَاعِلٍ",
            "the فَاعِلٌ",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "جَازٍ is indefinite, so its object stays مَنْصُوْبٌ rather than joining by إِضَافَة."
        },
        {
          "title": "Book Exercise 4 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In اَللهُ قَادِرٌ عَلَى كُلِّ شَيْءٍ, what is عَلَى كُلِّ شَيْءٍ?",
          "options": [
            "a نَعْتٌ of قَادِرٌ",
            "a مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ belonging to the اِسْمُ فَاعِلٍ",
            "the خَبَرٌ",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "قَدَرَ reaches its object through عَلَى, and the اِسْمُ فَاعِلٍ keeps that preposition."
        },
        {
          "title": "Book Exercise 5 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In هَلْ أَنْتَ مُشْتَرٍ كَبْشًا لِعِيْدِ الْأَضْحَى, what is أَنْتَ?",
          "options": [
            "the مُبْتَدَأٌ, with the phrase after it as خَبَرٌ",
            "a تَأْكِيْدٌ",
            "the فَاعِلٌ of مُشْتَرٍ",
            "a بَدَلٌ"
          ],
          "correct": 0,
          "explanation": "هَلْ does not change the sentence's structure; أَنْتَ is the subject and مُشْتَرٍ كَبْشًا … the predicate."
        },
        {
          "title": "Book Exercise 5 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In وَجَدْتُهُ صَابِرًا عَلَى مَا أَصَابَهُ مِنَ الْمَصَائِبِ, what is صَابِرًا?",
          "options": [
            "the second object of وَجَدَ, heading its own phrase",
            "the فَاعِلٌ",
            "a تَمْيِيْزٌ",
            "a مُضَافٌ إِلَيْهِ"
          ],
          "correct": 0,
          "explanation": "وَجَدَ in the sense of 'to find X to be Y' takes two objects; the second is the اِسْمُ فَاعِلٍ phrase."
        },
        {
          "title": "Book Exercise 5 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In أَسْأَلُ اللهَ أَنْ يَتَوَفَّانِيْ وَهُوَ رَاضٍ عَنِّيْ, what is وَهُوَ رَاضٍ عَنِّيْ?",
          "options": [
            "a نَعْتٌ",
            "a حَالٌ, a nominal sentence with the وَاوٌ حَالِيَّةٌ",
            "the object of أَسْأَلُ",
            "a مَفْعُوْلٌ لَهُ"
          ],
          "correct": 1,
          "explanation": "'that He take my soul while He is pleased with me' — the state accompanying the action."
        },
        {
          "title": "Book Exercise 5 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In إِنَّ اللهَ مُبْتَلِيْكُمْ بِخَيْرٍ وَفِتْنَةٍ, what is the كُمْ of مُبْتَلِيْكُمْ?",
          "options": [
            "the فَاعِلٌ of the اِسْمُ فَاعِلٍ",
            "its object, expressed as a مُضَافٌ إِلَيْهِ",
            "a تَأْكِيْدٌ",
            "the اِسْمُ إِنَّ"
          ],
          "correct": 1,
          "explanation": "You are the ones tested; the concealed هُوَ referring to Allah is the doer."
        },
        {
          "title": "to regret",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to regret\"?",
          "options": [
            "نَدِمَ يَنْدَمُ",
            "جَزَى يَجْزِيْ",
            "قَامَ يَقُوْمُ",
            "تَمْرَةٌ"
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
            "to recompense",
            "to stand",
            "date (fruit)"
          ],
          "correct": 0
        },
        {
          "title": "to regret (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَدِمَ يَنْدَمُ?",
          "options": [
            "نَدَامَةً",
            "جَزَاءً",
            "قِيَامًا",
            "نَصْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to be able",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be able\"?",
          "options": [
            "قَدَرَ يَقْدِرُ",
            "كَسَبَ يَكْسِبُ",
            "تَاجِرٌ",
            "بَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be able",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَدَرَ يَقْدِرُ mean?",
          "options": [
            "to be able",
            "to earn",
            "merchant",
            "door"
          ],
          "correct": 0
        },
        {
          "title": "to be able (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَدَرَ يَقْدِرُ?",
          "options": [
            "قُدْرَةً",
            "كَسْبًا",
            "نَدَامَةً",
            "جَزَاءً"
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
            "قَامَ يَقُوْمُ",
            "تَمْرَةٌ",
            "فَقِيْرٌ"
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
            "to stand",
            "date (fruit)",
            "poor person"
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
            "قِيَامًا",
            "قُدْرَةً",
            "كَسْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to recompense",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to recompense\"?",
          "options": [
            "جَزَى يَجْزِيْ",
            "تَاجِرٌ",
            "بَابٌ",
            "هَمْزَةُ الِاسْتِفْهَامِ"
          ],
          "correct": 0
        },
        {
          "title": "to recompense",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَزَى يَجْزِيْ mean?",
          "options": [
            "to recompense",
            "merchant",
            "door",
            "interrogative hamzah"
          ],
          "correct": 0
        },
        {
          "title": "to recompense (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَزَى يَجْزِيْ?",
          "options": [
            "جَزَاءً",
            "نَدَامَةً",
            "نَصْرًا",
            "قِيَامًا"
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
            "تَمْرَةٌ",
            "فَقِيْرٌ",
            "نَدِمَ يَنْدَمُ"
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
            "date (fruit)",
            "poor person",
            "to regret"
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
            "قُدْرَةً",
            "جَزَاءً",
            "نَدَامَةً"
          ],
          "correct": 0
        },
        {
          "title": "to stand",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to stand\"?",
          "options": [
            "قَامَ يَقُوْمُ",
            "بَابٌ",
            "هَمْزَةُ الِاسْتِفْهَامِ",
            "قَدَرَ يَقْدِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to stand",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَامَ يَقُوْمُ mean?",
          "options": [
            "to stand",
            "door",
            "interrogative hamzah",
            "to be able"
          ],
          "correct": 0
        },
        {
          "title": "to stand (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَامَ يَقُوْمُ?",
          "options": [
            "قِيَامًا",
            "نَصْرًا",
            "كَسْبًا",
            "قُدْرَةً"
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
            "فَقِيْرٌ",
            "نَدِمَ يَنْدَمُ",
            "نَصَرَ يَنْصُرُ"
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
            "poor person",
            "to regret",
            "to help"
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
            "تَمْرٌ",
            "فُقَرَاءُ",
            "أَبْوَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "date (fruit)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"date (fruit)\"?",
          "options": [
            "تَمْرَةٌ",
            "هَمْزَةُ الِاسْتِفْهَامِ",
            "قَدَرَ يَقْدِرُ",
            "جَزَى يَجْزِيْ"
          ],
          "correct": 0
        },
        {
          "title": "date (fruit)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَمْرَةٌ mean?",
          "options": [
            "date (fruit)",
            "interrogative hamzah",
            "to be able",
            "to recompense"
          ],
          "correct": 0
        },
        {
          "title": "date (fruit) (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of تَمْرَةٌ?",
          "options": [
            "تَمْرٌ",
            "أَبْوَابٌ",
            "—",
            "تُجَّارٌ"
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
            "نَدِمَ يَنْدَمُ",
            "نَصَرَ يَنْصُرُ",
            "كَسَبَ يَكْسِبُ"
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
            "to regret",
            "to help",
            "to earn"
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
            "فُقَرَاءُ",
            "تُجَّارٌ",
            "تَمْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "poor person",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"poor person\"?",
          "options": [
            "فَقِيْرٌ",
            "قَدَرَ يَقْدِرُ",
            "جَزَى يَجْزِيْ",
            "قَامَ يَقُوْمُ"
          ],
          "correct": 0
        },
        {
          "title": "poor person",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَقِيْرٌ mean?",
          "options": [
            "poor person",
            "to be able",
            "to recompense",
            "to stand"
          ],
          "correct": 0
        },
        {
          "title": "poor person (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of فَقِيْرٌ?",
          "options": [
            "فُقَرَاءُ",
            "—",
            "تَمْرٌ",
            "تُجَّارٌ"
          ],
          "correct": 0
        },
        {
          "title": "interrogative hamzah",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"interrogative hamzah\"?",
          "options": [
            "هَمْزَةُ الِاسْتِفْهَامِ",
            "نَصَرَ يَنْصُرُ",
            "كَسَبَ يَكْسِبُ",
            "تَاجِرٌ"
          ],
          "correct": 0
        },
        {
          "title": "interrogative hamzah",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does هَمْزَةُ الِاسْتِفْهَامِ mean?",
          "options": [
            "interrogative hamzah",
            "to help",
            "to earn",
            "merchant"
          ],
          "correct": 0
        },
        {
          "title": "interrogative hamzah (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of هَمْزَةُ الِاسْتِفْهَامِ?",
          "options": [
            "—",
            "تُجَّارٌ",
            "أَبْوَابٌ",
            "تَمْرٌ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l6",
      "title": "اسم الفاعل بأل",
      "subtitle": "Supplement: Verbal Phrases",
      "concepts": [
        {
          "heading": "The ال as a مَوْصُوْلٌ",
          "lines": [
            {
              "html": "When the اِسْمُ الْفَاعِلِ occurs with an ال, the ال functions as an اِسْمٌ مَوْصُوْلٌ, and the اِسْمُ الْفَاعِلِ takes the place of the صِلَةٌ. This is a genuinely new use of ال: it is no longer merely making a word definite, it is standing in for اَلَّذِيْ.",
              "list": false
            },
            {
              "html": "اَلْقَائِمُ عِنْدَ الْبَابِ هُوَ صَدِيْقِيْ — The one standing by the door is my friend.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The اِسْمُ الْفَاعِلِ with an ال can occur in any slot in a sentence.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَلْقَائِمُ عِنْدَ الْبَابِ هُوَ صَدِيْقِيْ",
                "translation": "The one standing by the door is my friend.",
                "cells": [
                  "اَلْ",
                  "قَائِمُ",
                  "عِنْدَ الْبَابِ",
                  "هُوَ",
                  "صَدِيْقِيْ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 2,
                        "role": "مُبْتَدَأٌ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "ضَمِيْرُ الْفَصْلِ"
                      },
                      {
                        "start": 4,
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
                        "role": "اِسْمُ فَاعِلٍ"
                      },
                      {
                        "start": 2,
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
                        "role": "مَوْصُوْلٌ"
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
              "html": "Read the diagram from the bottom up and the whole logic appears. The اِسْمُ فَاعِلٍ and its adverb form a verbal phrase; that phrase is the صِلَةٌ; the ال before it is the مَوْصُوْلٌ; and the two together are one مَعْرِفَةٌ unit filling the مُبْتَدَأٌ slot. Everything learned in Section 2 about مَوْصُوْلٌ units applies here unchanged.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What genuinely new job does ال do when it precedes an اِسْمُ الْفَاعِلِ in a verbal phrase؟",
            "kind": "mcq",
            "options": [
              "It functions as an اِسْمٌ مَوْصُوْلٌ, with the اِسْمُ الْفَاعِلِ taking the place of the صِلَةٌ — not merely making the word definite",
              "It simply makes the word definite, exactly as elsewhere",
              "It turns the اِسْمُ الْفَاعِلِ into a مَصْدَرٌ",
              "It has no function here at all"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Compared with اَلَّذِيْ and a صِلَةٌ",
          "lines": [
            {
              "html": "The book's Exercise 6 pairs sentences deliberately, one with اَلَّذِيْ and a verb, one with an ال and an اِسْمُ فَاعِلٍ, so that the equivalence becomes obvious.",
              "list": false
            },
            {
              "html": "رَأَيْتُ الَّذِيْ يَجْلِسُ — I saw the one who is sitting.",
              "list": true,
              "bullet": true
            },
            {
              "html": "رَأَيْتُ الْجَالِسَ — I saw the one sitting.",
              "list": true,
              "bullet": true
            },
            {
              "html": "رَأَيْتُ الَّذِيْ يَجْلِسُ أَخُوْهُ — I saw the one whose brother is sitting.",
              "list": true,
              "bullet": true
            },
            {
              "html": "رَأَيْتُ الْجَالِسَ أَخُوْهُ — I saw the one whose brother is sitting.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The second pair is worth pausing on. Because the اِسْمُ فَاعِلٍ can take a stated فَاعِلٌ, الْجَالِسَ أَخُوْهُ carries exactly the meaning of الَّذِيْ يَجْلِسُ أَخُوْهُ — the عَائِدٌ of the صِلَةٌ being the هُ of أَخُوْهُ in both.",
              "list": false
            },
            {
              "html": "One practical difference: اَلَّذِيْ and its sisters are مَبْنِيٌّ, so they never show case. The ال form does show case, because the case falls on the اِسْمُ فَاعِلٍ itself — الْجَالِسَ is مَنْصُوْبٌ as the object of رَأَيْتُ. Agreement also shows on the word: الْمُجْتَهِدَاتِ for a feminine plural, الْحَاضِرَتَيْنِ for a feminine dual.",
              "list": false
            },
            {
              "table": {
                "title": "The two ways of saying the same thing",
                "headers": [
                  "With a مَوْصُوْلٌ and a verb",
                  "With ال and an اِسْمُ فَاعِلٍ",
                  "Meaning"
                ],
                "rows": [
                  [
                    "رَأَيْتُ الَّذِيْ يَجْلِسُ",
                    "رَأَيْتُ الْجَالِسَ",
                    "I saw the one sitting"
                  ],
                  [
                    "رَأَيْتُ الَّذِيْ يَجْلِسُ أَخُوْهُ",
                    "رَأَيْتُ الْجَالِسَ أَخُوْهُ",
                    "I saw the one whose brother is sitting"
                  ],
                  [
                    "تُحِبُّ الْمُعَلِّمَةُ اللَّاتِيْ يَجْتَهِدْنَ",
                    "تُحِبُّ الْمُعَلِّمَةُ الْمُجْتَهِدَاتِ",
                    "The teacher loves those (f) who strive"
                  ],
                  [
                    "اَلْمُسْلِمُوْنَ هُمُ الَّذِيْنَ يُؤْمِنُوْنَ بِاللهِ",
                    "اَلْمُسْلِمُوْنَ هُمُ الْمُؤْمِنُوْنَ بِاللهِ",
                    "The Muslims are those who believe in Allah"
                  ]
                ]
              }
            },
            {
              "html": "In practice the ال form is much the more compact, which is why it is so common in the Qur'an and in classical prose. اَلْآكِلُوْنَ أَمْوَالَ الْيَتَامَى says in two words what would otherwise take four.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What practical difference is there between رَأَيْتُ الَّذِيْ يَجْلِسُ and رَأَيْتُ الْجَالِسَ, even though they mean the same thing؟",
            "kind": "mcq",
            "options": [
              "اَلَّذِيْ is مَبْنِيٌّ and never shows case, while the ال form shows case (and agreement) directly on the اِسْمُ الْفَاعِلِ itself",
              "الَّذِيْ can only be used for humans",
              "الجالس cannot take a stated فَاعِلٌ",
              "There is no difference in meaning or form"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The اِسْمُ الْفَاعِلِ with an ال",
        "rows": [
          {
            "label": "The ال",
            "arabic": "an اِسْمٌ مَوْصُوْلٌ",
            "meaning": "it stands in for اَلَّذِيْ"
          },
          {
            "label": "The اِسْمُ فَاعِلٍ",
            "arabic": "takes the place of the صِلَةٌ",
            "meaning": "with all its own slots attached"
          },
          {
            "label": "Book example",
            "arabic": "اَلْقَائِمُ عِنْدَ الْبَابِ هُوَ صَدِيْقِيْ",
            "meaning": "'The one standing by the door is my friend'"
          },
          {
            "label": "Slots available",
            "arabic": "any slot in the sentence",
            "meaning": "the unit is one مَعْرِفَةٌ noun"
          },
          {
            "label": "Equivalent to",
            "arabic": "اَلَّذِيْ + a verb",
            "meaning": "الْجَالِسَ = الَّذِيْ يَجْلِسُ"
          },
          {
            "label": "Difference",
            "arabic": "case and agreement show on the word",
            "meaning": "الْجَالِسَ, الْمُجْتَهِدَاتِ, الْحَاضِرَتَيْنِ"
          },
          {
            "label": "Why it matters",
            "arabic": "compactness",
            "meaning": "two words instead of four, hence its frequency"
          }
        ]
      },
      "quiz": [
        {
          "q": "When an اِسْمُ الْفَاعِلِ carries an ال, what does that ال function as?",
          "options": [
            "an اِسْمٌ مَوْصُوْلٌ",
            "a definite article only",
            "a حَرْفُ جَرٍّ",
            "a تَنْوِيْن replacement"
          ],
          "correct": 0,
          "explanation": "It stands in for اَلَّذِيْ, and the اِسْمُ فَاعِلٍ becomes its صِلَةٌ."
        },
        {
          "q": "In اَلْقَائِمُ عِنْدَ الْبَابِ هُوَ صَدِيْقِيْ, what is عِنْدَ الْبَابِ?",
          "options": [
            "the خَبَرٌ",
            "a مَفْعُوْلٌ فِيْهِ inside the صِلَةٌ",
            "a نَعْتٌ",
            "the مُضَافٌ إِلَيْهِ"
          ],
          "correct": 1,
          "explanation": "It belongs to the اِسْمُ فَاعِلٍ, and the whole phrase is the صِلَةٌ."
        },
        {
          "q": "الْجَالِسَ is equivalent to which of the following?",
          "options": [
            "اَلَّذِيْ جَلَسَ",
            "اَلَّذِيْ يَجْلِسُ",
            "مَنْ جَلَسَ",
            "جَالِسٌ"
          ],
          "correct": 1,
          "explanation": "رَأَيْتُ الَّذِيْ يَجْلِسُ and رَأَيْتُ الْجَالِسَ are equivalent."
        },
        {
          "q": "What can the ال form show that اَلَّذِيْ cannot?",
          "options": [
            "definiteness",
            "gender",
            "case, since the ending falls on the اِسْمُ فَاعِلٍ",
            "number"
          ],
          "correct": 2,
          "explanation": "اَلَّذِيْ is مَبْنِيٌّ; الْجَالِسَ carries a visible fatḥah as an object."
        },
        {
          "q": "In رَأَيْتُ الْجَالِسَ أَخُوْهُ, what is أَخُوْهُ?",
          "options": [
            "مُضَافٌ إِلَيْهِ",
            "a بَدَلٌ",
            "the مَفْعُوْلٌ بِهِ",
            "the فَاعِلٌ of الْجَالِسَ"
          ],
          "correct": 3,
          "explanation": "A stated مَرْفُوْعٌ doer, giving 'the one whose brother is sitting'."
        },
        {
          "q": "In which slots can an ال + اِسْمُ فَاعِلٍ unit occur?",
          "options": [
            "only as مُبْتَدَأٌ",
            "only as خَبَرٌ",
            "any slot in the sentence",
            "only after a preposition"
          ],
          "correct": 2,
          "explanation": "It is one مَعْرِفَةٌ noun, so nothing restricts where it stands."
        }
      ],
      "bank": [
        {
          "title": "اَلْقَائِمُ عِنْدَ الْبَابِ هُوَ صَدِيْقِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 3, Supplement)",
          "sentence": "اَلْقَائِمُ عِنْدَ الْبَابِ هُوَ صَدِيْقِيْ",
          "translation": "The one standing by the door is my friend.",
          "cells": [
            "اَلْ",
            "قَائِمُ",
            "عِنْدَ الْبَابِ",
            "هُوَ",
            "صَدِيْقِيْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "ضَمِيْرُ الْفَصْلِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَوْصُوْلٌ"
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
                  "role": "اِسْمُ فَاعِلٍ"
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
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "رَأَيْتُ الْجَالِسَ أَخُوْهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 3, Supplement)",
          "sentence": "رَأَيْتُ الْجَالِسَ أَخُوْهُ",
          "translation": "I saw the one whose brother is sitting.",
          "cells": [
            "رَأَيْتُ",
            "اَلْ",
            "جَالِسَ",
            "أَخُوْهُ"
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
                  "role": "مَوْصُوْلٌ"
                },
                {
                  "start": 2,
                  "end": 3,
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
                  "role": "اِسْمُ فَاعِلٍ"
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
            "مُضَافٌ إِلَيْهِ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "تُحِبُّ الْمُعَلِّمَةُ الْمُجْتَهِدَاتِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 3, Supplement)",
          "sentence": "تُحِبُّ الْمُعَلِّمَةُ الْمُجْتَهِدَاتِ",
          "translation": "The teacher (f) loves those (f) who strive.",
          "cells": [
            "تُحِبُّ",
            "الْمُعَلِّمَةُ",
            "اَلْ",
            "مُجْتَهِدَاتِ"
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
                  "role": "مَوْصُوْلٌ"
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
            "مُبْتَدَأٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "نَظَرَتِ الْبِنْتُ إِلَى الْحَاضِرَتَيْنِ الدَّرْسَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 3, Supplement)",
          "sentence": "نَظَرَتِ الْبِنْتُ إِلَى الْحَاضِرَتَيْنِ الدَّرْسَ",
          "translation": "The girl looked at the two (f) attending the lesson.",
          "cells": [
            "نَظَرَتِ",
            "الْبِنْتُ",
            "إِلَى",
            "الْحَاضِرَتَيْنِ",
            "الدَّرْسَ"
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَوْصُوْلٌ وَاسْمُ فَاعِلٍ"
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
            "مُضَافٌ إِلَيْهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "اَلْمُسْلِمُوْنَ هُمُ الْمُؤْمِنُوْنَ بِاللهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 3, Supplement)",
          "sentence": "اَلْمُسْلِمُوْنَ هُمُ الْمُؤْمِنُوْنَ بِاللهِ",
          "translation": "The Muslims are those who believe in Allah.",
          "cells": [
            "اَلْمُسْلِمُوْنَ",
            "هُمُ",
            "اَلْ",
            "مُؤْمِنُوْنَ",
            "بِاللهِ"
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
                  "role": "ضَمِيْرُ الْفَصْلِ"
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
                  "role": "مَوْصُوْلٌ"
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
                  "role": "اِسْمُ فَاعِلٍ"
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
            "فَاعِلٌ",
            "تَأْكِيْدٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "لَيَخْسَرَنَّ الْمُضَيِّعُوْنَ لِوَقْتِهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 3, Supplement)",
          "sentence": "لَيَخْسَرَنَّ الْمُضَيِّعُوْنَ لِوَقْتِهِمْ",
          "translation": "Those who waste their time will surely lose.",
          "cells": [
            "لَيَخْسَرَنَّ",
            "اَلْ",
            "مُضَيِّعُوْنَ",
            "لِوَقْتِهِمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ مُؤَكَّدٌ بِالنُّوْنِ"
                },
                {
                  "start": 1,
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
                  "role": "مَوْصُوْلٌ"
                },
                {
                  "start": 2,
                  "end": 3,
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
                  "role": "اِسْمُ فَاعِلٍ"
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
            "مَفْعُوْلٌ بِهِ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "نَعُوْذُ بِاللهِ مِنْ عَذَابِهِ النَّازِلِ عَلَى الظَّالِمِيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 3, Supplement)",
          "sentence": "نَعُوْذُ بِاللهِ مِنْ عَذَابِهِ النَّازِلِ عَلَى الظَّالِمِيْنَ",
          "translation": "We seek refuge in Allah from His punishment that descends upon the wrongdoers.",
          "cells": [
            "نَعُوْذُ",
            "بِاللهِ",
            "مِنْ",
            "عَذَابِهِ",
            "النَّازِلِ",
            "عَلَى الظَّالِمِيْنَ"
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
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ ثَانٍ"
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 4,
                  "end": 5,
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
                  "role": "مَوْصُوْلٌ وَاسْمُ فَاعِلٍ"
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
            "فَاعِلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "اَلْآكِلُوْنَ أَمْوَالَ الْيَتَامَى سَيَأْكُلُوْنَ نَارًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 3, Supplement)",
          "sentence": "اَلْآكِلُوْنَ أَمْوَالَ الْيَتَامَى سَيَأْكُلُوْنَ نَارًا",
          "translation": "Those who consume the wealth of orphans will consume fire.",
          "cells": [
            "اَلْ",
            "آكِلُوْنَ",
            "أَمْوَالَ الْيَتَامَى",
            "سَيَأْكُلُوْنَ",
            "نَارًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
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
                  "start": 0,
                  "end": 0,
                  "role": "مَوْصُوْلٌ"
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
                  "role": "اِسْمُ فَاعِلٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
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
            "فَاعِلٌ",
            "مُضَافٌ إِلَيْهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "يُحِبُّ اللهُ التَّائِبِيْنَ الْمُسْتَغْفِرِيْنَ لِذُنُوْبِهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 3, Supplement)",
          "sentence": "يُحِبُّ اللهُ التَّائِبِيْنَ الْمُسْتَغْفِرِيْنَ لِذُنُوْبِهِمْ",
          "translation": "Allah loves those who repent and seek forgiveness for their sins.",
          "cells": [
            "يُحِبُّ",
            "اللهُ",
            "التَّائِبِيْنَ",
            "الْمُسْتَغْفِرِيْنَ",
            "لِذُنُوْبِهِمْ"
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
                  "role": "مَوْصُوْلٌ وَاسْمُ فَاعِلٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "نَعْتٌ"
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
            "حَالٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "تَشْرَبُ الْبَقَرَاتُ مِنَ النَّهْرِ الْجَارِيْ بِالْقَرْيَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 3, Supplement)",
          "sentence": "تَشْرَبُ الْبَقَرَاتُ مِنَ النَّهْرِ الْجَارِيْ بِالْقَرْيَةِ",
          "translation": "The cows drink from the river flowing through the village.",
          "cells": [
            "تَشْرَبُ",
            "الْبَقَرَاتُ",
            "مِنَ",
            "النَّهْرِ",
            "الْجَارِيْ",
            "بِالْقَرْيَةِ"
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 4,
                  "end": 5,
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
                  "role": "مَوْصُوْلٌ وَاسْمُ فَاعِلٍ"
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
            "خَبَرٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 6 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In نَظَرَتِ الْبِنْتُ إِلَى الْحَاضِرَتَيْنِ الدَّرْسَ, what does the form الْحَاضِرَتَيْنِ show?",
          "options": [
            "feminine dual, and مَجْرُوْرٌ after إِلَى",
            "feminine plural",
            "masculine dual",
            "it is مَبْنِيٌّ and shows nothing"
          ],
          "correct": 0,
          "explanation": "Unlike اَللَّتَيْنِ, the ال form carries agreement and case on the participle itself."
        },
        {
          "title": "Book Exercise 6 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In الْحَاضِرَتَيْنِ الدَّرْسَ, what is الدَّرْسَ?",
          "options": [
            "مُضَافٌ إِلَيْهِ",
            "the مَنْصُوْب object of the اِسْمُ فَاعِلٍ",
            "a بَدَلٌ",
            "the فَاعِلٌ"
          ],
          "correct": 1,
          "explanation": "A dual form cannot be a مُضَافٌ here, so the object stays مَنْصُوْبٌ."
        },
        {
          "title": "Book Exercise 6 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "اَلْمُسْلِمُوْنَ هُمُ الْمُؤْمِنُوْنَ بِاللهِ وَرَسُوْلِهِ — what is هُمُ?",
          "options": [
            "the مُبْتَدَأٌ",
            "a تَأْكِيْدٌ",
            "a ضَمِيْرُ الْفَصْلِ",
            "the خَبَرٌ"
          ],
          "correct": 2,
          "explanation": "It separates the subject from a definite predicate, exactly as in Section 2."
        },
        {
          "title": "Book Exercise 7 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In لَيَخْسَرَنَّ الْمُضَيِّعُوْنَ لِوَقْتِهِمْ, what does the لَ … نَّ pair do?",
          "options": [
            "It negates the verb",
            "It emphasises the verb — the نُوْنُ التَّوْكِيْدِ with a preceding لَام",
            "It marks the future",
            "It makes the verb passive"
          ],
          "correct": 1,
          "explanation": "'They will surely lose'; the ال phrase after it is the فَاعِلٌ."
        },
        {
          "title": "Book Exercise 7 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In نَعُوْذُ بِاللهِ مِنْ عَذَابِهِ النَّازِلِ عَلَى الظَّالِمِيْنَ, what is النَّازِلِ?",
          "options": [
            "a مَوْصُوْلٌ unit standing alone",
            "a نَعْتٌ of عَذَابِهِ, itself heading a verbal phrase",
            "the مَجْرُوْرٌ of مِنْ",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "An ال + اِسْمُ فَاعِلٍ unit may describe a stated noun as well as stand on its own."
        },
        {
          "title": "Book Exercise 7 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In اَلْآكِلُوْنَ أَمْوَالَ الْيَتَامَى سَيَأْكُلُوْنَ فِيْ بُطُوْنِهِمْ نَارًا, what is أَمْوَالَ الْيَتَامَى?",
          "options": [
            "the مُبْتَدَأٌ",
            "the مَنْصُوْب object of الْآكِلُوْنَ",
            "the خَبَرٌ",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "A sound masculine plural cannot host an إِضَافَة here, so the object is مَنْصُوْبٌ."
        },
        {
          "title": "Book Exercise 7 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In لَا يُحِبُّ اللهُ الْمُعْجَبِيْنَ بِأَعْمَالِهِمْ بَلِ الرَّاجِيْنَ لِلْقَبُوْلِ, what does بَلْ join?",
          "options": [
            "two subjects",
            "two objects of يُحِبُّ, correcting the first",
            "two sentences",
            "two adverbs"
          ],
          "correct": 1,
          "explanation": "بَلْ is a حَرْفُ عَطْفٍ of correction, and both ال phrases are مَنْصُوْبٌ."
        },
        {
          "title": "Book Exercise 7 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In رَأَيْتُ بَعْضَ الطُّلَّابِ طَالِبِيْنَ الْعِلْمَ فَأَعْجَبَنِيْ طَلَبُهُمْ لَهُ, what is طَالِبِيْنَ الْعِلْمَ?",
          "options": [
            "a نَعْتٌ",
            "a حَالٌ built on an اِسْمُ فَاعِلٍ without ال",
            "the مَفْعُوْلٌ بِهِ",
            "a مَصْدَر phrase"
          ],
          "correct": 1,
          "explanation": "It has no ال, so it falls under the previous lesson's second slot — the حَالٌ."
        },
        {
          "title": "to sit",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to sit\"?",
          "options": [
            "جَلَسَ يَجْلِسُ",
            "نَزَلَ يَنْزِلُ",
            "أَغْنَى يُغْنِيْ",
            "شَاةٌ"
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
            "to descend",
            "to avail, enrich",
            "sheep"
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
            "نُزُوْلًا",
            "إِغْنَاءً",
            "حُضُوْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to attend, be present",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to attend, be present\"?",
          "options": [
            "حَضَرَ يَحْضُرُ",
            "جَرَى يَجْرِيْ",
            "رَجَا يَرْجُوْ",
            "نَهْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to attend, be present",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَضَرَ يَحْضُرُ mean?",
          "options": [
            "to attend, be present",
            "to flow",
            "to hope for",
            "river"
          ],
          "correct": 0
        },
        {
          "title": "to attend, be present (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَضَرَ يَحْضُرُ?",
          "options": [
            "حُضُوْرًا",
            "جَرَيَانًا",
            "رَجَاءً",
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
            "أَغْنَى يُغْنِيْ",
            "شَاةٌ",
            "بَطْنٌ"
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
            "to avail, enrich",
            "sheep",
            "belly, stomach"
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
            "إِغْنَاءً",
            "جُلُوْسًا",
            "نُزُوْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to descend",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to descend\"?",
          "options": [
            "نَزَلَ يَنْزِلُ",
            "رَجَا يَرْجُوْ",
            "نَهْرٌ",
            "قَبُوْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "to descend",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَزَلَ يَنْزِلُ mean?",
          "options": [
            "to descend",
            "to hope for",
            "river",
            "acceptance"
          ],
          "correct": 0
        },
        {
          "title": "to descend (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَزَلَ يَنْزِلُ?",
          "options": [
            "نُزُوْلًا",
            "رَجَاءً",
            "حُضُوْرًا",
            "جَرَيَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to flow",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to flow\"?",
          "options": [
            "جَرَى يَجْرِيْ",
            "شَاةٌ",
            "بَطْنٌ",
            "تَائِبٌ"
          ],
          "correct": 0
        },
        {
          "title": "to flow",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَرَى يَجْرِيْ mean?",
          "options": [
            "to flow",
            "sheep",
            "belly, stomach",
            "one who repents"
          ],
          "correct": 0
        },
        {
          "title": "to flow (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَرَى يَجْرِيْ?",
          "options": [
            "جَرَيَانًا",
            "جُلُوْسًا",
            "وُجُوْبًا",
            "إِغْنَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to avail, enrich",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to avail, enrich\"?",
          "options": [
            "أَغْنَى يُغْنِيْ",
            "نَهْرٌ",
            "قَبُوْلٌ",
            "مُسْرِفٌ"
          ],
          "correct": 0
        },
        {
          "title": "to avail, enrich",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَغْنَى يُغْنِيْ mean?",
          "options": [
            "to avail, enrich",
            "river",
            "acceptance",
            "wasteful, extravagant"
          ],
          "correct": 0
        },
        {
          "title": "to avail, enrich (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَغْنَى يُغْنِيْ?",
          "options": [
            "إِغْنَاءً",
            "حُضُوْرًا",
            "نُزُوْلًا",
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
            "بَطْنٌ",
            "تَائِبٌ",
            "جَلَسَ يَجْلِسُ"
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
            "belly, stomach",
            "one who repents",
            "to sit"
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
            "وُجُوْبًا",
            "جَرَيَانًا",
            "جُلُوْسًا"
          ],
          "correct": 0
        },
        {
          "title": "sheep",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sheep\"?",
          "options": [
            "شَاةٌ",
            "قَبُوْلٌ",
            "مُسْرِفٌ",
            "حَضَرَ يَحْضُرُ"
          ],
          "correct": 0
        },
        {
          "title": "sheep",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَاةٌ mean?",
          "options": [
            "sheep",
            "acceptance",
            "wasteful, extravagant",
            "to attend, be present"
          ],
          "correct": 0
        },
        {
          "title": "sheep (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَاةٌ?",
          "options": [
            "شِيَاهٌ",
            "مُسْرِفُوْنَ",
            "بُطُوْنٌ",
            "تَائِبُوْنَ"
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
            "تَائِبٌ",
            "جَلَسَ يَجْلِسُ",
            "وَجَبَ يَجِبُ"
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
            "one who repents",
            "to sit",
            "to be obligatory"
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
            "شِيَاهٌ",
            "—",
            "مُسْرِفُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "belly, stomach",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"belly, stomach\"?",
          "options": [
            "بَطْنٌ",
            "مُسْرِفٌ",
            "حَضَرَ يَحْضُرُ",
            "نَزَلَ يَنْزِلُ"
          ],
          "correct": 0
        },
        {
          "title": "belly, stomach",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَطْنٌ mean?",
          "options": [
            "belly, stomach",
            "wasteful, extravagant",
            "to attend, be present",
            "to descend"
          ],
          "correct": 0
        },
        {
          "title": "belly, stomach (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَطْنٌ?",
          "options": [
            "بُطُوْنٌ",
            "أَنْهَارٌ",
            "تَائِبُوْنَ",
            "شِيَاهٌ"
          ],
          "correct": 0
        },
        {
          "title": "acceptance",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"acceptance\"?",
          "options": [
            "قَبُوْلٌ",
            "جَلَسَ يَجْلِسُ",
            "وَجَبَ يَجِبُ",
            "جَرَى يَجْرِيْ"
          ],
          "correct": 0
        },
        {
          "title": "acceptance",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَبُوْلٌ mean?",
          "options": [
            "acceptance",
            "to sit",
            "to be obligatory",
            "to flow"
          ],
          "correct": 0
        },
        {
          "title": "acceptance (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قَبُوْلٌ?",
          "options": [
            "—",
            "بُطُوْنٌ",
            "مُسْرِفُوْنَ",
            "أَنْهَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "one who repents",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"one who repents\"?",
          "options": [
            "تَائِبٌ",
            "حَضَرَ يَحْضُرُ",
            "نَزَلَ يَنْزِلُ",
            "أَغْنَى يُغْنِيْ"
          ],
          "correct": 0
        },
        {
          "title": "one who repents",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَائِبٌ mean?",
          "options": [
            "one who repents",
            "to attend, be present",
            "to descend",
            "to avail, enrich"
          ],
          "correct": 0
        },
        {
          "title": "one who repents (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of تَائِبٌ?",
          "options": [
            "تَائِبُوْنَ",
            "—",
            "شِيَاهٌ",
            "بُطُوْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "wasteful, extravagant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"wasteful, extravagant\"?",
          "options": [
            "مُسْرِفٌ",
            "وَجَبَ يَجِبُ",
            "جَرَى يَجْرِيْ",
            "رَجَا يَرْجُوْ"
          ],
          "correct": 0
        },
        {
          "title": "wasteful, extravagant",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُسْرِفٌ mean?",
          "options": [
            "wasteful, extravagant",
            "to be obligatory",
            "to flow",
            "to hope for"
          ],
          "correct": 0
        },
        {
          "title": "wasteful, extravagant (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُسْرِفٌ?",
          "options": [
            "مُسْرِفُوْنَ",
            "تَائِبُوْنَ",
            "أَنْهَارٌ",
            "—"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l7",
      "title": "ملحوظات على اسم الفاعل",
      "subtitle": "Supplement: Verbal Phrases",
      "concepts": [
        {
          "heading": "Note 1 — a مُضَافٌ that keeps its ال",
          "lines": [
            {
              "html": "The مُضَافٌ in an اِسْمُ الْفَاعِلِ verbal phrase may have an ال. This is a genuine exception to the rule met long ago, that a مُضَافٌ drops both its ال and its tanwīn.",
              "list": false
            },
            {
              "html": "اَلْمُقِيْمِي الصَّلَاةِ — those who establish the prayer",
              "list": true,
              "bullet": true
            },
            {
              "html": "The exception is allowed because the إِضَافَة here is only a matter of form. اَلصَّلَاةِ is really the object of الْمُقِيْمِيْنَ, and joining it by إِضَافَة is simply a lighter way of attaching it. Since the إِضَافَة is not expressing possession, it does not force the ال off the first word.",
              "list": false
            },
            {
              "html": "Notice what does drop: the nūn of the sound masculine plural. اَلْمُقِيْمُوْنَ becomes اَلْمُقِيْمِي before its مُضَافٌ إِلَيْهِ, exactly as any plural مُضَافٌ loses its nūn. So the form still shows that an إِضَافَة is present, even though the ال has stayed.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Why is اَلْمُقِيْمِي الصَّلَاةِ allowed to keep its ال even though it's a مُضَافٌ, breaking the usual rule that a مُضَافٌ drops its ال؟",
            "kind": "mcq",
            "options": [
              "Because the إِضَافَة here is only a lighter way of attaching what is really an object, not a possession — so it doesn't force the ال off",
              "Because الصلاة is مَعْرِفَةٌ",
              "Because all plural مُضَافٌ words keep their ال",
              "This is simply an unexplained exception, with no underlying reason"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Note 2 — specific or general",
          "lines": [
            {
              "html": "The مَوْصُوْلٌ in the form of an ال before the اِسْمُ الْفَاعِلِ can have either a specific or a general meaning.",
              "list": false
            },
            {
              "html": "اَلْمُجْتَهِدُوْنَ هُمُ الْفَائِزُوْنَ — Those who work hard are successful.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In this example the word مُجْتَهِدُوْنَ can be referring to a specific group of people who are hardworking, or it can be referring to all hardworking people. Only the context decides, and often the general reading is the one intended — which is why sentences of this shape read so naturally as proverbs.",
              "list": false
            },
            {
              "html": "The same ambiguity exists with اَلَّذِيْ and its sisters, and with the نَكِرَةٌ مَوْصُوْفَةٌ of Section 2. Arabic simply does not mark the difference between 'the ones who strive' and 'whoever strives'; English has to choose.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In اَلْمُجْتَهِدُوْنَ هُمُ الْفَائِزُوْنَ, what two readings does the ال-headed اِسْمُ الْفَاعِلِ allow؟",
            "kind": "mcq",
            "options": [
              "A specific group of particular hardworking people, or hardworking people in general — only context decides",
              "Only ever a specific reading",
              "Only ever a general reading",
              "It must refer to exactly one person"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Note 3 — the اِسْمُ الْفَاعِلِ as the خَبَرُ كَانَ",
          "lines": [
            {
              "html": "If the اِسْمُ الْفَاعِلِ occurs as the خَبَرٌ of كَانَ, it will have the past continuous tense.",
              "list": false
            },
            {
              "html": "كَانَ قَائِمًا عِنْدَ الْبَابِ — He was standing by the door.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "كَانَ قَائِمًا عِنْدَ الْبَابِ",
                "translation": "He was standing by the door.",
                "cells": [
                  "كَانَ",
                  "قَائِمًا",
                  "عِنْدَ الْبَابِ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (هُوَ)"
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
                        "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
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
              "html": "This makes a neat set with what was studied in Section 1. كَانَ يَقُوْمُ gives 'he used to stand', a habitual past; كَانَ قَائِمًا gives 'he was standing', a continuous past. Both are built the same way — كَانَ with a خَبَرٌ that carries a verbal meaning — and both are rendered in English with a past tense the bare مَاضٍ could not supply.",
              "list": false
            },
            {
              "table": {
                "title": "كَانَ with different kinds of خَبَرٌ",
                "headers": [
                  "Form of the خَبَرٌ",
                  "Example",
                  "English"
                ],
                "rows": [
                  [
                    "a single noun or adjective",
                    "كَانَ مَرِيْضًا",
                    "he was ill"
                  ],
                  [
                    "a فِعْلٌ مُضَارِعٌ",
                    "كَانَ يَقُوْمُ",
                    "he used to stand"
                  ],
                  [
                    "an اِسْمُ فَاعِلٍ",
                    "كَانَ قَائِمًا",
                    "he was standing"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What tense results when an اِسْمُ الْفَاعِلِ becomes the خَبَرُ كَانَ, as in كَانَ قَائِمًا عِنْدَ الْبَابِ؟",
            "kind": "mcq",
            "options": [
              "The past continuous — 'he was standing'",
              "The past habitual — 'he used to stand'",
              "The simple present",
              "The future"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Three Notes on the اِسْمُ الْفَاعِلِ",
        "rows": [
          {
            "label": "Note 1",
            "arabic": "the مُضَافٌ may keep its ال",
            "meaning": "اَلْمُقِيْمِي الصَّلَاةِ — an exception to the usual rule"
          },
          {
            "label": "Why",
            "arabic": "the إِضَافَة is formal only",
            "meaning": "the second word is really the object, not a possessor"
          },
          {
            "label": "What still drops",
            "arabic": "the nūn of the plural",
            "meaning": "اَلْمُقِيْمُوْنَ becomes اَلْمُقِيْمِي"
          },
          {
            "label": "Note 2",
            "arabic": "specific or general",
            "meaning": "اَلْمُجْتَهِدُوْنَ — 'those people' or 'anyone who strives'"
          },
          {
            "label": "Note 3",
            "arabic": "as the خَبَرُ كَانَ",
            "meaning": "كَانَ قَائِمًا — 'he was standing', past continuous"
          },
          {
            "label": "Compare",
            "arabic": "كَانَ يَقُوْمُ",
            "meaning": "'he used to stand' — the habitual past of Section 1"
          }
        ]
      },
      "quiz": [
        {
          "q": "اَلْمُقِيْمِي الصَّلَاةِ keeps the ال on the مُضَافٌ. What does this permit that the ordinary rule of إِضَافَة forbids?",
          "options": [
            "a مُضَافٌ that keeps its ال",
            "a مُضَافٌ إِلَيْهِ with tanwīn",
            "two مُضَافٌ إِلَيْهِ in a row",
            "a مُضَافٌ that is indefinite"
          ],
          "correct": 0,
          "explanation": "اَلْمُقِيْمِي الصَّلَاةِ keeps the ال on the first word."
        },
        {
          "q": "Why is اَلْمُقِيْمِي الصَّلَاةِ allowed to keep the ال on its مُضَافٌ, against the ordinary rule?",
          "options": [
            "Because the phrase is definite",
            "Because the إِضَافَة is only formal — the second word is really the object",
            "Because the word is plural",
            "Because اَلصَّلَاة is feminine"
          ],
          "correct": 1,
          "explanation": "No possession is expressed, so nothing forces the ال off."
        },
        {
          "q": "What does still drop in اَلْمُقِيْمِي الصَّلَاةِ?",
          "options": [
            "the ال",
            "the kasrah",
            "the nūn of the sound masculine plural",
            "nothing"
          ],
          "correct": 2,
          "explanation": "اَلْمُقِيْمُوْنَ becomes اَلْمُقِيْمِي, so the إِضَافَة is still visible."
        },
        {
          "q": "اَلْمُجْتَهِدُوْنَ can mean either 'those (particular) people' or 'anyone who strives'. So the ال before an اِسْمُ فَاعِلٍ may be…",
          "options": [
            "only specific",
            "only general",
            "either specific or general, depending on context",
            "always dropped"
          ],
          "correct": 2,
          "explanation": "اَلْمُجْتَهِدُوْنَ can be a particular group or hardworking people in general."
        },
        {
          "q": "What tense does an اِسْمُ الْفَاعِلِ carry as the خَبَرُ كَانَ?",
          "options": [
            "simple past",
            "past continuous",
            "future",
            "present habitual"
          ],
          "correct": 1,
          "explanation": "كَانَ قَائِمًا عِنْدَ الْبَابِ — 'he was standing by the door'."
        },
        {
          "q": "How does كَانَ قَائِمًا differ from كَانَ يَقُوْمُ?",
          "options": [
            "The first is future, the second past",
            "They are identical",
            "The first is negative",
            "The first is continuous, the second habitual"
          ],
          "correct": 3,
          "explanation": "'He was standing' versus 'he used to stand' — a difference of aspect, not of tense."
        }
      ],
      "bank": [
        {
          "title": "كَانَ قَائِمًا عِنْدَ الْبَابِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "كَانَ قَائِمًا عِنْدَ الْبَابِ",
          "translation": "He was standing by the door.",
          "cells": [
            "كَانَ",
            "قَائِمًا",
            "عِنْدَ الْبَابِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (هُوَ)"
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
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
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
            "حَالٌ",
            "مَفْعُوْلٌ بِهِ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "كَانَ الطِّفْلُ نَائِمًا فِي الْغُرْفَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "كَانَ الطِّفْلُ نَائِمًا فِي الْغُرْفَةِ",
          "translation": "The child was sleeping in the room.",
          "cells": [
            "كَانَ",
            "الطِّفْلُ",
            "نَائِمًا",
            "فِي الْغُرْفَةِ"
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
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هُوَ)"
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
            "فَاعِلٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "اَلْمُقِيْمِي الصَّلَاةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 3, Supplement)",
          "sentence": "اَلْمُقِيْمِي الصَّلَاةِ",
          "translation": "those who establish the prayer",
          "cells": [
            "اَلْ",
            "مُقِيْمِي",
            "الصَّلَاةِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَوْصُوْلٌ"
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
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ فَاعِلٍ"
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
            "فَاعِلٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "اَلْمُجْتَهِدُوْنَ هُمُ الْفَائِزُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 3, Supplement)",
          "sentence": "اَلْمُجْتَهِدُوْنَ هُمُ الْفَائِزُوْنَ",
          "translation": "Those who work hard are successful.",
          "cells": [
            "اَلْمُجْتَهِدُوْنَ",
            "هُمُ",
            "الْفَائِزُوْنَ"
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
                  "role": "ضَمِيْرُ الْفَصْلِ"
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
                  "start": 0,
                  "end": 0,
                  "role": "مَوْصُوْلٌ وَاسْمُ فَاعِلٍ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "تَأْكِيْدٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "اَلْآكِلُوْنَ أَمْوَالَ الْيَتَامَى",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 3, Supplement)",
          "sentence": "اَلْآكِلُوْنَ أَمْوَالَ الْيَتَامَى",
          "translation": "those who consume the wealth of orphans",
          "cells": [
            "اَلْ",
            "آكِلُوْنَ",
            "أَمْوَالَ",
            "الْيَتَامَى"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَوْصُوْلٌ"
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
                  "role": "اِسْمُ فَاعِلٍ"
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
            "فَاعِلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "اَلْمُسْلِمُوْنَ هُمُ الْمُؤْمِنُوْنَ بِاللهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 3, Supplement)",
          "sentence": "اَلْمُسْلِمُوْنَ هُمُ الْمُؤْمِنُوْنَ بِاللهِ",
          "translation": "The Muslims are those who believe in Allah.",
          "cells": [
            "اَلْمُسْلِمُوْنَ",
            "هُمُ",
            "اَلْ",
            "مُؤْمِنُوْنَ",
            "بِاللهِ"
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
                  "role": "ضَمِيْرُ الْفَصْلِ"
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
                  "role": "مَوْصُوْلٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "تَأْكِيْدٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "اَلْمَرْأَةُ صَائِمَةٌ غَدًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "اَلْمَرْأَةُ صَائِمَةٌ غَدًا",
          "translation": "The woman is fasting tomorrow.",
          "cells": [
            "اَلْمَرْأَةُ",
            "صَائِمَةٌ",
            "غَدًا"
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
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (هِيَ)"
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
            "خَبَرُ كَانَ",
            "حَالٌ",
            "فَاعِلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَا يُحِبُّ اللهُ الْمُعْجَبِيْنَ بِأَعْمَالِهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 3, Supplement)",
          "sentence": "لَا يُحِبُّ اللهُ الْمُعْجَبِيْنَ بِأَعْمَالِهِمْ",
          "translation": "Allah does not love those impressed by their own deeds.",
          "cells": [
            "لَا",
            "يُحِبُّ",
            "اللهُ",
            "اَلْ",
            "مُعْجَبِيْنَ",
            "بِأَعْمَالِهِمْ"
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
                  "role": "مَوْصُوْلٌ"
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
                  "role": "اِسْمُ مَفْعُوْلٍ"
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
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "تُحِبُّ الْمُعَلِّمَةُ اللَّاتِيْ يَجْتَهِدْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 3, Supplement)",
          "sentence": "تُحِبُّ الْمُعَلِّمَةُ اللَّاتِيْ يَجْتَهِدْنَ",
          "translation": "The teacher (f) loves those (f) who strive.",
          "cells": [
            "تُحِبُّ",
            "الْمُعَلِّمَةُ",
            "اللَّاتِيْ",
            "يَجْتَهِدْنَ"
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
                  "role": "اِسْمٌ مَوْصُوْلٌ"
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
            "اِسْمُ فَاعِلٍ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "اَلنَّاسُ مُجْتَمِعُوْنَ الْيَوْمَ فِي الْحَدِيْقَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Supplement)",
          "sentence": "اَلنَّاسُ مُجْتَمِعُوْنَ الْيَوْمَ فِي الْحَدِيْقَةِ",
          "translation": "The people are gathered today in the garden.",
          "cells": [
            "اَلنَّاسُ",
            "مُجْتَمِعُوْنَ",
            "الْيَوْمَ",
            "فِي الْحَدِيْقَةِ"
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
                  "role": "اِسْمُ فَاعِلٍ وَالْفَاعِلُ (و)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "Book Exercise 7 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In اَلْمُقِيْمِي الصَّلَاةِ, what is اَلصَّلَاةِ?",
          "options": [
            "a possessor",
            "the object of the اِسْمُ فَاعِلٍ, joined by a formal إِضَافَة",
            "a نَعْتٌ",
            "the فَاعِلٌ"
          ],
          "correct": 1,
          "explanation": "The prayer is what is established, so the إِضَافَة carries an object meaning."
        },
        {
          "title": "Book Exercise 5 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In كَانَ الطِّفْلُ نَائِمًا فِي الْغُرْفَةِ, why is نَائِمًا مَنْصُوْبٌ?",
          "options": [
            "It is a حَالٌ",
            "It is the خَبَرُ كَانَ",
            "It is the object of a verb",
            "It is a تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "اَلطِّفْلُ is the اِسْمُ كَانَ, and كَانَ puts its خَبَر into the مَنْصُوْب state."
        },
        {
          "title": "Book Exercise 5 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "How should كَانَ الطِّفْلُ نَائِمًا be rendered?",
          "options": [
            "The child slept",
            "The child was sleeping",
            "The child will sleep",
            "The child used to sleep"
          ],
          "correct": 1,
          "explanation": "Note 3: an اِسْمُ فَاعِلٍ as خَبَرُ كَانَ gives the past continuous."
        },
        {
          "title": "Book Exercise 6 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In اَلْمُسْلِمُوْنَ هُمُ الْمُؤْمِنُوْنَ بِاللهِ, which reading of the ال is intended?",
          "options": [
            "specific — one identifiable group",
            "general — believers as a class",
            "neither; the ال is only for definiteness",
            "it cannot be determined at all"
          ],
          "correct": 1,
          "explanation": "The sentence states what Muslims are by definition, so the general reading applies."
        },
        {
          "title": "Book Exercise 6 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In اَلْقَائِمُ عِنْدَ الْبَابِ هُوَ صَدِيْقِيْ, which reading applies?",
          "options": [
            "general — anyone who stands by a door",
            "specific — one identifiable person",
            "both equally",
            "neither"
          ],
          "correct": 1,
          "explanation": "The speaker is pointing at someone, so the ال is specific here."
        },
        {
          "title": "Book Exercise 7 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In اَلْآكِلُوْنَ أَمْوَالَ الْيَتَامَى سَيَأْكُلُوْنَ نَارًا, why is the object مَنْصُوْبٌ rather than joined by إِضَافَة?",
          "options": [
            "Because the phrase is general",
            "Because the plural has kept its nūn, so no إِضَافَة has been made",
            "Because أَمْوَال is definite",
            "Because the verb is future"
          ],
          "correct": 1,
          "explanation": "Had it been an إِضَافَة the form would be الْآكِلِي أَمْوَالِ, as in اَلْمُقِيْمِي الصَّلَاةِ."
        },
        {
          "title": "Book Exercise 7 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "In لَا يُحِبُّ اللهُ الْمُعْجَبِيْنَ بِأَعْمَالِهِمْ, the ال before الْمُعْجَبِيْنَ is…",
          "options": [
            "specific",
            "general",
            "neither — it is a نَعْتٌ",
            "a تَنْوِيْن"
          ],
          "correct": 1,
          "explanation": "A statement about what Allah loves or dislikes applies to the class, not to individuals."
        },
        {
          "title": "Book Exercise 6 (Section 3, Supplement)",
          "kind": "mcq",
          "prompt": "Which of these keeps its plural nūn, and therefore has no إِضَافَة?",
          "options": [
            "اَلْمُقِيْمِي الصَّلَاةِ",
            "اَلْآكِلُوْنَ أَمْوَالَ الْيَتَامَى",
            "both",
            "neither"
          ],
          "correct": 1,
          "explanation": "The nūn is the diagnostic: present means no إِضَافَة, absent means an إِضَافَة has been made."
        },
        {
          "title": "to establish",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to establish\"?",
          "options": [
            "أَقَامَ يُقِيْمُ",
            "نَامَ يَنَامُ",
            "فَائِزٌ",
            "اِجْتَهَدَ يَجْتَهِدُ"
          ],
          "correct": 0
        },
        {
          "title": "to establish",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَقَامَ يُقِيْمُ mean?",
          "options": [
            "to establish",
            "to sleep",
            "successful one",
            "to strive"
          ],
          "correct": 0
        },
        {
          "title": "to establish (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَقَامَ يُقِيْمُ?",
          "options": [
            "إِقَامَةً",
            "نَوْمًا",
            "فَوْزًا",
            "اِجْتِهَادًا"
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
            "مُقِيْمٌ",
            "مُجْتَهِدٌ",
            "فَازَ يَفُوْزُ"
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
            "one who establishes",
            "hardworking one",
            "to succeed, attain"
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
            "إِقَامَةً",
            "نَوْمًا",
            "فَوْزًا"
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
            "فَائِزٌ",
            "أَقَامَ يُقِيْمُ",
            "نَامَ يَنَامُ"
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
            "successful one",
            "to establish",
            "to sleep"
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
            "اِجْتِهَادًا",
            "إِقَامَةً",
            "نَوْمًا"
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
            "مُجْتَهِدٌ",
            "اِجْتَهَدَ يَجْتَهِدُ",
            "مُقِيْمٌ"
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
            "hardworking one",
            "to strive",
            "one who establishes"
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
            "فَوْزًا",
            "اِجْتِهَادًا",
            "إِقَامَةً"
          ],
          "correct": 0
        },
        {
          "title": "one who establishes",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"one who establishes\"?",
          "options": [
            "مُقِيْمٌ",
            "أَقَامَ يُقِيْمُ",
            "فَازَ يَفُوْزُ",
            "فَائِزٌ"
          ],
          "correct": 0
        },
        {
          "title": "one who establishes",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُقِيْمٌ mean?",
          "options": [
            "one who establishes",
            "to establish",
            "to succeed, attain",
            "successful one"
          ],
          "correct": 0
        },
        {
          "title": "successful one",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"successful one\"?",
          "options": [
            "فَائِزٌ",
            "اِجْتَهَدَ يَجْتَهِدُ",
            "نَامَ يَنَامُ",
            "مُجْتَهِدٌ"
          ],
          "correct": 0
        },
        {
          "title": "successful one",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَائِزٌ mean?",
          "options": [
            "successful one",
            "to strive",
            "to sleep",
            "hardworking one"
          ],
          "correct": 0
        },
        {
          "title": "hardworking one",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"hardworking one\"?",
          "options": [
            "مُجْتَهِدٌ",
            "فَازَ يَفُوْزُ",
            "مُقِيْمٌ",
            "أَقَامَ يُقِيْمُ"
          ],
          "correct": 0
        },
        {
          "title": "hardworking one",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُجْتَهِدٌ mean?",
          "options": [
            "hardworking one",
            "to succeed, attain",
            "one who establishes",
            "to establish"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l8",
      "title": "عبارة الصفة المشبهة",
      "subtitle": "Supplement: Verbal Phrases",
      "concepts": [
        {
          "heading": "What this part of the Supplement covers",
          "lines": [
            {
              "html": "Having finished with the اِسْمُ الْفَاعِلِ verbal phrase, the Supplement now turns to the صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ. Two things are discussed: the construction of a صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ verbal phrase, and its usage in a sentence. This lesson covers the construction.",
              "list": false
            },
            {
              "html": "Recall from the مُشْتَقَّات what a صِفَةٌ مُشَبَّهَةٌ is: a noun derived from a verb that describes its doer, but with a settled, long-term quality rather than an event. غَفُوْرٌ is not 'the one forgiving right now' but 'Forgiving' as a permanent attribute. That difference of meaning is what the grammar of this phrase reflects.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What kind of meaning does a صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ describe, as opposed to an ordinary اِسْمُ الْفَاعِلِ؟",
            "kind": "mcq",
            "options": [
              "A settled, long-term quality (like غَفُوْرٌ, 'Forgiving' as a permanent attribute) rather than an ongoing event",
              "A one-off completed event only",
              "A future event only",
              "Exactly the same meaning as an اِسْمُ الْفَاعِلِ with no distinction"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The two slots",
          "lines": [
            {
              "html": "There are two essential slots in a صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ verbal phrase: a صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ slot, and a فَاعِلٌ slot.",
              "list": false
            },
            {
              "table": {
                "title": "صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ Verbal Phrase",
                "headers": [
                  "فَاعِلٌ",
                  "صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ"
                ],
                "rows": [
                  [
                    "the doer of the quality",
                    "the derived describing noun"
                  ]
                ]
              }
            },
            {
              "html": "This is the same two-slot shape as the اِسْمُ الْفَاعِلِ verbal phrase, minus the object slot. A صِفَةٌ مُشَبَّهَةٌ is built from a lāzim verb and so has no مَفْعُوْلٌ بِهِ to govern; what it does have, always, is a فَاعِلٌ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What are the two essential slots of a صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ verbal phrase, and why does it lack an object slot؟",
            "kind": "mcq",
            "options": [
              "صِفَةٌ مُشَبَّهَةٌ and فَاعِلٌ; it lacks an object slot because it is built from a لَازِم verb, which governs no مَفْعُوْلٌ بِهِ",
              "صِفَةٌ مُشَبَّهَةٌ and مَفْعُوْلٌ بِهِ; it lacks a فَاعِلٌ",
              "Only صِفَةٌ مُشَبَّهَةٌ is essential",
              "فَاعِلٌ and نَائِبُ الْفَاعِلِ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The فَاعِلٌ slot — three ways it occurs",
          "lines": [
            {
              "html": "The صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ must have a فَاعِلٌ. This can occur in three ways: as a ضَمِيْرٌ مُسْتَتِرٌ, as a regular noun in the مَرْفُوْعٌ state, or as a مُضَافٌ إِلَيْهِ.",
              "list": false
            },
            {
              "html": "1. As a ضَمِيْرٌ مُسْتَتِرٌ — the doer is hidden inside the word itself.",
              "list": false
            },
            {
              "html": "اَللهُ غَفُوْرٌ — Allah is Forgiving.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَللهُ غَفُوْرٌ",
                "translation": "Allah is Forgiving.",
                "cells": [
                  "اَللهُ",
                  "غَفُوْرٌ"
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
                        "role": "صِفَةٌ مُشَبَّهَةٌ وَفَاعِلٌ (هُوَ)"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "2. As a regular noun in the مَرْفُوْعٌ state — the doer is written out after the صِفَةٌ مُشَبَّهَةٌ.",
              "list": false
            },
            {
              "html": "اَللهُ سَرِيْعٌ حِسَابُهُ — Allah's reckoning is swift.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَللهُ سَرِيْعٌ حِسَابُهُ",
                "translation": "Allah's reckoning is swift.",
                "cells": [
                  "اَللهُ",
                  "سَرِيْعٌ",
                  "حِسَابُهُ"
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
                        "role": "صِفَةٌ مُشَبَّهَةٌ"
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
              "html": "Notice that سَرِيْعٌ keeps its tanwīn here and حِسَابُهُ is مَرْفُوْعٌ — it is the doer of the swiftness, not a possessed thing. The pronoun هُ ties the reckoning back to Allah.",
              "list": false
            },
            {
              "html": "3. As a مُضَافٌ إِلَيْهِ.",
              "list": false
            },
            {
              "html": "اَللهُ سَرِيْعُ الْحِسَابِ — Allah is swift in reckoning.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَللهُ سَرِيْعُ الْحِسَابِ",
                "translation": "Allah is swift in reckoning.",
                "cells": [
                  "اَللهُ",
                  "سَرِيْعُ",
                  "الْحِسَابِ"
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
                        "start": 1,
                        "end": 1,
                        "role": "صِفَةٌ مُشَبَّهَةٌ"
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
              "html": "The مُضَافٌ إِلَيْهِ, i.e. اَلْحِسَابُ, was originally the فَاعِلٌ with a pronoun — اَللهُ سَرِيْعٌ حِسَابُهُ. However, for brevity it is expressed in a possessive phrase.",
              "list": false
            },
            {
              "html": "This structure can be translated in different ways: 'Allah's reckoning is swift', or 'Allah is swift in reckoning'. Both render the same Arabic; the second is often the more natural English, because the phrase is really describing Allah, not the reckoning.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What are the three ways the فَاعِلٌ of a صِفَةٌ مُشَبَّهَةٌ can occur؟",
            "kind": "mcq",
            "options": [
              "A ضَمِيْرٌ مُسْتَتِرٌ (اَللهُ غَفُوْرٌ), a regular مَرْفُوْعٌ noun (اَللهُ سَرِيْعٌ حِسَابُهُ), or a مُضَافٌ إِلَيْهِ (اَللهُ سَرِيْعُ الْحِسَابِ)",
              "Only ever as a ضَمِيْرٌ مُسْتَتِرٌ",
              "Only as a مُضَافٌ إِلَيْهِ",
              "As a نَائِبُ الْفَاعِلِ only"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Notes",
          "lines": [
            {
              "html": "1. This مُضَافٌ–مُضَافٌ إِلَيْهِ structure is simply for ease of pronunciation; it does not have a meaning of ownership. اَلْحِسَابِ is not something Allah owns in the way a book is owned — it is the doer of the verb hidden inside سَرِيْعٌ.",
              "list": false
            },
            {
              "html": "2. When the اِسْمُ الْفَاعِلِ is in the meaning of a صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ — i.e. it portrays a long-term meaning — its فَاعِلٌ can also occur as a مُضَافٌ إِلَيْهِ.",
              "list": false
            },
            {
              "html": "اَلرَّجُلُ دَائِمُ الصَّوْمِ — The man's fasting is continuous.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَلرَّجُلُ دَائِمُ الصَّوْمِ",
                "translation": "The man's fasting is continuous.",
                "cells": [
                  "اَلرَّجُلُ",
                  "دَائِمُ",
                  "الصَّوْمِ"
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
                        "start": 1,
                        "end": 1,
                        "role": "اِسْمُ فَاعِلٍ"
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
              "html": "The مُضَافٌ إِلَيْهِ, i.e. اَلصَّوْمُ, was originally the فَاعِلٌ with a pronoun.",
              "list": false
            },
            {
              "html": "اَلرَّجُلُ دَائِمٌ صَوْمُهُ — The man — his fasting is continuous.",
              "list": true,
              "bullet": true
            },
            {
              "html": "دَائِمٌ is formally an اِسْمُ فَاعِلٍ, which is why its tarkeeb label stays اِسْمُ فَاعِلٍ rather than صِفَةٌ مُشَبَّهَةٌ. But because 'continuous' is a settled quality rather than a passing action, it behaves like a صِفَةٌ مُشَبَّهَةٌ and takes the same إِضَافَة shortcut.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Does the مُضَافٌ–مُضَافٌ إِلَيْهِ shape of اَللهُ سَرِيْعُ الْحِسَابِ express ownership, the way بَيْتُ زَيْدٍ does؟",
            "kind": "mcq",
            "options": [
              "No — it is simply a lighter way of attaching what is really the فَاعِلٌ of the hidden verbal meaning, not a possession",
              "Yes — الحساب is something Allah owns",
              "It expresses ownership only in the plural",
              "It expresses ownership only with human doers"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Construction of a صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ verbal phrase",
        "rows": [
          {
            "label": "Slot 1",
            "arabic": "صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ",
            "meaning": "the derived describing noun"
          },
          {
            "label": "Slot 2",
            "arabic": "فَاعِلٌ",
            "meaning": "essential — the doer of the quality"
          },
          {
            "label": "Way 1",
            "arabic": "اَللهُ غَفُوْرٌ",
            "meaning": "فَاعِلٌ as a ضَمِيْرٌ مُسْتَتِرٌ (هُوَ)"
          },
          {
            "label": "Way 2",
            "arabic": "اَللهُ سَرِيْعٌ حِسَابُهُ",
            "meaning": "فَاعِلٌ as a مَرْفُوْعٌ noun"
          },
          {
            "label": "Way 3",
            "arabic": "اَللهُ سَرِيْعُ الْحِسَابِ",
            "meaning": "فَاعِلٌ as a مُضَافٌ إِلَيْهِ"
          },
          {
            "label": "Note",
            "arabic": "لَا مِلْكَ فِيْهِ",
            "meaning": "the إِضَافَة is for brevity, not ownership"
          },
          {
            "label": "Extension",
            "arabic": "اَلرَّجُلُ دَائِمُ الصَّوْمِ",
            "meaning": "an اِسْمُ فَاعِلٍ with long-term meaning does the same"
          }
        ]
      },
      "quiz": [
        {
          "q": "How many essential slots does a صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ verbal phrase have?",
          "options": [
            "two",
            "one",
            "three",
            "four"
          ],
          "correct": 0,
          "explanation": "A صِفَةٌ مُشَبَّهَةٌ slot and a فَاعِلٌ slot."
        },
        {
          "q": "Which slot is missing compared with the اِسْمُ الْفَاعِلِ verbal phrase?",
          "options": [
            "the فَاعِلٌ slot",
            "the مَفْعُوْلٌ بِهِ slot",
            "the خَبَرٌ slot",
            "nothing is missing"
          ],
          "correct": 1,
          "explanation": "A صِفَةٌ مُشَبَّهَةٌ is built from a lāzim verb, so it takes no object."
        },
        {
          "q": "In اَللهُ غَفُوْرٌ, where is the فَاعِلٌ?",
          "options": [
            "It is اَللهُ",
            "There is none",
            "It is a ضَمِيْرٌ مُسْتَتِرٌ (هُوَ) inside غَفُوْرٌ",
            "It is understood from the context only"
          ],
          "correct": 2,
          "explanation": "The doer is hidden inside the derived noun itself."
        },
        {
          "q": "In اَللهُ سَرِيْعٌ حِسَابُهُ, what is حِسَابُهُ?",
          "options": [
            "a مُضَافٌ إِلَيْهِ",
            "a نَعْتٌ",
            "a تَمْيِيْزٌ",
            "the فَاعِلٌ, in the مَرْفُوْعٌ state"
          ],
          "correct": 3,
          "explanation": "It is the doer of the swiftness, written out as a مَرْفُوْعٌ noun."
        },
        {
          "q": "What was اَلْحِسَابِ in اَللهُ سَرِيْعُ الْحِسَابِ originally?",
          "options": [
            "the فَاعِلٌ with a pronoun — حِسَابُهُ",
            "a مَفْعُوْلٌ بِهِ",
            "a حَالٌ",
            "a second خَبَرٌ"
          ],
          "correct": 0,
          "explanation": "The إِضَافَة is a shorter way of saying اَللهُ سَرِيْعٌ حِسَابُهُ."
        },
        {
          "q": "In اَللهُ سَرِيْعُ الْحِسَابِ, what does this مُضَافٌ–مُضَافٌ إِلَيْهِ structure mean?",
          "options": [
            "ownership",
            "possession of a quality by a person",
            "nothing of ownership — it is only for ease of pronunciation",
            "the same as a نَعْتٌ"
          ],
          "correct": 2,
          "explanation": "No meaning of ownership is intended — the إِضَافَة is only for ease of pronunciation."
        }
      ],
      "bank": [
        {
          "title": "اَللهُ غَفُوْرٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 548)",
          "sentence": "اَللهُ غَفُوْرٌ",
          "translation": "Allah is Forgiving.",
          "cells": [
            "اَللهُ",
            "غَفُوْرٌ"
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
                  "role": "صِفَةٌ مُشَبَّهَةٌ وَفَاعِلٌ (هُوَ)"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "مُضَافٌ إِلَيْهِ"
          ]
        },
        {
          "title": "اَللهُ سَرِيْعٌ حِسَابُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 548)",
          "sentence": "اَللهُ سَرِيْعٌ حِسَابُهُ",
          "translation": "Allah's reckoning is swift.",
          "cells": [
            "اَللهُ",
            "سَرِيْعٌ",
            "حِسَابُهُ"
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
                  "role": "صِفَةٌ مُشَبَّهَةٌ"
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
            "مُضَافٌ إِلَيْهِ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اَللهُ سَرِيْعُ الْحِسَابِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 549)",
          "sentence": "اَللهُ سَرِيْعُ الْحِسَابِ",
          "translation": "Allah is swift in reckoning.",
          "cells": [
            "اَللهُ",
            "سَرِيْعُ",
            "الْحِسَابِ"
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
                  "start": 1,
                  "end": 1,
                  "role": "صِفَةٌ مُشَبَّهَةٌ"
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
            "نَعْتٌ",
            "حَالٌ",
            "مَفْعُوْلٌ بِهِ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اَلرَّجُلُ دَائِمُ الصَّوْمِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 549, Note 2)",
          "sentence": "اَلرَّجُلُ دَائِمُ الصَّوْمِ",
          "translation": "The man's fasting is continuous.",
          "cells": [
            "اَلرَّجُلُ",
            "دَائِمُ",
            "الصَّوْمِ"
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
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ فَاعِلٍ"
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
            "نَعْتٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "اَلرَّجُلُ دَائِمٌ صَوْمُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 549, Note 2)",
          "sentence": "اَلرَّجُلُ دَائِمٌ صَوْمُهُ",
          "translation": "The man — his fasting is continuous.",
          "cells": [
            "اَلرَّجُلُ",
            "دَائِمٌ",
            "صَوْمُهُ"
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
                  "role": "اِسْمُ فَاعِلٍ"
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
            "مُضَافٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "تِلْكَ بَقَرَةٌ كَثِيْرَةُ اللَّبَنِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 3, Supplement), item 1",
          "sentence": "تِلْكَ بَقَرَةٌ كَثِيْرَةُ اللَّبَنِ",
          "translation": "That is a cow abundant in milk.",
          "cells": [
            "تِلْكَ",
            "بَقَرَةٌ",
            "كَثِيْرَةُ",
            "اللَّبَنِ"
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ وَصِفَةٌ مُشَبَّهَةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ وَفَاعِلٌ"
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
          "title": "أَبُوْ زَيْنَبَ دَائِمُ الصَّوْمِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 3, Supplement), item 2",
          "sentence": "أَبُوْ زَيْنَبَ دَائِمُ الصَّوْمِ",
          "translation": "Zaynab's father fasts continuously.",
          "cells": [
            "أَبُوْ",
            "زَيْنَبَ",
            "دَائِمُ",
            "الصَّوْمِ"
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
                  "end": 3,
                  "role": "خَبَرٌ"
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
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ وَاسْمُ فَاعِلٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ وَفَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "حَالٌ",
            "فَاعِلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "رَمَضَانُ شَهْرٌ كَثِيْرُ الْبَرَكَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 3, Supplement), item 5",
          "sentence": "رَمَضَانُ شَهْرٌ كَثِيْرُ الْبَرَكَةِ",
          "translation": "Ramaḍān is a month abundant in blessing.",
          "cells": [
            "رَمَضَانُ",
            "شَهْرٌ",
            "كَثِيْرُ",
            "الْبَرَكَةِ"
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ وَصِفَةٌ مُشَبَّهَةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ وَفَاعِلٌ"
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
          "title": "هٰذِهِ الْأَرْضُ طَيِّبَةُ الْمَاءِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 3, Supplement), item 6",
          "sentence": "هٰذِهِ الْأَرْضُ طَيِّبَةُ الْمَاءِ",
          "translation": "This land is good in water.",
          "cells": [
            "هٰذِهِ",
            "الْأَرْضُ",
            "طَيِّبَةُ",
            "الْمَاءِ"
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
                  "role": "بَدَلٌ"
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
                  "role": "مُضَافٌ وَصِفَةٌ مُشَبَّهَةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ وَفَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "فَاعِلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِنَّ اللهَ شَدِيْدُ الْعِقَابِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 3, Supplement), item 4",
          "sentence": "إِنَّ اللهَ شَدِيْدُ الْعِقَابِ",
          "translation": "Indeed Allah is severe in punishment.",
          "cells": [
            "إِنَّ",
            "اللهَ",
            "شَدِيْدُ",
            "الْعِقَابِ"
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
                  "role": "مُضَافٌ وَصِفَةٌ مُشَبَّهَةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ وَفَاعِلٌ"
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
          "title": "Book Exercise 8 (Section 3, Supplement), item 1",
          "kind": "mcq",
          "prompt": "In تِلْكَ بَقَرَةٌ كَثِيْرَةُ اللَّبَنِ, what is كَثِيْرَةُ اللَّبَنِ?",
          "options": [
            "the خَبَرٌ",
            "a نَعْتٌ of بَقَرَةٌ",
            "a بَدَلٌ",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "بَقَرَةٌ is the خَبَرٌ; the phrase describes it."
        },
        {
          "title": "Book Exercise 8 (Section 3, Supplement), item 1",
          "kind": "mcq",
          "prompt": "In كَثِيْرَةُ اللَّبَنِ, what is اللَّبَنِ?",
          "options": [
            "a possessed thing",
            "a مَفْعُوْلٌ بِهِ",
            "a تَمْيِيْزٌ",
            "the فَاعِلٌ, occurring as a مُضَافٌ إِلَيْهِ"
          ],
          "correct": 3,
          "explanation": "Originally كَثِيْرَةٌ لَبَنُهَا — the milk is what is abundant."
        },
        {
          "title": "Book Exercise 8 (Section 3, Supplement), item 2",
          "kind": "mcq",
          "prompt": "How should أَبُوْ زَيْنَبَ دَائِمُ الصَّوْمِ be translated?",
          "options": [
            "Zaynab's father owns the fast",
            "Zaynab's father fasts continuously",
            "Zaynab's father fasted once",
            "Zaynab's father will fast"
          ],
          "correct": 1,
          "explanation": "دَائِمٌ carries a long-term meaning, so the English needs a habitual sense."
        },
        {
          "title": "Book Exercise 8 (Section 3, Supplement), item 4",
          "kind": "mcq",
          "prompt": "In إِنَّ اللهَ شَدِيْدُ الْعِقَابِ, what is شَدِيْدُ الْعِقَابِ?",
          "options": [
            "the اِسْمُ إِنَّ",
            "a نَعْتٌ",
            "the خَبَرُ إِنَّ",
            "a حَالٌ"
          ],
          "correct": 2,
          "explanation": "اَللهَ is the اِسْمُ إِنَّ, so the phrase after it is the خَبَرٌ."
        },
        {
          "title": "Book Exercise 8 (Section 3, Supplement), item 5",
          "kind": "mcq",
          "prompt": "In رَمَضَانُ شَهْرٌ كَثِيْرُ الْبَرَكَةِ, why is كَثِيْرُ مَرْفُوْعٌ?",
          "options": [
            "Because it agrees with شَهْرٌ, which it describes",
            "Because it is a مُبْتَدَأٌ",
            "Because it is a فَاعِلٌ",
            "Because every مُضَافٌ is مَرْفُوْعٌ"
          ],
          "correct": 0,
          "explanation": "A نَعْتٌ follows its مَنْعُوْتٌ in state, and شَهْرٌ is the مَرْفُوْعٌ خَبَرٌ."
        },
        {
          "title": "Book Exercise 8 (Section 3, Supplement), item 6",
          "kind": "mcq",
          "prompt": "In هٰذِهِ الْأَرْضُ طَيِّبَةُ الْمَاءِ, what is اَلْأَرْضُ?",
          "options": [
            "a نَعْتٌ",
            "a خَبَرٌ",
            "a بَدَلٌ of هٰذِهِ",
            "a فَاعِلٌ"
          ],
          "correct": 2,
          "explanation": "A definite noun with ال after an اِسْمُ إِشَارَةٍ is a بَدَلٌ, and طَيِّبَةُ الْمَاءِ is then the خَبَرٌ."
        },
        {
          "title": "Book Exercise 8 (Section 3, Supplement), item 3",
          "kind": "mcq",
          "prompt": "What is the correct translation of اَللهُ سَرِيْعُ الْحِسَابِ?",
          "options": [
            "Allah owns the reckoning",
            "Allah's reckoning is swift / Allah is swift in reckoning",
            "Allah reckons quickly once",
            "Allah's swiftness is a reckoning"
          ],
          "correct": 1,
          "explanation": "Both renderings are given; the phrase describes Allah, not the reckoning."
        },
        {
          "title": "Book Exercise 8 (Section 3, Supplement), Note 2",
          "kind": "mcq",
          "prompt": "Why can دَائِمٌ take a فَاعِلٌ as a مُضَافٌ إِلَيْهِ even though it is an اِسْمُ فَاعِلٍ?",
          "options": [
            "Because it is definite",
            "Because it comes from a lāzim verb only",
            "Because it is singular",
            "Because it carries a long-term meaning, like a صِفَةٌ مُشَبَّهَةٌ"
          ],
          "correct": 3,
          "explanation": "Note 2: an اِسْمُ فَاعِلٍ in the meaning of a صِفَةٌ مُشَبَّهَةٌ follows the same pattern."
        },
        {
          "title": "Forgiving",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Forgiving\"?",
          "options": [
            "غَفُوْرٌ",
            "دَائِمٌ",
            "شَدِيْدٌ",
            "كَثِيْرٌ"
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
            "continuous, lasting",
            "severe, intense",
            "abundant, much"
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
            "صَوْمٌ",
            "عِقَابٌ",
            "بَرَكَةٌ"
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
            "fasting",
            "punishment",
            "blessing"
          ],
          "correct": 0
        },
        {
          "title": "reckoning",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"reckoning\"?",
          "options": [
            "حِسَابٌ",
            "شَدِيْدٌ",
            "كَثِيْرٌ",
            "طَيِّبٌ"
          ],
          "correct": 0
        },
        {
          "title": "reckoning",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حِسَابٌ mean?",
          "options": [
            "reckoning",
            "severe, intense",
            "abundant, much",
            "good, pure"
          ],
          "correct": 0
        },
        {
          "title": "continuous, lasting",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"continuous, lasting\"?",
          "options": [
            "دَائِمٌ",
            "عِقَابٌ",
            "بَرَكَةٌ",
            "لَبَنٌ"
          ],
          "correct": 0
        },
        {
          "title": "continuous, lasting",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَائِمٌ mean?",
          "options": [
            "continuous, lasting",
            "punishment",
            "blessing",
            "milk"
          ],
          "correct": 0
        },
        {
          "title": "fasting",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"fasting\"?",
          "options": [
            "صَوْمٌ",
            "كَثِيْرٌ",
            "طَيِّبٌ",
            "بَقَرَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "fasting",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَوْمٌ mean?",
          "options": [
            "fasting",
            "abundant, much",
            "good, pure",
            "cow"
          ],
          "correct": 0
        },
        {
          "title": "severe, intense",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"severe, intense\"?",
          "options": [
            "شَدِيْدٌ",
            "بَرَكَةٌ",
            "لَبَنٌ",
            "غَفُوْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "severe, intense",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَدِيْدٌ mean?",
          "options": [
            "severe, intense",
            "blessing",
            "milk",
            "Forgiving"
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
            "طَيِّبٌ",
            "بَقَرَةٌ",
            "سَرِيْعٌ"
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
            "good, pure",
            "cow",
            "swift"
          ],
          "correct": 0
        },
        {
          "title": "abundant, much",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"abundant, much\"?",
          "options": [
            "كَثِيْرٌ",
            "لَبَنٌ",
            "غَفُوْرٌ",
            "حِسَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "abundant, much",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَثِيْرٌ mean?",
          "options": [
            "abundant, much",
            "milk",
            "Forgiving",
            "reckoning"
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
            "بَقَرَةٌ",
            "سَرِيْعٌ",
            "دَائِمٌ"
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
            "cow",
            "swift",
            "continuous, lasting"
          ],
          "correct": 0
        },
        {
          "title": "good, pure",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"good, pure\"?",
          "options": [
            "طَيِّبٌ",
            "غَفُوْرٌ",
            "حِسَابٌ",
            "صَوْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "good, pure",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَيِّبٌ mean?",
          "options": [
            "good, pure",
            "Forgiving",
            "reckoning",
            "fasting"
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
            "سَرِيْعٌ",
            "دَائِمٌ",
            "شَدِيْدٌ"
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
            "swift",
            "continuous, lasting",
            "severe, intense"
          ],
          "correct": 0
        },
        {
          "title": "cow",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"cow\"?",
          "options": [
            "بَقَرَةٌ",
            "حِسَابٌ",
            "صَوْمٌ",
            "عِقَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "cow",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَقَرَةٌ mean?",
          "options": [
            "cow",
            "reckoning",
            "fasting",
            "punishment"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l9",
      "title": "استعمال الصفة المشبهة",
      "subtitle": "Supplement: Verbal Phrases",
      "concepts": [
        {
          "heading": "Where the phrase sits in a sentence",
          "lines": [
            {
              "html": "The صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ verbal phrase usually occurs as a خَبَرٌ or as a نَعْتٌ.",
              "list": false
            },
            {
              "table": {
                "title": "The two usual positions",
                "headers": [
                  "Position",
                  "Example",
                  "English"
                ],
                "rows": [
                  [
                    "خَبَرٌ",
                    "اَللهُ سَرِيْعُ الْحِسَابِ",
                    "Allah is swift in reckoning."
                  ],
                  [
                    "نَعْتٌ",
                    "رَمَضَانُ شَهْرٌ كَثِيْرُ الْبَرَكَةِ",
                    "Ramaḍān is a month abundant in blessing."
                  ]
                ]
              }
            },
            {
              "html": "Both positions are simply the ordinary places where a describing noun goes. What is worth noticing is that the whole phrase — the صِفَةٌ مُشَبَّهَةٌ together with its فَاعِلٌ — occupies one slot. كَثِيْرُ الْبَرَكَةِ is a single نَعْتٌ of شَهْرٌ, not two words with separate jobs.",
              "list": false
            },
            {
              "html": "The state of the phrase then follows from the slot it fills. As a خَبَرٌ it is مَرْفُوْعٌ; as the خَبَرُ كَانَ or the خَبَرُ إِنَّ it is مَنْصُوْبٌ; and as a نَعْتٌ it copies the state of its مَنْعُوْتٌ. Whatever the state, only the first word of the phrase carries it, because the second word is fixed as a مَجْرُوْرٌ مُضَافٌ إِلَيْهِ.",
              "list": false
            },
            {
              "html": "كَانَتْ جَدَّتِيْ شَدِيْدَةَ الرَّحْمَةِ — My grandmother was very merciful.",
              "list": true,
              "bullet": true
            },
            {
              "html": "Here شَدِيْدَةَ carries the fatḥah of the خَبَرُ كَانَ while الرَّحْمَةِ stays مَجْرُوْرٌ, exactly as any مُضَافٌ إِلَيْهِ does.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In كَانَتْ جَدَّتِيْ شَدِيْدَةَ الرَّحْمَةِ, which word carries the case of the whole صِفَةٌ مُشَبَّهَةٌ phrase, and why؟",
            "kind": "mcq",
            "options": [
              "Only the first word (شَدِيْدَةَ) — the second word stays a fixed مَجْرُوْرٌ مُضَافٌ إِلَيْهِ regardless of the phrase's own slot",
              "Both words change case together",
              "Only الرَّحْمَةِ changes case",
              "Neither word ever changes case"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Note — the مُضَافٌ as نَعْتٌ, the مُضَافٌ إِلَيْهِ as مَنْعُوْتٌ",
          "lines": [
            {
              "html": "In a possessive structure, the مُضَافٌ can be the نَعْتٌ, and the مُضَافٌ إِلَيْهِ be the مَنْعُوْتٌ.",
              "list": false
            },
            {
              "html": "يَتَقَبَّلُ اللهُ صَالِحَ الْأَعْمَالِ — Allah accepts good deeds.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "يَتَقَبَّلُ اللهُ صَالِحَ الْأَعْمَالِ",
                "translation": "Allah accepts good deeds.",
                "cells": [
                  "يَتَقَبَّلُ",
                  "اللهُ",
                  "صَالِحَ",
                  "الْأَعْمَالِ"
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
                        "start": 2,
                        "end": 2,
                        "role": "نَعْتٌ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "مَنْعُوْتٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "This inverts the order you would expect. In plain Arabic a نَعْتٌ follows its مَنْعُوْتٌ — اَلْأَعْمَالُ الصَّالِحَةُ. In this construction the describing word is put first and joined by إِضَافَة, giving صَالِحَ الْأَعْمَالِ. The meaning is the same; the shape is shorter, and the نَعْتٌ no longer agrees in state, gender or definiteness, because it is now a مُضَافٌ.",
              "list": false
            },
            {
              "html": "Reading this correctly matters: صَالِحَ الْأَعْمَالِ does not mean 'the righteous man of deeds' but 'the good among deeds' — that is, good deeds. The same shape is behind familiar phrases such as كِرَامُ النَّاسِ, the noble ones among people.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In صَالِحَ الْأَعْمَالِ, what does this possessive-looking structure actually mean, and how does it invert the normal نَعْتٌ order؟",
            "kind": "mcq",
            "options": [
              "'Good deeds' — the describing word (نَعْتٌ) is put FIRST and joined by إِضَافَة, instead of following its مَنْعُوْتٌ as in الْأَعْمَالُ الصَّالِحَةُ",
              "'The righteous man of deeds' — a literal possessive",
              "It means the same as الْأَعْمَالُ الصَّالِحَةُ with identical word order",
              "It has no connection to the نَعْتٌ/مَنْعُوْتٌ relationship"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Usage of a صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ verbal phrase",
        "rows": [
          {
            "label": "Usage 1",
            "arabic": "خَبَرٌ",
            "meaning": "اَللهُ سَرِيْعُ الْحِسَابِ"
          },
          {
            "label": "Usage 2",
            "arabic": "نَعْتٌ",
            "meaning": "شَهْرٌ كَثِيْرُ الْبَرَكَةِ"
          },
          {
            "label": "State",
            "arabic": "يَظْهَرُ عَلَى الْأَوَّلِ",
            "meaning": "only the first word shows the state"
          },
          {
            "label": "After كَانَ",
            "arabic": "كَانَتْ جَدَّتِيْ شَدِيْدَةَ الرَّحْمَةِ",
            "meaning": "مَنْصُوْبٌ as the خَبَرُ كَانَ"
          },
          {
            "label": "Note",
            "arabic": "اَلْمُضَافُ نَعْتٌ",
            "meaning": "and the مُضَافٌ إِلَيْهِ is the مَنْعُوْتٌ"
          },
          {
            "label": "Example",
            "arabic": "صَالِحَ الْأَعْمَالِ",
            "meaning": "'good deeds', not 'the good one of deeds'"
          }
        ]
      },
      "quiz": [
        {
          "q": "A صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ verbal phrase usually occurs as…",
          "options": [
            "a فَاعِلٌ or a مَفْعُوْلٌ بِهِ",
            "a خَبَرٌ or a نَعْتٌ",
            "a حَالٌ or a تَمْيِيْزٌ",
            "a مُبْتَدَأٌ only"
          ],
          "correct": 1,
          "explanation": "These are exactly the two usual positions."
        },
        {
          "q": "How many slots does كَثِيْرُ الْبَرَكَةِ occupy in رَمَضَانُ شَهْرٌ كَثِيْرُ الْبَرَكَةِ?",
          "options": [
            "two separate slots",
            "three",
            "one — the whole phrase is a single نَعْتٌ",
            "none; it stands outside the sentence"
          ],
          "correct": 2,
          "explanation": "The phrase functions as one unit describing شَهْرٌ."
        },
        {
          "q": "In كَانَتْ جَدَّتِيْ شَدِيْدَةَ الرَّحْمَةِ, which word shows the مَنْصُوْب state?",
          "options": [
            "شَدِيْدَةَ",
            "الرَّحْمَةِ",
            "جَدَّتِيْ",
            "both شَدِيْدَةَ and الرَّحْمَةِ"
          ],
          "correct": 0,
          "explanation": "The second word is a مُضَافٌ إِلَيْهِ and stays مَجْرُوْرٌ whatever the phrase's role."
        },
        {
          "q": "In a صِفَةٌ مُشَبَّهَةٌ built as a possessive إِضَافَة (like شَدِيْدَةَ الرَّحْمَةِ), what can the مُضَافٌ itself be, in relation to the noun before it?",
          "options": [
            "the فَاعِلٌ",
            "the مَنْعُوْتٌ",
            "a حَالٌ",
            "the نَعْتٌ"
          ],
          "correct": 3,
          "explanation": "And the مُضَافٌ إِلَيْهِ is then the مَنْعُوْتٌ."
        },
        {
          "q": "What does صَالِحَ الْأَعْمَالِ mean?",
          "options": [
            "the righteous man of the deeds",
            "good deeds",
            "the deeds of a righteous man",
            "righteousness itself"
          ],
          "correct": 1,
          "explanation": "The مُضَافٌ is the description and the مُضَافٌ إِلَيْهِ is the thing described."
        },
        {
          "q": "How would صَالِحَ الْأَعْمَالِ be written in the ordinary نَعْتٌ order?",
          "options": [
            "صَالِحُ أَعْمَالٍ",
            "أَعْمَالُ صَالِحٍ",
            "اَلْأَعْمَالُ الصَّالِحَةُ",
            "صَالِحَاتُ الْأَعْمَالِ"
          ],
          "correct": 2,
          "explanation": "The نَعْتٌ follows its مَنْعُوْتٌ and agrees with it in all four ways."
        }
      ],
      "bank": [
        {
          "title": "يَتَقَبَّلُ اللهُ صَالِحَ الْأَعْمَالِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Note (Section 3, Supplement, p. 550)",
          "sentence": "يَتَقَبَّلُ اللهُ صَالِحَ الْأَعْمَالِ",
          "translation": "Allah accepts good deeds.",
          "cells": [
            "يَتَقَبَّلُ",
            "اللهُ",
            "صَالِحَ",
            "الْأَعْمَالِ"
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
                  "start": 2,
                  "end": 2,
                  "role": "نَعْتٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَنْعُوْتٌ"
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
          "title": "كَانَتْ أُمُّ أَحْمَدَ كَثِيْرَةَ التِّلَاوَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 3, Supplement), item 7",
          "sentence": "كَانَتْ أُمُّ أَحْمَدَ كَثِيْرَةَ التِّلَاوَةِ",
          "translation": "Aḥmad's mother used to recite a great deal.",
          "cells": [
            "كَانَتْ",
            "أُمُّ",
            "أَحْمَدَ",
            "كَثِيْرَةَ",
            "التِّلَاوَةِ"
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
                  "role": "مُضَافٌ وَصِفَةٌ مُشَبَّهَةٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ وَفَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "حَالٌ",
            "فَاعِلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "تِلْكَ الْحَدِيْقَةُ كَثِيْرَةُ الْأَشْجَارِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 3, Supplement), item 8",
          "sentence": "تِلْكَ الْحَدِيْقَةُ كَثِيْرَةُ الْأَشْجَارِ",
          "translation": "That garden is abundant in trees.",
          "cells": [
            "تِلْكَ",
            "الْحَدِيْقَةُ",
            "كَثِيْرَةُ",
            "الْأَشْجَارِ"
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
                  "role": "بَدَلٌ"
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
                  "role": "مُضَافٌ وَصِفَةٌ مُشَبَّهَةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ وَفَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "فَاعِلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "كَانَتْ جَدَّتِيْ شَدِيْدَةَ الرَّحْمَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 3, Supplement), item 9",
          "sentence": "كَانَتْ جَدَّتِيْ شَدِيْدَةَ الرَّحْمَةِ",
          "translation": "My grandmother was very merciful.",
          "cells": [
            "كَانَتْ",
            "جَدَّتِيْ",
            "شَدِيْدَةَ",
            "الرَّحْمَةِ"
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
                  "role": "مُضَافٌ وَصِفَةٌ مُشَبَّهَةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ وَفَاعِلٌ"
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
          "title": "إِنَّهُ كَانَ شَدِيْدَ الصَّبْرِ قَلِيْلَ الْجَزَعِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 3, Supplement), item 10",
          "sentence": "إِنَّهُ كَانَ شَدِيْدَ الصَّبْرِ قَلِيْلَ الْجَزَعِ",
          "translation": "Indeed he was very patient and little given to panic.",
          "cells": [
            "إِنَّ",
            "هُ",
            "كَانَ",
            "شَدِيْدَ الصَّبْرِ",
            "قَلِيْلَ الْجَزَعِ"
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
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (هُوَ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ كَانَ الْأَوَّلُ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ كَانَ الثَّانِيْ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "كَانَ قَوْمُ صَالِحٍ ثَمُوْدُ شَدِيْدَ الْقُوَّةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 3, Supplement), item 11",
          "sentence": "كَانَ قَوْمُ صَالِحٍ ثَمُوْدُ شَدِيْدَ الْقُوَّةِ",
          "translation": "The people of Ṣāliḥ, Thamūd, were mighty in strength.",
          "cells": [
            "كَانَ",
            "قَوْمُ",
            "صَالِحٍ",
            "ثَمُوْدُ",
            "شَدِيْدَ الْقُوَّةِ"
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
                  "role": "بَدَلٌ"
                },
                {
                  "start": 4,
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
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "كَانَ رَسُوْلُ اللهِ طَوِيْلَ الْقِيَامِ بِاللَّيْلِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 3, Supplement), item 12",
          "sentence": "كَانَ رَسُوْلُ اللهِ طَوِيْلَ الْقِيَامِ بِاللَّيْلِ",
          "translation": "The Messenger of Allah ﷺ used to stand long in prayer at night.",
          "cells": [
            "كَانَ",
            "رَسُوْلُ",
            "اللهِ",
            "طَوِيْلَ الْقِيَامِ",
            "بِاللَّيْلِ"
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
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
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
          "title": "رَمَضَانُ شَهْرٌ كَثِيْرُ الْبَرَكَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 550)",
          "sentence": "رَمَضَانُ شَهْرٌ كَثِيْرُ الْبَرَكَةِ",
          "translation": "Ramaḍān is a month abundant in blessing.",
          "cells": [
            "رَمَضَانُ",
            "شَهْرٌ",
            "كَثِيْرُ",
            "الْبَرَكَةِ"
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ وَصِفَةٌ مُشَبَّهَةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ وَفَاعِلٌ"
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
          "title": "اَللهُ سَرِيْعُ الْحِسَابِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 549)",
          "sentence": "اَللهُ سَرِيْعُ الْحِسَابِ",
          "translation": "Allah is swift in reckoning.",
          "cells": [
            "اَللهُ",
            "سَرِيْعُ",
            "الْحِسَابِ"
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
                  "role": "مُضَافٌ وَصِفَةٌ مُشَبَّهَةٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ وَفَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "فَاعِلٌ",
            "حَالٌ",
            "مَفْعُوْلٌ بِهِ"
          ]
        },
        {
          "title": "اَلْأَعْمَالُ الصَّالِحَةُ مَقْبُوْلَةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Note (Section 3, Supplement, p. 550)",
          "sentence": "اَلْأَعْمَالُ الصَّالِحَةُ مَقْبُوْلَةٌ",
          "translation": "Good deeds are accepted.",
          "cells": [
            "اَلْأَعْمَالُ",
            "الصَّالِحَةُ",
            "مَقْبُوْلَةٌ"
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
                  "start": 0,
                  "end": 0,
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "نَعْتٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُضَافٌ",
            "مُضَافٌ إِلَيْهِ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 8 (Section 3, Supplement), item 7",
          "kind": "mcq",
          "prompt": "In كَانَتْ أُمُّ أَحْمَدَ كَثِيْرَةَ التِّلَاوَةِ, what is كَثِيْرَةَ التِّلَاوَةِ?",
          "options": [
            "the اِسْمُ كَانَ",
            "the خَبَرُ كَانَ",
            "a نَعْتٌ of أُمُّ",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "أُمُّ أَحْمَدَ is the اِسْمُ كَانَ, so the phrase after it is the مَنْصُوْب خَبَرٌ."
        },
        {
          "title": "Book Exercise 8 (Section 3, Supplement), item 8",
          "kind": "mcq",
          "prompt": "In تِلْكَ الْحَدِيْقَةُ كَثِيْرَةُ الْأَشْجَارِ, what is اَلْحَدِيْقَةُ?",
          "options": [
            "a بَدَلٌ of تِلْكَ",
            "the خَبَرٌ",
            "a نَعْتٌ",
            "a مُضَافٌ إِلَيْهِ"
          ],
          "correct": 0,
          "explanation": "A definite noun with ال after an اِسْمُ إِشَارَةٍ is a بَدَلٌ; كَثِيْرَةُ الْأَشْجَارِ is then the خَبَرٌ."
        },
        {
          "title": "Book Exercise 8 (Section 3, Supplement), item 10",
          "kind": "mcq",
          "prompt": "In إِنَّهُ كَانَ شَدِيْدَ الصَّبْرِ قَلِيْلَ الْجَزَعِ, how many خَبَرٌ phrases follow كَانَ?",
          "options": [
            "one",
            "three",
            "two",
            "none"
          ],
          "correct": 2,
          "explanation": "شَدِيْدَ الصَّبْرِ and قَلِيْلَ الْجَزَعِ are both خَبَرُ كَانَ, one after the other."
        },
        {
          "title": "Book Exercise 8 (Section 3, Supplement), item 11",
          "kind": "mcq",
          "prompt": "In كَانَ قَوْمُ صَالِحٍ ثَمُوْدُ شَدِيْدَ الْقُوَّةِ, what is ثَمُوْدُ?",
          "options": [
            "the خَبَرُ كَانَ",
            "a نَعْتٌ",
            "a بَدَلٌ of قَوْمُ صَالِحٍ",
            "a مُضَافٌ إِلَيْهِ"
          ],
          "correct": 2,
          "explanation": "It names the same people again, so it is a بَدَلٌ and takes the same state."
        },
        {
          "title": "Book Exercise 8 (Section 3, Supplement), item 12",
          "kind": "mcq",
          "prompt": "How should كَانَ رَسُوْلُ اللهِ ﷺ طَوِيْلَ الْقِيَامِ بِاللَّيْلِ be rendered?",
          "options": [
            "The Messenger of Allah ﷺ stood once at night",
            "The Messenger of Allah ﷺ used to stand long in prayer at night",
            "The Messenger of Allah ﷺ is standing at night",
            "The Messenger of Allah ﷺ will stand at night"
          ],
          "correct": 1,
          "explanation": "كَانَ with a settled quality gives a habitual past in English."
        },
        {
          "title": "Book Exercise 8 (Section 3, Supplement), item 9",
          "kind": "mcq",
          "prompt": "Why is شَدِيْدَةَ feminine in كَانَتْ جَدَّتِيْ شَدِيْدَةَ الرَّحْمَةِ?",
          "options": [
            "Because اَلرَّحْمَة is feminine",
            "Because every صِفَةٌ مُشَبَّهَةٌ is feminine",
            "It is simply irregular, with no rule behind it",
            "Because it describes جَدَّتِيْ, which is feminine"
          ],
          "correct": 3,
          "explanation": "The صِفَةٌ مُشَبَّهَةٌ agrees with what it describes, not with its own مُضَافٌ إِلَيْهِ."
        },
        {
          "title": "Book Note (Section 3, Supplement, p. 550)",
          "kind": "mcq",
          "prompt": "In يَتَقَبَّلُ اللهُ صَالِحَ الْأَعْمَالِ, what is صَالِحَ الْأَعْمَالِ as a whole?",
          "options": [
            "the فَاعِلٌ",
            "a حَالٌ",
            "the مَفْعُوْلٌ بِهِ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 2,
          "explanation": "اَللهُ is the فَاعِلٌ, and what is accepted is the object."
        },
        {
          "title": "Book Note (Section 3, Supplement, p. 550)",
          "kind": "mcq",
          "prompt": "Within صَالِحَ الْأَعْمَالِ, which word is the مَنْعُوْتٌ?",
          "options": [
            "اَلْأَعْمَالِ",
            "صَالِحَ",
            "neither — there is no نَعْتٌ here",
            "both together"
          ],
          "correct": 0,
          "explanation": "The Note inverts the usual order: the مُضَافٌ is the نَعْتٌ and the مُضَافٌ إِلَيْهِ the مَنْعُوْتٌ."
        },
        {
          "title": "to accept",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to accept\"?",
          "options": [
            "تَقَبَّلَ يَتَقَبَّلُ",
            "صَبْرٌ",
            "قُوَّةٌ",
            "جَدَّةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to accept",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَقَبَّلَ يَتَقَبَّلُ mean?",
          "options": [
            "to accept",
            "patience",
            "strength",
            "grandmother"
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
            "جَزَعٌ",
            "قِيَامٌ",
            "شَجَرَةٌ"
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
            "panic, anxiety",
            "standing (in prayer)",
            "tree"
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
            "قُوَّةٌ",
            "جَدَّةٌ",
            "عَمَلٌ"
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
            "strength",
            "grandmother",
            "deed, action"
          ],
          "correct": 0
        },
        {
          "title": "patience",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"patience\"?",
          "options": [
            "صَبْرٌ",
            "قِيَامٌ",
            "شَجَرَةٌ",
            "صَالِحٌ"
          ],
          "correct": 0
        },
        {
          "title": "patience",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَبْرٌ mean?",
          "options": [
            "patience",
            "standing (in prayer)",
            "tree",
            "righteous, good"
          ],
          "correct": 0
        },
        {
          "title": "panic, anxiety",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"panic, anxiety\"?",
          "options": [
            "جَزَعٌ",
            "جَدَّةٌ",
            "عَمَلٌ",
            "قَلِيْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "panic, anxiety",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَزَعٌ mean?",
          "options": [
            "panic, anxiety",
            "grandmother",
            "deed, action",
            "few, little"
          ],
          "correct": 0
        },
        {
          "title": "strength",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"strength\"?",
          "options": [
            "قُوَّةٌ",
            "شَجَرَةٌ",
            "صَالِحٌ",
            "تَقَبَّلَ يَتَقَبَّلُ"
          ],
          "correct": 0
        },
        {
          "title": "strength",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قُوَّةٌ mean?",
          "options": [
            "strength",
            "tree",
            "righteous, good",
            "to accept"
          ],
          "correct": 0
        },
        {
          "title": "standing (in prayer)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"standing (in prayer)\"?",
          "options": [
            "قِيَامٌ",
            "عَمَلٌ",
            "قَلِيْلٌ",
            "تِلَاوَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "standing (in prayer)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قِيَامٌ mean?",
          "options": [
            "standing (in prayer)",
            "deed, action",
            "few, little",
            "recitation"
          ],
          "correct": 0
        },
        {
          "title": "grandmother",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"grandmother\"?",
          "options": [
            "جَدَّةٌ",
            "صَالِحٌ",
            "تَقَبَّلَ يَتَقَبَّلُ",
            "رَحْمَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "grandmother",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَدَّةٌ mean?",
          "options": [
            "grandmother",
            "righteous, good",
            "to accept",
            "mercy"
          ],
          "correct": 0
        },
        {
          "title": "tree",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"tree\"?",
          "options": [
            "شَجَرَةٌ",
            "قَلِيْلٌ",
            "تِلَاوَةٌ",
            "صَبْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "tree",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَجَرَةٌ mean?",
          "options": [
            "tree",
            "few, little",
            "recitation",
            "patience"
          ],
          "correct": 0
        },
        {
          "title": "deed, action",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"deed, action\"?",
          "options": [
            "عَمَلٌ",
            "تَقَبَّلَ يَتَقَبَّلُ",
            "رَحْمَةٌ",
            "جَزَعٌ"
          ],
          "correct": 0
        },
        {
          "title": "deed, action",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَمَلٌ mean?",
          "options": [
            "deed, action",
            "to accept",
            "mercy",
            "panic, anxiety"
          ],
          "correct": 0
        },
        {
          "title": "righteous, good",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"righteous, good\"?",
          "options": [
            "صَالِحٌ",
            "تِلَاوَةٌ",
            "صَبْرٌ",
            "قُوَّةٌ"
          ],
          "correct": 0
        },
        {
          "title": "righteous, good",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَالِحٌ mean?",
          "options": [
            "righteous, good",
            "recitation",
            "patience",
            "strength"
          ],
          "correct": 0
        },
        {
          "title": "few, little",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"few, little\"?",
          "options": [
            "قَلِيْلٌ",
            "رَحْمَةٌ",
            "جَزَعٌ",
            "قِيَامٌ"
          ],
          "correct": 0
        },
        {
          "title": "few, little",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَلِيْلٌ mean?",
          "options": [
            "few, little",
            "mercy",
            "panic, anxiety",
            "standing (in prayer)"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l10",
      "title": "عبارة اسم المفعول",
      "subtitle": "Supplement: Verbal Phrases",
      "concepts": [
        {
          "heading": "Built like the اِسْمُ الْفَاعِلِ, but with a نَائِبُ الْفَاعِلِ",
          "lines": [
            {
              "html": "An اِسْمُ الْمَفْعُوْلِ verbal phrase is constructed in the same manner as the اِسْمُ الْفَاعِلِ. However, instead of having a فَاعِلٌ as an essential part, it has a نَائِبُ الْفَاعِلِ.",
              "list": false
            },
            {
              "html": "This is exactly the swap made between the مَعْلُوْمٌ and the مَجْهُوْلٌ verb. اَلْفِعْلُ الْمَجْهُوْلُ has no فَاعِلٌ; what would have been the object steps up and becomes the نَائِبُ الْفَاعِلِ. The اِسْمُ الْمَفْعُوْلِ is the derived-noun form of that same idea, so it inherits the same essential slot.",
              "list": false
            },
            {
              "table": {
                "title": "The two families side by side",
                "headers": [
                  "Phrase",
                  "Essential second slot",
                  "Example"
                ],
                "rows": [
                  [
                    "اِسْمُ الْفَاعِلِ",
                    "فَاعِلٌ",
                    "اَللهُ غَافِرٌ ذَنْبَهُ"
                  ],
                  [
                    "اِسْمُ الْمَفْعُوْلِ",
                    "نَائِبُ الْفَاعِلِ",
                    "اَلتَّائِبُ مَقْبُوْلَةٌ تَوْبَتُهُ"
                  ]
                ]
              }
            },
            {
              "html": "اَلتَّائِبُ مَقْبُوْلَةٌ تَوْبَتُهُ — The repentance of the one who repents is going to be accepted.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَلتَّائِبُ مَقْبُوْلَةٌ تَوْبَتُهُ",
                "translation": "The repentance of the one who repents is going to be accepted.",
                "cells": [
                  "اَلتَّائِبُ",
                  "مَقْبُوْلَةٌ",
                  "تَوْبَتُهُ"
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
                        "role": "اِسْمُ مَفْعُوْلٍ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "نَائِبُ الْفَاعِلِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Notice the agreement: مَقْبُوْلَةٌ is feminine because تَوْبَتُهُ, its نَائِبُ الْفَاعِلِ, is feminine — just as a verb agrees with the noun that follows it. The word اَلتَّائِبُ, the مُبْتَدَأٌ, has no say in the matter.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How does an اِسْمُ الْمَفْعُوْلِ verbal phrase differ structurally from an اِسْمُ الْفَاعِلِ one؟",
            "kind": "mcq",
            "options": [
              "It takes a نَائِبُ الْفَاعِلِ as its essential second slot instead of a فَاعِلٌ — the same swap made between the مَعْلُوْم and مَجْهُوْل verb",
              "It takes two فَاعِلٌ slots instead of one",
              "It never agrees with its نَائِبُ الْفَاعِلِ",
              "It cannot occur as a خَبَرٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The نَائِبُ الْفَاعِلِ as a شِبْهُ الْجُمْلَةِ",
          "lines": [
            {
              "html": "The نَائِبُ الْفَاعِلِ of an اِسْمُ مَفْعُوْلٍ may also occur as a شِبْهُ الْجُمْلَةِ.",
              "list": false
            },
            {
              "html": "اَلْحُجَّاجُ مَغْفُوْرٌ لَهُمْ — The pilgrims are forgiven.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَلْحُجَّاجُ مَغْفُوْرٌ لَهُمْ",
                "translation": "The pilgrims are forgiven.",
                "cells": [
                  "اَلْحُجَّاجُ",
                  "مَغْفُوْرٌ",
                  "لَهُمْ"
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
                        "role": "اِسْمُ مَفْعُوْلٍ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "نَائِبُ الْفَاعِلِ غَيْرُ صَرِيْحٍ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "غَفَرَ takes its object with لِ — غَفَرَ اللهُ لَهُمْ. When the verb is turned into an اِسْمُ مَفْعُوْلٍ, that same جَارٌّ وَمَجْرُوْرٌ stands in as the نَائِبُ الْفَاعِلِ. English cannot show this, which is why the plain 'are forgiven' is the right translation.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In اَلْحُجَّاجُ مَغْفُوْرٌ لَهُمْ, what serves as the نَائِبُ الْفَاعِلِ, and why؟",
            "kind": "mcq",
            "options": [
              "The شِبْهُ الْجُمْلَةِ لَهُمْ — because غَفَرَ reaches its object through لِ, and that same جَارٌّ وَمَجْرُوْرٌ carries over when the verb becomes an اِسْمُ مَفْعُوْلٍ",
              "الْحُجَّاجُ itself",
              "مَغْفُوْرٌ has no نَائِبُ الْفَاعِلِ",
              "A hidden pronoun referring to الْحُجَّاجُ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Note — a غَيْرُ صَرِيْحٍ نَائِبُ الْفَاعِلِ leaves the form fixed",
          "lines": [
            {
              "html": "When the نَائِبُ الْفَاعِلِ of the اِسْمُ الْمَفْعُوْلِ is غَيْرُ صَرِيْحٍ, the اِسْمُ الْمَفْعُوْلِ will remain masculine and singular in all cases.",
              "list": false
            },
            {
              "html": "اَلْغِيْبَةُ مَنْهِيٌّ عَنْهَا — Backbiting is prohibited.",
              "list": true,
              "bullet": true
            },
            {
              "html": "اَلْغِيْبَةُ is feminine, yet مَنْهِيٌّ stays masculine and singular. The reason is that مَنْهِيٌّ is not agreeing with اَلْغِيْبَةُ at all — its نَائِبُ الْفَاعِلِ is the جَارٌّ وَمَجْرُوْرٌ عَنْهَا, which has no gender or number of its own to copy.",
              "list": false
            },
            {
              "table": {
                "title": "The same rule already met with the مَجْهُوْلٌ verb",
                "headers": [
                  "Sentence",
                  "Form of the نَائِبُ الْفَاعِلِ",
                  "Shape of the derived word"
                ],
                "rows": [
                  [
                    "اَلْغِيْبَةُ مَنْهِيٌّ عَنْهَا",
                    "غَيْرُ صَرِيْحٍ — عَنْهَا",
                    "masculine singular, fixed"
                  ],
                  [
                    "اَلتَّائِبُ مَقْبُوْلَةٌ تَوْبَتُهُ",
                    "صَرِيْحٌ — تَوْبَتُهُ",
                    "agrees with it (feminine)"
                  ],
                  [
                    "اَلْمُخْلِصُوْنَ مَقْبُوْلٌ عَمَلُهُمْ",
                    "صَرِيْحٌ — عَمَلُهُمْ",
                    "agrees with it (masculine singular)"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Why does مَنْهِيٌّ stay masculine and singular in اَلْغِيْبَةُ مَنْهِيٌّ عَنْهَا, even though الغيبة is feminine؟",
            "kind": "mcq",
            "options": [
              "Because its نَائِبُ الْفَاعِلِ is غَيْرُ صَرِيْحٍ (the جَارٌّ وَمَجْرُوْرٌ عَنْهَا), which has no gender or number of its own to copy",
              "Because مَنْهِيٌّ is always masculine by definition with no exception",
              "Because الغيبة is secretly masculine",
              "Because النهي never agrees with anything"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The اِسْمُ الْمَفْعُوْلِ verbal phrase",
        "rows": [
          {
            "label": "Slot 1",
            "arabic": "اِسْمُ الْمَفْعُوْلِ",
            "meaning": "the derived passive describing noun"
          },
          {
            "label": "Slot 2",
            "arabic": "نَائِبُ الْفَاعِلِ",
            "meaning": "essential — replaces the فَاعِلٌ slot"
          },
          {
            "label": "Example",
            "arabic": "اَلتَّائِبُ مَقْبُوْلَةٌ تَوْبَتُهُ",
            "meaning": "his repentance is accepted"
          },
          {
            "label": "Also",
            "arabic": "شِبْهُ الْجُمْلَةِ",
            "meaning": "اَلْحُجَّاجُ مَغْفُوْرٌ لَهُمْ"
          },
          {
            "label": "Note",
            "arabic": "غَيْرُ صَرِيْحٍ",
            "meaning": "then the اِسْمُ مَفْعُوْلٍ stays masculine singular"
          },
          {
            "label": "Example",
            "arabic": "اَلْغِيْبَةُ مَنْهِيٌّ عَنْهَا",
            "meaning": "backbiting is prohibited"
          }
        ]
      },
      "quiz": [
        {
          "q": "What replaces the فَاعِلٌ slot in an اِسْمُ الْمَفْعُوْلِ verbal phrase?",
          "options": [
            "a نَائِبُ الْفَاعِلِ",
            "a مَفْعُوْلٌ بِهِ",
            "a خَبَرٌ",
            "nothing — the slot is dropped"
          ],
          "correct": 0,
          "explanation": "The phrase is built exactly like the اِسْمُ الْفَاعِلِ but with this one substitution."
        },
        {
          "q": "In اَلتَّائِبُ مَقْبُوْلَةٌ تَوْبَتُهُ, why is مَقْبُوْلَةٌ feminine?",
          "options": [
            "Because اَلتَّائِبُ is feminine",
            "Because every اِسْمُ مَفْعُوْلٍ is feminine",
            "Because its نَائِبُ الْفَاعِلِ, تَوْبَتُهُ, is feminine",
            "It is a printing error"
          ],
          "correct": 2,
          "explanation": "The derived noun agrees with the word that fills its essential slot."
        },
        {
          "q": "In اَلْحُجَّاجُ مَغْفُوْرٌ لَهُمْ, what is لَهُمْ?",
          "options": [
            "a مَفْعُوْلٌ بِهِ",
            "the نَائِبُ الْفَاعِلِ, as a شِبْهُ الْجُمْلَةِ",
            "a حَالٌ",
            "a نَعْتٌ"
          ],
          "correct": 1,
          "explanation": "غَفَرَ takes its object with لِ, and that جَارٌّ وَمَجْرُوْرٌ fills the slot."
        },
        {
          "q": "When the نَائِبُ الْفَاعِلِ is غَيْرُ صَرِيْحٍ, the اِسْمُ الْمَفْعُوْلِ…",
          "options": [
            "agrees with the مُبْتَدَأٌ",
            "becomes feminine",
            "takes the dual or plural as needed",
            "stays masculine and singular in all cases"
          ],
          "correct": 3,
          "explanation": "A شِبْهُ الْجُمْلَةِ has no gender or number to copy."
        },
        {
          "q": "Why does مَنْهِيٌّ stay masculine in اَلْغِيْبَةُ مَنْهِيٌّ عَنْهَا?",
          "options": [
            "Because غِيْبَة is treated as masculine",
            "Because عَنْهَا is masculine",
            "Because its نَائِبُ الْفَاعِلِ is the جَارٌّ وَمَجْرُوْرٌ عَنْهَا, not اَلْغِيْبَةُ",
            "Because the sentence is a proverb"
          ],
          "correct": 2,
          "explanation": "The مُبْتَدَأٌ plays no part in the agreement."
        },
        {
          "q": "اَلْغِيْبَةُ مَنْهِيٌّ عَنْهَا stays masculine because its نَائِبُ الْفَاعِلِ is a غَيْرُ صَرِيْحٍ جَارٌّ وَمَجْرُوْرٌ. Which rule already learned does this repeat?",
          "options": [
            "the same rule for the فِعْلٌ مَجْهُوْلٌ with a غَيْرُ صَرِيْحٍ نَائِبُ الْفَاعِلِ",
            "the rule of the مُضَافٌ dropping its ال",
            "the rule of the نَعْتٌ agreeing in four ways",
            "the rule of the مَمْنُوْعٌ مِنَ الصَّرْفِ"
          ],
          "correct": 0,
          "explanation": "نُهِيَ عَنِ الْغِيْبَةِ behaves the same way — the verb stays in its base form."
        }
      ],
      "bank": [
        {
          "title": "اَلتَّائِبُ مَقْبُوْلَةٌ تَوْبَتُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 551)",
          "sentence": "اَلتَّائِبُ مَقْبُوْلَةٌ تَوْبَتُهُ",
          "translation": "The repentance of the one who repents is going to be accepted.",
          "cells": [
            "اَلتَّائِبُ",
            "مَقْبُوْلَةٌ",
            "تَوْبَتُهُ"
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
                  "role": "اِسْمُ مَفْعُوْلٍ"
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
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "مُضَافٌ إِلَيْهِ"
          ]
        },
        {
          "title": "اَلْحُجَّاجُ مَغْفُوْرٌ لَهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 551)",
          "sentence": "اَلْحُجَّاجُ مَغْفُوْرٌ لَهُمْ",
          "translation": "The pilgrims are forgiven.",
          "cells": [
            "اَلْحُجَّاجُ",
            "مَغْفُوْرٌ",
            "لَهُمْ"
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
                  "role": "اِسْمُ مَفْعُوْلٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "نَائِبُ الْفَاعِلِ غَيْرُ صَرِيْحٍ"
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
          "title": "اَلْغِيْبَةُ مَنْهِيٌّ عَنْهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 3, Supplement), item 3",
          "sentence": "اَلْغِيْبَةُ مَنْهِيٌّ عَنْهَا",
          "translation": "Backbiting is prohibited.",
          "cells": [
            "اَلْغِيْبَةُ",
            "مَنْهِيٌّ",
            "عَنْهَا"
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
                  "role": "اِسْمُ مَفْعُوْلٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "نَائِبُ الْفَاعِلِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "تَمْيِيْزٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "نَهَى اللهُ عَنِ الْغِيْبَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 3, Supplement), item 1",
          "sentence": "نَهَى اللهُ عَنِ الْغِيْبَةِ",
          "translation": "Allah has forbidden backbiting.",
          "cells": [
            "نَهَى",
            "اللهُ",
            "عَنِ الْغِيْبَةِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ مَعْلُوْمٌ"
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
                }
              ]
            }
          ],
          "distractors": [
            "نَائِبُ الْفَاعِلِ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "نُهِيَ عَنِ الْغِيْبَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 3, Supplement), item 2",
          "sentence": "نُهِيَ عَنِ الْغِيْبَةِ",
          "translation": "Backbiting has been forbidden.",
          "cells": [
            "نُهِيَ",
            "عَنِ الْغِيْبَةِ"
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
                  "role": "نَائِبُ الْفَاعِلِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "مُبْتَدَأٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "اَلْفِعْلُ مَرْفُوْعٌ فَاعِلُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 3, Supplement), item 4",
          "sentence": "اَلْفِعْلُ مَرْفُوْعٌ فَاعِلُهُ",
          "translation": "The verb — its doer is مَرْفُوْعٌ.",
          "cells": [
            "اَلْفِعْلُ",
            "مَرْفُوْعٌ",
            "فَاعِلُهُ"
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
                  "role": "اِسْمُ مَفْعُوْلٍ"
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
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اَلْمُضَافُ مَجْرُوْرٌ مَا بَعْدَهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 3, Supplement), item 5",
          "sentence": "اَلْمُضَافُ مَجْرُوْرٌ مَا بَعْدَهُ",
          "translation": "The مُضَافٌ — what comes after it is مَجْرُوْرٌ.",
          "cells": [
            "اَلْمُضَافُ",
            "مَجْرُوْرٌ",
            "مَا بَعْدَهُ"
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
                  "role": "اِسْمُ مَفْعُوْلٍ"
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
            "مُضَافٌ إِلَيْهِ",
            "فَاعِلٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "اَلنَّاسُ مَجْزِيُّوْنَ بِأَعْمَالِهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 3, Supplement), item 6",
          "sentence": "اَلنَّاسُ مَجْزِيُّوْنَ بِأَعْمَالِهِمْ",
          "translation": "People are recompensed for their deeds.",
          "cells": [
            "اَلنَّاسُ",
            "مَجْزِيُّوْنَ",
            "بِأَعْمَالِهِمْ"
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
                  "role": "اِسْمُ مَفْعُوْلٍ وَنَائِبُ الْفَاعِلِ (و)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
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
          "title": "إِنَّ الْمُنَافِقِيْنَ مَطْبُوْعٌ عَلَى قُلُوْبِهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 3, Supplement), item 9",
          "sentence": "إِنَّ الْمُنَافِقِيْنَ مَطْبُوْعٌ عَلَى قُلُوْبِهِمْ",
          "translation": "Indeed the hypocrites — their hearts are sealed.",
          "cells": [
            "إِنَّ",
            "الْمُنَافِقِيْنَ",
            "مَطْبُوْعٌ",
            "عَلَى قُلُوْبِهِمْ"
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
                  "role": "اِسْمُ مَفْعُوْلٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "نَائِبُ الْفَاعِلِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "هٰؤُلَاءِ الرِّجَالُ مَكْرُوْهَةٌ أَخْلَاقُهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 3, Supplement), item 10",
          "sentence": "هٰؤُلَاءِ الرِّجَالُ مَكْرُوْهَةٌ أَخْلَاقُهُمْ",
          "translation": "These men — their manners are disliked.",
          "cells": [
            "هٰؤُلَاءِ",
            "الرِّجَالُ",
            "مَكْرُوْهَةٌ",
            "أَخْلَاقُهُمْ"
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
                  "role": "بَدَلٌ"
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
                  "role": "اِسْمُ مَفْعُوْلٍ"
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
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 9 (Section 3, Supplement), items 1–3",
          "kind": "mcq",
          "prompt": "Items 1, 2 and 3 of Exercise 9 give the same meaning three ways. Which is the اِسْمُ الْمَفْعُوْلِ version?",
          "options": [
            "نَهَى اللهُ عَنِ الْغِيْبَةِ",
            "نُهِيَ عَنِ الْغِيْبَةِ",
            "اَلْغِيْبَةُ مَنْهِيٌّ عَنْهَا",
            "all three"
          ],
          "correct": 2,
          "explanation": "The first is مَعْلُوْمٌ, the second مَجْهُوْلٌ, the third a derived-noun phrase."
        },
        {
          "title": "Book Exercise 9 (Section 3, Supplement), item 4",
          "kind": "mcq",
          "prompt": "In اَلْفِعْلُ مَرْفُوْعٌ فَاعِلُهُ, what is فَاعِلُهُ grammatically?",
          "options": [
            "the نَائِبُ الْفَاعِلِ of مَرْفُوْعٌ",
            "a مُضَافٌ إِلَيْهِ",
            "a second خَبَرٌ",
            "a بَدَلٌ of اَلْفِعْلُ"
          ],
          "correct": 0,
          "explanation": "Do not be misled by the word فَاعِل itself — here it is filling the نَائِبُ الْفَاعِلِ slot."
        },
        {
          "title": "Book Exercise 9 (Section 3, Supplement), item 5",
          "kind": "mcq",
          "prompt": "In اَلْمُضَافُ مَجْرُوْرٌ مَا بَعْدَهُ, what fills the essential slot of مَجْرُوْرٌ?",
          "options": [
            "اَلْمُضَافُ",
            "بَعْدَهُ alone",
            "the pronoun هُ",
            "مَا بَعْدَهُ"
          ],
          "correct": 3,
          "explanation": "'What is after it' is the thing that is مَجْرُوْرٌ, so it is the نَائِبُ الْفَاعِلِ."
        },
        {
          "title": "Book Exercise 9 (Section 3, Supplement), item 6",
          "kind": "mcq",
          "prompt": "In اَلنَّاسُ مَجْزِيُّوْنَ بِأَعْمَالِهِمْ, why is مَجْزِيُّوْنَ plural?",
          "options": [
            "Because أَعْمَال is plural",
            "Because its نَائِبُ الْفَاعِلِ is the hidden plural pronoun standing for اَلنَّاسُ",
            "Because the sentence is general",
            "Because بِ demands a plural"
          ],
          "correct": 1,
          "explanation": "Here the slot is filled by a صَرِيْحٌ pronoun, so agreement does show."
        },
        {
          "title": "Book Exercise 9 (Section 3, Supplement), item 7",
          "kind": "mcq",
          "prompt": "In اَلْمُخْلِصُوْنَ مَقْبُوْلٌ عَمَلُهُمْ, why is مَقْبُوْلٌ singular although اَلْمُخْلِصُوْنَ is plural?",
          "options": [
            "It is simply irregular, with no rule behind it",
            "Because اَلْمُخْلِصُوْنَ is definite",
            "Because it agrees with عَمَلُهُمْ, its نَائِبُ الْفَاعِلِ",
            "Because مَقْبُوْلٌ has no plural form"
          ],
          "correct": 2,
          "explanation": "One deed is spoken of, so the derived noun is singular."
        },
        {
          "title": "Book Exercise 9 (Section 3, Supplement), item 9",
          "kind": "mcq",
          "prompt": "In إِنَّ الْمُنَافِقِيْنَ مَطْبُوْعٌ عَلَى قُلُوْبِهِمْ, why is مَطْبُوْعٌ masculine singular?",
          "options": [
            "Because قُلُوْب is masculine",
            "Because its نَائِبُ الْفَاعِلِ is غَيْرُ صَرِيْحٍ",
            "Because إِنَّ requires it",
            "Because مُنَافِقِيْنَ is مَنْصُوْبٌ"
          ],
          "correct": 1,
          "explanation": "عَلَى قُلُوْبِهِمْ is a شِبْهُ الْجُمْلَةِ, so the form stays fixed."
        },
        {
          "title": "Book Exercise 9 (Section 3, Supplement), item 10",
          "kind": "mcq",
          "prompt": "In هٰؤُلَاءِ الرِّجَالُ مَكْرُوْهَةٌ أَخْلَاقُهُمْ, what is اَلرِّجَالُ?",
          "options": [
            "a نَعْتٌ",
            "the خَبَرٌ",
            "a بَدَلٌ of هٰؤُلَاءِ",
            "the نَائِبُ الْفَاعِلِ"
          ],
          "correct": 2,
          "explanation": "A definite noun with ال after an اِسْمُ إِشَارَةٍ is a بَدَلٌ."
        },
        {
          "title": "Book Exercise 9 (Section 3, Supplement), item 14",
          "kind": "mcq",
          "prompt": "In هٰذَا فِعْلٌ مَعْلُوْمٌ فَاعِلُهُ وَذٰلِكَ فِعْلٌ مَجْهُوْلٌ فَاعِلُهُ, what are مَعْلُوْمٌ and مَجْهُوْلٌ?",
          "options": [
            "two اِسْمُ فَاعِلٍ phrases",
            "two اِسْمُ مَفْعُوْلٍ phrases, each with فَاعِلُهُ as its نَائِبُ الْفَاعِلِ",
            "two خَبَرٌ of the اِسْمُ إِشَارَةٍ",
            "two حَالٌ"
          ],
          "correct": 1,
          "explanation": "Each is a نَعْتٌ of فِعْلٌ, and each has an اِسْمُ مَفْعُوْلٍ phrase inside it."
        },
        {
          "title": "to forbid",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to forbid\"?",
          "options": [
            "نَهَى يَنْهَى",
            "جَزَى يَجْزِيْ",
            "غِيْبَةٌ",
            "حَاجٌّ"
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
            "to recompense",
            "backbiting",
            "pilgrim"
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
            "جَزَاءً",
            "قَبُوْلًا",
            "غَفْرًا"
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
            "طَبَعَ يَطْبَعُ",
            "تَوْبَةٌ",
            "مُنَافِقٌ"
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
            "to seal, stamp",
            "repentance",
            "hypocrite"
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
            "طَبْعًا",
            "غَفْرًا",
            "نَهْيًا"
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
            "غِيْبَةٌ",
            "حَاجٌّ",
            "خُلُقٌ"
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
            "backbiting",
            "pilgrim",
            "character, manners"
          ],
          "correct": 0
        },
        {
          "title": "to forgive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of غَفَرَ يَغْفِرُ?",
          "options": [
            "غَفْرًا",
            "نَهْيًا",
            "جَزَاءً",
            "قَبُوْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to recompense",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to recompense\"?",
          "options": [
            "جَزَى يَجْزِيْ",
            "تَوْبَةٌ",
            "مُنَافِقٌ",
            "مُخْلِصٌ"
          ],
          "correct": 0
        },
        {
          "title": "to recompense",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَزَى يَجْزِيْ mean?",
          "options": [
            "to recompense",
            "repentance",
            "hypocrite",
            "sincere one"
          ],
          "correct": 0
        },
        {
          "title": "to recompense (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَزَى يَجْزِيْ?",
          "options": [
            "جَزَاءً",
            "قَبُوْلًا",
            "طَبْعًا",
            "نَهْيًا"
          ],
          "correct": 0
        },
        {
          "title": "to seal, stamp",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to seal, stamp\"?",
          "options": [
            "طَبَعَ يَطْبَعُ",
            "حَاجٌّ",
            "خُلُقٌ",
            "تَائِبٌ"
          ],
          "correct": 0
        },
        {
          "title": "to seal, stamp",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَبَعَ يَطْبَعُ mean?",
          "options": [
            "to seal, stamp",
            "pilgrim",
            "character, manners",
            "one who repents"
          ],
          "correct": 0
        },
        {
          "title": "to seal, stamp (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of طَبَعَ يَطْبَعُ?",
          "options": [
            "طَبْعًا",
            "غَفْرًا",
            "نَهْيًا",
            "قَبُوْلًا"
          ],
          "correct": 0
        },
        {
          "title": "backbiting",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"backbiting\"?",
          "options": [
            "غِيْبَةٌ",
            "مُنَافِقٌ",
            "مُخْلِصٌ",
            "نَهَى يَنْهَى"
          ],
          "correct": 0
        },
        {
          "title": "backbiting",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غِيْبَةٌ mean?",
          "options": [
            "backbiting",
            "hypocrite",
            "sincere one",
            "to forbid"
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
            "خُلُقٌ",
            "تَائِبٌ",
            "قَبِلَ يَقْبَلُ"
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
            "character, manners",
            "one who repents",
            "to accept"
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
            "مُخْلِصٌ",
            "نَهَى يَنْهَى",
            "غَفَرَ يَغْفِرُ"
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
            "sincere one",
            "to forbid",
            "to forgive"
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
            "أَخْلَاقٌ",
            "تَائِبُوْنَ",
            "مُنَافِقُوْنَ"
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
            "تَائِبٌ",
            "قَبِلَ يَقْبَلُ",
            "جَزَى يَجْزِيْ"
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
            "one who repents",
            "to accept",
            "to recompense"
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
            "مُخْلِصُوْنَ",
            "حُجَّاجٌ",
            "أَخْلَاقٌ"
          ],
          "correct": 0
        },
        {
          "title": "character, manners",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"character, manners\"?",
          "options": [
            "خُلُقٌ",
            "نَهَى يَنْهَى",
            "غَفَرَ يَغْفِرُ",
            "طَبَعَ يَطْبَعُ"
          ],
          "correct": 0
        },
        {
          "title": "character, manners",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خُلُقٌ mean?",
          "options": [
            "character, manners",
            "to forbid",
            "to forgive",
            "to seal, stamp"
          ],
          "correct": 0
        },
        {
          "title": "character, manners (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of خُلُقٌ?",
          "options": [
            "أَخْلَاقٌ",
            "تَائِبُوْنَ",
            "مُنَافِقُوْنَ",
            "حُجَّاجٌ"
          ],
          "correct": 0
        },
        {
          "title": "sincere one",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sincere one\"?",
          "options": [
            "مُخْلِصٌ",
            "قَبِلَ يَقْبَلُ",
            "جَزَى يَجْزِيْ",
            "غِيْبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "sincere one",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُخْلِصٌ mean?",
          "options": [
            "sincere one",
            "to accept",
            "to recompense",
            "backbiting"
          ],
          "correct": 0
        },
        {
          "title": "sincere one (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُخْلِصٌ?",
          "options": [
            "مُخْلِصُوْنَ",
            "حُجَّاجٌ",
            "أَخْلَاقٌ",
            "مُنَافِقُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "one who repents",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"one who repents\"?",
          "options": [
            "تَائِبٌ",
            "غَفَرَ يَغْفِرُ",
            "طَبَعَ يَطْبَعُ",
            "تَوْبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "one who repents",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَائِبٌ mean?",
          "options": [
            "one who repents",
            "to forgive",
            "to seal, stamp",
            "repentance"
          ],
          "correct": 0
        },
        {
          "title": "one who repents (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of تَائِبٌ?",
          "options": [
            "تَائِبُوْنَ",
            "مُنَافِقُوْنَ",
            "مُخْلِصُوْنَ",
            "حُجَّاجٌ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l11",
      "title": "عبارة اسم التفضيل",
      "subtitle": "Supplement: Verbal Phrases",
      "concepts": [
        {
          "heading": "What this last part of the Supplement covers",
          "lines": [
            {
              "html": "The final verbal phrase of the Supplement is built on the اِسْمُ التَّفْضِيْلِ. Three things are discussed: the conjugation of the اِسْمُ التَّفْضِيْلِ, the construction of an اِسْمُ التَّفْضِيْلِ verbal phrase, and its usage in a sentence. This lesson takes the first two.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What three things does the study of the اِسْمُ التَّفْضِيْلِ verbal phrase cover across these two lessons؟",
            "kind": "mcq",
            "options": [
              "Its conjugation, the construction of the verbal phrase, and its usage in a sentence",
              "Only its conjugation",
              "Only its usage as a خَبَرٌ",
              "Only its negation"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Conjugation of the اِسْمُ التَّفْضِيْلِ",
          "lines": [
            {
              "html": "The pattern and meaning of the اِسْمُ التَّفْضِيْلِ has been discussed previously, back in the chapter on the مُشْتَقَّات (see p. 54). What is given here is its complete conjugation.",
              "list": false
            },
            {
              "table": {
                "title": "اِسْمُ التَّفْضِيْلِ — اَلْمُذَكَّرُ",
                "headers": [
                  "Number",
                  "Form"
                ],
                "rows": [
                  [
                    "مُفْرَدٌ",
                    "أَكْبَرُ"
                  ],
                  [
                    "مُثَنَّى",
                    "أَكْبَرَانِ"
                  ],
                  [
                    "جَمْعٌ",
                    "أَكْبَرُوْنَ، أَكَابِرُ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ التَّفْضِيْلِ — اَلْمُؤَنَّثُ",
                "headers": [
                  "Number",
                  "Form"
                ],
                "rows": [
                  [
                    "مُفْرَدٌ",
                    "كُبْرَى"
                  ],
                  [
                    "مُثَنَّى",
                    "كُبْرَيَانِ"
                  ],
                  [
                    "جَمْعٌ",
                    "كُبْرَيَاتٌ، كُبَرُ"
                  ]
                ]
              }
            },
            {
              "html": "Two things are worth pausing on. First, the feminine is not أَكْبَرَةٌ but كُبْرَى — a different pattern altogether, فُعْلَى against أَفْعَلُ. Second, each plural has two forms: a sound plural (أَكْبَرُوْنَ، كُبْرَيَاتٌ) and a broken one (أَكَابِرُ، كُبَرُ). Both are in use, and the book's exercises show both.",
              "list": false
            },
            {
              "html": "Most of the time, as the next lessons will show, the اِسْمُ التَّفْضِيْلِ is left in the bare masculine singular — أَكْبَرُ, أَفْضَلُ, أَقْرَبُ — whatever it describes. The conjugated forms come into their own only when the word carries an ال.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is unusual about the feminine singular of the اِسْمُ التَّفْضِيْلِ, e.g. from أَكْبَرُ؟",
            "kind": "mcq",
            "options": [
              "It is not أَكْبَرَةٌ but كُبْرَى — a completely different pattern (فُعْلَى instead of أَفْعَلُ)",
              "It is identical to the masculine form",
              "It simply adds a تَاءُ مَرْبُوْطَة: أَكْبَرَةٌ",
              "There is no feminine form at all"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Construction — the slots",
          "lines": [
            {
              "html": "The اِسْمُ التَّفْضِيْلِ verbal phrase consists of essential and non-essential slots.",
              "list": false
            },
            {
              "html": "There are two essential slots: the اِسْمُ التَّفْضِيْلِ slot and the فَاعِلٌ slot. There are two non-essential slots: the مَفْعُوْلٌ بِهِ slot, and a غَيْرُ صَرِيْحٍ or مَنْصُوْبٌ slot — of which there may be more than one.",
              "list": false
            },
            {
              "table": {
                "title": "اِسْمُ التَّفْضِيْلِ Verbal Phrase — the four slots",
                "headers": [
                  "اِسْمُ التَّفْضِيْلِ",
                  "فَاعِلٌ",
                  "مَفْعُوْلٌ بِهِ",
                  "مَنْصُوْبٌ / غَيْرُ صَرِيْحٍ"
                ],
                "rows": [
                  [
                    "essential",
                    "essential",
                    "non-essential",
                    "non-essential"
                  ]
                ]
              }
            },
            {
              "html": "Book slip: the red heading over this table on p. 553 reads 'اِسْمُ الْفَاعِلِ Verbal Phrase', but the first cell of the table itself reads اِسْمُ التَّفْضِيْلِ and the whole page is about the اِسْمُ التَّفْضِيْلِ. The heading has simply been carried over from the earlier table. Read it as 'اِسْمُ التَّفْضِيْلِ Verbal Phrase'.",
              "list": false
            },
            {
              "html": "This is the fullest of the five verbal phrases: it has both an object slot and a slot for adverbial and prepositional material, which the صِفَةٌ مُشَبَّهَةٌ phrase did not.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What are the two essential and two non-essential slots of an اِسْمُ التَّفْضِيْلِ verbal phrase؟",
            "kind": "mcq",
            "options": [
              "Essential: اِسْمُ التَّفْضِيْلِ and فَاعِلٌ; non-essential: مَفْعُوْلٌ بِهِ and a مَنْصُوْبٌ/غَيْرُ صَرِيْحٍ slot (possibly more than one)",
              "Essential: مَفْعُوْلٌ بِهِ and مَنْصُوْبٌ; non-essential: اِسْمُ التَّفْضِيْلِ and فَاعِلٌ",
              "Only one slot is essential",
              "All four slots are essential"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The فَاعِلٌ slot",
          "lines": [
            {
              "html": "The فَاعِلٌ of the اِسْمُ التَّفْضِيْلِ is always a ضَمِيْرٌ مُسْتَتِرٌ.",
              "list": false
            },
            {
              "html": "أَسْمَاءُ أَطْوَلُ بَنَاتِ أَحْمَدَ — Asmā' is the tallest daughter of Aḥmad.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In this example, the فَاعِلٌ of أَطْوَلُ is a ضَمِيْرٌ مُسْتَتِرٌ, i.e. هِيَ.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "أَسْمَاءُ أَطْوَلُ بَنَاتِ أَحْمَدَ",
                "translation": "Asmā' is the tallest daughter of Aḥmad.",
                "cells": [
                  "أَسْمَاءُ",
                  "أَطْوَلُ",
                  "بَنَاتِ",
                  "أَحْمَدَ"
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
                        "start": 1,
                        "end": 1,
                        "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هِيَ)"
                      },
                      {
                        "start": 2,
                        "end": 3,
                        "role": "مَفْعُوْلٌ بِهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Compare this with the earlier phrases. The اِسْمُ الْفَاعِلِ could take its فَاعِلٌ as a hidden pronoun or as a written-out noun; the صِفَةٌ مُشَبَّهَةٌ had three options. The اِسْمُ التَّفْضِيْلِ has only one — the doer is always hidden. Anything written after it fills a different slot, usually the مَفْعُوْلٌ بِهِ.",
              "list": false
            },
            {
              "html": "That single restriction makes these phrases easy to parse: whatever noun follows an اِسْمُ تَفْضِيْلٍ is never its فَاعِلٌ. In أَطْوَلُ بَنَاتِ أَحْمَدَ, بَنَاتِ is a مُضَافٌ إِلَيْهِ standing in the مَفْعُوْلٌ بِهِ slot, and the doer of the 'being tall' is the hidden هِيَ referring back to أَسْمَاءُ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Unlike the اِسْمُ الْفَاعِلِ or the صِفَةٌ مُشَبَّهَةٌ, what is always true of the فَاعِلٌ of an اِسْمُ التَّفْضِيْلِ؟",
            "kind": "mcq",
            "options": [
              "It is always a ضَمِيْرٌ مُسْتَتِرٌ — never a stated noun or a مُضَافٌ إِلَيْهِ",
              "It is always a stated noun",
              "It is always a نَائِبُ الْفَاعِلِ",
              "It never exists at all"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The اِسْمُ التَّفْضِيْلِ verbal phrase — conjugation and construction",
        "rows": [
          {
            "label": "مُذَكَّر",
            "arabic": "أَكْبَرُ / أَكْبَرَانِ / أَكْبَرُوْنَ، أَكَابِرُ",
            "meaning": "singular, dual, plural"
          },
          {
            "label": "مُؤَنَّث",
            "arabic": "كُبْرَى / كُبْرَيَانِ / كُبْرَيَاتٌ، كُبَرُ",
            "meaning": "the feminine uses the فُعْلَى pattern"
          },
          {
            "label": "Essential",
            "arabic": "اِسْمُ التَّفْضِيْلِ + فَاعِلٌ",
            "meaning": "the two slots that must be there"
          },
          {
            "label": "Non-essential",
            "arabic": "مَفْعُوْلٌ بِهِ",
            "meaning": "the thing compared against"
          },
          {
            "label": "Non-essential",
            "arabic": "مَنْصُوْبٌ / غَيْرُ صَرِيْحٌ",
            "meaning": "adverbs, تَمْيِيْز, جَارٌّ وَمَجْرُوْرٌ — one or more"
          },
          {
            "label": "The فَاعِل",
            "arabic": "ضَمِيْرٌ مُسْتَتِرٌ دَائِمًا",
            "meaning": "always hidden — never a written noun"
          }
        ]
      },
      "quiz": [
        {
          "q": "What is the feminine singular اِسْمُ تَفْضِيْلٍ from كبر?",
          "options": [
            "أَكْبَرَةٌ",
            "كَبِيْرَةٌ",
            "كُبْرَى",
            "أَكْبَرَاتٌ"
          ],
          "correct": 2,
          "explanation": "The feminine takes the فُعْلَى pattern, not a تَاء on the masculine."
        },
        {
          "q": "Which pair are both correct masculine plurals of أَكْبَرُ?",
          "options": [
            "أَكْبَرُوْنَ and أَكَابِرُ",
            "أَكْبَرَاتٌ and كُبَرُ",
            "كُبْرَيَاتٌ and أَكَابِرُ",
            "أَكْبَرَانِ and كُبْرَيَانِ"
          ],
          "correct": 0,
          "explanation": "One sound plural and one broken plural; the last pair are the duals."
        },
        {
          "q": "How many essential slots does the اِسْمُ التَّفْضِيْلِ verbal phrase have?",
          "options": [
            "four",
            "three",
            "one",
            "two"
          ],
          "correct": 3,
          "explanation": "The اِسْمُ التَّفْضِيْلِ slot and the فَاعِلٌ slot."
        },
        {
          "q": "Which of these is a non-essential slot in an اِسْمُ التَّفْضِيْلِ verbal phrase?",
          "options": [
            "the فَاعِلٌ slot",
            "the مَفْعُوْلٌ بِهِ slot",
            "the اِسْمُ التَّفْضِيْلِ slot",
            "there are no non-essential slots"
          ],
          "correct": 1,
          "explanation": "The مَفْعُوْلٌ بِهِ and the مَنْصُوْبٌ / غَيْرُ صَرِيْحٍ slots are both optional."
        },
        {
          "q": "The فَاعِلٌ of an اِسْمُ تَفْضِيْلٍ is…",
          "options": [
            "sometimes a noun, sometimes a pronoun",
            "always a written noun",
            "always a ضَمِيْرٌ مُسْتَتِرٌ",
            "always a مُضَافٌ إِلَيْهِ"
          ],
          "correct": 2,
          "explanation": "Unlike the اِسْمُ الْفَاعِلِ and the صِفَةٌ مُشَبَّهَةٌ, this phrase allows no written فَاعِلٌ."
        },
        {
          "q": "In أَسْمَاءُ أَطْوَلُ بَنَاتِ أَحْمَدَ, what is بَنَاتِ أَحْمَدَ?",
          "options": [
            "the مَفْعُوْلٌ بِهِ, occurring as a مُضَافٌ إِلَيْهِ",
            "the فَاعِلٌ of أَطْوَلُ",
            "a نَعْتٌ of أَسْمَاءُ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 0,
          "explanation": "The فَاعِلٌ is the hidden هِيَ; anything written after the word fills another slot."
        }
      ],
      "bank": [
        {
          "title": "أَسْمَاءُ أَطْوَلُ بَنَاتِ أَحْمَدَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 553)",
          "sentence": "أَسْمَاءُ أَطْوَلُ بَنَاتِ أَحْمَدَ",
          "translation": "Asmā' is the tallest daughter of Aḥmad.",
          "cells": [
            "أَسْمَاءُ",
            "أَطْوَلُ",
            "بَنَاتِ",
            "أَحْمَدَ"
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
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هِيَ)"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "نُسَيْبَةُ أَبَرُّ الْبَنَاتِ بِأُمِّهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 2",
          "sentence": "نُسَيْبَةُ أَبَرُّ الْبَنَاتِ بِأُمِّهَا",
          "translation": "Nusaybah is the most dutiful of the girls towards her mother.",
          "cells": [
            "نُسَيْبَةُ",
            "أَبَرُّ",
            "الْبَنَاتِ",
            "بِأُمِّهَا"
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
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هِيَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "اَلْعُلَمَاءُ أَعْرَفُ النَّاسِ بِاللهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 3",
          "sentence": "اَلْعُلَمَاءُ أَعْرَفُ النَّاسِ بِاللهِ",
          "translation": "The scholars are the most knowing of people about Allah.",
          "cells": [
            "اَلْعُلَمَاءُ",
            "أَعْرَفُ",
            "النَّاسِ",
            "بِاللهِ"
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
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمْ)"
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
          "title": "اَلْمَسْجِدُ الْحَرَامُ أَكْبَرُ مَسْجِدٍ فِي الدُّنْيَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 11",
          "sentence": "اَلْمَسْجِدُ الْحَرَامُ أَكْبَرُ مَسْجِدٍ فِي الدُّنْيَا",
          "translation": "Al-Masjid al-Ḥarām is the biggest mosque in the world.",
          "cells": [
            "اَلْمَسْجِدُ",
            "الْحَرَامُ",
            "أَكْبَرُ",
            "مَسْجِدٍ",
            "فِي الدُّنْيَا"
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
                  "end": 4,
                  "role": "خَبَرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ وَاسْمُ التَّفْضِيْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ وَمَفْعُوْلٌ بِهِ"
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
            "فَاعِلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "اَلْخُلُقُ الْحَسَنُ أَثْقَلُ شَيْءٍ فِي الْمِيْزَانِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 13",
          "sentence": "اَلْخُلُقُ الْحَسَنُ أَثْقَلُ شَيْءٍ فِي الْمِيْزَانِ",
          "translation": "Good character is the heaviest thing on the scale.",
          "cells": [
            "اَلْخُلُقُ",
            "الْحَسَنُ",
            "أَثْقَلُ",
            "شَيْءٍ",
            "فِي الْمِيْزَانِ"
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
                  "end": 4,
                  "role": "خَبَرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ وَاسْمُ التَّفْضِيْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ وَمَفْعُوْلٌ بِهِ"
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
            "فَاعِلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "أَقْرَبُ النَّاسِ إِلَى الرَّسُوْلِ أَتْقَاهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 12",
          "sentence": "أَقْرَبُ النَّاسِ إِلَى الرَّسُوْلِ أَتْقَاهُمْ",
          "translation": "The closest of people to the Messenger ﷺ are the most God-fearing of them.",
          "cells": [
            "أَقْرَبُ",
            "النَّاسِ",
            "إِلَى الرَّسُوْلِ",
            "أَتْقَاهُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ وَاسْمُ التَّفْضِيْلِ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُضَافٌ إِلَيْهِ وَمَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ التَّفْضِيْلِ مَعَ الْمُضَافِ إِلَيْهِ (هُمْ)"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اَلْجَاهِلُوْنَ أَضَلُّ النَّاسِ عَنِ الصِّرَاطِ الْمُسْتَقِيْمِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 15",
          "sentence": "اَلْجَاهِلُوْنَ أَضَلُّ النَّاسِ عَنِ الصِّرَاطِ الْمُسْتَقِيْمِ",
          "translation": "The ignorant are the most astray of people from the straight path.",
          "cells": [
            "اَلْجَاهِلُوْنَ",
            "أَضَلُّ",
            "النَّاسِ",
            "عَنِ الصِّرَاطِ الْمُسْتَقِيْمِ"
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
                  "role": "مُضَافٌ وَاسْمُ التَّفْضِيْلِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ وَمَفْعُوْلٌ بِهِ"
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
            "نَعْتٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "إِنَّ الْقُرْآنَ أَعْظَمُ كِتَابٍ أَنْزَلَهُ اللهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 8",
          "sentence": "إِنَّ الْقُرْآنَ أَعْظَمُ كِتَابٍ أَنْزَلَهُ اللهُ",
          "translation": "Indeed the Qur'ān is the greatest book Allah has sent down.",
          "cells": [
            "إِنَّ",
            "الْقُرْآنَ",
            "أَعْظَمُ",
            "كِتَابٍ",
            "أَنْزَلَهُ اللهُ"
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
                  "role": "مُضَافٌ وَاسْمُ التَّفْضِيْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ وَمَفْعُوْلٌ بِهِ"
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
            "فَاعِلٌ",
            "صِلَةٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "كَانَ أُبَيُّ بْنُ كَعْبٍ أَقْرَأَ الصَّحَابَةِ لِكِتَابِ اللهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 16",
          "sentence": "كَانَ أُبَيُّ بْنُ كَعْبٍ أَقْرَأَ الصَّحَابَةِ لِكِتَابِ اللهِ",
          "translation": "Ubayy ibn Kaʿb was the best reciter among the Companions of the Book of Allah.",
          "cells": [
            "كَانَ",
            "أُبَيُّ بْنُ كَعْبٍ",
            "أَقْرَأَ",
            "الصَّحَابَةِ",
            "لِكِتَابِ اللهِ"
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
                  "role": "مُضَافٌ وَاسْمُ التَّفْضِيْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ وَمَفْعُوْلٌ بِهِ"
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
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَعْبَدُ النَّاسِ للهِ أَبْعَدُهُمْ مِنَ الذُّنُوْبِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 9",
          "sentence": "أَعْبَدُ النَّاسِ للهِ أَبْعَدُهُمْ مِنَ الذُّنُوْبِ",
          "translation": "The most devoted of people to Allah are the furthest of them from sins.",
          "cells": [
            "أَعْبَدُ",
            "النَّاسِ",
            "للهِ",
            "أَبْعَدُهُمْ",
            "مِنَ الذُّنُوْبِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
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
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ وَاسْمُ التَّفْضِيْلِ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُضَافٌ إِلَيْهِ وَمَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ التَّفْضِيْلِ مَعَ الْمُضَافِ إِلَيْهِ (هُمْ)"
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
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 2",
          "kind": "mcq",
          "prompt": "In نُسَيْبَةُ أَبَرُّ الْبَنَاتِ بِأُمِّهَا, where is the فَاعِلٌ of أَبَرُّ?",
          "options": [
            "نُسَيْبَةُ",
            "اَلْبَنَاتِ",
            "بِأُمِّهَا",
            "a hidden هِيَ inside أَبَرُّ"
          ],
          "correct": 3,
          "explanation": "The فَاعِلٌ of an اِسْمُ تَفْضِيْلٍ is always a ضَمِيْرٌ مُسْتَتِرٌ."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 3",
          "kind": "mcq",
          "prompt": "In اَلْعُلَمَاءُ أَعْرَفُ النَّاسِ بِاللهِ, what is اَلنَّاسِ?",
          "options": [
            "the مَفْعُوْلٌ بِهِ, as a مُضَافٌ إِلَيْهِ",
            "the فَاعِلٌ",
            "a بَدَلٌ of اَلْعُلَمَاءُ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 0,
          "explanation": "'The most knowing of people' — the group compared against fills the object slot."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 11",
          "kind": "mcq",
          "prompt": "In اَلْمَسْجِدُ الْحَرَامُ أَكْبَرُ مَسْجِدٍ فِي الدُّنْيَا, why is أَكْبَرُ without an ال?",
          "options": [
            "Because مَسْجِد is indefinite",
            "Because it is a مُضَافٌ, and a مُضَافٌ takes no ال",
            "Because the sentence is a statement of fact",
            "Because the phrase is a نَعْتٌ"
          ],
          "correct": 1,
          "explanation": "أَكْبَرُ مَسْجِدٍ is an إِضَافَة, so the first word cannot carry the ال."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 13",
          "kind": "mcq",
          "prompt": "In اَلْخُلُقُ الْحَسَنُ أَثْقَلُ شَيْءٍ فِي الْمِيْزَانِ, what slot does فِي الْمِيْزَانِ fill?",
          "options": [
            "the مَفْعُوْلٌ بِهِ slot",
            "the فَاعِلٌ slot",
            "the غَيْرُ صَرِيْحٍ slot",
            "none — it stands outside the phrase"
          ],
          "correct": 2,
          "explanation": "The fourth slot takes exactly this kind of adverbial material."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 12",
          "kind": "mcq",
          "prompt": "In أَقْرَبُ النَّاسِ إِلَى الرَّسُوْلِ ﷺ أَتْقَاهُمْ, what is أَتْقَاهُمْ?",
          "options": [
            "a second مُبْتَدَأٌ",
            "the خَبَرٌ",
            "a نَعْتٌ",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "The whole phrase أَقْرَبُ النَّاسِ إِلَى الرَّسُوْلِ is the مُبْتَدَأٌ, and أَتْقَاهُمْ its خَبَرٌ."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 15",
          "kind": "mcq",
          "prompt": "In اَلْجَاهِلُوْنَ أَضَلُّ النَّاسِ عَنِ الصِّرَاطِ الْمُسْتَقِيْمِ, how many of the four slots are filled?",
          "options": [
            "two",
            "three — the اِسْمُ التَّفْضِيْلِ, the hidden فَاعِلٌ, and the مَفْعُوْلٌ بِهِ",
            "all four",
            "one"
          ],
          "correct": 2,
          "explanation": "عَنِ الصِّرَاطِ الْمُسْتَقِيْمِ fills the fourth, غَيْرُ صَرِيْحٍ slot as well."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 8",
          "kind": "mcq",
          "prompt": "In إِنَّ الْقُرْآنَ أَعْظَمُ كِتَابٍ أَنْزَلَهُ اللهُ, what is أَنْزَلَهُ اللهُ?",
          "options": [
            "a second خَبَرُ إِنَّ",
            "a حَالٌ",
            "a sentence نَعْتٌ of كِتَابٍ",
            "a صِلَةٌ of a hidden مَوْصُوْل"
          ],
          "correct": 2,
          "explanation": "كِتَابٍ is نَكِرَة, so the sentence after it describes it — a نَعْتٌ, not a صِلَةٌ."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 16",
          "kind": "mcq",
          "prompt": "In كَانَ أُبَيُّ بْنُ كَعْبٍ أَقْرَأَ الصَّحَابَةِ لِكِتَابِ اللهِ, why is أَقْرَأَ مَنْصُوْبٌ?",
          "options": [
            "It is a مَفْعُوْلٌ بِهِ",
            "It is the خَبَرُ كَانَ",
            "It is a حَالٌ",
            "It is a تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "أُبَيُّ بْنُ كَعْبٍ is the اِسْمُ كَانَ, so the phrase after it is the مَنْصُوْب خَبَرٌ."
        },
        {
          "title": "bigger, biggest",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"bigger, biggest\"?",
          "options": [
            "أَكْبَرُ",
            "أَبَرُّ",
            "أَثْقَلُ",
            "أَبْعَدُ"
          ],
          "correct": 0
        },
        {
          "title": "bigger, biggest",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَكْبَرُ mean?",
          "options": [
            "bigger, biggest",
            "more dutiful",
            "heavier, heaviest",
            "further, furthest"
          ],
          "correct": 0
        },
        {
          "title": "bigger, biggest (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَكْبَرُ?",
          "options": [
            "أَكْبَرُوْنَ، أَكَابِرُ",
            "أَخْلَاقٌ",
            "مَوَازِيْنُ",
            "كُبْرَيَاتٌ، كُبَرُ"
          ],
          "correct": 0
        },
        {
          "title": "bigger, biggest (f)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"bigger, biggest (f)\"?",
          "options": [
            "كُبْرَى",
            "أَعْرَفُ",
            "أَقْرَبُ",
            "أَضَلُّ"
          ],
          "correct": 0
        },
        {
          "title": "bigger, biggest (f)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كُبْرَى mean?",
          "options": [
            "bigger, biggest (f)",
            "more knowing",
            "nearer, nearest",
            "more astray"
          ],
          "correct": 0
        },
        {
          "title": "bigger, biggest (f) (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of كُبْرَى?",
          "options": [
            "كُبْرَيَاتٌ، كُبَرُ",
            "أَكْبَرُوْنَ، أَكَابِرُ",
            "أَخْلَاقٌ",
            "مَوَازِيْنُ"
          ],
          "correct": 0
        },
        {
          "title": "taller, tallest",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"taller, tallest\"?",
          "options": [
            "أَطْوَلُ",
            "أَثْقَلُ",
            "أَبْعَدُ",
            "أَعْظَمُ"
          ],
          "correct": 0
        },
        {
          "title": "taller, tallest",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَطْوَلُ mean?",
          "options": [
            "taller, tallest",
            "heavier, heaviest",
            "further, furthest",
            "greater, greatest"
          ],
          "correct": 0
        },
        {
          "title": "more dutiful",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"more dutiful\"?",
          "options": [
            "أَبَرُّ",
            "أَقْرَبُ",
            "أَضَلُّ",
            "مِيْزَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "more dutiful",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبَرُّ mean?",
          "options": [
            "more dutiful",
            "nearer, nearest",
            "more astray",
            "scale, balance"
          ],
          "correct": 0
        },
        {
          "title": "more knowing",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"more knowing\"?",
          "options": [
            "أَعْرَفُ",
            "أَبْعَدُ",
            "أَعْظَمُ",
            "خُلُقٌ"
          ],
          "correct": 0
        },
        {
          "title": "more knowing",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَعْرَفُ mean?",
          "options": [
            "more knowing",
            "further, furthest",
            "greater, greatest",
            "character, disposition"
          ],
          "correct": 0
        },
        {
          "title": "heavier, heaviest",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"heavier, heaviest\"?",
          "options": [
            "أَثْقَلُ",
            "أَضَلُّ",
            "مِيْزَانٌ",
            "أَكْبَرُ"
          ],
          "correct": 0
        },
        {
          "title": "heavier, heaviest",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَثْقَلُ mean?",
          "options": [
            "heavier, heaviest",
            "more astray",
            "scale, balance",
            "bigger, biggest"
          ],
          "correct": 0
        },
        {
          "title": "nearer, nearest",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"nearer, nearest\"?",
          "options": [
            "أَقْرَبُ",
            "أَعْظَمُ",
            "خُلُقٌ",
            "كُبْرَى"
          ],
          "correct": 0
        },
        {
          "title": "nearer, nearest",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَقْرَبُ mean?",
          "options": [
            "nearer, nearest",
            "greater, greatest",
            "character, disposition",
            "bigger, biggest (f)"
          ],
          "correct": 0
        },
        {
          "title": "further, furthest",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"further, furthest\"?",
          "options": [
            "أَبْعَدُ",
            "مِيْزَانٌ",
            "أَكْبَرُ",
            "أَطْوَلُ"
          ],
          "correct": 0
        },
        {
          "title": "further, furthest",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبْعَدُ mean?",
          "options": [
            "further, furthest",
            "scale, balance",
            "bigger, biggest",
            "taller, tallest"
          ],
          "correct": 0
        },
        {
          "title": "more astray",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"more astray\"?",
          "options": [
            "أَضَلُّ",
            "خُلُقٌ",
            "كُبْرَى",
            "أَبَرُّ"
          ],
          "correct": 0
        },
        {
          "title": "more astray",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَضَلُّ mean?",
          "options": [
            "more astray",
            "character, disposition",
            "bigger, biggest (f)",
            "more dutiful"
          ],
          "correct": 0
        },
        {
          "title": "greater, greatest",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"greater, greatest\"?",
          "options": [
            "أَعْظَمُ",
            "أَكْبَرُ",
            "أَطْوَلُ",
            "أَعْرَفُ"
          ],
          "correct": 0
        },
        {
          "title": "greater, greatest",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَعْظَمُ mean?",
          "options": [
            "greater, greatest",
            "bigger, biggest",
            "taller, tallest",
            "more knowing"
          ],
          "correct": 0
        },
        {
          "title": "scale, balance",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"scale, balance\"?",
          "options": [
            "مِيْزَانٌ",
            "كُبْرَى",
            "أَبَرُّ",
            "أَثْقَلُ"
          ],
          "correct": 0
        },
        {
          "title": "scale, balance",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مِيْزَانٌ mean?",
          "options": [
            "scale, balance",
            "bigger, biggest (f)",
            "more dutiful",
            "heavier, heaviest"
          ],
          "correct": 0
        },
        {
          "title": "scale, balance (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مِيْزَانٌ?",
          "options": [
            "مَوَازِيْنُ",
            "أَكْبَرُوْنَ، أَكَابِرُ",
            "أَخْلَاقٌ",
            "كُبْرَيَاتٌ، كُبَرُ"
          ],
          "correct": 0
        },
        {
          "title": "character, disposition",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"character, disposition\"?",
          "options": [
            "خُلُقٌ",
            "أَطْوَلُ",
            "أَعْرَفُ",
            "أَقْرَبُ"
          ],
          "correct": 0
        },
        {
          "title": "character, disposition",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خُلُقٌ mean?",
          "options": [
            "character, disposition",
            "taller, tallest",
            "more knowing",
            "nearer, nearest"
          ],
          "correct": 0
        },
        {
          "title": "character, disposition (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of خُلُقٌ?",
          "options": [
            "أَخْلَاقٌ",
            "كُبْرَيَاتٌ، كُبَرُ",
            "أَكْبَرُوْنَ، أَكَابِرُ",
            "مَوَازِيْنُ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l12",
      "title": "مفعول اسم التفضيل",
      "subtitle": "Supplement: Verbal Phrases",
      "concepts": [
        {
          "heading": "The مَفْعُوْلٌ بِهِ slot — two ways",
          "lines": [
            {
              "html": "The مَفْعُوْلٌ بِهِ of the اِسْمُ التَّفْضِيْلِ can occur in two ways: as a مُضَافٌ إِلَيْهِ, or as a مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ with مِنْ.",
              "list": false
            },
            {
              "html": "1. As a مُضَافٌ إِلَيْهِ.",
              "list": false
            },
            {
              "html": "مُحَمَّدٌ أَصْدَقُ النَّاسِ — Muḥammad is the most truthful of people.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "مُحَمَّدٌ أَصْدَقُ النَّاسِ",
                "translation": "Muḥammad is the most truthful of people.",
                "cells": [
                  "مُحَمَّدٌ",
                  "أَصْدَقُ",
                  "النَّاسِ"
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
                        "start": 1,
                        "end": 1,
                        "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُوَ)"
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
              "html": "2. As a مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ with مِنْ.",
              "list": false
            },
            {
              "html": "فَاطِمَةُ أَطْوَلُ مِنْ خَدِيْجَةَ — Fāṭimah is taller than Khadījah.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "فَاطِمَةُ أَطْوَلُ مِنْ خَدِيْجَةَ",
                "translation": "Fāṭimah is taller than Khadījah.",
                "cells": [
                  "فَاطِمَةُ",
                  "أَطْوَلُ",
                  "مِنْ",
                  "خَدِيْجَةَ"
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
                        "role": "جَارٌّ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "مَجْرُوْرٌ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هِيَ)"
                      },
                      {
                        "start": 2,
                        "end": 3,
                        "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Notice the difference in shape. With the إِضَافَة, the اِسْمُ التَّفْضِيْلِ loses its tanwīn and the following word is مَجْرُوْرٌ by إِضَافَة. With مِنْ, the اِسْمُ التَّفْضِيْلِ keeps its tanwīn and the following word is مَجْرُوْرٌ by the حَرْفُ جَرٍّ instead. Either way the second word is مَجْرُوْرٌ — but the reason differs, and so does the meaning.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What are the two ways the مَفْعُوْلٌ بِهِ of an اِسْمُ التَّفْضِيْلِ can occur؟",
            "kind": "mcq",
            "options": [
              "As a مُضَافٌ إِلَيْهِ (أَصْدَقُ النَّاسِ), or as a مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ with مِنْ (أَطْوَلُ مِنْ خَدِيْجَةَ)",
              "As a فَاعِلٌ or a نَائِبُ الْفَاعِلِ",
              "Only ever with مِنْ",
              "Only ever as a مُضَافٌ إِلَيْهِ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Translation of the مَفْعُوْلٌ بِهِ of the اِسْمُ التَّفْضِيْلِ",
          "lines": [
            {
              "html": "1. When the مَفْعُوْلٌ بِهِ of the اِسْمُ التَّفْضِيْلِ is mentioned with مِنْ, it has a comparative meaning. This is translated as -er or more.",
              "list": false
            },
            {
              "html": "فَاطِمَةُ أَطْوَلُ مِنْ خَدِيْجَةَ — Fāṭimah is taller than Khadījah.",
              "list": true,
              "bullet": true
            },
            {
              "html": "2. When the مَفْعُوْلٌ بِهِ of the اِسْمُ التَّفْضِيْلِ is mentioned without مِنْ, it has a superlative meaning. This is translated as -est or most.",
              "list": false
            },
            {
              "html": "اَلصَّلَاةُ أَفْضَلُ عَمَلٍ — Ṣalāh is the most virtuous deed.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The book gives a second rendering of the same sentence: 'Ṣalāh is the most virtuous of deeds.' Both are right. English can either put the noun straight after the superlative, or turn the إِضَافَة into an 'of' phrase.",
              "list": false
            },
            {
              "table": {
                "title": "The rule in one line",
                "headers": [
                  "Form",
                  "Meaning",
                  "Example",
                  "English"
                ],
                "rows": [
                  [
                    "with مِنْ",
                    "comparative",
                    "أَطْوَلُ مِنْ خَدِيْجَةَ",
                    "taller than Khadījah"
                  ],
                  [
                    "without مِنْ (إِضَافَة)",
                    "superlative",
                    "أَفْضَلُ عَمَلٍ",
                    "the most virtuous deed"
                  ]
                ]
              }
            },
            {
              "html": "This is the single most useful rule of the whole اِسْمُ التَّفْضِيْلِ topic, because Arabic uses one form — أَفْعَلُ — where English has two. Whether أَكْبَرُ means 'bigger' or 'biggest' is settled entirely by whether a مِنْ follows it. The exercise instruction on p. 556 makes the point explicitly: 'Ensure you differentiate between the translation of مُضَافٌ إِلَيْهِ and مَجْرُوْرٌ with مِنْ.'",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How do you tell whether an اِسْمُ التَّفْضِيْلِ has a comparative or a superlative meaning؟",
            "kind": "mcq",
            "options": [
              "With مِنْ it is comparative ('-er'/'more'); without مِنْ (an إِضَافَة) it is superlative ('-est'/'most')",
              "With مِنْ it is superlative; without مِنْ it is comparative",
              "Both readings are always available regardless of مِنْ",
              "The verb tense decides, not مِنْ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The مَفْعُوْلٌ بِهِ of the اِسْمُ التَّفْضِيْلِ",
        "rows": [
          {
            "label": "Way 1",
            "arabic": "مُضَافٌ إِلَيْهِ",
            "meaning": "مُحَمَّدٌ أَصْدَقُ النَّاسِ"
          },
          {
            "label": "Way 2",
            "arabic": "غَيْرُ صَرِيْحٍ بِمِنْ",
            "meaning": "فَاطِمَةُ أَطْوَلُ مِنْ خَدِيْجَةَ"
          },
          {
            "label": "With مِنْ",
            "arabic": "لِلتَّفْضِيْلِ عَلَى وَاحِدٍ",
            "meaning": "comparative — 'taller than'"
          },
          {
            "label": "Without مِنْ",
            "arabic": "لِلتَّفْضِيْلِ عَلَى الْكُلِّ",
            "meaning": "superlative — 'the most virtuous'"
          },
          {
            "label": "Shape 1",
            "arabic": "أَفْضَلُ عَمَلٍ",
            "meaning": "no tanwīn on the first word — an إِضَافَة"
          },
          {
            "label": "Shape 2",
            "arabic": "أَطْوَلُ مِنْ خَدِيْجَةَ",
            "meaning": "tanwīn kept; مِنْ does the جَرّ"
          }
        ]
      },
      "quiz": [
        {
          "q": "In how many ways can the مَفْعُوْلٌ بِهِ of an اِسْمُ تَفْضِيْلٍ occur?",
          "options": [
            "one",
            "two",
            "three",
            "four"
          ],
          "correct": 1,
          "explanation": "As a مُضَافٌ إِلَيْهِ, or as a غَيْرُ صَرِيْحٌ object with مِنْ."
        },
        {
          "q": "What meaning does مِنْ give the phrase?",
          "options": [
            "superlative",
            "no change in meaning",
            "a negative meaning",
            "comparative"
          ],
          "correct": 3,
          "explanation": "أَطْوَلُ مِنْ خَدِيْجَةَ — 'taller than Khadījah'."
        },
        {
          "q": "How is an اِسْمُ تَفْضِيْلٍ in an إِضَافَة translated?",
          "options": [
            "as a superlative — -est or most",
            "as a comparative — -er or more",
            "as a plain adjective",
            "as a verb"
          ],
          "correct": 0,
          "explanation": "أَفْضَلُ عَمَلٍ — 'the most virtuous deed'."
        },
        {
          "q": "In فَاطِمَةُ أَطْوَلُ مِنْ خَدِيْجَةَ, what is مِنْ خَدِيْجَةَ as a whole?",
          "options": [
            "the فَاعِلٌ",
            "a تَمْيِيْزٌ",
            "the مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٌ",
            "a حَالٌ"
          ],
          "correct": 2,
          "explanation": "The جَارٌّ وَمَجْرُوْرٌ fills the object slot of the phrase."
        },
        {
          "q": "Which is a second correct translation of اَلصَّلَاةُ أَفْضَلُ عَمَلٍ?",
          "options": [
            "Ṣalāh is a virtuous deed",
            "Ṣalāh is the most virtuous of deeds",
            "Ṣalāh is more virtuous than a deed",
            "The most virtuous deed is Ṣalāh's"
          ],
          "correct": 1,
          "explanation": "English can render the إِضَافَة either way; both are given."
        },
        {
          "q": "Which shape keeps the tanwīn on the اِسْمُ التَّفْضِيْلِ?",
          "options": [
            "the إِضَافَة shape",
            "neither shape",
            "both shapes",
            "the shape with مِنْ"
          ],
          "correct": 3,
          "explanation": "A مُضَافٌ must drop its tanwīn; with مِنْ the word is not a مُضَافٌ."
        }
      ],
      "bank": [
        {
          "title": "مُحَمَّدٌ أَصْدَقُ النَّاسِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 554)",
          "sentence": "مُحَمَّدٌ أَصْدَقُ النَّاسِ",
          "translation": "Muḥammad is the most truthful of people.",
          "cells": [
            "مُحَمَّدٌ",
            "أَصْدَقُ",
            "النَّاسِ"
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
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُوَ)"
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
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "فَاطِمَةُ أَطْوَلُ مِنْ خَدِيْجَةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 554)",
          "sentence": "فَاطِمَةُ أَطْوَلُ مِنْ خَدِيْجَةَ",
          "translation": "Fāṭimah is taller than Khadījah.",
          "cells": [
            "فَاطِمَةُ",
            "أَطْوَلُ",
            "مِنْ",
            "خَدِيْجَةَ"
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
                  "role": "جَارٌّ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هِيَ)"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مُضَافٌ إِلَيْهِ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اَلصَّلَاةُ أَفْضَلُ عَمَلٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 554)",
          "sentence": "اَلصَّلَاةُ أَفْضَلُ عَمَلٍ",
          "translation": "Ṣalāh is the most virtuous deed.",
          "cells": [
            "اَلصَّلَاةُ",
            "أَفْضَلُ",
            "عَمَلٍ"
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
                  "role": "مُضَافٌ وَاسْمُ التَّفْضِيْلِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ وَمَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اَللَّبَنُ أَبْرَدُ مِنَ الْمَاءِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 1",
          "sentence": "اَللَّبَنُ أَبْرَدُ مِنَ الْمَاءِ",
          "translation": "Milk is colder than water.",
          "cells": [
            "اَللَّبَنُ",
            "أَبْرَدُ",
            "مِنَ الْمَاءِ"
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
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُوَ)"
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
            "مُضَافٌ إِلَيْهِ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "مُصْعَبٌ أَقْوَى مِنْ إِبْرَاهِيْمَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 4",
          "sentence": "مُصْعَبٌ أَقْوَى مِنْ إِبْرَاهِيْمَ",
          "translation": "Muṣʿab is stronger than Ibrāhīm.",
          "cells": [
            "مُصْعَبٌ",
            "أَقْوَى",
            "مِنْ",
            "إِبْرَاهِيْمَ"
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
                  "role": "جَارٌّ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مُضَافٌ إِلَيْهِ",
            "نَعْتٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "هٰذِهِ الْأَرْضُ أَيْبَسُ مِنْ تِلْكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 5",
          "sentence": "هٰذِهِ الْأَرْضُ أَيْبَسُ مِنْ تِلْكَ",
          "translation": "This land is drier than that one.",
          "cells": [
            "هٰذِهِ",
            "الْأَرْضُ",
            "أَيْبَسُ",
            "مِنْ تِلْكَ"
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
                  "role": "بَدَلٌ"
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
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هِيَ)"
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
            "مُضَافٌ إِلَيْهِ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَيُّ كِتَابٍ أَصْدَقُ مِنَ الْقُرْآنِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 6",
          "sentence": "أَيُّ كِتَابٍ أَصْدَقُ مِنَ الْقُرْآنِ",
          "translation": "Which book is more truthful than the Qur'ān?",
          "cells": [
            "أَيُّ",
            "كِتَابٍ",
            "أَصْدَقُ",
            "مِنَ الْقُرْآنِ"
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
                  "end": 3,
                  "role": "خَبَرٌ"
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
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُوَ)"
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
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اَلْمُجْتَهِدُوْنَ أَكْثَرُ مِنَ الْكُسَالَى عَدَدًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 10",
          "sentence": "اَلْمُجْتَهِدُوْنَ أَكْثَرُ مِنَ الْكُسَالَى عَدَدًا",
          "translation": "The hardworking are more than the lazy in number.",
          "cells": [
            "اَلْمُجْتَهِدُوْنَ",
            "أَكْثَرُ",
            "مِنَ الْكُسَالَى",
            "عَدَدًا"
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
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمْ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
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
            "مُضَافٌ إِلَيْهِ",
            "نَعْتٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "أَبْعَدُ النَّاسِ مِنَ الرَّسُوْلِ أَبْعَدُهُمْ مِنَ السُّنَّةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 14",
          "sentence": "أَبْعَدُ النَّاسِ مِنَ الرَّسُوْلِ أَبْعَدُهُمْ مِنَ السُّنَّةِ",
          "translation": "The furthest of people from the Messenger ﷺ are the furthest of them from the Sunnah.",
          "cells": [
            "أَبْعَدُ",
            "النَّاسِ",
            "مِنَ الرَّسُوْلِ",
            "أَبْعَدُهُمْ",
            "مِنَ السُّنَّةِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
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
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ وَاسْمُ التَّفْضِيْلِ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُضَافٌ إِلَيْهِ وَمَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ التَّفْضِيْلِ مَعَ الْمُضَافِ إِلَيْهِ (هُمْ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "غَيْرُ صَرِيْحٍ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "خِيَارُ النَّاسِ خِيَارُهُمْ لِأَهْلِهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 7",
          "sentence": "خِيَارُ النَّاسِ خِيَارُهُمْ لِأَهْلِهِمْ",
          "translation": "The best of people are the best of them to their families.",
          "cells": [
            "خِيَارُ",
            "النَّاسِ",
            "خِيَارُهُمْ",
            "لِأَهْلِهِمْ"
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
                  "end": 3,
                  "role": "خَبَرٌ"
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
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ وَمُضَافٌ إِلَيْهِ (هُمْ)"
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
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 1",
          "kind": "mcq",
          "prompt": "Why is اَللَّبَنُ أَبْرَدُ مِنَ الْمَاءِ comparative and not superlative?",
          "options": [
            "Because اللَّبَن is definite",
            "Because أَبْرَد is masculine",
            "Because the object is introduced by مِنْ",
            "Because water is mentioned"
          ],
          "correct": 2,
          "explanation": "مِنْ is the sole marker of the comparative meaning."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 6",
          "kind": "mcq",
          "prompt": "In أَيُّ كِتَابٍ أَصْدَقُ مِنَ الْقُرْآنِ؟, what is كِتَابٍ?",
          "options": [
            "a مُضَافٌ إِلَيْهِ of أَيُّ",
            "the خَبَرٌ",
            "a تَمْيِيْزٌ",
            "the مَفْعُوْلٌ بِهِ of أَصْدَقُ"
          ],
          "correct": 0,
          "explanation": "أَيُّ is always a مُضَافٌ; the object of أَصْدَقُ is مِنَ الْقُرْآنِ."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 10",
          "kind": "mcq",
          "prompt": "In اَلْمُجْتَهِدُوْنَ أَكْثَرُ مِنَ الْكُسَالَى عَدَدًا, what is عَدَدًا?",
          "options": [
            "the مَفْعُوْلٌ بِهِ",
            "a تَمْيِيْزٌ, filling the مَنْصُوْبٌ slot",
            "a حَالٌ",
            "a second خَبَرٌ"
          ],
          "correct": 1,
          "explanation": "'More than the lazy — in number.' This is the fourth slot of the phrase."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 14",
          "kind": "mcq",
          "prompt": "In أَبْعَدُ النَّاسِ مِنَ الرَّسُوْلِ ﷺ أَبْعَدُهُمْ مِنَ السُّنَّةِ, how do the two أَبْعَدُ differ in shape?",
          "options": [
            "They are identical in shape",
            "The first has مِنْ, the second does not",
            "Both are in إِضَافَة and both take مِنْ as a second slot",
            "The second is a comparative, the first a superlative"
          ],
          "correct": 2,
          "explanation": "Each is a مُضَافٌ (النَّاسِ, هُمْ) and each has a further مِنْ phrase — a superlative with a stated respect."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 5",
          "kind": "mcq",
          "prompt": "In هٰذِهِ الْأَرْضُ أَيْبَسُ مِنْ تِلْكَ, what does تِلْكَ stand for?",
          "options": [
            "a person",
            "the speaker",
            "the other piece of land",
            "the dryness itself"
          ],
          "correct": 2,
          "explanation": "The مُشَارٌ إِلَيْهِ is understood from the first half of the sentence."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 4",
          "kind": "mcq",
          "prompt": "Which slot does مِنْ إِبْرَاهِيْمَ fill in مُصْعَبٌ أَقْوَى مِنْ إِبْرَاهِيْمَ?",
          "options": [
            "the فَاعِلٌ slot",
            "the مَفْعُوْلٌ بِهِ slot",
            "the مَنْصُوْبٌ slot",
            "no slot — it is extra"
          ],
          "correct": 1,
          "explanation": "The thing compared against is always the object of the اِسْمُ تَفْضِيْلٍ."
        },
        {
          "title": "Book example (Section 3, Supplement, p. 554)",
          "kind": "mcq",
          "prompt": "In مُحَمَّدٌ أَصْدَقُ النَّاسِ, why has أَصْدَقُ no tanwīn?",
          "options": [
            "Because it is a مُضَافٌ",
            "Because it is مَمْنُوْعٌ مِنَ الصَّرْفِ",
            "Because it is definite",
            "Because it is the خَبَرٌ"
          ],
          "correct": 0,
          "explanation": "اَلنَّاسِ is its مُضَافٌ إِلَيْهِ, and a مُضَافٌ drops both ال and tanwīn."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), instruction line",
          "kind": "mcq",
          "prompt": "What does the instruction to Exercise 10 ask you to be careful about?",
          "options": [
            "the gender of the اِسْمُ التَّفْضِيْلِ",
            "the difference between مُضَافٌ إِلَيْهِ and مَجْرُوْرٌ with مِنْ in translation",
            "the plural forms",
            "the position of the فَاعِلٌ"
          ],
          "correct": 1,
          "explanation": "That is precisely the comparative-versus-superlative distinction of this lesson."
        },
        {
          "title": "more truthful",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"more truthful\"?",
          "options": [
            "أَصْدَقُ",
            "أَقْوَى",
            "أَكْثَرُ",
            "كَسْلَانُ"
          ],
          "correct": 0
        },
        {
          "title": "more truthful",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَصْدَقُ mean?",
          "options": [
            "more truthful",
            "stronger",
            "more numerous",
            "lazy one"
          ],
          "correct": 0
        },
        {
          "title": "more virtuous, better",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"more virtuous, better\"?",
          "options": [
            "أَفْضَلُ",
            "أَيْبَسُ",
            "لَبَنٌ",
            "مُجْتَهِدٌ"
          ],
          "correct": 0
        },
        {
          "title": "more virtuous, better",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَفْضَلُ mean?",
          "options": [
            "more virtuous, better",
            "drier",
            "milk",
            "hardworking one"
          ],
          "correct": 0
        },
        {
          "title": "colder",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"colder\"?",
          "options": [
            "أَبْرَدُ",
            "أَكْثَرُ",
            "كَسْلَانُ",
            "ذَنْبٌ"
          ],
          "correct": 0
        },
        {
          "title": "colder",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبْرَدُ mean?",
          "options": [
            "colder",
            "more numerous",
            "lazy one",
            "sin"
          ],
          "correct": 0
        },
        {
          "title": "stronger",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"stronger\"?",
          "options": [
            "أَقْوَى",
            "لَبَنٌ",
            "مُجْتَهِدٌ",
            "عَدَدٌ"
          ],
          "correct": 0
        },
        {
          "title": "stronger",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَقْوَى mean?",
          "options": [
            "stronger",
            "milk",
            "hardworking one",
            "number, count"
          ],
          "correct": 0
        },
        {
          "title": "drier",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"drier\"?",
          "options": [
            "أَيْبَسُ",
            "كَسْلَانُ",
            "ذَنْبٌ",
            "أَصْدَقُ"
          ],
          "correct": 0
        },
        {
          "title": "drier",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَيْبَسُ mean?",
          "options": [
            "drier",
            "lazy one",
            "sin",
            "more truthful"
          ],
          "correct": 0
        },
        {
          "title": "more numerous",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"more numerous\"?",
          "options": [
            "أَكْثَرُ",
            "مُجْتَهِدٌ",
            "عَدَدٌ",
            "أَفْضَلُ"
          ],
          "correct": 0
        },
        {
          "title": "more numerous",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَكْثَرُ mean?",
          "options": [
            "more numerous",
            "hardworking one",
            "number, count",
            "more virtuous, better"
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
            "ذَنْبٌ",
            "أَصْدَقُ",
            "أَبْرَدُ"
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
            "sin",
            "more truthful",
            "colder"
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
            "كُسَالَى",
            "ذُنُوْبٌ",
            "مُجْتَهِدُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "lazy one",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"lazy one\"?",
          "options": [
            "كَسْلَانُ",
            "عَدَدٌ",
            "أَفْضَلُ",
            "أَقْوَى"
          ],
          "correct": 0
        },
        {
          "title": "lazy one",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَسْلَانُ mean?",
          "options": [
            "lazy one",
            "number, count",
            "more virtuous, better",
            "stronger"
          ],
          "correct": 0
        },
        {
          "title": "lazy one (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of كَسْلَانُ?",
          "options": [
            "كُسَالَى",
            "مُجْتَهِدُوْنَ",
            "أَعْدَادٌ",
            "أَلْبَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "hardworking one",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"hardworking one\"?",
          "options": [
            "مُجْتَهِدٌ",
            "أَصْدَقُ",
            "أَبْرَدُ",
            "أَيْبَسُ"
          ],
          "correct": 0
        },
        {
          "title": "hardworking one",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُجْتَهِدٌ mean?",
          "options": [
            "hardworking one",
            "more truthful",
            "colder",
            "drier"
          ],
          "correct": 0
        },
        {
          "title": "hardworking one (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُجْتَهِدٌ?",
          "options": [
            "مُجْتَهِدُوْنَ",
            "ذُنُوْبٌ",
            "أَلْبَانٌ",
            "كُسَالَى"
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
            "أَفْضَلُ",
            "أَقْوَى",
            "أَكْثَرُ"
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
            "more virtuous, better",
            "stronger",
            "more numerous"
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
            "أَعْدَادٌ",
            "كُسَالَى",
            "أَلْبَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "number, count",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"number, count\"?",
          "options": [
            "عَدَدٌ",
            "أَبْرَدُ",
            "أَيْبَسُ",
            "لَبَنٌ"
          ],
          "correct": 0
        },
        {
          "title": "number, count",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَدَدٌ mean?",
          "options": [
            "number, count",
            "colder",
            "drier",
            "milk"
          ],
          "correct": 0
        },
        {
          "title": "number, count (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَدَدٌ?",
          "options": [
            "أَعْدَادٌ",
            "أَلْبَانٌ",
            "مُجْتَهِدُوْنَ",
            "كُسَالَى"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l13",
      "title": "تمييز اسم التفضيل",
      "subtitle": "Supplement: Verbal Phrases",
      "concepts": [
        {
          "heading": "The fourth slot",
          "lines": [
            {
              "html": "The اِسْمُ التَّفْضِيْلِ can have other غَيْرُ صَرِيْحٌ and مَنْصُوْبٌ slots. This is the last of the four slots listed at the start, and unlike the others it may be filled more than once.",
              "list": false
            },
            {
              "html": "فَاطِمَةُ أَبَرُّ الْبَنَاتِ بِأُمِّهَا عِنْدَ كِبَرِهَا — Fāṭimah is the most dutiful of the girls to her mother in her old age.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "فَاطِمَةُ أَبَرُّ الْبَنَاتِ بِأُمِّهَا عِنْدَ كِبَرِهَا",
                "translation": "Fāṭimah is the most dutiful of the girls to her mother in her old age.",
                "cells": [
                  "فَاطِمَةُ",
                  "أَبَرُّ",
                  "الْبَنَاتِ",
                  "بِأُمِّهَا",
                  "عِنْدَ كِبَرِهَا"
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
                        "role": "جَارٌّ – مَجْرُوْرٌ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "مُضَافٌ – مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هِيَ)"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "مَفْعُوْلٌ بِهِ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "مَفْعُوْلٌ بِهِ ثَانٍ غَيْرُ صَرِيْحٍ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "مَفْعُوْلٌ فِيْهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "All four slots are filled here at once. أَبَرُّ is the اِسْمُ التَّفْضِيْلِ with its hidden هِيَ; اَلْبَنَاتِ is the مَفْعُوْلٌ بِهِ in إِضَافَة; بِأُمِّهَا is a second, غَيْرُ صَرِيْحٌ object — for بَرَّ takes its object with بِ; and عِنْدَ كِبَرِهَا is a مَفْعُوْلٌ فِيْهِ giving the time.",
              "list": false
            },
            {
              "html": "Read the diagram in layers rather than word by word. The top row splits the sentence into مُبْتَدَأٌ and خَبَرٌ; the middle row shows the small pairings inside the خَبَرٌ (which word governs which); the bottom row assigns each word its slot in the verbal phrase. The same word can therefore carry two labels — اَلْبَنَاتِ is a مُضَافٌ إِلَيْهِ by form and a مَفْعُوْلٌ بِهِ by function.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How is the fourth slot of the اِسْمُ التَّفْضِيْلِ (غَيْرُ صَرِيْحٌ / مَنْصُوْبٌ) different from the other three؟",
            "kind": "mcq",
            "options": [
              "It may be filled more than once in the same phrase",
              "It can only ever be filled once",
              "It is the only essential slot",
              "It never co-occurs with the مَفْعُوْلٌ بِهِ slot"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The تَمْيِيْزٌ",
          "lines": [
            {
              "html": "It is common for the اِسْمُ التَّفْضِيْلِ to have a تَمْيِيْزٌ when it is a word like أَشَدُّ, أَحْسَنُ, أَقَلُّ, أَكْثَرُ and the like.",
              "list": false
            },
            {
              "html": "هُمْ أَكْثَرُ النَّاسِ حَاجَةً — They are the neediest people.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "هُمْ أَكْثَرُ النَّاسِ حَاجَةً",
                "translation": "They are the neediest people.",
                "cells": [
                  "هُمْ",
                  "أَكْثَرُ",
                  "النَّاسِ",
                  "حَاجَةً"
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
                        "start": 1,
                        "end": 1,
                        "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمْ)"
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
            },
            {
              "html": "Words like أَكْثَرُ and أَشَدُّ are vague on their own — more in what? intense in what? The تَمْيِيْزٌ answers exactly that, and comes مَنْصُوْبٌ and نَكِرَة as a تَمْيِيْزٌ always does. أَكْثَرُ النَّاسِ حَاجَةً is 'the most of people — in need'.",
              "list": false
            },
            {
              "html": "English usually folds the two words into one: 'the neediest people' rather than 'the most of people in need'. When translating, look for an English adjective that carries the تَمْيِيْزٌ inside it — أَكْثَرُ … عَدَدًا becomes 'more numerous', أَشَدُّ … بَأْسًا becomes 'fiercer'.",
              "list": false
            },
            {
              "table": {
                "title": "The four slots, gathered",
                "headers": [
                  "Slot",
                  "Status",
                  "In فَاطِمَةُ أَبَرُّ الْبَنَاتِ بِأُمِّهَا عِنْدَ كِبَرِهَا"
                ],
                "rows": [
                  [
                    "اِسْمُ التَّفْضِيْلِ",
                    "essential",
                    "أَبَرُّ"
                  ],
                  [
                    "فَاعِلٌ",
                    "essential",
                    "the hidden هِيَ"
                  ],
                  [
                    "مَفْعُوْلٌ بِهِ",
                    "non-essential",
                    "اَلْبَنَاتِ"
                  ],
                  [
                    "غَيْرُ صَرِيْحٍ / مَنْصُوْبٌ",
                    "non-essential, repeatable",
                    "بِأُمِّهَا and عِنْدَ كِبَرِهَا"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Why do words like أَكْثَرُ and أَشَدُّ commonly take a تَمْيِيْزٌ, as in أَكْثَرُ النَّاسِ حَاجَةً؟",
            "kind": "mcq",
            "options": [
              "Because they are vague on their own ('more' or 'intense' in what respect?), and the تَمْيِيْزٌ supplies that missing specification",
              "Because they can never take a مُضَافٌ إِلَيْهِ",
              "Because a تَمْيِيْزٌ is required after every اِسْمُ تَفْضِيْلٍ without exception",
              "Because حَاجَةً is actually their فَاعِلٌ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The fourth slot and the تَمْيِيْزٌ",
        "rows": [
          {
            "label": "The slot",
            "arabic": "غَيْرُ صَرِيْحٍ / مَنْصُوْبٌ",
            "meaning": "may be filled more than once"
          },
          {
            "label": "Example",
            "arabic": "بِأُمِّهَا عِنْدَ كِبَرِهَا",
            "meaning": "a second object and a مَفْعُوْلٌ فِيْهِ together"
          },
          {
            "label": "تَمْيِيْزٌ",
            "arabic": "أَشَدُّ، أَحْسَنُ، أَقَلُّ، أَكْثَرُ",
            "meaning": "these words commonly take one"
          },
          {
            "label": "Example",
            "arabic": "هُمْ أَكْثَرُ النَّاسِ حَاجَةً",
            "meaning": "the neediest of people"
          },
          {
            "label": "Its form",
            "arabic": "مَنْصُوْبٌ نَكِرَةٌ",
            "meaning": "as a تَمْيِيْزٌ always is"
          },
          {
            "label": "In English",
            "arabic": "أَكْثَرُ … حَاجَةً",
            "meaning": "usually folded into one adjective: 'neediest'"
          }
        ]
      },
      "quiz": [
        {
          "q": "How many times may the غَيْرُ صَرِيْحٍ / مَنْصُوْبٌ slot be filled?",
          "options": [
            "never",
            "exactly once",
            "more than once",
            "only when there is no مَفْعُوْلٌ بِهِ"
          ],
          "correct": 2,
          "explanation": "فَاطِمَةُ أَبَرُّ الْبَنَاتِ بِأُمِّهَا عِنْدَ كِبَرِهَا fills it twice — بِأُمِّهَا and عِنْدَ كِبَرِهَا."
        },
        {
          "q": "In فَاطِمَةُ أَبَرُّ الْبَنَاتِ بِأُمِّهَا, what is بِأُمِّهَا?",
          "options": [
            "a تَمْيِيْزٌ",
            "a مَفْعُوْلٌ بِهِ ثَانٍ غَيْرُ صَرِيْحٍ",
            "a حَالٌ",
            "a مُضَافٌ إِلَيْهِ"
          ],
          "correct": 1,
          "explanation": "بَرَّ takes its object with بِ, so the جَارٌّ وَمَجْرُوْرٌ is a second object."
        },
        {
          "q": "What is عِنْدَ كِبَرِهَا in the same sentence?",
          "options": [
            "a تَمْيِيْزٌ",
            "a مَفْعُوْلٌ بِهِ",
            "a نَعْتٌ",
            "a مَفْعُوْلٌ فِيْهِ"
          ],
          "correct": 3,
          "explanation": "It gives the time at which the dutifulness is shown."
        },
        {
          "q": "Which kind of اِسْمُ تَفْضِيْلٍ commonly takes a تَمْيِيْزٌ?",
          "options": [
            "words like أَشَدُّ، أَحْسَنُ، أَقَلُّ، أَكْثَرُ",
            "only feminine forms",
            "only those in an إِضَافَة",
            "only those with an ال"
          ],
          "correct": 0,
          "explanation": "These are vague on their own, so a تَمْيِيْزٌ specifies the respect."
        },
        {
          "q": "In هُمْ أَكْثَرُ النَّاسِ حَاجَةً, what is حَاجَةً?",
          "options": [
            "the مَفْعُوْلٌ بِهِ",
            "a حَالٌ",
            "a تَمْيِيْزٌ",
            "a مُضَافٌ إِلَيْهِ"
          ],
          "correct": 2,
          "explanation": "مَنْصُوْبٌ and نَكِرَة, answering 'more in what?'."
        },
        {
          "q": "How does English usually render أَكْثَرُ النَّاسِ حَاجَةً?",
          "options": [
            "the most of people in the need",
            "the neediest people",
            "more people needed",
            "the need of most people"
          ],
          "correct": 1,
          "explanation": "English folds the تَمْيِيْزٌ into the adjective itself."
        }
      ],
      "bank": [
        {
          "title": "فَاطِمَةُ أَبَرُّ الْبَنَاتِ بِأُمِّهَا عِنْدَ كِبَرِهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 555)",
          "sentence": "فَاطِمَةُ أَبَرُّ الْبَنَاتِ بِأُمِّهَا عِنْدَ كِبَرِهَا",
          "translation": "Fāṭimah is the most dutiful of the girls to her mother in her old age.",
          "cells": [
            "فَاطِمَةُ",
            "أَبَرُّ",
            "الْبَنَاتِ",
            "بِأُمِّهَا",
            "عِنْدَ كِبَرِهَا"
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
                  "role": "جَارٌّ – مَجْرُوْرٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مُضَافٌ – مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هِيَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ غَيْرُ صَرِيْحٍ"
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
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "هُمْ أَكْثَرُ النَّاسِ حَاجَةً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 555)",
          "sentence": "هُمْ أَكْثَرُ النَّاسِ حَاجَةً",
          "translation": "They are the neediest people.",
          "cells": [
            "هُمْ",
            "أَكْثَرُ",
            "النَّاسِ",
            "حَاجَةً"
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
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمْ)"
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
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "نُسَيْبَةُ أَبَرُّ الْبَنَاتِ بِأُمِّهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 2",
          "sentence": "نُسَيْبَةُ أَبَرُّ الْبَنَاتِ بِأُمِّهَا",
          "translation": "Nusaybah is the most dutiful of the girls towards her mother.",
          "cells": [
            "نُسَيْبَةُ",
            "أَبَرُّ",
            "الْبَنَاتِ",
            "بِأُمِّهَا"
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
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هِيَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اَلْمُجْتَهِدُوْنَ أَكْثَرُ مِنَ الْكُسَالَى عَدَدًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 10",
          "sentence": "اَلْمُجْتَهِدُوْنَ أَكْثَرُ مِنَ الْكُسَالَى عَدَدًا",
          "translation": "The hardworking are more numerous than the lazy.",
          "cells": [
            "اَلْمُجْتَهِدُوْنَ",
            "أَكْثَرُ",
            "مِنَ الْكُسَالَى",
            "عَدَدًا"
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
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمْ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
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
            "مُضَافٌ إِلَيْهِ",
            "نَعْتٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "اَلْخُلُقُ الْحَسَنُ أَثْقَلُ شَيْءٍ فِي الْمِيْزَانِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 13",
          "sentence": "اَلْخُلُقُ الْحَسَنُ أَثْقَلُ شَيْءٍ فِي الْمِيْزَانِ",
          "translation": "Good character is the heaviest thing on the scale.",
          "cells": [
            "اَلْخُلُقُ الْحَسَنُ",
            "أَثْقَلُ",
            "شَيْءٍ",
            "فِي الْمِيْزَانِ"
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
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُوَ)"
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
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَقْرَبُ النَّاسِ إِلَى الرَّسُوْلِ أَتْقَاهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 12",
          "sentence": "أَقْرَبُ النَّاسِ إِلَى الرَّسُوْلِ أَتْقَاهُمْ",
          "translation": "The closest of people to the Messenger ﷺ are the most God-fearing of them.",
          "cells": [
            "أَقْرَبُ",
            "النَّاسِ",
            "إِلَى الرَّسُوْلِ",
            "أَتْقَاهُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمْ)"
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
                }
              ]
            }
          ],
          "distractors": [
            "مُضَافٌ إِلَيْهِ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَعْبَدُ النَّاسِ للهِ أَبْعَدُهُمْ مِنَ الذُّنُوْبِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 9",
          "sentence": "أَعْبَدُ النَّاسِ للهِ أَبْعَدُهُمْ مِنَ الذُّنُوْبِ",
          "translation": "The most devoted of people to Allah are the furthest of them from sins.",
          "cells": [
            "أَعْبَدُ",
            "النَّاسِ",
            "للهِ",
            "أَبْعَدُهُمْ",
            "مِنَ الذُّنُوْبِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
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
                  "start": 0,
                  "end": 0,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمْ)"
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
                  "role": "غَيْرُ صَرِيْحٍ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مُضَافٌ إِلَيْهِ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اَلْجَاهِلُوْنَ أَضَلُّ النَّاسِ عَنِ الصِّرَاطِ الْمُسْتَقِيْمِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 15",
          "sentence": "اَلْجَاهِلُوْنَ أَضَلُّ النَّاسِ عَنِ الصِّرَاطِ الْمُسْتَقِيْمِ",
          "translation": "The ignorant are the most astray of people from the straight path.",
          "cells": [
            "اَلْجَاهِلُوْنَ",
            "أَضَلُّ",
            "النَّاسِ",
            "عَنِ الصِّرَاطِ الْمُسْتَقِيْمِ"
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
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمْ)"
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
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "كَانَ أُبَيُّ بْنُ كَعْبٍ أَقْرَأَ الصَّحَابَةِ لِكِتَابِ اللهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 16",
          "sentence": "كَانَ أُبَيُّ بْنُ كَعْبٍ أَقْرَأَ الصَّحَابَةِ لِكِتَابِ اللهِ",
          "translation": "Ubayy ibn Kaʿb was the best reciter among the Companions of the Book of Allah.",
          "cells": [
            "كَانَ",
            "أُبَيُّ بْنُ كَعْبٍ",
            "أَقْرَأَ",
            "الصَّحَابَةِ",
            "لِكِتَابِ اللهِ"
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
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
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
            "مُضَافٌ إِلَيْهِ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَبْعَدُ النَّاسِ مِنَ الرَّسُوْلِ أَبْعَدُهُمْ مِنَ السُّنَّةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 14",
          "sentence": "أَبْعَدُ النَّاسِ مِنَ الرَّسُوْلِ أَبْعَدُهُمْ مِنَ السُّنَّةِ",
          "translation": "The furthest of people from the Messenger ﷺ are the furthest of them from the Sunnah.",
          "cells": [
            "أَبْعَدُ",
            "النَّاسِ",
            "مِنَ الرَّسُوْلِ",
            "أَبْعَدُهُمْ",
            "مِنَ السُّنَّةِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
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
                  "start": 0,
                  "end": 0,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمْ)"
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
                  "role": "غَيْرُ صَرِيْحٍ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مُضَافٌ إِلَيْهِ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book example (Section 3, Supplement, p. 555)",
          "kind": "mcq",
          "prompt": "How many of the four slots are filled in فَاطِمَةُ أَبَرُّ الْبَنَاتِ بِأُمِّهَا عِنْدَ كِبَرِهَا?",
          "options": [
            "two",
            "three",
            "all four",
            "only the two essential ones"
          ],
          "correct": 2,
          "explanation": "The fourth is filled twice over, by بِأُمِّهَا and by عِنْدَ كِبَرِهَا."
        },
        {
          "title": "Book example (Section 3, Supplement, p. 555)",
          "kind": "mcq",
          "prompt": "Why does اَلْبَنَاتِ carry two labels in the diagram?",
          "options": [
            "Because it is both مُضَافٌ إِلَيْهِ by form and مَفْعُوْلٌ بِهِ by function",
            "Because there are two possible parsings",
            "Because it is plural",
            "Because it could also be the فَاعِلٌ"
          ],
          "correct": 0,
          "explanation": "The middle row shows the إِضَافَة, the bottom row the slot in the verbal phrase."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 10",
          "kind": "mcq",
          "prompt": "In اَلْمُجْتَهِدُوْنَ أَكْثَرُ مِنَ الْكُسَالَى عَدَدًا, which two non-essential slots are filled?",
          "options": [
            "the مَفْعُوْلٌ بِهِ (مِنَ الْكُسَالَى) and the مَنْصُوْبٌ slot (عَدَدًا)",
            "two مَفْعُوْلٌ بِهِ slots",
            "the فَاعِلٌ and the تَمْيِيْزٌ",
            "none — both words are extra"
          ],
          "correct": 0,
          "explanation": "عَدَدًا is a تَمْيِيْزٌ, exactly the pattern of هُمْ أَكْثَرُ النَّاسِ حَاجَةً."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 13",
          "kind": "mcq",
          "prompt": "What fills the fourth slot in اَلْخُلُقُ الْحَسَنُ أَثْقَلُ شَيْءٍ فِي الْمِيْزَانِ?",
          "options": [
            "شَيْءٍ",
            "اَلْحَسَنُ",
            "فِي الْمِيْزَانِ",
            "nothing"
          ],
          "correct": 2,
          "explanation": "شَيْءٍ is the مَفْعُوْلٌ بِهِ; the جَارٌّ وَمَجْرُوْرٌ is the غَيْرُ صَرِيْحٌ slot."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 2",
          "kind": "mcq",
          "prompt": "In نُسَيْبَةُ أَبَرُّ الْبَنَاتِ بِأُمِّهَا, what does بِأُمِّهَا show about بَرَّ?",
          "options": [
            "that it is a lāzim verb",
            "that it takes its object with بِ",
            "that it needs a تَمْيِيْزٌ",
            "that its فَاعِلٌ must be written"
          ],
          "correct": 1,
          "explanation": "The حَرْفُ جَرٍّ is part of how the verb governs, and it survives into the derived noun."
        },
        {
          "title": "Book example (Section 3, Supplement, p. 555)",
          "kind": "mcq",
          "prompt": "Why is حَاجَةً نَكِرَة rather than definite?",
          "options": [
            "Because it follows a مُضَافٌ إِلَيْهِ",
            "Because it refers to people",
            "Because a تَمْيِيْزٌ is always نَكِرَة and مَنْصُوْبٌ",
            "Because the sentence is general"
          ],
          "correct": 2,
          "explanation": "This is the standing rule for a تَمْيِيْزٌ, met long before this Supplement."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 12",
          "kind": "mcq",
          "prompt": "In أَقْرَبُ النَّاسِ إِلَى الرَّسُوْلِ ﷺ أَتْقَاهُمْ, what fills the fourth slot?",
          "options": [
            "أَتْقَاهُمْ",
            "اَلنَّاسِ",
            "إِلَى الرَّسُوْلِ",
            "nothing"
          ],
          "correct": 2,
          "explanation": "قَرُبَ takes إِلَى, so the جَارٌّ وَمَجْرُوْرٌ is غَيْرُ صَرِيْحٌ material in the phrase."
        },
        {
          "title": "Book example (Section 3, Supplement, p. 555)",
          "kind": "mcq",
          "prompt": "Which slot is filled by a ضَمِيْرٌ مُسْتَتِرٌ in هُمْ أَكْثَرُ النَّاسِ حَاجَةً?",
          "options": [
            "the مَفْعُوْلٌ بِهِ",
            "the تَمْيِيْزٌ",
            "the مُبْتَدَأٌ",
            "the فَاعِلٌ"
          ],
          "correct": 3,
          "explanation": "The hidden هُمْ inside أَكْثَرُ — as always with this phrase."
        },
        {
          "title": "to be dutiful to",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be dutiful to\"?",
          "options": [
            "بَرَّ يَبَرُّ",
            "أَحْسَنُ",
            "كِبَرٌ",
            "بِنْتٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be dutiful to",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَرَّ يَبَرُّ mean?",
          "options": [
            "to be dutiful to",
            "better, more beautiful",
            "old age",
            "girl, daughter"
          ],
          "correct": 0
        },
        {
          "title": "more dutiful",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"more dutiful\"?",
          "options": [
            "أَبَرُّ",
            "أَقَلُّ",
            "حَاجَةٌ",
            "أُمٌّ"
          ],
          "correct": 0
        },
        {
          "title": "more dutiful",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبَرُّ mean?",
          "options": [
            "more dutiful",
            "fewer, less",
            "need",
            "mother"
          ],
          "correct": 0
        },
        {
          "title": "more intense",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"more intense\"?",
          "options": [
            "أَشَدُّ",
            "كِبَرٌ",
            "بِنْتٌ",
            "بَرَّ يَبَرُّ"
          ],
          "correct": 0
        },
        {
          "title": "more intense",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَشَدُّ mean?",
          "options": [
            "more intense",
            "old age",
            "girl, daughter",
            "to be dutiful to"
          ],
          "correct": 0
        },
        {
          "title": "better, more beautiful",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"better, more beautiful\"?",
          "options": [
            "أَحْسَنُ",
            "حَاجَةٌ",
            "أُمٌّ",
            "أَبَرُّ"
          ],
          "correct": 0
        },
        {
          "title": "better, more beautiful",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَحْسَنُ mean?",
          "options": [
            "better, more beautiful",
            "need",
            "mother",
            "more dutiful"
          ],
          "correct": 0
        },
        {
          "title": "fewer, less",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"fewer, less\"?",
          "options": [
            "أَقَلُّ",
            "بِنْتٌ",
            "بَرَّ يَبَرُّ",
            "أَشَدُّ"
          ],
          "correct": 0
        },
        {
          "title": "fewer, less",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَقَلُّ mean?",
          "options": [
            "fewer, less",
            "girl, daughter",
            "to be dutiful to",
            "more intense"
          ],
          "correct": 0
        },
        {
          "title": "old age",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"old age\"?",
          "options": [
            "كِبَرٌ",
            "أُمٌّ",
            "أَبَرُّ",
            "أَحْسَنُ"
          ],
          "correct": 0
        },
        {
          "title": "old age",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كِبَرٌ mean?",
          "options": [
            "old age",
            "mother",
            "more dutiful",
            "better, more beautiful"
          ],
          "correct": 0
        },
        {
          "title": "need",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"need\"?",
          "options": [
            "حَاجَةٌ",
            "بَرَّ يَبَرُّ",
            "أَشَدُّ",
            "أَقَلُّ"
          ],
          "correct": 0
        },
        {
          "title": "need",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَاجَةٌ mean?",
          "options": [
            "need",
            "to be dutiful to",
            "more intense",
            "fewer, less"
          ],
          "correct": 0
        },
        {
          "title": "girl, daughter",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"girl, daughter\"?",
          "options": [
            "بِنْتٌ",
            "أَبَرُّ",
            "أَحْسَنُ",
            "كِبَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "girl, daughter",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بِنْتٌ mean?",
          "options": [
            "girl, daughter",
            "more dutiful",
            "better, more beautiful",
            "old age"
          ],
          "correct": 0
        },
        {
          "title": "mother",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"mother\"?",
          "options": [
            "أُمٌّ",
            "أَشَدُّ",
            "أَقَلُّ",
            "حَاجَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "mother",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أُمٌّ mean?",
          "options": [
            "mother",
            "more intense",
            "fewer, less",
            "need"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l14",
      "title": "اسم التفضيل بلا أل",
      "subtitle": "Supplement: Verbal Phrases",
      "concepts": [
        {
          "heading": "Two ways it occurs",
          "lines": [
            {
              "html": "The اِسْمُ التَّفْضِيْلِ in a verbal phrase can occur in two ways: without an ال, or with an ال. This lesson takes the first, which is by far the commoner.",
              "list": false
            },
            {
              "table": {
                "title": "The two shapes",
                "headers": [
                  "Shape",
                  "Behaviour",
                  "Example"
                ],
                "rows": [
                  [
                    "without ال",
                    "usually masculine and singular, whatever it describes",
                    "اَلصَّلَاةُ أَفْضَلُ عَمَلٍ"
                  ],
                  [
                    "with ال",
                    "agrees with its مُبْتَدَأٌ or مَنْعُوْتٌ",
                    "اَلْوَلَدُ الْأَكْبَرُ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What are the two ways an اِسْمُ التَّفْضِيْلِ can occur in a verbal phrase, and which is more common؟",
            "kind": "mcq",
            "options": [
              "Without an ال (usually frozen masculine singular) or with an ال (agreeing) — the ال-less form is far more common",
              "Only with ال, never without",
              "Only as a مُضَافٌ, never with ال",
              "Both forms are equally rare"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The اِسْمُ التَّفْضِيْلِ without an ال",
          "lines": [
            {
              "html": "When the اِسْمُ التَّفْضِيْلِ does not have an ال, it is usually masculine and singular.",
              "list": false
            },
            {
              "html": "اَلصَّلَاةُ أَفْضَلُ عَمَلٍ بَعْدَ الْإِيْمَانِ — Ṣalāh is the most virtuous deed after faith.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In this example, the اِسْمُ التَّفْضِيْلِ, i.e. أَفْضَلُ, remains masculine even though it is referring to اَلصَّلَاةُ, which is feminine.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَلصَّلَاةُ أَفْضَلُ عَمَلٍ بَعْدَ الْإِيْمَانِ",
                "translation": "Ṣalāh is the most virtuous deed after faith.",
                "cells": [
                  "اَلصَّلَاةُ",
                  "أَفْضَلُ",
                  "عَمَلٍ",
                  "بَعْدَ الْإِيْمَانِ"
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
                        "start": 1,
                        "end": 1,
                        "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هِيَ)"
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
                ]
              }
            },
            {
              "html": "This is the point to hold on to. Everywhere else in the grammar a describing word copies what it describes; the bare اِسْمُ تَفْضِيْلٍ does not. أَفْضَلُ, أَكْبَرُ, أَقْرَبُ stay in their base masculine singular shape whether the subject is a woman, a pair, or a nation. It is the ال that switches agreement back on.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is the general behaviour of an اِسْمُ التَّفْضِيْلِ WITHOUT an ال, regardless of what it describes؟",
            "kind": "mcq",
            "options": [
              "It stays masculine and singular (frozen), whatever the subject's real gender or number",
              "It fully agrees in gender and number",
              "It becomes مُؤَنَّثٌ automatically",
              "It becomes dual automatically"
            ],
            "correct": 0
          }
        },
        {
          "heading": "When it does agree",
          "lines": [
            {
              "html": "In some cases, however, the اِسْمُ التَّفْضِيْلِ changes to agree with the item it is describing.",
              "list": false
            },
            {
              "html": "اَلصَّحَابَةُ أَحْسَنُ النَّاسِ — The Ṣaḥābah are the best of people.",
              "list": true,
              "bullet": true
            },
            {
              "html": "اَلصَّحَابَةُ أَحَاسِنُ النَّاسِ — The Ṣaḥābah are the best of people.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In the second version the اِسْمُ التَّفْضِيْلِ, i.e. أَحَاسِنُ, becomes plural to agree with اَلصَّحَابَةُ. The book gives both sentences side by side and translates them identically — the agreement is optional, not a change of meaning.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَلصَّحَابَةُ أَحَاسِنُ النَّاسِ",
                "translation": "The Ṣaḥābah are the best of people.",
                "cells": [
                  "اَلصَّحَابَةُ",
                  "أَحَاسِنُ",
                  "النَّاسِ"
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
                        "start": 1,
                        "end": 1,
                        "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمْ)"
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
              "html": "This is where the conjugation table of p. 552 earns its place. أَحْسَنُ has the broken plural أَحَاسِنُ, exactly as أَكْبَرُ has أَكَابِرُ. The forms exist for occasions like this one, and for the ال construction of the next lesson.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In اَلصَّحَابَةُ أَحْسَنُ النَّاسِ vs اَلصَّحَابَةُ أَحَاسِنُ النَّاسِ, what is the relationship between the two versions؟",
            "kind": "mcq",
            "options": [
              "Agreement here is optional, not a change of meaning — both translate identically, one frozen and one agreeing (plural)",
              "أَحَاسِنُ is grammatically wrong",
              "They mean two different things entirely",
              "أَحْسَنُ can only be used for one person, أَحَاسِنُ for many, with no overlap allowed"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The اِسْمُ التَّفْضِيْلِ without an ال",
        "rows": [
          {
            "label": "Two ways",
            "arabic": "بِلَا ألْ / بِأَلْ",
            "meaning": "the phrase occurs with or without the article"
          },
          {
            "label": "Without ال",
            "arabic": "مُذَكَّرٌ مُفْرَدٌ عَادَةً",
            "meaning": "usually masculine singular whatever it describes"
          },
          {
            "label": "Example",
            "arabic": "اَلصَّلَاةُ أَفْضَلُ عَمَلٍ بَعْدَ الْإِيْمَانِ",
            "meaning": "أَفْضَلُ stays masculine though اَلصَّلَاة is feminine"
          },
          {
            "label": "Sometimes",
            "arabic": "يُطَابِقُ مَا يَصِفُهُ",
            "meaning": "it may agree with what it describes"
          },
          {
            "label": "Example",
            "arabic": "اَلصَّحَابَةُ أَحَاسِنُ النَّاسِ",
            "meaning": "أَحَاسِنُ pluralised to match اَلصَّحَابَة"
          },
          {
            "label": "Also correct",
            "arabic": "اَلصَّحَابَةُ أَحْسَنُ النَّاسِ",
            "meaning": "same meaning, no agreement — both are given"
          }
        ]
      },
      "quiz": [
        {
          "q": "In how many ways can the اِسْمُ التَّفْضِيْلِ occur in a verbal phrase?",
          "options": [
            "three",
            "four",
            "one",
            "two — with an ال and without one"
          ],
          "correct": 3,
          "explanation": "That distinction governs whether it agrees with what it describes."
        },
        {
          "q": "When it has no ال, the اِسْمُ التَّفْضِيْلِ is usually…",
          "options": [
            "feminine and plural",
            "masculine and singular",
            "in agreement with the مُبْتَدَأٌ",
            "in the مَنْصُوْب state"
          ],
          "correct": 1,
          "explanation": "It stays in its base أَفْعَلُ shape."
        },
        {
          "q": "Why is أَفْضَلُ masculine in اَلصَّلَاةُ أَفْضَلُ عَمَلٍ بَعْدَ الْإِيْمَانِ?",
          "options": [
            "Because عَمَل is masculine",
            "Because it is a مُضَافٌ",
            "Because a bare اِسْمُ تَفْضِيْلٍ does not agree with what it describes",
            "It is a printing error"
          ],
          "correct": 2,
          "explanation": "اَلصَّلَاة is feminine, yet أَفْضَلُ does not change."
        },
        {
          "q": "In اَلصَّلَاةُ أَفْضَلُ عَمَلٍ بَعْدَ الْإِيْمَانِ, what is بَعْدَ الْإِيْمَانِ?",
          "options": [
            "the fourth slot — a مَفْعُوْلٌ فِيْهِ",
            "the مَفْعُوْلٌ بِهِ",
            "a نَعْتٌ of عَمَلٍ",
            "the فَاعِلٌ"
          ],
          "correct": 0,
          "explanation": "عَمَلٍ is already the object; this gives the respect in time."
        },
        {
          "q": "What changes between اَلصَّحَابَةُ أَحْسَنُ النَّاسِ and اَلصَّحَابَةُ أَحَاسِنُ النَّاسِ?",
          "options": [
            "The first is comparative, the second superlative",
            "The first is a question",
            "The meaning is reversed",
            "Nothing in meaning — the second simply agrees in number"
          ],
          "correct": 3,
          "explanation": "Both sentences are translated identically."
        },
        {
          "q": "أَحَاسِنُ is the plural of which word?",
          "options": [
            "حَسَنٌ",
            "أَحْسَنُ",
            "حُسْنَى",
            "حَسَنَةٌ"
          ],
          "correct": 1,
          "explanation": "A broken plural of the أَفْعَلُ pattern, like أَكَابِرُ from أَكْبَرُ."
        }
      ],
      "bank": [
        {
          "title": "اَلصَّلَاةُ أَفْضَلُ عَمَلٍ بَعْدَ الْإِيْمَانِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 556)",
          "sentence": "اَلصَّلَاةُ أَفْضَلُ عَمَلٍ بَعْدَ الْإِيْمَانِ",
          "translation": "Ṣalāh is the most virtuous deed after faith.",
          "cells": [
            "اَلصَّلَاةُ",
            "أَفْضَلُ",
            "عَمَلٍ",
            "بَعْدَ الْإِيْمَانِ"
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
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هِيَ)"
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
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اَلصَّحَابَةُ أَحَاسِنُ النَّاسِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 556)",
          "sentence": "اَلصَّحَابَةُ أَحَاسِنُ النَّاسِ",
          "translation": "The Ṣaḥābah are the best of people.",
          "cells": [
            "اَلصَّحَابَةُ",
            "أَحَاسِنُ",
            "النَّاسِ"
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
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمْ)"
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
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اَلصَّحَابَةُ أَحْسَنُ النَّاسِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 556)",
          "sentence": "اَلصَّحَابَةُ أَحْسَنُ النَّاسِ",
          "translation": "The Ṣaḥābah are the best of people.",
          "cells": [
            "اَلصَّحَابَةُ",
            "أَحْسَنُ",
            "النَّاسِ"
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
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمْ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ وَمَفْعُوْلٌ بِهِ"
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
          "title": "اَلْعُلَمَاءُ أَعْرَفُ النَّاسِ بِاللهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 3",
          "sentence": "اَلْعُلَمَاءُ أَعْرَفُ النَّاسِ بِاللهِ",
          "translation": "The scholars are the most knowing of people about Allah.",
          "cells": [
            "اَلْعُلَمَاءُ",
            "أَعْرَفُ",
            "النَّاسِ",
            "بِاللهِ"
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
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمْ)"
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
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "خِيَارُ النَّاسِ خِيَارُهُمْ لِأَهْلِهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 7",
          "sentence": "خِيَارُ النَّاسِ خِيَارُهُمْ لِأَهْلِهِمْ",
          "translation": "The best of people are the best of them to their families.",
          "cells": [
            "خِيَارُ",
            "النَّاسِ",
            "خِيَارُهُمْ",
            "لِأَهْلِهِمْ"
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
                  "end": 3,
                  "role": "خَبَرٌ"
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
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ وَمُضَافٌ إِلَيْهِ (هُمْ)"
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
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِنَّ الْقُرْآنَ أَعْظَمُ كِتَابٍ أَنْزَلَهُ اللهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 8",
          "sentence": "إِنَّ الْقُرْآنَ أَعْظَمُ كِتَابٍ أَنْزَلَهُ اللهُ",
          "translation": "Indeed the Qur'ān is the greatest book Allah has sent down.",
          "cells": [
            "إِنَّ",
            "الْقُرْآنَ",
            "أَعْظَمُ",
            "كِتَابٍ",
            "أَنْزَلَهُ اللهُ"
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
                  "role": "مُضَافٌ وَاسْمُ التَّفْضِيْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ وَمَفْعُوْلٌ بِهِ"
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
            "فَاعِلٌ",
            "صِلَةٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اَلْمَسْجِدُ الْحَرَامُ أَكْبَرُ مَسْجِدٍ فِي الدُّنْيَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 11",
          "sentence": "اَلْمَسْجِدُ الْحَرَامُ أَكْبَرُ مَسْجِدٍ فِي الدُّنْيَا",
          "translation": "Al-Masjid al-Ḥarām is the biggest mosque in the world.",
          "cells": [
            "اَلْمَسْجِدُ",
            "الْحَرَامُ",
            "أَكْبَرُ",
            "مَسْجِدٍ",
            "فِي الدُّنْيَا"
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
                  "end": 4,
                  "role": "خَبَرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ وَمَفْعُوْلٌ بِهِ"
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
            "فَاعِلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "هٰذِهِ الْأَرْضُ أَيْبَسُ مِنْ تِلْكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 5",
          "sentence": "هٰذِهِ الْأَرْضُ أَيْبَسُ مِنْ تِلْكَ",
          "translation": "This land is drier than that one.",
          "cells": [
            "هٰذِهِ",
            "الْأَرْضُ",
            "أَيْبَسُ",
            "مِنْ تِلْكَ"
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
                  "role": "بَدَلٌ"
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
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هِيَ)"
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
            "مُضَافٌ إِلَيْهِ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَعْبَدُ النَّاسِ للهِ أَبْعَدُهُمْ مِنَ الذُّنُوْبِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 9",
          "sentence": "أَعْبَدُ النَّاسِ للهِ أَبْعَدُهُمْ مِنَ الذُّنُوْبِ",
          "translation": "The most devoted of people to Allah are the furthest of them from sins.",
          "cells": [
            "أَعْبَدُ النَّاسِ للهِ",
            "أَبْعَدُهُمْ",
            "مِنَ الذُّنُوْبِ"
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
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمْ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مُضَافٌ إِلَيْهِ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَيُّ كِتَابٍ أَصْدَقُ مِنَ الْقُرْآنِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 3, Supplement), item 6",
          "sentence": "أَيُّ كِتَابٍ أَصْدَقُ مِنَ الْقُرْآنِ",
          "translation": "Which book is more truthful than the Qur'ān?",
          "cells": [
            "أَيُّ",
            "كِتَابٍ",
            "أَصْدَقُ",
            "مِنَ الْقُرْآنِ"
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
                  "end": 3,
                  "role": "خَبَرٌ"
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
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُوَ)"
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
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 3",
          "kind": "mcq",
          "prompt": "In اَلْعُلَمَاءُ أَعْرَفُ النَّاسِ بِاللهِ, why does أَعْرَفُ not become plural?",
          "options": [
            "Because اَلنَّاسِ is singular in form",
            "Because a bare اِسْمُ تَفْضِيْلٍ usually stays masculine singular",
            "Because بِاللهِ follows it",
            "Because it is the خَبَرٌ"
          ],
          "correct": 1,
          "explanation": "Agreement would also be permissible, but the base form is the norm."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 11",
          "kind": "mcq",
          "prompt": "In اَلْمَسْجِدُ الْحَرَامُ أَكْبَرُ مَسْجِدٍ فِي الدُّنْيَا, how is أَكْبَرُ to be translated?",
          "options": [
            "bigger",
            "biggest",
            "big",
            "very big"
          ],
          "correct": 1,
          "explanation": "There is no مِنْ, so the إِضَافَة gives a superlative."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 8",
          "kind": "mcq",
          "prompt": "In إِنَّ الْقُرْآنَ أَعْظَمُ كِتَابٍ أَنْزَلَهُ اللهُ, why is كِتَابٍ نَكِرَة?",
          "options": [
            "Because it is a مُضَافٌ إِلَيْهِ of a word that is itself indefinite in meaning",
            "Because it is a تَمْيِيْزٌ",
            "Because it follows إِنَّ",
            "Because the sentence is a question"
          ],
          "correct": 0,
          "explanation": "'the greatest of a book' — the إِضَافَة to a نَكِرَة is the ordinary superlative shape."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 7",
          "kind": "mcq",
          "prompt": "In خِيَارُ النَّاسِ خِيَارُهُمْ لِأَهْلِهِمْ, what does لِأَهْلِهِمْ tell us?",
          "options": [
            "who the best people are",
            "the respect in which they are best",
            "the time of the statement",
            "the reason for the statement"
          ],
          "correct": 1,
          "explanation": "Best — towards their families. It fills the غَيْرُ صَرِيْحٌ slot."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 9",
          "kind": "mcq",
          "prompt": "In أَعْبَدُ النَّاسِ للهِ أَبْعَدُهُمْ مِنَ الذُّنُوْبِ, what is أَعْبَدُ النَّاسِ للهِ as a whole?",
          "options": [
            "the خَبَرٌ",
            "the مُبْتَدَأٌ",
            "a نَعْتٌ",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "A whole اِسْمُ تَفْضِيْلٍ phrase can fill a single slot, here the مُبْتَدَأٌ."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 12",
          "kind": "mcq",
          "prompt": "Why is أَتْقَاهُمْ without tanwīn?",
          "options": [
            "Because it is مَمْنُوْعٌ مِنَ الصَّرْفِ",
            "Because it ends in an alif maqṣūrah and has a مُضَافٌ إِلَيْهِ attached",
            "Because it is the خَبَرٌ",
            "Because it is definite by ال"
          ],
          "correct": 1,
          "explanation": "أَتْقَى + هُمْ; the pronoun is the مُضَافٌ إِلَيْهِ, so no tanwīn can appear."
        },
        {
          "title": "Book example (Section 3, Supplement, p. 556)",
          "kind": "mcq",
          "prompt": "Which of these pairs shows the optional agreement in number?",
          "options": [
            "أَفْضَلُ عَمَلٍ / أَفْضَلُ الْأَعْمَالِ",
            "أَطْوَلُ مِنْ خَدِيْجَةَ / أَطْوَلُ بَنَاتِ أَحْمَدَ",
            "أَحْسَنُ النَّاسِ / أَحَاسِنُ النَّاسِ",
            "أَكْبَرُ / كُبْرَى"
          ],
          "correct": 2,
          "explanation": "Same sentence, same meaning; only the number of the اِسْمُ تَفْضِيْلٍ differs."
        },
        {
          "title": "Book Exercise 10 (Section 3, Supplement), item 1",
          "kind": "mcq",
          "prompt": "How does اَللَّبَنُ أَبْرَدُ مِنَ الْمَاءِ differ in shape from اَلصَّلَاةُ أَفْضَلُ عَمَلٍ?",
          "options": [
            "The first has مِنْ and keeps its tanwīn; the second is a مُضَافٌ",
            "The first is superlative, the second comparative",
            "The first has an ال on the اِسْمُ تَفْضِيْلٍ",
            "There is no difference of shape"
          ],
          "correct": 0,
          "explanation": "And that difference of shape is what makes one comparative and the other superlative."
        },
        {
          "title": "best, most beautiful",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"best, most beautiful\"?",
          "options": [
            "أَحْسَنُ",
            "خِيَارٌ",
            "دُنْيَا",
            "سُنَّةٌ"
          ],
          "correct": 0
        },
        {
          "title": "best, most beautiful",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَحْسَنُ mean?",
          "options": [
            "best, most beautiful",
            "the best (of)",
            "world, this life",
            "the Sunnah"
          ],
          "correct": 0
        },
        {
          "title": "faith",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"faith\"?",
          "options": [
            "إِيْمَانٌ",
            "أَهْلٌ",
            "صِرَاطٌ",
            "أَعْبَدُ"
          ],
          "correct": 0
        },
        {
          "title": "faith",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does إِيْمَانٌ mean?",
          "options": [
            "faith",
            "family, people",
            "path, way",
            "more devoted in worship"
          ],
          "correct": 0
        },
        {
          "title": "the Companions",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"the Companions\"?",
          "options": [
            "صَحَابَةٌ",
            "دُنْيَا",
            "سُنَّةٌ",
            "أَتْقَى"
          ],
          "correct": 0
        },
        {
          "title": "the Companions",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَحَابَةٌ mean?",
          "options": [
            "the Companions",
            "world, this life",
            "the Sunnah",
            "more God-fearing"
          ],
          "correct": 0
        },
        {
          "title": "the best (of)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"the best (of)\"?",
          "options": [
            "خِيَارٌ",
            "صِرَاطٌ",
            "أَعْبَدُ",
            "أَحْسَنُ"
          ],
          "correct": 0
        },
        {
          "title": "the best (of)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خِيَارٌ mean?",
          "options": [
            "the best (of)",
            "path, way",
            "more devoted in worship",
            "best, most beautiful"
          ],
          "correct": 0
        },
        {
          "title": "family, people",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"family, people\"?",
          "options": [
            "أَهْلٌ",
            "سُنَّةٌ",
            "أَتْقَى",
            "إِيْمَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "family, people",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَهْلٌ mean?",
          "options": [
            "family, people",
            "the Sunnah",
            "more God-fearing",
            "faith"
          ],
          "correct": 0
        },
        {
          "title": "world, this life",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"world, this life\"?",
          "options": [
            "دُنْيَا",
            "أَعْبَدُ",
            "أَحْسَنُ",
            "صَحَابَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "world, this life",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دُنْيَا mean?",
          "options": [
            "world, this life",
            "more devoted in worship",
            "best, most beautiful",
            "the Companions"
          ],
          "correct": 0
        },
        {
          "title": "path, way",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"path, way\"?",
          "options": [
            "صِرَاطٌ",
            "أَتْقَى",
            "إِيْمَانٌ",
            "خِيَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "path, way",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صِرَاطٌ mean?",
          "options": [
            "path, way",
            "more God-fearing",
            "faith",
            "the best (of)"
          ],
          "correct": 0
        },
        {
          "title": "the Sunnah",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"the Sunnah\"?",
          "options": [
            "سُنَّةٌ",
            "أَحْسَنُ",
            "صَحَابَةٌ",
            "أَهْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "the Sunnah",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سُنَّةٌ mean?",
          "options": [
            "the Sunnah",
            "best, most beautiful",
            "the Companions",
            "family, people"
          ],
          "correct": 0
        },
        {
          "title": "more devoted in worship",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"more devoted in worship\"?",
          "options": [
            "أَعْبَدُ",
            "إِيْمَانٌ",
            "خِيَارٌ",
            "دُنْيَا"
          ],
          "correct": 0
        },
        {
          "title": "more devoted in worship",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَعْبَدُ mean?",
          "options": [
            "more devoted in worship",
            "faith",
            "the best (of)",
            "world, this life"
          ],
          "correct": 0
        },
        {
          "title": "more God-fearing",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"more God-fearing\"?",
          "options": [
            "أَتْقَى",
            "صَحَابَةٌ",
            "أَهْلٌ",
            "صِرَاطٌ"
          ],
          "correct": 0
        },
        {
          "title": "more God-fearing",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَتْقَى mean?",
          "options": [
            "more God-fearing",
            "the Companions",
            "family, people",
            "path, way"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l15",
      "title": "اسم التفضيل بأل",
      "subtitle": "Supplement: Verbal Phrases",
      "concepts": [
        {
          "heading": "The rule",
          "lines": [
            {
              "html": "When the اِسْمُ التَّفْضِيْلِ has an ال, it agrees with its مُبْتَدَأٌ or مَنْعُوْتٌ.",
              "list": false
            },
            {
              "html": "اَلْوَلَدُ الْأَكْبَرُ — the eldest boy",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَلْوَلَدُ الْأَكْبَرُ",
                "translation": "the eldest boy",
                "cells": [
                  "اَلْوَلَدُ",
                  "الْأَكْبَرُ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "مَنْعُوْتٌ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "نَعْتٌ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُوَ)"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "This is the exact opposite of the behaviour met in the previous lesson. Without an ال the word stays frozen as أَفْضَلُ, أَكْبَرُ, أَحْسَنُ whatever it describes; with an ال it behaves like any ordinary نَعْتٌ or خَبَرٌ and copies the gender and number of what it refers to.",
              "list": false
            },
            {
              "table": {
                "title": "The two behaviours side by side",
                "headers": [
                  "Shape",
                  "Agreement",
                  "Example",
                  "English"
                ],
                "rows": [
                  [
                    "without ال",
                    "none — masculine singular",
                    "اَلصَّلَاةُ أَفْضَلُ عَمَلٍ",
                    "the most virtuous deed"
                  ],
                  [
                    "with ال",
                    "full agreement",
                    "اَلْبِنْتُ الْكُبْرَى",
                    "the eldest girl"
                  ],
                  [
                    "with ال",
                    "full agreement",
                    "اَلْمُجْتَهِدَانِ هُمَا الْأَنْجَحَانِ",
                    "the two hardworking are the two most successful"
                  ]
                ]
              }
            },
            {
              "html": "Here at last the conjugation table of p. 552 is fully used. كُبْرَى for the feminine singular, اَلْأَنْجَحَانِ for the dual, اَلْأَقَلُّوْنَ and اَلْأَضَلُّوْنَ for the masculine plural — the ال construction of Exercise 11 runs through nearly the whole paradigm.",
              "list": false
            },
            {
              "html": "Notice also that with an ال the word can no longer be a مُضَافٌ, so the مَفْعُوْلٌ بِهِ slot is normally left empty. The comparison is understood rather than stated: اَلنَّارُ الْكُبْرَى is 'the greater Fire' without naming what it is greater than.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How does the ال-headed اِسْمُ التَّفْضِيْلِ (اَلْوَلَدُ الْأَكْبَرُ) behave differently from the bare form studied in the previous lesson؟",
            "kind": "mcq",
            "options": [
              "It agrees fully with its مُبْتَدَأٌ or مَنْعُوْتٌ, the exact opposite of the frozen masculine-singular behaviour without ال",
              "It also stays frozen, just like the bare form",
              "It can no longer take a تَمْيِيْزٌ",
              "It becomes مَبْنِيٌّ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Looking back over the Supplement",
          "lines": [
            {
              "html": "This closes the Supplement on Verbal Phrases. Five phrases have been covered, all built on the same idea: a derived noun that keeps the governing power of the verb it came from.",
              "list": false
            },
            {
              "table": {
                "title": "The five verbal phrases",
                "headers": [
                  "Phrase",
                  "Essential slots",
                  "Typical example"
                ],
                "rows": [
                  [
                    "مَصْدَرٌ",
                    "مَصْدَرٌ + فَاعِلٌ",
                    "قِرَاءَةُ الطَّالِبِ الْكِتَابَ"
                  ],
                  [
                    "اِسْمُ الْفَاعِلِ",
                    "اِسْمُ فَاعِلٍ + فَاعِلٌ",
                    "اَللهُ غَافِرٌ ذَنْبَهُ"
                  ],
                  [
                    "صِفَةٌ مُشَبَّهَةٌ",
                    "صِفَةٌ مُشَبَّهَةٌ + فَاعِلٌ",
                    "اَللهُ سَرِيْعُ الْحِسَابِ"
                  ],
                  [
                    "اِسْمُ الْمَفْعُوْلِ",
                    "اِسْمُ مَفْعُوْلٍ + نَائِبُ الْفَاعِلِ",
                    "اَلتَّائِبُ مَقْبُوْلَةٌ تَوْبَتُهُ"
                  ],
                  [
                    "اِسْمُ التَّفْضِيْلِ",
                    "اِسْمُ تَفْضِيْلٍ + فَاعِلٌ (مُسْتَتِرٌ)",
                    "اَلصَّلَاةُ أَفْضَلُ عَمَلٍ"
                  ]
                ]
              }
            },
            {
              "html": "The practical value of the Supplement is that it lets you parse a nominal sentence with no verb in it at all and still see verb-like structure — a doer, sometimes an object, sometimes adverbial material. Once اَللهُ سَرِيْعُ الْحِسَابِ is read as 'reckoning is swift' rather than as a possessive, a great deal of Qur'ānic phrasing opens up.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What common thread runs through all five verbal phrases studied in this Supplement (مَصْدَرٌ, اِسْمُ الْفَاعِلِ, صِفَةٌ مُشَبَّهَةٌ, اِسْمُ الْمَفْعُوْلِ, اِسْمُ التَّفْضِيْلِ)؟",
            "kind": "mcq",
            "options": [
              "Each is a derived noun that keeps the governing power of the verb it came from, letting a verbless nominal sentence still show verb-like structure",
              "Each one requires an explicit verb somewhere in the sentence",
              "Each one can only ever be a خَبَرٌ",
              "None of them can take a فَاعِلٌ or نَائِبُ الْفَاعِلِ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The اِسْمُ التَّفْضِيْلِ with an ال",
        "rows": [
          {
            "label": "Rule",
            "arabic": "يُطَابِقُ الْمُبْتَدَأَ أَوِ الْمَنْعُوْتَ",
            "meaning": "with an ال it agrees fully"
          },
          {
            "label": "Example",
            "arabic": "اَلْوَلَدُ الْأَكْبَرُ",
            "meaning": "the eldest boy"
          },
          {
            "label": "Feminine",
            "arabic": "اَلنَّارُ الْكُبْرَى",
            "meaning": "the greater Fire"
          },
          {
            "label": "Dual",
            "arabic": "اَلْمُجْتَهِدَانِ هُمَا الْأَنْجَحَانِ",
            "meaning": "the two most successful"
          },
          {
            "label": "Plural",
            "arabic": "اَلْمُتَّقُوْنَ هُمُ الْأَقَلُّوْنَ",
            "meaning": "the fewest"
          },
          {
            "label": "Contrast",
            "arabic": "أَفْضَلُ عَمَلٍ",
            "meaning": "no ال, so no agreement — masculine singular"
          }
        ]
      },
      "quiz": [
        {
          "q": "When the اِسْمُ التَّفْضِيْلِ has an ال, what does it do?",
          "options": [
            "agrees with its مُبْتَدَأٌ or مَنْعُوْتٌ",
            "stays masculine and singular",
            "must take a مِنْ",
            "becomes a مُضَافٌ"
          ],
          "correct": 0,
          "explanation": "The ال switches the ordinary agreement back on."
        },
        {
          "q": "What is اَلْأَكْبَرُ in اَلْوَلَدُ الْأَكْبَرُ?",
          "options": [
            "the خَبَرٌ",
            "a بَدَلٌ",
            "a نَعْتٌ of اَلْوَلَدُ",
            "a حَالٌ"
          ],
          "correct": 2,
          "explanation": "Both words are definite and agree in every way, so it is a نَعْتٌ."
        },
        {
          "q": "Why is اَلْكُبْرَى feminine in نَارُ الْآخِرَةِ هِيَ النَّارُ الْكُبْرَى?",
          "options": [
            "Because اَلْآخِرَة is feminine",
            "Because it has an ال and agrees with اَلنَّارُ, which is feminine",
            "Because كُبْرَى has no masculine form",
            "Because هِيَ precedes it"
          ],
          "correct": 1,
          "explanation": "With an ال the word takes the feminine فُعْلَى pattern to match."
        },
        {
          "q": "Which of these could NOT normally follow an اِسْمُ تَفْضِيْلٍ carrying an ال?",
          "options": [
            "a خَبَرٌ",
            "a ضَمِيْرُ الْفَصْلِ before it",
            "a مَنْعُوْتٌ before it",
            "a مُضَافٌ إِلَيْهِ"
          ],
          "correct": 3,
          "explanation": "A word with ال cannot be a مُضَافٌ, so the object slot is left empty."
        },
        {
          "q": "In اَلْمُجْتَهِدَانِ هُمَا الْأَنْجَحَانِ, what is هُمَا?",
          "options": [
            "a ضَمِيْرُ الْفَصْلِ",
            "the مُبْتَدَأٌ",
            "a تَأْكِيْدٌ",
            "the خَبَرٌ"
          ],
          "correct": 0,
          "explanation": "It separates مُبْتَدَأٌ from خَبَرٌ and stresses the identification."
        },
        {
          "q": "How many verbal phrases has the Supplement covered in all?",
          "options": [
            "three",
            "four",
            "five",
            "six"
          ],
          "correct": 2,
          "explanation": "مَصْدَرٌ, اِسْمُ الْفَاعِلِ, صِفَةٌ مُشَبَّهَةٌ, اِسْمُ الْمَفْعُوْلِ and اِسْمُ التَّفْضِيْلِ."
        }
      ],
      "bank": [
        {
          "title": "اَلْوَلَدُ الْأَكْبَرُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 557)",
          "sentence": "اَلْوَلَدُ الْأَكْبَرُ",
          "translation": "the eldest boy",
          "cells": [
            "اَلْوَلَدُ",
            "الْأَكْبَرُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُوَ)"
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
          "title": "اَلْمُتَّقُوْنَ هُمُ الْأَقَلُّوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 3, Supplement), item 1",
          "sentence": "اَلْمُتَّقُوْنَ هُمُ الْأَقَلُّوْنَ",
          "translation": "The God-fearing are the fewest.",
          "cells": [
            "اَلْمُتَّقُوْنَ",
            "هُمُ",
            "الْأَقَلُّوْنَ"
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
                  "role": "ضَمِيْرُ الْفَصْلِ"
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
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمْ)"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "نَعْتٌ",
            "تَأْكِيْدٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "اَلْبِنْتُ الْكُبْرَى فِي الْبَيْتِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 3, Supplement), item 2",
          "sentence": "اَلْبِنْتُ الْكُبْرَى فِي الْبَيْتِ",
          "translation": "The eldest girl is in the house.",
          "cells": [
            "اَلْبِنْتُ",
            "الْكُبْرَى",
            "فِي الْبَيْتِ"
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
                  "start": 0,
                  "end": 0,
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هِيَ)"
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
          "title": "اَلْمُنَافِقُوْنَ هُمُ الْأَضَلُّوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 3, Supplement), item 3",
          "sentence": "اَلْمُنَافِقُوْنَ هُمُ الْأَضَلُّوْنَ",
          "translation": "The hypocrites are the most astray.",
          "cells": [
            "اَلْمُنَافِقُوْنَ",
            "هُمُ",
            "الْأَضَلُّوْنَ"
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
                  "role": "ضَمِيْرُ الْفَصْلِ"
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
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمْ)"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "نَعْتٌ",
            "تَأْكِيْدٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "اَلْمُجْتَهِدَانِ هُمَا الْأَنْجَحَانِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 3, Supplement), item 4",
          "sentence": "اَلْمُجْتَهِدَانِ هُمَا الْأَنْجَحَانِ",
          "translation": "The two hardworking ones are the two most successful.",
          "cells": [
            "اَلْمُجْتَهِدَانِ",
            "هُمَا",
            "الْأَنْجَحَانِ"
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
                  "role": "ضَمِيْرُ الْفَصْلِ"
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
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُمَا)"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "نَعْتٌ",
            "تَأْكِيْدٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "اَلْإِسْلَامُ هُوَ الدِّيْنُ الْأَحْسَنُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 3, Supplement), item 5",
          "sentence": "اَلْإِسْلَامُ هُوَ الدِّيْنُ الْأَحْسَنُ",
          "translation": "Islam is the best religion.",
          "cells": [
            "اَلْإِسْلَامُ",
            "هُوَ",
            "الدِّيْنُ",
            "الْأَحْسَنُ"
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
                  "role": "ضَمِيْرُ الْفَصْلِ"
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هُوَ)"
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
          "title": "نَارُ الْآخِرَةِ هِيَ النَّارُ الْكُبْرَى",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 3, Supplement), item 6",
          "sentence": "نَارُ الْآخِرَةِ هِيَ النَّارُ الْكُبْرَى",
          "translation": "The Fire of the Hereafter is the greater Fire.",
          "cells": [
            "نَارُ",
            "الْآخِرَةِ",
            "هِيَ",
            "النَّارُ",
            "الْكُبْرَى"
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
                  "role": "ضَمِيْرُ الْفَصْلِ"
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 4,
                  "end": 4,
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
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هِيَ)"
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
          "title": "اَلْإِشْرَاكُ بِاللهِ هُوَ الذَّنْبُ الْأَكْبَرُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 3, Supplement), item 7",
          "sentence": "اَلْإِشْرَاكُ بِاللهِ هُوَ الذَّنْبُ الْأَكْبَرُ",
          "translation": "Associating partners with Allah is the greatest sin.",
          "cells": [
            "اَلْإِشْرَاكُ",
            "بِاللهِ",
            "هُوَ",
            "الذَّنْبُ",
            "الْأَكْبَرُ"
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
                  "role": "ضَمِيْرُ الْفَصْلِ"
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
                  "start": 0,
                  "end": 0,
                  "role": "مَصْدَرٌ"
                },
                {
                  "start": 1,
                  "end": 1,
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "نَعْتٌ وَاسْمُ التَّفْضِيْلِ"
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
          "title": "اَلصَّلَاةُ أَفْضَلُ عَمَلٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 556) — contrast",
          "sentence": "اَلصَّلَاةُ أَفْضَلُ عَمَلٍ",
          "translation": "Ṣalāh is the most virtuous deed.",
          "cells": [
            "اَلصَّلَاةُ",
            "أَفْضَلُ",
            "عَمَلٍ"
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
                  "role": "مُضَافٌ وَاسْمُ التَّفْضِيْلِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ وَمَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "فَاعِلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "فَاطِمَةُ أَطْوَلُ مِنْ خَدِيْجَةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Section 3, Supplement, p. 554) — contrast",
          "sentence": "فَاطِمَةُ أَطْوَلُ مِنْ خَدِيْجَةَ",
          "translation": "Fāṭimah is taller than Khadījah.",
          "cells": [
            "فَاطِمَةُ",
            "أَطْوَلُ",
            "مِنْ خَدِيْجَةَ"
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
                  "role": "اِسْمُ التَّفْضِيْلِ وَفَاعِلٌ (هِيَ)"
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
            "مُضَافٌ إِلَيْهِ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 11 (Section 3, Supplement), item 1",
          "kind": "mcq",
          "prompt": "In اَلْمُتَّقُوْنَ هُمُ الْأَقَلُّوْنَ, why is اَلْأَقَلُّوْنَ plural?",
          "options": [
            "Because أَقَلُّ has no singular",
            "Because it carries an ال and so agrees with اَلْمُتَّقُوْنَ",
            "Because هُمُ is plural",
            "Because the sentence is general"
          ],
          "correct": 1,
          "explanation": "Without the ال it would have stayed أَقَلُّ."
        },
        {
          "title": "Book Exercise 11 (Section 3, Supplement), item 2",
          "kind": "mcq",
          "prompt": "In اَلْبِنْتُ الْكُبْرَى فِي الْبَيْتِ, what is the خَبَرٌ?",
          "options": [
            "اَلْكُبْرَى",
            "اَلْبِنْتُ",
            "فِي الْبَيْتِ",
            "there is none"
          ],
          "correct": 2,
          "explanation": "اَلْكُبْرَى is a نَعْتٌ inside the مُبْتَدَأٌ; the جَارٌّ وَمَجْرُوْرٌ is the خَبَرٌ."
        },
        {
          "title": "Book Exercise 11 (Section 3, Supplement), item 4",
          "kind": "mcq",
          "prompt": "What form is اَلْأَنْجَحَانِ?",
          "options": [
            "masculine plural",
            "feminine singular",
            "masculine dual",
            "feminine dual"
          ],
          "correct": 2,
          "explanation": "أَفْعَلُ + ـَانِ, agreeing with اَلْمُجْتَهِدَانِ."
        },
        {
          "title": "Book Exercise 11 (Section 3, Supplement), item 5",
          "kind": "mcq",
          "prompt": "In اَلْإِسْلَامُ هُوَ الدِّيْنُ الْأَحْسَنُ, what does اَلْأَحْسَنُ describe?",
          "options": [
            "اَلْإِسْلَامُ",
            "هُوَ",
            "اَلدِّيْنُ",
            "nothing — it is the خَبَرٌ on its own"
          ],
          "correct": 2,
          "explanation": "اَلدِّيْنُ الْأَحْسَنُ is the خَبَرٌ, with اَلْأَحْسَنُ as its نَعْتٌ."
        },
        {
          "title": "Book Exercise 11 (Section 3, Supplement), item 6",
          "kind": "mcq",
          "prompt": "What comparison is left unstated in نَارُ الْآخِرَةِ هِيَ النَّارُ الْكُبْرَى?",
          "options": [
            "what the Fire is greater than",
            "who the Fire is for",
            "when the Fire will be",
            "nothing is left unstated"
          ],
          "correct": 0,
          "explanation": "With an ال there is no مَفْعُوْلٌ بِهِ slot, so the thing compared against is understood."
        },
        {
          "title": "Book Exercise 11 (Section 3, Supplement), item 7",
          "kind": "mcq",
          "prompt": "In اَلْإِشْرَاكُ بِاللهِ هُوَ الذَّنْبُ الْأَكْبَرُ, what is بِاللهِ attached to?",
          "options": [
            "اَلذَّنْبُ",
            "اَلْأَكْبَرُ",
            "هُوَ",
            "اَلْإِشْرَاكُ"
          ],
          "correct": 3,
          "explanation": "أَشْرَكَ takes بِ, and the مَصْدَر keeps the same governing."
        },
        {
          "title": "Book Exercise 11 (Section 3, Supplement), item 3",
          "kind": "mcq",
          "prompt": "Compare اَلْمُنَافِقُوْنَ هُمُ الْأَضَلُّوْنَ with اَلْجَاهِلُوْنَ أَضَلُّ النَّاسِ. What differs?",
          "options": [
            "One is comparative, the other superlative",
            "One has an ال and agrees; the other is a مُضَافٌ and does not",
            "One is a question",
            "Nothing — they are the same construction"
          ],
          "correct": 1,
          "explanation": "The two shapes of this lesson and the last, set against each other."
        },
        {
          "title": "Book example (Section 3, Supplement, p. 557)",
          "kind": "mcq",
          "prompt": "Which slot of the verbal phrase is still filled in اَلْوَلَدُ الْأَكْبَرُ?",
          "options": [
            "the مَفْعُوْلٌ بِهِ",
            "the مَنْصُوْبٌ slot",
            "the فَاعِلٌ — a hidden هُوَ",
            "none of them"
          ],
          "correct": 2,
          "explanation": "The فَاعِلٌ slot is essential and is always filled, even here."
        },
        {
          "title": "God-fearing one",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"God-fearing one\"?",
          "options": [
            "مُتَّقٍ",
            "إِشْرَاكٌ",
            "آخِرَةٌ",
            "وَلَدٌ"
          ],
          "correct": 0
        },
        {
          "title": "God-fearing one",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُتَّقٍ mean?",
          "options": [
            "God-fearing one",
            "associating partners with Allah",
            "the Hereafter",
            "boy, child"
          ],
          "correct": 0
        },
        {
          "title": "God-fearing one (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُتَّقٍ?",
          "options": [
            "مُتَّقُوْنَ",
            "أَدْيَانٌ",
            "أَوْلَادٌ",
            "أَقَلُّوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "fewer, fewest",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"fewer, fewest\"?",
          "options": [
            "أَقَلُّ",
            "دِيْنٌ",
            "نَارٌ",
            "ذَنْبٌ"
          ],
          "correct": 0
        },
        {
          "title": "fewer, fewest",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَقَلُّ mean?",
          "options": [
            "fewer, fewest",
            "religion",
            "fire",
            "sin"
          ],
          "correct": 0
        },
        {
          "title": "fewer, fewest (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَقَلُّ?",
          "options": [
            "أَقَلُّوْنَ",
            "نِيْرَانٌ",
            "ذُنُوْبٌ",
            "أَنْجَحُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "more successful",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"more successful\"?",
          "options": [
            "أَنْجَحُ",
            "آخِرَةٌ",
            "وَلَدٌ",
            "مُتَّقٍ"
          ],
          "correct": 0
        },
        {
          "title": "more successful",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَنْجَحُ mean?",
          "options": [
            "more successful",
            "the Hereafter",
            "boy, child",
            "God-fearing one"
          ],
          "correct": 0
        },
        {
          "title": "more successful (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَنْجَحُ?",
          "options": [
            "أَنْجَحُوْنَ",
            "أَوْلَادٌ",
            "مُتَّقُوْنَ",
            "أَدْيَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "associating partners with Allah",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"associating partners with Allah\"?",
          "options": [
            "إِشْرَاكٌ",
            "نَارٌ",
            "ذَنْبٌ",
            "أَقَلُّ"
          ],
          "correct": 0
        },
        {
          "title": "associating partners with Allah",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does إِشْرَاكٌ mean?",
          "options": [
            "associating partners with Allah",
            "fire",
            "sin",
            "fewer, fewest"
          ],
          "correct": 0
        },
        {
          "title": "religion",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"religion\"?",
          "options": [
            "دِيْنٌ",
            "وَلَدٌ",
            "مُتَّقٍ",
            "أَنْجَحُ"
          ],
          "correct": 0
        },
        {
          "title": "religion",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دِيْنٌ mean?",
          "options": [
            "religion",
            "boy, child",
            "God-fearing one",
            "more successful"
          ],
          "correct": 0
        },
        {
          "title": "religion (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of دِيْنٌ?",
          "options": [
            "أَدْيَانٌ",
            "مُتَّقُوْنَ",
            "أَنْجَحُوْنَ",
            "أَوْلَادٌ"
          ],
          "correct": 0
        },
        {
          "title": "the Hereafter",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"the Hereafter\"?",
          "options": [
            "آخِرَةٌ",
            "ذَنْبٌ",
            "أَقَلُّ",
            "إِشْرَاكٌ"
          ],
          "correct": 0
        },
        {
          "title": "the Hereafter",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آخِرَةٌ mean?",
          "options": [
            "the Hereafter",
            "sin",
            "fewer, fewest",
            "associating partners with Allah"
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
            "مُتَّقٍ",
            "أَنْجَحُ",
            "دِيْنٌ"
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
            "God-fearing one",
            "more successful",
            "religion"
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
            "أَنْجَحُوْنَ",
            "أَوْلَادٌ",
            "مُتَّقُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "boy, child",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"boy, child\"?",
          "options": [
            "وَلَدٌ",
            "أَقَلُّ",
            "إِشْرَاكٌ",
            "آخِرَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "boy, child",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَلَدٌ mean?",
          "options": [
            "boy, child",
            "fewer, fewest",
            "associating partners with Allah",
            "the Hereafter"
          ],
          "correct": 0
        },
        {
          "title": "boy, child (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of وَلَدٌ?",
          "options": [
            "أَوْلَادٌ",
            "أَدْيَانٌ",
            "ذُنُوْبٌ",
            "أَقَلُّوْنَ"
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
            "أَنْجَحُ",
            "دِيْنٌ",
            "نَارٌ"
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
            "more successful",
            "religion",
            "fire"
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
            "نِيْرَانٌ",
            "مُتَّقُوْنَ",
            "أَنْجَحُوْنَ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l16",
      "title": "المراجعة",
      "subtitle": "Key terms and master vocabulary — no new material, just review",
      "concepts": [
        {
          "heading": "Unit 5, Section 3 Summary — اَلِاسْمُ الْمُؤَوَّلُ and the Verbal Phrases",
          "lines": [
            {
              "html": "This is a cumulative review: every key grammar term covered in this Section, plus the full noun and verb vocabulary from every lesson. Nothing here is new — the quiz below draws only on terms already taught, and the practice bank it unlocks is there to keep the vocabulary fresh.",
              "list": false
            }
          ]
        },
        {
          "heading": "The nine places an اِسْمٌ مُؤَوَّلٌ can occupy",
          "lines": [
            {
              "table": {
                "title": "The nine places an اِسْمٌ مُؤَوَّلٌ can occupy",
                "headers": [
                  "Part",
                  "Slot",
                  "Typical particle"
                ],
                "rows": [
                  [
                    "1",
                    "مُبْتَدَأٌ",
                    "أَنْ، أَنَّ، مَا"
                  ],
                  [
                    "2",
                    "خَبَرٌ",
                    "أَنْ، أَنَّ"
                  ],
                  [
                    "3",
                    "فَاعِلٌ",
                    "أَنْ، أَنَّ — يَنْبَغِيْ أَنْ …"
                  ],
                  [
                    "4",
                    "مَفْعُوْلٌ بِهِ",
                    "أَنْ، أَنَّ"
                  ],
                  [
                    "5",
                    "مَفْعُوْلٌ فِيْهِ (time)",
                    "مَا الظَّرْفِيَّةُ، مَا دَامَ، إِلَى أَنْ، حَتَّى"
                  ],
                  [
                    "6",
                    "مَفْعُوْلٌ لَهُ",
                    "كَيْ، لِ، حَتَّى، لِئَلَّا، لِأَنَّ، بِمَا"
                  ],
                  [
                    "7",
                    "مَفْعُوْلٌ مُطْلَقٌ",
                    "كَمَا، مِثْلَ مَا"
                  ],
                  [
                    "8",
                    "مُسْتَثْنًى",
                    "إِلَّا أَنْ"
                  ],
                  [
                    "9",
                    "مُضَافٌ إِلَيْهِ",
                    "قَبْلَ أَنْ، بَعْدَ أَنْ، عِنْدَمَا"
                  ]
                ]
              }
            }
          ]
        },
        {
          "heading": "The five verbal phrases of the Supplement",
          "lines": [
            {
              "table": {
                "title": "The five verbal phrases of the Supplement",
                "headers": [
                  "Phrase",
                  "Essential slots",
                  "Example"
                ],
                "rows": [
                  [
                    "مَصْدَرٌ",
                    "مَصْدَرٌ + فَاعِلٌ",
                    "قِرَاءَةُ الطَّالِبِ الْكِتَابَ"
                  ],
                  [
                    "اِسْمُ الْفَاعِلِ",
                    "اِسْمُ فَاعِلٍ + فَاعِلٌ",
                    "اَللهُ غَافِرٌ ذَنْبَهُ"
                  ],
                  [
                    "صِفَةٌ مُشَبَّهَةٌ بِاسْمِ الْفَاعِلِ",
                    "صِفَةٌ مُشَبَّهَةٌ + فَاعِلٌ",
                    "اَللهُ سَرِيْعُ الْحِسَابِ"
                  ],
                  [
                    "اِسْمُ الْمَفْعُوْلِ",
                    "اِسْمُ مَفْعُوْلٍ + نَائِبُ الْفَاعِلِ",
                    "اَلتَّائِبُ مَقْبُوْلَةٌ تَوْبَتُهُ"
                  ],
                  [
                    "اِسْمُ التَّفْضِيْلِ",
                    "اِسْمُ تَفْضِيْلٍ + فَاعِلٌ مُسْتَتِرٌ",
                    "اَلصَّلَاةُ أَفْضَلُ عَمَلٍ"
                  ]
                ]
              }
            }
          ]
        },
        {
          "heading": "The اِسْمُ التَّفْضِيْلِ — comparative or superlative",
          "lines": [
            {
              "table": {
                "title": "The اِسْمُ التَّفْضِيْلِ — comparative or superlative",
                "headers": [
                  "Shape",
                  "Meaning",
                  "Example",
                  "English"
                ],
                "rows": [
                  [
                    "with مِنْ",
                    "comparative",
                    "أَطْوَلُ مِنْ خَدِيْجَةَ",
                    "taller than Khadījah"
                  ],
                  [
                    "in an إِضَافَة",
                    "superlative",
                    "أَفْضَلُ عَمَلٍ",
                    "the most virtuous deed"
                  ],
                  [
                    "with an ال",
                    "superlative, and it agrees",
                    "اَلْوَلَدُ الْأَكْبَرُ",
                    "the eldest boy"
                  ]
                ]
              }
            }
          ]
        },
        {
          "heading": "Conjugation of the اِسْمُ التَّفْضِيْلِ",
          "lines": [
            {
              "table": {
                "title": "Conjugation of the اِسْمُ التَّفْضِيْلِ",
                "headers": [
                  "Gender",
                  "مُفْرَدٌ",
                  "مُثَنَّى",
                  "جَمْعٌ"
                ],
                "rows": [
                  [
                    "اَلْمُذَكَّرُ",
                    "أَكْبَرُ",
                    "أَكْبَرَانِ",
                    "أَكْبَرُوْنَ، أَكَابِرُ"
                  ],
                  [
                    "اَلْمُؤَنَّثُ",
                    "كُبْرَى",
                    "كُبْرَيَانِ",
                    "كُبْرَيَاتٌ، كُبَرُ"
                  ]
                ]
              }
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "What does أَنَّ mean?",
          "options": [
            "مَوْصُوْلٌ (indicative)",
            "مَوْصُوْلٌ (subjunctive)",
            "مَوْصُوْلٌ (time)",
            "أَنْ before quotation"
          ],
          "correct": 0
        },
        {
          "q": "What does مَا mean?",
          "options": [
            "مَوْصُوْلٌ (indicative)",
            "مَوْصُوْلٌ (time)",
            "أَنْ before quotation",
            "مَوْصُوْلٌ (subjunctive)"
          ],
          "correct": 0
        },
        {
          "q": "What does أَنْ mean?",
          "options": [
            "مَوْصُوْلٌ (subjunctive)",
            "مَوْصُوْلٌ (time)",
            "مَوْصُوْلٌ (indicative)",
            "أَنْ before quotation"
          ],
          "correct": 0
        },
        {
          "q": "What does كَيْ mean?",
          "options": [
            "مَوْصُوْلٌ (subjunctive)",
            "أَنْ before quotation",
            "مَوْصُوْلٌ (indicative)",
            "مَوْصُوْلٌ (time)"
          ],
          "correct": 0
        },
        {
          "q": "What does مَا الظَّرْفِيَّةُ mean?",
          "options": [
            "مَوْصُوْلٌ (time)",
            "مَوْصُوْلٌ (indicative)",
            "مَوْصُوْلٌ (subjunctive)",
            "أَنْ before quotation"
          ],
          "correct": 0
        },
        {
          "q": "What does مَا دَامَ mean?",
          "options": [
            "مَوْصُوْلٌ (time)",
            "مَوْصُوْلٌ (indicative)",
            "مَوْصُوْلٌ (subjunctive)",
            "أَنْ before quotation"
          ],
          "correct": 0
        },
        {
          "q": "What does أَنْ التَّفْسِيْرِيَّةُ mean?",
          "options": [
            "أَنْ before quotation",
            "مَوْصُوْلٌ (subjunctive)",
            "مَوْصُوْلٌ (time)",
            "مَوْصُوْلٌ (indicative)"
          ],
          "correct": 0
        }
      ],
      "bank": [
        {
          "title": "manner, etiquette",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"manner, etiquette\"?",
          "options": [
            "أَدَبٌ",
            "شَفَةٌ",
            "عِقَابٌ",
            "عَلَامَةٌ"
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
            "lip",
            "punishment",
            "sign"
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
            "شِفَاهٌ",
            "عَلَامَاتٌ",
            "أَلْسِنَةٌ"
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
            "عَاشُوْرَاءُ",
            "عَقْلٌ",
            "كَبِيْرَةٌ"
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
            "Ashura (10th Muharram)",
            "intellect",
            "major sin"
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
            "عُقُوْلٌ",
            "كَبَائِرُ",
            "لُغَاتٌ"
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
            "عِقَابٌ",
            "عَلَامَةٌ",
            "لِسَانٌ"
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
            "punishment",
            "sign",
            "tongue"
          ],
          "correct": 0
        },
        {
          "title": "swift (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سَرِيْعٌ?",
          "options": [
            "سِرَاعٌ، سُرْعَانٌ",
            "عَلَامَاتٌ",
            "أَلْسِنَةٌ",
            "مَسَائِلُ"
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
            "عَقْلٌ",
            "كَبِيْرَةٌ",
            "لُغَةٌ"
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
            "intellect",
            "major sin",
            "language"
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
            "كَبَائِرُ",
            "لُغَاتٌ",
            "مَعَاصٍ"
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
            "عَلَامَةٌ",
            "لِسَانٌ",
            "لَهْوٌ"
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
            "sign",
            "tongue",
            "futile activity"
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
            "كَبِيْرَةٌ",
            "لُغَةٌ",
            "مَسْأَلَةٌ"
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
            "major sin",
            "language",
            "ruling"
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
            "لَهْوٌ",
            "مَعْصِيَةٌ"
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
            "futile activity",
            "disobedience"
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
            "مَسَائِلُ",
            "مَنَاسِكُ",
            "أَرْوَاحٌ"
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
            "مَسْأَلَةٌ",
            "مَعْلُوْمٌ"
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
            "ruling",
            "known"
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
            "مَعَاصٍ",
            "آدَابٌ",
            "سِرَاعٌ، سُرْعَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "major sin",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"major sin\"?",
          "options": [
            "كَبِيْرَةٌ",
            "لَهْوٌ",
            "مَعْصِيَةٌ",
            "مَنْسَكٌ"
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
            "futile activity",
            "disobedience",
            "ritual"
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
            "مَنَاسِكُ",
            "أَرْوَاحٌ",
            "شِفَاهٌ"
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
            "مَسْأَلَةٌ",
            "مَعْلُوْمٌ",
            "أَبَى يَأْبَى"
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
            "ruling",
            "known",
            "to refuse"
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
            "آدَابٌ",
            "سِرَاعٌ، سُرْعَانٌ",
            "عُقُوْلٌ"
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
            "مَعْصِيَةٌ",
            "مَنْسَكٌ",
            "أَدَّى يُؤَدِّيْ"
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
            "disobedience",
            "ritual",
            "to fulfil, complete"
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
            "أَرْوَاحٌ",
            "شِفَاهٌ",
            "عَلَامَاتٌ"
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
            "مَعْلُوْمٌ",
            "أَبَى يَأْبَى",
            "أَذْنَبَ يُذْنِبُ"
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
            "known",
            "to refuse",
            "to sin"
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
            "مَنْسَكٌ",
            "أَدَّى يُؤَدِّيْ",
            "أَرَادَ يُرِيْدُ"
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
            "ritual",
            "to fulfil, complete",
            "to intend"
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
            "شِفَاهٌ",
            "عَلَامَاتٌ",
            "أَلْسِنَةٌ"
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
            "أَبَى يَأْبَى",
            "أَذْنَبَ يُذْنِبُ",
            "اِسْتَحْيَى يَسْتَحْيِيْ"
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
            "to refuse",
            "to sin",
            "to be ashamed"
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
            "عُقُوْلٌ",
            "كَبَائِرُ",
            "لُغَاتٌ"
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
            "أَدَّى يُؤَدِّيْ",
            "أَرَادَ يُرِيْدُ",
            "اِسْتَشَارَ يَسْتَشِيْرُ"
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
            "to fulfil, complete",
            "to intend",
            "to seek advice or counsel"
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
            "أَذْنَبَ يُذْنِبُ",
            "اِسْتَحْيَى يَسْتَحْيِيْ",
            "اِسْتَطَاعَ يَسْتَطِيْعُ"
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
            "to sin",
            "to be ashamed",
            "to be able to"
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
            "كَبَائِرُ",
            "لُغَاتٌ",
            "مَعَاصٍ"
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
            "أَرَادَ يُرِيْدُ",
            "اِسْتَشَارَ يَسْتَشِيْرُ",
            "أَشْهَدَ يُشْهِدُ"
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
            "to intend",
            "to seek advice or counsel",
            "to make witness"
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
            "جَزَاءً",
            "دِرَايَةً",
            "تَرْبِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to fulfil, complete",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fulfil, complete\"?",
          "options": [
            "أَدَّى يُؤَدِّيْ",
            "اِسْتَحْيَى يَسْتَحْيِيْ",
            "اِسْتَطَاعَ يَسْتَطِيْعُ",
            "اِعْتَرَفَ يَعْتَرِفُ"
          ],
          "correct": 0
        },
        {
          "title": "to fulfil, complete",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَدَّى يُؤَدِّيْ mean?",
          "options": [
            "to fulfil, complete",
            "to be ashamed",
            "to be able to",
            "to acknowledge"
          ],
          "correct": 0
        },
        {
          "title": "to fulfil, complete (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَدَّى يُؤَدِّيْ?",
          "options": [
            "تَأْدِيَةً، أَدَاءً",
            "حَلَالًا",
            "دَفْعًا",
            "زِيَارَةً"
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
            "اِسْتَشَارَ يَسْتَشِيْرُ",
            "أَشْهَدَ يُشْهِدُ",
            "اِعْتَقَدَ يَعْتَقِدُ"
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
            "to seek advice or counsel",
            "to make witness",
            "to believe"
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
            "دِرَايَةً",
            "تَرْبِيَةً",
            "سُرُوْرًا، مَسَرَّةً"
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
            "اِسْتَطَاعَ يَسْتَطِيْعُ",
            "اِعْتَرَفَ يَعْتَرِفُ",
            "أَعْجَبَ يُعْجِبُ"
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
            "to be able to",
            "to acknowledge",
            "to please, delight"
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
            "دَفْعًا",
            "زِيَارَةً",
            "سُكُوْنًا"
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
            "أَشْهَدَ يُشْهِدُ",
            "اِعْتَقَدَ يَعْتَقِدُ",
            "أَغْضَبَ يُغْضِبُ"
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
            "to make witness",
            "to believe",
            "to make angry"
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
            "تَرْبِيَةً",
            "سُرُوْرًا، مَسَرَّةً",
            "شَرْحًا"
          ],
          "correct": 0
        },
        {
          "title": "to seek advice or counsel",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to seek advice or counsel\"?",
          "options": [
            "اِسْتَشَارَ يَسْتَشِيْرُ",
            "اِعْتَرَفَ يَعْتَرِفُ",
            "أَعْجَبَ يُعْجِبُ",
            "أَمْكَنَ يُمْكِنُ"
          ],
          "correct": 0
        },
        {
          "title": "to seek advice or counsel",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَشَارَ يَسْتَشِيْرُ mean?",
          "options": [
            "to seek advice or counsel",
            "to acknowledge",
            "to please, delight",
            "to be possible"
          ],
          "correct": 0
        },
        {
          "title": "to seek advice or counsel (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَشَارَ يَسْتَشِيْرُ?",
          "options": [
            "اِسْتِشَارَةً",
            "زِيَارَةً",
            "سُكُوْنًا",
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
            "اِعْتَقَدَ يَعْتَقِدُ",
            "أَغْضَبَ يُغْضِبُ",
            "اِنْبَغَى يَنْبَغِيْ"
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
            "to believe",
            "to make angry",
            "to be suitable, appropriate, necessary"
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
            "سُرُوْرًا، مَسَرَّةً",
            "شَرْحًا",
            "ظُهُوْرًا"
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
            "أَعْجَبَ يُعْجِبُ",
            "أَمْكَنَ يُمْكِنُ",
            "اِنْتَهَى يَنْتَهِيْ"
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
            "to please, delight",
            "to be possible",
            "to finish, complete"
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
            "سُكُوْنًا",
            "شَهَادَةً",
            "عَقْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to acknowledge",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to acknowledge\"?",
          "options": [
            "اِعْتَرَفَ يَعْتَرِفُ",
            "أَغْضَبَ يُغْضِبُ",
            "اِنْبَغَى يَنْبَغِيْ",
            "بَشَّرَ يُبَشِّرُ"
          ],
          "correct": 0
        },
        {
          "title": "to acknowledge",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِعْتَرَفَ يَعْتَرِفُ mean?",
          "options": [
            "to acknowledge",
            "to make angry",
            "to be suitable, appropriate, necessary",
            "to give glad tidings"
          ],
          "correct": 0
        },
        {
          "title": "to acknowledge (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِعْتَرَفَ يَعْتَرِفُ?",
          "options": [
            "اِعْتِرَافًا",
            "شَرْحًا",
            "ظُهُوْرًا",
            "قُدْرَةً"
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
            "أَمْكَنَ يُمْكِنُ",
            "اِنْتَهَى يَنْتَهِيْ",
            "تَعِبَ يَتْعَبُ"
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
            "to be possible",
            "to finish, complete",
            "to be tired"
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
            "شَهَادَةً",
            "عَقْلًا",
            "كَرَاهَةً"
          ],
          "correct": 0
        },
        {
          "title": "to please, delight",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to please, delight\"?",
          "options": [
            "أَعْجَبَ يُعْجِبُ",
            "اِنْبَغَى يَنْبَغِيْ",
            "بَشَّرَ يُبَشِّرُ",
            "تَمَنَّى يَتَمَنَّى"
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
            "to give glad tidings",
            "to desire"
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
            "ظُهُوْرًا",
            "قُدْرَةً",
            "لِقَاءً"
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
            "اِنْتَهَى يَنْتَهِيْ",
            "تَعِبَ يَتْعَبُ",
            "جَرَى يَجْرِيْ"
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
            "to finish, complete",
            "to be tired",
            "to flow"
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
            "عَقْلًا",
            "كَرَاهَةً",
            "مَنْعًا"
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
            "بَشَّرَ يُبَشِّرُ",
            "تَمَنَّى يَتَمَنَّى",
            "جَزَى يَجْزِيْ"
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
            "to give glad tidings",
            "to desire",
            "to recompense"
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
            "قُدْرَةً",
            "لِقَاءً",
            "نَدَامَةً، نَدَمًا"
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
            "تَعِبَ يَتْعَبُ",
            "جَرَى يَجْرِيْ",
            "حَلَّ يَحِلُّ"
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
            "to be tired",
            "to flow",
            "to be permissible"
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
            "كَرَاهَةً",
            "مَنْعًا",
            "نَهْيًا"
          ],
          "correct": 0
        },
        {
          "title": "to finish, complete",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to finish, complete\"?",
          "options": [
            "اِنْتَهَى يَنْتَهِيْ",
            "تَمَنَّى يَتَمَنَّى",
            "جَزَى يَجْزِيْ",
            "دَرَى يَدْرِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to finish, complete",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْتَهَى يَنْتَهِيْ mean?",
          "options": [
            "to finish, complete",
            "to desire",
            "to recompense",
            "to know"
          ],
          "correct": 0
        },
        {
          "title": "to finish, complete (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْتَهَى يَنْتَهِيْ?",
          "options": [
            "اِنْتِهَاءً",
            "لِقَاءً",
            "نَدَامَةً، نَدَمًا",
            "وُجُوْبًا"
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
            "جَرَى يَجْرِيْ",
            "حَلَّ يَحِلُّ",
            "دَفَعَ يَدْفَعُ"
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
            "to flow",
            "to be permissible",
            "to push, repel"
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
            "مَنْعًا",
            "نَهْيًا",
            "إِبَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to be tired",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be tired\"?",
          "options": [
            "تَعِبَ يَتْعَبُ",
            "جَزَى يَجْزِيْ",
            "دَرَى يَدْرِيْ",
            "رَبَّى يُرَبِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "to be tired",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَعِبَ يَتْعَبُ mean?",
          "options": [
            "to be tired",
            "to recompense",
            "to know",
            "to raise, rear, nurture"
          ],
          "correct": 0
        },
        {
          "title": "to be tired (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَعِبَ يَتْعَبُ?",
          "options": [
            "تَعَبًا",
            "نَدَامَةً، نَدَمًا",
            "وُجُوْبًا",
            "تَأْدِيَةً، أَدَاءً"
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
            "حَلَّ يَحِلُّ",
            "دَفَعَ يَدْفَعُ",
            "زَارَ يَزُوْرُ"
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
            "to be permissible",
            "to push, repel",
            "to visit"
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
            "نَهْيًا",
            "إِبَاءً",
            "إِذْنَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to flow",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to flow\"?",
          "options": [
            "جَرَى يَجْرِيْ",
            "دَرَى يَدْرِيْ",
            "رَبَّى يُرَبِّيْ",
            "سَرَّ يَسُرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to flow",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَرَى يَجْرِيْ mean?",
          "options": [
            "to flow",
            "to know",
            "to raise, rear, nurture",
            "to make happy"
          ],
          "correct": 0
        },
        {
          "title": "to flow (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَرَى يَجْرِيْ?",
          "options": [
            "جَرَيَانًا",
            "وُجُوْبًا",
            "تَأْدِيَةً، أَدَاءً",
            "إِرَادَةً"
          ],
          "correct": 0
        },
        {
          "title": "to recompense",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to recompense\"?",
          "options": [
            "جَزَى يَجْزِيْ",
            "دَفَعَ يَدْفَعُ",
            "زَارَ يَزُوْرُ",
            "سَكَنَ يَسْكُنُ"
          ],
          "correct": 0
        },
        {
          "title": "to recompense",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَزَى يَجْزِيْ mean?",
          "options": [
            "to recompense",
            "to push, repel",
            "to visit",
            "to rest, reside"
          ],
          "correct": 0
        },
        {
          "title": "to recompense (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَزَى يَجْزِيْ?",
          "options": [
            "جَزَاءً",
            "إِبَاءً",
            "إِذْنَابًا",
            "اِسْتِحْيَاءً"
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
            "رَبَّى يُرَبِّيْ",
            "سَرَّ يَسُرُّ",
            "شَرَحَ يَشْرَحُ"
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
            "to raise, rear, nurture",
            "to make happy",
            "to explain"
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
            "تَأْدِيَةً، أَدَاءً",
            "إِرَادَةً",
            "اِسْتِشَارَةً"
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
            "زَارَ يَزُوْرُ",
            "سَكَنَ يَسْكُنُ",
            "شَهِدَ يَشْهَدُ"
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
            "to visit",
            "to rest, reside",
            "to testify, witness"
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
            "إِذْنَابًا",
            "اِسْتِحْيَاءً",
            "اِسْتِطَاعَةً"
          ],
          "correct": 0
        },
        {
          "title": "to push, repel",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to push, repel\"?",
          "options": [
            "دَفَعَ يَدْفَعُ",
            "سَرَّ يَسُرُّ",
            "شَرَحَ يَشْرَحُ",
            "ظَهَرَ يَظْهَرُ"
          ],
          "correct": 0
        },
        {
          "title": "to push, repel",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَفَعَ يَدْفَعُ mean?",
          "options": [
            "to push, repel",
            "to make happy",
            "to explain",
            "to become apparent"
          ],
          "correct": 0
        },
        {
          "title": "to push, repel (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of دَفَعَ يَدْفَعُ?",
          "options": [
            "دَفْعًا",
            "إِرَادَةً",
            "اِسْتِشَارَةً",
            "إِشْهَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to raise, rear, nurture",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to raise, rear, nurture\"?",
          "options": [
            "رَبَّى يُرَبِّيْ",
            "سَكَنَ يَسْكُنُ",
            "شَهِدَ يَشْهَدُ",
            "عَقَلَ يَعْقِلُ"
          ],
          "correct": 0
        },
        {
          "title": "to raise, rear, nurture",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَبَّى يُرَبِّيْ mean?",
          "options": [
            "to raise, rear, nurture",
            "to rest, reside",
            "to testify, witness",
            "to understand"
          ],
          "correct": 0
        },
        {
          "title": "to raise, rear, nurture (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَبَّى يُرَبِّيْ?",
          "options": [
            "تَرْبِيَةً",
            "اِسْتِحْيَاءً",
            "اِسْتِطَاعَةً",
            "اِعْتِرَافًا"
          ],
          "correct": 0
        },
        {
          "title": "to visit",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to visit\"?",
          "options": [
            "زَارَ يَزُوْرُ",
            "شَرَحَ يَشْرَحُ",
            "ظَهَرَ يَظْهَرُ",
            "قَدَرَ يَقْدِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to visit",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does زَارَ يَزُوْرُ mean?",
          "options": [
            "to visit",
            "to explain",
            "to become apparent",
            "to be able to"
          ],
          "correct": 0
        },
        {
          "title": "to visit (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of زَارَ يَزُوْرُ?",
          "options": [
            "زِيَارَةً",
            "اِسْتِشَارَةً",
            "إِشْهَادًا",
            "اِعْتِقَادًا"
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
            "شَهِدَ يَشْهَدُ",
            "عَقَلَ يَعْقِلُ",
            "كَرِهَ يَكْرَهُ"
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
            "to testify, witness",
            "to understand",
            "to dislike"
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
            "اِسْتِطَاعَةً",
            "اِعْتِرَافًا",
            "إِعْجَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to rest, reside",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to rest, reside\"?",
          "options": [
            "سَكَنَ يَسْكُنُ",
            "ظَهَرَ يَظْهَرُ",
            "قَدَرَ يَقْدِرُ",
            "لَقِيَ يَلْقَى"
          ],
          "correct": 0
        },
        {
          "title": "to rest, reside",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَكَنَ يَسْكُنُ mean?",
          "options": [
            "to rest, reside",
            "to become apparent",
            "to be able to",
            "to meet"
          ],
          "correct": 0
        },
        {
          "title": "to rest, reside (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَكَنَ يَسْكُنُ?",
          "options": [
            "سُكُوْنًا",
            "إِشْهَادًا",
            "اِعْتِقَادًا",
            "إِغْضَابًا"
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
            "عَقَلَ يَعْقِلُ",
            "كَرِهَ يَكْرَهُ",
            "مَنَعَ يَمْنَعُ"
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
            "to understand",
            "to dislike",
            "to stop, prohibit, forbid"
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
            "اِعْتِرَافًا",
            "إِعْجَابًا",
            "إِمْكَانًا"
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
            "قَدَرَ يَقْدِرُ",
            "لَقِيَ يَلْقَى",
            "نَدِمَ يَنْدَمُ"
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
            "to be able to",
            "to meet",
            "to regret"
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
            "اِعْتِقَادًا",
            "إِغْضَابًا",
            "اِنْبِغَاءً"
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
            "كَرِهَ يَكْرَهُ",
            "مَنَعَ يَمْنَعُ",
            "نَهَى يَنْهَى"
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
            "to dislike",
            "to stop, prohibit, forbid",
            "to prohibit"
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
            "إِعْجَابًا",
            "إِمْكَانًا",
            "اِنْتِهَاءً"
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
            "لَقِيَ يَلْقَى",
            "نَدِمَ يَنْدَمُ",
            "وَجَبَ يَجِبُ"
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
            "to meet",
            "to regret",
            "to be compulsory"
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
            "إِغْضَابًا",
            "اِنْبِغَاءً",
            "تَبْشِيْرًا"
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
            "مَنَعَ يَمْنَعُ",
            "نَهَى يَنْهَى",
            "أَدَبٌ"
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
            "to stop, prohibit, forbid",
            "to prohibit",
            "manner, etiquette"
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
            "إِمْكَانًا",
            "اِنْتِهَاءً",
            "تَعَبًا"
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
            "نَدِمَ يَنْدَمُ",
            "وَجَبَ يَجِبُ",
            "رُوْحٌ"
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
            "to regret",
            "to be compulsory",
            "soul"
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
            "اِنْبِغَاءً",
            "تَبْشِيْرًا",
            "تَمَنِّيًا"
          ],
          "correct": 0
        },
        {
          "title": "to meet",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to meet\"?",
          "options": [
            "لَقِيَ يَلْقَى",
            "نَهَى يَنْهَى",
            "أَدَبٌ",
            "سَرِيْعٌ"
          ],
          "correct": 0
        },
        {
          "title": "to meet",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَقِيَ يَلْقَى mean?",
          "options": [
            "to meet",
            "to prohibit",
            "manner, etiquette",
            "swift"
          ],
          "correct": 0
        },
        {
          "title": "to meet (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of لَقِيَ يَلْقَى?",
          "options": [
            "لِقَاءً",
            "اِنْتِهَاءً",
            "تَعَبًا",
            "جَرَيَانًا"
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
            "وَجَبَ يَجِبُ",
            "رُوْحٌ",
            "شَفَةٌ"
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
            "to be compulsory",
            "soul",
            "lip"
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
            "تَبْشِيْرًا",
            "تَمَنِّيًا",
            "جَزَاءً"
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
            "أَدَبٌ",
            "سَرِيْعٌ",
            "عَاشُوْرَاءُ"
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
            "manner, etiquette",
            "swift",
            "Ashura (10th Muharram)"
          ],
          "correct": 0
        },
        {
          "title": "to regret (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَدِمَ يَنْدَمُ?",
          "options": [
            "نَدَامَةً، نَدَمًا",
            "تَعَبًا",
            "جَرَيَانًا",
            "حَلَالًا"
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
            "رُوْحٌ",
            "شَفَةٌ",
            "عِقَابٌ"
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
            "soul",
            "lip",
            "punishment"
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
            "تَمَنِّيًا",
            "جَزَاءً",
            "دِرَايَةً"
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
            "سَرِيْعٌ",
            "عَاشُوْرَاءُ",
            "عَقْلٌ"
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
            "swift",
            "Ashura (10th Muharram)",
            "intellect"
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
            "جَرَيَانًا",
            "حَلَالًا",
            "دَفْعًا"
          ],
          "correct": 0
        }
      ]
    }
  ]
};

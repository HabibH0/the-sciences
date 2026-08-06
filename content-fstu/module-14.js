// Module 14 — The نَعْتٌ as a جُمْلَةٌ صُغْرَى, and Unit 5 Section 1 Review
// (From the Start, Unit 5, Section 1, Part 7, pp. 459-471)
//
// l1-l7 converted from content-fstu-new/unit5-1-lesson25..31.js, same
// conversion pattern as module-04..13.js (see module-04.js header comment).
// l8 ("المراجعة") is generated from unit5-1-summary.js's keyTerms/nouns/
// verbs/tafseerVerbs -- no new teaching content, no exercise gate, mirroring
// module-05.js's/module-09.js's/module-11.js's end-of-section review lesson.
// Unlike those, this summary source also carries a `structures` table
// (every slot a جُمْلَةٌ صُغْرَى can fill across the whole Section) and a
// `specialAdverbs` table -- both genuinely cumulative-review material (not
// new content), so they're kept as two extra reference-table concepts here
// rather than dropped the way module-08.js dropped unit3-2-summary.js's
// flat `prepositions` list (which was folded into the bank instead, since
// it was already vocab-shaped).

export default {
  "id": "f-sughra-nat",
  "title": "النَّعْتُ",
  "heading": "اَلْوَحْدَةُ الْخَامِسَةُ",
  "subheading": "اَلْقِسْمُ الْأَوَّلُ",
  "blurb": "اَلنَّعْتُ as a جُمْلَة صُغْرَى, the five slots its عَائِد can fill, and a review of Section 1.",
  "lessons": [
    {
      "id": "l1",
      "title": "النعت الجملة",
      "subtitle": "Part 7: The نَعْتٌ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The نَعْتٌ as a Nested Sentence",
          "lines": [
            {
              "html": "The نَعْتٌ can occur as a جُمْلَةٌ صُغْرَى. English does the same thing with a relative clause: 'This is a man who came from the village.' The sentence 'came from the village', together with the relative pronoun 'who', describes the preceding indefinite word 'a man'.",
              "list": false
            },
            {
              "html": "In Arabic there is no equivalent to the relative pronoun 'who' when the مَنْعُوْت is نَكِرَة. The sentence simply follows the noun. What it must have, however, is an عَائِدٌ — a pronoun somewhere inside the sentence that refers back to the مَنْعُوْت and ties the two together.",
              "list": false
            },
            {
              "html": "هٰذَا رَجُلٌ جَاءَ مِنَ الْقَرْيَةِ — This is a man who came from the village.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In this sentence the عَائِدٌ is the ضَمِيْرٌ مُسْتَتِرٌ within the verb جَاءَ, that is, هُوَ. Nothing is written, but the verb carries a hidden 'he', and that 'he' is the man.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "هٰذَا رَجُلٌ جَاءَ مِنَ الْقَرْيَةِ",
                "translation": "This is a man who came from the village.",
                "cells": [
                  "هٰذَا",
                  "رَجُلٌ",
                  "جَاءَ",
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
                        "role": "مَنْعُوْتٌ"
                      },
                      {
                        "start": 2,
                        "end": 4,
                        "role": "نَعْتٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "The مَنْعُوْت must be نَكِرَة for this construction. When the described noun is مَعْرِفَة, Arabic uses a relative pronoun — الَّذِيْ and its family — and the structure is a different one.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "For a نَعْت sentence to describe an indefinite (نَكِرَة) noun in Arabic, what must it contain, given that Arabic has no word for 'who'?",
            "kind": "mcq",
            "options": [
              "An عَائِدٌ — a pronoun somewhere inside it that refers back to the مَنْعُوْت",
              "A حَرْفُ عَطْفٍ linking it to the noun",
              "The relative pronoun الَّذِيْ",
              "A repeated مَنْعُوْت"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Translation Depends on the Slot of the عَائِد",
          "lines": [
            {
              "html": "The translation of the نَعْت sentence differs according to the slot the عَائِدٌ occupies. Consider three phrases that all begin with the same indefinite word رَجُلٌ:",
              "list": false
            },
            {
              "table": {
                "title": "Same Shape, Three Renderings",
                "headers": [
                  "Arabic",
                  "Where the عَائِد sits",
                  "English"
                ],
                "rows": [
                  [
                    "رَجُلٌ سَقَطَ",
                    "As the فَاعِل — the hidden هُوَ in the verb",
                    "a man who fell"
                  ],
                  [
                    "رَجُلٌ رَأَيْتُهُ",
                    "As the مَفْعُوْلٌ بِهِ — the attached هُ",
                    "a man whom I saw"
                  ],
                  [
                    "رَجُلٌ يَدُهُ وَسِخَةٌ",
                    "As a مُضَافٌ إِلَيْهِ — the هُ on يَدُ",
                    "a man whose hand is dirty"
                  ]
                ]
              }
            },
            {
              "html": "Each is a نَكِرَة word followed by a نَعْت sentence, and each is translated slightly differently, because the عَائِدٌ has a different grammatical role in each. Finding the عَائِد, and asking what slot it fills, is therefore the first move when reading one of these.",
              "list": false
            },
            {
              "html": "The book works through the عَائِد occurring in five slots: as a فَاعِلٌ; as a مَفْعُوْلٌ بِهِ; as a مُضَافٌ إِلَيْهِ; as the ظَرْف of a مُضَافٌ إِلَيْهِ or a مَجْرُوْرٌ; and inside a خَبَرٌ مُقَدَّمٌ. This lesson takes the first.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Why do رَجُلٌ سَقَطَ, رَجُلٌ رَأَيْتُهُ and رَجُلٌ يَدُهُ وَسِخَةٌ each translate slightly differently؟",
            "kind": "mcq",
            "options": [
              "Because the عَائِدٌ occupies a different grammatical slot in each nested sentence",
              "Because each مَنْعُوْت is a different word",
              "Because only one of them is actually a نَعْت sentence",
              "Because the verb tense differs in each"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The عَائِد as the فَاعِل",
          "lines": [
            {
              "html": "The عَائِدٌ in the نَعْت sentence can be a فَاعِلٌ. That فَاعِل will either be a person or a thing, and the English rendering follows accordingly.",
              "list": false
            },
            {
              "html": "The book gives a four-step method for translating these phrases. Taking رَجُلٌ سَقَطَ and قَلَمٌ سَقَطَ side by side:",
              "list": false
            },
            {
              "table": {
                "title": "The Four Steps",
                "headers": [
                  "Step",
                  "رَجُلٌ سَقَطَ",
                  "قَلَمٌ سَقَطَ"
                ],
                "rows": [
                  [
                    "1. Translate the نَعْت sentence on its own",
                    "he fell",
                    "it fell"
                  ],
                  [
                    "2. Add 'who' or 'one who' for a person, 'which' or 'that' for a thing",
                    "who he fell",
                    "that / which it fell"
                  ],
                  [
                    "3. Remove the translation of the عَائِد",
                    "who fell",
                    "that / which fell"
                  ],
                  [
                    "4. Add the translation of the مَنْعُوْت",
                    "a man who fell",
                    "a pen that fell / a pen which fell"
                  ]
                ]
              }
            },
            {
              "html": "Step 3 is the one that repays attention. The English relative pronoun already carries the subject, so keeping the Arabic pronoun as well would give the ungrammatical 'a man who he fell'. Arabic needs the عَائِد; English absorbs it into the relative pronoun.",
              "list": false
            },
            {
              "html": "أَصْنَامٌ لَا تَنْفَعُنَا — idols which do not benefit us",
              "list": true,
              "bullet": true
            },
            {
              "html": "مُهَاجِرُوْنَ تَرَكُوْا دِيَارَهُمْ — emigrants who left their homes",
              "list": true,
              "bullet": true
            },
            {
              "html": "The عَائِد need not be hidden. In مُهَاجِرُوْنَ تَرَكُوْا دِيَارَهُمْ it is the وَاوُ الْجَمَاعَةِ written on the verb, and in أَبْنَاءٌ يُطِيْعُوْنَ أُمَّهَاتِهِمْ likewise. Hidden or written, it is still the فَاعِل, and it still refers back to the مَنْعُوْت.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In رَجُلٌ سَقَطَ, where is the عَائِدٌ, and what slot does it fill؟",
            "kind": "mcq",
            "options": [
              "The hidden هُوَ inside سَقَطَ, filling the فَاعِلٌ slot",
              "The word رَجُلٌ itself",
              "There is no عَائِدٌ in this phrase",
              "An attached هُ on the verb, filling the مَفْعُوْلٌ بِهِ slot"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The نَعْت Sentence and the عَائِد",
        "rows": [
          {
            "label": "The construction",
            "arabic": "النَّعْتُ جُمْلَةٌ صُغْرَى",
            "meaning": "A whole sentence can describe the noun before it, as an English relative clause does."
          },
          {
            "label": "The مَنْعُوْت",
            "arabic": "نَكِرَةٌ",
            "meaning": "This construction requires an indefinite مَنْعُوْت; a definite one takes a relative pronoun instead."
          },
          {
            "label": "No relative pronoun",
            "arabic": "لَا مُقَابِلَ لِـ who",
            "meaning": "Arabic supplies nothing corresponding to 'who' — the sentence simply follows the noun."
          },
          {
            "label": "The عَائِد",
            "arabic": "لَا بُدَّ مِنْ عَائِدٍ",
            "meaning": "There must be a pronoun inside the sentence referring back to the مَنْعُوْت. It may be hidden or written."
          },
          {
            "label": "Why it matters",
            "arabic": "رَجُلٌ سَقَطَ / رَجُلٌ رَأَيْتُهُ / رَجُلٌ يَدُهُ وَسِخَةٌ",
            "meaning": "'a man who fell', 'a man whom I saw', 'a man whose hand is dirty' — the slot of the عَائِد decides the English."
          },
          {
            "label": "The عَائِد as فَاعِل",
            "arabic": "قَلَمٌ سَقَطَ",
            "meaning": "Translate the sentence, add 'who' for a person or 'which / that' for a thing, drop the pronoun, then add the مَنْعُوْت: 'a pen which fell'."
          }
        ]
      },
      "quiz": [
        {
          "q": "What must a نَعْت sentence contain in order to attach to its مَنْعُوْت?",
          "options": [
            "A relative pronoun",
            "An عَائِدٌ referring back to the مَنْعُوْت",
            "A مَاضٍ verb",
            "A حَرْفُ عَطْفٍ"
          ],
          "correct": 1,
          "explanation": "Arabic has no word for 'who' here, so the link is carried by a pronoun inside the sentence."
        },
        {
          "q": "What must be true of the مَنْعُوْت of a نَعْتٌ that is itself a whole sentence (e.g. رَجُلٌ سَقَطَ)?",
          "options": [
            "It must be نَكِرَة",
            "It must be مَعْرِفَة",
            "It must be plural",
            "It must be مَنْصُوْب"
          ],
          "correct": 0,
          "explanation": "A definite noun described by a sentence takes الَّذِيْ and its family instead."
        },
        {
          "q": "In هٰذَا رَجُلٌ جَاءَ مِنَ الْقَرْيَةِ, where is the عَائِد?",
          "options": [
            "It is الْقَرْيَةِ",
            "It is هٰذَا",
            "There is none",
            "It is the hidden هُوَ inside جَاءَ"
          ],
          "correct": 3,
          "explanation": "The verb carries a ضَمِيْرٌ مُسْتَتِرٌ, and that hidden 'he' is the man."
        },
        {
          "q": "Why are رَجُلٌ سَقَطَ and رَجُلٌ رَأَيْتُهُ translated differently?",
          "options": [
            "Because one verb is مَاضٍ and the other مُضَارِع",
            "Because the عَائِد fills a different slot in each",
            "Because one is definite",
            "Because the second has no عَائِد"
          ],
          "correct": 1,
          "explanation": "A فَاعِل عَائِد gives 'who fell'; a مَفْعُوْلٌ بِهِ عَائِد gives 'whom I saw'."
        },
        {
          "q": "When رَجُلٌ رَأَيْتُهُ is translated as 'a man whom I saw', what happens to the translation of the عَائِد (هُ)?",
          "options": [
            "The مَنْعُوْت is added",
            "The relative pronoun is added",
            "The translation of the عَائِد is removed",
            "The sentence is made negative"
          ],
          "correct": 2,
          "explanation": "'who he fell' becomes 'who fell' — the English relative pronoun already carries the subject."
        },
        {
          "q": "Which English relative pronoun is used when the عَائِد refers to a thing?",
          "options": [
            "'who' or 'one who'",
            "'which' or 'that'",
            "'whose'",
            "'where'"
          ],
          "correct": 1,
          "explanation": "قَلَمٌ سَقَطَ — 'a pen that fell' or 'a pen which fell'."
        }
      ],
      "bank": [
        {
          "title": "هٰذَا رَجُلٌ جَاءَ مِنَ الْقَرْيَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 459 (Section 1, Part 7)",
          "sentence": "هٰذَا رَجُلٌ جَاءَ مِنَ الْقَرْيَةِ",
          "translation": "This is a man who came from the village.",
          "cells": [
            "هٰذَا",
            "رَجُلٌ",
            "جَاءَ",
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 2,
                  "end": 4,
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
          "title": "رَجُلٌ سَقَطَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 461 (Section 1, Part 7)",
          "sentence": "رَجُلٌ سَقَطَ",
          "translation": "a man who fell",
          "cells": [
            "رَجُلٌ",
            "سَقَطَ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                }
              ]
            }
          ],
          "distractors": [
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "قَلَمٌ سَقَطَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 461 (Section 1, Part 7)",
          "sentence": "قَلَمٌ سَقَطَ",
          "translation": "a pen which fell",
          "cells": [
            "قَلَمٌ",
            "سَقَطَ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                }
              ]
            }
          ],
          "distractors": [
            "خَبَرٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "رَجُلٌ يَدُهُ وَسِخَةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 460 (Section 1, Part 7)",
          "sentence": "رَجُلٌ يَدُهُ وَسِخَةٌ",
          "translation": "a man whose hand is dirty",
          "cells": [
            "رَجُلٌ",
            "يَدُهُ",
            "وَسِخَةٌ"
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
                  "end": 2,
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
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "أَصْنَامٌ لَا تَنْفَعُنَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 7)",
          "sentence": "أَصْنَامٌ لَا تَنْفَعُنَا",
          "translation": "idols which do not benefit us",
          "cells": [
            "أَصْنَامٌ",
            "لَا",
            "تَنْفَعُنَا"
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
                  "end": 2,
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
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (هِيَ) وَمَفْعُوْلٌ بِهِ (نَا)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "سَنَوَاتٌ مَضَتْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 7)",
          "sentence": "سَنَوَاتٌ مَضَتْ",
          "translation": "years which passed",
          "cells": [
            "سَنَوَاتٌ",
            "مَضَتْ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هِيَ)"
                }
              ]
            }
          ],
          "distractors": [
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "طَالِبٌ فَاقَ أَقْرَانَهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 7)",
          "sentence": "طَالِبٌ فَاقَ أَقْرَانَهُ",
          "translation": "a student who surpassed his peers",
          "cells": [
            "طَالِبٌ",
            "فَاقَ",
            "أَقْرَانَهُ"
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
                  "end": 2,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَسَدٌ قُتِلَ فِي الْقَرْيَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 7)",
          "sentence": "أَسَدٌ قُتِلَ فِي الْقَرْيَةِ",
          "translation": "a lion which was killed in the village",
          "cells": [
            "أَسَدٌ",
            "قُتِلَ",
            "فِي",
            "الْقَرْيَةِ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ مَجْهُوْلٌ وَنَائِبُ فَاعِلٍ (هُوَ)"
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
            "فَاعِلٌ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "مَلِكٌ لَا يَرْحَمُ النَّاسَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 7)",
          "sentence": "مَلِكٌ لَا يَرْحَمُ النَّاسَ",
          "translation": "a king who does not show mercy to people",
          "cells": [
            "مَلِكٌ",
            "لَا",
            "يَرْحَمُ",
            "النَّاسَ"
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
                  "end": 3,
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
                  "role": "حَرْفُ نَفْيٍ"
                },
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
            "حَرْفُ نَهْيٍ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "أَبْنَاءٌ يُطِيْعُوْنَ أُمَّهَاتِهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 7)",
          "sentence": "أَبْنَاءٌ يُطِيْعُوْنَ أُمَّهَاتِهِمْ",
          "translation": "sons who obey their mothers",
          "cells": [
            "أَبْنَاءٌ",
            "يُطِيْعُوْنَ",
            "أُمَّهَاتِهِمْ"
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
                  "end": 2,
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "دِيْنٌ يَهْدِيْكَ إِلَى الْجَنَّةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 7)",
          "sentence": "دِيْنٌ يَهْدِيْكَ إِلَى الْجَنَّةِ",
          "translation": "a religion which guides you to Paradise",
          "cells": [
            "دِيْنٌ",
            "يَهْدِيْكَ",
            "إِلَى",
            "الْجَنَّةِ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (كَ)"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "رُمَّانَةٌ سَقَطَتْ مِنَ الشَّجَرَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 7)",
          "sentence": "رُمَّانَةٌ سَقَطَتْ مِنَ الشَّجَرَةِ",
          "translation": "a pomegranate which fell from the tree",
          "cells": [
            "رُمَّانَةٌ",
            "سَقَطَتْ",
            "مِنَ",
            "الشَّجَرَةِ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هِيَ)"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "صَحَابِيٌّ آمَنَ بِاللهِ وَالرَّسُوْلِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 7)",
          "sentence": "صَحَابِيٌّ آمَنَ بِاللهِ وَالرَّسُوْلِ",
          "translation": "a Companion who believed in Allah and the Messenger",
          "cells": [
            "صَحَابِيٌّ",
            "آمَنَ",
            "بِ",
            "اللهِ",
            "وَ",
            "الرَّسُوْلِ"
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
                  "end": 5,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
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
            }
          ],
          "distractors": [
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "مُهَاجِرُوْنَ تَرَكُوْا دِيَارَهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 7)",
          "sentence": "مُهَاجِرُوْنَ تَرَكُوْا دِيَارَهُمْ",
          "translation": "emigrants who left their homes",
          "cells": [
            "مُهَاجِرُوْنَ",
            "تَرَكُوْا",
            "دِيَارَهُمْ"
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
                  "end": 2,
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In أَصْنَامٌ لَا تَنْفَعُنَا, where is the عَائِد?",
          "options": [
            "The attached نَا",
            "The hidden هِيَ inside تَنْفَعُ",
            "لَا",
            "There is none"
          ],
          "correct": 1,
          "explanation": "The نَا is the object — us; the hidden 'she' referring to the idols is the doer and the عَائِد."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "Why does أَصْنَامٌ take a feminine singular verb in لَا تَنْفَعُنَا?",
          "options": [
            "Because أَصْنَام is feminine",
            "Because a non-human plural is treated as feminine singular",
            "Because the verb is مَجْهُوْل",
            "There is no rule behind it — it is simply irregular"
          ],
          "correct": 1,
          "explanation": "This is the ordinary rule for broken plurals of things."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In أَسَدٌ قُتِلَ فِي الْقَرْيَةِ, what is the عَائِد?",
          "options": [
            "The نَائِبُ فَاعِلٍ hidden inside قُتِلَ",
            "الْقَرْيَةِ",
            "The فَاعِل of قُتِلَ",
            "There is none"
          ],
          "correct": 0,
          "explanation": "قُتِلَ is مَجْهُوْل, so the hidden pronoun is the deputy subject — 'a lion which was killed'."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In مَلِكٌ لَا يَرْحَمُ النَّاسَ, what is النَّاسَ?",
          "options": [
            "The عَائِد",
            "The فَاعِل of يَرْحَمُ",
            "The مَفْعُوْلٌ بِهِ inside the نَعْت sentence",
            "A بَدَل of مَلِكٌ"
          ],
          "correct": 2,
          "explanation": "The نَعْت sentence has its own internal structure, complete with an object."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In أَبْنَاءٌ يُطِيْعُوْنَ أُمَّهَاتِهِمْ, which element is the عَائِد?",
          "options": [
            "The attached هِمْ on أُمَّهَات",
            "The وَاوُ الْجَمَاعَةِ on the verb",
            "أُمَّهَاتِهِمْ as a whole",
            "There is none"
          ],
          "correct": 1,
          "explanation": "The وَاو is the فَاعِل and refers back to أَبْنَاءٌ; the هِمْ merely echoes it."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "Translate: طَالِبٌ فَاقَ أَقْرَانَهُ",
          "options": [
            "a student whose peers surpassed him",
            "a student who surpassed his peers",
            "the student surpassed his peers",
            "a student and his peers"
          ],
          "correct": 1,
          "explanation": "The hidden هُوَ is the doer, so the student is the one doing the surpassing."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In شَجَرَةٌ سَقَطَتْ عَلَى الْأَرْضِ, why is 'which' rather than 'who' the right relative pronoun?",
          "options": [
            "Because سَقَطَتْ is feminine",
            "Because the مَنْعُوْت is a thing, not a person",
            "Because the phrase is indefinite",
            "Because عَلَى الْأَرْضِ follows"
          ],
          "correct": 1,
          "explanation": "Step 2 of the method turns on whether the عَائِد refers to a human being or a thing."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "What would go wrong if the عَائِد were also translated in the English?",
          "options": [
            "Nothing — both are needed",
            "The result would be 'a man who he fell', which is ungrammatical",
            "The phrase would become definite",
            "The verb would lose its tense"
          ],
          "correct": 1,
          "explanation": "The English relative pronoun already carries the subject, which is why step 3 removes the pronoun."
        },
        {
          "title": "king",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"king\"?",
          "options": [
            "مَلِكٌ",
            "شَجَرَةٌ",
            "صَحَابِيٌّ",
            "دِيْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "king",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَلِكٌ mean?",
          "options": [
            "king",
            "tree",
            "Companion of the Prophet ﷺ",
            "religion"
          ],
          "correct": 0
        },
        {
          "title": "king (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَلِكٌ?",
          "options": [
            "مُلُوْكٌ",
            "أَشْجَارٌ",
            "صَحَابَةٌ",
            "أَدْيَانٌ"
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
            "دَارٌ",
            "مُهَاجِرٌ",
            "وَسِخٌ"
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
            "home, abode",
            "emigrant",
            "dirty"
          ],
          "correct": 0
        },
        {
          "title": "lion (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَسَدٌ?",
          "options": [
            "أُسُوْدٌ",
            "دِيَارٌ",
            "مُهَاجِرُوْنَ",
            "وَسِخُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "peer, equal",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"peer, equal\"?",
          "options": [
            "قِرْنٌ",
            "صَحَابِيٌّ",
            "دِيْنٌ",
            "فَاقَ يَفُوْقُ"
          ],
          "correct": 0
        },
        {
          "title": "peer, equal",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قِرْنٌ mean?",
          "options": [
            "peer, equal",
            "Companion of the Prophet ﷺ",
            "religion",
            "to surpass"
          ],
          "correct": 0
        },
        {
          "title": "peer, equal (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قِرْنٌ?",
          "options": [
            "أَقْرَانٌ",
            "صَحَابَةٌ",
            "أَدْيَانٌ",
            "مُلُوْكٌ"
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
            "مُهَاجِرٌ",
            "وَسِخٌ",
            "رَحِمَ يَرْحَمُ"
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
            "emigrant",
            "dirty",
            "to show mercy"
          ],
          "correct": 0
        },
        {
          "title": "tree (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَجَرَةٌ?",
          "options": [
            "أَشْجَارٌ",
            "مُهَاجِرُوْنَ",
            "وَسِخُوْنَ",
            "أُسُوْدٌ"
          ],
          "correct": 0
        },
        {
          "title": "home, abode",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"home, abode\"?",
          "options": [
            "دَارٌ",
            "دِيْنٌ",
            "فَاقَ يَفُوْقُ",
            "أَطَاعَ يُطِيْعُ"
          ],
          "correct": 0
        },
        {
          "title": "home, abode",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَارٌ mean?",
          "options": [
            "home, abode",
            "religion",
            "to surpass",
            "to obey"
          ],
          "correct": 0
        },
        {
          "title": "home, abode (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of دَارٌ?",
          "options": [
            "دِيَارٌ",
            "أَدْيَانٌ",
            "مُلُوْكٌ",
            "أَقْرَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "Companion of the Prophet ﷺ",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Companion of the Prophet ﷺ\"?",
          "options": [
            "صَحَابِيٌّ",
            "وَسِخٌ",
            "رَحِمَ يَرْحَمُ",
            "هَدَى يَهْدِيْ"
          ],
          "correct": 0
        },
        {
          "title": "Companion of the Prophet ﷺ",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَحَابِيٌّ mean?",
          "options": [
            "Companion of the Prophet ﷺ",
            "dirty",
            "to show mercy",
            "to guide"
          ],
          "correct": 0
        },
        {
          "title": "Companion of the Prophet ﷺ (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صَحَابِيٌّ?",
          "options": [
            "صَحَابَةٌ",
            "وَسِخُوْنَ",
            "أُسُوْدٌ",
            "أَشْجَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "emigrant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"emigrant\"?",
          "options": [
            "مُهَاجِرٌ",
            "فَاقَ يَفُوْقُ",
            "أَطَاعَ يُطِيْعُ",
            "آمَنَ يُؤْمِنُ"
          ],
          "correct": 0
        },
        {
          "title": "emigrant",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُهَاجِرٌ mean?",
          "options": [
            "emigrant",
            "to surpass",
            "to obey",
            "to believe"
          ],
          "correct": 0
        },
        {
          "title": "emigrant (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُهَاجِرٌ?",
          "options": [
            "مُهَاجِرُوْنَ",
            "مُلُوْكٌ",
            "أَقْرَانٌ",
            "دِيَارٌ"
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
            "رَحِمَ يَرْحَمُ",
            "هَدَى يَهْدِيْ",
            "قَتَلَ يَقْتُلُ"
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
            "to show mercy",
            "to guide",
            "to kill"
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
            "أُسُوْدٌ",
            "أَشْجَارٌ",
            "صَحَابَةٌ"
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
            "أَطَاعَ يُطِيْعُ",
            "آمَنَ يُؤْمِنُ",
            "مَلِكٌ"
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
            "to obey",
            "to believe",
            "king"
          ],
          "correct": 0
        },
        {
          "title": "dirty (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of وَسِخٌ?",
          "options": [
            "وَسِخُوْنَ",
            "أَقْرَانٌ",
            "دِيَارٌ",
            "مُهَاجِرُوْنَ"
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
            "هَدَى يَهْدِيْ",
            "قَتَلَ يَقْتُلُ",
            "أَسَدٌ"
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
            "to guide",
            "to kill",
            "lion"
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
            "إِطَاعَةً",
            "إِيْمَانًا",
            "رَحْمَةً"
          ],
          "correct": 0
        },
        {
          "title": "to show mercy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to show mercy\"?",
          "options": [
            "رَحِمَ يَرْحَمُ",
            "آمَنَ يُؤْمِنُ",
            "مَلِكٌ",
            "قِرْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "to show mercy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَحِمَ يَرْحَمُ mean?",
          "options": [
            "to show mercy",
            "to believe",
            "king",
            "peer, equal"
          ],
          "correct": 0
        },
        {
          "title": "to show mercy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَحِمَ يَرْحَمُ?",
          "options": [
            "رَحْمَةً",
            "هِدَايَةً",
            "قَتْلًا",
            "إِطَاعَةً"
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
            "قَتَلَ يَقْتُلُ",
            "أَسَدٌ",
            "شَجَرَةٌ"
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
            "to kill",
            "lion",
            "tree"
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
            "إِيْمَانًا",
            "فَوْقًا",
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
            "مَلِكٌ",
            "قِرْنٌ",
            "دَارٌ"
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
            "king",
            "peer, equal",
            "home, abode"
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
            "قَتْلًا",
            "رَحْمَةً",
            "إِيْمَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to believe",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to believe\"?",
          "options": [
            "آمَنَ يُؤْمِنُ",
            "أَسَدٌ",
            "شَجَرَةٌ",
            "صَحَابِيٌّ"
          ],
          "correct": 0
        },
        {
          "title": "to believe",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آمَنَ يُؤْمِنُ mean?",
          "options": [
            "to believe",
            "lion",
            "tree",
            "Companion of the Prophet ﷺ"
          ],
          "correct": 0
        },
        {
          "title": "to believe (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آمَنَ يُؤْمِنُ?",
          "options": [
            "إِيْمَانًا",
            "فَوْقًا",
            "إِطَاعَةً",
            "قَتْلًا"
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
            "قِرْنٌ",
            "دَارٌ",
            "مُهَاجِرٌ"
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
            "peer, equal",
            "home, abode",
            "emigrant"
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
            "رَحْمَةً",
            "هِدَايَةً",
            "فَوْقًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l2",
      "title": "العائد مفعولاً به",
      "subtitle": "Part 7: The نَعْتٌ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Rule",
          "lines": [
            {
              "html": "The عَائِدٌ in the نَعْت sentence can be a مَفْعُوْلٌ بِهِ. As with the فَاعِل, it can either be a person or a thing, and that decides the English relative pronoun.",
              "list": false
            },
            {
              "html": "The visible sign of this case is an attached pronoun on the verb — هُ, هَا, هُمْ, هُنَّ — sitting in the object position. The doer of that verb is then someone else, either written after it or carried inside it.",
              "list": false
            },
            {
              "html": "رَجُلٌ رَأَيْتُهُ — a man whom I saw",
              "list": true,
              "bullet": true
            },
            {
              "html": "قَلَمٌ رَأَيْتُهُ — a pen which I saw",
              "list": true,
              "bullet": true
            },
            {
              "table": {
                "title": "The Four Steps",
                "headers": [
                  "Step",
                  "رَجُلٌ رَأَيْتُهُ",
                  "قَلَمٌ رَأَيْتُهُ"
                ],
                "rows": [
                  [
                    "1. Translate the نَعْت sentence on its own",
                    "I saw him",
                    "I saw it"
                  ],
                  [
                    "2. Add 'whom' or 'who' for a person, 'which' or 'that' for a thing",
                    "whom I saw him",
                    "that / which I saw it"
                  ],
                  [
                    "3. Remove the translation of the عَائِد",
                    "whom I saw",
                    "that / which I saw"
                  ],
                  [
                    "4. Add the translation of the مَنْعُوْت",
                    "a man whom I saw",
                    "a pen that I saw / a pen which I saw"
                  ]
                ]
              }
            },
            {
              "html": "The steps are identical to those of the previous lesson; only step 2 changes, because the English pronoun that replaces an object is 'whom' rather than 'who'. For things, 'which' and 'that' serve in both cases alike.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "رَجُلٌ رَأَيْتُهُ",
                "translation": "a man whom I saw",
                "cells": [
                  "رَجُلٌ",
                  "رَأَيْتُهُ"
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
                        "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُ)"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the visible sign that the عَائِدٌ in a نَعْت sentence is a مَفْعُوْلٌ بِهِ rather than a فَاعِلٌ؟",
            "kind": "mcq",
            "options": [
              "An attached object pronoun (هُ، هَا، هُمْ، هُنَّ) on the verb, with the doer being someone else",
              "The verb is مُضَارِعٌ",
              "The مَنْعُوْت is مَعْرِفَةٌ",
              "The sentence has no verb at all"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Spotting Which Slot the عَائِد Fills",
          "lines": [
            {
              "html": "Since both lessons so far produce a sentence that follows an indefinite noun, it is worth having a quick test. Look at the verb: if it carries an attached object pronoun, the عَائِد is the مَفْعُوْلٌ بِهِ; if it does not, and no other candidate presents itself, the عَائِد is the فَاعِل hidden or attached in the verb.",
              "list": false
            },
            {
              "table": {
                "title": "The Two Cases Compared",
                "headers": [
                  "Phrase",
                  "Where the عَائِد sits",
                  "English"
                ],
                "rows": [
                  [
                    "خُبْزٌ أَكَلَهُ الْوَلَدُ",
                    "The attached هُ — object",
                    "bread which the boy ate"
                  ],
                  [
                    "وَلَدٌ أَكَلَ الْخُبْزَ",
                    "The hidden هُوَ — subject",
                    "a boy who ate the bread"
                  ]
                ]
              }
            },
            {
              "html": "In the first the doer is written out as الْوَلَدُ, which is what frees the attached هُ to be the عَائِد. In the second the object is written out as الْخُبْزَ, which leaves the hidden pronoun as the only candidate.",
              "list": false
            },
            {
              "html": "أَعْمَالٌ لَا يَرْضَاهَا اللهُ — deeds which Allah is not pleased with",
              "list": true,
              "bullet": true
            },
            {
              "html": "وَقْتٌ لَمْ نُمْضِهِ فِيْ عِبَادَةِ اللهِ — a time which we did not spend in the worship of Allah",
              "list": true,
              "bullet": true
            },
            {
              "html": "Negatives sit inside the نَعْت sentence and do not disturb the structure. لَا negates a مُضَارِع without changing it; لَمْ makes it مَجْزُوْم and past in meaning; لَنْ makes it مَنْصُوْب and future. All three appear in the book's exercise.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "If a verb in a نَعْت sentence carries no attached object pronoun and no other candidate presents itself, where is the عَائِدٌ؟",
            "kind": "mcq",
            "options": [
              "It is the فَاعِلٌ, hidden or attached in the verb",
              "It must be the مُضَافٌ إِلَيْهِ",
              "There is no عَائِدٌ in that case",
              "It is always the خَبَرٌ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The عَائِد as the مَفْعُوْلٌ بِهِ",
        "rows": [
          {
            "label": "What it looks like",
            "arabic": "ضَمِيْرٌ مُتَّصِلٌ بِالْفِعْلِ",
            "meaning": "An attached pronoun — هُ, هَا, هُمْ, هُنَّ — in the object position of the verb."
          },
          {
            "label": "For a person",
            "arabic": "رَجُلٌ رَأَيْتُهُ",
            "meaning": "'a man whom I saw' — the English pronoun is 'whom' or 'who'."
          },
          {
            "label": "For a thing",
            "arabic": "قَلَمٌ رَأَيْتُهُ",
            "meaning": "'a pen which I saw' — 'which' or 'that'."
          },
          {
            "label": "The method",
            "arabic": "أَرْبَعُ خُطُوَاتٍ",
            "meaning": "Translate the sentence, add the relative pronoun, drop the عَائِد, add the مَنْعُوْت."
          },
          {
            "label": "The quick test",
            "arabic": "هَلْ لِلْفِعْلِ ضَمِيْرٌ مَفْعُوْلٌ؟",
            "meaning": "An attached object pronoun on the verb means the عَائِد is the object; otherwise look to the doer."
          },
          {
            "label": "Negatives",
            "arabic": "لَا، لَمْ، لَنْ",
            "meaning": "All three may sit inside the نَعْت sentence without disturbing its structure."
          }
        ]
      },
      "quiz": [
        {
          "q": "What is the visible sign that the عَائِد is the مَفْعُوْلٌ بِهِ?",
          "options": [
            "The verb is مَجْهُوْل",
            "The verb carries an attached object pronoun",
            "The مَنْعُوْت is مَعْرِفَة",
            "The sentence is negative"
          ],
          "correct": 1,
          "explanation": "هُ, هَا, هُمْ and هُنَّ attached to the verb sit in the object position."
        },
        {
          "q": "Which English relative pronoun is used when the عَائِد is an object referring to a person?",
          "options": [
            "'whose'",
            "'which'",
            "'whom' or 'who'",
            "'where'"
          ],
          "correct": 2,
          "explanation": "رَجُلٌ رَأَيْتُهُ — 'a man whom I saw'."
        },
        {
          "q": "In خُبْزٌ أَكَلَهُ الْوَلَدُ, what is الْوَلَدُ?",
          "options": [
            "The عَائِد",
            "The مَفْعُوْلٌ بِهِ",
            "The فَاعِل, written out after the verb",
            "A بَدَل of خُبْزٌ"
          ],
          "correct": 2,
          "explanation": "It is مَرْفُوْع, and its presence is what leaves the attached هُ free to be the عَائِد."
        },
        {
          "q": "In يَوْمٌ لَنْ نَنْسَاهُ, what does لَنْ contribute?",
          "options": [
            "A future negative — 'will never'",
            "A past negative",
            "A prohibition",
            "A question"
          ],
          "correct": 0,
          "explanation": "لَنْ makes the مُضَارِع مَنْصُوْب and pushes the negation into the future."
        },
        {
          "q": "Which step of the four removes the Arabic pronoun from the English?",
          "options": [
            "Step 1",
            "Step 2",
            "Step 3",
            "Step 4"
          ],
          "correct": 2,
          "explanation": "'whom I saw him' becomes 'whom I saw' — the relative pronoun already carries the object."
        },
        {
          "q": "In وَقْتٌ لَمْ نُمْضِهِ فِيْ عِبَادَةِ اللهِ, which word is the عَائِد?",
          "options": [
            "وَقْتٌ",
            "The attached هِ on نُمْضِ",
            "The hidden نَحْنُ",
            "عِبَادَةِ"
          ],
          "correct": 1,
          "explanation": "The hidden نَحْنُ is the doer; the attached هِ is the object and refers back to the time."
        }
      ],
      "bank": [
        {
          "title": "رَجُلٌ رَأَيْتُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 462 (Section 1, Part 7)",
          "sentence": "رَجُلٌ رَأَيْتُهُ",
          "translation": "a man whom I saw",
          "cells": [
            "رَجُلٌ",
            "رَأَيْتُهُ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُ)"
                }
              ]
            }
          ],
          "distractors": [
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "قَلَمٌ رَأَيْتُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 462 (Section 1, Part 7)",
          "sentence": "قَلَمٌ رَأَيْتُهُ",
          "translation": "a pen which I saw",
          "cells": [
            "قَلَمٌ",
            "رَأَيْتُهُ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُ)"
                }
              ]
            }
          ],
          "distractors": [
            "خَبَرٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "بَقَرَةٌ ذَبَحُوْهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 7)",
          "sentence": "بَقَرَةٌ ذَبَحُوْهَا",
          "translation": "a cow which they slaughtered",
          "cells": [
            "بَقَرَةٌ",
            "ذَبَحُوْهَا"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ) وَمَفْعُوْلٌ بِهِ (هَا)"
                }
              ]
            }
          ],
          "distractors": [
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "يَوْمٌ لَنْ نَنْسَاهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 7)",
          "sentence": "يَوْمٌ لَنْ نَنْسَاهُ",
          "translation": "a day which we will never forget",
          "cells": [
            "يَوْمٌ",
            "لَنْ",
            "نَنْسَاهُ"
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
                  "end": 2,
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
                  "role": "حَرْفُ نَفْيٍ وَنَصْبٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ) وَمَفْعُوْلٌ بِهِ (هُ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَرْفُ جَزْمٍ",
            "خَبَرٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "خُبْزٌ أَكَلَهُ الْوَلَدُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 7)",
          "sentence": "خُبْزٌ أَكَلَهُ الْوَلَدُ",
          "translation": "bread which the boy ate",
          "cells": [
            "خُبْزٌ",
            "أَكَلَهُ",
            "الْوَلَدُ"
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
                  "end": 2,
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
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (هُ)"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "رِجَالٌ لَا نَعْرِفُهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 7)",
          "sentence": "رِجَالٌ لَا نَعْرِفُهُمْ",
          "translation": "men whom we do not know",
          "cells": [
            "رِجَالٌ",
            "لَا",
            "نَعْرِفُهُمْ"
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
                  "end": 2,
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
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ) وَمَفْعُوْلٌ بِهِ (هُمْ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "صَفَحَاتٌ لَمْ نَقْرَأْهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 7)",
          "sentence": "صَفَحَاتٌ لَمْ نَقْرَأْهَا",
          "translation": "pages which we have not read",
          "cells": [
            "صَفَحَاتٌ",
            "لَمْ",
            "نَقْرَأْهَا"
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
                  "end": 2,
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
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ) وَمَفْعُوْلٌ بِهِ (هَا)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَرْفُ نَصْبٍ",
            "خَبَرٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "وُجُوْهٌ لَمْ نَرَهَا مِنْ قَبْلُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 7)",
          "sentence": "وُجُوْهٌ لَمْ نَرَهَا مِنْ قَبْلُ",
          "translation": "faces which we had not seen before",
          "cells": [
            "وُجُوْهٌ",
            "لَمْ",
            "نَرَهَا",
            "مِنْ",
            "قَبْلُ"
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
                  "end": 4,
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
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ) وَمَفْعُوْلٌ بِهِ (هَا)"
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
            "حَرْفُ نَهْيٍ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "عِلْمٌ نَطْلُبُهُ إِلَى مَوْتِنَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 7)",
          "sentence": "عِلْمٌ نَطْلُبُهُ إِلَى مَوْتِنَا",
          "translation": "knowledge which we seek until our death",
          "cells": [
            "عِلْمٌ",
            "نَطْلُبُهُ",
            "إِلَى",
            "مَوْتِنَا"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ) وَمَفْعُوْلٌ بِهِ (هُ)"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَعْمَالٌ لَا يَرْضَاهَا اللهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 7)",
          "sentence": "أَعْمَالٌ لَا يَرْضَاهَا اللهُ",
          "translation": "deeds which Allah is not pleased with",
          "cells": [
            "أَعْمَالٌ",
            "لَا",
            "يَرْضَاهَا",
            "اللهُ"
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
                  "end": 3,
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
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (هَا)"
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
            "حَرْفُ نَهْيٍ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "أَسَاطِيْرُ افْتَرَاهَا النَّاسُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 7)",
          "sentence": "أَسَاطِيْرُ افْتَرَاهَا النَّاسُ",
          "translation": "legends which people invented",
          "cells": [
            "أَسَاطِيْرُ",
            "افْتَرَاهَا",
            "النَّاسُ"
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
                  "end": 2,
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
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (هَا)"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "مَسَاجِدُ بَنَاهَا الْمُسْلِمُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 7)",
          "sentence": "مَسَاجِدُ بَنَاهَا الْمُسْلِمُوْنَ",
          "translation": "masjids which the Muslims built",
          "cells": [
            "مَسَاجِدُ",
            "بَنَاهَا",
            "الْمُسْلِمُوْنَ"
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
                  "end": 2,
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
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (هَا)"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "كَبْشٌ وَجَدْنَاهُ فِي الْقَرْيَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 7)",
          "sentence": "كَبْشٌ وَجَدْنَاهُ فِي الْقَرْيَةِ",
          "translation": "a ram which we found in the village",
          "cells": [
            "كَبْشٌ",
            "وَجَدْنَاهُ",
            "فِي",
            "الْقَرْيَةِ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا) وَمَفْعُوْلٌ بِهِ (هُ)"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "وَقْتٌ لَمْ نُمْضِهِ فِيْ عِبَادَةِ اللهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 7)",
          "sentence": "وَقْتٌ لَمْ نُمْضِهِ فِيْ عِبَادَةِ اللهِ",
          "translation": "a time which we did not spend in the worship of Allah",
          "cells": [
            "وَقْتٌ",
            "لَمْ",
            "نُمْضِهِ",
            "فِيْ",
            "عِبَادَةِ",
            "اللهِ"
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
                  "end": 5,
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
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ) وَمَفْعُوْلٌ بِهِ (هِ)"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In بَقَرَةٌ ذَبَحُوْهَا, what is the وَاو on the verb?",
          "options": [
            "The عَائِد",
            "The فَاعِل — a group of people not named",
            "A حَرْفُ عَطْفٍ",
            "Part of the root"
          ],
          "correct": 1,
          "explanation": "وَاوُ الْجَمَاعَةِ is the doer; the هَا after it is the object and the عَائِد."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In رِجَالٌ لَا نَعْرِفُهُمْ, why is 'whom' correct rather than 'which'?",
          "options": [
            "Because the verb is مُضَارِع",
            "Because the مَنْعُوْت is plural",
            "Because the عَائِد refers to human beings",
            "Because the sentence is negative"
          ],
          "correct": 2,
          "explanation": "Step 2 of the method turns on whether the referent is a person or a thing."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In صَفَحَاتٌ لَمْ نَقْرَأْهَا, what does لَمْ do to نَقْرَأُ?",
          "options": [
            "Makes it مَنْصُوْب and future",
            "Makes it مَجْزُوْم and past in meaning",
            "Makes it مَرْفُوْع",
            "Turns it into an أَمْر"
          ],
          "correct": 1,
          "explanation": "'pages which we have not read' — a past negative despite the مُضَارِع form."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In وُجُوْهٌ لَمْ نَرَهَا مِنْ قَبْلُ, what is مِنْ قَبْلُ?",
          "options": [
            "The عَائِد",
            "A مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ inside the نَعْت sentence",
            "A نَعْت of وُجُوْهٌ",
            "A بَدَل"
          ],
          "correct": 1,
          "explanation": "The نَعْت sentence carries its own adverbial — 'which we had not seen before'."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In أَعْمَالٌ لَا يَرْضَاهَا اللهُ, who is the doer of يَرْضَى?",
          "options": [
            "أَعْمَالٌ",
            "The attached هَا",
            "اللهُ",
            "A hidden هُوَ"
          ],
          "correct": 2,
          "explanation": "اللهُ is مَرْفُوْع and written after the verb; the هَا is the object and refers back to the deeds."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In عِلْمٌ نَطْلُبُهُ إِلَى مَوْتِنَا, what does إِلَى مَوْتِنَا express?",
          "options": [
            "The place of the seeking",
            "The reason for the seeking",
            "The limit in time of the seeking",
            "The manner of the seeking"
          ],
          "correct": 2,
          "explanation": "'knowledge which we seek until our death' — إِلَى marks the end point."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In مَسَاجِدُ بَنَاهَا الْمُسْلِمُوْنَ, what makes الْمُسْلِمُوْنَ the doer rather than the عَائِد?",
          "options": [
            "It is مَرْفُوْع and separate, while the عَائِد is the attached هَا",
            "It comes last in the phrase",
            "It is definite",
            "It is a sound masculine plural"
          ],
          "correct": 0,
          "explanation": "Case and attachment together settle it: the pronoun on the verb is the object."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "How would خُبْزٌ أَكَلَهُ الْوَلَدُ change in meaning if the phrase read وَلَدٌ أَكَلَ الْخُبْزَ?",
          "options": [
            "There would be no change",
            "'bread which the boy ate' would become 'a boy who ate the bread'",
            "It would become a question",
            "It would become negative"
          ],
          "correct": 1,
          "explanation": "Moving the عَائِد from the object slot to the subject slot moves the description from the bread to the boy."
        },
        {
          "title": "cow",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"cow\"?",
          "options": [
            "بَقَرَةٌ",
            "وَجْهٌ",
            "كَبْشٌ",
            "ذَبَحَ يَذْبَحُ"
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
            "face",
            "ram",
            "to slaughter"
          ],
          "correct": 0
        },
        {
          "title": "cow (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَقَرَةٌ?",
          "options": [
            "بَقَرَاتٌ",
            "وُجُوْهٌ",
            "كِبَاشٌ",
            "أَخْبَازٌ"
          ],
          "correct": 0
        },
        {
          "title": "bread",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"bread\"?",
          "options": [
            "خُبْزٌ",
            "أُسْطُوْرَةٌ",
            "عَمَلٌ",
            "عَرَفَ يَعْرِفُ"
          ],
          "correct": 0
        },
        {
          "title": "bread",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خُبْزٌ mean?",
          "options": [
            "bread",
            "legend, fable",
            "deed, action",
            "to know, to recognise"
          ],
          "correct": 0
        },
        {
          "title": "bread (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of خُبْزٌ?",
          "options": [
            "أَخْبَازٌ",
            "أَسَاطِيْرُ",
            "أَعْمَالٌ",
            "صَفَحَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "page",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"page\"?",
          "options": [
            "صَفْحَةٌ",
            "كَبْشٌ",
            "ذَبَحَ يَذْبَحُ",
            "رَضِيَ يَرْضَى"
          ],
          "correct": 0
        },
        {
          "title": "page",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَفْحَةٌ mean?",
          "options": [
            "page",
            "ram",
            "to slaughter",
            "to be pleased with"
          ],
          "correct": 0
        },
        {
          "title": "page (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صَفْحَةٌ?",
          "options": [
            "صَفَحَاتٌ",
            "كِبَاشٌ",
            "بَقَرَاتٌ",
            "وُجُوْهٌ"
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
            "عَمَلٌ",
            "عَرَفَ يَعْرِفُ",
            "اِفْتَرَى يَفْتَرِيْ"
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
            "deed, action",
            "to know, to recognise",
            "to invent, to fabricate"
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
            "أَعْمَالٌ",
            "أَخْبَازٌ",
            "أَسَاطِيْرُ"
          ],
          "correct": 0
        },
        {
          "title": "legend, fable",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"legend, fable\"?",
          "options": [
            "أُسْطُوْرَةٌ",
            "ذَبَحَ يَذْبَحُ",
            "رَضِيَ يَرْضَى",
            "وَجَدَ يَجِدُ"
          ],
          "correct": 0
        },
        {
          "title": "legend, fable",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أُسْطُوْرَةٌ mean?",
          "options": [
            "legend, fable",
            "to slaughter",
            "to be pleased with",
            "to find"
          ],
          "correct": 0
        },
        {
          "title": "legend, fable (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أُسْطُوْرَةٌ?",
          "options": [
            "أَسَاطِيْرُ",
            "بَقَرَاتٌ",
            "صَفَحَاتٌ",
            "كِبَاشٌ"
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
            "عَرَفَ يَعْرِفُ",
            "اِفْتَرَى يَفْتَرِيْ",
            "أَمْضَى يُمْضِيْ"
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
            "to know, to recognise",
            "to invent, to fabricate",
            "to spend (time)"
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
            "أَخْبَازٌ",
            "وُجُوْهٌ",
            "أَعْمَالٌ"
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
            "رَضِيَ يَرْضَى",
            "وَجَدَ يَجِدُ",
            "طَلَبَ يَطْلُبُ"
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
            "to be pleased with",
            "to find",
            "to seek"
          ],
          "correct": 0
        },
        {
          "title": "deed, action (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَمَلٌ?",
          "options": [
            "أَعْمَالٌ",
            "صَفَحَاتٌ",
            "أَسَاطِيْرُ",
            "بَقَرَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "to slaughter",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to slaughter\"?",
          "options": [
            "ذَبَحَ يَذْبَحُ",
            "اِفْتَرَى يَفْتَرِيْ",
            "أَمْضَى يُمْضِيْ",
            "بَقَرَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to slaughter",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ذَبَحَ يَذْبَحُ mean?",
          "options": [
            "to slaughter",
            "to invent, to fabricate",
            "to spend (time)",
            "cow"
          ],
          "correct": 0
        },
        {
          "title": "to slaughter (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ذَبَحَ يَذْبَحُ?",
          "options": [
            "ذَبْحًا",
            "وُجُوْدًا",
            "طَلَبًا",
            "رِضًا"
          ],
          "correct": 0
        },
        {
          "title": "to know, to recognise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to know, to recognise\"?",
          "options": [
            "عَرَفَ يَعْرِفُ",
            "وَجَدَ يَجِدُ",
            "طَلَبَ يَطْلُبُ",
            "خُبْزٌ"
          ],
          "correct": 0
        },
        {
          "title": "to know, to recognise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَرَفَ يَعْرِفُ mean?",
          "options": [
            "to know, to recognise",
            "to find",
            "to seek",
            "bread"
          ],
          "correct": 0
        },
        {
          "title": "to know, to recognise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَرَفَ يَعْرِفُ?",
          "options": [
            "مَعْرِفَةً",
            "إِمْضَاءً",
            "ذَبْحًا",
            "اِفْتِرَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to be pleased with",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be pleased with\"?",
          "options": [
            "رَضِيَ يَرْضَى",
            "أَمْضَى يُمْضِيْ",
            "بَقَرَةٌ",
            "صَفْحَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be pleased with",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَضِيَ يَرْضَى mean?",
          "options": [
            "to be pleased with",
            "to spend (time)",
            "cow",
            "page"
          ],
          "correct": 0
        },
        {
          "title": "to be pleased with (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَضِيَ يَرْضَى?",
          "options": [
            "رِضًا",
            "طَلَبًا",
            "مَعْرِفَةً",
            "وُجُوْدًا"
          ],
          "correct": 0
        },
        {
          "title": "to invent, to fabricate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to invent, to fabricate\"?",
          "options": [
            "اِفْتَرَى يَفْتَرِيْ",
            "طَلَبَ يَطْلُبُ",
            "خُبْزٌ",
            "وَجْهٌ"
          ],
          "correct": 0
        },
        {
          "title": "to invent, to fabricate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِفْتَرَى يَفْتَرِيْ mean?",
          "options": [
            "to invent, to fabricate",
            "to seek",
            "bread",
            "face"
          ],
          "correct": 0
        },
        {
          "title": "to invent, to fabricate (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِفْتَرَى يَفْتَرِيْ?",
          "options": [
            "اِفْتِرَاءً",
            "ذَبْحًا",
            "رِضًا",
            "إِمْضَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to find",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to find\"?",
          "options": [
            "وَجَدَ يَجِدُ",
            "بَقَرَةٌ",
            "صَفْحَةٌ",
            "أُسْطُوْرَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to find",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَجَدَ يَجِدُ mean?",
          "options": [
            "to find",
            "cow",
            "page",
            "legend, fable"
          ],
          "correct": 0
        },
        {
          "title": "to find (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَجَدَ يَجِدُ?",
          "options": [
            "وُجُوْدًا",
            "مَعْرِفَةً",
            "اِفْتِرَاءً",
            "طَلَبًا"
          ],
          "correct": 0
        },
        {
          "title": "to spend (time)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to spend (time)\"?",
          "options": [
            "أَمْضَى يُمْضِيْ",
            "خُبْزٌ",
            "وَجْهٌ",
            "كَبْشٌ"
          ],
          "correct": 0
        },
        {
          "title": "to spend (time)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَمْضَى يُمْضِيْ mean?",
          "options": [
            "to spend (time)",
            "bread",
            "face",
            "ram"
          ],
          "correct": 0
        },
        {
          "title": "to spend (time) (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَمْضَى يُمْضِيْ?",
          "options": [
            "إِمْضَاءً",
            "رِضًا",
            "وُجُوْدًا",
            "ذَبْحًا"
          ],
          "correct": 0
        },
        {
          "title": "to seek",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to seek\"?",
          "options": [
            "طَلَبَ يَطْلُبُ",
            "صَفْحَةٌ",
            "أُسْطُوْرَةٌ",
            "عَمَلٌ"
          ],
          "correct": 0
        },
        {
          "title": "to seek",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَلَبَ يَطْلُبُ mean?",
          "options": [
            "to seek",
            "page",
            "legend, fable",
            "deed, action"
          ],
          "correct": 0
        },
        {
          "title": "to seek (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of طَلَبَ يَطْلُبُ?",
          "options": [
            "طَلَبًا",
            "اِفْتِرَاءً",
            "إِمْضَاءً",
            "مَعْرِفَةً"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l3",
      "title": "العائد مضافًا إليه",
      "subtitle": "Part 7: The نَعْتٌ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Rule",
          "lines": [
            {
              "html": "The عَائِدٌ in the نَعْت sentence can be the مُضَافٌ إِلَيْهِ. It can either be a person or a thing — but unlike the previous two lessons, that makes no difference to the English, because 'whose' serves for both.",
              "list": false
            },
            {
              "html": "رَجُلٌ يَدُهُ وَسِخَةٌ — a man whose hand is dirty",
              "list": true,
              "bullet": true
            },
            {
              "html": "بَيْتٌ بَابُهُ مَفْتُوْحٌ — a house whose door is open",
              "list": true,
              "bullet": true
            },
            {
              "table": {
                "title": "The Four Steps",
                "headers": [
                  "Step",
                  "رَجُلٌ يَدُهُ وَسِخَةٌ",
                  "بَيْتٌ بَابُهُ مَفْتُوْحٌ"
                ],
                "rows": [
                  [
                    "1. Translate the نَعْت sentence on its own",
                    "his hand is dirty",
                    "its door is open"
                  ],
                  [
                    "2. Add the word 'whose' before the sentence",
                    "whose his hand is dirty",
                    "whose its door is open"
                  ],
                  [
                    "3. Remove the translation of the عَائِد",
                    "whose hand is dirty",
                    "whose door is open"
                  ],
                  [
                    "4. Add the مَنْعُوْت",
                    "a man whose hand is dirty",
                    "a house whose door is open"
                  ]
                ]
              }
            },
            {
              "html": "Step 2 is where this case differs from the others. There is no choice to make between 'who', 'whom', 'which' and 'that' — the possessive relationship of the إِضَافَة is carried by 'whose' regardless of whether the referent is a person or a thing.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "رَجُلٌ يَدُهُ وَسِخَةٌ",
                "translation": "a man whose hand is dirty",
                "cells": [
                  "رَجُلٌ",
                  "يَدُ",
                  "هُ",
                  "وَسِخَةٌ"
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
                        "end": 3,
                        "role": "نَعْتٌ"
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
                  }
                ]
              }
            },
            {
              "html": "The pronoun هُ is written joined to يَدُ, but it is worth splitting it out in your mind when you parse. It is the مُضَافٌ إِلَيْهِ of يَدُ, and it is the عَائِد that ties the whole sentence back to رَجُلٌ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Unlike the فَاعِلٌ and مَفْعُوْلٌ بِهِ cases, what is special about translating a نَعْت sentence whose عَائِدٌ is a مُضَافٌ إِلَيْهِ؟",
            "kind": "mcq",
            "options": [
              "The single word 'whose' is used regardless of whether the referent is a person or a thing",
              "'Who' is used for people and 'whom' for things",
              "No relative pronoun is used at all",
              "The عَائِد is dropped entirely without a trace"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Adjusting the English",
          "lines": [
            {
              "html": "When the عَائِدٌ is a مُضَافٌ إِلَيْهِ, the translation is usually adjusted. 'A house whose door is open' is correct but stiff; English more naturally says 'a house with an open door'.",
              "list": false
            },
            {
              "table": {
                "title": "Literal and Natural",
                "headers": [
                  "Arabic",
                  "Literal",
                  "Natural"
                ],
                "rows": [
                  [
                    "بَيْتٌ بَابُهُ مَفْتُوْحٌ",
                    "a house whose door is open",
                    "a house with an open door"
                  ],
                  [
                    "رَجُلٌ يَدُهُ وَسِخَةٌ",
                    "a man whose hand is dirty",
                    "a man with a dirty hand"
                  ],
                  [
                    "شَابٌّ إِيْمَانُهُ قَوِيٌّ",
                    "a youth whose faith is strong",
                    "a youth with strong faith"
                  ],
                  [
                    "مَسَاكِيْنُ مَالُهُمْ قَلِيْلٌ",
                    "poor people whose wealth is little",
                    "poor people with little wealth"
                  ]
                ]
              }
            },
            {
              "html": "Do the four steps first and reach the literal version; only then adjust. Going straight for the natural phrasing makes it easy to lose track of which word is the مُبْتَدَأ and which the خَبَر inside the nested sentence.",
              "list": false
            },
            {
              "html": "The nested sentence need not be nominal. In مُعَلِّمٌ لَا نَفْهَمُ دَرْسَهُ, 'a teacher whose lesson we do not understand', the عَائِد is still a مُضَافٌ إِلَيْهِ — the هُ on دَرْسَ — but the sentence around it is verbal.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Why might 'a house whose door is open' more naturally be rendered 'a house with an open door'؟",
            "kind": "mcq",
            "options": [
              "Because the literal 'whose' translation, while correct, is stiffer than the natural English possessive phrasing",
              "Because 'whose' is grammatically wrong here",
              "Because the Arabic itself uses مَعَ",
              "Because إِضَافَة never permits a 'whose' translation"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The عَائِد as the مُضَافٌ إِلَيْهِ",
        "rows": [
          {
            "label": "What it looks like",
            "arabic": "ضَمِيْرٌ مُتَّصِلٌ بِاسْمٍ",
            "meaning": "An attached pronoun on a noun inside the نَعْت sentence, not on the verb."
          },
          {
            "label": "The English pronoun",
            "arabic": "whose",
            "meaning": "One word covers both persons and things — no choice to make at step 2."
          },
          {
            "label": "The literal result",
            "arabic": "بَيْتٌ بَابُهُ مَفْتُوْحٌ",
            "meaning": "'a house whose door is open'."
          },
          {
            "label": "The adjustment",
            "arabic": "تُعَدَّلُ التَّرْجَمَةُ",
            "meaning": "Usually rendered more naturally as 'a house with an open door'."
          },
          {
            "label": "Order of work",
            "arabic": "الْخُطُوَاتُ ثُمَّ التَّعْدِيْلُ",
            "meaning": "Do the four steps first, then adjust — the literal version keeps the parsing visible."
          },
          {
            "label": "Not only nominal",
            "arabic": "مُعَلِّمٌ لَا نَفْهَمُ دَرْسَهُ",
            "meaning": "The نَعْت sentence may be verbal, with the عَائِد attached to a noun inside it."
          }
        ]
      },
      "quiz": [
        {
          "q": "Which English relative pronoun corresponds to an عَائِد that is a مُضَافٌ إِلَيْهِ?",
          "options": [
            "'who'",
            "'whom'",
            "'whose'",
            "'which'"
          ],
          "correct": 2,
          "explanation": "It carries the possessive relationship of the إِضَافَة."
        },
        {
          "q": "When the عَائِد is a مُضَافٌ إِلَيْهِ (translated 'whose'), does it matter whether the referent is a person or a thing?",
          "options": [
            "No — 'whose' serves for both",
            "Yes — 'whose' for a person, 'of which' for a thing",
            "Yes — the Arabic changes too",
            "Only when the sentence is negative"
          ],
          "correct": 0,
          "explanation": "Unlike the فَاعِل and مَفْعُوْلٌ بِهِ cases, there is no choice to make here."
        },
        {
          "q": "In رَجُلٌ يَدُهُ وَسِخَةٌ, what is يَدُهُ?",
          "options": [
            "The خَبَر of the nested sentence",
            "The مُبْتَدَأ of the nested sentence",
            "A مَفْعُوْلٌ بِهِ",
            "The مَنْعُوْت"
          ],
          "correct": 1,
          "explanation": "يَدُ is the مُضَاف and هُ its مُضَافٌ إِلَيْهِ; the pair together are the مُبْتَدَأ, and وَسِخَةٌ the خَبَر."
        },
        {
          "q": "How is 'a house whose door is open' naturally adjusted?",
          "options": [
            "'the house of the open door'",
            "'a house with an open door'",
            "'an open house door'",
            "It is left as it is"
          ],
          "correct": 1,
          "explanation": "The adjustment produces natural English without changing the analysis."
        },
        {
          "q": "Why is it recommended to do the four steps before adjusting?",
          "options": [
            "Because the adjustment is optional",
            "Because the literal version keeps the مُبْتَدَأ and خَبَر visible",
            "Because 'whose' is otherwise ungrammatical",
            "Because the adjustment changes the Arabic"
          ],
          "correct": 1,
          "explanation": "Going straight for the natural phrasing makes it easy to lose the internal parsing."
        },
        {
          "q": "In مُعَلِّمٌ لَا نَفْهَمُ دَرْسَهُ, which word carries the عَائِد?",
          "options": [
            "مُعَلِّمٌ",
            "نَفْهَمُ",
            "دَرْسَ",
            "لَا"
          ],
          "correct": 2,
          "explanation": "The هُ attached to دَرْسَ is its مُضَافٌ إِلَيْهِ and refers back to the teacher."
        }
      ],
      "bank": [
        {
          "title": "رَجُلٌ يَدُهُ وَسِخَةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 463 (Section 1, Part 7)",
          "sentence": "رَجُلٌ يَدُهُ وَسِخَةٌ",
          "translation": "a man whose hand is dirty",
          "cells": [
            "رَجُلٌ",
            "يَدُ",
            "هُ",
            "وَسِخَةٌ"
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
                  "end": 3,
                  "role": "نَعْتٌ"
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
          "title": "بَيْتٌ بَابُهُ مَفْتُوْحٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 463 (Section 1, Part 7)",
          "sentence": "بَيْتٌ بَابُهُ مَفْتُوْحٌ",
          "translation": "a house whose door is open",
          "cells": [
            "بَيْتٌ",
            "بَابُ",
            "هُ",
            "مَفْتُوْحٌ"
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
                  "end": 3,
                  "role": "نَعْتٌ"
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
          "title": "كِتَابٌ آيَاتُهُ بَيِّنَاتٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 7)",
          "sentence": "كِتَابٌ آيَاتُهُ بَيِّنَاتٌ",
          "translation": "a book whose verses are clear",
          "cells": [
            "كِتَابٌ",
            "آيَاتُ",
            "هُ",
            "بَيِّنَاتٌ"
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
                  "end": 3,
                  "role": "نَعْتٌ"
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
          "title": "رَجُلٌ دَارُهُ بَعِيْدَةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 7)",
          "sentence": "رَجُلٌ دَارُهُ بَعِيْدَةٌ",
          "translation": "a man whose home is far",
          "cells": [
            "رَجُلٌ",
            "دَارُ",
            "هُ",
            "بَعِيْدَةٌ"
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
                  "end": 3,
                  "role": "نَعْتٌ"
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
          "title": "اِمْرَأَةٌ أَوْلَادُهَا يَتَامَى",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 7)",
          "sentence": "اِمْرَأَةٌ أَوْلَادُهَا يَتَامَى",
          "translation": "a woman whose children are orphans",
          "cells": [
            "اِمْرَأَةٌ",
            "أَوْلَادُ",
            "هَا",
            "يَتَامَى"
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
                  "end": 3,
                  "role": "نَعْتٌ"
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
          "title": "نِسَاءٌ قُتِلَ أَزْوَاجُهُنَّ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 7)",
          "sentence": "نِسَاءٌ قُتِلَ أَزْوَاجُهُنَّ",
          "translation": "women whose husbands were killed",
          "cells": [
            "نِسَاءٌ",
            "قُتِلَ",
            "أَزْوَاجُ",
            "هُنَّ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "نَائِبُ فَاعِلٍ"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "شَابٌّ إِيْمَانُهُ قَوِيٌّ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 7)",
          "sentence": "شَابٌّ إِيْمَانُهُ قَوِيٌّ",
          "translation": "a youth whose faith is strong",
          "cells": [
            "شَابٌّ",
            "إِيْمَانُ",
            "هُ",
            "قَوِيٌّ"
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
                  "end": 3,
                  "role": "نَعْتٌ"
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
          "title": "مَسَاكِيْنُ مَالُهُمْ قَلِيْلٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 7)",
          "sentence": "مَسَاكِيْنُ مَالُهُمْ قَلِيْلٌ",
          "translation": "poor people with little wealth",
          "cells": [
            "مَسَاكِيْنُ",
            "مَالُ",
            "هُمْ",
            "قَلِيْلٌ"
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
                  "end": 3,
                  "role": "نَعْتٌ"
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
          "title": "مُعَلِّمٌ لَا نَفْهَمُ دَرْسَهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 7)",
          "sentence": "مُعَلِّمٌ لَا نَفْهَمُ دَرْسَهُ",
          "translation": "a teacher whose lesson we do not understand",
          "cells": [
            "مُعَلِّمٌ",
            "لَا",
            "نَفْهَمُ",
            "دَرْسَ",
            "هُ"
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
                  "end": 4,
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
                  "role": "حَرْفُ نَفْيٍ"
                },
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
            "حَرْفُ نَهْيٍ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "رَسُوْلٌ نَعْتَصِمُ بِسُنَّتِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 7)",
          "sentence": "رَسُوْلٌ نَعْتَصِمُ بِسُنَّتِهِ",
          "translation": "a messenger to whose way we hold fast",
          "cells": [
            "رَسُوْلٌ",
            "نَعْتَصِمُ",
            "بِ",
            "سُنَّتِ",
            "هِ"
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
                  "end": 4,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "مُؤْمِنُوْنَ تُقْبَلُ أَعْمَالُهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 7)",
          "sentence": "مُؤْمِنُوْنَ تُقْبَلُ أَعْمَالُهُمْ",
          "translation": "believers whose deeds are accepted",
          "cells": [
            "مُؤْمِنُوْنَ",
            "تُقْبَلُ",
            "أَعْمَالُ",
            "هُمْ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "نَائِبُ فَاعِلٍ"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "سُوْرَةٌ نَقْرَأُ آيَاتِهَا كُلَّ لَيْلَةٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 7)",
          "sentence": "سُوْرَةٌ نَقْرَأُ آيَاتِهَا كُلَّ لَيْلَةٍ",
          "translation": "a surah whose verses we read every night",
          "cells": [
            "سُوْرَةٌ",
            "نَقْرَأُ",
            "آيَاتِ",
            "هَا",
            "كُلَّ",
            "لَيْلَةٍ"
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
                  "end": 5,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
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
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "رَجُلٌ لَا يَتْرُكُ وَلَدُهُ الصَّلَاةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 7)",
          "sentence": "رَجُلٌ لَا يَتْرُكُ وَلَدُهُ الصَّلَاةَ",
          "translation": "a man whose son does not leave the prayer",
          "cells": [
            "رَجُلٌ",
            "لَا",
            "يَتْرُكُ",
            "وَلَدُ",
            "هُ",
            "الصَّلَاةَ"
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
                  "end": 5,
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
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "فَاعِلٌ"
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
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In كِتَابٌ آيَاتُهُ بَيِّنَاتٌ, what is بَيِّنَاتٌ?",
          "options": [
            "A نَعْت of آيَاتُهُ",
            "The خَبَر of the nested nominal sentence",
            "The مُبْتَدَأ",
            "A حَال"
          ],
          "correct": 1,
          "explanation": "آيَاتُهُ is the مُبْتَدَأ, and بَيِّنَاتٌ tells us about it."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In نِسَاءٌ قُتِلَ أَزْوَاجُهُنَّ, why is أَزْوَاجُهُنَّ مَرْفُوْع?",
          "options": [
            "It is the فَاعِل of قُتِلَ",
            "It is the نَائِبُ فَاعِلٍ, since قُتِلَ is مَجْهُوْل",
            "It is a مُبْتَدَأ",
            "It is a بَدَل of نِسَاءٌ"
          ],
          "correct": 1,
          "explanation": "No killer is named, so the husbands step into the subject slot; the هُنَّ is the عَائِد."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In اِمْرَأَةٌ أَوْلَادُهَا يَتَامَى, what is the عَائِد and what is its slot?",
          "options": [
            "أَوْلَادُ, the مُبْتَدَأ",
            "هَا, the مُضَافٌ إِلَيْهِ of أَوْلَاد",
            "يَتَامَى, the خَبَر",
            "There is none"
          ],
          "correct": 1,
          "explanation": "The attached هَا refers back to the woman and is مُضَافٌ إِلَيْهِ within the مُبْتَدَأ."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "Give the natural rendering of مَسَاكِيْنُ مَالُهُمْ قَلِيْلٌ.",
          "options": [
            "poor people whose wealth is little",
            "poor people with little wealth",
            "the little wealth of poor people",
            "poor people and their little wealth"
          ],
          "correct": 1,
          "explanation": "The first option is the literal step-4 version; the adjustment gives the second."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In رَسُوْلٌ نَعْتَصِمُ بِسُنَّتِهِ, where does the عَائِد sit?",
          "options": [
            "As the فَاعِل of نَعْتَصِمُ",
            "As the مُضَافٌ إِلَيْهِ of سُنَّة, inside the جَارّ وَمَجْرُوْر",
            "As the مَفْعُوْلٌ بِهِ",
            "There is none"
          ],
          "correct": 1,
          "explanation": "The هِ on سُنَّة refers back to the Messenger ﷺ — 'a messenger to whose way we hold fast'."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In سُوْرَةٌ نَقْرَأُ آيَاتِهَا كُلَّ لَيْلَةٍ, what is كُلَّ لَيْلَةٍ?",
          "options": [
            "A مَفْعُوْلٌ بِهِ ثَانٍ",
            "A مَفْعُوْلٌ فِيْهِ inside the نَعْت sentence",
            "A نَعْت of آيَاتِهَا",
            "A حَال"
          ],
          "correct": 1,
          "explanation": "The نَعْت sentence carries its own adverbial of time — 'whose verses we read every night'."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In رَجُلٌ لَا يَتْرُكُ وَلَدُهُ الصَّلَاةَ, who leaves the prayer?",
          "options": [
            "The man",
            "No one — the sentence is negative, and the son is the one who does not",
            "The prayer leaves the man",
            "The sentence does not say"
          ],
          "correct": 1,
          "explanation": "وَلَدُهُ is the doer of يَتْرُكُ, so the description belongs to the man through his son."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "How does an عَائِد that is a مُضَافٌ إِلَيْهِ differ from one that is a مَفْعُوْلٌ بِهِ?",
          "options": [
            "It is attached to a noun rather than to a verb",
            "It is always hidden",
            "It appears only in negative sentences",
            "It is مَرْفُوْع rather than مَجْرُوْر"
          ],
          "correct": 0,
          "explanation": "An attached pronoun on the verb is an object; on a noun it is a مُضَافٌ إِلَيْهِ."
        },
        {
          "title": "verse, sign",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"verse, sign\"?",
          "options": [
            "آيَةٌ",
            "شَابٌّ",
            "مِسْكِيْنٌ",
            "سُنَّةٌ"
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
            "young man",
            "poor person",
            "way, practice"
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
            "شَبَابٌ",
            "مَسَاكِيْنُ",
            "سُنَنٌ"
          ],
          "correct": 0
        },
        {
          "title": "orphan",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"orphan\"?",
          "options": [
            "يَتِيْمٌ",
            "إِيْمَانٌ",
            "مَالٌ",
            "سُوْرَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "orphan",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَتِيْمٌ mean?",
          "options": [
            "orphan",
            "faith",
            "wealth",
            "surah"
          ],
          "correct": 0
        },
        {
          "title": "orphan (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of يَتِيْمٌ?",
          "options": [
            "يَتَامَى",
            "—",
            "أَمْوَالٌ",
            "سُوَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "husband, spouse",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"husband, spouse\"?",
          "options": [
            "زَوْجٌ",
            "مِسْكِيْنٌ",
            "سُنَّةٌ",
            "بَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "husband, spouse",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does زَوْجٌ mean?",
          "options": [
            "husband, spouse",
            "poor person",
            "way, practice",
            "door"
          ],
          "correct": 0
        },
        {
          "title": "husband, spouse (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of زَوْجٌ?",
          "options": [
            "أَزْوَاجٌ",
            "مَسَاكِيْنُ",
            "سُنَنٌ",
            "أَبْوَابٌ"
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
            "مَالٌ",
            "سُوْرَةٌ",
            "فَتَحَ يَفْتَحُ"
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
            "wealth",
            "surah",
            "to open"
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
            "أَمْوَالٌ",
            "سُوَرٌ",
            "آيَاتٌ"
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
            "سُنَّةٌ",
            "بَابٌ",
            "فَهِمَ يَفْهَمُ"
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
            "way, practice",
            "door",
            "to understand"
          ],
          "correct": 0
        },
        {
          "title": "faith (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of إِيْمَانٌ?",
          "options": [
            "—",
            "سُنَنٌ",
            "أَبْوَابٌ",
            "يَتَامَى"
          ],
          "correct": 0
        },
        {
          "title": "poor person",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"poor person\"?",
          "options": [
            "مِسْكِيْنٌ",
            "سُوْرَةٌ",
            "فَتَحَ يَفْتَحُ",
            "اِعْتَصَمَ يَعْتَصِمُ"
          ],
          "correct": 0
        },
        {
          "title": "poor person",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مِسْكِيْنٌ mean?",
          "options": [
            "poor person",
            "surah",
            "to open",
            "to hold fast to"
          ],
          "correct": 0
        },
        {
          "title": "poor person (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مِسْكِيْنٌ?",
          "options": [
            "مَسَاكِيْنُ",
            "سُوَرٌ",
            "آيَاتٌ",
            "أَزْوَاجٌ"
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
            "بَابٌ",
            "فَهِمَ يَفْهَمُ",
            "قَبِلَ يَقْبَلُ"
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
            "door",
            "to understand",
            "to accept"
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
            "أَبْوَابٌ",
            "يَتَامَى",
            "شَبَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "way, practice",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"way, practice\"?",
          "options": [
            "سُنَّةٌ",
            "فَتَحَ يَفْتَحُ",
            "اِعْتَصَمَ يَعْتَصِمُ",
            "آيَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "way, practice",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سُنَّةٌ mean?",
          "options": [
            "way, practice",
            "to open",
            "to hold fast to",
            "verse, sign"
          ],
          "correct": 0
        },
        {
          "title": "way, practice (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سُنَّةٌ?",
          "options": [
            "سُنَنٌ",
            "آيَاتٌ",
            "أَزْوَاجٌ",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "surah",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"surah\"?",
          "options": [
            "سُوْرَةٌ",
            "فَهِمَ يَفْهَمُ",
            "قَبِلَ يَقْبَلُ",
            "يَتِيْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "surah",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سُوْرَةٌ mean?",
          "options": [
            "surah",
            "to understand",
            "to accept",
            "orphan"
          ],
          "correct": 0
        },
        {
          "title": "surah (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سُوْرَةٌ?",
          "options": [
            "سُوَرٌ",
            "يَتَامَى",
            "شَبَابٌ",
            "مَسَاكِيْنُ"
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
            "اِعْتَصَمَ يَعْتَصِمُ",
            "آيَةٌ",
            "زَوْجٌ"
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
            "to hold fast to",
            "verse, sign",
            "husband, spouse"
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
            "أَزْوَاجٌ",
            "—",
            "أَمْوَالٌ"
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
            "قَبِلَ يَقْبَلُ",
            "يَتِيْمٌ",
            "شَابٌّ"
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
            "to accept",
            "orphan",
            "young man"
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
            "فَهْمًا",
            "قَبُوْلًا",
            "اِعْتِصَامًا"
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
            "آيَةٌ",
            "زَوْجٌ",
            "إِيْمَانٌ"
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
            "verse, sign",
            "husband, spouse",
            "faith"
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
            "اِعْتِصَامًا",
            "فَتْحًا",
            "قَبُوْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to hold fast to",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hold fast to\"?",
          "options": [
            "اِعْتَصَمَ يَعْتَصِمُ",
            "يَتِيْمٌ",
            "شَابٌّ",
            "مِسْكِيْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "to hold fast to",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِعْتَصَمَ يَعْتَصِمُ mean?",
          "options": [
            "to hold fast to",
            "orphan",
            "young man",
            "poor person"
          ],
          "correct": 0
        },
        {
          "title": "to hold fast to (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِعْتَصَمَ يَعْتَصِمُ?",
          "options": [
            "اِعْتِصَامًا",
            "قَبُوْلًا",
            "فَهْمًا",
            "فَتْحًا"
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
            "زَوْجٌ",
            "إِيْمَانٌ",
            "مَالٌ"
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
            "husband, spouse",
            "faith",
            "wealth"
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
            "فَتْحًا",
            "اِعْتِصَامًا",
            "فَهْمًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l4",
      "title": "العائد مجرورًا",
      "subtitle": "Part 7: The نَعْتٌ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Rule",
          "lines": [
            {
              "html": "The عَائِدٌ in the نَعْت sentence can be the مَجْرُوْرٌ of a حَرْفُ جَرٍّ, or the مُضَافٌ إِلَيْهِ of a ظَرْفٌ. It can either be a person or a thing.",
              "list": false
            },
            {
              "html": "These two are grouped together because they behave alike in English: in both, the pronoun is governed by a word that must come along with it into the translation.",
              "list": false
            },
            {
              "html": "رَجُلٌ قَرَأْتُ مَعَهُ — a man whom I read with",
              "list": true,
              "bullet": true
            },
            {
              "html": "كِتَابٌ قَرَأْتُ مِنْهُ — a book which I read from",
              "list": true,
              "bullet": true
            },
            {
              "table": {
                "title": "The Four Steps",
                "headers": [
                  "Step",
                  "رَجُلٌ قَرَأْتُ مَعَهُ",
                  "كِتَابٌ قَرَأْتُ مِنْهُ"
                ],
                "rows": [
                  [
                    "1. Translate the نَعْت sentence on its own",
                    "I read with him",
                    "I read from it"
                  ],
                  [
                    "2. Add 'whom' or 'who' for a person, 'which' or 'that' for a thing",
                    "whom I read with him",
                    "that / which I read from it"
                  ],
                  [
                    "3. Remove the translation of the عَائِد",
                    "whom I read with",
                    "that / which I read from"
                  ],
                  [
                    "4. Add the translation of the مَنْعُوْت",
                    "a man whom I read with",
                    "a book which I read from"
                  ]
                ]
              }
            },
            {
              "html": "Notice what survives step 3. The pronoun goes, but the preposition or adverb stays behind — 'whom I read with', not 'whom I read'. Without it the phrase would say something different.",
              "list": false
            },
            {
              "html": "The translation of the حَرْفُ جَارٌّ or ظَرْفٌ can also be brought before the relative pronoun, which gives the more formal English register.",
              "list": false
            },
            {
              "table": {
                "title": "Two Word Orders in English",
                "headers": [
                  "Arabic",
                  "Preposition last",
                  "Preposition first"
                ],
                "rows": [
                  [
                    "كِتَابٌ قَرَأْتُ مِنْهُ",
                    "a book which I read from",
                    "a book from which I read"
                  ],
                  [
                    "رَجُلٌ قَرَأْتُ مَعَهُ",
                    "a man whom I read with",
                    "a man with whom I read"
                  ]
                ]
              }
            },
            {
              "tarkeebDiagram": {
                "sentence": "كِتَابٌ قَرَأْتُ مِنْهُ",
                "translation": "a book from which I read",
                "cells": [
                  "كِتَابٌ",
                  "قَرَأْتُ",
                  "مِنْ",
                  "هُ"
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
                        "end": 3,
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
                        "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
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
                ]
              }
            },
            {
              "tarkeebDiagram": {
                "sentence": "رَجُلٌ قَرَأْتُ مَعَهُ",
                "translation": "a man with whom I read",
                "cells": [
                  "رَجُلٌ",
                  "قَرَأْتُ",
                  "مَعَ",
                  "هُ"
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
                        "end": 3,
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
                        "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
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
                  }
                ]
              }
            },
            {
              "html": "The difference between the two diagrams is only in the green row. مِنْ is a حَرْفُ جَرٍّ, so it gives جَارٌّ and مَجْرُوْرٌ; مَعَ is a ظَرْف, so it gives مُضَافٌ and مُضَافٌ إِلَيْهِ. The English treatment is identical.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In a نَعْت sentence, when does the preposition (like مَعَ or مِنْ) survive into the English translation, and when is it dropped؟",
            "kind": "mcq",
            "options": [
              "It survives when the جَارّ وَمَجْرُوْر is a real adverbial (e.g. 'a book from which I read'), but is dropped when it is really the verb's مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ (e.g. 'a book that they rejected')",
              "It always survives, without exception",
              "It is always dropped, without exception",
              "It depends only on whether the referent is human"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The Note — When the جَارّ وَمَجْرُوْر Is the Object",
          "lines": [
            {
              "html": "When the جَارٌّ وَمَجْرُوْرٌ become the مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ, they will be translated as though the عَائِدٌ is the مَفْعُوْلٌ بِهِ. That is, the preposition disappears from the English entirely.",
              "list": false
            },
            {
              "html": "وَلَدٌ نَصَحْتُ لَهُ — a boy whom I advised",
              "list": true,
              "bullet": true
            },
            {
              "html": "كِتَابٌ كَفَرُوْا بِهِ — a book that they rejected",
              "list": true,
              "bullet": true
            },
            {
              "html": "Some Arabic verbs reach their object through a preposition where the English verb does not need one. نَصَحَ takes لِ and كَفَرَ takes بِ, but 'advise' and 'reject' take a direct object in English. So the لَ and the بِ have nothing to correspond to, and are simply dropped.",
              "list": false
            },
            {
              "table": {
                "title": "Which Prepositions Survive the Translation",
                "headers": [
                  "Case",
                  "Example",
                  "English"
                ],
                "rows": [
                  [
                    "The جَارّ وَمَجْرُوْر is a real adverbial",
                    "كِتَابٌ قَرَأْتُ مِنْهُ",
                    "'a book from which I read' — 'from' stays"
                  ],
                  [
                    "The جَارّ وَمَجْرُوْر is the verb's object",
                    "كِتَابٌ كَفَرُوْا بِهِ",
                    "'a book that they rejected' — 'with' would be wrong"
                  ]
                ]
              }
            },
            {
              "html": "The test is whether the English verb needs the preposition. 'I read from the book' does; 'they rejected in the book' does not. When in doubt, translate the نَعْت sentence as a plain sentence first and see which preposition English actually wants.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Why does وَلَدٌ نَصَحْتُ لَهُ translate as 'a boy whom I advised' rather than 'a boy whom I advised to/for'؟",
            "kind": "mcq",
            "options": [
              "Because لَهُ is really the مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ of نَصَحَ, and the English verb 'advise' takes a direct object with no preposition needed",
              "Because لِ is never translated in Arabic",
              "Because وَلَدٌ is مَعْرِفَةٌ",
              "Because the verb is مَجْهُوْلٌ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The عَائِد after a Preposition or an Adverb",
        "rows": [
          {
            "label": "Two shapes, one treatment",
            "arabic": "مَجْرُوْرُ حَرْفِ جَرٍّ أَوْ مُضَافُ إِلَيْهِ ظَرْفٍ",
            "meaning": "A pronoun governed by a حَرْفُ جَرٍّ, or one attached to a ظَرْف — both behave alike in English."
          },
          {
            "label": "What survives step 3",
            "arabic": "يَبْقَى الْحَرْفُ",
            "meaning": "The pronoun goes, but the preposition or adverb stays: 'whom I read with'."
          },
          {
            "label": "Two word orders",
            "arabic": "قَبْلَ الِاسْمِ الْمَوْصُوْلِ أَوْ بَعْدَهُ",
            "meaning": "'a book which I read from' and 'a book from which I read' are both correct."
          },
          {
            "label": "The green row",
            "arabic": "جَارٌّ وَمَجْرُوْرٌ / مُضَافٌ وَمُضَافٌ إِلَيْهِ",
            "meaning": "مِنْ gives the first pair; مَعَ and بَعْدَ, being ظُرُوْف, give the second."
          },
          {
            "label": "The Note",
            "arabic": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ",
            "meaning": "When the جَارّ وَمَجْرُوْر is the verb's object, translate as though the عَائِد were a plain object."
          },
          {
            "label": "The Note's examples",
            "arabic": "وَلَدٌ نَصَحْتُ لَهُ / كِتَابٌ كَفَرُوْا بِهِ",
            "meaning": "'a boy whom I advised' and 'a book that they rejected' — the preposition disappears."
          }
        ]
      },
      "quiz": [
        {
          "q": "Which two عَائِد slots behave alike in English?",
          "options": [
            "The فَاعِل and the مَفْعُوْلٌ بِهِ",
            "The مَجْرُوْر of a حَرْفُ جَرٍّ and the مُضَافٌ إِلَيْهِ of a ظَرْف",
            "The مُبْتَدَأ and the خَبَر",
            "The حَال and the تَمْيِيْز"
          ],
          "correct": 1,
          "explanation": "Both put the pronoun under a governing word that must come into the English with it."
        },
        {
          "q": "In رَجُلٌ قَرَأْتُ مَعَهُ, what happens to مَعَ in the English?",
          "options": [
            "It is dropped",
            "It becomes 'and'",
            "It stays as 'with', either after the verb or before the relative pronoun",
            "It becomes a verb"
          ],
          "correct": 2,
          "explanation": "'a man whom I read with' or 'a man with whom I read' — both keep it."
        },
        {
          "q": "What is the difference between the green rows of كِتَابٌ قَرَأْتُ مِنْهُ and رَجُلٌ قَرَأْتُ مَعَهُ?",
          "options": [
            "There is none",
            "The first gives جَارٌّ / مَجْرُوْرٌ, the second مُضَافٌ / مُضَافٌ إِلَيْهِ",
            "The first has no green row",
            "The second is مَجْهُوْل"
          ],
          "correct": 1,
          "explanation": "مِنْ is a حَرْفُ جَرٍّ; مَعَ is a ظَرْف and takes a مُضَافٌ إِلَيْهِ."
        },
        {
          "q": "Why does the preposition vanish in the English translation of كِتَابٌ كَفَرُوْا بِهِ?",
          "options": [
            "Because بِ is always dropped",
            "Because the جَارّ وَمَجْرُوْر is the verb's object, and English 'reject' needs no preposition",
            "Because the sentence is plural",
            "Because كِتَاب is a thing"
          ],
          "correct": 1,
          "explanation": "Arabic كَفَرَ reaches its object through بِ; English does not."
        },
        {
          "q": "Translate وَلَدٌ نَصَحْتُ لَهُ.",
          "options": [
            "a boy to whom I advised",
            "a boy who advised me",
            "a boy for whose sake I advised",
            "a boy whom I advised"
          ],
          "correct": 3,
          "explanation": "نَصَحَ لِ takes its object through لِ, but English 'advise' is transitive."
        },
        {
          "q": "What is the practical test for whether the preposition should appear in the English?",
          "options": [
            "Whether the مَنْعُوْت is a person",
            "Whether the verb is مَاضٍ",
            "Whether the English verb itself needs that preposition",
            "Whether the sentence is negative"
          ],
          "correct": 2,
          "explanation": "'I read from the book' needs 'from'; 'they rejected the book' needs nothing."
        }
      ],
      "bank": [
        {
          "title": "رَجُلٌ قَرَأْتُ مَعَهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 464 (Section 1, Part 7)",
          "sentence": "رَجُلٌ قَرَأْتُ مَعَهُ",
          "translation": "a man with whom I read",
          "cells": [
            "رَجُلٌ",
            "قَرَأْتُ",
            "مَعَ",
            "هُ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
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
            }
          ],
          "distractors": [
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "كِتَابٌ قَرَأْتُ مِنْهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 464 (Section 1, Part 7)",
          "sentence": "كِتَابٌ قَرَأْتُ مِنْهُ",
          "translation": "a book from which I read",
          "cells": [
            "كِتَابٌ",
            "قَرَأْتُ",
            "مِنْ",
            "هُ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
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
            "خَبَرٌ",
            "مُضَافٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "وَلَدٌ نَصَحْتُ لَهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 464, Note (Section 1, Part 7)",
          "sentence": "وَلَدٌ نَصَحْتُ لَهُ",
          "translation": "a boy whom I advised",
          "cells": [
            "وَلَدٌ",
            "نَصَحْتُ",
            "لَ",
            "هُ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
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
            "مَفْعُوْلٌ فِيْهِ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "كِتَابٌ كَفَرُوْا بِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 464, Note (Section 1, Part 7)",
          "sentence": "كِتَابٌ كَفَرُوْا بِهِ",
          "translation": "a book that they rejected",
          "cells": [
            "كِتَابٌ",
            "كَفَرُوْا",
            "بِ",
            "هِ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
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
            "مَفْعُوْلٌ فِيْهِ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "بَيْتٌ نَطُوْفُ بِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 7)",
          "sentence": "بَيْتٌ نَطُوْفُ بِهِ",
          "translation": "a house around which we circumambulate",
          "cells": [
            "بَيْتٌ",
            "نَطُوْفُ",
            "بِ",
            "هِ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
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
            "مَفْعُوْلٌ فِيْهِ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "ذُنُوْبٌ تُبْنَا مِنْهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 7)",
          "sentence": "ذُنُوْبٌ تُبْنَا مِنْهَا",
          "translation": "sins from which we repented",
          "cells": [
            "ذُنُوْبٌ",
            "تُبْنَا",
            "مِنْ",
            "هَا"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
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
            "مَفْعُوْلٌ فِيْهِ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "كِتَابٌ نَعْتَصِمُ بِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 7)",
          "sentence": "كِتَابٌ نَعْتَصِمُ بِهِ",
          "translation": "a book to which we hold fast",
          "cells": [
            "كِتَابٌ",
            "نَعْتَصِمُ",
            "بِ",
            "هِ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
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
            "مَفْعُوْلٌ فِيْهِ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "رَبٌّ لَا نُشْرِكُ بِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 7)",
          "sentence": "رَبٌّ لَا نُشْرِكُ بِهِ",
          "translation": "a Lord with whom we associate no partner",
          "cells": [
            "رَبٌّ",
            "لَا",
            "نُشْرِكُ",
            "بِ",
            "هِ"
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
                  "end": 4,
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
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
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
            "حَرْفُ نَهْيٍ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "تِلَاوَةٌ بَكَيْنَا بَعْدَهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 7)",
          "sentence": "تِلَاوَةٌ بَكَيْنَا بَعْدَهَا",
          "translation": "a recitation after which we wept",
          "cells": [
            "تِلَاوَةٌ",
            "بَكَيْنَا",
            "بَعْدَ",
            "هَا"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
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
            }
          ],
          "distractors": [
            "جَارٌّ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "أَشْيَاءُ نَغْضَبُ مِنْهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 7)",
          "sentence": "أَشْيَاءُ نَغْضَبُ مِنْهَا",
          "translation": "things at which we become angry",
          "cells": [
            "أَشْيَاءُ",
            "نَغْضَبُ",
            "مِنْ",
            "هَا"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
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
            "مَفْعُوْلٌ فِيْهِ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "جَبَلَانِ نَنْظُرُ إِلَيْهِمَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 7)",
          "sentence": "جَبَلَانِ نَنْظُرُ إِلَيْهِمَا",
          "translation": "two mountains at which we look",
          "cells": [
            "جَبَلَانِ",
            "نَنْظُرُ",
            "إِلَيْ",
            "هِمَا"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
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
            "مَفْعُوْلٌ فِيْهِ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "مَصَائِبُ صَبَرْنَا عَلَيْهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 7)",
          "sentence": "مَصَائِبُ صَبَرْنَا عَلَيْهَا",
          "translation": "calamities over which we were patient",
          "cells": [
            "مَصَائِبُ",
            "صَبَرْنَا",
            "عَلَيْ",
            "هَا"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
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
            "مَفْعُوْلٌ فِيْهِ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "يَوْمٌ يُبْعَثُ فِيْهِ الْعِبَادُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 7)",
          "sentence": "يَوْمٌ يُبْعَثُ فِيْهِ الْعِبَادُ",
          "translation": "a day on which the servants will be resurrected",
          "cells": [
            "يَوْمٌ",
            "يُبْعَثُ",
            "فِيْ",
            "هِ",
            "الْعِبَادُ"
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
                  "end": 4,
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
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "نَائِبُ فَاعِلٍ"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "اِمْتِحَانٌ لَمْ نَنْجَحْ فِيْهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 7)",
          "sentence": "اِمْتِحَانٌ لَمْ نَنْجَحْ فِيْهِ",
          "translation": "an examination in which we did not succeed",
          "cells": [
            "اِمْتِحَانٌ",
            "لَمْ",
            "نَنْجَحْ",
            "فِيْ",
            "هِ"
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
                  "end": 4,
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
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
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
            "حَرْفُ نَهْيٍ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "بَابٌ دَخَلْنَا الْبَيْتَ مِنْهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 7)",
          "sentence": "بَابٌ دَخَلْنَا الْبَيْتَ مِنْهُ",
          "translation": "a door through which we entered the house",
          "cells": [
            "بَابٌ",
            "دَخَلْنَا",
            "الْبَيْتَ",
            "مِنْ",
            "هُ"
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
                  "end": 4,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In بَيْتٌ نَطُوْفُ بِهِ, what is the عَائِد?",
          "options": [
            "The hidden نَحْنُ in نَطُوْفُ",
            "The هِ governed by بِ",
            "بِ itself",
            "There is none"
          ],
          "correct": 1,
          "explanation": "The hidden نَحْنُ is the doer; the attached هِ refers back to the house."
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In ذُنُوْبٌ تُبْنَا مِنْهَا, what is تُبْنَا?",
          "options": [
            "A مَجْهُوْل verb",
            "A مَاضٍ verb with نَا as its فَاعِل",
            "A مُضَارِع verb",
            "An أَمْر verb"
          ],
          "correct": 1,
          "explanation": "تَابَ becomes تُبْنَا in the first person plural past — 'we repented'."
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In جَبَلَانِ نَنْظُرُ إِلَيْهِمَا, what does the هِمَا tell you?",
          "options": [
            "That the doer is dual",
            "That the مَنْعُوْت is dual — two mountains",
            "That the verb is مَجْهُوْل",
            "That the phrase is negative"
          ],
          "correct": 1,
          "explanation": "The عَائِد agrees with the مَنْعُوْت, and جَبَلَانِ is a dual."
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In يَوْمٌ يُبْعَثُ فِيْهِ الْعِبَادُ, why is الْعِبَادُ مَرْفُوْع?",
          "options": [
            "It is the فَاعِل of يُبْعَثُ",
            "It is the عَائِد",
            "It is the نَائِبُ فَاعِلٍ, since يُبْعَثُ is مَجْهُوْل",
            "It is a مُبْتَدَأ"
          ],
          "correct": 2,
          "explanation": "No raiser is named; the servants are the ones raised, and the عَائِد is the هِ after فِيْ."
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In بَابٌ دَخَلْنَا الْبَيْتَ مِنْهُ, what is الْبَيْتَ?",
          "options": [
            "The عَائِد",
            "The مَفْعُوْلٌ بِهِ of دَخَلْنَا",
            "The مَجْرُوْر of مِنْ",
            "A بَدَل of بَابٌ"
          ],
          "correct": 1,
          "explanation": "دَخَلَ takes a direct object; the جَارّ وَمَجْرُوْر مِنْهُ is the adverbial and carries the عَائِد."
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In تِلَاوَةٌ بَكَيْنَا بَعْدَهَا, what is بَعْدَ?",
          "options": [
            "A حَرْفُ جَرٍّ",
            "A ظَرْف, with the هَا as its مُضَافٌ إِلَيْهِ",
            "A حَرْفُ عَطْفٍ",
            "The فَاعِل"
          ],
          "correct": 1,
          "explanation": "This is the second of the two shapes the lesson groups together."
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In مُدُنٌ لَمْ نُسَافِرْ إِلَيْهَا, what does لَمْ do?",
          "options": [
            "Negates the مُضَارِع and makes it مَجْزُوْم and past in meaning",
            "Makes it مَنْصُوْب",
            "Turns it into a prohibition",
            "Makes it مَرْفُوْع"
          ],
          "correct": 0,
          "explanation": "'cities to which we have not travelled'."
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "The Note says that when the جَارّ وَمَجْرُوْر is the verb's own object, translate the عَائِد as a plain object instead of keeping the preposition. Which of these phrases follows that Note rather than the main rule?",
          "options": [
            "بَيْتٌ نَطُوْفُ بِهِ",
            "رَبٌّ لَا نُشْرِكُ بِهِ",
            "جَبَلَانِ نَنْظُرُ إِلَيْهِمَا",
            "يَوْمٌ يُبْعَثُ فِيْهِ الْعِبَادُ"
          ],
          "correct": 1,
          "explanation": "أَشْرَكَ بِ reaches its object through بِ, so the English is 'with whom we associate no partner' rather than a locational 'in'."
        },
        {
          "title": "mountain",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"mountain\"?",
          "options": [
            "جَبَلٌ",
            "شَيْءٌ",
            "رَبٌّ",
            "نَصَحَ يَنْصَحُ"
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
            "thing",
            "lord, master",
            "to advise"
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
            "أَشْيَاءُ",
            "أَرْبَابٌ",
            "اِمْتِحَانَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "city",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"city\"?",
          "options": [
            "مَدِيْنَةٌ",
            "ذَنْبٌ",
            "طَافَ يَطُوْفُ",
            "كَفَرَ يَكْفُرُ"
          ],
          "correct": 0
        },
        {
          "title": "city",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَدِيْنَةٌ mean?",
          "options": [
            "city",
            "sin",
            "to circumambulate",
            "to reject, to disbelieve"
          ],
          "correct": 0
        },
        {
          "title": "city (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَدِيْنَةٌ?",
          "options": [
            "مُدُنٌ",
            "ذُنُوْبٌ",
            "جِبَالٌ",
            "أَشْيَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "examination",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"examination\"?",
          "options": [
            "اِمْتِحَانٌ",
            "رَبٌّ",
            "نَصَحَ يَنْصَحُ",
            "صَبَرَ يَصْبِرُ"
          ],
          "correct": 0
        },
        {
          "title": "examination",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِمْتِحَانٌ mean?",
          "options": [
            "examination",
            "lord, master",
            "to advise",
            "to be patient"
          ],
          "correct": 0
        },
        {
          "title": "examination (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of اِمْتِحَانٌ?",
          "options": [
            "اِمْتِحَانَاتٌ",
            "أَرْبَابٌ",
            "مُدُنٌ",
            "ذُنُوْبٌ"
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
            "طَافَ يَطُوْفُ",
            "كَفَرَ يَكْفُرُ",
            "بَعَثَ يَبْعَثُ"
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
            "to circumambulate",
            "to reject, to disbelieve",
            "to resurrect, to send"
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
            "جِبَالٌ",
            "اِمْتِحَانَاتٌ",
            "أَرْبَابٌ"
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
            "نَصَحَ يَنْصَحُ",
            "صَبَرَ يَصْبِرُ",
            "نَجَحَ يَنْجَحُ"
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
            "to advise",
            "to be patient",
            "to succeed"
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
            "مُدُنٌ",
            "أَشْيَاءُ",
            "جِبَالٌ"
          ],
          "correct": 0
        },
        {
          "title": "lord, master",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"lord, master\"?",
          "options": [
            "رَبٌّ",
            "كَفَرَ يَكْفُرُ",
            "بَعَثَ يَبْعَثُ",
            "نَظَرَ يَنْظُرُ"
          ],
          "correct": 0
        },
        {
          "title": "lord, master",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَبٌّ mean?",
          "options": [
            "lord, master",
            "to reject, to disbelieve",
            "to resurrect, to send",
            "to look"
          ],
          "correct": 0
        },
        {
          "title": "lord, master (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رَبٌّ?",
          "options": [
            "أَرْبَابٌ",
            "اِمْتِحَانَاتٌ",
            "ذُنُوْبٌ",
            "مُدُنٌ"
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
            "صَبَرَ يَصْبِرُ",
            "نَجَحَ يَنْجَحُ",
            "جَبَلٌ"
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
            "to be patient",
            "to succeed",
            "mountain"
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
            "صَبْرًا",
            "نَجَاحًا",
            "نَصِيْحَةً"
          ],
          "correct": 0
        },
        {
          "title": "to advise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to advise\"?",
          "options": [
            "نَصَحَ يَنْصَحُ",
            "بَعَثَ يَبْعَثُ",
            "نَظَرَ يَنْظُرُ",
            "مَدِيْنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to advise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَصَحَ يَنْصَحُ mean?",
          "options": [
            "to advise",
            "to resurrect, to send",
            "to look",
            "city"
          ],
          "correct": 0
        },
        {
          "title": "to advise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَصَحَ يَنْصَحُ?",
          "options": [
            "نَصِيْحَةً",
            "بَعْثًا",
            "نَظَرًا",
            "كُفْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to reject, to disbelieve",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reject, to disbelieve\"?",
          "options": [
            "كَفَرَ يَكْفُرُ",
            "نَجَحَ يَنْجَحُ",
            "جَبَلٌ",
            "اِمْتِحَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "to reject, to disbelieve",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَفَرَ يَكْفُرُ mean?",
          "options": [
            "to reject, to disbelieve",
            "to succeed",
            "mountain",
            "examination"
          ],
          "correct": 0
        },
        {
          "title": "to reject, to disbelieve (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَفَرَ يَكْفُرُ?",
          "options": [
            "كُفْرًا",
            "نَجَاحًا",
            "طَوَافًا",
            "صَبْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to be patient",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be patient\"?",
          "options": [
            "صَبَرَ يَصْبِرُ",
            "نَظَرَ يَنْظُرُ",
            "مَدِيْنَةٌ",
            "شَيْءٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be patient",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَبَرَ يَصْبِرُ mean?",
          "options": [
            "to be patient",
            "to look",
            "city",
            "thing"
          ],
          "correct": 0
        },
        {
          "title": "to be patient (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَبَرَ يَصْبِرُ?",
          "options": [
            "صَبْرًا",
            "نَظَرًا",
            "نَصِيْحَةً",
            "بَعْثًا"
          ],
          "correct": 0
        },
        {
          "title": "to resurrect, to send",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to resurrect, to send\"?",
          "options": [
            "بَعَثَ يَبْعَثُ",
            "جَبَلٌ",
            "اِمْتِحَانٌ",
            "ذَنْبٌ"
          ],
          "correct": 0
        },
        {
          "title": "to resurrect, to send",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَعَثَ يَبْعَثُ mean?",
          "options": [
            "to resurrect, to send",
            "mountain",
            "examination",
            "sin"
          ],
          "correct": 0
        },
        {
          "title": "to resurrect, to send (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَعَثَ يَبْعَثُ?",
          "options": [
            "بَعْثًا",
            "طَوَافًا",
            "كُفْرًا",
            "نَجَاحًا"
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
            "مَدِيْنَةٌ",
            "شَيْءٌ",
            "رَبٌّ"
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
            "city",
            "thing",
            "lord, master"
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
            "نَصِيْحَةً",
            "صَبْرًا",
            "نَظَرًا"
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
            "اِمْتِحَانٌ",
            "ذَنْبٌ",
            "طَافَ يَطُوْفُ"
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
            "examination",
            "sin",
            "to circumambulate"
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
            "كُفْرًا",
            "بَعْثًا",
            "طَوَافًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l5",
      "title": "العائد في خبر مقدم",
      "subtitle": "Part 7: The نَعْتٌ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Rule",
          "lines": [
            {
              "html": "The عَائِدٌ in the نَعْت sentence can occur within the خَبَرٌ مُقَدَّمٌ. This is the fifth and last of the slots the book works through.",
              "list": false
            },
            {
              "html": "The shape is a nominal sentence whose خَبَر has been brought forward — a جَارّ وَمَجْرُوْر or a ظَرْف carrying the عَائِد — with the مُبْتَدَأ, an indefinite noun, following behind it.",
              "list": false
            },
            {
              "html": "رَجُلٌ عَلَيْهِ دَيْنٌ — a man who has a loan on him",
              "list": true,
              "bullet": true
            },
            {
              "html": "كِتَابٌ فِيْهِ قِصَصٌ — a book which has stories in it",
              "list": true,
              "bullet": true
            },
            {
              "table": {
                "title": "The Four Steps",
                "headers": [
                  "Step",
                  "رَجُلٌ عَلَيْهِ دَيْنٌ",
                  "كِتَابٌ فِيْهِ قِصَصٌ"
                ],
                "rows": [
                  [
                    "1. Translate the نَعْت sentence on its own",
                    "there is a loan on him",
                    "there are stories in it"
                  ],
                  [
                    "2. Add 'who' for a person, 'which' or 'that' for a thing",
                    "who there is a loan on him",
                    "which there are stories in it"
                  ],
                  [
                    "3. Replace 'there is / are' with 'has'",
                    "who has a loan on him",
                    "which has stories in it"
                  ],
                  [
                    "4. Add the translation of the مَنْعُوْت",
                    "a man who has a loan on him",
                    "a book which has stories in it"
                  ]
                ]
              }
            },
            {
              "html": "Step 3 is what marks this case out. In the earlier lessons step 3 removed the pronoun; here it replaces the English existential 'there is / there are' with 'has'. The Arabic has no verb 'to have', and this construction is exactly how it does the work of one.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "رَجُلٌ عَلَيْهِ دَيْنٌ",
                "translation": "a man who has a loan on him",
                "cells": [
                  "رَجُلٌ",
                  "عَلَيْ",
                  "هِ",
                  "دَيْنٌ"
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
                        "end": 3,
                        "role": "نَعْتٌ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 2,
                        "role": "خَبَرٌ مُقَدَّمٌ"
                      },
                      {
                        "start": 3,
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
                        "role": "جَارٌّ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "مَجْرُوْرٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Why must the خَبَر come first? Because the مُبْتَدَأ here is نَكِرَة — دَيْنٌ, قِصَصٌ, مَالٌ — and an indefinite مُبْتَدَأ cannot open a sentence. Fronting the خَبَر resolves it, which is why the construction always appears in this order.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Why must the خَبَر come first (خَبَرٌ مُقَدَّمٌ) in a نَعْت sentence like رَجُلٌ عَلَيْهِ دَيْنٌ؟",
            "kind": "mcq",
            "options": [
              "Because the مُبْتَدَأ (دَيْنٌ) is نَكِرَةٌ, and an indefinite مُبْتَدَأ cannot open a sentence — fronting the خَبَر resolves it",
              "Because عَلَيْهِ is always fronted in Arabic",
              "Because رَجُلٌ requires it",
              "There is no requirement — the order is free"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The Alternative Rendering",
          "lines": [
            {
              "html": "The translation of the حَرْفُ جَارٌّ or ظَرْفٌ can be brought before the relative pronoun, exactly as in the previous lesson. In this case, the words 'there is / are' will not be replaced, and the relative pronoun 'whom' will be used instead of 'who'.",
              "list": false
            },
            {
              "table": {
                "title": "Two Renderings Side by Side",
                "headers": [
                  "Arabic",
                  "With 'has'",
                  "With the preposition fronted"
                ],
                "rows": [
                  [
                    "رَجُلٌ عَلَيْهِ دَيْنٌ",
                    "a man who has a loan on him",
                    "a man on / upon whom there is a loan"
                  ],
                  [
                    "كِتَابٌ فِيْهِ قِصَصٌ",
                    "a book which has stories in it",
                    "a book in which there are stories"
                  ]
                ]
              }
            },
            {
              "html": "Both are correct and the choice is one of register. The 'has' version reads more naturally; the fronted version keeps the Arabic structure visible and is often clearer when the phrase is long.",
              "list": false
            },
            {
              "html": "أَرْضٌ فَوْقَهَا جِبَالٌ — land which has mountains above it",
              "list": true,
              "bullet": true
            },
            {
              "html": "رَبٌّ لَيْسَ لَهُ شَرِيْكٌ — a Lord who has no partner",
              "list": true,
              "bullet": true
            },
            {
              "html": "لَيْسَ turns the same construction negative. Its خَبَر is fronted just as an ordinary خَبَر would be — لَهُ — and its اِسْم follows: شَرِيْكٌ. Step 3 then gives 'has no' rather than 'has'.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What does step 3 of the translation method do differently here compared with the فَاعِلٌ/مَفْعُوْلٌ بِهِ cases؟",
            "kind": "mcq",
            "options": [
              "It replaces the English existential 'there is/are' with 'has', since Arabic has no verb 'to have'",
              "It removes the عَائِد, exactly as before",
              "It adds 'whose' instead of 'who'",
              "It reverses the word order of the whole phrase"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The عَائِد in a خَبَرٌ مُقَدَّمٌ",
        "rows": [
          {
            "label": "The shape",
            "arabic": "خَبَرٌ مُقَدَّمٌ + مُبْتَدَأٌ مُؤَخَّرٌ",
            "meaning": "A جَارّ وَمَجْرُوْر or ظَرْف carrying the عَائِد, followed by an indefinite noun."
          },
          {
            "label": "Why this order",
            "arabic": "الْمُبْتَدَأُ نَكِرَةٌ",
            "meaning": "An indefinite مُبْتَدَأ cannot open a sentence, so the خَبَر is brought forward."
          },
          {
            "label": "Step 3 here",
            "arabic": "there is / are ← has",
            "meaning": "Rather than removing the pronoun, this step swaps the English existential for 'has'."
          },
          {
            "label": "The result",
            "arabic": "رَجُلٌ عَلَيْهِ دَيْنٌ",
            "meaning": "'a man who has a loan on him'."
          },
          {
            "label": "The alternative",
            "arabic": "تَقْدِيْمُ الْحَرْفِ",
            "meaning": "Front the preposition, keep 'there is / are', and use 'whom': 'a man on whom there is a loan'."
          },
          {
            "label": "With لَيْسَ",
            "arabic": "رَبٌّ لَيْسَ لَهُ شَرِيْكٌ",
            "meaning": "لَيْسَ negates the construction: its خَبَر is fronted and its اِسْم follows — 'a Lord who has no partner'."
          }
        ]
      },
      "quiz": [
        {
          "q": "In رَجُلٌ عَلَيْهِ دَيْنٌ, what is دَيْنٌ?",
          "options": [
            "The خَبَرٌ مُقَدَّمٌ",
            "The عَائِد",
            "The مُبْتَدَأٌ مُؤَخَّرٌ",
            "A نَعْت of رَجُلٌ"
          ],
          "correct": 2,
          "explanation": "The جَارّ وَمَجْرُوْر عَلَيْهِ is the fronted خَبَر, and دَيْنٌ the delayed مُبْتَدَأ."
        },
        {
          "q": "In رَجُلٌ عَلَيْهِ دَيْنٌ, why is the خَبَر (عَلَيْهِ) brought forward before the مُبْتَدَأ (دَيْنٌ)?",
          "options": [
            "Because the عَائِد must come first",
            "Because an indefinite مُبْتَدَأ cannot open a sentence",
            "Because the sentence is a نَعْت",
            "For emphasis only"
          ],
          "correct": 1,
          "explanation": "دَيْنٌ, قِصَصٌ and مَالٌ are all نَكِرَة, so the order is forced."
        },
        {
          "q": "In رَجُلٌ عَلَيْهِ دَيْنٌ ('a man who has a loan on him'), what does the translation method do instead of removing the عَائِد's translation?",
          "options": [
            "Removes the translation of the عَائِد",
            "Adds the relative pronoun",
            "Replaces 'there is / are' with 'has'",
            "Adds the مَنْعُوْت"
          ],
          "correct": 2,
          "explanation": "'who there is a loan on him' becomes 'who has a loan on him'."
        },
        {
          "q": "In the alternative rendering, what changes?",
          "options": [
            "The preposition is fronted, 'there is / are' is kept, and 'whom' replaces 'who'",
            "The Arabic word order changes",
            "The عَائِد is removed from the Arabic",
            "The مَنْعُوْت becomes definite"
          ],
          "correct": 0,
          "explanation": "'a man on whom there is a loan' — the same sentence in a more formal register."
        },
        {
          "q": "In رَبٌّ لَيْسَ لَهُ شَرِيْكٌ, what is شَرِيْكٌ?",
          "options": [
            "The خَبَرُ لَيْسَ",
            "The اِسْمُ لَيْسَ, delayed after the fronted خَبَر",
            "The عَائِد",
            "A نَعْت of رَبٌّ"
          ],
          "correct": 1,
          "explanation": "لَهُ is the fronted خَبَر of لَيْسَ, and شَرِيْكٌ its اِسْم."
        },
        {
          "q": "How does Arabic express 'to have' in these phrases?",
          "options": [
            "With a dedicated verb",
            "With a جَارّ وَمَجْرُوْر or ظَرْف as a fronted خَبَر",
            "With كَانَ",
            "With a مَصْدَر"
          ],
          "correct": 1,
          "explanation": "There is no verb 'to have'; لَهُ, عِنْدَهُ, مَعَهُ and their like do the work."
        }
      ],
      "bank": [
        {
          "title": "رَجُلٌ عَلَيْهِ دَيْنٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 465 (Section 1, Part 7)",
          "sentence": "رَجُلٌ عَلَيْهِ دَيْنٌ",
          "translation": "a man who has a loan on him",
          "cells": [
            "رَجُلٌ",
            "عَلَيْ",
            "هِ",
            "دَيْنٌ"
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
                  "end": 3,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 2,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 3,
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
                  "role": "جَارٌّ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَجْرُوْرٌ"
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
          "title": "كِتَابٌ فِيْهِ قِصَصٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 465 (Section 1, Part 7)",
          "sentence": "كِتَابٌ فِيْهِ قِصَصٌ",
          "translation": "a book which has stories in it",
          "cells": [
            "كِتَابٌ",
            "فِيْ",
            "هِ",
            "قِصَصٌ"
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
                  "end": 3,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 2,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 3,
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
                  "role": "جَارٌّ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "رَجُلٌ لَهُ مَالٌ كَثِيْرٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 7)",
          "sentence": "رَجُلٌ لَهُ مَالٌ كَثِيْرٌ",
          "translation": "a man who has much wealth",
          "cells": [
            "رَجُلٌ",
            "لَ",
            "هُ",
            "مَالٌ",
            "كَثِيْرٌ"
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
                  "end": 4,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 2,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُبْتَدَأٌ مُؤَخَّرٌ"
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
            }
          ],
          "distractors": [
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "بَابٌ أَمَامَهُ كُرْسِيَّانِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 7)",
          "sentence": "بَابٌ أَمَامَهُ كُرْسِيَّانِ",
          "translation": "a door which has two chairs in front of it",
          "cells": [
            "بَابٌ",
            "أَمَامَ",
            "هُ",
            "كُرْسِيَّانِ"
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
                  "end": 3,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 2,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 3,
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
            }
          ],
          "distractors": [
            "جَارٌّ",
            "مَجْرُوْرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "دَرْسٌ بَعْدَهُ صَلَاةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 7)",
          "sentence": "دَرْسٌ بَعْدَهُ صَلَاةٌ",
          "translation": "a lesson after which there is a prayer",
          "cells": [
            "دَرْسٌ",
            "بَعْدَ",
            "هُ",
            "صَلَاةٌ"
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
                  "end": 3,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 2,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 3,
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
            }
          ],
          "distractors": [
            "جَارٌّ",
            "مَجْرُوْرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "رَبٌّ لَيْسَ لَهُ شَرِيْكٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 7)",
          "sentence": "رَبٌّ لَيْسَ لَهُ شَرِيْكٌ",
          "translation": "a Lord who has no partner",
          "cells": [
            "رَبٌّ",
            "لَيْسَ",
            "لَ",
            "هُ",
            "شَرِيْكٌ"
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
                  "end": 4,
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
                  "role": "فِعْلٌ نَاقِصٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "خَبَرُ لَيْسَ مُقَدَّمٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "اِسْمُ لَيْسَ مُؤَخَّرٌ"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "دَمْعٌ تَحْتَهُ خَدْعٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 7)",
          "sentence": "دَمْعٌ تَحْتَهُ خَدْعٌ",
          "translation": "a tear beneath which there is deception",
          "cells": [
            "دَمْعٌ",
            "تَحْتَ",
            "هُ",
            "خَدْعٌ"
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
                  "end": 3,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 2,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 3,
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
            }
          ],
          "distractors": [
            "جَارٌّ",
            "مَجْرُوْرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "أَرْضٌ فَوْقَهَا جِبَالٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 7)",
          "sentence": "أَرْضٌ فَوْقَهَا جِبَالٌ",
          "translation": "land which has mountains above it",
          "cells": [
            "أَرْضٌ",
            "فَوْقَ",
            "هَا",
            "جِبَالٌ"
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
                  "end": 3,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 2,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 3,
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
            }
          ],
          "distractors": [
            "جَارٌّ",
            "مَجْرُوْرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "شَجَرَتَانِ بَيْنَهُمَا أَسَدٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 7)",
          "sentence": "شَجَرَتَانِ بَيْنَهُمَا أَسَدٌ",
          "translation": "two trees between which there is a lion",
          "cells": [
            "شَجَرَتَانِ",
            "بَيْنَ",
            "هُمَا",
            "أَسَدٌ"
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
                  "end": 3,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 2,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 3,
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
            }
          ],
          "distractors": [
            "جَارٌّ",
            "مَجْرُوْرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "طُلَّابٌ مَعَهُمْ كُتُبٌ كَثِيْرَةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 7)",
          "sentence": "طُلَّابٌ مَعَهُمْ كُتُبٌ كَثِيْرَةٌ",
          "translation": "students who have many books with them",
          "cells": [
            "طُلَّابٌ",
            "مَعَ",
            "هُمْ",
            "كُتُبٌ",
            "كَثِيْرَةٌ"
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
                  "end": 4,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 2,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُبْتَدَأٌ مُؤَخَّرٌ"
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
            "جَارٌّ",
            "مَجْرُوْرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In رَجُلٌ لَهُ مَالٌ كَثِيْرٌ, what is كَثِيْرٌ?",
          "options": [
            "A نَعْت of مَالٌ",
            "A نَعْت of رَجُلٌ",
            "The خَبَر",
            "A حَال"
          ],
          "correct": 0,
          "explanation": "It matches مَالٌ in case and indefiniteness, inside the نَعْت sentence."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In بَابٌ أَمَامَهُ كُرْسِيَّانِ, what are the green-row labels on أَمَامَ and هُ?",
          "options": [
            "جَارٌّ and مَجْرُوْرٌ",
            "مُضَافٌ and مُضَافٌ إِلَيْهِ",
            "مُبْتَدَأٌ and خَبَرٌ",
            "فِعْلٌ and فَاعِلٌ"
          ],
          "correct": 1,
          "explanation": "أَمَامَ is a ظَرْف, so the pronoun attached to it is its مُضَافٌ إِلَيْهِ."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "Give the fronted-preposition rendering of دَرْسٌ بَعْدَهُ صَلَاةٌ.",
          "options": [
            "a lesson which has a prayer after it",
            "a lesson after which there is a prayer",
            "a prayer after the lesson",
            "the lesson's prayer"
          ],
          "correct": 1,
          "explanation": "The first option is the 'has' version; fronting بَعْدَ keeps 'there is'."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In شَجَرَتَانِ بَيْنَهُمَا أَسَدٌ, what does the هُمَا agree with?",
          "options": [
            "أَسَدٌ",
            "بَيْنَ",
            "شَجَرَتَانِ, the dual مَنْعُوْت",
            "Nothing — it is fixed"
          ],
          "correct": 2,
          "explanation": "The عَائِد always agrees with the مَنْعُوْت in number and gender."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In طُلَّابٌ مَعَهُمْ كُتُبٌ كَثِيْرَةٌ, why is كَثِيْرَةٌ feminine?",
          "options": [
            "Because طُلَّابٌ is feminine",
            "Because كُتُب is a non-human plural, treated as feminine singular",
            "Because مَعَ is feminine",
            "It is an error"
          ],
          "correct": 1,
          "explanation": "The usual rule for broken plurals of things, applied here to the نَعْت."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In أَرْضٌ فَوْقَهَا جِبَالٌ, which word is the مُبْتَدَأٌ مُؤَخَّرٌ?",
          "options": [
            "أَرْضٌ",
            "فَوْقَ",
            "هَا",
            "جِبَالٌ"
          ],
          "correct": 3,
          "explanation": "أَرْضٌ is the مَنْعُوْت outside the sentence; جِبَالٌ is the delayed subject inside it."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In دَمْعٌ تَحْتَهُ خَدْعٌ, what does the phrase describe?",
          "options": [
            "Deception which conceals a tear",
            "A tear beneath which there is deception",
            "A tear and a deception",
            "Deception which causes tears"
          ],
          "correct": 1,
          "explanation": "دَمْعٌ is the مَنْعُوْت; the sentence after it says what lies beneath the tear."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "What single English word most often replaces this whole Arabic construction?",
          "options": [
            "'is'",
            "'has'",
            "'was'",
            "'does'"
          ],
          "correct": 1,
          "explanation": "Arabic has no verb 'to have'; the fronted خَبَر with a pronoun does that work."
        },
        {
          "title": "loan, debt",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"loan, debt\"?",
          "options": [
            "دَيْنٌ",
            "خَدْعٌ",
            "كَثِيْرٌ",
            "فَوْقَ"
          ],
          "correct": 0
        },
        {
          "title": "loan, debt",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَيْنٌ mean?",
          "options": [
            "loan, debt",
            "deception",
            "many, much",
            "above"
          ],
          "correct": 0
        },
        {
          "title": "loan, debt (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of دَيْنٌ?",
          "options": [
            "دُيُوْنٌ",
            "خُدُوْعٌ",
            "كَثِيْرُوْنَ",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "story",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"story\"?",
          "options": [
            "قِصَّةٌ",
            "أَرْضٌ",
            "أَمَامَ",
            "تَحْتَ"
          ],
          "correct": 0
        },
        {
          "title": "story",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قِصَّةٌ mean?",
          "options": [
            "story",
            "earth, land",
            "in front of",
            "beneath"
          ],
          "correct": 0
        },
        {
          "title": "story (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قِصَّةٌ?",
          "options": [
            "قِصَصٌ",
            "أَرَاضٍ",
            "—",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "partner",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"partner\"?",
          "options": [
            "شَرِيْكٌ",
            "كَثِيْرٌ",
            "فَوْقَ",
            "بَيْنَ"
          ],
          "correct": 0
        },
        {
          "title": "partner",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَرِيْكٌ mean?",
          "options": [
            "partner",
            "many, much",
            "above",
            "between"
          ],
          "correct": 0
        },
        {
          "title": "partner (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَرِيْكٌ?",
          "options": [
            "شُرَكَاءُ",
            "كَثِيْرُوْنَ",
            "—",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "deception",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"deception\"?",
          "options": [
            "خَدْعٌ",
            "أَمَامَ",
            "تَحْتَ",
            "دَيْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "deception",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَدْعٌ mean?",
          "options": [
            "deception",
            "in front of",
            "beneath",
            "loan, debt"
          ],
          "correct": 0
        },
        {
          "title": "deception (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of خَدْعٌ?",
          "options": [
            "خُدُوْعٌ",
            "—",
            "—",
            "دُيُوْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "earth, land",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"earth, land\"?",
          "options": [
            "أَرْضٌ",
            "فَوْقَ",
            "بَيْنَ",
            "قِصَّةٌ"
          ],
          "correct": 0
        },
        {
          "title": "earth, land",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَرْضٌ mean?",
          "options": [
            "earth, land",
            "above",
            "between",
            "story"
          ],
          "correct": 0
        },
        {
          "title": "earth, land (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَرْضٌ?",
          "options": [
            "أَرَاضٍ",
            "—",
            "—",
            "قِصَصٌ"
          ],
          "correct": 0
        },
        {
          "title": "many, much",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"many, much\"?",
          "options": [
            "كَثِيْرٌ",
            "تَحْتَ",
            "دَيْنٌ",
            "شَرِيْكٌ"
          ],
          "correct": 0
        },
        {
          "title": "many, much",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَثِيْرٌ mean?",
          "options": [
            "many, much",
            "beneath",
            "loan, debt",
            "partner"
          ],
          "correct": 0
        },
        {
          "title": "many, much (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of كَثِيْرٌ?",
          "options": [
            "كَثِيْرُوْنَ",
            "—",
            "دُيُوْنٌ",
            "شُرَكَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "in front of",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"in front of\"?",
          "options": [
            "أَمَامَ",
            "بَيْنَ",
            "قِصَّةٌ",
            "خَدْعٌ"
          ],
          "correct": 0
        },
        {
          "title": "in front of",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَمَامَ mean?",
          "options": [
            "in front of",
            "between",
            "story",
            "deception"
          ],
          "correct": 0
        },
        {
          "title": "in front of (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَمَامَ?",
          "options": [
            "—",
            "—",
            "قِصَصٌ",
            "خُدُوْعٌ"
          ],
          "correct": 0
        },
        {
          "title": "above",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"above\"?",
          "options": [
            "فَوْقَ",
            "دَيْنٌ",
            "شَرِيْكٌ",
            "أَرْضٌ"
          ],
          "correct": 0
        },
        {
          "title": "above",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَوْقَ mean?",
          "options": [
            "above",
            "loan, debt",
            "partner",
            "earth, land"
          ],
          "correct": 0
        },
        {
          "title": "above (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of فَوْقَ?",
          "options": [
            "—",
            "دُيُوْنٌ",
            "شُرَكَاءُ",
            "أَرَاضٍ"
          ],
          "correct": 0
        },
        {
          "title": "beneath",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"beneath\"?",
          "options": [
            "تَحْتَ",
            "قِصَّةٌ",
            "خَدْعٌ",
            "كَثِيْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "beneath",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَحْتَ mean?",
          "options": [
            "beneath",
            "story",
            "deception",
            "many, much"
          ],
          "correct": 0
        },
        {
          "title": "beneath (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of تَحْتَ?",
          "options": [
            "—",
            "قِصَصٌ",
            "خُدُوْعٌ",
            "كَثِيْرُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "between",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"between\"?",
          "options": [
            "بَيْنَ",
            "شَرِيْكٌ",
            "أَرْضٌ",
            "أَمَامَ"
          ],
          "correct": 0
        },
        {
          "title": "between",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَيْنَ mean?",
          "options": [
            "between",
            "partner",
            "earth, land",
            "in front of"
          ],
          "correct": 0
        },
        {
          "title": "between (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَيْنَ?",
          "options": [
            "—",
            "شُرَكَاءُ",
            "أَرَاضٍ",
            "—"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l6",
      "title": "خلاصة العائد",
      "subtitle": "Part 7: The نَعْتٌ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Complete Picture",
          "lines": [
            {
              "html": "Five lessons, five slots. The book now sets them out in a single table, with a human and a non-human example for each. Reading down the two columns is the fastest way to see what actually varies and what stays constant.",
              "list": false
            },
            {
              "table": {
                "title": "Translating the نَعْت Sentence (Book p. 466)",
                "headers": [
                  "Slot of the عَائِد",
                  "Human",
                  "Non-human"
                ],
                "rows": [
                  [
                    "فَاعِلٌ",
                    "رَجُلٌ سَقَطَ — a man who fell",
                    "قَلَمٌ سَقَطَ — a pen that / which fell"
                  ],
                  [
                    "مَفْعُوْلٌ بِهِ",
                    "رَجُلٌ رَأَيْتُهُ — a man whom I saw",
                    "قَلَمٌ رَأَيْتُهُ — a pen that / which I saw"
                  ],
                  [
                    "مُضَافٌ إِلَيْهِ",
                    "رَجُلٌ يَدُهُ وَسِخَةٌ — a man whose hand is dirty",
                    "بَيْتٌ بَابُهُ مَفْتُوْحٌ — a house whose door is open"
                  ],
                  [
                    "مَجْرُوْرٌ",
                    "رَجُلٌ قَرَأْتُ مَعَهُ — a man with whom I read",
                    "كِتَابٌ قَرَأْتُ مِنْهُ — a book that / which I read from"
                  ],
                  [
                    "خَبَرٌ مُقَدَّمٌ",
                    "رَجُلٌ عَلَيْهِ دَيْنٌ — a man on whom there is a loan",
                    "كِتَابٌ فِيْهِ قِصَصٌ — a book in which there are stories"
                  ]
                ]
              }
            },
            {
              "html": "Two things vary across the table. The relative pronoun changes with the slot — 'who' for a subject, 'whom' for an object, 'whose' for a possessor — and it changes again with whether the referent is human. Only the مُضَافٌ إِلَيْهِ row is immune to the second of these, since 'whose' serves for people and things alike.",
              "list": false
            },
            {
              "html": "Everything else stays constant. In every row the مَنْعُوْت is نَكِرَة, there is no Arabic word for the relative pronoun, and the sentence carries an عَائِد somewhere inside it that refers back to the noun described.",
              "list": false
            },
            {
              "table": {
                "title": "A Reading Routine",
                "headers": [
                  "Step",
                  "What to do"
                ],
                "rows": [
                  [
                    "1",
                    "Confirm the مَنْعُوْت is نَكِرَة and a sentence follows it"
                  ],
                  [
                    "2",
                    "Find the عَائِد — a pronoun, hidden or written, that refers back to it"
                  ],
                  [
                    "3",
                    "Ask what slot that pronoun fills inside the sentence"
                  ],
                  [
                    "4",
                    "Choose the relative pronoun from the table and apply the four steps"
                  ]
                ]
              }
            },
            {
              "html": "Step 2 is the one that repays practice. In a verbal sentence with a written doer, look for an attached pronoun on the verb or on a noun; in a nominal sentence, look at the مُبْتَدَأ; and if you find nothing written at all, the عَائِد is the hidden pronoun in the verb.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Across all five slots the عَائِد can fill, what stays constant in every row of the summary table؟",
            "kind": "mcq",
            "options": [
              "The مَنْعُوْت is always نَكِرَةٌ, there is no Arabic word for the relative pronoun, and the sentence always carries an عَائِد referring back to the مَنْعُوْت",
              "The relative pronoun is always 'who'",
              "The عَائِد is always a hidden pronoun",
              "The مَنْعُوْت is always human"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Working Through Mixed Examples",
          "lines": [
            {
              "html": "وَلَدٌ أَبُوْهُ فَقِيْرٌ — a boy whose father is poor",
              "list": true,
              "bullet": true
            },
            {
              "html": "The عَائِد is the هُ on أَبُو, so this is the مُضَافٌ إِلَيْهِ row: 'whose'. Adjusted, it reads 'a boy with a poor father'.",
              "list": false
            },
            {
              "html": "مِنْبَرٌ يَجْلِسُ عَلَيْهِ الْإِمَامُ — a pulpit on which the imam sits",
              "list": true,
              "bullet": true
            },
            {
              "html": "Here الْإِمَامُ is written out as the doer, which leaves the هِ after عَلَى as the عَائِد — the مَجْرُوْر row. The preposition comes into the English as 'on'.",
              "list": false
            },
            {
              "html": "وَلَدٌ حَفِظَ الْقُرْآنَ وَفَهِمَهُ وَعَمِلَ بِهِ — a boy who memorised the Qur'an, understood it and acted upon it",
              "list": true,
              "bullet": true
            },
            {
              "html": "Three verbs joined by وَ, all sharing the same hidden doer — and that hidden هُوَ is the عَائِد. The attached هُ on فَهِمَهُ and the هِ after بِ both refer to the Qur'an, not to the boy, so neither of them is the عَائِد.",
              "list": false
            },
            {
              "html": "That last point is worth holding on to: a نَعْت sentence may contain several pronouns, and only the one that refers back to the مَنْعُوْت is the عَائِد. The others belong to whatever else the sentence is talking about.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "According to the reading routine, what is the very first thing to check before translating a نَعْت sentence؟",
            "kind": "mcq",
            "options": [
              "That the مَنْعُوْت is نَكِرَةٌ and a sentence follows it",
              "The tense of the main verb",
              "Whether the referent is human or non-human",
              "Whether a حَرْفُ جَرٍّ is present"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The نَعْت Sentence — All Five Slots",
        "rows": [
          {
            "label": "فَاعِلٌ",
            "arabic": "رَجُلٌ سَقَطَ",
            "meaning": "'a man who fell' — 'who' for a person, 'which / that' for a thing."
          },
          {
            "label": "مَفْعُوْلٌ بِهِ",
            "arabic": "رَجُلٌ رَأَيْتُهُ",
            "meaning": "'a man whom I saw' — 'whom' for a person, 'which / that' for a thing."
          },
          {
            "label": "مُضَافٌ إِلَيْهِ",
            "arabic": "رَجُلٌ يَدُهُ وَسِخَةٌ",
            "meaning": "'a man whose hand is dirty' — 'whose' for both."
          },
          {
            "label": "مَجْرُوْرٌ",
            "arabic": "كِتَابٌ قَرَأْتُ مِنْهُ",
            "meaning": "'a book from which I read' — the preposition comes into the English too."
          },
          {
            "label": "خَبَرٌ مُقَدَّمٌ",
            "arabic": "كِتَابٌ فِيْهِ قِصَصٌ",
            "meaning": "'a book which has stories in it' — or 'a book in which there are stories'."
          },
          {
            "label": "The constant",
            "arabic": "مَنْعُوْتٌ نَكِرَةٌ + عَائِدٌ",
            "meaning": "In every row the described noun is indefinite and a pronoun inside the sentence refers back to it."
          }
        ]
      },
      "quiz": [
        {
          "q": "Which row of the summary table uses the same relative pronoun for humans and non-humans?",
          "options": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "مُضَافٌ إِلَيْهِ",
            "خَبَرٌ مُقَدَّمٌ"
          ],
          "correct": 2,
          "explanation": "'whose' serves for people and things alike."
        },
        {
          "q": "What is constant across every row of the table?",
          "options": [
            "The relative pronoun",
            "The verb tense",
            "The نَكِرَة مَنْعُوْت and the presence of an عَائِد",
            "The presence of a preposition"
          ],
          "correct": 2,
          "explanation": "These two are what make the construction what it is; everything else varies."
        },
        {
          "q": "In وَلَدٌ أَبُوْهُ فَقِيْرٌ, what slot does the عَائِد fill?",
          "options": [
            "فَاعِلٌ",
            "مُضَافٌ إِلَيْهِ",
            "مَفْعُوْلٌ بِهِ",
            "خَبَرٌ مُقَدَّمٌ"
          ],
          "correct": 1,
          "explanation": "The هُ is attached to أَبُو and is its مُضَافٌ إِلَيْهِ — 'a boy whose father is poor'."
        },
        {
          "q": "In مِنْبَرٌ يَجْلِسُ عَلَيْهِ الْإِمَامُ, what makes the هِ the عَائِد rather than the hidden pronoun in the verb?",
          "options": [
            "Because عَلَى precedes it",
            "Because الْإِمَامُ is written out as the doer",
            "Because مِنْبَر is a thing",
            "Because the verb is مُضَارِع"
          ],
          "correct": 1,
          "explanation": "With the doer named, the verb carries no hidden pronoun to serve as the عَائِد."
        },
        {
          "q": "In وَلَدٌ حَفِظَ الْقُرْآنَ وَفَهِمَهُ وَعَمِلَ بِهِ, which pronoun is the عَائِد?",
          "options": [
            "The هُ on فَهِمَهُ",
            "The هِ after بِ",
            "The hidden هُوَ shared by the three verbs",
            "All of them"
          ],
          "correct": 2,
          "explanation": "The other two pronouns refer to the Qur'an; only the hidden doer refers back to the boy."
        },
        {
          "q": "What should you check first when meeting a noun followed by a sentence?",
          "options": [
            "The tense of the verb",
            "Whether there is a preposition",
            "The length of the sentence",
            "Whether the noun is نَكِرَة"
          ],
          "correct": 3,
          "explanation": "A definite noun would take الَّذِيْ and its family instead; this construction requires an indefinite one."
        }
      ],
      "bank": [
        {
          "title": "وَلَدٌ أَبُوْهُ فَقِيْرٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 7)",
          "sentence": "وَلَدٌ أَبُوْهُ فَقِيْرٌ",
          "translation": "a boy whose father is poor",
          "cells": [
            "وَلَدٌ",
            "أَبُو",
            "هُ",
            "فَقِيْرٌ"
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
                  "end": 3,
                  "role": "نَعْتٌ"
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
          "title": "وَلَدٌ نُحْسِنُ إِلَيْهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 7)",
          "sentence": "وَلَدٌ نُحْسِنُ إِلَيْهِ",
          "translation": "a boy to whom we are good",
          "cells": [
            "وَلَدٌ",
            "نُحْسِنُ",
            "إِلَيْ",
            "هِ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
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
            "مَفْعُوْلٌ فِيْهِ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "وَلَدٌ رَأَيْنَاهُ فِي الْبَيْتِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 7)",
          "sentence": "وَلَدٌ رَأَيْنَاهُ فِي الْبَيْتِ",
          "translation": "a boy whom we saw in the house",
          "cells": [
            "وَلَدٌ",
            "رَأَيْنَاهُ",
            "فِي",
            "الْبَيْتِ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا) وَمَفْعُوْلٌ بِهِ (هُ)"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "تُرَابٌ نُدْفَنُ تَحْتَهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 7)",
          "sentence": "تُرَابٌ نُدْفَنُ تَحْتَهُ",
          "translation": "dust beneath which we are buried",
          "cells": [
            "تُرَابٌ",
            "نُدْفَنُ",
            "تَحْتَ",
            "هُ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ مَجْهُوْلٌ وَنَائِبُ فَاعِلٍ (نَحْنُ)"
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
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "جَارٌّ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "وَلَدٌ أَمَامَهُ كُتُبٌ كَثِيْرَةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 7)",
          "sentence": "وَلَدٌ أَمَامَهُ كُتُبٌ كَثِيْرَةٌ",
          "translation": "a boy who has many books in front of him",
          "cells": [
            "وَلَدٌ",
            "أَمَامَ",
            "هُ",
            "كُتُبٌ",
            "كَثِيْرَةٌ"
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
                  "end": 4,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 2,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُبْتَدَأٌ مُؤَخَّرٌ"
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
            "جَارٌّ",
            "مَجْرُوْرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "دَمٌ يَسِيْلُ عَلَى وَجْهِكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 7)",
          "sentence": "دَمٌ يَسِيْلُ عَلَى وَجْهِكَ",
          "translation": "blood which flows on your face",
          "cells": [
            "دَمٌ",
            "يَسِيْلُ",
            "عَلَى",
            "وَجْهِكَ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "مِنْبَرٌ يَجْلِسُ عَلَيْهِ الْإِمَامُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 7)",
          "sentence": "مِنْبَرٌ يَجْلِسُ عَلَيْهِ الْإِمَامُ",
          "translation": "a pulpit on which the imam sits",
          "cells": [
            "مِنْبَرٌ",
            "يَجْلِسُ",
            "عَلَيْ",
            "هِ",
            "الْإِمَامُ"
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
                  "end": 4,
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
                  "role": "فِعْلٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
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
            "مَفْعُوْلٌ بِهِ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "صَوْتٌ سَمِعْنَاهُ مِنَ الْحَدِيْقَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 7)",
          "sentence": "صَوْتٌ سَمِعْنَاهُ مِنَ الْحَدِيْقَةِ",
          "translation": "a sound which we heard from the garden",
          "cells": [
            "صَوْتٌ",
            "سَمِعْنَاهُ",
            "مِنَ",
            "الْحَدِيْقَةِ"
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
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا) وَمَفْعُوْلٌ بِهِ (هُ)"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "وَلَدٌ حَفِظَ الْقُرْآنَ وَفَهِمَهُ وَعَمِلَ بِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 7)",
          "sentence": "وَلَدٌ حَفِظَ الْقُرْآنَ وَفَهِمَهُ وَعَمِلَ بِهِ",
          "translation": "a boy who memorised the Qur'an, understood it and acted upon it",
          "cells": [
            "وَلَدٌ",
            "حَفِظَ",
            "الْقُرْآنَ",
            "وَ",
            "فَهِمَهُ",
            "وَ",
            "عَمِلَ",
            "بِهِ"
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
                  "end": 7,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (هُ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) ثَالِثٌ"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "صُلَحَاءُ تَفِيْضُ أَعْيُنُهُمْ دُمُوْعًا مِنْ خَشْيَةِ اللهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 7)",
          "sentence": "صُلَحَاءُ تَفِيْضُ أَعْيُنُهُمْ دُمُوْعًا مِنْ خَشْيَةِ اللهِ",
          "translation": "righteous people whose eyes overflow with tears out of fear of Allah",
          "cells": [
            "صُلَحَاءُ",
            "تَفِيْضُ",
            "أَعْيُنُ",
            "هُمْ",
            "دُمُوْعًا",
            "مِنْ خَشْيَةِ اللهِ"
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
                  "end": 5,
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
                  "role": "تَمْيِيْزٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ لَهُ غَيْرُ صَرِيْحٍ"
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In وَلَدٌ نُحْسِنُ إِلَيْهِ, what is إِلَيْهِ?",
          "options": [
            "A مَفْعُوْلٌ فِيْهِ",
            "The مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ of نُحْسِنُ",
            "A حَال",
            "The فَاعِل"
          ],
          "correct": 1,
          "explanation": "أَحْسَنَ reaches its object through إِلَى, so the English is simply 'to whom we are good'."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In تُرَابٌ نُدْفَنُ تَحْتَهُ, what kind of verb is نُدْفَنُ?",
          "options": [
            "مَعْلُوْم, with نَحْنُ as its doer",
            "مَجْهُوْل, with a hidden نَحْنُ as its نَائِبُ فَاعِلٍ",
            "أَمْر",
            "مَاضٍ"
          ],
          "correct": 1,
          "explanation": "'dust beneath which we are buried' — no burier is named."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In وَلَدٌ أَمَامَهُ كُتُبٌ كَثِيْرَةٌ, which word is the مُبْتَدَأٌ مُؤَخَّرٌ?",
          "options": [
            "وَلَدٌ",
            "أَمَامَ",
            "كُتُبٌ",
            "كَثِيْرَةٌ"
          ],
          "correct": 2,
          "explanation": "أَمَامَهُ is the fronted خَبَر; كُتُبٌ follows as the delayed subject, with كَثِيْرَةٌ as its نَعْت."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In صَوْتٌ سَمِعْنَاهُ مِنَ الْحَدِيْقَةِ, which slot does the عَائِد fill?",
          "options": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "مُضَافٌ إِلَيْهِ",
            "خَبَرٌ مُقَدَّمٌ"
          ],
          "correct": 1,
          "explanation": "The نَا is the doer and the هُ the object — 'a sound which we heard from the garden'."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In صُلَحَاءُ تَفِيْضُ أَعْيُنُهُمْ دُمُوْعًا مِنْ خَشْيَةِ اللهِ, what is دُمُوْعًا?",
          "options": [
            "The مَفْعُوْلٌ بِهِ of تَفِيْضُ",
            "A تَمْيِيْز, specifying what the eyes overflow with",
            "A حَال of أَعْيُنُهُمْ",
            "A مَفْعُوْلٌ مُطْلَقٌ"
          ],
          "correct": 1,
          "explanation": "فَاضَ is intransitive; the تَمْيِيْز names the substance — the same structure met in Lesson 14."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In صُلَحَاءُ تَفِيْضُ أَعْيُنُهُمْ دُمُوْعًا مِنْ خَشْيَةِ اللهِ, what does مِنْ خَشْيَةِ اللهِ express?",
          "options": [
            "The place of the overflowing",
            "The time of the overflowing",
            "The reason for the overflowing",
            "The manner of the overflowing"
          ],
          "correct": 2,
          "explanation": "'out of fear of Allah' — a مَفْعُوْلٌ لَهُ غَيْرُ صَرِيْحٍ."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In دَمٌ يَسِيْلُ عَلَى وَجْهِكَ, why is عَلَى وَجْهِكَ not the عَائِد?",
          "options": [
            "Because the كَ refers to the addressee, not to the blood",
            "Because عَلَى cannot govern an عَائِد",
            "Because وَجْه is definite",
            "Because the verb is مُضَارِع"
          ],
          "correct": 0,
          "explanation": "Only a pronoun referring back to the مَنْعُوْت qualifies; here that is the hidden هُوَ in يَسِيْلُ."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In وَلَدٌ حَفِظَ الْقُرْآنَ وَفَهِمَهُ وَعَمِلَ بِهِ, how many verbs share the one عَائِد?",
          "options": [
            "One",
            "Two",
            "Three",
            "None — each has its own"
          ],
          "correct": 2,
          "explanation": "حَفِظَ, فَهِمَ and عَمِلَ all carry the same hidden هُوَ, referring back to the boy."
        },
        {
          "title": "dust, earth",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"dust, earth\"?",
          "options": [
            "تُرَابٌ",
            "خَشْيَةٌ",
            "فَقِيْرٌ",
            "بَرَّ يَبَرُّ"
          ],
          "correct": 0
        },
        {
          "title": "dust, earth",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تُرَابٌ mean?",
          "options": [
            "dust, earth",
            "fear, awe",
            "poor",
            "to be dutiful to parents"
          ],
          "correct": 0
        },
        {
          "title": "dust, earth (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of تُرَابٌ?",
          "options": [
            "أَتْرِبَةٌ",
            "—",
            "فُقَرَاءُ",
            "صُلَحَاءُ"
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
            "عَيْنٌ",
            "اِجْتَنَبَ يَجْتَنِبُ",
            "تَكَلَّمَ يَتَكَلَّمُ"
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
            "eye",
            "to abstain",
            "to speak"
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
            "أَعْيُنٌ",
            "أَتْرِبَةٌ",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "righteous person",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"righteous person\"?",
          "options": [
            "صَالِحٌ",
            "فَقِيْرٌ",
            "بَرَّ يَبَرُّ",
            "دَفَنَ يَدْفِنُ"
          ],
          "correct": 0
        },
        {
          "title": "righteous person",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَالِحٌ mean?",
          "options": [
            "righteous person",
            "poor",
            "to be dutiful to parents",
            "to bury"
          ],
          "correct": 0
        },
        {
          "title": "righteous person (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صَالِحٌ?",
          "options": [
            "صُلَحَاءُ",
            "فُقَرَاءُ",
            "مَنَابِرُ",
            "أَعْيُنٌ"
          ],
          "correct": 0
        },
        {
          "title": "fear, awe",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"fear, awe\"?",
          "options": [
            "خَشْيَةٌ",
            "اِجْتَنَبَ يَجْتَنِبُ",
            "تَكَلَّمَ يَتَكَلَّمُ",
            "سَالَ يَسِيْلُ"
          ],
          "correct": 0
        },
        {
          "title": "fear, awe",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَشْيَةٌ mean?",
          "options": [
            "fear, awe",
            "to abstain",
            "to speak",
            "to flow"
          ],
          "correct": 0
        },
        {
          "title": "fear, awe (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of خَشْيَةٌ?",
          "options": [
            "—",
            "أَتْرِبَةٌ",
            "صُلَحَاءُ",
            "فُقَرَاءُ"
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
            "بَرَّ يَبَرُّ",
            "دَفَنَ يَدْفِنُ",
            "عَاشَ يَعِيْشُ"
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
            "to be dutiful to parents",
            "to bury",
            "to live"
          ],
          "correct": 0
        },
        {
          "title": "eye (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَيْنٌ?",
          "options": [
            "أَعْيُنٌ",
            "مَنَابِرُ",
            "—",
            "أَتْرِبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "poor",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"poor\"?",
          "options": [
            "فَقِيْرٌ",
            "تَكَلَّمَ يَتَكَلَّمُ",
            "سَالَ يَسِيْلُ",
            "عَقَّ يَعُقُّ"
          ],
          "correct": 0
        },
        {
          "title": "poor",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَقِيْرٌ mean?",
          "options": [
            "poor",
            "to speak",
            "to flow",
            "to disobey parents"
          ],
          "correct": 0
        },
        {
          "title": "poor (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of فَقِيْرٌ?",
          "options": [
            "فُقَرَاءُ",
            "صُلَحَاءُ",
            "أَعْيُنٌ",
            "مَنَابِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to abstain",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to abstain\"?",
          "options": [
            "اِجْتَنَبَ يَجْتَنِبُ",
            "دَفَنَ يَدْفِنُ",
            "عَاشَ يَعِيْشُ",
            "وَفَّقَ يُوَفِّقُ"
          ],
          "correct": 0
        },
        {
          "title": "to abstain",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِجْتَنَبَ يَجْتَنِبُ mean?",
          "options": [
            "to abstain",
            "to bury",
            "to live",
            "to grant ability"
          ],
          "correct": 0
        },
        {
          "title": "to abstain (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِجْتَنَبَ يَجْتَنِبُ?",
          "options": [
            "اِجْتِنَابًا",
            "تَكَلُّمًا",
            "سَيَلَانًا",
            "عُقُوْقًا"
          ],
          "correct": 0
        },
        {
          "title": "to be dutiful to parents",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be dutiful to parents\"?",
          "options": [
            "بَرَّ يَبَرُّ",
            "سَالَ يَسِيْلُ",
            "عَقَّ يَعُقُّ",
            "تُرَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be dutiful to parents",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَرَّ يَبَرُّ mean?",
          "options": [
            "to be dutiful to parents",
            "to flow",
            "to disobey parents",
            "dust, earth"
          ],
          "correct": 0
        },
        {
          "title": "to be dutiful to parents (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَرَّ يَبَرُّ?",
          "options": [
            "بِرًّا",
            "دَفْنًا",
            "عَيْشًا",
            "تَوْفِيْقًا"
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
            "عَاشَ يَعِيْشُ",
            "وَفَّقَ يُوَفِّقُ",
            "مِنْبَرٌ"
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
            "to live",
            "to grant ability",
            "pulpit"
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
            "سَيَلَانًا",
            "عُقُوْقًا",
            "اِجْتِنَابًا"
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
            "عَقَّ يَعُقُّ",
            "تُرَابٌ",
            "صَالِحٌ"
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
            "to disobey parents",
            "dust, earth",
            "righteous person"
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
            "عَيْشًا",
            "تَوْفِيْقًا",
            "بِرًّا"
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
            "وَفَّقَ يُوَفِّقُ",
            "مِنْبَرٌ",
            "خَشْيَةٌ"
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
            "to grant ability",
            "pulpit",
            "fear, awe"
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
            "اِجْتِنَابًا",
            "تَكَلُّمًا"
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
            "تُرَابٌ",
            "صَالِحٌ",
            "عَيْنٌ"
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
            "dust, earth",
            "righteous person",
            "eye"
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
            "تَوْفِيْقًا",
            "بِرًّا",
            "دَفْنًا"
          ],
          "correct": 0
        },
        {
          "title": "to disobey parents",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to disobey parents\"?",
          "options": [
            "عَقَّ يَعُقُّ",
            "مِنْبَرٌ",
            "خَشْيَةٌ",
            "فَقِيْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to disobey parents",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَقَّ يَعُقُّ mean?",
          "options": [
            "to disobey parents",
            "pulpit",
            "fear, awe",
            "poor"
          ],
          "correct": 0
        },
        {
          "title": "to disobey parents (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَقَّ يَعُقُّ?",
          "options": [
            "عُقُوْقًا",
            "اِجْتِنَابًا",
            "تَكَلُّمًا",
            "سَيَلَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to grant ability",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to grant ability\"?",
          "options": [
            "وَفَّقَ يُوَفِّقُ",
            "صَالِحٌ",
            "عَيْنٌ",
            "اِجْتَنَبَ يَجْتَنِبُ"
          ],
          "correct": 0
        },
        {
          "title": "to grant ability",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَفَّقَ يُوَفِّقُ mean?",
          "options": [
            "to grant ability",
            "righteous person",
            "eye",
            "to abstain"
          ],
          "correct": 0
        },
        {
          "title": "to grant ability (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَفَّقَ يُوَفِّقُ?",
          "options": [
            "تَوْفِيْقًا",
            "بِرًّا",
            "دَفْنًا",
            "عَيْشًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l7",
      "title": "استعمال النعت الجملة",
      "subtitle": "Part 7: The نَعْتٌ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Principle",
          "lines": [
            {
              "html": "So far the نَعْت sentences have been studied as phrases on their own. In practice a نَعْت sentence joins with its مَنْعُوْت to become one of the main slots of the sentence — a فَاعِل, a مَفْعُوْلٌ بِهِ, a خَبَر, whatever the sentence needs.",
              "list": false
            },
            {
              "html": "In the tarkeeb this shows as an extra layer. The blue row above marks the slot the whole phrase fills; the green row below splits it into مَنْعُوْت and نَعْت; and a further row parses the نَعْت sentence internally.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "When a نَعْت sentence joins with its مَنْعُوْت in a full sentence, what does the tarkeeb diagram show as an extra layer؟",
            "kind": "mcq",
            "options": [
              "A blue row for the whole phrase's slot, a green row splitting it into مَنْعُوْت and نَعْت, and a further row parsing the نَعْت sentence internally",
              "Only the blue row — the نَعْت sentence is never analysed separately",
              "A red row unique to نَعْت sentences",
              "No extra layer — it looks identical to a single-word نَعْت"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Note 1 — Where the نَعْت Goes in the English",
          "lines": [
            {
              "html": "When the مَنْعُوْت of a نَعْت sentence is the فَاعِل, the نَعْت can be translated in two ways: immediately after the مَنْعُوْت and before the verb, or after the verb.",
              "list": false
            },
            {
              "html": "اِنْكَسَرَ كُرْسِيٌّ كَانَ فِي الْبَيْتِ — A chair which was in the house broke.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The book gives the second rendering as well: 'A chair broke which was in the house.' Arabic keeps the نَعْت hard against its noun; English allows it to be postponed past the verb, and often prefers to when the description is long.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "اِنْكَسَرَ كُرْسِيٌّ كَانَ فِي الْبَيْتِ",
                "translation": "A chair which was in the house broke.",
                "cells": [
                  "اِنْكَسَرَ",
                  "كُرْسِيٌّ",
                  "كَانَ",
                  "فِي الْبَيْتِ"
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
                        "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (هُوَ)"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "خَبَرُ كَانَ غَيْرُ صَرِيْحٍ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "When the مَنْعُوْت of a نَعْت sentence is the فَاعِلٌ, where can the نَعْت be placed in the English translation؟",
            "kind": "mcq",
            "options": [
              "Either immediately after the مَنْعُوْت and before the verb, or after the verb",
              "Only before the verb",
              "Only after the verb",
              "It cannot be translated at all in that position"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Note 2 — A مَنْعُوْت with Two نَعْت",
          "lines": [
            {
              "html": "If one مَنْعُوْت has two نَعْت, one as a single word and the other as a sentence, the single word is translated first, before the مَنْعُوْت. The نَعْت sentence is then translated at the end.",
              "list": false
            },
            {
              "html": "هَذَا ذِكْرٌ مُبَارَكٌ أَنْزَلْنَاهُ — This is a blessed remembrance which we have revealed.",
              "list": true,
              "bullet": true
            },
            {
              "html": "English adjectives sit before their noun and relative clauses after it, so the two Arabic نَعْت end up on opposite sides of the word they describe. In Arabic both follow ذِكْرٌ in order.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "هَذَا ذِكْرٌ مُبَارَكٌ أَنْزَلْنَاهُ",
                "translation": "This is a blessed remembrance which we have revealed.",
                "cells": [
                  "هَذَا",
                  "ذِكْرٌ",
                  "مُبَارَكٌ",
                  "أَنْزَلْنَا",
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
                        "start": 3,
                        "end": 4,
                        "role": "نَعْتٌ ثَانٍ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "If one مَنْعُوْت has two نَعْت — one a single word, one a sentence — in what order are they translated؟",
            "kind": "mcq",
            "options": [
              "The single-word نَعْت first (before the مَنْعُوْت), then the مَنْعُوْت, then the نَعْت sentence at the end",
              "Both نَعْت are translated before the مَنْعُوْت",
              "The sentence نَعْت always comes first",
              "Only one of the two نَعْت can be translated"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Note 3 — A مُضَارِع Inside a مَاضٍ Sentence",
          "lines": [
            {
              "html": "If the main sentence consists of a فِعْلٌ مَاضٍ and the نَعْت sentence consists of a مُضَارِعٌ, the مُضَارِع can be translated as the past habitual or continuous tense.",
              "list": false
            },
            {
              "html": "كَسَرَ إِبْرَاهِيْمُ تَمَاثِيْلَ يَعْبُدُهَا النَّاسُ — Ibrahim ؑ broke the idols that people used to worship.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The main verb fixes the time as past, and the nested مُضَارِع then reports what was ongoing at that time rather than what is ongoing now. 'People worship' would be wrong; 'people used to worship' is right.",
              "list": false
            },
            {
              "table": {
                "title": "The Three Notes at a Glance",
                "headers": [
                  "Note",
                  "The point"
                ],
                "rows": [
                  [
                    "1",
                    "When the مَنْعُوْت is the فَاعِل, the English نَعْت may come before or after the verb"
                  ],
                  [
                    "2",
                    "A single-word نَعْت is translated before the noun; a نَعْت sentence after it"
                  ],
                  [
                    "3",
                    "A مُضَارِع inside a مَاضٍ sentence becomes the past habitual or continuous"
                  ]
                ]
              }
            },
            {
              "html": "Note 3 is the same instinct met in Part 1 with كَانَ + مُضَارِع. Arabic marks the aspect and lets the surrounding sentence fix the time; English marks both on the verb, so a form that looks present must sometimes be rendered as a past.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "If the main sentence has a فِعْلٌ مَاضٍ and the نَعْت sentence has a فِعْلٌ مُضَارِعٌ, how is the مُضَارِع best translated؟",
            "kind": "mcq",
            "options": [
              "As the past habitual or continuous tense, since it reports what was ongoing at that past time",
              "As a plain present tense",
              "As a future tense",
              "It cannot be translated and is dropped"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The نَعْت Sentence inside a Full Sentence",
        "rows": [
          {
            "label": "The principle",
            "arabic": "يَنْضَمُّ النَّعْتُ إِلَى مَنْعُوْتِهِ",
            "meaning": "The نَعْت sentence joins its مَنْعُوْت and the pair together fill one main slot."
          },
          {
            "label": "In the diagram",
            "arabic": "ثَلَاثُ طَبَقَاتٍ",
            "meaning": "The blue row marks the slot; the green row splits مَنْعُوْت from نَعْت; a further row parses the نَعْت sentence."
          },
          {
            "label": "Note 1",
            "arabic": "اِنْكَسَرَ كُرْسِيٌّ كَانَ فِي الْبَيْتِ",
            "meaning": "With a فَاعِل مَنْعُوْت, English may put the نَعْت before or after the verb."
          },
          {
            "label": "Note 2",
            "arabic": "ذِكْرٌ مُبَارَكٌ أَنْزَلْنَاهُ",
            "meaning": "A single-word نَعْت is translated before the noun; the نَعْت sentence goes last."
          },
          {
            "label": "Note 3",
            "arabic": "كَسَرَ … تَمَاثِيْلَ يَعْبُدُهَا النَّاسُ",
            "meaning": "A مُضَارِع inside a مَاضٍ sentence renders as 'used to' or a past continuous."
          },
          {
            "label": "Why Note 3 works",
            "arabic": "الزَّمَنُ مِنَ الْجُمْلَةِ الْكُبْرَى",
            "meaning": "The main verb fixes the time; the nested مُضَارِع only reports what was ongoing then."
          }
        ]
      },
      "quiz": [
        {
          "q": "What does a نَعْت sentence do once joined to its مَنْعُوْت?",
          "options": [
            "The pair fills one of the main slots of the sentence",
            "It stands as a sentence of its own",
            "It becomes a مَفْعُوْلٌ فِيْهِ",
            "It replaces the verb"
          ],
          "correct": 0,
          "explanation": "Together they behave as a single noun phrase and take a single slot."
        },
        {
          "q": "When the مَنْعُوْت is the فَاعِل, where may the نَعْت come in the English?",
          "options": [
            "Only before the verb",
            "Only after the verb",
            "Either before or after the verb",
            "Only at the start of the sentence"
          ],
          "correct": 2,
          "explanation": "'A chair which was in the house broke' and 'A chair broke which was in the house' are both given."
        },
        {
          "q": "If one مَنْعُوْت has a single-word نَعْت and a نَعْت sentence, what order does the English take?",
          "options": [
            "The sentence first, then the single word",
            "Both after the noun",
            "The single word before the noun, the sentence after it",
            "Both before the noun"
          ],
          "correct": 2,
          "explanation": "'a blessed remembrance which we have revealed' — the adjective precedes, the clause follows."
        },
        {
          "q": "In كَسَرَ إِبْرَاهِيْمُ تَمَاثِيْلَ يَعْبُدُهَا النَّاسُ, how should يَعْبُدُهَا be rendered?",
          "options": [
            "'people worship'",
            "'people used to worship'",
            "'people will worship'",
            "'let people worship'"
          ],
          "correct": 1,
          "explanation": "The main verb is مَاضٍ, so the nested مُضَارِع gives the past habitual."
        },
        {
          "q": "Why does a مُضَارِع inside a مَاضٍ sentence shift tense in English?",
          "options": [
            "Because Arabic has no past tense",
            "Because the main verb fixes the time and the مُضَارِع only marks the aspect",
            "Because the نَعْت must agree with the verb",
            "Because it is a rule of the مَجْهُوْل"
          ],
          "correct": 1,
          "explanation": "The same reasoning as كَانَ + مُضَارِع for the habitual past."
        },
        {
          "q": "In اِنْكَسَرَ كُرْسِيٌّ كَانَ فِي الْبَيْتِ, what is the فَاعِل of اِنْكَسَرَ?",
          "options": [
            "كُرْسِيٌّ alone",
            "كَانَ فِي الْبَيْتِ",
            "The whole phrase كُرْسِيٌّ كَانَ فِي الْبَيْتِ",
            "A hidden هُوَ"
          ],
          "correct": 2,
          "explanation": "The مَنْعُوْت and its نَعْت sentence together occupy the subject slot."
        }
      ],
      "bank": [
        {
          "title": "اِنْكَسَرَ كُرْسِيٌّ كَانَ فِي الْبَيْتِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 467, Note 1 (Section 1, Part 7)",
          "sentence": "اِنْكَسَرَ كُرْسِيٌّ كَانَ فِي الْبَيْتِ",
          "translation": "A chair which was in the house broke.",
          "cells": [
            "اِنْكَسَرَ",
            "كُرْسِيٌّ",
            "كَانَ",
            "فِي الْبَيْتِ"
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
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (هُوَ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ كَانَ غَيْرُ صَرِيْحٍ"
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
          "title": "هَذَا ذِكْرٌ مُبَارَكٌ أَنْزَلْنَاهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 467, Note 2 (Section 1, Part 7)",
          "sentence": "هَذَا ذِكْرٌ مُبَارَكٌ أَنْزَلْنَاهُ",
          "translation": "This is a blessed remembrance which we have revealed.",
          "cells": [
            "هَذَا",
            "ذِكْرٌ",
            "مُبَارَكٌ",
            "أَنْزَلْنَا",
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
                  "start": 3,
                  "end": 4,
                  "role": "نَعْتٌ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "بَدَلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "كَسَرَ إِبْرَاهِيْمُ تَمَاثِيْلَ يَعْبُدُهَا النَّاسُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 467, Note 3 (Section 1, Part 7)",
          "sentence": "كَسَرَ إِبْرَاهِيْمُ تَمَاثِيْلَ يَعْبُدُهَا النَّاسُ",
          "translation": "Ibrahim ؑ broke the idols that people used to worship.",
          "cells": [
            "كَسَرَ",
            "إِبْرَاهِيْمُ",
            "تَمَاثِيْلَ",
            "يَعْبُدُهَا",
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
                  "end": 4,
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
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (هَا)"
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
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "هٰذَا دَوَاءٌ يَنْفَعُكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 7)",
          "sentence": "هٰذَا دَوَاءٌ يَنْفَعُكَ",
          "translation": "This is a medicine which benefits you.",
          "cells": [
            "هٰذَا",
            "دَوَاءٌ",
            "يَنْفَعُكَ"
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 2,
                  "end": 2,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (كَ)"
                }
              ]
            }
          ],
          "distractors": [
            "بَدَلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "فَاعِلٌ"
          ]
        },
        {
          "title": "بَكَى طِفْلٌ غَابَتْ أُمُّهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 7)",
          "sentence": "بَكَى طِفْلٌ غَابَتْ أُمُّهُ",
          "translation": "A child whose mother was absent wept.",
          "cells": [
            "بَكَى",
            "طِفْلٌ",
            "غَابَتْ",
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
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "حَزِنَتِ امْرَأَةٌ مَاتَ زَوْجُهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 7)",
          "sentence": "حَزِنَتِ امْرَأَةٌ مَاتَ زَوْجُهَا",
          "translation": "A woman whose husband died grieved.",
          "cells": [
            "حَزِنَتِ",
            "امْرَأَةٌ",
            "مَاتَ",
            "زَوْجُهَا"
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
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "رَأَيْنَا مَسْجِدًا لَهُ مِحْرَابٌ كَبِيْرٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 7)",
          "sentence": "رَأَيْنَا مَسْجِدًا لَهُ مِحْرَابٌ كَبِيْرٌ",
          "translation": "We saw a masjid which has a large mihrab.",
          "cells": [
            "رَأَيْنَا",
            "مَسْجِدًا",
            "لَ",
            "هُ",
            "مِحْرَابٌ",
            "كَبِيْرٌ"
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 3,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مُبْتَدَأٌ مُؤَخَّرٌ"
                },
                {
                  "start": 5,
                  "end": 5,
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
            "بَدَلٌ",
            "تَمْيِيْزٌ",
            "فَاعِلٌ"
          ]
        },
        {
          "title": "أَنْزَلَ اللهُ كِتَابًا فِيْهِ آيَاتٌ بَيِّنَاتٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 7)",
          "sentence": "أَنْزَلَ اللهُ كِتَابًا فِيْهِ آيَاتٌ بَيِّنَاتٌ",
          "translation": "Allah revealed a book which has clear verses in it.",
          "cells": [
            "أَنْزَلَ",
            "اللهُ",
            "كِتَابًا",
            "فِيْ",
            "هِ",
            "آيَاتٌ",
            "بَيِّنَاتٌ"
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 3,
                  "end": 6,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 4,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُبْتَدَأٌ مُؤَخَّرٌ"
                },
                {
                  "start": 6,
                  "end": 6,
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
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "أَعُوْذُ بِاللهِ مِنْ كُلِّ عَمَلٍ يُخْزِيْنِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 7)",
          "sentence": "أَعُوْذُ بِاللهِ مِنْ كُلِّ عَمَلٍ يُخْزِيْنِيْ",
          "translation": "I seek refuge with Allah from every deed which disgraces me.",
          "cells": [
            "أَعُوْذُ",
            "بِاللهِ",
            "مِنْ",
            "كُلِّ",
            "عَمَلٍ",
            "يُخْزِيْنِيْ"
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 5,
                  "end": 5,
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
          "title": "صَامَ وَلَدٌ عُمْرُهُ خَمْسُ سَنَوَاتٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 7)",
          "sentence": "صَامَ وَلَدٌ عُمْرُهُ خَمْسُ سَنَوَاتٍ",
          "translation": "A boy whose age is five years fasted.",
          "cells": [
            "صَامَ",
            "وَلَدٌ",
            "عُمْرُ",
            "هُ",
            "خَمْسُ",
            "سَنَوَاتٍ"
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 3,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 4,
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
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
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
          "title": "هٰذَا دَوَاءٌ اشْتَرَيْتُهُ مِنْ دُكَّانِ الطَّبِيْبِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 7)",
          "sentence": "هٰذَا دَوَاءٌ اشْتَرَيْتُهُ مِنْ دُكَّانِ الطَّبِيْبِ",
          "translation": "This is a medicine which I bought from the doctor's shop.",
          "cells": [
            "هٰذَا",
            "دَوَاءٌ",
            "اشْتَرَيْتُهُ",
            "مِنْ",
            "دُكَّانِ",
            "الطَّبِيْبِ"
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 2,
                  "end": 5,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُ)"
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
            "بَدَلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "فَاعِلٌ"
          ]
        },
        {
          "title": "هَلْ تَرَى سَفِيْنَةً لَا تَجْرِيْ عَلَى الْبَحْرِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 7)",
          "sentence": "هَلْ تَرَى سَفِيْنَةً لَا تَجْرِيْ عَلَى الْبَحْرِ",
          "translation": "Do you see a ship which does not sail on the sea?",
          "cells": [
            "هَلْ",
            "تَرَى",
            "سَفِيْنَةً",
            "لَا",
            "تَجْرِيْ",
            "عَلَى الْبَحْرِ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 3,
                  "end": 5,
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
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هِيَ)"
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
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "هَؤُلَاءِ رِجَالٌ تَفِيْضُ أَعْيُنُهُمْ مِنْ خَشْيَةِ اللهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 7)",
          "sentence": "هَؤُلَاءِ رِجَالٌ تَفِيْضُ أَعْيُنُهُمْ مِنْ خَشْيَةِ اللهِ",
          "translation": "These are men whose eyes overflow out of fear of Allah.",
          "cells": [
            "هَؤُلَاءِ",
            "رِجَالٌ",
            "تَفِيْضُ",
            "أَعْيُنُ",
            "هُمْ",
            "مِنْ خَشْيَةِ اللهِ"
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 2,
                  "end": 5,
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
                  "role": "فِعْلٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ لَهُ غَيْرُ صَرِيْحٍ"
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
            "بَدَلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "مَفْعُوْلٌ بِهِ"
          ]
        },
        {
          "title": "هُمْ أَوْلَادٌ صَابِرُوْنَ لَا يَشْتَكُوْنَ الْمَصَائِبَ وَلَا يَجْزَعُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 7)",
          "sentence": "هُمْ أَوْلَادٌ صَابِرُوْنَ لَا يَشْتَكُوْنَ الْمَصَائِبَ وَلَا يَجْزَعُوْنَ",
          "translation": "They are patient children who do not complain of calamities and do not panic.",
          "cells": [
            "هُمْ",
            "أَوْلَادٌ",
            "صَابِرُوْنَ",
            "لَا",
            "يَشْتَكُوْنَ",
            "الْمَصَائِبَ",
            "وَ",
            "لَا",
            "يَجْزَعُوْنَ"
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
                  "end": 8,
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
                  "end": 2,
                  "role": "نَعْتٌ"
                },
                {
                  "start": 3,
                  "end": 8,
                  "role": "نَعْتٌ ثَانٍ"
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
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ) ثَانٍ"
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
          "title": "Book Exercise 7 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In هٰذَا دَوَاءٌ يَنْفَعُكَ, what is the خَبَر of هٰذَا?",
          "options": [
            "دَوَاءٌ alone",
            "يَنْفَعُكَ alone",
            "The whole phrase دَوَاءٌ يَنْفَعُكَ",
            "There is none"
          ],
          "correct": 2,
          "explanation": "The مَنْعُوْت and its نَعْت sentence together fill the خَبَر slot."
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In رَأَيْنَا مَسْجِدًا لَهُ مِحْرَابٌ كَبِيْرٌ, what is مِحْرَابٌ?",
          "options": [
            "The مُبْتَدَأٌ مُؤَخَّرٌ inside the نَعْت sentence",
            "A بَدَل of مَسْجِدًا",
            "The عَائِد",
            "A second مَفْعُوْلٌ بِهِ"
          ],
          "correct": 0,
          "explanation": "لَهُ is the fronted خَبَر; مِحْرَابٌ follows as the delayed subject, with كَبِيْرٌ as its نَعْت."
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In صَامَ وَلَدٌ عُمْرُهُ خَمْسُ سَنَوَاتٍ, what is خَمْسُ سَنَوَاتٍ?",
          "options": [
            "A تَمْيِيْز",
            "The خَبَر of عُمْرُهُ",
            "A بَدَل of وَلَدٌ",
            "A مَفْعُوْلٌ فِيْهِ"
          ],
          "correct": 1,
          "explanation": "عُمْرُهُ is the مُبْتَدَأ of the nested nominal sentence and خَمْسُ سَنَوَاتٍ its خَبَر."
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In أَعُوْذُ بِاللهِ مِنْ كُلِّ عَمَلٍ يُخْزِيْنِيْ, what does يُخْزِيْنِيْ describe?",
          "options": [
            "اللهِ",
            "كُلِّ",
            "عَمَلٍ",
            "The speaker"
          ],
          "correct": 2,
          "explanation": "The نَعْت attaches to the indefinite عَمَلٍ — 'every deed which disgraces me'."
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In الصَّبْرُ عَمَلٌ لَيْسَ لَهُ جَزَاءٌ إِلَّا الْجَنَّةُ, what is الْجَنَّةُ?",
          "options": [
            "The اِسْمُ لَيْسَ",
            "A بَدَل of جَزَاءٌ, after إِلَّا",
            "The خَبَرُ لَيْسَ",
            "A نَعْت of عَمَلٌ"
          ],
          "correct": 1,
          "explanation": "جَزَاءٌ is the اِسْمُ لَيْسَ, and إِلَّا introduces the exception that restates it."
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In يَوْمَ الْعِيْدِ سَأَلْبَسُ ثَوْبًا اشْتَرَاهُ ابْنِيْ لِيْ, who bought the garment?",
          "options": [
            "The speaker",
            "The son",
            "The garment itself",
            "It does not say"
          ],
          "correct": 1,
          "explanation": "ابْنِيْ is مَرْفُوْع and so is the doer; the attached هُ is the garment."
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In هُمْ أَوْلَادٌ صَابِرُوْنَ لَا يَشْتَكُوْنَ الْمَصَائِبَ وَلَا يَجْزَعُوْنَ, how many نَعْت does أَوْلَادٌ have?",
          "options": [
            "One",
            "Two — a single word and a sentence",
            "Three",
            "None"
          ],
          "correct": 1,
          "explanation": "صَابِرُوْنَ is the single-word نَعْت; the negated verbal sentence is the second."
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 7)",
          "kind": "mcq",
          "prompt": "In هٰذِهِ قَاعِدَةٌ حَفِظْتُهَا مُنْذُ سَنَوَاتٍ كَثِيْرَةٍ وَلَمْ أَنْسَهَا قَطُّ, what does مُنْذُ govern here?",
          "options": [
            "A جُمْلَةٌ فِعْلِيَّةٌ, so it is a مُضَاف",
            "An اِسْم, so it is a حَرْفٌ جَارٌّ",
            "Nothing",
            "A pronoun"
          ],
          "correct": 1,
          "explanation": "سَنَوَاتٍ is a noun, so مُنْذُ is a preposition here — the case of Lesson 23."
        },
        {
          "title": "prayer niche",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"prayer niche\"?",
          "options": [
            "مِحْرَابٌ",
            "تِمْثَالٌ",
            "قَلْبٌ",
            "عُمْرٌ"
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
            "idol, statue",
            "heart",
            "age, lifespan"
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
            "تَمَاثِيْلُ",
            "قُلُوْبٌ",
            "أَعْمَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "ship",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"ship\"?",
          "options": [
            "سَفِيْنَةٌ",
            "جَزَاءٌ",
            "نَفْسٌ",
            "اِنْكَسَرَ يَنْكَسِرُ"
          ],
          "correct": 0
        },
        {
          "title": "ship",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَفِيْنَةٌ mean?",
          "options": [
            "ship",
            "recompense",
            "soul, self",
            "to break (intransitive)"
          ],
          "correct": 0
        },
        {
          "title": "ship (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سَفِيْنَةٌ?",
          "options": [
            "سُفُنٌ",
            "أَجْزِيَةٌ",
            "نُفُوْسٌ",
            "مَحَارِيْبُ"
          ],
          "correct": 0
        },
        {
          "title": "sea",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sea\"?",
          "options": [
            "بَحْرٌ",
            "قَلْبٌ",
            "عُمْرٌ",
            "عَاذَ يَعُوْذُ"
          ],
          "correct": 0
        },
        {
          "title": "sea",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَحْرٌ mean?",
          "options": [
            "sea",
            "heart",
            "age, lifespan",
            "to seek refuge"
          ],
          "correct": 0
        },
        {
          "title": "sea (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَحْرٌ?",
          "options": [
            "بِحَارٌ",
            "قُلُوْبٌ",
            "أَعْمَارٌ",
            "سُفُنٌ"
          ],
          "correct": 0
        },
        {
          "title": "idol, statue",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"idol, statue\"?",
          "options": [
            "تِمْثَالٌ",
            "نَفْسٌ",
            "اِنْكَسَرَ يَنْكَسِرُ",
            "رَجَا يَرْجُو"
          ],
          "correct": 0
        },
        {
          "title": "idol, statue",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تِمْثَالٌ mean?",
          "options": [
            "idol, statue",
            "soul, self",
            "to break (intransitive)",
            "to hope for"
          ],
          "correct": 0
        },
        {
          "title": "idol, statue (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of تِمْثَالٌ?",
          "options": [
            "تَمَاثِيْلُ",
            "نُفُوْسٌ",
            "مَحَارِيْبُ",
            "بِحَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "recompense",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"recompense\"?",
          "options": [
            "جَزَاءٌ",
            "عُمْرٌ",
            "عَاذَ يَعُوْذُ",
            "لَبِسَ يَلْبَسُ"
          ],
          "correct": 0
        },
        {
          "title": "recompense",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَزَاءٌ mean?",
          "options": [
            "recompense",
            "age, lifespan",
            "to seek refuge",
            "to wear"
          ],
          "correct": 0
        },
        {
          "title": "recompense (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جَزَاءٌ?",
          "options": [
            "أَجْزِيَةٌ",
            "أَعْمَارٌ",
            "سُفُنٌ",
            "تَمَاثِيْلُ"
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
            "اِنْكَسَرَ يَنْكَسِرُ",
            "رَجَا يَرْجُو",
            "اِشْتَرَى يَشْتَرِيْ"
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
            "to break (intransitive)",
            "to hope for",
            "to buy"
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
            "مَحَارِيْبُ",
            "بِحَارٌ",
            "أَجْزِيَةٌ"
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
            "عَاذَ يَعُوْذُ",
            "لَبِسَ يَلْبَسُ",
            "جَرَى يَجْرِيْ"
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
            "to seek refuge",
            "to wear",
            "to run, to sail"
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
            "سُفُنٌ",
            "تَمَاثِيْلُ",
            "قُلُوْبٌ"
          ],
          "correct": 0
        },
        {
          "title": "age, lifespan",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"age, lifespan\"?",
          "options": [
            "عُمْرٌ",
            "رَجَا يَرْجُو",
            "اِشْتَرَى يَشْتَرِيْ",
            "اِشْتَكَى يَشْتَكِيْ"
          ],
          "correct": 0
        },
        {
          "title": "age, lifespan",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عُمْرٌ mean?",
          "options": [
            "age, lifespan",
            "to hope for",
            "to buy",
            "to complain"
          ],
          "correct": 0
        },
        {
          "title": "age, lifespan (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عُمْرٌ?",
          "options": [
            "أَعْمَارٌ",
            "بِحَارٌ",
            "أَجْزِيَةٌ",
            "نُفُوْسٌ"
          ],
          "correct": 0
        },
        {
          "title": "to break (intransitive)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to break (intransitive)\"?",
          "options": [
            "اِنْكَسَرَ يَنْكَسِرُ",
            "لَبِسَ يَلْبَسُ",
            "جَرَى يَجْرِيْ",
            "جَزِعَ يَجْزَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to break (intransitive)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْكَسَرَ يَنْكَسِرُ mean?",
          "options": [
            "to break (intransitive)",
            "to wear",
            "to run, to sail",
            "to panic"
          ],
          "correct": 0
        },
        {
          "title": "to break (intransitive) (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْكَسَرَ يَنْكَسِرُ?",
          "options": [
            "اِنْكِسَارًا",
            "رَجَاءً",
            "اِشْتِرَاءً",
            "اِشْتِكَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to seek refuge\"?",
          "options": [
            "عَاذَ يَعُوْذُ",
            "اِشْتَرَى يَشْتَرِيْ",
            "اِشْتَكَى يَشْتَكِيْ",
            "شَبِعَ يَشْبَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَاذَ يَعُوْذُ mean?",
          "options": [
            "to seek refuge",
            "to buy",
            "to complain",
            "to be satisfied, full"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَاذَ يَعُوْذُ?",
          "options": [
            "عِيَاذًا",
            "لُبْسًا",
            "جَرْيًا",
            "جَزَعًا"
          ],
          "correct": 0
        },
        {
          "title": "to hope for",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hope for\"?",
          "options": [
            "رَجَا يَرْجُو",
            "جَرَى يَجْرِيْ",
            "جَزِعَ يَجْزَعُ",
            "خَشَعَ يَخْشَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to hope for",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَجَا يَرْجُو mean?",
          "options": [
            "to hope for",
            "to run, to sail",
            "to panic",
            "to be humble"
          ],
          "correct": 0
        },
        {
          "title": "to hope for (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَجَا يَرْجُو?",
          "options": [
            "رَجَاءً",
            "اِشْتِرَاءً",
            "اِشْتِكَاءً",
            "شِبَعًا"
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
            "اِشْتَكَى يَشْتَكِيْ",
            "شَبِعَ يَشْبَعُ",
            "مِحْرَابٌ"
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
            "to complain",
            "to be satisfied, full",
            "prayer niche"
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
            "جَرْيًا",
            "جَزَعًا",
            "خُشُوْعًا"
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
            "جَزِعَ يَجْزَعُ",
            "خَشَعَ يَخْشَعُ",
            "سَفِيْنَةٌ"
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
            "to panic",
            "to be humble",
            "ship"
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
            "اِشْتِكَاءً",
            "شِبَعًا",
            "اِنْكِسَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to run, to sail",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to run, to sail\"?",
          "options": [
            "جَرَى يَجْرِيْ",
            "شَبِعَ يَشْبَعُ",
            "مِحْرَابٌ",
            "بَحْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to run, to sail",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَرَى يَجْرِيْ mean?",
          "options": [
            "to run, to sail",
            "to be satisfied, full",
            "prayer niche",
            "sea"
          ],
          "correct": 0
        },
        {
          "title": "to run, to sail (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَرَى يَجْرِيْ?",
          "options": [
            "جَرْيًا",
            "جَزَعًا",
            "خُشُوْعًا",
            "عِيَاذًا"
          ],
          "correct": 0
        },
        {
          "title": "to complain",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to complain\"?",
          "options": [
            "اِشْتَكَى يَشْتَكِيْ",
            "خَشَعَ يَخْشَعُ",
            "سَفِيْنَةٌ",
            "تِمْثَالٌ"
          ],
          "correct": 0
        },
        {
          "title": "to complain",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِشْتَكَى يَشْتَكِيْ mean?",
          "options": [
            "to complain",
            "to be humble",
            "ship",
            "idol, statue"
          ],
          "correct": 0
        },
        {
          "title": "to complain (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِشْتَكَى يَشْتَكِيْ?",
          "options": [
            "اِشْتِكَاءً",
            "شِبَعًا",
            "اِنْكِسَارًا",
            "رَجَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to panic",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to panic\"?",
          "options": [
            "جَزِعَ يَجْزَعُ",
            "مِحْرَابٌ",
            "بَحْرٌ",
            "جَزَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "to panic",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَزِعَ يَجْزَعُ mean?",
          "options": [
            "to panic",
            "prayer niche",
            "sea",
            "recompense"
          ],
          "correct": 0
        },
        {
          "title": "to panic (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَزِعَ يَجْزَعُ?",
          "options": [
            "جَزَعًا",
            "خُشُوْعًا",
            "عِيَاذًا",
            "لُبْسًا"
          ],
          "correct": 0
        },
        {
          "title": "to be satisfied, full",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be satisfied, full\"?",
          "options": [
            "شَبِعَ يَشْبَعُ",
            "سَفِيْنَةٌ",
            "تِمْثَالٌ",
            "قَلْبٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be satisfied, full",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَبِعَ يَشْبَعُ mean?",
          "options": [
            "to be satisfied, full",
            "ship",
            "idol, statue",
            "heart"
          ],
          "correct": 0
        },
        {
          "title": "to be satisfied, full (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَبِعَ يَشْبَعُ?",
          "options": [
            "شِبَعًا",
            "اِنْكِسَارًا",
            "رَجَاءً",
            "اِشْتِرَاءً"
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
            "بَحْرٌ",
            "جَزَاءٌ",
            "نَفْسٌ"
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
            "sea",
            "recompense",
            "soul, self"
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
            "عِيَاذًا",
            "لُبْسًا",
            "جَرْيًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l8",
      "title": "المراجعة",
      "subtitle": "Key terms and master vocabulary — no new material, just review",
      "concepts": [
        {
          "heading": "Unit 5, Section 1 Summary — The جُمْلَةٌ صُغْرَى, the Directly Nested Sentence",
          "lines": [
            {
              "html": "This is a cumulative review: every key grammar term covered in this Section, plus the full noun and verb vocabulary from every lesson. Nothing here is new — the quiz below draws only on terms already taught, and the practice bank it unlocks is there to keep the vocabulary fresh.",
              "list": false
            }
          ]
        },
        {
          "heading": "Where a جُمْلَةٌ صُغْرَى Can Occur — Consolidated",
          "lines": [
            {
              "table": {
                "title": "Structures (Book p. 469)",
                "headers": [
                  "Group",
                  "Slot",
                  "Condition",
                  "Note",
                  "Example"
                ],
                "rows": [
                  [
                    "Main Slots",
                    "خَبَرٌ",
                    "جُمْلَةٌ اسْمِيَّةٌ",
                    "",
                    "زَيْدٌ وَلَدُهُ قَائِمٌ"
                  ],
                  [
                    "Main Slots",
                    "خَبَرٌ",
                    "جُمْلَةٌ فِعْلِيَّةٌ — مَاضٍ",
                    "",
                    "زَيْدٌ قَامَ"
                  ],
                  [
                    "Main Slots",
                    "خَبَرٌ",
                    "جُمْلَةٌ فِعْلِيَّةٌ — مُضَارِعٌ",
                    "Present habitual or continuous",
                    "زَيْدٌ يَقُوْمُ"
                  ],
                  [
                    "Main Slots",
                    "مَفْعُوْلٌ بِهِ",
                    "قَالَ، يَقُوْلُ، سَأَلَ، يَسْأَلُ",
                    "Quotation without أَنْ",
                    "قَالَ زَيْدٌ: أُنْصُرْنِيْ"
                  ],
                  [
                    "Main Slots",
                    "مَفْعُوْلٌ بِهِ",
                    "Other verbs",
                    "Quotation with أَنِ التَّفْسِيْرِيَّةُ",
                    "نَادَى زَيْدٌ أَنِ أُنْصُرْنِيْ"
                  ],
                  [
                    "Main Slots",
                    "حَالٌ",
                    "جُمْلَةٌ فِعْلِيَّةٌ — مُضَارِعٌ",
                    "Simultaneous",
                    "جِئْتُ أَرْكَبُ"
                  ],
                  [
                    "Main Slots",
                    "حَالٌ",
                    "جُمْلَةٌ فِعْلِيَّةٌ — مَاضٍ",
                    "Prior",
                    "جِئْتُ وَقَدْ خَرَجْتَ"
                  ],
                  [
                    "Main Slots",
                    "حَالٌ",
                    "جُمْلَةٌ فِعْلِيَّةٌ — مَاضٍ",
                    "Contrast",
                    "لِمَ جِئْتَ وَقَدْ مَنَعْتُكَ"
                  ],
                  [
                    "Main Slots",
                    "حَالٌ",
                    "جُمْلَةٌ اسْمِيَّةٌ",
                    "Simultaneous",
                    "جِئْتُ وَأَنْتَ نَائِمٌ"
                  ],
                  [
                    "Main Slots",
                    "حَالٌ",
                    "جُمْلَةٌ اسْمِيَّةٌ",
                    "Contrast",
                    "جِئْتُ وَالْمَطَرُ يَنْزِلُ"
                  ],
                  [
                    "Phrases",
                    "مَعْطُوْفٌ",
                    "",
                    "",
                    "أَحْمَدُ جَاءَ وَذَهَبَ"
                  ],
                  [
                    "Phrases",
                    "بَدَلٌ",
                    "",
                    "No حَرْفُ عَطْفٍ between the two sentences",
                    "أَنْعَمَ اللهُ عَلَيْكَ هَدَاكَ"
                  ],
                  [
                    "Phrases",
                    "مُضَافٌ إِلَيْهِ",
                    "With a regular مُضَاف",
                    "",
                    "رَأَيْتُكَ يَوْمَ جِئْتَ"
                  ],
                  [
                    "Phrases",
                    "مُضَافٌ إِلَيْهِ",
                    "With a special مُضَاف — لَمَّا",
                    "'when' — one past occasion",
                    "رَأَيْتُكَ لَمَّا جِئْتَ"
                  ],
                  [
                    "Phrases",
                    "مُضَافٌ إِلَيْهِ",
                    "With a special مُضَاف — كُلَّمَا",
                    "'whenever'",
                    "رَأَيْتُكَ كُلَّمَا جِئْتَ"
                  ],
                  [
                    "Phrases",
                    "مُضَافٌ إِلَيْهِ",
                    "With a special مُضَاف — إِذْ",
                    "'when'",
                    "رَأَيْتُكَ إِذْ جِئْتَ"
                  ],
                  [
                    "Phrases",
                    "مُضَافٌ إِلَيْهِ",
                    "With a special مُضَاف — إِذَا",
                    "'when' — habitual or future",
                    "رَأَيْتُكَ إِذَا جِئْتَ"
                  ],
                  [
                    "Phrases",
                    "مُضَافٌ إِلَيْهِ",
                    "With a special مُضَاف — مُذْ، مُنْذُ",
                    "'since'",
                    "مَا رَأَيْتُكَ مُنْذُ جِئْتَ"
                  ],
                  [
                    "Phrases",
                    "مُضَافٌ إِلَيْهِ",
                    "With a special مُضَاف — حَيْثُ",
                    "'where', 'wherever'",
                    "رَأَيْتُ حَيْثُ جَلَسْتَ"
                  ],
                  [
                    "Phrases",
                    "نَعْتٌ",
                    "",
                    "The مَنْعُوْت is نَكِرَة and the sentence contains an عَائِد",
                    "رَأَيْتُ رَجُلًا جَاءَ"
                  ]
                ]
              }
            }
          ]
        },
        {
          "heading": "The Special Adverbs at a Glance",
          "lines": [
            {
              "table": {
                "title": "Special Adverbs (Book p. 458)",
                "headers": [
                  "Adverb",
                  "English",
                  "مُضَافٌ إِلَيْهِ",
                  "Main sentence",
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
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "What does جُمْلَةٌ صُغْرَى mean?",
          "options": [
            "Subsentence",
            "Anticipatory Pronoun",
            "وَاو used before a حَال sentence",
            "مَا placed after إِذَا"
          ],
          "correct": 0
        },
        {
          "q": "What does عَائِدٌ mean?",
          "options": [
            "Pronoun within the صُغْرَى that refers to something before it",
            "أَنْ used in quotations",
            "فَ on the main sentence with إِذَا",
            "Subsentence"
          ],
          "correct": 0
        },
        {
          "q": "What does ضَمِيْرُ الشَّأْنِ mean?",
          "options": [
            "Anticipatory Pronoun",
            "وَاو used before a حَال sentence",
            "مَا placed after إِذَا",
            "Pronoun within the صُغْرَى that refers to something before it"
          ],
          "correct": 0
        },
        {
          "q": "What does ضَمِيْرُ الْقِصَّةِ mean?",
          "options": [
            "Anticipatory Pronoun",
            "فَ on the main sentence with إِذَا",
            "Subsentence",
            "Anticipatory Pronoun"
          ],
          "correct": 0
        },
        {
          "q": "What does أَنِ التَّفْسِيْرِيَّةُ mean?",
          "options": [
            "أَنْ used in quotations",
            "مَا placed after إِذَا",
            "Pronoun within the صُغْرَى that refers to something before it",
            "Anticipatory Pronoun"
          ],
          "correct": 0
        },
        {
          "q": "What does وَاوٌ حَالِيَّةٌ mean?",
          "options": [
            "وَاو used before a حَال sentence",
            "Subsentence",
            "Anticipatory Pronoun",
            "أَنْ used in quotations"
          ],
          "correct": 0
        },
        {
          "q": "What does فَاءٌ رَابِطَةٌ mean?",
          "options": [
            "فَ on the main sentence with إِذَا",
            "Pronoun within the صُغْرَى that refers to something before it",
            "Anticipatory Pronoun",
            "وَاو used before a حَال sentence"
          ],
          "correct": 0
        },
        {
          "q": "What does مَا الصِّلَةِ mean?",
          "options": [
            "مَا placed after إِذَا",
            "Anticipatory Pronoun",
            "أَنْ used in quotations",
            "فَ on the main sentence with إِذَا"
          ],
          "correct": 0
        }
      ],
      "bank": [
        {
          "title": "name",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"name\"?",
          "options": [
            "اِسْمٌ",
            "أَهْلٌ",
            "جَسَدٌ",
            "دَوَاءٌ"
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
            "people",
            "body",
            "medicine"
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
            "—",
            "أَجْسَادٌ",
            "أَدْوِيَةٌ"
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
            "بَطْنٌ",
            "خَبَرٌ",
            "سِجْنٌ"
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
            "stomach",
            "news",
            "jail"
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
            "بُطُوْنٌ",
            "أَخْبَارٌ",
            "سُجُوْنٌ"
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
            "جَسَدٌ",
            "دَوَاءٌ",
            "ضَالٌّ"
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
            "body",
            "medicine",
            "misguided"
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
            "أَجْسَادٌ",
            "أَدْوِيَةٌ",
            "ضَالُّوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "people",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"people\"?",
          "options": [
            "أَهْلٌ",
            "خَبَرٌ",
            "سِجْنٌ",
            "طَبِيْبٌ"
          ],
          "correct": 0
        },
        {
          "title": "people",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَهْلٌ mean?",
          "options": [
            "people",
            "news",
            "jail",
            "doctor"
          ],
          "correct": 0
        },
        {
          "title": "people (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَهْلٌ?",
          "options": [
            "—",
            "أَخْبَارٌ",
            "سُجُوْنٌ",
            "أَطِبَّاءُ"
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
            "دَوَاءٌ",
            "ضَالٌّ",
            "عِشَاءٌ"
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
            "medicine",
            "misguided",
            "evening"
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
            "أَدْوِيَةٌ",
            "ضَالُّوْنَ",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "body",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"body\"?",
          "options": [
            "جَسَدٌ",
            "سِجْنٌ",
            "طَبِيْبٌ",
            "مِلَّةٌ"
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
            "jail",
            "doctor",
            "religion, creed"
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
            "أَطِبَّاءُ",
            "مِلَلٌ"
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
            "ضَالٌّ",
            "عِشَاءٌ",
            "هِلَالٌ"
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
            "misguided",
            "evening",
            "crescent"
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
            "ضَالُّوْنَ",
            "—",
            "أَهِلَّةٌ"
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
            "طَبِيْبٌ",
            "مِلَّةٌ",
            "أَبْصَرَ يُبْصِرُ"
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
            "doctor",
            "religion, creed",
            "to see"
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
            "أَطِبَّاءُ",
            "مِلَلٌ",
            "أَسْمَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "jail",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"jail\"?",
          "options": [
            "سِجْنٌ",
            "عِشَاءٌ",
            "هِلَالٌ",
            "اِجْتَنَبَ يَجْتَنِبُ"
          ],
          "correct": 0
        },
        {
          "title": "jail",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سِجْنٌ mean?",
          "options": [
            "jail",
            "evening",
            "crescent",
            "to abstain"
          ],
          "correct": 0
        },
        {
          "title": "jail (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سِجْنٌ?",
          "options": [
            "سُجُوْنٌ",
            "—",
            "أَهِلَّةٌ",
            "أَصَابِعُ"
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
            "مِلَّةٌ",
            "أَبْصَرَ يُبْصِرُ",
            "اِحْتَرَقَ يَحْتَرِقُ"
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
            "religion, creed",
            "to see",
            "to burn"
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
            "أَسْمَاءٌ",
            "اِمْتِحَانَاتٌ"
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
            "هِلَالٌ",
            "اِجْتَنَبَ يَجْتَنِبُ",
            "أَخْرَجَ يُخْرِجُ"
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
            "crescent",
            "to abstain",
            "to take out"
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
            "أَهِلَّةٌ",
            "أَصَابِعُ",
            "—"
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
            "أَبْصَرَ يُبْصِرُ",
            "اِحْتَرَقَ يَحْتَرِقُ",
            "اِسْتَرَاحَ يَسْتَرِيْحُ"
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
            "to see",
            "to burn",
            "to rest"
          ],
          "correct": 0
        },
        {
          "title": "evening (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عِشَاءٌ?",
          "options": [
            "—",
            "أَسْمَاءٌ",
            "اِمْتِحَانَاتٌ",
            "بُطُوْنٌ"
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
            "اِجْتَنَبَ يَجْتَنِبُ",
            "أَخْرَجَ يُخْرِجُ",
            "اِسْتَعَاذَ يَسْتَعِيْذُ"
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
            "to abstain",
            "to take out",
            "to seek refuge"
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
            "أَصَابِعُ",
            "—",
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
            "اِحْتَرَقَ يَحْتَرِقُ",
            "اِسْتَرَاحَ يَسْتَرِيْحُ",
            "اِسْتَقْبَلَ يَسْتَقْبِلُ"
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
            "to burn",
            "to rest",
            "to face, to turn towards"
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
            "اِمْتِحَانَاتٌ",
            "بُطُوْنٌ",
            "أَخْبَارٌ"
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
            "أَخْرَجَ يُخْرِجُ",
            "اِسْتَعَاذَ يَسْتَعِيْذُ",
            "اِسْتَكْبَرَ يَسْتَكْبِرُ"
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
            "to take out",
            "to seek refuge",
            "to act proudly"
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
            "جَرًّا",
            "تَحْدِيْثًا",
            "دَرْسًا"
          ],
          "correct": 0
        },
        {
          "title": "to abstain",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to abstain\"?",
          "options": [
            "اِجْتَنَبَ يَجْتَنِبُ",
            "اِسْتَرَاحَ يَسْتَرِيْحُ",
            "اِسْتَقْبَلَ يَسْتَقْبِلُ",
            "اِسْتَمَعَ يَسْتَمِعُ"
          ],
          "correct": 0
        },
        {
          "title": "to abstain",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِجْتَنَبَ يَجْتَنِبُ mean?",
          "options": [
            "to abstain",
            "to rest",
            "to face, to turn towards",
            "to listen"
          ],
          "correct": 0
        },
        {
          "title": "to abstain (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِجْتَنَبَ يَجْتَنِبُ?",
          "options": [
            "اِجْتِنَابًا",
            "جَزْمًا",
            "خِزْيًا",
            "دَفْنًا"
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
            "اِسْتَعَاذَ يَسْتَعِيْذُ",
            "اِسْتَكْبَرَ يَسْتَكْبِرُ",
            "أَكَّدَ يُؤَكِّدُ"
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
            "to seek refuge",
            "to act proudly",
            "to emphasise"
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
            "تَحْدِيْثًا",
            "دَرْسًا",
            "رَفْعًا"
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
            "اِسْتَقْبَلَ يَسْتَقْبِلُ",
            "اِسْتَمَعَ يَسْتَمِعُ",
            "اِنْتَظَرَ يَنْتَظِرُ"
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
            "to face, to turn towards",
            "to listen",
            "to wait"
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
            "خِزْيًا",
            "دَفْنًا",
            "زَجْرًا"
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
            "اِسْتَكْبَرَ يَسْتَكْبِرُ",
            "أَكَّدَ يُؤَكِّدُ",
            "أَنْجَى يُنْجِيْ"
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
            "to act proudly",
            "to emphasise",
            "to save"
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
            "دَرْسًا",
            "رَفْعًا",
            "سَيَلَانًا"
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
            "اِسْتَمَعَ يَسْتَمِعُ",
            "اِنْتَظَرَ يَنْتَظِرُ",
            "بَرَّ يَبَرُّ"
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
            "to listen",
            "to wait",
            "to be dutiful, obedient (to parents)"
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
            "دَفْنًا",
            "زَجْرًا",
            "مَشِيْئَةً"
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
            "أَكَّدَ يُؤَكِّدُ",
            "أَنْجَى يُنْجِيْ",
            "تَابَ يَتُوْبُ"
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
            "to emphasise",
            "to save",
            "to repent"
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
            "رَفْعًا",
            "سَيَلَانًا",
            "مُطَالَعَةً"
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
            "اِنْتَظَرَ يَنْتَظِرُ",
            "بَرَّ يَبَرُّ",
            "تَزَوَّجَ يَتَزَوَّجُ"
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
            "to wait",
            "to be dutiful, obedient (to parents)",
            "to get married"
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
            "زَجْرًا",
            "مَشِيْئَةً",
            "تَطْهِيْرًا"
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
            "أَنْجَى يُنْجِيْ",
            "تَابَ يَتُوْبُ",
            "تَكَلَّمَ يَتَكَلَّمُ"
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
            "to save",
            "to repent",
            "to speak"
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
            "سَيَلَانًا",
            "مُطَالَعَةً",
            "عَيْشًا"
          ],
          "correct": 0
        },
        {
          "title": "to emphasise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to emphasise\"?",
          "options": [
            "أَكَّدَ يُؤَكِّدُ",
            "بَرَّ يَبَرُّ",
            "تَزَوَّجَ يَتَزَوَّجُ",
            "تَوَفَّى يَتَوَفَّى"
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
            "to be dutiful, obedient (to parents)",
            "to get married",
            "to take (life); in the مَجْهُوْل تُوُفِّيَ, to die"
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
            "مَشِيْئَةً",
            "تَطْهِيْرًا",
            "عُطَاسًا"
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
            "تَابَ يَتُوْبُ",
            "تَكَلَّمَ يَتَكَلَّمُ",
            "جَرَّ يَجُرُّ"
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
            "to repent",
            "to speak",
            "to make مَجْرُوْرٌ"
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
            "عَيْشًا",
            "عُقُوْقًا"
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
            "تَزَوَّجَ يَتَزَوَّجُ",
            "تَوَفَّى يَتَوَفَّى",
            "جَزَمَ يَجْزِمُ"
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
            "to get married",
            "to take (life); in the مَجْهُوْل تُوُفِّيَ, to die",
            "to make مَجْزُوْمٌ"
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
            "تَطْهِيْرًا",
            "عُطَاسًا",
            "كَشْفًا"
          ],
          "correct": 0
        },
        {
          "title": "to be dutiful, obedient (to parents)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be dutiful, obedient (to parents)\"?",
          "options": [
            "بَرَّ يَبَرُّ",
            "تَكَلَّمَ يَتَكَلَّمُ",
            "جَرَّ يَجُرُّ",
            "حَدَّثَ يُحَدِّثُ"
          ],
          "correct": 0
        },
        {
          "title": "to be dutiful, obedient (to parents)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَرَّ يَبَرُّ mean?",
          "options": [
            "to be dutiful, obedient (to parents)",
            "to speak",
            "to make مَجْرُوْرٌ",
            "to narrate, to relate"
          ],
          "correct": 0
        },
        {
          "title": "to be dutiful, obedient (to parents) (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَرَّ يَبَرُّ?",
          "options": [
            "بِرًّا",
            "عَيْشًا",
            "عُقُوْقًا",
            "مُرُوْرًا"
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
            "تَوَفَّى يَتَوَفَّى",
            "جَزَمَ يَجْزِمُ",
            "خَزِيَ يَخْزَى"
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
            "to take (life); in the مَجْهُوْل تُوُفِّيَ, to die",
            "to make مَجْزُوْمٌ",
            "to be disgraced"
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
            "عُطَاسًا",
            "كَشْفًا",
            "نَصْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to get married",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to get married\"?",
          "options": [
            "تَزَوَّجَ يَتَزَوَّجُ",
            "جَرَّ يَجُرُّ",
            "حَدَّثَ يُحَدِّثُ",
            "دَرَسَ يَدْرُسُ"
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
            "to make مَجْرُوْرٌ",
            "to narrate, to relate",
            "to study"
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
            "عُقُوْقًا",
            "مُرُوْرًا",
            "نَفْيًا"
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
            "جَزَمَ يَجْزِمُ",
            "خَزِيَ يَخْزَى",
            "دَفَنَ يَدْفِنُ"
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
            "to make مَجْزُوْمٌ",
            "to be disgraced",
            "to bury"
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
            "كَشْفًا",
            "نَصْبًا",
            "تَوْفِيْقًا"
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
            "حَدَّثَ يُحَدِّثُ",
            "دَرَسَ يَدْرُسُ",
            "رَفَعَ يَرْفَعُ"
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
            "to narrate, to relate",
            "to study",
            "to make مَرْفُوْعٌ"
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
            "مُرُوْرًا",
            "نَفْيًا",
            "يُبْسًا"
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
            "خَزِيَ يَخْزَى",
            "دَفَنَ يَدْفِنُ",
            "زَجَرَ يَزْجُرُ"
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
            "to be disgraced",
            "to bury",
            "to scold"
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
            "تَوْفِيْقًا",
            "إِرْسَالًا"
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
            "دَرَسَ يَدْرُسُ",
            "رَفَعَ يَرْفَعُ",
            "سَالَ يَسِيْلُ"
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
            "to study",
            "to make مَرْفُوْعٌ",
            "to flow"
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
            "يُبْسًا",
            "إِيْحَاءً"
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
            "دَفَنَ يَدْفِنُ",
            "زَجَرَ يَزْجُرُ",
            "شَاءَ يَشَاءُ"
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
            "to bury",
            "to scold",
            "to wish, to desire"
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
            "تَوْفِيْقًا",
            "إِرْسَالًا",
            "عَهْدًا"
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
            "رَفَعَ يَرْفَعُ",
            "سَالَ يَسِيْلُ",
            "طَالَعَ يُطَالِعُ"
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
            "to make مَرْفُوْعٌ",
            "to flow",
            "to read, to study"
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
            "يُبْسًا",
            "إِيْحَاءً",
            "كِتَابَةً"
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
            "زَجَرَ يَزْجُرُ",
            "شَاءَ يَشَاءُ",
            "طَهَّرَ يُطَهِّرُ"
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
            "to scold",
            "to wish, to desire",
            "to clean"
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
            "إِرْسَالًا",
            "عَهْدًا",
            "مُنَادَاةً"
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
            "سَالَ يَسِيْلُ",
            "طَالَعَ يُطَالِعُ",
            "عَاشَ يَعِيْشُ"
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
            "to flow",
            "to read, to study",
            "to live"
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
            "إِيْحَاءً",
            "كِتَابَةً",
            "تَوْصِيَةً"
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
            "شَاءَ يَشَاءُ",
            "طَهَّرَ يُطَهِّرُ",
            "عَطَسَ يَعْطِسُ"
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
            "to wish, to desire",
            "to clean",
            "to sneeze"
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
            "عَهْدًا",
            "مُنَادَاةً",
            "إِبْصَارًا"
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
            "طَالَعَ يُطَالِعُ",
            "عَاشَ يَعِيْشُ",
            "عَقَّ يَعُقُّ"
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
            "to read, to study",
            "to live",
            "to disobey (parents)"
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
            "كِتَابَةً",
            "تَوْصِيَةً",
            "اِجْتِنَابًا"
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
            "طَهَّرَ يُطَهِّرُ",
            "عَطَسَ يَعْطِسُ",
            "كَشَفَ يَكْشِفُ"
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
            "to clean",
            "to sneeze",
            "to uncover, to remove"
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
            "مُنَادَاةً",
            "إِبْصَارًا",
            "اِحْتِرَاقًا"
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
            "عَاشَ يَعِيْشُ",
            "عَقَّ يَعُقُّ",
            "مَرَّ يَمُرُّ"
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
            "to live",
            "to disobey (parents)",
            "to pass"
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
            "تَوْصِيَةً",
            "اِجْتِنَابًا",
            "إِخْرَاجًا"
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
            "عَطَسَ يَعْطِسُ",
            "كَشَفَ يَكْشِفُ",
            "نَصَبَ يَنْصِبُ"
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
            "to sneeze",
            "to uncover, to remove",
            "to make مَنْصُوْبٌ"
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
            "إِبْصَارًا",
            "اِحْتِرَاقًا",
            "اِسْتِرَاحَةً"
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
            "عَقَّ يَعُقُّ",
            "مَرَّ يَمُرُّ",
            "نَفَى يَنْفِيْ"
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
            "to disobey (parents)",
            "to pass",
            "to negate"
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
            "اِجْتِنَابًا",
            "إِخْرَاجًا",
            "اِسْتِعَاذَةً"
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
            "كَشَفَ يَكْشِفُ",
            "نَصَبَ يَنْصِبُ",
            "وَفَّقَ يُوَفِّقُ"
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
            "to uncover, to remove",
            "to make مَنْصُوْبٌ",
            "to grant ability"
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
            "اِحْتِرَاقًا",
            "اِسْتِرَاحَةً",
            "اِسْتِقْبَالًا"
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
            "مَرَّ يَمُرُّ",
            "نَفَى يَنْفِيْ",
            "يَبِسَ يَيْبَسُ"
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
            "to pass",
            "to negate",
            "to be dry"
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
            "إِخْرَاجًا",
            "اِسْتِعَاذَةً",
            "اِسْتِكْبَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to disobey (parents)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to disobey (parents)\"?",
          "options": [
            "عَقَّ يَعُقُّ",
            "نَصَبَ يَنْصِبُ",
            "وَفَّقَ يُوَفِّقُ",
            "أَرْسَلَ يُرْسِلُ"
          ],
          "correct": 0
        },
        {
          "title": "to disobey (parents)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَقَّ يَعُقُّ mean?",
          "options": [
            "to disobey (parents)",
            "to make مَنْصُوْبٌ",
            "to grant ability",
            "to send"
          ],
          "correct": 0
        },
        {
          "title": "to disobey (parents) (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَقَّ يَعُقُّ?",
          "options": [
            "عُقُوْقًا",
            "اِسْتِرَاحَةً",
            "اِسْتِقْبَالًا",
            "اِسْتِمَاعًا"
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
            "نَفَى يَنْفِيْ",
            "يَبِسَ يَيْبَسُ",
            "أَوْحَى يُوْحِيْ"
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
            "to negate",
            "to be dry",
            "to inspire, to reveal"
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
            "اِسْتِعَاذَةً",
            "اِسْتِكْبَارًا",
            "تَأْكِيْدًا، تَوْكِيْدًا"
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
            "وَفَّقَ يُوَفِّقُ",
            "أَرْسَلَ يُرْسِلُ",
            "عَهِدَ يَعْهَدُ"
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
            "to grant ability",
            "to send",
            "to make a covenant"
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
            "اِسْتِقْبَالًا",
            "اِسْتِمَاعًا",
            "اِنْتِظَارًا"
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
            "يَبِسَ يَيْبَسُ",
            "أَوْحَى يُوْحِيْ",
            "كَتَبَ يَكْتُبُ"
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
            "to be dry",
            "to inspire, to reveal",
            "to write, to enjoin"
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
            "اِسْتِكْبَارًا",
            "تَأْكِيْدًا، تَوْكِيْدًا",
            "إِنْجَاءً"
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
            "أَرْسَلَ يُرْسِلُ",
            "عَهِدَ يَعْهَدُ",
            "نَادَى يُنَادِيْ"
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
            "to send",
            "to make a covenant",
            "to call out"
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
            "اِنْتِظَارًا",
            "بِرًّا"
          ],
          "correct": 0
        },
        {
          "title": "to grant ability",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to grant ability\"?",
          "options": [
            "وَفَّقَ يُوَفِّقُ",
            "أَوْحَى يُوْحِيْ",
            "كَتَبَ يَكْتُبُ",
            "وَصَّى يُوَصِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "to grant ability",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَفَّقَ يُوَفِّقُ mean?",
          "options": [
            "to grant ability",
            "to inspire, to reveal",
            "to write, to enjoin",
            "to advise, to order"
          ],
          "correct": 0
        },
        {
          "title": "to grant ability (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَفَّقَ يُوَفِّقُ?",
          "options": [
            "تَوْفِيْقًا",
            "تَأْكِيْدًا، تَوْكِيْدًا",
            "إِنْجَاءً",
            "تَوْبَةً"
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
            "عَهِدَ يَعْهَدُ",
            "نَادَى يُنَادِيْ",
            "اِسْمٌ"
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
            "to make a covenant",
            "to call out",
            "name"
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
            "اِنْتِظَارًا",
            "بِرًّا",
            "تَزَوُّجًا"
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
            "كَتَبَ يَكْتُبُ",
            "وَصَّى يُوَصِّيْ",
            "إِصْبَعٌ"
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
            "to write, to enjoin",
            "to advise, to order",
            "finger"
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
            "إِنْجَاءً",
            "تَوْبَةً",
            "تَكَلُّمًا"
          ],
          "correct": 0
        },
        {
          "title": "to inspire, to reveal",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to inspire, to reveal\"?",
          "options": [
            "أَوْحَى يُوْحِيْ",
            "نَادَى يُنَادِيْ",
            "اِسْمٌ",
            "اِمْتِحَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "to inspire, to reveal",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَوْحَى يُوْحِيْ mean?",
          "options": [
            "to inspire, to reveal",
            "to call out",
            "name",
            "exam"
          ],
          "correct": 0
        },
        {
          "title": "to inspire, to reveal (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَوْحَى يُوْحِيْ?",
          "options": [
            "إِيْحَاءً",
            "بِرًّا",
            "تَزَوُّجًا",
            "تَوَفِّيًا"
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
            "وَصَّى يُوَصِّيْ",
            "إِصْبَعٌ",
            "أَهْلٌ"
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
            "to advise, to order",
            "finger",
            "people"
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
            "تَوْبَةً",
            "تَكَلُّمًا",
            "جَرًّا"
          ],
          "correct": 0
        },
        {
          "title": "to write, to enjoin",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to write, to enjoin\"?",
          "options": [
            "كَتَبَ يَكْتُبُ",
            "اِسْمٌ",
            "اِمْتِحَانٌ",
            "بَطْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "to write, to enjoin",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَتَبَ يَكْتُبُ mean?",
          "options": [
            "to write, to enjoin",
            "name",
            "exam",
            "stomach"
          ],
          "correct": 0
        },
        {
          "title": "to write, to enjoin (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَتَبَ يَكْتُبُ?",
          "options": [
            "كِتَابَةً",
            "تَزَوُّجًا",
            "تَوَفِّيًا",
            "جَزْمًا"
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
            "إِصْبَعٌ",
            "أَهْلٌ",
            "جَسَدٌ"
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
            "finger",
            "people",
            "body"
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
            "تَكَلُّمًا",
            "جَرًّا",
            "تَحْدِيْثًا"
          ],
          "correct": 0
        },
        {
          "title": "to advise, to order",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to advise, to order\"?",
          "options": [
            "وَصَّى يُوَصِّيْ",
            "اِمْتِحَانٌ",
            "بَطْنٌ",
            "خَبَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to advise, to order",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَصَّى يُوَصِّيْ mean?",
          "options": [
            "to advise, to order",
            "exam",
            "stomach",
            "news"
          ],
          "correct": 0
        },
        {
          "title": "to advise, to order (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَصَّى يُوَصِّيْ?",
          "options": [
            "تَوْصِيَةً",
            "تَوَفِّيًا",
            "جَزْمًا",
            "خِزْيًا"
          ],
          "correct": 0
        }
      ]
    }
  ]
};

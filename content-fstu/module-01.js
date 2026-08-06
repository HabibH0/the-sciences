// Module 01 — Nouns (From the Start, Unit 1: Introduction + Part 1, pp. 15–31)
//
// Merges the original Introduction lesson with the four Nouns lessons into
// one module, per restructuring feedback. Lesson content/shape unchanged --
// see content-fstu/module-01.js's original conversion-pattern comment
// (concepts stay exercise-free; lesson.exercise.items[] renders as one
// persistent box; exerciseBank/vocab -> bank[]).
export default {
  "id": "f-nouns",
  "title": "الاسم",
  "heading": "اَلْوَحْدَةُ الْأُوْلَى",
  "blurb": "The word (اِسْمٌ, فِعْلٌ, حَرْفٌ) and the four characteristics of the اِسْمٌ.",
  "lessons": [
    {
      "id": "l1",
      "title": "الكلمة",
      "subtitle": "The three divisions of speech — اِسْمٌ, فِعْلٌ, and حَرْفٌ",
      "concepts": [
        {
          "heading": "Words",
          "lines": [
            {
              "html": "In Arabic a word is called <bdi>كَلِمَةٌ</bdi>. Arabic words are divided into three categories: nouns, verbs, and particles.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Arabic words are divided into three categories. Which list names them?",
            "kind": "mcq",
            "options": [
              "اِسْمٌ، فِعْلٌ، حَرْفٌ",
              "اِسْمٌ، فِعْلٌ، جَمْعٌ",
              "فِعْلٌ، حَرْفٌ، جَمْعٌ",
              "اِسْمٌ، حَرْفٌ، جَمْعٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Nouns",
          "lines": [
            {
              "html": "A noun is a name or a thing, e.g. man, pen, paper. A noun is called an <bdi>اِسْمٌ</bdi>.",
              "list": false
            },
            {
              "html": "Nouns usually have an <bdi>أَلْ</bdi> at the beginning or a <bdi>تَنْوِيْنٌ</bdi> at the end.",
              "list": false
            },
            {
              "html": "<bdi>اَلْقَلَمُ</bdi> — the pen (noun with أَلْ)",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>قَلَمٌ</bdi> — a pen (noun with تَنْوِيْنٌ)",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "قَلَمٌ is a…",
            "kind": "mcq",
            "options": [
              "اِسْمٌ (noun)",
              "فِعْلٌ (verb)",
              "حَرْفٌ (particle)"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Verbs",
          "lines": [
            {
              "html": "A verb is an action, e.g. run, sit. A verb is called a <bdi>فِعْلٌ</bdi>.",
              "list": false
            },
            {
              "html": "Verbs come in the following patterns:",
              "list": false
            },
            {
              "html": "<bdi>فَتَحَ</bdi> — he opened",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>يَفْتَحُ</bdi> — he opens",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>اِفْتَحْ</bdi> — open!",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "فَتَحَ is a…",
            "kind": "mcq",
            "options": [
              "اِسْمٌ (noun)",
              "فِعْلٌ (verb)",
              "حَرْفٌ (particle)"
            ],
            "correct": 1
          }
        },
        {
          "heading": "Particles",
          "lines": [
            {
              "html": "A particle is usually a one- or two-letter word, e.g. on, at. A particle is called a <bdi>حَرْفٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>فِيْ</bdi> — in",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>لِ</bdi> — for",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "لِ is a…",
            "kind": "mcq",
            "options": [
              "اِسْمٌ (noun)",
              "فِعْلٌ (verb)",
              "حَرْفٌ (particle)"
            ],
            "correct": 2
          }
        },
        {
          "heading": "Key Words",
          "lines": [
            {
              "html": "In vocab lists, the letter ج indicates <bdi>جَمْعٌ</bdi> — plural.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In a vocab list, a word appears followed by ج and a second word. What does that second word give?",
            "kind": "mcq",
            "options": [
              "The plural (جَمْعٌ) of the word",
              "The feminine form of the word",
              "The opposite in meaning",
              "The verb related to the word"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Words (كَلِمَاتٌ)",
        "rows": [
          {
            "label": "Noun",
            "arabic": "اِسْمٌ",
            "meaning": "Name, Thing",
            "examples": [
              "اَلْقَلَمُ",
              "قَلَمٌ"
            ],
            "unlockAt": 1
          },
          {
            "label": "Verb",
            "arabic": "فِعْلٌ",
            "meaning": "Action",
            "examples": [
              "فَتَحَ",
              "يَفْتَحُ",
              "اِفْتَحْ"
            ],
            "unlockAt": 2
          },
          {
            "label": "Particle",
            "arabic": "حَرْفٌ",
            "meaning": "One- or two-letter words",
            "examples": [
              "لِ",
              "فِيْ"
            ],
            "unlockAt": 3
          }
        ]
      },
      "quiz": [
        {
          "q": "What is a word called in Arabic?",
          "options": [
            "كَلِمَةٌ",
            "اِسْمٌ",
            "فِعْلٌ",
            "حَرْفٌ"
          ],
          "correct": 0,
          "explanation": "In Arabic a word is called كَلِمَةٌ. The three categories of words are اِسْمٌ, فِعْلٌ, and حَرْفٌ."
        },
        {
          "q": "Arabic words are divided into which three categories?",
          "options": [
            "Nouns, adjectives, and verbs",
            "Verbs, pronouns, and particles",
            "Nouns, verbs, and particles",
            "Nouns, verbs, and adverbs"
          ],
          "correct": 2,
          "explanation": "Every Arabic word is either a noun (اِسْمٌ), a verb (فِعْلٌ), or a particle (حَرْفٌ)."
        },
        {
          "q": "Which of the following are the usual signs of a noun (اِسْمٌ)?",
          "options": [
            "أَلْ at the beginning or تَنْوِيْنٌ at the end",
            "تَنْوِيْنٌ at the beginning or أَلْ at the end",
            "Being only one or two letters long",
            "Following the pattern فَتَحَ"
          ],
          "correct": 0,
          "explanation": "Nouns usually have أَلْ at the beginning (اَلْقَلَمُ) or تَنْوِيْنٌ at the end (قَلَمٌ)."
        },
        {
          "q": "The word فَتَحَ belongs to which category?",
          "options": [
            "اِسْمٌ (noun)",
            "فِعْلٌ (verb)",
            "حَرْفٌ (particle)",
            "جَمْعٌ (plural)"
          ],
          "correct": 1,
          "explanation": "فَتَحَ ('he opened') is an action, so it is a فِعْلٌ. Verbs come in patterns like فَتَحَ، يَفْتَحُ، اِفْتَحْ."
        },
        {
          "q": "A word that is usually only one or two letters long, like فِيْ or لِ, is a…",
          "options": [
            "اِسْمٌ (noun)",
            "فِعْلٌ (verb)",
            "حَرْفٌ (particle)",
            "كَلِمَةٌ (word)"
          ],
          "correct": 2,
          "explanation": "A particle (حَرْفٌ) is usually a one- or two-letter word, e.g. فِيْ (in), لِ (for)."
        },
        {
          "q": "In vocab lists, what does the letter ج indicate?",
          "options": [
            "The feminine form of the word",
            "The plural (جَمْعٌ) of the word",
            "That the word is a particle",
            "The root of the word"
          ],
          "correct": 1,
          "explanation": "The letter ج stands for جَمْعٌ, plural — the word after it is the plural form."
        }
      ],
      "bank": [
        {
          "title": "word",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"word\"?",
          "options": [
            "كَلِمَةٌ",
            "حَرْفٌ",
            "اِسْمٌ",
            "فِعْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "word",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَلِمَةٌ mean?",
          "options": [
            "word",
            "particle",
            "noun",
            "verb"
          ],
          "correct": 0
        },
        {
          "title": "word (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of كَلِمَةٌ?",
          "options": [
            "كَلِمَاتٌ",
            "أَسْمَاءٌ",
            "حُرُوْفٌ",
            "أَفْعَالٌ"
          ],
          "correct": 0
        },
        {
          "title": "noun",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"noun\"?",
          "options": [
            "اِسْمٌ",
            "فِعْلٌ",
            "كَلِمَةٌ",
            "حَرْفٌ"
          ],
          "correct": 0
        },
        {
          "title": "noun",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْمٌ mean?",
          "options": [
            "noun",
            "word",
            "particle",
            "verb"
          ],
          "correct": 0
        },
        {
          "title": "noun (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of اِسْمٌ?",
          "options": [
            "أَسْمَاءٌ",
            "أَفْعَالٌ",
            "كَلِمَاتٌ",
            "حُرُوْفٌ"
          ],
          "correct": 0
        },
        {
          "title": "verb",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"verb\"?",
          "options": [
            "فِعْلٌ",
            "حَرْفٌ",
            "اِسْمٌ",
            "كَلِمَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "verb",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فِعْلٌ mean?",
          "options": [
            "verb",
            "noun",
            "particle",
            "word"
          ],
          "correct": 0
        },
        {
          "title": "verb (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of فِعْلٌ?",
          "options": [
            "أَفْعَالٌ",
            "أَسْمَاءٌ",
            "حُرُوْفٌ",
            "كَلِمَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "particle",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"particle\"?",
          "options": [
            "حَرْفٌ",
            "كَلِمَةٌ",
            "اِسْمٌ",
            "فِعْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "particle",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَرْفٌ mean?",
          "options": [
            "particle",
            "verb",
            "word",
            "noun"
          ],
          "correct": 0
        },
        {
          "title": "particle (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حَرْفٌ?",
          "options": [
            "حُرُوْفٌ",
            "كَلِمَاتٌ",
            "أَفْعَالٌ",
            "أَسْمَاءٌ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l2",
      "title": "المعرفة والنكرة",
      "subtitle": "مَعْرِفَةٌ and نَكِرَةٌ — أَلْ, تَنْوِيْنٌ, and how each is translated",
      "concepts": [
        {
          "heading": "The Four Characteristics of Nouns",
          "lines": [
            {
              "html": "Nouns have four important characteristics: 1. Definite – Indefinite, 2. Gender, 3. Number, 4. I'rab.",
              "list": false
            },
            {
              "html": "DING is a mnemonic for remembering these characteristics.",
              "list": false
            },
            {
              "table": {
                "title": "The DING Mnemonic",
                "headers": [
                  "Letter",
                  "Characteristic"
                ],
                "rows": [
                  [
                    "D",
                    "Definite – Indefinite"
                  ],
                  [
                    "I",
                    "I'rab"
                  ],
                  [
                    "N",
                    "Number"
                  ],
                  [
                    "G",
                    "Gender"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "The DING mnemonic names the four characteristics of a noun. What does the 'D' stand for?",
            "kind": "mcq",
            "options": [
              "Definite – Indefinite",
              "Dual",
              "Diptote",
              "Demonstrative"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Definite",
          "lines": [
            {
              "html": "A definite noun is either: 1. A proper noun (name), e.g. Muhammad. 2. A noun with 'the' before it, e.g. the pen. The أَلْ at the beginning of an Arabic noun is equivalent to the word 'the' in English.",
              "list": false
            },
            {
              "html": "In Arabic, a definite noun is called مَعْرِفَةٌ.",
              "list": false
            },
            {
              "html": "مُحَمَّدٌ — Muhammad",
              "list": true,
              "bullet": true
            },
            {
              "html": "اَلرَّسُوْلُ — the messenger",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "مُحَمَّدٌ is…",
            "kind": "mcq",
            "options": [
              "مَعْرِفَةٌ (definite)",
              "نَكِرَةٌ (indefinite)"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Adding أَلْ to a Noun",
          "lines": [
            {
              "html": "When أَلْ is added to a noun, sometimes the لَامٌ is pronounced, and sometimes it is not.",
              "list": false
            },
            {
              "html": "اَلْمَاءُ — the water (لَامٌ pronounced)",
              "list": true,
              "bullet": true
            },
            {
              "html": "اَلرَّجُلُ — the man (لَامٌ not pronounced)",
              "list": true,
              "bullet": true
            },
            {
              "html": "The letters before which the لَامٌ is pronounced are called حُرُوْفٌ قَمَرِيَّةٌ, moon letters; letters which resemble the moon. Just as other stars are seen next to the moon, the لَامٌ is pronounced next to these letters.",
              "list": false
            },
            {
              "html": "The letters before which the لَامٌ is not pronounced are called حُرُوْفٌ شَمْسِيَّةٌ, sun letters; letters which resemble the sun. Just as other stars are not seen next to the sun, the لَامٌ is not pronounced next to these letters. When the لَامٌ is not pronounced, it is absorbed into the first letter of the noun.",
              "list": false
            },
            {
              "html": "Remember, irrespective of whether the لَامٌ is pronounced or not, it must be written in all cases.",
              "list": false
            },
            {
              "html": "The following tables present the حُرُوْفٌ قَمَرِيَّةٌ and حُرُوْفٌ شَمْسِيَّةٌ.",
              "list": false
            },
            {
              "table": {
                "title": "حُرُوْفٌ قَمَرِيَّةٌ — Moon Letters",
                "headers": [
                  "Letter",
                  "Example"
                ],
                "rows": [
                  [
                    "أ",
                    "اَلْأَبُ"
                  ],
                  [
                    "ب",
                    "اَلْبَابُ"
                  ],
                  [
                    "ج",
                    "اَلْجَنَّةُ"
                  ],
                  [
                    "ح",
                    "اَلْحِمَارُ"
                  ],
                  [
                    "خ",
                    "اَلْخُبْزُ"
                  ],
                  [
                    "ع",
                    "اَلْعَيْنُ"
                  ],
                  [
                    "غ",
                    "اَلْغَدَاءُ"
                  ],
                  [
                    "ف",
                    "اَلْفَمُ"
                  ],
                  [
                    "ق",
                    "اَلْقَمَرُ"
                  ],
                  [
                    "ك",
                    "اَلْكَلْبُ"
                  ],
                  [
                    "م",
                    "اَلْمَاءُ"
                  ],
                  [
                    "و",
                    "اَلْوَلَدُ"
                  ],
                  [
                    "ه",
                    "اَلْهَوَاءُ"
                  ],
                  [
                    "ي",
                    "اَلْيَدُ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "حُرُوْفٌ شَمْسِيَّةٌ — Sun Letters",
                "headers": [
                  "Letter",
                  "Example"
                ],
                "rows": [
                  [
                    "ت",
                    "اَلتَّاجِرُ"
                  ],
                  [
                    "ث",
                    "اَلثَّوْبُ"
                  ],
                  [
                    "د",
                    "اَلدُّنْيَا"
                  ],
                  [
                    "ذ",
                    "اَلذَّهَبُ"
                  ],
                  [
                    "ر",
                    "اَلرَّجُلُ"
                  ],
                  [
                    "ز",
                    "اَلزَّهْرَةُ"
                  ],
                  [
                    "س",
                    "اَلسَّمَكُ"
                  ],
                  [
                    "ش",
                    "اَلشَّمْسُ"
                  ],
                  [
                    "ص",
                    "اَلصَّدْرُ"
                  ],
                  [
                    "ض",
                    "اَلضَّيْفُ"
                  ],
                  [
                    "ط",
                    "اَلطَّالِبُ"
                  ],
                  [
                    "ظ",
                    "اَلظَّهْرُ"
                  ],
                  [
                    "ل",
                    "اَللَّحْمُ"
                  ],
                  [
                    "ن",
                    "اَلنَّجْمُ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "اَلشَّمْسُ opens with ش. Is the لَامٌ of أَلْ pronounced here, and is it still written either way?",
            "kind": "mcq",
            "options": [
              "Not pronounced (ش is a sun letter), but still written",
              "Pronounced (ش is a moon letter), and written",
              "Not pronounced, and also not written",
              "Pronounced, but not written"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Translation of أَلْ",
          "lines": [
            {
              "html": "The Arabic definite article, أَلْ, is usually translated as the English definite article, 'the'.",
              "list": false
            },
            {
              "html": "اَلرَّسُوْلُ — the messenger",
              "list": true,
              "bullet": true
            },
            {
              "html": "اَلنَّبِيُّ — the prophet",
              "list": true,
              "bullet": true
            },
            {
              "html": "However, there are a few exceptions: 1. If the noun after أَلْ refers to something tangible in the general sense, أَلْ can be translated as 'a' or omitted altogether.",
              "list": false
            },
            {
              "html": "اَلْوَلَدُ — a child",
              "list": true,
              "bullet": true
            },
            {
              "html": "اَلْأَوْلَادُ — children",
              "list": true,
              "bullet": true
            },
            {
              "html": "2. If the noun after أَلْ refers to something intangible.",
              "list": false
            },
            {
              "html": "اَلْعِلْمُ — knowledge",
              "list": true,
              "bullet": true
            },
            {
              "html": "3. The word اَلْمَرْءُ. This is translated as 'a person'.",
              "list": false
            },
            {
              "html": "اَلْمَرْءُ — a person",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "اَلْمَرْءُ is one of the named exceptions to translating أَلْ as 'the'. How should it be translated?",
            "kind": "mcq",
            "options": [
              "a person",
              "the person",
              "some people",
              "humanity"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Indefinite",
          "lines": [
            {
              "html": "An indefinite noun is a noun with the letter 'a/an' before it, e.g. a pen, an angel. In Arabic, an indefinite noun is called نَكِرَةٌ. A نَكِرَةٌ word will have a تَنْوِيْنٌ at the end.",
              "list": false
            },
            {
              "html": "رَسُوْلٌ — a messenger",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "طَالِبَةٌ is…",
            "kind": "mcq",
            "options": [
              "مَعْرِفَةٌ (definite)",
              "نَكِرَةٌ (indefinite)"
            ],
            "correct": 1
          }
        },
        {
          "heading": "Translation of تَنْوِيْنٌ",
          "lines": [
            {
              "html": "Nouns with تَنْوِيْنٌ are translated as follows: 1. Singular words are translated as 'a'.",
              "list": false
            },
            {
              "html": "رَسُوْلٌ — a messenger",
              "list": true,
              "bullet": true
            },
            {
              "html": "2. Plural words are translated as 'some' or 'a few'.",
              "list": false
            },
            {
              "html": "طُلَّابٌ — some students",
              "list": true,
              "bullet": true
            },
            {
              "html": "طُلَّابٌ — a few students",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "طُلَّابٌ ends in تَنْوِيْنٌ and is plural. How should it be translated?",
            "kind": "mcq",
            "options": [
              "'the students'",
              "'a student'",
              "'some students' or 'a few students'",
              "'two students'"
            ],
            "correct": 2
          }
        }
      ],
      "summary": {
        "title": "Noun — Characteristic 1: Definite and Indefinite",
        "rows": [
          {
            "label": "Definite",
            "arabic": "مَعْرِفَةٌ",
            "meaning": "The (proper noun, or with أَلْ)",
            "examples": [
              "مُحَمَّدٌ",
              "اَلرَّسُوْلُ"
            ],
            "unlockAt": 1
          },
          {
            "label": "Indefinite",
            "arabic": "نَكِرَةٌ",
            "meaning": "A / An (تَنْوِيْنٌ at the end)",
            "examples": [
              "رَسُوْلٌ"
            ],
            "unlockAt": 4
          }
        ]
      },
      "quiz": [
        {
          "q": "Which of the following makes a noun definite (مَعْرِفَةٌ)?",
          "options": [
            "Having تَنْوِيْنٌ at the end",
            "Being a proper noun (name) or having أَلْ at the beginning",
            "Being only one or two letters long",
            "Ending in ة"
          ],
          "correct": 1,
          "explanation": "A definite noun is either a proper noun (e.g. مُحَمَّدٌ) or a noun with أَلْ (e.g. اَلرَّسُوْلُ)."
        },
        {
          "q": "What is an indefinite noun called in Arabic, and what is its sign?",
          "options": [
            "مَعْرِفَةٌ — it has أَلْ",
            "نَكِرَةٌ — it has أَلْ",
            "نَكِرَةٌ — it has تَنْوِيْنٌ at the end",
            "مَعْرِفَةٌ — it has تَنْوِيْنٌ at the end"
          ],
          "correct": 2,
          "explanation": "An indefinite noun is called نَكِرَةٌ and carries a تَنْوِيْنٌ at the end, e.g. رَسُوْلٌ (a messenger)."
        },
        {
          "q": "Before sun letters (حُرُوْفٌ شَمْسِيَّةٌ), what happens to the لَامٌ of أَلْ?",
          "options": [
            "It is pronounced and written",
            "It is not pronounced but must still be written",
            "It is neither pronounced nor written",
            "It is written twice"
          ],
          "correct": 1,
          "explanation": "Before sun letters the لَامٌ is absorbed into the first letter of the noun — not pronounced — but it is written in all cases."
        },
        {
          "q": "Why are moon letters called حُرُوْفٌ قَمَرِيَّةٌ?",
          "options": [
            "Because they only appear at night in poetry",
            "Because the لَامٌ disappears next to them like stars at sunrise",
            "Because just as other stars are seen next to the moon, the لَامٌ is pronounced next to these letters",
            "Because they resemble the shape of a crescent"
          ],
          "correct": 2,
          "explanation": "The لَامٌ is 'visible' (pronounced) next to moon letters, just as stars are visible next to the moon."
        },
        {
          "q": "اَلْعِلْمُ is best translated as…",
          "options": [
            "the knowledge",
            "knowledge",
            "a science",
            "some knowledge"
          ],
          "correct": 1,
          "explanation": "When the noun after أَلْ is intangible, the أَلْ is not translated: اَلْعِلْمُ = knowledge."
        },
        {
          "q": "How is a plural noun with تَنْوِيْنٌ, like طُلَّابٌ, translated?",
          "options": [
            "'the students'",
            "'a student'",
            "'some students' or 'a few students'",
            "'two students'"
          ],
          "correct": 2,
          "explanation": "Singular tanwīn words take 'a'; plural tanwīn words are translated as 'some' or 'a few'."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "اَلرَّبُّ is…",
          "options": [
            "'the Lord' — مَعْرِفَةٌ",
            "'a lord' — نَكِرَةٌ",
            "'the Lord' — نَكِرَةٌ",
            "'a lord' — مَعْرِفَةٌ"
          ],
          "correct": 0,
          "explanation": "It has أَلْ at the beginning, so it is definite: 'the Lord'."
        },
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "رَسُوْلٌ is…",
          "options": [
            "'the messenger' — مَعْرِفَةٌ",
            "'a messenger' — نَكِرَةٌ",
            "'messengers' — نَكِرَةٌ",
            "'a messenger' — مَعْرِفَةٌ"
          ],
          "correct": 1,
          "explanation": "It ends in تَنْوِيْنٌ, so it is indefinite: 'a messenger'."
        },
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "اَلنَّبِيُّ is…",
          "options": [
            "'a prophet' — نَكِرَةٌ",
            "'the prophets' — مَعْرِفَةٌ",
            "'the prophet' — مَعْرِفَةٌ",
            "'some prophets' — نَكِرَةٌ"
          ],
          "correct": 2,
          "explanation": "أَلْ makes it definite and it is singular: 'the prophet'."
        },
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "كُتُبٌ is…",
          "options": [
            "'the books' — مَعْرِفَةٌ",
            "'a book' — نَكِرَةٌ",
            "'some books / a few books' — نَكِرَةٌ",
            "'two books' — نَكِرَةٌ"
          ],
          "correct": 2,
          "explanation": "كُتُبٌ is a plural with تَنْوِيْنٌ, so it is indefinite and translated 'some/a few books'."
        },
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "جَنَّةٌ is…",
          "options": [
            "'a garden' — نَكِرَةٌ",
            "'the garden' — مَعْرِفَةٌ",
            "'gardens' — نَكِرَةٌ",
            "'the gardens' — مَعْرِفَةٌ"
          ],
          "correct": 0,
          "explanation": "Singular with تَنْوِيْنٌ: 'a garden' — indefinite."
        },
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "اَلْإِمَامُ is…",
          "options": [
            "'an imam' — نَكِرَةٌ",
            "'the imam' — مَعْرِفَةٌ",
            "'imams' — مَعْرِفَةٌ",
            "'a leader' — مَعْرِفَةٌ"
          ],
          "correct": 1,
          "explanation": "أَلْ at the beginning makes it definite: 'the imam'."
        },
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "طَالِبَةٌ is…",
          "options": [
            "'the female student' — مَعْرِفَةٌ",
            "'a male student' — نَكِرَةٌ",
            "'a female student' — نَكِرَةٌ",
            "'some female students' — نَكِرَةٌ"
          ],
          "correct": 2,
          "explanation": "Singular feminine noun with تَنْوِيْنٌ: 'a female student' — indefinite."
        },
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "اَلْمَرْأَةُ is…",
          "options": [
            "'the woman' — مَعْرِفَةٌ",
            "'a woman' — نَكِرَةٌ",
            "'women' — مَعْرِفَةٌ",
            "'the women' — نَكِرَةٌ"
          ],
          "correct": 0,
          "explanation": "أَلْ makes it definite: 'the woman'."
        },
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "اَلْكُرْسِيُّ is…",
          "options": [
            "'a chair' — نَكِرَةٌ",
            "'the chair' — مَعْرِفَةٌ",
            "'the desk' — مَعْرِفَةٌ",
            "'some chairs' — نَكِرَةٌ"
          ],
          "correct": 1,
          "explanation": "أَلْ + كُرْسِيٌّ (chair) = 'the chair', definite."
        },
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "مَكَاتِبُ is…",
          "options": [
            "'the desks' — مَعْرِفَةٌ",
            "'a desk' — نَكِرَةٌ",
            "'desks' — نَكِرَةٌ (no أَلْ, plural)",
            "'the offices' — مَعْرِفَةٌ"
          ],
          "correct": 2,
          "explanation": "مَكَاتِبُ is the plural of مَكْتَبٌ (desk) with no أَلْ, so it is indefinite: 'desks'."
        },
        {
          "title": "house",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"house\"?",
          "options": [
            "بَيْتٌ",
            "رَسُوْلٌ",
            "مَسْجِدٌ",
            "طَالِبَةٌ"
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
            "lord, nourisher",
            "teacher (male)",
            "chair"
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
            "مُعَلِّمُوْنَ",
            "أَنْبِيَاءُ، نَبِيُّوْنَ",
            "أَرْبَابٌ"
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
            "جَنَّةٌ",
            "نَبِيٌّ",
            "كِتَابٌ"
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
            "messenger",
            "lord, nourisher",
            "teacher (female)"
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
            "كَرَاسِيُّ",
            "مُعَلِّمَاتٌ",
            "أَئِمَّةٌ"
          ],
          "correct": 0
        },
        {
          "title": "imam, leader",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"imam, leader\"?",
          "options": [
            "إِمَامٌ",
            "رَبٌّ",
            "نَبِيٌّ",
            "كُرْسِيٌّ"
          ],
          "correct": 0
        },
        {
          "title": "imam, leader",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does إِمَامٌ mean?",
          "options": [
            "imam, leader",
            "man",
            "student (female)",
            "chair"
          ],
          "correct": 0
        },
        {
          "title": "imam, leader (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of إِمَامٌ?",
          "options": [
            "أَئِمَّةٌ",
            "أَقْلَامٌ",
            "نِسَاءٌ، نِسْوَةٌ",
            "طَالِبَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "woman",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"woman\"?",
          "options": [
            "اِمْرَأَةٌ",
            "رَسُوْلٌ",
            "مُعَلِّمٌ",
            "كِتَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "woman",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِمْرَأَةٌ mean?",
          "options": [
            "woman",
            "man",
            "desk",
            "teacher (male)"
          ],
          "correct": 0
        },
        {
          "title": "woman (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of اِمْرَأَةٌ?",
          "options": [
            "نِسَاءٌ، نِسْوَةٌ",
            "كُتُبٌ",
            "أَرْبَابٌ",
            "رُسُلٌ"
          ],
          "correct": 0
        },
        {
          "title": "garden, heaven",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"garden, heaven\"?",
          "options": [
            "جَنَّةٌ",
            "طَالِبَةٌ",
            "إِمَامٌ",
            "رَجُلٌ"
          ],
          "correct": 0
        },
        {
          "title": "garden, heaven",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَنَّةٌ mean?",
          "options": [
            "garden, heaven",
            "teacher (male)",
            "child",
            "student (male)"
          ],
          "correct": 0
        },
        {
          "title": "garden, heaven (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جَنَّةٌ?",
          "options": [
            "جَنَّاتٌ",
            "مَكَاتِبُ",
            "مُعَلِّمُوْنَ",
            "أَنْبِيَاءُ، نَبِيُّوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "lord, nourisher",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"lord, nourisher\"?",
          "options": [
            "رَبٌّ",
            "طَالِبٌ",
            "قَلَمٌ",
            "طَالِبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "lord, nourisher",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَبٌّ mean?",
          "options": [
            "lord, nourisher",
            "student (female)",
            "imam, leader",
            "teacher (male)"
          ],
          "correct": 0
        },
        {
          "title": "lord, nourisher (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رَبٌّ?",
          "options": [
            "أَرْبَابٌ",
            "كَرَاسِيُّ",
            "رُسُلٌ",
            "أَقْلَامٌ"
          ],
          "correct": 0
        },
        {
          "title": "man",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"man\"?",
          "options": [
            "رَجُلٌ",
            "كِتَابٌ",
            "مَكْتَبٌ",
            "بَيْتٌ"
          ],
          "correct": 0
        },
        {
          "title": "man",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَجُلٌ mean?",
          "options": [
            "man",
            "teacher (male)",
            "student (male)",
            "prophet"
          ],
          "correct": 0
        },
        {
          "title": "man (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رَجُلٌ?",
          "options": [
            "رِجَالٌ",
            "أَنْبِيَاءُ، نَبِيُّوْنَ",
            "أَقْلَامٌ",
            "طُلَّابٌ"
          ],
          "correct": 0
        },
        {
          "title": "messenger",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"messenger\"?",
          "options": [
            "رَسُوْلٌ",
            "مَسْجِدٌ",
            "طَالِبٌ",
            "طِفْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "messenger",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَسُوْلٌ mean?",
          "options": [
            "messenger",
            "mosque",
            "man",
            "garden, heaven"
          ],
          "correct": 0
        },
        {
          "title": "messenger (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رَسُوْلٌ?",
          "options": [
            "رُسُلٌ",
            "أَنْبِيَاءُ، نَبِيُّوْنَ",
            "نِسَاءٌ، نِسْوَةٌ",
            "مُعَلِّمَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "student (male)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"student (male)\"?",
          "options": [
            "طَالِبٌ",
            "قَلَمٌ",
            "رَجُلٌ",
            "مُعَلِّمَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "student (male)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَالِبٌ mean?",
          "options": [
            "student (male)",
            "teacher (male)",
            "imam, leader",
            "chair"
          ],
          "correct": 0
        },
        {
          "title": "student (male) (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of طَالِبٌ?",
          "options": [
            "طُلَّابٌ",
            "كُتُبٌ",
            "مُعَلِّمَاتٌ",
            "أَنْبِيَاءُ، نَبِيُّوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "student (female)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"student (female)\"?",
          "options": [
            "طَالِبَةٌ",
            "كِتَابٌ",
            "مُعَلِّمٌ",
            "بَيْتٌ"
          ],
          "correct": 0
        },
        {
          "title": "student (female)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَالِبَةٌ mean?",
          "options": [
            "student (female)",
            "mosque",
            "pen",
            "garden, heaven"
          ],
          "correct": 0
        },
        {
          "title": "student (female) (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of طَالِبَةٌ?",
          "options": [
            "طَالِبَاتٌ",
            "أَقْلَامٌ",
            "أَنْبِيَاءُ، نَبِيُّوْنَ",
            "نِسَاءٌ، نِسْوَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "child",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"child\"?",
          "options": [
            "طِفْلٌ",
            "كِتَابٌ",
            "مُعَلِّمٌ",
            "اِمْرَأَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "child",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طِفْلٌ mean?",
          "options": [
            "child",
            "house",
            "mosque",
            "pen"
          ],
          "correct": 0
        },
        {
          "title": "child (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of طِفْلٌ?",
          "options": [
            "أَطْفَالٌ",
            "رِجَالٌ",
            "طُلَّابٌ",
            "مَسَاجِدُ"
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
            "مُعَلِّمَةٌ",
            "رَجُلٌ",
            "مُعَلِّمٌ"
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
            "imam, leader",
            "mosque",
            "book"
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
            "جَنَّاتٌ",
            "مُعَلِّمَاتٌ",
            "رِجَالٌ"
          ],
          "correct": 0
        },
        {
          "title": "book",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"book\"?",
          "options": [
            "كِتَابٌ",
            "رَسُوْلٌ",
            "رَجُلٌ",
            "طَالِبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "book",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كِتَابٌ mean?",
          "options": [
            "book",
            "garden, heaven",
            "messenger",
            "teacher (male)"
          ],
          "correct": 0
        },
        {
          "title": "book (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of كِتَابٌ?",
          "options": [
            "كُتُبٌ",
            "بُيُوْتٌ",
            "أَرْبَابٌ",
            "رِجَالٌ"
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
            "اِمْرَأَةٌ",
            "مُعَلِّمٌ",
            "نَبِيٌّ"
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
            "book",
            "child",
            "teacher (male)"
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
            "أَقْلَامٌ",
            "أَرْبَابٌ",
            "مَكَاتِبُ"
          ],
          "correct": 0
        },
        {
          "title": "teacher (male)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"teacher (male)\"?",
          "options": [
            "مُعَلِّمٌ",
            "طَالِبَةٌ",
            "طِفْلٌ",
            "كُرْسِيٌّ"
          ],
          "correct": 0
        },
        {
          "title": "teacher (male)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُعَلِّمٌ mean?",
          "options": [
            "teacher (male)",
            "mosque",
            "prophet",
            "pen"
          ],
          "correct": 0
        },
        {
          "title": "teacher (male) (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُعَلِّمٌ?",
          "options": [
            "مُعَلِّمُوْنَ",
            "رِجَالٌ",
            "بُيُوْتٌ",
            "طُلَّابٌ"
          ],
          "correct": 0
        },
        {
          "title": "teacher (female)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"teacher (female)\"?",
          "options": [
            "مُعَلِّمَةٌ",
            "طَالِبَةٌ",
            "رَجُلٌ",
            "نَبِيٌّ"
          ],
          "correct": 0
        },
        {
          "title": "teacher (female)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُعَلِّمَةٌ mean?",
          "options": [
            "teacher (female)",
            "mosque",
            "desk",
            "imam, leader"
          ],
          "correct": 0
        },
        {
          "title": "teacher (female) (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُعَلِّمَةٌ?",
          "options": [
            "مُعَلِّمَاتٌ",
            "طَالِبَاتٌ",
            "أَطْفَالٌ",
            "أَرْبَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "desk",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"desk\"?",
          "options": [
            "مَكْتَبٌ",
            "مُعَلِّمٌ",
            "قَلَمٌ",
            "كُرْسِيٌّ"
          ],
          "correct": 0
        },
        {
          "title": "desk",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَكْتَبٌ mean?",
          "options": [
            "desk",
            "prophet",
            "garden, heaven",
            "woman"
          ],
          "correct": 0
        },
        {
          "title": "desk (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَكْتَبٌ?",
          "options": [
            "مَكَاتِبُ",
            "رُسُلٌ",
            "مُعَلِّمُوْنَ",
            "كَرَاسِيُّ"
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
            "رَبٌّ",
            "مَكْتَبٌ",
            "مَسْجِدٌ"
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
            "house",
            "messenger",
            "desk"
          ],
          "correct": 0
        },
        {
          "title": "prophet (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَبِيٌّ?",
          "options": [
            "أَنْبِيَاءُ، نَبِيُّوْنَ",
            "جَنَّاتٌ",
            "رِجَالٌ",
            "مَسَاجِدُ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l3",
      "title": "التذكير والتأنيث",
      "subtitle": "مُذَكَّرٌ and مُؤَنَّثٌ — the three types of feminine noun",
      "concepts": [
        {
          "heading": "Gender in Arabic",
          "lines": [
            {
              "html": "In Arabic, all nouns, living and non-living, have a grammatical gender; they are categorized as either masculine or feminine for grammatical purposes, even though they are neither male nor female.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "كِتَابٌ (a book) has no natural sex. Does it still take a grammatical gender in Arabic?",
            "kind": "mcq",
            "options": [
              "Yes — every noun, living or not, is masculine or feminine",
              "No — gender only applies to people and animals",
              "Only if the word ends in ة",
              "Only proper nouns carry a gender"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Feminine Nouns",
          "lines": [
            {
              "html": "The Arabic term for feminine is <bdi>مُؤَنَّثٌ</bdi>. There are three types of feminine nouns.",
              "list": false
            },
            {
              "html": "(1) Natural Gender: a noun is considered مُؤَنَّثٌ if it is feminine by natural gender.",
              "list": false
            },
            {
              "html": "<bdi>أُمٌّ</bdi> — mother",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>مَرْيَمُ</bdi> — Maryam",
              "list": true,
              "bullet": true
            },
            {
              "html": "(2) Word with a Grammatical Sign: a word is also مُؤَنَّثٌ if it has an Arabic symbol for مُؤَنَّثٌ at the end — one such symbol is <bdi>اَلتَّاءُ الْمَرْبُوْطَةُ</bdi> (ة).",
              "list": false
            },
            {
              "html": "<bdi>اَلسَّنَةُ</bdi> — the year",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>جَنَّةٌ</bdi> — a garden",
              "list": true,
              "bullet": true
            },
            {
              "html": "(3) Arab Usage: a word is also مُؤَنَّثٌ if the Arabs have used it as feminine in their grammar. These are marked with the symbol (مث). Most body parts that occur in pairs and names of tribes fall under this category.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "شَمْسٌ (sun) has no ة and is not feminine by nature, yet it is مُؤَنَّثٌ. Which of the three types explains this?",
            "kind": "mcq",
            "options": [
              "مُؤَنَّثٌ — natural gender",
              "مُؤَنَّثٌ — grammatical sign (ة)",
              "مُؤَنَّثٌ — Arab usage",
              "It is not مُؤَنَّثٌ at all"
            ],
            "correct": 2
          }
        },
        {
          "heading": "Masculine Nouns",
          "lines": [
            {
              "html": "Aside from these three types of feminine nouns, all other nouns are masculine. The Arabic name for masculine is <bdi>مُذَكَّرٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>رَجُلٌ</bdi> — a man",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "كِتَابٌ is…",
            "kind": "mcq",
            "options": [
              "مُذَكَّرٌ (masculine)",
              "مُؤَنَّثٌ — natural gender",
              "مُؤَنَّثٌ — grammatical sign (ة)",
              "مُؤَنَّثٌ — Arab usage"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Noun — Characteristic 2: Gender",
        "rows": [
          {
            "label": "Masculine",
            "arabic": "مُذَكَّرٌ",
            "meaning": "All other nouns",
            "examples": [
              "رَجُلٌ"
            ],
            "unlockAt": 2
          },
          {
            "label": "Feminine — Natural Gender",
            "arabic": "مُؤَنَّثٌ",
            "meaning": "Feminine by nature",
            "examples": [
              "أُمٌّ"
            ],
            "unlockAt": 1
          },
          {
            "label": "Feminine — Grammatical Sign (ة)",
            "arabic": "مُؤَنَّثٌ",
            "meaning": "Ends with التَّاءُ الْمَرْبُوْطَةُ",
            "examples": [
              "جَنَّةٌ"
            ],
            "unlockAt": 1
          },
          {
            "label": "Feminine — Arab Usage",
            "arabic": "مُؤَنَّثٌ",
            "meaning": "Used as feminine by the Arabs (مث)",
            "examples": [
              "أَرْضٌ"
            ],
            "unlockAt": 1
          }
        ]
      },
      "quiz": [
        {
          "q": "Which statement about gender in Arabic is correct?",
          "options": [
            "Only living things have a grammatical gender",
            "All nouns, living and non-living, are grammatically masculine or feminine",
            "Non-living things have no gender",
            "Feminine gender only applies to people"
          ],
          "correct": 1,
          "explanation": "Every Arabic noun is categorized as masculine or feminine for grammatical purposes, even non-living things."
        },
        {
          "q": "How many types of feminine (مُؤَنَّثٌ) nouns are there, and what are they?",
          "options": [
            "Two: natural gender and grammatical sign",
            "Three: natural gender, grammatical sign, and Arab usage",
            "Three: natural gender, plural form, and Arab usage",
            "Four: natural, sign, usage, and borrowed"
          ],
          "correct": 1,
          "explanation": "The three types are: feminine by natural gender (أُمٌّ), by a grammatical sign like ة (جَنَّةٌ), and by Arab usage (أَرْضٌ)."
        },
        {
          "q": "Which symbol at the end of a word is a grammatical sign of مُؤَنَّثٌ?",
          "options": [
            "اَلتَّاءُ الْمَرْبُوْطَةُ (ة)",
            "تَنْوِيْنٌ",
            "أَلْ",
            "اَلْأَلِفُ"
          ],
          "correct": 0,
          "explanation": "The round taa, اَلتَّاءُ الْمَرْبُوْطَةُ (ة), marks a word as feminine, e.g. اَلسَّنَةُ، جَنَّةٌ."
        },
        {
          "q": "Which kinds of words usually fall under the 'Arab usage' type of feminine?",
          "options": [
            "Words for family members",
            "Most body parts that occur in pairs and names of tribes",
            "All words ending in ة",
            "Names of male people"
          ],
          "correct": 1,
          "explanation": "Paired body parts (يَدٌ، عَيْنٌ، رِجْلٌ) and tribe names are treated as feminine by Arab usage, marked (مث)."
        },
        {
          "q": "A noun that is none of the three feminine types is…",
          "options": [
            "still مُؤَنَّثٌ by default",
            "neither masculine nor feminine",
            "مُذَكَّرٌ (masculine)",
            "always a particle"
          ],
          "correct": 2,
          "explanation": "Aside from the three types of feminine nouns, all other nouns are masculine (مُذَكَّرٌ)."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 2",
          "kind": "mcq",
          "prompt": "أُخْتٌ is…",
          "options": [
            "'a sister' — مُؤَنَّثٌ (natural gender)",
            "'a sister' — مُذَكَّرٌ",
            "'a brother' — مُذَكَّرٌ",
            "'a sister' — مُؤَنَّثٌ (grammatical sign ة)"
          ],
          "correct": 0,
          "explanation": "A sister is feminine by natural gender — note it has no ة."
        },
        {
          "title": "Book Exercise 2",
          "kind": "mcq",
          "prompt": "اَلْجَدَّةُ is…",
          "options": [
            "'the grandfather' — مُذَكَّرٌ",
            "'the grandmother' — مُؤَنَّثٌ",
            "'a grandmother' — مُؤَنَّثٌ",
            "'the aunt' — مُؤَنَّثٌ"
          ],
          "correct": 1,
          "explanation": "اَلْجَدَّةُ = the grandmother; feminine (natural gender, and it carries the ة)."
        },
        {
          "title": "Book Exercise 2",
          "kind": "mcq",
          "prompt": "سَمَاءٌ is…",
          "options": [
            "'a sky' — مُذَكَّرٌ",
            "'a sky' — مُؤَنَّثٌ by Arab usage",
            "'the sky' — مُؤَنَّثٌ with a grammatical sign",
            "'a star' — مُذَكَّرٌ"
          ],
          "correct": 1,
          "explanation": "سَمَاءٌ is marked (مث): the Arabs use it as feminine, even without a feminine sign."
        },
        {
          "title": "Book Exercise 2",
          "kind": "mcq",
          "prompt": "اَلْعَمُّ is…",
          "options": [
            "'the uncle' — مُؤَنَّثٌ",
            "'the aunt' — مُؤَنَّثٌ",
            "'the uncle' — مُذَكَّرٌ",
            "'the grandfather' — مُذَكَّرٌ"
          ],
          "correct": 2,
          "explanation": "اَلْعَمُّ = the (paternal) uncle, masculine."
        },
        {
          "title": "Book Exercise 2",
          "kind": "mcq",
          "prompt": "مُعَلِّمٌ is…",
          "options": [
            "'a male teacher' — مُذَكَّرٌ",
            "'a female teacher' — مُؤَنَّثٌ",
            "'a male teacher' — مُؤَنَّثٌ",
            "'the teacher' — مُذَكَّرٌ"
          ],
          "correct": 0,
          "explanation": "مُعَلِّمٌ (no ة) is the male teacher — masculine; مُعَلِّمَةٌ is the female teacher."
        },
        {
          "title": "Book Exercise 2",
          "kind": "mcq",
          "prompt": "نَارٌ is…",
          "options": [
            "'a fire' — مُذَكَّرٌ",
            "'a light' — مُذَكَّرٌ",
            "'a fire' — مُؤَنَّثٌ by grammatical sign",
            "'a fire' — مُؤَنَّثٌ by Arab usage"
          ],
          "correct": 3,
          "explanation": "نَارٌ is marked (مث) — feminine by Arab usage; it has no feminine sign."
        },
        {
          "title": "Book Exercise 2",
          "kind": "mcq",
          "prompt": "اَلْبِنْتُ is…",
          "options": [
            "'the daughter' — مُؤَنَّثٌ (natural gender)",
            "'the son' — مُذَكَّرٌ",
            "'the daughter' — مُذَكَّرٌ",
            "'a daughter' — مُؤَنَّثٌ"
          ],
          "correct": 0,
          "explanation": "اَلْبِنْتُ = the daughter/girl — feminine by natural gender."
        },
        {
          "title": "Book Exercise 2",
          "kind": "mcq",
          "prompt": "أَرْضٌ is…",
          "options": [
            "'an earth/land' — مُؤَنَّثٌ by Arab usage",
            "'an earth/land' — مُذَكَّرٌ",
            "'the earth' — مُؤَنَّثٌ by grammatical sign",
            "'a mountain' — مُذَكَّرٌ"
          ],
          "correct": 0,
          "explanation": "أَرْضٌ is marked (مث): feminine by Arab usage."
        },
        {
          "title": "Book Exercise 2",
          "kind": "mcq",
          "prompt": "اَلسَّنَةُ is…",
          "options": [
            "'the year' — مُذَكَّرٌ",
            "'the year' — مُؤَنَّثٌ (grammatical sign ة)",
            "'a year' — مُؤَنَّثٌ",
            "'the night' — مُؤَنَّثٌ"
          ],
          "correct": 1,
          "explanation": "اَلسَّنَةُ ends in التَّاءُ الْمَرْبُوْطَةُ — feminine by grammatical sign."
        },
        {
          "title": "Book Exercise 2",
          "kind": "mcq",
          "prompt": "نُفُوْسٌ is…",
          "options": [
            "'souls' — مُؤَنَّثٌ by Arab usage",
            "'a soul' — مُؤَنَّثٌ",
            "'souls' — مُذَكَّرٌ",
            "'breaths' — مُذَكَّرٌ"
          ],
          "correct": 0,
          "explanation": "نُفُوْسٌ is the plural of نَفْسٌ (soul), which is feminine by Arab usage (مث)."
        },
        {
          "title": "sun",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sun\"?",
          "options": [
            "شَمْسٌ",
            "عَيْنٌ",
            "دُنْيَا",
            "أُخْتٌ"
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
            "sister",
            "night",
            "uncle (father's brother)"
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
            "أَطْفَالٌ",
            "بَنَاتٌ",
            "سَمَاوَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "earth",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"earth\"?",
          "options": [
            "أَرْضٌ",
            "لَيْلَةٌ، لَيْلٌ",
            "سَنَةٌ",
            "رِيْحٌ"
          ],
          "correct": 0
        },
        {
          "title": "earth",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَرْضٌ mean?",
          "options": [
            "earth",
            "foot",
            "night",
            "uncle (father's brother)"
          ],
          "correct": 0
        },
        {
          "title": "earth (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَرْضٌ?",
          "options": [
            "أَرْضُوْنَ",
            "أُمَّهَاتٌ",
            "أَعْمَامٌ",
            "جَدَّاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "eye, spring",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"eye, spring\"?",
          "options": [
            "عَيْنٌ",
            "شَمْسٌ",
            "جَدَّةٌ",
            "سَنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "eye, spring",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَيْنٌ mean?",
          "options": [
            "eye, spring",
            "night",
            "mother",
            "grandfather"
          ],
          "correct": 0
        },
        {
          "title": "eye, spring (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَيْنٌ?",
          "options": [
            "أَعْيُنٌ، عُيُوْنٌ",
            "أَعْمَامٌ",
            "جَدَّاتٌ",
            "لَيَالٍ"
          ],
          "correct": 0
        },
        {
          "title": "world",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"world\"?",
          "options": [
            "دُنْيَا",
            "أَرْضٌ",
            "شَمْسٌ",
            "بِنْتٌ"
          ],
          "correct": 0
        },
        {
          "title": "world",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دُنْيَا mean?",
          "options": [
            "world",
            "uncle (father's brother)",
            "child",
            "foot"
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
            "سَنَةٌ",
            "خَالَةٌ",
            "نَفْسٌ"
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
            "aunt (mother's sister)",
            "eye, spring",
            "sun"
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
            "شُمُوْسٌ",
            "أَعْيُنٌ، عُيُوْنٌ",
            "أُمَّهَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "foot",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"foot\"?",
          "options": [
            "رِجْلٌ",
            "نَفْسٌ",
            "أُمٌّ",
            "أُخْتٌ"
          ],
          "correct": 0
        },
        {
          "title": "foot",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رِجْلٌ mean?",
          "options": [
            "foot",
            "grandfather",
            "world",
            "night"
          ],
          "correct": 0
        },
        {
          "title": "foot (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رِجْلٌ?",
          "options": [
            "أَرْجُلٌ",
            "أَخَوَاتٌ",
            "جَدَّاتٌ",
            "سَمَاوَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "soul",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"soul\"?",
          "options": [
            "نَفْسٌ",
            "أَرْضٌ",
            "بِنْتٌ",
            "جَدٌّ"
          ],
          "correct": 0
        },
        {
          "title": "soul",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَفْسٌ mean?",
          "options": [
            "soul",
            "uncle (father's brother)",
            "grandfather",
            "wind"
          ],
          "correct": 0
        },
        {
          "title": "soul (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَفْسٌ?",
          "options": [
            "نُفُوْسٌ، أَنْفُسٌ",
            "أَجْدَادٌ",
            "خَالَاتٌ",
            "أَخَوَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "wind",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"wind\"?",
          "options": [
            "رِيْحٌ",
            "سَمَاءٌ",
            "بِنْتٌ",
            "طِفْلَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "wind",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رِيْحٌ mean?",
          "options": [
            "wind",
            "earth",
            "night",
            "hand"
          ],
          "correct": 0
        },
        {
          "title": "wind (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رِيْحٌ?",
          "options": [
            "رِيَاحٌ",
            "نِيْرَانٌ",
            "أُمَّهَاتٌ",
            "أَطْفَالٌ"
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
            "بِنْتٌ",
            "لَيْلَةٌ، لَيْلٌ",
            "جَدٌّ"
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
            "world",
            "child",
            "sky"
          ],
          "correct": 0
        },
        {
          "title": "hand (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of يَدٌ?",
          "options": [
            "أَيْدٍ، أَيَادٍ",
            "لَيَالٍ",
            "أَرْجُلٌ",
            "بَنَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "sky",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sky\"?",
          "options": [
            "سَمَاءٌ",
            "أُخْتٌ",
            "عَمٌّ",
            "نَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "sky",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَمَاءٌ mean?",
          "options": [
            "sky",
            "world",
            "aunt (mother's sister)",
            "grandfather"
          ],
          "correct": 0
        },
        {
          "title": "sky (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سَمَاءٌ?",
          "options": [
            "سَمَاوَاتٌ",
            "أَرْجُلٌ",
            "جَدَّاتٌ",
            "أَجْدَادٌ"
          ],
          "correct": 0
        },
        {
          "title": "aunt (mother's sister)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"aunt (mother's sister)\"?",
          "options": [
            "خَالَةٌ",
            "سَنَةٌ",
            "رِجْلٌ",
            "سَمَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "aunt (mother's sister)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَالَةٌ mean?",
          "options": [
            "aunt (mother's sister)",
            "sister",
            "soul",
            "eye, spring"
          ],
          "correct": 0
        },
        {
          "title": "aunt (mother's sister) (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of خَالَةٌ?",
          "options": [
            "خَالَاتٌ",
            "أَجْدَادٌ",
            "أُمَّهَاتٌ",
            "نِيْرَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "sister",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sister\"?",
          "options": [
            "أُخْتٌ",
            "دُنْيَا",
            "سَنَةٌ",
            "خَالَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "sister",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أُخْتٌ mean?",
          "options": [
            "sister",
            "wind",
            "eye, spring",
            "world"
          ],
          "correct": 0
        },
        {
          "title": "sister (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أُخْتٌ?",
          "options": [
            "أَخَوَاتٌ",
            "نُفُوْسٌ، أَنْفُسٌ",
            "أَرْجُلٌ",
            "سَمَاوَاتٌ"
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
            "دُنْيَا",
            "لَيْلَةٌ، لَيْلٌ",
            "طِفْلَةٌ"
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
            "child",
            "night",
            "earth"
          ],
          "correct": 0
        },
        {
          "title": "year (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سَنَةٌ?",
          "options": [
            "سَنَوَاتٌ، سِنُوْنَ",
            "أُمَّهَاتٌ",
            "أَعْيُنٌ، عُيُوْنٌ",
            "بَنَاتٌ"
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
            "يَدٌ",
            "بِنْتٌ",
            "شَمْسٌ"
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
            "grandmother",
            "sister",
            "grandfather"
          ],
          "correct": 0
        },
        {
          "title": "mother (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أُمٌّ?",
          "options": [
            "أُمَّهَاتٌ",
            "شُمُوْسٌ",
            "أَخَوَاتٌ",
            "سَنَوَاتٌ، سِنُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "child",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"child\"?",
          "options": [
            "طِفْلَةٌ",
            "عَمٌّ",
            "أُمٌّ",
            "رِجْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "child",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طِفْلَةٌ mean?",
          "options": [
            "child",
            "year",
            "grandfather",
            "mother"
          ],
          "correct": 0
        },
        {
          "title": "child (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of طِفْلَةٌ?",
          "options": [
            "أَطْفَالٌ",
            "رِيَاحٌ",
            "نِيْرَانٌ",
            "أَيْدٍ، أَيَادٍ"
          ],
          "correct": 0
        },
        {
          "title": "daughter",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"daughter\"?",
          "options": [
            "بِنْتٌ",
            "أَرْضٌ",
            "أُمٌّ",
            "رِيْحٌ"
          ],
          "correct": 0
        },
        {
          "title": "daughter",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بِنْتٌ mean?",
          "options": [
            "daughter",
            "grandmother",
            "sky",
            "world"
          ],
          "correct": 0
        },
        {
          "title": "daughter (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بِنْتٌ?",
          "options": [
            "بَنَاتٌ",
            "نِيْرَانٌ",
            "رِيَاحٌ",
            "أَرْجُلٌ"
          ],
          "correct": 0
        },
        {
          "title": "uncle (father's brother)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"uncle (father's brother)\"?",
          "options": [
            "عَمٌّ",
            "خَالَةٌ",
            "نَفْسٌ",
            "نَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "uncle (father's brother)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَمٌّ mean?",
          "options": [
            "uncle (father's brother)",
            "mother",
            "wind",
            "child"
          ],
          "correct": 0
        },
        {
          "title": "uncle (father's brother) (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَمٌّ?",
          "options": [
            "أَعْمَامٌ",
            "أَرْضُوْنَ",
            "رِيَاحٌ",
            "شُمُوْسٌ"
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
            "بِنْتٌ",
            "رِجْلٌ",
            "سَمَاءٌ"
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
            "mother",
            "fire",
            "uncle (father's brother)"
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
            "أَرْضُوْنَ",
            "جَدَّاتٌ",
            "سَمَاوَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "night",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"night\"?",
          "options": [
            "لَيْلَةٌ، لَيْلٌ",
            "عَيْنٌ",
            "شَمْسٌ",
            "يَدٌ"
          ],
          "correct": 0
        },
        {
          "title": "night",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَيْلَةٌ، لَيْلٌ mean?",
          "options": [
            "night",
            "wind",
            "sky",
            "sun"
          ],
          "correct": 0
        },
        {
          "title": "night (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of لَيْلَةٌ، لَيْلٌ?",
          "options": [
            "لَيَالٍ",
            "أَطْفَالٌ",
            "أَعْيُنٌ، عُيُوْنٌ",
            "أَرْضُوْنَ"
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
            "سَمَاءٌ",
            "خَالَةٌ",
            "أَرْضٌ"
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
            "world",
            "night",
            "year"
          ],
          "correct": 0
        },
        {
          "title": "grandmother (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جَدَّةٌ?",
          "options": [
            "جَدَّاتٌ",
            "أَجْدَادٌ",
            "أَرْضُوْنَ",
            "أَرْجُلٌ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l4",
      "title": "العدد",
      "subtitle": "مُفْرَدٌ, مُثَنًّى, and the regular vs. irregular جَمْعٌ",
      "concepts": [
        {
          "heading": "Singular, Dual and Plural",
          "lines": [
            {
              "html": "Nouns can be singular (boy) or plural (boys). In Arabic, nouns can also be dual, i.e. referring to two items or units.",
              "list": false
            },
            {
              "html": "A singular noun is called مُفْرَدٌ. A dual noun is called مُثَنًّى. In Arabic, there is a distinct way to show the dual form.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Arabic marks three grammatical numbers for a noun. Besides singular (مُفْرَدٌ) and plural, what is the third?",
            "kind": "mcq",
            "options": [
              "Dual (مُثَنًّى) — referring to exactly two",
              "Trial — referring to exactly three",
              "Collective — referring to a group",
              "Comparative"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Forming the Dual",
          "lines": [
            {
              "html": "Duals are made from the مُفْرَدٌ by: 1. Placing a فَتْحَةٌ on the last letter of the word, 2. Adding ـانِ.",
              "list": false
            },
            {
              "html": "رَجُلٌ ← رَجُلَانِ — a man → two men",
              "list": true,
              "bullet": true
            },
            {
              "html": "If ـانِ is added after a round ة, it will be written like a normal ت, اَلتَّاءُ الْمَفْتُوْحَةُ.",
              "list": false
            },
            {
              "html": "جَنَّةٌ ← جَنَّتَانِ — heaven → two heavens",
              "list": true,
              "bullet": true
            },
            {
              "html": "Dual as مَعْرِفَةٌ and نَكِرَةٌ: a dual word will never have a تَنْوِيْنٌ. It can, however, have an أَلْ. Therefore, if it has an أَلْ it will be مَعْرِفَةٌ, and if it does not have an أَلْ it will be نَكِرَةٌ, even though it does not have a تَنْوِيْنٌ.",
              "list": false
            },
            {
              "html": "اَلرَّجُلَانِ — the two men (مَعْرِفَةٌ)",
              "list": true,
              "bullet": true
            },
            {
              "html": "رَجُلَانِ — two men (نَكِرَةٌ)",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "جَنَّتَانِ is the dual of جَنَّةٌ. What happens to the round ة when ـانِ is added?",
            "kind": "mcq",
            "options": [
              "It is written like a normal ت (اَلتَّاءُ الْمَفْتُوْحَةُ)",
              "It is dropped completely",
              "It stays as ة",
              "It becomes an ا"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Plural — Regular (اَلْجَمْعُ السَّالِمُ)",
          "lines": [
            {
              "html": "A plural noun is called جَمْعٌ. There are two types of plurals in Arabic: regular and irregular.",
              "list": false
            },
            {
              "html": "A regular plural is one that follows a fixed pattern. This type of plural is called اَلْجَمْعُ السَّالِمُ. This is used for both مُذَكَّرٌ and مُؤَنَّثٌ words.",
              "list": false
            },
            {
              "html": "The regular plural of a masculine noun, جَمْعُ الْمُذَكَّرِ السَّالِمُ, is made by placing a ضَمَّةٌ on the last letter of the مُفْرَدٌ and then adding ـوْنَ.",
              "list": false
            },
            {
              "html": "مُسْلِمٌ ← مُسْلِمُوْنَ — a believer → believers",
              "list": true,
              "bullet": true
            },
            {
              "html": "The regular plural of a feminine noun, جَمْعُ الْمُؤَنَّثِ السَّالِمُ, is made by removing the ة, placing a فَتْحَةٌ on the last letter, and then adding ـاتٌ.",
              "list": false
            },
            {
              "html": "مُسْلِمَةٌ ← مُسْلِمَاتٌ — a believing woman → believing women",
              "list": true,
              "bullet": true
            },
            {
              "html": "Remember, the round ة / ـة is a sign of a singular word being مُؤَنَّثٌ, and the ـاتٌ is a sign of a plural word being مُؤَنَّثٌ.",
              "list": false
            },
            {
              "html": "The words 'one(s)' or 'person/people' may need to be added to the translation of some nouns.",
              "list": false
            },
            {
              "html": "اَلصَّادِقُوْنَ — The truthful ones / The truthful people",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "مُسْلِمَاتٌ is the feminine regular plural of مُسْلِمَةٌ. Which of the four number categories is this?",
            "kind": "mcq",
            "options": [
              "مُفْرَدٌ (singular)",
              "مُثَنًّى (dual)",
              "جَمْعٌ سَالِمٌ (regular plural)",
              "جَمْعٌ مُكَسَّرٌ (irregular plural)"
            ],
            "correct": 2
          }
        },
        {
          "heading": "Plural — Irregular (اَلْجَمْعُ الْمُكَسَّرُ)",
          "lines": [
            {
              "html": "An irregular plural does not follow a fixed pattern. This is called اَلْجَمْعُ الْمُكَسَّرُ.",
              "list": false
            },
            {
              "html": "رَسُوْلٌ ← رُسُلٌ — messenger → messengers",
              "list": true,
              "bullet": true
            },
            {
              "html": "نَهْرٌ ← أَنْهَارٌ — river → rivers",
              "list": true,
              "bullet": true
            },
            {
              "html": "There is no rule to these plurals; they must be learnt.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "رِجَالٌ (men) does not follow the regular ـوْنَ/ـاتٌ pattern. Which number category is it?",
            "kind": "mcq",
            "options": [
              "مُفْرَدٌ (singular)",
              "مُثَنًّى (dual)",
              "جَمْعٌ سَالِمٌ (regular plural)",
              "جَمْعٌ مُكَسَّرٌ (irregular plural)"
            ],
            "correct": 3
          }
        }
      ],
      "summary": {
        "title": "Noun — Characteristic 3: Number",
        "rows": [
          {
            "label": "Singular",
            "arabic": "مُفْرَدٌ",
            "meaning": "One",
            "examples": [
              "مُسْلِمٌ",
              "مُسْلِمَةٌ"
            ],
            "unlockAt": 0
          },
          {
            "label": "Dual",
            "arabic": "مُثَنًّى",
            "meaning": "Two — add ـانِ",
            "examples": [
              "مُسْلِمَانِ",
              "مُسْلِمَتَانِ"
            ],
            "unlockAt": 1
          },
          {
            "label": "Plural — regular, masculine",
            "arabic": "جَمْعُ الْمُذَكَّرِ السَّالِمُ",
            "meaning": "Fixed pattern ـوْنَ",
            "examples": [
              "مُسْلِمُوْنَ"
            ],
            "unlockAt": 2
          },
          {
            "label": "Plural — regular, feminine",
            "arabic": "جَمْعُ الْمُؤَنَّثِ السَّالِمُ",
            "meaning": "Fixed pattern ـاتٌ",
            "examples": [
              "مُسْلِمَاتٌ"
            ],
            "unlockAt": 2
          },
          {
            "label": "Plural — irregular",
            "arabic": "اَلْجَمْعُ الْمُكَسَّرُ",
            "meaning": "No fixed pattern — must be learnt",
            "examples": [
              "رِجَالٌ",
              "نِسَاءٌ"
            ],
            "unlockAt": 3
          }
        ]
      },
      "quiz": [
        {
          "q": "How is the dual (مُثَنًّى) formed from the singular?",
          "options": [
            "Add ـوْنَ after a ضَمَّةٌ",
            "Place a فَتْحَةٌ on the last letter and add ـانِ",
            "Add ـاتٌ after removing the ة",
            "Double the first letter"
          ],
          "correct": 1,
          "explanation": "رَجُلٌ → رَجُلَانِ: fathah on the last letter, then ـانِ."
        },
        {
          "q": "What happens to the round ة when the dual ending ـانِ is added?",
          "options": [
            "It is dropped completely",
            "It stays as ة",
            "It is written like a normal ت (اَلتَّاءُ الْمَفْتُوْحَةُ)",
            "It becomes an ا"
          ],
          "correct": 2,
          "explanation": "جَنَّةٌ → جَنَّتَانِ: the round taa is written as an open taa before ـانِ."
        },
        {
          "q": "How do you tell whether a dual word is مَعْرِفَةٌ or نَكِرَةٌ?",
          "options": [
            "By whether it has تَنْوِيْنٌ",
            "By whether it has أَلْ — duals never have تَنْوِيْنٌ",
            "Duals are always مَعْرِفَةٌ",
            "Duals are always نَكِرَةٌ"
          ],
          "correct": 1,
          "explanation": "A dual never carries تَنْوِيْنٌ, so أَلْ decides: اَلرَّجُلَانِ is definite, رَجُلَانِ is indefinite."
        },
        {
          "q": "How is جَمْعُ الْمُذَكَّرِ السَّالِمُ (the regular masculine plural) formed?",
          "options": [
            "ضَمَّةٌ on the last letter of the singular, then add ـوْنَ",
            "فَتْحَةٌ on the last letter, then add ـانِ",
            "Remove ة, فَتْحَةٌ on the last letter, then add ـاتٌ",
            "There is no fixed pattern"
          ],
          "correct": 0,
          "explanation": "مُسْلِمٌ → مُسْلِمُوْنَ: dammah on the last letter, then ـوْنَ."
        },
        {
          "q": "Which is a sign that a PLURAL word is مُؤَنَّثٌ?",
          "options": [
            "ة at the end",
            "ـاتٌ at the end",
            "ـوْنَ at the end",
            "أَلْ at the beginning"
          ],
          "correct": 1,
          "explanation": "The ة marks a singular feminine word; ـاتٌ marks a plural feminine word, e.g. مُسْلِمَاتٌ."
        },
        {
          "q": "What is true of the irregular plural (اَلْجَمْعُ الْمُكَسَّرُ)?",
          "options": [
            "It always ends in ـوْنَ",
            "It only applies to feminine words",
            "It follows no fixed pattern and must be learnt",
            "It is formed by adding ـانِ"
          ],
          "correct": 2,
          "explanation": "Irregular plurals like رَسُوْلٌ → رُسُلٌ and نَهْرٌ → أَنْهَارٌ have no rule; they must be memorised."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 3",
          "kind": "mcq",
          "prompt": "جَدَّانِ translates as…",
          "options": [
            "two grandfathers",
            "the two grandfathers",
            "grandfathers",
            "a grandfather"
          ],
          "correct": 0,
          "explanation": "The ending ـانِ marks the dual; no أَلْ, so indefinite: 'two grandfathers'."
        },
        {
          "title": "Book Exercise 3",
          "kind": "mcq",
          "prompt": "اَلْعَمَّانِ translates as…",
          "options": [
            "two uncles",
            "the two uncles",
            "the uncles",
            "the two aunts"
          ],
          "correct": 1,
          "explanation": "أَلْ + dual ending ـانِ = 'the two uncles'."
        },
        {
          "title": "Book Exercise 3",
          "kind": "mcq",
          "prompt": "يَدَانِ translates as…",
          "options": [
            "two feet",
            "the two hands",
            "two hands",
            "some hands"
          ],
          "correct": 2,
          "explanation": "يَدٌ (hand) + ـانِ = 'two hands', indefinite as there is no أَلْ."
        },
        {
          "title": "Book Exercise 3",
          "kind": "mcq",
          "prompt": "جَنَّتَانِ translates as…",
          "options": [
            "two gardens/heavens",
            "the two gardens",
            "gardens",
            "a garden"
          ],
          "correct": 0,
          "explanation": "جَنَّةٌ becomes جَنَّتَانِ in the dual — the ة is written as ت."
        },
        {
          "title": "Book Exercise 4",
          "kind": "mcq",
          "prompt": "What is the مُثَنًّى of اَلسَّنَةُ?",
          "options": [
            "اَلسَّنَتَانِ",
            "اَلسَّنَوَاتُ",
            "سَنَتَانِ",
            "اَلسِّنُوْنَ"
          ],
          "correct": 0,
          "explanation": "Keep the أَلْ, turn ة into ت and add ـانِ: اَلسَّنَتَانِ (the two years)."
        },
        {
          "title": "Book Exercise 4",
          "kind": "mcq",
          "prompt": "What is the مُثَنًّى of اِمْرَأَةٌ?",
          "options": [
            "اِمْرَأَتَانِ",
            "نِسَاءٌ",
            "اِمْرَأَانِ",
            "مَرْأَتَانِ"
          ],
          "correct": 0,
          "explanation": "اِمْرَأَةٌ → اِمْرَأَتَانِ (two women): ة becomes ت before ـانِ."
        },
        {
          "title": "Book Exercise 5",
          "kind": "mcq",
          "prompt": "اَلصَّادِقُوْنَ translates as…",
          "options": [
            "the truthful ones / the truthful people",
            "two truthful ones",
            "some truthful people",
            "the truthful one"
          ],
          "correct": 0,
          "explanation": "Regular masculine plural with أَلْ; 'ones/people' is added in translation."
        },
        {
          "title": "Book Exercise 5",
          "kind": "mcq",
          "prompt": "مُخْلِصُوْنَ translates as…",
          "options": [
            "the sincere ones",
            "sincere ones / sincere people",
            "two sincere ones",
            "a sincere person"
          ],
          "correct": 1,
          "explanation": "ـوْنَ marks the regular masculine plural; no أَلْ, so indefinite: 'sincere ones'."
        },
        {
          "title": "Book Exercise 5",
          "kind": "mcq",
          "prompt": "صَابِرَانِ translates as…",
          "options": [
            "patient ones",
            "the two patient ones",
            "two patient ones",
            "a patient person"
          ],
          "correct": 2,
          "explanation": "Despite appearing among the plurals, ـانِ marks the dual: 'two patient ones'."
        },
        {
          "title": "Book Exercise 6",
          "kind": "mcq",
          "prompt": "اَلْمُجْتَهِدَاتُ translates as…",
          "options": [
            "the hardworking women",
            "two hardworking women",
            "some hardworking women",
            "the hardworking man"
          ],
          "correct": 0,
          "explanation": "ـات marks the regular feminine plural, and أَلْ makes it definite."
        },
        {
          "title": "Book Exercise 6",
          "kind": "mcq",
          "prompt": "جَالِسَاتٌ translates as…",
          "options": [
            "the sitting women",
            "sitting women / ones",
            "two sitting women",
            "a sitting woman"
          ],
          "correct": 1,
          "explanation": "Feminine regular plural with تَنْوِيْنٌ — indefinite: 'sitting women'."
        },
        {
          "title": "Book Exercise 7",
          "kind": "mcq",
          "prompt": "آبَاءٌ translates as…",
          "options": [
            "fathers",
            "brothers",
            "two fathers",
            "the fathers"
          ],
          "correct": 0,
          "explanation": "آبَاءٌ is the irregular plural of أَبٌ (father)."
        },
        {
          "title": "Book Exercise 7",
          "kind": "mcq",
          "prompt": "اَلضُّيُوْفُ translates as…",
          "options": [
            "the mountains",
            "the guests",
            "guests",
            "the two guests"
          ],
          "correct": 1,
          "explanation": "ضُيُوْفٌ is the irregular plural of ضَيْفٌ (guest); أَلْ makes it 'the guests'."
        },
        {
          "title": "Book Exercise 7",
          "kind": "mcq",
          "prompt": "اَلنُّجُوْمُ translates as…",
          "options": [
            "the stars",
            "the chapters",
            "the nations",
            "the seas"
          ],
          "correct": 0,
          "explanation": "نُجُوْمٌ is the irregular plural of نَجْمٌ (star)."
        },
        {
          "title": "Book Exercise 7",
          "kind": "mcq",
          "prompt": "رُسُلٌ translates as…",
          "options": [
            "a messenger",
            "the messengers",
            "messengers",
            "two messengers"
          ],
          "correct": 2,
          "explanation": "رُسُلٌ is the irregular plural of رَسُوْلٌ; with تَنْوِيْنٌ and no أَلْ it is indefinite."
        },
        {
          "title": "transgressor",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"transgressor\"?",
          "options": [
            "فَاسِقٌ",
            "سُوْرَةٌ",
            "جَبَلٌ",
            "مُسْلِمٌ"
          ],
          "correct": 0
        },
        {
          "title": "transgressor",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَاسِقٌ mean?",
          "options": [
            "transgressor",
            "servant",
            "guest",
            "mountain"
          ],
          "correct": 0
        },
        {
          "title": "transgressor (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of فَاسِقٌ?",
          "options": [
            "فَاسِقُوْنَ",
            "آبَاءٌ",
            "مُؤْمِنُوْنَ",
            "جَالِسُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "hardworking",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"hardworking\"?",
          "options": [
            "مُجْتَهِدٌ",
            "نَجْمٌ",
            "عَبْدٌ",
            "فَاسِقٌ"
          ],
          "correct": 0
        },
        {
          "title": "hardworking",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُجْتَهِدٌ mean?",
          "options": [
            "hardworking",
            "chapter",
            "pious",
            "believer"
          ],
          "correct": 0
        },
        {
          "title": "hardworking (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُجْتَهِدٌ?",
          "options": [
            "مُجْتَهِدُوْنَ",
            "أَوْلَادٌ",
            "إِخْوَانٌ، إِخْوَةٌ",
            "جَالِسُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "sincere",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sincere\"?",
          "options": [
            "مُخْلِصٌ",
            "أَبٌ",
            "فَاسِقٌ",
            "سُوْرَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "sincere",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُخْلِصٌ mean?",
          "options": [
            "sincere",
            "servant",
            "mountain",
            "people"
          ],
          "correct": 0
        },
        {
          "title": "sincere (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُخْلِصٌ?",
          "options": [
            "مُخْلِصُوْنَ",
            "مُسْلِمُوْنَ",
            "عِبَادٌ",
            "صَالِحُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "Muslim",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Muslim\"?",
          "options": [
            "مُسْلِمٌ",
            "صَادِقٌ",
            "عَبْدٌ",
            "ضَيْفٌ"
          ],
          "correct": 0
        },
        {
          "title": "Muslim",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُسْلِمٌ mean?",
          "options": [
            "Muslim",
            "nation",
            "guest",
            "people"
          ],
          "correct": 0
        },
        {
          "title": "Muslim (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُسْلِمٌ?",
          "options": [
            "مُسْلِمُوْنَ",
            "مُجْتَهِدُوْنَ",
            "أُنَاسٌ",
            "أَوْلَادٌ"
          ],
          "correct": 0
        },
        {
          "title": "believer",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"believer\"?",
          "options": [
            "مُؤْمِنٌ",
            "أَخٌ",
            "مُجْتَهِدٌ",
            "وَلَدٌ"
          ],
          "correct": 0
        },
        {
          "title": "believer",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُؤْمِنٌ mean?",
          "options": [
            "believer",
            "transgressor",
            "pious",
            "patient"
          ],
          "correct": 0
        },
        {
          "title": "believer (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُؤْمِنٌ?",
          "options": [
            "مُؤْمِنُوْنَ",
            "صَادِقُوْنَ",
            "أُنَاسٌ",
            "جِبَالٌ"
          ],
          "correct": 0
        },
        {
          "title": "sitting",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sitting\"?",
          "options": [
            "جَالِسٌ",
            "عَبْدٌ",
            "أَبٌ",
            "صَادِقٌ"
          ],
          "correct": 0
        },
        {
          "title": "sitting",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَالِسٌ mean?",
          "options": [
            "sitting",
            "hardworking",
            "servant",
            "believer"
          ],
          "correct": 0
        },
        {
          "title": "sitting (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جَالِسٌ?",
          "options": [
            "جَالِسُوْنَ",
            "ضُيُوْفٌ",
            "مُؤْمِنُوْنَ",
            "مُسْلِمُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "thankful",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"thankful\"?",
          "options": [
            "شَاكِرٌ",
            "سُوْرَةٌ",
            "مُجْتَهِدٌ",
            "صَادِقٌ"
          ],
          "correct": 0
        },
        {
          "title": "thankful",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَاكِرٌ mean?",
          "options": [
            "thankful",
            "sitting",
            "servant",
            "nation"
          ],
          "correct": 0
        },
        {
          "title": "thankful (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَاكِرٌ?",
          "options": [
            "شَاكِرُوْنَ",
            "مُجْتَهِدُوْنَ",
            "إِخْوَانٌ، إِخْوَةٌ",
            "آبَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "patient",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"patient\"?",
          "options": [
            "صَابِرٌ",
            "نَاسٌ",
            "مُخْلِصٌ",
            "مُجْتَهِدٌ"
          ],
          "correct": 0
        },
        {
          "title": "patient",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَابِرٌ mean?",
          "options": [
            "patient",
            "child, son",
            "transgressor",
            "thankful"
          ],
          "correct": 0
        },
        {
          "title": "patient (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صَابِرٌ?",
          "options": [
            "صَابِرُوْنَ",
            "فَاسِقُوْنَ",
            "مُخْلِصُوْنَ",
            "نُجُوْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "truthful",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"truthful\"?",
          "options": [
            "صَادِقٌ",
            "مُخْلِصٌ",
            "جَبَلٌ",
            "عَبْدٌ"
          ],
          "correct": 0
        },
        {
          "title": "truthful",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَادِقٌ mean?",
          "options": [
            "truthful",
            "people",
            "thankful",
            "brother"
          ],
          "correct": 0
        },
        {
          "title": "truthful (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صَادِقٌ?",
          "options": [
            "صَادِقُوْنَ",
            "آبَاءٌ",
            "مُسْلِمُوْنَ",
            "مُجْتَهِدُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "pious",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"pious\"?",
          "options": [
            "صَالِحٌ",
            "قَوْمٌ",
            "نَجْمٌ",
            "شَاكِرٌ"
          ],
          "correct": 0
        },
        {
          "title": "pious",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَالِحٌ mean?",
          "options": [
            "pious",
            "brother",
            "child, son",
            "Muslim"
          ],
          "correct": 0
        },
        {
          "title": "pious (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صَالِحٌ?",
          "options": [
            "صَالِحُوْنَ",
            "عِبَادٌ",
            "سُوَرٌ",
            "مُجْتَهِدُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "servant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"servant\"?",
          "options": [
            "عَبْدٌ",
            "قَوْمٌ",
            "أَبٌ",
            "أَخٌ"
          ],
          "correct": 0
        },
        {
          "title": "servant",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَبْدٌ mean?",
          "options": [
            "servant",
            "transgressor",
            "sitting",
            "star"
          ],
          "correct": 0
        },
        {
          "title": "servant (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَبْدٌ?",
          "options": [
            "عِبَادٌ",
            "أَقْوَامٌ",
            "أَوْلَادٌ",
            "مُخْلِصُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "nation",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"nation\"?",
          "options": [
            "قَوْمٌ",
            "جَالِسٌ",
            "سُوْرَةٌ",
            "مُجْتَهِدٌ"
          ],
          "correct": 0
        },
        {
          "title": "nation",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَوْمٌ mean?",
          "options": [
            "nation",
            "guest",
            "mountain",
            "father"
          ],
          "correct": 0
        },
        {
          "title": "nation (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قَوْمٌ?",
          "options": [
            "أَقْوَامٌ",
            "جَالِسُوْنَ",
            "أَوْلَادٌ",
            "عِبَادٌ"
          ],
          "correct": 0
        },
        {
          "title": "people",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"people\"?",
          "options": [
            "نَاسٌ",
            "صَادِقٌ",
            "أَبٌ",
            "مُخْلِصٌ"
          ],
          "correct": 0
        },
        {
          "title": "people",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَاسٌ mean?",
          "options": [
            "people",
            "star",
            "patient",
            "Muslim"
          ],
          "correct": 0
        },
        {
          "title": "people (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَاسٌ?",
          "options": [
            "أُنَاسٌ",
            "مُؤْمِنُوْنَ",
            "أَقْوَامٌ",
            "جِبَالٌ"
          ],
          "correct": 0
        },
        {
          "title": "star",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"star\"?",
          "options": [
            "نَجْمٌ",
            "أَخٌ",
            "قَوْمٌ",
            "صَابِرٌ"
          ],
          "correct": 0
        },
        {
          "title": "star",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَجْمٌ mean?",
          "options": [
            "star",
            "transgressor",
            "sitting",
            "chapter"
          ],
          "correct": 0
        },
        {
          "title": "star (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَجْمٌ?",
          "options": [
            "نُجُوْمٌ",
            "أُنَاسٌ",
            "مُؤْمِنُوْنَ",
            "آبَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "child, son",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"child, son\"?",
          "options": [
            "وَلَدٌ",
            "سُوْرَةٌ",
            "جَبَلٌ",
            "مُسْلِمٌ"
          ],
          "correct": 0
        },
        {
          "title": "child, son",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَلَدٌ mean?",
          "options": [
            "child, son",
            "sitting",
            "sincere",
            "chapter"
          ],
          "correct": 0
        },
        {
          "title": "child, son (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of وَلَدٌ?",
          "options": [
            "أَوْلَادٌ",
            "آبَاءٌ",
            "فَاسِقُوْنَ",
            "سُوَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "father",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"father\"?",
          "options": [
            "أَبٌ",
            "وَلَدٌ",
            "شَاكِرٌ",
            "نَاسٌ"
          ],
          "correct": 0
        },
        {
          "title": "father",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبٌ mean?",
          "options": [
            "father",
            "pious",
            "sitting",
            "sincere"
          ],
          "correct": 0
        },
        {
          "title": "father (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَبٌ?",
          "options": [
            "آبَاءٌ",
            "صَادِقُوْنَ",
            "عِبَادٌ",
            "مُسْلِمُوْنَ"
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
            "مُؤْمِنٌ",
            "مُخْلِصٌ",
            "ضَيْفٌ"
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
            "sincere",
            "thankful",
            "truthful"
          ],
          "correct": 0
        },
        {
          "title": "brother (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَخٌ?",
          "options": [
            "إِخْوَانٌ، إِخْوَةٌ",
            "جِبَالٌ",
            "مُسْلِمُوْنَ",
            "أَوْلَادٌ"
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
            "شَاكِرٌ",
            "وَلَدٌ",
            "صَادِقٌ"
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
            "brother",
            "guest",
            "believer"
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
            "آبَاءٌ",
            "إِخْوَانٌ، إِخْوَةٌ",
            "صَادِقُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "chapter",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"chapter\"?",
          "options": [
            "سُوْرَةٌ",
            "وَلَدٌ",
            "قَوْمٌ",
            "مُؤْمِنٌ"
          ],
          "correct": 0
        },
        {
          "title": "chapter",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سُوْرَةٌ mean?",
          "options": [
            "chapter",
            "sitting",
            "believer",
            "nation"
          ],
          "correct": 0
        },
        {
          "title": "chapter (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سُوْرَةٌ?",
          "options": [
            "سُوَرٌ",
            "نُجُوْمٌ",
            "مُجْتَهِدُوْنَ",
            "جَالِسُوْنَ"
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
            "صَالِحٌ",
            "نَاسٌ",
            "صَادِقٌ"
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
            "brother",
            "mountain",
            "truthful"
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
            "جِبَالٌ",
            "مُجْتَهِدُوْنَ",
            "آبَاءٌ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l5",
      "title": "الإعراب",
      "subtitle": "مَرْفُوْعٌ, مَنْصُوْبٌ, مَجْرُوْرٌ — declinable vs. non-declinable nouns",
      "concepts": [
        {
          "heading": "The Three States",
          "lines": [
            {
              "html": "In Arabic, nouns occur in three states according to their grammatical function, irab, in the sentence. These three states are: 1. مَرْفُوْعٌ, 2. مَنْصُوْبٌ, 3. مَجْرُوْرٌ.",
              "list": false
            },
            {
              "html": "This is like the English pronouns I, me and my: they all have similar meanings, but each is used for a different grammatical function.",
              "list": false
            },
            {
              "table": {
                "title": "The English Pronouns I, me and my",
                "headers": [
                  "Subject",
                  "Object",
                  "Possession"
                ],
                "rows": [
                  [
                    "I am a student.",
                    "You heard me.",
                    "This is my book."
                  ]
                ]
              }
            },
            {
              "html": "The different grammatical functions will be discussed in the next unit.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "كِتَابٌ is…",
            "kind": "mcq",
            "options": [
              "مَرْفُوْعٌ",
              "مَنْصُوْبٌ",
              "مَجْرُوْرٌ",
              "مَنْصُوْبٌ or مَجْرُوْرٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Declinable and Non-Declinable Nouns",
          "lines": [
            {
              "html": "Nouns are of two types according to changes in their endings: 1. Non-Declinable Nouns: nouns whose endings do not change to reflect their grammatical state. In Arabic, these are called مَبْنِيٌّ. 2. Declinable Nouns: nouns whose endings change to reflect their grammatical state. In Arabic, these are called مُعْرَبٌ.",
              "list": false
            },
            {
              "html": "Five types of مُعْرَبٌ nouns have already been discussed: 1. اَلْمُفْرَدُ, 2. اَلْجَمْعُ الْمُكَسَّرُ, 3. اَلْمُثَنَّى, 4. جَمْعُ الْمُذَكَّرِ السَّالِمُ, 5. جَمْعُ الْمُؤَنَّثِ السَّالِمُ. There is a sixth type called غَيْرُ مُنْصَرِفٍ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "هٰذَا (this) keeps the same ending no matter its grammatical function in the sentence. Is it مُعْرَبٌ or مَبْنِيٌّ?",
            "kind": "mcq",
            "options": [
              "مَبْنِيٌّ — non-declinable",
              "مُعْرَبٌ — declinable",
              "غَيْرُ مُنْصَرِفٍ",
              "مُثَنًّى"
            ],
            "correct": 0
          }
        },
        {
          "heading": "غَيْرُ مُنْصَرِفٍ",
          "lines": [
            {
              "html": "There are some special Arabic words called غَيْرُ مُنْصَرِفٍ. These words do not have تَنْوِيْنٌ nor كَسْرَةٌ. There are three types of غَيْرُ مُنْصَرِفٍ words: 1. Names, 2. Plurals, 3. Adjectives.",
              "list": false
            },
            {
              "html": "Names — the following five types of names are غَيْرُ مُنْصَرِفٍ words: 1. Non-Arabic names.",
              "list": false
            },
            {
              "html": "إِبْرَاهِيْمُ — Ibrahim (a non-Arabic name)",
              "list": true,
              "bullet": true
            },
            {
              "html": "2. Feminine names. This also includes masculine names that end in a ة.",
              "list": false
            },
            {
              "html": "آمِنَةُ — Aminah (a feminine name)",
              "list": true,
              "bullet": true
            },
            {
              "html": "حَمْزَةُ — Hamzah (a masculine name ending in ة)",
              "list": true,
              "bullet": true
            },
            {
              "html": "3. Names in a pattern of a verb.",
              "list": false
            },
            {
              "html": "أَحْمَدُ — Ahmad (in the pattern of a verb)",
              "list": true,
              "bullet": true
            },
            {
              "html": "4. Names in the pattern of فُعَلُ.",
              "list": false
            },
            {
              "html": "عُمَرُ — Umar (in the pattern of فُعَلُ)",
              "list": true,
              "bullet": true
            },
            {
              "html": "5. Names ending with ـان.",
              "list": false
            },
            {
              "html": "عُثْمَانُ — Uthman (a name ending with ـان)",
              "list": true,
              "bullet": true
            },
            {
              "html": "A key to remember these five: The great grandfather of the Prophet ﷺ (إِبْرَاهِيْمُ), his mother (آمِنَةُ), his name (أَحْمَدُ), his second (عُمَرُ) and third Khalif (عُثْمَانُ).",
              "list": false
            },
            {
              "html": "All names of the prophets are غَيْرُ مُنْصَرِفٍ apart from the following: نُوْحٌ، شُعَيْبٌ، هُوْدٌ، صَالِحٌ، لُوْطٌ، مُحَمَّدٌ.",
              "list": false
            },
            {
              "html": "In the following table, some commonly used names from the Quran and Ahadith are mentioned.",
              "list": false
            },
            {
              "table": {
                "title": "Commonly Used Names from the Quran and Ahadith",
                "headers": [
                  "Male Names — مُنْصَرِفٌ",
                  "Male Names — غَيْرُ مُنْصَرِفٍ",
                  "Female Names — غَيْرُ مُنْصَرِفٍ"
                ],
                "rows": [
                  [
                    "بِلَالٌ، سَعِيْدٌ، عَمَّارٌ",
                    "إِبْلِيْسُ، آدَمُ، زَمْزَمُ، عُمَرُ، هَارُوْنُ",
                    "أَسْمَاءُ، خَدِيْجَةُ، سَوْدَةُ"
                  ],
                  [
                    "جَعْفَرٌ، شُعَيْبٌ، عَمْرٌو",
                    "إِدْرِيْسُ، جِبْرِيْلُ، سَلْمَانُ، عِمْرَانُ، هَامَانُ",
                    "أُمَامَةُ، خَوْلَةُ، فَاطِمَةُ"
                  ],
                  [
                    "خَالِدٌ، عَامِرٌ، لُوْطٌ",
                    "أُسَامَةُ، حُذَيْفَةُ، سُلَيْمَانُ، فِرْعَوْنُ، يَعْقُوْبُ",
                    "جُوَيْرِيَةُ، رُقَيَّةُ، مَارِيَةُ"
                  ],
                  [
                    "خَبَّابٌ، عَبَّاسٌ، مُصْعَبٌ",
                    "إِلْيَاسُ، حَمْزَةُ، طَلْحَةُ، لُقْمَانُ، يُوْسُفُ",
                    "حَفْصَةُ، زَيْنَبُ، مَرْيَمُ"
                  ],
                  [
                    "زُبَيْرٌ، عُزَيْرٌ، نُوْحٌ",
                    "أَيُّوْبُ، دَاوُوْدُ، عُبَيْدَةُ، مِيْكَائِيْلُ، يُوْنُسُ",
                    "حَمْنَةُ، سُمَيَّةُ، نُسَيْبَةُ"
                  ]
                ]
              }
            },
            {
              "html": "Plurals — broken plurals in the patterns below are غَيْرُ مُنْصَرِفٍ. They only have one ضَمَّةٌ.",
              "list": false
            },
            {
              "html": "أَنْبِيَاءُ — prophets",
              "list": true,
              "bullet": true
            },
            {
              "html": "عُلَمَاءُ — learned",
              "list": true,
              "bullet": true
            },
            {
              "html": "أَشْيَاءُ — things",
              "list": true,
              "bullet": true
            },
            {
              "html": "مَدَارِسُ — schools",
              "list": true,
              "bullet": true
            },
            {
              "html": "قَرَاطِيْسُ — papers",
              "list": true,
              "bullet": true
            },
            {
              "html": "A key to remember these five: The أَنْبِيَاءُ (prophets) passed on knowledge to the عُلَمَاءُ (learned) who taught أَشْيَاءُ (things) in مَدَارِسُ (schools) using قَرَاطِيْسُ (papers).",
              "list": false
            },
            {
              "html": "Adjectives — some adjectives are غَيْرُ مُنْصَرِفٍ; namely those in the pattern of أَفْعَلُ and فَعْلَانُ.",
              "list": false
            },
            {
              "html": "أَحْمَرُ — red",
              "list": true,
              "bullet": true
            },
            {
              "html": "غَضْبَانُ — angry",
              "list": true,
              "bullet": true
            },
            {
              "html": "A key to remember these two: This list made me غَضْبَانُ (angry) and my face turned أَحْمَرُ (red).",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "إِبْرَاهِيْمَ is غَيْرُ مُنْصَرِفٍ, so it takes no تَنْوِيْنٌ and no كَسْرَةٌ. What is its irab here?",
            "kind": "mcq",
            "options": [
              "مَرْفُوْعٌ",
              "مَنْصُوْبٌ",
              "مَجْرُوْرٌ",
              "مَنْصُوْبٌ or مَجْرُوْرٌ"
            ],
            "correct": 3
          }
        },
        {
          "heading": "Irab Table of Nouns",
          "lines": [
            {
              "html": "The following table summarises the types of nouns and the way they express each state.",
              "list": false
            },
            {
              "table": {
                "title": "Irab Table of Nouns",
                "headers": [
                  "Type of Noun",
                  "مَرْفُوْعٌ",
                  "مَنْصُوْبٌ",
                  "مَجْرُوْرٌ"
                ],
                "rows": [
                  [
                    "اَلْمُفْرَدُ",
                    "ضَمَّةٌ — كِتَابٌ",
                    "فَتْحَةٌ — كِتَابًا",
                    "كَسْرَةٌ — كِتَابٍ"
                  ],
                  [
                    "اَلْجَمْعُ الْمُكَسَّرُ",
                    "ضَمَّةٌ — كُتُبٌ",
                    "فَتْحَةٌ — كُتُبًا",
                    "كَسْرَةٌ — كُتُبٍ"
                  ],
                  [
                    "اَلْمُثَنَّى",
                    "(ـَانِ) — مُسْلِمَانِ",
                    "(ـَيْنِ) — مُسْلِمَيْنِ",
                    "(ـَيْنِ) — مُسْلِمَيْنِ"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ السَّالِمُ",
                    "(ـُوْنَ) — مُسْلِمُوْنَ",
                    "(ـِيْنَ) — مُسْلِمِيْنَ",
                    "(ـِيْنَ) — مُسْلِمِيْنَ"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ السَّالِمُ",
                    "ضَمَّةٌ (ـَاتٌ) — مُسْلِمَاتٌ",
                    "كَسْرَةٌ (ـَاتِ) — مُسْلِمَاتِ",
                    "كَسْرَةٌ (ـَاتِ) — مُسْلِمَاتِ"
                  ],
                  [
                    "غَيْرُ مُنْصَرِفٍ",
                    "ضَمَّةٌ — إِبْرَاهِيْمُ، أَنْبِيَاءُ",
                    "فَتْحَةٌ — إِبْرَاهِيْمَ، أَنْبِيَاءَ",
                    "فَتْحَةٌ — إِبْرَاهِيْمَ، أَنْبِيَاءَ"
                  ],
                  [
                    "مَبْنِيٌّ",
                    "Unchanged — هٰذَا",
                    "Unchanged — هٰذَا",
                    "Unchanged — هٰذَا"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "مُسْلِمَيْنِ (dual) uses ـَيْنِ in the table above. In which state(s) does it take that ending?",
            "kind": "mcq",
            "options": [
              "مَرْفُوْعٌ only",
              "مَنْصُوْبٌ only",
              "مَجْرُوْرٌ only",
              "Both مَنْصُوْبٌ and مَجْرُوْرٌ"
            ],
            "correct": 3
          }
        }
      ],
      "summary": {
        "title": "Noun — Characteristic 4: Grammatical States",
        "rows": [
          {
            "label": "The three states",
            "arabic": "مَرْفُوْعٌ، مَنْصُوْبٌ، مَجْرُوْرٌ",
            "meaning": "Like I / me / my — decided by function in the sentence",
            "examples": [],
            "unlockAt": 0
          },
          {
            "label": "Declinable",
            "arabic": "مُعْرَبٌ",
            "meaning": "Ending changes (مُفْرَدٌ، جَمْعٌ مُكَسَّرٌ، مُثَنًّى، جَمْعُ الْمُذَكَّرِ السَّالِمُ، جَمْعُ الْمُؤَنَّثِ السَّالِمُ، غَيْرُ مُنْصَرِفٍ)",
            "examples": [
              "كِتَابٌ"
            ],
            "unlockAt": 1
          },
          {
            "label": "Non-declinable",
            "arabic": "مَبْنِيٌّ",
            "meaning": "Ending never changes",
            "examples": [
              "هٰذَا"
            ],
            "unlockAt": 1
          },
          {
            "label": "غَيْرُ مُنْصَرِفٍ",
            "arabic": "no تَنْوِيْنٌ, no كَسْرَةٌ",
            "meaning": "Certain names, plurals and adjectives — فَتْحَةٌ serves for both مَنْصُوْبٌ and مَجْرُوْرٌ",
            "examples": [
              "إِبْرَاهِيْمُ"
            ],
            "unlockAt": 2
          }
        ]
      },
      "quiz": [
        {
          "q": "What are the three states (irab) in which nouns occur?",
          "options": [
            "مَرْفُوْعٌ، مَنْصُوْبٌ، مَجْزُوْمٌ",
            "مَرْفُوْعٌ، مَنْصُوْبٌ، مَجْرُوْرٌ",
            "مُفْرَدٌ، مُثَنًّى، جَمْعٌ",
            "مَعْرِفَةٌ، نَكِرَةٌ، مَبْنِيٌّ"
          ],
          "correct": 1,
          "explanation": "Nouns occur in مَرْفُوْعٌ، مَنْصُوْبٌ and مَجْرُوْرٌ — مَجْزُوْمٌ is a state of verbs, not nouns."
        },
        {
          "q": "A noun whose ending changes to reflect its grammatical state is called…",
          "options": [
            "مَبْنِيٌّ",
            "مُعْرَبٌ",
            "غَيْرُ عَامِلٍ",
            "مُكَسَّرٌ"
          ],
          "correct": 1,
          "explanation": "مُعْرَبٌ = declinable (ending changes); مَبْنِيٌّ = non-declinable (ending fixed)."
        },
        {
          "q": "What is special about غَيْرُ مُنْصَرِفٍ words?",
          "options": [
            "They never take أَلْ",
            "They do not have تَنْوِيْنٌ nor كَسْرَةٌ",
            "They are always plural",
            "They never change their ending"
          ],
          "correct": 1,
          "explanation": "غَيْرُ مُنْصَرِفٍ words take no تَنْوِيْنٌ or كَسْرَةٌ; a فَتْحَةٌ serves for both مَنْصُوْبٌ and مَجْرُوْرٌ."
        },
        {
          "q": "Which of these names is NOT غَيْرُ مُنْصَرِفٍ?",
          "options": [
            "إِبْرَاهِيْمُ",
            "عُثْمَانُ",
            "مُحَمَّدٌ",
            "آمِنَةُ"
          ],
          "correct": 2,
          "explanation": "All prophets' names are غَيْرُ مُنْصَرِفٍ except نُوْحٌ، شُعَيْبٌ، هُوْدٌ، صَالِحٌ، لُوْطٌ، مُحَمَّدٌ — note the تَنْوِيْنٌ on مُحَمَّدٌ."
        },
        {
          "q": "In which state(s) does the dual take the ending ـَيْنِ?",
          "options": [
            "مَرْفُوْعٌ only",
            "مَنْصُوْبٌ only",
            "مَجْرُوْرٌ only",
            "Both مَنْصُوْبٌ and مَجْرُوْرٌ"
          ],
          "correct": 3,
          "explanation": "The dual is ـانِ in مَرْفُوْعٌ and ـَيْنِ in both مَنْصُوْبٌ and مَجْرُوْرٌ."
        },
        {
          "q": "Which adjective patterns are غَيْرُ مُنْصَرِفٍ?",
          "options": [
            "فَاعِلٌ and مَفْعُوْلٌ",
            "أَفْعَلُ and فَعْلَانُ",
            "فَعِيْلٌ and فَعُوْلٌ",
            "فَعَّالٌ and فُعَلَاءُ"
          ],
          "correct": 1,
          "explanation": "Adjectives on أَفْعَلُ (أَحْمَرُ red) and فَعْلَانُ (غَضْبَانُ angry) are غَيْرُ مُنْصَرِفٍ."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 8",
          "kind": "mcq",
          "prompt": "عَبْدٌ — what is its irab and sign?",
          "options": [
            "مَرْفُوْعٌ — ضَمَّةٌ",
            "مَنْصُوْبٌ — فَتْحَةٌ",
            "مَجْرُوْرٌ — كَسْرَةٌ",
            "مَجْزُوْمٌ — سُكُوْنٌ"
          ],
          "correct": 0,
          "explanation": "'A servant' — the ضَمَّةٌ (with tanwīn) shows the مَرْفُوْعٌ state of a singular."
        },
        {
          "title": "Book Exercise 8",
          "kind": "mcq",
          "prompt": "عَبْدًا — what is its irab and sign?",
          "options": [
            "مَرْفُوْعٌ — ضَمَّةٌ",
            "مَنْصُوْبٌ — فَتْحَةٌ",
            "مَجْرُوْرٌ — كَسْرَةٌ",
            "مَرْفُوْعٌ — فَتْحَةٌ"
          ],
          "correct": 1,
          "explanation": "'A servant' in the مَنْصُوْبٌ state — shown by the فَتْحَةٌ (tanwīn -an)."
        },
        {
          "title": "Book Exercise 8",
          "kind": "mcq",
          "prompt": "الْعِبَادِ — what is its irab and sign?",
          "options": [
            "مَرْفُوْعٌ — ضَمَّةٌ",
            "مَنْصُوْبٌ — فَتْحَةٌ",
            "مَجْرُوْرٌ — كَسْرَةٌ",
            "مَنْصُوْبٌ — كَسْرَةٌ"
          ],
          "correct": 2,
          "explanation": "'The servants' (broken plural) with كَسْرَةٌ — the مَجْرُوْرٌ state."
        },
        {
          "title": "Book Exercise 8",
          "kind": "mcq",
          "prompt": "عَبْدَانِ — what is its irab?",
          "options": [
            "مَرْفُوْعٌ — dual ending ـانِ",
            "مَنْصُوْبٌ — dual ending ـانِ",
            "مَجْرُوْرٌ — dual ending ـَيْنِ",
            "مَبْنِيٌّ — unchanged"
          ],
          "correct": 0,
          "explanation": "'Two servants' — the dual shows مَرْفُوْعٌ with ـانِ."
        },
        {
          "title": "Book Exercise 8",
          "kind": "mcq",
          "prompt": "الْعَبْدَيْنِ — what is its irab?",
          "options": [
            "مَرْفُوْعٌ only",
            "مَنْصُوْبٌ or مَجْرُوْرٌ — dual ending ـَيْنِ",
            "مَجْرُوْرٌ only, always",
            "مَبْنِيٌّ — unchanged"
          ],
          "correct": 1,
          "explanation": "'The two servants' — ـَيْنِ serves the dual for both مَنْصُوْبٌ and مَجْرُوْرٌ."
        },
        {
          "title": "Book Exercise 8",
          "kind": "mcq",
          "prompt": "مُسْلِمُوْنَ — what is its irab?",
          "options": [
            "مَرْفُوْعٌ — ending ـُوْنَ",
            "مَنْصُوْبٌ — ending ـُوْنَ",
            "مَجْرُوْرٌ — ending ـِيْنَ",
            "مَبْنِيٌّ"
          ],
          "correct": 0,
          "explanation": "'Muslims' — the sound masculine plural shows مَرْفُوْعٌ with ـُوْنَ."
        },
        {
          "title": "Book Exercise 8",
          "kind": "mcq",
          "prompt": "الْمُسْلِمِيْنَ — what is its irab?",
          "options": [
            "مَرْفُوْعٌ",
            "مَنْصُوْبٌ or مَجْرُوْرٌ — ending ـِيْنَ",
            "always مَجْرُوْرٌ only",
            "مَبْنِيٌّ"
          ],
          "correct": 1,
          "explanation": "'The Muslims' — ـِيْنَ serves the sound masculine plural for both مَنْصُوْبٌ and مَجْرُوْرٌ."
        },
        {
          "title": "Book Exercise 8",
          "kind": "mcq",
          "prompt": "مُؤْمِنَاتٍ — what is its irab and sign?",
          "options": [
            "مَرْفُوْعٌ — ضَمَّةٌ",
            "مَنْصُوْبٌ or مَجْرُوْرٌ — كَسْرَةٌ",
            "مَنْصُوْبٌ — فَتْحَةٌ",
            "مَبْنِيٌّ — unchanged"
          ],
          "correct": 1,
          "explanation": "'Believing women' — the sound feminine plural never takes فَتْحَةٌ; كَسْرَةٌ covers مَنْصُوْبٌ and مَجْرُوْرٌ."
        },
        {
          "title": "Book Exercise 8",
          "kind": "mcq",
          "prompt": "إِبْرَاهِيْمُ — what is its irab and sign?",
          "options": [
            "مَرْفُوْعٌ — ضَمَّةٌ (غَيْرُ مُنْصَرِفٍ)",
            "مَنْصُوْبٌ — فَتْحَةٌ",
            "مَجْرُوْرٌ — كَسْرَةٌ",
            "مَبْنِيٌّ — unchanged"
          ],
          "correct": 0,
          "explanation": "'Ibrahim' — a غَيْرُ مُنْصَرِفٍ name: one ضَمَّةٌ (no tanwīn) marks مَرْفُوْعٌ."
        },
        {
          "title": "Book Exercise 8",
          "kind": "mcq",
          "prompt": "أَنْبِيَاءَ — what is its irab and sign?",
          "options": [
            "مَرْفُوْعٌ — ضَمَّةٌ",
            "مَنْصُوْبٌ or مَجْرُوْرٌ — فَتْحَةٌ (غَيْرُ مُنْصَرِفٍ)",
            "مَجْرُوْرٌ — كَسْرَةٌ",
            "مَنْصُوْبٌ — تَنْوِيْنٌ"
          ],
          "correct": 1,
          "explanation": "'Prophets' — the plural pattern أَنْبِيَاءُ is غَيْرُ مُنْصَرِفٍ: فَتْحَةٌ serves both مَنْصُوْبٌ and مَجْرُوْرٌ."
        },
        {
          "title": "paper (sheet of)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"paper (sheet of)\"?",
          "options": [
            "قِرْطَاسٌ",
            "مَدْرَسَةٌ",
            "شَيْءٌ",
            "عَالِمٌ"
          ],
          "correct": 0
        },
        {
          "title": "paper (sheet of)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قِرْطَاسٌ mean?",
          "options": [
            "paper (sheet of)",
            "school, place of study",
            "thing",
            "scholar"
          ],
          "correct": 0
        },
        {
          "title": "paper (sheet of) (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قِرْطَاسٌ?",
          "options": [
            "قَرَاطِيْسُ",
            "أَشْيَاءُ",
            "مَدَارِسُ",
            "عُلَمَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "school, place of study",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"school, place of study\"?",
          "options": [
            "مَدْرَسَةٌ",
            "شَيْءٌ",
            "قِرْطَاسٌ",
            "عَالِمٌ"
          ],
          "correct": 0
        },
        {
          "title": "school, place of study",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَدْرَسَةٌ mean?",
          "options": [
            "school, place of study",
            "thing",
            "scholar",
            "paper (sheet of)"
          ],
          "correct": 0
        },
        {
          "title": "school, place of study (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَدْرَسَةٌ?",
          "options": [
            "مَدَارِسُ",
            "قَرَاطِيْسُ",
            "أَشْيَاءُ",
            "عُلَمَاءُ"
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
            "مَدْرَسَةٌ",
            "عَالِمٌ",
            "قِرْطَاسٌ"
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
            "paper (sheet of)",
            "scholar",
            "school, place of study"
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
            "عُلَمَاءُ",
            "قَرَاطِيْسُ",
            "مَدَارِسُ"
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
            "مَدْرَسَةٌ",
            "شَيْءٌ",
            "قِرْطَاسٌ"
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
            "paper (sheet of)",
            "school, place of study",
            "thing"
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
            "مَدَارِسُ",
            "أَشْيَاءُ",
            "قَرَاطِيْسُ"
          ],
          "correct": 0
        }
      ]
    }
  ]
};

// Module 03 — Particles (From the Start, Unit 1, Part 3 + Supplement + Summary, pp. 46–59)
//
// Merges the original Particles lesson with the four Supplement lessons and
// the Summary lesson into one module, per restructuring feedback.
export default {
  "id": "f-particles",
  "title": "الحرف",
  "heading": "اَلْوَحْدَةُ الْأُوْلَى",
  "blurb": "The two characteristics of الحَرْفٌ, the nouns derived from the verb, and a review of Unit 1.",
  "lessons": [
    {
      "id": "l1",
      "title": "العامل وغير العامل",
      "subtitle": "Every particle is مَبْنِيٌّ — but not every particle is عَامِلٌ",
      "concepts": [
        {
          "heading": "The Two Characteristics of Particles",
          "lines": [
            {
              "html": "A particle has two important characteristics: (1) Irab, (2) Governance.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "A particle has two important characteristics. Besides Governance, what is the other?",
            "kind": "mcq",
            "options": [
              "Irab — it is always مَبْنِيٌّ",
              "Number",
              "Tense",
              "Gender"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Characteristic 1: Irab",
          "lines": [
            {
              "html": "All particles are <bdi>مَبْنِيٌّ</bdi>: they remain unchanged in all circumstances.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "لَمْ, هَلْ and فِيْ are very different particles in meaning. What do they all share with regard to irab?",
            "kind": "mcq",
            "options": [
              "They are all مَبْنِيٌّ — unchanged in all circumstances",
              "They are all مُعْرَبٌ",
              "They are all عَامِلٌ",
              "They all carry تَنْوِيْنٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Characteristic 2: Governance",
          "lines": [
            {
              "html": "Particles are of two types according to whether they cause the irab of the subsequent noun or verb to change: (1) <bdi>عَامِلٌ</bdi>, a governing particle. (2) <bdi>غَيْرُ عَامِلٍ</bdi>, a non-governing particle.",
              "list": false
            },
            {
              "html": "A حَرْفٌ عَامِلٌ is a particle which causes the irab of the following word(s) to change. For example, the particle لَمْ causes the following verb to be مَجْزُوْمٌ.",
              "list": false
            },
            {
              "html": "<bdi>لَمْ يَذْهَبْ زَيْدٌ</bdi> — Zaid did not go — لَمْ made the verb مَجْزُوْمٌ",
              "list": true,
              "bullet": true
            },
            {
              "html": "A حَرْفٌ غَيْرُ عَامِلٍ does not cause the irab of the following word(s) to change. For example, مَا makes the past tense negative, but does not change the irab of the words after it.",
              "list": false
            },
            {
              "html": "<bdi>مَا ذَهَبَ زَيْدٌ</bdi> — Zaid did not go — مَا changed nothing in the irab",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "لَمْ is…",
            "kind": "mcq",
            "options": [
              "عَامِلٌ (governing)",
              "غَيْرُ عَامِلٍ (non-governing)"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Particle (حَرْفٌ)",
        "rows": [
          {
            "label": "Characteristic 1: Irab",
            "arabic": "مَبْنِيٌّ",
            "meaning": "Remains unchanged in all circumstances",
            "examples": [],
            "unlockAt": 1
          },
          {
            "label": "Governing",
            "arabic": "عَامِلٌ",
            "meaning": "Changes the irab of the following word (e.g. لَمْ، لَنْ)",
            "examples": [],
            "unlockAt": 2
          },
          {
            "label": "Non-governing",
            "arabic": "غَيْرُ عَامِلٍ",
            "meaning": "Does not change the irab of the following word (e.g. مَا، لَا)",
            "examples": [],
            "unlockAt": 2
          }
        ]
      },
      "quiz": [
        {
          "q": "What are the two characteristics of particles?",
          "options": [
            "Tense and Gender",
            "Irab and Governance",
            "Number and Gender",
            "Voice and Irab"
          ],
          "correct": 1,
          "explanation": "Particles have Irab (they are all مَبْنِيٌّ) and Governance (عَامِلٌ or غَيْرُ عَامِلٍ)."
        },
        {
          "q": "With regard to irab, all particles are…",
          "options": [
            "مُعْرَبٌ",
            "مَبْنِيٌّ",
            "مَرْفُوْعٌ",
            "مَجْزُوْمٌ"
          ],
          "correct": 1,
          "explanation": "All particles are مَبْنِيٌّ — they remain unchanged in all circumstances."
        },
        {
          "q": "What is a حَرْفٌ عَامِلٌ؟",
          "options": [
            "A particle that changes the meaning of a sentence",
            "A particle that causes the irab of the following word(s) to change",
            "A particle that never changes its own form",
            "A particle used only with nouns"
          ],
          "correct": 1,
          "explanation": "A governing particle changes the following word's irab, e.g. لَمْ makes the verb مَجْزُوْمٌ."
        },
        {
          "q": "Why is مَا classed as غَيْرُ عَامِلٍ؟",
          "options": [
            "Because it has no meaning",
            "Because it negates the verb without changing the irab of the words after it",
            "Because it makes the verb مَنْصُوْبٌ",
            "Because it only comes at the end of a sentence"
          ],
          "correct": 1,
          "explanation": "مَا ذَهَبَ زَيْدٌ: the negation happens, but no irab changes."
        },
        {
          "q": "Which pair is correct?",
          "options": [
            "لَمْ → verb becomes مَنْصُوْبٌ; لَنْ → verb becomes مَجْزُوْمٌ",
            "لَمْ → verb becomes مَجْزُوْمٌ; لَنْ → verb becomes مَنْصُوْبٌ",
            "لَا → verb becomes مَجْزُوْمٌ; مَا → verb becomes مَنْصُوْبٌ",
            "مَا → verb becomes مَجْزُوْمٌ; لَا → verb becomes مَنْصُوْبٌ"
          ],
          "correct": 1,
          "explanation": "لَمْ governs مَجْزُوْمٌ and لَنْ governs مَنْصُوْبٌ; مَا and لَا govern nothing."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "In لَا يَسْمَعُ زَيْدٌ, the particle لَا is…",
          "options": [
            "غَيْرُ عَامِلٍ — the verb stays مَرْفُوْعٌ",
            "عَامِلٌ — the verb is مَجْزُوْمٌ",
            "عَامِلٌ — the verb is مَنْصُوْبٌ",
            "not a particle"
          ],
          "correct": 0,
          "explanation": "يَسْمَعُ keeps its ضَمَّةٌ — لَا does not govern."
        },
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "In لَنْ يَسْمَعَ زَيْدٌ, the particle لَنْ is…",
          "options": [
            "عَامِلٌ — it makes the verb مَنْصُوْبٌ (يَسْمَعَ)",
            "غَيْرُ عَامِلٍ",
            "عَامِلٌ — it makes the verb مَجْزُوْمٌ",
            "a noun"
          ],
          "correct": 0,
          "explanation": "The فَتْحَةٌ on يَسْمَعَ shows لَنْ has governed it into the مَنْصُوْبٌ state."
        },
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "In مَا سَمِعَ زَيْدٌ, the particle مَا is…",
          "options": [
            "غَيْرُ عَامِلٍ — the ماضي verb is unchanged (it is مَبْنِيٌّ anyway)",
            "عَامِلٌ — it changes the verb's irab",
            "عَامِلٌ — it makes the verb مَجْزُوْمٌ",
            "غَيْرُ عَامِلٍ — but only with nouns"
          ],
          "correct": 0,
          "explanation": "مَا negates without governing: nothing about سَمِعَ changes."
        },
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "In لَمْ يَسْمَعْ زَيْدٌ, the particle لَمْ is…",
          "options": [
            "عَامِلٌ — it makes the verb مَجْزُوْمٌ (يَسْمَعْ)",
            "غَيْرُ عَامِلٍ",
            "عَامِلٌ — it makes the verb مَنْصُوْبٌ",
            "a negative noun"
          ],
          "correct": 0,
          "explanation": "The سُكُوْنٌ on يَسْمَعْ shows the مَجْزُوْمٌ state caused by لَمْ."
        },
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "In لَنْ يَجْلِسَ إِبْرَاهِيْمُ, the particle لَنْ is…",
          "options": [
            "عَامِلٌ — يَجْلِسَ is مَنْصُوْبٌ",
            "غَيْرُ عَامِلٍ — يَجْلِسَ is مَرْفُوْعٌ",
            "عَامِلٌ — يَجْلِسَ is مَجْزُوْمٌ",
            "غَيْرُ عَامِلٍ — the verb is ماضي"
          ],
          "correct": 0,
          "explanation": "لَنْ always governs the following مُضَارِعٌ into مَنْصُوْبٌ."
        },
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "In مَا يَجْلِسُ إِبْرَاهِيْمُ, the particle مَا is…",
          "options": [
            "غَيْرُ عَامِلٍ — يَجْلِسُ keeps its ضَمَّةٌ",
            "عَامِلٌ — the verb changed state",
            "عَامِلٌ — the verb is منصوب",
            "not negative"
          ],
          "correct": 0,
          "explanation": "مَا with the مُضَارِعُ negates the present without governing."
        },
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "In لَمْ يَظْلِمْ مُحَمَّدٌ, which analysis is correct?",
          "options": [
            "لَمْ is عَامِلٌ; يَظْلِمْ is مَجْزُوْمٌ; meaning 'Muhammad did not oppress'",
            "لَمْ is غَيْرُ عَامِلٍ; meaning 'Muhammad does not oppress'",
            "لَمْ is عَامِلٌ; يَظْلِمْ is مَنْصُوْبٌ; meaning 'Muhammad will not oppress'",
            "لَمْ is a verb"
          ],
          "correct": 0,
          "explanation": "لَمْ + مُضَارِعٌ مَجْزُوْمٌ = past negative; it is a governing particle."
        },
        {
          "title": "Book Exercise 1",
          "kind": "mcq",
          "prompt": "In مَا ظَلَمَ مُحَمَّدٌ, the particle مَا is…",
          "options": [
            "غَيْرُ عَامِلٍ — it negates the past without any irab change",
            "عَامِلٌ over the ماضي",
            "عَامِلٌ — it makes ظَلَمَ مجزوم",
            "an interrogative only"
          ],
          "correct": 0,
          "explanation": "'Muhammad did not oppress' — مَا governs nothing."
        }
      ]
    },
    {
      "id": "l2",
      "title": "المصدر",
      "subtitle": "The verbal noun — infinitive, gerund, and verbal-noun readings",
      "concepts": [
        {
          "heading": "What is the مَصْدَرٌ?",
          "lines": [
            {
              "html": "In this section, a few more rules regarding nouns based on their derivation. In the vocabulary lists, three words are written for verbs: اَلْمَاضِيْ, اَلْمُضَارِعُ and اَلْمَصْدَرُ.",
              "list": false
            },
            {
              "table": {
                "title": "The Three Words Given for a Verb",
                "headers": [
                  "اَلْمَاضِيْ",
                  "اَلْمُضَارِعُ",
                  "اَلْمَصْدَرُ"
                ],
                "rows": [
                  [
                    "سَأَلَ",
                    "يَسْأَلُ",
                    "سُؤَالًا"
                  ]
                ]
              }
            },
            {
              "html": "اَلْمَاضِيْ and اَلْمُضَارِعُ are verbs; and the مَصْدَرٌ is a noun.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "اَلْمَاضِيْ and اَلْمُضَارِعُ are both verbs. What part of speech is the third word given for a verb, اَلْمَصْدَرُ؟",
            "kind": "mcq",
            "options": [
              "A noun",
              "Also a verb",
              "A particle",
              "An adjective"
            ],
            "correct": 0
          }
        },
        {
          "heading": "English Equivalents of a مَصْدَرٌ",
          "lines": [
            {
              "html": "1. An infinitive, i.e. a noun with 'to' before it, or a gerund, i.e. a noun ending in -ing.",
              "list": false
            },
            {
              "html": "سُؤَالٌ — to ask (infinitive)",
              "list": true,
              "bullet": true
            },
            {
              "html": "سُؤَالٌ — asking (gerund)",
              "list": true,
              "bullet": true
            },
            {
              "html": "A tip for remembering: an infiniTive is translated as 'To', and a Gerund is translated as '-inG'.",
              "list": false
            },
            {
              "html": "2. A verbal noun, i.e. a noun without any element of action to it.",
              "list": false
            },
            {
              "html": "سُؤَالٌ — question",
              "list": true,
              "bullet": true
            },
            {
              "html": "When a مَصْدَرٌ is used as a verbal noun, it can have its own plural.",
              "list": false
            },
            {
              "html": "سُؤَالٌ ج أَسْئِلَةٌ — question, pl. questions",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "سُؤَالٌ means…",
            "kind": "mcq",
            "options": [
              "to ask / asking / a question",
              "he asked / he asks / ask!",
              "asker / one who asks",
              "question / questions / questioned"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The مَصْدَرٌ",
        "rows": [
          {
            "label": "Infinitive",
            "arabic": "سُؤَالٌ",
            "meaning": "to ask",
            "examples": [],
            "unlockAt": 1
          },
          {
            "label": "Gerund",
            "arabic": "سُؤَالٌ",
            "meaning": "asking",
            "examples": [],
            "unlockAt": 1
          },
          {
            "label": "Verbal Noun (can have a plural)",
            "arabic": "سُؤَالٌ ج أَسْئِلَةٌ",
            "meaning": "question(s)",
            "examples": [],
            "unlockAt": 1
          }
        ]
      },
      "quiz": [
        {
          "q": "Which three words are written for verbs in the vocabulary lists?",
          "options": [
            "الماضي، المضارع، الأمر",
            "الماضي، المضارع، المصدر",
            "المصدر، الأمر، المضارع",
            "الماضي، المصدر، الأمر"
          ],
          "correct": 1,
          "explanation": "e.g. سَأَلَ يَسْأَلُ سُؤَالًا — past, present, and masdar."
        },
        {
          "q": "What kind of word is the مَصْدَرٌ؟",
          "options": [
            "A verb",
            "A particle",
            "A noun",
            "An adjective only"
          ],
          "correct": 2,
          "explanation": "الماضي and المضارع are verbs; the مصدر is a noun."
        },
        {
          "q": "Which of the following is a correct translation set for the مَصْدَرٌ سُؤَالٌ؟",
          "options": [
            "he asked / he asks / ask!",
            "to ask / asking / a question",
            "asker / asked / asking",
            "question / questions / questioned"
          ],
          "correct": 1,
          "explanation": "Infinitive (to ask), gerund (asking), or verbal noun (a question)."
        },
        {
          "q": "When can a مَصْدَرٌ have its own plural?",
          "options": [
            "When it is used as an infinitive",
            "When it is used as a gerund",
            "When it is used as a verbal noun",
            "Never"
          ],
          "correct": 2,
          "explanation": "As a verbal noun it behaves like any noun: سُؤَالٌ ج أَسْئِلَةٌ (questions)."
        },
        {
          "q": "What is the memory tip for infinitive vs gerund?",
          "options": [
            "infiniTive = 'To', Gerund = '-inG'",
            "infinitive = '-ing', gerund = 'to'",
            "both are translated the same way always",
            "gerunds only exist in Arabic"
          ],
          "correct": 0,
          "explanation": "The T in infinitive points to 'to'; the G in gerund points to '-ing'."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 1 (Supplement)",
          "kind": "mcq",
          "prompt": "إِنْزَالٌ can be translated as…",
          "options": [
            "to send down / sending down",
            "he sent down",
            "one who sends down",
            "it was sent down"
          ],
          "correct": 0,
          "explanation": "It is the مصدر of أَنْزَلَ: infinitive/gerund of 'sending down'."
        },
        {
          "title": "Book Exercise 1 (Supplement)",
          "kind": "mcq",
          "prompt": "إِيْمَانٌ can be translated as…",
          "options": [
            "to believe / believing / belief",
            "he believed",
            "believer",
            "believed"
          ],
          "correct": 0,
          "explanation": "The مصدر of آمَنَ — as a verbal noun it means 'belief/faith'."
        },
        {
          "title": "Book Exercise 1 (Supplement)",
          "kind": "mcq",
          "prompt": "بَعْثٌ can be translated as…",
          "options": [
            "to send, resurrect / sending, resurrecting / resurrection",
            "he was resurrected",
            "one who resurrects",
            "resurrected ones"
          ],
          "correct": 0,
          "explanation": "The مصدر of بَعَثَ."
        },
        {
          "title": "Book Exercise 1 (Supplement)",
          "kind": "mcq",
          "prompt": "سُقُوْطٌ can be translated as…",
          "options": [
            "to fall / falling / a fall",
            "faller",
            "he fell",
            "it will fall"
          ],
          "correct": 0,
          "explanation": "The مصدر of سَقَطَ."
        },
        {
          "title": "Book Exercise 1 (Supplement)",
          "kind": "mcq",
          "prompt": "ظُلْمٌ can be translated as…",
          "options": [
            "to oppress / oppressing / oppression",
            "oppressor",
            "oppressed",
            "he oppresses"
          ],
          "correct": 0,
          "explanation": "The مصدر of ظَلَمَ — as a verbal noun, 'oppression'."
        },
        {
          "title": "Book Exercise 1 (Supplement)",
          "kind": "mcq",
          "prompt": "قِرَاءَةٌ can be translated as…",
          "options": [
            "to read / reading / a reading",
            "reader",
            "he read",
            "it was read"
          ],
          "correct": 0,
          "explanation": "The مصدر of قَرَأَ."
        },
        {
          "title": "Book Exercise 1 (Supplement)",
          "kind": "mcq",
          "prompt": "مَعْرِفَةٌ can be translated as…",
          "options": [
            "to recognise / recognising / recognition",
            "one who recognises",
            "recognised",
            "definite noun only"
          ],
          "correct": 0,
          "explanation": "The مصدر of عَرَفَ. (The same word is also the grammar term for a definite noun.)"
        },
        {
          "title": "Book Exercise 1 (Supplement)",
          "kind": "mcq",
          "prompt": "نَصْرٌ can be translated as…",
          "options": [
            "to help / helping / help",
            "helper",
            "he helped",
            "helped"
          ],
          "correct": 0,
          "explanation": "The مصدر of نَصَرَ — as a verbal noun, 'help/victory'."
        }
      ]
    },
    {
      "id": "l3",
      "title": "اسم الفاعل والمفعول",
      "subtitle": "The active and passive participles, and how each is built",
      "concepts": [
        {
          "heading": "اَلْمُشْتَقَّاتُ — Derived Nouns",
          "lines": [
            {
              "html": "Some أَسْمَاءٌ are made by placing the letters of the مَصْدَرٌ in different forms. These are called <bdi>مُشْتَقٌّ</bdi>; a derived noun. Four of the مُشْتَقَّاتُ are discussed: (1) اِسْمُ الْفَاعِلِ, (2) اِسْمُ الْمَفْعُوْلِ, (3) اَلصِّفَةُ الْمُشَبَّهَةُ بِاسْمِ الْفَاعِلِ, (4) اِسْمُ التَّفْضِيْلِ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "اَلْمُشْتَقَّاتُ (derived nouns) are formed by rearranging the letters of which other word?",
            "kind": "mcq",
            "options": [
              "اَلْمَصْدَرُ",
              "اَلْفِعْلُ الْمَاضِيْ",
              "اَلْفِعْلُ الْمُضَارِعُ",
              "اَلْحَرْفُ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "اِسْمُ الْفَاعِلِ — The Active Participle",
          "lines": [
            {
              "html": "The active participle, <bdi>اِسْمُ الْفَاعِلِ</bdi>, represents the one who is carrying out the verb, made from the same letters as its مَاضِيْ. For example, رَازِقٌ is the اِسْمُ الْفَاعِلِ of رَزَقَ يَرْزُقُ رِزْقًا — a person who provides. It can be translated by adding -er after the meaning of the verb, or 'one who'/'that which' before it.",
              "list": false
            },
            {
              "html": "Constructing it: the pattern فَاعِلٌ if its مَاضِيْ has three letters. If more than three letters: (1) change the ي in the مُضَارِعٌ to a مُ, (2) place a كَسْرَةٌ on the penultimate letter.",
              "list": false
            },
            {
              "html": "<bdi>رَزَقَ يَرْزُقُ رِزْقًا ← رَازِقٌ</bdi> — provider, one who provides",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>أَنْذَرَ يُنْذِرُ إِنْذَارًا ← مُنْذِرٌ</bdi> — warner, one who warns",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "خَلَقَ (3 letters) →",
            "kind": "mcq",
            "options": [
              "خَالِقٌ / مَخْلُوْقٌ",
              "مَخْلُوْقٌ / خَالِقٌ",
              "خَلَقَ / خُلِقَ",
              "خَالِقٌ / خَلَقَ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "اِسْمُ الْمَفْعُوْلِ — The Passive Participle",
          "lines": [
            {
              "html": "The passive participle, <bdi>اِسْمُ الْمَفْعُوْلِ</bdi>, represents the one upon whom the action is carried out. For example, مَرْزُوْقٌ is the اِسْمُ الْمَفْعُوْلِ of رَزَقَ — one who is provided. It can be translated by adding -ed after the meaning of the verb, or 'one who is'/'that which is' before it.",
              "list": false
            },
            {
              "html": "Constructing it: the pattern مَفْعُوْلٌ if its مَاضِيْ has three letters. If more than three letters: (1) change the يَ in the مُضَارِعٌ to a مُ, (2) place a فَتْحَةٌ on the penultimate letter.",
              "list": false
            },
            {
              "html": "<bdi>رَزَقَ يَرْزُقُ رِزْقًا ← مَرْزُوْقٌ</bdi> — provided, one who is provided",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>أَنْذَرَ يُنْذِرُ إِنْذَارًا ← مُنْذَرٌ</bdi> — warned, one who is warned",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "أَنْزَلَ (4+ letters, مضارع يُنْزِلُ) →",
            "kind": "mcq",
            "options": [
              "مُنْزِلٌ / مُنْزَلٌ",
              "مُنْزَلٌ / مُنْزِلٌ",
              "أَنْزَلَ / أُنْزِلَ",
              "مُنْزِلٌ / أَنْزَلَ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ",
        "rows": [
          {
            "label": "اِسْمُ الْفَاعِلِ — 3-letter verb",
            "arabic": "فَاعِلٌ",
            "meaning": "-er / one who does",
            "examples": [
              "رَازِقٌ"
            ],
            "unlockAt": 1
          },
          {
            "label": "اِسْمُ الْفَاعِلِ — 4/5-letter verb",
            "arabic": "مُ + kasrah on penultimate",
            "meaning": "-er / one who does",
            "examples": [
              "مُنْذِرٌ"
            ],
            "unlockAt": 1
          },
          {
            "label": "اِسْمُ الْمَفْعُوْلِ — 3-letter verb",
            "arabic": "مَفْعُوْلٌ",
            "meaning": "-ed / one who is done to",
            "examples": [
              "مَرْزُوْقٌ"
            ],
            "unlockAt": 2
          },
          {
            "label": "اِسْمُ الْمَفْعُوْلِ — 4/5-letter verb",
            "arabic": "مُ + fathah on penultimate",
            "meaning": "-ed / one who is done to",
            "examples": [
              "مُنْذَرٌ"
            ],
            "unlockAt": 2
          }
        ]
      },
      "quiz": [
        {
          "q": "What does the اِسْمُ الْفَاعِلِ represent?",
          "options": [
            "The one upon whom the action is carried out",
            "The one who is carrying out the verb",
            "The action itself",
            "The tense of the verb"
          ],
          "correct": 1,
          "explanation": "The active participle is the doer: رَازِقٌ = one who provides."
        },
        {
          "q": "What is the pattern of the اِسْمُ الْفَاعِلِ for a three-letter verb?",
          "options": [
            "مَفْعُوْلٌ",
            "فَاعِلٌ",
            "أَفْعَلُ",
            "فَعِيْلٌ"
          ],
          "correct": 1,
          "explanation": "Three-letter verbs use فَاعِلٌ: رَزَقَ → رَازِقٌ."
        },
        {
          "q": "For a verb of more than three letters, how are the participles formed from the مُضَارِعٌ؟",
          "options": [
            "Change ي to مُ; kasrah on the penultimate letter = اسم الفاعل, fathah = اسم المفعول",
            "Change ي to مُ; fathah on the penultimate = اسم الفاعل, kasrah = اسم المفعول",
            "Add فَاعِلٌ to the end",
            "Double the middle letter"
          ],
          "correct": 0,
          "explanation": "يُنْذِرُ → مُنْذِرٌ (warner, kasrah) and مُنْذَرٌ (warned, fathah)."
        },
        {
          "q": "How can the اِسْمُ الْمَفْعُوْلِ be translated?",
          "options": [
            "By adding -er after the verb's meaning",
            "By adding -ed after the verb's meaning, or 'one who is / that which is' before it",
            "As an infinitive with 'to'",
            "As a command"
          ],
          "correct": 1,
          "explanation": "مَرْزُوْقٌ = provided / one who is provided."
        },
        {
          "q": "مَرْزُوْقٌ is the … of رَزَقَ.",
          "options": [
            "اِسْمُ الْفَاعِلِ",
            "اِسْمُ الْمَفْعُوْلِ",
            "مَصْدَرٌ",
            "اِسْمُ التَّفْضِيْلِ"
          ],
          "correct": 1,
          "explanation": "Pattern مَفْعُوْلٌ = passive participle: one who is provided."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 2 (Supplement)",
          "kind": "mcq",
          "prompt": "مُؤْمِنٌ translates as…",
          "options": [
            "believer / one who believes",
            "believed",
            "belief",
            "he believes"
          ],
          "correct": 0,
          "explanation": "اسم الفاعل of آمَنَ يُؤْمِنُ: the one doing the believing."
        },
        {
          "title": "Book Exercise 2 (Supplement)",
          "kind": "mcq",
          "prompt": "اَلصَّائِمُ translates as…",
          "options": [
            "the fasting one / one who fasts",
            "the fast",
            "the fasted",
            "he fasted"
          ],
          "correct": 0,
          "explanation": "اسم الفاعل of صَامَ: the one who is fasting."
        },
        {
          "title": "Book Exercise 2 (Supplement)",
          "kind": "mcq",
          "prompt": "مُسَافِرٌ translates as…",
          "options": [
            "traveller / one who travels",
            "travelled",
            "journey",
            "he travels"
          ],
          "correct": 0,
          "explanation": "اسم الفاعل of سَافَرَ يُسَافِرُ."
        },
        {
          "title": "Book Exercise 2 (Supplement)",
          "kind": "mcq",
          "prompt": "اَلْخَالِقُ translates as…",
          "options": [
            "the Creator / the one who creates",
            "the created",
            "the creation",
            "he created"
          ],
          "correct": 0,
          "explanation": "اسم الفاعل of خَلَقَ."
        },
        {
          "title": "Book Exercise 2 (Supplement)",
          "kind": "mcq",
          "prompt": "اَلْقَارِئُ translates as…",
          "options": [
            "the reader / one who reads",
            "the read (thing)",
            "the reading",
            "it was read"
          ],
          "correct": 0,
          "explanation": "اسم الفاعل of قَرَأَ."
        },
        {
          "title": "Book Exercise 3 (Supplement)",
          "kind": "mcq",
          "prompt": "مَأْكُوْلٌ translates as…",
          "options": [
            "eaten / that which is eaten",
            "eater",
            "eating",
            "he ate"
          ],
          "correct": 0,
          "explanation": "اسم المفعول of أَكَلَ (pattern مَفْعُوْلٌ)."
        },
        {
          "title": "Book Exercise 3 (Supplement)",
          "kind": "mcq",
          "prompt": "اَلْمَعْبُوْدُ translates as…",
          "options": [
            "the worshipped / the one who is worshipped",
            "the worshipper",
            "the worship",
            "he worships"
          ],
          "correct": 0,
          "explanation": "اسم المفعول of عَبَدَ."
        },
        {
          "title": "Book Exercise 3 (Supplement)",
          "kind": "mcq",
          "prompt": "مَبْعُوْثُوْنَ translates as…",
          "options": [
            "resurrected ones / those who are resurrected",
            "resurrectors",
            "resurrection",
            "they resurrect"
          ],
          "correct": 0,
          "explanation": "اسم المفعول of بَعَثَ in the sound masculine plural."
        },
        {
          "title": "Book Exercise 3 (Supplement)",
          "kind": "mcq",
          "prompt": "مَنْصُوْرٌ translates as…",
          "options": [
            "helped / one who is helped",
            "helper",
            "help",
            "he helped"
          ],
          "correct": 0,
          "explanation": "اسم المفعول of نَصَرَ."
        },
        {
          "title": "Book Exercise 3 (Supplement)",
          "kind": "mcq",
          "prompt": "اَلْمَسْؤُوْلُ translates as…",
          "options": [
            "the one who is asked / questioned",
            "the asker",
            "the question",
            "he asked"
          ],
          "correct": 0,
          "explanation": "اسم المفعول of سَأَلَ."
        }
      ]
    },
    {
      "id": "l4",
      "title": "الصفة المشبهة",
      "subtitle": "A more intense اسم الفاعل, and how the participles are used as nouns or adjectives",
      "concepts": [
        {
          "heading": "اَلصِّفَةُ الْمُشَبَّهَةُ بِاسْمِ الْفَاعِلِ",
          "lines": [
            {
              "html": "The صِّفَةُ الْمُشَبَّهَةُ depicts the one who is carrying out the verb, like the اِسْمُ الْفَاعِلِ. However, its meaning is usually more long term or intense compared to an اِسْمُ الْفَاعِلِ. For example, كَثِيْرٌ is the صفة مشبهة of كَثُرَ يَكْثُرُ كَثْرَةً: it depicts the meaning of abundance.",
              "list": false
            },
            {
              "html": "Some common patterns for اَلصِّفَةُ الْمُشَبَّهَةُ بِاسْمِ الْفَاعِلِ are: 1. فَعِيْلٌ:",
              "list": false
            },
            {
              "html": "كَثُرَ يَكْثُرُ كَثْرَةً ← كَثِيْرٌ — abundant",
              "list": true,
              "bullet": true
            },
            {
              "html": "The plurals of these adjectives will usually be a جَمْعٌ مُكَسَّرٌ. Some common patterns for these are:",
              "list": false
            },
            {
              "table": {
                "title": "Common Broken-Plural Patterns of فَعِيْلٌ Adjectives",
                "headers": [
                  "أَفْعِلَاءُ",
                  "فُعَلَاءُ",
                  "فِعَالٌ"
                ],
                "rows": [
                  [
                    "غَنِيٌّ ج أَغْنِيَاءُ",
                    "فَقِيْرٌ ج فُقَرَاءُ",
                    "صَغِيْرٌ ج صِغَارٌ"
                  ]
                ]
              }
            },
            {
              "html": "2. فَعُوْلٌ:",
              "list": false
            },
            {
              "html": "صَبَرَ يَصْبِرُ صَبْرًا ← صَبُوْرٌ — patient",
              "list": true,
              "bullet": true
            },
            {
              "html": "3. فَعْلَانُ: the feminine of this adjective occurs on the pattern of فَعْلَى.",
              "list": false
            },
            {
              "html": "غَضِبَ يَغْضَبُ غَضَبًا ← غَضْبَانُ – غَضْبَى — angry",
              "list": true,
              "bullet": true
            },
            {
              "html": "4. فَعَّالٌ:",
              "list": false
            },
            {
              "html": "صَبَرَ يَصْبِرُ صَبْرًا ← صَبَّارٌ — extremely patient",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "كَثِيْرٌ is on the pattern…",
            "kind": "mcq",
            "options": [
              "فَعِيْلٌ",
              "فَعُوْلٌ",
              "فَعْلَانُ",
              "فَعَّالٌ",
              "فَاعِلٌ (اسم الفاعل)"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Usage of the Participles",
          "lines": [
            {
              "html": "The اَلصِّفَةُ الْمُشَبَّهَةُ بِاسْمِ الْفَاعِلِ, اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ can be used as both nouns and adjectives.",
              "list": false
            },
            {
              "table": {
                "title": "Used as Both Nouns and Adjectives",
                "headers": [
                  "",
                  "مُجْتَهِدٌ",
                  "غَنِيٌّ"
                ],
                "rows": [
                  [
                    "Adjective",
                    "hardworking",
                    "rich"
                  ],
                  [
                    "Noun",
                    "one who works hard",
                    "rich person"
                  ]
                ]
              }
            },
            {
              "html": "Sometimes there is no English equivalent for the Arabic noun. In such a case it can be translated by adding 'one who' before the noun or 'person' after it.",
              "list": false
            },
            {
              "html": "If the اِسْمُ الْفَاعِلِ is an adjective, its plural will be a جَمْعٌ سَالِمٌ with ـُوْنَ. However, if it is in the meaning of a noun, its plural will also be a جَمْعٌ مُكَسَّرٌ. Some common patterns for these are:",
              "list": false
            },
            {
              "table": {
                "title": "Common Broken-Plural Patterns of اِسْمُ الْفَاعِلِ Nouns",
                "headers": [
                  "فَعَلَةٌ",
                  "فُعَّالٌ",
                  "فُعَلَاءُ"
                ],
                "rows": [
                  [
                    "عَابِدٌ ج عَبَدَةٌ",
                    "كَافِرٌ ج كُفَّارٌ",
                    "عَاقِلٌ ج عُقَلَاءُ"
                  ]
                ]
              }
            },
            {
              "html": "In vocabulary lists, some adjectives will be written along with their plural, and some will not be written but will have to be deduced from the verb.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "مُجْتَهِدٌ can mean 'hardworking' (adjective) or 'one who works hard' (noun). When اِسْمُ الْفَاعِلِ is used as an ADJECTIVE, what is its plural?",
            "kind": "mcq",
            "options": [
              "A جَمْعٌ سَالِمٌ with ـُوْنَ",
              "Always a جَمْعٌ مُكَسَّرٌ",
              "It has no plural",
              "A dual only"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "اَلصِّفَةُ الْمُشَبَّهَةُ بِاسْمِ الْفَاعِلِ",
        "rows": [
          {
            "label": "Meaning",
            "arabic": "like اسم الفاعل but more long term / intense",
            "meaning": "e.g. كَثِيْرٌ abundant",
            "examples": [],
            "unlockAt": 0
          },
          {
            "label": "Patterns",
            "arabic": "فَعِيْلٌ، فَعُوْلٌ، فَعْلَانُ (fem. فَعْلَى)، فَعَّالٌ",
            "meaning": "كَثِيْرٌ، صَبُوْرٌ، غَضْبَانُ، صَبَّارٌ",
            "examples": [],
            "unlockAt": 0
          },
          {
            "label": "Usage",
            "arabic": "noun or adjective",
            "meaning": "adjective plural: سالم (ـُوْنَ); noun-sense plural: often مكسر (عَبَدَةٌ، كُفَّارٌ، عُقَلَاءُ)",
            "examples": [],
            "unlockAt": 1
          }
        ]
      },
      "quiz": [
        {
          "q": "How does the صفة مشبهة differ from the اسم الفاعل؟",
          "options": [
            "It describes the receiver of the action",
            "Its meaning is usually more long term or intense",
            "It is always plural",
            "It only applies to feminine words"
          ],
          "correct": 1,
          "explanation": "Both depict the doer, but the صفة مشبهة conveys a lasting/intense quality, e.g. كَثِيْرٌ (abundant)."
        },
        {
          "q": "Which are common patterns of the صفة مشبهة؟",
          "options": [
            "فَاعِلٌ and مَفْعُوْلٌ",
            "فَعِيْلٌ، فَعُوْلٌ، فَعْلَانُ، فَعَّالٌ",
            "أَفْعَلُ and فُعْلَى only",
            "مُفْعِلٌ and مُفْعَلٌ"
          ],
          "correct": 1,
          "explanation": "e.g. كَثِيْرٌ، صَبُوْرٌ، غَضْبَانُ، صَبَّارٌ."
        },
        {
          "q": "What is the feminine of an adjective on the pattern فَعْلَانُ؟",
          "options": [
            "فَعْلَانَةٌ",
            "فَعْلَى",
            "فَعِيْلَةٌ",
            "فُعْلَانُ"
          ],
          "correct": 1,
          "explanation": "غَضْبَانُ (angry, m.) → غَضْبَى (angry, f.)."
        },
        {
          "q": "When the اسم الفاعل is used as an adjective, what is its plural?",
          "options": [
            "A جَمْعٌ سَالِمٌ with ـُوْنَ",
            "Always a جَمْعٌ مُكَسَّرٌ",
            "It has no plural",
            "A dual only"
          ],
          "correct": 0,
          "explanation": "Adjective sense → sound plural (ـُوْنَ); noun sense → often broken plurals like عَبَدَةٌ، كُفَّارٌ، عُقَلَاءُ."
        },
        {
          "q": "غَنِيٌّ can be translated as…",
          "options": [
            "rich (adjective) or 'rich person' (noun)",
            "only 'rich' as an adjective",
            "'riches' (a thing)",
            "'he became rich' (a verb)"
          ],
          "correct": 0,
          "explanation": "The participles and صفة مشبهة function as both nouns and adjectives."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 4 (Supplement)",
          "kind": "mcq",
          "prompt": "جَاهِلٌ is…",
          "options": [
            "'ignorant / one who does not know' — اسم الفاعل (فَاعِلٌ)",
            "'ignorance' — مصدر",
            "'more ignorant' — اسم التفضيل",
            "'known' — اسم المفعول"
          ],
          "correct": 0,
          "explanation": "From جَهِلَ — the فَاعِلٌ pattern."
        },
        {
          "title": "Book Exercise 4 (Supplement)",
          "kind": "mcq",
          "prompt": "جَوْعَانُ is…",
          "options": [
            "'hungry' — صفة مشبهة on فَعْلَانُ",
            "'hunger' — مصدر",
            "'one who feeds' — اسم الفاعل",
            "'eaten' — اسم المفعول"
          ],
          "correct": 0,
          "explanation": "From جَاعَ — the فَعْلَانُ pattern (feminine جَوْعَى)."
        },
        {
          "title": "Book Exercise 4 (Supplement)",
          "kind": "mcq",
          "prompt": "حَزِيْنٌ is…",
          "options": [
            "'sad' — صفة مشبهة on فَعِيْلٌ",
            "'sadness' — مصدر",
            "'saddened' — اسم المفعول",
            "'one who saddens' — اسم الفاعل"
          ],
          "correct": 0,
          "explanation": "From حَزِنَ — the فَعِيْلٌ pattern."
        },
        {
          "title": "Book Exercise 4 (Supplement)",
          "kind": "mcq",
          "prompt": "رَزَّاقٌ is…",
          "options": [
            "'ever-providing / great provider' — صفة مشبهة on فَعَّالٌ",
            "'provider' — اسم الفاعل",
            "'provided' — اسم المفعول",
            "'provision' — مصدر"
          ],
          "correct": 0,
          "explanation": "فَعَّالٌ is the intense form; رَازِقٌ is the plain اسم الفاعل."
        },
        {
          "title": "Book Exercise 4 (Supplement)",
          "kind": "mcq",
          "prompt": "صَائِمٌ is…",
          "options": [
            "'fasting / one who fasts' — اسم الفاعل",
            "'fast' — مصدر",
            "'extremely fasting' — فَعَّالٌ",
            "'fasted' — اسم المفعول"
          ],
          "correct": 0,
          "explanation": "From صَامَ — فَاعِلٌ pattern (with the hamzah replacing the weak middle letter)."
        },
        {
          "title": "Book Exercise 4 (Supplement)",
          "kind": "mcq",
          "prompt": "عَطْشَانُ is…",
          "options": [
            "'thirsty' — صفة مشبهة on فَعْلَانُ",
            "'thirst' — مصدر",
            "'watered' — اسم المفعول",
            "'one who quenches' — اسم الفاعل"
          ],
          "correct": 0,
          "explanation": "From عَطِشَ — فَعْلَانُ pattern (feminine عَطْشَى)."
        },
        {
          "title": "Book Exercise 4 (Supplement)",
          "kind": "mcq",
          "prompt": "عَلَّامٌ is…",
          "options": [
            "'all-knowing / extremely knowledgeable' — صفة مشبهة on فَعَّالٌ",
            "'teacher' — اسم الفاعل of عَلَّمَ",
            "'taught' — اسم المفعول",
            "'knowledge' — مصدر"
          ],
          "correct": 0,
          "explanation": "The intense فَعَّالٌ form of knowing."
        },
        {
          "title": "Book Exercise 4 (Supplement)",
          "kind": "mcq",
          "prompt": "كَثِيْرٌ is…",
          "options": [
            "'abundant' — صفة مشبهة on فَعِيْلٌ",
            "'abundance' — مصدر",
            "'increasing' — اسم الفاعل",
            "'most abundant' — اسم التفضيل"
          ],
          "correct": 0,
          "explanation": "The textbook's own example of the فَعِيْلٌ pattern, from كَثُرَ."
        },
        {
          "title": "Book Exercise 4 (Supplement)",
          "kind": "mcq",
          "prompt": "مُبْتَسِمٌ is…",
          "options": [
            "'smiling / one who smiles' — اسم الفاعل of اِبْتَسَمَ",
            "'smiled at' — اسم المفعول",
            "'smile' — مصدر",
            "'very smiley' — فَعَّالٌ"
          ],
          "correct": 0,
          "explanation": "More-than-three-letter verb: يَبْتَسِمُ → مُبْتَسِمٌ (kasrah on penultimate)."
        },
        {
          "title": "Book Exercise 4 (Supplement)",
          "kind": "mcq",
          "prompt": "مَرِيْضٌ is…",
          "options": [
            "'sick' — صفة مشبهة on فَعِيْلٌ",
            "'sickness' — مصدر",
            "'nursed' — اسم المفعول",
            "'sicker' — اسم التفضيل"
          ],
          "correct": 0,
          "explanation": "From مَرِضَ — the فَعِيْلٌ pattern."
        },
        {
          "title": "big, large",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"big, large\"?",
          "options": [
            "كَبِيْرٌ",
            "غَفَرَ يَغْفِرُ",
            "عَطِشَ يَعْطَشُ",
            "ضَعِيْفٌ"
          ],
          "correct": 0
        },
        {
          "title": "big, large",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَبِيْرٌ mean?",
          "options": [
            "big, large",
            "to be sated",
            "to smile",
            "old"
          ],
          "correct": 0
        },
        {
          "title": "big, large (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of كَبِيْرٌ?",
          "options": [
            "كِبَارٌ",
            "قُدَمَاءُ",
            "جُدُدٌ",
            "صِغَارٌ"
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
            "جَهِلَ يَجْهَلُ",
            "حَزِنَ يَحْزَنُ",
            "غَابَ يَغِيْبُ"
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
            "to be angry",
            "to be absent, hidden, unseen, vanish",
            "to be abundant"
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
            "جُدُدٌ",
            "أَقْوِيَاءُ",
            "قُدَمَاءُ"
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
            "كَثُرَ يَكْثُرُ",
            "صَبَرَ يَصْبِرُ",
            "عَلَّمَ يُعَلِّمُ"
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
            "to be sad, grieve",
            "strong",
            "to be sated"
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
            "أَقْوِيَاءُ",
            "صِغَارٌ",
            "كِبَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "old",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"old\"?",
          "options": [
            "قَدِيْمٌ",
            "أَسْرَعَ يُسْرِعُ",
            "غَضِبَ يَغْضَبُ",
            "اِبْتَسَمَ يَبْتَسِمُ"
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
            "new",
            "to be sick",
            "to warn"
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
            "كِبَارٌ",
            "ضُعَفَاءُ",
            "جُدُدٌ"
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
            "ضَعِيْفٌ",
            "أَسْرَعَ يُسْرِعُ",
            "بَارِدٌ"
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
            "to be sated",
            "big, large",
            "to be sad, grieve"
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
            "جُدُدٌ",
            "صِغَارٌ",
            "قُدَمَاءُ"
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
            "شَبِعَ يَشْبَعُ",
            "غَفَرَ يَغْفِرُ",
            "صَغِيْرٌ"
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
            "big, large",
            "to be sad, grieve",
            "to be patient"
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
            "جُدُدٌ",
            "كِبَارٌ",
            "أَقْوِيَاءُ"
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
            "ضَعِيْفٌ",
            "حَزِنَ يَحْزَنُ",
            "كَبِيْرٌ"
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
            "to be sated",
            "to be sad, grieve",
            "to teach"
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
            "كَثُرَ يَكْثُرُ",
            "جَدِيْدٌ",
            "عَلَّمَ يُعَلِّمُ"
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
            "to be sick",
            "to warn",
            "weak"
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
            "كِذْبًا",
            "غَيْبًا، غَيْبُوْبَةً",
            "كَثْرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to tell the truth",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to tell the truth\"?",
          "options": [
            "صَدَقَ يَصْدُقُ",
            "عَطِشَ يَعْطَشُ",
            "قَدِيْمٌ",
            "كَبِيْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to tell the truth",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَدَقَ يَصْدُقُ mean?",
          "options": [
            "to tell the truth",
            "to be unaware of, ignorant, not know",
            "to be thirsty",
            "to disbelieve, be ungrateful"
          ],
          "correct": 0
        },
        {
          "title": "to tell the truth (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَدَقَ يَصْدُقُ?",
          "options": [
            "صِدْقًا",
            "شِبْعًا، شَبْعًا",
            "كَثْرَةً",
            "صَبْرًا"
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
            "أَنْذَرَ يُنْذِرُ",
            "جَهِلَ يَجْهَلُ",
            "كَذَبَ يَكْذِبُ"
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
            "to be patient",
            "to warn",
            "to teach"
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
            "شِبْعًا، شَبْعًا",
            "مَغْفِرَةً",
            "كُفْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to teach",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to teach\"?",
          "options": [
            "عَلَّمَ يُعَلِّمُ",
            "غَفَرَ يَغْفِرُ",
            "صَدَقَ يَصْدُقُ",
            "غَضِبَ يَغْضَبُ"
          ],
          "correct": 0
        },
        {
          "title": "to teach",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَلَّمَ يُعَلِّمُ mean?",
          "options": [
            "to teach",
            "to warn",
            "to thank",
            "to be angry"
          ],
          "correct": 0
        },
        {
          "title": "to teach (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَلَّمَ يُعَلِّمُ?",
          "options": [
            "تَعْلِيْمًا",
            "إِسْرَاعًا",
            "مَغْفِرَةً",
            "كَثْرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be absent, hidden, unseen, vanish",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be absent, hidden, unseen, vanish\"?",
          "options": [
            "غَابَ يَغِيْبُ",
            "شَبِعَ يَشْبَعُ",
            "صَدَقَ يَصْدُقُ",
            "ضَعِيْفٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be absent, hidden, unseen, vanish",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَابَ يَغِيْبُ mean?",
          "options": [
            "to be absent, hidden, unseen, vanish",
            "to be angry",
            "to be sick",
            "to work hard"
          ],
          "correct": 0
        },
        {
          "title": "to be absent, hidden, unseen, vanish (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of غَابَ يَغِيْبُ?",
          "options": [
            "غَيْبًا، غَيْبُوْبَةً",
            "عَطَشًا",
            "تَعْلِيْمًا",
            "حُزْنًا"
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
            "اِجْتَهَدَ يَجْتَهِدُ",
            "عَلَّمَ يُعَلِّمُ",
            "شَبِعَ يَشْبَعُ"
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
            "to be unaware of, ignorant, not know",
            "to hasten",
            "to be sated"
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
            "مَرَضًا",
            "حُزْنًا",
            "اِجْتِهَادًا"
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
            "شَكَرَ يَشْكُرُ",
            "جَهِلَ يَجْهَلُ",
            "غَابَ يَغِيْبُ"
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
            "to lie, be dishonest",
            "to be abundant",
            "to be absent, hidden, unseen, vanish"
          ],
          "correct": 0
        },
        {
          "title": "to forgive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of غَفَرَ يَغْفِرُ?",
          "options": [
            "مَغْفِرَةً",
            "صَبْرًا",
            "اِبْتِسَامًا",
            "عَطَشًا"
          ],
          "correct": 0
        },
        {
          "title": "to be abundant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be abundant\"?",
          "options": [
            "كَثُرَ يَكْثُرُ",
            "صَغِيْرٌ",
            "مَرِضَ يَمْرَضُ",
            "حَضَرَ يَحْضُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to be abundant",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَثُرَ يَكْثُرُ mean?",
          "options": [
            "to be abundant",
            "cold",
            "to thank",
            "to lie, be dishonest"
          ],
          "correct": 0
        },
        {
          "title": "to be abundant (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَثُرَ يَكْثُرُ?",
          "options": [
            "كَثْرَةً",
            "صَبْرًا",
            "إِسْرَاعًا",
            "كُفْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to lie, be dishonest",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to lie, be dishonest\"?",
          "options": [
            "كَذَبَ يَكْذِبُ",
            "جَهِلَ يَجْهَلُ",
            "اِبْتَسَمَ يَبْتَسِمُ",
            "اِجْتَهَدَ يَجْتَهِدُ"
          ],
          "correct": 0
        },
        {
          "title": "to lie, be dishonest",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَذَبَ يَكْذِبُ mean?",
          "options": [
            "to lie, be dishonest",
            "to tell the truth",
            "to be thirsty",
            "to be patient"
          ],
          "correct": 0
        },
        {
          "title": "to lie, be dishonest (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَذَبَ يَكْذِبُ?",
          "options": [
            "كِذْبًا",
            "اِجْتِهَادًا",
            "كُفْرًا",
            "جَهْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to disbelieve, be ungrateful",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to disbelieve, be ungrateful\"?",
          "options": [
            "كَفَرَ يَكْفُرُ",
            "صَدَقَ يَصْدُقُ",
            "شَكَرَ يَشْكُرُ",
            "قَدِيْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to disbelieve, be ungrateful",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَفَرَ يَكْفُرُ mean?",
          "options": [
            "to disbelieve, be ungrateful",
            "new",
            "to be unaware of, ignorant, not know",
            "to smile"
          ],
          "correct": 0
        },
        {
          "title": "to disbelieve, be ungrateful (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَفَرَ يَكْفُرُ?",
          "options": [
            "كُفْرًا",
            "اِبْتِسَامًا",
            "غَضَبًا",
            "صِدْقًا"
          ],
          "correct": 0
        },
        {
          "title": "to be sick",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be sick\"?",
          "options": [
            "مَرِضَ يَمْرَضُ",
            "كَبِيْرٌ",
            "قَوِيٌّ",
            "كَفَرَ يَكْفُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to be sick",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَرِضَ يَمْرَضُ mean?",
          "options": [
            "to be sick",
            "to thank",
            "strong",
            "to work hard"
          ],
          "correct": 0
        },
        {
          "title": "to be sick (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَرِضَ يَمْرَضُ?",
          "options": [
            "مَرَضًا",
            "عَطَشًا",
            "جَهْلًا",
            "إِنْذَارًا"
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
            "بَارِدٌ",
            "خَسِرَ يَخْسَرُ",
            "ضَعِيْفٌ"
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
            "weak",
            "old",
            "to be thirsty"
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
            "غَضَبًا",
            "عَطَشًا",
            "حُزْنًا"
          ],
          "correct": 0
        },
        {
          "title": "to work hard",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to work hard\"?",
          "options": [
            "اِجْتَهَدَ يَجْتَهِدُ",
            "عَطِشَ يَعْطَشُ",
            "جَاعَ يَجُوْعُ",
            "ضَعِيْفٌ"
          ],
          "correct": 0
        },
        {
          "title": "to work hard",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِجْتَهَدَ يَجْتَهِدُ mean?",
          "options": [
            "to work hard",
            "to warn",
            "to be sated",
            "to smile"
          ],
          "correct": 0
        },
        {
          "title": "to work hard (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِجْتَهَدَ يَجْتَهِدُ?",
          "options": [
            "اِجْتِهَادًا",
            "تَعْلِيْمًا",
            "حُضُوْرًا",
            "غَيْبًا، غَيْبُوْبَةً"
          ],
          "correct": 0
        },
        {
          "title": "to hasten",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hasten\"?",
          "options": [
            "أَسْرَعَ يُسْرِعُ",
            "كَثُرَ يَكْثُرُ",
            "قَوِيٌّ",
            "شَبِعَ يَشْبَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to hasten",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَسْرَعَ يُسْرِعُ mean?",
          "options": [
            "to hasten",
            "to be sick",
            "to teach",
            "to warn"
          ],
          "correct": 0
        },
        {
          "title": "to hasten (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَسْرَعَ يُسْرِعُ?",
          "options": [
            "إِسْرَاعًا",
            "صِدْقًا",
            "جُوْعًا",
            "شُكْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to warn",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to warn\"?",
          "options": [
            "أَنْذَرَ يُنْذِرُ",
            "خَسِرَ يَخْسَرُ",
            "غَفَرَ يَغْفِرُ",
            "جَهِلَ يَجْهَلُ"
          ],
          "correct": 0
        },
        {
          "title": "to warn",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَنْذَرَ يُنْذِرُ mean?",
          "options": [
            "to warn",
            "strong",
            "to tell the truth",
            "to smile"
          ],
          "correct": 0
        },
        {
          "title": "to warn (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَنْذَرَ يُنْذِرُ?",
          "options": [
            "إِنْذَارًا",
            "مَرَضًا",
            "كِذْبًا",
            "كُفْرًا"
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
            "جَهِلَ يَجْهَلُ",
            "غَفَرَ يَغْفِرُ",
            "قَدِيْمٌ"
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
            "to warn",
            "to be unaware of, ignorant, not know",
            "new"
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
            "كِذْبًا",
            "كَثْرَةً",
            "تَعْلِيْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to be unaware of, ignorant, not know",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be unaware of, ignorant, not know\"?",
          "options": [
            "جَهِلَ يَجْهَلُ",
            "جَدِيْدٌ",
            "كَفَرَ يَكْفُرُ",
            "صَدَقَ يَصْدُقُ"
          ],
          "correct": 0
        },
        {
          "title": "to be unaware of, ignorant, not know",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَهِلَ يَجْهَلُ mean?",
          "options": [
            "to be unaware of, ignorant, not know",
            "to be hungry",
            "to disbelieve, be ungrateful",
            "to warn"
          ],
          "correct": 0
        },
        {
          "title": "to be unaware of, ignorant, not know (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَهِلَ يَجْهَلُ?",
          "options": [
            "جَهْلًا",
            "كَثْرَةً",
            "صِدْقًا",
            "إِنْذَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to be sad, grieve",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be sad, grieve\"?",
          "options": [
            "حَزِنَ يَحْزَنُ",
            "أَنْذَرَ يُنْذِرُ",
            "قَوِيٌّ",
            "غَضِبَ يَغْضَبُ"
          ],
          "correct": 0
        },
        {
          "title": "to be sad, grieve",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَزِنَ يَحْزَنُ mean?",
          "options": [
            "to be sad, grieve",
            "big, large",
            "to hasten",
            "to smile"
          ],
          "correct": 0
        },
        {
          "title": "to be sad, grieve (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَزِنَ يَحْزَنُ?",
          "options": [
            "حُزْنًا",
            "جَهْلًا",
            "عَطَشًا",
            "إِسْرَاعًا"
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
            "كَثُرَ يَكْثُرُ",
            "صَغِيْرٌ",
            "بَارِدٌ"
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
            "to be patient",
            "small",
            "to be abundant"
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
            "مَرَضًا",
            "حُزْنًا",
            "كُفْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to make a loss",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make a loss\"?",
          "options": [
            "خَسِرَ يَخْسَرُ",
            "حَزِنَ يَحْزَنُ",
            "بَارِدٌ",
            "ضَعِيْفٌ"
          ],
          "correct": 0
        },
        {
          "title": "to make a loss",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَسِرَ يَخْسَرُ mean?",
          "options": [
            "to make a loss",
            "weak",
            "cold",
            "to be sated"
          ],
          "correct": 0
        },
        {
          "title": "to make a loss (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَسِرَ يَخْسَرُ?",
          "options": [
            "خُسْرَانًا",
            "تَعْلِيْمًا",
            "غَيْبًا، غَيْبُوْبَةً",
            "مَغْفِرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be sated",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be sated\"?",
          "options": [
            "شَبِعَ يَشْبَعُ",
            "غَفَرَ يَغْفِرُ",
            "أَسْرَعَ يُسْرِعُ",
            "عَطِشَ يَعْطَشُ"
          ],
          "correct": 0
        },
        {
          "title": "to be sated",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَبِعَ يَشْبَعُ mean?",
          "options": [
            "to be sated",
            "small",
            "to be absent, hidden, unseen, vanish",
            "to be unaware of, ignorant, not know"
          ],
          "correct": 0
        },
        {
          "title": "to be sated (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَبِعَ يَشْبَعُ?",
          "options": [
            "شِبْعًا، شَبْعًا",
            "كِذْبًا",
            "كُفْرًا",
            "شُكْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to thank",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to thank\"?",
          "options": [
            "شَكَرَ يَشْكُرُ",
            "غَضِبَ يَغْضَبُ",
            "قَدِيْمٌ",
            "عَطِشَ يَعْطَشُ"
          ],
          "correct": 0
        },
        {
          "title": "to thank",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَكَرَ يَشْكُرُ mean?",
          "options": [
            "to thank",
            "big, large",
            "to be absent, hidden, unseen, vanish",
            "to be patient"
          ],
          "correct": 0
        },
        {
          "title": "to thank (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَكَرَ يَشْكُرُ?",
          "options": [
            "شُكْرًا",
            "اِبْتِسَامًا",
            "صَبْرًا",
            "جَهْلًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l5",
      "title": "اسم التفضيل",
      "subtitle": "The comparative and superlative noun",
      "concepts": [
        {
          "heading": "اِسْمُ التَّفْضِيْلِ",
          "lines": [
            {
              "html": "The comparative and superlative nouns, اِسْمُ التَّفْضِيْلِ, depict the meaning of an اِسْمُ الْفَاعِلِ in a comparative or superlative context. For example, أَصْدَقُ is the اسم التفضيل of صَدَقَ يَصْدُقُ صِدْقًا; it shows a person who possesses the quality of truthfulness more, or the most.",
              "list": false
            },
            {
              "html": "This can be translated as either: 1. The comparative (by adding -er or 'more' after it). 2. The superlative (by adding -est or 'most' before it).",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "أَصْدَقُ depicts the quality of truthfulness 'more', or 'the most'. What is this kind of noun called?",
            "kind": "mcq",
            "options": [
              "اِسْمُ التَّفْضِيْلِ",
              "اِسْمُ الْفَاعِلِ",
              "اَلصِّفَةُ الْمُشَبَّهَةُ",
              "اِسْمُ الْمَفْعُوْلِ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Constructing the اِسْمُ التَّفْضِيْلِ",
          "lines": [
            {
              "html": "The اسم التفضيل is formed by placing the three letters of the مَاضِيْ in the pattern of أَفْعَلُ. The feminine form comes on the pattern of فُعْلَى.",
              "list": false
            },
            {
              "html": "صَدَقَ يَصْدُقُ صِدْقًا ← أَصْدَقُ — more truthful / most truthful",
              "list": true,
              "bullet": true
            },
            {
              "html": "غَضِبَ يَغْضَبُ غَضَبًا ← أَغْضَبُ — angrier / angriest",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "صَدَقَ →",
            "kind": "mcq",
            "options": [
              "أَصْدَقُ — more/most truthful",
              "صَادِقٌ — truthful (اسم الفاعل)",
              "مَصْدُوْقٌ — believed (اسم المفعول)",
              "صِدْقٌ — truthfulness (مصدر)"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Supplement Summary — Types of Nouns",
          "lines": [
            {
              "html": "The following table summarises the types of nouns discussed in the Supplement. The مُشْتَقَّاتُ are used as both nouns and adjectives.",
              "list": false
            },
            {
              "table": {
                "title": "Types of Nouns",
                "headers": [
                  "Type",
                  "Detail",
                  "Example"
                ],
                "rows": [
                  [
                    "مَصْدَرٌ",
                    "Infinitive — to ask",
                    "سُؤَالٌ"
                  ],
                  [
                    "مَصْدَرٌ",
                    "Gerund — asking",
                    "سُؤَالٌ"
                  ],
                  [
                    "مَصْدَرٌ",
                    "Verbal noun — question",
                    "سُؤَالٌ ج أَسْئِلَةٌ"
                  ],
                  [
                    "اِسْمُ الْفَاعِلِ",
                    "Three-letter مَاضِيْ",
                    "رَازِقٌ"
                  ],
                  [
                    "اِسْمُ الْفَاعِلِ",
                    "Four-/five-letter مَاضِيْ",
                    "مُنْذِرٌ"
                  ],
                  [
                    "اِسْمُ الْمَفْعُوْلِ",
                    "Three-letter مَاضِيْ",
                    "مَرْزُوْقٌ"
                  ],
                  [
                    "اِسْمُ الْمَفْعُوْلِ",
                    "Four-/five-letter مَاضِيْ",
                    "مُنْذَرٌ"
                  ],
                  [
                    "اَلصِّفَةُ الْمُشَبَّهَةُ بِاسْمِ الْفَاعِلِ",
                    "Patterns",
                    "فَعِيْلٌ، فَعُوْلٌ، فَعْلَانُ، فَعَّالٌ"
                  ],
                  [
                    "اِسْمُ التَّفْضِيْلِ",
                    "Comparative -er / Superlative -est",
                    "أَفْعَلُ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In the summary table, رَازِقٌ (from a 3-letter verb) and مُنْذِرٌ (from a 4/5-letter verb) are both examples of the same noun type. Which one?",
            "kind": "mcq",
            "options": [
              "اِسْمُ الْفَاعِلِ",
              "اِسْمُ الْمَفْعُوْلِ",
              "اَلصِّفَةُ الْمُشَبَّهَةُ بِاسْمِ الْفَاعِلِ",
              "اِسْمُ التَّفْضِيْلِ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "اِسْمُ التَّفْضِيْلِ",
        "rows": [
          {
            "label": "Meaning",
            "arabic": "اسم الفاعل in a comparative/superlative context",
            "meaning": "possesses the quality more / the most",
            "examples": [],
            "unlockAt": 0
          },
          {
            "label": "Pattern (masculine)",
            "arabic": "أَفْعَلُ",
            "meaning": "أَصْدَقُ — more/most truthful",
            "examples": [],
            "unlockAt": 1
          },
          {
            "label": "Pattern (feminine)",
            "arabic": "فُعْلَى",
            "meaning": "e.g. كُبْرَى",
            "examples": [],
            "unlockAt": 1
          },
          {
            "label": "Translation",
            "arabic": "-er / more … ; -est / most …",
            "meaning": "comparative or superlative",
            "examples": [],
            "unlockAt": 0
          }
        ]
      },
      "quiz": [
        {
          "q": "What does the اِسْمُ التَّفْضِيْلِ depict؟",
          "options": [
            "The receiver of an action",
            "The meaning of an اسم الفاعل in a comparative or superlative context",
            "The action itself as a noun",
            "A negated verb"
          ],
          "correct": 1,
          "explanation": "أَصْدَقُ = one who possesses truthfulness more (comparative) or the most (superlative)."
        },
        {
          "q": "What is the pattern of the اسم التفضيل؟",
          "options": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ",
            "أَفْعَلُ",
            "فَعِيْلٌ"
          ],
          "correct": 2,
          "explanation": "The three letters of the ماضي are placed in أَفْعَلُ: صَدَقَ → أَصْدَقُ."
        },
        {
          "q": "What is the feminine pattern of the اسم التفضيل؟",
          "options": [
            "فَعْلَى",
            "فُعْلَى",
            "فَعِيْلَةٌ",
            "أَفْعَلَةُ"
          ],
          "correct": 1,
          "explanation": "The feminine comes on فُعْلَى."
        },
        {
          "q": "How can أَغْضَبُ be translated؟",
          "options": [
            "angrier / angriest",
            "angry",
            "anger",
            "one who angers others"
          ],
          "correct": 0,
          "explanation": "Comparative (-er / more) or superlative (-est / most)."
        },
        {
          "q": "أَصْدَقُ is derived from which verb؟",
          "options": [
            "صَبَرَ",
            "صَدَقَ",
            "شَكَرَ",
            "خَلَقَ"
          ],
          "correct": 1,
          "explanation": "صَدَقَ يَصْدُقُ صِدْقًا (to tell the truth) → أَصْدَقُ."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 5 (Supplement)",
          "kind": "mcq",
          "prompt": "أَظْلَمُ translates as…",
          "options": [
            "more oppressive / most oppressive",
            "oppressor",
            "oppressed",
            "oppression"
          ],
          "correct": 0,
          "explanation": "اسم التفضيل of ظَلَمَ."
        },
        {
          "title": "Book Exercise 5 (Supplement)",
          "kind": "mcq",
          "prompt": "أَصْبَرُ translates as…",
          "options": [
            "more patient / most patient",
            "patient",
            "extremely patient (صَبَّارٌ)",
            "patience"
          ],
          "correct": 0,
          "explanation": "اسم التفضيل of صَبَرَ."
        },
        {
          "title": "Book Exercise 5 (Supplement)",
          "kind": "mcq",
          "prompt": "أَعْلَمُ translates as…",
          "options": [
            "more knowing / most knowing",
            "teacher",
            "taught",
            "knowledge"
          ],
          "correct": 0,
          "explanation": "اسم التفضيل of عَلِمَ."
        },
        {
          "title": "Book Exercise 5 (Supplement)",
          "kind": "mcq",
          "prompt": "أَجْهَلُ translates as…",
          "options": [
            "more ignorant / most ignorant",
            "ignorant",
            "ignorance",
            "unknown"
          ],
          "correct": 0,
          "explanation": "اسم التفضيل of جَهِلَ."
        },
        {
          "title": "Book Exercise 5 (Supplement)",
          "kind": "mcq",
          "prompt": "أَسْمَعُ translates as…",
          "options": [
            "more hearing / most hearing (sharper of hearing)",
            "hearer",
            "heard",
            "hearing (gerund)"
          ],
          "correct": 0,
          "explanation": "اسم التفضيل of سَمِعَ."
        },
        {
          "title": "Book Exercise 5 (Supplement)",
          "kind": "mcq",
          "prompt": "أَشْكَرُ translates as…",
          "options": [
            "more thankful / most thankful",
            "thankful",
            "thanked",
            "thanks"
          ],
          "correct": 0,
          "explanation": "اسم التفضيل of شَكَرَ."
        },
        {
          "title": "Book Exercise 5 (Supplement)",
          "kind": "mcq",
          "prompt": "أَعْبَدُ translates as…",
          "options": [
            "more worshipping / most worshipping (more devout)",
            "worshipper",
            "worshipped",
            "worship"
          ],
          "correct": 0,
          "explanation": "اسم التفضيل of عَبَدَ."
        },
        {
          "title": "Book Exercise 5 (Supplement)",
          "kind": "mcq",
          "prompt": "أَنْصَرُ translates as…",
          "options": [
            "more helping / most helping (a greater helper)",
            "helper",
            "helped",
            "help"
          ],
          "correct": 0,
          "explanation": "اسم التفضيل of نَصَرَ."
        }
      ]
    },
    {
      "id": "l6",
      "title": "المراجعة",
      "subtitle": "Key terms and master vocabulary — no new material, just review",
      "concepts": [
        {
          "heading": "Unit 1 Summary",
          "lines": [
            {
              "html": "This is a cumulative review of Unit 1: every key grammar term covered so far, plus the full noun and verb vocabulary from every lesson. Nothing here is new — the quiz below draws only on terms already taught, and the practice bank it unlocks is there to keep the vocabulary fresh.",
              "list": false
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "What does إِعْرَابٌ mean?",
          "options": [
            "state",
            "a state of a verb",
            "a state of a noun",
            "affirmative"
          ],
          "correct": 0
        },
        {
          "q": "What does مَرْفُوْعٌ mean?",
          "options": [
            "a state of a noun and verb",
            "imperative",
            "verb",
            "state"
          ],
          "correct": 0
        },
        {
          "q": "What does مَجْرُوْرٌ mean?",
          "options": [
            "a state of a noun",
            "past tense",
            "noun",
            "a state of a noun and verb"
          ],
          "correct": 0
        },
        {
          "q": "What does مَجْزُوْمٌ mean?",
          "options": [
            "a state of a verb",
            "a state of a noun",
            "verb",
            "governing particle"
          ],
          "correct": 0
        },
        {
          "q": "What does مَبْنِيٌّ mean?",
          "options": [
            "non-declinable",
            "noun",
            "state",
            "passive voice"
          ],
          "correct": 0
        },
        {
          "q": "What does مُعْرَبٌ mean?",
          "options": [
            "declinable",
            "non-governing particle",
            "affirmative",
            "state"
          ],
          "correct": 0
        },
        {
          "q": "What does مَاضٍ mean?",
          "options": [
            "past tense",
            "non-governing particle",
            "noun",
            "non-declinable"
          ],
          "correct": 0
        },
        {
          "q": "What does مُضَارِعٌ mean?",
          "options": [
            "present or future",
            "non-governing particle",
            "past tense",
            "affirmative"
          ],
          "correct": 0
        },
        {
          "q": "What does أَمْرٌ mean?",
          "options": [
            "imperative",
            "particle",
            "a state of a verb",
            "a state of a noun and verb"
          ],
          "correct": 0
        },
        {
          "q": "What does مُثْبَتٌ mean?",
          "options": [
            "affirmative",
            "active voice",
            "particle",
            "passive voice"
          ],
          "correct": 0
        },
        {
          "q": "What does مَنْفِيٌّ mean?",
          "options": [
            "negative",
            "state",
            "present or future",
            "declinable"
          ],
          "correct": 0
        },
        {
          "q": "What does فِعْلٌ مَعْلُوْمٌ mean?",
          "options": [
            "active voice",
            "passive voice",
            "declinable",
            "state"
          ],
          "correct": 0
        },
        {
          "q": "What does فِعْلٌ مَجْهُوْلٌ mean?",
          "options": [
            "passive voice",
            "active voice",
            "declinable",
            "non-declinable"
          ],
          "correct": 0
        },
        {
          "q": "What does عَامِلٌ mean?",
          "options": [
            "governing particle",
            "state",
            "active voice",
            "declinable"
          ],
          "correct": 0
        },
        {
          "q": "What does غَيْرُ عَامِلٍ mean?",
          "options": [
            "non-governing particle",
            "non-declinable",
            "past tense",
            "affirmative"
          ],
          "correct": 0
        },
        {
          "q": "What does اِسْمٌ ج أَسْمَاءٌ mean?",
          "options": [
            "noun",
            "a state of a noun and verb",
            "particle",
            "passive voice"
          ],
          "correct": 0
        },
        {
          "q": "What does فِعْلٌ ج أَفْعَالٌ mean?",
          "options": [
            "verb",
            "non-governing particle",
            "declinable",
            "passive voice"
          ],
          "correct": 0
        },
        {
          "q": "What does حَرْفٌ ج حُرُوْفٌ mean?",
          "options": [
            "particle",
            "declinable",
            "present or future",
            "non-governing particle"
          ],
          "correct": 0
        }
      ],
      "bank": [
        {
          "title": "messenger",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"messenger\"?",
          "options": [
            "رَسُوْلٌ",
            "سَنَةٌ",
            "نَفْسٌ",
            "صَبَرَ يَصْبِرُ"
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
            "to help",
            "to sit",
            "to teach"
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
            "سُوَرٌ",
            "شُمُوْسٌ",
            "جِبَالٌ"
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
            "صَدَقَ يَصْدُقُ",
            "مَاءٌ",
            "مُخْلِصٌ"
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
            "to provide",
            "king",
            "to come"
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
            "ضُعَفَاءُ",
            "مُؤْمِنُوْنَ",
            "أَقْوَامٌ"
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
            "قِرْطَاسٌ",
            "مَدْرَسَةٌ",
            "رَأَى يَرَى"
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
            "patient",
            "aunt (mother's sister)",
            "sincere"
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
            "أَيْدٍ، أَيَادٍ",
            "أَشْيَاءُ",
            "أَرْبَابٌ"
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
            "أَسْرَعَ يُسْرِعُ",
            "اِسْتَيْقَظَ يَسْتَيْقِظُ",
            "أَرْضٌ"
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
            "hardworking",
            "small",
            "imam, leader"
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
            "بُيُوْتٌ",
            "مَسَاجِدُ",
            "مَدَارِسُ"
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
            "مُعَلِّمٌ",
            "شَكَرَ يَشْكُرُ",
            "جَبَلٌ"
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
            "food",
            "to oppress",
            "nation"
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
            "قُدَمَاءُ",
            "أُمَّهَاتٌ",
            "كُتُبٌ"
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
            "آمَنَ يُؤْمِنُ",
            "جَدَّةٌ",
            "رَأَى يَرَى"
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
            "to eat",
            "imam, leader",
            "small"
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
            "أَشْرِبَةٌ",
            "نُفُوْسٌ، أَنْفُسٌ",
            "أَئِمَّةٌ"
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
            "مَاءٌ",
            "كُرْسِيٌّ",
            "يَدٌ"
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
            "prophet",
            "mother",
            "to believe"
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
            "أَجْدَادٌ",
            "كِبَارٌ",
            "صَابِرُوْنَ"
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
            "قَلَمٌ",
            "صَادِقٌ",
            "غَابَ يَغِيْبُ"
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
            "to come",
            "sun",
            "hardworking"
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
            "مُلُوْكٌ",
            "صِغَارٌ",
            "أَشْيَاءُ"
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
            "بَعَثَ يَبْعَثُ",
            "قَمَرٌ",
            "عَطِشَ يَعْطَشُ"
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
            "house",
            "to create",
            "student (female)"
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
            "أَنْبِيَاءُ، نَبِيُّوْنَ",
            "شُمُوْسٌ",
            "فُقَرَاءُ"
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
            "جَدٌّ",
            "رِيْحٌ",
            "أَرْضٌ"
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
            "fire",
            "teacher (male)",
            "mosque"
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
            "مُعَلِّمُوْنَ",
            "شُمُوْسٌ",
            "أَشْرِبَةٌ"
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
            "اِنْكَسَرَ يَنْكَسِرُ",
            "حَزِنَ يَحْزَنُ",
            "رِجْلٌ"
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
            "to be angry",
            "desk",
            "to sit"
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
            "كَرَاسِيُّ",
            "لَيَالٍ",
            "أَجْدَادٌ"
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
            "سُوْرَةٌ",
            "رِيْحٌ",
            "جَهِلَ يَجْهَلُ"
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
            "to recognise",
            "paper (sheet of)",
            "to see"
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
            "كَرَاسِيُّ",
            "مَسَاجِدُ",
            "طُلَّابٌ"
          ],
          "correct": 0
        },
        {
          "title": "drink",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"drink\"?",
          "options": [
            "شَرَابٌ",
            "مَرِضَ يَمْرَضُ",
            "فَاسِقٌ",
            "سَمِعَ يَسْمَعُ"
          ],
          "correct": 0
        },
        {
          "title": "drink",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَرَابٌ mean?",
          "options": [
            "drink",
            "to give",
            "uncle (father's brother)",
            "chapter"
          ],
          "correct": 0
        },
        {
          "title": "drink (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَرَابٌ?",
          "options": [
            "أَشْرِبَةٌ",
            "قَرَاطِيْسُ",
            "شُمُوْسٌ",
            "مُجْتَهِدُوْنَ"
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
            "نَفْسٌ",
            "رَجُلٌ",
            "جَدَّةٌ"
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
            "messenger",
            "garden, heaven",
            "to be hungry"
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
            "مَدَارِسُ",
            "سَنَوَاتٌ، سِنُوْنَ",
            "رِيَاحٌ"
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
            "سَأَلَ يَسْأَلُ",
            "اِسْتَيْقَظَ يَسْتَيْقِظُ",
            "سُوْرَةٌ"
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
            "mountain",
            "thankful",
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
            "كُتُبٌ",
            "مُعَلِّمُوْنَ",
            "مَدَارِسُ"
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
            "غَابَ يَغِيْبُ",
            "ضَعِيْفٌ",
            "جَدَّةٌ"
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
            "star",
            "to disbelieve, be ungrateful",
            "to be thirsty"
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
            "جَعَلَ يَجْعَلُ",
            "مُعَلِّمَةٌ",
            "قَوْمٌ"
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
            "food",
            "to fall",
            "to sleep"
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
            "نُجُوْمٌ",
            "بُيُوْتٌ",
            "جِبَالٌ"
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
            "سَنَةٌ",
            "فَقِيْرٌ",
            "أَنْزَلَ يُنْزِلُ"
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
            "king",
            "lord, nourisher",
            "wind"
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
            "أُنَاسٌ",
            "أَخَوَاتٌ",
            "أَقْوِيَاءُ"
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
            "شَرَابٌ",
            "جَدِيْدٌ",
            "كَفَرَ يَكْفُرُ"
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
            "to teach",
            "child (female)",
            "to be patient"
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
            "مَكَاتِبُ",
            "سُوَرٌ",
            "أُمَّهَاتٌ"
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
            "جَالِسٌ",
            "سَمِعَ يَسْمَعُ",
            "جَلَسَ يَجْلِسُ"
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
            "transgressor",
            "paper (sheet of)",
            "to be unaware of, ignorant, not know"
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
            "نِيْرَانٌ",
            "عِبَادٌ",
            "أَشْيَاءُ"
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
            "طِفْلٌ",
            "رِيْحٌ",
            "شَيْءٌ"
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
            "aunt (mother's sister)",
            "book",
            "food"
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
            "مُسْلِمُوْنَ",
            "مُلُوْكٌ",
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
            "قَمَرٌ",
            "كُرْسِيٌّ",
            "سَأَلَ يَسْأَلُ"
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
            "weak",
            "fire",
            "nation"
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
            "أَرْبَابٌ",
            "كَرَاسِيُّ",
            "أَرْضُوْنَ"
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
            "مُسْلِمٌ",
            "حَزِنَ يَحْزَنُ",
            "سَنَةٌ"
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
            "to work hard",
            "earth",
            "to smile"
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
            "قُدَمَاءُ",
            "إِخْوَانٌ، إِخْوَةٌ",
            "نُفُوْسٌ، أَنْفُسٌ"
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
            "شَرَابٌ",
            "جَهِلَ يَجْهَلُ",
            "عَمٌّ"
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
            "weak",
            "paper (sheet of)",
            "mother"
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
            "أَشْرِبَةٌ",
            "مُعَلِّمُوْنَ",
            "رِجَالٌ"
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
            "ذَهَبَ يَذْهَبُ",
            "مَاتَ يَمُوْتُ",
            "جَلَسَ يَجْلِسُ"
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
            "thankful",
            "aunt (mother's sister)",
            "to lie, be dishonest"
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
            "رُسُلٌ",
            "عُلَمَاءُ",
            "طُلَّابٌ"
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
            "أَعْطَى يُعْطِيْ",
            "آمَنَ يُؤْمِنُ",
            "عَرَفَ يَعْرِفُ"
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
            "cold",
            "to die",
            "to see"
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
            "مُعَلِّمُوْنَ",
            "أَطْعِمَةٌ",
            "عِبَادٌ"
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
            "جَدِيْدٌ",
            "كَفَرَ يَكْفُرُ",
            "نَفْسٌ"
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
            "to provide",
            "nation",
            "mother"
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
            "نِسَاءٌ، نِسْوَةٌ",
            "مَدَارِسُ",
            "كِبَارٌ"
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
            "خَالَةٌ",
            "كَثُرَ يَكْثُرُ",
            "ذَهَبَ يَذْهَبُ"
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
            "patient",
            "prophet",
            "mother"
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
            "أَطْفَالٌ",
            "صِغَارٌ",
            "طَالِبَاتٌ"
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
            "سَأَلَ يَسْأَلُ",
            "نَصَرَ يَنْصُرُ",
            "خَسِرَ يَخْسَرُ"
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
            "new",
            "to disbelieve, be ungrateful",
            "sister"
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
            "أَشْرِبَةٌ",
            "مَسَاجِدُ",
            "بَنَاتٌ"
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
            "نَبِيٌّ",
            "شَكَرَ يَشْكُرُ",
            "بَعَثَ يَبْعَثُ"
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
            "to be sated",
            "sitting",
            "to come"
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
            "قُدَمَاءُ",
            "سُوَرٌ",
            "مُؤْمِنُوْنَ"
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
            "سَأَلَ يَسْأَلُ",
            "كَثُرَ يَكْثُرُ",
            "ضَعِيْفٌ"
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
            "foot",
            "woman",
            "mountain"
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
            "مُعَلِّمَاتٌ",
            "أَرْبَابٌ",
            "صَالِحُوْنَ"
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
            "مَلِكٌ",
            "رَسُوْلٌ",
            "غَابَ يَغِيْبُ"
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
            "servant",
            "to lie, be dishonest",
            "to work hard"
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
            "نِيْرَانٌ",
            "مُلُوْكٌ",
            "مُسْلِمُوْنَ"
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
            "شَبِعَ يَشْبَعُ",
            "بَيْتٌ",
            "سَمَاءٌ"
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
            "sister",
            "sincere",
            "to break, become broken"
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
            "آبَاءٌ",
            "نِسَاءٌ، نِسْوَةٌ",
            "مُجْتَهِدُوْنَ"
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
            "رَسُوْلٌ",
            "مَاءٌ",
            "مَسْجِدٌ"
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
            "to eat",
            "pious",
            "to be patient"
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
            "بُيُوْتٌ",
            "رُسُلٌ",
            "عُلَمَاءُ"
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
            "خَالَةٌ",
            "جَلَسَ يَجْلِسُ",
            "سَمِعَ يَسْمَعُ"
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
            "weak",
            "to warn",
            "sitting"
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
            "أَيْدٍ، أَيَادٍ",
            "عِبَادٌ",
            "أَرْضُوْنَ"
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
            "يَدٌ",
            "عَبَدَ يَعْبُدُ",
            "جَاعَ يَجُوْعُ"
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
            "to be abundant",
            "pen",
            "messenger"
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
            "جَنَّةٌ",
            "اِبْتَسَمَ يَبْتَسِمُ",
            "أَنْزَلَ يُنْزِلُ"
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
            "people",
            "teacher (male)",
            "to disbelieve, be ungrateful"
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
            "أَجْدَادٌ",
            "نِسَاءٌ، نِسْوَةٌ",
            "شُمُوْسٌ"
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
            "رِيْحٌ",
            "أَنْزَلَ يُنْزِلُ",
            "مَسْجِدٌ"
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
            "hardworking",
            "new",
            "paper (sheet of)"
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
            "أَطْعِمَةٌ",
            "نُجُوْمٌ",
            "بُيُوْتٌ"
          ],
          "correct": 0
        },
        {
          "title": "child (female)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"child (female)\"?",
          "options": [
            "طِفْلَةٌ",
            "ضَعِيْفٌ",
            "نَصَرَ يَنْصُرُ",
            "قَامَ يَقُوْمُ"
          ],
          "correct": 0
        },
        {
          "title": "child (female)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طِفْلَةٌ mean?",
          "options": [
            "child (female)",
            "to hear, listen",
            "aunt (mother's sister)",
            "foot"
          ],
          "correct": 0
        },
        {
          "title": "child (female) (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of طِفْلَةٌ?",
          "options": [
            "أَطْفَالٌ",
            "أَيْدٍ، أَيَادٍ",
            "أَئِمَّةٌ",
            "لَيَالٍ"
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
            "قَامَ يَقُوْمُ",
            "يَدٌ",
            "قَلَمٌ"
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
            "thing",
            "transgressor",
            "to create"
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
            "آبَاءٌ",
            "سَنَوَاتٌ، سِنُوْنَ",
            "كُتُبٌ"
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
            "مُؤْمِنٌ",
            "سَنَةٌ",
            "آمَنَ يُؤْمِنُ"
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
            "to eat",
            "to be thirsty",
            "sky"
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
            "لَيَالٍ",
            "رِيَاحٌ",
            "مُعَلِّمُوْنَ"
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
            "غَضِبَ يَغْضَبُ",
            "مَاتَ يَمُوْتُ",
            "شَرَابٌ"
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
            "to sleep",
            "to ask",
            "to create"
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
            "رُسُلٌ",
            "مُخْلِصُوْنَ",
            "مُجْتَهِدُوْنَ"
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
            "مُعَلِّمٌ",
            "بَعَثَ يَبْعَثُ",
            "أَرْضٌ"
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
            "transgressor",
            "scholar",
            "drink"
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
            "طَالِبَاتٌ",
            "مُؤْمِنُوْنَ",
            "أَرْضُوْنَ"
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
            "بَيْتٌ",
            "قِرْطَاسٌ",
            "جَاعَ يَجُوْعُ"
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
            "to provide",
            "messenger"
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
            "رِيَاحٌ",
            "صَابِرُوْنَ",
            "أَخَوَاتٌ"
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
            "خَالَةٌ",
            "رَبٌّ",
            "وَلَدٌ"
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
            "night",
            "child, son",
            "to ask"
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
            "أُمَّهَاتٌ",
            "آبَاءٌ",
            "نُجُوْمٌ"
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
            "بَعَثَ يَبْعَثُ",
            "قَرَأَ يَقْرَأُ",
            "جَدِيْدٌ"
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
            "eye, spring",
            "to send down",
            "old"
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
            "رِجَالٌ",
            "عِبَادٌ",
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
            "رَسُوْلٌ",
            "أَنْزَلَ يُنْزِلُ",
            "جَلَسَ يَجْلِسُ"
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
            "to be sad, grieve",
            "new",
            "pious"
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
            "مُلُوْكٌ",
            "نُفُوْسٌ، أَنْفُسٌ",
            "عُلَمَاءُ"
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
            "مُخْلِصٌ",
            "أَكَلَ يَأْكُلُ",
            "مُجْتَهِدٌ"
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
            "soul",
            "grandmother",
            "transgressor"
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
            "مُجْتَهِدُوْنَ",
            "أُمَّهَاتٌ",
            "مُلُوْكٌ"
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
            "سَمَاءٌ",
            "أَسْرَعَ يُسْرِعُ",
            "طَعَامٌ"
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
            "student (male)",
            "to teach",
            "sincere"
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
            "أَطْفَالٌ",
            "رُسُلٌ",
            "مِيَاهٌ"
          ],
          "correct": 0
        },
        {
          "title": "transgressor",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"transgressor\"?",
          "options": [
            "فَاسِقٌ",
            "سَنَةٌ",
            "سَمِعَ يَسْمَعُ",
            "شَاكِرٌ"
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
            "to ask",
            "student (male)",
            "guest"
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
            "أَشْرِبَةٌ",
            "نُفُوْسٌ، أَنْفُسٌ",
            "أَنْبِيَاءُ، نَبِيُّوْنَ"
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
            "حَضَرَ يَحْضُرُ",
            "شَكَرَ يَشْكُرُ",
            "كَذَبَ يَكْذِبُ"
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
            "garden, heaven",
            "to stand",
            "book"
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
            "آبَاءٌ",
            "مِيَاهٌ",
            "أَرْضُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "destitute",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"destitute\"?",
          "options": [
            "فَقِيْرٌ",
            "مُسْلِمٌ",
            "رَأَى يَرَى",
            "بَارِدٌ"
          ],
          "correct": 0
        },
        {
          "title": "destitute",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَقِيْرٌ mean?",
          "options": [
            "destitute",
            "to fall",
            "sister",
            "to be abundant"
          ],
          "correct": 0
        },
        {
          "title": "destitute (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of فَقِيْرٌ?",
          "options": [
            "فُقَرَاءُ",
            "أَقْوَامٌ",
            "جَدَّاتٌ",
            "سَمَاوَاتٌ"
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
            "عَمٌّ",
            "مَدْرَسَةٌ",
            "غَفَرَ يَغْفِرُ"
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
            "to create",
            "to send, resurrect",
            "to sit"
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
            "جِبَالٌ",
            "قُدَمَاءُ",
            "جَالِسُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "old",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"old\"?",
          "options": [
            "قَدِيْمٌ",
            "مَلِكٌ",
            "آمَنَ يُؤْمِنُ",
            "طَعَامٌ"
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
            "pious",
            "to travel",
            "Muslim"
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
            "صَابِرُوْنَ",
            "نِيْرَانٌ",
            "جُدُدٌ"
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
            "ضَعِيْفٌ",
            "جَالِسٌ",
            "طِفْلٌ"
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
            "to be sated",
            "to create",
            "grandmother"
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
            "مُؤْمِنُوْنَ",
            "صَادِقُوْنَ",
            "رِيَاحٌ"
          ],
          "correct": 0
        },
        {
          "title": "paper (sheet of)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"paper (sheet of)\"?",
          "options": [
            "قِرْطَاسٌ",
            "قَامَ يَقُوْمُ",
            "مَلِكٌ",
            "ظَلَمَ يَظْلِمُ"
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
            "pious",
            "star",
            "to help"
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
            "مَدَارِسُ",
            "كِبَارٌ",
            "عُلَمَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "king",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"king\"?",
          "options": [
            "مَلِكٌ",
            "أَنْزَلَ يُنْزِلُ",
            "غَابَ يَغِيْبُ",
            "سَأَلَ يَسْأَلُ"
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
            "thankful",
            "to believe",
            "old"
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
            "عُلَمَاءُ",
            "مُسْلِمُوْنَ",
            "أَخَوَاتٌ"
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
            "اِجْتَهَدَ يَجْتَهِدُ",
            "أَنْذَرَ يُنْذِرُ",
            "رَأَى يَرَى"
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
            "to hear, listen",
            "thankful",
            "mountain"
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
            "أَئِمَّةٌ",
            "رِيَاحٌ",
            "رُسُلٌ"
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
            "أَنْزَلَ يُنْزِلُ",
            "سَقَطَ يَسْقُطُ"
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
            "grandfather",
            "student (female)",
            "year"
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
            "نُفُوْسٌ، أَنْفُسٌ",
            "ضُيُوْفٌ",
            "كِبَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "moon",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"moon\"?",
          "options": [
            "قَمَرٌ",
            "بَعَثَ يَبْعَثُ",
            "خَالَةٌ",
            "جَلَسَ يَجْلِسُ"
          ],
          "correct": 0
        },
        {
          "title": "moon",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَمَرٌ mean?",
          "options": [
            "moon",
            "king",
            "to wake up",
            "sincere"
          ],
          "correct": 0
        },
        {
          "title": "moon (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قَمَرٌ?",
          "options": [
            "أَقْمَارٌ",
            "أَعْيُنٌ، عُيُوْنٌ",
            "بَنَاتٌ",
            "أَوْلَادٌ"
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
            "طَالِبَةٌ",
            "نَاسٌ",
            "بَيْتٌ"
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
            "to read",
            "sky",
            "to attend"
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
            "رِجَالٌ",
            "رُسُلٌ",
            "جَنَّاتٌ"
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
            "سَنَةٌ",
            "خَالَةٌ",
            "نَجْمٌ"
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
            "destitute",
            "pious",
            "grandfather"
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
            "مَسَاجِدُ",
            "صِغَارٌ",
            "قُدَمَاءُ"
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
            "حَزِنَ يَحْزَنُ",
            "غَفَرَ يَغْفِرُ",
            "مُؤْمِنٌ"
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
            "teacher (male)",
            "destitute",
            "to thank"
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
            "صِغَارٌ",
            "أَرْضُوْنَ",
            "مُعَلِّمُوْنَ"
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
            "نَبِيٌّ",
            "خَسِرَ يَخْسَرُ",
            "سُوْرَةٌ"
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
            "year",
            "to believe",
            "to stand"
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
            "أَيْدٍ، أَيَادٍ",
            "أَشْرِبَةٌ",
            "ضُيُوْفٌ"
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
            "جَعَلَ يَجْعَلُ",
            "سَنَةٌ",
            "ضَيْفٌ"
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
            "destitute",
            "mountain",
            "to be abundant"
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
            "مُؤْمِنُوْنَ",
            "قُدَمَاءُ",
            "جَالِسُوْنَ"
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
            "أُمٌّ",
            "بَيْتٌ",
            "أَنْزَلَ يُنْزِلُ"
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
            "to hasten",
            "cold",
            "to be unaware of, ignorant, not know"
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
            "عُلَمَاءُ",
            "جَنَّاتٌ",
            "مُعَلِّمَاتٌ"
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
            "سَنَةٌ",
            "قَوْمٌ",
            "قَامَ يَقُوْمُ"
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
            "to be hungry",
            "to warn",
            "to see"
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
            "سَنَوَاتٌ، سِنُوْنَ",
            "أَقْوَامٌ",
            "جِبَالٌ"
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
            "شَاكِرٌ",
            "صَابِرٌ",
            "أُمٌّ"
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
            "child, son",
            "to go",
            "to hasten"
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
            "أَجْدَادٌ",
            "أَيْدٍ، أَيَادٍ",
            "مُؤْمِنُوْنَ"
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
            "مَرِضَ يَمْرَضُ",
            "مَلِكٌ",
            "مَاءٌ"
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
            "to travel",
            "drink",
            "destitute"
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
            "أَعْمَامٌ",
            "أَقْمَارٌ",
            "صَادِقُوْنَ"
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
            "مُعَلِّمَةٌ",
            "عَطِشَ يَعْطَشُ",
            "بَعَثَ يَبْعَثُ"
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
            "weak",
            "to travel",
            "to create"
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
            "مُعَلِّمُوْنَ",
            "أَيْدٍ، أَيَادٍ",
            "لَيَالٍ"
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
            "عَمٌّ",
            "عَرَفَ يَعْرِفُ",
            "بَيْتٌ"
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
            "to break, become broken",
            "to read",
            "hand"
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
            "آبَاءٌ",
            "كُتُبٌ"
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
            "كُرْسِيٌّ",
            "أَرْضٌ",
            "عَالِمٌ"
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
            "sky",
            "to provide",
            "to warn"
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
            "أَقْلَامٌ",
            "أُمَّهَاتٌ",
            "رُسُلٌ"
          ],
          "correct": 0
        },
        {
          "title": "water",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"water\"?",
          "options": [
            "مَاءٌ",
            "سَافَرَ يُسَافِرُ",
            "أَنْزَلَ يُنْزِلُ",
            "أُخْتٌ"
          ],
          "correct": 0
        },
        {
          "title": "water",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَاءٌ mean?",
          "options": [
            "water",
            "teacher (male)",
            "messenger",
            "thing"
          ],
          "correct": 0
        },
        {
          "title": "water (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَاءٌ?",
          "options": [
            "مِيَاهٌ",
            "طَالِبَاتٌ",
            "قَرَاطِيْسُ",
            "إِخْوَانٌ، إِخْوَةٌ"
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
            "سَنَةٌ",
            "فَاسِقٌ",
            "بَارِدٌ"
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
            "patient",
            "to provide",
            "to create"
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
            "طُلَّابٌ",
            "بَنَاتٌ",
            "أَطْعِمَةٌ"
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
            "سَقَطَ يَسْقُطُ",
            "أُمٌّ",
            "رَسُوْلٌ"
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
            "king",
            "to smile",
            "to break, become broken"
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
            "كَرَاسِيُّ",
            "مُلُوْكٌ",
            "مَسَاجِدُ"
          ],
          "correct": 0
        },
        {
          "title": "to give",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give\"?",
          "options": [
            "أَعْطَى يُعْطِيْ",
            "صَامَ يَصُوْمُ",
            "عَمٌّ",
            "نَفْسٌ"
          ],
          "correct": 0
        },
        {
          "title": "to give",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَعْطَى يُعْطِيْ mean?",
          "options": [
            "to give",
            "to oppress",
            "garden, heaven",
            "world"
          ],
          "correct": 0
        },
        {
          "title": "to give (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَعْطَى يُعْطِيْ?",
          "options": [
            "إِعْطَاءً",
            "إِيْمَانًا",
            "شِبْعًا، شَبْعًا",
            "خُسْرَانًا"
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
            "سُوْرَةٌ",
            "قَرَأَ يَقْرَأُ",
            "مَلِكٌ"
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
            "to be abundant",
            "old",
            "brother"
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
            "خُسْرَانًا",
            "قِيَامًا",
            "شُرْبًا"
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
            "بَارِدٌ",
            "أَسْرَعَ يُسْرِعُ",
            "اِبْتَسَمَ يَبْتَسِمُ"
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
            "to send down",
            "to be angry",
            "imam, leader"
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
            "إِعْطَاءً",
            "اِنْكِسَارًا",
            "صَبْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to work hard",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to work hard\"?",
          "options": [
            "اِجْتَهَدَ يَجْتَهِدُ",
            "صَغِيْرٌ",
            "قَدِيْمٌ",
            "أُخْتٌ"
          ],
          "correct": 0
        },
        {
          "title": "to work hard",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِجْتَهَدَ يَجْتَهِدُ mean?",
          "options": [
            "to work hard",
            "to wake up",
            "to eat",
            "nation"
          ],
          "correct": 0
        },
        {
          "title": "to work hard (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِجْتَهَدَ يَجْتَهِدُ?",
          "options": [
            "اِجْتِهَادًا",
            "صِدْقًا",
            "صَوْمًا، صِيَامًا",
            "مُسَافَرَةً"
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
            "كَذَبَ يَكْذِبُ",
            "نَارٌ",
            "حَضَرَ يَحْضُرُ"
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
            "aunt (mother's sister)",
            "to be absent, hidden, unseen, vanish",
            "mother"
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
            "شُرْبًا",
            "قِيَامًا",
            "اِنْكِسَارًا"
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
            "ضَيْفٌ",
            "شَيْءٌ",
            "ظَلَمَ يَظْلِمُ"
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
            "teacher (female)",
            "earth",
            "student (female)"
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
            "مَجِيْئًا",
            "إِيْمَانًا",
            "اِبْتِسَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to warn",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to warn\"?",
          "options": [
            "أَنْذَرَ يُنْذِرُ",
            "جَدٌّ",
            "جَاءَ يَجِيْءُ",
            "عَيْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "to warn",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَنْذَرَ يُنْذِرُ mean?",
          "options": [
            "to warn",
            "to go",
            "to hasten",
            "to break, become broken"
          ],
          "correct": 0
        },
        {
          "title": "to warn (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَنْذَرَ يُنْذِرُ?",
          "options": [
            "إِنْذَارًا",
            "شُرْبًا",
            "عِبَادَةً",
            "اِنْكِسَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to hasten",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hasten\"?",
          "options": [
            "أَسْرَعَ يُسْرِعُ",
            "صَدَقَ يَصْدُقُ",
            "عَطِشَ يَعْطَشُ",
            "دُنْيَا"
          ],
          "correct": 0
        },
        {
          "title": "to hasten",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَسْرَعَ يُسْرِعُ mean?",
          "options": [
            "to hasten",
            "teacher (female)",
            "king",
            "pen"
          ],
          "correct": 0
        },
        {
          "title": "to hasten (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَسْرَعَ يُسْرِعُ?",
          "options": [
            "إِسْرَاعًا",
            "سُؤَالًا",
            "مَوْتًا",
            "نَصْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to thank",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to thank\"?",
          "options": [
            "شَكَرَ يَشْكُرُ",
            "آمَنَ يُؤْمِنُ",
            "وَلَدٌ",
            "أُخْتٌ"
          ],
          "correct": 0
        },
        {
          "title": "to thank",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَكَرَ يَشْكُرُ mean?",
          "options": [
            "to thank",
            "school, place of study",
            "moon",
            "to be abundant"
          ],
          "correct": 0
        },
        {
          "title": "to thank (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَكَرَ يَشْكُرُ?",
          "options": [
            "شُكْرًا",
            "جُلُوْسًا",
            "رُؤْيَةً",
            "مَجِيْئًا"
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
            "عَمٌّ",
            "نَارٌ",
            "عَرَفَ يَعْرِفُ"
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
            "to be thirsty",
            "sky",
            "uncle (father's brother)"
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
            "خُسْرَانًا",
            "مَعْرِفَةً",
            "شِبْعًا، شَبْعًا"
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
            "حَزِنَ يَحْزَنُ",
            "أَكَلَ يَأْكُلُ",
            "شَكَرَ يَشْكُرُ"
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
            "sincere",
            "weak",
            "cold"
          ],
          "correct": 0
        },
        {
          "title": "to fast (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَامَ يَصُوْمُ?",
          "options": [
            "صَوْمًا، صِيَامًا",
            "كِذْبًا",
            "ذَهَابًا",
            "خَلْقًا"
          ],
          "correct": 0
        },
        {
          "title": "to break, become broken",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to break, become broken\"?",
          "options": [
            "اِنْكَسَرَ يَنْكَسِرُ",
            "دُنْيَا",
            "مُجْتَهِدٌ",
            "قَمَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to break, become broken",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْكَسَرَ يَنْكَسِرُ mean?",
          "options": [
            "to break, become broken",
            "star",
            "to give",
            "to be patient"
          ],
          "correct": 0
        },
        {
          "title": "to break, become broken (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْكَسَرَ يَنْكَسِرُ?",
          "options": [
            "اِنْكِسَارًا",
            "حُضُوْرًا",
            "جَهْلًا",
            "جَعْلًا"
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
            "عَالِمٌ",
            "أَكَلَ يَأْكُلُ",
            "كُرْسِيٌّ"
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
            "daughter",
            "teacher (female)",
            "soul"
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
            "قِيَامًا",
            "كِذْبًا",
            "صَوْمًا، صِيَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to send, resurrect",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to send, resurrect\"?",
          "options": [
            "بَعَثَ يَبْعَثُ",
            "مَاءٌ",
            "أَرْضٌ",
            "رَأَى يَرَى"
          ],
          "correct": 0
        },
        {
          "title": "to send, resurrect",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَعَثَ يَبْعَثُ mean?",
          "options": [
            "to send, resurrect",
            "pious",
            "house",
            "messenger"
          ],
          "correct": 0
        },
        {
          "title": "to send, resurrect (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَعَثَ يَبْعَثُ?",
          "options": [
            "بَعْثًا",
            "جَهْلًا",
            "إِسْرَاعًا",
            "شُرْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to tell the truth",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to tell the truth\"?",
          "options": [
            "صَدَقَ يَصْدُقُ",
            "مُعَلِّمَةٌ",
            "شَبِعَ يَشْبَعُ",
            "رَأَى يَرَى"
          ],
          "correct": 0
        },
        {
          "title": "to tell the truth",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَدَقَ يَصْدُقُ mean?",
          "options": [
            "to tell the truth",
            "to die",
            "to be thirsty",
            "sky"
          ],
          "correct": 0
        },
        {
          "title": "to tell the truth (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَدَقَ يَصْدُقُ?",
          "options": [
            "صِدْقًا",
            "شُرْبًا",
            "صَبْرًا",
            "مَغْفِرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to come",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to come\"?",
          "options": [
            "جَاءَ يَجِيْءُ",
            "سَقَطَ يَسْقُطُ",
            "صَادِقٌ",
            "مَسْجِدٌ"
          ],
          "correct": 0
        },
        {
          "title": "to come",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَاءَ يَجِيْءُ mean?",
          "options": [
            "to come",
            "teacher (male)",
            "earth",
            "new"
          ],
          "correct": 0
        },
        {
          "title": "to come (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَاءَ يَجِيْءُ?",
          "options": [
            "مَجِيْئًا",
            "نَوْمًا",
            "كُفْرًا",
            "اِسْتِيْقَاظًا"
          ],
          "correct": 0
        },
        {
          "title": "to oppress",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to oppress\"?",
          "options": [
            "ظَلَمَ يَظْلِمُ",
            "مَرِضَ يَمْرَضُ",
            "مَلِكٌ",
            "ضَعِيْفٌ"
          ],
          "correct": 0
        },
        {
          "title": "to oppress",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ظَلَمَ يَظْلِمُ mean?",
          "options": [
            "to oppress",
            "to hear, listen",
            "aunt (mother's sister)",
            "to wake up"
          ],
          "correct": 0
        },
        {
          "title": "to oppress (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ظَلَمَ يَظْلِمُ?",
          "options": [
            "ظُلْمًا",
            "عِبَادَةً",
            "أَكْلًا",
            "نَصْرًا"
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
            "ضَعِيْفٌ",
            "مَدْرَسَةٌ",
            "خَلَقَ يَخْلُقُ"
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
            "drink",
            "woman",
            "to be sad, grieve"
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
            "قِيَامًا",
            "صَوْمًا، صِيَامًا",
            "سُقُوْطًا"
          ],
          "correct": 0
        },
        {
          "title": "to worship",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to worship\"?",
          "options": [
            "عَبَدَ يَعْبُدُ",
            "عَلَّمَ يُعَلِّمُ",
            "بَارِدٌ",
            "مَلِكٌ"
          ],
          "correct": 0
        },
        {
          "title": "to worship",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَبَدَ يَعْبُدُ mean?",
          "options": [
            "to worship",
            "old",
            "foot",
            "house"
          ],
          "correct": 0
        },
        {
          "title": "to worship (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَبَدَ يَعْبُدُ?",
          "options": [
            "عِبَادَةً",
            "جُوْعًا",
            "عَطَشًا",
            "صَبْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to make",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make\"?",
          "options": [
            "جَعَلَ يَجْعَلُ",
            "شَيْءٌ",
            "خَسِرَ يَخْسَرُ",
            "دُنْيَا"
          ],
          "correct": 0
        },
        {
          "title": "to make",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَعَلَ يَجْعَلُ mean?",
          "options": [
            "to make",
            "cold",
            "chair",
            "star"
          ],
          "correct": 0
        },
        {
          "title": "to make (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَعَلَ يَجْعَلُ?",
          "options": [
            "جَعْلًا",
            "سُقُوْطًا",
            "اِنْكِسَارًا",
            "شُكْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to recognise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to recognise\"?",
          "options": [
            "عَرَفَ يَعْرِفُ",
            "كُرْسِيٌّ",
            "يَدٌ",
            "شَكَرَ يَشْكُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to recognise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَرَفَ يَعْرِفُ mean?",
          "options": [
            "to recognise",
            "water",
            "transgressor",
            "to be hungry"
          ],
          "correct": 0
        },
        {
          "title": "to recognise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَرَفَ يَعْرِفُ?",
          "options": [
            "مَعْرِفَةً",
            "سُقُوْطًا",
            "إِعْطَاءً",
            "غَيْبًا، غَيْبُوْبَةً"
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
            "طَالِبَةٌ",
            "ذَهَبَ يَذْهَبُ",
            "نَارٌ"
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
            "aunt (mother's sister)",
            "thing",
            "to attend"
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
            "ذَهَابًا",
            "نَصْرًا",
            "حُضُوْرًا"
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
            "ذَهَبَ يَذْهَبُ",
            "شَكَرَ يَشْكُرُ",
            "كَفَرَ يَكْفُرُ"
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
            "nation",
            "cold",
            "book"
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
            "شُرْبًا",
            "صَوْمًا، صِيَامًا",
            "إِنْزَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to be unaware of, ignorant, not know",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be unaware of, ignorant, not know\"?",
          "options": [
            "جَهِلَ يَجْهَلُ",
            "مَكْتَبٌ",
            "سَقَطَ يَسْقُطُ",
            "بَعَثَ يَبْعَثُ"
          ],
          "correct": 0
        },
        {
          "title": "to be unaware of, ignorant, not know",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَهِلَ يَجْهَلُ mean?",
          "options": [
            "to be unaware of, ignorant, not know",
            "to create",
            "house",
            "food"
          ],
          "correct": 0
        },
        {
          "title": "to be unaware of, ignorant, not know (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَهِلَ يَجْهَلُ?",
          "options": [
            "جَهْلًا",
            "ظُلْمًا",
            "صَوْمًا، صِيَامًا",
            "جَعْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to teach",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to teach\"?",
          "options": [
            "عَلَّمَ يُعَلِّمُ",
            "عَطِشَ يَعْطَشُ",
            "جَعَلَ يَجْعَلُ",
            "رِيْحٌ"
          ],
          "correct": 0
        },
        {
          "title": "to teach",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَلَّمَ يُعَلِّمُ mean?",
          "options": [
            "to teach",
            "to break, become broken",
            "thankful",
            "grandmother"
          ],
          "correct": 0
        },
        {
          "title": "to teach (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَلَّمَ يُعَلِّمُ?",
          "options": [
            "تَعْلِيْمًا",
            "إِنْذَارًا",
            "مَغْفِرَةً",
            "خَلْقًا"
          ],
          "correct": 0
        },
        {
          "title": "to be sad, grieve",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be sad, grieve\"?",
          "options": [
            "حَزِنَ يَحْزَنُ",
            "اِمْرَأَةٌ",
            "نَفْسٌ",
            "أَرْضٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be sad, grieve",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَزِنَ يَحْزَنُ mean?",
          "options": [
            "to be sad, grieve",
            "to warn",
            "to disbelieve, be ungrateful",
            "mosque"
          ],
          "correct": 0
        },
        {
          "title": "to be sad, grieve (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَزِنَ يَحْزَنُ?",
          "options": [
            "حُزْنًا",
            "جَعْلًا",
            "رُؤْيَةً",
            "خَلْقًا"
          ],
          "correct": 0
        },
        {
          "title": "to be absent, hidden, unseen, vanish",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be absent, hidden, unseen, vanish\"?",
          "options": [
            "غَابَ يَغِيْبُ",
            "اِمْرَأَةٌ",
            "أَبٌ",
            "عَمٌّ"
          ],
          "correct": 0
        },
        {
          "title": "to be absent, hidden, unseen, vanish",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَابَ يَغِيْبُ mean?",
          "options": [
            "to be absent, hidden, unseen, vanish",
            "book",
            "to create",
            "to be sad, grieve"
          ],
          "correct": 0
        },
        {
          "title": "to be absent, hidden, unseen, vanish (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of غَابَ يَغِيْبُ?",
          "options": [
            "غَيْبًا، غَيْبُوْبَةً",
            "بَعْثًا",
            "كِذْبًا",
            "إِعْطَاءً"
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
            "أَبٌ",
            "سَنَةٌ",
            "سَقَطَ يَسْقُطُ"
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
            "strong",
            "fire",
            "to be angry"
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
            "كِذْبًا",
            "جَهْلًا",
            "مَغْفِرَةً"
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
            "كَفَرَ يَكْفُرُ",
            "قِرْطَاسٌ",
            "يَدٌ"
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
            "child (female)",
            "guest",
            "to make"
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
            "مَغْفِرَةً",
            "نَصْرًا",
            "مَجِيْئًا"
          ],
          "correct": 0
        },
        {
          "title": "to make a loss",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make a loss\"?",
          "options": [
            "خَسِرَ يَخْسَرُ",
            "عَطِشَ يَعْطَشُ",
            "أَبٌ",
            "قَامَ يَقُوْمُ"
          ],
          "correct": 0
        },
        {
          "title": "to make a loss",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَسِرَ يَخْسَرُ mean?",
          "options": [
            "to make a loss",
            "food",
            "to die",
            "Muslim"
          ],
          "correct": 0
        },
        {
          "title": "to make a loss (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَسِرَ يَخْسَرُ?",
          "options": [
            "خُسْرَانًا",
            "كِذْبًا",
            "مَرَضًا",
            "شِبْعًا، شَبْعًا"
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
            "رَسُوْلٌ",
            "مَلِكٌ",
            "مُسْلِمٌ"
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
            "wind",
            "food",
            "night"
          ],
          "correct": 0
        },
        {
          "title": "to forgive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of غَفَرَ يَغْفِرُ?",
          "options": [
            "مَغْفِرَةً",
            "تَعْلِيْمًا",
            "نَصْرًا",
            "بَعْثًا"
          ],
          "correct": 0
        },
        {
          "title": "to create",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to create\"?",
          "options": [
            "خَلَقَ يَخْلُقُ",
            "جَدٌّ",
            "مُؤْمِنٌ",
            "قَوْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to create",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَلَقَ يَخْلُقُ mean?",
          "options": [
            "to create",
            "messenger",
            "year",
            "food"
          ],
          "correct": 0
        },
        {
          "title": "to create (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَلَقَ يَخْلُقُ?",
          "options": [
            "خَلْقًا",
            "صِدْقًا",
            "قِرَاءَةً",
            "رُؤْيَةً"
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
            "أَرْضٌ",
            "سَنَةٌ",
            "مُسْلِمٌ"
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
            "transgressor",
            "chair",
            "to sit"
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
            "سُقُوْطًا",
            "بَعْثًا",
            "إِعْطَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to go",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to go\"?",
          "options": [
            "ذَهَبَ يَذْهَبُ",
            "عَمٌّ",
            "حَزِنَ يَحْزَنُ",
            "سَقَطَ يَسْقُطُ"
          ],
          "correct": 0
        },
        {
          "title": "to go",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ذَهَبَ يَذْهَبُ mean?",
          "options": [
            "to go",
            "grandfather",
            "to give",
            "child, son"
          ],
          "correct": 0
        },
        {
          "title": "to go (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ذَهَبَ يَذْهَبُ?",
          "options": [
            "ذَهَابًا",
            "مَغْفِرَةً",
            "كِذْبًا",
            "سُقُوْطًا"
          ],
          "correct": 0
        },
        {
          "title": "to read",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to read\"?",
          "options": [
            "قَرَأَ يَقْرَأُ",
            "كَثُرَ يَكْثُرُ",
            "رَجُلٌ",
            "أَسْرَعَ يُسْرِعُ"
          ],
          "correct": 0
        },
        {
          "title": "to read",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَرَأَ يَقْرَأُ mean?",
          "options": [
            "to read",
            "father",
            "nation",
            "messenger"
          ],
          "correct": 0
        },
        {
          "title": "to read (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَرَأَ يَقْرَأُ?",
          "options": [
            "قِرَاءَةً",
            "مَوْتًا",
            "شُكْرًا",
            "أَكْلًا"
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
            "أَنْزَلَ يُنْزِلُ",
            "طَالِبٌ",
            "صَالِحٌ"
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
            "to worship",
            "to work hard",
            "house"
          ],
          "correct": 0
        },
        {
          "title": "to see (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَأَى يَرَى?",
          "options": [
            "رُؤْيَةً",
            "كُفْرًا",
            "إِنْذَارًا",
            "إِنْزَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to be abundant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be abundant\"?",
          "options": [
            "كَثُرَ يَكْثُرُ",
            "سَقَطَ يَسْقُطُ",
            "قَوْمٌ",
            "مُجْتَهِدٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be abundant",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَثُرَ يَكْثُرُ mean?",
          "options": [
            "to be abundant",
            "strong",
            "uncle (father's brother)",
            "school, place of study"
          ],
          "correct": 0
        },
        {
          "title": "to be abundant (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَثُرَ يَكْثُرُ?",
          "options": [
            "كَثْرَةً",
            "صِدْقًا",
            "سُقُوْطًا",
            "كُفْرًا"
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
            "طِفْلٌ",
            "أَبٌ",
            "عَمٌّ"
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
            "star",
            "to lie, be dishonest",
            "house"
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
            "اِجْتِهَادًا",
            "تَعْلِيْمًا",
            "شُكْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to lie, be dishonest",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to lie, be dishonest\"?",
          "options": [
            "كَذَبَ يَكْذِبُ",
            "صَابِرٌ",
            "ضَعِيْفٌ",
            "شَكَرَ يَشْكُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to lie, be dishonest",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَذَبَ يَكْذِبُ mean?",
          "options": [
            "to lie, be dishonest",
            "grandmother",
            "teacher (male)",
            "to ask"
          ],
          "correct": 0
        },
        {
          "title": "to lie, be dishonest (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَذَبَ يَكْذِبُ?",
          "options": [
            "كِذْبًا",
            "اِنْكِسَارًا",
            "عَطَشًا",
            "جُوْعًا"
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
            "ضَعِيْفٌ",
            "قَامَ يَقُوْمُ",
            "بَعَثَ يَبْعَثُ"
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
            "grandfather",
            "chair",
            "school, place of study"
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
            "قِرَاءَةً",
            "غَضَبًا",
            "شُكْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to disbelieve, be ungrateful",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to disbelieve, be ungrateful\"?",
          "options": [
            "كَفَرَ يَكْفُرُ",
            "جَاعَ يَجُوْعُ",
            "وَلَدٌ",
            "مَاتَ يَمُوْتُ"
          ],
          "correct": 0
        },
        {
          "title": "to disbelieve, be ungrateful",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَفَرَ يَكْفُرُ mean?",
          "options": [
            "to disbelieve, be ungrateful",
            "to oppress",
            "truthful",
            "pen"
          ],
          "correct": 0
        },
        {
          "title": "to disbelieve, be ungrateful (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَفَرَ يَكْفُرُ?",
          "options": [
            "كُفْرًا",
            "اِسْتِيْقَاظًا",
            "جَهْلًا",
            "بَعْثًا"
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
            "دُنْيَا",
            "كَبِيْرٌ",
            "لَيْلَةٌ، لَيْلٌ"
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
            "people",
            "to believe",
            "drink"
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
            "حُزْنًا",
            "جَعْلًا",
            "اِبْتِسَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to die",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to die\"?",
          "options": [
            "مَاتَ يَمُوْتُ",
            "مَدْرَسَةٌ",
            "غَابَ يَغِيْبُ",
            "عَيْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "to die",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَاتَ يَمُوْتُ mean?",
          "options": [
            "to die",
            "teacher (female)",
            "mosque",
            "nation"
          ],
          "correct": 0
        },
        {
          "title": "to die (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَاتَ يَمُوْتُ?",
          "options": [
            "مَوْتًا",
            "إِيْمَانًا",
            "سُؤَالًا",
            "إِسْرَاعًا"
          ],
          "correct": 0
        },
        {
          "title": "to fall",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fall\"?",
          "options": [
            "سَقَطَ يَسْقُطُ",
            "مَلِكٌ",
            "سُوْرَةٌ",
            "صَامَ يَصُوْمُ"
          ],
          "correct": 0
        },
        {
          "title": "to fall",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَقَطَ يَسْقُطُ mean?",
          "options": [
            "to fall",
            "to break, become broken",
            "messenger",
            "water"
          ],
          "correct": 0
        },
        {
          "title": "to fall (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَقَطَ يَسْقُطُ?",
          "options": [
            "سُقُوْطًا",
            "إِسْرَاعًا",
            "مَوْتًا",
            "جَهْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to be sick",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be sick\"?",
          "options": [
            "مَرِضَ يَمْرَضُ",
            "جَلَسَ يَجْلِسُ",
            "صَدَقَ يَصْدُقُ",
            "رِجْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be sick",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَرِضَ يَمْرَضُ mean?",
          "options": [
            "to be sick",
            "garden, heaven",
            "student (female)",
            "truthful"
          ],
          "correct": 0
        },
        {
          "title": "to be sick (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَرِضَ يَمْرَضُ?",
          "options": [
            "مَرَضًا",
            "اِسْتِيْقَاظًا",
            "شِبْعًا، شَبْعًا",
            "حُزْنًا"
          ],
          "correct": 0
        },
        {
          "title": "to hear, listen",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hear, listen\"?",
          "options": [
            "سَمِعَ يَسْمَعُ",
            "مُخْلِصٌ",
            "كَفَرَ يَكْفُرُ",
            "جَعَلَ يَجْعَلُ"
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
            "student (male)",
            "to fall",
            "hand"
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
            "نَصْرًا",
            "إِنْذَارًا",
            "خُسْرَانًا"
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
            "طَالِبَةٌ",
            "نَفْسٌ",
            "أَعْطَى يُعْطِيْ"
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
            "to smile",
            "new",
            "teacher (male)"
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
            "سَمْعًا",
            "عَطَشًا",
            "مَوْتًا"
          ],
          "correct": 0
        },
        {
          "title": "to drink",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to drink\"?",
          "options": [
            "شَرِبَ يَشْرَبُ",
            "سَمِعَ يَسْمَعُ",
            "قِرْطَاسٌ",
            "أَسْرَعَ يُسْرِعُ"
          ],
          "correct": 0
        },
        {
          "title": "to drink",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَرِبَ يَشْرَبُ mean?",
          "options": [
            "to drink",
            "king",
            "to be sated",
            "uncle (father's brother)"
          ],
          "correct": 0
        },
        {
          "title": "to drink (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَرِبَ يَشْرَبُ?",
          "options": [
            "شُرْبًا",
            "إِعْطَاءً",
            "حُضُوْرًا",
            "مَرَضًا"
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
            "صَامَ يَصُوْمُ",
            "جَاعَ يَجُوْعُ",
            "أُمٌّ"
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
            "to create",
            "to hasten",
            "to oppress"
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
            "قِرَاءَةً",
            "إِعْطَاءً",
            "كِذْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to be sated",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be sated\"?",
          "options": [
            "شَبِعَ يَشْبَعُ",
            "بِنْتٌ",
            "كَثُرَ يَكْثُرُ",
            "شَيْءٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be sated",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَبِعَ يَشْبَعُ mean?",
          "options": [
            "to be sated",
            "king",
            "thankful",
            "to be angry"
          ],
          "correct": 0
        },
        {
          "title": "to be sated (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَبِعَ يَشْبَعُ?",
          "options": [
            "شِبْعًا، شَبْعًا",
            "مُسَافَرَةً",
            "حُزْنًا",
            "اِبْتِسَامًا"
          ],
          "correct": 0
        }
      ]
    }
  ]
};

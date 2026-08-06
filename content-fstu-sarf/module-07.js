// Module 07 — Unit 6: النَّاقِصُ (First Steps to Understanding Sarf, Unit 6, pp. 190-220)
//
// Converted from content-fstu-sarf/unit6-lesson1.js..unit6-lesson4.js plus
// unit6-summary.js, following the same conversion pattern as module-01.js and
// module-06.js: raw sections/blocks -> concepts/lines, raw exercise items ->
// MCQ exercise.items, raw quiz/exerciseBank/vocab -> quiz/bank[]. l4 is a
// revision-flavoured content lesson (Review of الْمَزِيْدُ فِيْهِ مِنَ النَّاقِصِ,
// pp. 210-215) -- converted the same way as any other lesson, NOT the
// trailing summary. l5 is the trailing "Unit 6 Summary" review lesson (no
// exercise, no summary sidebar -- mirrors module-01.js's l13 / module-06.js's
// l4), built from unit6-summary.js's master تصريف صغير table, a second
// study-aid table comparing the four الثُّلَاثِيُّ الْمُجَرَّدُ models, and the
// unit-end verb vocabulary. unit6-summary.js has no keyTerms array (unlike
// unit5-summary.js), so l5's quiz is built from the definitional terms
// established in unit6's own lesson content (l1's summary box plus a few
// terms explicitly glossed in the lesson bodies) plus three content
// questions grounded in the two summary tables. Module id is 's-u6'.
export default {
  "id": "s-u6",
  "title": "النَّاقِصُ",
  "heading": "الْفِعْلُ غَيْرُ السَّالِمِ",
  "blurb": "النَّاقِص: the weak verb with a final وَاو or يَاء, and the three changes that reshape it.",
  "lessons": [
    {
      "id": "l1",
      "title": "مُقَدِّمَةٌ",
      "subtitle": "Introduction to النَّاقِصُ — the defective verb, and its three changes: تَسْكِيْنٌ، قَلْبٌ، حَذْفٌ",
      "concepts": [
        {
          "heading": "What is النَّاقِصُ?",
          "lines": [
            {
              "html": "<bdi>نَاقِصٌ</bdi> is a <bdi>مُعْتَلٌّ</bdi> (weak verb) in which the <bdi>لَامُ الْكَلِمَةِ</bdi> — the third root letter — is a <bdi>حَرْفُ الْعِلَّةِ</bdi> (weak letter).",
              "list": false
            },
            {
              "html": "If the <bdi>حَرْفُ الْعِلَّةِ</bdi> is a <bdi>وَاوٌ</bdi>, the verb is called <bdi>نَاقِصٌ وَاوِيٌّ</bdi>, and if it is a <bdi>يَاءٌ</bdi>, it is called <bdi>نَاقِصٌ يَائِيٌّ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>يَدْعُوْ</bdi> — <bdi>نَاقِصٌ وَاوِيٌّ</bdi> — the third root letter is a <bdi>وَاوٌ</bdi>",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>يَرْمِيْ</bdi> — <bdi>نَاقِصٌ يَائِيٌّ</bdi> — the third root letter is a <bdi>يَاءٌ</bdi>",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "What is a نَاقِصٌ verb?",
            "kind": "mcq",
            "options": [
              "A verb whose first root letter is a حَرْفُ عِلَّةٍ",
              "A verb whose second root letter is a حَرْفُ عِلَّةٍ",
              "A مُعْتَلٌّ in which the لَامُ الْكَلِمَةِ (third root letter) is a حَرْفُ عِلَّةٍ",
              "A verb with a هَمْزَةٌ as one of its root letters"
            ],
            "correct": 2
          }
        },
        {
          "heading": "Notes on Writing",
          "lines": [
            {
              "html": "The standing <bdi>أَلِفٌ</bdi> at the end of a <bdi>نَاقِصٌ</bdi> word is written differently in different scripts. In some it is written as a standing <bdi>فَتْحَةٌ</bdi> (<bdi>طَغٰى</bdi>); in others it is not written (<bdi>طَغَى</bdi>). In this book it is written without a standing <bdi>فَتْحَةٌ</bdi>.",
              "list": false
            },
            {
              "html": "If the <bdi>أَلِفٌ</bdi> is written as a <bdi>ى</bdi>, the <bdi>ى</bdi> will not have dots under it, e.g. <bdi>طَغَى</bdi>. In all other cases the <bdi>ي</bdi> is written with dots, e.g. <bdi>رَضِيَ، الدَّاعِيْ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How is the standing أَلِفٌ written at the end of نَاقِصٌ words in this book?",
            "kind": "mcq",
            "options": [
              "Without a standing فَتْحَةٌ, e.g. طَغَى",
              "Always with a standing فَتْحَةٌ, e.g. طَغٰى",
              "As a وَاوٌ",
              "As a يَاءٌ with dots, e.g. طَغَي"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The First Change: تَسْكِيْنٌ",
          "lines": [
            {
              "html": "<bdi>تَسْكِيْنٌ</bdi> is to remove the <bdi>حَرَكَةٌ</bdi> of a <bdi>حَرْفُ عِلَّةٍ</bdi> to make it <bdi>سَاكِنٌ</bdi>. It occurs in the last letter of some <bdi>صِيَغٌ</bdi> of <bdi>الْمُضَارِعُ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>يَدْعُوُ ← يَدْعُوْ</bdi> — the <bdi>ضَمَّةٌ</bdi> on the <bdi>وَاوٌ</bdi> is removed (<bdi>تَسْكِيْنٌ</bdi>)",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>يَرْمِيُ ← يَرْمِيْ</bdi> — the <bdi>حَرَكَةٌ</bdi> on the <bdi>يَاءٌ</bdi> is removed (<bdi>تَسْكِيْنٌ</bdi>)",
              "list": true,
              "bullet": true
            },
            {
              "html": "In <bdi>الْغَائِبُوْنَ</bdi>, <bdi>الْمُخَاطَبُوْنَ</bdi> and <bdi>الْمُخَاطَبَةُ</bdi>, a <bdi>حَذْفٌ</bdi> (dropping) takes place after the <bdi>تَسْكِيْنٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>يَدْعُوُوْنَ ← يَدْعُوْوْنَ ← يَدْعُوْنَ</bdi> — <bdi>تَسْكِيْنٌ</bdi> then <bdi>حَذْفٌ</bdi>",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>يَرْمِيُوْنَ ← يَرْمِيْوْنَ ← يَرْمُوْنَ</bdi> — <bdi>تَسْكِيْنٌ</bdi> then <bdi>حَذْفٌ</bdi>",
              "list": true,
              "bullet": true
            },
            {
              "html": "If there is a <bdi>كَسْرَةٌ</bdi> before the <bdi>وَاوٌ</bdi>, it will change to a <bdi>ضَمَّةٌ</bdi> to match the following <bdi>وَاوٌ</bdi>, e.g. <bdi>يَرْمُوْنَ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is تَسْكِيْنٌ?",
            "kind": "mcq",
            "options": [
              "Changing one letter into another",
              "Removing the حَرَكَةٌ of a حَرْفُ عِلَّةٍ to make it سَاكِنٌ",
              "Dropping a weak letter entirely",
              "Adding a سُكُوْنٌ to the first letter of the verb"
            ],
            "correct": 1
          }
        },
        {
          "heading": "The Second Change: قَلْبٌ",
          "lines": [
            {
              "html": "<bdi>قَلْبٌ</bdi> (changing one letter into another) occurs in three places in <bdi>نَاقِصٌ</bdi> verbs.",
              "list": false
            },
            {
              "html": "(1) In <bdi>الْمَاضِيْ</bdi>: (a) The <bdi>وَاوٌ</bdi> and <bdi>يَاءٌ</bdi> change to an <bdi>أَلِفٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>سَعَيَ ← سَعَى</bdi> — the <bdi>يَاءٌ</bdi> changes to an <bdi>أَلِفٌ</bdi> (<bdi>قَلْبٌ</bdi>)",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>دَعَوَ ← دَعَا</bdi> — the <bdi>وَاوٌ</bdi> changes to an <bdi>أَلِفٌ</bdi> (<bdi>قَلْبٌ</bdi>)",
              "list": true,
              "bullet": true
            },
            {
              "html": "In some <bdi>صِيَغٌ</bdi> a <bdi>حَذْفٌ</bdi> takes place after the <bdi>قَلْبٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>سَعَيَتْ ← سَعَاتْ ← سَعَتْ</bdi> — <bdi>قَلْبٌ</bdi> then <bdi>حَذْفٌ</bdi>",
              "list": true,
              "bullet": true
            },
            {
              "html": "(b) The <bdi>وَاوٌ</bdi> changes to a <bdi>يَاءٌ</bdi> when it is preceded by a <bdi>كَسْرَةٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>دُعِوَ ← دُعِيَ</bdi> — the <bdi>وَاوٌ</bdi> after a <bdi>كَسْرَةٌ</bdi> becomes a <bdi>يَاءٌ</bdi>",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>رَضِوَ ← رَضِيَ</bdi> — the <bdi>وَاوٌ</bdi> after a <bdi>كَسْرَةٌ</bdi> becomes a <bdi>يَاءٌ</bdi>",
              "list": true,
              "bullet": true
            },
            {
              "html": "(2) In <bdi>مَزِيْدٌ فِيْهِ</bdi> verbs: the <bdi>وَاوٌ</bdi> changes to a <bdi>يَاءٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>اِبْتَلَوَ ← اِبْتَلَيَ ← اِبْتَلَى</bdi> — the <bdi>وَاوٌ</bdi> becomes a <bdi>يَاءٌ</bdi>, which then becomes an <bdi>أَلِفٌ</bdi>",
              "list": true,
              "bullet": true
            },
            {
              "html": "(3) In the <bdi>مَصْدَرٌ</bdi> of <bdi>مَزِيْدٌ فِيْهِ</bdi> verbs: the <bdi>يَاءٌ</bdi> changes to a <bdi>هَمْزَةٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>اِبْتِلَايًا ← اِبْتِلَاءً</bdi> — the <bdi>يَاءٌ</bdi> becomes a <bdi>هَمْزَةٌ</bdi> (<bdi>قَلْبٌ</bdi>)",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "In الْمَاضِيْ, what does سَعَيَ become by قَلْبٌ?",
            "kind": "mcq",
            "options": [
              "سَعَى",
              "سَعَوْ",
              "سَعِيَ",
              "سَاعَ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Dropping of the Final Weak Letter",
          "lines": [
            {
              "html": "The <bdi>حَرْفُ الْعِلَّةِ</bdi> at the end of <bdi>نَاقِصٌ</bdi> words is sometimes dropped. This is especially common at the end of verses in the Quran.",
              "list": false
            },
            {
              "html": "<bdi>الدَّاعِيْ ← الدَّاعِ</bdi> — the final <bdi>يَاءٌ</bdi> is dropped (<bdi>حَذْفٌ</bdi>)",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>الْمُتَعَالِيْ ← الْمُتَعَالِ</bdi> — the final <bdi>يَاءٌ</bdi> is dropped (<bdi>حَذْفٌ</bdi>)",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "At the end of Quranic verses, الدَّاعِيْ commonly appears as…",
            "kind": "mcq",
            "options": [
              "الدَّاعِ — the final حَرْفُ عِلَّةٍ is dropped",
              "الدَّاعَا — the يَاءٌ becomes an أَلِفٌ",
              "الدَّاعِئ — the يَاءٌ becomes a هَمْزَةٌ",
              "الدَّاعُوْ — the يَاءٌ becomes a وَاوٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Overview of the Changes",
          "lines": [
            {
              "table": {
                "title": "Changes to نَاقِصٌ — overview",
                "headers": [
                  "Change",
                  "Where it occurs",
                  "Example"
                ],
                "rows": [
                  [
                    "تَسْكِيْنٌ",
                    "Last letter of some صِيَغٌ of الْمُضَارِعُ",
                    "يَدْعُوُ ← يَدْعُوْ"
                  ],
                  [
                    "تَسْكِيْنٌ + حَذْفٌ",
                    "الْغَائِبُوْنَ، الْمُخَاطَبُوْنَ، الْمُخَاطَبَةُ of الْمُضَارِعُ",
                    "يَدْعُوُوْنَ ← يَدْعُوْنَ"
                  ],
                  [
                    "قَلْبٌ (و/ي ← ا)",
                    "الْمَاضِيْ",
                    "سَعَيَ ← سَعَى، دَعَوَ ← دَعَا"
                  ],
                  [
                    "قَلْبٌ + حَذْفٌ",
                    "Some صِيَغٌ of الْمَاضِيْ",
                    "سَعَيَتْ ← سَعَتْ"
                  ],
                  [
                    "قَلْبٌ (و ← ي after كَسْرَةٌ)",
                    "الْمَاضِيْ",
                    "دُعِوَ ← دُعِيَ"
                  ],
                  [
                    "قَلْبٌ (و ← ي)",
                    "مَزِيْدٌ فِيْهِ verbs",
                    "اِبْتَلَوَ ← اِبْتَلَى"
                  ],
                  [
                    "قَلْبٌ (ي ← ء)",
                    "مَصْدَرٌ of مَزِيْدٌ فِيْهِ verbs",
                    "اِبْتِلَايًا ← اِبْتِلَاءً"
                  ],
                  [
                    "حَذْفٌ",
                    "End of نَاقِصٌ words, esp. at ends of Quranic verses",
                    "الدَّاعِيْ ← الدَّاعِ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Which change (or sequence of changes) turns يَدْعُوُوْنَ into يَدْعُوْنَ?",
            "kind": "mcq",
            "options": [
              "تَسْكِيْنٌ then حَذْفٌ — this is الْغَائِبُوْنَ, one of the three صِيَغٌ where حَذْفٌ follows تَسْكِيْنٌ",
              "قَلْبٌ — in الْمَاضِيْ, the يَاءٌ changes to an أَلِفٌ",
              "قَلْبٌ — a وَاوٌ preceded by a كَسْرَةٌ changes to a يَاءٌ",
              "قَلْبٌ then حَذْفٌ — first سَعَاتْ by قَلْبٌ, then the أَلِفٌ is dropped"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Introduction: النَّاقِصُ",
        "rows": [
          {
            "label": "A مُعْتَلٌّ whose لَامُ الْكَلِمَةِ is a حَرْفُ عِلَّةٍ",
            "arabic": "نَاقِصٌ",
            "meaning": "A مُعْتَلٌّ whose لَامُ الْكَلِمَةِ is a حَرْفُ عِلَّةٍ",
            "unlockAt": 0
          },
          {
            "label": "نَاقِصٌ whose weak letter is a وَاوٌ, e.g. يَدْعُوْ",
            "arabic": "نَاقِصٌ وَاوِيٌّ",
            "meaning": "نَاقِصٌ whose weak letter is a وَاوٌ, e.g. يَدْعُوْ",
            "unlockAt": 1
          },
          {
            "label": "نَاقِصٌ whose weak letter is a يَاءٌ, e.g. يَرْمِيْ",
            "arabic": "نَاقِصٌ يَائِيٌّ",
            "meaning": "نَاقِصٌ whose weak letter is a يَاءٌ, e.g. يَرْمِيْ",
            "unlockAt": 2
          },
          {
            "label": "Removing the حَرَكَةٌ of a حَرْفُ عِلَّةٍ to make it سَاكِنٌ",
            "arabic": "تَسْكِيْنٌ",
            "meaning": "Removing the حَرَكَةٌ of a حَرْفُ عِلَّةٍ to make it سَاكِنٌ",
            "unlockAt": 3
          },
          {
            "label": "Changing one letter into another, e.g. سَعَيَ ← سَعَى",
            "arabic": "قَلْبٌ",
            "meaning": "Changing one letter into another, e.g. سَعَيَ ← سَعَى",
            "unlockAt": 4
          },
          {
            "label": "Dropping a letter, e.g. يَدْعُوْنَ، الدَّاعِ",
            "arabic": "حَذْفٌ",
            "meaning": "Dropping a letter, e.g. يَدْعُوْنَ، الدَّاعِ",
            "unlockAt": 5
          }
        ]
      },
      "quiz": [
        {
          "q": "What is a نَاقِصٌ verb?",
          "options": [
            "A verb whose first root letter is a حَرْفُ عِلَّةٍ",
            "A verb whose second root letter is a حَرْفُ عِلَّةٍ",
            "A مُعْتَلٌّ in which the لَامُ الْكَلِمَةِ (third root letter) is a حَرْفُ عِلَّةٍ",
            "A verb with a هَمْزَةٌ as one of its root letters"
          ],
          "correct": 2,
          "explanation": "نَاقِصٌ is the weak verb whose third root letter (لَامُ الْكَلِمَةِ) is a وَاوٌ or يَاءٌ. (First root letter weak = مِثَالٌ; second = أَجْوَفُ.)"
        },
        {
          "q": "يَدْعُوْ is which type of نَاقِصٌ?",
          "options": [
            "نَاقِصٌ يَائِيٌّ, because it ends in a يَاءٌ",
            "نَاقِصٌ وَاوِيٌّ, because its weak letter is a وَاوٌ",
            "أَجْوَفُ وَاوِيٌّ",
            "مِثَالٌ وَاوِيٌّ"
          ],
          "correct": 1,
          "explanation": "The weak third root letter of يَدْعُوْ is a وَاوٌ, so it is نَاقِصٌ وَاوِيٌّ. يَرْمِيْ, with a يَاءٌ, is نَاقِصٌ يَائِيٌّ."
        },
        {
          "q": "What is تَسْكِيْنٌ?",
          "options": [
            "Changing one letter into another",
            "Removing the حَرَكَةٌ of a حَرْفُ عِلَّةٍ to make it سَاكِنٌ",
            "Dropping a weak letter entirely",
            "Adding a سُكُوْنٌ to the first letter of the verb"
          ],
          "correct": 1,
          "explanation": "تَسْكِيْنٌ removes the حَرَكَةٌ of a weak letter, e.g. يَدْعُوُ ← يَدْعُوْ. It occurs in the last letter of some صِيَغٌ of الْمُضَارِعُ."
        },
        {
          "q": "In which صِيَغٌ of الْمُضَارِعُ does حَذْفٌ take place after تَسْكِيْنٌ?",
          "options": [
            "الْغَائِبُ, الْغَائِبَةُ and الْمُتَكَلِّمُ",
            "الْغَائِبُوْنَ, الْمُخَاطَبُوْنَ and الْمُخَاطَبَةُ",
            "الْغَائِبَتَانِ and الْمُخَاطَبَتَانِ",
            "الْغَائِبَاتُ and الْمُخَاطَبَاتُ"
          ],
          "correct": 1,
          "explanation": "In الْغَائِبُوْنَ, الْمُخَاطَبُوْنَ and الْمُخَاطَبَةُ the weak letter is dropped after تَسْكِيْنٌ, e.g. يَدْعُوُوْنَ ← يَدْعُوْنَ."
        },
        {
          "q": "In الْمَاضِيْ, what does سَعَيَ become by قَلْبٌ?",
          "options": [
            "سَعَى",
            "سَعَوْ",
            "سَعِيَ",
            "سَاعَ"
          ],
          "correct": 0,
          "explanation": "In الْمَاضِيْ the وَاوٌ and يَاءٌ change to an أَلِفٌ: سَعَيَ ← سَعَى, دَعَوَ ← دَعَا."
        },
        {
          "q": "In the مَصْدَرٌ of مَزِيْدٌ فِيْهِ verbs, which قَلْبٌ takes place?",
          "options": [
            "The وَاوٌ changes to a يَاءٌ",
            "The يَاءٌ changes to an أَلِفٌ",
            "The يَاءٌ changes to a هَمْزَةٌ, e.g. اِبْتِلَايًا ← اِبْتِلَاءً",
            "The أَلِفٌ changes to a وَاوٌ"
          ],
          "correct": 2,
          "explanation": "In the مَصْدَرٌ of مَزِيْدٌ فِيْهِ verbs the يَاءٌ becomes a هَمْزَةٌ: اِبْتِلَايًا ← اِبْتِلَاءً."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "دَعَوَ becomes دَعَا through which change?",
          "options": [
            "قَلْبٌ — the وَاوٌ changes to an أَلِفٌ",
            "تَسْكِيْنٌ — the وَاوٌ is made سَاكِنٌ",
            "حَذْفٌ — the وَاوٌ is dropped",
            "No change — دَعَا is the original form"
          ],
          "correct": 0,
          "explanation": "In الْمَاضِيْ the وَاوٌ and يَاءٌ change to an أَلِفٌ (قَلْبٌ): دَعَوَ ← دَعَا."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Why does رَضِوَ become رَضِيَ?",
          "options": [
            "The وَاوٌ changes to a يَاءٌ because it is preceded by a كَسْرَةٌ",
            "The وَاوٌ changes to an أَلِفٌ in الْمَاضِيْ",
            "The وَاوٌ is dropped after تَسْكِيْنٌ",
            "The يَاءٌ changes to a هَمْزَةٌ"
          ],
          "correct": 0,
          "explanation": "A وَاوٌ preceded by a كَسْرَةٌ changes to a يَاءٌ: رَضِوَ ← رَضِيَ, دُعِوَ ← دُعِيَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which sequence of changes turns يَرْمِيُوْنَ into يَرْمُوْنَ?",
          "options": [
            "تَسْكِيْنٌ, then حَذْفٌ (and the كَسْرَةٌ becomes a ضَمَّةٌ to match the وَاوٌ)",
            "قَلْبٌ, then حَذْفٌ",
            "حَذْفٌ only",
            "قَلْبٌ only"
          ],
          "correct": 0,
          "explanation": "يَرْمِيُوْنَ ← يَرْمِيْوْنَ (تَسْكِيْنٌ) ← يَرْمُوْنَ (حَذْفٌ). The كَسْرَةٌ before the وَاوٌ changes to a ضَمَّةٌ to match it."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which صِيْغَةٌ of الْمَاضِيْ shows قَلْبٌ followed by حَذْفٌ?",
          "options": [
            "سَعَتْ (from سَعَيَتْ)",
            "سَعَى (from سَعَيَ)",
            "دُعِيَ (from دُعِوَ)",
            "يَدْعُوْ (from يَدْعُوُ)"
          ],
          "correct": 0,
          "explanation": "سَعَيَتْ ← سَعَاتْ (قَلْبٌ) ← سَعَتْ (حَذْفٌ). سَعَى shows قَلْبٌ only, دُعِيَ shows قَلْبٌ only, and يَدْعُوْ shows تَسْكِيْنٌ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "How is the standing أَلِفٌ written at the end of نَاقِصٌ words in this course?",
          "options": [
            "Without a standing فَتْحَةٌ, e.g. طَغَى",
            "Always with a standing فَتْحَةٌ, e.g. طَغٰى",
            "As a وَاوٌ",
            "As a يَاءٌ with dots, e.g. طَغَي"
          ],
          "correct": 0,
          "explanation": "Scripts differ: some write a standing فَتْحَةٌ (طَغٰى), others omit it (طَغَى). This course writes it without the standing فَتْحَةٌ, and the ى has no dots."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "When is the ى written without dots under it?",
          "options": [
            "When it represents an أَلِفٌ, e.g. طَغَى",
            "Whenever it is the last letter of any word",
            "When it is preceded by a كَسْرَةٌ, e.g. رَضِيَ",
            "Never — the ي always has dots"
          ],
          "correct": 0,
          "explanation": "If the أَلِفٌ is written in the shape of a ى, it carries no dots (طَغَى). In all other cases the ي keeps its dots, e.g. رَضِيَ، الدَّاعِيْ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "At the end of Quranic verses, الدَّاعِيْ commonly appears as…",
          "options": [
            "الدَّاعِ — the final حَرْفُ عِلَّةٍ is dropped",
            "الدَّاعَا — the يَاءٌ becomes an أَلِفٌ",
            "الدَّاعِئ — the يَاءٌ becomes a هَمْزَةٌ",
            "الدَّاعُوْ — the يَاءٌ becomes a وَاوٌ"
          ],
          "correct": 0,
          "explanation": "The final weak letter of نَاقِصٌ words is sometimes dropped, especially at the ends of verses: الدَّاعِيْ ← الدَّاعِ, الْمُتَعَالِيْ ← الْمُتَعَالِ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In مَزِيْدٌ فِيْهِ verbs such as اِبْتَلَوَ, what happens to the وَاوٌ?",
          "options": [
            "It changes to a يَاءٌ (which then becomes an أَلِفٌ): اِبْتَلَوَ ← اِبْتَلَيَ ← اِبْتَلَى",
            "It is simply dropped: اِبْتَلَ",
            "It is made سَاكِنٌ: اِبْتَلَوْ",
            "It changes to a هَمْزَةٌ: اِبْتَلَأَ"
          ],
          "correct": 0,
          "explanation": "In مَزِيْدٌ فِيْهِ verbs the وَاوٌ changes to a يَاءٌ; in الْمَاضِيْ that يَاءٌ then becomes an أَلِفٌ: اِبْتَلَوَ ← اِبْتَلَيَ ← اِبْتَلَى."
        }
      ]
    },
    {
      "id": "l2",
      "title": "الثُّلَاثِيُّ الْمُجَرَّدُ",
      "subtitle": "النَّاقِصُ from بَاب فَتَحَ، سَمِعَ، ضَرَبَ، نَصَرَ — with a full review of the changes",
      "concepts": [
        {
          "heading": "Part 1: النَّاقِصُ from بَاب فَتَحَ يَفْتَحُ",
          "lines": [
            {
              "html": "The model <bdi>نَاقِصٌ</bdi> verb from <bdi>بَاب فَتَحَ</bdi> is <bdi>سَعَى يَسْعَى سَعْيًا</bdi> (to walk). The <bdi>مَاضِيْ</bdi> ends in <bdi>قَلْبٌ</bdi> (<bdi>سَعَيَ ← سَعَى</bdi>) and the <bdi>مُضَارِعُ</bdi> ends in an <bdi>أَلِفٌ</bdi> (<bdi>يَسْعَى</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — سَعَى (بَاب فَتَحَ)",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "سَعَى",
                    "يَسْعَى",
                    "سَعْيًا",
                    "سُعِيَ",
                    "يُسْعَى",
                    "سَعْيًا",
                    "اِسْعَ",
                    "لَا تَسْعَ",
                    "سَاعٍ",
                    "مَسْعِيٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — سَعَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "سَعَى",
                    "يَسْعَى",
                    "سُعِيَ",
                    "يُسْعَى"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "سَعَيَا",
                    "يَسْعَيَانِ",
                    "سُعِيَا",
                    "يُسْعَيَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "سَعَوْا",
                    "يَسْعَوْنَ",
                    "سُعُوْا",
                    "يُسْعَوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "سَعَتْ",
                    "تَسْعَى",
                    "سُعِيَتْ",
                    "تُسْعَى"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "سَعَتَا",
                    "تَسْعَيَانِ",
                    "سُعِيَتَا",
                    "تُسْعَيَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "سَعَيْنَ",
                    "يَسْعَيْنَ",
                    "سُعِيْنَ",
                    "يُسْعَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "سَعَيْتَ",
                    "تَسْعَى",
                    "سُعِيْتَ",
                    "تُسْعَى"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "سَعَيْتُمَا",
                    "تَسْعَيَانِ",
                    "سُعِيْتُمَا",
                    "تُسْعَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "سَعَيْتُمْ",
                    "تَسْعَوْنَ",
                    "سُعِيْتُمْ",
                    "تُسْعَوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "سَعَيْتِ",
                    "تَسْعَيْنَ",
                    "سُعِيْتِ",
                    "تُسْعَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "سَعَيْتُمَا",
                    "تَسْعَيَانِ",
                    "سُعِيْتُمَا",
                    "تُسْعَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "سَعَيْتُنَّ",
                    "تَسْعَيْنَ",
                    "سُعِيْتُنَّ",
                    "تُسْعَيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "سَعَيْتُ",
                    "أَسْعَى",
                    "سُعِيْتُ",
                    "أُسْعَى"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "سَعَيْنَا",
                    "نَسْعَى",
                    "سُعِيْنَا",
                    "نُسْعَى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اَلْأَمْرُ وَالنَّهْيُ — سَعَى",
                "headers": [
                  "صِيْغَةٌ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "اِسْعَ",
                    "لَا تَسْعَ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِسْعَيَا",
                    "لَا تَسْعَيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِسْعَوْا",
                    "لَا تَسْعَوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِسْعَيْ",
                    "لَا تَسْعَيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِسْعَيَا",
                    "لَا تَسْعَيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِسْعَيْنَ",
                    "لَا تَسْعَيْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — سَعَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "سَاعٍ",
                    "مَسْعِيٌّ"
                  ],
                  [
                    "Dual (m)",
                    "سَاعِيَانِ",
                    "مَسْعِيَّانِ"
                  ],
                  [
                    "Plural (m)",
                    "سَاعُوْنَ",
                    "مَسْعِيُّوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "سَاعِيَةٌ",
                    "مَسْعِيَّةٌ"
                  ],
                  [
                    "Dual (f)",
                    "سَاعِيَتَانِ",
                    "مَسْعِيَّتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "سَاعِيَاتٌ",
                    "مَسْعِيَّاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the correct identification of سَعَتْ — its بَاب, صِيْغَةٌ and meaning?",
            "kind": "mcq",
            "options": [
              "بَاب فَتَحَ — الْغَائِبَةُ من الماضي: She walked",
              "بَاب سَمِعَ — الْغَائِبُوْنَ من الماضي: They (m/p) were satisfied",
              "بَاب ضَرَبَ — الْغَائِبُوْنَ من المضارع: They (m/p) throw",
              "بَاب نَصَرَ — الْمُخَاطَبَةُ من المضارع: You (f/s) call"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 2: النَّاقِصُ from بَاب سَمِعَ يَسْمَعُ",
          "lines": [
            {
              "html": "The model <bdi>نَاقِصٌ</bdi> verb from <bdi>بَاب سَمِعَ</bdi> is <bdi>رَضِيَ يَرْضَى رِضْوَانًا</bdi> (to be satisfied). In the <bdi>مَاضِيْ</bdi> the <bdi>وَاوٌ</bdi> has changed to a <bdi>يَاءٌ</bdi> after the <bdi>كَسْرَةٌ</bdi> (<bdi>رَضِوَ ← رَضِيَ</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — رَضِيَ (بَاب سَمِعَ)",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "رَضِيَ",
                    "يَرْضَى",
                    "رِضْوَانًا",
                    "رُضِيَ",
                    "يُرْضَى",
                    "رِضْوَانًا",
                    "اِرْضَ",
                    "لَا تَرْضَ",
                    "رَاضٍ",
                    "مَرْضِيٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — رَضِيَ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "رَضِيَ",
                    "يَرْضَى",
                    "رُضِيَ",
                    "يُرْضَى"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "رَضِيَا",
                    "يَرْضَيَانِ",
                    "رُضِيَا",
                    "يُرْضَيَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "رَضُوْا",
                    "يَرْضَوْنَ",
                    "رُضُوْا",
                    "يُرْضَوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "رَضِيَتْ",
                    "تَرْضَى",
                    "رُضِيَتْ",
                    "تُرْضَى"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "رَضِيَتَا",
                    "تَرْضَيَانِ",
                    "رُضِيَتَا",
                    "تُرْضَيَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "رَضِيْنَ",
                    "يَرْضَيْنَ",
                    "رُضِيْنَ",
                    "يُرْضَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "رَضِيْتَ",
                    "تَرْضَى",
                    "رُضِيْتَ",
                    "تُرْضَى"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "رَضِيْتُمَا",
                    "تَرْضَيَانِ",
                    "رُضِيْتُمَا",
                    "تُرْضَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "رَضِيْتُمْ",
                    "تَرْضَوْنَ",
                    "رُضِيْتُمْ",
                    "تُرْضَوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "رَضِيْتِ",
                    "تَرْضَيْنَ",
                    "رُضِيْتِ",
                    "تُرْضَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "رَضِيْتُمَا",
                    "تَرْضَيَانِ",
                    "رُضِيْتُمَا",
                    "تُرْضَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "رَضِيْتُنَّ",
                    "تَرْضَيْنَ",
                    "رُضِيْتُنَّ",
                    "تُرْضَيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "رَضِيْتُ",
                    "أَرْضَى",
                    "رُضِيْتُ",
                    "أُرْضَى"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "رَضِيْنَا",
                    "نَرْضَى",
                    "رُضِيْنَا",
                    "نُرْضَى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اَلْأَمْرُ وَالنَّهْيُ — رَضِيَ",
                "headers": [
                  "صِيْغَةٌ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "اِرْضَ",
                    "لَا تَرْضَ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِرْضَيَا",
                    "لَا تَرْضَيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِرْضَوْا",
                    "لَا تَرْضَوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِرْضَيْ",
                    "لَا تَرْضَيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِرْضَيَا",
                    "لَا تَرْضَيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِرْضَيْنَ",
                    "لَا تَرْضَيْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — رَضِيَ",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "رَاضٍ",
                    "مَرْضِيٌّ"
                  ],
                  [
                    "Dual (m)",
                    "رَاضِيَانِ",
                    "مَرْضِيَّانِ"
                  ],
                  [
                    "Plural (m)",
                    "رَاضُوْنَ",
                    "مَرْضِيُّوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "رَاضِيَةٌ",
                    "مَرْضِيَّةٌ"
                  ],
                  [
                    "Dual (f)",
                    "رَاضِيَتَانِ",
                    "مَرْضِيَّتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "رَاضِيَاتٌ",
                    "مَرْضِيَّاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the correct identification of رَضُوْا — its بَاب, صِيْغَةٌ and meaning?",
            "kind": "mcq",
            "options": [
              "بَاب سَمِعَ — الْغَائِبُوْنَ من الماضي: They (m/p) were satisfied",
              "بَاب ضَرَبَ — الْغَائِبُوْنَ من المضارع: They (m/p) throw",
              "بَاب نَصَرَ — الْمُخَاطَبَةُ من المضارع: You (f/s) call",
              "بَاب ضَرَبَ — الْمُخَاطَبُ من الأمر: Throw!"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 3: النَّاقِصُ from بَاب ضَرَبَ يَضْرِبُ",
          "lines": [
            {
              "html": "The model <bdi>نَاقِصٌ</bdi> verb from <bdi>بَاب ضَرَبَ</bdi> is <bdi>رَمَى يَرْمِيْ رَمْيًا</bdi> (to throw). The <bdi>مُضَارِعُ</bdi> ends in a <bdi>يَاءٌ سَاكِنَةٌ</bdi> (<bdi>يَرْمِيْ</bdi>) by <bdi>تَسْكِيْنٌ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — رَمَى (بَاب ضَرَبَ)",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "رَمَى",
                    "يَرْمِيْ",
                    "رَمْيًا",
                    "رُمِيَ",
                    "يُرْمَى",
                    "رَمْيًا",
                    "اِرْمِ",
                    "لَا تَرْمِ",
                    "رَامٍ",
                    "مَرْمِيٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — رَمَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "رَمَى",
                    "يَرْمِيْ",
                    "رُمِيَ",
                    "يُرْمَى"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "رَمَيَا",
                    "يَرْمِيَانِ",
                    "رُمِيَا",
                    "يُرْمَيَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "رَمَوْا",
                    "يَرْمُوْنَ",
                    "رُمُوْا",
                    "يُرْمَوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "رَمَتْ",
                    "تَرْمِيْ",
                    "رُمِيَتْ",
                    "تُرْمَى"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "رَمَتَا",
                    "تَرْمِيَانِ",
                    "رُمِيَتَا",
                    "تُرْمَيَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "رَمَيْنَ",
                    "يَرْمِيْنَ",
                    "رُمِيْنَ",
                    "يُرْمَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "رَمَيْتَ",
                    "تَرْمِيْ",
                    "رُمِيْتَ",
                    "تُرْمَى"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "رَمَيْتُمَا",
                    "تَرْمِيَانِ",
                    "رُمِيْتُمَا",
                    "تُرْمَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "رَمَيْتُمْ",
                    "تَرْمُوْنَ",
                    "رُمِيْتُمْ",
                    "تُرْمَوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "رَمَيْتِ",
                    "تَرْمِيْنَ",
                    "رُمِيْتِ",
                    "تُرْمَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "رَمَيْتُمَا",
                    "تَرْمِيَانِ",
                    "رُمِيْتُمَا",
                    "تُرْمَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "رَمَيْتُنَّ",
                    "تَرْمِيْنَ",
                    "رُمِيْتُنَّ",
                    "تُرْمَيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "رَمَيْتُ",
                    "أَرْمِيْ",
                    "رُمِيْتُ",
                    "أُرْمَى"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "رَمَيْنَا",
                    "نَرْمِيْ",
                    "رُمِيْنَا",
                    "نُرْمَى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اَلْأَمْرُ وَالنَّهْيُ — رَمَى",
                "headers": [
                  "صِيْغَةٌ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "اِرْمِ",
                    "لَا تَرْمِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِرْمِيَا",
                    "لَا تَرْمِيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِرْمُوْا",
                    "لَا تَرْمُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِرْمِيْ",
                    "لَا تَرْمِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِرْمِيَا",
                    "لَا تَرْمِيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِرْمِيْنَ",
                    "لَا تَرْمِيْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — رَمَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "رَامٍ",
                    "مَرْمِيٌّ"
                  ],
                  [
                    "Dual (m)",
                    "رَامِيَانِ",
                    "مَرْمِيَّانِ"
                  ],
                  [
                    "Plural (m)",
                    "رَامُوْنَ",
                    "مَرْمِيُّوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "رَامِيَةٌ",
                    "مَرْمِيَّةٌ"
                  ],
                  [
                    "Dual (f)",
                    "رَامِيَتَانِ",
                    "مَرْمِيَّتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "رَامِيَاتٌ",
                    "مَرْمِيَّاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the correct identification of يَرْمُوْنَ — its بَاب, صِيْغَةٌ and meaning?",
            "kind": "mcq",
            "options": [
              "بَاب ضَرَبَ — الْغَائِبُوْنَ من المضارع: They (m/p) throw",
              "بَاب نَصَرَ — الْمُخَاطَبَةُ من المضارع: You (f/s) call",
              "بَاب ضَرَبَ — الْمُخَاطَبُ من الأمر: Throw!",
              "بَاب نَصَرَ — الْغَائِبُ من الماضي المجهول: He was called"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 4: النَّاقِصُ from بَاب نَصَرَ يَنْصُرُ",
          "lines": [
            {
              "html": "The model <bdi>نَاقِصٌ</bdi> verb from <bdi>بَاب نَصَرَ</bdi> is <bdi>دَعَا يَدْعُوْ دُعَاءً</bdi> (to call). It is <bdi>نَاقِصٌ وَاوِيٌّ</bdi>: the <bdi>مَاضِيْ</bdi> ends in an <bdi>أَلِفٌ</bdi> from a <bdi>وَاوٌ</bdi> (<bdi>دَعَوَ ← دَعَا</bdi>) and the <bdi>مُضَارِعُ</bdi> ends in a <bdi>وَاوٌ سَاكِنَةٌ</bdi> (<bdi>يَدْعُوْ</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — دَعَا (بَاب نَصَرَ)",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "دَعَا",
                    "يَدْعُوْ",
                    "دُعَاءً",
                    "دُعِيَ",
                    "يُدْعَى",
                    "دُعَاءً",
                    "أُدْعُ",
                    "لَا تَدْعُ",
                    "دَاعٍ",
                    "مَدْعُوٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — دَعَا",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "دَعَا",
                    "يَدْعُوْ",
                    "دُعِيَ",
                    "يُدْعَى"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "دَعَوَا",
                    "يَدْعُوَانِ",
                    "دُعِيَا",
                    "يُدْعَيَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "دَعَوْا",
                    "يَدْعُوْنَ",
                    "دُعُوْا",
                    "يُدْعَوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "دَعَتْ",
                    "تَدْعُوْ",
                    "دُعِيَتْ",
                    "تُدْعَى"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "دَعَتَا",
                    "تَدْعُوَانِ",
                    "دُعِيَتَا",
                    "تُدْعَيَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "دَعَوْنَ",
                    "يَدْعُوْنَ",
                    "دُعِيْنَ",
                    "يُدْعَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "دَعَوْتَ",
                    "تَدْعُوْ",
                    "دُعِيْتَ",
                    "تُدْعَى"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "دَعَوْتُمَا",
                    "تَدْعُوَانِ",
                    "دُعِيْتُمَا",
                    "تُدْعَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "دَعَوْتُمْ",
                    "تَدْعُوْنَ",
                    "دُعِيْتُمْ",
                    "تُدْعَوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "دَعَوْتِ",
                    "تَدْعِيْنَ",
                    "دُعِيْتِ",
                    "تُدْعَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "دَعَوْتُمَا",
                    "تَدْعُوَانِ",
                    "دُعِيْتُمَا",
                    "تُدْعَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "دَعَوْتُنَّ",
                    "تَدْعُوْنَ",
                    "دُعِيْتُنَّ",
                    "تُدْعَيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "دَعَوْتُ",
                    "أَدْعُوْ",
                    "دُعِيْتُ",
                    "أُدْعَى"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "دَعَوْنَا",
                    "نَدْعُوْ",
                    "دُعِيْنَا",
                    "نُدْعَى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اَلْأَمْرُ وَالنَّهْيُ — دَعَا",
                "headers": [
                  "صِيْغَةٌ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "أُدْعُ",
                    "لَا تَدْعُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "أُدْعُوَا",
                    "لَا تَدْعُوَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "أُدْعُوْا",
                    "لَا تَدْعُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "أُدْعِيْ",
                    "لَا تَدْعِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "أُدْعُوَا",
                    "لَا تَدْعُوَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "أُدْعُوْنَ",
                    "لَا تَدْعُوْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — دَعَا",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "دَاعٍ",
                    "مَدْعُوٌّ"
                  ],
                  [
                    "Dual (m)",
                    "دَاعِيَانِ",
                    "مَدْعُوَّانِ"
                  ],
                  [
                    "Plural (m)",
                    "دَاعُوْنَ",
                    "مَدْعُوُّوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "دَاعِيَةٌ",
                    "مَدْعُوَّةٌ"
                  ],
                  [
                    "Dual (f)",
                    "دَاعِيَتَانِ",
                    "مَدْعُوَّتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "دَاعِيَاتٌ",
                    "مَدْعُوَّاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the correct identification of تَدْعِيْنَ — its بَاب, صِيْغَةٌ and meaning?",
            "kind": "mcq",
            "options": [
              "بَاب نَصَرَ — الْمُخَاطَبَةُ من المضارع: You (f/s) call",
              "بَاب ضَرَبَ — الْمُخَاطَبُ من الأمر: Throw!",
              "بَاب نَصَرَ — الْغَائِبُ من الماضي المجهول: He was called",
              "بَاب فَتَحَ — الْمُخَاطَبُ من النهي: Do not walk!"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Review: Where the Changes Occur",
          "lines": [
            {
              "html": "The table below summarises the changes that take place in <bdi>نَاقِصٌ</bdi> verbs, <bdi>صِيْغَةٌ</bdi> by <bdi>صِيْغَةٌ</bdi> (illustrated by a <bdi>يَائِيٌّ</bdi> verb such as <bdi>رَمَى</bdi>). A blank cell means no change occurs in that form. The <bdi>اَلْأَمْرُ</bdi>/<bdi>النَّهْيُ</bdi> columns apply to the <bdi>مُخَاطَبٌ</bdi> rows, and the <bdi>اِسْمُ الْفَاعِلِ</bdi>/<bdi>اِسْمُ الْمَفْعُوْلِ</bdi> columns to the six singular/dual/plural forms.",
              "list": false
            },
            {
              "table": {
                "title": "Review of الْمُجَرَّدُ مِنَ النَّاقِصِ — summary of changes",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "قَلْبٌ",
                    "تَسْكِيْنٌ",
                    "",
                    "قَلْبٌ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "",
                    "",
                    "",
                    "",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "قَلْبٌ حَذْفٌ",
                    "تَسْكِيْنٌ حَذْفٌ",
                    "حَذْفٌ",
                    "قَلْبٌ حَذْفٌ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "قَلْبٌ حَذْفٌ",
                    "تَسْكِيْنٌ",
                    "",
                    "قَلْبٌ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "قَلْبٌ حَذْفٌ",
                    "",
                    "",
                    "",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "",
                    "",
                    "",
                    "",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ / Singular (m)",
                    "",
                    "تَسْكِيْنٌ",
                    "",
                    "قَلْبٌ",
                    "تَسْكِيْنٌ",
                    "تَسْكِيْنٌ",
                    "حَذْفٌ",
                    "قَلْبٌ"
                  ],
                  [
                    "الْمُخَاطَبَانِ / Dual (m)",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "قَلْبٌ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ / Plural (m)",
                    "",
                    "تَسْكِيْنٌ حَذْفٌ",
                    "",
                    "قَلْبٌ حَذْفٌ",
                    "تَسْكِيْنٌ حَذْفٌ",
                    "تَسْكِيْنٌ حَذْفٌ",
                    "حَذْفٌ",
                    "قَلْبٌ"
                  ],
                  [
                    "الْمُخَاطَبَةُ / Singular (f)",
                    "",
                    "تَسْكِيْنٌ حَذْفٌ",
                    "",
                    "قَلْبٌ حَذْفٌ",
                    "تَسْكِيْنٌ حَذْفٌ",
                    "تَسْكِيْنٌ حَذْفٌ",
                    "",
                    "قَلْبٌ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ / Dual (f)",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "قَلْبٌ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ / Plural (f)",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "قَلْبٌ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "",
                    "تَسْكِيْنٌ",
                    "",
                    "قَلْبٌ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "",
                    "تَسْكِيْنٌ",
                    "",
                    "قَلْبٌ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "html": "The <bdi>لَامُ الْكَلِمَةِ</bdi> at the end of <bdi>الْغَائِبُ مِنَ الْمَاضِيْ الْمَعْلُوْمُ</bdi> verbs from <bdi>بَاب نَصَرَ</bdi> is written with an <bdi>أَلِفٌ</bdi>, whilst the verbs from other <bdi>أَبْوَابٌ</bdi> are written with a <bdi>يَاءٌ</bdi> (i.e. the <bdi>أَلِفٌ</bdi> shaped like <bdi>ى</bdi>): <bdi>دَعَا</bdi> vs <bdi>سَعَى، رَمَى</bdi>.",
              "list": false
            },
            {
              "html": "Some <bdi>صِيَغٌ</bdi> have the same form even though they are different in their origins, e.g. <bdi>الْمُخَاطَبَةُ تَسْعَيْنَ</bdi> (from <bdi>تَسْعَيِيْنَ</bdi> by <bdi>تَسْكِيْنٌ</bdi> then <bdi>حَذْفٌ</bdi>) and <bdi>الْمُخَاطَبَاتُ تَسْعَيْنَ</bdi> (unchanged). These <bdi>صِيَغٌ</bdi> are highlighted in bold in the book's tables.",
              "list": false
            },
            {
              "table": {
                "title": "Review — الْمَاضِيْ across the four abwab (الْمَعْلُوْمُ and الْمَجْهُوْلُ)",
                "headers": [
                  "صِيْغَةٌ",
                  "بَاب فَتَحَ مَعْلُوْم",
                  "بَاب سَمِعَ مَعْلُوْم",
                  "بَاب ضَرَبَ مَعْلُوْم",
                  "بَاب نَصَرَ مَعْلُوْم",
                  "بَاب فَتَحَ مَجْهُوْل",
                  "بَاب سَمِعَ مَجْهُوْل",
                  "بَاب ضَرَبَ مَجْهُوْل",
                  "بَاب نَصَرَ مَجْهُوْل"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "سَعَى",
                    "رَضِيَ",
                    "رَمَى",
                    "دَعَا",
                    "سُعِيَ",
                    "رُضِيَ",
                    "رُمِيَ",
                    "دُعِيَ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "سَعَيَا",
                    "رَضِيَا",
                    "رَمَيَا",
                    "دَعَوَا",
                    "سُعِيَا",
                    "رُضِيَا",
                    "رُمِيَا",
                    "دُعِيَا"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "سَعَوْا",
                    "رَضُوْا",
                    "رَمَوْا",
                    "دَعَوْا",
                    "سُعُوْا",
                    "رُضُوْا",
                    "رُمُوْا",
                    "دُعُوْا"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "سَعَتْ",
                    "رَضِيَتْ",
                    "رَمَتْ",
                    "دَعَتْ",
                    "سُعِيَتْ",
                    "رُضِيَتْ",
                    "رُمِيَتْ",
                    "دُعِيَتْ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "سَعَتَا",
                    "رَضِيَتَا",
                    "رَمَتَا",
                    "دَعَتَا",
                    "سُعِيَتَا",
                    "رُضِيَتَا",
                    "رُمِيَتَا",
                    "دُعِيَتَا"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "سَعَيْنَ",
                    "رَضِيْنَ",
                    "رَمَيْنَ",
                    "دَعَوْنَ",
                    "سُعِيْنَ",
                    "رُضِيْنَ",
                    "رُمِيْنَ",
                    "دُعِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "سَعَيْتَ",
                    "رَضِيْتَ",
                    "رَمَيْتَ",
                    "دَعَوْتَ",
                    "سُعِيْتَ",
                    "رُضِيْتَ",
                    "رُمِيْتَ",
                    "دُعِيْتَ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "سَعَيْتُمَا",
                    "رَضِيْتُمَا",
                    "رَمَيْتُمَا",
                    "دَعَوْتُمَا",
                    "سُعِيْتُمَا",
                    "رُضِيْتُمَا",
                    "رُمِيْتُمَا",
                    "دُعِيْتُمَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "سَعَيْتُمْ",
                    "رَضِيْتُمْ",
                    "رَمَيْتُمْ",
                    "دَعَوْتُمْ",
                    "سُعِيْتُمْ",
                    "رُضِيْتُمْ",
                    "رُمِيْتُمْ",
                    "دُعِيْتُمْ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "سَعَيْتِ",
                    "رَضِيْتِ",
                    "رَمَيْتِ",
                    "دَعَوْتِ",
                    "سُعِيْتِ",
                    "رُضِيْتِ",
                    "رُمِيْتِ",
                    "دُعِيْتِ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "سَعَيْتُمَا",
                    "رَضِيْتُمَا",
                    "رَمَيْتُمَا",
                    "دَعَوْتُمَا",
                    "سُعِيْتُمَا",
                    "رُضِيْتُمَا",
                    "رُمِيْتُمَا",
                    "دُعِيْتُمَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "سَعَيْتُنَّ",
                    "رَضِيْتُنَّ",
                    "رَمَيْتُنَّ",
                    "دَعَوْتُنَّ",
                    "سُعِيْتُنَّ",
                    "رُضِيْتُنَّ",
                    "رُمِيْتُنَّ",
                    "دُعِيْتُنَّ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "سَعَيْتُ",
                    "رَضِيْتُ",
                    "رَمَيْتُ",
                    "دَعَوْتُ",
                    "سُعِيْتُ",
                    "رُضِيْتُ",
                    "رُمِيْتُ",
                    "دُعِيْتُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "سَعَيْنَا",
                    "رَضِيْنَا",
                    "رَمَيْنَا",
                    "دَعَوْنَا",
                    "سُعِيْنَا",
                    "رُضِيْنَا",
                    "رُمِيْنَا",
                    "دُعِيْنَا"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "Review — الْمُضَارِعُ across the four abwab (الْمَعْلُوْمُ and الْمَجْهُوْلُ)",
                "headers": [
                  "صِيْغَةٌ",
                  "بَاب فَتَحَ مَعْلُوْم",
                  "بَاب سَمِعَ مَعْلُوْم",
                  "بَاب ضَرَبَ مَعْلُوْم",
                  "بَاب نَصَرَ مَعْلُوْم",
                  "بَاب فَتَحَ مَجْهُوْل",
                  "بَاب سَمِعَ مَجْهُوْل",
                  "بَاب ضَرَبَ مَجْهُوْل",
                  "بَاب نَصَرَ مَجْهُوْل"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "يَسْعَى",
                    "يَرْضَى",
                    "يَرْمِيْ",
                    "يَدْعُوْ",
                    "يُسْعَى",
                    "يُرْضَى",
                    "يُرْمَى",
                    "يُدْعَى"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "يَسْعَيَانِ",
                    "يَرْضَيَانِ",
                    "يَرْمِيَانِ",
                    "يَدْعُوَانِ",
                    "يُسْعَيَانِ",
                    "يُرْضَيَانِ",
                    "يُرْمَيَانِ",
                    "يُدْعَيَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "يَسْعَوْنَ",
                    "يَرْضَوْنَ",
                    "يَرْمُوْنَ",
                    "يَدْعُوْنَ",
                    "يُسْعَوْنَ",
                    "يُرْضَوْنَ",
                    "يُرْمَوْنَ",
                    "يُدْعَوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "تَسْعَى",
                    "تَرْضَى",
                    "تَرْمِيْ",
                    "تَدْعُوْ",
                    "تُسْعَى",
                    "تُرْضَى",
                    "تُرْمَى",
                    "تُدْعَى"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "تَسْعَيَانِ",
                    "تَرْضَيَانِ",
                    "تَرْمِيَانِ",
                    "تَدْعُوَانِ",
                    "تُسْعَيَانِ",
                    "تُرْضَيَانِ",
                    "تُرْمَيَانِ",
                    "تُدْعَيَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "يَسْعَيْنَ",
                    "يَرْضَيْنَ",
                    "يَرْمِيْنَ",
                    "يَدْعُوْنَ",
                    "يُسْعَيْنَ",
                    "يُرْضَيْنَ",
                    "يُرْمَيْنَ",
                    "يُدْعَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "تَسْعَى",
                    "تَرْضَى",
                    "تَرْمِيْ",
                    "تَدْعُوْ",
                    "تُسْعَى",
                    "تُرْضَى",
                    "تُرْمَى",
                    "تُدْعَى"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَسْعَيَانِ",
                    "تَرْضَيَانِ",
                    "تَرْمِيَانِ",
                    "تَدْعُوَانِ",
                    "تُسْعَيَانِ",
                    "تُرْضَيَانِ",
                    "تُرْمَيَانِ",
                    "تُدْعَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَسْعَوْنَ",
                    "تَرْضَوْنَ",
                    "تَرْمُوْنَ",
                    "تَدْعُوْنَ",
                    "تُسْعَوْنَ",
                    "تُرْضَوْنَ",
                    "تُرْمَوْنَ",
                    "تُدْعَوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَسْعَيْنَ",
                    "تَرْضَيْنَ",
                    "تَرْمِيْنَ",
                    "تَدْعِيْنَ",
                    "تُسْعَيْنَ",
                    "تُرْضَيْنَ",
                    "تُرْمَيْنَ",
                    "تُدْعَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَسْعَيَانِ",
                    "تَرْضَيَانِ",
                    "تَرْمِيَانِ",
                    "تَدْعُوَانِ",
                    "تُسْعَيَانِ",
                    "تُرْضَيَانِ",
                    "تُرْمَيَانِ",
                    "تُدْعَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَسْعَيْنَ",
                    "تَرْضَيْنَ",
                    "تَرْمِيْنَ",
                    "تَدْعُوْنَ",
                    "تُسْعَيْنَ",
                    "تُرْضَيْنَ",
                    "تُرْمَيْنَ",
                    "تُدْعَيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أَسْعَى",
                    "أَرْضَى",
                    "أَرْمِيْ",
                    "أَدْعُوْ",
                    "أُسْعَى",
                    "أُرْضَى",
                    "أُرْمَى",
                    "أُدْعَى"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "نَسْعَى",
                    "نَرْضَى",
                    "نَرْمِيْ",
                    "نَدْعُوْ",
                    "نُسْعَى",
                    "نُرْضَى",
                    "نُرْمَى",
                    "نُدْعَى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "Review — اَلْأَمْرُ وَالنَّهْيُ across the four abwab",
                "headers": [
                  "صِيْغَةٌ",
                  "أَمْر فَتَحَ",
                  "أَمْر سَمِعَ",
                  "أَمْر ضَرَبَ",
                  "أَمْر نَصَرَ",
                  "نَهْي فَتَحَ",
                  "نَهْي سَمِعَ",
                  "نَهْي ضَرَبَ",
                  "نَهْي نَصَرَ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "اِسْعَ",
                    "اِرْضَ",
                    "اِرْمِ",
                    "أُدْعُ",
                    "لَا تَسْعَ",
                    "لَا تَرْضَ",
                    "لَا تَرْمِ",
                    "لَا تَدْعُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِسْعَيَا",
                    "اِرْضَيَا",
                    "اِرْمِيَا",
                    "أُدْعُوَا",
                    "لَا تَسْعَيَا",
                    "لَا تَرْضَيَا",
                    "لَا تَرْمِيَا",
                    "لَا تَدْعُوَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِسْعَوْا",
                    "اِرْضَوْا",
                    "اِرْمُوْا",
                    "أُدْعُوْا",
                    "لَا تَسْعَوْا",
                    "لَا تَرْضَوْا",
                    "لَا تَرْمُوْا",
                    "لَا تَدْعُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِسْعَيْ",
                    "اِرْضَيْ",
                    "اِرْمِيْ",
                    "أُدْعِيْ",
                    "لَا تَسْعَيْ",
                    "لَا تَرْضَيْ",
                    "لَا تَرْمِيْ",
                    "لَا تَدْعِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِسْعَيَا",
                    "اِرْضَيَا",
                    "اِرْمِيَا",
                    "أُدْعُوَا",
                    "لَا تَسْعَيَا",
                    "لَا تَرْضَيَا",
                    "لَا تَرْمِيَا",
                    "لَا تَدْعُوَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِسْعَيْنَ",
                    "اِرْضَيْنَ",
                    "اِرْمِيْنَ",
                    "أُدْعُوْنَ",
                    "لَا تَسْعَيْنَ",
                    "لَا تَرْضَيْنَ",
                    "لَا تَرْمِيْنَ",
                    "لَا تَدْعُوْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "Review — اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ across the four abwab",
                "headers": [
                  "Form",
                  "فَاعِل فَتَحَ",
                  "فَاعِل سَمِعَ",
                  "فَاعِل ضَرَبَ",
                  "فَاعِل نَصَرَ",
                  "مَفْعُوْل فَتَحَ",
                  "مَفْعُوْل سَمِعَ",
                  "مَفْعُوْل ضَرَبَ",
                  "مَفْعُوْل نَصَرَ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "سَاعٍ",
                    "رَاضٍ",
                    "رَامٍ",
                    "دَاعٍ",
                    "مَسْعِيٌّ",
                    "مَرْضِيٌّ",
                    "مَرْمِيٌّ",
                    "مَدْعُوٌّ"
                  ],
                  [
                    "Dual (m)",
                    "سَاعِيَانِ",
                    "رَاضِيَانِ",
                    "رَامِيَانِ",
                    "دَاعِيَانِ",
                    "مَسْعِيَّانِ",
                    "مَرْضِيَّانِ",
                    "مَرْمِيَّانِ",
                    "مَدْعُوَّانِ"
                  ],
                  [
                    "Plural (m)",
                    "سَاعُوْنَ",
                    "رَاضُوْنَ",
                    "رَامُوْنَ",
                    "دَاعُوْنَ",
                    "مَسْعِيُّوْنَ",
                    "مَرْضِيُّوْنَ",
                    "مَرْمِيُّوْنَ",
                    "مَدْعُوُّوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "سَاعِيَةٌ",
                    "رَاضِيَةٌ",
                    "رَامِيَةٌ",
                    "دَاعِيَةٌ",
                    "مَسْعِيَّةٌ",
                    "مَرْضِيَّةٌ",
                    "مَرْمِيَّةٌ",
                    "مَدْعُوَّةٌ"
                  ],
                  [
                    "Dual (f)",
                    "سَاعِيَتَانِ",
                    "رَاضِيَتَانِ",
                    "رَامِيَتَانِ",
                    "دَاعِيَتَانِ",
                    "مَسْعِيَّتَانِ",
                    "مَرْضِيَّتَانِ",
                    "مَرْمِيَّتَانِ",
                    "مَدْعُوَّتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "سَاعِيَاتٌ",
                    "رَاضِيَاتٌ",
                    "رَامِيَاتٌ",
                    "دَاعِيَاتٌ",
                    "مَسْعِيَّاتٌ",
                    "مَرْضِيَّاتٌ",
                    "مَرْمِيَّاتٌ",
                    "مَدْعُوَّاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "How is الْغَائِبُ of الْمَاضِيْ الْمَعْلُوْمُ written for verbs from بَاب نَصَرَ compared with the other أَبْوَابٌ?",
            "kind": "mcq",
            "options": [
              "With an أَلِفٌ (دَعَا), whilst other abwab are written with a يَاءٌ shape (سَعَى، رَمَى)",
              "With a يَاءٌ (دَعَى), whilst other abwab use an أَلِفٌ",
              "With a وَاوٌ (دَعَوْ)",
              "There is no difference in writing"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Parts 1–4: الْمُجَرَّدُ مِنَ النَّاقِصِ",
        "rows": [
          {
            "label": "النَّاقِصُ from بَاب فَتَحَ — to walk",
            "arabic": "سَعَى يَسْعَى سَعْيًا",
            "meaning": "النَّاقِصُ from بَاب فَتَحَ — to walk",
            "unlockAt": 0
          },
          {
            "label": "النَّاقِصُ from بَاب سَمِعَ — to be satisfied",
            "arabic": "رَضِيَ يَرْضَى رِضْوَانًا",
            "meaning": "النَّاقِصُ from بَاب سَمِعَ — to be satisfied",
            "unlockAt": 1
          },
          {
            "label": "النَّاقِصُ from بَاب ضَرَبَ — to throw",
            "arabic": "رَمَى يَرْمِيْ رَمْيًا",
            "meaning": "النَّاقِصُ from بَاب ضَرَبَ — to throw",
            "unlockAt": 3
          },
          {
            "label": "النَّاقِصُ from بَاب نَصَرَ — to call",
            "arabic": "دَعَا يَدْعُوْ دُعَاءً",
            "meaning": "النَّاقِصُ from بَاب نَصَرَ — to call",
            "unlockAt": 4
          },
          {
            "label": "بَاب نَصَرَ writes الْغَائِبُ الماضي with ا; other abwab with ى",
            "arabic": "دَعَا / سَعَى، رَمَى",
            "meaning": "بَاب نَصَرَ writes الْغَائِبُ الماضي with ا; other abwab with ى",
            "unlockAt": 6
          }
        ]
      },
      "quiz": [
        {
          "q": "Which is the model نَاقِصٌ verb from بَاب فَتَحَ?",
          "options": [
            "رَمَى يَرْمِيْ",
            "سَعَى يَسْعَى",
            "دَعَا يَدْعُوْ",
            "رَضِيَ يَرْضَى"
          ],
          "correct": 1,
          "explanation": "سَعَى يَسْعَى سَعْيًا is from بَاب فَتَحَ. رَضِيَ يَرْضَى is from سَمِعَ, رَمَى يَرْمِيْ from ضَرَبَ, and دَعَا يَدْعُوْ from نَصَرَ."
        },
        {
          "q": "What is the singular اِسْمُ الْفَاعِلِ of سَعَى?",
          "options": [
            "سَاعِيٌ",
            "سَاعٍ",
            "مَسْعِيٌّ",
            "سَاعَى"
          ],
          "correct": 1,
          "explanation": "The يَاءٌ of سَاعِيٌ is dropped, leaving سَاعٍ with تَنْوِيْنُ كَسْرٍ. مَسْعِيٌّ is the اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "q": "How is الْغَائِبُ of الْمَاضِيْ الْمَعْلُوْمُ written for verbs from بَاب نَصَرَ compared with the other أَبْوَابٌ?",
          "options": [
            "With an أَلِفٌ (دَعَا), whilst other abwab are written with a يَاءٌ shape (سَعَى، رَمَى)",
            "With a يَاءٌ (دَعَى), whilst other abwab use an أَلِفٌ",
            "With a وَاوٌ (دَعَوْ)",
            "There is no difference in writing"
          ],
          "correct": 0,
          "explanation": "The لَامُ الْكَلِمَةِ of بَاب نَصَرَ verbs is written with an upright أَلِفٌ (دَعَا); verbs from other abwab are written with the ى shape (سَعَى، رَمَى)."
        },
        {
          "q": "'You (f/s) call' from دَعَا is…",
          "options": [
            "تَدْعُوْنَ",
            "تَدْعِيْنَ",
            "تُدْعَيْنَ",
            "تَدْعُوْ"
          ],
          "correct": 1,
          "explanation": "الْمُخَاطَبَةُ of the مضارع معلوم is تَدْعِيْنَ. تَدْعُوْنَ is You (m/p or f/p), and تُدْعَيْنَ is passive ('you are called')."
        },
        {
          "q": "The أَمْرٌ (m/s) of رَمَى is…",
          "options": [
            "اِرْمِ",
            "اِرْمِيْ",
            "لَا تَرْمِ",
            "اِرْمُوْا"
          ],
          "correct": 0,
          "explanation": "The final weak letter is dropped: اِرْمِ 'Throw!'. اِرْمِيْ is the feminine singular, and لَا تَرْمِ is the نَهْيٌ."
        },
        {
          "q": "Which two صِيَغٌ of يَسْعَى share the form تَسْعَيْنَ despite different origins?",
          "options": [
            "الْمُخَاطَبَةُ and الْمُخَاطَبَاتُ",
            "الْغَائِبَةُ and الْغَائِبَاتُ",
            "الْمُخَاطَبُ and الْمُخَاطَبَةُ",
            "الْغَائِبُوْنَ and الْمُخَاطَبُوْنَ"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَةُ تَسْعَيْنَ comes from تَسْعَيِيْنَ (تَسْكِيْنٌ + حَذْفٌ), while الْمُخَاطَبَاتُ تَسْعَيْنَ is unchanged — the two coincide in form."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The الْمَاضِيْ الْمَجْهُوْلُ (He was…) of دَعَا is…",
          "options": [
            "دُعِيَ",
            "دُعَا",
            "دَعَى",
            "يُدْعَى"
          ],
          "correct": 0,
          "explanation": "دُعِوَ ← دُعِيَ: the وَاوٌ preceded by a كَسْرَةٌ becomes a يَاءٌ. يُدْعَى is the مضارع مجهول."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "رَضُوْا means…",
          "options": [
            "They (m/p) were satisfied",
            "They (m/d) were satisfied",
            "You (m/p) were satisfied",
            "They (m/p) were pleased with (passive: were approved of)"
          ],
          "correct": 0,
          "explanation": "رَضُوْا is الْغَائِبُوْنَ of the ماضي معلوم of رَضِيَ: 'They (m/p) were satisfied'. The passive is رُضُوْا."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The اِسْمُ الْمَفْعُوْلِ (singular) of دَعَا is…",
          "options": [
            "مَدْعُوٌّ",
            "دَاعٍ",
            "مَدْعِيٌّ",
            "مُدْعًى"
          ],
          "correct": 0,
          "explanation": "بَاب نَصَرَ نَاقِصٌ وَاوِيٌّ gives مَدْعُوٌّ 'one who is called/invited'. دَاعٍ is the اِسْمُ الْفَاعِلِ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "'She walked' from سَعَى is…",
          "options": [
            "سَعَتْ",
            "سَعَيَتْ",
            "سَعَتَا",
            "سَعَيْنَ"
          ],
          "correct": 0,
          "explanation": "سَعَيَتْ undergoes قَلْبٌ then حَذْفٌ: سَعَتْ. سَعَتَا is the dual and سَعَيْنَ is They (f/p)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The نَهْيُ (m/s) of سَعَى is…",
          "options": [
            "لَا تَسْعَ",
            "لَا تَسْعَى",
            "لَا تَسْعَيْ",
            "لَا تَسْعُ"
          ],
          "correct": 0,
          "explanation": "The final weak letter drops in the جَزْمٌ of the نَهْيٌ: لَا تَسْعَ. لَا تَسْعَيْ is the feminine singular."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "According to the review table of changes, which صِيْغَةٌ undergoes NO change in any of the eight columns?",
          "options": [
            "الْغَائِبَانِ",
            "الْغَائِبُ",
            "الْغَائِبُوْنَ",
            "الْمُخَاطَبَةُ"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَانِ (e.g. رَمَيَا، يَرْمِيَانِ، رُمِيَا، يُرْمَيَانِ) keeps the weak letter with its حَرَكَةٌ throughout — no تَسْكِيْنٌ, قَلْبٌ or حَذْفٌ."
        },
        {
          "title": "Book Exercise 1 (p. 200)",
          "kind": "mcq",
          "prompt": "For نَهَى يَنْهَى نَهْيًا (to prohibit), the الْمَاضِيْ الْمَجْهُوْلُ is…",
          "options": [
            "نُهِيَ",
            "نَهَى",
            "نُهَى",
            "يُنْهَى"
          ],
          "correct": 0,
          "explanation": "Like سُعِيَ from سَعَى: the passive ماضي is نُهِيَ 'he was prohibited'. يُنْهَى is the مضارع مجهول."
        },
        {
          "title": "Book Exercise 1 (p. 200)",
          "kind": "mcq",
          "prompt": "For خَشِيَ يَخْشَى خَشْيَةً (to fear), the نَهْيُ (m/s) is…",
          "options": [
            "لَا تَخْشَ",
            "لَا تَخْشَى",
            "لَا تَخْشِ",
            "لَا تَخْشُ"
          ],
          "correct": 0,
          "explanation": "خَشِيَ follows رَضِيَ (بَاب سَمِعَ): the نهي drops the weak letter, لَا تَخْشَ — like لَا تَرْضَ."
        },
        {
          "title": "Book Exercise 1 (p. 200)",
          "kind": "mcq",
          "prompt": "For هَدَى يَهْدِيْ هِدَايَةً (to guide), the singular اِسْمُ الْفَاعِلِ is…",
          "options": [
            "هَادٍ",
            "هَادِيٌ",
            "مَهْدِيٌّ",
            "هَدِيٌّ"
          ],
          "correct": 0,
          "explanation": "Like رَامٍ from رَمَى: the يَاءٌ drops with تَنْوِيْنُ كَسْرٍ, giving هَادٍ. مَهْدِيٌّ is the اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "title": "Book Exercise 1 (p. 200)",
          "kind": "mcq",
          "prompt": "For رَجَا يَرْجُوْ رَجَاءً (to hope), the أَمْرُ (m/s) is…",
          "options": [
            "أُرْجُ",
            "اِرْجِ",
            "أُرْجُوْ",
            "اِرْجَ"
          ],
          "correct": 0,
          "explanation": "رَجَا follows دَعَا (بَاب نَصَرَ): the أمر drops the final وَاوٌ, giving أُرْجُ — like أُدْعُ."
        },
        {
          "title": "Book Exercise 2 (p. 200)",
          "kind": "mcq",
          "prompt": "الْغَائِبُوْنَ of the ماضي معلوم of بَكَى يَبْكِيْ (to cry) is…",
          "options": [
            "بَكَوْا",
            "بَكُوْا",
            "بَكَيُوْا",
            "يَبْكُوْنَ"
          ],
          "correct": 0,
          "explanation": "Like رَمَوْا from رَمَى: قَلْبٌ then حَذْفٌ gives بَكَوْا 'they (m/p) cried'."
        },
        {
          "title": "Book Exercise 2 (p. 200)",
          "kind": "mcq",
          "prompt": "الْغَائِبَةُ of the ماضي معلوم of بَقِيَ يَبْقَى (to remain) is…",
          "options": [
            "بَقِيَتْ",
            "بَقَتْ",
            "بَقِتْ",
            "تَبْقَى"
          ],
          "correct": 0,
          "explanation": "Like رَضِيَتْ from رَضِيَ: verbs of بَاب سَمِعَ keep their يَاءٌ in الْغَائِبَةُ — بَقِيَتْ."
        },
        {
          "title": "Book Exercise 2 (p. 200)",
          "kind": "mcq",
          "prompt": "الْغَائِبُوْنَ of the مضارع معلوم of عَدَا يَعْدُوْ (to transgress) is…",
          "options": [
            "يَعْدُوْنَ",
            "يَعْدِيْنَ",
            "يَعْدَوْنَ",
            "يَعْدُوَانِ"
          ],
          "correct": 0,
          "explanation": "Like يَدْعُوْنَ from يَدْعُوْ: تَسْكِيْنٌ then حَذْفٌ gives يَعْدُوْنَ."
        },
        {
          "title": "Book Exercise 2 (p. 200)",
          "kind": "mcq",
          "prompt": "الْمُخَاطَبَةُ of the مضارع معلوم of بَنَى يَبْنِيْ (to build) is…",
          "options": [
            "تَبْنِيْنَ",
            "تَبْنُوْنَ",
            "تَبْنَيْنَ",
            "تَبْنِيَانِ"
          ],
          "correct": 0,
          "explanation": "Like تَرْمِيْنَ from يَرْمِيْ: تَسْكِيْنٌ then حَذْفٌ gives تَبْنِيْنَ."
        },
        {
          "title": "Book Exercise 3 (p. 201)",
          "kind": "mcq",
          "prompt": "The verb عَادَ (root ع و د) is which type of weak verb?",
          "options": [
            "أَجْوَفُ",
            "نَاقِصٌ",
            "مِثَالٌ",
            "مُضَاعَفٌ"
          ],
          "correct": 0,
          "explanation": "The weak letter is the second root letter (عَيْنُ الْكَلِمَةِ), so عَادَ يَعُوْدُ is أَجْوَفُ."
        },
        {
          "title": "Book Exercise 3 (p. 201)",
          "kind": "mcq",
          "prompt": "The verb دَعَا (root د ع و) is which type of weak verb?",
          "options": [
            "نَاقِصٌ",
            "مِثَالٌ",
            "أَجْوَفُ",
            "مَهْمُوْزٌ"
          ],
          "correct": 0,
          "explanation": "The weak letter is the third root letter (لَامُ الْكَلِمَةِ), so دَعَا is نَاقِصٌ (specifically وَاوِيٌّ)."
        },
        {
          "title": "Book Exercise 3 (p. 201)",
          "kind": "mcq",
          "prompt": "The verb وَعَدَ (root و ع د) is which type of weak verb?",
          "options": [
            "مِثَالٌ",
            "نَاقِصٌ",
            "أَجْوَفُ",
            "لَفِيْفٌ"
          ],
          "correct": 0,
          "explanation": "The weak letter is the first root letter (فَاءُ الْكَلِمَةِ), so وَعَدَ يَعِدُ is مِثَالٌ."
        },
        {
          "title": "Book Exercise 3 (p. 201)",
          "kind": "mcq",
          "prompt": "مَدْعُوٌّ comes from which root, and which type of verb is it?",
          "options": [
            "د ع و — نَاقِصٌ",
            "و ع د — مِثَالٌ",
            "ع و د — أَجْوَفُ",
            "د ع ي — أَجْوَفُ"
          ],
          "correct": 0,
          "explanation": "مَدْعُوٌّ is the اِسْمُ الْمَفْعُوْلِ of دَعَا يَدْعُوْ, root د ع و — a نَاقِصٌ verb. Compare مَوْعُوْدٌ (و ع د، مِثَالٌ) and مَعُوْدٌ (ع و د، أَجْوَفُ)."
        },
        {
          "title": "Book Exercise 4 (p. 201)",
          "kind": "mcq",
          "prompt": "Using the مَصْدَرٌ دُعَاءً, form الْمُخَاطَبُ مِنَ الْمَاضِيْ الْمَعْلُوْمِ.",
          "options": [
            "دَعَوْتَ",
            "دَعَيْتَ",
            "دَعَوْتُ",
            "دُعِيْتَ"
          ],
          "correct": 0,
          "explanation": "دَعَا is نَاقِصٌ وَاوِيٌّ, so the وَاوٌ appears: دَعَوْتَ 'You (m/s) called'. دَعَوْتُ is 'I called' and دُعِيْتَ is passive."
        },
        {
          "title": "Book Exercise 4 (p. 201)",
          "kind": "mcq",
          "prompt": "Using the مَصْدَرٌ عَوْدًا (to return), form الْمُتَكَلِّمُ مِنَ الْمَاضِيْ الْمَعْلُوْمِ.",
          "options": [
            "عُدْتُ",
            "عَادَتْ",
            "عَدَوْتُ",
            "عُدْتَ"
          ],
          "correct": 0,
          "explanation": "عَادَ يَعُوْدُ is أَجْوَفُ; before the pronoun تُ the أَلِفٌ drops and a ضَمَّةٌ marks the وَاوٌ origin: عُدْتُ 'I returned'."
        },
        {
          "title": "Book Exercise 4 (p. 201)",
          "kind": "mcq",
          "prompt": "Using the مَصْدَرٌ رَمْيًا, form الْجَمْعُ (m) مِنِ اسْمِ الْفَاعِلِ.",
          "options": [
            "رَامُوْنَ",
            "رَامِيُوْنَ",
            "مَرْمِيُّوْنَ",
            "رَامِيَاتٌ"
          ],
          "correct": 0,
          "explanation": "The يَاءٌ drops in the masculine plural of the اِسْمُ الْفَاعِلِ of نَاقِصٌ verbs: رَامُوْنَ."
        },
        {
          "title": "Book Exercise 4 (p. 201)",
          "kind": "mcq",
          "prompt": "Using the مَصْدَرٌ خَوْفًا (to fear, خَافَ يَخَافُ), form الْمُخَاطَبُ مِنَ الْأَمْرِ.",
          "options": [
            "خَفْ",
            "اِخْشَ",
            "خَافْ",
            "خِفْ"
          ],
          "correct": 0,
          "explanation": "خَافَ is أَجْوَفُ: the weak middle letter drops in the أمر, giving خَفْ 'Fear!'. (The exercise mixes أَجْوَفُ, مِثَالٌ and نَاقِصٌ verbs for revision.)"
        },
        {
          "title": "to prohibit",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to prohibit\"?",
          "options": [
            "نَهَى يَنْهَى",
            "رَعَى يَرْعَى",
            "سَعَى يَسْعَى",
            "طَغَى يَطْغَى"
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
            "to protect",
            "to walk",
            "to exceed proper bounds"
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
            "رِعَايَةً",
            "سَعْيًا",
            "طُغْيَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to protect",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to protect\"?",
          "options": [
            "رَعَى يَرْعَى",
            "سَعَى يَسْعَى",
            "طَغَى يَطْغَى",
            "نَسِيَ يَنْسَى"
          ],
          "correct": 0
        },
        {
          "title": "to protect",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَعَى يَرْعَى mean?",
          "options": [
            "to protect",
            "to walk",
            "to exceed proper bounds",
            "to forget"
          ],
          "correct": 0
        },
        {
          "title": "to protect (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَعَى يَرْعَى?",
          "options": [
            "رِعَايَةً",
            "سَعْيًا",
            "طُغْيَانًا",
            "نِسْيَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to walk",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to walk\"?",
          "options": [
            "سَعَى يَسْعَى",
            "طَغَى يَطْغَى",
            "نَسِيَ يَنْسَى",
            "لَقِيَ يَلْقَى"
          ],
          "correct": 0
        },
        {
          "title": "to walk",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَعَى يَسْعَى mean?",
          "options": [
            "to walk",
            "to exceed proper bounds",
            "to forget",
            "to meet"
          ],
          "correct": 0
        },
        {
          "title": "to walk (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَعَى يَسْعَى?",
          "options": [
            "سَعْيًا",
            "طُغْيَانًا",
            "نِسْيَانًا",
            "لِقَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to exceed proper bounds",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to exceed proper bounds\"?",
          "options": [
            "طَغَى يَطْغَى",
            "نَسِيَ يَنْسَى",
            "لَقِيَ يَلْقَى",
            "رَضِيَ يَرْضَى"
          ],
          "correct": 0
        },
        {
          "title": "to exceed proper bounds",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَغَى يَطْغَى mean?",
          "options": [
            "to exceed proper bounds",
            "to forget",
            "to meet",
            "to be satisfied"
          ],
          "correct": 0
        },
        {
          "title": "to exceed proper bounds (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of طَغَى يَطْغَى?",
          "options": [
            "طُغْيَانًا",
            "نِسْيَانًا",
            "لِقَاءً",
            "رِضْوَانًا"
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
            "لَقِيَ يَلْقَى",
            "رَضِيَ يَرْضَى",
            "خَشِيَ يَخْشَى"
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
            "to meet",
            "to be satisfied",
            "to fear"
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
            "لِقَاءً",
            "رِضْوَانًا",
            "خَشْيَةً"
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
            "رَضِيَ يَرْضَى",
            "خَشِيَ يَخْشَى",
            "مَشَى يَمْشِيْ"
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
            "to be satisfied",
            "to fear",
            "to walk"
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
            "رِضْوَانًا",
            "خَشْيَةً",
            "مَشْيًا"
          ],
          "correct": 0
        },
        {
          "title": "to be satisfied",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be satisfied\"?",
          "options": [
            "رَضِيَ يَرْضَى",
            "خَشِيَ يَخْشَى",
            "مَشَى يَمْشِيْ",
            "هَدَى يَهْدِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to be satisfied",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَضِيَ يَرْضَى mean?",
          "options": [
            "to be satisfied",
            "to fear",
            "to walk",
            "to guide"
          ],
          "correct": 0
        },
        {
          "title": "to be satisfied (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَضِيَ يَرْضَى?",
          "options": [
            "رِضْوَانًا",
            "خَشْيَةً",
            "مَشْيًا",
            "هِدَايَةً"
          ],
          "correct": 0
        },
        {
          "title": "to fear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fear\"?",
          "options": [
            "خَشِيَ يَخْشَى",
            "مَشَى يَمْشِيْ",
            "هَدَى يَهْدِيْ",
            "جَرَى يَجْرِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to fear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَشِيَ يَخْشَى mean?",
          "options": [
            "to fear",
            "to walk",
            "to guide",
            "to run, flow"
          ],
          "correct": 0
        },
        {
          "title": "to fear (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَشِيَ يَخْشَى?",
          "options": [
            "خَشْيَةً",
            "مَشْيًا",
            "هِدَايَةً",
            "جَرْيًا"
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
            "هَدَى يَهْدِيْ",
            "جَرَى يَجْرِيْ",
            "رَمَى يَرْمِيْ"
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
            "to guide",
            "to run, flow",
            "to throw"
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
            "هِدَايَةً",
            "جَرْيًا",
            "رَمْيًا"
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
            "جَرَى يَجْرِيْ",
            "رَمَى يَرْمِيْ",
            "رَجَا يَرْجُوْ"
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
            "to run, flow",
            "to throw",
            "to hope"
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
            "جَرْيًا",
            "رَمْيًا",
            "رَجَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to run, flow",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to run, flow\"?",
          "options": [
            "جَرَى يَجْرِيْ",
            "رَمَى يَرْمِيْ",
            "رَجَا يَرْجُوْ",
            "عَفَا يَعْفُوْ"
          ],
          "correct": 0
        },
        {
          "title": "to run, flow",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَرَى يَجْرِيْ mean?",
          "options": [
            "to run, flow",
            "to throw",
            "to hope",
            "to wipe out"
          ],
          "correct": 0
        },
        {
          "title": "to run, flow (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَرَى يَجْرِيْ?",
          "options": [
            "جَرْيًا",
            "رَمْيًا",
            "رَجَاءً",
            "عَفْوًا"
          ],
          "correct": 0
        },
        {
          "title": "to throw",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to throw\"?",
          "options": [
            "رَمَى يَرْمِيْ",
            "رَجَا يَرْجُوْ",
            "عَفَا يَعْفُوْ",
            "تَلَا يَتْلُوْ"
          ],
          "correct": 0
        },
        {
          "title": "to throw",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَمَى يَرْمِيْ mean?",
          "options": [
            "to throw",
            "to hope",
            "to wipe out",
            "to read"
          ],
          "correct": 0
        },
        {
          "title": "to throw (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَمَى يَرْمِيْ?",
          "options": [
            "رَمْيًا",
            "رَجَاءً",
            "عَفْوًا",
            "تِلَاوَةً"
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
            "عَفَا يَعْفُوْ",
            "تَلَا يَتْلُوْ",
            "دَعَا يَدْعُوْ"
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
            "to wipe out",
            "to read",
            "to call"
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
            "عَفْوًا",
            "تِلَاوَةً",
            "دُعَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to wipe out",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to wipe out\"?",
          "options": [
            "عَفَا يَعْفُوْ",
            "تَلَا يَتْلُوْ",
            "دَعَا يَدْعُوْ",
            "نَهَى يَنْهَى"
          ],
          "correct": 0
        },
        {
          "title": "to wipe out",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَفَا يَعْفُوْ mean?",
          "options": [
            "to wipe out",
            "to read",
            "to call",
            "to prohibit"
          ],
          "correct": 0
        },
        {
          "title": "to wipe out (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَفَا يَعْفُوْ?",
          "options": [
            "عَفْوًا",
            "تِلَاوَةً",
            "دُعَاءً",
            "نَهْيًا"
          ],
          "correct": 0
        },
        {
          "title": "to read",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to read\"?",
          "options": [
            "تَلَا يَتْلُوْ",
            "دَعَا يَدْعُوْ",
            "نَهَى يَنْهَى",
            "رَعَى يَرْعَى"
          ],
          "correct": 0
        },
        {
          "title": "to read",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَلَا يَتْلُوْ mean?",
          "options": [
            "to read",
            "to call",
            "to prohibit",
            "to protect"
          ],
          "correct": 0
        },
        {
          "title": "to read (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَلَا يَتْلُوْ?",
          "options": [
            "تِلَاوَةً",
            "دُعَاءً",
            "نَهْيًا",
            "رِعَايَةً"
          ],
          "correct": 0
        },
        {
          "title": "to call",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to call\"?",
          "options": [
            "دَعَا يَدْعُوْ",
            "نَهَى يَنْهَى",
            "رَعَى يَرْعَى",
            "سَعَى يَسْعَى"
          ],
          "correct": 0
        },
        {
          "title": "to call",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَعَا يَدْعُوْ mean?",
          "options": [
            "to call",
            "to prohibit",
            "to protect",
            "to walk"
          ],
          "correct": 0
        },
        {
          "title": "to call (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of دَعَا يَدْعُوْ?",
          "options": [
            "دُعَاءً",
            "نَهْيًا",
            "رِعَايَةً",
            "سَعْيًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l3",
      "title": "الْمَزِيْدُ فِيْهِ",
      "subtitle": "النَّاقِصُ from the مَزِيْدٌ فِيْهِ أَبْوَاب (II, III, IV, V, VI, VII, VIII, X)",
      "concepts": [
        {
          "heading": "Part 5: النَّاقِصُ from بَاب تَفْعِيْل (II)",
          "lines": [
            {
              "html": "The model <bdi>نَاقِصٌ</bdi> verb from <bdi>بَاب تَفْعِيْل</bdi> is <bdi>صَلَّى يُصَلِّيْ تَصْلِيَةً</bdi> (to perform salah).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — صَلَّى (II)",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "صَلَّى",
                    "يُصَلِّيْ",
                    "تَصْلِيَةً",
                    "صُلِّيَ",
                    "يُصَلَّى",
                    "تَصْلِيَةً",
                    "صَلِّ",
                    "لَا تُصَلِّ",
                    "مُصَلٍّ",
                    "مُصَلًّى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — صَلَّى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "صَلَّى",
                    "يُصَلِّيْ",
                    "صُلِّيَ",
                    "يُصَلَّى"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "صَلَّيَا",
                    "يُصَلِّيَانِ",
                    "صُلِّيَا",
                    "يُصَلَّيَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "صَلَّوْا",
                    "يُصَلُّوْنَ",
                    "صُلُّوْا",
                    "يُصَلَّوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "صَلَّتْ",
                    "تُصَلِّيْ",
                    "صُلِّيَتْ",
                    "تُصَلَّى"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "صَلَّتَا",
                    "تُصَلِّيَانِ",
                    "صُلِّيَتَا",
                    "تُصَلَّيَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "صَلَّيْنَ",
                    "يُصَلِّيْنَ",
                    "صُلِّيْنَ",
                    "يُصَلَّيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "صَلَّيْتَ",
                    "تُصَلِّيْ",
                    "صُلِّيْتَ",
                    "تُصَلَّى"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "صَلَّيْتُمَا",
                    "تُصَلِّيَانِ",
                    "صُلِّيْتُمَا",
                    "تُصَلَّيَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "صَلَّيْتُمْ",
                    "تُصَلُّوْنَ",
                    "صُلِّيْتُمْ",
                    "تُصَلَّوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "صَلَّيْتِ",
                    "تُصَلِّيْنَ",
                    "صُلِّيْتِ",
                    "تُصَلَّيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "صَلَّيْتُمَا",
                    "تُصَلِّيَانِ",
                    "صُلِّيْتُمَا",
                    "تُصَلَّيَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "صَلَّيْتُنَّ",
                    "تُصَلِّيْنَ",
                    "صُلِّيْتُنَّ",
                    "تُصَلَّيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "صَلَّيْتُ",
                    "أُصَلِّيْ",
                    "صُلِّيْتُ",
                    "أُصَلَّى"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "صَلَّيْنَا",
                    "نُصَلِّيْ",
                    "صُلِّيْنَا",
                    "نُصَلَّى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اَلْأَمْرُ وَالنَّهْيُ — صَلَّى",
                "headers": [
                  "صِيْغَةٌ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "صَلِّ",
                    "لَا تُصَلِّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "صَلِّيَا",
                    "لَا تُصَلِّيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "صَلُّوْا",
                    "لَا تُصَلُّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "صَلِّيْ",
                    "لَا تُصَلِّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "صَلِّيَا",
                    "لَا تُصَلِّيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "صَلِّيْنَ",
                    "لَا تُصَلِّيْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — صَلَّى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُصَلٍّ",
                    "مُصَلًّى"
                  ],
                  [
                    "Dual (m)",
                    "مُصَلِّيَانِ",
                    "مُصَلَّيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُصَلُّوْنَ",
                    "مُصَلَّوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُصَلِّيَةٌ",
                    "مُصَلَّاةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُصَلِّيَتَانِ",
                    "مُصَلَّاتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُصَلِّيَاتٌ",
                    "مُصَلَّيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the correct identification of يُصَلُّوْنَ — its بَاب and صِيْغَةٌ?",
            "kind": "mcq",
            "options": [
              "تَفْعِيْل (II) — الْغَائِبُوْنَ من المضارع المعلوم: They (m/p) perform salah",
              "مُفَاعَلَة (III) — الْغَائِبُ من الماضي المجهول: He was called out to",
              "إِفْعَال (IV) — الْمُخَاطَبُ من الأمر: Keep!",
              "تَفَعُّل (V) — الْغَائِبُ من الماضي المجهول: It was received"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 6: النَّاقِصُ from بَاب مُفَاعَلَة (III)",
          "lines": [
            {
              "html": "The model <bdi>نَاقِصٌ</bdi> verb from <bdi>بَاب مُفَاعَلَة</bdi> is <bdi>نَادَى يُنَادِيْ مُنَادَاةً</bdi> (to call out). Note the <bdi>مَاضِيْ مَجْهُوْلٌ</bdi>: <bdi>نُوْدِيَ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — نَادَى (III)",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "نَادَى",
                    "يُنَادِيْ",
                    "مُنَادَاةً",
                    "نُوْدِيَ",
                    "يُنَادَى",
                    "مُنَادَاةً",
                    "نَادِ",
                    "لَا تُنَادِ",
                    "مُنَادٍ",
                    "مُنَادًى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — نَادَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "نَادَى",
                    "يُنَادِيْ",
                    "نُوْدِيَ",
                    "يُنَادَى"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "نَادَيَا",
                    "يُنَادِيَانِ",
                    "نُوْدِيَا",
                    "يُنَادَيَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "نَادَوْا",
                    "يُنَادُوْنَ",
                    "نُوْدُوْا",
                    "يُنَادَوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "نَادَتْ",
                    "تُنَادِيْ",
                    "نُوْدِيَتْ",
                    "تُنَادَى"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "نَادَتَا",
                    "تُنَادِيَانِ",
                    "نُوْدِيَتَا",
                    "تُنَادَيَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "نَادَيْنَ",
                    "يُنَادِيْنَ",
                    "نُوْدِيْنَ",
                    "يُنَادَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "نَادَيْتَ",
                    "تُنَادِيْ",
                    "نُوْدِيْتَ",
                    "تُنَادَى"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "نَادَيْتُمَا",
                    "تُنَادِيَانِ",
                    "نُوْدِيْتُمَا",
                    "تُنَادَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "نَادَيْتُمْ",
                    "تُنَادُوْنَ",
                    "نُوْدِيْتُمْ",
                    "تُنَادَوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "نَادَيْتِ",
                    "تُنَادِيْنَ",
                    "نُوْدِيْتِ",
                    "تُنَادَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "نَادَيْتُمَا",
                    "تُنَادِيَانِ",
                    "نُوْدِيْتُمَا",
                    "تُنَادَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "نَادَيْتُنَّ",
                    "تُنَادِيْنَ",
                    "نُوْدِيْتُنَّ",
                    "تُنَادَيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "نَادَيْتُ",
                    "أُنَادِيْ",
                    "نُوْدِيْتُ",
                    "أُنَادَى"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "نَادَيْنَا",
                    "نُنَادِيْ",
                    "نُوْدِيْنَا",
                    "نُنَادَى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اَلْأَمْرُ وَالنَّهْيُ — نَادَى",
                "headers": [
                  "صِيْغَةٌ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "نَادِ",
                    "لَا تُنَادِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "نَادِيَا",
                    "لَا تُنَادِيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "نَادُوْا",
                    "لَا تُنَادُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "نَادِيْ",
                    "لَا تُنَادِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "نَادِيَا",
                    "لَا تُنَادِيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "نَادِيْنَ",
                    "لَا تُنَادِيْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — نَادَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُنَادٍ",
                    "مُنَادًى"
                  ],
                  [
                    "Dual (m)",
                    "مُنَادِيَانِ",
                    "مُنَادَيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُنَادُوْنَ",
                    "مُنَادَوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُنَادِيَةٌ",
                    "مُنَادَاةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُنَادِيَتَانِ",
                    "مُنَادَاتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُنَادِيَاتٌ",
                    "مُنَادَيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the correct identification of نُوْدِيَ — its بَاب and صِيْغَةٌ?",
            "kind": "mcq",
            "options": [
              "مُفَاعَلَة (III) — الْغَائِبُ من الماضي المجهول: He was called out to",
              "إِفْعَال (IV) — الْمُخَاطَبُ من الأمر: Keep!",
              "تَفَعُّل (V) — الْغَائِبُ من الماضي المجهول: It was received",
              "تَفَاعُل (VI) — الْمُتَكَلِّمُ من المضارع المعلوم: I come together"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 7: النَّاقِصُ from بَاب إِفْعَال (IV)",
          "lines": [
            {
              "html": "The model <bdi>نَاقِصٌ</bdi> verb from <bdi>بَاب إِفْعَال</bdi> is <bdi>أَبْقَى يُبْقِيْ إِبْقَاءً</bdi> (to keep). Note the <bdi>مَصْدَرٌ</bdi>, where the <bdi>يَاءٌ</bdi> has become a <bdi>هَمْزَةٌ</bdi> (<bdi>إِبْقَايًا ← إِبْقَاءً</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — أَبْقَى (IV)",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "أَبْقَى",
                    "يُبْقِيْ",
                    "إِبْقَاءً",
                    "أُبْقِيَ",
                    "يُبْقَى",
                    "إِبْقَاءً",
                    "أَبْقِ",
                    "لَا تُبْقِ",
                    "مُبْقٍ",
                    "مُبْقًى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — أَبْقَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "أَبْقَى",
                    "يُبْقِيْ",
                    "أُبْقِيَ",
                    "يُبْقَى"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "أَبْقَيَا",
                    "يُبْقِيَانِ",
                    "أُبْقِيَا",
                    "يُبْقَيَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "أَبْقَوْا",
                    "يُبْقُوْنَ",
                    "أُبْقُوْا",
                    "يُبْقَوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "أَبْقَتْ",
                    "تُبْقِيْ",
                    "أُبْقِيَتْ",
                    "تُبْقَى"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "أَبْقَتَا",
                    "تُبْقِيَانِ",
                    "أُبْقِيَتَا",
                    "تُبْقَيَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "أَبْقَيْنَ",
                    "يُبْقِيْنَ",
                    "أُبْقِيْنَ",
                    "يُبْقَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "أَبْقَيْتَ",
                    "تُبْقِيْ",
                    "أُبْقِيْتَ",
                    "تُبْقَى"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "أَبْقَيْتُمَا",
                    "تُبْقِيَانِ",
                    "أُبْقِيْتُمَا",
                    "تُبْقَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "أَبْقَيْتُمْ",
                    "تُبْقُوْنَ",
                    "أُبْقِيْتُمْ",
                    "تُبْقَوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "أَبْقَيْتِ",
                    "تُبْقِيْنَ",
                    "أُبْقِيْتِ",
                    "تُبْقَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "أَبْقَيْتُمَا",
                    "تُبْقِيَانِ",
                    "أُبْقِيْتُمَا",
                    "تُبْقَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "أَبْقَيْتُنَّ",
                    "تُبْقِيْنَ",
                    "أُبْقِيْتُنَّ",
                    "تُبْقَيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أَبْقَيْتُ",
                    "أُبْقِيْ",
                    "أُبْقِيْتُ",
                    "أُبْقَى"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "أَبْقَيْنَا",
                    "نُبْقِيْ",
                    "أُبْقِيْنَا",
                    "نُبْقَى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اَلْأَمْرُ وَالنَّهْيُ — أَبْقَى",
                "headers": [
                  "صِيْغَةٌ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "أَبْقِ",
                    "لَا تُبْقِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "أَبْقِيَا",
                    "لَا تُبْقِيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "أَبْقُوْا",
                    "لَا تُبْقُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "أَبْقِيْ",
                    "لَا تُبْقِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "أَبْقِيَا",
                    "لَا تُبْقِيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "أَبْقِيْنَ",
                    "لَا تُبْقِيْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — أَبْقَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُبْقٍ",
                    "مُبْقًى"
                  ],
                  [
                    "Dual (m)",
                    "مُبْقِيَانِ",
                    "مُبْقَيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُبْقُوْنَ",
                    "مُبْقَوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُبْقِيَةٌ",
                    "مُبْقَاةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُبْقِيَتَانِ",
                    "مُبْقَاتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُبْقِيَاتٌ",
                    "مُبْقَيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the correct identification of أَبْقِ — its بَاب and صِيْغَةٌ?",
            "kind": "mcq",
            "options": [
              "إِفْعَال (IV) — الْمُخَاطَبُ من الأمر: Keep!",
              "تَفَعُّل (V) — الْغَائِبُ من الماضي المجهول: It was received",
              "تَفَاعُل (VI) — الْمُتَكَلِّمُ من المضارع المعلوم: I come together",
              "اِنْفِعَال (VII) — الْغَائِبَةُ من الماضي المعلوم: It (she) came to an end"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 8: النَّاقِصُ from بَاب تَفَعُّل (V)",
          "lines": [
            {
              "html": "The model <bdi>نَاقِصٌ</bdi> verb from <bdi>بَاب تَفَعُّل</bdi> is <bdi>تَلَقَّى يَتَلَقَّى تَلَقِّيًا</bdi> (to receive). Note the <bdi>مَاضِيْ مَجْهُوْلٌ</bdi>: <bdi>تُلُقِّيَ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — تَلَقَّى (V)",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "تَلَقَّى",
                    "يَتَلَقَّى",
                    "تَلَقِّيًا",
                    "تُلُقِّيَ",
                    "يُتَلَقَّى",
                    "تَلَقِّيًا",
                    "تَلَقَّ",
                    "لَا تَتَلَقَّ",
                    "مُتَلَقٍّ",
                    "مُتَلَقًّى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — تَلَقَّى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "تَلَقَّى",
                    "يَتَلَقَّى",
                    "تُلُقِّيَ",
                    "يُتَلَقَّى"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "تَلَقَّيَا",
                    "يَتَلَقَّيَانِ",
                    "تُلُقِّيَا",
                    "يُتَلَقَّيَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "تَلَقَّوْا",
                    "يَتَلَقَّوْنَ",
                    "تُلُقُّوْا",
                    "يُتَلَقَّوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "تَلَقَّتْ",
                    "تَتَلَقَّى",
                    "تُلُقِّيَتْ",
                    "تُتَلَقَّى"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "تَلَقَّتَا",
                    "تَتَلَقَّيَانِ",
                    "تُلُقِّيَتَا",
                    "تُتَلَقَّيَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "تَلَقَّيْنَ",
                    "يَتَلَقَّيْنَ",
                    "تُلُقِّيْنَ",
                    "يُتَلَقَّيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "تَلَقَّيْتَ",
                    "تَتَلَقَّى",
                    "تُلُقِّيْتَ",
                    "تُتَلَقَّى"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَلَقَّيْتُمَا",
                    "تَتَلَقَّيَانِ",
                    "تُلُقِّيْتُمَا",
                    "تُتَلَقَّيَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَلَقَّيْتُمْ",
                    "تَتَلَقَّوْنَ",
                    "تُلُقِّيْتُمْ",
                    "تُتَلَقَّوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَلَقَّيْتِ",
                    "تَتَلَقَّيْنَ",
                    "تُلُقِّيْتِ",
                    "تُتَلَقَّيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَلَقَّيْتُمَا",
                    "تَتَلَقَّيَانِ",
                    "تُلُقِّيْتُمَا",
                    "تُتَلَقَّيَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَلَقَّيْتُنَّ",
                    "تَتَلَقَّيْنَ",
                    "تُلُقِّيْتُنَّ",
                    "تُتَلَقَّيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "تَلَقَّيْتُ",
                    "أَتَلَقَّى",
                    "تُلُقِّيْتُ",
                    "أُتَلَقَّى"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "تَلَقَّيْنَا",
                    "نَتَلَقَّى",
                    "تُلُقِّيْنَا",
                    "نُتَلَقَّى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اَلْأَمْرُ وَالنَّهْيُ — تَلَقَّى",
                "headers": [
                  "صِيْغَةٌ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "تَلَقَّ",
                    "لَا تَتَلَقَّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَلَقَّيَا",
                    "لَا تَتَلَقَّيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَلَقَّوْا",
                    "لَا تَتَلَقَّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَلَقَّيْ",
                    "لَا تَتَلَقَّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَلَقَّيَا",
                    "لَا تَتَلَقَّيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَلَقَّيْنَ",
                    "لَا تَتَلَقَّيْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — تَلَقَّى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُتَلَقٍّ",
                    "مُتَلَقًّى"
                  ],
                  [
                    "Dual (m)",
                    "مُتَلَقِّيَانِ",
                    "مُتَلَقَّيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُتَلَقُّوْنَ",
                    "مُتَلَقَّوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُتَلَقِّيَةٌ",
                    "مُتَلَقَّاةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُتَلَقِّيَتَانِ",
                    "مُتَلَقَّاتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُتَلَقِّيَاتٌ",
                    "مُتَلَقَّيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the correct identification of تُلُقِّيَ — its بَاب and صِيْغَةٌ?",
            "kind": "mcq",
            "options": [
              "تَفَعُّل (V) — الْغَائِبُ من الماضي المجهول: It was received",
              "تَفَاعُل (VI) — الْمُتَكَلِّمُ من المضارع المعلوم: I come together",
              "اِنْفِعَال (VII) — الْغَائِبَةُ من الماضي المعلوم: It (she) came to an end",
              "اِفْتِعَال (VIII) — الْغَائِبُ من المضارع المجهول: He is put to the test"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 9: النَّاقِصُ from بَاب تَفَاعُل (VI)",
          "lines": [
            {
              "html": "The model <bdi>نَاقِصٌ</bdi> verb from <bdi>بَاب تَفَاعُل</bdi> is <bdi>تَلَاقَى يَتَلَاقَى تَلَاقِيًا</bdi> (to come/get together). Note the <bdi>مَاضِيْ مَجْهُوْلٌ</bdi>: <bdi>تُلُوْقِيَ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — تَلَاقَى (VI)",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "تَلَاقَى",
                    "يَتَلَاقَى",
                    "تَلَاقِيًا",
                    "تُلُوْقِيَ",
                    "يُتَلَاقَى",
                    "تَلَاقِيًا",
                    "تَلَاقَ",
                    "لَا تَتَلَاقَ",
                    "مُتَلَاقٍ",
                    "مُتَلَاقًى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — تَلَاقَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "تَلَاقَى",
                    "يَتَلَاقَى",
                    "تُلُوْقِيَ",
                    "يُتَلَاقَى"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "تَلَاقَيَا",
                    "يَتَلَاقَيَانِ",
                    "تُلُوْقِيَا",
                    "يُتَلَاقَيَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "تَلَاقَوْا",
                    "يَتَلَاقَوْنَ",
                    "تُلُوْقُوْا",
                    "يُتَلَاقَوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "تَلَاقَتْ",
                    "تَتَلَاقَى",
                    "تُلُوْقِيَتْ",
                    "تُتَلَاقَى"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "تَلَاقَتَا",
                    "تَتَلَاقَيَانِ",
                    "تُلُوْقِيَتَا",
                    "تُتَلَاقَيَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "تَلَاقَيْنَ",
                    "يَتَلَاقَيْنَ",
                    "تُلُوْقِيْنَ",
                    "يُتَلَاقَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "تَلَاقَيْتَ",
                    "تَتَلَاقَى",
                    "تُلُوْقِيْتَ",
                    "تُتَلَاقَى"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَلَاقَيْتُمَا",
                    "تَتَلَاقَيَانِ",
                    "تُلُوْقِيْتُمَا",
                    "تُتَلَاقَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَلَاقَيْتُمْ",
                    "تَتَلَاقَوْنَ",
                    "تُلُوْقِيْتُمْ",
                    "تُتَلَاقَوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَلَاقَيْتِ",
                    "تَتَلَاقَيْنَ",
                    "تُلُوْقِيْتِ",
                    "تُتَلَاقَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَلَاقَيْتُمَا",
                    "تَتَلَاقَيَانِ",
                    "تُلُوْقِيْتُمَا",
                    "تُتَلَاقَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَلَاقَيْتُنَّ",
                    "تَتَلَاقَيْنَ",
                    "تُلُوْقِيْتُنَّ",
                    "تُتَلَاقَيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "تَلَاقَيْتُ",
                    "أَتَلَاقَى",
                    "تُلُوْقِيْتُ",
                    "أُتَلَاقَى"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "تَلَاقَيْنَا",
                    "نَتَلَاقَى",
                    "تُلُوْقِيْنَا",
                    "نُتَلَاقَى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اَلْأَمْرُ وَالنَّهْيُ — تَلَاقَى",
                "headers": [
                  "صِيْغَةٌ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "تَلَاقَ",
                    "لَا تَتَلَاقَ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَلَاقَيَا",
                    "لَا تَتَلَاقَيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَلَاقَوْا",
                    "لَا تَتَلَاقَوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَلَاقَيْ",
                    "لَا تَتَلَاقَيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَلَاقَيَا",
                    "لَا تَتَلَاقَيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَلَاقَيْنَ",
                    "لَا تَتَلَاقَيْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — تَلَاقَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُتَلَاقٍ",
                    "مُتَلَاقًى"
                  ],
                  [
                    "Dual (m)",
                    "مُتَلَاقِيَانِ",
                    "مُتَلَاقَيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُتَلَاقُوْنَ",
                    "مُتَلَاقَوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُتَلَاقِيَةٌ",
                    "مُتَلَاقَاةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُتَلَاقِيَتَانِ",
                    "مُتَلَاقَاتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُتَلَاقِيَاتٌ",
                    "مُتَلَاقَيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the correct identification of أَتَلَاقَى — its بَاب and صِيْغَةٌ?",
            "kind": "mcq",
            "options": [
              "تَفَاعُل (VI) — الْمُتَكَلِّمُ من المضارع المعلوم: I come together",
              "اِنْفِعَال (VII) — الْغَائِبَةُ من الماضي المعلوم: It (she) came to an end",
              "اِفْتِعَال (VIII) — الْغَائِبُ من المضارع المجهول: He is put to the test",
              "اِسْتِفْعَال (X) — اِسْمُ الْفَاعِلِ مفرد: one who rises"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 10: النَّاقِصُ from بَاب اِنْفِعَال (VII)",
          "lines": [
            {
              "html": "The model <bdi>نَاقِصٌ</bdi> verb from <bdi>بَاب اِنْفِعَال</bdi> is <bdi>اِنْقَضَى يَنْقَضِيْ اِنْقِضَاءً</bdi> (to be over/finished). Verbs of this <bdi>بَاب</bdi> are intransitive (<bdi>لَازِمٌ</bdi>), so the <bdi>مَجْهُوْلٌ</bdi> columns and the <bdi>اِسْمُ الْمَفْعُوْلِ</bdi> are left blank in the book.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِنْقَضَى (VII)",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِنْقَضَى",
                    "يَنْقَضِيْ",
                    "اِنْقِضَاءً",
                    "—",
                    "—",
                    "—",
                    "اِنْقَضِ",
                    "لَا تَنْقَضِ",
                    "مُنْقَضٍ",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِنْقَضَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِنْقَضَى",
                    "يَنْقَضِيْ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِنْقَضَيَا",
                    "يَنْقَضِيَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِنْقَضَوْا",
                    "يَنْقَضُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِنْقَضَتْ",
                    "تَنْقَضِيْ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِنْقَضَتَا",
                    "تَنْقَضِيَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِنْقَضَيْنَ",
                    "يَنْقَضِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِنْقَضَيْتَ",
                    "تَنْقَضِيْ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِنْقَضَيْتُمَا",
                    "تَنْقَضِيَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِنْقَضَيْتُمْ",
                    "تَنْقَضُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِنْقَضَيْتِ",
                    "تَنْقَضِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِنْقَضَيْتُمَا",
                    "تَنْقَضِيَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِنْقَضَيْتُنَّ",
                    "تَنْقَضِيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِنْقَضَيْتُ",
                    "أَنْقَضِيْ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِنْقَضَيْنَا",
                    "نَنْقَضِيْ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اَلْأَمْرُ وَالنَّهْيُ — اِنْقَضَى",
                "headers": [
                  "صِيْغَةٌ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "اِنْقَضِ",
                    "لَا تَنْقَضِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِنْقَضِيَا",
                    "لَا تَنْقَضِيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِنْقَضُوْا",
                    "لَا تَنْقَضُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِنْقَضِيْ",
                    "لَا تَنْقَضِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِنْقَضِيَا",
                    "لَا تَنْقَضِيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِنْقَضِيْنَ",
                    "لَا تَنْقَضِيْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ — اِنْقَضَى (no اِسْمُ الْمَفْعُوْلِ)",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُنْقَضٍ"
                  ],
                  [
                    "Dual (m)",
                    "مُنْقَضِيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُنْقَضُوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُنْقَضِيَةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُنْقَضِيَتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُنْقَضِيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the correct identification of اِنْقَضَتْ — its بَاب and صِيْغَةٌ?",
            "kind": "mcq",
            "options": [
              "اِنْفِعَال (VII) — الْغَائِبَةُ من الماضي المعلوم: It (she) came to an end",
              "اِفْتِعَال (VIII) — الْغَائِبُ من المضارع المجهول: He is put to the test",
              "اِسْتِفْعَال (X) — اِسْمُ الْفَاعِلِ مفرد: one who rises",
              "تَفْعِيْل (II) — الْغَائِبُوْنَ من المضارع المعلوم: They (m/p) perform salah"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 11: النَّاقِصُ from بَاب اِفْتِعَال (VIII)",
          "lines": [
            {
              "html": "The model <bdi>نَاقِصٌ</bdi> verb from <bdi>بَاب اِفْتِعَال</bdi> is <bdi>اِبْتَلَى يَبْتَلِيْ اِبْتِلَاءً</bdi> (to put to the test). Its root is <bdi>ب ل و</bdi>; the <bdi>وَاوٌ</bdi> changed to a <bdi>يَاءٌ</bdi>, then to an <bdi>أَلِفٌ</bdi>, and in the <bdi>مَصْدَرٌ</bdi> to a <bdi>هَمْزَةٌ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِبْتَلَى (VIII)",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِبْتَلَى",
                    "يَبْتَلِيْ",
                    "اِبْتِلَاءً",
                    "اُبْتُلِيَ",
                    "يُبْتَلَى",
                    "اِبْتِلَاءً",
                    "اِبْتَلِ",
                    "لَا تَبْتَلِ",
                    "مُبْتَلٍ",
                    "مُبْتَلًى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِبْتَلَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِبْتَلَى",
                    "يَبْتَلِيْ",
                    "اُبْتُلِيَ",
                    "يُبْتَلَى"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِبْتَلَيَا",
                    "يَبْتَلِيَانِ",
                    "اُبْتُلِيَا",
                    "يُبْتَلَيَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِبْتَلَوْا",
                    "يَبْتَلُوْنَ",
                    "اُبْتُلُوْا",
                    "يُبْتَلَوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِبْتَلَتْ",
                    "تَبْتَلِيْ",
                    "اُبْتُلِيَتْ",
                    "تُبْتَلَى"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِبْتَلَتَا",
                    "تَبْتَلِيَانِ",
                    "اُبْتُلِيَتَا",
                    "تُبْتَلَيَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِبْتَلَيْنَ",
                    "يَبْتَلِيْنَ",
                    "اُبْتُلِيْنَ",
                    "يُبْتَلَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِبْتَلَيْتَ",
                    "تَبْتَلِيْ",
                    "اُبْتُلِيْتَ",
                    "تُبْتَلَى"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِبْتَلَيْتُمَا",
                    "تَبْتَلِيَانِ",
                    "اُبْتُلِيْتُمَا",
                    "تُبْتَلَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِبْتَلَيْتُمْ",
                    "تَبْتَلُوْنَ",
                    "اُبْتُلِيْتُمْ",
                    "تُبْتَلَوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِبْتَلَيْتِ",
                    "تَبْتَلِيْنَ",
                    "اُبْتُلِيْتِ",
                    "تُبْتَلَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِبْتَلَيْتُمَا",
                    "تَبْتَلِيَانِ",
                    "اُبْتُلِيْتُمَا",
                    "تُبْتَلَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِبْتَلَيْتُنَّ",
                    "تَبْتَلِيْنَ",
                    "اُبْتُلِيْتُنَّ",
                    "تُبْتَلَيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِبْتَلَيْتُ",
                    "أَبْتَلِيْ",
                    "اُبْتُلِيْتُ",
                    "أُبْتَلَى"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِبْتَلَيْنَا",
                    "نَبْتَلِيْ",
                    "اُبْتُلِيْنَا",
                    "نُبْتَلَى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اَلْأَمْرُ وَالنَّهْيُ — اِبْتَلَى",
                "headers": [
                  "صِيْغَةٌ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "اِبْتَلِ",
                    "لَا تَبْتَلِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِبْتَلِيَا",
                    "لَا تَبْتَلِيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِبْتَلُوْا",
                    "لَا تَبْتَلُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِبْتَلِيْ",
                    "لَا تَبْتَلِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِبْتَلِيَا",
                    "لَا تَبْتَلِيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِبْتَلِيْنَ",
                    "لَا تَبْتَلِيْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — اِبْتَلَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُبْتَلٍ",
                    "مُبْتَلًى"
                  ],
                  [
                    "Dual (m)",
                    "مُبْتَلِيَانِ",
                    "مُبْتَلَيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُبْتَلُوْنَ",
                    "مُبْتَلَوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُبْتَلِيَةٌ",
                    "مُبْتَلَاةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُبْتَلِيَتَانِ",
                    "مُبْتَلَاتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُبْتَلِيَاتٌ",
                    "مُبْتَلَيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the correct identification of يُبْتَلَى — its بَاب and صِيْغَةٌ?",
            "kind": "mcq",
            "options": [
              "اِفْتِعَال (VIII) — الْغَائِبُ من المضارع المجهول: He is put to the test",
              "اِسْتِفْعَال (X) — اِسْمُ الْفَاعِلِ مفرد: one who rises",
              "تَفْعِيْل (II) — الْغَائِبُوْنَ من المضارع المعلوم: They (m/p) perform salah",
              "مُفَاعَلَة (III) — الْغَائِبُ من الماضي المجهول: He was called out to"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 12: النَّاقِصُ from بَاب اِسْتِفْعَال (X)",
          "lines": [
            {
              "html": "The model <bdi>نَاقِصٌ</bdi> verb from <bdi>بَاب اِسْتِفْعَال</bdi> is <bdi>اِسْتَعْلَى يَسْتَعْلِيْ اِسْتِعْلَاءً</bdi> (to rise).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِسْتَعْلَى (X)",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِسْتَعْلَى",
                    "يَسْتَعْلِيْ",
                    "اِسْتِعْلَاءً",
                    "اُسْتُعْلِيَ",
                    "يُسْتَعْلَى",
                    "اِسْتِعْلَاءً",
                    "اِسْتَعْلِ",
                    "لَا تَسْتَعْلِ",
                    "مُسْتَعْلٍ",
                    "مُسْتَعْلًى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِسْتَعْلَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِسْتَعْلَى",
                    "يَسْتَعْلِيْ",
                    "اُسْتُعْلِيَ",
                    "يُسْتَعْلَى"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِسْتَعْلَيَا",
                    "يَسْتَعْلِيَانِ",
                    "اُسْتُعْلِيَا",
                    "يُسْتَعْلَيَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِسْتَعْلَوْا",
                    "يَسْتَعْلُوْنَ",
                    "اُسْتُعْلُوْا",
                    "يُسْتَعْلَوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِسْتَعْلَتْ",
                    "تَسْتَعْلِيْ",
                    "اُسْتُعْلِيَتْ",
                    "تُسْتَعْلَى"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِسْتَعْلَتَا",
                    "تَسْتَعْلِيَانِ",
                    "اُسْتُعْلِيَتَا",
                    "تُسْتَعْلَيَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِسْتَعْلَيْنَ",
                    "يَسْتَعْلِيْنَ",
                    "اُسْتُعْلِيْنَ",
                    "يُسْتَعْلَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِسْتَعْلَيْتَ",
                    "تَسْتَعْلِيْ",
                    "اُسْتُعْلِيْتَ",
                    "تُسْتَعْلَى"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِسْتَعْلَيْتُمَا",
                    "تَسْتَعْلِيَانِ",
                    "اُسْتُعْلِيْتُمَا",
                    "تُسْتَعْلَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِسْتَعْلَيْتُمْ",
                    "تَسْتَعْلُوْنَ",
                    "اُسْتُعْلِيْتُمْ",
                    "تُسْتَعْلَوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِسْتَعْلَيْتِ",
                    "تَسْتَعْلِيْنَ",
                    "اُسْتُعْلِيْتِ",
                    "تُسْتَعْلَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِسْتَعْلَيْتُمَا",
                    "تَسْتَعْلِيَانِ",
                    "اُسْتُعْلِيْتُمَا",
                    "تُسْتَعْلَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِسْتَعْلَيْتُنَّ",
                    "تَسْتَعْلِيْنَ",
                    "اُسْتُعْلِيْتُنَّ",
                    "تُسْتَعْلَيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِسْتَعْلَيْتُ",
                    "أَسْتَعْلِيْ",
                    "اُسْتُعْلِيْتُ",
                    "أُسْتَعْلَى"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِسْتَعْلَيْنَا",
                    "نَسْتَعْلِيْ",
                    "اُسْتُعْلِيْنَا",
                    "نُسْتَعْلَى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اَلْأَمْرُ وَالنَّهْيُ — اِسْتَعْلَى",
                "headers": [
                  "صِيْغَةٌ",
                  "اَلْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "اِسْتَعْلِ",
                    "لَا تَسْتَعْلِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِسْتَعْلِيَا",
                    "لَا تَسْتَعْلِيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِسْتَعْلُوْا",
                    "لَا تَسْتَعْلُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِسْتَعْلِيْ",
                    "لَا تَسْتَعْلِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِسْتَعْلِيَا",
                    "لَا تَسْتَعْلِيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِسْتَعْلِيْنَ",
                    "لَا تَسْتَعْلِيْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — اِسْتَعْلَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُسْتَعْلٍ",
                    "مُسْتَعْلًى"
                  ],
                  [
                    "Dual (m)",
                    "مُسْتَعْلِيَانِ",
                    "مُسْتَعْلَيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُسْتَعْلُوْنَ",
                    "مُسْتَعْلَوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُسْتَعْلِيَةٌ",
                    "مُسْتَعْلَاةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُسْتَعْلِيَتَانِ",
                    "مُسْتَعْلَاتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُسْتَعْلِيَاتٌ",
                    "مُسْتَعْلَيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the correct identification of مُسْتَعْلٍ — its بَاب and صِيْغَةٌ?",
            "kind": "mcq",
            "options": [
              "اِسْتِفْعَال (X) — اِسْمُ الْفَاعِلِ مفرد: one who rises",
              "تَفْعِيْل (II) — الْغَائِبُوْنَ من المضارع المعلوم: They (m/p) perform salah",
              "مُفَاعَلَة (III) — الْغَائِبُ من الماضي المجهول: He was called out to",
              "إِفْعَال (IV) — الْمُخَاطَبُ من الأمر: Keep!"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Parts 5–12: الْمَزِيْدُ فِيْهِ مِنَ النَّاقِصِ",
        "rows": [
          {
            "label": "بَاب تَفْعِيْل (II) — to perform salah",
            "arabic": "صَلَّى يُصَلِّيْ تَصْلِيَةً",
            "meaning": "بَاب تَفْعِيْل (II) — to perform salah",
            "unlockAt": 0
          },
          {
            "label": "بَاب مُفَاعَلَة (III) — to call out",
            "arabic": "نَادَى يُنَادِيْ مُنَادَاةً",
            "meaning": "بَاب مُفَاعَلَة (III) — to call out",
            "unlockAt": 1
          },
          {
            "label": "بَاب إِفْعَال (IV) — to keep",
            "arabic": "أَبْقَى يُبْقِيْ إِبْقَاءً",
            "meaning": "بَاب إِفْعَال (IV) — to keep",
            "unlockAt": 2
          },
          {
            "label": "بَاب تَفَعُّل (V) — to receive",
            "arabic": "تَلَقَّى يَتَلَقَّى تَلَقِّيًا",
            "meaning": "بَاب تَفَعُّل (V) — to receive",
            "unlockAt": 3
          },
          {
            "label": "بَاب تَفَاعُل (VI) — to come/get together",
            "arabic": "تَلَاقَى يَتَلَاقَى تَلَاقِيًا",
            "meaning": "بَاب تَفَاعُل (VI) — to come/get together",
            "unlockAt": 4
          },
          {
            "label": "بَاب اِنْفِعَال (VII) — to be over/finished (no مجهول, no اسم مفعول)",
            "arabic": "اِنْقَضَى يَنْقَضِيْ اِنْقِضَاءً",
            "meaning": "بَاب اِنْفِعَال (VII) — to be over/finished (no مجهول, no اسم مفعول)",
            "unlockAt": 5
          },
          {
            "label": "بَاب اِفْتِعَال (VIII) — to put to the test",
            "arabic": "اِبْتَلَى يَبْتَلِيْ اِبْتِلَاءً",
            "meaning": "بَاب اِفْتِعَال (VIII) — to put to the test",
            "unlockAt": 6
          },
          {
            "label": "بَاب اِسْتِفْعَال (X) — to rise",
            "arabic": "اِسْتَعْلَى يَسْتَعْلِيْ اِسْتِعْلَاءً",
            "meaning": "بَاب اِسْتِفْعَال (X) — to rise",
            "unlockAt": 7
          }
        ]
      },
      "quiz": [
        {
          "q": "The model نَاقِصٌ verb from بَاب تَفْعِيْل (II) is…",
          "options": [
            "صَلَّى يُصَلِّيْ تَصْلِيَةً",
            "نَادَى يُنَادِيْ مُنَادَاةً",
            "تَلَقَّى يَتَلَقَّى تَلَقِّيًا",
            "أَبْقَى يُبْقِيْ إِبْقَاءً"
          ],
          "correct": 0,
          "explanation": "صَلَّى يُصَلِّيْ تَصْلِيَةً is بَاب تَفْعِيْل. نَادَى is III, أَبْقَى is IV, and تَلَقَّى is V."
        },
        {
          "q": "The الْمَاضِيْ الْمَجْهُوْلُ of تَلَاقَى is…",
          "options": [
            "تُلُوْقِيَ",
            "تُلُقِّيَ",
            "لُوْقِيَ",
            "تَلَاقِيَ"
          ],
          "correct": 0,
          "explanation": "The أَلِفٌ of تَفَاعَلَ becomes a وَاوٌ in the passive: تُلُوْقِيَ. تُلُقِّيَ is the passive of تَلَقَّى (V)."
        },
        {
          "q": "Which بَاب has no مَجْهُوْلٌ forms and no اِسْمُ الْمَفْعُوْلِ in the نَاقِصٌ tables?",
          "options": [
            "بَاب اِنْفِعَال (VII)",
            "بَاب اِفْتِعَال (VIII)",
            "بَاب تَفَاعُل (VI)",
            "بَاب اِسْتِفْعَال (X)"
          ],
          "correct": 0,
          "explanation": "بَاب اِنْفِعَال verbs (e.g. اِنْقَضَى) are لَازِمٌ (intransitive), so the passive columns and the اِسْمُ الْمَفْعُوْلِ are left blank."
        },
        {
          "q": "مُصَلٍّ and مُصَلًّى are, respectively…",
          "options": [
            "اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ of صَلَّى",
            "اِسْمُ الْمَفْعُوْلِ and اِسْمُ الْفَاعِلِ of صَلَّى",
            "The أَمْرُ and نَهْيُ of صَلَّى",
            "The مَصْدَرُ and اِسْمُ الْفَاعِلِ of صَلَّى"
          ],
          "correct": 0,
          "explanation": "مُصَلٍّ (with تَنْوِيْنُ كَسْرٍ) is the doer; مُصَلًّى (with تَنْوِيْنُ فَتْحٍ) is the اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "q": "The أَمْرُ (m/s) of نَادَى is…",
          "options": [
            "نَادِ",
            "نَادِيْ",
            "لَا تُنَادِ",
            "أُنْدُ"
          ],
          "correct": 0,
          "explanation": "The weak letter drops: نَادِ 'Call out!'. نَادِيْ is the feminine singular and لَا تُنَادِ is the نَهْيٌ."
        },
        {
          "q": "'I receive' from تَلَقَّى is…",
          "options": [
            "أَتَلَقَّى",
            "أُتَلَقَّى",
            "نَتَلَقَّى",
            "يَتَلَقَّى"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُ of the مضارع معلوم is أَتَلَقَّى. أُتَلَقَّى (with ضَمَّةٌ) is the passive 'I am received'."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The نَهْيُ (m/s) of صَلَّى is…",
          "options": [
            "لَا تُصَلِّ",
            "لَا تُصَلِّيْ",
            "لَا تَتَصَلَّ",
            "لَا صَلِّ"
          ],
          "correct": 0,
          "explanation": "The weak letter drops in the جَزْمٌ: لَا تُصَلِّ 'Do not perform salah!'. لَا تُصَلِّيْ is the feminine singular."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "صَلَّوْا and صَلُّوْا are, respectively…",
          "options": [
            "الْغَائِبُوْنَ of the ماضي ('they prayed') and الْمُخَاطَبُوْنَ of the أمر ('pray!')",
            "Both are the ماضي 'they prayed'",
            "The أمر ('pray!') and the ماضي ('they prayed')",
            "The ماضي معلوم and the ماضي مجهول"
          ],
          "correct": 0,
          "explanation": "صَلَّوْا (with فَتْحَةٌ on the لام) is 'They (m/p) prayed'; صَلُّوْا (with ضَمَّةٌ) is the plural أمر 'Pray!'. The passive ماضي is صُلُّوْا."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The الْمَاضِيْ الْمَجْهُوْلُ of صَلَّى is…",
          "options": [
            "صُلِّيَ",
            "صَلَّى",
            "يُصَلَّى",
            "صُوْلِيَ"
          ],
          "correct": 0,
          "explanation": "Pattern فُعِّلَ: صُلِّيَ. يُصَلَّى is the مضارع مجهول, and نُوْدِيَ-style (فُوْعِلَ) belongs to بَاب مُفَاعَلَة."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "يُنَادُوْنَ is which صِيْغَةٌ of نَادَى?",
          "options": [
            "الْغَائِبُوْنَ of the مضارع معلوم — 'They (m/p) call out'",
            "الْغَائِبُوْنَ of the مضارع مجهول — 'They are called out to'",
            "الْمُخَاطَبُوْنَ of the مضارع معلوم — 'You (m/p) call out'",
            "الْغَائِبُوْنَ of the ماضي معلوم — 'They called out'"
          ],
          "correct": 0,
          "explanation": "يُنَادُوْنَ comes from يُنَادِيُوْنَ by تَسْكِيْنٌ and حَذْفٌ. The passive is يُنَادَوْنَ, and the ماضي is نَادَوْا."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The feminine singular اِسْمُ الْمَفْعُوْلِ of أَبْقَى is…",
          "options": [
            "مُبْقَاةٌ",
            "مُبْقِيَةٌ",
            "مُبْقَيَةٌ",
            "مُبْقَاءٌ"
          ],
          "correct": 0,
          "explanation": "The اِسْمُ الْمَفْعُوْلِ singular feminine of نَاقِصٌ مَزِيْدٌ فِيْهِ verbs takes the ـَاةٌ ending: مُبْقَاةٌ. مُبْقِيَةٌ is the اِسْمُ الْفَاعِلِ feminine."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The أَمْرُ (m/s) of اِسْتَعْلَى is…",
          "options": [
            "اِسْتَعْلِ",
            "اِسْتَعْلِيْ",
            "لَا تَسْتَعْلِ",
            "اِسْتَعْلَى"
          ],
          "correct": 0,
          "explanation": "The final weak letter drops: اِسْتَعْلِ 'Rise!'. اِسْتَعْلِيْ is the feminine singular."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which of the following is the مَصْدَرٌ of a بَاب اِنْفِعَال verb?",
          "options": [
            "اِنْقِضَاءً",
            "اِبْتِلَاءً",
            "اِسْتِعْلَاءً",
            "إِبْقَاءً"
          ],
          "correct": 0,
          "explanation": "اِنْقِضَاءً is from اِنْقَضَى (VII). اِبْتِلَاءً is VIII, اِسْتِعْلَاءً is X, and إِبْقَاءً is IV. In all of them the يَاءٌ has become a هَمْزَةٌ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "تَتَلَاقَيْنَ (You f/s come together) has the same form as which other صِيْغَةٌ?",
          "options": [
            "الْمُخَاطَبَاتُ of the مضارع — 'You (f/p) come together'",
            "الْغَائِبَاتُ of the مضارع — 'They (f/p) come together'",
            "الْمُخَاطَبَةُ of the ماضي",
            "It is unique to the feminine singular"
          ],
          "correct": 0,
          "explanation": "As with تَسْعَيْنَ, the الْمُخَاطَبَةُ form (via تَسْكِيْنٌ + حَذْفٌ) coincides with الْمُخَاطَبَاتُ (unchanged): both are تَتَلَاقَيْنَ."
        },
        {
          "title": "to perform salah",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to perform salah\"?",
          "options": [
            "صَلَّى يُصَلِّيْ",
            "لَبَّى يُلَبِّيْ",
            "رَبَّى يُرَبِّيْ",
            "سَمَّى يُسَمِّيْ"
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
            "to respond",
            "to nurture",
            "to name"
          ],
          "correct": 0
        },
        {
          "title": "to perform salah (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَلَّى يُصَلِّيْ?",
          "options": [
            "تَصْلِيَةً",
            "تَلْبِيَةً",
            "تَرْبِيَةً",
            "تَسْمِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to respond",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to respond\"?",
          "options": [
            "لَبَّى يُلَبِّيْ",
            "رَبَّى يُرَبِّيْ",
            "سَمَّى يُسَمِّيْ",
            "نَاجَى يُنَاجِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to respond",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَبَّى يُلَبِّيْ mean?",
          "options": [
            "to respond",
            "to nurture",
            "to name",
            "to confide in"
          ],
          "correct": 0
        },
        {
          "title": "to respond (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of لَبَّى يُلَبِّيْ?",
          "options": [
            "تَلْبِيَةً",
            "تَرْبِيَةً",
            "تَسْمِيَةً",
            "مُنَاجَاةً"
          ],
          "correct": 0
        },
        {
          "title": "to nurture",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to nurture\"?",
          "options": [
            "رَبَّى يُرَبِّيْ",
            "سَمَّى يُسَمِّيْ",
            "نَاجَى يُنَاجِيْ",
            "نَادَى يُنَادِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to nurture",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَبَّى يُرَبِّيْ mean?",
          "options": [
            "to nurture",
            "to name",
            "to confide in",
            "to call out"
          ],
          "correct": 0
        },
        {
          "title": "to nurture (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَبَّى يُرَبِّيْ?",
          "options": [
            "تَرْبِيَةً",
            "تَسْمِيَةً",
            "مُنَاجَاةً",
            "مُنَادَاةً"
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
            "نَاجَى يُنَاجِيْ",
            "نَادَى يُنَادِيْ",
            "لَاقَى يُلَاقِيْ"
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
            "to confide in",
            "to call out",
            "to meet"
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
            "مُنَاجَاةً",
            "مُنَادَاةً",
            "مُلَاقَاةً"
          ],
          "correct": 0
        },
        {
          "title": "to confide in",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to confide in\"?",
          "options": [
            "نَاجَى يُنَاجِيْ",
            "نَادَى يُنَادِيْ",
            "لَاقَى يُلَاقِيْ",
            "جَازَى يُجَازِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to confide in",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَاجَى يُنَاجِيْ mean?",
          "options": [
            "to confide in",
            "to call out",
            "to meet",
            "to requite, recompense"
          ],
          "correct": 0
        },
        {
          "title": "to confide in (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَاجَى يُنَاجِيْ?",
          "options": [
            "مُنَاجَاةً",
            "مُنَادَاةً",
            "مُلَاقَاةً",
            "مُجَازَاةً"
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
            "لَاقَى يُلَاقِيْ",
            "جَازَى يُجَازِيْ",
            "أَحْيَى يُحْيِيْ"
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
            "to meet",
            "to requite, recompense",
            "to revive"
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
            "مُلَاقَاةً",
            "مُجَازَاةً",
            "إِحْيَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to meet",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to meet\"?",
          "options": [
            "لَاقَى يُلَاقِيْ",
            "جَازَى يُجَازِيْ",
            "أَحْيَى يُحْيِيْ",
            "أَبْلَى يُبْلِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to meet",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَاقَى يُلَاقِيْ mean?",
          "options": [
            "to meet",
            "to requite, recompense",
            "to revive",
            "to test"
          ],
          "correct": 0
        },
        {
          "title": "to meet (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of لَاقَى يُلَاقِيْ?",
          "options": [
            "مُلَاقَاةً",
            "مُجَازَاةً",
            "إِحْيَاءً",
            "إِبْلَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to requite, recompense",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to requite, recompense\"?",
          "options": [
            "جَازَى يُجَازِيْ",
            "أَحْيَى يُحْيِيْ",
            "أَبْلَى يُبْلِيْ",
            "أَبْقَى يُبْقِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to requite, recompense",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَازَى يُجَازِيْ mean?",
          "options": [
            "to requite, recompense",
            "to revive",
            "to test",
            "to keep"
          ],
          "correct": 0
        },
        {
          "title": "to requite, recompense (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَازَى يُجَازِيْ?",
          "options": [
            "مُجَازَاةً",
            "إِحْيَاءً",
            "إِبْلَاءً",
            "إِبْقَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to revive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to revive\"?",
          "options": [
            "أَحْيَى يُحْيِيْ",
            "أَبْلَى يُبْلِيْ",
            "أَبْقَى يُبْقِيْ",
            "أَلْقَى يُلْقِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to revive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَحْيَى يُحْيِيْ mean?",
          "options": [
            "to revive",
            "to test",
            "to keep",
            "to throw/deliver"
          ],
          "correct": 0
        },
        {
          "title": "to revive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَحْيَى يُحْيِيْ?",
          "options": [
            "إِحْيَاءً",
            "إِبْلَاءً",
            "إِبْقَاءً",
            "إِلْقَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to test",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to test\"?",
          "options": [
            "أَبْلَى يُبْلِيْ",
            "أَبْقَى يُبْقِيْ",
            "أَلْقَى يُلْقِيْ",
            "تَمَنَّى يَتَمَنَّى"
          ],
          "correct": 0
        },
        {
          "title": "to test",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبْلَى يُبْلِيْ mean?",
          "options": [
            "to test",
            "to keep",
            "to throw/deliver",
            "to desire"
          ],
          "correct": 0
        },
        {
          "title": "to test (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَبْلَى يُبْلِيْ?",
          "options": [
            "إِبْلَاءً",
            "إِبْقَاءً",
            "إِلْقَاءً",
            "تَمَنِّيًا"
          ],
          "correct": 0
        },
        {
          "title": "to keep",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to keep\"?",
          "options": [
            "أَبْقَى يُبْقِيْ",
            "أَلْقَى يُلْقِيْ",
            "تَمَنَّى يَتَمَنَّى",
            "تَلَهَّى يَتَلَهَّى"
          ],
          "correct": 0
        },
        {
          "title": "to keep",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبْقَى يُبْقِيْ mean?",
          "options": [
            "to keep",
            "to throw/deliver",
            "to desire",
            "to take pleasure"
          ],
          "correct": 0
        },
        {
          "title": "to keep (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَبْقَى يُبْقِيْ?",
          "options": [
            "إِبْقَاءً",
            "إِلْقَاءً",
            "تَمَنِّيًا",
            "تَلَهِّيًا"
          ],
          "correct": 0
        },
        {
          "title": "to throw/deliver",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to throw/deliver\"?",
          "options": [
            "أَلْقَى يُلْقِيْ",
            "تَمَنَّى يَتَمَنَّى",
            "تَلَهَّى يَتَلَهَّى",
            "تَزَكَّى يَتَزَكَّى"
          ],
          "correct": 0
        },
        {
          "title": "to throw/deliver",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَلْقَى يُلْقِيْ mean?",
          "options": [
            "to throw/deliver",
            "to desire",
            "to take pleasure",
            "to become purified"
          ],
          "correct": 0
        },
        {
          "title": "to throw/deliver (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَلْقَى يُلْقِيْ?",
          "options": [
            "إِلْقَاءً",
            "تَمَنِّيًا",
            "تَلَهِّيًا",
            "تَزَكِّيًا"
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
            "تَلَهَّى يَتَلَهَّى",
            "تَزَكَّى يَتَزَكَّى",
            "تَلَقَّى يَتَلَقَّى"
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
            "to take pleasure",
            "to become purified",
            "to receive"
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
            "تَلَهِّيًا",
            "تَزَكِّيًا",
            "تَلَقِّيًا"
          ],
          "correct": 0
        },
        {
          "title": "to take pleasure",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take pleasure\"?",
          "options": [
            "تَلَهَّى يَتَلَهَّى",
            "تَزَكَّى يَتَزَكَّى",
            "تَلَقَّى يَتَلَقَّى",
            "تَعَالَى يَتَعَالَى"
          ],
          "correct": 0
        },
        {
          "title": "to take pleasure",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَلَهَّى يَتَلَهَّى mean?",
          "options": [
            "to take pleasure",
            "to become purified",
            "to receive",
            "to rise/to be sublime"
          ],
          "correct": 0
        },
        {
          "title": "to take pleasure (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَلَهَّى يَتَلَهَّى?",
          "options": [
            "تَلَهِّيًا",
            "تَزَكِّيًا",
            "تَلَقِّيًا",
            "تَعَالِيًا"
          ],
          "correct": 0
        },
        {
          "title": "to become purified",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to become purified\"?",
          "options": [
            "تَزَكَّى يَتَزَكَّى",
            "تَلَقَّى يَتَلَقَّى",
            "تَعَالَى يَتَعَالَى",
            "تَلَاقَى يَتَلَاقَى"
          ],
          "correct": 0
        },
        {
          "title": "to become purified",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَزَكَّى يَتَزَكَّى mean?",
          "options": [
            "to become purified",
            "to receive",
            "to rise/to be sublime",
            "to come/get together"
          ],
          "correct": 0
        },
        {
          "title": "to become purified (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَزَكَّى يَتَزَكَّى?",
          "options": [
            "تَزَكِّيًا",
            "تَلَقِّيًا",
            "تَعَالِيًا",
            "تَلَاقِيًا"
          ],
          "correct": 0
        },
        {
          "title": "to receive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to receive\"?",
          "options": [
            "تَلَقَّى يَتَلَقَّى",
            "تَعَالَى يَتَعَالَى",
            "تَلَاقَى يَتَلَاقَى",
            "تَدَاعَى يَتَدَاعَى"
          ],
          "correct": 0
        },
        {
          "title": "to receive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَلَقَّى يَتَلَقَّى mean?",
          "options": [
            "to receive",
            "to rise/to be sublime",
            "to come/get together",
            "to call each other out"
          ],
          "correct": 0
        },
        {
          "title": "to receive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَلَقَّى يَتَلَقَّى?",
          "options": [
            "تَلَقِّيًا",
            "تَعَالِيًا",
            "تَلَاقِيًا",
            "تَدَاعِيًا"
          ],
          "correct": 0
        },
        {
          "title": "to rise/to be sublime",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to rise/to be sublime\"?",
          "options": [
            "تَعَالَى يَتَعَالَى",
            "تَلَاقَى يَتَلَاقَى",
            "تَدَاعَى يَتَدَاعَى",
            "تَرَاضَى يَتَرَاضَى"
          ],
          "correct": 0
        },
        {
          "title": "to rise/to be sublime",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَعَالَى يَتَعَالَى mean?",
          "options": [
            "to rise/to be sublime",
            "to come/get together",
            "to call each other out",
            "to come to terms"
          ],
          "correct": 0
        },
        {
          "title": "to rise/to be sublime (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَعَالَى يَتَعَالَى?",
          "options": [
            "تَعَالِيًا",
            "تَلَاقِيًا",
            "تَدَاعِيًا",
            "تَرَاضِيًا"
          ],
          "correct": 0
        },
        {
          "title": "to come/get together",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to come/get together\"?",
          "options": [
            "تَلَاقَى يَتَلَاقَى",
            "تَدَاعَى يَتَدَاعَى",
            "تَرَاضَى يَتَرَاضَى",
            "اِنْحَنَى يَنْحَنِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to come/get together",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَلَاقَى يَتَلَاقَى mean?",
          "options": [
            "to come/get together",
            "to call each other out",
            "to come to terms",
            "to bend"
          ],
          "correct": 0
        },
        {
          "title": "to come/get together (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَلَاقَى يَتَلَاقَى?",
          "options": [
            "تَلَاقِيًا",
            "تَدَاعِيًا",
            "تَرَاضِيًا",
            "اِنْحِنَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to call each other out",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to call each other out\"?",
          "options": [
            "تَدَاعَى يَتَدَاعَى",
            "تَرَاضَى يَتَرَاضَى",
            "اِنْحَنَى يَنْحَنِيْ",
            "اِنْجَلَى يَنْجَلِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to call each other out",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَدَاعَى يَتَدَاعَى mean?",
          "options": [
            "to call each other out",
            "to come to terms",
            "to bend",
            "to reveal itself"
          ],
          "correct": 0
        },
        {
          "title": "to call each other out (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَدَاعَى يَتَدَاعَى?",
          "options": [
            "تَدَاعِيًا",
            "تَرَاضِيًا",
            "اِنْحِنَاءً",
            "اِنْجِلَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to come to terms",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to come to terms\"?",
          "options": [
            "تَرَاضَى يَتَرَاضَى",
            "اِنْحَنَى يَنْحَنِيْ",
            "اِنْجَلَى يَنْجَلِيْ",
            "اِنْطَفَى يَنْطَفِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to come to terms",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَرَاضَى يَتَرَاضَى mean?",
          "options": [
            "to come to terms",
            "to bend",
            "to reveal itself",
            "to float"
          ],
          "correct": 0
        },
        {
          "title": "to come to terms (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَرَاضَى يَتَرَاضَى?",
          "options": [
            "تَرَاضِيًا",
            "اِنْحِنَاءً",
            "اِنْجِلَاءً",
            "اِنْطِفَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to bend",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bend\"?",
          "options": [
            "اِنْحَنَى يَنْحَنِيْ",
            "اِنْجَلَى يَنْجَلِيْ",
            "اِنْطَفَى يَنْطَفِيْ",
            "اِنْقَضَى يَنْقَضِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to bend",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْحَنَى يَنْحَنِيْ mean?",
          "options": [
            "to bend",
            "to reveal itself",
            "to float",
            "to be over/finished"
          ],
          "correct": 0
        },
        {
          "title": "to bend (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْحَنَى يَنْحَنِيْ?",
          "options": [
            "اِنْحِنَاءً",
            "اِنْجِلَاءً",
            "اِنْطِفَاءً",
            "اِنْقِضَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to reveal itself",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reveal itself\"?",
          "options": [
            "اِنْجَلَى يَنْجَلِيْ",
            "اِنْطَفَى يَنْطَفِيْ",
            "اِنْقَضَى يَنْقَضِيْ",
            "اِرْتَضَى يَرْتَضِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to reveal itself",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْجَلَى يَنْجَلِيْ mean?",
          "options": [
            "to reveal itself",
            "to float",
            "to be over/finished",
            "to be satisfied"
          ],
          "correct": 0
        },
        {
          "title": "to reveal itself (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْجَلَى يَنْجَلِيْ?",
          "options": [
            "اِنْجِلَاءً",
            "اِنْطِفَاءً",
            "اِنْقِضَاءً",
            "اِرْتِضَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to float",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to float\"?",
          "options": [
            "اِنْطَفَى يَنْطَفِيْ",
            "اِنْقَضَى يَنْقَضِيْ",
            "اِرْتَضَى يَرْتَضِيْ",
            "اِشْتَرَى يَشْتَرِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to float",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْطَفَى يَنْطَفِيْ mean?",
          "options": [
            "to float",
            "to be over/finished",
            "to be satisfied",
            "to buy"
          ],
          "correct": 0
        },
        {
          "title": "to float (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْطَفَى يَنْطَفِيْ?",
          "options": [
            "اِنْطِفَاءً",
            "اِنْقِضَاءً",
            "اِرْتِضَاءً",
            "اِشْتِرَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to be over/finished",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be over/finished\"?",
          "options": [
            "اِنْقَضَى يَنْقَضِيْ",
            "اِرْتَضَى يَرْتَضِيْ",
            "اِشْتَرَى يَشْتَرِيْ",
            "اِبْتَغَى يَبْتَغِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to be over/finished",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْقَضَى يَنْقَضِيْ mean?",
          "options": [
            "to be over/finished",
            "to be satisfied",
            "to buy",
            "to seek"
          ],
          "correct": 0
        },
        {
          "title": "to be over/finished (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْقَضَى يَنْقَضِيْ?",
          "options": [
            "اِنْقِضَاءً",
            "اِرْتِضَاءً",
            "اِشْتِرَاءً",
            "اِبْتِغَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to be satisfied",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be satisfied\"?",
          "options": [
            "اِرْتَضَى يَرْتَضِيْ",
            "اِشْتَرَى يَشْتَرِيْ",
            "اِبْتَغَى يَبْتَغِيْ",
            "اِبْتَلَى يَبْتَلِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to be satisfied",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِرْتَضَى يَرْتَضِيْ mean?",
          "options": [
            "to be satisfied",
            "to buy",
            "to seek",
            "to put to the test"
          ],
          "correct": 0
        },
        {
          "title": "to be satisfied (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِرْتَضَى يَرْتَضِيْ?",
          "options": [
            "اِرْتِضَاءً",
            "اِشْتِرَاءً",
            "اِبْتِغَاءً",
            "اِبْتِلَاءً"
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
            "اِبْتَغَى يَبْتَغِيْ",
            "اِبْتَلَى يَبْتَلِيْ",
            "اِسْتَفْتَى يَسْتَفْتِيْ"
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
            "to seek",
            "to put to the test",
            "to ask for a formal legal opinion"
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
            "اِبْتِغَاءً",
            "اِبْتِلَاءً",
            "اِسْتِفْتَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to seek",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to seek\"?",
          "options": [
            "اِبْتَغَى يَبْتَغِيْ",
            "اِبْتَلَى يَبْتَلِيْ",
            "اِسْتَفْتَى يَسْتَفْتِيْ",
            "اِسْتَلْقَى يَسْتَلْقِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to seek",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِبْتَغَى يَبْتَغِيْ mean?",
          "options": [
            "to seek",
            "to put to the test",
            "to ask for a formal legal opinion",
            "to lie down"
          ],
          "correct": 0
        },
        {
          "title": "to seek (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِبْتَغَى يَبْتَغِيْ?",
          "options": [
            "اِبْتِغَاءً",
            "اِبْتِلَاءً",
            "اِسْتِفْتَاءً",
            "اِسْتِلْقَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to put to the test",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to put to the test\"?",
          "options": [
            "اِبْتَلَى يَبْتَلِيْ",
            "اِسْتَفْتَى يَسْتَفْتِيْ",
            "اِسْتَلْقَى يَسْتَلْقِيْ",
            "اِسْتَدْعَى يَسْتَدْعِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to put to the test",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِبْتَلَى يَبْتَلِيْ mean?",
          "options": [
            "to put to the test",
            "to ask for a formal legal opinion",
            "to lie down",
            "to summon"
          ],
          "correct": 0
        },
        {
          "title": "to put to the test (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِبْتَلَى يَبْتَلِيْ?",
          "options": [
            "اِبْتِلَاءً",
            "اِسْتِفْتَاءً",
            "اِسْتِلْقَاءً",
            "اِسْتِدْعَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to ask for a formal legal opinion",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to ask for a formal legal opinion\"?",
          "options": [
            "اِسْتَفْتَى يَسْتَفْتِيْ",
            "اِسْتَلْقَى يَسْتَلْقِيْ",
            "اِسْتَدْعَى يَسْتَدْعِيْ",
            "اِسْتَعْلَى يَسْتَعْلِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to ask for a formal legal opinion",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَفْتَى يَسْتَفْتِيْ mean?",
          "options": [
            "to ask for a formal legal opinion",
            "to lie down",
            "to summon",
            "to rise"
          ],
          "correct": 0
        },
        {
          "title": "to ask for a formal legal opinion (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَفْتَى يَسْتَفْتِيْ?",
          "options": [
            "اِسْتِفْتَاءً",
            "اِسْتِلْقَاءً",
            "اِسْتِدْعَاءً",
            "اِسْتِعْلَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to lie down",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to lie down\"?",
          "options": [
            "اِسْتَلْقَى يَسْتَلْقِيْ",
            "اِسْتَدْعَى يَسْتَدْعِيْ",
            "اِسْتَعْلَى يَسْتَعْلِيْ",
            "صَلَّى يُصَلِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "to lie down",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَلْقَى يَسْتَلْقِيْ mean?",
          "options": [
            "to lie down",
            "to summon",
            "to rise",
            "to perform salah"
          ],
          "correct": 0
        },
        {
          "title": "to lie down (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَلْقَى يَسْتَلْقِيْ?",
          "options": [
            "اِسْتِلْقَاءً",
            "اِسْتِدْعَاءً",
            "اِسْتِعْلَاءً",
            "تَصْلِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to summon",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to summon\"?",
          "options": [
            "اِسْتَدْعَى يَسْتَدْعِيْ",
            "اِسْتَعْلَى يَسْتَعْلِيْ",
            "صَلَّى يُصَلِّيْ",
            "لَبَّى يُلَبِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "to summon",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَدْعَى يَسْتَدْعِيْ mean?",
          "options": [
            "to summon",
            "to rise",
            "to perform salah",
            "to respond"
          ],
          "correct": 0
        },
        {
          "title": "to summon (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَدْعَى يَسْتَدْعِيْ?",
          "options": [
            "اِسْتِدْعَاءً",
            "اِسْتِعْلَاءً",
            "تَصْلِيَةً",
            "تَلْبِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to rise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to rise\"?",
          "options": [
            "اِسْتَعْلَى يَسْتَعْلِيْ",
            "صَلَّى يُصَلِّيْ",
            "لَبَّى يُلَبِّيْ",
            "رَبَّى يُرَبِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "to rise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَعْلَى يَسْتَعْلِيْ mean?",
          "options": [
            "to rise",
            "to perform salah",
            "to respond",
            "to nurture"
          ],
          "correct": 0
        },
        {
          "title": "to rise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَعْلَى يَسْتَعْلِيْ?",
          "options": [
            "اِسْتِعْلَاءً",
            "تَصْلِيَةً",
            "تَلْبِيَةً",
            "تَرْبِيَةً"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l4",
      "title": "مُرَاجَعَةُ مَزِيْدِ النَّاقِصِ",
      "subtitle": "Review of the eight مَزِيْدٌ فِيْهِ نَاقِصٌ verbs (II, III, IV, V, VI, VII, VIII, X) — arranged by tense across all eight أَبْوَاب",
      "concepts": [
        {
          "heading": "How to use this review",
          "lines": [
            {
              "html": "Parts 5–12 introduced one <bdi>مَزِيْدٌ فِيْهِ نَاقِصٌ</bdi> model verb per <bdi>بَابٌ</bdi>. This review gathers all eight of them into one table per tense/form, so that the pattern of each <bdi>صِيْغَةٌ</bdi> can be compared straight across the <bdi>أَبْوَاب</bdi>. The eight model verbs are <bdi>صَلَّى</bdi> (II), <bdi>نَادَى</bdi> (III), <bdi>أَبْقَى</bdi> (IV), <bdi>تَلَقَّى</bdi> (V), <bdi>تَلَاقَى</bdi> (VI), <bdi>اِنْقَضَى</bdi> (VII), <bdi>اِبْتَلَى</bdi> (VIII) and <bdi>اِسْتَعْلَى</bdi> (X).",
              "list": false
            },
            {
              "html": "<bdi>اِنْقَضَى</bdi> is from <bdi>بَاب اِنْفِعَال</bdi>, whose verbs are <bdi>لَازِمٌ</bdi> (intransitive). Its <bdi>مَجْهُوْلٌ</bdi> columns and its <bdi>اِسْمُ الْمَفْعُوْلِ</bdi> are therefore left blank below, shown as —.",
              "list": false
            },
            {
              "html": "Read each table downwards to revise one verb, and across to see how the same <bdi>صِيْغَةٌ</bdi> behaves in every <bdi>بَابٌ</bdi>. Notice how uniform the endings are: once the <bdi>أَلِفٌ</bdi> / <bdi>يَاءٌ</bdi> / <bdi>وَاوٌ</bdi> of the <bdi>لَامُ الْكَلِمَةِ</bdi> is dealt with, the eight verbs behave identically.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Which column of the review below is left completely blank?",
            "kind": "mcq",
            "options": [
              "الْمَاضِيْ الْمَجْهُوْلُ and الْمُضَارِعُ الْمَجْهُوْلُ of اِنْقَضَى",
              "اَلْأَمْرُ of اِنْقَضَى",
              "اِسْمُ الْفَاعِلِ of اِنْقَضَى",
              "الْمُضَارِعُ الْمَعْلُوْمُ of تَلَاقَى"
            ],
            "correct": 0
          }
        },
        {
          "heading": "الْمَاضِيْ الْمَعْلُوْمُ (p. 210)",
          "lines": [
            {
              "html": "In the <bdi>الْمَاضِيْ الْمَعْلُوْمُ</bdi> every one of the eight verbs ends in an <bdi>أَلِفٌ</bdi> in <bdi>الْغَائِبُ</bdi>. From <bdi>الْمُخَاطَبُ</bdi> onwards the <bdi>أَلِفٌ</bdi> reverts to a <bdi>يَاءٌ</bdi> (<bdi>صَلَّيْتَ، نَادَيْتَ، أَبْقَيْتَ</bdi>…), and in <bdi>الْغَائِبُوْنَ</bdi> the <bdi>يَاءٌ</bdi> drops after <bdi>تَسْكِيْنٌ</bdi>, leaving <bdi>ـَوْا</bdi> (<bdi>صَلَّوْا، نَادَوْا، أَبْقَوْا</bdi>…).",
              "list": false
            },
            {
              "table": {
                "title": "الْمَاضِيْ الْمَعْلُوْمُ — the eight مَزِيْدٌ فِيْهِ نَاقِصٌ verbs (p. 210)",
                "headers": [
                  "صِيْغَةٌ",
                  "صَلَّى (II)",
                  "نَادَى (III)",
                  "أَبْقَى (IV)",
                  "تَلَقَّى (V)",
                  "تَلَاقَى (VI)",
                  "اِنْقَضَى (VII)",
                  "اِبْتَلَى (VIII)",
                  "اِسْتَعْلَى (X)"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "صَلَّى",
                    "نَادَى",
                    "أَبْقَى",
                    "تَلَقَّى",
                    "تَلَاقَى",
                    "اِنْقَضَى",
                    "اِبْتَلَى",
                    "اِسْتَعْلَى"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "صَلَّيَا",
                    "نَادَيَا",
                    "أَبْقَيَا",
                    "تَلَقَّيَا",
                    "تَلَاقَيَا",
                    "اِنْقَضَيَا",
                    "اِبْتَلَيَا",
                    "اِسْتَعْلَيَا"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "صَلَّوْا",
                    "نَادَوْا",
                    "أَبْقَوْا",
                    "تَلَقَّوْا",
                    "تَلَاقَوْا",
                    "اِنْقَضَوْا",
                    "اِبْتَلَوْا",
                    "اِسْتَعْلَوْا"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "صَلَّتْ",
                    "نَادَتْ",
                    "أَبْقَتْ",
                    "تَلَقَّتْ",
                    "تَلَاقَتْ",
                    "اِنْقَضَتْ",
                    "اِبْتَلَتْ",
                    "اِسْتَعْلَتْ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "صَلَّتَا",
                    "نَادَتَا",
                    "أَبْقَتَا",
                    "تَلَقَّتَا",
                    "تَلَاقَتَا",
                    "اِنْقَضَتَا",
                    "اِبْتَلَتَا",
                    "اِسْتَعْلَتَا"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "صَلَّيْنَ",
                    "نَادَيْنَ",
                    "أَبْقَيْنَ",
                    "تَلَقَّيْنَ",
                    "تَلَاقَيْنَ",
                    "اِنْقَضَيْنَ",
                    "اِبْتَلَيْنَ",
                    "اِسْتَعْلَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "صَلَّيْتَ",
                    "نَادَيْتَ",
                    "أَبْقَيْتَ",
                    "تَلَقَّيْتَ",
                    "تَلَاقَيْتَ",
                    "اِنْقَضَيْتَ",
                    "اِبْتَلَيْتَ",
                    "اِسْتَعْلَيْتَ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "صَلَّيْتُمَا",
                    "نَادَيْتُمَا",
                    "أَبْقَيْتُمَا",
                    "تَلَقَّيْتُمَا",
                    "تَلَاقَيْتُمَا",
                    "اِنْقَضَيْتُمَا",
                    "اِبْتَلَيْتُمَا",
                    "اِسْتَعْلَيْتُمَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "صَلَّيْتُمْ",
                    "نَادَيْتُمْ",
                    "أَبْقَيْتُمْ",
                    "تَلَقَّيْتُمْ",
                    "تَلَاقَيْتُمْ",
                    "اِنْقَضَيْتُمْ",
                    "اِبْتَلَيْتُمْ",
                    "اِسْتَعْلَيْتُمْ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "صَلَّيْتِ",
                    "نَادَيْتِ",
                    "أَبْقَيْتِ",
                    "تَلَقَّيْتِ",
                    "تَلَاقَيْتِ",
                    "اِنْقَضَيْتِ",
                    "اِبْتَلَيْتِ",
                    "اِسْتَعْلَيْتِ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "صَلَّيْتُمَا",
                    "نَادَيْتُمَا",
                    "أَبْقَيْتُمَا",
                    "تَلَقَّيْتُمَا",
                    "تَلَاقَيْتُمَا",
                    "اِنْقَضَيْتُمَا",
                    "اِبْتَلَيْتُمَا",
                    "اِسْتَعْلَيْتُمَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "صَلَّيْتُنَّ",
                    "نَادَيْتُنَّ",
                    "أَبْقَيْتُنَّ",
                    "تَلَقَّيْتُنَّ",
                    "تَلَاقَيْتُنَّ",
                    "اِنْقَضَيْتُنَّ",
                    "اِبْتَلَيْتُنَّ",
                    "اِسْتَعْلَيْتُنَّ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "صَلَّيْتُ",
                    "نَادَيْتُ",
                    "أَبْقَيْتُ",
                    "تَلَقَّيْتُ",
                    "تَلَاقَيْتُ",
                    "اِنْقَضَيْتُ",
                    "اِبْتَلَيْتُ",
                    "اِسْتَعْلَيْتُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "صَلَّيْنَا",
                    "نَادَيْنَا",
                    "أَبْقَيْنَا",
                    "تَلَقَّيْنَا",
                    "تَلَاقَيْنَا",
                    "اِنْقَضَيْنَا",
                    "اِبْتَلَيْنَا",
                    "اِسْتَعْلَيْنَا"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "صَلَّوْا and صُلُّوْا differ how?",
            "kind": "mcq",
            "options": [
              "صَلَّوْا is الْغَائِبُوْنَ of the ماضي معلوم; صُلُّوْا is the same صِيْغَةٌ of the ماضي مجهول",
              "صَلَّوْا is the أمر; صُلُّوْا is the ماضي",
              "صَلَّوْا is the مضارع; صُلُّوْا is the ماضي",
              "They are two spellings of the same word"
            ],
            "correct": 0
          }
        },
        {
          "heading": "الْمُضَارِعُ الْمَعْلُوْمُ (p. 211)",
          "lines": [
            {
              "html": "The <bdi>أَبْوَاب</bdi> split into two groups here. <bdi>صَلَّى، نَادَى، أَبْقَى، اِنْقَضَى، اِبْتَلَى</bdi> and <bdi>اِسْتَعْلَى</bdi> end in a <bdi>يَاءٌ</bdi> (<bdi>يُصَلِّيْ، يُنَادِيْ، يُبْقِيْ</bdi>…), while <bdi>تَلَقَّى</bdi> and <bdi>تَلَاقَى</bdi> — the two <bdi>تَ</bdi>‑prefixed <bdi>أَبْوَاب</bdi> — end in an <bdi>أَلِفٌ</bdi> (<bdi>يَتَلَقَّى، يَتَلَاقَى</bdi>).",
              "list": false
            },
            {
              "html": "The book prints <bdi>الْمُخَاطَبَةُ</bdi> and <bdi>الْمُخَاطَبَاتُ</bdi> in bold: after <bdi>تَسْكِيْنٌ</bdi> and <bdi>حَذْفٌ</bdi>, the feminine singular (<bdi>تُصَلِّيْنَ</bdi>) becomes identical to the feminine plural (<bdi>تُصَلِّيْنَ</bdi>), which was never changed. Context alone distinguishes them.",
              "list": false
            },
            {
              "table": {
                "title": "الْمُضَارِعُ الْمَعْلُوْمُ — the eight مَزِيْدٌ فِيْهِ نَاقِصٌ verbs (p. 211)",
                "headers": [
                  "صِيْغَةٌ",
                  "صَلَّى (II)",
                  "نَادَى (III)",
                  "أَبْقَى (IV)",
                  "تَلَقَّى (V)",
                  "تَلَاقَى (VI)",
                  "اِنْقَضَى (VII)",
                  "اِبْتَلَى (VIII)",
                  "اِسْتَعْلَى (X)"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "يُصَلِّيْ",
                    "يُنَادِيْ",
                    "يُبْقِيْ",
                    "يَتَلَقَّى",
                    "يَتَلَاقَى",
                    "يَنْقَضِيْ",
                    "يَبْتَلِيْ",
                    "يَسْتَعْلِيْ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "يُصَلِّيَانِ",
                    "يُنَادِيَانِ",
                    "يُبْقِيَانِ",
                    "يَتَلَقَّيَانِ",
                    "يَتَلَاقَيَانِ",
                    "يَنْقَضِيَانِ",
                    "يَبْتَلِيَانِ",
                    "يَسْتَعْلِيَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "يُصَلُّوْنَ",
                    "يُنَادُوْنَ",
                    "يُبْقُوْنَ",
                    "يَتَلَقَّوْنَ",
                    "يَتَلَاقَوْنَ",
                    "يَنْقَضُوْنَ",
                    "يَبْتَلُوْنَ",
                    "يَسْتَعْلُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "تُصَلِّيْ",
                    "تُنَادِيْ",
                    "تُبْقِيْ",
                    "تَتَلَقَّى",
                    "تَتَلَاقَى",
                    "تَنْقَضِيْ",
                    "تَبْتَلِيْ",
                    "تَسْتَعْلِيْ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "تُصَلِّيَانِ",
                    "تُنَادِيَانِ",
                    "تُبْقِيَانِ",
                    "تَتَلَقَّيَانِ",
                    "تَتَلَاقَيَانِ",
                    "تَنْقَضِيَانِ",
                    "تَبْتَلِيَانِ",
                    "تَسْتَعْلِيَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "يُصَلِّيْنَ",
                    "يُنَادِيْنَ",
                    "يُبْقِيْنَ",
                    "يَتَلَقَّيْنَ",
                    "يَتَلَاقَيْنَ",
                    "يَنْقَضِيْنَ",
                    "يَبْتَلِيْنَ",
                    "يَسْتَعْلِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "تُصَلِّيْ",
                    "تُنَادِيْ",
                    "تُبْقِيْ",
                    "تَتَلَقَّى",
                    "تَتَلَاقَى",
                    "تَنْقَضِيْ",
                    "تَبْتَلِيْ",
                    "تَسْتَعْلِيْ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تُصَلِّيَانِ",
                    "تُنَادِيَانِ",
                    "تُبْقِيَانِ",
                    "تَتَلَقَّيَانِ",
                    "تَتَلَاقَيَانِ",
                    "تَنْقَضِيَانِ",
                    "تَبْتَلِيَانِ",
                    "تَسْتَعْلِيَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تُصَلُّوْنَ",
                    "تُنَادُوْنَ",
                    "تُبْقُوْنَ",
                    "تَتَلَقَّوْنَ",
                    "تَتَلَاقَوْنَ",
                    "تَنْقَضُوْنَ",
                    "تَبْتَلُوْنَ",
                    "تَسْتَعْلُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تُصَلِّيْنَ",
                    "تُنَادِيْنَ",
                    "تُبْقِيْنَ",
                    "تَتَلَقَّيْنَ",
                    "تَتَلَاقَيْنَ",
                    "تَنْقَضِيْنَ",
                    "تَبْتَلِيْنَ",
                    "تَسْتَعْلِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تُصَلِّيَانِ",
                    "تُنَادِيَانِ",
                    "تُبْقِيَانِ",
                    "تَتَلَقَّيَانِ",
                    "تَتَلَاقَيَانِ",
                    "تَنْقَضِيَانِ",
                    "تَبْتَلِيَانِ",
                    "تَسْتَعْلِيَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تُصَلِّيْنَ",
                    "تُنَادِيْنَ",
                    "تُبْقِيْنَ",
                    "تَتَلَقَّيْنَ",
                    "تَتَلَاقَيْنَ",
                    "تَنْقَضِيْنَ",
                    "تَبْتَلِيْنَ",
                    "تَسْتَعْلِيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أُصَلِّيْ",
                    "أُنَادِيْ",
                    "أُبْقِيْ",
                    "أَتَلَقَّى",
                    "أَتَلَاقَى",
                    "أَنْقَضِيْ",
                    "أَبْتَلِيْ",
                    "أَسْتَعْلِيْ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "نُصَلِّيْ",
                    "نُنَادِيْ",
                    "نُبْقِيْ",
                    "نَتَلَقَّى",
                    "نَتَلَاقَى",
                    "نَنْقَضِيْ",
                    "نَبْتَلِيْ",
                    "نَسْتَعْلِيْ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Across the review tables, which two verbs end in an أَلِفٌ (not a يَاءٌ) in the الْمُضَارِعُ الْمَعْلُوْمُ?",
            "kind": "mcq",
            "options": [
              "تَلَقَّى (V) and تَلَاقَى (VI)",
              "صَلَّى (II) and نَادَى (III)",
              "اِنْقَضَى (VII) and اِبْتَلَى (VIII)",
              "أَبْقَى (IV) and اِسْتَعْلَى (X)"
            ],
            "correct": 0
          }
        },
        {
          "heading": "الْمَاضِيْ الْمَجْهُوْلُ (p. 212)",
          "lines": [
            {
              "html": "The passive past keeps the <bdi>لَامُ الْكَلِمَةِ</bdi> as a <bdi>يَاءٌ</bdi> throughout: <bdi>صُلِّيَ، نُوْدِيَ، أُبْقِيَ، تُلُقِّيَ، تُلُوْقِيَ، اُبْتُلِيَ، اُسْتُعْلِيَ</bdi>. Note <bdi>نُوْدِيَ</bdi> (<bdi>بَاب مُفَاعَلَة</bdi>): the <bdi>أَلِفٌ</bdi> of <bdi>نَادَى</bdi> becomes a <bdi>وَاوٌ</bdi>; and <bdi>تُلُوْقِيَ</bdi> (<bdi>بَاب تَفَاعُل</bdi>) in the same way.",
              "list": false
            },
            {
              "table": {
                "title": "الْمَاضِيْ الْمَجْهُوْلُ — the eight مَزِيْدٌ فِيْهِ نَاقِصٌ verbs (p. 212)",
                "headers": [
                  "صِيْغَةٌ",
                  "صَلَّى (II)",
                  "نَادَى (III)",
                  "أَبْقَى (IV)",
                  "تَلَقَّى (V)",
                  "تَلَاقَى (VI)",
                  "اِنْقَضَى (VII)",
                  "اِبْتَلَى (VIII)",
                  "اِسْتَعْلَى (X)"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "صُلِّيَ",
                    "نُوْدِيَ",
                    "أُبْقِيَ",
                    "تُلُقِّيَ",
                    "تُلُوْقِيَ",
                    "—",
                    "اُبْتُلِيَ",
                    "اُسْتُعْلِيَ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "صُلِّيَا",
                    "نُوْدِيَا",
                    "أُبْقِيَا",
                    "تُلُقِّيَا",
                    "تُلُوْقِيَا",
                    "—",
                    "اُبْتُلِيَا",
                    "اُسْتُعْلِيَا"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "صُلُّوْا",
                    "نُوْدُوْا",
                    "أُبْقُوْا",
                    "تُلُقُّوْا",
                    "تُلُوْقُوْا",
                    "—",
                    "اُبْتُلُوْا",
                    "اُسْتُعْلُوْا"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "صُلِّيَتْ",
                    "نُوْدِيَتْ",
                    "أُبْقِيَتْ",
                    "تُلُقِّيَتْ",
                    "تُلُوْقِيَتْ",
                    "—",
                    "اُبْتُلِيَتْ",
                    "اُسْتُعْلِيَتْ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "صُلِّيَتَا",
                    "نُوْدِيَتَا",
                    "أُبْقِيَتَا",
                    "تُلُقِّيَتَا",
                    "تُلُوْقِيَتَا",
                    "—",
                    "اُبْتُلِيَتَا",
                    "اُسْتُعْلِيَتَا"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "صُلِّيْنَ",
                    "نُوْدِيْنَ",
                    "أُبْقِيْنَ",
                    "تُلُقِّيْنَ",
                    "تُلُوْقِيْنَ",
                    "—",
                    "اُبْتُلِيْنَ",
                    "اُسْتُعْلِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "صُلِّيْتَ",
                    "نُوْدِيْتَ",
                    "أُبْقِيْتَ",
                    "تُلُقِّيْتَ",
                    "تُلُوْقِيْتَ",
                    "—",
                    "اُبْتُلِيْتَ",
                    "اُسْتُعْلِيْتَ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "صُلِّيْتُمَا",
                    "نُوْدِيْتُمَا",
                    "أُبْقِيْتُمَا",
                    "تُلُقِّيْتُمَا",
                    "تُلُوْقِيْتُمَا",
                    "—",
                    "اُبْتُلِيْتُمَا",
                    "اُسْتُعْلِيْتُمَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "صُلِّيْتُمْ",
                    "نُوْدِيْتُمْ",
                    "أُبْقِيْتُمْ",
                    "تُلُقِّيْتُمْ",
                    "تُلُوْقِيْتُمْ",
                    "—",
                    "اُبْتُلِيْتُمْ",
                    "اُسْتُعْلِيْتُمْ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "صُلِّيْتِ",
                    "نُوْدِيْتِ",
                    "أُبْقِيْتِ",
                    "تُلُقِّيْتِ",
                    "تُلُوْقِيْتِ",
                    "—",
                    "اُبْتُلِيْتِ",
                    "اُسْتُعْلِيْتِ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "صُلِّيْتُمَا",
                    "نُوْدِيْتُمَا",
                    "أُبْقِيْتُمَا",
                    "تُلُقِّيْتُمَا",
                    "تُلُوْقِيْتُمَا",
                    "—",
                    "اُبْتُلِيْتُمَا",
                    "اُسْتُعْلِيْتُمَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "صُلِّيْتُنَّ",
                    "نُوْدِيْتُنَّ",
                    "أُبْقِيْتُنَّ",
                    "تُلُقِّيْتُنَّ",
                    "تُلُوْقِيْتُنَّ",
                    "—",
                    "اُبْتُلِيْتُنَّ",
                    "اُسْتُعْلِيْتُنَّ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "صُلِّيْتُ",
                    "نُوْدِيْتُ",
                    "أُبْقِيْتُ",
                    "تُلُقِّيْتُ",
                    "تُلُوْقِيْتُ",
                    "—",
                    "اُبْتُلِيْتُ",
                    "اُسْتُعْلِيْتُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "صُلِّيْنَا",
                    "نُوْدِيْنَا",
                    "أُبْقِيْنَا",
                    "تُلُقِّيْنَا",
                    "تُلُوْقِيْنَا",
                    "—",
                    "اُبْتُلِيْنَا",
                    "اُسْتُعْلِيْنَا"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "تُلُوْقِيْتُمْ belongs to which verb and صِيْغَةٌ?",
            "kind": "mcq",
            "options": [
              "تَلَاقَى — الْمُخَاطَبُوْنَ مِنَ الْمَاضِيْ الْمَجْهُوْلِ",
              "تَلَقَّى — الْمُخَاطَبُوْنَ مِنَ الْمَاضِيْ الْمَجْهُوْلِ",
              "تَلَاقَى — الْمُخَاطَبُوْنَ مِنَ الْمَاضِيْ الْمَعْلُوْمِ",
              "لَاقَى — الْغَائِبُوْنَ مِنَ الْمَاضِيْ الْمَجْهُوْلِ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "الْمُضَارِعُ الْمَجْهُوْلُ",
          "lines": [
            {
              "html": "In the passive <bdi>مُضَارِعٌ</bdi> every verb ends in an <bdi>أَلِفٌ</bdi>, because the <bdi>لَامُ الْكَلِمَةِ</bdi> always carries a <bdi>فَتْحَةٌ</bdi> before it: <bdi>يُصَلَّى، يُنَادَى، يُبْقَى، يُتَلَقَّى، يُتَلَاقَى، يُبْتَلَى، يُسْتَعْلَى</bdi>. The eight columns are therefore completely parallel.",
              "list": false
            },
            {
              "html": "As in the active, <bdi>الْمُخَاطَبَةُ</bdi> and <bdi>الْمُخَاطَبَاتُ</bdi> coincide (<bdi>تُصَلَّيْنَ</bdi> = <bdi>تُصَلَّيْنَ</bdi>) — the two forms are identical.",
              "list": false
            },
            {
              "table": {
                "title": "الْمُضَارِعُ الْمَجْهُوْلُ — the eight مَزِيْدٌ فِيْهِ نَاقِصٌ verbs",
                "headers": [
                  "صِيْغَةٌ",
                  "صَلَّى (II)",
                  "نَادَى (III)",
                  "أَبْقَى (IV)",
                  "تَلَقَّى (V)",
                  "تَلَاقَى (VI)",
                  "اِنْقَضَى (VII)",
                  "اِبْتَلَى (VIII)",
                  "اِسْتَعْلَى (X)"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "يُصَلَّى",
                    "يُنَادَى",
                    "يُبْقَى",
                    "يُتَلَقَّى",
                    "يُتَلَاقَى",
                    "—",
                    "يُبْتَلَى",
                    "يُسْتَعْلَى"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "يُصَلَّيَانِ",
                    "يُنَادَيَانِ",
                    "يُبْقَيَانِ",
                    "يُتَلَقَّيَانِ",
                    "يُتَلَاقَيَانِ",
                    "—",
                    "يُبْتَلَيَانِ",
                    "يُسْتَعْلَيَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "يُصَلَّوْنَ",
                    "يُنَادَوْنَ",
                    "يُبْقَوْنَ",
                    "يُتَلَقَّوْنَ",
                    "يُتَلَاقَوْنَ",
                    "—",
                    "يُبْتَلَوْنَ",
                    "يُسْتَعْلَوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "تُصَلَّى",
                    "تُنَادَى",
                    "تُبْقَى",
                    "تُتَلَقَّى",
                    "تُتَلَاقَى",
                    "—",
                    "تُبْتَلَى",
                    "تُسْتَعْلَى"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "تُصَلَّيَانِ",
                    "تُنَادَيَانِ",
                    "تُبْقَيَانِ",
                    "تُتَلَقَّيَانِ",
                    "تُتَلَاقَيَانِ",
                    "—",
                    "تُبْتَلَيَانِ",
                    "تُسْتَعْلَيَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "يُصَلَّيْنَ",
                    "يُنَادَيْنَ",
                    "يُبْقَيْنَ",
                    "يُتَلَقَّيْنَ",
                    "يُتَلَاقَيْنَ",
                    "—",
                    "يُبْتَلَيْنَ",
                    "يُسْتَعْلَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "تُصَلَّى",
                    "تُنَادَى",
                    "تُبْقَى",
                    "تُتَلَقَّى",
                    "تُتَلَاقَى",
                    "—",
                    "تُبْتَلَى",
                    "تُسْتَعْلَى"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تُصَلَّيَانِ",
                    "تُنَادَيَانِ",
                    "تُبْقَيَانِ",
                    "تُتَلَقَّيَانِ",
                    "تُتَلَاقَيَانِ",
                    "—",
                    "تُبْتَلَيَانِ",
                    "تُسْتَعْلَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تُصَلَّوْنَ",
                    "تُنَادَوْنَ",
                    "تُبْقَوْنَ",
                    "تُتَلَقَّوْنَ",
                    "تُتَلَاقَوْنَ",
                    "—",
                    "تُبْتَلَوْنَ",
                    "تُسْتَعْلَوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تُصَلَّيْنَ",
                    "تُنَادَيْنَ",
                    "تُبْقَيْنَ",
                    "تُتَلَقَّيْنَ",
                    "تُتَلَاقَيْنَ",
                    "—",
                    "تُبْتَلَيْنَ",
                    "تُسْتَعْلَيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تُصَلَّيَانِ",
                    "تُنَادَيَانِ",
                    "تُبْقَيَانِ",
                    "تُتَلَقَّيَانِ",
                    "تُتَلَاقَيَانِ",
                    "—",
                    "تُبْتَلَيَانِ",
                    "تُسْتَعْلَيَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تُصَلَّيْنَ",
                    "تُنَادَيْنَ",
                    "تُبْقَيْنَ",
                    "تُتَلَقَّيْنَ",
                    "تُتَلَاقَيْنَ",
                    "—",
                    "تُبْتَلَيْنَ",
                    "تُسْتَعْلَيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أُصَلَّى",
                    "أُنَادَى",
                    "أُبْقَى",
                    "أُتَلَقَّى",
                    "أُتَلَاقَى",
                    "—",
                    "أُبْتَلَى",
                    "أُسْتَعْلَى"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "نُصَلَّى",
                    "نُنَادَى",
                    "نُبْقَى",
                    "نُتَلَقَّى",
                    "نُتَلَاقَى",
                    "—",
                    "نُبْتَلَى",
                    "نُسْتَعْلَى"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In the table above, every الْمُضَارِعُ الْمَجْهُوْلُ verb ends in…",
            "kind": "mcq",
            "options": [
              "an أَلِفٌ, because the لَامُ الْكَلِمَةِ always carries a فَتْحَةٌ",
              "a يَاءٌ, as in the active",
              "a وَاوٌ",
              "a sukun on the last root letter"
            ],
            "correct": 0
          }
        },
        {
          "heading": "اَلْأَمْرُ (p. 214)",
          "lines": [
            {
              "html": "The <bdi>أَمْرٌ</bdi> is built on the <bdi>مَجْزُوْمٌ مُضَارِعٌ</bdi>, so the final weak letter is dropped in <bdi>الْمُخَاطَبُ</bdi>: <bdi>صَلِّ، نَادِ، أَبْقِ، تَلَقَّ، تَلَاقَ، اِنْقَضِ، اِبْتَلِ، اِسْتَعْلِ</bdi>. The remaining <bdi>حَرَكَةٌ</bdi> on the <bdi>لَامُ الْكَلِمَةِ</bdi> shows which letter was dropped.",
              "list": false
            },
            {
              "table": {
                "title": "اَلْأَمْرُ — the eight مَزِيْدٌ فِيْهِ نَاقِصٌ verbs (p. 214)",
                "headers": [
                  "صِيْغَةٌ",
                  "صَلَّى (II)",
                  "نَادَى (III)",
                  "أَبْقَى (IV)",
                  "تَلَقَّى (V)",
                  "تَلَاقَى (VI)",
                  "اِنْقَضَى (VII)",
                  "اِبْتَلَى (VIII)",
                  "اِسْتَعْلَى (X)"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "صَلِّ",
                    "نَادِ",
                    "أَبْقِ",
                    "تَلَقَّ",
                    "تَلَاقَ",
                    "اِنْقَضِ",
                    "اِبْتَلِ",
                    "اِسْتَعْلِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "صَلِّيَا",
                    "نَادِيَا",
                    "أَبْقِيَا",
                    "تَلَقَّيَا",
                    "تَلَاقَيَا",
                    "اِنْقَضِيَا",
                    "اِبْتَلِيَا",
                    "اِسْتَعْلِيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "صَلُّوْا",
                    "نَادُوْا",
                    "أَبْقُوْا",
                    "تَلَقَّوْا",
                    "تَلَاقَوْا",
                    "اِنْقَضُوْا",
                    "اِبْتَلُوْا",
                    "اِسْتَعْلُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "صَلِّيْ",
                    "نَادِيْ",
                    "أَبْقِيْ",
                    "تَلَقَّيْ",
                    "تَلَاقَيْ",
                    "اِنْقَضِيْ",
                    "اِبْتَلِيْ",
                    "اِسْتَعْلِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "صَلِّيَا",
                    "نَادِيَا",
                    "أَبْقِيَا",
                    "تَلَقَّيَا",
                    "تَلَاقَيَا",
                    "اِنْقَضِيَا",
                    "اِبْتَلِيَا",
                    "اِسْتَعْلِيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "صَلِّيْنَ",
                    "نَادِيْنَ",
                    "أَبْقِيْنَ",
                    "تَلَقَّيْنَ",
                    "تَلَاقَيْنَ",
                    "اِنْقَضِيْنَ",
                    "اِبْتَلِيْنَ",
                    "اِسْتَعْلِيْنَ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "The أَمْرُ (m/s) forms of these verbs all share which feature?",
            "kind": "mcq",
            "options": [
              "The final weak letter is dropped, leaving the حَرَكَةٌ that shows which letter it was",
              "They all end in a يَاءٌ",
              "They all begin with a هَمْزَةُ الْوَصْلِ",
              "They are identical to the الْمُضَارِعُ الْمَعْلُوْمُ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "النَّهْيُ (p. 214)",
          "lines": [
            {
              "html": "<bdi>النَّهْيُ</bdi> is <bdi>لَا</bdi> + the <bdi>مَجْزُوْمٌ مُضَارِعٌ</bdi> of <bdi>الْمُخَاطَبُ</bdi>, and so it loses the same letters as the <bdi>أَمْرٌ</bdi>: <bdi>لَا تُصَلِّ، لَا تُنَادِ، لَا تُبْقِ، لَا تَتَلَقَّ، لَا تَتَلَاقَ، لَا تَنْقَضِ، لَا تَبْتَلِ، لَا تَسْتَعْلِ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "النَّهْيُ — the eight مَزِيْدٌ فِيْهِ نَاقِصٌ verbs (p. 214)",
                "headers": [
                  "صِيْغَةٌ",
                  "صَلَّى (II)",
                  "نَادَى (III)",
                  "أَبْقَى (IV)",
                  "تَلَقَّى (V)",
                  "تَلَاقَى (VI)",
                  "اِنْقَضَى (VII)",
                  "اِبْتَلَى (VIII)",
                  "اِسْتَعْلَى (X)"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "لَا تُصَلِّ",
                    "لَا تُنَادِ",
                    "لَا تُبْقِ",
                    "لَا تَتَلَقَّ",
                    "لَا تَتَلَاقَ",
                    "لَا تَنْقَضِ",
                    "لَا تَبْتَلِ",
                    "لَا تَسْتَعْلِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "لَا تُصَلِّيَا",
                    "لَا تُنَادِيَا",
                    "لَا تُبْقِيَا",
                    "لَا تَتَلَقَّيَا",
                    "لَا تَتَلَاقَيَا",
                    "لَا تَنْقَضِيَا",
                    "لَا تَبْتَلِيَا",
                    "لَا تَسْتَعْلِيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "لَا تُصَلُّوْا",
                    "لَا تُنَادُوْا",
                    "لَا تُبْقُوْا",
                    "لَا تَتَلَقَّوْا",
                    "لَا تَتَلَاقَوْا",
                    "لَا تَنْقَضُوْا",
                    "لَا تَبْتَلُوْا",
                    "لَا تَسْتَعْلُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "لَا تُصَلِّيْ",
                    "لَا تُنَادِيْ",
                    "لَا تُبْقِيْ",
                    "لَا تَتَلَقَّيْ",
                    "لَا تَتَلَاقَيْ",
                    "لَا تَنْقَضِيْ",
                    "لَا تَبْتَلِيْ",
                    "لَا تَسْتَعْلِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "لَا تُصَلِّيَا",
                    "لَا تُنَادِيَا",
                    "لَا تُبْقِيَا",
                    "لَا تَتَلَقَّيَا",
                    "لَا تَتَلَاقَيَا",
                    "لَا تَنْقَضِيَا",
                    "لَا تَبْتَلِيَا",
                    "لَا تَسْتَعْلِيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "لَا تُصَلِّيْنَ",
                    "لَا تُنَادِيْنَ",
                    "لَا تُبْقِيْنَ",
                    "لَا تَتَلَقَّيْنَ",
                    "لَا تَتَلَاقَيْنَ",
                    "لَا تَنْقَضِيْنَ",
                    "لَا تَبْتَلِيْنَ",
                    "لَا تَسْتَعْلِيْنَ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the correct identification of لَا تَتَلَقَّ — its verb, بَابٌ and صِيْغَةٌ?",
            "kind": "mcq",
            "options": [
              "تَلَقَّى — بَاب تَفَعُّل (V) — الْمُخَاطَبُ مِنَ النَّهْيِ: Do not receive!",
              "اِنْقَضَى — بَاب اِنْفِعَال (VII) — جَمْعُ الْمُؤَنَّثِ مِنَ اسْمِ الْفَاعِلِ: things (f/p) that come to an end",
              "نَادَى — بَاب مُفَاعَلَة (III) — الْمُثَنَّاةُ مِنَ اسْمِ الْمَفْعُوْلِ: two (f) who are called out to",
              "تَلَاقَى — بَاب تَفَاعُل (VI) — الْغَائِبَتَانِ مِنَ الْمَاضِيْ الْمَجْهُوْلِ: They (f/dual) were brought together"
            ],
            "correct": 0
          }
        },
        {
          "heading": "اِسْمُ الْفَاعِلِ",
          "lines": [
            {
              "html": "In the masculine singular the <bdi>يَاءٌ</bdi> of the <bdi>اِسْمُ الْفَاعِلِ</bdi> drops and the word takes <bdi>تَنْوِيْنُ كَسْرٍ</bdi>: <bdi>مُصَلٍّ، مُنَادٍ، مُبْقٍ، مُتَلَقٍّ، مُتَلَاقٍ، مُنْقَضٍ، مُبْتَلٍ، مُسْتَعْلٍ</bdi>. The <bdi>يَاءٌ</bdi> reappears in the dual and in all the feminine forms.",
              "list": false
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ — the eight مَزِيْدٌ فِيْهِ نَاقِصٌ verbs",
                "headers": [
                  "صِيْغَةٌ",
                  "صَلَّى (II)",
                  "نَادَى (III)",
                  "أَبْقَى (IV)",
                  "تَلَقَّى (V)",
                  "تَلَاقَى (VI)",
                  "اِنْقَضَى (VII)",
                  "اِبْتَلَى (VIII)",
                  "اِسْتَعْلَى (X)"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُصَلٍّ",
                    "مُنَادٍ",
                    "مُبْقٍ",
                    "مُتَلَقٍّ",
                    "مُتَلَاقٍ",
                    "مُنْقَضٍ",
                    "مُبْتَلٍ",
                    "مُسْتَعْلٍ"
                  ],
                  [
                    "Dual (m)",
                    "مُصَلِّيَانِ",
                    "مُنَادِيَانِ",
                    "مُبْقِيَانِ",
                    "مُتَلَقِّيَانِ",
                    "مُتَلَاقِيَانِ",
                    "مُنْقَضِيَانِ",
                    "مُبْتَلِيَانِ",
                    "مُسْتَعْلِيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُصَلُّوْنَ",
                    "مُنَادُوْنَ",
                    "مُبْقُوْنَ",
                    "مُتَلَقُّوْنَ",
                    "مُتَلَاقُوْنَ",
                    "مُنْقَضُوْنَ",
                    "مُبْتَلُوْنَ",
                    "مُسْتَعْلُوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُصَلِّيَةٌ",
                    "مُنَادِيَةٌ",
                    "مُبْقِيَةٌ",
                    "مُتَلَقِّيَةٌ",
                    "مُتَلَاقِيَةٌ",
                    "مُنْقَضِيَةٌ",
                    "مُبْتَلِيَةٌ",
                    "مُسْتَعْلِيَةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُصَلِّيَتَانِ",
                    "مُنَادِيَتَانِ",
                    "مُبْقِيَتَانِ",
                    "مُتَلَقِّيَتَانِ",
                    "مُتَلَاقِيَتَانِ",
                    "مُنْقَضِيَتَانِ",
                    "مُبْتَلِيَتَانِ",
                    "مُسْتَعْلِيَتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُصَلِّيَاتٌ",
                    "مُنَادِيَاتٌ",
                    "مُبْقِيَاتٌ",
                    "مُتَلَقِّيَاتٌ",
                    "مُتَلَاقِيَاتٌ",
                    "مُنْقَضِيَاتٌ",
                    "مُبْتَلِيَاتٌ",
                    "مُسْتَعْلِيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "The masculine singular اِسْمُ الْفَاعِلِ of these verbs, shown above…",
            "kind": "mcq",
            "options": [
              "drops its يَاءٌ and takes تَنْوِيْنُ كَسْرٍ — مُصَلٍّ، مُنَادٍ، مُبْقٍ",
              "keeps its يَاءٌ — مُصَلِّيٌ، مُنَادِيٌ، مُبْقِيٌ",
              "ends in an أَلِفٌ with تَنْوِيْنُ فَتْحٍ — مُصَلًّى، مُنَادًى",
              "is identical to the اِسْمُ الْمَفْعُوْلِ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "اِسْمُ الْمَفْعُوْلِ (p. 215)",
          "lines": [
            {
              "html": "The <bdi>اِسْمُ الْمَفْعُوْلِ</bdi> mirrors the passive: the masculine singular ends in an <bdi>أَلِفٌ</bdi> with <bdi>تَنْوِيْنُ فَتْحٍ</bdi> (<bdi>مُصَلًّى، مُنَادًى، مُبْقًى</bdi>…) and the feminine singular takes the <bdi>ـَاةٌ</bdi> ending (<bdi>مُصَلَّاةٌ، مُنَادَاةٌ، مُبْقَاةٌ</bdi>…). <bdi>اِنْقَضَى</bdi>, being <bdi>لَازِمٌ</bdi>, has none.",
              "list": false
            },
            {
              "table": {
                "title": "اِسْمُ الْمَفْعُوْلِ — the eight مَزِيْدٌ فِيْهِ نَاقِصٌ verbs (p. 215)",
                "headers": [
                  "صِيْغَةٌ",
                  "صَلَّى (II)",
                  "نَادَى (III)",
                  "أَبْقَى (IV)",
                  "تَلَقَّى (V)",
                  "تَلَاقَى (VI)",
                  "اِنْقَضَى (VII)",
                  "اِبْتَلَى (VIII)",
                  "اِسْتَعْلَى (X)"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُصَلًّى",
                    "مُنَادًى",
                    "مُبْقًى",
                    "مُتَلَقًّى",
                    "مُتَلَاقًى",
                    "—",
                    "مُبْتَلًى",
                    "مُسْتَعْلًى"
                  ],
                  [
                    "Dual (m)",
                    "مُصَلَّيَانِ",
                    "مُنَادَيَانِ",
                    "مُبْقَيَانِ",
                    "مُتَلَقَّيَانِ",
                    "مُتَلَاقَيَانِ",
                    "—",
                    "مُبْتَلَيَانِ",
                    "مُسْتَعْلَيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُصَلَّوْنَ",
                    "مُنَادَوْنَ",
                    "مُبْقَوْنَ",
                    "مُتَلَقَّوْنَ",
                    "مُتَلَاقَوْنَ",
                    "—",
                    "مُبْتَلَوْنَ",
                    "مُسْتَعْلَوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُصَلَّاةٌ",
                    "مُنَادَاةٌ",
                    "مُبْقَاةٌ",
                    "مُتَلَقَّاةٌ",
                    "مُتَلَاقَاةٌ",
                    "—",
                    "مُبْتَلَاةٌ",
                    "مُسْتَعْلَاةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُصَلَّاتَانِ",
                    "مُنَادَاتَانِ",
                    "مُبْقَاتَانِ",
                    "مُتَلَقَّاتَانِ",
                    "مُتَلَاقَاتَانِ",
                    "—",
                    "مُبْتَلَاتَانِ",
                    "مُسْتَعْلَاتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُصَلَّيَاتٌ",
                    "مُنَادَيَاتٌ",
                    "مُبْقَيَاتٌ",
                    "مُتَلَقَّيَاتٌ",
                    "مُتَلَاقَيَاتٌ",
                    "—",
                    "مُبْتَلَيَاتٌ",
                    "مُسْتَعْلَيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the correct identification of مُنَادَاتَانِ — its verb, بَابٌ and صِيْغَةٌ?",
            "kind": "mcq",
            "options": [
              "نَادَى — بَاب مُفَاعَلَة (III) — الْمُثَنَّاةُ مِنَ اسْمِ الْمَفْعُوْلِ: two (f) who are called out to",
              "تَلَاقَى — بَاب تَفَاعُل (VI) — الْغَائِبَتَانِ مِنَ الْمَاضِيْ الْمَجْهُوْلِ: They (f/dual) were brought together",
              "اِنْقَضَى — بَاب اِنْفِعَال (VII) — الْغَائِبُوْنَ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ: They (m/p) come to an end",
              "أَبْقَى — بَاب إِفْعَال (IV) — الْمُخَاطَبَاتُ مِنَ الْمَاضِيْ الْمَجْهُوْلِ: You (f/p) were kept"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Review at a glance — الْمَزِيْدُ فِيْهِ مِنَ النَّاقِصِ",
        "rows": [
          {
            "label": "بَاب تَفْعِيْل (II), to perform salah",
            "arabic": "صَلَّى — يُصَلِّيْ — صُلِّيَ — يُصَلَّى — صَلِّ — لَا تُصَلِّ — مُصَلٍّ — مُصَلًّى",
            "meaning": "بَاب تَفْعِيْل (II), to perform salah",
            "unlockAt": 0
          },
          {
            "label": "بَاب مُفَاعَلَة (III), to call out",
            "arabic": "نَادَى — يُنَادِيْ — نُوْدِيَ — يُنَادَى — نَادِ — لَا تُنَادِ — مُنَادٍ — مُنَادًى",
            "meaning": "بَاب مُفَاعَلَة (III), to call out",
            "unlockAt": 1
          },
          {
            "label": "بَاب إِفْعَال (IV), to keep",
            "arabic": "أَبْقَى — يُبْقِيْ — أُبْقِيَ — يُبْقَى — أَبْقِ — لَا تُبْقِ — مُبْقٍ — مُبْقًى",
            "meaning": "بَاب إِفْعَال (IV), to keep",
            "unlockAt": 2
          },
          {
            "label": "بَاب تَفَعُّل (V), to receive",
            "arabic": "تَلَقَّى — يَتَلَقَّى — تُلُقِّيَ — يُتَلَقَّى — تَلَقَّ — لَا تَتَلَقَّ — مُتَلَقٍّ — مُتَلَقًّى",
            "meaning": "بَاب تَفَعُّل (V), to receive",
            "unlockAt": 3
          },
          {
            "label": "بَاب تَفَاعُل (VI), to come/get together",
            "arabic": "تَلَاقَى — يَتَلَاقَى — تُلُوْقِيَ — يُتَلَاقَى — تَلَاقَ — لَا تَتَلَاقَ — مُتَلَاقٍ — مُتَلَاقًى",
            "meaning": "بَاب تَفَاعُل (VI), to come/get together",
            "unlockAt": 4
          },
          {
            "label": "بَاب اِنْفِعَال (VII), to be over/finished — لَازِمٌ, no passive and no اِسْمُ الْمَفْعُوْلِ",
            "arabic": "اِنْقَضَى — يَنْقَضِيْ — (لَا مَجْهُوْلَ) — اِنْقَضِ — لَا تَنْقَضِ — مُنْقَضٍ",
            "meaning": "بَاب اِنْفِعَال (VII), to be over/finished — لَازِمٌ, no passive and no اِسْمُ الْمَفْعُوْلِ",
            "unlockAt": 5
          },
          {
            "label": "بَاب اِفْتِعَال (VIII), to put to the test",
            "arabic": "اِبْتَلَى — يَبْتَلِيْ — اُبْتُلِيَ — يُبْتَلَى — اِبْتَلِ — لَا تَبْتَلِ — مُبْتَلٍ — مُبْتَلًى",
            "meaning": "بَاب اِفْتِعَال (VIII), to put to the test",
            "unlockAt": 6
          },
          {
            "label": "بَاب اِسْتِفْعَال (X), to rise",
            "arabic": "اِسْتَعْلَى — يَسْتَعْلِيْ — اُسْتُعْلِيَ — يُسْتَعْلَى — اِسْتَعْلِ — لَا تَسْتَعْلِ — مُسْتَعْلٍ — مُسْتَعْلًى",
            "meaning": "بَاب اِسْتِفْعَال (X), to rise",
            "unlockAt": 7
          }
        ]
      },
      "quiz": [
        {
          "q": "Across the review tables, which two verbs end in an أَلِفٌ (not a يَاءٌ) in the الْمُضَارِعُ الْمَعْلُوْمُ?",
          "options": [
            "تَلَقَّى (V) and تَلَاقَى (VI)",
            "صَلَّى (II) and نَادَى (III)",
            "اِنْقَضَى (VII) and اِبْتَلَى (VIII)",
            "أَبْقَى (IV) and اِسْتَعْلَى (X)"
          ],
          "correct": 0,
          "explanation": "يَتَلَقَّى and يَتَلَاقَى end in an أَلِفٌ. All six other verbs end in a يَاءٌ: يُصَلِّيْ، يُنَادِيْ، يُبْقِيْ، يَنْقَضِيْ، يَبْتَلِيْ، يَسْتَعْلِيْ."
        },
        {
          "q": "Which column of the review is left completely blank?",
          "options": [
            "الْمَاضِيْ الْمَجْهُوْلُ and الْمُضَارِعُ الْمَجْهُوْلُ of اِنْقَضَى",
            "اَلْأَمْرُ of اِنْقَضَى",
            "اِسْمُ الْفَاعِلِ of اِنْقَضَى",
            "الْمُضَارِعُ الْمَعْلُوْمُ of تَلَاقَى"
          ],
          "correct": 0,
          "explanation": "اِنْقَضَى (بَاب اِنْفِعَال) is لَازِمٌ, so it has no مَجْهُوْلٌ at all and no اِسْمُ الْمَفْعُوْلِ. It does have an أَمْرٌ (اِنْقَضِ) and an اِسْمُ الْفَاعِلِ (مُنْقَضٍ)."
        },
        {
          "q": "In the الْمُضَارِعُ الْمَجْهُوْلُ table, every verb ends in…",
          "options": [
            "an أَلِفٌ, because the لَامُ الْكَلِمَةِ always carries a فَتْحَةٌ",
            "a يَاءٌ, as in the active",
            "a وَاوٌ",
            "a sukun on the last root letter"
          ],
          "correct": 0,
          "explanation": "يُصَلَّى، يُنَادَى، يُبْقَى، يُتَلَقَّى، يُتَلَاقَى، يُبْتَلَى، يُسْتَعْلَى — a فَتْحَةٌ before the weak letter turns it into an أَلِفٌ by قَلْبٌ."
        },
        {
          "q": "تُلُوْقِيْتُمْ belongs to which verb and صِيْغَةٌ?",
          "options": [
            "تَلَاقَى — الْمُخَاطَبُوْنَ مِنَ الْمَاضِيْ الْمَجْهُوْلِ",
            "تَلَقَّى — الْمُخَاطَبُوْنَ مِنَ الْمَاضِيْ الْمَجْهُوْلِ",
            "تَلَاقَى — الْمُخَاطَبُوْنَ مِنَ الْمَاضِيْ الْمَعْلُوْمِ",
            "لَاقَى — الْغَائِبُوْنَ مِنَ الْمَاضِيْ الْمَجْهُوْلِ"
          ],
          "correct": 0,
          "explanation": "The وَاوٌ in تُلُوْقِيْـ is the tell-tale of بَاب تَفَاعُل in the passive (تُفُوْعِلَ). تَلَقَّى (V) would give تُلُقِّيْتُمْ, and the active is تَلَاقَيْتُمْ."
        },
        {
          "q": "Why are تُصَلِّيْنَ (الْمُخَاطَبَةُ) and تُصَلِّيْنَ (الْمُخَاطَبَاتُ) printed in bold?",
          "options": [
            "Because the two صِيْغَتَانِ end up identical after تَسْكِيْنٌ and حَذْفٌ",
            "Because both are irregular exceptions to the بَابٌ",
            "Because both are passive forms",
            "Because the نُوْنٌ is dropped in both"
          ],
          "correct": 0,
          "explanation": "تُصَلِّيِيْنَ → تُصَلِّيْيْنَ → تُصَلِّيْنَ for the feminine singular, which then matches the unchanged feminine plural تُصَلِّيْنَ. Only context distinguishes them."
        },
        {
          "q": "The masculine singular اِسْمُ الْفَاعِلِ of these verbs…",
          "options": [
            "drops its يَاءٌ and takes تَنْوِيْنُ كَسْرٍ — مُصَلٍّ، مُنَادٍ، مُبْقٍ",
            "keeps its يَاءٌ — مُصَلِّيٌ، مُنَادِيٌ، مُبْقِيٌ",
            "ends in an أَلِفٌ with تَنْوِيْنُ فَتْحٍ — مُصَلًّى، مُنَادًى",
            "is identical to the اِسْمُ الْمَفْعُوْلِ"
          ],
          "correct": 0,
          "explanation": "مُصَلٍّ، مُنَادٍ، مُبْقٍ، مُتَلَقٍّ، مُتَلَاقٍ، مُنْقَضٍ، مُبْتَلٍ، مُسْتَعْلٍ. The forms with تَنْوِيْنُ فَتْحٍ (مُصَلًّى…) are the اِسْمُ الْمَفْعُوْلِ."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "صَلَّوْا and صُلُّوْا differ how?",
          "options": [
            "صَلَّوْا is الْغَائِبُوْنَ of the ماضي معلوم; صُلُّوْا is the same صِيْغَةٌ of the ماضي مجهول",
            "صَلَّوْا is the أمر; صُلُّوْا is the ماضي",
            "صَلَّوْا is the مضارع; صُلُّوْا is the ماضي",
            "They are two spellings of the same word"
          ],
          "correct": 0,
          "explanation": "The فَتْحَةٌ/ضَمَّةٌ on the first letter marks معلوم vs مجهول: صَلَّوْا 'they prayed', صُلُّوْا 'they were prayed over'. The plural أمر is صَلُّوْا."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which of these is the الْمُتَكَلِّمُ of the الْمُضَارِعُ الْمَعْلُوْمُ of اِبْتَلَى?",
          "options": [
            "أَبْتَلِيْ",
            "أُبْتَلَى",
            "اِبْتَلَيْتُ",
            "نَبْتَلِيْ"
          ],
          "correct": 0,
          "explanation": "أَبْتَلِيْ 'I put to the test'. أُبْتَلَى is the passive 'I am put to the test', اِبْتَلَيْتُ is the ماضي and نَبْتَلِيْ is الْمُتَكَلِّمُوْنَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The أَمْرُ (m/s) forms of these verbs all share which feature?",
          "options": [
            "The final weak letter is dropped, leaving the حَرَكَةٌ that shows which letter it was",
            "They all end in a يَاءٌ",
            "They all begin with a هَمْزَةُ الْوَصْلِ",
            "They are identical to the الْمُضَارِعُ الْمَعْلُوْمُ"
          ],
          "correct": 0,
          "explanation": "صَلِّ، نَادِ، أَبْقِ، تَلَقَّ، تَلَاقَ، اِنْقَضِ، اِبْتَلِ، اِسْتَعْلِ — the أَمْرٌ is built on the مَجْزُوْمٌ, so the weak letter is dropped. Only the VII/VIII/X forms begin with a هَمْزَةُ الْوَصْلِ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "مُتَلَاقَاةٌ and مُتَلَاقِيَةٌ are, respectively…",
          "options": [
            "the feminine singular اِسْمُ الْمَفْعُوْلِ and the feminine singular اِسْمُ الْفَاعِلِ of تَلَاقَى",
            "the feminine singular اِسْمُ الْفَاعِلِ and the feminine singular اِسْمُ الْمَفْعُوْلِ of تَلَاقَى",
            "the dual and the plural of the اِسْمُ الْفَاعِلِ",
            "the مَصْدَرُ and the اِسْمُ الْفَاعِلِ"
          ],
          "correct": 0,
          "explanation": "The اِسْمُ الْمَفْعُوْلِ feminine takes the ـَاةٌ ending (مُتَلَاقَاةٌ), while the اِسْمُ الْفَاعِلِ feminine keeps the يَاءٌ (مُتَلَاقِيَةٌ)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which passive past form shows a وَاوٌ where the active has an أَلِفٌ?",
          "options": [
            "نُوْدِيَ (from نَادَى)",
            "صُلِّيَ (from صَلَّى)",
            "أُبْقِيَ (from أَبْقَى)",
            "اُبْتُلِيَ (from اِبْتَلَى)"
          ],
          "correct": 0,
          "explanation": "بَاب مُفَاعَلَة forms its passive on فُوْعِلَ, so نَادَى → نُوْدِيَ. تَلَاقَى → تُلُوْقِيَ works the same way; the others simply take a ضَمَّةٌ + كَسْرَةٌ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "How many of the eight verbs in this review have an اِسْمُ الْمَفْعُوْلِ?",
          "options": [
            "Seven",
            "Eight",
            "Six",
            "Five"
          ],
          "correct": 0,
          "explanation": "All except اِنْقَضَى, which is لَازِمٌ; its اِسْمُ الْمَفْعُوْلِ cell is blank."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "تَنْقَضِيْنَ could be which صِيْغَةٌ?",
          "options": [
            "Either الْمُخَاطَبَةُ or الْمُخَاطَبَاتُ of the مضارع معلوم",
            "Only الْغَائِبَاتُ",
            "Only the نَهْيُ",
            "Only الْمُخَاطَبَاتُ"
          ],
          "correct": 0,
          "explanation": "After تَسْكِيْنٌ and حَذْفٌ the feminine singular becomes identical to the unchanged feminine plural — one of the bolded pairs in that table."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "اُسْتُعْلِيَتَا is…",
          "options": [
            "الْغَائِبَتَانِ مِنَ الْمَاضِيْ الْمَجْهُوْلِ of اِسْتَعْلَى",
            "الْغَائِبَتَانِ مِنَ الْمَاضِيْ الْمَعْلُوْمِ of اِسْتَعْلَى",
            "الْمُخَاطَبَتَانِ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ of اِسْتَعْلَى",
            "الْغَائِبَتَانِ مِنَ الْمَاضِيْ الْمَجْهُوْلِ of اِبْتَلَى"
          ],
          "correct": 0,
          "explanation": "The ضَمَّةٌ–ضَمَّةٌ–كَسْرَةٌ pattern اُسْتُعْلِيَ marks بَاب اِسْتِفْعَال in the passive; ـَتَا is the feminine dual ending. The active would be اِسْتَعْلَتَا."
        },
        {
          "title": "to perform salah",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to perform salah\"?",
          "options": [
            "صَلَّى يُصَلِّيْ",
            "نَادَى يُنَادِيْ",
            "أَبْقَى يُبْقِيْ",
            "تَلَقَّى يَتَلَقَّى"
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
            "to call out",
            "to keep",
            "to receive"
          ],
          "correct": 0
        },
        {
          "title": "to perform salah (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَلَّى يُصَلِّيْ?",
          "options": [
            "تَصْلِيَةً",
            "مُنَادَاةً",
            "إِبْقَاءً",
            "تَلَقِّيًا"
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
            "أَبْقَى يُبْقِيْ",
            "تَلَقَّى يَتَلَقَّى",
            "تَلَاقَى يَتَلَاقَى"
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
            "to keep",
            "to receive",
            "to come/get together"
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
            "إِبْقَاءً",
            "تَلَقِّيًا",
            "تَلَاقِيًا"
          ],
          "correct": 0
        },
        {
          "title": "to keep",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to keep\"?",
          "options": [
            "أَبْقَى يُبْقِيْ",
            "تَلَقَّى يَتَلَقَّى",
            "تَلَاقَى يَتَلَاقَى",
            "اِنْقَضَى يَنْقَضِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to keep",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبْقَى يُبْقِيْ mean?",
          "options": [
            "to keep",
            "to receive",
            "to come/get together",
            "to be over/finished"
          ],
          "correct": 0
        },
        {
          "title": "to keep (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَبْقَى يُبْقِيْ?",
          "options": [
            "إِبْقَاءً",
            "تَلَقِّيًا",
            "تَلَاقِيًا",
            "اِنْقِضَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to receive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to receive\"?",
          "options": [
            "تَلَقَّى يَتَلَقَّى",
            "تَلَاقَى يَتَلَاقَى",
            "اِنْقَضَى يَنْقَضِيْ",
            "اِبْتَلَى يَبْتَلِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to receive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَلَقَّى يَتَلَقَّى mean?",
          "options": [
            "to receive",
            "to come/get together",
            "to be over/finished",
            "to put to the test"
          ],
          "correct": 0
        },
        {
          "title": "to receive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَلَقَّى يَتَلَقَّى?",
          "options": [
            "تَلَقِّيًا",
            "تَلَاقِيًا",
            "اِنْقِضَاءً",
            "اِبْتِلَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to come/get together",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to come/get together\"?",
          "options": [
            "تَلَاقَى يَتَلَاقَى",
            "اِنْقَضَى يَنْقَضِيْ",
            "اِبْتَلَى يَبْتَلِيْ",
            "اِسْتَعْلَى يَسْتَعْلِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to come/get together",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَلَاقَى يَتَلَاقَى mean?",
          "options": [
            "to come/get together",
            "to be over/finished",
            "to put to the test",
            "to rise"
          ],
          "correct": 0
        },
        {
          "title": "to come/get together (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَلَاقَى يَتَلَاقَى?",
          "options": [
            "تَلَاقِيًا",
            "اِنْقِضَاءً",
            "اِبْتِلَاءً",
            "اِسْتِعْلَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to be over/finished",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be over/finished\"?",
          "options": [
            "اِنْقَضَى يَنْقَضِيْ",
            "اِبْتَلَى يَبْتَلِيْ",
            "اِسْتَعْلَى يَسْتَعْلِيْ",
            "صَلَّى يُصَلِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "to be over/finished",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْقَضَى يَنْقَضِيْ mean?",
          "options": [
            "to be over/finished",
            "to put to the test",
            "to rise",
            "to perform salah"
          ],
          "correct": 0
        },
        {
          "title": "to be over/finished (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْقَضَى يَنْقَضِيْ?",
          "options": [
            "اِنْقِضَاءً",
            "اِبْتِلَاءً",
            "اِسْتِعْلَاءً",
            "تَصْلِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to put to the test",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to put to the test\"?",
          "options": [
            "اِبْتَلَى يَبْتَلِيْ",
            "اِسْتَعْلَى يَسْتَعْلِيْ",
            "صَلَّى يُصَلِّيْ",
            "نَادَى يُنَادِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to put to the test",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِبْتَلَى يَبْتَلِيْ mean?",
          "options": [
            "to put to the test",
            "to rise",
            "to perform salah",
            "to call out"
          ],
          "correct": 0
        },
        {
          "title": "to put to the test (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِبْتَلَى يَبْتَلِيْ?",
          "options": [
            "اِبْتِلَاءً",
            "اِسْتِعْلَاءً",
            "تَصْلِيَةً",
            "مُنَادَاةً"
          ],
          "correct": 0
        },
        {
          "title": "to rise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to rise\"?",
          "options": [
            "اِسْتَعْلَى يَسْتَعْلِيْ",
            "صَلَّى يُصَلِّيْ",
            "نَادَى يُنَادِيْ",
            "أَبْقَى يُبْقِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to rise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَعْلَى يَسْتَعْلِيْ mean?",
          "options": [
            "to rise",
            "to perform salah",
            "to call out",
            "to keep"
          ],
          "correct": 0
        },
        {
          "title": "to rise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَعْلَى يَسْتَعْلِيْ?",
          "options": [
            "اِسْتِعْلَاءً",
            "تَصْلِيَةً",
            "مُنَادَاةً",
            "إِبْقَاءً"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l5",
      "title": "المراجعة",
      "subtitle": "Key terms, the master conjugation table, and the full unit vocabulary — no new material, just review",
      "concepts": [
        {
          "heading": "Unit 6 Summary",
          "lines": [
            {
              "html": "This is a cumulative review of Unit 6: every key term for <bdi>النَّاقِصُ</bdi>, the master <bdi>تَصْرِيْفٌ صَغِيْرٌ</bdi> table across all the <bdi>أَبْوَاب</bdi>, a comparison of the four <bdi>الثُّلَاثِيُّ الْمُجَرَّدُ</bdi> models, and the full unit-end verb vocabulary. Nothing here is new — the quiz below draws only on terms already taught, and the practice bank it unlocks is there to keep the vocabulary fresh.",
              "list": false
            },
            {
              "table": {
                "title": "Summary — التَّصْرِيْفُ الصَّغِيْرُ of every نَاقِصٌ verb of Unit 6 (p. 216)",
                "headers": [
                  "الْبَابُ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "فَتَحَ",
                    "سَعَى",
                    "يَسْعَى",
                    "سَعْيًا",
                    "سُعِيَ",
                    "يُسْعَى",
                    "سَعْيًا",
                    "اِسْعَ",
                    "لَا تَسْعَ",
                    "سَاعٍ",
                    "مَسْعِيٌّ"
                  ],
                  [
                    "سَمِعَ",
                    "رَضِيَ",
                    "يَرْضَى",
                    "رِضْوَانًا",
                    "رُضِيَ",
                    "يُرْضَى",
                    "رِضْوَانًا",
                    "اِرْضَ",
                    "لَا تَرْضَ",
                    "رَاضٍ",
                    "مَرْضِيٌّ"
                  ],
                  [
                    "ضَرَبَ",
                    "رَمَى",
                    "يَرْمِيْ",
                    "رَمْيًا",
                    "رُمِيَ",
                    "يُرْمَى",
                    "رَمْيًا",
                    "اِرْمِ",
                    "لَا تَرْمِ",
                    "رَامٍ",
                    "مَرْمِيٌّ"
                  ],
                  [
                    "نَصَرَ",
                    "دَعَا",
                    "يَدْعُوْ",
                    "دُعَاءً",
                    "دُعِيَ",
                    "يُدْعَى",
                    "دُعَاءً",
                    "أُدْعُ",
                    "لَا تَدْعُ",
                    "دَاعٍ",
                    "مَدْعُوٌّ"
                  ],
                  [
                    "تَفْعِيْلًا (II)",
                    "صَلَّى",
                    "يُصَلِّيْ",
                    "تَصْلِيَةً",
                    "صُلِّيَ",
                    "يُصَلَّى",
                    "تَصْلِيَةً",
                    "صَلِّ",
                    "لَا تُصَلِّ",
                    "مُصَلٍّ",
                    "مُصَلًّى"
                  ],
                  [
                    "مُفَاعَلَةً (III)",
                    "نَادَى",
                    "يُنَادِيْ",
                    "مُنَادَاةً",
                    "نُوْدِيَ",
                    "يُنَادَى",
                    "مُنَادَاةً",
                    "نَادِ",
                    "لَا تُنَادِ",
                    "مُنَادٍ",
                    "مُنَادًى"
                  ],
                  [
                    "إِفْعَالًا (IV)",
                    "أَبْقَى",
                    "يُبْقِيْ",
                    "إِبْقَاءً",
                    "أُبْقِيَ",
                    "يُبْقَى",
                    "إِبْقَاءً",
                    "أَبْقِ",
                    "لَا تُبْقِ",
                    "مُبْقٍ",
                    "مُبْقًى"
                  ],
                  [
                    "تَفَعُّلًا (V)",
                    "تَلَقَّى",
                    "يَتَلَقَّى",
                    "تَلَقِّيًا",
                    "تُلُقِّيَ",
                    "يُتَلَقَّى",
                    "تَلَقِّيًا",
                    "تَلَقَّ",
                    "لَا تَتَلَقَّ",
                    "مُتَلَقٍّ",
                    "مُتَلَقًّى"
                  ],
                  [
                    "تَفَاعُلًا (VI)",
                    "تَلَاقَى",
                    "يَتَلَاقَى",
                    "تَلَاقِيًا",
                    "تُلُوْقِيَ",
                    "يُتَلَاقَى",
                    "تَلَاقِيًا",
                    "تَلَاقَ",
                    "لَا تَتَلَاقَ",
                    "مُتَلَاقٍ",
                    "مُتَلَاقًى"
                  ],
                  [
                    "اِنْفِعَالًا (VII)",
                    "اِنْقَضَى",
                    "يَنْقَضِيْ",
                    "اِنْقِضَاءً",
                    "—",
                    "—",
                    "—",
                    "اِنْقَضِ",
                    "لَا تَنْقَضِ",
                    "مُنْقَضٍ",
                    "—"
                  ],
                  [
                    "اِفْتِعَالًا (VIII)",
                    "اِبْتَلَى",
                    "يَبْتَلِيْ",
                    "اِبْتِلَاءً",
                    "اُبْتُلِيَ",
                    "يُبْتَلَى",
                    "اِبْتِلَاءً",
                    "اِبْتَلِ",
                    "لَا تَبْتَلِ",
                    "مُبْتَلٍ",
                    "مُبْتَلًى"
                  ],
                  [
                    "اِسْتِفْعَالًا (X)",
                    "اِسْتَعْلَى",
                    "يَسْتَعْلِيْ",
                    "اِسْتِعْلَاءً",
                    "اُسْتُعْلِيَ",
                    "يُسْتَعْلَى",
                    "اِسْتِعْلَاءً",
                    "اِسْتَعْلِ",
                    "لَا تَسْتَعْلِ",
                    "مُسْتَعْلٍ",
                    "مُسْتَعْلًى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "The four ثُلَاثِيٌّ مُجَرَّدٌ models of النَّاقِصُ at a glance",
                "headers": [
                  "الْبَابُ",
                  "Model verb",
                  "Meaning",
                  "Weak لَامُ الْكَلِمَةِ"
                ],
                "rows": [
                  [
                    "فَتَحَ",
                    "سَعَى يَسْعَى سَعْيًا",
                    "to walk / to strive",
                    "يَاءٌ (أَلِفٌ in both tenses)"
                  ],
                  [
                    "سَمِعَ",
                    "رَضِيَ يَرْضَى رِضْوَانًا",
                    "to be satisfied",
                    "يَاءٌ (يَاءٌ in the مَاضِيْ, أَلِفٌ in the مُضَارِعُ)"
                  ],
                  [
                    "ضَرَبَ",
                    "رَمَى يَرْمِيْ رَمْيًا",
                    "to throw",
                    "يَاءٌ (أَلِفٌ in the مَاضِيْ, يَاءٌ in the مُضَارِعُ)"
                  ],
                  [
                    "نَصَرَ",
                    "دَعَا يَدْعُوْ دُعَاءً",
                    "to call",
                    "وَاوٌ (أَلِفٌ in the مَاضِيْ, وَاوٌ in the مُضَارِعُ)"
                  ]
                ]
              }
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "What does نَاقِصٌ mean?",
          "options": [
            "A مُعْتَلٌّ whose لَامُ الْكَلِمَةِ is a حَرْفُ عِلَّةٍ",
            "نَاقِصٌ whose weak letter is a وَاوٌ, e.g. يَدْعُوْ",
            "نَاقِصٌ whose weak letter is a يَاءٌ, e.g. يَرْمِيْ",
            "Removing the حَرَكَةٌ of a حَرْفُ عِلَّةٍ to make it سَاكِنٌ"
          ],
          "correct": 0
        },
        {
          "q": "What does نَاقِصٌ وَاوِيٌّ mean?",
          "options": [
            "نَاقِصٌ whose weak letter is a وَاوٌ, e.g. يَدْعُوْ",
            "نَاقِصٌ whose weak letter is a يَاءٌ, e.g. يَرْمِيْ",
            "Removing the حَرَكَةٌ of a حَرْفُ عِلَّةٍ to make it سَاكِنٌ",
            "Changing one letter into another, e.g. سَعَيَ ← سَعَى"
          ],
          "correct": 0
        },
        {
          "q": "What does نَاقِصٌ يَائِيٌّ mean?",
          "options": [
            "نَاقِصٌ whose weak letter is a يَاءٌ, e.g. يَرْمِيْ",
            "Removing the حَرَكَةٌ of a حَرْفُ عِلَّةٍ to make it سَاكِنٌ",
            "Changing one letter into another, e.g. سَعَيَ ← سَعَى",
            "Dropping a letter, e.g. يَدْعُوْنَ، الدَّاعِ"
          ],
          "correct": 0
        },
        {
          "q": "What does تَسْكِيْنٌ mean?",
          "options": [
            "Removing the حَرَكَةٌ of a حَرْفُ عِلَّةٍ to make it سَاكِنٌ",
            "Changing one letter into another, e.g. سَعَيَ ← سَعَى",
            "Dropping a letter, e.g. يَدْعُوْنَ، الدَّاعِ",
            "A weak letter (و، ي)"
          ],
          "correct": 0
        },
        {
          "q": "What does قَلْبٌ mean?",
          "options": [
            "Changing one letter into another, e.g. سَعَيَ ← سَعَى",
            "Dropping a letter, e.g. يَدْعُوْنَ، الدَّاعِ",
            "A weak letter (و، ي)",
            "Intransitive — a verb with no passive forms and no اِسْمُ الْمَفْعُوْلِ"
          ],
          "correct": 0
        },
        {
          "q": "What does حَذْفٌ mean?",
          "options": [
            "Dropping a letter, e.g. يَدْعُوْنَ، الدَّاعِ",
            "A weak letter (و، ي)",
            "Intransitive — a verb with no passive forms and no اِسْمُ الْمَفْعُوْلِ",
            "A verb with only its root letters"
          ],
          "correct": 0
        },
        {
          "q": "What does حَرْفُ الْعِلَّةِ mean?",
          "options": [
            "A weak letter (و، ي)",
            "Intransitive — a verb with no passive forms and no اِسْمُ الْمَفْعُوْلِ",
            "A verb with only its root letters",
            "A verb with additional letters"
          ],
          "correct": 0
        },
        {
          "q": "What does لَازِمٌ mean?",
          "options": [
            "Intransitive — a verb with no passive forms and no اِسْمُ الْمَفْعُوْلِ",
            "A verb with only its root letters",
            "A verb with additional letters",
            "A weak verb — one whose root contains a حَرْفُ عِلَّةٍ"
          ],
          "correct": 0
        },
        {
          "q": "What does الثُّلَاثِيُّ الْمُجَرَّدُ mean?",
          "options": [
            "A verb with only its root letters",
            "A verb with additional letters",
            "A weak verb — one whose root contains a حَرْفُ عِلَّةٍ",
            "A مُعْتَلٌّ whose لَامُ الْكَلِمَةِ is a حَرْفُ عِلَّةٍ"
          ],
          "correct": 0
        },
        {
          "q": "What does الْمَزِيْدُ فِيْهِ mean?",
          "options": [
            "A verb with additional letters",
            "A weak verb — one whose root contains a حَرْفُ عِلَّةٍ",
            "A مُعْتَلٌّ whose لَامُ الْكَلِمَةِ is a حَرْفُ عِلَّةٍ",
            "نَاقِصٌ whose weak letter is a وَاوٌ, e.g. يَدْعُوْ"
          ],
          "correct": 0
        },
        {
          "q": "What does مُعْتَلٌّ mean?",
          "options": [
            "A weak verb — one whose root contains a حَرْفُ عِلَّةٍ",
            "A مُعْتَلٌّ whose لَامُ الْكَلِمَةِ is a حَرْفُ عِلَّةٍ",
            "نَاقِصٌ whose weak letter is a وَاوٌ, e.g. يَدْعُوْ",
            "نَاقِصٌ whose weak letter is a يَاءٌ, e.g. يَرْمِيْ"
          ],
          "correct": 0
        },
        {
          "q": "According to the master summary table, which بَاب of the eight مَزِيْدٌ فِيْهِ أَبْوَاب has every مَجْهُوْلٌ cell and its اِسْمُ الْمَفْعُوْلِ cell left blank?",
          "options": [
            "اِنْفِعَالًا (VII) — اِنْقَضَى",
            "اِفْتِعَالًا (VIII) — اِبْتَلَى",
            "تَفَاعُلًا (VI) — تَلَاقَى",
            "اِسْتِفْعَالًا (X) — اِسْتَعْلَى"
          ],
          "correct": 0,
          "explanation": "اِنْقَضَى (بَاب اِنْفِعَال) is لَازِمٌ (intransitive), so the summary table leaves its الْمَاضِي الْمَجْهُوْلُ, الْمُضَارِعُ الْمَجْهُوْلُ, and اِسْمُ الْمَفْعُوْلِ cells as —."
        },
        {
          "q": "Among the four الثُّلَاثِيُّ الْمُجَرَّدُ model verbs (فَتَحَ، سَمِعَ، ضَرَبَ، نَصَرَ), which one writes its لَامُ الْكَلِمَةِ as an upright أَلِفٌ (ا) rather than the ى shape?",
          "options": [
            "نَصَرَ — دَعَا",
            "فَتَحَ — سَعَى",
            "سَمِعَ — رَضِيَ",
            "ضَرَبَ — رَمَى"
          ],
          "correct": 0,
          "explanation": "دَعَا (بَاب نَصَرَ), being نَاقِصٌ وَاوِيٌّ, is written with an upright أَلِفٌ; سَعَى، رَضِيَ، رَمَى are all نَاقِصٌ يَائِيٌّ and are written with the ى shape."
        },
        {
          "q": "Of the four الثُّلَاثِيُّ الْمُجَرَّدُ model verbs, how many have a يَاءٌ (not a وَاوٌ) as their weak لَامُ الْكَلِمَةِ?",
          "options": [
            "Three — سَعَى، رَضِيَ، رَمَى (only دَعَا's is a وَاوٌ)",
            "All four",
            "Two — سَعَى and رَضِيَ only",
            "One — رَمَى only"
          ],
          "correct": 0,
          "explanation": "The second summary table shows فَتَحَ (سَعَى), سَمِعَ (رَضِيَ) and ضَرَبَ (رَمَى) all rooted in a يَاءٌ; only نَصَرَ (دَعَا) is نَاقِصٌ وَاوِيٌّ."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "سَعْيًا: write الْغَائِبَانِ مِنَ الْمَاضِي الْمَعْلُوْمِ.",
          "options": [
            "سَعَيَا",
            "سَعَوْا",
            "يَسْعَيَانِ",
            "سُعِيَا"
          ],
          "correct": 0,
          "explanation": "سَعْيًا is the مَصْدَرٌ of سَعَى (بَاب فَتَحَ); الْغَائِبَانِ of the active مَاضِيْ is سَعَيَا. سُعِيَا is the passive."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "إِبْقَاءً: write الْمُخَاطَبَانِ مِنَ الْأَمْرِ.",
          "options": [
            "أَبْقِيَا",
            "أَبْقُوْا",
            "لَا تُبْقِيَا",
            "أَبْقَيَا"
          ],
          "correct": 0,
          "explanation": "إِبْقَاءً is the مَصْدَرٌ of أَبْقَى (بَاب إِفْعَال); the dual أَمْرٌ is أَبْقِيَا. لَا تُبْقِيَا is the نَهْيٌ."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "اِسْتِعْلَاءً: write الْمُفْرَدَةُ مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مُسْتَعْلَاةٌ",
            "مُسْتَعْلِيَةٌ",
            "مُسْتَعْلَيَاتٌ",
            "مُسْتَعْلًى"
          ],
          "correct": 0,
          "explanation": "The اِسْمُ الْمَفْعُوْلِ of اِسْتَعْلَى is مُسْتَعْلًى; its feminine singular takes the ـَاةٌ ending: مُسْتَعْلَاةٌ. مُسْتَعْلِيَةٌ is the feminine اِسْمُ الْفَاعِلِ."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "تَلَقِّيًا: write جَمْعُ الْمُؤَنَّثِ مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "مُتَلَقِّيَاتٌ",
            "مُتَلَقَّيَاتٌ",
            "مُتَلَقُّوْنَ",
            "مُتَلَقِّيَتَانِ"
          ],
          "correct": 0,
          "explanation": "The اِسْمُ الْفَاعِلِ of تَلَقَّى is مُتَلَقٍّ; its feminine plural is مُتَلَقِّيَاتٌ. مُتَلَقَّيَاتٌ (fathah) is the اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "تَدَاعِيًا: write الْمُفْرَدُ مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مُتَدَاعًى",
            "مُتَدَاعٍ",
            "مُتَدَاعِيَةٌ",
            "مَدْعُوٌّ"
          ],
          "correct": 0,
          "explanation": "تَدَاعِيًا is the مَصْدَرٌ of تَدَاعَى (بَاب تَفَاعُل); its singular اِسْمُ الْمَفْعُوْلِ is مُتَدَاعًى (تَنْوِيْنُ فَتْحٍ). مُتَدَاعٍ is the اِسْمُ الْفَاعِلِ."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "رِضْوَانًا: write الْغَائِبُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ.",
          "options": [
            "يَرْضَى",
            "يُرْضَى",
            "رَضِيَ",
            "يَرْضَوْنَ"
          ],
          "correct": 0,
          "explanation": "رَضِيَ يَرْضَى is بَاب سَمِعَ; the active مُضَارِعٌ for He is يَرْضَى. يُرْضَى (with ضَمَّةٌ) is the passive."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "دُعَاءً: write الْغَائِبُوْنَ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ.",
          "options": [
            "يُدْعَوْنَ",
            "يَدْعُوْنَ",
            "تُدْعَوْنَ",
            "دُعُوْا"
          ],
          "correct": 0,
          "explanation": "دَعَا is بَاب نَصَرَ; its مُضَارِعٌ مَجْهُوْلٌ is يُدْعَى, and for They (m/p) يُدْعَوْنَ. يَدْعُوْنَ is the active."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "اِبْتِلَاءً: write جَمْعُ الْمُذَكَّرِ مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مُبْتَلَوْنَ",
            "مُبْتَلُوْنَ",
            "مُبْتَلَيَاتٌ",
            "مُبْتَلَيَانِ"
          ],
          "correct": 0,
          "explanation": "The اِسْمُ الْمَفْعُوْلِ of اِبْتَلَى is مُبْتَلًى; its masculine plural is مُبْتَلَوْنَ. مُبْتَلُوْنَ (with ضَمَّةٌ on the لام) is the اِسْمُ الْفَاعِلِ plural."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "تَصْلِيَةً: write جَمْعُ الْمُذَكَّرِ مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "مُصَلُّوْنَ",
            "مُصَلَّوْنَ",
            "مُصَلِّيَاتٌ",
            "مُصَلِّيَانِ"
          ],
          "correct": 0,
          "explanation": "تَصْلِيَةً is the مَصْدَرٌ of صَلَّى (بَاب تَفْعِيْل); the masculine plural اِسْمُ الْفَاعِلِ is مُصَلُّوْنَ. مُصَلَّوْنَ (fathah) is the اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "تَصْلِيَةً: write الْغَائِبَاتُ مِنَ الْمَاضِي الْمَعْلُوْمِ.",
          "options": [
            "صَلَّيْنَ",
            "صُلِّيْنَ",
            "يُصَلِّيْنَ",
            "صَلَّتْ"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَاتُ of the active مَاضِيْ of صَلَّى is صَلَّيْنَ. صُلِّيْنَ is the passive and يُصَلِّيْنَ the مُضَارِعُ."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "اِبْتِلَاءً: write الْمُخَاطَبَاتُ مِنَ النَّهْيِ.",
          "options": [
            "لَا تَبْتَلِيْنَ",
            "لَا تَبْتَلِ",
            "لَا يَبْتَلِيْنَ",
            "اِبْتَلِيْنَ"
          ],
          "correct": 0,
          "explanation": "The نَهْيٌ for You (f/p) is لَا تَبْتَلِيْنَ; the نُوْنُ النِّسْوَةِ is not dropped in the جَزْمٌ. اِبْتَلِيْنَ is the أَمْرٌ."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "مُنَادَاةً: write الْغَائِبَتَانِ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ.",
          "options": [
            "تُنَادَيَانِ",
            "تُنَادِيَانِ",
            "يُنَادَيَانِ",
            "نُوْدِيَتَا"
          ],
          "correct": 0,
          "explanation": "مُنَادَاةً is the مَصْدَرٌ of نَادَى (بَاب مُفَاعَلَة); الْغَائِبَتَانِ of the passive مُضَارِعٌ is تُنَادَيَانِ. تُنَادِيَانِ (kasrah) is the active."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "تَلَقِّيًا: write الْمُخَاطَبُ مِنَ النَّهْيِ.",
          "options": [
            "لَا تَتَلَقَّ",
            "لَا تَتَلَقَّى",
            "تَلَقَّ",
            "لَا تُتَلَقَّ"
          ],
          "correct": 0,
          "explanation": "The نَهْيٌ for You (m/s) of تَلَقَّى is لَا تَتَلَقَّ — the final weak letter drops in the جَزْمٌ. تَلَقَّ is the أَمْرٌ."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "مُنَادَاةً: write الْمُفْرَدَةُ مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "مُنَادِيَةٌ",
            "مُنَادَاةٌ",
            "مُنَادٍ",
            "مُنَادِيَاتٌ"
          ],
          "correct": 0,
          "explanation": "The feminine singular اِسْمُ الْفَاعِلِ of نَادَى is مُنَادِيَةٌ. مُنَادَاةٌ is the feminine اِسْمُ الْمَفْعُوْلِ (and also the مَصْدَرٌ in form)."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "تَدَاعِيًا: write الْمُخَاطَبَةُ مِنَ الْمَاضِي الْمَعْلُوْمِ.",
          "options": [
            "تَدَاعَيْتِ",
            "تَدَاعَيْتَ",
            "تَدَاعَتْ",
            "تَدَاعَيْتُنَّ"
          ],
          "correct": 0,
          "explanation": "The pronoun تِ (kasrah) marks You (f/s): تَدَاعَيْتِ. تَدَاعَيْتَ (fathah) is You (m/s) and تَدَاعَتْ is She."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "اِنْقِضَاءً: write الْمُخَاطَبُوْنَ مِنَ الْأَمْرِ.",
          "options": [
            "اِنْقَضُوْا",
            "اِنْقَضَوْا",
            "لَا تَنْقَضُوْا",
            "يَنْقَضُوْنَ"
          ],
          "correct": 0,
          "explanation": "اِنْقِضَاءً is the مَصْدَرٌ of اِنْقَضَى (بَاب اِنْفِعَال); the أَمْرٌ for You (m/p) is اِنْقَضُوْا. اِنْقَضَوْا (with fathah) is the مَاضِيْ."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "رَمْيًا: write الْمُفْرَدُ مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "رَامٍ",
            "مَرْمِيٌّ",
            "رَامِيَةٌ",
            "رَامُوْنَ"
          ],
          "correct": 0,
          "explanation": "The اِسْمُ الْفَاعِلِ of رَمَى is رَامٍ (فَاعِلٌ with the final يَاءٌ dropped and تَنْوِيْنُ كَسْرٍ). مَرْمِيٌّ is the اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "سَعْيًا: write الْمُتَكَلِّمُوْنَ مِنَ الْمَاضِي الْمَجْهُوْلِ.",
          "options": [
            "سُعِيْنَا",
            "سَعَيْنَا",
            "سُعِيْنَ",
            "نُسْعَى"
          ],
          "correct": 0,
          "explanation": "The passive مَاضِيْ of سَعَى is سُعِيَ; with the pronoun نَا it is سُعِيْنَا. سَعَيْنَا is the active 'we walked'."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "إِبْقَاءً: write الْمُثَنَّاةُ مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "مُبْقِيَتَانِ",
            "مُبْقِيَانِ",
            "مُبْقَاتَانِ",
            "مُبْقِيَاتٌ"
          ],
          "correct": 0,
          "explanation": "الْمُثَنَّاةُ is the feminine dual: مُبْقِيَتَانِ. مُبْقِيَانِ is the masculine dual and مُبْقَاتَانِ the feminine dual اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "دُعَاءً: write الْمُثَنَّى مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مَدْعُوَّانِ",
            "دَاعِيَانِ",
            "مَدْعُوَّتَانِ",
            "مَدْعُوُّوْنَ"
          ],
          "correct": 0,
          "explanation": "The اِسْمُ الْمَفْعُوْلِ of دَعَا is مَدْعُوٌّ; its masculine dual is مَدْعُوَّانِ. دَاعِيَانِ is the dual اِسْمُ الْفَاعِلِ."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "رِضْوَانًا: write الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ.",
          "options": [
            "أُرْضَى",
            "أَرْضَى",
            "نُرْضَى",
            "رُضِيْتُ"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُ of the passive مُضَارِعٌ is أُرْضَى ('I am satisfied with'). أَرْضَى (with fathah) is the active and نُرْضَى is الْمُتَكَلِّمُوْنَ."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "اِبْتِلَاءً: write الْمُثَنَّاةُ مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مُبْتَلَاتَانِ",
            "مُبْتَلِيَتَانِ",
            "مُبْتَلَيَانِ",
            "مُبْتَلَيَاتٌ"
          ],
          "correct": 0,
          "explanation": "The feminine dual اِسْمُ الْمَفْعُوْلِ of اِبْتَلَى is مُبْتَلَاتَانِ. مُبْتَلِيَتَانِ is the feminine dual اِسْمُ الْفَاعِلِ."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "دُعَاءً: write الْمُثَنَّى مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "دَاعِيَانِ",
            "مَدْعُوَّانِ",
            "دَاعِيَتَانِ",
            "دَاعُوْنَ"
          ],
          "correct": 0,
          "explanation": "The اِسْمُ الْفَاعِلِ of دَعَا is دَاعٍ; its masculine dual restores the يَاءٌ: دَاعِيَانِ."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "رَمْيًا: write الْغَائِبَةُ مِنَ الْمَاضِي الْمَجْهُوْلِ.",
          "options": [
            "رُمِيَتْ",
            "رَمَتْ",
            "تُرْمَى",
            "رُمِيَ"
          ],
          "correct": 0,
          "explanation": "The passive مَاضِيْ of رَمَى is رُمِيَ; for She it is رُمِيَتْ. رَمَتْ is the active 'she threw'."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "اِسْتِعْلَاءً: write الْمُخَاطَبَتَانِ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ.",
          "options": [
            "تَسْتَعْلِيَانِ",
            "تَسْتَعْلَيَانِ",
            "يَسْتَعْلِيَانِ",
            "اِسْتَعْلَيْتُمَا"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَتَانِ and الْمُخَاطَبَانِ share the same form in the مُضَارِعُ: تَسْتَعْلِيَانِ. تَسْتَعْلَيَانِ (fathah) is the passive."
        },
        {
          "title": "Book Exercise 3 (p. 218)",
          "kind": "mcq",
          "prompt": "دُعَاءً: write جَمْعُ الْمُؤَنَّثِ مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مَدْعُوَّاتٌ",
            "دَاعِيَاتٌ",
            "مَدْعُوَّتَانِ",
            "مَدْعُوُّوْنَ"
          ],
          "correct": 0,
          "explanation": "The feminine plural اِسْمُ الْمَفْعُوْلِ of دَعَا is مَدْعُوَّاتٌ. دَاعِيَاتٌ is the feminine plural اِسْمُ الْفَاعِلِ."
        },
        {
          "title": "Book Exercise 4 (p. 218)",
          "kind": "mcq",
          "prompt": "In the Quran, ﴿تَعَالَى﴾ is which form?",
          "options": [
            "الْغَائِبُ of the الْمَاضِي الْمَعْلُوْمُ of تَعَالَى (بَاب تَفَاعُل) — 'He is exalted'",
            "الْأَمْرُ of تَعَالَى",
            "الْمُضَارِعُ الْمَعْلُوْمُ of تَعَالَى",
            "الْمَصْدَرُ of تَعَالَى"
          ],
          "correct": 0,
          "explanation": "تَعَالَى يَتَعَالَى تَعَالِيًا is بَاب تَفَاعُل; the bare form تَعَالَى is الْغَائِبُ of the مَاضِيْ. Its مُضَارِعٌ is يَتَعَالَى."
        },
        {
          "title": "Book Exercise 4 (p. 218)",
          "kind": "mcq",
          "prompt": "﴿تَرَاضَوْا﴾ is which صِيْغَةٌ?",
          "options": [
            "الْغَائِبُوْنَ of the الْمَاضِي الْمَعْلُوْمُ of تَرَاضَى — 'they came to terms'",
            "الْمُخَاطَبُوْنَ of the الْأَمْرُ",
            "الْغَائِبُوْنَ of the الْمُضَارِعُ الْمَعْلُوْمُ",
            "الْغَائِبُوْنَ of the الْمَاضِي الْمَجْهُوْلُ"
          ],
          "correct": 0,
          "explanation": "تَرَاضَى يَتَرَاضَى (بَاب تَفَاعُل) — the الْغَائِبُوْنَ of the مَاضِيْ ends in ـَوْا: تَرَاضَوْا. The مُضَارِعٌ would be يَتَرَاضَوْنَ."
        },
        {
          "title": "Book Exercise 4 (p. 218)",
          "kind": "mcq",
          "prompt": "﴿مُلَاقٍ﴾ is which form of لَاقَى?",
          "options": [
            "اِسْمُ الْفَاعِلِ (singular) — 'one who meets'",
            "اِسْمُ الْمَفْعُوْلِ (singular)",
            "الْمَصْدَرُ",
            "الْأَمْرُ"
          ],
          "correct": 0,
          "explanation": "The اِسْمُ الْفَاعِلِ of بَاب مُفَاعَلَة is مُفَاعِلٌ; for the نَاقِصٌ verb لَاقَى it becomes مُلَاقٍ with تَنْوِيْنُ كَسْرٍ. مُلَاقًى (fathah) is the اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "title": "Book Exercise 4 (p. 218)",
          "kind": "mcq",
          "prompt": "﴿ارْتَضَى﴾ is which صِيْغَةٌ, and from which بَابٌ?",
          "options": [
            "الْغَائِبُ of the الْمَاضِي الْمَعْلُوْمُ of اِرْتَضَى, بَاب اِفْتِعَال — 'He was pleased with'",
            "الْغَائِبُ of the الْمُضَارِعُ of اِرْتَضَى",
            "الْأَمْرُ of رَضِيَ, بَاب سَمِعَ",
            "الْمَاضِي الْمَجْهُوْلُ of اِرْتَضَى"
          ],
          "correct": 0,
          "explanation": "اِرْتَضَى يَرْتَضِيْ اِرْتِضَاءً is بَاب اِفْتِعَال; its مَاضِيْ مَجْهُوْلٌ would be اُرْتُضِيَ."
        },
        {
          "title": "Book Exercise 4 (p. 218)",
          "kind": "mcq",
          "prompt": "﴿افْتَرَى﴾ is which form?",
          "options": [
            "الْغَائِبُ of the الْمَاضِي الْمَعْلُوْمُ, بَاب اِفْتِعَال — 'He fabricated'",
            "الْغَائِبُ of the الْمُضَارِعُ الْمَعْلُوْمُ, بَاب اِفْتِعَال",
            "الْمَصْدَرُ of بَاب اِفْتِعَال",
            "اِسْمُ الْفَاعِلِ of بَاب اِفْتِعَال"
          ],
          "correct": 0,
          "explanation": "اِفْتَرَى يَفْتَرِيْ اِفْتِرَاءً follows the اِبْتَلَى pattern of بَاب اِفْتِعَال; the bare form is the مَاضِيْ for He."
        },
        {
          "title": "Book Exercise 4 (p. 218)",
          "kind": "mcq",
          "prompt": "﴿يَنْبَغِيْ﴾ is which صِيْغَةٌ?",
          "options": [
            "الْغَائِبُ of the الْمُضَارِعُ الْمَعْلُوْمُ, بَاب اِنْفِعَال — 'it is fitting'",
            "الْغَائِبُ of the الْمُضَارِعُ الْمَجْهُوْلُ, بَاب اِنْفِعَال",
            "الْغَائِبَاتُ of the الْمُضَارِعُ",
            "الْمَاضِي الْمَعْلُوْمُ, بَاب اِفْتِعَال"
          ],
          "correct": 0,
          "explanation": "اِنْبَغَى يَنْبَغِيْ is بَاب اِنْفِعَال and is لَازِمٌ, so it has no مَجْهُوْلٌ — exactly like the model اِنْقَضَى يَنْقَضِيْ."
        },
        {
          "title": "Book Exercise 4 (p. 218)",
          "kind": "mcq",
          "prompt": "﴿سَمَّيْتُمُوْهَا﴾ contains which صِيْغَةٌ of سَمَّى?",
          "options": [
            "الْمُخَاطَبُوْنَ of the الْمَاضِي الْمَعْلُوْمُ — 'you (m/p) named'",
            "الْمُخَاطَبَاتُ of the الْمَاضِي الْمَعْلُوْمُ",
            "الْمُتَكَلِّمُوْنَ of the الْمَاضِي الْمَعْلُوْمُ",
            "الْمُخَاطَبُوْنَ of the الْمَاضِي الْمَجْهُوْلُ"
          ],
          "correct": 0,
          "explanation": "The base is سَمَّيْتُمْ (You m/p named) from سَمَّى (بَاب تَفْعِيْل); the تُمْ is extended to تُمُوْ before the attached pronoun هَا."
        },
        {
          "title": "to seek",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to seek\"?",
          "options": [
            "اِبْتَغَى يَبْتَغِيْ",
            "اِبْتَلَى يَبْتَلِيْ",
            "أَبْقَى يُبْقِيْ",
            "أَبْلَى يُبْلِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to seek",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِبْتَغَى يَبْتَغِيْ mean?",
          "options": [
            "to seek",
            "to put to the test",
            "to keep",
            "to test"
          ],
          "correct": 0
        },
        {
          "title": "to seek (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِبْتَغَى يَبْتَغِيْ?",
          "options": [
            "اِبْتِغَاءً",
            "اِبْتِلَاءً",
            "إِبْقَاءً",
            "إِبْلَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to put to the test",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to put to the test\"?",
          "options": [
            "اِبْتَلَى يَبْتَلِيْ",
            "أَبْقَى يُبْقِيْ",
            "أَبْلَى يُبْلِيْ",
            "أَحْيَى يُحْيِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to put to the test",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِبْتَلَى يَبْتَلِيْ mean?",
          "options": [
            "to put to the test",
            "to keep",
            "to test",
            "to revive"
          ],
          "correct": 0
        },
        {
          "title": "to put to the test (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِبْتَلَى يَبْتَلِيْ?",
          "options": [
            "اِبْتِلَاءً",
            "إِبْقَاءً",
            "إِبْلَاءً",
            "إِحْيَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to keep",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to keep\"?",
          "options": [
            "أَبْقَى يُبْقِيْ",
            "أَبْلَى يُبْلِيْ",
            "أَحْيَى يُحْيِيْ",
            "اِرْتَضَى يَرْتَضِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to keep",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبْقَى يُبْقِيْ mean?",
          "options": [
            "to keep",
            "to test",
            "to revive",
            "to be satisfied"
          ],
          "correct": 0
        },
        {
          "title": "to keep (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَبْقَى يُبْقِيْ?",
          "options": [
            "إِبْقَاءً",
            "إِبْلَاءً",
            "إِحْيَاءً",
            "اِرْتِضَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to test",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to test\"?",
          "options": [
            "أَبْلَى يُبْلِيْ",
            "أَحْيَى يُحْيِيْ",
            "اِرْتَضَى يَرْتَضِيْ",
            "اِسْتَدْعَى يَسْتَدْعِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to test",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبْلَى يُبْلِيْ mean?",
          "options": [
            "to test",
            "to revive",
            "to be satisfied",
            "to summon"
          ],
          "correct": 0
        },
        {
          "title": "to test (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَبْلَى يُبْلِيْ?",
          "options": [
            "إِبْلَاءً",
            "إِحْيَاءً",
            "اِرْتِضَاءً",
            "اِسْتِدْعَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to revive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to revive\"?",
          "options": [
            "أَحْيَى يُحْيِيْ",
            "اِرْتَضَى يَرْتَضِيْ",
            "اِسْتَدْعَى يَسْتَدْعِيْ",
            "اِسْتَعْلَى يَسْتَعْلِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to revive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَحْيَى يُحْيِيْ mean?",
          "options": [
            "to revive",
            "to be satisfied",
            "to summon",
            "to rise"
          ],
          "correct": 0
        },
        {
          "title": "to revive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَحْيَى يُحْيِيْ?",
          "options": [
            "إِحْيَاءً",
            "اِرْتِضَاءً",
            "اِسْتِدْعَاءً",
            "اِسْتِعْلَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to be satisfied",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be satisfied\"?",
          "options": [
            "اِرْتَضَى يَرْتَضِيْ",
            "اِسْتَدْعَى يَسْتَدْعِيْ",
            "اِسْتَعْلَى يَسْتَعْلِيْ",
            "اِسْتَفْتَى يَسْتَفْتِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to be satisfied",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِرْتَضَى يَرْتَضِيْ mean?",
          "options": [
            "to be satisfied",
            "to summon",
            "to rise",
            "to ask for a formal legal opinion"
          ],
          "correct": 0
        },
        {
          "title": "to be satisfied (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِرْتَضَى يَرْتَضِيْ?",
          "options": [
            "اِرْتِضَاءً",
            "اِسْتِدْعَاءً",
            "اِسْتِعْلَاءً",
            "اِسْتِفْتَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to summon",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to summon\"?",
          "options": [
            "اِسْتَدْعَى يَسْتَدْعِيْ",
            "اِسْتَعْلَى يَسْتَعْلِيْ",
            "اِسْتَفْتَى يَسْتَفْتِيْ",
            "اِسْتَلْقَى يَسْتَلْقِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to summon",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَدْعَى يَسْتَدْعِيْ mean?",
          "options": [
            "to summon",
            "to rise",
            "to ask for a formal legal opinion",
            "to lie down"
          ],
          "correct": 0
        },
        {
          "title": "to summon (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَدْعَى يَسْتَدْعِيْ?",
          "options": [
            "اِسْتِدْعَاءً",
            "اِسْتِعْلَاءً",
            "اِسْتِفْتَاءً",
            "اِسْتِلْقَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to rise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to rise\"?",
          "options": [
            "اِسْتَعْلَى يَسْتَعْلِيْ",
            "اِسْتَفْتَى يَسْتَفْتِيْ",
            "اِسْتَلْقَى يَسْتَلْقِيْ",
            "اِشْتَرَى يَشْتَرِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to rise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَعْلَى يَسْتَعْلِيْ mean?",
          "options": [
            "to rise",
            "to ask for a formal legal opinion",
            "to lie down",
            "to buy"
          ],
          "correct": 0
        },
        {
          "title": "to rise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَعْلَى يَسْتَعْلِيْ?",
          "options": [
            "اِسْتِعْلَاءً",
            "اِسْتِفْتَاءً",
            "اِسْتِلْقَاءً",
            "اِشْتِرَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to ask for a formal legal opinion",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to ask for a formal legal opinion\"?",
          "options": [
            "اِسْتَفْتَى يَسْتَفْتِيْ",
            "اِسْتَلْقَى يَسْتَلْقِيْ",
            "اِشْتَرَى يَشْتَرِيْ",
            "أَلْقَى يُلْقِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to ask for a formal legal opinion",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَفْتَى يَسْتَفْتِيْ mean?",
          "options": [
            "to ask for a formal legal opinion",
            "to lie down",
            "to buy",
            "to throw/deliver"
          ],
          "correct": 0
        },
        {
          "title": "to ask for a formal legal opinion (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَفْتَى يَسْتَفْتِيْ?",
          "options": [
            "اِسْتِفْتَاءً",
            "اِسْتِلْقَاءً",
            "اِشْتِرَاءً",
            "إِلْقَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to lie down",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to lie down\"?",
          "options": [
            "اِسْتَلْقَى يَسْتَلْقِيْ",
            "اِشْتَرَى يَشْتَرِيْ",
            "أَلْقَى يُلْقِيْ",
            "اِنْجَلَى يَنْجَلِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to lie down",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَلْقَى يَسْتَلْقِيْ mean?",
          "options": [
            "to lie down",
            "to buy",
            "to throw/deliver",
            "to reveal itself"
          ],
          "correct": 0
        },
        {
          "title": "to lie down (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَلْقَى يَسْتَلْقِيْ?",
          "options": [
            "اِسْتِلْقَاءً",
            "اِشْتِرَاءً",
            "إِلْقَاءً",
            "اِنْجِلَاءً"
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
            "أَلْقَى يُلْقِيْ",
            "اِنْجَلَى يَنْجَلِيْ",
            "اِنْحَنَى يَنْحَنِيْ"
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
            "to throw/deliver",
            "to reveal itself",
            "to bend"
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
            "إِلْقَاءً",
            "اِنْجِلَاءً",
            "اِنْحِنَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to throw/deliver",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to throw/deliver\"?",
          "options": [
            "أَلْقَى يُلْقِيْ",
            "اِنْجَلَى يَنْجَلِيْ",
            "اِنْحَنَى يَنْحَنِيْ",
            "اِنْطَفَى يَنْطَفِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to throw/deliver",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَلْقَى يُلْقِيْ mean?",
          "options": [
            "to throw/deliver",
            "to reveal itself",
            "to bend",
            "to float"
          ],
          "correct": 0
        },
        {
          "title": "to throw/deliver (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَلْقَى يُلْقِيْ?",
          "options": [
            "إِلْقَاءً",
            "اِنْجِلَاءً",
            "اِنْحِنَاءً",
            "اِنْطِفَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to reveal itself",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reveal itself\"?",
          "options": [
            "اِنْجَلَى يَنْجَلِيْ",
            "اِنْحَنَى يَنْحَنِيْ",
            "اِنْطَفَى يَنْطَفِيْ",
            "اِنْقَضَى يَنْقَضِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to reveal itself",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْجَلَى يَنْجَلِيْ mean?",
          "options": [
            "to reveal itself",
            "to bend",
            "to float",
            "to be over/finished"
          ],
          "correct": 0
        },
        {
          "title": "to reveal itself (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْجَلَى يَنْجَلِيْ?",
          "options": [
            "اِنْجِلَاءً",
            "اِنْحِنَاءً",
            "اِنْطِفَاءً",
            "اِنْقِضَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to bend",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bend\"?",
          "options": [
            "اِنْحَنَى يَنْحَنِيْ",
            "اِنْطَفَى يَنْطَفِيْ",
            "اِنْقَضَى يَنْقَضِيْ",
            "تَدَاعَى يَتَدَاعَى"
          ],
          "correct": 0
        },
        {
          "title": "to bend",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْحَنَى يَنْحَنِيْ mean?",
          "options": [
            "to bend",
            "to float",
            "to be over/finished",
            "to call each other out"
          ],
          "correct": 0
        },
        {
          "title": "to bend (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْحَنَى يَنْحَنِيْ?",
          "options": [
            "اِنْحِنَاءً",
            "اِنْطِفَاءً",
            "اِنْقِضَاءً",
            "تَدَاعِيًا"
          ],
          "correct": 0
        },
        {
          "title": "to float",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to float\"?",
          "options": [
            "اِنْطَفَى يَنْطَفِيْ",
            "اِنْقَضَى يَنْقَضِيْ",
            "تَدَاعَى يَتَدَاعَى",
            "تَرَاضَى يَتَرَاضَى"
          ],
          "correct": 0
        },
        {
          "title": "to float",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْطَفَى يَنْطَفِيْ mean?",
          "options": [
            "to float",
            "to be over/finished",
            "to call each other out",
            "to come to terms"
          ],
          "correct": 0
        },
        {
          "title": "to float (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْطَفَى يَنْطَفِيْ?",
          "options": [
            "اِنْطِفَاءً",
            "اِنْقِضَاءً",
            "تَدَاعِيًا",
            "تَرَاضِيًا"
          ],
          "correct": 0
        },
        {
          "title": "to be over/finished",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be over/finished\"?",
          "options": [
            "اِنْقَضَى يَنْقَضِيْ",
            "تَدَاعَى يَتَدَاعَى",
            "تَرَاضَى يَتَرَاضَى",
            "تَزَكَّى يَتَزَكَّى"
          ],
          "correct": 0
        },
        {
          "title": "to be over/finished",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْقَضَى يَنْقَضِيْ mean?",
          "options": [
            "to be over/finished",
            "to call each other out",
            "to come to terms",
            "to become purified"
          ],
          "correct": 0
        },
        {
          "title": "to be over/finished (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْقَضَى يَنْقَضِيْ?",
          "options": [
            "اِنْقِضَاءً",
            "تَدَاعِيًا",
            "تَرَاضِيًا",
            "تَزَكِّيًا"
          ],
          "correct": 0
        },
        {
          "title": "to call each other out",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to call each other out\"?",
          "options": [
            "تَدَاعَى يَتَدَاعَى",
            "تَرَاضَى يَتَرَاضَى",
            "تَزَكَّى يَتَزَكَّى",
            "تَعَالَى يَتَعَالَى"
          ],
          "correct": 0
        },
        {
          "title": "to call each other out",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَدَاعَى يَتَدَاعَى mean?",
          "options": [
            "to call each other out",
            "to come to terms",
            "to become purified",
            "to rise/to be sublime"
          ],
          "correct": 0
        },
        {
          "title": "to call each other out (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَدَاعَى يَتَدَاعَى?",
          "options": [
            "تَدَاعِيًا",
            "تَرَاضِيًا",
            "تَزَكِّيًا",
            "تَعَالِيًا"
          ],
          "correct": 0
        },
        {
          "title": "to come to terms",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to come to terms\"?",
          "options": [
            "تَرَاضَى يَتَرَاضَى",
            "تَزَكَّى يَتَزَكَّى",
            "تَعَالَى يَتَعَالَى",
            "تَلَا يَتْلُوْ"
          ],
          "correct": 0
        },
        {
          "title": "to come to terms",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَرَاضَى يَتَرَاضَى mean?",
          "options": [
            "to come to terms",
            "to become purified",
            "to rise/to be sublime",
            "to read"
          ],
          "correct": 0
        },
        {
          "title": "to come to terms (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَرَاضَى يَتَرَاضَى?",
          "options": [
            "تَرَاضِيًا",
            "تَزَكِّيًا",
            "تَعَالِيًا",
            "تِلَاوَةً"
          ],
          "correct": 0
        },
        {
          "title": "to become purified",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to become purified\"?",
          "options": [
            "تَزَكَّى يَتَزَكَّى",
            "تَعَالَى يَتَعَالَى",
            "تَلَا يَتْلُوْ",
            "تَلَاقَى يَتَلَاقَى"
          ],
          "correct": 0
        },
        {
          "title": "to become purified",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَزَكَّى يَتَزَكَّى mean?",
          "options": [
            "to become purified",
            "to rise/to be sublime",
            "to read",
            "to come/get together"
          ],
          "correct": 0
        },
        {
          "title": "to become purified (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَزَكَّى يَتَزَكَّى?",
          "options": [
            "تَزَكِّيًا",
            "تَعَالِيًا",
            "تِلَاوَةً",
            "تَلَاقِيًا"
          ],
          "correct": 0
        },
        {
          "title": "to rise/to be sublime",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to rise/to be sublime\"?",
          "options": [
            "تَعَالَى يَتَعَالَى",
            "تَلَا يَتْلُوْ",
            "تَلَاقَى يَتَلَاقَى",
            "تَلَقَّى يَتَلَقَّى"
          ],
          "correct": 0
        },
        {
          "title": "to rise/to be sublime",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَعَالَى يَتَعَالَى mean?",
          "options": [
            "to rise/to be sublime",
            "to read",
            "to come/get together",
            "to receive"
          ],
          "correct": 0
        },
        {
          "title": "to rise/to be sublime (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَعَالَى يَتَعَالَى?",
          "options": [
            "تَعَالِيًا",
            "تِلَاوَةً",
            "تَلَاقِيًا",
            "تَلَقِّيًا"
          ],
          "correct": 0
        },
        {
          "title": "to read",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to read\"?",
          "options": [
            "تَلَا يَتْلُوْ",
            "تَلَاقَى يَتَلَاقَى",
            "تَلَقَّى يَتَلَقَّى",
            "تَلَهَّى يَتَلَهَّى"
          ],
          "correct": 0
        },
        {
          "title": "to read",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَلَا يَتْلُوْ mean?",
          "options": [
            "to read",
            "to come/get together",
            "to receive",
            "to take pleasure"
          ],
          "correct": 0
        },
        {
          "title": "to read (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَلَا يَتْلُوْ?",
          "options": [
            "تِلَاوَةً",
            "تَلَاقِيًا",
            "تَلَقِّيًا",
            "تَلَهِّيًا"
          ],
          "correct": 0
        },
        {
          "title": "to come/get together",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to come/get together\"?",
          "options": [
            "تَلَاقَى يَتَلَاقَى",
            "تَلَقَّى يَتَلَقَّى",
            "تَلَهَّى يَتَلَهَّى",
            "تَمَنَّى يَتَمَنَّى"
          ],
          "correct": 0
        },
        {
          "title": "to come/get together",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَلَاقَى يَتَلَاقَى mean?",
          "options": [
            "to come/get together",
            "to receive",
            "to take pleasure",
            "to desire"
          ],
          "correct": 0
        },
        {
          "title": "to come/get together (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَلَاقَى يَتَلَاقَى?",
          "options": [
            "تَلَاقِيًا",
            "تَلَقِّيًا",
            "تَلَهِّيًا",
            "تَمَنِّيًا"
          ],
          "correct": 0
        },
        {
          "title": "to receive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to receive\"?",
          "options": [
            "تَلَقَّى يَتَلَقَّى",
            "تَلَهَّى يَتَلَهَّى",
            "تَمَنَّى يَتَمَنَّى",
            "جَازَى يُجَازِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to receive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَلَقَّى يَتَلَقَّى mean?",
          "options": [
            "to receive",
            "to take pleasure",
            "to desire",
            "to requite, recompense"
          ],
          "correct": 0
        },
        {
          "title": "to receive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَلَقَّى يَتَلَقَّى?",
          "options": [
            "تَلَقِّيًا",
            "تَلَهِّيًا",
            "تَمَنِّيًا",
            "مُجَازَاةً"
          ],
          "correct": 0
        },
        {
          "title": "to take pleasure",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take pleasure\"?",
          "options": [
            "تَلَهَّى يَتَلَهَّى",
            "تَمَنَّى يَتَمَنَّى",
            "جَازَى يُجَازِيْ",
            "جَرَى يَجْرِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to take pleasure",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَلَهَّى يَتَلَهَّى mean?",
          "options": [
            "to take pleasure",
            "to desire",
            "to requite, recompense",
            "to run, flow"
          ],
          "correct": 0
        },
        {
          "title": "to take pleasure (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَلَهَّى يَتَلَهَّى?",
          "options": [
            "تَلَهِّيًا",
            "تَمَنِّيًا",
            "مُجَازَاةً",
            "جَرْيًا"
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
            "جَازَى يُجَازِيْ",
            "جَرَى يَجْرِيْ",
            "خَشِيَ يَخْشَى"
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
            "to requite, recompense",
            "to run, flow",
            "to fear"
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
            "مُجَازَاةً",
            "جَرْيًا",
            "خَشْيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to requite, recompense",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to requite, recompense\"?",
          "options": [
            "جَازَى يُجَازِيْ",
            "جَرَى يَجْرِيْ",
            "خَشِيَ يَخْشَى",
            "دَعَا يَدْعُوْ"
          ],
          "correct": 0
        },
        {
          "title": "to requite, recompense",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَازَى يُجَازِيْ mean?",
          "options": [
            "to requite, recompense",
            "to run, flow",
            "to fear",
            "to call"
          ],
          "correct": 0
        },
        {
          "title": "to requite, recompense (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَازَى يُجَازِيْ?",
          "options": [
            "مُجَازَاةً",
            "جَرْيًا",
            "خَشْيَةً",
            "دُعَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to run, flow",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to run, flow\"?",
          "options": [
            "جَرَى يَجْرِيْ",
            "خَشِيَ يَخْشَى",
            "دَعَا يَدْعُوْ",
            "رَبَّى يُرَبِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "to run, flow",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَرَى يَجْرِيْ mean?",
          "options": [
            "to run, flow",
            "to fear",
            "to call",
            "to nurture"
          ],
          "correct": 0
        },
        {
          "title": "to run, flow (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَرَى يَجْرِيْ?",
          "options": [
            "جَرْيًا",
            "خَشْيَةً",
            "دُعَاءً",
            "تَرْبِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to fear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fear\"?",
          "options": [
            "خَشِيَ يَخْشَى",
            "دَعَا يَدْعُوْ",
            "رَبَّى يُرَبِّيْ",
            "رَجَا يَرْجُوْ"
          ],
          "correct": 0
        },
        {
          "title": "to fear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَشِيَ يَخْشَى mean?",
          "options": [
            "to fear",
            "to call",
            "to nurture",
            "to hope"
          ],
          "correct": 0
        },
        {
          "title": "to fear (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَشِيَ يَخْشَى?",
          "options": [
            "خَشْيَةً",
            "دُعَاءً",
            "تَرْبِيَةً",
            "رَجَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to call",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to call\"?",
          "options": [
            "دَعَا يَدْعُوْ",
            "رَبَّى يُرَبِّيْ",
            "رَجَا يَرْجُوْ",
            "رَضِيَ يَرْضَى"
          ],
          "correct": 0
        },
        {
          "title": "to call",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَعَا يَدْعُوْ mean?",
          "options": [
            "to call",
            "to nurture",
            "to hope",
            "to be satisfied"
          ],
          "correct": 0
        },
        {
          "title": "to call (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of دَعَا يَدْعُوْ?",
          "options": [
            "دُعَاءً",
            "تَرْبِيَةً",
            "رَجَاءً",
            "رِضْوَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to nurture",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to nurture\"?",
          "options": [
            "رَبَّى يُرَبِّيْ",
            "رَجَا يَرْجُوْ",
            "رَضِيَ يَرْضَى",
            "رَعَى يَرْعَى"
          ],
          "correct": 0
        },
        {
          "title": "to nurture",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَبَّى يُرَبِّيْ mean?",
          "options": [
            "to nurture",
            "to hope",
            "to be satisfied",
            "to protect"
          ],
          "correct": 0
        },
        {
          "title": "to nurture (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَبَّى يُرَبِّيْ?",
          "options": [
            "تَرْبِيَةً",
            "رَجَاءً",
            "رِضْوَانًا",
            "رِعَايَةً"
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
            "رَضِيَ يَرْضَى",
            "رَعَى يَرْعَى",
            "رَمَى يَرْمِيْ"
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
            "to be satisfied",
            "to protect",
            "to throw"
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
            "رِضْوَانًا",
            "رِعَايَةً",
            "رَمْيًا"
          ],
          "correct": 0
        },
        {
          "title": "to be satisfied",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be satisfied\"?",
          "options": [
            "رَضِيَ يَرْضَى",
            "رَعَى يَرْعَى",
            "رَمَى يَرْمِيْ",
            "سَعَى يَسْعَى"
          ],
          "correct": 0
        },
        {
          "title": "to be satisfied",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَضِيَ يَرْضَى mean?",
          "options": [
            "to be satisfied",
            "to protect",
            "to throw",
            "to walk"
          ],
          "correct": 0
        },
        {
          "title": "to be satisfied (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَضِيَ يَرْضَى?",
          "options": [
            "رِضْوَانًا",
            "رِعَايَةً",
            "رَمْيًا",
            "سَعْيًا"
          ],
          "correct": 0
        },
        {
          "title": "to protect",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to protect\"?",
          "options": [
            "رَعَى يَرْعَى",
            "رَمَى يَرْمِيْ",
            "سَعَى يَسْعَى",
            "سَمَّى يُسَمِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "to protect",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَعَى يَرْعَى mean?",
          "options": [
            "to protect",
            "to throw",
            "to walk",
            "to name"
          ],
          "correct": 0
        },
        {
          "title": "to protect (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَعَى يَرْعَى?",
          "options": [
            "رِعَايَةً",
            "رَمْيًا",
            "سَعْيًا",
            "تَسْمِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to throw",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to throw\"?",
          "options": [
            "رَمَى يَرْمِيْ",
            "سَعَى يَسْعَى",
            "سَمَّى يُسَمِّيْ",
            "صَلَّى يُصَلِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "to throw",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَمَى يَرْمِيْ mean?",
          "options": [
            "to throw",
            "to walk",
            "to name",
            "to perform salah"
          ],
          "correct": 0
        },
        {
          "title": "to throw (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَمَى يَرْمِيْ?",
          "options": [
            "رَمْيًا",
            "سَعْيًا",
            "تَسْمِيَةً",
            "تَصْلِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to walk",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to walk\"?",
          "options": [
            "سَعَى يَسْعَى",
            "سَمَّى يُسَمِّيْ",
            "صَلَّى يُصَلِّيْ",
            "طَغَى يَطْغَى"
          ],
          "correct": 0
        },
        {
          "title": "to walk",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَعَى يَسْعَى mean?",
          "options": [
            "to walk",
            "to name",
            "to perform salah",
            "to exceed proper bounds"
          ],
          "correct": 0
        },
        {
          "title": "to walk (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَعَى يَسْعَى?",
          "options": [
            "سَعْيًا",
            "تَسْمِيَةً",
            "تَصْلِيَةً",
            "طُغْيَانًا"
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
            "صَلَّى يُصَلِّيْ",
            "طَغَى يَطْغَى",
            "عَفَا يَعْفُوْ"
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
            "to perform salah",
            "to exceed proper bounds",
            "to wipe out"
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
            "تَصْلِيَةً",
            "طُغْيَانًا",
            "عَفْوًا"
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
            "طَغَى يَطْغَى",
            "عَفَا يَعْفُوْ",
            "لَاقَى يُلَاقِيْ"
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
            "to exceed proper bounds",
            "to wipe out",
            "to meet"
          ],
          "correct": 0
        },
        {
          "title": "to perform salah (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَلَّى يُصَلِّيْ?",
          "options": [
            "تَصْلِيَةً",
            "طُغْيَانًا",
            "عَفْوًا",
            "مُلَاقَاةً"
          ],
          "correct": 0
        },
        {
          "title": "to exceed proper bounds",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to exceed proper bounds\"?",
          "options": [
            "طَغَى يَطْغَى",
            "عَفَا يَعْفُوْ",
            "لَاقَى يُلَاقِيْ",
            "لَبَّى يُلَبِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "to exceed proper bounds",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَغَى يَطْغَى mean?",
          "options": [
            "to exceed proper bounds",
            "to wipe out",
            "to meet",
            "to respond"
          ],
          "correct": 0
        },
        {
          "title": "to exceed proper bounds (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of طَغَى يَطْغَى?",
          "options": [
            "طُغْيَانًا",
            "عَفْوًا",
            "مُلَاقَاةً",
            "تَلْبِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to wipe out",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to wipe out\"?",
          "options": [
            "عَفَا يَعْفُوْ",
            "لَاقَى يُلَاقِيْ",
            "لَبَّى يُلَبِّيْ",
            "لَقِيَ يَلْقَى"
          ],
          "correct": 0
        },
        {
          "title": "to wipe out",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَفَا يَعْفُوْ mean?",
          "options": [
            "to wipe out",
            "to meet",
            "to respond",
            "to walk"
          ],
          "correct": 0
        },
        {
          "title": "to wipe out (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَفَا يَعْفُوْ?",
          "options": [
            "عَفْوًا",
            "مُلَاقَاةً",
            "تَلْبِيَةً",
            "لِقَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to meet",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to meet\"?",
          "options": [
            "لَاقَى يُلَاقِيْ",
            "لَبَّى يُلَبِّيْ",
            "لَقِيَ يَلْقَى",
            "مَشَى يَمْشِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to meet",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَاقَى يُلَاقِيْ mean?",
          "options": [
            "to meet",
            "to respond",
            "to walk",
            "to confide in"
          ],
          "correct": 0
        },
        {
          "title": "to meet (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of لَاقَى يُلَاقِيْ?",
          "options": [
            "مُلَاقَاةً",
            "تَلْبِيَةً",
            "لِقَاءً",
            "مَشْيًا"
          ],
          "correct": 0
        },
        {
          "title": "to respond",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to respond\"?",
          "options": [
            "لَبَّى يُلَبِّيْ",
            "لَقِيَ يَلْقَى",
            "مَشَى يَمْشِيْ",
            "نَاجَى يُنَاجِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to respond",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَبَّى يُلَبِّيْ mean?",
          "options": [
            "to respond",
            "to meet",
            "to walk",
            "to confide in"
          ],
          "correct": 0
        },
        {
          "title": "to respond (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of لَبَّى يُلَبِّيْ?",
          "options": [
            "تَلْبِيَةً",
            "لِقَاءً",
            "مَشْيًا",
            "مُنَاجَاةً"
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
            "مَشَى يَمْشِيْ",
            "نَاجَى يُنَاجِيْ",
            "نَادَى يُنَادِيْ"
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
            "to walk",
            "to confide in",
            "to call out"
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
            "مَشْيًا",
            "مُنَاجَاةً",
            "مُنَادَاةً"
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
            "نَاجَى يُنَاجِيْ",
            "نَادَى يُنَادِيْ",
            "نَسِيَ يَنْسَى"
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
            "to confide in",
            "to call out",
            "to forget"
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
            "مُنَاجَاةً",
            "مُنَادَاةً",
            "نِسْيَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to confide in",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to confide in\"?",
          "options": [
            "نَاجَى يُنَاجِيْ",
            "نَادَى يُنَادِيْ",
            "نَسِيَ يَنْسَى",
            "نَهَى يَنْهَى"
          ],
          "correct": 0
        },
        {
          "title": "to confide in",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَاجَى يُنَاجِيْ mean?",
          "options": [
            "to confide in",
            "to call out",
            "to forget",
            "to prohibit"
          ],
          "correct": 0
        },
        {
          "title": "to confide in (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَاجَى يُنَاجِيْ?",
          "options": [
            "مُنَاجَاةً",
            "مُنَادَاةً",
            "نِسْيَانًا",
            "نَهْيًا"
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
            "نَسِيَ يَنْسَى",
            "نَهَى يَنْهَى",
            "هَدَى يَهْدِيْ"
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
            "to forget",
            "to prohibit",
            "to guide"
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
            "نِسْيَانًا",
            "نَهْيًا",
            "هِدَايَةً"
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
            "نَهَى يَنْهَى",
            "هَدَى يَهْدِيْ",
            "اِبْتَغَى يَبْتَغِيْ"
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
            "to prohibit",
            "to guide",
            "to seek"
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
            "نَهْيًا",
            "هِدَايَةً",
            "اِبْتِغَاءً"
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
            "هَدَى يَهْدِيْ",
            "اِبْتَغَى يَبْتَغِيْ",
            "اِبْتَلَى يَبْتَلِيْ"
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
            "to guide",
            "to seek",
            "to put to the test"
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
            "هِدَايَةً",
            "اِبْتِغَاءً",
            "اِبْتِلَاءً"
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
            "اِبْتَغَى يَبْتَغِيْ",
            "اِبْتَلَى يَبْتَلِيْ",
            "أَبْقَى يُبْقِيْ"
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
            "to seek",
            "to put to the test",
            "to keep"
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
            "اِبْتِغَاءً",
            "اِبْتِلَاءً",
            "إِبْقَاءً"
          ],
          "correct": 0
        }
      ]
    }
  ]
};

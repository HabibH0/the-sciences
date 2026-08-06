// Module 06 — Unit 5: الْأَجْوَفُ (First Steps to Understanding Sarf, Unit 5, pp. 165-188)
//
// Converted from content-fstu-sarf/unit5-lesson1.js..unit5-lesson3.js plus
// unit5-summary.js, following the same conversion pattern as module-01.js and
// module-05.js: raw sections/blocks -> concepts/lines, raw exercise items -> MCQ
// exercise.items, raw quiz/exerciseBank/vocab -> quiz/bank[]. l4 is a cumulative
// "Unit 5 Summary" review lesson (no exercise, no summary sidebar -- mirrors
// module-01.js's l13 / module-05.js's l3), built from unit5-summary.js's key
// terms, its master تصريف صغير table plus a second study-aid table of the three
// إعلال changes (kept as two table lines in the one intro concept), and the
// unit-end verb vocabulary. Module id is 's-u5'.
export default {
  "id": "s-u5",
  "title": "الْأَجْوَفُ",
  "heading": "الْفِعْلُ غَيْرُ السَّالِمِ",
  "blurb": "الْأَجْوَف: the weak verb with a middle وَاو or يَاء, and the three changes that reshape it.",
  "lessons": [
    {
      "id": "l1",
      "title": "مُقَدِّمَةٌ",
      "subtitle": "Introduction to الْأَجْوَفُ — the hollow verb, and its three changes: قَلْبٌ، نَقْلٌ، حَذْفٌ",
      "concepts": [
        {
          "heading": "What is الْأَجْوَفُ؟",
          "lines": [
            {
              "html": "<bdi>الْأَجْوَفُ</bdi> (the hollow verb) is a <bdi>مُعْتَلٌّ</bdi> in which the <bdi>عَيْنُ الْكَلِمَةِ</bdi> (the middle root letter) is a <bdi>حَرْفُ الْعِلَّةِ</bdi>.",
              "list": false
            },
            {
              "html": "If the <bdi>حَرْفُ الْعِلَّةِ</bdi> is a <bdi>وَاوٌ</bdi>, the verb is called <bdi>أَجْوَفُ وَاوِيٌّ</bdi>, and if it is a <bdi>يَاءٌ</bdi>, it is called <bdi>أَجْوَفُ يَائِيٌّ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>يَقُوْلُ</bdi> — <bdi>أَجْوَفُ وَاوِيٌّ</bdi> — the <bdi>عَيْنُ الْكَلِمَةِ</bdi> is a <bdi>وَاوٌ</bdi>",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>يَبِيْعُ</bdi> — <bdi>أَجْوَفُ يَائِيٌّ</bdi> — the <bdi>عَيْنُ الْكَلِمَةِ</bdi> is a <bdi>يَاءٌ</bdi>",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "What is an أَجْوَفُ verb?",
            "kind": "mcq",
            "options": [
              "A verb whose first root letter is a حَرْفُ الْعِلَّةِ",
              "A مُعْتَلٌّ in which the عَيْنُ الْكَلِمَةِ is a حَرْفُ الْعِلَّةِ",
              "A verb whose last root letter is a حَرْفُ الْعِلَّةِ",
              "A verb with a هَمْزَةٌ as one of its root letters"
            ],
            "correct": 1
          }
        },
        {
          "heading": "Changes to الْأَجْوَفُ",
          "lines": [
            {
              "html": "Three changes may apply to <bdi>أَجْوَفُ</bdi> verbs: (1) <bdi>قَلْبٌ</bdi> (2) <bdi>نَقْلٌ</bdi> (3) <bdi>حَذْفٌ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Which of the following is NOT one of the three changes of الْأَجْوَفُ?",
            "kind": "mcq",
            "options": ["قَلْبٌ", "نَقْلٌ", "حَذْفٌ", "إِدْغَامٌ"],
            "correct": 3
          }
        },
        {
          "heading": "قَلْبٌ",
          "lines": [
            {
              "html": "<bdi>قَلْبٌ</bdi>: to change one letter to another. <bdi>قَلْبٌ</bdi> occurs in three places:",
              "list": false
            },
            {
              "html": "(1) <bdi>الْمَاضِيْ</bdi>: the <bdi>وَاوٌ</bdi> and <bdi>يَاءٌ</bdi> change to an <bdi>أَلِفٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>خَوِفَ ← خَافَ</bdi> — the <bdi>وَاوٌ</bdi> changes to an <bdi>أَلِفٌ</bdi> (<bdi>قَلْبٌ</bdi>)",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>بَيَعَ ← بَاعَ</bdi> — the <bdi>يَاءٌ</bdi> changes to an <bdi>أَلِفٌ</bdi> (<bdi>قَلْبٌ</bdi>)",
              "list": true,
              "bullet": true
            },
            {
              "html": "(2) <bdi>فِعْلٌ مَجْهُوْلٌ</bdi> (the passive <bdi>الْمَاضِيْ</bdi>): the <bdi>وَاوٌ</bdi> changes to a <bdi>يَاءٌ</bdi> and the <bdi>فَاءُ الْكَلِمَةِ</bdi> is given a <bdi>كَسْرَةٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>خُوِفَ ← خِيْفَ</bdi> — the <bdi>وَاوٌ</bdi> changes to a <bdi>يَاءٌ</bdi> and the <bdi>فَاءُ الْكَلِمَةِ</bdi> takes a <bdi>كَسْرَةٌ</bdi>",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>بُيِعَ ← بِيْعَ</bdi> — the <bdi>فَاءُ الْكَلِمَةِ</bdi> takes a <bdi>كَسْرَةٌ</bdi>",
              "list": true,
              "bullet": true
            },
            {
              "html": "(3) <bdi>اِسْمُ الْفَاعِلِ</bdi>: the <bdi>وَاوٌ</bdi> and <bdi>يَاءٌ</bdi> change to a <bdi>هَمْزَةٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>خَاوِفٌ ← خَائِفٌ</bdi> — the <bdi>وَاوٌ</bdi> changes to a <bdi>هَمْزَةٌ</bdi>",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>بَايِعٌ ← بَائِعٌ</bdi> — the <bdi>يَاءٌ</bdi> changes to a <bdi>هَمْزَةٌ</bdi>",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "Which change produces خَافَ from خَوِفَ?",
            "kind": "mcq",
            "options": [
              "قَلْبٌ — the وَاوٌ changes to an أَلِفٌ in الْمَاضِيْ",
              "نَقْلٌ — the ضَمَّةٌ of the وَاوٌ moves back onto the سَاكِنٌ letter before it",
              "قَلْبٌ — in the passive الْمَاضِيْ the وَاوٌ becomes a يَاءٌ and the فَاءُ الْكَلِمَةِ takes a كَسْرَةٌ",
              "قَلْبٌ ثُمَّ حَذْفٌ — قَلْبٌ produces an أَلِفٌ, then اِلْتِقَاءُ السَّاكِنَيْنِ forces حَذْفٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "نَقْلٌ",
          "lines": [
            {
              "html": "<bdi>نَقْلٌ</bdi>: to move a <bdi>حَرَكَةٌ</bdi> to the <bdi>سَاكِنٌ</bdi> letter before it. <bdi>نَقْلٌ</bdi> occurs in the following places:",
              "list": false
            },
            {
              "html": "(1) <bdi>الْمُضَارِعُ</bdi>: the <bdi>حَرَكَةٌ</bdi> of the weak letter moves back onto the <bdi>سَاكِنٌ</bdi> letter before it.",
              "list": false
            },
            {
              "html": "<bdi>يَقْوُلُ ← يَقُوْلُ</bdi> — the <bdi>ضَمَّةٌ</bdi> of the <bdi>وَاوٌ</bdi> moves to the <bdi>قَاف</bdi> (<bdi>نَقْلٌ</bdi>)",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>يَبْيِعُ ← يَبِيْعُ</bdi> — the <bdi>كَسْرَةٌ</bdi> of the <bdi>يَاءٌ</bdi> moves to the <bdi>بَاء</bdi> (<bdi>نَقْلٌ</bdi>)",
              "list": true,
              "bullet": true
            },
            {
              "html": "In <bdi>بَاب سَمِعَ</bdi>, <bdi>قَلْبٌ</bdi> takes place after <bdi>نَقْلٌ</bdi>: <bdi>يَخْوَفُ</bdi> ← <bdi>يَخَوْفُ</bdi> (<bdi>نَقْلٌ</bdi>) ← <bdi>يَخَافُ</bdi> (<bdi>قَلْبٌ</bdi>).",
              "list": false
            },
            {
              "html": "(2) <bdi>اِسْمُ الْمَفْعُوْلِ</bdi>: after the <bdi>نَقْلٌ</bdi>, <bdi>حَذْفٌ</bdi> takes place.",
              "list": false
            },
            {
              "html": "<bdi>مَخْوُوْفٌ ← مَخُوْوْفٌ ← مَخُوْفٌ</bdi> — <bdi>نَقْلٌ</bdi>, then one of the two <bdi>سَاكِنٌ</bdi> letters is dropped (<bdi>حَذْفٌ</bdi>)",
              "list": true,
              "bullet": true
            },
            {
              "html": "The <bdi>الْأَمْرُ</bdi> and <bdi>النَّهْيُ</bdi> are made from <bdi>الْمُضَارِعُ</bdi>, so the effect of <bdi>نَقْلٌ</bdi> appears in them as well, e.g. <bdi>خَفْ، لَا تَخَفْ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Which change produces يَقُوْلُ from يَقْوُلُ?",
            "kind": "mcq",
            "options": [
              "نَقْلٌ — the ضَمَّةٌ of the وَاوٌ moves back onto the سَاكِنٌ letter before it",
              "قَلْبٌ — in the passive الْمَاضِيْ the وَاوٌ becomes a يَاءٌ and the فَاءُ الْكَلِمَةِ takes a كَسْرَةٌ",
              "قَلْبٌ ثُمَّ حَذْفٌ — قَلْبٌ produces an أَلِفٌ, then اِلْتِقَاءُ السَّاكِنَيْنِ forces حَذْفٌ",
              "قَلْبٌ — in اِسْمُ الْفَاعِلِ the weak letter changes to a هَمْزَةٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "حَذْفٌ",
          "lines": [
            {
              "html": "<bdi>حَذْفٌ</bdi>: to drop a letter. <bdi>حَذْفٌ</bdi> occurs in three places:",
              "list": false
            },
            {
              "html": "(1) <bdi>الْمَاضِيْ</bdi> (from <bdi>الْغَائِبَاتُ</bdi> to <bdi>الْمُتَكَلِّمُوْنَ</bdi>) after <bdi>قَلْبٌ</bdi>, due to <bdi>اِلْتِقَاءُ السَّاكِنَيْنِ</bdi> i.e., two <bdi>سَاكِنٌ</bdi> letters come together.",
              "list": false
            },
            {
              "html": "<bdi>خَوِفْنَ ← خَافْنَ ← خِفْنَ</bdi> — <bdi>قَلْبٌ</bdi> gives <bdi>خَافْنَ</bdi>; the <bdi>أَلِفٌ</bdi> and <bdi>فَاء</bdi> of the pronoun ending are both <bdi>سَاكِنٌ</bdi>, so the <bdi>أَلِفٌ</bdi> is dropped (<bdi>حَذْفٌ</bdi>)",
              "list": true,
              "bullet": true
            },
            {
              "html": "After the <bdi>حَذْفٌ</bdi>, the <bdi>فَاءُ الْكَلِمَةِ</bdi> of verbs from <bdi>سَمِعَ</bdi> and <bdi>ضَرَبَ</bdi> takes a <bdi>كَسْرَةٌ</bdi>, and verbs from <bdi>نَصَرَ</bdi> take a <bdi>ضَمَّةٌ</bdi>: <bdi>خَفْنَ ← خِفْنَ</bdi>، <bdi>بَعْنَ ← بِعْنَ</bdi>، <bdi>قَلْنَ ← قُلْنَ</bdi>.",
              "list": false
            },
            {
              "html": "(2) <bdi>الْمُضَارِعُ</bdi> in the <bdi>صِيَغُ</bdi> of <bdi>الْغَائِبَاتُ</bdi> and <bdi>الْمُخَاطَبَاتُ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>يَخْوَفْنَ ← يَخَوْفْنَ ← يَخَافْنَ ← يَخَفْنَ</bdi> — <bdi>نَقْلٌ</bdi>, then <bdi>قَلْبٌ</bdi>, then <bdi>حَذْفٌ</bdi> of the <bdi>أَلِفٌ</bdi> because two <bdi>سَاكِنٌ</bdi> letters meet",
              "list": true,
              "bullet": true
            },
            {
              "html": "(3) <bdi>اِسْمُ الْمَفْعُوْلِ</bdi> after <bdi>نَقْلٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>مَبْيُوْعٌ ← مَبُيْوْعٌ ← مَبِيْعٌ</bdi> — <bdi>نَقْلٌ</bdi>, then the <bdi>وَاوٌ</bdi> is dropped (<bdi>حَذْفٌ</bdi>)",
              "list": true,
              "bullet": true
            },
            {
              "html": "If there is a <bdi>ضَمَّةٌ</bdi> before the <bdi>يَاءٌ</bdi>, it will change to a <bdi>كَسْرَةٌ</bdi> to match the <bdi>يَاءٌ</bdi>, giving <bdi>مَبِيْعٌ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Which change produces خِفْنَ from خَوِفْنَ?",
            "kind": "mcq",
            "options": [
              "قَلْبٌ ثُمَّ حَذْفٌ — قَلْبٌ produces an أَلِفٌ, then اِلْتِقَاءُ السَّاكِنَيْنِ forces حَذْفٌ",
              "قَلْبٌ — in اِسْمُ الْفَاعِلِ the weak letter changes to a هَمْزَةٌ",
              "نَقْلٌ ثُمَّ حَذْفٌ — this is اِسْمُ الْمَفْعُوْلِ; the ضَمَّةٌ also becomes a كَسْرَةٌ to match the يَاءٌ",
              "نَقْلٌ ثُمَّ قَلْبٌ — only in بَاب سَمِعَ does قَلْبٌ follow نَقْلٌ in الْمُضَارِعُ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Introduction: Rules of الْأَجْوَفُ",
        "rows": [
          {
            "label": "Hollow verb — a مُعْتَلٌّ whose عَيْنُ الْكَلِمَةِ is a حَرْفُ الْعِلَّةِ",
            "arabic": "أَجْوَفُ",
            "meaning": "Hollow verb — a مُعْتَلٌّ whose عَيْنُ الْكَلِمَةِ is a حَرْفُ الْعِلَّةِ",
            "unlockAt": 0
          },
          {
            "label": "Hollow verb whose عَيْن is a وَاوٌ, e.g. يَقُوْلُ",
            "arabic": "أَجْوَفُ وَاوِيٌّ",
            "meaning": "Hollow verb whose عَيْن is a وَاوٌ, e.g. يَقُوْلُ",
            "unlockAt": 1
          },
          {
            "label": "Hollow verb whose عَيْن is a يَاءٌ, e.g. يَبِيْعُ",
            "arabic": "أَجْوَفُ يَائِيٌّ",
            "meaning": "Hollow verb whose عَيْن is a يَاءٌ, e.g. يَبِيْعُ",
            "unlockAt": 2
          },
          {
            "label": "To change one letter to another",
            "arabic": "قَلْبٌ",
            "meaning": "To change one letter to another",
            "unlockAt": 3
          },
          {
            "label": "To move a حَرَكَةٌ to the سَاكِنٌ letter before it",
            "arabic": "نَقْلٌ",
            "meaning": "To move a حَرَكَةٌ to the سَاكِنٌ letter before it",
            "unlockAt": 4
          },
          {
            "label": "To drop a letter",
            "arabic": "حَذْفٌ",
            "meaning": "To drop a letter",
            "unlockAt": 5
          },
          {
            "label": "Two سَاكِنٌ letters coming together (a cause of حَذْفٌ)",
            "arabic": "اِلْتِقَاءُ السَّاكِنَيْنِ",
            "meaning": "Two سَاكِنٌ letters coming together (a cause of حَذْفٌ)",
            "unlockAt": 6
          }
        ]
      },
      "quiz": [
        {
          "q": "What is an أَجْوَفُ verb?",
          "options": [
            "A verb whose first root letter is a حَرْفُ الْعِلَّةِ",
            "A مُعْتَلٌّ in which the عَيْنُ الْكَلِمَةِ is a حَرْفُ الْعِلَّةِ",
            "A verb whose last root letter is a حَرْفُ الْعِلَّةِ",
            "A verb with a هَمْزَةٌ as one of its root letters"
          ],
          "correct": 1,
          "explanation": "الْأَجْوَفُ (the hollow verb) is a مُعْتَلٌّ whose middle root letter (عَيْنُ الْكَلِمَةِ) is a weak letter, e.g. يَقُوْلُ، يَبِيْعُ."
        },
        {
          "q": "يَبِيْعُ is which type of أَجْوَفُ?",
          "options": [
            "أَجْوَفُ وَاوِيٌّ",
            "أَجْوَفُ يَائِيٌّ",
            "أَجْوَفُ أَلِفِيٌّ",
            "It is not أَجْوَفُ"
          ],
          "correct": 1,
          "explanation": "Its عَيْنُ الْكَلِمَةِ is a يَاءٌ, so it is أَجْوَفُ يَائِيٌّ. يَقُوْلُ, whose عَيْن is a وَاوٌ, is أَجْوَفُ وَاوِيٌّ."
        },
        {
          "q": "What does قَلْبٌ mean?",
          "options": [
            "To drop a letter",
            "To move a حَرَكَةٌ to the سَاكِنٌ letter before it",
            "To change one letter to another",
            "To double a letter"
          ],
          "correct": 2,
          "explanation": "قَلْبٌ is to change one letter to another, e.g. the وَاوٌ of خَوِفَ changes to an أَلِفٌ giving خَافَ."
        },
        {
          "q": "In الْمَاضِيْ, the وَاوٌ and يَاءٌ of an أَجْوَفُ verb change to…",
          "options": [
            "a هَمْزَةٌ",
            "an أَلِفٌ",
            "a كَسْرَةٌ",
            "each other"
          ],
          "correct": 1,
          "explanation": "In الْمَاضِيْ the weak letter changes to an أَلِفٌ by قَلْبٌ: خَوِفَ ← خَافَ and بَيَعَ ← بَاعَ."
        },
        {
          "q": "What does نَقْلٌ mean?",
          "options": [
            "To move a حَرَكَةٌ to the سَاكِنٌ letter before it",
            "To change a letter into an أَلِفٌ",
            "To drop the weak letter",
            "To add a كَسْرَةٌ to the فَاءُ الْكَلِمَةِ"
          ],
          "correct": 0,
          "explanation": "نَقْلٌ is to move a حَرَكَةٌ back onto the سَاكِنٌ letter before it, e.g. يَقْوُلُ ← يَقُوْلُ."
        },
        {
          "q": "Why does حَذْفٌ take place in الْمَاضِيْ from الْغَائِبَاتُ to الْمُتَكَلِّمُوْنَ?",
          "options": [
            "Because the verb becomes too long",
            "Because of اِلْتِقَاءُ السَّاكِنَيْنِ — two سَاكِنٌ letters come together after قَلْبٌ",
            "Because the pronoun requires a كَسْرَةٌ",
            "Because the فَاءُ الْكَلِمَةِ is weak"
          ],
          "correct": 1,
          "explanation": "After قَلْبٌ (e.g. خَافْنَ) the أَلِفٌ and the سَاكِنٌ of the pronoun ending meet, so the أَلِفٌ is dropped: خِفْنَ."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In the passive الْمَاضِيْ (فِعْلٌ مَجْهُوْلٌ) of an أَجْوَفُ verb, what happens?",
          "options": [
            "The وَاوٌ changes to an أَلِفٌ",
            "The وَاوٌ changes to a يَاءٌ and the فَاءُ الْكَلِمَةِ is given a كَسْرَةٌ",
            "The يَاءٌ changes to a هَمْزَةٌ",
            "The عَيْنُ الْكَلِمَةِ is dropped entirely"
          ],
          "correct": 1,
          "explanation": "By قَلْبٌ, خُوِفَ becomes خِيْفَ and بُيِعَ becomes بِيْعَ — the وَاوٌ becomes a يَاءٌ and the فَاء takes a كَسْرَةٌ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In اِسْمُ الْفَاعِلِ, the وَاوٌ and يَاءٌ change to…",
          "options": [
            "an أَلِفٌ",
            "a نُوْنٌ",
            "a هَمْزَةٌ",
            "a تَاءٌ"
          ],
          "correct": 2,
          "explanation": "قَلْبٌ in اِسْمُ الْفَاعِلِ changes the weak letter to a هَمْزَةٌ: خَاوِفٌ ← خَائِفٌ، بَايِعٌ ← بَائِعٌ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The change from يَبْيِعُ to يَبِيْعُ is an example of…",
          "options": [
            "قَلْبٌ",
            "نَقْلٌ",
            "حَذْفٌ",
            "اِلْتِقَاءُ السَّاكِنَيْنِ"
          ],
          "correct": 1,
          "explanation": "The كَسْرَةٌ of the يَاءٌ moves back onto the سَاكِنٌ بَاء before it — this is نَقْلٌ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In the الْمُضَارِعُ of بَاب سَمِعَ, which sequence of changes produces يَخَافُ?",
          "options": [
            "قَلْبٌ then نَقْلٌ",
            "نَقْلٌ then قَلْبٌ",
            "حَذْفٌ then قَلْبٌ",
            "نَقْلٌ only"
          ],
          "correct": 1,
          "explanation": "يَخْوَفُ ← يَخَوْفُ by نَقْلٌ, then the وَاوٌ changes to an أَلِفٌ by قَلْبٌ: يَخَافُ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which changes produce the اِسْمُ الْمَفْعُوْلِ مَبِيْعٌ from مَبْيُوْعٌ?",
          "options": [
            "نَقْلٌ then حَذْفٌ (and the ضَمَّةٌ becomes a كَسْرَةٌ to match the يَاءٌ)",
            "قَلْبٌ then حَذْفٌ",
            "قَلْبٌ only",
            "حَذْفٌ only"
          ],
          "correct": 0,
          "explanation": "مَبْيُوْعٌ ← مَبُيْوْعٌ by نَقْلٌ, then the وَاوٌ is dropped by حَذْفٌ; the ضَمَّةٌ before the يَاءٌ becomes a كَسْرَةٌ: مَبِيْعٌ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "After حَذْفٌ in الْمَاضِيْ, the فَاءُ الْكَلِمَةِ of verbs from بَاب نَصَرَ takes a…",
          "options": [
            "كَسْرَةٌ",
            "فَتْحَةٌ",
            "ضَمَّةٌ",
            "سُكُوْنٌ"
          ],
          "correct": 2,
          "explanation": "Verbs from سَمِعَ and ضَرَبَ take a كَسْرَةٌ (خِفْنَ، بِعْنَ) while verbs from نَصَرَ take a ضَمَّةٌ (قُلْنَ)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In الْمُضَارِعُ, حَذْفٌ occurs in which صِيَغٌ?",
          "options": [
            "الْغَائِبُ and الْغَائِبَةُ",
            "الْغَائِبَاتُ and الْمُخَاطَبَاتُ",
            "الْمُتَكَلِّمُ and الْمُتَكَلِّمُوْنَ",
            "All fourteen صِيَغٌ"
          ],
          "correct": 1,
          "explanation": "Only the feminine plural forms end in the سَاكِنٌ pronoun نَ, causing اِلْتِقَاءُ السَّاكِنَيْنِ: يَخَفْنَ، تَخَفْنَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which of the following is NOT one of the three changes of الْأَجْوَفُ?",
          "options": [
            "قَلْبٌ",
            "نَقْلٌ",
            "حَذْفٌ",
            "إِدْغَامٌ"
          ],
          "correct": 3,
          "explanation": "The three changes that may apply to أَجْوَفُ verbs are قَلْبٌ, نَقْلٌ, and حَذْفٌ. إِدْغَامٌ (assimilation) relates to الْمُضَاعَفُ."
        }
      ]
    },
    {
      "id": "l2",
      "title": "الثُّلَاثِيُّ الْمُجَرَّدُ",
      "subtitle": "الْأَجْوَفُ from بَاب سَمِعَ، ضَرَبَ، نَصَرَ — with a full review of the changes",
      "concepts": [
        {
          "heading": "Part 1: الْأَجْوَفُ مِنْ بَابِ سَمِعَ يَسْمَعُ",
          "lines": [
            {
              "html": "The model <bdi>أَجْوَفُ</bdi> verb from <bdi>بَاب سَمِعَ</bdi> is <bdi>خَافَ يَخَافُ خَوْفًا</bdi> (to be scared). In <bdi>الْمَاضِيْ</bdi>, <bdi>قَلْبٌ</bdi> takes place (<bdi>خَوِفَ ← خَافَ</bdi>); in <bdi>الْمُضَارِعُ</bdi>, <bdi>نَقْلٌ</bdi> then <bdi>قَلْبٌ</bdi> take place (<bdi>يَخْوَفُ ← يَخَافُ</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — خَافَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "خَافَ",
                    "يَخَافُ",
                    "خَوْفًا",
                    "خِيْفَ",
                    "يُخَافُ",
                    "خَفْ",
                    "لَا تَخَفْ",
                    "خَائِفٌ",
                    "مَخُوْفٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — خَافَ (verb forms)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "خَافَ",
                    "يَخَافُ",
                    "خِيْفَ",
                    "يُخَافُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "خَافَا",
                    "يَخَافَانِ",
                    "خِيْفَا",
                    "يُخَافَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "خَافُوْا",
                    "يَخَافُوْنَ",
                    "خِيْفُوْا",
                    "يُخَافُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "خَافَتْ",
                    "تَخَافُ",
                    "خِيْفَتْ",
                    "تُخَافُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "خَافَتَا",
                    "تَخَافَانِ",
                    "خِيْفَتَا",
                    "تُخَافَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "خِفْنَ",
                    "يَخَفْنَ",
                    "خِفْنَ",
                    "يُخَفْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "خِفْتَ",
                    "تَخَافُ",
                    "خِفْتَ",
                    "تُخَافُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "خِفْتُمَا",
                    "تَخَافَانِ",
                    "خِفْتُمَا",
                    "تُخَافَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "خِفْتُمْ",
                    "تَخَافُوْنَ",
                    "خِفْتُمْ",
                    "تُخَافُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "خِفْتِ",
                    "تَخَافِيْنَ",
                    "خِفْتِ",
                    "تُخَافِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "خِفْتُمَا",
                    "تَخَافَانِ",
                    "خِفْتُمَا",
                    "تُخَافَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "خِفْتُنَّ",
                    "تَخَفْنَ",
                    "خِفْتُنَّ",
                    "تُخَفْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "خِفْتُ",
                    "أَخَافُ",
                    "خِفْتُ",
                    "أُخَافُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "خِفْنَا",
                    "نَخَافُ",
                    "خِفْنَا",
                    "نُخَافُ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — خَافَ (الأمر، النهي، اسم الفاعل، اسم المفعول)",
                "headers": [
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "خَفْ",
                    "لَا تَخَفْ",
                    "خَائِفٌ",
                    "مَخُوْفٌ"
                  ],
                  [
                    "خَافَا",
                    "لَا تَخَافَا",
                    "خَائِفَانِ",
                    "مَخُوْفَانِ"
                  ],
                  [
                    "خَافُوْا",
                    "لَا تَخَافُوْا",
                    "خَائِفُوْنَ",
                    "مَخُوْفُوْنَ"
                  ],
                  [
                    "خَافِيْ",
                    "لَا تَخَافِيْ",
                    "خَائِفَةٌ",
                    "مَخُوْفَةٌ"
                  ],
                  [
                    "خَافَا",
                    "لَا تَخَافَا",
                    "خَائِفَتَانِ",
                    "مَخُوْفَتَانِ"
                  ],
                  [
                    "خَفْنَ",
                    "لَا تَخَفْنَ",
                    "خَائِفَاتٌ",
                    "مَخُوْفَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "خِفْتُمْ is…",
            "kind": "mcq",
            "options": [
              "الْمَاضِيْ، الْمُخَاطَبُوْنَ — You (m/p) feared",
              "الْمَاضِي الْمَجْهُوْلُ، الْغَائِبَةُ — It (f) was sold",
              "الْمُضَارِعُ، الْغَائِبَاتُ — They (f/p) say",
              "النَّهْيُ، الْمُخَاطَبُ — Do not sell (m/s)"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 2: الْأَجْوَفُ مِنْ بَابِ ضَرَبَ يَضْرِبُ",
          "lines": [
            {
              "html": "The model <bdi>أَجْوَفُ</bdi> verb from <bdi>بَاب ضَرَبَ</bdi> is <bdi>بَاعَ يَبِيْعُ بَيْعًا</bdi> (to sell). The <bdi>عَيْنُ الْكَلِمَةِ</bdi> is a <bdi>يَاءٌ</bdi> (<bdi>أَجْوَفُ يَائِيٌّ</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — بَاعَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "بَاعَ",
                    "يَبِيْعُ",
                    "بَيْعًا",
                    "بِيْعَ",
                    "يُبَاعُ",
                    "بِعْ",
                    "لَا تَبِعْ",
                    "بَائِعٌ",
                    "مَبِيْعٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — بَاعَ (verb forms)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "بَاعَ",
                    "يَبِيْعُ",
                    "بِيْعَ",
                    "يُبَاعُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "بَاعَا",
                    "يَبِيْعَانِ",
                    "بِيْعَا",
                    "يُبَاعَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "بَاعُوْا",
                    "يَبِيْعُوْنَ",
                    "بِيْعُوْا",
                    "يُبَاعُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "بَاعَتْ",
                    "تَبِيْعُ",
                    "بِيْعَتْ",
                    "تُبَاعُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "بَاعَتَا",
                    "تَبِيْعَانِ",
                    "بِيْعَتَا",
                    "تُبَاعَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "بِعْنَ",
                    "يَبِعْنَ",
                    "بِعْنَ",
                    "يُبَعْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "بِعْتَ",
                    "تَبِيْعُ",
                    "بِعْتَ",
                    "تُبَاعُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "بِعْتُمَا",
                    "تَبِيْعَانِ",
                    "بِعْتُمَا",
                    "تُبَاعَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "بِعْتُمْ",
                    "تَبِيْعُوْنَ",
                    "بِعْتُمْ",
                    "تُبَاعُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "بِعْتِ",
                    "تَبِيْعِيْنَ",
                    "بِعْتِ",
                    "تُبَاعِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "بِعْتُمَا",
                    "تَبِيْعَانِ",
                    "بِعْتُمَا",
                    "تُبَاعَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "بِعْتُنَّ",
                    "تَبِعْنَ",
                    "بِعْتُنَّ",
                    "تُبَعْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "بِعْتُ",
                    "أَبِيْعُ",
                    "بِعْتُ",
                    "أُبَاعُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "بِعْنَا",
                    "نَبِيْعُ",
                    "بِعْنَا",
                    "نُبَاعُ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — بَاعَ (الأمر، النهي، اسم الفاعل، اسم المفعول)",
                "headers": [
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "بِعْ",
                    "لَا تَبِعْ",
                    "بَائِعٌ",
                    "مَبِيْعٌ"
                  ],
                  [
                    "بِيْعَا",
                    "لَا تَبِيْعَا",
                    "بَائِعَانِ",
                    "مَبِيْعَانِ"
                  ],
                  [
                    "بِيْعُوْا",
                    "لَا تَبِيْعُوْا",
                    "بَائِعُوْنَ",
                    "مَبِيْعُوْنَ"
                  ],
                  [
                    "بِيْعِيْ",
                    "لَا تَبِيْعِيْ",
                    "بَائِعَةٌ",
                    "مَبِيْعَةٌ"
                  ],
                  [
                    "بِيْعَا",
                    "لَا تَبِيْعَا",
                    "بَائِعَتَانِ",
                    "مَبِيْعَتَانِ"
                  ],
                  [
                    "بِعْنَ",
                    "لَا تَبِعْنَ",
                    "بَائِعَاتٌ",
                    "مَبِيْعَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "بِيْعَتْ is…",
            "kind": "mcq",
            "options": [
              "الْمَاضِي الْمَجْهُوْلُ، الْغَائِبَةُ — It (f) was sold",
              "الْمُضَارِعُ، الْغَائِبَاتُ — They (f/p) say",
              "النَّهْيُ، الْمُخَاطَبُ — Do not sell (m/s)",
              "الْأَمْرُ، الْمُخَاطَبَةُ — Say! (f/s)"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 3: الْأَجْوَفُ مِنْ بَابِ نَصَرَ يَنْصُرُ",
          "lines": [
            {
              "html": "The model <bdi>أَجْوَفُ</bdi> verb from <bdi>بَاب نَصَرَ</bdi> is <bdi>قَالَ يَقُوْلُ قَوْلًا</bdi> (to say). The <bdi>عَيْنُ الْكَلِمَةِ</bdi> is a <bdi>وَاوٌ</bdi> (<bdi>أَجْوَفُ وَاوِيٌّ</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — قَالَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "قَالَ",
                    "يَقُوْلُ",
                    "قَوْلًا",
                    "قِيْلَ",
                    "يُقَالُ",
                    "قُلْ",
                    "لَا تَقُلْ",
                    "قَائِلٌ",
                    "مَقُوْلٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — قَالَ (verb forms)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "قَالَ",
                    "يَقُوْلُ",
                    "قِيْلَ",
                    "يُقَالُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "قَالَا",
                    "يَقُوْلَانِ",
                    "قِيْلَا",
                    "يُقَالَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "قَالُوْا",
                    "يَقُوْلُوْنَ",
                    "قِيْلُوْا",
                    "يُقَالُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "قَالَتْ",
                    "تَقُوْلُ",
                    "قِيْلَتْ",
                    "تُقَالُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "قَالَتَا",
                    "تَقُوْلَانِ",
                    "قِيْلَتَا",
                    "تُقَالَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "قُلْنَ",
                    "يَقُلْنَ",
                    "قِلْنَ",
                    "يُقَلْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "قُلْتَ",
                    "تَقُوْلُ",
                    "قِلْتَ",
                    "تُقَالُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "قُلْتُمَا",
                    "تَقُوْلَانِ",
                    "قِلْتُمَا",
                    "تُقَالَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "قُلْتُمْ",
                    "تَقُوْلُوْنَ",
                    "قِلْتُمْ",
                    "تُقَالُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "قُلْتِ",
                    "تَقُوْلِيْنَ",
                    "قِلْتِ",
                    "تُقَالِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "قُلْتُمَا",
                    "تَقُوْلَانِ",
                    "قِلْتُمَا",
                    "تُقَالَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "قُلْتُنَّ",
                    "تَقُلْنَ",
                    "قِلْتُنَّ",
                    "تُقَلْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "قُلْتُ",
                    "أَقُوْلُ",
                    "قِلْتُ",
                    "أُقَالُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "قُلْنَا",
                    "نَقُوْلُ",
                    "قِلْنَا",
                    "نُقَالُ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — قَالَ (الأمر، النهي، اسم الفاعل، اسم المفعول)",
                "headers": [
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "قُلْ",
                    "لَا تَقُلْ",
                    "قَائِلٌ",
                    "مَقُوْلٌ"
                  ],
                  [
                    "قُوْلَا",
                    "لَا تَقُوْلَا",
                    "قَائِلَانِ",
                    "مَقُوْلَانِ"
                  ],
                  [
                    "قُوْلُوْا",
                    "لَا تَقُوْلُوْا",
                    "قَائِلُوْنَ",
                    "مَقُوْلُوْنَ"
                  ],
                  [
                    "قُوْلِيْ",
                    "لَا تَقُوْلِيْ",
                    "قَائِلَةٌ",
                    "مَقُوْلَةٌ"
                  ],
                  [
                    "قُوْلَا",
                    "لَا تَقُوْلَا",
                    "قَائِلَتَانِ",
                    "مَقُوْلَتَانِ"
                  ],
                  [
                    "قُلْنَ",
                    "لَا تَقُلْنَ",
                    "قَائِلَاتٌ",
                    "مَقُوْلَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "يَقُلْنَ is…",
            "kind": "mcq",
            "options": [
              "الْمُضَارِعُ، الْغَائِبَاتُ — They (f/p) say",
              "النَّهْيُ، الْمُخَاطَبُ — Do not sell (m/s)",
              "الْأَمْرُ، الْمُخَاطَبَةُ — Say! (f/s)",
              "اِسْمُ الْمَفْعُوْلِ of خَافَ — feared"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Review: Changes in الْأَجْوَفُ from ثُلَاثِيٌّ مُجَرَّدٌ Verbs",
          "lines": [
            {
              "html": "The table below summarises the changes that take place in the <bdi>أَجْوَف</bdi> of <bdi>الثُّلَاثِيُّ الْمُجَرَّدُ</bdi> verbs, <bdi>صِيْغَةٌ</bdi> by <bdi>صِيْغَةٌ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "Changes per صِيْغَةٌ (verb forms)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "قَلْبٌ",
                    "نَقْلٌ",
                    "قَلْبٌ",
                    "نَقْلٌ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "قَلْبٌ",
                    "نَقْلٌ",
                    "قَلْبٌ",
                    "نَقْلٌ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "قَلْبٌ",
                    "نَقْلٌ",
                    "قَلْبٌ",
                    "نَقْلٌ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "قَلْبٌ",
                    "نَقْلٌ",
                    "قَلْبٌ",
                    "نَقْلٌ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "قَلْبٌ",
                    "نَقْلٌ",
                    "قَلْبٌ",
                    "نَقْلٌ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ حَذْفٌ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ حَذْفٌ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ حَذْفٌ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ حَذْفٌ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ",
                    "قَلْبٌ حَذْفٌ",
                    "نَقْلٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "Changes per صِيْغَةٌ (الأمر، النهي، اسم الفاعل، اسم المفعول)",
                "headers": [
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "نَقْلٌ حَذْفٌ",
                    "نَقْلٌ حَذْفٌ",
                    "قَلْبٌ",
                    "نَقْلٌ حَذْفٌ"
                  ],
                  [
                    "نَقْلٌ",
                    "نَقْلٌ",
                    "قَلْبٌ",
                    "نَقْلٌ حَذْفٌ"
                  ],
                  [
                    "نَقْلٌ",
                    "نَقْلٌ",
                    "قَلْبٌ",
                    "نَقْلٌ حَذْفٌ"
                  ],
                  [
                    "نَقْلٌ",
                    "نَقْلٌ",
                    "قَلْبٌ",
                    "نَقْلٌ حَذْفٌ"
                  ],
                  [
                    "نَقْلٌ",
                    "نَقْلٌ",
                    "قَلْبٌ",
                    "نَقْلٌ حَذْفٌ"
                  ],
                  [
                    "نَقْلٌ حَذْفٌ",
                    "نَقْلٌ حَذْفٌ",
                    "قَلْبٌ",
                    "نَقْلٌ حَذْفٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In the صِيْغَةٌ الْغَائِبَاتُ (خِفْنَ، بِعْنَ، قِلْنَ), which changes produce the الْمَاضِي الْمَعْلُوْمُ form?",
            "kind": "mcq",
            "options": ["قَلْبٌ only", "نَقْلٌ only", "قَلْبٌ ثُمَّ حَذْفٌ", "نَقْلٌ ثُمَّ حَذْفٌ"],
            "correct": 2
          }
        },
        {
          "heading": "Review Table: الْمَاضِيْ of the Three أَبْوَاب",
          "lines": [
            {
              "table": {
                "title": "الْمَاضِيْ — معلوم and مجهول (بَاب سَمِعَ، ضَرَبَ، نَصَرَ)",
                "headers": [
                  "صِيْغَةٌ",
                  "مَعْلُوْم (سَمِعَ)",
                  "مَعْلُوْم (ضَرَبَ)",
                  "مَعْلُوْم (نَصَرَ)",
                  "مَجْهُوْل (سَمِعَ)",
                  "مَجْهُوْل (ضَرَبَ)",
                  "مَجْهُوْل (نَصَرَ)"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "خَافَ",
                    "بَاعَ",
                    "قَالَ",
                    "خِيْفَ",
                    "بِيْعَ",
                    "قِيْلَ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "خَافَا",
                    "بَاعَا",
                    "قَالَا",
                    "خِيْفَا",
                    "بِيْعَا",
                    "قِيْلَا"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "خَافُوْا",
                    "بَاعُوْا",
                    "قَالُوْا",
                    "خِيْفُوْا",
                    "بِيْعُوْا",
                    "قِيْلُوْا"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "خَافَتْ",
                    "بَاعَتْ",
                    "قَالَتْ",
                    "خِيْفَتْ",
                    "بِيْعَتْ",
                    "قِيْلَتْ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "خَافَتَا",
                    "بَاعَتَا",
                    "قَالَتَا",
                    "خِيْفَتَا",
                    "بِيْعَتَا",
                    "قِيْلَتَا"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "خِفْنَ",
                    "بِعْنَ",
                    "قُلْنَ",
                    "خِفْنَ",
                    "بِعْنَ",
                    "قِلْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "خِفْتَ",
                    "بِعْتَ",
                    "قُلْتَ",
                    "خِفْتَ",
                    "بِعْتَ",
                    "قِلْتَ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "خِفْتُمَا",
                    "بِعْتُمَا",
                    "قُلْتُمَا",
                    "خِفْتُمَا",
                    "بِعْتُمَا",
                    "قِلْتُمَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "خِفْتُمْ",
                    "بِعْتُمْ",
                    "قُلْتُمْ",
                    "خِفْتُمْ",
                    "بِعْتُمْ",
                    "قِلْتُمْ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "خِفْتِ",
                    "بِعْتِ",
                    "قُلْتِ",
                    "خِفْتِ",
                    "بِعْتِ",
                    "قِلْتِ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "خِفْتُمَا",
                    "بِعْتُمَا",
                    "قُلْتُمَا",
                    "خِفْتُمَا",
                    "بِعْتُمَا",
                    "قِلْتُمَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "خِفْتُنَّ",
                    "بِعْتُنَّ",
                    "قُلْتُنَّ",
                    "خِفْتُنَّ",
                    "بِعْتُنَّ",
                    "قِلْتُنَّ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "خِفْتُ",
                    "بِعْتُ",
                    "قُلْتُ",
                    "خِفْتُ",
                    "بِعْتُ",
                    "قِلْتُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "خِفْنَا",
                    "بِعْنَا",
                    "قُلْنَا",
                    "خِفْنَا",
                    "بِعْنَا",
                    "قِلْنَا"
                  ]
                ]
              }
            },
            {
              "html": "In the <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi>, the <bdi>فَاءُ الْكَلِمَةِ</bdi> of the shortened forms takes a <bdi>كَسْرَةٌ</bdi> in ALL three <bdi>أَبْوَاب</bdi> — hence <bdi>قِلْنَ</bdi> (passive) versus <bdi>قُلْنَ</bdi> (active).",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In the الْمَاضِي الْمَجْهُوْلُ of all three أَبْوَاب (خَافَ، بَاعَ، قَالَ), what حَرَكَةٌ does the فَاءُ الْكَلِمَةِ of the shortened صِيَغُ take?",
            "kind": "mcq",
            "options": ["فَتْحَةٌ", "ضَمَّةٌ", "كَسْرَةٌ", "سُكُوْنٌ"],
            "correct": 2
          }
        },
        {
          "heading": "Review Table: الْمُضَارِعُ of the Three أَبْوَاب",
          "lines": [
            {
              "table": {
                "title": "الْمُضَارِعُ — معلوم and مجهول (بَاب سَمِعَ، ضَرَبَ، نَصَرَ)",
                "headers": [
                  "صِيْغَةٌ",
                  "مَعْلُوْم (سَمِعَ)",
                  "مَعْلُوْم (ضَرَبَ)",
                  "مَعْلُوْم (نَصَرَ)",
                  "مَجْهُوْل (سَمِعَ)",
                  "مَجْهُوْل (ضَرَبَ)",
                  "مَجْهُوْل (نَصَرَ)"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "يَخَافُ",
                    "يَبِيْعُ",
                    "يَقُوْلُ",
                    "يُخَافُ",
                    "يُبَاعُ",
                    "يُقَالُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "يَخَافَانِ",
                    "يَبِيْعَانِ",
                    "يَقُوْلَانِ",
                    "يُخَافَانِ",
                    "يُبَاعَانِ",
                    "يُقَالَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "يَخَافُوْنَ",
                    "يَبِيْعُوْنَ",
                    "يَقُوْلُوْنَ",
                    "يُخَافُوْنَ",
                    "يُبَاعُوْنَ",
                    "يُقَالُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "تَخَافُ",
                    "تَبِيْعُ",
                    "تَقُوْلُ",
                    "تُخَافُ",
                    "تُبَاعُ",
                    "تُقَالُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "تَخَافَانِ",
                    "تَبِيْعَانِ",
                    "تَقُوْلَانِ",
                    "تُخَافَانِ",
                    "تُبَاعَانِ",
                    "تُقَالَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "يَخَفْنَ",
                    "يَبِعْنَ",
                    "يَقُلْنَ",
                    "يُخَفْنَ",
                    "يُبَعْنَ",
                    "يُقَلْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "تَخَافُ",
                    "تَبِيْعُ",
                    "تَقُوْلُ",
                    "تُخَافُ",
                    "تُبَاعُ",
                    "تُقَالُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَخَافَانِ",
                    "تَبِيْعَانِ",
                    "تَقُوْلَانِ",
                    "تُخَافَانِ",
                    "تُبَاعَانِ",
                    "تُقَالَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَخَافُوْنَ",
                    "تَبِيْعُوْنَ",
                    "تَقُوْلُوْنَ",
                    "تُخَافُوْنَ",
                    "تُبَاعُوْنَ",
                    "تُقَالُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَخَافِيْنَ",
                    "تَبِيْعِيْنَ",
                    "تَقُوْلِيْنَ",
                    "تُخَافِيْنَ",
                    "تُبَاعِيْنَ",
                    "تُقَالِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَخَافَانِ",
                    "تَبِيْعَانِ",
                    "تَقُوْلَانِ",
                    "تُخَافَانِ",
                    "تُبَاعَانِ",
                    "تُقَالَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَخَفْنَ",
                    "تَبِعْنَ",
                    "تَقُلْنَ",
                    "تُخَفْنَ",
                    "تُبَعْنَ",
                    "تُقَلْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أَخَافُ",
                    "أَبِيْعُ",
                    "أَقُوْلُ",
                    "أُخَافُ",
                    "أُبَاعُ",
                    "أُقَالُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "نَخَافُ",
                    "نَبِيْعُ",
                    "نَقُوْلُ",
                    "نُخَافُ",
                    "نُبَاعُ",
                    "نُقَالُ"
                  ]
                ]
              }
            },
            {
              "html": "The <bdi>حَرَكَةٌ</bdi> of the <bdi>فَاءُ الْكَلِمَةِ</bdi> after the <bdi>حَذْفٌ</bdi> is as follows:",
              "list": false
            },
            {
              "table": {
                "title": "حَرَكَةٌ of the فَاءُ الْكَلِمَةِ after حَذْفٌ",
                "headers": [
                  "بَاب",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْأَمْرُ"
                ],
                "rows": [
                  [
                    "بَاب سَمِعَ",
                    "كَسْرَةٌ (خِفْنَ)",
                    "كَسْرَةٌ (خِفْنَ)",
                    "فَتْحَةٌ (يَخَفْنَ)",
                    "فَتْحَةٌ (خَفْ)"
                  ],
                  [
                    "بَاب ضَرَبَ",
                    "كَسْرَةٌ (بِعْنَ)",
                    "كَسْرَةٌ (بِعْنَ)",
                    "كَسْرَةٌ (يَبِعْنَ)",
                    "كَسْرَةٌ (بِعْ)"
                  ],
                  [
                    "بَاب نَصَرَ",
                    "ضَمَّةٌ (قُلْنَ)",
                    "كَسْرَةٌ (قِلْنَ)",
                    "ضَمَّةٌ (يَقُلْنَ)",
                    "ضَمَّةٌ (قُلْ)"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "According to the summary table, what حَرَكَةٌ does the فَاءُ الْكَلِمَةِ take in the الْأَمْرُ of بَاب نَصَرَ, as in قُلْ?",
            "kind": "mcq",
            "options": ["كَسْرَةٌ", "فَتْحَةٌ", "ضَمَّةٌ", "سُكُوْنٌ"],
            "correct": 2
          }
        },
        {
          "heading": "Review Table: الْأَمْرُ وَالنَّهْيُ",
          "lines": [
            {
              "table": {
                "title": "الْأَمْرُ وَالنَّهْيُ (بَاب سَمِعَ، ضَرَبَ، نَصَرَ)",
                "headers": [
                  "أَمْر (سَمِعَ)",
                  "أَمْر (ضَرَبَ)",
                  "أَمْر (نَصَرَ)",
                  "نَهْي (سَمِعَ)",
                  "نَهْي (ضَرَبَ)",
                  "نَهْي (نَصَرَ)"
                ],
                "rows": [
                  [
                    "خَفْ",
                    "بِعْ",
                    "قُلْ",
                    "لَا تَخَفْ",
                    "لَا تَبِعْ",
                    "لَا تَقُلْ"
                  ],
                  [
                    "خَافَا",
                    "بِيْعَا",
                    "قُوْلَا",
                    "لَا تَخَافَا",
                    "لَا تَبِيْعَا",
                    "لَا تَقُوْلَا"
                  ],
                  [
                    "خَافُوْا",
                    "بِيْعُوْا",
                    "قُوْلُوْا",
                    "لَا تَخَافُوْا",
                    "لَا تَبِيْعُوْا",
                    "لَا تَقُوْلُوْا"
                  ],
                  [
                    "خَافِيْ",
                    "بِيْعِيْ",
                    "قُوْلِيْ",
                    "لَا تَخَافِيْ",
                    "لَا تَبِيْعِيْ",
                    "لَا تَقُوْلِيْ"
                  ],
                  [
                    "خَافَا",
                    "بِيْعَا",
                    "قُوْلَا",
                    "لَا تَخَافَا",
                    "لَا تَبِيْعَا",
                    "لَا تَقُوْلَا"
                  ],
                  [
                    "خَفْنَ",
                    "بِعْنَ",
                    "قُلْنَ",
                    "لَا تَخَفْنَ",
                    "لَا تَبِعْنَ",
                    "لَا تَقُلْنَ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "لَا تَبِعْ is…",
            "kind": "mcq",
            "options": [
              "النَّهْيُ، الْمُخَاطَبُ — Do not sell (m/s)",
              "الْأَمْرُ، الْمُخَاطَبَةُ — Say! (f/s)",
              "اِسْمُ الْمَفْعُوْلِ of خَافَ — feared",
              "الْمُضَارِعُ الْمَجْهُوْلُ، الْغَائِبَةُ / الْمُخَاطَبُ — It (f) is sold / You are sold"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Review Table: اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ",
          "lines": [
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ (بَاب سَمِعَ، ضَرَبَ، نَصَرَ)",
                "headers": [
                  "فَاعِل (سَمِعَ)",
                  "فَاعِل (ضَرَبَ)",
                  "فَاعِل (نَصَرَ)",
                  "مَفْعُوْل (سَمِعَ)",
                  "مَفْعُوْل (ضَرَبَ)",
                  "مَفْعُوْل (نَصَرَ)"
                ],
                "rows": [
                  [
                    "خَائِفٌ",
                    "بَائِعٌ",
                    "قَائِلٌ",
                    "مَخُوْفٌ",
                    "مَبِيْعٌ",
                    "مَقُوْلٌ"
                  ],
                  [
                    "خَائِفَانِ",
                    "بَائِعَانِ",
                    "قَائِلَانِ",
                    "مَخُوْفَانِ",
                    "مَبِيْعَانِ",
                    "مَقُوْلَانِ"
                  ],
                  [
                    "خَائِفُوْنَ",
                    "بَائِعُوْنَ",
                    "قَائِلُوْنَ",
                    "مَخُوْفُوْنَ",
                    "مَبِيْعُوْنَ",
                    "مَقُوْلُوْنَ"
                  ],
                  [
                    "خَائِفَةٌ",
                    "بَائِعَةٌ",
                    "قَائِلَةٌ",
                    "مَخُوْفَةٌ",
                    "مَبِيْعَةٌ",
                    "مَقُوْلَةٌ"
                  ],
                  [
                    "خَائِفَتَانِ",
                    "بَائِعَتَانِ",
                    "قَائِلَتَانِ",
                    "مَخُوْفَتَانِ",
                    "مَبِيْعَتَانِ",
                    "مَقُوْلَتَانِ"
                  ],
                  [
                    "خَائِفَاتٌ",
                    "بَائِعَاتٌ",
                    "قَائِلَاتٌ",
                    "مَخُوْفَاتٌ",
                    "مَبِيْعَاتٌ",
                    "مَقُوْلَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "مَخُوْفٌ is…",
            "kind": "mcq",
            "options": [
              "اِسْمُ الْمَفْعُوْلِ of خَافَ — feared",
              "الْمُضَارِعُ الْمَجْهُوْلُ، الْغَائِبَةُ / الْمُخَاطَبُ — It (f) is sold / You are sold",
              "الْمَاضِيْ، الْمُخَاطَبُوْنَ — You (m/p) feared",
              "الْمَاضِي الْمَجْهُوْلُ، الْغَائِبَةُ — It (f) was sold"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Parts 1–3: الأجوف from الثُّلَاثِيُّ الْمُجَرَّدُ",
        "rows": [
          {
            "label": "Model for بَاب سَمِعَ — to be scared",
            "arabic": "خَافَ يَخَافُ خَوْفًا",
            "meaning": "Model for بَاب سَمِعَ — to be scared",
            "unlockAt": 0
          },
          {
            "label": "Model for بَاب ضَرَبَ — to sell",
            "arabic": "بَاعَ يَبِيْعُ بَيْعًا",
            "meaning": "Model for بَاب ضَرَبَ — to sell",
            "unlockAt": 1
          },
          {
            "label": "Model for بَاب نَصَرَ — to say",
            "arabic": "قَالَ يَقُوْلُ قَوْلًا",
            "meaning": "Model for بَاب نَصَرَ — to say",
            "unlockAt": 2
          },
          {
            "label": "الماضي المجهول — the فَاء always takes a كَسْرَةٌ",
            "arabic": "خِيْفَ، بِيْعَ، قِيْلَ",
            "meaning": "الماضي المجهول — the فَاء always takes a كَسْرَةٌ",
            "unlockAt": 3
          },
          {
            "label": "الأمر — فَتْحَةٌ (سَمِعَ), كَسْرَةٌ (ضَرَبَ), ضَمَّةٌ (نَصَرَ)",
            "arabic": "خَفْ، بِعْ، قُلْ",
            "meaning": "الأمر — فَتْحَةٌ (سَمِعَ), كَسْرَةٌ (ضَرَبَ), ضَمَّةٌ (نَصَرَ)",
            "unlockAt": 4
          },
          {
            "label": "اسم الفاعل — the weak letter becomes a هَمْزَةٌ",
            "arabic": "خَائِفٌ، بَائِعٌ، قَائِلٌ",
            "meaning": "اسم الفاعل — the weak letter becomes a هَمْزَةٌ",
            "unlockAt": 5
          },
          {
            "label": "اسم المفعول — after نَقْلٌ and حَذْفٌ",
            "arabic": "مَخُوْفٌ، مَبِيْعٌ، مَقُوْلٌ",
            "meaning": "اسم المفعول — after نَقْلٌ and حَذْفٌ",
            "unlockAt": 6
          }
        ]
      },
      "quiz": [
        {
          "q": "خَافَ يَخَافُ is the أَجْوَفُ model from which بَاب?",
          "options": [
            "بَاب ضَرَبَ",
            "بَاب نَصَرَ",
            "بَاب سَمِعَ",
            "بَاب فَتَحَ"
          ],
          "correct": 2,
          "explanation": "خَافَ يَخَافُ (originally خَوِفَ يَخْوَفُ) follows بَاب سَمِعَ يَسْمَعُ. بَاعَ يَبِيْعُ is from ضَرَبَ, and قَالَ يَقُوْلُ from نَصَرَ."
        },
        {
          "q": "What is the الْمَاضِي الْمَجْهُوْلُ of بَاعَ?",
          "options": [
            "بُيِعَ",
            "بِيْعَ",
            "بَاعَ",
            "يُبَاعُ"
          ],
          "correct": 1,
          "explanation": "بُيِعَ becomes بِيْعَ by قَلْبٌ: the فَاء takes a كَسْرَةٌ. يُبَاعُ is the passive مُضَارِع."
        },
        {
          "q": "The أَمْرُ of قَالَ for الْمُخَاطَبُ is…",
          "options": [
            "قُوْلْ",
            "قِلْ",
            "قُلْ",
            "قَالْ"
          ],
          "correct": 2,
          "explanation": "After نَقْلٌ the وَاوٌ meets the final سُكُوْنٌ, so it is dropped: قُلْ — with a ضَمَّةٌ because قَالَ is from بَاب نَصَرَ."
        },
        {
          "q": "'They (f/p) said' in the active الْمَاضِيْ is…",
          "options": [
            "قُلْنَ",
            "قِلْنَ",
            "قَالُوْا",
            "قُلْنَا"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَاتُ of قَالَ: after قَلْبٌ and حَذْفٌ, the فَاء of a بَاب نَصَرَ verb takes a ضَمَّةٌ — قُلْنَ. (قِلْنَ is the passive; قُلْنَا is 'We said'.)"
        },
        {
          "q": "What is the اِسْمُ الْمَفْعُوْلِ of خَافَ?",
          "options": [
            "مَخِيْفٌ",
            "خَائِفٌ",
            "مَخْوُوْفٌ",
            "مَخُوْفٌ"
          ],
          "correct": 3,
          "explanation": "مَخْوُوْفٌ undergoes نَقْلٌ then حَذْفٌ, giving مَخُوْفٌ. خَائِفٌ is the اِسْمُ الْفَاعِلِ."
        },
        {
          "q": "In the الْمَاضِي الْمَجْهُوْلُ, which حَرَكَةٌ does the فَاءُ الْكَلِمَةِ of the shortened forms take (e.g. for قَالَ)?",
          "options": [
            "ضَمَّةٌ, matching the active — قُلْنَ",
            "كَسْرَةٌ in all three أَبْوَاب — قِلْنَ",
            "فَتْحَةٌ in all three أَبْوَاب — قَلْنَ",
            "It depends on the بَاب"
          ],
          "correct": 1,
          "explanation": "The passive مَاضِيْ takes a كَسْرَةٌ on the فَاء in every بَاب: خِفْنَ، بِعْنَ، قِلْنَ — unlike the active, where بَاب نَصَرَ takes a ضَمَّةٌ (قُلْنَ)."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which صِيْغَةٌ is تَخَافِيْنَ, and what does it mean?",
          "options": [
            "الْمُخَاطَبَةُ — You (f/s) fear",
            "الْغَائِبَةُ — She fears",
            "الْمُخَاطَبَاتُ — You (f/p) fear",
            "الْغَائِبَاتُ — They (f/p) fear"
          ],
          "correct": 0,
          "explanation": "The ending يْنَ after the long vowel marks the second person feminine singular of الْمُضَارِعُ: 'You (f/s) fear'."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "يَبِعْنَ means…",
          "options": [
            "They (f/p) sell",
            "We sell",
            "They (m/p) sell",
            "You (f/p) sold"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَاتُ of the مُضَارِع of بَاعَ: the يَاءٌ is dropped by حَذْفٌ and the فَاء keeps a كَسْرَةٌ — 'They (f/p) sell'."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "'Do not say!' (m/p) is…",
          "options": [
            "لَا تَقُلْ",
            "لَا تَقُوْلُوْا",
            "لَا تَقُلْنَ",
            "قُوْلُوْا"
          ],
          "correct": 1,
          "explanation": "The نَهْي of قَالَ for الْمُخَاطَبُوْنَ is لَا تَقُوْلُوْا. لَا تَقُلْ is masculine singular and لَا تَقُلْنَ is feminine plural."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "بَائِعَةٌ is…",
          "options": [
            "اِسْمُ الْفَاعِلِ, feminine singular — a seller (f)",
            "اِسْمُ الْمَفْعُوْلِ, feminine singular — sold (f)",
            "الْمَاضِيْ, الْغَائِبَةُ — she sold",
            "اِسْمُ الْفَاعِلِ, feminine plural — sellers (f)"
          ],
          "correct": 0,
          "explanation": "بَائِعٌ (with the هَمْزَةٌ from قَلْبٌ) + ة = the feminine singular اِسْمُ الْفَاعِلِ of بَاعَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which of the following is the passive مُضَارِع 'it is said'?",
          "options": [
            "يَقُوْلُ",
            "قِيْلَ",
            "يُقَالُ",
            "مَقُوْلٌ"
          ],
          "correct": 2,
          "explanation": "يُقَالُ is الْمُضَارِعُ الْمَجْهُوْلُ of قَالَ. قِيْلَ is the passive مَاضِيْ and مَقُوْلٌ is the اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "title": "Book Exercise 1 (p. 175)",
          "kind": "mcq",
          "prompt": "يُصَامُ is which form of صَامَ (to fast)?",
          "options": [
            "الْمُضَارِعُ الْمَجْهُوْلُ — it is fasted",
            "الْمُضَارِعُ الْمَعْلُوْمُ — he fasts",
            "الْمَاضِي الْمَجْهُوْلُ — it was fasted",
            "الْمَصْدَرُ — fasting"
          ],
          "correct": 0,
          "explanation": "The pattern يُفَالُ is the passive مُضَارِع of the أَجْوَف: يُصَامُ, like يُقَالُ and يُبَاعُ."
        },
        {
          "title": "Book Exercise 1 (p. 175)",
          "kind": "mcq",
          "prompt": "لَا تَعِشْ is which form of عَاشَ (to live)?",
          "options": [
            "النَّهْيُ، الْمُخَاطَبُ — do not live",
            "الْأَمْرُ، الْمُخَاطَبُ — live!",
            "النَّهْيُ، الْمُخَاطَبَةُ — do not live (f/s)",
            "الْمُضَارِعُ الْمَنْفِيُّ — he does not live"
          ],
          "correct": 0,
          "explanation": "عَاشَ يَعِيْشُ is from بَاب ضَرَبَ; the نَهْي drops the يَاءٌ before the final سُكُوْنٌ: لَا تَعِشْ."
        },
        {
          "title": "Book Exercise 1 (p. 175)",
          "kind": "mcq",
          "prompt": "مَهِيْبٌ is which form of هَابَ (to be in awe of)?",
          "options": [
            "اِسْمُ الْمَفْعُوْلِ — one who is held in awe",
            "اِسْمُ الْفَاعِلِ — one who is in awe",
            "الْمَصْدَرُ — awe",
            "الْمَاضِي الْمَجْهُوْلُ — he was held in awe"
          ],
          "correct": 0,
          "explanation": "مَهْيُوْبٌ undergoes نَقْلٌ then حَذْفٌ (and the ضَمَّةٌ becomes a كَسْرَةٌ): مَهِيْبٌ — like مَبِيْعٌ from بَاعَ."
        },
        {
          "title": "Book Exercise 2 (p. 175)",
          "kind": "mcq",
          "prompt": "Change سَارَ (he walked) to the صِيْغَةٌ of the غَائِبَات (following the example قَالَ ← قُلْنَ).",
          "options": [
            "سِرْنَ",
            "سُرْنَ",
            "سَارَتْ",
            "سِرْنَا"
          ],
          "correct": 0,
          "explanation": "سَارَ يَسِيْرُ is from بَاب ضَرَبَ, so after حَذْفٌ the فَاء takes a كَسْرَةٌ: سِرْنَ."
        },
        {
          "title": "Book Exercise 2 (p. 175)",
          "kind": "mcq",
          "prompt": "Change طَافَ (he circled) to the صِيْغَةٌ of the غَائِبَات.",
          "options": [
            "طِفْنَ",
            "طُفْنَ",
            "طَافَا",
            "طَفْنَ"
          ],
          "correct": 1,
          "explanation": "طَافَ يَطُوْفُ is from بَاب نَصَرَ, so the فَاء takes a ضَمَّةٌ after حَذْفٌ: طُفْنَ — like قُلْنَ."
        },
        {
          "title": "Book Exercise 2 (p. 175)",
          "kind": "mcq",
          "prompt": "Change يَطُوْفُ to the صِيْغَةٌ of the غَائِبَات.",
          "options": [
            "يَطُفْنَ",
            "يَطِفْنَ",
            "تَطُفْنَ",
            "يَطُوْفُوْنَ"
          ],
          "correct": 0,
          "explanation": "In the مُضَارِع, حَذْفٌ occurs in الْغَائِبَاتُ; the بَاب نَصَرَ verb keeps the ضَمَّةٌ: يَطُفْنَ."
        },
        {
          "title": "Book Exercise 2 (p. 175)",
          "kind": "mcq",
          "prompt": "Change غَابَ (he was absent) to the صِيْغَةٌ of the غَائِبَات.",
          "options": [
            "غِبْنَ",
            "غُبْنَ",
            "غَابَتَا",
            "غَبْنَ"
          ],
          "correct": 0,
          "explanation": "غَابَ يَغِيْبُ is from بَاب ضَرَبَ, so the فَاء takes a كَسْرَةٌ after حَذْفٌ: غِبْنَ."
        },
        {
          "title": "Book Exercise 3 (p. 175)",
          "kind": "mcq",
          "prompt": "Based on the حَرَكَةٌ of the فَاءُ الْكَلِمَةِ, the verb خِلْنَ (active مَاضِيْ) can be from which بَاب/أَبْوَاب?",
          "options": [
            "بَاب سَمِعَ or بَاب ضَرَبَ",
            "بَاب نَصَرَ only",
            "بَاب سَمِعَ only",
            "Any of the three أَبْوَاب"
          ],
          "correct": 0,
          "explanation": "A كَسْرَةٌ on the فَاء in the active مَاضِيْ occurs in verbs from سَمِعَ and ضَرَبَ (خِفْنَ، بِعْنَ); بَاب نَصَرَ takes a ضَمَّةٌ."
        },
        {
          "title": "Book Exercise 3 (p. 175)",
          "kind": "mcq",
          "prompt": "زُرْتُمَا (active مَاضِيْ) must be from which بَاب?",
          "options": [
            "بَاب نَصَرَ",
            "بَاب ضَرَبَ",
            "بَاب سَمِعَ",
            "بَاب سَمِعَ or ضَرَبَ"
          ],
          "correct": 0,
          "explanation": "The ضَمَّةٌ on the فَاء in the active مَاضِيْ occurs only in verbs from بَاب نَصَرَ, like قُلْتُمَا."
        },
        {
          "title": "Book Exercise 3 (p. 175)",
          "kind": "mcq",
          "prompt": "أَجُوْعُ (مُضَارِع with a وَاوٌ) is from which بَاب?",
          "options": [
            "بَاب نَصَرَ",
            "بَاب ضَرَبَ",
            "بَاب سَمِعَ",
            "بَاب فَتَحَ"
          ],
          "correct": 0,
          "explanation": "A ضَمَّةٌ (with وَاوٌ) in the مُضَارِع marks بَاب نَصَرَ, like أَقُوْلُ. A كَسْرَةٌ with يَاءٌ marks ضَرَبَ, and a فَتْحَةٌ marks سَمِعَ."
        },
        {
          "title": "Book Exercise 3 (p. 175)",
          "kind": "mcq",
          "prompt": "The أَمْرُ form ذُقْ (taste!) shows the verb is from which بَاب?",
          "options": [
            "بَاب نَصَرَ",
            "بَاب سَمِعَ",
            "بَاب ضَرَبَ",
            "It cannot be determined"
          ],
          "correct": 0,
          "explanation": "A ضَمَّةٌ on the فَاء of the أَمْر (like قُلْ) marks بَاب نَصَرَ: ذَاقَ يَذُوْقُ."
        },
        {
          "title": "Book Exercise 3 (p. 175)",
          "kind": "mcq",
          "prompt": "لَا تَغَرْ (do not be jealous) shows the verb is from which بَاب?",
          "options": [
            "بَاب سَمِعَ",
            "بَاب نَصَرَ",
            "بَاب ضَرَبَ",
            "بَاب حَسِبَ"
          ],
          "correct": 0,
          "explanation": "The فَتْحَةٌ on the فَاء in the نَهْي (like لَا تَخَفْ) marks بَاب سَمِعَ: غَارَ يَغَارُ."
        },
        {
          "title": "Book Exercise 4 (p. 175)",
          "kind": "mcq",
          "prompt": "Using the مَصْدَر عَوْدًا (to return), write الْمُخَاطَبُوْنَ مِنَ الْأَمْرِ.",
          "options": [
            "عُوْدُوْا",
            "عُدْ",
            "عَادُوْا",
            "عِيْدُوْا"
          ],
          "correct": 0,
          "explanation": "عَادَ يَعُوْدُ is from بَاب نَصَرَ; the أَمْر plural keeps the وَاوٌ: عُوْدُوْا — like قُوْلُوْا."
        },
        {
          "title": "Book Exercise 4 (p. 175)",
          "kind": "mcq",
          "prompt": "Using the مَصْدَر هَيْبَةً (to be in awe of), write الْمُخَاطَبَةُ مِنَ الْمَاضِي الْمَعْلُوْمِ.",
          "options": [
            "هِبْتِ",
            "هُبْتِ",
            "هَابَتْ",
            "هِبْتَ"
          ],
          "correct": 0,
          "explanation": "هَابَ يَهَابُ is from بَاب سَمِعَ; after قَلْبٌ and حَذْفٌ the فَاء takes a كَسْرَةٌ: هِبْتِ (You f/s were in awe)."
        },
        {
          "title": "Book Exercise 4 (p. 175)",
          "kind": "mcq",
          "prompt": "Using the مَصْدَر هَيْبَةً, write الْغَائِبُوْنَ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ.",
          "options": [
            "يَهَابُوْنَ",
            "يَهِيْبُوْنَ",
            "يَهُوْبُوْنَ",
            "هَابُوْا"
          ],
          "correct": 0,
          "explanation": "بَاب سَمِعَ gives a فَتْحَةٌ with أَلِفٌ in the مُضَارِع (نَقْلٌ then قَلْبٌ): يَهَابُوْنَ — like يَخَافُوْنَ."
        },
        {
          "title": "Book Exercise 4 (p. 175)",
          "kind": "mcq",
          "prompt": "Using the مَصْدَر عَوْذًا (to seek refuge), write الْمُثَنَّى مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "عَائِذَانِ",
            "عَاوِذَانِ",
            "مَعُوْذَانِ",
            "عَائِذُوْنَ"
          ],
          "correct": 0,
          "explanation": "The وَاوٌ of عَاوِذٌ changes to a هَمْزَةٌ by قَلْبٌ: عَائِذٌ, dual عَائِذَانِ."
        },
        {
          "title": "to acquire",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to acquire\"?",
          "options": [
            "نَالَ يَنَالُ",
            "هَابَ يَهَابُ",
            "خَافَ يَخَافُ",
            "نَامَ يَنَامُ"
          ],
          "correct": 0
        },
        {
          "title": "to acquire",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَالَ يَنَالُ mean?",
          "options": [
            "to acquire",
            "to be in awe of",
            "to be scared",
            "to sleep"
          ],
          "correct": 0
        },
        {
          "title": "to acquire (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَالَ يَنَالُ?",
          "options": [
            "نَيْلًا",
            "هَيْبَةً",
            "خَوْفًا",
            "نَوْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to be in awe of",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be in awe of\"?",
          "options": [
            "هَابَ يَهَابُ",
            "خَافَ يَخَافُ",
            "نَامَ يَنَامُ",
            "سَارَ يَسِيْرُ"
          ],
          "correct": 0
        },
        {
          "title": "to be in awe of",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does هَابَ يَهَابُ mean?",
          "options": [
            "to be in awe of",
            "to be scared",
            "to sleep",
            "to walk"
          ],
          "correct": 0
        },
        {
          "title": "to be in awe of (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of هَابَ يَهَابُ?",
          "options": [
            "هَيْبَةً",
            "خَوْفًا",
            "نَوْمًا",
            "سَيْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to be scared",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be scared\"?",
          "options": [
            "خَافَ يَخَافُ",
            "نَامَ يَنَامُ",
            "سَارَ يَسِيْرُ",
            "عَاشَ يَعِيْشُ"
          ],
          "correct": 0
        },
        {
          "title": "to be scared",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَافَ يَخَافُ mean?",
          "options": [
            "to be scared",
            "to sleep",
            "to walk",
            "to live"
          ],
          "correct": 0
        },
        {
          "title": "to be scared (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَافَ يَخَافُ?",
          "options": [
            "خَوْفًا",
            "نَوْمًا",
            "سَيْرًا",
            "عَيْشًا"
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
            "سَارَ يَسِيْرُ",
            "عَاشَ يَعِيْشُ",
            "بَاعَ يَبِيْعُ"
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
            "to walk",
            "to live",
            "to sell"
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
            "سَيْرًا",
            "عَيْشًا",
            "بَيْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to walk",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to walk\"?",
          "options": [
            "سَارَ يَسِيْرُ",
            "عَاشَ يَعِيْشُ",
            "بَاعَ يَبِيْعُ",
            "زَادَ يَزِيْدُ"
          ],
          "correct": 0
        },
        {
          "title": "to walk",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَارَ يَسِيْرُ mean?",
          "options": [
            "to walk",
            "to live",
            "to sell",
            "to increase"
          ],
          "correct": 0
        },
        {
          "title": "to walk (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَارَ يَسِيْرُ?",
          "options": [
            "سَيْرًا",
            "عَيْشًا",
            "بَيْعًا",
            "زِيَادَةً"
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
            "بَاعَ يَبِيْعُ",
            "زَادَ يَزِيْدُ",
            "قَالَ يَقُوْلُ"
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
            "to sell",
            "to increase",
            "to say"
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
            "بَيْعًا",
            "زِيَادَةً",
            "قَوْلًا"
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
            "زَادَ يَزِيْدُ",
            "قَالَ يَقُوْلُ",
            "قَامَ يَقُوْمُ"
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
            "to increase",
            "to say",
            "to stand"
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
            "قَوْلًا",
            "قِيَامًا"
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
            "قَالَ يَقُوْلُ",
            "قَامَ يَقُوْمُ",
            "تَابَ يَتُوْبُ"
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
            "to say",
            "to stand",
            "to forgive"
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
            "قَوْلًا",
            "قِيَامًا",
            "تَوْبَةً"
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
            "قَامَ يَقُوْمُ",
            "تَابَ يَتُوْبُ",
            "صَامَ يَصُوْمُ"
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
            "to stand",
            "to forgive",
            "to fast"
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
            "قِيَامًا",
            "تَوْبَةً",
            "صَوْمًا"
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
            "تَابَ يَتُوْبُ",
            "صَامَ يَصُوْمُ",
            "نَالَ يَنَالُ"
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
            "to forgive",
            "to fast",
            "to acquire"
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
            "تَوْبَةً",
            "صَوْمًا",
            "نَيْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to forgive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to forgive\"?",
          "options": [
            "تَابَ يَتُوْبُ",
            "صَامَ يَصُوْمُ",
            "نَالَ يَنَالُ",
            "هَابَ يَهَابُ"
          ],
          "correct": 0
        },
        {
          "title": "to forgive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَابَ يَتُوْبُ mean?",
          "options": [
            "to forgive",
            "to fast",
            "to acquire",
            "to be in awe of"
          ],
          "correct": 0
        },
        {
          "title": "to forgive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَابَ يَتُوْبُ?",
          "options": [
            "تَوْبَةً",
            "صَوْمًا",
            "نَيْلًا",
            "هَيْبَةً"
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
            "نَالَ يَنَالُ",
            "هَابَ يَهَابُ",
            "خَافَ يَخَافُ"
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
            "to acquire",
            "to be in awe of",
            "to be scared"
          ],
          "correct": 0
        },
        {
          "title": "to fast (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَامَ يَصُوْمُ?",
          "options": [
            "صَوْمًا",
            "نَيْلًا",
            "هَيْبَةً",
            "خَوْفًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l3",
      "title": "الْمَزِيْدُ فِيْهِ",
      "subtitle": "الْأَجْوَفُ from the مَزِيْدٌ فِيْهِ أَبْوَاب (II, III, IV, V, VI, VII, VIII, X)",
      "concepts": [
        {
          "heading": "Part 4 (II): الْأَجْوَفُ مِنْ بَابِ تَفْعِيْل",
          "lines": [
            {
              "html": "The model verb is <bdi>صَوَّرَ يُصَوِّرُ تَصْوِيْرًا</bdi> (to fashion, mould). In <bdi>بَاب تَفْعِيْل</bdi> the <bdi>عَيْنُ الْكَلِمَةِ</bdi> is doubled and carries its own <bdi>حَرَكَةٌ</bdi>, so none of the three changes apply — the <bdi>أَجْوَف</bdi> conjugates exactly like a sound verb.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — صَوَّرَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "صَوَّرَ",
                    "يُصَوِّرُ",
                    "تَصْوِيْرًا",
                    "صُوِّرَ",
                    "يُصَوَّرُ",
                    "صَوِّرْ",
                    "لَا تُصَوِّرْ",
                    "مُصَوِّرٌ",
                    "مُصَوَّرٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — صَوَّرَ (verb forms)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "صَوَّرَ",
                    "يُصَوِّرُ",
                    "صُوِّرَ",
                    "يُصَوَّرُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "صَوَّرَا",
                    "يُصَوِّرَانِ",
                    "صُوِّرَا",
                    "يُصَوَّرَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "صَوَّرُوْا",
                    "يُصَوِّرُوْنَ",
                    "صُوِّرُوْا",
                    "يُصَوَّرُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "صَوَّرَتْ",
                    "تُصَوِّرُ",
                    "صُوِّرَتْ",
                    "تُصَوَّرُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "صَوَّرَتَا",
                    "تُصَوِّرَانِ",
                    "صُوِّرَتَا",
                    "تُصَوَّرَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "صَوَّرْنَ",
                    "يُصَوِّرْنَ",
                    "صُوِّرْنَ",
                    "يُصَوَّرْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "صَوَّرْتَ",
                    "تُصَوِّرُ",
                    "صُوِّرْتَ",
                    "تُصَوَّرُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "صَوَّرْتُمَا",
                    "تُصَوِّرَانِ",
                    "صُوِّرْتُمَا",
                    "تُصَوَّرَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "صَوَّرْتُمْ",
                    "تُصَوِّرُوْنَ",
                    "صُوِّرْتُمْ",
                    "تُصَوَّرُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "صَوَّرْتِ",
                    "تُصَوِّرِيْنَ",
                    "صُوِّرْتِ",
                    "تُصَوَّرِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "صَوَّرْتُمَا",
                    "تُصَوِّرَانِ",
                    "صُوِّرْتُمَا",
                    "تُصَوَّرَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "صَوَّرْتُنَّ",
                    "تُصَوِّرْنَ",
                    "صُوِّرْتُنَّ",
                    "تُصَوَّرْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "صَوَّرْتُ",
                    "أُصَوِّرُ",
                    "صُوِّرْتُ",
                    "أُصَوَّرُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "صَوَّرْنَا",
                    "نُصَوِّرُ",
                    "صُوِّرْنَا",
                    "نُصَوَّرُ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — صَوَّرَ (الأمر، النهي، اسم الفاعل، اسم المفعول)",
                "headers": [
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "صَوِّرْ",
                    "لَا تُصَوِّرْ",
                    "مُصَوِّرٌ",
                    "مُصَوَّرٌ"
                  ],
                  [
                    "صَوِّرَا",
                    "لَا تُصَوِّرَا",
                    "مُصَوِّرَانِ",
                    "مُصَوَّرَانِ"
                  ],
                  [
                    "صَوِّرُوْا",
                    "لَا تُصَوِّرُوْا",
                    "مُصَوِّرُوْنَ",
                    "مُصَوَّرُوْنَ"
                  ],
                  [
                    "صَوِّرِيْ",
                    "لَا تُصَوِّرِيْ",
                    "مُصَوِّرَةٌ",
                    "مُصَوَّرَةٌ"
                  ],
                  [
                    "صَوِّرَا",
                    "لَا تُصَوِّرَا",
                    "مُصَوِّرَتَانِ",
                    "مُصَوَّرَتَانِ"
                  ],
                  [
                    "صَوِّرْنَ",
                    "لَا تُصَوِّرْنَ",
                    "مُصَوِّرَاتٌ",
                    "مُصَوَّرَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In بَاب تَفْعِيْل, why do none of the three changes (قَلْبٌ، نَقْلٌ، حَذْفٌ) apply to صَوَّرَ?",
            "kind": "mcq",
            "options": [
              "The عَيْنُ الْكَلِمَةِ is doubled and carries its own حَرَكَةٌ",
              "The فَاءُ الْكَلِمَةِ is a هَمْزَةٌ",
              "It undergoes إِعْلَالٌ بِالْحَذْفِ only",
              "The وَزْنُ adds an extra أَلِفٌ before the عَيْن"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 5 (III): الْأَجْوَفُ مِنْ بَابِ مُفَاعَلَة",
          "lines": [
            {
              "html": "The model verb is <bdi>نَاوَلَ يُنَاوِلُ مُنَاوَلَةً</bdi> (to give, to present). In <bdi>بَاب مُفَاعَلَة</bdi> the weak letter carries a <bdi>حَرَكَةٌ</bdi>, so no changes apply and it conjugates like a sound verb. Note the <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi>: <bdi>نُوْوِلَ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — نَاوَلَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "نَاوَلَ",
                    "يُنَاوِلُ",
                    "مُنَاوَلَةً",
                    "نُوْوِلَ",
                    "يُنَاوَلُ",
                    "نَاوِلْ",
                    "لَا تُنَاوِلْ",
                    "مُنَاوِلٌ",
                    "مُنَاوَلٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — نَاوَلَ (verb forms)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "نَاوَلَ",
                    "يُنَاوِلُ",
                    "نُوْوِلَ",
                    "يُنَاوَلُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "نَاوَلَا",
                    "يُنَاوِلَانِ",
                    "نُوْوِلَا",
                    "يُنَاوَلَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "نَاوَلُوْا",
                    "يُنَاوِلُوْنَ",
                    "نُوْوِلُوْا",
                    "يُنَاوَلُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "نَاوَلَتْ",
                    "تُنَاوِلُ",
                    "نُوْوِلَتْ",
                    "تُنَاوَلُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "نَاوَلَتَا",
                    "تُنَاوِلَانِ",
                    "نُوْوِلَتَا",
                    "تُنَاوَلَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "نَاوَلْنَ",
                    "يُنَاوِلْنَ",
                    "نُوْوِلْنَ",
                    "يُنَاوَلْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "نَاوَلْتَ",
                    "تُنَاوِلُ",
                    "نُوْوِلْتَ",
                    "تُنَاوَلُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "نَاوَلْتُمَا",
                    "تُنَاوِلَانِ",
                    "نُوْوِلْتُمَا",
                    "تُنَاوَلَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "نَاوَلْتُمْ",
                    "تُنَاوِلُوْنَ",
                    "نُوْوِلْتُمْ",
                    "تُنَاوَلُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "نَاوَلْتِ",
                    "تُنَاوِلِيْنَ",
                    "نُوْوِلْتِ",
                    "تُنَاوَلِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "نَاوَلْتُمَا",
                    "تُنَاوِلَانِ",
                    "نُوْوِلْتُمَا",
                    "تُنَاوَلَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "نَاوَلْتُنَّ",
                    "تُنَاوِلْنَ",
                    "نُوْوِلْتُنَّ",
                    "تُنَاوَلْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "نَاوَلْتُ",
                    "أُنَاوِلُ",
                    "نُوْوِلْتُ",
                    "أُنَاوَلُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "نَاوَلْنَا",
                    "نُنَاوِلُ",
                    "نُوْوِلْنَا",
                    "نُنَاوَلُ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — نَاوَلَ (الأمر، النهي، اسم الفاعل، اسم المفعول)",
                "headers": [
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "نَاوِلْ",
                    "لَا تُنَاوِلْ",
                    "مُنَاوِلٌ",
                    "مُنَاوَلٌ"
                  ],
                  [
                    "نَاوِلَا",
                    "لَا تُنَاوِلَا",
                    "مُنَاوِلَانِ",
                    "مُنَاوَلَانِ"
                  ],
                  [
                    "نَاوِلُوْا",
                    "لَا تُنَاوِلُوْا",
                    "مُنَاوِلُوْنَ",
                    "مُنَاوَلُوْنَ"
                  ],
                  [
                    "نَاوِلِيْ",
                    "لَا تُنَاوِلِيْ",
                    "مُنَاوِلَةٌ",
                    "مُنَاوَلَةٌ"
                  ],
                  [
                    "نَاوِلَا",
                    "لَا تُنَاوِلَا",
                    "مُنَاوِلَتَانِ",
                    "مُنَاوَلَتَانِ"
                  ],
                  [
                    "نَاوِلْنَ",
                    "لَا تُنَاوِلْنَ",
                    "مُنَاوِلَاتٌ",
                    "مُنَاوَلَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Why does نَاوَلَ (بَاب مُفَاعَلَة) conjugate like a sound verb, with no قَلْبٌ، نَقْلٌ، or حَذْفٌ?",
            "kind": "mcq",
            "options": [
              "Because the weak letter carries its own حَرَكَةٌ",
              "Because the عَيْنُ الْكَلِمَةِ is a هَمْزَةٌ",
              "Because it is intransitive",
              "Because the فَاءُ الْكَلِمَةِ is doubled"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 6 (IV): الْأَجْوَفُ مِنْ بَابِ إِفْعَال",
          "lines": [
            {
              "html": "The model verb is <bdi>أَرَادَ يُرِيْدُ إِرَادَةً</bdi> (to intend). In <bdi>بَاب إِفْعَال</bdi> the changes DO apply: <bdi>نَقْلٌ</bdi> and <bdi>قَلْبٌ</bdi> in the <bdi>مَاضِيْ</bdi> (<bdi>أَرْوَدَ ← أَرَادَ</bdi>) and <bdi>نَقْلٌ</bdi> in the <bdi>مُضَارِع</bdi> (<bdi>يُرْوِدُ ← يُرِيْدُ</bdi>), with <bdi>حَذْفٌ</bdi> when two <bdi>سَاكِنٌ</bdi> letters meet (<bdi>أَرَدْنَ، يُرِدْنَ، أَرِدْ</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — أَرَادَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "أَرَادَ",
                    "يُرِيْدُ",
                    "إِرَادَةً",
                    "أُرِيْدَ",
                    "يُرَادُ",
                    "أَرِدْ",
                    "لَا تُرِدْ",
                    "مُرِيْدٌ",
                    "مُرَادٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — أَرَادَ (verb forms)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "أَرَادَ",
                    "يُرِيْدُ",
                    "أُرِيْدَ",
                    "يُرَادُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "أَرَادَا",
                    "يُرِيْدَانِ",
                    "أُرِيْدَا",
                    "يُرَادَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "أَرَادُوْا",
                    "يُرِيْدُوْنَ",
                    "أُرِيْدُوْا",
                    "يُرَادُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "أَرَادَتْ",
                    "تُرِيْدُ",
                    "أُرِيْدَتْ",
                    "تُرَادُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "أَرَادَتَا",
                    "تُرِيْدَانِ",
                    "أُرِيْدَتَا",
                    "تُرَادَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "أَرَدْنَ",
                    "يُرِدْنَ",
                    "أُرِدْنَ",
                    "يُرَدْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "أَرَدْتَّ",
                    "تُرِيْدُ",
                    "أُرِدْتَّ",
                    "تُرَادُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "أَرَدْتُّمَا",
                    "تُرِيْدَانِ",
                    "أُرِدْتُّمَا",
                    "تُرَادَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "أَرَدْتُّمْ",
                    "تُرِيْدُوْنَ",
                    "أُرِدْتُّمْ",
                    "تُرَادُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "أَرَدْتِّ",
                    "تُرِيْدِيْنَ",
                    "أُرِدْتِّ",
                    "تُرَادِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "أَرَدْتُّمَا",
                    "تُرِيْدَانِ",
                    "أُرِدْتُّمَا",
                    "تُرَادَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "أَرَدْتُّنَّ",
                    "تُرِدْنَ",
                    "أُرِدْتُّنَّ",
                    "تُرَدْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أَرَدْتُّ",
                    "أُرِيْدُ",
                    "أُرِدْتُّ",
                    "أُرَادُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "أَرَدْنَا",
                    "نُرِيْدُ",
                    "أُرِدْنَا",
                    "نُرَادُ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — أَرَادَ (الأمر، النهي، اسم الفاعل، اسم المفعول)",
                "headers": [
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "أَرِدْ",
                    "لَا تُرِدْ",
                    "مُرِيْدٌ",
                    "مُرَادٌ"
                  ],
                  [
                    "أَرِيْدَا",
                    "لَا تُرِيْدَا",
                    "مُرِيْدَانِ",
                    "مُرَادَانِ"
                  ],
                  [
                    "أَرِيْدُوْا",
                    "لَا تُرِيْدُوْا",
                    "مُرِيْدُوْنَ",
                    "مُرَادُوْنَ"
                  ],
                  [
                    "أَرِيْدِيْ",
                    "لَا تُرِيْدِيْ",
                    "مُرِيْدَةٌ",
                    "مُرَادَةٌ"
                  ],
                  [
                    "أَرِيْدَا",
                    "لَا تُرِيْدَا",
                    "مُرِيْدَتَانِ",
                    "مُرَادَتَانِ"
                  ],
                  [
                    "أَرِدْنَ",
                    "لَا تُرِدْنَ",
                    "مُرِيْدَاتٌ",
                    "مُرَادَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In بَاب إِفْعَال, which changes produce أَرَادَ from أَرْوَدَ in the الْمَاضِيْ؟",
            "kind": "mcq",
            "options": [
              "نَقْلٌ then قَلْبٌ",
              "قَلْبٌ then حَذْفٌ",
              "حَذْفٌ only",
              "No changes apply — it conjugates like a sound verb"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 7 (V): الْأَجْوَفُ مِنْ بَابِ تَفَعُّل",
          "lines": [
            {
              "html": "The model verb is <bdi>تَبَيَّنَ يَتَبَيَّنُ تَبَيُّنًا</bdi> (to become clear). Like <bdi>بَاب تَفْعِيْل</bdi>, the doubled <bdi>عَيْن</bdi> carries a <bdi>حَرَكَةٌ</bdi>, so no changes apply.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — تَبَيَّنَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "تَبَيَّنَ",
                    "يَتَبَيَّنُ",
                    "تَبَيُّنًا",
                    "تُبُيِّنَ",
                    "يُتَبَيَّنُ",
                    "تَبَيَّنْ",
                    "لَا تَتَبَيَّنْ",
                    "مُتَبَيِّنٌ",
                    "مُتَبَيَّنٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — تَبَيَّنَ (verb forms)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "تَبَيَّنَ",
                    "يَتَبَيَّنُ",
                    "تُبُيِّنَ",
                    "يُتَبَيَّنُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "تَبَيَّنَا",
                    "يَتَبَيَّنَانِ",
                    "تُبُيِّنَا",
                    "يُتَبَيَّنَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "تَبَيَّنُوْا",
                    "يَتَبَيَّنُوْنَ",
                    "تُبُيِّنُوْا",
                    "يُتَبَيَّنُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "تَبَيَّنَتْ",
                    "تَتَبَيَّنُ",
                    "تُبُيِّنَتْ",
                    "تُتَبَيَّنُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "تَبَيَّنَتَا",
                    "تَتَبَيَّنَانِ",
                    "تُبُيِّنَتَا",
                    "تُتَبَيَّنَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "تَبَيَّنَّ",
                    "يَتَبَيَّنَّ",
                    "تُبُيِّنَّ",
                    "يُتَبَيَّنَّ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "تَبَيَّنْتَ",
                    "تَتَبَيَّنُ",
                    "تُبُيِّنْتَ",
                    "تُتَبَيَّنُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَبَيَّنْتُمَا",
                    "تَتَبَيَّنَانِ",
                    "تُبُيِّنْتُمَا",
                    "تُتَبَيَّنَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَبَيَّنْتُمْ",
                    "تَتَبَيَّنُوْنَ",
                    "تُبُيِّنْتُمْ",
                    "تُتَبَيَّنُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَبَيَّنْتِ",
                    "تَتَبَيَّنِيْنَ",
                    "تُبُيِّنْتِ",
                    "تُتَبَيَّنِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَبَيَّنْتُمَا",
                    "تَتَبَيَّنَانِ",
                    "تُبُيِّنْتُمَا",
                    "تُتَبَيَّنَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَبَيَّنْتُنَّ",
                    "تَتَبَيَّنَّ",
                    "تُبُيِّنْتُنَّ",
                    "تُتَبَيَّنَّ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "تَبَيَّنْتُ",
                    "أَتَبَيَّنُ",
                    "تُبُيِّنْتُ",
                    "أُتَبَيَّنُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "تَبَيَّنَّا",
                    "نَتَبَيَّنُ",
                    "تُبُيِّنَّا",
                    "نُتَبَيَّنُ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — تَبَيَّنَ (الأمر، النهي، اسم الفاعل، اسم المفعول)",
                "headers": [
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "تَبَيَّنْ",
                    "لَا تَتَبَيَّنْ",
                    "مُتَبَيِّنٌ",
                    "مُتَبَيَّنٌ"
                  ],
                  [
                    "تَبَيَّنَا",
                    "لَا تَتَبَيَّنَا",
                    "مُتَبَيِّنَانِ",
                    "مُتَبَيَّنَانِ"
                  ],
                  [
                    "تَبَيَّنُوْا",
                    "لَا تَتَبَيَّنُوْا",
                    "مُتَبَيِّنُوْنَ",
                    "مُتَبَيَّنُوْنَ"
                  ],
                  [
                    "تَبَيَّنِيْ",
                    "لَا تَتَبَيَّنِيْ",
                    "مُتَبَيِّنَةٌ",
                    "مُتَبَيَّنَةٌ"
                  ],
                  [
                    "تَبَيَّنَا",
                    "لَا تَتَبَيَّنَا",
                    "مُتَبَيِّنَتَانِ",
                    "مُتَبَيَّنَتَانِ"
                  ],
                  [
                    "تَبَيَّنَّ",
                    "لَا تَتَبَيَّنَّ",
                    "مُتَبَيِّنَاتٌ",
                    "مُتَبَيَّنَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Why do none of the three changes apply to تَبَيَّنَ (بَاب تَفَعُّل)?",
            "kind": "mcq",
            "options": [
              "Like بَاب تَفْعِيْل, the doubled عَيْن carries its own حَرَكَةٌ",
              "Because it is إفعال intransitive",
              "Because the فَاءُ الْكَلِمَةِ is a هَمْزَةٌ",
              "Because حَذْفٌ has already taken place in الْمَاضِيْ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 8 (VI): الْأَجْوَفُ مِنْ بَابِ تَفَاعُل",
          "lines": [
            {
              "html": "The model verb is <bdi>تَحَاوَرَ يَتَحَاوَرُ تَحَاوُرًا</bdi> (to carry on a discussion). No changes apply. Note the <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi>: <bdi>تُحُوْوِرَ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — تَحَاوَرَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "تَحَاوَرَ",
                    "يَتَحَاوَرُ",
                    "تَحَاوُرًا",
                    "تُحُوْوِرَ",
                    "يُتَحَاوَرُ",
                    "تَحَاوَرْ",
                    "لَا تَتَحَاوَرْ",
                    "مُتَحَاوِرٌ",
                    "مُتَحَاوَرٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — تَحَاوَرَ (verb forms)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "تَحَاوَرَ",
                    "يَتَحَاوَرُ",
                    "تُحُوْوِرَ",
                    "يُتَحَاوَرُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "تَحَاوَرَا",
                    "يَتَحَاوَرَانِ",
                    "تُحُوْوِرَا",
                    "يُتَحَاوَرَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "تَحَاوَرُوْا",
                    "يَتَحَاوَرُوْنَ",
                    "تُحُوْوِرُوْا",
                    "يُتَحَاوَرُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "تَحَاوَرَتْ",
                    "تَتَحَاوَرُ",
                    "تُحُوْوِرَتْ",
                    "تُتَحَاوَرُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "تَحَاوَرَتَا",
                    "تَتَحَاوَرَانِ",
                    "تُحُوْوِرَتَا",
                    "تُتَحَاوَرَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "تَحَاوَرْنَ",
                    "يَتَحَاوَرْنَ",
                    "تُحُوْوِرْنَ",
                    "يُتَحَاوَرْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "تَحَاوَرْتَ",
                    "تَتَحَاوَرُ",
                    "تُحُوْوِرْتَ",
                    "تُتَحَاوَرُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَحَاوَرْتُمَا",
                    "تَتَحَاوَرَانِ",
                    "تُحُوْوِرْتُمَا",
                    "تُتَحَاوَرَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَحَاوَرْتُمْ",
                    "تَتَحَاوَرُوْنَ",
                    "تُحُوْوِرْتُمْ",
                    "تُتَحَاوَرُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَحَاوَرْتِ",
                    "تَتَحَاوَرِيْنَ",
                    "تُحُوْوِرْتِ",
                    "تُتَحَاوَرِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَحَاوَرْتُمَا",
                    "تَتَحَاوَرَانِ",
                    "تُحُوْوِرْتُمَا",
                    "تُتَحَاوَرَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَحَاوَرْتُنَّ",
                    "تَتَحَاوَرْنَ",
                    "تُحُوْوِرْتُنَّ",
                    "تُتَحَاوَرْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "تَحَاوَرْتُ",
                    "أَتَحَاوَرُ",
                    "تُحُوْوِرْتُ",
                    "أُتَحَاوَرُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "تَحَاوَرْنَا",
                    "نَتَحَاوَرُ",
                    "تُحُوْوِرْنَا",
                    "نُتَحَاوَرُ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — تَحَاوَرَ (الأمر، النهي، اسم الفاعل، اسم المفعول)",
                "headers": [
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "تَحَاوَرْ",
                    "لَا تَتَحَاوَرْ",
                    "مُتَحَاوِرٌ",
                    "مُتَحَاوَرٌ"
                  ],
                  [
                    "تَحَاوَرَا",
                    "لَا تَتَحَاوَرَا",
                    "مُتَحَاوِرَانِ",
                    "مُتَحَاوَرَانِ"
                  ],
                  [
                    "تَحَاوَرُوْا",
                    "لَا تَتَحَاوَرُوْا",
                    "مُتَحَاوِرُوْنَ",
                    "مُتَحَاوَرُوْنَ"
                  ],
                  [
                    "تَحَاوَرِيْ",
                    "لَا تَتَحَاوَرِيْ",
                    "مُتَحَاوِرَةٌ",
                    "مُتَحَاوَرَةٌ"
                  ],
                  [
                    "تَحَاوَرَا",
                    "لَا تَتَحَاوَرَا",
                    "مُتَحَاوِرَتَانِ",
                    "مُتَحَاوَرَتَانِ"
                  ],
                  [
                    "تَحَاوَرْنَ",
                    "لَا تَتَحَاوَرْنَ",
                    "مُتَحَاوِرَاتٌ",
                    "مُتَحَاوَرَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is distinctive about تَحَاوَرَ's الْمَاضِي الْمَجْهُوْلُ (بَاب تَفَاعُل)؟",
            "kind": "mcq",
            "options": [
              "تُحُوْوِرَ — the weak letter is kept, doubled by the added تَاء pattern",
              "تُحُوْرَ — the weak letter is dropped by حَذْفٌ",
              "تُحِيْرَ — the weak letter changes to a يَاءٌ",
              "تُحَارَ — the weak letter changes to an أَلِفٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 9 (VII): الْأَجْوَفُ مِنْ بَابِ اِنْفِعَال",
          "lines": [
            {
              "html": "The model verb is <bdi>اِنْقَادَ يَنْقَادُ اِنْقِيَادًا</bdi> (to obey, to submit). The changes apply as in <bdi>بَاب إِفْعَال</bdi>. Because <bdi>بَاب اِنْفِعَال</bdi> verbs are intransitive, the book leaves the <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi>, <bdi>الْمُضَارِعُ الْمَجْهُوْلُ</bdi>, and <bdi>اِسْمُ الْمَفْعُوْلِ</bdi> columns blank.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِنْقَادَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِنْقَادَ",
                    "يَنْقَادُ",
                    "اِنْقِيَادًا",
                    "—",
                    "—",
                    "اِنْقَدْ",
                    "لَا تَنْقَدْ",
                    "مُنْقَادٌ",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِنْقَادَ (verb forms)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِنْقَادَ",
                    "يَنْقَادُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِنْقَادَا",
                    "يَنْقَادَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِنْقَادُوْا",
                    "يَنْقَادُوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِنْقَادَتْ",
                    "تَنْقَادُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِنْقَادَتَا",
                    "تَنْقَادَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِنْقَدْنَ",
                    "يَنْقَدْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِنْقَدْتَّ",
                    "تَنْقَادُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِنْقَدْتُّمَا",
                    "تَنْقَادَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِنْقَدْتُّمْ",
                    "تَنْقَادُوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِنْقَدْتِّ",
                    "تَنْقَادِيْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِنْقَدْتُّمَا",
                    "تَنْقَادَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِنْقَدْتُّنَّ",
                    "تَنْقَدْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِنْقَدْتُّ",
                    "أَنْقَادُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِنْقَدْنَا",
                    "نَنْقَادُ",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِنْقَادَ (الأمر، النهي، اسم الفاعل، اسم المفعول)",
                "headers": [
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِنْقَدْ",
                    "لَا تَنْقَدْ",
                    "مُنْقَادٌ",
                    "—"
                  ],
                  [
                    "اِنْقَادَا",
                    "لَا تَنْقَادَا",
                    "مُنْقَادَانِ",
                    "—"
                  ],
                  [
                    "اِنْقَادُوْا",
                    "لَا تَنْقَادُوْا",
                    "مُنْقَادُوْنَ",
                    "—"
                  ],
                  [
                    "اِنْقَادِيْ",
                    "لَا تَنْقَادِيْ",
                    "مُنْقَادَةٌ",
                    "—"
                  ],
                  [
                    "اِنْقَادَا",
                    "لَا تَنْقَادَا",
                    "مُنْقَادَتَانِ",
                    "—"
                  ],
                  [
                    "اِنْقَدْنَ",
                    "لَا تَنْقَدْنَ",
                    "مُنْقَادَاتٌ",
                    "—"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Why does the book leave the الْمَاضِي الْمَجْهُوْلُ, الْمُضَارِعُ الْمَجْهُوْلُ, and اِسْمُ الْمَفْعُوْلِ columns blank for اِنْقَادَ (بَاب اِنْفِعَال)؟",
            "kind": "mcq",
            "options": [
              "Because بَاب اِنْفِعَال verbs are intransitive",
              "Because none of the three changes apply to this باب",
              "Because اِنْقَادَ is not truly أَجْوَفُ",
              "Because the عَيْنُ الْكَلِمَةِ is doubled"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 10 (VIII): الْأَجْوَفُ مِنْ بَابِ اِفْتِعَال",
          "lines": [
            {
              "html": "The model verb is <bdi>اِحْتَاجَ يَحْتَاجُ اِحْتِيَاجًا</bdi> (to need). The changes apply. Note that the <bdi>اِسْمُ الْفَاعِلِ</bdi> and <bdi>اِسْمُ الْمَفْعُوْلِ</bdi> end up identical in form: <bdi>مُحْتَاجٌ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِحْتَاجَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِحْتَاجَ",
                    "يَحْتَاجُ",
                    "اِحْتِيَاجًا",
                    "اُحْتِيْجَ",
                    "يُحْتَاجُ",
                    "اِحْتَجْ",
                    "لَا تَحْتَجْ",
                    "مُحْتَاجٌ",
                    "مُحْتَاجٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِحْتَاجَ (verb forms)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِحْتَاجَ",
                    "يَحْتَاجُ",
                    "اُحْتِيْجَ",
                    "يُحْتَاجُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِحْتَاجَا",
                    "يَحْتَاجَانِ",
                    "اُحْتِيْجَا",
                    "يُحْتَاجَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِحْتَاجُوْا",
                    "يَحْتَاجُوْنَ",
                    "اُحْتِيْجُوْا",
                    "يُحْتَاجُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِحْتَاجَتْ",
                    "تَحْتَاجُ",
                    "اُحْتِيْجَتْ",
                    "تُحْتَاجُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِحْتَاجَتَا",
                    "تَحْتَاجَانِ",
                    "اُحْتِيْجَتَا",
                    "تُحْتَاجَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِحْتَجْنَ",
                    "يَحْتَجْنَ",
                    "اُحْتِجْنَ",
                    "يُحْتَجْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِحْتَجْتَ",
                    "تَحْتَاجُ",
                    "اُحْتِجْتَ",
                    "تُحْتَاجُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِحْتَجْتُمَا",
                    "تَحْتَاجَانِ",
                    "اُحْتِجْتُمَا",
                    "تُحْتَاجَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِحْتَجْتُمْ",
                    "تَحْتَاجُوْنَ",
                    "اُحْتِجْتُمْ",
                    "تُحْتَاجُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِحْتَجْتِ",
                    "تَحْتَاجِيْنَ",
                    "اُحْتِجْتِ",
                    "تُحْتَاجِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِحْتَجْتُمَا",
                    "تَحْتَاجَانِ",
                    "اُحْتِجْتُمَا",
                    "تُحْتَاجَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِحْتَجْتُنَّ",
                    "تَحْتَجْنَ",
                    "اُحْتِجْتُنَّ",
                    "تُحْتَجْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِحْتَجْتُ",
                    "أَحْتَاجُ",
                    "اُحْتِجْتُ",
                    "أُحْتَاجُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِحْتَجْنَا",
                    "نَحْتَاجُ",
                    "اُحْتِجْنَا",
                    "نُحْتَاجُ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِحْتَاجَ (الأمر، النهي، اسم الفاعل، اسم المفعول)",
                "headers": [
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِحْتَجْ",
                    "لَا تَحْتَجْ",
                    "مُحْتَاجٌ",
                    "مُحْتَاجٌ"
                  ],
                  [
                    "اِحْتَاجَا",
                    "لَا تَحْتَاجَا",
                    "مُحْتَاجَانِ",
                    "مُحْتَاجَانِ"
                  ],
                  [
                    "اِحْتَاجُوْا",
                    "لَا تَحْتَاجُوْا",
                    "مُحْتَاجُوْنَ",
                    "مُحْتَاجُوْنَ"
                  ],
                  [
                    "اِحْتَاجِيْ",
                    "لَا تَحْتَاجِيْ",
                    "مُحْتَاجَةٌ",
                    "مُحْتَاجَةٌ"
                  ],
                  [
                    "اِحْتَاجَا",
                    "لَا تَحْتَاجَا",
                    "مُحْتَاجَتَانِ",
                    "مُحْتَاجَتَانِ"
                  ],
                  [
                    "اِحْتَجْنَ",
                    "لَا تَحْتَجْنَ",
                    "مُحْتَاجَاتٌ",
                    "مُحْتَاجَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In بَاب اِفْتِعَال, the اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ of اِحْتَاجَ…",
            "kind": "mcq",
            "options": [
              "end up identical in form: مُحْتَاجٌ",
              "differ only by the الْأَلِفُ وَاللَّامُ",
              "cannot be formed for this باب",
              "both take a هَمْزَةٌ instead of the weak letter"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 11 (X): الْأَجْوَفُ مِنْ بَابِ اِسْتِفْعَال",
          "lines": [
            {
              "html": "The model verb is <bdi>اِسْتَقَامَ يَسْتَقِيْمُ اِسْتِقَامَةً</bdi> (to straighten up). The changes apply, as in <bdi>بَاب إِفْعَال</bdi>: <bdi>نَقْلٌ</bdi> in the <bdi>مُضَارِع</bdi> (<bdi>يَسْتَقِيْمُ</bdi>) and <bdi>حَذْفٌ</bdi> where two <bdi>سَاكِنٌ</bdi> letters meet (<bdi>اِسْتَقَمْنَ، اِسْتَقِمْ</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِسْتَقَامَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِسْتَقَامَ",
                    "يَسْتَقِيْمُ",
                    "اِسْتِقَامَةً",
                    "أُسْتُقِيْمَ",
                    "يُسْتَقَامُ",
                    "اِسْتَقِمْ",
                    "لَا تَسْتَقِمْ",
                    "مُسْتَقِيْمٌ",
                    "مُسْتَقَامٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِسْتَقَامَ (verb forms)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِسْتَقَامَ",
                    "يَسْتَقِيْمُ",
                    "أُسْتُقِيْمَ",
                    "يُسْتَقَامُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِسْتَقَامَا",
                    "يَسْتَقِيْمَانِ",
                    "أُسْتُقِيْمَا",
                    "يُسْتَقَامَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِسْتَقَامُوْا",
                    "يَسْتَقِيْمُوْنَ",
                    "أُسْتُقِيْمُوْا",
                    "يُسْتَقَامُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِسْتَقَامَتْ",
                    "تَسْتَقِيْمُ",
                    "أُسْتُقِيْمَتْ",
                    "تُسْتَقَامُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِسْتَقَامَتَا",
                    "تَسْتَقِيْمَانِ",
                    "أُسْتُقِيْمَتَا",
                    "تُسْتَقَامَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِسْتَقَمْنَ",
                    "يَسْتَقِمْنَ",
                    "أُسْتُقِمْنَ",
                    "يُسْتَقَمْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِسْتَقَمْتَ",
                    "تَسْتَقِيْمُ",
                    "أُسْتُقِمْتَ",
                    "تُسْتَقَامُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِسْتَقَمْتُمَا",
                    "تَسْتَقِيْمَانِ",
                    "أُسْتُقِمْتُمَا",
                    "تُسْتَقَامَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِسْتَقَمْتُمْ",
                    "تَسْتَقِيْمُوْنَ",
                    "أُسْتُقِمْتُمْ",
                    "تُسْتَقَامُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِسْتَقَمْتِ",
                    "تَسْتَقِيْمِيْنَ",
                    "أُسْتُقِمْتِ",
                    "تُسْتَقَامِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِسْتَقَمْتُمَا",
                    "تَسْتَقِيْمَانِ",
                    "أُسْتُقِمْتُمَا",
                    "تُسْتَقَامَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِسْتَقَمْتُنَّ",
                    "تَسْتَقِمْنَ",
                    "أُسْتُقِمْتُنَّ",
                    "تُسْتَقَمْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِسْتَقَمْتُ",
                    "أَسْتَقِيْمُ",
                    "أُسْتُقِمْتُ",
                    "أُسْتَقَامُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِسْتَقَمْنَا",
                    "نَسْتَقِيْمُ",
                    "أُسْتُقِمْنَا",
                    "نُسْتَقَامُ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِسْتَقَامَ (الأمر، النهي، اسم الفاعل، اسم المفعول)",
                "headers": [
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِسْتَقِمْ",
                    "لَا تَسْتَقِمْ",
                    "مُسْتَقِيْمٌ",
                    "مُسْتَقَامٌ"
                  ],
                  [
                    "اِسْتَقِيْمَا",
                    "لَا تَسْتَقِيْمَا",
                    "مُسْتَقِيْمَانِ",
                    "مُسْتَقَامَانِ"
                  ],
                  [
                    "اِسْتَقِيْمُوْا",
                    "لَا تَسْتَقِيْمُوْا",
                    "مُسْتَقِيْمُوْنَ",
                    "مُسْتَقَامُوْنَ"
                  ],
                  [
                    "اِسْتَقِيْمِيْ",
                    "لَا تَسْتَقِيْمِيْ",
                    "مُسْتَقِيْمَةٌ",
                    "مُسْتَقَامَةٌ"
                  ],
                  [
                    "اِسْتَقِيْمَا",
                    "لَا تَسْتَقِيْمَا",
                    "مُسْتَقِيْمَتَانِ",
                    "مُسْتَقَامَتَانِ"
                  ],
                  [
                    "اِسْتَقِمْنَ",
                    "لَا تَسْتَقِمْنَ",
                    "مُسْتَقِيْمَاتٌ",
                    "مُسْتَقَامَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In بَاب اِسْتِفْعَال (اِسْتَقَامَ), which change produces يَسْتَقِيْمُ from يَسْتَقْوِمُ in the الْمُضَارِعُ؟",
            "kind": "mcq",
            "options": ["قَلْبٌ", "نَقْلٌ", "حَذْفٌ", "إِدْغَامٌ"],
            "correct": 1
          }
        }
      ],
      "summary": {
        "title": "Parts 4–11: الأجوف from the مَزِيْد Abwab",
        "rows": [
          {
            "label": "No changes — conjugates like a sound verb",
            "arabic": "صَوَّرَ يُصَوِّرُ (II)",
            "meaning": "No changes — conjugates like a sound verb",
            "unlockAt": 0
          },
          {
            "label": "No changes; passive مَاضِيْ is نُوْوِلَ",
            "arabic": "نَاوَلَ يُنَاوِلُ (III)",
            "meaning": "No changes; passive مَاضِيْ is نُوْوِلَ",
            "unlockAt": 0
          },
          {
            "label": "Changes apply: أَرِدْ، يُرَادُ، مُرِيْدٌ، مُرَادٌ",
            "arabic": "أَرَادَ يُرِيْدُ (IV)",
            "meaning": "Changes apply: أَرِدْ، يُرَادُ، مُرِيْدٌ، مُرَادٌ",
            "unlockAt": 1
          },
          {
            "label": "No changes — like a sound verb",
            "arabic": "تَبَيَّنَ يَتَبَيَّنُ (V)",
            "meaning": "No changes — like a sound verb",
            "unlockAt": 2
          },
          {
            "label": "No changes; passive مَاضِيْ is تُحُوْوِرَ",
            "arabic": "تَحَاوَرَ يَتَحَاوَرُ (VI)",
            "meaning": "No changes; passive مَاضِيْ is تُحُوْوِرَ",
            "unlockAt": 3
          },
          {
            "label": "Changes apply; no مجهول or اسم مفعول forms",
            "arabic": "اِنْقَادَ يَنْقَادُ (VII)",
            "meaning": "Changes apply; no مجهول or اسم مفعول forms",
            "unlockAt": 4
          },
          {
            "label": "Changes apply; فاعل = مفعول = مُحْتَاجٌ",
            "arabic": "اِحْتَاجَ يَحْتَاجُ (VIII)",
            "meaning": "Changes apply; فاعل = مفعول = مُحْتَاجٌ",
            "unlockAt": 5
          },
          {
            "label": "Changes apply: اِسْتَقِمْ، مُسْتَقِيْمٌ، مُسْتَقَامٌ",
            "arabic": "اِسْتَقَامَ يَسْتَقِيْمُ (X)",
            "meaning": "Changes apply: اِسْتَقِمْ، مُسْتَقِيْمٌ، مُسْتَقَامٌ",
            "unlockAt": 6
          }
        ]
      },
      "quiz": [
        {
          "q": "In which مَزِيْد abwab does the أَجْوَف conjugate like a sound verb, with NO changes?",
          "options": [
            "II, III, V, and VI",
            "IV, VII, VIII, and X",
            "II and IV only",
            "All eight abwab"
          ],
          "correct": 0,
          "explanation": "In تَفْعِيْل، مُفَاعَلَة، تَفَعُّل، تَفَاعُل the weak letter carries its own حَرَكَةٌ, so قَلْبٌ/نَقْلٌ/حَذْفٌ do not apply. They do apply in إِفْعَال، اِنْفِعَال، اِفْتِعَال، اِسْتِفْعَال."
        },
        {
          "q": "What is the الْمُضَارِعُ الْمَعْلُوْمُ of أَرَادَ?",
          "options": [
            "يُرَادُ",
            "يَرُوْدُ",
            "يُرِيْدُ",
            "يُرَوِّدُ"
          ],
          "correct": 2,
          "explanation": "بَاب إِفْعَال: يُرْوِدُ undergoes نَقْلٌ (and قَلْبٌ of the وَاوٌ to يَاءٌ) giving يُرِيْدُ. يُرَادُ is the passive."
        },
        {
          "q": "What is distinctive about بَاب اِنْفِعَال (Part 9) in the book's tables?",
          "options": [
            "It has no أَمْر or نَهْي",
            "The مجهول columns and اِسْمُ الْمَفْعُوْلِ are left blank",
            "It has no اِسْمُ الْفَاعِلِ",
            "It has two مَصْدَر forms"
          ],
          "correct": 1,
          "explanation": "اِنْقَادَ has no passive forms and no اِسْمُ الْمَفْعُوْلِ in the book's tables — بَاب اِنْفِعَال verbs are intransitive."
        },
        {
          "q": "For اِحْتَاجَ (بَاب اِفْتِعَال), the اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ are…",
          "options": [
            "مُحْتِيْجٌ and مُحْتَاجٌ",
            "both مُحْتَاجٌ — identical in form",
            "مُحْتَاجٌ and مَحْوُوْجٌ",
            "حَائِجٌ and مَحِيْجٌ"
          ],
          "correct": 1,
          "explanation": "After the changes, both patterns collapse to the same form: مُحْتَاجٌ serves as فاعل and مفعول."
        },
        {
          "q": "What is the الْمَاضِي الْمَجْهُوْلُ of اِسْتَقَامَ?",
          "options": [
            "أُسْتُقِيْمَ",
            "اُسْتُقَامَ",
            "يُسْتَقَامُ",
            "اِسْتُقِمَ"
          ],
          "correct": 0,
          "explanation": "The passive مَاضِيْ of بَاب اِسْتِفْعَال is أُسْتُقِيْمَ; يُسْتَقَامُ is the passive مُضَارِع."
        },
        {
          "q": "The أَمْرُ of اِسْتَقَامَ for الْمُخَاطَبُ is…",
          "options": [
            "اِسْتَقِيْمْ",
            "اِسْتَقِمْ",
            "أَقِمْ",
            "اِسْتَقَامَ"
          ],
          "correct": 1,
          "explanation": "The يَاءٌ is dropped by حَذْفٌ before the final سُكُوْنٌ: اِسْتَقِمْ — as in the famous phrase of the Qur'an."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the الْمَاضِي الْمَجْهُوْلُ of نَاوَلَ (بَاب مُفَاعَلَة)?",
          "options": [
            "نُوْوِلَ",
            "نُوِّلَ",
            "نِيْوِلَ",
            "أُنْوِلَ"
          ],
          "correct": 0,
          "explanation": "The أَلِفٌ of نَاوَلَ reverts to its وَاوٌ base in the passive: نُوْوِلَ — on the pattern فُوْعِلَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the الْمَاضِي الْمَجْهُوْلُ of تَحَاوَرَ (بَاب تَفَاعُل)?",
          "options": [
            "تُحُوْوِرَ",
            "تُحُوِّرَ",
            "حُوْوِرَ",
            "تُحَاوِرَ"
          ],
          "correct": 0,
          "explanation": "On the pattern تُفُوْعِلَ: تُحُوْوِرَ — the أَلِفٌ reverts to a وَاوٌ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "'They (f/p) intend' is…",
          "options": [
            "يُرِدْنَ",
            "يُرَدْنَ",
            "أَرَدْنَ",
            "تُرِدْنَ"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَاتُ of the مُضَارِع of أَرَادَ: the يَاءٌ is dropped by حَذْفٌ — يُرِدْنَ. (يُرَدْنَ is passive; أَرَدْنَ is the مَاضِيْ.)"
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The أَمْرُ of أَرَادَ for الْمُخَاطَبُ is…",
          "options": [
            "أَرِدْ",
            "رِدْ",
            "أُرِدْ",
            "أَرِيْدْ"
          ],
          "correct": 0,
          "explanation": "From تُرِيْدُ, the يَاءٌ drops before the final سُكُوْنٌ: أَرِدْ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the الْمَاضِي الْمَجْهُوْلُ of اِحْتَاجَ?",
          "options": [
            "اُحْتِيْجَ",
            "اِحْتِيْجَ",
            "أُحِيْجَ",
            "اُحْتُوْجَ"
          ],
          "correct": 0,
          "explanation": "The passive مَاضِيْ of بَاب اِفْتِعَال is اُحْتِيْجَ (with a ضَمَّةٌ on the هَمْزَةُ الْوَصْلِ and a يَاءٌ)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "مُسْتَقِيْمٌ is…",
          "options": [
            "the اِسْمُ الْفَاعِلِ of اِسْتَقَامَ — upright, straight",
            "the اِسْمُ الْمَفْعُوْلِ of اِسْتَقَامَ",
            "the مَصْدَر of اِسْتَقَامَ",
            "the اِسْمُ الْفَاعِلِ of أَقَامَ"
          ],
          "correct": 0,
          "explanation": "مُسْتَقِيْمٌ (as in الصِّرَاطُ الْمُسْتَقِيْمُ) is the اِسْمُ الْفَاعِلِ; the اِسْمُ الْمَفْعُوْلِ is مُسْتَقَامٌ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "'Do not submit!' (m/s) from اِنْقَادَ is…",
          "options": [
            "لَا تَنْقَدْ",
            "لَا تَنْقَادْ",
            "لَا تُنْقَدْ",
            "اِنْقَدْ"
          ],
          "correct": 0,
          "explanation": "The نَهْي of اِنْقَادَ drops the أَلِفٌ before the final سُكُوْنٌ: لَا تَنْقَدْ. اِنْقَدْ is the أَمْر."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "تُبُيِّنَ is which form of تَبَيَّنَ?",
          "options": [
            "الْمَاضِي الْمَجْهُوْلُ — it was made clear",
            "الْمَاضِي الْمَعْلُوْمُ — it became clear",
            "الْمُضَارِعُ الْمَجْهُوْلُ",
            "الْمَصْدَرُ"
          ],
          "correct": 0,
          "explanation": "On the pattern تُفُعِّلَ: تُبُيِّنَ is the passive مَاضِيْ of تَبَيَّنَ. The passive مُضَارِع is يُتَبَيَّنُ."
        },
        {
          "title": "to adorn",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to adorn\"?",
          "options": [
            "زَيَّنَ يُزَيِّنُ",
            "نَوَّرَ يُنَوِّرُ",
            "صَوَّرَ يُصَوِّرُ",
            "زَوَّجَ يُزَوِّجُ"
          ],
          "correct": 0
        },
        {
          "title": "to adorn",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does زَيَّنَ يُزَيِّنُ mean?",
          "options": [
            "to adorn",
            "to illuminate",
            "to fashion, mould",
            "to marry"
          ],
          "correct": 0
        },
        {
          "title": "to adorn (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of زَيَّنَ يُزَيِّنُ?",
          "options": [
            "تَزْيِيْنًا",
            "تَنْوِيْرًا",
            "تَصْوِيْرًا",
            "تَزْوِيْجًا"
          ],
          "correct": 0
        },
        {
          "title": "to illuminate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to illuminate\"?",
          "options": [
            "نَوَّرَ يُنَوِّرُ",
            "صَوَّرَ يُصَوِّرُ",
            "زَوَّجَ يُزَوِّجُ",
            "شَاوَرَ يُشَاوِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to illuminate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَوَّرَ يُنَوِّرُ mean?",
          "options": [
            "to illuminate",
            "to fashion, mould",
            "to marry",
            "to take counsel"
          ],
          "correct": 0
        },
        {
          "title": "to illuminate (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَوَّرَ يُنَوِّرُ?",
          "options": [
            "تَنْوِيْرًا",
            "تَصْوِيْرًا",
            "تَزْوِيْجًا",
            "مُشَاوَرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to fashion, mould",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fashion, mould\"?",
          "options": [
            "صَوَّرَ يُصَوِّرُ",
            "زَوَّجَ يُزَوِّجُ",
            "شَاوَرَ يُشَاوِرُ",
            "حَاوَرَ يُحَاوِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to fashion, mould",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَوَّرَ يُصَوِّرُ mean?",
          "options": [
            "to fashion, mould",
            "to marry",
            "to take counsel",
            "to discuss, debate"
          ],
          "correct": 0
        },
        {
          "title": "to fashion, mould (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَوَّرَ يُصَوِّرُ?",
          "options": [
            "تَصْوِيْرًا",
            "تَزْوِيْجًا",
            "مُشَاوَرَةً",
            "مُحَاوَرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to marry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to marry\"?",
          "options": [
            "زَوَّجَ يُزَوِّجُ",
            "شَاوَرَ يُشَاوِرُ",
            "حَاوَرَ يُحَاوِرُ",
            "نَاوَلَ يُنَاوِلُ"
          ],
          "correct": 0
        },
        {
          "title": "to marry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does زَوَّجَ يُزَوِّجُ mean?",
          "options": [
            "to marry",
            "to take counsel",
            "to discuss, debate",
            "to give, to present"
          ],
          "correct": 0
        },
        {
          "title": "to marry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of زَوَّجَ يُزَوِّجُ?",
          "options": [
            "تَزْوِيْجًا",
            "مُشَاوَرَةً",
            "مُحَاوَرَةً",
            "مُنَاوَلَةً"
          ],
          "correct": 0
        },
        {
          "title": "to take counsel",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take counsel\"?",
          "options": [
            "شَاوَرَ يُشَاوِرُ",
            "حَاوَرَ يُحَاوِرُ",
            "نَاوَلَ يُنَاوِلُ",
            "بَايَعَ يُبَايِعُ"
          ],
          "correct": 0
        },
        {
          "title": "to take counsel",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَاوَرَ يُشَاوِرُ mean?",
          "options": [
            "to take counsel",
            "to discuss, debate",
            "to give, to present",
            "to make a contract, pledge allegiance"
          ],
          "correct": 0
        },
        {
          "title": "to take counsel (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَاوَرَ يُشَاوِرُ?",
          "options": [
            "مُشَاوَرَةً",
            "مُحَاوَرَةً",
            "مُنَاوَلَةً",
            "مُبَايَعَةً"
          ],
          "correct": 0
        },
        {
          "title": "to discuss, debate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to discuss, debate\"?",
          "options": [
            "حَاوَرَ يُحَاوِرُ",
            "نَاوَلَ يُنَاوِلُ",
            "بَايَعَ يُبَايِعُ",
            "أَصَابَ يُصِيْبُ"
          ],
          "correct": 0
        },
        {
          "title": "to discuss, debate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَاوَرَ يُحَاوِرُ mean?",
          "options": [
            "to discuss, debate",
            "to give, to present",
            "to make a contract, pledge allegiance",
            "to hit, afflict"
          ],
          "correct": 0
        },
        {
          "title": "to discuss, debate (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَاوَرَ يُحَاوِرُ?",
          "options": [
            "مُحَاوَرَةً",
            "مُنَاوَلَةً",
            "مُبَايَعَةً",
            "إِصَابَةً"
          ],
          "correct": 0
        },
        {
          "title": "to give, to present",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give, to present\"?",
          "options": [
            "نَاوَلَ يُنَاوِلُ",
            "بَايَعَ يُبَايِعُ",
            "أَصَابَ يُصِيْبُ",
            "أَقَامَ يُقِيْمُ"
          ],
          "correct": 0
        },
        {
          "title": "to give, to present",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَاوَلَ يُنَاوِلُ mean?",
          "options": [
            "to give, to present",
            "to make a contract, pledge allegiance",
            "to hit, afflict",
            "to straighten"
          ],
          "correct": 0
        },
        {
          "title": "to give, to present (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَاوَلَ يُنَاوِلُ?",
          "options": [
            "مُنَاوَلَةً",
            "مُبَايَعَةً",
            "إِصَابَةً",
            "إِقَامَةً"
          ],
          "correct": 0
        },
        {
          "title": "to make a contract, pledge allegiance",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make a contract, pledge allegiance\"?",
          "options": [
            "بَايَعَ يُبَايِعُ",
            "أَصَابَ يُصِيْبُ",
            "أَقَامَ يُقِيْمُ",
            "أَجَابَ يُجِيْبُ"
          ],
          "correct": 0
        },
        {
          "title": "to make a contract, pledge allegiance",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَايَعَ يُبَايِعُ mean?",
          "options": [
            "to make a contract, pledge allegiance",
            "to hit, afflict",
            "to straighten",
            "to answer"
          ],
          "correct": 0
        },
        {
          "title": "to make a contract, pledge allegiance (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَايَعَ يُبَايِعُ?",
          "options": [
            "مُبَايَعَةً",
            "إِصَابَةً",
            "إِقَامَةً",
            "إِجَابَةً"
          ],
          "correct": 0
        },
        {
          "title": "to hit, afflict",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hit, afflict\"?",
          "options": [
            "أَصَابَ يُصِيْبُ",
            "أَقَامَ يُقِيْمُ",
            "أَجَابَ يُجِيْبُ",
            "أَرَادَ يُرِيْدُ"
          ],
          "correct": 0
        },
        {
          "title": "to hit, afflict",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَصَابَ يُصِيْبُ mean?",
          "options": [
            "to hit, afflict",
            "to straighten",
            "to answer",
            "to intend"
          ],
          "correct": 0
        },
        {
          "title": "to hit, afflict (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَصَابَ يُصِيْبُ?",
          "options": [
            "إِصَابَةً",
            "إِقَامَةً",
            "إِجَابَةً",
            "إِرَادَةً"
          ],
          "correct": 0
        },
        {
          "title": "to straighten",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to straighten\"?",
          "options": [
            "أَقَامَ يُقِيْمُ",
            "أَجَابَ يُجِيْبُ",
            "أَرَادَ يُرِيْدُ",
            "تَعَوَّذَ يَتَعَوَّذُ"
          ],
          "correct": 0
        },
        {
          "title": "to straighten",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَقَامَ يُقِيْمُ mean?",
          "options": [
            "to straighten",
            "to answer",
            "to intend",
            "to seek refuge"
          ],
          "correct": 0
        },
        {
          "title": "to straighten (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَقَامَ يُقِيْمُ?",
          "options": [
            "إِقَامَةً",
            "إِجَابَةً",
            "إِرَادَةً",
            "تَعَوُّذًا"
          ],
          "correct": 0
        },
        {
          "title": "to answer",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to answer\"?",
          "options": [
            "أَجَابَ يُجِيْبُ",
            "أَرَادَ يُرِيْدُ",
            "تَعَوَّذَ يَتَعَوَّذُ",
            "تَغَيَّرَ يَتَغَيَّرُ"
          ],
          "correct": 0
        },
        {
          "title": "to answer",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَجَابَ يُجِيْبُ mean?",
          "options": [
            "to answer",
            "to intend",
            "to seek refuge",
            "to change"
          ],
          "correct": 0
        },
        {
          "title": "to answer (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَجَابَ يُجِيْبُ?",
          "options": [
            "إِجَابَةً",
            "إِرَادَةً",
            "تَعَوُّذًا",
            "تَغَيُّرًا"
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
            "تَعَوَّذَ يَتَعَوَّذُ",
            "تَغَيَّرَ يَتَغَيَّرُ",
            "تَبَيَّنَ يَتَبَيَّنُ"
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
            "to seek refuge",
            "to change",
            "to become clear"
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
            "تَعَوُّذًا",
            "تَغَيُّرًا",
            "تَبَيُّنًا"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to seek refuge\"?",
          "options": [
            "تَعَوَّذَ يَتَعَوَّذُ",
            "تَغَيَّرَ يَتَغَيَّرُ",
            "تَبَيَّنَ يَتَبَيَّنُ",
            "تَطَوَّعَ يَتَطَوَّعُ"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَعَوَّذَ يَتَعَوَّذُ mean?",
          "options": [
            "to seek refuge",
            "to change",
            "to become clear",
            "to volunteer"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَعَوَّذَ يَتَعَوَّذُ?",
          "options": [
            "تَعَوُّذًا",
            "تَغَيُّرًا",
            "تَبَيُّنًا",
            "تَطَوُّعًا"
          ],
          "correct": 0
        },
        {
          "title": "to change",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to change\"?",
          "options": [
            "تَغَيَّرَ يَتَغَيَّرُ",
            "تَبَيَّنَ يَتَبَيَّنُ",
            "تَطَوَّعَ يَتَطَوَّعُ",
            "تَلَاوَمَ يَتَلَاوَمُ"
          ],
          "correct": 0
        },
        {
          "title": "to change",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَغَيَّرَ يَتَغَيَّرُ mean?",
          "options": [
            "to change",
            "to become clear",
            "to volunteer",
            "to blame each other"
          ],
          "correct": 0
        },
        {
          "title": "to change (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَغَيَّرَ يَتَغَيَّرُ?",
          "options": [
            "تَغَيُّرًا",
            "تَبَيُّنًا",
            "تَطَوُّعًا",
            "تَلَاوُمًا"
          ],
          "correct": 0
        },
        {
          "title": "to become clear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to become clear\"?",
          "options": [
            "تَبَيَّنَ يَتَبَيَّنُ",
            "تَطَوَّعَ يَتَطَوَّعُ",
            "تَلَاوَمَ يَتَلَاوَمُ",
            "تَنَاوَلَ يَتَنَاوَلُ"
          ],
          "correct": 0
        },
        {
          "title": "to become clear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَبَيَّنَ يَتَبَيَّنُ mean?",
          "options": [
            "to become clear",
            "to volunteer",
            "to blame each other",
            "to take, receive"
          ],
          "correct": 0
        },
        {
          "title": "to become clear (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَبَيَّنَ يَتَبَيَّنُ?",
          "options": [
            "تَبَيُّنًا",
            "تَطَوُّعًا",
            "تَلَاوُمًا",
            "تَنَاوُلًا"
          ],
          "correct": 0
        },
        {
          "title": "to volunteer",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to volunteer\"?",
          "options": [
            "تَطَوَّعَ يَتَطَوَّعُ",
            "تَلَاوَمَ يَتَلَاوَمُ",
            "تَنَاوَلَ يَتَنَاوَلُ",
            "تَحَاوَرَ يَتَحَاوَرُ"
          ],
          "correct": 0
        },
        {
          "title": "to volunteer",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَطَوَّعَ يَتَطَوَّعُ mean?",
          "options": [
            "to volunteer",
            "to blame each other",
            "to take, receive",
            "to carry on a discussion"
          ],
          "correct": 0
        },
        {
          "title": "to volunteer (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَطَوَّعَ يَتَطَوَّعُ?",
          "options": [
            "تَطَوُّعًا",
            "تَلَاوُمًا",
            "تَنَاوُلًا",
            "تَحَاوُرًا"
          ],
          "correct": 0
        },
        {
          "title": "to blame each other",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to blame each other\"?",
          "options": [
            "تَلَاوَمَ يَتَلَاوَمُ",
            "تَنَاوَلَ يَتَنَاوَلُ",
            "تَحَاوَرَ يَتَحَاوَرُ",
            "تَشَاوَرَ يَتَشَاوَرُ"
          ],
          "correct": 0
        },
        {
          "title": "to blame each other",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَلَاوَمَ يَتَلَاوَمُ mean?",
          "options": [
            "to blame each other",
            "to take, receive",
            "to carry on a discussion",
            "to take counsel"
          ],
          "correct": 0
        },
        {
          "title": "to blame each other (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَلَاوَمَ يَتَلَاوَمُ?",
          "options": [
            "تَلَاوُمًا",
            "تَنَاوُلًا",
            "تَحَاوُرًا",
            "تَشَاوُرًا"
          ],
          "correct": 0
        },
        {
          "title": "to take, receive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take, receive\"?",
          "options": [
            "تَنَاوَلَ يَتَنَاوَلُ",
            "تَحَاوَرَ يَتَحَاوَرُ",
            "تَشَاوَرَ يَتَشَاوَرُ",
            "اِنْهَارَ يَنْهَارُ"
          ],
          "correct": 0
        },
        {
          "title": "to take, receive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَنَاوَلَ يَتَنَاوَلُ mean?",
          "options": [
            "to take, receive",
            "to carry on a discussion",
            "to take counsel",
            "to collapse"
          ],
          "correct": 0
        },
        {
          "title": "to take, receive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَنَاوَلَ يَتَنَاوَلُ?",
          "options": [
            "تَنَاوُلًا",
            "تَحَاوُرًا",
            "تَشَاوُرًا",
            "اِنْهِيَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to carry on a discussion",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to carry on a discussion\"?",
          "options": [
            "تَحَاوَرَ يَتَحَاوَرُ",
            "تَشَاوَرَ يَتَشَاوَرُ",
            "اِنْهَارَ يَنْهَارُ",
            "اِنْقَادَ يَنْقَادُ"
          ],
          "correct": 0
        },
        {
          "title": "to carry on a discussion",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَحَاوَرَ يَتَحَاوَرُ mean?",
          "options": [
            "to carry on a discussion",
            "to take counsel",
            "to collapse",
            "to obey, to submit"
          ],
          "correct": 0
        },
        {
          "title": "to carry on a discussion (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَحَاوَرَ يَتَحَاوَرُ?",
          "options": [
            "تَحَاوُرًا",
            "تَشَاوُرًا",
            "اِنْهِيَارًا",
            "اِنْقِيَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to take counsel",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take counsel\"?",
          "options": [
            "تَشَاوَرَ يَتَشَاوَرُ",
            "اِنْهَارَ يَنْهَارُ",
            "اِنْقَادَ يَنْقَادُ",
            "اِرْتَابَ يَرْتَابُ"
          ],
          "correct": 0
        },
        {
          "title": "to take counsel",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَشَاوَرَ يَتَشَاوَرُ mean?",
          "options": [
            "to take counsel",
            "to collapse",
            "to obey, to submit",
            "to doubt"
          ],
          "correct": 0
        },
        {
          "title": "to take counsel (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَشَاوَرَ يَتَشَاوَرُ?",
          "options": [
            "تَشَاوُرًا",
            "اِنْهِيَارًا",
            "اِنْقِيَادًا",
            "اِرْتِيَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to collapse",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to collapse\"?",
          "options": [
            "اِنْهَارَ يَنْهَارُ",
            "اِنْقَادَ يَنْقَادُ",
            "اِرْتَابَ يَرْتَابُ",
            "اِغْتَابَ يَغْتَابُ"
          ],
          "correct": 0
        },
        {
          "title": "to collapse",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْهَارَ يَنْهَارُ mean?",
          "options": [
            "to collapse",
            "to obey, to submit",
            "to doubt",
            "to backbite"
          ],
          "correct": 0
        },
        {
          "title": "to collapse (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْهَارَ يَنْهَارُ?",
          "options": [
            "اِنْهِيَارًا",
            "اِنْقِيَادًا",
            "اِرْتِيَابًا",
            "اِغْتِيَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to obey, to submit",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to obey, to submit\"?",
          "options": [
            "اِنْقَادَ يَنْقَادُ",
            "اِرْتَابَ يَرْتَابُ",
            "اِغْتَابَ يَغْتَابُ",
            "اِحْتَاجَ يَحْتَاجُ"
          ],
          "correct": 0
        },
        {
          "title": "to obey, to submit",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْقَادَ يَنْقَادُ mean?",
          "options": [
            "to obey, to submit",
            "to doubt",
            "to backbite",
            "to need"
          ],
          "correct": 0
        },
        {
          "title": "to obey, to submit (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْقَادَ يَنْقَادُ?",
          "options": [
            "اِنْقِيَادًا",
            "اِرْتِيَابًا",
            "اِغْتِيَابًا",
            "اِحْتِيَاجًا"
          ],
          "correct": 0
        },
        {
          "title": "to doubt",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to doubt\"?",
          "options": [
            "اِرْتَابَ يَرْتَابُ",
            "اِغْتَابَ يَغْتَابُ",
            "اِحْتَاجَ يَحْتَاجُ",
            "اِخْتَارَ يَخْتَارُ"
          ],
          "correct": 0
        },
        {
          "title": "to doubt",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِرْتَابَ يَرْتَابُ mean?",
          "options": [
            "to doubt",
            "to backbite",
            "to need",
            "to choose"
          ],
          "correct": 0
        },
        {
          "title": "to doubt (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِرْتَابَ يَرْتَابُ?",
          "options": [
            "اِرْتِيَابًا",
            "اِغْتِيَابًا",
            "اِحْتِيَاجًا",
            "اِخْتِيَارًا"
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
            "اِحْتَاجَ يَحْتَاجُ",
            "اِخْتَارَ يَخْتَارُ",
            "اِسْتَجَابَ يَسْتَجِيْبُ"
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
            "to need",
            "to choose",
            "to hear (respond to)"
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
            "اِحْتِيَاجًا",
            "اِخْتِيَارًا",
            "اِسْتِجَابَةً"
          ],
          "correct": 0
        },
        {
          "title": "to need",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to need\"?",
          "options": [
            "اِحْتَاجَ يَحْتَاجُ",
            "اِخْتَارَ يَخْتَارُ",
            "اِسْتَجَابَ يَسْتَجِيْبُ",
            "اِسْتَطَاعَ يَسْتَطِيْعُ"
          ],
          "correct": 0
        },
        {
          "title": "to need",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِحْتَاجَ يَحْتَاجُ mean?",
          "options": [
            "to need",
            "to choose",
            "to hear (respond to)",
            "to be capable of s.th"
          ],
          "correct": 0
        },
        {
          "title": "to need (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِحْتَاجَ يَحْتَاجُ?",
          "options": [
            "اِحْتِيَاجًا",
            "اِخْتِيَارًا",
            "اِسْتِجَابَةً",
            "اِسْتِطَاعَةً"
          ],
          "correct": 0
        },
        {
          "title": "to choose",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to choose\"?",
          "options": [
            "اِخْتَارَ يَخْتَارُ",
            "اِسْتَجَابَ يَسْتَجِيْبُ",
            "اِسْتَطَاعَ يَسْتَطِيْعُ",
            "اِسْتَقَامَ يَسْتَقِيْمُ"
          ],
          "correct": 0
        },
        {
          "title": "to choose",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِخْتَارَ يَخْتَارُ mean?",
          "options": [
            "to choose",
            "to hear (respond to)",
            "to be capable of s.th",
            "to straighten up"
          ],
          "correct": 0
        },
        {
          "title": "to choose (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِخْتَارَ يَخْتَارُ?",
          "options": [
            "اِخْتِيَارًا",
            "اِسْتِجَابَةً",
            "اِسْتِطَاعَةً",
            "اِسْتِقَامَةً"
          ],
          "correct": 0
        },
        {
          "title": "to hear (respond to)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hear (respond to)\"?",
          "options": [
            "اِسْتَجَابَ يَسْتَجِيْبُ",
            "اِسْتَطَاعَ يَسْتَطِيْعُ",
            "اِسْتَقَامَ يَسْتَقِيْمُ",
            "اِسْتَعَانَ يَسْتَعِيْنُ"
          ],
          "correct": 0
        },
        {
          "title": "to hear (respond to)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَجَابَ يَسْتَجِيْبُ mean?",
          "options": [
            "to hear (respond to)",
            "to be capable of s.th",
            "to straighten up",
            "to call for help"
          ],
          "correct": 0
        },
        {
          "title": "to hear (respond to) (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَجَابَ يَسْتَجِيْبُ?",
          "options": [
            "اِسْتِجَابَةً",
            "اِسْتِطَاعَةً",
            "اِسْتِقَامَةً",
            "اِسْتِعَانَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be capable of s.th",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be capable of s.th\"?",
          "options": [
            "اِسْتَطَاعَ يَسْتَطِيْعُ",
            "اِسْتَقَامَ يَسْتَقِيْمُ",
            "اِسْتَعَانَ يَسْتَعِيْنُ",
            "زَيَّنَ يُزَيِّنُ"
          ],
          "correct": 0
        },
        {
          "title": "to be capable of s.th",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَطَاعَ يَسْتَطِيْعُ mean?",
          "options": [
            "to be capable of s.th",
            "to straighten up",
            "to call for help",
            "to adorn"
          ],
          "correct": 0
        },
        {
          "title": "to be capable of s.th (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَطَاعَ يَسْتَطِيْعُ?",
          "options": [
            "اِسْتِطَاعَةً",
            "اِسْتِقَامَةً",
            "اِسْتِعَانَةً",
            "تَزْيِيْنًا"
          ],
          "correct": 0
        },
        {
          "title": "to straighten up",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to straighten up\"?",
          "options": [
            "اِسْتَقَامَ يَسْتَقِيْمُ",
            "اِسْتَعَانَ يَسْتَعِيْنُ",
            "زَيَّنَ يُزَيِّنُ",
            "نَوَّرَ يُنَوِّرُ"
          ],
          "correct": 0
        },
        {
          "title": "to straighten up",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَقَامَ يَسْتَقِيْمُ mean?",
          "options": [
            "to straighten up",
            "to call for help",
            "to adorn",
            "to illuminate"
          ],
          "correct": 0
        },
        {
          "title": "to straighten up (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَقَامَ يَسْتَقِيْمُ?",
          "options": [
            "اِسْتِقَامَةً",
            "اِسْتِعَانَةً",
            "تَزْيِيْنًا",
            "تَنْوِيْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to call for help",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to call for help\"?",
          "options": [
            "اِسْتَعَانَ يَسْتَعِيْنُ",
            "زَيَّنَ يُزَيِّنُ",
            "نَوَّرَ يُنَوِّرُ",
            "صَوَّرَ يُصَوِّرُ"
          ],
          "correct": 0
        },
        {
          "title": "to call for help",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَعَانَ يَسْتَعِيْنُ mean?",
          "options": [
            "to call for help",
            "to adorn",
            "to illuminate",
            "to fashion, mould"
          ],
          "correct": 0
        },
        {
          "title": "to call for help (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَعَانَ يَسْتَعِيْنُ?",
          "options": [
            "اِسْتِعَانَةً",
            "تَزْيِيْنًا",
            "تَنْوِيْرًا",
            "تَصْوِيْرًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l4",
      "title": "المراجعة",
      "subtitle": "Key terms, the master conjugation table, and the full unit vocabulary — no new material, just review",
      "concepts": [
        {
          "heading": "Unit 5 Summary",
          "lines": [
            {
              "html": "This is a cumulative review of Unit 5: every key term for <bdi>الْأَجْوَفُ</bdi>, the master <bdi>تَصْرِيْفٌ صَغِيْرٌ</bdi> table across all the <bdi>أَبْوَاب</bdi>, and the full unit-end verb vocabulary. Nothing here is new — the quiz below draws only on terms already taught, and the practice bank it unlocks is there to keep the vocabulary fresh.",
              "list": false
            },
            {
              "table": {
                "title": "Summary — التَّصْرِيْفُ الصَّغِيْرُ of every أَجْوَفُ verb of Unit 5 (p. 184)",
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
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "فَتَحَ",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "سَمِعَ",
                    "خَافَ",
                    "يَخَافُ",
                    "خَوْفًا",
                    "خِيْفَ",
                    "يُخَافُ",
                    "خَوْفًا",
                    "خَفْ",
                    "لَا تَخَفْ",
                    "خَائِفٌ",
                    "مَخُوْفٌ"
                  ],
                  [
                    "ضَرَبَ",
                    "بَاعَ",
                    "يَبِيْعُ",
                    "بَيْعًا",
                    "بِيْعَ",
                    "يُبَاعُ",
                    "بَيْعًا",
                    "بِعْ",
                    "لَا تَبِعْ",
                    "بَائِعٌ",
                    "مَبِيْعٌ"
                  ],
                  [
                    "نَصَرَ",
                    "قَالَ",
                    "يَقُوْلُ",
                    "قَوْلًا",
                    "قِيْلَ",
                    "يُقَالُ",
                    "قَوْلًا",
                    "قُلْ",
                    "لَا تَقُلْ",
                    "قَائِلٌ",
                    "مَقُوْلٌ"
                  ],
                  [
                    "حَسِبَ",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "تَفْعِيْلًا (II)",
                    "صَوَّرَ",
                    "يُصَوِّرُ",
                    "تَصْوِيْرًا",
                    "صُوِّرَ",
                    "يُصَوَّرُ",
                    "تَصْوِيْرًا",
                    "صَوِّرْ",
                    "لَا تُصَوِّرْ",
                    "مُصَوِّرٌ",
                    "مُصَوَّرٌ"
                  ],
                  [
                    "مُفَاعَلَةً (III)",
                    "نَاوَلَ",
                    "يُنَاوِلُ",
                    "مُنَاوَلَةً",
                    "نُوْوِلَ",
                    "يُنَاوَلُ",
                    "مُنَاوَلَةً",
                    "نَاوِلْ",
                    "لَا تُنَاوِلْ",
                    "مُنَاوِلٌ",
                    "مُنَاوَلٌ"
                  ],
                  [
                    "إِفْعَالًا (IV)",
                    "أَرَادَ",
                    "يُرِيْدُ",
                    "إِرَادَةً",
                    "أُرِيْدَ",
                    "يُرَادُ",
                    "إِرَادَةً",
                    "أَرِدْ",
                    "لَا تُرِدْ",
                    "مُرِيْدٌ",
                    "مُرَادٌ"
                  ],
                  [
                    "تَفَعُّلًا (V)",
                    "تَبَيَّنَ",
                    "يَتَبَيَّنُ",
                    "تَبَيُّنًا",
                    "تُبُيِّنَ",
                    "يُتَبَيَّنُ",
                    "تَبَيُّنًا",
                    "تَبَيَّنْ",
                    "لَا تَتَبَيَّنْ",
                    "مُتَبَيِّنٌ",
                    "مُتَبَيَّنٌ"
                  ],
                  [
                    "تَفَاعُلًا (VI)",
                    "تَحَاوَرَ",
                    "يَتَحَاوَرُ",
                    "تَحَاوُرًا",
                    "تُحُوْوِرَ",
                    "يُتَحَاوَرُ",
                    "تَحَاوُرًا",
                    "تَحَاوَرْ",
                    "لَا تَتَحَاوَرْ",
                    "مُتَحَاوِرٌ",
                    "مُتَحَاوَرٌ"
                  ],
                  [
                    "اِنْفِعَالًا (VII)",
                    "اِنْقَادَ",
                    "يَنْقَادُ",
                    "اِنْقِيَادًا",
                    "—",
                    "—",
                    "—",
                    "اِنْقَدْ",
                    "لَا تَنْقَدْ",
                    "مُنْقَادٌ",
                    "—"
                  ],
                  [
                    "اِفْتِعَالًا (VIII)",
                    "اِحْتَاجَ",
                    "يَحْتَاجُ",
                    "اِحْتِيَاجًا",
                    "اُحْتِيْجَ",
                    "يُحْتَاجُ",
                    "اِحْتِيَاجًا",
                    "اِحْتَجْ",
                    "لَا تَحْتَجْ",
                    "مُحْتَاجٌ",
                    "مُحْتَاجٌ"
                  ],
                  [
                    "اِسْتِفْعَالًا (X)",
                    "اِسْتَقَامَ",
                    "يَسْتَقِيْمُ",
                    "اِسْتِقَامَةً",
                    "اُسْتُقِيْمَ",
                    "يُسْتَقَامُ",
                    "اِسْتِقَامَةً",
                    "اِسْتَقِمْ",
                    "لَا تَسْتَقِمْ",
                    "مُسْتَقِيْمٌ",
                    "مُسْتَقَامٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "The three changes of الْأَجْوَفُ at a glance",
                "headers": [
                  "Underlying form",
                  "Printed form",
                  "Change"
                ],
                "rows": [
                  [
                    "خَوِفَ",
                    "خَافَ",
                    "قَلْبٌ — the وَاوٌ carrying a حَرَكَة after a فَتْحَة becomes an أَلِفٌ"
                  ],
                  [
                    "يَبْيِعُ",
                    "يَبِيْعُ",
                    "نَقْلٌ — the كَسْرَة moves onto the بَاء, leaving a sākin يَاءٌ"
                  ],
                  [
                    "يَقْوُلُ",
                    "يَقُوْلُ",
                    "نَقْلٌ — the ضَمَّة moves onto the قَاف, leaving a sākin وَاوٌ"
                  ],
                  [
                    "خَافْتُ",
                    "خِفْتُ",
                    "حَذْفٌ — two sākin letters meet, so the أَلِفٌ drops; the كَسْرَة shows a يَاءٌ underlies خَافَ… (from خَوِفَ, a ضَمَّة would show a وَاوٌ)"
                  ],
                  [
                    "قَالْتُ",
                    "قُلْتُ",
                    "حَذْفٌ — the أَلِفٌ drops and a ضَمَّة is left, showing the وَاوٌ of قَوَلَ"
                  ],
                  [
                    "بِيْعْ",
                    "بِعْ",
                    "حَذْفٌ in the أَمْرٌ — the sākin يَاءٌ drops before the sākin عَيْن"
                  ],
                  [
                    "نَاوَلَ (passive نُاوِلَ)",
                    "نُوْوِلَ",
                    "قَلْبٌ — the أَلِفٌ becomes a وَاوٌ after a ضَمَّة"
                  ],
                  [
                    "تَحَاوَرَ (passive تُحَاوِرَ)",
                    "تُحُوْوِرَ",
                    "قَلْبٌ — the أَلِفٌ becomes a وَاوٌ after a ضَمَّة"
                  ],
                  [
                    "أَرْوَدَ / يُرْوِدُ",
                    "أَرَادَ / يُرِيْدُ",
                    "نَقْلٌ then قَلْبٌ in بَاب إِفْعَال"
                  ],
                  [
                    "اِنْقَوَدَ / اِحْتَوَجَ / اِسْتَقْوَمَ",
                    "اِنْقَادَ / اِحْتَاجَ / اِسْتَقَامَ",
                    "نَقْلٌ then قَلْبٌ in VII, VIII and X"
                  ],
                  [
                    "مُحْتَوِجٌ / مُحْتَوَجٌ",
                    "مُحْتَاجٌ / مُحْتَاجٌ",
                    "The اِسْمُ الْفَاعِلِ and the اِسْمُ الْمَفْعُوْلِ of بَاب اِفْتِعَال become identical"
                  ]
                ]
              }
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "What does اَلْأَجْوَفُ mean?",
          "options": [
            "A verb whose middle root letter is a weak letter",
            "An أَجْوَف whose middle root letter is a وَاوٌ",
            "An أَجْوَف whose middle root letter is a يَاءٌ",
            "A weak letter (ا، و، ي)"
          ],
          "correct": 0
        },
        {
          "q": "What does أَجْوَفُ وَاوِيٌّ mean?",
          "options": [
            "An أَجْوَف whose middle root letter is a وَاوٌ",
            "An أَجْوَف whose middle root letter is a يَاءٌ",
            "A weak letter (ا، و، ي)",
            "Changes to a weak letter"
          ],
          "correct": 0
        },
        {
          "q": "What does أَجْوَفُ يَائِيٌّ mean?",
          "options": [
            "An أَجْوَف whose middle root letter is a يَاءٌ",
            "A weak letter (ا، و، ي)",
            "Changes to a weak letter",
            "Changing one letter into another"
          ],
          "correct": 0
        },
        {
          "q": "What does حَرْفُ الْعِلَّةِ mean?",
          "options": [
            "A weak letter (ا، و، ي)",
            "Changes to a weak letter",
            "Changing one letter into another",
            "Transferring the حَرَكَة of the weak letter to the letter before it"
          ],
          "correct": 0
        },
        {
          "q": "What does إِعْلَالٌ mean?",
          "options": [
            "Changes to a weak letter",
            "Changing one letter into another",
            "Transferring the حَرَكَة of the weak letter to the letter before it",
            "Dropping a letter"
          ],
          "correct": 0
        },
        {
          "q": "What does قَلْبٌ mean?",
          "options": [
            "Changing one letter into another",
            "Transferring the حَرَكَة of the weak letter to the letter before it",
            "Dropping a letter",
            "Giving a letter a sukun"
          ],
          "correct": 0
        },
        {
          "q": "What does نَقْلٌ mean?",
          "options": [
            "Transferring the حَرَكَة of the weak letter to the letter before it",
            "Dropping a letter",
            "Giving a letter a sukun",
            "A verb with only its root letters"
          ],
          "correct": 0
        },
        {
          "q": "What does حَذْفٌ mean?",
          "options": [
            "Dropping a letter",
            "Giving a letter a sukun",
            "A verb with only its root letters",
            "A verb with additional letters"
          ],
          "correct": 0
        },
        {
          "q": "What does تَسْكِيْنٌ mean?",
          "options": [
            "Giving a letter a sukun",
            "A verb with only its root letters",
            "A verb with additional letters",
            "A verb whose middle root letter is a weak letter"
          ],
          "correct": 0
        },
        {
          "q": "What does الثُّلَاثِيُّ الْمُجَرَّدُ mean?",
          "options": [
            "A verb with only its root letters",
            "A verb with additional letters",
            "A verb whose middle root letter is a weak letter",
            "An أَجْوَف whose middle root letter is a وَاوٌ"
          ],
          "correct": 0
        },
        {
          "q": "What does الْمَزِيْدُ فِيْهِ mean?",
          "options": [
            "A verb with additional letters",
            "A verb whose middle root letter is a weak letter",
            "An أَجْوَف whose middle root letter is a وَاوٌ",
            "An أَجْوَف whose middle root letter is a يَاءٌ"
          ],
          "correct": 0
        },
        {
          "q": "According to the master summary table (p. 184), which two أَبْوَاب of الثُّلَاثِيُّ الْمُجَرَّدُ have no أَجْوَفُ example given (every cell left blank)?",
          "options": [
            "بَاب فَتَحَ and بَاب حَسِبَ",
            "بَاب سَمِعَ and بَاب ضَرَبَ",
            "بَاب نَصَرَ only",
            "None — every بَاب has an example"
          ],
          "correct": 0,
          "explanation": "The summary table (p. 184) prints \"—\" in every column for بَاب فَتَحَ and بَاب حَسِبَ: the book gives no أَجْوَفُ example from those two أَبْوَاب."
        },
        {
          "q": "In the summary table, why does اِنْقَادَ (بَاب اِنْفِعَال) have blank مَجْهُوْلٌ and اِسْمُ الْمَفْعُوْلِ columns?",
          "options": [
            "Because اِنْقَادَ is لَازِمٌ (intransitive), so it has no passive forms",
            "Because بَاب اِنْفِعَال never has an اِسْمُ الْمَفْعُوْلِ in Arabic",
            "Because the book ran out of space",
            "Because اِنْقَادَ has no اِسْمُ الْفَاعِلِ either"
          ],
          "correct": 0,
          "explanation": "اِنْقَادَ يَنْقَادُ is intransitive (لَازِمٌ), so — like يَتَمَ in Unit 4 — it has no passive الْمَاضِي / الْمُضَارِع and no اِسْمُ الْمَفْعُوْلِ."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 3 (p. 186)",
          "kind": "mcq",
          "prompt": "اِنْقِيَادًا: write الْمُخَاطَبَانِ مِنَ الْأَمْرِ.",
          "options": [
            "اِنْقَادَا",
            "اِنْقَدَا",
            "اِنْقَادُوْا",
            "لَا تَنْقَادَا"
          ],
          "correct": 0,
          "explanation": "اِنْقِيَادًا is the مَصْدَرٌ of اِنْقَادَ (بَاب اِنْفِعَال). The dual مُضَارِعٌ مَجْزُوْمٌ is تَنْقَادَا — the أَلِفٌ is not dropped because no two sākin letters meet — so the أَمْرٌ is اِنْقَادَا. Only the singular loses it (اِنْقَدْ)."
        },
        {
          "title": "Book Exercise 3 (p. 186)",
          "kind": "mcq",
          "prompt": "تَوْبَةً: write الْمُثَنَّى مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "تَائِبَانِ",
            "مَتُوْبَانِ",
            "تَابَا",
            "تَائِبَتَانِ"
          ],
          "correct": 0,
          "explanation": "تَوْبَةً is the مَصْدَرٌ of تَابَ يَتُوْبُ. Its اِسْمُ الْفَاعِلِ is تَائِبٌ (the وَاوٌ becomes a هَمْزَةٌ in the فَاعِلٌ pattern), dual تَائِبَانِ. مَتُوْبَانِ is the dual اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "title": "Book Exercise 3 (p. 186)",
          "kind": "mcq",
          "prompt": "اِسْتِجَابَةً: write الْمُخَاطَبُ مِنَ النَّهْيِ.",
          "options": [
            "لَا تَسْتَجِبْ",
            "لَا تَسْتَجِيْبْ",
            "اِسْتَجِبْ",
            "لَا يَسْتَجِبْ"
          ],
          "correct": 0,
          "explanation": "اِسْتَجَابَ يَسْتَجِيْبُ (بَاب اِسْتِفْعَال); in the مَجْزُوْمٌ the sākin يَاءٌ is dropped, giving لَا تَسْتَجِبْ. اِسْتَجِبْ is the أَمْرٌ."
        },
        {
          "title": "Book Exercise 3 (p. 186)",
          "kind": "mcq",
          "prompt": "خَوْفًا: write الْمُثَنَّاةُ مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مَخُوْفَتَانِ",
            "خَائِفَتَانِ",
            "مَخُوْفَانِ",
            "مَخِيْفَتَانِ"
          ],
          "correct": 0,
          "explanation": "The اِسْمُ الْمَفْعُوْلِ of خَافَ is مَخُوْفٌ; its feminine is مَخُوْفَةٌ and the feminine dual مَخُوْفَتَانِ. خَائِفَتَانِ is the اِسْمُ الْفَاعِلِ."
        },
        {
          "title": "Book Exercise 3 (p. 186)",
          "kind": "mcq",
          "prompt": "اِخْتِيَارًا: write الْمُفْرَدُ مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مُخْتَارٌ",
            "مُخْتِيرٌ",
            "مَخِيْرٌ",
            "مُخْتَارَةٌ"
          ],
          "correct": 0,
          "explanation": "In بَاب اِفْتِعَال the أَجْوَفُ makes the اِسْمُ الْفَاعِلِ and the اِسْمُ الْمَفْعُوْلِ identical: both are مُخْتَارٌ (compare مُحْتَاجٌ / مُحْتَاجٌ in the summary table)."
        },
        {
          "title": "Book Exercise 3 (p. 186)",
          "kind": "mcq",
          "prompt": "إِرَادَةً: write الْغَائِبَانِ مِنَ الْمَاضِي الْمَعْلُوْمِ.",
          "options": [
            "أَرَادَا",
            "أُرِيْدَا",
            "أَرَدَا",
            "يُرِيْدَانِ"
          ],
          "correct": 0,
          "explanation": "إِرَادَةً is the مَصْدَرٌ of أَرَادَ (بَاب إِفْعَال); the dual of the active past is أَرَادَا. أُرِيْدَا is the passive and يُرِيْدَانِ the مُضَارِعٌ."
        },
        {
          "title": "Book Exercise 3 (p. 186)",
          "kind": "mcq",
          "prompt": "اِسْتِقَامَةً: write الْغَائِبَةُ مِنَ الْمَاضِي الْمَجْهُوْلِ.",
          "options": [
            "اُسْتُقِيْمَتْ",
            "اِسْتَقَامَتْ",
            "اُسْتُقِمْنَ",
            "تُسْتَقَامُ"
          ],
          "correct": 0,
          "explanation": "The passive past of اِسْتَقَامَ is اُسْتُقِيْمَ; the feminine singular adds تْ: اُسْتُقِيْمَتْ. اِسْتَقَامَتْ is the active."
        },
        {
          "title": "Book Exercise 3 (p. 186)",
          "kind": "mcq",
          "prompt": "إِجَابَةً: write الْمُتَكَلِّمُوْنَ مِنَ الْمَاضِي الْمَجْهُوْلِ.",
          "options": [
            "أُجِبْنَا",
            "أَجَبْنَا",
            "أُجِيْبْنَا",
            "نُجَابُ"
          ],
          "correct": 0,
          "explanation": "The passive past of أَجَابَ is أُجِيْبَ; before the sākin نَا the يَاءٌ is dropped by حَذْفٌ, leaving أُجِبْنَا 'we were answered'. أَجَبْنَا is the active."
        },
        {
          "title": "Book Exercise 3 (p. 186)",
          "kind": "mcq",
          "prompt": "اِخْتِيَارًا: write الْمُخَاطَبَةُ مِنَ الْمَاضِي الْمَعْلُوْمِ.",
          "options": [
            "اِخْتَرْتِ",
            "اِخْتَرْتَ",
            "اِخْتَارَتْ",
            "اُخْتِيْرْتِ"
          ],
          "correct": 0,
          "explanation": "اِخْتَارَ loses its أَلِفٌ before the sākin pronoun: اِخْتَرْتِ 'you (f/s) chose'. اِخْتَرْتَ (with fathah) is masculine and اِخْتَارَتْ is 'she chose'."
        },
        {
          "title": "Book Exercise 3 (p. 186)",
          "kind": "mcq",
          "prompt": "مُنَاوَلَةً: write الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ.",
          "options": [
            "أُنَاوَلُ",
            "أُنَاوِلُ",
            "نُنَاوَلُ",
            "أَتَنَاوَلُ"
          ],
          "correct": 0,
          "explanation": "مُنَاوَلَةً is the مَصْدَرٌ of نَاوَلَ (بَاب مُفَاعَلَة); the passive مُضَارِعٌ is يُنَاوَلُ, so 'I am given' is أُنَاوَلُ. أُنَاوِلُ (kasrah) is the active."
        },
        {
          "title": "Book Exercise 3 (p. 186)",
          "kind": "mcq",
          "prompt": "قَوْلًا: write الْغَائِبَتَانِ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ.",
          "options": [
            "تُقَالَانِ",
            "يُقَالَانِ",
            "تَقُوْلَانِ",
            "قِيْلَتَا"
          ],
          "correct": 0,
          "explanation": "The passive مُضَارِعٌ of قَالَ is يُقَالُ; the feminine dual takes the تَـ prefix: تُقَالَانِ. تَقُوْلَانِ is the active."
        },
        {
          "title": "Book Exercise 3 (p. 186)",
          "kind": "mcq",
          "prompt": "اِحْتِيَاجًا: write الْغَائِبَاتُ مِنَ الْمَاضِي الْمَعْلُوْمِ.",
          "options": [
            "اِحْتَجْنَ",
            "اِحْتَاجْنَ",
            "يَحْتَجْنَ",
            "اُحْتِجْنَ"
          ],
          "correct": 0,
          "explanation": "Before the sākin نَ the أَلِفٌ of اِحْتَاجَ is dropped: اِحْتَجْنَ 'they (f/p) needed'. يَحْتَجْنَ is the مُضَارِعٌ and اُحْتِجْنَ the passive."
        },
        {
          "title": "Book Exercise 3 (p. 186)",
          "kind": "mcq",
          "prompt": "تَشَاوُرًا: write الْمُخَاطَبَاتُ مِنَ النَّهْيِ.",
          "options": [
            "لَا تَتَشَاوَرْنَ",
            "لَا تَتَشَاوَرُوْا",
            "لَا يَتَشَاوَرْنَ",
            "تَشَاوَرْنَ"
          ],
          "correct": 0,
          "explanation": "تَشَاوُرًا is the مَصْدَرٌ of تَشَاوَرَ (بَاب تَفَاعُل). The نَهْيٌ for You (f/p) is لَا تَتَشَاوَرْنَ; لَا يَتَشَاوَرْنَ would be الْغَائِبَاتُ."
        },
        {
          "title": "Book Exercise 3 (p. 186)",
          "kind": "mcq",
          "prompt": "بَيْعًا: write الْغَائِبُوْنَ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ.",
          "options": [
            "يُبَاعُوْنَ",
            "يَبِيْعُوْنَ",
            "بِيْعُوْا",
            "تُبَاعُوْنَ"
          ],
          "correct": 0,
          "explanation": "The passive مُضَارِعٌ of بَاعَ is يُبَاعُ; the masculine plural is يُبَاعُوْنَ. يَبِيْعُوْنَ is the active."
        },
        {
          "title": "Book Exercise 4 (p. 186)",
          "kind": "mcq",
          "prompt": "﴿عُدْتُمْ﴾ is which صِيْغَةٌ?",
          "options": [
            "الْمُخَاطَبُوْنَ of the الْمَاضِي الْمَعْلُوْمُ of عَادَ يَعُوْدُ — 'you (m/p) returned'",
            "الْمُخَاطَبُوْنَ of the الْمَاضِي الْمَجْهُوْلُ of عَادَ",
            "الْغَائِبُوْنَ of the الْمَاضِي الْمَعْلُوْمُ of عَادَ",
            "الْأَمْرُ of الْمُخَاطَبُوْنَ"
          ],
          "correct": 0,
          "explanation": "عَادَ is أَجْوَفُ وَاوِيٌّ from بَاب نَصَرَ; the أَلِفٌ drops before the sākin pronoun and a ضَمَّةٌ is left, showing the وَاوٌ: عُدْتُمْ. The passive would be عِيْدْتُمْ-style with a كَسْرَةٌ."
        },
        {
          "title": "Book Exercise 4 (p. 186)",
          "kind": "mcq",
          "prompt": "﴿سِيْقَ﴾ is which صِيْغَةٌ?",
          "options": [
            "الْغَائِبُ of the الْمَاضِي الْمَجْهُوْلُ of سَاقَ — 'he/it was driven'",
            "الْغَائِبُ of the الْمَاضِي الْمَعْلُوْمُ of سَاقَ",
            "الْأَمْرُ of سَاقَ",
            "الْمَصْدَرُ of سَاقَ"
          ],
          "correct": 0,
          "explanation": "Just like قِيْلَ from قَالَ, the passive past of an أَجْوَفُ verb shows a كَسْرَةٌ and a يَاءٌ: سِيْقَ. The active is سَاقَ."
        },
        {
          "title": "Book Exercise 4 (p. 186)",
          "kind": "mcq",
          "prompt": "﴿يُغَاثُوْا﴾ is which صِيْغَةٌ?",
          "options": [
            "الْغَائِبُوْنَ of the الْمُضَارِعُ الْمَجْهُوْلُ of أَغَاثَ (بَاب إِفْعَال) — 'they are given relief'",
            "الْغَائِبُوْنَ of the الْمُضَارِعُ الْمَعْلُوْمُ of أَغَاثَ",
            "الْغَائِبُوْنَ of the الْمَاضِي الْمَجْهُوْلُ of أَغَاثَ",
            "الْأَمْرُ of غَاثَ"
          ],
          "correct": 0,
          "explanation": "The ضَمَّةٌ on the يَـ and the فَتْحَةٌ before the أَلِفٌ mark the passive مُضَارِعٌ of بَاب إِفْعَال (يُفْعَالُ ← يُغَاثُ); the active would be يُغِيْثُوْنَ."
        },
        {
          "title": "Book Exercise 4 (p. 186)",
          "kind": "mcq",
          "prompt": "﴿مُرْتَابٌ﴾ is which form?",
          "options": [
            "اِسْمُ الْفَاعِلِ of اِرْتَابَ (بَاب اِفْتِعَال) — 'one who doubts'",
            "اِسْمُ الْمَفْعُوْلِ of رَابَ",
            "الْمَصْدَرُ of اِرْتَابَ",
            "الْمُضَارِعُ الْمَجْهُوْلُ of اِرْتَابَ"
          ],
          "correct": 0,
          "explanation": "The مُفْتَعِلٌ pattern of an أَجْوَفُ verb becomes مُفْتَالٌ: مُرْتَابٌ. In بَاب اِفْتِعَال the اِسْمُ الْفَاعِلِ and the اِسْمُ الْمَفْعُوْلِ are identical, so مُرْتَابٌ can also mean 'one who is doubted'."
        },
        {
          "title": "Book Exercise 4 (p. 186)",
          "kind": "mcq",
          "prompt": "﴿وَاسْتَعِيْنُوْا﴾ is which صِيْغَةٌ?",
          "options": [
            "الْمُخَاطَبُوْنَ of the الْأَمْرُ of اِسْتَعَانَ (بَاب اِسْتِفْعَال) — 'seek help!'",
            "الْمُخَاطَبُوْنَ of the النَّهْيُ of اِسْتَعَانَ",
            "الْغَائِبُوْنَ of the الْمُضَارِعُ of اِسْتَعَانَ",
            "الْمَاضِي الْمَعْلُوْمُ of اِسْتَعَانَ"
          ],
          "correct": 0,
          "explanation": "The plural أَمْرٌ keeps the يَاءٌ because no two sākin letters meet: اِسْتَعِيْنُوْا. The singular أَمْرٌ drops it: اِسْتَعِنْ."
        },
        {
          "title": "Book Exercise 4 (p. 186)",
          "kind": "mcq",
          "prompt": "﴿لَا تَخَفْ﴾ is which صِيْغَةٌ?",
          "options": [
            "الْمُخَاطَبُ of the النَّهْيُ of خَافَ — 'do not fear!'",
            "الْمُخَاطَبُ of the الْأَمْرُ of خَافَ",
            "الْغَائِبُ of the النَّهْيُ of خَافَ",
            "الْمُخَاطَبَةُ of the النَّهْيُ of خَافَ"
          ],
          "correct": 0,
          "explanation": "In the مَجْزُوْمٌ the أَلِفٌ of يَخَافُ drops: لَا تَخَفْ. The أَمْرٌ is خَفْ and the feminine نَهْيٌ is لَا تَخَافِيْ."
        },
        {
          "title": "Book Exercise 4 (p. 186)",
          "kind": "mcq",
          "prompt": "﴿الْمُسْتَعَانُ﴾ is which form?",
          "options": [
            "اِسْمُ الْمَفْعُوْلِ of اِسْتَعَانَ (بَاب اِسْتِفْعَال) — 'the One whose help is sought'",
            "اِسْمُ الْفَاعِلِ of اِسْتَعَانَ",
            "الْمَصْدَرُ of اِسْتَعَانَ",
            "الْأَمْرُ of اِسْتَعَانَ"
          ],
          "correct": 0,
          "explanation": "The اِسْمُ الْمَفْعُوْلِ pattern مُسْتَفْعَلٌ gives مُسْتَعَانٌ (فَتْحَةٌ before the أَلِفٌ), exactly like مُسْتَقَامٌ in the summary table. The اِسْمُ الْفَاعِلِ would be مُسْتَعِيْنٌ."
        },
        {
          "title": "Book Exercise 4 (p. 186)",
          "kind": "mcq",
          "prompt": "﴿لَا تَعَاوَنُوْا﴾ is which صِيْغَةٌ?",
          "options": [
            "الْمُخَاطَبُوْنَ of the النَّهْيُ of تَعَاوَنَ (بَاب تَفَاعُل) — 'do not co-operate'",
            "الْمُخَاطَبُوْنَ of the الْأَمْرُ of تَعَاوَنَ",
            "الْغَائِبُوْنَ of the الْمُضَارِعُ of تَعَاوَنَ",
            "الْمُخَاطَبُوْنَ of the النَّهْيُ of عَاوَنَ"
          ],
          "correct": 0,
          "explanation": "تَعَاوَنَ يَتَعَاوَنُ is بَاب تَفَاعُل; the نَهْيٌ for You (m/p) drops the نُوْنٌ of the مُضَارِعٌ: لَا تَتَعَاوَنُوْا, written in the Quran with one تَاء elided (لَا تَعَاوَنُوْا)."
        },
        {
          "title": "to answer",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to answer\"?",
          "options": [
            "أَجَابَ يُجِيْبُ",
            "اِحْتَاجَ يَحْتَاجُ",
            "اِخْتَارَ يَخْتَارُ",
            "أَرَادَ يُرِيْدُ"
          ],
          "correct": 0
        },
        {
          "title": "to answer",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَجَابَ يُجِيْبُ mean?",
          "options": [
            "to answer",
            "to need",
            "to choose",
            "to intend"
          ],
          "correct": 0
        },
        {
          "title": "to answer (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَجَابَ يُجِيْبُ?",
          "options": [
            "إِجَابَةً",
            "اِحْتِيَاجًا",
            "اِخْتِيَارًا",
            "إِرَادَةً"
          ],
          "correct": 0
        },
        {
          "title": "to need",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to need\"?",
          "options": [
            "اِحْتَاجَ يَحْتَاجُ",
            "اِخْتَارَ يَخْتَارُ",
            "أَرَادَ يُرِيْدُ",
            "اِرْتَابَ يَرْتَابُ"
          ],
          "correct": 0
        },
        {
          "title": "to need",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِحْتَاجَ يَحْتَاجُ mean?",
          "options": [
            "to need",
            "to choose",
            "to intend",
            "to doubt"
          ],
          "correct": 0
        },
        {
          "title": "to need (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِحْتَاجَ يَحْتَاجُ?",
          "options": [
            "اِحْتِيَاجًا",
            "اِخْتِيَارًا",
            "إِرَادَةً",
            "اِرْتِيَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to choose",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to choose\"?",
          "options": [
            "اِخْتَارَ يَخْتَارُ",
            "أَرَادَ يُرِيْدُ",
            "اِرْتَابَ يَرْتَابُ",
            "اِسْتَجَابَ يَسْتَجِيْبُ"
          ],
          "correct": 0
        },
        {
          "title": "to choose",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِخْتَارَ يَخْتَارُ mean?",
          "options": [
            "to choose",
            "to intend",
            "to doubt",
            "to hear"
          ],
          "correct": 0
        },
        {
          "title": "to choose (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِخْتَارَ يَخْتَارُ?",
          "options": [
            "اِخْتِيَارًا",
            "إِرَادَةً",
            "اِرْتِيَابًا",
            "اِسْتِجَابَةً"
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
            "اِرْتَابَ يَرْتَابُ",
            "اِسْتَجَابَ يَسْتَجِيْبُ",
            "اِسْتَطَاعَ يَسْتَطِيْعُ"
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
            "to doubt",
            "to hear",
            "to be capable of s.th"
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
            "اِرْتِيَابًا",
            "اِسْتِجَابَةً",
            "اِسْتِطَاعَةً"
          ],
          "correct": 0
        },
        {
          "title": "to doubt",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to doubt\"?",
          "options": [
            "اِرْتَابَ يَرْتَابُ",
            "اِسْتَجَابَ يَسْتَجِيْبُ",
            "اِسْتَطَاعَ يَسْتَطِيْعُ",
            "اِسْتَعَانَ يَسْتَعِيْنُ"
          ],
          "correct": 0
        },
        {
          "title": "to doubt",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِرْتَابَ يَرْتَابُ mean?",
          "options": [
            "to doubt",
            "to hear",
            "to be capable of s.th",
            "to call for help"
          ],
          "correct": 0
        },
        {
          "title": "to doubt (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِرْتَابَ يَرْتَابُ?",
          "options": [
            "اِرْتِيَابًا",
            "اِسْتِجَابَةً",
            "اِسْتِطَاعَةً",
            "اِسْتِعَانَةً"
          ],
          "correct": 0
        },
        {
          "title": "to hear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hear\"?",
          "options": [
            "اِسْتَجَابَ يَسْتَجِيْبُ",
            "اِسْتَطَاعَ يَسْتَطِيْعُ",
            "اِسْتَعَانَ يَسْتَعِيْنُ",
            "اِسْتَقَامَ يَسْتَقِيْمُ"
          ],
          "correct": 0
        },
        {
          "title": "to hear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَجَابَ يَسْتَجِيْبُ mean?",
          "options": [
            "to hear",
            "to be capable of s.th",
            "to call for help",
            "to straighten up"
          ],
          "correct": 0
        },
        {
          "title": "to hear (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَجَابَ يَسْتَجِيْبُ?",
          "options": [
            "اِسْتِجَابَةً",
            "اِسْتِطَاعَةً",
            "اِسْتِعَانَةً",
            "اِسْتِقَامَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be capable of s.th",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be capable of s.th\"?",
          "options": [
            "اِسْتَطَاعَ يَسْتَطِيْعُ",
            "اِسْتَعَانَ يَسْتَعِيْنُ",
            "اِسْتَقَامَ يَسْتَقِيْمُ",
            "أَصَابَ يُصِيْبُ"
          ],
          "correct": 0
        },
        {
          "title": "to be capable of s.th",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَطَاعَ يَسْتَطِيْعُ mean?",
          "options": [
            "to be capable of s.th",
            "to call for help",
            "to straighten up",
            "to hit/afflict"
          ],
          "correct": 0
        },
        {
          "title": "to be capable of s.th (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَطَاعَ يَسْتَطِيْعُ?",
          "options": [
            "اِسْتِطَاعَةً",
            "اِسْتِعَانَةً",
            "اِسْتِقَامَةً",
            "إِصَابَةً"
          ],
          "correct": 0
        },
        {
          "title": "to call for help",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to call for help\"?",
          "options": [
            "اِسْتَعَانَ يَسْتَعِيْنُ",
            "اِسْتَقَامَ يَسْتَقِيْمُ",
            "أَصَابَ يُصِيْبُ",
            "اِغْتَابَ يَغْتَابُ"
          ],
          "correct": 0
        },
        {
          "title": "to call for help",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَعَانَ يَسْتَعِيْنُ mean?",
          "options": [
            "to call for help",
            "to straighten up",
            "to hit/afflict",
            "to backbite"
          ],
          "correct": 0
        },
        {
          "title": "to call for help (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَعَانَ يَسْتَعِيْنُ?",
          "options": [
            "اِسْتِعَانَةً",
            "اِسْتِقَامَةً",
            "إِصَابَةً",
            "اِغْتِيَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to straighten up",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to straighten up\"?",
          "options": [
            "اِسْتَقَامَ يَسْتَقِيْمُ",
            "أَصَابَ يُصِيْبُ",
            "اِغْتَابَ يَغْتَابُ",
            "أَقَامَ يُقِيْمُ"
          ],
          "correct": 0
        },
        {
          "title": "to straighten up",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَقَامَ يَسْتَقِيْمُ mean?",
          "options": [
            "to straighten up",
            "to hit/afflict",
            "to backbite",
            "to straighten"
          ],
          "correct": 0
        },
        {
          "title": "to straighten up (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَقَامَ يَسْتَقِيْمُ?",
          "options": [
            "اِسْتِقَامَةً",
            "إِصَابَةً",
            "اِغْتِيَابًا",
            "إِقَامَةً"
          ],
          "correct": 0
        },
        {
          "title": "to hit/afflict",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hit/afflict\"?",
          "options": [
            "أَصَابَ يُصِيْبُ",
            "اِغْتَابَ يَغْتَابُ",
            "أَقَامَ يُقِيْمُ",
            "اِنْقَادَ يَنْقَادُ"
          ],
          "correct": 0
        },
        {
          "title": "to hit/afflict",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَصَابَ يُصِيْبُ mean?",
          "options": [
            "to hit/afflict",
            "to backbite",
            "to straighten",
            "to obey/to submit"
          ],
          "correct": 0
        },
        {
          "title": "to hit/afflict (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَصَابَ يُصِيْبُ?",
          "options": [
            "إِصَابَةً",
            "اِغْتِيَابًا",
            "إِقَامَةً",
            "اِنْقِيَادًا"
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
            "أَقَامَ يُقِيْمُ",
            "اِنْقَادَ يَنْقَادُ",
            "اِنْهَارَ يَنْهَارُ"
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
            "to straighten",
            "to obey/to submit",
            "to collapse"
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
            "إِقَامَةً",
            "اِنْقِيَادًا",
            "اِنْهِيَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to straighten",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to straighten\"?",
          "options": [
            "أَقَامَ يُقِيْمُ",
            "اِنْقَادَ يَنْقَادُ",
            "اِنْهَارَ يَنْهَارُ",
            "بَاعَ يَبِيْعُ"
          ],
          "correct": 0
        },
        {
          "title": "to straighten",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَقَامَ يُقِيْمُ mean?",
          "options": [
            "to straighten",
            "to obey/to submit",
            "to collapse",
            "to sell"
          ],
          "correct": 0
        },
        {
          "title": "to straighten (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَقَامَ يُقِيْمُ?",
          "options": [
            "إِقَامَةً",
            "اِنْقِيَادًا",
            "اِنْهِيَارًا",
            "بَيْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to obey/to submit",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to obey/to submit\"?",
          "options": [
            "اِنْقَادَ يَنْقَادُ",
            "اِنْهَارَ يَنْهَارُ",
            "بَاعَ يَبِيْعُ",
            "بَايَعَ يُبَايِعُ"
          ],
          "correct": 0
        },
        {
          "title": "to obey/to submit",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْقَادَ يَنْقَادُ mean?",
          "options": [
            "to obey/to submit",
            "to collapse",
            "to sell",
            "to make a contract/pledge allegiance"
          ],
          "correct": 0
        },
        {
          "title": "to obey/to submit (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْقَادَ يَنْقَادُ?",
          "options": [
            "اِنْقِيَادًا",
            "اِنْهِيَارًا",
            "بَيْعًا",
            "مُبَايَعَةً"
          ],
          "correct": 0
        },
        {
          "title": "to collapse",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to collapse\"?",
          "options": [
            "اِنْهَارَ يَنْهَارُ",
            "بَاعَ يَبِيْعُ",
            "بَايَعَ يُبَايِعُ",
            "تَابَ يَتُوْبُ"
          ],
          "correct": 0
        },
        {
          "title": "to collapse",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْهَارَ يَنْهَارُ mean?",
          "options": [
            "to collapse",
            "to sell",
            "to make a contract/pledge allegiance",
            "to forgive"
          ],
          "correct": 0
        },
        {
          "title": "to collapse (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْهَارَ يَنْهَارُ?",
          "options": [
            "اِنْهِيَارًا",
            "بَيْعًا",
            "مُبَايَعَةً",
            "تَوْبَةً"
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
            "بَايَعَ يُبَايِعُ",
            "تَابَ يَتُوْبُ",
            "تَبَيَّنَ يَتَبَيَّنُ"
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
            "to make a contract/pledge allegiance",
            "to forgive",
            "to become clear"
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
            "مُبَايَعَةً",
            "تَوْبَةً",
            "تَبَيُّنًا"
          ],
          "correct": 0
        },
        {
          "title": "to make a contract/pledge allegiance",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make a contract/pledge allegiance\"?",
          "options": [
            "بَايَعَ يُبَايِعُ",
            "تَابَ يَتُوْبُ",
            "تَبَيَّنَ يَتَبَيَّنُ",
            "تَحَاوَرَ يَتَحَاوَرُ"
          ],
          "correct": 0
        },
        {
          "title": "to make a contract/pledge allegiance",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَايَعَ يُبَايِعُ mean?",
          "options": [
            "to make a contract/pledge allegiance",
            "to forgive",
            "to become clear",
            "to carry on a discussion"
          ],
          "correct": 0
        },
        {
          "title": "to make a contract/pledge allegiance (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَايَعَ يُبَايِعُ?",
          "options": [
            "مُبَايَعَةً",
            "تَوْبَةً",
            "تَبَيُّنًا",
            "تَحَاوُرًا"
          ],
          "correct": 0
        },
        {
          "title": "to forgive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to forgive\"?",
          "options": [
            "تَابَ يَتُوْبُ",
            "تَبَيَّنَ يَتَبَيَّنُ",
            "تَحَاوَرَ يَتَحَاوَرُ",
            "تَشَاوَرَ يَتَشَاوَرُ"
          ],
          "correct": 0
        },
        {
          "title": "to forgive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَابَ يَتُوْبُ mean?",
          "options": [
            "to forgive",
            "to become clear",
            "to carry on a discussion",
            "to take counsel"
          ],
          "correct": 0
        },
        {
          "title": "to forgive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَابَ يَتُوْبُ?",
          "options": [
            "تَوْبَةً",
            "تَبَيُّنًا",
            "تَحَاوُرًا",
            "تَشَاوُرًا"
          ],
          "correct": 0
        },
        {
          "title": "to become clear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to become clear\"?",
          "options": [
            "تَبَيَّنَ يَتَبَيَّنُ",
            "تَحَاوَرَ يَتَحَاوَرُ",
            "تَشَاوَرَ يَتَشَاوَرُ",
            "تَطَوَّعَ يَتَطَوَّعُ"
          ],
          "correct": 0
        },
        {
          "title": "to become clear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَبَيَّنَ يَتَبَيَّنُ mean?",
          "options": [
            "to become clear",
            "to carry on a discussion",
            "to take counsel",
            "to volunteer"
          ],
          "correct": 0
        },
        {
          "title": "to become clear (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَبَيَّنَ يَتَبَيَّنُ?",
          "options": [
            "تَبَيُّنًا",
            "تَحَاوُرًا",
            "تَشَاوُرًا",
            "تَطَوُّعًا"
          ],
          "correct": 0
        },
        {
          "title": "to carry on a discussion",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to carry on a discussion\"?",
          "options": [
            "تَحَاوَرَ يَتَحَاوَرُ",
            "تَشَاوَرَ يَتَشَاوَرُ",
            "تَطَوَّعَ يَتَطَوَّعُ",
            "تَعَوَّذَ يَتَعَوَّذُ"
          ],
          "correct": 0
        },
        {
          "title": "to carry on a discussion",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَحَاوَرَ يَتَحَاوَرُ mean?",
          "options": [
            "to carry on a discussion",
            "to take counsel",
            "to volunteer",
            "to seek refuge"
          ],
          "correct": 0
        },
        {
          "title": "to carry on a discussion (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَحَاوَرَ يَتَحَاوَرُ?",
          "options": [
            "تَحَاوُرًا",
            "تَشَاوُرًا",
            "تَطَوُّعًا",
            "تَعَوُّذًا"
          ],
          "correct": 0
        },
        {
          "title": "to take counsel",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take counsel\"?",
          "options": [
            "تَشَاوَرَ يَتَشَاوَرُ",
            "تَطَوَّعَ يَتَطَوَّعُ",
            "تَعَوَّذَ يَتَعَوَّذُ",
            "تَغَيَّرَ يَتَغَيَّرُ"
          ],
          "correct": 0
        },
        {
          "title": "to take counsel",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَشَاوَرَ يَتَشَاوَرُ mean?",
          "options": [
            "to take counsel",
            "to volunteer",
            "to seek refuge",
            "to change"
          ],
          "correct": 0
        },
        {
          "title": "to take counsel (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَشَاوَرَ يَتَشَاوَرُ?",
          "options": [
            "تَشَاوُرًا",
            "تَطَوُّعًا",
            "تَعَوُّذًا",
            "تَغَيُّرًا"
          ],
          "correct": 0
        },
        {
          "title": "to volunteer",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to volunteer\"?",
          "options": [
            "تَطَوَّعَ يَتَطَوَّعُ",
            "تَعَوَّذَ يَتَعَوَّذُ",
            "تَغَيَّرَ يَتَغَيَّرُ",
            "تَلَاوَمَ يَتَلَاوَمُ"
          ],
          "correct": 0
        },
        {
          "title": "to volunteer",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَطَوَّعَ يَتَطَوَّعُ mean?",
          "options": [
            "to volunteer",
            "to seek refuge",
            "to change",
            "to blame each other"
          ],
          "correct": 0
        },
        {
          "title": "to volunteer (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَطَوَّعَ يَتَطَوَّعُ?",
          "options": [
            "تَطَوُّعًا",
            "تَعَوُّذًا",
            "تَغَيُّرًا",
            "تَلَاوُمًا"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to seek refuge\"?",
          "options": [
            "تَعَوَّذَ يَتَعَوَّذُ",
            "تَغَيَّرَ يَتَغَيَّرُ",
            "تَلَاوَمَ يَتَلَاوَمُ",
            "تَنَاوَلَ يَتَنَاوَلُ"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَعَوَّذَ يَتَعَوَّذُ mean?",
          "options": [
            "to seek refuge",
            "to change",
            "to blame each other",
            "to take/receive"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَعَوَّذَ يَتَعَوَّذُ?",
          "options": [
            "تَعَوُّذًا",
            "تَغَيُّرًا",
            "تَلَاوُمًا",
            "تَنَاوُلًا"
          ],
          "correct": 0
        },
        {
          "title": "to change",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to change\"?",
          "options": [
            "تَغَيَّرَ يَتَغَيَّرُ",
            "تَلَاوَمَ يَتَلَاوَمُ",
            "تَنَاوَلَ يَتَنَاوَلُ",
            "جَاءَ يَجِيْءُ"
          ],
          "correct": 0
        },
        {
          "title": "to change",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَغَيَّرَ يَتَغَيَّرُ mean?",
          "options": [
            "to change",
            "to blame each other",
            "to take/receive",
            "to come"
          ],
          "correct": 0
        },
        {
          "title": "to change (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَغَيَّرَ يَتَغَيَّرُ?",
          "options": [
            "تَغَيُّرًا",
            "تَلَاوُمًا",
            "تَنَاوُلًا",
            "مَجِيْئًا"
          ],
          "correct": 0
        },
        {
          "title": "to blame each other",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to blame each other\"?",
          "options": [
            "تَلَاوَمَ يَتَلَاوَمُ",
            "تَنَاوَلَ يَتَنَاوَلُ",
            "جَاءَ يَجِيْءُ",
            "حَاوَرَ يُحَاوِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to blame each other",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَلَاوَمَ يَتَلَاوَمُ mean?",
          "options": [
            "to blame each other",
            "to take/receive",
            "to come",
            "to discuss/ debate"
          ],
          "correct": 0
        },
        {
          "title": "to blame each other (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَلَاوَمَ يَتَلَاوَمُ?",
          "options": [
            "تَلَاوُمًا",
            "تَنَاوُلًا",
            "مَجِيْئًا",
            "مُحَاوَرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to take/receive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take/receive\"?",
          "options": [
            "تَنَاوَلَ يَتَنَاوَلُ",
            "جَاءَ يَجِيْءُ",
            "حَاوَرَ يُحَاوِرُ",
            "خَافَ يَخَافُ"
          ],
          "correct": 0
        },
        {
          "title": "to take/receive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَنَاوَلَ يَتَنَاوَلُ mean?",
          "options": [
            "to take/receive",
            "to come",
            "to discuss/ debate",
            "to be scared"
          ],
          "correct": 0
        },
        {
          "title": "to take/receive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَنَاوَلَ يَتَنَاوَلُ?",
          "options": [
            "تَنَاوُلًا",
            "مَجِيْئًا",
            "مُحَاوَرَةً",
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
            "جَاءَ يَجِيْءُ",
            "حَاوَرَ يُحَاوِرُ",
            "خَافَ يَخَافُ",
            "زَوَّجَ يُزَوِّجُ"
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
            "to discuss/ debate",
            "to be scared",
            "to marry"
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
            "مُحَاوَرَةً",
            "خَوْفًا",
            "تَزْوِيْجًا"
          ],
          "correct": 0
        },
        {
          "title": "to discuss/ debate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to discuss/ debate\"?",
          "options": [
            "حَاوَرَ يُحَاوِرُ",
            "خَافَ يَخَافُ",
            "زَوَّجَ يُزَوِّجُ",
            "زَيَّنَ يُزَيِّنُ"
          ],
          "correct": 0
        },
        {
          "title": "to discuss/ debate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَاوَرَ يُحَاوِرُ mean?",
          "options": [
            "to discuss/ debate",
            "to be scared",
            "to marry",
            "to adorn"
          ],
          "correct": 0
        },
        {
          "title": "to discuss/ debate (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَاوَرَ يُحَاوِرُ?",
          "options": [
            "مُحَاوَرَةً",
            "خَوْفًا",
            "تَزْوِيْجًا",
            "تَزْيِيْنًا"
          ],
          "correct": 0
        },
        {
          "title": "to be scared",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be scared\"?",
          "options": [
            "خَافَ يَخَافُ",
            "زَوَّجَ يُزَوِّجُ",
            "زَيَّنَ يُزَيِّنُ",
            "سَارَ يَسِيْرُ"
          ],
          "correct": 0
        },
        {
          "title": "to be scared",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَافَ يَخَافُ mean?",
          "options": [
            "to be scared",
            "to marry",
            "to adorn",
            "to walk"
          ],
          "correct": 0
        },
        {
          "title": "to be scared (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَافَ يَخَافُ?",
          "options": [
            "خَوْفًا",
            "تَزْوِيْجًا",
            "تَزْيِيْنًا",
            "سَيْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to marry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to marry\"?",
          "options": [
            "زَوَّجَ يُزَوِّجُ",
            "زَيَّنَ يُزَيِّنُ",
            "سَارَ يَسِيْرُ",
            "شَاوَرَ يُشَاوِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to marry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does زَوَّجَ يُزَوِّجُ mean?",
          "options": [
            "to marry",
            "to adorn",
            "to walk",
            "to take counsel"
          ],
          "correct": 0
        },
        {
          "title": "to marry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of زَوَّجَ يُزَوِّجُ?",
          "options": [
            "تَزْوِيْجًا",
            "تَزْيِيْنًا",
            "سَيْرًا",
            "مُشَاوَرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to adorn",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to adorn\"?",
          "options": [
            "زَيَّنَ يُزَيِّنُ",
            "سَارَ يَسِيْرُ",
            "شَاوَرَ يُشَاوِرُ",
            "صَامَ يَصُوْمُ"
          ],
          "correct": 0
        },
        {
          "title": "to adorn",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does زَيَّنَ يُزَيِّنُ mean?",
          "options": [
            "to adorn",
            "to walk",
            "to take counsel",
            "to fast"
          ],
          "correct": 0
        },
        {
          "title": "to adorn (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of زَيَّنَ يُزَيِّنُ?",
          "options": [
            "تَزْيِيْنًا",
            "سَيْرًا",
            "مُشَاوَرَةً",
            "صَوْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to walk",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to walk\"?",
          "options": [
            "سَارَ يَسِيْرُ",
            "شَاوَرَ يُشَاوِرُ",
            "صَامَ يَصُوْمُ",
            "صَوَّرَ يُصَوِّرُ"
          ],
          "correct": 0
        },
        {
          "title": "to walk",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَارَ يَسِيْرُ mean?",
          "options": [
            "to walk",
            "to take counsel",
            "to fast",
            "to fashion, mould"
          ],
          "correct": 0
        },
        {
          "title": "to walk (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَارَ يَسِيْرُ?",
          "options": [
            "سَيْرًا",
            "مُشَاوَرَةً",
            "صَوْمًا",
            "تَصْوِيْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to take counsel",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take counsel\"?",
          "options": [
            "شَاوَرَ يُشَاوِرُ",
            "صَامَ يَصُوْمُ",
            "صَوَّرَ يُصَوِّرُ",
            "عَاشَ يَعِيْشُ"
          ],
          "correct": 0
        },
        {
          "title": "to take counsel",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَاوَرَ يُشَاوِرُ mean?",
          "options": [
            "to take counsel",
            "to fast",
            "to fashion, mould",
            "to live"
          ],
          "correct": 0
        },
        {
          "title": "to take counsel (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَاوَرَ يُشَاوِرُ?",
          "options": [
            "مُشَاوَرَةً",
            "صَوْمًا",
            "تَصْوِيْرًا",
            "عَيْشًا"
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
            "صَوَّرَ يُصَوِّرُ",
            "عَاشَ يَعِيْشُ",
            "قَامَ يَقُوْمُ"
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
            "to fashion, mould",
            "to live",
            "to stand"
          ],
          "correct": 0
        },
        {
          "title": "to fast (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَامَ يَصُوْمُ?",
          "options": [
            "صَوْمًا",
            "تَصْوِيْرًا",
            "عَيْشًا",
            "قِيَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to fashion, mould",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fashion, mould\"?",
          "options": [
            "صَوَّرَ يُصَوِّرُ",
            "عَاشَ يَعِيْشُ",
            "قَامَ يَقُوْمُ",
            "مَاتَ يَمُوْتُ"
          ],
          "correct": 0
        },
        {
          "title": "to fashion, mould",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَوَّرَ يُصَوِّرُ mean?",
          "options": [
            "to fashion, mould",
            "to live",
            "to stand",
            "to die"
          ],
          "correct": 0
        },
        {
          "title": "to fashion, mould (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَوَّرَ يُصَوِّرُ?",
          "options": [
            "تَصْوِيْرًا",
            "عَيْشًا",
            "قِيَامًا",
            "مَوْتًا"
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
            "قَامَ يَقُوْمُ",
            "مَاتَ يَمُوْتُ",
            "نَالَ يَنَالُ"
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
            "to stand",
            "to die",
            "to acquire"
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
            "قِيَامًا",
            "مَوْتًا",
            "نَيْلًا"
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
            "مَاتَ يَمُوْتُ",
            "نَالَ يَنَالُ",
            "نَامَ يَنَامُ"
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
            "to die",
            "to acquire",
            "to sleep"
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
            "مَوْتًا",
            "نَيْلًا",
            "نَوْمًا"
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
            "نَالَ يَنَالُ",
            "نَامَ يَنَامُ",
            "نَاوَلَ يُنَاوِلُ"
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
            "to acquire",
            "to sleep",
            "to give/to present"
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
            "نَيْلًا",
            "نَوْمًا",
            "مُنَاوَلَةً"
          ],
          "correct": 0
        },
        {
          "title": "to acquire",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to acquire\"?",
          "options": [
            "نَالَ يَنَالُ",
            "نَامَ يَنَامُ",
            "نَاوَلَ يُنَاوِلُ",
            "نَوَّرَ يُنَوِّرُ"
          ],
          "correct": 0
        },
        {
          "title": "to acquire",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَالَ يَنَالُ mean?",
          "options": [
            "to acquire",
            "to sleep",
            "to give/to present",
            "to illuminate"
          ],
          "correct": 0
        },
        {
          "title": "to acquire (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَالَ يَنَالُ?",
          "options": [
            "نَيْلًا",
            "نَوْمًا",
            "مُنَاوَلَةً",
            "تَنْوِيْرًا"
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
            "نَاوَلَ يُنَاوِلُ",
            "نَوَّرَ يُنَوِّرُ",
            "هَابَ يَهَابُ"
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
            "to give/to present",
            "to illuminate",
            "to be in awe of"
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
            "مُنَاوَلَةً",
            "تَنْوِيْرًا",
            "هَيْبَةً"
          ],
          "correct": 0
        },
        {
          "title": "to give/to present",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give/to present\"?",
          "options": [
            "نَاوَلَ يُنَاوِلُ",
            "نَوَّرَ يُنَوِّرُ",
            "هَابَ يَهَابُ",
            "أَجَابَ يُجِيْبُ"
          ],
          "correct": 0
        },
        {
          "title": "to give/to present",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَاوَلَ يُنَاوِلُ mean?",
          "options": [
            "to give/to present",
            "to illuminate",
            "to be in awe of",
            "to answer"
          ],
          "correct": 0
        },
        {
          "title": "to give/to present (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَاوَلَ يُنَاوِلُ?",
          "options": [
            "مُنَاوَلَةً",
            "تَنْوِيْرًا",
            "هَيْبَةً",
            "إِجَابَةً"
          ],
          "correct": 0
        },
        {
          "title": "to illuminate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to illuminate\"?",
          "options": [
            "نَوَّرَ يُنَوِّرُ",
            "هَابَ يَهَابُ",
            "أَجَابَ يُجِيْبُ",
            "اِحْتَاجَ يَحْتَاجُ"
          ],
          "correct": 0
        },
        {
          "title": "to illuminate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَوَّرَ يُنَوِّرُ mean?",
          "options": [
            "to illuminate",
            "to be in awe of",
            "to answer",
            "to need"
          ],
          "correct": 0
        },
        {
          "title": "to illuminate (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَوَّرَ يُنَوِّرُ?",
          "options": [
            "تَنْوِيْرًا",
            "هَيْبَةً",
            "إِجَابَةً",
            "اِحْتِيَاجًا"
          ],
          "correct": 0
        },
        {
          "title": "to be in awe of",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be in awe of\"?",
          "options": [
            "هَابَ يَهَابُ",
            "أَجَابَ يُجِيْبُ",
            "اِحْتَاجَ يَحْتَاجُ",
            "اِخْتَارَ يَخْتَارُ"
          ],
          "correct": 0
        },
        {
          "title": "to be in awe of",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does هَابَ يَهَابُ mean?",
          "options": [
            "to be in awe of",
            "to answer",
            "to need",
            "to choose"
          ],
          "correct": 0
        },
        {
          "title": "to be in awe of (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of هَابَ يَهَابُ?",
          "options": [
            "هَيْبَةً",
            "إِجَابَةً",
            "اِحْتِيَاجًا",
            "اِخْتِيَارًا"
          ],
          "correct": 0
        }
      ]
    }
  ]
};

// Module 05 — Unit 4 Section 2: الْمِثَالُ الْيَائِيُّ (First Steps to Understanding Sarf, Unit 4
// Section 2, pp. 149-163)
//
// Converted from content-fstu-sarf/unit4-2-lesson1.js, unit4-2-lesson2.js and
// unit4-2-summary.js, following the same conversion pattern as module-04.js (the
// closest topical match -- the same مِثَالٌ family, يَاءٌ instead of وَاوٌ): raw
// sections/blocks -> concepts/lines, raw exercise items -> MCQ exercise.items, raw
// quiz/exerciseBank/vocab -> quiz/bank[]. l3 is a cumulative "Unit 4 Section 2
// Summary" review lesson (no exercise, no summary sidebar -- mirrors module-04.js's
// l4 / module-01.js's l13), built from unit4-2-summary.js's key terms, its master
// تصريف كبير table (kept as a second line in the one intro concept), and the
// section-end verb vocabulary. Module id is 's-u4b' (Unit 4 Section 1 is 's-u4a').
export default {
  "id": "s-u4b",
  "title": "الْمِثَالُ الْيَائِيُّ",
  "heading": "الْفِعْلُ غَيْرُ السَّالِمِ",
  "blurb": "الْمِثَالُ الْيَائِيّ: the weak verb whose first root letter is a يَاء, and how it behaves differently from its وَاوِيّ cousin.",
  "lessons": [
    {
      "id": "l1",
      "title": "الْمُجَرَّدُ",
      "subtitle": "Introduction to الْمِثَالُ الْيَائِيُّ, and its conjugation from the مُجَرَّدٌ أَبْوَاب — بَاب فَتَحَ، سَمِعَ and ضَرَبَ",
      "concepts": [
        {
          "heading": "Introduction: الْمِثَالُ الْيَائِيُّ",
          "lines": [
            {
              "html": "<bdi>الْمِثَالُ الْيَائِيُّ</bdi> is the <bdi>مِثَالٌ</bdi> verb whose first root letter is a <bdi>ي</bdi> (just as <bdi>الْمِثَالُ الْوَاوِيُّ</bdi> of Section 1 has a <bdi>و</bdi> as its first root letter). This section conjugates <bdi>الْمِثَالُ الْيَائِيُّ</bdi> through its abwab: the <bdi>مُجَرَّدٌ</bdi> abwab <bdi>فَتَحَ، سَمِعَ، ضَرَبَ</bdi> (Parts 1–3, this lesson) and the <bdi>مَزِيْدٌ فِيْهِ</bdi> abwab II, III, IV, V, VI, VIII and X (Parts 4–10).",
              "list": false
            },
            {
              "html": "Unlike <bdi>الْمِثَالُ الْوَاوِيُّ</bdi> — where the <bdi>و</bdi> is dropped in the <bdi>مُضَارِعٌ</bdi> of verbs like <bdi>وَعَدَ يَعِدُ</bdi> — the <bdi>ي</bdi> of <bdi>الْمِثَالُ الْيَائِيُّ</bdi> remains in the <bdi>مُضَارِعٌ</bdi> of the <bdi>مُجَرَّدٌ</bdi> abwab, e.g. <bdi>يَنَعَ يَيْنَعُ، يَبِسَ يَيْبَسُ، يَتَمَ يَيْتِمُ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is الْمِثَالُ الْيَائِيُّ?",
            "kind": "mcq",
            "options": [
              "A verb whose first root letter is و",
              "A verb whose first root letter is ي",
              "A verb whose last root letter is ي",
              "A verb whose middle root letter is ي"
            ],
            "correct": 1
          }
        },
        {
          "heading": "Part 1: الْمِثَالُ الْيَائِيُّ مِنْ بَابِ فَتَحَ يَفْتَحُ",
          "lines": [
            {
              "html": "The model verb is <bdi>يَنَعَ يَيْنَعُ يَنْعًا</bdi> (to be ripe). The <bdi>ي</bdi> remains in the <bdi>مُضَارِعُ الْمَعْلُوْمُ</bdi> (<bdi>يَيْنَعُ</bdi>), but in the <bdi>مُضَارِعُ الْمَجْهُوْلُ</bdi> the <bdi>ي</bdi> changes into <bdi>و</bdi> because of the <bdi>ضَمَّةٌ</bdi> before it: <bdi>يُوْنَعُ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — يَنَعَ (بَاب فَتَحَ)",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "يَنَعَ",
                    "يَيْنَعُ",
                    "يَنْعًا",
                    "يُنِعَ",
                    "يُوْنَعُ",
                    "اِيْنَعْ",
                    "لَا تَيْنَعْ",
                    "يَانِعٌ",
                    "مَيْنُوْعٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — يَنَعَ (بَاب فَتَحَ)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "يَنَعَ",
                    "يَيْنَعُ",
                    "يُنِعَ",
                    "يُوْنَعُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "يَنَعَا",
                    "يَيْنَعَانِ",
                    "يُنِعَا",
                    "يُوْنَعَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "يَنَعُوْا",
                    "يَيْنَعُوْنَ",
                    "يُنِعُوْا",
                    "يُوْنَعُوْنَ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "يَنَعَتْ",
                    "تَيْنَعُ",
                    "يُنِعَتْ",
                    "تُوْنَعُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "يَنَعَتَا",
                    "تَيْنَعَانِ",
                    "يُنِعَتَا",
                    "تُوْنَعَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "يَنَعْنَ",
                    "يَيْنَعْنَ",
                    "يُنِعْنَ",
                    "يُوْنَعْنَ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "يَنَعْتَ",
                    "تَيْنَعُ",
                    "يُنِعْتَ",
                    "تُوْنَعُ",
                    "اِيْنَعْ",
                    "لَا تَيْنَعْ",
                    "يَانِعٌ",
                    "مَيْنُوْعٌ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "يَنَعْتُمَا",
                    "تَيْنَعَانِ",
                    "يُنِعْتُمَا",
                    "تُوْنَعَانِ",
                    "اِيْنَعَا",
                    "لَا تَيْنَعَا",
                    "يَانِعَانِ",
                    "مَيْنُوْعَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "يَنَعْتُمْ",
                    "تَيْنَعُوْنَ",
                    "يُنِعْتُمْ",
                    "تُوْنَعُوْنَ",
                    "اِيْنَعُوْا",
                    "لَا تَيْنَعُوْا",
                    "يَانِعُوْنَ",
                    "مَيْنُوْعُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "يَنَعْتِ",
                    "تَيْنَعِيْنَ",
                    "يُنِعْتِ",
                    "تُوْنَعِيْنَ",
                    "اِيْنَعِيْ",
                    "لَا تَيْنَعِيْ",
                    "يَانِعَةٌ",
                    "مَيْنُوْعَةٌ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "يَنَعْتُمَا",
                    "تَيْنَعَانِ",
                    "يُنِعْتُمَا",
                    "تُوْنَعَانِ",
                    "اِيْنَعَا",
                    "لَا تَيْنَعَا",
                    "يَانِعَتَانِ",
                    "مَيْنُوْعَتَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "يَنَعْتُنَّ",
                    "تَيْنَعْنَ",
                    "يُنِعْتُنَّ",
                    "تُوْنَعْنَ",
                    "اِيْنَعْنَ",
                    "لَا تَيْنَعْنَ",
                    "يَانِعَاتٌ",
                    "مَيْنُوْعَاتٌ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "يَنَعْتُ",
                    "أَيْنَعُ",
                    "يُنِعْتُ",
                    "أُوْنَعُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "يَنَعْنَا",
                    "نَيْنَعُ",
                    "يُنِعْنَا",
                    "نُوْنَعُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "يَيْنَعُ is…",
            "kind": "mcq",
            "options": [
              "الْمُضَارِعُ الْمَعْلُوْمُ، الْغَائِبُ — He/It is ripening",
              "الْمُضَارِعُ الْمَجْهُوْلُ، الْغَائِبُ of يَبِسَ",
              "الْأَمْرُ، الْمُخَاطَبُ — Be ripe!",
              "اسْمُ الْفَاعِلِ of يَتَمَ — an orphan (irregular)"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 2: الْمِثَالُ الْيَائِيُّ مِنْ بَابِ سَمِعَ يَسْمَعُ",
          "lines": [
            {
              "html": "The model verb is <bdi>يَبِسَ يَيْبَسُ يَبْسًا</bdi> (to be dry). It conjugates exactly like Part 1: the <bdi>ي</bdi> remains in the <bdi>مُضَارِعُ الْمَعْلُوْمُ</bdi> (<bdi>يَيْبَسُ</bdi>), and changes into <bdi>و</bdi> in the <bdi>مُضَارِعُ الْمَجْهُوْلُ</bdi> (<bdi>يُوْبَسُ</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — يَبِسَ (بَاب سَمِعَ)",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "يَبِسَ",
                    "يَيْبَسُ",
                    "يَبْسًا",
                    "يُبِسَ",
                    "يُوْبَسُ",
                    "اِيْبَسْ",
                    "لَا تَيْبَسْ",
                    "يَابِسٌ",
                    "مَيْبُوْسٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — يَبِسَ (بَاب سَمِعَ)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "يَبِسَ",
                    "يَيْبَسُ",
                    "يُبِسَ",
                    "يُوْبَسُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "يَبِسَا",
                    "يَيْبَسَانِ",
                    "يُبِسَا",
                    "يُوْبَسَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "يَبِسُوْا",
                    "يَيْبَسُوْنَ",
                    "يُبِسُوْا",
                    "يُوْبَسُوْنَ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "يَبِسَتْ",
                    "تَيْبَسُ",
                    "يُبِسَتْ",
                    "تُوْبَسُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "يَبِسَتَا",
                    "تَيْبَسَانِ",
                    "يُبِسَتَا",
                    "تُوْبَسَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "يَبِسْنَ",
                    "يَيْبَسْنَ",
                    "يُبِسْنَ",
                    "يُوْبَسْنَ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "يَبِسْتَ",
                    "تَيْبَسُ",
                    "يُبِسْتَ",
                    "تُوْبَسُ",
                    "اِيْبَسْ",
                    "لَا تَيْبَسْ",
                    "يَابِسٌ",
                    "مَيْبُوْسٌ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "يَبِسْتُمَا",
                    "تَيْبَسَانِ",
                    "يُبِسْتُمَا",
                    "تُوْبَسَانِ",
                    "اِيْبَسَا",
                    "لَا تَيْبَسَا",
                    "يَابِسَانِ",
                    "مَيْبُوْسَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "يَبِسْتُمْ",
                    "تَيْبَسُوْنَ",
                    "يُبِسْتُمْ",
                    "تُوْبَسُوْنَ",
                    "اِيْبَسُوْا",
                    "لَا تَيْبَسُوْا",
                    "يَابِسُوْنَ",
                    "مَيْبُوْسُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "يَبِسْتِ",
                    "تَيْبَسِيْنَ",
                    "يُبِسْتِ",
                    "تُوْبَسِيْنَ",
                    "اِيْبَسِيْ",
                    "لَا تَيْبَسِيْ",
                    "يَابِسَةٌ",
                    "مَيْبُوْسَةٌ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "يَبِسْتُمَا",
                    "تَيْبَسَانِ",
                    "يُبِسْتُمَا",
                    "تُوْبَسَانِ",
                    "اِيْبَسَا",
                    "لَا تَيْبَسَا",
                    "يَابِسَتَانِ",
                    "مَيْبُوْسَتَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "يَبِسْتُنَّ",
                    "تَيْبَسْنَ",
                    "يُبِسْتُنَّ",
                    "تُوْبَسْنَ",
                    "اِيْبَسْنَ",
                    "لَا تَيْبَسْنَ",
                    "يَابِسَاتٌ",
                    "مَيْبُوْسَاتٌ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "يَبِسْتُ",
                    "أَيْبَسُ",
                    "يُبِسْتُ",
                    "أُوْبَسُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "يَبِسْنَا",
                    "نَيْبَسُ",
                    "يُبِسْنَا",
                    "نُوْبَسُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "يُوْبَسُ is…",
            "kind": "mcq",
            "options": [
              "الْمُضَارِعُ الْمَجْهُوْلُ، الْغَائِبُ of يَبِسَ",
              "الْأَمْرُ، الْمُخَاطَبُ — Be ripe!",
              "اسْمُ الْفَاعِلِ of يَتَمَ — an orphan (irregular)",
              "الْمَاضِي الْمَعْلُوْمُ، الْمُخَاطَبَاتُ — You (f/p) were dry"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 3: الْمِثَالُ الْيَائِيُّ مِنْ بَابِ ضَرَبَ يَضْرِبُ",
          "lines": [
            {
              "html": "The model verb is <bdi>يَتَمَ يَيْتِمُ يُتْمًا</bdi> (to become an orphan). The <bdi>اِسْمُ الْفَاعِلِ</bdi> and its plural are irregular: <bdi>يَتِيْمٌ</bdi> (not on the <bdi>يَانِعٌ</bdi> pattern), with the masculine plural <bdi>يَتَامَى</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>يَتَمَ</bdi> is intransitive, so the book leaves the <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi>, <bdi>الْمُضَارِعُ الْمَجْهُوْلُ</bdi> and <bdi>اسْمُ الْمَفْعُوْلِ</bdi> columns blank for this verb.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — يَتَمَ (بَاب ضَرَبَ)",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "يَتَمَ",
                    "يَيْتِمُ",
                    "يُتْمًا",
                    "—",
                    "—",
                    "اِيْتِمْ",
                    "لَا تَيْتِمْ",
                    "يَتِيْمٌ",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — يَتَمَ (بَاب ضَرَبَ)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "يَتَمَ",
                    "يَيْتِمُ",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "يَتَمَا",
                    "يَيْتِمَانِ",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "يَتَمُوْا",
                    "يَيْتِمُوْنَ",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "يَتَمَتْ",
                    "تَيْتِمُ",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "يَتَمَتَا",
                    "تَيْتِمَانِ",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "يَتَمْنَ",
                    "يَيْتِمْنَ",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "يَتَمْتَ",
                    "تَيْتِمُ",
                    "—",
                    "—",
                    "اِيْتِمْ",
                    "لَا تَيْتِمْ",
                    "يَتِيْمٌ",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "يَتَمْتُمَا",
                    "تَيْتِمَانِ",
                    "—",
                    "—",
                    "اِيْتِمَا",
                    "لَا تَيْتِمَا",
                    "يَتِيْمَانِ",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "يَتَمْتُمْ",
                    "تَيْتِمُوْنَ",
                    "—",
                    "—",
                    "اِيْتِمُوْا",
                    "لَا تَيْتِمُوْا",
                    "يَتَامَى",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "يَتَمْتِ",
                    "تَيْتِمِيْنَ",
                    "—",
                    "—",
                    "اِيْتِمِيْ",
                    "لَا تَيْتِمِيْ",
                    "يَتِيْمَةٌ",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "يَتَمْتُمَا",
                    "تَيْتِمَانِ",
                    "—",
                    "—",
                    "اِيْتِمَا",
                    "لَا تَيْتِمَا",
                    "يَتِيْمَتَانِ",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "يَتَمْتُنَّ",
                    "تَيْتِمْنَ",
                    "—",
                    "—",
                    "اِيْتِمْنَ",
                    "لَا تَيْتِمْنَ",
                    "يَتِيْمَاتٌ",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "يَتَمْتُ",
                    "أَيْتِمُ",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "يَتَمْنَا",
                    "نَيْتِمُ",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "يَتِيْمٌ is…",
            "kind": "mcq",
            "options": [
              "اسْمُ الْفَاعِلِ of يَتَمَ — an orphan (irregular)",
              "الْمَاضِي الْمَعْلُوْمُ، الْمُخَاطَبَاتُ — You (f/p) were dry",
              "النَّهْيُ، الْمُخَاطَبَةُ — Do not become an orphan (f/s)",
              "الْمَاضِي الْمَجْهُوْلُ، الْمُتَكَلِّمُوْنَ of يَنَعَ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Parts 1–3: الْمِثَالُ الْيَائِيُّ — مُجَرَّدٌ",
        "rows": [
          {
            "label": "A verb whose first root letter is ي",
            "arabic": "اَلْمِثَالُ الْيَائِيُّ",
            "meaning": "A verb whose first root letter is ي",
            "unlockAt": 0
          },
          {
            "label": "The ي remains in the مُضَارِعٌ (unlike وَعَدَ يَعِدُ)",
            "arabic": "يَنَعَ يَيْنَعُ / يَبِسَ يَيْبَسُ / يَتَمَ يَيْتِمُ",
            "meaning": "The ي remains in the مُضَارِعٌ (unlike وَعَدَ يَعِدُ)",
            "unlockAt": 1
          },
          {
            "label": "Passive مُضَارِعٌ — the ي changes into و after the ضَمَّةٌ",
            "arabic": "يُوْنَعُ / يُوْبَسُ",
            "meaning": "Passive مُضَارِعٌ — the ي changes into و after the ضَمَّةٌ",
            "unlockAt": 2
          },
          {
            "label": "The أَمْرُ keeps the ي after the hamzah",
            "arabic": "اِيْنَعْ / اِيْبَسْ / اِيْتِمْ",
            "meaning": "The أَمْرُ keeps the ي after the hamzah",
            "unlockAt": 4
          },
          {
            "label": "Irregular اسْمُ الْفَاعِلِ of يَتَمَ and its irregular plural",
            "arabic": "يَتِيْمٌ ج يَتَامَى",
            "meaning": "Irregular اسْمُ الْفَاعِلِ of يَتَمَ and its irregular plural",
            "unlockAt": 5
          }
        ]
      },
      "quiz": [
        {
          "q": "What is الْمِثَالُ الْيَائِيُّ?",
          "options": [
            "A verb whose first root letter is و",
            "A verb whose first root letter is ي",
            "A verb whose last root letter is ي",
            "A verb whose middle root letter is ي"
          ],
          "correct": 1,
          "explanation": "الْمِثَالُ الْيَائِيُّ is the مِثَالٌ verb beginning with ي, e.g. يَنَعَ، يَبِسَ، يَتَمَ. The one beginning with و is الْمِثَالُ الْوَاوِيُّ."
        },
        {
          "q": "What happens to the ي in the مُضَارِعُ الْمَعْلُوْمُ of the مُجَرَّدٌ abwab, e.g. يَنَعَ؟",
          "options": [
            "It is dropped, like the و of وَعَدَ يَعِدُ",
            "It changes into و",
            "It remains: يَيْنَعُ",
            "It changes into أَلِفٌ"
          ],
          "correct": 2,
          "explanation": "Unlike الْمِثَالُ الْوَاوِيُّ (وَعَدَ يَعِدُ), the ي remains in the مُضَارِعٌ: يَنَعَ يَيْنَعُ، يَبِسَ يَيْبَسُ، يَتَمَ يَيْتِمُ."
        },
        {
          "q": "Why is the الْمُضَارِعُ الْمَجْهُوْلُ of يَنَعَ written يُوْنَعُ and not يُيْنَعُ؟",
          "options": [
            "The ي changes into و because of the ضَمَّةٌ before it",
            "The ن changes into و",
            "The verb became doubly transitive",
            "The و is the passive prefix"
          ],
          "correct": 0,
          "explanation": "A sakin ي after a ضَمَّةٌ changes into و: يُيْنَعُ becomes يُوْنَعُ. The same happens in يُوْبَسُ from يَبِسَ."
        },
        {
          "q": "What is irregular in Part 3 (يَتَمَ from بَاب ضَرَبَ)?",
          "options": [
            "The مَصْدَرٌ and the أَمْرُ",
            "The اسْمُ الْفَاعِلِ (يَتِيْمٌ) and its plural (يَتَامَى)",
            "The مَاضِيْ conjugation",
            "The نَهْيٌ forms"
          ],
          "correct": 1,
          "explanation": "The اِسْمُ الْفَاعِلِ and its plural are irregular: يَتِيْمٌ instead of the يَانِعٌ pattern, with the plural يَتَامَى."
        },
        {
          "q": "Which columns are left blank in the tables of يَتَمَ؟",
          "options": [
            "الْأَمْرُ and النَّهْيُ",
            "اسْمُ الْفَاعِلِ and اسْمُ الْمَفْعُوْلِ",
            "الْمَاضِي الْمَجْهُوْلُ، الْمُضَارِعُ الْمَجْهُوْلُ and اسْمُ الْمَفْعُوْلِ",
            "الْمُضَارِعُ الْمَعْلُوْمُ and الْمَصْدَرُ"
          ],
          "correct": 2,
          "explanation": "يَتَمَ is intransitive, so it has no passive forms and no اسْمُ الْمَفْعُوْلِ — those columns are blank."
        },
        {
          "q": "What is the أَمْرُ (You m/s) of يَبِسَ يَيْبَسُ؟",
          "options": [
            "اِيْبَسْ",
            "اُوْبَسْ",
            "يَبِّسْ",
            "اِبْيَسْ"
          ],
          "correct": 0,
          "explanation": "Drop the مضارع prefix from تَيْبَسُ and add hamzat al-wasl with a kasrah: اِيْبَسْ. Compare اِيْنَعْ and اِيْتِمْ."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the الْمُضَارِعُ الْمَعْلُوْمُ of يَئِسَ (to give up hope)?",
          "options": [
            "يَيْأَسُ",
            "يَأْيَسُ",
            "يُوْئَسُ",
            "يَئِسُ"
          ],
          "correct": 0,
          "explanation": "يَئِسَ is from بَاب سَمِعَ like يَبِسَ: the ي remains — يَئِسَ يَيْأَسُ يَأْسًا."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the اسْمُ الْمَفْعُوْلِ of يَنَعَ؟",
          "options": [
            "مَيْنُوْعٌ",
            "مَوْنُوْعٌ",
            "يَانِعٌ",
            "مُيْنَعٌ"
          ],
          "correct": 0,
          "explanation": "On the مَفْعُوْلٌ pattern with the root ي kept: مَيْنُوْعٌ. يَانِعٌ is the اسم الفاعل."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "'Do not be dry' said to one female (النَّهْيُ، الْمُخَاطَبَةُ) is…",
          "options": [
            "لَا تَيْبَسِيْ",
            "لَا تَيْبَسْ",
            "لَا تُوْبَسِيْ",
            "لَا تَيْبَسْنَ"
          ],
          "correct": 0,
          "explanation": "النهي of يَبِسَ for الْمُخَاطَبَةُ takes the feminine ending يْ: لَا تَيْبَسِيْ. لَا تَيْبَسْنَ is for الْمُخَاطَبَاتُ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The plural of يَتِيْمٌ is…",
          "options": [
            "يَتَامَى",
            "يَتِيْمُوْنَ",
            "مَيَاتِيْمُ",
            "يُتُمٌ"
          ],
          "correct": 0,
          "explanation": "The اسم الفاعل of يَتَمَ and its plural are irregular: يَتِيْمٌ ج يَتَامَى (the conjugation table shows يَتَامَى in the plural row)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the الْمَاضِي الْمَجْهُوْلُ (He) of يَبِسَ؟",
          "options": [
            "يُبِسَ",
            "يُوْبِسَ",
            "أُوْبِسَ",
            "يَبَسَ"
          ],
          "correct": 0,
          "explanation": "The passive ماضي is on the فُعِلَ pattern: يُبِسَ. Compare يُنِعَ from يَنَعَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "'I ripen' — the الْمُتَكَلِّمُ of the مُضَارِعُ الْمَعْلُوْمُ of يَنَعَ — is…",
          "options": [
            "أَيْنَعُ",
            "أُوْنَعُ",
            "نَيْنَعُ",
            "يَيْنَعُ"
          ],
          "correct": 0,
          "explanation": "The متكلم prefix أ + the stem with the ي retained: أَيْنَعُ. أُوْنَعُ is its passive, and نَيْنَعُ is 'we'."
        },
        {
          "title": "Book Exercise 2 (p. 162)",
          "kind": "mcq",
          "prompt": "يَبْسًا: الْمُخَاطَبَةُ مِنَ الْمَاضِي الْمَعْلُوْمِ is…",
          "options": [
            "يَبِسْتِ",
            "يَبِسْتَ",
            "يَبِسَتْ",
            "تَيْبَسِيْنَ"
          ],
          "correct": 0,
          "explanation": "The مصدر يَبْسًا belongs to يَبِسَ; the ماضي for You (f/s) takes تِ: يَبِسْتِ. يَبِسَتْ is 'she was dry'."
        },
        {
          "title": "Book Exercise 2 (p. 162)",
          "kind": "mcq",
          "prompt": "يَنْعًا: الْمُتَكَلِّمُوْنَ مِنَ الْمَاضِي الْمَجْهُوْلِ is…",
          "options": [
            "يُنِعْنَا",
            "يَنَعْنَا",
            "نُوْنَعُ",
            "يُنِعْنَ"
          ],
          "correct": 0,
          "explanation": "يَنْعًا belongs to يَنَعَ; passive ماضي يُنِعَ + the pronoun نَا = يُنِعْنَا. نُوْنَعُ is the passive مضارع."
        },
        {
          "title": "Book Exercise 2 (p. 162)",
          "kind": "mcq",
          "prompt": "يَنْعًا: الْمُثَنَّاةُ مِنَ اسْمِ الْمَفْعُوْلِ is…",
          "options": [
            "مَيْنُوْعَتَانِ",
            "مَيْنُوْعَانِ",
            "يَانِعَتَانِ",
            "مَيْنُوْعَاتٌ"
          ],
          "correct": 0,
          "explanation": "The feminine dual of مَيْنُوْعٌ is مَيْنُوْعَتَانِ. مَيْنُوْعَانِ is the masculine dual and يَانِعَتَانِ is from the اسم الفاعل."
        },
        {
          "title": "Book Exercise 2 (p. 162)",
          "kind": "mcq",
          "prompt": "يَبْسًا: جَمْعُ الْمُؤَنَّثِ مِنَ اسْمِ الْمَفْعُوْلِ is…",
          "options": [
            "مَيْبُوْسَاتٌ",
            "مَيْبُوْسُوْنَ",
            "يَابِسَاتٌ",
            "مَيْبُوْسَتَانِ"
          ],
          "correct": 0,
          "explanation": "The feminine plural of مَيْبُوْسٌ is مَيْبُوْسَاتٌ. يَابِسَاتٌ is the feminine plural of the اسم الفاعل."
        },
        {
          "title": "Book Exercise 3 (p. 162)",
          "kind": "mcq",
          "prompt": "In ﴿وَلَا رَطْبٍ وَلَا يَابِسٍ﴾, the word يَابِسٍ is…",
          "options": [
            "اسْمُ الْفَاعِلِ of يَبِسَ — 'dry'",
            "اسْمُ الْمَفْعُوْلِ of يَبِسَ — 'dried'",
            "الْمَاضِيْ of يَبِسَ — 'it was dry'",
            "الْمَصْدَرُ of يَبِسَ — 'dryness'"
          ],
          "correct": 0,
          "explanation": "يَابِسٌ is the اسم الفاعل of يَبِسَ يَيْبَسُ (to be dry): 'dry / that which is dry'."
        },
        {
          "title": "Book Exercise 3 (p. 162)",
          "kind": "mcq",
          "prompt": "In ﴿وَجِلَتْ قُلُوْبُهُمْ﴾, the word وَجِلَتْ is…",
          "options": [
            "الْمَاضِي الْمَعْلُوْمُ، الْغَائِبَةُ of وَجِلَ — '(their hearts) feared'",
            "الْمُضَارِعُ، الْغَائِبَةُ of وَجِلَ",
            "الْمَاضِي الْمَجْهُوْلُ of وَجِلَ",
            "الْمَاضِيْ، الْمُخَاطَبَةُ of وَجِلَ"
          ],
          "correct": 0,
          "explanation": "وَجِلَ يَوْجَلُ (a مِثَالٌ وَاوِيٌّ from بَاب سَمِعَ, revised from Section 1): وَجِلَتْ is the غائبة ماضي — 'it (she) feared'."
        },
        {
          "title": "Book Exercise 3 (p. 162)",
          "kind": "mcq",
          "prompt": "﴿لَا تَوْجَلْ﴾ is which صِيْغَةٌ, and what does it mean?",
          "options": [
            "النَّهْيُ، الْمُخَاطَبُ — 'Do not fear'",
            "الْأَمْرُ، الْمُخَاطَبُ — 'Fear!'",
            "النَّهْيُ، الْمُخَاطَبَةُ — 'Do not fear (f/s)'",
            "الْمُضَارِعُ الْمَجْهُوْلُ — 'he is feared'"
          ],
          "correct": 0,
          "explanation": "لَا + تَوْجَلْ is the نهي of وَجِلَ يَوْجَلُ for the مخاطب: 'Do not fear'. The و of the مثال واوي from بَاب سَمِعَ remains in the مضارع."
        },
        {
          "title": "Book Exercise 3 (p. 162)",
          "kind": "mcq",
          "prompt": "﴿وَلَا تَهِنُوْا﴾ is which صِيْغَةٌ, and what does it mean?",
          "options": [
            "النَّهْيُ، الْمُخَاطَبُوْنَ of وَهَنَ — 'Do not lose heart'",
            "الْأَمْرُ، الْمُخَاطَبُوْنَ of وَهَنَ — 'Be weak!'",
            "النَّهْيُ، الْمُخَاطَبُ of وَهَنَ — 'Do not lose heart (m/s)'",
            "الْمُضَارِعُ، الْغَائِبُوْنَ of وَهَنَ"
          ],
          "correct": 0,
          "explanation": "وَهَنَ يَهِنُ drops its و in the مضارع (like وَعَدَ يَعِدُ); the نهي for the مخاطبون is لَا تَهِنُوْا — 'Do not weaken / lose heart'."
        },
        {
          "title": "to reach adolescence",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reach adolescence\"?",
          "options": [
            "يَفَعَ يَيْفَعُ",
            "يَنَعَ يَيْنَعُ",
            "يَقِظَ يَيْقَظُ",
            "يَقِنَ يَيْقَنُ"
          ],
          "correct": 0
        },
        {
          "title": "to reach adolescence",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَفَعَ يَيْفَعُ mean?",
          "options": [
            "to reach adolescence",
            "to be ripe",
            "to be alert",
            "to be sure"
          ],
          "correct": 0
        },
        {
          "title": "to reach adolescence (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَفَعَ يَيْفَعُ?",
          "options": [
            "يَفْعًا",
            "يَنْعًا",
            "يَقَظًا",
            "يَقْنًا"
          ],
          "correct": 0
        },
        {
          "title": "to be ripe",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be ripe\"?",
          "options": [
            "يَنَعَ يَيْنَعُ",
            "يَقِظَ يَيْقَظُ",
            "يَقِنَ يَيْقَنُ",
            "يَئِسَ يَيْأَسُ"
          ],
          "correct": 0
        },
        {
          "title": "to be ripe",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَنَعَ يَيْنَعُ mean?",
          "options": [
            "to be ripe",
            "to be alert",
            "to be sure",
            "to give up hope"
          ],
          "correct": 0
        },
        {
          "title": "to be ripe (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَنَعَ يَيْنَعُ?",
          "options": [
            "يَنْعًا",
            "يَقَظًا",
            "يَقْنًا",
            "يَأْسًا"
          ],
          "correct": 0
        },
        {
          "title": "to be alert",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be alert\"?",
          "options": [
            "يَقِظَ يَيْقَظُ",
            "يَقِنَ يَيْقَنُ",
            "يَئِسَ يَيْأَسُ",
            "يَبِسَ يَيْبَسُ"
          ],
          "correct": 0
        },
        {
          "title": "to be alert",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَقِظَ يَيْقَظُ mean?",
          "options": [
            "to be alert",
            "to be sure",
            "to give up hope",
            "to be dry"
          ],
          "correct": 0
        },
        {
          "title": "to be alert (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَقِظَ يَيْقَظُ?",
          "options": [
            "يَقَظًا",
            "يَقْنًا",
            "يَأْسًا",
            "يَبْسًا"
          ],
          "correct": 0
        },
        {
          "title": "to be sure",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be sure\"?",
          "options": [
            "يَقِنَ يَيْقَنُ",
            "يَئِسَ يَيْأَسُ",
            "يَبِسَ يَيْبَسُ",
            "يَتَمَ يَيْتِمُ"
          ],
          "correct": 0
        },
        {
          "title": "to be sure",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَقِنَ يَيْقَنُ mean?",
          "options": [
            "to be sure",
            "to give up hope",
            "to be dry",
            "to become an orphan"
          ],
          "correct": 0
        },
        {
          "title": "to be sure (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَقِنَ يَيْقَنُ?",
          "options": [
            "يَقْنًا",
            "يَأْسًا",
            "يَبْسًا",
            "يُتْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give up hope\"?",
          "options": [
            "يَئِسَ يَيْأَسُ",
            "يَبِسَ يَيْبَسُ",
            "يَتَمَ يَيْتِمُ",
            "يَسَرَ يَيْسِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَئِسَ يَيْأَسُ mean?",
          "options": [
            "to give up hope",
            "to be dry",
            "to become an orphan",
            "to be easy"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَئِسَ يَيْأَسُ?",
          "options": [
            "يَأْسًا",
            "يَبْسًا",
            "يُتْمًا",
            "مَيْسِرًا"
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
            "يَتَمَ يَيْتِمُ",
            "يَسَرَ يَيْسِرُ",
            "يَفَعَ يَيْفَعُ"
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
            "to become an orphan",
            "to be easy",
            "to reach adolescence"
          ],
          "correct": 0
        },
        {
          "title": "to be dry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَبِسَ يَيْبَسُ?",
          "options": [
            "يَبْسًا",
            "يُتْمًا",
            "مَيْسِرًا",
            "يَفْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to become an orphan",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to become an orphan\"?",
          "options": [
            "يَتَمَ يَيْتِمُ",
            "يَسَرَ يَيْسِرُ",
            "يَفَعَ يَيْفَعُ",
            "يَنَعَ يَيْنَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to become an orphan",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَتَمَ يَيْتِمُ mean?",
          "options": [
            "to become an orphan",
            "to be easy",
            "to reach adolescence",
            "to be ripe"
          ],
          "correct": 0
        },
        {
          "title": "to become an orphan (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَتَمَ يَيْتِمُ?",
          "options": [
            "يُتْمًا",
            "مَيْسِرًا",
            "يَفْعًا",
            "يَنْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to be easy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be easy\"?",
          "options": [
            "يَسَرَ يَيْسِرُ",
            "يَفَعَ يَيْفَعُ",
            "يَنَعَ يَيْنَعُ",
            "يَقِظَ يَيْقَظُ"
          ],
          "correct": 0
        },
        {
          "title": "to be easy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَسَرَ يَيْسِرُ mean?",
          "options": [
            "to be easy",
            "to reach adolescence",
            "to be ripe",
            "to be alert"
          ],
          "correct": 0
        },
        {
          "title": "to be easy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَسَرَ يَيْسِرُ?",
          "options": [
            "مَيْسِرًا",
            "يَفْعًا",
            "يَنْعًا",
            "يَقَظًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l2",
      "title": "الْمَزِيْدُ فِيْهِ",
      "subtitle": "The مِثَالٌ يَائِيٌّ from the مَزِيْدٌ فِيْهِ أَبْوَاب (Parts 4–10): تَفْعِيْل، مُفَاعَلَة، إِفْعَال، تَفَعُّل، تَفَاعُل، افْتِعَال and اسْتِفْعَال",
      "concepts": [
        {
          "heading": "Part 4 (II): الْمِثَالُ الْيَائِيُّ مِنْ بَابِ تَفْعِيْل",
          "lines": [
            {
              "html": "The model verb is <bdi>يَسَّرَ يُيَسِّرُ تَيْسِيْرًا</bdi> (to make easy). In <bdi>بَاب تَفْعِيْل</bdi> the <bdi>ي</bdi> behaves like a sound letter throughout — it carries a <bdi>حَرَكَةٌ</bdi>, so no change takes place.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — يَسَّرَ (بَاب تَفْعِيْل)",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "يَسَّرَ",
                    "يُيَسِّرُ",
                    "تَيْسِيْرًا",
                    "يُسِّرَ",
                    "يُيَسَّرُ",
                    "يَسِّرْ",
                    "لَا تُيَسِّرْ",
                    "مُيَسِّرٌ",
                    "مُيَسَّرٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — يَسَّرَ (بَاب تَفْعِيْل)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "يَسَّرَ",
                    "يُيَسِّرُ",
                    "يُسِّرَ",
                    "يُيَسَّرُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "يَسَّرَا",
                    "يُيَسِّرَانِ",
                    "يُسِّرَا",
                    "يُيَسَّرَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "يَسَّرُوْا",
                    "يُيَسِّرُوْنَ",
                    "يُسِّرُوْا",
                    "يُيَسَّرُوْنَ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "يَسَّرَتْ",
                    "تُيَسِّرُ",
                    "يُسِّرَتْ",
                    "تُيَسَّرُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "يَسَّرَتَا",
                    "تُيَسِّرَانِ",
                    "يُسِّرَتَا",
                    "تُيَسَّرَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "يَسَّرْنَ",
                    "يُيَسِّرْنَ",
                    "يُسِّرْنَ",
                    "يُيَسَّرْنَ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "يَسَّرْتَ",
                    "تُيَسِّرُ",
                    "يُسِّرْتَ",
                    "تُيَسَّرُ",
                    "يَسِّرْ",
                    "لَا تُيَسِّرْ",
                    "مُيَسِّرٌ",
                    "مُيَسَّرٌ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "يَسَّرْتُمَا",
                    "تُيَسِّرَانِ",
                    "يُسِّرْتُمَا",
                    "تُيَسَّرَانِ",
                    "يَسِّرَا",
                    "لَا تُيَسِّرَا",
                    "مُيَسِّرَانِ",
                    "مُيَسَّرَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "يَسَّرْتُمْ",
                    "تُيَسِّرُوْنَ",
                    "يُسِّرْتُمْ",
                    "تُيَسَّرُوْنَ",
                    "يَسِّرُوْا",
                    "لَا تُيَسِّرُوْا",
                    "مُيَسِّرُوْنَ",
                    "مُيَسَّرُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "يَسَّرْتِ",
                    "تُيَسِّرِيْنَ",
                    "يُسِّرْتِ",
                    "تُيَسَّرِيْنَ",
                    "يَسِّرِيْ",
                    "لَا تُيَسِّرِيْ",
                    "مُيَسِّرَةٌ",
                    "مُيَسَّرَةٌ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "يَسَّرْتُمَا",
                    "تُيَسِّرَانِ",
                    "يُسِّرْتُمَا",
                    "تُيَسَّرَانِ",
                    "يَسِّرَا",
                    "لَا تُيَسِّرَا",
                    "مُيَسِّرَتَانِ",
                    "مُيَسَّرَتَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "يَسَّرْتُنَّ",
                    "تُيَسِّرْنَ",
                    "يُسِّرْتُنَّ",
                    "تُيَسَّرْنَ",
                    "يَسِّرْنَ",
                    "لَا تُيَسِّرْنَ",
                    "مُيَسِّرَاتٌ",
                    "مُيَسَّرَاتٌ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "يَسَّرْتُ",
                    "أُيَسِّرُ",
                    "يُسِّرْتُ",
                    "أُيَسَّرُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "يَسَّرْنَا",
                    "نُيَسِّرُ",
                    "يُسِّرْنَا",
                    "نُيَسَّرُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "مُيَسَّرٌ is…",
            "kind": "mcq",
            "options": [
              "اسْمُ الْمَفْعُوْلِ of يَسَّرَ (بَاب تَفْعِيْل) — made easy",
              "الْمُضَارِعُ الْمَعْلُوْمُ of أَيْقَنَ (بَاب إِفْعَال) — He is convinced",
              "الْمَاضِي الْمَجْهُوْلُ of اِسْتَيْقَنَ (بَاب اسْتِفْعَال)",
              "الْمَاضِي الْمَجْهُوْلُ of يَاسَرَ (بَاب مُفَاعَلَة)"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 5 (III): الْمِثَالُ الْيَائِيُّ مِنْ بَابِ مُفَاعَلَة",
          "lines": [
            {
              "html": "The model verb is <bdi>يَاسَرَ يُيَاسِرُ مُيَاسَرَةً</bdi> (to deal with ease). In the <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi> the <bdi>أَلِفٌ</bdi> of the pattern changes into <bdi>و</bdi>: <bdi>يُوْسِرَ</bdi> (on the <bdi>فُوْعِلَ</bdi> pattern).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — يَاسَرَ (بَاب مُفَاعَلَة)",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "يَاسَرَ",
                    "يُيَاسِرُ",
                    "مُيَاسَرَةً",
                    "يُوْسِرَ",
                    "يُيَاسَرُ",
                    "يَاسِرْ",
                    "لَا تُيَاسِرْ",
                    "مُيَاسِرٌ",
                    "مُيَاسَرٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — يَاسَرَ (بَاب مُفَاعَلَة)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "يَاسَرَ",
                    "يُيَاسِرُ",
                    "يُوْسِرَ",
                    "يُيَاسَرُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "يَاسَرَا",
                    "يُيَاسِرَانِ",
                    "يُوْسِرَا",
                    "يُيَاسَرَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "يَاسَرُوْا",
                    "يُيَاسِرُوْنَ",
                    "يُوْسِرُوْا",
                    "يُيَاسَرُوْنَ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "يَاسَرَتْ",
                    "تُيَاسِرُ",
                    "يُوْسِرَتْ",
                    "تُيَاسَرُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "يَاسَرَتَا",
                    "تُيَاسِرَانِ",
                    "يُوْسِرَتَا",
                    "تُيَاسَرَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "يَاسَرْنَ",
                    "يُيَاسِرْنَ",
                    "يُوْسِرْنَ",
                    "يُيَاسَرْنَ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "يَاسَرْتَ",
                    "تُيَاسِرُ",
                    "يُوْسِرْتَ",
                    "تُيَاسَرُ",
                    "يَاسِرْ",
                    "لَا تُيَاسِرْ",
                    "مُيَاسِرٌ",
                    "مُيَاسَرٌ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "يَاسَرْتُمَا",
                    "تُيَاسِرَانِ",
                    "يُوْسِرْتُمَا",
                    "تُيَاسَرَانِ",
                    "يَاسِرَا",
                    "لَا تُيَاسِرَا",
                    "مُيَاسِرَانِ",
                    "مُيَاسَرَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "يَاسَرْتُمْ",
                    "تُيَاسِرُوْنَ",
                    "يُوْسِرْتُمْ",
                    "تُيَاسَرُوْنَ",
                    "يَاسِرُوْا",
                    "لَا تُيَاسِرُوْا",
                    "مُيَاسِرُوْنَ",
                    "مُيَاسَرُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "يَاسَرْتِ",
                    "تُيَاسِرِيْنَ",
                    "يُوْسِرْتِ",
                    "تُيَاسَرِيْنَ",
                    "يَاسِرِيْ",
                    "لَا تُيَاسِرِيْ",
                    "مُيَاسِرَةٌ",
                    "مُيَاسَرَةٌ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "يَاسَرْتُمَا",
                    "تُيَاسِرَانِ",
                    "يُوْسِرْتُمَا",
                    "تُيَاسَرَانِ",
                    "يَاسِرَا",
                    "لَا تُيَاسِرَا",
                    "مُيَاسِرَتَانِ",
                    "مُيَاسَرَتَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "يَاسَرْتُنَّ",
                    "تُيَاسِرْنَ",
                    "يُوْسِرْتُنَّ",
                    "تُيَاسَرْنَ",
                    "يَاسِرْنَ",
                    "لَا تُيَاسِرْنَ",
                    "مُيَاسِرَاتٌ",
                    "مُيَاسَرَاتٌ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "يَاسَرْتُ",
                    "أُيَاسِرُ",
                    "يُوْسِرْتُ",
                    "أُيَاسَرُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "يَاسَرْنَا",
                    "نُيَاسِرُ",
                    "يُوْسِرْنَا",
                    "نُيَاسَرُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "يُوْسِرَ is…",
            "kind": "mcq",
            "options": [
              "الْمَاضِي الْمَجْهُوْلُ of يَاسَرَ (بَاب مُفَاعَلَة)",
              "الْمَاضِي الْمَعْلُوْمُ of بَاب افْتِعَال — originally اِيْتَسَرَ",
              "الْأَمْرُ، الْمُخَاطَبُ of تَيَسَّرَ (بَاب تَفَعُّل)",
              "الْمَاضِي الْمَجْهُوْلُ of تَيَامَنَ (بَاب تَفَاعُل)"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 6 (IV): الْمِثَالُ الْيَائِيُّ مِنْ بَابِ إِفْعَال",
          "lines": [
            {
              "html": "The model verb is <bdi>أَيْقَنَ يُوْقِنُ إِيْقَانًا</bdi> (to be convinced). In the <bdi>مُضَارِعٌ</bdi> the sakin <bdi>ي</bdi> falls after a <bdi>ضَمَّةٌ</bdi> and so changes into <bdi>و</bdi>: <bdi>يُيْقِنُ</bdi> becomes <bdi>يُوْقِنُ</bdi>. The same change appears in the <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi> (<bdi>أُوْقِنَ</bdi>), the <bdi>الْمُضَارِعُ الْمَجْهُوْلُ</bdi> (<bdi>يُوْقَنُ</bdi>), the <bdi>النَّهْيُ</bdi> (<bdi>لَا تُوْقِنْ</bdi>), the <bdi>اسْمُ الْفَاعِلِ</bdi> (<bdi>مُوْقِنٌ</bdi>) and the <bdi>اسْمُ الْمَفْعُوْلِ</bdi> (<bdi>مُوْقَنٌ</bdi>). After a <bdi>كَسْرَةٌ</bdi> or <bdi>فَتْحَةٌ</bdi> the <bdi>ي</bdi> remains, as in the <bdi>مَصْدَرٌ إِيْقَانًا</bdi>, the <bdi>مَاضِيْ أَيْقَنَ</bdi> and the <bdi>أَمْرُ أَيْقِنْ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — أَيْقَنَ (بَاب إِفْعَال)",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "أَيْقَنَ",
                    "يُوْقِنُ",
                    "إِيْقَانًا",
                    "أُوْقِنَ",
                    "يُوْقَنُ",
                    "أَيْقِنْ",
                    "لَا تُوْقِنْ",
                    "مُوْقِنٌ",
                    "مُوْقَنٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — أَيْقَنَ (بَاب إِفْعَال)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "أَيْقَنَ",
                    "يُوْقِنُ",
                    "أُوْقِنَ",
                    "يُوْقَنُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "أَيْقَنَا",
                    "يُوْقِنَانِ",
                    "أُوْقِنَا",
                    "يُوْقَنَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "أَيْقَنُوْا",
                    "يُوْقِنُوْنَ",
                    "أُوْقِنُوْا",
                    "يُوْقَنُوْنَ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "أَيْقَنَتْ",
                    "تُوْقِنُ",
                    "أُوْقِنَتْ",
                    "تُوْقَنُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "أَيْقَنَتَا",
                    "تُوْقِنَانِ",
                    "أُوْقِنَتَا",
                    "تُوْقَنَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "أَيْقَنَّ",
                    "يُوْقِنَّ",
                    "أُوْقِنَّ",
                    "يُوْقَنَّ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "أَيْقَنْتَ",
                    "تُوْقِنُ",
                    "أُوْقِنْتَ",
                    "تُوْقَنُ",
                    "أَيْقِنْ",
                    "لَا تُوْقِنْ",
                    "مُوْقِنٌ",
                    "مُوْقَنٌ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "أَيْقَنْتُمَا",
                    "تُوْقِنَانِ",
                    "أُوْقِنْتُمَا",
                    "تُوْقَنَانِ",
                    "أَيْقِنَا",
                    "لَا تُوْقِنَا",
                    "مُوْقِنَانِ",
                    "مُوْقَنَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "أَيْقَنْتُمْ",
                    "تُوْقِنُوْنَ",
                    "أُوْقِنْتُمْ",
                    "تُوْقَنُوْنَ",
                    "أَيْقِنُوْا",
                    "لَا تُوْقِنُوْا",
                    "مُوْقِنُوْنَ",
                    "مُوْقَنُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "أَيْقَنْتِ",
                    "تُوْقِنِيْنَ",
                    "أُوْقِنْتِ",
                    "تُوْقَنِيْنَ",
                    "أَيْقِنِيْ",
                    "لَا تُوْقِنِيْ",
                    "مُوْقِنَةٌ",
                    "مُوْقَنَةٌ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "أَيْقَنْتُمَا",
                    "تُوْقِنَانِ",
                    "أُوْقِنْتُمَا",
                    "تُوْقَنَانِ",
                    "أَيْقِنَا",
                    "لَا تُوْقِنَا",
                    "مُوْقِنَتَانِ",
                    "مُوْقَنَتَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "أَيْقَنْتُنَّ",
                    "تُوْقِنَّ",
                    "أُوْقِنْتُنَّ",
                    "تُوْقَنَّ",
                    "أَيْقِنَّ",
                    "لَا تُوْقِنَّ",
                    "مُوْقِنَاتٌ",
                    "مُوْقَنَاتٌ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أَيْقَنْتُ",
                    "أُوْقِنُ",
                    "أُوْقِنْتُ",
                    "أُوْقَنُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "أَيْقَنَّا",
                    "نُوْقِنُ",
                    "أُوْقِنَّا",
                    "نُوْقَنُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "يُوْقِنُ is…",
            "kind": "mcq",
            "options": [
              "الْمُضَارِعُ الْمَعْلُوْمُ of أَيْقَنَ (بَاب إِفْعَال) — He is convinced",
              "الْمَاضِي الْمَجْهُوْلُ of اِسْتَيْقَنَ (بَاب اسْتِفْعَال)",
              "الْمَاضِي الْمَجْهُوْلُ of يَاسَرَ (بَاب مُفَاعَلَة)",
              "الْمَاضِي الْمَعْلُوْمُ of بَاب افْتِعَال — originally اِيْتَسَرَ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 7 (V): الْمِثَالُ الْيَائِيُّ مِنْ بَابِ تَفَعُّل",
          "lines": [
            {
              "html": "The model verb is <bdi>تَيَسَّرَ يَتَيَسَّرُ تَيَسُّرًا</bdi> (to be easy). The <bdi>ي</bdi> carries a <bdi>حَرَكَةٌ</bdi> throughout, so it behaves like a sound letter — note the passive <bdi>ماضي تُيُسِّرَ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — تَيَسَّرَ (بَاب تَفَعُّل)",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "تَيَسَّرَ",
                    "يَتَيَسَّرُ",
                    "تَيَسُّرًا",
                    "تُيُسِّرَ",
                    "يُتَيَسَّرُ",
                    "تَيَسَّرْ",
                    "لَا تَتَيَسَّرْ",
                    "مُتَيَسِّرٌ",
                    "مُتَيَسَّرٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — تَيَسَّرَ (بَاب تَفَعُّل)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "تَيَسَّرَ",
                    "يَتَيَسَّرُ",
                    "تُيُسِّرَ",
                    "يُتَيَسَّرُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "تَيَسَّرَا",
                    "يَتَيَسَّرَانِ",
                    "تُيُسِّرَا",
                    "يُتَيَسَّرَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "تَيَسَّرُوْا",
                    "يَتَيَسَّرُوْنَ",
                    "تُيُسِّرُوْا",
                    "يُتَيَسَّرُوْنَ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "تَيَسَّرَتْ",
                    "تَتَيَسَّرُ",
                    "تُيُسِّرَتْ",
                    "تُتَيَسَّرُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "تَيَسَّرَتَا",
                    "تَتَيَسَّرَانِ",
                    "تُيُسِّرَتَا",
                    "تُتَيَسَّرَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "تَيَسَّرْنَ",
                    "يَتَيَسَّرْنَ",
                    "تُيُسِّرْنَ",
                    "يُتَيَسَّرْنَ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "تَيَسَّرْتَ",
                    "تَتَيَسَّرُ",
                    "تُيُسِّرْتَ",
                    "تُتَيَسَّرُ",
                    "تَيَسَّرْ",
                    "لَا تَتَيَسَّرْ",
                    "مُتَيَسِّرٌ",
                    "مُتَيَسَّرٌ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَيَسَّرْتُمَا",
                    "تَتَيَسَّرَانِ",
                    "تُيُسِّرْتُمَا",
                    "تُتَيَسَّرَانِ",
                    "تَيَسَّرَا",
                    "لَا تَتَيَسَّرَا",
                    "مُتَيَسِّرَانِ",
                    "مُتَيَسَّرَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَيَسَّرْتُمْ",
                    "تَتَيَسَّرُوْنَ",
                    "تُيُسِّرْتُمْ",
                    "تُتَيَسَّرُوْنَ",
                    "تَيَسَّرُوْا",
                    "لَا تَتَيَسَّرُوْا",
                    "مُتَيَسِّرُوْنَ",
                    "مُتَيَسَّرُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَيَسَّرْتِ",
                    "تَتَيَسَّرِيْنَ",
                    "تُيُسِّرْتِ",
                    "تُتَيَسَّرِيْنَ",
                    "تَيَسَّرِيْ",
                    "لَا تَتَيَسَّرِيْ",
                    "مُتَيَسِّرَةٌ",
                    "مُتَيَسَّرَةٌ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَيَسَّرْتُمَا",
                    "تَتَيَسَّرَانِ",
                    "تُيُسِّرْتُمَا",
                    "تُتَيَسَّرَانِ",
                    "تَيَسَّرَا",
                    "لَا تَتَيَسَّرَا",
                    "مُتَيَسِّرَتَانِ",
                    "مُتَيَسَّرَتَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَيَسَّرْتُنَّ",
                    "تَتَيَسَّرْنَ",
                    "تُيُسِّرْتُنَّ",
                    "تُتَيَسَّرْنَ",
                    "تَيَسَّرْنَ",
                    "لَا تَتَيَسَّرْنَ",
                    "مُتَيَسِّرَاتٌ",
                    "مُتَيَسَّرَاتٌ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "تَيَسَّرْتُ",
                    "أَتَيَسَّرُ",
                    "تُيُسِّرْتُ",
                    "أُتَيَسَّرُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "تَيَسَّرْنَا",
                    "نَتَيَسَّرُ",
                    "تُيُسِّرْنَا",
                    "نُتَيَسَّرُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "تَيَسَّرْ is…",
            "kind": "mcq",
            "options": [
              "الْأَمْرُ، الْمُخَاطَبُ of تَيَسَّرَ (بَاب تَفَعُّل)",
              "الْمَاضِي الْمَجْهُوْلُ of تَيَامَنَ (بَاب تَفَاعُل)",
              "اسْمُ الْمَفْعُوْلِ of يَسَّرَ (بَاب تَفْعِيْل) — made easy",
              "الْمُضَارِعُ الْمَعْلُوْمُ of أَيْقَنَ (بَاب إِفْعَال) — He is convinced"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 8 (VI): الْمِثَالُ الْيَائِيُّ مِنْ بَابِ تَفَاعُل",
          "lines": [
            {
              "html": "The model verb is <bdi>تَيَامَنَ يَتَيَامَنُ تَيَامُنًا</bdi> (to start from the right). In the <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi> the <bdi>أَلِفٌ</bdi> changes into <bdi>و</bdi>: <bdi>تُيُوْمِنَ</bdi> (on the <bdi>تُفُوْعِلَ</bdi> pattern).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — تَيَامَنَ (بَاب تَفَاعُل)",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "تَيَامَنَ",
                    "يَتَيَامَنُ",
                    "تَيَامُنًا",
                    "تُيُوْمِنَ",
                    "يُتَيَامَنُ",
                    "تَيَامَنْ",
                    "لَا تَتَيَامَنْ",
                    "مُتَيَامِنٌ",
                    "مُتَيَامَنٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — تَيَامَنَ (بَاب تَفَاعُل)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "تَيَامَنَ",
                    "يَتَيَامَنُ",
                    "تُيُوْمِنَ",
                    "يُتَيَامَنُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "تَيَامَنَا",
                    "يَتَيَامَنَانِ",
                    "تُيُوْمِنَا",
                    "يُتَيَامَنَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "تَيَامَنُوْا",
                    "يَتَيَامَنُوْنَ",
                    "تُيُوْمِنُوْا",
                    "يُتَيَامَنُوْنَ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "تَيَامَنَتْ",
                    "تَتَيَامَنُ",
                    "تُيُوْمِنَتْ",
                    "تُتَيَامَنُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "تَيَامَنَتَا",
                    "تَتَيَامَنَانِ",
                    "تُيُوْمِنَتَا",
                    "تُتَيَامَنَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "تَيَامَنَّ",
                    "يَتَيَامَنَّ",
                    "تُيُوْمِنَّ",
                    "يُتَيَامَنَّ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "تَيَامَنْتَ",
                    "تَتَيَامَنُ",
                    "تُيُوْمِنْتَ",
                    "تُتَيَامَنُ",
                    "تَيَامَنْ",
                    "لَا تَتَيَامَنْ",
                    "مُتَيَامِنٌ",
                    "مُتَيَامَنٌ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَيَامَنْتُمَا",
                    "تَتَيَامَنَانِ",
                    "تُيُوْمِنْتُمَا",
                    "تُتَيَامَنَانِ",
                    "تَيَامَنَا",
                    "لَا تَتَيَامَنَا",
                    "مُتَيَامِنَانِ",
                    "مُتَيَامَنَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَيَامَنْتُمْ",
                    "تَتَيَامَنُوْنَ",
                    "تُيُوْمِنْتُمْ",
                    "تُتَيَامَنُوْنَ",
                    "تَيَامَنُوْا",
                    "لَا تَتَيَامَنُوْا",
                    "مُتَيَامِنُوْنَ",
                    "مُتَيَامَنُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَيَامَنْتِ",
                    "تَتَيَامَنِيْنَ",
                    "تُيُوْمِنْتِ",
                    "تُتَيَامَنِيْنَ",
                    "تَيَامَنِيْ",
                    "لَا تَتَيَامَنِيْ",
                    "مُتَيَامِنَةٌ",
                    "مُتَيَامَنَةٌ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَيَامَنْتُمَا",
                    "تَتَيَامَنَانِ",
                    "تُيُوْمِنْتُمَا",
                    "تُتَيَامَنَانِ",
                    "تَيَامَنَا",
                    "لَا تَتَيَامَنَا",
                    "مُتَيَامِنَتَانِ",
                    "مُتَيَامَنَتَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَيَامَنْتُنَّ",
                    "تَتَيَامَنَّ",
                    "تُيُوْمِنْتُنَّ",
                    "تُتَيَامَنَّ",
                    "تَيَامَنَّ",
                    "لَا تَتَيَامَنَّ",
                    "مُتَيَامِنَاتٌ",
                    "مُتَيَامَنَاتٌ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "تَيَامَنْتُ",
                    "أَتَيَامَنُ",
                    "تُيُوْمِنْتُ",
                    "أُتَيَامَنُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "تَيَامَنَّا",
                    "نَتَيَامَنُ",
                    "تُيُوْمِنَّا",
                    "نُتَيَامَنُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "تُيُوْمِنَ is…",
            "kind": "mcq",
            "options": [
              "الْمَاضِي الْمَجْهُوْلُ of تَيَامَنَ (بَاب تَفَاعُل)",
              "اسْمُ الْمَفْعُوْلِ of يَسَّرَ (بَاب تَفْعِيْل) — made easy",
              "الْمُضَارِعُ الْمَعْلُوْمُ of أَيْقَنَ (بَاب إِفْعَال) — He is convinced",
              "الْمَاضِي الْمَجْهُوْلُ of اِسْتَيْقَنَ (بَاب اسْتِفْعَال)"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 9 (VIII): الْمِثَالُ الْيَائِيُّ مِنْ بَابِ افْتِعَال",
          "lines": [
            {
              "html": "The model verb is <bdi>اِتَّسَرَ يَتَّسِرُ اِتِّسَارًا</bdi> (to be easy). In <bdi>بَاب افْتِعَال</bdi> the first root letter <bdi>ي</bdi> changes into <bdi>ت</bdi> and merges (<bdi>إِدْغَامٌ</bdi>) into the <bdi>ت</bdi> of the pattern: the original <bdi>اِيْتَسَرَ</bdi> becomes <bdi>اِتَّسَرَ</bdi> — exactly as the <bdi>و</bdi> of the <bdi>مِثَالٌ وَاوِيٌّ</bdi> does in this <bdi>باب</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِتَّسَرَ (بَاب افْتِعَال)",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِتَّسَرَ",
                    "يَتَّسِرُ",
                    "اِتِّسَارًا",
                    "اُتُّسِرَ",
                    "يُتَّسَرُ",
                    "اِتَّسِرْ",
                    "لَا تَتَّسِرْ",
                    "مُتَّسِرٌ",
                    "مُتَّسَرٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِتَّسَرَ (بَاب افْتِعَال)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِتَّسَرَ",
                    "يَتَّسِرُ",
                    "اُتُّسِرَ",
                    "يُتَّسَرُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِتَّسَرَا",
                    "يَتَّسِرَانِ",
                    "اُتُّسِرَا",
                    "يُتَّسَرَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِتَّسَرُوْا",
                    "يَتَّسِرُوْنَ",
                    "اُتُّسِرُوْا",
                    "يُتَّسَرُوْنَ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِتَّسَرَتْ",
                    "تَتَّسِرُ",
                    "اُتُّسِرَتْ",
                    "تُتَّسَرُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِتَّسَرَتَا",
                    "تَتَّسِرَانِ",
                    "اُتُّسِرَتَا",
                    "تُتَّسَرَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِتَّسَرْنَ",
                    "يَتَّسِرْنَ",
                    "اُتُّسِرْنَ",
                    "يُتَّسَرْنَ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِتَّسَرْتَ",
                    "تَتَّسِرُ",
                    "اُتُّسِرْتَ",
                    "تُتَّسَرُ",
                    "اِتَّسِرْ",
                    "لَا تَتَّسِرْ",
                    "مُتَّسِرٌ",
                    "مُتَّسَرٌ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِتَّسَرْتُمَا",
                    "تَتَّسِرَانِ",
                    "اُتُّسِرْتُمَا",
                    "تُتَّسَرَانِ",
                    "اِتَّسِرَا",
                    "لَا تَتَّسِرَا",
                    "مُتَّسِرَانِ",
                    "مُتَّسَرَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِتَّسَرْتُمْ",
                    "تَتَّسِرُوْنَ",
                    "اُتُّسِرْتُمْ",
                    "تُتَّسَرُوْنَ",
                    "اِتَّسِرُوْا",
                    "لَا تَتَّسِرُوْا",
                    "مُتَّسِرُوْنَ",
                    "مُتَّسَرُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِتَّسَرْتِ",
                    "تَتَّسِرِيْنَ",
                    "اُتُّسِرْتِ",
                    "تُتَّسَرِيْنَ",
                    "اِتَّسِرِيْ",
                    "لَا تَتَّسِرِيْ",
                    "مُتَّسِرَةٌ",
                    "مُتَّسَرَةٌ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِتَّسَرْتُمَا",
                    "تَتَّسِرَانِ",
                    "اُتُّسِرْتُمَا",
                    "تُتَّسَرَانِ",
                    "اِتَّسِرَا",
                    "لَا تَتَّسِرَا",
                    "مُتَّسِرَتَانِ",
                    "مُتَّسَرَتَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِتَّسَرْتُنَّ",
                    "تَتَّسِرْنَ",
                    "اُتُّسِرْتُنَّ",
                    "تُتَّسَرْنَ",
                    "اِتَّسِرْنَ",
                    "لَا تَتَّسِرْنَ",
                    "مُتَّسِرَاتٌ",
                    "مُتَّسَرَاتٌ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِتَّسَرْتُ",
                    "أَتَّسِرُ",
                    "اُتُّسِرْتُ",
                    "أُتَّسَرُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِتَّسَرْنَا",
                    "نَتَّسِرُ",
                    "اُتُّسِرْنَا",
                    "نُتَّسَرُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "اِتَّسَرَ is…",
            "kind": "mcq",
            "options": [
              "الْمَاضِي الْمَعْلُوْمُ of بَاب افْتِعَال — originally اِيْتَسَرَ",
              "الْأَمْرُ، الْمُخَاطَبُ of تَيَسَّرَ (بَاب تَفَعُّل)",
              "الْمَاضِي الْمَجْهُوْلُ of تَيَامَنَ (بَاب تَفَاعُل)",
              "اسْمُ الْمَفْعُوْلِ of يَسَّرَ (بَاب تَفْعِيْل) — made easy"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Part 10 (X): الْمِثَالُ الْيَائِيُّ مِنْ بَابِ اسْتِفْعَال",
          "lines": [
            {
              "html": "The model verb is <bdi>اِسْتَيْقَنَ يَسْتَيْقِنُ اِسْتِيْقَانًا</bdi> (to ascertain). The <bdi>ي</bdi> remains throughout the <bdi>معلوم</bdi> forms; in the <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi> it falls sakin after a <bdi>ضَمَّةٌ</bdi> and so changes into <bdi>و</bdi>: <bdi>اُسْتُوْقِنَ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِسْتَيْقَنَ (بَاب اسْتِفْعَال)",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِسْتَيْقَنَ",
                    "يَسْتَيْقِنُ",
                    "اِسْتِيْقَانًا",
                    "اُسْتُوْقِنَ",
                    "يُسْتَيْقَنُ",
                    "اِسْتَيْقِنْ",
                    "لَا تَسْتَيْقِنْ",
                    "مُسْتَيْقِنٌ",
                    "مُسْتَيْقَنٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِسْتَيْقَنَ (بَاب اسْتِفْعَال)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِسْتَيْقَنَ",
                    "يَسْتَيْقِنُ",
                    "اُسْتُوْقِنَ",
                    "يُسْتَيْقَنُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِسْتَيْقَنَا",
                    "يَسْتَيْقِنَانِ",
                    "اُسْتُوْقِنَا",
                    "يُسْتَيْقَنَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِسْتَيْقَنُوْا",
                    "يَسْتَيْقِنُوْنَ",
                    "اُسْتُوْقِنُوْا",
                    "يُسْتَيْقَنُوْنَ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِسْتَيْقَنَتْ",
                    "تَسْتَيْقِنُ",
                    "اُسْتُوْقِنَتْ",
                    "تُسْتَيْقَنُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِسْتَيْقَنَتَا",
                    "تَسْتَيْقِنَانِ",
                    "اُسْتُوْقِنَتَا",
                    "تُسْتَيْقَنَانِ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِسْتَيْقَنَّ",
                    "يَسْتَيْقِنَّ",
                    "اُسْتُوْقِنَّ",
                    "يُسْتَيْقَنَّ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِسْتَيْقَنْتَ",
                    "تَسْتَيْقِنُ",
                    "اُسْتُوْقِنْتَ",
                    "تُسْتَيْقَنُ",
                    "اِسْتَيْقِنْ",
                    "لَا تَسْتَيْقِنْ",
                    "مُسْتَيْقِنٌ",
                    "مُسْتَيْقَنٌ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِسْتَيْقَنْتُمَا",
                    "تَسْتَيْقِنَانِ",
                    "اُسْتُوْقِنْتُمَا",
                    "تُسْتَيْقَنَانِ",
                    "اِسْتَيْقِنَا",
                    "لَا تَسْتَيْقِنَا",
                    "مُسْتَيْقِنَانِ",
                    "مُسْتَيْقَنَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِسْتَيْقَنْتُمْ",
                    "تَسْتَيْقِنُوْنَ",
                    "اُسْتُوْقِنْتُمْ",
                    "تُسْتَيْقَنُوْنَ",
                    "اِسْتَيْقِنُوْا",
                    "لَا تَسْتَيْقِنُوْا",
                    "مُسْتَيْقِنُوْنَ",
                    "مُسْتَيْقَنُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِسْتَيْقَنْتِ",
                    "تَسْتَيْقِنِيْنَ",
                    "اُسْتُوْقِنْتِ",
                    "تُسْتَيْقَنِيْنَ",
                    "اِسْتَيْقِنِيْ",
                    "لَا تَسْتَيْقِنِيْ",
                    "مُسْتَيْقِنَةٌ",
                    "مُسْتَيْقَنَةٌ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِسْتَيْقَنْتُمَا",
                    "تَسْتَيْقِنَانِ",
                    "اُسْتُوْقِنْتُمَا",
                    "تُسْتَيْقَنَانِ",
                    "اِسْتَيْقِنَا",
                    "لَا تَسْتَيْقِنَا",
                    "مُسْتَيْقِنَتَانِ",
                    "مُسْتَيْقَنَتَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِسْتَيْقَنْتُنَّ",
                    "تَسْتَيْقِنَّ",
                    "اُسْتُوْقِنْتُنَّ",
                    "تُسْتَيْقَنَّ",
                    "اِسْتَيْقِنَّ",
                    "لَا تَسْتَيْقِنَّ",
                    "مُسْتَيْقِنَاتٌ",
                    "مُسْتَيْقَنَاتٌ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِسْتَيْقَنْتُ",
                    "أَسْتَيْقِنُ",
                    "اُسْتُوْقِنْتُ",
                    "أُسْتَيْقَنُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِسْتَيْقَنَّا",
                    "نَسْتَيْقِنُ",
                    "اُسْتُوْقِنَّا",
                    "نُسْتَيْقَنُ",
                    "—",
                    "—",
                    "—",
                    "—"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "اُسْتُوْقِنَ is…",
            "kind": "mcq",
            "options": [
              "الْمَاضِي الْمَجْهُوْلُ of اِسْتَيْقَنَ (بَاب اسْتِفْعَال)",
              "الْمَاضِي الْمَجْهُوْلُ of يَاسَرَ (بَاب مُفَاعَلَة)",
              "الْمَاضِي الْمَعْلُوْمُ of بَاب افْتِعَال — originally اِيْتَسَرَ",
              "الْأَمْرُ، الْمُخَاطَبُ of تَيَسَّرَ (بَاب تَفَعُّل)"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Parts 4–10: الْمِثَالُ الْيَائِيُّ — مَزِيْدٌ فِيْهِ",
        "rows": [
          {
            "label": "II and V: the ي carries a حَرَكَةٌ — no change",
            "arabic": "يَسَّرَ يُيَسِّرُ / تَيَسَّرَ يَتَيَسَّرُ",
            "meaning": "II and V: the ي carries a حَرَكَةٌ — no change",
            "unlockAt": 0
          },
          {
            "label": "III and VI: the أَلِفٌ changes into و in the passive ماضي",
            "arabic": "يَاسَرَ — يُوْسِرَ / تَيَامَنَ — تُيُوْمِنَ",
            "meaning": "III and VI: the أَلِفٌ changes into و in the passive ماضي",
            "unlockAt": 1
          },
          {
            "label": "IV: the sakin ي after a ضَمَّةٌ changes into و in the مضارع",
            "arabic": "أَيْقَنَ يُوْقِنُ",
            "meaning": "IV: the sakin ي after a ضَمَّةٌ changes into و in the مضارع",
            "unlockAt": 2
          },
          {
            "label": "VIII: the ي changes into ت and merges into the ت of افْتَعَلَ",
            "arabic": "اِتَّسَرَ (from اِيْتَسَرَ)",
            "meaning": "VIII: the ي changes into ت and merges into the ت of افْتَعَلَ",
            "unlockAt": 4
          },
          {
            "label": "X: the ي remains, except the passive ماضي where it becomes و",
            "arabic": "اِسْتَيْقَنَ — اُسْتُوْقِنَ",
            "meaning": "X: the ي remains, except the passive ماضي where it becomes و",
            "unlockAt": 5
          }
        ]
      },
      "quiz": [
        {
          "q": "Why is the مُضَارِعٌ of أَيْقَنَ (بَاب إِفْعَال) written يُوْقِنُ and not يُيْقِنُ؟",
          "options": [
            "The sakin ي after a ضَمَّةٌ changes into و",
            "The ق changes the ي into و",
            "The hamzah of أَيْقَنَ becomes و",
            "It is an irregular form that must simply be memorised"
          ],
          "correct": 0,
          "explanation": "A sakin ي preceded by a ضَمَّةٌ changes into و: يُيْقِنُ becomes يُوْقِنُ. Hence also مُوْقِنٌ، مُوْقَنٌ، لَا تُوْقِنْ."
        },
        {
          "q": "What is the origin of اِتَّسَرَ (بَاب افْتِعَال)؟",
          "options": [
            "اِوْتَسَرَ — the و changed into ت",
            "اِيْتَسَرَ — the ي changed into ت and merged into the ت of the pattern",
            "اِتْيَسَرَ — the ي and ت swapped places",
            "تَيَسَّرَ — the two forms are the same verb"
          ],
          "correct": 1,
          "explanation": "In بَاب افْتِعَال the first root letter ي changes into ت and merges (إِدْغَامٌ) into the ت of افْتَعَلَ: اِيْتَسَرَ → اِتَّسَرَ."
        },
        {
          "q": "What is the الْمَاضِي الْمَجْهُوْلُ of يَاسَرَ (بَاب مُفَاعَلَة)؟",
          "options": [
            "يُوْسِرَ",
            "يُيِسَرَ",
            "أُوْسِرَ",
            "يُسِّرَ"
          ],
          "correct": 0,
          "explanation": "On the فُوْعِلَ pattern the أَلِفٌ changes into و: يُوْسِرَ. يُسِّرَ is the passive of يَسَّرَ (بَاب تَفْعِيْل)."
        },
        {
          "q": "What is the الْمَاضِي الْمَجْهُوْلُ of اِسْتَيْقَنَ (بَاب اسْتِفْعَال)؟",
          "options": [
            "اُسْتُوْقِنَ",
            "اُسْتُيْقِنَ",
            "اِسْتَيْقُنَ",
            "أُوْقِنَ"
          ],
          "correct": 0,
          "explanation": "The ي becomes sakin after a ضَمَّةٌ and changes into و: اُسْتُوْقِنَ. أُوْقِنَ is the passive of أَيْقَنَ (IV)."
        },
        {
          "q": "What is the مَصْدَرٌ of تَيَامَنَ؟",
          "options": [
            "تَيَامُنًا",
            "مُيَامَنَةً",
            "تَيَمُّنًا",
            "إِيْمَانًا"
          ],
          "correct": 0,
          "explanation": "بَاب تَفَاعُل: تَيَامَنَ يَتَيَامَنُ تَيَامُنًا (to start from the right). مُيَامَنَةً belongs to يَامَنَ (III) and تَيَمُّنًا to تَيَمَّنَ (V)."
        },
        {
          "q": "Which of the following is the اسْمُ الْفَاعِلِ of تَيَسَّرَ؟",
          "options": [
            "مُتَيَسِّرٌ",
            "مُتَيَسَّرٌ",
            "مُيَسِّرٌ",
            "مُسْتَيْسِرٌ"
          ],
          "correct": 0,
          "explanation": "بَاب تَفَعُّل: اسم الفاعل مُتَيَسِّرٌ (kasrah), اسم المفعول مُتَيَسَّرٌ (fathah). مُيَسِّرٌ is from يَسَّرَ (II)."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the الْمُضَارِعُ الْمَعْلُوْمُ of أَيْقَظَ (to awaken)?",
          "options": [
            "يُوْقِظُ",
            "يُيْقِظُ",
            "يَسْتَيْقِظُ",
            "يُوْقَظُ"
          ],
          "correct": 0,
          "explanation": "بَاب إِفْعَال: the sakin ي after the ضَمَّةٌ becomes و — أَيْقَظَ يُوْقِظُ إِيْقَاظًا. يَسْتَيْقِظُ belongs to اِسْتَيْقَظَ (X)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the اسْمُ الْفَاعِلِ of اِسْتَيْقَنَ؟",
          "options": [
            "مُسْتَيْقِنٌ",
            "مُسْتَيْقَنٌ",
            "مُوْقِنٌ",
            "مُسْتَوْقِنٌ"
          ],
          "correct": 0,
          "explanation": "بَاب اسْتِفْعَال keeps the ي: مُسْتَيْقِنٌ (kasrah). مُسْتَيْقَنٌ (fathah) is the اسم المفعول, and مُوْقِنٌ is from أَيْقَنَ (IV)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "'Deal with ease!' — the أَمْرُ (You m/s) of يَاسَرَ — is…",
          "options": [
            "يَاسِرْ",
            "اِيْسَرْ",
            "يَسِّرْ",
            "تَيَاسَرْ"
          ],
          "correct": 0,
          "explanation": "بَاب مُفَاعَلَة: drop the prefix from تُيَاسِرُ — يَاسِرْ. يَسِّرْ is the أمر of يَسَّرَ (II) and تَيَاسَرْ of تَيَاسَرَ (VI)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the الْمَاضِي الْمَجْهُوْلُ of تَيَامَنَ (بَاب تَفَاعُل)؟",
          "options": [
            "تُيُوْمِنَ",
            "تُيُمِّنَ",
            "تِيْمِنَ",
            "يُوْمِنَ"
          ],
          "correct": 0,
          "explanation": "On the تُفُوْعِلَ pattern the أَلِفٌ changes into و: تُيُوْمِنَ. Compare تُيُسِّرَ, the passive of تَيَسَّرَ (V)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the مَصْدَرٌ of اِتَّبَسَ (to become dry)?",
          "options": [
            "اِتِّبَاسًا",
            "تَيْبِيْسًا",
            "إِيْبَاسًا",
            "يَبْسًا"
          ],
          "correct": 0,
          "explanation": "بَاب افْتِعَال: اِتَّبَسَ يَتَّبِسُ اِتِّبَاسًا. تَيْبِيْسًا is from يَبَّسَ (II), إِيْبَاسًا from أَيْبَسَ (IV) and يَبْسًا from يَبِسَ (مجرد)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "'Do not be easy' (النَّهْيُ، الْمُخَاطَبُ) of تَيَسَّرَ is…",
          "options": [
            "لَا تَتَيَسَّرْ",
            "لَا تُيَسِّرْ",
            "لَا تَيْسِرْ",
            "لَا تَسْتَيْسِرْ"
          ],
          "correct": 0,
          "explanation": "بَاب تَفَعُّل: لَا + تَتَيَسَّرُ with a سُكُوْنٌ — لَا تَتَيَسَّرْ. لَا تُيَسِّرْ is the نهي of يَسَّرَ (II)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the الْمُضَارِعُ الْمَجْهُوْلُ of اِسْتَيْقَنَ؟",
          "options": [
            "يُسْتَيْقَنُ",
            "يُسْتَوْقَنُ",
            "يَسْتَيْقِنُ",
            "اُسْتُوْقِنَ"
          ],
          "correct": 0,
          "explanation": "The ي keeps its position after the فَتْحَةٌ pattern: يُسْتَيْقَنُ. اُسْتُوْقِنَ is the passive ماضي, and يَسْتَيْقِنُ the active مضارع."
        },
        {
          "title": "Book Exercise 2 (p. 162)",
          "kind": "mcq",
          "prompt": "اِسْتِيْقَاظًا: الْمُخَاطَبُ مِنَ النَّهْيِ is…",
          "options": [
            "لَا تَسْتَيْقِظْ",
            "لَا تُوْقِظْ",
            "لَا تَيْقَظْ",
            "لَا تَسْتَوْقِظْ"
          ],
          "correct": 0,
          "explanation": "The مصدر اِسْتِيْقَاظًا belongs to اِسْتَيْقَظَ (X); its نهي for the مخاطب is لَا تَسْتَيْقِظْ. لَا تُوْقِظْ belongs to أَيْقَظَ (IV)."
        },
        {
          "title": "Book Exercise 2 (p. 162)",
          "kind": "mcq",
          "prompt": "تَيْسِيْرًا: الْمُخَاطَبُوْنَ مِنَ الْأَمْرِ is…",
          "options": [
            "يَسِّرُوْا",
            "يَاسِرُوْا",
            "تَيَسَّرُوْا",
            "يَسِّرْنَ"
          ],
          "correct": 0,
          "explanation": "تَيْسِيْرًا belongs to يَسَّرَ (II); the أمر for You (m/p) is يَسِّرُوْا. يَاسِرُوْا belongs to يَاسَرَ (III) and يَسِّرْنَ is You (f/p)."
        },
        {
          "title": "Book Exercise 2 (p. 162)",
          "kind": "mcq",
          "prompt": "مُيَاسَرَةً: الْمُخَاطَبَاتُ مِنَ النَّهْيِ is…",
          "options": [
            "لَا تُيَاسِرْنَ",
            "لَا تُيَاسِرُوْا",
            "لَا تُيَسِّرْنَ",
            "لَا تَتَيَاسَرْنَ"
          ],
          "correct": 0,
          "explanation": "مُيَاسَرَةً belongs to يَاسَرَ (III); the نهي for You (f/p) is لَا تُيَاسِرْنَ. لَا تُيَسِّرْنَ belongs to يَسَّرَ (II)."
        },
        {
          "title": "Book Exercise 2 (p. 162)",
          "kind": "mcq",
          "prompt": "اِتِّسَاعًا: الْغَائِبَتَانِ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ is…",
          "options": [
            "تُتَّسَعَانِ",
            "تَتَّسِعَانِ",
            "يُتَّسَعَانِ",
            "اُتُّسِعَتَا"
          ],
          "correct": 0,
          "explanation": "اِتِّسَاعًا is a بَاب افْتِعَال مصدر (اِتَّسَعَ, same pattern as اِتَّسَرَ); the passive مضارع for They (f/d) is تُتَّسَعَانِ. اُتُّسِعَتَا would be the passive ماضي."
        },
        {
          "title": "to make dry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make dry\"?",
          "options": [
            "يَبَّسَ يُيَبِّسُ",
            "يَسَّرَ يُيَسِّرُ",
            "يَامَنَ يُيَامِنُ",
            "يَاسَرَ يُيَاسِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to make dry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَبَّسَ يُيَبِّسُ mean?",
          "options": [
            "to make dry",
            "to make easy",
            "to go to the right",
            "to deal with ease"
          ],
          "correct": 0
        },
        {
          "title": "to make dry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَبَّسَ يُيَبِّسُ?",
          "options": [
            "تَيْبِيْسًا",
            "تَيْسِيْرًا",
            "مُيَامَنَةً",
            "مُيَاسَرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to make easy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make easy\"?",
          "options": [
            "يَسَّرَ يُيَسِّرُ",
            "يَامَنَ يُيَامِنُ",
            "يَاسَرَ يُيَاسِرُ",
            "أَيْقَنَ يُوْقِنُ"
          ],
          "correct": 0
        },
        {
          "title": "to make easy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَسَّرَ يُيَسِّرُ mean?",
          "options": [
            "to make easy",
            "to go to the right",
            "to deal with ease",
            "to be convinced"
          ],
          "correct": 0
        },
        {
          "title": "to make easy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَسَّرَ يُيَسِّرُ?",
          "options": [
            "تَيْسِيْرًا",
            "مُيَامَنَةً",
            "مُيَاسَرَةً",
            "إِيْقَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to go to the right",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to go to the right\"?",
          "options": [
            "يَامَنَ يُيَامِنُ",
            "يَاسَرَ يُيَاسِرُ",
            "أَيْقَنَ يُوْقِنُ",
            "أَيْنَعَ يُوْنِعُ"
          ],
          "correct": 0
        },
        {
          "title": "to go to the right",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَامَنَ يُيَامِنُ mean?",
          "options": [
            "to go to the right",
            "to deal with ease",
            "to be convinced",
            "to make ripe"
          ],
          "correct": 0
        },
        {
          "title": "to go to the right (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَامَنَ يُيَامِنُ?",
          "options": [
            "مُيَامَنَةً",
            "مُيَاسَرَةً",
            "إِيْقَانًا",
            "إِيْنَاعًا"
          ],
          "correct": 0
        },
        {
          "title": "to deal with ease",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to deal with ease\"?",
          "options": [
            "يَاسَرَ يُيَاسِرُ",
            "أَيْقَنَ يُوْقِنُ",
            "أَيْنَعَ يُوْنِعُ",
            "أَيْبَسَ يُوْبِسُ"
          ],
          "correct": 0
        },
        {
          "title": "to deal with ease",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَاسَرَ يُيَاسِرُ mean?",
          "options": [
            "to deal with ease",
            "to be convinced",
            "to make ripe",
            "to make dry"
          ],
          "correct": 0
        },
        {
          "title": "to deal with ease (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَاسَرَ يُيَاسِرُ?",
          "options": [
            "مُيَاسَرَةً",
            "إِيْقَانًا",
            "إِيْنَاعًا",
            "إِيْبَاسًا"
          ],
          "correct": 0
        },
        {
          "title": "to be convinced",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be convinced\"?",
          "options": [
            "أَيْقَنَ يُوْقِنُ",
            "أَيْنَعَ يُوْنِعُ",
            "أَيْبَسَ يُوْبِسُ",
            "أَيْقَظَ يُوْقِظُ"
          ],
          "correct": 0
        },
        {
          "title": "to be convinced",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَيْقَنَ يُوْقِنُ mean?",
          "options": [
            "to be convinced",
            "to make ripe",
            "to make dry",
            "to awaken"
          ],
          "correct": 0
        },
        {
          "title": "to be convinced (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَيْقَنَ يُوْقِنُ?",
          "options": [
            "إِيْقَانًا",
            "إِيْنَاعًا",
            "إِيْبَاسًا",
            "إِيْقَاظًا"
          ],
          "correct": 0
        },
        {
          "title": "to make ripe",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make ripe\"?",
          "options": [
            "أَيْنَعَ يُوْنِعُ",
            "أَيْبَسَ يُوْبِسُ",
            "أَيْقَظَ يُوْقِظُ",
            "تَيَمَّنَ يَتَيَمَّنُ"
          ],
          "correct": 0
        },
        {
          "title": "to make ripe",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَيْنَعَ يُوْنِعُ mean?",
          "options": [
            "to make ripe",
            "to make dry",
            "to awaken",
            "to see a good omen"
          ],
          "correct": 0
        },
        {
          "title": "to make ripe (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَيْنَعَ يُوْنِعُ?",
          "options": [
            "إِيْنَاعًا",
            "إِيْبَاسًا",
            "إِيْقَاظًا",
            "تَيَمُّنًا"
          ],
          "correct": 0
        },
        {
          "title": "to make dry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make dry\"?",
          "options": [
            "أَيْبَسَ يُوْبِسُ",
            "أَيْقَظَ يُوْقِظُ",
            "تَيَمَّنَ يَتَيَمَّنُ",
            "تَيَسَّرَ يَتَيَسَّرُ"
          ],
          "correct": 0
        },
        {
          "title": "to make dry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَيْبَسَ يُوْبِسُ mean?",
          "options": [
            "to make dry",
            "to awaken",
            "to see a good omen",
            "to be easy"
          ],
          "correct": 0
        },
        {
          "title": "to make dry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَيْبَسَ يُوْبِسُ?",
          "options": [
            "إِيْبَاسًا",
            "إِيْقَاظًا",
            "تَيَمُّنًا",
            "تَيَسُّرًا"
          ],
          "correct": 0
        },
        {
          "title": "to awaken",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to awaken\"?",
          "options": [
            "أَيْقَظَ يُوْقِظُ",
            "تَيَمَّنَ يَتَيَمَّنُ",
            "تَيَسَّرَ يَتَيَسَّرُ",
            "تَيَاسَرَ يَتَيَاسَرُ"
          ],
          "correct": 0
        },
        {
          "title": "to awaken",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَيْقَظَ يُوْقِظُ mean?",
          "options": [
            "to awaken",
            "to see a good omen",
            "to be easy",
            "to deal with ease"
          ],
          "correct": 0
        },
        {
          "title": "to awaken (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَيْقَظَ يُوْقِظُ?",
          "options": [
            "إِيْقَاظًا",
            "تَيَمُّنًا",
            "تَيَسُّرًا",
            "تَيَاسُرًا"
          ],
          "correct": 0
        },
        {
          "title": "to see a good omen",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to see a good omen\"?",
          "options": [
            "تَيَمَّنَ يَتَيَمَّنُ",
            "تَيَسَّرَ يَتَيَسَّرُ",
            "تَيَاسَرَ يَتَيَاسَرُ",
            "تَيَامَنَ يَتَيَامَنُ"
          ],
          "correct": 0
        },
        {
          "title": "to see a good omen",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَيَمَّنَ يَتَيَمَّنُ mean?",
          "options": [
            "to see a good omen",
            "to be easy",
            "to deal with ease",
            "to start from the right"
          ],
          "correct": 0
        },
        {
          "title": "to see a good omen (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَيَمَّنَ يَتَيَمَّنُ?",
          "options": [
            "تَيَمُّنًا",
            "تَيَسُّرًا",
            "تَيَاسُرًا",
            "تَيَامُنًا"
          ],
          "correct": 0
        },
        {
          "title": "to be easy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be easy\"?",
          "options": [
            "تَيَسَّرَ يَتَيَسَّرُ",
            "تَيَاسَرَ يَتَيَاسَرُ",
            "تَيَامَنَ يَتَيَامَنُ",
            "اِتَّبَسَ يَتَّبِسُ"
          ],
          "correct": 0
        },
        {
          "title": "to be easy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَيَسَّرَ يَتَيَسَّرُ mean?",
          "options": [
            "to be easy",
            "to deal with ease",
            "to start from the right",
            "to become dry"
          ],
          "correct": 0
        },
        {
          "title": "to be easy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَيَسَّرَ يَتَيَسَّرُ?",
          "options": [
            "تَيَسُّرًا",
            "تَيَاسُرًا",
            "تَيَامُنًا",
            "اِتِّبَاسًا"
          ],
          "correct": 0
        },
        {
          "title": "to deal with ease",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to deal with ease\"?",
          "options": [
            "تَيَاسَرَ يَتَيَاسَرُ",
            "تَيَامَنَ يَتَيَامَنُ",
            "اِتَّبَسَ يَتَّبِسُ",
            "اِتَّسَرَ يَتَّسِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to deal with ease",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَيَاسَرَ يَتَيَاسَرُ mean?",
          "options": [
            "to deal with ease",
            "to start from the right",
            "to become dry",
            "to be easy"
          ],
          "correct": 0
        },
        {
          "title": "to deal with ease (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَيَاسَرَ يَتَيَاسَرُ?",
          "options": [
            "تَيَاسُرًا",
            "تَيَامُنًا",
            "اِتِّبَاسًا",
            "اِتِّسَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to start from the right",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to start from the right\"?",
          "options": [
            "تَيَامَنَ يَتَيَامَنُ",
            "اِتَّبَسَ يَتَّبِسُ",
            "اِتَّسَرَ يَتَّسِرُ",
            "اِسْتَيْأَسَ يَسْتَيْئِسُ"
          ],
          "correct": 0
        },
        {
          "title": "to start from the right",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَيَامَنَ يَتَيَامَنُ mean?",
          "options": [
            "to start from the right",
            "to become dry",
            "to be easy",
            "to give up hope"
          ],
          "correct": 0
        },
        {
          "title": "to start from the right (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَيَامَنَ يَتَيَامَنُ?",
          "options": [
            "تَيَامُنًا",
            "اِتِّبَاسًا",
            "اِتِّسَارًا",
            "اِسْتِيْئَاسًا"
          ],
          "correct": 0
        },
        {
          "title": "to become dry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to become dry\"?",
          "options": [
            "اِتَّبَسَ يَتَّبِسُ",
            "اِتَّسَرَ يَتَّسِرُ",
            "اِسْتَيْأَسَ يَسْتَيْئِسُ",
            "اِسْتَيْسَرَ يَسْتَيْسِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to become dry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِتَّبَسَ يَتَّبِسُ mean?",
          "options": [
            "to become dry",
            "to be easy",
            "to give up hope",
            "to be easy"
          ],
          "correct": 0
        },
        {
          "title": "to become dry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِتَّبَسَ يَتَّبِسُ?",
          "options": [
            "اِتِّبَاسًا",
            "اِتِّسَارًا",
            "اِسْتِيْئَاسًا",
            "اِسْتِيْسَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to be easy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be easy\"?",
          "options": [
            "اِتَّسَرَ يَتَّسِرُ",
            "اِسْتَيْأَسَ يَسْتَيْئِسُ",
            "اِسْتَيْسَرَ يَسْتَيْسِرُ",
            "اِسْتَيْقَنَ يَسْتَيْقِنُ"
          ],
          "correct": 0
        },
        {
          "title": "to be easy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِتَّسَرَ يَتَّسِرُ mean?",
          "options": [
            "to be easy",
            "to give up hope",
            "to be easy",
            "to ascertain"
          ],
          "correct": 0
        },
        {
          "title": "to be easy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِتَّسَرَ يَتَّسِرُ?",
          "options": [
            "اِتِّسَارًا",
            "اِسْتِيْئَاسًا",
            "اِسْتِيْسَارًا",
            "اِسْتِيْقَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give up hope\"?",
          "options": [
            "اِسْتَيْأَسَ يَسْتَيْئِسُ",
            "اِسْتَيْسَرَ يَسْتَيْسِرُ",
            "اِسْتَيْقَنَ يَسْتَيْقِنُ",
            "اِسْتَيْقَظَ يَسْتَيْقِظُ"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَيْأَسَ يَسْتَيْئِسُ mean?",
          "options": [
            "to give up hope",
            "to be easy",
            "to ascertain",
            "to wake up"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَيْأَسَ يَسْتَيْئِسُ?",
          "options": [
            "اِسْتِيْئَاسًا",
            "اِسْتِيْسَارًا",
            "اِسْتِيْقَانًا",
            "اِسْتِيْقَاظًا"
          ],
          "correct": 0
        },
        {
          "title": "to be easy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be easy\"?",
          "options": [
            "اِسْتَيْسَرَ يَسْتَيْسِرُ",
            "اِسْتَيْقَنَ يَسْتَيْقِنُ",
            "اِسْتَيْقَظَ يَسْتَيْقِظُ",
            "يَبَّسَ يُيَبِّسُ"
          ],
          "correct": 0
        },
        {
          "title": "to be easy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَيْسَرَ يَسْتَيْسِرُ mean?",
          "options": [
            "to be easy",
            "to ascertain",
            "to wake up",
            "to make dry"
          ],
          "correct": 0
        },
        {
          "title": "to be easy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَيْسَرَ يَسْتَيْسِرُ?",
          "options": [
            "اِسْتِيْسَارًا",
            "اِسْتِيْقَانًا",
            "اِسْتِيْقَاظًا",
            "تَيْبِيْسًا"
          ],
          "correct": 0
        },
        {
          "title": "to ascertain",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to ascertain\"?",
          "options": [
            "اِسْتَيْقَنَ يَسْتَيْقِنُ",
            "اِسْتَيْقَظَ يَسْتَيْقِظُ",
            "يَبَّسَ يُيَبِّسُ",
            "يَسَّرَ يُيَسِّرُ"
          ],
          "correct": 0
        },
        {
          "title": "to ascertain",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَيْقَنَ يَسْتَيْقِنُ mean?",
          "options": [
            "to ascertain",
            "to wake up",
            "to make dry",
            "to make easy"
          ],
          "correct": 0
        },
        {
          "title": "to ascertain (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَيْقَنَ يَسْتَيْقِنُ?",
          "options": [
            "اِسْتِيْقَانًا",
            "اِسْتِيْقَاظًا",
            "تَيْبِيْسًا",
            "تَيْسِيْرًا"
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
            "يَبَّسَ يُيَبِّسُ",
            "يَسَّرَ يُيَسِّرُ",
            "يَامَنَ يُيَامِنُ"
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
            "to make dry",
            "to make easy",
            "to go to the right"
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
            "تَيْبِيْسًا",
            "تَيْسِيْرًا",
            "مُيَامَنَةً"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l3",
      "title": "المراجعة",
      "subtitle": "Key terms, the master conjugation table, and the full section vocabulary — no new material, just review",
      "concepts": [
        {
          "heading": "Unit 4 Section 2 Summary",
          "lines": [
            {
              "html": "This is a cumulative review of Unit 4 Section 2: every key term for the <bdi>الْمِثَالُ الْيَائِيُّ</bdi>, the master <bdi>تَصْرِيْفٌ صَغِيْرٌ</bdi> table across all the <bdi>أَبْوَاب</bdi>, and the full section-end verb vocabulary. Nothing here is new — the quiz below draws only on terms already taught, and the practice bank it unlocks is there to keep the vocabulary fresh.",
              "list": false
            },
            {
              "table": {
                "title": "الْمِثَالُ الْيَائِيُّ across the abwab",
                "headers": [
                  "الْبَابُ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اسْمُ الْفَاعِلِ",
                  "اسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "فَتَحَ",
                    "يَنَعَ",
                    "يَيْنَعُ",
                    "يَنْعًا",
                    "يُنِعَ",
                    "يُوْنَعُ",
                    "اِيْنَعْ",
                    "لَا تَيْنَعْ",
                    "يَانِعٌ",
                    "مَيْنُوْعٌ"
                  ],
                  [
                    "سَمِعَ",
                    "يَبِسَ",
                    "يَيْبَسُ",
                    "يَبْسًا",
                    "يُبِسَ",
                    "يُوْبَسُ",
                    "اِيْبَسْ",
                    "لَا تَيْبَسْ",
                    "يَابِسٌ",
                    "مَيْبُوْسٌ"
                  ],
                  [
                    "ضَرَبَ",
                    "يَتَمَ",
                    "يَيْتِمُ",
                    "يُتْمًا",
                    "—",
                    "—",
                    "اِيْتِمْ",
                    "لَا تَيْتِمْ",
                    "يَتِيْمٌ",
                    "—"
                  ],
                  [
                    "نَصَرَ",
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
                    "حَسِبَ",
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
                    "يَسَّرَ",
                    "يُيَسِّرُ",
                    "تَيْسِيْرًا",
                    "يُسِّرَ",
                    "يُيَسَّرُ",
                    "يَسِّرْ",
                    "لَا تُيَسِّرْ",
                    "مُيَسِّرٌ",
                    "مُيَسَّرٌ"
                  ],
                  [
                    "مُفَاعَلَةً (III)",
                    "يَاسَرَ",
                    "يُيَاسِرُ",
                    "مُيَاسَرَةً",
                    "يُوْسِرَ",
                    "يُيَاسَرُ",
                    "يَاسِرْ",
                    "لَا تُيَاسِرْ",
                    "مُيَاسِرٌ",
                    "مُيَاسَرٌ"
                  ],
                  [
                    "إِفْعَالًا (IV)",
                    "أَيْقَنَ",
                    "يُوْقِنُ",
                    "إِيْقَانًا",
                    "أُوْقِنَ",
                    "يُوْقَنُ",
                    "أَيْقِنْ",
                    "لَا تُوْقِنْ",
                    "مُوْقِنٌ",
                    "مُوْقَنٌ"
                  ],
                  [
                    "تَفَعُّلًا (V)",
                    "تَيَسَّرَ",
                    "يَتَيَسَّرُ",
                    "تَيَسُّرًا",
                    "تُيُسِّرَ",
                    "يُتَيَسَّرُ",
                    "تَيَسَّرْ",
                    "لَا تَتَيَسَّرْ",
                    "مُتَيَسِّرٌ",
                    "مُتَيَسَّرٌ"
                  ],
                  [
                    "تَفَاعُلًا (VI)",
                    "تَيَامَنَ",
                    "يَتَيَامَنُ",
                    "تَيَامُنًا",
                    "تُيُوْمِنَ",
                    "يُتَيَامَنُ",
                    "تَيَامَنْ",
                    "لَا تَتَيَامَنْ",
                    "مُتَيَامِنٌ",
                    "مُتَيَامَنٌ"
                  ],
                  [
                    "اِنْفِعَالًا (VII)",
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
                    "اِفْتِعَالًا (VIII)",
                    "اِتَّسَرَ",
                    "يَتَّسِرُ",
                    "اِتِّسَارًا",
                    "اُتُّسِرَ",
                    "يُتَّسَرُ",
                    "اِتَّسِرْ",
                    "لَا تَتَّسِرْ",
                    "مُتَّسِرٌ",
                    "مُتَّسَرٌ"
                  ],
                  [
                    "اِسْتِفْعَالًا (X)",
                    "اِسْتَيْقَنَ",
                    "يَسْتَيْقِنُ",
                    "اِسْتِيْقَانًا",
                    "اُسْتُوْقِنَ",
                    "يُسْتَيْقَنُ",
                    "اِسْتَيْقِنْ",
                    "لَا تَسْتَيْقِنْ",
                    "مُسْتَيْقِنٌ",
                    "مُسْتَيْقَنٌ"
                  ]
                ]
              }
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "What does اَلْمِثَالُ الْيَائِيُّ mean?",
          "options": [
            "a verb whose first root letter is ي",
            "a verb whose first root letter is و",
            "to deal with ease",
            "to go to the right"
          ],
          "correct": 0,
          "explanation": "اَلْمِثَالُ الْيَائِيُّ means \"a verb whose first root letter is ي\"."
        },
        {
          "q": "What does اَلْمِثَالُ الْوَاوِيُّ mean?",
          "options": [
            "a verb whose first root letter is و",
            "a verb whose first root letter is ي",
            "to go to the right",
            "to make dry"
          ],
          "correct": 0,
          "explanation": "اَلْمِثَالُ الْوَاوِيُّ means \"a verb whose first root letter is و\"."
        },
        {
          "q": "According to the master summary table, how many أَبْوَاب have no الْمِثَالُ الْيَائِيُّ example (every cell left blank)?",
          "options": [
            "Two — بَاب نَصَرَ and بَاب حَسِبَ",
            "One — بَاب نَصَرَ only",
            "Three",
            "None — every بَاب has an example"
          ],
          "correct": 0,
          "explanation": "In the summary table, the rows for بَاب نَصَرَ and بَاب حَسِبَ are printed with \"—\" in every column: there is no الْمِثَالُ الْيَائِيُّ example from those two أَبْوَاب."
        }
      ],
      "bank": [
        {
          "title": "to see a good omen",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to see a good omen\"?",
          "options": [
            "تَيَمَّنَ يَتَيَمَّنُ",
            "يَاسَرَ يُيَاسِرُ",
            "يَامَنَ يُيَامِنُ",
            "يَبَّسَ يُيَبِّسُ"
          ],
          "correct": 0
        },
        {
          "title": "to see a good omen",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَيَمَّنَ يَتَيَمَّنُ mean?",
          "options": [
            "to see a good omen",
            "to deal with ease",
            "to go to the right",
            "to make dry"
          ],
          "correct": 0
        },
        {
          "title": "to see a good omen (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَيَمَّنَ يَتَيَمَّنُ?",
          "options": [
            "تَيَمُّنًا",
            "مُيَاسَرَةً",
            "مُيَامَنَةً",
            "تَيْبِيْسًا"
          ],
          "correct": 0
        },
        {
          "title": "to deal with ease",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to deal with ease\"?",
          "options": [
            "يَاسَرَ يُيَاسِرُ",
            "يَامَنَ يُيَامِنُ",
            "يَبَّسَ يُيَبِّسُ",
            "يَبِسَ يَيْبَسُ"
          ],
          "correct": 0
        },
        {
          "title": "to deal with ease",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَاسَرَ يُيَاسِرُ mean?",
          "options": [
            "to deal with ease",
            "to go to the right",
            "to make dry",
            "to be dry"
          ],
          "correct": 0
        },
        {
          "title": "to deal with ease (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَاسَرَ يُيَاسِرُ?",
          "options": [
            "مُيَاسَرَةً",
            "مُيَامَنَةً",
            "تَيْبِيْسًا",
            "يَبْسًا"
          ],
          "correct": 0
        },
        {
          "title": "to go to the right",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to go to the right\"?",
          "options": [
            "يَامَنَ يُيَامِنُ",
            "يَبَّسَ يُيَبِّسُ",
            "يَبِسَ يَيْبَسُ",
            "يَتَمَ يَيْتِمُ"
          ],
          "correct": 0
        },
        {
          "title": "to go to the right",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَامَنَ يُيَامِنُ mean?",
          "options": [
            "to go to the right",
            "to make dry",
            "to be dry",
            "to become an orphan"
          ],
          "correct": 0
        },
        {
          "title": "to go to the right (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَامَنَ يُيَامِنُ?",
          "options": [
            "مُيَامَنَةً",
            "تَيْبِيْسًا",
            "يَبْسًا",
            "يُتْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to make dry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make dry\"?",
          "options": [
            "يَبَّسَ يُيَبِّسُ",
            "يَبِسَ يَيْبَسُ",
            "يَتَمَ يَيْتِمُ",
            "يَسَّرَ يُيَسِّرُ"
          ],
          "correct": 0
        },
        {
          "title": "to make dry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَبَّسَ يُيَبِّسُ mean?",
          "options": [
            "to make dry",
            "to be dry",
            "to become an orphan",
            "to make easy"
          ],
          "correct": 0
        },
        {
          "title": "to make dry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَبَّسَ يُيَبِّسُ?",
          "options": [
            "تَيْبِيْسًا",
            "يَبْسًا",
            "يُتْمًا",
            "تَيْسِيْرًا"
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
            "يَتَمَ يَيْتِمُ",
            "يَسَّرَ يُيَسِّرُ",
            "يَسَرَ يَيْسِرُ"
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
            "to become an orphan",
            "to make easy",
            "to be easy"
          ],
          "correct": 0
        },
        {
          "title": "to be dry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَبِسَ يَيْبَسُ?",
          "options": [
            "يَبْسًا",
            "يُتْمًا",
            "تَيْسِيْرًا",
            "مَيْسِرًا"
          ],
          "correct": 0
        },
        {
          "title": "to become an orphan",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to become an orphan\"?",
          "options": [
            "يَتَمَ يَيْتِمُ",
            "يَسَّرَ يُيَسِّرُ",
            "يَسَرَ يَيْسِرُ",
            "يَفَعَ يَيْفَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to become an orphan",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَتَمَ يَيْتِمُ mean?",
          "options": [
            "to become an orphan",
            "to make easy",
            "to be easy",
            "to reach adolescence"
          ],
          "correct": 0
        },
        {
          "title": "to become an orphan (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَتَمَ يَيْتِمُ?",
          "options": [
            "يُتْمًا",
            "تَيْسِيْرًا",
            "مَيْسِرًا",
            "يَفْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to make easy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make easy\"?",
          "options": [
            "يَسَّرَ يُيَسِّرُ",
            "يَسَرَ يَيْسِرُ",
            "يَفَعَ يَيْفَعُ",
            "يَقِظَ يَيْقَظُ"
          ],
          "correct": 0
        },
        {
          "title": "to make easy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَسَّرَ يُيَسِّرُ mean?",
          "options": [
            "to make easy",
            "to be easy",
            "to reach adolescence",
            "to be alert"
          ],
          "correct": 0
        },
        {
          "title": "to make easy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَسَّرَ يُيَسِّرُ?",
          "options": [
            "تَيْسِيْرًا",
            "مَيْسِرًا",
            "يَفْعًا",
            "يَقَظًا"
          ],
          "correct": 0
        },
        {
          "title": "to be easy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be easy\"?",
          "options": [
            "يَسَرَ يَيْسِرُ",
            "يَفَعَ يَيْفَعُ",
            "يَقِظَ يَيْقَظُ",
            "يَقِنَ يَيْقَنُ"
          ],
          "correct": 0
        },
        {
          "title": "to be easy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَسَرَ يَيْسِرُ mean?",
          "options": [
            "to be easy",
            "to reach adolescence",
            "to be alert",
            "to be sure"
          ],
          "correct": 0
        },
        {
          "title": "to be easy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَسَرَ يَيْسِرُ?",
          "options": [
            "مَيْسِرًا",
            "يَفْعًا",
            "يَقَظًا",
            "يَقْنًا"
          ],
          "correct": 0
        },
        {
          "title": "to reach adolescence",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reach adolescence\"?",
          "options": [
            "يَفَعَ يَيْفَعُ",
            "يَقِظَ يَيْقَظُ",
            "يَقِنَ يَيْقَنُ",
            "يَنَعَ يَيْنَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to reach adolescence",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَفَعَ يَيْفَعُ mean?",
          "options": [
            "to reach adolescence",
            "to be alert",
            "to be sure",
            "to be ripe"
          ],
          "correct": 0
        },
        {
          "title": "to reach adolescence (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَفَعَ يَيْفَعُ?",
          "options": [
            "يَفْعًا",
            "يَقَظًا",
            "يَقْنًا",
            "يَنْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to be alert",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be alert\"?",
          "options": [
            "يَقِظَ يَيْقَظُ",
            "يَقِنَ يَيْقَنُ",
            "يَنَعَ يَيْنَعُ",
            "يَئِسَ يَيْأَسُ"
          ],
          "correct": 0
        },
        {
          "title": "to be alert",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَقِظَ يَيْقَظُ mean?",
          "options": [
            "to be alert",
            "to be sure",
            "to be ripe",
            "to give up hope"
          ],
          "correct": 0
        },
        {
          "title": "to be alert (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَقِظَ يَيْقَظُ?",
          "options": [
            "يَقَظًا",
            "يَقْنًا",
            "يَنْعًا",
            "يَأْسًا"
          ],
          "correct": 0
        },
        {
          "title": "to be sure",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be sure\"?",
          "options": [
            "يَقِنَ يَيْقَنُ",
            "يَنَعَ يَيْنَعُ",
            "يَئِسَ يَيْأَسُ",
            "اِتَّبَسَ يَتَّبِسُ"
          ],
          "correct": 0
        },
        {
          "title": "to be sure",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَقِنَ يَيْقَنُ mean?",
          "options": [
            "to be sure",
            "to be ripe",
            "to give up hope",
            "to become dry"
          ],
          "correct": 0
        },
        {
          "title": "to be sure (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَقِنَ يَيْقَنُ?",
          "options": [
            "يَقْنًا",
            "يَنْعًا",
            "يَأْسًا",
            "اِتِّبَاسًا"
          ],
          "correct": 0
        },
        {
          "title": "to be ripe",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be ripe\"?",
          "options": [
            "يَنَعَ يَيْنَعُ",
            "يَئِسَ يَيْأَسُ",
            "اِتَّبَسَ يَتَّبِسُ",
            "اِتَّسَرَ يَتَّسِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to be ripe",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَنَعَ يَيْنَعُ mean?",
          "options": [
            "to be ripe",
            "to give up hope",
            "to become dry",
            "to be easy"
          ],
          "correct": 0
        },
        {
          "title": "to be ripe (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَنَعَ يَيْنَعُ?",
          "options": [
            "يَنْعًا",
            "يَأْسًا",
            "اِتِّبَاسًا",
            "اِتِّسَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give up hope\"?",
          "options": [
            "يَئِسَ يَيْأَسُ",
            "اِتَّبَسَ يَتَّبِسُ",
            "اِتَّسَرَ يَتَّسِرُ",
            "اِسْتَيْسَرَ يَسْتَيْسِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَئِسَ يَيْأَسُ mean?",
          "options": [
            "to give up hope",
            "to become dry",
            "to be easy",
            "to be easy"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَئِسَ يَيْأَسُ?",
          "options": [
            "يَأْسًا",
            "اِتِّبَاسًا",
            "اِتِّسَارًا",
            "اِسْتِيْسَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to become dry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to become dry\"?",
          "options": [
            "اِتَّبَسَ يَتَّبِسُ",
            "اِتَّسَرَ يَتَّسِرُ",
            "اِسْتَيْسَرَ يَسْتَيْسِرُ",
            "اِسْتَيْقَظَ يَسْتَيْقِظُ"
          ],
          "correct": 0
        },
        {
          "title": "to become dry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِتَّبَسَ يَتَّبِسُ mean?",
          "options": [
            "to become dry",
            "to be easy",
            "to be easy",
            "to wake up"
          ],
          "correct": 0
        },
        {
          "title": "to become dry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِتَّبَسَ يَتَّبِسُ?",
          "options": [
            "اِتِّبَاسًا",
            "اِتِّسَارًا",
            "اِسْتِيْسَارًا",
            "اِسْتِيْقَاظًا"
          ],
          "correct": 0
        },
        {
          "title": "to be easy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be easy\"?",
          "options": [
            "اِتَّسَرَ يَتَّسِرُ",
            "اِسْتَيْسَرَ يَسْتَيْسِرُ",
            "اِسْتَيْقَظَ يَسْتَيْقِظُ",
            "اِسْتَيْقَنَ يَسْتَيْقِنُ"
          ],
          "correct": 0
        },
        {
          "title": "to be easy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِتَّسَرَ يَتَّسِرُ mean?",
          "options": [
            "to be easy",
            "to be easy",
            "to wake up",
            "to ascertain"
          ],
          "correct": 0
        },
        {
          "title": "to be easy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِتَّسَرَ يَتَّسِرُ?",
          "options": [
            "اِتِّسَارًا",
            "اِسْتِيْسَارًا",
            "اِسْتِيْقَاظًا",
            "اِسْتِيْقَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to be easy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be easy\"?",
          "options": [
            "اِسْتَيْسَرَ يَسْتَيْسِرُ",
            "اِسْتَيْقَظَ يَسْتَيْقِظُ",
            "اِسْتَيْقَنَ يَسْتَيْقِنُ",
            "اِسْتَيْأَسَ يَسْتَيْئِسُ"
          ],
          "correct": 0
        },
        {
          "title": "to be easy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَيْسَرَ يَسْتَيْسِرُ mean?",
          "options": [
            "to be easy",
            "to wake up",
            "to ascertain",
            "to give up hope"
          ],
          "correct": 0
        },
        {
          "title": "to be easy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَيْسَرَ يَسْتَيْسِرُ?",
          "options": [
            "اِسْتِيْسَارًا",
            "اِسْتِيْقَاظًا",
            "اِسْتِيْقَانًا",
            "اِسْتِيْئَاسًا"
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
            "اِسْتَيْقَنَ يَسْتَيْقِنُ",
            "اِسْتَيْأَسَ يَسْتَيْئِسُ",
            "أَيْبَسَ يُوْبِسُ"
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
            "to ascertain",
            "to give up hope",
            "to make dry"
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
            "اِسْتِيْقَانًا",
            "اِسْتِيْئَاسًا",
            "إِيْبَاسًا"
          ],
          "correct": 0
        },
        {
          "title": "to ascertain",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to ascertain\"?",
          "options": [
            "اِسْتَيْقَنَ يَسْتَيْقِنُ",
            "اِسْتَيْأَسَ يَسْتَيْئِسُ",
            "أَيْبَسَ يُوْبِسُ",
            "أَيْقَظَ يُوْقِظُ"
          ],
          "correct": 0
        },
        {
          "title": "to ascertain",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَيْقَنَ يَسْتَيْقِنُ mean?",
          "options": [
            "to ascertain",
            "to give up hope",
            "to make dry",
            "to awaken"
          ],
          "correct": 0
        },
        {
          "title": "to ascertain (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَيْقَنَ يَسْتَيْقِنُ?",
          "options": [
            "اِسْتِيْقَانًا",
            "اِسْتِيْئَاسًا",
            "إِيْبَاسًا",
            "إِيْقَاظًا"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give up hope\"?",
          "options": [
            "اِسْتَيْأَسَ يَسْتَيْئِسُ",
            "أَيْبَسَ يُوْبِسُ",
            "أَيْقَظَ يُوْقِظُ",
            "أَيْقَنَ يُوْقِنُ"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَيْأَسَ يَسْتَيْئِسُ mean?",
          "options": [
            "to give up hope",
            "to make dry",
            "to awaken",
            "to be convinced"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَيْأَسَ يَسْتَيْئِسُ?",
          "options": [
            "اِسْتِيْئَاسًا",
            "إِيْبَاسًا",
            "إِيْقَاظًا",
            "إِيْقَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to make dry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make dry\"?",
          "options": [
            "أَيْبَسَ يُوْبِسُ",
            "أَيْقَظَ يُوْقِظُ",
            "أَيْقَنَ يُوْقِنُ",
            "أَيْنَعَ يُوْنِعُ"
          ],
          "correct": 0
        },
        {
          "title": "to make dry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَيْبَسَ يُوْبِسُ mean?",
          "options": [
            "to make dry",
            "to awaken",
            "to be convinced",
            "to make ripe"
          ],
          "correct": 0
        },
        {
          "title": "to make dry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَيْبَسَ يُوْبِسُ?",
          "options": [
            "إِيْبَاسًا",
            "إِيْقَاظًا",
            "إِيْقَانًا",
            "إِيْنَاعًا"
          ],
          "correct": 0
        },
        {
          "title": "to awaken",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to awaken\"?",
          "options": [
            "أَيْقَظَ يُوْقِظُ",
            "أَيْقَنَ يُوْقِنُ",
            "أَيْنَعَ يُوْنِعُ",
            "تَيَاسَرَ يَتَيَاسَرُ"
          ],
          "correct": 0
        },
        {
          "title": "to awaken",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَيْقَظَ يُوْقِظُ mean?",
          "options": [
            "to awaken",
            "to be convinced",
            "to make ripe",
            "to deal with ease"
          ],
          "correct": 0
        },
        {
          "title": "to awaken (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَيْقَظَ يُوْقِظُ?",
          "options": [
            "إِيْقَاظًا",
            "إِيْقَانًا",
            "إِيْنَاعًا",
            "تَيَاسُرًا"
          ],
          "correct": 0
        },
        {
          "title": "to be convinced",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be convinced\"?",
          "options": [
            "أَيْقَنَ يُوْقِنُ",
            "أَيْنَعَ يُوْنِعُ",
            "تَيَاسَرَ يَتَيَاسَرُ",
            "تَيَامَنَ يَتَيَامَنُ"
          ],
          "correct": 0
        },
        {
          "title": "to be convinced",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَيْقَنَ يُوْقِنُ mean?",
          "options": [
            "to be convinced",
            "to make ripe",
            "to deal with ease",
            "to start from the right"
          ],
          "correct": 0
        },
        {
          "title": "to be convinced (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَيْقَنَ يُوْقِنُ?",
          "options": [
            "إِيْقَانًا",
            "إِيْنَاعًا",
            "تَيَاسُرًا",
            "تَيَامُنًا"
          ],
          "correct": 0
        },
        {
          "title": "to make ripe",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make ripe\"?",
          "options": [
            "أَيْنَعَ يُوْنِعُ",
            "تَيَاسَرَ يَتَيَاسَرُ",
            "تَيَامَنَ يَتَيَامَنُ",
            "تَيَسَّرَ يَتَيَسَّرُ"
          ],
          "correct": 0
        },
        {
          "title": "to make ripe",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَيْنَعَ يُوْنِعُ mean?",
          "options": [
            "to make ripe",
            "to deal with ease",
            "to start from the right",
            "to be easy"
          ],
          "correct": 0
        },
        {
          "title": "to make ripe (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَيْنَعَ يُوْنِعُ?",
          "options": [
            "إِيْنَاعًا",
            "تَيَاسُرًا",
            "تَيَامُنًا",
            "تَيَسُّرًا"
          ],
          "correct": 0
        },
        {
          "title": "to deal with ease",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to deal with ease\"?",
          "options": [
            "تَيَاسَرَ يَتَيَاسَرُ",
            "تَيَامَنَ يَتَيَامَنُ",
            "تَيَسَّرَ يَتَيَسَّرُ",
            "تَيَمَّنَ يَتَيَمَّنُ"
          ],
          "correct": 0
        },
        {
          "title": "to deal with ease",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَيَاسَرَ يَتَيَاسَرُ mean?",
          "options": [
            "to deal with ease",
            "to start from the right",
            "to be easy",
            "to see a good omen"
          ],
          "correct": 0
        },
        {
          "title": "to deal with ease (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَيَاسَرَ يَتَيَاسَرُ?",
          "options": [
            "تَيَاسُرًا",
            "تَيَامُنًا",
            "تَيَسُّرًا",
            "تَيَمُّنًا"
          ],
          "correct": 0
        },
        {
          "title": "to start from the right",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to start from the right\"?",
          "options": [
            "تَيَامَنَ يَتَيَامَنُ",
            "تَيَسَّرَ يَتَيَسَّرُ",
            "تَيَمَّنَ يَتَيَمَّنُ",
            "يَاسَرَ يُيَاسِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to start from the right",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَيَامَنَ يَتَيَامَنُ mean?",
          "options": [
            "to start from the right",
            "to be easy",
            "to see a good omen",
            "to deal with ease"
          ],
          "correct": 0
        },
        {
          "title": "to start from the right (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَيَامَنَ يَتَيَامَنُ?",
          "options": [
            "تَيَامُنًا",
            "تَيَسُّرًا",
            "تَيَمُّنًا",
            "مُيَاسَرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be easy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be easy\"?",
          "options": [
            "تَيَسَّرَ يَتَيَسَّرُ",
            "تَيَمَّنَ يَتَيَمَّنُ",
            "يَاسَرَ يُيَاسِرُ",
            "يَامَنَ يُيَامِنُ"
          ],
          "correct": 0
        },
        {
          "title": "to be easy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَيَسَّرَ يَتَيَسَّرُ mean?",
          "options": [
            "to be easy",
            "to see a good omen",
            "to deal with ease",
            "to go to the right"
          ],
          "correct": 0
        },
        {
          "title": "to be easy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَيَسَّرَ يَتَيَسَّرُ?",
          "options": [
            "تَيَسُّرًا",
            "تَيَمُّنًا",
            "مُيَاسَرَةً",
            "مُيَامَنَةً"
          ],
          "correct": 0
        }
      ]
    }
  ]
};

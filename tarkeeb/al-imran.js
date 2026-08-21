/**
 * sūrat āl ʿimrān (The Family of Imran) — chapter 3
 * Dependency-graph data transcribed from the Quranic Arabic Corpus
 * (corpus.quran.com), read graph by graph off the rendered diagrams.
 *
 * Coverage: verses 1–10 of 200 — 32 graphs.
 *
 * See tarkeeb-lib.js for the shared tag tables and helper functions,
 * and for the full description of this schema.
 *
 * Corpus data © the Quranic Arabic Corpus project (University of Leeds),
 * released under the GNU public licence.
 */

export const surah = {
  "chapter": 3,
  "name": {
    "ar": "سورة آل عمران",
    "translit": "sūrat āl ʿimrān",
    "en": "The Family of Imran"
  },
  "coverage": "verses 1–10 of 200",
  "graphCount": 32,
  "graphs": [
    {
      "id": "3:1",
      "title": "3:1",
      "words": [
        {
          "ar": "الٓمٓ",
          "ref": "(3:1:1)",
          "translit": "alif-lam-meem",
          "gloss": "Alif Laam Meem",
          "segments": [
            {
              "id": "i1",
              "pos": "INL",
              "posName": "Quranic initials"
            }
          ],
          "morphology": {
            "location": "3:1:1",
            "root": null,
            "irab": "حروف مقطعة",
            "segments": [
              {
                "tag": "INL",
                "description": "Quranic initials"
              }
            ]
          }
        }
      ],
      "phrases": [],
      "edges": [],
      "attachments": []
    },
    {
      "id": "3:2",
      "title": "3:2",
      "words": [
        {
          "ar": "ٱللَّهُ",
          "ref": "(3:2:1)",
          "translit": "al-lahu",
          "gloss": "Allah -",
          "segments": [
            {
              "id": "pn",
              "pos": "PN",
              "posName": "nominative proper noun → Allah",
              "root": "أ ل ه"
            }
          ],
          "morphology": {
            "location": "3:2:1",
            "root": "أ ل ه",
            "irab": "لفظ الجلالة مرفوع",
            "segments": [
              {
                "tag": "PN",
                "description": "nominative proper noun → Allah"
              }
            ]
          }
        },
        {
          "ar": "لَآ",
          "ref": "(3:2:2)",
          "translit": "lā",
          "gloss": "(there is) no",
          "segments": [
            {
              "id": "neg",
              "pos": "NEG",
              "posName": "negative particle"
            }
          ],
          "morphology": {
            "location": "3:2:2",
            "root": null,
            "irab": "نافية تعمل عمل «أن»",
            "segments": [
              {
                "tag": "NEG",
                "description": "negative particle"
              }
            ]
          }
        },
        {
          "ar": "إِلَٰهَ",
          "ref": "(3:2:3)",
          "translit": "ilāha",
          "gloss": "God",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "accusative masculine singular noun",
              "root": "أ ل ه"
            }
          ],
          "morphology": {
            "location": "3:2:3",
            "root": "أ ل ه",
            "irab": "اسم منصوب",
            "segments": [
              {
                "tag": "N",
                "description": "accusative masculine singular noun"
              }
            ]
          }
        },
        {
          "ar": "(*)",
          "elided": true,
          "segments": [
            {
              "id": "e1",
              "pos": "N"
            }
          ]
        },
        {
          "ar": "إِلَّا",
          "ref": "(3:2:4)",
          "translit": "illā",
          "gloss": "except",
          "segments": [
            {
              "id": "exp",
              "pos": "EXP",
              "posName": "exceptive particle"
            }
          ],
          "morphology": {
            "location": "3:2:4",
            "root": null,
            "irab": "أداة استثناء",
            "segments": [
              {
                "tag": "EXP",
                "description": "exceptive particle"
              }
            ]
          }
        },
        {
          "ar": "هُوَ",
          "ref": "(3:2:5)",
          "translit": "huwa",
          "gloss": "Him,",
          "segments": [
            {
              "id": "pr",
              "pos": "PRON",
              "posName": "3rd person masculine singular personal pronoun"
            }
          ],
          "morphology": {
            "location": "3:2:5",
            "root": null,
            "irab": "ضمير منفصل",
            "segments": [
              {
                "tag": "PRON",
                "description": "3rd person masculine singular personal pronoun"
              }
            ]
          }
        },
        {
          "ar": "(هُوَ)",
          "elided": true,
          "segments": [
            {
              "id": "e2",
              "pos": "PRON"
            }
          ]
        },
        {
          "ar": "ٱلْحَىُّ",
          "ref": "(3:2:6)",
          "translit": "l-ḥayu",
          "gloss": "the Ever-Living",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "nominative masculine singular noun",
              "root": "ح ي ي"
            }
          ],
          "morphology": {
            "location": "3:2:6",
            "root": "ح ي ي",
            "irab": "اسم مرفوع",
            "segments": [
              {
                "tag": "N",
                "description": "nominative masculine singular noun"
              }
            ]
          }
        },
        {
          "ar": "ٱلْقَيُّومُ",
          "ref": "(3:2:7)",
          "translit": "l-qayūmu",
          "gloss": "the Sustainer of all that exists.",
          "segments": [
            {
              "id": "adj",
              "pos": "ADJ",
              "posName": "nominative masculine singular adjective",
              "root": "ق و م"
            }
          ],
          "morphology": {
            "location": "3:2:7",
            "root": "ق و م",
            "irab": "صفة مرفوعة",
            "segments": [
              {
                "tag": "ADJ",
                "description": "nominative masculine singular adjective"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "ns1",
          "type": "NS",
          "members": [
            "neg",
            "n1",
            "e1",
            "exp",
            "pr"
          ]
        }
      ],
      "edges": [
        {
          "dep": "n1",
          "head": "neg",
          "rel": "اسم «لا»",
          "note": "إِلَٰهَ is the noun that لَا governs — accusative, and لَا here works like إِنَّ."
        },
        {
          "dep": "e1",
          "head": "neg",
          "rel": "خبر «لا»",
          "note": "The predicate of لَا is left unsaid; the corpus gives it its own grey node."
        },
        {
          "dep": "exp",
          "head": "pr",
          "rel": "مستثنى",
          "labelAt": "pr",
          "note": "هُوَ is what is excepted by إِلَّا — the arc runs between the two."
        },
        {
          "dep": "pr",
          "head": "e1",
          "rel": "بدل",
          "note": "هُوَ stands in for that unsaid predicate — apposition to it."
        },
        {
          "dep": "n2",
          "head": "e2",
          "rel": "خبر",
          "note": "ٱلْحَىُّ is the predicate of a resumed هُوَ, which the corpus supplies as a grey node."
        },
        {
          "dep": "adj",
          "head": "n2",
          "rel": "صفة",
          "note": "ٱلْقَيُّومُ describes ٱلْحَىُّ."
        }
      ],
      "attachments": [
        {
          "dep": "ns1",
          "head": "pn",
          "rel": "خبر",
          "note": "The whole sentence لَا إِلَٰهَ إِلَّا هُوَ is the predicate of ٱللَّهُ — the arc leaves the NS node."
        }
      ]
    },
    {
      "id": "3:3a",
      "title": "3:3 · 1–4",
      "words": [
        {
          "ar": "نَزَّلَ",
          "ref": "(3:3:1)",
          "translit": "nazzala",
          "gloss": "He revealed",
          "segments": [
            {
              "id": "v",
              "pos": "V",
              "posName": "3rd person masculine singular (form II) perfect verb",
              "root": "ن ز ل"
            }
          ],
          "morphology": {
            "location": "3:3:1",
            "root": "ن ز ل",
            "irab": "فعل ماض",
            "segments": [
              {
                "tag": "V",
                "description": "3rd person masculine singular (form II) perfect verb"
              }
            ]
          }
        },
        {
          "ar": "(هُوَ)",
          "elided": true,
          "segments": [
            {
              "id": "s",
              "pos": "PRON"
            }
          ]
        },
        {
          "ar": "عَلَيْكَ",
          "ref": "(3:3:2)",
          "translit": "ʿalayka",
          "gloss": "to you",
          "segments": [
            {
              "id": "p1",
              "pos": "P",
              "posName": "preposition"
            },
            {
              "id": "k",
              "pos": "PRON",
              "posName": "2nd person masculine singular object pronoun"
            }
          ],
          "morphology": {
            "location": "3:3:2",
            "root": null,
            "irab": "جار ومجرور",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              },
              {
                "tag": "PRON",
                "description": "2nd person masculine singular object pronoun"
              }
            ]
          }
        },
        {
          "ar": "ٱلْكِتَٰبَ",
          "ref": "(3:3:3)",
          "translit": "l-kitāba",
          "gloss": "the Book",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "accusative masculine noun",
              "root": "ك ت ب"
            }
          ],
          "morphology": {
            "location": "3:3:3",
            "root": "ك ت ب",
            "irab": "اسم منصوب",
            "segments": [
              {
                "tag": "N",
                "description": "accusative masculine noun"
              }
            ]
          }
        },
        {
          "ar": "(*)",
          "elided": true,
          "segments": [
            {
              "id": "e1",
              "pos": "N"
            }
          ]
        },
        {
          "ar": "بِٱلْحَقِّ",
          "ref": "(3:3:4)",
          "translit": "bil-ḥaqi",
          "gloss": "in [the] truth",
          "segments": [
            {
              "id": "p2",
              "pos": "P",
              "posName": "prefixed preposition bi",
              "root": "ح ق ق"
            },
            {
              "id": "n2",
              "pos": "N",
              "posName": "genitive masculine noun",
              "root": "ح ق ق"
            }
          ],
          "morphology": {
            "location": "3:3:4",
            "root": "ح ق ق",
            "irab": "جار ومجرور",
            "segments": [
              {
                "tag": "P",
                "description": "prefixed preposition bi"
              },
              {
                "tag": "N",
                "description": "genitive masculine noun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p1",
            "k"
          ]
        },
        {
          "id": "pp2",
          "type": "PP",
          "members": [
            "p2",
            "n2"
          ]
        }
      ],
      "edges": [
        {
          "dep": "s",
          "head": "v",
          "rel": "فاعل",
          "note": "The subject is the hidden هُوَ."
        },
        {
          "dep": "k",
          "head": "p1",
          "rel": "مجرور",
          "note": "كَ is governed by عَلَىٰ — the arrow runs from the governed word to the preposition."
        },
        {
          "dep": "n1",
          "head": "v",
          "rel": "مفعول به",
          "note": "ٱلْكِتَٰبَ is what was revealed — the object of نَزَّلَ."
        },
        {
          "dep": "e1",
          "head": "n1",
          "rel": "حال",
          "note": "An unsaid word describing the state of ٱلْكِتَٰبَ; بِٱلْحَقِّ hangs on it."
        },
        {
          "dep": "n2",
          "head": "p2",
          "rel": "مجرور",
          "note": "ٱلْحَقِّ is governed by بِ."
        }
      ],
      "attachments": [
        {
          "dep": "pp1",
          "head": "v",
          "rel": "متعلق",
          "note": "عَلَيْكَ hangs on the verb نَزَّلَ."
        },
        {
          "dep": "pp2",
          "head": "e1",
          "rel": "متعلق",
          "note": "بِٱلْحَقِّ hangs on that unsaid حال, not on the verb."
        }
      ]
    },
    {
      "id": "3:3b",
      "title": "3:3 · 5–8",
      "words": [
        {
          "ar": "نَزَّلَ",
          "ref": "(3:3:1)",
          "translit": "nazzala",
          "gloss": "He revealed",
          "context": true,
          "segments": [
            {
              "id": "ctx",
              "pos": "V",
              "posName": "3rd person masculine singular (form II) perfect verb",
              "root": "ن ز ل"
            }
          ],
          "morphology": {
            "location": "3:3:1",
            "root": "ن ز ل",
            "irab": "فعل ماض",
            "segments": [
              {
                "tag": "V",
                "description": "3rd person masculine singular (form II) perfect verb"
              }
            ]
          }
        },
        {
          "ar": "مُصَدِّقًا",
          "ref": "(3:3:5)",
          "translit": "muṣaddiqan",
          "gloss": "confirming",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "accusative masculine indefinite (form II) active participle",
              "root": "ص د ق"
            }
          ],
          "morphology": {
            "location": "3:3:5",
            "root": "ص د ق",
            "irab": "اسم منصوب",
            "segments": [
              {
                "tag": "N",
                "description": "accusative masculine indefinite (form II) active participle"
              }
            ]
          }
        },
        {
          "ar": "لِّمَا",
          "ref": "(3:3:6)",
          "translit": "limā",
          "gloss": "that which",
          "segments": [
            {
              "id": "p",
              "pos": "P",
              "posName": "prefixed preposition lām"
            },
            {
              "id": "rl",
              "pos": "REL",
              "posName": "relative pronoun"
            }
          ],
          "morphology": {
            "location": "3:3:6",
            "root": null,
            "irab": "جار ومجرور",
            "segments": [
              {
                "tag": "P",
                "description": "prefixed preposition lām"
              },
              {
                "tag": "REL",
                "description": "relative pronoun"
              }
            ]
          }
        },
        {
          "ar": "(*)",
          "elided": true,
          "segments": [
            {
              "id": "e1",
              "pos": "N"
            }
          ]
        },
        {
          "ar": "بَيْنَ",
          "ref": "(3:3:7)",
          "translit": "bayna",
          "gloss": "(was)",
          "segments": [
            {
              "id": "loc",
              "pos": "LOC",
              "posName": "accusative location adverb",
              "root": "ب ي ن"
            }
          ],
          "morphology": {
            "location": "3:3:7",
            "root": "ب ي ن",
            "irab": "ظرف مكان منصوب",
            "segments": [
              {
                "tag": "LOC",
                "description": "accusative location adverb"
              }
            ]
          }
        },
        {
          "ar": "يَدَيْهِ",
          "ref": "(3:3:8)",
          "translit": "yadayhi",
          "gloss": "before it,",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "genitive feminine dual noun",
              "root": "ي د ي"
            },
            {
              "id": "h",
              "pos": "PRON",
              "posName": "3rd person masculine singular possessive pronoun",
              "root": "ي د ي"
            }
          ],
          "morphology": {
            "location": "3:3:8",
            "root": "ي د ي",
            "irab": "اسم مجرور والهاء ضمير متصل في محل جر بالاضافة",
            "segments": [
              {
                "tag": "N",
                "description": "genitive feminine dual noun"
              },
              {
                "tag": "PRON",
                "description": "3rd person masculine singular possessive pronoun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p",
            "rl"
          ]
        }
      ],
      "edges": [
        {
          "dep": "n1",
          "head": "ctx",
          "rel": "حال",
          "note": "مُصَدِّقًا describes the state of the Book as it was revealed."
        },
        {
          "dep": "rl",
          "head": "p",
          "rel": "مجرور",
          "note": "مَا is governed by the prefixed لِ."
        },
        {
          "dep": "e1",
          "head": "rl",
          "rel": "صلة",
          "note": "The relative clause of مَا is an unsaid word, which بَيْنَ then hangs on."
        },
        {
          "dep": "loc",
          "head": "e1",
          "rel": "متعلق",
          "note": "بَيْنَ attaches to that unsaid word inside the relative clause."
        },
        {
          "dep": "n2",
          "head": "loc",
          "rel": "مضاف إليه",
          "note": "يَدَيْ is the second term after بَيْنَ."
        },
        {
          "dep": "h",
          "head": "n2",
          "rel": "مضاف إليه",
          "note": "The attached هِ completes يَدَيْهِ — \"its hands\", i.e. what came before it."
        }
      ],
      "attachments": [
        {
          "dep": "pp1",
          "head": "n1",
          "rel": "متعلق",
          "note": "لِمَا hangs on مُصَدِّقًا — \"confirming that which…\"."
        }
      ]
    },
    {
      "id": "3:3c",
      "title": "3:3 · 9–11",
      "words": [
        {
          "ar": "نَزَّلَ",
          "ref": "(3:3:1)",
          "translit": "nazzala",
          "gloss": "He revealed",
          "context": true,
          "segments": [
            {
              "id": "ctx",
              "pos": "V",
              "posName": "3rd person masculine singular (form II) perfect verb",
              "root": "ن ز ل"
            }
          ],
          "morphology": {
            "location": "3:3:1",
            "root": "ن ز ل",
            "irab": "فعل ماض",
            "segments": [
              {
                "tag": "V",
                "description": "3rd person masculine singular (form II) perfect verb"
              }
            ]
          }
        },
        {
          "ar": "وَأَنزَلَ",
          "ref": "(3:3:9)",
          "translit": "wa-anzala",
          "gloss": "and He revealed",
          "segments": [
            {
              "id": "cj",
              "pos": "CONJ",
              "posName": "prefixed conjunction wa (and)",
              "root": "ن ز ل"
            },
            {
              "id": "v",
              "pos": "V",
              "posName": "3rd person masculine singular (form IV) perfect verb",
              "root": "ن ز ل"
            }
          ],
          "morphology": {
            "location": "3:3:9",
            "root": "ن ز ل",
            "irab": "الواو عاطفة / فعل ماض",
            "segments": [
              {
                "tag": "CONJ",
                "description": "prefixed conjunction wa (and)"
              },
              {
                "tag": "V",
                "description": "3rd person masculine singular (form IV) perfect verb"
              }
            ]
          }
        },
        {
          "ar": "(هُوَ)",
          "elided": true,
          "segments": [
            {
              "id": "s",
              "pos": "PRON"
            }
          ]
        },
        {
          "ar": "ٱلتَّوْرَىٰةَ",
          "ref": "(3:3:10)",
          "translit": "l-tawrāta",
          "gloss": "the Taurat",
          "segments": [
            {
              "id": "pn1",
              "pos": "PN",
              "posName": "accusative proper noun → Torah"
            }
          ],
          "morphology": {
            "location": "3:3:10",
            "root": null,
            "irab": "اسم علم منصوب",
            "segments": [
              {
                "tag": "PN",
                "description": "accusative proper noun → Torah"
              }
            ]
          }
        },
        {
          "ar": "وَٱلْإِنجِيلَ",
          "ref": "(3:3:11)",
          "translit": "wal-injīla",
          "gloss": "and the Injeel,",
          "segments": [
            {
              "id": "cj2",
              "pos": "CONJ",
              "posName": "prefixed conjunction wa (and)"
            },
            {
              "id": "pn2",
              "pos": "PN",
              "posName": "accusative proper noun → Injeel"
            }
          ],
          "morphology": {
            "location": "3:3:11",
            "root": null,
            "irab": "الواو عاطفة / اسم علم منصوب",
            "segments": [
              {
                "tag": "CONJ",
                "description": "prefixed conjunction wa (and)"
              },
              {
                "tag": "PN",
                "description": "accusative proper noun → Injeel"
              }
            ]
          }
        }
      ],
      "phrases": [],
      "edges": [
        {
          "dep": "v",
          "head": "ctx",
          "rel": "معطوف",
          "note": "أَنزَلَ is coordinated onto نَزَّلَ by the وَ."
        },
        {
          "dep": "s",
          "head": "v",
          "rel": "فاعل",
          "note": "Its subject is again the hidden هُوَ."
        },
        {
          "dep": "pn1",
          "head": "v",
          "rel": "مفعول به",
          "note": "ٱلتَّوْرَىٰةَ is the object of أَنزَلَ."
        },
        {
          "dep": "pn2",
          "head": "pn1",
          "rel": "معطوف",
          "note": "ٱلْإِنجِيلَ is coordinated onto ٱلتَّوْرَىٰةَ."
        }
      ],
      "attachments": []
    },
    {
      "id": "3:4a",
      "title": "3:4 · 1–4",
      "words": [
        {
          "ar": "وَأَنزَلَ",
          "ref": "(3:3:9)",
          "translit": "wa-anzala",
          "gloss": "and He revealed",
          "context": true,
          "segments": [
            {
              "id": "cjx",
              "pos": "CONJ",
              "posName": "prefixed conjunction wa (and)",
              "root": "ن ز ل"
            },
            {
              "id": "ctx",
              "pos": "V",
              "posName": "3rd person masculine singular (form IV) perfect verb",
              "root": "ن ز ل"
            }
          ],
          "morphology": {
            "location": "3:3:9",
            "root": "ن ز ل",
            "irab": "الواو عاطفة / فعل ماض",
            "segments": [
              {
                "tag": "CONJ",
                "description": "prefixed conjunction wa (and)"
              },
              {
                "tag": "V",
                "description": "3rd person masculine singular (form IV) perfect verb"
              }
            ]
          }
        },
        {
          "ar": "مِن",
          "ref": "(3:4:1)",
          "translit": "min",
          "gloss": "From",
          "segments": [
            {
              "id": "p1",
              "pos": "P",
              "posName": "preposition"
            }
          ],
          "morphology": {
            "location": "3:4:1",
            "root": null,
            "irab": "حرف جر",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              }
            ]
          }
        },
        {
          "ar": "قَبْلُ",
          "ref": "(3:4:2)",
          "translit": "qablu",
          "gloss": "before (this),",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "genitive noun",
              "root": "ق ب ل"
            }
          ],
          "morphology": {
            "location": "3:4:2",
            "root": "ق ب ل",
            "irab": "اسم مجرور",
            "segments": [
              {
                "tag": "N",
                "description": "genitive noun"
              }
            ]
          }
        },
        {
          "ar": "(*)",
          "elided": true,
          "segments": [
            {
              "id": "e1",
              "pos": "N"
            }
          ]
        },
        {
          "ar": "هُدًى",
          "ref": "(3:4:3)",
          "translit": "hudan",
          "gloss": "(as) guidance",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "accusative masculine indefinite noun",
              "root": "ه د ي"
            }
          ],
          "morphology": {
            "location": "3:4:3",
            "root": "ه د ي",
            "irab": "اسم منصوب",
            "segments": [
              {
                "tag": "N",
                "description": "accusative masculine indefinite noun"
              }
            ]
          }
        },
        {
          "ar": "(*)",
          "elided": true,
          "segments": [
            {
              "id": "e2",
              "pos": "ADJ"
            }
          ]
        },
        {
          "ar": "لِّلنَّاسِ",
          "ref": "(3:4:4)",
          "translit": "lilnnāsi",
          "gloss": "for the mankind.",
          "segments": [
            {
              "id": "p2",
              "pos": "P",
              "posName": "prefixed preposition lām",
              "root": "ن و س"
            },
            {
              "id": "n3",
              "pos": "N",
              "posName": "genitive masculine plural noun",
              "root": "ن و س"
            }
          ],
          "morphology": {
            "location": "3:4:4",
            "root": "ن و س",
            "irab": "جار ومجرور",
            "segments": [
              {
                "tag": "P",
                "description": "prefixed preposition lām"
              },
              {
                "tag": "N",
                "description": "genitive masculine plural noun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p1",
            "n1"
          ]
        },
        {
          "id": "pp2",
          "type": "PP",
          "members": [
            "p2",
            "n3"
          ]
        }
      ],
      "edges": [
        {
          "dep": "n1",
          "head": "p1",
          "rel": "مجرور",
          "note": "قَبْلُ is governed by مِن."
        },
        {
          "dep": "e1",
          "head": "n1",
          "rel": "مضاف إليه",
          "note": "The second term of مِن قَبْلُ is left unsaid — \"from before [it]\"."
        },
        {
          "dep": "n2",
          "head": "ctx",
          "rel": "حال",
          "note": "هُدًى describes the state in which the books were sent down."
        },
        {
          "dep": "e2",
          "head": "n2",
          "rel": "صفة",
          "note": "An unsaid adjective describing هُدًى, which لِلنَّاسِ then hangs on."
        },
        {
          "dep": "n3",
          "head": "p2",
          "rel": "مجرور",
          "note": "ٱلنَّاسِ is governed by the prefixed لِ."
        }
      ],
      "attachments": [
        {
          "dep": "pp1",
          "head": "ctx",
          "rel": "متعلق",
          "note": "مِن قَبْلُ hangs on the verb أَنزَلَ of the previous stretch."
        },
        {
          "dep": "pp2",
          "head": "e2",
          "rel": "متعلق",
          "note": "لِلنَّاسِ hangs on that unsaid adjective, not directly on هُدًى."
        }
      ]
    },
    {
      "id": "3:4b",
      "title": "3:4 · 5–6",
      "words": [
        {
          "ar": "وَأَنزَلَ",
          "ref": "(3:3:9)",
          "translit": "wa-anzala",
          "gloss": "and He revealed",
          "context": true,
          "segments": [
            {
              "id": "cjx",
              "pos": "CONJ",
              "posName": "prefixed conjunction wa (and)",
              "root": "ن ز ل"
            },
            {
              "id": "ctx",
              "pos": "V",
              "posName": "3rd person masculine singular (form IV) perfect verb",
              "root": "ن ز ل"
            }
          ],
          "morphology": {
            "location": "3:3:9",
            "root": "ن ز ل",
            "irab": "الواو عاطفة / فعل ماض",
            "segments": [
              {
                "tag": "CONJ",
                "description": "prefixed conjunction wa (and)"
              },
              {
                "tag": "V",
                "description": "3rd person masculine singular (form IV) perfect verb"
              }
            ]
          }
        },
        {
          "ar": "وَأَنزَلَ",
          "ref": "(3:4:5)",
          "translit": "wa-anzala",
          "gloss": "And (He) revealed",
          "segments": [
            {
              "id": "cj",
              "pos": "CONJ",
              "posName": "prefixed conjunction wa (and)",
              "root": "ن ز ل"
            },
            {
              "id": "v",
              "pos": "V",
              "posName": "3rd person masculine singular (form IV) perfect verb",
              "root": "ن ز ل"
            }
          ],
          "morphology": {
            "location": "3:4:5",
            "root": "ن ز ل",
            "irab": "الواو عاطفة / فعل ماض",
            "segments": [
              {
                "tag": "CONJ",
                "description": "prefixed conjunction wa (and)"
              },
              {
                "tag": "V",
                "description": "3rd person masculine singular (form IV) perfect verb"
              }
            ]
          }
        },
        {
          "ar": "(هُوَ)",
          "elided": true,
          "segments": [
            {
              "id": "s",
              "pos": "PRON"
            }
          ]
        },
        {
          "ar": "ٱلْفُرْقَانَ",
          "ref": "(3:4:6)",
          "translit": "l-fur'qāna",
          "gloss": "the Criterion.",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "accusative masculine noun",
              "root": "ف ر ق"
            }
          ],
          "morphology": {
            "location": "3:4:6",
            "root": "ف ر ق",
            "irab": "اسم منصوب",
            "segments": [
              {
                "tag": "N",
                "description": "accusative masculine noun"
              }
            ]
          }
        }
      ],
      "phrases": [],
      "edges": [
        {
          "dep": "v",
          "head": "ctx",
          "rel": "معطوف",
          "note": "This أَنزَلَ is coordinated onto the earlier one."
        },
        {
          "dep": "s",
          "head": "v",
          "rel": "فاعل",
          "note": "Its subject is the hidden هُوَ."
        },
        {
          "dep": "n1",
          "head": "v",
          "rel": "مفعول به",
          "note": "ٱلْفُرْقَانَ is what was sent down."
        }
      ],
      "attachments": []
    },
    {
      "id": "3:4c",
      "title": "3:4 · 7–11",
      "words": [
        {
          "ar": "إِنَّ",
          "ref": "(3:4:7)",
          "translit": "inna",
          "gloss": "Verily,",
          "segments": [
            {
              "id": "acc",
              "pos": "ACC",
              "posName": "accusative particle"
            }
          ],
          "morphology": {
            "location": "3:4:7",
            "root": null,
            "irab": "حرف نصب",
            "segments": [
              {
                "tag": "ACC",
                "description": "accusative particle"
              }
            ]
          }
        },
        {
          "ar": "ٱلَّذِينَ",
          "ref": "(3:4:8)",
          "translit": "alladhīna",
          "gloss": "those who",
          "segments": [
            {
              "id": "rl",
              "pos": "REL",
              "posName": "masculine plural relative pronoun"
            }
          ],
          "morphology": {
            "location": "3:4:8",
            "root": null,
            "irab": "اسم موصول",
            "segments": [
              {
                "tag": "REL",
                "description": "masculine plural relative pronoun"
              }
            ]
          }
        },
        {
          "ar": "كَفَرُوا",
          "ref": "(3:4:9)",
          "translit": "kafarū",
          "gloss": "disbelieve[d]",
          "segments": [
            {
              "id": "v",
              "pos": "V",
              "posName": "3rd person masculine plural perfect verb",
              "root": "ك ف ر"
            },
            {
              "id": "w",
              "pos": "PRON",
              "posName": "subject pronoun",
              "root": "ك ف ر"
            }
          ],
          "morphology": {
            "location": "3:4:9",
            "root": "ك ف ر",
            "irab": "فعل ماض والواو ضمير متصل في محل رفع فاعل",
            "segments": [
              {
                "tag": "V",
                "description": "3rd person masculine plural perfect verb"
              },
              {
                "tag": "PRON",
                "description": "subject pronoun"
              }
            ]
          }
        },
        {
          "ar": "بِـَٔايَٰتِ",
          "ref": "(3:4:10)",
          "translit": "biāyāti",
          "gloss": "in (the) Verses",
          "segments": [
            {
              "id": "p",
              "pos": "P",
              "posName": "prefixed preposition bi",
              "root": "أ ي ي"
            },
            {
              "id": "n1",
              "pos": "N",
              "posName": "genitive feminine plural noun",
              "root": "أ ي ي"
            }
          ],
          "morphology": {
            "location": "3:4:10",
            "root": "أ ي ي",
            "irab": "جار ومجرور",
            "segments": [
              {
                "tag": "P",
                "description": "prefixed preposition bi"
              },
              {
                "tag": "N",
                "description": "genitive feminine plural noun"
              }
            ]
          }
        },
        {
          "ar": "ٱللَّهِ",
          "ref": "(3:4:11)",
          "translit": "l-lahi",
          "gloss": "(of) Allah,",
          "segments": [
            {
              "id": "pn",
              "pos": "PN",
              "posName": "genitive proper noun → Allah",
              "root": "أ ل ه"
            }
          ],
          "morphology": {
            "location": "3:4:11",
            "root": "أ ل ه",
            "irab": "لفظ الجلالة مجرور",
            "segments": [
              {
                "tag": "PN",
                "description": "genitive proper noun → Allah"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p",
            "n1"
          ]
        },
        {
          "id": "vs1",
          "type": "VS",
          "members": [
            "v",
            "w",
            "p",
            "n1",
            "pn"
          ]
        }
      ],
      "edges": [
        {
          "dep": "rl",
          "head": "acc",
          "rel": "اسم «إن»",
          "note": "ٱلَّذِينَ is the noun that إِنَّ governs."
        },
        {
          "dep": "w",
          "head": "v",
          "rel": "فاعل",
          "note": "The attached وا is the subject of كَفَرُوا."
        },
        {
          "dep": "n1",
          "head": "p",
          "rel": "مجرور",
          "note": "ءَايَٰتِ is governed by بِ."
        },
        {
          "dep": "pn",
          "head": "n1",
          "rel": "مضاف إليه",
          "note": "ٱللَّهِ completes \"the verses OF Allah\"."
        }
      ],
      "attachments": [
        {
          "dep": "pp1",
          "head": "v",
          "rel": "متعلق",
          "note": "بِـَٔايَٰتِ hangs on the verb كَفَرُوا."
        },
        {
          "dep": "vs1",
          "head": "rl",
          "rel": "صلة",
          "note": "The whole verbal sentence is the relative clause of ٱلَّذِينَ."
        }
      ]
    },
    {
      "id": "3:4d",
      "title": "3:4 · 12–14",
      "words": [
        {
          "ar": "إِنَّ",
          "ref": "(3:4:7)",
          "translit": "inna",
          "gloss": "Verily,",
          "context": true,
          "segments": [
            {
              "id": "ctx",
              "pos": "ACC",
              "posName": "accusative particle"
            }
          ],
          "morphology": {
            "location": "3:4:7",
            "root": null,
            "irab": "حرف نصب",
            "segments": [
              {
                "tag": "ACC",
                "description": "accusative particle"
              }
            ]
          }
        },
        {
          "ar": "لَهُمْ",
          "ref": "(3:4:12)",
          "translit": "lahum",
          "gloss": "for them",
          "segments": [
            {
              "id": "p",
              "pos": "P",
              "posName": "prefixed preposition lām"
            },
            {
              "id": "h",
              "pos": "PRON",
              "posName": "3rd person masculine plural personal pronoun"
            }
          ],
          "morphology": {
            "location": "3:4:12",
            "root": null,
            "irab": "جار ومجرور",
            "segments": [
              {
                "tag": "P",
                "description": "prefixed preposition lām"
              },
              {
                "tag": "PRON",
                "description": "3rd person masculine plural personal pronoun"
              }
            ]
          }
        },
        {
          "ar": "(*)",
          "elided": true,
          "segments": [
            {
              "id": "e1",
              "pos": "N"
            }
          ]
        },
        {
          "ar": "عَذَابٌ",
          "ref": "(3:4:13)",
          "translit": "ʿadhābun",
          "gloss": "(is) a punishment",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "nominative masculine indefinite noun",
              "root": "ع ذ ب"
            }
          ],
          "morphology": {
            "location": "3:4:13",
            "root": "ع ذ ب",
            "irab": "اسم مرفوع",
            "segments": [
              {
                "tag": "N",
                "description": "nominative masculine indefinite noun"
              }
            ]
          }
        },
        {
          "ar": "شَدِيدٌ",
          "ref": "(3:4:14)",
          "translit": "shadīdun",
          "gloss": "severe.",
          "segments": [
            {
              "id": "a1",
              "pos": "ADJ",
              "posName": "nominative masculine singular indefinite adjective",
              "root": "ش د د"
            }
          ],
          "morphology": {
            "location": "3:4:14",
            "root": "ش د د",
            "irab": "صفة مرفوعة",
            "segments": [
              {
                "tag": "ADJ",
                "description": "nominative masculine singular indefinite adjective"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p",
            "h"
          ]
        },
        {
          "id": "ns1",
          "type": "NS",
          "members": [
            "p",
            "h",
            "e1",
            "n1",
            "a1"
          ]
        }
      ],
      "edges": [
        {
          "dep": "h",
          "head": "p",
          "rel": "مجرور",
          "note": "هُمْ is governed by the prefixed لَ."
        },
        {
          "dep": "n1",
          "head": "e1",
          "rel": "خبر",
          "note": "عَذَابٌ pairs with an unsaid node that لَهُمْ hangs on."
        },
        {
          "dep": "a1",
          "head": "n1",
          "rel": "صفة",
          "note": "شَدِيدٌ describes عَذَابٌ."
        }
      ],
      "attachments": [
        {
          "dep": "pp1",
          "head": "e1",
          "rel": "متعلق",
          "note": "لَهُمْ hangs on that unsaid node."
        },
        {
          "dep": "ns1",
          "head": "ctx",
          "rel": "خبر «إن»",
          "note": "The whole nominal sentence is the predicate of إِنَّ."
        }
      ]
    },
    {
      "id": "3:4e",
      "title": "3:4 · 15–18",
      "words": [
        {
          "ar": "وَٱللَّهُ",
          "ref": "(3:4:15)",
          "translit": "wal-lahu",
          "gloss": "And Allah",
          "segments": [
            {
              "id": "rem",
              "pos": "REM",
              "posName": "prefixed resumption particle",
              "root": "أ ل ه"
            },
            {
              "id": "pn",
              "pos": "PN",
              "posName": "nominative proper noun → Allah",
              "root": "أ ل ه"
            }
          ],
          "morphology": {
            "location": "3:4:15",
            "root": "أ ل ه",
            "irab": "الواو استئنافية / لفظ الجلالة مرفوع",
            "segments": [
              {
                "tag": "REM",
                "description": "prefixed resumption particle"
              },
              {
                "tag": "PN",
                "description": "nominative proper noun → Allah"
              }
            ]
          }
        },
        {
          "ar": "عَزِيزٌ",
          "ref": "(3:4:16)",
          "translit": "ʿazīzun",
          "gloss": "(is) All-Mighty,",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "nominative masculine singular indefinite noun",
              "root": "ع ز ز"
            }
          ],
          "morphology": {
            "location": "3:4:16",
            "root": "ع ز ز",
            "irab": "اسم مرفوع",
            "segments": [
              {
                "tag": "N",
                "description": "nominative masculine singular indefinite noun"
              }
            ]
          }
        },
        {
          "ar": "ذُو",
          "ref": "(3:4:17)",
          "translit": "dhū",
          "gloss": "All-Able",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "nominative masculine singular noun"
            }
          ],
          "morphology": {
            "location": "3:4:17",
            "root": null,
            "irab": "اسم مرفوع",
            "segments": [
              {
                "tag": "N",
                "description": "nominative masculine singular noun"
              }
            ]
          }
        },
        {
          "ar": "ٱنتِقَامٍ",
          "ref": "(3:4:18)",
          "translit": "intiqāmin",
          "gloss": "(of) retribution.",
          "segments": [
            {
              "id": "n3",
              "pos": "N",
              "posName": "genitive masculine indefinite (form VIII) verbal noun",
              "root": "ن ق م"
            }
          ],
          "morphology": {
            "location": "3:4:18",
            "root": "ن ق م",
            "irab": "اسم مجرور",
            "segments": [
              {
                "tag": "N",
                "description": "genitive masculine indefinite (form VIII) verbal noun"
              }
            ]
          }
        }
      ],
      "phrases": [],
      "edges": [
        {
          "dep": "n1",
          "head": "pn",
          "rel": "خبر",
          "note": "عَزِيزٌ is the predicate of ٱللَّهُ."
        },
        {
          "dep": "n2",
          "head": "n1",
          "rel": "بدل",
          "note": "ذُو ٱنتِقَامٍ restates عَزِيزٌ."
        },
        {
          "dep": "n3",
          "head": "n2",
          "rel": "مضاف إليه",
          "note": "ٱنتِقَامٍ completes ذُو — \"possessor OF retribution\"."
        }
      ],
      "attachments": []
    },
    {
      "id": "3:5a",
      "title": "3:5 · 1–8",
      "words": [
        {
          "ar": "إِنَّ",
          "ref": "(3:5:1)",
          "translit": "inna",
          "gloss": "Indeed",
          "segments": [
            {
              "id": "acc",
              "pos": "ACC",
              "posName": "accusative particle"
            }
          ],
          "morphology": {
            "location": "3:5:1",
            "root": null,
            "irab": "حرف نصب",
            "segments": [
              {
                "tag": "ACC",
                "description": "accusative particle"
              }
            ]
          }
        },
        {
          "ar": "ٱللَّهَ",
          "ref": "(3:5:2)",
          "translit": "l-laha",
          "gloss": "Allah -",
          "segments": [
            {
              "id": "pn",
              "pos": "PN",
              "posName": "accusative proper noun → Allah",
              "root": "أ ل ه"
            }
          ],
          "morphology": {
            "location": "3:5:2",
            "root": "أ ل ه",
            "irab": "لفظ الجلالة منصوب",
            "segments": [
              {
                "tag": "PN",
                "description": "accusative proper noun → Allah"
              }
            ]
          }
        },
        {
          "ar": "لَا",
          "ref": "(3:5:3)",
          "translit": "lā",
          "gloss": "not",
          "segments": [
            {
              "id": "neg",
              "pos": "NEG",
              "posName": "negative particle"
            }
          ],
          "morphology": {
            "location": "3:5:3",
            "root": null,
            "irab": "حرف نفي",
            "segments": [
              {
                "tag": "NEG",
                "description": "negative particle"
              }
            ]
          }
        },
        {
          "ar": "يَخْفَىٰ",
          "ref": "(3:5:4)",
          "translit": "yakhfā",
          "gloss": "is hidden",
          "segments": [
            {
              "id": "v",
              "pos": "V",
              "posName": "3rd person masculine singular imperfect verb, subjunctive mood",
              "root": "خ ف ي"
            }
          ],
          "morphology": {
            "location": "3:5:4",
            "root": "خ ف ي",
            "irab": "فعل مضارع منصوب",
            "segments": [
              {
                "tag": "V",
                "description": "3rd person masculine singular imperfect verb, subjunctive mood"
              }
            ]
          }
        },
        {
          "ar": "عَلَيْهِ",
          "ref": "(3:5:5)",
          "translit": "ʿalayhi",
          "gloss": "from Him",
          "segments": [
            {
              "id": "p1",
              "pos": "P",
              "posName": "preposition"
            },
            {
              "id": "h",
              "pos": "PRON",
              "posName": "3rd person masculine singular object pronoun"
            }
          ],
          "morphology": {
            "location": "3:5:5",
            "root": null,
            "irab": "جار ومجرور",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              },
              {
                "tag": "PRON",
                "description": "3rd person masculine singular object pronoun"
              }
            ]
          }
        },
        {
          "ar": "شَىْءٌ",
          "ref": "(3:5:6)",
          "translit": "shayon",
          "gloss": "anything",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "nominative masculine indefinite noun",
              "root": "ش ي أ"
            }
          ],
          "morphology": {
            "location": "3:5:6",
            "root": "ش ي أ",
            "irab": "اسم مرفوع",
            "segments": [
              {
                "tag": "N",
                "description": "nominative masculine indefinite noun"
              }
            ]
          }
        },
        {
          "ar": "(*)",
          "elided": true,
          "segments": [
            {
              "id": "e1",
              "pos": "ADJ"
            }
          ]
        },
        {
          "ar": "فِى",
          "ref": "(3:5:7)",
          "translit": "fī",
          "gloss": "in",
          "segments": [
            {
              "id": "p2",
              "pos": "P",
              "posName": "preposition"
            }
          ],
          "morphology": {
            "location": "3:5:7",
            "root": null,
            "irab": "حرف جر",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              }
            ]
          }
        },
        {
          "ar": "ٱلْأَرْضِ",
          "ref": "(3:5:8)",
          "translit": "l-arḍi",
          "gloss": "the earth",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "genitive feminine noun → Earth",
              "root": "أ ر ض"
            }
          ],
          "morphology": {
            "location": "3:5:8",
            "root": "أ ر ض",
            "irab": "اسم مجرور",
            "segments": [
              {
                "tag": "N",
                "description": "genitive feminine noun → Earth"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p1",
            "h"
          ]
        },
        {
          "id": "pp2",
          "type": "PP",
          "members": [
            "p2",
            "n2"
          ]
        },
        {
          "id": "vs1",
          "type": "VS",
          "members": [
            "neg",
            "v",
            "p1",
            "h",
            "n1",
            "e1",
            "p2",
            "n2"
          ]
        }
      ],
      "edges": [
        {
          "dep": "pn",
          "head": "acc",
          "rel": "اسم «إن»",
          "note": "ٱللَّهَ is the noun إِنَّ governs — accusative because of it."
        },
        {
          "dep": "neg",
          "head": "v",
          "rel": "نفي",
          "note": "لَا negates يَخْفَىٰ; the corpus gives the negation its own arc."
        },
        {
          "dep": "h",
          "head": "p1",
          "rel": "مجرور",
          "note": "هِ is governed by عَلَىٰ."
        },
        {
          "dep": "n1",
          "head": "v",
          "rel": "فاعل",
          "note": "شَىْءٌ is the subject — \"nothing is hidden\"."
        },
        {
          "dep": "e1",
          "head": "n1",
          "rel": "صفة",
          "note": "An unsaid adjective describing شَىْءٌ, which فِى ٱلْأَرْضِ hangs on."
        },
        {
          "dep": "n2",
          "head": "p2",
          "rel": "مجرور",
          "note": "ٱلْأَرْضِ is governed by فِى."
        }
      ],
      "attachments": [
        {
          "dep": "pp1",
          "head": "v",
          "rel": "متعلق",
          "note": "عَلَيْهِ hangs on يَخْفَىٰ."
        },
        {
          "dep": "pp2",
          "head": "e1",
          "rel": "متعلق",
          "note": "فِى ٱلْأَرْضِ hangs on the unsaid adjective of شَىْءٌ."
        },
        {
          "dep": "vs1",
          "head": "acc",
          "rel": "خبر «إن»",
          "note": "The whole verbal sentence is the predicate of إِنَّ."
        }
      ]
    },
    {
      "id": "3:5b",
      "title": "3:5 · 9–11",
      "words": [
        {
          "ar": "فِى",
          "ref": "(3:5:7)",
          "translit": "fī",
          "gloss": "in",
          "context": true,
          "segments": [
            {
              "id": "cp",
              "pos": "P",
              "posName": "preposition"
            }
          ],
          "morphology": {
            "location": "3:5:7",
            "root": null,
            "irab": "حرف جر",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              }
            ]
          }
        },
        {
          "ar": "ٱلْأَرْضِ",
          "ref": "(3:5:8)",
          "translit": "l-arḍi",
          "gloss": "the earth",
          "context": true,
          "segments": [
            {
              "id": "cn",
              "pos": "N",
              "posName": "genitive feminine noun → Earth",
              "root": "أ ر ض"
            }
          ],
          "morphology": {
            "location": "3:5:8",
            "root": "أ ر ض",
            "irab": "اسم مجرور",
            "segments": [
              {
                "tag": "N",
                "description": "genitive feminine noun → Earth"
              }
            ]
          }
        },
        {
          "ar": "وَلَا",
          "ref": "(3:5:9)",
          "translit": "walā",
          "gloss": "and not",
          "segments": [
            {
              "id": "cj",
              "pos": "CONJ",
              "posName": "prefixed conjunction wa (and)"
            },
            {
              "id": "neg",
              "pos": "NEG",
              "posName": "negative particle"
            }
          ],
          "morphology": {
            "location": "3:5:9",
            "root": null,
            "irab": "الواو عاطفة / حرف نفي",
            "segments": [
              {
                "tag": "CONJ",
                "description": "prefixed conjunction wa (and)"
              },
              {
                "tag": "NEG",
                "description": "negative particle"
              }
            ]
          }
        },
        {
          "ar": "فِى",
          "ref": "(3:5:10)",
          "translit": "fī",
          "gloss": "in",
          "segments": [
            {
              "id": "p",
              "pos": "P",
              "posName": "preposition"
            }
          ],
          "morphology": {
            "location": "3:5:10",
            "root": null,
            "irab": "حرف جر",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              }
            ]
          }
        },
        {
          "ar": "ٱلسَّمَآءِ",
          "ref": "(3:5:11)",
          "translit": "l-samāi",
          "gloss": "the heaven.",
          "segments": [
            {
              "id": "n",
              "pos": "N",
              "posName": "genitive feminine noun",
              "root": "س م و"
            }
          ],
          "morphology": {
            "location": "3:5:11",
            "root": "س م و",
            "irab": "اسم مجرور",
            "segments": [
              {
                "tag": "N",
                "description": "genitive feminine noun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "ppx",
          "type": "PP",
          "members": [
            "cp",
            "cn"
          ]
        },
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p",
            "n"
          ]
        }
      ],
      "edges": [
        {
          "dep": "cn",
          "head": "cp",
          "rel": "مجرور",
          "context": true
        },
        {
          "dep": "n",
          "head": "p",
          "rel": "مجرور",
          "note": "ٱلسَّمَآءِ is governed by فِى."
        }
      ],
      "attachments": [
        {
          "dep": "neg",
          "head": "pp1",
          "rel": "توكيد",
          "note": "The لَا of وَلَا emphasises the negation over فِى ٱلسَّمَآءِ — its arrow lands on the whole phrase."
        },
        {
          "dep": "pp1",
          "head": "ppx",
          "rel": "معطوف",
          "note": "فِى ٱلسَّمَآءِ is coordinated onto فِى ٱلْأَرْضِ — phrase onto phrase."
        }
      ]
    },
    {
      "id": "3:6a",
      "title": "3:6 · 1–7",
      "words": [
        {
          "ar": "هُوَ",
          "ref": "(3:6:1)",
          "translit": "huwa",
          "gloss": "He",
          "segments": [
            {
              "id": "pr",
              "pos": "PRON",
              "posName": "3rd person masculine singular personal pronoun"
            }
          ],
          "morphology": {
            "location": "3:6:1",
            "root": null,
            "irab": "ضمير منفصل",
            "segments": [
              {
                "tag": "PRON",
                "description": "3rd person masculine singular personal pronoun"
              }
            ]
          }
        },
        {
          "ar": "ٱلَّذِى",
          "ref": "(3:6:2)",
          "translit": "alladhī",
          "gloss": "(is) the One Who",
          "segments": [
            {
              "id": "rl",
              "pos": "REL",
              "posName": "masculine singular relative pronoun"
            }
          ],
          "morphology": {
            "location": "3:6:2",
            "root": null,
            "irab": "اسم موصول",
            "segments": [
              {
                "tag": "REL",
                "description": "masculine singular relative pronoun"
              }
            ]
          }
        },
        {
          "ar": "يُصَوِّرُكُمْ",
          "ref": "(3:6:3)",
          "translit": "yuṣawwirukum",
          "gloss": "shapes you",
          "segments": [
            {
              "id": "v",
              "pos": "V",
              "posName": "3rd person masculine singular (form II) imperfect verb",
              "root": "ص و ر"
            },
            {
              "id": "km",
              "pos": "PRON",
              "posName": "2nd person masculine plural object pronoun",
              "root": "ص و ر"
            }
          ],
          "morphology": {
            "location": "3:6:3",
            "root": "ص و ر",
            "irab": "فعل مضارع والكاف ضمير متصل في محل نصب مفعول به",
            "segments": [
              {
                "tag": "V",
                "description": "3rd person masculine singular (form II) imperfect verb"
              },
              {
                "tag": "PRON",
                "description": "2nd person masculine plural object pronoun"
              }
            ]
          }
        },
        {
          "ar": "(هُوَ)",
          "elided": true,
          "segments": [
            {
              "id": "s",
              "pos": "PRON"
            }
          ]
        },
        {
          "ar": "فِى",
          "ref": "(3:6:4)",
          "translit": "fī",
          "gloss": "in",
          "segments": [
            {
              "id": "p",
              "pos": "P",
              "posName": "preposition"
            }
          ],
          "morphology": {
            "location": "3:6:4",
            "root": null,
            "irab": "حرف جر",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              }
            ]
          }
        },
        {
          "ar": "ٱلْأَرْحَامِ",
          "ref": "(3:6:5)",
          "translit": "l-arḥāmi",
          "gloss": "the wombs",
          "segments": [
            {
              "id": "n",
              "pos": "N",
              "posName": "genitive masculine plural noun",
              "root": "ر ح م"
            }
          ],
          "morphology": {
            "location": "3:6:5",
            "root": "ر ح م",
            "irab": "اسم مجرور",
            "segments": [
              {
                "tag": "N",
                "description": "genitive masculine plural noun"
              }
            ]
          }
        },
        {
          "ar": "كَيْفَ",
          "ref": "(3:6:6)",
          "translit": "kayfa",
          "gloss": "how(ever)",
          "segments": [
            {
              "id": "q",
              "pos": "INTG",
              "posName": "interrogative noun",
              "root": "ك ي ف"
            }
          ],
          "morphology": {
            "location": "3:6:6",
            "root": "ك ي ف",
            "irab": "اسم استفهام",
            "segments": [
              {
                "tag": "INTG",
                "description": "interrogative noun"
              }
            ]
          }
        },
        {
          "ar": "يَشَآءُ",
          "ref": "(3:6:7)",
          "translit": "yashāu",
          "gloss": "He wills.",
          "segments": [
            {
              "id": "v2",
              "pos": "V",
              "posName": "3rd person masculine singular imperfect verb",
              "root": "ش ي أ"
            }
          ],
          "morphology": {
            "location": "3:6:7",
            "root": "ش ي أ",
            "irab": "فعل مضارع",
            "segments": [
              {
                "tag": "V",
                "description": "3rd person masculine singular imperfect verb"
              }
            ]
          }
        },
        {
          "ar": "(هُوَ)",
          "elided": true,
          "segments": [
            {
              "id": "s2",
              "pos": "PRON"
            }
          ]
        }
      ],
      "phrases": [
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p",
            "n"
          ]
        },
        {
          "id": "vs1",
          "type": "VS",
          "members": [
            "v",
            "km",
            "s",
            "p",
            "n",
            "q",
            "v2",
            "s2"
          ]
        }
      ],
      "edges": [
        {
          "dep": "rl",
          "head": "pr",
          "rel": "خبر",
          "note": "ٱلَّذِى is the predicate of هُوَ."
        },
        {
          "dep": "km",
          "head": "v",
          "rel": "مفعول به",
          "note": "The attached كُمْ is the object of يُصَوِّرُ."
        },
        {
          "dep": "s",
          "head": "v",
          "rel": "فاعل",
          "note": "Its subject is the hidden هُوَ."
        },
        {
          "dep": "n",
          "head": "p",
          "rel": "مجرور",
          "note": "ٱلْأَرْحَامِ is governed by فِى."
        },
        {
          "dep": "q",
          "head": "v2",
          "rel": "حال",
          "note": "كَيْفَ is tagged حال here — \"however He wills\"."
        },
        {
          "dep": "s2",
          "head": "v2",
          "rel": "فاعل",
          "note": "يَشَآءُ has its own hidden هُوَ."
        }
      ],
      "attachments": [
        {
          "dep": "pp1",
          "head": "v",
          "rel": "متعلق",
          "note": "فِى ٱلْأَرْحَامِ hangs on يُصَوِّرُ."
        },
        {
          "dep": "vs1",
          "head": "rl",
          "rel": "صلة",
          "note": "The whole verbal sentence is the relative clause of ٱلَّذِى."
        }
      ]
    },
    {
      "id": "3:6b",
      "title": "3:6 · 8–13",
      "words": [
        {
          "ar": "لَآ",
          "ref": "(3:6:8)",
          "translit": "lā",
          "gloss": "(There is) no",
          "segments": [
            {
              "id": "neg",
              "pos": "NEG",
              "posName": "negative particle"
            }
          ],
          "morphology": {
            "location": "3:6:8",
            "root": null,
            "irab": "نافية تعمل عمل «أن»",
            "segments": [
              {
                "tag": "NEG",
                "description": "negative particle"
              }
            ]
          }
        },
        {
          "ar": "إِلَٰهَ",
          "ref": "(3:6:9)",
          "translit": "ilāha",
          "gloss": "god",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "accusative masculine singular noun",
              "root": "أ ل ه"
            }
          ],
          "morphology": {
            "location": "3:6:9",
            "root": "أ ل ه",
            "irab": "اسم منصوب",
            "segments": [
              {
                "tag": "N",
                "description": "accusative masculine singular noun"
              }
            ]
          }
        },
        {
          "ar": "(*)",
          "elided": true,
          "segments": [
            {
              "id": "e1",
              "pos": "N"
            }
          ]
        },
        {
          "ar": "إِلَّا",
          "ref": "(3:6:10)",
          "translit": "illā",
          "gloss": "except",
          "segments": [
            {
              "id": "exp",
              "pos": "EXP",
              "posName": "exceptive particle"
            }
          ],
          "morphology": {
            "location": "3:6:10",
            "root": null,
            "irab": "أداة استثناء",
            "segments": [
              {
                "tag": "EXP",
                "description": "exceptive particle"
              }
            ]
          }
        },
        {
          "ar": "هُوَ",
          "ref": "(3:6:11)",
          "translit": "huwa",
          "gloss": "Him,",
          "segments": [
            {
              "id": "pr",
              "pos": "PRON",
              "posName": "3rd person masculine singular personal pronoun"
            }
          ],
          "morphology": {
            "location": "3:6:11",
            "root": null,
            "irab": "ضمير منفصل",
            "segments": [
              {
                "tag": "PRON",
                "description": "3rd person masculine singular personal pronoun"
              }
            ]
          }
        },
        {
          "ar": "(هُوَ)",
          "elided": true,
          "segments": [
            {
              "id": "e2",
              "pos": "PRON"
            }
          ]
        },
        {
          "ar": "ٱلْعَزِيزُ",
          "ref": "(3:6:12)",
          "translit": "l-ʿazīzu",
          "gloss": "the All-Mighty,",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "nominative masculine singular noun",
              "root": "ع ز ز"
            }
          ],
          "morphology": {
            "location": "3:6:12",
            "root": "ع ز ز",
            "irab": "اسم مرفوع",
            "segments": [
              {
                "tag": "N",
                "description": "nominative masculine singular noun"
              }
            ]
          }
        },
        {
          "ar": "ٱلْحَكِيمُ",
          "ref": "(3:6:13)",
          "translit": "l-ḥakīmu",
          "gloss": "the All-Wise.",
          "segments": [
            {
              "id": "adj",
              "pos": "ADJ",
              "posName": "nominative masculine singular adjective",
              "root": "ح ك م"
            }
          ],
          "morphology": {
            "location": "3:6:13",
            "root": "ح ك م",
            "irab": "صفة مرفوعة",
            "segments": [
              {
                "tag": "ADJ",
                "description": "nominative masculine singular adjective"
              }
            ]
          }
        }
      ],
      "phrases": [],
      "edges": [
        {
          "dep": "n1",
          "head": "neg",
          "rel": "اسم «لا»",
          "note": "إِلَٰهَ is the noun لَا governs."
        },
        {
          "dep": "e1",
          "head": "neg",
          "rel": "خبر «لا»",
          "note": "Its predicate is unsaid — the grey node."
        },
        {
          "dep": "exp",
          "head": "pr",
          "rel": "مستثنى",
          "labelAt": "pr",
          "note": "هُوَ is what is excepted by إِلَّا."
        },
        {
          "dep": "pr",
          "head": "e1",
          "rel": "بدل",
          "note": "هُوَ stands in for that unsaid predicate."
        },
        {
          "dep": "n2",
          "head": "e2",
          "rel": "خبر",
          "note": "ٱلْعَزِيزُ is the predicate of a resumed هُوَ."
        },
        {
          "dep": "adj",
          "head": "n2",
          "rel": "صفة",
          "note": "ٱلْحَكِيمُ describes ٱلْعَزِيزُ."
        }
      ],
      "attachments": []
    },
    {
      "id": "3:7a",
      "title": "3:7 · 1–5",
      "words": [
        {
          "ar": "هُوَ",
          "ref": "(3:7:1)",
          "translit": "huwa",
          "gloss": "He",
          "segments": [
            {
              "id": "pr",
              "pos": "PRON",
              "posName": "3rd person masculine singular personal pronoun"
            }
          ],
          "morphology": {
            "location": "3:7:1",
            "root": null,
            "irab": "ضمير منفصل",
            "segments": [
              {
                "tag": "PRON",
                "description": "3rd person masculine singular personal pronoun"
              }
            ]
          }
        },
        {
          "ar": "ٱلَّذِىٓ",
          "ref": "(3:7:2)",
          "translit": "alladhī",
          "gloss": "(is) the One Who",
          "segments": [
            {
              "id": "rl",
              "pos": "REL",
              "posName": "masculine singular relative pronoun"
            }
          ],
          "morphology": {
            "location": "3:7:2",
            "root": null,
            "irab": "اسم موصول",
            "segments": [
              {
                "tag": "REL",
                "description": "masculine singular relative pronoun"
              }
            ]
          }
        },
        {
          "ar": "أَنزَلَ",
          "ref": "(3:7:3)",
          "translit": "anzala",
          "gloss": "revealed",
          "segments": [
            {
              "id": "v",
              "pos": "V",
              "posName": "3rd person masculine singular (form IV) perfect verb",
              "root": "ن ز ل"
            }
          ],
          "morphology": {
            "location": "3:7:3",
            "root": "ن ز ل",
            "irab": "فعل ماض",
            "segments": [
              {
                "tag": "V",
                "description": "3rd person masculine singular (form IV) perfect verb"
              }
            ]
          }
        },
        {
          "ar": "(هُوَ)",
          "elided": true,
          "segments": [
            {
              "id": "s",
              "pos": "PRON"
            }
          ]
        },
        {
          "ar": "عَلَيْكَ",
          "ref": "(3:7:4)",
          "translit": "ʿalayka",
          "gloss": "to you",
          "segments": [
            {
              "id": "p",
              "pos": "P",
              "posName": "preposition"
            },
            {
              "id": "k",
              "pos": "PRON",
              "posName": "2nd person masculine singular object pronoun"
            }
          ],
          "morphology": {
            "location": "3:7:4",
            "root": null,
            "irab": "جار ومجرور",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              },
              {
                "tag": "PRON",
                "description": "2nd person masculine singular object pronoun"
              }
            ]
          }
        },
        {
          "ar": "ٱلْكِتَٰبَ",
          "ref": "(3:7:5)",
          "translit": "l-kitāba",
          "gloss": "the Book,",
          "segments": [
            {
              "id": "n",
              "pos": "N",
              "posName": "accusative masculine noun",
              "root": "ك ت ب"
            }
          ],
          "morphology": {
            "location": "3:7:5",
            "root": "ك ت ب",
            "irab": "اسم منصوب",
            "segments": [
              {
                "tag": "N",
                "description": "accusative masculine noun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p",
            "k"
          ]
        },
        {
          "id": "vs1",
          "type": "VS",
          "members": [
            "v",
            "s",
            "p",
            "k",
            "n"
          ]
        }
      ],
      "edges": [
        {
          "dep": "rl",
          "head": "pr",
          "rel": "خبر",
          "note": "ٱلَّذِىٓ is the predicate of هُوَ."
        },
        {
          "dep": "s",
          "head": "v",
          "rel": "فاعل",
          "note": "The subject of أَنزَلَ is the hidden هُوَ."
        },
        {
          "dep": "k",
          "head": "p",
          "rel": "مجرور",
          "note": "كَ is governed by عَلَىٰ."
        },
        {
          "dep": "n",
          "head": "v",
          "rel": "مفعول به",
          "note": "ٱلْكِتَٰبَ is what was revealed."
        }
      ],
      "attachments": [
        {
          "dep": "pp1",
          "head": "v",
          "rel": "متعلق",
          "note": "عَلَيْكَ hangs on أَنزَلَ."
        },
        {
          "dep": "vs1",
          "head": "rl",
          "rel": "صلة",
          "note": "The verbal sentence is the relative clause of ٱلَّذِىٓ."
        }
      ]
    },
    {
      "id": "3:7b",
      "title": "3:7 · 6–8",
      "words": [
        {
          "ar": "مِنْهُ",
          "ref": "(3:7:6)",
          "translit": "min'hu",
          "gloss": "of it",
          "segments": [
            {
              "id": "p",
              "pos": "P",
              "posName": "preposition"
            },
            {
              "id": "h",
              "pos": "PRON",
              "posName": "3rd person masculine singular object pronoun"
            }
          ],
          "morphology": {
            "location": "3:7:6",
            "root": null,
            "irab": "جار ومجرور",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              },
              {
                "tag": "PRON",
                "description": "3rd person masculine singular object pronoun"
              }
            ]
          }
        },
        {
          "ar": "(*)",
          "elided": true,
          "segments": [
            {
              "id": "e1",
              "pos": "N"
            }
          ]
        },
        {
          "ar": "ءَايَٰتٌ",
          "ref": "(3:7:7)",
          "translit": "āyātun",
          "gloss": "(are) Verses",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "nominative feminine plural indefinite noun",
              "root": "أ ي ي"
            }
          ],
          "morphology": {
            "location": "3:7:7",
            "root": "أ ي ي",
            "irab": "اسم مرفوع",
            "segments": [
              {
                "tag": "N",
                "description": "nominative feminine plural indefinite noun"
              }
            ]
          }
        },
        {
          "ar": "مُّحْكَمَٰتٌ",
          "ref": "(3:7:8)",
          "translit": "muḥ'kamātun",
          "gloss": "absolutely clear -",
          "segments": [
            {
              "id": "a1",
              "pos": "ADJ",
              "posName": "nominative feminine plural indefinite (form IV) passive participle",
              "root": "ح ك م"
            }
          ],
          "morphology": {
            "location": "3:7:8",
            "root": "ح ك م",
            "irab": "صفة مرفوعة",
            "segments": [
              {
                "tag": "ADJ",
                "description": "nominative feminine plural indefinite (form IV) passive participle"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p",
            "h"
          ]
        }
      ],
      "edges": [
        {
          "dep": "h",
          "head": "p",
          "rel": "مجرور",
          "note": "هُ is governed by مِنْ."
        },
        {
          "dep": "n1",
          "head": "e1",
          "rel": "خبر",
          "note": "ءَايَٰتٌ pairs with an unsaid node that مِنْهُ hangs on."
        },
        {
          "dep": "a1",
          "head": "n1",
          "rel": "صفة",
          "note": "مُّحْكَمَٰتٌ describes ءَايَٰتٌ."
        }
      ],
      "attachments": [
        {
          "dep": "pp1",
          "head": "e1",
          "rel": "متعلق",
          "note": "مِنْهُ hangs on that unsaid node — the fronted predicate."
        }
      ]
    },
    {
      "id": "3:7c",
      "title": "3:7 · 9–13",
      "words": [
        {
          "ar": "ءَايَٰتٌ",
          "ref": "(3:7:7)",
          "translit": "āyātun",
          "gloss": "(are) Verses",
          "context": true,
          "segments": [
            {
              "id": "ctx",
              "pos": "N",
              "posName": "nominative feminine plural indefinite noun",
              "root": "أ ي ي"
            }
          ],
          "morphology": {
            "location": "3:7:7",
            "root": "أ ي ي",
            "irab": "اسم مرفوع",
            "segments": [
              {
                "tag": "N",
                "description": "nominative feminine plural indefinite noun"
              }
            ]
          }
        },
        {
          "ar": "هُنَّ",
          "ref": "(3:7:9)",
          "translit": "hunna",
          "gloss": "they (are)",
          "segments": [
            {
              "id": "pr",
              "pos": "PRON",
              "posName": "3rd person feminine plural personal pronoun"
            }
          ],
          "morphology": {
            "location": "3:7:9",
            "root": null,
            "irab": "ضمير منفصل",
            "segments": [
              {
                "tag": "PRON",
                "description": "3rd person feminine plural personal pronoun"
              }
            ]
          }
        },
        {
          "ar": "أُمُّ",
          "ref": "(3:7:10)",
          "translit": "ummu",
          "gloss": "the foundation",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "nominative feminine singular noun",
              "root": "أ م م"
            }
          ],
          "morphology": {
            "location": "3:7:10",
            "root": "أ م م",
            "irab": "اسم مرفوع",
            "segments": [
              {
                "tag": "N",
                "description": "nominative feminine singular noun"
              }
            ]
          }
        },
        {
          "ar": "ٱلْكِتَٰبِ",
          "ref": "(3:7:11)",
          "translit": "l-kitābi",
          "gloss": "(of) the Book,",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "genitive masculine noun",
              "root": "ك ت ب"
            }
          ],
          "morphology": {
            "location": "3:7:11",
            "root": "ك ت ب",
            "irab": "اسم مجرور",
            "segments": [
              {
                "tag": "N",
                "description": "genitive masculine noun"
              }
            ]
          }
        },
        {
          "ar": "وَأُخَرُ",
          "ref": "(3:7:12)",
          "translit": "wa-ukharu",
          "gloss": "and others",
          "segments": [
            {
              "id": "cj",
              "pos": "CONJ",
              "posName": "prefixed conjunction wa (and)",
              "root": "أ خ ر"
            },
            {
              "id": "n3",
              "pos": "N",
              "posName": "nominative feminine plural noun",
              "root": "أ خ ر"
            }
          ],
          "morphology": {
            "location": "3:7:12",
            "root": "أ خ ر",
            "irab": "الواو عاطفة / اسم مرفوع",
            "segments": [
              {
                "tag": "CONJ",
                "description": "prefixed conjunction wa (and)"
              },
              {
                "tag": "N",
                "description": "nominative feminine plural noun"
              }
            ]
          }
        },
        {
          "ar": "مُتَشَٰبِهَٰتٌ",
          "ref": "(3:7:13)",
          "translit": "mutashābihātun",
          "gloss": "(are) allegorical.",
          "segments": [
            {
              "id": "a1",
              "pos": "ADJ",
              "posName": "nominative masculine plural indefinite (form VI) active participle",
              "root": "ش ب ه"
            }
          ],
          "morphology": {
            "location": "3:7:13",
            "root": "ش ب ه",
            "irab": "صفة مرفوعة",
            "segments": [
              {
                "tag": "ADJ",
                "description": "nominative masculine plural indefinite (form VI) active participle"
              }
            ]
          }
        }
      ],
      "phrases": [],
      "edges": [
        {
          "dep": "n1",
          "head": "pr",
          "rel": "خبر",
          "note": "أُمُّ ٱلْكِتَٰبِ is the predicate of هُنَّ."
        },
        {
          "dep": "n2",
          "head": "n1",
          "rel": "مضاف إليه",
          "note": "ٱلْكِتَٰبِ completes \"the foundation OF the Book\"."
        },
        {
          "dep": "n3",
          "head": "ctx",
          "rel": "معطوف",
          "note": "أُخَرُ is coordinated all the way back onto ءَايَٰتٌ."
        },
        {
          "dep": "a1",
          "head": "n3",
          "rel": "صفة",
          "note": "مُتَشَٰبِهَٰتٌ describes أُخَرُ."
        }
      ],
      "attachments": []
    },
    {
      "id": "3:7d",
      "title": "3:7 · 14–18",
      "words": [
        {
          "ar": "فَأَمَّا",
          "ref": "(3:7:14)",
          "translit": "fa-ammā",
          "gloss": "Then as for",
          "segments": [
            {
              "id": "rem",
              "pos": "REM",
              "posName": "prefixed resumption particle"
            },
            {
              "id": "exl",
              "pos": "EXL",
              "posName": "explanation particle"
            }
          ],
          "morphology": {
            "location": "3:7:14",
            "root": null,
            "irab": "الفاء استئنافية / حرف تفصيل",
            "segments": [
              {
                "tag": "REM",
                "description": "prefixed resumption particle"
              },
              {
                "tag": "EXL",
                "description": "explanation particle"
              }
            ]
          }
        },
        {
          "ar": "ٱلَّذِينَ",
          "ref": "(3:7:15)",
          "translit": "alladhīna",
          "gloss": "those",
          "segments": [
            {
              "id": "cond",
              "pos": "COND",
              "posName": "masculine plural conditional noun"
            }
          ],
          "morphology": {
            "location": "3:7:15",
            "root": null,
            "irab": "اسم شرط",
            "segments": [
              {
                "tag": "COND",
                "description": "masculine plural conditional noun"
              }
            ]
          }
        },
        {
          "ar": "فِى",
          "ref": "(3:7:16)",
          "translit": "fī",
          "gloss": "in",
          "segments": [
            {
              "id": "p",
              "pos": "P",
              "posName": "preposition"
            }
          ],
          "morphology": {
            "location": "3:7:16",
            "root": null,
            "irab": "حرف جر",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              }
            ]
          }
        },
        {
          "ar": "قُلُوبِهِمْ",
          "ref": "(3:7:17)",
          "translit": "qulūbihim",
          "gloss": "their hearts",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "genitive feminine plural noun → Heart",
              "root": "ق ل ب"
            },
            {
              "id": "h",
              "pos": "PRON",
              "posName": "3rd person masculine plural possessive pronoun",
              "root": "ق ل ب"
            }
          ],
          "morphology": {
            "location": "3:7:17",
            "root": "ق ل ب",
            "irab": "اسم مجرور و«هم» ضمير متصل في محل جر بالاضافة",
            "segments": [
              {
                "tag": "N",
                "description": "genitive feminine plural noun → Heart"
              },
              {
                "tag": "PRON",
                "description": "3rd person masculine plural possessive pronoun"
              }
            ]
          }
        },
        {
          "ar": "(*)",
          "elided": true,
          "segments": [
            {
              "id": "e1",
              "pos": "N"
            }
          ]
        },
        {
          "ar": "زَيْغٌ",
          "ref": "(3:7:18)",
          "translit": "zayghun",
          "gloss": "(is) perversity -",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "nominative masculine indefinite noun",
              "root": "ز ي غ"
            }
          ],
          "morphology": {
            "location": "3:7:18",
            "root": "ز ي غ",
            "irab": "اسم مرفوع",
            "segments": [
              {
                "tag": "N",
                "description": "nominative masculine indefinite noun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p",
            "n1",
            "h"
          ]
        },
        {
          "id": "ns1",
          "type": "NS",
          "members": [
            "p",
            "n1",
            "h",
            "e1",
            "n2"
          ]
        }
      ],
      "edges": [
        {
          "dep": "exl",
          "head": "cond",
          "rel": "تفصيل",
          "note": "أَمَّا introduces the case being singled out; the corpus tags that edge تفصيل."
        },
        {
          "dep": "n1",
          "head": "p",
          "rel": "مجرور",
          "note": "قُلُوبِ is governed by فِى."
        },
        {
          "dep": "h",
          "head": "n1",
          "rel": "مضاف إليه",
          "note": "هِمْ completes قُلُوبِهِمْ."
        },
        {
          "dep": "n2",
          "head": "e1",
          "rel": "خبر",
          "note": "زَيْغٌ pairs with an unsaid node that فِى قُلُوبِهِمْ hangs on."
        }
      ],
      "attachments": [
        {
          "dep": "pp1",
          "head": "e1",
          "rel": "متعلق",
          "note": "فِى قُلُوبِهِمْ hangs on that unsaid predicate."
        },
        {
          "dep": "ns1",
          "head": "cond",
          "rel": "شرط",
          "note": "The whole clause is the condition attached to ٱلَّذِينَ."
        }
      ]
    },
    {
      "id": "3:7e",
      "title": "3:7 · 19–22",
      "words": [
        {
          "ar": "فَأَمَّا",
          "ref": "(3:7:14)",
          "translit": "fa-ammā",
          "gloss": "Then as for",
          "context": true,
          "segments": [
            {
              "id": "crem",
              "pos": "REM",
              "posName": "prefixed resumption particle"
            },
            {
              "id": "cexl",
              "pos": "EXL",
              "posName": "explanation particle"
            }
          ],
          "morphology": {
            "location": "3:7:14",
            "root": null,
            "irab": "الفاء استئنافية / حرف تفصيل",
            "segments": [
              {
                "tag": "REM",
                "description": "prefixed resumption particle"
              },
              {
                "tag": "EXL",
                "description": "explanation particle"
              }
            ]
          }
        },
        {
          "ar": "ٱلَّذِينَ",
          "ref": "(3:7:15)",
          "translit": "alladhīna",
          "gloss": "those",
          "context": true,
          "segments": [
            {
              "id": "cond",
              "pos": "COND",
              "posName": "masculine plural conditional noun"
            }
          ],
          "morphology": {
            "location": "3:7:15",
            "root": null,
            "irab": "اسم شرط",
            "segments": [
              {
                "tag": "COND",
                "description": "masculine plural conditional noun"
              }
            ]
          }
        },
        {
          "ar": "فَيَتَّبِعُونَ",
          "ref": "(3:7:19)",
          "translit": "fayattabiʿūna",
          "gloss": "[so] they follow",
          "segments": [
            {
              "id": "rslt",
              "pos": "RSLT",
              "posName": "prefixed result particle",
              "root": "ت ب ع"
            },
            {
              "id": "v1",
              "pos": "V",
              "posName": "3rd person masculine plural (form VIII) imperfect verb",
              "root": "ت ب ع"
            },
            {
              "id": "w",
              "pos": "PRON",
              "posName": "subject pronoun",
              "root": "ت ب ع"
            }
          ],
          "morphology": {
            "location": "3:7:19",
            "root": "ت ب ع",
            "irab": "الفاء واقعة في جواب الشرط / فعل مضارع والواو ضمير متصل في محل رفع فاعل",
            "segments": [
              {
                "tag": "RSLT",
                "description": "prefixed result particle"
              },
              {
                "tag": "V",
                "description": "3rd person masculine plural (form VIII) imperfect verb"
              },
              {
                "tag": "PRON",
                "description": "subject pronoun"
              }
            ]
          }
        },
        {
          "ar": "مَا",
          "ref": "(3:7:20)",
          "translit": "mā",
          "gloss": "what",
          "segments": [
            {
              "id": "rl",
              "pos": "REL",
              "posName": "relative pronoun"
            }
          ],
          "morphology": {
            "location": "3:7:20",
            "root": null,
            "irab": "اسم موصول",
            "segments": [
              {
                "tag": "REL",
                "description": "relative pronoun"
              }
            ]
          }
        },
        {
          "ar": "تَشَٰبَهَ",
          "ref": "(3:7:21)",
          "translit": "tashābaha",
          "gloss": "(is) allegorical",
          "segments": [
            {
              "id": "v2",
              "pos": "V",
              "posName": "3rd person masculine singular (form VI) perfect verb",
              "root": "ش ب ه"
            }
          ],
          "morphology": {
            "location": "3:7:21",
            "root": "ش ب ه",
            "irab": "فعل ماض",
            "segments": [
              {
                "tag": "V",
                "description": "3rd person masculine singular (form VI) perfect verb"
              }
            ]
          }
        },
        {
          "ar": "(هُوَ)",
          "elided": true,
          "segments": [
            {
              "id": "s",
              "pos": "PRON"
            }
          ]
        },
        {
          "ar": "مِنْهُ",
          "ref": "(3:7:22)",
          "translit": "min'hu",
          "gloss": "of it,",
          "segments": [
            {
              "id": "p",
              "pos": "P",
              "posName": "preposition"
            },
            {
              "id": "h",
              "pos": "PRON",
              "posName": "3rd person masculine singular object pronoun"
            }
          ],
          "morphology": {
            "location": "3:7:22",
            "root": null,
            "irab": "جار ومجرور",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              },
              {
                "tag": "PRON",
                "description": "3rd person masculine singular object pronoun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p",
            "h"
          ]
        },
        {
          "id": "vs1",
          "type": "VS",
          "members": [
            "v2",
            "s",
            "p",
            "h"
          ]
        },
        {
          "id": "vs2",
          "type": "VS",
          "members": [
            "v1",
            "w",
            "rl",
            "v2",
            "s",
            "p",
            "h"
          ]
        }
      ],
      "edges": [
        {
          "dep": "cexl",
          "head": "cond",
          "rel": "تفصيل",
          "context": true
        },
        {
          "dep": "w",
          "head": "v1",
          "rel": "فاعل",
          "note": "The attached و is the subject of يَتَّبِعُونَ."
        },
        {
          "dep": "rl",
          "head": "v1",
          "rel": "مفعول به",
          "note": "مَا is the object — \"they follow what…\"."
        },
        {
          "dep": "s",
          "head": "v2",
          "rel": "فاعل",
          "note": "تَشَٰبَهَ carries a hidden هُوَ."
        },
        {
          "dep": "h",
          "head": "p",
          "rel": "مجرور",
          "note": "هُ is governed by مِنْ."
        }
      ],
      "attachments": [
        {
          "dep": "pp1",
          "head": "v2",
          "rel": "متعلق",
          "note": "مِنْهُ hangs on تَشَٰبَهَ."
        },
        {
          "dep": "vs1",
          "head": "rl",
          "rel": "صلة",
          "note": "تَشَٰبَهَ مِنْهُ is the relative clause of مَا."
        },
        {
          "dep": "vs2",
          "head": "cond",
          "rel": "جواب شرط",
          "note": "This whole clause is the answer to أَمَّا — the فَ of فَيَتَّبِعُونَ marks it."
        }
      ]
    },
    {
      "id": "3:7f",
      "title": "3:7 · 23–26",
      "words": [
        {
          "ar": "فَيَتَّبِعُونَ",
          "ref": "(3:7:19)",
          "translit": "fayattabiʿūna",
          "gloss": "[so] they follow",
          "context": true,
          "segments": [
            {
              "id": "crslt",
              "pos": "RSLT",
              "posName": "prefixed result particle",
              "root": "ت ب ع"
            },
            {
              "id": "cv",
              "pos": "V",
              "posName": "3rd person masculine plural (form VIII) imperfect verb",
              "root": "ت ب ع"
            },
            {
              "id": "cw",
              "pos": "PRON",
              "posName": "subject pronoun",
              "root": "ت ب ع"
            }
          ],
          "morphology": {
            "location": "3:7:19",
            "root": "ت ب ع",
            "irab": "الفاء واقعة في جواب الشرط / فعل مضارع والواو ضمير متصل في محل رفع فاعل",
            "segments": [
              {
                "tag": "RSLT",
                "description": "prefixed result particle"
              },
              {
                "tag": "V",
                "description": "3rd person masculine plural (form VIII) imperfect verb"
              },
              {
                "tag": "PRON",
                "description": "subject pronoun"
              }
            ]
          }
        },
        {
          "ar": "ٱبْتِغَآءَ",
          "ref": "(3:7:23)",
          "translit": "ib'tighāa",
          "gloss": "seeking",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "accusative masculine (form VIII) verbal noun",
              "root": "ب غ ي"
            }
          ],
          "morphology": {
            "location": "3:7:23",
            "root": "ب غ ي",
            "irab": "اسم منصوب",
            "segments": [
              {
                "tag": "N",
                "description": "accusative masculine (form VIII) verbal noun"
              }
            ]
          }
        },
        {
          "ar": "ٱلْفِتْنَةِ",
          "ref": "(3:7:24)",
          "translit": "l-fit'nati",
          "gloss": "[the] discord",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "genitive feminine noun",
              "root": "ف ت ن"
            }
          ],
          "morphology": {
            "location": "3:7:24",
            "root": "ف ت ن",
            "irab": "اسم مجرور",
            "segments": [
              {
                "tag": "N",
                "description": "genitive feminine noun"
              }
            ]
          }
        },
        {
          "ar": "وَٱبْتِغَآءَ",
          "ref": "(3:7:25)",
          "translit": "wa-ib'tighāa",
          "gloss": "and seeking",
          "segments": [
            {
              "id": "cj",
              "pos": "CONJ",
              "posName": "prefixed conjunction wa (and)",
              "root": "ب غ ي"
            },
            {
              "id": "n3",
              "pos": "N",
              "posName": "accusative masculine (form VIII) verbal noun",
              "root": "ب غ ي"
            }
          ],
          "morphology": {
            "location": "3:7:25",
            "root": "ب غ ي",
            "irab": "الواو عاطفة / اسم منصوب",
            "segments": [
              {
                "tag": "CONJ",
                "description": "prefixed conjunction wa (and)"
              },
              {
                "tag": "N",
                "description": "accusative masculine (form VIII) verbal noun"
              }
            ]
          }
        },
        {
          "ar": "تَأْوِيلِهِۦ",
          "ref": "(3:7:26)",
          "translit": "tawīlihi",
          "gloss": "its interpretation.",
          "segments": [
            {
              "id": "n4",
              "pos": "N",
              "posName": "genitive masculine (form II) verbal noun",
              "root": "أ و ل"
            },
            {
              "id": "h",
              "pos": "PRON",
              "posName": "3rd person masculine singular possessive pronoun",
              "root": "أ و ل"
            }
          ],
          "morphology": {
            "location": "3:7:26",
            "root": "أ و ل",
            "irab": "اسم مجرور والهاء ضمير متصل في محل جر بالاضافة",
            "segments": [
              {
                "tag": "N",
                "description": "genitive masculine (form II) verbal noun"
              },
              {
                "tag": "PRON",
                "description": "3rd person masculine singular possessive pronoun"
              }
            ]
          }
        }
      ],
      "phrases": [],
      "edges": [
        {
          "dep": "cw",
          "head": "cv",
          "rel": "فاعل",
          "context": true
        },
        {
          "dep": "n1",
          "head": "cv",
          "rel": "مفعول لأجله",
          "note": "ٱبْتِغَآءَ gives the reason for following — an accusative of purpose."
        },
        {
          "dep": "n2",
          "head": "n1",
          "rel": "مضاف إليه",
          "note": "ٱلْفِتْنَةِ completes \"seeking OF discord\"."
        },
        {
          "dep": "n3",
          "head": "n1",
          "rel": "معطوف",
          "note": "The second ٱبْتِغَآءَ is coordinated onto the first."
        },
        {
          "dep": "n4",
          "head": "n3",
          "rel": "مضاف إليه",
          "note": "تَأْوِيلِ completes the second ٱبْتِغَآءَ."
        },
        {
          "dep": "h",
          "head": "n4",
          "rel": "مضاف إليه",
          "note": "هِۦ completes تَأْوِيلِهِۦ — \"its interpretation\"."
        }
      ],
      "attachments": []
    },
    {
      "id": "3:7g",
      "title": "3:7 · 27–31",
      "words": [
        {
          "ar": "وَمَا",
          "ref": "(3:7:27)",
          "translit": "wamā",
          "gloss": "And not",
          "segments": [
            {
              "id": "rem",
              "pos": "REM",
              "posName": "prefixed resumption particle"
            },
            {
              "id": "neg",
              "pos": "NEG",
              "posName": "negative particle"
            }
          ],
          "morphology": {
            "location": "3:7:27",
            "root": null,
            "irab": "الواو استئنافية / حرف نفي",
            "segments": [
              {
                "tag": "REM",
                "description": "prefixed resumption particle"
              },
              {
                "tag": "NEG",
                "description": "negative particle"
              }
            ]
          }
        },
        {
          "ar": "يَعْلَمُ",
          "ref": "(3:7:28)",
          "translit": "yaʿlamu",
          "gloss": "knows",
          "segments": [
            {
              "id": "v",
              "pos": "V",
              "posName": "3rd person masculine singular imperfect verb",
              "root": "ع ل م"
            }
          ],
          "morphology": {
            "location": "3:7:28",
            "root": "ع ل م",
            "irab": "فعل مضارع",
            "segments": [
              {
                "tag": "V",
                "description": "3rd person masculine singular imperfect verb"
              }
            ]
          }
        },
        {
          "ar": "تَأْوِيلَهُۥٓ",
          "ref": "(3:7:29)",
          "translit": "tawīlahu",
          "gloss": "its interpretation",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "accusative masculine (form II) verbal noun",
              "root": "أ و ل"
            },
            {
              "id": "h",
              "pos": "PRON",
              "posName": "3rd person masculine singular possessive pronoun",
              "root": "أ و ل"
            }
          ],
          "morphology": {
            "location": "3:7:29",
            "root": "أ و ل",
            "irab": "اسم منصوب والهاء ضمير متصل في محل جر بالاضافة",
            "segments": [
              {
                "tag": "N",
                "description": "accusative masculine (form II) verbal noun"
              },
              {
                "tag": "PRON",
                "description": "3rd person masculine singular possessive pronoun"
              }
            ]
          }
        },
        {
          "ar": "إِلَّا",
          "ref": "(3:7:30)",
          "translit": "illā",
          "gloss": "except",
          "segments": [
            {
              "id": "res",
              "pos": "RES",
              "posName": "restriction particle"
            }
          ],
          "morphology": {
            "location": "3:7:30",
            "root": null,
            "irab": "أداة حصر",
            "segments": [
              {
                "tag": "RES",
                "description": "restriction particle"
              }
            ]
          }
        },
        {
          "ar": "ٱللَّهُ",
          "ref": "(3:7:31)",
          "translit": "l-lahu",
          "gloss": "Allah.",
          "segments": [
            {
              "id": "pn",
              "pos": "PN",
              "posName": "nominative proper noun → Allah",
              "root": "أ ل ه"
            }
          ],
          "morphology": {
            "location": "3:7:31",
            "root": "أ ل ه",
            "irab": "لفظ الجلالة مرفوع",
            "segments": [
              {
                "tag": "PN",
                "description": "nominative proper noun → Allah"
              }
            ]
          }
        }
      ],
      "phrases": [],
      "edges": [
        {
          "dep": "neg",
          "head": "v",
          "rel": "نفي",
          "note": "مَا negates يَعْلَمُ."
        },
        {
          "dep": "n1",
          "head": "v",
          "rel": "مفعول به",
          "note": "تَأْوِيلَ is the object of يَعْلَمُ."
        },
        {
          "dep": "h",
          "head": "n1",
          "rel": "مضاف إليه",
          "note": "هُۥٓ completes تَأْوِيلَهُۥٓ."
        },
        {
          "dep": "res",
          "head": "pn",
          "rel": "حصر",
          "note": "إِلَّا after a negation restricts the subject to ٱللَّهُ alone."
        },
        {
          "dep": "pn",
          "head": "v",
          "rel": "فاعل",
          "note": "ٱللَّهُ is the subject — the only one who knows."
        }
      ],
      "attachments": []
    },
    {
      "id": "3:7h",
      "title": "3:7 · 32–37",
      "words": [
        {
          "ar": "وَٱلرَّٰسِخُونَ",
          "ref": "(3:7:32)",
          "translit": "wal-rāsikhūna",
          "gloss": "And those firm",
          "segments": [
            {
              "id": "rem",
              "pos": "REM",
              "posName": "prefixed resumption particle",
              "root": "ر س خ"
            },
            {
              "id": "n1",
              "pos": "N",
              "posName": "nominative masculine plural active participle",
              "root": "ر س خ"
            }
          ],
          "morphology": {
            "location": "3:7:32",
            "root": "ر س خ",
            "irab": "الواو استئنافية / اسم مرفوع",
            "segments": [
              {
                "tag": "REM",
                "description": "prefixed resumption particle"
              },
              {
                "tag": "N",
                "description": "nominative masculine plural active participle"
              }
            ]
          }
        },
        {
          "ar": "فِى",
          "ref": "(3:7:33)",
          "translit": "fī",
          "gloss": "in",
          "segments": [
            {
              "id": "p1",
              "pos": "P",
              "posName": "preposition"
            }
          ],
          "morphology": {
            "location": "3:7:33",
            "root": null,
            "irab": "حرف جر",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              }
            ]
          }
        },
        {
          "ar": "ٱلْعِلْمِ",
          "ref": "(3:7:34)",
          "translit": "l-ʿil'mi",
          "gloss": "[the] knowledge,",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "genitive masculine noun",
              "root": "ع ل م"
            }
          ],
          "morphology": {
            "location": "3:7:34",
            "root": "ع ل م",
            "irab": "اسم مجرور",
            "segments": [
              {
                "tag": "N",
                "description": "genitive masculine noun"
              }
            ]
          }
        },
        {
          "ar": "يَقُولُونَ",
          "ref": "(3:7:35)",
          "translit": "yaqūlūna",
          "gloss": "they say,",
          "segments": [
            {
              "id": "v1",
              "pos": "V",
              "posName": "3rd person masculine plural imperfect verb",
              "root": "ق و ل"
            },
            {
              "id": "w",
              "pos": "PRON",
              "posName": "subject pronoun",
              "root": "ق و ل"
            }
          ],
          "morphology": {
            "location": "3:7:35",
            "root": "ق و ل",
            "irab": "فعل مضارع والواو ضمير متصل في محل رفع فاعل",
            "segments": [
              {
                "tag": "V",
                "description": "3rd person masculine plural imperfect verb"
              },
              {
                "tag": "PRON",
                "description": "subject pronoun"
              }
            ]
          }
        },
        {
          "ar": "ءَامَنَّا",
          "ref": "(3:7:36)",
          "translit": "āmannā",
          "gloss": "\"We believe",
          "segments": [
            {
              "id": "v2",
              "pos": "V",
              "posName": "1st person plural (form IV) perfect verb",
              "root": "أ م ن"
            },
            {
              "id": "na",
              "pos": "PRON",
              "posName": "subject pronoun",
              "root": "أ م ن"
            }
          ],
          "morphology": {
            "location": "3:7:36",
            "root": "أ م ن",
            "irab": "فعل ماض و«نا» ضمير متصل في محل رفع فاعل",
            "segments": [
              {
                "tag": "V",
                "description": "1st person plural (form IV) perfect verb"
              },
              {
                "tag": "PRON",
                "description": "subject pronoun"
              }
            ]
          }
        },
        {
          "ar": "بِهِۦ",
          "ref": "(3:7:37)",
          "translit": "bihi",
          "gloss": "in it.",
          "segments": [
            {
              "id": "p2",
              "pos": "P",
              "posName": "prefixed preposition bi"
            },
            {
              "id": "h",
              "pos": "PRON",
              "posName": "3rd person masculine singular personal pronoun"
            }
          ],
          "morphology": {
            "location": "3:7:37",
            "root": null,
            "irab": "جار ومجرور",
            "segments": [
              {
                "tag": "P",
                "description": "prefixed preposition bi"
              },
              {
                "tag": "PRON",
                "description": "3rd person masculine singular personal pronoun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p1",
            "n2"
          ]
        },
        {
          "id": "pp2",
          "type": "PP",
          "members": [
            "p2",
            "h"
          ]
        },
        {
          "id": "vs1",
          "type": "VS",
          "members": [
            "v2",
            "na",
            "p2",
            "h"
          ]
        },
        {
          "id": "vs2",
          "type": "VS",
          "members": [
            "v1",
            "w",
            "v2",
            "na",
            "p2",
            "h"
          ]
        }
      ],
      "edges": [
        {
          "dep": "n2",
          "head": "p1",
          "rel": "مجرور",
          "note": "ٱلْعِلْمِ is governed by فِى."
        },
        {
          "dep": "w",
          "head": "v1",
          "rel": "فاعل",
          "note": "The attached و is the subject of يَقُولُونَ."
        },
        {
          "dep": "na",
          "head": "v2",
          "rel": "فاعل",
          "note": "نَا is the subject of ءَامَنَّا — \"WE believe\"."
        },
        {
          "dep": "h",
          "head": "p2",
          "rel": "مجرور",
          "note": "هِۦ is governed by بِ."
        }
      ],
      "attachments": [
        {
          "dep": "pp1",
          "head": "n1",
          "rel": "متعلق",
          "note": "فِى ٱلْعِلْمِ hangs on ٱلرَّٰسِخُونَ — \"firmly grounded IN knowledge\"."
        },
        {
          "dep": "pp2",
          "head": "v2",
          "rel": "متعلق",
          "note": "بِهِۦ hangs on ءَامَنَّا."
        },
        {
          "dep": "vs1",
          "head": "v1",
          "rel": "مفعول به",
          "note": "The quoted sentence ءَامَنَّا بِهِۦ is the object of يَقُولُونَ."
        },
        {
          "dep": "vs2",
          "head": "n1",
          "rel": "خبر",
          "note": "يَقُولُونَ ءَامَنَّا بِهِۦ as a whole is the predicate of ٱلرَّٰسِخُونَ."
        }
      ]
    },
    {
      "id": "3:7i",
      "title": "3:7 · 38–41",
      "words": [
        {
          "ar": "كُلٌّ",
          "ref": "(3:7:38)",
          "translit": "kullun",
          "gloss": "All",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "nominative masculine indefinite noun",
              "root": "ك ل ل"
            }
          ],
          "morphology": {
            "location": "3:7:38",
            "root": "ك ل ل",
            "irab": "اسم مرفوع",
            "segments": [
              {
                "tag": "N",
                "description": "nominative masculine indefinite noun"
              }
            ]
          }
        },
        {
          "ar": "(*)",
          "elided": true,
          "segments": [
            {
              "id": "e1",
              "pos": "N"
            }
          ]
        },
        {
          "ar": "مِّنْ",
          "ref": "(3:7:39)",
          "translit": "min",
          "gloss": "(is) from",
          "segments": [
            {
              "id": "p",
              "pos": "P",
              "posName": "preposition"
            }
          ],
          "morphology": {
            "location": "3:7:39",
            "root": null,
            "irab": "حرف جر",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              }
            ]
          }
        },
        {
          "ar": "عِندِ",
          "ref": "(3:7:40)",
          "translit": "ʿindi",
          "gloss": "from",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "genitive noun",
              "root": "ع ن د"
            }
          ],
          "morphology": {
            "location": "3:7:40",
            "root": "ع ن د",
            "irab": "اسم مجرور",
            "segments": [
              {
                "tag": "N",
                "description": "genitive noun"
              }
            ]
          }
        },
        {
          "ar": "رَبِّنَا",
          "ref": "(3:7:41)",
          "translit": "rabbinā",
          "gloss": "our Lord.\"",
          "segments": [
            {
              "id": "n3",
              "pos": "N",
              "posName": "genitive masculine noun",
              "root": "ر ب ب"
            },
            {
              "id": "na",
              "pos": "PRON",
              "posName": "1st person plural possessive pronoun",
              "root": "ر ب ب"
            }
          ],
          "morphology": {
            "location": "3:7:41",
            "root": "ر ب ب",
            "irab": "اسم مجرور و«نا» ضمير متصل في محل جر بالاضافة",
            "segments": [
              {
                "tag": "N",
                "description": "genitive masculine noun"
              },
              {
                "tag": "PRON",
                "description": "1st person plural possessive pronoun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p",
            "n2"
          ]
        }
      ],
      "edges": [
        {
          "dep": "e1",
          "head": "n1",
          "rel": "خبر",
          "note": "The predicate of كُلٌّ is unsaid; مِّنْ عِندِ رَبِّنَا hangs on it."
        },
        {
          "dep": "n2",
          "head": "p",
          "rel": "مجرور",
          "note": "عِندِ is governed by مِّنْ."
        },
        {
          "dep": "n3",
          "head": "n2",
          "rel": "مضاف إليه",
          "note": "رَبِّ completes عِندِ رَبِّنَا."
        },
        {
          "dep": "na",
          "head": "n3",
          "rel": "مضاف إليه",
          "note": "نَا completes رَبِّنَا."
        }
      ],
      "attachments": [
        {
          "dep": "pp1",
          "head": "e1",
          "rel": "متعلق",
          "note": "The prepositional phrase hangs on that unsaid predicate."
        }
      ]
    },
    {
      "id": "3:7j",
      "title": "3:7 · 42–46",
      "words": [
        {
          "ar": "وَمَا",
          "ref": "(3:7:42)",
          "translit": "wamā",
          "gloss": "And not",
          "segments": [
            {
              "id": "rem",
              "pos": "REM",
              "posName": "prefixed resumption particle"
            },
            {
              "id": "neg",
              "pos": "NEG",
              "posName": "negative particle"
            }
          ],
          "morphology": {
            "location": "3:7:42",
            "root": null,
            "irab": "الواو استئنافية / حرف نفي",
            "segments": [
              {
                "tag": "REM",
                "description": "prefixed resumption particle"
              },
              {
                "tag": "NEG",
                "description": "negative particle"
              }
            ]
          }
        },
        {
          "ar": "يَذَّكَّرُ",
          "ref": "(3:7:43)",
          "translit": "yadhakkaru",
          "gloss": "will take heed",
          "segments": [
            {
              "id": "v",
              "pos": "V",
              "posName": "3rd person masculine singular (form V) imperfect verb",
              "root": "ذ ك ر"
            }
          ],
          "morphology": {
            "location": "3:7:43",
            "root": "ذ ك ر",
            "irab": "فعل مضارع",
            "segments": [
              {
                "tag": "V",
                "description": "3rd person masculine singular (form V) imperfect verb"
              }
            ]
          }
        },
        {
          "ar": "إِلَّآ",
          "ref": "(3:7:44)",
          "translit": "illā",
          "gloss": "except",
          "segments": [
            {
              "id": "res",
              "pos": "RES",
              "posName": "restriction particle"
            }
          ],
          "morphology": {
            "location": "3:7:44",
            "root": null,
            "irab": "أداة حصر",
            "segments": [
              {
                "tag": "RES",
                "description": "restriction particle"
              }
            ]
          }
        },
        {
          "ar": "أُو۟لُوا۟",
          "ref": "(3:7:45)",
          "translit": "ulū",
          "gloss": "men",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "nominative masculine plural noun",
              "root": "أ و ل"
            }
          ],
          "morphology": {
            "location": "3:7:45",
            "root": "أ و ل",
            "irab": "اسم مرفوع",
            "segments": [
              {
                "tag": "N",
                "description": "nominative masculine plural noun"
              }
            ]
          }
        },
        {
          "ar": "ٱلْأَلْبَٰبِ",
          "ref": "(3:7:46)",
          "translit": "l-albābi",
          "gloss": "(of) understanding.",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "genitive masculine plural noun",
              "root": "ل ب ب"
            }
          ],
          "morphology": {
            "location": "3:7:46",
            "root": "ل ب ب",
            "irab": "اسم مجرور",
            "segments": [
              {
                "tag": "N",
                "description": "genitive masculine plural noun"
              }
            ]
          }
        }
      ],
      "phrases": [],
      "edges": [
        {
          "dep": "neg",
          "head": "v",
          "rel": "نفي",
          "note": "مَا negates يَذَّكَّرُ."
        },
        {
          "dep": "res",
          "head": "n1",
          "rel": "حصر",
          "note": "إِلَّآ restricts who takes heed to أُو۟لُوا۟ ٱلْأَلْبَٰبِ alone."
        },
        {
          "dep": "n1",
          "head": "v",
          "rel": "فاعل",
          "note": "أُو۟لُوا۟ is the subject of يَذَّكَّرُ."
        },
        {
          "dep": "n2",
          "head": "n1",
          "rel": "مضاف إليه",
          "note": "ٱلْأَلْبَٰبِ completes \"those OF understanding\"."
        }
      ],
      "attachments": []
    },
    {
      "id": "3:8a",
      "title": "3:8 · 1–7",
      "words": [
        {
          "ar": "(*)",
          "elided": true,
          "segments": [
            {
              "id": "voc",
              "pos": "VOC"
            }
          ]
        },
        {
          "ar": "رَبَّنَا",
          "ref": "(3:8:1)",
          "translit": "rabbanā",
          "gloss": "\"Our Lord!",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "accusative masculine noun",
              "root": "ر ب ب"
            },
            {
              "id": "na",
              "pos": "PRON",
              "posName": "1st person plural possessive pronoun",
              "root": "ر ب ب"
            }
          ],
          "morphology": {
            "location": "3:8:1",
            "root": "ر ب ب",
            "irab": "اسم منصوب و«نا» ضمير متصل في محل جر بالاضافة",
            "segments": [
              {
                "tag": "N",
                "description": "accusative masculine noun"
              },
              {
                "tag": "PRON",
                "description": "1st person plural possessive pronoun"
              }
            ]
          }
        },
        {
          "ar": "لَا",
          "ref": "(3:8:2)",
          "translit": "lā",
          "gloss": "(Do) not",
          "segments": [
            {
              "id": "pro",
              "pos": "PRO",
              "posName": "prohibition particle"
            }
          ],
          "morphology": {
            "location": "3:8:2",
            "root": null,
            "irab": "حرف نهي",
            "segments": [
              {
                "tag": "PRO",
                "description": "prohibition particle"
              }
            ]
          }
        },
        {
          "ar": "تُزِغْ",
          "ref": "(3:8:3)",
          "translit": "tuzigh",
          "gloss": "deviate",
          "segments": [
            {
              "id": "v",
              "pos": "V",
              "posName": "2nd person masculine singular (form IV) imperfect verb, jussive mood",
              "root": "ز ي غ"
            }
          ],
          "morphology": {
            "location": "3:8:3",
            "root": "ز ي غ",
            "irab": "فعل مضارع مجزوم",
            "segments": [
              {
                "tag": "V",
                "description": "2nd person masculine singular (form IV) imperfect verb, jussive mood"
              }
            ]
          }
        },
        {
          "ar": "(أَنتَ)",
          "elided": true,
          "segments": [
            {
              "id": "s",
              "pos": "PRON"
            }
          ]
        },
        {
          "ar": "قُلُوبَنَا",
          "ref": "(3:8:4)",
          "translit": "qulūbanā",
          "gloss": "our hearts",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "accusative feminine plural noun → Heart",
              "root": "ق ل ب"
            },
            {
              "id": "na2",
              "pos": "PRON",
              "posName": "1st person plural possessive pronoun",
              "root": "ق ل ب"
            }
          ],
          "morphology": {
            "location": "3:8:4",
            "root": "ق ل ب",
            "irab": "اسم منصوب و«نا» ضمير متصل في محل جر بالاضافة",
            "segments": [
              {
                "tag": "N",
                "description": "accusative feminine plural noun → Heart"
              },
              {
                "tag": "PRON",
                "description": "1st person plural possessive pronoun"
              }
            ]
          }
        },
        {
          "ar": "بَعْدَ",
          "ref": "(3:8:5)",
          "translit": "baʿda",
          "gloss": "after",
          "segments": [
            {
              "id": "t1",
              "pos": "T",
              "posName": "accusative time adverb",
              "root": "ب ع د"
            }
          ],
          "morphology": {
            "location": "3:8:5",
            "root": "ب ع د",
            "irab": "ظرف زمان منصوب",
            "segments": [
              {
                "tag": "T",
                "description": "accusative time adverb"
              }
            ]
          }
        },
        {
          "ar": "إِذْ",
          "ref": "(3:8:6)",
          "translit": "idh",
          "gloss": "[when]",
          "segments": [
            {
              "id": "t2",
              "pos": "T",
              "posName": "time adverb"
            }
          ],
          "morphology": {
            "location": "3:8:6",
            "root": null,
            "irab": "ظرف زمان",
            "segments": [
              {
                "tag": "T",
                "description": "time adverb"
              }
            ]
          }
        },
        {
          "ar": "هَدَيْتَنَا",
          "ref": "(3:8:7)",
          "translit": "hadaytanā",
          "gloss": "You (have) guided us,",
          "segments": [
            {
              "id": "v2",
              "pos": "V",
              "posName": "2nd person masculine singular perfect verb",
              "root": "ه د ي"
            },
            {
              "id": "ta",
              "pos": "PRON",
              "posName": "subject pronoun",
              "root": "ه د ي"
            },
            {
              "id": "na3",
              "pos": "PRON",
              "posName": "1st person plural object pronoun",
              "root": "ه د ي"
            }
          ],
          "morphology": {
            "location": "3:8:7",
            "root": "ه د ي",
            "irab": "فعل ماض والتاء ضمير متصل في محل رفع فاعل و«نا» ضمير متصل في محل نصب مفعول به",
            "segments": [
              {
                "tag": "V",
                "description": "2nd person masculine singular perfect verb"
              },
              {
                "tag": "PRON",
                "description": "subject pronoun"
              },
              {
                "tag": "PRON",
                "description": "1st person plural object pronoun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "vs1",
          "type": "VS",
          "members": [
            "v2",
            "ta",
            "na3"
          ]
        }
      ],
      "edges": [
        {
          "dep": "n1",
          "head": "voc",
          "rel": "منادي",
          "note": "رَبَّ is the one being called; the vocative particle يا itself is unsaid, so the corpus supplies a grey node."
        },
        {
          "dep": "na",
          "head": "n1",
          "rel": "مضاف إليه",
          "note": "نَا completes رَبَّنَا — \"our Lord\"."
        },
        {
          "dep": "pro",
          "head": "v",
          "rel": "نفي",
          "note": "This لَا is a prohibition particle, jussive over تُزِغْ."
        },
        {
          "dep": "s",
          "head": "v",
          "rel": "فاعل",
          "note": "The subject is the hidden أَنتَ."
        },
        {
          "dep": "na2",
          "head": "n2",
          "rel": "مضاف إليه",
          "note": "نَا completes قُلُوبَنَا."
        },
        {
          "dep": "n2",
          "head": "v",
          "rel": "مفعول به",
          "note": "قُلُوبَنَا is the object of تُزِغْ."
        },
        {
          "dep": "t1",
          "head": "v",
          "rel": "متعلق",
          "note": "بَعْدَ attaches to تُزِغْ as a time adverb."
        },
        {
          "dep": "ta",
          "head": "v2",
          "rel": "فاعل",
          "note": "The attached تَ is the subject of هَدَيْتَ."
        },
        {
          "dep": "na3",
          "head": "v2",
          "rel": "مفعول به",
          "note": "نَا is the object — \"guided us\"."
        }
      ],
      "attachments": [
        {
          "dep": "vs1",
          "head": "t2",
          "rel": "شرط",
          "note": "The clause هَدَيْتَنَا is what إِذْ introduces — the corpus tags that edge شرط."
        }
      ]
    },
    {
      "id": "3:8b",
      "title": "3:8 · 8–12",
      "words": [
        {
          "ar": "وَهَبْ",
          "ref": "(3:8:8)",
          "translit": "wahab",
          "gloss": "and grant",
          "segments": [
            {
              "id": "cj",
              "pos": "CONJ",
              "posName": "prefixed conjunction wa (and)",
              "root": "و ه ب"
            },
            {
              "id": "v",
              "pos": "V",
              "posName": "2nd person masculine singular imperative verb",
              "root": "و ه ب"
            }
          ],
          "morphology": {
            "location": "3:8:8",
            "root": "و ه ب",
            "irab": "الواو عاطفة / فعل أمر",
            "segments": [
              {
                "tag": "CONJ",
                "description": "prefixed conjunction wa (and)"
              },
              {
                "tag": "V",
                "description": "2nd person masculine singular imperative verb"
              }
            ]
          }
        },
        {
          "ar": "(أَنتَ)",
          "elided": true,
          "segments": [
            {
              "id": "s",
              "pos": "PRON"
            }
          ]
        },
        {
          "ar": "لَنَا",
          "ref": "(3:8:9)",
          "translit": "lanā",
          "gloss": "(for) us",
          "segments": [
            {
              "id": "p1",
              "pos": "P",
              "posName": "prefixed preposition lām"
            },
            {
              "id": "na",
              "pos": "PRON",
              "posName": "1st person plural personal pronoun"
            }
          ],
          "morphology": {
            "location": "3:8:9",
            "root": null,
            "irab": "جار ومجرور",
            "segments": [
              {
                "tag": "P",
                "description": "prefixed preposition lām"
              },
              {
                "tag": "PRON",
                "description": "1st person plural personal pronoun"
              }
            ]
          }
        },
        {
          "ar": "مِن",
          "ref": "(3:8:10)",
          "translit": "min",
          "gloss": "from",
          "segments": [
            {
              "id": "p2",
              "pos": "P",
              "posName": "preposition"
            }
          ],
          "morphology": {
            "location": "3:8:10",
            "root": null,
            "irab": "حرف جر",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              }
            ]
          }
        },
        {
          "ar": "لَّدُنكَ",
          "ref": "(3:8:11)",
          "translit": "ladunka",
          "gloss": "Yourself",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "genitive noun",
              "root": "ل د ن"
            },
            {
              "id": "k",
              "pos": "PRON",
              "posName": "2nd person masculine singular possessive pronoun",
              "root": "ل د ن"
            }
          ],
          "morphology": {
            "location": "3:8:11",
            "root": "ل د ن",
            "irab": "اسم مجرور والكاف ضمير متصل في محل جر بالاضافة",
            "segments": [
              {
                "tag": "N",
                "description": "genitive noun"
              },
              {
                "tag": "PRON",
                "description": "2nd person masculine singular possessive pronoun"
              }
            ]
          }
        },
        {
          "ar": "رَحْمَةً",
          "ref": "(3:8:12)",
          "translit": "raḥmatan",
          "gloss": "mercy.",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "accusative feminine indefinite noun",
              "root": "ر ح م"
            }
          ],
          "morphology": {
            "location": "3:8:12",
            "root": "ر ح م",
            "irab": "اسم منصوب",
            "segments": [
              {
                "tag": "N",
                "description": "accusative feminine indefinite noun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p1",
            "na"
          ]
        },
        {
          "id": "pp2",
          "type": "PP",
          "members": [
            "p2",
            "n1"
          ]
        }
      ],
      "edges": [
        {
          "dep": "s",
          "head": "v",
          "rel": "فاعل",
          "note": "The imperative هَبْ carries a hidden أَنتَ."
        },
        {
          "dep": "na",
          "head": "p1",
          "rel": "مجرور",
          "note": "نَا is governed by the prefixed لَ."
        },
        {
          "dep": "n1",
          "head": "p2",
          "rel": "مجرور",
          "note": "لَدُن is governed by مِن."
        },
        {
          "dep": "k",
          "head": "n1",
          "rel": "مضاف إليه",
          "note": "كَ completes لَدُنكَ — \"from Your presence\"."
        },
        {
          "dep": "n2",
          "head": "v",
          "rel": "مفعول به",
          "note": "رَحْمَةً is what is asked for."
        }
      ],
      "attachments": [
        {
          "dep": "pp1",
          "head": "v",
          "rel": "متعلق",
          "note": "لَنَا hangs on هَبْ."
        },
        {
          "dep": "pp2",
          "head": "v",
          "rel": "متعلق",
          "note": "مِن لَّدُنكَ also hangs on هَبْ."
        }
      ]
    },
    {
      "id": "3:8c",
      "title": "3:8 · 13–15",
      "words": [
        {
          "ar": "إِنَّكَ",
          "ref": "(3:8:13)",
          "translit": "innaka",
          "gloss": "Indeed You,",
          "segments": [
            {
              "id": "acc",
              "pos": "ACC",
              "posName": "accusative particle"
            },
            {
              "id": "k",
              "pos": "PRON",
              "posName": "2nd person masculine singular object pronoun"
            }
          ],
          "morphology": {
            "location": "3:8:13",
            "root": null,
            "irab": "حرف نصب والكاف ضمير متصل في محل نصب اسم «ان»",
            "segments": [
              {
                "tag": "ACC",
                "description": "accusative particle"
              },
              {
                "tag": "PRON",
                "description": "2nd person masculine singular object pronoun"
              }
            ]
          }
        },
        {
          "ar": "أَنتَ",
          "ref": "(3:8:14)",
          "translit": "anta",
          "gloss": "You",
          "segments": [
            {
              "id": "pr",
              "pos": "PRON",
              "posName": "2nd person masculine singular personal pronoun"
            }
          ],
          "morphology": {
            "location": "3:8:14",
            "root": null,
            "irab": "ضمير منفصل",
            "segments": [
              {
                "tag": "PRON",
                "description": "2nd person masculine singular personal pronoun"
              }
            ]
          }
        },
        {
          "ar": "ٱلْوَهَّابُ",
          "ref": "(3:8:15)",
          "translit": "l-wahābu",
          "gloss": "(are) the Bestower.",
          "segments": [
            {
              "id": "n",
              "pos": "N",
              "posName": "nominative masculine singular noun",
              "root": "و ه ب"
            }
          ],
          "morphology": {
            "location": "3:8:15",
            "root": "و ه ب",
            "irab": "اسم مرفوع",
            "segments": [
              {
                "tag": "N",
                "description": "nominative masculine singular noun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "ns1",
          "type": "NS",
          "members": [
            "pr",
            "n"
          ]
        }
      ],
      "edges": [
        {
          "dep": "k",
          "head": "acc",
          "rel": "اسم «إن»",
          "note": "The attached كَ is the noun إِنَّ governs."
        },
        {
          "dep": "n",
          "head": "pr",
          "rel": "خبر",
          "note": "ٱلْوَهَّابُ is the predicate of أَنتَ."
        }
      ],
      "attachments": [
        {
          "dep": "ns1",
          "head": "acc",
          "rel": "خبر «إن»",
          "note": "أَنتَ ٱلْوَهَّابُ as a whole is the predicate of إِنَّ."
        }
      ]
    },
    {
      "id": "3:9a",
      "title": "3:9 · 1–5",
      "words": [
        {
          "ar": "(*)",
          "elided": true,
          "segments": [
            {
              "id": "voc",
              "pos": "VOC"
            }
          ]
        },
        {
          "ar": "رَبَّنَآ",
          "ref": "(3:9:1)",
          "translit": "rabbanā",
          "gloss": "Our Lord!",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "accusative masculine noun",
              "root": "ر ب ب"
            },
            {
              "id": "na",
              "pos": "PRON",
              "posName": "1st person plural possessive pronoun",
              "root": "ر ب ب"
            }
          ],
          "morphology": {
            "location": "3:9:1",
            "root": "ر ب ب",
            "irab": "اسم منصوب و«نا» ضمير متصل في محل جر بالاضافة",
            "segments": [
              {
                "tag": "N",
                "description": "accusative masculine noun"
              },
              {
                "tag": "PRON",
                "description": "1st person plural possessive pronoun"
              }
            ]
          }
        },
        {
          "ar": "إِنَّكَ",
          "ref": "(3:9:2)",
          "translit": "innaka",
          "gloss": "Indeed, You",
          "segments": [
            {
              "id": "acc",
              "pos": "ACC",
              "posName": "accusative particle"
            },
            {
              "id": "k",
              "pos": "PRON",
              "posName": "2nd person masculine singular object pronoun"
            }
          ],
          "morphology": {
            "location": "3:9:2",
            "root": null,
            "irab": "حرف نصب والكاف ضمير متصل في محل نصب اسم «ان»",
            "segments": [
              {
                "tag": "ACC",
                "description": "accusative particle"
              },
              {
                "tag": "PRON",
                "description": "2nd person masculine singular object pronoun"
              }
            ]
          }
        },
        {
          "ar": "جَامِعُ",
          "ref": "(3:9:3)",
          "translit": "jāmiʿu",
          "gloss": "will gather",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "nominative masculine active participle",
              "root": "ج م ع"
            }
          ],
          "morphology": {
            "location": "3:9:3",
            "root": "ج م ع",
            "irab": "اسم مرفوع",
            "segments": [
              {
                "tag": "N",
                "description": "nominative masculine active participle"
              }
            ]
          }
        },
        {
          "ar": "ٱلنَّاسِ",
          "ref": "(3:9:4)",
          "translit": "l-nāsi",
          "gloss": "[the] mankind",
          "segments": [
            {
              "id": "n3",
              "pos": "N",
              "posName": "genitive masculine plural noun",
              "root": "ن و س"
            }
          ],
          "morphology": {
            "location": "3:9:4",
            "root": "ن و س",
            "irab": "اسم مجرور",
            "segments": [
              {
                "tag": "N",
                "description": "genitive masculine plural noun"
              }
            ]
          }
        },
        {
          "ar": "لِيَوْمٍ",
          "ref": "(3:9:5)",
          "translit": "liyawmin",
          "gloss": "on a Day,",
          "segments": [
            {
              "id": "p",
              "pos": "P",
              "posName": "prefixed preposition lām",
              "root": "ي و م"
            },
            {
              "id": "n4",
              "pos": "N",
              "posName": "genitive masculine indefinite noun",
              "root": "ي و م"
            }
          ],
          "morphology": {
            "location": "3:9:5",
            "root": "ي و م",
            "irab": "جار ومجرور",
            "segments": [
              {
                "tag": "P",
                "description": "prefixed preposition lām"
              },
              {
                "tag": "N",
                "description": "genitive masculine indefinite noun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p",
            "n4"
          ]
        }
      ],
      "edges": [
        {
          "dep": "n1",
          "head": "voc",
          "rel": "منادي",
          "note": "رَبَّ is the one addressed, with the يا left unsaid."
        },
        {
          "dep": "na",
          "head": "n1",
          "rel": "مضاف إليه",
          "note": "نَا completes رَبَّنَآ."
        },
        {
          "dep": "k",
          "head": "acc",
          "rel": "اسم «إن»",
          "note": "The attached كَ is what إِنَّ governs."
        },
        {
          "dep": "n2",
          "head": "acc",
          "rel": "خبر «إن»",
          "note": "جَامِعُ is the predicate of إِنَّ — a participle, not a verb."
        },
        {
          "dep": "n3",
          "head": "n2",
          "rel": "مضاف إليه",
          "note": "ٱلنَّاسِ completes جَامِعُ ٱلنَّاسِ."
        },
        {
          "dep": "n4",
          "head": "p",
          "rel": "مجرور",
          "note": "يَوْمٍ is governed by the prefixed لِ."
        }
      ],
      "attachments": [
        {
          "dep": "pp1",
          "head": "n2",
          "rel": "متعلق",
          "note": "لِيَوْمٍ hangs on جَامِعُ."
        }
      ]
    },
    {
      "id": "3:9b",
      "title": "3:9 · 6–8",
      "words": [
        {
          "ar": "لِيَوْمٍ",
          "ref": "(3:9:5)",
          "translit": "liyawmin",
          "gloss": "on a Day,",
          "context": true,
          "segments": [
            {
              "id": "cp",
              "pos": "P",
              "posName": "prefixed preposition lām",
              "root": "ي و م"
            },
            {
              "id": "cn",
              "pos": "N",
              "posName": "genitive masculine indefinite noun",
              "root": "ي و م"
            }
          ],
          "morphology": {
            "location": "3:9:5",
            "root": "ي و م",
            "irab": "جار ومجرور",
            "segments": [
              {
                "tag": "P",
                "description": "prefixed preposition lām"
              },
              {
                "tag": "N",
                "description": "genitive masculine indefinite noun"
              }
            ]
          }
        },
        {
          "ar": "لَّا",
          "ref": "(3:9:6)",
          "translit": "lā",
          "gloss": "(there is) no",
          "segments": [
            {
              "id": "neg",
              "pos": "NEG",
              "posName": "negative particle"
            }
          ],
          "morphology": {
            "location": "3:9:6",
            "root": null,
            "irab": "نافية تعمل عمل «أن»",
            "segments": [
              {
                "tag": "NEG",
                "description": "negative particle"
              }
            ]
          }
        },
        {
          "ar": "رَيْبَ",
          "ref": "(3:9:7)",
          "translit": "rayba",
          "gloss": "doubt",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "accusative masculine noun",
              "root": "ر ي ب"
            }
          ],
          "morphology": {
            "location": "3:9:7",
            "root": "ر ي ب",
            "irab": "اسم منصوب",
            "segments": [
              {
                "tag": "N",
                "description": "accusative masculine noun"
              }
            ]
          }
        },
        {
          "ar": "(*)",
          "elided": true,
          "segments": [
            {
              "id": "e1",
              "pos": "N"
            }
          ]
        },
        {
          "ar": "فِيهِ",
          "ref": "(3:9:8)",
          "translit": "fīhi",
          "gloss": "in it.",
          "segments": [
            {
              "id": "p",
              "pos": "P",
              "posName": "preposition"
            },
            {
              "id": "h",
              "pos": "PRON",
              "posName": "3rd person masculine singular object pronoun"
            }
          ],
          "morphology": {
            "location": "3:9:8",
            "root": null,
            "irab": "جار ومجرور",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              },
              {
                "tag": "PRON",
                "description": "3rd person masculine singular object pronoun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p",
            "h"
          ]
        },
        {
          "id": "ns1",
          "type": "NS",
          "members": [
            "neg",
            "n1",
            "e1",
            "p",
            "h"
          ]
        }
      ],
      "edges": [
        {
          "dep": "cn",
          "head": "cp",
          "rel": "مجرور",
          "context": true
        },
        {
          "dep": "n1",
          "head": "neg",
          "rel": "اسم «لا»",
          "note": "رَيْبَ is the noun لَا governs."
        },
        {
          "dep": "e1",
          "head": "neg",
          "rel": "خبر «لا»",
          "note": "Its predicate is unsaid; فِيهِ hangs on that grey node."
        },
        {
          "dep": "h",
          "head": "p",
          "rel": "مجرور",
          "note": "هِ is governed by فِى."
        }
      ],
      "attachments": [
        {
          "dep": "pp1",
          "head": "e1",
          "rel": "متعلق",
          "note": "فِيهِ hangs on the unsaid predicate of لَا."
        },
        {
          "dep": "ns1",
          "head": "cn",
          "rel": "صفة",
          "note": "The whole sentence لَّا رَيْبَ فِيهِ describes يَوْمٍ — an adjective clause."
        }
      ]
    },
    {
      "id": "3:9c",
      "title": "3:9 · 9–13",
      "words": [
        {
          "ar": "إِنَّ",
          "ref": "(3:9:9)",
          "translit": "inna",
          "gloss": "Indeed,",
          "segments": [
            {
              "id": "acc",
              "pos": "ACC",
              "posName": "accusative particle"
            }
          ],
          "morphology": {
            "location": "3:9:9",
            "root": null,
            "irab": "حرف نصب",
            "segments": [
              {
                "tag": "ACC",
                "description": "accusative particle"
              }
            ]
          }
        },
        {
          "ar": "ٱللَّهَ",
          "ref": "(3:9:10)",
          "translit": "l-laha",
          "gloss": "Allah",
          "segments": [
            {
              "id": "pn",
              "pos": "PN",
              "posName": "accusative proper noun → Allah",
              "root": "أ ل ه"
            }
          ],
          "morphology": {
            "location": "3:9:10",
            "root": "أ ل ه",
            "irab": "لفظ الجلالة منصوب",
            "segments": [
              {
                "tag": "PN",
                "description": "accusative proper noun → Allah"
              }
            ]
          }
        },
        {
          "ar": "لَا",
          "ref": "(3:9:11)",
          "translit": "lā",
          "gloss": "(does) not",
          "segments": [
            {
              "id": "neg",
              "pos": "NEG",
              "posName": "negative particle"
            }
          ],
          "morphology": {
            "location": "3:9:11",
            "root": null,
            "irab": "حرف نفي",
            "segments": [
              {
                "tag": "NEG",
                "description": "negative particle"
              }
            ]
          }
        },
        {
          "ar": "يُخْلِفُ",
          "ref": "(3:9:12)",
          "translit": "yukh'lifu",
          "gloss": "break",
          "segments": [
            {
              "id": "v",
              "pos": "V",
              "posName": "3rd person masculine singular (form IV) imperfect verb",
              "root": "خ ل ف"
            }
          ],
          "morphology": {
            "location": "3:9:12",
            "root": "خ ل ف",
            "irab": "فعل مضارع",
            "segments": [
              {
                "tag": "V",
                "description": "3rd person masculine singular (form IV) imperfect verb"
              }
            ]
          }
        },
        {
          "ar": "(هُوَ)",
          "elided": true,
          "segments": [
            {
              "id": "s",
              "pos": "PRON"
            }
          ]
        },
        {
          "ar": "ٱلْمِيعَادَ",
          "ref": "(3:9:13)",
          "translit": "l-mīʿāda",
          "gloss": "the Promise.\"",
          "segments": [
            {
              "id": "n",
              "pos": "N",
              "posName": "accusative masculine noun",
              "root": "و ع د"
            }
          ],
          "morphology": {
            "location": "3:9:13",
            "root": "و ع د",
            "irab": "اسم منصوب",
            "segments": [
              {
                "tag": "N",
                "description": "accusative masculine noun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "vs1",
          "type": "VS",
          "members": [
            "neg",
            "v",
            "s",
            "n"
          ]
        }
      ],
      "edges": [
        {
          "dep": "pn",
          "head": "acc",
          "rel": "اسم «إن»",
          "note": "ٱللَّهَ is accusative because إِنَّ governs it."
        },
        {
          "dep": "neg",
          "head": "v",
          "rel": "نفي",
          "note": "لَا negates يُخْلِفُ."
        },
        {
          "dep": "s",
          "head": "v",
          "rel": "فاعل",
          "note": "The subject is the hidden هُوَ."
        },
        {
          "dep": "n",
          "head": "v",
          "rel": "مفعول به",
          "note": "ٱلْمِيعَادَ is the object."
        }
      ],
      "attachments": [
        {
          "dep": "vs1",
          "head": "acc",
          "rel": "خبر «إن»",
          "note": "The whole verbal sentence is the predicate of إِنَّ."
        }
      ]
    },
    {
      "id": "3:10a",
      "title": "3:10 · 1–12",
      "words": [
        {
          "ar": "إِنَّ",
          "ref": "(3:10:1)",
          "translit": "inna",
          "gloss": "Indeed,",
          "segments": [
            {
              "id": "acc",
              "pos": "ACC",
              "posName": "accusative particle"
            }
          ],
          "morphology": {
            "location": "3:10:1",
            "root": null,
            "irab": "حرف نصب",
            "segments": [
              {
                "tag": "ACC",
                "description": "accusative particle"
              }
            ]
          }
        },
        {
          "ar": "ٱلَّذِينَ",
          "ref": "(3:10:2)",
          "translit": "alladhīna",
          "gloss": "those who",
          "segments": [
            {
              "id": "rl",
              "pos": "REL",
              "posName": "masculine plural relative pronoun"
            }
          ],
          "morphology": {
            "location": "3:10:2",
            "root": null,
            "irab": "اسم موصول",
            "segments": [
              {
                "tag": "REL",
                "description": "masculine plural relative pronoun"
              }
            ]
          }
        },
        {
          "ar": "كَفَرُوا",
          "ref": "(3:10:3)",
          "translit": "kafarū",
          "gloss": "disbelieve[d]",
          "segments": [
            {
              "id": "v1",
              "pos": "V",
              "posName": "3rd person masculine plural perfect verb",
              "root": "ك ف ر"
            },
            {
              "id": "w",
              "pos": "PRON",
              "posName": "subject pronoun",
              "root": "ك ف ر"
            }
          ],
          "morphology": {
            "location": "3:10:3",
            "root": "ك ف ر",
            "irab": "فعل ماض والواو ضمير متصل في محل رفع فاعل",
            "segments": [
              {
                "tag": "V",
                "description": "3rd person masculine plural perfect verb"
              },
              {
                "tag": "PRON",
                "description": "subject pronoun"
              }
            ]
          }
        },
        {
          "ar": "لَن",
          "ref": "(3:10:4)",
          "translit": "lan",
          "gloss": "never",
          "segments": [
            {
              "id": "neg1",
              "pos": "NEG",
              "posName": "negative particle"
            }
          ],
          "morphology": {
            "location": "3:10:4",
            "root": null,
            "irab": "حرف نفي",
            "segments": [
              {
                "tag": "NEG",
                "description": "negative particle"
              }
            ]
          }
        },
        {
          "ar": "تُغْنِىَ",
          "ref": "(3:10:5)",
          "translit": "tugh'niya",
          "gloss": "will avail",
          "segments": [
            {
              "id": "v2",
              "pos": "V",
              "posName": "3rd person feminine singular (form IV) imperfect verb, subjunctive mood",
              "root": "غ ن ي"
            }
          ],
          "morphology": {
            "location": "3:10:5",
            "root": "غ ن ي",
            "irab": "فعل مضارع منصوب",
            "segments": [
              {
                "tag": "V",
                "description": "3rd person feminine singular (form IV) imperfect verb, subjunctive mood"
              }
            ]
          }
        },
        {
          "ar": "عَنْهُمْ",
          "ref": "(3:10:6)",
          "translit": "ʿanhum",
          "gloss": "[for] them",
          "segments": [
            {
              "id": "p1",
              "pos": "P",
              "posName": "preposition"
            },
            {
              "id": "h1",
              "pos": "PRON",
              "posName": "3rd person masculine plural object pronoun"
            }
          ],
          "morphology": {
            "location": "3:10:6",
            "root": null,
            "irab": "جار ومجرور",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              },
              {
                "tag": "PRON",
                "description": "3rd person masculine plural object pronoun"
              }
            ]
          }
        },
        {
          "ar": "أَمْوَٰلُهُمْ",
          "ref": "(3:10:7)",
          "translit": "amwāluhum",
          "gloss": "their wealth",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "nominative masculine plural noun",
              "root": "م و ل"
            },
            {
              "id": "h2",
              "pos": "PRON",
              "posName": "3rd person masculine plural possessive pronoun",
              "root": "م و ل"
            }
          ],
          "morphology": {
            "location": "3:10:7",
            "root": "م و ل",
            "irab": "اسم مرفوع و«هم» ضمير متصل في محل جر بالاضافة",
            "segments": [
              {
                "tag": "N",
                "description": "nominative masculine plural noun"
              },
              {
                "tag": "PRON",
                "description": "3rd person masculine plural possessive pronoun"
              }
            ]
          }
        },
        {
          "ar": "وَلَآ",
          "ref": "(3:10:8)",
          "translit": "walā",
          "gloss": "and not",
          "segments": [
            {
              "id": "cj",
              "pos": "CONJ",
              "posName": "prefixed conjunction wa (and)"
            },
            {
              "id": "neg2",
              "pos": "NEG",
              "posName": "negative particle"
            }
          ],
          "morphology": {
            "location": "3:10:8",
            "root": null,
            "irab": "الواو عاطفة / حرف نفي",
            "segments": [
              {
                "tag": "CONJ",
                "description": "prefixed conjunction wa (and)"
              },
              {
                "tag": "NEG",
                "description": "negative particle"
              }
            ]
          }
        },
        {
          "ar": "أَوْلَٰدُهُم",
          "ref": "(3:10:9)",
          "translit": "awlāduhum",
          "gloss": "their children",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "nominative masculine plural noun",
              "root": "و ل د"
            },
            {
              "id": "h3",
              "pos": "PRON",
              "posName": "3rd person masculine plural possessive pronoun",
              "root": "و ل د"
            }
          ],
          "morphology": {
            "location": "3:10:9",
            "root": "و ل د",
            "irab": "اسم مرفوع و«هم» ضمير متصل في محل جر بالاضافة",
            "segments": [
              {
                "tag": "N",
                "description": "nominative masculine plural noun"
              },
              {
                "tag": "PRON",
                "description": "3rd person masculine plural possessive pronoun"
              }
            ]
          }
        },
        {
          "ar": "مِّنَ",
          "ref": "(3:10:10)",
          "translit": "mina",
          "gloss": "against",
          "segments": [
            {
              "id": "p2",
              "pos": "P",
              "posName": "preposition"
            }
          ],
          "morphology": {
            "location": "3:10:10",
            "root": null,
            "irab": "حرف جر",
            "segments": [
              {
                "tag": "P",
                "description": "preposition"
              }
            ]
          }
        },
        {
          "ar": "ٱللَّهِ",
          "ref": "(3:10:11)",
          "translit": "l-lahi",
          "gloss": "Allah",
          "segments": [
            {
              "id": "pn",
              "pos": "PN",
              "posName": "genitive proper noun → Allah",
              "root": "أ ل ه"
            }
          ],
          "morphology": {
            "location": "3:10:11",
            "root": "أ ل ه",
            "irab": "لفظ الجلالة مجرور",
            "segments": [
              {
                "tag": "PN",
                "description": "genitive proper noun → Allah"
              }
            ]
          }
        },
        {
          "ar": "شَيْـًٔا",
          "ref": "(3:10:12)",
          "translit": "shayan",
          "gloss": "anything,",
          "segments": [
            {
              "id": "n3",
              "pos": "N",
              "posName": "accusative masculine indefinite noun",
              "root": "ش ي أ"
            }
          ],
          "morphology": {
            "location": "3:10:12",
            "root": "ش ي أ",
            "irab": "اسم منصوب",
            "segments": [
              {
                "tag": "N",
                "description": "accusative masculine indefinite noun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "vs1",
          "type": "VS",
          "members": [
            "v1",
            "w"
          ]
        },
        {
          "id": "pp1",
          "type": "PP",
          "members": [
            "p1",
            "h1"
          ]
        },
        {
          "id": "pp2",
          "type": "PP",
          "members": [
            "p2",
            "pn"
          ]
        },
        {
          "id": "vs2",
          "type": "VS",
          "members": [
            "neg1",
            "v2",
            "p1",
            "h1",
            "n1",
            "h2",
            "cj",
            "neg2",
            "n2",
            "h3",
            "p2",
            "pn",
            "n3"
          ]
        }
      ],
      "edges": [
        {
          "dep": "rl",
          "head": "acc",
          "rel": "اسم «إن»",
          "note": "ٱلَّذِينَ is the noun إِنَّ governs."
        },
        {
          "dep": "w",
          "head": "v1",
          "rel": "فاعل",
          "note": "The attached وا is the subject of كَفَرُوا."
        },
        {
          "dep": "neg1",
          "head": "v2",
          "rel": "نفي",
          "note": "لَن negates the future — \"will never avail\"."
        },
        {
          "dep": "h1",
          "head": "p1",
          "rel": "مجرور",
          "note": "هُمْ is governed by عَنْ."
        },
        {
          "dep": "h2",
          "head": "n1",
          "rel": "مضاف إليه",
          "note": "هُمْ completes أَمْوَٰلُهُمْ."
        },
        {
          "dep": "n1",
          "head": "v2",
          "rel": "فاعل",
          "note": "أَمْوَٰلُهُمْ is the subject of تُغْنِىَ — their wealth is what fails to avail."
        },
        {
          "dep": "neg2",
          "head": "n2",
          "rel": "توكيد",
          "note": "The لَآ of وَلَآ reinforces the negation over أَوْلَٰدُهُم."
        },
        {
          "dep": "h3",
          "head": "n2",
          "rel": "مضاف إليه",
          "note": "هُم completes أَوْلَٰدُهُم."
        },
        {
          "dep": "n2",
          "head": "n1",
          "rel": "معطوف",
          "note": "أَوْلَٰدُهُم is coordinated onto أَمْوَٰلُهُمْ."
        },
        {
          "dep": "pn",
          "head": "p2",
          "rel": "مجرور",
          "note": "ٱللَّهِ is governed by مِّنَ."
        },
        {
          "dep": "n3",
          "head": "v2",
          "rel": "مفعول به",
          "note": "شَيْـًٔا is the object — \"avail them nothing\"."
        }
      ],
      "attachments": [
        {
          "dep": "vs1",
          "head": "rl",
          "rel": "صلة",
          "note": "كَفَرُوا is the relative clause of ٱلَّذِينَ."
        },
        {
          "dep": "pp1",
          "head": "v2",
          "rel": "متعلق",
          "note": "عَنْهُمْ hangs on تُغْنِىَ."
        },
        {
          "dep": "pp2",
          "head": "v2",
          "rel": "متعلق",
          "note": "مِّنَ ٱللَّهِ also hangs on تُغْنِىَ."
        },
        {
          "dep": "vs2",
          "head": "acc",
          "rel": "خبر «إن»",
          "note": "The whole clause from لَن onwards is the predicate of إِنَّ."
        }
      ]
    },
    {
      "id": "3:10b",
      "title": "3:10 · 13–16",
      "words": [
        {
          "ar": "وَأُو۟لَٰٓئِكَ",
          "ref": "(3:10:13)",
          "translit": "wa-ulāika",
          "gloss": "and those -",
          "segments": [
            {
              "id": "rem",
              "pos": "REM",
              "posName": "prefixed resumption particle"
            },
            {
              "id": "dem",
              "pos": "DEM",
              "posName": "plural demonstrative pronoun"
            }
          ],
          "morphology": {
            "location": "3:10:13",
            "root": null,
            "irab": "الواو استئنافية / اسم اشارة",
            "segments": [
              {
                "tag": "REM",
                "description": "prefixed resumption particle"
              },
              {
                "tag": "DEM",
                "description": "plural demonstrative pronoun"
              }
            ]
          }
        },
        {
          "ar": "هُمْ",
          "ref": "(3:10:14)",
          "translit": "hum",
          "gloss": "they (are)",
          "segments": [
            {
              "id": "pr",
              "pos": "PRON",
              "posName": "3rd person masculine plural personal pronoun"
            }
          ],
          "morphology": {
            "location": "3:10:14",
            "root": null,
            "irab": "ضمير منفصل",
            "segments": [
              {
                "tag": "PRON",
                "description": "3rd person masculine plural personal pronoun"
              }
            ]
          }
        },
        {
          "ar": "وَقُودُ",
          "ref": "(3:10:15)",
          "translit": "waqūdu",
          "gloss": "(the) fuel",
          "segments": [
            {
              "id": "n1",
              "pos": "N",
              "posName": "nominative masculine noun",
              "root": "و ق د"
            }
          ],
          "morphology": {
            "location": "3:10:15",
            "root": "و ق د",
            "irab": "اسم مرفوع",
            "segments": [
              {
                "tag": "N",
                "description": "nominative masculine noun"
              }
            ]
          }
        },
        {
          "ar": "ٱلنَّارِ",
          "ref": "(3:10:16)",
          "translit": "l-nāri",
          "gloss": "(for) the Fire.",
          "segments": [
            {
              "id": "n2",
              "pos": "N",
              "posName": "genitive feminine noun",
              "root": "ن و ر"
            }
          ],
          "morphology": {
            "location": "3:10:16",
            "root": "ن و ر",
            "irab": "اسم مجرور",
            "segments": [
              {
                "tag": "N",
                "description": "genitive feminine noun"
              }
            ]
          }
        }
      ],
      "phrases": [
        {
          "id": "ns1",
          "type": "NS",
          "members": [
            "pr",
            "n1",
            "n2"
          ]
        }
      ],
      "edges": [
        {
          "dep": "n1",
          "head": "pr",
          "rel": "خبر",
          "note": "وَقُودُ is the predicate of هُمْ."
        },
        {
          "dep": "n2",
          "head": "n1",
          "rel": "مضاف إليه",
          "note": "ٱلنَّارِ completes \"fuel OF the Fire\"."
        }
      ],
      "attachments": [
        {
          "dep": "ns1",
          "head": "dem",
          "rel": "خبر",
          "note": "هُمْ وَقُودُ ٱلنَّارِ as a whole is the predicate of أُو۟لَٰٓئِكَ."
        }
      ]
    }
  ],
  "morphologySource": "corpus.quran.com/wordmorphology.jsp — root, part-of-speech description and Arabic iʿrāb per token"
};

export default surah;

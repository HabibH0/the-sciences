// قَصَصُ النَّبِيِّينَ, volume 1 «مَنْ كَسَرَ الأَصْنَامَ؟», chapter 8 -- رَبِّيَ اللَّهُ.
// Printed pages 16 (bottom half, after ch7) - 17 (top half, before ch9's
// heading). Transcribed by hand from the scan (vision OCR, 300dpi render)
// against QASAS_AGENT_BRIEF.md and ../CHAPTER-FORMAT.md.
//
// Short, calm chapter -- no dialogue, no Qur'anic quotation -- summing up
// the conclusion of ch7's search: Ibrāhīm now knows Allah is the one true
// Lord of the star, the moon, the sun, and all the worlds, and Allah
// responds by making him a prophet (نَبِيّ) and khalīl (خَلِيل, "close
// friend" -- the title later given to Ibrāhīm at Qur'an 4:125), then
// commissioning him to call his people away from idol worship. This sets up
// ch9's dialogue.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch8',
  title: { ar: 'رَبِّيَ اللَّهُ', en: 'My Lord Is Allah' },
  newWords: [
    'هَدَى', 'جَعَلَ', 'نَبِيّ', 'خَلِيل', 'أَمَرَ', 'دَعَا', 'قَوْم', 'عِبَادَة', 'عَالَم',
  ],
  lemmas: {
    'هَدَى': { gloss: 'to guide' },
    'جَعَلَ': { gloss: 'to make, place, appoint' },
    'نَبِيّ': { gloss: 'prophet' },
    'خَلِيل': { gloss: 'close friend' },
    'أَمَرَ': { gloss: 'to command, order' },
    'دَعَا': { gloss: 'to call, invite, summon' },
    'قَوْم': { gloss: 'people, tribe, folk' },
    'عِبَادَة': { gloss: 'worship' },
    'عَالَم': { gloss: 'world, realm (pl. عَالَمِينَ = "all the worlds")' },
  },
  paragraphs: [
    {
      en: "Ibrāhīm knew that Allah is his Lord, because Allah is living -- He does not die -- and everlasting -- He does not disappear -- and powerful -- nothing overcomes Him. Ibrāhīm knew that Allah is the Lord of the star, and the Lord of the moon, and the Lord of the sun, and the Lord of all the worlds! Allah guided Ibrāhīm and made him a prophet and a close friend. And Allah commanded Ibrāhīm to call his people and restrain them from worshipping the idols.",
      sentences: [
        {
          id: 'qs-v1-c08-001',
          ar: 'وَعَرَفَ إِبْرَاهِيمُ أَنَّ اللَّهَ رَبُّهُ.',
          en: 'And Ibrāhīm knew that Allah is his Lord,',
          tokens: [
            { surface: 'وَعَرَفَ', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ر ف', gloss: 'to know; knew' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'رَبُّهُ', lemma: 'رَبّ', pos: 'noun', features: 'nom+3ms', root: 'ر ب ب', gloss: 'his Lord' },
          ],
        },
        {
          id: 'qs-v1-c08-002',
          ar: 'لِأَنَّ اللَّهَ حَيٌّ لَا يَمُوتُ.',
          en: 'because Allah is living -- He does not die --',
          tokens: [
            { surface: 'لِأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'prep+part', gloss: 'because' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'حَيٌّ', lemma: 'حَيّ', pos: 'adj', features: 'indef.nom', root: 'ح ي ي', gloss: 'living' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَمُوتُ', lemma: 'مَاتَ', pos: 'verb', features: 'impf.3ms', root: 'م و ت', gloss: 'to die; dies' },
          ],
        },
        {
          id: 'qs-v1-c08-003',
          ar: 'وَأَنَّ اللَّهَ بَاقٍ لَا يَغِيبُ.',
          en: 'and everlasting -- He does not disappear --',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'بَاقٍ', lemma: 'بَقِيَ', pos: 'adj', features: 'indef.nom', root: 'ب ق ي', gloss: 'everlasting, remaining (manqūṣ participle)' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَغِيبُ', lemma: 'غَابَ', pos: 'verb', features: 'impf.3ms', root: 'غ ي ب', gloss: 'to disappear; disappears' },
          ],
        },
        {
          id: 'qs-v1-c08-004',
          ar: 'وَأَنَّ اللَّهَ قَوِيٌّ لَا يَغْلِبُهُ شَيْءٌ.',
          en: 'and powerful -- nothing overcomes Him.',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'قَوِيٌّ', lemma: 'قَوِيّ', pos: 'adj', features: 'indef.nom', root: 'ق و ي', gloss: 'powerful, strong' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَغْلِبُهُ', lemma: 'غَلَبَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'غ ل ب', gloss: 'to overcome; overcomes him' },
            { surface: 'شَيْءٌ', lemma: 'شَيْء', pos: 'noun', features: 'indef.nom', root: 'ش ي أ', gloss: 'thing, anything' },
          ],
        },
        {
          id: 'qs-v1-c08-005',
          ar: 'وَعَرَفَ إِبْرَاهِيمُ أَنَّ اللَّهَ رَبُّ الْكَوْكَبِ!',
          en: 'And Ibrāhīm knew that Allah is the Lord of the star!',
          tokens: [
            { surface: 'وَعَرَفَ', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ر ف', gloss: 'to know; knew' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'رَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'nom.constr', root: 'ر ب ب', gloss: 'Lord (of)' },
            { surface: 'الْكَوْكَبِ', lemma: 'كَوْكَب', pos: 'noun', features: 'def.gen', root: 'ك و ك ب', gloss: 'the star' },
          ],
        },
        {
          id: 'qs-v1-c08-006',
          ar: 'وَأَنَّ اللَّهَ رَبُّ الْقَمَرِ!',
          en: 'and the Lord of the moon!',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'رَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'nom.constr', root: 'ر ب ب', gloss: 'Lord (of)' },
            { surface: 'الْقَمَرِ', lemma: 'قَمَر', pos: 'noun', features: 'def.gen', root: 'ق م ر', gloss: 'the moon' },
          ],
        },
        {
          id: 'qs-v1-c08-007',
          ar: 'وَأَنَّ اللَّهَ رَبُّ الشَّمْسِ!',
          en: 'and the Lord of the sun!',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'رَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'nom.constr', root: 'ر ب ب', gloss: 'Lord (of)' },
            { surface: 'الشَّمْسِ', lemma: 'شَمْس', pos: 'noun', features: 'def.gen', root: 'ش م س', gloss: 'the sun' },
          ],
        },
        {
          id: 'qs-v1-c08-008',
          ar: 'وَأَنَّ اللَّهَ رَبُّ الْعَالَمِينَ!',
          en: 'and the Lord of all the worlds!',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'رَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'nom.constr', root: 'ر ب ب', gloss: 'Lord (of)' },
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'pl.def.gen', root: 'ع ل م', gloss: 'the worlds' },
          ],
        },
        {
          id: 'qs-v1-c08-009',
          ar: 'وَهَدَى اللَّهُ إِبْرَاهِيمَ',
          en: 'Allah guided Ibrāhīm',
          tokens: [
            { surface: 'وَهَدَى', lemma: 'هَدَى', pos: 'verb', features: 'conj+perf.3ms', root: 'ه د ي', gloss: 'to guide; guided' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'acc', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c08-010',
          ar: 'وَجَعَلَهُ نَبِيًّا وَخَلِيلًا.',
          en: 'and made him a prophet and a close friend.',
          tokens: [
            { surface: 'وَجَعَلَهُ', lemma: 'جَعَلَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ج ع ل', gloss: 'to make; made him' },
            { surface: 'نَبِيًّا', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.acc', root: 'ن ب أ', gloss: 'a prophet' },
            { surface: 'وَخَلِيلًا', lemma: 'خَلِيل', pos: 'noun', features: 'conj+indef.acc', root: 'خ ل ل', gloss: 'and a close friend' },
          ],
        },
        {
          id: 'qs-v1-c08-011',
          ar: 'وَأَمَرَ اللَّهُ إِبْرَاهِيمَ،',
          en: 'And Allah commanded Ibrāhīm',
          tokens: [
            { surface: 'وَأَمَرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'أ م ر', gloss: 'to command; commanded' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'acc', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c08-012',
          ar: 'أَنْ يَدْعُوَ قَوْمَهُ',
          en: 'to call his people',
          tokens: [
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَدْعُوَ', lemma: 'دَعَا', pos: 'verb', features: 'impf.3ms', root: 'د ع و', gloss: 'to call, invite' },
            { surface: 'قَوْمَهُ', lemma: 'قَوْم', pos: 'noun', features: 'acc+3ms', root: 'ق و م', gloss: 'his people' },
          ],
        },
        {
          id: 'qs-v1-c08-013',
          ar: 'وَيَمْنَعَهُمْ مِنْ عِبَادَةِ الْأَصْنَامِ.',
          en: 'and restrain them from worshipping the idols.',
          tokens: [
            { surface: 'وَيَمْنَعَهُمْ', lemma: 'مَنَعَ', pos: 'verb', features: 'conj+impf.3ms+3mp', root: 'م ن ع', gloss: 'to prevent; and restrain them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'عِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'gen.constr', root: 'ع ب د', gloss: 'worship (of)' },
            { surface: 'الْأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.gen', root: 'ص ن م', gloss: 'the idols' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا عَرَفَ إِبْرَاهِيمُ عَنِ اللَّهِ؟',
          options: ['أَنَّهُ رَبُّ كُلِّ شَيْءٍ', 'أَنَّهُ صَنَمٌ', 'أَنَّهُ كَوْكَبٌ'],
          answer: 0,
          qEn: 'What did Ibrāhīm come to know about Allah?',
          optionsEn: ['That He is the Lord of everything', 'That He is an idol', 'That He is a star'],
        },
        {
          q: 'مَاذَا جَعَلَ اللَّهُ إِبْرَاهِيمَ؟',
          options: ['نَبِيًّا وَخَلِيلًا', 'مَلِكًا', 'تَاجِرًا'],
          answer: 0,
          qEn: 'What did Allah make Ibrāhīm?',
          optionsEn: ['A prophet and a close friend', 'A king', 'A merchant'],
        },
        {
          q: 'بِمَاذَا أَمَرَ اللَّهُ إِبْرَاهِيمَ؟',
          options: ['أَنْ يَدْعُوَ قَوْمَهُ وَيَمْنَعَهُمْ مِنْ عِبَادَةِ الْأَصْنَامِ', 'أَنْ يَبْنِيَ بَيْتًا', 'أَنْ يُسَافِرَ'],
          answer: 0,
          qEn: 'What did Allah command Ibrāhīm to do?',
          optionsEn: ['To call his people and restrain them from worshipping idols', 'To build a house', 'To travel'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَعَرَفَ إِبْرَاهِيمُ أَنَّ اللَّهَ',
        post: 'الْكَوْكَبِ!',
        en: 'And Ibrāhīm knew that Allah is the Lord of the star!',
        options: ['رَبُّ', 'رَبَّ', 'رَبِّ', 'أَرْبَاب'],
        answer: 0,
        rationales: [
          "Nominative mudāf -- خَبَر of أَنَّ, and رَبُّ الْكَوْكَبِ is a full noun+noun iḍāfa.",
          'Accusative -- but the khabar of أَنَّ takes the nominative, not the accusative.',
          'Genitive -- nothing here governs the genitive.',
          'Plural -- but only one Lord is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَجَعَلَهُ',
        post: 'وَخَلِيلًا.',
        en: 'and made him a prophet and a close friend.',
        options: ['نَبِيًّا', 'نَبِيٌّ', 'نَبِيٍّ', 'أَنْبِيَاء'],
        answer: 0,
        rationales: [
          'Accusative -- second object of the double-transitive verb جَعَلَ.',
          'Nominative -- wrong case for an object.',
          'Genitive -- nothing here governs the genitive.',
          'Plural -- but only Ibrāhīm, one person, is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَمَرَ اللَّهُ إِبْرَاهِيمَ، أَنْ',
        post: 'قَوْمَهُ.',
        en: 'And Allah commanded Ibrāhīm to call his people.',
        options: ['يَدْعُوَ', 'يَدْعُو', 'دَعَا', 'يُدْعَى'],
        answer: 0,
        rationales: [
          'Subjunctive after أَنْ -- the final وْ takes a fatḥah.',
          'Indicative -- wrong mood; أَنْ requires the subjunctive.',
          'Perfect -- wrong tense; أَنْ requires an imperfect verb.',
          'Passive -- wrong voice; Ibrāhīm is the one doing the calling.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'وَجَعَلَهُ نَبِيًّا',
        pre: 'وَ',
        post: 'نَبِيًّا',
        targetPerson: 'أَنَا',
        targetEn: 'me',
        options: ['جَعَلَنِي', 'جَعَلَهُ', 'جَعَلَكَ', 'جَعَلَهَا'],
        answer: 0,
        rationales: [
          'Object suffix نِي = "me" -- matches أَنَا.',
          'Object suffix هُ = "him" -- the form already given.',
          'Object suffix كَ = "you (m.)" -- wrong person.',
          'Object suffix هَا = "her" -- wrong person and gender.',
        ],
      },
      {
        type: 'shift',
        base: 'وَجَعَلَهُ نَبِيًّا',
        pre: 'وَ',
        post: 'نَبِيًّا',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['جَعَلَكَ', 'جَعَلَنِي', 'جَعَلَهُ', 'جَعَلَهَا'],
        answer: 0,
        rationales: [
          'Object suffix كَ = "you (m.)" -- matches أَنْتَ.',
          'Object suffix نِي = "me" -- wrong person.',
          'Object suffix هُ = "him" -- the form already given.',
          'Object suffix هَا = "her" -- wrong person and gender.',
        ],
      },
      {
        type: 'shift',
        base: 'وَجَعَلَهُ نَبِيًّا',
        pre: 'وَ',
        post: 'نَبِيًّا',
        targetPerson: 'هِيَ',
        targetEn: 'her',
        options: ['جَعَلَهَا', 'جَعَلَهُ', 'جَعَلَنِي', 'جَعَلَكَ'],
        answer: 0,
        rationales: [
          'Object suffix هَا = "her" -- matches هِيَ.',
          'Object suffix هُ = "him" -- the form already given, wrong gender.',
          'Object suffix نِي = "me" -- wrong person.',
          'Object suffix كَ = "you (m.)" -- wrong person.',
        ],
      },
    ],
  },
};

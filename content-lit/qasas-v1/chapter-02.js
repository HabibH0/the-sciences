// قَصَصُ النَّبِيِّينَ, volume 1 «مَنْ كَسَرَ الأَصْنَامَ؟», chapter 2 -- وَلَدُ آزَرَ.
// Printed page 10. Transcribed by hand from the scan (vision OCR, 300dpi
// render) against QASAS_AGENT_BRIEF.md and ../CHAPTER-FORMAT.md.
//
// Two recycled frames on this page: the كَانَ + imperfect-verb habitual (as
// in ch1), and -- new here -- أَنَّ + accusative subject + predicate,
// repeated four times (أَنَّ الْأَصْنَامَ حِجَارَةٌ / لَا تَتَكَلَّمُ... / لَا تَضُرُّ... /
// أَنَّ الذُّبَابَ يَجْلِسُ...). Ch1's workshop already drilled the كَانَ frame, so
// this chapter's workshop drills أَنَّ instead.
//
// Grammatical note for QA: أَصْنَام (broken plural, non-human) takes feminine
// singular verb/adjective agreement (تَتَكَلَّمُ، تَضُرُّ...); الذُّبَاب (collective
// singular) takes masculine singular agreement (يَجْلِسُ) -- both correctly
// distinguished below, not a typo.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch2',
  title: { ar: 'وَلَدُ آزَرَ', en: "Āzar's Son" },
  newWords: [
    'وَلَد', 'رَشِيد', 'إِبْرَاهِيم', 'رَأَى', 'عَرَفَ', 'حِجَارَة',
    'تَكَلَّمَ', 'سَمِعَ', 'ضَرَّ', 'نَفَعَ', 'ذُبَاب', 'جَلَسَ', 'دَفَعَ',
    'فَأْر', 'أَكَلَ', 'طَعَام', 'مَنَعَ', 'نَفْس', 'سَأَلَ',
  ],
  lemmas: {
    'وَلَد': { gloss: 'son, child, boy' },
    'رَشِيد': { gloss: 'mature, of sound judgement' },
    'إِبْرَاهِيم': { gloss: 'Ibrāhīm' },
    'رَأَى': { gloss: 'to see' },
    'عَرَفَ': { gloss: 'to know' },
    'حِجَارَة': { gloss: 'stones' },
    'تَكَلَّمَ': { gloss: 'to speak' },
    'سَمِعَ': { gloss: 'to hear' },
    'ضَرَّ': { gloss: 'to harm' },
    'نَفَعَ': { gloss: 'to benefit' },
    'ذُبَاب': { gloss: 'flies (collective)' },
    'جَلَسَ': { gloss: 'to sit, settle, land' },
    'دَفَعَ': { gloss: 'to push away, repel' },
    'فَأْر': { gloss: 'mouse, rat' },
    'أَكَلَ': { gloss: 'to eat' },
    'طَعَام': { gloss: 'food' },
    'مَنَعَ': { gloss: 'to prevent, withhold' },
    'نَفْس': { gloss: 'self, soul' },
    'سَأَلَ': { gloss: 'to ask' },
    'لِمَاذَا': { gloss: 'why' },
  },
  paragraphs: [
    {
      en: 'And Āzar had a mature son, very mature indeed. And the name of this son was Ibrāhīm. And Ibrāhīm used to see the people prostrating to the idols. and sees the people worshipping the idols. And Ibrāhīm used to know that the idols were stones.',
      sentences: [
        {
          id: 'qs-v1-c02-001',
          ar: 'وَكَانَ آزَرُ لَهُ وَلَدٌ رَشِيدٌ،',
          en: 'And Āzar had a mature son,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and...had' },
            { surface: 'آزَرُ', lemma: 'آزَر', pos: 'proper', features: 'nom', gloss: 'Āzar' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to/for him' },
            { surface: 'وَلَدٌ', lemma: 'وَلَد', pos: 'noun', features: 'indef.nom', root: 'و ل د', gloss: 'son, child' },
            { surface: 'رَشِيدٌ', lemma: 'رَشِيد', pos: 'adj', features: 'indef.nom', root: 'ر ش د', gloss: 'mature, of sound judgement' },
          ],
        },
        {
          id: 'qs-v1-c02-002',
          ar: 'رَشِيدٌ جِدًّا.',
          en: 'very mature indeed.',
          tokens: [
            { surface: 'رَشِيدٌ', lemma: 'رَشِيد', pos: 'adj', features: 'indef.nom', root: 'ر ش د', gloss: 'mature, of sound judgement' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very, greatly' },
          ],
        },
        {
          id: 'qs-v1-c02-003',
          ar: 'وَكَانَ اسْمُ هَذَا الْوَلَدِ إِبْرَاهِيمَ.',
          en: 'And the name of this son was Ibrāhīm.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and...was' },
            { surface: 'اسْمُ', lemma: 'اِسْم', pos: 'noun', features: 'nom.constr', root: 'س م و', gloss: 'name' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْوَلَدِ', lemma: 'وَلَد', pos: 'noun', features: 'def.gen', root: 'و ل د', gloss: 'son, child' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'acc', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c02-004',
          ar: 'وَكَانَ إِبْرَاهِيمُ يَرَى النَّاسَ يَسْجُدُونَ لِلْأَصْنَامِ.',
          en: 'And Ibrāhīm used to see the people prostrating to the idols.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and...used to' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', root: 'ر أ ي', gloss: 'to see' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', root: 'ن و س', gloss: 'people' },
            { surface: 'يَسْجُدُونَ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3mp', root: 'س ج د', gloss: 'to prostrate' },
            { surface: 'لِلْأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'prep+pl.def.gen', root: 'ص ن م', gloss: 'to the idols' },
          ],
        },
        {
          id: 'qs-v1-c02-005',
          ar: 'وَيَرَى النَّاسَ يَعْبُدُونَ الْأَصْنَامَ.',
          en: 'and sees the people worshipping the idols.',
          tokens: [
            { surface: 'وَيَرَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+impf.3ms', root: 'ر أ ي', gloss: 'and sees' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', root: 'ن و س', gloss: 'people' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', root: 'ع ب د', gloss: 'to worship' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'idols' },
          ],
        },
        {
          id: 'qs-v1-c02-006',
          ar: 'وَكَانَ إِبْرَاهِيمُ يَعْرِفُ أَنَّ الْأَصْنَامَ حِجَارَةٌ.',
          en: 'And Ibrāhīm used to know that the idols were stones.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and...used to' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', root: 'ع ر ف', gloss: 'to know' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'idols' },
            { surface: 'حِجَارَةٌ', lemma: 'حِجَارَة', pos: 'noun', features: 'indef.nom', root: 'ح ج ر', gloss: 'stones' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ كَانَ اسْمُهُ إِبْرَاهِيمَ؟',
          options: ['وَلَدُ آزَرَ', 'أَخُو آزَرَ', 'صَدِيقُ آزَرَ'],
          answer: 0,
          qEn: 'Whose name was Ibrāhīm?',
          optionsEn: ["Āzar's son", "Āzar's brother", "Āzar's friend"],
        },
        {
          q: 'مَاذَا كَانَتِ الْأَصْنَامُ؟',
          options: ['حِجَارَةً', 'ذَهَبًا', 'خَشَبًا'],
          answer: 0,
          qEn: 'What were the idols?',
          optionsEn: ['Stones', 'Gold', 'Wood'],
        },
      ],
    },
    {
      en: 'And he used to know that the idols neither speak nor hear. And he used to know that the idols neither harm nor benefit. And he used to see that flies would land on the idols, yet they could not repel them. And he used to see the mouse eating the idols’ food, yet they could not stop it. And Ibrāhīm used to say to himself: Why do the people prostrate to the idols?! And Ibrāhīm used to ask himself: Why do they ask the idols for anything?!',
      sentences: [
        {
          id: 'qs-v1-c02-007',
          ar: 'وَكَانَ يَعْرِفُ أَنَّ الْأَصْنَامَ لَا تَتَكَلَّمُ وَلَا تَسْمَعُ.',
          en: 'And he used to know that the idols neither speak nor hear.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and...used to' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', root: 'ع ر ف', gloss: 'to know' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'idols' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَتَكَلَّمُ', lemma: 'تَكَلَّمَ', pos: 'verb', features: 'impf.3fs', root: 'ك ل م', gloss: 'to speak' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَسْمَعُ', lemma: 'سَمِعَ', pos: 'verb', features: 'impf.3fs', root: 'س م ع', gloss: 'to hear' },
          ],
        },
        {
          id: 'qs-v1-c02-008',
          ar: 'وَكَانَ يَعْرِفُ أَنَّ الْأَصْنَامَ لَا تَضُرُّ وَلَا تَنْفَعُ.',
          en: 'And he used to know that the idols neither harm nor benefit.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and...used to' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', root: 'ع ر ف', gloss: 'to know' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'idols' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَضُرُّ', lemma: 'ضَرَّ', pos: 'verb', features: 'impf.3fs', root: 'ض ر ر', gloss: 'to harm' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَنْفَعُ', lemma: 'نَفَعَ', pos: 'verb', features: 'impf.3fs', root: 'ن ف ع', gloss: 'to benefit' },
          ],
        },
        {
          id: 'qs-v1-c02-009',
          ar: 'وَكَانَ يَرَى أَنَّ الذُّبَابَ يَجْلِسُ عَلَى الْأَصْنَامِ فَلَا تَدْفَعُ.',
          en: 'And he used to see that flies would land on the idols, yet they could not repel them.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and...used to' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', root: 'ر أ ي', gloss: 'to see' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الذُّبَابَ', lemma: 'ذُبَاب', pos: 'noun', features: 'def.acc', root: 'ذ ب ب', gloss: 'flies (collective)' },
            { surface: 'يَجْلِسُ', lemma: 'جَلَسَ', pos: 'verb', features: 'impf.3ms', root: 'ج ل س', gloss: 'to sit, settle, land' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'الْأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.gen', root: 'ص ن م', gloss: 'idols' },
            { surface: 'فَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'yet not' },
            { surface: 'تَدْفَعُ', lemma: 'دَفَعَ', pos: 'verb', features: 'impf.3fs', root: 'د ف ع', gloss: 'to push away, repel' },
          ],
        },
        {
          id: 'qs-v1-c02-010',
          ar: 'وَكَانَ يَرَى الْفَأْرَ يَأْكُلُ طَعَامَ الْأَصْنَامِ فَلَا تَمْنَعُ.',
          en: 'And he used to see the mouse eating the idols’ food, yet they could not stop it.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and...used to' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', root: 'ر أ ي', gloss: 'to see' },
            { surface: 'الْفَأْرَ', lemma: 'فَأْر', pos: 'noun', features: 'def.acc', root: 'ف أ ر', gloss: 'mouse, rat' },
            { surface: 'يَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3ms', root: 'أ ك ل', gloss: 'to eat' },
            { surface: 'طَعَامَ', lemma: 'طَعَام', pos: 'noun', features: 'acc.constr', root: 'ط ع م', gloss: 'food' },
            { surface: 'الْأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.gen', root: 'ص ن م', gloss: 'idols' },
            { surface: 'فَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'yet not' },
            { surface: 'تَمْنَعُ', lemma: 'مَنَعَ', pos: 'verb', features: 'impf.3fs', root: 'م ن ع', gloss: 'to prevent, withhold' },
          ],
        },
        {
          id: 'qs-v1-c02-011',
          ar: 'وَكَانَ إِبْرَاهِيمُ يَقُولُ فِي نَفْسِهِ:',
          en: 'And Ibrāhīm used to say to himself:',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and...used to' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', root: 'ق و ل', gloss: 'to say' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, to' },
            { surface: 'نَفْسِهِ', lemma: 'نَفْس', pos: 'noun', features: 'gen+3ms', root: 'ن ف س', gloss: 'himself' },
          ],
        },
        {
          id: 'qs-v1-c02-012',
          ar: 'لِمَاذَا يَسْجُدُ النَّاسُ لِلْأَصْنَامِ؟!',
          en: 'Why do the people prostrate to the idols?!',
          tokens: [
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'adv', gloss: 'why' },
            { surface: 'يَسْجُدُ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3ms', root: 'س ج د', gloss: 'to prostrate' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
            { surface: 'لِلْأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'prep+pl.def.gen', root: 'ص ن م', gloss: 'to the idols' },
          ],
        },
        {
          id: 'qs-v1-c02-013',
          ar: 'وَكَانَ إِبْرَاهِيمُ يَسْأَلُ نَفْسَهُ:',
          en: 'And Ibrāhīm used to ask himself:',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and...used to' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'يَسْأَلُ', lemma: 'سَأَلَ', pos: 'verb', features: 'impf.3ms', root: 'س أ ل', gloss: 'to ask' },
            { surface: 'نَفْسَهُ', lemma: 'نَفْس', pos: 'noun', features: 'acc+3ms', root: 'ن ف س', gloss: 'himself' },
          ],
        },
        {
          id: 'qs-v1-c02-014',
          ar: 'لِمَاذَا يَسْأَلُ النَّاسُ الْأَصْنَامَ؟!',
          en: 'Why do they ask the idols for anything?!',
          tokens: [
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'adv', gloss: 'why' },
            { surface: 'يَسْأَلُ', lemma: 'سَأَلَ', pos: 'verb', features: 'impf.3ms', root: 'س أ ل', gloss: 'to ask' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'idols' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ إِبْرَاهِيمُ يَرَى الذُّبَابَ وَالْفَأْرَ يَفْعَلَانِ بِالْأَصْنَامِ؟',
          options: [
            'الذُّبَابُ يَجْلِسُ عَلَيْهَا وَالْفَأْرُ يَأْكُلُ طَعَامَهَا وَلَا تَقْدِرُ عَلَى شَيْءٍ',
            'كَانَا يَخَافَانِ مِنَ الْأَصْنَامِ',
            'كَانَتِ الْأَصْنَامُ تَطْرُدُهُمَا',
          ],
          answer: 0,
          qEn: 'What did Ibrāhīm see the flies and the mouse doing to the idols?',
          optionsEn: [
            'Flies would land on them and a mouse would eat their food, and they could do nothing about it',
            'They were afraid of the idols',
            'The idols would drive them away',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ يَعْرِفُ أَنَّ',
        post: 'لَا تَتَكَلَّمُ وَلَا تَسْمَعُ.',
        en: 'And he knew that the idols neither speak nor hear.',
        options: ['الْأَصْنَامَ', 'الْأَصْنَامُ', 'الْأَصْنَامِ', 'أَصْنَامٌ'],
        answer: 0,
        rationales: [
          'اسم أَنَّ is accusative -- أَنَّ always takes the accusative on its subject.',
          'Nominative -- but أَنَّ requires the accusative here, not the nominative.',
          'Genitive -- nothing here governs the genitive.',
          'Indefinite -- but these are the idols already introduced, so they take الـ.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ يَعْرِفُ أَنَّ الْأَصْنَامَ لَا',
        post: 'وَلَا تَنْفَعُ.',
        en: 'And he knew that the idols neither harm nor benefit.',
        options: ['تَضُرُّ', 'يَضُرُّ', 'ضَرَّتْ', 'تَضُرَّانِ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- a non-human plural like الأصنام takes feminine-singular agreement.',
          '3rd masculine singular -- wrong agreement for a plural of things.',
          'Perfect -- harmed once, not a standing fact.',
          'Dual -- the two of them harm.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ يَرَى أَنَّ',
        post: 'يَجْلِسُ عَلَى الْأَصْنَامِ فَلَا تَدْفَعُ.',
        en: 'And he saw that flies would land on the idols, yet they could not repel them.',
        options: ['الذُّبَابَ', 'الذُّبَابُ', 'الذُّبَابِ', 'ذُبَابٌ'],
        answer: 0,
        rationales: [
          'اسم أَنَّ is accusative.',
          'Nominative -- wrong case after أَنَّ.',
          'Genitive -- nothing governs it here.',
          'Indefinite -- but the flies were already introduced, so definite.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ آزَرُ',
        post: 'وَلَدٌ رَشِيدٌ.',
        en: 'And Āzar had a mature son.',
        options: ['لَهُ', 'لَهَا', 'لَكَ', 'لَهُمْ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches آزَرُ, a man.',
          '3rd feminine singular -- her.',
          '2nd masculine singular -- you.',
          '3rd masculine plural -- them.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَعْرِفُ إِبْرَاهِيمُ أَنَّ الْأَصْنَامَ حِجَارَةٌ',
        pre: '',
        post: 'إِبْرَاهِيمُ أَنَّ الْأَصْنَامَ حِجَارَةٌ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَعْرِفُ', 'يَعْرِفُ', 'أَعْرِفُ', 'يَعْرِفُونَ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he.',
          '1st person singular -- I.',
          '3rd masculine plural -- they.',
        ],
      },
      {
        type: 'shift',
        base: 'يَعْرِفُ إِبْرَاهِيمُ أَنَّ الْأَصْنَامَ حِجَارَةٌ',
        pre: '',
        post: 'إِبْرَاهِيمُ أَنَّ الْأَصْنَامَ حِجَارَةٌ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَعْرِفُ', 'يَعْرِفُ', 'تَعْرِفُ', 'أَعْرِفُ'],
        answer: 0,
        rationales: [
          '1st person plural -- matches نَحْنُ.',
          '3rd masculine singular -- he.',
          '2nd masculine or 3rd feminine singular.',
          '1st person singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'يَرَى إِبْرَاهِيمُ النَّاسَ يَسْجُدُونَ لِلْأَصْنَامِ',
        pre: '',
        post: 'إِبْرَاهِيمُ النَّاسَ يَسْجُدُونَ لِلْأَصْنَامِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَرَى', 'يَرَى', 'أَرَى', 'يَرَوْنَ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he.',
          '1st person singular -- I.',
          '3rd masculine plural -- they.',
        ],
      },
      {
        type: 'shift',
        base: 'يَرَى إِبْرَاهِيمُ النَّاسَ يَسْجُدُونَ لِلْأَصْنَامِ',
        pre: '',
        post: 'إِبْرَاهِيمُ النَّاسَ يَسْجُدُونَ لِلْأَصْنَامِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَرَى', 'يَرَى', 'تَرَى', 'نَرَى'],
        answer: 0,
        rationales: [
          '1st person singular -- matches أَنَا.',
          '3rd masculine singular -- he.',
          '2nd masculine or 3rd feminine singular.',
          '1st person plural -- we.',
        ],
      },
    ],
  },
};

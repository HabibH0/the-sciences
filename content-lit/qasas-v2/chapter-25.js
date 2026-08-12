// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 25 -- حُسْنُ
// الْعَاقِبَةِ. Printed pages 60 (from the heading, partway down the page,
// right after ch24's closing sentence higher up) - 61 (ending with the
// three decorative dividers ❋ ❋ ❋ that close the whole volume -- same
// closing-divider convention as volume 1's page 26; see qasas-v1
// ch16's header comment). THIS IS THE LAST CHAPTER OF QASAS VOLUME 2 --
// no further content follows page 61 before the divider. Transcribed by
// hand from the scan (vision OCR, 300dpi render) against
// ../CHAPTER-FORMAT.md. Closes the Yūsuf story on its real theme: kingship
// never changed him, and his own prayer (Sūrat Yūsuf 12:101) -- to die
// submitting to Allah and be joined with the righteous -- is answered
// verbatim in the narrator's closing line.
//
// Grammar / lexical notes:
//   -- رَبِّ (qs-v2-c25-012) and فَاطِرَ (qs-v2-c25-014) are both elliptical
//      vocatives (منادى مضاف, يَا omitted as is standard in Qur'anic دعاء)
//      -- tagged accusative with the 1st-person suffix per the same
//      pattern already established at qs-v2-c01-034 (يَا وَلَدِي, "a
//      vocative construct with an attached pronoun takes the accusative").
//   -- حَكَمَ ("to judge, rule," qs-v2-c25-004) is a new verb lemma distinct
//      from the already-taught noun حُكْم (ch11, "judgment, rule") -- both
//      appear together in the same sentence (يَحْكُمُ بِحُكْمِ اللَّهِ),
//      following the same distinct-but-related-lemma pattern as ch24's
//      حَمِدَ/حَمْد and شَكَرَ/شُكْر.
//   -- مَوْت ("death," qs-v2-c25-007/009) is a new standalone noun lemma,
//      distinct from the already-taught verb مَاتَ -- both appear in the
//      same construct phrase (يَمُوتَ مَوْتَ مَلِكٍ, lit. "die the death of a
//      king," the classical cognate-object/إضافة construction).
//   -- صَالِح ("righteous," qs-v2-c25-010/017) is a new standalone
//      participle/adjective lemma -- the base verb صَلَحَ is not otherwise
//      taught, matching the same standalone-participle convention used
//      throughout (حَافِظ ch3, كَاذِب/خَاطِئ ch8, بَشِير/مَشْهُود/مُبَارَك ch24).
//   -- فَاطِر ("Originator," qs-v2-c25-014, one of Allah's names) is
//      likewise a new standalone participle lemma; the base verb فَطَرَ is
//      not otherwise taught.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): يُوسُف، هَذَا، مُلْك
//      (ch11)، عَظِيم (ch9/20)، عَنْ، اللَّه، كَانَ، ذَكَرَ، عَبَدَ (qasas-v1
//      ch1)، خَافَ (qasas-v1 ch10)، حُكْم (ch11)، أَمْر، رَأَى، كَثِير، شَيْء
//      (qasas-v1 ch3)، كَبِير، أَحَبَّ (qasas-v1 ch14)، أَنْ، مَلِك، مَعَ، عَبْد
//      (ch9)، قَدْ، آتَى (ch11)، مِنْ، عَلَّمَ (ch10)، تَأْوِيل (ch9)، سَمَاء
//      (ch11)، أَرْض، أَنْتَ (2ms atom family)، فِي، مُسْلِم (qasas-v1 ch14)،
//      آبَاء/أَب، إِبْرَاهِيم (qasas-v1 ch2)، إِسْحَاق (qasas-v1 ch16)، يَعْقُوب،
//      صَلَّى/سَلَّمَ (qasas-v1 ch14)، عَلَى، نَبِيّ
//      are all already taught (or reused per the notes above) and are NOT
//      re-listed in newWords here.
//
// 16 new words (شَغَلَ، غَيَّرَ، حَكَمَ، نَفَّذَ، عَدَّ، حَشَرَ، صَالِح، دُعَاء،
// حَدِيث، فَاطِر، وَلِيّ، دُنْيَا، آخِرَة، تَوَفَّى، أَلْحَقَ، مَوْت).
//
// No page footnotes (book_note) on this page; the circled ayah number
// (١٠١) is the standard Sūrat Yūsuf verse number and is not transcribed as
// text/tokens. The three decorative asterisks/rosettes after
// qs-v2-c25-020 mark the end of the printed volume and are not
// transcribed either.
export const CHAPTER = {
  id: 'ch25',
  title: { ar: 'حُسْنُ الْعَاقِبَةِ', en: 'The Good Ending' },
  newWords: [
    'شَغَلَ', 'غَيَّرَ', 'حَكَمَ', 'نَفَّذَ', 'عَدَّ', 'حَشَرَ', 'صَالِح', 'دُعَاء',
    'حَدِيث', 'فَاطِر', 'وَلِيّ', 'دُنْيَا', 'آخِرَة', 'تَوَفَّى', 'أَلْحَقَ', 'مَوْت',
  ],
  lemmas: {
    شَغَلَ: { gloss: 'to occupy, distract, keep busy' },
    غَيَّرَ: { gloss: 'to change' },
    حَكَمَ: { gloss: 'to judge, rule, govern' },
    نَفَّذَ: { gloss: 'to carry out, execute' },
    عَدَّ: { gloss: 'to count, consider, reckon' },
    حَشَرَ: { gloss: 'to gather, assemble' },
    صَالِح: { gloss: 'righteous, good' },
    دُعَاء: { gloss: 'supplication, prayer' },
    حَدِيث: { gloss: 'speech, account, narrative (here: events, dreams)' },
    فَاطِر: { gloss: 'Originator, Creator (lit. splitter)' },
    وَلِيّ: { gloss: 'guardian, protector, ally' },
    دُنْيَا: { gloss: 'this world, this life' },
    آخِرَة: { gloss: 'the Hereafter' },
    تَوَفَّى: { gloss: 'to cause to die, take the soul of' },
    أَلْحَقَ: { gloss: 'to join, attach, unite with' },
    مَوْت: { gloss: 'death' },
  },
  paragraphs: [
    {
      en: 'This great kingdom did not distract Yūsuf from Allah, nor change him. Yūsuf used to remember Allah, worship Him, and fear Him. Yūsuf used to judge by Allah\'s law and carry out Allah\'s commands. Yūsuf did not see his kingship as something great, nor consider it a great thing,',
      sentences: [
        {
          id: 'qs-v2-c25-001',
          ar: 'وَلَمْ يَشْغَلْ يُوسُفَ هَذَا الْمُلْكُ الْعَظِيمُ عَنِ اللَّهِ',
          en: 'This great kingdom did not distract Yūsuf from Allah,',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and did not' },
            { surface: 'يَشْغَلْ', lemma: 'شَغَلَ', pos: 'verb', features: 'impf.3ms', root: 'ش غ ل', gloss: 'to occupy, distract; distract' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْمُلْكُ', lemma: 'مُلْك', pos: 'noun', features: 'def.nom', gloss: 'the kingdom, sovereignty' },
            { surface: 'الْعَظِيمُ', lemma: 'عَظِيم', pos: 'adj', features: 'def.nom', gloss: 'great' },
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v2-c25-002',
          ar: 'وَلَمْ يُغَيِّرْهُ.',
          en: 'nor change him.',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and did not' },
            { surface: 'يُغَيِّرْهُ', lemma: 'غَيَّرَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'غ ي ر', gloss: 'to change; change him' },
          ],
        },
        {
          id: 'qs-v2-c25-003',
          ar: 'وَكَانَ يُوسُفُ يَذْكُرُ اللَّهَ وَيَعْبُدُهُ وَيَخَافُهُ.',
          en: 'Yūsuf used to remember Allah, worship Him, and fear Him.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'يَذْكُرُ', lemma: 'ذَكَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to remember; remembers' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَيَعْبُدُهُ', lemma: 'عَبَدَ', pos: 'verb', features: 'conj+impf.3ms+3ms', gloss: 'to worship; and worships him' },
            { surface: 'وَيَخَافُهُ', lemma: 'خَافَ', pos: 'verb', features: 'conj+impf.3ms+3ms', gloss: 'to fear; and fears him' },
          ],
        },
        {
          id: 'qs-v2-c25-004',
          ar: 'وَكَانَ يُوسُفُ يَحْكُمُ بِحُكْمِ اللَّهِ وَيُنَفِّذُ أَوَامِرَ اللَّهِ.',
          en: "Yūsuf used to judge by Allah's law and carry out Allah's commands.",
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'يَحْكُمُ', lemma: 'حَكَمَ', pos: 'verb', features: 'impf.3ms', root: 'ح ك م', gloss: 'to judge, rule; judges' },
            { surface: 'بِحُكْمِ', lemma: 'حُكْم', pos: 'noun', features: 'prep+constr.gen', gloss: 'by the judgment of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَيُنَفِّذُ', lemma: 'نَفَّذَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ن ف ذ', gloss: 'to carry out, execute; and carries out' },
            { surface: 'أَوَامِرَ', lemma: 'أَمْر', pos: 'noun', features: 'pl.constr.acc', gloss: 'the commands of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v2-c25-005',
          ar: 'وَكَانَ يُوسُفُ لَا يَرَى الْمُلْكَ كَثِيراً',
          en: 'Yūsuf did not see his kingship as something great,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', root: 'ر أ ي', gloss: 'to see, consider; considers' },
            { surface: 'الْمُلْكَ', lemma: 'مُلْك', pos: 'noun', features: 'def.acc', gloss: 'the kingship' },
            { surface: 'كَثِيراً', lemma: 'كَثِير', pos: 'adj', features: 'indef.acc', gloss: 'much, great' },
          ],
        },
        {
          id: 'qs-v2-c25-006',
          ar: 'وَلَا يَعُدُّهُ شَيْئاً كَبِيراً',
          en: 'nor consider it a great thing,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'يَعُدُّهُ', lemma: 'عَدَّ', pos: 'verb', features: 'impf.3ms+3ms', root: 'ع د د', gloss: 'to count, consider; considers it' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'a thing' },
            { surface: 'كَبِيراً', lemma: 'كَبِير', pos: 'adj', features: 'indef.acc', gloss: 'great' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا لَمْ يُغَيِّرِ الْمُلْكُ يُوسُفَ؟',
          options: ['لِأَنَّهُ كَانَ دَائِماً يَذْكُرُ اللَّهَ وَيَعْبُدُهُ وَيَخَافُهُ', 'لِأَنَّهُ لَمْ يَكُنْ مَلِكاً حَقِيقِيّاً', 'لِأَنَّ إِخْوَتَهُ كَانُوا يُرَاقِبُونَهُ'],
          answer: 0,
          qEn: 'Why did kingship not change Yūsuf?',
          optionsEn: ['Because he always remembered Allah, worshiped Him, and feared Him', 'Because he was not really a king', 'Because his brothers were watching him'],
        },
      ],
    },
    {
      en: 'Yūsuf did not want to die the death of a king, and be gathered with kings. Rather, he wanted to die the death of a servant, and be gathered with the righteous. Yūsuf\'s supplication was: "My Lord, You have given me of the sovereignty,',
      sentences: [
        {
          id: 'qs-v2-c25-007',
          ar: 'وَكَانَ يُوسُفُ لَا يُحِبُّ أَنْ يَمُوتَ مَوْتَ مَلِكٍ',
          en: 'Yūsuf did not want to die the death of a king,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms', gloss: 'to love, want; wants' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَمُوتَ', lemma: 'مَاتَ', pos: 'verb', features: 'impf.3ms', gloss: 'to die; he die' },
            { surface: 'مَوْتَ', lemma: 'مَوْت', pos: 'noun', features: 'constr.acc', root: 'م و ت', gloss: 'the death of' },
            { surface: 'مَلِكٍ', lemma: 'مَلِك', pos: 'noun', features: 'indef.gen', gloss: 'a king' },
          ],
        },
        {
          id: 'qs-v2-c25-008',
          ar: 'وَيُحْشَرَ مَعَ الْمُلُوكِ.',
          en: 'and be gathered with kings.',
          tokens: [
            { surface: 'وَيُحْشَرَ', lemma: 'حَشَرَ', pos: 'verb', features: 'conj+pass+impf.3ms', root: 'ح ش ر', gloss: 'to gather, assemble; and be gathered' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'الْمُلُوكِ', lemma: 'مَلِك', pos: 'noun', features: 'pl.def.gen', gloss: 'the kings' },
          ],
        },
        {
          id: 'qs-v2-c25-009',
          ar: 'بَلْ كَانَ يُحِبُّ أَنْ يَمُوتَ مَوْتَ عَبْدٍ',
          en: 'Rather, he wanted to die the death of a servant,',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms', gloss: 'to love, want; wants' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَمُوتَ', lemma: 'مَاتَ', pos: 'verb', features: 'impf.3ms', gloss: 'to die; he die' },
            { surface: 'مَوْتَ', lemma: 'مَوْت', pos: 'noun', features: 'constr.acc', root: 'م و ت', gloss: 'the death of' },
            { surface: 'عَبْدٍ', lemma: 'عَبْد', pos: 'noun', features: 'indef.gen', gloss: 'a servant' },
          ],
        },
        {
          id: 'qs-v2-c25-010',
          ar: 'وَيُحْشَرَ مَعَ الصَّالِحِينَ.',
          en: 'and be gathered with the righteous.',
          tokens: [
            { surface: 'وَيُحْشَرَ', lemma: 'حَشَرَ', pos: 'verb', features: 'conj+pass+impf.3ms', root: 'ح ش ر', gloss: 'to gather, assemble; and be gathered' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'الصَّالِحِينَ', lemma: 'صَالِح', pos: 'adj', features: 'pl.def.gen', root: 'ص ل ح', gloss: 'the righteous' },
          ],
        },
        {
          id: 'qs-v2-c25-011',
          ar: 'وَكَانَ دُعَاءُ يُوسُفَ:',
          en: "Yūsuf's supplication was:",
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'دُعَاءُ', lemma: 'دُعَاء', pos: 'noun', features: 'constr.nom', root: 'د ع و', gloss: 'the supplication of' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c25-012',
          ar: '﴿رَبِّ قَدْ آتَيْتَنِي مِنَ الْمُلْكِ',
          en: '"My Lord, You have given me of the sovereignty,',
          tokens: [
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'acc+1s', gloss: 'my Lord (O)' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: '(emphasis on completed action)' },
            { surface: 'آتَيْتَنِي', lemma: 'آتَى', pos: 'verb', features: 'perf.2ms+1s', gloss: 'to give; You have given me' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْمُلْكِ', lemma: 'مُلْك', pos: 'noun', features: 'def.gen', gloss: 'the sovereignty' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ يُوسُفُ يُحِبُّ أَنْ يَمُوتَ؟',
          options: ['أَنْ يَمُوتَ مَوْتَ عَبْدٍ وَيُحْشَرَ مَعَ الصَّالِحِينَ', 'أَنْ يَمُوتَ مَوْتَ مَلِكٍ عَظِيمٍ', 'أَنْ يَمُوتَ فِي كَنْعَانَ'],
          answer: 0,
          qEn: 'How did Yūsuf want to die?',
          optionsEn: ['As a servant dies, to be gathered with the righteous', 'As a great king dies', 'In Canaan'],
        },
      ],
    },
    {
      en: 'and taught me the interpretation of dreams; O Originator of the heavens and the earth, You are my protector in this world and the Hereafter; take my soul as one submitting [to You], and join me with the righteous." Allah took his soul as one submitting, and joined him with his fathers, Ibrāhīm, Isḥāq, and Yaʿqūb -- may Allah send blessings upon them and upon our Prophet, and grant them peace.',
      sentences: [
        {
          id: 'qs-v2-c25-013',
          ar: 'وَعَلَّمْتَنِي مِنْ تَأْوِيلِ الأَحَادِيثِ',
          en: 'and taught me the interpretation of dreams;',
          tokens: [
            { surface: 'وَعَلَّمْتَنِي', lemma: 'عَلَّمَ', pos: 'verb', features: 'conj+perf.2ms+1s', gloss: 'to teach; and taught me' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'تَأْوِيلِ', lemma: 'تَأْوِيل', pos: 'noun', features: 'constr.gen', gloss: 'the interpretation of' },
            { surface: 'الأَحَادِيثِ', lemma: 'حَدِيث', pos: 'noun', features: 'pl.def.gen', root: 'ح د ث', gloss: 'events, dreams, narratives' },
          ],
        },
        {
          id: 'qs-v2-c25-014',
          ar: 'فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ',
          en: 'O Originator of the heavens and the earth,',
          tokens: [
            { surface: 'فَاطِرَ', lemma: 'فَاطِر', pos: 'noun', features: 'constr.acc', root: 'ف ط ر', gloss: 'Originator of' },
            { surface: 'السَّمَاوَاتِ', lemma: 'سَمَاء', pos: 'noun', features: 'pl.def.gen', gloss: 'the heavens' },
            { surface: 'وَالأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'conj+def.gen', gloss: 'and the earth' },
          ],
        },
        {
          id: 'qs-v2-c25-015',
          ar: 'أَنتَ وَلِيِّي فِي الدُّنْيَا وَالآخِرَةِ',
          en: 'You are my protector in this world and the Hereafter;',
          tokens: [
            { surface: 'أَنتَ', lemma: 'أَنْتَ', pos: 'noun', features: 'nom.2ms', gloss: 'you' },
            { surface: 'وَلِيِّي', lemma: 'وَلِيّ', pos: 'noun', features: 'nom+1s', root: 'و ل ي', gloss: 'my protector' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الدُّنْيَا', lemma: 'دُنْيَا', pos: 'noun', features: 'def.gen', root: 'د ن و', gloss: 'this world' },
            { surface: 'وَالآخِرَةِ', lemma: 'آخِرَة', pos: 'noun', features: 'conj+def.gen', root: 'أ خ ر', gloss: 'and the Hereafter' },
          ],
        },
        {
          id: 'qs-v2-c25-016',
          ar: 'تَوَفَّنِي مُسْلِماً',
          en: 'take my soul as one submitting [to You],',
          tokens: [
            { surface: 'تَوَفَّنِي', lemma: 'تَوَفَّى', pos: 'verb', features: 'imp.2ms+1s', root: 'و ف ي', gloss: 'to cause to die, take the soul of; take my soul' },
            { surface: 'مُسْلِماً', lemma: 'مُسْلِم', pos: 'noun', features: 'indef.acc', gloss: 'a Muslim, one submitting' },
          ],
        },
        {
          id: 'qs-v2-c25-017',
          ar: 'وَأَلْحِقْنِي بِالصَّالِحِينَ﴾.',
          en: 'and join me with the righteous."',
          tokens: [
            { surface: 'وَأَلْحِقْنِي', lemma: 'أَلْحَقَ', pos: 'verb', features: 'conj+imp.2ms+1s', root: 'ل ح ق', gloss: 'to join, attach; and join me' },
            { surface: 'بِالصَّالِحِينَ', lemma: 'صَالِح', pos: 'adj', features: 'prep+pl.def.gen', gloss: 'with the righteous' },
          ],
        },
        {
          id: 'qs-v2-c25-018',
          ar: 'وَتَوَفَّاهُ اللَّهُ مُسْلِماً',
          en: 'Allah took his soul as one submitting,',
          tokens: [
            { surface: 'وَتَوَفَّاهُ', lemma: 'تَوَفَّى', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'و ف ي', gloss: 'to cause to die, take the soul of; and took his soul' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'مُسْلِماً', lemma: 'مُسْلِم', pos: 'noun', features: 'indef.acc', gloss: 'a Muslim, one submitting' },
          ],
        },
        {
          id: 'qs-v2-c25-019',
          ar: 'وَأَلْحَقَهُ بِآبَائِهِ إِبْرَاهِيمَ وَإِسْحَاقَ وَيَعْقُوبَ',
          en: 'and joined him with his fathers, Ibrāhīm, Isḥāq, and Yaʿqūb --',
          tokens: [
            { surface: 'وَأَلْحَقَهُ', lemma: 'أَلْحَقَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ل ح ق', gloss: 'to join, attach; and joined him' },
            { surface: 'بِآبَائِهِ', lemma: 'أَب', pos: 'noun', features: 'prep+pl.gen+3ms', root: 'أ ب و', gloss: 'with his fathers' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
            { surface: 'وَإِسْحَاقَ', lemma: 'إِسْحَاق', pos: 'proper', features: 'conj+gen', gloss: 'and Isḥāq' },
            { surface: 'وَيَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'conj+gen', gloss: 'and Yaʿqūb' },
          ],
        },
        {
          id: 'qs-v2-c25-020',
          ar: 'صَلَّى اللَّهُ عَلَيْهِمْ وَعَلَى نَبِيِّنَا وَسَلَّمَ.',
          en: 'may Allah send blessings upon them and upon our Prophet, and grant them peace.',
          tokens: [
            { surface: 'صَلَّى', lemma: 'صَلَّى', pos: 'verb', features: 'perf.3ms', gloss: 'to bless; blessed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'وَعَلَى', lemma: 'عَلَى', pos: 'prep', features: 'conj+prep', gloss: 'and upon' },
            { surface: 'نَبِيِّنَا', lemma: 'نَبِيّ', pos: 'noun', features: 'gen+1p', gloss: 'our prophet' },
            { surface: 'وَسَلَّمَ', lemma: 'سَلَّمَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to grant peace; and granted peace' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا طَلَبَ يُوسُفُ مِنَ اللَّهِ فِي دُعَائِهِ؟',
          options: ['أَنْ يَتَوَفَّاهُ مُسْلِماً وَيُلْحِقَهُ بِالصَّالِحِينَ', 'أَنْ يُعِيدَهُ إِلَى كَنْعَانَ', 'أَنْ يَزِيدَهُ مُلْكاً'],
          answer: 0,
          qEn: 'What did Yūsuf ask of Allah in his prayer?',
          optionsEn: ['To take his soul as one submitting, and join him with the righteous', 'To return him to Canaan', 'To increase his kingdom'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'كَانَ دُعَاءُ يُوسُفَ: رَبِّ قَدْ آتَيْتَنِي مِنَ',
        post: '.',
        en: 'Yūsuf\'s prayer was: "My Lord, You have given me of the sovereignty."',
        options: ['الْمُلْكِ', 'الْمُلْكَ', 'الْمُلْكُ', 'مُلْكاً'],
        answer: 0,
        rationales: [
          'Genitive -- object of the preposition مِنَ.',
          'Accusative -- wrong case; a preposition requires the genitive.',
          'Nominative -- wrong case for the same reason.',
          'Indefinite accusative -- wrong; the sovereignty meant here is specific and definite.',
        ],
      },
      {
        type: 'cloze',
        pre: 'أَنتَ',
        post: 'فِي الدُّنْيَا وَالآخِرَةِ.',
        en: 'You are my protector in this world and the Hereafter.',
        options: ['وَلِيِّي', 'وَلِيِّكَ', 'وَلِيُّهُ', 'أَوْلِيَائِي'],
        answer: 0,
        rationales: [
          '1st singular possessive -- "my protector," matching the speaker addressing Allah.',
          '2nd person possessive -- "your protector," wrong person.',
          '3rd masculine singular possessive -- "his protector," wrong person.',
          'Plural -- "my protectors," wrong number.',
        ],
      },
      {
        type: 'cloze',
        pre: 'تَوَفَّنِي',
        post: 'وَأَلْحِقْنِي بِالصَّالِحِينَ.',
        en: 'Take my soul as one submitting, and join me with the righteous.',
        options: ['مُسْلِماً', 'مُسْلِمٌ', 'مُسْلِمِينَ', 'الْمُسْلِمَ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- a حَال (circumstantial accusative) describing the subject\'s state, matching the taught pattern.',
          'Nominative -- wrong case for a حَال.',
          'Plural -- wrong number; the subject (Yūsuf) is singular.',
          'Definite -- wrong; a حَال is indefinite.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَحْكُمُ الرَّجُلُ بِحُكْمِ اللَّهِ',
        pre: '',
        post: 'بِحُكْمِ اللَّهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَحْكُمُ', 'يَحْكُمُ', 'تَحْكُمُ', 'نَحْكُمُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَحْكُمُ الرَّجُلُ بِحُكْمِ اللَّهِ',
        pre: '',
        post: 'بِحُكْمِ اللَّهِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَحْكُمُ', 'يَحْكُمُ', 'أَحْكُمُ', 'نَحْكُمُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَحْكُمُ الرَّجُلُ بِحُكْمِ اللَّهِ',
        pre: '',
        post: 'بِحُكْمِ اللَّهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَحْكُمُونَ', 'يَحْكُمُ', 'تَحْكُمُ', 'نَحْكُمُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

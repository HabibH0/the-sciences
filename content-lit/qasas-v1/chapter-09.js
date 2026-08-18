// قَصَصُ النَّبِيِّينَ, volume 1 «مَنْ كَسَرَ الأَصْنَامَ؟», chapter 9 -- دَعْوَةُ إِبْرَاهِيمَ.
// Printed pages 17 (bottom half, after ch8) - 18 (top half, before ch10's
// heading). Transcribed by hand from the scan (vision OCR, 300dpi render)
// against QASAS_AGENT_BRIEF.md and ../CHAPTER-FORMAT.md.
//
// The densest Qur'an-quotation chapter so far: eight bracketed fragments
// drawn from Surah Ash-Shu'arā', 26:71-74 and 26:78-81 (Ibrāhīm's dialogue
// with his people, then his declaration of Who he worships). Each bracketed
// group is split into fragments of at most 2 tokens (same workaround as
// ch4-8) so none is build-eligible -- sentences qs-v1-c09-{005,006} (26:71),
// {008,009} (26:72), {010,011} (26:73), {012,013,014} (26:74, a 6-word ayah
// split into three 2-token pieces), {019,020} (26:78), {021,022} (26:79),
// {023,024} (26:80), {025,026} (26:81). Do not merge these back or pull them
// into a workshop frame.
//
// Between the two quotation blocks, "فَأَنَا لَا أَعْبُدُ هَذِهِ الْأَصْنَامَ /
// بَلْ أَنَا عَدُوٌّ لِهَذِهِ الْأَصْنَامِ / أَنَا أَعْبُدُ رَبَّ الْعَالَمِينَ" is the
// author's OWN simplified paraphrase of 26:75-77 (no guillemets in print),
// not a direct quotation, so it is tokenized normally.
//
// The closing quartet (qs-v1-c09-027 through -030) is the author's own
// commentary, deliberately mirroring the four divine attributes just quoted
// (creates/guides, feeds/waters, heals, gives-death-and-life) and denying
// each of them to the idols -- worth pointing out to a learner as a built
// rhetorical parallel, not a coincidence of vocabulary reuse.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch9',
  title: { ar: 'دَعْوَةُ إِبْرَاهِيمَ', en: "Ibrāhīm's Call" },
  newWords: [
    'خَلَقَ', 'أَطْعَمَ', 'سَقَى', 'مَرِضَ', 'شَفَى', 'أَحَد', 'وَجَدَ', 'عَدُوّ',
    'إِذْ', 'إِذَا', 'كَذَلِكَ', 'الَّذِي', 'أَمَاتَ', 'أَحْيَا',
  ],
  lemmas: {
    'خَلَقَ': { gloss: 'to create' },
    'أَطْعَمَ': { gloss: 'to feed' },
    'سَقَى': { gloss: 'to give to drink' },
    'مَرِضَ': { gloss: 'to be sick, become ill' },
    'شَفَى': { gloss: 'to heal, cure' },
    'أَحَد': { gloss: 'someone, anyone' },
    'وَجَدَ': { gloss: 'to find' },
    'عَدُوّ': { gloss: 'enemy' },
    'إِذْ': { gloss: 'when (a past moment)' },
    'إِذَا': { gloss: 'when, if' },
    'كَذَلِكَ': { gloss: 'thus, likewise' },
    'الَّذِي': { gloss: 'who, that, the one who (m.)' },
    'أَمَاتَ': { gloss: 'to cause to die, put to death' },
    'أَحْيَا': { gloss: 'to give life to, bring to life' },
  },
  paragraphs: [
    {
      lines: true,
      en: 'Ibrāhīm called his people to Allah and restrained them from worshipping the idols. Ibrāhīm said to his people: What do you worship? They said, \'We worship idols.\' (Qur\'an 26:71)',
      sentences: [
        {
          id: 'qs-v1-c09-001',
          ar: 'وَدَعَا إِبْرَاهِيمُ قَوْمَهُ إِلَى اللَّهِ',
          en: 'Ibrāhīm called his people to Allah',
          tokens: [
            { surface: 'وَدَعَا', lemma: 'دَعَا', pos: 'verb', features: 'conj+perf.3ms', root: 'د ع و', gloss: 'to call, invite; called' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'قَوْمَهُ', lemma: 'قَوْم', pos: 'noun', features: 'acc+3ms', root: 'ق و م', gloss: 'his people' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v1-c09-002',
          ar: 'وَمَنَعَهُمْ مِنْ عِبَادَةِ الْأَصْنَامِ.',
          en: 'and restrained them from worshipping the idols.',
          tokens: [
            { surface: 'وَمَنَعَهُمْ', lemma: 'مَنَعَ', pos: 'verb', features: 'conj+perf.3ms+3mp', root: 'م ن ع', gloss: 'to prevent; and restrained them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'عِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'gen.constr', root: 'ع ب د', gloss: 'worship (of)' },
            { surface: 'الْأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.gen', root: 'ص ن م', gloss: 'the idols' },
          ],
        },
        {
          id: 'qs-v1-c09-003',
          ar: 'قَالَ إِبْرَاهِيمُ لِقَوْمِهِ:',
          en: 'Ibrāhīm said to his people:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'لِقَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'prep+gen+3ms', root: 'ق و م', gloss: 'to his people' },
          ],
        },
        {
          id: 'qs-v1-c09-004',
          ar: 'مَا تَعْبُدُونَ؟',
          en: 'What do you worship?',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'تَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.2mp', root: 'ع ب د', gloss: 'to worship; do you (all) worship' },
          ],
        },
        {
          id: 'qs-v1-c09-005',
          ar: '﴿قَالُوا نَعْبُدُ',
          en: "They said, 'We worship",
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; they said' },
            { surface: 'نَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.1p', root: 'ع ب د', gloss: 'to worship; we worship' },
          ],
        },
        {
          id: 'qs-v1-c09-006',
          ar: 'أَصْنَامًا﴾.',
          en: "idols.' (Qur'an 26:71)",
          tokens: [
            { surface: 'أَصْنَامًا', lemma: 'صَنَم', pos: 'noun', features: 'pl.indef.acc', root: 'ص ن م', gloss: 'idols' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا سَأَلَ إِبْرَاهِيمُ قَوْمَهُ؟',
          options: ['مَا تَعْبُدُونَ؟', 'مَنْ أَنْتُمْ؟', 'أَيْنَ تَسْكُنُونَ؟'],
          answer: 0,
          qEn: 'What did Ibrāhīm ask his people?',
          optionsEn: ['What do you worship?', 'Who are you?', 'Where do you live?'],
        },
        {
          q: 'بِحَسَبِ كَلَامِ إِبْرَاهِيمَ، مَاذَا يَفْعَلُ اللَّهُ لَهُ؟',
          options: ['يَخْلُقُهُ وَيَهْدِيهِ وَيُطْعِمُهُ وَيَشْفِيهِ وَيُحْيِيهِ', 'يُعَاقِبُهُ', 'لَا يَفْعَلُ شَيْئًا'],
          answer: 0,
          qEn: "According to Ibrāhīm's words, what does Allah do for him?",
          optionsEn: ['Creates him, guides him, feeds him, heals him, and gives him life', 'Punishes him', 'Does nothing'],
        },
      ],
    },
    {
      lines: true,
      en: 'Ibrāhīm said: \'Do they hear you when you call?\' (Qur\'an 26:72) Or do they benefit you, or harm you?\' (Qur\'an 26:73) They said, \'Rather,',
      sentences: [
        {
          id: 'qs-v1-c09-007',
          ar: 'قَالَ إِبْرَاهِيمُ:',
          en: 'Ibrāhīm said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c09-008',
          ar: '﴿هَلْ يَسْمَعُونَكُمْ',
          en: "'Do they hear you",
          tokens: [
            { surface: 'هَلْ', lemma: 'هَلْ', pos: 'part', features: 'part', gloss: '(question particle) do...?' },
            { surface: 'يَسْمَعُونَكُمْ', lemma: 'سَمِعَ', pos: 'verb', features: 'impf.3mp+2mp', root: 'س م ع', gloss: 'to hear; do they hear you' },
          ],
        },
        {
          id: 'qs-v1-c09-009',
          ar: 'إِذْ تَدْعُونَ﴾.',
          en: "when you call?' (Qur'an 26:72)",
          tokens: [
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'تَدْعُونَ', lemma: 'دَعَا', pos: 'verb', features: 'impf.2mp', root: 'د ع و', gloss: 'to call; you call' },
          ],
        },
        {
          id: 'qs-v1-c09-010',
          ar: '﴿أَوْ يَنفَعُونَكُمْ',
          en: "Or do they benefit you,",
          tokens: [
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'يَنفَعُونَكُمْ', lemma: 'نَفَعَ', pos: 'verb', features: 'impf.3mp+2mp', root: 'ن ف ع', gloss: 'to benefit; do they benefit you' },
          ],
        },
        {
          id: 'qs-v1-c09-011',
          ar: 'أَوْ يَضُرُّونَ﴾.',
          en: "or harm you?' (Qur'an 26:73)",
          tokens: [
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'يَضُرُّونَ', lemma: 'ضَرَّ', pos: 'verb', features: 'impf.3mp', root: 'ض ر ر', gloss: 'to harm; do they harm' },
          ],
        },
        {
          id: 'qs-v1-c09-012',
          ar: '﴿قَالُوا بَلْ',
          en: "They said, 'Rather,",
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; they said' },
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'we found our fathers doing thus.\' (Qur\'an 26:74) Ibrāhīm said: \'I do not worship these idols. Rather, I am an enemy to these idols. I worship the Lord of all the worlds -- He who created me, and He guides me. (Qur\'an 26:78) and He who feeds me and gives me drink; (Qur\'an 26:79) and when I am sick, He heals me; (Qur\'an 26:80)',
      sentences: [
        {
          id: 'qs-v1-c09-013',
          ar: 'وَجَدْنَا آبَاءَنَا',
          en: 'we found our fathers',
          tokens: [
            { surface: 'وَجَدْنَا', lemma: 'وَجَدَ', pos: 'verb', features: 'perf.1p', root: 'و ج د', gloss: 'to find; we found' },
            { surface: 'آبَاءَنَا', lemma: 'أَب', pos: 'noun', features: 'pl.acc+1p', root: 'أ ب و', gloss: 'our fathers' },
          ],
        },
        {
          id: 'qs-v1-c09-014',
          ar: 'كَذَلِكَ يَفْعَلُونَ﴾.',
          en: "doing thus.' (Qur'an 26:74)",
          tokens: [
            { surface: 'كَذَلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'adv', gloss: 'thus, likewise' },
            { surface: 'يَفْعَلُونَ', lemma: 'فَعَلَ', pos: 'verb', features: 'impf.3mp', root: 'ف ع ل', gloss: 'to do; they do' },
          ],
        },
        {
          id: 'qs-v1-c09-015',
          ar: 'قَالَ إِبْرَاهِيمُ:',
          en: 'Ibrāhīm said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c09-016',
          ar: 'فَأَنَا لَا أَعْبُدُ هَذِهِ الْأَصْنَامَ.',
          en: "'I do not worship these idols.",
          tokens: [
            { surface: 'فَأَنَا', lemma: 'أَنَا', pos: 'noun', features: 'conj+1s', gloss: 'so I' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.1s', root: 'ع ب د', gloss: 'to worship; I worship' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'idols' },
          ],
        },
        {
          id: 'qs-v1-c09-017',
          ar: 'بَلْ أَنَا عَدُوٌّ لِهَذِهِ الْأَصْنَامِ.',
          en: 'Rather, I am an enemy to these idols.',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'عَدُوٌّ', lemma: 'عَدُوّ', pos: 'noun', features: 'indef.nom', root: 'ع د و', gloss: 'enemy' },
            { surface: 'لِهَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'prep+dem.f', gloss: 'to these' },
            { surface: 'الْأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.gen', root: 'ص ن م', gloss: 'idols' },
          ],
        },
        {
          id: 'qs-v1-c09-018',
          ar: 'أَنَا أَعْبُدُ رَبَّ الْعَالَمِينَ.',
          en: "I worship the Lord of all the worlds --",
          tokens: [
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'أَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.1s', root: 'ع ب د', gloss: 'to worship; I worship' },
            { surface: 'رَبَّ', lemma: 'رَبّ', pos: 'noun', features: 'acc.constr', root: 'ر ب ب', gloss: 'Lord (of)' },
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'pl.def.gen', root: 'ع ل م', gloss: 'the worlds' },
          ],
        },
        {
          id: 'qs-v1-c09-019',
          ar: '﴿الَّذِي خَلَقَنِي',
          en: "He who created me,",
          tokens: [
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'who, that (m.)' },
            { surface: 'خَلَقَنِي', lemma: 'خَلَقَ', pos: 'verb', features: 'perf.3ms+1s', root: 'خ ل ق', gloss: 'to create; created me' },
          ],
        },
        {
          id: 'qs-v1-c09-020',
          ar: 'فَهُوَ يَهْدِينِ﴾.',
          en: "and He guides me. (Qur'an 26:78)",
          tokens: [
            { surface: 'فَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and he' },
            { surface: 'يَهْدِينِ', lemma: 'هَدَى', pos: 'verb', features: 'impf.3ms+1s', root: 'ه د ي', gloss: 'to guide; guides me (Qur’ānic short form of يَهْدِينِي)' },
          ],
        },
        {
          id: 'qs-v1-c09-021',
          ar: '﴿وَالَّذِي هُوَ',
          en: 'and He who',
          tokens: [
            { surface: 'وَالَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'conj+rel.m', gloss: 'and he who' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'he' },
          ],
        },
        {
          id: 'qs-v1-c09-022',
          ar: 'يُطْعِمُنِي وَيَسْقِينِ﴾.',
          en: "feeds me and gives me drink; (Qur'an 26:79)",
          tokens: [
            { surface: 'يُطْعِمُنِي', lemma: 'أَطْعَمَ', pos: 'verb', features: 'impf.3ms+1s', root: 'ط ع م', gloss: 'to feed; feeds me' },
            { surface: 'وَيَسْقِينِ', lemma: 'سَقَى', pos: 'verb', features: 'conj+impf.3ms+1s', root: 'س ق ي', gloss: 'to give to drink; and gives me drink (Qur’ānic short form of يَسْقِينِي)' },
          ],
        },
        {
          id: 'qs-v1-c09-023',
          ar: '﴿وَإِذَا مَرِضْتُ',
          en: 'and when I am sick,',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'adv', features: 'conj+adv', gloss: 'and when, if' },
            { surface: 'مَرِضْتُ', lemma: 'مَرِضَ', pos: 'verb', features: 'perf.1s', root: 'م ر ض', gloss: 'to be sick; I am sick' },
          ],
        },
        {
          id: 'qs-v1-c09-024',
          ar: 'فَهُوَ يَشْفِينِ﴾.',
          en: "He heals me; (Qur'an 26:80)",
          tokens: [
            { surface: 'فَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'then he' },
            { surface: 'يَشْفِينِ', lemma: 'شَفَى', pos: 'verb', features: 'impf.3ms+1s', root: 'ش ف ي', gloss: 'to heal; heals me' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ النَّاسُ عِنْدَمَا سُئِلُوا لِمَاذَا يَعْبُدُونَ الْأَصْنَامَ؟',
          options: ['وَجَدْنَا آبَاءَنَا كَذَلِكَ يَفْعَلُونَ', 'لِأَنَّهَا تَنْفَعُنَا', 'لِأَنَّ اللَّهَ أَمَرَنَا'],
          answer: 0,
          qEn: 'What did the people say when asked why they worship the idols?',
          optionsEn: ['We found our fathers doing so', 'Because they benefit us', 'Because Allah commanded us'],
        },
      ],
    },
    {
      en: 'and He who causes me to die, then gives me life. (Qur\'an 26:81) And indeed the idols do not create and do not guide. And indeed they do not feed anyone and do not give drink. And if someone becomes sick, they do not heal. And indeed they do not cause anyone to die and do not give life.',
      sentences: [
        {
          id: 'qs-v1-c09-025',
          ar: '﴿وَالَّذِي يُمِيتُنِي',
          en: 'and He who causes me to die,',
          tokens: [
            { surface: 'وَالَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'conj+rel.m', gloss: 'and he who' },
            { surface: 'يُمِيتُنِي', lemma: 'أَمَاتَ', pos: 'verb', features: 'impf.3ms+1s', root: 'م و ت', gloss: 'to cause to die; causes me to die' },
          ],
        },
        {
          id: 'qs-v1-c09-026',
          ar: 'ثُمَّ يُحْيِينِ﴾.',
          en: "then gives me life. (Qur'an 26:81)",
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'يُحْيِينِ', lemma: 'أَحْيَا', pos: 'verb', features: 'impf.3ms+1s', root: 'ح ي ي', gloss: 'to give life; gives me life (Qur’ānic short form of يُحْيِينِي)' },
          ],
        },
        {
          id: 'qs-v1-c09-027',
          ar: 'وَإِنَّ الْأَصْنَامَ لَا تَخْلُقُ وَلَا تَهْدِي.',
          en: 'And indeed the idols do not create and do not guide.',
          tokens: [
            { surface: 'وَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'the idols' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَخْلُقُ', lemma: 'خَلَقَ', pos: 'verb', features: 'impf.3fs', root: 'خ ل ق', gloss: 'to create; creates' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَهْدِي', lemma: 'هَدَى', pos: 'verb', features: 'impf.3fs', root: 'ه د ي', gloss: 'to guide; guides' },
          ],
        },
        {
          id: 'qs-v1-c09-028',
          ar: 'وَإِنَّهَا لَا تُطْعِمُ أَحَدًا وَلَا تَسْقِي.',
          en: 'And indeed they do not feed anyone and do not give drink.',
          tokens: [
            { surface: 'وَإِنَّهَا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+3fs', gloss: 'and indeed it/they' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تُطْعِمُ', lemma: 'أَطْعَمَ', pos: 'verb', features: 'impf.3fs', root: 'ط ع م', gloss: 'to feed; feeds' },
            { surface: 'أَحَدًا', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', root: 'أ ح د', gloss: 'anyone' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَسْقِي', lemma: 'سَقَى', pos: 'verb', features: 'impf.3fs', root: 'س ق ي', gloss: 'to give to drink; gives drink' },
          ],
        },
        {
          id: 'qs-v1-c09-029',
          ar: 'وَإِذَا مَرِضَ أَحَدٌ فَهِيَ لَا تَشْفِي.',
          en: 'And if someone becomes sick, they do not heal.',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'adv', features: 'conj+adv', gloss: 'and when, if' },
            { surface: 'مَرِضَ', lemma: 'مَرِضَ', pos: 'verb', features: 'perf.3ms', root: 'م ر ض', gloss: 'to be sick; becomes sick' },
            { surface: 'أَحَدٌ', lemma: 'أَحَد', pos: 'noun', features: 'indef.nom', root: 'أ ح د', gloss: 'someone' },
            { surface: 'فَهِيَ', lemma: 'هِيَ', pos: 'noun', features: 'conj+3fs', gloss: 'then it/they' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَشْفِي', lemma: 'شَفَى', pos: 'verb', features: 'impf.3fs', root: 'ش ف ي', gloss: 'to heal; heals' },
          ],
        },
        {
          id: 'qs-v1-c09-030',
          ar: 'وَإِنَّهَا لَا تُمِيتُ أَحَدًا وَلَا تُحْيِي.',
          en: 'And indeed they do not cause anyone to die and do not give life.',
          tokens: [
            { surface: 'وَإِنَّهَا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+3fs', gloss: 'and indeed it/they' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تُمِيتُ', lemma: 'أَمَاتَ', pos: 'verb', features: 'impf.3fs', root: 'م و ت', gloss: 'to cause to die; causes to die' },
            { surface: 'أَحَدًا', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', root: 'أ ح د', gloss: 'anyone' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تُحْيِي', lemma: 'أَحْيَا', pos: 'verb', features: 'impf.3fs', root: 'ح ي ي', gloss: 'to give life; gives life' },
          ],
        },
      ],
      checks: [],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'أَنَا أَعْبُدُ',
        post: 'الْعَالَمِينَ.',
        en: 'I worship the Lord of all the worlds.',
        options: ['رَبَّ', 'رَبٌّ', 'رَبِّ', 'أَرْبَاب'],
        answer: 0,
        rationales: [
          'Accusative mudāf -- direct object of أَعْبُدُ, and the first term of the iḍāfa رَبَّ الْعَالَمِينَ.',
          'Nominative -- wrong case for a direct object.',
          'Genitive -- nothing here governs the genitive.',
          'Plural -- but only one Lord is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: '﴿',
        post: 'خَلَقَنِي فَهُوَ يَهْدِينِ﴾.',
        en: "'[He] who created me, and He guides me.'",
        options: ['الَّذِي', 'الَّتِي', 'الَّذِينَ', 'مَا'],
        answer: 0,
        rationales: [
          'Masculine singular relative pronoun -- refers back to اللَّه, masculine.',
          'Feminine singular relative pronoun -- wrong gender.',
          'Masculine plural relative pronoun -- wrong number; one Lord is meant.',
          "مَا = 'what' -- used for non-rational referents, not for Allah spoken of personally.",
        ],
      },
      {
        type: 'cloze',
        pre: 'وَإِنَّ الْأَصْنَامَ لَا',
        post: 'وَلَا تَهْدِي.',
        en: 'And indeed the idols do not create and do not guide.',
        options: ['تَخْلُقُ', 'يَخْلُقُ', 'تَخْلُقِينَ', 'يَخْلُقُونَ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- non-human plurals like الْأَصْنَام take feminine-singular verb agreement.',
          'Masculine singular -- wrong gender for a non-human plural subject.',
          '2nd feminine singular -- wrong person; this is a statement about "they", not "you".',
          'Masculine plural -- non-human plurals never take plural verb agreement.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'مَا تَعْبُدُونَ؟',
        pre: 'مَا',
        post: '؟',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m. sing.)',
        options: ['تَعْبُدُ', 'تَعْبُدُونَ', 'تَعْبُدِينَ', 'يَعْبُدُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          'Masculine plural -- you all (m.), the form already given.',
          'Feminine singular -- you (f.).',
          '3rd masculine singular -- he.',
        ],
      },
      {
        type: 'shift',
        base: 'مَا تَعْبُدُونَ؟',
        pre: 'مَا',
        post: '؟',
        targetPerson: 'أَنْتِ',
        targetEn: 'you (f. sing.)',
        options: ['تَعْبُدِينَ', 'تَعْبُدُ', 'تَعْبُدُونَ', 'يَعْبُدْنَ'],
        answer: 0,
        rationales: [
          '2nd feminine singular -- matches أَنْتِ.',
          'Masculine singular -- you (m.).',
          'Masculine plural -- the form already given.',
          '3rd feminine plural -- they (f.).',
        ],
      },
      {
        type: 'shift',
        base: 'مَا تَعْبُدُونَ؟',
        pre: 'مَا',
        post: '؟',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَعْبُدُونَ', 'تَعْبُدُونَ', 'يَعْبُدُ', 'يَعْبُدْنَ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '2nd masculine plural -- you all (m.), the form already given.',
          '3rd masculine singular -- he.',
          '3rd feminine plural -- they (f.).',
        ],
      },
    ],
  },
};

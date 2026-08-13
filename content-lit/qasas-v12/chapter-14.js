// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 14 -- صِرَاعٌ قَدِيمٌ. Printed page 260 only
// -- the heading sits partway down the page (right after ch13's closing
// line) and the whole chapter ends before ch15's heading إِيمَانُ عَامَّةِ
// النَّاسِ وَفُقَرَائِهِمْ, which opens page 261. Transcribed by hand from the
// scan (vision OCR, 150dpi render) against ../CHAPTER-FORMAT.md and
// QASAS_AGENT_BRIEF.md.
//
// The chapter's title -- "An Ancient Struggle" -- names its own thesis:
// what happened to ʿĪsā is what always happens to prophets. The chiefs and
// the wealthy kept their distance, seeing faith in him as beneath them,
// because following him meant giving up real privilege and social
// standing -- confirmed, the text says, by the Qur'an's own general
// pattern-statement about every warner ever sent to a town (Sūrat Sabaʾ
// 34:34-35).
//
// Grammar / lexical notes:
//   -- Āyah 34:34 (وَمَا أَرْسَلْنَا فِي قَرْيَةٍ مِنْ نَذِيرٍ إِلَّا قَالَ مُتْرَفُوهَا
//      إِنَّا بِمَا أُرْسِلْتُم بِهِ كَافِرُونَ) carries no printed waqf mark but
//      runs to 14 tokens; split at the reported-speech boundary (before
//      إِنَّا, the start of the affluent's own quoted words) rather than at
//      an arbitrary point -- the same kind of narration/quotation split
//      already established as house convention in qasas-v3 ch14, just
//      applied one level deeper (a quotation nested inside a Qur'an quote).
//   -- مُعَذَّب (s009, "punished, tormented [one]") is tagged as its own
//      passive-participle lemma, distinct from the already-attested verb
//      عَذَّبَ (qasas-v12 ch12) -- same root ع ذ ب, participle vs. verb, per
//      the corpus's participle-as-distinct-lemma convention (مُبَارَك is the
//      precedent already in this volume, ch13).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): وَقَعَ، سَيِّد، عِيسَى (ch1)،
//      نَبِيّ، رَئِيس، غَنِيّ، قَوِيّ، رَأَى، إِيمَان (ch1)، شَقَّ، رِيَاسَة، صَدَقَ،
//      قَوْل (ch13)، أَرْسَلَ، قَرْيَة، نَذِير، كَافِر، كَثِير، مَال، وَلَد، كَانَ، اللَّه،
//      تَعَالَى (ch1)، عَذَّبَ (ch12)
//      are all already taught and are NOT re-listed in newWords here.
//
// 12 new words: زَعِيم، اِبْتَعَدَ، هَجَرَ، اِتِّبَاع، غَضَاضَة، عَيْب، تَنَازُل، زَعَامَة،
// اِمْتِيَاز، سِيَادَة، مُتْرَف، مُعَذَّب.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch14',
  title: { ar: 'صِرَاعٌ قَدِيمٌ', en: 'An Ancient Struggle' },
  newWords: [
    'زَعِيم', 'اِبْتَعَدَ', 'هَجَرَ', 'اِتِّبَاع', 'غَضَاضَة', 'عَيْب',
    'تَنَازُل', 'زَعَامَة', 'اِمْتِيَاز', 'سِيَادَة', 'مُتْرَف', 'مُعَذَّب',
  ],
  lemmas: {
    زَعِيم: { gloss: 'leader, chief' },
    اِبْتَعَدَ: { gloss: 'to withdraw, keep away' },
    هَجَرَ: { gloss: 'to abandon, shun' },
    اِتِّبَاع: { gloss: 'following, discipleship' },
    غَضَاضَة: { gloss: 'shame, humiliation' },
    عَيْب: { gloss: 'a fault, defect' },
    تَنَازُل: { gloss: 'relinquishing, giving up' },
    زَعَامَة: { gloss: 'leadership' },
    اِمْتِيَاز: { gloss: 'privilege, distinction' },
    سِيَادَة: { gloss: 'sovereignty, dominance' },
    مُتْرَف: { gloss: 'one corrupted by luxury, affluent' },
    مُعَذَّب: { gloss: 'punished, tormented (one)' },
  },
  paragraphs: [
    {
      en: 'What befell the prophets before him also befell our master Isa: the chiefs and leaders kept away from him, the rich and powerful shunned him, and they saw believing in him and following him as a disgrace and a fault; giving up the leadership, chieftaincy, privilege, and dominance they had enjoyed was hard for them. And the word of Allah, Most High, proved true: "Never did We send a warner to a city but its affluent said: We disbelieve in what you have been sent with. And they said: We have more wealth and children, and we will not be punished."',
      sentences: [
        {
          id: 'qs-v12-c14-001',
          ar: 'وَوَقَعَ لِسَيِّدِنَا عِيسَى مَا وَقَعَ لِلْأَنْبِيَاءِ قَبْلَهُ،',
          en: 'What befell the prophets before him also befell our master Isa,',
          tokens: [
            { surface: 'وَوَقَعَ', lemma: 'وَقَعَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to befall; and befell' },
            { surface: 'لِسَيِّدِنَا', lemma: 'سَيِّد', pos: 'noun', features: 'prep+gen+1p', gloss: 'our master' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'gen', gloss: 'Isa' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'وَقَعَ', lemma: 'وَقَعَ', pos: 'verb', features: 'perf.3ms', gloss: 'to befall; befell' },
            { surface: 'لِلْأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'prep+def.gen.pl', gloss: 'the prophets' },
            { surface: 'قَبْلَهُ', lemma: 'قَبْلَ', pos: 'prep', features: 'prep+3ms', gloss: 'before him' },
          ],
        },
        {
          id: 'qs-v12-c14-002',
          ar: 'فَابْتَعَدَ عَنْهُ الرُّؤَسَاءُ وَالزُّعَمَاءُ،',
          en: 'the chiefs and leaders kept away from him,',
          tokens: [
            { surface: 'فَابْتَعَدَ', lemma: 'اِبْتَعَدَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to withdraw, keep away; so kept away' },
            { surface: 'عَنْهُ', lemma: 'عَنْ', pos: 'prep', features: 'prep+3ms', gloss: 'from him' },
            { surface: 'الرُّؤَسَاءُ', lemma: 'رَئِيس', pos: 'noun', features: 'def.nom.pl', gloss: 'the chiefs' },
            { surface: 'وَالزُّعَمَاءُ', lemma: 'زَعِيم', pos: 'noun', features: 'conj+def.nom.pl', gloss: 'and the leaders' },
          ],
        },
        {
          id: 'qs-v12-c14-003',
          ar: 'وَهَجَرَهُ الْأَغْنِيَاءُ وَالْأَقْوِيَاءُ،',
          en: 'the rich and powerful shunned him,',
          tokens: [
            { surface: 'وَهَجَرَهُ', lemma: 'هَجَرَ', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to abandon, shun; and shunned him' },
            { surface: 'الْأَغْنِيَاءُ', lemma: 'غَنِيّ', pos: 'noun', features: 'def.nom.pl', gloss: 'the rich' },
            { surface: 'وَالْأَقْوِيَاءُ', lemma: 'قَوِيّ', pos: 'noun', features: 'conj+def.nom.pl', gloss: 'and the powerful' },
          ],
        },
        {
          id: 'qs-v12-c14-004',
          ar: 'وَرَأَوْا فِي الْإِيمَانِ بِهِ وَاتِّبَاعِهِ غَضَاضَةً وَعَيْبًا،',
          en: 'and they saw believing in him and following him as a disgrace and a fault;',
          tokens: [
            { surface: 'وَرَأَوْا', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to see; and saw' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْإِيمَانِ', lemma: 'إِيمَان', pos: 'noun', features: 'def.gen', gloss: 'believing' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'in him' },
            { surface: 'وَاتِّبَاعِهِ', lemma: 'اِتِّبَاع', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and following him' },
            { surface: 'غَضَاضَةً', lemma: 'غَضَاضَة', pos: 'noun', features: 'indef.acc', gloss: 'a disgrace' },
            { surface: 'وَعَيْبًا', lemma: 'عَيْب', pos: 'noun', features: 'conj+indef.acc', gloss: 'and a fault' },
          ],
        },
        {
          id: 'qs-v12-c14-005',
          ar: 'وَشَقَّ عَلَيْهِمُ التَّنَازُلُ عَمَّا كَانُوا عَلَيْهِ مِنْ رِيَاسَةٍ وَزَعَامَةٍ وَامْتِيَازٍ وَسِيَادَةٍ،',
          en: 'giving up the leadership, chieftaincy, privilege, and dominance they had enjoyed was hard for them.',
          tokens: [
            { surface: 'وَشَقَّ', lemma: 'شَقَّ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be difficult; and it was hard' },
            { surface: 'عَلَيْهِمُ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'التَّنَازُلُ', lemma: 'تَنَازُل', pos: 'noun', features: 'def.nom', gloss: 'the relinquishing' },
            { surface: 'عَمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'of that which' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', gloss: 'to be; they were' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'in' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'رِيَاسَةٍ', lemma: 'رِيَاسَة', pos: 'noun', features: 'indef.gen', gloss: 'leadership' },
            { surface: 'وَزَعَامَةٍ', lemma: 'زَعَامَة', pos: 'noun', features: 'conj+indef.gen', gloss: 'and chieftaincy' },
            { surface: 'وَامْتِيَازٍ', lemma: 'اِمْتِيَاز', pos: 'noun', features: 'conj+indef.gen', gloss: 'and privilege' },
            { surface: 'وَسِيَادَةٍ', lemma: 'سِيَادَة', pos: 'noun', features: 'conj+indef.gen', gloss: 'and dominance' },
          ],
        },
        {
          id: 'qs-v12-c14-006',
          ar: 'وَصَدَقَ قَوْلُ اللَّهِ تَعَالَى:',
          en: 'And the word of Allah, Most High, proved true:',
          tokens: [
            { surface: 'وَصَدَقَ', lemma: 'صَدَقَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to prove true; and proved true' },
            { surface: 'قَوْلُ', lemma: 'قَوْل', pos: 'noun', features: 'nom.constr', gloss: 'the word of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; Most High' },
          ],
        },
        {
          id: 'qs-v12-c14-007',
          ar: '﴿وَمَا أَرْسَلْنَا فِي قَرْيَةٍ مِنْ نَذِيرٍ إِلَّا قَالَ مُتْرَفُوهَا﴾',
          en: '"Never did We send a warner to a city but its affluent said:',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'أَرْسَلْنَا', lemma: 'أَرْسَلَ', pos: 'verb', features: 'perf.1p', gloss: 'to send; We sent' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'قَرْيَةٍ', lemma: 'قَرْيَة', pos: 'noun', features: 'indef.gen', gloss: 'a city' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'نَذِيرٍ', lemma: 'نَذِير', pos: 'noun', features: 'indef.gen', gloss: 'a warner' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'but' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'مُتْرَفُوهَا', lemma: 'مُتْرَف', pos: 'noun', features: 'pl.nom+3fs', gloss: 'its affluent ones' },
          ],
        },
        {
          id: 'qs-v12-c14-008',
          ar: '﴿إِنَّا بِمَا أُرْسِلْتُم بِهِ كَافِرُونَ﴾',
          en: 'We disbelieve in what you have been sent with."',
          tokens: [
            { surface: 'إِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'part+1p', gloss: 'indeed we' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'in what' },
            { surface: 'أُرْسِلْتُم', lemma: 'أَرْسَلَ', pos: 'verb', features: 'pass+perf.2mp', gloss: 'to send; you have been sent' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with it' },
            { surface: 'كَافِرُونَ', lemma: 'كَافِر', pos: 'noun', features: 'indef.nom.pl', gloss: 'disbelievers' },
          ],
        },
        {
          id: 'qs-v12-c14-009',
          ar: '﴿وَقَالُوا نَحْنُ أَكْثَرُ أَمْوَالًا وَأَوْلَادًا وَمَا نَحْنُ بِمُعَذَّبِينَ﴾.',
          en: 'And they said: "We have more wealth and children, and we will not be punished."',
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; and they said' },
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: '1p', gloss: 'we' },
            { surface: 'أَكْثَرُ', lemma: 'كَثِير', pos: 'noun', features: 'nom', gloss: 'more' },
            { surface: 'أَمْوَالًا', lemma: 'مَال', pos: 'noun', features: 'pl.indef.acc', gloss: 'in wealth' },
            { surface: 'وَأَوْلَادًا', lemma: 'وَلَد', pos: 'noun', features: 'conj+pl.indef.acc', gloss: 'and children' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: '1p', gloss: 'we' },
            { surface: 'بِمُعَذَّبِينَ', lemma: 'مُعَذَّب', pos: 'noun', features: 'prep+indef.gen.pl', gloss: 'ones to be punished' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ اسْتَقْبَلَ رُؤَسَاءُ الْيَهُودِ وَأَغْنِيَاؤُهُمْ دَعْوَةَ عِيسَى؟',
          options: ['ابْتَعَدُوا عَنْهُ وَهَجَرُوهُ وَرَأَوْا فِي الْإِيمَانِ بِهِ غَضَاضَةً وَعَيْبًا', 'رَحَّبُوا بِهِ وَآمَنُوا بِرِسَالَتِهِ فَوْرًا', 'سَاعَدُوهُ فِي نَشْرِ دَعْوَتِهِ'],
          answer: 0,
          qEn: 'How did the Jewish chiefs and rich people receive Isa’s call?',
          optionsEn: ['They kept away from him, shunned him, and saw belief in him as a disgrace and a fault', 'They welcomed him and believed in his message at once', 'They helped him spread his call'],
        },
        {
          q: 'لِمَاذَا شَقَّ عَلَى الرُّؤَسَاءِ اتِّبَاعُ عِيسَى؟',
          options: ['لِأَنَّ ذَلِكَ يَعْنِي التَّنَازُلَ عَمَّا كَانُوا عَلَيْهِ مِنْ رِيَاسَةٍ وَزَعَامَةٍ وَامْتِيَازٍ وَسِيَادَةٍ', 'لِأَنَّهُمْ لَمْ يَسْمَعُوا بِهِ قَطُّ', 'لِأَنَّهُمْ كَانُوا فُقَرَاءَ لَا حَظَّ لَهُمْ فِي الْمُجْتَمَعِ'],
          answer: 0,
          qEn: 'Why was following Isa hard for the chiefs?',
          optionsEn: ['Because it meant giving up the leadership, chieftaincy, privilege, and dominance they had enjoyed', 'Because they had never heard of him at all', 'Because they were poor with no standing in society'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَ',
        post: 'لِسَيِّدِنَا عِيسَى مَا وَقَعَ لِلْأَنْبِيَاءِ قَبْلَهُ.',
        en: 'What befell the prophets before him also befell our master Isa.',
        options: ['وَقَعَ', 'يَقَعُ', 'وَقَعَتْ', 'وَاقِع'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular -- narrates a completed past event, matching the second وَقَعَ later in the same sentence.',
          'Imperfect -- wrong tense; the sentence narrates something that already happened.',
          'Feminine -- wrong gender; the subject مَا وَقَعَ لِلْأَنْبِيَاءِ is treated as masculine here, matching the printed form.',
          'Active participle (noun) -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَرَأَوْا فِي الْإِيمَانِ بِهِ وَاتِّبَاعِهِ',
        post: 'وَعَيْبًا.',
        en: 'and they saw believing in him and following him as a disgrace and a fault.',
        options: ['غَضَاضَةً', 'غَضَاضَةٌ', 'غَضَاضَةِ', 'غَضَاضَات'],
        answer: 0,
        rationales: [
          'Indefinite accusative -- first object of رَأَوْا (رأى here takes two objects, "saw X as Y").',
          'Nominative -- wrong case; the second object of رأى is accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Plural -- wrong number; a single abstract quality is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَمَا أَرْسَلْنَا فِي قَرْيَةٍ مِنْ نَذِيرٍ إِلَّا قَالَ',
        post: 'إِنَّا بِمَا أُرْسِلْتُم بِهِ كَافِرُونَ.',
        en: 'Never did We send a warner to a city but its affluent said: We disbelieve in what you have been sent with.',
        options: ['مُتْرَفُوهَا', 'مُتْرَفُهَا', 'مُتْرَفُوهُ', 'مُتْرَفَاتُهَا'],
        answer: 0,
        rationales: [
          'Nominative masculine plural + feminine singular suffix -- "its (the city\'s) affluent ones," matching the printed مُتْرَفُوهَا.',
          'Singular -- wrong number; the affluent are a group.',
          'Wrong suffix gender -- قَرْيَة ("city") is feminine, so the attached pronoun must be هَا, not هُ.',
          'Feminine plural -- wrong gender; مُتْرَف here refers to a mixed group with masculine plural agreement.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَبْتَعِدُ الرَّئِيسُ عَنِ الدَّاعِيَةِ',
        pre: '',
        post: 'عَنِ الدَّاعِيَةِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَبْتَعِدُ', 'يَبْتَعِدُ', 'تَبْتَعِدُ', 'نَبْتَعِدُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted.',
          '2nd masculine singular -- wrong person.',
          '1st plural -- wrong number; the target is singular.',
        ],
      },
      {
        type: 'shift',
        base: 'يَبْتَعِدُ الرَّئِيسُ عَنِ الدَّاعِيَةِ',
        pre: '',
        post: 'عَنِ الدَّاعِيَةِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَبْتَعِدُ', 'يَبْتَعِدُ', 'تَبْتَعِدُ', 'أَبْتَعِدُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted.',
          '2nd masculine singular -- wrong person.',
          '1st singular -- wrong number; the target is "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَبْتَعِدُ الرَّئِيسُ عَنِ الدَّاعِيَةِ',
        pre: '',
        post: 'عَنِ الدَّاعِيَةِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَبْتَعِدُ', 'يَبْتَعِدُ', 'أَبْتَعِدُ', 'نَبْتَعِدُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- the base form, not shifted.',
          '1st singular -- wrong person.',
          '1st plural -- wrong person and number.',
        ],
      },
    ],
  },
};

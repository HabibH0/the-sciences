// قَصَصُ النَّبِيِّينَ, volume 9, chapter 2 -- نِعْمَةُ اللَّهِ عَلَى دَاوُدَ.
// Printed page 224 only, from mid-page (right after ch1's closing ayah,
// Naml 27:16) to the bottom of the page, ending right before ch3's heading
// شُكْرُهُ عَلَى هَذِهِ النِّعْمَةِ on page 225. Transcribed by hand from the
// scan (vision OCR, 200dpi render) against ../CHAPTER-FORMAT.md.
//
// A short chapter naming Dāwūd's own two favours: the mountains and birds
// echoing his glorification of Allah, and iron softened in his hand so he
// could craft chain mail. Quotes Sūrat Sabaʾ 34:10-11 and the second half of
// Sūrat al-Anbiyāʾ 21:79-80 (the āyah that opens mid-sentence, hence و not
// a fresh subject, matching the printed text exactly).
//
// Grammar / lexical notes:
//   -- دُرُوع (unit 002, "coats of mail") is the plural surface of the new
//      singular lemma دِرْع; both ayat below use the near-synonym لَبُوس
//      ("body armour") instead, kept as its own separate new lemma since
//      the Qur'an text itself does not use دِرْع.
//   -- Anbiya 21:79's opening وَسَخَّرْنَا (unit 010) is quoted starting
//      mid-āyah exactly as Nadwi printed it, continuing the previous verse's
//      subject (Dāwūd) without repeating his name -- kept verbatim, not
//      supplemented.
//   -- Both Qur'an quotes are wrapped in their own ﴿﴾ sentences and split at
//      natural clause breaks to stay at or under nine tokens each, matching
//      the qasas-v3 ch17 precedent.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): اللَّه، جَبَل، طَيْر،
//      دُعَاء، عَلَّمَ، صَنْعَة (established ch1... actually new here, see
//      newWords)، صَالِح، مَعَ، فَضْل، شَكَرَ
//      are all already taught (or introduced this chapter, see newWords) and
//      pre-existing ones are NOT re-listed in newWords here.
//
// 14 new words (تَجَاوَبَ، دِرْع، أَلَانَ، حَدِيد، أَوَّبَ، سَابِغَة، قَدَّرَ، سَرْد،
// فَاعِل، لَبُوس، أَحْصَنَ، بَأْس، شَاكِر، سَبَّحَ) -- dense again, carrying two
// back-to-back Qur'an quotations each with their own small vocabulary set
// (armour-making terms in the first, praise/gratitude terms in the second).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch2',
  title: { ar: 'نِعْمَةُ اللَّهِ عَلَى دَاوُدَ', en: "Allah's Blessing upon Dāwūd" },
  newWords: ['تَجَاوَبَ', 'دِرْع', 'أَلَانَ', 'حَدِيد', 'أَوَّبَ', 'سَابِغَة', 'قَدَّرَ', 'سَرْد', 'فَاعِل', 'لَبُوس', 'أَحْصَنَ', 'بَأْس', 'شَاكِر', 'سَبَّحَ'],
  lemmas: {
    تَجَاوَبَ: { gloss: 'to echo, respond together' },
    دِرْع: { gloss: 'a coat of mail' },
    أَلَانَ: { gloss: 'to soften' },
    حَدِيد: { gloss: 'iron' },
    أَوَّبَ: { gloss: 'to return, echo repeatedly' },
    سَابِغَة: { gloss: 'a full coat of mail' },
    قَدَّرَ: { gloss: 'to measure out, proportion' },
    سَرْد: { gloss: 'the linking (of mail rings)' },
    فَاعِل: { gloss: 'one who does, a doer' },
    لَبُوس: { gloss: 'body armour' },
    أَحْصَنَ: { gloss: 'to protect, fortify' },
    بَأْس: { gloss: 'violence, harm (of war)' },
    شَاكِر: { gloss: 'grateful, thankful' },
    سَبَّحَ: { gloss: 'to glorify (Allah)' },
  },
  paragraphs: [
    {
      en: "As for Dāwūd, Allah subjected to him the mountains and the birds, echoing his glorification of Allah in prayer, and taught him the craft of coats of mail, and softened iron for him. \"And We had certainly given Dāwūd bounty from Us: O mountains, echo (Our praise) with him, and the birds (too), and We softened iron for him -- that: make full coats of mail and measure well the links, and work righteousness, indeed I am Seeing of what you do.\" And He says: \"And We subjected the mountains to glorify with Dāwūd, and the birds; and We were the Doers. And We taught him the craft of body armour for you, to protect you from your violence (in war), so will you then be grateful?\"",
      sentences: [
        {
          id: 'qs-v9-c02-001',
          ar: 'فَأَمَّا دَاوُدُ فَقَدْ سَخَّرَ اللَّهُ لَهُ الْجِبَالَ وَالطَّيْرَ',
          en: 'As for Dāwūd, Allah subjected to him the mountains and the birds,',
          tokens: [
            { surface: 'فَأَمَّا', lemma: 'أَمَّا', pos: 'part', features: 'conj+part', gloss: 'as for' },
            { surface: 'دَاوُدُ', lemma: 'دَاوُد', pos: 'proper', features: 'nom', gloss: 'Dāwūd' },
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'then indeed' },
            { surface: 'سَخَّرَ', lemma: 'سَخَّرَ', pos: 'verb', features: 'perf.3ms', gloss: 'to subjugate; subjected' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'الْجِبَالَ', lemma: 'جَبَل', pos: 'noun', features: 'pl.def.acc', gloss: 'the mountains' },
            { surface: 'وَالطَّيْرَ', lemma: 'طَيْر', pos: 'noun', features: 'conj+def.acc', gloss: 'and the birds' },
          ],
        },
        {
          id: 'qs-v9-c02-002',
          ar: 'تَتَجَاوَبُ مَعَهُ فِي الدُّعَاءِ وَالتَّسْبِيحِ،',
          en: 'echoing his glorification of Allah in prayer,',
          tokens: [
            { surface: 'تَتَجَاوَبُ', lemma: 'تَجَاوَبَ', pos: 'verb', features: 'impf.3fs', root: 'ج و ب', gloss: 'to echo, respond together; echoing' },
            { surface: 'مَعَهُ', lemma: 'مَعَ', pos: 'prep', features: 'prep+3ms', gloss: 'with him' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الدُّعَاءِ', lemma: 'دُعَاء', pos: 'noun', features: 'def.gen', gloss: 'the prayer' },
            { surface: 'وَالتَّسْبِيحِ', lemma: 'تَسْبِيح', pos: 'noun', features: 'conj+def.gen', root: 'س ب ح', gloss: 'and the glorification' },
          ],
        },
        {
          id: 'qs-v9-c02-003',
          ar: 'وَعَلَّمَهُ صَنْعَةَ الدُّرُوعِ،',
          en: 'and taught him the craft of coats of mail,',
          tokens: [
            { surface: 'وَعَلَّمَهُ', lemma: 'عَلَّمَ', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to teach; and taught him' },
            { surface: 'صَنْعَةَ', lemma: 'صَنْعَة', pos: 'noun', features: 'acc.constr', root: 'ص ن ع', gloss: 'the craft of' },
            { surface: 'الدُّرُوعِ', lemma: 'دِرْع', pos: 'noun', features: 'pl.def.gen', gloss: 'the coats of mail' },
          ],
        },
        {
          id: 'qs-v9-c02-004',
          ar: 'وَأَلَانَ لَهُ الْحَدِيدَ.',
          en: 'and softened iron for him.',
          tokens: [
            { surface: 'وَأَلَانَ', lemma: 'أَلَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ل ي ن', gloss: 'to soften; and softened' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'الْحَدِيدَ', lemma: 'حَدِيد', pos: 'noun', features: 'def.acc', gloss: 'the iron' },
          ],
        },
        {
          id: 'qs-v9-c02-005',
          ar: '﴿وَلَقَدْ آتَيْنَا دَاوُودَ مِنَّا فَضْلاً﴾',
          en: '"And We had certainly given Dāwūd bounty from Us:',
          tokens: [
            { surface: 'وَلَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and certainly' },
            { surface: 'آتَيْنَا', lemma: 'آتَى', pos: 'verb', features: 'perf.1p', gloss: 'to give; We gave' },
            { surface: 'دَاوُودَ', lemma: 'دَاوُد', pos: 'proper', features: 'acc', gloss: 'Dāwūd' },
            { surface: 'مِنَّا', lemma: 'مِنْ', pos: 'prep', features: 'prep+1p', gloss: 'from Us' },
            { surface: 'فَضْلاً', lemma: 'فَضْل', pos: 'noun', features: 'indef.acc', gloss: 'bounty' },
          ],
        },
        {
          id: 'qs-v9-c02-006',
          ar: '﴿يَاجِبَالُ أَوِّبِي مَعَهُ وَالطَّيْرَ﴾',
          en: 'O mountains, echo (Our praise) with him, and the birds (too),',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'جِبَالُ', lemma: 'جَبَل', pos: 'noun', features: 'pl.nom', gloss: 'mountains' },
            { surface: 'أَوِّبِي', lemma: 'أَوَّبَ', pos: 'verb', features: 'imp.2fs', root: 'أ و ب', gloss: 'to echo, repeat; echo' },
            { surface: 'مَعَهُ', lemma: 'مَعَ', pos: 'prep', features: 'prep+3ms', gloss: 'with him' },
            { surface: 'وَالطَّيْرَ', lemma: 'طَيْر', pos: 'noun', features: 'conj+acc', gloss: 'and the birds' },
          ],
        },
        {
          id: 'qs-v9-c02-007',
          ar: '﴿وَأَلَنَّا لَهُ الْحَدِيدَ﴾',
          en: 'and We softened iron for him --',
          tokens: [
            { surface: 'وَأَلَنَّا', lemma: 'أَلَانَ', pos: 'verb', features: 'conj+perf.1p', gloss: 'to soften; and We softened' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'الْحَدِيدَ', lemma: 'حَدِيد', pos: 'noun', features: 'def.acc', gloss: 'the iron' },
          ],
        },
        {
          id: 'qs-v9-c02-008',
          ar: '﴿أَنِ اعْمَلْ سَابِغَاتٍ وَقَدِّرْ فِي السَّرْدِ﴾',
          en: 'that: make full coats of mail and measure well the links,',
          tokens: [
            { surface: 'أَنِ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'اعْمَلْ', lemma: 'عَمِلَ', pos: 'verb', features: 'imp.2ms', gloss: 'to work, make; make' },
            { surface: 'سَابِغَاتٍ', lemma: 'سَابِغَة', pos: 'noun', features: 'pl.indef.acc', gloss: 'full coats of mail' },
            { surface: 'وَقَدِّرْ', lemma: 'قَدَّرَ', pos: 'verb', features: 'conj+imp.2ms', root: 'ق د ر', gloss: 'to measure out; and measure' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'السَّرْدِ', lemma: 'سَرْد', pos: 'noun', features: 'def.gen', root: 'س ر د', gloss: 'the linking' },
          ],
        },
        {
          id: 'qs-v9-c02-009',
          ar: '﴿وَاعْمَلُوا صَالِحاً إِنِّي بِمَا تَعْمَلُونَ بَصِيرٌ﴾.',
          en: 'and work righteousness, indeed I am Seeing of what you do."',
          tokens: [
            { surface: 'وَاعْمَلُوا', lemma: 'عَمِلَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'to work; and work' },
            { surface: 'صَالِحاً', lemma: 'صَالِح', pos: 'adj', features: 'indef.acc', gloss: 'righteousness' },
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'of what' },
            { surface: 'تَعْمَلُونَ', lemma: 'عَمِلَ', pos: 'verb', features: 'impf.2mp', gloss: 'to do; you do' },
            { surface: 'بَصِيرٌ', lemma: 'بَصِير', pos: 'adj', features: 'indef.nom', gloss: 'Seeing' },
          ],
        },
        {
          id: 'qs-v9-c02-010',
          ar: 'وَيَقُولُ:',
          en: 'And He says:',
          tokens: [
            { surface: 'وَيَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to say; and He says' },
          ],
        },
        {
          id: 'qs-v9-c02-011',
          ar: '﴿وَسَخَّرْنَا مَعَ دَاوُودَ الْجِبَالَ يُسَبِّحْنَ وَالطَّيْرَ﴾',
          en: '"And We subjected the mountains to glorify with Dāwūd, and the birds;',
          tokens: [
            { surface: 'وَسَخَّرْنَا', lemma: 'سَخَّرَ', pos: 'verb', features: 'conj+perf.1p', gloss: 'to subjugate; and We subjected' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'دَاوُودَ', lemma: 'دَاوُد', pos: 'proper', features: 'gen', gloss: 'Dāwūd' },
            { surface: 'الْجِبَالَ', lemma: 'جَبَل', pos: 'noun', features: 'pl.def.acc', gloss: 'the mountains' },
            { surface: 'يُسَبِّحْنَ', lemma: 'سَبَّحَ', pos: 'verb', features: 'impf.3fp', root: 'س ب ح', gloss: 'to glorify; they glorify' },
            { surface: 'وَالطَّيْرَ', lemma: 'طَيْر', pos: 'noun', features: 'conj+acc', gloss: 'and the birds' },
          ],
        },
        {
          id: 'qs-v9-c02-012',
          ar: '﴿وَكُنَّا فَاعِلِينَ﴾',
          en: 'and We were the Doers.',
          tokens: [
            { surface: 'وَكُنَّا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.1p', gloss: 'to be; and We were' },
            { surface: 'فَاعِلِينَ', lemma: 'فَاعِل', pos: 'noun', features: 'pl.acc', root: 'ف ع ل', gloss: 'doers' },
          ],
        },
        {
          id: 'qs-v9-c02-013',
          ar: '﴿وَعَلَّمْنَاهُ صَنْعَةَ لَبُوسٍ لَّكُمْ﴾',
          en: 'And We taught him the craft of body armour for you,',
          tokens: [
            { surface: 'وَعَلَّمْنَاهُ', lemma: 'عَلَّمَ', pos: 'verb', features: 'conj+perf.1p+3ms', gloss: 'to teach; and We taught him' },
            { surface: 'صَنْعَةَ', lemma: 'صَنْعَة', pos: 'noun', features: 'acc.constr', gloss: 'the craft of' },
            { surface: 'لَبُوسٍ', lemma: 'لَبُوس', pos: 'noun', features: 'indef.gen', root: 'ل ب س', gloss: 'body armour' },
            { surface: 'لَّكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
          ],
        },
        {
          id: 'qs-v9-c02-014',
          ar: '﴿لِتُحْصِنَكُم مِّنْ بَأْسِكُمْ﴾',
          en: 'to protect you from your violence (in war),',
          tokens: [
            { surface: 'لِتُحْصِنَكُم', lemma: 'أَحْصَنَ', pos: 'verb', features: 'part+impf.3fs+2mp', root: 'ح ص ن', gloss: 'to protect, fortify; to protect you' },
            { surface: 'مِّنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'بَأْسِكُمْ', lemma: 'بَأْس', pos: 'noun', features: 'gen+2mp', gloss: 'your violence' },
          ],
        },
        {
          id: 'qs-v9-c02-015',
          ar: '﴿فَهَلْ أَنتُمْ شَاكِرُونَ﴾.',
          en: 'so will you then be grateful?"',
          tokens: [
            { surface: 'فَهَلْ', lemma: 'هَلْ', pos: 'part', features: 'conj+part', gloss: 'so will' },
            { surface: 'أَنتُمْ', lemma: 'أَنْتَ', pos: 'part', features: 'part.2mp', gloss: 'you' },
            { surface: 'شَاكِرُونَ', lemma: 'شَاكِر', pos: 'adj', features: 'pl.nom', root: 'ش ك ر', gloss: 'grateful' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا سَخَّرَ اللَّهُ لِدَاوُدَ؟',
          options: ['الْجِبَالَ وَالطَّيْرَ تُسَبِّحُ مَعَهُ', 'الرِّيَاحَ وَحْدَهَا', 'الْبَحْرَ فَقَطْ'],
          answer: 0,
          qEn: 'What did Allah subject to Dāwūd?',
          optionsEn: ['The mountains and the birds glorifying Allah with him', 'The winds alone', 'Only the sea'],
        },
        {
          q: 'مَاذَا عَلَّمَ اللَّهُ دَاوُدَ؟',
          options: ['صَنْعَةَ الدُّرُوعِ بَعْدَ أَنْ أَلَانَ لَهُ الْحَدِيدَ', 'صَنْعَةَ السُّفُنِ', 'صَنْعَةَ الْفَخَّارِ'],
          answer: 0,
          qEn: 'What did Allah teach Dāwūd?',
          optionsEn: ['The craft of coats of mail, after softening iron for him', 'Shipbuilding', 'Pottery'],
        },
        {
          q: 'لِمَاذَا عُلِّمَ دَاوُدُ صَنْعَةَ اللَّبُوسِ بِحَسَبِ الْآيَةِ؟',
          options: ['لِتُحْصِنَهُمْ مِنْ بَأْسِهِمْ', 'لِيَبِيعَهَا فِي السُّوقِ', 'لِيُهْدِيَهَا لِلْمُلُوكِ'],
          answer: 0,
          qEn: 'According to the āyah, why was Dāwūd taught the craft of armour?',
          optionsEn: ['To protect people from their violence in war', 'To sell it in the market', 'To gift it to kings'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَأَمَّا دَاوُدُ فَقَدْ سَخَّرَ',
        post: 'لَهُ الْجِبَالَ وَالطَّيْرَ.',
        en: 'As for Dāwūd, Allah subjected to him the mountains and the birds.',
        options: ['اللَّهُ', 'اللَّهَ', 'اللَّهِ', 'وَاللَّهُ'],
        answer: 0,
        rationales: [
          'Nominative -- subject of سَخَّرَ, matching the printed سَخَّرَ اللَّهُ لَهُ.',
          'Accusative -- wrong case; the subject of a verb is nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'With a coordinating وَ -- wrong; nothing is coordinated with اللَّه here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ اللَّهُ: يَاجِبَالُ أَوِّبِي مَعَهُ',
        post: '.',
        en: 'Allah said: O mountains, echo with him, and the birds.',
        options: ['وَالطَّيْرَ', 'وَالطَّيْرُ', 'وَالطَّيْرِ', 'طَيْرٌ'],
        answer: 0,
        rationales: [
          'Accusative, coordinated with the implied object of أَوِّبِي -- matching the printed وَالطَّيْرَ.',
          'Nominative -- wrong case for a coordinated object.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Indefinite, uninflected -- wrong; the printed word is definite and case-marked.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَعَلَّمْنَاهُ صَنْعَةَ لَبُوسٍ لَّكُمْ لِتُحْصِنَكُم مِّنْ',
        post: '، فَهَلْ أَنتُمْ شَاكِرُونَ.',
        en: 'And We taught him the craft of body armour for you, to protect you from your violence, so will you then be grateful?',
        options: ['بَأْسِكُمْ', 'بَأْسُكُمْ', 'بَأْسَكُمْ', 'بَأْسِهِمْ'],
        answer: 0,
        rationales: [
          'Genitive -- object of the preposition مِنْ, matching the printed مِّنْ بَأْسِكُمْ, with the "your" suffix.',
          'Nominative -- wrong case; a preposition requires the genitive.',
          'Accusative -- wrong case for the same reason.',
          'With the wrong suffix ("their") -- wrong; the āyah addresses "you" (كُمْ), not "them."',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يُسَبِّحُ الطَّيْرُ مَعَ دَاوُدَ',
        pre: '',
        post: 'مَعَ دَاوُدَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أُسَبِّحُ', 'يُسَبِّحُ', 'تُسَبِّحُ', 'نُسَبِّحُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَعْمَلُ الرَّجُلُ سَابِغَاتٍ',
        pre: '',
        post: 'سَابِغَاتٍ',
        targetPerson: 'أَنتُمْ',
        targetEn: 'you (pl.)',
        options: ['تَعْمَلُونَ', 'يَعْمَلُ', 'أَعْمَلُ', 'نَعْمَلُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches أَنتُمْ.',
          '3rd masculine singular -- the base form, not shifted to "you (pl.)."',
          '1st singular -- wrong person; the target is "you," not "I."',
          '1st plural -- wrong person; the target is "you," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يُلِينُ اللَّهُ الْحَدِيدَ لِدَاوُدَ',
        pre: '',
        post: 'الْحَدِيدَ لِدَاوُدَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نُلِينُ', 'يُلِينُ', 'تُلِينُ', 'أُلِينُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- wrong person; this is "we," not "you."',
          '1st singular -- wrong number; the target is plural نَحْنُ, not "I."',
        ],
      },
    ],
  },
};

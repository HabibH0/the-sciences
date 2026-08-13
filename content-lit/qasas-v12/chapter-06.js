// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 6 -- نُكْرَانٌ لِلْجَمِيلِ. Printed page 254
// only -- the chapter is a single paragraph sitting between ch5's closing
// line (نِعْمَةُ اللَّهِ عَلَى بَنِي إِسْرَائِيلَ, not transcribed here) and ch7's
// heading زَهْوٌ وَإِذْلَالٌ partway down page 255. Transcribed by hand from
// the scan (vision OCR, 150dpi render) against ../CHAPTER-FORMAT.md.
//
// This volume opens a register shift from vols 1-3: dense expository/
// apologetic prose rather than simple narrative. Chapter 6 is one long
// compound sentence (subject delayed past two causal prepositional
// phrases) describing how, through prolonged contact with neighboring
// polytheistic peoples and the long lapse of time since the prophets'
// teachings, false beliefs and jahili customs crept into the Israelites:
// they worshiped the golden calf in Egypt and so exaggerated their
// veneration of `Uzayr (Ezra) that they elevated him beyond human bounds,
// eventually daring to attribute acts of shirk, sorcery, disbelief and
// vile deeds to some of the prophets themselves.
//
// Grammar / lexical notes:
//   -- The whole chapter is one printed sentence with a very delayed
//      subject (عَقَائِدُ زَائِفَةٌ وَعَادَاتٌ جَاهِلِيَّةٌ, sentence 003) after two
//      causal بِ-phrases. Per house convention (ch7/8/9/10 in this same
//      chapter set) it is split at each natural clause/comma boundary
//      into short sentences -- no rewording, same printed order.
//   -- بِحُكْمِ and بِطُولِ fuse بِ directly onto the following common noun
//      (features 'prep+constr.gen'/'conj+prep+constr.gen'), matching the
//      established بِ+full-noun fusion convention (qasas-v3 ch14's بِنُوحٍ,
//      بِأَيْدِيهِمْ) -- contrast بِهِ/بِهِمُ later in this same chapter, where
//      بِ + a bare pronoun suffix keeps its own separate لِ-style lemma بِ.
//   -- وَالْوَثَنِيَّةِ appears twice with two different parts of speech: as
//      the adjective وَثَنِيّ ("pagan," agreeing fem.sg with الشُّعُوبِ,
//      sentence 001) and, later, as the abstract noun وَثَنِيَّة ("paganism,"
//      sentence 007, coordinated with أَعْمَالِ الشِّرْكِ). Tagged as two
//      distinct lemmas despite identical spelling, per the corpus's
//      noun-vs-adjective-same-root convention (CHAPTER-FORMAT.md /
//      qasas-v3 ch14 header, كِبْر vs كَبِير).
//   -- عَقَائِدُ (002) and أَعْمَالَ (008) are genuinely different cases
//      despite similarly-shaped ة-less plurals: عَقَائِدُ is the delayed
//      subject (nominative), while أَعْمَالَ (both instances) and
//      الْأَفْعَالَ are direct objects of نَسَبُوا (accusative) -- the
//      construct بَعْضَ only governs the first أَعْمَالِ (genitive); the
//      second أَعْمَالَ and الْأَفْعَالَ are separately coordinated accusative
//      objects, matching the visible fatḥa endings on the scan.
//   -- Proper nouns مِصْر (diptote, genitive by fatḥa after فِي) and عُزَيْر
//      are both tagged with plain case atoms per the corpus convention for
//      proper nouns (no def/indef atom).
//   -- No newWords overlap yet with this volume's core cast (عِيسَى/
//      الْمَسِيح/مَرْيَم/إِسْرَائِيل/يَهُود never surface in this particular
//      chapter -- the referent "they/them" carries over pronominally from
//      chapter 5).
//   -- Shared lexicon check (known from vols 1-3 / Qirā'ah, per
//      known-lemmas.txt): نَبِيّ، مِصْر (proper)، تَعْظِيم، بَلَغَ، بَعْض، عَمَل،
//      شِرْك، كُفْر، اِتَّقَى، لَمْ، حُكْم، مُشْرِك -- are all already taught and
//      NOT re-listed in newWords here. Pure function words/particles
//      (وَ، بِ، فِي، إِلَى، أَنْ، حَتَّى، قَدْ) and اللَّه are treated as
//      permanent background vocabulary per the established convention
//      (qasas-v3 ch1/ch14 never list these either), regardless of their
//      absence from known-lemmas.txt.
//
// 25 new words (تَسَرَّبَ، طُول، عَهْد، تَعْلِيم، عَقِيدَة، زَائِف، عَادَة، جَاهِلِيّ،
// عِجْل، بَالَغَ، تَقْدِيس، عُزَيْر، تَخَطَّى، حَدّ، بَشَرِيَّة، وَقَاحَة، نَسَبَ، وَثَنِيّ،
// وَثَنِيَّة، سِحْر، فِعْل، شَنِيع، اِخْتِلَاط، مُجَاوَرَة، شَعْب) -- unusually dense
// for one paragraph, reflecting this volume's higher register.
//
// No page footnotes (book_note) on page 254 for this chapter.
export const CHAPTER = {
  id: 'ch6',
  title: { ar: 'نُكْرَانٌ لِلْجَمِيلِ', en: 'Ingratitude' },
  newWords: [
    'تَسَرَّبَ', 'طُول', 'عَهْد', 'زَائِف', 'جَاهِلِيّ', 'عِجْل',
    'بَالَغَ', 'عُزَيْر', 'تَخَطَّى', 'حَدّ', 'بَشَرِيَّة', 'وَقَاحَة',
    'نَسَبَ', 'وَثَنِيّ', 'وَثَنِيَّة', 'سِحْر', 'فِعْل', 'شَنِيع',
    'اِخْتِلَاط', 'مُجَاوَرَة', 'شَعْب',
  ],
  lemmas: {
    تَسَرَّبَ: { gloss: 'to seep in, creep in, infiltrate' },
    طُول: { gloss: 'length' },
    عَهْد: { gloss: 'time, period; also: covenant, pact' },
    تَعْلِيم: { gloss: 'teaching, instruction' },
    عَقِيدَة: { gloss: 'belief, creed' },
    زَائِف: { gloss: 'false, spurious, counterfeit' },
    عَادَة: { gloss: 'custom, habit' },
    جَاهِلِيّ: { gloss: 'pagan, of pre-Islamic ignorance' },
    عِجْل: { gloss: 'calf' },
    بَالَغَ: { gloss: 'to exaggerate, go to excess' },
    تَقْدِيس: { gloss: 'sanctification, veneration' },
    عُزَيْر: { gloss: "ʿUzayr (Ezra)" },
    تَخَطَّى: { gloss: 'to go beyond, transgress, overstep' },
    حَدّ: { gloss: 'limit, bound' },
    بَشَرِيَّة: { gloss: 'humanity, human nature' },
    وَقَاحَة: { gloss: 'impudence, insolence, shamelessness' },
    نَسَبَ: { gloss: 'to attribute, ascribe' },
    وَثَنِيّ: { gloss: 'pagan, idol-worshiping' },
    وَثَنِيَّة: { gloss: 'paganism, idol-worship' },
    سِحْر: { gloss: 'magic, sorcery' },
    فِعْل: { gloss: 'deed, act' },
    شَنِيع: { gloss: 'vile, heinous, atrocious' },
    اِخْتِلَاط: { gloss: 'mixing, intermingling' },
    مُجَاوَرَة: { gloss: 'neighboring, close proximity' },
    شَعْب: { gloss: 'people, nation' },
  },
  paragraphs: [
    {
      en: "But through prolonged intermixing and proximity with polytheistic pagan nations, and the long lapse of time since the prophets' teachings, false beliefs and pagan customs crept in among them. They had worshiped the calf in Egypt, and went to such excess in venerating and glorifying ʿUzayr that they took him beyond the bounds of what is human -- their impudence even reaching the point of attributing some acts of polytheism and paganism, sorcery and disbelief, and other vile deeds to some of the prophets themselves, without any fear of Allah in doing so.",
      sentences: [
        {
          id: 'qs-v12-c06-001',
          ar: 'وَلَكِنْ تَسَرَّبَتْ إِلَيْهِمْ بِحُكْمِ الِاخْتِلَاطِ وَمُجَاوَرَةِ الشُّعُوبِ الْمُشْرِكَةِ الْوَثَنِيَّةِ،',
          en: 'But there crept in among them, through the effect of intermixing and the proximity of polytheistic pagan peoples,',
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj', gloss: 'but, however' },
            { surface: 'تَسَرَّبَتْ', lemma: 'تَسَرَّبَ', pos: 'verb', features: 'perf.3fs', root: 'س ر ب', gloss: 'to seep in, infiltrate; crept in' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'to, among them' },
            { surface: 'بِحُكْمِ', lemma: 'حُكْم', pos: 'noun', features: 'prep+constr.gen', root: 'ح ك م', gloss: 'by virtue of, owing to' },
            { surface: 'الِاخْتِلَاطِ', lemma: 'اِخْتِلَاط', pos: 'noun', features: 'def.gen', root: 'خ ل ط', gloss: 'mixing, intermingling' },
            { surface: 'وَمُجَاوَرَةِ', lemma: 'مُجَاوَرَة', pos: 'noun', features: 'conj+constr.gen', root: 'ج و ر', gloss: 'and the close proximity of' },
            { surface: 'الشُّعُوبِ', lemma: 'شَعْب', pos: 'noun', features: 'def.gen.pl', gloss: 'the peoples' },
            { surface: 'الْمُشْرِكَةِ', lemma: 'مُشْرِك', pos: 'adj', features: 'def.gen.f', gloss: 'polytheist, idolatrous' },
            { surface: 'الْوَثَنِيَّةِ', lemma: 'وَثَنِيّ', pos: 'adj', features: 'def.gen.f', root: 'و ث ن', gloss: 'pagan, idol-worshiping' },
          ],
        },
        {
          id: 'qs-v12-c06-002',
          ar: 'وَبِطُولِ الْعَهْدِ بِتَعَالِيمِ الْأَنْبِيَاءِ،',
          en: "and through the long lapse of time since the prophets' teachings,",
          tokens: [
            { surface: 'وَبِطُولِ', lemma: 'طُول', pos: 'noun', features: 'conj+prep+constr.gen', root: 'ط و ل', gloss: 'and due to the length of' },
            { surface: 'الْعَهْدِ', lemma: 'عَهْد', pos: 'noun', features: 'def.gen', gloss: 'the time, period' },
            { surface: 'بِتَعَالِيمِ', lemma: 'تَعْلِيم', pos: 'noun', features: 'prep+constr.gen.pl', root: 'ع ل م', gloss: 'from the teachings of' },
            { surface: 'الْأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'def.gen.pl', gloss: 'the prophets' },
          ],
        },
        {
          id: 'qs-v12-c06-003',
          ar: 'عَقَائِدُ زَائِفَةٌ، وَعَادَاتٌ جَاهِلِيَّةٌ،',
          en: 'false beliefs, and pagan customs.',
          tokens: [
            { surface: 'عَقَائِدُ', lemma: 'عَقِيدَة', pos: 'noun', features: 'pl.indef.nom', root: 'ع ق د', gloss: 'beliefs, creeds' },
            { surface: 'زَائِفَةٌ', lemma: 'زَائِف', pos: 'adj', features: 'indef.nom.f', root: 'ز ي ف', gloss: 'false, spurious' },
            { surface: 'وَعَادَاتٌ', lemma: 'عَادَة', pos: 'noun', features: 'conj+pl.indef.nom', gloss: 'and customs' },
            { surface: 'جَاهِلِيَّةٌ', lemma: 'جَاهِلِيّ', pos: 'adj', features: 'indef.nom.f', root: 'ج ه ل', gloss: 'pagan, of pre-Islamic ignorance' },
          ],
        },
        {
          id: 'qs-v12-c06-004',
          ar: 'وَقَدْ عَبَدُوا الْعِجْلَ فِي مِصْرَ،',
          en: 'They had indeed worshiped the calf in Egypt,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed, already' },
            { surface: 'عَبَدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'perf.3mp', gloss: 'to worship; worshiped' },
            { surface: 'الْعِجْلَ', lemma: 'عِجْل', pos: 'noun', features: 'def.acc', root: 'ع ج ل', gloss: 'the calf' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v12-c06-005',
          ar: 'وَبَالَغُوا فِي تَقْدِيسِ عُزَيْرٍ وَتَعْظِيمِهِ،',
          en: 'and went to excess in venerating and glorifying ʿUzayr,',
          tokens: [
            { surface: 'وَبَالَغُوا', lemma: 'بَالَغَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ب ل غ', gloss: 'to go to excess; and they went to excess' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'تَقْدِيسِ', lemma: 'تَقْدِيس', pos: 'noun', features: 'constr.gen', root: 'ق د س', gloss: 'venerating, sanctifying' },
            { surface: 'عُزَيْرٍ', lemma: 'عُزَيْر', pos: 'proper', features: 'gen', gloss: 'ʿUzayr (Ezra)' },
            { surface: 'وَتَعْظِيمِهِ', lemma: 'تَعْظِيم', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and glorifying him' },
          ],
        },
        {
          id: 'qs-v12-c06-006',
          ar: 'حَتَّى تَخَطَّوْا بِهِ حُدُودَ الْبَشَرِيَّةِ،',
          en: 'until they took him beyond the bounds of what is human,',
          tokens: [
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'part', features: 'part', gloss: 'until' },
            { surface: 'تَخَطَّوْا', lemma: 'تَخَطَّى', pos: 'verb', features: 'perf.3mp', root: 'خ ط و', gloss: 'to go beyond, transgress; they went beyond' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with him' },
            { surface: 'حُدُودَ', lemma: 'حَدّ', pos: 'noun', features: 'acc.constr.pl', root: 'ح د د', gloss: 'the limits of' },
            { surface: 'الْبَشَرِيَّةِ', lemma: 'بَشَرِيَّة', pos: 'noun', features: 'def.gen', root: 'ب ش ر', gloss: 'humanity, human nature' },
          ],
        },
        {
          id: 'qs-v12-c06-007',
          ar: 'وَبَلَغَتْ بِهِمُ الْوَقَاحَةُ إِلَى أَنْ نَسَبُوا بَعْضَ أَعْمَالِ الشِّرْكِ وَالْوَثَنِيَّةِ،',
          en: 'and their impudence reached the point that they attributed some acts of polytheism and paganism,',
          tokens: [
            { surface: 'وَبَلَغَتْ', lemma: 'بَلَغَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to reach; and reached' },
            { surface: 'بِهِمُ', lemma: 'بِ', pos: 'prep', features: 'prep+3mp', gloss: 'through them' },
            { surface: 'الْوَقَاحَةُ', lemma: 'وَقَاحَة', pos: 'noun', features: 'def.nom', root: 'و ق ح', gloss: 'impudence, insolence' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'نَسَبُوا', lemma: 'نَسَبَ', pos: 'verb', features: 'perf.3mp', root: 'ن س ب', gloss: 'to attribute; they attributed' },
            { surface: 'بَعْضَ', lemma: 'بَعْض', pos: 'noun', features: 'acc.constr', gloss: 'some (of)' },
            { surface: 'أَعْمَالِ', lemma: 'عَمَل', pos: 'noun', features: 'pl.gen.constr', gloss: 'the deeds of' },
            { surface: 'الشِّرْكِ', lemma: 'شِرْك', pos: 'noun', features: 'def.gen', gloss: 'polytheism' },
            { surface: 'وَالْوَثَنِيَّةِ', lemma: 'وَثَنِيَّة', pos: 'noun', features: 'conj+def.gen', root: 'و ث ن', gloss: 'and paganism' },
          ],
        },
        {
          id: 'qs-v12-c06-008',
          ar: 'وَأَعْمَالَ السِّحْرِ وَالْكُفْرِ، وَالْأَفْعَالَ الشَّنِيعَةَ،',
          en: 'and acts of sorcery and disbelief, and vile deeds,',
          tokens: [
            { surface: 'وَأَعْمَالَ', lemma: 'عَمَل', pos: 'noun', features: 'conj+acc.constr', gloss: 'and acts of' },
            { surface: 'السِّحْرِ', lemma: 'سِحْر', pos: 'noun', features: 'def.gen', root: 'س ح ر', gloss: 'magic, sorcery' },
            { surface: 'وَالْكُفْرِ', lemma: 'كُفْر', pos: 'noun', features: 'conj+def.gen', gloss: 'and disbelief' },
            { surface: 'وَالْأَفْعَالَ', lemma: 'فِعْل', pos: 'noun', features: 'conj+def.acc.pl', root: 'ف ع ل', gloss: 'and the deeds' },
            { surface: 'الشَّنِيعَةَ', lemma: 'شَنِيع', pos: 'adj', features: 'def.acc.f', root: 'ش ن ع', gloss: 'vile, heinous' },
          ],
        },
        {
          id: 'qs-v12-c06-009',
          ar: 'إِلَى بَعْضِ الْأَنْبِيَاءِ،',
          en: 'to some of the prophets,',
          tokens: [
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'بَعْضِ', lemma: 'بَعْض', pos: 'noun', features: 'gen.constr', gloss: 'some of' },
            { surface: 'الْأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'def.gen.pl', gloss: 'the prophets' },
          ],
        },
        {
          id: 'qs-v12-c06-010',
          ar: 'وَلَمْ يَتَّقُوا اللَّهَ فِيهِمْ.',
          en: 'and they did not fear Allah with regard to them.',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَتَّقُوا', lemma: 'اِتَّقَى', pos: 'verb', features: 'impf.3mp', root: 'و ق ي', gloss: 'to fear, be mindful of; they did not fear' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'فِيهِمْ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'concerning them' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَ بَالَغُوا فِي عُزَيْرٍ؟',
          options: ['فِي تَقْدِيسِهِ وَتَعْظِيمِهِ حَتَّى تَخَطَّوْا بِهِ حُدُودَ الْبَشَرِيَّةِ', 'فِي طَاعَةِ أَنْبِيَائِهِمْ', 'فِي بِنَاءِ الْمَسَاجِدِ لَهُ'],
          answer: 0,
          qEn: 'In what did they go to excess regarding ʿUzayr?',
          optionsEn: ['In venerating and glorifying him, until they took him beyond the bounds of what is human', 'In obeying their prophets', 'In building places of worship for him'],
        },
        {
          q: 'مَاذَا نَسَبُوا إِلَى بَعْضِ الْأَنْبِيَاءِ؟',
          options: ['بَعْضَ أَعْمَالِ الشِّرْكِ وَالسِّحْرِ وَالْأَفْعَالَ الشَّنِيعَةَ', 'صِفَاتِ الْكَمَالِ وَالطُّهْرِ', 'النَّصْرَ عَلَى أَعْدَائِهِمْ'],
          answer: 0,
          qEn: 'What did they attribute to some of the prophets?',
          optionsEn: ['Some acts of polytheism, sorcery, and vile deeds', 'Qualities of perfection and purity', 'Victory over their enemies'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَقَدْ',
        post: 'الْعِجْلَ فِي مِصْرَ.',
        en: 'They had indeed worshiped the calf in Egypt.',
        options: ['عَبَدُوا', 'يَعْبُدُونَ', 'اُعْبُدُوا', 'عَابِدُونَ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural -- a completed action, matching قَدْ + perfect.',
          'Imperfect -- wrong tense; the sentence narrates a completed act in the past.',
          'Imperative plural -- wrong mood; this is narration, not a command.',
          'Active participle (noun) -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَبَالَغُوا فِي تَقْدِيسِ',
        post: 'وَتَعْظِيمِهِ.',
        en: 'They went to excess in venerating and glorifying ʿUzayr.',
        options: ['عُزَيْرٍ', 'عُزَيْرَ', 'عُزَيْرُ', 'عُزَيْراً'],
        answer: 0,
        rationales: [
          'Genitive -- object of the construct تَقْدِيسِ, matching the printed بِ + إضافة pattern.',
          'Accusative -- wrong case; a construct genitive is required here.',
          'Nominative -- wrong case for the same reason.',
          'Accusative with tanwīn -- also wrong case, and عُزَيْر does not take a second تنوين form here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَمْ',
        post: 'اللَّهَ فِيهِمْ.',
        en: 'And they did not fear Allah with regard to them.',
        options: ['يَتَّقُوا', 'اتَّقَوْا', 'يَتَّقِي', 'مُتَّقُونَ'],
        answer: 0,
        rationales: [
          'Jussive after لَمْ -- correctly negates a past action, matching the printed لَمْ يَتَّقُوا.',
          'Perfect -- wrong mood; لَمْ requires the jussive, not the perfect.',
          '3rd masculine singular -- wrong number; the subject (هُمْ) is plural.',
          'Active participle (noun) -- wrong part of speech for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'بَالَغُوا فِي تَقْدِيسِهِ',
        pre: '',
        post: 'فِي تَقْدِيسِهِ',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['بَالَغَ', 'بَالَغُوا', 'بَالَغْتَ', 'بَالَغْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches هُوَ.',
          '3rd masculine plural -- the base form, not shifted to "he."',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'بَالَغُوا فِي تَقْدِيسِهِ',
        pre: '',
        post: 'فِي تَقْدِيسِهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['بَالَغْتُ', 'بَالَغَ', 'بَالَغُوا', 'بَالَغْتُمْ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he.',
          '3rd masculine plural -- the base form, not shifted to "I."',
          '2nd masculine plural -- you (pl.).',
        ],
      },
      {
        type: 'shift',
        base: 'بَالَغُوا فِي تَقْدِيسِهِ',
        pre: '',
        post: 'فِي تَقْدِيسِهِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['بَالَغْنَا', 'بَالَغَ', 'بَالَغُوا', 'بَالَغْتَ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he.',
          '3rd masculine plural -- the base form, not shifted to "we."',
          '2nd masculine singular -- you (m.).',
        ],
      },
    ],
  },
};

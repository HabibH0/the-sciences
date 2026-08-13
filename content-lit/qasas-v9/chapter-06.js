// قَصَصُ النَّبِيِّينَ, volume 9, chapter 6 -- سُلَيْمَانُ يَعْرِفُ لُغَةَ الطَّيْرِ
// وَالْحَيَوَانِ. Printed page 227, from its own heading box (right after
// ch5's closing āyah) to the top of page 228, ending right before ch7's
// heading قِصَّةُ هُدْهُدٍ on that page. Transcribed by hand from the scan
// (vision OCR, 200dpi render) against ../CHAPTER-FORMAT.md.
//
// Nadwi's own prose retelling (no ﴿﴾ quotation marks here -- the direct
// Qur'an text of this same episode is quoted later, in ch14) of Sulaymān's
// review of his army of jinn, humans, and birds, marching in full order
// under his own command past the Valley of the Ants: an ant, fearing her
// tribe would be crushed underfoot without Sulaymān or his troops even
// noticing, ordered her people inside their homes. Sulaymān understood her
// and -- rather than being seized by pride at being a Prophet -- was moved
// only to praise and gratitude toward Allah.
//
// Grammar / lexical notes:
//   -- تُحَطِّمَهَا (unit 012, "would crush them") is subjunctive after أَنْ
//      following تَخَافُ, tagged impf.3fs per the no-mood-atom convention
//      (QASAS_AGENT_BRIEF.md §4).
//   -- التِّيهُ and الزَّهْوُ (unit 016, both roughly "conceit, self-importance")
//      are near-synonyms paired for emphasis, kept as two distinct lemmas
//      since they are lexically unrelated.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): قَصَّ، حَكِيم، تَدْبِير،
//      دُنْيَا، آخِرَة، نُبُوَّة، رِسَالَة، دِين، رَكِبَ، رَئِيس، خَافَ، أَمَرَ، أَخَذَ،
//      حَمْد، اللَّه، تَعَالَى، حَمَلَ، شُكْر، نِعْمَة، عَمَل، صَالِح، عَبْد، طَيْر،
//      حَيَوَان، جِنّ، سُلَيْمَان، كَانَ، مَرَّ، فِي، ذَلِكَ، دَخَلَ
//      are all already taught and are NOT re-listed in newWords here.
//
// 26 new words -- the volume's densest narrative chapter, since it must
// introduce the entire vocabulary of statecraft, army, and the ant scene
// that the rest of the Sulaymān story leans on (وَادِي، نَمْل، قَبِيلَة، جُنْد،
// مَمْلَكَة، سُلْطَان...).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch6',
  title: { ar: 'سُلَيْمَانُ يَعْرِفُ لُغَةَ الطَّيْرِ وَالْحَيَوَانِ', en: 'Sulaymān Knows the Language of Birds and Animals' },
  newWords: ['مُمْتِع', 'تَيَقُّظ', 'مَمْلَكَة', 'رَهْبَة', 'سُلْطَان', 'سَعَادَة', 'تَمْكِين', 'جُنْد', 'إِنْس', 'أُبَّهَة', 'عَظَمَة', 'نِظَام', 'كَامِل', 'قِيَادَة', 'وَادِي', 'نَمْل', 'قَبِيلَة', 'حَطَّمَ', 'خَيْل', 'شَعَرَ', 'مَسْكَن', 'تِيه', 'زَهْو', 'تَوْفِيق', 'اِنْخِرَاط', 'سِلْك'],
  lemmas: {
    مُمْتِع: { gloss: 'delightful, enjoyable' },
    تَيَقُّظ: { gloss: 'alertness, vigilance' },
    مَمْلَكَة: { gloss: 'a kingdom' },
    رَهْبَة: { gloss: 'awe, dread' },
    سُلْطَان: { gloss: 'authority, dominion' },
    سَعَادَة: { gloss: 'happiness, felicity' },
    تَمْكِين: { gloss: 'empowerment, establishment' },
    جُنْد: { gloss: 'troops, army' },
    إِنْس: { gloss: 'mankind' },
    أُبَّهَة: { gloss: 'grandeur, pomp' },
    عَظَمَة: { gloss: 'majesty, greatness' },
    نِظَام: { gloss: 'order, system' },
    كَامِل: { gloss: 'complete, full' },
    قِيَادَة: { gloss: 'leadership, command' },
    وَادِي: { gloss: 'a valley' },
    نَمْل: { gloss: 'ants' },
    قَبِيلَة: { gloss: 'a tribe' },
    حَطَّمَ: { gloss: 'to crush, smash' },
    خَيْل: { gloss: 'horses' },
    شَعَرَ: { gloss: 'to sense, perceive' },
    مَسْكَن: { gloss: 'a dwelling' },
    تِيه: { gloss: 'conceit, arrogance' },
    زَهْو: { gloss: 'vanity, self-importance' },
    تَوْفِيق: { gloss: 'success granted (by Allah)' },
    اِنْخِرَاط: { gloss: 'joining, enrolling oneself' },
    سِلْك: { gloss: 'the ranks, file' },
  },
  paragraphs: [
    {
      en: "The Quran narrated a wise, delightful story in which Sulaymān's alertness in administering his kingdom appeared, and the awe of his authority: how Allah gathered for him both the happiness of this world and the next, and both dominion, empowerment, prophethood, and messengership in religion. He knew the language of birds and animals, and once gathered his troops of jinn, mankind, and birds, and rode among them in grandeur and majesty, and they were in complete order, under the command of their chiefs. Sulaymān passed by the Valley of the Ants, and an ant feared for her tribe that the horses would crush them underfoot entirely, while Sulaymān and his troops did not perceive that, so she ordered them to enter their dwellings. Sulaymān understood that, and neither conceit nor vanity seized him at being a Prophet among Allah's prophets -- rather, that moved him to praise Allah, exalted is He, and give thanks for His blessing, and to prayer and the success granted for righteous work, and to joining the ranks of Allah's righteous servants.",
      sentences: [
        {
          id: 'qs-v9-c06-001',
          ar: 'وَقَصَّ الْقُرْآنُ قِصَّةً حَكِيمَةً مُمْتِعَةً',
          en: 'The Quran narrated a wise, delightful story',
          tokens: [
            { surface: 'وَقَصَّ', lemma: 'قَصَّ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to narrate; narrated' },
            { surface: 'الْقُرْآنُ', lemma: 'قُرْآن', pos: 'proper', features: 'def.nom', gloss: 'the Quran' },
            { surface: 'قِصَّةً', lemma: 'قِصَّة', pos: 'noun', features: 'indef.acc', gloss: 'a story' },
            { surface: 'حَكِيمَةً', lemma: 'حَكِيم', pos: 'adj', features: 'indef.acc.f', gloss: 'wise' },
            { surface: 'مُمْتِعَةً', lemma: 'مُمْتِع', pos: 'adj', features: 'indef.acc.f', root: 'م ت ع', gloss: 'delightful' },
          ],
        },
        {
          id: 'qs-v9-c06-002',
          ar: 'تَجَلَّى فِيهَا تَيَقُّظُ سُلَيْمَانَ فِي تَدْبِيرِ مَمْلَكَتِهِ،',
          en: "in which Sulaymān's alertness in administering his kingdom appeared,",
          tokens: [
            { surface: 'تَجَلَّى', lemma: 'تَجَلَّى', pos: 'verb', features: 'perf.3ms', gloss: 'to become manifest; appeared' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in which' },
            { surface: 'تَيَقُّظُ', lemma: 'تَيَقُّظ', pos: 'noun', features: 'constr.nom', root: 'ي ق ظ', gloss: "alertness of" },
            { surface: 'سُلَيْمَانَ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'gen', gloss: 'Sulaymān' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'تَدْبِيرِ', lemma: 'تَدْبِير', pos: 'noun', features: 'constr.gen', gloss: 'administering' },
            { surface: 'مَمْلَكَتِهِ', lemma: 'مَمْلَكَة', pos: 'noun', features: 'gen+3ms', root: 'م ل ك', gloss: 'his kingdom' },
          ],
        },
        {
          id: 'qs-v9-c06-003',
          ar: 'وَرَهْبَةُ سُلْطَانِهِ،',
          en: 'and the awe of his authority,',
          tokens: [
            { surface: 'وَرَهْبَةُ', lemma: 'رَهْبَة', pos: 'noun', features: 'conj+constr.nom', gloss: 'and the awe of' },
            { surface: 'سُلْطَانِهِ', lemma: 'سُلْطَان', pos: 'noun', features: 'gen+3ms', gloss: 'his authority' },
          ],
        },
        {
          id: 'qs-v9-c06-004',
          ar: 'كَيْفَ جَمَعَ اللَّهُ لَهُ بَيْنَ سَعَادَةِ الدُّنْيَا وَالْآخِرَةِ،',
          en: 'how Allah gathered for him both the happiness of this world and the next,',
          tokens: [
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'جَمَعَ', lemma: 'جَمَعَ', pos: 'verb', features: 'perf.3ms', gloss: 'to gather; gathered' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'between' },
            { surface: 'سَعَادَةِ', lemma: 'سَعَادَة', pos: 'noun', features: 'constr.gen', gloss: 'the happiness of' },
            { surface: 'الدُّنْيَا', lemma: 'دُنْيَا', pos: 'noun', features: 'def.gen', gloss: 'this world' },
            { surface: 'وَالْآخِرَةِ', lemma: 'آخِرَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and the next' },
          ],
        },
        {
          id: 'qs-v9-c06-005',
          ar: 'وَبَيْنَ الْمُلْكِ وَالتَّمْكِينِ وَالنُّبُوَّةِ وَالرِّسَالَةِ فِي الدِّينِ،',
          en: 'and both dominion, empowerment, prophethood, and messengership in religion.',
          tokens: [
            { surface: 'وَبَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'conj+prep', gloss: 'and between' },
            { surface: 'الْمُلْكِ', lemma: 'مُلْك', pos: 'noun', features: 'def.gen', gloss: 'dominion' },
            { surface: 'وَالتَّمْكِينِ', lemma: 'تَمْكِين', pos: 'noun', features: 'conj+def.gen', root: 'م ك ن', gloss: 'and empowerment' },
            { surface: 'وَالنُّبُوَّةِ', lemma: 'نُبُوَّة', pos: 'noun', features: 'conj+def.gen', gloss: 'and prophethood' },
            { surface: 'وَالرِّسَالَةِ', lemma: 'رِسَالَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and messengership' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الدِّينِ', lemma: 'دِين', pos: 'noun', features: 'def.gen', gloss: 'religion' },
          ],
        },
        {
          id: 'qs-v9-c06-006',
          ar: 'وَكَانَ يَعْرِفُ لُغَةَ الطَّيْرِ وَالْحَيَوَانِ،',
          en: 'He knew the language of birds and animals,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', gloss: 'to know; knowing' },
            { surface: 'لُغَةَ', lemma: 'لُغَة', pos: 'noun', features: 'acc.constr', gloss: 'the language of' },
            { surface: 'الطَّيْرِ', lemma: 'طَيْر', pos: 'noun', features: 'def.gen', gloss: 'the birds' },
            { surface: 'وَالْحَيَوَانِ', lemma: 'حَيَوَان', pos: 'noun', features: 'conj+def.gen', gloss: 'and the animals' },
          ],
        },
        {
          id: 'qs-v9-c06-007',
          ar: 'وَجَمَعَ جُنُودَهُ مِنَ الْجِنِّ وَالْإِنْسِ وَالطَّيْرِ ذَاتَ مَرَّةٍ،',
          en: 'and once gathered his troops of jinn, mankind, and birds,',
          tokens: [
            { surface: 'وَجَمَعَ', lemma: 'جَمَعَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to gather; and gathered' },
            { surface: 'جُنُودَهُ', lemma: 'جُنْد', pos: 'noun', features: 'pl.acc+3ms', gloss: 'his troops' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْجِنِّ', lemma: 'جِنّ', pos: 'noun', features: 'def.gen', gloss: 'the jinn' },
            { surface: 'وَالْإِنْسِ', lemma: 'إِنْس', pos: 'noun', features: 'conj+def.gen', gloss: 'and mankind' },
            { surface: 'وَالطَّيْرِ', lemma: 'طَيْر', pos: 'noun', features: 'conj+def.gen', gloss: 'and the birds' },
            { surface: 'ذَاتَ', lemma: 'ذَات', pos: 'noun', features: 'acc.constr', gloss: 'one' },
            { surface: 'مَرَّةٍ', lemma: 'مَرَّة', pos: 'noun', features: 'indef.gen', gloss: 'time' },
          ],
        },
        {
          id: 'qs-v9-c06-008',
          ar: 'وَرَكِبَ فِيهِمْ فِي أُبَّهَةٍ وَعَظَمَةٍ',
          en: 'and rode among them in grandeur and majesty',
          tokens: [
            { surface: 'وَرَكِبَ', lemma: 'رَكِبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to ride; and rode' },
            { surface: 'فِيهِمْ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أُبَّهَةٍ', lemma: 'أُبَّهَة', pos: 'noun', features: 'indef.gen', gloss: 'grandeur' },
            { surface: 'وَعَظَمَةٍ', lemma: 'عَظَمَة', pos: 'noun', features: 'conj+indef.gen', gloss: 'and majesty' },
          ],
        },
        {
          id: 'qs-v9-c06-009',
          ar: 'وَكَانُوا عَلَى نِظَامٍ كَامِلٍ،',
          en: 'and they were in complete order,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and were' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'نِظَامٍ', lemma: 'نِظَام', pos: 'noun', features: 'indef.gen', gloss: 'order' },
            { surface: 'كَامِلٍ', lemma: 'كَامِل', pos: 'adj', features: 'indef.gen', gloss: 'complete' },
          ],
        },
        {
          id: 'qs-v9-c06-010',
          ar: 'وَكَانُوا فِي قِيَادَةِ رُؤَسَائِهِمْ،',
          en: 'under the command of their chiefs.',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and were' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'under' },
            { surface: 'قِيَادَةِ', lemma: 'قِيَادَة', pos: 'noun', features: 'constr.gen', gloss: 'the command of' },
            { surface: 'رُؤَسَائِهِمْ', lemma: 'رَئِيس', pos: 'noun', features: 'pl.gen+3mp', gloss: 'their chiefs' },
          ],
        },
        {
          id: 'qs-v9-c06-011',
          ar: 'فَمَرَّ سُلَيْمَانُ عَلَى وَادِي النَّمْلِ،',
          en: 'Sulaymān passed by the Valley of the Ants,',
          tokens: [
            { surface: 'فَمَرَّ', lemma: 'مَرَّ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to pass; and passed' },
            { surface: 'سُلَيْمَانُ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'nom', gloss: 'Sulaymān' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'by' },
            { surface: 'وَادِي', lemma: 'وَادِي', pos: 'noun', features: 'constr.gen', gloss: 'the Valley of' },
            { surface: 'النَّمْلِ', lemma: 'نَمْل', pos: 'noun', features: 'def.gen', gloss: 'the Ants' },
          ],
        },
        {
          id: 'qs-v9-c06-012',
          ar: 'فَخَافَتْ نَمْلَةٌ عَلَى قَبِيلَتِهَا أَنْ تُحَطِّمَهَا الْخُيُولُ بِحَذَافِيرِهَا،',
          en: 'and an ant feared for her tribe that the horses would crush them underfoot entirely,',
          tokens: [
            { surface: 'فَخَافَتْ', lemma: 'خَافَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to fear; and feared' },
            { surface: 'نَمْلَةٌ', lemma: 'نَمْل', pos: 'noun', features: 'indef.nom', gloss: 'an ant' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'قَبِيلَتِهَا', lemma: 'قَبِيلَة', pos: 'noun', features: 'gen+3fs', gloss: 'her tribe' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'تُحَطِّمَهَا', lemma: 'حَطَّمَ', pos: 'verb', features: 'impf.3fs+3fs', root: 'ح ط م', gloss: 'to crush; would crush them' },
            { surface: 'الْخُيُولُ', lemma: 'خَيْل', pos: 'noun', features: 'pl.def.nom', gloss: 'the horses' },
            { surface: 'بِحَذَافِيرِهَا', lemma: 'حَذَافِير', pos: 'noun', features: 'prep+gen+3fs', gloss: 'entirely, to the last one' },
          ],
        },
        {
          id: 'qs-v9-c06-013',
          ar: 'وَلَا يَشْعُرُ بِذَلِكَ سُلَيْمَانُ وَجُنُودُهُ،',
          en: 'while Sulaymān and his troops did not perceive that,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَشْعُرُ', lemma: 'شَعَرَ', pos: 'verb', features: 'impf.3ms', root: 'ش ع ر', gloss: 'to sense, perceive; perceive' },
            { surface: 'بِذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'prep+dem', gloss: 'that' },
            { surface: 'سُلَيْمَانُ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'nom', gloss: 'Sulaymān' },
            { surface: 'وَجُنُودُهُ', lemma: 'جُنْد', pos: 'noun', features: 'conj+pl.nom+3ms', gloss: 'and his troops' },
          ],
        },
        {
          id: 'qs-v9-c06-014',
          ar: 'فَأَمَرَتْهُمْ بِالدُّخُولِ إِلَى مَسَاكِنِهِمْ،',
          en: 'so she ordered them to enter their dwellings.',
          tokens: [
            { surface: 'فَأَمَرَتْهُمْ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3fs+3mp', gloss: 'to order; so she ordered them' },
            { surface: 'بِالدُّخُولِ', lemma: 'دَخَلَ', pos: 'noun', features: 'prep+def.gen', gloss: 'to enter' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'into' },
            { surface: 'مَسَاكِنِهِمْ', lemma: 'مَسْكَن', pos: 'noun', features: 'pl.gen+3mp', root: 'س ك ن', gloss: 'their dwellings' },
          ],
        },
        {
          id: 'qs-v9-c06-015',
          ar: 'فَفَهِمَ ذَلِكَ سُلَيْمَانُ،',
          en: 'Sulaymān understood that,',
          tokens: [
            { surface: 'فَفَهِمَ', lemma: 'فَهِمَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to understand; and understood' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
            { surface: 'سُلَيْمَانُ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'nom', gloss: 'Sulaymān' },
          ],
        },
        {
          id: 'qs-v9-c06-016',
          ar: 'وَلَمْ يَأْخُذْهُ التِّيهُ وَلَا الزَّهْوُ بِأَنَّهُ نَبِيٌّ مِنْ أَنْبِيَاءِ اللَّهِ،',
          en: 'and neither conceit nor vanity seized him at being a Prophet among Allah\'s prophets,',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and did not' },
            { surface: 'يَأْخُذْهُ', lemma: 'أَخَذَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to seize; seize him' },
            { surface: 'التِّيهُ', lemma: 'تِيه', pos: 'noun', features: 'def.nom', gloss: 'conceit' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'الزَّهْوُ', lemma: 'زَهْو', pos: 'noun', features: 'def.nom', gloss: 'vanity' },
            { surface: 'بِأَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'prep+part+3ms', gloss: 'at being' },
            { surface: 'نَبِيٌّ', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.nom', gloss: 'a Prophet' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'أَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.constr.gen', gloss: 'the prophets of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v9-c06-017',
          ar: 'بَلْ حَمَلَهُ ذَلِكَ عَلَى حَمْدِ اللَّهِ تَعَالَى وَشُكْرِ نِعْمَتِهِ،',
          en: 'rather, that moved him to praise Allah, exalted is He, and give thanks for His blessing,',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'حَمَلَهُ', lemma: 'حَمَلَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to move, carry; moved him' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'حَمْدِ', lemma: 'حَمْد', pos: 'noun', features: 'constr.gen', gloss: 'the praise of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; exalted is He' },
            { surface: 'وَشُكْرِ', lemma: 'شُكْر', pos: 'noun', features: 'conj+constr.gen', gloss: 'and the thanking of' },
            { surface: 'نِعْمَتِهِ', lemma: 'نِعْمَة', pos: 'noun', features: 'gen+3ms', gloss: 'His blessing' },
          ],
        },
        {
          id: 'qs-v9-c06-018',
          ar: 'وَالدُّعَاءِ وَالتَّوْفِيقِ لِلْعَمَلِ الصَّالِحِ',
          en: 'and to prayer and the success granted for righteous work,',
          tokens: [
            { surface: 'وَالدُّعَاءِ', lemma: 'دُعَاء', pos: 'noun', features: 'conj+def.gen', gloss: 'and prayer' },
            { surface: 'وَالتَّوْفِيقِ', lemma: 'تَوْفِيق', pos: 'noun', features: 'conj+def.gen', root: 'و ف ق', gloss: 'and success' },
            { surface: 'لِلْعَمَلِ', lemma: 'عَمَل', pos: 'noun', features: 'prep+def.gen', gloss: 'for the work' },
            { surface: 'الصَّالِحِ', lemma: 'صَالِح', pos: 'adj', features: 'def.gen', gloss: 'the righteous' },
          ],
        },
        {
          id: 'qs-v9-c06-019',
          ar: 'وَالانْخِرَاطِ فِي سِلْكِ عِبَادِ اللَّهِ الصَّالِحِينَ.',
          en: "and to joining the ranks of Allah's righteous servants.",
          tokens: [
            { surface: 'وَالانْخِرَاطِ', lemma: 'اِنْخِرَاط', pos: 'noun', features: 'conj+def.gen', root: 'خ ر ط', gloss: 'and joining' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'سِلْكِ', lemma: 'سِلْك', pos: 'noun', features: 'constr.gen', gloss: 'the ranks of' },
            { surface: 'عِبَادِ', lemma: 'عَبْد', pos: 'noun', features: 'pl.constr.gen', gloss: 'the servants of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'الصَّالِحِينَ', lemma: 'صَالِح', pos: 'adj', features: 'pl.def.gen', gloss: 'the righteous' },
          ],
        },
      ],
      checks: [
        {
          q: 'مِمَّنْ كَانَتْ تَتَأَلَّفُ جُنُودُ سُلَيْمَانَ؟',
          options: ['مِنَ الْجِنِّ وَالْإِنْسِ وَالطَّيْرِ', 'مِنَ الْإِنْسِ فَقَطْ', 'مِنَ الطَّيْرِ فَقَطْ'],
          answer: 0,
          qEn: "What was Sulaymān's army made up of?",
          optionsEn: ['Jinn, mankind, and birds', 'Mankind only', 'Birds only'],
        },
        {
          q: 'مِمَّ خَافَتِ النَّمْلَةُ؟',
          options: ['أَنْ تُحَطِّمَ الْخُيُولُ قَبِيلَتَهَا وَهُمْ لَا يَشْعُرُونَ', 'مِنْ سُلَيْمَانَ نَفْسِهِ', 'مِنَ الطَّيْرِ'],
          answer: 0,
          qEn: 'What did the ant fear?',
          optionsEn: ['That the horses would crush her tribe without anyone noticing', 'Sulaymān himself', 'The birds'],
        },
        {
          q: 'كَيْفَ كَانَ رَدُّ فِعْلِ سُلَيْمَانَ حِينَ فَهِمَ كَلَامَ النَّمْلَةِ؟',
          options: ['حَمِدَ اللَّهَ وَشَكَرَ نِعْمَتَهُ وَلَمْ يَأْخُذْهُ التِّيهُ', 'غَضِبَ عَلَى النَّمْلَةِ', 'تَجَاهَلَ الْأَمْرَ'],
          answer: 0,
          qEn: "How did Sulaymān react when he understood the ant's words?",
          optionsEn: ['He praised Allah and thanked Him for His blessing, and no conceit seized him', 'He grew angry at the ant', 'He ignored the matter'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ سُلَيْمَانُ',
        post: 'لُغَةَ الطَّيْرِ وَالْحَيَوَانِ.',
        en: 'And Sulaymān knew the language of birds and animals.',
        options: ['يَعْرِفُ', 'عَرَفَ', 'يَعْرِفَ', 'اعْرِفْ'],
        answer: 0,
        rationales: [
          'Imperfect indicative -- describes an ongoing state after كَانَ, matching the printed كَانَ يَعْرِفُ.',
          'Perfect -- wrong; كَانَ + a perfect verb does not form the "used to" construction the way كَانَ + imperfect does.',
          'Subjunctive form -- wrong mood; nothing here calls for أَنْ or a subjunctive particle.',
          'Imperative -- wrong; this is a description, not a command.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَخَافَتْ نَمْلَةٌ عَلَى',
        post: 'أَنْ تُحَطِّمَهَا الْخُيُولُ.',
        en: 'and an ant feared for her tribe that the horses would crush them.',
        options: ['قَبِيلَتِهَا', 'قَبِيلَتُهَا', 'قَبِيلَتَهَا', 'قَبَائِلِهَا'],
        answer: 0,
        rationales: [
          'Genitive -- object of the preposition عَلَى, matching the printed عَلَى قَبِيلَتِهَا.',
          'Nominative -- wrong case; a preposition requires the genitive.',
          'Accusative -- wrong case for the same reason.',
          'Plural ("her tribes") -- wrong number; one tribe is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَمْ يَأْخُذْهُ التِّيهُ وَلَا الزَّهْوُ بِأَنَّهُ',
        post: 'مِنْ أَنْبِيَاءِ اللَّهِ.',
        en: "and neither conceit nor vanity seized him at being a Prophet among Allah's prophets.",
        options: ['نَبِيٌّ', 'نَبِيّاً', 'نَبِيٍّ', 'النَّبِيُّ'],
        answer: 0,
        rationales: [
          'Nominative, indefinite -- the predicate of أَنَّ, matching the printed بِأَنَّهُ نَبِيٌّ.',
          'Accusative -- wrong case; the predicate of أَنَّ is nominative, not accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Definite -- wrong; the printed word is indefinite.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَشْعُرُ الرَّجُلُ بِالْخَطَرِ',
        pre: '',
        post: 'بِالْخَطَرِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَشْعُرُ', 'يَشْعُرُ', 'تَشْعُرُ', 'نَشْعُرُ'],
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
        base: 'تَدْخُلُ النَّمْلَةُ مَسْكَنَهَا',
        pre: '',
        post: 'مَسْكَنَهَا',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَدْخُلُونَ', 'تَدْخُلُ', 'أَدْخُلُ', 'نَدْخُلُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd feminine singular -- the base form, not shifted to "they."',
          '1st singular -- wrong person; the target is "they," not "I."',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَحْمَدُ سُلَيْمَانُ اللَّهَ عَلَى نِعْمَتِهِ',
        pre: '',
        post: 'اللَّهَ عَلَى نِعْمَتِهِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَحْمَدُ', 'يَحْمَدُ', 'تَحْمَدُ', 'أَحْمَدُ'],
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

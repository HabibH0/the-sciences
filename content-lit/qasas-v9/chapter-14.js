// قَصَصُ النَّبِيِّينَ, volume 9, chapter 14 -- الْقُرْآنُ يَحْكِي قِصَّةَ سُلَيْمَانَ.
// Printed pages 233 (from its own heading box, right after ch13's closing
// sentence) through 235 (up to its closing paragraph, before ch15's
// heading وَمَا كَفَرَ سُلَيْمَانُ وَلَكِنَّ الشَّيَاطِينَ كَفَرُوا further down that
// page). Transcribed by hand from the scan (vision OCR, 200dpi render)
// against ../CHAPTER-FORMAT.md.
//
// The full direct Qur'an text of Sūrat an-Naml 27:20-44 -- the entire
// hoopoe/Sabaʾ narrative Nadwi has just paraphrased across ch6-ch13, now
// quoted verbatim in one block, as the corpus's own confirmation of every
// prior chapter's retelling. Every āyah is wrapped in its own ﴿﴾ sentence
// and split at natural clause breaks to stay at or under nine tokens each,
// matching the qasas-v3 ch17 precedent -- by far the longest continuous
// Qur'an quotation in the corpus to date (25 āyāt).
//
// Grammar / lexical notes:
//   -- قِيلَ (units 057, 062) is the passive of the already-taught قَالَ,
//      tagged pass+perf.3ms -- reusing the qasas-v3 ch1 precedent rather
//      than a separate lemma.
//   -- بِسْمِ (unit 027) is tagged under the already-taught lemma اسْم
//      ("name"), features prep+constr.gen, not as a frozen standalone
//      lemma -- the Basmala here is grammatically ordinary بِ + اسْمِ.
//   -- الرَّحْمَٰنِ and الرَّحِيمِ (unit 027) are both apposed adjectives to
//      اللَّهِ, so both are tagged def.gen; الرَّحِيم was already taught (as an
//      ordinary adjective elsewhere in the corpus) while الرَّحْمَٰن, exclusive
//      to Allah, is new here.
//   -- Emphatic نّ-suffixed verb forms (لَأُعَذِّبَنَّهُ unit 005, لَأَذْبَحَنَّهُ
//      unit 005, لَيَأْتِيَنِّي unit 006, فَلَنَأْتِيَنَّهُم / لَنُخْرِجَنَّهُم units
//      042-043) have no dedicated atom in the documented feature grammar;
//      each is tagged with its ordinary person/number features only (the
//      emphatic force is carried by the surface spelling itself, which the
//      reader still shows verbatim).
//   -- Units 062-067 repeat the same āyah 44 material already transcribed
//      in qasas-v9 ch13 (Nadwi's own narrative paraphrase quoted it first);
//      tokenized identically here for lemma consistency, since this
//      chapter's whole point is to give the reader the Qur'an's own
//      unbroken text of the story Nadwi has been retelling.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): مَكَثَ، بَعِيد، أَحَاطَ،
//      سَمَاء، أَخْفَى، صَدَقَ، كَاذِب، أَلْقَى، كَرِيم، مُسْلِم، شَهِدَ، خَيْر، أَخْرَجَ،
//      اِرْتَدَّ، كَفَرَ، غَنِيّ، قِيلَ (as قَالَ)، اسْم، رَحِيم، دَخَلَ، رَأَى، شَكَرَ،
//      عَرْش، مَلَكَ، هَدَى، اللَّه، سُلَيْمَان، طَيْر، جِنّ، كِتَاب، مَلِكَة، سَبَأ،
//      دُونَ، شَمْس، سَجَدَ، عِلْم، فَضْل، رَبّ، عَالَم، صَرْح، مُمَرَّد، قَارُورَة،
//      ظَلَمَ، أَسْلَمَ، مَعَ، حِكْمَة، فِقْه، غَيْرَة، دِين، تَوْحِيد، مَوْقِف (as new)
//      are all already taught (except where noted new) and are NOT
//      re-listed in newWords here.
//
// 28 new words (تَفَقَّدَ، غَائِب، عَذَّبَ، نَبَأ، يَقِين، زَيَّنَ، صَدَّ، خَبْء، أَعْلَنَ،
// تَوَلَّى، رَحْمَٰن، عَلَا، أَفْتَى، قَاطِع، أُولُو، أَعَزّ، أَذَلّ، نَاظِر، قِبَل، صَاغِر،
// عِفْرِيت، مَقَام، طَرْف، مُسْتَقِرّ، بَلَا، نَكَّرَ، لُجَّة، مَوْقِف، عَقِيدَة) --
// the volume's single densest chapter, unavoidably, since it is 25 āyāt of
// unparaphrased Qur'anic Arabic in one sitting.
//
// No page footnotes (book_note) on any of the three pages for this chapter.
export const CHAPTER = {
  id: 'ch14',
  title: { ar: 'الْقُرْآنُ يَحْكِي قِصَّةَ سُلَيْمَانَ', en: 'The Quran Narrates the Story of Sulaymān' },
  newWords: ['تَفَقَّدَ', 'غَائِب', 'عَذَّبَ', 'نَبَأ', 'يَقِين', 'زَيَّنَ', 'صَدَّ', 'خَبْء', 'أَعْلَنَ', 'تَوَلَّى', 'رَحْمَٰن', 'عَلَا', 'أَفْتَى', 'قَاطِع', 'أُولُو', 'أَعَزّ', 'أَذَلّ', 'نَاظِر', 'قِبَل', 'صَاغِر', 'عِفْرِيت', 'مَقَام', 'طَرْف', 'مُسْتَقِرّ', 'بَلَا', 'نَكَّرَ', 'لُجَّة', 'مَوْقِف', 'عَقِيدَة'],
  lemmas: {
    تَفَقَّدَ: { gloss: 'to look for, take stock of' },
    غَائِب: { gloss: 'absent' },
    عَذَّبَ: { gloss: 'to punish, torment' },
    نَبَأ: { gloss: 'news, a report' },
    يَقِين: { gloss: 'certainty' },
    زَيَّنَ: { gloss: 'to make appear pleasing' },
    صَدَّ: { gloss: 'to turn away, bar' },
    خَبْء: { gloss: 'what is hidden' },
    أَعْلَنَ: { gloss: 'to declare openly' },
    تَوَلَّى: { gloss: 'to turn away' },
    رَحْمَٰن: { gloss: 'the Most Merciful' },
    عَلَا: { gloss: 'to be haughty, exalt oneself' },
    أَفْتَى: { gloss: 'to advise, give a ruling' },
    قَاطِع: { gloss: 'one who decides, settles' },
    أُولُو: { gloss: 'possessors of' },
    أَعَزّ: { gloss: 'the most honoured' },
    أَذَلّ: { gloss: 'the most abased' },
    نَاظِر: { gloss: 'one who waits to see' },
    قِبَل: { gloss: 'power, ability to withstand' },
    صَاغِر: { gloss: 'abased, humbled' },
    عِفْرِيت: { gloss: 'a powerful jinn' },
    مَقَام: { gloss: 'a standing-place' },
    طَرْف: { gloss: 'a glance, blink of the eye' },
    مُسْتَقِرّ: { gloss: 'settled, placed' },
    بَلَا: { gloss: 'to test' },
    نَكَّرَ: { gloss: 'to disguise, make unrecognisable' },
    لُجَّة: { gloss: 'a deep pool' },
    مَوْقِف: { gloss: 'a stance, position' },
    عَقِيدَة: { gloss: 'a creed, conviction' },
  },
  paragraphs: [
    {
      en: "Read this appealing, delightful story in the Quran; Allah, exalted is He, says: \"And he took stock of the birds and said: what is with me that I do not see the hoopoe -- or is he among the absent? I will surely punish him severely, or slaughter him, or he must bring me clear authority. He remained not long, then said: I have encompassed what you have not encompassed, and I have come to you from Sabaʾ with certain news. I found a woman ruling them, and she has been given of all things, and she has a great throne. I found her and her people prostrating to the sun instead of Allah, and Satan has made their deeds pleasing to them and turned them from the path, so they are not guided -- so that they do not prostrate to Allah, who brings forth what is hidden in the heavens and earth, and knows what you conceal and what you declare. Allah -- there is no god but He, Lord of the great Throne. He said: we will see whether you have told the truth or are among the liars. Go with this letter of mine and deliver it to them, then turn away from them and see how they respond. She said: O eminent ones, indeed a noble letter has been delivered to me. It is from Sulaymān, and it is: In the name of Allah, the Most Merciful, the Most Compassionate -- that: exalt not yourselves above me, and come to me in submission. She said: O eminent ones, advise me in my matter; I would not decide a matter until you testify (are present with me). They said: we are possessors of strength and possessors of severe might, but the command is yours, so see what you will command. She said: indeed kings, when they enter a city, they ruin it and make the most honoured of its people the most abased -- and thus they do. And indeed I am sending them a gift, and I shall see what the envoys return with. So when it came to Sulaymān, he said: do you provide me with wealth? What Allah has given me is better than what He has given you; rather it is you who exult in your gift. Return to them, for we will surely come to them with troops they cannot withstand, and we will surely expel them from it in disgrace, and they will be humbled. He said: O eminent ones, which of you will bring me her throne before they come to me in submission? A powerful jinn said: I will bring it to you before you rise from your place, and indeed I am strong and trustworthy for it. The one who had knowledge of the Scripture said: I will bring it to you before your glance returns to you. So when he saw it settled before him, he said: this is of my Lord's favour, to test me whether I am grateful or ungrateful. Whoever is grateful is grateful only for himself, and whoever is ungrateful -- indeed my Lord is Self-Sufficient, Generous. He said: disguise for her her throne; we will see whether she is guided or is among those who are not guided. So when she came, it was said: is your throne like this? She said: it is as though it is the same. And we were given knowledge before her, and we were already in submission. And that which she used to worship instead of Allah had kept her back -- indeed she was from a disbelieving people. It was said to her: enter the palace. So when she saw it, she thought it was a deep pool of water, and she uncovered her legs. He said: it is a palace paved smooth with glass. She said: my Lord, indeed I have wronged myself, and I submit with Sulaymān to Allah, Lord of the worlds.\" This is the Prophet of Allah Sulaymān -- you have seen his stances in calling to Allah and to monotheism, and his wisdom, his jurisprudence, and his jealous protectiveness for his religion and his creed.",
      sentences: [
        {
          id: 'qs-v9-c14-001',
          ar: 'وَاقْرَؤُوا هَذِهِ الْقِصَّةَ الشَّائِقَةَ الْمُمْتِعَةَ فِي الْقُرْآنِ،',
          en: 'Read this appealing, delightful story in the Quran;',
          tokens: [
            { surface: 'وَاقْرَؤُوا', lemma: 'قَرَأَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'to read; and read' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْقِصَّةَ', lemma: 'قِصَّة', pos: 'noun', features: 'def.acc', gloss: 'the story' },
            { surface: 'الشَّائِقَةَ', lemma: 'شَائِق', pos: 'adj', features: 'def.acc.f', gloss: 'appealing' },
            { surface: 'الْمُمْتِعَةَ', lemma: 'مُمْتِع', pos: 'adj', features: 'def.acc.f', gloss: 'delightful' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْقُرْآنِ', lemma: 'قُرْآن', pos: 'proper', features: 'def.gen', gloss: 'the Quran' },
          ],
        },
        {
          id: 'qs-v9-c14-002',
          ar: 'يَقُولُ اللَّهُ تَعَالَى:',
          en: 'Allah, exalted is He, says:',
          tokens: [
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; says' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; exalted is He' },
          ],
        },
        {
          id: 'qs-v9-c14-003',
          ar: '﴿وَتَفَقَّدَ الطَّيْرَ فَقَالَ مَا لِيَ لَا أَرَى الْهُدْهُدَ﴾',
          en: '"And he took stock of the birds and said: what is with me that I do not see the hoopoe --',
          tokens: [
            { surface: 'وَتَفَقَّدَ', lemma: 'تَفَقَّدَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ف ق د', gloss: 'to take stock of; and took stock of' },
            { surface: 'الطَّيْرَ', lemma: 'طَيْر', pos: 'noun', features: 'def.acc', gloss: 'the birds' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'part', gloss: 'what' },
            { surface: 'لِيَ', lemma: 'لِ', pos: 'prep', features: 'prep+1s', gloss: 'is with me' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.1s', gloss: 'to see; I see' },
            { surface: 'الْهُدْهُدَ', lemma: 'هُدْهُد', pos: 'noun', features: 'def.acc', gloss: 'the hoopoe' },
          ],
        },
        {
          id: 'qs-v9-c14-004',
          ar: '﴿أَمْ كَانَ مِنَ الْغَائِبِينَ﴾',
          en: 'or is he among the absent?',
          tokens: [
            { surface: 'أَمْ', lemma: 'أَمْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; is' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْغَائِبِينَ', lemma: 'غَائِب', pos: 'noun', features: 'pl.def.gen', root: 'غ ي ب', gloss: 'the absent' },
          ],
        },
        {
          id: 'qs-v9-c14-005',
          ar: '﴿لَأُعَذِّبَنَّهُ عَذَاباً شَدِيداً أَوْ لَأَذْبَحَنَّهُ﴾',
          en: 'I will surely punish him severely, or slaughter him,',
          tokens: [
            { surface: 'لَأُعَذِّبَنَّهُ', lemma: 'عَذَّبَ', pos: 'verb', features: 'impf.1s+3ms', root: 'ع ذ ب', gloss: 'to punish; I will surely punish him' },
            { surface: 'عَذَاباً', lemma: 'عَذَاب', pos: 'noun', features: 'indef.acc', gloss: 'a punishment' },
            { surface: 'شَدِيداً', lemma: 'شَدِيد', pos: 'adj', features: 'indef.acc', gloss: 'severe' },
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'لَأَذْبَحَنَّهُ', lemma: 'ذَبَحَ', pos: 'verb', features: 'impf.1s+3ms', gloss: 'to slaughter; I will surely slaughter him' },
          ],
        },
        {
          id: 'qs-v9-c14-006',
          ar: '﴿أَوْ لَيَأْتِيَنِّي بِسُلْطَانٍ مُبِينٍ﴾',
          en: 'or he must bring me clear authority.',
          tokens: [
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'لَيَأْتِيَنِّي', lemma: 'أَتَى', pos: 'verb', features: 'impf.3ms+1s', gloss: 'to bring; he must bring me' },
            { surface: 'بِسُلْطَانٍ', lemma: 'سُلْطَان', pos: 'noun', features: 'prep+indef.gen', gloss: 'with authority' },
            { surface: 'مُبِينٍ', lemma: 'مُبِين', pos: 'adj', features: 'indef.gen', gloss: 'clear' },
          ],
        },
        {
          id: 'qs-v9-c14-007',
          ar: '﴿فَمَكَثَ غَيْرَ بَعِيدٍ فَقَالَ أَحَطْتُ بِمَا لَمْ تُحِطْ بِهِ﴾',
          en: 'He remained not long, then said: I have encompassed what you have not encompassed,',
          tokens: [
            { surface: 'فَمَكَثَ', lemma: 'مَكَثَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to remain; and remained' },
            { surface: 'غَيْرَ', lemma: 'غَيْر', pos: 'noun', features: 'acc.constr', gloss: 'not' },
            { surface: 'بَعِيدٍ', lemma: 'بَعِيد', pos: 'adj', features: 'indef.gen', gloss: 'long, far' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; then said' },
            { surface: 'أَحَطْتُ', lemma: 'أَحَاطَ', pos: 'verb', features: 'perf.1s', gloss: 'to encompass, learn thoroughly; I have encompassed' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'what' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تُحِطْ', lemma: 'أَحَاطَ', pos: 'verb', features: 'impf.2ms', gloss: 'to encompass; you encompassed' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with it' },
          ],
        },
        {
          id: 'qs-v9-c14-008',
          ar: '﴿وَجِئْتُكَ مِنْ سَبَإٍ بِنَبَإٍ يَقِينٍ﴾',
          en: 'and I have come to you from Sabaʾ with certain news.',
          tokens: [
            { surface: 'وَجِئْتُكَ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.1s+2ms', gloss: 'to come; and I came to you' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'سَبَإٍ', lemma: 'سَبَأ', pos: 'proper', features: 'indef.gen', gloss: 'Sabaʾ' },
            { surface: 'بِنَبَإٍ', lemma: 'نَبَأ', pos: 'noun', features: 'prep+indef.gen', root: 'ن ب أ', gloss: 'with news' },
            { surface: 'يَقِينٍ', lemma: 'يَقِين', pos: 'adj', features: 'indef.gen', gloss: 'certain' },
          ],
        },
        {
          id: 'qs-v9-c14-009',
          ar: '﴿إِنِّي وَجَدْتُ امْرَأَةً تَمْلِكُهُمْ﴾',
          en: 'I found a woman ruling them,',
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'وَجَدْتُ', lemma: 'وَجَدَ', pos: 'verb', features: 'perf.1s', gloss: 'to find; found' },
            { surface: 'امْرَأَةً', lemma: 'مَرْأَة', pos: 'noun', features: 'indef.acc', gloss: 'a woman' },
            { surface: 'تَمْلِكُهُمْ', lemma: 'مَلَكَ', pos: 'verb', features: 'impf.3fs+3mp', gloss: 'to rule; ruling them' },
          ],
        },
        {
          id: 'qs-v9-c14-010',
          ar: '﴿وَأُوتِيَتْ مِنْ كُلِّ شَيْءٍ﴾',
          en: 'and she has been given of all things,',
          tokens: [
            { surface: 'وَأُوتِيَتْ', lemma: 'آتَى', pos: 'verb', features: 'conj+pass+perf.3fs', gloss: 'to give; and she was given' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
          ],
        },
        {
          id: 'qs-v9-c14-011',
          ar: '﴿وَلَهَا عَرْشٌ عَظِيمٌ﴾',
          en: 'and she has a great throne.',
          tokens: [
            { surface: 'وَلَهَا', lemma: 'لِ', pos: 'prep', features: 'conj+prep+3fs', gloss: 'and she has' },
            { surface: 'عَرْشٌ', lemma: 'عَرْش', pos: 'noun', features: 'indef.nom', gloss: 'a throne' },
            { surface: 'عَظِيمٌ', lemma: 'عَظِيم', pos: 'adj', features: 'indef.nom', gloss: 'great' },
          ],
        },
        {
          id: 'qs-v9-c14-012',
          ar: '﴿وَجَدتُّهَا وَقَوْمَهَا يَسْجُدُونَ لِلشَّمْسِ مِنْ دُونِ اللَّهِ﴾',
          en: 'I found her and her people prostrating to the sun instead of Allah,',
          tokens: [
            { surface: 'وَجَدتُّهَا', lemma: 'وَجَدَ', pos: 'verb', features: 'perf.1s+3fs', gloss: 'to find; I found her' },
            { surface: 'وَقَوْمَهَا', lemma: 'قَوْم', pos: 'noun', features: 'conj+acc+3fs', gloss: 'and her people' },
            { surface: 'يَسْجُدُونَ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to prostrate; prostrating' },
            { surface: 'لِلشَّمْسِ', lemma: 'شَمْس', pos: 'noun', features: 'prep+def.gen', gloss: 'to the sun' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'instead' },
            { surface: 'دُونِ', lemma: 'دُونَ', pos: 'prep', features: 'gen', gloss: 'of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v9-c14-013',
          ar: '﴿وَزَيَّنَ لَهُمُ الشَّيْطَانُ أَعْمَالَهُمْ﴾',
          en: 'and Satan has made their deeds pleasing to them',
          tokens: [
            { surface: 'وَزَيَّنَ', lemma: 'زَيَّنَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ز ي ن', gloss: 'to make pleasing; and made pleasing' },
            { surface: 'لَهُمُ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'الشَّيْطَانُ', lemma: 'شَيْطَان', pos: 'noun', features: 'def.nom', gloss: 'Satan' },
            { surface: 'أَعْمَالَهُمْ', lemma: 'عَمَل', pos: 'noun', features: 'pl.acc+3mp', gloss: 'their deeds' },
          ],
        },
        {
          id: 'qs-v9-c14-014',
          ar: '﴿فَصَدَّهُمْ عَنِ السَّبِيلِ فَهُمْ لَا يَهْتَدُونَ﴾',
          en: 'and turned them from the path, so they are not guided --',
          tokens: [
            { surface: 'فَصَدَّهُمْ', lemma: 'صَدَّ', pos: 'verb', features: 'conj+perf.3ms+3mp', root: 'ص د د', gloss: 'to turn away, bar; and turned them away' },
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'السَّبِيلِ', lemma: 'سَبِيل', pos: 'noun', features: 'def.gen', gloss: 'the path' },
            { surface: 'فَهُمْ', lemma: 'هُوَ', pos: 'part', features: 'conj+part.3mp', gloss: 'so they' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَهْتَدُونَ', lemma: 'اِهْتَدَى', pos: 'verb', features: 'impf.3mp', gloss: 'to be guided; are guided' },
          ],
        },
        {
          id: 'qs-v9-c14-015',
          ar: '﴿أَلَّا يَسْجُدُوا لِلَّهِ الَّذِي يُخْرِجُ الْخَبْءَ﴾',
          en: 'so that they do not prostrate to Allah, who brings forth what is hidden',
          tokens: [
            { surface: 'أَلَّا', lemma: 'أَنْ', pos: 'part', features: 'part+neg', gloss: 'so that not' },
            { surface: 'يَسْجُدُوا', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to prostrate; prostrate' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'to Allah' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'يُخْرِجُ', lemma: 'أَخْرَجَ', pos: 'verb', features: 'impf.3ms', gloss: 'to bring forth; brings forth' },
            { surface: 'الْخَبْءَ', lemma: 'خَبْء', pos: 'noun', features: 'def.acc', root: 'خ ب أ', gloss: 'what is hidden' },
          ],
        },
        {
          id: 'qs-v9-c14-016',
          ar: '﴿فِي السَّمَاوَاتِ وَالْأَرْضِ﴾',
          en: 'in the heavens and earth,',
          tokens: [
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'السَّمَاوَاتِ', lemma: 'سَمَاء', pos: 'noun', features: 'pl.def.gen', gloss: 'the heavens' },
            { surface: 'وَالْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'conj+def.gen', gloss: 'and the earth' },
          ],
        },
        {
          id: 'qs-v9-c14-017',
          ar: '﴿وَيَعْلَمُ مَا تُخْفُونَ وَمَا تُعْلِنُونَ﴾',
          en: 'and knows what you conceal and what you declare.',
          tokens: [
            { surface: 'وَيَعْلَمُ', lemma: 'عَلِمَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to know; and knows' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'تُخْفُونَ', lemma: 'أَخْفَى', pos: 'verb', features: 'impf.2mp', gloss: 'to conceal; you conceal' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'rel', features: 'conj+rel', gloss: 'and what' },
            { surface: 'تُعْلِنُونَ', lemma: 'أَعْلَنَ', pos: 'verb', features: 'impf.2mp', root: 'ع ل ن', gloss: 'to declare; you declare' },
          ],
        },
        {
          id: 'qs-v9-c14-018',
          ar: '﴿اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ﴾',
          en: 'Allah -- there is no god but He,',
          tokens: [
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'there is no' },
            { surface: 'إِلَٰهَ', lemma: 'إِلَٰه', pos: 'noun', features: 'indef.acc', gloss: 'god' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'but' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'part', features: 'part', gloss: 'He' },
          ],
        },
        {
          id: 'qs-v9-c14-019',
          ar: '﴿رَبُّ الْعَرْشِ الْعَظِيمِ﴾',
          en: 'Lord of the great Throne.',
          tokens: [
            { surface: 'رَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'constr.nom', gloss: 'Lord of' },
            { surface: 'الْعَرْشِ', lemma: 'عَرْش', pos: 'noun', features: 'def.gen', gloss: 'the Throne' },
            { surface: 'الْعَظِيمِ', lemma: 'عَظِيم', pos: 'adj', features: 'def.gen', gloss: 'the great' },
          ],
        },
        {
          id: 'qs-v9-c14-020',
          ar: '﴿قَالَ سَنَنْظُرُ أَصَدَقْتَ﴾',
          en: 'He said: we will see whether you have told the truth',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'سَنَنْظُرُ', lemma: 'نَظَرَ', pos: 'verb', features: 'part+impf.1p', gloss: 'to see; we will see' },
            { surface: 'أَصَدَقْتَ', lemma: 'صَدَقَ', pos: 'verb', features: 'part+perf.2ms', gloss: 'to tell the truth; have you told the truth' },
          ],
        },
        {
          id: 'qs-v9-c14-021',
          ar: '﴿أَمْ كُنْتَ مِنَ الْكَاذِبِينَ﴾',
          en: 'or are among the liars.',
          tokens: [
            { surface: 'أَمْ', lemma: 'أَمْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'كُنْتَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.2ms', gloss: 'to be; you are' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْكَاذِبِينَ', lemma: 'كَاذِب', pos: 'noun', features: 'pl.def.gen', gloss: 'the liars' },
          ],
        },
        {
          id: 'qs-v9-c14-022',
          ar: '﴿اذْهَبْ بِكِتَابِي هَذَا فَأَلْقِهْ إِلَيْهِمْ﴾',
          en: 'Go with this letter of mine and deliver it to them,',
          tokens: [
            { surface: 'اذْهَبْ', lemma: 'ذَهَبَ', pos: 'verb', features: 'imp.2ms', gloss: 'to go; go' },
            { surface: 'بِكِتَابِي', lemma: 'كِتَاب', pos: 'noun', features: 'prep+gen+1s', gloss: 'with my letter' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem', gloss: 'this' },
            { surface: 'فَأَلْقِهْ', lemma: 'أَلْقَى', pos: 'verb', features: 'conj+imp.2ms+3ms', gloss: 'to deliver, cast; then deliver it' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v9-c14-023',
          ar: '﴿ثُمَّ تَوَلَّ عَنْهُمْ فَانْظُرْ مَاذَا يَرْجِعُونَ﴾',
          en: 'then turn away from them and see how they respond.',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'تَوَلَّ', lemma: 'تَوَلَّى', pos: 'verb', features: 'imp.2ms', root: 'و ل ي', gloss: 'to turn away; turn away' },
            { surface: 'عَنْهُمْ', lemma: 'عَنْ', pos: 'prep', features: 'prep+3mp', gloss: 'from them' },
            { surface: 'فَانْظُرْ', lemma: 'نَظَرَ', pos: 'verb', features: 'conj+imp.2ms', gloss: 'to see; and see' },
            { surface: 'مَاذَا', lemma: 'مَاذَا', pos: 'part', features: 'part', gloss: 'how, what' },
            { surface: 'يَرْجِعُونَ', lemma: 'رَجَعَ', pos: 'verb', features: 'impf.3mp', gloss: 'to respond, return; they respond' },
          ],
        },
        {
          id: 'qs-v9-c14-024',
          ar: '﴿قَالَتْ يَا أَيُّهَا الْمَلَأُ﴾',
          en: 'She said: O eminent ones,',
          tokens: [
            { surface: 'قَالَتْ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3fs', gloss: 'to say; said' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'أَيُّهَا', lemma: 'أَيُّهَا', pos: 'part', features: 'part', gloss: 'you' },
            { surface: 'الْمَلَأُ', lemma: 'مَلَأ', pos: 'noun', features: 'def.nom', gloss: 'eminent ones, council' },
          ],
        },
        {
          id: 'qs-v9-c14-025',
          ar: '﴿إِنِّي أُلْقِيَ إِلَيَّ كِتَابٌ كَرِيمٌ﴾',
          en: 'indeed a noble letter has been delivered to me.',
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed to me' },
            { surface: 'أُلْقِيَ', lemma: 'أَلْقَى', pos: 'verb', features: 'pass+perf.3ms', gloss: 'to deliver, cast; has been delivered' },
            { surface: 'إِلَيَّ', lemma: 'إِلَى', pos: 'prep', features: 'prep+1s', gloss: 'to me' },
            { surface: 'كِتَابٌ', lemma: 'كِتَاب', pos: 'noun', features: 'indef.nom', gloss: 'a letter' },
            { surface: 'كَرِيمٌ', lemma: 'كَرِيم', pos: 'adj', features: 'indef.nom', gloss: 'noble' },
          ],
        },
        {
          id: 'qs-v9-c14-026',
          ar: '﴿إِنَّهُ مِنْ سُلَيْمَانَ﴾',
          en: 'It is from Sulaymān,',
          tokens: [
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed it' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'سُلَيْمَانَ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'gen', gloss: 'Sulaymān' },
          ],
        },
        {
          id: 'qs-v9-c14-027',
          ar: '﴿وَإِنَّهُ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ﴾',
          en: 'and it is: In the name of Allah, the Most Merciful, the Most Compassionate --',
          tokens: [
            { surface: 'وَإِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+3ms', gloss: 'and indeed it' },
            { surface: 'بِسْمِ', lemma: 'اسْم', pos: 'noun', features: 'prep+constr.gen', gloss: 'in the name of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'الرَّحْمَٰنِ', lemma: 'رَحْمَٰن', pos: 'adj', features: 'def.gen', gloss: 'the Most Merciful' },
            { surface: 'الرَّحِيمِ', lemma: 'رَحِيم', pos: 'adj', features: 'def.gen', gloss: 'the Most Compassionate' },
          ],
        },
        {
          id: 'qs-v9-c14-028',
          ar: '﴿أَلَّا تَعْلُوا عَلَيَّ وَأْتُونِي مُسْلِمِينَ﴾',
          en: 'that: exalt not yourselves above me, and come to me in submission.',
          tokens: [
            { surface: 'أَلَّا', lemma: 'أَنْ', pos: 'part', features: 'part+neg', gloss: 'that not' },
            { surface: 'تَعْلُوا', lemma: 'عَلَا', pos: 'verb', features: 'impf.2mp', root: 'ع ل و', gloss: 'to be haughty; you exalt yourselves' },
            { surface: 'عَلَيَّ', lemma: 'عَلَى', pos: 'prep', features: 'prep+1s', gloss: 'above me' },
            { surface: 'وَأْتُونِي', lemma: 'أَتَى', pos: 'verb', features: 'conj+imp.2mp+1s', gloss: 'to come; and come to me' },
            { surface: 'مُسْلِمِينَ', lemma: 'مُسْلِم', pos: 'adj', features: 'pl.acc', gloss: 'in submission' },
          ],
        },
        {
          id: 'qs-v9-c14-029',
          ar: '﴿قَالَتْ يَا أَيُّهَا الْمَلَأُ أَفْتُونِي فِي أَمْرِي﴾',
          en: 'She said: O eminent ones, advise me in my matter;',
          tokens: [
            { surface: 'قَالَتْ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3fs', gloss: 'to say; said' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'أَيُّهَا', lemma: 'أَيُّهَا', pos: 'part', features: 'part', gloss: 'you' },
            { surface: 'الْمَلَأُ', lemma: 'مَلَأ', pos: 'noun', features: 'def.nom', gloss: 'eminent ones' },
            { surface: 'أَفْتُونِي', lemma: 'أَفْتَى', pos: 'verb', features: 'imp.2mp+1s', root: 'ف ت ي', gloss: 'to advise, give a ruling; advise me' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أَمْرِي', lemma: 'أَمْر', pos: 'noun', features: 'gen+1s', gloss: 'my matter' },
          ],
        },
        {
          id: 'qs-v9-c14-030',
          ar: '﴿مَا كُنْتُ قَاطِعَةً أَمْراً حَتَّى تَشْهَدُونِ﴾',
          en: 'I would not decide a matter until you testify (are present with me).',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'كُنْتُ', lemma: 'كَانَ', pos: 'verb', features: 'perf.1s', gloss: 'to be; I was' },
            { surface: 'قَاطِعَةً', lemma: 'قَاطِع', pos: 'adj', features: 'indef.acc.f', gloss: 'deciding' },
            { surface: 'أَمْراً', lemma: 'أَمْر', pos: 'noun', features: 'indef.acc', gloss: 'a matter' },
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'part', features: 'part', gloss: 'until' },
            { surface: 'تَشْهَدُونِ', lemma: 'شَهِدَ', pos: 'verb', features: 'impf.2mp', gloss: 'to testify, be present; you testify' },
          ],
        },
        {
          id: 'qs-v9-c14-031',
          ar: '﴿قَالُوا نَحْنُ أُولُو قُوَّةٍ﴾',
          en: 'They said: we are possessors of strength',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; said' },
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'part', features: 'part', gloss: 'we' },
            { surface: 'أُولُو', lemma: 'أُولُو', pos: 'noun', features: 'constr.nom', gloss: 'possessors of' },
            { surface: 'قُوَّةٍ', lemma: 'قُوَّة', pos: 'noun', features: 'indef.gen', gloss: 'strength' },
          ],
        },
        {
          id: 'qs-v9-c14-032',
          ar: '﴿وَأُولُو بَأْسٍ شَدِيدٍ﴾',
          en: 'and possessors of severe might,',
          tokens: [
            { surface: 'وَأُولُو', lemma: 'أُولُو', pos: 'noun', features: 'conj+constr.nom', gloss: 'and possessors of' },
            { surface: 'بَأْسٍ', lemma: 'بَأْس', pos: 'noun', features: 'indef.gen', gloss: 'might' },
            { surface: 'شَدِيدٍ', lemma: 'شَدِيد', pos: 'adj', features: 'indef.gen', gloss: 'severe' },
          ],
        },
        {
          id: 'qs-v9-c14-033',
          ar: '﴿وَالْأَمْرُ إِلَيْكِ فَانْظُرِي مَاذَا تَأْمُرِينَ﴾',
          en: 'but the command is yours, so see what you will command.',
          tokens: [
            { surface: 'وَالْأَمْرُ', lemma: 'أَمْر', pos: 'noun', features: 'conj+def.nom', gloss: 'and the command' },
            { surface: 'إِلَيْكِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+2fs', gloss: 'is yours' },
            { surface: 'فَانْظُرِي', lemma: 'نَظَرَ', pos: 'verb', features: 'conj+imp.2fs', gloss: 'to see; so see' },
            { surface: 'مَاذَا', lemma: 'مَاذَا', pos: 'part', features: 'part', gloss: 'what' },
            { surface: 'تَأْمُرِينَ', lemma: 'أَمَرَ', pos: 'verb', features: 'impf.2fs', gloss: 'to command; you command' },
          ],
        },
        {
          id: 'qs-v9-c14-034',
          ar: '﴿قَالَتْ إِنَّ الْمُلُوكَ إِذَا دَخَلُوا قَرْيَةً أَفْسَدُوهَا﴾',
          en: 'She said: indeed kings, when they enter a city, they ruin it',
          tokens: [
            { surface: 'قَالَتْ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3fs', gloss: 'to say; said' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'الْمُلُوكَ', lemma: 'مَلِك', pos: 'noun', features: 'pl.acc', gloss: 'kings' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'conj', features: 'conj', gloss: 'when' },
            { surface: 'دَخَلُوا', lemma: 'دَخَلَ', pos: 'verb', features: 'perf.3mp', gloss: 'to enter; they enter' },
            { surface: 'قَرْيَةً', lemma: 'قَرْيَة', pos: 'noun', features: 'indef.acc', gloss: 'a city' },
            { surface: 'أَفْسَدُوهَا', lemma: 'أَفْسَدَ', pos: 'verb', features: 'perf.3mp+3fs', gloss: 'to ruin; they ruin it' },
          ],
        },
        {
          id: 'qs-v9-c14-035',
          ar: '﴿وَجَعَلُوا أَعِزَّةَ أَهْلِهَا أَذِلَّةً﴾',
          en: 'and make the most honoured of its people the most abased --',
          tokens: [
            { surface: 'وَجَعَلُوا', lemma: 'جَعَلَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to make; and make' },
            { surface: 'أَعِزَّةَ', lemma: 'أَعَزّ', pos: 'noun', features: 'pl.acc.constr', root: 'ع ز ز', gloss: 'the most honoured of' },
            { surface: 'أَهْلِهَا', lemma: 'أَهْل', pos: 'noun', features: 'gen+3fs', gloss: 'its people' },
            { surface: 'أَذِلَّةً', lemma: 'أَذَلّ', pos: 'noun', features: 'pl.indef.acc', root: 'ذ ل ل', gloss: 'the most abased' },
          ],
        },
        {
          id: 'qs-v9-c14-036',
          ar: '﴿وَكَذَلِكَ يَفْعَلُونَ﴾',
          en: 'and thus they do.',
          tokens: [
            { surface: 'وَكَذَلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'conj+adv', gloss: 'and thus' },
            { surface: 'يَفْعَلُونَ', lemma: 'فَعَلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to do; they do' },
          ],
        },
        {
          id: 'qs-v9-c14-037',
          ar: '﴿وَإِنِّي مُرْسِلَةٌ إِلَيْهِمْ بِهَدِيَّةٍ﴾',
          en: 'And indeed I am sending them a gift,',
          tokens: [
            { surface: 'وَإِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1s', gloss: 'and indeed I' },
            { surface: 'مُرْسِلَةٌ', lemma: 'أَرْسَلَ', pos: 'noun', features: 'indef.nom.f', gloss: 'sending' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'بِهَدِيَّةٍ', lemma: 'هَدِيَّة', pos: 'noun', features: 'prep+indef.gen', gloss: 'with a gift' },
          ],
        },
        {
          id: 'qs-v9-c14-038',
          ar: '﴿فَنَاظِرَةٌ بِمَ يَرْجِعُ الْمُرْسَلُونَ﴾',
          en: 'and I shall see what the envoys return with.',
          tokens: [
            { surface: 'فَنَاظِرَةٌ', lemma: 'نَاظِر', pos: 'noun', features: 'conj+indef.nom.f', root: 'ن ظ ر', gloss: 'seeing, waiting to see' },
            { surface: 'بِمَ', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'with what' },
            { surface: 'يَرْجِعُ', lemma: 'رَجَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to return; return' },
            { surface: 'الْمُرْسَلُونَ', lemma: 'أَرْسَلَ', pos: 'noun', features: 'pl.def.nom', gloss: 'the envoys' },
          ],
        },
        {
          id: 'qs-v9-c14-039',
          ar: '﴿فَلَمَّا جَاءَ سُلَيْمَانَ قَالَ أَتُمِدُّونَنِ بِمَالٍ﴾',
          en: 'So when it came to Sulaymān, he said: do you provide me with wealth?',
          tokens: [
            { surface: 'فَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj', gloss: 'so when' },
            { surface: 'جَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms', gloss: 'to come; it came' },
            { surface: 'سُلَيْمَانَ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'acc', gloss: 'to Sulaymān' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'أَتُمِدُّونَنِ', lemma: 'أَمَدَّ', pos: 'verb', features: 'impf.2mp+1s', gloss: 'to provide, aid; do you provide me' },
            { surface: 'بِمَالٍ', lemma: 'مَال', pos: 'noun', features: 'prep+indef.gen', gloss: 'with wealth' },
          ],
        },
        {
          id: 'qs-v9-c14-040',
          ar: '﴿فَمَا آتَانِيَ اللَّهُ خَيْرٌ مِمَّا آتَاكُمْ﴾',
          en: 'What Allah has given me is better than what He has given you;',
          tokens: [
            { surface: 'فَمَا', lemma: 'مَا', pos: 'rel', features: 'conj+rel', gloss: 'so what' },
            { surface: 'آتَانِيَ', lemma: 'آتَى', pos: 'verb', features: 'perf.3ms+1s', gloss: 'to give; has given me' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'خَيْرٌ', lemma: 'خَيْر', pos: 'noun', features: 'indef.nom', gloss: 'better' },
            { surface: 'مِمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'than what' },
            { surface: 'آتَاكُمْ', lemma: 'آتَى', pos: 'verb', features: 'perf.3ms+2mp', gloss: 'to give; He has given you' },
          ],
        },
        {
          id: 'qs-v9-c14-041',
          ar: '﴿بَلْ أَنتُمْ بِهَدِيَّتِكُمْ تَفْرَحُونَ﴾',
          en: 'rather it is you who exult in your gift.',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'أَنتُمْ', lemma: 'أَنْتَ', pos: 'part', features: 'part.2mp', gloss: 'you' },
            { surface: 'بِهَدِيَّتِكُمْ', lemma: 'هَدِيَّة', pos: 'noun', features: 'prep+gen+2mp', gloss: 'in your gift' },
            { surface: 'تَفْرَحُونَ', lemma: 'فَرِحَ', pos: 'verb', features: 'impf.2mp', gloss: 'to exult; exult' },
          ],
        },
        {
          id: 'qs-v9-c14-042',
          ar: '﴿ارْجِعْ إِلَيْهِمْ فَلَنَأْتِيَنَّهُمْ بِجُنُودٍ لَا قِبَلَ لَهُمْ بِهَا﴾',
          en: 'Return to them, for we will surely come to them with troops they cannot withstand,',
          tokens: [
            { surface: 'ارْجِعْ', lemma: 'رَجَعَ', pos: 'verb', features: 'imp.2ms', gloss: 'to return; return' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'فَلَنَأْتِيَنَّهُمْ', lemma: 'أَتَى', pos: 'verb', features: 'conj+impf.1p+3mp', gloss: 'to come; for we will surely come to them' },
            { surface: 'بِجُنُودٍ', lemma: 'جُنْد', pos: 'noun', features: 'prep+pl.indef.gen', gloss: 'with troops' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'قِبَلَ', lemma: 'قِبَل', pos: 'noun', features: 'indef.acc', gloss: 'power to withstand' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'against it' },
          ],
        },
        {
          id: 'qs-v9-c14-043',
          ar: '﴿وَلَنُخْرِجَنَّهُمْ مِنْهَا أَذِلَّةً وَهُمْ صَاغِرُونَ﴾',
          en: 'and we will surely expel them from it in disgrace, and they will be humbled.',
          tokens: [
            { surface: 'وَلَنُخْرِجَنَّهُمْ', lemma: 'أَخْرَجَ', pos: 'verb', features: 'conj+impf.1p+3mp', gloss: 'to expel; and we will surely expel them' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from it' },
            { surface: 'أَذِلَّةً', lemma: 'أَذَلّ', pos: 'noun', features: 'pl.indef.acc', gloss: 'in disgrace' },
            { surface: 'وَهُمْ', lemma: 'هُوَ', pos: 'part', features: 'conj+part.3mp', gloss: 'and they' },
            { surface: 'صَاغِرُونَ', lemma: 'صَاغِر', pos: 'adj', features: 'pl.nom', root: 'ص غ ر', gloss: 'humbled' },
          ],
        },
        {
          id: 'qs-v9-c14-044',
          ar: '﴿قَالَ يَا أَيُّهَا الْمَلَأُ أَيُّكُمْ يَأْتِينِي بِعَرْشِهَا﴾',
          en: 'He said: O eminent ones, which of you will bring me her throne',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'أَيُّهَا', lemma: 'أَيُّهَا', pos: 'part', features: 'part', gloss: 'you' },
            { surface: 'الْمَلَأُ', lemma: 'مَلَأ', pos: 'noun', features: 'def.nom', gloss: 'eminent ones' },
            { surface: 'أَيُّكُمْ', lemma: 'أَيّ', pos: 'noun', features: 'nom+2mp', gloss: 'which of you' },
            { surface: 'يَأْتِينِي', lemma: 'أَتَى', pos: 'verb', features: 'impf.3ms+1s', gloss: 'to bring; will bring me' },
            { surface: 'بِعَرْشِهَا', lemma: 'عَرْش', pos: 'noun', features: 'prep+gen+3fs', gloss: 'her throne' },
          ],
        },
        {
          id: 'qs-v9-c14-045',
          ar: '﴿قَبْلَ أَنْ يَأْتُونِي مُسْلِمِينَ﴾',
          en: 'before they come to me in submission?',
          tokens: [
            { surface: 'قَبْلَ', lemma: 'قَبْلَ', pos: 'adv', features: 'adv', gloss: 'before' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَأْتُونِي', lemma: 'أَتَى', pos: 'verb', features: 'impf.3mp+1s', gloss: 'to come; they come to me' },
            { surface: 'مُسْلِمِينَ', lemma: 'مُسْلِم', pos: 'adj', features: 'pl.acc', gloss: 'in submission' },
          ],
        },
        {
          id: 'qs-v9-c14-046',
          ar: '﴿قَالَ عِفْرِيتٌ مِنَ الْجِنِّ أَنَا آتِيكَ بِهِ﴾',
          en: 'A powerful jinn said: I will bring it to you',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'عِفْرِيتٌ', lemma: 'عِفْرِيت', pos: 'noun', features: 'indef.nom', gloss: 'a powerful jinn' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْجِنِّ', lemma: 'جِنّ', pos: 'noun', features: 'def.gen', gloss: 'the jinn' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'part', features: 'part', gloss: 'I' },
            { surface: 'آتِيكَ', lemma: 'أَتَى', pos: 'verb', features: 'impf.1s+2ms', gloss: 'to bring; I bring you' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'it' },
          ],
        },
        {
          id: 'qs-v9-c14-047',
          ar: '﴿قَبْلَ أَنْ تَقُومَ مِنْ مَقَامِكَ﴾',
          en: 'before you rise from your place,',
          tokens: [
            { surface: 'قَبْلَ', lemma: 'قَبْلَ', pos: 'adv', features: 'adv', gloss: 'before' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'تَقُومَ', lemma: 'قَامَ', pos: 'verb', features: 'impf.2ms', gloss: 'to rise; you rise' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'مَقَامِكَ', lemma: 'مَقَام', pos: 'noun', features: 'gen+2ms', root: 'ق و م', gloss: 'your place' },
          ],
        },
        {
          id: 'qs-v9-c14-048',
          ar: '﴿وَإِنِّي عَلَيْهِ لَقَوِيٌّ أَمِينٌ﴾',
          en: 'and indeed I am strong and trustworthy for it.',
          tokens: [
            { surface: 'وَإِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1s', gloss: 'and indeed I' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'for it' },
            { surface: 'لَقَوِيٌّ', lemma: 'قَوِيّ', pos: 'adj', features: 'part+indef.nom', gloss: 'surely strong' },
            { surface: 'أَمِينٌ', lemma: 'أَمِين', pos: 'adj', features: 'indef.nom', gloss: 'trustworthy' },
          ],
        },
        {
          id: 'qs-v9-c14-049',
          ar: '﴿قَالَ الَّذِي عِنْدَهُ عِلْمٌ مِنَ الْكِتَابِ﴾',
          en: 'The one who had knowledge of the Scripture said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one who' },
            { surface: 'عِنْدَهُ', lemma: 'عِنْدَ', pos: 'prep', features: 'prep+3ms', gloss: 'had' },
            { surface: 'عِلْمٌ', lemma: 'عِلْم', pos: 'noun', features: 'indef.nom', gloss: 'knowledge' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْكِتَابِ', lemma: 'كِتَاب', pos: 'noun', features: 'def.gen', gloss: 'the Scripture' },
          ],
        },
        {
          id: 'qs-v9-c14-050',
          ar: '﴿أَنَا آتِيكَ بِهِ قَبْلَ أَنْ يَرْتَدَّ إِلَيْكَ طَرْفُكَ﴾',
          en: 'I will bring it to you before your glance returns to you.',
          tokens: [
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'part', features: 'part', gloss: 'I' },
            { surface: 'آتِيكَ', lemma: 'أَتَى', pos: 'verb', features: 'impf.1s+2ms', gloss: 'to bring; I bring you' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'it' },
            { surface: 'قَبْلَ', lemma: 'قَبْلَ', pos: 'adv', features: 'adv', gloss: 'before' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَرْتَدَّ', lemma: 'اِرْتَدَّ', pos: 'verb', features: 'impf.3ms', gloss: 'to return; returns' },
            { surface: 'إِلَيْكَ', lemma: 'إِلَى', pos: 'prep', features: 'prep+2ms', gloss: 'to you' },
            { surface: 'طَرْفُكَ', lemma: 'طَرْف', pos: 'noun', features: 'nom+2ms', root: 'ط ر ف', gloss: 'your glance' },
          ],
        },
        {
          id: 'qs-v9-c14-051',
          ar: '﴿فَلَمَّا رَآهُ مُسْتَقِرّاً عِنْدَهُ قَالَ﴾',
          en: 'So when he saw it settled before him, he said:',
          tokens: [
            { surface: 'فَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj', gloss: 'so when' },
            { surface: 'رَآهُ', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to see; he saw it' },
            { surface: 'مُسْتَقِرّاً', lemma: 'مُسْتَقِرّ', pos: 'adj', features: 'indef.acc', root: 'ق ر ر', gloss: 'settled' },
            { surface: 'عِنْدَهُ', lemma: 'عِنْدَ', pos: 'prep', features: 'prep+3ms', gloss: 'before him' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
          ],
        },
        {
          id: 'qs-v9-c14-052',
          ar: '﴿هَذَا مِنْ فَضْلِ رَبِّي لِيَبْلُوَنِي أَأَشْكُرُ أَمْ أَكْفُرُ﴾',
          en: 'this is of my Lord\'s favour, to test me whether I am grateful or ungrateful.',
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem', gloss: 'this' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'فَضْلِ', lemma: 'فَضْل', pos: 'noun', features: 'constr.gen', gloss: 'the favour of' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'gen+1s', gloss: 'my Lord' },
            { surface: 'لِيَبْلُوَنِي', lemma: 'بَلَا', pos: 'verb', features: 'part+impf.3ms+1s', root: 'ب ل و', gloss: 'to test; to test me' },
            { surface: 'أَأَشْكُرُ', lemma: 'شَكَرَ', pos: 'verb', features: 'part+impf.1s', gloss: 'to be grateful; whether I am grateful' },
            { surface: 'أَمْ', lemma: 'أَمْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'أَكْفُرُ', lemma: 'كَفَرَ', pos: 'verb', features: 'impf.1s', gloss: 'to be ungrateful; am ungrateful' },
          ],
        },
        {
          id: 'qs-v9-c14-053',
          ar: '﴿وَمَنْ شَكَرَ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ﴾',
          en: 'Whoever is grateful is grateful only for himself,',
          tokens: [
            { surface: 'وَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and whoever' },
            { surface: 'شَكَرَ', lemma: 'شَكَرَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be grateful; is grateful' },
            { surface: 'فَإِنَّمَا', lemma: 'إِنَّمَا', pos: 'part', features: 'conj+part', gloss: 'then only' },
            { surface: 'يَشْكُرُ', lemma: 'شَكَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be grateful; is grateful' },
            { surface: 'لِنَفْسِهِ', lemma: 'نَفْس', pos: 'noun', features: 'prep+gen+3ms', gloss: 'for himself' },
          ],
        },
        {
          id: 'qs-v9-c14-054',
          ar: '﴿وَمَنْ كَفَرَ فَإِنَّ رَبِّي غَنِيٌّ كَرِيمٌ﴾',
          en: 'and whoever is ungrateful -- indeed my Lord is Self-Sufficient, Generous.',
          tokens: [
            { surface: 'وَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and whoever' },
            { surface: 'كَفَرَ', lemma: 'كَفَرَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be ungrateful; is ungrateful' },
            { surface: 'فَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'then indeed' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', gloss: 'my Lord' },
            { surface: 'غَنِيٌّ', lemma: 'غَنِيّ', pos: 'adj', features: 'indef.nom', gloss: 'Self-Sufficient' },
            { surface: 'كَرِيمٌ', lemma: 'كَرِيم', pos: 'adj', features: 'indef.nom', gloss: 'Generous' },
          ],
        },
        {
          id: 'qs-v9-c14-055',
          ar: '﴿قَالَ نَكِّرُوا لَهَا عَرْشَهَا نَنْظُرْ أَتَهْتَدِي﴾',
          en: 'He said: disguise for her her throne; we will see whether she is guided',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'نَكِّرُوا', lemma: 'نَكَّرَ', pos: 'verb', features: 'imp.2mp', root: 'ن ك ر', gloss: 'to disguise; disguise' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'for her' },
            { surface: 'عَرْشَهَا', lemma: 'عَرْش', pos: 'noun', features: 'acc+3fs', gloss: 'her throne' },
            { surface: 'نَنْظُرْ', lemma: 'نَظَرَ', pos: 'verb', features: 'impf.1p', gloss: 'to see; we see' },
            { surface: 'أَتَهْتَدِي', lemma: 'اِهْتَدَى', pos: 'verb', features: 'part+impf.3fs', gloss: 'to be guided; whether she is guided' },
          ],
        },
        {
          id: 'qs-v9-c14-056',
          ar: '﴿أَمْ تَكُونُ مِنَ الَّذِينَ لَا يَهْتَدُونَ﴾',
          en: 'or is among those who are not guided.',
          tokens: [
            { surface: 'أَمْ', lemma: 'أَمْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'تَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3fs', gloss: 'to be; is' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'rel.pl', gloss: 'those who' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَهْتَدُونَ', lemma: 'اِهْتَدَى', pos: 'verb', features: 'impf.3mp', gloss: 'to be guided; are guided' },
          ],
        },
        {
          id: 'qs-v9-c14-057',
          ar: '﴿فَلَمَّا جَاءَتْ قِيلَ أَهَكَذَا عَرْشُكِ﴾',
          en: 'So when she came, it was said: is your throne like this?',
          tokens: [
            { surface: 'فَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj', gloss: 'so when' },
            { surface: 'جَاءَتْ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3fs', gloss: 'to come; she came' },
            { surface: 'قِيلَ', lemma: 'قَالَ', pos: 'verb', features: 'pass+perf.3ms', gloss: 'to say; it was said' },
            { surface: 'أَهَكَذَا', lemma: 'هَكَذَا', pos: 'adv', features: 'part+adv', gloss: 'is (it) like this' },
            { surface: 'عَرْشُكِ', lemma: 'عَرْش', pos: 'noun', features: 'nom+2fs', gloss: 'your throne' },
          ],
        },
        {
          id: 'qs-v9-c14-058',
          ar: '﴿قَالَتْ كَأَنَّهُ هُوَ﴾',
          en: 'She said: it is as though it is the same.',
          tokens: [
            { surface: 'قَالَتْ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3fs', gloss: 'to say; said' },
            { surface: 'كَأَنَّهُ', lemma: 'كَأَنَّ', pos: 'part', features: 'part+3ms', gloss: 'as though it' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'part', features: 'part', gloss: 'is (the same)' },
          ],
        },
        {
          id: 'qs-v9-c14-059',
          ar: '﴿وَأُوتِينَا الْعِلْمَ مِنْ قَبْلِهَا وَكُنَّا مُسْلِمِينَ﴾',
          en: 'And we were given knowledge before her, and we were already in submission.',
          tokens: [
            { surface: 'وَأُوتِينَا', lemma: 'آتَى', pos: 'verb', features: 'conj+pass+perf.1p', gloss: 'to give; and we were given' },
            { surface: 'الْعِلْمَ', lemma: 'عِلْم', pos: 'noun', features: 'def.acc', gloss: 'the knowledge' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَبْلِهَا', lemma: 'قَبْلَ', pos: 'noun', features: 'gen+3fs', gloss: 'before her' },
            { surface: 'وَكُنَّا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.1p', gloss: 'to be; and we were' },
            { surface: 'مُسْلِمِينَ', lemma: 'مُسْلِم', pos: 'adj', features: 'pl.acc', gloss: 'in submission' },
          ],
        },
        {
          id: 'qs-v9-c14-060',
          ar: '﴿وَصَدَّهَا مَا كَانَتْ تَعْبُدُ مِنْ دُونِ اللَّهِ﴾',
          en: 'And that which she used to worship instead of Allah had kept her back --',
          tokens: [
            { surface: 'وَصَدَّهَا', lemma: 'صَدَّ', pos: 'verb', features: 'conj+perf.3ms+3fs', gloss: 'to keep back; and kept her back' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'that which' },
            { surface: 'كَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be; she used to' },
            { surface: 'تَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3fs', gloss: 'to worship; worship' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'instead' },
            { surface: 'دُونِ', lemma: 'دُونَ', pos: 'prep', features: 'gen', gloss: 'of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v9-c14-061',
          ar: '﴿إِنَّهَا كَانَتْ مِنْ قَوْمٍ كَافِرِينَ﴾',
          en: 'indeed she was from a disbelieving people.',
          tokens: [
            { surface: 'إِنَّهَا', lemma: 'إِنَّ', pos: 'part', features: 'part+3fs', gloss: 'indeed she' },
            { surface: 'كَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be; was' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَوْمٍ', lemma: 'قَوْم', pos: 'noun', features: 'indef.gen', gloss: 'a people' },
            { surface: 'كَافِرِينَ', lemma: 'كَافِر', pos: 'adj', features: 'pl.indef.gen', gloss: 'disbelieving' },
          ],
        },
        {
          id: 'qs-v9-c14-062',
          ar: '﴿قِيلَ لَهَا ادْخُلِي الصَّرْحَ﴾',
          en: 'It was said to her: enter the palace.',
          tokens: [
            { surface: 'قِيلَ', lemma: 'قَالَ', pos: 'verb', features: 'pass+perf.3ms', gloss: 'to say; it was said' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'to her' },
            { surface: 'ادْخُلِي', lemma: 'دَخَلَ', pos: 'verb', features: 'imp.2fs', gloss: 'to enter; enter' },
            { surface: 'الصَّرْحَ', lemma: 'صَرْح', pos: 'noun', features: 'def.acc', gloss: 'the palace' },
          ],
        },
        {
          id: 'qs-v9-c14-063',
          ar: '﴿فَلَمَّا رَأَتْهُ حَسِبَتْهُ لُجَّةً﴾',
          en: 'So when she saw it, she thought it was a deep pool of water,',
          tokens: [
            { surface: 'فَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj', gloss: 'so when' },
            { surface: 'رَأَتْهُ', lemma: 'رَأَى', pos: 'verb', features: 'perf.3fs+3ms', gloss: 'to see; she saw it' },
            { surface: 'حَسِبَتْهُ', lemma: 'حَسِبَ', pos: 'verb', features: 'perf.3fs+3ms', gloss: 'to think; she thought it' },
            { surface: 'لُجَّةً', lemma: 'لُجَّة', pos: 'noun', features: 'indef.acc', root: 'ل ج ج', gloss: 'a deep pool' },
          ],
        },
        {
          id: 'qs-v9-c14-064',
          ar: '﴿وَكَشَفَتْ عَنْ سَاقَيْهَا﴾',
          en: 'and she uncovered her legs.',
          tokens: [
            { surface: 'وَكَشَفَتْ', lemma: 'كَشَفَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to uncover; and uncovered' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'سَاقَيْهَا', lemma: 'سَاق', pos: 'noun', features: 'du.gen+3fs', gloss: 'her legs' },
          ],
        },
        {
          id: 'qs-v9-c14-065',
          ar: '﴿قَالَ إِنَّهُ صَرْحٌ مُمَرَّدٌ مِنْ قَوَارِيرَ﴾',
          en: 'He said: it is a palace paved smooth with glass.',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed it' },
            { surface: 'صَرْحٌ', lemma: 'صَرْح', pos: 'noun', features: 'indef.nom', gloss: 'a lofty palace' },
            { surface: 'مُمَرَّدٌ', lemma: 'مُمَرَّد', pos: 'adj', features: 'indef.nom', gloss: 'smoothed, paved' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'قَوَارِيرَ', lemma: 'قَارُورَة', pos: 'noun', features: 'pl.indef.gen', gloss: 'glass' },
          ],
        },
        {
          id: 'qs-v9-c14-066',
          ar: '﴿قَالَتْ رَبِّ إِنِّي ظَلَمْتُ نَفْسِي﴾',
          en: 'She said: my Lord, indeed I have wronged myself,',
          tokens: [
            { surface: 'قَالَتْ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3fs', gloss: 'to say; said' },
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', gloss: 'my Lord' },
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'ظَلَمْتُ', lemma: 'ظَلَمَ', pos: 'verb', features: 'perf.1s', gloss: 'to wrong; I have wronged' },
            { surface: 'نَفْسِي', lemma: 'نَفْس', pos: 'noun', features: 'acc+1s', gloss: 'myself' },
          ],
        },
        {
          id: 'qs-v9-c14-067',
          ar: '﴿وَأَسْلَمْتُ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ﴾.',
          en: 'and I submit with Sulaymān to Allah, Lord of the worlds."',
          tokens: [
            { surface: 'وَأَسْلَمْتُ', lemma: 'أَسْلَمَ', pos: 'verb', features: 'conj+perf.1s', gloss: 'to submit; and I submit' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'سُلَيْمَانَ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'gen', gloss: 'Sulaymān' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'to Allah' },
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'constr.gen', gloss: 'Lord of' },
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'pl.def.gen', gloss: 'the worlds' },
          ],
        },
        {
          id: 'qs-v9-c14-068',
          ar: 'وَهَذَا نَبِيُّ اللَّهِ سُلَيْمَانُ',
          en: 'This is the Prophet of Allah Sulaymān --',
          tokens: [
            { surface: 'وَهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'conj+dem', gloss: 'and this' },
            { surface: 'نَبِيُّ', lemma: 'نَبِيّ', pos: 'noun', features: 'constr.nom', gloss: 'the Prophet of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'سُلَيْمَانُ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'nom', gloss: 'Sulaymān' },
          ],
        },
        {
          id: 'qs-v9-c14-069',
          ar: 'وَقَدْ رَأَيْتُمْ مَوَاقِفَهُ فِي الدَّعْوَةِ إِلَى اللَّهِ وَإِلَى التَّوْحِيدِ،',
          en: 'you have seen his stances in calling to Allah and to monotheism,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'رَأَيْتُمْ', lemma: 'رَأَى', pos: 'verb', features: 'perf.2mp', gloss: 'to see; you have seen' },
            { surface: 'مَوَاقِفَهُ', lemma: 'مَوْقِف', pos: 'noun', features: 'pl.acc+3ms', root: 'و ق ف', gloss: 'his stances' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الدَّعْوَةِ', lemma: 'دَعْوَة', pos: 'noun', features: 'def.gen', gloss: 'the call' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَإِلَى', lemma: 'إِلَى', pos: 'prep', features: 'conj+prep', gloss: 'and to' },
            { surface: 'التَّوْحِيدِ', lemma: 'تَوْحِيد', pos: 'noun', features: 'def.gen', gloss: 'monotheism' },
          ],
        },
        {
          id: 'qs-v9-c14-070',
          ar: 'وَحِكْمَتِهِ وَفِقْهِهِ وَغَيْرَتِهِ عَلَى دِينِهِ وَعَقِيدَتِهِ.',
          en: 'and his wisdom, his jurisprudence, and his jealous protectiveness for his religion and his creed.',
          tokens: [
            { surface: 'وَحِكْمَتِهِ', lemma: 'حِكْمَة', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his wisdom' },
            { surface: 'وَفِقْهِهِ', lemma: 'فِقْه', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his jurisprudence' },
            { surface: 'وَغَيْرَتِهِ', lemma: 'غَيْرَة', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his jealous protectiveness' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'دِينِهِ', lemma: 'دِين', pos: 'noun', features: 'gen+3ms', gloss: 'his religion' },
            { surface: 'وَعَقِيدَتِهِ', lemma: 'عَقِيدَة', pos: 'noun', features: 'conj+gen+3ms', root: 'ع ق د', gloss: 'and his creed' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا غَضِبَ سُلَيْمَانُ عَلَى الْهُدْهُدِ فِي بِدَايَةِ الْقِصَّةِ؟',
          options: ['لِأَنَّهُ لَمْ يَجِدْهُ بَيْنَ الطَّيْرِ وَتَوَعَّدَهُ بِالْعَذَابِ', 'لِأَنَّهُ أَكَلَ طَعَامَهُ', 'لِأَنَّهُ آذَى طَيْراً آخَرَ'],
          answer: 0,
          qEn: "Why was Sulaymān angry at the hoopoe at the start of the story?",
          optionsEn: ["Because he did not find him among the birds and threatened him with punishment", "Because he ate his food", "Because he harmed another bird"],
        },
        {
          q: 'مَاذَا فَعَلَ الْعِفْريتُ وَالَّذِي عِنْدَهُ عِلْمٌ مِنَ الْكِتَابِ؟',
          options: ['عَرَضَا إِحْضَارَ عَرْشِ الْمَلِكَةِ، وَفَعَلَهُ صَاحِبُ الْعِلْمِ فِي لَحْظَةٍ', 'رَفَضَا مُسَاعَدَةَ سُلَيْمَانَ', 'حَارَبَا سُلَيْمَانَ'],
          answer: 0,
          qEn: "What did the powerful jinn and the one with knowledge of the Scripture do?",
          optionsEn: ["They offered to bring the queen's throne, and the one with knowledge did it in an instant", "They refused to help Sulaymān", "They fought against Sulaymān"],
        },
        {
          q: 'بِمَاذَا خَتَمَتِ الْمَلِكَةُ اعْتِرَافَهَا حِينَ دَخَلَتِ الصَّرْحَ؟',
          options: ['رَبِّ إِنِّي ظَلَمْتُ نَفْسِي وَأَسْلَمْتُ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ', 'بِطَلَبِ الْمُغَادَرَةِ فَوْراً', 'بِإِنْكَارِ مَا رَأَتْهُ'],
          answer: 0,
          qEn: 'How did the queen conclude her admission when she entered the palace?',
          optionsEn: ['"My Lord, indeed I have wronged myself, and I submit with Sulaymān to Allah, Lord of the worlds"', 'By demanding to leave immediately', 'By denying what she saw'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'قَالَ سُلَيْمَانُ: مَا لِيَ لَا',
        post: 'الْهُدْهُدَ.',
        en: 'Sulaymān said: what is with me that I do not see the hoopoe.',
        options: ['أَرَى', 'رَأَى', 'تَرَى', 'نَرَى'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches the speaker Sulaymān referring to himself, matching the printed لَا أَرَى.',
          'Perfect -- wrong tense; the sentence describes a present state, not a completed action.',
          '2nd/3rd feminine singular -- wrong person; the speaker refers to himself, "I."',
          '1st plural -- wrong number; Sulaymān speaks for himself alone here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَتِ الْمَلِكَةُ: إِنَّ الْمُلُوكَ إِذَا',
        post: 'قَرْيَةً أَفْسَدُوهَا.',
        en: 'The queen said: indeed kings, when they enter a city, they ruin it.',
        options: ['دَخَلُوا', 'دَخَلَ', 'يَدْخُلُونَ', 'دَخَلَتْ'],
        answer: 0,
        rationales: [
          '3rd masculine plural perfect, after إِذَا -- matches الْمُلُوكَ (plural), matching the printed إِذَا دَخَلُوا.',
          'Singular -- wrong number; الْمُلُوكَ (kings) is plural.',
          'Imperfect -- wrong tense; إِذَا with a following perfect describes a general recurring case, matching the printed perfect.',
          'Feminine singular -- wrong gender and number.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ الَّذِي عِنْدَهُ عِلْمٌ مِنَ الْكِتَابِ: أَنَا',
        post: 'بِهِ قَبْلَ أَنْ يَرْتَدَّ إِلَيْكَ طَرْفُكَ.',
        en: 'The one who had knowledge of the Scripture said: I will bring it to you before your glance returns to you.',
        options: ['آتِيكَ', 'أَتَيْتُكَ', 'تَأْتِينِي', 'يَأْتِيكَ'],
        answer: 0,
        rationales: [
          '1st singular imperfect + 2nd person object -- "I bring you," matching the printed آتِيكَ, spoken by the one with knowledge.',
          'Perfect -- wrong tense; he is promising a coming action, not reporting one already done.',
          'Wrong direction ("you bring me") -- reverses subject and object.',
          '3rd masculine singular -- wrong person; the speaker refers to himself, "I."',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'أَشْكُرُ رَبِّي عَلَى نِعْمَتِهِ',
        pre: '',
        post: 'رَبِّي عَلَى نِعْمَتِهِ',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['يَشْكُرُ', 'أَشْكُرُ', 'تَشْكُرُ', 'نَشْكُرُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches هُوَ.',
          '1st singular -- the base form, not shifted to "he."',
          '2nd masculine singular -- wrong person; the target is "he," not "you."',
          '1st plural -- wrong person; the target is "he," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'تَدْخُلُ الْمَلِكَةُ الصَّرْحَ',
        pre: '',
        post: 'الصَّرْحَ',
        targetPerson: 'أَنتُمْ',
        targetEn: 'you (pl.)',
        options: ['تَدْخُلُونَ', 'تَدْخُلُ', 'أَدْخُلُ', 'نَدْخُلُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches أَنتُمْ.',
          '3rd feminine singular -- the base form, not shifted to "you (pl.)."',
          '1st singular -- wrong person; the target is "you," not "I."',
          '1st plural -- wrong person; the target is "you," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَرْجِعُ الرَّسُولُ بِخَبَرٍ',
        pre: '',
        post: 'بِخَبَرٍ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَرْجِعُ', 'يَرْجِعُ', 'تَرْجِعُ', 'أَرْجِعُ'],
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

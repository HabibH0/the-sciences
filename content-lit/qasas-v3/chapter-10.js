// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 10 -- بَشَرٌ أَمْ
// مَلَكٌ. Printed pages 69 (bottom, right after ch9's closing line and the
// heading) through 70 (top, ending before ch11's heading نُوحٌ الرَّسُولُ
// partway down the same page). Transcribed by hand from the scan (vision
// OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// The theological reasoning of ch9 continues into a concrete dialogue:
// Allah wills His messenger to be human, not an angel, precisely so people
// can't excuse themselves. If the messenger were an angel, people would
// object that an angel doesn't eat, drink, thirst, hunger, sicken, or die
// like they do, so of course an angel can worship constantly -- but they
// can't. Because the messenger is human -- eating, drinking, thirsting,
// sickening, and dying exactly as they do, and still worshiping Allah
// constantly -- their excuse is cut off entirely. This closes the setup;
// ch11 finally names the messenger: Nūḥ.
//
// Grammar / lexical notes:
//   -- مَلَك ("angel") is already taught (qasas-v2 ch8) and kept carefully
//      distinct from the unrelated مَلِك ("king," qasas-v1 ch10/12) --
//      same consonant skeleton in unvowelled text, different words.
//   -- وَلِيَ (qs-v3-c10-008) is لِ + 1st-singular pronoun with a fatha
//      (rather than the more common sukun of لِي) -- a genuine printed
//      variant when لِ- fronts an indefinite predicate ("I have a...");
//      tagged the same as لِي (lemma لِ, features prep+1s) since it's the
//      same morpheme.
//   -- The long printed sentences are split at internal commas/quote
//      boundaries into many short sentence entries, continuing ch9's
//      practice, both for buildability and because the passage's parallel
//      call-and-response structure reads naturally in short beats.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): أَرَادَ، اللَّه، أَنْ، كَانَ،
//      هَذَا، الرَّسُول، بَشَر، وَاحِد، مِنْ، النَّاس، عَرَفَ، فَهِمَ، كَلَام، إِذَا، مَلَك،
//      قَالَ، مَا، لِ، هُوَ، نَحْنُ، أَكَلَ، شَرِبَ، أَهْل، ذُرِّيَّة، كَيْفَ، عَبَدَ، لِمَ،
//      عَطِشَ، جَاعَ، مَرِضَ، مَاتَ، ذَكَرَ، دَائِمًا، مِثْل، وَجَدَ
//      are all already taught and are NOT re-listed in newWords here.
//
// 2 new words (اِنْقَطَعَ، عُذْر).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch10',
  title: { ar: 'بَشَرٌ أَمْ مَلَكٌ', en: 'A Human or an Angel?' },
  newWords: ['اِنْقَطَعَ', 'عُذْر'],
  lemmas: {
    اِنْقَطَعَ: { gloss: 'to be cut off' },
    عُذْر: { gloss: 'excuse' },
  },
  paragraphs: [
    {
      en: 'Allah wanted this messenger to be a human being, and to be one of the people, whom the people would know and understand his speech. If the messenger were an angel, the people would say: "What do we have to do with him? He is an angel and we are humans!" We eat and drink, and we have family and offspring, so how could we worship Allah? And if the messenger were human, he would say: "I eat and drink, and I have family and offspring, and I worship Allah, so why don\'t you worship Allah?" And if the messenger were an angel, the people would say: "You do not thirst or hunger, and you do not get sick or die,',
      sentences: [
        {
          id: 'qs-v3-c10-001',
          ar: 'وَأَرَادَ اللَّهُ أَنْ يَكُونَ هَذَا الرَّسُولُ بَشَرًا،',
          en: 'Allah wanted this messenger to be a human being,',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want; and wanted' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; be' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الرَّسُولُ', lemma: 'رَسُول', pos: 'noun', features: 'def.nom', gloss: 'the messenger' },
            { surface: 'بَشَرًا', lemma: 'بَشَر', pos: 'noun', features: 'indef.acc', gloss: 'a human being' },
          ],
        },
        {
          id: 'qs-v3-c10-002',
          ar: 'وَأَنْ يَكُونَ وَاحِدًا مِنَ النَّاسِ،',
          en: 'and to be one of the people,',
          tokens: [
            { surface: 'وَأَنْ', lemma: 'أَنْ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'يَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; be' },
            { surface: 'وَاحِدًا', lemma: 'وَاحِد', pos: 'adj', features: 'indef.acc', gloss: 'one' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v3-c10-003',
          ar: 'يَعْرِفُهُ النَّاسُ وَيَفْهَمُونَ كَلَامَهُ.',
          en: 'whom the people would know and understand his speech.',
          tokens: [
            { surface: 'يَعْرِفُهُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to know; they know him' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'وَيَفْهَمُونَ', lemma: 'فَهِمَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to understand; and they understand' },
            { surface: 'كَلَامَهُ', lemma: 'كَلَام', pos: 'noun', features: 'acc+3ms', root: 'ك ل م', gloss: 'his speech' },
          ],
        },
        {
          id: 'qs-v3-c10-004',
          ar: 'وَإِذَا كَانَ الرَّسُولُ مَلَكًا قَالَ النَّاسُ:',
          en: 'If the messenger were an angel, the people would say:',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'and if' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'الرَّسُولُ', lemma: 'رَسُول', pos: 'noun', features: 'def.nom', gloss: 'the messenger' },
            { surface: 'مَلَكًا', lemma: 'مَلَك', pos: 'noun', features: 'indef.acc', gloss: 'an angel' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; would say' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v3-c10-005',
          ar: 'مَا لَنَا وَلَهُ؟ هُوَ مَلَكٌ وَنَحْنُ بَشَرٌ!',
          en: '"What do we have to do with him? He is an angel and we are humans!"',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: '[is] for us' },
            { surface: 'وَلَهُ', lemma: 'لِ', pos: 'prep', features: 'conj+prep+3ms', gloss: 'and for him' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'part', features: 'part', gloss: 'he' },
            { surface: 'مَلَكٌ', lemma: 'مَلَك', pos: 'noun', features: 'indef.nom', gloss: 'an angel' },
            { surface: 'وَنَحْنُ', lemma: 'نَحْنُ', pos: 'part', features: 'conj+part', gloss: 'and we' },
            { surface: 'بَشَرٌ', lemma: 'بَشَر', pos: 'noun', features: 'indef.nom', gloss: 'humans' },
          ],
        },
        {
          id: 'qs-v3-c10-006',
          ar: 'نَحْنُ نَأْكُلُ وَنَشْرَبُ وَلَنَا أَهْلٌ وَذُرِّيَّةٌ',
          en: 'We eat and drink, and we have family and offspring,',
          tokens: [
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'part', features: 'part', gloss: 'we' },
            { surface: 'نَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.1p', gloss: 'to eat; we eat' },
            { surface: 'وَنَشْرَبُ', lemma: 'شَرِبَ', pos: 'verb', features: 'conj+impf.1p', gloss: 'to drink; and we drink' },
            { surface: 'وَلَنَا', lemma: 'لِ', pos: 'prep', features: 'conj+prep+1p', gloss: 'and we have' },
            { surface: 'أَهْلٌ', lemma: 'أَهْل', pos: 'noun', features: 'indef.nom', gloss: 'family' },
            { surface: 'وَذُرِّيَّةٌ', lemma: 'ذُرِّيَّة', pos: 'noun', features: 'conj+indef.nom', gloss: 'and offspring' },
          ],
        },
        {
          id: 'qs-v3-c10-007',
          ar: 'فَكَيْفَ نَعْبُدُ اللَّهَ؟',
          en: 'so how could we worship Allah?',
          tokens: [
            { surface: 'فَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'so how' },
            { surface: 'نَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.1p', gloss: 'to worship; could we worship' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v3-c10-008',
          ar: 'وَإِذَا كَانَ الرَّسُولُ بَشَرًا قَالَ: أَنَا آكُلُ وَأَشْرَبُ وَلِيَ أَهْلٌ وَذُرِّيَّةٌ',
          en: 'And if the messenger were human, he would say: "I eat and drink, and I have family and offspring,',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'and if' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'الرَّسُولُ', lemma: 'رَسُول', pos: 'noun', features: 'def.nom', gloss: 'the messenger' },
            { surface: 'بَشَرًا', lemma: 'بَشَر', pos: 'noun', features: 'indef.acc', gloss: 'a human being' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; would say' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'part', features: 'part', gloss: 'I' },
            { surface: 'آكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.1s', gloss: 'to eat; I eat' },
            { surface: 'وَأَشْرَبُ', lemma: 'شَرِبَ', pos: 'verb', features: 'conj+impf.1s', gloss: 'to drink; and I drink' },
            { surface: 'وَلِيَ', lemma: 'لِ', pos: 'prep', features: 'conj+prep+1s', gloss: 'and I have' },
            { surface: 'أَهْلٌ', lemma: 'أَهْل', pos: 'noun', features: 'indef.nom', gloss: 'family' },
            { surface: 'وَذُرِّيَّةٌ', lemma: 'ذُرِّيَّة', pos: 'noun', features: 'conj+indef.nom', gloss: 'and offspring' },
          ],
        },
        {
          id: 'qs-v3-c10-009',
          ar: 'وَأَنَا أَعْبُدُ اللَّهَ فَلِمَ لَا تَعْبُدُونَ اللَّهَ؟',
          en: 'and I worship Allah, so why don\'t you worship Allah?"',
          tokens: [
            { surface: 'وَأَنَا', lemma: 'أَنَا', pos: 'part', features: 'conj+part', gloss: 'and I' },
            { surface: 'أَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.1s', gloss: 'to worship; I worship' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'فَلِمَ', lemma: 'لِمَ', pos: 'adv', features: 'conj+adv', gloss: 'so why' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.2mp', gloss: 'to worship; do you worship' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v3-c10-010',
          ar: 'وَإِذَا كَانَ الرَّسُولُ مَلَكًا قَالَ النَّاسُ:',
          en: 'And if the messenger were an angel, the people would say:',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'and if' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'الرَّسُولُ', lemma: 'رَسُول', pos: 'noun', features: 'def.nom', gloss: 'the messenger' },
            { surface: 'مَلَكًا', lemma: 'مَلَك', pos: 'noun', features: 'indef.acc', gloss: 'an angel' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; would say' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v3-c10-011',
          ar: 'إِنَّكَ لَا تَعْطَشُ وَلَا تَجُوعُ،',
          en: '"You do not thirst or hunger,',
          tokens: [
            { surface: 'إِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'part+2ms', gloss: 'indeed you' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَعْطَشُ', lemma: 'عَطِشَ', pos: 'verb', features: 'impf.2ms', gloss: 'to thirst; you thirst' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَجُوعُ', lemma: 'جَاعَ', pos: 'verb', features: 'impf.2ms', gloss: 'to hunger; you hunger' },
          ],
        },
        {
          id: 'qs-v3-c10-012',
          ar: 'وَإِنَّكَ لَا تَمْرَضُ وَلَا تَمُوتُ',
          en: 'and you do not get sick or die,',
          tokens: [
            { surface: 'وَإِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+2ms', gloss: 'and indeed you' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَمْرَضُ', lemma: 'مَرِضَ', pos: 'verb', features: 'impf.2ms', gloss: 'to be sick; you get sick' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَمُوتُ', lemma: 'مَاتَ', pos: 'verb', features: 'impf.2ms', root: 'م و ت', gloss: 'to die; you die' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا أَرَادَ اللَّهُ أَنْ يَكُونَ الرَّسُولُ بَشَرًا لَا مَلَكًا؟',
          options: [
            'لِيَكُونَ وَاحِدًا مِنَ النَّاسِ يَعْرِفُهُ النَّاسُ وَيَفْهَمُونَ كَلَامَهُ، وَلِيَنْقَطِعَ عُذْرُهُمْ',
            'لِأَنَّ الْمَلَائِكَةَ لَا تَقْدِرُ عَلَى الْكَلَامِ',
            'لِأَنَّ النَّاسَ يَخَافُونَ مِنَ الْمَلَائِكَةِ',
          ],
          answer: 0,
          qEn: "Why did Allah want the messenger to be human, not an angel?",
          optionsEn: [
            "To be one of the people, known to them and understood by them, and so their excuse would be cut off entirely",
            'Because angels cannot speak',
            'Because people are afraid of angels',
          ],
        },
      ],
    },
    {
      en: 'so of course you worship Allah and remember Him always!" But we are humans -- we thirst and hunger, get sick and die, so how could we worship Allah and remember Him always? And if the messenger were human, he would say: "Like you, I thirst and hunger, get sick and die, and I worship Allah and remember Him, so why don\'t you worship Allah and remember Him?" So the people\'s argument is cut off, and they find no excuse.',
      sentences: [
        {
          id: 'qs-v3-c10-013',
          ar: 'فَتَعْبُدُ اللَّهَ وَتَذْكُرُهُ دَائِمًا!',
          en: 'so of course you worship Allah and remember Him always!"',
          tokens: [
            { surface: 'فَتَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'conj+impf.2ms', gloss: 'to worship; so you worship' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَتَذْكُرُهُ', lemma: 'ذَكَرَ', pos: 'verb', features: 'conj+impf.2ms+3ms', root: 'ذ ك ر', gloss: 'to remember; and remember Him' },
            { surface: 'دَائِمًا', lemma: 'دَائِمًا', pos: 'adv', features: 'adv', gloss: 'always' },
          ],
        },
        {
          id: 'qs-v3-c10-014',
          ar: 'وَنَحْنُ بَشَرٌ نَعْطَشُ وَنَجُوعُ، وَنَمْرَضُ وَنَمُوتُ،',
          en: 'But we are humans -- we thirst and hunger, get sick and die,',
          tokens: [
            { surface: 'وَنَحْنُ', lemma: 'نَحْنُ', pos: 'part', features: 'conj+part', gloss: 'but we' },
            { surface: 'بَشَرٌ', lemma: 'بَشَر', pos: 'noun', features: 'indef.nom', gloss: 'humans' },
            { surface: 'نَعْطَشُ', lemma: 'عَطِشَ', pos: 'verb', features: 'impf.1p', gloss: 'to thirst; we thirst' },
            { surface: 'وَنَجُوعُ', lemma: 'جَاعَ', pos: 'verb', features: 'conj+impf.1p', gloss: 'to hunger; and we hunger' },
            { surface: 'وَنَمْرَضُ', lemma: 'مَرِضَ', pos: 'verb', features: 'conj+impf.1p', gloss: 'to be sick; and we get sick' },
            { surface: 'وَنَمُوتُ', lemma: 'مَاتَ', pos: 'verb', features: 'conj+impf.1p', root: 'م و ت', gloss: 'to die; and we die' },
          ],
        },
        {
          id: 'qs-v3-c10-015',
          ar: 'فَكَيْفَ نَعْبُدُ اللَّهَ وَنَذْكُرُهُ دَائِمًا؟',
          en: 'so how could we worship Allah and remember Him always?',
          tokens: [
            { surface: 'فَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'so how' },
            { surface: 'نَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.1p', gloss: 'to worship; could we worship' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَنَذْكُرُهُ', lemma: 'ذَكَرَ', pos: 'verb', features: 'conj+impf.1p+3ms', root: 'ذ ك ر', gloss: 'to remember; and remember Him' },
            { surface: 'دَائِمًا', lemma: 'دَائِمًا', pos: 'adv', features: 'adv', gloss: 'always' },
          ],
        },
        {
          id: 'qs-v3-c10-016',
          ar: 'وَإِذَا كَانَ الرَّسُولُ بَشَرًا قَالَ:',
          en: 'And if the messenger were human, he would say:',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'and if' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'الرَّسُولُ', lemma: 'رَسُول', pos: 'noun', features: 'def.nom', gloss: 'the messenger' },
            { surface: 'بَشَرًا', lemma: 'بَشَر', pos: 'noun', features: 'indef.acc', gloss: 'a human being' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; would say' },
          ],
        },
        {
          id: 'qs-v3-c10-017',
          ar: 'مِثْلُكُمْ أَعْطَشُ وَأَجُوعُ وَأَمْرَضُ وَأَمُوتُ',
          en: '"Like you, I thirst and hunger, get sick and die,',
          tokens: [
            { surface: 'مِثْلُكُمْ', lemma: 'مِثْل', pos: 'noun', features: 'nom+2mp', root: 'م ث ل', gloss: 'like you' },
            { surface: 'أَعْطَشُ', lemma: 'عَطِشَ', pos: 'verb', features: 'impf.1s', gloss: 'to thirst; I thirst' },
            { surface: 'وَأَجُوعُ', lemma: 'جَاعَ', pos: 'verb', features: 'conj+impf.1s', gloss: 'to hunger; and I hunger' },
            { surface: 'وَأَمْرَضُ', lemma: 'مَرِضَ', pos: 'verb', features: 'conj+impf.1s', gloss: 'to be sick; and I get sick' },
            { surface: 'وَأَمُوتُ', lemma: 'مَاتَ', pos: 'verb', features: 'conj+impf.1s', root: 'م و ت', gloss: 'to die; and I die' },
          ],
        },
        {
          id: 'qs-v3-c10-018',
          ar: 'وَأَعْبُدُ اللَّهَ وَأَذْكُرُهُ،',
          en: 'and I worship Allah and remember Him,',
          tokens: [
            { surface: 'وَأَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'conj+impf.1s', gloss: 'to worship; and I worship' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَأَذْكُرُهُ', lemma: 'ذَكَرَ', pos: 'verb', features: 'conj+impf.1s+3ms', root: 'ذ ك ر', gloss: 'to remember; and I remember Him' },
          ],
        },
        {
          id: 'qs-v3-c10-019',
          ar: 'فَلِمَاذَا لَا تَعْبُدُونَ اللَّهَ وَلَا تَذْكُرُونَهُ؟',
          en: 'so why don\'t you worship Allah and remember Him?"',
          tokens: [
            { surface: 'فَلِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'conj+adv', gloss: 'so why' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.2mp', gloss: 'to worship; do you worship' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَذْكُرُونَهُ', lemma: 'ذَكَرَ', pos: 'verb', features: 'impf.2mp+3ms', root: 'ذ ك ر', gloss: 'to remember; do you remember Him' },
          ],
        },
        {
          id: 'qs-v3-c10-020',
          ar: 'فَيَنْقَطِعُ كَلَامُ النَّاسِ وَلَا يَجِدُونَ عُذْرًا.',
          en: "So the people's argument is cut off, and they find no excuse.",
          tokens: [
            { surface: 'فَيَنْقَطِعُ', lemma: 'اِنْقَطَعَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ق ط ع', gloss: 'to be cut off; so is cut off' },
            { surface: 'كَلَامُ', lemma: 'كَلَام', pos: 'noun', features: 'nom.constr', root: 'ك ل م', gloss: 'the speech, argument of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَجِدُونَ', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.3mp', root: 'و ج د', gloss: 'to find; they find' },
            { surface: 'عُذْرًا', lemma: 'عُذْر', pos: 'noun', features: 'indef.acc', root: 'ع ذ ر', gloss: 'an excuse' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ النَّاسُ سَيَقُولُونَ لَوْ كَانَ الرَّسُولُ مَلَكًا؟',
          options: [
            'هُوَ مَلَكٌ وَنَحْنُ بَشَرٌ، لَا نَقْدِرُ أَنْ نَعْبُدَ اللَّهَ دَائِمًا كَمَا يَفْعَلُ',
            'هُوَ صَادِقٌ فَنُصَدِّقُهُ فَوْرًا',
            'لَا نُرِيدُ رَسُولًا أَصْلًا',
          ],
          answer: 0,
          qEn: "What would the people have said if the messenger were an angel?",
          optionsEn: [
            "He is an angel and we are humans -- we can't worship Allah constantly the way he does",
            'He is truthful, so we will believe him at once',
            "We don't want a messenger at all",
          ],
        },
        {
          q: 'مَاذَا حَدَثَ لِعُذْرِ النَّاسِ لَمَّا كَانَ الرَّسُولُ بَشَرًا يَعْطَشُ وَيَجُوعُ وَيَمْرَضُ وَيَمُوتُ مِثْلَهُمْ وَيَعْبُدُ اللَّهَ مَعَ ذَلِكَ؟',
          options: [
            'اِنْقَطَعَ كَلَامُهُمْ وَلَمْ يَجِدُوا عُذْرًا',
            'وَجَدُوا عُذْرًا جَدِيدًا',
            'اِزْدَادُوا عِنَادًا وَغَضَبًا',
          ],
          answer: 0,
          qEn: "What happened to the people's excuse when the messenger was human -- thirsting, hungering, sickening, and dying like them, yet worshiping Allah anyway?",
          optionsEn: [
            'Their argument was cut off and they found no excuse',
            'They found a new excuse',
            'They only grew more stubborn and angry',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَأَرَادَ اللَّهُ أَنْ',
        post: 'هَذَا الرَّسُولُ بَشَراً،',
        en: 'Allah wanted this messenger to be a human being,',
        options: ['يَكُونَ', 'كَانَ', 'يَكُونُ', 'كَائِن'],
        answer: 0,
        rationales: [
          'Subjunctive (after أَنْ) -- "to be," the standard form after أَنْ in this corpus.',
          'Perfect -- wrong tense; nothing here has already happened.',
          'Indicative -- wrong mood; أَنْ requires the subjunctive form, not the plain indicative.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِنَّكَ لَا تَعْطَشُ وَلَا',
        post: '،',
        en: 'You do not thirst or hunger,',
        options: ['تَجُوعُ', 'جَاعَ', 'يَجُوعُ', 'جَائِع'],
        answer: 0,
        rationales: [
          'Imperfect, 2nd masculine singular -- matches تَعْطَشُ\'s tense, person, and number.',
          'Perfect -- wrong tense; breaks the parallel with تَعْطَشُ.',
          'Wrong person -- 3rd masculine singular, but the sentence addresses "you" throughout.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَ',
        post: 'كَلَامُ النَّاسِ وَلَا يَجِدُونَ عُذْراً.',
        en: "So the people's argument is cut off, and they find no excuse.",
        options: ['يَنْقَطِعُ', 'اِنْقَطَعَ', 'يَنْقَطِعَ', 'مُنْقَطِع'],
        answer: 0,
        rationales: [
          'Imperfect indicative -- a general, standing consequence, matching the parallel present-tense يَجِدُونَ.',
          'Perfect -- wrong tense; breaks the parallel with يَجِدُونَ.',
          'Subjunctive -- wrong mood; nothing here calls for the subjunctive.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَنْقَطِعُ عُذْرُ الرَّجُلِ',
        pre: '',
        post: 'عُذْرُ الرَّجُلِ',
        targetPerson: 'هِيَ',
        targetEn: 'she (his excuse)',
        options: ['تَنْقَطِعُ', 'يَنْقَطِعُ', 'أَنْقَطِعُ', 'نَنْقَطِعُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches a feminine subject.',
          '3rd masculine singular -- the form already given, for a masculine subject.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'أَجِدُ عُذْرًا',
        pre: '',
        post: 'عُذْرًا',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['يَجِدُ', 'أَجِدُ', 'تَجِدُ', 'نَجِدُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches هُوَ.',
          '1st singular -- I, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'أَجِدُ عُذْرًا',
        pre: '',
        post: 'عُذْرًا',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَجِدُونَ', 'أَجِدُ', 'تَجِدُ', 'نَجِدُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '1st singular -- I, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

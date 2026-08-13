// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 4 -- اسْتِخْفَافٌ وَتَمَرُّدٌ. Heading sits
// partway down printed page 253 (right after ch3's closing line), and the
// chapter continues onto the top of page 254, ending before ch5's heading
// نِعْمَةُ اللَّهِ عَلَى بَنِي إِسْرَائِيلَ. Transcribed by hand from the scan
// (vision OCR, 150dpi render) against ../CHAPTER-FORMAT.md and
// QASAS_AGENT_BRIEF.md.
//
// Continues ch3's indictment: contempt for the prophets curdled into open
// hostility -- usury, toying with religious teaching, hardened hearts, a
// people who once believed readily in prophecy but by the "latest age"
// (Nadwi's own framing, referring to the era just before ʿĪsā) believed
// only what flattered their own conduct -- and turned violently on anyone
// who tried to call them back to reform.
//
// Grammar / lexical notes:
//   -- s004's وَالْغِلْظَةُ وَالْجَفَافُ is transcribed nominative (not
//      accusative), reading it as two more items in the long chain of
//      subjects of وَلَدَ فِيهِمْ (الاسْتِخْفَافُ...وَالاجْتِرَاءُ...وَالتَّعَامُلُ...
//      وَالْعَبَثُ...وَالْغِلْظَةُ...) begun in s001 -- the scan's short vowel on
//      this pair is hard to read cleanly at this resolution, and only the
//      nominative reading keeps the whole coordinated chain grammatically
//      consistent. Flagged for a second look against a sharper scan.
//   -- وَلَدَ (s001, form I "to be born, arise") is tagged as a lemma
//      distinct from the already-attested وَلَّدَ (form II causative "to
//      generate, engender," qasas-v12 ch3) -- same root و ل د, different
//      derived form and argument structure (intransitive vs causative).
//   -- إِنْسَانِيّ (s005, adjective "human") and إِنْسَانِيَّة (s008, abstract
//      noun "humanity, human dignity") are tagged as two distinct lemmas,
//      matching the corpus's noun/adjective-different-pattern convention
//      even though they share a root and surface base.
//   -- s007's parenthetical مَهْمَا كَانَ أَصْلُهُ وَفَصْلُهُ ("whatever his
//      origin or lineage") is kept inline exactly as printed, between the
//      dashes; مَهْمَا and كَانَ are treated as background function words per
//      the closed-class exemption (not registered in newWords despite
//      being absent from known-lemmas.txt).
//   -- s013's وَلَكِنَّهُمْ fuses the conjunction لَكِنَّ with a trailing
//      object-style pronoun, tagged 'part+3mp' by the same
//      particle-plus-attached-pronoun extension documented in this
//      volume's chapter-12.js header.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): نَبِيّ، حَتَّى، قَتْل، قَلْب،
//      كَثِير، حُبّ، خَالِص، رَحْمَة، إِنْسَان، نَسِيَ، آمَنَ، رِسَالَة، كَثُرَ، خَبَر،
//      زَمَن، وَافَقَ، دَعَا، حَقّ، حَال، اللَّه، كَانَ
//      are all already taught (or are closed-class background words) and
//      are NOT re-listed in newWords here.
//
// 47 new words: وَلَدَ، اِسْتِخْفَاف، اِجْتِرَاء، تَعَامُل، رِبَا، عَبَث، تَعْلِيم، دِينِيّ،
// غِلْظَة، جَفَاف، ضَعْف، عَاطِفَة، إِنْسَانِيّ، تَجَرَّدَ، أَصْل، فَصْل، اِحْتِرَام،
// إِنْسَانِيَّة، كَادَ، مَعْنَى، مُوَاسَاة، مُسَاوَاة، بِرّ، كَرَم، نُبُوءَة، زَخَرَ، صَحِيفَة،
// أَصْبَحَ، أَخِير، هَوَى، أَيَّدَ، سِيرَة، خُلُق، اِنْتَقَدَ، حَاسَبَ، صَحِيح، صَرِيح،
// إِصْلَاح، عَادَى، حَارَبَ، جَرَاءَة، بُهْت، اِفْتِرَاء، كِتْمَان، شَهَادَة، زُور.
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch4',
  title: { ar: 'اسْتِخْفَافٌ وَتَمَرُّدٌ', en: 'Contempt and Rebellion' },
  newWords: [
    'وَلَدَ', 'اِسْتِخْفَاف', 'اِجْتِرَاء', 'تَعَامُل', 'رِبَا', 'عَبَث',
    'تَعْلِيم', 'دِينِيّ', 'غِلْظَة', 'جَفَاف', 'ضَعْف', 'عَاطِفَة',
    'إِنْسَانِيّ', 'تَجَرَّدَ', 'أَصْل', 'فَصْل', 'اِحْتِرَام', 'إِنْسَانِيَّة',
    'كَادَ', 'مَعْنَى', 'مُوَاسَاة', 'مُسَاوَاة', 'بِرّ', 'كَرَم',
    'نُبُوءَة', 'زَخَرَ', 'صَحِيفَة', 'أَصْبَحَ', 'أَخِير', 'هَوَى',
    'أَيَّدَ', 'سِيرَة', 'خُلُق', 'اِنْتَقَدَ', 'حَاسَبَ', 'صَحِيح',
    'صَرِيح', 'إِصْلَاح', 'عَادَى', 'حَارَبَ', 'جَرَاءَة', 'بُهْت',
    'اِفْتِرَاء', 'كِتْمَان', 'شَهَادَة', 'زُور',
  ],
  lemmas: {
    وَلَدَ: { gloss: 'to be born, arise' },
    اِسْتِخْفَاف: { gloss: 'contempt, belittling' },
    اِجْتِرَاء: { gloss: 'boldness, audacity (against)' },
    تَعَامُل: { gloss: 'dealing, transaction' },
    رِبَا: { gloss: 'usury, interest' },
    عَبَث: { gloss: 'toying, trifling' },
    تَعْلِيم: { gloss: 'a teaching' },
    دِينِيّ: { gloss: 'religious' },
    غِلْظَة: { gloss: 'harshness, coarseness' },
    جَفَاف: { gloss: 'dryness, coldness (of feeling)' },
    ضَعْف: { gloss: 'weakness' },
    عَاطِفَة: { gloss: 'emotion, compassion' },
    إِنْسَانِيّ: { gloss: 'human' },
    تَجَرَّدَ: { gloss: 'to become devoid, stripped (of)' },
    أَصْل: { gloss: 'origin, root' },
    فَصْل: { gloss: 'lineage, distinction' },
    اِحْتِرَام: { gloss: 'respect' },
    إِنْسَانِيَّة: { gloss: 'humanity, human dignity' },
    كَادَ: { gloss: 'to almost (do), be about to' },
    مَعْنَى: { gloss: 'a meaning' },
    مُوَاسَاة: { gloss: 'compassion, condolence' },
    مُسَاوَاة: { gloss: 'equality' },
    بِرّ: { gloss: 'righteousness, piety' },
    كَرَم: { gloss: 'generosity' },
    نُبُوءَة: { gloss: 'a prophecy' },
    زَخَرَ: { gloss: 'to overflow, abound' },
    صَحِيفَة: { gloss: 'a scripture, page' },
    أَصْبَحَ: { gloss: 'to become' },
    أَخِير: { gloss: 'last, latest' },
    هَوَى: { gloss: 'whim, desire' },
    أَيَّدَ: { gloss: 'to support, confirm' },
    سِيرَة: { gloss: 'conduct, biography' },
    خُلُق: { gloss: 'a moral trait, character' },
    اِنْتَقَدَ: { gloss: 'to criticize' },
    حَاسَبَ: { gloss: 'to hold to account' },
    صَحِيح: { gloss: 'sound, true' },
    صَرِيح: { gloss: 'plain, clear' },
    إِصْلَاح: { gloss: 'reform' },
    عَادَى: { gloss: 'to treat with hostility' },
    حَارَبَ: { gloss: 'to fight, wage war on' },
    جَرَاءَة: { gloss: 'boldness, audacity' },
    بُهْت: { gloss: 'slander' },
    اِفْتِرَاء: { gloss: 'false accusation' },
    كِتْمَان: { gloss: 'concealment' },
    شَهَادَة: { gloss: 'testimony, witness' },
    زُور: { gloss: 'falsehood' },
  },
  paragraphs: [
    {
      en: "Contempt for the prophets and boldness against them was born in them, even to the point of killing; dealing in usury; toying with religious teachings; harshness and coldness; and a weakening of human compassion. The hearts of many of them grew devoid of pure love of Allah, of mercy toward man -- whoever his origin or lineage -- and of respect for humanity. They all but forgot the very meanings of compassion, equality, righteousness, and generosity. They used to believe in prophecies and messages, and prophets had indeed been many among them, and their scriptures overflowed with reports of them -- but in the latest age they had come to believe only in what suited their whims and supported them in their own conduct and morals.",
      sentences: [
        {
          id: 'qs-v12-c04-001',
          ar: 'وَوَلَدَ فِيهِمِ الاسْتِخْفَافُ بِالْأَنْبِيَاءِ وَالاجْتِرَاءُ عَلَيْهِمْ حَتَّى بِالْقَتْلِ،',
          en: 'Contempt for the prophets and boldness against them was born in them, even to the point of killing,',
          tokens: [
            { surface: 'وَوَلَدَ', lemma: 'وَلَدَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be born, arise; and there arose' },
            { surface: 'فِيهِمِ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'in them' },
            { surface: 'الاسْتِخْفَافُ', lemma: 'اِسْتِخْفَاف', pos: 'noun', features: 'def.nom', gloss: 'contempt' },
            { surface: 'بِالْأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'prep+def.gen.pl', gloss: 'for the prophets' },
            { surface: 'وَالاجْتِرَاءُ', lemma: 'اِجْتِرَاء', pos: 'noun', features: 'conj+def.nom', gloss: 'and boldness' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'against them' },
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'part', features: 'part', gloss: 'even, up to' },
            { surface: 'بِالْقَتْلِ', lemma: 'قَتْل', pos: 'noun', features: 'prep+def.gen', gloss: 'killing' },
          ],
        },
        {
          id: 'qs-v12-c04-002',
          ar: 'وَالتَّعَامُلُ بِالرِّبَا،',
          en: 'dealing in usury,',
          tokens: [
            { surface: 'وَالتَّعَامُلُ', lemma: 'تَعَامُل', pos: 'noun', features: 'conj+def.nom', gloss: 'and dealing' },
            { surface: 'بِالرِّبَا', lemma: 'رِبَا', pos: 'noun', features: 'prep+def.gen', gloss: 'in usury' },
          ],
        },
        {
          id: 'qs-v12-c04-003',
          ar: 'وَالْعَبَثُ بِالتَّعَالِيمِ الدِّينِيَّةِ،',
          en: 'toying with religious teachings,',
          tokens: [
            { surface: 'وَالْعَبَثُ', lemma: 'عَبَث', pos: 'noun', features: 'conj+def.nom', gloss: 'and toying' },
            { surface: 'بِالتَّعَالِيمِ', lemma: 'تَعْلِيم', pos: 'noun', features: 'prep+def.gen.pl', gloss: 'with the teachings' },
            { surface: 'الدِّينِيَّةِ', lemma: 'دِينِيّ', pos: 'adj', features: 'def.gen.f', gloss: 'religious' },
          ],
        },
        {
          id: 'qs-v12-c04-004',
          ar: 'وَالْغِلْظَةُ وَالْجَفَافُ،',
          en: 'harshness and coldness,',
          tokens: [
            { surface: 'وَالْغِلْظَةُ', lemma: 'غِلْظَة', pos: 'noun', features: 'conj+def.nom', gloss: 'and harshness' },
            { surface: 'وَالْجَفَافُ', lemma: 'جَفَاف', pos: 'noun', features: 'conj+def.nom', gloss: 'and coldness' },
          ],
        },
        {
          id: 'qs-v12-c04-005',
          ar: 'وَضَعْفُ الْعَاطِفَةِ الْإِنْسَانِيَّةِ،',
          en: 'and a weakening of human compassion.',
          tokens: [
            { surface: 'وَضَعْفُ', lemma: 'ضَعْف', pos: 'noun', features: 'conj+nom.constr', gloss: 'and weakness of' },
            { surface: 'الْعَاطِفَةِ', lemma: 'عَاطِفَة', pos: 'noun', features: 'def.gen', gloss: 'compassion' },
            { surface: 'الْإِنْسَانِيَّةِ', lemma: 'إِنْسَانِيّ', pos: 'adj', features: 'def.gen.f', gloss: 'human' },
          ],
        },
        {
          id: 'qs-v12-c04-006',
          ar: 'وَتَجَرَّدَتْ قُلُوبُ كَثِيرٍ مِنْهُمْ مِنْ حُبِّ اللَّهِ الْخَالِصِ،',
          en: 'The hearts of many of them grew devoid of pure love of Allah,',
          tokens: [
            { surface: 'وَتَجَرَّدَتْ', lemma: 'تَجَرَّدَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to become devoid; and grew devoid' },
            { surface: 'قُلُوبُ', lemma: 'قَلْب', pos: 'noun', features: 'pl.nom.constr', gloss: 'the hearts of' },
            { surface: 'كَثِيرٍ', lemma: 'كَثِير', pos: 'noun', features: 'indef.gen', gloss: 'many' },
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'of them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'حُبِّ', lemma: 'حُبّ', pos: 'noun', features: 'constr.gen', gloss: 'the love of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'الْخَالِصِ', lemma: 'خَالِص', pos: 'adj', features: 'def.gen', gloss: 'pure' },
          ],
        },
        {
          id: 'qs-v12-c04-007',
          ar: 'وَالرَّحْمَةِ عَلَى الْإِنْسَانِ ـ مَهْمَا كَانَ أَصْلُهُ وَفَصْلُهُ ـ',
          en: 'of mercy toward man -- whoever his origin or lineage --',
          tokens: [
            { surface: 'وَالرَّحْمَةِ', lemma: 'رَحْمَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and mercy' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'toward' },
            { surface: 'الْإِنْسَانِ', lemma: 'إِنْسَان', pos: 'noun', features: 'def.gen', gloss: 'man' },
            { surface: 'مَهْمَا', lemma: 'مَهْمَا', pos: 'adv', features: 'adv', gloss: 'whatever, no matter what' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'أَصْلُهُ', lemma: 'أَصْل', pos: 'noun', features: 'nom+3ms', gloss: 'his origin' },
            { surface: 'وَفَصْلُهُ', lemma: 'فَصْل', pos: 'noun', features: 'conj+nom+3ms', gloss: 'and his lineage' },
          ],
        },
        {
          id: 'qs-v12-c04-008',
          ar: 'وَاحْتِرَامِ الْإِنْسَانِيَّةِ،',
          en: 'and of respect for humanity.',
          tokens: [
            { surface: 'وَاحْتِرَامِ', lemma: 'اِحْتِرَام', pos: 'noun', features: 'conj+constr.gen', gloss: 'and respect of' },
            { surface: 'الْإِنْسَانِيَّةِ', lemma: 'إِنْسَانِيَّة', pos: 'noun', features: 'def.gen', gloss: 'humanity' },
          ],
        },
        {
          id: 'qs-v12-c04-009',
          ar: 'وَكَادُوا يَنْسَوْنَ مَعَانِيَ الْمُوَاسَاةِ وَالْمُسَاوَاةِ وَالبِرِّ وَالْكَرَمِ،',
          en: 'They all but forgot the very meanings of compassion, equality, righteousness, and generosity.',
          tokens: [
            { surface: 'وَكَادُوا', lemma: 'كَادَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to almost; and almost' },
            { surface: 'يَنْسَوْنَ', lemma: 'نَسِيَ', pos: 'verb', features: 'impf.3mp', gloss: 'to forget; forgot' },
            { surface: 'مَعَانِيَ', lemma: 'مَعْنَى', pos: 'noun', features: 'pl.acc', gloss: 'the meanings of' },
            { surface: 'الْمُوَاسَاةِ', lemma: 'مُوَاسَاة', pos: 'noun', features: 'def.gen', gloss: 'compassion' },
            { surface: 'وَالْمُسَاوَاةِ', lemma: 'مُسَاوَاة', pos: 'noun', features: 'conj+def.gen', gloss: 'and equality' },
            { surface: 'وَالبِرِّ', lemma: 'بِرّ', pos: 'noun', features: 'conj+def.gen', gloss: 'and righteousness' },
            { surface: 'وَالْكَرَمِ', lemma: 'كَرَم', pos: 'noun', features: 'conj+def.gen', gloss: 'and generosity' },
          ],
        },
        {
          id: 'qs-v12-c04-010',
          ar: 'وَكَانُوا يُؤْمِنُونَ بِالنُّبُوءَاتِ وَالرِّسَالَاتِ،',
          en: 'They used to believe in prophecies and messages,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they were' },
            { surface: 'يُؤْمِنُونَ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.3mp', gloss: 'to believe; believing' },
            { surface: 'بِالنُّبُوءَاتِ', lemma: 'نُبُوءَة', pos: 'noun', features: 'prep+def.gen.pl', gloss: 'in prophecies' },
            { surface: 'وَالرِّسَالَاتِ', lemma: 'رِسَالَة', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and messages' },
          ],
        },
        {
          id: 'qs-v12-c04-011',
          ar: 'وَقَدْ كَثُرَتْ فِيهِمُ الْأَنْبِيَاءُ،',
          en: 'and prophets had indeed been many among them,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'كَثُرَتْ', lemma: 'كَثُرَ', pos: 'verb', features: 'perf.3fs', gloss: 'to become many; were many' },
            { surface: 'فِيهِمُ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'الْأَنْبِيَاءُ', lemma: 'نَبِيّ', pos: 'noun', features: 'def.nom.pl', gloss: 'the prophets' },
          ],
        },
        {
          id: 'qs-v12-c04-012',
          ar: 'وَزَخَرَتْ صُحُفُهُمْ بِأَخْبَارِهِمْ،',
          en: 'and their scriptures overflowed with reports of them,',
          tokens: [
            { surface: 'وَزَخَرَتْ', lemma: 'زَخَرَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to overflow, abound; and overflowed' },
            { surface: 'صُحُفُهُمْ', lemma: 'صَحِيفَة', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their scriptures' },
            { surface: 'بِأَخْبَارِهِمْ', lemma: 'خَبَر', pos: 'noun', features: 'prep+pl.gen+3mp', gloss: 'with reports of them' },
          ],
        },
        {
          id: 'qs-v12-c04-013',
          ar: 'وَلَكِنَّهُمْ قَدْ أَصْبَحُوا فِي الزَّمَنِ الْأَخِيرِ لَا يُؤْمِنُونَ إِلَّا بِمَا وَافَقَ هَوَاهُمْ،',
          en: 'but in the latest age they had come to believe only in what suited their whims,',
          tokens: [
            { surface: 'وَلَكِنَّهُمْ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part+3mp', gloss: 'but they' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'أَصْبَحُوا', lemma: 'أَصْبَحَ', pos: 'verb', features: 'perf.3mp', gloss: 'to become; became' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الزَّمَنِ', lemma: 'زَمَن', pos: 'noun', features: 'def.gen', gloss: 'the age' },
            { surface: 'الْأَخِيرِ', lemma: 'أَخِير', pos: 'adj', features: 'def.gen', gloss: 'latest' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُؤْمِنُونَ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.3mp', gloss: 'to believe; believing' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'in what' },
            { surface: 'وَافَقَ', lemma: 'وَافَقَ', pos: 'verb', features: 'perf.3ms', gloss: 'to suit, agree with; suited' },
            { surface: 'هَوَاهُمْ', lemma: 'هَوَى', pos: 'noun', features: 'acc+3mp', gloss: 'their whims' },
          ],
        },
        {
          id: 'qs-v12-c04-014',
          ar: 'وَأَيَّدَهُمْ فِي سِيرَتِهِمْ وَأَخْلَاقِهِمْ،',
          en: 'and supported them in their own conduct and morals.',
          tokens: [
            { surface: 'وَأَيَّدَهُمْ', lemma: 'أَيَّدَ', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to support; and supported them' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'سِيرَتِهِمْ', lemma: 'سِيرَة', pos: 'noun', features: 'gen+3mp', gloss: 'their conduct' },
            { surface: 'وَأَخْلَاقِهِمْ', lemma: 'خُلُق', pos: 'noun', features: 'conj+pl.gen+3mp', gloss: 'and their morals' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا وَلَدَ فِي الْيَهُودِ الاسْتِخْفَافُ بِالْأَنْبِيَاءِ؟',
          options: ['الاجْتِرَاءَ عَلَيْهِمْ حَتَّى بِالْقَتْلِ، وَالتَّعَامُلَ بِالرِّبَا، وَالْعَبَثَ بِالتَّعَالِيمِ الدِّينِيَّةِ', 'اِحْتِرَامَهُمْ وَتَعْظِيمَهُمْ', 'رُجُوعَهُمْ إِلَى دِينِ آبَائِهِمُ الصَّحِيحِ'],
          answer: 0,
          qEn: 'What did the Jews’ contempt for the prophets give rise to?',
          optionsEn: ['Boldness against them even to the point of killing, dealing in usury, and toying with religious teachings', 'Respect and reverence for them', 'A return to their fathers’ true religion'],
        },
        {
          q: 'بِمَاذَا كَانُوا يُؤْمِنُونَ فِي الزَّمَنِ الْأَخِيرِ؟',
          options: ['لَا يُؤْمِنُونَ إِلَّا بِمَا وَافَقَ هَوَاهُمْ وَأَيَّدَهُمْ فِي سِيرَتِهِمْ', 'بِكُلِّ مَا جَاءَتْ بِهِ الْأَنْبِيَاءُ دُونَ اسْتِثْنَاءٍ', 'بِالْعِلْمِ التَّجْرِيبِيِّ وَحْدَهُ'],
          answer: 0,
          qEn: 'What did they believe in during the latest age?',
          optionsEn: ['They believed only in what suited their whims and supported their own conduct', 'Everything the prophets had brought, without exception', 'Only empirical science'],
        },
      ],
    },
    {
      en: 'As for whoever criticized them, held them to account, and called them to true religion, plain truth, and reform of their condition -- they turned hostile to him and fought him; they grew bold in slander and false accusation, in concealing the truth, and in bearing false witness.',
      sentences: [
        {
          id: 'qs-v12-c04-015',
          ar: 'أَمَّا مَنِ انْتَقَدَهُمْ وَحَاسَبَهُمْ وَدَعَاهُمْ إِلَى الدِّينِ الصَّحِيحِ،',
          en: 'As for whoever criticized them, held them to account, and called them to true religion,',
          tokens: [
            { surface: 'أَمَّا', lemma: 'أَمَّا', pos: 'part', features: 'part', gloss: 'as for' },
            { surface: 'مَنِ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'whoever' },
            { surface: 'انْتَقَدَهُمْ', lemma: 'اِنْتَقَدَ', pos: 'verb', features: 'perf.3ms+3mp', gloss: 'to criticize; criticized them' },
            { surface: 'وَحَاسَبَهُمْ', lemma: 'حَاسَبَ', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to hold to account; and held them to account' },
            { surface: 'وَدَعَاهُمْ', lemma: 'دَعَا', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to call; and called them' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الدِّينِ', lemma: 'دِين', pos: 'noun', features: 'def.gen', gloss: 'religion' },
            { surface: 'الصَّحِيحِ', lemma: 'صَحِيح', pos: 'adj', features: 'def.gen', gloss: 'true, sound' },
          ],
        },
        {
          id: 'qs-v12-c04-016',
          ar: 'وَالْحَقِّ الصَّرِيحِ، وَإِصْلَاحِ الْحَالِ،',
          en: 'plain truth, and reform of their condition --',
          tokens: [
            { surface: 'وَالْحَقِّ', lemma: 'حَقّ', pos: 'noun', features: 'conj+def.gen', gloss: 'and the truth' },
            { surface: 'الصَّرِيحِ', lemma: 'صَرِيح', pos: 'adj', features: 'def.gen', gloss: 'plain, clear' },
            { surface: 'وَإِصْلَاحِ', lemma: 'إِصْلَاح', pos: 'noun', features: 'conj+constr.gen', gloss: 'and the reform of' },
            { surface: 'الْحَالِ', lemma: 'حَال', pos: 'noun', features: 'def.gen', gloss: 'their condition' },
          ],
        },
        {
          id: 'qs-v12-c04-017',
          ar: 'عَادَوْهُ وَحَارَبُوهُ،',
          en: 'they turned hostile to him and fought him,',
          tokens: [
            { surface: 'عَادَوْهُ', lemma: 'عَادَى', pos: 'verb', features: 'perf.3mp+3ms', gloss: 'to treat with hostility; they treated him with hostility' },
            { surface: 'وَحَارَبُوهُ', lemma: 'حَارَبَ', pos: 'verb', features: 'conj+perf.3mp+3ms', gloss: 'to fight; and fought him' },
          ],
        },
        {
          id: 'qs-v12-c04-018',
          ar: 'وَكَانَتْ عِنْدَهُمْ جَرَاءَةٌ عَلَى الْبُهْتِ وَالافْتِرَاءِ،',
          en: 'they grew bold in slander and false accusation,',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be; and there was' },
            { surface: 'عِنْدَهُمْ', lemma: 'عِنْدَ', pos: 'prep', features: 'prep+3mp', gloss: 'in them' },
            { surface: 'جَرَاءَةٌ', lemma: 'جَرَاءَة', pos: 'noun', features: 'indef.nom', gloss: 'boldness' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'in, for' },
            { surface: 'الْبُهْتِ', lemma: 'بُهْت', pos: 'noun', features: 'def.gen', gloss: 'slander' },
            { surface: 'وَالافْتِرَاءِ', lemma: 'اِفْتِرَاء', pos: 'noun', features: 'conj+def.gen', gloss: 'and false accusation' },
          ],
        },
        {
          id: 'qs-v12-c04-019',
          ar: 'وَكِتْمَانِ الْحَقِّ، وَشَهَادَةِ الزُّورِ.',
          en: 'in concealing the truth, and in bearing false witness.',
          tokens: [
            { surface: 'وَكِتْمَانِ', lemma: 'كِتْمَان', pos: 'noun', features: 'conj+constr.gen', gloss: 'and the concealing of' },
            { surface: 'الْحَقِّ', lemma: 'حَقّ', pos: 'noun', features: 'def.gen', gloss: 'the truth' },
            { surface: 'وَشَهَادَةِ', lemma: 'شَهَادَة', pos: 'noun', features: 'conj+constr.gen', gloss: 'and the testimony of' },
            { surface: 'الزُّورِ', lemma: 'زُور', pos: 'noun', features: 'def.gen', gloss: 'falsehood' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ الْيَهُودُ يُعَامِلُونَ مَنِ انْتَقَدَهُمْ وَدَعَاهُمْ إِلَى الْإِصْلَاحِ؟',
          options: ['عَادَوْهُ وَحَارَبُوهُ', 'رَحَّبُوا بِهِ وَشَكَرُوهُ', 'اسْتَمَعُوا إِلَيْهِ بِتَوَاضُعٍ'],
          answer: 0,
          qEn: 'How did the Jews treat whoever criticized them and called them to reform?',
          optionsEn: ['They turned hostile to him and fought him', 'They welcomed and thanked him', 'They listened to him humbly'],
        },
        {
          q: 'بِمَاذَا وَصَفَ الْكَاتِبُ جَرَاءَةَ الْيَهُودِ؟',
          options: ['جَرَاءَةٌ عَلَى الْبُهْتِ وَالافْتِرَاءِ وَكِتْمَانِ الْحَقِّ وَشَهَادَةِ الزُّورِ', 'جَرَاءَةٌ فِي طَلَبِ الْعِلْمِ', 'جَرَاءَةٌ فِي الدِّفَاعِ عَنِ الْحَقِّ'],
          answer: 0,
          qEn: "How did the author describe the Jews' boldness?",
          optionsEn: ['Boldness in slander, false accusation, concealing the truth, and bearing false witness', 'Boldness in seeking knowledge', 'Boldness in defending the truth'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانُوا',
        post: 'بِالنُّبُوءَاتِ وَالرِّسَالَاتِ.',
        en: 'They used to believe in prophecies and messages.',
        options: ['يُؤْمِنُونَ', 'آمَنُوا', 'يُؤْمِنُ', 'مُؤْمِنُونَ'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine plural -- paired with كَانُوا for a habitual-past "used to believe."',
          'Perfect -- wrong tense; كَانَ + perfect does not give the habitual-past reading here.',
          'Imperfect singular -- wrong number; the subject is plural.',
          'Active participle (noun) -- wrong part of speech after كَانُوا in this construction.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَكِنَّهُمْ قَدْ أَصْبَحُوا فِي الزَّمَنِ الْأَخِيرِ لَا',
        post: 'إِلَّا بِمَا وَافَقَ هَوَاهُمْ.',
        en: 'But in the latest age they came to believe only in what suited their whims.',
        options: ['يُؤْمِنُونَ', 'آمَنُوا', 'أَمِنُوا', 'مُؤْمِنُونَ'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine plural -- negated present/habitual belief, matching لَا.',
          'Perfect -- wrong tense; لَا with a perfect would not give this habitual-present sense here.',
          'A different verb (أَمِنَ, "to trust/feel safe") -- wrong lemma entirely.',
          'Active participle (noun) -- wrong part of speech after لَا in this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'أَمَّا مَنِ انْتَقَدَهُمْ وَحَاسَبَهُمْ وَدَعَاهُمْ إِلَى الدِّينِ الصَّحِيحِ',
        post: 'وَحَارَبُوهُ.',
        en: 'As for whoever criticized them and called them to the true religion, they turned hostile to him and fought him.',
        options: ['عَادَوْهُ', 'عَادَاهُ', 'يُعَادُونَهُ', 'مُعَادُونَهُ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural + object -- matches the plural subject الْيَهُودُ (understood) and the following perfect وَحَارَبُوهُ.',
          'Perfect, 3rd masculine singular -- wrong number; the subject acting is plural.',
          'Imperfect plural -- wrong tense; the sentence narrates a completed past reaction.',
          'Active participle (noun) plural -- wrong part of speech for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'عَادَى الْيَهُودُ النَّاصِحَ',
        pre: '',
        post: 'النَّاصِحَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['عَادَيْتُ', 'عَادَى', 'عَادَيْتَ', 'عَادَيْنَا'],
        answer: 0,
        rationales: [
          '1st singular perfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted.',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular.',
        ],
      },
      {
        type: 'shift',
        base: 'عَادَى الْيَهُودُ النَّاصِحَ',
        pre: '',
        post: 'النَّاصِحَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['عَادَيْنَا', 'عَادَى', 'عَادَيْتُ', 'عَادَيْتَ'],
        answer: 0,
        rationales: [
          '1st plural perfect -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted.',
          '1st singular -- wrong number; the target is "we."',
          '2nd masculine singular -- wrong person.',
        ],
      },
      {
        type: 'shift',
        base: 'عَادَى الْيَهُودُ النَّاصِحَ',
        pre: '',
        post: 'النَّاصِحَ',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you (mp)',
        options: ['عَادَيْتُمْ', 'عَادَى', 'عَادَيْتُ', 'عَادَيْنَا'],
        answer: 0,
        rationales: [
          '2nd masculine plural perfect -- matches أَنْتُمْ.',
          '3rd masculine singular -- the base form, not shifted.',
          '1st singular -- wrong person.',
          '1st plural -- wrong person; the target is "you (pl.)," not "we."',
        ],
      },
    ],
  },
};

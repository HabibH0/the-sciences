// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 14 -- اتَّبَعَكَ
// الأَرْذَلُونَ. Printed pages 73 (bottom, right after ch13's closing line
// and the heading) through 74 (top, ending before ch15's heading حُجَّةُ
// الأَغْنِيَاءِ partway down the same page). Transcribed by hand from the
// scan (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// Nūḥ strives hard to bring his people to faith, but only a handful
// believe -- ordinary working people who eat what their own hands
// honestly earn. The rich refuse out of sheer pride, too distracted by
// wealth and children to think of the Hereafter; they call themselves
// nobles and the believers "the lowest of the low" (quoting the Qur'an's
// own record of their words, Sūrat ash-Shuʿarāʾ 26:111). They demand Nūḥ
// drive the poor believers away, but he refuses -- quoting his Qur'anic
// reply that he will not drive away believers (26:114) and that he is
// nothing but a plain warner (26:115). Nūḥ knows these poor believers are
// sincere, and that Allah is angry at anyone who drives them away -- so
// he answers with a direct question, quoted from Sūrat Hūd 11:30: who
// would help him against Allah if he expelled them?
//
// Grammar / lexical notes:
//   -- Every long printed sentence is split at its natural clause/comma
//      boundary into multiple shorter entries here (house convention,
//      ch7/ch9/ch10/ch12/ch13) -- no rewording, same printed text and
//      order. Each Qur'an quote (26:111, 26:114, 26:115, 11:30) is kept
//      in its own ﴿﴾-wrapped sentence, separated from its narrating
//      "and he said:" clause, per the established convention.
//   -- آمَنَ (new, form IV "to believe") is a distinct lemma from the
//      already-taught أَمِنَ (form I "to trust," qasas-v2 ch19) -- same
//      root أ م ن, different derived form and meaning, per the
//      distinct-lemma-per-derived-verb-form convention. Its active
//      participle مُؤْمِن (new, "believer") is likewise its own lemma, per
//      the participle-as-distinct-lemma convention (صَالِح، سَاجِد، نَاصِح،
//      and now طَارِد below).
//   -- طَارِد (new, "one who drives away") is the active-participle
//      counterpart of the already-taught verb طَرَدَ (qasas-v3 ch2),
//      tagged as its own lemma per that same convention.
//   -- كِبْر (new, "pride, arrogance," a verbal noun) is a distinct lemma
//      from the already-taught adjective كَبِير and the already-taught
//      participle-noun مُتَكَبِّر (ch12) -- all three share root ك ب ر but
//      are three separate printed words with three separate lemmas,
//      matching the corpus's noun/adjective-vs-participle-vs-verb
//      same-root convention.
//   -- نَذِير (new, "a warner") is a distinct noun lemma from the
//      already-taught verb أَنذَرَ (ch11) -- same root ن ذ ر, matching the
//      رِسَالَة/رَسُول-style noun-beside-verb convention.
//   -- بِنُوحٍ (qs-v3-c14-003) fuses بِ onto the proper noun نُوح directly
//      ('prep+gen', no separate بِ lemma), matching the general
//      preposition+full-noun fusion convention already used for بِاللَّهِ
//      and كَالْبَشَرِ; contrast بِهِ/بِي elsewhere in this chapter, where
//      بِ + a bare pronoun suffix keeps its own لِ-style lemma بِ.
//   -- إِنْ (qs-v3-c14-016) is tagged 'neg' ("nothing...but," إِنْ ...
//      إِلَّا) here, distinct from the ordinary conditional إِنْ ('part',
//      "if") used later in the same chapter (qs-v3-c14-021's إِن
//      طَرَدتُّهُمْ) -- same lemma, two already-attested feature sets (see
//      qasas-v2 ch8 for the neg sense).
//   -- وَيَقَوْمِ (qs-v3-c14-021, printed without a full alif like ch13's
//      يَقَوْمِ) is tokenized وَيَ + قَوْمِ, same split-fusion convention.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): اِجْتَهَدَ، نُوح، كَثِير،
//      أَنْ، قَوْم، عَبَدَ، اللَّه، تَرَكَ، الأَصْنَام (صَنَم)، لَكِنْ، مَا، مِنْ، الَّذِي،
//      يَعْمَلُ، يَد، يَأْكُلُ، أَمَّا، غَنِيّ، قَدْ، مَنَعَ، أَطَاعَ، شَغَلَ، مَال، وَلَد،
//      فِي، آخِرَة، كَانَ، قَالَ، نَحْنُ، هَؤُلَاءِ، لَمَّا، دَعَا، إِلَى، طَلَبَ، طَرَدَ،
//      لَكِنَّ، أَبَى، إِلَّا، إِنَّ، بَاب، لَيْسَ، مَلِك، عَرَفَ، أَنَّ، غَضِبَ، إِذَا،
//      إِذَنْ، لَا، نَصَرَ، أَحَد، فَقَالَ، مَن، مِن
//      are all already taught and are NOT re-listed in newWords here.
//
// 12 new words (آمَنَ، فَرْد، حَلَال، كِبْر، شَرِيف، أَرْذَل، مِسْكِين، طَارِد، مُؤْمِن،
// نَذِير، مُخْلِص، إِذَن) -- this chapter is unusually vocabulary-dense
// because it introduces the whole social-conflict word-set (believers vs.
// nobles) that recurs through the rest of the volume.
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch14',
  title: { ar: 'اتَّبَعَكَ الأَرْذَلُونَ', en: 'The Lowest Have Followed You' },
  newWords: ['آمَنَ', 'فَرْد', 'حَلَال', 'كِبْر', 'شَرِيف', 'أَرْذَل', 'مِسْكِين', 'طَارِد', 'مُؤْمِن', 'نَذِير', 'مُخْلِص', 'إِذَن'],
  lemmas: {
    آمَنَ: { gloss: 'to believe, have faith' },
    فَرْد: { gloss: 'individual, person' },
    حَلَال: { gloss: 'lawful, permissible' },
    كِبْر: { gloss: 'pride, arrogance' },
    شَرِيف: { gloss: 'noble (person)' },
    أَرْذَل: { gloss: 'most base, most vile' },
    مِسْكِين: { gloss: 'poor, destitute (person)' },
    طَارِد: { gloss: 'one who drives away' },
    مُؤْمِن: { gloss: 'believer' },
    نَذِير: { gloss: 'a warner' },
    مُخْلِص: { gloss: 'sincere, devoted' },
    إِذَن: { gloss: 'then, in that case' },
  },
  paragraphs: [
    {
      en: 'Nūḥ strove hard for his people to believe and worship Allah and leave the idols. But only a handful of individuals from his people believed in him. None believed in him but individuals who worked with their own hands and ate what was lawful. As for the rich among his people, their pride kept them from obeying Nūḥ.',
      sentences: [
        {
          id: 'qs-v3-c14-001',
          ar: 'وَاجْتَهَدَ نُوْحٌ كَثِيراً أَنْ يُؤْمِنَ قَوْمُهُ',
          en: 'Nūḥ strove hard for his people to believe',
          tokens: [
            { surface: 'وَاجْتَهَدَ', lemma: 'اِجْتَهَدَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to strive; and strove' },
            { surface: 'نُوْحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'كَثِيراً', lemma: 'كَثِير', pos: 'adj', features: 'indef.acc', gloss: 'greatly, much' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يُؤْمِنَ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.3ms', root: 'أ م ن', gloss: 'to believe; believe' },
            { surface: 'قَوْمُهُ', lemma: 'قَوْم', pos: 'noun', features: 'nom+3ms', gloss: 'his people' },
          ],
        },
        {
          id: 'qs-v3-c14-002',
          ar: 'وَيَعْبُدُوا اللَّهَ وَيَتْرُكُوا الأَصْنَامَ.',
          en: 'and worship Allah and leave the idols.',
          tokens: [
            { surface: 'وَيَعْبُدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to worship; and worship' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَيَتْرُكُوا', lemma: 'تَرَكَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to leave; and leave' },
            { surface: 'الأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'def.acc.pl', gloss: 'the idols' },
          ],
        },
        {
          id: 'qs-v3-c14-003',
          ar: 'وَلَكِنْ مَا آمَنَ بِنُوحٍ إِلَّا بَعْضُ الأَفْرَادِ مِنْ قَوْمِهِ.',
          en: 'But only a handful of individuals from his people believed in him.',
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'آمَنَ', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3ms', gloss: 'to believe; believed' },
            { surface: 'بِنُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'prep+gen', gloss: 'in Nūḥ' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'بَعْضُ', lemma: 'بَعْض', pos: 'noun', features: 'nom.constr', gloss: 'some (of)' },
            { surface: 'الأَفْرَادِ', lemma: 'فَرْد', pos: 'noun', features: 'def.gen.pl', root: 'ف ر د', gloss: 'the individuals' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
          ],
        },
        {
          id: 'qs-v3-c14-004',
          ar: 'مَا آمَنَ بِهِ إِلا بَعْضُ الأَفْرَادِ الَّذِينَ يَعْمَلُونَ',
          en: 'None believed in him but individuals who worked',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'آمَنَ', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3ms', gloss: 'to believe; believed' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'in him' },
            { surface: 'إِلا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'بَعْضُ', lemma: 'بَعْض', pos: 'noun', features: 'nom.constr', gloss: 'some (of)' },
            { surface: 'الأَفْرَادِ', lemma: 'فَرْد', pos: 'noun', features: 'def.gen.pl', gloss: 'the individuals' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'pl.rel', gloss: 'who' },
            { surface: 'يَعْمَلُونَ', lemma: 'عَمِلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to work; work' },
          ],
        },
        {
          id: 'qs-v3-c14-005',
          ar: 'بِأَيْدِيهِمْ وَيَأْكُلُونَ الحَلَالَ.',
          en: 'with their own hands and ate what was lawful.',
          tokens: [
            { surface: 'بِأَيْدِيهِمْ', lemma: 'يَد', pos: 'noun', features: 'prep+pl.gen+3mp', gloss: 'with their hands' },
            { surface: 'وَيَأْكُلُونَ', lemma: 'أَكَلَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to eat; and eat' },
            { surface: 'الحَلَالَ', lemma: 'حَلَال', pos: 'noun', features: 'def.acc', root: 'ح ل ل', gloss: 'the lawful' },
          ],
        },
        {
          id: 'qs-v3-c14-006',
          ar: 'أَمَّا الأَغْنِيَاءُ مِنْ قَوْمِهِ فَقَدْ مَنَعَهُمْ كِبْرُهُمْ',
          en: 'As for the rich among his people, their pride kept them',
          tokens: [
            { surface: 'أَمَّا', lemma: 'أَمَّا', pos: 'part', features: 'part', gloss: 'as for' },
            { surface: 'الأَغْنِيَاءُ', lemma: 'غَنِيّ', pos: 'adj', features: 'def.nom.pl', gloss: 'the rich' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'so indeed' },
            { surface: 'مَنَعَهُمْ', lemma: 'مَنَعَ', pos: 'verb', features: 'perf.3ms+3mp', gloss: 'to prevent; prevented them' },
            { surface: 'كِبْرُهُمْ', lemma: 'كِبْر', pos: 'noun', features: 'nom+3mp', root: 'ك ب ر', gloss: 'their pride' },
          ],
        },
        {
          id: 'qs-v3-c14-007',
          ar: 'أَنْ يُطِيعُوا نُوحاً.',
          en: 'from obeying Nūḥ.',
          tokens: [
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يُطِيعُوا', lemma: 'أَطَاعَ', pos: 'verb', features: 'impf.3mp', gloss: 'to obey; obey' },
            { surface: 'نُوحاً', lemma: 'نُوح', pos: 'proper', features: 'acc', gloss: 'Nūḥ' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ آمَنَ بِنُوحٍ مِنْ قَوْمِهِ؟',
          options: [
            'بَعْضُ الأَفْرَادِ الَّذِينَ يَعْمَلُونَ بِأَيْدِيهِمْ وَيَأْكُلُونَ الحَلَالَ',
            'كُلُّ الأَغْنِيَاءِ وَالْمُتَكَبِّرِينَ',
            'رَئِيسُ الْقَوْمِ وَحْدَهُ',
          ],
          answer: 0,
          qEn: 'Who among his people believed in Nūḥ?',
          optionsEn: [
            'Only individuals who worked with their own hands and ate what was lawful',
            'All the rich and arrogant',
            "The chief of the people alone",
          ],
        },
      ],
    },
    {
      en: 'Their wealth and children kept them from thinking of the Hereafter. They would say: we are nobles and these people are the lowest of the low. And when Nūḥ called them to Allah, they said: Shall we believe in you when the lowest of the low have followed you?" They demanded that Nūḥ drive these poor believers away. But Nūḥ refused, saying: "I will not drive away the believers. My door is not the door of a king, I am nothing but a plain warner."',
      sentences: [
        {
          id: 'qs-v3-c14-008',
          ar: 'وَشَغَلَتْهُمْ أَمْوَالُهُمْ وَأَوْلَادُهُمْ أَنْ يُفَكِّرُوا فِي الآخِرَةِ.',
          en: 'Their wealth and children kept them from thinking of the Hereafter.',
          tokens: [
            { surface: 'وَشَغَلَتْهُمْ', lemma: 'شَغَلَ', pos: 'verb', features: 'conj+perf.3fs+3mp', gloss: 'to occupy, distract; and distracted them' },
            { surface: 'أَمْوَالُهُمْ', lemma: 'مَال', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their wealth' },
            { surface: 'وَأَوْلَادُهُمْ', lemma: 'وَلَد', pos: 'noun', features: 'conj+pl.nom+3mp', gloss: 'and their children' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يُفَكِّرُوا', lemma: 'فَكَّرَ', pos: 'verb', features: 'impf.3mp', gloss: 'to think, reflect; think' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'about' },
            { surface: 'الآخِرَةِ', lemma: 'آخِرَة', pos: 'noun', features: 'def.gen', gloss: 'the Hereafter' },
          ],
        },
        {
          id: 'qs-v3-c14-009',
          ar: 'وَكَانُوا يَقُولُونَ: نَحْنُ أَشْرَافٌ وَهَؤُلَاءِ أَرَاذِلُ.',
          en: "They would say: we are nobles and these people are the lowest of the low.",
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they were' },
            { surface: 'يَقُولُونَ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3mp', gloss: 'to say; saying' },
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: '1p', gloss: 'we' },
            { surface: 'أَشْرَافٌ', lemma: 'شَرِيف', pos: 'noun', features: 'indef.nom.pl', root: 'ش ر ف', gloss: 'nobles' },
            { surface: 'وَهَؤُلَاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'conj+dem.pl', gloss: 'and these' },
            { surface: 'أَرَاذِلُ', lemma: 'أَرْذَل', pos: 'adj', features: 'indef.nom.pl', root: 'ر ذ ل', gloss: 'the lowest, most base' },
          ],
        },
        {
          id: 'qs-v3-c14-010',
          ar: 'وَلَمَّا دَعَاهُمْ نُوحٌ إِلى اللَّه قَالُوا:',
          en: 'And when Nūḥ called them to Allah, they said:',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'دَعَاهُمْ', lemma: 'دَعَا', pos: 'verb', features: 'perf.3ms+3mp', gloss: 'to call; called them' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّه', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; they said' },
          ],
        },
        {
          id: 'qs-v3-c14-011',
          ar: '﴿أَنُؤْمِنُ لَكَ وَاتَّبَعَكَ الأَرْذَلُونَ﴾؟.',
          en: 'Shall we believe in you when the lowest of the low have followed you?"',
          tokens: [
            { surface: 'أَنُؤْمِنُ', lemma: 'آمَنَ', pos: 'verb', features: 'part+impf.1p', gloss: 'to believe; shall we believe' },
            { surface: 'لَكَ', lemma: 'لِ', pos: 'prep', features: 'prep+2ms', gloss: 'in you' },
            { surface: 'وَاتَّبَعَكَ', lemma: 'اِتَّبَعَ', pos: 'verb', features: 'conj+perf.3ms+2ms', gloss: 'to follow; while have followed you' },
            { surface: 'الأَرْذَلُونَ', lemma: 'أَرْذَل', pos: 'noun', features: 'def.nom.pl', gloss: 'the lowest, most base ones' },
          ],
        },
        {
          id: 'qs-v3-c14-012',
          ar: 'وَطَلَبُوا مِنْ نُوحٍ أَنْ يَطْرُدَ هَؤُلَاءِ الْمَسَاكِينَ.',
          en: 'They demanded that Nūḥ drive these poor believers away.',
          tokens: [
            { surface: 'وَطَلَبُوا', lemma: 'طَلَبَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to demand, ask; and demanded' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَطْرُدَ', lemma: 'طَرَدَ', pos: 'verb', features: 'impf.3ms', gloss: 'to drive away; drive away' },
            { surface: 'هَؤُلَاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'these' },
            { surface: 'الْمَسَاكِينَ', lemma: 'مِسْكِين', pos: 'noun', features: 'def.acc.pl', root: 'س ك ن', gloss: 'the poor, destitute' },
          ],
        },
        {
          id: 'qs-v3-c14-013',
          ar: 'وَلَكِنَّ نُوحاً أَبَى وَقَالَ:',
          en: 'But Nūḥ refused, saying:',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part', gloss: 'but' },
            { surface: 'نُوحاً', lemma: 'نُوح', pos: 'proper', features: 'acc', gloss: 'Nūḥ' },
            { surface: 'أَبَى', lemma: 'أَبَى', pos: 'verb', features: 'perf.3ms', gloss: 'to refuse; refused' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v3-c14-014',
          ar: '﴿وَمَا أَنَا بِطَارِدِ الْمُؤْمِنِينَ﴾.',
          en: '"I will not drive away the believers.',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'بِطَارِدِ', lemma: 'طَارِد', pos: 'noun', features: 'prep+constr', root: 'ط ر د', gloss: 'one to drive away' },
            { surface: 'الْمُؤْمِنِينَ', lemma: 'مُؤْمِن', pos: 'noun', features: 'def.gen.pl', root: 'أ م ن', gloss: 'the believers' },
          ],
        },
        {
          id: 'qs-v3-c14-015',
          ar: 'إِنَّ بَابِي لَيْسَ بَابَ مَلِكٍ،',
          en: 'My door is not the door of a king,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'بَابِي', lemma: 'بَاب', pos: 'noun', features: 'nom+1s', gloss: 'my door' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: "is not" },
            { surface: 'بَابَ', lemma: 'بَاب', pos: 'noun', features: 'acc.constr', gloss: 'the door of' },
            { surface: 'مَلِكٍ', lemma: 'مَلِك', pos: 'noun', features: 'indef.gen', gloss: 'a king' },
          ],
        },
        {
          id: 'qs-v3-c14-016',
          ar: '﴿إِنْ أَنَا إِلَّا نَذِيرٌ مُّبِينٌ﴾.',
          en: 'I am nothing but a plain warner."',
          tokens: [
            { surface: 'إِنْ', lemma: 'إِنْ', pos: 'part', features: 'neg', gloss: 'not (nothing ... but)' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'نَذِيرٌ', lemma: 'نَذِير', pos: 'noun', features: 'indef.nom', root: 'ن ذ ر', gloss: 'a warner' },
            { surface: 'مُّبِينٌ', lemma: 'مُبِين', pos: 'adj', features: 'indef.nom', gloss: 'clear, plain' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا رَفَضَ الأَغْنِيَاءُ أَنْ يُطِيعُوا نُوحًا؟',
          options: [
            'مَنَعَهُمْ كِبْرُهُمْ، وَشَغَلَتْهُمْ أَمْوَالُهُمْ وَأَوْلَادُهُمْ عَنِ التَّفْكِيرِ فِي الآخِرَةِ',
            'لِأَنَّهُمْ لَمْ يَسْمَعُوا كَلَامَهُ قَطُّ',
            'لِأَنَّهُمْ كَانُوا يَعْبُدُونَ اللَّهَ بِالْفِعْلِ',
          ],
          answer: 0,
          qEn: 'Why did the rich refuse to obey Nūḥ?',
          optionsEn: [
            'Their pride prevented them, and their wealth and children distracted them from thinking of the Hereafter',
            'Because they never heard his words at all',
            'Because they already worshiped Allah',
          ],
        },
        {
          q: 'بِمَاذَا رَدَّ نُوحٌ حِينَ طَلَبُوا مِنْهُ طَرْدَ الْمَسَاكِينِ؟',
          options: [
            'بِأَنَّهُ لَيْسَ بِطَارِدِ الْمُؤْمِنِينَ، وَإِنَّهُ لَيْسَ إِلَّا نَذِيرًا مُّبِينًا',
            'بِأَنَّهُ سَيَطْرُدُهُمْ فَوْرًا لِيُرْضِيَ الأَغْنِيَاءَ',
            'بِأَنَّهُ لَا يَعْرِفُ هَؤُلَاءِ الْمَسَاكِينَ أَصْلًا',
          ],
          answer: 0,
          qEn: 'How did Nūḥ respond when they asked him to expel the poor believers?',
          optionsEn: [
            'That he would not drive away the believers, and that he was nothing but a plain warner',
            'That he would expel them at once to please the rich',
            "That he didn't even know these poor believers",
          ],
        },
      ],
    },
    {
      en: 'Nūḥ knew these poor believers were sincere. and that Allah becomes angry if these poor believers are driven away, and then no one would help him. So Nūḥ said: "O my people, who would help me against Allah if I drove them away?"',
      sentences: [
        {
          id: 'qs-v3-c14-017',
          ar: 'وَكَانَ نُوحٌ يَعْرِفُ أَنَّ هَؤُلَاءِ الْمَسَاكِينَ مُؤْمِنُونَ مُخْلِصُونَ.',
          en: 'Nūḥ knew these poor believers were sincere.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', gloss: 'to know; knew' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'هَؤُلَاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'these' },
            { surface: 'الْمَسَاكِينَ', lemma: 'مِسْكِين', pos: 'noun', features: 'def.acc.pl', gloss: 'the poor' },
            { surface: 'مُؤْمِنُونَ', lemma: 'مُؤْمِن', pos: 'noun', features: 'indef.nom.pl', gloss: 'believers' },
            { surface: 'مُخْلِصُونَ', lemma: 'مُخْلِص', pos: 'adj', features: 'indef.nom.pl', root: 'خ ل ص', gloss: 'sincere' },
          ],
        },
        {
          id: 'qs-v3-c14-018',
          ar: 'وَأَنَّ اللَّهَ يَغْضَبُ إِذَا طُرِدَ هَؤُلَاءِ الْمَسَاكِينُ،',
          en: 'and that Allah becomes angry if these poor believers are driven away,',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'يَغْضَبُ', lemma: 'غَضِبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to become angry; becomes angry' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'adv', features: 'adv', gloss: 'if, when' },
            { surface: 'طُرِدَ', lemma: 'طَرَدَ', pos: 'verb', features: 'pass+perf.3ms', gloss: 'to drive away; are driven away' },
            { surface: 'هَؤُلَاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'these' },
            { surface: 'الْمَسَاكِينُ', lemma: 'مِسْكِين', pos: 'noun', features: 'def.nom.pl', gloss: 'the poor' },
          ],
        },
        {
          id: 'qs-v3-c14-019',
          ar: 'وَإِذَنْ لَا يَنْصُرُهُ أَحَدٌ.',
          en: 'and then no one would help him.',
          tokens: [
            { surface: 'وَإِذَنْ', lemma: 'إِذَن', pos: 'part', features: 'conj+part', root: 'ء ذ ن', gloss: 'and then' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَنْصُرُهُ', lemma: 'نَصَرَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to help; helps him' },
            { surface: 'أَحَدٌ', lemma: 'أَحَد', pos: 'noun', features: 'indef.nom', gloss: 'anyone' },
          ],
        },
        {
          id: 'qs-v3-c14-020',
          ar: 'فَقَالَ نُوحٌ:',
          en: 'So Nūḥ said:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; so said' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
          ],
        },
        {
          id: 'qs-v3-c14-021',
          ar: '﴿وَيَقَوْمِ مَن يَنصُرُنِي مِنَ اللَّهِ إِن طَرَدتُّهُمْ﴾؟.',
          en: '"O my people, who would help me against Allah if I drove them away?"',
          tokens: [
            { surface: 'وَيَ', lemma: 'يَا', pos: 'part', features: 'conj+part', gloss: 'O' },
            { surface: 'قَوْمِ', lemma: 'قَوْم', pos: 'noun', features: '1s', gloss: 'my people' },
            { surface: 'مَن', lemma: 'مَن', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'يَنصُرُنِي', lemma: 'نَصَرَ', pos: 'verb', features: 'impf.3ms+1s', gloss: 'to help; helps me' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'against' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'إِن', lemma: 'إِنْ', pos: 'part', features: 'part', gloss: 'if' },
            { surface: 'طَرَدتُّهُمْ', lemma: 'طَرَدَ', pos: 'verb', features: 'perf.1s+3mp', gloss: 'to drive away; I drove them away' },
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
        pre: 'مَا',
        post: 'بِنُوحٍ إِلَّا بَعْضُ الأَفْرَادِ.',
        en: 'None believed in Nūḥ but a handful of individuals.',
        options: ['آمَنَ', 'يُؤْمِنُ', 'آمِنْ', 'مُؤْمِن'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular -- a completed action, matching مَا\'s past-tense negation here.',
          'Imperfect -- wrong tense; the sentence narrates a completed, one-time belief.',
          'Imperative -- wrong mood; this is narration, not a command.',
          'Active participle (noun) -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ نُوحٌ: وَمَا أَنَا',
        post: 'الْمُؤْمِنِينَ.',
        en: 'Nūḥ said: I will not drive away the believers.',
        options: ['بِطَارِدِ', 'طَرَدَ', 'يَطْرُدُ', 'مَطْرُود'],
        answer: 0,
        rationales: [
          'Active participle in construct after بِ (بَاءُ الْجُحُود) -- "one to drive away," matching the printed وَمَا أَنَا بِطَارِدِ الْمُؤْمِنِينَ.',
          'Perfect verb -- wrong part of speech; this position needs a noun/participle after بِ.',
          'Imperfect verb -- wrong part of speech for the same reason.',
          'Passive participle ("driven away") -- wrong voice; Nūḥ is the one who would do the driving, not the one driven away.',
        ],
      },
      {
        type: 'cloze',
        pre: 'كَانَ نُوحٌ يَعْرِفُ أَنَّ الْمَسَاكِينَ مُؤْمِنُونَ',
        post: '.',
        en: 'Nūḥ knew the poor believers were sincere.',
        options: ['مُخْلِصُونَ', 'مُخْلِصٌ', 'أَخْلَصَ', 'إِخْلَاص'],
        answer: 0,
        rationales: [
          'Indefinite nominative plural -- agrees with the plural مُؤْمِنُونَ it describes.',
          'Singular -- wrong number; the subject الْمَسَاكِينَ/مُؤْمِنُونَ is plural.',
          'Verb (form IV, "he was sincere/devoted") -- wrong part of speech for this position.',
          'Verbal noun ("sincerity") -- wrong part of speech for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَعْمَلُ الرَّجُلُ بِيَدِهِ وَيَأْكُلُ الْحَلَالَ',
        pre: '',
        post: 'بِيَدِهِ وَيَأْكُلُ الْحَلَالَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَعْمَلُ', 'يَعْمَلُ', 'تَعْمَلُ', 'نَعْمَلُ'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَعْمَلُ الرَّجُلُ بِيَدِهِ وَيَأْكُلُ الْحَلَالَ',
        pre: '',
        post: 'بِيَدِهِ وَيَأْكُلُ الْحَلَالَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَعْمَلُونَ', 'يَعْمَلُ', 'تَعْمَلُ', 'أَعْمَلُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd/3rd feminine singular -- wrong person and gender.',
          '1st singular -- wrong person; the target is "they," not "I."',
        ],
      },
      {
        type: 'shift',
        base: 'يَنصُرُ اللَّهُ الْمُؤْمِنَ الْمُخْلِصَ',
        pre: '',
        post: 'الْمُؤْمِنَ الْمُخْلِصَ',
        targetPerson: 'أَنتَ',
        targetEn: 'you (ms)',
        options: ['تَنصُرُ', 'يَنصُرُ', 'أَنصُرُ', 'نَنصُرُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular imperfect -- matches أَنتَ.',
          '3rd masculine singular -- the base form, not shifted to "you."',
          '1st singular -- wrong person; the target is "you," not "I."',
          '1st plural -- wrong person and number.',
        ],
      },
    ],
  },
};

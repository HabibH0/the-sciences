// قَصَصُ النَّبِيِّينَ, volume 1 «مَنْ كَسَرَ الأَصْنَامَ؟», chapter 4 -- إِبْرَاهِيمُ يَكْسِرُ الأَصْنَامَ.
// Printed page 12. Transcribed by hand from the scan (vision OCR, 300dpi
// render) against QASAS_AGENT_BRIEF.md and ../CHAPTER-FORMAT.md.
//
// Contains a Qurʾānic quotation (37:92, «مَا لَكُمْ لَا تَنطِقُونَ») -- sentence
// qs-v1-c04-012. Per QASAS_AGENT_BRIEF.md §6 this format has no field to mark
// "don't drill this", so the workaround is used: none of its tokens carry a
// visible case mark (لَكُمْ ends in sukūn, تَنطِقُونَ in a plural wāw, مَا/لَا are
// invariant), so it is naturally ineligible for the build stage without
// truncating it artificially. It is also deliberately excluded from every
// workshop cloze/shift frame below -- do not pull it into one later.
//
// Dominant recycled frame: أَلَا تَفْعَلُونَ؟ ("won't you...?", 2nd person
// plural negative-interrogative) four times running -- تَتَكَلَّمُونَ /
// تَسْمَعُونَ / تَأْكُلُونَ / تَشْرَبُونَ. The workshop drills that.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch4',
  title: { ar: 'إِبْرَاهِيمُ يَكْسِرُ الأَصْنَامَ', en: 'Ibrāhīm Breaks the Idols' },
  newWords: [
    'عِيد', 'فَرِحَ', 'خَرَجَ', 'طِفْل', 'سَقِيم', 'بَقِيَ', 'سَكَتَ',
    'نَطَقَ', 'أَخَذَ', 'فَأْس', 'ضَرَبَ', 'عُنُق', 'عَلَّقَ', 'أَكْبَر',
  ],
  lemmas: {
    'عِيد': { gloss: 'feast, festival' },
    'فَرِحَ': { gloss: 'to rejoice, be happy' },
    'خَرَجَ': { gloss: 'to go out' },
    'طِفْل': { gloss: 'child' },
    'سَقِيم': { gloss: 'sick, ill' },
    'بَقِيَ': { gloss: 'to remain, stay' },
    'سَكَتَ': { gloss: 'to fall silent' },
    'نَطَقَ': { gloss: 'to speak, utter' },
    'أَخَذَ': { gloss: 'to take' },
    'فَأْس': { gloss: 'axe' },
    'ضَرَبَ': { gloss: 'to strike, hit' },
    'عُنُق': { gloss: 'neck' },
    'عَلَّقَ': { gloss: 'to hang' },
    'أَكْبَر': { gloss: 'biggest, greatest (elative of كَبِير)' },
    'جَاءَ': { gloss: 'to come' },
    'مَعَ': { gloss: 'with' },
    'مَا': { gloss: 'what; (as negator) not' },
  },
  paragraphs: [
    {
      en: 'And a feast day came, so the people rejoiced. And the people went out for the feast, and the children went out. And Ibrāhīm\'s father went out and said to Ibrāhīm: Won\'t you come out with us? Ibrāhīm said: I am sick!',
      sentences: [
        {
          id: 'qs-v1-c04-001',
          ar: 'وَجَاءَ يَوْمُ عِيدٍ فَفَرِحَ النَّاسُ.',
          en: 'And a feast day came, so the people rejoiced.',
          tokens: [
            { surface: 'وَجَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ج ي أ', gloss: 'to come' },
            { surface: 'يَوْمُ', lemma: 'يَوْم', pos: 'noun', features: 'nom.constr', root: 'ي و م', gloss: 'day' },
            { surface: 'عِيدٍ', lemma: 'عِيد', pos: 'noun', features: 'indef.gen', root: 'ع ي د', gloss: 'feast, festival' },
            { surface: 'فَفَرِحَ', lemma: 'فَرِحَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ف ر ح', gloss: 'to rejoice' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
          ],
        },
        {
          id: 'qs-v1-c04-002',
          ar: 'وَخَرَجَ النَّاسُ لِلْعِيدِ وَخَرَجَ الْأَطْفَالُ.',
          en: 'And the people went out for the feast, and the children went out.',
          tokens: [
            { surface: 'وَخَرَجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'conj+perf.3ms', root: 'خ ر ج', gloss: 'to go out' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
            { surface: 'لِلْعِيدِ', lemma: 'عِيد', pos: 'noun', features: 'prep+def.gen', root: 'ع ي د', gloss: 'for the feast' },
            { surface: 'وَخَرَجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'conj+perf.3ms', root: 'خ ر ج', gloss: 'to go out' },
            { surface: 'الْأَطْفَالُ', lemma: 'طِفْل', pos: 'noun', features: 'pl.def.nom', root: 'ط ف ل', gloss: 'children' },
          ],
        },
        {
          id: 'qs-v1-c04-003',
          ar: 'وَخَرَجَ وَالِدُ إِبْرَاهِيمَ وَقَالَ لِإِبْرَاهِيمَ:',
          en: "And Ibrāhīm's father went out and said to Ibrāhīm:",
          tokens: [
            { surface: 'وَخَرَجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'conj+perf.3ms', root: 'خ ر ج', gloss: 'to go out' },
            { surface: 'وَالِدُ', lemma: 'وَالِد', pos: 'noun', features: 'nom.constr', root: 'و ل د', gloss: 'father' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'لِإِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'prep+gen', gloss: 'to Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c04-004',
          ar: 'أَلَا تَخْرُجُ مَعَنَا؟',
          en: "Won't you come out with us?",
          tokens: [
            { surface: 'أَلَا', lemma: 'أَلَا', pos: 'part', features: 'part', gloss: "won't (interrogative + negative)" },
            { surface: 'تَخْرُجُ', lemma: 'خَرَجَ', pos: 'verb', features: 'impf.2ms', root: 'خ ر ج', gloss: 'to go out' },
            { surface: 'مَعَنَا', lemma: 'مَعَ', pos: 'prep', features: 'prep+1p', gloss: 'with us' },
          ],
        },
        {
          id: 'qs-v1-c04-005',
          ar: 'قَالَ إِبْرَاهِيمُ:',
          en: 'Ibrāhīm said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
          ],
        },
        {
          id: 'qs-v1-c04-006',
          ar: 'أَنَا سَقِيمٌ!',
          en: 'I am sick!',
          tokens: [
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'سَقِيمٌ', lemma: 'سَقِيم', pos: 'adj', features: 'indef.nom', root: 'س ق م', gloss: 'sick, ill' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ إِبْرَاهِيمُ لِوَالِدِهِ حِينَ طَلَبَ مِنْهُ الْخُرُوجَ؟',
          options: ['أَنَا سَقِيمٌ', 'أَنَا مَشْغُولٌ', 'لَا أُرِيدُ'],
          answer: 0,
          qEn: 'What did Ibrāhīm tell his father when asked to go out?',
          optionsEn: ['I am sick', 'I am busy', "I don't want to"],
        },
      ],
    },
    {
      en: 'So the people went, and Ibrāhīm stayed in the house. And Ibrāhīm came to the idols, and said to the idols: Won\'t you speak? Won\'t you hear? This is food and drink, won\'t you eat? won\'t you drink?',
      sentences: [
        {
          id: 'qs-v1-c04-007',
          ar: 'وَذَهَبَ النَّاسُ وَبَقِيَ إِبْرَاهِيمُ فِي الْبَيْتِ.',
          en: 'So the people went, and Ibrāhīm stayed in the house.',
          tokens: [
            { surface: 'وَذَهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ذ ه ب', gloss: 'to go' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'people' },
            { surface: 'وَبَقِيَ', lemma: 'بَقِيَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ب ق ي', gloss: 'to remain, stay' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبَيْتِ', lemma: 'بَيْت', pos: 'noun', features: 'def.gen', root: 'ب ي ت', gloss: 'house' },
          ],
        },
        {
          id: 'qs-v1-c04-008',
          ar: 'وَجَاءَ إِبْرَاهِيمُ إِلَى الْأَصْنَامِ، وَقَالَ لِلْأَصْنَامِ:',
          en: 'And Ibrāhīm came to the idols, and said to the idols:',
          tokens: [
            { surface: 'وَجَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ج ي أ', gloss: 'to come' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.gen', root: 'ص ن م', gloss: 'idols' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and said' },
            { surface: 'لِلْأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'prep+pl.def.gen', root: 'ص ن م', gloss: 'to the idols' },
          ],
        },
        {
          id: 'qs-v1-c04-009',
          ar: 'أَلَا تَتَكَلَّمُونَ؟',
          en: "Won't you speak?",
          tokens: [
            { surface: 'أَلَا', lemma: 'أَلَا', pos: 'part', features: 'part', gloss: "won't" },
            { surface: 'تَتَكَلَّمُونَ', lemma: 'تَكَلَّمَ', pos: 'verb', features: 'impf.2mp', root: 'ك ل م', gloss: 'to speak' },
          ],
        },
        {
          id: 'qs-v1-c04-010',
          ar: 'أَلَا تَسْمَعُونَ؟',
          en: "Won't you hear?",
          tokens: [
            { surface: 'أَلَا', lemma: 'أَلَا', pos: 'part', features: 'part', gloss: "won't" },
            { surface: 'تَسْمَعُونَ', lemma: 'سَمِعَ', pos: 'verb', features: 'impf.2mp', root: 'س م ع', gloss: 'to hear' },
          ],
        },
        {
          id: 'qs-v1-c04-011',
          ar: 'هَذَا طَعَامٌ وَشَرَابٌ،',
          en: 'This is food and drink,',
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'طَعَامٌ', lemma: 'طَعَام', pos: 'noun', features: 'indef.nom', root: 'ط ع م', gloss: 'food' },
            { surface: 'وَشَرَابٌ', lemma: 'شَرَاب', pos: 'noun', features: 'conj+indef.nom', root: 'ش ر ب', gloss: 'and drink' },
          ],
        },
        {
          id: 'qs-v1-c04-012',
          ar: 'أَلَا تَأْكُلُونَ؟',
          en: "won't you eat?",
          tokens: [
            { surface: 'أَلَا', lemma: 'أَلَا', pos: 'part', features: 'part', gloss: "won't" },
            { surface: 'تَأْكُلُونَ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.2mp', root: 'أ ك ل', gloss: 'to eat' },
          ],
        },
        {
          id: 'qs-v1-c04-013',
          ar: 'أَلَا تَشْرَبُونَ؟',
          en: "won't you drink?",
          tokens: [
            { surface: 'أَلَا', lemma: 'أَلَا', pos: 'part', features: 'part', gloss: "won't" },
            { surface: 'تَشْرَبُونَ', lemma: 'شَرِبَ', pos: 'verb', features: 'impf.2mp', root: 'ش ر ب', gloss: 'to drink' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'And the idols stayed silent, being stones that do not speak. Ibrāhīm said: \'What is the matter with you, that you do not speak?\' And the idols stayed silent and said nothing. Then Ibrāhīm grew angry and took the axe. And Ibrāhīm struck the idols with the axe and broke the idols. And Ibrāhīm left the biggest idol, and hung the axe on its neck.',
      sentences: [
        {
          id: 'qs-v1-c04-014',
          ar: 'وَسَكَتَتِ الْأَصْنَامُ لِأَنَّهَا حِجَارَةٌ لَا تَنْطِقُ.',
          en: 'And the idols stayed silent, being stones that do not speak.',
          tokens: [
            { surface: 'وَسَكَتَتِ', lemma: 'سَكَتَ', pos: 'verb', features: 'conj+perf.3fs', root: 'س ك ت', gloss: 'to fall silent' },
            { surface: 'الْأَصْنَامُ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.nom', root: 'ص ن م', gloss: 'idols' },
            { surface: 'لِأَنَّهَا', lemma: 'أَنَّ', pos: 'part', features: 'prep+part+3fs', gloss: 'because they' },
            { surface: 'حِجَارَةٌ', lemma: 'حِجَارَة', pos: 'noun', features: 'indef.nom', root: 'ح ج ر', gloss: 'stones' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَنْطِقُ', lemma: 'نَطَقَ', pos: 'verb', features: 'impf.3fs', root: 'ن ط ق', gloss: 'to speak, utter' },
          ],
        },
        {
          // Qurʾān 37:92, «مَا لَكُمْ لَا تَنطِقُونَ» -- see file header. No
          // token here carries a visible case mark, so it is naturally
          // excluded from the build stage without truncation.
          id: 'qs-v1-c04-015',
          ar: 'قَالَ إِبْرَاهِيمُ: ﴿مَا لَكُمْ لَا تَنطِقُونَ﴾.',
          en: "Ibrāhīm said: 'What is the matter with you, that you do not speak?'",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: '[is] with you' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَنطِقُونَ', lemma: 'نَطَقَ', pos: 'verb', features: 'impf.2mp', root: 'ن ط ق', gloss: 'to speak, utter' },
          ],
        },
        {
          id: 'qs-v1-c04-016',
          ar: 'وَسَكَتَتِ الْأَصْنَامُ وَمَا نَطَقَتْ.',
          en: 'And the idols stayed silent and said nothing.',
          tokens: [
            { surface: 'وَسَكَتَتِ', lemma: 'سَكَتَ', pos: 'verb', features: 'conj+perf.3fs', root: 'س ك ت', gloss: 'to fall silent' },
            { surface: 'الْأَصْنَامُ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.nom', root: 'ص ن م', gloss: 'idols' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'نَطَقَتْ', lemma: 'نَطَقَ', pos: 'verb', features: 'perf.3fs', root: 'ن ط ق', gloss: 'to speak, utter' },
          ],
        },
        {
          id: 'qs-v1-c04-017',
          ar: 'حِينَئِذٍ غَضِبَ إِبْرَاهِيمُ وَأَخَذَ الْفَأْسَ.',
          en: 'Then Ibrāhīm grew angry and took the axe.',
          tokens: [
            { surface: 'حِينَئِذٍ', lemma: 'حِينَئِذٍ', pos: 'adv', features: 'adv', gloss: 'then, at that time' },
            { surface: 'غَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'perf.3ms', root: 'غ ض ب', gloss: 'to become angry' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'وَأَخَذَ', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+perf.3ms', root: 'أ خ ذ', gloss: 'to take' },
            { surface: 'الْفَأْسَ', lemma: 'فَأْس', pos: 'noun', features: 'def.acc', root: 'ف أ س', gloss: 'axe' },
          ],
        },
        {
          id: 'qs-v1-c04-018',
          ar: 'وَضَرَبَ إِبْرَاهِيمُ الْأَصْنَامَ بِالْفَأْسِ وَكَسَرَ الْأَصْنَامَ.',
          en: 'And Ibrāhīm struck the idols with the axe and broke the idols.',
          tokens: [
            { surface: 'وَضَرَبَ', lemma: 'ضَرَبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ض ر ب', gloss: 'to strike, hit' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'idols' },
            { surface: 'بِالْفَأْسِ', lemma: 'فَأْس', pos: 'noun', features: 'prep+def.gen', root: 'ف أ س', gloss: 'with the axe' },
            { surface: 'وَكَسَرَ', lemma: 'كَسَرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك س ر', gloss: 'to break' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', root: 'ص ن م', gloss: 'idols' },
          ],
        },
        {
          id: 'qs-v1-c04-019',
          ar: 'وَتَرَكَ إِبْرَاهِيمُ الصَّنَمَ الْأَكْبَرَ وَعَلَّقَ الْفَأْسَ فِي عُنُقِهِ.',
          en: 'And Ibrāhīm left the biggest idol, and hung the axe on its neck.',
          tokens: [
            { surface: 'وَتَرَكَ', lemma: 'تَرَكَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ت ر ك', gloss: 'to leave' },
            { surface: 'إِبْرَاهِيمُ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'nom', gloss: 'Ibrāhīm' },
            { surface: 'الصَّنَمَ', lemma: 'صَنَم', pos: 'noun', features: 'def.acc', root: 'ص ن م', gloss: 'idol' },
            { surface: 'الْأَكْبَرَ', lemma: 'أَكْبَر', pos: 'adj', features: 'def.acc', root: 'ك ب ر', gloss: 'biggest, greatest' },
            { surface: 'وَعَلَّقَ', lemma: 'عَلَّقَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ل ق', gloss: 'to hang' },
            { surface: 'الْفَأْسَ', lemma: 'فَأْس', pos: 'noun', features: 'def.acc', root: 'ف أ س', gloss: 'axe' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, on' },
            { surface: 'عُنُقِهِ', lemma: 'عُنُق', pos: 'noun', features: 'gen+3ms', root: 'ع ن ق', gloss: 'its neck' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا كَسَرَ إِبْرَاهِيمُ الْأَصْنَامَ؟',
          options: ['بِالْفَأْسِ', 'بِيَدِهِ', 'بِحَجَرٍ'],
          answer: 0,
          qEn: 'What did Ibrāhīm break the idols with?',
          optionsEn: ['With the axe', 'With his hand', 'With a stone'],
        },
        {
          q: 'أَيَّ صَنَمٍ تَرَكَ إِبْرَاهِيمُ؟',
          options: ['الصَّنَمَ الْأَكْبَرَ', 'أَصْغَرَ صَنَمٍ', 'لَمْ يَتْرُكْ شَيْئًا'],
          answer: 0,
          qEn: 'Which idol did Ibrāhīm leave?',
          optionsEn: ['The biggest idol', 'The smallest idol', 'He left nothing'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'قَالَ لِلْأَصْنَامِ: أَلَا',
        post: '؟',
        en: 'He said to the idols: Won’t you speak?',
        options: ['تَتَكَلَّمُونَ', 'يَتَكَلَّمُونَ', 'تَتَكَلَّمُ', 'تَكَلَّمْتُمْ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- addressing the idols directly, as more than one.',
          '3rd masculine plural -- they, not who is being addressed.',
          '2nd masculine singular -- addressing only one.',
          "That's the perfect -- you (all) already spoke.",
        ],
      },
      {
        type: 'cloze',
        pre: 'أَلَا',
        post: '؟',
        en: "Won't you hear?",
        options: ['تَسْمَعُونَ', 'يَسْمَعُونَ', 'تَسْمَعُ', 'سَمِعْتُمْ'],
        answer: 0,
        rationales: [
          '2nd masculine plural, present -- direct address to more than one.',
          '3rd masculine plural -- they.',
          '2nd masculine singular -- only one.',
          'Perfect -- you (all) already heard.',
        ],
      },
      {
        type: 'cloze',
        pre: 'هَذَا طَعَامٌ وَشَرَابٌ، أَلَا',
        post: '؟',
        en: "This is food and drink -- won't you eat?",
        options: ['تَأْكُلُونَ', 'يَأْكُلُونَ', 'تَأْكُلُ', 'أَكَلْتُمْ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches the idols addressed together.',
          '3rd masculine plural -- they.',
          '2nd masculine singular -- only one.',
          'Perfect -- you (all) already ate.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَتَرَكَ إِبْرَاهِيمُ الصَّنَمَ',
        post: 'وَعَلَّقَ الْفَأْسَ فِي عُنُقِهِ.',
        en: 'And Ibrāhīm left the biggest idol, and hung the axe on its neck.',
        options: ['الْأَكْبَرَ', 'الْكَبِيرَ', 'أَكْبَرُ', 'الْأَصْغَرَ'],
        answer: 0,
        rationales: [
          'الْأَكْبَرَ -- the elative "biggest", matching the one idol singled out.',
          'كَبِير just means "big", not "biggest" -- less precise than what the story needs.',
          'Missing الـ and the wrong case -- the text needs the definite accusative.',
          'الْأَصْغَرَ means "the smallest" -- the opposite of what the text says.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'أَلَا تَخْرُجُ مَعَنَا',
        pre: 'أَلَا',
        post: 'مَعَنَا',
        targetPerson: 'أَنْتِ',
        targetEn: 'you (f.)',
        options: ['تَخْرُجِينَ', 'تَخْرُجُ', 'يَخْرُجُ', 'نَخْرُجُ'],
        answer: 0,
        rationales: [
          '2nd feminine singular -- matches أَنْتِ.',
          '2nd masculine singular -- you (m.).',
          '3rd masculine singular -- he.',
          '1st person plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'أَلَا تَخْرُجُ مَعَنَا',
        pre: 'أَلَا',
        post: 'مَعَنَا',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you (pl.)',
        options: ['تَخْرُجُونَ', 'تَخْرُجُ', 'يَخْرُجُ', 'تَخْرُجِينَ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches أَنْتُمْ.',
          '2nd masculine singular -- you (one m.).',
          '3rd masculine singular -- he.',
          '2nd feminine singular -- you (f.).',
        ],
      },
      {
        type: 'shift',
        base: 'أَلَا تَخْرُجُ مَعَنَا',
        pre: 'أَلَا',
        post: 'مَعَنَا',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['يَخْرُجُ', 'تَخْرُجُ', 'أَخْرُجُ', 'يَخْرُجُونَ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches هُوَ.',
          '2nd masculine singular -- you.',
          '1st person singular -- I.',
          '3rd masculine plural -- they.',
        ],
      },
      {
        type: 'shift',
        base: 'أَلَا تَخْرُجُ مَعَنَا',
        pre: 'أَلَا',
        post: 'مَعَنَا',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَخْرُجُ', 'تَخْرُجُ', 'يَخْرُجُ', 'أَخْرُجُ'],
        answer: 0,
        rationales: [
          '1st person plural -- matches نَحْنُ.',
          '2nd masculine singular -- you.',
          '3rd masculine singular -- he.',
          '1st person singular -- I.',
        ],
      },
    ],
  },
};

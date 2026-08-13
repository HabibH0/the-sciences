// قَصَصُ النَّبِيِّينَ, volume 6 (Mūsā, part 1), chapter 4 -- فِرْعَوْنُ مِصْرَ.
// Printed pages 115 (heading, partway down, right after ch3's closing
// line "وَنَسِيَ كَثِيرٌ مِنَ النَّاسِ...") - 116 - 117 (top only), ending right
// before ch5's heading «ذَبْحُ الْأَطْفَالِ» which opens partway down page
// 117. Transcribed by hand from the scan (vision OCR, 200dpi render)
// against ../CHAPTER-FORMAT.md.
//
// A portrait chapter: first the Pharaonic dynasty in general, then one
// particular king's racist "Copts are born to rule, Israel is born to
// serve" ideology, then his personal tyranny and false claim to divinity
// (two Qur'an citations, 79:24 and 43:51), and finally his demand for
// worship and Banū Isrāʾīl's refusal -- which sets up ch5's massacre.
// Nadwi repeats the frame sentence "وَجَاءَ عَلَى عَرْشِ مِصْرَ مَلِكٌ جَبَّارٌ
// جِدًّا" verbatim at the head of two consecutive paragraphs (qs-v6-c04-002
// and -005) -- a deliberate rhetorical repetition, not a transcription
// duplicate; both are kept exactly as printed.
//
// Grammar / lexical notes:
//   -- «القِبْط» (qs-v6-c04-006/007) is printed partly vowelled inside
//      guillemets, the book's own label convention (see qasas-v6/ch3's
//      note on «بني إسرائيل»). Tagged under the already-taught lemma
//      قِبْطِيّ (qasas-v6/ch11) in its collective sense "the Copts", rather
//      than inventing a second entry.
//   -- The two Qur'an citations (79:24 «أَنَا رَبُّكُمُ الْأَعْلَى» and 43:51
//      «أَلَيْسَ لِي مُلْكُ مِصْرَ...أَفَلَا تُبْصِرُونَ») are each introduced by
//      Nadwi's own narrative + a colon, split into their own sentence
//      entries per the قصص-v6/ch2 colon precedent; 43:51 is further split
//      at its own natural pause points (three fragments) per
//      QASAS_AGENT_BRIEF.md §6 / the qasas-v2/ch22 precedent.
//   -- مُعَامَلَةَ (qs-v6-c04-009) is the verbal noun of the newly-taught
//      عَامَلَ and reuses that lemma rather than a separate entry.
//   -- يُبْغِضُونَ (qs-v6-c04-001) reuses the already-taught lemma أَبْغَضَ
//      ("to hate, detest"); بُغْضاً in the same sentence is a distinct
//      cognate-accusative noun (بُغْض, "hatred") and is newly taught.
//   -- Shared lexicon check (cross-checked against known_lemmas.json,
//      volumes 1-3 + this volume's chapters so far): جَاءَ, عَلَى, عَرْش
//      (qasas-v1/ch1 context), مِصْرَ, فِرْعَوْن (qasas-v6/ch6), إِسْرَائِيل
//      (qasas-v6/ch6), أَبْغَضَ, شَدِيد, مَلِك (qasas-v1/ch10), جَبَّار
//      (qasas-v6/ch12), جِدّ (qasas-v1/ch1, adverbial جِدًّا), كَانَ, لَا,
//      رَأَى (qasas-v1/ch2), أَنَّ, وَلَد (qasas-v1/ch3), نَبِيّ, بَيْت
//      (qasas-v1/ch1), يُوسُف, كَرِيم, بَلْ, بَشَر (qasas-v1/ch12), اِسْتَحَقَّ
//      (qasas-v2/ch9), رَحْمَة (qasas-v2/ch9), قِبْطِيّ (qasas-v6/ch11), مَلِك
//      pl مُلُوك, خَلَقَ (qasas-v1/ch9), عَبْد (qasas-v2/ch9), اِسْتَخْدَمَ
//      (qasas-v6/ch11), حِمَار (qasas-v6/ch11), دَابَّة (qasas-v6/ch11),
//      إِنْسَان (qasas-v2/ch1), أَعْطَى (qasas-v3/ch4), يَوْم (qasas-v6/ch22),
//      أَحَد (qasas-v1/ch9), آمَنَ (qasas-v3/ch14), اللَّه, أَنَا, رَبّ
//      (qasas-v1/ch7), أَعْلَى (qasas-v3/ch13), مُلْك (qasas-v2/ch11), لِ,
//      هَذِهِ, نَهْر (qasas-v1/ch12), جَرَى (qasas-v1/ch13), أَبْصَرَ
//      (qasas-v1/ch11), قَصْر (qasas-v2/ch7), قُوَّة (qasas-v6/ch17), غَضِبَ
//      (qasas-v1/ch3), عَلِمَ (qasas-v1/ch5), دَعَا (qasas-v1/ch8), عِبَادَة
//      (qasas-v1/ch8), سَجَدَ (qasas-v1/ch1), أَطَاعَ (qasas-v2/ch10), رَسُول
//      (qasas-v2/ch15), اِشْتَدَّ (qasas-v2/ch2), غَضَب (qasas-v2/ch8)
//      are all already taught (or reused per the notes above) and are NOT
//      re-listed in newWords here.
//
// 12 new words (بُغْض، إِنْصَاف، نَوْع، خَدَمَ، عَامَلَ، قُوت، مُتَكَبِّر، فَوْقَ،
// مَغْرُور، تَحْتَ، خَلِيفَة، نَمْرُود، بَابِل، اِمْتَنَعَ -- 14 counting proper
// nouns; a dense exposition chapter). No page footnotes (book_note) on
// these pages.
export const CHAPTER = {
  id: 'ch4',
  title: { ar: 'فِرْعَوْنُ مِصْرَ', en: 'Pharaoh of Egypt' },
  newWords: ['بُغْض', 'إِنْصَاف', 'نَوْع', 'خَدَمَ', 'عَامَلَ', 'قُوت', 'مُتَكَبِّر', 'فَوْقَ', 'مَغْرُور', 'تَحْتَ', 'خَلِيفَة', 'نَمْرُود', 'بَابِل', 'اِمْتَنَعَ'],
  lemmas: {
    بُغْض: { gloss: 'hatred' },
    إِنْصَاف: { gloss: 'fairness, justice' },
    نَوْع: { gloss: 'kind, type' },
    خَدَمَ: { gloss: 'to serve' },
    عَامَلَ: { gloss: 'to treat, deal with' },
    قُوت: { gloss: 'sustenance, daily food' },
    مُتَكَبِّر: { gloss: 'arrogant, haughty' },
    فَوْقَ: { gloss: 'above, over' },
    مَغْرُور: { gloss: 'deluded, deceived (by)' },
    تَحْتَ: { gloss: 'beneath, under' },
    خَلِيفَة: { gloss: 'successor' },
    نَمْرُود: { gloss: 'Nimrod' },
    بَابِل: { gloss: 'Babylon' },
    اِمْتَنَعَ: { gloss: 'to refuse, abstain' },
  },
  paragraphs: [
    {
      en: 'Pharaohs ("kings of Egypt") came to Egypt\'s throne who hated Banū Isrāʾīl with intense hatred. A most tyrannical king came to Egypt\'s throne: he did not see Banū Isrāʾīl as being among the children of the prophets or of the household of Yūsuf, Egypt\'s noble king -- rather, he did not see them as human beings deserving mercy and fairness at all.',
      sentences: [
        {
          id: 'qs-v6-c04-001',
          ar: 'وَجَاءَ عَلَى عَرْشِ مِصْرَ فَرَاعِنَةُ «مُلُوكُ مِصْرَ» يُبْغِضُونَ بَنِي إِسْرَائِيلَ بُغْضاً شَدِيداً.',
          en: 'Pharaohs ("kings of Egypt") came to Egypt\'s throne who hated Banū Isrāʾīl with intense hatred.',
          tokens: [
            { surface: 'وَجَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to come; came' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'عَرْشِ', lemma: 'عَرْش', pos: 'noun', features: 'constr.gen', gloss: 'the throne of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'فَرَاعِنَةُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'indef.nom.pl', gloss: 'Pharaohs' },
            { surface: 'مُلُوكُ', lemma: 'مَلِك', pos: 'noun', features: 'constr.nom.pl', gloss: '(kings of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: "Egypt)" },
            { surface: 'يُبْغِضُونَ', lemma: 'أَبْغَضَ', pos: 'verb', features: 'impf.3mp', gloss: 'to hate; who hated' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', root: 'ب ن و', gloss: 'the children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'بُغْضاً', lemma: 'بُغْض', pos: 'noun', features: 'indef.acc', root: 'ب غ ض', gloss: 'with hatred' },
            { surface: 'شَدِيداً', lemma: 'شَدِيد', pos: 'adj', features: 'indef.acc', gloss: 'intense' },
          ],
        },
        {
          id: 'qs-v6-c04-002',
          ar: 'وَجَاءَ عَلَى عَرْشِ مِصْرَ مَلِكٌ جَبَّارٌ جِدًّا.',
          en: "A most tyrannical king came to Egypt's throne.",
          tokens: [
            { surface: 'وَجَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to come; came' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'عَرْشِ', lemma: 'عَرْش', pos: 'noun', features: 'constr.gen', gloss: 'the throne of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'مَلِكٌ', lemma: 'مَلِك', pos: 'noun', features: 'indef.nom', gloss: 'a king' },
            { surface: 'جَبَّارٌ', lemma: 'جَبَّار', pos: 'adj', features: 'indef.nom', gloss: 'tyrannical' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very, most' },
          ],
        },
        {
          id: 'qs-v6-c04-003',
          ar: 'فَكَانَ لا يَرَى أَنَّ بَنِي إِسْرَائِيلَ مِنْ أَوْلَادِ الْأَنْبِيَاءِ وَأَنَّهُمْ مِنْ بَيْتِ يُوسُفَ مَلِكِ مِصْرَ الْكَرِيمِ.',
          en: "He did not see Banū Isrāʾīl as being among the children of the prophets, or as being of the household of Yūsuf, Egypt's noble king.",
          tokens: [
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and he was' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', root: 'ر أ ي', gloss: 'to see, regard' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', root: 'ب ن و', gloss: 'the children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'أَوْلَادِ', lemma: 'وَلَد', pos: 'noun', features: 'pl.constr.gen', gloss: 'the children of' },
            { surface: 'الْأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'def.pl.gen', gloss: 'the prophets' },
            { surface: 'وَأَنَّهُمْ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part+3mp', gloss: 'and that they' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'بَيْتِ', lemma: 'بَيْت', pos: 'noun', features: 'constr.gen', gloss: 'the household of' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
            { surface: 'مَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'constr.gen', gloss: 'king of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'الْكَرِيمِ', lemma: 'كَرِيم', pos: 'adj', features: 'def.gen', gloss: 'the noble' },
          ],
        },
        {
          id: 'qs-v6-c04-004',
          ar: 'بَلْ كَانَ لا يَرَى أَنَّهُمْ بَشَرٌ يَسْتَحِقُّونَ الرَّحْمَةَ وَالْإِنْصَافَ.',
          en: 'Rather, he did not even see them as human beings deserving mercy and fairness.',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', root: 'ر أ ي', gloss: 'to see, regard' },
            { surface: 'أَنَّهُمْ', lemma: 'أَنَّ', pos: 'part', features: 'part+3mp', gloss: 'that they' },
            { surface: 'بَشَرٌ', lemma: 'بَشَر', pos: 'noun', features: 'indef.nom', gloss: 'human beings' },
            { surface: 'يَسْتَحِقُّونَ', lemma: 'اِسْتَحَقَّ', pos: 'verb', features: 'impf.3mp', gloss: 'to deserve; deserving' },
            { surface: 'الرَّحْمَةَ', lemma: 'رَحْمَة', pos: 'noun', features: 'def.acc', gloss: 'mercy' },
            { surface: 'وَالْإِنْصَافَ', lemma: 'إِنْصَاف', pos: 'noun', features: 'conj+def.acc', root: 'ن ص ف', gloss: 'and fairness' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ الْمَلِكُ الْجَبَّارُ يَرَى بَنِي إِسْرَائِيلَ؟',
          options: ['لا يَرَاهُمْ بَشَراً يَسْتَحِقُّونَ الرَّحْمَةَ وَالْإِنْصَافَ', 'يَرَاهُمْ أَقَارِبَهُ', 'يَرَاهُمْ حُكَّاماً لِمِصْرَ'],
          answer: 0,
          qEn: 'How did the tyrannical king regard Banū Isrāʾīl?',
          optionsEn: ['He did not even see them as human beings deserving mercy and fairness', 'He saw them as his relatives', 'He saw them as rulers of Egypt'],
        },
      ],
    },
    {
      en: 'A most tyrannical king came to Egypt\'s throne: he believed that his own people, "the Copts," were one kind, and Banū Isrāʾīl another kind entirely -- the Copts were of the kind of kings, created to rule, while Banū Isrāʾīl were of the kind of slaves, created to serve. Pharaoh treated Banū Isrāʾīl the way one treats donkeys and beasts of burden, which a man puts to work and gives nothing but their daily feed.',
      sentences: [
        {
          id: 'qs-v6-c04-005',
          ar: 'وَجَاءَ عَلَى عَرْشِ مِصْرَ مَلِكٌ جَبَّارٌ جِدًّا.',
          en: "A most tyrannical king came to Egypt's throne.",
          tokens: [
            { surface: 'وَجَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to come; came' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'عَرْشِ', lemma: 'عَرْش', pos: 'noun', features: 'constr.gen', gloss: 'the throne of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'مَلِكٌ', lemma: 'مَلِك', pos: 'noun', features: 'indef.nom', gloss: 'a king' },
            { surface: 'جَبَّارٌ', lemma: 'جَبَّار', pos: 'adj', features: 'indef.nom', gloss: 'tyrannical' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very, most' },
          ],
        },
        {
          id: 'qs-v6-c04-006',
          ar: 'وَكَانَ يَرَى أَنَّ قَوْمَهُ «القِبْط» مِنْ نَوْعٍ، وَأَنَّ بَنِي إِسْرَائِيلَ مِنْ نَوْعٍ آخَرَ.',
          en: 'He believed that his own people, "the Copts," were one kind, and that Banū Isrāʾīl were another kind.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', root: 'ر أ ي', gloss: 'to see, believe' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'قَوْمَهُ', lemma: 'قَوْم', pos: 'noun', features: 'acc+3ms', gloss: 'his people' },
            { surface: 'القِبْط', lemma: 'قِبْطِيّ', pos: 'noun', features: 'def', gloss: '(the Copts)' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'نَوْعٍ', lemma: 'نَوْع', pos: 'noun', features: 'indef.gen', root: 'ن و ع', gloss: 'a kind' },
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', root: 'ب ن و', gloss: 'the children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'نَوْعٍ', lemma: 'نَوْع', pos: 'noun', features: 'indef.gen', root: 'ن و ع', gloss: 'a kind' },
            { surface: 'آخَرَ', lemma: 'آخَر', pos: 'adj', features: 'indef.gen', gloss: 'another' },
          ],
        },
        {
          id: 'qs-v6-c04-007',
          ar: 'الْقِبْطُ مِنْ نَوْعِ الْمُلُوكِ خُلِقُوا لِيَحْكُمُوا.',
          en: 'The Copts were of the kind of kings, created to rule.',
          tokens: [
            { surface: 'الْقِبْطُ', lemma: 'قِبْطِيّ', pos: 'noun', features: 'def.nom', gloss: 'the Copts' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'نَوْعِ', lemma: 'نَوْع', pos: 'noun', features: 'constr.gen', root: 'ن و ع', gloss: 'the kind of' },
            { surface: 'الْمُلُوكِ', lemma: 'مَلِك', pos: 'noun', features: 'def.gen.pl', gloss: 'kings' },
            { surface: 'خُلِقُوا', lemma: 'خَلَقَ', pos: 'verb', features: 'pass+perf.3mp', gloss: 'to create; were created' },
            { surface: 'لِيَحْكُمُوا', lemma: 'حَكَمَ', pos: 'verb', features: 'prep+impf.3mp', gloss: 'to rule; to rule' },
          ],
        },
        {
          id: 'qs-v6-c04-008',
          ar: 'وَبَنُو إِسْرَائِيلَ مِنْ نَوْعِ الْعَبِيدِ خُلِقُوا لِيَخْدِمُوا.',
          en: 'while Banū Isrāʾīl were of the kind of slaves, created to serve.',
          tokens: [
            { surface: 'وَبَنُو', lemma: 'اِبْن', pos: 'noun', features: 'conj+pl.constr.nom', root: 'ب ن و', gloss: 'and the children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'نَوْعِ', lemma: 'نَوْع', pos: 'noun', features: 'constr.gen', root: 'ن و ع', gloss: 'the kind of' },
            { surface: 'الْعَبِيدِ', lemma: 'عَبْد', pos: 'noun', features: 'def.gen.pl', gloss: 'slaves' },
            { surface: 'خُلِقُوا', lemma: 'خَلَقَ', pos: 'verb', features: 'pass+perf.3mp', gloss: 'to create; were created' },
            { surface: 'لِيَخْدِمُوا', lemma: 'خَدَمَ', pos: 'verb', features: 'prep+impf.3mp', root: 'خ د م', gloss: 'to serve; to serve' },
          ],
        },
        {
          id: 'qs-v6-c04-009',
          ar: 'وَكَانَ فِرْعَوْنُ يُعَامِلُ بَنِي إِسْرَائِيلَ مُعَامَلَةَ الْحَمِيرِ وَالدَّوَابِّ يَسْتَخْدِمُهَا الْإِنْسَانُ وَلَا يُعْطِيهَا إِلَّا قُوتَ يَوْمِهَا.',
          en: 'Pharaoh treated Banū Isrāʾīl the way one treats donkeys and beasts of burden, which a man puts to work and gives nothing but their daily feed.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'يُعَامِلُ', lemma: 'عَامَلَ', pos: 'verb', features: 'impf.3ms', root: 'ع م ل', gloss: 'to treat; treating' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', root: 'ب ن و', gloss: 'the children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'مُعَامَلَةَ', lemma: 'عَامَلَ', pos: 'noun', features: 'acc.constr', root: 'ع م ل', gloss: 'the treatment of' },
            { surface: 'الْحَمِيرِ', lemma: 'حِمَار', pos: 'noun', features: 'def.gen.pl', gloss: 'donkeys' },
            { surface: 'وَالدَّوَابِّ', lemma: 'دَابَّة', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and beasts of burden' },
            { surface: 'يَسْتَخْدِمُهَا', lemma: 'اِسْتَخْدَمَ', pos: 'verb', features: 'impf.3ms+3fs', gloss: 'to employ; puts them to work' },
            { surface: 'الْإِنْسَانُ', lemma: 'إِنْسَان', pos: 'noun', features: 'def.nom', gloss: 'man' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُعْطِيهَا', lemma: 'أَعْطَى', pos: 'verb', features: 'impf.3ms+3fs', gloss: 'to give; gives them' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'قُوتَ', lemma: 'قُوت', pos: 'noun', features: 'acc.constr', root: 'ق و ت', gloss: 'the sustenance of' },
            { surface: 'يَوْمِهَا', lemma: 'يَوْم', pos: 'noun', features: 'gen+3fs', gloss: 'their day' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ يَرَى فِرْعَوْنُ فِي الْقِبْطِ وَبَنِي إِسْرَائِيلَ؟',
          options: ['أَنَّ الْقِبْطَ مِنْ نَوْعِ الْمُلُوكِ وَبَنِي إِسْرَائِيلَ مِنْ نَوْعِ الْعَبِيدِ', 'أَنَّهُمَا نَوْعٌ وَاحِدٌ', 'أَنَّ بَنِي إِسْرَائِيلَ هُمُ الْمُلُوكُ'],
          answer: 0,
          qEn: 'What did Pharaoh believe about the Copts and Banū Isrāʾīl?',
          optionsEn: ['That the Copts were the kind of kings and Banū Isrāʾīl the kind of slaves', 'That they were one and the same kind', 'That Banū Isrāʾīl were the kings'],
        },
        {
          q: 'كَيْفَ كَانَ فِرْعَوْنُ يُعَامِلُ بَنِي إِسْرَائِيلَ؟',
          options: ['مُعَامَلَةَ الْحَمِيرِ وَالدَّوَابِّ', 'مُعَامَلَةَ الضُّيُوفِ الْكِرَامِ', 'مُعَامَلَةَ إِخْوَتِهِ'],
          answer: 0,
          qEn: 'How did Pharaoh treat Banū Isrāʾīl?',
          optionsEn: ['The way one treats donkeys and beasts of burden', 'As honored guests', 'As his own brothers'],
        },
      ],
    },
    {
      en: 'Pharaoh was a tyrannical, arrogant king who saw no one above him. He did not believe in Allah; rather he would say, "I am your lord, the most high." He was deluded by his dominion, his palaces, and his strength, and would say, "Is not the kingdom of Egypt mine, and these rivers flowing beneath me? Do you then not see?" It was as if he were a successor to Nimrod, king of Babylon -- he would grow angry if he learned of anyone who saw someone above him.',
      sentences: [
        {
          id: 'qs-v6-c04-010',
          ar: 'وَكَانَ فِرْعَوْنُ مَلِكاً جَبَّاراً مُتَكَبِّراً لا يَرَى فَوْقَهُ أَحَداً.',
          en: 'Pharaoh was a tyrannical, arrogant king who saw no one above him.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'مَلِكاً', lemma: 'مَلِك', pos: 'noun', features: 'indef.acc', gloss: 'a king' },
            { surface: 'جَبَّاراً', lemma: 'جَبَّار', pos: 'adj', features: 'indef.acc', gloss: 'tyrannical' },
            { surface: 'مُتَكَبِّراً', lemma: 'مُتَكَبِّر', pos: 'adj', features: 'indef.acc', root: 'ك ب ر', gloss: 'arrogant' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', root: 'ر أ ي', gloss: 'to see' },
            { surface: 'فَوْقَهُ', lemma: 'فَوْقَ', pos: 'adv', features: 'acc+3ms', root: 'ف و ق', gloss: 'above him' },
            { surface: 'أَحَداً', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone' },
          ],
        },
        {
          id: 'qs-v6-c04-011',
          ar: 'وَكَانَ لا يُؤْمِنُ بِاللَّهِ بَلْ كَانَ يَقُولُ:',
          en: 'He did not believe in Allah; rather he would say:',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُؤْمِنُ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.3ms', gloss: 'to believe' },
            { surface: 'بِاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'in Allah' },
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; would' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', root: 'ق و ل', gloss: 'to say; say' },
          ],
        },
        {
          id: 'qs-v6-c04-012',
          ar: '﴿أَنَا رَبُّكُمُ الْأَعْلَى﴾.',
          en: '"I am your lord, the most high."',
          tokens: [
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'رَبُّكُمُ', lemma: 'رَبّ', pos: 'noun', features: 'nom+2mp', gloss: 'your lord' },
            { surface: 'الْأَعْلَى', lemma: 'أَعْلَى', pos: 'adj', features: 'def.nom', gloss: 'the most high' },
          ],
        },
        {
          id: 'qs-v6-c04-013',
          ar: 'وَكَانَ مَغْرُوراً بِمُلْكِهِ وَقُصُورِهِ وَقُوَّتِهِ وَيَقُولُ:',
          en: 'He was deluded by his dominion, his palaces, and his strength, and would say:',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'مَغْرُوراً', lemma: 'مَغْرُور', pos: 'adj', features: 'indef.acc', root: 'غ ر ر', gloss: 'deluded' },
            { surface: 'بِمُلْكِهِ', lemma: 'مُلْك', pos: 'noun', features: 'prep+gen+3ms', gloss: 'by his dominion' },
            { surface: 'وَقُصُورِهِ', lemma: 'قَصْر', pos: 'noun', features: 'conj+gen.pl+3ms', gloss: 'and his palaces' },
            { surface: 'وَقُوَّتِهِ', lemma: 'قُوَّة', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his strength' },
            { surface: 'وَيَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ق و ل', gloss: 'to say; and says' },
          ],
        },
        {
          id: 'qs-v6-c04-014',
          ar: '﴿أَلَيْسَ لِي مُلْكُ مِصْرَ',
          en: '"Is not the kingdom of Egypt mine,',
          tokens: [
            { surface: 'أَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'part+perf.3ms', gloss: 'to not be; is...not?' },
            { surface: 'لِي', lemma: 'لِ', pos: 'prep', features: 'prep+1s', gloss: 'mine' },
            { surface: 'مُلْكُ', lemma: 'مُلْك', pos: 'noun', features: 'nom.constr', gloss: 'the kingdom of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v6-c04-015',
          ar: 'وَهَذِهِ الْأَنْهَارُ تَجْرِي مِن تَحْتِي',
          en: 'and these rivers flowing beneath me?',
          tokens: [
            { surface: 'وَهَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'conj+dem.f', gloss: 'and these' },
            { surface: 'الْأَنْهَارُ', lemma: 'نَهْر', pos: 'noun', features: 'def.pl.nom', gloss: 'the rivers' },
            { surface: 'تَجْرِي', lemma: 'جَرَى', pos: 'verb', features: 'impf.3fs', gloss: 'to flow; flowing' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'تَحْتِي', lemma: 'تَحْتَ', pos: 'adv', features: 'gen+1s', root: 'ت ح ت', gloss: 'beneath me' },
          ],
        },
        {
          id: 'qs-v6-c04-016',
          ar: 'أَفَلَا تُبْصِرُونَ﴾.',
          en: 'Do you then not see?"',
          tokens: [
            { surface: 'أَفَلَا', lemma: 'لَا', pos: 'part', features: 'part+conj+neg', gloss: 'do...then not' },
            { surface: 'تُبْصِرُونَ', lemma: 'أَبْصَرَ', pos: 'verb', features: 'impf.2mp', gloss: 'to see; you see' },
          ],
        },
        {
          id: 'qs-v6-c04-017',
          ar: 'وَكَأَنَّهُ كَانَ خَلِيفَةً لِنَمْرُودَ مَلِكِ بَابِلَ.',
          en: 'It was as if he were a successor to Nimrod, king of Babylon.',
          tokens: [
            { surface: 'وَكَأَنَّهُ', lemma: 'كَأَنَّ', pos: 'part', features: 'conj+part+3ms', gloss: 'and as if he' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'خَلِيفَةً', lemma: 'خَلِيفَة', pos: 'noun', features: 'indef.acc', root: 'خ ل ف', gloss: 'a successor' },
            { surface: 'لِنَمْرُودَ', lemma: 'نَمْرُود', pos: 'proper', features: 'prep+gen', gloss: 'to Nimrod' },
            { surface: 'مَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'constr.gen', gloss: 'king of' },
            { surface: 'بَابِلَ', lemma: 'بَابِل', pos: 'proper', features: 'gen', gloss: 'Babylon' },
          ],
        },
        {
          id: 'qs-v6-c04-018',
          ar: 'وَكَانَ يَغْضَبُ إِذَا عَلِمَ أَحَداً يَرَى فَوْقَهُ أَحَداً.',
          en: 'He would grow angry if he learned of anyone who saw someone above him.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and would' },
            { surface: 'يَغْضَبُ', lemma: 'غَضِبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to grow angry' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'adv', features: 'adv', gloss: 'if, when' },
            { surface: 'عَلِمَ', lemma: 'عَلِمَ', pos: 'verb', features: 'perf.3ms', gloss: 'to know, learn of' },
            { surface: 'أَحَداً', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', root: 'ر أ ي', gloss: 'to see; who saw' },
            { surface: 'فَوْقَهُ', lemma: 'فَوْقَ', pos: 'adv', features: 'acc+3ms', root: 'ف و ق', gloss: 'above him' },
            { surface: 'أَحَداً', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'someone' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ يَقُولُ فِرْعَوْنُ عَنْ نَفْسِهِ؟',
          options: ['﴿أَنَا رَبُّكُمُ الْأَعْلَى﴾', '"أَنَا عَبْدٌ ضَعِيفٌ"', '"أَنَا رَسُولُ اللَّهِ"'],
          answer: 0,
          qEn: 'What did Pharaoh say about himself?',
          optionsEn: ['"I am your lord, the most high"', '"I am a weak servant"', '"I am the messenger of Allah"'],
        },
        {
          q: 'مَتَى كَانَ فِرْعَوْنُ يَغْضَبُ؟',
          options: ['إِذَا عَلِمَ أَحَداً يَرَى فَوْقَهُ أَحَداً', 'إِذَا رَأَى بَنِي إِسْرَائِيلَ سُعَدَاءَ', 'إِذَا هَطَلَ الْمَطَرُ'],
          answer: 0,
          qEn: 'When would Pharaoh grow angry?',
          optionsEn: ['If he learned of anyone who saw someone above him', 'If he saw Banū Isrāʾīl happy', 'If it rained'],
        },
      ],
    },
    {
      en: 'He called the people to worship him and prostrate to him, and the people obeyed him -- but Banū Isrāʾīl refused, because they believed in Allah and believed in His messengers, and Pharaoh\'s anger against Banū Isrāʾīl intensified.',
      sentences: [
        {
          id: 'qs-v6-c04-019',
          ar: 'وَدَعَا النَّاسَ إِلَى عِبَادَتِهِ وَالسُّجُودِ لَهُ، وَأَطَاعَهُ النَّاسُ.',
          en: 'He called the people to worship him and prostrate to him, and the people obeyed him.',
          tokens: [
            { surface: 'وَدَعَا', lemma: 'دَعَا', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to call; and called' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'عِبَادَتِهِ', lemma: 'عِبَادَة', pos: 'noun', features: 'gen+3ms', gloss: 'his worship' },
            { surface: 'وَالسُّجُودِ', lemma: 'سَجَدَ', pos: 'noun', features: 'conj+def.gen', gloss: 'and the prostration' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'وَأَطَاعَهُ', lemma: 'أَطَاعَ', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to obey; and obeyed him' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v6-c04-020',
          ar: 'وَامْتَنَعَ بَنُو إِسْرَائِيلَ لِأَنَّهُمْ يُؤْمِنُونَ بِاللَّهِ وَيُؤْمِنُونَ بِرُسُلِهِ وَاشْتَدَّ غَضَبُ فِرْعَوْنَ عَلَى بَنِي إِسْرَائِيلَ.',
          en: "But Banū Isrāʾīl refused, because they believed in Allah and believed in His messengers, and Pharaoh's anger against Banū Isrāʾīl intensified.",
          tokens: [
            { surface: 'وَامْتَنَعَ', lemma: 'اِمْتَنَعَ', pos: 'verb', features: 'conj+perf.3ms', root: 'م ن ع', gloss: 'to refuse; but refused' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'the children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'لِأَنَّهُمْ', lemma: 'أَنَّ', pos: 'part', features: 'prep+part+3mp', gloss: 'because they' },
            { surface: 'يُؤْمِنُونَ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.3mp', gloss: 'to believe' },
            { surface: 'بِاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'in Allah' },
            { surface: 'وَيُؤْمِنُونَ', lemma: 'آمَنَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to believe; and believed' },
            { surface: 'بِرُسُلِهِ', lemma: 'رَسُول', pos: 'noun', features: 'prep+pl.gen+3ms', gloss: 'in His messengers' },
            { surface: 'وَاشْتَدَّ', lemma: 'اِشْتَدَّ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to intensify; and intensified' },
            { surface: 'غَضَبُ', lemma: 'غَضَب', pos: 'noun', features: 'constr.nom', gloss: 'the anger of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: "Pharaoh's" },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'against' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.gen', root: 'ب ن و', gloss: 'the children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا اِمْتَنَعَ بَنُو إِسْرَائِيلَ عَنْ عِبَادَةِ فِرْعَوْنَ؟',
          options: ['لِأَنَّهُمْ يُؤْمِنُونَ بِاللَّهِ وَبِرُسُلِهِ', 'لِأَنَّهُمْ كَانُوا أَقْوِيَاءَ', 'لِأَنَّ فِرْعَوْنَ لَمْ يَطْلُبْ ذَلِكَ مِنْهُمْ'],
          answer: 0,
          qEn: 'Why did Banū Isrāʾīl refuse to worship Pharaoh?',
          optionsEn: ['Because they believed in Allah and in His messengers', 'Because they were powerful', "Because Pharaoh hadn't asked it of them"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ فِرْعَوْنُ مَلِكاً',
        post: 'مُتَكَبِّراً لا يَرَى فَوْقَهُ أَحَداً.',
        en: 'Pharaoh was a tyrannical, arrogant king who saw no one above him.',
        options: ['جَبَّاراً', 'جَبَّارٌ', 'جَبَّارٍ', 'الْجَبَّارَ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- predicate of كَانَ, matching the taught pattern.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Definite -- wrong; the predicate here is indefinite, describing a quality.',
        ],
      },
      {
        type: 'cloze',
        pre: 'الْقِبْطُ مِنْ نَوْعِ الْمُلُوكِ خُلِقُوا',
        post: 'يَحْكُمُوا.',
        en: 'The Copts were of the kind of kings, created to rule.',
        options: ['لِيَحْكُمُوا', 'لِيَحْكُمُونَ', 'أَنْ يَحْكُمُوا', 'لِحَكَمُوا'],
        answer: 0,
        rationales: [
          'لِ + subjunctive plural (dropped ن) -- "in order to rule," matching the taught pattern.',
          'Indicative plural (kept ن) -- wrong; لِ requires the subjunctive, which drops the نون.',
          'أَنْ + subjunctive is grammatical but not what is printed here -- لِ is the particle actually used.',
          'لِ + perfect -- wrong; a purpose clause takes the subjunctive imperfect, not the perfect.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَخْدِمُ الْعَبْدُ سَيِّدَهُ',
        pre: '',
        post: 'سَيِّدَهُ',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you (m. pl.)',
        options: ['تَخْدِمُونَ', 'يَخْدِمُ', 'تَخْدِمُ', 'نَخْدِمُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches أَنْتُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd/3rd feminine singular -- wrong number.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَخْدِمُ الْعَبْدُ سَيِّدَهُ',
        pre: '',
        post: 'سَيِّدَهُ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَخْدِمُ', 'يَخْدِمُ', 'أَخْدِمُ', 'يَخْدِمُونَ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '3rd masculine plural -- they.',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 6 (Mūsā, part 1), chapter 1 -- مِنْ كِنْعَانَ إِلَى
// مِصْرَ. Printed pages 110-111 -- p.110 opens with the basmala graphic and
// this chapter's title box on the same page (no separate volume-title page,
// as established for this volume), and the chapter ends at the bottom of
// p.111, right before ch2's title box «بَعْدَ يُوسُفَ» opens p.112.
// Transcribed by hand from the scan (vision OCR, 200dpi render) against
// ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md.
//
// A short bridge chapter picking up right where volume 2 (Yūsuf) left off:
// Yaʿqūb and his sons leave the pastoral life of Canaan to settle in Egypt
// with Yūsuf, and Egypt receives the family warmly.
//
// Grammar / lexical notes:
//   -- The small ﷺ glyph printed after يَعْقُوبُ and يُوسُفُ on p.110 is a
//      typographic honorific, not part of the running text -- following the
//      corpus's own precedent for the circled Qur'an-ayah numbers (noted in
//      qasas-v2/chapter-22.js's header, "not transcribed as text/tokens"),
//      it is omitted from `ar` and from the token list.
//   -- CORRECTION (final QA pass): the printed title box on p.110 actually
//      reads «كِنْعَانَ» with kasra, not «كَنْعَانَ» with fatḥa -- fixed in
//      title.ar. The book itself is inconsistent about this word's medial
//      vowel across pages (p.110's title and body both print kasra; p.111
//      and later chapters referencing Canaan print fatḥa, matching the
//      already-established shared lemma كَنْعَان) -- this looks like a
//      genuine typesetting inconsistency in the source rather than an OCR
//      error either way, so body tokens below (drawn from both pages)
//      were left as originally transcribed rather than forcing uniformity
//      the source itself doesn't have.
//   -- مِصْرَ and كَنْعَانَ are diptote (ممنوع من الصرف) proper nouns: nominative
//      takes bare ضمة (مِصْرُ), accusative/genitive both take bare فتحة
//      (مِصْرَ), matching the pattern already fixed in qasas-v2/chapter-22.js
//      (مِصْرَ tagged 'gen' after إِلَى) and qasas-v2/chapter-18.js (كَنْعَانَ).
//      The lemma spelling 'مِصْر' follows known_lemmas.json's canonical
//      entry (first taught qasas-v2/chapter-07.js) even though a later
//      chapter (qasas-v2/chapter-22.js) drifted to tagging the lemma as
//      'مِصْرَ' with the fatḥa baked in -- 'مِصْر' is preferred here for
//      consistency with the earlier, canonical entry.
//   -- الْبِلَادِ (qs-v6-c01-014) is tagged as the plural of the
//      already-taught بَلَد (qasas-v1/chapter-11.js), not a new lemma --
//      same broken-plural-shares-singular-lemma convention already used
//      throughout the corpus (رِجَال/رَجُل, عَبِيد/عَبْد, etc.).
//   -- كَالْأَبْنَاءِ (qs-v6-c01-014b): the comparative كَ- prefix is fused
//      onto the noun's own lemma as a `prep` proclitic segment, the same
//      pattern already used for e.g. كَالْبَشَرِ (qasas-v3/chapter-09.js) and
//      كَيُوسُفَ (qasas-v2/chapter-21.js) -- not a separate كَ lemma.
//   -- خَدَمُهُ (qs-v6-c01-004, "his attendants") is tagged under the new
//      lemma خَادِم rather than as a separate collective noun, the same way
//      عَبِيد is tagged under عَبْد -- خَدَم read here as خَادِم's plural/
//      collective form.
//   -- هُوَ سَيِّدُ مِصْرَ (qs-v6-c01-002) inside a لِأَنَّ-clause: هُوَ is the
//      embedded nominal sentence's own subject pronoun, سَيِّدُ its
//      nominative predicate -- same "أَنَّ + pronoun + nominative predicate"
//      shape already tagged at qasas-v2/chapter-22.js's أَنَّهُ يُوسُفُ.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): مَعَ (qasas-v1
//      ch4), وَلَد (qasas-v1 ch1), أَمَرَ (qasas-v1 ch8), سَيِّد (qasas-v1
//      ch12), اِبْن (qasas-v1 ch14), يَعْقُوب (qasas-v1 ch16), يُوسُف (qasas-v1
//      ch16), كَانَ، فِي، كَنْعَان (qasas-v2 ch18), بَاعَ (qasas-v1 ch1), عَبْد
//      (qasas-v2 ch9), أَكَلَ (qasas-v1 ch2), مَا، صَنَعَ (qasas-v3 ch18)، لَا،
//      ذَهَبَ (qasas-v1 ch11), لِمَاذَا (qasas-v1 ch2), أَهْل (qasas-v2 ch9),
//      طَلَبَ (qasas-v1 ch10), مِنْ، طَابَ (qasas-v2 ch23)، لِ، طَعَام (qasas-v1
//      ch2), شَرَاب (qasas-v1 ch3), حَتَّى، رَأَى، أَب، أَخ (qasas-v1 ch16),
//      كَيْفَ (qasas-v1 ch5), هُوَ، وَحِيد (qasas-v2 ch4), مَاذَا (qasas-v1
//      ch6), قَصْر (qasas-v2 ch7), بَيْت (qasas-v1 ch1), صَغِير (qasas-v1
//      ch14), جَاءَ (qasas-v1 ch4), اِسْتَقْبَلَ (qasas-v2 ch24), فَرِحَ
//      (qasas-v1 ch4), بِ، فَرَح (qasas-v2 ch24), عَظِيم (qasas-v2 ch9), مِصْر
//      (qasas-v2 ch7), أَحَبَّ (qasas-v1 ch14), كَرِيم (qasas-v2 ch8), نَاس،
//      لِأَنَّ (qasas-v2 ch11), نَاصِح (qasas-v3 ch11), شَفِيق (qasas-v3 ch11),
//      وَالِد (qasas-v1 ch3), كَبِير (qasas-v1 ch1), بَلَد (qasas-v1 ch11),
//      شَيْخ (qasas-v2 ch1), إِلَى، هَذَا، صَارَ (qasas-v3 ch7)
//      are all already taught (or reused per the notes above) and are NOT
//      re-listed in newWords here.
//
// 16 new words (اِنْتَقَلَ، نَهَى، رَعَى، غَنَم، حَلَبَ، شَاة، صُوف، خَادِم، نَعِمَ،
// عَيْش، أُسْرَة، كَرَم، إِحْسَان، مَاجِد، وَطَن، إِقَامَة).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch1',
  title: { ar: 'مِنْ كِنْعَانَ إِلَى مِصْرَ', en: 'From Canaan to Egypt' },
  newWords: [
    'اِنْتَقَلَ', 'نَهَى', 'رَعَى', 'غَنَم', 'حَلَبَ', 'شَاة', 'صُوف', 'خَادِم',
    'نَعِمَ', 'عَيْش', 'أُسْرَة', 'كَرَم', 'إِحْسَان', 'مَاجِد', 'وَطَن', 'إِقَامَة',
  ],
  lemmas: {
    اِنْتَقَلَ: { gloss: 'to move, relocate' },
    نَهَى: { gloss: 'to forbid' },
    رَعَى: { gloss: 'to graze, herd, shepherd' },
    غَنَم: { gloss: 'sheep, flock' },
    حَلَبَ: { gloss: 'to milk' },
    شَاة: { gloss: 'a ewe, a sheep' },
    صُوف: { gloss: 'wool' },
    خَادِم: { gloss: 'servant, attendant' },
    نَعِمَ: { gloss: 'to live in ease, enjoy comfort' },
    عَيْش: { gloss: 'life, livelihood' },
    أُسْرَة: { gloss: 'family, household' },
    كَرَم: { gloss: 'generosity, nobility' },
    إِحْسَان: { gloss: 'kindness, excellence in doing good' },
    مَاجِد: { gloss: 'glorious, noble' },
    وَطَن: { gloss: 'homeland' },
    إِقَامَة: { gloss: 'residing, staying' },
  },
  paragraphs: [
    {
      en: "Yaʿqūb moved to Egypt with all his children, because his son Yūsuf ruled there, commanding and forbidding as he wished. What point was there in the family going on herding sheep, milking ewes, and selling wool in Canaan, while Yūsuf's own servants ate well and lived in comfort in Egypt? So Yūsuf sent for Yaʿqūb and his household and summoned them from Canaan -- food, drink, and life itself were not sweet to him until he could see his father and brothers again, alone as he was in Egypt with palaces he had no use for while they lived in a small house in Canaan. When Yaʿqūb and his sons arrived, Yūsuf welcomed them and rejoiced over them greatly, and all of Egypt welcomed the family of its master and noble king and rejoiced just as greatly. The Egyptians loved this noble household, for they loved Yūsuf for his generosity and kindness to people, and saw in him a caring, compassionate brother, and in Yaʿqūb a glorious, noble father. Yaʿqūb became the elder of the land and the shaykh of Egypt, and its people treated him like their own sons. So staying in Egypt became sweet to Yaʿqūb and his children, and it became a true homeland for them.",
      sentences: [
        {
          id: 'qs-v6-c01-001',
          ar: 'اِنْتَقَلَ يَعْقُوبُ إِلَى مِصْرَ وَانْتَقَلَ مَعَهُ أَوْلَادُهُ.',
          en: 'Yaʿqūb moved to Egypt, and his children moved with him.',
          tokens: [
            { surface: 'اِنْتَقَلَ', lemma: 'اِنْتَقَلَ', pos: 'verb', features: 'perf.3ms', root: 'ن ق ل', gloss: 'to move, relocate; moved' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'وَانْتَقَلَ', lemma: 'اِنْتَقَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن ق ل', gloss: 'to move; and moved' },
            { surface: 'مَعَهُ', lemma: 'مَعَ', pos: 'prep', features: 'prep+3ms', gloss: 'with him' },
            { surface: 'أَوْلَادُهُ', lemma: 'وَلَد', pos: 'noun', features: 'pl.nom+3ms', gloss: 'his children' },
          ],
        },
        {
          id: 'qs-v6-c01-002',
          ar: 'انْتَقَلُوا إِلَى مِصْرَ لِأَنَّ يُوسُفَ بْنَ يَعْقُوبَ هُوَ سَيِّدُ مِصْرَ،',
          en: 'They moved to Egypt because Yūsuf son of Yaʿqūb was the master of Egypt,',
          tokens: [
            { surface: 'انْتَقَلُوا', lemma: 'اِنْتَقَلَ', pos: 'verb', features: 'perf.3mp', root: 'ن ق ل', gloss: 'to move; they moved' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'لِأَنَّ', lemma: 'لِأَنَّ', pos: 'part', features: 'part', root: 'أ ن ن', gloss: 'because' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'بْنَ', lemma: 'اِبْن', pos: 'noun', features: 'acc.constr', root: 'ب ن و', gloss: 'son of' },
            { surface: 'يَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'gen', gloss: 'Yaʿqūb' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: 'nom.3ms', gloss: 'he' },
            { surface: 'سَيِّدُ', lemma: 'سَيِّد', pos: 'noun', features: 'constr.nom', gloss: 'the master of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v6-c01-003',
          ar: 'يَأْمُرُ وَيَنْهَى فِيهَا.',
          en: 'commanding and forbidding in it.',
          tokens: [
            { surface: 'يَأْمُرُ', lemma: 'أَمَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to command; commands' },
            { surface: 'وَيَنْهَى', lemma: 'نَهَى', pos: 'verb', features: 'conj+impf.3ms', root: 'ن ه ي', gloss: 'to forbid; and forbids' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
          ],
        },
        {
          id: 'qs-v6-c01-004',
          ar: 'وَكَانُوا فِي كَنْعَانَ يَرْعَوْنَ الْغَنَمَ،',
          en: 'They used to be in Canaan, herding sheep,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and they were' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كَنْعَانَ', lemma: 'كَنْعَان', pos: 'proper', features: 'gen', gloss: 'Canaan' },
            { surface: 'يَرْعَوْنَ', lemma: 'رَعَى', pos: 'verb', features: 'impf.3mp', root: 'ر ع ي', gloss: 'to graze, herd; herding' },
            { surface: 'الْغَنَمَ', lemma: 'غَنَم', pos: 'noun', features: 'def.acc', gloss: 'the sheep, the flock' },
          ],
        },
        {
          id: 'qs-v6-c01-005',
          ar: 'وَيَحْلِبُونَ الشَّاةَ وَيَبِيعُونَ الصُّوفَ.',
          en: 'milking the ewes and selling the wool.',
          tokens: [
            { surface: 'وَيَحْلِبُونَ', lemma: 'حَلَبَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ح ل ب', gloss: 'to milk; and milking' },
            { surface: 'الشَّاةَ', lemma: 'شَاة', pos: 'noun', features: 'def.acc', gloss: 'the ewe, the sheep' },
            { surface: 'وَيَبِيعُونَ', lemma: 'بَاعَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to sell; and selling' },
            { surface: 'الصُّوفَ', lemma: 'صُوف', pos: 'noun', features: 'def.acc', gloss: 'the wool' },
          ],
        },
        {
          id: 'qs-v6-c01-006',
          ar: 'وَعَبِيدُ يُوسُفَ وَخَدَمُهُ يَأْكُلُونَ وَيَنْعَمُونَ فِي مِصْرَ!',
          en: "while Yūsuf's own servants and attendants ate well and lived in luxury in Egypt!",
          tokens: [
            { surface: 'وَعَبِيدُ', lemma: 'عَبْد', pos: 'noun', features: 'conj+pl.nom.constr', gloss: 'and the servants of' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
            { surface: 'وَخَدَمُهُ', lemma: 'خَادِم', pos: 'noun', features: 'conj+nom+3ms', root: 'خ د م', gloss: 'and his attendants' },
            { surface: 'يَأْكُلُونَ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to eat; ate' },
            { surface: 'وَيَنْعَمُونَ', lemma: 'نَعِمَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ن ع م', gloss: 'to live in ease; and lived in luxury' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v6-c01-007',
          ar: 'فَمَا يَصْنَعُونَ فِي كَنْعَانَ؟',
          en: 'So what were they doing in Canaan?',
          tokens: [
            { surface: 'فَمَا', lemma: 'مَا', pos: 'rel', features: 'conj+rel', gloss: 'so what' },
            { surface: 'يَصْنَعُونَ', lemma: 'صَنَعَ', pos: 'verb', features: 'impf.3mp', gloss: 'to do, make; were they doing' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كَنْعَانَ', lemma: 'كَنْعَان', pos: 'proper', features: 'gen', gloss: 'Canaan' },
          ],
        },
        {
          id: 'qs-v6-c01-008',
          ar: 'وَلِمَاذَا لَا يَذْهَبُونَ إِلَى مِصْرَ؟',
          en: "And why weren't they going to Egypt?",
          tokens: [
            { surface: 'وَلِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'conj+adv', gloss: 'and why' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَذْهَبُونَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'impf.3mp', gloss: 'to go; do they go' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v6-c01-009',
          ar: 'أَرْسَلَ يُوسُفُ إِلَى يَعْقُوبَ وَأَهْلِهِ،',
          en: 'Yūsuf sent for Yaʿqūb and his family,',
          tokens: [
            { surface: 'أَرْسَلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'perf.3ms', root: 'ر س ل', gloss: 'to send; sent' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'يَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'gen', gloss: 'Yaʿqūb' },
            { surface: 'وَأَهْلِهِ', lemma: 'أَهْل', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his family' },
          ],
        },
        {
          id: 'qs-v6-c01-010',
          ar: 'وَطَلَبَهُمْ مِنْ كَنْعَانَ.',
          en: 'and summoned them from Canaan.',
          tokens: [
            { surface: 'وَطَلَبَهُمْ', lemma: 'طَلَبَ', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to summon; and summoned them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'كَنْعَانَ', lemma: 'كَنْعَان', pos: 'proper', features: 'gen', gloss: 'Canaan' },
          ],
        },
        {
          id: 'qs-v6-c01-011',
          ar: 'وَكَانَ يُوسُفُ لَا يَطِيبُ لَهُ طَعَامٌ وَلَا شَرَابٌ حَتَّى يَرَى أَبَاهُ وَإِخْوَتَهُ.',
          en: 'Food and drink were not sweet to Yūsuf until he could see his father and his brothers.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَطِيبُ', lemma: 'طَابَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be pleasant; was pleasant' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'طَعَامٌ', lemma: 'طَعَام', pos: 'noun', features: 'indef.nom', gloss: 'food' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'شَرَابٌ', lemma: 'شَرَاب', pos: 'noun', features: 'indef.nom', gloss: 'drink' },
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'conj', features: 'conj', gloss: 'until' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', root: 'ر أ ي', gloss: 'to see; he could see' },
            { surface: 'أَبَاهُ', lemma: 'أَب', pos: 'noun', features: 'acc+3ms', root: 'أ ب و', gloss: 'his father' },
            { surface: 'وَإِخْوَتَهُ', lemma: 'أَخ', pos: 'noun', features: 'conj+pl.acc+3ms', root: 'أ خ و', gloss: 'and his brothers' },
          ],
        },
        {
          id: 'qs-v6-c01-012',
          ar: 'وَكَيْفَ يَطِيبُ لَهُ طَعَامٌ وَشَرَابٌ،',
          en: 'How could food and drink be sweet to him,',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'يَطِيبُ', lemma: 'طَابَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be pleasant; could be pleasant' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'طَعَامٌ', lemma: 'طَعَام', pos: 'noun', features: 'indef.nom', gloss: 'food' },
            { surface: 'وَشَرَابٌ', lemma: 'شَرَاب', pos: 'noun', features: 'conj+indef.nom', gloss: 'and drink' },
          ],
        },
        {
          id: 'qs-v6-c01-013',
          ar: 'وَكَيْفَ يَطِيبُ لَهُ عَيْشٌ وَهُوَ وَحِيدٌ فِي مِصْرَ؟',
          en: 'and how could life be sweet to him while he was alone in Egypt?',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'يَطِيبُ', lemma: 'طَابَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be pleasant; could be pleasant' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'عَيْشٌ', lemma: 'عَيْش', pos: 'noun', features: 'indef.nom', gloss: 'life, livelihood' },
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+nom.3ms', gloss: 'while he' },
            { surface: 'وَحِيدٌ', lemma: 'وَحِيد', pos: 'adj', features: 'indef.nom', gloss: 'alone' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v6-c01-014',
          ar: 'وَمَاذَا يَصْنَعُ بِالْقُصُورِ وَأَبُوهُ وَإِخْوَتُهُ فِي بَيْتٍ صَغِيرٍ فِي كَنْعَانَ؟!',
          en: 'And what use had he for palaces, while his father and brothers were in a small house in Canaan?!',
          tokens: [
            { surface: 'وَمَاذَا', lemma: 'مَاذَا', pos: 'rel', features: 'conj+rel', gloss: 'and what' },
            { surface: 'يَصْنَعُ', lemma: 'صَنَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to do; would he do' },
            { surface: 'بِالْقُصُورِ', lemma: 'قَصْر', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'with the palaces' },
            { surface: 'وَأَبُوهُ', lemma: 'أَب', pos: 'noun', features: 'conj+nom+3ms', root: 'أ ب و', gloss: 'while his father' },
            { surface: 'وَإِخْوَتُهُ', lemma: 'أَخ', pos: 'noun', features: 'conj+pl.nom+3ms', root: 'أ خ و', gloss: 'and his brothers' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'بَيْتٍ', lemma: 'بَيْت', pos: 'noun', features: 'indef.gen', gloss: 'a house' },
            { surface: 'صَغِيرٍ', lemma: 'صَغِير', pos: 'adj', features: 'indef.gen', root: 'ص غ ر', gloss: 'small' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كَنْعَانَ', lemma: 'كَنْعَان', pos: 'proper', features: 'gen', gloss: 'Canaan' },
          ],
        },
        {
          id: 'qs-v6-c01-015',
          ar: 'وَجَاءَ يَعْقُوبُ وَأَوْلَادُهُ إِلَى مِصْرَ فَاسْتَقْبَلَهُمْ يُوسُفُ وَفَرِحَ بِهِمْ فَرَحاً عَظِيماً.',
          en: 'Yaʿqūb and his children came to Egypt, and Yūsuf welcomed them and rejoiced over them greatly.',
          tokens: [
            { surface: 'وَجَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to come; and came' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'وَأَوْلَادُهُ', lemma: 'وَلَد', pos: 'noun', features: 'conj+pl.nom+3ms', gloss: 'and his children' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'فَاسْتَقْبَلَهُمْ', lemma: 'اِسْتَقْبَلَ', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to receive, welcome; so welcomed them' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'وَفَرِحَ', lemma: 'فَرِحَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to rejoice; and rejoiced' },
            { surface: 'بِهِمْ', lemma: 'بِ', pos: 'prep', features: 'prep+3mp', gloss: 'over them' },
            { surface: 'فَرَحاً', lemma: 'فَرَح', pos: 'noun', features: 'indef.acc', gloss: 'joy, rejoicing' },
            { surface: 'عَظِيماً', lemma: 'عَظِيم', pos: 'adj', features: 'indef.acc', gloss: 'great' },
          ],
        },
        {
          id: 'qs-v6-c01-016',
          ar: 'وَاسْتَقْبَلَتْ مِصْرُ أُسْرَةَ سَيِّدِهَا وَأُسْرَةَ مَلِكِهَا الْكَرِيمِ،',
          en: 'Egypt welcomed the family of its master and the family of its noble king,',
          tokens: [
            { surface: 'وَاسْتَقْبَلَتْ', lemma: 'اِسْتَقْبَلَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to welcome; and welcomed' },
            { surface: 'مِصْرُ', lemma: 'مِصْر', pos: 'proper', features: 'nom', gloss: 'Egypt' },
            { surface: 'أُسْرَةَ', lemma: 'أُسْرَة', pos: 'noun', features: 'acc.constr', root: 'أ س ر', gloss: 'the family of' },
            { surface: 'سَيِّدِهَا', lemma: 'سَيِّد', pos: 'noun', features: 'gen+3fs', gloss: 'its master' },
            { surface: 'وَأُسْرَةَ', lemma: 'أُسْرَة', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the family of' },
            { surface: 'مَلِكِهَا', lemma: 'مَلِك', pos: 'noun', features: 'gen+3fs', gloss: 'its king' },
            { surface: 'الْكَرِيمِ', lemma: 'كَرِيم', pos: 'adj', features: 'def.gen', gloss: 'the noble, generous' },
          ],
        },
        {
          id: 'qs-v6-c01-017',
          ar: 'وَفَرِحَتْ بِهَا فَرَحاً عَظِيماً.',
          en: 'and rejoiced over them greatly.',
          tokens: [
            { surface: 'وَفَرِحَتْ', lemma: 'فَرِحَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to rejoice; and rejoiced' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'over them' },
            { surface: 'فَرَحاً', lemma: 'فَرَح', pos: 'noun', features: 'indef.acc', gloss: 'joy' },
            { surface: 'عَظِيماً', lemma: 'عَظِيم', pos: 'adj', features: 'indef.acc', gloss: 'great' },
          ],
        },
        {
          id: 'qs-v6-c01-018',
          ar: 'وَأَحَبَّ أَهْلُ مِصْرَ هَذَا الْبَيْتَ الْكَرِيمَ،',
          en: 'The people of Egypt loved this noble household,',
          tokens: [
            { surface: 'وَأَحَبَّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to love; and loved' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'nom.constr', gloss: 'the people of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْبَيْتَ', lemma: 'بَيْت', pos: 'noun', features: 'def.acc', gloss: 'the household' },
            { surface: 'الْكَرِيمَ', lemma: 'كَرِيم', pos: 'adj', features: 'def.acc', gloss: 'the noble' },
          ],
        },
        {
          id: 'qs-v6-c01-019',
          ar: 'لِأَنَّهُمْ يُحِبُّونَ يُوسُفَ لِكَرَمِهِ وَإِحْسَانِهِ إِلَى النَّاسِ.',
          en: 'because they loved Yūsuf for his generosity and his kindness to people.',
          tokens: [
            { surface: 'لِأَنَّهُمْ', lemma: 'لِأَنَّ', pos: 'part', features: 'part+3mp', root: 'أ ن ن', gloss: 'because they' },
            { surface: 'يُحِبُّونَ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3mp', gloss: 'to love; they loved' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'لِكَرَمِهِ', lemma: 'كَرَم', pos: 'noun', features: 'prep+gen+3ms', root: 'ك ر م', gloss: 'for his generosity' },
            { surface: 'وَإِحْسَانِهِ', lemma: 'إِحْسَان', pos: 'noun', features: 'conj+gen+3ms', root: 'ح س ن', gloss: 'and his kindness' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'people' },
          ],
        },
        {
          id: 'qs-v6-c01-020',
          ar: 'وَلِأَنَّهُمْ رَأَوْا فِي يُوسُفَ أَخاً نَاصِحاً شَفِيقاً،',
          en: 'And because they saw in Yūsuf a caring, compassionate brother,',
          tokens: [
            { surface: 'وَلِأَنَّهُمْ', lemma: 'لِأَنَّ', pos: 'part', features: 'conj+part+3mp', root: 'أ ن ن', gloss: 'and because they' },
            { surface: 'رَأَوْا', lemma: 'رَأَى', pos: 'verb', features: 'perf.3mp', root: 'ر أ ي', gloss: 'to see; they saw' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
            { surface: 'أَخاً', lemma: 'أَخ', pos: 'noun', features: 'indef.acc', root: 'أ خ و', gloss: 'a brother' },
            { surface: 'نَاصِحاً', lemma: 'نَاصِح', pos: 'adj', features: 'indef.acc', gloss: 'advising, caring' },
            { surface: 'شَفِيقاً', lemma: 'شَفِيق', pos: 'adj', features: 'indef.acc', gloss: 'compassionate' },
          ],
        },
        {
          id: 'qs-v6-c01-021',
          ar: 'فَرَأَوْا فِي يَعْقُوبَ وَالِداً مَاجِداً كَرِيماً.',
          en: 'they saw in Yaʿqūb a glorious, noble father.',
          tokens: [
            { surface: 'فَرَأَوْا', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3mp', root: 'ر أ ي', gloss: 'to see; so they saw' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'يَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'gen', gloss: 'Yaʿqūb' },
            { surface: 'وَالِداً', lemma: 'وَالِد', pos: 'noun', features: 'indef.acc', root: 'و ل د', gloss: 'a father' },
            { surface: 'مَاجِداً', lemma: 'مَاجِد', pos: 'adj', features: 'indef.acc', gloss: 'glorious, noble' },
            { surface: 'كَرِيماً', lemma: 'كَرِيم', pos: 'adj', features: 'indef.acc', gloss: 'noble, generous' },
          ],
        },
        {
          id: 'qs-v6-c01-022',
          ar: 'وَكَانَ يَعْقُوبُ كَبِيرَ الْبِلَادِ وَشَيْخَ مِصْرَ،',
          en: 'Yaʿqūb was the elder of the land and the shaykh of Egypt,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'كَبِيرَ', lemma: 'كَبِير', pos: 'noun', features: 'acc.constr', gloss: 'the elder of' },
            { surface: 'الْبِلَادِ', lemma: 'بَلَد', pos: 'noun', features: 'pl.def.gen', root: 'ب ل د', gloss: 'the land, the country' },
            { surface: 'وَشَيْخَ', lemma: 'شَيْخ', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the elder of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v6-c01-023',
          ar: 'وَكَانَ أَهْلُ مِصْرَ لَهُ كَالْأَبْنَاءِ.',
          en: 'and the people of Egypt were to him like sons.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and were' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'nom.constr', gloss: 'the people of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'كَالْأَبْنَاءِ', lemma: 'اِبْن', pos: 'noun', features: 'prep+pl.def.gen', root: 'ب ن و', gloss: 'like the sons' },
          ],
        },
        {
          id: 'qs-v6-c01-024',
          ar: 'وَطَابَتْ لِيَعْقُوبَ وَأَبْنَائِهِ الْإِقَامَةُ فِي مِصْرَ وَصَارَتْ لَهُمْ وَطَناً.',
          en: 'Staying in Egypt became sweet to Yaʿqūb and his children, and it became a homeland for them.',
          tokens: [
            { surface: 'وَطَابَتْ', lemma: 'طَابَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be pleasant; and became sweet' },
            { surface: 'لِيَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'prep+gen', gloss: 'for Yaʿqūb' },
            { surface: 'وَأَبْنَائِهِ', lemma: 'اِبْن', pos: 'noun', features: 'conj+pl.gen+3ms', root: 'ب ن و', gloss: 'and his sons' },
            { surface: 'الْإِقَامَةُ', lemma: 'إِقَامَة', pos: 'noun', features: 'def.nom', root: 'ق و م', gloss: 'the residing, staying' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'وَصَارَتْ', lemma: 'صَارَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to become; and became' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'وَطَناً', lemma: 'وَطَن', pos: 'noun', features: 'indef.acc', root: 'و ط ن', gloss: 'a homeland' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا انْتَقَلَ يَعْقُوبُ وَأَوْلَادُهُ إِلَى مِصْرَ؟',
          options: ['لِأَنَّ يُوسُفَ ابْنَهُ كَانَ سَيِّدَ مِصْرَ', 'لِأَنَّ كَنْعَانَ كَانَتْ فَقِيرَةً', 'لِأَنَّ فِرْعَوْنَ طَلَبَهُمْ'],
          answer: 0,
          qEn: 'Why did Yaʿqūb and his children move to Egypt?',
          optionsEn: ['Because his son Yūsuf was the master of Egypt', 'Because Canaan was poor', 'Because Pharaoh summoned them'],
        },
        {
          q: 'مَاذَا كَانَ يَفْعَلُ يَعْقُوبُ وَأَوْلَادُهُ فِي كَنْعَانَ؟',
          options: ['كَانُوا يَرْعَوْنَ الْغَنَمَ وَيَحْلِبُونَ الشَّاةَ وَيَبِيعُونَ الصُّوفَ', 'كَانُوا يَحْكُمُونَ مِصْرَ', 'كَانُوا يَبْنُونَ الْقُصُورَ'],
          answer: 0,
          qEn: 'What did Yaʿqūb and his children do in Canaan?',
          optionsEn: ['They herded sheep, milked ewes, and sold wool', 'They ruled Egypt', 'They built palaces'],
        },
        {
          q: 'كَيْفَ اسْتَقْبَلَ يُوسُفُ وَأَهْلُ مِصْرَ يَعْقُوبَ وَأَوْلَادَهُ؟',
          options: ['فَرِحُوا بِهِمْ فَرَحاً عَظِيماً', 'غَضِبُوا عَلَيْهِمْ', 'لَمْ يَعْرِفُوهُمْ'],
          answer: 0,
          qEn: 'How did Yūsuf and the people of Egypt welcome Yaʿqūb and his children?',
          optionsEn: ['They rejoiced over them greatly', 'They were angry with them', 'They did not recognize them'],
        },
      ],
    },
  ],
};

// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus), chapter 9 -- ٩ - فِي الْبَرِّيَّةِ ("In the Wilderness"). Pages
// 183-184, plus the opening lines of page 185 up to (not including) the
// chapter-10 heading box that appears partway down that page. Starts right
// after the ch9 heading box on page 183 (which itself follows the closing
// Qur'anic quotation of ch8, Al-Dukhān 44:25-29, about the gardens Pharaoh's
// people left behind -- that quotation belongs to ch8, not here). Transcribed
// by hand from the scan (vision OCR) against ../CHAPTER-FORMAT.md and
// QASAS_AGENT_BRIEF.md.
//
// This chapter and chapter 10 were authored together as a pair (short
// chapters covering the Israelites' time in the wilderness after the
// crossing of the sea); several judgment calls below were made by
// cross-reading the transcript for pages 174-182 (chapters 6-8 of this
// volume, not yet written by this session but visible in the source
// transcript supplied) to avoid re-marking as "new" words that almost
// certainly already appear in those earlier, still-unwritten chapters.
//
// Grammar / lexical notes:
//   -- بَنُو/بَنِي إِسْرَائِيلَ is tokenized as two tokens throughout, per the
//      house convention: first token surface بَنُو (nom) or بَنِي
//      (acc/gen), lemma اِبْن, pos noun, features 'pl.constr' + case;
//      second token surface إِسْرَائِيل(َ), lemma إِسْرَائِيل, pos proper,
//      features always 'gen' (second term of the iḍāfa). Both إِسْرَائِيل
//      and هَامَان are treated as already introduced earlier in this volume
//      (هَامَان appears repeatedly on p.175/ch6; بَنِي إِسْرَائِيل appears
//      constantly from p.176 onward) -- not re-added to newWords here, per
//      the task's own explicit guidance that these are being taught by
//      parallel agents on earlier chapters. Flagging rather than asserting
//      silently, since ch3-8 are not yet on disk to verify directly.
//   -- مِصْر (Egypt) is likewise treated as already known -- it appears
//      constantly from p.174 onward ("أَهْلُ مِصْرَ" p.175, "فِي الطَّعَامِ" etc.)
//      and is central to the whole story; not re-added to newWords, though
//      it does not appear as a token in this chapter's own sentences.
//   -- أَمْن (safety, noun) is used once here ("بَرِّ الأَمْنِ وَالسَّلامِ") but the
//      identical phrase already appears verbatim on p.180 (end of ch7/ch8),
//      so it is treated as already introduced there and not re-added here.
//   -- ضَرَبَ (to strike/pitch) is used here (يَضْرِبُونَ الْخِيَامَ, "they pitch
//      the tents") but the same verb is the load-bearing verb of ch7/ch8's
//      climactic staff-striking scenes (p.179 "أَنْ يَضْرِبَ بِعَصَاهُ الْبَحْرَ",
//      repeated p.181) -- treated as already known from those chapters, not
//      re-added here, though I cannot directly verify ch7/ch8's own
//      newWords list since those files are not yet on disk.
//   -- بَرِّيَّة (wilderness) is this chapter's own title word, but the
//      identical word already appears in ch8's prose (p.180, "فِي هَذِهِ
//      الْبَرِّيَّةِ غُرَبَاءَ") -- treated as already known, not re-added here.
//   -- شُرْطَة (police/guard) appears repeatedly across ch6/ch7 (pp.174,175,
//      177) before this chapter's single occurrence -- treated as already
//      known, not re-added here.
//   -- عَطِشَ (to thirst) and جَاعَ (to hunger) were flagged by the task brief
//      as "likely new" for this range, but the shared lexicon.txt export
//      shows both already taught (عطش at qiraah-v2/ch53; جَاعَ at
//      qasas-v2/ch16) -- trusting the lexicon over the brief's guess, they
//      are NOT re-added to newWords. However the related NOUNS عَطَش
//      ("thirst") and جُوع ("hunger") are tagged new, following this
//      corpus's established convention of treating a verb and a
//      semantically-related but morphologically distinct noun as separate
//      lemmas (e.g. qasas-v7-c01's قَدَرَ vs. قَدْر).
//   -- حَضَر (qs-v7-c09-004, "settled/civilized life", as in أَهْلَ الْحَضَرِ
//      "people of settled life") is tagged as a new noun lemma distinct
//      from the already-taught verb حَضَرَ ("to be present, come",
//      qasas-v2/ch4) -- a homograph, flagged rather than silently reused.
//   -- حَرّ (qs-v7-c09-007, "heat", as in حَرَّ الشَّمْسِ "the heat of the sun")
//      is tagged new and kept distinct from the already-taught adjective
//      حُرّ ("free", qasas-v2/ch9) -- same root ح ر ر, different pattern
//      and sense, a homograph flagged rather than silently conflated.
//   -- يُظَلَّهُمْ (qs-v7-c09-009, "أَنْ يُظَلَّهُمْ") is printed with the shape of
//      a passive (huwa yuẓallu), yet takes a direct object suffix هُمْ,
//      which reads naturally only as an active causative "that it [the
//      cloud] shade them". Tagged here as active (lemma أَظَلَّ, form IV,
//      features impf.3ms+3mp) per the sense, not the surface passive
//      shape -- flagging this as a genuine uncertainty rather than
//      silently picking one reading.
//   -- أُنَاسٍ (qs-v7-c09-020, in the Qur'anic quotation) reuses the
//      already-taught lemma نَاس rather than being given its own entry --
//      same word, alternate form.
//   -- اللَّه and إِسْرَائِيل/إِسْرائِيل appear in a few places in the source
//      without a visible final case mark (e.g. "إِلا اللَّه" at a pause,
//      "بَنُو إِسْرائِيل" at qs-v7-c09-021); surface is transcribed exactly as
//      printed in each case, while the `features` case atom reflects the
//      grammatically required case regardless of whether it is visibly
//      marked on the page.
//   -- Sentence qs-v7-c09-019/020 (the rock-splitting quotation, Al-Aʿrāf
//      7:160) is short (3 and 10 tokens respectively). The first half (3
//      tokens, ٱضْرِب بِّعَصَاكَ ٱلْحَجَرَ) carries a case-marked common noun and
//      falls inside the build stage's 3-9 token window -- left as ordinary
//      prose per the task's explicit instruction rather than fragmented to
//      dodge it. The second half (10 tokens) is automatically safe.
//
// No page footnotes (book_note) on these pages.
//
// 20 new words (شَرِيف، حَضَر، ضَيْف، خَيْمَة، حَرّ، غَمَام، أَظَلَّ، مَاء، عَطَش،
// اِنْفَجَرَ، مَشْرَب، جُوع، فَاكِهَة، طَيِّب، حَلْوَى، طَيْر، سُهُولَة، مَنّ، سَلْوَى،
// ضِيَافَة).
export const CHAPTER = {
  id: 'ch9',
  title: { ar: 'فِي الْبَرِّيَّةِ', en: 'In the Wilderness' },
  newWords: [
    'شَرِيف', 'حَضَر', 'ضَيْف', 'خَيْمَة', 'حَرّ', 'غَمَام', 'أَظَلَّ', 'مَاء', 'عَطَش',
    'اِنْفَجَرَ', 'مَشْرَب', 'جُوع', 'فَاكِهَة', 'طَيِّب', 'حَلْوَى', 'طَيْر', 'سُهُولَة',
    'مَنّ', 'سَلْوَى', 'ضِيَافَة',
  ],
  lemmas: {
    'شَرِيف': { gloss: 'noble' },
    'حَضَر': { gloss: 'settled life, civilization (opp. of desert/nomadic life)' },
    'ضَيْف': { gloss: 'guest' },
    'خَيْمَة': { gloss: 'tent' },
    'حَرّ': { gloss: 'heat' },
    'غَمَام': { gloss: 'cloud' },
    'أَظَلَّ': { gloss: 'to shade, overshadow' },
    'مَاء': { gloss: 'water' },
    'عَطَش': { gloss: 'thirst' },
    'اِنْفَجَرَ': { gloss: 'to gush, burst forth' },
    'مَشْرَب': { gloss: 'drinking-place, watering-place' },
    'جُوع': { gloss: 'hunger' },
    'فَاكِهَة': { gloss: 'fruit' },
    'طَيِّب': { gloss: 'good, wholesome, pure' },
    'حَلْوَى': { gloss: 'sweets, sweetmeats' },
    'طَيْر': { gloss: 'bird(s)' },
    'سُهُولَة': { gloss: 'ease' },
    'مَنّ': { gloss: 'manna' },
    'سَلْوَى': { gloss: 'quails' },
    'ضِيَافَة': { gloss: 'hospitality, hosting' },
  },
  paragraphs: [
    {
      en: 'The Children of Israel reached the shore of safety and peace, and breathed its air like free, noble men. There they feared neither Pharaoh, nor Hāmān, nor his police. There they walked safe and secure, fearing no one but Allah.',
      sentences: [
        {
          id: 'qs-v7-c09-001',
          ar: 'وَصَلَ بَنُو إِسْرَائِيلَ إِلى بَرِّ الأَمْنِ وَالسَّلامِ وَتَنَفَّسُوا في هَوَائِهِ كَالأَحْرَارِ الأَشْرَافِ.',
          en: 'The Children of Israel reached the shore of safety and peace, and breathed its air like free, noble men.',
          tokens: [
            { surface: 'وَصَلَ', lemma: 'وَصَلَ', pos: 'verb', features: 'perf.3ms', root: 'و ص ل', gloss: 'to arrive; arrived' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'the Children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'بَرِّ', lemma: 'بَرّ', pos: 'noun', features: 'constr.gen', root: 'ب ر ر', gloss: 'the shore, land of' },
            { surface: 'الأَمْنِ', lemma: 'أَمْن', pos: 'noun', features: 'def.gen', root: 'ا م ن', gloss: 'safety' },
            { surface: 'وَالسَّلامِ', lemma: 'سَلام', pos: 'noun', features: 'conj+def.gen', gloss: 'and peace' },
            { surface: 'وَتَنَفَّسُوا', lemma: 'تَنَفَّسَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ن ف س', gloss: 'to breathe; and breathed' },
            { surface: 'في', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'هَوَائِهِ', lemma: 'هَوَاء', pos: 'noun', features: 'gen+3ms', gloss: 'its air' },
            { surface: 'كَالأَحْرَارِ', lemma: 'حُرّ', pos: 'adj', features: 'prep+pl.def.gen', gloss: 'like the free' },
            { surface: 'الأَشْرَافِ', lemma: 'شَرِيف', pos: 'adj', features: 'pl.def.gen', root: 'ش ر ف', gloss: 'the noble' },
          ],
        },
        {
          id: 'qs-v7-c09-002',
          ar: 'هُنَالِكَ لا يَخَافُونَ فِرْعَوْنَ وَلا يَخَافُونَ هَامَانَ وَلا يَخَافُونَ شُرْطَتَهُ.',
          en: 'There they feared neither Pharaoh, nor Hāmān, nor his police.',
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'there' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَخَافُونَ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3mp', gloss: 'to fear; fear' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'acc', gloss: 'Pharaoh' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'يَخَافُونَ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3mp', gloss: 'to fear; fear' },
            { surface: 'هَامَانَ', lemma: 'هَامَان', pos: 'proper', features: 'acc', gloss: 'Hāmān' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'يَخَافُونَ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3mp', gloss: 'to fear; fear' },
            { surface: 'شُرْطَتَهُ', lemma: 'شُرْطَة', pos: 'noun', features: 'acc+3ms', gloss: 'his police' },
          ],
        },
        {
          id: 'qs-v7-c09-003',
          ar: 'هُنَالِكَ يَمْشُونَ آمِنِينَ مُطْمَئِنِّينَ لا يَخْشَوْنَ أَحَداً إِلا اللَّه.',
          en: 'There they walked safe and secure, fearing no one but Allah.',
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'there' },
            { surface: 'يَمْشُونَ', lemma: 'مَشَى', pos: 'verb', features: 'impf.3mp', gloss: 'to walk; walk' },
            { surface: 'آمِنِينَ', lemma: 'أَمِنَ', pos: 'adj', features: 'pl.acc', gloss: 'safe' },
            { surface: 'مُطْمَئِنِّينَ', lemma: 'اِطْمَأَنَّ', pos: 'adj', features: 'pl.acc', gloss: 'secure, tranquil' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَخْشَوْنَ', lemma: 'خَشِيَ', pos: 'verb', features: 'impf.3mp', root: 'خ ش ي', gloss: 'to fear' },
            { surface: 'أَحَداً', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone' },
            { surface: 'إِلا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'اللَّه', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
      ],
      checks: [
        {
          q: 'إِلَى أَيْنَ وَصَلَ بَنُو إِسْرَائِيلَ؟',
          options: ['إِلَى بَرِّ الْأَمْنِ وَالسَّلَامِ', 'إِلَى مِصْرَ', 'إِلَى الْبَحْرِ الْأَحْمَرِ'],
          answer: 0,
          qEn: 'Where did the Children of Israel arrive?',
          optionsEn: ['At the shore of safety and peace', 'At Egypt', 'At the Red Sea'],
        },
        {
          q: 'مِمَّنْ لَمْ يَعُدْ بَنُو إِسْرَائِيلَ يَخَافُونَ هُنَالِكَ؟',
          options: ['مِنْ فِرْعَوْنَ وَهَامَانَ وَشُرْطَتِهِ', 'مِنَ اللَّهِ', 'مِنَ الْجُوعِ'],
          answer: 0,
          qEn: 'Whom did the Children of Israel no longer fear there?',
          optionsEn: ['Pharaoh, Hāmān, and his police', 'Allah', 'Hunger'],
        },
      ],
    },
    {
      en: 'But they were people of settled life, and the sun would harm them in the wilderness. Yet they were guests of Allah! Have you not seen how kings honor their guests, and how they pitch tents for them to shield them from the heat of the sun? Indeed the honor of Allah is above every honor! Allah commanded the cloud to shade them, so they walked in the shade of the cloud, and the cloud moved with them wherever they moved, and stopped wherever they stopped.',
      sentences: [
        {
          id: 'qs-v7-c09-004',
          ar: 'وَلكِنَّهُمْ كَانُوا أَهْلَ الْحَضَرِ وَكَانَتِ الشَّمْسُ تُؤْذِيهِمْ في الْبَرِّيَّةِ.',
          en: 'But they were people of settled life, and the sun would harm them in the wilderness.',
          tokens: [
            { surface: 'وَلكِنَّهُمْ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part+3mp', gloss: 'but they' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'أَهْلَ', lemma: 'أَهْل', pos: 'noun', features: 'acc.constr', gloss: 'people of' },
            { surface: 'الْحَضَرِ', lemma: 'حَضَر', pos: 'noun', features: 'def.gen', root: 'ح ض ر', gloss: 'settled life' },
            { surface: 'وَكَانَتِ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'and was' },
            { surface: 'الشَّمْسُ', lemma: 'شَمْس', pos: 'noun', features: 'def.nom', gloss: 'the sun' },
            { surface: 'تُؤْذِيهِمْ', lemma: 'آذَى', pos: 'verb', features: 'impf.3fs+3mp', gloss: 'to harm; harming them' },
            { surface: 'في', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبَرِّيَّةِ', lemma: 'بَرِّيَّة', pos: 'noun', features: 'def.gen', root: 'ب ر ر', gloss: 'the wilderness' },
          ],
        },
        {
          id: 'qs-v7-c09-005',
          ar: 'وَكَانُوا ضُيُوفَ اللَّهِ!',
          en: 'Yet they were guests of Allah!',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'and were' },
            { surface: 'ضُيُوفَ', lemma: 'ضَيْف', pos: 'noun', features: 'acc.constr', root: 'ض ي ف', gloss: 'guests of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v7-c09-006',
          ar: 'أَلَمْ تَرَ إِلى الْمُلُوكِ كَيْفَ يُكْرِمُونَ ضُيُوفَهُمْ؟!',
          en: 'Have you not seen how kings honor their guests?!',
          tokens: [
            { surface: 'أَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'part+neg', gloss: 'have not' },
            { surface: 'تَرَ', lemma: 'رَأَى', pos: 'verb', features: 'impf.2ms', gloss: 'to see; you see' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْمُلُوكِ', lemma: 'مَلِك', pos: 'noun', features: 'pl.def.gen', gloss: 'the kings' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'يُكْرِمُونَ', lemma: 'أَكْرَمَ', pos: 'verb', features: 'impf.3mp', gloss: 'to honor; honor' },
            { surface: 'ضُيُوفَهُمْ', lemma: 'ضَيْف', pos: 'noun', features: 'acc+3mp', gloss: 'their guests' },
          ],
        },
        {
          id: 'qs-v7-c09-007',
          ar: 'وَكَيْفَ يَضْرِبُونَ لَهُمُ الْخِيَامَ تَقِيهِمْ حَرَّ الشَّمْسِ؟!',
          en: 'And how they pitch tents for them to shield them from the heat of the sun?!',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'يَضْرِبُونَ', lemma: 'ضَرَبَ', pos: 'verb', features: 'impf.3mp', gloss: 'to pitch, strike; pitch' },
            { surface: 'لَهُمُ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'الْخِيَامَ', lemma: 'خَيْمَة', pos: 'noun', features: 'pl.def.acc', root: 'خ ي م', gloss: 'the tents' },
            { surface: 'تَقِيهِمْ', lemma: 'وَقَى', pos: 'verb', features: 'impf.3fs+3mp', gloss: 'to protect, shield; shielding them' },
            { surface: 'حَرَّ', lemma: 'حَرّ', pos: 'noun', features: 'acc.constr', root: 'ح ر ر', gloss: 'the heat of' },
            { surface: 'الشَّمْسِ', lemma: 'شَمْس', pos: 'noun', features: 'def.gen', gloss: 'the sun' },
          ],
        },
        {
          id: 'qs-v7-c09-008',
          ar: 'إِنَّ كَرَامَةَ اللَّه فَوْقَ كُلِّ كَرَامَةٍ!',
          en: 'Indeed the honor of Allah is above every honor!',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'كَرَامَةَ', lemma: 'كَرَامَة', pos: 'noun', features: 'acc.constr', gloss: 'the honor of' },
            { surface: 'اللَّه', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'فَوْقَ', lemma: 'فَوْقَ', pos: 'noun', features: 'acc', gloss: 'above' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'كَرَامَةٍ', lemma: 'كَرَامَة', pos: 'noun', features: 'indef.gen', gloss: 'honor' },
          ],
        },
        {
          id: 'qs-v7-c09-009',
          ar: 'وَأَمَرَ اللَّهُ الْغَمَامَ أَنْ يُظَلَّهُمْ،',
          en: 'Allah commanded the cloud to shade them,',
          tokens: [
            { surface: 'وَأَمَرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to command; and commanded' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'الْغَمَامَ', lemma: 'غَمَام', pos: 'noun', features: 'def.acc', root: 'غ م م', gloss: 'the cloud' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُظَلَّهُمْ', lemma: 'أَظَلَّ', pos: 'verb', features: 'impf.3ms+3mp', root: 'ظ ل ل', gloss: 'to shade; that it shade them' },
          ],
        },
        {
          id: 'qs-v7-c09-010',
          ar: 'فَكَانُوا يَمْشُونَ في ظِلِّ الْغَمَامِ،',
          en: 'so they walked in the shade of the cloud,',
          tokens: [
            { surface: 'فَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'so were' },
            { surface: 'يَمْشُونَ', lemma: 'مَشَى', pos: 'verb', features: 'impf.3mp', gloss: 'to walk; walking' },
            { surface: 'في', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ظِلِّ', lemma: 'ظِلّ', pos: 'noun', features: 'constr.gen', gloss: 'the shade of' },
            { surface: 'الْغَمَامِ', lemma: 'غَمَام', pos: 'noun', features: 'def.gen', gloss: 'the cloud' },
          ],
        },
        {
          id: 'qs-v7-c09-011',
          ar: 'وَكَانَ الْغَمَامُ يَسِيرُ مَعَهُمْ حَيْثُ سَارُوا وَيَقِفُ أَيْنَمَا وَقَفُوا.',
          en: 'and the cloud moved with them wherever they moved, and stopped wherever they stopped.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'and was' },
            { surface: 'الْغَمَامُ', lemma: 'غَمَام', pos: 'noun', features: 'def.nom', gloss: 'the cloud' },
            { surface: 'يَسِيرُ', lemma: 'سَارَ', pos: 'verb', features: 'impf.3ms', gloss: 'to move, travel; moves' },
            { surface: 'مَعَهُمْ', lemma: 'مَعَ', pos: 'prep', features: 'prep+3mp', gloss: 'with them' },
            { surface: 'حَيْثُ', lemma: 'حَيْثُ', pos: 'adv', features: 'adv', gloss: 'wherever' },
            { surface: 'سَارُوا', lemma: 'سَارَ', pos: 'verb', features: 'perf.3mp', gloss: 'they moved' },
            { surface: 'وَيَقِفُ', lemma: 'وَقَفَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to stop; and stops' },
            { surface: 'أَيْنَمَا', lemma: 'أَيْنَمَا', pos: 'adv', features: 'adv', gloss: 'wherever' },
            { surface: 'وَقَفُوا', lemma: 'وَقَفَ', pos: 'verb', features: 'perf.3mp', gloss: 'they stopped' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ حَمَى اللَّهُ بَنِي إِسْرَائِيلَ مِنْ حَرِّ الشَّمْسِ؟',
          options: ['أَمَرَ الْغَمَامَ أَنْ يُظَلَّهُمْ', 'بَنَى لَهُمْ بُيُوتاً', 'أَرْسَلَ لَهُمُ الْمَطَرَ'],
          answer: 0,
          qEn: 'How did Allah protect the Children of Israel from the heat of the sun?',
          optionsEn: ['He commanded the cloud to shade them', 'He built them houses', 'He sent them rain'],
        },
        {
          q: 'مَاذَا كَانَ بَنُو إِسْرَائِيلَ بِالنِّسْبَةِ لِلَّهِ؟',
          options: ['كَانُوا ضُيُوفَ اللَّهِ', 'كَانُوا أَعْدَاءَ اللَّهِ', 'كَانُوا غُرَبَاءَ عَنِ اللَّهِ'],
          answer: 0,
          qEn: 'What were the Children of Israel in relation to Allah?',
          optionsEn: ['They were guests of Allah', 'They were enemies of Allah', 'They were strangers to Allah'],
        },
      ],
    },
    {
      en: "The Children of Israel grew thirsty, and there was no water in the wilderness -- no river, no well. They went to Mūsā, complaining to him of thirst, as a child complains to his mother and cries out to her for help. Mūsā called upon his Lord -- and who did he have besides Him? So He said: 'Strike the rock with your staff.' And there gushed forth from it twelve springs; every group of people knew their drinking-place.",
      sentences: [
        {
          id: 'qs-v7-c09-012',
          ar: 'وَعَطِشَ بَنُو إِسْرَائِيلَ وَلا مَاءَ في الْبَرِّيَّةِ،',
          en: 'The Children of Israel grew thirsty, and there was no water in the wilderness,',
          tokens: [
            { surface: 'وَعَطِشَ', lemma: 'عَطِشَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to thirst; and grew thirsty' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', gloss: 'the Children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and no' },
            { surface: 'مَاءَ', lemma: 'مَاء', pos: 'noun', features: 'indef.acc', root: 'م و ه', gloss: 'water' },
            { surface: 'في', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبَرِّيَّةِ', lemma: 'بَرِّيَّة', pos: 'noun', features: 'def.gen', gloss: 'the wilderness' },
          ],
        },
        {
          id: 'qs-v7-c09-013',
          ar: 'وَلاَ نَهْرَ وَلا بِئْرَ.',
          en: 'no river, no well.',
          tokens: [
            { surface: 'وَلاَ', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'نَهْرَ', lemma: 'نَهْر', pos: 'noun', features: 'indef.acc', gloss: 'a river' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'بِئْرَ', lemma: 'بِئْر', pos: 'noun', features: 'indef.acc', gloss: 'a well' },
          ],
        },
        {
          id: 'qs-v7-c09-014',
          ar: 'ذَهَبُوا إِلى مُوسى،',
          en: 'They went to Mūsā,',
          tokens: [
            { surface: 'ذَهَبُوا', lemma: 'ذَهَبَ', pos: 'verb', features: 'perf.3mp', gloss: 'to go; they went' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
          ],
        },
        {
          id: 'qs-v7-c09-015',
          ar: 'يَشْكُونَ إِلَيْهِ الْعَطَشَ كَمَا يَشْكُو الطِّفْلُ إِلى أُمِّهِ وَيَسْتَغِيثُهَا.',
          en: 'complaining to him of thirst, as a child complains to his mother and cries out to her for help.',
          tokens: [
            { surface: 'يَشْكُونَ', lemma: 'شَكَا', pos: 'verb', features: 'impf.3mp', root: 'ش ك و', gloss: 'to complain; complaining' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'الْعَطَشَ', lemma: 'عَطَش', pos: 'noun', features: 'def.acc', root: 'ع ط ش', gloss: 'the thirst' },
            { surface: 'كَمَا', lemma: 'مَا', pos: 'part', features: 'prep+rel', gloss: 'as, just as' },
            { surface: 'يَشْكُو', lemma: 'شَكَا', pos: 'verb', features: 'impf.3ms', gloss: 'to complain; complains' },
            { surface: 'الطِّفْلُ', lemma: 'طِفْل', pos: 'noun', features: 'def.nom', gloss: 'the child' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'أُمِّهِ', lemma: 'أُمّ', pos: 'noun', features: 'gen+3ms', gloss: 'his mother' },
            { surface: 'وَيَسْتَغِيثُهَا', lemma: 'اِسْتَغَاثَ', pos: 'verb', features: 'conj+impf.3ms+3fs', gloss: 'to cry for help; and cries out to her' },
          ],
        },
        {
          id: 'qs-v7-c09-016',
          ar: 'وَدَعَا مُوسى رَبَّهُ!',
          en: 'Mūsā called upon his Lord!',
          tokens: [
            { surface: 'وَدَعَا', lemma: 'دَعَا', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to call upon; and called upon' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'رَبَّهُ', lemma: 'رَبّ', pos: 'noun', features: 'acc+3ms', gloss: 'his Lord' },
          ],
        },
        {
          id: 'qs-v7-c09-017',
          ar: 'وَمَنْ لَهُ غَيْرُهُ؟!',
          en: 'And who did he have besides Him?!',
          tokens: [
            { surface: 'وَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and who' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'غَيْرُهُ', lemma: 'غَيْر', pos: 'noun', features: 'nom+3ms', gloss: 'other than Him' },
          ],
        },
        {
          id: 'qs-v7-c09-018',
          ar: 'فَقَالَ:',
          en: 'So He said:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'so He said' },
          ],
        },
        {
          // Al-A'rāf 7:160a.
          id: 'qs-v7-c09-019',
          ar: '﴿ٱضْرِب بِّعَصَاكَ ٱلْحَجَرَ﴾.',
          en: '"Strike the rock with your staff."',
          tokens: [
            { surface: 'ٱضْرِب', lemma: 'ضَرَبَ', pos: 'verb', features: 'imp.2ms', gloss: 'to strike; strike!' },
            { surface: 'بِّعَصَاكَ', lemma: 'عَصَا', pos: 'noun', features: 'prep+gen+2ms', gloss: 'with your staff' },
            { surface: 'ٱلْحَجَرَ', lemma: 'حَجَر', pos: 'noun', features: 'def.acc', gloss: 'the rock' },
          ],
        },
        {
          // Al-A'rāf 7:160b.
          id: 'qs-v7-c09-020',
          ar: '﴿فَٱنفَجَرَتْ مِنْهُ ٱثْنَتَا عَشْرَةَ عَيْنًا قَدْ عَلِمَ كُلُّ أُنَاسٍ مَّشْرَبَهُمْ﴾.',
          en: '"And there gushed forth from it twelve springs; every group of people knew their drinking-place."',
          tokens: [
            { surface: 'فَٱنفَجَرَتْ', lemma: 'اِنْفَجَرَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ف ج ر', gloss: 'to gush, burst forth; and gushed forth' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'from it' },
            { surface: 'ٱثْنَتَا', lemma: 'اِثْنَانِ', pos: 'num', features: 'nom', gloss: 'twelve (fs)' },
            { surface: 'عَشْرَةَ', lemma: 'عَشَرَة', pos: 'num', features: 'acc', gloss: '-teen' },
            { surface: 'عَيْنًا', lemma: 'عَيْن', pos: 'noun', features: 'indef.acc', gloss: 'a spring' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed, already' },
            { surface: 'عَلِمَ', lemma: 'عَلِمَ', pos: 'verb', features: 'perf.3ms', gloss: 'to know; knew' },
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'nom.constr', gloss: 'every' },
            { surface: 'أُنَاسٍ', lemma: 'نَاس', pos: 'noun', features: 'indef.gen', gloss: 'people, a group of people' },
            { surface: 'مَّشْرَبَهُمْ', lemma: 'مَشْرَب', pos: 'noun', features: 'acc+3mp', root: 'ش ر ب', gloss: 'their drinking-place' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ عِنْدَمَا عَطِشَ بَنُو إِسْرَائِيلَ؟',
          options: ['ذَهَبُوا إِلَى مُوسَى يَشْكُونَ إِلَيْهِ الْعَطَشَ', 'صَبَرُوا دُونَ شَكْوَى', 'رَجَعُوا إِلَى مِصْرَ'],
          answer: 0,
          qEn: 'What happened when the Children of Israel grew thirsty?',
          optionsEn: ['They went to Mūsā complaining to him of thirst', 'They endured without complaint', 'They returned to Egypt'],
        },
        {
          q: 'مَاذَا حَدَثَ حِينَ ضَرَبَ مُوسَى الْحَجَرَ بِعَصَاهُ؟',
          options: ['انْفَجَرَتْ مِنْهُ اثْنَتَا عَشْرَةَ عَيْناً', 'انْشَقَّ الْحَجَرُ وَلَمْ يَخْرُجْ مِنْهُ شَيْءٌ', 'خَرَجَتْ مِنْهُ نَارٌ'],
          answer: 0,
          qEn: 'What happened when Mūsā struck the rock with his staff?',
          optionsEn: ['Twelve springs gushed forth from it', 'The rock split and nothing came out', 'Fire came out of it'],
        },
      ],
    },
    {
      en: "The Children of Israel grew hungry, and complained to Mūsā of hunger, as a child complains to his mother and cries out to her for help. They said: 'You brought us out of Egypt, the land of fruits and produce, the land of bounties and good things -- so who will provide us with food in this wilderness?' Mūsā called upon his Lord again -- and who did he have besides Him? So He sent down food upon them: He sent it down for them on the leaves of the trees, like sweets, and sent them birds which they took from the trees with ease. That was the manna and the quails, Allah's hospitality to the Children of Israel in the wilderness.",
      sentences: [
        {
          id: 'qs-v7-c09-021',
          ar: 'وَجَاعَ بَنُو إِسْرائِيل فَشَكَوا إِلى مُوسى الْجُوعَ كَمَا يَشْكُو الطِّفْلُ إِلى أُمِّهِ وَيَسْتَغِيثُهَا.',
          en: 'The Children of Israel grew hungry, and complained to Mūsā of hunger, as a child complains to his mother and cries out to her for help.',
          tokens: [
            { surface: 'وَجَاعَ', lemma: 'جَاعَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to hunger; and grew hungry' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', gloss: 'the Children of' },
            { surface: 'إِسْرائِيل', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'فَشَكَوا', lemma: 'شَكَا', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to complain; and complained' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
            { surface: 'الْجُوعَ', lemma: 'جُوع', pos: 'noun', features: 'def.acc', root: 'ج و ع', gloss: 'the hunger' },
            { surface: 'كَمَا', lemma: 'مَا', pos: 'part', features: 'prep+rel', gloss: 'as, just as' },
            { surface: 'يَشْكُو', lemma: 'شَكَا', pos: 'verb', features: 'impf.3ms', gloss: 'to complain; complains' },
            { surface: 'الطِّفْلُ', lemma: 'طِفْل', pos: 'noun', features: 'def.nom', gloss: 'the child' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'أُمِّهِ', lemma: 'أُمّ', pos: 'noun', features: 'gen+3ms', gloss: 'his mother' },
            { surface: 'وَيَسْتَغِيثُهَا', lemma: 'اِسْتَغَاثَ', pos: 'verb', features: 'conj+impf.3ms+3fs', gloss: 'to cry for help; and cries out to her' },
          ],
        },
        {
          id: 'qs-v7-c09-022',
          ar: 'وَقَالُوا إِنَّكَ أَخْرَجْتَنَا مِنْ مِصْرَ أَرْضِ الْفَوَاكِهِ وَالثَّمَرَاتِ وَأَرْضِ الْخَيْرَاتِ وَالطَّيِّبَاتِ فَمَنْ لَنَا بِطَعَامٍ في هذِهِ الْبَرِّيَّةِ؟',
          en: '"You brought us out of Egypt, the land of fruits and produce, the land of bounties and good things -- so who will provide us with food in this wilderness?"',
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'and said' },
            { surface: 'إِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'part+2ms', gloss: 'indeed you' },
            { surface: 'أَخْرَجْتَنَا', lemma: 'أَخْرَجَ', pos: 'verb', features: 'perf.2ms+1p', gloss: 'to bring out; you brought us out' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'أَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'constr.gen', gloss: 'the land of' },
            { surface: 'الْفَوَاكِهِ', lemma: 'فَاكِهَة', pos: 'noun', features: 'pl.def.gen', root: 'ف ك ه', gloss: 'the fruits' },
            { surface: 'وَالثَّمَرَاتِ', lemma: 'ثَمَرَة', pos: 'noun', features: 'conj+pl.def.gen', gloss: 'and the produce' },
            { surface: 'وَأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'conj+constr.gen', gloss: 'and the land of' },
            { surface: 'الْخَيْرَاتِ', lemma: 'خَيْر', pos: 'noun', features: 'pl.def.gen', gloss: 'the bounties' },
            { surface: 'وَالطَّيِّبَاتِ', lemma: 'طَيِّب', pos: 'adj', features: 'conj+pl.def.gen', root: 'ط ي ب', gloss: 'and the good things' },
            { surface: 'فَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'so who' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'بِطَعَامٍ', lemma: 'طَعَام', pos: 'noun', features: 'prep+indef.gen', gloss: 'with food' },
            { surface: 'في', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'هذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْبَرِّيَّةِ', lemma: 'بَرِّيَّة', pos: 'noun', features: 'def.gen', gloss: 'the wilderness' },
          ],
        },
        {
          id: 'qs-v7-c09-023',
          ar: 'دَعَا مُوسى رَبَّهُ!',
          en: 'Mūsā called upon his Lord!',
          tokens: [
            { surface: 'دَعَا', lemma: 'دَعَا', pos: 'verb', features: 'perf.3ms', gloss: 'to call upon; called upon' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'رَبَّهُ', lemma: 'رَبّ', pos: 'noun', features: 'acc+3ms', gloss: 'his Lord' },
          ],
        },
        {
          id: 'qs-v7-c09-024',
          ar: 'وَمَنْ لَهُ غَيْرُهُ؟!',
          en: 'And who did he have besides Him?!',
          tokens: [
            { surface: 'وَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and who' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'غَيْرُهُ', lemma: 'غَيْر', pos: 'noun', features: 'nom+3ms', gloss: 'other than Him' },
          ],
        },
        {
          id: 'qs-v7-c09-025',
          ar: 'فَأَنْزَلَ عَلَيْهِمُ الطَّعَامَ.',
          en: 'So He sent down food upon them.',
          tokens: [
            { surface: 'فَأَنْزَلَ', lemma: 'أَنزَلَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to send down; so He sent down' },
            { surface: 'عَلَيْهِمُ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'الطَّعَامَ', lemma: 'طَعَام', pos: 'noun', features: 'def.acc', gloss: 'the food' },
          ],
        },
        {
          id: 'qs-v7-c09-026',
          ar: 'أَنْزَلَ لَهُمْ عَلى أَوْرَاقِ الأَشْجَارِ مِثْلَ الْحَلْوَى،',
          en: 'He sent it down for them on the leaves of the trees, like sweets,',
          tokens: [
            { surface: 'أَنْزَلَ', lemma: 'أَنزَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to send down; sent down' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'عَلى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'أَوْرَاقِ', lemma: 'وَرَق', pos: 'noun', features: 'pl.constr.gen', gloss: 'the leaves of' },
            { surface: 'الأَشْجَارِ', lemma: 'شَجَرَة', pos: 'noun', features: 'pl.def.gen', gloss: 'the trees' },
            { surface: 'مِثْلَ', lemma: 'مِثْل', pos: 'noun', features: 'acc.constr', gloss: 'like' },
            { surface: 'الْحَلْوَى', lemma: 'حَلْوَى', pos: 'noun', features: 'def.gen', root: 'ح ل و', gloss: 'sweets' },
          ],
        },
        {
          id: 'qs-v7-c09-027',
          ar: 'وَأَرْسَلَ إِلَيْهِمْ طَيْراً يَأْخُذُونَهُ مِنَ الأَشْجَارِ بِسُهُولَةٍ.',
          en: 'and sent them birds which they took from the trees with ease.',
          tokens: [
            { surface: 'وَأَرْسَلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and sent' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'طَيْراً', lemma: 'طَيْر', pos: 'noun', features: 'indef.acc', root: 'ط ي ر', gloss: 'birds' },
            { surface: 'يَأْخُذُونَهُ', lemma: 'أَخَذَ', pos: 'verb', features: 'impf.3mp+3ms', gloss: 'to take; they took it' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الأَشْجَارِ', lemma: 'شَجَرَة', pos: 'noun', features: 'pl.def.gen', gloss: 'the trees' },
            { surface: 'بِسُهُولَةٍ', lemma: 'سُهُولَة', pos: 'noun', features: 'prep+indef.gen', root: 'س ه ل', gloss: 'with ease' },
          ],
        },
        {
          id: 'qs-v7-c09-028',
          ar: 'ذَلِكَ هُوَ الْمَنُّ وَالسَّلْوَى،',
          en: 'That was the manna and the quails,',
          tokens: [
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'he, it' },
            { surface: 'الْمَنُّ', lemma: 'مَنّ', pos: 'noun', features: 'def.nom', root: 'م ن ن', gloss: 'the manna' },
            { surface: 'وَالسَّلْوَى', lemma: 'سَلْوَى', pos: 'noun', features: 'conj+def.nom', gloss: 'and the quails' },
          ],
        },
        {
          id: 'qs-v7-c09-029',
          ar: 'ضِيَافَةُ اللَّهِ لِبَنِي إِسْرَائِيلَ في الْبَرِّيَّةِ.',
          en: "Allah's hospitality to the Children of Israel in the wilderness.",
          tokens: [
            { surface: 'ضِيَافَةُ', lemma: 'ضِيَافَة', pos: 'noun', features: 'nom.constr', root: 'ض ي ف', gloss: 'the hospitality of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'لِبَنِي', lemma: 'اِبْن', pos: 'noun', features: 'prep+pl.constr.gen', gloss: 'to the Children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'في', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبَرِّيَّةِ', lemma: 'بَرِّيَّة', pos: 'noun', features: 'def.gen', gloss: 'the wilderness' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ اسْتَجَابَ اللَّهُ لِجُوعِ بَنِي إِسْرَائِيلَ؟',
          options: ['أَنْزَلَ عَلَيْهِمُ الْمَنَّ وَالسَّلْوَى', 'أَمَرَهُمْ بِالصَّبْرِ فَقَطْ', 'أَرْسَلَ لَهُمْ مُوسَى لِيَزْرَعُوا الأَرْضَ'],
          answer: 0,
          qEn: 'How did Allah respond to the hunger of the Children of Israel?',
          optionsEn: ['He sent down manna and quails upon them', 'He simply commanded them to be patient', 'He sent Mūsā to have them farm the land'],
        },
        {
          q: 'مَاذَا كَانَ الْمَنُّ وَالسَّلْوَى؟',
          options: ['ضِيَافَةُ اللَّهِ لِبَنِي إِسْرَائِيلَ فِي الْبَرِّيَّةِ', 'طَعَاماً اشْتَرَاهُ بَنُو إِسْرَائِيلَ مِنْ مِصْرَ', 'هَدِيَّةً مِنْ فِرْعَوْنَ'],
          answer: 0,
          qEn: 'What were the manna and quails?',
          optionsEn: ["Allah's hospitality to the Children of Israel in the wilderness", 'Food that the Children of Israel bought from Egypt', 'A gift from Pharaoh'],
        },
      ],
    },
  ],
  workshop: {
    // Recycled frame: "دَعَا مُوسى رَبَّهُ! وَمَنْ لَهُ غَيْرُهُ؟!" repeats almost
    // verbatim at qs-v7-c09-016/017 and qs-v7-c09-023/024, and the pattern
    // recurs once more near the end of ch10's own source material -- a
    // clean دَعَا perfect-tense person-shift drill, built entirely from the
    // narrator's own prose, never from a Qur'anic quotation.
    cloze: [
      {
        type: 'cloze',
        pre: '',
        post: 'مُوسى رَبَّهُ! وَمَنْ لَهُ غَيْرُهُ؟!',
        en: 'Mūsā called upon his Lord! And who did he have besides Him?!',
        options: ['دَعَا', 'دَعَتْ', 'دَعَوْا', 'أَدْعُو'],
        answer: 0,
        rationales: [
          '3rd masc. sing. perfect -- matches "Mūsā" (singular).',
          '3rd fem. sing. -- wrong gender.',
          '3rd masc. plural -- wrong; the subject is singular.',
          '1st person -- wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ الْغَمَامُ',
        post: 'مَعَهُمْ حَيْثُ سَارُوا.',
        en: 'and the cloud moved with them wherever they moved.',
        options: ['يَسِيرُ', 'سَارَ', 'تَسِيرُ', 'يَسِيرُونَ'],
        answer: 0,
        rationales: [
          '3rd masc. sing. imperfect -- correct, agrees with "the cloud" (masc.) as the verbal predicate of كَانَ.',
          'Perfect -- wrong; كَانَ + imperfect gives the habitual/continuous past reading required here.',
          '3rd fem. sing. -- wrong gender; الْغَمَام is masculine.',
          '3rd masc. plural -- wrong; the subject "the cloud" is singular.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَمَرَ اللَّهُ الْغَمَامَ أَنْ',
        post: 'هُمْ.',
        en: 'Allah commanded the cloud to shade them.',
        options: ['يُظَلَّ', 'يُظَلُّ', 'أَظَلَّ', 'ظَلَّلُوا'],
        answer: 0,
        rationales: [
          'Subjunctive after أَنْ -- correct, matching أَمَرَ...أَنْ + subjunctive verb.',
          'Indicative -- wrong mood after أَنْ.',
          'Perfect -- wrong; the clause needs the subjunctive after أَنْ.',
          '3rd plural perfect -- wrong number and mood.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'دَعَا مُوسى رَبَّهُ',
        pre: '',
        post: 'رَبَّهُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['دَعَوْتُ', 'دَعَا', 'دَعَتْ', 'دَعَوْنَا'],
        answer: 0,
        rationales: [
          '1st singular perfect -- matches أَنَا.',
          '3rd masc. sing. -- he, the form given.',
          '3rd fem. sing. -- she.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'دَعَا مُوسى رَبَّهُ',
        pre: '',
        post: 'رَبَّهُ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['دَعَوْا', 'دَعَا', 'دَعَتْ', 'دَعَوْتُمْ'],
        answer: 0,
        rationales: [
          '3rd masc. plural -- matches هُمْ.',
          '3rd masc. sing. -- he, the form given.',
          '3rd fem. sing. -- she.',
          '2nd masc. plural -- you (pl.).',
        ],
      },
      {
        type: 'shift',
        base: 'دَعَا مُوسى رَبَّهُ',
        pre: '',
        post: 'رَبَّهُ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['دَعَوْنَا', 'دَعَا', 'دَعَوْتُ', 'دَعَوْا'],
        answer: 0,
        rationales: [
          '1st plural perfect -- matches نَحْنُ.',
          '3rd masc. sing. -- he, the form given.',
          '1st singular -- I.',
          '3rd masc. plural -- they.',
        ],
      },
    ],
  },
};

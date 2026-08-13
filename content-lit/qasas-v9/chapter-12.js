// قَصَصُ النَّبِيِّينَ, volume 9, chapter 12 -- قَصْرٌ عَظِيمٌ مِنْ زُجَاجٍ.
// Printed pages 231 (from its own heading box, right after ch11's closing
// sentence) through 232 (top of the page only), ending right before ch13's
// heading وَأَسْلَمَتْ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ on that page.
// Transcribed by hand from the scan (vision OCR, 200dpi render) against
// ../CHAPTER-FORMAT.md.
//
// Sulaymān has his builders -- jinn and human -- build a great glass palace
// with water running beneath it, so lifelike that anyone unaware would take
// it for open water; the plan was that the Queen would think it water and
// lift her garment to wade through, exposing her own misjudgment and
// perceptual error -- the very same error, the narrator argues, by which
// she and her people take the sun (mere reflected light and life, one of
// Allah's own attributes) for a god and prostrate to it. This single
// object lesson, the chapter closes, was more eloquent than a hundred
// sermons and a thousand arguments.
//
// Grammar / lexical notes:
//   -- قَصْر ("a palace") was already taught in earlier volumes and is not
//      relisted; it is unrelated to qasas-v9 ch11's new lemma قُصُور, a
//      homograph maṣdar meaning "a shortcoming" (from قَصُرَ, "to fall
//      short") rather than the plural of this chapter's قَصْر -- two
//      distinct lemmas that happen to share one written form.
//   -- مَظَاهِر (unit 009, "outward appearances," pl. of مَظْهَر) is tagged
//      under the singular lemma مَظْهَر per the app's convention of storing
//      plurals under their singular dictionary form.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): بَنَى، قَصْر، حَالَ، نُور،
//      اِنْكَشَفَ، سَالَ، ذَكَاء، اللَّه، سُلَيْمَان، مَلِكَة، إِنْس، جِنّ، مَاء، شَمْس،
//      سَجَدَ، عَبَدَ، تَعَالَى، نَظَر، قُصُور
//      are all already taught and are NOT re-listed in newWords here.
//
// 20 new words (بَنَّاء، زُجَاج، أَجْرَى، حَسِبَ، مَاشٍ، مُؤَكَّد، تَوَهَّمَ، كَشَفَ،
// سَاق، تَبَيَّنَ، خَطَأ، أَدْرَكَ، اِنْخِدَاع، مَظْهَر، حَيَاة، خَالِق، غِطَاء، مُعَامَلَة،
// خُطْبَة، أَبْلَغ).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch12',
  title: { ar: 'قَصْرٌ عَظِيمٌ مِنْ زُجَاجٍ', en: 'A Great Palace of Glass' },
  newWords: ['بَنَّاء', 'زُجَاج', 'أَجْرَى', 'حَسِبَ', 'مَاشٍ', 'مُؤَكَّد', 'تَوَهَّمَ', 'كَشَفَ', 'سَاق', 'تَبَيَّنَ', 'خَطَأ', 'أَدْرَكَ', 'اِنْخِدَاع', 'مَظْهَر', 'حَيَاة', 'خَالِق', 'غِطَاء', 'مُعَامَلَة', 'خُطْبَة', 'أَبْلَغ'],
  lemmas: {
    بَنَّاء: { gloss: 'a builder' },
    زُجَاج: { gloss: 'glass' },
    أَجْرَى: { gloss: 'to make run, cause to flow' },
    حَسِبَ: { gloss: 'to reckon, think' },
    مَاشٍ: { gloss: 'one who walks' },
    مُؤَكَّد: { gloss: 'certain, confirmed' },
    تَوَهَّمَ: { gloss: 'to imagine, mistakenly suppose' },
    كَشَفَ: { gloss: 'to uncover' },
    سَاق: { gloss: 'a leg, shin' },
    تَبَيَّنَ: { gloss: 'to become clear' },
    خَطَأ: { gloss: 'an error, mistake' },
    أَدْرَكَ: { gloss: 'to realise, grasp' },
    اِنْخِدَاع: { gloss: 'being deceived' },
    مَظْهَر: { gloss: 'an outward appearance' },
    حَيَاة: { gloss: 'life' },
    خَالِق: { gloss: 'the Creator' },
    غِطَاء: { gloss: 'a covering, veil' },
    مُعَامَلَة: { gloss: 'a treatment, dealing with' },
    خُطْبَة: { gloss: 'a sermon' },
    أَبْلَغ: { gloss: 'more eloquent' },
  },
  paragraphs: [
    {
      en: "Sulaymān ordered the builders among mankind and jinn, and they built for her a great palace of glass and ran water beneath it -- so that one who did not know its nature would not think it was water, but the glass came between the walker and the water. It was certain that the Queen would imagine it was water and so lift the hem from her legs; and there she would realise her mistake and grasp her shortcoming in perception and her being deceived by outward appearances -- she and her people used to prostrate to the sun because it is the greatest outward manifestation of light and life, which are among Allah's own attributes, exalted is He. And there the veil would be lifted from her eyes, and she would know that she had erred just as she erred in treating glass as water and lifted the hem from her legs -- likewise she had erred in treating the sun as the Creator, and so prostrated to it and worshipped it. And that was more eloquent than a hundred sermons and a thousand arguments.",
      sentences: [
        {
          id: 'qs-v9-c12-001',
          ar: 'وَأَمَرَ سُلَيْمَانُ الْبَنَّائِينَ مِنَ الْإِنْسِ وَالْجِنِّ',
          en: 'Sulaymān ordered the builders among mankind and jinn,',
          tokens: [
            { surface: 'وَأَمَرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to order; and ordered' },
            { surface: 'سُلَيْمَانُ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'nom', gloss: 'Sulaymān' },
            { surface: 'الْبَنَّائِينَ', lemma: 'بَنَّاء', pos: 'noun', features: 'pl.def.acc', root: 'ب ن ي', gloss: 'the builders' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْإِنْسِ', lemma: 'إِنْس', pos: 'noun', features: 'def.gen', gloss: 'mankind' },
            { surface: 'وَالْجِنِّ', lemma: 'جِنّ', pos: 'noun', features: 'conj+def.gen', gloss: 'and jinn' },
          ],
        },
        {
          id: 'qs-v9-c12-002',
          ar: 'فَبَنَوْا لَهَا قَصْراً عَظِيماً مِنْ زُجَاجٍ',
          en: 'and they built for her a great palace of glass',
          tokens: [
            { surface: 'فَبَنَوْا', lemma: 'بَنَى', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to build; and built' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'for her' },
            { surface: 'قَصْراً', lemma: 'قَصْر', pos: 'noun', features: 'indef.acc', gloss: 'a palace' },
            { surface: 'عَظِيماً', lemma: 'عَظِيم', pos: 'adj', features: 'indef.acc', gloss: 'great' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'زُجَاجٍ', lemma: 'زُجَاج', pos: 'noun', features: 'indef.gen', gloss: 'glass' },
          ],
        },
        {
          id: 'qs-v9-c12-003',
          ar: 'وَأَجْرَوْا تَحْتَهُ الْمَاءَ،',
          en: 'and ran water beneath it,',
          tokens: [
            { surface: 'وَأَجْرَوْا', lemma: 'أَجْرَى', pos: 'verb', features: 'conj+perf.3mp', root: 'ج ر ي', gloss: 'to make run; and ran' },
            { surface: 'تَحْتَهُ', lemma: 'تَحْتَ', pos: 'prep', features: 'prep+3ms', gloss: 'beneath it' },
            { surface: 'الْمَاءَ', lemma: 'مَاء', pos: 'noun', features: 'def.acc', gloss: 'the water' },
          ],
        },
        {
          id: 'qs-v9-c12-004',
          ar: 'فَالَّذِي لَا يَعْرِفُ أَمْرَهُ لَا يَحْسِبُ أَنَّهُ مَاءٌ،',
          en: 'so that one who did not know its nature would not think it was water,',
          tokens: [
            { surface: 'فَالَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'conj+rel', gloss: 'so the one who' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', gloss: 'to know; knows' },
            { surface: 'أَمْرَهُ', lemma: 'أَمْر', pos: 'noun', features: 'acc+3ms', gloss: 'its nature' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَحْسِبُ', lemma: 'حَسِبَ', pos: 'verb', features: 'impf.3ms', root: 'ح س ب', gloss: 'to think; thinks' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that it' },
            { surface: 'مَاءٌ', lemma: 'مَاء', pos: 'noun', features: 'indef.nom', gloss: 'is water' },
          ],
        },
        {
          id: 'qs-v9-c12-005',
          ar: 'وَلَكِنَّ الزُّجَاجَ يَحُولُ بَيْنَ الْمَاشِي وَبَيْنَ الْمَاءِ،',
          en: 'but the glass came between the walker and the water.',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'الزُّجَاجَ', lemma: 'زُجَاج', pos: 'noun', features: 'def.acc', gloss: 'the glass' },
            { surface: 'يَحُولُ', lemma: 'حَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to come between; comes between' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'between' },
            { surface: 'الْمَاشِي', lemma: 'مَاشٍ', pos: 'noun', features: 'def.gen', root: 'م ش ي', gloss: 'the walker' },
            { surface: 'وَبَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'conj+prep', gloss: 'and between' },
            { surface: 'الْمَاءِ', lemma: 'مَاء', pos: 'noun', features: 'def.gen', gloss: 'the water' },
          ],
        },
        {
          id: 'qs-v9-c12-006',
          ar: 'وَكَانَ الْمُؤَكَّدُ أَنَّ الْمَلِكَةَ تَتَوَهَّمُهُ مَاءً',
          en: 'It was certain that the Queen would imagine it was water',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'الْمُؤَكَّدُ', lemma: 'مُؤَكَّد', pos: 'adj', features: 'def.nom', root: 'أ ك د', gloss: 'the certain (thing)' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الْمَلِكَةَ', lemma: 'مَلِكَة', pos: 'noun', features: 'def.acc', gloss: 'the Queen' },
            { surface: 'تَتَوَهَّمُهُ', lemma: 'تَوَهَّمَ', pos: 'verb', features: 'impf.3fs+3ms', root: 'و ه م', gloss: 'to imagine; imagines it' },
            { surface: 'مَاءً', lemma: 'مَاء', pos: 'noun', features: 'indef.acc', gloss: 'water' },
          ],
        },
        {
          id: 'qs-v9-c12-007',
          ar: 'فَتَكْشِفُ عَنْ سَاقَيْهَا،',
          en: 'and so lift the hem from her legs;',
          tokens: [
            { surface: 'فَتَكْشِفُ', lemma: 'كَشَفَ', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to uncover; and uncovers' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'سَاقَيْهَا', lemma: 'سَاق', pos: 'noun', features: 'du.gen+3fs', gloss: 'her legs' },
          ],
        },
        {
          id: 'qs-v9-c12-008',
          ar: 'وَهُنَالِكَ تَتَبَيَّنُ الْخَطَأَ',
          en: 'and there she would realise her mistake',
          tokens: [
            { surface: 'وَهُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'conj+adv', gloss: 'and there' },
            { surface: 'تَتَبَيَّنُ', lemma: 'تَبَيَّنَ', pos: 'verb', features: 'impf.3fs', root: 'ب ي ن', gloss: 'to become clear, realise; realises' },
            { surface: 'الْخَطَأَ', lemma: 'خَطَأ', pos: 'noun', features: 'def.acc', gloss: 'the mistake' },
          ],
        },
        {
          id: 'qs-v9-c12-009',
          ar: 'وَتُدْرِكُ قُصُورَ نَظَرِهَا وَانْخِدَاعَهَا بِالْمَظَاهِرِ،',
          en: 'and grasp her shortcoming in perception and her being deceived by outward appearances --',
          tokens: [
            { surface: 'وَتُدْرِكُ', lemma: 'أَدْرَكَ', pos: 'verb', features: 'conj+impf.3fs', root: 'د ر ك', gloss: 'to realise, grasp; and grasps' },
            { surface: 'قُصُورَ', lemma: 'قُصُور', pos: 'noun', features: 'acc.constr', gloss: 'the shortcoming of' },
            { surface: 'نَظَرِهَا', lemma: 'نَظَر', pos: 'noun', features: 'gen+3fs', gloss: 'her perception' },
            { surface: 'وَانْخِدَاعَهَا', lemma: 'اِنْخِدَاع', pos: 'noun', features: 'conj+acc+3fs', root: 'خ د ع', gloss: 'and her being deceived' },
            { surface: 'بِالْمَظَاهِرِ', lemma: 'مَظْهَر', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'by outward appearances' },
          ],
        },
        {
          id: 'qs-v9-c12-010',
          ar: 'وَكَانَتْ هِيَ وَقَوْمُهَا يَسْجُدُونَ لِلشَّمْسِ لِأَنَّهَا أَكْبَرُ مَظْهَرٍ لِلنُّورِ وَالْحَيَاةِ،',
          en: 'she and her people used to prostrate to the sun because it is the greatest outward manifestation of light and life,',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be; and used to be' },
            { surface: 'هِيَ', lemma: 'هُوَ', pos: 'part', features: 'part.3fs', gloss: 'she' },
            { surface: 'وَقَوْمُهَا', lemma: 'قَوْم', pos: 'noun', features: 'conj+nom+3fs', gloss: 'and her people' },
            { surface: 'يَسْجُدُونَ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to prostrate; prostrating' },
            { surface: 'لِلشَّمْسِ', lemma: 'شَمْس', pos: 'noun', features: 'prep+def.gen', gloss: 'to the sun' },
            { surface: 'لِأَنَّهَا', lemma: 'أَنَّ', pos: 'part', features: 'prep+part+3fs', gloss: 'because it' },
            { surface: 'أَكْبَرُ', lemma: 'أَكْبَر', pos: 'noun', features: 'constr.nom', gloss: 'the greatest of' },
            { surface: 'مَظْهَرٍ', lemma: 'مَظْهَر', pos: 'noun', features: 'indef.gen', root: 'ظ ه ر', gloss: 'a manifestation' },
            { surface: 'لِلنُّورِ', lemma: 'نُور', pos: 'noun', features: 'prep+def.gen', gloss: 'of light' },
            { surface: 'وَالْحَيَاةِ', lemma: 'حَيَاة', pos: 'noun', features: 'conj+def.gen', root: 'ح ي ي', gloss: 'and life' },
          ],
        },
        {
          id: 'qs-v9-c12-011',
          ar: 'الَّتِي هِيَ مِنْ صِفَاتِ اللَّهِ تَعَالَى،',
          en: "which are among Allah's own attributes, exalted is He.",
          tokens: [
            { surface: 'الَّتِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.f', gloss: 'which' },
            { surface: 'هِيَ', lemma: 'هُوَ', pos: 'part', features: 'part.3fs', gloss: 'they' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'صِفَاتِ', lemma: 'صِفَة', pos: 'noun', features: 'pl.constr.gen', gloss: 'the attributes of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; exalted is He' },
          ],
        },
        {
          id: 'qs-v9-c12-012',
          ar: 'وَهُنَالِكَ يَنْكَشِفُ الْغِطَاءُ عَنْ عَيْنَيْهَا',
          en: 'And there the veil would be lifted from her eyes,',
          tokens: [
            { surface: 'وَهُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'conj+adv', gloss: 'and there' },
            { surface: 'يَنْكَشِفُ', lemma: 'اِنْكَشَفَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be lifted, uncovered; is lifted' },
            { surface: 'الْغِطَاءُ', lemma: 'غِطَاء', pos: 'noun', features: 'def.nom', root: 'غ ط و', gloss: 'the veil' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'عَيْنَيْهَا', lemma: 'عَيْن', pos: 'noun', features: 'du.gen+3fs', gloss: 'her eyes' },
          ],
        },
        {
          id: 'qs-v9-c12-013',
          ar: 'فَتَعْرِفُ أَنَّهَا أَخْطَأَتْ كَمَا أَخْطَأَتْ فِي مُعَامَلَةِ الزُّجَاجِ مُعَامَلَةَ الْمَاءِ فَكَشَفَتْ عَنْ سَاقَيْهَا',
          en: 'and she would know that she had erred just as she erred in treating glass as water and lifted the hem from her legs --',
          tokens: [
            { surface: 'فَتَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to know; and knows' },
            { surface: 'أَنَّهَا', lemma: 'أَنَّ', pos: 'part', features: 'part+3fs', gloss: 'that she' },
            { surface: 'أَخْطَأَتْ', lemma: 'أَخْطَأَ', pos: 'verb', features: 'perf.3fs', root: 'خ ط أ', gloss: 'to err; erred' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'أَخْطَأَتْ', lemma: 'أَخْطَأَ', pos: 'verb', features: 'perf.3fs', gloss: 'to err; she erred' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مُعَامَلَةِ', lemma: 'مُعَامَلَة', pos: 'noun', features: 'constr.gen', root: 'ع م ل', gloss: 'treating' },
            { surface: 'الزُّجَاجِ', lemma: 'زُجَاج', pos: 'noun', features: 'def.gen', gloss: 'the glass' },
            { surface: 'مُعَامَلَةَ', lemma: 'مُعَامَلَة', pos: 'noun', features: 'acc.constr', gloss: 'as the treatment of' },
            { surface: 'الْمَاءِ', lemma: 'مَاء', pos: 'noun', features: 'def.gen', gloss: 'the water' },
            { surface: 'فَكَشَفَتْ', lemma: 'كَشَفَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to uncover; and uncovered' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'سَاقَيْهَا', lemma: 'سَاق', pos: 'noun', features: 'du.gen+3fs', gloss: 'her legs' },
          ],
        },
        {
          id: 'qs-v9-c12-014',
          ar: 'كَذَلِكَ أَخْطَأَتْ فِي مُعَامَلَةِ الشَّمْسِ مُعَامَلَةَ الْخَالِقِ',
          en: 'likewise she had erred in treating the sun as the Creator,',
          tokens: [
            { surface: 'كَذَلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'adv', gloss: 'likewise' },
            { surface: 'أَخْطَأَتْ', lemma: 'أَخْطَأَ', pos: 'verb', features: 'perf.3fs', gloss: 'to err; she erred' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مُعَامَلَةِ', lemma: 'مُعَامَلَة', pos: 'noun', features: 'constr.gen', gloss: 'treating' },
            { surface: 'الشَّمْسِ', lemma: 'شَمْس', pos: 'noun', features: 'def.gen', gloss: 'the sun' },
            { surface: 'مُعَامَلَةَ', lemma: 'مُعَامَلَة', pos: 'noun', features: 'acc.constr', gloss: 'as the treatment of' },
            { surface: 'الْخَالِقِ', lemma: 'خَالِق', pos: 'noun', features: 'def.gen', root: 'خ ل ق', gloss: 'the Creator' },
          ],
        },
        {
          id: 'qs-v9-c12-015',
          ar: 'فَسَجَدَتْ لَهَا وَعَبَدَتْهَا،',
          en: 'and so prostrated to it and worshipped it.',
          tokens: [
            { surface: 'فَسَجَدَتْ', lemma: 'سَجَدَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to prostrate; and prostrated' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'to it' },
            { surface: 'وَعَبَدَتْهَا', lemma: 'عَبَدَ', pos: 'verb', features: 'conj+perf.3fs+3fs', gloss: 'to worship; and worshipped it' },
          ],
        },
        {
          id: 'qs-v9-c12-016',
          ar: 'وَكَانَ ذَلِكَ أَبْلَغَ مِنْ مِئَةِ خُطْبَةٍ وَأَلْفِ دَلِيلٍ.',
          en: 'And that was more eloquent than a hundred sermons and a thousand arguments.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
            { surface: 'أَبْلَغَ', lemma: 'أَبْلَغ', pos: 'adj', features: 'acc', root: 'ب ل غ', gloss: 'more eloquent' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'مِئَةِ', lemma: 'مِئَة', pos: 'noun', features: 'constr.gen', gloss: 'a hundred' },
            { surface: 'خُطْبَةٍ', lemma: 'خُطْبَة', pos: 'noun', features: 'indef.gen', root: 'خ ط ب', gloss: 'sermons' },
            { surface: 'وَأَلْفِ', lemma: 'أَلْف', pos: 'noun', features: 'conj+constr.gen', gloss: 'and a thousand' },
            { surface: 'دَلِيلٍ', lemma: 'دَلِيل', pos: 'noun', features: 'indef.gen', gloss: 'arguments' },
          ],
        },
      ],
      checks: [
        {
          q: 'مِمَّ بُنِيَ الْقَصْرُ الَّذِي أَمَرَ سُلَيْمَانُ بِبِنَائِهِ؟',
          options: ['مِنْ زُجَاجٍ وَتَحْتَهُ مَاءٌ جَارٍ', 'مِنَ الْحِجَارَةِ وَالطِّينِ', 'مِنَ الذَّهَبِ الْخَالِصِ'],
          answer: 0,
          qEn: 'What was the palace Sulaymān ordered built made of?',
          optionsEn: ['Glass, with flowing water beneath it', 'Stone and clay', 'Pure gold'],
        },
        {
          q: 'مَاذَا تَوَهَّمَتِ الْمَلِكَةُ عِنْدَمَا رَأَتِ الزُّجَاجَ؟',
          options: ['تَوَهَّمَتْهُ مَاءً فَكَشَفَتْ عَنْ سَاقَيْهَا', 'عَرَفَتْهُ زُجَاجاً مِنْ أَوَّلِ نَظْرَةٍ', 'ظَنَّتْهُ نَاراً'],
          answer: 0,
          qEn: 'What did the queen mistakenly suppose when she saw the glass?',
          optionsEn: ['She thought it was water and lifted the hem from her legs', 'She recognized it as glass at first glance', 'She thought it was fire'],
        },
        {
          q: 'بِأَيِّ خَطَإٍ آخَرَ تُشْبِهُ قِصَّةَ الزُّجَاجِ عِبَادَةُ الْمَلِكَةِ وَقَوْمِهَا؟',
          options: ['خَطَأُ مُعَامَلَةِ الشَّمْسِ مُعَامَلَةَ الْخَالِقِ فَسَجَدُوا لَهَا', 'خَطَأُ الْخَوْفِ مِنَ الظَّلَامِ', 'خَطَأُ عَدَمِ مَعْرِفَةِ الطَّرِيقِ'],
          answer: 0,
          qEn: "What other error does the queen and her people's worship resemble, like the glass mistake?",
          optionsEn: ['The error of treating the sun as the Creator and prostrating to it', 'The error of fearing darkness', 'The error of not knowing the road'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَبَنَوْا لَهَا قَصْراً عَظِيماً مِنْ',
        post: 'وَأَجْرَوْا تَحْتَهُ الْمَاءَ.',
        en: 'and they built for her a great palace of glass and ran water beneath it.',
        options: ['زُجَاجٍ', 'زُجَاجٌ', 'زُجَاجاً', 'الزُّجَاجِ'],
        answer: 0,
        rationales: [
          'Genitive, indefinite -- object of the preposition مِنْ, matching the printed مِنْ زُجَاجٍ.',
          'Nominative -- wrong case; a preposition requires the genitive.',
          'Accusative -- wrong case for the same reason.',
          'Definite -- wrong; the printed word is indefinite, describing the general material.',
        ],
      },
      {
        type: 'cloze',
        pre: 'كَانَتْ هِيَ وَقَوْمُهَا يَسْجُدُونَ لِلشَّمْسِ لِأَنَّهَا',
        post: 'مَظْهَرٍ لِلنُّورِ وَالْحَيَاةِ.',
        en: 'she and her people used to prostrate to the sun because it is the greatest outward manifestation of light and life.',
        options: ['أَكْبَرُ', 'أَكْبَرَ', 'أَكْبَرِ', 'كَبِيرَةٌ'],
        answer: 0,
        rationales: [
          'Nominative -- predicate of أَنَّ (whose subject هَا is also nominal), matching the printed لِأَنَّهَا أَكْبَرُ.',
          'Accusative -- wrong case; the predicate of أَنَّ takes the nominative here, following the subject pronoun.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Elative not used as a comparative/superlative construct -- wrong form for "the greatest of."',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ ذَلِكَ',
        post: 'مِنْ مِئَةِ خُطْبَةٍ وَأَلْفِ دَلِيلٍ.',
        en: 'And that was more eloquent than a hundred sermons and a thousand arguments.',
        options: ['أَبْلَغَ', 'أَبْلَغُ', 'بَلِيغٌ', 'الْأَبْلَغُ'],
        answer: 0,
        rationales: [
          'Accusative -- predicate of كَانَ, matching the printed كَانَ ذَلِكَ أَبْلَغَ.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Plain adjective, not elative -- wrong form for "more eloquent than."',
          'Definite elative -- wrong; a comparative followed by مِنْ stays indefinite.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'أَكْشِفُ عَنْ سَاقَيَّ',
        pre: '',
        post: 'عَنْ سَاقَيَّ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَكْشِفُ', 'أَكْشِفُ', 'يَكْشِفُ', 'نَكْشِفُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '1st singular -- the base form, not shifted to "she."',
          '3rd masculine singular -- wrong gender; the target is "she," not "he."',
          '1st plural -- wrong person; the target is "she," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يُدْرِكُ الرَّجُلُ خَطَأَهُ',
        pre: '',
        post: 'خَطَأَهُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أُدْرِكُ', 'يُدْرِكُ', 'تُدْرِكُ', 'نُدْرِكُ'],
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
        base: 'يَبْنِي الرِّجَالُ قَصْراً',
        pre: '',
        post: 'قَصْراً',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَبْنِي', 'يَبْنِي', 'تَبْنِي', 'أَبْنِي'],
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

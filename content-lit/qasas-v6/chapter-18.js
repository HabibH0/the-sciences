// قَصَصُ النَّبِيِّينَ, volume 6 (Mūsā, part 1), chapter 18 -- إِلَى مِصْرَ.
// Printed page 140 (from the heading, mid-page) through the top of page
// 142, ending right before ch19's heading «١٩ - اذْهَبْ إِلَى فِرْعَوْنَ إِنَّهُ
// طَغَى» which opens partway down page 142. Transcribed by hand from the
// scan (vision OCR, 200dpi render) against ../CHAPTER-FORMAT.md. This is
// the burning-bush commissioning scene, dramatizing Sūrat al-Qaṣaṣ 28:29
// and Sūrat Ṭāhā 20:9-22 -- by far the most Qur'an-dense chapter in this
// batch, matching the brief's warning that volume 6 quotes the Qur'an more
// heavily than earlier volumes.
//
// Grammar / lexical notes:
//   -- The circled ayah numbers printed in the margin of the Ṭāhā quotation
//      (١٠ through ٢٢) are the standard Sūrat Ṭāhā verse numbers and are
//      NOT transcribed as text or tokens, following the precedent set in
//      qasas-v2/chapter-22.js.
//   -- Every Qur'an quotation in this chapter is split at natural pause
//      points into short sentence entries, with ﴿ opening on the first
//      fragment of a given quoted span and ﴾ closing on the last -- exactly
//      mirroring where the printed brackets fall, per the corpus's
//      established convention (qasas-v2/chapter-22.js).
//   -- عَصًا (qs-v6-c18-023, "staff") is transcribed with the alif maqṣūra
//      pattern of an indeclinable noun; its 1st-person possessive form in
//      the Qur'an quotes appears as عَصَايَ.
//   -- أُخْرَى (qs-v6-c18-029/035, "another, other, f.") reuses the already-
//      taught lemma آخَر (qasas-v1 ch10) in its feminine elative form,
//      not treated as a separate new lemma.
//   -- أَعَادَ/سَنُعِيدُهَا, سِيرَة, and تَعَالَى share roots with already-taught
//      material (عَادَ "to return", سَارَ "to journey", عَلَا "to rise/be high",
//      new to this chapter -- see ch19) but are distinct derived lemmas,
//      each tagged new per the corpus's derived-form convention.
//   -- Sense-for-sense note: qs-v6-c18-015 ("وَسَارَ مُوسَى قِبَلَ النَّارِ عَلَى
//      جَنَاحِ الشَّوْقِ") is translated freely ("hastened toward the fire,
//      borne on the wing of longing") since الجناح here is figurative, not
//      a literal wing.
//   -- No footnotes (book_note) observed on pages 140-142.
//
// Shared lexicon check (CHAPTER-FORMAT.md §6): لَمَّا, قَضَى (ch17), مُوسَى
// (established earlier in vol.6), أَجَل (qasas-v3 ch16), سَارَ (qasas-v2
// ch24), بِ, أَهْل (qasas-v2 ch9), وَدَّعَ (qasas-v1 ch12), الشَّيْخ, دَعَا
// (qasas-v1 ch8), لِ, عَلَى, اللَّه, يَا, وَلَد, سَافَرَ (qasas-v1 ch12), اللَّيْل,
// كُلّ, بَرْد (qasas-v1 ch6), وَلَكِنْ (qasas-v1 ch13), أَيْنَ, نَار (qasas-v1
// ch6), فِي, مَاذَا (qasas-v1 ch6), إِذَا, لَمْ, وَجَدَ, نُور (qasas-v3 ch16), بِ,
// هُمَا, وَ, يَبْحَثُ/بَحَثَ (qasas-v2 ch7), عَنْ, إِذْ, رَأَى, فَقَالَ/قَالَ, مَكَثَ
// (qasas-v3 ch17), إِنِّي/إِنَّ, أَتَى, مِنْ, أَوْ (qasas-v1 ch9), أَجِدُ/وَجَدَ, هَدَى
// (qasas-v1 ch8, root shared with new هُدًى), نُودِيَ/نَادَى (qasas-v2 ch7),
// أَنَا, رَبّ, إِنَّكَ/إِنَّ, أَوْحَى (qasas-v3 ch11), اخْتَرْتُكَ/اِخْتَارَ (qasas-v3
// ch11), اِسْتَمَعَ (shares root with known سَمِعَ, qasas-v1 ch2, but kept as
// its own new lemma here per the corpus's Form-VIII convention), يُوحَى/
// أَوْحَى, إِلَٰه (qasas-v1 ch5), إِلَّا, عَبَدَ (qasas-v1 ch1), أَقَامَ (ch17),
// صَلَاة (qasas-v1 ch15), ذِكْر (qasas-v3 ch4), كَانَ, يَد (qasas-v1 ch15),
// حَمَلَ (qasas-v2 ch9), تَعَالَى (new, see below), تِلْكَ (new, see below --
// wait, تِلْكَ is genuinely new, listed in newWords), يَمِين (new, see
// below), أَجَابَ (ch16), بَسَاطَة (ch17), هِيَ, أَخَذَ (qasas-v1 ch4), عَدَّ
// (qasas-v2 ch25), هَذِهِ, أَرَادَ (qasas-v1 ch5), أَنْ, يُكَلِّمَ/كَلَّمَ (qasas-v2
// ch18), يَكُونَ/كَانَ, حَدِيث (qasas-v2 ch25), طَوِيل (qasas-v2 ch20), لِأَنَّ,
// آيَة (qasas-v2 ch4), قَالَ, لَا, تَخَفْ/خَافَ, خَرَجَ (qasas-v1 ch4), غَيْر
// (qasas-v2 ch9) are all already taught (or reused per the notes above) and
// are NOT re-listed in newWords here.
//
// 40 new words (قِبَلَ، جَنَاح، شَوْق، خَلَعَ، نَعْل، وَادٍ، مُقَدَّس، هُنَالِكَ،
// اِسْتَمَعَ، عَصًا، اِسْتَعَانَ، تَعَالَى، بَرَكَة، أَمَان، ظَلَام، صَحْرَاء، اِصْطَلَى،
// اِهْتَدَى، بَيْنَمَا، آنَسَ، قَبَس، هُدًى، تِلْكَ، يَمِين، سَذَاجَة، فَائِدَة، تَفْصِيل،
// تَوَكَّأَ، هَشَّ، غَنَم، مَأْرَب، حَيَّة، سَعَى، أَعَادَ، سِيرَة، أُولَى، مَنَحَ، ثَانِي،
// أَبْيَض، ضَمَّ، سُوء).
export const CHAPTER = {
  id: 'ch18',
  title: { ar: 'إِلَى مِصْرَ', en: 'To Egypt' },
  newWords: [
    'قِبَلَ', 'جَنَاح', 'شَوْق', 'خَلَعَ', 'نَعْل', 'وَادٍ', 'مُقَدَّس', 'اِسْتَمَعَ', 'عَصًا', 'اِسْتَعَانَ', 'بَرَكَة', 'أَمَان', 'ظَلَام', 'صَحْرَاء',
    'اِصْطَلَى', 'آنَسَ', 'قَبَس', 'هُدًى', 'تِلْكَ', 'يَمِين',
    'سَذَاجَة', 'فَائِدَة', 'تَفْصِيل', 'تَوَكَّأَ', 'هَشَّ', 'مَأْرَب', 'حَيَّة',
    'سَعَى', 'أَعَادَ', 'سِيرَة', 'أُولَى', 'مَنَحَ', 'ثَانِي', 'أَبْيَض', ],
  lemmas: {
    قِبَلَ: { gloss: 'towards, in the direction of' },
    جَنَاح: { gloss: 'wing' },
    شَوْق: { gloss: 'longing, yearning' },
    خَلَعَ: { gloss: 'to remove, take off' },
    نَعْل: { gloss: 'sandal' },
    وَادٍ: { gloss: 'valley' },
    مُقَدَّس: { gloss: 'sanctified, holy' },
    اِسْتَمَعَ: { gloss: 'to listen' },
    عَصًا: { gloss: 'staff, stick' },
    اِسْتَعَانَ: { gloss: 'to seek help' },
    بَرَكَة: { gloss: 'blessing' },
    أَمَان: { gloss: 'safety, protection' },
    ظَلَام: { gloss: 'darkness' },
    صَحْرَاء: { gloss: 'desert' },
    اِصْطَلَى: { gloss: 'to warm oneself by a fire' },
    آنَسَ: { gloss: 'to perceive, notice' },
    قَبَس: { gloss: 'firebrand, torch' },
    هُدًى: { gloss: 'guidance' },
    تِلْكَ: { gloss: 'that (f.)' },
    يَمِين: { gloss: 'right hand' },
    سَذَاجَة: { gloss: 'naivety, simplicity' },
    فَائِدَة: { gloss: 'benefit, use' },
    تَفْصِيل: { gloss: 'detail' },
    تَوَكَّأَ: { gloss: 'to lean (on)' },
    هَشَّ: { gloss: 'to beat down leaves (for grazing), shake' },
    مَأْرَب: { gloss: 'need, purpose, use' },
    حَيَّة: { gloss: 'snake' },
    سَعَى: { gloss: 'to move quickly, glide, run' },
    أَعَادَ: { gloss: 'to return (something), restore' },
    سِيرَة: { gloss: 'way, manner, course' },
    أُولَى: { gloss: 'first (f.)' },
    مَنَحَ: { gloss: 'to grant' },
    ثَانِي: { gloss: 'second' },
    أَبْيَض: { gloss: 'white' },
  },
  paragraphs: [
    {
      en: "When Mūsā fulfilled the term and set out with his family, he bade farewell to the old man, and the old man saw him off with a prayer: 'On the blessing of Allah, my son! In the protection of Allah, my daughter!' They traveled on, the night all cold and darkness -- but where would they find fire in the desert? What could they do if they found no fire to warm themselves by, and no light to guide them? While they journeyed and Mūsā searched for a fire, he suddenly made one out and told his family to wait, hoping to bring back a torch from it, or find guidance by the fire.",
      sentences: [
        {
          id: 'qs-v6-c18-001',
          ar: '﴿فَلَمَّا قَضَى مُوسَى الأَجَلَ وَسَارَ بِأَهْلِهِ﴾',
          en: '"So when Mūsā fulfilled the term and set out with his family,"',
          tokens: [
            { surface: 'فَلَمَّا', lemma: 'لَمَّا', pos: 'adv', features: 'conj+adv', gloss: 'so when' },
            { surface: 'قَضَى', lemma: 'قَضَى', pos: 'verb', features: 'perf.3ms', gloss: 'to fulfill; fulfilled' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'الأَجَلَ', lemma: 'أَجَل', pos: 'noun', features: 'def.acc', gloss: 'the term' },
            { surface: 'وَسَارَ', lemma: 'سَارَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to journey; and set out' },
            { surface: 'بِأَهْلِهِ', lemma: 'أَهْل', pos: 'noun', features: 'prep+gen+3ms', gloss: 'with his family' },
          ],
        },
        {
          id: 'qs-v6-c18-002',
          ar: 'وَوَدَّعَ الشَّيْخَ وَوَدَّعَهُ الشَّيْخُ وَدَعَا لَهُ:',
          en: 'He bade the old man farewell, and the old man bade him farewell and prayed for him:',
          tokens: [
            { surface: 'وَوَدَّعَ', lemma: 'وَدَّعَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to bid farewell; and bade farewell' },
            { surface: 'الشَّيْخَ', lemma: 'شَيْخ', pos: 'noun', features: 'def.acc', gloss: 'the old man' },
            { surface: 'وَوَدَّعَهُ', lemma: 'وَدَّعَ', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to bid farewell; and bade him farewell' },
            { surface: 'الشَّيْخُ', lemma: 'شَيْخ', pos: 'noun', features: 'def.nom', gloss: 'the old man' },
            { surface: 'وَدَعَا', lemma: 'دَعَا', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to call, pray; and prayed' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
          ],
        },
        {
          id: 'qs-v6-c18-003',
          ar: 'عَلَى بَرَكَةِ اللَّهِ يَا وَلَدِي!',
          en: 'On the blessing of Allah, my son!',
          tokens: [
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'بَرَكَةِ', lemma: 'بَرَكَة', pos: 'noun', features: 'constr.gen', root: 'ب ر ك', gloss: 'the blessing of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'وَلَدِي', lemma: 'وَلَد', pos: 'noun', features: 'nom+1s', gloss: 'my son' },
          ],
        },
        {
          id: 'qs-v6-c18-004',
          ar: 'فِي أَمَانِ اللَّهِ يَا بِنْتِي!',
          en: 'In the protection of Allah, my daughter!',
          tokens: [
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أَمَانِ', lemma: 'أَمَان', pos: 'noun', features: 'constr.gen', root: 'أ م ن', gloss: 'the protection of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'بِنْتِي', lemma: 'بِنْت', pos: 'noun', features: 'nom+1s', gloss: 'my daughter' },
          ],
        },
        {
          id: 'qs-v6-c18-005',
          ar: 'وَسَافَرَ مُوسَى بِأَهْلِهِ،',
          en: 'Mūsā traveled with his family,',
          tokens: [
            { surface: 'وَسَافَرَ', lemma: 'سَافَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to travel; and traveled' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'بِأَهْلِهِ', lemma: 'أَهْل', pos: 'noun', features: 'prep+gen+3ms', gloss: 'with his family' },
          ],
        },
        {
          id: 'qs-v6-c18-006',
          ar: 'وَاللَّيْلُ كُلُّهُ بَرْدٌ وَظَلَامٌ.',
          en: 'and the night was all cold and darkness.',
          tokens: [
            { surface: 'وَاللَّيْلُ', lemma: 'لَيْل', pos: 'noun', features: 'conj+def.nom', gloss: 'and the night' },
            { surface: 'كُلُّهُ', lemma: 'كُلّ', pos: 'noun', features: 'nom+3ms', gloss: 'all of it' },
            { surface: 'بَرْدٌ', lemma: 'بَرْد', pos: 'noun', features: 'indef.nom', gloss: 'cold' },
            { surface: 'وَظَلَامٌ', lemma: 'ظَلَام', pos: 'noun', features: 'conj+indef.nom', root: 'ظ ل م', gloss: 'and darkness' },
          ],
        },
        {
          id: 'qs-v6-c18-007',
          ar: 'وَلَكِنْ أَيْنَ النَّارُ فِي الصَّحْرَاءِ؟',
          en: 'But where was the fire in the desert?',
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'أَيْنَ', lemma: 'أَيْن', pos: 'adv', features: 'adv', gloss: 'where' },
            { surface: 'النَّارُ', lemma: 'نَار', pos: 'noun', features: 'def.nom', gloss: 'the fire' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الصَّحْرَاءِ', lemma: 'صَحْرَاء', pos: 'noun', features: 'def.gen', root: 'ص ح ر', gloss: 'the desert' },
          ],
        },
        {
          id: 'qs-v6-c18-008',
          ar: 'وَمَاذَا يَصْنَعَانِ إِذَا لَمْ يَجِدَا نَاراً يَصْطَلِيَانِ بِهَا،',
          en: 'What would the two of them do if they found no fire to warm themselves by,',
          tokens: [
            { surface: 'وَمَاذَا', lemma: 'مَاذَا', pos: 'part', features: 'conj+part', gloss: 'and what' },
            { surface: 'يَصْنَعَانِ', lemma: 'صَنَعَ', pos: 'verb', features: 'impf.3md', gloss: 'to do, make; would the two do' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَجِدَا', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.3md', gloss: 'to find; the two find' },
            { surface: 'نَاراً', lemma: 'نَار', pos: 'noun', features: 'indef.acc', gloss: 'a fire' },
            { surface: 'يَصْطَلِيَانِ', lemma: 'اِصْطَلَى', pos: 'verb', features: 'impf.3md', root: 'ص ل ي', gloss: 'to warm oneself by fire; the two warm themselves' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'by it' },
          ],
        },
        {
          id: 'qs-v6-c18-009',
          ar: 'وَلَمْ يَجِدَا نُوراً يَهْتَدِيَانِ بِهِ؟!',
          en: 'and no light to guide themselves by?!',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَجِدَا', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.3md', gloss: 'to find; the two find' },
            { surface: 'نُوراً', lemma: 'نُور', pos: 'noun', features: 'indef.acc', gloss: 'a light' },
            { surface: 'يَهْتَدِيَانِ', lemma: 'اِهْتَدَى', pos: 'verb', features: 'impf.3md', root: 'ه د ي', gloss: 'to be guided; the two be guided' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'by it' },
          ],
        },
        {
          id: 'qs-v6-c18-010',
          ar: 'وَبَيْنَمَا هُمَا يَسِيرَانِ وَمُوسَى يَبْحَثُ عَنْ نَارٍ',
          en: 'And while the two of them journeyed, Mūsā searching for a fire,',
          tokens: [
            { surface: 'وَبَيْنَمَا', lemma: 'بَيْنَمَا', pos: 'conj', features: 'conj+conj', root: 'ب ي ن', gloss: 'and while' },
            { surface: 'هُمَا', lemma: 'هُوَ', pos: 'noun', features: 'nom.3md', gloss: 'the two of them' },
            { surface: 'يَسِيرَانِ', lemma: 'سَارَ', pos: 'verb', features: 'impf.3md', gloss: 'to journey; the two journey' },
            { surface: 'وَمُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'conj+nom', gloss: 'and Mūsā' },
            { surface: 'يَبْحَثُ', lemma: 'بَحَثَ', pos: 'verb', features: 'impf.3ms', gloss: 'to search; searching' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'نَارٍ', lemma: 'نَار', pos: 'noun', features: 'indef.gen', gloss: 'a fire' },
          ],
        },
        {
          id: 'qs-v6-c18-011',
          ar: '﴿إِذْ رَءَا نَاراً فَقَالَ لِأَهْلِهِ امْكُثُوا',
          en: '"he perceived a fire, and said to his family, \'Wait,',
          tokens: [
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'رَءَا', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms', gloss: 'to see; he saw' },
            { surface: 'نَاراً', lemma: 'نَار', pos: 'noun', features: 'indef.acc', gloss: 'a fire' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'لِأَهْلِهِ', lemma: 'أَهْل', pos: 'noun', features: 'prep+gen+3ms', gloss: 'to his family' },
            { surface: 'امْكُثُوا', lemma: 'مَكَثَ', pos: 'verb', features: 'imp.2mp', gloss: 'to stay, wait; wait' },
          ],
        },
        {
          id: 'qs-v6-c18-012',
          ar: 'إِنِّي آنَسْتُ نَاراً',
          en: 'I perceive a fire;',
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'آنَسْتُ', lemma: 'آنَسَ', pos: 'verb', features: 'perf.1s', root: 'أ ن س', gloss: 'to perceive, notice; I perceive' },
            { surface: 'نَاراً', lemma: 'نَار', pos: 'noun', features: 'indef.acc', gloss: 'a fire' },
          ],
        },
        {
          id: 'qs-v6-c18-013',
          ar: 'لَعَلِّي آتِيكُم مِّنْهَا بِقَبَسٍ',
          en: 'perhaps I may bring you a torch from it,',
          tokens: [
            { surface: 'لَعَلِّي', lemma: 'لَعَلَّ', pos: 'part', features: 'part+1s', gloss: 'perhaps I' },
            { surface: 'آتِيكُم', lemma: 'أَتَى', pos: 'verb', features: 'impf.1s+2mp', gloss: 'to bring; I bring you' },
            { surface: 'مِّنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from it' },
            { surface: 'بِقَبَسٍ', lemma: 'قَبَس', pos: 'noun', features: 'prep+indef.gen', root: 'ق ب س', gloss: 'a torch' },
          ],
        },
        {
          id: 'qs-v6-c18-014',
          ar: 'أَوْ أَجِدُ عَلَى النَّارِ هُدًى﴾.',
          en: 'or find guidance at the fire.\'"',
          tokens: [
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'أَجِدُ', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.1s', gloss: 'to find; I find' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'النَّارِ', lemma: 'نَار', pos: 'noun', features: 'def.gen', gloss: 'the fire' },
            { surface: 'هُدًى', lemma: 'هُدًى', pos: 'noun', features: 'indef.acc', root: 'ه د ي', gloss: 'guidance' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ الشَّيْخُ لِمُوسَى وَابْنَتِهِ عِنْدَ الْوَدَاعِ؟',
          options: ['عَلَى بَرَكَةِ اللَّهِ، فِي أَمَانِ اللَّهِ', 'لَا تَرْجِعَا إِلَى مَدْيَنَ أَبَداً', 'خُذَا مَعَكُمَا مَالاً كَثِيراً'],
          answer: 0,
          qEn: 'What did the old man say to Mūsā and his daughter at their farewell?',
          optionsEn: ['On the blessing of Allah, in the protection of Allah', 'Never return to Madyan', 'Take much wealth with you'],
        },
        {
          q: 'مَاذَا رَأَى مُوسَى وَهُوَ يَسِيرُ لَيْلاً فِي الصَّحْرَاءِ؟',
          options: ['نَاراً', 'مَدِينَةً', 'قَافِلَةً'],
          answer: 0,
          qEn: 'What did Mūsā see while journeying by night in the desert?',
          optionsEn: ['A fire', 'A city', 'A caravan'],
        },
      ],
    },
    {
      en: "Mūsā hastened toward the fire, borne on the wing of longing. When he reached it, he was called: 'O Mūsā! Indeed, I am your Lord; take off your sandals, for you are in the sacred valley of Ṭuwā.' There, Allah spoke to Mūsā and revealed to him: 'I have chosen you, so listen to what is revealed. I, truly, am Allah -- there is no god but Me, so worship Me and establish prayer for My remembrance.' Now Mūsā was carrying in his hand a staff he used to lean on and seek help with, and Allah, Exalted is He, said:",
      sentences: [
        {
          id: 'qs-v6-c18-015',
          ar: 'وَسَارَ مُوسَى قِبَلَ النَّارِ عَلَى جَنَاحِ الشَّوْقِ.',
          en: 'Mūsā hastened toward the fire, borne on the wing of longing.',
          tokens: [
            { surface: 'وَسَارَ', lemma: 'سَارَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to journey; and journeyed' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'قِبَلَ', lemma: 'قِبَلَ', pos: 'prep', features: 'prep', root: 'ق ب ل', gloss: 'towards' },
            { surface: 'النَّارِ', lemma: 'نَار', pos: 'noun', features: 'def.gen', gloss: 'the fire' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'جَنَاحِ', lemma: 'جَنَاح', pos: 'noun', features: 'constr.gen', root: 'ج ن ح', gloss: 'the wing of' },
            { surface: 'الشَّوْقِ', lemma: 'شَوْق', pos: 'noun', features: 'def.gen', root: 'ش و ق', gloss: 'the longing' },
          ],
        },
        {
          id: 'qs-v6-c18-016',
          ar: '﴿فَلَمَّا أَتَاهَا نُودِيَ يَامُوسَى',
          en: '"When he reached it, he was called, \'O Mūsā!',
          tokens: [
            { surface: 'فَلَمَّا', lemma: 'لَمَّا', pos: 'adv', features: 'conj+adv', gloss: 'so when' },
            { surface: 'أَتَاهَا', lemma: 'أَتَى', pos: 'verb', features: 'perf.3ms+3fs', gloss: 'to come; he reached it' },
            { surface: 'نُودِيَ', lemma: 'نَادَى', pos: 'verb', features: 'pass+perf.3ms', gloss: 'to call; he was called' },
            { surface: 'يَامُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'voc', gloss: 'O Mūsā' },
          ],
        },
        {
          id: 'qs-v6-c18-017',
          ar: 'إِنِّي أَنَا رَبُّكَ فَاخْلَعْ نَعْلَيْكَ',
          en: 'Indeed, I am your Lord, so take off your sandals,',
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: 'nom.1s', gloss: 'I' },
            { surface: 'رَبُّكَ', lemma: 'رَبّ', pos: 'noun', features: 'nom+2ms', gloss: 'your Lord' },
            { surface: 'فَاخْلَعْ', lemma: 'خَلَعَ', pos: 'verb', features: 'conj+imp.2ms', root: 'خ ل ع', gloss: 'to remove, take off; so take off' },
            { surface: 'نَعْلَيْكَ', lemma: 'نَعْل', pos: 'noun', features: 'du.acc+2ms', root: 'ن ع ل', gloss: 'your two sandals' },
          ],
        },
        {
          id: 'qs-v6-c18-018',
          ar: 'إِنَّكَ بِالْوَادِ الْمُقَدَّسِ طُوًى﴾.',
          en: "for you are in the sacred valley of Ṭuwā.\"",
          tokens: [
            { surface: 'إِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'part+2ms', gloss: 'indeed you' },
            { surface: 'بِالْوَادِ', lemma: 'وَادٍ', pos: 'noun', features: 'prep+def.gen', root: 'و د ي', gloss: 'in the valley' },
            { surface: 'الْمُقَدَّسِ', lemma: 'مُقَدَّس', pos: 'adj', features: 'def.gen', root: 'ق د س', gloss: 'the sacred' },
            { surface: 'طُوًى', lemma: 'طُوًى', pos: 'proper', features: 'gen', gloss: 'Ṭuwā' },
          ],
        },
        {
          id: 'qs-v6-c18-019',
          ar: 'هُنَالِكَ كَلَّمَ اللَّهُ مُوسَى وَأَوْحَى إِلَيْهِ.',
          en: 'There, Allah spoke to Mūsā and revealed to him.',
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'there' },
            { surface: 'كَلَّمَ', lemma: 'كَلَّمَ', pos: 'verb', features: 'perf.3ms', gloss: 'to speak to; spoke to' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'وَأَوْحَى', lemma: 'أَوْحَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to reveal; and revealed' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
          ],
        },
        {
          id: 'qs-v6-c18-020',
          ar: '﴿وَأَنَا اخْتَرْتُكَ فَاسْتَمِعْ لِمَا يُوحَى',
          en: '"\'I have chosen you, so listen to what is revealed.',
          tokens: [
            { surface: 'وَأَنَا', lemma: 'أَنَا', pos: 'noun', features: 'conj+nom.1s', gloss: 'and I' },
            { surface: 'اخْتَرْتُكَ', lemma: 'اِخْتَارَ', pos: 'verb', features: 'perf.1s+2ms', gloss: 'to choose; I chose you' },
            { surface: 'فَاسْتَمِعْ', lemma: 'اِسْتَمَعَ', pos: 'verb', features: 'conj+imp.2ms', root: 'س م ع', gloss: 'to listen; so listen' },
            { surface: 'لِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'to what' },
            { surface: 'يُوحَى', lemma: 'أَوْحَى', pos: 'verb', features: 'pass+impf.3ms', gloss: 'to reveal; is revealed' },
          ],
        },
        {
          id: 'qs-v6-c18-021',
          ar: 'إِنَّنِي أَنَا اللَّهُ لَا إِلَهَ إِلَّا أَنَا',
          en: 'Indeed I, I am Allah; there is no god but Me,',
          tokens: [
            { surface: 'إِنَّنِي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: 'nom.1s', gloss: 'I' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'إِلَهَ', lemma: 'إِلَٰه', pos: 'noun', features: 'indef.acc', gloss: 'god' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: 'nom.1s', gloss: 'Me' },
          ],
        },
        {
          id: 'qs-v6-c18-022',
          ar: 'فَاعْبُدْنِي وَأَقِمِ الصَّلَاةَ لِذِكْرِي﴾.',
          en: "so worship Me and establish prayer for My remembrance.\"",
          tokens: [
            { surface: 'فَاعْبُدْنِي', lemma: 'عَبَدَ', pos: 'verb', features: 'conj+imp.2ms+1s', gloss: 'to worship; so worship Me' },
            { surface: 'وَأَقِمِ', lemma: 'أَقَامَ', pos: 'verb', features: 'conj+imp.2ms', gloss: 'to establish; and establish' },
            { surface: 'الصَّلَاةَ', lemma: 'صَلَاة', pos: 'noun', features: 'def.acc', gloss: 'the prayer' },
            { surface: 'لِذِكْرِي', lemma: 'ذِكْر', pos: 'noun', features: 'prep+gen+1s', gloss: 'for My remembrance' },
          ],
        },
        {
          id: 'qs-v6-c18-023',
          ar: 'وَكَانَ فِي يَدِ مُوسَى عَصاً كَانَ يَحْمِلُهَا وَيَسْتَعِينُ بِهَا.',
          en: 'Now Mūsā had in his hand a staff which he used to carry and lean on for support.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and there was' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'يَدِ', lemma: 'يَد', pos: 'noun', features: 'constr.gen', gloss: 'the hand of' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
            { surface: 'عَصاً', lemma: 'عَصًا', pos: 'noun', features: 'indef.nom', root: 'ع ص و', gloss: 'a staff' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be, used to; used to' },
            { surface: 'يَحْمِلُهَا', lemma: 'حَمَلَ', pos: 'verb', features: 'impf.3ms+3fs', gloss: 'to carry; carry it' },
            { surface: 'وَيَسْتَعِينُ', lemma: 'اِسْتَعَانَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ع و ن', gloss: 'to seek help; and lean for support' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'on it' },
          ],
        },
        {
          id: 'qs-v6-c18-024',
          ar: 'فَقَالَ اللَّهُ تَعَالَى:',
          en: 'And Allah, Exalted is He, said:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', root: 'ع ل و', gloss: 'to be exalted; Exalted is He' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا أَمَرَ اللَّهُ مُوسَى أَنْ يَفْعَلَ عِنْدَ الْوَادِي الْمُقَدَّسِ؟',
          options: ['أَنْ يَخْلَعَ نَعْلَيْهِ', 'أَنْ يَلْبَسَ نَعْلَيْنِ جَدِيدَتَيْنِ', 'أَنْ يَبْنِيَ مَسْجِداً هُنَاكَ'],
          answer: 0,
          qEn: 'What did Allah command Mūsā to do at the sacred valley?',
          optionsEn: ['To take off his sandals', 'To put on new sandals', 'To build a mosque there'],
        },
        {
          q: 'مَاذَا كَانَ فِي يَدِ مُوسَى عِنْدَمَا كَلَّمَهُ اللَّهُ؟',
          options: ['عَصاً', 'سِكِّينٌ', 'كِتَابٌ'],
          answer: 0,
          qEn: 'What was in Mūsā\'s hand when Allah spoke to him?',
          optionsEn: ['A staff', 'A knife', 'A book'],
        },
      ],
    },
    {
      en: "Allah asked what was in his right hand, and Mūsā answered simply and artlessly: 'It is my staff.' Then, wanting to prolong the conversation with Allah, he began listing its uses in detail: 'It is my staff; I lean on it, and I beat down leaves with it for my sheep, and I have other uses for it besides.' Allah told him to throw it down -- and when he threw it, it became a snake, gliding about. Allah told him to take it, without fear, for it would be restored to its former state. Then Mūsā was granted a second sign, the white hand, when Allah said: 'And draw your hand to your side; it will come out white, without blemish -- another sign.'",
      sentences: [
        {
          id: 'qs-v6-c18-025',
          ar: '﴿وَمَا تِلْكَ بِيَمِينِكَ يَامُوسَى﴾.',
          en: '"\'And what is that in your right hand, O Mūsā?\'"',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+part', gloss: 'and what' },
            { surface: 'تِلْكَ', lemma: 'تِلْكَ', pos: 'dem', features: 'dem.f', gloss: 'is that' },
            { surface: 'بِيَمِينِكَ', lemma: 'يَمِين', pos: 'noun', features: 'prep+gen+2ms', root: 'ي م ن', gloss: 'in your right hand' },
            { surface: 'يَامُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'voc', gloss: 'O Mūsā' },
          ],
        },
        {
          id: 'qs-v6-c18-026',
          ar: 'وَأَجَابَ مُوسَى فِي بَسَاطَةٍ وَسَذَاجَةٍ:',
          en: 'Mūsā answered plainly and artlessly:',
          tokens: [
            { surface: 'وَأَجَابَ', lemma: 'أَجَابَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to answer; and answered' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'بَسَاطَةٍ', lemma: 'بَسَاطَة', pos: 'noun', features: 'indef.gen', gloss: 'plainness' },
            { surface: 'وَسَذَاجَةٍ', lemma: 'سَذَاجَة', pos: 'noun', features: 'conj+indef.gen', root: 'س ذ ج', gloss: 'and artlessness' },
          ],
        },
        {
          id: 'qs-v6-c18-027',
          ar: '﴿هِيَ عَصَايَ﴾.',
          en: '"\'It is my staff.\'"',
          tokens: [
            { surface: 'هِيَ', lemma: 'هُوَ', pos: 'noun', features: 'nom.3fs', gloss: 'it (f.)' },
            { surface: 'عَصَايَ', lemma: 'عَصًا', pos: 'noun', features: 'nom+1s', gloss: 'my staff' },
          ],
        },
        {
          id: 'qs-v6-c18-028',
          ar: 'وَأَخَذَ مُوسَى يَعُدُّ فَوَائِدَ هَذِهِ الْعَصَا فِي تَفْصِيلٍ لِأَنَّهُ أَرَادَ أَنْ يُكَلِّمَ اللَّهَ وَيَكُونَ حَدِيثُهُ طَوِيلاً.',
          en: 'Mūsā began listing this staff\'s uses in detail, because he wanted to keep speaking with Allah and make his talk last longer.',
          tokens: [
            { surface: 'وَأَخَذَ', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to begin (doing); and began' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'يَعُدُّ', lemma: 'عَدَّ', pos: 'verb', features: 'impf.3ms', gloss: 'to count, list; listing' },
            { surface: 'فَوَائِدَ', lemma: 'فَائِدَة', pos: 'noun', features: 'pl.constr.acc', root: 'ف ي د', gloss: 'the benefits of' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْعَصَا', lemma: 'عَصًا', pos: 'noun', features: 'def.gen', gloss: 'the staff' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'تَفْصِيلٍ', lemma: 'تَفْصِيل', pos: 'noun', features: 'indef.gen', root: 'ف ص ل', gloss: 'detail' },
            { surface: 'لِأَنَّهُ', lemma: 'لِأَنَّ', pos: 'conj', features: 'conj+3ms', gloss: 'because he' },
            { surface: 'أَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms', gloss: 'to want; wanted' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُكَلِّمَ', lemma: 'كَلَّمَ', pos: 'verb', features: 'impf.3ms', gloss: 'to speak to; keep speaking to' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَيَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to be; and be' },
            { surface: 'حَدِيثُهُ', lemma: 'حَدِيث', pos: 'noun', features: 'nom+3ms', gloss: 'his talk' },
            { surface: 'طَوِيلاً', lemma: 'طَوِيل', pos: 'adj', features: 'indef.acc', gloss: 'long' },
          ],
        },
        {
          id: 'qs-v6-c18-029',
          ar: '﴿هِيَ عَصَايَ أَتَوَكَّأُ عَلَيْهَا وَأَهُشُّ بِهَا عَلَى غَنَمِي وَلِيَ فِيهَا مَآرِبُ أُخْرَى﴾.',
          en: '"\'It is my staff; I lean on it, and I beat down leaves with it for my sheep, and I have other uses for it.\'"',
          tokens: [
            { surface: 'هِيَ', lemma: 'هُوَ', pos: 'noun', features: 'nom.3fs', gloss: 'it (f.)' },
            { surface: 'عَصَايَ', lemma: 'عَصًا', pos: 'noun', features: 'nom+1s', gloss: 'my staff' },
            { surface: 'أَتَوَكَّأُ', lemma: 'تَوَكَّأَ', pos: 'verb', features: 'impf.1s', root: 'و ك أ', gloss: 'to lean on; I lean' },
            { surface: 'عَلَيْهَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+3fs', gloss: 'on it' },
            { surface: 'وَأَهُشُّ', lemma: 'هَشَّ', pos: 'verb', features: 'conj+impf.1s', root: 'ه ش ش', gloss: 'to beat down leaves; and I beat down leaves' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'with it' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'غَنَمِي', lemma: 'غَنَم', pos: 'noun', features: 'gen+1s', root: 'غ ن م', gloss: 'my sheep' },
            { surface: 'وَلِيَ', lemma: 'لِ', pos: 'prep', features: 'conj+prep+1s', gloss: 'and I have' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'مَآرِبُ', lemma: 'مَأْرَب', pos: 'noun', features: 'pl.nom', root: 'أ ر ب', gloss: 'other uses' },
            { surface: 'أُخْرَى', lemma: 'آخَر', pos: 'adj', features: 'indef.nom.f', gloss: 'other' },
          ],
        },
        {
          id: 'qs-v6-c18-030',
          ar: '﴿قَالَ أَلْقِهَا يَامُوسَى﴾.',
          en: '"He said, \'Throw it down, O Mūsā.\'"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; he said' },
            { surface: 'أَلْقِهَا', lemma: 'أَلْقَى', pos: 'verb', features: 'imp.2ms+3fs', gloss: 'to throw, cast; throw it' },
            { surface: 'يَامُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'voc', gloss: 'O Mūsā' },
          ],
        },
        {
          id: 'qs-v6-c18-031',
          ar: '﴿فَأَلْقَاهَا فَإِذَا هِيَ حَيَّةٌ تَسْعَى﴾.',
          en: '"So he threw it, and behold, it was a snake, gliding about."',
          tokens: [
            { surface: 'فَأَلْقَاهَا', lemma: 'أَلْقَى', pos: 'verb', features: 'conj+perf.3ms+3fs', gloss: 'to throw; so he threw it' },
            { surface: 'فَإِذَا', lemma: 'إِذَا', pos: 'conj', features: 'conj+conj', gloss: 'and behold' },
            { surface: 'هِيَ', lemma: 'هُوَ', pos: 'noun', features: 'nom.3fs', gloss: 'it (f.)' },
            { surface: 'حَيَّةٌ', lemma: 'حَيَّة', pos: 'noun', features: 'indef.nom', root: 'ح ي ي', gloss: 'a snake' },
            { surface: 'تَسْعَى', lemma: 'سَعَى', pos: 'verb', features: 'impf.3fs', root: 'س ع ي', gloss: 'to glide, move quickly; gliding' },
          ],
        },
        {
          id: 'qs-v6-c18-032',
          ar: '﴿قَالَ خُذْهَا وَلَا تَخَفْ سَنُعِيدُهَا سِيرَتَهَا الأُولَى﴾.',
          en: '"He said, \'Take it, and do not fear; We will restore it to its former state.\'"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; he said' },
            { surface: 'خُذْهَا', lemma: 'أَخَذَ', pos: 'verb', features: 'imp.2ms+3fs', gloss: 'to take; take it' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَخَفْ', lemma: 'خَافَ', pos: 'verb', features: 'impf.2ms', gloss: 'to fear; you fear' },
            { surface: 'سَنُعِيدُهَا', lemma: 'أَعَادَ', pos: 'verb', features: 'part+impf.1p+3fs', root: 'ع و د', gloss: 'to restore; We will restore it' },
            { surface: 'سِيرَتَهَا', lemma: 'سِيرَة', pos: 'noun', features: 'acc+3fs', root: 'س ي ر', gloss: 'its way' },
            { surface: 'الأُولَى', lemma: 'أُولَى', pos: 'adj', features: 'def.acc', root: 'أ و ل', gloss: 'the first' },
          ],
        },
        {
          id: 'qs-v6-c18-033',
          ar: 'وَمَنَحَ مُوسَى آيَةً ثَانِيَةً،',
          en: 'Mūsā was granted a second sign,',
          tokens: [
            { surface: 'وَمَنَحَ', lemma: 'مَنَحَ', pos: 'verb', features: 'conj+perf.3ms.pass', root: 'م ن ح', gloss: 'to grant; and was granted' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'آيَةً', lemma: 'آيَة', pos: 'noun', features: 'indef.acc', gloss: 'a sign' },
            { surface: 'ثَانِيَةً', lemma: 'ثَانِي', pos: 'adj', features: 'indef.acc.f', root: 'ث ن ي', gloss: 'second' },
          ],
        },
        {
          id: 'qs-v6-c18-034',
          ar: 'هِيَ الْيَدُ الْبَيْضَاءُ فَقَالَ:',
          en: 'the white hand -- and He said:',
          tokens: [
            { surface: 'هِيَ', lemma: 'هُوَ', pos: 'noun', features: 'nom.3fs', gloss: 'it (f.)' },
            { surface: 'الْيَدُ', lemma: 'يَد', pos: 'noun', features: 'def.nom', gloss: 'the hand' },
            { surface: 'الْبَيْضَاءُ', lemma: 'أَبْيَض', pos: 'adj', features: 'def.nom.f', root: 'ب ي ض', gloss: 'the white' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v6-c18-035',
          ar: '﴿وَاضْمُمْ يَدَكَ إِلَى جَنَاحِكَ تَخْرُجْ بَيْضَاءَ مِنْ غَيْرِ سُوءٍ آيَةً أُخْرَى﴾.',
          en: '"\'And draw your hand to your side; it will come out white, without blemish -- another sign.\'"',
          tokens: [
            { surface: 'وَاضْمُمْ', lemma: 'ضَمَّ', pos: 'verb', features: 'conj+imp.2ms', root: 'ض م م', gloss: 'to draw together, press; and draw' },
            { surface: 'يَدَكَ', lemma: 'يَد', pos: 'noun', features: 'acc+2ms', gloss: 'your hand' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'جَنَاحِكَ', lemma: 'جَنَاح', pos: 'noun', features: 'gen+2ms', gloss: 'your side' },
            { surface: 'تَخْرُجْ', lemma: 'خَرَجَ', pos: 'verb', features: 'impf.3fs', gloss: 'to come out; it come out' },
            { surface: 'بَيْضَاءَ', lemma: 'أَبْيَض', pos: 'adj', features: 'indef.acc.f', gloss: 'white' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'without' },
            { surface: 'غَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'constr.gen', gloss: 'without' },
            { surface: 'سُوءٍ', lemma: 'سُوء', pos: 'noun', features: 'indef.gen', root: 'س و أ', gloss: 'blemish' },
            { surface: 'آيَةً', lemma: 'آيَة', pos: 'noun', features: 'indef.acc', gloss: 'a sign' },
            { surface: 'أُخْرَى', lemma: 'آخَر', pos: 'adj', features: 'indef.acc.f', gloss: 'another' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ عِنْدَمَا أَلْقَى مُوسَى عَصَاهُ؟',
          options: ['صَارَتْ حَيَّةً تَسْعَى', 'اِنْكَسَرَتْ', 'اِخْتَفَتْ'],
          answer: 0,
          qEn: "What happened when Mūsā threw down his staff?",
          optionsEn: ['It became a snake, gliding about', 'It broke', 'It disappeared'],
        },
        {
          q: 'مَا الآيَةُ الثَّانِيَةُ الَّتِي مُنِحَهَا مُوسَى؟',
          options: ['الْيَدُ الْبَيْضَاءُ', 'شَقُّ الْبَحْرِ', 'إِحْيَاءُ الْمَوْتَى'],
          answer: 0,
          qEn: 'What was the second sign granted to Mūsā?',
          optionsEn: ['The white hand', 'The splitting of the sea', 'Raising the dead'],
        },
      ],
    },
  ],
};

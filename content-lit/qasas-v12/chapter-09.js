// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 9 -- مُعْجِزَاتُ الْمَسِيحِ. Printed pages 256
// (from its heading down to the page's end) through 257 (top two lines,
// ending before ch10's heading دَعْوَتُهُ إِلَى الدِّينِ وَتَكْذِيبُهُ الْيَهُودَ).
// Transcribed by hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md.
//
// Two printed paragraphs. The first catalogues the Messiah's miracles in
// a long chain of parallel impf.3ms verbs (Allah honored him with
// prophethood and the Gospel and supported him with the Holy Spirit and
// dazzling miracles; through him Allah healed the incurably sick, cured
// the blind and the leper, gave life to the dead, shaped a bird from clay
// and breathed life into it, and told people what they ate and stored in
// their homes) -- closely mirroring the Qur'an's own record of these
// signs (cf. Āl ʿImrān 3:49) though not itself a Qur'anic quotation here
// (no ﴿ ﴾ in the print). The second paragraph explains the effect: the
// miracles restored confidence in the Torah's own accounts of earlier
// messengers' miracles, so onlookers concluded there was nothing new in
// what they already knew and had witnessed -- setting up chapter 10's
// account of the Jews' denial despite this.
//
// Grammar / lexical notes:
//   -- Per house convention (ch6/7/8/10 in this same chapter set) each
//      paragraph is split at its natural clause/comma boundaries into
//      short sentences -- no rewording, same printed order.
//   -- The repeated impf.3ms miracle-verbs (يَشْفِي، يُبْرِئُ، يُحْيِي، يَخْلُقُ،
//      يَنْفُخُ، يُنْبِئُ) are this chapter's dominant recycled construction
//      and drive the workshop drills below (cloze on the verb form itself,
//      shift across persons for يَشْفِي).
//   -- وَيُحْيِي (006) is tagged as the causative form-IV lemma أَحْيَا
//      (already taught per known-lemmas.txt), distinct from the
//      already-taught noun/adjective family around حَيَاة (ch8) and the
//      form-I verb عَاشَ (also already taught) -- three separate lemmas on
//      one root ح ي ي/ع ي ش per the corpus's derived-form convention.
//   -- بِإِذْنِ اللَّهِ (008, 009) tags إِذْن ("permission," new) as a distinct
//      lemma from the already-taught particle إِذَن ("then, in that case,"
//      qasas-v3 ch14) -- same root أ ذ ن, different word and part of
//      speech.
//   -- الْإِنْجِيلَ and التَّوْرَاةِ are tagged pos 'proper' as the names of
//      specific scriptures, matching how this corpus treats book/place
//      names generally; both are new to this chapter.
//   -- فِيمَا عَلِمُوهُ وَشَاهَدُوهُ (para. 2, sentence 005) is 10 tokens, over
//      the 3-9 buildable window, and so does not count toward this
//      chapter's buildable-sentence quota -- several shorter sentences
//      elsewhere in the chapter more than cover the floor of five.
//   -- Shared lexicon check (known from vols 1-3 / Qirā'ah, per
//      known-lemmas.txt): أَكْرَمَ، نُبُوَّة، آتَى، شَفَى، أَحْيَا، خَلَقَ، طَيْر، خَبَر،
//      رَسُول، جَاءَ، عَلِمَ -- are all already taught and NOT re-listed in
//      newWords here. Function words/particles and اللَّه/النَّاس are
//      treated as permanent background vocabulary as in earlier chapters.
//
// 32 new words (وَحْي، إِنْجِيل، أَيَّدَ، رُوح، قُدُس، مُعْجِزَة، بَاهِر، مَرِيض، عَجَزَ،
// مُدَاوَاة، طَبِيب، أَبْرَأَ، أَكْمَه، أَبْرَص، مَيِّت، إِذْن، طِين، هَيْئَة، نَفَخَ، أَنْبَأَ،
// اِدَّخَرَ، أَعَادَ، ثِقَة، تَوْرَاة، قُدْرَة، إِلَهِيّ، قُوَّة، إِرَادَة، رَبَّانِيّ، قَرَّرَ، جَدِيد،
// مَزِيد، شَاهَدَ).
//
// No page footnotes (book_note) on pages 256-257 for this chapter.
export const CHAPTER = {
  id: 'ch9',
  title: { ar: 'مُعْجِزَاتُ الْمَسِيحِ', en: 'The Miracles of the Messiah' },
  newWords: [
    'وَحْي', 'إِنْجِيل', 'قُدُس', 'بَاهِر', 'مَرِيض', 'عَجَزَ',
    'مُدَاوَاة', 'طَبِيب', 'أَبْرَأَ', 'أَكْمَه', 'أَبْرَص', 'مَيِّت',
    'إِذْن', 'هَيْئَة', 'نَفَخَ', 'أَنْبَأَ', 'اِدَّخَرَ', 'أَعَادَ',
    'ثِقَة', 'تَوْرَاة', 'إِلَهِيّ', 'قُوَّة', 'رَبَّانِيّ', 'قَرَّرَ',
    'جَدِيد', 'مَزِيد', 'شَاهَدَ',
  ],
  lemmas: {
    وَحْي: { gloss: 'revelation' },
    إِنْجِيل: { gloss: 'the Gospel' },
    أَيَّدَ: { gloss: 'to support, strengthen' },
    رُوح: { gloss: 'spirit' },
    قُدُس: { gloss: 'holiness (الْقُدُس: the Holy Spirit)' },
    مُعْجِزَة: { gloss: 'miracle' },
    بَاهِر: { gloss: 'dazzling, brilliant' },
    مَرِيض: { gloss: 'sick, ill person' },
    عَجَزَ: { gloss: 'to be incapable, unable' },
    مُدَاوَاة: { gloss: 'medical treatment, care' },
    طَبِيب: { gloss: 'physician, doctor' },
    أَبْرَأَ: { gloss: 'to heal, cure' },
    أَكْمَه: { gloss: 'one born blind' },
    أَبْرَص: { gloss: 'leper' },
    مَيِّت: { gloss: 'dead' },
    إِذْن: { gloss: 'permission' },
    طِين: { gloss: 'clay' },
    هَيْئَة: { gloss: 'shape, form' },
    نَفَخَ: { gloss: 'to blow' },
    أَنْبَأَ: { gloss: 'to inform, tell' },
    اِدَّخَرَ: { gloss: 'to store away, hoard' },
    أَعَادَ: { gloss: 'to restore, bring back' },
    ثِقَة: { gloss: 'confidence, trust' },
    تَوْرَاة: { gloss: 'the Torah' },
    قُدْرَة: { gloss: 'power, ability' },
    إِلَهِيّ: { gloss: 'divine' },
    قُوَّة: { gloss: 'strength, power' },
    إِرَادَة: { gloss: 'will, volition' },
    رَبَّانِيّ: { gloss: 'divine, lordly, godly' },
    قَرَّرَ: { gloss: 'to decide, conclude, establish' },
    جَدِيد: { gloss: 'new' },
    مَزِيد: { gloss: 'additional, more' },
    شَاهَدَ: { gloss: 'to witness, observe' },
  },
  paragraphs: [
    {
      en: "Allah honored him with prophethood and revelation, gave him the Gospel, and supported him with the Holy Spirit and dazzling miracles. Through him, Allah healed the sick whom physicians were unable to treat, cured the blind and the leper, and gave life to the dead by Allah's permission. He would fashion for people out of clay the shape of a bird, then breathe into it, and it would become a bird by Allah's permission -- and he would tell people what they ate and what they stored away in their houses.",
      sentences: [
        {
          id: 'qs-v12-c09-001',
          ar: 'وَأَكْرَمَهُ اللَّهُ بِالنُّبُوَّةِ وَالْوَحْيِ،',
          en: 'Allah honored him with prophethood and revelation,',
          tokens: [
            { surface: 'وَأَكْرَمَهُ', lemma: 'أَكْرَمَ', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to honor; and He honored him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'بِالنُّبُوَّةِ', lemma: 'نُبُوَّة', pos: 'noun', features: 'prep+def.gen', gloss: 'with prophethood' },
            { surface: 'وَالْوَحْيِ', lemma: 'وَحْي', pos: 'noun', features: 'conj+def.gen', root: 'و ح ي', gloss: 'and revelation' },
          ],
        },
        {
          id: 'qs-v12-c09-002',
          ar: 'وَآتَاهُ الْإِنْجِيلَ،',
          en: 'gave him the Gospel,',
          tokens: [
            { surface: 'وَآتَاهُ', lemma: 'آتَى', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to give; and He gave him' },
            { surface: 'الْإِنْجِيلَ', lemma: 'إِنْجِيل', pos: 'proper', features: 'acc', gloss: 'the Gospel' },
          ],
        },
        {
          id: 'qs-v12-c09-003',
          ar: 'وَأَيَّدَهُ بِرُوحِ الْقُدُسِ، وَالْمُعْجِزَاتِ الْبَاهِرَةِ،',
          en: 'and supported him with the Holy Spirit, and with dazzling miracles,',
          tokens: [
            { surface: 'وَأَيَّدَهُ', lemma: 'أَيَّدَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'أ ي د', gloss: 'to support, strengthen; and He supported him' },
            { surface: 'بِرُوحِ', lemma: 'رُوح', pos: 'noun', features: 'prep+constr.gen', root: 'ر و ح', gloss: 'with the spirit of' },
            { surface: 'الْقُدُسِ', lemma: 'قُدُس', pos: 'noun', features: 'def.gen', root: 'ق د س', gloss: 'holiness' },
            { surface: 'وَالْمُعْجِزَاتِ', lemma: 'مُعْجِزَة', pos: 'noun', features: 'conj+def.gen.pl', root: 'ع ج ز', gloss: 'and the miracles' },
            { surface: 'الْبَاهِرَةِ', lemma: 'بَاهِر', pos: 'adj', features: 'def.gen.f', root: 'ب ه ر', gloss: 'dazzling, brilliant' },
          ],
        },
        {
          id: 'qs-v12-c09-004',
          ar: 'يَشْفِي اللَّهُ بِهِ الْمَرْضَى الَّذِينَ عَجَزَ عَنْ مُدَاوَاتِهِمُ الْأَطِبَّاءُ،',
          en: 'Through him, Allah healed the sick whom physicians were unable to treat,',
          tokens: [
            { surface: 'يَشْفِي', lemma: 'شَفَى', pos: 'verb', features: 'impf.3ms', gloss: 'to heal; heals' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'by, through him' },
            { surface: 'الْمَرْضَى', lemma: 'مَرِيض', pos: 'noun', features: 'def.acc.pl', root: 'م ر ض', gloss: 'the sick' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'pl.rel', gloss: 'whom' },
            { surface: 'عَجَزَ', lemma: 'عَجَزَ', pos: 'verb', features: 'perf.3ms', root: 'ع ج ز', gloss: 'to be unable; were unable' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مُدَاوَاتِهِمُ', lemma: 'مُدَاوَاة', pos: 'noun', features: 'gen+3mp', root: 'د و ي', gloss: 'their treatment' },
            { surface: 'الْأَطِبَّاءُ', lemma: 'طَبِيب', pos: 'noun', features: 'def.nom.pl', root: 'ط ب ب', gloss: 'the physicians' },
          ],
        },
        {
          id: 'qs-v12-c09-005',
          ar: 'وَيُبْرِئُ الْأَكْمَهَ وَالْأَبْرَصَ،',
          en: 'cured the blind and the leper,',
          tokens: [
            { surface: 'وَيُبْرِئُ', lemma: 'أَبْرَأَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ب ر أ', gloss: 'to cure, heal; and heals' },
            { surface: 'الْأَكْمَهَ', lemma: 'أَكْمَه', pos: 'noun', features: 'def.acc', root: 'ك م ه', gloss: 'the one born blind' },
            { surface: 'وَالْأَبْرَصَ', lemma: 'أَبْرَص', pos: 'noun', features: 'conj+def.acc', root: 'ب ر ص', gloss: 'and the leper' },
          ],
        },
        {
          id: 'qs-v12-c09-006',
          ar: 'وَيُحْيِي الْمَوْتَى بِإِذْنِ اللَّهِ،',
          en: "gave life to the dead by Allah's permission,",
          tokens: [
            { surface: 'وَيُحْيِي', lemma: 'أَحْيَا', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to give life to, revive; and gives life to' },
            { surface: 'الْمَوْتَى', lemma: 'مَيِّت', pos: 'noun', features: 'def.acc.pl', root: 'م و ت', gloss: 'the dead' },
            { surface: 'بِإِذْنِ', lemma: 'إِذْن', pos: 'noun', features: 'prep+constr.gen', root: 'أ ذ ن', gloss: 'with the permission of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v12-c09-007',
          ar: 'وَيَخْلُقُ لِلنَّاسِ مِنَ الطِّينِ كَهَيْئَةِ الطَّيْرِ،',
          en: 'He would fashion for people out of clay the shape of a bird,',
          tokens: [
            { surface: 'وَيَخْلُقُ', lemma: 'خَلَقَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to create, fashion; and creates' },
            { surface: 'لِلنَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'prep+def.gen', gloss: 'for the people' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الطِّينِ', lemma: 'طِين', pos: 'noun', features: 'def.gen', root: 'ط ي ن', gloss: 'clay' },
            { surface: 'كَهَيْئَةِ', lemma: 'هَيْئَة', pos: 'noun', features: 'prep+constr.gen', root: 'ه ي أ', gloss: 'like the shape of' },
            { surface: 'الطَّيْرِ', lemma: 'طَيْر', pos: 'noun', features: 'def.gen', gloss: 'the bird' },
          ],
        },
        {
          id: 'qs-v12-c09-008',
          ar: 'فَيَنْفُخُ فِيهِ فَيَكُونُ طَيْرًا بِإِذْنِ اللَّهِ،',
          en: "then breathe into it, and it would become a bird by Allah's permission,",
          tokens: [
            { surface: 'فَيَنْفُخُ', lemma: 'نَفَخَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ن ف خ', gloss: 'to blow; then he blows' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'into it' },
            { surface: 'فَيَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to be; and it becomes' },
            { surface: 'طَيْرًا', lemma: 'طَيْر', pos: 'noun', features: 'indef.acc', gloss: 'a bird' },
            { surface: 'بِإِذْنِ', lemma: 'إِذْن', pos: 'noun', features: 'prep+constr.gen', gloss: 'by the permission of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v12-c09-009',
          ar: 'وَيُنْبِئُ بِمَا يَأْكُلُهُ النَّاسُ وَيَدَّخِرُونَهُ فِي بُيُوتِهِمْ.',
          en: 'and he would tell people what they ate and what they stored away in their houses.',
          tokens: [
            { surface: 'وَيُنْبِئُ', lemma: 'أَنْبَأَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ن ب أ', gloss: 'to inform, tell; and tells' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'of what' },
            { surface: 'يَأْكُلُهُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to eat; they eat' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'وَيَدَّخِرُونَهُ', lemma: 'اِدَّخَرَ', pos: 'verb', features: 'conj+impf.3mp+3ms', root: 'ذ خ ر', gloss: 'to store away; and store it' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'بُيُوتِهِمْ', lemma: 'بَيْت', pos: 'noun', features: 'pl.gen+3mp', gloss: 'their houses' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا أَكْرَمَ اللَّهُ الْمَسِيحَ؟',
          options: ['بِالنُّبُوَّةِ وَالْوَحْيِ وَالْمُعْجِزَاتِ الْبَاهِرَةِ', 'بِالْمَالِ وَالْجَاهِ', 'بِالْمُلْكِ وَالسُّلْطَانِ'],
          answer: 0,
          qEn: 'With what did Allah honor the Messiah?',
          optionsEn: ['With prophethood, revelation, and dazzling miracles', 'With wealth and status', 'With kingship and authority'],
        },
        {
          q: 'مَنْ كَانَ يَشْفِيهِمُ اللَّهُ عَلَى يَدِ الْمَسِيحِ؟',
          options: ['الْمَرْضَى الَّذِينَ عَجَزَ عَنْ مُدَاوَاتِهِمُ الْأَطِبَّاءُ', 'الْأَغْنِيَاءَ فَقَطْ', 'حُكَّامَ الرُّومِ'],
          answer: 0,
          qEn: "Whom did Allah heal at the Messiah's hand?",
          optionsEn: ['The sick whom physicians were unable to treat', 'Only the rich', 'The Roman rulers'],
        },
        {
          q: 'مَاذَا كَانَ يَصْنَعُ الْمَسِيحُ مِنَ الطِّينِ؟',
          options: ['كَهَيْئَةِ الطَّيْرِ فَيَنْفُخُ فِيهِ فَيَكُونُ طَيْرًا بِإِذْنِ اللَّهِ', 'بُيُوتًا لِلْفُقَرَاءِ', 'تَمَاثِيلَ لِلْمُلُوكِ'],
          answer: 0,
          qEn: 'What did the Messiah make from clay?',
          optionsEn: ['The shape of a bird, then he would breathe into it and it would become a bird by Allah\'s permission', 'Houses for the poor', 'Statues for kings'],
        },
      ],
    },
    {
      en: "So, through all this, he restored confidence in what the Torah had recorded of the messengers' miracles, of the accounts of divine power, and of the strength of the Lord's will -- and so they concluded there was nothing new and nothing more in what they already knew and had witnessed.",
      sentences: [
        {
          id: 'qs-v12-c09-010',
          ar: 'فَيُعِيدُ بِكُلِّ ذَلِكَ الثِّقَةَ بِمَا جَاءَ فِي التَّوْرَاةِ،',
          en: 'So, through all this, he restored confidence in what had come in the Torah,',
          tokens: [
            { surface: 'فَيُعِيدُ', lemma: 'أَعَادَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ع و د', gloss: 'to restore, bring back; and thus restores' },
            { surface: 'بِكُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'prep+gen.constr', gloss: 'with all of' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.gen', gloss: 'that' },
            { surface: 'الثِّقَةَ', lemma: 'ثِقَة', pos: 'noun', features: 'def.acc', root: 'و ث ق', gloss: 'confidence, trust' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'in what' },
            { surface: 'جَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms', gloss: 'to come; came' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'التَّوْرَاةِ', lemma: 'تَوْرَاة', pos: 'proper', features: 'def.gen', gloss: 'the Torah' },
          ],
        },
        {
          id: 'qs-v12-c09-011',
          ar: 'مِنْ خَبَرِ مُعْجِزَاتِ الرُّسُلِ،',
          en: "of the account of the messengers' miracles,",
          tokens: [
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'خَبَرِ', lemma: 'خَبَر', pos: 'noun', features: 'gen.constr', gloss: 'the account of' },
            { surface: 'مُعْجِزَاتِ', lemma: 'مُعْجِزَة', pos: 'noun', features: 'pl.gen.constr', gloss: 'the miracles of' },
            { surface: 'الرُّسُلِ', lemma: 'رَسُول', pos: 'noun', features: 'def.gen.pl', gloss: 'the messengers' },
          ],
        },
        {
          id: 'qs-v12-c09-012',
          ar: 'وَأَخْبَارِ الْقُدْرَةِ الْإِلَهِيَّةِ،',
          en: 'of the reports of divine power,',
          tokens: [
            { surface: 'وَأَخْبَارِ', lemma: 'خَبَر', pos: 'noun', features: 'conj+pl.gen.constr', gloss: 'and the accounts of' },
            { surface: 'الْقُدْرَةِ', lemma: 'قُدْرَة', pos: 'noun', features: 'def.gen', root: 'ق د ر', gloss: 'power, ability' },
            { surface: 'الْإِلَهِيَّةِ', lemma: 'إِلَهِيّ', pos: 'adj', features: 'def.gen.f', root: 'أ ل ه', gloss: 'divine' },
          ],
        },
        {
          id: 'qs-v12-c09-013',
          ar: 'وَقُوَّةِ الْإِرَادَةِ الرَّبَّانِيَّةِ،',
          en: "and of the strength of the Lord's will,",
          tokens: [
            { surface: 'وَقُوَّةِ', lemma: 'قُوَّة', pos: 'noun', features: 'conj+gen.constr', root: 'ق و ي', gloss: 'and the strength of' },
            { surface: 'الْإِرَادَةِ', lemma: 'إِرَادَة', pos: 'noun', features: 'def.gen', root: 'ر و د', gloss: 'the will' },
            { surface: 'الرَّبَّانِيَّةِ', lemma: 'رَبَّانِيّ', pos: 'adj', features: 'def.gen.f', root: 'ر ب ب', gloss: 'divine, lordly' },
          ],
        },
        {
          id: 'qs-v12-c09-014',
          ar: 'فَقَرَّرُوا أَنْ لَا جَدِيدَ وَأَنْ لَا مَزِيدَ فِيمَا عَلِمُوهُ وَشَاهَدُوهُ.',
          en: 'so they concluded there was nothing new and nothing more in what they already knew and had witnessed.',
          tokens: [
            { surface: 'فَقَرَّرُوا', lemma: 'قَرَّرَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ق ر ر', gloss: 'to decide, conclude; so they concluded' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no, not' },
            { surface: 'جَدِيدَ', lemma: 'جَدِيد', pos: 'adj', features: 'acc', gloss: 'new(thing)' },
            { surface: 'وَأَنْ', lemma: 'أَنْ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no, not' },
            { surface: 'مَزِيدَ', lemma: 'مَزِيد', pos: 'noun', features: 'acc', root: 'ز ي د', gloss: 'additional, more' },
            { surface: 'فِيمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'in what' },
            { surface: 'عَلِمُوهُ', lemma: 'عَلِمَ', pos: 'verb', features: 'perf.3mp+3ms', gloss: 'to know; they knew' },
            { surface: 'وَشَاهَدُوهُ', lemma: 'شَاهَدَ', pos: 'verb', features: 'conj+perf.3mp+3ms', root: 'ش ه د', gloss: 'to witness; and they had witnessed' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَتْ مُعْجِزَاتُ الْمَسِيحِ بِثِقَةِ النَّاسِ؟',
          options: ['أَعَادَتِ الثِّقَةَ بِمَا جَاءَ فِي التَّوْرَاةِ مِنْ أَخْبَارِ مُعْجِزَاتِ الرُّسُلِ', 'أَزَالَتْ كُلَّ ثِقَةٍ بِالتَّوْرَاةِ', 'لَمْ يَكُنْ لَهَا أَيُّ أَثَرٍ'],
          answer: 0,
          qEn: "What did the Messiah's miracles do to people's confidence?",
          optionsEn: ["They restored confidence in what the Torah had reported of the messengers' miracles", 'They removed all confidence in the Torah', 'They had no effect at all'],
        },
        {
          q: 'بِمَ قَرَّرُوا فِيمَا عَلِمُوهُ وَشَاهَدُوهُ؟',
          options: ['أَنْ لَا جَدِيدَ وَلَا مَزِيدَ فِيهِ', 'أَنَّهُ أَمْرٌ غَرِيبٌ لَمْ يَرَوْا مِثْلَهُ', 'أَنَّهُ يَسْتَحِقُّ الْإِيمَانَ بِهِ فَوْرًا'],
          answer: 0,
          qEn: 'What did they conclude about what they knew and witnessed?',
          optionsEn: ['That there was nothing new or additional in it', "That it was strange, unlike anything they'd seen", 'That it deserved immediate belief'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: '',
        post: 'اللَّهُ بِهِ الْمَرْضَى الَّذِينَ عَجَزَ عَنْ مُدَاوَاتِهِمُ الْأَطِبَّاءُ.',
        en: 'Through him, Allah healed the sick whom physicians were unable to treat.',
        options: ['يَشْفِي', 'شَفَى', 'اِشْفِ', 'شَافٍ'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine singular -- narrates the miracle as an ongoing/habitual act, matching the printed يَشْفِي.',
          'Perfect -- wrong tense; the surrounding verbs (يُبْرِئُ، يُحْيِي، يَخْلُقُ) are all imperfect.',
          'Imperative -- wrong mood; this is narration, not a command.',
          'Active participle (noun) -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَيَخْلُقُ لِلنَّاسِ مِنَ الطِّينِ كَهَيْئَةِ الطَّيْرِ، فَيَنْفُخُ فِيهِ',
        post: 'طَيْرًا بِإِذْنِ اللَّهِ.',
        en: 'He fashions for people out of clay the shape of a bird, then breathes into it, and it becomes a bird by Allah\'s permission.',
        options: ['فَيَكُونُ', 'فَكَانَ', 'فَلْيَكُنْ', 'فَكَوْنُهُ'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine singular -- continues the chain of habitual imperfect verbs, matching the printed فَيَكُونُ.',
          'Perfect -- wrong tense for this string of present/habitual miracle-verbs.',
          'Jussive/imperative sense ("let it be") -- wrong mood; this is narration.',
          'Verbal noun -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَقَرَّرُوا أَنْ لَا جَدِيدَ',
        post: 'لَا مَزِيدَ فِيمَا عَلِمُوهُ وَشَاهَدُوهُ.',
        en: 'So they concluded there was nothing new and nothing more in what they already knew and had witnessed.',
        options: ['وَأَنْ', 'فَأَنْ', 'وَإِنْ', 'وَأَنَّ'],
        answer: 0,
        rationales: [
          'وَ + أَنْ -- coordinates the second "that"-clause with the first, matching the printed وَأَنْ لَا مَزِيدَ.',
          'فَ + أَنْ -- wrong particle; the two clauses are simply coordinated, not sequential.',
          'وَ + إِنْ ("if") -- wrong particle and wrong meaning.',
          'وَ + أَنَّ (with doubled ن, for a following noun clause) -- wrong form; أَنْ + لَا + noun is what is printed.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَشْفِي اللَّهُ بِهِ الْمَرْضَى',
        pre: 'اللَّهُ بِهِ',
        post: 'اللَّهُ بِهِ الْمَرْضَى',
        targetPerson: 'أَنَا',
        targetEn: 'I (heal)',
        options: ['أَشْفِي', 'يَشْفِي', 'تَشْفِي', 'نَشْفِي'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- you.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَشْفِي اللَّهُ بِهِ الْمَرْضَى',
        pre: 'اللَّهُ بِهِ',
        post: 'اللَّهُ بِهِ الْمَرْضَى',
        targetPerson: 'نَحْنُ',
        targetEn: 'we (heal)',
        options: ['نَشْفِي', 'يَشْفِي', 'تَشْفِي', 'أَشْفِي'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- you.',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'يُنْبِئُ بِمَا يَأْكُلُهُ النَّاسُ',
        pre: '',
        post: 'بِمَا يَأْكُلُهُ النَّاسُ',
        targetPerson: 'أَنْتِ',
        targetEn: 'you (fs, inform)',
        options: ['تُنْبِئِينَ', 'يُنْبِئُ', 'أُنْبِئُ', 'نُنْبِئُ'],
        answer: 0,
        rationales: [
          '2nd feminine singular -- matches أَنْتِ.',
          '3rd masculine singular -- the base form, not shifted to "you (fs)."',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

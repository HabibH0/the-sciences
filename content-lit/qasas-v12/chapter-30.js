// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ», chapter 30 --
// تَدْبِيرٌ إِلَهِيٌّ. Printed pages 268 (bottom, right after ch29's closing
// line and the heading) through 269 (top, ending right before ch31's
// heading وَلَكِنْ شُبِّهَ لَهُمْ -- another agent's chapter, the Qur'anic
// denial of the crucifixion itself -- partway down the same page).
// Transcribed by hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md.
//
// Since the Messiah himself cannot carry the heavy cross quickly enough,
// the policeman escorting him orders a young Israelite bystander -- by
// Nadwī's description the most zealous, most foolish, and most eager of
// his companions to see the Messiah harmed -- to carry the piece of wood
// instead, purely so the whole business can be over with fast. The
// chapter title ("A Divine Plan") signals to the reader that this small,
// almost incidental substitution of one man for another is about to
// matter enormously -- setting up ch31's Qur'anic denial that the
// Messiah was crucified at all.
//
// Grammar / lexical notes:
//   -- Every printed sentence is split at its natural clause/comma
//      boundary into multiple shorter entries here (house convention, see
//      qasas-v3 ch14). No rewording, same printed text and order. No
//      Qur'anic quotations on this page -- the Qur'anic material begins
//      only with ch31's heading, outside this chapter.
//   -- Register note: kept strictly to neutral historical narration
//      matching the printed page, per the task brief -- the theological
//      point (that the crucifixion did not happen to the Messiah) is
//      ch31's material, not asserted or foreshadowed here beyond the
//      chapter's own title.
//   -- أَشَدَّ / أَكْبَرَهُمْ / أَحْرَصَهُمْ (qs-v12-c30-002/003) are three
//      parallel elative (اسم تفضيل) constructs -- "most X of his
//      companions/of them" -- each governing a following construct
//      genitive (زُمَلَائِهِ, هُمْ) and, for the first, an accusative tamyiz
//      (حَمَاسَةً). This recurring frame is the basis for this chapter's
//      workshop drills below.
//   -- تَخَلَّصَ (qs-v12-c30-005, the finite verb "to be rid of") is a
//      distinct lemma from تَخَلُّص, the verbal-noun form already tagged
//      new in qasas-v12 ch26 (التَّخَلُّصَ) -- same root خ ل ص, matching the
//      corpus's noun/verbal-noun-vs-verb convention.
//   -- حَمْلِ (qs-v12-c30-001) reuses the noun lemma حَمْل already tagged
//      new in qasas-v12 ch29, not re-listed here.
//   -- إِسْرَائِيلِيّاً and إِيذَاءِ (qs-v12-c30-001/003) reuse the lemmas
//      إِسْرَائِيلِيّ and إِيذَاء already tagged new in qasas-v12 ch28, not
//      re-listed here.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6, via the consolidated
//      known-lemmas list): هُنَا، أَمَرَ، بِ، شَابّ، حَمْل (introduced qasas-v12
//      ch29)، إِسْرَائِيلِيّ (introduced qasas-v12 ch28)، كَانَ (bedrock)،
//      أَشَدّ، أَكْبَر، سَفَاهَة، عَلَى، إِيذَاء (introduced qasas-v12 ch28)، سَيِّد،
//      الْمَسِيح (introduced qasas-v12 ch26)، إِلَى، حَتَّى، أَمْر، مِنْ، هَذِهِ
//      are all already taught (or bedrock) and are NOT re-listed in
//      newWords here.
//
// 12 new words (شُرْطِيّ، مُوَكَّل، عُود، زَمِيل، حَمَاسَة، أَحْرَص، مُبَادَرَة، اِنْتَهَى،
// سَرِيع، تَخَلَّصَ، مَسْؤُولِيَّة، مُرْهِق) -- a return to a more ordinary
// vocabulary density after ch27/ch28's dense courtroom word set, closing
// out this batch's chapters.
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch30',
  title: { ar: 'تَدْبِيرٌ إِلَهِيٌّ', en: 'A Divine Plan' },
  newWords: [
    'شُرْطِيّ', 'مُوَكَّل', 'عُود', 'زَمِيل', 'حَمَاسَة', 'أَحْرَص',
    'مُبَادَرَة', 'اِنْتَهَى', 'سَرِيع', 'تَخَلَّصَ', 'مَسْؤُولِيَّة', 'مُرْهِق',
  ],
  lemmas: {
    شُرْطِيّ: { gloss: 'policeman' },
    مُوَكَّل: { gloss: 'placed in charge (of), entrusted' },
    عُود: { gloss: 'piece of wood, stick' },
    زَمِيل: { gloss: 'companion, colleague' },
    حَمَاسَة: { gloss: 'zeal, enthusiasm' },
    أَحْرَص: { gloss: 'most eager' },
    مُبَادَرَة: { gloss: 'hastening, rushing (toward)' },
    اِنْتَهَى: { gloss: 'to end, come to an end' },
    سَرِيع: { gloss: 'quick, fast' },
    تَخَلَّصَ: { gloss: 'to be rid (of), free oneself' },
    مَسْؤُولِيَّة: { gloss: 'responsibility' },
    مُرْهِق: { gloss: 'exhausting' },
  },
  paragraphs: [
    {
      en: 'At this point, the policeman in charge of him ordered a young Israelite to carry the piece of wood instead -- the most zealous of his companions, the most foolish of them, and the most eager of them to harm the Master Messiah and rush toward him, so that the matter would end quickly and he could be rid of this exhausting responsibility.',
      sentences: [
        {
          id: 'qs-v12-c30-001',
          ar: 'وَهُنَا أَمَرَ الشُّرْطِيُّ الْمُوَكَّلُ بِهِ شَابّاً إِسْرَائِيلِيّاً بِحَمْلِ الْعُودِ،',
          en: 'At this point the policeman in charge of him ordered a young Israelite to carry the piece of wood,',
          tokens: [
            { surface: 'وَهُنَا', lemma: 'هُنَا', pos: 'adv', features: 'conj+adv', gloss: 'and here, at this point' },
            { surface: 'أَمَرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'perf.3ms', gloss: 'to order; ordered' },
            { surface: 'الشُّرْطِيُّ', lemma: 'شُرْطِيّ', pos: 'noun', features: 'def.nom', root: 'ش ر ط', gloss: 'the policeman' },
            { surface: 'الْمُوَكَّلُ', lemma: 'مُوَكَّل', pos: 'adj', features: 'def.nom', root: 'و ك ل', gloss: 'placed in charge (of)' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'over him' },
            { surface: 'شَابّاً', lemma: 'شَابّ', pos: 'noun', features: 'indef.acc', gloss: 'a young man' },
            { surface: 'إِسْرَائِيلِيّاً', lemma: 'إِسْرَائِيلِيّ', pos: 'adj', features: 'indef.acc', gloss: 'Israelite' },
            { surface: 'بِحَمْلِ', lemma: 'حَمْل', pos: 'noun', features: 'prep+constr.gen', gloss: 'to carry' },
            { surface: 'الْعُودِ', lemma: 'عُود', pos: 'noun', features: 'def.gen', gloss: 'the piece of wood' },
          ],
        },
        {
          id: 'qs-v12-c30-002',
          ar: 'وَكَانَ أَشَدَّ زُمَلَائِهِ حَمَاسَةً وَأَكْبَرَهُمْ سَفَاهَةً،',
          en: 'he was the most zealous of his companions and the most foolish of them,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and he was' },
            { surface: 'أَشَدَّ', lemma: 'أَشَدّ', pos: 'noun', features: 'acc.constr', gloss: 'the most intense of' },
            { surface: 'زُمَلَائِهِ', lemma: 'زَمِيل', pos: 'noun', features: 'pl.gen+3ms', gloss: 'his companions' },
            { surface: 'حَمَاسَةً', lemma: 'حَمَاسَة', pos: 'noun', features: 'indef.acc', gloss: 'in zeal' },
            { surface: 'وَأَكْبَرَهُمْ', lemma: 'أَكْبَر', pos: 'noun', features: 'conj+acc.constr+3mp', gloss: 'and the greatest of them' },
            { surface: 'سَفَاهَةً', lemma: 'سَفَاهَة', pos: 'noun', features: 'indef.acc', gloss: 'in foolishness' },
          ],
        },
        {
          id: 'qs-v12-c30-003',
          ar: 'وَأَحْرَصَهُمْ عَلَى إِيذَاءِ السَّيِّدِ الْمَسِيحِ وَمُبَادَرَةً إِلَيْهِ،',
          en: 'and the most eager of them to harm the Master Messiah and rush toward him,',
          tokens: [
            { surface: 'وَأَحْرَصَهُمْ', lemma: 'أَحْرَص', pos: 'noun', features: 'conj+acc.constr+3mp', gloss: 'and the most eager of them' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to, for' },
            { surface: 'إِيذَاءِ', lemma: 'إِيذَاء', pos: 'noun', features: 'constr.gen', gloss: 'harming' },
            { surface: 'السَّيِّدِ', lemma: 'سَيِّد', pos: 'noun', features: 'def.gen', gloss: 'the Master' },
            { surface: 'الْمَسِيحِ', lemma: 'مَسِيح', pos: 'proper', features: 'def.gen', gloss: 'the Messiah' },
            { surface: 'وَمُبَادَرَةً', lemma: 'مُبَادَرَة', pos: 'noun', features: 'conj+indef.acc', gloss: 'and hastening' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'toward him' },
          ],
        },
        {
          id: 'qs-v12-c30-004',
          ar: 'حَتَّى يَنْتَهِيَ الْأَمْرُ سَرِيعاً،',
          en: 'so that the matter would end quickly,',
          tokens: [
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'part', features: 'part', gloss: 'so that' },
            { surface: 'يَنْتَهِيَ', lemma: 'اِنْتَهَى', pos: 'verb', features: 'impf.3ms', gloss: 'to end; would end' },
            { surface: 'الْأَمْرُ', lemma: 'أَمْر', pos: 'noun', features: 'def.nom', gloss: 'the matter' },
            { surface: 'سَرِيعاً', lemma: 'سَرِيع', pos: 'adj', features: 'indef.acc', gloss: 'quickly' },
          ],
        },
        {
          id: 'qs-v12-c30-005',
          ar: 'وَيَتَخَلَّصَ مِنْ هَذِهِ الْمَسْؤُولِيَّةِ الْمُرْهِقَةِ.',
          en: 'and he could be rid of this exhausting responsibility.',
          tokens: [
            { surface: 'وَيَتَخَلَّصَ', lemma: 'تَخَلَّصَ', pos: 'verb', features: 'conj+impf.3ms', root: 'خ ل ص', gloss: 'to be rid of; and be rid of' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْمَسْؤُولِيَّةِ', lemma: 'مَسْؤُولِيَّة', pos: 'noun', features: 'def.gen', gloss: 'the responsibility' },
            { surface: 'الْمُرْهِقَةِ', lemma: 'مُرْهِق', pos: 'adj', features: 'def.gen.f', gloss: 'exhausting' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ أَمَرَهُ الشُّرْطِيُّ الْمُوَكَّلُ بِالسَّيِّدِ الْمَسِيحِ بِحَمْلِ الْعُودِ؟',
          options: ['شَابّاً إِسْرَائِيلِيّاً كَانَ أَشَدَّ زُمَلَائِهِ حَمَاسَةً وَأَكْبَرَهُمْ سَفَاهَةً', 'أَحَدَ رِجَالِ الشُّرْطَةِ الْأَجَانِبِ', 'وَاحِداً مِنَ الْحُكَّامِ الرُّومَانِ'],
          answer: 0,
          qEn: 'Whom did the policeman in charge of the Master Messiah order to carry the piece of wood?',
          optionsEn: ['A young Israelite who was the most zealous, most foolish of his companions', 'One of the foreign police officers', 'One of the Roman rulers'],
        },
        {
          q: 'لِمَاذَا كَانَ هَذَا الشَّابُّ أَحْرَصَ زُمَلَائِهِ عَلَى إِيذَاءِ السَّيِّدِ الْمَسِيحِ؟',
          options: ['حَتَّى يَنْتَهِيَ الْأَمْرُ سَرِيعاً وَيَتَخَلَّصَ مِنْ هَذِهِ الْمَسْؤُولِيَّةِ الْمُرْهِقَةِ', 'لِأَنَّ الْحَاكِمَ وَعَدَهُ بِمُكَافَأَةٍ مَالِيَّةٍ', 'لِأَنَّهُ كَانَ صَدِيقاً مُقَرَّباً لِلْمَسِيحِ مِنْ قَبْلُ'],
          answer: 0,
          qEn: 'Why was this young man the most eager of his companions to harm the Master Messiah?',
          optionsEn: ['So that the matter would end quickly and he could be rid of this exhausting responsibility', 'Because the ruler promised him a financial reward', 'Because he had been a close friend of the Messiah before'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ',
        post: 'زُمَلَائِهِ حَمَاسَةً.',
        en: 'And he was the most zealous of his companions.',
        options: ['أَشَدَّ', 'أَشَدُّ', 'أَشَدِّ', 'شَدِيد'],
        answer: 0,
        rationales: [
          'Accusative, construct -- predicate of كَانَ and first term of an إضافة with زُمَلَائِهِ.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Genitive -- wrong case for the same reason.',
          'The plain adjective "intense," not the elative "most intense" -- wrong form for this comparative meaning.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ أَشَدَّ زُمَلَائِهِ',
        post: 'وَأَكْبَرَهُمْ سَفَاهَةً.',
        en: 'He was the most zealous of his companions, in zeal, and the most foolish of them.',
        options: ['حَمَاسَةً', 'حَمَاسَةٌ', 'حَمَاسَةِ', 'حَمَاسَات'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- tamyīz (specifying accusative) after the elative أَشَدَّ.',
          'Nominative -- wrong case; a tamyīz after an elative is accusative.',
          'Genitive -- wrong case for the same reason.',
          'Plural -- wrong number; a tamyīz noun stays singular.',
        ],
      },
      {
        type: 'cloze',
        pre: 'حَتَّى يَنْتَهِيَ الْأَمْرُ',
        post: '.',
        en: 'So that the matter would end quickly.',
        options: ['سَرِيعاً', 'سَرِيعٌ', 'سَرِيعٍ', 'سُرَعَاء'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- adverbial حَال describing the manner of ending.',
          'Nominative -- wrong case for an adverbial complement.',
          'Genitive -- wrong case for the same reason.',
          'Broken plural -- wrong number; الْأَمْرُ is singular.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَتَخَلَّصُ الشُّرْطِيُّ مِنَ الْمَسْؤُولِيَّةِ',
        pre: '',
        post: 'مِنَ الْمَسْؤُولِيَّةِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَتَخَلَّصُ', 'يَتَخَلَّصُ', 'أَتَخَلَّصُ', 'نَتَخَلَّصُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- the base form, not shifted to "she."',
          '1st singular -- wrong person entirely.',
          '1st plural -- wrong person and number.',
        ],
      },
      {
        type: 'shift',
        base: 'يَتَخَلَّصُ الشُّرْطِيُّ مِنَ الْمَسْؤُولِيَّةِ',
        pre: '',
        post: 'مِنَ الْمَسْؤُولِيَّةِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَتَخَلَّصُ', 'يَتَخَلَّصُ', 'تَتَخَلَّصُ', 'نَتَخَلَّصُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular / 3rd feminine singular -- wrong person or gender.',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَتَخَلَّصُ الشُّرْطِيُّ مِنَ الْمَسْؤُولِيَّةِ',
        pre: '',
        post: 'مِنَ الْمَسْؤُولِيَّةِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَتَخَلَّصُ', 'يَتَخَلَّصُ', 'تَتَخَلَّصُ', 'أَتَخَلَّصُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular / 3rd feminine singular -- wrong person or gender.',
          '1st singular -- wrong number; the target is "we," not "I."',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ»,
// chapter 35 -- نُزُولُ عِيسَى قَبْلَ الْقِيَامَةِ. Printed page 271 only --
// begins right after ch34's closing paragraph and ayah quote, and ends
// before ch36's heading بِشَارَتُهُ بِبَعْثَةِ سَيِّدِنَا مُحَمَّدٍ ﷺ, which starts
// at the top of p.272 (visible on that page's scan as the boundary marker
// for the next agent's work). Transcribed by hand from the scan (vision
// OCR, 150dpi render) against ../CHAPTER-FORMAT.md.
//
// SUURAH/AYAH IDENTIFICATION: the closing quotation is Surat an-Nisa 4:159
// ("وَإِن مِّنْ أَهْلِ الْكِتَابِ إِلَّا لَيُؤْمِنَنَّ بِهِ قَبْلَ مَوْتِهِ وَيَوْمَ الْقِيَامَةِ يَكُونُ
// عَلَيْهِمْ شَهِيدًا"), the ayah immediately following 4:156-158 quoted in
// ch34 -- confirmed by its ayah-end roundel (159) directly continuing the
// numbering visible on p.271's scan right after ch34's own quotation ends
// at 158, and by its being the standard proof-text cited for ʿĪsā's
// eschatological return, matching this chapter's title and content.
// Same orthography-normalization note as ch34 applies (plain modern
// spelling, no dagger alifs/assimilation shaddas/waqf marks, matching
// qasas-v3/chapter-14.js's own Qur'an-quote convention) -- flagged there for
// review, not repeated in full here.
//
// CONTENT: Nadwi states that ʿĪsā will descend from heaven when Allah wills
// it, to settle the argument against those among the Jews and Christians who
// erred (by rejecting him outright or by deifying him), to uphold the truth
// and subdue the people of falsehood -- as the Prophet ﷺ himself foretold,
// as authentic reports and mass-transmitted hadiths record, and as Muslims
// of every era have believed. "And Allah, the Great, has spoken truly" leads
// into the closing Qur'anic proof-text (4:159): every one of the People of
// the Book will believe in him before his own death, and on the Day of
// Resurrection he will stand as a witness against them.
//
// Grammar / lexical notes:
//   -- فَرَّطَ / أَفْرَطَ (qs-v12-c35-002) are a deliberately paired form
//      I/form IV contrast in the printed text itself ("فَرَّطُوا وَأَفْرَطُوا",
//      those who fell short and those who went to excess) -- kept as two
//      separate new lemmas, matching the printed pairing rather than folding
//      one into the other.
//   -- النَّصَارَى (qs-v12-c35-002) is tagged pos:'noun', matching the
//      rationale given in ch31's header comment for الرُّوم/الْيُونَان and
//      ch32's for الْيَهُود -- a fully-declining common/collective noun for a
//      people, not a single unique name.
//   -- حِين (qs-v12-c35-001) and قَبْلَ (qs-v12-c35-009) are both tagged
//      pos:'adv' (a recognised pos value per CHAPTER-FORMAT.md) rather than
//      'noun'/'prep', since both function here as temporal connectives
//      governing a following clause/noun.
//   -- سَيَنزِلُ (qs-v12-c35-001) is tagged with the already-taught lemma
//      نَزَلَ; the prefixed سَـ future particle is folded into the same
//      leading-proclitic segment as the conjunction, features
//      'conj+part+impf.3ms', matching the general fused-proclitic handling
//      used elsewhere in this corpus for other prefixed particles.
//   -- يَكُونُ (qs-v12-c35-010, inside the Qur'an quote) reuses the
//      already-known-in-this-batch lemma كَانَ (see ch31/ch34's header
//      comments on the known-lemmas.txt discrepancy) and is not new.
//
// 16 new words (حِين، حُجَّة، فَرَّطَ، أَفْرَطَ، نَصَارَى، كَبَتَ، بَاطِل، وَرَدَ، صَحِيح،
// مُتَوَاتِر، اِعْتَقَدَ، عَصْر، كِتَاب، قَبْلَ، يَوْم، شَهِيد) -- the last new-word-
// heavy chapter of this batch, closing out the crucifixion/return theme's
// concentrated vocabulary before the volume moves on (ch36+) to the
// bishara-and-legacy material.
//
// No page footnotes (book_note) on p.271 for this chapter's own text.
export const CHAPTER = {
  id: 'ch35',
  title: { ar: 'نُزُولُ عِيسَى قَبْلَ الْقِيَامَةِ', en: 'The Descent of Isa Before the Resurrection' },
  newWords: [
    'فَرَّطَ', 'أَفْرَطَ', 'نَصَارَى', 'كَبَتَ', 'وَرَدَ', 'مُتَوَاتِر',
    'اِعْتَقَدَ', 'قَبْلَ', 'شَهِيد',
  ],
  lemmas: {
    حِين: { gloss: 'when, at the time (that)' },
    حُجَّة: { gloss: 'proof, argument' },
    فَرَّطَ: { gloss: 'to fall short, be negligent' },
    أَفْرَطَ: { gloss: 'to go to excess, overdo' },
    نَصَارَى: { gloss: 'Christians' },
    كَبَتَ: { gloss: 'to subdue, humiliate' },
    بَاطِل: { gloss: 'falsehood' },
    وَرَدَ: { gloss: 'to come, be reported, arrive' },
    صَحِيح: { gloss: 'authentic, sound' },
    مُتَوَاتِر: { gloss: 'mass-transmitted, widely attested' },
    اِعْتَقَدَ: { gloss: 'to believe firmly, hold as doctrine' },
    عَصْر: { gloss: 'age, era' },
    كِتَاب: { gloss: 'Book, Scripture' },
    قَبْلَ: { gloss: 'before' },
    يَوْم: { gloss: 'day' },
    شَهِيد: { gloss: 'witness' },
  },
  paragraphs: [
    {
      en: "He will descend from heaven when Allah wills it, and will settle the argument against those among the Jews and Christians who fell short or went to excess, and will uphold the truth and subdue the people of falsehood, as our Prophet ﷺ foretold, as authentic reports and mass-transmitted hadiths record, and as Muslims of every era have believed. And Allah, the Great, has spoken truly.",
      sentences: [
        {
          id: 'qs-v12-c35-001',
          ar: 'وَسَيَنزِلُ مِنَ السَّمَاءِ حِينَ يُرِيدُهُ اللَّهُ،',
          en: 'He will descend from heaven when Allah wills it,',
          tokens: [
            { surface: 'وَسَيَنزِلُ', lemma: 'نَزَلَ', pos: 'verb', features: 'conj+part+impf.3ms', gloss: 'to descend; and will descend' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'السَّمَاءِ', lemma: 'سَمَاء', pos: 'noun', features: 'def.gen', gloss: 'heaven' },
            { surface: 'حِينَ', lemma: 'حِين', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'يُرِيدُهُ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to will; wills it' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v12-c35-002',
          ar: 'وَيُقِيمُ الْحُجَّةَ عَلَى مَنْ فَرَّطُوا وَأَفْرَطُوا مِنَ الْيَهُودِ وَالنَّصَارَى،',
          en: 'and will settle the argument against those among the Jews and Christians who fell short or went to excess,',
          tokens: [
            { surface: 'وَيُقِيمُ', lemma: 'أَقَامَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to establish; and establishes' },
            { surface: 'الْحُجَّةَ', lemma: 'حُجَّة', pos: 'noun', features: 'def.acc', root: 'ح ج ج', gloss: 'the proof' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'against' },
            { surface: 'مَنْ', lemma: 'مَن', pos: 'rel', features: 'rel', gloss: 'those who' },
            { surface: 'فَرَّطُوا', lemma: 'فَرَّطَ', pos: 'verb', features: 'perf.3mp', root: 'ف ر ط', gloss: 'to fall short; fell short' },
            { surface: 'وَأَفْرَطُوا', lemma: 'أَفْرَطَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ف ر ط', gloss: 'to go to excess; and went to excess' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْيَهُودِ', lemma: 'يَهُود', pos: 'noun', features: 'def.gen.pl', gloss: 'the Jews' },
            { surface: 'وَالنَّصَارَى', lemma: 'نَصَارَى', pos: 'noun', features: 'conj+def', gloss: 'and the Christians' },
          ],
        },
        {
          id: 'qs-v12-c35-003',
          ar: 'وَيَنْصُرُ الْحَقَّ،',
          en: 'and will uphold the truth,',
          tokens: [
            { surface: 'وَيَنْصُرُ', lemma: 'نَصَرَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to uphold, support; and upholds' },
            { surface: 'الْحَقَّ', lemma: 'حَقّ', pos: 'noun', features: 'def.acc', gloss: 'the truth' },
          ],
        },
        {
          id: 'qs-v12-c35-004',
          ar: 'وَيَكْبُتُ أَهْلَ الْبَاطِلِ،',
          en: 'and subdue the people of falsehood,',
          tokens: [
            { surface: 'وَيَكْبُتُ', lemma: 'كَبَتَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ك ب ت', gloss: 'to subdue; and subdues' },
            { surface: 'أَهْلَ', lemma: 'أَهْل', pos: 'noun', features: 'acc.constr', gloss: 'the people of' },
            { surface: 'الْبَاطِلِ', lemma: 'بَاطِل', pos: 'noun', features: 'def.gen', root: 'ب ط ل', gloss: 'falsehood' },
          ],
        },
        {
          id: 'qs-v12-c35-005',
          ar: 'كَمَا أَخْبَرَ بِهِ نَبِيُّنَا ﷺ وَوَرَدَتْ بِهِ الْأَخْبَارُ الصَّحِيحَةُ،',
          en: 'as our Prophet ﷺ foretold, and as the authentic reports record,',
          tokens: [
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'as' },
            { surface: 'أَخْبَرَ', lemma: 'أَخْبَرَ', pos: 'verb', features: 'perf.3ms', gloss: 'to inform, tell; foretold' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'of it' },
            { surface: 'نَبِيُّنَا', lemma: 'نَبِيّ', pos: 'noun', features: 'nom+1p', gloss: 'our prophet' },
            { surface: 'وَوَرَدَتْ', lemma: 'وَرَدَ', pos: 'verb', features: 'conj+perf.3fs', root: 'و ر د', gloss: 'to come, be reported; and there came' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'of it' },
            { surface: 'الْأَخْبَارُ', lemma: 'خَبَر', pos: 'noun', features: 'def.nom.pl', gloss: 'the reports' },
            { surface: 'الصَّحِيحَةُ', lemma: 'صَحِيح', pos: 'adj', features: 'def.nom.f', gloss: 'the authentic' },
          ],
        },
        {
          id: 'qs-v12-c35-006',
          ar: 'وَالْأَحَادِيثُ الْمُتَوَاتِرَةُ،',
          en: 'and the mass-transmitted hadiths,',
          tokens: [
            { surface: 'وَالْأَحَادِيثُ', lemma: 'حَدِيث', pos: 'noun', features: 'conj+def.nom.pl', gloss: 'and the narrations' },
            { surface: 'الْمُتَوَاتِرَةُ', lemma: 'مُتَوَاتِر', pos: 'adj', features: 'def.nom.f', root: 'و ت ر', gloss: 'the mass-transmitted' },
          ],
        },
        {
          id: 'qs-v12-c35-007',
          ar: 'وَاعْتَقَدَهُ الْمُسْلِمُونَ فِي كُلِّ عَصْرٍ،',
          en: 'and as Muslims of every era have believed,',
          tokens: [
            { surface: 'وَاعْتَقَدَهُ', lemma: 'اِعْتَقَدَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ع ق د', gloss: 'to believe firmly; and believed it' },
            { surface: 'الْمُسْلِمُونَ', lemma: 'مُسْلِم', pos: 'noun', features: 'def.nom.pl', gloss: 'the Muslims' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'عَصْرٍ', lemma: 'عَصْر', pos: 'noun', features: 'indef.gen', gloss: 'era' },
          ],
        },
        {
          id: 'qs-v12-c35-008',
          ar: 'وَصَدَقَ اللَّهُ الْعَظِيمُ.',
          en: 'And Allah, the Great, has spoken truly.',
          tokens: [
            { surface: 'وَصَدَقَ', lemma: 'صَدَقَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to speak truly; and has spoken truly' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'الْعَظِيمُ', lemma: 'عَظِيم', pos: 'adj', features: 'def.nom', gloss: 'the Great' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَتَى سَيَنزِلُ عِيسَى مِنَ السَّمَاءِ؟',
          options: ['حِينَ يُرِيدُهُ اللَّهُ', 'فِي أَوَّلِ كُلِّ سَنَةٍ', 'لَنْ يَنزِلَ أَبَداً'],
          answer: 0,
          qEn: 'When will ʿĪsā descend from heaven?',
          optionsEn: ['When Allah wills it', 'At the start of every year', 'He will never descend'],
        },
        {
          q: 'مَاذَا سَيَفْعَلُ عِيسَى حِينَ يَنزِلُ؟',
          options: ['يُقِيمُ الْحُجَّةَ وَيَنْصُرُ الْحَقَّ وَيَكْبُتُ أَهْلَ الْبَاطِلِ', 'يَبْنِي مَسَاجِدَ جَدِيدَةً فَقَطْ', 'يُقَاتِلُ الْمُسْلِمِينَ'],
          answer: 0,
          qEn: 'What will ʿĪsā do when he descends?',
          optionsEn: ['Settle the argument, uphold the truth, and subdue the people of falsehood', 'Only build new mosques', 'Fight the Muslims'],
        },
        {
          q: 'مِمَّنْ جَاءَتِ الْأَخْبَارُ الصَّحِيحَةُ بِنُزُولِ عِيسَى؟',
          options: ['مِنْ نَبِيِّنَا ﷺ وَالْأَحَادِيثِ الْمُتَوَاتِرَةِ', 'مِنَ الْيَهُودِ فَقَطْ', 'لَا أَحَدَ أَخْبَرَ بِذَلِكَ'],
          answer: 0,
          qEn: "From whom did the authentic reports of ʿĪsā's descent come?",
          optionsEn: ['From our Prophet ﷺ and the mass-transmitted hadiths', 'From the Jews only', 'No one informed of it'],
        },
      ],
    },
    {
      en: '"And there is none among the People of the Book but will surely believe in him before his death, and on the Day of Resurrection he will be a witness against them."',
      sentences: [
        {
          id: 'qs-v12-c35-009',
          ar: '﴿وَإِنْ مِنْ أَهْلِ الْكِتَابِ إِلَّا لَيُؤْمِنَنَّ بِهِ قَبْلَ مَوْتِهِ﴾',
          en: 'And there is none among the People of the Book but will surely believe in him before his death,',
          tokens: [
            { surface: 'وَإِنْ', lemma: 'إِنْ', pos: 'part', features: 'conj+neg', gloss: 'and none...but' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'أَهْلِ', lemma: 'أَهْل', pos: 'noun', features: 'constr.gen', gloss: 'the people of' },
            { surface: 'الْكِتَابِ', lemma: 'كِتَاب', pos: 'noun', features: 'def.gen', gloss: 'the Book' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'but' },
            { surface: 'لَيُؤْمِنَنَّ', lemma: 'آمَنَ', pos: 'verb', features: 'part+impf.3ms', gloss: 'to believe; will surely believe' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'in him' },
            { surface: 'قَبْلَ', lemma: 'قَبْلَ', pos: 'adv', features: 'adv', gloss: 'before' },
            { surface: 'مَوْتِهِ', lemma: 'مَوْت', pos: 'noun', features: 'gen+3ms', gloss: 'his death' },
          ],
        },
        {
          id: 'qs-v12-c35-010',
          ar: '﴿وَيَوْمَ الْقِيَامَةِ يَكُونُ عَلَيْهِمْ شَهِيداً﴾.',
          en: 'and on the Day of Resurrection he will be a witness against them.',
          tokens: [
            { surface: 'وَيَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'conj+acc.constr', gloss: 'and on the day of' },
            { surface: 'الْقِيَامَةِ', lemma: 'قِيَامَة', pos: 'noun', features: 'def.gen', gloss: 'the Resurrection' },
            { surface: 'يَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be; will be' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'against them' },
            { surface: 'شَهِيداً', lemma: 'شَهِيد', pos: 'noun', features: 'indef.acc', gloss: 'a witness' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا تُؤَكِّدُ هَذِهِ الْآيَةُ عَنْ أَهْلِ الْكِتَابِ؟',
          options: ['أَنَّهُمْ سَيُؤْمِنُونَ بِعِيسَى قَبْلَ مَوْتِهِمْ', 'أَنَّهُمْ لَنْ يُؤْمِنُوا أَبَداً', 'أَنَّهُمْ آمَنُوا بِهِ مُنْذُ الْبِدَايَةِ'],
          answer: 0,
          qEn: 'What does this ayah affirm about the People of the Book?',
          optionsEn: ['That they will believe in ʿĪsā before their own death', 'That they will never believe', 'That they have believed in him from the very beginning'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَ',
        post: 'الْحَقَّ.',
        en: 'And he upholds the truth.',
        options: ['يَنْصُرُ', 'نَصَرَ', 'يَنْصُرُونَ', 'نَاصِر'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine singular -- continues the chain of present/future verbs (سَيَنزِلُ، يُقِيمُ) describing what ʿĪsā will do.',
          'Perfect -- wrong tense; the whole passage describes a still-future event.',
          'Plural -- wrong number; the subject (ʿĪsā) is singular.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'عَلَى مَنْ فَرَّطُوا وَ',
        post: 'مِنَ الْيَهُودِ وَالنَّصَارَى.',
        en: 'against those among the Jews and Christians who fell short or went to excess.',
        options: ['أَفْرَطُوا', 'فَرَّطُوا', 'يُفْرِطُونَ', 'مُفْرِطُونَ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural -- matches the parallel فَرَّطُوا just before it, both describing a past, completed lapse.',
          'Repeats فَرَّطُوا -- wrong; the printed text deliberately pairs two different verbs, falling short and going to excess.',
          'Imperfect -- wrong tense; breaks the parallel with the perfect فَرَّطُوا.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَيَكْبُتُ',
        post: 'الْبَاطِلِ.',
        en: 'and subdues the people of falsehood.',
        options: ['أَهْلَ', 'أَهْلُ', 'أَهْلِ', 'أَهْلًا'],
        answer: 0,
        rationales: [
          'Accusative, construct -- direct object of the transitive verb يَكْبُتُ, first term of an idafa with الْبَاطِلِ.',
          'Nominative -- wrong case; this word is the verb\'s object, not its subject.',
          'Genitive -- wrong case; nothing here governs the genitive on this word.',
          'Indefinite accusative -- wrong state; the idafa with الْبَاطِلِ requires the construct form, not tanwin.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَنْصُرُ اللَّهُ الْحَقَّ',
        pre: '',
        post: 'الْحَقَّ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَنْصُرُ', 'يَنْصُرُ', 'تَنْصُرُ', 'نَنْصُرُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَنْصُرُ اللَّهُ الْحَقَّ',
        pre: '',
        post: 'الْحَقَّ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَنْصُرُ', 'يَنْصُرُ', 'أَنْصُرُ', 'نَنْصُرُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَنْصُرُ اللَّهُ الْحَقَّ',
        pre: '',
        post: 'الْحَقَّ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَنْصُرُونَ', 'يَنْصُرُ', 'تَنْصُرُ', 'نَنْصُرُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

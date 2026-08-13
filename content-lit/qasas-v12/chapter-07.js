// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 7 -- زَهْوٌ وَإِذْلَالٌ. Printed page 255 only
// -- a very short chapter, four printed lines sitting between ch6's
// heading نُكْرَانٌ لِلْجَمِيلِ (page 254) and ch8's heading وِلَادَةُ الْمَسِيحِ
// تَتَحَدَّى الْمَحْسُوسَ الْمَعْرُوفَ, both of which fall on page 255 itself.
// Transcribed by hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md.
//
// A one-paragraph continuation of chapter 6's indictment: despite their
// historical abasement (إِذْلَال, the chapter's own title-word, referring
// back to their degraded state under foreign rule), the Israelites were
// nonetheless full of vain pride (زَهْو) in their lineage and relied on
// wishful thinking, quoting their own boast -- preserved in two short
// Qur'anic citations -- that they were "sons of Allah and His beloved
// ones" and that Hellfire would touch them for only a few counted days.
//
// Grammar / lexical notes:
//   -- The two Qur'anic quotations (Q5:18's نَحْنُ أَبْنَاءُ اللَّهِ وَأَحِبَّاؤُهُ and
//      Q2:80's لَن تَمَسَّنَا النَّارُ إِلَّا أَيَّامًا مَّعْدُودَةً) are each kept in their
//      own ﴿﴾-wrapped sentence, split out from their narrating يَقُولُونَ/
//      وَيَقُولُونَ clause, per the established convention (qasas-v3 ch14).
//      They are tokenized and translated exactly like ordinary prose, with
//      no artificial truncation -- both happen to be short enough to also
//      count toward this chapter's buildable-sentence quota, which is not
//      avoided or worked around here.
//   -- Because this printed chapter is unusually short (only two
//      sentences' worth of narration wrapped around two brief quotes),
//      sentence 001 is split one comma finer than the print shows --
//      after رَغْمَ كُلِّ ذَلِكَ rather than only after بِالنَّسَبِ -- to keep
//      enough 3-9-token, case-marked units for the five-buildable-sentence
//      floor. No wording is changed; this only moves the seam.
//   -- شَدِيدِيْ (001, 002) is the construct/accusative form of the sound
//      masculine plural adjective شَدِيد (already taught), predicate of
//      كَانُوا, in construct with the following verbal noun (a common
//      "intense in X" idafa pattern) -- tagged 'acc.constr.pl'.
//   -- الِادِّلَالِ (new) is the verbal noun of the form-VIII verb اِدَّلَّ
//      ("to flaunt, be vain/coquettish about"), distinct from and not to
//      be confused with اِعْتِزَاز; both describe the same vain pride here
//      but only الِادِّلَال is what the scan actually prints.
//   -- بِالنَّسَبِ fuses بِ onto the already-taught common noun نَسَب, per the
//      established بِ+full-noun fusion convention (contrast بِ + bare
//      pronoun, which is not used in this chapter).
//   -- لِلَّهِ/اللَّهِ inside the Qur'an quote is proper AND fused (لَ+اللَّه ->
//      one token) or plain-case as printed; see the tokens for the exact
//      split used.
//   -- Shared lexicon check (known from vols 1-3 / Qirā'ah, per
//      known-lemmas.txt): شَدِيد، اِبْن، لَن، نَار، مَعْدُود، إِلَّا، كَانَ، قَالَ،
//      عَلَى، نَسَب -- are all already taught and NOT re-listed in newWords
//      here. Function words/particles and اللَّه are treated as permanent
//      background vocabulary as in ch6.
//
// 8 new words (رَغْم، اِدِّلَال، اِعْتِمَاد، أُمْنِيَّة، حُلْم، حَبِيب، مَسَّ، يَوْم).
//
// No page footnotes (book_note) on page 255 for this chapter.
export const CHAPTER = {
  id: 'ch7',
  title: { ar: 'زَهْوٌ وَإِذْلَالٌ', en: 'Arrogance and Humiliation' },
  newWords: [
    'رَغْم', 'اِدِّلَال', 'اِعْتِمَاد', 'أُمْنِيَّة', 'حُلْم', 'حَبِيب',
    'مَسَّ', 'يَوْم',
  ],
  lemmas: {
    رَغْم: { gloss: 'despite, in spite of' },
    اِدِّلَال: { gloss: 'vain pride, flaunting, self-conceit' },
    اِعْتِمَاد: { gloss: 'reliance, dependence' },
    أُمْنِيَّة: { gloss: 'wish, fancy, wishful hope' },
    حُلْم: { gloss: 'dream' },
    حَبِيب: { gloss: 'beloved, loved one' },
    مَسَّ: { gloss: 'to touch' },
    يَوْم: { gloss: 'day' },
  },
  paragraphs: [
    {
      en: "And they were, despite all that humiliation, intensely full of vain pride in their lineage, intensely reliant on wishful thinking and dreams, saying, \"We are the sons of Allah and His beloved ones,\" and saying, \"The Fire will never touch us except for a few numbered days.\"",
      sentences: [
        {
          id: 'qs-v12-c07-001',
          ar: 'وَكَانُوا رَغْمَ كُلِّ ذَلِكَ',
          en: 'And they were, despite all that,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they were' },
            { surface: 'رَغْمَ', lemma: 'رَغْم', pos: 'prep', features: 'acc', root: 'ر غ م', gloss: 'despite, in spite of' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'all of' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.gen', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v12-c07-002',
          ar: 'شَدِيدِيْ الِادِّلَالِ بِالنَّسَبِ،',
          en: 'intensely full of vain pride in their lineage,',
          tokens: [
            { surface: 'شَدِيدِيْ', lemma: 'شَدِيد', pos: 'adj', features: 'acc.constr.pl', gloss: 'intensely given to' },
            { surface: 'الِادِّلَالِ', lemma: 'اِدِّلَال', pos: 'noun', features: 'def.gen', root: 'د ل ل', gloss: 'vain pride, flaunting' },
            { surface: 'بِالنَّسَبِ', lemma: 'نَسَب', pos: 'noun', features: 'prep+def.gen', gloss: 'in lineage' },
          ],
        },
        {
          id: 'qs-v12-c07-003',
          ar: 'شَدِيدِيْ الِاعْتِمَادِ عَلَى الْأَمَانِيِّ وَالْأَحْلَامِ،',
          en: 'intensely reliant on wishful thinking and dreams,',
          tokens: [
            { surface: 'شَدِيدِيْ', lemma: 'شَدِيد', pos: 'adj', features: 'acc.constr.pl', gloss: 'intensely given to' },
            { surface: 'الِاعْتِمَادِ', lemma: 'اِعْتِمَاد', pos: 'noun', features: 'def.gen', root: 'ع م د', gloss: 'reliance, dependence' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'الْأَمَانِيِّ', lemma: 'أُمْنِيَّة', pos: 'noun', features: 'def.gen.pl', root: 'م ن ي', gloss: 'wishes, fancies' },
            { surface: 'وَالْأَحْلَامِ', lemma: 'حُلْم', pos: 'noun', features: 'conj+def.gen.pl', root: 'ح ل م', gloss: 'and dreams' },
          ],
        },
        {
          id: 'qs-v12-c07-004',
          ar: 'يَقُولُونَ:',
          en: 'saying:',
          tokens: [
            { surface: 'يَقُولُونَ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3mp', gloss: 'to say; they say' },
          ],
        },
        {
          id: 'qs-v12-c07-005',
          ar: '﴿نَحْنُ أَبْنَاءُ اللَّهِ وَأَحِبَّاؤُهُ﴾،',
          en: '"We are the sons of Allah and His beloved ones,"',
          tokens: [
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: '1p', gloss: 'we' },
            { surface: 'أَبْنَاءُ', lemma: 'اِبْن', pos: 'noun', features: 'pl.nom.constr', gloss: 'sons of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَأَحِبَّاؤُهُ', lemma: 'حَبِيب', pos: 'noun', features: 'conj+pl.nom+3ms', root: 'ح ب ب', gloss: 'and His beloved ones' },
          ],
        },
        {
          id: 'qs-v12-c07-006',
          ar: 'وَيَقُولُونَ:',
          en: 'and saying:',
          tokens: [
            { surface: 'وَيَقُولُونَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to say; and they say' },
          ],
        },
        {
          id: 'qs-v12-c07-007',
          ar: '﴿لَن تَمَسَّنَا النَّارُ إِلَّا أَيَّامًا مَّعْدُودَةً﴾.',
          en: '"The Fire will never touch us except for a few numbered days."',
          tokens: [
            { surface: 'لَن', lemma: 'لَن', pos: 'part', features: 'neg', gloss: 'will never' },
            { surface: 'تَمَسَّنَا', lemma: 'مَسَّ', pos: 'verb', features: 'impf.3fs+1p', root: 'م س س', gloss: 'to touch; will touch us' },
            { surface: 'النَّارُ', lemma: 'نَار', pos: 'noun', features: 'def.nom', gloss: 'the Fire' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'أَيَّامًا', lemma: 'يَوْم', pos: 'noun', features: 'pl.indef.acc', gloss: 'days' },
            { surface: 'مَّعْدُودَةً', lemma: 'مَعْدُود', pos: 'adj', features: 'indef.acc.f', gloss: 'numbered, limited' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا كَانُوا شَدِيدِي الِادِّلَالِ؟',
          options: ['بِالنَّسَبِ', 'بِالْمَالِ', 'بِالْعِلْمِ'],
          answer: 0,
          qEn: 'What were they intensely, vainly proud of?',
          optionsEn: ['Their lineage', 'Their wealth', 'Their knowledge'],
        },
        {
          q: 'مَاذَا كَانُوا يَقُولُونَ عَنِ النَّارِ؟',
          options: ['لَنْ تَمَسَّنَا النَّارُ إِلَّا أَيَّامًا مَعْدُودَةً', 'لَنْ نَدْخُلَ النَّارَ أَبَداً', 'النَّارُ حَرَامٌ عَلَيْنَا'],
          answer: 0,
          qEn: 'What did they say about the Fire?',
          optionsEn: ['The Fire will never touch us except for a few numbered days', 'We will never enter the Fire at all', 'The Fire is forbidden to us'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانُوا',
        post: 'كُلِّ ذَلِكَ شَدِيدِي الِادِّلَالِ.',
        en: 'And they were, despite all that, intensely full of vain pride.',
        options: ['رَغْمَ', 'رَغْمُ', 'رَغْمٌ', 'رَغْمًا رَغْمًا'],
        answer: 0,
        rationales: [
          'Accusative -- رَغْمَ functions as a quasi-preposition ("despite") and always takes the accusative.',
          'Nominative -- wrong case; رَغْمَ is never inflected for nominative in this use.',
          'Indefinite nominative with tanwīn -- wrong case and wrong state.',
          'Not a real form here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'يَقُولُونَ: نَحْنُ',
        post: 'اللَّهِ وَأَحِبَّاؤُهُ.',
        en: 'They say: We are the sons of Allah and His beloved ones.',
        options: ['أَبْنَاءُ', 'أَبْنَاءَ', 'أَبْنَاءِ', 'اِبْنُ'],
        answer: 0,
        rationales: [
          'Nominative, construct -- predicate of the nominal sentence نَحْنُ أَبْنَاءُ اللَّهِ, matching the printed form.',
          'Accusative -- wrong case; a predicate noun after نَحْنُ takes the nominative.',
          'Genitive -- wrong case for the same reason.',
          'Singular -- wrong number; the plural أَبْنَاء matches the plural pronoun نَحْنُ.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَيَقُولُونَ: لَن',
        post: 'النَّارُ إِلَّا أَيَّامًا مَّعْدُودَةً.',
        en: 'And they say: the Fire will never touch us except for a few numbered days.',
        options: ['تَمَسَّنَا', 'مَسَّتْنَا', 'يَمَسُّنَا', 'مَسَّنَا'],
        answer: 0,
        rationales: [
          'Subjunctive after لَن, 3rd feminine singular (agreeing with النَّارُ) -- matches the printed لَن تَمَسَّنَا.',
          'Perfect -- wrong mood; لَن requires the subjunctive imperfect.',
          '3rd masculine -- wrong gender; النَّارُ is feminine.',
          'Perfect, no subjunctive marking -- wrong mood for لَن.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَعْتَمِدُ عَلَى الْأَمَانِيِّ وَالْأَحْلَامِ',
        pre: '',
        post: 'عَلَى الْأَمَانِيِّ وَالْأَحْلَامِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَعْتَمِدُونَ', 'يَعْتَمِدُ', 'تَعْتَمِدُ', 'أَعْتَمِدُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the base form, not shifted to "they."',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'يَعْتَمِدُ عَلَى الْأَمَانِيِّ وَالْأَحْلَامِ',
        pre: '',
        post: 'عَلَى الْأَمَانِيِّ وَالْأَحْلَامِ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (ms)',
        options: ['تَعْتَمِدُ', 'يَعْتَمِدُ', 'أَعْتَمِدُ', 'نَعْتَمِدُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he, the base form, not shifted to "you."',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'تَمَسُّهُ النَّارُ أَيَّامًا مَعْدُودَةً',
        pre: '',
        post: 'أَيَّامًا مَعْدُودَةً',
        targetPerson: 'أَنَا',
        targetEn: 'me (the Fire touches me)',
        options: ['تَمَسُّنِي', 'تَمَسُّهُ', 'تَمَسُّهُمْ', 'تَمَسُّكَ'],
        answer: 0,
        rationales: [
          'Object suffix 1st singular -- "touches me," matching أَنَا.',
          'Object suffix 3rd masculine singular -- the base form, not shifted to "me."',
          'Object suffix 3rd masculine plural -- "them."',
          'Object suffix 2nd masculine singular -- "you."',
        ],
      },
    ],
  },
};

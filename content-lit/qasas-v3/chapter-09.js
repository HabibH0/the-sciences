// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 9 -- الرَّسُولُ.
// Printed pages 68 (bottom, right after ch8's closing line and the
// heading) through 69 (top, ending before ch10's heading بَشَرٌ أَمْ مَلَكٌ
// partway down the same page). Transcribed by hand from the scan (vision
// OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// A theological digression before the story resumes: why does Allah send
// a human messenger at all, rather than speaking to everyone directly?
// The chapter reasons by analogy -- even kings, mere human beings like
// anyone else, don't personally address every single subject; how much
// more so Allah, whom no one can see or hear directly except by His own
// will. So Allah wills to send the people a messenger -- opening the door
// for ch10 to ask what kind of being that messenger should be.
//
// Grammar / lexical notes:
//   -- كَالْبَشَرِ (qs-v3-c09-006) is كَ (comparative "like, as") fused onto
//      the already-taught noun بَشَر, tagged with the noun's own lemma per
//      the established preposition-fused-onto-a-full-noun convention
//      (بِاللَّهِ -> lemma اللَّه, qasas-v2 ch11) rather than treating كَ as
//      its own lemma.
//   -- يُرْسِلَ / يَذْبَحَ-style subjunctive verbs after أَنْ are tagged
//      plain impf.PERSON (no separate "subjunctive" atom), matching the
//      established corpus-wide convention (qasas-v1 ch14, أَنْ يَفْعَلَ /
//      أَنْ يَذْبَحَ).
//   -- افْعَلْ كَذَا، افْعَلْ كَذَا (qs-v3-c09-003/005) repeats within a single
//      sentence as printed -- kept as four separate tokens rather than
//      collapsed, matching the printed-text-fidelity practice used
//      elsewhere in the corpus for repeated material.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): أَرَادَ، اللَّه، أَنْ،
//      أَرْسَلَ، إِلَى، رَجُل، مِنْ، كَلَّمَ، نَصَحَ، لِ، إِنَّ، لَا، وَاحِد، كُلّ، أَحَد،
//      قَالَ، فَعَلَ، مَلِك، ذَهَبَ، بَشَر، قَدَرَ، رَأَى، سَمِعَ، ذَلِكَ، إِلَّا، مَنْ،
//      إِذَا، النَّاس، رَسُول
//      are all already taught and are NOT re-listed in newWords here.
//
// 3 new words (خَاطَبَ، كَذَا، كَلَام).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch9',
  title: { ar: 'الرَّسُولُ', en: 'The Messenger' },
  newWords: ['خَاطَبَ', 'كَذَا', 'كَلَام'],
  lemmas: {
    خَاطَبَ: { gloss: 'to address, speak directly to' },
    كَذَا: { gloss: 'such-and-such' },
    كَلَام: { gloss: 'speech' },
  },
  paragraphs: [
    {
      en: "Allah wanted to send them a man from among them, who would speak to them and advise them -- for Allah does not speak to any single individual, nor address every single person telling him what to do, just as kings don't either. Kings, after all, are human beings like anyone else: anyone can see them and hear their speech -- but no one can see Allah or hear His speech and speak to Him, except whom Allah wills, when Allah wills. So Allah willed to send the people a messenger who would speak to them and advise them.",
      sentences: [
        {
          id: 'qs-v3-c09-001',
          ar: 'وَأَرَادَ اللَّهُ أَنْ يُرْسِلَ إِلَيْهِمْ رَجُلًا مِنْهُمْ يُكَلِّمُهُمْ وَيَنْصَحُ لَهُمْ.',
          en: 'Allah wanted to send them a man from among them, who would speak to them and advise them.',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want; and wanted' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يُرْسِلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to send; send' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'رَجُلًا', lemma: 'رَجُل', pos: 'noun', features: 'indef.acc', gloss: 'a man' },
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'from among them' },
            { surface: 'يُكَلِّمُهُمْ', lemma: 'كَلَّمَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to speak to; speaks to them' },
            { surface: 'وَيَنْصَحُ', lemma: 'نَصَحَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to advise; and advises' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'them' },
          ],
        },
        {
          id: 'qs-v3-c09-002',
          ar: 'إِنَّ اللَّهَ لَا يُكَلِّمُ وَاحِدًا،',
          en: 'Indeed Allah does not speak to a single one,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُكَلِّمُ', lemma: 'كَلَّمَ', pos: 'verb', features: 'impf.3ms', gloss: 'to speak to; speaks to' },
            { surface: 'وَاحِدًا', lemma: 'وَاحِد', pos: 'adj', features: 'indef.acc', gloss: 'a single one' },
          ],
        },
        {
          id: 'qs-v3-c09-003',
          ar: 'إِنَّ اللَّهَ لَا يُخَاطِبُ كُلَّ أَحَدٍ يَقُولُ لَهُ افْعَلْ كَذَا، افْعَلْ كَذَا.',
          en: 'Indeed Allah does not address every single person, saying to him: "Do this, do that."',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُخَاطِبُ', lemma: 'خَاطَبَ', pos: 'verb', features: 'impf.3ms', root: 'خ ط ب', gloss: 'to address; addresses' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'أَحَدٍ', lemma: 'أَحَد', pos: 'noun', features: 'indef.gen', gloss: 'single person' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; saying' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'افْعَلْ', lemma: 'فَعَلَ', pos: 'verb', features: 'imp.2ms', gloss: 'to do; do!' },
            { surface: 'كَذَا', lemma: 'كَذَا', pos: 'noun', features: 'indecl', root: 'ك ذ ا', gloss: 'such-and-such' },
            { surface: 'افْعَلْ', lemma: 'فَعَلَ', pos: 'verb', features: 'imp.2ms', gloss: 'to do; do!' },
            { surface: 'كَذَا', lemma: 'كَذَا', pos: 'noun', features: 'indecl', root: 'ك ذ ا', gloss: 'such-and-such' },
          ],
        },
        {
          id: 'qs-v3-c09-004',
          ar: 'إِنَّ الْمُلُوكَ لَا يُكَلِّمُونَ وَاحِدًا.',
          en: 'Indeed kings do not speak to a single one.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'الْمُلُوكَ', lemma: 'مَلِك', pos: 'noun', features: 'def.acc.pl', gloss: 'the kings' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُكَلِّمُونَ', lemma: 'كَلَّمَ', pos: 'verb', features: 'impf.3mp', gloss: 'to speak to; speak to' },
            { surface: 'وَاحِدًا', lemma: 'وَاحِد', pos: 'adj', features: 'indef.acc', gloss: 'a single one' },
          ],
        },
        {
          id: 'qs-v3-c09-005',
          ar: 'إِنَّ الْمُلُوكَ لَا يَذْهَبُونَ إِلَى كُلِّ أَحَدٍ يَقُولُونَ لَهُ افْعَلْ كَذَا، افْعَلْ كَذَا.',
          en: 'Indeed kings do not go to every single person, saying to him: "Do this, do that."',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'الْمُلُوكَ', lemma: 'مَلِك', pos: 'noun', features: 'def.acc.pl', gloss: 'the kings' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَذْهَبُونَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'impf.3mp', gloss: 'to go; go' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'أَحَدٍ', lemma: 'أَحَد', pos: 'noun', features: 'indef.gen', gloss: 'single person' },
            { surface: 'يَقُولُونَ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3mp', gloss: 'to say; saying' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'افْعَلْ', lemma: 'فَعَلَ', pos: 'verb', features: 'imp.2ms', gloss: 'to do; do!' },
            { surface: 'كَذَا', lemma: 'كَذَا', pos: 'noun', features: 'indecl', root: 'ك ذ ا', gloss: 'such-and-such' },
            { surface: 'افْعَلْ', lemma: 'فَعَلَ', pos: 'verb', features: 'imp.2ms', gloss: 'to do; do!' },
            { surface: 'كَذَا', lemma: 'كَذَا', pos: 'noun', features: 'indecl', root: 'ك ذ ا', gloss: 'such-and-such' },
          ],
        },
        {
          id: 'qs-v3-c09-006',
          ar: 'وَالْمُلُوكُ بَشَرٌ كَالْبَشَرِ،',
          en: 'Kings are human beings like anyone else,',
          tokens: [
            { surface: 'وَالْمُلُوكُ', lemma: 'مَلِك', pos: 'noun', features: 'conj+def.nom.pl', gloss: 'and the kings' },
            { surface: 'بَشَرٌ', lemma: 'بَشَر', pos: 'noun', features: 'indef.nom', gloss: 'human beings' },
            { surface: 'كَالْبَشَرِ', lemma: 'بَشَر', pos: 'noun', features: 'prep+def.gen', gloss: 'like other human beings' },
          ],
        },
        {
          id: 'qs-v3-c09-007',
          ar: 'يَقْدِرُ كُلُّ أَحَدٍ أَنْ يَرَاهُمْ وَيَسْمَعَ كَلَامَهُمْ،',
          en: 'anyone can see them and hear their speech,',
          tokens: [
            { surface: 'يَقْدِرُ', lemma: 'قَدَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be able; is able' },
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'nom.constr', gloss: 'every' },
            { surface: 'أَحَدٍ', lemma: 'أَحَد', pos: 'noun', features: 'indef.gen', gloss: 'single person' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَرَاهُمْ', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to see; see them' },
            { surface: 'وَيَسْمَعَ', lemma: 'سَمِعَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to hear; and hear' },
            { surface: 'كَلَامَهُمْ', lemma: 'كَلَام', pos: 'noun', features: 'acc+3mp', root: 'ك ل م', gloss: 'their speech' },
          ],
        },
        {
          id: 'qs-v3-c09-008',
          ar: 'وَلَا يَقْدِرُ أَحَدٌ أَنْ يَرَى اللهَ وَيَسْمَعَ كَلَامَهُ وَيُكَلِّمَهُ،',
          en: 'but no one can see Allah, hear His speech, and speak to Him,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَقْدِرُ', lemma: 'قَدَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be able; is able' },
            { surface: 'أَحَدٌ', lemma: 'أَحَد', pos: 'noun', features: 'indef.nom', gloss: 'anyone' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', gloss: 'to see; see' },
            { surface: 'اللهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَيَسْمَعَ', lemma: 'سَمِعَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to hear; and hear' },
            { surface: 'كَلَامَهُ', lemma: 'كَلَام', pos: 'noun', features: 'acc+3ms', root: 'ك ل م', gloss: 'His speech' },
            { surface: 'وَيُكَلِّمَهُ', lemma: 'كَلَّمَ', pos: 'verb', features: 'conj+impf.3ms+3ms', gloss: 'to speak to; and speak to Him' },
          ],
        },
        {
          id: 'qs-v3-c09-009',
          ar: 'وَلَا يَقْدِرُ عَلَى ذَلِكَ إِلَّا مَنْ أَرَادَ اللَّهُ، إِذَا أَرَادَ اللَّهُ.',
          en: 'no one is able to do that except whom Allah wills, when Allah wills.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَقْدِرُ', lemma: 'قَدَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be able; is able' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to, upon' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'whom' },
            { surface: 'أَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms', root: 'ر و د', gloss: 'to want; wills' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'part', features: 'part', gloss: 'when' },
            { surface: 'أَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms', root: 'ر و د', gloss: 'to want; wills' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v3-c09-010',
          ar: 'فَأَرَادَ اللَّهُ أَنْ يُرْسِلَ إِلَى النَّاسِ رَسُولًا يُكَلِّمُهُمْ وَيَنْصَحُ لَهُمْ.',
          en: 'So Allah willed to send the people a messenger who would speak to them and advise them.',
          tokens: [
            { surface: 'فَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want; so willed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يُرْسِلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to send; send' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'رَسُولًا', lemma: 'رَسُول', pos: 'noun', features: 'indef.acc', gloss: 'a messenger' },
            { surface: 'يُكَلِّمُهُمْ', lemma: 'كَلَّمَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to speak to; who speaks to them' },
            { surface: 'وَيَنْصَحُ', lemma: 'نَصَحَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to advise; and advises' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'them' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا أَرَادَ اللَّهُ أَنْ يُرْسِلَ إِلَى النَّاسِ؟',
          options: [
            'رَجُلًا مِنْهُمْ يُكَلِّمُهُمْ وَيَنْصَحُ لَهُمْ',
            'كِتَابًا مِنَ السَّمَاءِ فَقَطْ',
            'مَلَكًا يَعِيشُ بَيْنَهُمْ',
          ],
          answer: 0,
          qEn: 'What did Allah want to send to the people?',
          optionsEn: [
            'A man from among them, who would speak to them and advise them',
            'A book from the sky only',
            'An angel living among them',
          ],
        },
        {
          q: 'مَنْ يَقْدِرُ أَنْ يَرَى اللَّهَ وَيَسْمَعَ كَلَامَهُ؟',
          options: [
            'لَا يَقْدِرُ عَلَى ذَلِكَ إِلَّا مَنْ أَرَادَ اللَّهُ',
            'كُلُّ أَحَدٍ يَقْدِرُ عَلَى ذَلِكَ',
            'الْمُلُوكُ فَقَطْ يَقْدِرُونَ عَلَى ذَلِكَ',
          ],
          answer: 0,
          qEn: 'Who is able to see Allah and hear His speech?',
          optionsEn: [
            'No one is able to do that except whom Allah wills',
            'Everyone is able to do that',
            'Only kings are able to do that',
          ],
        },
        {
          q: 'لِمَاذَا يَقْدِرُ كُلُّ أَحَدٍ أَنْ يَرَى الْمُلُوكَ وَيَسْمَعَ كَلَامَهُمْ؟',
          options: [
            'لِأَنَّ الْمُلُوكَ بَشَرٌ كَالْبَشَرِ',
            'لِأَنَّ الْمُلُوكَ لَا يَخَافُونَ أَحَدًا',
            'لِأَنَّ الْمُلُوكَ يُحِبُّونَ النَّاسَ كَثِيرًا',
          ],
          answer: 0,
          qEn: 'Why can anyone see kings and hear their speech?',
          optionsEn: [
            'Because kings are human beings like anyone else',
            'Because kings fear no one',
            'Because kings love people very much',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'إِنَّ اللَّهَ لَا',
        post: 'كُلَّ أَحَدٍ يَقُولُ لَهُ افْعَلْ كَذَا، افْعَلْ كَذَا.',
        en: 'Indeed Allah does not address every single person, saying to him: "Do this, do that."',
        options: ['يُخَاطِبُ', 'خَاطَبَ', 'يُخَاطِبَ', 'مُخَاطِب'],
        answer: 0,
        rationales: [
          'Imperfect indicative -- a general, standing truth, matching لَا + imperfect.',
          'Perfect -- wrong tense; this is a general truth, not one completed action.',
          'Subjunctive -- wrong mood; nothing here calls for the subjunctive.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَا',
        post: 'أَحَدٌ أَنْ يَرَى اللهَ وَيَسْمَعَ كَلَامَهُ وَيُكَلِّمَهُ،',
        en: 'but no one can see Allah, hear His speech, and speak to Him,',
        options: ['يَقْدِرُ', 'قَدَرَ', 'يَقْدِرَ', 'قَادِر'],
        answer: 0,
        rationales: [
          'Imperfect indicative -- a general truth, matching لَا + imperfect.',
          'Perfect -- wrong tense; this is a general, standing truth.',
          'Subjunctive -- wrong mood; this لَا is a plain negator, not أَنْ لَا.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'يَقْدِرُ كُلُّ أَحَدٍ أَنْ يَرَاهُمْ وَيَسْمَعَ',
        post: '،',
        en: 'anyone can see them and hear their speech,',
        options: ['كَلَامَهُمْ', 'كَلَامُهُمْ', 'كَلَامَهُ', 'الْكَلَامَ'],
        answer: 0,
        rationales: [
          'Accusative + 3rd masculine plural possessive -- object of يَسْمَعَ, "their speech."',
          'Nominative -- wrong case; this is the object of a verb.',
          'Wrong pronoun -- "his speech," singular, but the kings (plural) are meant.',
          'Definite without possessive -- wrong; whose speech must be specified.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَقْدِرُ الرَّجُلُ عَلَى ذَلِكَ',
        pre: '',
        post: 'عَلَى ذَلِكَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَقْدِرُ', 'يَقْدِرُ', 'تَقْدِرُ', 'نَقْدِرُ'],
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
        base: 'يَقْدِرُ الرَّجُلُ عَلَى ذَلِكَ',
        pre: '',
        post: 'عَلَى ذَلِكَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَقْدِرُ', 'يَقْدِرُ', 'أَقْدِرُ', 'نَقْدِرُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَقْدِرُ الرَّجُلُ عَلَى ذَلِكَ',
        pre: '',
        post: 'عَلَى ذَلِكَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَقْدِرُونَ', 'يَقْدِرُ', 'تَقْدِرُ', 'نَقْدِرُ'],
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

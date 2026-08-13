// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 18 -- الْحَوَارِيُّونَ يَطْلُبُونَ مَائِدَةً مِنَ
// السَّمَاءِ. Printed pages 262 (bottom, right after ch17's closing line)
// through 263 (top three lines, ending before ch19's heading سُوءُ أَدَبٍ).
// Transcribed by hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md.
//
// This is the prose narration of the disciples' request for a table from
// heaven -- the famous episode behind Surat al-Ma'idah. Unlike chapter 22
// (another agent's, which quotes the Qur'an's own account of this episode
// directly), this chapter is entirely Nadwi's own paraphrase: no Qur'anic
// bracket appears here. The disciples, not matching Isa's own extreme
// patience and asceticism, and having felt some of that hardship
// themselves, ask him to ask Allah to send down food from heaven for them.
//
// Grammar / lexical notes:
//   -- مَائِدَة ("table [spread with food]") is already known (tagged
//      new somewhere earlier in the cross-book corpus per
//      known-lemmas.txt) despite being central to this chapter's very
//      title -- NOT re-listed in newWords here.
//   -- The long coordinated noun-list "الصَّبْرِ وَالْجَلَدِ وَالتَّقَشُّفِ
//      وَالزَّهَادَةِ" (four near-synonyms for patient asceticism) is split
//      2+2 across sentences 001/002 for buildability, mirroring the same
//      technique used on a parallel four-item list in ch17 (اليسر والعسر |
//      الضيق والرخاء) -- no comma exists at that exact point in print, but
//      the split follows the coordinated-noun-list convention already
//      established.
//   -- شَيْء (new) -- surprisingly not in the cross-book known-lemmas list
//      despite being one of the most common nouns in Arabic; tagged new
//      here per the letter of the check (it may simply have never been
//      formally tagged as newWords in an earlier chapter).
//   -- Shared lexicon check (known-lemmas.txt): كَانَ، صَبْر، مِنْ، ذَلِكَ،
//      طَلَبَ، سَيِّد، عِيسَى (this volume's own ch16, mine)، أَنْ، سَأَلَ، اللَّه،
//      أَنزَلَ (يُنْزِلَ is the same lemma)، لِ، مَائِدَة، سَمَاء، أَكَلَ، بَعْدَ
//      are all already taught and are NOT re-listed in newWords here.
//
// 9 new words (مَنْزِلَة، جَلَد، تَقَشُّف، زَهَادَة، أَصَابَ، شَيْء، شَبِعَ، نَعِمَ،
// عَنَاء).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch18',
  title: { ar: 'الْحَوَارِيُّونَ يَطْلُبُونَ مَائِدَةً مِنَ السَّمَاءِ', en: 'The Disciples Ask for a Table from Heaven' },
  newWords: [
    'مَنْزِلَة', 'جَلَد', 'تَقَشُّف', 'زَهَادَة', 'أَصَابَ', 'شَيْء',
    'شَبِعَ', 'نَعِمَ', 'عَنَاء',
  ],
  lemmas: {
    مَنْزِلَة: { gloss: 'rank, station' },
    جَلَد: { gloss: 'fortitude, endurance' },
    تَقَشُّف: { gloss: 'asceticism, austerity' },
    زَهَادَة: { gloss: 'renunciation, asceticism' },
    أَصَابَ: { gloss: 'to befall, afflict' },
    شَيْء: { gloss: 'thing, something' },
    شَبِعَ: { gloss: 'to be full, satisfied (after hunger)' },
    نَعِمَ: { gloss: 'to live in comfort, enjoy blessing' },
    عَنَاء: { gloss: 'hardship, toil' },
  },
  paragraphs: [
    {
      en: "As for the disciples, they were not at Isa's own level of patience, endurance, austerity, and renunciation, and something of that hardship befell them. So they asked our master Isa to ask Allah to send down for them a table from heaven, so that they might eat from it and be satisfied after hunger, and live in comfort after toil.",
      sentences: [
        {
          id: 'qs-v12-c18-001',
          ar: 'أَمَّا الْحَوَارِيُّونَ فَلَمْ يَكُونُوا بِمَنْزِلَتِهِ مِنَ الصَّبْرِ وَالْجَلَدِ',
          en: "As for the disciples, they were not at his level of patience and endurance,",
          tokens: [
            { surface: 'أَمَّا', lemma: 'أَمَّا', pos: 'part', features: 'part', gloss: 'as for' },
            { surface: 'الْحَوَارِيُّونَ', lemma: 'حَوَارِيّ', pos: 'noun', features: 'def.nom.pl', gloss: 'the disciples' },
            { surface: 'فَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'so...not' },
            { surface: 'يَكُونُوا', lemma: 'كَانَ', pos: 'verb', features: 'impf.3mp', gloss: 'to be; were' },
            { surface: 'بِمَنْزِلَتِهِ', lemma: 'مَنْزِلَة', pos: 'noun', features: 'prep+gen+3ms', root: 'ن ز ل', gloss: 'at his rank, level' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الصَّبْرِ', lemma: 'صَبْر', pos: 'noun', features: 'def.gen', gloss: 'patience' },
            { surface: 'وَالْجَلَدِ', lemma: 'جَلَد', pos: 'noun', features: 'conj+def.gen', root: 'ج ل د', gloss: 'and endurance' },
          ],
        },
        {
          id: 'qs-v12-c18-002',
          ar: 'وَالتَّقَشُّفِ وَالزَّهَادَةِ،',
          en: 'or of austerity and renunciation,',
          tokens: [
            { surface: 'وَالتَّقَشُّفِ', lemma: 'تَقَشُّف', pos: 'noun', features: 'conj+def.gen', root: 'ق ش ف', gloss: 'austerity' },
            { surface: 'وَالزَّهَادَةِ', lemma: 'زَهَادَة', pos: 'noun', features: 'conj+def.gen', root: 'ز ه د', gloss: 'and renunciation' },
          ],
        },
        {
          id: 'qs-v12-c18-003',
          ar: 'وَأَصَابَهُمْ شَيْءٌ مِنْ ذَلِكَ،',
          en: 'and something of that (hardship) befell them,',
          tokens: [
            { surface: 'وَأَصَابَهُمْ', lemma: 'أَصَابَ', pos: 'verb', features: 'conj+perf.3ms+3mp', root: 'ص و ب', gloss: 'to befall, afflict; and befell them' },
            { surface: 'شَيْءٌ', lemma: 'شَيْء', pos: 'noun', features: 'indef.nom', gloss: 'something' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v12-c18-004',
          ar: 'فَطَلَبُوا مِنْ سَيِّدِنَا عِيسَى أَنْ يَسْأَلَ اللَّهَ',
          en: 'so they asked our master Isa to ask Allah',
          tokens: [
            { surface: 'فَطَلَبُوا', lemma: 'طَلَبَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to ask, request; so they asked' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'سَيِّدِنَا', lemma: 'سَيِّد', pos: 'noun', features: 'gen+1p', gloss: 'our master' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'gen', gloss: 'Isa (Jesus)' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَسْأَلَ', lemma: 'سَأَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to ask; ask' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v12-c18-005',
          ar: 'أَنْ يُنْزِلَ لَهُمْ مَائِدَةً مِنَ السَّمَاءِ',
          en: 'to send down for them a table from heaven,',
          tokens: [
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يُنْزِلَ', lemma: 'أَنزَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to send down; send down' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'مَائِدَةً', lemma: 'مَائِدَة', pos: 'noun', features: 'indef.acc', gloss: 'a table (spread with food)' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'السَّمَاءِ', lemma: 'سَمَاء', pos: 'noun', features: 'def.gen', gloss: 'the sky, heaven' },
          ],
        },
        {
          id: 'qs-v12-c18-006',
          ar: 'يَأْكُلُونَ مِنْهَا وَيَشْبَعُونَ بَعْدَ جُوعٍ',
          en: 'so that they might eat from it and be full after hunger,',
          tokens: [
            { surface: 'يَأْكُلُونَ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to eat; they eat' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from it' },
            { surface: 'وَيَشْبَعُونَ', lemma: 'شَبِعَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ش ب ع', gloss: 'to be full, satisfied; and are satisfied' },
            { surface: 'بَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'prep', gloss: 'after' },
            { surface: 'جُوعٍ', lemma: 'جُوع', pos: 'noun', features: 'indef.gen', gloss: 'hunger' },
          ],
        },
        {
          id: 'qs-v12-c18-007',
          ar: 'وَيَنْعَمُونَ بَعْدَ عَنَاءٍ.',
          en: 'and live in comfort after toil.',
          tokens: [
            { surface: 'وَيَنْعَمُونَ', lemma: 'نَعِمَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ن ع م', gloss: 'to live in comfort; and live in comfort' },
            { surface: 'بَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'prep', gloss: 'after' },
            { surface: 'عَنَاءٍ', lemma: 'عَنَاء', pos: 'noun', features: 'indef.gen', root: 'ع ن ي', gloss: 'toil, hardship' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا طَلَبَ الْحَوَارِيُّونَ مِنْ سَيِّدِنَا عِيسَى؟',
          options: ['أَنْ يَسْأَلَ اللَّهَ أَنْ يُنْزِلَ لَهُمْ مَائِدَةً مِنَ السَّمَاءِ', 'أَنْ يُعَلِّمَهُمُ التَّوْرَاةَ', 'أَنْ يَبْنِيَ لَهُمْ بَيْتاً'],
          answer: 0,
          qEn: 'What did the disciples ask our master Isa to do?',
          optionsEn: ['To ask Allah to send down a table from heaven for them', 'To teach them the Torah', 'To build them a house'],
        },
        {
          q: 'لِمَاذَا طَلَبَ الْحَوَارِيُّونَ ذَلِكَ؟',
          options: ['لِأَنَّهُمْ لَمْ يَكُونُوا بِمَنْزِلَةِ عِيسَى مِنَ الصَّبْرِ وَأَصَابَهُمْ شَيْءٌ مِنَ الْعَنَاءِ', 'لِأَنَّهُمْ كَانُوا أَغْنِيَاءَ وَيُرِيدُونَ طَعَاماً فَاخِراً', 'لِأَنَّ عِيسَى أَمَرَهُمْ بِذَلِكَ'],
          answer: 0,
          qEn: 'Why did the disciples make this request?',
          optionsEn: ["Because they were not at Isa's level of patience, and some hardship had befallen them", 'Because they were rich and wanted luxurious food', 'Because Isa had ordered them to do so'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَطَلَبُوا مِنْ سَيِّدِنَا عِيسَى أَنْ',
        post: 'اللَّهَ أَنْ يُنْزِلَ لَهُمْ مَائِدَةً.',
        en: 'So they asked our master Isa to ask Allah to send down a table for them.',
        options: ['يَسْأَلَ', 'سَأَلَ', 'يَسْأَلُ', 'اِسْأَلْ'],
        answer: 0,
        rationales: [
          'Subjunctive after أَنْ -- matches the taught pattern.',
          'Perfect -- wrong; a completed request is not meant here.',
          'Indicative imperfect -- wrong mood after أَنْ.',
          'Imperative -- wrong; this is a reported request, not a command.',
        ],
      },
      {
        type: 'cloze',
        pre: 'لَمْ يَكُونُوا بِمَنْزِلَتِهِ مِنَ',
        post: 'وَالْجَلَدِ.',
        en: 'They were not at his level of patience and endurance.',
        options: ['الصَّبْرِ', 'الصَّبْرَ', 'الصَّبْرُ', 'صَبَرَ'],
        answer: 0,
        rationales: [
          'Genitive, definite -- object of the preposition مِنَ, matching the taught pattern.',
          'Accusative -- wrong case; a preposition requires the genitive.',
          'Nominative -- wrong case for the same reason.',
          'Verb -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَصَابَهُمْ',
        post: 'مِنْ ذَلِكَ.',
        en: 'and something of that befell them.',
        options: ['شَيْءٌ', 'شَيْئاً', 'شَيْءٍ', 'الشَّيْءُ'],
        answer: 0,
        rationales: [
          'Nominative, indefinite -- subject of أَصَابَ, matching the taught pattern.',
          'Accusative -- wrong case; the subject of a verbal sentence is nominative.',
          'Genitive -- wrong case for the same reason.',
          'Definite -- wrong; an unspecified "something" is meant.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَأْكُلُونَ مِنَ الْمَائِدَةِ',
        pre: '',
        post: 'مِنَ الْمَائِدَةِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['آكُلُ', 'يَأْكُلُونَ', 'تَأْكُلُ', 'نَأْكُلُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine plural -- they, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَأْكُلُونَ مِنَ الْمَائِدَةِ',
        pre: '',
        post: 'مِنَ الْمَائِدَةِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَأْكُلُ', 'يَأْكُلُونَ', 'تَأْكُلُ', 'آكُلُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine plural -- they, the form already given.',
          '2nd/3rd feminine singular -- wrong person/gender.',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'يَأْكُلُونَ مِنَ الْمَائِدَةِ',
        pre: '',
        post: 'مِنَ الْمَائِدَةِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَأْكُلُ', 'يَأْكُلُونَ', 'آكُلُ', 'نَأْكُلُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine plural -- they, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

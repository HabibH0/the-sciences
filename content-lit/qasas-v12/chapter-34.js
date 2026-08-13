// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ»,
// chapter 34 -- الْقُرْآنُ يَتَحَدَّثُ عَنِ الْقِصَّةِ. Printed pages 270 (bottom,
// right after ch33's closing line and heading) through 271 (top third,
// ending before ch35's heading نُزُولُ عِيسَى قَبْلَ الْقِيَامَةِ further down
// the same page). Transcribed by hand from the scan (vision OCR, 150dpi
// render) against ../CHAPTER-FORMAT.md.
//
// SUURAH/AYAH IDENTIFICATION: the quoted block is Surat an-Nisa 4:156-158
// (the famous crucifixion-denial passage), continuing into the closing
// clause of 4:159's antecedent context is NOT included here -- 159 itself is
// quoted separately in ch35. Identified by the unmistakable wording
// "وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَٰكِن شُبِّهَ لَهُمْ" (157) and "بَل رَّفَعَهُ اللَّهُ
// إِلَيْهِ وَكَانَ اللَّهُ عَزِيزًا حَكِيمًا" (158), cross-checked against the
// muṣḥaf-style ayah-end roundels visible on the scan (156, 157, 158 in
// sequence) and against the continuation onto p.271 into 159's own roundel,
// which is quoted at the start of ch35 -- confirming the numbering.
//
// ORTHOGRAPHY NOTE (flag for review): the printed scan renders this block in
// a dedicated Qur'an/muṣḥaf-style font, which conventionally carries dagger
// alifs (عَلَىٰ، وَلَٰكِن), assimilation shaddas (مِّنْهُ), and small
// waqf/silent-letter marks not used anywhere else in this book's regular
// typesetting. Following the corpus's own established precedent --
// qasas-v3/chapter-14.js's Qur'an quotes (26:111, 26:114-115, 11:30) are all
// transcribed in the book's ordinary modern orthography, with no dagger
// alifs, assimilation shaddas or waqf marks -- this chapter normalizes the
// quoted ayat to that same plain, fully-vowelled modern spelling (tanwin as
// alif+fatha, وَلَكِنْ not وَلَٰكِن, عَلَى not عَلَىٰ, مِنْهُ not مِّنْهُ). The
// underlying wording and case-vowelling is otherwise the standard, universally
// attested text of these ayat. Flagged in case a stricter Uthmani-style
// transcription is wanted instead.
//
// CONTENT: Nadwi introduces the quotation as Allah's own words about the
// Jews, then quotes the ayat verbatim: their disbelief and their monstrous
// slander against Maryam; their claim to have killed the Messiah, ʿĪsā son
// of Maryam, messenger of Allah -- flatly denied ("they did not kill him,
// they did not crucify him, but it was made to appear so to them"); those
// who differ over it are themselves in doubt, following only conjecture, not
// knowledge; they certainly did not kill him -- rather Allah raised him to
// Himself, and Allah is ever Mighty, Wise. A closing paragraph in Nadwi's
// own voice affirms that ʿĪsā is in heaven exactly as Allah wills, that
// Allah is capable of all things, and that his birth, his life and his
// entire affair, start to finish, are a wonder that breaks the ordinary
// pattern of things and confirms Allah's absolute power.
//
// SPLITTING CONVENTION FOR THE QUR'AN BLOCK: per the task brief, Qur'an
// quotations are tokenized and translated exactly like ordinary prose (no
// artificial shortening to keep them "non-buildable" -- that idea from an
// earlier draft of the brief was never adopted). Each ﴿ ﴾-wrapped unit below
// corresponds to one natural pause within the ayat (the muṣḥaf's own ۚ
// stops within the long ayah 157), matching this corpus's house convention
// of splitting long printed sentences at natural clause boundaries. The
// print itself shows the whole 156-158 block under a single continuous
// bracket; here, per this task's explicit instruction ("wrap each
// āyah/clause in ﴿ ﴾ per the chapter-14.js precedent"), each split-out
// clause gets its own ﴿ ﴾ pair so the bracket travels with whichever
// fragment is on screen.
//
// Grammar / lexical notes:
//   -- شَبَّهَ / شُبِّهَ (qs-v12-c34-008, passive شُبِّهَ لَهُمْ, "it was made to
//      resemble/appear so to them") is the pivotal theological term this
//      whole volume-segment turns on -- tagged pass+perf.3ms, matching the
//      documented precedent for passive-perfect forms (قِيلَ,
//      qasas-v3/chapter-01.js).
//   -- قَوْل (qs-v12-c34-002, "a saying, statement") is kept distinct from
//      the already-taught verb قَالَ, per the noun-beside-verb convention
//      used throughout this volume (رِسَالَة/رَسُول-style).
//   -- اتِّبَاع (qs-v12-c34-011) is the verbal noun of the already-taught
//      اِتَّبَعَ, likewise kept as its own lemma.
//   -- لَفِي (qs-v12-c34-010) fuses the emphatic لَـ onto the preposition فِي
//      ("surely in"); tagged as the already-known lemma فِي with features
//      'part+prep', matching the corpus's general fused-proclitic handling
//      for لَـ + preposition/particle (compare qasas-v3/chapter-01.js's
//      لَمَا, لَ + مَا).
//   -- كَانَ, first used in this batch inside the Qur'an quote itself
//      (qs-v12-c34-018's وَكَانَ) and again in Nadwi's closing paragraph, is
//      treated as already-known throughout (see ch31's header comment on the
//      known-lemmas.txt discrepancy) and is not added to newWords.
//   -- عِيسَى، مَرْيَم، الْمَسِيح، يَهُود are all reused from ch32/ch33 (already
//      new earlier in this batch) and are not re-listed here.
//
// 9 new words (قَوْل، تَحَدَّثَ، شَبَّهَ، اتِّبَاع، يَقِين، بَلْ، حَيَاة، وِلَادَة، قَادِر).
//
// No page footnotes (book_note) on p.270/271 for this chapter's own text
// (ch32's footnote, on p.270, belongs to ch32 and is recorded there).
export const CHAPTER = {
  id: 'ch34',
  title: { ar: 'الْقُرْآنُ يَتَحَدَّثُ عَنِ الْقِصَّةِ', en: "The Qur'an Speaks of the Story" },
  newWords: [
    'تَحَدَّثَ', 'شَبَّهَ', 'اتِّبَاع', 'يَقِين', 'بَلْ',
  ],
  lemmas: {
    قَوْل: { gloss: 'a saying, statement' },
    تَحَدَّثَ: { gloss: 'to speak, discourse (about)' },
    شَبَّهَ: { gloss: 'to make resemble, cause to appear like' },
    اتِّبَاع: { gloss: 'following, pursuit (verbal noun)' },
    يَقِين: { gloss: 'certainty' },
    بَلْ: { gloss: 'rather, but in fact' },
    حَيَاة: { gloss: 'life' },
    وِلَادَة: { gloss: 'birth' },
    قَادِر: { gloss: 'capable, able (participle)' },
  },
  paragraphs: [
    {
      en: 'That is His saying, Most High, speaking about the Jews: "And for their disbelief and their saying against Maryam a tremendous slander, and their saying, \'We killed the Messiah, ʿĪsā son of Maryam, the messenger of Allah\' -- but they did not kill him, nor did they crucify him; rather, it was made to appear so to them. Indeed, those who differ concerning it are in doubt about it; they have no knowledge of it, only the pursuit of assumption, and they certainly did not kill him. Rather, Allah raised him to Himself, and Allah is ever Mighty, Wise."',
      sentences: [
        {
          id: 'qs-v12-c34-001',
          ar: 'وَذَلِكَ قَوْلُهُ تَعَالَى وَهُوَ يَتَحَدَّثُ عَنِ الْيَهُودِ:',
          en: 'That is His saying, Most High, speaking about the Jews:',
          tokens: [
            { surface: 'وَذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'conj+dem', gloss: 'and that is' },
            { surface: 'قَوْلُهُ', lemma: 'قَوْل', pos: 'noun', features: 'nom+3ms', root: 'ق و ل', gloss: 'His saying' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; Most High' },
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'as He' },
            { surface: 'يَتَحَدَّثُ', lemma: 'تَحَدَّثَ', pos: 'verb', features: 'impf.3ms', root: 'ح د ث', gloss: 'to speak; speaks' },
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'about' },
            { surface: 'الْيَهُودِ', lemma: 'يَهُود', pos: 'noun', features: 'def.gen.pl', gloss: 'the Jews' },
          ],
        },
        {
          id: 'qs-v12-c34-002',
          ar: '﴿وَبِكُفْرِهِمْ وَقَوْلِهِمْ عَلَى مَرْيَمَ بُهْتَاناً عَظِيماً﴾',
          en: 'And [for] their disbelief and their saying against Maryam a tremendous slander,',
          tokens: [
            { surface: 'وَبِكُفْرِهِمْ', lemma: 'كُفْر', pos: 'noun', features: 'conj+prep+gen+3mp', gloss: 'and for their disbelief' },
            { surface: 'وَقَوْلِهِمْ', lemma: 'قَوْل', pos: 'noun', features: 'conj+gen+3mp', gloss: 'and their saying' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'against' },
            { surface: 'مَرْيَمَ', lemma: 'مَرْيَم', pos: 'proper', features: 'gen', gloss: 'Maryam' },
            { surface: 'بُهْتَاناً', lemma: 'بُهْتَان', pos: 'noun', features: 'indef.acc', gloss: 'a slander' },
            { surface: 'عَظِيماً', lemma: 'عَظِيم', pos: 'adj', features: 'indef.acc', gloss: 'tremendous' },
          ],
        },
        {
          id: 'qs-v12-c34-003',
          ar: '﴿وَقَوْلِهِمْ إِنَّا قَتَلْنَا الْمَسِيحَ عِيسَى ابْنَ مَرْيَمَ رَسُولَ اللَّهِ﴾',
          en: 'and their saying, "We killed the Messiah, ʿĪsā son of Maryam, the messenger of Allah" --',
          tokens: [
            { surface: 'وَقَوْلِهِمْ', lemma: 'قَوْل', pos: 'noun', features: 'conj+gen+3mp', gloss: 'and their saying' },
            { surface: 'إِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'part+1p', gloss: 'indeed we' },
            { surface: 'قَتَلْنَا', lemma: 'قَتَلَ', pos: 'verb', features: 'perf.1p', gloss: 'to kill; we killed' },
            { surface: 'الْمَسِيحَ', lemma: 'مَسِيح', pos: 'proper', features: 'def.acc', gloss: 'the Messiah' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'acc', gloss: 'Isa' },
            { surface: 'ابْنَ', lemma: 'اِبْن', pos: 'noun', features: 'acc.constr', gloss: 'son of' },
            { surface: 'مَرْيَمَ', lemma: 'مَرْيَم', pos: 'proper', features: 'gen', gloss: 'Maryam' },
            { surface: 'رَسُولَ', lemma: 'رَسُول', pos: 'noun', features: 'acc.constr', gloss: 'messenger of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v12-c34-004',
          ar: '﴿وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَكِنْ شُبِّهَ لَهُمْ﴾',
          en: 'but they did not kill him, nor did they crucify him; rather, it was made to appear so to them.',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'but not' },
            { surface: 'قَتَلُوهُ', lemma: 'قَتَلَ', pos: 'verb', features: 'perf.3mp+3ms', gloss: 'to kill; they killed him' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'صَلَبُوهُ', lemma: 'صَلَبَ', pos: 'verb', features: 'perf.3mp+3ms', gloss: 'to crucify; they crucified him' },
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'شُبِّهَ', lemma: 'شَبَّهَ', pos: 'verb', features: 'pass+perf.3ms', root: 'ش ب ه', gloss: 'to make resemble; it was made to appear so' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v12-c34-005',
          ar: '﴿وَإِنَّ الَّذِينَ اخْتَلَفُوا فِيهِ لَفِي شَكٍّ مِنْهُ﴾',
          en: 'Indeed, those who differ concerning it are surely in doubt about it;',
          tokens: [
            { surface: 'وَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'indeed' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'pl.rel', gloss: 'those who' },
            { surface: 'اخْتَلَفُوا', lemma: 'اِخْتَلَفَ', pos: 'verb', features: 'perf.3mp', gloss: 'to differ; differ' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'concerning it' },
            { surface: 'لَفِي', lemma: 'فِي', pos: 'prep', features: 'part+prep', gloss: 'are surely in' },
            { surface: 'شَكٍّ', lemma: 'شَكّ', pos: 'noun', features: 'indef.gen', gloss: 'doubt' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'about it' },
          ],
        },
        {
          id: 'qs-v12-c34-006',
          ar: '﴿مَا لَهُمْ بِهِ مِنْ عِلْمٍ إِلَّا اتِّبَاعَ الظَّنِّ﴾',
          en: 'they have no knowledge of it, only the pursuit of assumption,',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'they have' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'of it' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'any' },
            { surface: 'عِلْمٍ', lemma: 'عِلْم', pos: 'noun', features: 'indef.gen', gloss: 'knowledge' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'اتِّبَاعَ', lemma: 'اتِّبَاع', pos: 'noun', features: 'acc.constr', root: 'ت ب ع', gloss: 'the pursuit of' },
            { surface: 'الظَّنِّ', lemma: 'ظَنّ', pos: 'noun', features: 'def.gen', gloss: 'assumption' },
          ],
        },
        {
          id: 'qs-v12-c34-007',
          ar: '﴿وَمَا قَتَلُوهُ يَقِيناً﴾',
          en: 'and they certainly did not kill him.',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'قَتَلُوهُ', lemma: 'قَتَلَ', pos: 'verb', features: 'perf.3mp+3ms', gloss: 'to kill; they killed him' },
            { surface: 'يَقِيناً', lemma: 'يَقِين', pos: 'noun', features: 'indef.acc', gloss: 'with certainty' },
          ],
        },
        {
          id: 'qs-v12-c34-008',
          ar: '﴿بَلْ رَفَعَهُ اللَّهُ إِلَيْهِ وَكَانَ اللَّهُ عَزِيزاً حَكِيماً﴾.',
          en: 'Rather, Allah raised him to Himself, and Allah is ever Mighty, Wise.',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'part', features: 'part', gloss: 'rather' },
            { surface: 'رَفَعَهُ', lemma: 'رَفَعَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to raise; raised him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to Himself' },
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and is' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَزِيزاً', lemma: 'عَزِيز', pos: 'adj', features: 'indef.acc', gloss: 'Mighty' },
            { surface: 'حَكِيماً', lemma: 'حَكِيم', pos: 'adj', features: 'indef.acc', gloss: 'Wise' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ الْيَهُودُ عَنْ أَنْفُسِهِمْ فِي قَتْلِ الْمَسِيحِ؟',
          options: ['إِنَّا قَتَلْنَا الْمَسِيحَ عِيسَى ابْنَ مَرْيَمَ', 'إِنَّهُمْ لَمْ يَرَوْهُ قَطُّ', 'إِنَّهُمْ سَاعَدُوهُ عَلَى الْهَرَبِ'],
          answer: 0,
          qEn: 'What did the Jews say about themselves regarding the killing of the Messiah?',
          optionsEn: ['That they had killed the Messiah, ʿĪsā son of Maryam', 'That they had never seen him at all', 'That they had helped him escape'],
        },
        {
          q: "مَاذَا يَقُولُ الْقُرْآنُ عَنْ قَتْلِ الْمَسِيحِ وَصَلْبِهِ؟",
          options: ['وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَكِنْ شُبِّهَ لَهُمْ', 'إِنَّهُمْ قَتَلُوهُ حَقّاً', 'إِنَّ الْمَسِيحَ قَتَلَ نَفْسَهُ'],
          answer: 0,
          qEn: "What does the Qur'an say about the killing and crucifixion of the Messiah?",
          optionsEn: ['That they did not kill him nor crucify him, but it was made to appear so to them', 'That they truly did kill him', 'That the Messiah killed himself'],
        },
        {
          q: 'مَاذَا فَعَلَ اللَّهُ بِالْمَسِيحِ بَدَلاً مِنْ أَنْ يُقْتَلَ؟',
          options: ['رَفَعَهُ اللَّهُ إِلَيْهِ', 'تَرَكَهُ يَمُوتُ وَحْدَهُ فِي الصَّحْرَاءِ', 'أَرْسَلَهُ إِلَى بَلَدٍ بَعِيدٍ'],
          answer: 0,
          qEn: 'What did Allah do with the Messiah instead of his being killed?',
          optionsEn: ['Allah raised him to Himself', 'He left him to die alone in the desert', 'He sent him to a distant land'],
        },
      ],
    },
    {
      en: "And he is in heaven, exactly as Allah, Most High, wills, and He is able to do all things. His birth was a wonder, and his life, and his affair, from beginning to end, are a wonder that breaks the ordinary pattern of things, confirming Allah's absolute power.",
      sentences: [
        {
          id: 'qs-v12-c34-009',
          ar: 'وَهُوَ فِي السَّمَاءِ كَمَا يُرِيدُهُ اللَّهُ تَعَالَى،',
          en: 'And he is in heaven, exactly as Allah, Most High, wills,',
          tokens: [
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and he' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'السَّمَاءِ', lemma: 'سَمَاء', pos: 'noun', features: 'def.gen', gloss: 'heaven' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'exactly as' },
            { surface: 'يُرِيدُهُ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to will; wills it' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; Most High' },
          ],
        },
        {
          id: 'qs-v12-c34-010',
          ar: 'وَهُوَ الْقَادِرُ عَلَى كُلِّ شَيْءٍ،',
          en: 'and He is able to do all things,',
          tokens: [
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and He' },
            { surface: 'الْقَادِرُ', lemma: 'قَادِر', pos: 'adj', features: 'def.nom', root: 'ق د ر', gloss: 'the capable, able' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
          ],
        },
        {
          id: 'qs-v12-c34-011',
          ar: 'وَقَدْ كَانَتْ وِلَادَتُهُ عَجَباً،',
          en: 'His birth was a wonder,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'indeed' },
            { surface: 'كَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be; was' },
            { surface: 'وِلَادَتُهُ', lemma: 'وِلَادَة', pos: 'noun', features: 'nom+3ms', root: 'و ل د', gloss: 'his birth' },
            { surface: 'عَجَباً', lemma: 'عَجَب', pos: 'noun', features: 'indef.acc', gloss: 'a wonder' },
          ],
        },
        {
          id: 'qs-v12-c34-012',
          ar: 'وَحَيَاتُهُ،',
          en: 'and his life,',
          tokens: [
            { surface: 'وَحَيَاتُهُ', lemma: 'حَيَاة', pos: 'noun', features: 'conj+nom+3ms', gloss: 'and his life' },
          ],
        },
        {
          id: 'qs-v12-c34-013',
          ar: 'وَأَمْرُهُ مِنْ أَوَّلِهِ إِلَى آخِرِهِ',
          en: 'and his affair, from its beginning to its end,',
          tokens: [
            { surface: 'وَأَمْرُهُ', lemma: 'أَمْر', pos: 'noun', features: 'conj+nom+3ms', gloss: 'and his affair' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أَوَّلِهِ', lemma: 'أَوَّل', pos: 'noun', features: 'gen+3ms', gloss: 'its beginning' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'آخِرِهِ', lemma: 'آخَر', pos: 'noun', features: 'gen+3ms', gloss: 'its end' },
          ],
        },
        {
          id: 'qs-v12-c34-014',
          ar: 'عَجَبٌ خَارِقٌ لِلْعَادَةِ',
          en: 'are a wonder that breaks the ordinary pattern of things,',
          tokens: [
            { surface: 'عَجَبٌ', lemma: 'عَجَب', pos: 'noun', features: 'indef.nom', gloss: 'a wonder' },
            { surface: 'خَارِقٌ', lemma: 'خَارِق', pos: 'adj', features: 'indef.nom', root: 'خ ر ق', gloss: 'breaking, transcending' },
            { surface: 'لِلْعَادَةِ', lemma: 'عَادَة', pos: 'noun', features: 'prep+def.gen', gloss: 'the ordinary pattern' },
          ],
        },
        {
          id: 'qs-v12-c34-015',
          ar: 'مُثْبِتٌ لِلْقُدْرَةِ الْإِلَهِيَّةِ الْمُطْلَقَةِ.',
          en: "confirming Allah's absolute power.",
          tokens: [
            { surface: 'مُثْبِتٌ', lemma: 'مُثْبِت', pos: 'adj', features: 'indef.nom', root: 'ث ب ت', gloss: 'confirming' },
            { surface: 'لِلْقُدْرَةِ', lemma: 'قُدْرَة', pos: 'noun', features: 'prep+def.gen', root: 'ق د ر', gloss: 'the power' },
            { surface: 'الْإِلَهِيَّةِ', lemma: 'إِلَهِيّ', pos: 'adj', features: 'def.gen.f', root: 'أ ل ه', gloss: 'divine' },
            { surface: 'الْمُطْلَقَةِ', lemma: 'مُطْلَق', pos: 'adj', features: 'def.gen.f', root: 'ط ل ق', gloss: 'absolute' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَتْ وِلَادَةُ الْمَسِيحِ وَحَيَاتُهُ بِحَسَبِ الْمُؤَلِّفِ؟',
          options: ['عَجَبٌ خَارِقٌ لِلْعَادَةِ مُثْبِتٌ لِلْقُدْرَةِ الْإِلَهِيَّةِ', 'أَمْرٌ عَادِيٌّ لَا شَأْنَ لَهُ', 'أَمْرٌ مَجْهُولٌ لَا يُعْرَفُ عَنْهُ شَيْءٌ'],
          answer: 0,
          qEn: "How were the Messiah's birth and life, according to the author?",
          optionsEn: ['A wonder breaking the ordinary pattern of things, confirming the divine power', 'An ordinary matter of no significance', 'An unknown matter about which nothing is known'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَمَا',
        post: 'وَمَا صَلَبُوهُ وَلَكِنْ شُبِّهَ لَهُمْ.',
        en: 'And they did not kill him, nor crucify him; rather, it was made to appear so to them.',
        options: ['قَتَلُوهُ', 'قَتَلَهُ', 'يَقْتُلُونَهُ', 'قَاتِلُوهُ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural + 3rd masculine singular object -- "they killed him," matching the parallel صَلَبُوهُ that follows.',
          '3rd masculine singular -- wrong number; the subject here is "they" (the Jews), not "he."',
          'Imperfect -- wrong tense; the ayah denies a specific past claim, not an ongoing action.',
          'Imperative plural -- wrong mood entirely for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'بَلْ',
        post: 'اللَّهُ إِلَيْهِ وَكَانَ اللَّهُ عَزِيزاً حَكِيماً.',
        en: 'Rather, Allah raised him to Himself, and Allah is ever Mighty, Wise.',
        options: ['رَفَعَهُ', 'رَفَعَ', 'يَرْفَعُهُ', 'رَافِعُهُ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular + 3rd masculine singular object -- "He raised him," matching the ayah\'s completed, past-tense claim.',
          'Missing the object pronoun -- wrong; the ayah specifies raising him (ʿĪsā), not raising in general.',
          'Imperfect -- wrong tense; the ayah states a completed divine act, not an ongoing one.',
          'Active participle with attached pronoun -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَقَدْ كَانَتْ وِلَادَتُهُ',
        post: '.',
        en: 'His birth was a wonder.',
        options: ['عَجَباً', 'عَجَبٌ', 'عَجِيباً', 'عَجَبَ'],
        answer: 0,
        rationales: [
          'Indefinite accusative -- predicate of كَانَتْ, matching the taught kāna + accusative-predicate pattern.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative, not nominative.',
          '"amazing" (an adjective) -- wrong part of speech; the text uses the noun عَجَب, not the adjective عَجِيب.',
          'Construct, no case ending shown -- wrong; nothing here forms an idafa.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَتَحَدَّثُ الرَّجُلُ عَنِ الْقِصَّةِ',
        pre: '',
        post: 'عَنِ الْقِصَّةِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَتَحَدَّثُ', 'يَتَحَدَّثُ', 'تَتَحَدَّثُ', 'نَتَحَدَّثُ'],
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
        base: 'يَتَحَدَّثُ الرَّجُلُ عَنِ الْقِصَّةِ',
        pre: '',
        post: 'عَنِ الْقِصَّةِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَتَحَدَّثُ', 'يَتَحَدَّثُ', 'تَتَحَدَّثُ', 'أَتَحَدَّثُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'يَتَحَدَّثُ الرَّجُلُ عَنِ الْقِصَّةِ',
        pre: '',
        post: 'عَنِ الْقِصَّةِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَتَحَدَّثُ', 'يَتَحَدَّثُ', 'أَتَحَدَّثُ', 'نَتَحَدَّثُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

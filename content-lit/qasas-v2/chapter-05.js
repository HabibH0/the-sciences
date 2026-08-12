// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 5 -- أَمَامَ
// يَعْقُوبَ. Printed page 32 (from the divider, after ch4's closing وَقَالُوا
// الآنَ يُصَدِّقُ أَبُونَا) - 33 (ending before ch6's heading يُوسُفُ فِي
// الْبِئْرِ). Transcribed by hand from the scan (vision OCR, 300dpi render,
// plus targeted PIL crops to zoom into the Qur'anic lines) against
// ../CHAPTER-FORMAT.md.
//
// The brothers deceive Yaʿqūb with Yūsuf's blood-stained shirt, but he sees
// through the ruse -- the shirt is untorn -- and bears his grief with
// patience. Three short Qur'anic fragments (Sūrat Yūsuf 12:16, 17 partial,
// 18 partial x2) are split into <=2-token pieces per the house workaround
// (qasas-v1 ch11's header note) so they stay too short to be build-eligible.
//
// Grammar / transcription notes:
//   -- qs-v2-c05-{003,004}: the printed page kerns يَاأَبَانَا (12:17's
//      vocative) with no visible gap, mirroring the Qur'an's own Uthmani
//      convention of writing يا + the following noun as one connected unit.
//      Tokenized here as two ordinary tokens (يَا + أَبَانَا) instead of a
//      new fused-proclitic convention, matching how the identical phrase is
//      already tokenized in this book's narrative dialogue (qasas-v2 ch3,
//      قَالُوا يَا أَبَانَا) -- the validator strips whitespace from `ar`
//      before comparing, so the extra token doesn't affect reconstruction,
//      and it keeps يَا's tagging uniform across the course rather than
//      introducing a mushaf-only special case.
//   -- qs-v2-c05-019: دَمُ كَذِبٌ was spot-checked against the scan (zoomed
//      crop) -- كَذِبٌ carries a dammatan (نصب مرفوع), not a kasratan, so
//      this is NOT the construct دَمُ كَذِبٍ ("blood of a lie") but two
//      indefinite nominatives in apposition ("[it was] blood, a lie" --
//      i.e. fake blood) -- both tagged plain indef.nom. Contrast
//      qs-v2-c05-011's بِدَمٍ كَذِبٍ (12:18), genitive apposition after بِ.
//   -- قَمِيصَهُ / قَمِيصُ (already know قَمِيص from qasas-v2 ch4) reused
//      throughout without re-teaching.
//   -- أَعْقَلَ (qs-v2-c05-015) is the elative of عَاقِل (already taught
//      qasas-v2 ch3) -- a distinct lemma, tagged plain adj/indef.acc since
//      the format has no separate elative atom (same treatment already
//      given to other -أَفْعَل comparatives in this course).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): سَالِم (qasas-v1 ch6),
//      قِصَّة (qasas-v1 ch16), جَمِيل (qasas-v2 ch1), عَرَفَ, نَبِيّ, وَلَد,
//      إِنْسَان, دَم (qasas-v2 ch4), هَذَا, هَذِهِ, أَنَّ, وَضَعَ, إِذَا, بَلْ,
//      تَرَكَ, عِنْدَ are all already taught and NOT re-listed in newWords
//      here.
//
// 13 new words (عِشَاء، بَكَى، اِسْتَبَقَ، مَتَاع، أَعْقَلَ، مَصْبُوغ، جَرَحَ، شَقَّ،
// مَوْضُوع، حُزْن، صَبْر، صَبَرَ، كَذِب).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch5',
  title: { ar: 'أَمَامَ يَعْقُوبَ', en: 'Before Yaʿqūb' },
  newWords: [
    'عِشَاء', 'بَكَى', 'اِسْتَبَقَ', 'مَتَاع', 'أَعْقَلَ', 'مَصْبُوغ', 'جَرَحَ', 'شَقَّ',
    'مَوْضُوع', 'حُزْن', 'صَبْر', 'صَبَرَ', 'كَذِب',
  ],
  lemmas: {
    'عِشَاء': { gloss: 'evening, nightfall' },
    'بَكَى': { gloss: 'to weep, cry' },
    'اِسْتَبَقَ': { gloss: 'to race, compete' },
    'مَتَاع': { gloss: 'belongings, luggage' },
    'أَعْقَلَ': { gloss: 'more/most sensible' },
    'مَصْبُوغ': { gloss: 'dyed' },
    'جَرَحَ': { gloss: 'to wound' },
    'شَقَّ': { gloss: 'to tear, rip' },
    'مَوْضُوع': { gloss: 'fabricated, invented' },
    'حُزْن': { gloss: 'grief, sorrow' },
    'صَبْر': { gloss: 'patience' },
    'صَبَرَ': { gloss: 'to be patient, endure' },
    'كَذِب': { gloss: 'a lie, falsehood' },
  },
  paragraphs: [
    {
      en: '\'They came to their father in the evening, weeping.\' \'They said: O our father, indeed we went racing and left Yūsuf with our belongings,',
      sentences: [
        {
          id: 'qs-v2-c05-001',
          ar: '﴿وَجَاءُو أَبَاهُمْ',
          en: "'They came to their father",
          tokens: [
            { surface: 'وَجَاءُو', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ج ي أ', gloss: 'to come; and they came' },
            { surface: 'أَبَاهُمْ', lemma: 'أَب', pos: 'noun', features: 'acc+3mp', root: 'أ ب و', gloss: 'their father' },
          ],
        },
        {
          id: 'qs-v2-c05-002',
          ar: 'عِشَاءً يَبْكُونَ﴾.',
          en: "in the evening, weeping.'",
          tokens: [
            { surface: 'عِشَاءً', lemma: 'عِشَاء', pos: 'noun', features: 'indef.acc', root: 'ع ش و', gloss: 'evening' },
            { surface: 'يَبْكُونَ', lemma: 'بَكَى', pos: 'verb', features: 'impf.3mp', root: 'ب ك ي', gloss: 'to weep; weeping' },
          ],
        },
        {
          id: 'qs-v2-c05-003',
          ar: '﴿قَالُوا يَا',
          en: "'They said: O",
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
          ],
        },
        {
          id: 'qs-v2-c05-004',
          ar: 'أَبَانَا إِنَّا',
          en: 'our father, indeed we',
          tokens: [
            { surface: 'أَبَانَا', lemma: 'أَب', pos: 'noun', features: 'acc+1p', root: 'أ ب و', gloss: 'our father' },
            { surface: 'إِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'part+1p', gloss: 'indeed we' },
          ],
        },
        {
          id: 'qs-v2-c05-005',
          ar: 'ذَهَبْنَا نَسْتَبِقُ',
          en: 'went racing',
          tokens: [
            { surface: 'ذَهَبْنَا', lemma: 'ذَهَبَ', pos: 'verb', features: 'perf.1p', root: 'ذ ه ب', gloss: 'to go; we went' },
            { surface: 'نَسْتَبِقُ', lemma: 'اِسْتَبَقَ', pos: 'verb', features: 'impf.1p', root: 'س ب ق', gloss: 'to race, compete; we race' },
          ],
        },
        {
          id: 'qs-v2-c05-006',
          ar: 'وَتَرَكْنَا يُوسُفَ',
          en: 'and left Yūsuf',
          tokens: [
            { surface: 'وَتَرَكْنَا', lemma: 'تَرَكَ', pos: 'verb', features: 'conj+perf.1p', root: 'ت ر ك', gloss: 'to leave; and we left' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c05-007',
          ar: 'عِندَ مَتَاعِنَا',
          en: 'with our belongings,',
          tokens: [
            { surface: 'عِندَ', lemma: 'عِنْدَ', pos: 'adv', features: 'adv', gloss: 'near, with' },
            { surface: 'مَتَاعِنَا', lemma: 'مَتَاع', pos: 'noun', features: 'gen+1p', root: 'م ت ع', gloss: 'our belongings' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'and the wolf ate him.\' And they said: \'This is Yūsuf\'s blood!\' \'They brought, upon his shirt, with false blood.\' Their father Yaʿqūb was a prophet,',
      sentences: [
        {
          id: 'qs-v2-c05-008',
          ar: 'فَأَكَلَهُ الذِّئْبُ﴾.',
          en: "and the wolf ate him.'",
          tokens: [
            { surface: 'فَأَكَلَهُ', lemma: 'أَكَلَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'أ ك ل', gloss: 'to eat; so it ate him' },
            { surface: 'الذِّئْبُ', lemma: 'ذِئْب', pos: 'noun', features: 'def.nom', root: 'ذ أ ب', gloss: 'the wolf' },
          ],
        },
        {
          id: 'qs-v2-c05-009',
          ar: 'وَقَالُوا هَذَا دَمُ يُوسُفَ!',
          en: "And they said: 'This is Yūsuf's blood!'",
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ق و ل', gloss: 'to say; and they said' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'دَمُ', lemma: 'دَم', pos: 'noun', features: 'nom.constr', root: 'د م و', gloss: 'blood of' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: "Yūsuf's" },
          ],
        },
        {
          id: 'qs-v2-c05-010',
          ar: '﴿وَجَاءُو عَلَى',
          en: "'They brought, upon",
          tokens: [
            { surface: 'وَجَاءُو', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ج ي أ', gloss: 'to come; and they came (brought)' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
          ],
        },
        {
          id: 'qs-v2-c05-011',
          ar: 'قَمِيصِهِ بِدَمٍ',
          en: 'his shirt, with false',
          tokens: [
            { surface: 'قَمِيصِهِ', lemma: 'قَمِيص', pos: 'noun', features: 'gen+3ms', root: 'ق م ص', gloss: 'his shirt' },
            { surface: 'بِدَمٍ', lemma: 'دَم', pos: 'noun', features: 'prep+indef.gen', root: 'د م و', gloss: 'with blood' },
          ],
        },
        {
          id: 'qs-v2-c05-012',
          ar: 'كَذِبٍ﴾',
          en: "blood.'",
          tokens: [
            { surface: 'كَذِبٍ', lemma: 'كَذِب', pos: 'noun', features: 'indef.gen', root: 'ك ذ ب', gloss: 'a lie, falsehood' },
          ],
        },
        {
          id: 'qs-v2-c05-013',
          ar: 'وَكَانَ أَبُوهُمْ يَعْقُوبُ نَبِيًّا،',
          en: 'Their father Yaʿqūb was a prophet,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'أَبُوهُمْ', lemma: 'أَب', pos: 'noun', features: 'nom+3mp', root: 'أ ب و', gloss: 'their father' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'نَبِيًّا', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.acc', root: 'ن ب أ', gloss: 'a prophet' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'and he was a great elder. and he was more sensible than his children. And Yaʿqūb knew that the wolf, when it eats a person, wounds him and tears his shirt. But Yūsuf\'s shirt was intact, and it was dyed in the blood -- so Yaʿqūb knew it was false blood, and that the story of the wolf was a fabricated story.',
      sentences: [
        {
          id: 'qs-v2-c05-014',
          ar: 'وَكَانَ شَيْخاً كَبِيراً.',
          en: 'and he was a great elder.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'شَيْخاً', lemma: 'شَيْخ', pos: 'noun', features: 'indef.acc', root: 'ش ي خ', gloss: 'an elder, old man' },
            { surface: 'كَبِيراً', lemma: 'كَبِير', pos: 'adj', features: 'indef.acc', root: 'ك ب ر', gloss: 'great, old' },
          ],
        },
        {
          id: 'qs-v2-c05-015',
          ar: 'وَكَانَ أَعْقَلَ مِنْ أَوْلَادِهِ.',
          en: 'and he was more sensible than his children.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'أَعْقَلَ', lemma: 'أَعْقَلَ', pos: 'adj', features: 'indef.acc', root: 'ع ق ل', gloss: 'more/most sensible' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'أَوْلَادِهِ', lemma: 'وَلَد', pos: 'noun', features: 'pl.gen+3ms', root: 'و ل د', gloss: 'his children' },
          ],
        },
        {
          id: 'qs-v2-c05-016',
          ar: 'وَكَانَ يَعْقُوبُ يَعْرِفُ أَنَّ الذِّئْبَ إِذَا أَكَلَ إِنْسَاناً جَرَحَهُ وَشَقَّ قَمِيصَهُ.',
          en: 'And Yaʿqūb knew that the wolf, when it eats a person, wounds him and tears his shirt.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', root: 'ع ر ف', gloss: 'to know; knows' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الذِّئْبَ', lemma: 'ذِئْب', pos: 'noun', features: 'def.acc', root: 'ذ أ ب', gloss: 'the wolf' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'adv', features: 'adv', gloss: 'when, once' },
            { surface: 'أَكَلَ', lemma: 'أَكَلَ', pos: 'verb', features: 'perf.3ms', root: 'أ ك ل', gloss: 'to eat; eats' },
            { surface: 'إِنْسَاناً', lemma: 'إِنْسَان', pos: 'noun', features: 'indef.acc', root: 'أ ن س', gloss: 'a person' },
            { surface: 'جَرَحَهُ', lemma: 'جَرَحَ', pos: 'verb', features: 'perf.3ms+3ms', root: 'ج ر ح', gloss: 'to wound; wounds him' },
            { surface: 'وَشَقَّ', lemma: 'شَقَّ', pos: 'verb', features: 'conj+perf.3ms', root: 'ش ق ق', gloss: 'to tear, rip; and tears' },
            { surface: 'قَمِيصَهُ', lemma: 'قَمِيص', pos: 'noun', features: 'acc+3ms', root: 'ق م ص', gloss: 'his shirt' },
          ],
        },
        {
          id: 'qs-v2-c05-017',
          ar: 'وَكَانَ قَمِيصُ يُوسُفَ سَالِماً.',
          en: "But Yūsuf's shirt was intact,",
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'قَمِيصُ', lemma: 'قَمِيص', pos: 'noun', features: 'nom.constr', root: 'ق م ص', gloss: 'shirt of' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: "Yūsuf's" },
            { surface: 'سَالِماً', lemma: 'سَالِم', pos: 'adj', features: 'indef.acc', root: 'س ل م', gloss: 'sound, unharmed' },
          ],
        },
        {
          id: 'qs-v2-c05-018',
          ar: 'وَكَانَ مَصْبُوغاً فِي الدَّمِ',
          en: 'and it was dyed in the blood --',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'مَصْبُوغاً', lemma: 'مَصْبُوغ', pos: 'adj', features: 'indef.acc', root: 'ص ب غ', gloss: 'dyed' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الدَّمِ', lemma: 'دَم', pos: 'noun', features: 'def.gen', root: 'د م و', gloss: 'the blood' },
          ],
        },
        {
          id: 'qs-v2-c05-019',
          ar: 'فَعَرَفَ يَعْقُوبُ أَنَّهُ دَمُ كَذِبٌ،',
          en: 'so Yaʿqūb knew it was false blood,',
          tokens: [
            { surface: 'فَعَرَفَ', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ر ف', gloss: 'to know; so knew' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that it (was)' },
            { surface: 'دَمُ', lemma: 'دَم', pos: 'noun', features: 'indef.nom', root: 'د م و', gloss: 'blood' },
            { surface: 'كَذِبٌ', lemma: 'كَذِب', pos: 'noun', features: 'indef.nom', root: 'ك ذ ب', gloss: 'a lie, falsehood' },
          ],
        },
        {
          id: 'qs-v2-c05-020',
          ar: 'وَأَنَّ قِصَّةَ الذِّئْبِ قِصَّةٌ مَوْضُوعَةٌ.',
          en: 'and that the story of the wolf was a fabricated story.',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'قِصَّةَ', lemma: 'قِصَّة', pos: 'noun', features: 'acc.constr', root: 'ق ص ص', gloss: 'story of' },
            { surface: 'الذِّئْبِ', lemma: 'ذِئْب', pos: 'noun', features: 'def.gen', root: 'ذ أ ب', gloss: 'the wolf' },
            { surface: 'قِصَّةٌ', lemma: 'قِصَّة', pos: 'noun', features: 'indef.nom', root: 'ق ص ص', gloss: 'a story' },
            { surface: 'مَوْضُوعَةٌ', lemma: 'مَوْضُوع', pos: 'adj', features: 'indef.nom.f', root: 'و ض ع', gloss: 'fabricated, invented' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا خَدَعَ الإِخْوَةُ أَبَاهُمْ؟',
          options: ['بِقَمِيصِ يُوسُفَ مَصْبُوغاً فِي دَمِ كَبْشٍ', 'بِرِسَالَةٍ مُزَوَّرَةٍ مِنْ يُوسُفَ', 'بِشَهَادَةِ رَجُلٍ مِنَ الْغَابَةِ'],
          answer: 0,
          qEn: 'What did the brothers deceive their father with?',
          optionsEn: ["Yūsuf's shirt, dyed in a ram's blood", "A forged letter from Yūsuf", "A man's testimony from the forest"],
        },
        {
          q: 'كَيْفَ عَرَفَ يَعْقُوبُ أَنَّ قِصَّةَ الذِّئْبِ كَذِبٌ؟',
          options: ['لِأَنَّ قَمِيصَ يُوسُفَ كَانَ سَالِماً غَيْرَ مَشْقُوقٍ', 'لِأَنَّهُ رَأَى يُوسُفَ فِي مَنَامِهِ', 'لِأَنَّ أَحَدَ الإِخْوَةِ اعْتَرَفَ لَهُ'],
          answer: 0,
          qEn: 'How did Yaʿqūb know the wolf story was false?',
          optionsEn: ["Because Yūsuf's shirt was intact, not torn", "Because he saw Yūsuf in a dream", "Because one of the brothers confessed to him"],
        },
      ],
    },
    {
      en: 'So he said to his children: \'Rather, this is a story you have fabricated\' -- \'so patience is most fitting.\' And Yaʿqūb grieved intensely over Yūsuf, but he bore it with beautiful patience.',
      sentences: [
        {
          id: 'qs-v2-c05-021',
          ar: 'فَقَالَ لِأَوْلَادِهِ: بَلْ هَذِهِ قِصَّةٌ وَضَعْتُمُوهَا',
          en: "So he said to his children: 'Rather, this is a story you have fabricated' --",
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; so said' },
            { surface: 'لِأَوْلَادِهِ', lemma: 'وَلَد', pos: 'noun', features: 'prep+pl.gen+3ms', root: 'و ل د', gloss: 'to his children' },
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'قِصَّةٌ', lemma: 'قِصَّة', pos: 'noun', features: 'indef.nom', root: 'ق ص ص', gloss: 'a story' },
            { surface: 'وَضَعْتُمُوهَا', lemma: 'وَضَعَ', pos: 'verb', features: 'perf.2mp+3fs', root: 'و ض ع', gloss: 'to put, fabricate; you fabricated it' },
          ],
        },
        {
          id: 'qs-v2-c05-022',
          ar: '﴿فَصَبْرٌ جَمِيلٌ﴾',
          en: "'so patience is most fitting.'",
          tokens: [
            { surface: 'فَصَبْرٌ', lemma: 'صَبْر', pos: 'noun', features: 'conj+indef.nom', root: 'ص ب ر', gloss: 'patience; so patience' },
            { surface: 'جَمِيلٌ', lemma: 'جَمِيل', pos: 'adj', features: 'indef.nom', root: 'ج م ل', gloss: 'beautiful, becoming' },
          ],
        },
        {
          id: 'qs-v2-c05-023',
          ar: 'وَحَزِنَ يَعْقُوبُ عَلَى يُوسُفَ حُزْناً شَدِيداً',
          en: 'And Yaʿqūb grieved intensely over Yūsuf,',
          tokens: [
            { surface: 'وَحَزِنَ', lemma: 'حَزِنَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ح ز ن', gloss: 'to grieve; and grieved' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
            { surface: 'حُزْناً', lemma: 'حُزْن', pos: 'noun', features: 'indef.acc', root: 'ح ز ن', gloss: 'a grief' },
            { surface: 'شَدِيداً', lemma: 'شَدِيد', pos: 'adj', features: 'indef.acc', root: 'ش د د', gloss: 'severe, intense' },
          ],
        },
        {
          id: 'qs-v2-c05-024',
          ar: 'وَلَكِنَّهُ صَبَرَ صَبْراً جَمِيلاً.',
          en: 'but he bore it with beautiful patience.',
          tokens: [
            { surface: 'وَلَكِنَّهُ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part+3ms', gloss: 'but he' },
            { surface: 'صَبَرَ', lemma: 'صَبَرَ', pos: 'verb', features: 'perf.3ms', root: 'ص ب ر', gloss: 'to be patient, endure; endured' },
            { surface: 'صَبْراً', lemma: 'صَبْر', pos: 'noun', features: 'indef.acc', root: 'ص ب ر', gloss: 'a patience' },
            { surface: 'جَمِيلاً', lemma: 'جَمِيل', pos: 'adj', features: 'indef.acc', root: 'ج م ل', gloss: 'beautiful, becoming' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ وَاجَهَ يَعْقُوبُ حُزْنَهُ عَلَى يُوسُفَ؟',
          options: ['صَبَرَ صَبْراً جَمِيلاً', 'رَفَضَ أَنْ يُصَدِّقَ أَنَّ يُوسُفَ فُقِدَ', 'غَضِبَ عَلَى أَوْلَادِهِ وَطَرَدَهُمْ'],
          answer: 0,
          qEn: 'How did Yaʿqūb face his grief over Yūsuf?',
          optionsEn: ['He bore it with beautiful patience', 'He refused to believe Yūsuf was lost', 'He grew angry at his children and expelled them'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ أَبُوهُمْ يَعْقُوبُ',
        post: '،',
        en: 'Their father Yaʿqūb was a prophet,',
        options: ['نَبِيًّا', 'نَبِيٌّ', 'نَبِيَّةً', 'أَنْبِيَاءَ'],
        answer: 0,
        rationales: [
          'Accusative, masculine singular -- the predicate of كَانَ, agreeing with the masculine singular subject.',
          'Nominative -- wrong case; the predicate of كَانَ takes the accusative.',
          "Feminine 'a prophetess' -- wrong gender; the subject أَبُوهُمْ/يَعْقُوبُ is masculine.",
          "Plural 'prophets' -- wrong number; the subject is a single person.",
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ قَمِيصُ يُوسُفَ',
        post: '.',
        en: "Yūsuf's shirt was intact.",
        options: ['سَالِماً', 'سَالِمٌ', 'سَالِمَةً', 'سُلَمَاءُ'],
        answer: 0,
        rationales: [
          'Accusative, masculine -- agrees with قَمِيصُ (masculine) as the accusative predicate of كَانَ.',
          'Nominative -- wrong case; the predicate of كَانَ takes the accusative.',
          "Feminine 'sound' -- wrong gender; قَمِيصُ (a shirt) is masculine.",
          "Broken plural 'sound (pl.)' -- wrong number; قَمِيصُ is singular.",
        ],
      },
      {
        type: 'cloze',
        pre: 'وَحَزِنَ يَعْقُوبُ عَلَى يُوسُفَ',
        post: 'شَدِيداً',
        en: 'And Yaʿqūb grieved an intense grief over Yūsuf',
        options: ['حُزْناً', 'حُزْنٌ', 'حُزْنٍ', 'أَحْزَاناً'],
        answer: 0,
        rationales: [
          "Accusative -- the cognate accusative (المفعول المطلق) intensifying حَزِنَ, matching شَدِيداً's case.",
          'Nominative -- wrong case; a cognate accusative must be accusative.',
          'Genitive -- nothing here governs the genitive.',
          "Plural 'griefs' -- wrong number; the singular cognate accusative is what the verb calls for here.",
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'صَبَرَ صَبْراً جَمِيلاً',
        pre: '',
        post: 'صَبْراً جَمِيلاً',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['صَبَرْتُ', 'صَبَرَ', 'صَبَرْتَ', 'صَبَرْنَا'],
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
        base: 'صَبَرَ صَبْراً جَمِيلاً',
        pre: '',
        post: 'صَبْراً جَمِيلاً',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['صَبَرُوا', 'صَبَرَ', 'صَبَرْتُ', 'صَبَرْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'صَبَرَ صَبْراً جَمِيلاً',
        pre: '',
        post: 'صَبْراً جَمِيلاً',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['صَبَرْنَا', 'صَبَرَ', 'صَبَرْتُ', 'صَبَرُوا'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '3rd masculine plural -- they (m.).',
        ],
      },
    ],
  },
};

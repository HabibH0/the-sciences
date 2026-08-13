// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus), chapter 5 -- ٥ - الْمَجَاعَاتُ ("The Famines"). Pages 171-173:
// starts at the chapter-5 heading box that appears partway down page 171
// (after the tail end of chapter 4's text), continues through page 172 and
// page 173, and ends at the bottom of page 173 -- no heading box appears on
// that page, and page 174 opens with the tail of chapter 4's own Qur'anic
// quote before the chapter-6 heading box, so chapter 5's content is exactly
// the three pages transcribed here. Transcribed by hand from the scan
// (vision OCR) against ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md. One
// correction applied per instruction, overriding the raw transcript: page
// 172's "وَمِصْرُ بِلادٌ مُخْضِبَةٌ خَضْرَاءُ" is corrected to "مُخْصِبَةٌ" (ص not
// ض, "fertile") -- confirmed against the scan image directly.
//
// This chapter has no Qur'anic quotations except the short two-clause
// paraphrase-quote at qs-v7-c05-003 (Q10:87, Yūnus, partial) -- 5 tokens,
// within the build stage's 3-9 token window and carrying a case-marked
// indefinite noun (قِبْلَةً); left as ordinary prose per the project's
// standing instruction (being pulled into the ordinary build/decoy pool is
// an accepted limitation, not engineered around). The transcript's small
// high rounded-zero marks on وَأَجْعَلُوا۟ / وَأَقِيمُوا۟ are Qur'anic-orthography
// wasl-alif markers, kept as transcribed.
//
// `workshop.cloze`/`workshop.shift` are built from this chapter's own
// recycled pattern: عَجِزَ/عَجِزَتْ ("was powerless"), which recurs three
// times across three different subjects/genders in this chapter alone
// (qs-v7-c05-004, twice in -027) and continues into chapter 6's own
// workshop -- a thread of "powerlessness" running through both chapters.
// The بَيْنَ يَحُولُ ("come between") construction (repeated at -004, -005,
// -006, -030) supplies the person-shift drill.
//
// Grammar / lexical notes:
//   -- بَنِي/بَنُو إِسْرَائِيلَ (first appearance in this volume, at
//      qs-v7-c05-002) is tokenized as two tokens per instruction: بَنِي/بَنُو
//      as lemma اِبْن ("son"), pos noun, features pl.constr + case; and
//      إِسْرَائِيلَ as its own new proper-noun lemma, gen.
//   -- هَامَانُ (qs-v7-c05-027) is tagged new here -- checked against
//      chapters 1-4 of this volume (only ch1/ch2 exist so far) and not
//      found there.
//   -- مُخْصِبَةٌ (qs-v7-c05-014) reuses the already-taught verb lemma
//      أَخْصَبَ ("to become fertile", qasas-v2 ch13) rather than minting a
//      separate adjective lemma -- the participle is a transparent,
//      immediate derivation of that verb (contrast ثَمَر/زَرْع below, tagged
//      new despite a cognate verb being known, following the corpus's
//      established precedent of نِعْمَة being tagged new in this volume's
//      own ch1 despite أَنْعَمَ being known -- judgment call, flagged rather
//      than asserted silently).
//   -- ثَمَر ("fruit") and زَرْع ("crop, planting") are tagged new as their
//      own nominal lemmas even though the related verbs أَثْمَرَ (qiraah-v2
//      ch35) and زَرَعَ (qasas-v2 ch13) are already known -- see the ch1 v7
//      نِعْمَة/أَنْعَمَ precedent cited above.
//   -- عَهْدِ (qs-v7-c05-015, "the time/era of Yūsuf") is tagged new here
//      with the "era, time" sense; the same lemma recurs in chapter 6 with
//      the "covenant, pact" sense (نَكَثُوا عَهْدَهُمْ) -- one lemma, two
//      senses noted in its gloss.
//   -- حَالَ/يَحُولُ ("to come between, intervene", qs-v7-c05-004/005/006/030)
//      reuses the already-taught lemma حَالَ (qasas-v3 ch20, glossed there
//      "to come between, intervene" in the identical sense -- confirmed
//      against that chapter's own text, ﴿وَحَالَ بَيْنَهُمَا الْمَوْجُ﴾).
//   -- تِلْكَ is not used in this chapter, but هَذَا/هَذِهِ/ذَلِكَ recur as
//      already-established bedrock demonstratives per this volume's own
//      ch1 header note (lexicon.txt export gap, not genuinely new).
//   -- يَقْدِرُ/وَيَقْدِرُ (qs-v7-c05-001, -022) both reuse the single
//      already-taught lemma قَدَرَ across two distinct senses ("to be
//      able" vs. the Qur'anic-paired "to restrict, straiten" alongside
//      يَبْسُطُ) -- one lemma, sense carried by the token's own gloss.
//
// Shared lexicon check (grepped against the supplied lexicon.txt export,
// plus this volume's own chapter-01.js/chapter-02.js):
// لَكِنَّ، فِرْعَوْن، مَا، كَانَ، قَدَرَ (يَقْدِرُ / وَيَقْدِرُ)، أَنْ، مَنَعَ، أَحَد،
// فَعَلَ (qasas-v7 ch1)، شَاءَ (qasas-v1 ch14)، فِي، بَيْت، أَمَرَ، اللَّه، اِبْن
// (qasas-v1 ch14)، عَلَى، لِسَان (qiraah-v2 ch65)، مُوسَى (qasas-v7 ch1)،
// جَعَلَ (qasas-v1 ch8)، أَقَامَ (qasas-v2 ch12)، صَلاة (qasas-v7 ch1)، بَيْنَ
// (qasas-v3 ch20)، عِبَادَة (qasas-v1 ch8)، عَبْد (qasas-v2 ch9)، مُسْلِم
// (qasas-v1 ch14)، لَمَّا (qasas-v1 ch7)، أَرَادَ (qasas-v1 ch5)، غَفْلَة
// (qiraah-v1 ch26)، نَبَّهَ (qasas-v3 ch21)، إِنَّ، رَضِيَ (qasas-v2 ch15)، لَا،
// كُفْر (qasas-v2 ch22)، أَحَبَّ (qasas-v1 ch14)، فَسَاد (qasas-v3 ch17)، أَرْض
// (qasas-v1 ch13)، بَلِيد (qasas-v1 ch10)، جِدّ (qasas-v2 ch1)، ضَاعَ
// (qiraah-v2 ch37)، حِكْمَة (qasas-v2 ch21)، مَوْعِظَة (qasas-v2 ch9)،
// تَنَبَّهَ (qasas-v3 ch21)، حَتَّى (qasas-v2 ch19)، ضَرَبَ (qasas-v1 ch4/11)،
// مِصْر (qasas-v2 ch7)، بَلَد (qasas-v1 ch11)، أَخْصَبَ (qasas-v2 ch13)،
// أَخْضَر (qasas-v2 ch13)، خَيْر (qasas-v2 ch9)، حَبَّة (qيراah-v2 ch33)، قَدْ
// (qasas-v2 ch1)، عَلِمَ (qasas-v1 ch5)، كَيْفَ (qiraah-v2 ch38)، أَنْجَدَ
// (qiraah-v2 ch50)، بَعِيد (qasas-v2 ch2)، يَوْم (bedrock)، مَجَاعَة (qasas-v2
// ch17)، يُوسُف (bedrock, qasas-v7 ch1 header)، سَلام (qasas-v1 ch6)، شَام
// (qiraah-v2 ch49)، أَهْل (qasas-v2 ch9)، كَنْعَان (qasas-v2 ch18)، هُوَ،
// الَّذِي (qasas-v1 ch9)، أَرْوَى (qiraah-v2 ch46)، سَقَى (qasas-v1 ch9)، ظَنَّ
// (qasas-v2 ch17)، مِفْتَاح (qiraah-v2 ch62)، رِزْق (qasas-v2 ch9)، غَنِيّ
// (qasas-v3 ch11)، عَنْ/عِنْدَ (bedrock -- basic prepositions not in the
// lexicon export, same class of gap as يَوْم/هَذَا/جَاءَ flagged in this
// volume's own ch1 header; NOT added to newWords)، مَطَر (qasas-v2 ch9)،
// شَيْء (qiraah-v2 ch38)، مَاء (qasas-v1 ch12)، ذَهَبَ (qasas-v1 ch11)، لَيْسَ
// (qasas-v1 ch12)، يَد (qasas-v1 ch15)، رَبّ (qasas-v1 ch7)، نَفَعَ (qasas-v1
// ch2)، شَيْطَان (qiraah-v1 ch24)، هَذِهِ (bedrock)، سَنَة (qيراah-v2 ch38)،
// عَجَب (qasas-v3 ch18)، قَبْلُ (qيراah-v2 ch38)، زَمَن (qasas-v2 ch20)، عَمَل
// (qيراah-v2 ch40)، حِيلَة (qيراah-v2 ch56)، هُنَالِكَ (qيراah-v2 ch40)، ذَلِكَ
// (bedrock)، لَمْ (qasas-v2 ch4)، قِبْلَة->new, أَنَّ، اللَّهُمَّ n/a
// are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 22 new words (عَجِزَ، شُرْطَة، طَغَى، أَسْرَفَ، عِنَاد، حِمَار، قِبْلَة، ثَمَر، عَهْد،
// نِيل، زَرْع، مَنْبَع، سَعَادَة، بَسَطَ، غَاضَ، نَقَصَ، هَامَان، عِبْرَة، شُؤْم، مُنْذُ، بَلْ،
// إِسْرَائِيل).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch5',
  title: { ar: 'الْمَجَاعَاتُ', en: 'The Famines' },
  newWords: [
    'عَجِزَ', 'طَغَى', 'أَسْرَفَ', 'عِنَاد', 'حِمَار', 'قِبْلَة', 'ثَمَر',
    'عَهْد', 'نِيل', 'زَرْع', 'مَنْبَع', 'سَعَادَة', 'بَسَطَ', 'غَاضَ', 'نَقَصَ',
    'هَامَان', 'عِبْرَة', 'شُؤْم', 'مُنْذُ', 'بَلْ', ],
  lemmas: {
    'عَجِزَ': { gloss: 'to be powerless, unable' },
    'طَغَى': { gloss: 'to transgress, tyrannize' },
    'أَسْرَفَ': { gloss: 'to be excessive, go to extremes' },
    'عِنَاد': { gloss: 'obstinacy, stubbornness' },
    'حِمَار': { gloss: 'donkey' },
    'قِبْلَة': { gloss: 'direction of prayer, qibla' },
    'ثَمَر': { gloss: 'fruit' },
    'عَهْد': { gloss: 'era, time; covenant, pact' },
    'نِيل': { gloss: 'the Nile' },
    'زَرْع': { gloss: 'crop, planting' },
    'مَنْبَع': { gloss: 'source, spring' },
    'سَعَادَة': { gloss: 'happiness, prosperity' },
    'بَسَطَ': { gloss: 'to extend, spread out' },
    'غَاضَ': { gloss: 'to recede, sink away, dry up' },
    'نَقَصَ': { gloss: 'to decrease, diminish' },
    'هَامَان': { gloss: 'Hāmān' },
    'عِبْرَة': { gloss: 'lesson, moral reflection' },
    'شُؤْم': { gloss: 'ill omen, misfortune' },
    'مُنْذُ': { gloss: 'since' },
    'بَلْ': { gloss: 'rather' },
  },
  paragraphs: [
    {
      en: "But Pharaoh was not able to stop anyone from doing as he pleased in his own house! So Allah commanded the Children of Israel, through the tongue of Mūsā: \"And make your houses a qibla, and establish prayer.\" Pharaoh was powerless, and his police were powerless, to come between the Children of Israel and the worship of Allah! And who can come between a servant and his Lord?! And who can come between a Muslim and the worship of Allah?! When Pharaoh transgressed, and went to excess in heedlessness and obstinacy, Allah wanted to alert him. Indeed, Allah does not approve disbelief for His servants! Indeed, Allah does not love corruption in the earth! Pharaoh was very dull-witted -- wisdom and admonition were lost on him.",
      sentences: [
        {
          id: 'qs-v7-c05-001',
          ar: 'وَلَكِنَّ فِرْعَوْنَ مَا كَانَ يَقْدِرُ أَنْ يَمْنَعَ أَحَداً يَفْعَلُ مَا يَشَاءُ فِي بَيْتِهِ!',
          en: 'But Pharaoh was not able to stop anyone from doing as he pleased in his own house!',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'acc', gloss: 'Pharaoh' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يَقْدِرُ', lemma: 'قَدَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be able; able' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَمْنَعَ', lemma: 'مَنَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to prevent; prevent' },
            { surface: 'أَحَداً', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone' },
            { surface: 'يَفْعَلُ', lemma: 'فَعَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to do; from doing' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَشَاءُ', lemma: 'شَاءَ', pos: 'verb', features: 'impf.3ms', gloss: 'to will, wish; he wishes' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'بَيْتِهِ', lemma: 'بَيْت', pos: 'noun', features: 'gen+3ms', gloss: 'his house' },
          ],
        },
        {
          id: 'qs-v7-c05-002',
          ar: 'فَأَمَرَ اللَّهُ بَنِي إِسْرَائِيلَ عَلَى لِسَانِ مُوسَى:',
          en: 'So Allah commanded the Children of Israel, through the tongue of Mūsā:',
          tokens: [
            { surface: 'فَأَمَرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to command; so commanded' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', root: 'ب ن و', gloss: 'the Children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on, via' },
            { surface: 'لِسَانِ', lemma: 'لِسَان', pos: 'noun', features: 'constr.gen', gloss: 'the tongue of' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
          ],
        },
        {
          // Yūnus 10:87 (partial, paraphrase-embedded).
          id: 'qs-v7-c05-003',
          ar: '﴿وَأَجْعَلُوا۟ بُيُوتَكُمْ قِبْلَةً وَأَقِيمُوا۟ ٱلصَّلَوٰةَ﴾.',
          en: '"And make your houses a qibla, and establish prayer."',
          tokens: [
            { surface: 'وَأَجْعَلُوا۟', lemma: 'جَعَلَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'to make; and make' },
            { surface: 'بُيُوتَكُمْ', lemma: 'بَيْت', pos: 'noun', features: 'pl.acc+2mp', gloss: 'your houses' },
            { surface: 'قِبْلَةً', lemma: 'قِبْلَة', pos: 'noun', features: 'indef.acc', gloss: 'a qibla, direction of prayer' },
            { surface: 'وَأَقِيمُوا۟', lemma: 'أَقَامَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'to establish; and establish' },
            { surface: 'ٱلصَّلَوٰةَ', lemma: 'صَلاة', pos: 'noun', features: 'def.acc', gloss: 'the prayer' },
          ],
        },
        {
          id: 'qs-v7-c05-004',
          ar: 'وَعَجِزَ فِرْعَوْنُ وَعَجِزَتْ شُرْطَتُهُ أَنْ يَحُولُوا بَيْنَ بَنِي إِسْرَائِيلَ وَعِبَادَةِ اللَّهِ!',
          en: 'Pharaoh was powerless, and his police were powerless, to come between the Children of Israel and the worship of Allah!',
          tokens: [
            { surface: 'وَعَجِزَ', lemma: 'عَجِزَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be powerless; and was powerless' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'وَعَجِزَتْ', lemma: 'عَجِزَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be powerless; and was powerless' },
            { surface: 'شُرْطَتُهُ', lemma: 'شُرْطَة', pos: 'noun', features: 'nom+3ms', gloss: 'his police' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَحُولُوا', lemma: 'حَالَ', pos: 'verb', features: 'impf.3mp', root: 'ح و ل', gloss: 'to come between; come between' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'noun', features: 'acc', root: 'ب ي ن', gloss: 'between' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.gen', root: 'ب ن و', gloss: 'the Children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'وَعِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'conj+constr.gen', gloss: 'and the worship of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v7-c05-005',
          ar: 'وَمَنْ يَحُولُ بَيْنَ الْعَبْدِ وَرَبِّهِ؟!',
          en: 'And who can come between a servant and his Lord?!',
          tokens: [
            { surface: 'وَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and who' },
            { surface: 'يَحُولُ', lemma: 'حَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to come between; can come between' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'noun', features: 'acc', gloss: 'between' },
            { surface: 'الْعَبْدِ', lemma: 'عَبْد', pos: 'noun', features: 'def.gen', gloss: 'the servant' },
            { surface: 'وَرَبِّهِ', lemma: 'رَبّ', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his Lord' },
          ],
        },
        {
          id: 'qs-v7-c05-006',
          ar: 'وَمَنْ يَحُولُ بَيْنَ الْمُسْلِمِ وَعِبَادَةِ اللَّهِ؟!',
          en: 'And who can come between a Muslim and the worship of Allah?!',
          tokens: [
            { surface: 'وَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and who' },
            { surface: 'يَحُولُ', lemma: 'حَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to come between; can come between' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'noun', features: 'acc', gloss: 'between' },
            { surface: 'الْمُسْلِمِ', lemma: 'مُسْلِم', pos: 'noun', features: 'def.gen', gloss: 'the Muslim' },
            { surface: 'وَعِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'conj+constr.gen', gloss: 'and the worship of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v7-c05-007',
          ar: 'وَلَمَّا طَغَى فِرْعَوْنُ وَأَسْرَفَ فِي الْغَفْلَةِ وَالْعِنَادِ أَرَادَ اللَّهُ أَنْ يُنَبِّهَهُ.',
          en: 'When Pharaoh transgressed, and went to excess in heedlessness and obstinacy, Allah wanted to alert him.',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'طَغَى', lemma: 'طَغَى', pos: 'verb', features: 'perf.3ms', root: 'ط غ ي', gloss: 'to transgress, tyrannize; transgressed' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'وَأَسْرَفَ', lemma: 'أَسْرَفَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س ر ف', gloss: 'to be excessive; and went to excess' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْغَفْلَةِ', lemma: 'غَفْلَة', pos: 'noun', features: 'def.gen', gloss: 'heedlessness' },
            { surface: 'وَالْعِنَادِ', lemma: 'عِنَاد', pos: 'noun', features: 'conj+def.gen', gloss: 'and obstinacy' },
            { surface: 'أَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms', gloss: 'to want; wanted' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُنَبِّهَهُ', lemma: 'نَبَّهَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to alert; alert him' },
          ],
        },
        {
          id: 'qs-v7-c05-008',
          ar: 'إِنَّ اللَّهَ لا يَرْضَى لِعِبَادِهِ الْكُفْرَ!',
          en: 'Indeed, Allah does not approve disbelief for His servants!',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَرْضَى', lemma: 'رَضِيَ', pos: 'verb', features: 'impf.3ms', gloss: 'to approve, be pleased; approve' },
            { surface: 'لِعِبَادِهِ', lemma: 'عَبْد', pos: 'noun', features: 'prep+pl.gen+3ms', gloss: 'for His servants' },
            { surface: 'الْكُفْرَ', lemma: 'كُفْر', pos: 'noun', features: 'def.acc', gloss: 'disbelief' },
          ],
        },
        {
          id: 'qs-v7-c05-009',
          ar: 'إِنَّ اللَّهَ لا يُحِبُّ الْفَسَادَ فِي الأَرْضِ!',
          en: 'Indeed, Allah does not love corruption in the earth!',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms', gloss: 'to love; loves' },
            { surface: 'الْفَسَادَ', lemma: 'فَسَاد', pos: 'noun', features: 'def.acc', gloss: 'corruption' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
          ],
        },
        {
          id: 'qs-v7-c05-010',
          ar: 'وَكَانَ فِرْعَوْنُ بَلِيداً جِدّاً،',
          en: 'Pharaoh was very dull-witted,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'بَلِيداً', lemma: 'بَلِيد', pos: 'adj', features: 'indef.acc', gloss: 'dull, obtuse' },
            { surface: 'جِدّاً', lemma: 'جِدّ', pos: 'noun', features: 'indef.acc', gloss: 'very much' },
          ],
        },
        {
          id: 'qs-v7-c05-011',
          ar: 'ضَاعَتْ فِيهِ الْحِكْمَةُ وَالْمَوْعِظَةُ.',
          en: 'wisdom and admonition were lost on him.',
          tokens: [
            { surface: 'ضَاعَتْ', lemma: 'ضَاعَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be lost, wasted; were lost' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'on him' },
            { surface: 'الْحِكْمَةُ', lemma: 'حِكْمَة', pos: 'noun', features: 'def.nom', gloss: 'wisdom' },
            { surface: 'وَالْمَوْعِظَةُ', lemma: 'مَوْعِظَة', pos: 'noun', features: 'conj+def.nom', gloss: 'and admonition' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا أَمَرَ اللَّهُ بَنِي إِسْرَائِيلَ عَلَى لِسَانِ مُوسَى؟',
          options: ['أَنْ يَجْعَلُوا بُيُوتَهُمْ قِبْلَةً وَيُقِيمُوا الصَّلاةَ', 'أَنْ يُهَاجِرُوا مِنْ مِصْرَ فَوْراً', 'أَنْ يُقَاتِلُوا فِرْعَوْنَ'],
          answer: 0,
          qEn: 'What did Allah command the Children of Israel, through the tongue of Mūsā?',
          optionsEn: ['To make their houses a qibla and establish prayer', 'To emigrate from Egypt at once', 'To fight Pharaoh'],
        },
        {
          q: 'لِمَاذَا أَرَادَ اللَّهُ أَنْ يُنَبِّهَ فِرْعَوْنَ؟',
          options: ['لِأَنَّهُ طَغَى وَأَسْرَفَ فِي الْغَفْلَةِ وَالْعِنَادِ', 'لِأَنَّهُ كَانَ فَقِيراً', 'لِأَنَّهُ سَافَرَ إِلَى بِلادٍ بَعِيدَةٍ'],
          answer: 0,
          qEn: 'Why did Allah want to alert Pharaoh?',
          optionsEn: ['Because he transgressed and went to excess in heedlessness and obstinacy', 'Because he was poor', 'Because he traveled to distant lands'],
        },
      ],
    },
    {
      en: "And the donkey does not take heed until it is beaten! So Allah wanted to alert him! Egypt is a fertile, green land -- a land of good things and fruits, and a land of grain. You have known how Egypt came to the aid of distant lands in the days of the famine, in the time of Yūsuf, peace be upon him. And how Egypt came to the aid of the people of Syria and the people of Canaan! The Nile is what irrigates the land of Egypt and waters their crops. It is the source of prosperity and good in Egypt. Pharaoh and the people of Egypt used to think that the Nile was the key to provision, and that Egypt, with the Nile, had no need of rain or anything else. But they did not know that with Allah are the keys of provision, and that Allah extends provision to whom He wills, and withholds it, and that the Nile flows by His command and overflows by His command. Then Allah commanded the Nile, and its water sank away and vanished into the ground.",
      sentences: [
        {
          id: 'qs-v7-c05-012',
          ar: 'وَالْحِمَارُ لا يَتَنَبَّهُ حَتَّى يُضْرَبَ!',
          en: 'And the donkey does not take heed until it is beaten!',
          tokens: [
            { surface: 'وَالْحِمَارُ', lemma: 'حِمَار', pos: 'noun', features: 'conj+def.nom', gloss: 'and the donkey' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَتَنَبَّهُ', lemma: 'تَنَبَّهَ', pos: 'verb', features: 'impf.3ms', gloss: 'to take heed, notice; take heed' },
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'conj', features: 'conj', gloss: 'until' },
            { surface: 'يُضْرَبَ', lemma: 'ضَرَبَ', pos: 'verb', features: 'pass+impf.3ms', gloss: 'to strike, beat; it is beaten' },
          ],
        },
        {
          id: 'qs-v7-c05-013',
          ar: 'فَأَرَادَ اللَّهُ أَنْ يُنَبِّهَهُ!',
          en: 'So Allah wanted to alert him!',
          tokens: [
            { surface: 'فَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want; so wanted' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُنَبِّهَهُ', lemma: 'نَبَّهَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to alert; alert him' },
          ],
        },
        {
          id: 'qs-v7-c05-014',
          ar: 'وَمِصْرُ بِلادٌ مُخْصِبَةٌ خَضْرَاءُ، بِلادُ الْخَيْرَاتِ وَالأَثْمَارِ وَبِلادُ الْحُبُوبِ.',
          en: 'Egypt is a fertile, green land -- a land of good things and fruits, and a land of grain.',
          tokens: [
            { surface: 'وَمِصْرُ', lemma: 'مِصْر', pos: 'proper', features: 'conj+nom', gloss: 'and Egypt' },
            { surface: 'بِلادٌ', lemma: 'بَلَد', pos: 'noun', features: 'pl.indef.nom', gloss: 'a land, country' },
            { surface: 'مُخْصِبَةٌ', lemma: 'أَخْصَبَ', pos: 'adj', features: 'indef.nom.f', gloss: 'fertile' },
            { surface: 'خَضْرَاءُ', lemma: 'أَخْضَر', pos: 'adj', features: 'indef.nom.f', gloss: 'green' },
            { surface: 'بِلادُ', lemma: 'بَلَد', pos: 'noun', features: 'pl.constr.nom', gloss: 'a land of' },
            { surface: 'الْخَيْرَاتِ', lemma: 'خَيْر', pos: 'noun', features: 'pl.def.gen', gloss: 'good things' },
            { surface: 'وَالأَثْمَارِ', lemma: 'ثَمَر', pos: 'noun', features: 'conj+pl.def.gen', gloss: 'and fruits' },
            { surface: 'وَبِلادُ', lemma: 'بَلَد', pos: 'noun', features: 'conj+pl.constr.nom', gloss: 'and a land of' },
            { surface: 'الْحُبُوبِ', lemma: 'حَبَّة', pos: 'noun', features: 'pl.def.gen', gloss: 'grain' },
          ],
        },
        {
          id: 'qs-v7-c05-015',
          ar: 'وَقَدْ عَلِمْتُمْ كَيْفَ أَنْجَدَتْ مِصْرُ بِلاداً بَعِيدَةً أَيَّامَ الْمَجَاعَةِ فِي عَهْدِ يُوسُفَ عَلَيْهِ السَّلامُ.',
          en: 'You have known how Egypt came to the aid of distant lands in the days of the famine, in the time of Yūsuf, peace be upon him.',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'عَلِمْتُمْ', lemma: 'عَلِمَ', pos: 'verb', features: 'perf.2mp', gloss: 'to know; you have known' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'part', gloss: 'how' },
            { surface: 'أَنْجَدَتْ', lemma: 'أَنْجَدَ', pos: 'verb', features: 'perf.3fs', gloss: 'to come to the aid of; came to the aid of' },
            { surface: 'مِصْرُ', lemma: 'مِصْر', pos: 'proper', features: 'nom', gloss: 'Egypt' },
            { surface: 'بِلاداً', lemma: 'بَلَد', pos: 'noun', features: 'pl.indef.acc', gloss: 'lands' },
            { surface: 'بَعِيدَةً', lemma: 'بَعِيد', pos: 'adj', features: 'indef.acc.f', gloss: 'distant' },
            { surface: 'أَيَّامَ', lemma: 'يَوْم', pos: 'noun', features: 'pl.acc.constr', gloss: 'the days of' },
            { surface: 'الْمَجَاعَةِ', lemma: 'مَجَاعَة', pos: 'noun', features: 'def.gen', gloss: 'the famine' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'عَهْدِ', lemma: 'عَهْد', pos: 'noun', features: 'constr.gen', gloss: 'the era, time of' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'upon him' },
            { surface: 'السَّلامُ', lemma: 'سَلام', pos: 'noun', features: 'def.nom', gloss: 'peace' },
          ],
        },
        {
          id: 'qs-v7-c05-016',
          ar: 'وَكَيْفَ أَنْجَدَتْ مِصْرُ أَهْلَ الشَّامِ وَأَهْلَ كَنْعَانَ!',
          en: 'And how Egypt came to the aid of the people of Syria and the people of Canaan!',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'conj+part', gloss: 'and how' },
            { surface: 'أَنْجَدَتْ', lemma: 'أَنْجَدَ', pos: 'verb', features: 'perf.3fs', gloss: 'to come to the aid of; came to the aid of' },
            { surface: 'مِصْرُ', lemma: 'مِصْر', pos: 'proper', features: 'nom', gloss: 'Egypt' },
            { surface: 'أَهْلَ', lemma: 'أَهْل', pos: 'noun', features: 'acc.constr', gloss: 'the people of' },
            { surface: 'الشَّامِ', lemma: 'شَام', pos: 'proper', features: 'def.gen', gloss: 'Syria, the Levant' },
            { surface: 'وَأَهْلَ', lemma: 'أَهْل', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the people of' },
            { surface: 'كَنْعَانَ', lemma: 'كَنْعَان', pos: 'proper', features: 'gen', gloss: 'Canaan' },
          ],
        },
        {
          id: 'qs-v7-c05-017',
          ar: 'وَالنِّيلُ هُوَ الَّذِي يُرْوِي أَرْضَ مِصْرَ وَيَسْقِي زُرُوعَهُمْ.',
          en: 'The Nile is what irrigates the land of Egypt and waters their crops.',
          tokens: [
            { surface: 'وَالنِّيلُ', lemma: 'نِيل', pos: 'proper', features: 'conj+def.nom', gloss: 'and the Nile' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'he, it' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'that which' },
            { surface: 'يُرْوِي', lemma: 'أَرْوَى', pos: 'verb', features: 'impf.3ms', gloss: 'to irrigate; irrigates' },
            { surface: 'أَرْضَ', lemma: 'أَرْض', pos: 'noun', features: 'acc.constr', gloss: 'the land of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'وَيَسْقِي', lemma: 'سَقَى', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to water; and waters' },
            { surface: 'زُرُوعَهُمْ', lemma: 'زَرْع', pos: 'noun', features: 'pl.acc+3mp', gloss: 'their crops' },
          ],
        },
        {
          id: 'qs-v7-c05-018',
          ar: 'وَهُوَ مَنْبَعُ السَّعَادَةِ وَالْخَيْرِ فِي مِصْرَ.',
          en: 'It is the source of prosperity and good in Egypt.',
          tokens: [
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and he, it' },
            { surface: 'مَنْبَعُ', lemma: 'مَنْبَع', pos: 'noun', features: 'nom.constr', gloss: 'the source of' },
            { surface: 'السَّعَادَةِ', lemma: 'سَعَادَة', pos: 'noun', features: 'def.gen', gloss: 'happiness, prosperity' },
            { surface: 'وَالْخَيْرِ', lemma: 'خَيْر', pos: 'noun', features: 'conj+def.gen', gloss: 'and the good' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v7-c05-019',
          ar: 'وَكَانَ فِرْعَوْنُ وَأَهْلُ مِصْرَ يَظُنُّونَ أَنَّ النِّيلَ هُوَ مِفْتَاحُ الرِّزْقِ.',
          en: 'Pharaoh and the people of Egypt used to think that the Nile was the key to provision.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'وَأَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'conj+nom.constr', gloss: 'and the people of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'يَظُنُّونَ', lemma: 'ظَنَّ', pos: 'verb', features: 'impf.3mp', gloss: 'to think; thinking' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'النِّيلَ', lemma: 'نِيل', pos: 'proper', features: 'def.acc', gloss: 'the Nile' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'he, it' },
            { surface: 'مِفْتَاحُ', lemma: 'مِفْتَاح', pos: 'noun', features: 'nom.constr', gloss: 'the key of' },
            { surface: 'الرِّزْقِ', lemma: 'رِزْق', pos: 'noun', features: 'def.gen', gloss: 'provision' },
          ],
        },
        {
          id: 'qs-v7-c05-020',
          ar: 'وَأَنَّ مِصْرَ غَنِيَّةٌ بِالنِّيلِ عَنِ الْمَطَرِ وَعَنْ كُلِّ شَيْءٍ.',
          en: 'and that Egypt, with the Nile, had no need of rain or anything else.',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'acc', gloss: 'Egypt' },
            { surface: 'غَنِيَّةٌ', lemma: 'غَنِيّ', pos: 'adj', features: 'indef.nom.f', gloss: 'free of need, rich' },
            { surface: 'بِالنِّيلِ', lemma: 'نِيل', pos: 'proper', features: 'prep+def.gen', gloss: 'by, with the Nile' },
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'of, from' },
            { surface: 'الْمَطَرِ', lemma: 'مَطَر', pos: 'noun', features: 'def.gen', gloss: 'the rain' },
            { surface: 'وَعَنْ', lemma: 'عَنْ', pos: 'prep', features: 'conj+prep', gloss: 'or from' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
          ],
        },
        {
          id: 'qs-v7-c05-021',
          ar: 'وَلا يَعْلَمُونَ أَنَّ اللَّهَ عِنْدَهُ مَفَاتِيحُ الرِّزْقِ.',
          en: 'But they did not know that with Allah are the keys of provision,',
          tokens: [
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَعْلَمُونَ', lemma: 'عَلِمَ', pos: 'verb', features: 'impf.3mp', gloss: 'to know; they know' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'عِنْدَهُ', lemma: 'عِنْدَ', pos: 'prep', features: 'prep+3ms', gloss: 'with him' },
            { surface: 'مَفَاتِيحُ', lemma: 'مِفْتَاح', pos: 'noun', features: 'pl.nom', gloss: 'the keys' },
            { surface: 'الرِّزْقِ', lemma: 'رِزْق', pos: 'noun', features: 'def.gen', gloss: 'of provision' },
          ],
        },
        {
          id: 'qs-v7-c05-022',
          ar: 'وَأَنَّ اللَّهَ يَبْسُطُ الرِّزْقَ لِمَنْ يَشَاءُ وَيَقْدِرُ.',
          en: 'and that Allah extends provision to whom He wills, and withholds it,',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'يَبْسُطُ', lemma: 'بَسَطَ', pos: 'verb', features: 'impf.3ms', gloss: 'to extend, spread out; extends' },
            { surface: 'الرِّزْقَ', lemma: 'رِزْق', pos: 'noun', features: 'def.acc', gloss: 'provision' },
            { surface: 'لِمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'prep+rel', gloss: 'to whom' },
            { surface: 'يَشَاءُ', lemma: 'شَاءَ', pos: 'verb', features: 'impf.3ms', gloss: 'to will, wish; He wills' },
            { surface: 'وَيَقْدِرُ', lemma: 'قَدَرَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to restrict, straiten; and withholds' },
          ],
        },
        {
          id: 'qs-v7-c05-023',
          ar: 'وَأَنَّ النِّيلَ يَجْرِي بِأَمْرِهِ وَيَفِيضُ بِأَمْرِهِ.',
          en: 'and that the Nile flows by His command and overflows by His command.',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'النِّيلَ', lemma: 'نِيل', pos: 'proper', features: 'def.acc', gloss: 'the Nile' },
            { surface: 'يَجْرِي', lemma: 'جَرَى', pos: 'verb', features: 'impf.3ms', gloss: 'to flow, run; flows' },
            { surface: 'بِأَمْرِهِ', lemma: 'أَمْر', pos: 'noun', features: 'prep+gen+3ms', gloss: 'by His command' },
            { surface: 'وَيَفِيضُ', lemma: 'فَاضَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to overflow; and overflows' },
            { surface: 'بِأَمْرِهِ', lemma: 'أَمْر', pos: 'noun', features: 'prep+gen+3ms', gloss: 'by His command' },
          ],
        },
        {
          id: 'qs-v7-c05-024',
          ar: 'وَأَمَرَ اللَّهُ النِّيلَ فَغَاضَ مَاؤُهُ وَذَهَبَ فِي الأَرْضِ.',
          en: 'Then Allah commanded the Nile, and its water sank away and vanished into the ground.',
          tokens: [
            { surface: 'وَأَمَرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to command; and commanded' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'النِّيلَ', lemma: 'نِيل', pos: 'proper', features: 'def.acc', gloss: 'the Nile' },
            { surface: 'فَغَاضَ', lemma: 'غَاضَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to recede, sink away; so sank away' },
            { surface: 'مَاؤُهُ', lemma: 'مَاء', pos: 'noun', features: 'nom+3ms', gloss: 'its water' },
            { surface: 'وَذَهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to go, vanish; and vanished' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'into' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the ground' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ وَصَفَ الْكَاتِبُ أَرْضَ مِصْرَ؟',
          options: ['بِلادٌ مُخْصِبَةٌ خَضْرَاءُ فِيهَا الْخَيْرَاتُ وَالأَثْمَارُ وَالْحُبُوبُ', 'بِلادٌ صَحْرَاوِيَّةٌ لا خَيْرَ فِيهَا', 'بِلادٌ بَارِدَةٌ مُثْلِجَةٌ'],
          answer: 0,
          qEn: 'How did the author describe the land of Egypt?',
          optionsEn: ['A fertile, green land, with good things, fruits, and grain in it', 'A desert land with no good in it', 'A cold, snowy land'],
        },
        {
          q: 'بِمَاذَا كَانَ يَظُنُّ فِرْعَوْنُ وَأَهْلُ مِصْرَ؟',
          options: ['أَنَّ النِّيلَ هُوَ مِفْتَاحُ الرِّزْقِ وَأَنَّهُمْ فِي غِنًى عَنِ اللَّهِ', 'أَنَّ اللَّهَ وَحْدَهُ مَالِكُ الرِّزْقِ', 'أَنَّ الْمَطَرَ هُوَ مَصْدَرُ رِزْقِهِمْ'],
          answer: 0,
          qEn: 'What did Pharaoh and the people of Egypt think?',
          optionsEn: ['That the Nile was the key to provision, and that they had no need of Allah', 'That Allah alone owns provision', 'That rain was the source of their provision'],
        },
      ],
    },
    {
      en: "So what would irrigate the crops of the people of Egypt?! Their fruits diminished, and their grain diminished, and there was famine after famine! Pharaoh was powerless, and Hāmān was powerless, and Pharaoh's police were powerless -- every trick failed them. There, the people of Egypt knew that Pharaoh was not their lord, and that provision was in Allah's hand! But that did not benefit Pharaoh, nor did it benefit the people of Egypt, nor did it awaken them! Satan came between them and the lesson and the reflection. They said: these famines and these years are from the ill omen of Mūsā and his people! What a wonder! Was Mūsā not here before?! Were the Children of Israel not here since a distant time?! Rather, that was from the ill omen of their own deeds! Rather, that was from the ill omen of their disbelief!",
      sentences: [
        {
          id: 'qs-v7-c05-025',
          ar: 'فَمَاذَا يَرْوِي زُرُوعَ أَهْلِ مِصْرَ؟!',
          en: 'So what would irrigate the crops of the people of Egypt?!',
          tokens: [
            { surface: 'فَمَاذَا', lemma: 'مَاذَا', pos: 'part', features: 'conj+part', gloss: 'so what' },
            { surface: 'يَرْوِي', lemma: 'أَرْوَى', pos: 'verb', features: 'impf.3ms', gloss: 'to irrigate; would irrigate' },
            { surface: 'زُرُوعَ', lemma: 'زَرْع', pos: 'noun', features: 'pl.acc.constr', gloss: 'the crops of' },
            { surface: 'أَهْلِ', lemma: 'أَهْل', pos: 'noun', features: 'constr.gen', gloss: 'the people of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v7-c05-026',
          ar: 'نَقَصَتْ ثَمَرَاتُهُمْ وَنَقَصَتْ حُبُوبُهُمْ وَكَانَتْ مَجَاعَةٌ بَعْدَ مَجَاعَةٍ!',
          en: 'Their fruits diminished, and their grain diminished, and there was famine after famine!',
          tokens: [
            { surface: 'نَقَصَتْ', lemma: 'نَقَصَ', pos: 'verb', features: 'perf.3fs', gloss: 'to decrease, diminish; diminished' },
            { surface: 'ثَمَرَاتُهُمْ', lemma: 'ثَمَر', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their fruits' },
            { surface: 'وَنَقَصَتْ', lemma: 'نَقَصَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to decrease; and diminished' },
            { surface: 'حُبُوبُهُمْ', lemma: 'حَبَّة', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their grain' },
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be; and there was' },
            { surface: 'مَجَاعَةٌ', lemma: 'مَجَاعَة', pos: 'noun', features: 'indef.nom', gloss: 'a famine' },
            { surface: 'بَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'prep', gloss: 'after' },
            { surface: 'مَجَاعَةٍ', lemma: 'مَجَاعَة', pos: 'noun', features: 'indef.gen', gloss: 'a famine' },
          ],
        },
        {
          id: 'qs-v7-c05-027',
          ar: 'وَعَجِزَ فِرْعَوْنُ وَعَجِزَ هَامَانُ وَعَجِزَتْ شُرْطَةُ فِرْعَوْنَ عَنْ كُلِّ حِيلَةٍ.',
          en: "Pharaoh was powerless, and Hāmān was powerless, and Pharaoh's police were powerless -- every trick failed them.",
          tokens: [
            { surface: 'وَعَجِزَ', lemma: 'عَجِزَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be powerless; and was powerless' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'وَعَجِزَ', lemma: 'عَجِزَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be powerless; and was powerless' },
            { surface: 'هَامَانُ', lemma: 'هَامَان', pos: 'proper', features: 'nom', gloss: 'Hāmān' },
            { surface: 'وَعَجِزَتْ', lemma: 'عَجِزَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be powerless; and was powerless' },
            { surface: 'شُرْطَةُ', lemma: 'شُرْطَة', pos: 'noun', features: 'nom.constr', gloss: 'the police of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'regarding' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'حِيلَةٍ', lemma: 'حِيلَة', pos: 'noun', features: 'indef.gen', gloss: 'trick, stratagem' },
          ],
        },
        {
          id: 'qs-v7-c05-028',
          ar: 'هُنَالِكَ عَلِمَ أَهْلُ مِصْرَ أَنَّ فِرْعَوْنَ لَيْسَ رَبَّهُمْ، وَأَنَّ الرِّزْقَ بِيَدِ اللَّهِ!',
          en: 'There, the people of Egypt knew that Pharaoh was not their lord, and that provision was in the hand of Allah!',
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'there, at that point' },
            { surface: 'عَلِمَ', lemma: 'عَلِمَ', pos: 'verb', features: 'perf.3ms', gloss: 'to know; knew' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'nom.constr', gloss: 'the people of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'acc', gloss: 'Pharaoh' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'to not be; was not' },
            { surface: 'رَبَّهُمْ', lemma: 'رَبّ', pos: 'noun', features: 'acc+3mp', gloss: 'their lord' },
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'الرِّزْقَ', lemma: 'رِزْق', pos: 'noun', features: 'def.acc', gloss: 'provision' },
            { surface: 'بِيَدِ', lemma: 'يَد', pos: 'noun', features: 'prep+constr.gen', gloss: 'in the hand of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v7-c05-029',
          ar: 'وَلَكِنَّ ذَلِكَ لَمْ يَنْفَعْ فِرْعَوْنَ، وَلَمْ يَنْفَعْ أَهْلَ مِصْرَ وَلَمْ يُنَبِّهْهُمْ!',
          en: 'But that did not benefit Pharaoh, nor did it benefit the people of Egypt, nor did it awaken them!',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَنْفَعْ', lemma: 'نَفَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to benefit; benefit' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'acc', gloss: 'Pharaoh' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'يَنْفَعْ', lemma: 'نَفَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to benefit; benefit' },
            { surface: 'أَهْلَ', lemma: 'أَهْل', pos: 'noun', features: 'acc.constr', gloss: 'the people of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'يُنَبِّهْهُمْ', lemma: 'نَبَّهَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to alert, awaken; awaken them' },
          ],
        },
        {
          id: 'qs-v7-c05-030',
          ar: 'وَحَالَ الشَّيْطَانُ بَيْنَهُمْ وَبَيْنَ الْمَوْعِظَةِ وَالْعِبْرَةِ.',
          en: 'Satan came between them and the lesson and the reflection.',
          tokens: [
            { surface: 'وَحَالَ', lemma: 'حَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to come between; and came between' },
            { surface: 'الشَّيْطَانُ', lemma: 'شَيْطَان', pos: 'noun', features: 'def.nom', gloss: 'Satan' },
            { surface: 'بَيْنَهُمْ', lemma: 'بَيْنَ', pos: 'noun', features: 'acc+3mp', gloss: 'between them' },
            { surface: 'وَبَيْنَ', lemma: 'بَيْنَ', pos: 'noun', features: 'conj+acc', gloss: 'and between' },
            { surface: 'الْمَوْعِظَةِ', lemma: 'مَوْعِظَة', pos: 'noun', features: 'def.gen', gloss: 'the admonition' },
            { surface: 'وَالْعِبْرَةِ', lemma: 'عِبْرَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and the lesson' },
          ],
        },
        {
          id: 'qs-v7-c05-031',
          ar: 'قَالُوا هَذِهِ الْمَجَاعَاتُ وَهَذِهِ السِّنُونَ مِنْ شُؤْمِ مُوسَى وَقَوْمِهِ!',
          en: 'They said: these famines and these years are from the ill omen of Mūsā and his people!',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; they said' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'الْمَجَاعَاتُ', lemma: 'مَجَاعَة', pos: 'noun', features: 'pl.def.nom', gloss: 'the famines' },
            { surface: 'وَهَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'conj+dem.f', gloss: 'and these' },
            { surface: 'السِّنُونَ', lemma: 'سَنَة', pos: 'noun', features: 'pl.def.nom', gloss: 'the years' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'شُؤْمِ', lemma: 'شُؤْم', pos: 'noun', features: 'constr.gen', gloss: 'the ill omen of' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
            { surface: 'وَقَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his people' },
          ],
        },
        {
          id: 'qs-v7-c05-032',
          ar: 'يَا لَلْعَجَبِ!',
          en: 'What a wonder!',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'oh' },
            { surface: 'لَلْعَجَبِ', lemma: 'عَجَب', pos: 'noun', features: 'prep+def.gen', gloss: 'for the wonder (idiom: what a wonder!)' },
          ],
        },
        {
          id: 'qs-v7-c05-033',
          ar: 'أَلَمْ يَكُنْ مُوسَى مِنْ قَبْلُ؟!',
          en: 'Was Mūsā not here before?!',
          tokens: [
            { surface: 'أَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'part+neg', gloss: 'was...not [interrogative]' },
            { surface: 'يَكُنْ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be; was' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَبْلُ', lemma: 'قَبْلُ', pos: 'adv', features: 'adv', gloss: 'before' },
          ],
        },
        {
          id: 'qs-v7-c05-034',
          ar: 'أَلَمْ يَكُنْ بَنُو إِسْرَائِيلَ مُنْذُ زَمَنٍ بَعِيدٍ؟!',
          en: 'Were the Children of Israel not here since a distant time?!',
          tokens: [
            { surface: 'أَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'part+neg', gloss: 'were...not [interrogative]' },
            { surface: 'يَكُنْ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be; were' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', gloss: 'the Children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'مُنْذُ', lemma: 'مُنْذُ', pos: 'prep', features: 'prep', gloss: 'since' },
            { surface: 'زَمَنٍ', lemma: 'زَمَن', pos: 'noun', features: 'indef.gen', gloss: 'a time' },
            { surface: 'بَعِيدٍ', lemma: 'بَعِيد', pos: 'adj', features: 'indef.gen', gloss: 'distant' },
          ],
        },
        {
          id: 'qs-v7-c05-035',
          ar: 'بَلْ ذَلِكَ مِنْ شُؤْمِ أَعْمَالِهِمْ!!',
          en: 'Rather, that was from the ill omen of their own deeds!',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'part', features: 'part', gloss: 'rather' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'شُؤْمِ', lemma: 'شُؤْم', pos: 'noun', features: 'constr.gen', gloss: 'the ill omen of' },
            { surface: 'أَعْمَالِهِمْ', lemma: 'عَمَل', pos: 'noun', features: 'pl.gen+3mp', gloss: 'their deeds' },
          ],
        },
        {
          id: 'qs-v7-c05-036',
          ar: 'بَلْ ذَلِكَ مِنْ شُؤْمِ كُفْرِهِمْ!',
          en: 'Rather, that was from the ill omen of their disbelief!',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'part', features: 'part', gloss: 'rather' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'شُؤْمِ', lemma: 'شُؤْم', pos: 'noun', features: 'constr.gen', gloss: 'the ill omen of' },
            { surface: 'كُفْرِهِمْ', lemma: 'كُفْر', pos: 'noun', features: 'gen+3mp', gloss: 'their disbelief' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لِلزُّرُوعِ وَالْحُبُوبِ بَعْدَ أَنْ غَاضَ مَاءُ النِّيلِ؟',
          options: ['نَقَصَتْ ثَمَرَاتُهُمْ وَحُبُوبُهُمْ وَكَانَتْ مَجَاعَةٌ بَعْدَ مَجَاعَةٍ', 'بَقِيَتِ الزُّرُوعُ كَمَا هِيَ', 'زَادَتِ الزُّرُوعُ أَكْثَرَ مِنَ السَّابِقِ'],
          answer: 0,
          qEn: "What happened to the crops and grain after the Nile's water sank away?",
          optionsEn: ['Their fruits and grain diminished, and there was famine after famine', 'The crops stayed as they were', 'The crops increased beyond what they had been'],
        },
        {
          q: 'بِمَاذَا فَسَّرَ أَهْلُ مِصْرَ الْمَجَاعَاتِ، وَمَا حَقِيقَةُ سَبَبِهَا؟',
          options: ['قَالُوا إِنَّهَا مِنْ شُؤْمِ مُوسَى وَقَوْمِهِ، وَلَكِنَّهَا فِي الْحَقِيقَةِ مِنْ شُؤْمِ كُفْرِهِمْ', 'قَالُوا إِنَّهَا عُقُوبَةٌ عَلَى كُفْرِهِمْ فَتَابُوا فَوْراً', 'لَمْ يَهْتَمُّوا بِسَبَبِهَا إِطْلاقاً'],
          answer: 0,
          qEn: 'How did the people of Egypt explain the famines, and what was their real cause?',
          optionsEn: ['They said it was from the ill omen of Mūsā and his people, but it was really from the ill omen of their own disbelief', 'They said it was punishment for their disbelief, so they repented at once', 'They paid no attention to its cause at all'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: '',
        post: 'فِرْعَوْنُ وَعَجِزَتْ شُرْطَتُهُ أَنْ يَحُولُوا بَيْنَ بَنِي إِسْرَائِيلَ وَعِبَادَةِ اللَّهِ!',
        en: 'Pharaoh was powerless, and his police were powerless, to come between the Children of Israel and the worship of Allah!',
        options: ['وَعَجِزَ', 'وَعَجِزَتْ', 'وَعَجِزُوا', 'وَعَجِزْتُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- agrees with the following فِرْعَوْنُ.',
          '3rd feminine singular -- wrong; the subject here is masculine.',
          '3rd masculine plural -- wrong; the subject is singular.',
          '1st singular -- wrong person entirely.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَعَجِزَ فِرْعَوْنُ وَ',
        post: 'شُرْطَتُهُ أَنْ يَحُولُوا بَيْنَ بَنِي إِسْرَائِيلَ وَعِبَادَةِ اللَّهِ!',
        en: 'Pharaoh was powerless, and his police were powerless, to come between the Children of Israel and the worship of Allah!',
        options: ['عَجِزَتْ', 'عَجِزَ', 'عَجِزُوا', 'عَجِزْنَا'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- agrees with the feminine noun شُرْطَتُهُ.',
          '3rd masculine singular -- wrong gender for شُرْطَة.',
          '3rd masculine plural -- wrong; the subject is singular.',
          '1st plural -- wrong person entirely.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَعَجِزَ فِرْعَوْنُ وَعَجِزَ هَامَانُ وَ',
        post: 'شُرْطَةُ فِرْعَوْنَ عَنْ كُلِّ حِيلَةٍ.',
        en: "Pharaoh was powerless, and Hāmān was powerless, and Pharaoh's police were powerless, before every trick.",
        options: ['عَجِزَتْ', 'عَجِزَ', 'عَجِزُوا', 'عَجِزْتِ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- agrees with the feminine noun شُرْطَة.',
          '3rd masculine singular -- wrong gender.',
          '3rd masculine plural -- wrong; the subject is singular.',
          '2nd feminine singular -- wrong person.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَحُولُ بَيْنَ الْعَبْدِ وَرَبِّهِ',
        pre: '',
        post: 'بَيْنَ الْعَبْدِ وَرَبِّهِ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَحُولُ', 'يَحُولُ', 'أَحُولُ', 'نَحُولُ'],
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
        base: 'يَحُولُ بَيْنَ الْعَبْدِ وَرَبِّهِ',
        pre: '',
        post: 'بَيْنَ الْعَبْدِ وَرَبِّهِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَحُولُ', 'يَحُولُ', 'تَحُولُ', 'أَحُولُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you.',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'يَحُولُ بَيْنَ الْعَبْدِ وَرَبِّهِ',
        pre: '',
        post: 'بَيْنَ الْعَبْدِ وَرَبِّهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَحُولُونَ', 'يَحُولُ', 'تَحُولُ', 'نَحُولُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd/3rd feminine singular -- wrong gender/number.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

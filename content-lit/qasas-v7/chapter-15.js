// قَصَصُ النَّبِيِّينَ, volume 7 (Mūsā vs. Pharaoh through the Exodus), chapter
// 15 -- ١٥ - الْعِجْلُ ("The Calf"). Starts at the chapter-15 heading box that
// appears partway down page 197 (right after chapter 14 finishes -- the
// preceding page-197 material, the seventy men's punishment by the
// thunderbolt and Mūsā's du'ā', belongs to ch14 and is NOT part of this
// chapter), continues through page 198, and ends on page 199 immediately
// before the ch16 heading box "١٦ - الْعِقَابُ" that appears near the bottom
// of that page (chapter-16.js picks up there). Transcribed by hand from the
// scan (vision OCR) against ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md.
//
// Qur'anic quotations, transcribed in full and tokenized normally per the
// current task brief (no fragmentation): al-A'raf 7:138 (qs-v7-c15-008),
// 7:138b (010), 7:140 (014), Ta-Ha 20:88 (018), 20:89 (020), cf. al-A'raf
// 7:148 (021), Ta-Ha 20:90 (023), 20:91 (025). All are long enough (8-15
// tokens) or short-but-left-as-prose per instruction (qs-v7-c15-010,
// three tokens; qs-v7-c15-021 and 025, eight tokens each, each carrying a
// case-marked common noun/participle -- left as ordinary sentences, not
// fragmented, matching qasas-v7 ch1/ch2's own established handling).
// `workshop.cloze`/`workshop.shift` are built only from the chapter's own
// narrative prose (بَنُو إِسْرَائِيلَ subject-of-كَانَ pattern; غَضِبَ مُوسَى
// person-conjugation), never from a Qur'anic quotation.
//
// Grammar / lexical notes:
//   -- بَنُو إِسْرَائِيلَ / بَنِي إِسْرَائِيلَ: tokenized as TWO tokens throughout,
//      following the precedent already established in qasas-v6/chapter-12.js
//      (qs-v6-c12-006): بَنُو/بَنِي under lemma اِبْن (pl.constr + case), then
//      إِسْرَائِيلَ under its own proper-noun lemma (gen, since إِسْرَائِيل is a
//      diptote and its gen is expressed with fatha regardless of the whole
//      phrase's own case). Neither إِسْرَائِيل nor اِبْن is re-listed in
//      newWords -- both are used unflagged from qasas-v6/chapter-03.js
//      onward without ever appearing in a newWords list, so they are
//      treated as already-established (bedrock-adjacent) vocabulary in this
//      corpus, per that chapter's own precedent.
//   -- السَّامِرِيّ (al-Sāmirī) is introduced here (qs-v7-c15-017) as this
//      chapter's one new proper noun, per instruction. Its vocative form
//      later in ch16 drops the article (يَا سَامِرِيُّ) -- noted there.
//   -- عَاكِفِينَ (ch15's own occurrence is in the ﴿يَعْكُفُونَ﴾ verb,
//      qs-v7-c15-008) and its adjectival cousin عَاكِف both reuse the
//      already-taught lemma عَكَفَ/عَاكِف (qiraah-v2 ch51 "to devote oneself
//      to"; ch35 "absorbed") -- confirmed by direct grep against those
//      chapter files, not merely the lexicon.txt export, since the export's
//      unvowelled "عكف"/"عاكف" entries needed verifying they were the same
//      word (they are) and not a homograph.
//   -- عِجْل ("calf") is kept strictly distinct from the unrelated,
//      already-taught verb عَجِلَ/lemma "عجل" ("to hurry", qiraah-v1 ch25,
//      qiraah-v2 ch64) -- confirmed by checking those chapters' own tokens
//      before marking عِجْل new; same root letters, different word.
//   -- فَتَنَ ("to tempt, seduce" -- فُتِنَ/فُتِنتُم/مَفْتُونِينَ throughout this
//      chapter and the next) turns out to already be taught, qasas-v12
//      chapter-23.js's فَفُتِنُوا -- confirmed by direct grep, not present
//      in the lexicon.txt export (which only snapshots vols 1-3 + qiraah).
//      Given how many "obvious" narrative verbs turned out to already be
//      tagged somewhere in vols 4-12 (all actively being transcribed in
//      parallel by other agents), this chapter's newWords list relies on
//      checking the live content-lit/ tree directly rather than only the
//      supplied lexicon.txt snapshot -- flagging that as the more accurate
//      but less-authorized-by-the-brief source; see the shared-lexicon
//      check below for the full list of what that turned up.
//   -- أُشْرِبُوا (qs-v7-c15-024, "their hearts were imbued/soaked" with
//      love of the calf -- the Qur'anic idiom, Form IV passive) is tagged
//      as its own new lemma أَشْرَبَ, kept distinct from the already-taught
//      Form I شَرِبَ ("to drink", qasas-v1 ch4) -- same root, different
//      measure and sense entirely.
//   -- يَقْالُ لَهُ السَّامِرِيُّ (qs-v7-c15-017) reuses the already-taught
//      lemma قَالَ in its passive-imperfect form, matching the precedent
//      set by qs-v3-c01-005's passive-perfect قِيلَ.
//   -- صُمّاً/عُمْيَاناً (qs-v7-c15-019): أَصَمّ ("deaf") is new; its partner
//      أَعْمَى ("blind") turned out to already be taught (qiraah-v2 ch43,
//      confirmed by checking that chapter directly -- its plural
//      الْعُمْيَان is the exact form reused here). Neither plural token
//      carries an m/f gender atom.
//   -- Chapter title «الْعِجْلُ» itself and كُلَّمَا, جُرْأَة (only in ch14
//      material, not this chapter's text), عِقَاب (ch16's own title word)
//      are not relevant here; noted for the record that عِجْل the noun and
//      عِقَاب the noun are unrelated new/known pairs each confirmed
//      separately by direct grep before deciding.
//
// Shared lexicon check (grepped against lexicon.txt AND directly against
// the live content-lit/ tree, since vols 4-12 are being transcribed in
// parallel and are not yet reflected in the lexicon.txt snapshot):
// كَانَ، فِي، مِصْر (qasas-v6 ch1)، مُنْذُ (qasas-v6 ch10)، قَرْن (qasas-v6
// ch21)، الْأَقْبَاط (lemma قِبْطِيّ, qasas-v6 ch11/12)، عَبَدَ، أَشْيَاء، كَثِير،
// رَأَى، ذَلِكَ، عَيْن (qasas-v6 ch6/7/8/10/11/12/14)، زَالَ (qasas-v2 ch21)،
// شِرْك (qasas-v2 ch11)، تَسَرَّبَ (qasas-v12 ch6)، حُبّ (qasas-v2 ch2)، كَمَا،
// الْمَاء، بَيْت، كُلَّمَا (qasas-v5 ch11, qasas-v11 ch4)، وَجَدَ، فُرْصَة
// (qasas-v2 ch10)، الشِّرْك، زَاغَ (qasas-v9 ch4)، قَلْب (qasas-v2 ch4)، فَسَدَ
// (qasas-v6 ch3)، ذَوْق (qasas-v12 ch42)، إِنْ، سَبِيل (qasas-v2 ch20)، لَا،
// اِتَّخَذَ (qiraah-v2 ch36; qasas-v6 ch8, v8 ch9, v12 ch41)، جَازَ (qiraah-v1
// ch27)، الْبَحْر (qasas-v2 ch9)، أَتَى (qasas-v7 ch1)، عَلَى، قَوْم، عَكَفَ/عَاكِف
// (qiraah-v2 ch51/ch35 -- see note above)، أَصْنَام/صَنَم (qasas-v1 ch1)، قَالَ،
// يَا، جَعَلَ (qasas-v1 ch8)، إِلَٰه (qasas-v1 ch5)، غَضِبَ (qasas-v1 ch3/10)،
// جَهِلَ (qasas-v12 ch1)، عَجَب (qasas-v3 ch18)، ظُلْم (qasas-v2 ch20)، إِنَّ،
// اللَّه، قَدْ، أَنْعَمَ (qasas-v2 ch1)، فَضَّلَ (qasas-v12 ch5, v9 ch1)، آتَى
// (qasas-v2 ch11)، مَا، لَمْ، أَحَد (qasas-v1 ch9)، مِنْ، عَالَم (qasas-v1 ch8)،
// هُوَ، سَارَ (qasas-v2 ch24)، غَابَ (qasas-v1 ch7)، عَنْ، يَوْم/أَيَّام (bedrock)،
// شَيْطَان (qasas-v1 ch11)، رَجُل، قَامَ (qasas-v2 ch7)، فَتَنَ (qasas-v12 ch23
// -- see note above)، بِ، هَذَا، إِلى، نَسِيَ (qasas-v2 ch6/12/19, qasas-v6
// ch2/3/21, others)، جَسَد (qasas-v10 ch1)، أَعْمَى (qiraah-v2 ch43 -- see
// note above)، رَجَعَ (qasas-v1 ch5)، إِلَيْهِمْ/إِلَيْنَا (إِلَى)، مَلَكَ (qasas-v12
// ch37, v2 ch22, v4 ch9, v9 ch14)، ضَرّ (qasas-v12 ch37, v4 ch9)، نَفْع
// (qasas-v4 ch9, v12 ch37)، كَلَّمَ (qasas-v2 ch18/20/22, v3 ch9, v4 ch8,
// v6 ch18, v12 ch8/12)، هَدَى (qasas-v1 ch8)، نَهَى (qasas-v6 ch1/20, v8
// ch7)، هَارُون (qasas-v6 ch19)، اِجْتَهَدَ (qasas-v2 ch22)، إِنَّمَا، رَبّ، لَنْ
// (qasas-v2 ch19)، رَحْمَن (qasas-v1 ch11)، اتَّبَعَ (qasas-v2 ch11)، أَطَاعَ
// (qasas-v2 ch10)، أَمْر (qasas-v2 ch2)، لَكِنَّ (qasas-v1 ch6/14)، سِحْر
// (qasas-v6 ch22/25, v9 ch15)، حَتَّى، مُوسَى/فِرْعَوْن (qasas-v7 ch1)
// are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 18 new words (عِجْل، خُوَار، كَرَاهَة، وَاهِن، عَتِيق، اِنْحَدَرَ، حَدُور، رُشْد،
// غَيّ، أَبْغَى، طُور، صَيْد، فَرِيسَة، السَّامِرِيّ، خَرَّ، أَصَمّ، أَشْرَبَ، بَرِحَ) --
// unusually high, but this chapter is genuinely vocabulary-dense (the
// idol-worship simile, the calf's construction, and two more Qur'anic
// quotations of the golden-calf narrative).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch15',
  title: { ar: 'الْعِجْلُ', en: 'The Calf' },
  newWords: [
    'عِجْل', 'خُوَار', 'كَرَاهَة', 'وَاهِن', 'عَتِيق', 'اِنْحَدَرَ', 'حَدُور', 'رُشْد',
    'غَيّ', 'أَبْغَى', 'صَيْد', 'فَرِيسَة', 'السَّامِرِيّ', 'أَصَمّ',
    'أَشْرَبَ', 'بَرِحَ',
  ],
  lemmas: {
    'عِجْل': { gloss: 'calf' },
    'خُوَار': { gloss: 'lowing, bellowing (the sound cattle make)' },
    'كَرَاهَة': { gloss: 'aversion, dislike, hatred' },
    'وَاهِن': { gloss: 'weak, frail, decrepit' },
    'عَتِيق': { gloss: 'old, ancient' },
    'اِنْحَدَرَ': { gloss: 'to descend, slide down' },
    'حَدُور': { gloss: 'a downward slope, incline' },
    'رُشْد': { gloss: 'right guidance, rectitude' },
    'غَيّ': { gloss: 'error, misguidance' },
    'أَبْغَى': { gloss: 'to seek, desire (form IV)' },
    'صَيْد': { gloss: 'prey, quarry, game' },
    'فَرِيسَة': { gloss: 'prey, victim' },
    'السَّامِرِيّ': { gloss: 'al-Sāmirī (the Samaritan)' },
    'أَصَمّ': { gloss: 'deaf' },
    'أَشْرَبَ': { gloss: 'to imbue, saturate, soak in (with love of)' },
    'بَرِحَ': { gloss: 'to cease, stop (usually negated: لَنْ نَبْرَحَ "we will not cease")' },
  },
  paragraphs: [
    {
      en: "For generations, the Children of Israel had lived among the idol-worshiping Copts in Egypt, seeing this with their own eyes. Little by little their aversion to shirk faded, and love of it seeped into them just as water seeps into an old, decrepit house; whenever they found the chance, they slid toward shirk just as water slides down a slope. Their hearts swerved and their taste corrupted -- if they saw the path of right guidance they would not take it, but if they saw the path of error, they would take it.",
      sentences: [
        {
          id: 'qs-v7-c15-001',
          ar: 'وَكَانَ بَنُو إِسْرَائِيلَ يَعِيشُونَ مَعَ الْمُشْرِكِينَ فِي مِصْرَ مُنْذُ قُرُونٍ.',
          en: 'The Children of Israel had lived among the idol-worshipers in Egypt for generations.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'يَعِيشُونَ', lemma: 'عَاشَ', pos: 'verb', features: 'impf.3mp', root: 'ع ي ش', gloss: 'to live; living' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'with, among' },
            { surface: 'الْمُشْرِكِينَ', lemma: 'مُشْرِك', pos: 'noun', features: 'pl.def.gen', gloss: 'the idol-worshipers' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'مُنْذُ', lemma: 'مُنْذُ', pos: 'prep', features: 'prep', root: 'م ن ذ', gloss: 'since, for' },
            { surface: 'قُرُونٍ', lemma: 'قَرْن', pos: 'noun', features: 'pl.indef.gen', gloss: 'generations, centuries' },
          ],
        },
        {
          id: 'qs-v7-c15-002',
          ar: 'وَكَانَ الْأَقْبَاطُ يَعْبُدُونَ أَشْيَاءَ كَثِيرَةً فِي مِصْرَ وَبَنُو إِسْرَائِيلَ يَرَوْنَ ذَلِكَ بِعُيُونِهِمْ.',
          en: 'The Copts worshiped many things in Egypt, and the Children of Israel saw it with their own eyes.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'الْأَقْبَاطُ', lemma: 'قِبْطِيّ', pos: 'noun', features: 'pl.def.nom', gloss: 'the Copts' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to worship; worshiping' },
            { surface: 'أَشْيَاءَ', lemma: 'شَيْء', pos: 'noun', features: 'pl.indef.acc', gloss: 'things' },
            { surface: 'كَثِيرَةً', lemma: 'كَثِير', pos: 'adj', features: 'indef.acc.f', gloss: 'many' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'وَبَنُو', lemma: 'اِبْن', pos: 'noun', features: 'conj+pl.constr.nom', root: 'ب ن و', gloss: 'and the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'يَرَوْنَ', lemma: 'رَأَى', pos: 'verb', features: 'impf.3mp', root: 'ر أ ي', gloss: 'to see; seeing' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'بِعُيُونِهِمْ', lemma: 'عَيْن', pos: 'noun', features: 'prep+pl.gen+3mp', gloss: 'with their own eyes' },
          ],
        },
        {
          id: 'qs-v7-c15-003',
          ar: 'وَزَالَتْ مِنْهُمْ كَرَاهَةُ الشِّرْكِ وَتَسَرَّبَ إِلَيْهِمْ حُبُّهُ كَمَا يَتَسَرَّبُ الْمَاءُ إِلى بَيْتٍ وَاهِنٍ عَتِيقٍ.',
          en: 'Their aversion to shirk faded from them, and love of it seeped into them just as water seeps into an old, decrepit house.',
          tokens: [
            { surface: 'وَزَالَتْ', lemma: 'زَالَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to cease, fade away; and faded' },
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'from them' },
            { surface: 'كَرَاهَةُ', lemma: 'كَرَاهَة', pos: 'noun', features: 'constr.nom', root: 'ك ر ه', gloss: 'the aversion to' },
            { surface: 'الشِّرْكِ', lemma: 'شِرْك', pos: 'noun', features: 'def.gen', gloss: 'shirk, idolatry' },
            { surface: 'وَتَسَرَّبَ', lemma: 'تَسَرَّبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س ر ب', gloss: 'to seep in, infiltrate; and seeped in' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'حُبُّهُ', lemma: 'حُبّ', pos: 'noun', features: 'nom+3ms', gloss: 'love of it' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'يَتَسَرَّبُ', lemma: 'تَسَرَّبَ', pos: 'verb', features: 'impf.3ms', root: 'س ر ب', gloss: 'to seep in; seeps in' },
            { surface: 'الْمَاءُ', lemma: 'مَاء', pos: 'noun', features: 'def.nom', gloss: 'the water' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'into' },
            { surface: 'بَيْتٍ', lemma: 'بَيْت', pos: 'noun', features: 'indef.gen', gloss: 'a house' },
            { surface: 'وَاهِنٍ', lemma: 'وَاهِن', pos: 'adj', features: 'indef.gen', root: 'و ه ن', gloss: 'weak, frail' },
            { surface: 'عَتِيقٍ', lemma: 'عَتِيق', pos: 'adj', features: 'indef.gen', root: 'ع ت ق', gloss: 'old, decrepit' },
          ],
        },
        {
          id: 'qs-v7-c15-004',
          ar: 'وَكَانُوا كُلَّمَا وَجَدُوا فُرْصَةً انْحَدَرُوا إِلى الشِّرْكِ كَمَا يَنْحَدِرُ الْمَاءُ إِلى الْحَدُورِ.',
          en: 'Whenever they found the chance, they slid toward shirk just as water slides down a slope.',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and were' },
            { surface: 'كُلَّمَا', lemma: 'كُلَّمَا', pos: 'conj', features: 'conj', gloss: 'whenever' },
            { surface: 'وَجَدُوا', lemma: 'وَجَدَ', pos: 'verb', features: 'perf.3mp', gloss: 'to find; they found' },
            { surface: 'فُرْصَةً', lemma: 'فُرْصَة', pos: 'noun', features: 'indef.acc', gloss: 'a chance, opportunity' },
            { surface: 'انْحَدَرُوا', lemma: 'اِنْحَدَرَ', pos: 'verb', features: 'perf.3mp', root: 'ح د ر', gloss: 'to descend, slide down; they slid' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'toward' },
            { surface: 'الشِّرْكِ', lemma: 'شِرْك', pos: 'noun', features: 'def.gen', gloss: 'shirk' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'يَنْحَدِرُ', lemma: 'اِنْحَدَرَ', pos: 'verb', features: 'impf.3ms', root: 'ح د ر', gloss: 'to slide down; slides down' },
            { surface: 'الْمَاءُ', lemma: 'مَاء', pos: 'noun', features: 'def.nom', gloss: 'the water' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْحَدُورِ', lemma: 'حَدُور', pos: 'noun', features: 'def.gen', root: 'ح د ر', gloss: 'the slope' },
          ],
        },
        {
          id: 'qs-v7-c15-005',
          ar: 'وَزَاغَتْ قُلُوبُهُمْ وَفَسَدَ ذَوْقُهُمْ فَإِنْ يَرَوْا سَبِيلَ الرُّشْدِ لا يَتَّخِذُوهُ سَبِيلاً،',
          en: 'Their hearts swerved and their taste corrupted -- if they saw the path of right guidance, they would not take it,',
          tokens: [
            { surface: 'وَزَاغَتْ', lemma: 'زَاغَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ز ي غ', gloss: 'to swerve, deviate; and swerved' },
            { surface: 'قُلُوبُهُمْ', lemma: 'قَلْب', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their hearts' },
            { surface: 'وَفَسَدَ', lemma: 'فَسَدَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to become corrupt; and corrupted' },
            { surface: 'ذَوْقُهُمْ', lemma: 'ذَوْق', pos: 'noun', features: 'nom+3mp', gloss: 'their taste' },
            { surface: 'فَإِنْ', lemma: 'إِنْ', pos: 'conj', features: 'conj+conj', gloss: 'so if' },
            { surface: 'يَرَوْا', lemma: 'رَأَى', pos: 'verb', features: 'impf.3mp', root: 'ر أ ي', gloss: 'to see; they see' },
            { surface: 'سَبِيلَ', lemma: 'سَبِيل', pos: 'noun', features: 'acc.constr', gloss: 'the path of' },
            { surface: 'الرُّشْدِ', lemma: 'رُشْد', pos: 'noun', features: 'def.gen', root: 'ر ش د', gloss: 'right guidance' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَتَّخِذُوهُ', lemma: 'اِتَّخَذَ', pos: 'verb', features: 'impf.3mp+3ms', gloss: 'to take, adopt; they take it' },
            { surface: 'سَبِيلاً', lemma: 'سَبِيل', pos: 'noun', features: 'indef.acc', gloss: 'as a path' },
          ],
        },
        {
          id: 'qs-v7-c15-006',
          ar: 'وَإِنْ يَرَوْا سَبِيلَ الْغَيِّ يَتَّخِذُوهُ سَبِيلاً.',
          en: 'but if they saw the path of error, they would take it.',
          tokens: [
            { surface: 'وَإِنْ', lemma: 'إِنْ', pos: 'conj', features: 'conj+conj', gloss: 'and if' },
            { surface: 'يَرَوْا', lemma: 'رَأَى', pos: 'verb', features: 'impf.3mp', root: 'ر أ ي', gloss: 'to see; they see' },
            { surface: 'سَبِيلَ', lemma: 'سَبِيل', pos: 'noun', features: 'acc.constr', gloss: 'the path of' },
            { surface: 'الْغَيِّ', lemma: 'غَيّ', pos: 'noun', features: 'def.gen', root: 'غ و ي', gloss: 'error, misguidance' },
            { surface: 'يَتَّخِذُوهُ', lemma: 'اِتَّخَذَ', pos: 'verb', features: 'impf.3mp+3ms', gloss: 'to take, adopt; they take it' },
            { surface: 'سَبِيلاً', lemma: 'سَبِيل', pos: 'noun', features: 'indef.acc', gloss: 'as a path' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لِقُلُوبِ بَنِي إِسْرَائِيلَ بَعْدَ أَنْ عَاشُوا مَعَ الْأَقْبَاطِ زَمَناً طَوِيلاً؟',
          options: ['زَاغَتْ قُلُوبُهُمْ وَتَسَرَّبَ إِلَيْهِمْ حُبُّ الشِّرْكِ', 'ازْدَادُوا تَمَسُّكاً بِتَوْحِيدِ اللَّهِ', 'لَمْ يَتَأَثَّرُوا بِشَيْءٍ مِمَّا رَأَوْهُ'],
          answer: 0,
          qEn: 'What happened to the hearts of the Children of Israel after living among the Copts a long time?',
          optionsEn: ['Their hearts swerved, and love of shirk seeped into them', 'They grew even firmer in monotheism', 'They were not affected by anything they saw'],
        },
        {
          q: 'بِمَ شُبِّهَ تَسَرُّبُ حُبِّ الشِّرْكِ إِلى قُلُوبِهِمْ؟',
          options: ['بِتَسَرُّبِ الْمَاءِ إِلى بَيْتٍ وَاهِنٍ عَتِيقٍ', 'بِانْتِشَارِ النَّارِ فِي الْقَشِّ', 'بِسُقُوطِ الْمَطَرِ عَلَى الْأَرْضِ'],
          answer: 0,
          qEn: 'What was the seeping of love of shirk into their hearts compared to?',
          optionsEn: ['To water seeping into an old, decrepit house', 'To fire spreading through straw', 'To rain falling on the ground'],
        },
      ],
    },
    {
      en: "When they crossed the sea, they came upon a people devoted to idols of their own, and said: 'O Mūsā, make for us a god just as they have gods!' Mūsā grew angry and said: 'You are truly an ignorant people.' What wonder! What injustice! Allah had blessed you, favored you, and given you what He gave no other people in all the worlds -- 'Should I seek a god for you other than Allah, when He has favored you above all the worlds?'",
      sentences: [
        {
          id: 'qs-v7-c15-007',
          ar: 'جَازُوا الْبَحْرَ:',
          en: 'They crossed the sea:',
          tokens: [
            { surface: 'جَازُوا', lemma: 'جَازَ', pos: 'verb', features: 'perf.3mp', gloss: 'to cross; they crossed' },
            { surface: 'الْبَحْرَ', lemma: 'بَحْر', pos: 'noun', features: 'def.acc', gloss: 'the sea' },
          ],
        },
        {
          // al-A'raf 7:138a.
          id: 'qs-v7-c15-008',
          ar: '﴿فَأَتَوْا۟ عَلَىٰ قَوْمٍ يَعْكُفُونَ عَلَىٰٓ أَصْنَامٍ لَّهُمْ قَالُوا۟ يَـٰمُوسَى ٱجْعَل لَّنَآ إِلَـٰهًا كَمَا لَهُمْ ءَالِهَةٌ﴾.',
          en: '"And they came upon a people devoted to idols of their own; they said: O Mūsā, make for us a god just as they have gods!"',
          tokens: [
            { surface: 'فَأَتَوْا۟', lemma: 'أَتَى', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to come; and they came' },
            { surface: 'عَلَىٰ', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'قَوْمٍ', lemma: 'قَوْم', pos: 'noun', features: 'indef.gen', root: 'ق و م', gloss: 'a people' },
            { surface: 'يَعْكُفُونَ', lemma: 'عَكَفَ', pos: 'verb', features: 'impf.3mp', root: 'ع ك ف', gloss: 'to devote oneself to; devoted' },
            { surface: 'عَلَىٰٓ', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'أَصْنَامٍ', lemma: 'صَنَم', pos: 'noun', features: 'pl.indef.gen', gloss: 'idols' },
            { surface: 'لَّهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'of their own' },
            { surface: 'قَالُوا۟', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; they said' },
            { surface: 'يَـٰمُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'part', gloss: 'O Mūsā' },
            { surface: 'ٱجْعَل', lemma: 'جَعَلَ', pos: 'verb', features: 'imp.2ms', gloss: 'to make; make!' },
            { surface: 'لَّنَآ', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'إِلَـٰهًا', lemma: 'إِلَٰه', pos: 'noun', features: 'indef.acc', gloss: 'a god' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'they have' },
            { surface: 'ءَالِهَةٌ', lemma: 'إِلَٰه', pos: 'noun', features: 'pl.indef.nom', gloss: 'gods' },
          ],
        },
        {
          id: 'qs-v7-c15-009',
          ar: 'وَغَضِبَ مُوسَى وَقَالَ:',
          en: 'Mūsā grew angry and said:',
          tokens: [
            { surface: 'وَغَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to become angry; and grew angry' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
          ],
        },
        {
          // al-A'raf 7:138b.
          id: 'qs-v7-c15-010',
          ar: '﴿إِنَّكُمْ قَوْمٌ تَجْهَلُونَ﴾.',
          en: '"You are truly an ignorant people."',
          tokens: [
            { surface: 'إِنَّكُمْ', lemma: 'إِنَّ', pos: 'part', features: 'part+2mp', gloss: 'indeed you' },
            { surface: 'قَوْمٌ', lemma: 'قَوْم', pos: 'noun', features: 'indef.nom', root: 'ق و م', gloss: 'a people' },
            { surface: 'تَجْهَلُونَ', lemma: 'جَهِلَ', pos: 'verb', features: 'impf.2mp', gloss: 'to be ignorant; who are ignorant' },
          ],
        },
        {
          id: 'qs-v7-c15-011',
          ar: 'يَا لَلْعَجَبِ!',
          en: 'What wonder!',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'oh' },
            { surface: 'لَلْعَجَبِ', lemma: 'عَجَب', pos: 'noun', features: 'prep+def.gen', gloss: 'the wonder (how amazing!)' },
          ],
        },
        {
          id: 'qs-v7-c15-012',
          ar: 'يَا لَلظُّلْمِ!',
          en: 'What injustice!',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'oh' },
            { surface: 'لَلظُّلْمِ', lemma: 'ظُلْم', pos: 'noun', features: 'prep+def.gen', gloss: 'the injustice (what injustice!)' },
          ],
        },
        {
          id: 'qs-v7-c15-013',
          ar: 'إِنَّ اللَّهَ قَدْ أَنْعَمَ عَلَيْكُمْ وَفَضَّلَكُمْ وَآتَاكُمْ مَا لَمْ يُؤْتِ أَحَداً مِنَ الْعَالَمِينَ.',
          en: 'Allah had blessed you, favored you, and given you what He gave no other people in all the worlds.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed, already' },
            { surface: 'أَنْعَمَ', lemma: 'أَنْعَمَ', pos: 'verb', features: 'perf.3ms', gloss: 'to bless, favor; blessed' },
            { surface: 'عَلَيْكُمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+2mp', gloss: 'upon you' },
            { surface: 'وَفَضَّلَكُمْ', lemma: 'فَضَّلَ', pos: 'verb', features: 'conj+perf.3ms+2mp', gloss: 'to favor, prefer; and favored you' },
            { surface: 'وَآتَاكُمْ', lemma: 'آتَى', pos: 'verb', features: 'conj+perf.3ms+2mp', gloss: 'to give; and gave you' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُؤْتِ', lemma: 'آتَى', pos: 'verb', features: 'impf.3ms', gloss: 'to give; He gave' },
            { surface: 'أَحَداً', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'pl.def.gen', gloss: 'the worlds' },
          ],
        },
        {
          // al-A'raf 7:140.
          id: 'qs-v7-c15-014',
          ar: '﴿أَغَيْرَ ٱللَّهِ أَبْغِيكُمْ إِلَـٰهًا وَهُوَ فَضَّلَكُمْ عَلَى ٱلْعَـٰلَمِينَ﴾.',
          en: '"Should I seek a god for you other than Allah, when He has favored you above all the worlds?"',
          tokens: [
            { surface: 'أَغَيْرَ', lemma: 'غَيْر', pos: 'noun', features: 'part+acc.constr', root: 'غ ي ر', gloss: 'other than' },
            { surface: 'ٱللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'أَبْغِيكُمْ', lemma: 'أَبْغَى', pos: 'verb', features: 'impf.1s+2mp', root: 'ب غ ي', gloss: 'to seek, desire; shall I seek for you' },
            { surface: 'إِلَـٰهًا', lemma: 'إِلَٰه', pos: 'noun', features: 'indef.acc', gloss: 'a god' },
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'when He' },
            { surface: 'فَضَّلَكُمْ', lemma: 'فَضَّلَ', pos: 'verb', features: 'perf.3ms+2mp', gloss: 'to favor; has favored you' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'above' },
            { surface: 'ٱلْعَـٰلَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'pl.def.gen', gloss: 'the worlds' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا طَلَبَ بَعْضُ بَنِي إِسْرَائِيلَ مِنْ مُوسَى بَعْدَ عُبُورِ الْبَحْرِ؟',
          options: ['أَنْ يَجْعَلَ لَهُمْ إِلَٰهاً كَمَا لِلْقَوْمِ الَّذِينَ يَعْكُفُونَ عَلَى أَصْنَامِهِمْ', 'أَنْ يَبْنِيَ لَهُمْ مَسْجِداً', 'أَنْ يُعَلِّمَهُمُ التَّوْرَاةَ'],
          answer: 0,
          qEn: 'What did some of the Children of Israel ask Mūsā for after crossing the sea?',
          optionsEn: ['To make them a god just like the people devoted to their idols', 'To build them a mosque', 'To teach them the Torah'],
        },
      ],
    },
    {
      en: "Mūsā went off to the mount and was absent from them for some days, and so they became prey to Satan and to shirk. A man among them, called al-Sāmirī, rose up: 'And he brought out for them a calf, a lifeless body that lowed, and they said: This is your god, and the god of Mūsā -- but he forgot!' The Children of Israel were seduced by this calf, and fell down before it, deaf and blind.",
      sentences: [
        {
          id: 'qs-v7-c15-015',
          ar: 'سَارَ مُوسَى إِلى الطُّورِ وَغَابَ عَنْهُمْ أَيَّاماً',
          en: 'Mūsā went off to the mount and was absent from them for some days,',
          tokens: [
            { surface: 'سَارَ', lemma: 'سَارَ', pos: 'verb', features: 'perf.3ms', gloss: 'to travel, set off; went off' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الطُّورِ', lemma: 'طُور', pos: 'proper', features: 'def.gen', root: 'ط و ر', gloss: 'Mount Ṭūr' },
            { surface: 'وَغَابَ', lemma: 'غَابَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be absent; and was absent' },
            { surface: 'عَنْهُمْ', lemma: 'عَنْ', pos: 'prep', features: 'prep+3mp', gloss: 'from them' },
            { surface: 'أَيَّاماً', lemma: 'يَوْم', pos: 'noun', features: 'pl.indef.acc', gloss: 'for days' },
          ],
        },
        {
          id: 'qs-v7-c15-016',
          ar: 'فَكَانُوا صَيْدَ الشَّيْطَانِ وَفَرِيسَةَ الشِّرْكِ.',
          en: 'so they became prey to Satan and to shirk.',
          tokens: [
            { surface: 'فَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; so they became' },
            { surface: 'صَيْدَ', lemma: 'صَيْد', pos: 'noun', features: 'acc.constr', root: 'ص ي د', gloss: 'the prey of' },
            { surface: 'الشَّيْطَانِ', lemma: 'شَيْطَان', pos: 'noun', features: 'def.gen', gloss: 'Satan' },
            { surface: 'وَفَرِيسَةَ', lemma: 'فَرِيسَة', pos: 'noun', features: 'conj+acc.constr', root: 'ف ر س', gloss: 'and the prey of' },
            { surface: 'الشِّرْكِ', lemma: 'شِرْك', pos: 'noun', features: 'def.gen', gloss: 'shirk' },
          ],
        },
        {
          id: 'qs-v7-c15-017',
          ar: 'قَامَ رَجُلٌ مِنْهُمْ يُقَالُ لَهُ السَّامِرِيُّ',
          en: 'A man among them, called al-Sāmirī, rose up:',
          tokens: [
            { surface: 'قَامَ', lemma: 'قَامَ', pos: 'verb', features: 'perf.3ms', gloss: 'to rise, stand up; rose up' },
            { surface: 'رَجُلٌ', lemma: 'رَجُل', pos: 'noun', features: 'indef.nom', gloss: 'a man' },
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'يُقَالُ', lemma: 'قَالَ', pos: 'verb', features: 'pass+impf.3ms', gloss: 'to say; it is said, called' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'السَّامِرِيُّ', lemma: 'السَّامِرِيّ', pos: 'proper', features: 'nom', gloss: 'al-Sāmirī' },
          ],
        },
        {
          // Ta-Ha 20:88.
          id: 'qs-v7-c15-018',
          ar: '﴿فَأَخْرَجَ لَهُمْ عِجْلًا جَسَدًا لَّهُۥ خُوَارٌ فَقَالُوٓا۟ هَـٰذَآ إِلَـٰهُكُمْ وَإِلَـٰهُ مُوسَىٰ فَنَسِىَ﴾.',
          en: '"And he brought out for them a calf, a lifeless body that lowed, and they said: This is your god, and the god of Mūsā -- but he forgot!"',
          tokens: [
            { surface: 'فَأَخْرَجَ', lemma: 'أَخْرَجَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to bring out; and he brought out' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'عِجْلًا', lemma: 'عِجْل', pos: 'noun', features: 'indef.acc', root: 'ع ج ل', gloss: 'a calf' },
            { surface: 'جَسَدًا', lemma: 'جَسَد', pos: 'noun', features: 'indef.acc', gloss: 'a body' },
            { surface: 'لَّهُۥ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'that had' },
            { surface: 'خُوَارٌ', lemma: 'خُوَار', pos: 'noun', features: 'indef.nom', root: 'خ و ر', gloss: 'a lowing sound' },
            { surface: 'فَقَالُوٓا۟', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'and they said' },
            { surface: 'هَـٰذَآ', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'إِلَـٰهُكُمْ', lemma: 'إِلَٰه', pos: 'noun', features: 'nom+2mp', gloss: 'your god' },
            { surface: 'وَإِلَـٰهُ', lemma: 'إِلَٰه', pos: 'noun', features: 'conj+nom.constr', gloss: 'and the god of' },
            { surface: 'مُوسَىٰ', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
            { surface: 'فَنَسِىَ', lemma: 'نَسِيَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to forget; but he forgot' },
          ],
        },
        {
          id: 'qs-v7-c15-019',
          ar: 'وَفُتِنَ بَنُو إِسْرَائِيلَ بِهَذَا الْعِجْلِ وَخَرُّوا عَلَيْهِ صُمّاً وَعُمْيَاناً.',
          en: 'The Children of Israel were seduced by this calf, and fell down before it, deaf and blind.',
          tokens: [
            { surface: 'وَفُتِنَ', lemma: 'فَتَنَ', pos: 'verb', features: 'conj+pass+perf.3ms', gloss: 'to tempt, seduce; and were seduced' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'بِهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'prep+dem.m', gloss: 'by this' },
            { surface: 'الْعِجْلِ', lemma: 'عِجْل', pos: 'noun', features: 'def.gen', gloss: 'the calf' },
            { surface: 'وَخَرُّوا', lemma: 'خَرَّ', pos: 'verb', features: 'conj+perf.3mp', root: 'خ ر ر', gloss: 'to fall down prostrate; and fell down' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'before it' },
            { surface: 'صُمّاً', lemma: 'أَصَمّ', pos: 'adj', features: 'pl.indef.acc', root: 'ص م م', gloss: 'deaf' },
            { surface: 'وَعُمْيَاناً', lemma: 'أَعْمَى', pos: 'adj', features: 'conj+pl.indef.acc', gloss: 'and blind' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ السَّامِرِيُّ فِي غِيَابِ مُوسَى عَنْ قَوْمِهِ؟',
          options: ['أَخْرَجَ لَهُمْ عِجْلاً لَهُ خُوَارٌ وَقَالَ لَهُمْ إِنَّهُ إِلَٰهُهُمْ', 'دَعَاهُمْ إِلى الصَّبْرِ حَتَّى يَعُودَ مُوسَى', 'حَذَّرَهُمْ مِنَ الشِّرْكِ'],
          answer: 0,
          qEn: 'What did al-Sāmirī do while Mūsā was away from his people?',
          optionsEn: ['He brought out for them a calf that lowed and told them it was their god', 'He called them to be patient until Mūsā returned', 'He warned them against shirk'],
        },
        {
          q: 'كَيْفَ اسْتَقْبَلَ بَنُو إِسْرَائِيلَ الْعِجْلَ؟',
          options: ['فُتِنُوا بِهِ وَخَرُّوا عَلَيْهِ صُمّاً وَعُمْيَاناً', 'رَفَضُوهُ فَوْراً وَحَطَّمُوهُ', 'تَرَدَّدُوا طَوِيلاً قَبْلَ أَنْ يَعْبُدُوهُ'],
          answer: 0,
          qEn: 'How did the Children of Israel receive the calf?',
          optionsEn: ['They were seduced by it and fell down before it, deaf and blind', 'They rejected it at once and smashed it', 'They hesitated a long time before worshiping it'],
        },
      ],
    },
    {
      en: "Do they not see that it does not answer them a word, and has no power to harm or benefit them? Have they not seen that it does not speak to them, nor guide them to any way? Hārūn forbade them from this and strove hard, saying: 'O my people, you have only been tested by it; your Lord is truly the Most Merciful, so follow me and obey my command!' But the Children of Israel were bewitched by al-Sāmirī's sorcery, and love of the calf had been made to soak into their hearts, so they said: 'We will not cease to cling to it until Mūsā returns to us.'",
      sentences: [
        {
          // Ta-Ha 20:89.
          id: 'qs-v7-c15-020',
          ar: '﴿أَفَلَا يَرَوْنَ أَلَّا يَرْجِعُ إِلَيْهِمْ قَوْلًا وَلَا يَمْلِكُ لَهُمْ ضَرًّا وَلَا نَفْعًا﴾.',
          en: '"Do they not see that it does not answer them a word, and has no power to harm or benefit them?"',
          tokens: [
            { surface: 'أَفَلَا', lemma: 'لَا', pos: 'part', features: 'part+conj+neg', gloss: 'so do...not' },
            { surface: 'يَرَوْنَ', lemma: 'رَأَى', pos: 'verb', features: 'impf.3mp', root: 'ر أ ي', gloss: 'to see; do they see' },
            { surface: 'أَلَّا', lemma: 'أَنْ', pos: 'part', features: 'part+neg', gloss: 'that...not' },
            { surface: 'يَرْجِعُ', lemma: 'رَجَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to return, answer; it returns' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'قَوْلًا', lemma: 'قَوْل', pos: 'noun', features: 'indef.acc', gloss: 'a word' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَمْلِكُ', lemma: 'مَلَكَ', pos: 'verb', features: 'impf.3ms', gloss: 'to have power over; has power' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'ضَرًّا', lemma: 'ضَرّ', pos: 'noun', features: 'indef.acc', gloss: 'harm' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'نَفْعًا', lemma: 'نَفْع', pos: 'noun', features: 'indef.acc', gloss: 'benefit' },
          ],
        },
        {
          // cf. al-A'raf 7:148.
          id: 'qs-v7-c15-021',
          ar: '﴿أَوَلَمْ يَرَوْا۟ أَنَّهُۥ لَا يُكَلِّمُهُمْ وَلَا يَهْدِيهِمْ سَبِيلًا﴾.',
          en: '"Have they not seen that it does not speak to them, nor guide them to any way?"',
          tokens: [
            { surface: 'أَوَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'part+conj+neg', gloss: 'and have...not' },
            { surface: 'يَرَوْا۟', lemma: 'رَأَى', pos: 'verb', features: 'impf.3mp', root: 'ر أ ي', gloss: 'to see; they seen' },
            { surface: 'أَنَّهُۥ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that it' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُكَلِّمُهُمْ', lemma: 'كَلَّمَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to speak to; it speaks to them' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'يَهْدِيهِمْ', lemma: 'هَدَى', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to guide; guides them' },
            { surface: 'سَبِيلًا', lemma: 'سَبِيل', pos: 'noun', features: 'indef.acc', gloss: 'to any way' },
          ],
        },
        {
          id: 'qs-v7-c15-022',
          ar: 'وَنَهَاهُمْ هَارُونُ عَنْ ذَلِكَ وَاجْتَهَدَ وَقَالَ:',
          en: 'Hārūn forbade them from this and strove hard, saying:',
          tokens: [
            { surface: 'وَنَهَاهُمْ', lemma: 'نَهَى', pos: 'verb', features: 'conj+perf.3ms+3mp', root: 'ن ه ي', gloss: 'to forbid; and forbade them' },
            { surface: 'هَارُونُ', lemma: 'هَارُون', pos: 'proper', features: 'nom', gloss: 'Hārūn' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'وَاجْتَهَدَ', lemma: 'اِجْتَهَدَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to strive hard; and strove hard' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
          ],
        },
        {
          // Ta-Ha 20:90.
          id: 'qs-v7-c15-023',
          ar: '﴿يَـٰقَوْمِ إِنَّمَا فُتِنتُم بِهِۦ وَإِنَّ رَبَّكُمُ ٱلرَّحْمَـٰنُ فَٱتَّبِعُونِى وَأَطِيعُوٓا۟ أَمْرِى﴾.',
          en: '"O my people, you have only been tested by it; your Lord is truly the Most Merciful, so follow me and obey my command!"',
          tokens: [
            { surface: 'يَـٰقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'part+gen+1s', root: 'ق و م', gloss: 'O my people' },
            { surface: 'إِنَّمَا', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'only, indeed just' },
            { surface: 'فُتِنتُم', lemma: 'فَتَنَ', pos: 'verb', features: 'pass+perf.2mp', gloss: 'to tempt, seduce; you were tested' },
            { surface: 'بِهِۦ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'by it' },
            { surface: 'وَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'رَبَّكُمُ', lemma: 'رَبّ', pos: 'noun', features: 'acc+2mp', gloss: 'your Lord' },
            { surface: 'ٱلرَّحْمَـٰنُ', lemma: 'رَحْمَن', pos: 'proper', features: 'def.nom', gloss: 'the Most Merciful' },
            { surface: 'فَٱتَّبِعُونِى', lemma: 'اِتَّبَعَ', pos: 'verb', features: 'conj+imp.2mp+1s', gloss: 'to follow; so follow me' },
            { surface: 'وَأَطِيعُوٓا۟', lemma: 'أَطَاعَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'to obey; and obey' },
            { surface: 'أَمْرِى', lemma: 'أَمْر', pos: 'noun', features: 'acc+1s', gloss: 'my command' },
          ],
        },
        {
          id: 'qs-v7-c15-024',
          ar: 'وَلَكِنَّ بَنِي إِسْرَائِيلَ كَانُوا مَفْتُونِينَ بِسِحْرِ السَّامِرِيِّ وَأُشْرِبُوا فِي قُلُوبِهِمُ الْعِجْلَ فَقَالُوا:',
          en: 'But the Children of Israel were bewitched by al-Sāmirī\'s sorcery, and love of the calf had been made to soak into their hearts, so they said:',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'مَفْتُونِينَ', lemma: 'فَتَنَ', pos: 'adj', features: 'pass+pl.acc', gloss: 'bewitched, seduced' },
            { surface: 'بِسِحْرِ', lemma: 'سِحْر', pos: 'noun', features: 'prep+constr.gen', gloss: 'by the sorcery of' },
            { surface: 'السَّامِرِيِّ', lemma: 'السَّامِرِيّ', pos: 'proper', features: 'gen', gloss: 'al-Sāmirī' },
            { surface: 'وَأُشْرِبُوا', lemma: 'أَشْرَبَ', pos: 'verb', features: 'conj+pass+perf.3mp', root: 'ش ر ب', gloss: 'to imbue, soak in; and it was made to soak into' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'قُلُوبِهِمُ', lemma: 'قَلْب', pos: 'noun', features: 'pl.gen+3mp', gloss: 'their hearts' },
            { surface: 'الْعِجْلَ', lemma: 'عِجْل', pos: 'noun', features: 'def.acc', gloss: 'the calf' },
            { surface: 'فَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'so they said' },
          ],
        },
        {
          // Ta-Ha 20:91.
          id: 'qs-v7-c15-025',
          ar: '﴿لَن نَّبْرَحَ عَلَيْهِ عَـٰكِفِينَ حَتَّىٰ يَرْجِعَ إِلَيْنَا مُوسَىٰ﴾.',
          en: '"We will not cease to cling to it until Mūsā returns to us."',
          tokens: [
            { surface: 'لَن', lemma: 'لَنْ', pos: 'part', features: 'neg', gloss: 'will not' },
            { surface: 'نَّبْرَحَ', lemma: 'بَرِحَ', pos: 'verb', features: 'impf.1p', root: 'ب ر ح', gloss: 'to cease, stop; we cease' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'over it' },
            { surface: 'عَـٰكِفِينَ', lemma: 'عَاكِف', pos: 'adj', features: 'pl.acc', root: 'ع ك ف', gloss: 'devoted, clinging' },
            { surface: 'حَتَّىٰ', lemma: 'حَتَّى', pos: 'conj', features: 'conj', gloss: 'until' },
            { surface: 'يَرْجِعَ', lemma: 'رَجَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to return; returns' },
            { surface: 'إِلَيْنَا', lemma: 'إِلَى', pos: 'prep', features: 'prep+1p', gloss: 'to us' },
            { surface: 'مُوسَىٰ', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ هَارُونُ لِبَنِي إِسْرَائِيلَ عِنْدَمَا نَهَاهُمْ عَنْ عِبَادَةِ الْعِجْلِ؟',
          options: ['إِنَّمَا فُتِنْتُمْ بِهِ وَإِنَّ رَبَّكُمُ الرَّحْمَٰنُ فَاتَّبِعُونِي وَأَطِيعُوا أَمْرِي', 'اُتْرُكُوا مُوسَى وَاتَّبِعُونِي أَنَا', 'لَا بَأْسَ بِعِبَادَةِ الْعِجْلِ'],
          answer: 0,
          qEn: 'What did Hārūn tell the Children of Israel when he forbade them from worshiping the calf?',
          optionsEn: ['You have only been tested by it -- your Lord is the Most Merciful, so follow me and obey my command', 'Leave Mūsā and follow me instead', 'There is no harm in worshiping the calf'],
        },
        {
          q: 'كَيْفَ رَدَّ بَنُو إِسْرَائِيلَ عَلَى تَحْذِيرِ هَارُونَ؟',
          options: ['قَالُوا لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ حَتَّى يَرْجِعَ إِلَيْنَا مُوسَى', 'تَابُوا فَوْراً وَتَرَكُوا الْعِجْلَ', 'قَتَلُوا هَارُونَ'],
          answer: 0,
          qEn: "How did the Children of Israel respond to Hārūn's warning?",
          optionsEn: ['They said: We will not cease to cling to it until Mūsā returns to us', 'They repented at once and abandoned the calf', 'They killed Hārūn'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ',
        post: 'إِسْرَائِيلَ يَعِيشُونَ مَعَ الْمُشْرِكِينَ فِي مِصْرَ.',
        en: 'The Children of Israel had lived among the idol-worshipers in Egypt.',
        options: ['بَنُو', 'بَنِي', 'بَنَاتُ', 'اِبْنُ'],
        answer: 0,
        rationales: [
          'Nominative, construct -- subject of كَانَ, matching the taught pattern.',
          'Oblique (genitive/accusative) form -- wrong case; the subject of كَانَ is nominative.',
          '"daughters of" -- wrong word and wrong gender.',
          'Singular "son of" -- wrong number; بَنُو إِسْرَائِيلَ is always plural.',
        ],
      },
      {
        type: 'cloze',
        pre: 'زَالَتْ مِنْهُمْ',
        post: 'الشِّرْكِ وَتَسَرَّبَ إِلَيْهِمْ حُبُّهُ.',
        en: 'Their aversion to shirk faded from them, and love of it seeped into them.',
        options: ['كَرَاهَةُ', 'كَرَاهَةَ', 'كَرَاهَةِ', 'كَرَاهِيَةُ'],
        answer: 0,
        rationales: [
          'Nominative -- subject of زَالَتْ, matching the taught pattern.',
          'Accusative -- wrong case; the subject of a verb is nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'A different (unused) spelling of the noun -- wrong word.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَزَاغَتْ قُلُوبُهُمْ وَفَسَدَ',
        post: 'فَإِنْ يَرَوْا سَبِيلَ الرُّشْدِ لَا يَتَّخِذُوهُ سَبِيلاً.',
        en: 'Their hearts swerved and their taste corrupted -- so if they saw the path of right guidance, they would not take it.',
        options: ['ذَوْقُهُمْ', 'ذَوْقَهُمْ', 'ذَوْقِهِمْ', 'ذَوْقُهُنَّ'],
        answer: 0,
        rationales: [
          'Nominative -- subject of فَسَدَ, matching the taught pattern.',
          'Accusative -- wrong case; the subject of a verb is nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Feminine plural possessive "their (f.)" -- wrong; بَنُو إِسْرَائِيلَ takes the masculine plural هُمْ.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'غَضِبَ مُوسَى',
        pre: '',
        post: 'مُوسَى',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['غَضِبْتُ', 'غَضِبَ', 'غَضِبَتْ', 'غَضِبُوا'],
        answer: 0,
        rationales: [
          '1st person singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '3rd feminine singular -- she.',
          '3rd masculine plural -- they.',
        ],
      },
      {
        type: 'shift',
        base: 'غَضِبَ مُوسَى',
        pre: '',
        post: 'مُوسَى',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['غَضِبَتْ', 'غَضِبَ', 'غَضِبْتُ', 'غَضِبُوا'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '3rd masculine plural -- they.',
        ],
      },
      {
        type: 'shift',
        base: 'غَضِبَ مُوسَى',
        pre: '',
        post: 'مُوسَى',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['غَضِبُوا', 'غَضِبَ', 'غَضِبَتْ', 'غَضِبْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '3rd feminine singular -- she.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

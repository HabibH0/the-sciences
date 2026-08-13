// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus), chapter 4 -- ٤ - مِحْنَةُ بَنِي إِسْرَائِيلَ ("The Ordeal of the
// Children of Israel"). Starts at the heading box partway down page 169
// (right after ch3's closing āyah), continues through page 170, and ends
// there -- no heading box appears until page 171 (chapter 5, out of scope).
// Transcribed by hand from the scan (vision OCR) against
// ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md.
//
// Grammar / lexical notes:
//   -- بَنِي/بَنُو إِسْرَائِيلَ (first appearance in this volume, in the
//      chapter's own title) is tokenized as TWO tokens per instruction:
//      اِبْن (already taught, qasas-v1 ch14; surface بَنُو in the nominative,
//      qs-v7-c04-009, and بَنِي elsewhere, with features pl.constr + case)
//      and the new proper noun إِسْرَائِيل (always genitive, second term of
//      the construct).
//   -- نَجَّى ("to save, deliver", qs-v7-c04-014, 015) was already introduced
//      as new in chapter 3 (qs-v7-c03-033/035's وَنَجِّنِى) and is reused here
//      unchanged, NOT re-listed in this chapter's newWords.
//   -- عَسَى (qs-v7-c04-011, "it may be that"), كَلْب (qs-v7-c04-003, "dog"),
//      كَافِر (qs-v7-c04-013, "disbeliever"), مَسْجِد (qs-v7-c04-016, "mosque"),
//      نَسِيَ, نَفَعَ, and مُؤْمِن are all already-taught qasas/qiraah lemmas
//      (see the shared-lexicon list below) reused here as ordinary
//      vocabulary, not flagged new -- included in this note only because a
//      first pass mistakenly suspected some of them might be new before a
//      second lexicon check (with full diacritics) turned up their existing
//      qasas-course entries.
//   -- مَا أَجْهَلَ فِرْعَوْنَ (qs-v7-c04-020a) is the تعجّب ("how X!") exclamatory
//      construction, morphologically a frozen مَا + أَفْعَلَ verb. Tagged as
//      verb, lemma جَهِلَ (new, "to be ignorant"), perf.3ms, glossed to carry
//      the exclamatory sense; مَا itself reuses the already-taught negator/
//      relative lemma مَا with pos 'part' (its exclamative use).
//   -- The Qur'anic quotations here (Al-A'rāf 7:128-129, Yūnus 10:84-86) are
//      transcribed in full and tokenized normally, without fragmentation,
//      per the current task brief. All run comfortably over 9 tokens and
//      are automatically outside the build stage's 3-9 token drillable
//      window. Verse-end pause/number glyphs printed in the source are not
//      transcribed, matching this corpus's established convention.
//   -- `workshop.cloze`/`workshop.shift` are built only from the narrator's
//      own recycled prose (فَفِي كُلِّ يَوْمٍ...، وَمَنْ أَظْلَمُ مِمَّنْ...، لَمْ
//      يَيْأَسْ), never from a Qur'anic quotation, per instruction.
//
// Shared lexicon check (grepped against the supplied lexicon.txt export,
// plus qasas-v7 ch1-3's own tokens for this-volume proper nouns):
// لَمَّا (qasas-v1 ch7)، عَلِمَ (qasas-v1 ch5)، نَاس، فِرْعَوْن (qasas-v7 ch1)،
// طِفْل (qiraah-v2 ch37/38)، كَلْب (qasas-v2 ch16)، فِي، كُلّ (qasas-v1 ch10)،
// يَوْم (bedrock, see qasas-v7 ch1 header)، جَدِيد (qiraah-v2 ch39)، مُوسَى
// (qasas-v7 ch1)، عَلَى، صَلاة (qasas-v7 ch1)، سَلام (qasas-v1 ch6)، أَوْصَى
// (qiraah-v2 ch34/49)، صَبْر (qيراah-v2 ch36)، اِسْتَعَانَ (qiraah-v2 ch71)،
// اللَّه، صَبَرَ (qiraah-v2 ch36)، إِنَّ، أَرْض (qasas-v1 ch13)، لِ، شَاءَ
// (qiraah-v2 ch34)، مِنْ، عَبْد (qasas-v2 ch9)، عَاقِبَة (qasas-v7 ch1)، اِتَّقَى
// (qasas-v2 ch22/qasas-v3 ch16)، سَئِمَ (qiraah-v1 ch26)، هَذِهِ (bedrock)،
// هَذَا (bedrock)، أَذَى (qiraah-v1 ch24)، قَالَ، نَفَعَ (qasas-v1 ch2)، شَيْء
// (qasas-v1 ch3)، أَغْنَى (qasas-v7 ch1)، عَنْ (bedrock)، آذَى (qiraah-v2
// ch52)، قَبْلَ (qiraah-v2 ch38)، أَنْ، أَتَى (qasas-v1 ch10)، بَعْدَ (bedrock)،
// مَا، جَاءَ (bedrock)، لَكِنَّ (qasas-v1 ch6/14)، يَئِسَ (qasas-v3 ch17)، عَسَى
// (qasas-v2 ch21)، رَبّ (qasas-v1 ch7)، أَهْلَكَ (qasas-v7 ch2)، عَدُوّ (qasas-v1
// ch9)، نَظَرَ (qiraah-v2 ch38)، كَيْفَ (qiraah-v2 ch38)، عَمِلَ (qiraah-v2
// ch40)، إِن (qasas-v1 ch14)، كَانَ، آمَنَ (qasas-v3 ch14)، مُسْلِم (qiraah-v2
// ch38)، جَعَلَ (qasas-v1 ch8)، قَوْم (qasas-v1 ch3/8)، ظَالِم (qasas-v1 ch10)،
// نَجَّى (qasas-v7 ch3, NOT re-listed here)، رَحْمَة (qasas-v2 ch9)، كَافِر
// (qasas-v3 ch17)، مَنَعَ (qasas-v1 ch2)، عِبَادَة (qiraah-v1 ch29/qiraah-v2
// ch41)، غَضِبَ (qasas-v1 ch3/10)، رَأَى (qasas-v1 ch2)، عَبَدَ (qasas-v1 ch1)،
// صَلَّى (qiraah-v2 ch40)، اِتَّخَذَ (qiraah-v2 ch36)، مَسْجِد (qasas-v1 ch16)،
// أَظْلَم (qiraah-v2 ch42)، دَعَا (qasas-v1 ch8)
// are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 16 new words (عَدَاوَة، تَقَرَّبَ، إِيذَاء، اِجْتَرَأَ، هَرَّ، مِحْنَة، بَلِيَّة،
// نَازِلَة، سَلَّى، أَوْرَثَ، إِسْرَائِيل، جَزِعَ، اِسْتَخْلَفَ، تَوَكَّلَ، فِتْنَة، جَهِلَ).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch4',
  title: { ar: 'مِحْنَةُ بَنِي إِسْرَائِيلَ', en: 'The Ordeal of the Children of Israel' },
  newWords: [
    'عَدَاوَة', 'تَقَرَّبَ', 'إِيذَاء', 'اِجْتَرَأَ', 'هَرَّ', 'مِحْنَة', 'بَلِيَّة',
    'نَازِلَة', 'سَلَّى', 'أَوْرَثَ', 'إِسْرَائِيل', 'جَزِعَ', 'اِسْتَخْلَفَ', 'تَوَكَّلَ',
    'فِتْنَة', 'جَهِلَ',
  ],
  lemmas: {
    'عَدَاوَة': { gloss: 'enmity, hostility' },
    'تَقَرَّبَ': { gloss: 'to draw near, ingratiate oneself (with)' },
    'إِيذَاء': { gloss: 'harming, causing injury' },
    'اِجْتَرَأَ': { gloss: 'to grow bold, dare (against)' },
    'هَرَّ': { gloss: 'to snarl, growl (at)' },
    'مِحْنَة': { gloss: 'ordeal, trial' },
    'بَلِيَّة': { gloss: 'calamity, misfortune' },
    'نَازِلَة': { gloss: 'a calamity that befalls, disaster' },
    'سَلَّى': { gloss: 'to console, comfort' },
    'أَوْرَثَ': { gloss: 'to cause to inherit, bequeath' },
    'إِسْرَائِيل': { gloss: 'Israel (i.e. Jacob, ancestor of the Israelites)' },
    'جَزِعَ': { gloss: 'to panic, grieve, despair' },
    'اِسْتَخْلَفَ': { gloss: 'to appoint as successor, make vicegerent' },
    'تَوَكَّلَ': { gloss: 'to place trust in, rely upon' },
    'فِتْنَة': { gloss: 'trial, tribulation, temptation' },
    'جَهِلَ': { gloss: 'to be ignorant' },
  },
  paragraphs: [
    {
      en: "When the people learned of Pharaoh's enmity toward the Children of Israel, they drew near to Pharaoh through their own enmity and harm toward them. Children grew bold against the Children of Israel, and dogs would snarl at them. Every day brought a new ordeal, and every day a fresh calamity befell them. Mūsā, peace and blessings be upon him, consoled them and enjoined patience on them, saying: [Qur'an: 'Seek help through Allah and be patient; indeed the earth belongs to Allah -- He gives it as an inheritance to whom He wills among His servants, and the outcome is for the God-fearing.'] The Children of Israel grew weary of this ordeal and this harm, and said to Mūsā: 'You have not benefited us at all! You have not availed us at all!' [Qur'an: They said, 'We were harmed before you came to us, and after you came to us.']",
      sentences: [
        {
          id: 'qs-v7-c04-001',
          ar: 'وَلَمَّا عَلِمَ النَّاسُ عَدَاوَةَ فِرْعَوْنَ لِبَنِي إِسْرَائِيلَ،',
          en: "When the people learned of Pharaoh's enmity toward the Children of Israel,",
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'عَلِمَ', lemma: 'عَلِمَ', pos: 'verb', features: 'perf.3ms', gloss: 'to know; learned' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'عَدَاوَةَ', lemma: 'عَدَاوَة', pos: 'noun', features: 'acc.constr', root: 'ع د و', gloss: 'the enmity of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'لِبَنِي', lemma: 'اِبْن', pos: 'noun', features: 'prep+pl.constr.gen', gloss: 'toward the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
          ],
        },
        {
          id: 'qs-v7-c04-002',
          ar: 'تَقَرَّبُوا إِلَى فِرْعَوْنَ بِعَدَاوَتِهِمْ وَإِيذَائِهِمْ.',
          en: 'they drew near to Pharaoh through their own enmity and harm toward them.',
          tokens: [
            { surface: 'تَقَرَّبُوا', lemma: 'تَقَرَّبَ', pos: 'verb', features: 'perf.3mp', root: 'ق ر ب', gloss: 'to draw near, ingratiate oneself' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'بِعَدَاوَتِهِمْ', lemma: 'عَدَاوَة', pos: 'noun', features: 'prep+gen+3mp', gloss: 'through their enmity' },
            { surface: 'وَإِيذَائِهِمْ', lemma: 'إِيذَاء', pos: 'noun', features: 'conj+gen+3mp', root: 'ا ذ ي', gloss: 'and their harm' },
          ],
        },
        {
          id: 'qs-v7-c04-003',
          ar: 'وَاجْتَرَأَ عَلَى بَنِي إِسْرَائِيلَ الأَطْفَالُ وَهَرَّتْهُمُ الْكِلابُ.',
          en: 'Children grew bold against the Children of Israel, and dogs would snarl at them.',
          tokens: [
            { surface: 'وَاجْتَرَأَ', lemma: 'اِجْتَرَأَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ج ر أ', gloss: 'to grow bold, dare against' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'against' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.gen', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'الأَطْفَالُ', lemma: 'طِفْل', pos: 'noun', features: 'pl.def.nom', gloss: 'the children' },
            { surface: 'وَهَرَّتْهُمُ', lemma: 'هَرَّ', pos: 'verb', features: 'conj+perf.3fs+3mp', root: 'ه ر ر', gloss: 'to snarl, growl at; and snarled at them' },
            { surface: 'الْكِلابُ', lemma: 'كَلْب', pos: 'noun', features: 'pl.def.nom', gloss: 'the dogs' },
          ],
        },
        {
          id: 'qs-v7-c04-004',
          ar: 'فَفِي كُلِّ يَوْمٍ مِحْنَةٌ جَدِيدَةٌ!',
          en: 'Every day brought a new ordeal!',
          tokens: [
            { surface: 'فَفِي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'and in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'يَوْمٍ', lemma: 'يَوْم', pos: 'noun', features: 'indef.gen', gloss: 'day' },
            { surface: 'مِحْنَةٌ', lemma: 'مِحْنَة', pos: 'noun', features: 'indef.nom', root: 'م ح ن', gloss: 'an ordeal' },
            { surface: 'جَدِيدَةٌ', lemma: 'جَدِيد', pos: 'adj', features: 'indef.nom.f', gloss: 'new' },
          ],
        },
        {
          id: 'qs-v7-c04-005',
          ar: 'وَفِي كُلِّ يَوْمٍ بَلِيَّةٌ نَازِلَةٌ.',
          en: 'and every day a fresh calamity befell them.',
          tokens: [
            { surface: 'وَفِي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'and in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'يَوْمٍ', lemma: 'يَوْم', pos: 'noun', features: 'indef.gen', gloss: 'day' },
            { surface: 'بَلِيَّةٌ', lemma: 'بَلِيَّة', pos: 'noun', features: 'indef.nom', root: 'ب ل و', gloss: 'a calamity' },
            { surface: 'نَازِلَةٌ', lemma: 'نَازِلَة', pos: 'adj', features: 'indef.nom.f', root: 'ن ز ل', gloss: 'befalling' },
          ],
        },
        {
          id: 'qs-v7-c04-006',
          ar: 'وَمُوسَى عَلَيْهِ الصَّلاةُ وَالسَّلامُ يُسَلِّيهِمْ وَيُوصِيهِمْ بِالصَّبْرِ،',
          en: 'Mūsā, peace and blessings be upon him, consoled them and enjoined patience on them,',
          tokens: [
            { surface: 'وَمُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'conj+nom', gloss: 'and Mūsā' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'upon him' },
            { surface: 'الصَّلاةُ', lemma: 'صَلاة', pos: 'noun', features: 'def.nom', gloss: 'blessing' },
            { surface: 'وَالسَّلامُ', lemma: 'سَلام', pos: 'noun', features: 'conj+def.nom', gloss: 'and peace' },
            { surface: 'يُسَلِّيهِمْ', lemma: 'سَلَّى', pos: 'verb', features: 'impf.3ms+3mp', root: 'س ل و', gloss: 'to console, comfort; consoling them' },
            { surface: 'وَيُوصِيهِمْ', lemma: 'أَوْصَى', pos: 'verb', features: 'conj+impf.3ms+3mp', gloss: 'to enjoin; and enjoining them' },
            { surface: 'بِالصَّبْرِ', lemma: 'صَبْر', pos: 'noun', features: 'prep+def.gen', gloss: 'with patience' },
          ],
        },
        {
          id: 'qs-v7-c04-007',
          ar: 'وَيَقُولُ لَهُمْ:',
          en: 'saying to them:',
          tokens: [
            { surface: 'وَيَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'and saying' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v7-c04-008',
          ar: '﴿ٱسْتَعِينُوا۟ بِٱللَّهِ وَٱصْبِرُوٓا۟ إِنَّ ٱلْأَرْضَ لِلَّهِ يُورِثُهَا مَن يَشَآءُ مِنْ عِبَادِهِۦ وَٱلْعَٰقِبَةُ لِلْمُتَّقِينَ﴾.',
          en: '"Seek help through Allah and be patient; indeed the earth belongs to Allah -- He gives it as an inheritance to whom He wills among His servants, and the outcome is for the God-fearing."',
          tokens: [
            { surface: 'ٱسْتَعِينُوا۟', lemma: 'اِسْتَعَانَ', pos: 'verb', features: 'imp.2mp', gloss: 'to seek help; seek help!' },
            { surface: 'بِٱللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'through Allah' },
            { surface: 'وَٱصْبِرُوٓا۟', lemma: 'صَبَرَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'to be patient; and be patient!' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'ٱلْأَرْضَ', lemma: 'أَرْض', pos: 'noun', features: 'def.acc', gloss: 'the earth' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'belongs to Allah' },
            { surface: 'يُورِثُهَا', lemma: 'أَوْرَثَ', pos: 'verb', features: 'impf.3ms+3fs', root: 'و ر ث', gloss: 'to cause to inherit, bequeath; He gives it as an inheritance' },
            { surface: 'مَن', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'to whom' },
            { surface: 'يَشَآءُ', lemma: 'شَاءَ', pos: 'verb', features: 'impf.3ms', gloss: 'to will; He wills' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'عِبَادِهِۦ', lemma: 'عَبْد', pos: 'noun', features: 'pl.gen+3ms', gloss: 'His servants' },
            { surface: 'وَٱلْعَٰقِبَةُ', lemma: 'عَاقِبَة', pos: 'noun', features: 'conj+def.nom', gloss: 'and the outcome' },
            { surface: 'لِلْمُتَّقِينَ', lemma: 'اِتَّقَى', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'is for the God-fearing' },
          ],
        },
        {
          id: 'qs-v7-c04-009',
          ar: 'وَسَئِمَ بَنُو إِسْرَائِيلَ هَذِهِ الْمِحْنَةَ وَهَذَا الأَذَى وَقَالُوا لِمُوسَى:',
          en: 'The Children of Israel grew weary of this ordeal and this harm, and said to Mūsā:',
          tokens: [
            { surface: 'وَسَئِمَ', lemma: 'سَئِمَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to grow weary; and grew weary' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْمِحْنَةَ', lemma: 'مِحْنَة', pos: 'noun', features: 'def.acc', gloss: 'ordeal' },
            { surface: 'وَهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'conj+dem.m', gloss: 'and this' },
            { surface: 'الأَذَى', lemma: 'أَذَى', pos: 'noun', features: 'def.acc', gloss: 'harm' },
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'and said' },
            { surface: 'لِمُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'prep+gen', gloss: 'to Mūsā' },
          ],
        },
        {
          id: 'qs-v7-c04-010',
          ar: 'لَمْ تَنْفَعْنَا شَيْئاً!',
          en: "'You have not benefited us at all!",
          tokens: [
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَنْفَعْنَا', lemma: 'نَفَعَ', pos: 'verb', features: 'impf.3fs+1p', gloss: 'to benefit; have you benefited us' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
          ],
        },
        {
          id: 'qs-v7-c04-011',
          ar: 'لَمْ تُغْنِ عَنَّا شَيْئاً!',
          en: "You have not availed us at all!'",
          tokens: [
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تُغْنِ', lemma: 'أَغْنَى', pos: 'verb', features: 'impf.3fs', gloss: 'to avail; have you availed' },
            { surface: 'عَنَّا', lemma: 'عَنْ', pos: 'prep', features: 'prep+1p', gloss: 'us' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
          ],
        },
        {
          id: 'qs-v7-c04-012',
          ar: '﴿قَالُوٓا۟ أُوذِينَا مِن قَبْلِ أَن تَأْتِيَنَا وَمِنۢ بَعْدِ مَا جِئْتَنَا﴾.',
          en: '"They said, \'We were harmed before you came to us, and after you came to us.\'"',
          tokens: [
            { surface: 'قَالُوٓا۟', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'they said' },
            { surface: 'أُوذِينَا', lemma: 'آذَى', pos: 'verb', features: 'pass+perf.1p', gloss: 'to harm; we were harmed' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَبْلِ', lemma: 'قَبْلَ', pos: 'prep', features: 'constr.gen', gloss: 'before' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'تَأْتِيَنَا', lemma: 'أَتَى', pos: 'verb', features: 'impf.3fs+1p', gloss: 'to come; you came to us' },
            { surface: 'وَمِنۢ', lemma: 'مِنْ', pos: 'prep', features: 'conj+prep', gloss: 'and from' },
            { surface: 'بَعْدِ', lemma: 'بَعْدَ', pos: 'noun', features: 'constr.gen', gloss: 'after' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'جِئْتَنَا', lemma: 'جَاءَ', pos: 'verb', features: 'perf.2ms+1p', gloss: 'to come; you came to us' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ النَّاسُ لَمَّا عَلِمُوا عَدَاوَةَ فِرْعَوْنَ لِبَنِي إِسْرَائِيلَ؟',
          options: ['تَقَرَّبُوا إِلَى فِرْعَوْنَ بِعَدَاوَتِهِمْ وَإِيذَائِهِمْ', 'دَافَعُوا عَنْ بَنِي إِسْرَائِيلَ', 'اعْتَزَلُوا فِرْعَوْنَ وَبَنِي إِسْرَائِيلَ مَعاً'],
          answer: 0,
          qEn: "What did the people do when they learned of Pharaoh's enmity toward the Children of Israel?",
          optionsEn: ['They drew near to Pharaoh through their own enmity and harm toward them', 'They defended the Children of Israel', 'They kept away from both Pharaoh and the Children of Israel'],
        },
        {
          q: 'بِمَاذَا كَانَ مُوسَى يُوصِي بَنِي إِسْرَائِيلَ فِي مِحْنَتِهِمْ؟',
          options: ['بِالصَّبْرِ وَالاسْتِعَانَةِ بِاللَّهِ', 'بِالْقِتَالِ الفَوْرِيِّ', 'بِالْهُرُوبِ مِنْ مِصْرَ سِرّاً'],
          answer: 0,
          qEn: 'What did Mūsā enjoin upon the Children of Israel in their ordeal?',
          optionsEn: ['Patience and seeking help through Allah', 'Immediate fighting', 'Fleeing Egypt in secret'],
        },
      ],
    },
    {
      en: "But Mūsā did not panic, and Mūsā did not despair! [Qur'an: He said, 'It may be that your Lord will destroy your enemy and make you successors in the land, then observe how you act.'] [Qur'an: And Mūsā said, 'O my people, if you have believed in Allah, then place your trust in Him, if you are Muslims.'] [Qur'an: So they said, 'In Allah we have placed our trust. Our Lord, do not make us a trial for the wrongdoing people, and save us by Your mercy from the disbelieving people.']",
      sentences: [
        {
          id: 'qs-v7-c04-013',
          ar: 'وَلَكِنَّ مُوسَى لَمْ يَجْزَعْ!',
          en: 'But Mūsā did not panic!',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَجْزَعْ', lemma: 'جَزِعَ', pos: 'verb', features: 'impf.3ms', root: 'ج ز ع', gloss: 'to panic, despair' },
          ],
        },
        {
          id: 'qs-v7-c04-014',
          ar: 'وَلَكِنَّ مُوسَى لَمْ يَيْأَسْ!',
          en: 'and Mūsā did not despair!',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'and' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَيْأَسْ', lemma: 'يَئِسَ', pos: 'verb', features: 'impf.3ms', gloss: 'to despair' },
          ],
        },
        {
          id: 'qs-v7-c04-015',
          ar: '﴿قَالَ عَسَىٰ رَبُّكُمْ أَن يُهْلِكَ عَدُوَّكُمْ وَيَسْتَخْلِفَكُمْ فِى ٱلْأَرْضِ فَيَنظُرَ كَيْفَ تَعْمَلُونَ﴾.',
          en: '"He said, \'It may be that your Lord will destroy your enemy and make you successors in the land, then observe how you act.\'"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'he said' },
            { surface: 'عَسَىٰ', lemma: 'عَسَى', pos: 'verb', features: 'perf.3ms', gloss: 'it may be that' },
            { surface: 'رَبُّكُمْ', lemma: 'رَبّ', pos: 'noun', features: 'nom+2mp', gloss: 'your Lord' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'will' },
            { surface: 'يُهْلِكَ', lemma: 'أَهْلَكَ', pos: 'verb', features: 'impf.3ms', gloss: 'to destroy' },
            { surface: 'عَدُوَّكُمْ', lemma: 'عَدُوّ', pos: 'noun', features: 'acc+2mp', gloss: 'your enemy' },
            { surface: 'وَيَسْتَخْلِفَكُمْ', lemma: 'اِسْتَخْلَفَ', pos: 'verb', features: 'conj+impf.3ms+2mp', root: 'خ ل ف', gloss: 'to appoint as successor; and make you successors' },
            { surface: 'فِى', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ٱلْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the land' },
            { surface: 'فَيَنظُرَ', lemma: 'نَظَرَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to look, observe; then observe' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'part', gloss: 'how' },
            { surface: 'تَعْمَلُونَ', lemma: 'عَمِلَ', pos: 'verb', features: 'impf.2mp', gloss: 'you act' },
          ],
        },
        {
          id: 'qs-v7-c04-016',
          ar: '﴿وَقَالَ مُوسَىٰ يَٰقَوْمِ إِن كُنتُمْ ءَامَنتُم بِٱللَّهِ فَعَلَيْهِ تَوَكَّلُوٓا۟ إِن كُنتُم مُّسْلِمِينَ﴾.',
          en: '"And Mūsā said, \'O my people, if you have believed in Allah, then place your trust in Him, if you are Muslims.\'"',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
            { surface: 'مُوسَىٰ', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'يَٰقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'part+gen+1s', gloss: 'O my people' },
            { surface: 'إِن', lemma: 'إِنْ', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'كُنتُمْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.2mp', gloss: 'you have' },
            { surface: 'ءَامَنتُم', lemma: 'آمَنَ', pos: 'verb', features: 'perf.2mp', gloss: 'believed' },
            { surface: 'بِٱللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'in Allah' },
            { surface: 'فَعَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'conj+prep+3ms', gloss: 'then in Him' },
            { surface: 'تَوَكَّلُوٓا۟', lemma: 'تَوَكَّلَ', pos: 'verb', features: 'imp.2mp', root: 'و ك ل', gloss: 'to place trust; place your trust!' },
            { surface: 'إِن', lemma: 'إِنْ', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'كُنتُم', lemma: 'كَانَ', pos: 'verb', features: 'perf.2mp', gloss: 'you are' },
            { surface: 'مُّسْلِمِينَ', lemma: 'مُسْلِم', pos: 'noun', features: 'pl.acc', gloss: 'Muslims' },
          ],
        },
        {
          id: 'qs-v7-c04-017',
          ar: '﴿فَقَالُوا۟ عَلَى ٱللَّهِ تَوَكَّلْنَا رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلْقَوْمِ ٱلظَّٰلِمِينَ وَنَجِّنَا بِرَحْمَتِكَ مِنَ ٱلْقَوْمِ ٱلْكَٰفِرِينَ﴾.',
          en: '"So they said, \'In Allah we have placed our trust. Our Lord, do not make us a trial for the wrongdoing people, and save us by Your mercy from the disbelieving people.\'"',
          tokens: [
            { surface: 'فَقَالُوا۟', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'so they said' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ٱللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'تَوَكَّلْنَا', lemma: 'تَوَكَّلَ', pos: 'verb', features: 'perf.1p', gloss: 'we have placed our trust' },
            { surface: 'رَبَّنَا', lemma: 'رَبّ', pos: 'noun', features: 'acc+1p', gloss: 'our Lord' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'do not' },
            { surface: 'تَجْعَلْنَا', lemma: 'جَعَلَ', pos: 'verb', features: 'impf.2ms+1p', gloss: 'to make; make us' },
            { surface: 'فِتْنَةً', lemma: 'فِتْنَة', pos: 'noun', features: 'indef.acc', root: 'ف ت ن', gloss: 'a trial' },
            { surface: 'لِّلْقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'prep+def.gen', gloss: 'for the people' },
            { surface: 'ٱلظَّٰلِمِينَ', lemma: 'ظَالِم', pos: 'noun', features: 'pl.def.gen', gloss: 'the wrongdoing' },
            { surface: 'وَنَجِّنَا', lemma: 'نَجَّى', pos: 'verb', features: 'conj+imp.2ms+1p', gloss: 'and save us' },
            { surface: 'بِرَحْمَتِكَ', lemma: 'رَحْمَة', pos: 'noun', features: 'prep+gen+2ms', gloss: 'by Your mercy' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'ٱلْقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'ٱلْكَٰفِرِينَ', lemma: 'كَافِر', pos: 'noun', features: 'pl.def.gen', gloss: 'the disbelieving' },
          ],
        },
      ],
      checks: [
        {
          q: 'هَلْ يَئِسَ مُوسَى مِنْ نَصْرِ اللَّهِ؟',
          options: ['لَا، لَمْ يَجْزَعْ وَلَمْ يَيْأَسْ', 'نَعَمْ، يَئِسَ تَمَاماً', 'تَرَكَ قَوْمَهُ وَذَهَبَ وَحْدَهُ'],
          answer: 0,
          qEn: "Did Mūsā despair of Allah's help?",
          optionsEn: ['No, he did not panic and did not despair', 'Yes, he despaired completely', 'He left his people and went off alone'],
        },
        {
          q: 'بِمَاذَا دَعَا مُوسَى قَوْمَهُ حِينَ آمَنُوا بِاللَّهِ؟',
          options: ['أَنْ يَتَوَكَّلُوا عَلَى اللَّهِ إِنْ كَانُوا مُسْلِمِينَ', 'أَنْ يُقَاتِلُوا فِرْعَوْنَ فَوْراً', 'أَنْ يَعُودُوا إِلَى دِينِ آبَائِهِمْ'],
          answer: 0,
          qEn: 'What did Mūsā call his people to do once they had believed in Allah?',
          optionsEn: ['To place their trust in Allah, if they were Muslims', 'To fight Pharaoh at once', 'To return to the religion of their forefathers'],
        },
      ],
    },
    {
      en: 'Pharaoh used to forbid the Children of Israel from worshiping Allah, and he would grow angry whenever he saw them worshiping Allah and praying to Him. He used to forbid them from taking mosques for Allah in his land, and he would grow angry that Allah should be worshiped in his land. How ignorant Pharaoh was! The earth belongs to Allah, not to Pharaoh! And who is more unjust than one who forbids Allah\'s servants from worshiping Allah on Allah\'s earth? And who is more unjust than one who calls people to worship himself on Allah\'s earth?',
      sentences: [
        {
          id: 'qs-v7-c04-018',
          ar: 'وَكَانَ فِرْعَوْنُ يَمْنَعُ بَنِي إِسْرَائِيلَ مِنْ عِبَادَةِ اللَّهِ،',
          en: 'Pharaoh used to forbid the Children of Israel from worshiping Allah,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and used to' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'يَمْنَعُ', lemma: 'مَنَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to forbid' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'عِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'constr.gen', gloss: 'worshiping' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v7-c04-019',
          ar: 'وَيَغْضَبُ إِذَا رَآهُمْ يَعْبُدُونَ اللَّهَ وَيُصَلُّونَ لَهُ.',
          en: 'and he would grow angry whenever he saw them worshiping Allah and praying to Him.',
          tokens: [
            { surface: 'وَيَغْضَبُ', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'and grows angry' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'part', features: 'part', gloss: 'whenever' },
            { surface: 'رَآهُمْ', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms+3mp', gloss: 'to see; he saw them' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'worshiping' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَيُصَلُّونَ', lemma: 'صَلَّى', pos: 'verb', features: 'conj+impf.3mp', gloss: 'and praying' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to Him' },
          ],
        },
        {
          id: 'qs-v7-c04-020',
          ar: 'وَكَانَ يَمْنَعُهُمْ مِنْ أَنْ يَتَّخِذُوا مَسَاجِدَ لِلَّهِ فِي أَرْضِهِ،',
          en: 'He used to forbid them from taking mosques for Allah in his land,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and used to' },
            { surface: 'يَمْنَعُهُمْ', lemma: 'مَنَعَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to forbid; forbid them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَتَّخِذُوا', lemma: 'اِتَّخَذَ', pos: 'verb', features: 'impf.3mp', gloss: 'to take, adopt' },
            { surface: 'مَسَاجِدَ', lemma: 'مَسْجِد', pos: 'noun', features: 'pl.indef.acc', gloss: 'mosques' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'for Allah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أَرْضِهِ', lemma: 'أَرْض', pos: 'noun', features: 'gen+3ms', gloss: 'his land' },
          ],
        },
        {
          id: 'qs-v7-c04-021',
          ar: 'وَكَانَ يَغْضَبُ أَنْ يُعْبَدَ اللَّهُ فِي أَرْضِهِ.',
          en: 'and he would grow angry that Allah should be worshiped in his land.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and used to' },
            { surface: 'يَغْضَبُ', lemma: 'غَضِبَ', pos: 'verb', features: 'impf.3ms', gloss: 'grow angry' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يُعْبَدَ', lemma: 'عَبَدَ', pos: 'verb', features: 'pass+impf.3ms', gloss: 'be worshiped' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أَرْضِهِ', lemma: 'أَرْض', pos: 'noun', features: 'gen+3ms', gloss: 'his land' },
          ],
        },
        {
          id: 'qs-v7-c04-022',
          ar: 'مَا أَجْهَلَ فِرْعَوْنَ!',
          en: 'How ignorant Pharaoh was!',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'part', gloss: 'how' },
            { surface: 'أَجْهَلَ', lemma: 'جَهِلَ', pos: 'verb', features: 'perf.3ms', root: 'ج ه ل', gloss: 'to be ignorant; how ignorant!' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'acc', gloss: 'Pharaoh' },
          ],
        },
        {
          id: 'qs-v7-c04-023',
          ar: 'الأَرْضُ لِلَّهِ لا لِفِرْعَوْنَ!',
          en: 'The earth belongs to Allah, not to Pharaoh!',
          tokens: [
            { surface: 'الأَرْضُ', lemma: 'أَرْض', pos: 'noun', features: 'def.nom', gloss: 'the earth' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'belongs to Allah' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'لِفِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'prep+gen', gloss: 'to Pharaoh' },
          ],
        },
        {
          id: 'qs-v7-c04-024',
          ar: 'وَمَنْ أَظْلَمُ مِمَّنْ مَنَعَ عِبَادَ اللَّهِ أَنْ يَعْبُدُوا اللَّهَ عَلَى أَرْضِ اللَّهِ؟!',
          en: "And who is more unjust than one who forbids Allah's servants from worshiping Allah on Allah's earth?!",
          tokens: [
            { surface: 'وَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and who' },
            { surface: 'أَظْلَمُ', lemma: 'أَظْلَم', pos: 'adj', features: 'nom', gloss: 'more unjust' },
            { surface: 'مِمَّنْ', lemma: 'مَنْ', pos: 'rel', features: 'prep+rel', gloss: 'than one who' },
            { surface: 'مَنَعَ', lemma: 'مَنَعَ', pos: 'verb', features: 'perf.3ms', gloss: 'forbids' },
            { surface: 'عِبَادَ', lemma: 'عَبْد', pos: 'noun', features: 'pl.acc.constr', gloss: "Allah's servants" },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'from' },
            { surface: 'يَعْبُدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'worshiping' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'أَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'constr.gen', gloss: "the earth of" },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v7-c04-025',
          ar: 'وَمَنْ أَظْلَمُ مِمَّنْ دَعَا إِلَى عِبَادَتِهِ عَلَى أَرْضِ اللَّهِ؟!',
          en: "And who is more unjust than one who calls people to worship himself on Allah's earth?!",
          tokens: [
            { surface: 'وَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and who' },
            { surface: 'أَظْلَمُ', lemma: 'أَظْلَم', pos: 'adj', features: 'nom', gloss: 'more unjust' },
            { surface: 'مِمَّنْ', lemma: 'مَنْ', pos: 'rel', features: 'prep+rel', gloss: 'than one who' },
            { surface: 'دَعَا', lemma: 'دَعَا', pos: 'verb', features: 'perf.3ms', gloss: 'calls' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'عِبَادَتِهِ', lemma: 'عِبَادَة', pos: 'noun', features: 'gen+3ms', gloss: 'worship of himself' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'أَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'constr.gen', gloss: "the earth of" },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ فِرْعَوْنُ يَمْنَعُ بَنِي إِسْرَائِيلَ مِنْهُ؟',
          options: ['مِنْ عِبَادَةِ اللَّهِ وَاتِّخَاذِ الْمَسَاجِدِ', 'مِنَ الزِّرَاعَةِ وَالتِّجَارَةِ', 'مِنَ الْخُرُوجِ مِنْ بُيُوتِهِمْ'],
          answer: 0,
          qEn: 'What did Pharaoh forbid the Children of Israel from?',
          optionsEn: ['From worshiping Allah and taking mosques', 'From farming and trade', 'From leaving their houses'],
        },
        {
          q: 'كَيْفَ وَصَفَ الرَّاوِي فِرْعَوْنَ حِينَ مَنَعَ النَّاسَ مِنْ عِبَادَةِ اللَّهِ؟',
          options: ['قَالَ مَا أَجْهَلَ فِرْعَوْنَ! وَمَنْ أَظْلَمُ مِمَّنْ مَنَعَهُمْ؟!', 'وَصَفَهُ بِالْحِكْمَةِ وَالْعَدْلِ', 'لَمْ يُعَلِّقْ عَلَى فِعْلِهِ'],
          answer: 0,
          qEn: 'How did the narrator describe Pharaoh when he forbade the people from worshiping Allah?',
          optionsEn: ["He said, 'How ignorant Pharaoh was! And who is more unjust than one who forbade them?!'", 'He described him as wise and just', 'He made no comment on his action'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَمَنْ',
        post: 'مِمَّنْ مَنَعَ عِبَادَ اللَّهِ أَنْ يَعْبُدُوا اللَّهَ؟!',
        en: "And who is more unjust than one who forbids Allah's servants from worshiping Allah?!",
        options: ['أَظْلَمُ', 'أَظْلَمَ', 'أَظْلَمٍ', 'ظَالِمٌ'],
        answer: 0,
        rationales: [
          'Nominative -- predicate of the interrogative مَنْ, matching the taught pattern.',
          'Accusative -- wrong case; nothing here governs the accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'A plain participle, not the elative -- wrong word for this comparison.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَفِي كُلِّ يَوْمٍ',
        post: 'جَدِيدَةٌ!',
        en: 'Every day brought a new ordeal!',
        options: ['مِحْنَةٌ', 'مِحْنَةً', 'مِحْنَةٍ', 'الْمِحْنَةُ'],
        answer: 0,
        rationales: [
          'Nominative, indefinite -- subject of the sentence, matching the taught pattern.',
          'Accusative -- wrong case; nothing here governs the accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Definite -- wrong; the point of the sentence is a NEW ordeal each day, indefinite.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَكِنَّ مُوسَى لَمْ',
        post: '!',
        en: 'But Mūsā did not despair!',
        options: ['يَيْأَسْ', 'يَيْأَسُ', 'يَئِسَ', 'يَيْأَسُونَ'],
        answer: 0,
        rationales: [
          'Jussive after لَمْ -- matches the taught pattern.',
          'Plain indicative -- wrong; لَمْ requires the jussive.',
          'Perfect -- wrong; لَمْ negates the imperfect (jussive), not the perfect.',
          'Plural -- wrong number; the subject مُوسَى is singular.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَمْنَعُ فِرْعَوْنُ بَنِي إِسْرَائِيلَ مِنَ الْعِبَادَةِ',
        pre: '',
        post: 'بَنِي إِسْرَائِيلَ مِنَ الْعِبَادَةِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَمْنَعُ', 'يَمْنَعُ', 'تَمْنَعُ', 'نَمْنَعُ'],
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
        base: 'يَمْنَعُ فِرْعَوْنُ بَنِي إِسْرَائِيلَ مِنَ الْعِبَادَةِ',
        pre: '',
        post: 'بَنِي إِسْرَائِيلَ مِنَ الْعِبَادَةِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَمْنَعُونَ', 'يَمْنَعُ', 'تَمْنَعُ', 'نَمْنَعُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَمْنَعُ فِرْعَوْنُ بَنِي إِسْرَائِيلَ مِنَ الْعِبَادَةِ',
        pre: '',
        post: 'بَنِي إِسْرَائِيلَ مِنَ الْعِبَادَةِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَمْنَعُ', 'يَمْنَعُ', 'تَمْنَعُ', 'يَمْنَعُونَ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '3rd masculine plural -- they.',
        ],
      },
    ],
  },
};

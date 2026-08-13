// قَصَصُ النَّبِيِّينَ, volume 9, chapter 5 -- فِقْهٌ دَقِيقٌ وَعِلْمٌ عَمِيقٌ.
// Printed pages 226 (from its own heading box, after ch4's closing āyah)
// through 227 (top two lines only), ending right before ch6's heading
// سُلَيْمَانُ يَعْرِفُ لُغَةَ الطَّيْرِ وَالْحَيَوَانِ on page 227. Transcribed by
// hand from the scan (vision OCR, 200dpi render) against
// ../CHAPTER-FORMAT.md.
//
// A single case study of Sulaymān's sharp fiqh, framed as a case referred
// to his father: sheep strayed into a vineyard by night and ruined its
// grapes; Dāwūd first ruled the flock itself belonged to the vineyard's
// owner as compensation, but Sulaymān proposed the milder ruling that
// prevailed instead -- hand the vineyard to the flock's owner to tend and
// the flock to the vineyard's owner to profit from, until the vineyard is
// restored, then return each to its rightful owner. Closes quoting Sūrat
// al-Anbiyāʾ 21:78-79, Allah's own confirmation of both prophets' judgment
// and understanding.
//
// Grammar / lexical notes:
//   -- دَفَعَتِ (unit 010/011, "she/it transferred") has no explicit stated
//      subject in the printed text; read as referring back to الْقَضِيَّة
//      ("the case/ruling," fem.) understood from context, matching how
//      Nadwi's prose often leaves a fem. subject implicit once established
//      -- glossed for sense as "the ruling then transferred."
//   -- قَضَى (new, "to rule, decide") and قَضِيَّة (already taught, "a case,
//      matter") share the root ق ض ي; kept as separate lemmas per the
//      house convention of not conflating a verb with its related noun.
//   -- The Anbiyāʾ 21:78-79 quote is wrapped in its own ﴿﴾ sentences and
//      split at natural clause breaks to stay at or under nine tokens each.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): حُكْم، قَضِيَّة، رَفَعَ،
//      وَالِد، عَظِيم، أَفْسَدَ، صَاحِب، دَفَعَ، قَامَ، حَتَّى، عَمِيق، حَرْث، غَيْر،
//      نَبِيّ، إِذْ، اللَّه، دَاوُد، سُلَيْمَان، كَانَ، قَالَ
//      are all already taught and are NOT re-listed in newWords here.
//
// 16 new words (تَجَلَّى، ذَكَاء، قُدْرَة، صَحِيح، كَرْم، أَنْبَتَ، عُنْقُود، غَنَم،
// قَضَى، أَصَابَ، خَصَّ، فِقْه، دَقِيق، نَفَشَ، شَاهِد، فَهَّمَ).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch5',
  title: { ar: 'فِقْهٌ دَقِيقٌ وَعِلْمٌ عَمِيقٌ', en: 'Precise Jurisprudence and Deep Knowledge' },
  newWords: ['تَجَلَّى', 'ذَكَاء', 'قُدْرَة', 'صَحِيح', 'كَرْم', 'أَنْبَتَ', 'عُنْقُود', 'غَنَم', 'قَضَى', 'أَصَابَ', 'خَصَّ', 'فِقْه', 'دَقِيق', 'نَفَشَ', 'شَاهِد', 'فَهَّمَ'],
  lemmas: {
    تَجَلَّى: { gloss: 'to become manifest, be revealed' },
    ذَكَاء: { gloss: 'sharpness of mind, intelligence' },
    قُدْرَة: { gloss: 'ability, capacity' },
    صَحِيح: { gloss: 'sound, correct' },
    كَرْم: { gloss: 'a vineyard' },
    أَنْبَتَ: { gloss: 'to sprout, bring forth growth' },
    عُنْقُود: { gloss: 'a bunch (of grapes)' },
    غَنَم: { gloss: 'sheep, a flock' },
    قَضَى: { gloss: 'to rule, decide' },
    أَصَابَ: { gloss: 'to profit from, obtain' },
    خَصَّ: { gloss: 'to single out, grant specially' },
    فِقْه: { gloss: 'jurisprudence, understanding of law' },
    دَقِيق: { gloss: 'precise, fine' },
    نَفَشَ: { gloss: 'to stray and graze by night' },
    شَاهِد: { gloss: 'a witness' },
    فَهَّمَ: { gloss: 'to grant understanding to' },
  },
  paragraphs: [
    {
      en: "His sharpness of mind and his ability to judge correctly became manifest in a case referred to his great father: some people had a vineyard whose bunches had just sprouted, and another people's sheep strayed into it by night and ruined it. Dāwūd ruled that the sheep should go to the vineyard's owner. Sulaymān said: other than this, O Prophet of Allah. He said: what is that? He said: hand the vineyard to the sheep's owner, so he tends it as it was, and hand the sheep to the vineyard's owner, so he profits from them, until, once the vineyard is as it was, the ruling transfers the vineyard back to its owner and transfers the sheep back to their owner. Allah granted him precise jurisprudence and deep knowledge, and said: \"And Dāwūd and Sulaymān, when they judged concerning the field, when the sheep of a people strayed into it by night, and We were witness to their judgment -- and We gave understanding of it to Sulaymān, and to each We had given judgment and knowledge.\"",
      sentences: [
        {
          id: 'qs-v9-c05-001',
          ar: 'وَقَدْ تَجَلَّى ذَكَاؤُهُ وَقُدْرَتُهُ عَلَى الْحُكْمِ الصَّحِيحِ',
          en: 'His sharpness of mind and his ability to judge correctly became manifest',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'تَجَلَّى', lemma: 'تَجَلَّى', pos: 'verb', features: 'perf.3ms', root: 'ج ل و', gloss: 'to become manifest; became manifest' },
            { surface: 'ذَكَاؤُهُ', lemma: 'ذَكَاء', pos: 'noun', features: 'nom+3ms', gloss: 'his sharpness of mind' },
            { surface: 'وَقُدْرَتُهُ', lemma: 'قُدْرَة', pos: 'noun', features: 'conj+nom+3ms', gloss: 'and his ability' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْحُكْمِ', lemma: 'حُكْم', pos: 'noun', features: 'def.gen', gloss: 'judge' },
            { surface: 'الصَّحِيحِ', lemma: 'صَحِيح', pos: 'adj', features: 'def.gen', gloss: 'correctly' },
          ],
        },
        {
          id: 'qs-v9-c05-002',
          ar: 'فِي قَضِيَّةٍ رُفِعَتْ إِلَى وَالِدِهِ الْعَظِيمِ،',
          en: 'in a case referred to his great father:',
          tokens: [
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'قَضِيَّةٍ', lemma: 'قَضِيَّة', pos: 'noun', features: 'indef.gen', gloss: 'a case' },
            { surface: 'رُفِعَتْ', lemma: 'رَفَعَ', pos: 'verb', features: 'pass+perf.3fs', gloss: 'to raise, refer; was referred' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'وَالِدِهِ', lemma: 'وَالِد', pos: 'noun', features: 'gen+3ms', gloss: 'his father' },
            { surface: 'الْعَظِيمِ', lemma: 'عَظِيم', pos: 'adj', features: 'def.gen', gloss: 'the great' },
          ],
        },
        {
          id: 'qs-v9-c05-003',
          ar: 'فَكَانَ لِقَوْمٍ كَرْمٌ قَدْ أَنْبَتَتْ عَنَاقِيدَهُ،',
          en: 'some people had a vineyard whose bunches had just sprouted,',
          tokens: [
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'لِقَوْمٍ', lemma: 'قَوْم', pos: 'noun', features: 'prep+indef.gen', gloss: 'for some people' },
            { surface: 'كَرْمٌ', lemma: 'كَرْم', pos: 'noun', features: 'indef.nom', gloss: 'a vineyard' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'had' },
            { surface: 'أَنْبَتَتْ', lemma: 'أَنْبَتَ', pos: 'verb', features: 'perf.3fs', root: 'ن ب ت', gloss: 'to sprout; sprouted' },
            { surface: 'عَنَاقِيدَهُ', lemma: 'عُنْقُود', pos: 'noun', features: 'pl.acc+3ms', gloss: 'its bunches' },
          ],
        },
        {
          id: 'qs-v9-c05-004',
          ar: 'فَدَخَلَتْ فِيهِ غَنَمٌ لِقَوْمٍ فَأَفْسَدَتْهُ،',
          en: "and another people's sheep strayed into it by night and ruined it.",
          tokens: [
            { surface: 'فَدَخَلَتْ', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to enter; and entered' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'into it' },
            { surface: 'غَنَمٌ', lemma: 'غَنَم', pos: 'noun', features: 'indef.nom', gloss: 'sheep' },
            { surface: 'لِقَوْمٍ', lemma: 'قَوْم', pos: 'noun', features: 'prep+indef.gen', gloss: 'of a people' },
            { surface: 'فَأَفْسَدَتْهُ', lemma: 'أَفْسَدَ', pos: 'verb', features: 'conj+perf.3fs+3ms', gloss: 'to ruin; and ruined it' },
          ],
        },
        {
          id: 'qs-v9-c05-005',
          ar: 'فَقَضَى دَاوُدُ بِالْغَنَمِ لِصَاحِبِ الْكَرْمِ،',
          en: "Dāwūd ruled that the sheep should go to the vineyard's owner.",
          tokens: [
            { surface: 'فَقَضَى', lemma: 'قَضَى', pos: 'verb', features: 'conj+perf.3ms', root: 'ق ض ي', gloss: 'to rule, decide; and ruled' },
            { surface: 'دَاوُدُ', lemma: 'دَاوُد', pos: 'proper', features: 'nom', gloss: 'Dāwūd' },
            { surface: 'بِالْغَنَمِ', lemma: 'غَنَم', pos: 'noun', features: 'prep+def.gen', gloss: 'with the sheep' },
            { surface: 'لِصَاحِبِ', lemma: 'صَاحِب', pos: 'noun', features: 'prep+constr.gen', gloss: 'to the owner of' },
            { surface: 'الْكَرْمِ', lemma: 'كَرْم', pos: 'noun', features: 'def.gen', gloss: 'the vineyard' },
          ],
        },
        {
          id: 'qs-v9-c05-006',
          ar: 'فَقَالَ سُلَيْمَانُ: غَيْرَ هَذَا يَا نَبِيَّ اللَّهِ،',
          en: 'Sulaymān said: other than this, O Prophet of Allah.',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
            { surface: 'سُلَيْمَانُ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'nom', gloss: 'Sulaymān' },
            { surface: 'غَيْرَ', lemma: 'غَيْر', pos: 'noun', features: 'acc.constr', gloss: 'other than' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem', gloss: 'this' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'نَبِيَّ', lemma: 'نَبِيّ', pos: 'noun', features: 'acc.constr', gloss: 'Prophet of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v9-c05-007',
          ar: 'قَالَ: وَمَا ذَاكَ؟',
          en: 'He said: what is that?',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+part', gloss: 'and what' },
            { surface: 'ذَاكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'is that' },
          ],
        },
        {
          id: 'qs-v9-c05-008',
          ar: 'قَالَ: تَدْفَعُ الْكَرْمَ إِلَى صَاحِبِ الْغَنَمِ فَيَقُومُ عَلَيْهِ كَمَا كَانَ،',
          en: 'He said: hand the vineyard to the sheep\'s owner, so he tends it as it was,',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'تَدْفَعُ', lemma: 'دَفَعَ', pos: 'verb', features: 'impf.2ms', gloss: 'to hand over; hand over' },
            { surface: 'الْكَرْمَ', lemma: 'كَرْم', pos: 'noun', features: 'def.acc', gloss: 'the vineyard' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'صَاحِبِ', lemma: 'صَاحِب', pos: 'noun', features: 'constr.gen', gloss: 'the owner of' },
            { surface: 'الْغَنَمِ', lemma: 'غَنَم', pos: 'noun', features: 'def.gen', gloss: 'the sheep' },
            { surface: 'فَيَقُومُ', lemma: 'قَامَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to tend, stand to; so he tends' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'it' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'as' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; it was' },
          ],
        },
        {
          id: 'qs-v9-c05-009',
          ar: 'وَتَدْفَعُ الْغَنَمَ إِلَى صَاحِبِ الْكَرْمِ فَيُصِيبُ مِنْهَا،',
          en: "and hand the sheep to the vineyard's owner, so he profits from them,",
          tokens: [
            { surface: 'وَتَدْفَعُ', lemma: 'دَفَعَ', pos: 'verb', features: 'conj+impf.2ms', gloss: 'to hand over; and hand over' },
            { surface: 'الْغَنَمَ', lemma: 'غَنَم', pos: 'noun', features: 'def.acc', gloss: 'the sheep' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'صَاحِبِ', lemma: 'صَاحِب', pos: 'noun', features: 'constr.gen', gloss: 'the owner of' },
            { surface: 'الْكَرْمِ', lemma: 'كَرْم', pos: 'noun', features: 'def.gen', gloss: 'the vineyard' },
            { surface: 'فَيُصِيبُ', lemma: 'أَصَابَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ص و ب', gloss: 'to profit from; so he profits' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from them' },
          ],
        },
        {
          id: 'qs-v9-c05-010',
          ar: 'حَتَّى إِذَا كَانَ الْكَرْمُ كَمَا كَانَ دَفَعَتِ الْكَرْمَ إِلَى صَاحِبِهِ',
          en: 'until, once the vineyard is as it was, the ruling transfers the vineyard back to its owner',
          tokens: [
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'part', features: 'part', gloss: 'until' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'conj', features: 'conj', gloss: 'when' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; is' },
            { surface: 'الْكَرْمُ', lemma: 'كَرْم', pos: 'noun', features: 'def.nom', gloss: 'the vineyard' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'as' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; it was' },
            { surface: 'دَفَعَتِ', lemma: 'دَفَعَ', pos: 'verb', features: 'perf.3fs', gloss: 'to hand over, transfer; transfers' },
            { surface: 'الْكَرْمَ', lemma: 'كَرْم', pos: 'noun', features: 'def.acc', gloss: 'the vineyard' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'صَاحِبِهِ', lemma: 'صَاحِب', pos: 'noun', features: 'gen+3ms', gloss: 'its owner' },
          ],
        },
        {
          id: 'qs-v9-c05-011',
          ar: 'وَدَفَعَتِ الْغَنَمَ إِلَى صَاحِبِهَا.',
          en: 'and transfers the sheep back to their owner.',
          tokens: [
            { surface: 'وَدَفَعَتِ', lemma: 'دَفَعَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to transfer; and transfers' },
            { surface: 'الْغَنَمَ', lemma: 'غَنَم', pos: 'noun', features: 'def.acc', gloss: 'the sheep' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'صَاحِبِهَا', lemma: 'صَاحِب', pos: 'noun', features: 'gen+3fs', gloss: 'their owner' },
          ],
        },
        {
          id: 'qs-v9-c05-012',
          ar: 'وَخَصَّهُ اللَّهُ بِفِقْهٍ دَقِيقٍ وَعِلْمٍ عَمِيقٍ',
          en: 'Allah granted him precise jurisprudence and deep knowledge,',
          tokens: [
            { surface: 'وَخَصَّهُ', lemma: 'خَصَّ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'خ ص ص', gloss: 'to single out, grant specially; and granted him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'بِفِقْهٍ', lemma: 'فِقْه', pos: 'noun', features: 'prep+indef.gen', root: 'ف ق ه', gloss: 'with jurisprudence' },
            { surface: 'دَقِيقٍ', lemma: 'دَقِيق', pos: 'adj', features: 'indef.gen', gloss: 'precise' },
            { surface: 'وَعِلْمٍ', lemma: 'عِلْم', pos: 'noun', features: 'conj+indef.gen', gloss: 'and knowledge' },
            { surface: 'عَمِيقٍ', lemma: 'عَمِيق', pos: 'adj', features: 'indef.gen', gloss: 'deep' },
          ],
        },
        {
          id: 'qs-v9-c05-013',
          ar: 'فَقَالَ:',
          en: 'and said:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v9-c05-014',
          ar: '﴿وَدَاوُودَ وَسُلَيْمَانَ إِذْ يَحْكُمَانِ فِي الْحَرْثِ﴾',
          en: '"And Dāwūd and Sulaymān, when they judged concerning the field,',
          tokens: [
            { surface: 'وَدَاوُودَ', lemma: 'دَاوُد', pos: 'proper', features: 'conj+acc', gloss: 'and Dāwūd' },
            { surface: 'وَسُلَيْمَانَ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'conj+acc', gloss: 'and Sulaymān' },
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'يَحْكُمَانِ', lemma: 'حَكَمَ', pos: 'verb', features: 'impf.3md', gloss: 'to judge; they both judged' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'concerning' },
            { surface: 'الْحَرْثِ', lemma: 'حَرْث', pos: 'noun', features: 'def.gen', gloss: 'the field' },
          ],
        },
        {
          id: 'qs-v9-c05-015',
          ar: '﴿إِذْ نَفَشَتْ فِيهِ غَنَمُ الْقَوْمِ﴾',
          en: 'when the sheep of a people strayed into it by night,',
          tokens: [
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'نَفَشَتْ', lemma: 'نَفَشَ', pos: 'verb', features: 'perf.3fs', root: 'ن ف ش', gloss: 'to stray by night; strayed' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'into it' },
            { surface: 'غَنَمُ', lemma: 'غَنَم', pos: 'noun', features: 'constr.nom', gloss: 'the sheep of' },
            { surface: 'الْقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'def.gen', gloss: 'a people' },
          ],
        },
        {
          id: 'qs-v9-c05-016',
          ar: '﴿وَكُنَّا لِحُكْمِهِمْ شَاهِدِينَ﴾',
          en: 'and We were witness to their judgment --',
          tokens: [
            { surface: 'وَكُنَّا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.1p', gloss: 'to be; and We were' },
            { surface: 'لِحُكْمِهِمْ', lemma: 'حُكْم', pos: 'noun', features: 'prep+gen+3mp', gloss: 'to their judgment' },
            { surface: 'شَاهِدِينَ', lemma: 'شَاهِد', pos: 'noun', features: 'pl.acc', root: 'ش ه د', gloss: 'witness' },
          ],
        },
        {
          id: 'qs-v9-c05-017',
          ar: '﴿فَفَهَّمْنَاهَا سُلَيْمَانَ﴾',
          en: 'and We gave understanding of it to Sulaymān,',
          tokens: [
            { surface: 'فَفَهَّمْنَاهَا', lemma: 'فَهَّمَ', pos: 'verb', features: 'conj+perf.1p+3fs', root: 'ف ه م', gloss: 'to grant understanding; and We gave understanding of it' },
            { surface: 'سُلَيْمَانَ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'acc', gloss: 'to Sulaymān' },
          ],
        },
        {
          id: 'qs-v9-c05-018',
          ar: '﴿وَكُلاًّ آتَيْنَا حُكْماً وَعِلْماً﴾.',
          en: 'and to each We had given judgment and knowledge."',
          tokens: [
            { surface: 'وَكُلاًّ', lemma: 'كُلّ', pos: 'noun', features: 'conj+indef.acc', gloss: 'and to each' },
            { surface: 'آتَيْنَا', lemma: 'آتَى', pos: 'verb', features: 'perf.1p', gloss: 'to give; We gave' },
            { surface: 'حُكْماً', lemma: 'حُكْم', pos: 'noun', features: 'indef.acc', gloss: 'judgment' },
            { surface: 'وَعِلْماً', lemma: 'عِلْم', pos: 'noun', features: 'conj+indef.acc', gloss: 'and knowledge' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَا الْقَضِيَّةُ الَّتِي رُفِعَتْ إِلَى دَاوُدَ؟',
          options: ['غَنَمٌ دَخَلَتْ لَيْلاً إِلَى كَرْمٍ فَأَفْسَدَتْهُ', 'سَرِقَةُ مَالٍ', 'نِزَاعٌ عَلَى بَيْتٍ'],
          answer: 0,
          qEn: 'What case was referred to Dāwūd?',
          optionsEn: ["Sheep that had strayed by night into a vineyard and ruined it", "A theft of money", "A dispute over a house"],
        },
        {
          q: 'بِمَاذَا قَضَى دَاوُدُ أَوَّلاً؟',
          options: ['بِالْغَنَمِ لِصَاحِبِ الْكَرْمِ', 'بِالْكَرْمِ لِصَاحِبِ الْغَنَمِ', 'بِأَلَّا يُعَوَّضَ أَحَدٌ'],
          answer: 0,
          qEn: 'What did Dāwūd rule first?',
          optionsEn: ["That the sheep should go to the vineyard's owner", "That the vineyard should go to the sheep's owner", "That no one should be compensated"],
        },
        {
          q: 'مَاذَا اقْتَرَحَ سُلَيْمَانُ بَدَلاً مِنْ ذَلِكَ؟',
          options: ['أَنْ يَتَبَادَلَا الِانْتِفَاعَ حَتَّى يَعُودَ الْكَرْمُ كَمَا كَانَ ثُمَّ يُرَدَّ كُلٌّ إِلَى صَاحِبِهِ', 'أَنْ يُبَاعَ الْكَرْمُ وَالْغَنَمُ مَعاً', 'أَلَّا يُحْكَمَ فِي الْقَضِيَّةِ أَصْلاً'],
          answer: 0,
          qEn: 'What did Sulaymān propose instead?',
          optionsEn: ['That the two owners exchange use until the vineyard was restored, then each be returned to its owner', 'That the vineyard and sheep both be sold', 'That the case not be judged at all'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَدَخَلَتْ فِيهِ غَنَمٌ لِقَوْمٍ',
        post: '.',
        en: "and another people's sheep strayed into it and ruined it.",
        options: ['فَأَفْسَدَتْهُ', 'فَأَفْسَدَتْهَا', 'فَأَفْسَدَهُ', 'أَفْسَدَ'],
        answer: 0,
        rationales: [
          '3rd feminine singular (agreeing with غَنَمٌ) + masculine object (agreeing with الْكَرْمُ) -- "and it ruined it," matching the printed فَأَفْسَدَتْهُ.',
          'Feminine object suffix -- wrong; the ruined thing is the vineyard الْكَرْمُ, a masculine word.',
          'Masculine subject -- wrong gender; غَنَمٌ takes a feminine verb here.',
          'No connecting فَ and no object suffix -- wrong; the sentence needs both the sequencing particle and "it" as object.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ اللَّهُ: وَدَاوُودَ وَسُلَيْمَانَ إِذْ',
        post: 'فِي الْحَرْثِ.',
        en: 'Allah said: "And Dāwūd and Sulaymān, when they judged concerning the field.',
        options: ['يَحْكُمَانِ', 'يَحْكُمُ', 'يَحْكُمُونَ', 'حَكَمَا'],
        answer: 0,
        rationales: [
          '3rd masculine dual imperfect -- matches the two named subjects دَاوُودَ وَسُلَيْمَانَ, matching the printed يَحْكُمَانِ.',
          'Singular -- wrong number; two subjects are named.',
          'Plural -- wrong number; exactly two subjects are named, which takes the dual, not the plural.',
          'Perfect dual -- wrong tense; the scene is described as ongoing (indicative imperfect), not as a completed action.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَفَهَّمْنَاهَا سُلَيْمَانَ وَكُلاًّ آتَيْنَا',
        post: 'وَعِلْماً.',
        en: 'and We gave understanding of it to Sulaymān, and to each We had given judgment and knowledge.',
        options: ['حُكْماً', 'حُكْمٌ', 'حُكْمِ', 'الْحُكْمَ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- second object of آتَيْنَا, matching the printed آتَيْنَا حُكْماً وَعِلْماً.',
          'Nominative -- wrong case; the second object of آتَى is accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Definite -- wrong; the printed word is indefinite, paired with the equally indefinite وَعِلْماً.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَقْضِي الْحَاكِمُ بِالْحَقِّ',
        pre: '',
        post: 'بِالْحَقِّ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَقْضِي', 'يَقْضِي', 'تَقْضِي', 'نَقْضِي'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'تَدْفَعُ الْمَرْأَةُ الْكَرْمَ إِلَى صَاحِبِهِ',
        pre: '',
        post: 'الْكَرْمَ إِلَى صَاحِبِهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَدْفَعُونَ', 'تَدْفَعُ', 'أَدْفَعُ', 'نَدْفَعُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd feminine singular -- the base form, not shifted to "they."',
          '1st singular -- wrong person; the target is "they," not "I."',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يُصِيبُ الرَّجُلُ خَيْراً مِنَ الْغَنَمِ',
        pre: '',
        post: 'خَيْراً مِنَ الْغَنَمِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نُصِيبُ', 'يُصِيبُ', 'تُصِيبُ', 'أُصِيبُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- wrong person; this is "we," not "you."',
          '1st singular -- wrong number; the target is plural نَحْنُ, not "I."',
        ],
      },
    ],
  },
};

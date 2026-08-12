// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 7 -- مِنَ
// التَّمَاثِيلِ إِلَى الأَصْنَامِ. Printed pages 66 (bottom, right after ch6's
// closing line and the heading) through 67 (top, ending before ch8's
// heading غَضَبُ اللَّهِ partway down the same page). Transcribed by hand
// from the scan (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// The final, fatal step: once the generation that remembered the righteous
// men themselves has died out (وَمَضَى هَؤُلَاءِ), their children only ever
// see the statues being kissed, touched, and bowed to -- with no memory of
// why. Each generation goes further than the last, until the statues are
// prostrated to, prayed to, and sacrificed to, and become outright gods
// alongside (then instead of) Allah. The chapter closes by naming the five
// idols of Nūḥ's people from Sūrat Nūḥ 71:23 -- وَدّ، سُوَاع، يَغُوث، يَعُوق،
// نَسْر -- the same five the Qur'an itself names.
//
// The long printed sentences here are split at their internal commas into
// several shorter sentence entries (rather than kept as one long entry per
// ch6's practice) so enough of them land in the 3-9 token buildable range
// -- the validator's "buildable" heuristic otherwise flags the chapter for
// having too few short, case-marked practice sentences. Splitting at
// existing clause/comma boundaries preserves the printed word order and
// meaning exactly; nothing is reworded.
//
// Grammar / lexical notes:
//   -- قَبْلُ (qs-v3-c07-010, مِنْ قَبْلُ) is already taught (qasas-v2
//      ch19/20/21/24), tagged lemma قَبْلَ per that precedent even though
//      this indeclinable adverbial form ends in damma rather than fatha.
//   -- إِلَٰه (qs-v3-c07-009/011, plural آلِهَة) is already taught (qasas-v1
//      ch5/6); صَنَم (qs-v3-c07-009, plural الأَصْنَام) is already taught
//      (qasas-v1 ch1/2) -- the chapter's own title marks the shift from one
//      to the other.
//   -- وَدّ، سُوَاع، يَغُوث، يَعُوق، نَسْر (qs-v3-c07-012/013) are five new
//      proper nouns, tagged pos 'proper' with no def/indef marking
//      (matching the إِبْلِيس/آدَم convention) even though three of the five
//      carry surface tanween in print -- ordinary triptote/diptote
//      variation among proper nouns, not a grammatical feature worth
//      encoding.
//   -- صَارَ (qs-v3-c07-006/007/008/009 x2) is a new "kāna-sister" -- its
//      predicate is accusative, e.g. آلِهَةً in qs-v3-c07-009.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): هَؤُلَاءِ، رَأَى، وَلَد، أَب،
//      تَبَرَّكَ، بِ، عَظَّمَ، تَعْظِيم، شَدِيد، كَانَ، تِمْثَال، دَعَا، عِنْدَ، رَأْس، اِبْن،
//      عَلَى، سَجَدَ، لِ، سَأَلَ، ذَبَحَ، هَكَذَا، النَّاس، عَبَدَ، اللَّه، كَمَا، مِنْ، كَثُرَ،
//      فِي، هَذَا، ذَلِكَ
//      are all already taught and are NOT re-listed in newWords here.
//
// 12 new words (مَضَى، قَبَّلَ، لَمَسَ، خَفَضَ، رَكَعَ، زَادَ، صَارَ، وَدّ، سُوَاع،
// يَغُوث، يَعُوق، نَسْر).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch7',
  title: { ar: 'مِنَ التَّمَاثِيلِ إِلَى الأَصْنَامِ', en: 'From Statues to Idols' },
  newWords: ['مَضَى', 'قَبَّلَ', 'لَمَسَ', 'خَفَضَ', 'رَكَعَ', 'زَادَ', 'صَارَ', 'وَدّ', 'سُوَاع', 'يَغُوث', 'يَعُوق', 'نَسْر'],
  lemmas: {
    مَضَى: { gloss: 'to pass, pass away' },
    قَبَّلَ: { gloss: 'to kiss' },
    لَمَسَ: { gloss: 'to touch' },
    خَفَضَ: { gloss: 'to lower' },
    رَكَعَ: { gloss: 'to bow, kneel' },
    زَادَ: { gloss: 'to increase, exceed' },
    صَارَ: { gloss: 'to become' },
    وَدّ: { gloss: 'Wadd (name of an idol worshiped by Nūḥ’s people)' },
    سُوَاع: { gloss: 'Suwāʿ (name of an idol worshiped by Nūḥ’s people)' },
    يَغُوث: { gloss: 'Yaghūth (name of an idol worshiped by Nūḥ’s people)' },
    يَعُوق: { gloss: 'Yaʿūq (name of an idol worshiped by Nūḥ’s people)' },
    نَسْر: { gloss: 'Nasr (name of an idol worshiped by Nūḥ’s people)' },
  },
  paragraphs: [
    {
      en: "Once the men who first made the statues have passed away, their children grow up only ever seeing their fathers kiss and touch the statues and pray beside them, lowering their heads and bowing -- so the sons go further still, prostrating to them, asking of them, and sacrificing to them. And so the statues become outright gods, worshiped just as Allah once was, and these gods multiply among them: this is Wadd, that is Suwāʿ, this is Yaghūth, that is Yaʿūq, and this is Nasr.",
      sentences: [
        {
          id: 'qs-v3-c07-001',
          ar: 'وَمَضَى هَؤُلَاءِ، وَرَأَى الأَوْلَادُ آبَاءَهُمْ يَتَبَرَّكُونَ بِهَا',
          en: 'These men passed away, and the children saw their fathers seeking blessing through them,',
          tokens: [
            { surface: 'وَمَضَى', lemma: 'مَضَى', pos: 'verb', features: 'conj+perf.3ms', root: 'م ض ي', gloss: 'to pass, pass away; and passed away' },
            { surface: 'هَؤُلَاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'these' },
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to see; and saw' },
            { surface: 'الأَوْلَادُ', lemma: 'وَلَد', pos: 'noun', features: 'def.nom.pl', gloss: 'the children' },
            { surface: 'آبَاءَهُمْ', lemma: 'أَب', pos: 'noun', features: 'acc.pl+3mp', gloss: 'their fathers' },
            { surface: 'يَتَبَرَّكُونَ', lemma: 'تَبَرَّكَ', pos: 'verb', features: 'impf.3mp', root: 'ب ر ك', gloss: 'to seek blessing; seeking blessing' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'through them' },
          ],
        },
        {
          id: 'qs-v3-c07-002',
          ar: 'وَرَأَوْا آبَاءَهُمْ يُعَظِّمُونَهَا تَعْظِيمًا شَدِيدًا.',
          en: 'and saw their fathers revering them intensely.',
          tokens: [
            { surface: 'وَرَأَوْا', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to see; and saw' },
            { surface: 'آبَاءَهُمْ', lemma: 'أَب', pos: 'noun', features: 'acc.pl+3mp', gloss: 'their fathers' },
            { surface: 'يُعَظِّمُونَهَا', lemma: 'عَظَّمَ', pos: 'verb', features: 'impf.3mp+3fs', gloss: 'to revere; revering them' },
            { surface: 'تَعْظِيمًا', lemma: 'تَعْظِيم', pos: 'noun', features: 'indef.acc', root: 'ع ظ م', gloss: 'a reverence, i.e. intensely' },
            { surface: 'شَدِيدًا', lemma: 'شَدِيد', pos: 'adj', features: 'indef.acc', gloss: 'intense' },
          ],
        },
        {
          id: 'qs-v3-c07-003',
          ar: 'وَكَانُوا يَرَوْنَهُمْ يُقَبِّلُونَ هَذِهِ التَّمَاثِيلَ،',
          en: 'They would see them kissing these statues,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and they were' },
            { surface: 'يَرَوْنَهُمْ', lemma: 'رَأَى', pos: 'verb', features: 'impf.3mp+3mp', gloss: 'to see; they see them' },
            { surface: 'يُقَبِّلُونَ', lemma: 'قَبَّلَ', pos: 'verb', features: 'impf.3mp', root: 'ق ب ل', gloss: 'to kiss; kissing' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'التَّمَاثِيلَ', lemma: 'تِمْثَال', pos: 'noun', features: 'def.acc.pl', root: 'م ث ل', gloss: 'the statues' },
          ],
        },
        {
          id: 'qs-v3-c07-004',
          ar: 'وَيَلْمَسُونَهَا وَيَدْعُونَ عِنْدَهَا.',
          en: 'touching them, and praying beside them.',
          tokens: [
            { surface: 'وَيَلْمَسُونَهَا', lemma: 'لَمَسَ', pos: 'verb', features: 'conj+impf.3mp+3fs', root: 'ل م س', gloss: 'to touch; and touching them' },
            { surface: 'وَيَدْعُونَ', lemma: 'دَعَا', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to call, pray; and praying' },
            { surface: 'عِنْدَهَا', lemma: 'عِنْدَ', pos: 'adv', features: 'adv+3fs', gloss: 'beside them' },
          ],
        },
        {
          id: 'qs-v3-c07-005',
          ar: 'وَكَانُوا يَرَوْنَهُمْ يَخْفِضُونَ رُءُوسَهُمْ',
          en: 'They would see them lowering their heads',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and they were' },
            { surface: 'يَرَوْنَهُمْ', lemma: 'رَأَى', pos: 'verb', features: 'impf.3mp+3mp', gloss: 'to see; they see them' },
            { surface: 'يَخْفِضُونَ', lemma: 'خَفَضَ', pos: 'verb', features: 'impf.3mp', root: 'خ ف ض', gloss: 'to lower; lowering' },
            { surface: 'رُءُوسَهُمْ', lemma: 'رَأْس', pos: 'noun', features: 'acc.pl+3mp', root: 'ر أ س', gloss: 'their heads' },
          ],
        },
        {
          id: 'qs-v3-c07-006',
          ar: 'وَيَرْكَعُونَ عِنْدَهَا فَزَادَ الأَبْنَاءُ عَلَى الآبَاءِ،',
          en: 'and bowing beside them, so the sons went further than the fathers,',
          tokens: [
            { surface: 'وَيَرْكَعُونَ', lemma: 'رَكَعَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ر ك ع', gloss: 'to bow, kneel; and bowing' },
            { surface: 'عِنْدَهَا', lemma: 'عِنْدَ', pos: 'adv', features: 'adv+3fs', gloss: 'beside them' },
            { surface: 'فَزَادَ', lemma: 'زَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ز ي د', gloss: 'to increase, exceed; so exceeded' },
            { surface: 'الأَبْنَاءُ', lemma: 'اِبْن', pos: 'noun', features: 'def.nom.pl', root: 'ب ن ي', gloss: 'the sons' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over, beyond' },
            { surface: 'الآبَاءِ', lemma: 'أَب', pos: 'noun', features: 'def.gen.pl', gloss: 'the fathers' },
          ],
        },
        {
          id: 'qs-v3-c07-007',
          ar: 'وَصَارُوا يَسْجُدُونَ لَهَا.',
          en: 'and began prostrating to them.',
          tokens: [
            { surface: 'وَصَارُوا', lemma: 'صَارَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ص ي ر', gloss: 'to become; and began to' },
            { surface: 'يَسْجُدُونَ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to prostrate; prostrating' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v3-c07-008',
          ar: 'وَصَارُوا يَسْأَلُونَهَا، وَيَذْبَحُونَ لَهَا.',
          en: 'They began asking of them, and sacrificing to them.',
          tokens: [
            { surface: 'وَصَارُوا', lemma: 'صَارَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ص ي ر', gloss: 'to become; and began to' },
            { surface: 'يَسْأَلُونَهَا', lemma: 'سَأَلَ', pos: 'verb', features: 'impf.3mp+3fs', gloss: 'to ask; asking of them' },
            { surface: 'وَيَذْبَحُونَ', lemma: 'ذَبَحَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to sacrifice; and sacrificing' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v3-c07-009',
          ar: 'وَهَكَذَا صَارَتْ هَذِهِ الأَصْنَامُ آلِهَةً،',
          en: 'Thus these idols became gods,',
          tokens: [
            { surface: 'وَهَكَذَا', lemma: 'هَكَذَا', pos: 'adv', features: 'conj+adv', gloss: 'and thus' },
            { surface: 'صَارَتْ', lemma: 'صَارَ', pos: 'verb', features: 'perf.3fs', root: 'ص ي ر', gloss: 'to become; became' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'الأَصْنَامُ', lemma: 'صَنَم', pos: 'noun', features: 'def.nom.pl', gloss: 'the idols' },
            { surface: 'آلِهَةً', lemma: 'إِلَٰه', pos: 'noun', features: 'indef.acc.pl', gloss: 'gods' },
          ],
        },
        {
          id: 'qs-v3-c07-010',
          ar: 'وَصَارَ النَّاسُ يَعْبُدُونَهَا كَمَا كَانُوا يَعْبُدُونَ اللَّهَ مِنْ قَبْلُ.',
          en: 'and the people began worshiping them as they had worshiped Allah before.',
          tokens: [
            { surface: 'وَصَارَ', lemma: 'صَارَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ص ي ر', gloss: 'to become; and began to' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'يَعْبُدُونَهَا', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp+3fs', gloss: 'to worship; worshiping them' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; they were' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to worship; worshiping' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَبْلُ', lemma: 'قَبْلَ', pos: 'adv', features: 'adv', gloss: 'before, previously' },
          ],
        },
        {
          id: 'qs-v3-c07-011',
          ar: 'وَكَثُرَتْ هَذِهِ الآلِهَةُ فِيهِمْ.',
          en: 'These gods multiplied among them.',
          tokens: [
            { surface: 'وَكَثُرَتْ', lemma: 'كَثُرَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to multiply, increase; and multiplied' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'الآلِهَةُ', lemma: 'إِلَٰه', pos: 'noun', features: 'def.nom.pl', gloss: 'the gods' },
            { surface: 'فِيهِمْ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
          ],
        },
        {
          id: 'qs-v3-c07-012',
          ar: 'هَذَا وَدٌّ، وَذَلِكَ سُوَاعٌ، وَهَذَا يَغُوثُ،',
          en: 'This is Wadd, that is Suwāʿ, this is Yaghūth,',
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'وَدٌّ', lemma: 'وَدّ', pos: 'proper', features: 'nom', gloss: 'Wadd' },
            { surface: 'وَذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'conj+dem.m', gloss: 'and that' },
            { surface: 'سُوَاعٌ', lemma: 'سُوَاع', pos: 'proper', features: 'nom', gloss: 'Suwāʿ' },
            { surface: 'وَهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'conj+dem.m', gloss: 'and this' },
            { surface: 'يَغُوثُ', lemma: 'يَغُوث', pos: 'proper', features: 'nom', gloss: 'Yaghūth' },
          ],
        },
        {
          id: 'qs-v3-c07-013',
          ar: 'وَذَلِكَ يَعُوقُ، وَهَذَا نَسْرٌ.',
          en: 'that is Yaʿūq, and this is Nasr.',
          tokens: [
            { surface: 'وَذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'conj+dem.m', gloss: 'and that' },
            { surface: 'يَعُوقُ', lemma: 'يَعُوق', pos: 'proper', features: 'nom', gloss: 'Yaʿūq' },
            { surface: 'وَهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'conj+dem.m', gloss: 'and this' },
            { surface: 'نَسْرٌ', lemma: 'نَسْر', pos: 'proper', features: 'nom', gloss: 'Nasr' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ الْأَوْلَادُ يَرَوْنَ آبَاءَهُمْ يَفْعَلُونَ بِالتَّمَاثِيلِ؟',
          options: [
            'يُقَبِّلُونَهَا وَيَلْمَسُونَهَا وَيَدْعُونَ عِنْدَهَا',
            'يَكْسِرُونَهَا وَيَحْرِقُونَهَا',
            'يَبِيعُونَهَا لِلنَّاسِ',
          ],
          answer: 0,
          qEn: 'What did the children see their fathers doing with the statues?',
          optionsEn: [
            'Kissing them, touching them, and praying beside them',
            'Breaking and burning them',
            'Selling them to people',
          ],
        },
        {
          q: 'مَاذَا فَعَلَ الْأَبْنَاءُ زِيَادَةً عَلَى مَا فَعَلَهُ الْآبَاءُ؟',
          options: [
            'صَارُوا يَسْجُدُونَ لِلتَّمَاثِيلِ وَيَسْأَلُونَهَا وَيَذْبَحُونَ لَهَا',
            'تَرَكُوا التَّمَاثِيلَ كُلَّهَا',
            'كَسَرُوا التَّمَاثِيلَ الْقَدِيمَةَ',
          ],
          answer: 0,
          qEn: 'What did the sons do that went beyond what the fathers had done?',
          optionsEn: [
            'They began prostrating to the statues, asking of them, and sacrificing to them',
            'They abandoned all the statues',
            'They broke the old statues',
          ],
        },
        {
          q: 'مَا أَسْمَاءُ الْآلِهَةِ الَّتِي كَثُرَتْ فِيهِمْ؟',
          options: [
            'وَدّ وَسُوَاع وَيَغُوث وَيَعُوق وَنَسْر',
            'اللَّات وَالْعُزَّى وَمَنَاة',
            'هُبَل وَإِسَاف وَنَائِلَة',
          ],
          answer: 0,
          qEn: 'What were the names of the gods that multiplied among them?',
          optionsEn: [
            'Wadd, Suwāʿ, Yaghūth, Yaʿūq, and Nasr',
            'al-Lāt, al-ʿUzzā, and Manāt',
            'Hubal, Isāf, and Nāʾila',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَيَرْكَعُونَ عِنْدَهَا فَ',
        post: 'الأَبْنَاءُ عَلَى الآبَاءِ،',
        en: 'and bowing beside them, so the sons went further than the fathers,',
        options: ['زَادَ', 'يَزِيدُ', 'زَادَتْ', 'زِيَادَة'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular -- verb-subject order takes this default agreement, matching the narrated sequence of completed actions.',
          'Imperfect -- wrong tense; this is a narrated series of completed past events.',
          'Wrong gender -- feminine, but الأَبْنَاءُ is masculine.',
          'Verbal noun -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَ',
        post: 'يَسْأَلُونَهَا، وَيَذْبَحُونَ لَهَا.',
        en: 'They began asking of them, and sacrificing to them.',
        options: ['صَارُوا', 'صَارَ', 'يَصِيرُونَ', 'صَائِرُونَ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural -- "they began to," matching the plural subject and continuing the narrated sequence from the previous sentence.',
          'Wrong number -- singular, but the subject (the sons) is plural.',
          'Imperfect -- wrong tense; this is a narrated past action.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَهَكَذَا صَارَتْ هَذِهِ الأَصْنَامُ',
        post: '،',
        en: 'Thus these idols became gods,',
        options: ['آلِهَةً', 'آلِهَةٌ', 'الآلِهَةَ', 'إِلَٰهًا'],
        answer: 0,
        rationales: [
          'Indefinite accusative plural -- predicate of صَارَتْ (a "kāna-sister," whose predicate takes the accusative), matching the plural subject الأَصْنَامُ.',
          'Nominative -- wrong case; صَارَ\'s predicate is accusative, not nominative.',
          'Definite -- wrong; the idols become gods in general, not "the [specific already-known] gods."',
          'Singular -- wrong number; the plural subject calls for a plural predicate.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَرْكَعُ الرَّجُلُ عِنْدَ الصَّنَمِ',
        pre: '',
        post: 'عِنْدَ الصَّنَمِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَرْكَعُ', 'يَرْكَعُ', 'تَرْكَعُ', 'نَرْكَعُ'],
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
        base: 'يَرْكَعُ الرَّجُلُ عِنْدَ الصَّنَمِ',
        pre: '',
        post: 'عِنْدَ الصَّنَمِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَرْكَعُ', 'يَرْكَعُ', 'أَرْكَعُ', 'نَرْكَعُ'],
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
        base: 'يَرْكَعُ الرَّجُلُ عِنْدَ الصَّنَمِ',
        pre: '',
        post: 'عِنْدَ الصَّنَمِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَرْكَعُونَ', 'يَرْكَعُ', 'تَرْكَعُ', 'نَرْكَعُ'],
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

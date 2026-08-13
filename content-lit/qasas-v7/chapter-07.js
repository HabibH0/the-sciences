// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus), chapter 7 -- ٧ - الْخُرُوجُ ("The Exodus"). Pages 177-180,
// starting right after the ch7 heading box on page 177 (which itself
// follows the closing Qur'anic quote of ch6, Al-A'raf 7:133, on the
// plagues -- that quote belongs to ch6 and is NOT reproduced here) and
// ending just before the ch8 heading box that appears partway down page
// 180 (after "وَسَارَ الْقَوْمُ آمِنِينَ وَوَصَلُوا إِلَى بَرِّ الأَمْنِ وَالسَّلَامِ").
// Transcribed by hand from the scan (vision OCR) against
// ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md.
//
// Two corrections applied against the supplied transcript (flagged, not
// silently made):
//   -- Page 177: the transcript's "وَهُمْ في سِجْنٍ وقُونَ كُلَّ يَوْمٍ صُنُوفاً..."
//      contains a non-word, "وقُونَ". Read as a dropout of the first two
//      letters of "يَذُوقُونَ" ("they taste") -- ي ذ ُ و ق ُ و نَ minus
//      "يَذُ" leaves exactly "وقُونَ" -- which also completes the sense
//      ("...while they are in a prison, tasting every day every kind of
//      torment and humiliation"). Corrected to "يَذُوقُونَ" (qs-v7-c07-002).
//   -- Page 179: the transcript's "لِيَقْتُلَنَا فِرْعَوْنُ قَلْتَ الْفِيرَانِ" contains
//      "قَلْتَ", not a word in this position (no 2nd-person subject is
//      addressed here). Read as a ت/ل transposition of "قَتْلَ" (accusative
//      masdar, cognate-accusative-of-manner construction: "kill us [the]
//      killing of rats/mice" = "kill us like vermin"), a vivid and
//      grammatical idiom matching the surrounding register. Corrected to
//      "قَتْلَ الْفِيرَانِ" (qs-v7-c07-024) -- الْفِيرَانِ kept as transcribed
//      (plural of فَأْر, already-taught qasas-v1/ch2, rather than the more
//      standard فِئْرَان).
//
// This is dramatic third-person narrative prose (the night march, Mūsā's
// providential wrong turn, the people trapped at the Red Sea, the sea
// splitting) rather than extended Qur'anic quotation -- only one short
// ayah is quoted (qs-v7-c07-034, Ash-Shu'arā' 26:62, 5 tokens, safely
// short). Verse-end numerals are not present on this ayah in the source.
//
// `workshop.cloze`/`workshop.shift` are built only from the narrator's own
// prose, never from the one Qur'anic quotation, per instruction: a case
// cloze on the "وَالطَّرِيقُ...طَرِيقٌ وَاضِحٌ" / "نَحْوَ الأَرْضِ الْمُقَدَّسَةِ" /
// "هُنَالِكَ تَزَلْزَلَ..." clauses, and a person-shift on سَارَ (recycled twice
// in this chapter: qs-v7-c07-007 and -039).
//
// Judgment calls / things flagged for a second pair of eyes:
//   -- بَنُو/بَنِي إِسْرَائِيلَ is tokenized as two words throughout, per
//      instruction: اِبْن (pl.constr + case) + إِسْرَائِيل (always gen, as
//      second term of the construct, regardless of اِبْن's own case).
//      إِسْرَائِيل itself is tagged new here since no earlier-authored
//      qasas-v7 chapter exists on disk yet to have introduced it (only
//      ch1-2 exist at the time of writing) -- flagging the uncertainty
//      the task brief itself anticipated, rather than silently guessing
//      it was already covered.
//   -- Several distinct nominal/verbal forms sharing a root with an
//      already-taught word are tagged new as their own lemma, following
//      this volume's own ch1 precedent (قَدْر kept distinct from
//      already-taught قَدَرَ/قَدَّرَ): قَدَر ("fate, destiny" -- distinct sense
//      from قَدْر "worth, due measure", itself already new in ch1) and
//      حَقَّ (verb "to be fitting/true that," distinct POS from the
//      already-taught noun حَقّ) are both treated this way.
//   -- عَاد similarly to ch1's own homograph note: none needed here, but
//      by the same logic ظَلَام ("darkness") is kept a fully separate
//      lemma from the already-taught ظُلْم/ظَالِم/أَظْلَمُ family (same root,
//      unrelated concrete sense) rather than folded in.
//   -- هَا (the presentative particle "here is...") and كَذَٰلِكَ-type basic
//      interrogatives/conjunctions were checked individually against the
//      lexicon export rather than assumed bedrock (unlike qasas-v7/ch1's
//      treatment of هَذَا/ذَلِكَ/جَاءَ/يَوْم): أَيْنَ, مَتَى, كُلّ-type words came
//      back attested, so مَاذَا/حَتَّى/أَوْ/كَيْفَ-type basic particles were
//      extended the same bedrock treatment only where a parallel
//      interrogative/particle of the same tier (e.g. أَيْنَ, مَتَى) was
//      independently attested -- but هَا itself was not, and is tagged
//      new despite being a single short particle.
//   -- This chapter's new-word count (48) is unusually high, well above
//      qasas-v7/ch1's own "unusually high" 33 -- but ch1 was dense with
//      recycled theological vocabulary from an extended Qur'anic
//      quotation, while this chapter is vivid, concrete narrative prose
//      (night marches, desert geography, drowning imagery, natural
//      phenomena) that draws on almost none of the vocabulary already
//      recycled from the more abstract earlier chapters. Genuinely
//      vocabulary-dense material, not an artifact of over-splitting.
//
// Shared lexicon check (grepped against the supplied lexicon.txt export,
// plus qasas-v7/ch1-2's own newWords so far -- جَبَّار, شَعَرَ, نَجَاة, تَعَالَى,
// سَكْرَة, كَلَّا already new/known there and NOT re-listed here):
// اِبْن، أَرْض، مِصْر، هِيَ، صَنَعَ، خَيْر، هُوَ، سِجْن، عَذَاب، صَبَرَ، لَيْسَ، آدَم،
// شَعَرَ (v7ch2)، أَوْحَى، اللَّه، مُوسَى، أَنْ، خَرَجَ، أَحَسَّ، سَارَ، لَيْل، أَمِير، طَرِيق،
// بَرّ، بَيْنَ، مَرَّة، لَكِنَّ، أَمْر، أَرَادَ، كَانَ، مَا، أَخْطَأَ، حَيْثُ، أَصَابَ، ظَنَّ،
// أَنَّ، إِذَا، يَا، حَافِظ، أَيْنَ، نَحْنُ (bedrock)، الْتَفَتَ، جُنْد (v7ch1)، عَظِيم، قَدْ،
// اِرْتَفَعَ-> new (see newWords)، صَوْت، اِبْن، قَتْل، جَاءَ، فَأْر، ذَكَرَ (v7ch2)، سُوء
// (v7ch1)، لِمَاذَا، هَذَا، كَفَى-> new، أَصَابَ، هُنَا، زَالَ، حَقّ (noun, known;
// حَقَّ the verb -> new)، جَبَل، سَمِعَ، نَاس، رَبّ، هَدَى، إِيمَان، عَشَرَ، اِثْنَانِ، مَتَى،
// وَصَلَ، مَعَ، سَلام، قَوْم، آخَر، أَوْ (bedrock)، نُبُوَّة، مَاء، عَدُوّ، مَوْت، عَيْن،
// دُنْيَا، يَأْس، ثُمَّ (bedrock)، أَحَد، إِسْرَائِيل-> new (see note above)
// are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 48 new words (see notes above on the unusually high count):
// إِسْرَائِيل، ضَاقَ، وَاسِع، خِصْب، ذَاقَ، صِنْف، هَوَان، أَذَى، أَلَم، سَرَى، شُرْطَة،
// غُرَاب، شَامَّة، نَمْل، نَحْوَ، مُقَدَّس، سِبْط، الشَّام، وَاضِح، مَعْلُوم، جَازَ، قَدَر،
// شَمَال، ظَلَام، شَرْق، أَمَام، تَلَاطَمَ، سَاتِر، وَرَاء، غُبَار، سَاطِع، سَدَّ، أُفُق،
// هُنَالِكَ، اِرْتَفَعَ، عِمْرَان، دَبَّرَ، شَطّ، فِرَار، اِنْتِقَام، كَفَى، جُهْد، بَلَاء، أَجْل،
// هَا، أَظْلَمَ، زَاغَ، بَصَر، اِسْتَوْلَى، خَفَتَ، تَزَلْزَلَ، حَقَّ، رَاسِيَة، جَلَال، عَصَا،
// اِنْفَلَقَ، آمِن، أَمْن، أَحْمَر
// (count above the array header is 48; a few of these -- اِرْتَفَعَ, كَفَى,
// حَقَّ, هَا -- were only confirmed new by direct grep rather than assumed,
// since this chapter checked common particles individually rather than
// blanket-exempting them; see notes above.)
//
// One footnote (page 178, on جَازَهُ/مَرَّتَيْنِ) carries Nadwī's own gloss and
// is captured as book_note on جَازَ below. The second footnote on page 178
// is a teacher's-instruction aside ("it is good for the teacher to point
// students to a map of Egypt") rather than a vocabulary gloss, so it is
// recorded only here, not as a book_note.
export const CHAPTER = {
  id: 'ch7',
  title: { ar: 'الْخُرُوجُ', en: 'The Exodus' },
  newWords: [
    'ضَاقَ', 'وَاسِع', 'خِصْب', 'ذَاقَ', 'صِنْف', 'هَوَان', 'أَذَى', 'أَلَم',
    'سَرَى', 'غُرَاب', 'نَحْوَ', 'مُقَدَّس', 'سِبْط', 'الشَّام',
    'وَاضِح', 'مَعْلُوم', 'جَازَ', 'قَدَر', 'شَمَال', 'ظَلَام', 'شَرْق', 'أَمَام', 'تَلَاطَمَ',
    'سَاتِر', 'وَرَاء', 'غُبَار', 'سَاطِع', 'سَدَّ', 'أُفُق', 'هُنَالِكَ', 'اِرْتَفَعَ', 'عِمْرَان',
    'دَبَّرَ', 'شَطّ', 'فِرَار', 'اِنْتِقَام', 'كَفَى', 'جُهْد', 'بَلَاء', 'أَجْل', 'هَا',
    'أَظْلَمَ', 'زَاغَ', 'بَصَر', 'اِسْتَوْلَى', 'خَفَتَ', 'تَزَلْزَلَ', 'حَقَّ', 'رَاسِيَة',
    'جَلَال', 'عَصَا', 'اِنْفَلَقَ', 'آمِن', 'أَمْن', 'أَحْمَر',
  ],
  lemmas: {
    'ضَاقَ': { gloss: 'to become narrow, too strait' },
    'وَاسِع': { gloss: 'spacious, wide' },
    'خِصْب': { gloss: 'fertility, fruitfulness' },
    'ذَاقَ': { gloss: 'to taste' },
    'صِنْف': { gloss: 'kind, sort (pl. صُنُوف)' },
    'هَوَان': { gloss: 'humiliation, disgrace' },
    'أَذَى': { gloss: 'harm' },
    'أَلَم': { gloss: 'pain' },
    'سَرَى': { gloss: 'to travel by night' },
    'غُرَاب': { gloss: 'crow, raven' },
    'نَحْوَ': { gloss: 'towards, in the direction of' },
    'مُقَدَّس': { gloss: 'holy, sanctified' },
    'سِبْط': { gloss: 'tribe (one of the twelve tribes of Israel)' },
    'الشَّام': { gloss: 'Syria, the Levant' },
    'وَاضِح': { gloss: 'clear, evident' },
    'مَعْلُوم': { gloss: 'known, well-known' },
    'جَازَ': { gloss: 'to cross, pass through', book_note: 'مرة ذهاباً إلى مدين، ومرة إياباً إلى مصر (once going to Madyan, and once returning to Egypt).' },
    'قَدَر': { gloss: 'fate, destiny, divine decree' },
    'شَمَال': { gloss: 'north' },
    'ظَلَام': { gloss: 'darkness' },
    'شَرْق': { gloss: 'east' },
    'أَمَام': { gloss: 'in front of, before' },
    'تَلَاطَمَ': { gloss: 'to surge, dash against one another (of waves)' },
    'سَاتِر': { gloss: 'Protector, Concealer' },
    'وَرَاء': { gloss: 'behind, the rear' },
    'غُبَار': { gloss: 'dust' },
    'سَاطِع': { gloss: 'billowing, rising, blazing' },
    'سَدَّ': { gloss: 'to block, obstruct' },
    'أُفُق': { gloss: 'horizon' },
    'هُنَالِكَ': { gloss: 'then, thereupon, at that point' },
    'اِرْتَفَعَ': { gloss: 'to rise, rise up' },
    'عِمْرَان': { gloss: 'ʿImrān (Mūsā\'s father)' },
    'دَبَّرَ': { gloss: 'to plot, plan, scheme' },
    'شَطّ': { gloss: 'shore, bank' },
    'فِرَار': { gloss: 'escape, flight' },
    'اِنْتِقَام': { gloss: 'vengeance, retaliation' },
    'كَفَى': { gloss: 'to suffice, be enough' },
    'جُهْد': { gloss: 'hardship, effort' },
    'بَلَاء': { gloss: 'trial, affliction' },
    'أَجْل': { gloss: 'sake (لِأَجْلِ, for the sake of)' },
    'هَا': { gloss: 'here (is), behold' },
    'أَظْلَمَ': { gloss: 'to grow dark' },
    'زَاغَ': { gloss: 'to swerve, be confounded, be dazzled' },
    'بَصَر': { gloss: 'sight, eyesight (pl. أَبْصَار)' },
    'اِسْتَوْلَى': { gloss: 'to seize control of, take hold, overcome' },
    'خَفَتَ': { gloss: 'to grow faint, fall silent' },
    'تَزَلْزَلَ': { gloss: 'to shake, quake' },
    'حَقَّ': { gloss: 'to be right, true, fitting that...' },
    'رَاسِيَة': { gloss: 'firmly rooted, fixed (of mountains)' },
    'جَلَال': { gloss: 'majesty, grandeur' },
    'عَصَا': { gloss: 'staff, rod' },
    'اِنْفَلَقَ': { gloss: 'to split open, split apart' },
    'آمِن': { gloss: 'safe, secure' },
    'أَمْن': { gloss: 'security, safety' },
    'أَحْمَر': { gloss: 'red' },
  },
  paragraphs: [
    {
      en: "Egypt's land grew too narrow for the Israelites, spacious as it was -- for what good was Egypt's fertility and its bounties to them, while they were in a prison, tasting every kind of torment and humiliation every day? How long could they endure? Were they not sons of Adam, who feel harm and pain?",
      sentences: [
        {
          id: 'qs-v7-c07-001',
          ar: 'وَضَاقَتْ عَلَى بَنِي إِسْرَائِيلَ أَرْضُ مِصْرَ وَهِيَ وَاسِعَةٌ.',
          en: "Egypt's land grew too narrow for the Israelites, though it was spacious,",
          tokens: [
            { surface: 'وَضَاقَتْ', lemma: 'ضَاقَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ض ي ق', gloss: 'to become narrow, too strait; and grew too strait' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for, upon' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.gen', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'أَرْضُ', lemma: 'أَرْض', pos: 'noun', features: 'nom.constr', gloss: 'the land of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'وَهِيَ', lemma: 'هِيَ', pos: 'noun', features: 'conj+3fs', gloss: 'though it (was)' },
            { surface: 'وَاسِعَةٌ', lemma: 'وَاسِع', pos: 'adj', features: 'indef.nom.f', root: 'و س ع', gloss: 'spacious, wide' },
          ],
        },
        {
          id: 'qs-v7-c07-002',
          ar: 'وَمَا يَصْنَعُونَ بِخِصْبِ مِصْرَ وَخَيْرَاتِهَا وَهُمْ فِي سِجْنٍ يَذُوقُونَ كُلَّ يَوْمٍ صُنُوفاً مِنَ الْعَذَابِ وَالْهَوَانِ؟!',
          en: "for what good was Egypt's fertility and its bounties to them, while they were in a prison, tasting every day every kind of torment and humiliation?",
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+rel', gloss: 'and what' },
            { surface: 'يَصْنَعُونَ', lemma: 'صَنَعَ', pos: 'verb', features: 'impf.3mp', gloss: 'to do, make; do they do' },
            { surface: 'بِخِصْبِ', lemma: 'خِصْب', pos: 'noun', features: 'prep+constr.gen', root: 'خ ص ب', gloss: 'with the fertility of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'وَخَيْرَاتِهَا', lemma: 'خَيْر', pos: 'noun', features: 'conj+pl.gen+3fs', gloss: 'and its bounties' },
            { surface: 'وَهُمْ', lemma: 'هُمْ', pos: 'noun', features: 'conj+3mp', gloss: 'while they' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'سِجْنٍ', lemma: 'سِجْن', pos: 'noun', features: 'indef.gen', gloss: 'a prison' },
            { surface: 'يَذُوقُونَ', lemma: 'ذَاقَ', pos: 'verb', features: 'impf.3mp', root: 'ذ و ق', gloss: 'to taste; tasting' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'يَوْمٍ', lemma: 'يَوْم', pos: 'noun', features: 'indef.gen', gloss: 'day' },
            { surface: 'صُنُوفاً', lemma: 'صِنْف', pos: 'noun', features: 'pl.indef.acc', root: 'ص ن ف', gloss: 'kinds, sorts' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْعَذَابِ', lemma: 'عَذَاب', pos: 'noun', features: 'def.gen', gloss: 'the torment' },
            { surface: 'وَالْهَوَانِ', lemma: 'هَوَان', pos: 'noun', features: 'conj+def.gen', root: 'ه و ن', gloss: 'and the humiliation' },
          ],
        },
        {
          id: 'qs-v7-c07-003',
          ar: 'إِلَى مَتَى يَصْبِرُونَ،',
          en: 'How long could they endure?',
          tokens: [
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'until' },
            { surface: 'مَتَى', lemma: 'مَتَى', pos: 'part', features: 'part', gloss: 'when' },
            { surface: 'يَصْبِرُونَ', lemma: 'صَبَرَ', pos: 'verb', features: 'impf.3mp', gloss: 'to be patient, endure' },
          ],
        },
        {
          id: 'qs-v7-c07-004',
          ar: 'أَلَيْسُوا بَنِي آدَمَ يَشْعُرُونَ بِالأَذَى وَالأَلَمِ؟!',
          en: 'Were they not sons of Adam, who feel harm and pain?!',
          tokens: [
            { surface: 'أَلَيْسُوا', lemma: 'لَيْسَ', pos: 'verb', features: 'part+perf.3mp', gloss: 'to not be; are they not' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.acc', root: 'ب ن و', gloss: 'sons of' },
            { surface: 'آدَمَ', lemma: 'آدَم', pos: 'proper', features: 'gen', gloss: 'Adam' },
            { surface: 'يَشْعُرُونَ', lemma: 'شَعَرَ', pos: 'verb', features: 'impf.3mp', gloss: 'to feel, sense' },
            { surface: 'بِالأَذَى', lemma: 'أَذَى', pos: 'noun', features: 'prep+def.gen', root: 'أ ذ ي', gloss: 'harm' },
            { surface: 'وَالأَلَمِ', lemma: 'أَلَم', pos: 'noun', features: 'conj+def.gen', root: 'أ ل م', gloss: 'and pain' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا ضَاقَتْ أَرْضُ مِصْرَ عَلَى بَنِي إِسْرَائِيلَ مَعَ أَنَّهَا وَاسِعَةٌ؟',
          options: ['لِأَنَّهُمْ كَانُوا فِي سِجْنٍ يَذُوقُونَ كُلَّ يَوْمٍ صُنُوفاً مِنَ الْعَذَابِ وَالْهَوَانِ', 'لِأَنَّ الأَرْضَ كَانَتْ قَلِيلَةَ الْخَيْرَاتِ', 'لِأَنَّهُمْ كَانُوا يَعْمَلُونَ فِي الزِّرَاعَةِ'],
          answer: 0,
          qEn: "Why did Egypt's land grow too narrow for the Israelites, even though it was spacious?",
          optionsEn: ['Because they were in a prison, tasting every kind of torment and humiliation every day', 'Because the land had few bounties', 'Because they worked in farming'],
        },
        {
          q: 'كَيْفَ وَصَفَ الْكَاتِبُ بَنِي إِسْرَائِيلَ فِي هَذَا الْمَوْقِفِ؟',
          options: ['بَنُو آدَمَ يَشْعُرُونَ بِالأَذَى وَالأَلَمِ', 'لَا يَشْعُرُونَ بِشَيْءٍ', 'أَقْوِيَاءُ لَا يَتَأَلَّمُونَ'],
          answer: 0,
          qEn: 'How did the author describe the Israelites in this situation?',
          optionsEn: ['As sons of Adam who feel harm and pain', 'As feeling nothing at all', 'As strong, never suffering'],
        },
      ],
    },
    {
      en: "Allah revealed to Mūsā that he should travel by night with the Israelites and bring them out of Egypt. Pharaoh's guards sensed this -- for they had the eyes of a crow and the scent of an ant -- and told Pharaoh of it. Mūsā set out with the Israelites by night toward the Holy Land: twelve tribes, each with its own leader. The road to Syria was a clear, well-known road, dry land joining the two landmasses, which Mūsā had already crossed twice.",
      sentences: [
        {
          id: 'qs-v7-c07-005',
          ar: 'وَأَوْحَى اللَّهُ إِلَى مُوسَى أَنْ يَسْرِيَ بِبَنِي إِسْرَائِيلَ لَيْلاً يَخْرُجَ بِهِمْ مِنْ مِصْرَ.',
          en: 'Allah revealed to Mūsā that he should travel by night with the Israelites, that he might bring them out of Egypt.',
          tokens: [
            { surface: 'وَأَوْحَى', lemma: 'أَوْحَى', pos: 'verb', features: 'conj+perf.3ms', root: 'و ح ي', gloss: 'to reveal; and revealed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يَسْرِيَ', lemma: 'سَرَى', pos: 'verb', features: 'impf.3ms', root: 'س ر ي', gloss: 'to travel by night' },
            { surface: 'بِبَنِي', lemma: 'اِبْن', pos: 'noun', features: 'prep+pl.gen', root: 'ب ن و', gloss: 'with the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'لَيْلاً', lemma: 'لَيْل', pos: 'noun', features: 'indef.acc', gloss: 'by night' },
            { surface: 'يَخْرُجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'impf.3ms', gloss: 'to go out, bring out; that he might bring out' },
            { surface: 'بِهِمْ', lemma: 'بِ', pos: 'prep', features: 'prep+3mp', gloss: 'with them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v7-c07-006',
          ar: 'وَأَحَسَّ بِذَلِكَ شُرْطَةُ فِرْعَوْنَ وَلَهُمْ عُيُونُ الْغُرَابِ وَشَامَّةُ النَّمْلِ وَأَخْبَرُوا بِذَلِكَ فِرْعَوْنَ.',
          en: "Pharaoh's guards sensed this -- for they had the eyes of a crow and the scent of an ant -- and told Pharaoh of it.",
          tokens: [
            { surface: 'وَأَحَسَّ', lemma: 'أَحَسَّ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to sense, perceive; and sensed' },
            { surface: 'بِذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'prep+dem.m', gloss: 'this' },
            { surface: 'شُرْطَةُ', lemma: 'شُرْطَة', pos: 'noun', features: 'nom.constr', root: 'ش ر ط', gloss: 'the guards, police of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'وَلَهُمْ', lemma: 'لِ', pos: 'prep', features: 'conj+prep+3mp', gloss: 'and they had' },
            { surface: 'عُيُونُ', lemma: 'عَيْن', pos: 'noun', features: 'pl.nom.constr', gloss: 'the eyes of' },
            { surface: 'الْغُرَابِ', lemma: 'غُرَاب', pos: 'noun', features: 'def.gen', root: 'غ ر ب', gloss: 'the crow, raven' },
            { surface: 'وَشَامَّةُ', lemma: 'شَامَّة', pos: 'noun', features: 'conj+nom.constr', root: 'ش م م', gloss: 'and the scent of' },
            { surface: 'النَّمْلِ', lemma: 'نَمْل', pos: 'noun', features: 'def.gen', root: 'ن م ل', gloss: 'the ant(s)' },
            { surface: 'وَأَخْبَرُوا', lemma: 'أَخْبَرَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to inform; and informed' },
            { surface: 'بِذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'prep+dem.m', gloss: 'of this' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'acc', gloss: 'Pharaoh' },
          ],
        },
        {
          id: 'qs-v7-c07-007',
          ar: 'سَارَ مُوسَى بِبَنِي إِسْرَائِيلَ فِي اللَّيْلِ نَحْوَ الأَرْضِ الْمُقَدَّسَةِ،',
          en: 'Mūsā set out with the Israelites by night toward the Holy Land,',
          tokens: [
            { surface: 'سَارَ', lemma: 'سَارَ', pos: 'verb', features: 'perf.3ms', gloss: 'to set out, march; set out' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'بِبَنِي', lemma: 'اِبْن', pos: 'noun', features: 'prep+pl.gen', root: 'ب ن و', gloss: 'with the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'اللَّيْلِ', lemma: 'لَيْل', pos: 'noun', features: 'def.gen', gloss: 'the night' },
            { surface: 'نَحْوَ', lemma: 'نَحْوَ', pos: 'prep', features: 'prep', root: 'ن ح و', gloss: 'towards' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the land' },
            { surface: 'الْمُقَدَّسَةِ', lemma: 'مُقَدَّس', pos: 'adj', features: 'def.gen.f', root: 'ق د س', gloss: 'holy, sanctified' },
          ],
        },
        {
          id: 'qs-v7-c07-008',
          ar: 'وَهُمْ اثْنَا عَشَرَ سِبْطاً،',
          en: 'twelve tribes,',
          tokens: [
            { surface: 'وَهُمْ', lemma: 'هُمْ', pos: 'noun', features: 'conj+3mp', gloss: 'while they were' },
            { surface: 'اثْنَا', lemma: 'اِثْنَانِ', pos: 'num', features: 'nom', gloss: 'two (with عَشَرَ: twelve)' },
            { surface: 'عَشَرَ', lemma: 'عَشَرَ', pos: 'num', features: 'acc', gloss: 'ten (forms twelve with اثْنَا)' },
            { surface: 'سِبْطاً', lemma: 'سِبْط', pos: 'noun', features: 'indef.acc', root: 'س ب ط', gloss: 'tribe' },
          ],
        },
        {
          id: 'qs-v7-c07-009',
          ar: 'كُلُّ سِبْطٍ عَلَيْهِ أَمِيرٌ.',
          en: 'each tribe having its own leader.',
          tokens: [
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'nom.constr', gloss: 'each' },
            { surface: 'سِبْطٍ', lemma: 'سِبْط', pos: 'noun', features: 'indef.gen', root: 'س ب ط', gloss: 'tribe' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'over it, upon it' },
            { surface: 'أَمِيرٌ', lemma: 'أَمِير', pos: 'noun', features: 'indef.nom', gloss: 'a leader, commander' },
          ],
        },
        {
          id: 'qs-v7-c07-010',
          ar: 'وَالطَّرِيقُ إِلَى الشَّامِ طَرِيقٌ وَاضِحٌ مَعْلُومٌ،',
          en: 'The road to Syria was a clear, well-known road,',
          tokens: [
            { surface: 'وَالطَّرِيقُ', lemma: 'طَرِيق', pos: 'noun', features: 'conj+def.nom', gloss: 'and the road' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الشَّامِ', lemma: 'الشَّام', pos: 'proper', features: 'gen', gloss: 'Syria, the Levant' },
            { surface: 'طَرِيقٌ', lemma: 'طَرِيق', pos: 'noun', features: 'indef.nom', gloss: 'a road' },
            { surface: 'وَاضِحٌ', lemma: 'وَاضِح', pos: 'adj', features: 'indef.nom', root: 'و ض ح', gloss: 'clear, evident' },
            { surface: 'مَعْلُومٌ', lemma: 'مَعْلُوم', pos: 'adj', features: 'indef.nom', root: 'ع ل م', gloss: 'known, well-known' },
          ],
        },
        {
          id: 'qs-v7-c07-011',
          ar: 'بَرٌّ يَصِلُ بَيْنَ الْبَرَّيْنِ وَقَدْ جَازَهُ مُوسَى مَرَّتَيْنِ.',
          en: 'dry land joining the two landmasses -- which Mūsā had already crossed twice.',
          tokens: [
            { surface: 'بَرٌّ', lemma: 'بَرّ', pos: 'noun', features: 'indef.nom', gloss: 'dry land' },
            { surface: 'يَصِلُ', lemma: 'وَصَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to connect, join; joining' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'between' },
            { surface: 'الْبَرَّيْنِ', lemma: 'بَرّ', pos: 'noun', features: 'du.def.gen', gloss: 'the two landmasses' },
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'جَازَهُ', lemma: 'جَازَ', pos: 'verb', features: 'perf.3ms+3ms', root: 'ج و ز', gloss: 'to cross, pass through; crossed it' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'مَرَّتَيْنِ', lemma: 'مَرَّة', pos: 'noun', features: 'du.acc', gloss: 'twice' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا أَوْحَى اللَّهُ إِلَى مُوسَى؟',
          options: ['أَنْ يَسْرِيَ بِبَنِي إِسْرَائِيلَ لَيْلاً وَيَخْرُجَ بِهِمْ مِنْ مِصْرَ', 'أَنْ يُحَارِبَ فِرْعَوْنَ', 'أَنْ يَبْقَى فِي مِصْرَ'],
          answer: 0,
          qEn: 'What did Allah reveal to Mūsā?',
          optionsEn: ['That he should travel by night with the Israelites and bring them out of Egypt', 'That he should fight Pharaoh', 'That he should remain in Egypt'],
        },
        {
          q: 'كَمْ عَدَدُ الْأَسْبَاطِ الَّذِينَ سَارَ بِهِمْ مُوسَى؟',
          options: ['اثْنَا عَشَرَ سِبْطاً، كُلُّ سِبْطٍ عَلَيْهِ أَمِيرٌ', 'عَشَرَةُ أَسْبَاطٍ', 'سِتَّةُ أَسْبَاطٍ'],
          answer: 0,
          qEn: 'How many tribes did Mūsā set out with?',
          optionsEn: ['Twelve tribes, each with its own leader', 'Ten tribes', 'Six tribes'],
        },
      ],
    },
    {
      en: 'But Mūsā willed one thing, and Allah willed another, and what Allah willed came to pass. Mūsā missed the way -- and exactly where Mūsā went wrong, destiny struck true. Mūsā thought he was leading the Israelites toward the north, but there they suddenly were, in the darkness of night, heading east.',
      sentences: [
        {
          id: 'qs-v7-c07-012',
          ar: 'وَلَكِنَّ مُوسَى أَرَادَ أَمْراً وَأَرَادَ اللَّهُ أَمْراً وَكَانَ مَا أَرَادَهُ اللَّهُ.',
          en: 'But Mūsā willed one thing, and Allah willed another, and what Allah willed came to pass.',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'أَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms', gloss: 'to want; willed' },
            { surface: 'أَمْراً', lemma: 'أَمْر', pos: 'noun', features: 'indef.acc', gloss: 'a thing, matter' },
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and willed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَمْراً', lemma: 'أَمْر', pos: 'noun', features: 'indef.acc', gloss: 'a thing, matter' },
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and came to pass' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'أَرَادَهُ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'He willed it' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v7-c07-013',
          ar: 'أَخْطَأَ مُوسَى الطَّرِيقَ،',
          en: 'Mūsā missed the way,',
          tokens: [
            { surface: 'أَخْطَأَ', lemma: 'أَخْطَأَ', pos: 'verb', features: 'perf.3ms', gloss: 'to err, miss the mark; missed' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'الطَّرِيقَ', lemma: 'طَرِيق', pos: 'noun', features: 'def.acc', gloss: 'the road' },
          ],
        },
        {
          id: 'qs-v7-c07-014',
          ar: 'وَحَيْثُ أَخْطَأَ مُوسَى أَصَابَ الْقَدَرُ.',
          en: 'and exactly where Mūsā went wrong, destiny struck true.',
          tokens: [
            { surface: 'وَحَيْثُ', lemma: 'حَيْثُ', pos: 'adv', features: 'conj+adv', gloss: 'and where' },
            { surface: 'أَخْطَأَ', lemma: 'أَخْطَأَ', pos: 'verb', features: 'perf.3ms', gloss: 'to err; erred' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'أَصَابَ', lemma: 'أَصَابَ', pos: 'verb', features: 'perf.3ms', gloss: 'to strike true, hit the mark; struck true' },
            { surface: 'الْقَدَرُ', lemma: 'قَدَر', pos: 'noun', features: 'def.nom', root: 'ق د ر', gloss: 'fate, destiny, divine decree' },
          ],
        },
        {
          id: 'qs-v7-c07-015',
          ar: 'ظَنَّ مُوسَى أَنَّهُ يَسِيرُ بِبَنِي إِسْرَائِيلَ إِلَى جَانِبِ الشَّمَالِ.',
          en: 'Mūsā thought he was leading the Israelites toward the north.',
          tokens: [
            { surface: 'ظَنَّ', lemma: 'ظَنَّ', pos: 'verb', features: 'perf.3ms', gloss: 'to think, suppose; thought' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that he' },
            { surface: 'يَسِيرُ', lemma: 'سَارَ', pos: 'verb', features: 'impf.3ms', gloss: 'to march, lead; was leading' },
            { surface: 'بِبَنِي', lemma: 'اِبْن', pos: 'noun', features: 'prep+pl.gen', root: 'ب ن و', gloss: 'with the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'toward' },
            { surface: 'جَانِبِ', lemma: 'جَانِب', pos: 'noun', features: 'constr.gen', gloss: 'the side of' },
            { surface: 'الشَّمَالِ', lemma: 'شَمَال', pos: 'noun', features: 'def.gen', root: 'ش م ل', gloss: 'the north' },
          ],
        },
        {
          id: 'qs-v7-c07-016',
          ar: 'فَإِذَا بِهِمْ فِي ظَلَامِ اللَّيْلِ إِلَى جَانِبِ الشَّرْقِ.',
          en: 'but there they suddenly were, in the darkness of night, heading east.',
          tokens: [
            { surface: 'فَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'but there suddenly' },
            { surface: 'بِهِمْ', lemma: 'بِ', pos: 'prep', features: 'prep+3mp', gloss: 'they (were)' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ظَلَامِ', lemma: 'ظَلَام', pos: 'noun', features: 'constr.gen', root: 'ظ ل م', gloss: 'the darkness of' },
            { surface: 'اللَّيْلِ', lemma: 'لَيْل', pos: 'noun', features: 'def.gen', gloss: 'the night' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'toward' },
            { surface: 'جَانِبِ', lemma: 'جَانِب', pos: 'noun', features: 'constr.gen', gloss: 'the side of' },
            { surface: 'الشَّرْقِ', lemma: 'شَرْق', pos: 'noun', features: 'def.gen', root: 'ش ر ق', gloss: 'the east' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ عِنْدَمَا أَخْطَأَ مُوسَى الطَّرِيقَ؟',
          options: ['أَصَابَ الْقَدَرُ، وَكَانَ ذَلِكَ مَا أَرَادَهُ اللَّهُ', 'تَاهَ بَنُو إِسْرَائِيلَ إِلَى الْأَبَدِ', 'عَادَ مُوسَى إِلَى مِصْرَ'],
          answer: 0,
          qEn: 'What happened when Mūsā missed the way?',
          optionsEn: ['Destiny struck true -- that was what Allah had willed', 'The Israelites were lost forever', 'Mūsā returned to Egypt'],
        },
        {
          q: 'إِلَى أَيِّ جِهَةٍ ظَنَّ مُوسَى أَنَّهُ يَسِيرُ، وَإِلَى أَيْنَ وَصَلَ فِعْلاً؟',
          options: ['ظَنَّ أَنَّهُ يَسِيرُ إِلَى الشَّمَالِ، فَإِذَا بِهِمْ إِلَى جَانِبِ الشَّرْقِ', 'ظَنَّ أَنَّهُ يَسِيرُ إِلَى الْجَنُوبِ، فَوَصَلَ إِلَى الشَّمَالِ', 'لَمْ يُخْطِئِ الطَّرِيقَ أَبَداً'],
          answer: 0,
          qEn: 'Which direction did Mūsā think he was heading, and where did he actually end up?',
          optionsEn: ['He thought north, but they ended up heading east', 'He thought south, but ended up heading north', 'He never missed the way at all'],
        },
      ],
    },
    {
      en: "And there they suddenly were, before the Red Sea, its waves surging. 'O Preserver! O Protector! Where are we?' The answer was: 'We are before the sea!' They turned to look behind them, and there was billowing dust -- a mighty army had blocked the horizon! Then voices rose up.",
      sentences: [
        {
          id: 'qs-v7-c07-017',
          ar: 'وَإِذَا بِهِمْ أَمَامَ الْبَحْرِ الأَحْمَرِ تَتَلَاطَمُ أَمْوَاجُهُ.',
          en: 'And there they suddenly were, before the Red Sea, its waves surging.',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'and there suddenly' },
            { surface: 'بِهِمْ', lemma: 'بِ', pos: 'prep', features: 'prep+3mp', gloss: 'they (were)' },
            { surface: 'أَمَامَ', lemma: 'أَمَام', pos: 'prep', features: 'prep', root: 'أ م م', gloss: 'before, in front of' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
            { surface: 'الأَحْمَرِ', lemma: 'أَحْمَر', pos: 'adj', features: 'def.gen', root: 'ح م ر', gloss: 'red' },
            { surface: 'تَتَلَاطَمُ', lemma: 'تَلَاطَمَ', pos: 'verb', features: 'impf.3fs', root: 'ل ط م', gloss: 'to surge, dash together; surging' },
            { surface: 'أَمْوَاجُهُ', lemma: 'مَوْج', pos: 'noun', features: 'pl.nom+3ms', gloss: 'its waves' },
          ],
        },
        {
          id: 'qs-v7-c07-018',
          ar: 'يَا حَافِظُ! يَا سَاتِرُ! أَيْنَ نَحْنُ؟',
          en: 'O Preserver! O Protector! Where are we?',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'حَافِظُ', lemma: 'حَافِظ', pos: 'noun', features: 'indef.nom', gloss: 'Preserver' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'سَاتِرُ', lemma: 'سَاتِر', pos: 'noun', features: 'indef.nom', root: 'س ت ر', gloss: 'Protector, Concealer' },
            { surface: 'أَيْنَ', lemma: 'أَيْنَ', pos: 'part', features: 'part', gloss: 'where' },
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: '1p', gloss: 'we' },
          ],
        },
        {
          id: 'qs-v7-c07-019',
          ar: 'كَانَ الْجَوَابُ إِنَّنَا أَمَامَ الْبَحْرِ!',
          en: "The answer was: 'We are before the sea!'",
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'الْجَوَابُ', lemma: 'جَوَاب', pos: 'noun', features: 'def.nom', gloss: 'the answer' },
            { surface: 'إِنَّنَا', lemma: 'إِنَّ', pos: 'part', features: 'part+1p', gloss: 'indeed we' },
            { surface: 'أَمَامَ', lemma: 'أَمَام', pos: 'prep', features: 'prep', gloss: 'before' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
          ],
        },
        {
          id: 'qs-v7-c07-020',
          ar: 'وَالْتَفَتُوا إِلَى الْوَرَاءِ فَإِذَا بِغُبَارٍ سَاطِعٍ!',
          en: 'They turned to look behind them, and there was billowing dust!',
          tokens: [
            { surface: 'وَالْتَفَتُوا', lemma: 'اِلْتَفَتَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to turn, look back; and they turned' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْوَرَاءِ', lemma: 'وَرَاء', pos: 'noun', features: 'def.gen', root: 'و ر ي', gloss: 'behind, the rear' },
            { surface: 'فَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'and there suddenly' },
            { surface: 'بِغُبَارٍ', lemma: 'غُبَار', pos: 'noun', features: 'prep+indef.gen', root: 'غ ب ر', gloss: 'dust' },
            { surface: 'سَاطِعٍ', lemma: 'سَاطِع', pos: 'adj', features: 'indef.gen', root: 'س ط ع', gloss: 'billowing, rising' },
          ],
        },
        {
          id: 'qs-v7-c07-021',
          ar: 'وَإِذَا بِجُنْدٍ عَظِيمٍ قَدْ سَدَّ الأُفُقَ!',
          en: 'and there was a mighty army that had blocked the horizon!',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'and there suddenly' },
            { surface: 'بِجُنْدٍ', lemma: 'جُنْد', pos: 'noun', features: 'prep+indef.gen', gloss: 'an army' },
            { surface: 'عَظِيمٍ', lemma: 'عَظِيم', pos: 'adj', features: 'indef.gen', gloss: 'mighty, great' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed, already' },
            { surface: 'سَدَّ', lemma: 'سَدَّ', pos: 'verb', features: 'perf.3ms', root: 'س د د', gloss: 'to block, obstruct; had blocked' },
            { surface: 'الأُفُقَ', lemma: 'أُفُق', pos: 'noun', features: 'def.acc', root: 'أ ف ق', gloss: 'the horizon' },
          ],
        },
        {
          id: 'qs-v7-c07-022',
          ar: 'هُنَالِكَ ارْتَفَعَتِ الأَصْوَاتُ.',
          en: 'Then voices rose up.',
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'then, thereupon' },
            { surface: 'ارْتَفَعَتِ', lemma: 'اِرْتَفَعَ', pos: 'verb', features: 'perf.3fs', root: 'ر ف ع', gloss: 'to rise up; rose up' },
            { surface: 'الأَصْوَاتُ', lemma: 'صَوْت', pos: 'noun', features: 'pl.def.nom', gloss: 'the voices' },
          ],
        },
      ],
      checks: [
        {
          q: 'أَيْنَ وَجَدَ بَنُو إِسْرَائِيلَ أَنْفُسَهُمْ فَجْأَةً؟',
          options: ['أَمَامَ الْبَحْرِ الْأَحْمَرِ تَتَلَاطَمُ أَمْوَاجُهُ', 'عَلَى قِمَّةِ جَبَلٍ', 'فِي وَسَطِ صَحْرَاءَ خَالِيَةٍ'],
          answer: 0,
          qEn: 'Where did the Israelites suddenly find themselves?',
          optionsEn: ['Before the Red Sea, its waves surging', 'On a mountaintop', 'In the middle of an empty desert'],
        },
        {
          q: 'مَاذَا رَأَوْا عِنْدَمَا الْتَفَتُوا إِلَى الْوَرَاءِ؟',
          options: ['غُبَاراً سَاطِعاً، ثُمَّ جُنْداً عَظِيماً قَدْ سَدَّ الْأُفُقَ', 'لَا شَيْءَ', 'قَافِلَةَ تُجَّارٍ'],
          answer: 0,
          qEn: 'What did they see when they turned to look behind them?',
          optionsEn: ['Billowing dust, then a mighty army that had blocked the horizon', 'Nothing at all', 'A caravan of merchants'],
        },
      ],
    },
    {
      en: "'O son of ʿImrān! What did you dislike about us, that you should plot our death? You have brought us to the shore of the sea for Pharaoh to kill us like rats, where there is no escape and no deliverance! We recall no wrong done to you -- so why this vengeance? Was it not enough for you, all the hardship and trial that befell us for your sake, that you should bring us here too? Here is the sea before us, and here is the enemy behind us, and nothing is left for us but death!'",
      sentences: [
        {
          id: 'qs-v7-c07-023',
          ar: 'يَا ابْنَ عِمْرَانَ! مَاذَا أَنْكَرْتَ مِنَّا حَتَّى دَبَّرْتَ قَتْلَنَا!',
          en: 'O son of ʿImrān! What did you dislike about us, that you should plot our death?!',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'ابْنَ', lemma: 'اِبْن', pos: 'noun', features: 'acc.constr', root: 'ب ن و', gloss: 'son of' },
            { surface: 'عِمْرَانَ', lemma: 'عِمْرَان', pos: 'proper', features: 'gen', gloss: 'ʿImrān' },
            { surface: 'مَاذَا', lemma: 'مَاذَا', pos: 'part', features: 'part', gloss: 'what' },
            { surface: 'أَنْكَرْتَ', lemma: 'أَنْكَرَ', pos: 'verb', features: 'perf.2ms', gloss: 'to deny, dislike; did you dislike' },
            { surface: 'مِنَّا', lemma: 'مِنْ', pos: 'prep', features: 'prep+1p', gloss: 'about us' },
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'دَبَّرْتَ', lemma: 'دَبَّرَ', pos: 'verb', features: 'perf.2ms', root: 'د ب ر', gloss: 'to plot, scheme; you should plot' },
            { surface: 'قَتْلَنَا', lemma: 'قَتْل', pos: 'noun', features: 'acc+1p', gloss: 'our killing, death' },
          ],
        },
        {
          id: 'qs-v7-c07-024',
          ar: 'وَجِئْتَ بِنَا إِلَى شَطِّ الْبَحْرِ لِيَقْتُلَنَا فِرْعَوْنُ قَتْلَ الْفِيرَانِ حَيْثُ لَا فِرَارَ وَلَا نَجَاةَ.',
          en: 'You have brought us to the shore of the sea for Pharaoh to kill us like rats, where there is no escape and no deliverance.',
          tokens: [
            { surface: 'وَجِئْتَ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.2ms', gloss: 'to come, bring; and you brought' },
            { surface: 'بِنَا', lemma: 'بِ', pos: 'prep', features: 'prep+1p', gloss: 'us' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'شَطِّ', lemma: 'شَطّ', pos: 'noun', features: 'constr.gen', root: 'ش ط ط', gloss: 'the shore of' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
            { surface: 'لِيَقْتُلَنَا', lemma: 'قَتَلَ', pos: 'verb', features: 'prep+impf.3ms+1p', gloss: 'to kill; so that he may kill us' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'قَتْلَ', lemma: 'قَتْل', pos: 'noun', features: 'acc.constr', gloss: 'the killing of' },
            { surface: 'الْفِيرَانِ', lemma: 'فَأْر', pos: 'noun', features: 'pl.def.gen', gloss: 'the rats, mice' },
            { surface: 'حَيْثُ', lemma: 'حَيْثُ', pos: 'adv', features: 'adv', gloss: 'where' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'there is no' },
            { surface: 'فِرَارَ', lemma: 'فِرَار', pos: 'noun', features: 'acc', root: 'ف ر ر', gloss: 'escape, flight' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and no' },
            { surface: 'نَجَاةَ', lemma: 'نَجَاة', pos: 'noun', features: 'acc', gloss: 'deliverance' },
          ],
        },
        {
          id: 'qs-v7-c07-025',
          ar: 'لَا نَذْكُرُ إِلَيْكَ سُوءاً فَلِمَاذَا هَذَا الانْتِقَامُ؟!',
          en: 'We recall no wrong done to you -- so why this vengeance?!',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'نَذْكُرُ', lemma: 'ذَكَرَ', pos: 'verb', features: 'impf.1p', gloss: 'to recall, mention' },
            { surface: 'إِلَيْكَ', lemma: 'إِلَى', pos: 'prep', features: 'prep+2ms', gloss: 'to you' },
            { surface: 'سُوءاً', lemma: 'سُوء', pos: 'noun', features: 'indef.acc', gloss: 'a wrong, evil' },
            { surface: 'فَلِمَاذَا', lemma: 'لِمَاذَا', pos: 'part', features: 'conj+part', gloss: 'so why' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الانْتِقَامُ', lemma: 'اِنْتِقَام', pos: 'noun', features: 'def.nom', root: 'ن ق م', gloss: 'vengeance, retaliation' },
          ],
        },
        {
          id: 'qs-v7-c07-026',
          ar: 'أَلَمْ يَكْفِكَ مَا أَصَابَنَا مِنَ الْجُهْدِ وَالْبَلَاءِ لِأَجْلِكَ حَتَّى جِئْتَ بِنَا إِلَى هُنَا؟!',
          en: 'Was it not enough for you, all the hardship and trial that befell us for your sake, that you should bring us here too?!',
          tokens: [
            { surface: 'أَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'part+neg', gloss: 'was it not' },
            { surface: 'يَكْفِكَ', lemma: 'كَفَى', pos: 'verb', features: 'impf.3ms+2ms', root: 'ك ف ي', gloss: 'to suffice; enough for you' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'أَصَابَنَا', lemma: 'أَصَابَ', pos: 'verb', features: 'perf.3ms+1p', gloss: 'to befall; befell us' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْجُهْدِ', lemma: 'جُهْد', pos: 'noun', features: 'def.gen', root: 'ج ه د', gloss: 'the hardship, effort' },
            { surface: 'وَالْبَلَاءِ', lemma: 'بَلَاء', pos: 'noun', features: 'conj+def.gen', root: 'ب ل و', gloss: 'and the trial' },
            { surface: 'لِأَجْلِكَ', lemma: 'أَجْل', pos: 'noun', features: 'prep+gen+2ms', root: 'أ ج ل', gloss: 'for your sake' },
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'جِئْتَ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.2ms', gloss: 'to come, bring; you brought' },
            { surface: 'بِنَا', lemma: 'بِ', pos: 'prep', features: 'prep+1p', gloss: 'us' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'هُنَا', lemma: 'هُنَا', pos: 'adv', features: 'adv', gloss: 'here' },
          ],
        },
        {
          id: 'qs-v7-c07-027',
          ar: 'هَا هُوَ الْبَحْرُ أَمَامَنَا، وَهَا هُوَ الْعَدُوُ وَرَاءَنَا، وَلَيْسَ لَنَا إِلَّا الْمَوْتُ!',
          en: 'Here is the sea before us, and here is the enemy behind us, and nothing is left for us but death!',
          tokens: [
            { surface: 'هَا', lemma: 'هَا', pos: 'part', features: 'part', root: 'ه ا', gloss: 'here (is)' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'it' },
            { surface: 'الْبَحْرُ', lemma: 'بَحْر', pos: 'noun', features: 'def.nom', gloss: 'the sea' },
            { surface: 'أَمَامَنَا', lemma: 'أَمَام', pos: 'prep', features: 'prep+1p', gloss: 'before us' },
            { surface: 'وَهَا', lemma: 'هَا', pos: 'part', features: 'conj+part', gloss: 'and here (is)' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'it' },
            { surface: 'الْعَدُوُ', lemma: 'عَدُوّ', pos: 'noun', features: 'def.nom', gloss: 'the enemy' },
            { surface: 'وَرَاءَنَا', lemma: 'وَرَاء', pos: 'noun', features: 'prep+1p', root: 'و ر ي', gloss: 'behind us' },
            { surface: 'وَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to not be; and there is not' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'but, except' },
            { surface: 'الْمَوْتُ', lemma: 'مَوْت', pos: 'noun', features: 'def.nom', gloss: 'death' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا اتَّهَمَ بَنُو إِسْرَائِيلَ مُوسَى؟',
          options: ['بِأَنَّهُ دَبَّرَ قَتْلَهُمْ وَجَاءَ بِهِمْ إِلَى شَطِّ الْبَحْرِ حَيْثُ لَا فِرَارَ وَلَا نَجَاةَ', 'بِأَنَّهُ سَرَقَ أَمْوَالَهُمْ', 'بِأَنَّهُ تَرَكَهُمْ فِي مِصْرَ'],
          answer: 0,
          qEn: 'What did the Israelites accuse Mūsā of?',
          optionsEn: ['That he had plotted their death and brought them to the shore of the sea, where there was no escape or deliverance', 'That he had stolen their wealth', 'That he had left them behind in Egypt'],
        },
        {
          q: 'كَيْفَ وَصَفَ بَنُو إِسْرَائِيلَ مَوْقِفَهُمْ بَيْنَ الْبَحْرِ وَالْعَدُوِّ؟',
          options: ['الْبَحْرُ أَمَامَنَا وَالْعَدُوُّ وَرَاءَنَا وَلَيْسَ لَنَا إِلَّا الْمَوْتُ', 'لَا خَطَرَ عَلَيْنَا أَبَداً', 'يُمْكِنُنَا الْهُرُوبُ بِسُهُولَةٍ'],
          answer: 0,
          qEn: 'How did the Israelites describe their situation, caught between the sea and the enemy?',
          optionsEn: ['The sea before us, the enemy behind us, and nothing left for us but death', 'We are in no danger at all', 'We can escape easily'],
        },
      ],
    },
    {
      en: "Then the world grew dark in the eyes of the Israelites; their sight grew dazed, despair took hold, and the voices fell silent. Then everyone shook with fear, and it was fitting for the firm-rooted mountains themselves to shake. But Mūsā's faith in his Lord did not waver, and the people heard a voice carrying the majesty of prophethood: 'No! Indeed, my Lord is with me; He will guide me.'",
      sentences: [
        {
          id: 'qs-v7-c07-028',
          ar: 'هُنَالِكَ أَظْلَمَتِ الدُّنْيَا فِي عُيُونِ بَنِي إِسْرَائِيلَ،',
          en: 'Then the world grew dark in the eyes of the Israelites,',
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'then, thereupon' },
            { surface: 'أَظْلَمَتِ', lemma: 'أَظْلَمَ', pos: 'verb', features: 'perf.3fs', root: 'ظ ل م', gloss: 'to grow dark; grew dark' },
            { surface: 'الدُّنْيَا', lemma: 'دُنْيَا', pos: 'noun', features: 'def.nom', gloss: 'the world' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'عُيُونِ', lemma: 'عَيْن', pos: 'noun', features: 'pl.constr.gen', gloss: 'the eyes of' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.gen', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
          ],
        },
        {
          id: 'qs-v7-c07-029',
          ar: 'وَزَاغَتِ الأَبْصَارُ وَاسْتَوْلَى الْيَأْسُ ثُمَّ خَفَتَتِ الأَصْوَاتُ.',
          en: 'their sight grew dazed, despair took hold, and then the voices fell silent.',
          tokens: [
            { surface: 'وَزَاغَتِ', lemma: 'زَاغَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ز ي غ', gloss: 'to swerve, be confounded; grew dazed' },
            { surface: 'الأَبْصَارُ', lemma: 'بَصَر', pos: 'noun', features: 'pl.def.nom', root: 'ب ص ر', gloss: 'the sights, eyes' },
            { surface: 'وَاسْتَوْلَى', lemma: 'اِسْتَوْلَى', pos: 'verb', features: 'conj+perf.3ms', root: 'و ل ي', gloss: 'to seize control, take hold; and took hold' },
            { surface: 'الْيَأْسُ', lemma: 'يَأْس', pos: 'noun', features: 'def.nom', gloss: 'despair' },
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'خَفَتَتِ', lemma: 'خَفَتَ', pos: 'verb', features: 'perf.3fs', root: 'خ ف ت', gloss: 'to grow faint, fall silent; fell silent' },
            { surface: 'الأَصْوَاتُ', lemma: 'صَوْت', pos: 'noun', features: 'pl.def.nom', gloss: 'the voices' },
          ],
        },
        {
          id: 'qs-v7-c07-030',
          ar: 'هُنَالِكَ تَزَلْزَلَ كُلُّ أَحَدٍ،',
          en: 'Then everyone shook with fear,',
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'then, thereupon' },
            { surface: 'تَزَلْزَلَ', lemma: 'تَزَلْزَلَ', pos: 'verb', features: 'perf.3ms', root: 'ز ل ز ل', gloss: 'to shake, quake' },
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'nom.constr', gloss: 'every' },
            { surface: 'أَحَدٍ', lemma: 'أَحَد', pos: 'noun', features: 'indef.gen', gloss: 'anyone' },
          ],
        },
        {
          id: 'qs-v7-c07-031',
          ar: 'وَحُقَّ لِلْجِبَالِ الرَّاسِيَاتِ أَنْ تَتَزَلْزَلَ.',
          en: 'and it was fitting for the firm-rooted mountains themselves to shake.',
          tokens: [
            { surface: 'وَحُقَّ', lemma: 'حَقَّ', pos: 'verb', features: 'conj+pass+perf.3ms', root: 'ح ق ق', gloss: 'to be right, fitting; and it was fitting' },
            { surface: 'لِلْجِبَالِ', lemma: 'جَبَل', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'for the mountains' },
            { surface: 'الرَّاسِيَاتِ', lemma: 'رَاسِيَة', pos: 'adj', features: 'pl.def.gen', root: 'ر س و', gloss: 'firmly rooted, fixed' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'تَتَزَلْزَلَ', lemma: 'تَزَلْزَلَ', pos: 'verb', features: 'impf.3fs', root: 'ز ل ز ل', gloss: 'to shake' },
          ],
        },
        {
          id: 'qs-v7-c07-032',
          ar: 'وَلَكِنَّ إِيمَانَ مُوسَى بِرَبِّهِ لَمْ يَتَزَلْزَلْ',
          en: "But Mūsā's faith in his Lord did not waver,",
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'إِيمَانَ', lemma: 'إِيمَان', pos: 'noun', features: 'acc.constr', gloss: 'the faith of' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
            { surface: 'بِرَبِّهِ', lemma: 'رَبّ', pos: 'noun', features: 'prep+gen+3ms', gloss: 'in his Lord' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَتَزَلْزَلْ', lemma: 'تَزَلْزَلَ', pos: 'verb', features: 'impf.3ms', root: 'ز ل ز ل', gloss: 'to waver, shake' },
          ],
        },
        {
          id: 'qs-v7-c07-033',
          ar: 'وَسَمِعَ النَّاسُ صَوْتاً فِيهِ جَلَالُ النُّبُوَّةِ.',
          en: 'and the people heard a voice carrying the majesty of prophethood.',
          tokens: [
            { surface: 'وَسَمِعَ', lemma: 'سَمِعَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to hear; and heard' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'صَوْتاً', lemma: 'صَوْت', pos: 'noun', features: 'indef.acc', gloss: 'a voice' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'in which' },
            { surface: 'جَلَالُ', lemma: 'جَلَال', pos: 'noun', features: 'nom.constr', root: 'ج ل ل', gloss: 'the majesty of' },
            { surface: 'النُّبُوَّةِ', lemma: 'نُبُوَّة', pos: 'noun', features: 'def.gen', gloss: 'prophethood' },
          ],
        },
        {
          id: 'qs-v7-c07-034',
          ar: '﴿كَلَّاۤ إِنَّ مَعِىَ رَبِّي سَيَهْدِينِ﴾.',
          en: '"No! Indeed, my Lord is with me; He will guide me."',
          tokens: [
            { surface: 'كَلَّاۤ', lemma: 'كَلَّا', pos: 'part', features: 'part', gloss: 'no! never!' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'مَعِىَ', lemma: 'مَعَ', pos: 'prep', features: 'prep+1s', gloss: 'with me' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', gloss: 'my Lord' },
            { surface: 'سَيَهْدِينِ', lemma: 'هَدَى', pos: 'verb', features: 'part+impf.3ms+1s', gloss: 'to guide; He will guide me' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لِلنَّاسِ عِنْدَمَا رَأَوُا الْجَيْشَ وَالْبَحْرَ؟',
          options: ['أَظْلَمَتِ الدُّنْيَا فِي عُيُونِهِمْ وَزَاغَتِ الْأَبْصَارُ وَاسْتَوْلَى الْيَأْسُ', 'فَرِحُوا كَثِيراً', 'لَمْ يَهْتَمُّوا بِالْأَمْرِ'],
          answer: 0,
          qEn: 'What happened to the people when they saw the army and the sea?',
          optionsEn: ['The world grew dark in their eyes, their sight grew dazed, and despair took hold', 'They rejoiced greatly', 'They paid no attention to it'],
        },
        {
          q: 'مَاذَا حَدَثَ لِإِيمَانِ مُوسَى فِي تِلْكَ اللَّحْظَةِ؟',
          options: ['لَمْ يَتَزَلْزَلْ، وَسَمِعَ النَّاسُ صَوْتاً فِيهِ جَلَالُ النُّبُوَّةِ يَقُولُ إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ', 'تَزَلْزَلَ مِثْلَ إِيمَانِ قَوْمِهِ', 'فَقَدَ الْأَمَلَ تَمَاماً'],
          answer: 0,
          qEn: "What happened to Mūsā's faith in that moment?",
          optionsEn: ["It did not waver, and the people heard a voice of prophetic majesty say: 'Indeed my Lord is with me; He will guide me'", "It wavered just like his people's faith", 'He lost all hope completely'],
        },
      ],
    },
    {
      en: 'Allah commanded Mūsā to strike the sea with his staff. So he struck it, and the sea split open, and the water stood up on each side like a mountain. And there were twelve paths for the twelve tribes -- each tribe had its own path. The people walked on in safety, and reached the shore of security and peace.',
      sentences: [
        {
          id: 'qs-v7-c07-035',
          ar: 'وَأَمَرَ اللَّهُ مُوسَى أَنْ يَضْرِبَ بِعَصَاهُ الْبَحْرَ،',
          en: 'Allah commanded Mūsā to strike the sea with his staff,',
          tokens: [
            { surface: 'وَأَمَرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to command; and commanded' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَضْرِبَ', lemma: 'ضَرَبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to strike' },
            { surface: 'بِعَصَاهُ', lemma: 'عَصَا', pos: 'noun', features: 'prep+gen+3ms', root: 'ع ص و', gloss: 'with his staff' },
            { surface: 'الْبَحْرَ', lemma: 'بَحْر', pos: 'noun', features: 'def.acc', gloss: 'the sea' },
          ],
        },
        {
          id: 'qs-v7-c07-036',
          ar: 'فَضَرَبَ فَانْفَلَقَ الْبَحْرُ وَقَامَ الْمَاءُ عَلَى كُلِّ جَانِبٍ كَالْجَبَلِ.',
          en: 'so he struck it, and the sea split open, and the water stood up on each side like a mountain.',
          tokens: [
            { surface: 'فَضَرَبَ', lemma: 'ضَرَبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to strike; so he struck' },
            { surface: 'فَانْفَلَقَ', lemma: 'اِنْفَلَقَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ف ل ق', gloss: 'to split open; and split' },
            { surface: 'الْبَحْرُ', lemma: 'بَحْر', pos: 'noun', features: 'def.nom', gloss: 'the sea' },
            { surface: 'وَقَامَ', lemma: 'قَامَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to stand up, rise; and stood up' },
            { surface: 'الْمَاءُ', lemma: 'مَاء', pos: 'noun', features: 'def.nom', gloss: 'the water' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'each' },
            { surface: 'جَانِبٍ', lemma: 'جَانِب', pos: 'noun', features: 'indef.gen', gloss: 'side' },
            { surface: 'كَالْجَبَلِ', lemma: 'جَبَل', pos: 'noun', features: 'prep+def.gen', gloss: 'like the mountain' },
          ],
        },
        {
          id: 'qs-v7-c07-037',
          ar: 'وَإِذَا اثْنَا عَشَرَ طَرِيقاً لِاثْنَيْ عَشَرَ سِبْطاً،',
          en: 'And there were twelve paths for twelve tribes --',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'and there suddenly' },
            { surface: 'اثْنَا', lemma: 'اِثْنَانِ', pos: 'num', features: 'nom', gloss: 'two (with عَشَرَ: twelve)' },
            { surface: 'عَشَرَ', lemma: 'عَشَرَ', pos: 'num', features: 'acc', gloss: 'ten (forms twelve)' },
            { surface: 'طَرِيقاً', lemma: 'طَرِيق', pos: 'noun', features: 'indef.acc', gloss: 'a path' },
            { surface: 'لِاثْنَيْ', lemma: 'اِثْنَانِ', pos: 'num', features: 'prep+gen', gloss: 'for twelve' },
            { surface: 'عَشَرَ', lemma: 'عَشَرَ', pos: 'num', features: 'gen', gloss: 'ten (forms twelve)' },
            { surface: 'سِبْطاً', lemma: 'سِبْط', pos: 'noun', features: 'indef.acc', root: 'س ب ط', gloss: 'tribe' },
          ],
        },
        {
          id: 'qs-v7-c07-038',
          ar: 'لِكُلِّ سِبْطٍ طَرِيقٌ.',
          en: 'each tribe had its own path.',
          tokens: [
            { surface: 'لِكُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'prep+constr.gen', gloss: 'for each' },
            { surface: 'سِبْطٍ', lemma: 'سِبْط', pos: 'noun', features: 'indef.gen', root: 'س ب ط', gloss: 'tribe' },
            { surface: 'طَرِيقٌ', lemma: 'طَرِيق', pos: 'noun', features: 'indef.nom', gloss: 'a path' },
          ],
        },
        {
          id: 'qs-v7-c07-039',
          ar: 'وَسَارَ الْقَوْمُ آمِنِينَ وَوَصَلُوا إِلَى بَرِّ الأَمْنِ وَالسَّلَامِ.',
          en: 'The people walked on in safety, and reached the shore of security and peace.',
          tokens: [
            { surface: 'وَسَارَ', lemma: 'سَارَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to walk, march; and walked' },
            { surface: 'الْقَوْمُ', lemma: 'قَوْم', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'آمِنِينَ', lemma: 'آمِن', pos: 'adj', features: 'pl.acc', root: 'أ م ن', gloss: 'safe, secure' },
            { surface: 'وَوَصَلُوا', lemma: 'وَصَلَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to arrive; and reached' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'بَرِّ', lemma: 'بَرّ', pos: 'noun', features: 'constr.gen', gloss: 'the shore of' },
            { surface: 'الأَمْنِ', lemma: 'أَمْن', pos: 'noun', features: 'def.gen', root: 'أ م ن', gloss: 'security' },
            { surface: 'وَالسَّلَامِ', lemma: 'سَلام', pos: 'noun', features: 'conj+def.gen', gloss: 'and peace' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا أَمَرَ اللَّهُ مُوسَى أَنْ يَفْعَلَ؟',
          options: ['أَنْ يَضْرِبَ الْبَحْرَ بِعَصَاهُ', 'أَنْ يَدْعُوَ اللَّهَ فَقَطْ', 'أَنْ يُقَاتِلَ فِرْعَوْنَ'],
          answer: 0,
          qEn: 'What did Allah command Mūsā to do?',
          optionsEn: ['To strike the sea with his staff', 'Just to pray to Allah', 'To fight Pharaoh'],
        },
        {
          q: 'مَاذَا حَدَثَ لِلْبَحْرِ بَعْدَ أَنْ ضَرَبَهُ مُوسَى؟',
          options: ['اِنْفَلَقَ وَقَامَ الْمَاءُ عَلَى كُلِّ جَانِبٍ كَالْجَبَلِ، وَصَارَ فِيهِ اثْنَا عَشَرَ طَرِيقاً', 'لَمْ يَتَغَيَّرْ شَيْءٌ', 'غَرِقَ فِيهِ بَنُو إِسْرَائِيلَ'],
          answer: 0,
          qEn: 'What happened to the sea after Mūsā struck it?',
          optionsEn: ['It split open, the water stood up on each side like a mountain, and twelve paths appeared in it', 'Nothing changed at all', 'The Israelites drowned in it'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَالطَّرِيقُ إِلَى الشَّامِ',
        post: 'وَاضِحٌ مَعْلُومٌ.',
        en: 'The road to Syria was a clear, well-known road.',
        options: ['طَرِيقٌ', 'طَرِيقاً', 'طَرِيقٍ', 'الطَّرِيقُ'],
        answer: 0,
        rationales: [
          'Nominative, indefinite -- predicate of the nominal sentence, matching the taught pattern.',
          'Accusative -- wrong case; nothing here governs the accusative.',
          'Genitive -- wrong case; no preposition or construct governs this word.',
          "Definite with ال -- wrong; the predicate must stay indefinite since the subject (الطَّرِيقُ) is already definite.",
        ],
      },
      {
        type: 'cloze',
        pre: 'سَارَ مُوسَى بِبَنِي إِسْرَائِيلَ فِي اللَّيْلِ نَحْوَ',
        post: 'الْمُقَدَّسَةِ.',
        en: 'Mūsā set out with the Israelites by night toward the Holy Land.',
        options: ['الأَرْضِ', 'الأَرْضَ', 'الأَرْضُ', 'أَرْضٍ'],
        answer: 0,
        rationales: [
          'Genitive -- object of the preposition نَحْوَ, matching the taught pattern.',
          'Accusative -- wrong case; a preposition requires the genitive.',
          'Nominative -- wrong case for the same reason.',
          'Indefinite genitive -- wrong; the Holy Land is definite, matching الْمُقَدَّسَةِ.',
        ],
      },
      {
        type: 'cloze',
        pre: 'هُنَالِكَ',
        post: 'كُلُّ أَحَدٍ.',
        en: 'Then everyone shook with fear.',
        options: ['تَزَلْزَلَ', 'يَتَزَلْزَلُ', 'تَزَلْزَلُوا', 'تَتَزَلْزَلُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular, perfect -- matches the completed narrative event and agrees with the singular subject كُلُّ.',
          'Imperfect -- wrong tense for this completed narrative event.',
          'Perfect plural -- wrong; كُلُّ أَحَدٍ takes singular agreement.',
          'Imperfect feminine/2nd person -- wrong form entirely.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'سَارَ مُوسَى بِبَنِي إِسْرَائِيلَ',
        pre: '',
        post: 'بِبَنِي إِسْرَائِيلَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['سِرْتُ', 'سَارَ', 'سِرْتَ', 'سِرْنَا'],
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
        base: 'سَارَ مُوسَى بِبَنِي إِسْرَائِيلَ',
        pre: '',
        post: 'بِبَنِي إِسْرَائِيلَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['سَارَتْ', 'سَارَ', 'سِرْتُ', 'سِرْنَا'],
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
        base: 'سَارَ مُوسَى بِبَنِي إِسْرَائِيلَ',
        pre: '',
        post: 'بِبَنِي إِسْرَائِيلَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['سَارُوا', 'سَارَ', 'سَارَتْ', 'سِرْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '3rd feminine singular -- wrong gender.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus), chapter 18 -- ١٨ - فِي سَبِيلِ الْعِلْمِ ("In Pursuit of
// Knowledge" -- the story of Mūsā and al-Khiḍr). Pages 205-209, from the
// chapter heading at the top of page 205 through the end of page 209,
// ending just before the ch19 heading box at the top of page 210.
// Transcribed by hand from the scan (vision-read, not OCR) against
// ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md. Source transcript
// supplied pre-verified; no corrections applied against it in this range.
//
// Structure: page 205 opens with three short Qur'anic quotations closing
// out ch17's Holy Land episode (Al-Ma'idah 5:24-26 -- the forty years of
// wandering), then pivots on "عَنِ النَّبِيِّ ﷺ قَالَ" into a single long
// ḥadīth (Ṣaḥīḥ al-Bukhārī, cited in the footnote on page 209) that
// carries the entire Mūsā-and-al-Khiḍr narrative through page 209,
// itself quoting several verses of Sūrat al-Kahf (18:63-77) verbatim.
// Per this task's instructions, the ḥadīth frame is treated the same way
// as a Qur'anic quotation for drillability purposes even though it is
// narrative rather than verse -- but it is the entire content of the
// chapter, so it is tokenized and glossed in full rather than
// fragmented. The honorific glyph ﷺ after "النَّبِيِّ" and the footnote
// marker "(١)" after the closing ḥadīth line are dropped from `ar` and
// not tokenized (neither is a word), matching this corpus's established
// convention of not transcribing verse-end number glyphs (see qasas-v7
// ch1's header). The footnote itself (الجامعُ الصحيحُ للبخاري, a source
// citation, not a vocabulary gloss) is not represented at all, per
// instruction.
//
// Five short Qur'anic quotations inside the ḥadīth (qs-v7-c18-033,
// 047, 055 -- the repeated "﴿قَالَ إِنَّكَ لَن تَسْتَطِيعَ مَعِىَ صَبْرًا﴾" line,
// occurring three times) are 6 tokens with a case-marked common noun
// (صَبْرًا) and so fall inside the build stage's 3-9 token window --
// left as ordinary prose per instruction, since being pulled into
// ordinary build/decoy practice for a short repeated formulaic line is
// an accepted limitation, not something to engineer around. Longer
// quotations (the Kahf 18:77 wall passage, the Ma'idah 5:24-26 verses)
// are automatically safe. workshop.cloze/workshop.shift are built only
// from the narrator's/ḥadīth's own connective prose -- the repeated dual
// travel verb (اِنْطَلَقَا) and the dialogue-tag verb قَالَ -- never from a
// Qur'anic quotation.
//
// Author's inline parenthetical glosses (all transcribed exactly as
// printed, each also tokenized as its own noun/adj token per
// instruction): مِكْتَلٍ (زَنْبِيل) p.206, سَرَباً (مَسْلَكاً) p.206, نَصَباً
// (تَعَباً) p.206, مُسَجّى (مُغَطّى) p.207, نَوْلٍ (أُجْرَةٍ) p.208. All ten
// words (five headwords, five glosses) are tagged new -- checked against
// the shared lexicon and none are already taught, so the gloss words are
// themselves new vocabulary to this learner, not simplifications of
// already-known words.
//
// Judgment calls / things flagged for a second pair of eyes:
//   -- "فَانْطَلَقَ وَانْطَلَقَ بِفَتَاهُ" (qs-v7-c18-017): the transcript shows
//      اِنْطَلَقَ twice in a row ("he set out, and he set out with his young
//      companion"). This reads oddly as a translation-level redundancy
//      but is transcribed faithfully -- flagging it as a place to check
//      against the printed Bukhārī hadith wording rather than silently
//      correcting it, per instruction not to assume an error.
//   -- عَلَّمَنِيهِ / عَلَّمَكَهُ (qs-v7-c18-034/036) each carry two enclitic
//      object pronouns (e.g. -نِي "me" + -هِ "it"). CHAPTER-FORMAT.md's
//      enclitic guidance covers only a single trailing person segment
//      (gen+1s); here only the nearer/primary pronoun is encoded
//      (perf.3ms+1s / perf.3ms+2ms) and the second is left unencoded --
//      an explicit simplification, not an oversight.
//   -- نَقْرَة (qs-v7-c18-041/043, "a peck," اسم المرة of نَقَرَ) and نِسْيَان
//      (qs-v7-c18-050, verbal noun of the already-known نَسِيَ) are both
//      tagged under their verb's own lemma rather than split into a
//      separate noun lemma, unlike this corpus's usual verb/maṣdar split
//      (e.g. اِتَّبَعَ vs. اِتِّبَاع). Reasoning: اسم المرة and a fully
//      transparent maṣdar of an already-taught/reused verb are morphological
//      derivations regular enough not to warrant separate vocabulary
//      entries, unlike a maṣdar that has taken on independent lexical
//      life (اِتِّبَاع, دَعْوَة). Flagging the inconsistency with the general
//      rule rather than asserting it silently.
//   -- قَصَّ (qs-v7-c18-026's Qur'anic قَصَصًا "retracing footsteps" and
//      qs-v7-c18-060's ḥadīth-prose يُقُصَّ "would be narrated") are
//      merged under one lemma رather than two, since both are the same
//      root/verb (قَصَّ الأَثَرَ "to follow a trace" and قَصَّ عَلَيْهِ "to
//      narrate to him" are the same verb, related senses) -- and this is
//      the root of the book's own title, قَصَص.
//   -- تِلْكَ (qs-v7-c18-007) reuses the already-taught demonstrative
//      lemma ذَلِكَ (feminine form) rather than a separate entry, matching
//      this corpus's established هَذَا/هَذِهِ convention.
//   -- A handful of very basic function words -- عَنْ, كَيْفَ, عِنْدَ, هَلْ,
//      نَعَمْ (checked -- actually attested, see below), أَوْ -- do not
//      appear in the supplied lexicon.txt export (نَعَمْ and مَشَى in fact
//      do, and are cited below). عَنْ, كَيْفَ, عِنْدَ, هَلْ, أَوْ are treated as
//      lexicon-export gaps rather than new vocabulary, matching the same
//      kind of gap already flagged in qasas-v7 ch1/ch17's headers.
//   -- يَقَوِّمِ / أَعْلَى (qs-v7-c18-052) and other elative/construct forms of
//      already-known roots (عَلَى, عَلِمَ) are tagged under the base lemma
//      rather than a separate elative entry.
//
// Shared lexicon check (grepped against lexicon.txt and qasas-v7 ch1/
// ch2/ch17's own newWords): أَبَداً (qasas-v2 ch3)، غَضِبَ (qasas-v1 ch3/10)،
// يَئِسَ (qasas-v3 ch17)، مَلَكَ (qasas-v2 ch22)، نَفْس (qasas-v1 ch2)، أَخ
// (qiraah-v1 ch26)، بَيْنَ (qasas-v3 ch20)، سَنَة (qasas-v2 ch12)، مُدَّة
// (qasas-v1 ch14)، مَاتَ (qasas-v1 ch7)، أُمَّة (qasas-v3 ch1)، زَمَان
// (qasas-v2 ch9)، عَاشَ (qasas-v3 ch1)، آخَر (qasas-v1 ch10)، مِصْر (qasas-v2
// ch7)، نَاس (qasas-v1)، عَلِمَ (qasas-v1 ch5)، رَدَّ (qasas-v2 ch19)، عِلْم
// (qasas-v2 ch1)، أَوْحَى (qasas-v3 ch11)، عَبْد (qasas-v2 ch9)، بَحْر
// (qasas-v2 ch9)، حَمَلَ (qasas-v2 ch9)، فَقَدَ (qasas-v2 ch20)، اتَّخَذَ
// (qiraah-v2 ch36)، سَبِيل (qasas-v2 ch20)، عَجَب (qasas-v3 ch18)، لَيْلَة
// (qasas-v1 ch7)، يَوْم (bedrock)، لَمَّا (qasas-v1 ch7)، أَصْبَحَ (new,
// qasas-v7 ch17)، آتَى (qasas-v2 ch11)، لَقِيَ (qasas-v1 ch14)، وَجَدَ
// (qasas-v1 ch9)، جَاوَزَ (qasas-v3 ch15)، مَكَان (qasas-v2 ch9)، أَمَرَ
// (qasas-v1 ch8)، أَوَى (qasas-v3 ch20)، نَسِيَ (qasas-v2 ch6)، اِرْتَدَّ
// (qasas-v2 ch24)، سَلَّمَ (qasas-v1 ch14)، اِتَّبَعَ (qasas-v2 ch11)، عَلَّمَ
// (qasas-v2 ch10)، مَعَ (qasas-v1 ch12)، صَبْر/صَبَرَ (qasas-v2 ch5)، مَشَى
// (qasas-v1 ch5)، سَفِينَة (qasas-v3 ch18)، عَرَفَ (qasas-v1 ch2)، كَلَّمَ
// (qasas-v2 ch18)، غَيْر (qasas-v2 ch9)، وَقَعَ (qasas-v2 ch24)، نَزَعَ
// (qasas-v2 ch7)، أَخَذَ (qasas-v1 ch4)، قَتَلَ (qasas-v1 ch10)، أَبَى
// (qasas-v2 ch8)، قَرْيَة (qasas-v1 ch1)، أَتَى (qasas-v1 ch10)، أَهْل
// (qasas-v2 ch9)، أَرَادَ (qasas-v1 ch5)، أَقَامَ (qasas-v2 ch12)، شَاءَ
// (qasas-v1 ch14)، أَجْر (qasas-v2 ch22)، فِرَاق (qasas-v2 ch23)، رَحِمَ
// (qasas-v2 ch4)، غُلَام (qasas-v2 ch1)، لَعِبَ (qasas-v1 ch14)، يَد
// (qasas-v1 ch15)، نَعَمْ (qasas-v1 ch12)، قَامَ (qasas-v2 ch7)، اِتَّخَذَ
// (qiraah-v2 ch36)، لَوْ (qasas-v1 ch10/15)، نَشَأَ/عُبُودِيَّة/ذُلّ/تَاهَ/عُسْر
// (all new in qasas-v7 ch17, reused here without re-listing)، الْخَضِر/
// يُوشَع/نُون (new here, see below)، بَنُو/بَنِي إِسْرَائِيل (اِبْن known qasas-v1
// ch14; إِسْرَائِيل already introduced elsewhere in this volume, NOT
// re-added here) are all already taught (or reused per the notes above)
// and are NOT re-listed in newWords here.
//
// 70 new words -- unusually high, but this chapter pivots hard from the
// register of ch1/ch2/ch17 (abstract exhortation, Qur'anic paraphrase)
// into concrete travel/nautical/physical-action narrative vocabulary
// (fish, basket, ship, plank, sparrow, wall, rock, shore, garment) that
// simply has not come up before in this corpus, on top of the two new
// proper nouns central to the story and a cluster of grammar/discourse
// words (هَاهُنَا, أَنَّى, ثَمَّ, هُنَالِكَ) that come with reported speech.
// Full list: الْخَضِر، يُوشَع، نُون، دَامَ، قَاتَلَ، هَاهُنَا، قَعَدَ، فَرَقَ، فَاسِق،
// حَرَّمَ، أَرْبَعُون، تَاهَ، أَسِيَ، جِيل، تِيه، شِدَّة، عُسْر، مُسْتَقْبَل، يَهُود، هُنَالِكَ،
// خَطِيب، عَتَبَ، مَجْمَع، مِكْتَل، زَنْبِيل، حُوت، ثَمَّ، اِنْطَلَقَ، فَتَى، صَخْرَة، اِنْسَلَّ،
// سَرَب، مَسْلَك، بَقِيَّة، غَدَاء، سَفَر، نَصَب، تَعَب، مَسّ، بَغَى، أَثَر، قَصَّ، اِنْتَهَى،
// سَجَّى، غَطَّى، ثَوْب، أَنَّى، رُشْد، اِسْتَطَاعَ، سَاحِل، مَرَّ، نَوْل، أُجْرَة، عُصْفُور،
// حَرْف، نَقَرَ، نَقَصَ، عَمَدَ، لَوْح، خَرَقَ، أَغْرَقَ، آخَذَ، أَرْهَقَ، اِقْتَلَعَ، زَكِيّ،
// اِسْتَطْعَمَ، ضَيَّفَ، جِدَار، اِنْقَضَّ، وَدَّ.
// (Note: عُسْر، عُبُودِيَّة، ذُلّ، تَاهَ، نَشَأَ carry over from ch17's newWords and
// are used again here without re-listing, per that chapter's own header.)
//
// No page footnotes (book_note) other than the Bukhārī source citation on
// page 209, which is a citation rather than a vocabulary gloss and is not
// represented in the module, per instruction.
export const CHAPTER = {
  id: 'ch18',
  title: { ar: 'فِي سَبِيلِ الْعِلْمِ', en: 'In Pursuit of Knowledge' },
  newWords: [
    'الْخَضِر', 'يُوشَع', 'نُون', 'دَامَ', 'قَاتَلَ', 'هَاهُنَا', 'قَعَدَ', 'فَرَقَ', 'فَاسِق',
    'حَرَّمَ', 'أَرْبَعُون', 'تَاهَ', 'أَسِيَ', 'جِيل', 'تِيه', 'شِدَّة', 'عُسْر', 'مُسْتَقْبَل',
    'خَطِيب', 'عَتَبَ', 'مَجْمَع', 'مِكْتَل', 'زَنْبِيل', 'حُوت', 'ثَمَّ',
    'اِنْطَلَقَ', 'فَتَى', 'صَخْرَة', 'اِنْسَلَّ', 'سَرَب', 'مَسْلَك', 'بَقِيَّة', 'غَدَاء', 'سَفَر',
    'نَصَب', 'تَعَب', 'مَسّ', 'بَغَى', 'قَصَّ', 'اِنْتَهَى', 'سَجَّى', 'غَطَّى', 'ثَوْب',
    'أَنَّى', 'سَاحِل', 'مَرَّ', 'نَوْل', 'أُجْرَة', 'عُصْفُور', 'حَرْف',
    'نَقَرَ', 'عَمَدَ', 'خَرَقَ', 'أَغْرَقَ', 'آخَذَ', 'أَرْهَقَ', 'اِقْتَلَعَ',
    'زَكِيّ', 'اِسْتَطْعَمَ', 'ضَيَّفَ', 'جِدَار', 'اِنْقَضَّ', 'وَدَّ',
  ],
  lemmas: {
    'الْخَضِر': { gloss: 'al-Khiḍr' },
    'يُوشَع': { gloss: "Yūsha' (Joshua)" },
    'نُون': { gloss: 'Nūn' },
    'دَامَ': { gloss: 'to last, continue, remain' },
    'قَاتَلَ': { gloss: 'to fight' },
    'هَاهُنَا': { gloss: 'right here' },
    'قَعَدَ': { gloss: 'to sit' },
    'فَرَقَ': { gloss: 'to separate, divide' },
    'فَاسِق': { gloss: 'defiantly disobedient, transgressor' },
    'حَرَّمَ': { gloss: 'to forbid, prohibit' },
    'أَرْبَعُون': { gloss: 'forty' },
    'تَاهَ': { gloss: 'to wander lost' },
    'أَسِيَ': { gloss: 'to grieve' },
    'جِيل': { gloss: 'generation' },
    'تِيه': { gloss: 'wilderness of wandering' },
    'شِدَّة': { gloss: 'severity, hardship' },
    'عُسْر': { gloss: 'hardship, difficulty' },
    'مُسْتَقْبَل': { gloss: 'future' },
    'خَطِيب': { gloss: 'orator, one delivering a speech' },
    'عَتَبَ': { gloss: 'to reproach, rebuke' },
    'مَجْمَع': { gloss: 'place of confluence, meeting-place' },
    'مِكْتَل': { gloss: 'basket, container (زَنْبِيل)' },
    'زَنْبِيل': { gloss: 'basket' },
    'حُوت': { gloss: 'fish, whale' },
    'ثَمَّ': { gloss: 'there, at that place' },
    'اِنْطَلَقَ': { gloss: 'to set out, depart' },
    'فَتَى': { gloss: 'young man, companion, servant' },
    'صَخْرَة': { gloss: 'rock' },
    'اِنْسَلَّ': { gloss: 'to slip away, slither out' },
    'سَرَب': { gloss: 'tunnel, path (through water) (مَسْلَك)' },
    'مَسْلَك': { gloss: 'path, way' },
    'بَقِيَّة': { gloss: 'remainder, rest' },
    'غَدَاء': { gloss: 'morning meal, lunch' },
    'سَفَر': { gloss: 'journey, travel' },
    'نَصَب': { gloss: 'fatigue (تَعَب)' },
    'تَعَب': { gloss: 'fatigue, tiredness' },
    'مَسّ': { gloss: 'touch, trace' },
    'بَغَى': { gloss: 'to seek, desire' },
    'قَصَّ': { gloss: 'to narrate; to follow, retrace (a track)' },
    'اِنْتَهَى': { gloss: 'to arrive at, reach, come to an end' },
    'سَجَّى': { gloss: 'to cover, shroud' },
    'غَطَّى': { gloss: 'to cover' },
    'ثَوْب': { gloss: 'garment, cloth' },
    'أَنَّى': { gloss: 'how?, from where?' },
    'سَاحِل': { gloss: 'shore, coast' },
    'مَرَّ': { gloss: 'to pass by' },
    'نَوْل': { gloss: 'fare, toll (أُجْرَة)' },
    'أُجْرَة': { gloss: 'fare, wage' },
    'عُصْفُور': { gloss: 'sparrow, small bird' },
    'حَرْف': { gloss: 'edge' },
    'نَقَرَ': { gloss: 'to peck' },
    'عَمَدَ': { gloss: 'to head for, resolve to do' },
    'خَرَقَ': { gloss: 'to pierce, make a hole in' },
    'أَغْرَقَ': { gloss: 'to drown, sink (something)' },
    'آخَذَ': { gloss: 'to take to task, blame' },
    'أَرْهَقَ': { gloss: 'to burden, overwhelm' },
    'اِقْتَلَعَ': { gloss: 'to uproot, pull off' },
    'زَكِيّ': { gloss: 'pure, innocent' },
    'اِسْتَطْعَمَ': { gloss: 'to ask for food' },
    'ضَيَّفَ': { gloss: 'to host as a guest' },
    'جِدَار': { gloss: 'wall' },
    'اِنْقَضَّ': { gloss: 'to collapse, fall down' },
    'وَدَّ': { gloss: 'to wish, love' },
  },
  paragraphs: [
    {
      en: '[Qur\'an:] "They said: O Mūsā, we will never enter it, ever, so long as they are in it; so go, you and your Lord, and fight -- we are sitting right here." At that, Mūsā became angry and despaired of them. [Qur\'an:] "He said: My Lord, indeed I have power over none but myself and my brother, so separate between us and the defiantly disobedient people." [Qur\'an:] "He said: Then indeed it is forbidden to them for forty years, while they wander lost in the land; so do not grieve over the defiantly disobedient people." And in that period, this generation which had grown up in Egypt in servitude and abasement would die out, and a new generation would arise, growing up in this wandering, in hardship and difficulty -- that is the nation of the future. And this is the fate of the Jews in every age: a lost nation, living in servitude and abasement. It is related from the Prophet that he said: Mūsā stood delivering a speech among the Children of Israel, and he was asked:',
      sentences: [
        {
          // Al-Ma'idah 5:24.
          id: 'qs-v7-c18-001',
          ar: '﴿قَالُوا۟ يَٰمُوسَىٰٓ إِنَّا لَن نَّدْخُلَهَآ أَبَدًا مَّا دَامُوا۟ فِيهَا فَٱذْهَبْ أَنتَ وَرَبُّكَ فَقَٰتِلَآ إِنَّا هَٰهُنَا قَٰعِدُونَ﴾.',
          en: '"They said: O Mūsā, we will never enter it, ever, so long as they are in it; so go, you and your Lord, and fight -- we are sitting right here."',
          tokens: [
            { surface: 'قَالُوا۟', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'يَٰمُوسَىٰٓ', lemma: 'مُوسَى', pos: 'proper', features: 'part', gloss: 'O Mūsā' },
            { surface: 'إِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'part+1p', gloss: 'indeed we' },
            { surface: 'لَن', lemma: 'لَنْ', pos: 'part', features: 'part', gloss: 'never' },
            { surface: 'نَّدْخُلَهَآ', lemma: 'دَخَلَ', pos: 'verb', features: 'impf.1p+3fs', root: 'د خ ل', gloss: 'we enter it' },
            { surface: 'أَبَدًا', lemma: 'أَبَداً', pos: 'adv', features: 'indef.acc', gloss: 'ever, forever' },
            { surface: 'مَّا', lemma: 'مَا', pos: 'part', features: 'part', gloss: 'as long as' },
            { surface: 'دَامُوا۟', lemma: 'دَامَ', pos: 'verb', features: 'perf.3mp', root: 'د و م', gloss: 'to last, remain' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'فَٱذْهَبْ', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+imp.2ms', gloss: 'to go; so go!' },
            { surface: 'أَنتَ', lemma: 'أَنْتَ', pos: 'noun', features: '2ms', gloss: 'you' },
            { surface: 'وَرَبُّكَ', lemma: 'رَبّ', pos: 'noun', features: 'conj+nom+2ms', gloss: 'and your Lord' },
            { surface: 'فَقَٰتِلَآ', lemma: 'قَاتَلَ', pos: 'verb', features: 'conj+imp.2md', root: 'ق ت ل', gloss: 'to fight; and fight!' },
            { surface: 'إِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'part+1p', gloss: 'indeed we' },
            { surface: 'هَٰهُنَا', lemma: 'هَاهُنَا', pos: 'adv', features: 'adv', gloss: 'right here' },
            { surface: 'قَٰعِدُونَ', lemma: 'قَعَدَ', pos: 'noun', features: 'pl.nom', root: 'ق ع د', gloss: 'sitting' },
          ],
        },
        {
          id: 'qs-v7-c18-002',
          ar: 'هُنَالِكَ غَضِبَ مُوسى وَيَئِسَ مِنْ هؤُلاءِ.',
          en: 'At that, Mūsā became angry and despaired of them.',
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'at that, thereupon' },
            { surface: 'غَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'perf.3ms', gloss: 'to become angry; became angry' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'وَيَئِسَ', lemma: 'يَئِسَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to despair; and despaired' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'هؤُلاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'these, them' },
          ],
        },
        {
          // Al-Ma'idah 5:25.
          id: 'qs-v7-c18-003',
          ar: '﴿قَالَ رَبِّ إِنِّي لَآ أَمْلِكُ إِلَّا نَفْسِى وَأَخِى فَٱفْرُقْ بَيْنَنَا وَبَيْنَ ٱلْقَوْمِ ٱلْفَٰسِقِينَ﴾.',
          en: '"He said: My Lord, indeed I have power over none but myself and my brother, so separate between us and the defiantly disobedient people."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'gen+1s', gloss: 'my Lord' },
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'لَآ', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أَمْلِكُ', lemma: 'مَلَكَ', pos: 'verb', features: 'impf.1s', root: 'م ل ك', gloss: 'to have power over, possess; I have power' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'نَفْسِى', lemma: 'نَفْس', pos: 'noun', features: 'acc+1s', gloss: 'myself' },
            { surface: 'وَأَخِى', lemma: 'أَخ', pos: 'noun', features: 'conj+acc+1s', gloss: 'and my brother' },
            { surface: 'فَٱفْرُقْ', lemma: 'فَرَقَ', pos: 'verb', features: 'conj+imp.2ms', root: 'ف ر ق', gloss: 'to separate; so separate!' },
            { surface: 'بَيْنَنَا', lemma: 'بَيْنَ', pos: 'prep', features: 'prep+1p', gloss: 'between us' },
            { surface: 'وَبَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'conj+prep', gloss: 'and between' },
            { surface: 'ٱلْقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'ٱلْفَٰسِقِينَ', lemma: 'فَاسِق', pos: 'adj', features: 'pl.def.gen', root: 'ف س ق', gloss: 'the defiantly disobedient' },
          ],
        },
        {
          // Al-Ma'idah 5:26.
          id: 'qs-v7-c18-004',
          ar: '﴿قَالَ فَإِنَّهَا مُحَرَّمَةٌ عَلَيْهِمْ أَرْبَعِينَ سَنَةً يَتِيهُونَ فِى ٱلْأَرْضِ فَلَا تَأْسَ عَلَى ٱلْقَوْمِ ٱلْفَٰسِقِينَ﴾.',
          en: '"He said: Then indeed it is forbidden to them for forty years, while they wander lost in the land; so do not grieve over the defiantly disobedient people."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'فَإِنَّهَا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+3fs', gloss: 'then indeed it' },
            { surface: 'مُحَرَّمَةٌ', lemma: 'حَرَّمَ', pos: 'adj', features: 'indef.nom.f', root: 'ح ر م', gloss: 'to forbid; forbidden' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'أَرْبَعِينَ', lemma: 'أَرْبَعُون', pos: 'num', features: 'acc', root: 'ر ب ع', gloss: 'forty' },
            { surface: 'سَنَةً', lemma: 'سَنَة', pos: 'noun', features: 'indef.acc', gloss: 'a year' },
            { surface: 'يَتِيهُونَ', lemma: 'تَاهَ', pos: 'verb', features: 'impf.3mp', root: 'ت ي ه', gloss: 'to wander lost' },
            { surface: 'فِى', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ٱلْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the land' },
            { surface: 'فَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'so do not' },
            { surface: 'تَأْسَ', lemma: 'أَسِيَ', pos: 'verb', features: 'impf.2ms', root: 'أ س ي', gloss: 'to grieve' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'ٱلْقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'ٱلْفَٰسِقِينَ', lemma: 'فَاسِق', pos: 'adj', features: 'pl.def.gen', root: 'ف س ق', gloss: 'the defiantly disobedient' },
          ],
        },
        {
          id: 'qs-v7-c18-005',
          ar: 'وَفِي هذِهِ الْمُدَّةِ يَمُوتُ هذَا الْجِيلُ الَّذِي نَشَأَ فِي مِصْرَ عَلى الْعُبُودِيَّةِ وَالذُّلِّ.',
          en: 'And in that period, this generation which had grown up in Egypt in servitude and abasement would die out,',
          tokens: [
            { surface: 'وَفِي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'and in' },
            { surface: 'هذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْمُدَّةِ', lemma: 'مُدَّة', pos: 'noun', features: 'def.gen', gloss: 'the period' },
            { surface: 'يَمُوتُ', lemma: 'مَاتَ', pos: 'verb', features: 'impf.3ms', gloss: 'to die; dies out' },
            { surface: 'هذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْجِيلُ', lemma: 'جِيل', pos: 'noun', features: 'def.nom', root: 'ج ي ل', gloss: 'generation' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'which' },
            { surface: 'نَشَأَ', lemma: 'نَشَأَ', pos: 'verb', features: 'perf.3ms', root: 'ن ش أ', gloss: 'to grow up; grew up' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'عَلى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْعُبُودِيَّةِ', lemma: 'عُبُودِيَّة', pos: 'noun', features: 'def.gen', root: 'ع ب د', gloss: 'servitude' },
            { surface: 'وَالذُّلِّ', lemma: 'ذُلّ', pos: 'noun', features: 'conj+def.gen', root: 'ذ ل ل', gloss: 'and abasement' },
          ],
        },
        {
          id: 'qs-v7-c18-006',
          ar: 'وَيَنْشَأُ جِيلٌ آخَرُ يَنْشَأُ فِي هذَا التِّيهِ عَلى الشِّدَّةِ وَالْعُسْرِ،',
          en: 'and a new generation would arise, growing up in this wandering, in hardship and difficulty,',
          tokens: [
            { surface: 'وَيَنْشَأُ', lemma: 'نَشَأَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ن ش أ', gloss: 'to grow up, arise; and arises' },
            { surface: 'جِيلٌ', lemma: 'جِيل', pos: 'noun', features: 'indef.nom', root: 'ج ي ل', gloss: 'a generation' },
            { surface: 'آخَرُ', lemma: 'آخَر', pos: 'adj', features: 'indef.nom', gloss: 'other, new' },
            { surface: 'يَنْشَأُ', lemma: 'نَشَأَ', pos: 'verb', features: 'impf.3ms', root: 'ن ش أ', gloss: 'growing up' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'هذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'التِّيهِ', lemma: 'تِيه', pos: 'noun', features: 'def.gen', root: 'ت ي ه', gloss: 'the wandering' },
            { surface: 'عَلى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الشِّدَّةِ', lemma: 'شِدَّة', pos: 'noun', features: 'def.gen', root: 'ش د د', gloss: 'hardship' },
            { surface: 'وَالْعُسْرِ', lemma: 'عُسْر', pos: 'noun', features: 'conj+def.gen', root: 'ع س ر', gloss: 'and difficulty' },
          ],
        },
        {
          id: 'qs-v7-c18-007',
          ar: 'وَتِلْكَ أُمَّةُ الْمُسْتَقْبَلِ،',
          en: 'that is the nation of the future,',
          tokens: [
            { surface: 'وَتِلْكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'conj+dem.f', gloss: 'and that' },
            { surface: 'أُمَّةُ', lemma: 'أُمَّة', pos: 'noun', features: 'nom.constr', gloss: 'the nation of' },
            { surface: 'الْمُسْتَقْبَلِ', lemma: 'مُسْتَقْبَل', pos: 'noun', features: 'def.gen', root: 'ق ب ل', gloss: 'the future' },
          ],
        },
        {
          id: 'qs-v7-c18-008',
          ar: 'وهذا هُوَ مَصِيرُ الْيَهُودِ فِي كُلِّ زَمَانٍ،',
          en: 'and this is the fate of the Jews in every age:',
          tokens: [
            { surface: 'وهذا', lemma: 'هَذَا', pos: 'dem', features: 'conj+dem.m', gloss: 'and this' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'he, it' },
            { surface: 'مَصِيرُ', lemma: 'مَصِير', pos: 'noun', features: 'nom.constr', gloss: 'the fate of' },
            { surface: 'الْيَهُودِ', lemma: 'يَهُود', pos: 'noun', features: 'def.gen', root: 'ي ه د', gloss: 'the Jews' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'زَمَانٍ', lemma: 'زَمَان', pos: 'noun', features: 'indef.gen', gloss: 'age, time' },
          ],
        },
        {
          id: 'qs-v7-c18-009',
          ar: 'أُمَّةٌ تَائِهَةٌ تَعِيشُ عَلى الْعُبُودِيَّةِ وَالذُّلِّ.',
          en: 'a lost nation, living in servitude and abasement.',
          tokens: [
            { surface: 'أُمَّةٌ', lemma: 'أُمَّة', pos: 'noun', features: 'indef.nom', gloss: 'a nation' },
            { surface: 'تَائِهَةٌ', lemma: 'تَاهَ', pos: 'adj', features: 'indef.nom.f', root: 'ت ي ه', gloss: 'lost, wandering' },
            { surface: 'تَعِيشُ', lemma: 'عَاشَ', pos: 'verb', features: 'impf.3fs', gloss: 'to live; living' },
            { surface: 'عَلى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْعُبُودِيَّةِ', lemma: 'عُبُودِيَّة', pos: 'noun', features: 'def.gen', root: 'ع ب د', gloss: 'servitude' },
            { surface: 'وَالذُّلِّ', lemma: 'ذُلّ', pos: 'noun', features: 'conj+def.gen', root: 'ذ ل ل', gloss: 'and abasement' },
          ],
        },
        {
          id: 'qs-v7-c18-010',
          ar: 'عَنِ النَّبِيِّ قَالَ: قَامَ مُوسى خَطِيباً فِي بَنِي إِسْرَائِيلَ فَسُئِلَ:',
          en: 'It is related from the Prophet that he said: Mūsā stood delivering a speech among the Children of Israel, and he was asked:',
          tokens: [
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from, concerning' },
            { surface: 'النَّبِيِّ', lemma: 'نَبِيّ', pos: 'noun', features: 'def.gen', gloss: 'the Prophet' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'قَامَ', lemma: 'قَامَ', pos: 'verb', features: 'perf.3ms', root: 'ق و م', gloss: 'to stand; stood' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'خَطِيباً', lemma: 'خَطِيب', pos: 'noun', features: 'indef.acc', root: 'خ ط ب', gloss: 'as an orator, delivering a speech' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.gen.constr', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'فَسُئِلَ', lemma: 'سَأَلَ', pos: 'verb', features: 'conj+pass+perf.3ms', gloss: 'to ask; and was asked' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَمْ سَنَةً حُرِّمَتْ عَلَيْهِمُ الْأَرْضُ الْمُقَدَّسَةُ وَتَاهُوا فِيهَا؟',
          options: ['أَرْبَعِينَ سَنَةً', 'عِشْرِينَ سَنَةً', 'مِئَةَ سَنَةٍ'],
          answer: 0,
          qEn: 'For how many years was the Holy Land forbidden to them, wandering in it?',
          optionsEn: ['Forty years', 'Twenty years', 'A hundred years'],
        },
        {
          q: 'مَاذَا سُئِلَ مُوسى وَهُوَ خَطِيبٌ فِي بَنِي إِسْرَائِيلَ؟',
          options: ['أَيُّ النَّاسِ أَعْلَمُ', 'مَتى تَدْخُلُونَ الْأَرْضَ الْمُقَدَّسَةَ', 'مَنْ يَقُودُ الْجَيْشَ'],
          answer: 0,
          qEn: 'What was Mūsā asked while delivering his speech among the Children of Israel?',
          optionsEn: ['Who among the people is most knowledgeable', 'When will you enter the Holy Land', 'Who will lead the army'],
        },
      ],
    },
    {
      lines: true,
      en: '"Who among the people is most knowledgeable?" He said: "I am most knowledgeable!" So Allah reproached him, since he did not refer knowledge back to Allah. So Allah revealed to him that a servant among His servants at the confluence of the two seas was more knowledgeable than him. He said: "My Lord, how do I reach him?" And it was said to him: "Carry a fish in a basket (زَنْبِيل); wherever you lose it, he is there."',
      sentences: [
        {
          id: 'qs-v7-c18-011',
          ar: 'أَيُّ النَّاسِ أَعْلَمُ؟',
          en: 'Who among the people is most knowledgeable?',
          tokens: [
            { surface: 'أَيُّ', lemma: 'أَيّ', pos: 'noun', features: 'nom.constr', gloss: 'which, who' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'أَعْلَمُ', lemma: 'عَلِمَ', pos: 'adj', features: 'nom', gloss: 'most knowledgeable' },
          ],
        },
        {
          id: 'qs-v7-c18-012',
          ar: 'فَقَالَ: أَنَا أَعْلَمُ!',
          en: 'He said: "I am most knowledgeable!"',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'and he said' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'أَعْلَمُ', lemma: 'عَلِمَ', pos: 'adj', features: 'nom', gloss: 'most knowledgeable' },
          ],
        },
        {
          id: 'qs-v7-c18-013',
          ar: 'فَعَتَبَ اللَّهُ عَلَيْهِ إِذْ لَمْ يَرُدَّ الْعِلْمَ إِلى اللَّهِ!',
          en: 'So Allah reproached him, since he did not refer knowledge back to Allah!',
          tokens: [
            { surface: 'فَعَتَبَ', lemma: 'عَتَبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ت ب', gloss: 'to reproach; so reproached' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'him' },
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'conj', features: 'conj', gloss: 'since' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَرُدَّ', lemma: 'رَدَّ', pos: 'verb', features: 'impf.3ms', gloss: 'to refer back; refer back' },
            { surface: 'الْعِلْمَ', lemma: 'عِلْم', pos: 'noun', features: 'def.acc', gloss: 'knowledge' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v7-c18-014',
          ar: 'فَأَوْحى اللَّهُ إِلَيْهِ أَنَّ عَبْداً مِنْ عِبَادِي بِمَجْمَعِ الْبَحْرَيْنِ هُوَ أَعْلَمُ مِنْكَ.',
          en: 'So Allah revealed to him that a servant among His servants at the confluence of the two seas was more knowledgeable than him.',
          tokens: [
            { surface: 'فَأَوْحى', lemma: 'أَوْحَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to reveal; so revealed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'عَبْداً', lemma: 'عَبْد', pos: 'noun', features: 'indef.acc', gloss: 'a servant' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'عِبَادِي', lemma: 'عَبْد', pos: 'noun', features: 'pl.gen+1s', gloss: 'My servants' },
            { surface: 'بِمَجْمَعِ', lemma: 'مَجْمَع', pos: 'noun', features: 'prep+constr.gen', root: 'ج م ع', gloss: 'at the confluence of' },
            { surface: 'الْبَحْرَيْنِ', lemma: 'بَحْر', pos: 'noun', features: 'du.def.gen', gloss: 'the two seas' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'he' },
            { surface: 'أَعْلَمُ', lemma: 'عَلِمَ', pos: 'adj', features: 'nom', gloss: 'more knowledgeable' },
            { surface: 'مِنْكَ', lemma: 'مِنْ', pos: 'prep', features: 'prep+2ms', gloss: 'than you' },
          ],
        },
        {
          id: 'qs-v7-c18-015',
          ar: 'قَالَ رَبِّ كَيْفَ بِهِ؟',
          en: 'He said: "My Lord, how do I reach him?"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'gen+1s', gloss: 'my Lord' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'part', gloss: 'how' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: '[reach] him' },
          ],
        },
        {
          id: 'qs-v7-c18-016',
          ar: 'فَقِيلَ لَهُ: احْمِلْ حُوتاً فِي مِكْتَلٍ (زَنْبِيل) فَإِذَا فَقَدْتَهُ فَهُوَ ثَمَّ.',
          en: 'And it was said to him: "Carry a fish in a basket (زَنْبِيل); wherever you lose it, he is there."',
          tokens: [
            { surface: 'فَقِيلَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+pass+perf.3ms', root: 'ق و ل', gloss: 'to say; and it was said' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'احْمِلْ', lemma: 'حَمَلَ', pos: 'verb', features: 'imp.2ms', gloss: 'carry!' },
            { surface: 'حُوتاً', lemma: 'حُوت', pos: 'noun', features: 'indef.acc', root: 'ح و ت', gloss: 'a fish' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِكْتَلٍ', lemma: 'مِكْتَل', pos: 'noun', features: 'indef.gen', root: 'ك ت ل', gloss: 'a basket' },
            { surface: 'زَنْبِيل', lemma: 'زَنْبِيل', pos: 'noun', features: 'nom', root: 'ز ن ب ل', gloss: 'basket' },
            { surface: 'فَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'wherever' },
            { surface: 'فَقَدْتَهُ', lemma: 'فَقَدَ', pos: 'verb', features: 'perf.2ms+3ms', gloss: 'to lose; you lose it' },
            { surface: 'فَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'then he' },
            { surface: 'ثَمَّ', lemma: 'ثَمَّ', pos: 'adv', features: 'adv', gloss: 'there' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَ عَتَبَ اللَّهُ عَلى مُوسى حِينَ قَالَ أَنَا أَعْلَمُ؟',
          options: ['لِأَنَّهُ لَمْ يَرُدَّ الْعِلْمَ إِلى اللَّهِ', 'لِأَنَّهُ كَذَبَ', 'لِأَنَّهُ رَفَضَ الْإِجَابَةَ'],
          answer: 0,
          qEn: "Why did Allah reproach Mūsā when he said 'I am most knowledgeable'?",
          optionsEn: ['Because he did not refer knowledge back to Allah', 'Because he lied', 'Because he refused to answer'],
        },
        {
          q: 'أَيْنَ يُوجَدُ الْعَبْدُ الَّذِي هُوَ أَعْلَمُ مِنْ مُوسى؟',
          options: ['بِمَجْمَعِ الْبَحْرَيْنِ', 'فِي مِصْرَ', 'فِي الْأَرْضِ الْمُقَدَّسَةِ'],
          answer: 0,
          qEn: 'Where is the servant who is more knowledgeable than Mūsā to be found?',
          optionsEn: ['At the confluence of the two seas', 'In Egypt', 'In the Holy Land'],
        },
      ],
    },
    {
      en: "So he set out, and set out with his young companion Yūsha' ibn Nūn, and the two of them carried a fish in a basket, until, when they were at the rock, they set down their heads and slept. Then the fish slipped away from the basket, and made its way through the sea as a tunnel (مَسْلَكاً), and it was, for Mūsā and his companion, a wonder. So the two of them journeyed on for the rest of their night and their day; and when morning came, Mūsā said to his companion: \"Bring us our morning meal -- we have certainly met with fatigue (تَعَباً) from this journey of ours.\" But Mūsā had not felt any trace of fatigue until he passed beyond the place he had been commanded [to stop at].",
      sentences: [
        {
          id: 'qs-v7-c18-017',
          ar: 'فَانْطَلَقَ وَانْطَلَقَ بِفَتَاهُ يُوشَعَ بْنِ نُونٍ وَحَمَلا حُوتاً فِي مِكْتَلٍ،',
          en: 'So he set out, and set out with his young companion Yūsha\' ibn Nūn, and the two of them carried a fish in a basket,',
          tokens: [
            { surface: 'فَانْطَلَقَ', lemma: 'اِنْطَلَقَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ط ل ق', gloss: 'to set out; so set out' },
            { surface: 'وَانْطَلَقَ', lemma: 'اِنْطَلَقَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ط ل ق', gloss: 'and set out' },
            { surface: 'بِفَتَاهُ', lemma: 'فَتَى', pos: 'noun', features: 'prep+gen+3ms', root: 'ف ت ي', gloss: 'with his young companion' },
            { surface: 'يُوشَعَ', lemma: 'يُوشَع', pos: 'proper', features: 'gen', gloss: "Yūsha'" },
            { surface: 'بْنِ', lemma: 'اِبْن', pos: 'noun', features: 'gen.constr', root: 'ب ن و', gloss: 'son of' },
            { surface: 'نُونٍ', lemma: 'نُون', pos: 'proper', features: 'gen', gloss: 'Nūn' },
            { surface: 'وَحَمَلا', lemma: 'حَمَلَ', pos: 'verb', features: 'conj+perf.3md', gloss: 'and the two carried' },
            { surface: 'حُوتاً', lemma: 'حُوت', pos: 'noun', features: 'indef.acc', root: 'ح و ت', gloss: 'a fish' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِكْتَلٍ', lemma: 'مِكْتَل', pos: 'noun', features: 'indef.gen', root: 'ك ت ل', gloss: 'a basket' },
          ],
        },
        {
          id: 'qs-v7-c18-018',
          ar: 'حَتّى كَانَا عِنْدَ الصَّخْرَةِ وَضَعَا رَأْسَيْهِما فَنَامَا.',
          en: 'until, when they were at the rock, they set down their heads and slept.',
          tokens: [
            { surface: 'حَتّى', lemma: 'حَتَّى', pos: 'conj', features: 'conj', gloss: 'until' },
            { surface: 'كَانَا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3md', root: 'ك و ن', gloss: 'to be; the two were' },
            { surface: 'عِنْدَ', lemma: 'عِنْدَ', pos: 'prep', features: 'acc', gloss: 'at, near' },
            { surface: 'الصَّخْرَةِ', lemma: 'صَخْرَة', pos: 'noun', features: 'def.gen', root: 'ص خ ر', gloss: 'the rock' },
            { surface: 'وَضَعَا', lemma: 'وَضَعَ', pos: 'verb', features: 'conj+perf.3md', gloss: 'to place; set down' },
            { surface: 'رَأْسَيْهِما', lemma: 'رَأْس', pos: 'noun', features: 'du.acc+3md', gloss: 'their (two) heads' },
            { surface: 'فَنَامَا', lemma: 'نَامَ', pos: 'verb', features: 'conj+perf.3md', gloss: 'and slept' },
          ],
        },
        {
          id: 'qs-v7-c18-019',
          ar: 'فَانْسَلَّ الْحُوتُ مِنَ الْمِكْتَلِ فَاتَّخَذَ سَبِيلَهُ فِي الْبَحْرِ سَرَباً (مَسْلَكاً) وَكَانَ لِمُوسى وَفَتَاهُ عَجَباً.',
          en: 'Then the fish slipped away from the basket, and made its way through the sea as a tunnel (مَسْلَكاً), and it was, for Mūsā and his companion, a wonder.',
          tokens: [
            { surface: 'فَانْسَلَّ', lemma: 'اِنْسَلَّ', pos: 'verb', features: 'conj+perf.3ms', root: 'س ل ل', gloss: 'to slip away; then slipped away' },
            { surface: 'الْحُوتُ', lemma: 'حُوت', pos: 'noun', features: 'def.nom', root: 'ح و ت', gloss: 'the fish' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْمِكْتَلِ', lemma: 'مِكْتَل', pos: 'noun', features: 'def.gen', root: 'ك ت ل', gloss: 'the basket' },
            { surface: 'فَاتَّخَذَ', lemma: 'اِتَّخَذَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to take; and took' },
            { surface: 'سَبِيلَهُ', lemma: 'سَبِيل', pos: 'noun', features: 'acc+3ms', gloss: 'its way' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'through' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
            { surface: 'سَرَباً', lemma: 'سَرَب', pos: 'noun', features: 'indef.acc', root: 'س ر ب', gloss: 'a tunnel, path' },
            { surface: 'مَسْلَكاً', lemma: 'مَسْلَك', pos: 'noun', features: 'indef.acc', root: 'س ل ك', gloss: 'a path' },
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'and it was' },
            { surface: 'لِمُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'prep+gen', gloss: 'for Mūsā' },
            { surface: 'وَفَتَاهُ', lemma: 'فَتَى', pos: 'noun', features: 'conj+gen+3ms', root: 'ف ت ي', gloss: 'and his companion' },
            { surface: 'عَجَباً', lemma: 'عَجَب', pos: 'noun', features: 'indef.acc', gloss: 'a wonder' },
          ],
        },
        {
          id: 'qs-v7-c18-020',
          ar: 'فَانْطَلَقَا بَقِيَّةَ لَيْلَتِهِما وَيَوْمِهِما',
          en: 'So the two of them journeyed on for the rest of their night and their day,',
          tokens: [
            { surface: 'فَانْطَلَقَا', lemma: 'اِنْطَلَقَ', pos: 'verb', features: 'conj+perf.3md', root: 'ط ل ق', gloss: 'so the two set out' },
            { surface: 'بَقِيَّةَ', lemma: 'بَقِيَّة', pos: 'noun', features: 'acc.constr', root: 'ب ق ي', gloss: 'the remainder of' },
            { surface: 'لَيْلَتِهِما', lemma: 'لَيْلَة', pos: 'noun', features: 'gen+3md', gloss: 'their night' },
            { surface: 'وَيَوْمِهِما', lemma: 'يَوْم', pos: 'noun', features: 'conj+gen+3md', gloss: 'and their day' },
          ],
        },
        {
          id: 'qs-v7-c18-021',
          ar: 'فَلَمَّا أَصْبَحَ قَالَ مُوسى لِفَتَاهُ آتِنَا غَدَاءَنَا',
          en: 'and when morning came, Mūsā said to his companion: "Bring us our morning meal --',
          tokens: [
            { surface: 'فَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'أَصْبَحَ', lemma: 'أَصْبَحَ', pos: 'verb', features: 'perf.3ms', root: 'ص ب ح', gloss: 'to become, to reach morning; came' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'لِفَتَاهُ', lemma: 'فَتَى', pos: 'noun', features: 'prep+gen+3ms', root: 'ف ت ي', gloss: 'to his companion' },
            { surface: 'آتِنَا', lemma: 'آتَى', pos: 'verb', features: 'imp.2ms+1p', gloss: 'to give, bring; bring us' },
            { surface: 'غَدَاءَنَا', lemma: 'غَدَاء', pos: 'noun', features: 'acc+1p', root: 'غ د و', gloss: 'our morning meal' },
          ],
        },
        {
          id: 'qs-v7-c18-022',
          ar: 'لَقَدْ لَقِينَا مِنْ سَفَرِنَا هذَا نَصَباً (تَعَباً).',
          en: 'we have certainly met with fatigue (تَعَباً) from this journey of ours."',
          tokens: [
            { surface: 'لَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'part+part', gloss: 'certainly' },
            { surface: 'لَقِينَا', lemma: 'لَقِيَ', pos: 'verb', features: 'perf.1p', gloss: 'to meet, encounter; we met' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'سَفَرِنَا', lemma: 'سَفَر', pos: 'noun', features: 'gen+1p', root: 'س ف ر', gloss: 'our journey' },
            { surface: 'هذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'نَصَباً', lemma: 'نَصَب', pos: 'noun', features: 'indef.acc', root: 'ن ص ب', gloss: 'fatigue' },
            { surface: 'تَعَباً', lemma: 'تَعَب', pos: 'noun', features: 'indef.acc', root: 'ت ع ب', gloss: 'fatigue' },
          ],
        },
        {
          id: 'qs-v7-c18-023',
          ar: 'وَلَمْ يَجِدْ مُوسى مَسّاً مِنَ النَّصَبِ حَتّى جَاوَزَ الْمَكَانَ الَّذِي أُمِرَ بِهِ.',
          en: 'But Mūsā had not felt any trace of fatigue until he passed beyond the place he had been commanded [to stop at].',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'but not' },
            { surface: 'يَجِدْ', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.3ms', gloss: 'to find, feel; felt' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'مَسّاً', lemma: 'مَسّ', pos: 'noun', features: 'indef.acc', root: 'م س س', gloss: 'a trace, touch' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'النَّصَبِ', lemma: 'نَصَب', pos: 'noun', features: 'def.gen', root: 'ن ص ب', gloss: 'the fatigue' },
            { surface: 'حَتّى', lemma: 'حَتَّى', pos: 'conj', features: 'conj', gloss: 'until' },
            { surface: 'جَاوَزَ', lemma: 'جَاوَزَ', pos: 'verb', features: 'perf.3ms', gloss: 'to pass beyond' },
            { surface: 'الْمَكَانَ', lemma: 'مَكَان', pos: 'noun', features: 'def.acc', gloss: 'the place' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'which' },
            { surface: 'أُمِرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'pass+perf.3ms', gloss: 'to command; he was commanded' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'concerning it' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ عَرَفَ مُوسى وَفَتَاهُ الْمَكَانَ الَّذِي فَقَدَا فِيهِ الْحُوتَ؟',
          options: ['بِأَنَّ الْحُوتَ انْسَلَّ مِنَ الْمِكْتَلِ عِنْدَ الصَّخْرَةِ', 'بِعَلامَةٍ فِي السَّمَاءِ', 'بِسُؤَالِ رَجُلٍ فِي الطَّرِيقِ'],
          answer: 0,
          qEn: 'How would Mūsā and his companion recognize the place where they lost the fish?',
          optionsEn: ['By the fish slipping away from the basket at the rock', 'By a sign in the sky', 'By asking a man on the road'],
        },
      ],
    },
    {
      lines: true,
      en: 'His companion said to him: "Did you see, when we took refuge at the rock -- indeed I forgot the fish." Mūsā said: "That is what we were seeking." So the two of them turned back, retracing their footsteps exactly.',
      sentences: [
        {
          // Al-Kahf 18:63.
          id: 'qs-v7-c18-024',
          ar: 'فَقَالَ لَهُ فَتَاهُ ﴿أَرَءَيْتَ إِذْ أَوَيْنَآ إِلَى ٱلصَّخْرَةِ فَإِنِّى نَسِيتُ ٱلْحُوتَ﴾.',
          en: 'His companion said to him: "Did you see, when we took refuge at the rock -- indeed I forgot the fish."',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'so said' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'فَتَاهُ', lemma: 'فَتَى', pos: 'noun', features: 'nom+3ms', root: 'ف ت ي', gloss: 'his companion' },
            { surface: 'أَرَءَيْتَ', lemma: 'رَأَى', pos: 'verb', features: 'perf.2ms', gloss: 'to see; did you see' },
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'conj', features: 'conj', gloss: 'when' },
            { surface: 'أَوَيْنَآ', lemma: 'أَوَى', pos: 'verb', features: 'perf.1p', gloss: 'to take refuge; we took refuge' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'ٱلصَّخْرَةِ', lemma: 'صَخْرَة', pos: 'noun', features: 'def.gen', root: 'ص خ ر', gloss: 'the rock' },
            { surface: 'فَإِنِّى', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1s', gloss: 'indeed I' },
            { surface: 'نَسِيتُ', lemma: 'نَسِيَ', pos: 'verb', features: 'perf.1s', gloss: 'to forget; I forgot' },
            { surface: 'ٱلْحُوتَ', lemma: 'حُوت', pos: 'noun', features: 'def.acc', root: 'ح و ت', gloss: 'the fish' },
          ],
        },
        {
          // Al-Kahf 18:64a.
          id: 'qs-v7-c18-025',
          ar: 'قَالَ مُوسى: ﴿ذَٰلِكَ مَا كُنَّا نَبْغِ﴾',
          en: 'Mūsā said: "That is what we were seeking."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'ذَٰلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'كُنَّا', lemma: 'كَانَ', pos: 'verb', features: 'perf.1p', root: 'ك و ن', gloss: 'we were' },
            { surface: 'نَبْغِ', lemma: 'بَغَى', pos: 'verb', features: 'impf.1p', root: 'ب غ ي', gloss: 'to seek, desire; seeking' },
          ],
        },
        {
          // Al-Kahf 18:64b.
          id: 'qs-v7-c18-026',
          ar: '﴿فَٱرْتَدَّا عَلَىٰٓ ءَاثَارِهِمَا قَصَصًا﴾.',
          en: 'So the two of them turned back, retracing their footsteps exactly.',
          tokens: [
            { surface: 'فَٱرْتَدَّا', lemma: 'اِرْتَدَّ', pos: 'verb', features: 'conj+perf.3md', gloss: 'to turn back; so the two turned back' },
            { surface: 'عَلَىٰٓ', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on, along' },
            { surface: 'ءَاثَارِهِمَا', lemma: 'أَثَر', pos: 'noun', features: 'pl.gen+3md', root: 'أ ث ر', gloss: 'their tracks' },
            { surface: 'قَصَصًا', lemma: 'قَصَّ', pos: 'noun', features: 'indef.acc', root: 'ق ص ص', gloss: 'retracing, following exactly' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا نَسِيَ فَتَى مُوسى عِنْدَ الصَّخْرَةِ؟',
          options: ['الْحُوتَ', 'الْمِكْتَلَ', 'الْعَصَا'],
          answer: 0,
          qEn: "What did Mūsā's companion forget at the rock?",
          optionsEn: ['The fish', 'The basket', 'The staff'],
        },
      ],
    },
    {
      lines: true,
      en: 'When they reached the rock, there was a man covered (مُغَطّى) with a garment, and Mūsā greeted him with salām. Al-Khiḍr said: "And how does salām [reach] your land?" He said: "I am Mūsā!" He said: "The Mūsā of the Children of Israel?" He said: "Yes!" Mūsā said: "May I follow you, so that you may teach me some of the right guidance you have been taught?" He said: "Indeed you will not be able to have patience with me! O Mūsā, I am upon knowledge from the knowledge of Allah which He taught me, which you do not know, and you are upon knowledge which Allah taught you, which I do not know!" So the two of them set out, walking along the shore of the sea, having no ship,',
      sentences: [
        {
          id: 'qs-v7-c18-027',
          ar: 'فَلَمَّا انْتَهَيَا إِلى الصَّخْرَةِ إِذَا رَجُلٌ مُسَجّى (مُغَطّى) بِثَوْبِ فَسَلَّمَ مُوسى.',
          en: 'When they reached the rock, there was a man covered (مُغَطّى) with a garment, and Mūsā greeted him with salām.',
          tokens: [
            { surface: 'فَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'انْتَهَيَا', lemma: 'اِنْتَهَى', pos: 'verb', features: 'perf.3md', root: 'ن ه ي', gloss: 'to arrive, reach; the two reached' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الصَّخْرَةِ', lemma: 'صَخْرَة', pos: 'noun', features: 'def.gen', root: 'ص خ ر', gloss: 'the rock' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'part', features: 'part', gloss: 'there was, behold' },
            { surface: 'رَجُلٌ', lemma: 'رَجُل', pos: 'noun', features: 'indef.nom', gloss: 'a man' },
            { surface: 'مُسَجّى', lemma: 'سَجَّى', pos: 'adj', features: 'indef.nom', root: 'س ج و', gloss: 'covered, shrouded' },
            { surface: 'مُغَطّى', lemma: 'غَطَّى', pos: 'adj', features: 'indef.nom', root: 'غ ط و', gloss: 'covered' },
            { surface: 'بِثَوْبِ', lemma: 'ثَوْب', pos: 'noun', features: 'prep+gen', root: 'ث و ب', gloss: 'with a garment' },
            { surface: 'فَسَلَّمَ', lemma: 'سَلَّمَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to greet with salām; and greeted' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
          ],
        },
        {
          id: 'qs-v7-c18-028',
          ar: 'فَقَالَ الْخَضِرُ: وَأَنّى بِأَرْضِكَ السَّلامُ؟',
          en: 'Al-Khiḍr said: "And how does salām [reach] your land?"',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'الْخَضِرُ', lemma: 'الْخَضِر', pos: 'proper', features: 'def.nom', gloss: 'al-Khiḍr' },
            { surface: 'وَأَنّى', lemma: 'أَنَّى', pos: 'part', features: 'conj+part', gloss: 'and how' },
            { surface: 'بِأَرْضِكَ', lemma: 'أَرْض', pos: 'noun', features: 'prep+gen+2ms', gloss: 'in your land' },
            { surface: 'السَّلامُ', lemma: 'سَلام', pos: 'noun', features: 'def.nom', gloss: 'peace, salām' },
          ],
        },
        {
          id: 'qs-v7-c18-029',
          ar: 'فَقَالَ: أَنَا مُوسى!',
          en: 'He said: "I am Mūsā!"',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
          ],
        },
        {
          id: 'qs-v7-c18-030',
          ar: 'فَقَالَ: مُوسى بَنِي إِسْرَائِيلَ؟',
          en: 'He said: "The Mūsā of the Children of Israel?"',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.gen.constr', root: 'ب ن و', gloss: 'of the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
          ],
        },
        {
          id: 'qs-v7-c18-031',
          ar: 'قَالَ: نَعَمْ!',
          en: 'He said: "Yes!"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'نَعَمْ', lemma: 'نَعَمْ', pos: 'part', features: 'part', gloss: 'yes' },
          ],
        },
        {
          // Al-Kahf 18:66.
          id: 'qs-v7-c18-032',
          ar: 'قَالَ مُوسى: ﴿هَلْ أَتَّبِعُكَ عَلَىٰٓ أَن تُعَلِّمَنِ مِمَّا عُلِّمْتَ رُشْدًا﴾؟',
          en: 'Mūsā said: "May I follow you, so that you may teach me some of the right guidance you have been taught?"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'هَلْ', lemma: 'هَلْ', pos: 'part', features: 'part', gloss: '[may I]' },
            { surface: 'أَتَّبِعُكَ', lemma: 'اِتَّبَعَ', pos: 'verb', features: 'impf.1s+2ms', gloss: 'to follow; may I follow you' },
            { surface: 'عَلَىٰٓ', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on [condition]' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'تُعَلِّمَنِ', lemma: 'عَلَّمَ', pos: 'verb', features: 'impf.2ms+1s', gloss: 'to teach; you teach me' },
            { surface: 'مِمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'from what' },
            { surface: 'عُلِّمْتَ', lemma: 'عَلَّمَ', pos: 'verb', features: 'pass+perf.2ms', gloss: 'to teach; you were taught' },
            { surface: 'رُشْدًا', lemma: 'رُشْد', pos: 'noun', features: 'indef.acc', root: 'ر ش د', gloss: 'right guidance' },
          ],
        },
        {
          // Al-Kahf 18:67.
          id: 'qs-v7-c18-033',
          ar: '﴿قَالَ إِنَّكَ لَن تَسْتَطِيعَ مَعِىَ صَبْرًا﴾!',
          en: '"He said: Indeed you will not be able to have patience with me!"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'إِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'part+2ms', gloss: 'indeed you' },
            { surface: 'لَن', lemma: 'لَنْ', pos: 'part', features: 'part', gloss: 'not' },
            { surface: 'تَسْتَطِيعَ', lemma: 'اِسْتَطَاعَ', pos: 'verb', features: 'impf.2ms', root: 'ط و ع', gloss: 'to be able; you will be able' },
            { surface: 'مَعِىَ', lemma: 'مَعَ', pos: 'prep', features: 'prep+1s', gloss: 'with me' },
            { surface: 'صَبْرًا', lemma: 'صَبْر', pos: 'noun', features: 'indef.acc', gloss: 'patience' },
          ],
        },
        {
          id: 'qs-v7-c18-034',
          ar: 'يَا مُوسى إِنِّي عَلى عِلْمٍ مِنْ عِلْمِ اللَّهِ عَلَّمَنِيهِ لا تَعْلَمُهُ أَنْتَ،',
          en: 'O Mūsā, I am upon knowledge from the knowledge of Allah which He taught me, which you do not know,',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'عَلى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'عِلْمٍ', lemma: 'عِلْم', pos: 'noun', features: 'indef.gen', gloss: 'knowledge' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'عِلْمِ', lemma: 'عِلْم', pos: 'noun', features: 'constr.gen', gloss: 'the knowledge of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'عَلَّمَنِيهِ', lemma: 'عَلَّمَ', pos: 'verb', features: 'perf.3ms+1s', gloss: 'to teach; He taught me it' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَعْلَمُهُ', lemma: 'عَلِمَ', pos: 'verb', features: 'impf.2ms+3ms', gloss: 'to know; you know it' },
            { surface: 'أَنْتَ', lemma: 'أَنْتَ', pos: 'noun', features: '2ms', gloss: 'you' },
          ],
        },
        {
          id: 'qs-v7-c18-035',
          ar: 'وَأَنْتَ عَلى عِلْمٍ عَلَّمَكَهُ الله لا أَعْلَمُهُ!',
          en: 'and you are upon knowledge which Allah taught you, which I do not know!',
          tokens: [
            { surface: 'وَأَنْتَ', lemma: 'أَنْتَ', pos: 'noun', features: 'conj+2ms', gloss: 'and you' },
            { surface: 'عَلى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'عِلْمٍ', lemma: 'عِلْم', pos: 'noun', features: 'indef.gen', gloss: 'knowledge' },
            { surface: 'عَلَّمَكَهُ', lemma: 'عَلَّمَ', pos: 'verb', features: 'perf.3ms+2ms', gloss: 'to teach; He taught you it' },
            { surface: 'الله', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أَعْلَمُهُ', lemma: 'عَلِمَ', pos: 'verb', features: 'impf.1s+3ms', gloss: 'to know; I know it' },
          ],
        },
        {
          id: 'qs-v7-c18-036',
          ar: 'فَانْطَلَقَا يَمْشِيَانِ عَلى سَاحِلِ الْبَحْرِ لَيْسَ لَهُمَا سَفِينَةٌ',
          en: 'So the two of them set out, walking along the shore of the sea, having no ship,',
          tokens: [
            { surface: 'فَانْطَلَقَا', lemma: 'اِنْطَلَقَ', pos: 'verb', features: 'conj+perf.3md', root: 'ط ل ق', gloss: 'so the two set out' },
            { surface: 'يَمْشِيَانِ', lemma: 'مَشَى', pos: 'verb', features: 'impf.3md', gloss: 'to walk; walking' },
            { surface: 'عَلى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'along' },
            { surface: 'سَاحِلِ', lemma: 'سَاحِل', pos: 'noun', features: 'constr.gen', root: 'س ح ل', gloss: 'the shore of' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'to not be; having not' },
            { surface: 'لَهُمَا', lemma: 'لِ', pos: 'prep', features: 'prep+3md', gloss: 'for the two of them' },
            { surface: 'سَفِينَةٌ', lemma: 'سَفِينَة', pos: 'noun', features: 'indef.nom', gloss: 'a ship' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا طَلَبَ مُوسى مِنَ الْخَضِرِ؟',
          options: ['أَنْ يَتَّبِعَهُ لِيُعَلِّمَهُ مِمَّا عُلِّمَ رُشْداً', 'أَنْ يُقَاتِلَ مَعَهُ', 'أَنْ يُعْطِيَهُ مَالاً'],
          answer: 0,
          qEn: 'What did Mūsā ask of al-Khiḍr?',
          optionsEn: ['To follow him so that he would teach him some of the right guidance he had been taught', 'To fight alongside him', 'To give him money'],
        },
        {
          q: 'مَاذَا قَالَ الْخَضِرُ لِمُوسى حِينَ طَلَبَ أَنْ يَتَّبِعَهُ؟',
          options: ['إِنَّكَ لَنْ تَسْتَطِيعَ مَعِيَ صَبْراً', 'حَيَّاهُ بِفَرَحٍ وَقَبِلَ فَوْراً', 'رَفَضَ الطَّلَبَ نِهَائِيّاً'],
          answer: 0,
          qEn: 'What did al-Khiḍr say to Mūsā when he asked to follow him?',
          optionsEn: ['Indeed you will not be able to have patience with me', 'He welcomed him joyfully and agreed at once', 'He refused the request outright'],
        },
      ],
    },
    {
      en: "Then a ship passed by them, and they spoke to its crew to carry them. Al-Khiḍr was recognized, so they carried the two of them without any fare (أُجْرَةٍ). Then a sparrow came and landed on the edge of the ship, and it pecked once or twice at the sea. Al-Khiḍr said: \"O Mūsā, my knowledge and your knowledge have diminished nothing from the knowledge of Allah except like the peck of this sparrow in the sea.\" Then al-Khiḍr went for a plank from the planks of the ship and pulled it out.",
      sentences: [
        {
          id: 'qs-v7-c18-037',
          ar: 'فَمَرَّتْ بِهِمَا سَفِينَةٌ فَكَلَّمُوهُمْ أَنْ يَحْمِلُوهُمَا.',
          en: 'Then a ship passed by them, and they spoke to its crew to carry them.',
          tokens: [
            { surface: 'فَمَرَّتْ', lemma: 'مَرَّ', pos: 'verb', features: 'conj+perf.3fs', root: 'م ر ر', gloss: 'to pass by; then passed by' },
            { surface: 'بِهِمَا', lemma: 'بِ', pos: 'prep', features: 'prep+3md', gloss: 'by them' },
            { surface: 'سَفِينَةٌ', lemma: 'سَفِينَة', pos: 'noun', features: 'indef.nom', gloss: 'a ship' },
            { surface: 'فَكَلَّمُوهُمْ', lemma: 'كَلَّمَ', pos: 'verb', features: 'conj+perf.3mp+3mp', gloss: 'to speak to; and they spoke to them' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يَحْمِلُوهُمَا', lemma: 'حَمَلَ', pos: 'verb', features: 'impf.3mp+3md', gloss: 'to carry; they carry the two of them' },
          ],
        },
        {
          id: 'qs-v7-c18-038',
          ar: 'فَعُرِفَ الْخَضِرُ فَحَمَلُوهُمَا بِغَيْرِ نَوْلٍ (أُجْرَةٍ).',
          en: 'Al-Khiḍr was recognized, so they carried the two of them without any fare (أُجْرَةٍ).',
          tokens: [
            { surface: 'فَعُرِفَ', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+pass+perf.3ms', gloss: 'to know, recognize; and was recognized' },
            { surface: 'الْخَضِرُ', lemma: 'الْخَضِر', pos: 'proper', features: 'def.nom', gloss: 'al-Khiḍr' },
            { surface: 'فَحَمَلُوهُمَا', lemma: 'حَمَلَ', pos: 'verb', features: 'conj+perf.3mp+3md', gloss: 'and they carried the two of them' },
            { surface: 'بِغَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'prep+constr.gen', gloss: 'without' },
            { surface: 'نَوْلٍ', lemma: 'نَوْل', pos: 'noun', features: 'indef.gen', root: 'ن و ل', gloss: 'a fare' },
            { surface: 'أُجْرَةٍ', lemma: 'أُجْرَة', pos: 'noun', features: 'indef.gen', root: 'ا ج ر', gloss: 'a fare, wage' },
          ],
        },
        {
          id: 'qs-v7-c18-039',
          ar: 'فَجَاءَ عُصْفُورٌ فَوَقَعَ عَلى حَرْفِ السَّفِينَةِ،',
          en: 'Then a sparrow came and landed on the edge of the ship,',
          tokens: [
            { surface: 'فَجَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to come; then came' },
            { surface: 'عُصْفُورٌ', lemma: 'عُصْفُور', pos: 'noun', features: 'indef.nom', root: 'ع ص ف ر', gloss: 'a sparrow' },
            { surface: 'فَوَقَعَ', lemma: 'وَقَعَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to land, fall; and landed' },
            { surface: 'عَلى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'حَرْفِ', lemma: 'حَرْف', pos: 'noun', features: 'constr.gen', root: 'ح ر ف', gloss: 'the edge of' },
            { surface: 'السَّفِينَةِ', lemma: 'سَفِينَة', pos: 'noun', features: 'def.gen', gloss: 'the ship' },
          ],
        },
        {
          id: 'qs-v7-c18-040',
          ar: 'فَنَقَرَ نَقْرَةً أَوْ نَقْرَتَيْنِ مِنَ الْبَحْرِ.',
          en: 'and it pecked once or twice at the sea.',
          tokens: [
            { surface: 'فَنَقَرَ', lemma: 'نَقَرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن ق ر', gloss: 'to peck; and pecked' },
            { surface: 'نَقْرَةً', lemma: 'نَقَرَ', pos: 'noun', features: 'indef.acc', gloss: 'a peck' },
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'نَقْرَتَيْنِ', lemma: 'نَقَرَ', pos: 'noun', features: 'du.indef.acc', gloss: 'two pecks' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'at, from' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
          ],
        },
        {
          id: 'qs-v7-c18-041',
          ar: 'فَقَالَ الْخَضِرُ:',
          en: 'Al-Khiḍr said:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'الْخَضِرُ', lemma: 'الْخَضِر', pos: 'proper', features: 'def.nom', gloss: 'al-Khiḍr' },
          ],
        },
        {
          id: 'qs-v7-c18-042',
          ar: 'يَا مُوسى مَا نَقَصَ عِلْمِي وَعِلْمُكَ مِنْ عِلْمِ اللَّهِ إِلَّا كَنَقْرَةِ هذَا الْعُصْفُورِ فِي الْبَحْرِ.',
          en: 'O Mūsā, my knowledge and your knowledge have diminished nothing from the knowledge of Allah except like the peck of this sparrow in the sea.',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not, nothing' },
            { surface: 'نَقَصَ', lemma: 'نَقَصَ', pos: 'verb', features: 'perf.3ms', root: 'ن ق ص', gloss: 'to decrease, diminish' },
            { surface: 'عِلْمِي', lemma: 'عِلْم', pos: 'noun', features: 'nom+1s', gloss: 'my knowledge' },
            { surface: 'وَعِلْمُكَ', lemma: 'عِلْم', pos: 'noun', features: 'conj+nom+2ms', gloss: 'and your knowledge' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'عِلْمِ', lemma: 'عِلْم', pos: 'noun', features: 'constr.gen', gloss: 'the knowledge of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'كَنَقْرَةِ', lemma: 'نَقَرَ', pos: 'noun', features: 'prep+constr.gen', gloss: 'like the peck of' },
            { surface: 'هذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْعُصْفُورِ', lemma: 'عُصْفُور', pos: 'noun', features: 'def.gen', gloss: 'the sparrow' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
          ],
        },
        {
          id: 'qs-v7-c18-043',
          ar: 'فَعَمَدَ الْخَضِرُ إِلى لَوْحٍ مِنْ أَلْوَاحِ السَّفِينَةِ فَنَزَعَهُ.',
          en: 'Then al-Khiḍr went for a plank from the planks of the ship and pulled it out.',
          tokens: [
            { surface: 'فَعَمَدَ', lemma: 'عَمَدَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع م د', gloss: 'to head for, resolve to; then went for' },
            { surface: 'الْخَضِرُ', lemma: 'الْخَضِر', pos: 'proper', features: 'def.nom', gloss: 'al-Khiḍr' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'for, to' },
            { surface: 'لَوْحٍ', lemma: 'لَوْح', pos: 'noun', features: 'indef.gen', root: 'ل و ح', gloss: 'a plank' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أَلْوَاحِ', lemma: 'لَوْح', pos: 'noun', features: 'pl.gen.constr', gloss: 'the planks of' },
            { surface: 'السَّفِينَةِ', lemma: 'سَفِينَة', pos: 'noun', features: 'def.gen', gloss: 'the ship' },
            { surface: 'فَنَزَعَهُ', lemma: 'نَزَعَ', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to pull out; and pulled it out' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ حَمَلَ الْبَحَّارَةُ الْخَضِرَ وَمُوسى فِي السَّفِينَةِ؟',
          options: ['بِغَيْرِ نَوْلٍ لَمَّا عَرَفُوا الْخَضِرَ', 'بِأُجْرَةٍ كَبِيرَةٍ', 'رَفَضُوا حَمْلَهُمَا أَوَّلاً'],
          answer: 0,
          qEn: 'How did the sailors carry al-Khiḍr and Mūsā on the ship?',
          optionsEn: ['Without any fare, once they recognized al-Khiḍr', 'For a large fare', 'They refused to carry them at first'],
        },
        {
          q: 'بِمَ شَبَّهَ الْخَضِرُ عِلْمَهُ وَعِلْمَ مُوسى بِجَانِبِ عِلْمِ اللَّهِ؟',
          options: ['بِنَقْرَةِ الْعُصْفُورِ فِي الْبَحْرِ', 'بِقَطْرَةٍ مِنَ الْمَطَرِ', 'بِحَبَّةِ رَمْلٍ فِي الصَّحْرَاءِ'],
          answer: 0,
          qEn: "What did al-Khiḍr compare his and Mūsā's knowledge to, next to the knowledge of Allah?",
          optionsEn: ["The sparrow's peck in the sea", 'A drop of rain', 'A grain of sand in the desert'],
        },
      ],
    },
    {
      lines: true,
      en: 'Mūsā said: "A people who carried us without a fare -- you went and made a hole in their ship, to drown its people?!" Al-Khiḍr said: "Did I not say that you would not be able to have patience with me?" Mūsā said: "Do not take me to task for what I forgot, and do not burden me with hardship in my affair." So the first [objection] from Mūsā was [due to] forgetfulness.',
      sentences: [
        {
          id: 'qs-v7-c18-044',
          ar: 'فَقَالَ مُوسى:',
          en: 'Mūsā said:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
          ],
        },
        {
          id: 'qs-v7-c18-045',
          ar: 'قَوْمٌ حَمَلُونَا بِغَيْرِ نَوْلٍ عَمَدْتَ إِلى سَفِينَتِهِمْ فَخَرَقْتَهَا لِتُغْرِقَ أَهْلَها؟!!',
          en: '"A people who carried us without a fare -- you went and made a hole in their ship, to drown its people?!"',
          tokens: [
            { surface: 'قَوْمٌ', lemma: 'قَوْم', pos: 'noun', features: 'indef.nom', gloss: 'a people' },
            { surface: 'حَمَلُونَا', lemma: 'حَمَلَ', pos: 'verb', features: 'perf.3mp+1p', gloss: 'they carried us' },
            { surface: 'بِغَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'prep+constr.gen', gloss: 'without' },
            { surface: 'نَوْلٍ', lemma: 'نَوْل', pos: 'noun', features: 'indef.gen', root: 'ن و ل', gloss: 'a fare' },
            { surface: 'عَمَدْتَ', lemma: 'عَمَدَ', pos: 'verb', features: 'perf.2ms', root: 'ع م د', gloss: 'to head for, resolve to; you went' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'سَفِينَتِهِمْ', lemma: 'سَفِينَة', pos: 'noun', features: 'gen+3mp', gloss: 'their ship' },
            { surface: 'فَخَرَقْتَهَا', lemma: 'خَرَقَ', pos: 'verb', features: 'conj+perf.2ms+3fs', root: 'خ ر ق', gloss: 'to pierce, make a hole; and you pierced it' },
            { surface: 'لِتُغْرِقَ', lemma: 'أَغْرَقَ', pos: 'verb', features: 'prep+impf.2ms', root: 'غ ر ق', gloss: 'to drown, sink; to drown' },
            { surface: 'أَهْلَها', lemma: 'أَهْل', pos: 'noun', features: 'acc+3fs', gloss: 'its people' },
          ],
        },
        {
          id: 'qs-v7-c18-046',
          ar: 'قَالَ الْخَضِرُ:',
          en: 'Al-Khiḍr said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'الْخَضِرُ', lemma: 'الْخَضِر', pos: 'proper', features: 'nom', gloss: 'al-Khiḍr' },
          ],
        },
        {
          // Al-Kahf 18:69/72-style repeated formula.
          id: 'qs-v7-c18-047',
          ar: '﴿قَالَ أَلَمْ أَقُلْ إِنَّكَ لَن تَسْتَطِيعَ مَعِىَ صَبْرًا﴾؟!',
          en: '"He said: Did I not say that you would not be able to have patience with me?"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'أَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'part+neg', gloss: 'did not' },
            { surface: 'أَقُلْ', lemma: 'قَالَ', pos: 'verb', features: 'impf.1s', root: 'ق و ل', gloss: 'to say; I say' },
            { surface: 'إِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'part+2ms', gloss: 'indeed you' },
            { surface: 'لَن', lemma: 'لَنْ', pos: 'part', features: 'part', gloss: 'not' },
            { surface: 'تَسْتَطِيعَ', lemma: 'اِسْتَطَاعَ', pos: 'verb', features: 'impf.2ms', root: 'ط و ع', gloss: 'to be able; you will be able' },
            { surface: 'مَعِىَ', lemma: 'مَعَ', pos: 'prep', features: 'prep+1s', gloss: 'with me' },
            { surface: 'صَبْرًا', lemma: 'صَبْر', pos: 'noun', features: 'indef.acc', gloss: 'patience' },
          ],
        },
        {
          id: 'qs-v7-c18-048',
          ar: 'قَالَ مُوسى:',
          en: 'Mūsā said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
          ],
        },
        {
          // Al-Kahf 18:73.
          id: 'qs-v7-c18-049',
          ar: '﴿لا تُؤَاخِذْنِى بِمَا نَسِيتُ وَلا تُرْهِقْنِى مِنْ أَمْرِى عُسْرًا﴾.',
          en: '"Do not take me to task for what I forgot, and do not burden me with hardship in my affair."',
          tokens: [
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'do not' },
            { surface: 'تُؤَاخِذْنِى', lemma: 'آخَذَ', pos: 'verb', features: 'impf.2ms+1s', root: 'ا خ ذ', gloss: 'to take to task; take me to task' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'for what' },
            { surface: 'نَسِيتُ', lemma: 'نَسِيَ', pos: 'verb', features: 'perf.1s', gloss: 'to forget; I forgot' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and do not' },
            { surface: 'تُرْهِقْنِى', lemma: 'أَرْهَقَ', pos: 'verb', features: 'impf.2ms+1s', root: 'ر ه ق', gloss: 'to burden, overwhelm; burden me' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'أَمْرِى', lemma: 'أَمْر', pos: 'noun', features: 'gen+1s', gloss: 'my affair' },
            { surface: 'عُسْرًا', lemma: 'عُسْر', pos: 'noun', features: 'indef.acc', root: 'ع س ر', gloss: 'hardship' },
          ],
        },
        {
          id: 'qs-v7-c18-050',
          ar: 'فَكَانَتِ الْأُولى مِنْ مُوسى نِسْيَاناً.',
          en: 'So the first [objection] from Mūsā was [due to] forgetfulness.',
          tokens: [
            { surface: 'فَكَانَتِ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'and was' },
            { surface: 'الْأُولى', lemma: 'أَوَّل', pos: 'adj', features: 'def.nom.f', gloss: 'the first' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, on the part of' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
            { surface: 'نِسْيَاناً', lemma: 'نَسِيَ', pos: 'noun', features: 'indef.acc', gloss: 'forgetfulness' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَ اعْتَرَضَ مُوسى عَلى خَرْقِ السَّفِينَةِ؟',
          options: ['لِأَنَّ أَهْلَهَا حَمَلُوهُمَا بِغَيْرِ نَوْلٍ فَخَافَ أَنْ يُغْرِقَهُمُ الْخَضِرُ', 'لِأَنَّهُ كَانَ يَكْرَهُ الْخَضِرَ', 'لِأَنَّهُ أَرَادَ السَّفِينَةَ لِنَفْسِهِ'],
          answer: 0,
          qEn: 'Why did Mūsā object to the ship being holed?',
          optionsEn: ["Because its owners had carried them without a fare, so he feared al-Khiḍr would drown them", 'Because he disliked al-Khiḍr', 'Because he wanted the ship for himself'],
        },
      ],
    },
    {
      lines: true,
      en: 'So the two of them set out, and there was a young boy playing among the boys, and al-Khiḍr took hold of his head from the top of it and pulled his head off with his hand. Mūsā said: "Have you killed a pure soul, without [it having killed another] soul?" He said: "Did I not tell you that you would not be able to have patience with me?" [Qur\'an:] "So the two of them went on, until, when they came to the people of a town, they asked its people for food, but they refused to host them; then they found in it a wall about to collapse." Al-Khiḍr set to it with his hand and set it upright. Mūsā said: "If you had wished, you could have taken a wage for it!" He said: "This is the parting between me and you!" The Prophet said: "May Allah have mercy on Mūsā -- how we wish he had been patient, so that more of their story would have been related to us!"',
      sentences: [
        {
          id: 'qs-v7-c18-051',
          ar: 'فَانْطَلَقَا فَإِذَا بِغُلامٍ يَلْعَبُ مَعَ الْغِلْمَانِ،',
          en: 'So the two of them set out, and there was a young boy playing among the boys,',
          tokens: [
            { surface: 'فَانْطَلَقَا', lemma: 'اِنْطَلَقَ', pos: 'verb', features: 'conj+perf.3md', root: 'ط ل ق', gloss: 'so the two set out' },
            { surface: 'فَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'and there was, behold' },
            { surface: 'بِغُلامٍ', lemma: 'غُلَام', pos: 'noun', features: 'prep+indef.gen', gloss: 'a young boy' },
            { surface: 'يَلْعَبُ', lemma: 'لَعِبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to play; playing' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'among, with' },
            { surface: 'الْغِلْمَانِ', lemma: 'غُلَام', pos: 'noun', features: 'pl.def.gen', gloss: 'the boys' },
          ],
        },
        {
          id: 'qs-v7-c18-052',
          ar: 'فَأَخَذَ الْخَضِرُ بِرَأْسِهِ مِنْ أَعْلاهُ فَاقْتَلَعَ رَأْسَهُ بِيَدِهِ.',
          en: 'and al-Khiḍr took hold of his head from the top of it and pulled his head off with his hand.',
          tokens: [
            { surface: 'فَأَخَذَ', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to take; and took hold' },
            { surface: 'الْخَضِرُ', lemma: 'الْخَضِر', pos: 'proper', features: 'def.nom', gloss: 'al-Khiḍr' },
            { surface: 'بِرَأْسِهِ', lemma: 'رَأْس', pos: 'noun', features: 'prep+gen+3ms', gloss: 'of his head' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أَعْلاهُ', lemma: 'عَلَى', pos: 'noun', features: 'gen+3ms', gloss: 'its top' },
            { surface: 'فَاقْتَلَعَ', lemma: 'اِقْتَلَعَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق ل ع', gloss: 'to uproot, pull off; and pulled off' },
            { surface: 'رَأْسَهُ', lemma: 'رَأْس', pos: 'noun', features: 'acc+3ms', gloss: 'his head' },
            { surface: 'بِيَدِهِ', lemma: 'يَد', pos: 'noun', features: 'prep+gen+3ms', gloss: 'with his hand' },
          ],
        },
        {
          id: 'qs-v7-c18-053',
          ar: 'فَقَالَ مُوسى:',
          en: 'Mūsā said:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
          ],
        },
        {
          // Al-Kahf 18:74.
          id: 'qs-v7-c18-054',
          ar: '﴿أَقَتَلْتَ نَفْسًا زَكِيَّةًۢ بِغَيْرِ نَفْسٍ﴾!',
          en: '"Have you killed a pure soul, without [it having killed another] soul?"',
          tokens: [
            { surface: 'أَقَتَلْتَ', lemma: 'قَتَلَ', pos: 'verb', features: 'part+perf.2ms', gloss: 'to kill; have you killed' },
            { surface: 'نَفْسًا', lemma: 'نَفْس', pos: 'noun', features: 'indef.acc', gloss: 'a soul' },
            { surface: 'زَكِيَّةًۢ', lemma: 'زَكِيّ', pos: 'adj', features: 'indef.acc.f', root: 'ز ك و', gloss: 'pure, innocent' },
            { surface: 'بِغَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'prep+constr.gen', gloss: 'without' },
            { surface: 'نَفْسٍ', lemma: 'نَفْس', pos: 'noun', features: 'indef.gen', gloss: 'a soul' },
          ],
        },
        {
          // Al-Kahf 18:75.
          id: 'qs-v7-c18-055',
          ar: '﴿قَالَ أَلَمْ أَقُل لَّكَ إِنَّكَ لَن تَسْتَطِيعَ مَعِىَ صَبْرًا﴾؟!',
          en: '"He said: Did I not tell you that you would not be able to have patience with me?"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'أَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'part+neg', gloss: 'did not' },
            { surface: 'أَقُل', lemma: 'قَالَ', pos: 'verb', features: 'impf.1s', root: 'ق و ل', gloss: 'to say; I say' },
            { surface: 'لَّكَ', lemma: 'لِ', pos: 'prep', features: 'prep+2ms', gloss: 'to you' },
            { surface: 'إِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'part+2ms', gloss: 'indeed you' },
            { surface: 'لَن', lemma: 'لَنْ', pos: 'part', features: 'part', gloss: 'not' },
            { surface: 'تَسْتَطِيعَ', lemma: 'اِسْتَطَاعَ', pos: 'verb', features: 'impf.2ms', root: 'ط و ع', gloss: 'to be able; you will be able' },
            { surface: 'مَعِىَ', lemma: 'مَعَ', pos: 'prep', features: 'prep+1s', gloss: 'with me' },
            { surface: 'صَبْرًا', lemma: 'صَبْر', pos: 'noun', features: 'indef.acc', gloss: 'patience' },
          ],
        },
        {
          // Al-Kahf 18:77.
          id: 'qs-v7-c18-056',
          ar: '﴿فَٱنطَلَقَا حَتَّىٰٓ إِذَآ أَتَيَآ أَهْلَ قَرْيَةٍ ٱسْتَطْعَمَآ أَهْلَهَا فَأَبَوْا۟ أَن يُضَيِّفُوهُمَا فَوَجَدَا فِيهَا جِدَارًا يُرِيدُ أَن يَنقَضَّ﴾.',
          en: '"So the two of them went on, until, when they came to the people of a town, they asked its people for food, but they refused to host them; then they found in it a wall about to collapse."',
          tokens: [
            { surface: 'فَٱنطَلَقَا', lemma: 'اِنْطَلَقَ', pos: 'verb', features: 'conj+perf.3md', root: 'ط ل ق', gloss: 'so the two set out' },
            { surface: 'حَتَّىٰٓ', lemma: 'حَتَّى', pos: 'conj', features: 'conj', gloss: 'until' },
            { surface: 'إِذَآ', lemma: 'إِذَا', pos: 'part', features: 'part', gloss: 'when' },
            { surface: 'أَتَيَآ', lemma: 'أَتَى', pos: 'verb', features: 'perf.3md', gloss: 'to come; the two came' },
            { surface: 'أَهْلَ', lemma: 'أَهْل', pos: 'noun', features: 'acc.constr', gloss: 'the people of' },
            { surface: 'قَرْيَةٍ', lemma: 'قَرْيَة', pos: 'noun', features: 'indef.gen', gloss: 'a town' },
            { surface: 'ٱسْتَطْعَمَآ', lemma: 'اِسْتَطْعَمَ', pos: 'verb', features: 'perf.3md', root: 'ط ع م', gloss: 'to ask for food; the two asked for food' },
            { surface: 'أَهْلَهَا', lemma: 'أَهْل', pos: 'noun', features: 'acc+3fs', gloss: 'its people' },
            { surface: 'فَأَبَوْا۟', lemma: 'أَبَى', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to refuse; but they refused' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُضَيِّفُوهُمَا', lemma: 'ضَيَّفَ', pos: 'verb', features: 'impf.3mp+3md', root: 'ض ي ف', gloss: 'to host as guests; host the two of them' },
            { surface: 'فَوَجَدَا', lemma: 'وَجَدَ', pos: 'verb', features: 'conj+perf.3md', gloss: 'to find; then the two found' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'جِدَارًا', lemma: 'جِدَار', pos: 'noun', features: 'indef.acc', root: 'ج د ر', gloss: 'a wall' },
            { surface: 'يُرِيدُ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.3ms', gloss: 'to want; wanting, about' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَنقَضَّ', lemma: 'اِنْقَضَّ', pos: 'verb', features: 'impf.3ms', root: 'ق ض ض', gloss: 'to collapse' },
          ],
        },
        {
          id: 'qs-v7-c18-057',
          ar: 'قَامَ الْخَضِرُ بِيَدِهِ فَأَقَامَهُ.',
          en: 'Al-Khiḍr set to it with his hand and set it upright.',
          tokens: [
            { surface: 'قَامَ', lemma: 'قَامَ', pos: 'verb', features: 'perf.3ms', root: 'ق و م', gloss: 'to undertake, set to; undertook' },
            { surface: 'الْخَضِرُ', lemma: 'الْخَضِر', pos: 'proper', features: 'nom', gloss: 'al-Khiḍr' },
            { surface: 'بِيَدِهِ', lemma: 'يَد', pos: 'noun', features: 'prep+gen+3ms', gloss: 'with his hand' },
            { surface: 'فَأَقَامَهُ', lemma: 'أَقَامَ', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to set upright; and set it upright' },
          ],
        },
        {
          id: 'qs-v7-c18-058',
          ar: 'فَقَالَ مُوسى: ﴿لَوْ شِئْتَ لَتَّخَذْتَ عَلَيْهِ أَجْرًا﴾!',
          en: 'Mūsā said: "If you had wished, you could have taken a wage for it!"',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'لَوْ', lemma: 'لَوْ', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'شِئْتَ', lemma: 'شَاءَ', pos: 'verb', features: 'perf.2ms', gloss: 'to wish; you wished' },
            { surface: 'لَتَّخَذْتَ', lemma: 'اِتَّخَذَ', pos: 'verb', features: 'part+perf.2ms', gloss: 'to take; you would have taken' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'for it' },
            { surface: 'أَجْرًا', lemma: 'أَجْر', pos: 'noun', features: 'indef.acc', gloss: 'a wage' },
          ],
        },
        {
          id: 'qs-v7-c18-059',
          ar: 'فَقَالَ: ﴿هَٰذَا فِرَاقُ بَيْنِى وَبَيْنِكَ﴾!',
          en: 'He said: "This is the parting between me and you!"',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'هَٰذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'فِرَاقُ', lemma: 'فِرَاق', pos: 'noun', features: 'nom.constr', gloss: 'the parting of' },
            { surface: 'بَيْنِى', lemma: 'بَيْنَ', pos: 'prep', features: 'gen+1s', gloss: 'between me' },
            { surface: 'وَبَيْنِكَ', lemma: 'بَيْنَ', pos: 'prep', features: 'conj+gen+2ms', gloss: 'and between you' },
          ],
        },
        {
          id: 'qs-v7-c18-060',
          ar: 'قَالَ النَّبِيُّ: «يَرْحَمُ اللَّهُ مُوسى لَوَدِدْنَا لَوْ صَبَرَ حَتّى يُقُصَّ عَلَيْنَا مِنْ أَمْرِهِمَا»!',
          en: 'The Prophet said: "May Allah have mercy on Mūsā -- how we wish he had been patient, so that more of their story would have been related to us!"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'النَّبِيُّ', lemma: 'نَبِيّ', pos: 'noun', features: 'def.nom', gloss: 'the Prophet' },
            { surface: 'يَرْحَمُ', lemma: 'رَحِمَ', pos: 'verb', features: 'impf.3ms', gloss: 'to have mercy on; may He have mercy on' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'لَوَدِدْنَا', lemma: 'وَدَّ', pos: 'verb', features: 'part+perf.1p', root: 'و د د', gloss: 'to wish; how we wish' },
            { surface: 'لَوْ', lemma: 'لَوْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'صَبَرَ', lemma: 'صَبَرَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be patient; he had been patient' },
            { surface: 'حَتّى', lemma: 'حَتَّى', pos: 'conj', features: 'conj', gloss: 'so that' },
            { surface: 'يُقُصَّ', lemma: 'قَصَّ', pos: 'verb', features: 'pass+impf.3ms', root: 'ق ص ص', gloss: 'to narrate; would be narrated' },
            { surface: 'عَلَيْنَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+1p', gloss: 'to us' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'أَمْرِهِمَا', lemma: 'أَمْر', pos: 'noun', features: 'gen+3md', gloss: 'their affair' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ الْخَضِرُ بِالْغُلامِ الَّذِي كَانَ يَلْعَبُ؟',
          options: ['أَخَذَ بِرَأْسِهِ فَاقْتَلَعَهُ', 'عَلَّمَهُ الْقِرَاءَةَ', 'أَعْطَاهُ طَعَاماً'],
          answer: 0,
          qEn: 'What did al-Khiḍr do to the boy who was playing?',
          optionsEn: ['He took hold of his head and pulled it off', 'He taught him to read', 'He gave him food'],
        },
        {
          q: 'مَاذَا وَجَدَ الْخَضِرُ وَمُوسى فِي الْقَرْيَةِ الَّتِي رَفَضَ أَهْلُهَا ضِيَافَتَهُمَا؟',
          options: ['جِدَاراً يُرِيدُ أَنْ يَنْقَضَّ', 'بِئْراً جَافَّةً', 'سُوقاً كَبِيرَةً'],
          answer: 0,
          qEn: 'What did al-Khiḍr and Mūsā find in the town whose people refused to host them?',
          optionsEn: ['A wall about to collapse', 'A dry well', 'A large market'],
        },
        {
          q: 'بِمَاذَا خَتَمَ النَّبِيُّ حَدِيثَهُ عَنْ مُوسى وَالْخَضِرِ؟',
          options: ['بِأَنَّهُ تَمَنّى لَوْ صَبَرَ مُوسى لِيُقَصَّ عَلَيْهِمْ مِنْ أَمْرِهِمَا أَكْثَرَ', 'بِأَنَّهُ لامَ الْخَضِرَ', 'بِأَنَّهُ لَمْ يُعَلِّقْ عَلَى الْقِصَّةِ'],
          answer: 0,
          qEn: 'How did the Prophet close his account of Mūsā and al-Khiḍr?',
          optionsEn: ['By wishing Mūsā had been patient so that more of their story would have been related to them', 'By blaming al-Khiḍr', 'By not commenting on the story at all'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَ',
        post: 'يَمْشِيَانِ عَلى سَاحِلِ الْبَحْرِ.',
        en: 'So the two of them set out, walking along the shore of the sea.',
        options: ['انْطَلَقَا', 'انْطَلَقَ', 'انْطَلَقُوا', 'انْطَلَقْتُ'],
        answer: 0,
        rationales: [
          'Dual perfect -- correct; "the two of them set out," matching the following dual verb يَمْشِيَانِ.',
          '3rd masculine singular -- wrong number; only one person, not two.',
          '3rd masculine plural -- wrong number; more than two.',
          '1st singular -- wrong person; "I set out."',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَ',
        post: 'الْحُوتُ مِنَ الْمِكْتَلِ.',
        en: 'Then the fish slipped away from the basket.',
        options: ['انْسَلَّ', 'انْسَلُّوا', 'انْسَلَّتْ', 'انْسَلَّا'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- correct; agrees with الْحُوتُ, masculine singular.',
          '3rd masculine plural -- wrong; the subject is singular.',
          '3rd feminine singular -- wrong gender; الْحُوت is masculine.',
          'Dual -- wrong number; only one fish.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَ',
        post: 'الْخَضِرُ إِلى لَوْحٍ مِنْ أَلْوَاحِ السَّفِينَةِ فَنَزَعَهُ.',
        en: 'Then al-Khiḍr went for a plank from the planks of the ship and pulled it out.',
        options: ['عَمَدَ', 'عَمَدَتْ', 'عَمَدُوا', 'عَمَدْتَ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- correct; agrees with الْخَضِرُ.',
          '3rd feminine singular -- wrong gender.',
          '3rd masculine plural -- wrong number.',
          '2nd masculine singular -- wrong person, "you."',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'قَالَ الْخَضِرُ',
        pre: '',
        post: '',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['قُلْتُ', 'قَالَ', 'قَالُوا', 'قَالَتْ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '3rd masculine plural -- they.',
          '3rd feminine singular -- she.',
        ],
      },
      {
        type: 'shift',
        base: 'قَالَ الْخَضِرُ',
        pre: '',
        post: '',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['قَالَتْ', 'قَالَ', 'قُلْتُ', 'قَالُوا'],
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
        base: 'قَالَ الْخَضِرُ',
        pre: '',
        post: '',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['قَالُوا', 'قَالَ', 'قَالَتْ', 'قُلْنَا'],
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

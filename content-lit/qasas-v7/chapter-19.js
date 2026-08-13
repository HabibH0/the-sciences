// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus), chapter 19 -- ١٩ - التَّأْوِيلُ ("The Interpretation"). Page 210
// ONLY -- the whole chapter is self-contained on this one printed page,
// from the heading at the top to the end of the page (the next page opens
// chapter 20's own heading). Transcribed by hand from the scan (vision
// OCR) against ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md.
//
// This chapter is al-Khiḍr's own explanation of his three strange acts to
// Mūsā (cf. qasas-v6, the earlier chapters of this same encounter), and is
// almost entirely direct Qur'an quotation from Sūrat al-Kahf 18:79-82,
// closing with one narrator sentence. Per the task brief's explicit
// guidance (supersedes the fragment-into-tiny-units workaround used in
// some earlier-authored volumes of this corpus): every quotation is
// transcribed in full and tokenized normally, without artificial
// fragmentation to dodge the build stage. The three "أَمَّا... فَكَانَ..."
// ayāt (18:79, 18:80-81, 18:82a) and the closing tafsīr-summary ayah
// (18:82b) are each transcribed as their own sentence entry, matching how
// the source itself prints them per verse (no verse-number glyphs
// transcribed, matching this corpus's established convention). One is
// naturally short enough (18:81, exactly 9 tokens, case-marked common
// nouns throughout) to fall inside the build stage's 3-9 token window --
// left as ordinary prose per instruction, not shortened or dodged.
//
// IMPORTANT / flagged explicitly, not silently resolved:
//   -- The assignment brief states "الْخَضِرُ ... doesn't appear in your
//      pages anyway." That is not accurate for this chapter -- الْخَضِرُ is
//      the explicit subject of the chapter's very first sentence
//      (qs-v7-c19-001, ثُمَّ نَبَّأَ الْخَضِرُ مُوسى). Per the substantive
//      instruction (already marked new at ch18), it is tokenized here with
//      pos:'proper' but NOT re-added to newWords -- flagging the
//      discrepancy in the brief rather than silently ignoring it.
//   -- Two lemmas explicitly flagged by the task brief as "likely new"
//      turn out, on actually grepping the supplied shared lexicon, to be
//      ALREADY TAUGHT and are therefore NOT in newWords here:
//        * أَشُدّ -- taught in qiraah-v2 (ch33/36/40/47 per lexicon.txt).
//          Reused as-is for qs-v7-c19-006's أَشُدَّهُمَا.
//        * كَنز -- taught in qiraah-v2 (ch49 per lexicon.txt). Reused as-is
//          for qs-v7-c19-006's كَنزٌ/كَنزَهُمَا.
//   -- Chapters 3-18 of this volume did not exist on disk when this
//      chapter's vocabulary was first checked (only ch1-2 existed at the
//      time -- other agents were still writing the rest of the volume in
//      parallel). Chapters 3-17 appeared mid-session; re-grepping against
//      them before finalizing surfaced three more already-taught lemmas,
//      removed from newWords accordingly: نَبَّأَ (qasas-v7 ch3), أَقْرَب
//      (qasas-v7 ch3), اِسْتَطَاعَ (qasas-v7 ch13). Chapter 18 still did not
//      exist at finalization time and could not be checked.
//   -- qs-v7-c19-010 (وَفَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ .): printed WITHOUT ﴿﴾
//      marks in the source even though it echoes Qur'anic phrasing (cf.
//      Yūsuf 12:76) -- transcribed here as the author's own closing
//      remark/proverb, not tagged as a direct quotation, matching what is
//      actually printed (same convention as qs-v3-c22-003 in this corpus's
//      established practice).
//   -- Possible transcription correction (not applied to the ﴿﴾-quoted
//      material, only to the narrator's closing sentence, qs-v7-c19-009):
//      the supplied transcript reads "وَيَعْضَهُ عِنْدَ بَعْضٍ" -- "يَعْضَهُ" is not
//      a word. Corrected here to "وَبَعْضَهُ عِنْدَ بَعْضٍ" ("and part of it [is]
//      with others"), a single ي/ب letter-shape confusion, exactly the
//      same class of correction already applied elsewhere in this corpus
//      (qasas-v7/chapter-01.js's own header: "وَيَذَلَ لَهُمْ وُدَّهُ" corrected to
//      "وَبَذَلَ لَهُمْ وُدَّهُ"). Flagging this plainly rather than silently
//      keeping a non-word or silently "fixing" it without a note.
//   -- qs-v7-c19-007's "عَّلَيْهِ" (with an apparent shadda on ع, which is not
//      grammatical) is normalized here to the standard "عَلَيْهِ" -- read as
//      a rendering artifact from the source scan rather than a genuine
//      printed doubling.
//   -- Dual verb/noun/enclitic forms (the boy's two parents, the two
//      orphan boys, "they-both") have no documented atom in
//      CHAPTER-FORMAT.md's person list (1s 1p 2ms 2fs 3ms 3fs 3mp 3fp --
//      no dual). Per the format doc's own guidance ("if you need ... 3d,
//      etc., use them anyway; they'll just print literally"), a '3d' code
//      and a 'du' number atom are used throughout this chapter for duals
//      (e.g. 'du.indef.gen', 'impf.3d', 'nom+3d') -- flagging this as an
//      inferred extension, not a documented convention.
//   -- اِسْتَطَاعَ ("to be able") is tagged new despite being a very common
//      word, since it is not attested anywhere in the supplied lexicon
//      export (qasas-v1/2/3, qiraah-v1/2) nor in qasas-v6 nor in this
//      volume's own chapters 1-2 (the scope this session treats as
//      established "known" for volume 7 -- see note below on scope).
//      Later-numbered volumes (v8-v12) already use اِسْتَطَاعَ, but those
//      volumes have no established reading-order relationship to this one
//      and the supplied master lexicon deliberately excludes them, so they
//      are not treated as "prior" here.
//   -- Scope note on what counts as "already known" for this volume: this
//      session treated qasas-v1, v2, v3, qiraah-v1, qiraah-v2 (via the
//      supplied lexicon.txt export), qasas-v6 (this story's direct
//      narrative predecessor -- confirmed relevant per the task's own
//      framing, e.g. مُوسَى/إِسْرَائِيل), and this volume's own chapters 1-2
//      (the only ones that existed on disk at the time of writing) as the
//      "known" pool. Volumes v4, v5, v8-v12 were NOT consulted for
//      known-word status (no established reading-order relationship to
//      v7, and deliberately excluded from the supplied master lexicon).
//
// Shared lexicon check (grepped against lexicon.txt, qasas-v1/2/3,
// qasas-v6, and this volume's own chapters 1-17):
// نَبَّأَ (qasas-v7 ch3), الْخَضِر (qasas-v6/qasas-v7 ch18, not re-listed),
// مُوسَى (qasas-v7 ch1), ثُمَّ (bedrock, used unflagged since qasas-v1 ch9),
// قَالَ، أَمَّا (qasas-v2 ch12), سَفِينَة (qiraah-v2 ch54)، كَانَ، مِسْكِين->new,
// عَمِلَ (qiraah-v2 ch40)، فِي، بَحْر (qasas-v2 ch9)، أَرَادَ (qasas-v1 ch5)،
// أَنْ، عَابَ (qiraah-v1 ch24)، وَرَاءَ (qiraah-v2 ch51)، مَلِك (qasas-v1 ch10)،
// أَخَذَ (qasas-v1 ch4)، كُلّ (qasas-v1 ch10)، صَالِح (qiraah-v1 ch25)،
// غَصْب->new, غُلَام (qiraah-v1/v2)، أَب (qasas-v1 ch3)، مُؤْمِن (qiraah-v2
// ch32/57)، خَشِيَ->new (see note above), يُرْهِقَ->new (أَرْهَقَ), طُغْيَان->new,
// كُفْر (qasas-v2 ch22)، أَبْدَلَ->new, رَبّ (qasas-v1 ch7)، خَيْر (qasas-v2 ch9)،
// مِنْ، زَكَاة->new, أَقْرَب (qasas-v7 ch3), رُحْم->new, جِدَار (qiraah-v1/v2)،
// يَتِيم (qiraah-v1 ch24)، مَدِينَة (qiraah-v2 ch36)، تَحْتَ (qasas-v6 ch4)،
// كَنز->already known (see above), أَبُو/أَب، صَالِح، اِسْتَخْرَجَ (qiraah-v2
// ch71)، أَشُدّ->already known (see above)، رَحْمَة (qasas-v2 ch9)، فَعَلَ
// (qasas-v7 ch1)، عَنْ، أَمْر (qasas-v2 ch2)، ذَلِكَ (bedrock)، تَأْوِيل (qasas-v2
// ch9)، مَا، لَمْ (qasas-v2 ch4)، اِسْتَطَاعَ (qasas-v7 ch13), عَلَى، صَبْر
// (qiraah-v2 ch36)، هُنَالِكَ (qiraah-v2 ch40)، عَرَفَ (qasas-v1 ch2)، أَنَّ،
// أَحَد (qasas-v1 ch9)، لا، أَحَاطَ (qasas-v3 ch19)، عِلْم (qasas-v2 ch1)، اللَّه،
// بَعْض (qasas-v2 ch2)، عِنْدَ (qasas-v1 ch15, used unflagged there)، فَوْقَ
// (qiraah-v2 ch33)، ذُو (qiraah-v1 ch26)، عَلِيم (qasas-v1 ch15)
// are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 8 new words (مِسْكِين، غَصْب، خَشِيَ، أَرْهَقَ، طُغْيَان، أَبْدَلَ، زَكَاة، رُحْم) -- lean
// for a chapter of this length, because almost the entire chapter is
// direct Qur'an quotation of already-fixed wording rather than the
// author's own free composition. (Three more candidates -- نَبَّأَ، أَقْرَب،
// اِسْتَطَاعَ -- turned out to already be taught earlier in this same volume
// once chapters 3-17 became available mid-session; see note above.)
//
// BUILDABLE-SENTENCE COUNT: only 3 (qs-v7-c19-005 [Kahf 18:81, 9 tokens],
// qs-v7-c19-009 [8 tokens], qs-v7-c19-010 [5 tokens]) -- SHORT of the
// house minimum of 5. This is flagged explicitly per the task brief's own
// expectation ("Chapter 19 is short and Qur'an-heavy -- count carefully
// and flag if you fall short"). Every other sentence in the chapter is
// either a long Qur'anic ayah safely outside the 3-9 token window (by
// design, not by padding) or a narrator fragment too short/too long to
// qualify, and the instructions explicitly forbid fragmenting Qur'anic
// quotations further just to manufacture more buildable material. This
// chapter's entire printed content is one page, almost all direct
// quotation -- there is no more legitimate narrator prose available to
// split for additional buildable coverage. `npm run validate` will likely
// flag this chapter on the five-buildable-sentence check; this is a
// genuine property of the source content on this page, not an authoring
// gap.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch19',
  title: { ar: 'التَّأْوِيلُ', en: 'The Interpretation' },
  newWords: [
    'مِسْكِين', 'غَصْب', 'خَشِيَ', 'طُغْيَان', 'أَبْدَلَ', 'زَكَاة', 'رُحْم',
  ],
  lemmas: {
    'مِسْكِين': { gloss: 'poor person, needy one' },
    'غَصْب': { gloss: 'force, coercion' },
    'خَشِيَ': { gloss: 'to fear, be apprehensive of' },
    'طُغْيَان': { gloss: 'transgression, tyranny' },
    'أَبْدَلَ': { gloss: 'to substitute, give in exchange' },
    'زَكَاة': { gloss: 'purity, growth' },
    'رُحْم': { gloss: 'mercy, kinship-tenderness' },
  },
  paragraphs: [
    {
      en: "Then al-Khiḍr told Mūsā the meaning of what he had done, and said: \"As for the ship, it belonged to poor men working at sea, and I wanted to damage it, for behind them was a king seizing every good ship by force. And as for the boy, his parents were believers, and we feared he would overwhelm them with transgression and disbelief, so we wanted their Lord to give them in exchange one better than him in purity, and nearer in mercy.\"",
      sentences: [
        {
          id: 'qs-v7-c19-001',
          ar: 'ثُمَّ نَبَّأَ الْخَضِرُ مُوسى .',
          en: 'Then al-Khiḍr told Mūsā [the meaning of what he had done].',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'نَبَّأَ', lemma: 'نَبَّأَ', pos: 'verb', features: 'perf.3ms', root: 'ن ب أ', gloss: 'to inform, tell; told' },
            { surface: 'الْخَضِرُ', lemma: 'الْخَضِر', pos: 'proper', features: 'nom', gloss: 'al-Khiḍr' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
          ],
        },
        {
          id: 'qs-v7-c19-002',
          ar: 'فَقَالَ:',
          en: 'and said:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
          ],
        },
        {
          // Kahf 18:79.
          id: 'qs-v7-c19-003',
          ar: '﴿أَمَّا ٱلسَّفِينَةُ فَكَانَتْ لِمَسَٰكِينَ يَعْمَلُونَ فِى ٱلْبَحْرِ فَأَرَدتُّ أَنْ أَعِيبَهَا وَكَانَ وَرَآءَهُم مَّلِكٌ يَأْخُذُ كُلَّ سَفِينَةٍ (صَالِحَةٍ) غَصْبًا﴾ .',
          en: '"As for the ship, it belonged to poor men working at sea, and I wanted to damage it, for behind them was a king seizing every (good) ship by force."',
          tokens: [
            { surface: 'أَمَّا', lemma: 'أَمَّا', pos: 'part', features: 'part', gloss: 'as for' },
            { surface: 'ٱلسَّفِينَةُ', lemma: 'سَفِينَة', pos: 'noun', features: 'def.nom', gloss: 'the ship' },
            { surface: 'فَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be; was' },
            { surface: 'لِمَسَٰكِينَ', lemma: 'مِسْكِين', pos: 'noun', features: 'prep+pl.indef.gen', root: 'م س ك ن', gloss: 'to/for poor men' },
            { surface: 'يَعْمَلُونَ', lemma: 'عَمِلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to work; working' },
            { surface: 'فِى', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, at' },
            { surface: 'ٱلْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
            { surface: 'فَأَرَدتُّ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.1s', gloss: 'to want; so I wanted' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'أَعِيبَهَا', lemma: 'عَابَ', pos: 'verb', features: 'impf.1s+3fs', gloss: 'to damage, make defective; that I damage it' },
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and there was' },
            { surface: 'وَرَآءَهُم', lemma: 'وَرَاءَ', pos: 'prep', features: 'prep+3mp', gloss: 'behind them' },
            { surface: 'مَّلِكٌ', lemma: 'مَلِك', pos: 'noun', features: 'indef.nom', gloss: 'a king' },
            { surface: 'يَأْخُذُ', lemma: 'أَخَذَ', pos: 'verb', features: 'impf.3ms', gloss: 'to take, seize; seizing' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'سَفِينَةٍ', lemma: 'سَفِينَة', pos: 'noun', features: 'indef.gen', gloss: 'ship' },
            { surface: 'صَالِحَةٍ', lemma: 'صَالِح', pos: 'adj', features: 'indef.gen', gloss: 'good, sound' },
            { surface: 'غَصْبًا', lemma: 'غَصْب', pos: 'noun', features: 'indef.acc', root: 'غ ص ب', gloss: 'by force, forcibly' },
          ],
        },
        {
          // Kahf 18:80.
          id: 'qs-v7-c19-004',
          ar: '﴿وَأَمَّا ٱلْغُلَٰمُ فَكَانَ أَبَوَاهُ مُؤْمِنَيْنِ فَخَشِينَآ أَن يُرْهِقَهُمَا طُغْيَٰنًا وَكُفْرًا﴾ .',
          en: '"And as for the boy, his parents were believers, and we feared he would overwhelm them with transgression and disbelief."',
          tokens: [
            { surface: 'وَأَمَّا', lemma: 'أَمَّا', pos: 'part', features: 'conj+part', gloss: 'and as for' },
            { surface: 'ٱلْغُلَٰمُ', lemma: 'غُلَام', pos: 'noun', features: 'def.nom', gloss: 'the boy' },
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; was' },
            { surface: 'أَبَوَاهُ', lemma: 'أَب', pos: 'noun', features: 'du.nom+3ms', gloss: 'his two parents' },
            { surface: 'مُؤْمِنَيْنِ', lemma: 'مُؤْمِن', pos: 'noun', features: 'du.acc', gloss: 'believers' },
            { surface: 'فَخَشِينَآ', lemma: 'خَشِيَ', pos: 'verb', features: 'conj+perf.1p', root: 'خ ش ي', gloss: 'to fear; so we feared' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يُرْهِقَهُمَا', lemma: 'أَرْهَقَ', pos: 'verb', features: 'impf.3ms+3d', root: 'ر ه ق', gloss: 'to overburden, overwhelm; he would overwhelm them both' },
            { surface: 'طُغْيَٰنًا', lemma: 'طُغْيَان', pos: 'noun', features: 'indef.acc', root: 'ط غ ي', gloss: 'transgression, tyranny' },
            { surface: 'وَكُفْرًا', lemma: 'كُفْر', pos: 'noun', features: 'conj+indef.acc', gloss: 'and disbelief' },
          ],
        },
        {
          // Kahf 18:81. Exactly 9 tokens, case-marked common nouns
          // throughout -- naturally buildable per instruction, left
          // ordinary rather than shortened or fragmented.
          id: 'qs-v7-c19-005',
          ar: '﴿فَأَرَدْنَآ أَن يُبْدِلَهُمَا رَبُّهُمَا خَيْرًا مِّنْهُ زَكَوٰةً وَأَقْرَبَ رُحْمًا﴾ .',
          en: '"So we wanted their Lord to give them in exchange one better than him in purity, and nearer in mercy."',
          tokens: [
            { surface: 'فَأَرَدْنَآ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.1p', gloss: 'to want; so we wanted' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يُبْدِلَهُمَا', lemma: 'أَبْدَلَ', pos: 'verb', features: 'impf.3ms+3d', root: 'ب د ل', gloss: 'to substitute; he would give them in exchange' },
            { surface: 'رَبُّهُمَا', lemma: 'رَبّ', pos: 'noun', features: 'nom+3d', gloss: 'their Lord' },
            { surface: 'خَيْرًا', lemma: 'خَيْر', pos: 'noun', features: 'indef.acc', gloss: 'one better' },
            { surface: 'مِّنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'than him' },
            { surface: 'زَكَوٰةً', lemma: 'زَكَاة', pos: 'noun', features: 'indef.acc', root: 'ز ك و', gloss: 'in purity' },
            { surface: 'وَأَقْرَبَ', lemma: 'أَقْرَب', pos: 'adj', features: 'conj+indef.acc', root: 'ق ر ب', gloss: 'and nearer' },
            { surface: 'رُحْمًا', lemma: 'رُحْم', pos: 'noun', features: 'indef.acc', root: 'ر ح م', gloss: 'in mercy' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا أَرَادَ الْخَضِرُ أَنْ يَعِيبَ السَّفِينَةَ؟',
          options: ['لِأَنَّ وَرَاءَهُمْ مَلِكاً يَأْخُذُ كُلَّ سَفِينَةٍ صَالِحَةٍ غَصْباً', 'لِأَنَّهَا كَانَتْ قَدِيمَةً وَمُهْمَلَةً', 'لِأَنَّهُ كَانَ غَاضِباً مِنْ أَصْحَابِهَا'],
          answer: 0,
          qEn: 'Why did al-Khiḍr want to damage the ship?',
          optionsEn: ['Because behind them was a king seizing every good ship by force', 'Because it was old and neglected', 'Because he was angry at its owners'],
        },
        {
          q: 'لِمَاذَا خَشِيَ الْخَضِرُ عَلى أَبَوَيِ الْغُلامِ؟',
          options: ['خَشِيَ أَنْ يُرْهِقَهُمَا طُغْيَاناً وَكُفْراً', 'خَشِيَ أَنْ يَكُونَ فَقِيراً', 'خَشِيَ أَنْ يَمْرَضَ'],
          answer: 0,
          qEn: "Why was al-Khiḍr concerned for the boy's believing parents?",
          optionsEn: ['He feared the boy would overwhelm them with transgression and disbelief', 'He feared the boy would become poor', 'He feared the boy would fall ill'],
        },
      ],
    },
    {
      en: '"And as for the wall, it belonged to two orphan boys in the city, and beneath it was a treasure belonging to them, and their father had been righteous, so your Lord intended that they reach their maturity and extract their treasure, as a mercy from your Lord. And I did not do it of my own accord: that is the interpretation of what you could not bear patiently." There, Mūsā came to know that no one can encompass the knowledge of Allah, that part of His knowledge is with some and part of it with others, and that above every possessor of knowledge is one who knows still more.',
      sentences: [
        {
          // Kahf 18:82a.
          id: 'qs-v7-c19-006',
          ar: '﴿وَأَمَّا ٱلْجِدَارُ فَكَانَ لِغُلَٰمَيْنِ يَتِيمَيْنِ فِى ٱلْمَدِينَةِ وَكَانَ تَحْتَهُۥ كَنزٌ لَّهُمَا وَكَانَ أَبُوهُمَا صَٰلِحًا فَأَرَادَ رَبُّكَ أَن يَبْلُغَآ أَشُدَّهُمَا وَيَسْتَخْرِجَا كَنزَهُمَا رَحْمَةً مِّن رَّبِّكَ﴾ .',
          en: '"And as for the wall, it belonged to two orphan boys in the city, and beneath it was a treasure belonging to them, and their father had been righteous, so your Lord intended that they reach their maturity and extract their treasure, as a mercy from your Lord."',
          tokens: [
            { surface: 'وَأَمَّا', lemma: 'أَمَّا', pos: 'part', features: 'conj+part', gloss: 'and as for' },
            { surface: 'ٱلْجِدَارُ', lemma: 'جِدَار', pos: 'noun', features: 'def.nom', gloss: 'the wall' },
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; belonged' },
            { surface: 'لِغُلَٰمَيْنِ', lemma: 'غُلَام', pos: 'noun', features: 'prep+du.indef.gen', gloss: 'to two boys' },
            { surface: 'يَتِيمَيْنِ', lemma: 'يَتِيم', pos: 'adj', features: 'du.indef.gen', gloss: 'orphans' },
            { surface: 'فِى', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ٱلْمَدِينَةِ', lemma: 'مَدِينَة', pos: 'noun', features: 'def.gen', gloss: 'the city' },
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and there was' },
            { surface: 'تَحْتَهُۥ', lemma: 'تَحْتَ', pos: 'prep', features: 'prep+3ms', gloss: 'beneath it' },
            { surface: 'كَنزٌ', lemma: 'كَنز', pos: 'noun', features: 'indef.nom', gloss: 'a treasure' },
            { surface: 'لَّهُمَا', lemma: 'لِ', pos: 'prep', features: 'prep+3d', gloss: 'belonging to them both' },
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'أَبُوهُمَا', lemma: 'أَب', pos: 'noun', features: 'nom+3d', gloss: 'their father' },
            { surface: 'صَٰلِحًا', lemma: 'صَالِح', pos: 'adj', features: 'indef.acc', gloss: 'righteous' },
            { surface: 'فَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want, intend; so intended' },
            { surface: 'رَبُّكَ', lemma: 'رَبّ', pos: 'noun', features: 'nom+2ms', gloss: 'your Lord' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يَبْلُغَآ', lemma: 'بَلَغَ', pos: 'verb', features: 'impf.3d', gloss: 'to reach; they both reach' },
            { surface: 'أَشُدَّهُمَا', lemma: 'أَشُدّ', pos: 'noun', features: 'acc+3d', gloss: 'their maturity, full strength' },
            { surface: 'وَيَسْتَخْرِجَا', lemma: 'اِسْتَخْرَجَ', pos: 'verb', features: 'conj+impf.3d', gloss: 'to extract; and extract' },
            { surface: 'كَنزَهُمَا', lemma: 'كَنز', pos: 'noun', features: 'acc+3d', gloss: 'their treasure' },
            { surface: 'رَحْمَةً', lemma: 'رَحْمَة', pos: 'noun', features: 'indef.acc', gloss: 'as a mercy' },
            { surface: 'مِّن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'رَّبِّكَ', lemma: 'رَبّ', pos: 'noun', features: 'gen+2ms', gloss: 'your Lord' },
          ],
        },
        {
          // Kahf 18:82b. عَّلَيْهِ normalized to عَلَيْهِ -- see header note.
          id: 'qs-v7-c19-007',
          ar: '﴿وَمَا فَعَلْتُهُۥ عَنْ أَمْرِىَ ذَٰلِكَ تَأْوِيلُ مَا لَمْ تَسْطِع عَلَيْهِ صَبْرًا﴾ .',
          en: '"And I did not do it of my own accord. That is the interpretation of what you could not bear patiently."',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'فَعَلْتُهُۥ', lemma: 'فَعَلَ', pos: 'verb', features: 'perf.1s+3ms', gloss: 'to do; I did it' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'of, from' },
            { surface: 'أَمْرِىَ', lemma: 'أَمْر', pos: 'noun', features: 'gen+1s', gloss: 'my own accord' },
            { surface: 'ذَٰلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'تَأْوِيلُ', lemma: 'تَأْوِيل', pos: 'noun', features: 'nom.constr', gloss: 'the interpretation of' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَسْطِع', lemma: 'اِسْتَطَاعَ', pos: 'verb', features: 'impf.2ms', gloss: 'to be able; you were able' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'over it' },
            { surface: 'صَبْرًا', lemma: 'صَبْر', pos: 'noun', features: 'indef.acc', gloss: 'patience' },
          ],
        },
        {
          // Narrator's own prose, split at its natural clause boundary
          // (house convention, e.g. qasas-v3/chapter-22.js's header) --
          // the أَنَّ...وَأَنَّ... coordination.
          id: 'qs-v7-c19-008',
          ar: 'هُنَالِكَ عَرَفَ مُوسى أَنَّ أَحَداً لا يَسْتَطِيعُ أَنْ يُحِيطَ بِعِلْمِ اللَّهِ',
          en: 'There Mūsā came to know that no one can encompass the knowledge of Allah,',
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'there, at that point' },
            { surface: 'عَرَفَ', lemma: 'عَرَفَ', pos: 'verb', features: 'perf.3ms', gloss: 'to know; came to know' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'أَحَداً', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone, no one' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَسْتَطِيعُ', lemma: 'اِسْتَطَاعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be able; can' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُحِيطَ', lemma: 'أَحَاطَ', pos: 'verb', features: 'impf.3ms', gloss: 'to encompass' },
            { surface: 'بِعِلْمِ', lemma: 'عِلْم', pos: 'noun', features: 'prep+constr.gen', gloss: 'the knowledge of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          // Correction: source reads "وَيَعْضَهُ" (not a word) -- corrected to
          // "وَبَعْضَهُ", a ي/ب letter-shape confusion -- see header note.
          id: 'qs-v7-c19-009',
          ar: 'وَأَنَّ بَعْضَ عِلْمِهِ عِنْدَ بَعْضٍ وَبَعْضَهُ عِنْدَ بَعْضٍ،',
          en: 'that part of His knowledge is with some and part of it with others,',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'بَعْضَ', lemma: 'بَعْض', pos: 'noun', features: 'acc.constr', gloss: 'part of' },
            { surface: 'عِلْمِهِ', lemma: 'عِلْم', pos: 'noun', features: 'gen+3ms', gloss: 'His knowledge' },
            { surface: 'عِنْدَ', lemma: 'عِنْدَ', pos: 'adv', features: 'adv', gloss: 'with, in the possession of' },
            { surface: 'بَعْضٍ', lemma: 'بَعْض', pos: 'noun', features: 'indef.gen', gloss: 'some [people]' },
            { surface: 'وَبَعْضَهُ', lemma: 'بَعْض', pos: 'noun', features: 'conj+acc+3ms', gloss: 'and part of it' },
            { surface: 'عِنْدَ', lemma: 'عِنْدَ', pos: 'adv', features: 'adv', gloss: 'with' },
            { surface: 'بَعْضٍ', lemma: 'بَعْض', pos: 'noun', features: 'indef.gen', gloss: 'others' },
          ],
        },
        {
          id: 'qs-v7-c19-010',
          ar: 'وَفَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ .',
          en: 'and that above every possessor of knowledge is one who knows still more.',
          tokens: [
            { surface: 'وَفَوْقَ', lemma: 'فَوْقَ', pos: 'adv', features: 'conj+adv', gloss: 'and above' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'ذِي', lemma: 'ذُو', pos: 'noun', features: 'constr.gen', gloss: 'possessor of' },
            { surface: 'عِلْمٍ', lemma: 'عِلْم', pos: 'noun', features: 'indef.gen', gloss: 'knowledge' },
            { surface: 'عَلِيمٌ', lemma: 'عَلِيم', pos: 'adj', features: 'indef.nom', gloss: 'one who knows still more' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَ تَحْتَ الْجِدَارِ كَنزٌ لِلْغُلامَيْنِ؟',
          options: ['لِأَنَّ أَبَاهُمَا كَانَ صَالِحاً فَأَرَادَ رَبُّكَ أَنْ يَبْلُغَا أَشُدَّهُمَا وَيَسْتَخْرِجَا كَنزَهُمَا', 'لِأَنَّ الْمَلِكَ وَضَعَهُ هُنَاكَ لِيَحْمِيَهُ', 'لِأَنَّ الْخَضِرَ أَخْفَاهُ هُنَاكَ لِنَفْسِهِ'],
          answer: 0,
          qEn: 'Why was there a treasure beneath the wall belonging to the two boys?',
          optionsEn: ['Because their father had been righteous, so their Lord intended that they reach maturity and extract their treasure', 'Because the king put it there to protect it', 'Because al-Khiḍr hid it there for himself'],
        },
        {
          q: 'مَاذَا عَرَفَ مُوسى بَعْدَ أَنْ سَمِعَ تَأْوِيلَ الْخَضِرِ؟',
          options: ['أَنَّ أَحَداً لا يَسْتَطِيعُ أَنْ يُحِيطَ بِعِلْمِ اللَّهِ', 'أَنَّهُ يَعْرِفُ كُلَّ شَيْءٍ الآنَ', 'أَنَّ الْخَضِرَ مُخْطِئٌ فِي كُلِّ مَا فَعَلَ'],
          answer: 0,
          qEn: "What did Mūsā come to know after hearing al-Khiḍr's interpretation?",
          optionsEn: ['That no one can encompass the knowledge of Allah', 'That he now knows everything', 'That al-Khiḍr had been wrong in everything he did'],
        },
      ],
    },
  ],
  workshop: {
    // Almost no narrator prose exists in this chapter to draw from
    // (per instruction, workshop items are never built from a Qur'anic
    // quotation). Drawn only from qs-v7-c19-001/008/010's own narration,
    // plus one constructed drill built on this chapter's new verb
    // اِسْتَطَاعَ so it gets pattern practice beyond its one appearance.
    cloze: [
      {
        type: 'cloze',
        pre: 'ثُمَّ نَبَّأَ',
        post: 'مُوسَى فَقَالَ:',
        en: 'Then al-Khiḍr told Mūsā, and said:',
        options: ['الْخَضِرُ', 'الْخَضِرَ', 'الْخَضِرِ', 'خَضِرٌ'],
        answer: 0,
        rationales: [
          'Nominative -- subject of نَبَّأَ, matching the printed الْخَضِرُ.',
          'Accusative -- wrong case; the subject of a verb is nominative.',
          'Genitive -- wrong case for the same reason.',
          'Without the article -- wrong; the name is always written with الـ in this corpus.',
        ],
      },
      {
        type: 'cloze',
        pre: 'هُنَالِكَ',
        post: 'مُوسَى أَنَّ أَحَداً لا يَسْتَطِيعُ أَنْ يُحِيطَ بِعِلْمِ اللَّهِ.',
        en: 'There Mūsā came to know that no one can encompass the knowledge of Allah.',
        options: ['عَرَفَ', 'عَرَفَتْ', 'يَعْرِفُ', 'عَرَفُوا'],
        answer: 0,
        rationales: [
          '3rd masculine singular perfect -- matches مُوسَى.',
          '3rd feminine singular -- wrong gender; مُوسَى is masculine.',
          'Imperfect -- wrong tense; this narrates a completed realization.',
          '3rd masculine plural -- wrong number; only Mūsā is the subject.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَفَوْقَ كُلِّ ذِي عِلْمٍ',
        post: '.',
        en: 'and above every possessor of knowledge is one who knows still more.',
        options: ['عَلِيمٌ', 'عَلِيمٍ', 'عَلِيماً', 'عَلِيمُ'],
        answer: 0,
        rationales: [
          'Nominative, indefinite -- predicate of the implied "is," nunation shows it.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Accusative -- wrong case for a predicate with no governing verb.',
          'Nominative without nunation -- wrong; the word is indefinite here, so it needs tanwīn.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَسْتَطِيعُ الرَّجُلُ أَنْ يُحِيطَ بِعِلْمِ اللَّهِ',
        pre: '',
        post: 'الرَّجُلُ أَنْ يُحِيطَ بِعِلْمِ اللَّهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَسْتَطِيعُ', 'يَسْتَطِيعُ', 'تَسْتَطِيعُ', 'نَسْتَطِيعُ'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- you, not I.',
          '1st plural -- we, not I.',
        ],
      },
      {
        type: 'shift',
        base: 'يَسْتَطِيعُ الرَّجُلُ أَنْ يُحِيطَ بِعِلْمِ اللَّهِ',
        pre: '',
        post: 'الرَّجُلُ أَنْ يُحِيطَ بِعِلْمِ اللَّهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَسْتَطِيعُونَ', 'يَسْتَطِيعُ', 'تَسْتَطِيعُ', 'نَسْتَطِيعُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '3rd/2nd feminine singular -- wrong person and number.',
          '1st plural -- we, not they.',
        ],
      },
      {
        type: 'shift',
        base: 'يَسْتَطِيعُ الرَّجُلُ أَنْ يُحِيطَ بِعِلْمِ اللَّهِ',
        pre: '',
        post: 'الرَّجُلُ أَنْ يُحِيطَ بِعِلْمِ اللَّهِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَسْتَطِيعُ', 'يَسْتَطِيعُ', 'تَسْتَطِيعُ', 'يَسْتَطِعْنَ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- you, not we.',
          '3rd feminine plural -- wrong person and gender.',
        ],
      },
    ],
  },
};

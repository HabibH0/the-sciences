// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus), chapter 13 -- ١٣ - الشَّرِيعَةُ ("The Law"). Pages 191-194: from
// the chapter-13 heading box partway down page 191 (right after chapter
// 12's cow-of-Banī-Isrā'īl narrative closes) through pages 192-193, up to
// (not including) the chapter-14 heading box partway down page 194.
// Transcribed by hand from the scan (vision OCR) against
// ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md, from the supplied
// transcript C:\...\scratchpad\transcript-187-199.txt (=== PAGE 191 ===
// through the "CHAPTER HEADING: ١٤" marker on page 194). No corrections
// needed against the transcript for this range; nothing looked
// grammatically off.
//
// Register: third-person narrator prose, mostly non-Qur'anic -- this is
// Nadwī's own philosophical reflection on why mankind needs prophetic law,
// not a retelling of a Qur'anic narrative. Only two short Qur'anic
// quotations appear (qs-v7-c13-011, an-Najm 53:28-type "innī yattabi'ūna
// illā z-zann" material, and qs-v7-c13-020, an-Nūr 24:40's "darkness upon
// darkness" verse) -- both transcribed and tokenized in full per current
// instruction; the first is long enough (11 tokens) to be automatically
// safe from the build stage's 3-9 token window, and the second (~20
// tokens) likewise. Neither is Nadwī's own composition, so neither is used
// for `workshop`.
//
// STRUCTURAL NOTE: page 193 carries a footnote (marked (١) on "الْحَرْبِ
// الثَّانِيَةِ") -- a teacher's aside (لِلْمُعَلِّمِ) citing WWI/WWII casualty
// figures. Per instruction this is pedagogical apparatus, not narrative
// vocabulary or a book_note gloss: it is skipped entirely here, not
// tokenized, and not recorded in `lemmas[].book_note`.
//
// Two administrative page-boundary notes in the source transcript
// (e.g. "الصفحة ١٩١، مطابقة") are transcribing-agent bookkeeping, not book
// text, and are not reflected here.
//
// POST-WRITE CORRECTION: after drafting this chapter, five other qasas-v7
// chapters completed by parallel agents became visible on disk. Checking
// their newWords against this chapter's draft list surfaced five words
// this chapter had independently (and correctly, on the evidence
// available at draft time) tagged new that an EARLIER chapter in the
// volume already introduces with the identical sense: إِسْرَائِيل (ch4,
// "Israel"), عَيْش (ch6, "life, livelihood"), بَرِّيَّة (ch8, "wilderness,
// desert"), إِلَهِيّ (ch11, "divine"), كَادَ (ch12, "to nearly do, be about
// to", same root ك و د). All five are removed from newWords/lemmas below;
// the tokens that use them are unaffected (each already carries its own
// inline `gloss`, so removing the lemmas{} entries is a no-op for
// rendering). (Separately: two of chapter 14's new words -- طُور and خَرَّ --
// are independently re-tagged new by chapter 15; see chapter 14's own
// header for that note, not applicable to this chapter.)
//
// Judgment calls / things flagged for a second pair of eyes:
//   -- شَرِيعَة and نُور, which the task brief flagged as "likely new" for
//      this chapter, are BOTH already taught (شَرِيعَة: qiraah-v2 ch57;
//      نُور: qasas-v3 ch16) per the supplied lexicon.txt export -- neither
//      is re-taught here. Correcting the brief's hint rather than
//      following it silently.
//   -- جَبَل, also flagged "check, may already be known" for ch.14, does
//      not actually occur anywhere in chapter 13's own text (it belongs to
//      ch.14's Sinai narrative) -- noted here only because the check was
//      run while auditing this chapter's vocabulary too; it IS already
//      taught (qasas-v1 ch15).
//   -- خَبَطَ (verb, "to strike blindly, flounder") and خَبْط (its own
//      verbal noun, used independently later as "وَخَبْطٌ فِي أَمْوَالِ
//      النَّاسِ") are split into two lemma keys rather than one, following
//      qiraah-v1/ch29's documented precedent for و‌ضع/وضع-اسم: a genuine
//      in-chapter verb-vs-noun clash on the same root gets two keys.
//   -- جَهْل (abstract noun, "ignorance", qs-v7-c13-013) is tagged new
//      despite the participle جَاهِل already being taught (qasas-v2 ch22)
//      -- different derivational pattern/POS, the noun of the same
//      semantic field but not interchangeable, flagged rather than reused.
//   -- طُور does NOT occur in this chapter (it is ch.14's Sinai vocabulary)
//      but its lexicon entry (qiraah-v2 ch33) was checked while auditing
//      this chapter's list too: that entry is the distinct, differently
//      vowelled common noun طَوْر ("a stage, phase"), not طُور ("the
//      Mount"), so it does not pre-empt ch.14's new proper-noun sense.
//   -- عَجِلَ/أَعْجَلَ (root ع ج ل) do not occur in this chapter either, but
//      see ch.14's header for the fusion judgment call, since the taught
//      lemma "عجل" (qiraah-v1 ch25, qiraah-v2 ch35, glossed "to hasten
//      (someone)") is reused there across three derived forms.
//   -- كَادَ (qs-v7-c13-030, inside the an-Nūr quotation "لَمْ يَكَدْ يَرَاهَا")
//      is tagged new as its own verb-of-imminence lemma; no precedent verb
//      of this closed grammatical class was found taught anywhere in the
//      supplied lexicon.
//   -- هُنَالِكَ (qs-v7-c13-005) and كَمَا (qs-v7-c13-047) are treated as
//      already-known bedrock function words, consistent with qasas-v7
//      ch1's header precedent for هَذَا/هَذِهِ/ذَلِكَ/جَاءَ (common words the
//      lexicon export doesn't itself list under any chapter, evidently an
//      export gap rather than genuinely new vocabulary) -- هُنَالِكَ is in
//      fact listed (qiraah-v2 ch40) so this is doubly safe.
//   -- The internal em-dash parentheticals in the source around "بِغَيْرِ
//      هَذَا النُّورِ" (p.192) and "مِمَّنْ لَا يَخَافُونَ اللَّهَ وَلَا يَتَّبِعُونَ
//      الشَّرِيعَةَ" (p.193) are dropped from the transcribed `ar` strings as
//      typographic parenthetical marks, not words -- the sentences read
//      cleanly without them and every token still reconstructs the
//      (dash-free) `ar` string exactly.
//
// Shared lexicon check (grepped against the supplied lexicon.txt export,
// plus qasas-v7 ch1/ch2's own headers, AND -- per the post-write
// correction above -- the newWords lists of qasas-v7 ch4/ch6/ch8/ch11/
// ch12, discovered on disk after this chapter's first draft):
// خَرَجَ (qasas-v1 ch4/ch12)، اِبْن (qasas-v1 ch14)، مِنْ، إِلَى، نَاس، صَارَ
// (qasas-v3 ch7)، عَاشَ (qasas-v3 ch1)، إِسْرَائِيل (qasas-v7 ch4)، عَيْش
// (qasas-v7 ch6)، بَرِّيَّة (qasas-v7 ch8)، إِلَهِيّ (qasas-v7 ch11)، كَادَ
// (qasas-v7 ch12)، فِي، حُرّ (qasas-v2 ch9)، شَرِيف
// (qasas-v3 ch14)، شَرِيعَة (qiraah-v2 ch57)، حَكَمَ (qasas-v2 ch11/ch25،
// qiraah-v2 ch45)، بَيْنَ (qasas-v3 ch20)، لِ، سَبِيل (qasas-v2 ch20)، هُنَالِكَ
// (qiraah-v2 ch40)، إِنَّ، إِنْسَان (qasas-v2 ch1)، لَا، أَنْ، إِلَّا، رَبّ
// (qasas-v1 ch7)، عَالَم (qasas-v1 ch8)، كُلّ (qasas-v1 ch10)، ظَلاَم
// (qiraah-v2 ch37)، مَنْ، ذَلِكَ (bedrock)، هُوَ، نَبِيّ (qasas-v1 ch8)، الَّذِي
// (qasas-v1 ch9)، هَدَى (qasas-v1 ch8، reused for both يَهْتَدِي and
// أَهْدِيكُمْ per qasas-v7 ch1's own precedent for extending the taught Form
// I lemma across derived forms)، لَمْ، هَذَا (bedrock)، كَانَ، ضَلاَل
// (qasas-v2 ch24)، سَمِعَ (qasas-v1 ch2)، مُشْرِك (qasas-v1 ch10)، كَافِر
// (qasas-v3 ch17)، أَغْنَى (qasas-v7 ch1)، حَقّ (qasas-v2 ch9، reused for
// حُقُوق pl.)، شَيْء (qiraah-v2 ch38)، رَأَى (qasas-v1 ch2)، كَيْفَ (qiraah-v2
// ch38)، اِتَّبَعَ (qasas-v2 ch11)، جَاوَزَ (qasas-v3 ch15)، حَدّ (qيraah-v2
// ch68، reused for حُدُود pl.)، حُكْم (qasas-v2 ch11/ch25)، سِيَاسَة
// (qiraah-v2 ch68)، ظُلْم (qasas-v2 ch20)، مَال (qiraah-v2 ch36، qasas-v2
// ch16)، دَم (qiraah-v1 ch29، qasas-v2 ch4)، ذُو (qiraah-v1 ch26، reused
// for أُولِي)، أَمْر (qasas-v2 ch2)، خَافَ (qasas-v1 ch10)، اللَّه، خَانَ
// (qasas-v2 ch8)، أَمَانَة (qiraah-v2 ch41، qasas-v2 ch16)، عَبَثَ (qiraah-v2
// ch37/ch52)، جَعَلَ (qasas-v1 ch8)، ذَبَحَ (qiraah-v2 ch45، qasas-v1 ch14)،
// رَجُل (qasas-v1 ch1)، اِسْتَحْيَا (qiraah-v1 ch31، qasas-v2 ch16)، نِسَاء
// (qasas-v3 ch1)، عَلِمَ (qasas-v1 ch5)، كَمْ (qiraah-v2 ch40)، قَتَلَ
// (qasas-v1 ch10)، حَرْب (qiraah-v1 ch29، qiraah-v2 ch38/ch48)، أَوَّل
// (qasas-v2 ch12، reused for fem. الْأُولَى)، ثَانِي (qiraah-v2 ch40/ch56)،
// فَوْقَ (qiraah-v2 ch33، qasas-v2 ch9)، بَعْض (qasas-v2 ch2)، إِذَا (qasas-v1
// ch9)، أَخْرَجَ (qiraah-v2 ch53، qasas-v2 ch7)، يَد (qasas-v1 ch15)،
// يَجْعَلِ→جَعَلَ، عَلَّمَ (qasas-v2 ch10، distinct taught lemma from عَلِمَ per
// qiraah-v1/ch29's own documented علم/علّم split)، عَامَلَ (qiraah-v2
// ch72)، كَذَلِكَ (qasas-v1 ch9)، حَيَاة (qيraah-v2 ch51)، دِين (qasas-v2
// ch11)، أَكَلَ (qiraah-v2 ch33)، نَامَ (qasas-v2 ch6)، مَجْلِس (qiraah-v2
// ch44)، وَالِد (qiraah-v2 ch35)، شَفِيق (qasas-v3 ch11)، عَزِيز (qasas-v2
// ch3، reused for pl. الْأَعِزَّة)، طِفْل (qiraah-v2 ch37/ch38، qasas-v1
// ch4)، صَغِير (qيraah-v2 ch39، qasas-v3 ch12، reused for both الصِّغَار and
// noun صِغَر)، كِبَر (qasas-v3 ch14)، تَرْبِيَة (qيraah-v2 ch35)، تَعَلَّمَ
// (qiraah-v2 ch72)، شَجَرَة (qيraah-v2 ch59)، نَبَتَ (qيraah-v2 ch33)، نَشَأَ
// (qيraah-v2 ch41)، نَفْس (qasas-v1 ch2)، فَسَاد (qasas-v3 ch17)، كَثِير
// (qasas-v3 ch1، reused for elative أَكْثَرَ)، غَيْر (qيraah-v1 ch31، qasas-v2
// ch9/ch25)، ضَحِكَ (qasas-v2 ch9)، أَخ/إِخْوَان (n/a this chapter)
// are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 30 new words -- unusually high for non-Qur'an-heavy narrator prose, but
// this chapter is a dense run of abstract nouns (creeds, ethics, vices,
// political sins) built almost entirely from Nadwī's own vocabulary, not
// recycled Qur'anic phrasing.
//
// No page footnotes recorded as book_note on these pages (the one
// footnote present is the skipped teacher's aside described above).
export const CHAPTER = {
  id: 'ch13',
  title: { ar: 'الشَّرِيعَةُ', en: 'The Law' },
  newWords: [
    'بَهِيمَة', 'اِحْتَاجَ', 'أَنَارَ',
    'اِسْتَطَاعَ', 'أَشْرَقَ', 'خَبَطَ', 'خَبْط', 'عَشْوَاء', 'عَقِيدَة', 'وَهْم', 'خُرَافَة',
    'يَهُود', 'نَصَارَى', 'أُسْطُورَة', 'جَهْل', 'تَخْمِين', 'تَفْرِيط', 'إِفْرَاط', 'تَقْصِير',
    'إِسْرَاف', 'هَضَمَ', 'هَوَى', 'اِسْتِبْدَاد', 'اِسْتَعْبَدَ', 'شِيعَة', 'ظُلْمَة',
    'أَدَب', 'شُرْب', 'تَلَقَّى', 'نَبَوِيّ',
  ],
  lemmas: {
    'بَهِيمَة': { gloss: 'beast, dumb animal (pl. بَهَائِم)' },
    'اِحْتَاجَ': { gloss: 'to need, be in need of' },
    'أَنَارَ': { gloss: 'to illuminate, light up' },
    'اِسْتَطَاعَ': { gloss: 'to be able' },
    'أَشْرَقَ': { gloss: 'to shine forth, rise (of light)' },
    'خَبَطَ': { gloss: 'to strike blindly, flounder about' },
    'خَبْط': { gloss: 'blind floundering; random striking, chaos' },
    'عَشْوَاء': { gloss: 'a blind (she-camel); (idiom) blindly, at random' },
    'عَقِيدَة': { gloss: 'creed, belief (pl. عَقَائِد)' },
    'وَهْم': { gloss: 'illusion, delusion (pl. أَوْهَام)' },
    'خُرَافَة': { gloss: 'superstition, fable, myth' },
    'يَهُود': { gloss: 'Jews' },
    'نَصَارَى': { gloss: 'Christians' },
    'أُسْطُورَة': { gloss: 'legend, myth (pl. أَسَاطِير)' },
    'جَهْل': { gloss: 'ignorance' },
    'تَخْمِين': { gloss: 'guesswork, conjecture' },
    'تَفْرِيط': { gloss: 'negligence, remissness, falling short' },
    'إِفْرَاط': { gloss: 'excess, going to extremes' },
    'تَقْصِير': { gloss: 'shortcoming, falling short of duty' },
    'إِسْرَاف': { gloss: 'extravagance, wastefulness' },
    'هَضَمَ': { gloss: 'to usurp, devour (rights); (lit.) to digest' },
    'هَوَى': { gloss: 'desire, whim, caprice' },
    'اِسْتِبْدَاد': { gloss: 'despotism, tyranny' },
    'اِسْتَعْبَدَ': { gloss: 'to enslave' },
    'شِيعَة': { gloss: 'faction, sect, party (pl. شِيَع)' },
    'ظُلْمَة': { gloss: 'a layer of darkness (pl. ظُلُمَات)' },
    'أَدَب': { gloss: 'manners, etiquette, culture (pl. آدَاب)' },
    'شُرْب': { gloss: 'drinking' },
    'تَلَقَّى': { gloss: 'to receive' },
    'نَبَوِيّ': { gloss: 'prophetic' },
  },
  paragraphs: [
    {
      en: 'The Children of Israel passed from the life of beasts to the life of human beings, and they came to live in the wilderness like free, noble men. There they needed a divine law to govern between them and light the way for them.',
      sentences: [
        {
          id: 'qs-v7-c13-001',
          ar: 'وَخَرَجَ بَنُو إِسْرَائِيلَ مِنْ عَيْشِ الْبَهَائِمِ إِلَى عَيْشِ النَّاسِ.',
          en: 'The Children of Israel passed from the life of beasts to the life of human beings.',
          tokens: [
            { surface: 'وَخَرَجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'conj+perf.3ms', root: 'خ ر ج', gloss: 'to go out, pass; and passed' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'the sons, children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'عَيْشِ', lemma: 'عَيْش', pos: 'noun', features: 'constr.gen', root: 'ع ي ش', gloss: 'the life of' },
            { surface: 'الْبَهَائِمِ', lemma: 'بَهِيمَة', pos: 'noun', features: 'pl.def.gen', root: 'ب ه م', gloss: 'the beasts' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'عَيْشِ', lemma: 'عَيْش', pos: 'noun', features: 'constr.gen', root: 'ع ي ش', gloss: 'the life of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people, human beings' },
          ],
        },
        {
          id: 'qs-v7-c13-002',
          ar: 'وَصَارُوا يَعِيشُونَ فِي الْبَرِّيَّةِ كَالْأَحْرَارِ الْأَشْرَافِ.',
          en: 'and they came to live in the wilderness like free, noble men.',
          tokens: [
            { surface: 'وَصَارُوا', lemma: 'صَارَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ص ي ر', gloss: 'to become; and they came to' },
            { surface: 'يَعِيشُونَ', lemma: 'عَاشَ', pos: 'verb', features: 'impf.3mp', root: 'ع ي ش', gloss: 'to live; living' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبَرِّيَّةِ', lemma: 'بَرِّيَّة', pos: 'noun', features: 'def.gen', root: 'ب ر ر', gloss: 'the wilderness' },
            { surface: 'كَالْأَحْرَارِ', lemma: 'حُرّ', pos: 'noun', features: 'prep+pl.def.gen', root: 'ح ر ر', gloss: 'like the free men' },
            { surface: 'الْأَشْرَافِ', lemma: 'شَرِيف', pos: 'noun', features: 'pl.def.gen', root: 'ش ر ف', gloss: 'the nobles' },
          ],
        },
        {
          id: 'qs-v7-c13-003',
          ar: 'هُنَالِكَ احْتَاجُوا إِلَى شَرِيعَةٍ إِلَهِيَّةٍ تَحْكُمُ بَيْنَهُمْ وَتُنِيرُ لَهُمُ السَّبِيلَ.',
          en: 'There they needed a divine law to govern between them and light the way for them.',
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'there' },
            { surface: 'احْتَاجُوا', lemma: 'اِحْتَاجَ', pos: 'verb', features: 'perf.3mp', root: 'ح و ج', gloss: 'to need; they needed' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'شَرِيعَةٍ', lemma: 'شَرِيعَة', pos: 'noun', features: 'indef.gen', root: 'ش ر ع', gloss: 'a law' },
            { surface: 'إِلَهِيَّةٍ', lemma: 'إِلَهِيّ', pos: 'adj', features: 'indef.gen.f', root: 'ا ل ه', gloss: 'divine' },
            { surface: 'تَحْكُمُ', lemma: 'حَكَمَ', pos: 'verb', features: 'impf.3fs', root: 'ح ك م', gloss: 'to govern; governing' },
            { surface: 'بَيْنَهُمْ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep+3mp', gloss: 'between them' },
            { surface: 'وَتُنِيرُ', lemma: 'أَنَارَ', pos: 'verb', features: 'conj+impf.3fs', root: 'ن و ر', gloss: 'to illuminate; and lighting' },
            { surface: 'لَهُمُ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'السَّبِيلَ', lemma: 'سَبِيل', pos: 'noun', features: 'def.acc', gloss: 'the way' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا احْتَاجَ بَنُو إِسْرَائِيلَ إِلَيْهِ بَعْدَ خُرُوجِهِمْ إِلَى الْبَرِّيَّةِ؟',
          options: ['شَرِيعَةٍ إِلَهِيَّةٍ تَحْكُمُ بَيْنَهُمْ وَتُنِيرُ لَهُمُ السَّبِيلَ', 'مَالٍ وَطَعَامٍ', 'جَيْشٍ قَوِيٍّ'],
          answer: 0,
          qEn: 'What did the Children of Israel need after going out into the wilderness?',
          optionsEn: ['A divine law to govern them and light their way', 'Wealth and food', 'A strong army'],
        },
      ],
    },
    {
      en: 'Man cannot live as a true man except by a divine law, and except by a light from his Lord. The whole world is darkness upon darkness, except for one on whom a light from his Lord has shone. That light is the light of the prophets, by which people are guided. Whoever is not guided by this light remains in confusion, floundering blindly. Creeds without this light are mere illusions and superstitions that children laugh at.',
      sentences: [
        {
          id: 'qs-v7-c13-004',
          ar: 'إِنَّ الْإِنْسَانَ لَا يَسْتَطِيعُ أَنْ يَعِيشَ كَإِنْسَانٍ إِلَّا بِشَرِيعَةٍ إِلَهِيَّةٍ وَإِلَّا بِنُورٍ مِنْ رَبِّهِ.',
          en: 'Man cannot live as a true man except by a divine law, and except by a light from his Lord.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'الْإِنْسَانَ', lemma: 'إِنْسَان', pos: 'noun', features: 'def.acc', gloss: 'man, the human being' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَسْتَطِيعُ', lemma: 'اِسْتَطَاعَ', pos: 'verb', features: 'impf.3ms', root: 'ط و ع', gloss: 'to be able; can' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَعِيشَ', lemma: 'عَاشَ', pos: 'verb', features: 'impf.3ms', root: 'ع ي ش', gloss: 'to live' },
            { surface: 'كَإِنْسَانٍ', lemma: 'إِنْسَان', pos: 'noun', features: 'prep+indef.gen', gloss: 'as a human being' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'بِشَرِيعَةٍ', lemma: 'شَرِيعَة', pos: 'noun', features: 'prep+indef.gen', root: 'ش ر ع', gloss: 'by a law' },
            { surface: 'إِلَهِيَّةٍ', lemma: 'إِلَهِيّ', pos: 'adj', features: 'indef.gen.f', gloss: 'divine' },
            { surface: 'وَإِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'conj+part', gloss: 'and except' },
            { surface: 'بِنُورٍ', lemma: 'نُور', pos: 'noun', features: 'prep+indef.gen', gloss: 'by a light' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'رَبِّهِ', lemma: 'رَبّ', pos: 'noun', features: 'gen+3ms', gloss: 'his Lord' },
          ],
        },
        {
          id: 'qs-v7-c13-005',
          ar: 'الْعَالَمُ كُلُّهُ ظَلَامٌ فِي ظَلَامٍ إِلَّا مَنْ أَشْرَقَ لَهُ نُورٌ مِنْ رَبِّهِ.',
          en: 'The whole world is darkness upon darkness, except for one on whom a light from his Lord has shone.',
          tokens: [
            { surface: 'الْعَالَمُ', lemma: 'عَالَم', pos: 'noun', features: 'def.nom', gloss: 'the world' },
            { surface: 'كُلُّهُ', lemma: 'كُلّ', pos: 'noun', features: 'nom+3ms', gloss: 'all of it' },
            { surface: 'ظَلَامٌ', lemma: 'ظَلاَم', pos: 'noun', features: 'indef.nom', gloss: 'darkness' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, upon' },
            { surface: 'ظَلَامٍ', lemma: 'ظَلاَم', pos: 'noun', features: 'indef.gen', gloss: 'darkness' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'whoever, one on whom' },
            { surface: 'أَشْرَقَ', lemma: 'أَشْرَقَ', pos: 'verb', features: 'perf.3ms', root: 'ش ر ق', gloss: 'to shine forth; has shone' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'نُورٌ', lemma: 'نُور', pos: 'noun', features: 'indef.nom', gloss: 'a light' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'رَبِّهِ', lemma: 'رَبّ', pos: 'noun', features: 'gen+3ms', gloss: 'his Lord' },
          ],
        },
        {
          id: 'qs-v7-c13-006',
          ar: 'وَذَلِكَ النُّورُ هُوَ نُورُ الْأَنْبِيَاءِ الَّذِي يَهْتَدِي بِهِ النَّاسُ.',
          en: 'That light is the light of the prophets, by which people are guided.',
          tokens: [
            { surface: 'وَذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'conj+dem.m', gloss: 'and that' },
            { surface: 'النُّورُ', lemma: 'نُور', pos: 'noun', features: 'def.nom', gloss: 'the light' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'it (he)' },
            { surface: 'نُورُ', lemma: 'نُور', pos: 'noun', features: 'nom.constr', gloss: 'the light of' },
            { surface: 'الْأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.def.gen', gloss: 'the prophets' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'which' },
            { surface: 'يَهْتَدِي', lemma: 'هَدَى', pos: 'verb', features: 'impf.3ms', root: 'ه د ي', gloss: 'to be guided; are guided' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'by it' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v7-c13-007',
          ar: 'وَمَنْ لَمْ يَهْتَدِ بِهَذَا النُّورِ كَانَ فِي ضَلَالٍ يَخْبِطُ خَبْطَ عَشْوَاءَ.',
          en: 'And whoever is not guided by this light remains in confusion, floundering blindly.',
          tokens: [
            { surface: 'وَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and whoever' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَهْتَدِ', lemma: 'هَدَى', pos: 'verb', features: 'impf.3ms', root: 'ه د ي', gloss: 'to be guided' },
            { surface: 'بِهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'prep+dem.m', gloss: 'by this' },
            { surface: 'النُّورِ', lemma: 'نُور', pos: 'noun', features: 'def.gen', gloss: 'the light' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; remains' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ضَلَالٍ', lemma: 'ضَلاَل', pos: 'noun', features: 'indef.gen', gloss: 'misguidance, confusion' },
            { surface: 'يَخْبِطُ', lemma: 'خَبَطَ', pos: 'verb', features: 'impf.3ms', root: 'خ ب ط', gloss: 'to flounder, strike blindly' },
            { surface: 'خَبْطَ', lemma: 'خَبْط', pos: 'noun', features: 'acc.constr', root: 'خ ب ط', gloss: 'the blind floundering of' },
            { surface: 'عَشْوَاءَ', lemma: 'عَشْوَاء', pos: 'noun', features: 'indef.gen', root: 'ع ش و', gloss: 'a blind one (she-camel)' },
          ],
        },
        {
          id: 'qs-v7-c13-008',
          ar: 'فَالْعَقَائِدُ بِغَيْرِ هَذَا النُّورِ أَوْهَامٌ وَخُرَافَاتٌ يَضْحَكُ مِنْهَا الْأَطْفَالُ.',
          en: 'Creeds without this light are mere illusions and superstitions that children laugh at.',
          tokens: [
            { surface: 'فَالْعَقَائِدُ', lemma: 'عَقِيدَة', pos: 'noun', features: 'conj+pl.def.nom', root: 'ع ق د', gloss: 'so the creeds' },
            { surface: 'بِغَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'prep+constr.gen', gloss: 'without' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'النُّورِ', lemma: 'نُور', pos: 'noun', features: 'def.gen', gloss: 'the light' },
            { surface: 'أَوْهَامٌ', lemma: 'وَهْم', pos: 'noun', features: 'pl.indef.nom', root: 'و ه م', gloss: 'illusions' },
            { surface: 'وَخُرَافَاتٌ', lemma: 'خُرَافَة', pos: 'noun', features: 'conj+pl.indef.nom', root: 'خ ر ف', gloss: 'and superstitions' },
            { surface: 'يَضْحَكُ', lemma: 'ضَحِكَ', pos: 'verb', features: 'impf.3ms', gloss: 'to laugh' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'at them' },
            { surface: 'الْأَطْفَالُ', lemma: 'طِفْل', pos: 'noun', features: 'pl.def.nom', gloss: 'the children' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا وُصِفَتْ عَقَائِدُ النَّاسِ بِغَيْرِ نُورِ الْأَنْبِيَاءِ؟',
          options: ['أَوْهَامٌ وَخُرَافَاتٌ يَضْحَكُ مِنْهَا الْأَطْفَالُ', 'حَقَائِقُ عِلْمِيَّةٌ ثَابِتَةٌ', 'قِصَصٌ مُفِيدَةٌ لِلْجَمِيعِ'],
          answer: 0,
          qEn: 'How were people\u2019s creeds without the light of the prophets described?',
          optionsEn: ['Illusions and superstitions that children laugh at', 'Fixed scientific facts', 'Useful stories for everyone'],
        },
        {
          q: 'مَنْ لَمْ يَهْتَدِ بِنُورِ الْأَنْبِيَاءِ، كَيْفَ يَكُونُ حَالُهُ؟',
          options: ['يَكُونُ فِي ضَلَالٍ يَخْبِطُ خَبْطَ عَشْوَاءَ', 'يَكُونُ أَسْعَدَ النَّاسِ', 'لَا يَتَغَيَّرُ حَالُهُ أَبَداً'],
          answer: 0,
          qEn: 'Whoever is not guided by the light of the prophets \u2014 what becomes of his state?',
          optionsEn: ['He remains in confusion, floundering blindly', 'He becomes the happiest of people', 'His state never changes at all'],
        },
      ],
    },
    {
      en: 'Have you not heard the creeds of the polytheists, the disbelievers, the Jews, and the Christians, and their superstitions and myths? Knowledge becomes ignorance, conjecture, guesswork, and doubt \u2014 "They follow nothing but conjecture, and indeed conjecture avails nothing against the truth." And morals become negligence, excess, shortcoming, and extravagance. Have you not seen how those who do not follow the prophets usurp rights, transgress limits, and follow their own whims?',
      sentences: [
        {
          id: 'qs-v7-c13-009',
          ar: 'أَمَا سَمِعْتُمْ عَقَائِدَ الْمُشْرِكِينَ وَالْكُفَّارِ وَالْيَهُودِ وَالنَّصَارَى وَخُرَافَاتِهِمْ وَأَسَاطِيرَهُمْ!',
          en: 'Have you not heard the creeds of the polytheists, the disbelievers, the Jews, and the Christians, and their superstitions and myths?',
          tokens: [
            { surface: 'أَمَا', lemma: 'أَمَا', pos: 'part', features: 'part', gloss: 'have not?' },
            { surface: 'سَمِعْتُمْ', lemma: 'سَمِعَ', pos: 'verb', features: 'perf.2mp', gloss: 'to hear; have you heard' },
            { surface: 'عَقَائِدَ', lemma: 'عَقِيدَة', pos: 'noun', features: 'pl.acc.constr', root: 'ع ق د', gloss: 'the creeds of' },
            { surface: 'الْمُشْرِكِينَ', lemma: 'مُشْرِك', pos: 'noun', features: 'pl.def.gen', gloss: 'the polytheists' },
            { surface: 'وَالْكُفَّارِ', lemma: 'كَافِر', pos: 'noun', features: 'conj+pl.def.gen', gloss: 'and the disbelievers' },
            { surface: 'وَالْيَهُودِ', lemma: 'يَهُود', pos: 'noun', features: 'conj+def.gen', root: 'ي ه د', gloss: 'and the Jews' },
            { surface: 'وَالنَّصَارَى', lemma: 'نَصَارَى', pos: 'noun', features: 'conj+def.gen', gloss: 'and the Christians' },
            { surface: 'وَخُرَافَاتِهِمْ', lemma: 'خُرَافَة', pos: 'noun', features: 'conj+pl.gen+3mp', gloss: 'and their superstitions' },
            { surface: 'وَأَسَاطِيرَهُمْ', lemma: 'أُسْطُورَة', pos: 'noun', features: 'conj+pl.gen+3mp', root: 'س ط ر', gloss: 'and their myths' },
          ],
        },
        {
          id: 'qs-v7-c13-010',
          ar: 'وَالْعِلْمُ جَهْلٌ وَظَنٌّ وَتَخْمِينٌ وَشَكٌّ.',
          en: 'Knowledge becomes ignorance, conjecture, guesswork, and doubt.',
          tokens: [
            { surface: 'وَالْعِلْمُ', lemma: 'عِلْم', pos: 'noun', features: 'conj+def.nom', gloss: 'and knowledge' },
            { surface: 'جَهْلٌ', lemma: 'جَهْل', pos: 'noun', features: 'indef.nom', root: 'ج ه ل', gloss: 'ignorance' },
            { surface: 'وَظَنٌّ', lemma: 'ظَنّ', pos: 'noun', features: 'conj+indef.nom', gloss: 'and conjecture' },
            { surface: 'وَتَخْمِينٌ', lemma: 'تَخْمِين', pos: 'noun', features: 'conj+indef.nom', root: 'خ م ن', gloss: 'and guesswork' },
            { surface: 'وَشَكٌّ', lemma: 'شَكّ', pos: 'noun', features: 'conj+indef.nom', gloss: 'and doubt' },
          ],
        },
        {
          // an-Najm 53:28-type wording (identical to Yūnus 10:36's second
          // half); exact ayah left unpinned, flagged rather than guessed.
          id: 'qs-v7-c13-011',
          ar: '\u{FD3E}إِن يَتَّبِعُونَ إِلَّا ٱلظَّنَّ وَإِنَّ ٱلظَّنَّ لَا يُغْنِى مِنَ ٱلْحَقِّ شَيْـًٔا\u{FD3F}.',
          en: '"They follow nothing but conjecture, and indeed conjecture avails nothing against the truth."',
          tokens: [
            { surface: 'إِن', lemma: 'إِنْ', pos: 'neg', features: 'neg', gloss: 'not' },
            { surface: 'يَتَّبِعُونَ', lemma: 'اِتَّبَعَ', pos: 'verb', features: 'impf.3mp', gloss: 'to follow; they follow' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, but' },
            { surface: 'ٱلظَّنَّ', lemma: 'ظَنّ', pos: 'noun', features: 'def.acc', gloss: 'conjecture' },
            { surface: 'وَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'ٱلظَّنَّ', lemma: 'ظَنّ', pos: 'noun', features: 'def.acc', gloss: 'conjecture' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُغْنِى', lemma: 'أَغْنَى', pos: 'verb', features: 'impf.3ms', gloss: 'to avail; avails' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'against' },
            { surface: 'ٱلْحَقِّ', lemma: 'حَقّ', pos: 'noun', features: 'def.gen', gloss: 'the truth' },
            { surface: 'شَيْـًٔا', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
          ],
        },
        {
          id: 'qs-v7-c13-012',
          ar: 'وَالْأَخْلَاقُ تَفْرِيطٌ وَإِفْرَاطٌ وَتَقْصِيرٌ وَإِسْرَافٌ.',
          en: 'And morals become negligence, excess, shortcoming, and extravagance.',
          tokens: [
            { surface: 'وَالْأَخْلَاقُ', lemma: 'خُلُق', pos: 'noun', features: 'conj+pl.def.nom', root: 'خ ل ق', gloss: 'and morals, ethics' },
            { surface: 'تَفْرِيطٌ', lemma: 'تَفْرِيط', pos: 'noun', features: 'indef.nom', root: 'ف ر ط', gloss: 'negligence' },
            { surface: 'وَإِفْرَاطٌ', lemma: 'إِفْرَاط', pos: 'noun', features: 'conj+indef.nom', root: 'ف ر ط', gloss: 'and excess' },
            { surface: 'وَتَقْصِيرٌ', lemma: 'تَقْصِير', pos: 'noun', features: 'conj+indef.nom', root: 'ق ص ر', gloss: 'and shortcoming' },
            { surface: 'وَإِسْرَافٌ', lemma: 'إِسْرَاف', pos: 'noun', features: 'conj+indef.nom', root: 'س ر ف', gloss: 'and extravagance' },
          ],
        },
        {
          id: 'qs-v7-c13-013',
          ar: 'أَمَا رَأَيْتُمُ الَّذِينَ لَا يَتَّبِعُونَ الْأَنْبِيَاءَ كَيْفَ يَهْضِمُونَ الْحُقُوقَ وَكَيْفَ يُجَاوِزُونَ الْحُدُودَ وَكَيْفَ يَتَّبِعُونَ الْهَوَى؟!',
          en: 'Have you not seen those who do not follow the prophets \u2014 how they usurp rights, transgress limits, and follow their own whims?',
          tokens: [
            { surface: 'أَمَا', lemma: 'أَمَا', pos: 'part', features: 'part', gloss: 'have not?' },
            { surface: 'رَأَيْتُمُ', lemma: 'رَأَى', pos: 'verb', features: 'perf.2mp', gloss: 'to see; have you seen' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'rel.pl', gloss: 'those who' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَتَّبِعُونَ', lemma: 'اِتَّبَعَ', pos: 'verb', features: 'impf.3mp', gloss: 'to follow' },
            { surface: 'الْأَنْبِيَاءَ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.def.acc', gloss: 'the prophets' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'part', gloss: 'how' },
            { surface: 'يَهْضِمُونَ', lemma: 'هَضَمَ', pos: 'verb', features: 'impf.3mp', root: 'ه ض م', gloss: 'to usurp, devour (rights)' },
            { surface: 'الْحُقُوقَ', lemma: 'حَقّ', pos: 'noun', features: 'pl.def.acc', gloss: 'the rights' },
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'conj+part', gloss: 'and how' },
            { surface: 'يُجَاوِزُونَ', lemma: 'جَاوَزَ', pos: 'verb', features: 'impf.3mp', gloss: 'to transgress' },
            { surface: 'الْحُدُودَ', lemma: 'حَدّ', pos: 'noun', features: 'pl.def.acc', gloss: 'the limits' },
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'conj+part', gloss: 'and how' },
            { surface: 'يَتَّبِعُونَ', lemma: 'اِتَّبَعَ', pos: 'verb', features: 'impf.3mp', gloss: 'to follow' },
            { surface: 'الْهَوَى', lemma: 'هَوَى', pos: 'noun', features: 'def.acc', root: 'ه و ي', gloss: 'desire, whim' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا يُصْبِحُ الْعِلْمُ بِغَيْرِ نُورِ الْأَنْبِيَاءِ حَسَبَ الْكَاتِبِ؟',
          options: ['جَهْلاً وَظَنّاً وَتَخْمِيناً وَشَكّاً', 'عِلْماً صَحِيحاً ثَابِتاً دَائِماً', 'أَكْثَرَ يَقِيناً مِنَ الْوَحْيِ'],
          answer: 0,
          qEn: 'What does knowledge become without the light of the prophets, according to the author?',
          optionsEn: ['Ignorance, conjecture, guesswork, and doubt', 'Sound, permanently fixed knowledge', 'More certain than revelation'],
        },
        {
          q: 'مَاذَا يَفْعَلُ الَّذِينَ لَا يَتَّبِعُونَ الْأَنْبِيَاءَ بِالْحُقُوقِ وَالْحُدُودِ؟',
          options: ['يَهْضِمُونَ الْحُقُوقَ وَيُجَاوِزُونَ الْحُدُودَ وَيَتَّبِعُونَ الْهَوَى', 'يُحَافِظُونَ عَلَيْهَا بِدِقَّةٍ', 'يَزِيدُونَهَا لِلنَّاسِ دَائِماً'],
          answer: 0,
          qEn: 'What do those who do not follow the prophets do with rights and limits?',
          optionsEn: ['They usurp rights, transgress limits, and follow their whims', 'They carefully preserve them', 'They always increase them for people'],
        },
      ],
    },
    {
      en: 'Rule and politics become injustice, tyranny, and chaos in people\u2019s wealth, rights, and blood. Have you not seen how those in authority who do not fear Allah and do not follow His law betray trusts, tamper with Allah\u2019s wealth, and tamper with people\u2019s blood and rights? And how they enslaved people and turned them into factions, slaughtering their men and sparing their women? Do you know how many were killed in the First War, and how many were killed in the Second War? The whole world is darkness upon darkness, except for one on whom a light from his Lord has shone \u2014 "Layers of darkness, one upon another: when he holds out his hand, he can hardly see it. And whoever Allah has not granted a light has no light at all."',
      sentences: [
        {
          id: 'qs-v7-c13-014',
          ar: 'وَالْحُكْمُ وَالسِّيَاسَةُ ظُلْمٌ وَاسْتِبْدَادٌ وَخَبْطٌ فِي أَمْوَالِ النَّاسِ وَحُقُوقِهِمْ وَدِمَائِهِمْ.',
          en: 'Rule and politics become injustice, tyranny, and chaos in people\u2019s wealth, rights, and blood.',
          tokens: [
            { surface: 'وَالْحُكْمُ', lemma: 'حُكْم', pos: 'noun', features: 'conj+def.nom', gloss: 'and rule, judgment' },
            { surface: 'وَالسِّيَاسَةُ', lemma: 'سِيَاسَة', pos: 'noun', features: 'conj+def.nom', gloss: 'and politics' },
            { surface: 'ظُلْمٌ', lemma: 'ظُلْم', pos: 'noun', features: 'indef.nom', gloss: 'injustice' },
            { surface: 'وَاسْتِبْدَادٌ', lemma: 'اِسْتِبْدَاد', pos: 'noun', features: 'conj+indef.nom', root: 'ب د د', gloss: 'and tyranny, despotism' },
            { surface: 'وَخَبْطٌ', lemma: 'خَبْط', pos: 'noun', features: 'conj+indef.nom', root: 'خ ب ط', gloss: 'and chaos, random meddling' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أَمْوَالِ', lemma: 'مَال', pos: 'noun', features: 'pl.constr.gen', gloss: 'the wealth of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'وَحُقُوقِهِمْ', lemma: 'حَقّ', pos: 'noun', features: 'conj+pl.gen+3mp', gloss: 'and their rights' },
            { surface: 'وَدِمَائِهِمْ', lemma: 'دَم', pos: 'noun', features: 'conj+pl.gen+3mp', gloss: 'and their blood' },
          ],
        },
        {
          id: 'qs-v7-c13-015',
          ar: 'أَمَا رَأَيْتُمْ أُولِي الْأَمْرِ مِمَّنْ لَا يَخَافُونَ اللَّهَ وَلَا يَتَّبِعُونَ الشَّرِيعَةَ كَيْفَ يَخُونُونَ الْأَمَانَاتِ وَكَيْفَ يَعْبَثُونَ بِأَمْوَالِ اللَّهِ،',
          en: 'Have you not seen those in authority, among those who do not fear Allah and do not follow His law \u2014 how they betray trusts and tamper with Allah\u2019s wealth,',
          tokens: [
            { surface: 'أَمَا', lemma: 'أَمَا', pos: 'part', features: 'part', gloss: 'have not?' },
            { surface: 'رَأَيْتُمْ', lemma: 'رَأَى', pos: 'verb', features: 'perf.2mp', gloss: 'to see; have you seen' },
            { surface: 'أُولِي', lemma: 'ذُو', pos: 'noun', features: 'pl.constr.acc', root: 'ذ و و', gloss: 'the possessors of' },
            { surface: 'الْأَمْرِ', lemma: 'أَمْر', pos: 'noun', features: 'def.gen', gloss: 'authority, the matter' },
            { surface: 'مِمَّنْ', lemma: 'مَنْ', pos: 'rel', features: 'prep+rel', gloss: 'among those who' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَخَافُونَ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3mp', gloss: 'to fear' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَتَّبِعُونَ', lemma: 'اِتَّبَعَ', pos: 'verb', features: 'impf.3mp', gloss: 'to follow' },
            { surface: 'الشَّرِيعَةَ', lemma: 'شَرِيعَة', pos: 'noun', features: 'def.acc', gloss: 'the law' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'part', gloss: 'how' },
            { surface: 'يَخُونُونَ', lemma: 'خَانَ', pos: 'verb', features: 'impf.3mp', gloss: 'to betray' },
            { surface: 'الْأَمَانَاتِ', lemma: 'أَمَانَة', pos: 'noun', features: 'pl.def.acc', gloss: 'the trusts' },
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'conj+part', gloss: 'and how' },
            { surface: 'يَعْبَثُونَ', lemma: 'عَبَثَ', pos: 'verb', features: 'impf.3mp', gloss: 'to tamper, meddle' },
            { surface: 'بِأَمْوَالِ', lemma: 'مَال', pos: 'noun', features: 'prep+pl.constr.gen', gloss: 'with the wealth of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v7-c13-016',
          ar: 'وَكَيْفَ يَعْبَثُونَ بِدِمَاءِ النَّاسِ وَحُقُوقِهِمْ؟!',
          en: 'and how they tamper with people\u2019s blood and rights?',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'conj+part', gloss: 'and how' },
            { surface: 'يَعْبَثُونَ', lemma: 'عَبَثَ', pos: 'verb', features: 'impf.3mp', gloss: 'to tamper' },
            { surface: 'بِدِمَاءِ', lemma: 'دَم', pos: 'noun', features: 'prep+pl.constr.gen', gloss: 'with the blood of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'وَحُقُوقِهِمْ', lemma: 'حَقّ', pos: 'noun', features: 'conj+pl.gen+3mp', gloss: 'and their rights' },
          ],
        },
        {
          id: 'qs-v7-c13-017',
          ar: 'وَكَيْفَ اسْتَعْبَدُوا النَّاسَ وَجَعَلُوهُمْ شِيَعاً يَذْبَحُونَ رِجَالَهُمْ وَيَسْتَحْيُونَ نِسَاءَهُمْ،',
          en: 'and how they enslaved the people and turned them into factions, slaughtering their men and sparing their women,',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'conj+part', gloss: 'and how' },
            { surface: 'اسْتَعْبَدُوا', lemma: 'اِسْتَعْبَدَ', pos: 'verb', features: 'perf.3mp', root: 'ع ب د', gloss: 'to enslave' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'وَجَعَلُوهُمْ', lemma: 'جَعَلَ', pos: 'verb', features: 'conj+perf.3mp+3mp', gloss: 'to make; and made them' },
            { surface: 'شِيَعاً', lemma: 'شِيعَة', pos: 'noun', features: 'pl.indef.acc', root: 'ش ي ع', gloss: 'factions' },
            { surface: 'يَذْبَحُونَ', lemma: 'ذَبَحَ', pos: 'verb', features: 'impf.3mp', gloss: 'to slaughter' },
            { surface: 'رِجَالَهُمْ', lemma: 'رَجُل', pos: 'noun', features: 'pl.acc+3mp', gloss: 'their men' },
            { surface: 'وَيَسْتَحْيُونَ', lemma: 'اِسْتَحْيَا', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to spare, let live' },
            { surface: 'نِسَاءَهُمْ', lemma: 'نِسَاء', pos: 'noun', features: 'acc+3mp', gloss: 'their women' },
          ],
        },
        {
          id: 'qs-v7-c13-018',
          ar: 'أَتَعْلَمُ كَمْ قُتِلَ فِي الْحَرْبِ الْأُولَى وَكَمْ قُتِلَ فِي الْحَرْبِ الثَّانِيَةِ؟!',
          en: 'Do you know how many were killed in the First War, and how many were killed in the Second War?',
          tokens: [
            { surface: 'أَتَعْلَمُ', lemma: 'عَلِمَ', pos: 'verb', features: 'part+impf.2ms', gloss: 'to know; do you know' },
            { surface: 'كَمْ', lemma: 'كَمْ', pos: 'part', features: 'part', gloss: 'how many' },
            { surface: 'قُتِلَ', lemma: 'قَتَلَ', pos: 'verb', features: 'pass+perf.3ms', gloss: 'to kill; were killed' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْحَرْبِ', lemma: 'حَرْب', pos: 'noun', features: 'def.gen', gloss: 'the war' },
            { surface: 'الْأُولَى', lemma: 'أَوَّل', pos: 'adj', features: 'def.gen.f', gloss: 'the first' },
            { surface: 'وَكَمْ', lemma: 'كَمْ', pos: 'part', features: 'conj+part', gloss: 'and how many' },
            { surface: 'قُتِلَ', lemma: 'قَتَلَ', pos: 'verb', features: 'pass+perf.3ms', gloss: 'were killed' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْحَرْبِ', lemma: 'حَرْب', pos: 'noun', features: 'def.gen', gloss: 'the war' },
            { surface: 'الثَّانِيَةِ', lemma: 'ثَانِي', pos: 'adj', features: 'def.gen.f', gloss: 'the second' },
          ],
        },
        {
          id: 'qs-v7-c13-019',
          ar: 'فَالْعَالَمُ كُلُّهُ ظَلَامٌ فِي ظَلَامٍ إِلَّا مَنْ أَشْرَقَ لَهُ نُورٌ مِنْ رَبِّهِ.',
          en: 'So the whole world is darkness upon darkness, except for one on whom a light from his Lord has shone.',
          tokens: [
            { surface: 'فَالْعَالَمُ', lemma: 'عَالَم', pos: 'noun', features: 'conj+def.nom', gloss: 'so the world' },
            { surface: 'كُلُّهُ', lemma: 'كُلّ', pos: 'noun', features: 'nom+3ms', gloss: 'all of it' },
            { surface: 'ظَلَامٌ', lemma: 'ظَلاَم', pos: 'noun', features: 'indef.nom', gloss: 'darkness' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, upon' },
            { surface: 'ظَلَامٍ', lemma: 'ظَلاَم', pos: 'noun', features: 'indef.gen', gloss: 'darkness' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'whoever' },
            { surface: 'أَشْرَقَ', lemma: 'أَشْرَقَ', pos: 'verb', features: 'perf.3ms', gloss: 'has shone' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'نُورٌ', lemma: 'نُور', pos: 'noun', features: 'indef.nom', gloss: 'a light' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'رَبِّهِ', lemma: 'رَبّ', pos: 'noun', features: 'gen+3ms', gloss: 'his Lord' },
          ],
        },
        {
          // an-Nūr 24:40.
          id: 'qs-v7-c13-020',
          ar: '\u{FD3E}ظُلُمَـٰتٌۢ بَعْضُهَا فَوْقَ بَعْضٍ إِذَآ أَخْرَجَ يَدَهُۥ لَمْ يَكَدْ يَرَىٰهَا وَمَن لَّمْ يَجْعَلِ ٱللَّهُ لَهُۥ نُورًا فَمَا لَهُۥ مِن نُّورٍ\u{FD3F}.',
          en: '"Layers of darkness, one upon another: when he holds out his hand, he can hardly see it. And whoever Allah has not granted a light \u2014 he has no light at all."',
          tokens: [
            { surface: 'ظُلُمَـٰتٌۢ', lemma: 'ظُلْمَة', pos: 'noun', features: 'pl.indef.nom', root: 'ظ ل م', gloss: 'layers of darkness' },
            { surface: 'بَعْضُهَا', lemma: 'بَعْض', pos: 'noun', features: 'nom+3fs', gloss: 'some of it' },
            { surface: 'فَوْقَ', lemma: 'فَوْقَ', pos: 'prep', features: 'prep', gloss: 'above' },
            { surface: 'بَعْضٍ', lemma: 'بَعْض', pos: 'noun', features: 'indef.gen', gloss: 'some (other)' },
            { surface: 'إِذَآ', lemma: 'إِذَا', pos: 'part', features: 'part', gloss: 'when' },
            { surface: 'أَخْرَجَ', lemma: 'أَخْرَجَ', pos: 'verb', features: 'perf.3ms', gloss: 'to bring out; holds out' },
            { surface: 'يَدَهُۥ', lemma: 'يَد', pos: 'noun', features: 'acc+3ms', gloss: 'his hand' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَكَدْ', lemma: 'كَادَ', pos: 'verb', features: 'impf.3ms', root: 'ك و د', gloss: 'to nearly; can hardly' },
            { surface: 'يَرَىٰهَا', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms+3fs', gloss: 'to see; see it' },
            { surface: 'وَمَن', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and whoever' },
            { surface: 'لَّمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَجْعَلِ', lemma: 'جَعَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to make, grant' },
            { surface: 'ٱللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لَهُۥ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'نُورًا', lemma: 'نُور', pos: 'noun', features: 'indef.acc', gloss: 'a light' },
            { surface: 'فَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'then not' },
            { surface: 'لَهُۥ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'any' },
            { surface: 'نُّورٍ', lemma: 'نُور', pos: 'noun', features: 'indef.gen', gloss: 'light' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا يَفْعَلُ أُولُو الْأَمْرِ الَّذِينَ لَا يَخَافُونَ اللَّهَ حَسَبَ هَذَا النَّصِّ؟',
          options: ['يَخُونُونَ الْأَمَانَاتِ وَيَعْبَثُونَ بِأَمْوَالِ النَّاسِ وَدِمَائِهِمْ', 'يَحْفَظُونَ حُقُوقَ النَّاسِ بِأَمَانَةٍ', 'يَتْرُكُونَ الْحُكْمَ لِغَيْرِهِمْ'],
          answer: 0,
          qEn: 'What do those in authority who do not fear Allah do, according to this passage?',
          optionsEn: ['They betray trusts and tamper with people\u2019s wealth and blood', 'They faithfully preserve people\u2019s rights', 'They leave rule to others'],
        },
        {
          q: 'مَاذَا يَحْدُثُ لِمَنْ لَمْ يَجْعَلِ اللَّهُ لَهُ نُوراً حَسَبَ الآيَةِ؟',
          options: ['فَمَا لَهُ مِنْ نُورٍ', 'يَجِدُ نُوراً آخَرَ فِي طَرِيقِهِ', 'يَبْقَى فِي النُّورِ الْقَدِيمِ'],
          answer: 0,
          qEn: 'What happens to one for whom Allah has not made a light, according to the verse?',
          optionsEn: ['He has no light at all', 'He finds another light on his way', 'He remains in his old light'],
        },
      ],
    },
    {
      en: 'The prophet teaches people how to worship Allah, and likewise teaches them how to deal with one another. The prophet teaches people the manners of life along with the manners of religion \u2014 he teaches them the manners of eating, the manners of drinking, the manners of sleep, the manners of assembly, and the manners of everything. He teaches them these manners just as a compassionate father teaches his beloved sons. People are like small children: they need the upbringing of the prophets in their old age even more than they need the upbringing of their fathers in their youth. Those who have not received this prophetic upbringing, and have not learned manners from the prophets, are like the trees of the wilderness, sprouting and growing up on their own, so that one sees in them crookedness, thorns, and corruption.',
      sentences: [
        {
          id: 'qs-v7-c13-021',
          ar: 'وَالنَّبِيُّ يُعَلِّمُ النَّاسَ كَيْفَ يَعْبُدُونَ اللَّهَ،',
          en: 'The prophet teaches people how to worship Allah,',
          tokens: [
            { surface: 'وَالنَّبِيُّ', lemma: 'نَبِيّ', pos: 'noun', features: 'conj+def.nom', gloss: 'and the prophet' },
            { surface: 'يُعَلِّمُ', lemma: 'عَلَّمَ', pos: 'verb', features: 'impf.3ms', root: 'ع ل م', gloss: 'to teach' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'part', gloss: 'how' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to worship' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v7-c13-022',
          ar: 'وَكَذَلِكَ يُعَلِّمُهُمْ كَيْفَ يُعَامِلُ بَعْضُهُمْ بَعْضاً.',
          en: 'and likewise teaches them how they should deal with one another.',
          tokens: [
            { surface: 'وَكَذَلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'conj+adv', gloss: 'and likewise' },
            { surface: 'يُعَلِّمُهُمْ', lemma: 'عَلَّمَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to teach; teaches them' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'part', gloss: 'how' },
            { surface: 'يُعَامِلُ', lemma: 'عَامَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to deal with, treat' },
            { surface: 'بَعْضُهُمْ', lemma: 'بَعْض', pos: 'noun', features: 'nom+3mp', gloss: 'some of them' },
            { surface: 'بَعْضاً', lemma: 'بَعْض', pos: 'noun', features: 'indef.acc', gloss: 'some (other), one another' },
          ],
        },
        {
          id: 'qs-v7-c13-023',
          ar: 'وَالنَّبِيُّ يُعَلِّمُ النَّاسَ آدَابَ الْحَيَاةِ مَعَ آدَابِ الدِّينِ،',
          en: 'The prophet teaches people the manners of life along with the manners of religion,',
          tokens: [
            { surface: 'وَالنَّبِيُّ', lemma: 'نَبِيّ', pos: 'noun', features: 'conj+def.nom', gloss: 'and the prophet' },
            { surface: 'يُعَلِّمُ', lemma: 'عَلَّمَ', pos: 'verb', features: 'impf.3ms', gloss: 'teaches' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'آدَابَ', lemma: 'أَدَب', pos: 'noun', features: 'pl.acc.constr', root: 'ا د ب', gloss: 'the manners of' },
            { surface: 'الْحَيَاةِ', lemma: 'حَيَاة', pos: 'noun', features: 'def.gen', gloss: 'life' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'along with' },
            { surface: 'آدَابِ', lemma: 'أَدَب', pos: 'noun', features: 'pl.constr.gen', gloss: 'the manners of' },
            { surface: 'الدِّينِ', lemma: 'دِين', pos: 'noun', features: 'def.gen', gloss: 'religion' },
          ],
        },
        {
          id: 'qs-v7-c13-024',
          ar: 'وَيُعَلِّمُهُمْ آدَابَ الْأَكْلِ وَأَدَبَ الشُّرْبِ وَأَدَبَ النَّوْمِ وَأَدَبَ الْمَجْلِسِ وَأَدَبَ كُلِّ شَيْءٍ.',
          en: 'and teaches them the manners of eating, the manners of drinking, the manners of sleep, the manners of assembly, and the manners of everything.',
          tokens: [
            { surface: 'وَيُعَلِّمُهُمْ', lemma: 'عَلَّمَ', pos: 'verb', features: 'conj+impf.3ms+3mp', gloss: 'and teaches them' },
            { surface: 'آدَابَ', lemma: 'أَدَب', pos: 'noun', features: 'pl.acc.constr', gloss: 'the manners of' },
            { surface: 'الْأَكْلِ', lemma: 'أَكَلَ', pos: 'noun', features: 'def.gen', gloss: 'eating' },
            { surface: 'وَأَدَبَ', lemma: 'أَدَب', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the manners of' },
            { surface: 'الشُّرْبِ', lemma: 'شُرْب', pos: 'noun', features: 'def.gen', root: 'ش ر ب', gloss: 'drinking' },
            { surface: 'وَأَدَبَ', lemma: 'أَدَب', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the manners of' },
            { surface: 'النَّوْمِ', lemma: 'نَامَ', pos: 'noun', features: 'def.gen', gloss: 'sleep' },
            { surface: 'وَأَدَبَ', lemma: 'أَدَب', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the manners of' },
            { surface: 'الْمَجْلِسِ', lemma: 'مَجْلِس', pos: 'noun', features: 'def.gen', gloss: 'the assembly, sitting' },
            { surface: 'وَأَدَبَ', lemma: 'أَدَب', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the manners of' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
          ],
        },
        {
          id: 'qs-v7-c13-025',
          ar: 'وَيُعَلِّمُهُمُ الْآدَابَ كَمَا يُعَلِّمُ الْوَالِدُ الشَّفِيقُ أَبْنَاءَهُ الْأَعِزَّةَ.',
          en: 'He teaches them these manners just as a compassionate father teaches his beloved sons.',
          tokens: [
            { surface: 'وَيُعَلِّمُهُمُ', lemma: 'عَلَّمَ', pos: 'verb', features: 'conj+impf.3ms+3mp', gloss: 'and teaches them' },
            { surface: 'الْآدَابَ', lemma: 'أَدَب', pos: 'noun', features: 'pl.def.acc', gloss: 'the manners' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'part', features: 'part', gloss: 'just as' },
            { surface: 'يُعَلِّمُ', lemma: 'عَلَّمَ', pos: 'verb', features: 'impf.3ms', gloss: 'teaches' },
            { surface: 'الْوَالِدُ', lemma: 'وَالِد', pos: 'noun', features: 'def.nom', gloss: 'the father' },
            { surface: 'الشَّفِيقُ', lemma: 'شَفِيق', pos: 'adj', features: 'def.nom', gloss: 'the compassionate' },
            { surface: 'أَبْنَاءَهُ', lemma: 'اِبْن', pos: 'noun', features: 'pl.acc+3ms', gloss: 'his sons' },
            { surface: 'الْأَعِزَّةَ', lemma: 'عَزِيز', pos: 'adj', features: 'pl.def.acc', gloss: 'the dear, beloved' },
          ],
        },
        {
          id: 'qs-v7-c13-026',
          ar: 'وَالنَّاسُ كَالْأَطْفَالِ الصِّغَارِ يَحْتَاجُونَ فِي كِبَرِهِمْ إِلَى تَرْبِيَةِ الْأَنْبِيَاءِ أَكْثَرَ مِمَّا يَحْتَاجُونَ فِي صِغَرِهِمْ إِلَى تَرْبِيَةِ الْآبَاءِ.',
          en: 'People are like small children: they need the upbringing of the prophets in their old age even more than they need the upbringing of their fathers in their youth.',
          tokens: [
            { surface: 'وَالنَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'conj+def.nom', gloss: 'and the people' },
            { surface: 'كَالْأَطْفَالِ', lemma: 'طِفْل', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'like the children' },
            { surface: 'الصِّغَارِ', lemma: 'صَغِير', pos: 'adj', features: 'pl.def.gen', gloss: 'the small, young' },
            { surface: 'يَحْتَاجُونَ', lemma: 'اِحْتَاجَ', pos: 'verb', features: 'impf.3mp', gloss: 'to need' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كِبَرِهِمْ', lemma: 'كِبَر', pos: 'noun', features: 'gen+3mp', gloss: 'their old age' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'تَرْبِيَةِ', lemma: 'تَرْبِيَة', pos: 'noun', features: 'constr.gen', gloss: 'the upbringing of' },
            { surface: 'الْأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.def.gen', gloss: 'the prophets' },
            { surface: 'أَكْثَرَ', lemma: 'كَثِير', pos: 'adj', features: 'acc', gloss: 'more' },
            { surface: 'مِمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'than what' },
            { surface: 'يَحْتَاجُونَ', lemma: 'اِحْتَاجَ', pos: 'verb', features: 'impf.3mp', gloss: 'they need' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'صِغَرِهِمْ', lemma: 'صِغَر', pos: 'noun', features: 'gen+3mp', gloss: 'their youth' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'تَرْبِيَةِ', lemma: 'تَرْبِيَة', pos: 'noun', features: 'constr.gen', gloss: 'the upbringing of' },
            { surface: 'الْآبَاءِ', lemma: 'أَب', pos: 'noun', features: 'pl.def.gen', gloss: 'the fathers' },
          ],
        },
        {
          id: 'qs-v7-c13-027',
          ar: 'وَالَّذِينَ لَمْ يَتَلَقَّوْا هَذِهِ التَّرْبِيَةَ النَّبَوِيَّةَ وَلَمْ يَتَعَلَّمُوا الْآدَابَ مِنَ الْأَنْبِيَاءِ كَأَشْجَارِ الْبَرِّيَّةِ،',
          en: 'Those who have not received this prophetic upbringing, and have not learned manners from the prophets, are like the trees of the wilderness,',
          tokens: [
            { surface: 'وَالَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'conj+rel.pl', gloss: 'and those who' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَتَلَقَّوْا', lemma: 'تَلَقَّى', pos: 'verb', features: 'impf.3mp', root: 'ل ق ي', gloss: 'to receive' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'التَّرْبِيَةَ', lemma: 'تَرْبِيَة', pos: 'noun', features: 'def.acc', gloss: 'the upbringing' },
            { surface: 'النَّبَوِيَّةَ', lemma: 'نَبَوِيّ', pos: 'adj', features: 'def.acc.f', root: 'ن ب أ', gloss: 'prophetic' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَتَعَلَّمُوا', lemma: 'تَعَلَّمَ', pos: 'verb', features: 'impf.3mp', gloss: 'to learn' },
            { surface: 'الْآدَابَ', lemma: 'أَدَب', pos: 'noun', features: 'pl.def.acc', gloss: 'the manners' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.def.gen', gloss: 'the prophets' },
            { surface: 'كَأَشْجَارِ', lemma: 'شَجَرَة', pos: 'noun', features: 'prep+pl.constr.gen', gloss: 'are like the trees of' },
            { surface: 'الْبَرِّيَّةِ', lemma: 'بَرِّيَّة', pos: 'noun', features: 'def.gen', gloss: 'the wilderness' },
          ],
        },
        {
          id: 'qs-v7-c13-028',
          ar: 'نَبَتَتْ وَنَشَأَتْ بِنَفْسِهَا فَيُرَى فِيهَا عِوَجاً وَشَوْكاً وَفَسَاداً.',
          en: 'sprouting and growing up on their own, so that one sees in them crookedness, thorns, and corruption.',
          tokens: [
            { surface: 'نَبَتَتْ', lemma: 'نَبَتَ', pos: 'verb', features: 'perf.3fs', gloss: 'to sprout; sprouted' },
            { surface: 'وَنَشَأَتْ', lemma: 'نَشَأَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to grow up; and grew up' },
            { surface: 'بِنَفْسِهَا', lemma: 'نَفْس', pos: 'noun', features: 'prep+gen+3fs', gloss: 'by itself' },
            { surface: 'فَيُرَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+pass+impf.3ms', gloss: 'to see; so is seen' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in them' },
            { surface: 'عِوَجاً', lemma: 'عِوَج', pos: 'noun', features: 'indef.acc', root: 'ع و ج', gloss: 'crookedness' },
            { surface: 'وَشَوْكاً', lemma: 'شَوْك', pos: 'noun', features: 'conj+indef.acc', root: 'ش و ك', gloss: 'and thorns' },
            { surface: 'وَفَسَاداً', lemma: 'فَسَاد', pos: 'noun', features: 'conj+indef.acc', gloss: 'and corruption' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا يُعَلِّمُ النَّبِيُّ النَّاسَ غَيْرَ الْعِبَادَةِ؟',
          options: ['آدَابَ الْحَيَاةِ وَآدَابَ الدِّينِ، وَآدَابَ الْأَكْلِ وَالشُّرْبِ وَالنَّوْمِ وَالْمَجْلِسِ', 'فَقَطِ اللُّغَةَ الْعَرَبِيَّةَ', 'صِنَاعَةَ الْأَسْلِحَةِ'],
          answer: 0,
          qEn: 'What does the prophet teach people besides worship?',
          optionsEn: ['The manners of life and religion \u2014 of eating, drinking, sleep, and assembly', 'Only the Arabic language', 'The manufacture of weapons'],
        },
        {
          q: 'بِمَاذَا شُبِّهَ الَّذِينَ لَمْ يَتَلَقَّوْا تَرْبِيَةَ الْأَنْبِيَاءِ؟',
          options: ['بِأَشْجَارِ الْبَرِّيَّةِ الَّتِي تَنْبُتُ بِنَفْسِهَا فَيَظْهَرُ فِيهَا عِوَجٌ وَشَوْكٌ', 'بِالنُّجُومِ اللَّامِعَةِ', 'بِالْأَنْهَارِ الصَّافِيَةِ'],
          answer: 0,
          qEn: 'What were those who have not received the upbringing of the prophets compared to?',
          optionsEn: ['To wild trees of the wilderness that grow on their own, showing crookedness and thorns', 'To shining stars', 'To clear rivers'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَالْعَقَائِدُ بِغَيْرِ هَذَا النُّورِ',
        post: 'وَخُرَافَاتٌ.',
        en: 'Creeds without this light are illusions and superstitions.',
        options: ['أَوْهَامٌ', 'أَوْهَامًا', 'أَوْهَامٍ', 'وَهْمٌ'],
        answer: 0,
        rationales: [
          'Nominative, indefinite -- predicate of the nominal sentence, matching the taught pattern.',
          'Accusative -- wrong case; a bare nominal predicate takes the nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Singular -- wrong number; the plural is meant, to match وَخُرَافَاتٌ.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَالْعِلْمُ',
        post: 'وَظَنٌّ وَتَخْمِينٌ وَشَكٌّ.',
        en: 'And knowledge becomes ignorance, conjecture, guesswork, and doubt.',
        options: ['جَهْلٌ', 'جَهْلاً', 'جَهْلٍ', 'جَاهِلٌ'],
        answer: 0,
        rationales: [
          'Nominative, indefinite -- predicate, matching the taught pattern.',
          'Accusative -- wrong case; the predicate here takes the nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          "'Ignorant one' -- wrong word; the abstract noun (ignorance) is meant, not the participle.",
        ],
      },
      {
        type: 'cloze',
        pre: 'وَالْأَخْلَاقُ',
        post: 'وَإِفْرَاطٌ وَتَقْصِيرٌ وَإِسْرَافٌ.',
        en: 'And morals become negligence, excess, shortcoming, and extravagance.',
        options: ['تَفْرِيطٌ', 'تَفْرِيطاً', 'تَفْرِيطٍ', 'تَفْرِيطُ'],
        answer: 0,
        rationales: [
          'Nominative, indefinite -- predicate, matching the taught pattern.',
          'Accusative -- wrong case; the predicate here takes the nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Nominative but construct/definite form -- wrong state; the predicate should be indefinite.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'رَأَيْتُمُ الَّذِينَ لَا يَتَّبِعُونَ الْأَنْبِيَاءَ',
        pre: '',
        post: 'الَّذِينَ لَا يَتَّبِعُونَ الْأَنْبِيَاءَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['رَأَيْتُ', 'رَأَيْتُمْ', 'رَأَى', 'رَأَيْنَا'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '2nd masculine plural -- you all, the form already given.',
          '3rd masculine singular -- he.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'رَأَيْتُمُ الَّذِينَ لَا يَتَّبِعُونَ الْأَنْبِيَاءَ',
        pre: '',
        post: 'الَّذِينَ لَا يَتَّبِعُونَ الْأَنْبِيَاءَ',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['رَأَى', 'رَأَيْتُمْ', 'رَأَيْتُ', 'رَأَيْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches هُوَ.',
          '2nd masculine plural -- you all, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'رَأَيْتُمُ الَّذِينَ لَا يَتَّبِعُونَ الْأَنْبِيَاءَ',
        pre: '',
        post: 'الَّذِينَ لَا يَتَّبِعُونَ الْأَنْبِيَاءَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['رَأَوْا', 'رَأَيْتُمْ', 'رَأَتْ', 'رَأَيْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '2nd masculine plural -- you all, the form already given.',
          '3rd feminine singular -- she.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

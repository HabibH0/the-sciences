// قَصَصُ النَّبِيِّينَ, volume 8 «قِصَّةُ سَيِّدِنَا شُعَيْبٍ», chapter 2 --
// قِصَّةُ صِرَاعٍ بَيْنَ الْحَقِّ وَالْبَاطِلِ. Printed pages 213 (bottom, right
// after ch1) through 214 (full page, ending with a divider), plus a short
// bridging paragraph on page 215 that runs after the volume's own title
// graphic «قِصَّةُ سَيِّدِنَا شُعَيْبٍ» but before chapter 3's heading box.
// Transcribed by hand from the scan (vision OCR, 200-600dpi renders) against
// ../CHAPTER-FORMAT.md.
//
// The author's own essay on why the Qurʾān tells exactly the prophets'
// stories it tells: every one is a struggle between truth and falsehood,
// knowledge and ignorance, light and darkness, certainty and guesswork --
// sealed with Sūrat Yūsuf 12:111 in full. The final paragraph (still this
// chapter, printed after the volume-title graphic per index.js's header
// comment) is a one-line caveat that the Qurʾān holds still other stories
// beyond the ones this book covers.
//
// Grammar / lexical notes:
//   -- The printed sentence runs long and is split at each comma/colon
//      boundary into shorter entries, same house convention as ch1 and
//      qasas-v3/chapter-16.js.
//   -- qs-v8-c02-007 (وَبَيْنَ الْجَزْمِ وَالْيَقِينِ وَالظَّنِّ وَالتَّخْمِينِ) keeps
//      its internal comma inside one entry: بَيْنَ governs a *pair* of paired
//      nouns here (X-and-Y contrasted with A-and-B), not four coordinate
//      terms, so splitting at the comma would break the intended contrast.
//   -- The Sūrat Yūsuf 12:111 quote (qs-v8-c02-015 through -019) is split
//      into five ﴿﴾-wrapped fragments and annotated with full tokens exactly
//      like ordinary narration, per the house convention already
//      established in qasas-v3/chapter-16.js -- see index.js's header
//      comment for why this supersedes the older "keep Qurʾān quotes short"
//      idea in QASAS_AGENT_BRIEF.md.
//   -- أُولُو (qs-v8-c02-015, "possessors of") is a defective plural-only
//      noun that never appears outside a construct chain and only inflects
//      nom (أُولُو) vs. acc/gen (أُولِي) -- tagged pl.gen.constr here since it
//      is genitive, governed by لِ and construct with الأَلْبَابِ.
//   -- يَدَيْهِ (qs-v8-c02-017) is the idiom بَيْنَ يَدَيْهِ "before it, preceding
//      it" (lit. "between its two hands") -- tokenized on the ordinary
//      lemma يَد rather than a separate idiom entry, per the corpus's usual
//      practice of keeping idioms on their literal head lemma.
//   -- لَقَدْ (qs-v8-c02-015) reuses the already-taught fused-emphatic-لَ +
//      قَدْ pattern (qasas-v2 ch20/ch22), tagged lemma قَدْ, features
//      'part+part'.
//   -- لَكِنْ (qs-v8-c02-017, light, ungoverning "but") is already taught
//      and is NOT the same lemma as the heavy governing لَكِنَّ -- both are
//      tagged on their own printed spelling, matching the corpus's existing
//      practice of never merging two distinct printed particles into one
//      lemma.
//   -- جَهْل and ظَلَام are tagged new despite both سببه appearing as a proper
//      noun ("Jahl") and an unrelated gloss respectively in unrelated
//      contexts elsewhere in the corpus -- neither prior appearance is this
//      chapter's ordinary-noun sense, so both are re-declared as their own
//      lemma senses here.
//   -- هُدًى (qs-v8-c02-019, "guidance," a noun) is a distinct lemma from
//      the already-taught verb هَدَى "to guide" -- same root ه د ي, two
//      separate parts of speech, matching the corpus's noun-vs-verb
//      same-root convention used throughout.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): حَقّ، عِلْم، نُور، ظَنّ،
//      ضَعِيف، قَوِيّ، قَلِيل، كَثِير، حِكْمَة، مَوْعِظَة، صَدَقَ، عَظِيم، اللَّه، حَدِيث،
//      تَصْدِيق، الَّذِي، يَد، رَحْمَة، قَوْم، آمَنَ، لَيْسَ، مَا، حَكَى، لَكُمْ (لِ)، مِنْ،
//      قِصَّة، نَبِيّ، قُرْآن، فِي، غَيْر، هَذِهِ، ثُمَّ، إِنَّ، كَانَ، لَا are all already
//      taught and are NOT re-listed in newWords here.
//
// 19 new words (غَرَابَة، شَائِق، مُثِير، صِرَاع، بَاطِل، جَهْل، ظَلَام، إِنْسَانِيَّة،
// وَحْشِيَّة، جَزْم، يَقِين، تَخْمِين، انْتِصَار، ذِكْرَى، عِبْرَة، أُولُو، لُبّ، اِفْتَرَى،
// هُدًى).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch2',
  title: { ar: 'قِصَّةُ صِرَاعٍ بَيْنَ الْحَقِّ وَالْبَاطِلِ', en: 'A Story of Struggle Between Truth and Falsehood' },
  newWords: ['غَرَابَة', 'شَائِق', 'مُثِير', 'صِرَاع', 'بَاطِل', 'جَهْل', 'ظَلَام', 'إِنْسَانِيَّة', 'وَحْشِيَّة', 'جَزْم', 'يَقِين', 'تَخْمِين', 'انْتِصَار', 'ذِكْرَى', 'عِبْرَة', 'أُولُو', 'لُبّ', 'اِفْتَرَى', 'هُدًى'],
  lemmas: {
    غَرَابَة: { gloss: 'strangeness, wonder' },
    شَائِق: { gloss: 'captivating, engaging' },
    مُثِير: { gloss: 'exciting, stirring' },
    صِرَاع: { gloss: 'struggle, conflict' },
    بَاطِل: { gloss: 'falsehood' },
    جَهْل: { gloss: 'ignorance' },
    ظَلَام: { gloss: 'darkness' },
    إِنْسَانِيَّة: { gloss: 'humanity' },
    وَحْشِيَّة: { gloss: 'savagery, wildness' },
    جَزْم: { gloss: 'certainty, decisiveness' },
    يَقِين: { gloss: 'conviction, sure knowledge' },
    تَخْمِين: { gloss: 'guesswork, conjecture' },
    انْتِصَار: { gloss: 'triumph, victory' },
    ذِكْرَى: { gloss: 'reminder, remembrance' },
    عِبْرَة: { gloss: 'a lesson, a moral' },
    أُولُو: { gloss: 'possessors of' },
    لُبّ: { gloss: 'mind, intellect, core' },
    اِفْتَرَى: { gloss: 'to invent, fabricate (a lie)' },
    هُدًى: { gloss: 'guidance' },
  },
  paragraphs: [
    {
      en: 'And no wonder; for indeed they are captivating, exciting stories, and indeed it is a story of struggle between truth and falsehood, between knowledge and ignorance, between light and darkness, between humanity and savagery, and between certainty and conviction, and conjecture and guesswork. Then it is a story of the triumph of truth over falsehood, of knowledge over ignorance, of the weak over the strong, of the few over the many -- a story containing knowledge and wisdom, admonition and remembrance. And Allah the Almighty has spoken truly: "There was indeed a lesson in their stories for people of understanding. It was not a narration invented, but a confirmation of what came before it, a detailing of everything, and a guidance and mercy for a people who believe."',
      sentences: [
        {
          id: 'qs-v8-c02-001',
          ar: 'وَلَا غَرَابَةَ؛',
          en: 'And no wonder;',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and no' },
            { surface: 'غَرَابَةَ', lemma: 'غَرَابَة', pos: 'noun', features: 'acc', root: 'غ ر ب', gloss: 'wonder, strangeness' },
          ],
        },
        {
          id: 'qs-v8-c02-002',
          ar: 'فَإِنَّهَا قِصَصٌ شَائِقَةٌ مُثِيرَةٌ،',
          en: 'for indeed they are captivating, exciting stories,',
          tokens: [
            { surface: 'فَإِنَّهَا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+3fs', gloss: 'for indeed it' },
            { surface: 'قِصَصٌ', lemma: 'قِصَّة', pos: 'noun', features: 'pl.indef.nom', gloss: 'stories' },
            { surface: 'شَائِقَةٌ', lemma: 'شَائِق', pos: 'adj', features: 'indef.nom.f', root: 'ش و ق', gloss: 'captivating' },
            { surface: 'مُثِيرَةٌ', lemma: 'مُثِير', pos: 'adj', features: 'indef.nom.f', root: 'ث و ر', gloss: 'exciting, stirring' },
          ],
        },
        {
          id: 'qs-v8-c02-003',
          ar: 'وَإِنَّهَا قِصَّةُ صِرَاعٍ بَيْنَ الْحَقِّ وَالْبَاطِلِ،',
          en: 'and indeed it is a story of struggle between truth and falsehood,',
          tokens: [
            { surface: 'وَإِنَّهَا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+3fs', gloss: 'and indeed it' },
            { surface: 'قِصَّةُ', lemma: 'قِصَّة', pos: 'noun', features: 'nom.constr', gloss: 'a story of' },
            { surface: 'صِرَاعٍ', lemma: 'صِرَاع', pos: 'noun', features: 'indef.gen', root: 'ص ر ع', gloss: 'struggle' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', root: 'ب ي ن', gloss: 'between' },
            { surface: 'الْحَقِّ', lemma: 'حَقّ', pos: 'noun', features: 'def.gen', gloss: 'the truth' },
            { surface: 'وَالْبَاطِلِ', lemma: 'بَاطِل', pos: 'noun', features: 'conj+def.gen', root: 'ب ط ل', gloss: 'and the falsehood' },
          ],
        },
        {
          id: 'qs-v8-c02-004',
          ar: 'وَبَيْنَ الْعِلْمِ وَالْجَهْلِ،',
          en: 'between knowledge and ignorance,',
          tokens: [
            { surface: 'وَبَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'conj+prep', gloss: 'and between' },
            { surface: 'الْعِلْمِ', lemma: 'عِلْم', pos: 'noun', features: 'def.gen', gloss: 'the knowledge' },
            { surface: 'وَالْجَهْلِ', lemma: 'جَهْل', pos: 'noun', features: 'conj+def.gen', root: 'ج ه ل', gloss: 'and the ignorance' },
          ],
        },
        {
          id: 'qs-v8-c02-005',
          ar: 'وَبَيْنَ النُّورِ وَالظَّلَامِ،',
          en: 'between light and darkness,',
          tokens: [
            { surface: 'وَبَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'conj+prep', gloss: 'and between' },
            { surface: 'النُّورِ', lemma: 'نُور', pos: 'noun', features: 'def.gen', gloss: 'the light' },
            { surface: 'وَالظَّلَامِ', lemma: 'ظَلَام', pos: 'noun', features: 'conj+def.gen', root: 'ظ ل م', gloss: 'and the darkness' },
          ],
        },
        {
          id: 'qs-v8-c02-006',
          ar: 'وَبَيْنَ الإِنْسَانِيَّةِ وَالْوَحْشِيَّةِ،',
          en: 'between humanity and savagery,',
          tokens: [
            { surface: 'وَبَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'conj+prep', gloss: 'and between' },
            { surface: 'الإِنْسَانِيَّةِ', lemma: 'إِنْسَانِيَّة', pos: 'noun', features: 'def.gen', root: 'أ ن س', gloss: 'the humanity' },
            { surface: 'وَالْوَحْشِيَّةِ', lemma: 'وَحْشِيَّة', pos: 'noun', features: 'conj+def.gen', root: 'و ح ش', gloss: 'and the savagery' },
          ],
        },
        {
          id: 'qs-v8-c02-007',
          ar: 'وَبَيْنَ الْجَزْمِ وَالْيَقِينِ وَالظَّنِّ وَالتَّخْمِينِ.',
          en: 'and between certainty and conviction, and conjecture and guesswork.',
          tokens: [
            { surface: 'وَبَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'conj+prep', gloss: 'and between' },
            { surface: 'الْجَزْمِ', lemma: 'جَزْم', pos: 'noun', features: 'def.gen', root: 'ج ز م', gloss: 'the certainty' },
            { surface: 'وَالْيَقِينِ', lemma: 'يَقِين', pos: 'noun', features: 'conj+def.gen', root: 'ي ق ن', gloss: 'and the conviction' },
            { surface: 'وَالظَّنِّ', lemma: 'ظَنّ', pos: 'noun', features: 'conj+def.gen', gloss: 'and the conjecture' },
            { surface: 'وَالتَّخْمِينِ', lemma: 'تَخْمِين', pos: 'noun', features: 'conj+def.gen', root: 'خ م ن', gloss: 'and the guesswork' },
          ],
        },
        {
          id: 'qs-v8-c02-008',
          ar: 'ثُمَّ إِنَّهَا قِصَّةُ انْتِصَارٍ لِلْحَقِّ عَلَى الْبَاطِلِ،',
          en: 'Then it is a story of the triumph of truth over falsehood,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'إِنَّهَا', lemma: 'إِنَّ', pos: 'part', features: 'part+3fs', gloss: 'indeed it' },
            { surface: 'قِصَّةُ', lemma: 'قِصَّة', pos: 'noun', features: 'nom.constr', gloss: 'a story of' },
            { surface: 'انْتِصَارٍ', lemma: 'انْتِصَار', pos: 'noun', features: 'indef.gen', root: 'ن ص ر', gloss: 'triumph' },
            { surface: 'لِلْحَقِّ', lemma: 'حَقّ', pos: 'noun', features: 'prep+def.gen', gloss: 'for the truth' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'الْبَاطِلِ', lemma: 'بَاطِل', pos: 'noun', features: 'def.gen', gloss: 'the falsehood' },
          ],
        },
        {
          id: 'qs-v8-c02-009',
          ar: 'وَالْعِلْمِ عَلَى الْجَهْلِ،',
          en: 'of knowledge over ignorance,',
          tokens: [
            { surface: 'وَالْعِلْمِ', lemma: 'عِلْم', pos: 'noun', features: 'conj+def.gen', gloss: 'and the knowledge' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'الْجَهْلِ', lemma: 'جَهْل', pos: 'noun', features: 'def.gen', gloss: 'the ignorance' },
          ],
        },
        {
          id: 'qs-v8-c02-010',
          ar: 'وَالضَّعِيفِ عَلَى الْقَوِيِّ،',
          en: 'of the weak over the strong,',
          tokens: [
            { surface: 'وَالضَّعِيفِ', lemma: 'ضَعِيف', pos: 'adj', features: 'conj+def.gen', gloss: 'and the weak' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'الْقَوِيِّ', lemma: 'قَوِيّ', pos: 'adj', features: 'def.gen', gloss: 'the strong' },
          ],
        },
        {
          id: 'qs-v8-c02-011',
          ar: 'وَالْقَلِيلِ عَلَى الْكَثِيرِ،',
          en: 'of the few over the many,',
          tokens: [
            { surface: 'وَالْقَلِيلِ', lemma: 'قَلِيل', pos: 'noun', features: 'conj+def.gen', gloss: 'and the few' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'الْكَثِيرِ', lemma: 'كَثِير', pos: 'adj', features: 'def.gen', gloss: 'the many' },
          ],
        },
        {
          id: 'qs-v8-c02-012',
          ar: 'قِصَّةٌ فِيهَا عِلْمٌ وَحِكْمَةٌ،',
          en: 'a story containing knowledge and wisdom,',
          tokens: [
            { surface: 'قِصَّةٌ', lemma: 'قِصَّة', pos: 'noun', features: 'indef.nom', gloss: 'a story' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'عِلْمٌ', lemma: 'عِلْم', pos: 'noun', features: 'indef.nom', gloss: 'knowledge' },
            { surface: 'وَحِكْمَةٌ', lemma: 'حِكْمَة', pos: 'noun', features: 'conj+indef.nom', gloss: 'and wisdom' },
          ],
        },
        {
          id: 'qs-v8-c02-013',
          ar: 'وَمَوْعِظَةٌ وَذِكْرَى،',
          en: 'and admonition and remembrance,',
          tokens: [
            { surface: 'وَمَوْعِظَةٌ', lemma: 'مَوْعِظَة', pos: 'noun', features: 'conj+indef.nom', gloss: 'and admonition' },
            { surface: 'وَذِكْرَى', lemma: 'ذِكْرَى', pos: 'noun', features: 'conj+indef.nom', root: 'ذ ك ر', gloss: 'and remembrance' },
          ],
        },
        {
          id: 'qs-v8-c02-014',
          ar: 'وَصَدَقَ اللَّهُ الْعَظِيمُ:',
          en: 'And Allah the Almighty has spoken truly:',
          tokens: [
            { surface: 'وَصَدَقَ', lemma: 'صَدَقَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to speak truly; and has spoken truly' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'الْعَظِيمُ', lemma: 'عَظِيم', pos: 'adj', features: 'def.nom', gloss: 'the Almighty' },
          ],
        },
        {
          id: 'qs-v8-c02-015',
          ar: '﴿لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِأُولِي الأَلْبَابِ﴾',
          en: '"There was indeed a lesson in their stories for people of understanding.',
          tokens: [
            { surface: 'لَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'part+part', gloss: 'indeed' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be, exist; there was' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'قَصَصِهِمْ', lemma: 'قِصَّة', pos: 'noun', features: 'pl.gen+3mp', gloss: 'their stories' },
            { surface: 'عِبْرَةٌ', lemma: 'عِبْرَة', pos: 'noun', features: 'indef.nom', root: 'ع ب ر', gloss: 'a lesson' },
            { surface: 'لِأُولِي', lemma: 'أُولُو', pos: 'noun', features: 'prep+pl.gen.constr', root: 'أ و ل', gloss: 'for the possessors of' },
            { surface: 'الأَلْبَابِ', lemma: 'لُبّ', pos: 'noun', features: 'pl.def.gen', root: 'ل ب ب', gloss: 'the minds, intellects' },
          ],
        },
        {
          id: 'qs-v8-c02-016',
          ar: '﴿مَا كَانَ حَدِيثاً يُفْتَرَى﴾',
          en: 'It was not a narration invented,',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; it was' },
            { surface: 'حَدِيثاً', lemma: 'حَدِيث', pos: 'noun', features: 'indef.acc', gloss: 'a narration' },
            { surface: 'يُفْتَرَى', lemma: 'اِفْتَرَى', pos: 'verb', features: 'pass+impf.3ms', root: 'ف ر ي', gloss: 'to invent, fabricate; being invented' },
          ],
        },
        {
          id: 'qs-v8-c02-017',
          ar: '﴿وَلَكِنْ تَصْدِيقَ الَّذِي بَيْنَ يَدَيْهِ﴾',
          en: 'but a confirmation of what came before it,',
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'تَصْدِيقَ', lemma: 'تَصْدِيق', pos: 'noun', features: 'acc.constr', gloss: 'a confirmation of' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'that which' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'before, preceding' },
            { surface: 'يَدَيْهِ', lemma: 'يَد', pos: 'noun', features: 'du.gen+3ms', gloss: 'its two hands (idiom: before it)' },
          ],
        },
        {
          id: 'qs-v8-c02-018',
          ar: '﴿وَتَفْصِيلَ كُلِّ شَيْءٍ﴾',
          en: 'a detailing of everything,',
          tokens: [
            { surface: 'وَتَفْصِيلَ', lemma: 'تَفْصِيل', pos: 'noun', features: 'conj+acc.constr', gloss: 'and a detailing of' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
          ],
        },
        {
          id: 'qs-v8-c02-019',
          ar: '﴿وَهُدًى وَرَحْمَةً لِقَوْمٍ يُؤْمِنُونَ﴾.',
          en: 'and a guidance and mercy for a people who believe."',
          tokens: [
            { surface: 'وَهُدًى', lemma: 'هُدًى', pos: 'noun', features: 'conj+indef.acc', root: 'ه د ي', gloss: 'and guidance' },
            { surface: 'وَرَحْمَةً', lemma: 'رَحْمَة', pos: 'noun', features: 'conj+indef.acc', gloss: 'and mercy' },
            { surface: 'لِقَوْمٍ', lemma: 'قَوْم', pos: 'noun', features: 'prep+indef.gen', gloss: 'for a people' },
            { surface: 'يُؤْمِنُونَ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.3mp', gloss: 'to believe; who believe' },
          ],
        },
      ],
      checks: [
        {
          q: 'بَيْنَ أَيِّ الأَشْيَاءِ يَصِفُ الْكَاتِبُ هَذِهِ الْقَصَصَ بِأَنَّهَا صِرَاعٌ؟',
          options: ['بَيْنَ الْحَقِّ وَالْبَاطِلِ، وَالْعِلْمِ وَالْجَهْلِ، وَالنُّورِ وَالظَّلَامِ', 'بَيْنَ الْأَغْنِيَاءِ وَالْفُقَرَاءِ فَقَطْ', 'بَيْنَ الْمَاضِي وَالْمُسْتَقْبَلِ'],
          answer: 0,
          qEn: 'Between which things does the author describe these stories as a struggle?',
          optionsEn: ['Between truth and falsehood, knowledge and ignorance, light and darkness', 'Between the rich and the poor only', 'Between the past and the future'],
        },
        {
          q: 'مَاذَا قَالَ اللَّهُ عَنْ هَذِهِ الْقَصَصِ فِي الآيَةِ الَّتِي ذَكَرَهَا الْكَاتِبُ؟',
          options: ['إِنَّ فِيهَا عِبْرَةً لِأُولِي الأَلْبَابِ وَهُدًى وَرَحْمَةً لِقَوْمٍ يُؤْمِنُونَ', 'إِنَّهَا قِصَصٌ مُخْتَرَعَةٌ لِلتَّسْلِيَةِ فَقَطْ', 'إِنَّهَا لَا تَنْفَعُ أَحَداً'],
          answer: 0,
          qEn: 'What did Allah say about these stories in the verse the author quotes?',
          optionsEn: ['That there is a lesson in them for people of understanding, and guidance and mercy for a people who believe', 'That they are invented purely for entertainment', 'That they benefit no one'],
        },
      ],
    },
    {
      en: "And what we have narrated to you of the prophets' stories is not all that Allah narrated in the Qur'an of their stories and accounts, for in the Qur'an there are stories other than these stories.",
      sentences: [
        {
          id: 'qs-v8-c02-020',
          ar: 'وَلَيْسَ مَا حَكَيْنَاهُ لَكُمْ مِنْ قَصَصِ النَّبِيِّينَ،',
          en: 'And what we have narrated to you of the prophets\' stories is not',
          tokens: [
            { surface: 'وَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to not be; and is not' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'حَكَيْنَاهُ', lemma: 'حَكَى', pos: 'verb', features: 'perf.1p+3ms', gloss: 'to narrate; we narrated it' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'to you' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'قَصَصِ', lemma: 'قِصَّة', pos: 'noun', features: 'pl.gen.constr', gloss: 'the stories of' },
            { surface: 'النَّبِيِّينَ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.def.gen', gloss: 'the prophets' },
          ],
        },
        {
          id: 'qs-v8-c02-021',
          ar: 'هُوَ كُلُّ مَا حَكَاهُ اللَّهُ فِي الْقُرْآنِ مِنْ قَصَصِهِمْ وَحِكَايَاتِهِمْ،',
          en: "all that Allah narrated in the Qur'an of their stories and accounts,",
          tokens: [
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'it' },
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'nom.constr', gloss: 'all of' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'حَكَاهُ', lemma: 'حَكَى', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to narrate; narrated it' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْقُرْآنِ', lemma: 'قُرْآن', pos: 'noun', features: 'def.gen', gloss: 'the Qur\'an' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'قَصَصِهِمْ', lemma: 'قِصَّة', pos: 'noun', features: 'pl.gen+3mp', gloss: 'their stories' },
            { surface: 'وَحِكَايَاتِهِمْ', lemma: 'حِكَايَة', pos: 'noun', features: 'conj+pl.gen+3mp', root: 'ح ك ي', gloss: 'and their accounts' },
          ],
        },
        {
          id: 'qs-v8-c02-022',
          ar: 'فَفِي الْقُرْآنِ قَصَصٌ غَيْرُ هَذِهِ الْقَصَصِ.',
          en: 'for in the Qur\'an there are stories other than these stories.',
          tokens: [
            { surface: 'فَفِي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'for in' },
            { surface: 'الْقُرْآنِ', lemma: 'قُرْآن', pos: 'noun', features: 'def.gen', gloss: 'the Qur\'an' },
            { surface: 'قَصَصٌ', lemma: 'قِصَّة', pos: 'noun', features: 'pl.indef.nom', gloss: 'stories' },
            { surface: 'غَيْرُ', lemma: 'غَيْر', pos: 'noun', features: 'nom.constr', gloss: 'other than' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'الْقَصَصِ', lemma: 'قِصَّة', pos: 'noun', features: 'pl.def.gen', gloss: 'the stories' },
          ],
        },
      ],
      checks: [
        {
          q: 'هَلْ كُلُّ قَصَصِ الأَنْبِيَاءِ فِي الْقُرْآنِ مَذْكُورَةٌ فِي هَذَا الْكِتَابِ؟',
          options: ['لَا، فَفِي الْقُرْآنِ قَصَصٌ غَيْرُ هَذِهِ الْقَصَصِ', 'نَعَمْ، كُلُّ قَصَصِ الْقُرْآنِ مَذْكُورَةٌ هُنَا', 'لَمْ يُجِبِ الْكَاتِبُ عَنْ ذَلِكَ'],
          answer: 0,
          qEn: "Are all the prophets' stories in the Qur'an mentioned in this book?",
          optionsEn: ["No -- the Qur'an holds still other stories beyond these", "Yes, every story in the Qur'an is mentioned here", 'The author did not answer this'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَإِنَّهَا قِصَّةُ صِرَاعٍ بَيْنَ الْحَقِّ وَ',
        post: '،',
        en: 'and indeed it is a story of struggle between truth and falsehood,',
        options: ['الْبَاطِلِ', 'الْبَاطِلَ', 'الْبَاطِلُ', 'بَاطِلٍ'],
        answer: 0,
        rationales: [
          'Definite genitive -- the second term of بَيْنَ...وَ, matching الْحَقِّ.',
          'Accusative -- wrong case; بَيْنَ governs the genitive.',
          'Nominative -- wrong case; بَيْنَ governs the genitive.',
          'Indefinite -- wrong; the parallel term الْحَقِّ is definite.',
        ],
      },
      {
        type: 'cloze',
        pre: 'لَقَدْ كَانَ فِي قَصَصِهِمْ',
        post: 'لِأُولِي الأَلْبَابِ.',
        en: 'There was indeed a lesson in their stories for people of understanding.',
        options: ['عِبْرَةٌ', 'عِبْرَةً', 'عِبْرَةٍ', 'عِبْرَةُ'],
        answer: 0,
        rationales: [
          'Indefinite nominative -- the subject of كَانَ used as "there was" (كَانَ التَّامَّة).',
          'Accusative -- wrong case; this كَانَ is not the predicate-taking kind here.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Definite -- wrong; the sentence introduces "a lesson," not "the lesson."',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَصَدَقَ',
        post: 'الْعَظِيمُ.',
        en: 'And Allah the Almighty has spoken truly.',
        options: ['اللَّهُ', 'اللَّهَ', 'اللَّهِ', 'إِلَه'],
        answer: 0,
        rationales: [
          'Nominative -- the subject of صَدَقَ.',
          'Accusative -- wrong case; a verb\'s subject is nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          '"a god" (indefinite, common noun) -- wrong word; the proper name اللَّه is meant.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'حَكَى الرَّجُلُ الْقِصَّةَ',
        pre: '',
        post: 'الْقِصَّةَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['حَكَيْنَا', 'حَكَى', 'حَكَيْتُ', 'حَكَيْتُمْ'],
        answer: 0,
        rationales: [
          '1st plural perfect -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '1st singular -- wrong number; the target is "we," not "I."',
          '2nd masculine plural -- wrong person; the target is "we," not "you all."',
        ],
      },
      {
        type: 'shift',
        base: 'حَكَى الرَّجُلُ الْقِصَّةَ',
        pre: '',
        post: 'الْقِصَّةَ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.s.)',
        options: ['حَكَيْتَ', 'حَكَى', 'حَكَيْنَا', 'حَكَيْنَ'],
        answer: 0,
        rationales: [
          '2nd masculine singular perfect -- matches أَنْتَ.',
          '3rd masculine singular -- the base form, not shifted to "you."',
          '1st plural -- wrong person; the target is "you," not "we."',
          '3rd feminine plural -- wrong person and gender.',
        ],
      },
      {
        type: 'shift',
        base: 'حَكَى الرَّجُلُ الْقِصَّةَ',
        pre: '',
        post: 'الْقِصَّةَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['حَكَوْا', 'حَكَى', 'حَكَيْنَا', 'حَكَيْتَ'],
        answer: 0,
        rationales: [
          '3rd masculine plural perfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '1st plural -- wrong person; the target is "they," not "we."',
          '2nd masculine singular -- wrong person; the target is "they," not "you."',
        ],
      },
    ],
  },
};

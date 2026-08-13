// قَصَصُ النَّبِيِّينَ, volume 11 «زَكَرِيَّا», chapter 6 -- بِشَارَةُ وَلَدٍ.
// Printed page 247 only -- from just below ch5's closing Qur'an quote down
// to just above ch7's heading آيَاتُ. Transcribed by hand (not re-read from
// the scan for this pass; text supplied pre-transcribed and Qur'an-checked
// against the canonical Uthmani text). Two prose paragraphs: a short one
// (Allah answers Zakariyyā's prayer with glad tidings of a son) and a
// longer one opening with prose, embedding a Qur'anic quotation mid-way,
// and closing with a prose reflection prompted by that quotation.
//
// Qur'an quotation: Āl ʿImrān 3:41, from "رَبِّ ٱجْعَل لِّى ءَايَةً" through
// "وَٱلْإِبْكَـٰرِ" (end of ayah). This is a MID-AYAH quotation: the ayah's
// own opening نَادَى/قَالَ narration is omitted because the author's own
// "فَقَالَ:" immediately before the quote already supplies it -- the printed
// text picks up directly at Zakariyyā's own words. Per house convention
// (documented across the qasas-v11 chapters), the quotation is split into
// fragments of AT MOST 2 TOKENS each at natural pause points, so the
// build-stage drill (which cannot distinguish invented prose from Qur'anic
// wording) can never reassemble a 3+ token run of the ayah. The full
// flowing translation of the ayah lives in paragraph 2's `en` field
// instead, as part of its connected prose.
//
// Grammar / lexical notes:
//   -- تَوَجَّهَتْ (qs-v11-c06-002) is tagged under its own lemma تَوَجَّهَ
//      (form V, "to turn toward, be directed") rather than folded into
//      وَجَّهَ (form II, "to direct" -- transitive, different sense),
//      matching this corpus's practice of giving each derived form its own
//      dictionary entry when the meaning diverges (cf. qasas-v3 ch1's
//      اِنْتَشَرَ/تَعَجَّبَ getting their own lemmas rather than folding into
//      their form-I roots).
//   -- خُلِقَ (qs-v11-c06-003) is the passive of the already-taught خَلَقَ,
//      tagged 'conj+pass+perf.3ms' -- pass ordered first within the
//      perfect-passive segment, matching the precedent set by qasas-v3
//      ch1's قِيلَ (features 'pass+perf.3ms').
//   -- أَلَّا (qs-v11-c06-009) is the fused أَنْ + لَا. Tagged pos:'part',
//      features:'part+neg', lemma the already-taught negator لَا -- the
//      same fused-particle convention qasas-v3 ch1 used for لَمَا (لَ + مَا,
//      tagged under مَا with 'part+neg').
//   -- تُكَلِّمَ (qs-v11-c06-009) is subjunctive in context (جواب النفي after
//      أَلَّا) but the format has no separate mood atom, so it is tagged
//      plainly 'impf.2ms', per CHAPTER-FORMAT.md's documented feature-atom
//      list (no jussive/subjunctive distinction tracked anywhere in this
//      corpus).
//   -- رَبِّ (qs-v11-c06-006), the vocative "O my Lord", is tagged
//      pos:'noun', features:'acc+1s' -- the منادى مضاف convention already
//      used elsewhere for this exact word.
//   -- خَوَاصَّ (qs-v11-c06-{018,021}) is a diptote plural (lemma خَاصَّة,
//      sg. "a special quality/property") -- ends in a bare fatḥa with no
//      tanwīn in BOTH its construct-accusative occurrence (018, object of
//      يَسْلُبَ) and its indefinite-genitive occurrence (021, after مِنْ);
//      tagged 'pl.acc.constr' and 'pl.indef.gen' respectively despite the
//      identical surface fatḥa, since diptotes mark genitive with fatḥa too.
//   -- يَسْتَطِيعُ appears five times across qs-v11-c06-{018,020,021,022,022}
//      -- a deliberately recycled modal + subjunctive-complement frame
//      (يَسْتَطِيعُ أَنْ + verb), built into the workshop below (cloze on the
//      verb itself; shift across persons).
//   -- Shared lexicon check (grep across content-lit/qasas-v1/,
//      qasas-v2/, qasas-v3/ chapter-*.js; qasas-v11 has no earlier
//      chapters transcribed yet to check): أَجَابَ، اللَّه، دُعَاء (qasas-v1),
//      بِشَارَة (qasas-v2 ch1)، إِلَى، وَلَد، صَالِح، زَمَان، إِنْسَان، خَلَقَ،
//      مِنْ، طَلَبَ، عَلَى، هَذَا، كَبِير، قَالَ، رَبّ، لِ، أَنْ، جَعَلَ، آيَة
//      (qasas-v2 ch4)، النَّاس/نَاس، يَوْم، إِلَّا، كَلَّمَ، ذَكَرَ، كَثِير،
//      الَّذِي، شَاءَ، مَا، مَنَعَ، أَعْطَى، قَوِيّ، تَحَرَّكَ (qasas-v1 ch5) are
//      all already taught and are NOT re-listed in newWords here.
//      NOTE: سَبَّحَ was also found in content-lit/qasas-v9/chapter-02.js --
//      outside the v1-v3 grep scope this project's convention checks, but
//      since v9 precedes v11 in reading order it may in fact already be
//      taught by the time a learner reaches this chapter. Left in newWords
//      here (genuinely new against the v1-v3 baseline) since qasas-v11's
//      own earlier chapters aren't transcribed yet to check either; flagged
//      for a later consistency pass once the full v11 index is assembled.
//      اسْتَطَاعَ was checked against the FULL corpus (v1-v12, all chapters
//      present at transcription time) and not found anywhere -- confirmed
//      genuinely new, despite its high frequency making that surprising.
//
// 22 new words (تَوَجَّهَ، قُرْب، وِلَادَة، عَجَل، أَمَارَة، إِمْكَان، حَدَث، ظُهُور،
// ثَلَاثَة، رَمْز، سَبَّحَ، عَشِيّ، إِبْكَار، قَادِر، اسْتَطَاعَ، سَلَبَ، خَاصَّة،
// نَاطِق، أَبْكَم، كَلِمَة، أَوْدَعَ، مَخْلُوق). ثَلَاثَة was not on the pre-check hint
// list but grep confirms it is genuinely new (only وَاحِد is attested as a
// number-word anywhere in v1-v3); added since it's the numeral inside the
// Qur'an quotation itself. لِسَان was removed on the volume-wide review
// pass -- qasas-v11/chapter-05.js (earlier in reading order) already
// introduces it at qs-v11-c05-020.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch6',
  title: { ar: 'بِشَارَةُ وَلَدٍ', en: 'Glad Tidings of a Child' },
  newWords: [
    'تَوَجَّهَ', 'قُرْب', 'وِلَادَة', 'عَجَل', 'أَمَارَة', 'إِمْكَان', 'حَدَث', 'ظُهُور',
    'ثَلَاثَة', 'رَمْز', 'سَبَّحَ', 'عَشِيّ', 'إِبْكَار', 'قَادِر', 'اسْتَطَاعَ', 'سَلَبَ',
    'خَاصَّة', 'نَاطِق', 'أَبْكَم', 'كَلِمَة', 'أَوْدَعَ', 'مَخْلُوق',
  ],
  lemmas: {
    'تَوَجَّهَ': { gloss: 'to turn toward, be directed' },
    'قُرْب': { gloss: 'nearness; close to' },
    'وِلَادَة': { gloss: 'birth, delivery' },
    'عَجَل': { gloss: 'haste' },
    'أَمَارَة': { gloss: 'a sign, indication' },
    'إِمْكَان': { gloss: 'possibility' },
    'حَدَث': { gloss: 'an event, occurrence' },
    'ظُهُور': { gloss: 'appearance, emergence' },
    'ثَلَاثَة': { gloss: 'three' },
    'رَمْز': { gloss: 'a gesture, sign' },
    'سَبَّحَ': { gloss: 'to glorify' },
    'عَشِيّ': { gloss: 'evening' },
    'إِبْكَار': { gloss: 'early morning' },
    'قَادِر': { gloss: 'able, capable, powerful' },
    'اسْتَطَاعَ': { gloss: 'to be able' },
    'سَلَبَ': { gloss: 'to strip away, deprive of' },
    'خَاصَّة': { gloss: 'a special quality, property (pl. خَوَاصّ)' },
    'نَاطِق': { gloss: 'speaking, articulate' },
    'أَبْكَم': { gloss: 'mute' },
    'كَلِمَة': { gloss: 'a word' },
    'أَوْدَعَ': { gloss: 'to entrust, deposit' },
    'مَخْلُوق': { gloss: 'a created being, creature' },
  },
  paragraphs: [
    {
      en: "Allah answered his prayer, and the glad tidings of a righteous child were directed to him, close to the time of his birth.",
      sentences: [
        {
          id: 'qs-v11-c06-001',
          ar: 'وَأَجَابَ اللَّهُ دُعَاءَهُ،',
          en: 'Allah answered his prayer,',
          tokens: [
            { surface: 'وَأَجَابَ', lemma: 'أَجَابَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ج و ب', gloss: 'to answer, respond; and answered' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'دُعَاءَهُ', lemma: 'دُعَاء', pos: 'noun', features: 'acc+3ms', root: 'د ع و', gloss: 'his supplication, prayer' },
          ],
        },
        {
          id: 'qs-v11-c06-002',
          ar: 'وَتَوَجَّهَتْ إِلَيْهِ الْبِشَارَةُ بِوَلَدٍ صَالِحٍ قُرْبَ زَمَانِ وِلَادَتِهِ.',
          en: 'and the glad tidings of a righteous child were directed to him, close to the time of his birth.',
          tokens: [
            { surface: 'وَتَوَجَّهَتْ', lemma: 'تَوَجَّهَ', pos: 'verb', features: 'conj+perf.3fs', root: 'و ج ه', gloss: 'to turn toward, be directed; and was directed' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'الْبِشَارَةُ', lemma: 'بِشَارَة', pos: 'noun', features: 'def.nom', gloss: 'the glad tidings' },
            { surface: 'بِوَلَدٍ', lemma: 'وَلَد', pos: 'noun', features: 'prep+indef.gen', gloss: 'of a child' },
            { surface: 'صَالِحٍ', lemma: 'صَالِح', pos: 'adj', features: 'indef.gen', gloss: 'righteous' },
            { surface: 'قُرْبَ', lemma: 'قُرْب', pos: 'noun', features: 'acc.constr', root: 'ق ر ب', gloss: 'near, close to' },
            { surface: 'زَمَانِ', lemma: 'زَمَان', pos: 'noun', features: 'constr.gen', gloss: 'the time of' },
            { surface: 'وِلَادَتِهِ', lemma: 'وِلَادَة', pos: 'noun', features: 'gen+3ms', root: 'و ل د', gloss: 'his birth' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا تَوَجَّهَتِ الْبِشَارَةُ إِلَى زَكَرِيَّا؟',
          options: ['بِوَلَدٍ صَالِحٍ قُرْبَ زَمَانِ وِلَادَتِهِ', 'بِمَالٍ كَثِيرٍ', 'بِشِفَاءٍ مِنَ الْمَرَضِ'],
          answer: 0,
          qEn: 'What glad tidings were directed to Zakariyyā?',
          optionsEn: ['A righteous child, close to the time of his birth', 'Great wealth', 'Healing from illness'],
        },
      ],
    },
    {
      en: "Man was created of haste, so he asked for a sign of the possibility of this great event and the nearness of its coming, and said: 'My Lord, grant me a sign.' He said, 'Your sign is that you will not speak to the people for three days except by gesture. And remember your Lord much, and glorify Him in the evening and the early morning.' For the All-Capable who is able to strip things of their properties -- making the eloquent tongue mute, unable to utter a single word -- is able to deposit into His creatures whatever qualities He wills; and the Strong who is able to withhold is able to give.",
      sentences: [
        {
          id: 'qs-v11-c06-003',
          ar: 'وَخُلِقَ الْإِنْسَانُ مِنْ عَجَلٍ،',
          en: 'Man was created of haste,',
          tokens: [
            { surface: 'وَخُلِقَ', lemma: 'خَلَقَ', pos: 'verb', features: 'conj+pass+perf.3ms', root: 'خ ل ق', gloss: 'to create; and was created' },
            { surface: 'الْإِنْسَانُ', lemma: 'إِنْسَان', pos: 'noun', features: 'def.nom', gloss: 'man, mankind' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of, from' },
            { surface: 'عَجَلٍ', lemma: 'عَجَل', pos: 'noun', features: 'indef.gen', root: 'ع ج ل', gloss: 'haste' },
          ],
        },
        {
          id: 'qs-v11-c06-004',
          ar: 'فَطَلَبَ أَمَارَةً عَلَى إِمْكَانِ هَذَا الْحَدَثِ الْكَبِيرِ وَقُرْبِ ظُهُورِهِ،',
          en: 'so he asked for a sign of the possibility of this great event and the nearness of its coming,',
          tokens: [
            { surface: 'فَطَلَبَ', lemma: 'طَلَبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to seek, ask for; so he asked for' },
            { surface: 'أَمَارَةً', lemma: 'أَمَارَة', pos: 'noun', features: 'indef.acc', root: 'أ م ر', gloss: 'a sign, indication' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'of, regarding' },
            { surface: 'إِمْكَانِ', lemma: 'إِمْكَان', pos: 'noun', features: 'constr.gen', root: 'م ك ن', gloss: 'the possibility of' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْحَدَثِ', lemma: 'حَدَث', pos: 'noun', features: 'def.gen', root: 'ح د ث', gloss: 'the event' },
            { surface: 'الْكَبِيرِ', lemma: 'كَبِير', pos: 'adj', features: 'def.gen', gloss: 'great, momentous' },
            { surface: 'وَقُرْبِ', lemma: 'قُرْب', pos: 'noun', features: 'conj+constr.gen', root: 'ق ر ب', gloss: 'and the nearness of' },
            { surface: 'ظُهُورِهِ', lemma: 'ظُهُور', pos: 'noun', features: 'gen+3ms', root: 'ظ ه ر', gloss: 'its appearance, coming' },
          ],
        },
        {
          id: 'qs-v11-c06-005',
          ar: 'فَقَالَ:',
          en: 'and said:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v11-c06-006',
          ar: 'رَبِّ ٱجْعَل',
          en: "'My Lord, grant me",
          tokens: [
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'acc+1s', gloss: 'O my Lord' },
            { surface: 'ٱجْعَل', lemma: 'جَعَلَ', pos: 'verb', features: 'imp.2ms', gloss: 'to make; make' },
          ],
        },
        {
          id: 'qs-v11-c06-007',
          ar: 'لِّىٓ ءَايَةً',
          en: "a sign.'",
          tokens: [
            { surface: 'لِّىٓ', lemma: 'لِ', pos: 'prep', features: 'prep+1s', gloss: 'for me' },
            { surface: 'ءَايَةً', lemma: 'آيَة', pos: 'noun', features: 'indef.acc', gloss: 'a sign' },
          ],
        },
        {
          id: 'qs-v11-c06-008',
          ar: 'قَالَ ءَايَتُكَ',
          en: "He said, 'Your sign is",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; He said' },
            { surface: 'ءَايَتُكَ', lemma: 'آيَة', pos: 'noun', features: 'nom+2ms', gloss: 'your sign' },
          ],
        },
        {
          id: 'qs-v11-c06-009',
          ar: 'أَلَّا تُكَلِّمَ',
          en: 'that you will not speak',
          tokens: [
            { surface: 'أَلَّا', lemma: 'لَا', pos: 'part', features: 'part+neg', gloss: 'that...not' },
            { surface: 'تُكَلِّمَ', lemma: 'كَلَّمَ', pos: 'verb', features: 'impf.2ms', gloss: 'to speak to, address; you will speak to' },
          ],
        },
        {
          id: 'qs-v11-c06-010',
          ar: 'ٱلنَّاسَ',
          en: 'to the people',
          tokens: [
            { surface: 'ٱلنَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v11-c06-011',
          ar: 'ثَلَـٰثَةَ أَيَّامٍ',
          en: 'for three days',
          tokens: [
            { surface: 'ثَلَـٰثَةَ', lemma: 'ثَلَاثَة', pos: 'num', features: 'acc', gloss: 'three' },
            { surface: 'أَيَّامٍ', lemma: 'يَوْم', pos: 'noun', features: 'pl.indef.gen', gloss: 'days' },
          ],
        },
        {
          id: 'qs-v11-c06-012',
          ar: 'إِلَّا رَمْزًا',
          en: 'except by gesture.',
          tokens: [
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'رَمْزًا', lemma: 'رَمْز', pos: 'noun', features: 'indef.acc', root: 'ر م ز', gloss: 'a gesture, sign' },
          ],
        },
        {
          id: 'qs-v11-c06-013',
          ar: 'وَٱذْكُر رَّبَّكَ',
          en: 'And remember your Lord',
          tokens: [
            { surface: 'وَٱذْكُر', lemma: 'ذَكَرَ', pos: 'verb', features: 'conj+imp.2ms', gloss: 'to remember, mention; and remember' },
            { surface: 'رَّبَّكَ', lemma: 'رَبّ', pos: 'noun', features: 'acc+2ms', gloss: 'your Lord' },
          ],
        },
        {
          id: 'qs-v11-c06-014',
          ar: 'كَثِيرًا',
          en: 'much,',
          tokens: [
            { surface: 'كَثِيرًا', lemma: 'كَثِير', pos: 'adv', features: 'indef.acc', gloss: 'much, greatly' },
          ],
        },
        {
          id: 'qs-v11-c06-015',
          ar: 'وَسَبِّحْ',
          en: 'and glorify Him',
          tokens: [
            { surface: 'وَسَبِّحْ', lemma: 'سَبَّحَ', pos: 'verb', features: 'conj+imp.2ms', root: 'س ب ح', gloss: 'to glorify; and glorify' },
          ],
        },
        {
          id: 'qs-v11-c06-016',
          ar: 'بِٱلْعَشِىِّ',
          en: 'in the evening',
          tokens: [
            { surface: 'بِٱلْعَشِىِّ', lemma: 'عَشِيّ', pos: 'noun', features: 'prep+def.gen', root: 'ع ش و', gloss: 'the evening' },
          ],
        },
        {
          id: 'qs-v11-c06-017',
          ar: 'وَٱلْإِبْكَـٰرِ',
          en: "and the early morning.'",
          tokens: [
            { surface: 'وَٱلْإِبْكَـٰرِ', lemma: 'إِبْكَار', pos: 'noun', features: 'conj+def.gen', root: 'ب ك ر', gloss: 'and the early morning' },
          ],
        },
        {
          id: 'qs-v11-c06-018',
          ar: 'فَالْقَادِرُ الَّذِي يَسْتَطِيعُ أَنْ يَسْلُبَ خَوَاصَّ الْأَشْيَاءِ،',
          en: 'For the All-Capable who is able to strip things of their properties --',
          tokens: [
            { surface: 'فَالْقَادِرُ', lemma: 'قَادِر', pos: 'adj', features: 'conj+def.nom', root: 'ق د ر', gloss: 'able, capable, powerful' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'who, that (m.)' },
            { surface: 'يَسْتَطِيعُ', lemma: 'اسْتَطَاعَ', pos: 'verb', features: 'impf.3ms', root: 'ط و ع', gloss: 'to be able; is able' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that, to' },
            { surface: 'يَسْلُبَ', lemma: 'سَلَبَ', pos: 'verb', features: 'impf.3ms', root: 'س ل ب', gloss: 'to strip away, deprive of; strip away' },
            { surface: 'خَوَاصَّ', lemma: 'خَاصَّة', pos: 'noun', features: 'pl.acc.constr', root: 'خ ص ص', gloss: 'the properties of' },
            { surface: 'الْأَشْيَاءِ', lemma: 'شَيْء', pos: 'noun', features: 'pl.def.gen', gloss: 'the things' },
          ],
        },
        {
          id: 'qs-v11-c06-019',
          ar: 'فَيَجْعَلُ اللِّسَانَ النَّاطِقَ أَبْكَمَ،',
          en: 'making the eloquent tongue mute,',
          tokens: [
            { surface: 'فَيَجْعَلُ', lemma: 'جَعَلَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to make; so he makes' },
            { surface: 'اللِّسَانَ', lemma: 'لِسَان', pos: 'noun', features: 'def.acc', root: 'ل س ن', gloss: 'the tongue' },
            { surface: 'النَّاطِقَ', lemma: 'نَاطِق', pos: 'adj', features: 'def.acc', root: 'ن ط ق', gloss: 'speaking, articulate' },
            { surface: 'أَبْكَمَ', lemma: 'أَبْكَم', pos: 'adj', features: 'indef.acc', root: 'ب ك م', gloss: 'mute' },
          ],
        },
        {
          id: 'qs-v11-c06-020',
          ar: 'لَا يَسْتَطِيعُ أَنْ يَتَحَرَّكَ بِكَلِمَةٍ،',
          en: 'unable to utter a single word --',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَسْتَطِيعُ', lemma: 'اسْتَطَاعَ', pos: 'verb', features: 'impf.3ms', root: 'ط و ع', gloss: 'to be able; is able' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that, to' },
            { surface: 'يَتَحَرَّكَ', lemma: 'تَحَرَّكَ', pos: 'verb', features: 'impf.3ms', gloss: 'to move; move' },
            { surface: 'بِكَلِمَةٍ', lemma: 'كَلِمَة', pos: 'noun', features: 'prep+indef.gen', root: 'ك ل م', gloss: 'with a word' },
          ],
        },
        {
          id: 'qs-v11-c06-021',
          ar: 'يَسْتَطِيعُ أَنْ يُودِعَ مَا يَشَاءُ مِنْ مَخْلُوقَاتِهِ مَا شَاءَ مِنْ خَوَاصَّ،',
          en: 'is able to deposit into His creatures whatever qualities He wills,',
          tokens: [
            { surface: 'يَسْتَطِيعُ', lemma: 'اسْتَطَاعَ', pos: 'verb', features: 'impf.3ms', root: 'ط و ع', gloss: 'to be able; is able' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that, to' },
            { surface: 'يُودِعَ', lemma: 'أَوْدَعَ', pos: 'verb', features: 'impf.3ms', root: 'و د ع', gloss: 'to entrust, deposit; deposit' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what, whatever' },
            { surface: 'يَشَاءُ', lemma: 'شَاءَ', pos: 'verb', features: 'impf.3ms', gloss: 'to will; He wills' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of, among' },
            { surface: 'مَخْلُوقَاتِهِ', lemma: 'مَخْلُوق', pos: 'noun', features: 'pl.gen+3ms', root: 'خ ل ق', gloss: 'His creatures' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'whatever' },
            { surface: 'شَاءَ', lemma: 'شَاءَ', pos: 'verb', features: 'perf.3ms', gloss: 'to will; He willed' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'خَوَاصَّ', lemma: 'خَاصَّة', pos: 'noun', features: 'pl.indef.gen', root: 'خ ص ص', gloss: 'properties, qualities' },
          ],
        },
        {
          id: 'qs-v11-c06-022',
          ar: 'وَالْقَوِيُّ الَّذِي يَسْتَطِيعُ أَنْ يَمْنَعَ يَسْتَطِيعُ أَنْ يُعْطِيَ.',
          en: 'and the Strong who is able to withhold is able to give.',
          tokens: [
            { surface: 'وَالْقَوِيُّ', lemma: 'قَوِيّ', pos: 'adj', features: 'conj+def.nom', gloss: 'the Strong' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'who, that (m.)' },
            { surface: 'يَسْتَطِيعُ', lemma: 'اسْتَطَاعَ', pos: 'verb', features: 'impf.3ms', root: 'ط و ع', gloss: 'to be able; is able' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that, to' },
            { surface: 'يَمْنَعَ', lemma: 'مَنَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to withhold, prevent; withhold' },
            { surface: 'يَسْتَطِيعُ', lemma: 'اسْتَطَاعَ', pos: 'verb', features: 'impf.3ms', root: 'ط و ع', gloss: 'to be able; is able' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that, to' },
            { surface: 'يُعْطِيَ', lemma: 'أَعْطَى', pos: 'verb', features: 'impf.3ms', gloss: 'to give; give' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا طَلَبَ زَكَرِيَّا مِنْ رَبِّهِ؟',
          options: ['أَمَارَةً عَلَى إِمْكَانِ الْحَدَثِ وَقُرْبِ ظُهُورِهِ', 'مَالًا كَثِيرًا', 'أَنْ يَشْفِيَهُ مِنَ الْمَرَضِ'],
          answer: 0,
          qEn: 'What did Zakariyyā ask his Lord for?',
          optionsEn: ['A sign of the possibility of the event and the nearness of its coming', 'Great wealth', 'To be healed of illness'],
        },
        {
          q: 'مَا هِيَ الْآيَةُ الَّتِي جَعَلَهَا اللَّهُ لِزَكَرِيَّا؟',
          options: ['أَلَّا يُكَلِّمَ النَّاسَ ثَلَاثَةَ أَيَّامٍ إِلَّا رَمْزًا', 'أَنْ يَرَى مَلَكًا', 'أَنْ يَمْرَضَ ثَلَاثَةَ أَيَّامٍ'],
          answer: 0,
          qEn: 'What was the sign Allah gave Zakariyyā?',
          optionsEn: ['That he would not speak to the people for three days except by gesture', 'That he would see an angel', 'That he would fall ill for three days'],
        },
        {
          q: 'مَا الَّذِي يُبَيِّنُهُ الْكَلَامُ الْأَخِيرُ عَنْ قُدْرَةِ اللَّهِ؟',
          options: ['أَنَّ الْقَادِرَ عَلَى سَلْبِ الْخَوَاصِّ قَادِرٌ أَيْضًا عَلَى إِيدَاعِهَا', 'أَنَّ اللَّهَ لَا يَقْدِرُ عَلَى شَيْءٍ', 'أَنَّ اللِّسَانَ لَا يُمْكِنُ أَنْ يَصْمُتَ أَبَدًا'],
          answer: 0,
          qEn: 'What does the closing commentary show about the power of Allah?',
          optionsEn: ['That the One able to strip away properties is equally able to grant them', 'That Allah has no power over anything', "That the tongue can never fall silent"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَالْقَادِرُ الَّذِي',
        post: 'أَنْ يَسْلُبَ خَوَاصَّ الْأَشْيَاءِ،',
        en: 'For the All-Capable who is able to strip things of their properties,',
        options: ['يَسْتَطِيعُ', 'تَسْتَطِيعُ', 'أَسْتَطِيعُ', 'يَسْتَطِيعُونَ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- agrees with الَّذِي referring back to الْقَادِرُ.',
          '2nd masculine singular / 3rd feminine singular -- wrong person/gender here.',
          '1st singular -- I, wrong person.',
          '3rd masculine plural -- wrong number; الْقَادِرُ is singular.',
        ],
      },
      {
        type: 'cloze',
        pre: 'لَا',
        post: 'أَنْ يَتَحَرَّكَ بِكَلِمَةٍ،',
        en: 'unable to move with a single word,',
        options: ['يَسْتَطِيعُ', 'اسْتَطَاعَ', 'يَسْتَطِيعُونَ', 'نَسْتَطِيعُ'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine singular -- matches the ongoing description of the mute tongue.',
          'Perfect -- wrong tense; the passage describes a standing state, not a completed past action.',
          'Plural -- wrong number; the subject (the tongue) is singular.',
          '1st plural -- wrong person entirely.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَالْقَوِيُّ الَّذِي يَسْتَطِيعُ أَنْ يَمْنَعَ',
        post: 'أَنْ يُعْطِيَ.',
        en: 'and the Strong who is able to withhold is able to give.',
        options: ['يَسْتَطِيعُ', 'تَسْتَطِيعُ', 'نَسْتَطِيعُ', 'اسْتَطَاعَ'],
        answer: 0,
        rationales: [
          '3rd masculine singular, imperfect -- matches الْقَوِيُّ and the first يَسْتَطِيعُ in the same sentence.',
          '2nd masculine singular / 3rd feminine singular -- wrong person/gender.',
          '1st plural -- wrong person entirely.',
          'Perfect -- wrong tense; breaks the parallel with the imperfect used earlier in the same sentence.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَسْتَطِيعُ أَنْ يَمْنَعَ',
        pre: '',
        post: 'أَنْ يَمْنَعَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَسْتَطِيعُ', 'يَسْتَطِيعُ', 'تَسْتَطِيعُ', 'نَسْتَطِيعُ'],
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
        base: 'يَسْتَطِيعُ أَنْ يَمْنَعَ',
        pre: '',
        post: 'أَنْ يَمْنَعَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَسْتَطِيعُ', 'يَسْتَطِيعُ', 'أَسْتَطِيعُ', 'تَسْتَطِيعُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '2nd masculine singular -- you (m.).',
        ],
      },
    ],
  },
};

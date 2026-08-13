// القراءة الراشدة, volume two, chapter 65 (printed heading "٦٥") --
// الْبَبَّغَاءُ -- "The Parrot" (a poem by أَبُوْ إِسْحَاقَ الصَّابِئُ, Abu
// Ishaq al-Sabi).
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 215-216. Standalone
// two-page chapter, not part of a multi-part story.
//
// THIS CHAPTER IS VERSE (nazm), same structural departure already used
// for qiraah-v1/chapter-03.js, chapter-05.js and this book's own
// chapter-44.js/chapter-48.js -- reusing their already-agreed adaptations
// rather than inventing new ones:
//   - Each bayt (both hemistichs, printed side by side in two columns --
//     right column = صدر/first hemistich, left column = عجز/second
//     hemistich) is one `sentences[]` entry. The mid-bayt pause is
//     rendered as `،` and the bayt-end as `.` in `ar` (an editorial
//     convention -- the print itself marks the division only by column
//     layout). The whole poem (10 bayts) is a single continuous piece
//     with no blank-line paragraph break on the printed page, so it is
//     kept as ONE `paragraphs[]` entry, matching how chapter-44/48 each
//     held their whole poem in one paragraph.
//   - `register` is "descriptive_verse" -- a new value (distinct from
//     chapter-44's "imperative_verse" and chapter-48's "gnomic_verse").
//     This poem describes a pet parrot mostly in the 3rd person
//     (qr2-65-001/002/003/004/006/008/009/010), with two 2nd-person-
//     address bayts speaking to the parrot's owner directly
//     (qr2-65-005 "زَارَتْكَ ... عِنْدَكَ", qr2-65-007 "تَرَاهُ ...").
//   - Endings are transcribed exactly as printed: some rawi (hemistich-
//     final) words are pausal/bare (سَمِيْعَةْ، طَبِيْعَةْ، الْبَعِيْدَةْ،
//     كَالْقَعِيْدَةْ), others keep a live case vowel with the tanwin
//     dropped as ordinary poetic license (وَاللِّسَانُ، إِنْسَانُ،
//     خَلاَصُ، ذَنْبِ -- all would carry tanwin in prose), and two bayts
//     (qr2-65-003, the itlaq-alif forms الأَخْبَارَا/وَالأَسْتَارَا) use the
//     same poetic إِطْلاَق (a connecting alif after an accusative rawi)
//     chapter-44/48 already documented. `features` records the
//     underlying grammatical case throughout regardless of what is/isn't
//     visible on `surface`, per established precedent.
//   - `workshop` is omitted, for the same reason given in chapter-03/05/
//     44/48: substituting a wrong conjugation for cloze/shift risks
//     breaking metre/rhyme rather than testing grammar in a short rhymed
//     poem.
//   - The poem is followed in print by "(أَبُوْ إِسْحَاقَ الصَّابِئُ)" (the
//     poet's name) and then a "٭ ٭ ٭" divider -- both excluded from
//     `ar`/`tokens`, same treatment as chapter-44/48's own poems.
//
// Pronoun-gender note: the parrot is addressed/described as feminine
// throughout (بِلاَدِهَا، حَبْسِهَا، تَحْبِسُهَا...) except in qr2-65-006/007,
// where the poet recasts her as "الضَّيْفُ" (a masc. noun, "the guest")
// and the pronouns switch to masculine agreement (إِتْيَانِهِ، تَرَاهُ،
// مِنْقَارِهِ) -- ordinary Arabic concord with the nearer masc. antecedent,
// not an error.
//
// Footnoted vocabulary (Nadwi's own glosses, captured as book_note):
// p.215 -- أَلِفَ (fn.1), أَوْهَمَ (fn.2), أَنْهَىٰ (fn.3), بَكْمَاءُ/أَبْكَمُ
// (fn.4), الْقَعِيْدَةُ (fn.5). p.216 -- قِرًى (fn.1), لَقَطَ (fn.2), الْعَقِيْقُ
// (fn.3), الْفَصُّ (fn.4), بَصَّاصٌ (fn.5), خَرِيْدَةٌ (fn.6), خِدْرٌ (fn.7).
// Footnote-marker numerals themselves are book furniture, excluded from
// `ar`/tokens.
//
// Homographs (existing lemma key reused for a genuinely different word,
// no new newWords entry -- same treatment already given "نعم" in
// chapter-48 and "لازم"/"لازم" there too):
//   - "أَلِفْتُهَا" (qr2-65-001) reuses the lemma key "ألف", already taught
//     as the NUMBER "a thousand" (own ch55/56). Here it is the unrelated
//     Form I verb أَلِفَ يَأْلَفُ "to become fond of, familiar with"
//     (fn.1) -- same bare spelling, different word entirely.
//   - "ذَنْبِ" (qr2-65-010, "sin, fault") reuses the lemma key "ذنب",
//     already taught as the NOUN "tail" (own ch47, of the lion). Same
//     bare consonant skeleton (ذَنَب "tail" vs. ذَنْب "sin"), different
//     word.
// Light gloss-extensions of an already-known lemma (not homographs, same
// treatment chapter-48 gave "حَبِيْب"): "إِتْيَانِهِ" (qr2-65-006) is
// tagged pos:"noun" on the already-known verb lemma "أتى" ("to come"),
// since إتيان is simply أتى's own verbal noun; "تَحْبِسُهَا"/"حَبْسِهَا"
// (qr2-65-009/010) reuse the already-known lemma "حبس" (noun
// "confinement", own v1 ch05) with a verb sense added; "يُعَزُّ"
// (qr2-65-006, "is honored") reuses "عز", already known both as a verb
// (own ch43, "to be mighty") and a noun (own ch44, "honor").
//
// Other reused vocabulary (already taught, not re-listed in newWords):
// طائر، نور، قفص، حب، ضيف، بلد، بعيد، زار، عند، صاحب، خبر، كشف، سر، ستر،
// سمع، طبيعة، رقيق، ليس، أن/إن، من، على، في، إلى، ذلك، ما، إنما، إلا --
// all confirmed against the corpus-wide lemma index before drafting.
export const CHAPTER = {
  id: 'ch65',
  title: { ar: 'الْبَبَّغَاءُ', en: 'The Parrot' },
  pages: [215, 216],
  register: 'descriptive_verse',
  newWords: [
    'صبيح', 'مليح', 'ناطق', 'لغة', 'فصيح', 'لسان', 'أوهم', 'أنهى', 'أبكم',
    'سميع', 'أعاد', 'استوطن', 'قعيدة', 'قرى', 'جوز', 'أرز', 'منقار', 'لؤلؤ',
    'لقط', 'عقيق', 'طرف', 'فص', 'ظلمة', 'بصاص', 'خريدة', 'خدر', 'خلاص',
    'فرط',
  ],
  lemmas: {
    'صبيح': { gloss: 'fair-faced, comely' },
    'مليح': { gloss: 'pretty, charming' },
    'ناطق': { gloss: 'well-spoken, articulate' },
    'لغة': { gloss: 'language, speech' },
    'فصيح': { gloss: 'eloquent, clear of speech' },
    'لسان': { gloss: 'tongue' },
    'أوهم': { gloss: 'to make (someone) imagine, suggest to the mind', book_note: 'أَوْهَمَ يُوْهِمُ إِيْهَاماً: أَوْهَمَ الرَّجُلُ الشَّيْءَ: أَوْقَعَهُ فِي الْوَهْمِ (وَالْوَهْمُ مَا يَقَعُ فِي الذِّهْنِ مِنَ الْخَاطِرِ).' },
    'أنهى': { gloss: 'to convey, relay, deliver (news)', book_note: 'أَنْهَىٰ يُنْهِي إِنْهَاءَ الشَّيْءَ: أَوْصَلَهُ وَأَبْلَغَهُ.' },
    'أبكم': { gloss: 'mute, unable to speak', book_note: 'بَكْمَاءُ (مؤنث) أَبْكَمُ (مذكر) جمعها بُكْمٌ: عَاجِزٌ عَنِ الْكَلاَمِ، أَخْرَسُ.' },
    'سميع': { gloss: 'one who hears well, hearing' },
    'أعاد': { gloss: 'to repeat, give back' },
    'استوطن': { gloss: 'to settle, take up permanent residence' },
    'قعيدة': { gloss: 'a constant companion, one who keeps continual company', book_note: 'الْقَعِيْدَةُ: الْمُجَالَسَةُ.' },
    'قرى': { gloss: 'hospitality-fare, food set before a guest', book_note: 'قِرًى: مَا يُقَدَّمُ إِلَى الضَّيْفِ مِنَ الطَّعَامِ.' },
    'جوز': { gloss: 'walnuts' },
    'أرز': { gloss: 'rice' },
    'منقار': { gloss: 'beak' },
    'لؤلؤ': { gloss: 'pearl' },
    'لقط': { gloss: 'to pick up (something)', book_note: 'لَقَطَ يَلْقُطُ لَقْطاً: الشَّيْءَ: أَخَذَهُ مِنَ الأَرْضِ.' },
    'عقيق': { gloss: 'carnelian (a red gemstone)', book_note: 'الْعَقِيْقُ: حَجَرٌ كَرِيْمٌ أَحْمَرُ.' },
    'طرف': { gloss: 'eye; edge, extremity' },
    'فص': { gloss: 'gem, bezel-stone (set in a ring)', book_note: 'الْفَصُّ جمع الْفُصُوْص: مَا يُرَكَّبُ فِي الْخَاتَمِ مِنَ الْحِجَارَةِ الْكَرِيْمَةِ وَغَيْرِهَا.' },
    'ظلمة': { gloss: 'darkness' },
    'بصاص': { gloss: 'gleaming, glinting', book_note: 'بَصَّاصٌ: لاَمِعٌ وَمُتَلأْلِئٌ.' },
    'خريدة': { gloss: 'a pristine pearl, not yet pierced', book_note: 'خُرَيْدَةٌ جمع خَرَائِد: لُؤْلُؤَةٌ لَمْ تُثْقَبْ.' },
    'خدر': { gloss: 'curtained chamber, veiled alcove', book_note: 'خِدْرٌ جمع خُدُوْر: سِتْرٌ يُمَدُّ لِيَحْجُبَ مَا وَرَاءَهُ، وَسِتَارَةٌ.' },
    'خلاص': { gloss: 'deliverance, release, escape' },
    'فرط': { gloss: 'excess, going to extremes' },
    'ألف': { book_note: 'أَلِفَ يَأْلَفُ إِلْفاً: الرَّجُلُ فُلاَناً: أَنِسَ بِهِ وَأَحَبَّهُ. (هنا فعل "أَلِفَ"، لا "أَلْف" العدد.)' },
  },
  paragraphs: [
    {
      en: "A short descriptive poem (by Abu Ishaq al-Sabi) about a pet parrot: the poet grew fond of her, a fair, pretty creature articulate in eloquent speech. Though counted among the birds, her tongue makes him imagine she is a human being -- she relays news to her owner and uncovers secrets and hidden things. She cannot truly speak on her own (she is mute, except that she hears); by nature she only repeats what she hears. She came to visit you from her distant homeland and settled with you like a permanent companion -- a guest whose fare is walnuts and rice, and a guest is honored in his coming. You see her, in her slender beak, like a pearl she picks up, herself of carnelian; she looks out from two eyes like two gems, gleaming in both light and darkness. She is a pristine, unpierced pearl whose only chambers are her cage, with no escape from her confinement -- she is caged though she has no fault of her own; that is only from an excess of love.",
      sentences: [
        {
          id: 'qr2-65-001',
          ar: 'أَلِفْتُهَا صَبِيْحَةً مَلِيْحَةْ، نَاطِقَةً بِاللُّغَةِ الْفَصِيْحَةْ.',
          en: 'I became fond of her, fair and pretty, articulate in eloquent language.',
          tokens: [
            { surface: 'أَلِفْتُهَا', lemma: 'ألف', pos: 'verb', features: 'perf.1s+3fs', root: 'أ ل ف', gloss: 'I became fond of her' },
            { surface: 'صَبِيْحَةً', lemma: 'صبيح', pos: 'adj', features: 'indef.acc', root: 'ص ب ح', gloss: 'fair, comely' },
            { surface: 'مَلِيْحَةْ', lemma: 'مليح', pos: 'adj', features: 'indef.acc', root: 'م ل ح', gloss: 'pretty, charming' },
            { surface: 'نَاطِقَةً', lemma: 'ناطق', pos: 'adj', features: 'indef.acc', root: 'ن ط ق', gloss: 'well-spoken, articulate' },
            { surface: 'بِاللُّغَةِ', lemma: 'لغة', pos: 'noun', features: 'prep+def.gen', root: 'ل غ و', gloss: 'in language' },
            { surface: 'الْفَصِيْحَةْ', lemma: 'فصيح', pos: 'adj', features: 'def.gen', root: 'ف ص ح', gloss: 'the eloquent' },
          ],
        },
        {
          id: 'qr2-65-002',
          ar: 'عُدَّتْ مِنَ الْأَطْيَارِ وَاللِّسَانُ، يُوْهِمُنِيْ بِأَنَّهَا إِنْسَانُ.',
          en: 'She is counted among the birds, yet the tongue makes me imagine she is a human being.',
          tokens: [
            { surface: 'عُدَّتْ', lemma: 'عد', pos: 'verb', features: 'perf.pass.3fs', root: 'ع د د', gloss: 'was counted' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'among' },
            { surface: 'الْأَطْيَارِ', lemma: 'طائر', pos: 'noun', features: 'def.gen.pl', root: 'ط ي ر', gloss: 'the birds' },
            { surface: 'وَاللِّسَانُ', lemma: 'لسان', pos: 'noun', features: 'conj+def.nom', root: 'ل س ن', gloss: 'yet the tongue' },
            { surface: 'يُوْهِمُنِيْ', lemma: 'أوهم', pos: 'verb', features: 'impf.3ms+1s', root: 'و ه م', gloss: 'makes me imagine' },
            { surface: 'بِأَنَّهَا', lemma: 'أن', pos: 'part', features: 'prep+3fs', gloss: 'that she (is)' },
            { surface: 'إِنْسَانُ', lemma: 'إنسان', pos: 'noun', features: 'indef.nom', root: 'أ ن س', gloss: 'a human being' },
          ],
        },
        {
          id: 'qr2-65-003',
          ar: 'تُنْهِيْ إِلَىٰ صَاحِبِهَا الْأَخْبَارَا، وَتَكْشِفُ الْأَسْرَارَ وَالْأَسْتَارَا.',
          en: 'She relays the news to her owner, and uncovers secrets and hidden things.',
          tokens: [
            { surface: 'تُنْهِيْ', lemma: 'أنهى', pos: 'verb', features: 'impf.3fs', root: 'ن ه ي', gloss: 'conveys, relays' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'صَاحِبِهَا', lemma: 'صاحب', pos: 'noun', features: 'gen+3fs', root: 'ص ح ب', gloss: 'her owner' },
            { surface: 'الْأَخْبَارَا', lemma: 'خبر', pos: 'noun', features: 'def.acc.pl', root: 'خ ب ر', gloss: 'the news' },
            { surface: 'وَتَكْشِفُ', lemma: 'كشف', pos: 'verb', features: 'conj+impf.3fs', root: 'ك ش ف', gloss: 'and reveals' },
            { surface: 'الْأَسْرَارَ', lemma: 'سر', pos: 'noun', features: 'def.acc.pl', root: 'س ر ر', gloss: 'the secrets' },
            { surface: 'وَالْأَسْتَارَا', lemma: 'ستر', pos: 'noun', features: 'conj+def.acc.pl', root: 'س ت ر', gloss: 'and the hidden coverings' },
          ],
        },
        {
          id: 'qr2-65-004',
          ar: 'بَكْمَاءُ إِلاَّ أَنَّهَا سَمِيْعَةْ، تُعِيْدُ مَا تَسْمَعُهُ طَبِيْعَةْ.',
          en: 'Mute, except that she hears -- by nature she repeats what she hears.',
          tokens: [
            { surface: 'بَكْمَاءُ', lemma: 'أبكم', pos: 'adj', features: 'indef.nom', root: 'ب ك م', gloss: 'mute' },
            { surface: 'إِلاَّ', lemma: 'إلا', pos: 'part', gloss: 'except' },
            { surface: 'أَنَّهَا', lemma: 'أن', pos: 'part', features: '3fs', gloss: 'that she (is)' },
            { surface: 'سَمِيْعَةْ', lemma: 'سميع', pos: 'adj', features: 'indef.nom', root: 'س م ع', gloss: 'one who hears' },
            { surface: 'تُعِيْدُ', lemma: 'أعاد', pos: 'verb', features: 'impf.3fs', root: 'ع و د', gloss: 'repeats, gives back' },
            { surface: 'مَا', lemma: 'ما', pos: 'rel', gloss: 'what' },
            { surface: 'تَسْمَعُهُ', lemma: 'سمع', pos: 'verb', features: 'impf.3fs+3ms', root: 'س م ع', gloss: 'she hears it' },
            { surface: 'طَبِيْعَةْ', lemma: 'طبيعة', pos: 'noun', features: 'indef.acc', root: 'ط ب ع', gloss: 'by nature' },
          ],
        },
        {
          id: 'qr2-65-005',
          ar: 'زَارَتْكَ مِنْ بِلاَدِهَا الْبَعِيْدَةْ، وَاسْتَوْطَنَتْ عِنْدَكَ كَالْقَعِيْدَةْ.',
          en: 'She visited you from her distant homeland, and settled with you like a permanent companion.',
          tokens: [
            { surface: 'زَارَتْكَ', lemma: 'زار', pos: 'verb', features: 'perf.3fs+2ms', root: 'ز و ر', gloss: 'she visited you' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'بِلاَدِهَا', lemma: 'بلد', pos: 'noun', features: 'gen.pl+3fs', root: 'ب ل د', gloss: 'her country' },
            { surface: 'الْبَعِيْدَةْ', lemma: 'بعيد', pos: 'adj', features: 'def.gen', root: 'ب ع د', gloss: 'the distant' },
            { surface: 'وَاسْتَوْطَنَتْ', lemma: 'استوطن', pos: 'verb', features: 'conj+perf.3fs', root: 'و ط ن', gloss: 'and settled, took up residence' },
            { surface: 'عِنْدَكَ', lemma: 'عند', pos: 'prep', features: '2ms', gloss: 'with you' },
            { surface: 'كَالْقَعِيْدَةْ', lemma: 'قعيدة', pos: 'noun', features: 'prep+def.gen', root: 'ق ع د', gloss: 'like the constant companion' },
          ],
        },
        {
          id: 'qr2-65-006',
          ar: 'ضَيْفٌ قِرَاهُ الْجَوْزُ وَالْأَرُزُّ، وَالضَّيْفُ فِيْ إِتْيَانِهِ يُعَزُّ.',
          en: 'A guest whose fare is walnuts and rice, and a guest is honored in his coming.',
          tokens: [
            { surface: 'ضَيْفٌ', lemma: 'ضيف', pos: 'noun', features: 'indef.nom', root: 'ض ي ف', gloss: 'a guest' },
            { surface: 'قِرَاهُ', lemma: 'قرى', pos: 'noun', features: 'nom.constr+3ms', root: 'ق ر ي', gloss: 'whose fare is' },
            { surface: 'الْجَوْزُ', lemma: 'جوز', pos: 'noun', features: 'def.nom', root: 'ج و ز', gloss: 'the walnuts' },
            { surface: 'وَالْأَرُزُّ', lemma: 'أرز', pos: 'noun', features: 'conj+def.nom', root: 'أ ر ز', gloss: 'and the rice' },
            { surface: 'وَالضَّيْفُ', lemma: 'ضيف', pos: 'noun', features: 'conj+def.nom', root: 'ض ي ف', gloss: 'and the guest' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'إِتْيَانِهِ', lemma: 'أتى', pos: 'noun', features: 'gen+3ms', root: 'أ ت ي', gloss: 'his coming' },
            { surface: 'يُعَزُّ', lemma: 'عز', pos: 'verb', features: 'impf.pass.3ms', root: 'ع ز ز', gloss: 'is honored' },
          ],
        },
        {
          id: 'qr2-65-007',
          ar: 'تَرَاهُ فِيْ مِنْقَارِهِ الرَّقِيْقِ، كَلُؤْلُوٍ يَلْقُطُ بِالْعَقِيْقِ.',
          en: 'You see him in his slender beak, like a pearl he picks up, himself of carnelian.',
          tokens: [
            { surface: 'تَرَاهُ', lemma: 'رأى', pos: 'verb', features: 'impf.2ms+3ms', root: 'ر أ ي', gloss: 'you see him' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'مِنْقَارِهِ', lemma: 'منقار', pos: 'noun', features: 'gen+3ms', root: 'ن ق ر', gloss: 'his beak' },
            { surface: 'الرَّقِيْقِ', lemma: 'رقيق', pos: 'adj', features: 'def.gen', root: 'ر ق ق', gloss: 'the slender, delicate' },
            { surface: 'كَلُؤْلُوٍ', lemma: 'لؤلؤ', pos: 'noun', features: 'prep+indef.gen', root: 'ل ؤ ل ؤ', gloss: 'like a pearl' },
            { surface: 'يَلْقُطُ', lemma: 'لقط', pos: 'verb', features: 'impf.3ms', root: 'ل ق ط', gloss: 'picks up' },
            { surface: 'بِالْعَقِيْقِ', lemma: 'عقيق', pos: 'noun', features: 'prep+def.gen', root: 'ع ق ق', gloss: 'with, of carnelian' },
          ],
        },
        {
          id: 'qr2-65-008',
          ar: 'تَنْظُرُ مِنْ طَرْفَيْنِ كَالْفَصَّيْنِ، فِي النُّوْرِ وَالظُّلْمَةِ بَصَّاصَيْنِ.',
          en: 'She looks out from two eyes like two gems, gleaming in both light and darkness.',
          tokens: [
            { surface: 'تَنْظُرُ', lemma: 'نظر', pos: 'verb', features: 'impf.3fs', root: 'ن ظ ر', gloss: 'she looks' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from, out of' },
            { surface: 'طَرْفَيْنِ', lemma: 'طرف', pos: 'noun', features: 'indef.gen.du', root: 'ط ر ف', gloss: 'two eyes' },
            { surface: 'كَالْفَصَّيْنِ', lemma: 'فص', pos: 'noun', features: 'prep+def.gen.du', root: 'ف ص ص', gloss: 'like the two gems' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'النُّوْرِ', lemma: 'نور', pos: 'noun', features: 'def.gen', root: 'ن و ر', gloss: 'the light' },
            { surface: 'وَالظُّلْمَةِ', lemma: 'ظلمة', pos: 'noun', features: 'conj+def.gen', root: 'ظ ل م', gloss: 'and the darkness' },
            { surface: 'بَصَّاصَيْنِ', lemma: 'بصاص', pos: 'adj', features: 'indef.acc.du', root: 'ب ص ص', gloss: 'gleaming' },
          ],
        },
        {
          id: 'qr2-65-009',
          ar: 'خَرِيْدَةٌ خُدُوْرُهَا الْأَقْفَاصُ، لَيْسَ لَهَا مِنْ حَبْسِهَا خَلاَصُ.',
          en: 'A pristine pearl whose only chambers are her cage -- she has no escape from her confinement.',
          tokens: [
            { surface: 'خَرِيْدَةٌ', lemma: 'خريدة', pos: 'noun', features: 'indef.nom', root: 'خ ر د', gloss: 'a pristine pearl' },
            { surface: 'خُدُوْرُهَا', lemma: 'خدر', pos: 'noun', features: 'nom.pl+3fs', root: 'خ د ر', gloss: 'her chambers' },
            { surface: 'الْأَقْفَاصُ', lemma: 'قفص', pos: 'noun', features: 'def.nom.pl', root: 'ق ف ص', gloss: 'the cages' },
            { surface: 'لَيْسَ', lemma: 'ليس', pos: 'verb', features: 'perf.3ms', root: 'ل ي س', gloss: 'there is not' },
            { surface: 'لَهَا', lemma: 'ل', pos: 'prep', features: '3fs', gloss: 'for her' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'حَبْسِهَا', lemma: 'حبس', pos: 'noun', features: 'gen+3fs', root: 'ح ب س', gloss: 'her confinement' },
            { surface: 'خَلاَصُ', lemma: 'خلاص', pos: 'noun', features: 'indef.nom', root: 'خ ل ص', gloss: 'deliverance, escape' },
          ],
        },
        {
          id: 'qr2-65-010',
          ar: 'تَحْبِسُهَا وَمَا لَهَا مِنْ ذَنْبِ، وَإِنَّمَا ذَاكَ لِفَرْطِ الْحُبِّ.',
          en: 'She is caged though she has no fault at all -- that is only from an excess of love.',
          tokens: [
            { surface: 'تَحْبِسُهَا', lemma: 'حبس', pos: 'verb', features: 'impf.3fs+3fs', root: 'ح ب س', gloss: 'it imprisons her' },
            { surface: 'وَمَا', lemma: 'ما', pos: 'part', features: 'conj+neg', gloss: 'though not' },
            { surface: 'لَهَا', lemma: 'ل', pos: 'prep', features: '3fs', gloss: 'for her' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'any' },
            { surface: 'ذَنْبِ', lemma: 'ذنب', pos: 'noun', features: 'indef.gen', root: 'ذ ن ب', gloss: 'sin, fault' },
            { surface: 'وَإِنَّمَا', lemma: 'إنما', pos: 'part', features: 'conj', gloss: 'and only, rather' },
            { surface: 'ذَاكَ', lemma: 'ذلك', pos: 'dem', gloss: 'that' },
            { surface: 'لِفَرْطِ', lemma: 'فرط', pos: 'noun', features: 'prep+gen.constr', root: 'ف ر ط', gloss: 'for excess of' },
            { surface: 'الْحُبِّ', lemma: 'حب', pos: 'noun', features: 'def.gen', root: 'ح ب ب', gloss: 'love' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَ يَظُنُّ الشَّاعِرُ أَنَّ الْبَبَّغَاءَ إِنْسَانٌ؟',
          options: ['بِسَبَبِ لِسَانِهَا النَّاطِقِ بِاللُّغَةِ الْفَصِيْحَةِ', 'لِأَنَّهَا تَطِيْرُ كَبَاقِيْ الطُّيُوْرِ', 'لِأَنَّهَا كَبِيْرَةُ الْجِسْمِ'],
          answer: 0,
          qEn: 'Why does the poet imagine the parrot is a human being?',
          optionsEn: ['Because of her tongue, speaking eloquent language', 'Because she flies like other birds', 'Because she is large in size'],
        },
        {
          q: 'مَاذَا يُقَدَّمُ لِلْبَبَّغَاءِ مِنَ الطَّعَامِ؟',
          options: ['الْجَوْزُ وَالْأَرُزُّ', 'اللَّحْمُ وَالْخُبْزُ', 'التُّفَّاحُ وَالْعِنَبُ'],
          answer: 0,
          qEn: 'What food is she given?',
          optionsEn: ['Walnuts and rice', 'Meat and bread', 'Apples and grapes'],
        },
        {
          q: 'لِمَاذَا تُحْبَسُ الْبَبَّغَاءُ فِي الْقَفَصِ بِحَسَبِ الْقَصِيْدَةِ؟',
          options: ['لِفَرْطِ الْحُبِّ لاَ لِذَنْبٍ اقْتَرَفَتْهُ', 'لِأَنَّهَا تُؤْذِيْ النَّاسَ', 'لِأَنَّهَا لاَ تَسْتَطِيْعُ الطَّيَرَانَ'],
          answer: 0,
          qEn: 'According to the poem, why is she kept caged?',
          optionsEn: ['From an excess of love, not for any fault of hers', 'Because she harms people', 'Because she cannot fly'],
        },
      ],
    },
  ],
};

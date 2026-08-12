// القراءة الراشدة, volume one, chapter twenty-seven -- الْبَرِيْدُ.
//
// Pages 101-103 (confirmed by the book's own "***" divider partway down
// page 103 -- chapter 28, also titled الْبَرِيْدُ but marked "(٢)" as a
// second installment on the same topic, starts cleanly at the top of
// page 104 with a picture of a post office and mail van). The "(١)"
// marker under this chapter's own title on page 101 is the print's own
// part-numbering, not part of the sentence content -- dropped here the
// same way chapter numbers themselves are dropped.
//
// register: 'dialogue', matching chapter-04.js/chapter-11.js exactly --
// a two-speaker back-and-forth (Khalid asking, Tariq -- whose brother
// Amir lives in Delhi -- explaining) with no narrative frame at all.
// Following chapter-11.js's own precedent for a continuous dialogue
// chapter with no print blank-line breaks: paragraphs are grouped by
// topic shift, not by page, and each speaker turn is its own sentence
// (a turn spanning more than one printed clause splits into multiple
// sentences at its own ؟/!/. boundaries, with the speaker label carried
// only on the first). One comprehension check per paragraph.
//
// Five topic paragraphs: (1) writing the letter and preparing it for the
// post -- envelope, address, stamp, or a postcard instead; (2) a short
// aside on the picture printed on the envelope/card, and why a sound
// Islamic government's post wouldn't carry one; (3) the mailbox --
// posting the letter, and how a post-office worker sorts what comes out
// of it; (4) the train that carries the sorted mail to its city; (5)
// delivery at the far end -- Tariq walks Khalid back from his own
// impatient guess (the addressee fetching it himself) to how it actually
// works: sorted and stamped again on arrival, then carried the last
// stretch by a postman.
//
// Homograph note: "حضر-فعل" (paragraph 5, "هَلْ يَحْضُرُ أَخُوْكَ" -- "does
// your brother come/attend") is a new key distinct from chapter-02.js's
// "حضر" -- that entry is the noun الْحَضَر ("settled residence, being at
// home", the ثنائية بدوي/حضري opposition), a different part of speech and
// sense from this chapter's Form I verb "to attend, come, be present"
// (same root, unrelated derived meaning, so no single dict entry could
// honestly cover both without breaking the pos-consistency check).
//
// "مسافر" (paragraph 1, "هَلْ أَحَدٌ مُسَافِرٌ؟") is its own new participial
// adjective entry rather than reusing the verb lemma "سافر" (already on
// the books from chapter-08.js/chapter-09.js/chapter-11.js, reused as-is
// for the finite verb "يُسَافِرُ" elsewhere in this same chapter) -- same
// root, but a verb dict entry can't honestly carry an adjective-tagged
// token without tripping the pos-consistency check, so the participle
// gets its own noun/adj-style entry, matching how chapter-26.js split
// "مطمئن" from its own verbal root.
//
// "أن" (both the light subjunctive أَنْ of "أَرَدْتُّ أَنْ أَكْتُبَ" and the
// doubled indicative أَنَّ/أَنَّهُ of "سَمِعْتُ أَنَّهُ فِيْ دِهْلِي") shares the
// book's one existing "أن" lemma throughout -- already established as a
// shared, undisambiguated entry book-wide (chapter-04.js and others tag
// both the light and doubled spellings under the same key), so no new
// key is created here either; each token's own `features` records which
// is which. Likewise "من-استفهام" (paragraph 3, "وَمَنْ يَأْخُذُ" -- "and
// who takes...?") reuses chapter-17.js's existing interrogative entry
// rather than colliding with the ordinary preposition "من".
//
// New place names: طَارِق and عَامِر (Tariq and his brother Amir, proper
// names) and دِهْلِي/كَلْكُتَّا (Delhi/Calcutta, the two cities Tariq's
// worked example sends letters to and from) -- all four tagged `proper`,
// none added to newWords' sibling checks since they're ordinary named
// entities like chapter-04.js's own Umar/Khalid, not epithets.
export const CHAPTER = {
  id: 'ch27',
  title: {
    ar: 'الْبَرِيْدُ',
    en: 'The Post'
  },
  pages: [
    101,
    102,
    103
  ],
  register: 'dialogue',
  newWords: [
    'طارق',
    'عامر',
    'دهلي',
    'غلاف',
    'عنوان',
    'ارسل',
    'مسافر',
    'بريد',
    'شكل',
    'طابع',
    'بطاقة',
    'صورة',
    'جاز',
    'روح',
    'حكومة',
    'اسلامي',
    'صندوق',
    'احمر',
    'فم',
    'ساعي',
    'فرز',
    'كلكتا',
    'شرق',
    'غرب',
    'ختم',
    'ناظر',
    'حضر-فعل',
    'مدير',
    'مكتب'
  ],
  lemmas: {
    خالد: { root: '—', pos: 'proper', gloss: 'Khalid (name)', content: false },
    ماذا: { root: '—', pos: 'part', gloss: 'what', content: false },
    كتب: { root: 'ك ت ب', pos: 'verb', gloss: 'to write', content: true },
    يا: { root: '—', pos: 'part', gloss: 'O (vocative)', content: false },
    طارق: { root: '—', pos: 'proper', gloss: 'Tariq (name)', content: false },
    أنا: { root: '—', pos: 'noun', gloss: 'I', content: false },
    كتاب: { root: 'ك ت ب', pos: 'noun', gloss: 'book; letter', content: true },
    إلى: { root: '—', pos: 'prep', gloss: 'to', content: false },
    أخ: { root: 'أ خ و', pos: 'noun', gloss: 'brother', content: true },
    عامر: { root: '—', pos: 'proper', gloss: 'Amir (name)', content: false },
    سمع: { root: 'س م ع', pos: 'verb', gloss: 'to hear', content: true },
    أن: { root: '—', pos: 'part', gloss: 'that; to (subjunctive)', content: false },
    في: { root: '—', pos: 'prep', gloss: 'in', content: false },
    دهلي: { root: '—', pos: 'proper', gloss: 'Delhi', content: false },
    هل: { root: '—', pos: 'part', gloss: '[yes/no question particle]', content: false },
    أحد: { root: 'أ ح د', pos: 'noun', gloss: 'anyone, someone', content: true },
    مسافر: { root: 'س ف ر', pos: 'adj', gloss: 'traveling', content: true },
    لا: { root: '—', pos: 'part', gloss: 'not, no', content: false },
    بل: { root: '—', pos: 'part', gloss: 'rather', content: false },
    سافر: { root: 'س ف ر', pos: 'verb', gloss: 'to travel', content: true },
    كيف: { root: 'ك ي ف', pos: 'part', gloss: 'how', content: false },
    ثم: { root: '—', pos: 'part', gloss: 'then', content: false },
    وضع: { root: 'و ض ع', pos: 'verb', gloss: 'to place, put', content: true },
    غلاف: { root: 'غ ل ف', pos: 'noun', gloss: 'envelope, cover', content: true },
    على: { root: '—', pos: 'prep', gloss: 'on', content: false },
    عنوان: { root: 'ع ن و ن', pos: 'noun', gloss: 'address', content: true },
    ارسل: { root: 'ر س ل', pos: 'verb', gloss: 'to send', content: true },
    نظر: { root: 'ن ظ ر', pos: 'verb', gloss: 'to look', content: true },
    هذا: { root: '—', pos: 'dem', gloss: 'this (m.)', content: false },
    بريد: { root: 'ب ر د', pos: 'noun', gloss: 'post, mail', content: true },
    ما: { root: '—', pos: 'rel', gloss: 'what, that which', content: false },
    شكل: { root: 'ش ك ل', pos: 'noun', gloss: 'shape, form', content: true },
    جانب: { root: 'ج ن ب', pos: 'noun', gloss: 'side', content: true },
    طابع: { root: 'ط ب ع', pos: 'noun', gloss: 'postage stamp', content: true },
    إذا: { root: '—', pos: 'part', gloss: 'if', content: false },
    أراد: { root: 'ر و د', pos: 'verb', gloss: 'to want', content: true },
    بطاقة: { root: 'ب ط ق', pos: 'noun', gloss: 'card', content: true },
    وجه: { root: 'و ج ه', pos: 'noun', gloss: 'face; side', content: true },
    هذه: { root: '—', pos: 'dem', gloss: 'this (f.)', content: false },
    صورة: { root: 'ص و ر', pos: 'noun', gloss: 'picture, image', content: true },
    قد: { root: '—', pos: 'part', gloss: 'indeed, already', content: false },
    ذو: { root: 'ذ و و', pos: 'noun', gloss: 'possessor of, one with', content: true },
    روح: { root: 'ر و ح', pos: 'noun', gloss: 'spirit, soul; living being', content: true },
    جاز: { root: 'ج و ز', pos: 'verb', gloss: 'to be permitted', content: true },
    إسلام: { root: 'س ل م', pos: 'proper', gloss: 'Islam', content: true },
    نعم: { root: '—', pos: 'part', gloss: 'yes', content: false },
    كان: { root: 'ك و ن', pos: 'verb', gloss: 'to be', content: true },
    حكومة: { root: 'ح ك م', pos: 'noun', gloss: 'government', content: true },
    اسلامي: { root: 'س ل م', pos: 'adj', gloss: 'Islamic', content: true },
    صحيح: { root: 'ص ح ح', pos: 'adj', gloss: 'correct, sound', content: true },
    لم: { root: '—', pos: 'part', gloss: 'not (+ jussive)', content: false },
    فعل: { root: 'ف ع ل', pos: 'verb', gloss: 'to do', content: true },
    صندوق: { root: 'ص ن د ق', pos: 'noun', gloss: 'box', content: true },
    رأى: { root: 'ر أ ي', pos: 'verb', gloss: 'to see', content: true },
    احمر: { root: 'ح م ر', pos: 'adj', gloss: 'red', content: true },
    فم: { root: 'ف و ه', pos: 'noun', gloss: 'mouth, opening, slot', content: true },
    مكتب: { root: 'ك ت ب', pos: 'noun', gloss: 'office', content: true },
    شارع: { root: 'ش ر ع', pos: 'noun', gloss: 'street', content: true },
    كثير: { root: 'ك ث ر', pos: 'adj', gloss: 'much, many', content: true },
    من: { root: '—', pos: 'prep', gloss: 'from', content: false },
    'من-استفهام': { root: '—', pos: 'part', gloss: 'who, whoever', content: false },
    أخذ: { root: 'أ خ ذ', pos: 'verb', gloss: 'to take', content: true },
    صنع: { root: 'ص ن ع', pos: 'verb', gloss: 'to make, do', content: true },
    حمل: { root: 'ح م ل', pos: 'verb', gloss: 'to carry', content: true },
    ساعي: { root: 'س ع ي', pos: 'noun', gloss: 'postman, courier', content: true },
    فرز: { root: 'ف ر ز', pos: 'verb', gloss: 'to sort', content: true },
    رجل: { root: 'ر ج ل', pos: 'noun', gloss: 'man', content: true },
    ذلك: { root: '—', pos: 'dem', gloss: 'that', content: false },
    كلكتا: { root: '—', pos: 'proper', gloss: 'Calcutta', content: false },
    شرق: { root: 'ش ر ق', pos: 'noun', gloss: 'east', content: true },
    غرب: { root: 'غ ر ب', pos: 'noun', gloss: 'west', content: true },
    ختم: { root: 'خ ت م', pos: 'verb', gloss: 'to stamp, seal', content: true },
    قطار: { root: 'ق ط ر', pos: 'noun', gloss: 'train', content: true },
    محطة: { root: 'ح ط ط', pos: 'noun', gloss: 'station', content: true },
    مكان: { root: 'ك و ن', pos: 'noun', gloss: 'place', content: true },
    'حضر-فعل': { root: 'ح ض ر', pos: 'verb', gloss: 'to attend, come, be present', content: true },
    أخو: { root: 'أ خ و', pos: 'noun', gloss: 'brother', content: true },
    ناظر: { root: 'ن ظ ر', pos: 'noun', gloss: 'overseer, master (of a station)', content: true },
    عرف: { root: 'ع ر ف', pos: 'verb', gloss: 'to know, recognize', content: true },
    احتاج: { root: 'ح و ج', pos: 'verb', gloss: 'to need', content: true },
    تعب: { root: 'ت ع ب', pos: 'noun', gloss: 'fatigue, trouble', content: true },
    وصل: { root: 'و ص ل', pos: 'verb', gloss: 'to arrive', content: true },
    نقل: { root: 'ن ق ل', pos: 'verb', gloss: 'to move, transfer', content: true },
    مدير: { root: 'د و ر', pos: 'noun', gloss: 'director, manager', content: true },
    رسالة: { root: 'ر س ل', pos: 'noun', gloss: 'letter, message', content: true },
    عجل: { root: 'ع ج ل', pos: 'verb', gloss: 'to hasten', content: true },
    أخبر: { root: 'خ ب ر', pos: 'verb', gloss: 'to inform', content: true },
    خبر: { root: 'خ ب ر', pos: 'noun', gloss: 'news, word (of something)', content: true },
    حتى: { root: '—', pos: 'part', gloss: 'so that, until', content: false },
    متى: { root: '—', pos: 'part', gloss: 'when', content: false },
    بعد: { root: '—', pos: 'prep', gloss: 'after', content: false },
    إنسان: { root: 'أ ن س', pos: 'noun', gloss: 'human being, person', content: true },
    هنالك: { root: '—', pos: 'adv', gloss: 'there', content: true },
    أيضا: { root: '—', pos: 'adv', gloss: 'also', content: true }
  },
  paragraphs: [
    {
      id: 'p1',
      en: 'Khalid finds Tariq writing a letter to his brother Amir in Delhi -- Tariq explains how it travels without either of them going anywhere: written, sealed in an envelope addressed and stamped, or written on a postcard instead.',
      sentences: [
        {
          id: 'qr1-27-001',
          page: 101,
          ar: 'خَالِدٌ: مَاذَا تَكْتُبُ يَا طَارِقُ؟',
          en: 'Khalid: What are you writing, Tariq?',
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'مَاذَا', lemma: 'ماذا', features: 'part', root: '—', pos: 'part', gloss: 'what' },
            { surface: 'تَكْتُبُ', lemma: 'كتب', features: 'impf.2ms', root: 'ك ت ب', pos: 'verb', gloss: 'are you writing' },
            { surface: 'يَا', lemma: 'يا', features: 'part', root: '—', pos: 'part', gloss: 'O (vocative)' },
            { surface: 'طَارِقُ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' }
          ]
        },
        {
          id: 'qr1-27-002',
          page: 101,
          ar: 'طَارِقٌ: أَنَا أَكْتُبُ كِتَاباً إِلَىٰ أَخِيْ عَامِرٍ.',
          en: 'Tariq: I am writing a letter to my brother Amir.',
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'أَنَا', lemma: 'أنا', features: 'nom.1s', root: '—', pos: 'noun', gloss: 'I' },
            { surface: 'أَكْتُبُ', lemma: 'كتب', features: 'impf.1s', root: 'ك ت ب', pos: 'verb', gloss: 'I write' },
            { surface: 'كِتَاباً', lemma: 'كتاب', features: 'indef.acc', root: 'ك ت ب', pos: 'noun', gloss: 'a letter' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'أَخِيْ', lemma: 'أخ', features: 'gen+1s', root: 'أ خ و', pos: 'noun', gloss: 'my brother' },
            { surface: 'عَامِرٍ', lemma: 'عامر', features: 'indef.gen', root: '—', pos: 'proper', gloss: 'Amir' }
          ]
        },
        {
          id: 'qr1-27-003',
          page: 101,
          ar: 'خَالِدٌ: سَمِعْتُ أَنَّهُ فِيْ دِهْلِي فَهَلْ أَحَدٌ مُسَافِرٌ؟',
          en: "Khalid: I heard he's in Delhi -- so is someone traveling there?",
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'سَمِعْتُ', lemma: 'سمع', features: 'perf.1s', root: 'س م ع', pos: 'verb', gloss: 'I heard' },
            { surface: 'أَنَّهُ', lemma: 'أن', features: 'part+3ms', root: '—', pos: 'part', gloss: 'that he' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'دِهْلِي', lemma: 'دهلي', features: 'gen', root: '—', pos: 'proper', gloss: 'Delhi' },
            { surface: 'فَهَلْ', lemma: 'هل', features: 'conj+part', root: '—', pos: 'part', gloss: 'so, is...?' },
            { surface: 'أَحَدٌ', lemma: 'أحد', features: 'indef.nom', root: 'أ ح د', pos: 'noun', gloss: 'anyone' },
            { surface: 'مُسَافِرٌ', lemma: 'مسافر', features: 'indef.nom', root: 'س ف ر', pos: 'adj', gloss: 'traveling' }
          ]
        },
        {
          id: 'qr1-27-004',
          page: 101,
          ar: 'طَارِقٌ: لَا بَلْ يُسَافِرُ كِتَابِيْ.',
          en: 'Tariq: No, rather my letter travels.',
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'no' },
            { surface: 'بَلْ', lemma: 'بل', features: 'part', root: '—', pos: 'part', gloss: 'rather' },
            { surface: 'يُسَافِرُ', lemma: 'سافر', features: 'impf.3ms', root: 'س ف ر', pos: 'verb', gloss: 'travels' },
            { surface: 'كِتَابِيْ', lemma: 'كتاب', features: 'nom+1s', root: 'ك ت ب', pos: 'noun', gloss: 'my letter' }
          ]
        },
        {
          id: 'qr1-27-005',
          page: 101,
          ar: 'خَالِدٌ: كَيْفَ يُسَافِرُ كِتَابُكَ يَا طَارِقُ؟',
          en: 'Khalid: How does your letter travel, Tariq?',
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'كَيْفَ', lemma: 'كيف', features: 'part', root: 'ك ي ف', pos: 'part', gloss: 'how' },
            { surface: 'يُسَافِرُ', lemma: 'سافر', features: 'impf.3ms', root: 'س ف ر', pos: 'verb', gloss: 'does travel' },
            { surface: 'كِتَابُكَ', lemma: 'كتاب', features: 'nom+2ms', root: 'ك ت ب', pos: 'noun', gloss: 'your letter' },
            { surface: 'يَا', lemma: 'يا', features: 'part', root: '—', pos: 'part', gloss: 'O (vocative)' },
            { surface: 'طَارِقُ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' }
          ]
        },
        {
          id: 'qr1-27-006',
          page: 101,
          ar: 'طَارِقٌ: أَنَا أَكْتُبُ الْكِتَابَ ثُمَّ أَضَعُهُ فِي الْغِلَافِ وَأَكْتُبُ عَلَىٰ الْغِلَافِ عُنْوَانَ أَخِيْ ثُمَّ أُرْسِلُهُ، اُنْظُرْ هٰذَا غِلَافُ الْبَرِيْدِ.',
          en: 'Tariq: I write the letter, then I put it in the envelope, and I write my brother’s address on the envelope, then I send it -- look, this is a mail envelope.',
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'أَنَا', lemma: 'أنا', features: 'nom.1s', root: '—', pos: 'noun', gloss: 'I' },
            { surface: 'أَكْتُبُ', lemma: 'كتب', features: 'impf.1s', root: 'ك ت ب', pos: 'verb', gloss: 'I write' },
            { surface: 'الْكِتَابَ', lemma: 'كتاب', features: 'def.acc', root: 'ك ت ب', pos: 'noun', gloss: 'the letter' },
            { surface: 'ثُمَّ', lemma: 'ثم', features: 'part', root: '—', pos: 'part', gloss: 'then' },
            { surface: 'أَضَعُهُ', lemma: 'وضع', features: 'impf.1s+3ms', root: 'و ض ع', pos: 'verb', gloss: 'I put it' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'الْغِلَافِ', lemma: 'غلاف', features: 'def.gen', root: 'غ ل ف', pos: 'noun', gloss: 'the envelope' },
            { surface: 'وَأَكْتُبُ', lemma: 'كتب', features: 'conj+impf.1s', root: 'ك ت ب', pos: 'verb', gloss: 'and I write' },
            { surface: 'عَلَىٰ', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'on' },
            { surface: 'الْغِلَافِ', lemma: 'غلاف', features: 'def.gen', root: 'غ ل ف', pos: 'noun', gloss: 'the envelope' },
            { surface: 'عُنْوَانَ', lemma: 'عنوان', features: 'acc.constr', root: 'ع ن و ن', pos: 'noun', gloss: 'the address of' },
            { surface: 'أَخِيْ', lemma: 'أخ', features: 'gen+1s', root: 'أ خ و', pos: 'noun', gloss: 'my brother' },
            { surface: 'ثُمَّ', lemma: 'ثم', features: 'part', root: '—', pos: 'part', gloss: 'then' },
            { surface: 'أُرْسِلُهُ', lemma: 'ارسل', features: 'impf.1s+3ms', root: 'ر س ل', pos: 'verb', gloss: 'I send it' },
            { surface: 'اُنْظُرْ', lemma: 'نظر', features: 'imp.2ms', root: 'ن ظ ر', pos: 'verb', gloss: 'look!' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'غِلَافُ', lemma: 'غلاف', features: 'nom.constr', root: 'غ ل ف', pos: 'noun', gloss: 'the envelope of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' }
          ]
        },
        {
          id: 'qr1-27-007',
          page: 101,
          ar: 'خَالِدٌ: وَمَا هٰذَا الشَّكْلُ فِيْ جَانِبِ الْغِلَافِ يَا طَارِقُ؟',
          en: 'Khalid: And what’s this shape on the side of the envelope, Tariq?',
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'وَمَا', lemma: 'ما', features: 'conj+rel', root: '—', pos: 'rel', gloss: 'and what' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الشَّكْلُ', lemma: 'شكل', features: 'def.nom', root: 'ش ك ل', pos: 'noun', gloss: 'the shape' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'جَانِبِ', lemma: 'جانب', features: 'gen.constr', root: 'ج ن ب', pos: 'noun', gloss: 'the side of' },
            { surface: 'الْغِلَافِ', lemma: 'غلاف', features: 'def.gen', root: 'غ ل ف', pos: 'noun', gloss: 'the envelope' },
            { surface: 'يَا', lemma: 'يا', features: 'part', root: '—', pos: 'part', gloss: 'O (vocative)' },
            { surface: 'طَارِقُ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' }
          ]
        },
        {
          id: 'qr1-27-008',
          page: 101,
          ar: 'طَارِقٌ: هٰذَا طَابِعُ الْبَرِيْدِ، وَإِذَا أَرَدْتُّ أَنْ أَكْتُبَ بِطَاقَةً أَكْتُبُ الْعُنْوَانَ عَلَىٰ وَجْهِ الْبِطَاقَةِ.',
          en: 'Tariq: This is a postage stamp, and if I want to write a postcard, I write the address on the face of the card.',
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'طَابِعُ', lemma: 'طابع', features: 'nom.constr', root: 'ط ب ع', pos: 'noun', gloss: 'the stamp of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' },
            { surface: 'وَإِذَا', lemma: 'إذا', features: 'conj+part', root: '—', pos: 'part', gloss: 'and if' },
            { surface: 'أَرَدْتُّ', lemma: 'أراد', features: 'perf.1s', root: 'ر و د', pos: 'verb', gloss: 'I wanted' },
            { surface: 'أَنْ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'to' },
            { surface: 'أَكْتُبَ', lemma: 'كتب', features: 'impf.1s', root: 'ك ت ب', pos: 'verb', gloss: 'write' },
            { surface: 'بِطَاقَةً', lemma: 'بطاقة', features: 'indef.acc', root: 'ب ط ق', pos: 'noun', gloss: 'a card' },
            { surface: 'أَكْتُبُ', lemma: 'كتب', features: 'impf.1s', root: 'ك ت ب', pos: 'verb', gloss: 'I write' },
            { surface: 'الْعُنْوَانَ', lemma: 'عنوان', features: 'def.acc', root: 'ع ن و ن', pos: 'noun', gloss: 'the address' },
            { surface: 'عَلَىٰ', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'on' },
            { surface: 'وَجْهِ', lemma: 'وجه', features: 'gen.constr', root: 'و ج ه', pos: 'noun', gloss: 'the face of' },
            { surface: 'الْبِطَاقَةِ', lemma: 'بطاقة', features: 'def.gen', root: 'ب ط ق', pos: 'noun', gloss: 'the card' }
          ]
        },
        {
          id: 'qr1-27-009',
          page: 101,
          ar: 'اُنْظُرْ هٰذِهِ بِطَاقَةٌ وَفِيْ جَانِبِهَا طَابِعُ الْبَرِيْدِ.',
          en: 'Look, this is a card, and on its side is a postage stamp.',
          tokens: [
            { surface: 'اُنْظُرْ', lemma: 'نظر', features: 'imp.2ms', root: 'ن ظ ر', pos: 'verb', gloss: 'look!' },
            { surface: 'هٰذِهِ', lemma: 'هذه', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'بِطَاقَةٌ', lemma: 'بطاقة', features: 'indef.nom', root: 'ب ط ق', pos: 'noun', gloss: 'a card' },
            { surface: 'وَفِيْ', lemma: 'في', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and in' },
            { surface: 'جَانِبِهَا', lemma: 'جانب', features: 'gen+3fs', root: 'ج ن ب', pos: 'noun', gloss: 'its side' },
            { surface: 'طَابِعُ', lemma: 'طابع', features: 'nom.constr', root: 'ط ب ع', pos: 'noun', gloss: 'the stamp of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' }
          ]
        }
      ],
      checks: [
        {
          q: 'كَيْفَ يُسَافِرُ كِتَابُ طَارِقٍ إِلَىٰ أَخِيْهِ؟',
          options: [ 'يُسَافِرُ الْكِتَابُ نَفْسُهُ بَعْدَ إِرْسَالِهِ', 'يُسَافِرُ أَحَدٌ مِنَ الْأُسْرَةِ إِلَىٰ دِهْلِيْ', 'يَتَّصِلُ بِأَخِيْهِ بِالْهَاتِفِ' ],
          answer: 0,
          qEn: "How does Tariq say his letter to his brother travels?",
          optionsEn: [ 'The letter itself travels, once sent', 'Someone in the family travels to Delhi', 'He calls his brother by telephone' ]
        }
      ]
    },
    {
      id: 'p2',
      en: 'Khalid notices a picture printed on the envelope and asks about it, since he has heard that pictures of living beings are not allowed in Islam -- Tariq agrees, and says a properly Islamic government’s post wouldn’t carry one.',
      sentences: [
        {
          id: 'qr1-27-010',
          page: 102,
          ar: 'خَالِدٌ: وَمَا هٰذِهِ الصُّوْرَةُ يَا طَارِقُ!',
          en: 'Khalid: And what is this picture, Tariq!',
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'وَمَا', lemma: 'ما', features: 'conj+rel', root: '—', pos: 'rel', gloss: 'and what' },
            { surface: 'هٰذِهِ', lemma: 'هذه', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الصُّوْرَةُ', lemma: 'صورة', features: 'def.nom', root: 'ص و ر', pos: 'noun', gloss: 'the picture' },
            { surface: 'يَا', lemma: 'يا', features: 'part', root: '—', pos: 'part', gloss: 'O (vocative)' },
            { surface: 'طَارِقُ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' }
          ]
        },
        {
          id: 'qr1-27-011',
          page: 102,
          ar: 'هٰذِهِ صُوْرَةُ إِنْسَانٍ وَقَدْ سَمِعْتُ أَنَّ صُوْرَةَ ذِيْ رُوْحٍ لَا تَجُوْزُ فِي الإِسْلَامِ.',
          en: 'This is a picture of a person, and I have heard that a picture of a living being is not permitted in Islam.',
          tokens: [
            { surface: 'هٰذِهِ', lemma: 'هذه', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'صُوْرَةُ', lemma: 'صورة', features: 'nom.constr', root: 'ص و ر', pos: 'noun', gloss: 'a picture of' },
            { surface: 'إِنْسَانٍ', lemma: 'إنسان', features: 'indef.gen', root: 'أ ن س', pos: 'noun', gloss: 'a person' },
            { surface: 'وَقَدْ', lemma: 'قد', features: 'conj+part', root: '—', pos: 'part', gloss: 'and indeed' },
            { surface: 'سَمِعْتُ', lemma: 'سمع', features: 'perf.1s', root: 'س م ع', pos: 'verb', gloss: 'I have heard' },
            { surface: 'أَنَّ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'that' },
            { surface: 'صُوْرَةَ', lemma: 'صورة', features: 'acc.constr', root: 'ص و ر', pos: 'noun', gloss: 'a picture of' },
            { surface: 'ذِيْ', lemma: 'ذو', features: 'gen.constr', root: 'ذ و و', pos: 'noun', gloss: 'one possessing' },
            { surface: 'رُوْحٍ', lemma: 'روح', features: 'indef.gen', root: 'ر و ح', pos: 'noun', gloss: 'a soul, a living being' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'not' },
            { surface: 'تَجُوْزُ', lemma: 'جاز', features: 'impf.3fs', root: 'ج و ز', pos: 'verb', gloss: 'is permitted' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'الإِسْلَامِ', lemma: 'إسلام', features: 'def.gen', root: 'س ل م', pos: 'proper', gloss: 'Islam' }
          ]
        },
        {
          id: 'qr1-27-012',
          page: 102,
          ar: 'طَارِقٌ: نَعَمْ! إِذَا كَانَتْ حُكُوْمَةٌ إِسْلَامِيَّةٌ صَحِيْحَةٌ لَمْ تَكُنْ صُوْرَةٌ عَلَىٰ غِلَافِ الْبَرِيْدِ وَالْبِطَاقَةِ.',
          en: "Tariq: Yes! If it were a proper Islamic government, there wouldn't be a picture on the mail envelope and card.",
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'نَعَمْ', lemma: 'نعم', features: 'part', root: '—', pos: 'part', gloss: 'yes' },
            { surface: 'إِذَا', lemma: 'إذا', features: 'part', root: '—', pos: 'part', gloss: 'if' },
            { surface: 'كَانَتْ', lemma: 'كان', features: 'perf.3fs', root: 'ك و ن', pos: 'verb', gloss: 'were' },
            { surface: 'حُكُوْمَةٌ', lemma: 'حكومة', features: 'indef.nom', root: 'ح ك م', pos: 'noun', gloss: 'a government' },
            { surface: 'إِسْلَامِيَّةٌ', lemma: 'اسلامي', features: 'indef.nom.f', root: 'س ل م', pos: 'adj', gloss: 'Islamic' },
            { surface: 'صَحِيْحَةٌ', lemma: 'صحيح', features: 'indef.nom.f', root: 'ص ح ح', pos: 'adj', gloss: 'proper, sound' },
            { surface: 'لَمْ', lemma: 'لم', features: 'part', root: '—', pos: 'part', gloss: 'not' },
            { surface: 'تَكُنْ', lemma: 'كان', features: 'impf.3fs', root: 'ك و ن', pos: 'verb', gloss: 'would be' },
            { surface: 'صُوْرَةٌ', lemma: 'صورة', features: 'indef.nom', root: 'ص و ر', pos: 'noun', gloss: 'a picture' },
            { surface: 'عَلَىٰ', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'on' },
            { surface: 'غِلَافِ', lemma: 'غلاف', features: 'gen.constr', root: 'غ ل ف', pos: 'noun', gloss: 'the envelope of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' },
            { surface: 'وَالْبِطَاقَةِ', lemma: 'بطاقة', features: 'conj+def.gen', root: 'ب ط ق', pos: 'noun', gloss: 'and the card' }
          ]
        }
      ],
      checks: [
        {
          q: 'لِمَاذَا قَالَ طَارِقٌ إِنَّهُ لَا تَكُوْنُ صُوْرَةٌ عَلَىٰ الْغِلَافِ فِيْ حُكُوْمَةٍ إِسْلَامِيَّةٍ صَحِيْحَةٍ؟',
          options: [ 'لِأَنَّ صُوْرَةَ ذِيْ رُوْحٍ لَا تَجُوْزُ فِي الإِسْلَامِ', 'لِأَنَّ الصُّوَرَ غَالِيَةُ الثَّمَنِ', 'لِأَنَّ مَكْتَبَ الْبَرِيْدِ لَا يَمْلِكُ حِبْراً' ],
          answer: 0,
          qEn: 'Why does Tariq say a picture would not appear on the envelope under a properly Islamic government?',
          optionsEn: [ 'Because a picture of a living being is not permitted in Islam', 'Because pictures are too expensive to print', 'Because the post office has no ink' ]
        }
      ]
    },
    {
      id: 'p3',
      en: 'Khalid asks what happens after the address is written -- Tariq explains the letter goes into a red mailbox out on the streets, and a postal worker sorts what a postman brings in from those boxes to the post office, stamping and routing each letter toward its city.',
      sentences: [
        {
          id: 'qr1-27-013',
          page: 102,
          ar: 'خَالِدٌ: ثُمَّ مَاذَا تَفْعَلُ يَا أَخِيْ إِذَا كَتَبْتَ الْعُنْوَانَ؟',
          en: 'Khalid: Then what do you do, brother, once you’ve written the address?',
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'ثُمَّ', lemma: 'ثم', features: 'part', root: '—', pos: 'part', gloss: 'then' },
            { surface: 'مَاذَا', lemma: 'ماذا', features: 'part', root: '—', pos: 'part', gloss: 'what' },
            { surface: 'تَفْعَلُ', lemma: 'فعل', features: 'impf.2ms', root: 'ف ع ل', pos: 'verb', gloss: 'do you do' },
            { surface: 'يَا', lemma: 'يا', features: 'part', root: '—', pos: 'part', gloss: 'O (vocative)' },
            { surface: 'أَخِيْ', lemma: 'أخ', features: 'nom+1s', root: 'أ خ و', pos: 'noun', gloss: 'my brother' },
            { surface: 'إِذَا', lemma: 'إذا', features: 'part', root: '—', pos: 'part', gloss: 'if, once' },
            { surface: 'كَتَبْتَ', lemma: 'كتب', features: 'perf.2ms', root: 'ك ت ب', pos: 'verb', gloss: 'you have written' },
            { surface: 'الْعُنْوَانَ', lemma: 'عنوان', features: 'def.acc', root: 'ع ن و ن', pos: 'noun', gloss: 'the address' }
          ]
        },
        {
          id: 'qr1-27-014',
          page: 102,
          ar: 'طَارِقٌ: أَضَعُ الْكِتَابَ فِيْ صُنْدُوْقِ الْبَرِيْدِ.',
          en: 'Tariq: I put the letter in the mailbox.',
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'أَضَعُ', lemma: 'وضع', features: 'impf.1s', root: 'و ض ع', pos: 'verb', gloss: 'I put' },
            { surface: 'الْكِتَابَ', lemma: 'كتاب', features: 'def.acc', root: 'ك ت ب', pos: 'noun', gloss: 'the letter' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'صُنْدُوْقِ', lemma: 'صندوق', features: 'gen.constr', root: 'ص ن د ق', pos: 'noun', gloss: 'the box of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' }
          ]
        },
        {
          id: 'qr1-27-015',
          page: 102,
          ar: 'خَالِدٌ: وَمَا صُنْدُوْقُ الْبَرِيْدِ؟',
          en: 'Khalid: And what is the mailbox?',
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'وَمَا', lemma: 'ما', features: 'conj+rel', root: '—', pos: 'rel', gloss: 'and what' },
            { surface: 'صُنْدُوْقُ', lemma: 'صندوق', features: 'nom.constr', root: 'ص ن د ق', pos: 'noun', gloss: 'the box of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' }
          ]
        },
        {
          id: 'qr1-27-016',
          page: 102,
          ar: 'طَارِقٌ: هَلْ رَأَيْتَ صُنْدُوْقاً أَحْمَرَ لَهُ فَمٌ فِيْ مَكْتَبِ الْبَرِيْدِ وَعَلَىٰ الشَّوَارِعِ؟',
          en: 'Tariq: Have you seen a red box with a slot at the post office and on the streets?',
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'هَلْ', lemma: 'هل', features: 'part', root: '—', pos: 'part', gloss: '[question]' },
            { surface: 'رَأَيْتَ', lemma: 'رأى', features: 'perf.2ms', root: 'ر أ ي', pos: 'verb', gloss: 'have you seen' },
            { surface: 'صُنْدُوْقاً', lemma: 'صندوق', features: 'indef.acc', root: 'ص ن د ق', pos: 'noun', gloss: 'a box' },
            { surface: 'أَحْمَرَ', lemma: 'احمر', features: 'indef.acc', root: 'ح م ر', pos: 'adj', gloss: 'red' },
            { surface: 'لَهُ', lemma: 'من', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'that has' },
            { surface: 'فَمٌ', lemma: 'فم', features: 'indef.nom', root: 'ف و ه', pos: 'noun', gloss: 'a mouth, a slot' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'مَكْتَبِ', lemma: 'مكتب', features: 'gen.constr', root: 'ك ت ب', pos: 'noun', gloss: 'the office of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' },
            { surface: 'وَعَلَىٰ', lemma: 'على', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and on' },
            { surface: 'الشَّوَارِعِ', lemma: 'شارع', features: 'pl.def.gen', root: 'ش ر ع', pos: 'noun', gloss: 'the streets' }
          ]
        },
        {
          id: 'qr1-27-017',
          page: 102,
          ar: 'خَالِدٌ: نَعَمْ! رَأَيْتُهُ كَثِيْراً.',
          en: 'Khalid: Yes! I’ve seen it a lot.',
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'نَعَمْ', lemma: 'نعم', features: 'part', root: '—', pos: 'part', gloss: 'yes' },
            { surface: 'رَأَيْتُهُ', lemma: 'رأى', features: 'perf.1s+3ms', root: 'ر أ ي', pos: 'verb', gloss: 'I have seen it' },
            { surface: 'كَثِيْراً', lemma: 'كثير', features: 'indef.acc', root: 'ك ث ر', pos: 'adj', gloss: 'a lot' }
          ]
        },
        {
          id: 'qr1-27-018',
          page: 102,
          ar: 'وَمَنْ يَأْخُذُ هٰذَا الْكِتَابَ مِنْ صُنْدُوْقِ الْبَرِيْدِ وَكَيْفَ يَصْنَعُ؟',
          en: 'And who takes this letter from the mailbox, and how does he do it?',
          tokens: [
            { surface: 'وَمَنْ', lemma: 'من-استفهام', features: 'conj+part', root: '—', pos: 'part', gloss: 'and who' },
            { surface: 'يَأْخُذُ', lemma: 'أخذ', features: 'impf.3ms', root: 'أ خ ذ', pos: 'verb', gloss: 'takes' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'الْكِتَابَ', lemma: 'كتاب', features: 'def.acc', root: 'ك ت ب', pos: 'noun', gloss: 'the letter' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'صُنْدُوْقِ', lemma: 'صندوق', features: 'gen.constr', root: 'ص ن د ق', pos: 'noun', gloss: 'the box of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' },
            { surface: 'وَكَيْفَ', lemma: 'كيف', features: 'conj+part', root: 'ك ي ف', pos: 'part', gloss: 'and how' },
            { surface: 'يَصْنَعُ', lemma: 'صنع', features: 'impf.3ms', root: 'ص ن ع', pos: 'verb', gloss: 'does he do it' }
          ]
        },
        {
          id: 'qr1-27-019',
          page: 102,
          ar: 'طَارِقٌ: يَحْمِلُ السَّاعِيْ الْكُتُبَ إِلَىٰ مَكْتَبِ الْبَرِيْدِ فَيُفْرِزُهَا رَجُلٌ مِنْ رِجَالِ الْبَرِيْدِ، هٰذَا إِلَىٰ دِهْلِيْ وَذٰلِكَ إِلَىٰ كَلْكُتَّا، وَهٰذَا إِلَىٰ الشَّرْقِ وَذٰلِكَ إِلَىٰ الْغَرْبِ وَيَخْتِمُهَا.',
          en: 'Tariq: The postman carries the letters to the post office, and a postal worker sorts them: this one to Delhi and that one to Calcutta, this one to the east and that one to the west, and stamps them.',
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'يَحْمِلُ', lemma: 'حمل', features: 'impf.3ms', root: 'ح م ل', pos: 'verb', gloss: 'carries' },
            { surface: 'السَّاعِيْ', lemma: 'ساعي', features: 'def.nom', root: 'س ع ي', pos: 'noun', gloss: 'the postman' },
            { surface: 'الْكُتُبَ', lemma: 'كتاب', features: 'pl.def.acc', root: 'ك ت ب', pos: 'noun', gloss: 'the letters' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'مَكْتَبِ', lemma: 'مكتب', features: 'gen.constr', root: 'ك ت ب', pos: 'noun', gloss: 'the office of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' },
            { surface: 'فَيُفْرِزُهَا', lemma: 'فرز', features: 'conj+impf.3ms+3fs', root: 'ف ر ز', pos: 'verb', gloss: 'and sorts them' },
            { surface: 'رَجُلٌ', lemma: 'رجل', features: 'indef.nom', root: 'ر ج ل', pos: 'noun', gloss: 'a man' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'رِجَالِ', lemma: 'رجل', features: 'pl.gen.constr', root: 'ر ج ل', pos: 'noun', gloss: 'the men of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this one' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'دِهْلِيْ', lemma: 'دهلي', features: 'gen', root: '—', pos: 'proper', gloss: 'Delhi' },
            { surface: 'وَذٰلِكَ', lemma: 'ذلك', features: 'conj+dem', root: '—', pos: 'dem', gloss: 'and that one' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'كَلْكُتَّا', lemma: 'كلكتا', features: 'gen', root: '—', pos: 'proper', gloss: 'Calcutta' },
            { surface: 'وَهٰذَا', lemma: 'هذا', features: 'conj+dem', root: '—', pos: 'dem', gloss: 'and this one' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'الشَّرْقِ', lemma: 'شرق', features: 'def.gen', root: 'ش ر ق', pos: 'noun', gloss: 'the east' },
            { surface: 'وَذٰلِكَ', lemma: 'ذلك', features: 'conj+dem', root: '—', pos: 'dem', gloss: 'and that one' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'الْغَرْبِ', lemma: 'غرب', features: 'def.gen', root: 'غ ر ب', pos: 'noun', gloss: 'the west' },
            { surface: 'وَيَخْتِمُهَا', lemma: 'ختم', features: 'conj+impf.3ms+3fs', root: 'خ ت م', pos: 'verb', gloss: 'and stamps them' }
          ]
        }
      ],
      checks: [
        {
          q: 'مَاذَا يَفْعَلُ رَجُلٌ مِنْ رِجَالِ الْبَرِيْدِ بِالْكُتُبِ الَّتِيْ يُحْضِرُهَا السَّاعِيْ؟',
          options: [ 'يُفْرِزُهَا حَسَبَ وِجْهَتِهَا وَيَخْتِمُهَا', 'يَقْرَؤُهَا كُلَّهَا بِصَوْتٍ عَالٍ', 'يَحْرِقُ الثَّقِيْلَ مِنْهَا' ],
          answer: 0,
          qEn: 'What does the postal worker at the post office do with the letters the postman brings in?',
          optionsEn: [ 'Sorts them by destination and stamps them', 'Reads them all aloud', 'Burns the heavy ones' ]
        }
      ]
    },
    {
      id: 'p4',
      en: 'Tariq explains the next leg of the journey: the sorted letters are carried to the station and loaded onto the train that runs to their city, so a Delhi letter travels on the Delhi train and a Calcutta letter on the Calcutta train.',
      sentences: [
        {
          id: 'qr1-27-020',
          page: 103,
          ar: 'خَالِدٌ: ثُمَّ مَاذَا؟',
          en: 'Khalid: Then what?',
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'ثُمَّ', lemma: 'ثم', features: 'part', root: '—', pos: 'part', gloss: 'then' },
            { surface: 'مَاذَا', lemma: 'ماذا', features: 'part', root: '—', pos: 'part', gloss: 'what' }
          ]
        },
        {
          id: 'qr1-27-021',
          page: 103,
          ar: 'طَارِقٌ: ثُمَّ تُحْمَلُ هٰذِهِ الْكُتُبُ إِلَى الْمَحَطَّةِ ثُمَّ تُوْضَعُ عَلَىٰ الْقِطَارِ، وَيَحْمِلُهَا الْقِطَارُ إِلَىٰ مَكَانِهَا، فَكِتَابُ دِهْلِيْ يُسَافِرُ بِهِ قِطَارُ دِهْلِيْ، وَكِتَابُ كَلْكُتَّا يُسَافِرُ بِهِ قِطَارُ كَلْكُتَّا إِلَىٰ كَلْكُتَّا.',
          en: 'Tariq: Then these letters are carried to the station, then placed on the train, and the train carries them to their place: the Delhi letter travels on the Delhi train, and the Calcutta letter travels on the Calcutta train to Calcutta.',
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'ثُمَّ', lemma: 'ثم', features: 'part', root: '—', pos: 'part', gloss: 'then' },
            { surface: 'تُحْمَلُ', lemma: 'حمل', features: 'impf.pass.3fs', root: 'ح م ل', pos: 'verb', gloss: 'is carried' },
            { surface: 'هٰذِهِ', lemma: 'هذه', features: 'dem', root: '—', pos: 'dem', gloss: 'these' },
            { surface: 'الْكُتُبُ', lemma: 'كتاب', features: 'pl.def.nom', root: 'ك ت ب', pos: 'noun', gloss: 'the letters' },
            { surface: 'إِلَى', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'الْمَحَطَّةِ', lemma: 'محطة', features: 'def.gen', root: 'ح ط ط', pos: 'noun', gloss: 'the station' },
            { surface: 'ثُمَّ', lemma: 'ثم', features: 'part', root: '—', pos: 'part', gloss: 'then' },
            { surface: 'تُوْضَعُ', lemma: 'وضع', features: 'impf.pass.3fs', root: 'و ض ع', pos: 'verb', gloss: 'is placed' },
            { surface: 'عَلَىٰ', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'on' },
            { surface: 'الْقِطَارِ', lemma: 'قطار', features: 'def.gen', root: 'ق ط ر', pos: 'noun', gloss: 'the train' },
            { surface: 'وَيَحْمِلُهَا', lemma: 'حمل', features: 'conj+impf.3ms+3fs', root: 'ح م ل', pos: 'verb', gloss: 'and carries them' },
            { surface: 'الْقِطَارُ', lemma: 'قطار', features: 'def.nom', root: 'ق ط ر', pos: 'noun', gloss: 'the train' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'مَكَانِهَا', lemma: 'مكان', features: 'gen+3fs', root: 'ك و ن', pos: 'noun', gloss: 'their place' },
            { surface: 'فَكِتَابُ', lemma: 'كتاب', features: 'conj+nom.constr', root: 'ك ت ب', pos: 'noun', gloss: 'so the letter of' },
            { surface: 'دِهْلِيْ', lemma: 'دهلي', features: 'gen', root: '—', pos: 'proper', gloss: 'Delhi' },
            { surface: 'يُسَافِرُ', lemma: 'سافر', features: 'impf.3ms', root: 'س ف ر', pos: 'verb', gloss: 'travels' },
            { surface: 'بِهِ', lemma: 'من', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'by means of it' },
            { surface: 'قِطَارُ', lemma: 'قطار', features: 'nom.constr', root: 'ق ط ر', pos: 'noun', gloss: 'the train of' },
            { surface: 'دِهْلِيْ', lemma: 'دهلي', features: 'gen', root: '—', pos: 'proper', gloss: 'Delhi' },
            { surface: 'وَكِتَابُ', lemma: 'كتاب', features: 'conj+nom.constr', root: 'ك ت ب', pos: 'noun', gloss: 'and the letter of' },
            { surface: 'كَلْكُتَّا', lemma: 'كلكتا', features: 'gen', root: '—', pos: 'proper', gloss: 'Calcutta' },
            { surface: 'يُسَافِرُ', lemma: 'سافر', features: 'impf.3ms', root: 'س ف ر', pos: 'verb', gloss: 'travels' },
            { surface: 'بِهِ', lemma: 'من', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'by means of it' },
            { surface: 'قِطَارُ', lemma: 'قطار', features: 'nom.constr', root: 'ق ط ر', pos: 'noun', gloss: 'the train of' },
            { surface: 'كَلْكُتَّا', lemma: 'كلكتا', features: 'gen', root: '—', pos: 'proper', gloss: 'Calcutta' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'كَلْكُتَّا', lemma: 'كلكتا', features: 'gen', root: '—', pos: 'proper', gloss: 'Calcutta' }
          ]
        }
      ],
      checks: [
        {
          q: 'كَيْفَ يَصِلُ الْكِتَابُ الْمَفْرُوْزُ مِنْ مَكْتَبِ الْبَرِيْدِ إِلَىٰ مَدِيْنَتِهِ؟',
          options: [ 'يُحْمَلُ إِلَى الْمَحَطَّةِ وَيُوْضَعُ عَلَىٰ قِطَارِهَا', 'يُنْقَلُ بِالسَّيَّارَةِ', 'يُنْقَلُ بِالطَّائِرَةِ' ],
          answer: 0,
          qEn: 'How does a sorted letter reach its destination city, according to Tariq?',
          optionsEn: [ 'It is carried to the station and put on the train for that city', 'It is driven there by car', 'It is flown there by plane' ]
        }
      ]
    },
    {
      id: 'p5',
      en: "Khalid guesses the letter's recipient has to fetch it himself at the station -- Tariq corrects him twice: it moves on to the post office instead, is sorted and stamped there too, and only then does a postman carry it the final stretch to the door.",
      sentences: [
        {
          id: 'qr1-27-022',
          page: 103,
          ar: 'خَالِدٌ: وَهَلْ يَحْضُرُ أَخُوْكَ إِلَىٰ مَحَطَّةِ دِهْلِيْ وَيَأْخُذُ كِتَابَهُ؟',
          en: 'Khalid: And does your brother come to the Delhi station and take his letter?',
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'وَهَلْ', lemma: 'هل', features: 'conj+part', root: '—', pos: 'part', gloss: 'and, [question]' },
            { surface: 'يَحْضُرُ', lemma: 'حضر-فعل', features: 'impf.3ms', root: 'ح ض ر', pos: 'verb', gloss: 'does come' },
            { surface: 'أَخُوْكَ', lemma: 'أخو', features: 'nom+2ms', root: 'أ خ و', pos: 'noun', gloss: 'your brother' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'مَحَطَّةِ', lemma: 'محطة', features: 'gen.constr', root: 'ح ط ط', pos: 'noun', gloss: 'the station of' },
            { surface: 'دِهْلِيْ', lemma: 'دهلي', features: 'gen', root: '—', pos: 'proper', gloss: 'Delhi' },
            { surface: 'وَيَأْخُذُ', lemma: 'أخذ', features: 'conj+impf.3ms', root: 'أ خ ذ', pos: 'verb', gloss: 'and take' },
            { surface: 'كِتَابَهُ', lemma: 'كتاب', features: 'acc+3ms', root: 'ك ت ب', pos: 'noun', gloss: 'his letter' }
          ]
        },
        {
          id: 'qr1-27-023',
          page: 103,
          ar: 'وَهَلْ يَعْرِفُهُ نَاظِرُ الْمَحَطَّةِ؟',
          en: 'And does the station master know him?',
          tokens: [
            { surface: 'وَهَلْ', lemma: 'هل', features: 'conj+part', root: '—', pos: 'part', gloss: 'and, [question]' },
            { surface: 'يَعْرِفُهُ', lemma: 'عرف', features: 'impf.3ms+3ms', root: 'ع ر ف', pos: 'verb', gloss: 'does know him' },
            { surface: 'نَاظِرُ', lemma: 'ناظر', features: 'nom.constr', root: 'ن ظ ر', pos: 'noun', gloss: 'the overseer of' },
            { surface: 'الْمَحَطَّةِ', lemma: 'محطة', features: 'def.gen', root: 'ح ط ط', pos: 'noun', gloss: 'the station' }
          ]
        },
        {
          id: 'qr1-27-024',
          page: 103,
          ar: 'طَارِقٌ: لَا يَحْتَاجُ أَخِيْ إِلَىٰ هٰذَا التَّعَبِ، بَلْ إِذَا وَصَلَ الْكِتَابُ إِلَىٰ مَحَطَّةِ دِهْلِيْ يُنْقَلُ مِنَ الْمَحَطَّةِ إِلَىٰ مَكْتَبِ الْبَرِيْدِ.',
          en: "Tariq: My brother doesn't need this trouble -- rather, once the letter reaches the Delhi station, it is transferred from the station to the post office.",
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'not' },
            { surface: 'يَحْتَاجُ', lemma: 'احتاج', features: 'impf.3ms', root: 'ح و ج', pos: 'verb', gloss: 'needs' },
            { surface: 'أَخِيْ', lemma: 'أخ', features: 'nom+1s', root: 'أ خ و', pos: 'noun', gloss: 'my brother' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'التَّعَبِ', lemma: 'تعب', features: 'def.gen', root: 'ت ع ب', pos: 'noun', gloss: 'the trouble' },
            { surface: 'بَلْ', lemma: 'بل', features: 'part', root: '—', pos: 'part', gloss: 'rather' },
            { surface: 'إِذَا', lemma: 'إذا', features: 'part', root: '—', pos: 'part', gloss: 'if, once' },
            { surface: 'وَصَلَ', lemma: 'وصل', features: 'perf.3ms', root: 'و ص ل', pos: 'verb', gloss: 'arrived' },
            { surface: 'الْكِتَابُ', lemma: 'كتاب', features: 'def.nom', root: 'ك ت ب', pos: 'noun', gloss: 'the letter' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'مَحَطَّةِ', lemma: 'محطة', features: 'gen.constr', root: 'ح ط ط', pos: 'noun', gloss: 'the station of' },
            { surface: 'دِهْلِيْ', lemma: 'دهلي', features: 'gen', root: '—', pos: 'proper', gloss: 'Delhi' },
            { surface: 'يُنْقَلُ', lemma: 'نقل', features: 'impf.pass.3ms', root: 'ن ق ل', pos: 'verb', gloss: 'it is transferred' },
            { surface: 'مِنَ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'الْمَحَطَّةِ', lemma: 'محطة', features: 'def.gen', root: 'ح ط ط', pos: 'noun', gloss: 'the station' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'مَكْتَبِ', lemma: 'مكتب', features: 'gen.constr', root: 'ك ت ب', pos: 'noun', gloss: 'the office of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' }
          ]
        },
        {
          id: 'qr1-27-025',
          page: 103,
          ar: 'خَالِدٌ: فَيَحْضُرُ أَخُوْكَ إِلَىٰ مَكْتَبِ الْبَرِيْدِ وَيَأْخُذُ رِسَالَتَهُ مِنْ مُدِيْرِ الْبَرِيْدِ؟',
          en: 'Khalid: So your brother comes to the post office and takes his letter from the postmaster?',
          tokens: [
            { surface: 'خَالِدٌ', lemma: 'خالد', features: 'nom', root: '—', pos: 'proper', gloss: 'Khalid' },
            { surface: 'فَيَحْضُرُ', lemma: 'حضر-فعل', features: 'conj+impf.3ms', root: 'ح ض ر', pos: 'verb', gloss: 'so does come' },
            { surface: 'أَخُوْكَ', lemma: 'أخو', features: 'nom+2ms', root: 'أ خ و', pos: 'noun', gloss: 'your brother' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'مَكْتَبِ', lemma: 'مكتب', features: 'gen.constr', root: 'ك ت ب', pos: 'noun', gloss: 'the office of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' },
            { surface: 'وَيَأْخُذُ', lemma: 'أخذ', features: 'conj+impf.3ms', root: 'أ خ ذ', pos: 'verb', gloss: 'and take' },
            { surface: 'رِسَالَتَهُ', lemma: 'رسالة', features: 'acc+3ms', root: 'ر س ل', pos: 'noun', gloss: 'his letter' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'مُدِيْرِ', lemma: 'مدير', features: 'gen.constr', root: 'د و ر', pos: 'noun', gloss: 'the director of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' }
          ]
        },
        {
          id: 'qr1-27-026',
          page: 103,
          ar: 'طَارِقٌ: لَا تَعْجَلْ يَا أَخِيْ!',
          en: "Tariq: Don't be hasty, brother!",
          tokens: [
            { surface: 'طَارِقٌ', lemma: 'طارق', features: 'nom', root: '—', pos: 'proper', gloss: 'Tariq' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'do not' },
            { surface: 'تَعْجَلْ', lemma: 'عجل', features: 'impf.2ms', root: 'ع ج ل', pos: 'verb', gloss: 'be hasty' },
            { surface: 'يَا', lemma: 'يا', features: 'part', root: '—', pos: 'part', gloss: 'O (vocative)' },
            { surface: 'أَخِيْ', lemma: 'أخ', features: 'nom+1s', root: 'أ خ و', pos: 'noun', gloss: 'my brother' }
          ]
        },
        {
          id: 'qr1-27-027',
          page: 103,
          ar: 'أَنَا أُخْبِرُكَ بِخَبَرِ الْكِتَابِ، إِذَا وَصَلَ الْكِتَابُ إِلَىٰ مَكْتَبِ الْبَرِيْدِ يُفْرَزُ وَيُخْتَمُ هُنَالِكَ أَيْضاً حَتَّىٰ يُعْرَفَ مَتَىٰ وَصَلَ الْكِتَابُ إِلَىٰ دِهْلِيْ، وَبَعْدَ ذٰلِكَ يَأْخُذُهُ السَّاعِيْ وَيَحْمِلُهُ إِلَىٰ أَخِيْ.',
          en: 'I will tell you the letter’s story: once the letter reaches the post office, it is sorted and stamped there too, so it is known when the letter reached Delhi, and after that the postman takes it and carries it to my brother.',
          tokens: [
            { surface: 'أَنَا', lemma: 'أنا', features: 'nom.1s', root: '—', pos: 'noun', gloss: 'I' },
            { surface: 'أُخْبِرُكَ', lemma: 'أخبر', features: 'impf.1s+2ms', root: 'خ ب ر', pos: 'verb', gloss: 'I inform you' },
            { surface: 'بِخَبَرِ', lemma: 'خبر', features: 'prep+gen.constr', root: 'خ ب ر', pos: 'noun', gloss: 'of the story of' },
            { surface: 'الْكِتَابِ', lemma: 'كتاب', features: 'def.gen', root: 'ك ت ب', pos: 'noun', gloss: 'the letter' },
            { surface: 'إِذَا', lemma: 'إذا', features: 'part', root: '—', pos: 'part', gloss: 'if, once' },
            { surface: 'وَصَلَ', lemma: 'وصل', features: 'perf.3ms', root: 'و ص ل', pos: 'verb', gloss: 'arrived' },
            { surface: 'الْكِتَابُ', lemma: 'كتاب', features: 'def.nom', root: 'ك ت ب', pos: 'noun', gloss: 'the letter' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'مَكْتَبِ', lemma: 'مكتب', features: 'gen.constr', root: 'ك ت ب', pos: 'noun', gloss: 'the office of' },
            { surface: 'الْبَرِيْدِ', lemma: 'بريد', features: 'def.gen', root: 'ب ر د', pos: 'noun', gloss: 'the post' },
            { surface: 'يُفْرَزُ', lemma: 'فرز', features: 'impf.pass.3ms', root: 'ف ر ز', pos: 'verb', gloss: 'it is sorted' },
            { surface: 'وَيُخْتَمُ', lemma: 'ختم', features: 'conj+impf.pass.3ms', root: 'خ ت م', pos: 'verb', gloss: 'and stamped' },
            { surface: 'هُنَالِكَ', lemma: 'هنالك', features: 'adv', root: '—', pos: 'adv', gloss: 'there' },
            { surface: 'أَيْضاً', lemma: 'أيضا', features: 'adv', root: '—', pos: 'adv', gloss: 'also' },
            { surface: 'حَتَّىٰ', lemma: 'حتى', features: 'part', root: '—', pos: 'part', gloss: 'so that' },
            { surface: 'يُعْرَفَ', lemma: 'عرف', features: 'impf.pass.3ms', root: 'ع ر ف', pos: 'verb', gloss: 'it is known' },
            { surface: 'مَتَىٰ', lemma: 'متى', features: 'part', root: '—', pos: 'part', gloss: 'when' },
            { surface: 'وَصَلَ', lemma: 'وصل', features: 'perf.3ms', root: 'و ص ل', pos: 'verb', gloss: 'arrived' },
            { surface: 'الْكِتَابُ', lemma: 'كتاب', features: 'def.nom', root: 'ك ت ب', pos: 'noun', gloss: 'the letter' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'دِهْلِيْ', lemma: 'دهلي', features: 'gen', root: '—', pos: 'proper', gloss: 'Delhi' },
            { surface: 'وَبَعْدَ', lemma: 'بعد', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and after' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', features: 'dem', root: '—', pos: 'dem', gloss: 'that' },
            { surface: 'يَأْخُذُهُ', lemma: 'أخذ', features: 'impf.3ms+3ms', root: 'أ خ ذ', pos: 'verb', gloss: 'takes it' },
            { surface: 'السَّاعِيْ', lemma: 'ساعي', features: 'def.nom', root: 'س ع ي', pos: 'noun', gloss: 'the postman' },
            { surface: 'وَيَحْمِلُهُ', lemma: 'حمل', features: 'conj+impf.3ms+3ms', root: 'ح م ل', pos: 'verb', gloss: 'and carries it' },
            { surface: 'إِلَىٰ', lemma: 'إلى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'أَخِيْ', lemma: 'أخ', features: 'gen+1s', root: 'أ خ و', pos: 'noun', gloss: 'my brother' }
          ]
        }
      ],
      checks: [
        {
          q: 'مَاذَا يَحْدُثُ لِلْكِتَابِ فِعْلاً بَعْدَ وُصُوْلِهِ إِلَىٰ دِهْلِيْ، حَسَبَ تَصْحِيْحِ طَارِقٍ؟',
          options: [ 'يُفْرَزُ وَيُخْتَمُ فِيْ مَكْتَبِ الْبَرِيْدِ ثُمَّ يَحْمِلُهُ السَّاعِيْ', 'يَحْضُرُ أَخُوْهُ كُلَّ قِطَارٍ فِي الْمَحَطَّةِ', 'يُوَزِّعُهُ نَاظِرُ الْمَحَطَّةِ بِنَفْسِهِ' ],
          answer: 0,
          qEn: "What actually happens to the letter once it reaches Delhi, according to Tariq's correction?",
          optionsEn: [ 'It is sorted and stamped at the post office, then a postman delivers it', 'His brother meets every train at the station', 'The station master delivers it himself' ]
        }
      ]
    }
  ]
};

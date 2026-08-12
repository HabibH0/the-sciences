// القراءة الراشدة, volume one, chapter twenty-four -- أَدَبُ الأَكْلِ وَالشُّرْبِ.
//
// Pages 93-95 (confirmed by the book's own "***" chapter-end divider partway
// down page 95 -- chapter 25 starts cleanly at the top of page 96). This
// chapter is a HADITH ANTHOLOGY, the book's first: a short narrative frame
// (Umar ibn Abi Salamah learning table manners at the Prophet's ﷺ side,
// Sahih al-Bukhari/Muslim) followed by fifteen more free-standing hadith
// reports on the etiquette of eating and drinking, each introduced by its
// own isnad formula ("وَعَنْ فُلَانٍ رَضِيَ اللهُ عَنْهُ قَالَ:" / "وَقَالَ رَسُوْلُ
// اللهِ ﷺ:"). The print breaks these into sixteen blank-line-separated
// blocks; each becomes its own paragraph here, exactly as chapter-08.js and
// chapter-09.js already do for their own multi-block pages (11 and 14
// paragraphs respectively) -- so 16 short paragraphs for this chapter is
// consistent with established practice, not a new pattern. Paragraph 12 (the
// Anas report on the dropped morsel and wiping the bowl clean) spans the
// pages 94-95 break with no blank line in the print, so it stays one
// paragraph, matching how chapter-23.js's paragraph 2 spans pages 90-91.
//
// The ﷺ honorific is excluded from tokens and stripped for reconstruction,
// exactly as chapter-07.js/chapter-22.js/chapter-23.js do; dialogue tags
// ("قَالَ:") stay folded into their sentence rather than becoming a separate
// token, same convention.
//
// Homograph notes (same situation as chapter-05.js's ذهب/ذهب-معدن and
// chapter-21.js's من/من-موصول): this chapter's title phrase "أَدَبُ الأَكْلِ
// وَالشُّرْبِ" needs الأَكْل/الشُّرْب as VERBAL NOUNS ("eating"/"drinking"),
// while every other occurrence of those roots in the chapter is the plain
// verb "to eat"/"to drink" -- so "اكل-اسم" and "شرب-اسم" hold the nominal
// sense, keeping "اكل"/"شرب" for the verb. Likewise "أَدَّبَ" (form II, "to
// discipline/raise") needs its own "أدب-فعل" lemma distinct from the noun
// "أدب" ("manners, etiquette") that the same root gives the chapter's title
// and several sentences. "عبد" here is only ever the noun "servant, slave"
// (as in "أَجْلِسُ كَمَا يَجْلِسُ الْعَبْدُ") -- a different sense from
// chapter-09.js's verb "to worship", but chapter-09.js is a separate lemma
// dictionary, so no suffix is needed within this chapter.
//
// Companion names (هريرة, كعب, مالك, أنس, عباس, حذيفة, سلمة) are proper
// nouns in the lemma dictionary but, following chapter-22.js's precedent for
// its own Companion names, are not listed in newWords -- only "أبو" and
// "غلام" (both generically useful) are, matching chapter-22.js exactly.
export const CHAPTER = {
  id: 'ch24',
  title: {
    ar: 'أَدَبُ الأَكْلِ وَالشُّرْبِ',
    en: 'The Etiquette of Eating and Drinking'
  },
  pages: [
    93,
    94,
    95
  ],
  register: 'hadith_anthology',
  newWords: [
    'غلام',
    'أبو',
    'حجر',
    'صحفة',
    'يتيم',
    'أدب-فعل',
    'أدب',
    'سمى',
    'تأديب',
    'قط',
    'متكئ',
    'أصبع',
    'فرغ',
    'لعق',
    'لقمة',
    'أماط',
    'أذى',
    'شيطان',
    'سلت',
    'قصعة',
    'تنفس',
    'نفخ',
    'إناء',
    'حرير',
    'ديباج',
    'فضة',
    'آخرة',
    'ذهب-معدن',
    'زوج',
    'تزوج',
    'وفاة',
    'هكذا',
    'ينبغي',
    'امة',
    'دار',
    'ودع',
    'عاب',
    'كره',
    'أمر',
    'علم',
    'معلم'
  ],
  lemmas: {
    'كان': { root: 'ك و ن', pos: 'verb', gloss: 'to be', content: true },
    'عمر': { root: '—', pos: 'proper', gloss: 'Umar (a name)', content: true },
    'ابن': { root: 'ب ن ي', pos: 'noun', gloss: 'son', content: true },
    'اب': { root: 'أ ب و', pos: 'noun', gloss: 'father', content: true },
    'سلمة': { root: '—', pos: 'proper', gloss: 'Salamah (a name)', content: true },
    'غلام': { root: 'غ ل م', pos: 'noun', gloss: 'boy, young man', content: true },
    'صغر': { root: 'ص غ ر', pos: 'adj', gloss: 'small, young', content: true },
    'أم': { root: 'أ م م', pos: 'noun', gloss: 'mother', content: true },
    'رضي': { root: 'ر ض ي', pos: 'verb', gloss: 'to be pleased, content', content: true },
    'الله': { root: '—', pos: 'proper', gloss: 'Allah', content: true },
    'عن': { root: '—', pos: 'prep', gloss: 'about, from; with', content: false },
    'زوج': { root: 'ز و ج', pos: 'noun', gloss: 'wife, spouse', content: true },
    'نبي': { root: 'ن ب أ', pos: 'noun', gloss: 'Prophet', content: true },
    'تزوج': { root: 'ز و ج', pos: 'verb', gloss: 'to marry', content: true },
    'بعد': { root: '—', pos: 'prep', gloss: 'after', content: false },
    'وفاة': { root: 'و ف ي', pos: 'noun', gloss: 'death, passing', content: true },
    'حجر': { root: 'ح ج ر', pos: 'noun', gloss: 'lap, care, upbringing', content: true },
    'اكل': { root: 'أ ك ل', pos: 'verb', gloss: 'to eat', content: true },
    'مع': { root: '—', pos: 'prep', gloss: 'with', content: false },
    'كما': { root: '—', pos: 'part', gloss: 'just as', content: false },
    'ولد': { root: 'و ل د', pos: 'noun', gloss: 'child, boy', content: true },
    'انت': { root: '—', pos: 'noun', gloss: 'you', content: false },
    'يتيم': { root: 'ي ت م', pos: 'adj', gloss: 'orphaned', content: true },
    'مات': { root: 'م و ت', pos: 'verb', gloss: 'to die', content: true },
    'هو': { root: '—', pos: 'noun', gloss: 'he, it', content: false },
    'أحب': { root: 'ح ب ب', pos: 'verb', gloss: 'to love, be fond of', content: true },
    'علم': { root: 'ع ل م', pos: 'verb', gloss: 'to teach', content: true },
    'كيف': { root: 'ك ي ف', pos: 'part', gloss: 'how', content: false },
    'أدب': { root: 'أ د ب', pos: 'noun', gloss: 'good manners, etiquette', content: true },
    'مرة': { root: 'م ر ر', pos: 'noun', gloss: 'time, occasion', content: true },
    'يد': { root: 'ي د ي', pos: 'noun', gloss: 'hand', content: true },
    'دار': { root: 'د و ر', pos: 'verb', gloss: 'to move around, circle', content: true },
    'في': { root: '—', pos: 'prep', gloss: 'in', content: false },
    'صحفة': { root: 'ص ح ف', pos: 'noun', gloss: 'bowl, plate', content: true },
    'من': { root: '—', pos: 'prep', gloss: 'from, of', content: false },
    'هنا': { root: '—', pos: 'adv', gloss: 'here', content: true },
    'كثير': { root: 'ك ث ر', pos: 'adj', gloss: 'much, many', content: true },
    'هكذا': { root: '—', pos: 'adv', gloss: 'thus, in this way', content: true },
    'ينبغي': { root: 'ب غ ي', pos: 'verb', gloss: 'it is fitting, ought', content: true },
    'أن': { root: '—', pos: 'part', gloss: 'that, to', content: false },
    'مسلم': { root: 'س ل م', pos: 'noun', gloss: 'Muslim', content: true },
    'سمى': { root: 'س م ي', pos: 'verb', gloss: 'to name, mention the name of', content: true },
    'يمين': { root: 'ي م ن', pos: 'noun', gloss: 'right (side)', content: true },
    'ولي': { root: 'و ل ي', pos: 'verb', gloss: 'to be next to, adjoin', content: true },
    'امة': { root: 'أ م م', pos: 'noun', gloss: 'nation, community', content: true },
    'اكل-اسم': { root: 'أ ك ل', pos: 'noun', gloss: 'eating', content: true },
    'شرب-اسم': { root: 'ش ر ب', pos: 'noun', gloss: 'drinking', content: true },
    'كل': { root: 'ك ل ل', pos: 'noun', gloss: 'every', content: true },
    'شيء': { root: 'ش ي أ', pos: 'noun', gloss: 'thing', content: true },
    'قال': { root: 'ق و ل', pos: 'verb', gloss: 'to say', content: true },
    'إنما': { root: '—', pos: 'part', gloss: 'only, indeed', content: false },
    'بعث': { root: 'ب ع ث', pos: 'verb', gloss: 'to send, dispatch', content: true },
    'معلم': { root: 'ع ل م', pos: 'noun', gloss: 'teacher', content: true },
    'قد': { root: '—', pos: 'part', gloss: 'already, indeed', content: false },
    'أدب-فعل': { root: 'أ د ب', pos: 'verb', gloss: 'to discipline, raise well', content: true },
    'رب': { root: 'ر ب ب', pos: 'noun', gloss: 'Lord', content: true },
    'أحسن': { root: 'ح س ن', pos: 'verb', gloss: 'to do well, excel', content: true },
    'تأديب': { root: 'أ د ب', pos: 'noun', gloss: 'upbringing, discipline', content: true },
    'أبو': { root: 'أ ب و', pos: 'proper', gloss: 'Abu ("father of", in a kunya)', content: true },
    'هريرة': { root: '—', pos: 'proper', gloss: 'Hurairah (a name)', content: true },
    'ما-نافية': { root: '—', pos: 'part', gloss: 'not', content: false },
    'عاب': { root: 'ع ي ب', pos: 'verb', gloss: 'to find fault with, criticize', content: true },
    'رسول': { root: 'ر س ل', pos: 'noun', gloss: 'messenger', content: true },
    'طعام': { root: 'ط ع م', pos: 'noun', gloss: 'food', content: true },
    'قط': { root: '—', pos: 'adv', gloss: 'ever, at all', content: true },
    'إن': { root: '—', pos: 'part', gloss: 'if; indeed, verily', content: false },
    'اشتهى': { root: 'ش ه و', pos: 'verb', gloss: 'to desire, crave', content: true },
    'كره': { root: 'ك ر ه', pos: 'verb', gloss: 'to dislike', content: true },
    'ترك': { root: 'ت ر ك', pos: 'verb', gloss: 'to leave, abandon', content: true },
    'جلس': { root: 'ج ل س', pos: 'verb', gloss: 'to sit', content: true },
    'عبد': { root: 'ع ب د', pos: 'noun', gloss: 'slave, servant', content: true },
    'لا': { root: '—', pos: 'part', gloss: 'not', content: false },
    'متكئ': { root: 'و ك أ', pos: 'adj', gloss: 'reclining', content: true },
    'كعب': { root: '—', pos: 'proper', gloss: "Ka'b (a name)", content: true },
    'مالك': { root: '—', pos: 'proper', gloss: 'Malik (a name)', content: true },
    'رأى': { root: 'ر أ ي', pos: 'verb', gloss: 'to see', content: true },
    'ثلاثة': { root: 'ث ل ث', pos: 'num', gloss: 'three', content: true },
    'أصبع': { root: '—', pos: 'noun', gloss: 'finger', content: true },
    'إذا': { root: '—', pos: 'part', gloss: 'when, if', content: false },
    'فرغ': { root: 'ف ر غ', pos: 'verb', gloss: 'to finish', content: true },
    'لعق': { root: 'ل ع ق', pos: 'verb', gloss: 'to lick', content: true, book_note: 'لَعِقَ يَلْعَقُ: لَحِسَ الشيءَ بلسانه أو إصبعه.' },
    'أنس': { root: '—', pos: 'proper', gloss: 'Anas (a name)', content: true },
    'سقط': { root: 'س ق ط', pos: 'verb', gloss: 'to fall', content: true },
    'لقمة': { root: 'ل ق م', pos: 'noun', gloss: 'morsel, mouthful', content: true },
    'أحد': { root: 'أ ح د', pos: 'noun', gloss: 'someone, one of', content: true },
    'أخذ': { root: 'أ خ ذ', pos: 'verb', gloss: 'to take', content: true },
    'أماط': { root: 'م ي ط', pos: 'verb', gloss: 'to remove, wipe away', content: true },
    'أذى': { root: 'أ ذ ي', pos: 'noun', gloss: 'harm, dirt', content: true },
    'ودع': { root: 'و د ع', pos: 'verb', gloss: 'to leave, let be', content: true },
    'شيطان': { root: 'ش ط ن', pos: 'noun', gloss: 'Satan, devil', content: true },
    'أمر': { root: 'أ م ر', pos: 'verb', gloss: 'to command, order', content: true },
    'سلت': { root: 'س ل ت', pos: 'verb', gloss: 'to wipe clean', content: true, book_note: 'نسلت القصعة: نَتَتَبَّعُ ما بقي فيها من الطعام، ونمسحها بالأصبع ونحوه.' },
    'قصعة': { root: 'ق ص ع', pos: 'noun', gloss: 'bowl, large plate', content: true },
    'درى': { root: 'د ر ي', pos: 'verb', gloss: 'to know', content: true },
    'أي': { root: '—', pos: 'part', gloss: 'which', content: false },
    'بركة': { root: 'ب ر ك', pos: 'noun', gloss: 'blessing', content: true },
    'تنفس': { root: 'ن ف س', pos: 'verb', gloss: 'to breathe', content: true },
    'شراب': { root: 'ش ر ب', pos: 'noun', gloss: 'drink', content: true },
    'عباس': { root: '—', pos: 'proper', gloss: 'Abbas (a name)', content: true },
    'نهى': { root: 'ن ه ي', pos: 'verb', gloss: 'to forbid', content: true },
    'نفخ': { root: 'ن ف خ', pos: 'verb', gloss: 'to blow', content: true },
    'إناء': { root: 'أ ن ي', pos: 'noun', gloss: 'vessel, container', content: true },
    'قائم': { root: 'ق و م', pos: 'adj', gloss: 'standing', content: true },
    'حذيفة': { root: '—', pos: 'proper', gloss: 'Hudhayfah (a name)', content: true },
    'حرير': { root: 'ح ر ر', pos: 'noun', gloss: 'silk', content: true },
    'ديباج': { root: 'د ب ج', pos: 'noun', gloss: 'fine silk brocade', content: true },
    'ذهب-معدن': { root: 'ذ ه ب', pos: 'noun', gloss: 'gold', content: true },
    'فضة': { root: 'ف ض ض', pos: 'noun', gloss: 'silver', content: true },
    'هي': { root: '—', pos: 'noun', gloss: 'she, it (f.)', content: false },
    'ل': { root: '—', pos: 'prep', gloss: 'to, for, belongs to', content: false },
    'دنيا': { root: 'د ن و', pos: 'noun', gloss: 'world, this life', content: true },
    'آخرة': { root: 'أ خ ر', pos: 'noun', gloss: 'the Hereafter', content: true },
    'أو': { root: '—', pos: 'conj', gloss: 'or', content: false }
  },
  paragraphs: [
    {
      en: "Umar ibn Abi Salamah was a small boy who lived with his mother Umm Salamah -- she later became a wife of the Prophet ﷺ, who married her after Abu Salamah's death -- so Umar grew up in the Prophet's ﷺ own care.",
      sentences: [
        { id: 'qr1-24-001', page: 93, ar: 'كَانَ عُمَرُ بْنُ أَبِيْ سَلَمَةَ غُلَامًا صَغِيْرًا وَكَانَ مَعَ أُمِّهِ أُمِّ سَلَمَةَ رَضِيَ اللهُ عَنْهَا،', en: 'Umar ibn Abi Salamah was a small boy, and he was with his mother, Umm Salamah -- may Allah be pleased with her --,',
          tokens: [
            { surface: 'كَانَ', lemma: 'كان', features: 'perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'was' },
            { surface: 'عُمَرُ', lemma: 'عمر', features: 'nom', root: '—', pos: 'proper', gloss: 'Umar' },
            { surface: 'بْنُ', lemma: 'ابن', features: 'nom.constr', root: 'ب ن ي', pos: 'noun', gloss: 'the son of' },
            { surface: 'أَبِيْ', lemma: 'اب', features: 'gen.constr', root: 'أ ب و', pos: 'noun', gloss: 'the father of' },
            { surface: 'سَلَمَةَ', lemma: 'سلمة', features: 'gen', root: '—', pos: 'proper', gloss: 'Salamah' },
            { surface: 'غُلَامًا', lemma: 'غلام', features: 'indef.acc', root: 'غ ل م', pos: 'noun', gloss: 'a boy' },
            { surface: 'صَغِيْرًا', lemma: 'صغر', features: 'indef.acc', root: 'ص غ ر', pos: 'adj', gloss: 'small' },
            { surface: 'وَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'and he was' },
            { surface: 'مَعَ', lemma: 'مع', features: 'prep', root: '—', pos: 'prep', gloss: 'with' },
            { surface: 'أُمِّهِ', lemma: 'أم', features: 'gen+3ms', root: 'أ م م', pos: 'noun', gloss: 'his mother' },
            { surface: 'أُمِّ', lemma: 'أم', features: 'gen.constr', root: 'أ م م', pos: 'noun', gloss: 'Umm' },
            { surface: 'سَلَمَةَ', lemma: 'سلمة', features: 'gen', root: '—', pos: 'proper', gloss: 'Salamah' },
            { surface: 'رَضِيَ', lemma: 'رضي', features: 'perf.3ms', root: 'ر ض ي', pos: 'verb', gloss: 'was pleased' },
            { surface: 'اللهُ', lemma: 'الله', features: 'nom', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'عَنْهَا', lemma: 'عن', features: 'prep+3fs', root: '—', pos: 'prep', gloss: 'with her' }
          ]
        },
        { id: 'qr1-24-002', page: 93, ar: 'وَكَانَتْ أُمُّ سَلَمَةَ زَوْجَ النَّبِيِّ ﷺ تَزَوَّجَهَا بَعْدَ وَفَاةِ أَبِيْ سَلَمَةَ رَضِيَ اللهُ عَنْهُ،', en: 'and Umm Salamah became a wife of the Prophet ﷺ -- he married her after the death of Abu Salamah, may Allah be pleased with him --,',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كان', features: 'conj+perf.3fs', root: 'ك و ن', pos: 'verb', gloss: 'and she became' },
            { surface: 'أُمُّ', lemma: 'أم', features: 'nom.constr', root: 'أ م م', pos: 'noun', gloss: 'Umm' },
            { surface: 'سَلَمَةَ', lemma: 'سلمة', features: 'gen', root: '—', pos: 'proper', gloss: 'Salamah' },
            { surface: 'زَوْجَ', lemma: 'زوج', features: 'acc.constr', root: 'ز و ج', pos: 'noun', gloss: 'a wife of' },
            { surface: 'النَّبِيِّ', lemma: 'نبي', features: 'def.gen', root: 'ن ب أ', pos: 'noun', gloss: 'the Prophet' },
            { surface: 'تَزَوَّجَهَا', lemma: 'تزوج', features: 'perf.3ms+3fs', root: 'ز و ج', pos: 'verb', gloss: 'he married her' },
            { surface: 'بَعْدَ', lemma: 'بعد', features: 'acc', root: '—', pos: 'prep', gloss: 'after' },
            { surface: 'وَفَاةِ', lemma: 'وفاة', features: 'gen.constr', root: 'و ف ي', pos: 'noun', gloss: 'the death of' },
            { surface: 'أَبِيْ', lemma: 'اب', features: 'gen.constr', root: 'أ ب و', pos: 'noun', gloss: 'the father of' },
            { surface: 'سَلَمَةَ', lemma: 'سلمة', features: 'gen', root: '—', pos: 'proper', gloss: 'Salamah' },
            { surface: 'رَضِيَ', lemma: 'رضي', features: 'perf.3ms', root: 'ر ض ي', pos: 'verb', gloss: 'was pleased' },
            { surface: 'اللهُ', lemma: 'الله', features: 'nom', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'عَنْهُ', lemma: 'عن', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'with him' }
          ]
        },
        { id: 'qr1-24-003', page: 93, ar: 'فَكَانَ عُمَرُ فِيْ حِجْرِ النَّبِيِّ ﷺ.', en: 'so Umar grew up in the care of the Prophet ﷺ.',
          tokens: [
            { surface: 'فَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'so he was' },
            { surface: 'عُمَرُ', lemma: 'عمر', features: 'nom', root: '—', pos: 'proper', gloss: 'Umar' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'حِجْرِ', lemma: 'حجر', features: 'gen.constr', root: 'ح ج ر', pos: 'noun', gloss: 'the care of' },
            { surface: 'النَّبِيِّ', lemma: 'نبي', features: 'def.gen', root: 'ن ب أ', pos: 'noun', gloss: 'the Prophet' }
          ]
        }
      ],
      checks: [
        {
          q: 'مَعَ مَنْ كَانَ عُمَرُ يَعِيْشُ؟',
          options: [ 'مَعَ أُمِّهِ أُمِّ سَلَمَةَ', 'مَعَ عَمِّهِ', 'وَحْدَهُ' ],
          answer: 0,
          qEn: 'Who did Umar live with?',
          optionsEn: [ 'With his mother, Umm Salamah', 'With his uncle', 'Alone' ]
        }
      ]
    },
    {
      en: 'Umar used to eat with the Prophet ﷺ just as a small child eats with his father, and just as you eat with your own father and mother.',
      sentences: [
        { id: 'qr1-24-004', page: 93, ar: 'وَكَانَ عُمَرُ يَأْكُلُ مَعَ النَّبِيِّ ﷺ كَمَا يَأْكُلُ الْوَلَدُ الصَّغِيْرُ مَعَ أَبِيْهِ،', en: 'Umar used to eat with the Prophet ﷺ just as a small child eats with his father,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'and he used to' },
            { surface: 'عُمَرُ', lemma: 'عمر', features: 'nom', root: '—', pos: 'proper', gloss: 'Umar' },
            { surface: 'يَأْكُلُ', lemma: 'اكل', features: 'impf.3ms', root: 'أ ك ل', pos: 'verb', gloss: 'eat' },
            { surface: 'مَعَ', lemma: 'مع', features: 'prep', root: '—', pos: 'prep', gloss: 'with' },
            { surface: 'النَّبِيِّ', lemma: 'نبي', features: 'def.gen', root: 'ن ب أ', pos: 'noun', gloss: 'the Prophet' },
            { surface: 'كَمَا', lemma: 'كما', features: 'part', root: '—', pos: 'part', gloss: 'just as' },
            { surface: 'يَأْكُلُ', lemma: 'اكل', features: 'impf.3ms', root: 'أ ك ل', pos: 'verb', gloss: 'eats' },
            { surface: 'الْوَلَدُ', lemma: 'ولد', features: 'def.nom', root: 'و ل د', pos: 'noun', gloss: 'the child' },
            { surface: 'الصَّغِيْرُ', lemma: 'صغر', features: 'def.nom', root: 'ص غ ر', pos: 'adj', gloss: 'the small' },
            { surface: 'مَعَ', lemma: 'مع', features: 'prep', root: '—', pos: 'prep', gloss: 'with' },
            { surface: 'أَبِيْهِ', lemma: 'اب', features: 'gen+3ms', root: 'أ ب و', pos: 'noun', gloss: 'his father' }
          ]
        },
        { id: 'qr1-24-005', page: 93, ar: 'وَكَمَا تَأْكُلُ أَنْتَ مَعَ أَبِيْكَ وَأُمِّكَ.', en: 'and just as you eat with your father and mother.',
          tokens: [
            { surface: 'وَكَمَا', lemma: 'كما', features: 'conj+part', root: '—', pos: 'part', gloss: 'and just as' },
            { surface: 'تَأْكُلُ', lemma: 'اكل', features: 'impf.2ms', root: 'أ ك ل', pos: 'verb', gloss: 'you eat' },
            { surface: 'أَنْتَ', lemma: 'انت', features: 'nom', root: '—', pos: 'noun', gloss: 'you' },
            { surface: 'مَعَ', lemma: 'مع', features: 'prep', root: '—', pos: 'prep', gloss: 'with' },
            { surface: 'أَبِيْكَ', lemma: 'اب', features: 'gen+2ms', root: 'أ ب و', pos: 'noun', gloss: 'your father' },
            { surface: 'وَأُمِّكَ', lemma: 'أم', features: 'conj+gen+2ms', root: 'أ م م', pos: 'noun', gloss: 'and your mother' }
          ]
        }
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ عُمَرُ يَأْكُلُ مَعَ النَّبِيِّ ﷺ؟',
          options: [ 'كَمَا يَأْكُلُ الْوَلَدُ الصَّغِيْرُ مَعَ أَبِيْهِ', 'وَحْدَهُ فِيْ غُرْفَتِهِ', 'لَمْ يَكُنْ يَأْكُلُ مَعَهُ' ],
          answer: 0,
          qEn: 'How did Umar eat with the Prophet ﷺ?',
          optionsEn: [ 'Just as a small child eats with his father', 'Alone in his room', 'He never ate with him' ]
        }
      ]
    },
    {
      en: 'Umar was an orphaned boy -- his father had died while he was still young -- so the Prophet ﷺ loved him and taught him good manners.',
      sentences: [
        { id: 'qr1-24-006', page: 93, ar: 'وَكَانَ عُمَرُ غُلَامًا يَتِيْمًا مَاتَ أَبُوْهُ وَهُوَ صَغِيْرٌ فَكَانَ النَّبِيُّ ﷺ يُحِبُّهُ وَيُعَلِّمُهُ الأَدَبَ.', en: 'Umar was an orphaned boy -- his father had died while he was still young -- so the Prophet ﷺ loved him and taught him good manners.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'and he was' },
            { surface: 'عُمَرُ', lemma: 'عمر', features: 'nom', root: '—', pos: 'proper', gloss: 'Umar' },
            { surface: 'غُلَامًا', lemma: 'غلام', features: 'indef.acc', root: 'غ ل م', pos: 'noun', gloss: 'a boy' },
            { surface: 'يَتِيْمًا', lemma: 'يتيم', features: 'indef.acc', root: 'ي ت م', pos: 'adj', gloss: 'orphaned' },
            { surface: 'مَاتَ', lemma: 'مات', features: 'perf.3ms', root: 'م و ت', pos: 'verb', gloss: 'died' },
            { surface: 'أَبُوْهُ', lemma: 'اب', features: 'nom+3ms', root: 'أ ب و', pos: 'noun', gloss: 'his father' },
            { surface: 'وَهُوَ', lemma: 'هو', features: 'conj+nom', root: '—', pos: 'noun', gloss: 'while he' },
            { surface: 'صَغِيْرٌ', lemma: 'صغر', features: 'indef.nom', root: 'ص غ ر', pos: 'adj', gloss: 'young' },
            { surface: 'فَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'so he was' },
            { surface: 'النَّبِيُّ', lemma: 'نبي', features: 'def.nom', root: 'ن ب أ', pos: 'noun', gloss: 'the Prophet' },
            { surface: 'يُحِبُّهُ', lemma: 'أحب', features: 'impf.3ms+3ms', root: 'ح ب ب', pos: 'verb', gloss: 'loves him' },
            { surface: 'وَيُعَلِّمُهُ', lemma: 'علم', features: 'conj+impf.3ms+3ms', root: 'ع ل م', pos: 'verb', gloss: 'and teaches him' },
            { surface: 'الأَدَبَ', lemma: 'أدب', features: 'def.acc', root: 'أ د ب', pos: 'noun', gloss: 'good manners' }
          ]
        }
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَ النَّبِيُّ ﷺ يُحِبُّ عُمَرَ وَيُعَلِّمُهُ؟',
          options: [ 'لأَنَّهُ كَانَ غُلَامًا يَتِيْمًا مَاتَ أَبُوْهُ وَهُوَ صَغِيْرٌ', 'لأَنَّهُ كَانَ غَنِيًّا', 'لَا يُوْجَدُ سَبَبٌ' ],
          answer: 0,
          qEn: 'Why did the Prophet ﷺ love Umar and teach him?',
          optionsEn: [ 'Because he was an orphaned boy whose father had died while he was young', 'Because he was rich', 'There was no reason' ]
        }
      ]
    },
    {
      en: 'Once he was eating with the Prophet ﷺ, and his hand was roving all around the bowl, eating from here and there, as many children do.',
      sentences: [
        { id: 'qr1-24-007', page: 93, ar: 'فَكَانَ يَأْكُلُ مَرَّةً مَعَ النَّبِيِّ ﷺ فَكَانَتْ يَدُهُ تَدُوْرُ فِي الصَّحْفَةِ وَكَانَ يَأْكُلُ مِنْ هُنَا وَهُنَا كَمَا يَأْكُلُ كَثِيْرٌ مِنَ الأَوْلَادِ.', en: 'Once he was eating with the Prophet ﷺ, and his hand was roving all around the bowl, eating from here and there, as many children do.',
          tokens: [
            { surface: 'فَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'and he was' },
            { surface: 'يَأْكُلُ', lemma: 'اكل', features: 'impf.3ms', root: 'أ ك ل', pos: 'verb', gloss: 'eating' },
            { surface: 'مَرَّةً', lemma: 'مرة', features: 'indef.acc', root: 'م ر ر', pos: 'noun', gloss: 'once' },
            { surface: 'مَعَ', lemma: 'مع', features: 'prep', root: '—', pos: 'prep', gloss: 'with' },
            { surface: 'النَّبِيِّ', lemma: 'نبي', features: 'def.gen', root: 'ن ب أ', pos: 'noun', gloss: 'the Prophet' },
            { surface: 'فَكَانَتْ', lemma: 'كان', features: 'conj+perf.3fs', root: 'ك و ن', pos: 'verb', gloss: 'and was' },
            { surface: 'يَدُهُ', lemma: 'يد', features: 'nom+3ms', root: 'ي د ي', pos: 'noun', gloss: 'his hand' },
            { surface: 'تَدُوْرُ', lemma: 'دار', features: 'impf.3fs', root: 'د و ر', pos: 'verb', gloss: 'roving around' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'الصَّحْفَةِ', lemma: 'صحفة', features: 'def.gen', root: 'ص ح ف', pos: 'noun', gloss: 'the bowl' },
            { surface: 'وَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'and he was' },
            { surface: 'يَأْكُلُ', lemma: 'اكل', features: 'impf.3ms', root: 'أ ك ل', pos: 'verb', gloss: 'eating' },
            { surface: 'مِنْ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'هُنَا', lemma: 'هنا', features: 'adv', root: '—', pos: 'adv', gloss: 'here' },
            { surface: 'وَهُنَا', lemma: 'هنا', features: 'conj+adv', root: '—', pos: 'adv', gloss: 'and there' },
            { surface: 'كَمَا', lemma: 'كما', features: 'part', root: '—', pos: 'part', gloss: 'as' },
            { surface: 'يَأْكُلُ', lemma: 'اكل', features: 'impf.3ms', root: 'أ ك ل', pos: 'verb', gloss: 'eat' },
            { surface: 'كَثِيْرٌ', lemma: 'كثير', features: 'indef.nom', root: 'ك ث ر', pos: 'adj', gloss: 'many' },
            { surface: 'مِنَ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'of' },
            { surface: 'الأَوْلَادِ', lemma: 'ولد', features: 'pl.def.gen', root: 'و ل د', pos: 'noun', gloss: 'children' }
          ]
        }
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَتْ يَدُ عُمَرَ عِنْدَمَا كَانَ يَأْكُلُ؟',
          options: [ 'كَانَتْ تَدُوْرُ فِي الصَّحْفَةِ', 'كَانَتْ ثَابِتَةً فِيْ مَكَانٍ وَاحِدٍ', 'لَمْ يَكُنْ يَأْكُلُ بِيَدِهِ' ],
          answer: 0,
          qEn: "What was Umar's hand doing while he ate?",
          optionsEn: [ 'It was roving all around the bowl', 'It stayed still in one place', 'He did not eat with his hand' ]
        }
      ]
    },
    {
      en: 'So the Prophet ﷺ taught him how to eat, and said to him: "Say Allah\'s name, and eat from what is nearest to you."',
      sentences: [
        { id: 'qr1-24-008', page: 93, ar: 'فَعَلَّمَهُ النَّبِيُّ ﷺ كَيْفَ يَأْكُلُ وَقَالَ لَهُ:', en: 'So the Prophet ﷺ taught him how to eat, and said to him:',
          tokens: [
            { surface: 'فَعَلَّمَهُ', lemma: 'علم', features: 'conj+perf.3ms+3ms', root: 'ع ل م', pos: 'verb', gloss: 'so he taught him' },
            { surface: 'النَّبِيُّ', lemma: 'نبي', features: 'def.nom', root: 'ن ب أ', pos: 'noun', gloss: 'the Prophet' },
            { surface: 'كَيْفَ', lemma: 'كيف', features: 'part', root: 'ك ي ف', pos: 'part', gloss: 'how' },
            { surface: 'يَأْكُلُ', lemma: 'اكل', features: 'impf.3ms', root: 'أ ك ل', pos: 'verb', gloss: 'to eat' },
            { surface: 'وَقَالَ', lemma: 'قال', features: 'conj+perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'and said' },
            { surface: 'لَهُ', lemma: 'ل', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'to him' }
          ]
        },
        { id: 'qr1-24-009', page: 93, ar: '«سَمِّ اللهَ وَكُلْ مِمَّا يَلِيْكَ».', en: '"Say Allah\'s name, and eat from what is nearest to you."',
          tokens: [
            { surface: 'سَمِّ', lemma: 'سمى', features: 'imp.2ms', root: 'س م ي', pos: 'verb', gloss: 'say the name of' },
            { surface: 'اللهَ', lemma: 'الله', features: 'acc', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'وَكُلْ', lemma: 'اكل', features: 'conj+imp.2ms', root: 'أ ك ل', pos: 'verb', gloss: 'and eat' },
            { surface: 'مِمَّا', lemma: 'من', features: 'prep+rel', root: '—', pos: 'prep', gloss: 'from what' },
            { surface: 'يَلِيْكَ', lemma: 'ولي', features: 'impf.3ms+2ms', root: 'و ل ي', pos: 'verb', gloss: 'is nearest to you' }
          ]
        }
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ النَّبِيُّ ﷺ لِعُمَرَ عِنْدَمَا عَلَّمَهُ الأَكْلَ؟',
          options: [ '«سَمِّ اللهَ وَكُلْ مِمَّا يَلِيْكَ»', '«كُلْ بِسُرْعَةٍ»', 'لَمْ يَقُلْ شَيْئًا' ],
          answer: 0,
          qEn: 'What did the Prophet ﷺ say to Umar when he taught him to eat?',
          optionsEn: [ '"Say Allah\'s name, and eat from what is nearest to you"', '"Eat quickly"', 'He said nothing' ]
        }
      ]
    },
    {
      en: 'And this is how a Muslim ought to eat: he says Allah\'s name, eats with his right hand, and eats from what is nearest to him.',
      sentences: [
        { id: 'qr1-24-010', page: 94, ar: 'وَهٰكَذَا يَنْبَغِيْ أَنْ يَأْكُلَ الْمُسْلِمُ،', en: 'And this is how a Muslim ought to eat:',
          tokens: [
            { surface: 'وَهٰكَذَا', lemma: 'هكذا', features: 'conj+adv', root: '—', pos: 'adv', gloss: 'and thus' },
            { surface: 'يَنْبَغِيْ', lemma: 'ينبغي', features: 'impf.3ms', root: 'ب غ ي', pos: 'verb', gloss: 'it is fitting' },
            { surface: 'أَنْ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'that' },
            { surface: 'يَأْكُلَ', lemma: 'اكل', features: 'subj.3ms', root: 'أ ك ل', pos: 'verb', gloss: 'a Muslim eat' },
            { surface: 'الْمُسْلِمُ', lemma: 'مسلم', features: 'def.nom', root: 'س ل م', pos: 'noun', gloss: 'the Muslim' }
          ]
        },
        { id: 'qr1-24-011', page: 94, ar: 'فَيُسَمِّي اللهَ وَيَأْكُلُ بِيَمِيْنِهِ وَيَأْكُلُ مِمَّا يَلِيْهِ.', en: 'he says Allah\'s name, eats with his right hand, and eats from what is nearest to him.',
          tokens: [
            { surface: 'فَيُسَمِّي', lemma: 'سمى', features: 'conj+impf.3ms', root: 'س م ي', pos: 'verb', gloss: 'so he says the name of' },
            { surface: 'اللهَ', lemma: 'الله', features: 'acc', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'وَيَأْكُلُ', lemma: 'اكل', features: 'conj+impf.3ms', root: 'أ ك ل', pos: 'verb', gloss: 'and eats' },
            { surface: 'بِيَمِيْنِهِ', lemma: 'يمين', features: 'prep+gen+3ms', root: 'ي م ن', pos: 'noun', gloss: 'with his right hand' },
            { surface: 'وَيَأْكُلُ', lemma: 'اكل', features: 'conj+impf.3ms', root: 'أ ك ل', pos: 'verb', gloss: 'and eats' },
            { surface: 'مِمَّا', lemma: 'من', features: 'prep+rel', root: '—', pos: 'prep', gloss: 'from what' },
            { surface: 'يَلِيْهِ', lemma: 'ولي', features: 'impf.3ms+3ms', root: 'و ل ي', pos: 'verb', gloss: 'is nearest to him' }
          ]
        }
      ],
      checks: [
        {
          q: 'كَيْفَ يَنْبَغِيْ أَنْ يَأْكُلَ الْمُسْلِمُ؟',
          options: [ 'يُسَمِّي اللهَ وَيَأْكُلُ بِيَمِيْنِهِ وَمِمَّا يَلِيْهِ', 'يَأْكُلُ بِشِمَالِهِ', 'يَأْكُلُ مِنْ وَسَطِ الطَّعَامِ' ],
          answer: 0,
          qEn: 'How ought a Muslim to eat?',
          optionsEn: [ 'He says Allah\'s name and eats with his right hand, from what is nearest to him', 'He eats with his left hand', 'He eats from the middle of the food' ]
        }
      ]
    },
    {
      en: 'This is how the Prophet ﷺ taught his community the etiquette of eating and drinking, and the etiquette of everything -- just as he taught young Umar ibn Abi Salamah -- and the Prophet ﷺ said: "I have only been sent as a teacher."',
      sentences: [
        { id: 'qr1-24-012', page: 94, ar: 'وَهٰكَذَا عَلَّمَ النَّبِيُّ ﷺ أُمَّتَهُ أَدَبَ الأَكْلِ وَالشُّرْبِ وَأَدَبَ كُلِّ شَيْءٍ،', en: 'This is how the Prophet ﷺ taught his community the etiquette of eating and drinking, and the etiquette of everything,',
          tokens: [
            { surface: 'وَهٰكَذَا', lemma: 'هكذا', features: 'conj+adv', root: '—', pos: 'adv', gloss: 'and thus' },
            { surface: 'عَلَّمَ', lemma: 'علم', features: 'perf.3ms', root: 'ع ل م', pos: 'verb', gloss: 'taught' },
            { surface: 'النَّبِيُّ', lemma: 'نبي', features: 'def.nom', root: 'ن ب أ', pos: 'noun', gloss: 'the Prophet' },
            { surface: 'أُمَّتَهُ', lemma: 'امة', features: 'acc+3ms', root: 'أ م م', pos: 'noun', gloss: 'his community' },
            { surface: 'أَدَبَ', lemma: 'أدب', features: 'acc.constr', root: 'أ د ب', pos: 'noun', gloss: 'the etiquette of' },
            { surface: 'الأَكْلِ', lemma: 'اكل-اسم', features: 'def.gen', root: 'أ ك ل', pos: 'noun', gloss: 'eating' },
            { surface: 'وَالشُّرْبِ', lemma: 'شرب-اسم', features: 'conj+def.gen', root: 'ش ر ب', pos: 'noun', gloss: 'and drinking' },
            { surface: 'وَأَدَبَ', lemma: 'أدب', features: 'conj+acc.constr', root: 'أ د ب', pos: 'noun', gloss: 'and the etiquette of' },
            { surface: 'كُلِّ', lemma: 'كل', features: 'gen.constr', root: 'ك ل ل', pos: 'noun', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شيء', features: 'indef.gen', root: 'ش ي أ', pos: 'noun', gloss: 'thing' }
          ]
        },
        { id: 'qr1-24-013', page: 94, ar: 'كَمَا عَلَّمَ عُمَرَ بْنَ أَبِيْ سَلَمَةَ الصَّغِيْرَ وَقَالَ النَّبِيُّ ﷺ:', en: 'just as he taught young Umar ibn Abi Salamah, and the Prophet ﷺ said:',
          tokens: [
            { surface: 'كَمَا', lemma: 'كما', features: 'part', root: '—', pos: 'part', gloss: 'just as' },
            { surface: 'عَلَّمَ', lemma: 'علم', features: 'perf.3ms', root: 'ع ل م', pos: 'verb', gloss: 'he taught' },
            { surface: 'عُمَرَ', lemma: 'عمر', features: 'acc', root: '—', pos: 'proper', gloss: 'Umar' },
            { surface: 'بْنَ', lemma: 'ابن', features: 'acc.constr', root: 'ب ن ي', pos: 'noun', gloss: 'son of' },
            { surface: 'أَبِيْ', lemma: 'اب', features: 'gen.constr', root: 'أ ب و', pos: 'noun', gloss: 'the father of' },
            { surface: 'سَلَمَةَ', lemma: 'سلمة', features: 'gen', root: '—', pos: 'proper', gloss: 'Salamah' },
            { surface: 'الصَّغِيْرَ', lemma: 'صغر', features: 'def.acc', root: 'ص غ ر', pos: 'adj', gloss: 'the young' },
            { surface: 'وَقَالَ', lemma: 'قال', features: 'conj+perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'and said' },
            { surface: 'النَّبِيُّ', lemma: 'نبي', features: 'def.nom', root: 'ن ب أ', pos: 'noun', gloss: 'the Prophet' }
          ]
        },
        { id: 'qr1-24-014', page: 94, ar: '«إِنَّمَا بُعِثْتُ مُعَلِّمًا».', en: '"I have only been sent as a teacher."',
          tokens: [
            { surface: 'إِنَّمَا', lemma: 'إنما', features: 'part', root: '—', pos: 'part', gloss: 'only, indeed' },
            { surface: 'بُعِثْتُ', lemma: 'بعث', features: 'pass.perf.1s', root: 'ب ع ث', pos: 'verb', gloss: 'I was sent' },
            { surface: 'مُعَلِّمًا', lemma: 'معلم', features: 'indef.acc', root: 'ع ل م', pos: 'noun', gloss: 'as a teacher' }
          ]
        }
      ],
      checks: [
        {
          q: 'مَاذَا عَلَّمَ النَّبِيُّ ﷺ أُمَّتَهُ؟',
          options: [ 'أَدَبَ الأَكْلِ وَالشُّرْبِ وَأَدَبَ كُلِّ شَيْءٍ', 'الْكِتَابَةَ فَقَطْ', 'لَمْ يُعَلِّمْهُمْ شَيْئًا' ],
          answer: 0,
          qEn: 'What did the Prophet ﷺ teach his community?',
          optionsEn: [ 'The etiquette of eating and drinking, and the etiquette of everything', 'Writing only', 'He taught them nothing' ]
        }
      ]
    },
    {
      en: 'Allah Himself disciplined the Prophet ﷺ and taught him the etiquette of everything, so he said: "My Lord disciplined me, and made excellent my discipline."',
      sentences: [
        { id: 'qr1-24-015', page: 94, ar: 'وَقَدْ أَدَّبَ اللهُ النَّبِيَّ ﷺ وَعَلَّمَهُ أَدَبَ كُلِّ شَيْءٍ فَقَالَ:', en: 'Allah Himself disciplined the Prophet ﷺ and taught him the etiquette of everything, so he said:',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قد', features: 'conj+part', root: '—', pos: 'part', gloss: 'and indeed' },
            { surface: 'أَدَّبَ', lemma: 'أدب-فعل', features: 'perf.3ms', root: 'أ د ب', pos: 'verb', gloss: 'disciplined' },
            { surface: 'اللهُ', lemma: 'الله', features: 'nom', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'النَّبِيَّ', lemma: 'نبي', features: 'def.acc', root: 'ن ب أ', pos: 'noun', gloss: 'the Prophet' },
            { surface: 'وَعَلَّمَهُ', lemma: 'علم', features: 'conj+perf.3ms+3ms', root: 'ع ل م', pos: 'verb', gloss: 'and taught him' },
            { surface: 'أَدَبَ', lemma: 'أدب', features: 'acc.constr', root: 'أ د ب', pos: 'noun', gloss: 'the etiquette of' },
            { surface: 'كُلِّ', lemma: 'كل', features: 'gen.constr', root: 'ك ل ل', pos: 'noun', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شيء', features: 'indef.gen', root: 'ش ي أ', pos: 'noun', gloss: 'thing' },
            { surface: 'فَقَالَ', lemma: 'قال', features: 'conj+perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'so he said' }
          ]
        },
        { id: 'qr1-24-016', page: 94, ar: '«أَدَّبَنِيْ رَبِّيْ فَأَحْسَنَ تَأْدِيْبِيْ».', en: '"My Lord disciplined me, and made excellent my discipline."',
          tokens: [
            { surface: 'أَدَّبَنِيْ', lemma: 'أدب-فعل', features: 'perf.3ms+1s', root: 'أ د ب', pos: 'verb', gloss: 'disciplined me' },
            { surface: 'رَبِّيْ', lemma: 'رب', features: 'nom+1s', root: 'ر ب ب', pos: 'noun', gloss: 'my Lord' },
            { surface: 'فَأَحْسَنَ', lemma: 'أحسن', features: 'conj+perf.3ms', root: 'ح س ن', pos: 'verb', gloss: 'and made excellent' },
            { surface: 'تَأْدِيْبِيْ', lemma: 'تأديب', features: 'acc+1s', root: 'أ د ب', pos: 'noun', gloss: 'my discipline' }
          ]
        }
      ],
      checks: [
        {
          q: 'مَنْ أَدَّبَ النَّبِيَّ ﷺ؟',
          options: [ 'اللهُ سُبْحَانَهُ وَتَعَالَى', 'أَبُوْهُ', 'مُعَلِّمٌ فِيْ مَكَّةَ' ],
          answer: 0,
          qEn: 'Who disciplined the Prophet ﷺ?',
          optionsEn: [ 'Allah Himself', 'His father', 'A teacher in Makkah' ]
        }
      ]
    },
    {
      en: 'Abu Hurairah -- may Allah be pleased with him -- said: the Messenger of Allah ﷺ never once criticized food; if he desired it he ate it, and if he disliked it he simply left it.',
      sentences: [
        { id: 'qr1-24-017', page: 94, ar: 'وَقَالَ أَبُوْ هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ:', en: 'Abu Hurairah -- may Allah be pleased with him -- said:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قال', features: 'conj+perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'and said' },
            { surface: 'أَبُوْ', lemma: 'أبو', features: 'nom', root: 'أ ب و', pos: 'proper', gloss: 'Abu' },
            { surface: 'هُرَيْرَةَ', lemma: 'هريرة', features: 'gen', root: '—', pos: 'proper', gloss: 'Hurairah' },
            { surface: 'رَضِيَ', lemma: 'رضي', features: 'perf.3ms', root: 'ر ض ي', pos: 'verb', gloss: 'was pleased' },
            { surface: 'اللهُ', lemma: 'الله', features: 'nom', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'عَنْهُ', lemma: 'عن', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'with him' }
          ]
        },
        { id: 'qr1-24-018', page: 94, ar: 'مَا عَابَ رَسُوْلُ اللهِ ﷺ طَعَامًا قَطُّ،', en: 'The Messenger of Allah ﷺ never once criticized food,',
          tokens: [
            { surface: 'مَا', lemma: 'ما-نافية', features: 'part', root: '—', pos: 'part', gloss: 'not' },
            { surface: 'عَابَ', lemma: 'عاب', features: 'perf.3ms', root: 'ع ي ب', pos: 'verb', gloss: 'criticized' },
            { surface: 'رَسُوْلُ', lemma: 'رسول', features: 'nom.constr', root: 'ر س ل', pos: 'noun', gloss: 'the Messenger of' },
            { surface: 'اللهِ', lemma: 'الله', features: 'gen', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'طَعَامًا', lemma: 'طعام', features: 'indef.acc', root: 'ط ع م', pos: 'noun', gloss: 'food' },
            { surface: 'قَطُّ', lemma: 'قط', features: 'adv', root: '—', pos: 'adv', gloss: 'ever, at all' }
          ]
        },
        { id: 'qr1-24-019', page: 94, ar: 'إِنِ اشْتَهَاهُ أَكَلَهُ وَإِنْ كَرِهَهُ تَرَكَهُ.', en: 'if he desired it he ate it, and if he disliked it he left it.',
          tokens: [
            { surface: 'إِنِ', lemma: 'إن', features: 'part', root: '—', pos: 'part', gloss: 'if' },
            { surface: 'اشْتَهَاهُ', lemma: 'اشتهى', features: 'perf.3ms+3ms', root: 'ش ه و', pos: 'verb', gloss: 'he desired it' },
            { surface: 'أَكَلَهُ', lemma: 'اكل', features: 'perf.3ms+3ms', root: 'أ ك ل', pos: 'verb', gloss: 'he ate it' },
            { surface: 'وَإِنْ', lemma: 'إن', features: 'conj+part', root: '—', pos: 'part', gloss: 'and if' },
            { surface: 'كَرِهَهُ', lemma: 'كره', features: 'perf.3ms+3ms', root: 'ك ر ه', pos: 'verb', gloss: 'he disliked it' },
            { surface: 'تَرَكَهُ', lemma: 'ترك', features: 'perf.3ms+3ms', root: 'ت ر ك', pos: 'verb', gloss: 'he left it' }
          ]
        }
      ],
      checks: [
        {
          q: 'هَلْ كَانَ رَسُوْلُ اللهِ ﷺ يَعِيْبُ الطَّعَامَ؟',
          options: [ 'لَا، مَا عَابَ طَعَامًا قَطُّ', 'نَعَمْ، كَانَ يَعِيْبُ كُلَّ طَعَامٍ', 'كَانَ يَعِيْبُ الطَّعَامَ الْبَارِدَ فَقَطْ' ],
          answer: 0,
          qEn: 'Did the Messenger of Allah ﷺ criticize food?',
          optionsEn: [ 'No -- he never once criticized food', 'Yes, he criticized all food', 'He only criticized cold food' ]
        }
      ]
    },
    {
      en: 'And the Messenger of Allah ﷺ said: "I sit as a servant sits, and I eat as a servant eats," and he said: "I do not eat reclining."',
      sentences: [
        { id: 'qr1-24-020', page: 94, ar: 'وَقَالَ رَسُوْلُ اللهِ ﷺ:', en: 'And the Messenger of Allah ﷺ said:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قال', features: 'conj+perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'and said' },
            { surface: 'رَسُوْلُ', lemma: 'رسول', features: 'nom.constr', root: 'ر س ل', pos: 'noun', gloss: 'the Messenger of' },
            { surface: 'اللهِ', lemma: 'الله', features: 'gen', root: '—', pos: 'proper', gloss: 'Allah' }
          ]
        },
        { id: 'qr1-24-021', page: 94, ar: '«أَجْلِسُ كَمَا يَجْلِسُ الْعَبْدُ وَآكُلُ كَمَا يَأْكُلُ الْعَبْدُ»،', en: '"I sit as a servant sits, and I eat as a servant eats,"',
          tokens: [
            { surface: 'أَجْلِسُ', lemma: 'جلس', features: 'impf.1s', root: 'ج ل س', pos: 'verb', gloss: 'I sit' },
            { surface: 'كَمَا', lemma: 'كما', features: 'part', root: '—', pos: 'part', gloss: 'as' },
            { surface: 'يَجْلِسُ', lemma: 'جلس', features: 'impf.3ms', root: 'ج ل س', pos: 'verb', gloss: 'sits' },
            { surface: 'الْعَبْدُ', lemma: 'عبد', features: 'def.nom', root: 'ع ب د', pos: 'noun', gloss: 'the servant' },
            { surface: 'وَآكُلُ', lemma: 'اكل', features: 'conj+impf.1s', root: 'أ ك ل', pos: 'verb', gloss: 'and I eat' },
            { surface: 'كَمَا', lemma: 'كما', features: 'part', root: '—', pos: 'part', gloss: 'as' },
            { surface: 'يَأْكُلُ', lemma: 'اكل', features: 'impf.3ms', root: 'أ ك ل', pos: 'verb', gloss: 'eats' },
            { surface: 'الْعَبْدُ', lemma: 'عبد', features: 'def.nom', root: 'ع ب د', pos: 'noun', gloss: 'the servant' }
          ]
        },
        { id: 'qr1-24-022', page: 94, ar: 'وَقَالَ: «لَا آكُلُ مُتَّكِئًا».', en: 'and he said: "I do not eat reclining."',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قال', features: 'conj+perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'and he said' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'not' },
            { surface: 'آكُلُ', lemma: 'اكل', features: 'impf.1s', root: 'أ ك ل', pos: 'verb', gloss: 'I eat' },
            { surface: 'مُتَّكِئًا', lemma: 'متكئ', features: 'indef.acc', root: 'و ك أ', pos: 'adj', gloss: 'reclining' }
          ]
        }
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ رَسُوْلُ اللهِ ﷺ يَأْكُلُ؟',
          options: [ 'كَمَا يَجْلِسُ وَيَأْكُلُ الْعَبْدُ، وَلَا يَأْكُلُ مُتَّكِئًا', 'مُتَّكِئًا عَلَى وِسَادَةٍ', 'وَاقِفًا' ],
          answer: 0,
          qEn: 'How did the Messenger of Allah ﷺ eat?',
          optionsEn: [ 'As a servant sits and eats, and he never ate reclining', 'Reclining on a cushion', 'Standing up' ]
        }
      ]
    },
    {
      en: "And from Ka'b ibn Malik -- may Allah be pleased with him -- who said: \"I saw the Messenger of Allah ﷺ eating with three fingers, and when he finished, he licked them.\"",
      sentences: [
        { id: 'qr1-24-023', page: 94, ar: 'وَعَنْ كَعْبِ بْنِ مَالِكٍ رَضِيَ اللهُ عَنْهُ قَالَ:', en: "And from Ka'b ibn Malik -- may Allah be pleased with him -- who said:",
          tokens: [
            { surface: 'وَعَنْ', lemma: 'عن', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and from' },
            { surface: 'كَعْبِ', lemma: 'كعب', features: 'gen', root: '—', pos: 'proper', gloss: "Ka'b" },
            { surface: 'بْنِ', lemma: 'ابن', features: 'gen.constr', root: 'ب ن ي', pos: 'noun', gloss: 'son of' },
            { surface: 'مَالِكٍ', lemma: 'مالك', features: 'gen', root: '—', pos: 'proper', gloss: 'Malik' },
            { surface: 'رَضِيَ', lemma: 'رضي', features: 'perf.3ms', root: 'ر ض ي', pos: 'verb', gloss: 'was pleased' },
            { surface: 'اللهُ', lemma: 'الله', features: 'nom', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'عَنْهُ', lemma: 'عن', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'with him' },
            { surface: 'قَالَ', lemma: 'قال', features: 'perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'said' }
          ]
        },
        { id: 'qr1-24-024', page: 94, ar: 'رَأَيْتُ رَسُوْلَ اللهِ ﷺ يَأْكُلُ بِثَلَاثَةِ أَصَابِعَ وَإِذَا فَرَغَ لَعِقَهَا.', en: '"I saw the Messenger of Allah ﷺ eating with three fingers, and when he finished, he licked them."',
          tokens: [
            { surface: 'رَأَيْتُ', lemma: 'رأى', features: 'perf.1s', root: 'ر أ ي', pos: 'verb', gloss: 'I saw' },
            { surface: 'رَسُوْلَ', lemma: 'رسول', features: 'acc.constr', root: 'ر س ل', pos: 'noun', gloss: 'the Messenger of' },
            { surface: 'اللهِ', lemma: 'الله', features: 'gen', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'يَأْكُلُ', lemma: 'اكل', features: 'impf.3ms', root: 'أ ك ل', pos: 'verb', gloss: 'eating' },
            { surface: 'بِثَلَاثَةِ', lemma: 'ثلاثة', features: 'prep+gen.constr', root: 'ث ل ث', pos: 'num', gloss: 'with three' },
            { surface: 'أَصَابِعَ', lemma: 'أصبع', features: 'pl.gen', root: '—', pos: 'noun', gloss: 'fingers' },
            { surface: 'وَإِذَا', lemma: 'إذا', features: 'conj+part', root: '—', pos: 'part', gloss: 'and when' },
            { surface: 'فَرَغَ', lemma: 'فرغ', features: 'perf.3ms', root: 'ف ر غ', pos: 'verb', gloss: 'he finished' },
            { surface: 'لَعِقَهَا', lemma: 'لعق', features: 'perf.3ms+3fs', root: 'ل ع ق', pos: 'verb', gloss: 'he licked them' }
          ]
        }
      ],
      checks: [
        {
          q: 'بِكَمْ إِصْبَعٍ كَانَ رَسُوْلُ اللهِ ﷺ يَأْكُلُ؟',
          options: [ 'بِثَلَاثَةِ أَصَابِعَ', 'بِإِصْبَعَيْنِ', 'بِخَمْسَةِ أَصَابِعَ' ],
          answer: 0,
          qEn: 'How many fingers did the Messenger of Allah ﷺ eat with?',
          optionsEn: [ 'Three fingers', 'Two fingers', 'Five fingers' ]
        }
      ]
    },
    {
      en: 'And from Anas -- may Allah be pleased with him -- who said: whenever the Messenger of Allah ﷺ ate food he would lick his three fingers, and he said: "If a morsel falls from one of you, let him pick it up, wipe off any dirt from it, and eat it, and not leave it for Satan; and he commanded us to wipe our bowls clean, and said: \'You do not know in which of your food the blessing lies.\'"',
      sentences: [
        { id: 'qr1-24-025', page: 94, ar: 'وَعَنْ أَنَسٍ رَضِيَ اللهُ عَنْهُ قَالَ:', en: 'And from Anas -- may Allah be pleased with him -- who said:',
          tokens: [
            { surface: 'وَعَنْ', lemma: 'عن', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and from' },
            { surface: 'أَنَسٍ', lemma: 'أنس', features: 'gen', root: '—', pos: 'proper', gloss: 'Anas' },
            { surface: 'رَضِيَ', lemma: 'رضي', features: 'perf.3ms', root: 'ر ض ي', pos: 'verb', gloss: 'was pleased' },
            { surface: 'اللهُ', lemma: 'الله', features: 'nom', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'عَنْهُ', lemma: 'عن', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'with him' },
            { surface: 'قَالَ', lemma: 'قال', features: 'perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'said' }
          ]
        },
        { id: 'qr1-24-026', page: 94, ar: 'كَانَ رَسُوْلُ اللهِ ﷺ إِذَا أَكَلَ طَعَامًا لَعِقَ أَصَابِعَهُ الثَّلَاثَ،', en: '"Whenever the Messenger of Allah ﷺ ate food he would lick his three fingers,',
          tokens: [
            { surface: 'كَانَ', lemma: 'كان', features: 'perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'used to' },
            { surface: 'رَسُوْلُ', lemma: 'رسول', features: 'nom.constr', root: 'ر س ل', pos: 'noun', gloss: 'the Messenger of' },
            { surface: 'اللهِ', lemma: 'الله', features: 'gen', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'إِذَا', lemma: 'إذا', features: 'part', root: '—', pos: 'part', gloss: 'whenever' },
            { surface: 'أَكَلَ', lemma: 'اكل', features: 'perf.3ms', root: 'أ ك ل', pos: 'verb', gloss: 'he ate' },
            { surface: 'طَعَامًا', lemma: 'طعام', features: 'indef.acc', root: 'ط ع م', pos: 'noun', gloss: 'food' },
            { surface: 'لَعِقَ', lemma: 'لعق', features: 'perf.3ms', root: 'ل ع ق', pos: 'verb', gloss: 'he licked' },
            { surface: 'أَصَابِعَهُ', lemma: 'أصبع', features: 'pl.acc+3ms', root: '—', pos: 'noun', gloss: 'his fingers' },
            { surface: 'الثَّلَاثَ', lemma: 'ثلاثة', features: 'def.acc', root: 'ث ل ث', pos: 'num', gloss: 'the three' }
          ]
        },
        { id: 'qr1-24-027', page: 94, ar: 'وَقَالَ: «إِذَا سَقَطَتْ لُقْمَةُ أَحَدِكُمْ فَلْيَأْخُذْهَا وَلْيُمِطْ عَنْهَا الأَذَىٰ وَلْيَأْكُلْهَا،', en: 'and he said: \'If a morsel falls from one of you, let him pick it up, wipe off any dirt from it, and eat it,',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قال', features: 'conj+perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'and he said' },
            { surface: 'إِذَا', lemma: 'إذا', features: 'part', root: '—', pos: 'part', gloss: 'if' },
            { surface: 'سَقَطَتْ', lemma: 'سقط', features: 'perf.3fs', root: 'س ق ط', pos: 'verb', gloss: 'falls' },
            { surface: 'لُقْمَةُ', lemma: 'لقمة', features: 'nom.constr', root: 'ل ق م', pos: 'noun', gloss: 'the morsel of' },
            { surface: 'أَحَدِكُمْ', lemma: 'أحد', features: 'gen+2mp', root: 'أ ح د', pos: 'noun', gloss: 'one of you' },
            { surface: 'فَلْيَأْخُذْهَا', lemma: 'أخذ', features: 'conj+imp.3ms+3fs', root: 'أ خ ذ', pos: 'verb', gloss: 'let him take it' },
            { surface: 'وَلْيُمِطْ', lemma: 'أماط', features: 'conj+imp.3ms', root: 'م ي ط', pos: 'verb', gloss: 'and let him remove' },
            { surface: 'عَنْهَا', lemma: 'عن', features: 'prep+3fs', root: '—', pos: 'prep', gloss: 'from it' },
            { surface: 'الأَذَىٰ', lemma: 'أذى', features: 'def.acc', root: 'أ ذ ي', pos: 'noun', gloss: 'the dirt' },
            { surface: 'وَلْيَأْكُلْهَا', lemma: 'اكل', features: 'conj+imp.3ms+3fs', root: 'أ ك ل', pos: 'verb', gloss: 'and let him eat it' }
          ]
        },
        { id: 'qr1-24-028', page: 94, ar: 'وَلَا يَدَعْهَا لِلشَّيْطَانِ،', en: 'and not leave it for Satan;',
          tokens: [
            { surface: 'وَلَا', lemma: 'لا', features: 'conj+part', root: '—', pos: 'part', gloss: 'and not' },
            { surface: 'يَدَعْهَا', lemma: 'ودع', features: 'juss.3ms+3fs', root: 'و د ع', pos: 'verb', gloss: 'let him leave it' },
            { surface: 'لِلشَّيْطَانِ', lemma: 'شيطان', features: 'prep+def.gen', root: 'ش ط ن', pos: 'noun', gloss: 'for Satan' }
          ]
        },
        { id: 'qr1-24-029', page: 95, ar: 'وَأَمَرَنَا أَنْ نَسْلُتَ الْقَصْعَةَ،', en: 'and he commanded us to wipe our bowls clean,',
          tokens: [
            { surface: 'وَأَمَرَنَا', lemma: 'أمر', features: 'conj+perf.3ms+1p', root: 'أ م ر', pos: 'verb', gloss: 'and he commanded us' },
            { surface: 'أَنْ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'to' },
            { surface: 'نَسْلُتَ', lemma: 'سلت', features: 'subj.1p', root: 'س ل ت', pos: 'verb', gloss: 'we wipe clean' },
            { surface: 'الْقَصْعَةَ', lemma: 'قصعة', features: 'def.acc', root: 'ق ص ع', pos: 'noun', gloss: 'the bowl' }
          ]
        },
        { id: 'qr1-24-030', page: 95, ar: 'وَقَالَ: إِنَّكُمْ لَا تَدْرُوْنَ فِيْ أَيِّ طَعَامِكُمْ بَرَكَةٌ».', en: 'and said: "You do not know in which of your food the blessing lies."\'',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قال', features: 'conj+perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'and said' },
            { surface: 'إِنَّكُمْ', lemma: 'إن', features: 'part+2mp', root: '—', pos: 'part', gloss: 'indeed you' },
            { surface: 'لَا', lemma: 'لا', features: 'part', root: '—', pos: 'part', gloss: 'not' },
            { surface: 'تَدْرُوْنَ', lemma: 'درى', features: 'impf.2mp', root: 'د ر ي', pos: 'verb', gloss: 'you know' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'أَيِّ', lemma: 'أي', features: 'part', root: '—', pos: 'part', gloss: 'which' },
            { surface: 'طَعَامِكُمْ', lemma: 'طعام', features: 'gen+2mp', root: 'ط ع م', pos: 'noun', gloss: 'your food' },
            { surface: 'بَرَكَةٌ', lemma: 'بركة', features: 'indef.nom', root: 'ب ر ك', pos: 'noun', gloss: 'blessing' }
          ]
        }
      ],
      checks: [
        {
          q: 'مَاذَا أَمَرَنَا النَّبِيُّ ﷺ أَنْ نَفْعَلَ إِذَا سَقَطَتِ اللُّقْمَةُ؟',
          options: [ 'نَأْخُذَهَا وَنُمِيْطَ عَنْهَا الأَذَىٰ وَنَأْكُلَهَا', 'نَتْرُكَهَا عَلَى الأَرْضِ', 'نُعْطِيَهَا لِلْحَيَوَانِ' ],
          answer: 0,
          qEn: 'What did the Prophet ﷺ command us to do if a morsel falls?',
          optionsEn: [ 'Pick it up, wipe off any dirt, and eat it', 'Leave it on the ground', 'Give it to an animal' ]
        }
      ]
    },
    {
      en: 'And from Anas -- may Allah be pleased with him -- that the Messenger of Allah ﷺ used to breathe three times while drinking.',
      sentences: [
        { id: 'qr1-24-031', page: 95, ar: 'وَعَنْ أَنَسٍ رَضِيَ اللهُ عَنْهُ أَنَّ رَسُوْلَ اللهِ ﷺ كَانَ يَتَنَفَّسُ فِي الشَّرَابِ ثَلَاثًا.', en: 'And from Anas -- may Allah be pleased with him -- that the Messenger of Allah ﷺ used to breathe three times while drinking.',
          tokens: [
            { surface: 'وَعَنْ', lemma: 'عن', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and from' },
            { surface: 'أَنَسٍ', lemma: 'أنس', features: 'gen', root: '—', pos: 'proper', gloss: 'Anas' },
            { surface: 'رَضِيَ', lemma: 'رضي', features: 'perf.3ms', root: 'ر ض ي', pos: 'verb', gloss: 'was pleased' },
            { surface: 'اللهُ', lemma: 'الله', features: 'nom', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'عَنْهُ', lemma: 'عن', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'with him' },
            { surface: 'أَنَّ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'that' },
            { surface: 'رَسُوْلَ', lemma: 'رسول', features: 'acc.constr', root: 'ر س ل', pos: 'noun', gloss: 'the Messenger of' },
            { surface: 'اللهِ', lemma: 'الله', features: 'gen', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'كَانَ', lemma: 'كان', features: 'perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'used to' },
            { surface: 'يَتَنَفَّسُ', lemma: 'تنفس', features: 'impf.3ms', root: 'ن ف س', pos: 'verb', gloss: 'breathe' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'during' },
            { surface: 'الشَّرَابِ', lemma: 'شراب', features: 'def.gen', root: 'ش ر ب', pos: 'noun', gloss: 'the drink' },
            { surface: 'ثَلَاثًا', lemma: 'ثلاثة', features: 'acc', root: 'ث ل ث', pos: 'num', gloss: 'three times' }
          ]
        }
      ],
      checks: [
        {
          q: 'كَمْ مَرَّةً كَانَ النَّبِيُّ ﷺ يَتَنَفَّسُ فِي الشَّرَابِ؟',
          options: [ 'ثَلَاثًا', 'مَرَّةً وَاحِدَةً', 'لَمْ يَكُنْ يَتَنَفَّسُ' ],
          answer: 0,
          qEn: 'How many times did the Prophet ﷺ breathe while drinking?',
          optionsEn: [ 'Three times', 'Once', 'He never breathed while drinking' ]
        }
      ]
    },
    {
      en: 'And from Ibn Abbas -- may Allah be pleased with him -- that the Prophet ﷺ forbade breathing into a vessel or blowing into it.',
      sentences: [
        { id: 'qr1-24-032', page: 95, ar: 'وَعَنِ ابْنِ عَبَّاسٍ رَضِيَ اللهُ عَنْهُ أَنَّ النَّبِيَّ ﷺ نَهَىٰ أَنْ يُتَنَفَّسَ فِي الإِنَاءِ أَوْ يُنْفَخَ فِيْهِ.', en: 'And from Ibn Abbas -- may Allah be pleased with him -- that the Prophet ﷺ forbade breathing into a vessel or blowing into it.',
          tokens: [
            { surface: 'وَعَنِ', lemma: 'عن', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and from' },
            { surface: 'ابْنِ', lemma: 'ابن', features: 'gen.constr', root: 'ب ن ي', pos: 'noun', gloss: 'the son of' },
            { surface: 'عَبَّاسٍ', lemma: 'عباس', features: 'gen', root: '—', pos: 'proper', gloss: 'Abbas' },
            { surface: 'رَضِيَ', lemma: 'رضي', features: 'perf.3ms', root: 'ر ض ي', pos: 'verb', gloss: 'was pleased' },
            { surface: 'اللهُ', lemma: 'الله', features: 'nom', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'عَنْهُ', lemma: 'عن', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'with him' },
            { surface: 'أَنَّ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'that' },
            { surface: 'النَّبِيَّ', lemma: 'نبي', features: 'def.acc', root: 'ن ب أ', pos: 'noun', gloss: 'the Prophet' },
            { surface: 'نَهَىٰ', lemma: 'نهى', features: 'perf.3ms', root: 'ن ه ي', pos: 'verb', gloss: 'forbade' },
            { surface: 'أَنْ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'that one' },
            { surface: 'يُتَنَفَّسَ', lemma: 'تنفس', features: 'pass.subj.3ms', root: 'ن ف س', pos: 'verb', gloss: 'breathe' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'into' },
            { surface: 'الإِنَاءِ', lemma: 'إناء', features: 'def.gen', root: 'أ ن ي', pos: 'noun', gloss: 'the vessel' },
            { surface: 'أَوْ', lemma: 'أو', features: 'conj', root: '—', pos: 'conj', gloss: 'or' },
            { surface: 'يُنْفَخَ', lemma: 'نفخ', features: 'pass.subj.3ms', root: 'ن ف خ', pos: 'verb', gloss: 'one blow' },
            { surface: 'فِيْهِ', lemma: 'في', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'into it' }
          ]
        }
      ],
      checks: [
        {
          q: 'عَمَّ نَهَى النَّبِيُّ ﷺ فِيْمَا يَتَعَلَّقُ بِالإِنَاءِ؟',
          options: [ 'أَنْ يُتَنَفَّسَ فِيْهِ أَوْ يُنْفَخَ فِيْهِ', 'أَنْ يُغْسَلَ بَعْدَ الاسْتِعْمَالِ', 'أَنْ يُوْضَعَ عَلَى الأَرْضِ' ],
          answer: 0,
          qEn: 'What did the Prophet ﷺ forbid regarding a vessel?',
          optionsEn: [ 'Breathing into it or blowing into it', 'Washing it after use', 'Placing it on the ground' ]
        }
      ]
    },
    {
      en: 'And from Anas -- may Allah be pleased with him -- from the Prophet ﷺ, that he forbade drinking while standing.',
      sentences: [
        { id: 'qr1-24-033', page: 95, ar: 'وَعَنْ أَنَسٍ رَضِيَ اللهُ عَنْهُ عَنِ النَّبِيِّ ﷺ أَنَّهُ نَهَىٰ عَنِ الشُّرْبِ قَائِمًا.', en: 'And from Anas -- may Allah be pleased with him -- from the Prophet ﷺ, that he forbade drinking while standing.',
          tokens: [
            { surface: 'وَعَنْ', lemma: 'عن', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and from' },
            { surface: 'أَنَسٍ', lemma: 'أنس', features: 'gen', root: '—', pos: 'proper', gloss: 'Anas' },
            { surface: 'رَضِيَ', lemma: 'رضي', features: 'perf.3ms', root: 'ر ض ي', pos: 'verb', gloss: 'was pleased' },
            { surface: 'اللهُ', lemma: 'الله', features: 'nom', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'عَنْهُ', lemma: 'عن', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'with him' },
            { surface: 'عَنِ', lemma: 'عن', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'النَّبِيِّ', lemma: 'نبي', features: 'def.gen', root: 'ن ب أ', pos: 'noun', gloss: 'the Prophet' },
            { surface: 'أَنَّهُ', lemma: 'أن', features: 'part+3ms', root: '—', pos: 'part', gloss: 'that he' },
            { surface: 'نَهَىٰ', lemma: 'نهى', features: 'perf.3ms', root: 'ن ه ي', pos: 'verb', gloss: 'forbade' },
            { surface: 'عَنِ', lemma: 'عن', features: 'prep', root: '—', pos: 'prep', gloss: 'against' },
            { surface: 'الشُّرْبِ', lemma: 'شرب-اسم', features: 'def.gen', root: 'ش ر ب', pos: 'noun', gloss: 'drinking' },
            { surface: 'قَائِمًا', lemma: 'قائم', features: 'indef.acc', root: 'ق و م', pos: 'adj', gloss: 'standing' }
          ]
        }
      ],
      checks: [
        {
          q: 'عَنْ أَيِّ شَيْءٍ نَهَى النَّبِيُّ ﷺ فِي الشُّرْبِ؟',
          options: [ 'الشُّرْبِ قَائِمًا', 'الشُّرْبِ بَارِدًا', 'الشُّرْبِ فِي الصَّبَاحِ' ],
          answer: 0,
          qEn: 'What did the Prophet ﷺ forbid regarding drinking?',
          optionsEn: [ 'Drinking while standing', 'Drinking cold water', 'Drinking in the morning' ]
        }
      ]
    },
    {
      en: 'And from Hudhayfah -- may Allah be pleased with him -- who said: "The Prophet ﷺ forbade us silk and fine silk brocade, and drinking from vessels of gold and silver," and he said: "They belong to them in this world, and they belong to you in the Hereafter."',
      sentences: [
        { id: 'qr1-24-034', page: 95, ar: 'وَعَنْ حُذَيْفَةَ رَضِيَ اللهُ عَنْهُ قَالَ:', en: 'And from Hudhayfah -- may Allah be pleased with him -- who said:',
          tokens: [
            { surface: 'وَعَنْ', lemma: 'عن', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and from' },
            { surface: 'حُذَيْفَةَ', lemma: 'حذيفة', features: 'gen', root: '—', pos: 'proper', gloss: 'Hudhayfah' },
            { surface: 'رَضِيَ', lemma: 'رضي', features: 'perf.3ms', root: 'ر ض ي', pos: 'verb', gloss: 'was pleased' },
            { surface: 'اللهُ', lemma: 'الله', features: 'nom', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'عَنْهُ', lemma: 'عن', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'with him' },
            { surface: 'قَالَ', lemma: 'قال', features: 'perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'said' }
          ]
        },
        { id: 'qr1-24-035', page: 95, ar: 'إِنَّ النَّبِيَّ ﷺ نَهَانَا عَنِ الْحَرِيْرِ وَالدِّيْبَاجِ وَالشُّرْبِ فِيْ آنِيَةِ الذَّهَبِ وَالْفِضَّةِ،', en: '"The Prophet ﷺ forbade us silk and fine silk brocade, and drinking from vessels of gold and silver,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إن', features: 'part', root: '—', pos: 'part', gloss: 'indeed' },
            { surface: 'النَّبِيَّ', lemma: 'نبي', features: 'def.acc', root: 'ن ب أ', pos: 'noun', gloss: 'the Prophet' },
            { surface: 'نَهَانَا', lemma: 'نهى', features: 'perf.3ms+1p', root: 'ن ه ي', pos: 'verb', gloss: 'forbade us' },
            { surface: 'عَنِ', lemma: 'عن', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'الْحَرِيْرِ', lemma: 'حرير', features: 'def.gen', root: 'ح ر ر', pos: 'noun', gloss: 'the silk' },
            { surface: 'وَالدِّيْبَاجِ', lemma: 'ديباج', features: 'conj+def.gen', root: 'د ب ج', pos: 'noun', gloss: 'and the fine silk brocade' },
            { surface: 'وَالشُّرْبِ', lemma: 'شرب-اسم', features: 'conj+def.gen', root: 'ش ر ب', pos: 'noun', gloss: 'and drinking' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'آنِيَةِ', lemma: 'إناء', features: 'pl.gen.constr', root: 'أ ن ي', pos: 'noun', gloss: 'vessels of' },
            { surface: 'الذَّهَبِ', lemma: 'ذهب-معدن', features: 'def.gen', root: 'ذ ه ب', pos: 'noun', gloss: 'gold' },
            { surface: 'وَالْفِضَّةِ', lemma: 'فضة', features: 'conj+def.gen', root: 'ف ض ض', pos: 'noun', gloss: 'and silver' }
          ]
        },
        { id: 'qr1-24-036', page: 95, ar: 'وَقَالَ: هِيَ لَهُمْ فِي الدُّنْيَا وَهِيَ لَكُمْ فِي الآخِرَةِ.', en: 'and he said: "They belong to them in this world, and they belong to you in the Hereafter."',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قال', features: 'conj+perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'and he said' },
            { surface: 'هِيَ', lemma: 'هي', features: 'nom', root: '—', pos: 'noun', gloss: 'they' },
            { surface: 'لَهُمْ', lemma: 'ل', features: 'prep+3mp', root: '—', pos: 'prep', gloss: 'belong to them' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'الدُّنْيَا', lemma: 'دنيا', features: 'def.gen', root: 'د ن و', pos: 'noun', gloss: 'this world' },
            { surface: 'وَهِيَ', lemma: 'هي', features: 'conj+nom', root: '—', pos: 'noun', gloss: 'and they' },
            { surface: 'لَكُمْ', lemma: 'ل', features: 'prep+2mp', root: '—', pos: 'prep', gloss: 'belong to you' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'الآخِرَةِ', lemma: 'آخرة', features: 'def.gen', root: 'أ خ ر', pos: 'noun', gloss: 'the Hereafter' }
          ]
        }
      ],
      checks: [
        {
          q: 'عَمَّ نَهَانَا النَّبِيُّ ﷺ كَمَا رَوَى حُذَيْفَةُ؟',
          options: [ 'الْحَرِيْرِ وَالدِّيْبَاجِ وَالشُّرْبِ فِيْ آنِيَةِ الذَّهَبِ وَالْفِضَّةِ', 'أَكْلِ اللَّحْمِ', 'لُبْسِ الْقُطْنِ' ],
          answer: 0,
          qEn: 'What did the Prophet ﷺ forbid us, as Hudhayfah reported?',
          optionsEn: [ 'Silk, fine silk brocade, and drinking from vessels of gold and silver', 'Eating meat', 'Wearing cotton' ]
        }
      ]
    }
  ]
};

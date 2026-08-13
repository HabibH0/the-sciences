// القراءة الراشدة, volume one, chapter twenty-six -- يَوْمٌ مَطِيْرٌ.
//
// Pages 98-100 (confirmed by the book's own "***" chapter-end divider
// partway down page 100 -- chapter 27, الْبَرِيْدُ, starts cleanly at the
// top of page 101). Earlier reconnaissance had this chapter's title as
// "يَوْمٌ مُنِيْرٌ" ("A Radiant Day") -- the scan clearly shows "مَطِيْرٌ"
// ("Rainy") instead; the title and blurb below use the corrected reading.
//
// A first-person narrative, same register as chapter-08.js/chapter-10.js:
// a rainy night gives way to a muddy, overcast day; the narrator loses
// patience sitting at home, visits his friend Mas'ud, is talked out of a
// walk by the mud, declines dinner to hurry home ahead of the next
// downpour, gets splashed by a passing car anyway, and just makes it
// indoors before the rain returns. The print's ten blank-line-separated
// blocks become this chapter's ten paragraphs (paragraphs 5-7 are a short
// dialogue exchange with Mas'ud, matching chapter-08.js's own mixed
// narrative/dialogue pattern). One comprehension check per paragraph,
// matching chapter-23.js's/chapter-24.js's own one-check-per-block practice
// for paragraph-dense chapters.
//
// register: 'first_person_singular_narrative', matching chapter-08.js/
// chapter-10.js exactly -- same first-person past-tense storytelling voice.
//
// Homograph notes (four new disambiguating keys, all scoped to this
// chapter's own lemma dictionary):
//   - "نشأ-حدث": "وَنَشَأَ وَحْلٌ" = "and much mud formed/arose", distinct
//     from chapter-23.js's "نشأ" = "to grow up" (of a child) -- same root,
//     unrelated sense.
//   - "أمن-فعل": "وَأَمِنَ النَّاسُ" = "and the people felt safe/at ease"
//     (verb), distinct from chapter-21.js's "أمن" = "safety" (noun).
//   - "مطر-فعل": "مَتَىٰ تُمْطِرُ السَّمَاءُ" = "when the sky will rain" (form
//     IV verb), distinct from chapter-03.js's "مطر" = "rain" (noun) --
//     reused as-is throughout this same chapter for the noun sense
//     ("نَزَلَ الْمَطَرُ", "انْقَطَعَ الْمَطَرُ", etc.).
//   - "عشاء-وجبة": "الْعَشَاءُ" (fatha on the ʿayn) = "dinner, the evening
//     meal" (paragraphs 6-7), distinct from chapter-01.js's "عشاء" (kasra
//     on the ʿayn) = "ʿIshāʾ, the night prayer" -- reused as-is in
//     paragraph 9 ("صَلَّيْتُ الْعِشَاءَ"). The scan's diacritics keep the two
//     clearly apart (فَتْحَة vs كَسْرَة on the same consonant skeleton).
// "سال" (verb, "to flow" -- of the flooded roads) and "سيل" (noun, "flood,
// torrent", paragraph 10) share a root but are different dictionary words
// with different vowel patterns, so need no suffix, just two ordinary new
// entries -- likewise "طلع" (verb, "to rise", of the sun) is unrelated to
// the already-established "طالع" (chapter-01.js, "to study, read up") even
// though both come from ط ل ع.
//
// "أَمَا" (paragraph 5, "haven't you...?") and "أَمَّا" (paragraph 7, "as
// for...") both fold into the single lemma "أما" already shared by
// chapter-04.js ("as for") and chapter-09.js ("[interrogative negation]")
// without a suffix -- that is the book's own established precedent for
// this pair (same pos, same bare spelling once the shadda is set aside),
// so this chapter follows it rather than inventing a new split; each
// token's own `gloss` carries the sense that matters in context. "أَلَا"
// (paragraphs 5-6, "won't you...?") and "إِلَّا" (paragraph 4, "except")
// are already distinct book-wide lemmas ("ألا" chapter-04.js/chapter-06.js/
// chapter-22.js; "إلا" chapter-07.js/chapter-09.js) and are reused as-is.
//
// The six marginal footnotes the book prints for this chapter (توسّخ،
// تطاير، زلق، وحل on page 98; مطرية، سئم on page 99) are carried into
// `book_note` on their lemmas verbatim, matching established practice.
export const CHAPTER = {
  id: 'ch26',
  title: {
    ar: 'يَوْمٌ مَطِيْرٌ',
    en: 'A Rainy Day'
  },
  pages: [
    98,
    99,
    100
  ],
  register: 'first_person_singular_narrative',
  newWords: [
    'سال',
    'شارع',
    'نشأ-حدث',
    'وحل',
    'زلق',
    'توسخ',
    'ثوب',
    'اذا',
    'سار',
    'سيارة',
    'تطاير',
    'انقطع',
    'أمن-فعل',
    'مشى',
    'جدا',
    'مطمئن',
    'اذ',
    'غفلة',
    'ابتل',
    'عاقل',
    'اخذ',
    'نشر',
    'طلع',
    'شمس',
    'طول',
    'سماء',
    'غيم',
    'ذو',
    'سئم',
    'جلوس',
    'مطرية',
    'مسعود',
    'اخ',
    'ارض',
    'اراد',
    'متى',
    'مطر-فعل',
    'استأذن',
    'مر',
    'فاض',
    'نهر',
    'سيل',
    'تهدم',
    'عشاء-وجبة'
  ],
  lemmas: {
    'نزل': { root: 'ن ز ل', pos: 'verb', gloss: 'to come down, fall (of rain)', content: true },
    'مطر': { root: 'م ط ر', pos: 'noun', gloss: 'rain', content: true },
    'في': { root: '—', pos: 'prep', gloss: 'in', content: false },
    'ليل': { root: 'ل ي ل', pos: 'noun', gloss: 'night', content: true },
    'سال': { root: 'س ي ل', pos: 'verb', gloss: 'to flow, run', content: true },
    'طريق': { root: 'ط ر ق', pos: 'noun', gloss: 'road, way', content: true },
    'شارع': { root: 'ش ر ع', pos: 'noun', gloss: 'street', content: true },
    'نشأ-حدث': { root: 'ن ش أ', pos: 'verb', gloss: 'to arise, form, come about', content: true },
    'وحل': { root: 'و ح ل', pos: 'noun', gloss: 'mud', content: true, book_note: 'وَحَل جمع أوحال ووُحُول: خليط من الطين والماء.' },
    'كثير': { root: 'ك ث ر', pos: 'adj', gloss: 'much, many', content: true },
    'زلق': { root: 'ز ل ق', pos: 'verb', gloss: 'to slip', content: true, book_note: 'زَلِقَ يَزْلَقُ: زَلَّ.' },
    'ب': { root: '—', pos: 'prep', gloss: 'with, by, in', content: false },
    'ناس': { root: 'ن و س', pos: 'noun', gloss: 'people', content: true },
    'توسخ': { root: 'و س خ', pos: 'verb', gloss: 'to get dirty', content: true, book_note: 'تَوَسَّخَ يَتَوَسَّخُ: عَلَاهُ الوَسَخُ، وهو ما يعلو الثوب وغيره من القذارة.' },
    'ثوب': { root: 'ث و ب', pos: 'noun', gloss: 'garment, (pl.) clothes', content: true },
    'اذا': { root: '—', pos: 'part', gloss: 'whenever, if', content: false },
    'سار': { root: 'س ي ر', pos: 'verb', gloss: 'to travel, move, drive', content: true },
    'سيارة': { root: 'س ي ر', pos: 'noun', gloss: 'car', content: true },
    'تطاير': { root: 'ط ي ر', pos: 'verb', gloss: 'to scatter, splash, fly off', content: true, book_note: 'تَطَايَرَ يَتَطَايَرُ الشيءُ: تَنَاثَرَ.' },
    'ماء': { root: 'م و ه', pos: 'noun', gloss: 'water', content: true },
    'انقطع': { root: 'ق ط ع', pos: 'verb', gloss: 'to stop, be cut off', content: true },
    'صباح': { root: 'ص ب ح', pos: 'noun', gloss: 'morning', content: true },
    'أمن-فعل': { root: 'أ م ن', pos: 'verb', gloss: 'to feel safe, be at ease', content: true },
    'خرج': { root: 'خ ر ج', pos: 'verb', gloss: 'to go out', content: true },
    'مشى': { root: 'م ش ي', pos: 'verb', gloss: 'to walk', content: true },
    'على': { root: '—', pos: 'prep', gloss: 'on', content: false },
    'قد': { root: '—', pos: 'part', gloss: 'indeed, already', content: false },
    'سقط': { root: 'س ق ط', pos: 'verb', gloss: 'to fall', content: true },
    'ضحك': { root: 'ض ح ك', pos: 'verb', gloss: 'to laugh', content: true },
    'رجل': { root: 'ر ج ل', pos: 'noun', gloss: 'man', content: true },
    'جدا': { root: 'ج د د', pos: 'adv', gloss: 'very much', content: true },
    'كان': { root: 'ك و ن', pos: 'verb', gloss: 'to be', content: true },
    'مطمئن': { root: 'ط م أ ن', pos: 'adj', gloss: 'at ease, reassured', content: true },
    'اذ': { root: '—', pos: 'part', gloss: 'when, just as', content: false },
    'جاء': { root: 'ج ي أ', pos: 'verb', gloss: 'to come', content: true },
    'غفلة': { root: 'غ ف ل', pos: 'noun', gloss: 'unawareness; (عَلَى غَفْلَةٍ) unexpectedly', content: true },
    'ابتل': { root: 'ب ل ل', pos: 'verb', gloss: 'to get wet, soaked', content: true },
    'بعض': { root: 'ب ع ض', pos: 'noun', gloss: 'some', content: true },
    'عاقل': { root: 'ع ق ل', pos: 'noun', gloss: 'sensible, wise person', content: true },
    'اخذ': { root: 'أ خ ذ', pos: 'verb', gloss: 'to take', content: true },
    'مع': { root: '—', pos: 'prep', gloss: 'with', content: false },
    'نشر': { root: 'ن ش ر', pos: 'verb', gloss: 'to spread out, open', content: true },
    'ترك': { root: 'ت ر ك', pos: 'verb', gloss: 'to leave', content: true },
    'ظن': { root: 'ظ ن ن', pos: 'verb', gloss: 'to think, suppose', content: true },
    'أن': { root: '—', pos: 'part', gloss: 'that', content: false },
    'جرى': { root: 'ج ر ي', pos: 'verb', gloss: 'to run', content: true },
    'رجع': { root: 'ر ج ع', pos: 'verb', gloss: 'to return', content: true },
    'الى': { root: '—', pos: 'prep', gloss: 'to', content: false },
    'بيت': { root: 'ب ي ت', pos: 'noun', gloss: 'house', content: true },
    'تأسف': { root: 'أ س ف', pos: 'verb', gloss: 'to regret, feel sorry', content: true },
    'طلع': { root: 'ط ل ع', pos: 'verb', gloss: 'to rise (of the sun), appear', content: true },
    'شمس': { root: 'ش م س', pos: 'noun', gloss: 'sun', content: true },
    'طول': { root: 'ط و ل', pos: 'noun', gloss: 'length, extent; (acc.) throughout', content: true },
    'نهار': { root: 'ن ه ر', pos: 'noun', gloss: 'daytime', content: true },
    'زال': { root: 'ز ي ل', pos: 'verb', gloss: 'to cease, stop (being)', content: true },
    'سماء': { root: 'س م و', pos: 'noun', gloss: 'sky', content: true },
    'غيم': { root: 'غ ي م', pos: 'noun', gloss: 'clouds, cloudy weather', content: true },
    'لم': { root: '—', pos: 'part', gloss: 'not (+ jussive; past negation)', content: false },
    'إلا': { root: '—', pos: 'part', gloss: 'except, only', content: false },
    'إن': { root: '—', pos: 'part', gloss: 'if; indeed, verily', content: false },
    'ذو': { root: 'ذ و و', pos: 'noun', gloss: 'possessor of, one with', content: true },
    'حاجة': { root: 'ح و ج', pos: 'noun', gloss: 'need; (pl.) provisions', content: true },
    'سئم': { root: 'س أ م', pos: 'verb', gloss: 'to grow tired of, weary of', content: true, book_note: 'سَئِمَ يَسْأَمُ: مَلَّ.' },
    'جلوس': { root: 'ج ل س', pos: 'noun', gloss: 'sitting', content: true },
    'عصر': { root: 'ع ص ر', pos: 'noun', gloss: 'afternoon', content: true },
    'مطرية': { root: 'م ط ر', pos: 'noun', gloss: 'umbrella', content: true, book_note: 'مِطْرِية جمع مطريات: أداة كالمِظَلَّة تحمي الشخص من المطر.' },
    'ذهب': { root: 'ذ ه ب', pos: 'verb', gloss: 'to go', content: true },
    'صديق': { root: 'ص د ق', pos: 'noun', gloss: 'friend', content: true },
    'مسعود': { root: '—', pos: 'proper', gloss: "Mas'ud (a name)", content: true },
    'وجد': { root: 'و ج د', pos: 'verb', gloss: 'to find', content: true },
    'طالع': { root: 'ط ل ع', pos: 'verb', gloss: 'to study, read up', content: true, book_note: 'طالَعَ يُطالِعُ مُطالعةَ الكتاب = قرأه (to read it)' },
    'كتاب': { root: 'ك ت ب', pos: 'noun', gloss: 'book', content: true },
    'قال': { root: 'ق و ل', pos: 'verb', gloss: 'to say', content: true },
    'ل': { root: '—', pos: 'prep', gloss: 'to, for', content: false },
    'يا': { root: '—', pos: 'part', gloss: 'O (vocative)', content: false },
    'اخ': { root: 'أ خ و', pos: 'noun', gloss: 'brother', content: true },
    'تنزه': { root: 'ن ز ه', pos: 'verb', gloss: 'to go on an outing, take a stroll', content: true },
    'قليل': { root: 'ق ل ل', pos: 'adv', gloss: 'little, a bit; a little, a while (acc. of manner)', content: true },
    'ألا': { root: '—', pos: 'part', gloss: "isn't it that...? don't you...?", content: false },
    'أما': { root: '—', pos: 'part', gloss: 'as for; is it not that...?', content: false },
    'رأى': { root: 'ر أ ي', pos: 'verb', gloss: 'to see', content: true },
    'ارض': { root: 'أ ر ض', pos: 'noun', gloss: 'earth, ground', content: true },
    'هذا': { root: '—', pos: 'dem', gloss: 'this (m.)', content: false },
    'ليس': { root: 'ل ي س', pos: 'verb', gloss: 'to not be', content: true },
    'يوم': { root: 'ي و م', pos: 'noun', gloss: 'day', content: true },
    'خروج': { root: 'خ ر ج', pos: 'noun', gloss: 'going out, departure', content: true },
    'تفضل': { root: 'ف ض ل', pos: 'verb', gloss: 'please, go ahead', content: true },
    'تعشى': { root: 'ع ش و', pos: 'verb', gloss: 'to eat dinner', content: true },
    'نعم': { root: '—', pos: 'part', gloss: 'yes', content: false },
    'عشاء-وجبة': { root: 'ع ش و', pos: 'noun', gloss: 'dinner, the evening meal', content: true },
    'لا': { root: '—', pos: 'part', gloss: 'not, no', content: false },
    'اراد': { root: 'ر و د', pos: 'verb', gloss: 'to want', content: true },
    'سريع': { root: 'س ر ع', pos: 'adj', gloss: 'fast, quick', content: true },
    'درى': { root: 'د ر ي', pos: 'verb', gloss: 'to know', content: true },
    'متى': { root: '—', pos: 'part', gloss: 'when', content: false },
    'مطر-فعل': { root: 'م ط ر', pos: 'verb', gloss: 'to rain', content: true },
    'جلس': { root: 'ج ل س', pos: 'verb', gloss: 'to sit', content: true },
    'ثم': { root: '—', pos: 'part', gloss: 'then', content: false },
    'استأذن': { root: 'أ ذ ن', pos: 'verb', gloss: 'to ask permission, ask leave', content: true },
    'مر': { root: 'م ر ر', pos: 'verb', gloss: 'to pass by', content: true },
    'دخل': { root: 'د خ ل', pos: 'verb', gloss: 'to enter', content: true },
    'وضع': { root: 'و ض ع', pos: 'verb', gloss: 'to put, place', content: true },
    'حتى': { root: '—', pos: 'part', gloss: 'until', content: false },
    'حمد': { root: 'ح م د', pos: 'verb', gloss: 'to praise, thank', content: true },
    'الله': { root: '—', pos: 'proper', gloss: 'Allah', content: true },
    'تعالى': { root: 'ع ل و', pos: 'verb', gloss: 'to be exalted (of Allah)', content: true },
    'وصل': { root: 'و ص ل', pos: 'verb', gloss: 'to arrive', content: true },
    'صلى': { root: 'ص ل و', pos: 'verb', gloss: 'to pray', content: true },
    'عشاء': { root: 'ع ش و', pos: 'noun', gloss: 'ʿIshāʾ, night prayer', content: true },
    'نام': { root: 'ن و م', pos: 'verb', gloss: 'to sleep', content: true },
    'ما-نافية': { root: '—', pos: 'part', gloss: 'not, there is not', content: false },
    'علم': { root: 'ع ل م', pos: 'verb', gloss: 'to know, learn', content: true },
    'من': { root: '—', pos: 'prep', gloss: 'from', content: false },
    'هذه': { root: '—', pos: 'dem', gloss: 'this (f.)', content: false },
    'سنة': { root: 'س ن و', pos: 'noun', gloss: 'year', content: true },
    'فاض': { root: 'ف ي ض', pos: 'verb', gloss: 'to overflow', content: true },
    'نهر': { root: 'ن ه ر', pos: 'noun', gloss: 'river', content: true },
    'سيل': { root: 'س ي ل', pos: 'noun', gloss: 'flood, torrent', content: true },
    'تهدم': { root: 'ه د م', pos: 'verb', gloss: 'to collapse, be demolished', content: true }
  },
  paragraphs: [
    {
      id: 'p1',
      en: 'Rain fell at night, and the roads and streets flowed, and much mud formed that people slipped on, and clothes got dirty, and whenever a car drove past, water splashed everywhere.',
      sentences: [
        { id: 'qr1-26-001', page: 98, ar: 'نَزَلَ الْمَطَرُ فِي اللَّيْلِ وَسَالَتِ الطُّرُقُ وَالشَّوَارِعُ وَنَشَأَ وَحْلٌ كَثِيْرٌ زَلَقَ بِهِ النَّاسُ وَتَوَسَّخَتِ الثِّيَابُ،', en: 'Rain fell at night, and the roads and streets flowed, and much mud formed that people slipped on, and clothes got dirty,',
          tokens: [
            { surface: 'نَزَلَ', lemma: 'نزل', features: 'perf.3ms', root: 'ن ز ل', pos: 'verb', gloss: 'fell' },
            { surface: 'الْمَطَرُ', lemma: 'مطر', features: 'def.nom', root: 'م ط ر', pos: 'noun', gloss: 'the rain' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'اللَّيْلِ', lemma: 'ليل', features: 'def.gen', root: 'ل ي ل', pos: 'noun', gloss: 'the night' },
            { surface: 'وَسَالَتِ', lemma: 'سال', features: 'conj+perf.3fs', root: 'س ي ل', pos: 'verb', gloss: 'and flowed' },
            { surface: 'الطُّرُقُ', lemma: 'طريق', features: 'pl.def.nom', root: 'ط ر ق', pos: 'noun', gloss: 'the roads' },
            { surface: 'وَالشَّوَارِعُ', lemma: 'شارع', features: 'conj+pl.def.nom', root: 'ش ر ع', pos: 'noun', gloss: 'and the streets' },
            { surface: 'وَنَشَأَ', lemma: 'نشأ-حدث', features: 'conj+perf.3ms', root: 'ن ش أ', pos: 'verb', gloss: 'and formed' },
            { surface: 'وَحْلٌ', lemma: 'وحل', features: 'indef.nom', root: 'و ح ل', pos: 'noun', gloss: 'mud' },
            { surface: 'كَثِيْرٌ', lemma: 'كثير', features: 'indef.nom', root: 'ك ث ر', pos: 'adj', gloss: 'much' },
            { surface: 'زَلَقَ', lemma: 'زلق', features: 'perf.3ms', root: 'ز ل ق', pos: 'verb', gloss: 'slipped' },
            { surface: 'بِهِ', lemma: 'ب', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'on it' },
            { surface: 'النَّاسُ', lemma: 'ناس', features: 'def.nom', root: 'ن و س', pos: 'noun', gloss: 'the people' },
            { surface: 'وَتَوَسَّخَتِ', lemma: 'توسخ', features: 'conj+perf.3fs', root: 'و س خ', pos: 'verb', gloss: 'and got dirty' },
            { surface: 'الثِّيَابُ', lemma: 'ثوب', features: 'pl.def.nom', root: 'ث و ب', pos: 'noun', gloss: 'the clothes' }
          ]
        },
        { id: 'qr1-26-002', page: 98, ar: 'وَإِذَا سَارَتْ سَيَّارَةٌ تَطَايَرَ الْمَاءُ.', en: 'and whenever a car drove past, water splashed everywhere.',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'اذا', features: 'conj+part', root: '—', pos: 'part', gloss: 'and whenever' },
            { surface: 'سَارَتْ', lemma: 'سار', features: 'perf.3fs', root: 'س ي ر', pos: 'verb', gloss: 'traveled, moved' },
            { surface: 'سَيَّارَةٌ', lemma: 'سيارة', features: 'indef.nom', root: 'س ي ر', pos: 'noun', gloss: 'a car' },
            { surface: 'تَطَايَرَ', lemma: 'تطاير', features: 'perf.3ms', root: 'ط ي ر', pos: 'verb', gloss: 'splashed, scattered' },
            { surface: 'الْمَاءُ', lemma: 'ماء', features: 'def.nom', root: 'م و ه', pos: 'noun', gloss: 'the water' }
          ]
        }
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لِلثِّيَابِ فِيْ اللَّيْلِ؟',
          options: [ 'تَوَسَّخَتْ بِالْوَحْلِ', 'جَفَّتْ', 'احْتَرَقَتْ' ],
          answer: 0,
          qEn: "What happened to people's clothes at night?",
          optionsEn: [ 'They got dirty with mud', 'They dried out', 'They burned' ]
        }
      ]
    },
    {
      id: 'p2',
      en: 'The rain stopped in the morning, and the people felt at ease; they went out walking in the streets, their clothes already muddied, and some people slipped on the street and fell in the mud, and people laughed, and the man laughed, and his clothes got very dirty.',
      sentences: [
        { id: 'qr1-26-003', page: 98, ar: 'انْقَطَعَ الْمَطَرُ فِي الصَّبَاحِ وَأَمِنَ النَّاسُ،', en: 'The rain stopped in the morning, and the people felt at ease,',
          tokens: [
            { surface: 'انْقَطَعَ', lemma: 'انقطع', features: 'perf.3ms', root: 'ق ط ع', pos: 'verb', gloss: 'stopped' },
            { surface: 'الْمَطَرُ', lemma: 'مطر', features: 'def.nom', root: 'م ط ر', pos: 'noun', gloss: 'the rain' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'الصَّبَاحِ', lemma: 'صباح', features: 'def.gen', root: 'ص ب ح', pos: 'noun', gloss: 'the morning' },
            { surface: 'وَأَمِنَ', lemma: 'أمن-فعل', features: 'conj+perf.3ms', root: 'أ م ن', pos: 'verb', gloss: 'and felt safe' },
            { surface: 'النَّاسُ', lemma: 'ناس', features: 'def.nom', root: 'ن و س', pos: 'noun', gloss: 'the people' }
          ]
        },
        { id: 'qr1-26-004', page: 98, ar: 'خَرَجُوْا يَمْشُوْنَ عَلَى الشَّوَارِعِ وَقَدْ تَوَسَّخَتْ ثِيَابُهُمْ بِالْوَحَلِ،', en: 'they went out walking in the streets, their clothes already muddied,',
          tokens: [
            { surface: 'خَرَجُوْا', lemma: 'خرج', features: 'perf.3mp', root: 'خ ر ج', pos: 'verb', gloss: 'they went out' },
            { surface: 'يَمْشُوْنَ', lemma: 'مشى', features: 'impf.3mp', root: 'م ش ي', pos: 'verb', gloss: 'walking' },
            { surface: 'عَلَى', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'on' },
            { surface: 'الشَّوَارِعِ', lemma: 'شارع', features: 'pl.def.gen', root: 'ش ر ع', pos: 'noun', gloss: 'the streets' },
            { surface: 'وَقَدْ', lemma: 'قد', features: 'conj+part', root: '—', pos: 'part', gloss: 'and already' },
            { surface: 'تَوَسَّخَتْ', lemma: 'توسخ', features: 'perf.3fs', root: 'و س خ', pos: 'verb', gloss: 'got dirty' },
            { surface: 'ثِيَابُهُمْ', lemma: 'ثوب', features: 'pl.nom+3mp', root: 'ث و ب', pos: 'noun', gloss: 'their clothes' },
            { surface: 'بِالْوَحَلِ', lemma: 'وحل', features: 'prep+def.gen', root: 'و ح ل', pos: 'noun', gloss: 'with mud' }
          ]
        },
        { id: 'qr1-26-005', page: 98, ar: 'وَزَلَقَ بَعْضُ النَّاسِ عَلَى الشَّارِعِ وَسَقَطَ فِي الْوَحْلِ وَضَحِكَ النَّاسُ وَضَحِكَ الرَّجُلُ وَتَوَسَّخَتْ ثِيَابُهُ جِدًّا.', en: 'and some people slipped on the street and fell in the mud, and people laughed, and the man laughed, and his clothes got very dirty.',
          tokens: [
            { surface: 'وَزَلَقَ', lemma: 'زلق', features: 'conj+perf.3ms', root: 'ز ل ق', pos: 'verb', gloss: 'and slipped' },
            { surface: 'بَعْضُ', lemma: 'بعض', features: 'nom.constr', root: 'ب ع ض', pos: 'noun', gloss: 'some of' },
            { surface: 'النَّاسِ', lemma: 'ناس', features: 'def.gen', root: 'ن و س', pos: 'noun', gloss: 'the people' },
            { surface: 'عَلَى', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'on' },
            { surface: 'الشَّارِعِ', lemma: 'شارع', features: 'def.gen', root: 'ش ر ع', pos: 'noun', gloss: 'the street' },
            { surface: 'وَسَقَطَ', lemma: 'سقط', features: 'conj+perf.3ms', root: 'س ق ط', pos: 'verb', gloss: 'and fell' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'الْوَحْلِ', lemma: 'وحل', features: 'def.gen', root: 'و ح ل', pos: 'noun', gloss: 'the mud' },
            { surface: 'وَضَحِكَ', lemma: 'ضحك', features: 'conj+perf.3ms', root: 'ض ح ك', pos: 'verb', gloss: 'and laughed' },
            { surface: 'النَّاسُ', lemma: 'ناس', features: 'def.nom', root: 'ن و س', pos: 'noun', gloss: 'the people' },
            { surface: 'وَضَحِكَ', lemma: 'ضحك', features: 'conj+perf.3ms', root: 'ض ح ك', pos: 'verb', gloss: 'and laughed' },
            { surface: 'الرَّجُلُ', lemma: 'رجل', features: 'def.nom', root: 'ر ج ل', pos: 'noun', gloss: 'the man' },
            { surface: 'وَتَوَسَّخَتْ', lemma: 'توسخ', features: 'conj+perf.3fs', root: 'و س خ', pos: 'verb', gloss: 'and got dirty' },
            { surface: 'ثِيَابُهُ', lemma: 'ثوب', features: 'pl.nom+3ms', root: 'ث و ب', pos: 'noun', gloss: 'his clothes' },
            { surface: 'جِدًّا', lemma: 'جدا', features: 'indef.acc', root: 'ج د د', pos: 'adv', gloss: 'very much' }
          ]
        }
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لِلرَّجُلِ الَّذِيْ زَلَقَ؟',
          options: [ 'سَقَطَ فِي الْوَحْلِ وَضَحِكَ النَّاسُ', 'لَمْ يَحْدُثْ لَهُ شَيْءٌ', 'رَجَعَ إِلَى الْبَيْتِ فَوْراً' ],
          answer: 0,
          qEn: 'What happened to the man who slipped?',
          optionsEn: [ 'He fell in the mud and people laughed', 'Nothing happened to him', 'He returned home at once' ]
        }
      ]
    },
    {
      id: 'p3',
      en: 'The people were walking at ease when the rain came unexpectedly, and clothes got soaked. Some of the sensible ones had taken umbrellas with them and opened them, and I had left my umbrella at home and thought that the rain had stopped, so I was very sorry, and I ran and returned home, and my clothes were already soaked.',
      sentences: [
        { id: 'qr1-26-006', page: 99, ar: 'وَكَانَ النَّاسُ يَمْشُوْنَ مُطْمَئِنِّيْنَ إِذْ جَاءَ الْمَطَرُ عَلَىٰ غَفْلَةٍ فَابْتَلَّتِ الثِّيَابُ،', en: 'The people were walking at ease when the rain came unexpectedly, and clothes got soaked,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'and were' },
            { surface: 'النَّاسُ', lemma: 'ناس', features: 'def.nom', root: 'ن و س', pos: 'noun', gloss: 'the people' },
            { surface: 'يَمْشُوْنَ', lemma: 'مشى', features: 'impf.3mp', root: 'م ش ي', pos: 'verb', gloss: 'walking' },
            { surface: 'مُطْمَئِنِّيْنَ', lemma: 'مطمئن', features: 'pl.acc', root: 'ط م أ ن', pos: 'adj', gloss: 'at ease' },
            { surface: 'إِذْ', lemma: 'اذ', features: 'part', root: '—', pos: 'part', gloss: 'when' },
            { surface: 'جَاءَ', lemma: 'جاء', features: 'perf.3ms', root: 'ج ي أ', pos: 'verb', gloss: 'came' },
            { surface: 'الْمَطَرُ', lemma: 'مطر', features: 'def.nom', root: 'م ط ر', pos: 'noun', gloss: 'the rain' },
            { surface: 'عَلَىٰ', lemma: 'على', features: 'prep', root: '—', pos: 'prep', gloss: 'by' },
            { surface: 'غَفْلَةٍ', lemma: 'غفلة', features: 'indef.gen', root: 'غ ف ل', pos: 'noun', gloss: 'surprise' },
            { surface: 'فَابْتَلَّتِ', lemma: 'ابتل', features: 'conj+perf.3fs', root: 'ب ل ل', pos: 'verb', gloss: 'and got wet' },
            { surface: 'الثِّيَابُ', lemma: 'ثوب', features: 'pl.def.nom', root: 'ث و ب', pos: 'noun', gloss: 'the clothes' }
          ]
        },
        { id: 'qr1-26-007', page: 99, ar: 'وَكَانَ بَعْضُ الْعُقَلَاءِ قَدْ أَخَذُوْا مَعَهُمُ الْمَطْرِيَّاتِ فَنَشَرُوْهَا،', en: 'Some of the sensible ones had taken umbrellas with them and opened them,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', features: 'conj+perf.3ms', root: 'ك و ن', pos: 'verb', gloss: 'and had' },
            { surface: 'بَعْضُ', lemma: 'بعض', features: 'nom.constr', root: 'ب ع ض', pos: 'noun', gloss: 'some of' },
            { surface: 'الْعُقَلَاءِ', lemma: 'عاقل', features: 'pl.def.gen', root: 'ع ق ل', pos: 'noun', gloss: 'the sensible ones' },
            { surface: 'قَدْ', lemma: 'قد', features: 'part', root: '—', pos: 'part', gloss: 'already' },
            { surface: 'أَخَذُوْا', lemma: 'اخذ', features: 'perf.3mp', root: 'أ خ ذ', pos: 'verb', gloss: 'had taken' },
            { surface: 'مَعَهُمُ', lemma: 'مع', features: 'prep+3mp', root: '—', pos: 'prep', gloss: 'with them' },
            { surface: 'الْمَطْرِيَّاتِ', lemma: 'مطرية', features: 'pl.def.acc', root: 'م ط ر', pos: 'noun', gloss: 'umbrellas' },
            { surface: 'فَنَشَرُوْهَا', lemma: 'نشر', features: 'conj+perf.3mp+3fs', root: 'ن ش ر', pos: 'verb', gloss: 'and opened them' }
          ]
        },
        { id: 'qr1-26-008', page: 99, ar: 'وَكُنْتُ تَرَكْتُ مَطْرِيَّتِي فِي الْبَيْتِ وَظَنَنْتُ أَنَّ الْمَطَرَ قَدِ انْقَطَعَ فَتَأَسَّفْتُ جِدًّا وَجَرَيْتُ وَرَجَعْتُ إِلَى الْبَيْتِ وَقَدِ ابْتَلَّتْ ثِيَابِيْ.', en: 'and I had left my umbrella at home and thought that the rain had stopped, so I was very sorry, and I ran and returned home, and my clothes were already soaked.',
          tokens: [
            { surface: 'وَكُنْتُ', lemma: 'كان', features: 'conj+perf.1s', root: 'ك و ن', pos: 'verb', gloss: 'and I had' },
            { surface: 'تَرَكْتُ', lemma: 'ترك', features: 'perf.1s', root: 'ت ر ك', pos: 'verb', gloss: 'left' },
            { surface: 'مَطْرِيَّتِي', lemma: 'مطرية', features: 'acc+1s', root: 'م ط ر', pos: 'noun', gloss: 'my umbrella' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'الْبَيْتِ', lemma: 'بيت', features: 'def.gen', root: 'ب ي ت', pos: 'noun', gloss: 'the house' },
            { surface: 'وَظَنَنْتُ', lemma: 'ظن', features: 'conj+perf.1s', root: 'ظ ن ن', pos: 'verb', gloss: 'and I thought' },
            { surface: 'أَنَّ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'that' },
            { surface: 'الْمَطَرَ', lemma: 'مطر', features: 'def.acc', root: 'م ط ر', pos: 'noun', gloss: 'the rain' },
            { surface: 'قَدِ', lemma: 'قد', features: 'part', root: '—', pos: 'part', gloss: 'had' },
            { surface: 'انْقَطَعَ', lemma: 'انقطع', features: 'perf.3ms', root: 'ق ط ع', pos: 'verb', gloss: 'stopped' },
            { surface: 'فَتَأَسَّفْتُ', lemma: 'تأسف', features: 'conj+perf.1s', root: 'أ س ف', pos: 'verb', gloss: 'so I regretted' },
            { surface: 'جِدًّا', lemma: 'جدا', features: 'indef.acc', root: 'ج د د', pos: 'adv', gloss: 'very much' },
            { surface: 'وَجَرَيْتُ', lemma: 'جرى', features: 'conj+perf.1s', root: 'ج ر ي', pos: 'verb', gloss: 'and I ran' },
            { surface: 'وَرَجَعْتُ', lemma: 'رجع', features: 'conj+perf.1s', root: 'ر ج ع', pos: 'verb', gloss: 'and returned' },
            { surface: 'إِلَى', lemma: 'الى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'الْبَيْتِ', lemma: 'بيت', features: 'def.gen', root: 'ب ي ت', pos: 'noun', gloss: 'the house' },
            { surface: 'وَقَدِ', lemma: 'قد', features: 'conj+part', root: '—', pos: 'part', gloss: 'and already' },
            { surface: 'ابْتَلَّتْ', lemma: 'ابتل', features: 'perf.3fs', root: 'ب ل ل', pos: 'verb', gloss: 'got wet' },
            { surface: 'ثِيَابِيْ', lemma: 'ثوب', features: 'pl.nom+1s', root: 'ث و ب', pos: 'noun', gloss: 'my clothes' }
          ]
        }
      ],
      checks: [
        {
          q: 'لِمَاذَا ابْتَلَّتْ ثِيَابُ الرَّاوِيْ؟',
          options: [ 'لِأَنَّهُ تَرَكَ مَطْرِيَّتَهُ فِي الْبَيْتِ', 'لِأَنَّهُ لَمْ يَخْرُجْ مِنَ الْبَيْتِ', 'لِأَنَّ السَّيَّارَةَ صَدَمَتْهُ' ],
          answer: 0,
          qEn: "Why did the narrator's clothes get soaked?",
          optionsEn: [ 'Because he had left his umbrella at home', 'Because he did not leave the house', 'Because a car struck him' ]
        }
      ]
    },
    {
      id: 'p4',
      en: 'The sun did not rise all day, and clouds did not leave the sky, and no one left the house except one with a need, and I grew tired of sitting at home, so I went out in the afternoon and took the umbrella with me and went to my friend Mas’ud, and I found him reading a book.',
      sentences: [
        { id: 'qr1-26-009', page: 99, ar: 'وَلَمْ تَطْلُعِ الشَّمْسُ طُوْلَ النَّهَارِ وَلَمْ تَزَلْ فِي السَّمَاءِ غَيْمٌ وَلَمْ يَخْرُجْ مِنَ الْبَيْتِ إِلَّا ذُوْ حَاجَةٍ،', en: 'The sun did not rise all day, and clouds did not leave the sky, and no one left the house except one with a need,',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لم', features: 'conj+part', root: '—', pos: 'part', gloss: 'and not' },
            { surface: 'تَطْلُعِ', lemma: 'طلع', features: 'impf.3fs', root: 'ط ل ع', pos: 'verb', gloss: 'did rise' },
            { surface: 'الشَّمْسُ', lemma: 'شمس', features: 'def.nom', root: 'ش م س', pos: 'noun', gloss: 'the sun' },
            { surface: 'طُوْلَ', lemma: 'طول', features: 'acc.constr', root: 'ط و ل', pos: 'noun', gloss: 'throughout' },
            { surface: 'النَّهَارِ', lemma: 'نهار', features: 'def.gen', root: 'ن ه ر', pos: 'noun', gloss: 'the day' },
            { surface: 'وَلَمْ', lemma: 'لم', features: 'conj+part', root: '—', pos: 'part', gloss: 'and not' },
            { surface: 'تَزَلْ', lemma: 'زال', features: 'impf.3fs', root: 'ز ي ل', pos: 'verb', gloss: 'did cease' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'السَّمَاءِ', lemma: 'سماء', features: 'def.gen', root: 'س م و', pos: 'noun', gloss: 'the sky' },
            { surface: 'غَيْمٌ', lemma: 'غيم', features: 'indef.nom', root: 'غ ي م', pos: 'noun', gloss: 'clouds' },
            { surface: 'وَلَمْ', lemma: 'لم', features: 'conj+part', root: '—', pos: 'part', gloss: 'and not' },
            { surface: 'يَخْرُجْ', lemma: 'خرج', features: 'impf.3ms', root: 'خ ر ج', pos: 'verb', gloss: 'did go out' },
            { surface: 'مِنَ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'الْبَيْتِ', lemma: 'بيت', features: 'def.gen', root: 'ب ي ت', pos: 'noun', gloss: 'the house' },
            { surface: 'إِلَّا', lemma: 'إلا', features: 'part', root: '—', pos: 'part', gloss: 'except' },
            { surface: 'ذُوْ', lemma: 'ذو', features: 'nom.constr', root: 'ذ و و', pos: 'noun', gloss: 'one with' },
            { surface: 'حَاجَةٍ', lemma: 'حاجة', features: 'indef.gen', root: 'ح و ج', pos: 'noun', gloss: 'a need' }
          ]
        },
        { id: 'qr1-26-010', page: 99, ar: 'وَسَئِمْتُ الْجُلُوْسَ فِي الْبَيْتِ فَخَرَجْتُ فِي الْعَصْرِ وَأَخَذْتُ الْمَطْرِيَّةَ مَعِيْ وَذَهَبْتُ إِلَىٰ صَدِيْقِيْ مَسْعُوْدٍ،', en: 'and I grew tired of sitting at home, so I went out in the afternoon and took the umbrella with me and went to my friend Mas’ud,',
          tokens: [
            { surface: 'وَسَئِمْتُ', lemma: 'سئم', features: 'conj+perf.1s', root: 'س أ م', pos: 'verb', gloss: 'and I grew tired of' },
            { surface: 'الْجُلُوْسَ', lemma: 'جلوس', features: 'def.acc', root: 'ج ل س', pos: 'noun', gloss: 'sitting' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'الْبَيْتِ', lemma: 'بيت', features: 'def.gen', root: 'ب ي ت', pos: 'noun', gloss: 'the house' },
            { surface: 'فَخَرَجْتُ', lemma: 'خرج', features: 'conj+perf.1s', root: 'خ ر ج', pos: 'verb', gloss: 'so I went out' },
            { surface: 'فِي', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'الْعَصْرِ', lemma: 'عصر', features: 'def.gen', root: 'ع ص ر', pos: 'noun', gloss: 'the afternoon' },
            { surface: 'وَأَخَذْتُ', lemma: 'اخذ', features: 'conj+perf.1s', root: 'أ خ ذ', pos: 'verb', gloss: 'and I took' },
            { surface: 'الْمَطْرِيَّةَ', lemma: 'مطرية', features: 'def.acc', root: 'م ط ر', pos: 'noun', gloss: 'the umbrella' },
            { surface: 'مَعِيْ', lemma: 'مع', features: 'prep+1s', root: '—', pos: 'prep', gloss: 'with me' },
            { surface: 'وَذَهَبْتُ', lemma: 'ذهب', features: 'conj+perf.1s', root: 'ذ ه ب', pos: 'verb', gloss: 'and I went' },
            { surface: 'إِلَىٰ', lemma: 'الى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'صَدِيْقِيْ', lemma: 'صديق', features: 'gen+1s', root: 'ص د ق', pos: 'noun', gloss: 'my friend' },
            { surface: 'مَسْعُوْدٍ', lemma: 'مسعود', features: 'gen', root: '—', pos: 'proper', gloss: "Mas'ud" }
          ]
        },
        { id: 'qr1-26-011', page: 99, ar: 'فَوَجَدْتُهُ يُطَالِعُ كِتَاباً.', en: 'and I found him reading a book.',
          tokens: [
            { surface: 'فَوَجَدْتُهُ', lemma: 'وجد', features: 'conj+perf.1s+3ms', root: 'و ج د', pos: 'verb', gloss: 'and I found him' },
            { surface: 'يُطَالِعُ', lemma: 'طالع', features: 'impf.3ms', root: 'ط ل ع', pos: 'verb', gloss: 'reading' },
            { surface: 'كِتَاباً', lemma: 'كتاب', features: 'indef.acc', root: 'ك ت ب', pos: 'noun', gloss: 'a book' }
          ]
        }
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ يَفْعَلُ مَسْعُوْدٌ عِنْدَمَا وَجَدَهُ صَدِيْقُهُ؟',
          options: [ 'كَانَ يُطَالِعُ كِتَاباً', 'كَانَ نَائِماً', 'كَانَ يَأْكُلُ' ],
          answer: 0,
          qEn: 'What was Mas’ud doing when his friend found him?',
          optionsEn: [ 'He was reading a book', 'He was asleep', 'He was eating' ]
        }
      ]
    },
    {
      id: 'p5',
      en: "I said to him: Won't you come out, my brother? Let's take a stroll and walk a bit. Haven't you grown tired of sitting?",
      sentences: [
        { id: 'qr1-26-012', page: 99, ar: 'قُلْتُ لَهُ: أَلَا تَخْرُجُ يَا أَخِيْ نَتَنَزَّهُ وَنَمْشِيْ قَلِيْلاً،', en: "I said to him: Won't you come out, my brother? Let's take a stroll and walk a bit,",
          tokens: [
            { surface: 'قُلْتُ', lemma: 'قال', features: 'perf.1s', root: 'ق و ل', pos: 'verb', gloss: 'I said' },
            { surface: 'لَهُ', lemma: 'ل', features: 'prep+3ms', root: '—', pos: 'prep', gloss: 'to him' },
            { surface: 'أَلَا', lemma: 'ألا', features: 'part', root: '—', pos: 'part', gloss: "won't you...?" },
            { surface: 'تَخْرُجُ', lemma: 'خرج', features: 'impf.2ms', root: 'خ ر ج', pos: 'verb', gloss: 'you go out' },
            { surface: 'يَا', lemma: 'يا', features: 'part', root: '—', pos: 'part', gloss: 'O' },
            { surface: 'أَخِيْ', lemma: 'اخ', features: 'voc+1s', root: 'أ خ و', pos: 'noun', gloss: 'my brother' },
            { surface: 'نَتَنَزَّهُ', lemma: 'تنزه', features: 'impf.1p', root: 'ن ز ه', pos: 'verb', gloss: "let's stroll" },
            { surface: 'وَنَمْشِيْ', lemma: 'مشى', features: 'conj+impf.1p', root: 'م ش ي', pos: 'verb', gloss: 'and walk' },
            { surface: 'قَلِيْلاً', lemma: 'قليل', features: 'indef.acc', root: 'ق ل ل', pos: 'adv', gloss: 'a little' }
          ]
        },
        { id: 'qr1-26-013', page: 99, ar: 'أَمَا سَئِمْتَ الْجُلُوْسَ؟', en: "Haven't you grown tired of sitting?",
          tokens: [
            { surface: 'أَمَا', lemma: 'أما', features: 'part', root: '—', pos: 'part', gloss: "haven't you...?" },
            { surface: 'سَئِمْتَ', lemma: 'سئم', features: 'perf.2ms', root: 'س أ م', pos: 'verb', gloss: 'have you grown tired of' },
            { surface: 'الْجُلُوْسَ', lemma: 'جلوس', features: 'def.acc', root: 'ج ل س', pos: 'noun', gloss: 'sitting' }
          ]
        }
      ],
      checks: [
        {
          q: 'بِمَاذَا اقْتَرَحَ الرَّاوِيْ عَلَىٰ مَسْعُوْدٍ؟',
          options: [ 'أَنْ يَخْرُجَا لِلتَّنَزُّهِ وَالْمَشْيِ', 'أَنْ يَنَامَا', 'أَنْ يَقْرَآ كِتَاباً مَعاً' ],
          answer: 0,
          qEn: "What did the narrator suggest to Mas'ud?",
          optionsEn: [ 'That they go out for a stroll and walk', 'That they sleep', 'That they read a book together' ]
        }
      ]
    },
    {
      id: 'p6',
      en: "Mas'ud said: Don't you see the sky and the ground? Don't you see the mud? This is not a day for going out, so please, come have dinner with me.",
      sentences: [
        { id: 'qr1-26-014', page: 99, ar: 'قَالَ مَسْعُوْدٌ: أَلَا تَرَىٰ إِلَىٰ السَّمَاءِ وَإِلَىٰ الأَرْضِ؟', en: "Mas'ud said: Don't you see the sky and the ground?",
          tokens: [
            { surface: 'قَالَ', lemma: 'قال', features: 'perf.3ms', root: 'ق و ل', pos: 'verb', gloss: 'said' },
            { surface: 'مَسْعُوْدٌ', lemma: 'مسعود', features: 'nom', root: '—', pos: 'proper', gloss: "Mas'ud" },
            { surface: 'أَلَا', lemma: 'ألا', features: 'part', root: '—', pos: 'part', gloss: "don't you...?" },
            { surface: 'تَرَىٰ', lemma: 'رأى', features: 'impf.2ms', root: 'ر أ ي', pos: 'verb', gloss: 'see' },
            { surface: 'إِلَىٰ', lemma: 'الى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'السَّمَاءِ', lemma: 'سماء', features: 'def.gen', root: 'س م و', pos: 'noun', gloss: 'the sky' },
            { surface: 'وَإِلَىٰ', lemma: 'الى', features: 'conj+prep', root: '—', pos: 'prep', gloss: 'and to' },
            { surface: 'الأَرْضِ', lemma: 'ارض', features: 'def.gen', root: 'أ ر ض', pos: 'noun', gloss: 'the earth' }
          ]
        },
        { id: 'qr1-26-015', page: 99, ar: 'أَلَا تَرَىٰ إِلَىٰ الْوَحَلِ؟', en: "Don't you see the mud?",
          tokens: [
            { surface: 'أَلَا', lemma: 'ألا', features: 'part', root: '—', pos: 'part', gloss: "don't you...?" },
            { surface: 'تَرَىٰ', lemma: 'رأى', features: 'impf.2ms', root: 'ر أ ي', pos: 'verb', gloss: 'see' },
            { surface: 'إِلَىٰ', lemma: 'الى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'الْوَحَلِ', lemma: 'وحل', features: 'def.gen', root: 'و ح ل', pos: 'noun', gloss: 'the mud' }
          ]
        },
        { id: 'qr1-26-016', page: 99, ar: 'هٰذَا لَيْسَ يَوْمَ الْخُرُوْجِ مِنَ الْبَيْتِ،', en: 'This is not a day for going out,',
          tokens: [
            { surface: 'هٰذَا', lemma: 'هذا', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'لَيْسَ', lemma: 'ليس', features: 'perf.3ms', root: 'ل ي س', pos: 'verb', gloss: 'is not' },
            { surface: 'يَوْمَ', lemma: 'يوم', features: 'acc', root: 'ي و م', pos: 'noun', gloss: 'a day of' },
            { surface: 'الْخُرُوْجِ', lemma: 'خروج', features: 'def.gen', root: 'خ ر ج', pos: 'noun', gloss: 'going out' },
            { surface: 'مِنَ', lemma: 'من', features: 'prep', root: '—', pos: 'prep', gloss: 'from' },
            { surface: 'الْبَيْتِ', lemma: 'بيت', features: 'def.gen', root: 'ب ي ت', pos: 'noun', gloss: 'the house' }
          ]
        },
        { id: 'qr1-26-017', page: 99, ar: 'فَتَفَضَّلْ وَتَعَشَّ مَعِيْ.', en: 'so please, come have dinner with me.',
          tokens: [
            { surface: 'فَتَفَضَّلْ', lemma: 'تفضل', features: 'conj+imp.2ms', root: 'ف ض ل', pos: 'verb', gloss: 'so please' },
            { surface: 'وَتَعَشَّ', lemma: 'تعشى', features: 'conj+imp.2ms', root: 'ع ش و', pos: 'verb', gloss: 'and have dinner' },
            { surface: 'مَعِيْ', lemma: 'مع', features: 'prep+1s', root: '—', pos: 'prep', gloss: 'with me' }
          ]
        }
      ],
      checks: [
        {
          q: 'لِمَاذَا رَفَضَ مَسْعُوْدٌ الْخُرُوْجَ؟',
          options: [ 'بِسَبَبِ الْوَحَلِ فِي الشَّوَارِعِ', 'لِأَنَّهُ مَرِيْضٌ', 'لِأَنَّهُ مَشْغُوْلٌ' ],
          answer: 0,
          qEn: 'Why did Mas’ud refuse to go out?',
          optionsEn: [ 'Because of the mud in the streets', 'Because he was sick', 'Because he was busy' ]
        }
      ]
    },
    {
      id: 'p7',
      en: "I said: As for sitting, yes! But as for dinner, no, for I want to return home quickly, since we don't know when the sky will rain.",
      sentences: [
        { id: 'qr1-26-018', page: 99, ar: 'قُلْتُ: أَمَّا الْجُلُوْسُ فَنَعَمْ!', en: 'I said: As for sitting, yes!',
          tokens: [
            { surface: 'قُلْتُ', lemma: 'قال', features: 'perf.1s', root: 'ق و ل', pos: 'verb', gloss: 'I said' },
            { surface: 'أَمَّا', lemma: 'أما', features: 'part', root: '—', pos: 'part', gloss: 'as for' },
            { surface: 'الْجُلُوْسُ', lemma: 'جلوس', features: 'def.nom', root: 'ج ل س', pos: 'noun', gloss: 'sitting' },
            { surface: 'فَنَعَمْ', lemma: 'نعم', features: 'conj+part', root: '—', pos: 'part', gloss: 'then yes' }
          ]
        },
        { id: 'qr1-26-019', page: 99, ar: 'وَأَمَّا الْعَشَاءُ فَلَا،', en: 'But as for dinner, no,',
          tokens: [
            { surface: 'وَأَمَّا', lemma: 'أما', features: 'conj+part', root: '—', pos: 'part', gloss: 'and as for' },
            { surface: 'الْعَشَاءُ', lemma: 'عشاء-وجبة', features: 'def.nom', root: 'ع ش و', pos: 'noun', gloss: 'dinner' },
            { surface: 'فَلَا', lemma: 'لا', features: 'conj+part', root: '—', pos: 'part', gloss: 'then no' }
          ]
        },
        { id: 'qr1-26-020', page: 99, ar: 'فَإِنِّي أُرِيْدُ أَنْ أَرْجِعَ إِلَى الْبَيْتِ سَرِيْعاً فَلَسْنَا نَدْرِيْ مَتَىٰ تُمْطِرُ السَّمَاءُ.', en: "for I want to return home quickly, since we don't know when the sky will rain.",
          tokens: [
            { surface: 'فَإِنِّي', lemma: 'إن', features: 'conj+part+1s', root: '—', pos: 'part', gloss: 'for indeed I' },
            { surface: 'أُرِيْدُ', lemma: 'اراد', features: 'impf.1s', root: 'ر و د', pos: 'verb', gloss: 'want' },
            { surface: 'أَنْ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'to' },
            { surface: 'أَرْجِعَ', lemma: 'رجع', features: 'impf.1s', root: 'ر ج ع', pos: 'verb', gloss: 'return' },
            { surface: 'إِلَى', lemma: 'الى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'الْبَيْتِ', lemma: 'بيت', features: 'def.gen', root: 'ب ي ت', pos: 'noun', gloss: 'the house' },
            { surface: 'سَرِيْعاً', lemma: 'سريع', features: 'indef.acc', root: 'س ر ع', pos: 'adj', gloss: 'quickly' },
            { surface: 'فَلَسْنَا', lemma: 'ليس', features: 'conj+perf.1p', root: 'ل ي س', pos: 'verb', gloss: 'for we are not' },
            { surface: 'نَدْرِيْ', lemma: 'درى', features: 'impf.1p', root: 'د ر ي', pos: 'verb', gloss: 'knowing' },
            { surface: 'مَتَىٰ', lemma: 'متى', features: 'part', root: '—', pos: 'part', gloss: 'when' },
            { surface: 'تُمْطِرُ', lemma: 'مطر-فعل', features: 'impf.3fs', root: 'م ط ر', pos: 'verb', gloss: 'will rain' },
            { surface: 'السَّمَاءُ', lemma: 'سماء', features: 'def.nom', root: 'س م و', pos: 'noun', gloss: 'the sky' }
          ]
        }
      ],
      checks: [
        {
          q: 'هَلْ قَبِلَ الرَّاوِيْ دَعْوَةَ الْعَشَاءِ؟',
          options: [ 'لَا، لِأَنَّهُ أَرَادَ الرُّجُوْعَ إِلَى الْبَيْتِ سَرِيْعاً', 'نَعَمْ، وَتَعَشَّىٰ عِنْدَهُ', 'لَمْ يُجِبْ' ],
          answer: 0,
          qEn: 'Did the narrator accept the dinner invitation?',
          optionsEn: [ 'No, because he wanted to return home quickly', 'Yes, and he had dinner there', 'He did not answer' ]
        }
      ]
    },
    {
      id: 'p8',
      en: "I sat with my friend Mas'ud for a while, then I grew tired of sitting and of the clouds, so I asked his leave and went out to the street, and a car came and passed by me, and water and mud splashed everywhere, and my clothes got dirty, and I walked a little and returned home, and I had not even entered the house or put down the umbrella when the rain came, so I praised Allah, exalted is He, that I had already arrived home.",
      sentences: [
        { id: 'qr1-26-021', page: 100, ar: 'وَجَلَسْتُ مَعَ صَدِيْقِيْ مَسْعُوْدٍ قَلِيْلاً،', en: "I sat with my friend Mas'ud for a while,",
          tokens: [
            { surface: 'وَجَلَسْتُ', lemma: 'جلس', features: 'conj+perf.1s', root: 'ج ل س', pos: 'verb', gloss: 'and I sat' },
            { surface: 'مَعَ', lemma: 'مع', features: 'prep', root: '—', pos: 'prep', gloss: 'with' },
            { surface: 'صَدِيْقِيْ', lemma: 'صديق', features: 'gen+1s', root: 'ص د ق', pos: 'noun', gloss: 'my friend' },
            { surface: 'مَسْعُوْدٍ', lemma: 'مسعود', features: 'gen', root: '—', pos: 'proper', gloss: "Mas'ud" },
            { surface: 'قَلِيْلاً', lemma: 'قليل', features: 'indef.acc', root: 'ق ل ل', pos: 'adv', gloss: 'a while' }
          ]
        },
        { id: 'qr1-26-022', page: 100, ar: 'ثُمَّ سَئِمْتُ الْجُلُوْسَ وَالْغَيْمَ،', en: 'then I grew tired of sitting and of the clouds,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', features: 'part', root: '—', pos: 'part', gloss: 'then' },
            { surface: 'سَئِمْتُ', lemma: 'سئم', features: 'perf.1s', root: 'س أ م', pos: 'verb', gloss: 'I grew tired of' },
            { surface: 'الْجُلُوْسَ', lemma: 'جلوس', features: 'def.acc', root: 'ج ل س', pos: 'noun', gloss: 'sitting' },
            { surface: 'وَالْغَيْمَ', lemma: 'غيم', features: 'conj+def.acc', root: 'غ ي م', pos: 'noun', gloss: 'and the clouds' }
          ]
        },
        { id: 'qr1-26-023', page: 100, ar: 'فَاسْتَأْذَنْتُهُ وَخَرَجْتُ إِلَى الشَّارِعِ وَجَاءَتْ سَيَّارَةٌ فَمَرَّتْ بِيْ وَتَطَايَرَ الْمَاءُ وَالْوَحْلُ وَتَوَسَّخَتْ ثِيَابِيْ،', en: 'so I asked his leave and went out to the street, and a car came and passed by me, and water and mud splashed everywhere, and my clothes got dirty,',
          tokens: [
            { surface: 'فَاسْتَأْذَنْتُهُ', lemma: 'استأذن', features: 'conj+perf.1s+3ms', root: 'أ ذ ن', pos: 'verb', gloss: 'so I asked his leave' },
            { surface: 'وَخَرَجْتُ', lemma: 'خرج', features: 'conj+perf.1s', root: 'خ ر ج', pos: 'verb', gloss: 'and I went out' },
            { surface: 'إِلَى', lemma: 'الى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'الشَّارِعِ', lemma: 'شارع', features: 'def.gen', root: 'ش ر ع', pos: 'noun', gloss: 'the street' },
            { surface: 'وَجَاءَتْ', lemma: 'جاء', features: 'conj+perf.3fs', root: 'ج ي أ', pos: 'verb', gloss: 'and came' },
            { surface: 'سَيَّارَةٌ', lemma: 'سيارة', features: 'indef.nom', root: 'س ي ر', pos: 'noun', gloss: 'a car' },
            { surface: 'فَمَرَّتْ', lemma: 'مر', features: 'conj+perf.3fs', root: 'م ر ر', pos: 'verb', gloss: 'and passed' },
            { surface: 'بِيْ', lemma: 'ب', features: 'prep+1s', root: '—', pos: 'prep', gloss: 'by me' },
            { surface: 'وَتَطَايَرَ', lemma: 'تطاير', features: 'conj+perf.3ms', root: 'ط ي ر', pos: 'verb', gloss: 'and splashed' },
            { surface: 'الْمَاءُ', lemma: 'ماء', features: 'def.nom', root: 'م و ه', pos: 'noun', gloss: 'the water' },
            { surface: 'وَالْوَحْلُ', lemma: 'وحل', features: 'conj+def.nom', root: 'و ح ل', pos: 'noun', gloss: 'and the mud' },
            { surface: 'وَتَوَسَّخَتْ', lemma: 'توسخ', features: 'conj+perf.3fs', root: 'و س خ', pos: 'verb', gloss: 'and got dirty' },
            { surface: 'ثِيَابِيْ', lemma: 'ثوب', features: 'pl.nom+1s', root: 'ث و ب', pos: 'noun', gloss: 'my clothes' }
          ]
        },
        { id: 'qr1-26-024', page: 100, ar: 'وَمَشَيْتُ قَلِيْلاً وَرَجَعْتُ إِلَى الْبَيْتِ،', en: 'and I walked a little and returned home,',
          tokens: [
            { surface: 'وَمَشَيْتُ', lemma: 'مشى', features: 'conj+perf.1s', root: 'م ش ي', pos: 'verb', gloss: 'and I walked' },
            { surface: 'قَلِيْلاً', lemma: 'قليل', features: 'indef.acc', root: 'ق ل ل', pos: 'adv', gloss: 'a little' },
            { surface: 'وَرَجَعْتُ', lemma: 'رجع', features: 'conj+perf.1s', root: 'ر ج ع', pos: 'verb', gloss: 'and returned' },
            { surface: 'إِلَى', lemma: 'الى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'الْبَيْتِ', lemma: 'بيت', features: 'def.gen', root: 'ب ي ت', pos: 'noun', gloss: 'the house' }
          ]
        },
        { id: 'qr1-26-025', page: 100, ar: 'وَمَا دَخَلْتُ الْبَيْتَ وَمَا وَضَعْتُ الْمَطْرِيَّةَ حَتَّىٰ جَاءَ الْمَطَرُ،', en: 'and I had not even entered the house or put down the umbrella when the rain came,',
          tokens: [
            { surface: 'وَمَا', lemma: 'ما-نافية', features: 'conj+part', root: '—', pos: 'part', gloss: 'and not' },
            { surface: 'دَخَلْتُ', lemma: 'دخل', features: 'perf.1s', root: 'د خ ل', pos: 'verb', gloss: 'had I entered' },
            { surface: 'الْبَيْتَ', lemma: 'بيت', features: 'def.acc', root: 'ب ي ت', pos: 'noun', gloss: 'the house' },
            { surface: 'وَمَا', lemma: 'ما-نافية', features: 'conj+part', root: '—', pos: 'part', gloss: 'and not' },
            { surface: 'وَضَعْتُ', lemma: 'وضع', features: 'perf.1s', root: 'و ض ع', pos: 'verb', gloss: 'had I put down' },
            { surface: 'الْمَطْرِيَّةَ', lemma: 'مطرية', features: 'def.acc', root: 'م ط ر', pos: 'noun', gloss: 'the umbrella' },
            { surface: 'حَتَّىٰ', lemma: 'حتى', features: 'part', root: '—', pos: 'part', gloss: 'until, when' },
            { surface: 'جَاءَ', lemma: 'جاء', features: 'perf.3ms', root: 'ج ي أ', pos: 'verb', gloss: 'came' },
            { surface: 'الْمَطَرُ', lemma: 'مطر', features: 'def.nom', root: 'م ط ر', pos: 'noun', gloss: 'the rain' }
          ]
        },
        { id: 'qr1-26-026', page: 100, ar: 'فَحَمِدْتُ اللهَ تَعَالَىٰ أَنْ وَصَلْتُ إِلَى الْبَيْتِ.', en: 'so I praised Allah, exalted is He, that I had already arrived home.',
          tokens: [
            { surface: 'فَحَمِدْتُ', lemma: 'حمد', features: 'conj+perf.1s', root: 'ح م د', pos: 'verb', gloss: 'so I praised' },
            { surface: 'اللهَ', lemma: 'الله', features: 'acc', root: '—', pos: 'proper', gloss: 'Allah' },
            { surface: 'تَعَالَىٰ', lemma: 'تعالى', features: 'perf.3ms', root: 'ع ل و', pos: 'verb', gloss: 'exalted is He' },
            { surface: 'أَنْ', lemma: 'أن', features: 'part', root: '—', pos: 'part', gloss: 'that' },
            { surface: 'وَصَلْتُ', lemma: 'وصل', features: 'perf.1s', root: 'و ص ل', pos: 'verb', gloss: 'I had arrived' },
            { surface: 'إِلَى', lemma: 'الى', features: 'prep', root: '—', pos: 'prep', gloss: 'to' },
            { surface: 'الْبَيْتِ', lemma: 'بيت', features: 'def.gen', root: 'ب ي ت', pos: 'noun', gloss: 'the house' }
          ]
        }
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لِلرَّاوِيْ وَهُوَ فِيْ طَرِيْقِهِ إِلَى الْبَيْتِ؟',
          options: [ 'تَطَايَرَ عَلَيْهِ الْمَاءُ وَالْوَحْلُ مِنْ سَيَّارَةٍ', 'رَكِبَ سَيَّارَةً', 'لَمْ يَحْدُثْ شَيْءٌ' ],
          answer: 0,
          qEn: 'What happened to the narrator on his way home?',
          optionsEn: [ 'Water and mud splashed on him from a car', 'He rode in a car', 'Nothing happened' ]
        }
      ]
    },
    {
      id: 'p9',
      en: 'I ate dinner and prayed Isha and slept, and I did not know when the rain stopped.',
      sentences: [
        { id: 'qr1-26-027', page: 100, ar: 'وَتَعَشَّيْتُ وَصَلَّيْتُ الْعِشَاءَ وَنِمْتُ وَمَا عَلِمْتُ مَتَىٰ انْقَطَعَ الْمَطَرُ.', en: 'I ate dinner and prayed Isha and slept, and I did not know when the rain stopped.',
          tokens: [
            { surface: 'وَتَعَشَّيْتُ', lemma: 'تعشى', features: 'conj+perf.1s', root: 'ع ش و', pos: 'verb', gloss: 'and I ate dinner' },
            { surface: 'وَصَلَّيْتُ', lemma: 'صلى', features: 'conj+perf.1s', root: 'ص ل و', pos: 'verb', gloss: 'and I prayed' },
            { surface: 'الْعِشَاءَ', lemma: 'عشاء', features: 'def.acc', root: 'ع ش و', pos: 'noun', gloss: 'Isha' },
            { surface: 'وَنِمْتُ', lemma: 'نام', features: 'conj+perf.1s', root: 'ن و م', pos: 'verb', gloss: 'and I slept' },
            { surface: 'وَمَا', lemma: 'ما-نافية', features: 'conj+part', root: '—', pos: 'part', gloss: 'and not' },
            { surface: 'عَلِمْتُ', lemma: 'علم', features: 'perf.1s', root: 'ع ل م', pos: 'verb', gloss: 'did I know' },
            { surface: 'مَتَىٰ', lemma: 'متى', features: 'part', root: '—', pos: 'part', gloss: 'when' },
            { surface: 'انْقَطَعَ', lemma: 'انقطع', features: 'perf.3ms', root: 'ق ط ع', pos: 'verb', gloss: 'stopped' },
            { surface: 'الْمَطَرُ', lemma: 'مطر', features: 'def.nom', root: 'م ط ر', pos: 'noun', gloss: 'the rain' }
          ]
        }
      ],
      checks: [
        {
          q: 'مَاذَا لَمْ يَعْلَمِ الرَّاوِيْ؟',
          options: [ 'مَتَىٰ انْقَطَعَ الْمَطَرُ', 'مَتَىٰ نَزَلَ الْمَطَرُ', 'أَيْنَ ذَهَبَ مَسْعُوْدٌ' ],
          answer: 0,
          qEn: 'What did the narrator not know?',
          optionsEn: [ 'When the rain stopped', 'When the rain fell', "Where Mas'ud went" ]
        }
      ]
    },
    {
      id: 'p10',
      en: 'The rains were abundant this year, and rivers overflowed, and the flood came, and many houses collapsed.',
      sentences: [
        { id: 'qr1-26-028', page: 100, ar: 'وَكَانَتِ الأَمْطَارُ فِيْ هٰذِهِ السَّنَةِ كَثِيْرَةً وَقَدْ فَاضَتْ أَنْهَارٌ وَجَاءَ السَّيْلُ وَتَهَدَّمَتْ بُيُوْتٌ كَثِيْرَةٌ.', en: 'The rains were abundant this year, and rivers overflowed, and the flood came, and many houses collapsed.',
          tokens: [
            { surface: 'وَكَانَتِ', lemma: 'كان', features: 'conj+perf.3fs', root: 'ك و ن', pos: 'verb', gloss: 'and were' },
            { surface: 'الأَمْطَارُ', lemma: 'مطر', features: 'pl.def.nom', root: 'م ط ر', pos: 'noun', gloss: 'the rains' },
            { surface: 'فِيْ', lemma: 'في', features: 'prep', root: '—', pos: 'prep', gloss: 'in' },
            { surface: 'هٰذِهِ', lemma: 'هذه', features: 'dem', root: '—', pos: 'dem', gloss: 'this' },
            { surface: 'السَّنَةِ', lemma: 'سنة', features: 'def.gen', root: 'س ن و', pos: 'noun', gloss: 'the year' },
            { surface: 'كَثِيْرَةً', lemma: 'كثير', features: 'indef.acc', root: 'ك ث ر', pos: 'adj', gloss: 'abundant' },
            { surface: 'وَقَدْ', lemma: 'قد', features: 'conj+part', root: '—', pos: 'part', gloss: 'and indeed' },
            { surface: 'فَاضَتْ', lemma: 'فاض', features: 'perf.3fs', root: 'ف ي ض', pos: 'verb', gloss: 'overflowed' },
            { surface: 'أَنْهَارٌ', lemma: 'نهر', features: 'pl.indef.nom', root: 'ن ه ر', pos: 'noun', gloss: 'rivers' },
            { surface: 'وَجَاءَ', lemma: 'جاء', features: 'conj+perf.3ms', root: 'ج ي أ', pos: 'verb', gloss: 'and came' },
            { surface: 'السَّيْلُ', lemma: 'سيل', features: 'def.nom', root: 'س ي ل', pos: 'noun', gloss: 'the flood' },
            { surface: 'وَتَهَدَّمَتْ', lemma: 'تهدم', features: 'conj+perf.3fs', root: 'ه د م', pos: 'verb', gloss: 'and collapsed' },
            { surface: 'بُيُوْتٌ', lemma: 'بيت', features: 'pl.indef.nom', root: 'ب ي ت', pos: 'noun', gloss: 'houses' },
            { surface: 'كَثِيْرَةٌ', lemma: 'كثير', features: 'indef.nom', root: 'ك ث ر', pos: 'adj', gloss: 'many' }
          ]
        }
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ بِسَبَبِ كَثْرَةِ الأَمْطَارِ فِيْ تِلْكَ السَّنَةِ؟',
          options: [ 'فَاضَتِ الأَنْهَارُ وَتَهَدَّمَتْ بُيُوْتٌ كَثِيْرَةٌ', 'جَفَّتِ الأَنْهَارُ', 'لَمْ يَحْدُثْ شَيْءٌ' ],
          answer: 0,
          qEn: 'What happened because of the abundant rains that year?',
          optionsEn: [ 'Rivers overflowed and many houses collapsed', 'Rivers dried up', 'Nothing happened' ]
        }
      ]
    }
  ]
};

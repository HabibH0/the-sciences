// قَصَصُ النَّبِيِّينَ لِلْأَطْفَالِ, book one -- the story «مَنْ كَسَرَ الأَصْنَامَ؟»
// (Ibrāhīm ﷺ). The book shell the Library screen reads.
//
// The printed page carries three headings and the app has only two levels for
// them: قَصَصُ النَّبِيِّينَ لِلْأَطْفَالِ is the series on the cover, «مَنْ كَسَرَ
// الأَصْنَامَ؟» is the story that opens it (pages 9-26), and «١ ـ بَائِعُ
// الأَصْنَامِ» is the chapter. A story is what a learner actually reads through,
// so the STORY is the app's book; the series itself is named once, in the
// shelf-group heading the Library screen draws above every "qasas-*" book
// (see bookSeries in content-lit/index.js and litShelfHeadingHtml in
// js/render.js), so volumeLabel here stays "Volume N" like every other
// book's rather than repeating the series name. Chapter numbering restarts
// with each story, exactly as the print does.
//
// Chapter BODIES are lazy: only `load()` pulls in a chapter-NN.js, so the
// shells here stay cheap enough to import eagerly from content-lit/index.js.
//
// Adding a chapter: write its module (see ../CHAPTER-FORMAT.md), then add one
// entry here, in reading order -- order is what gates progression, chapter N
// unlocks when chapter N-1 is finished.
export const BOOK = {
  id: 'qasas-v1',
  title: { ar: 'مَنْ كَسَرَ الأَصْنَامَ؟', en: 'Who Broke the Idols?' },
  volumeLabel: 'Volume One',
  author: { ar: 'أَبُو الْحَسَنِ عَلِيٌّ الْحَسَنِيُّ النَّدْوِيُّ', en: 'Abū al-Ḥasan ʿAlī al-Ḥasanī an-Nadwī' },
  blurb: 'The story of Ibrāhīm ﷺ in sixteen short vowelled chapters of a page each — the idols of Āzar, the axe and the fire, the search for a Lord, Zamzam, and the raising of the Kaʿbah.',
  chapters: [
    {
      id: 'ch1',
      number: 1,
      title: { ar: 'بَائِعُ الأَصْنَامِ', en: 'The Idol Seller' },
      pages: [9],
      blurb: 'Āzar and his idols, and the boy born into his house.',
      load: () => import('./chapter-01.js'),
    },
    {
      id: 'ch2',
      number: 2,
      title: { ar: 'وَلَدُ آزَرَ', en: "Āzar's Son" },
      pages: [10],
      blurb: 'Ibrāhīm watches the people bow to stones that cannot speak, and begins to ask why.',
      load: () => import('./chapter-02.js'),
    },
    {
      id: 'ch3',
      number: 3,
      title: { ar: 'نَصِيحَةُ إِبْرَاهِيمَ', en: "Ibrāhīm's Advice" },
      pages: [11],
      blurb: 'He puts the question to his own father: why worship what cannot hear, help or harm?',
      load: () => import('./chapter-03.js'),
    },
    {
      id: 'ch4',
      number: 4,
      title: { ar: 'إِبْرَاهِيمُ يَكْسِرُ الأَصْنَامَ', en: 'Ibrāhīm Breaks the Idols' },
      pages: [12],
      blurb: 'The town empties for the feast, leaving Ibrāhīm alone with the idols and an axe.',
      load: () => import('./chapter-04.js'),
    },
    {
      id: 'ch5',
      number: 5,
      title: { ar: 'مَنْ فَعَلَ هَذَا؟', en: 'Who Did This?' },
      pages: [13, 14],
      blurb: 'The people come back to a wrecked idol-house and put Ibrāhīm on the spot — ask the big one, he says.',
      load: () => import('./chapter-05.js'),
    },
    {
      id: 'ch6',
      number: 6,
      title: { ar: 'نَارٌ بَارِدَةٌ', en: 'A Cool Fire' },
      pages: [14, 15],
      blurb: 'They light a fire for him, and Allah tells the fire to be cool and safe.',
      load: () => import('./chapter-06.js'),
    },
    {
      id: 'ch7',
      number: 7,
      title: { ar: 'مَنْ رَبِّي؟', en: 'Who Is My Lord?' },
      pages: [15, 16],
      blurb: 'Star, moon and sun each rise and set, and Ibrāhīm refuses every one of them.',
      load: () => import('./chapter-07.js'),
    },
    {
      id: 'ch8',
      number: 8,
      title: { ar: 'رَبِّيَ اللَّهُ', en: 'My Lord Is Allah' },
      pages: [16, 17],
      blurb: 'Living and not dying, lasting and not vanishing, strong and not overcome — Ibrāhīm names his Lord.',
      load: () => import('./chapter-08.js'),
    },
    {
      id: 'ch9',
      number: 9,
      title: { ar: 'دَعْوَةُ إِبْرَاهِيمَ', en: "Ibrāhīm's Call" },
      pages: [17, 18],
      blurb: 'He calls his people away from the idols: what is it, exactly, that you worship?',
      load: () => import('./chapter-09.js'),
    },
    {
      id: 'ch10',
      number: 10,
      title: { ar: 'أَمَامَ الْمَلِكِ', en: 'Before the King' },
      pages: [18, 19],
      blurb: 'Hauled before a king who is worshipped himself, Ibrāhīm answers him with the sun.',
      load: () => import('./chapter-10.js'),
    },
    {
      id: 'ch11',
      number: 11,
      title: { ar: 'دَعْوَةُ الْوَالِدِ', en: 'The Call to His Father' },
      pages: [20],
      blurb: 'The hardest call of all — Ibrāhīm asks his father to leave what cannot see or hear.',
      load: () => import('./chapter-11.js'),
    },
    {
      id: 'ch12',
      number: 12,
      title: { ar: 'إِلَى مَكَّةَ', en: 'To Makkah' },
      pages: [20, 21],
      blurb: 'Angry town, angry king, angry father: Ibrāhīm leaves for a land where he can worship freely.',
      load: () => import('./chapter-12.js'),
    },
    {
      id: 'ch13',
      number: 13,
      title: { ar: 'بِئْرُ زَمْزَمَ', en: 'The Well of Zamzam' },
      pages: [22],
      blurb: 'Ismāʿīl is thirsty and Makkah has neither well nor river — until Hājar runs.',
      load: () => import('./chapter-13.js'),
    },
    {
      id: 'ch14',
      number: 14,
      title: { ar: 'رُؤْيَا إِبْرَاهِيمَ', en: "Ibrāhīm's Vision" },
      pages: [22, 24],
      blurb: 'A dream of sacrifice, a son who says do as you are commanded, and a ransom from heaven.',
      load: () => import('./chapter-14.js'),
    },
    {
      id: 'ch15',
      number: 15,
      title: { ar: 'الْكَعْبَةُ', en: 'The Kaʿbah' },
      pages: [24, 25],
      blurb: 'Father and son raise the House, and pray that it be a place people return to.',
      load: () => import('./chapter-15.js'),
    },
    {
      id: 'ch16',
      number: 16,
      title: { ar: 'بَيْتُ الْمَقْدِسِ', en: 'Bayt al-Maqdis' },
      pages: [26],
      blurb: 'Isḥāq builds a house for Allah in Shām — and Yaʿqūb\'s twelve sons hand the story on to Yūsuf.',
      load: () => import('./chapter-16.js'),
    },
  ],
};

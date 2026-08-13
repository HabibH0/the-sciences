// قَصَصُ النَّبِيِّينَ, volume four -- «الْعَاصِفَةُ» (Hūd / ʿĀd). The book shell
// the Library screen reads.
//
// Chapter numbering restarts at 1 in every Qaṣaṣ volume (see
// QASAS_AGENT_BRIEF.md §1), so each volume gets its own book id/shell rather
// than sharing one -- ch1 here is a different chapter from qasas-v1's,
// qasas-v2's, or qasas-v3's ch1. Volume 4 begins printed page 83, right
// after volume 3's closing salutation on page 82 (see
// qasas-v3/chapter-22.js's own closing lines). Boundaries verified against
// QASAS_VOLUME_MAP.md and the scans directly: p.83 opens with the ornamental
// title box «الْعَاصِفَةُ» followed immediately by chapter 1's box on the same
// page; p.95 closes with a triple-rosette divider after chapter 11.
//
// Chapter BODIES are lazy: only `load()` pulls in a chapter-NN.js, so the
// shells here stay cheap enough to import eagerly from content-lit/index.js.
//
// Adding a chapter: transcribe the printed page (see ../CHAPTER-FORMAT.md
// and QASAS_AGENT_BRIEF.md), write chapter-NN.js, then add one entry here,
// in reading order -- order is what gates progression, chapter N unlocks
// when chapter N-1 is finished.
//
// IMPORTANT: this shell must be registered in ../index.js's LIT_BOOKS array
// the moment it exists, even with only one chapter -- an unregistered book
// is invisible to the app (this bit qasas-v1 once earlier in this project).
export const BOOK = {
  id: 'qasas-v4',
  title: { ar: 'الْعَاصِفَةُ', en: 'The Storm' },
  volumeLabel: 'Volume Four',
  author: { ar: 'أَبُو الْحَسَنِ عَلِيٌّ النَّدْوِيُّ', en: 'Abū al-Ḥasan ʿAlī an-Nadwī' },
  blurb: "The story of Hūd ﷺ and his people ʿĀd, told in short vowelled pages of graded classical prose -- a nation blessed with towering strength and towering palaces who forget the Flood that drowned the people before them, and the messenger raised from among them who cannot turn them back before the storm.",
  chapters: [
    {
      id: 'ch1',
      number: 1,
      title: { ar: 'بَعْدَ نُوحٍ', en: 'After Nūḥ' },
      pages: [83, 84],
      blurb: "Nūḥ's blessed descendants multiply into a mighty new nation, ʿĀd -- men of iron-hard bodies who fear no one, prospering in camels, horses, children, gardens and springs.",
      load: () => import('./chapter-01.js'),
    },
    {
      id: 'ch2',
      number: 2,
      title: { ar: 'كُفْرَانُ عَادٍ', en: 'The Ingratitude of ʿĀd' },
      pages: [84, 85],
      blurb: "Despite Allah's bounty, ʿĀd forgets the Flood their fathers told them of and its very cause, and slides into carving, questioning, and sacrificing to idols exactly as Nūḥ's people once did.",
      load: () => import('./chapter-02.js'),
    },
    {
      id: 'ch3',
      number: 3,
      title: { ar: 'عُدْوَانُ عَادٍ', en: 'The Transgression of ʿĀd' },
      pages: [85, 86],
      blurb: "Their strength becomes a curse rather than a blessing -- with no fear of Allah or the Hereafter, ʿĀd turns predatory as wild beasts, crushing the weak and laying waste to whatever village or field their rage or war reaches.",
      load: () => import('./chapter-03.js'),
    },
    {
      id: 'ch4',
      number: 4,
      title: { ar: 'قُصُورُ عَادٍ', en: 'The Palaces of ʿĀd' },
      pages: [86, 87],
      blurb: "Obsessed with nothing but eating, drinking, idle amusement and outbuilding one another, ʿĀd pours its wealth into towering palaces it will never need, while its own poor go homeless.",
      load: () => import('./chapter-04.js'),
    },
    {
      id: 'ch5',
      number: 5,
      title: { ar: 'هُودٌ الرَّسُولُ', en: 'Hūd the Messenger' },
      pages: [87, 88],
      blurb: "Allah, unwilling to leave ʿĀd's corrupted minds without guidance, chooses one of their own -- Hūd, born into a noble house of ʿĀd and raised on reason and righteousness -- to be their messenger.",
      load: () => import('./chapter-05.js'),
    },
    {
      id: 'ch6',
      number: 6,
      title: { ar: 'دَعْوَةُ هُودٍ', en: 'The Call of Hūd' },
      pages: [88, 89],
      blurb: "Hūd rises among his people to call them to Allah alone, reasoning with them over the stone they carve with their own hands and worship the next day, and reminding them that even a dog is more loyal to its master than they are to their Creator.",
      load: () => import('./chapter-06.js'),
    },
    {
      id: 'ch7',
      number: 7,
      title: { ar: 'جَوَابُ الْقَوْمِ', en: 'The Response of the People' },
      pages: [89, 90],
      blurb: "Contented with worldly life and its pleasures, ʿĀd's hearts recoil from Hūd's words -- they dismiss him as foolish or mad, and their nobles accuse him outright of folly and lying.",
      load: () => import('./chapter-07.js'),
    },
    {
      id: 'ch8',
      number: 8,
      title: { ar: 'حِكْمَةُ هُودٍ', en: 'The Wisdom of Hūd' },
      pages: [90, 91],
      blurb: "Hūd persists gently, reminding his people that he is their own brother asking no reward and taking nothing from them, and explaining why Allah sends any nation a messenger from among themselves rather than addressing them directly.",
      load: () => import('./chapter-08.js'),
    },
    {
      id: 'ch9',
      number: 9,
      title: { ar: 'إِيمَانُ هُودٍ', en: 'The Faith of Hūd' },
      pages: [91, 92],
      blurb: "Unable to answer him, ʿĀd can only claim their gods have struck Hūd mad -- so Hūd declares his open disbelief in their powerless idols and his utter trust in Allah alone, unafraid of them or of any plot they can mount against him.",
      load: () => import('./chapter-09.js'),
    },
    {
      id: 'ch10',
      number: 10,
      title: { ar: 'عِنَادُ عَادٍ', en: 'The Obstinacy of ʿĀd' },
      pages: [92, 93],
      blurb: "Having heard everything, ʿĀd still refuses to believe -- clinging to their fathers' idols against Hūd's evidence, denying any fear of his God, and mocking him to bring on the punishment he keeps warning of.",
      load: () => import('./chapter-10.js'),
    },
    {
      id: 'ch11',
      number: 11,
      title: { ar: 'الْعَذَابُ', en: 'The Punishment' },
      pages: [93, 94, 95],
      blurb: "A longed-for rain cloud turns out to be the promised punishment itself -- an eight-day, seven-night storm that uproots trees, flattens homes, and leaves ʿĀd's dead scattered like fallen palm trunks, while Hūd and the believers alone are saved.",
      load: () => import('./chapter-11.js'),
    },
  ],
};

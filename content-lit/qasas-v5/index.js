// قَصَصُ النَّبِيِّينَ, volume five -- «نَاقَةُ ثَمُودَ» (Ṣāliḥ / Thamūd). The
// book shell the Library screen reads.
//
// Chapter numbering restarts at 1 in every Qaṣaṣ volume (see
// QASAS_AGENT_BRIEF.md §1), so each volume gets its own book id/shell rather
// than sharing one -- ch1 here is a different chapter from qasas-v1's,
// qasas-v2's, qasas-v3's, or qasas-v4's ch1. Volume 5 begins printed page
// 96, immediately after volume 4's closing divider on page 95 (see
// QASAS_VOLUME_MAP.md's volume 4/5 tables). Boundaries verified against
// that map and the scans directly: p.96 opens with the ornamental title box
// «نَاقَةُ ثَمُودَ» followed immediately by chapter 1's own box on the same
// page; p.109 closes with a triple-rosette divider after chapter 13.
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
  id: 'qasas-v5',
  title: { ar: 'نَاقَةُ ثَمُودَ', en: "Thamūd's She-Camel" },
  volumeLabel: 'Volume Five',
  author: { ar: 'أَبُو الْحَسَنِ عَلِيٌّ النَّدْوِيُّ', en: 'Abū al-Ḥasan ʿAlī an-Nadwī' },
  blurb: "The story of Ṣāliḥ ﷺ and Thamūd, told in short vowelled pages of graded classical prose -- a people who inherited ʿĀd's prosperity and carved palaces from the mountains themselves, the prophet born among their own nobility, the she-camel sent as an undeniable sign, and the single terrible day that answered its killing.",
  chapters: [
    {
      id: 'ch1',
      number: 1,
      title: { ar: 'بَعْدَ عَادٍ', en: 'After ʿĀd' },
      pages: [96, 97],
      blurb: "Thamūd inherits ʿĀd's land and prosperity, matching and then surpassing them in skill -- carving wide, beautiful houses and wondrous ornament straight out of the mountains, blessed with abundant rain, orchards, and long life.",
      load: () => import('./chapter-01.js'),
    },
    {
      id: 'ch2',
      number: 2,
      title: { ar: 'كُفْرَانُ ثَمُودَ', en: 'The Ingratitude of Thamūd' },
      pages: [97, 98],
      blurb: "Thamūd's prosperity breeds not gratitude but arrogance and disbelief -- they boast of their own strength, imagine themselves immune to death, and reason that Nūḥ's people and ʿĀd only perished because of where they happened to live.",
      load: () => import('./chapter-02.js'),
    },
    {
      id: 'ch3',
      number: 3,
      title: { ar: 'عِبَادَةُ الْأَصْنَامِ', en: 'The Worship of Idols' },
      pages: [98, 99],
      blurb: 'Not content with their skill in stone, Thamūd carves idols and worships them -- the narrator turns to indignant rhetorical questions: does the strong worship the weak, does a master bow to his own slave, over stone that cannot even refuse the hands that shape it?',
      load: () => import('./chapter-03.js'),
    },
    {
      id: 'ch4',
      number: 4,
      title: { ar: 'صَالِحٌ عَلَيْهِ الصَّلَاةُ وَالسَّلَامُ', en: 'Ṣāliḥ, Peace Be Upon Him' },
      pages: [99, 100, 101],
      blurb: "Allah resolves to send Thamūd a messenger as He did Nūḥ's and ʿĀd's nations: Ṣāliḥ, a boy of noble birth in whom everyone -- his people, his own father -- places purely worldly hope, all of it eclipsed by Allah's own plan for him: prophethood, to lead his people from darkness into light.",
      load: () => import('./chapter-04.js'),
    },
    {
      id: 'ch5',
      number: 5,
      title: { ar: 'دَعْوَةُ صَالِحٍ', en: 'The Call of Ṣāliḥ' },
      pages: [101, 102],
      blurb: "Ṣāliḥ rises among his people and calls them, in the Qur'an's own words, to worship Allah alone -- but the wealthy, absorbed in eating, drinking, and idle amusement, mock the very idea that a man with no palace, no orchard, no crops, and no palm trees could be a messenger.",
      load: () => import('./chapter-05.js'),
    },
    {
      id: 'ch6',
      number: 6,
      title: { ar: 'دِعَايَةُ الْأَغْنِيَاءِ', en: "The Wealthy's Campaign" },
      pages: [102, 103],
      blurb: "Watching some of their own people drift toward Ṣāliḥ, the wealthy fear for their standing and launch a propaganda campaign against him, quoted almost entirely from the Qur'an: he is only a man like themselves, resurrection after becoming dust and bones is absurd, and he is nothing but a liar fabricating claims against Allah.",
      load: () => import('./chapter-06.js'),
    },
    {
      id: 'ch7',
      number: 7,
      title: { ar: 'قَدْ أَخْطَأَ ظَنُّنَا', en: '"Our Assumption Was Wrong"' },
      pages: [103],
      blurb: "Thamūd disbelieves Ṣāliḥ outright and turns his own promise against him personally -- once their most outstanding boy, expected to rise among the great, he has instead \"chosen the path of poverty,\" disappointing everyone's hopes, including (they twist the knife) his own parents'.",
      load: () => import('./chapter-07.js'),
    },
    {
      id: 'ch8',
      number: 8,
      title: { ar: 'نَصِيحَةُ صَالِحٍ', en: 'The Advice of Ṣāliḥ' },
      pages: [104],
      blurb: "Ṣāliḥ presses on with wisdom and gentleness, confronting his people with a rhetorical volley -- do they think their palaces, orchards, crops, and rock-cut houses will last forever? -- then points to their own fathers, who had every one of those things and still died, unprotected by any of it from the angel of death.",
      load: () => import('./chapter-08.js'),
    },
    {
      id: 'ch9',
      number: 9,
      title: { ar: 'مَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ', en: '"I Ask No Reward of You For It"' },
      pages: [105],
      blurb: "Ṣāliḥ presses his people further -- why flee a trustworthy advisor who asks nothing of them, only to obey those who wrong others and spread corruption instead? Unable to answer, the people fall back on dismissal and a demand for a miracle, quoted straight from the Qur'an.",
      load: () => import('./chapter-09.js'),
    },
    {
      id: 'ch10',
      number: 10,
      title: { ar: 'نَاقَةُ اللَّهِ', en: 'The She-Camel of Allah' },
      pages: [105, 106],
      blurb: 'The people demand an impossible sign -- a pregnant she-camel straight out of the mountain rock -- certain Ṣāliḥ will fail; but his faith in his Lord is unshaken, and Allah answers his prayer exactly as demanded, though only a single person believes.',
      load: () => import('./chapter-10.js'),
    },
    {
      id: 'ch11',
      number: 11,
      title: { ar: 'النَّوْبَةُ', en: 'The Turn (drinking-day rota)' },
      pages: [106, 107],
      blurb: "Ṣāliḥ names the she-camel for what it is -- a sign from Allah, to be respected and left unharmed -- but its size and strangeness terrify Thamūd's own livestock, so he settles the dispute with a fair rota: the she-camel drinks one day, the people's livestock the next.",
      load: () => import('./chapter-11.js'),
    },
    {
      id: 'ch12',
      number: 12,
      title: { ar: 'طُغْيَانُ ثَمُودَ', en: 'The Tyranny of Thamūd' },
      pages: [107, 108],
      blurb: "Rather than accept the fair rota, the people grow resentful over losing even one day's water -- and though Ṣāliḥ has already warned them not to harm the she-camel, two men volunteer on the spot to kill it, waiting for it to emerge before shooting it with an arrow and cutting its throat.",
      load: () => import('./chapter-12.js'),
    },
    {
      id: 'ch13',
      number: 13,
      title: { ar: 'الْعَذَابُ', en: 'The Punishment' },
      pages: [108, 109],
      blurb: "Ṣāliḥ delivers Allah's own ultimatum -- three days left to live -- word for word from the Qur'an; nine corrupt men swear to murder him by night, but Allah protects him. On the third day a single terrible cry and earthquake level the city at once. Ṣāliḥ and the believers emigrate, and the story closes with his own grieving farewell, the narrator's aside on the empty ruins that remain, the Prophet's ﷺ own warning passing those same ruins, and the Qur'an's final salutation against Thamūd.",
      load: () => import('./chapter-13.js'),
    },
  ],
};

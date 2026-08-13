// قَصَصُ النَّبِيِّينَ, volume ten -- «قِصَّةُ سَيِّدِنَا أَيُّوبَ وَسَيِّدِنَا يُونُسَ»
// (Ayyūb & Yūnus). The book shell the Library screen reads.
//
// Chapter numbering restarts at 1 in every Qaṣaṣ volume (see
// QASAS_AGENT_BRIEF.md §1 and QASAS_VOLUME_MAP.md), so each volume gets
// its own book id/shell rather than sharing one -- ch1 here is a
// different chapter from qasas-v1's, qasas-v2's, or qasas-v3's ch1.
// Volume 10 begins printed page 237, immediately after volume 9's
// (Dāwūd & Sulaymān) closing divider on page 236, and closes page 242
// with its own triple-rosette divider before volume 11 (Zakariyyā) opens
// fresh on page 243.
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
  id: 'qasas-v10',
  title: { ar: 'قِصَّةُ سَيِّدِنَا أَيُّوبَ وَسَيِّدِنَا يُونُسَ', en: 'Ayyūb & Yūnus' },
  volumeLabel: 'Volume Ten',
  author: { ar: 'أَبُو الْحَسَنِ عَلِيٌّ النَّدْوِيُّ', en: 'Abū al-Ḥasan ʿAlī an-Nadwī' },
  blurb: 'Two short, image-rich stories of trial answered by mercy: Ayyūb’s patience through the loss of everything but his heart and tongue, and Yūnus’s three-fold darkness in the belly of the whale -- both closing on Qur’an verses quoted directly, the answered prayer at the center of each.',
  chapters: [
    {
      id: 'ch1',
      number: 1,
      title: { ar: 'قِصَّةُ أَيُّوبَ نَمَطٌ آخَرُ مِنَ الْقَصَصِ', en: 'The Story of Ayyūb Is a Different Pattern of Stories' },
      pages: [237],
      blurb: 'Ayyūb had abundant wealth and pleasing children, then lost it all, then lost his health itself -- until nothing remained but a heart and tongue still remembering Allah, and a wife who quietly stayed to serve him.',
      load: () => import('./chapter-01.js'),
    },
    {
      id: 'ch2',
      number: 2,
      title: { ar: 'صَبْرُ أَيُّوبَ', en: 'The Patience of Ayyūb' },
      pages: [238],
      blurb: 'Through years of trial Ayyūb never complains, never grumbles, never grows angry -- his tongue kept murmuring in remembrance and thanks the whole time.',
      load: () => import('./chapter-02.js'),
    },
    {
      id: 'ch3',
      number: 3,
      title: { ar: 'مِحْنَةٌ وَمِنْحَةٌ', en: 'A Trial and a Gift' },
      pages: [238],
      blurb: 'Once the trial has done its work, Allah inspires Ayyūb with the answered prayer quoted straight from the Qur’an, restores his health and wealth, and multiplies his blessings manifold.',
      load: () => import('./chapter-03.js'),
    },
    {
      id: 'ch4',
      number: 4,
      title: { ar: 'قِصَّةُ يُونُسَ وَحِكْمَتُهَا', en: 'The Story of Yūnus and Its Wisdom' },
      pages: [239],
      blurb: 'The Yūnus story is paired with Ayyūb’s to prove the same point in a different image: Allah’s power reaches a person exactly where every human way out has closed, like a millstone of death grinding down to nothing -- and then draws him back out whole.',
      load: () => import('./chapter-04.js'),
    },
    {
      id: 'ch5',
      number: 5,
      title: { ar: 'يُونُسُ بَيْنَ قَوْمِهِ', en: 'Yūnus Among His People' },
      pages: [239, 240],
      blurb: 'Sent to Nineveh, refused, and left in anger after promising punishment in three days -- when his people finally believe him and cry out to Allah with every child and animal separated from its young, the Qur’an itself calls them out as the one people whose repentance came in time.',
      load: () => import('./chapter-05.js'),
    },
    {
      id: 'ch6',
      number: 6,
      title: { ar: 'يُونُسُ فِي بَطْنِ الْحُوتِ', en: 'Yūnus in the Belly of the Whale' },
      pages: [240, 241],
      blurb: 'Aboard a foundering ship, the lot to be thrown overboard falls on Yūnus three times running -- quoted from the Qur’an -- until he finally leaps into the sea, where a whale Allah had already sent swallows him whole, commanded to leave him unharmed.',
      load: () => import('./chapter-06.js'),
    },
    {
      id: 'ch7',
      number: 7,
      title: { ar: 'وَاسْتَجَابَ اللَّهُ دُعَاءَهُ', en: 'And Allah Answered His Prayer' },
      pages: [241, 242],
      blurb: 'Three darknesses stacked on Yūnus at once -- the whale’s belly, the sea, the night -- until Allah inspires him with the prayer every despairing soul still recites, quoted directly from the Qur’an: closing the volume on the answer that came.',
      load: () => import('./chapter-07.js'),
    },
  ],
};

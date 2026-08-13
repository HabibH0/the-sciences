// قَصَصُ النَّبِيِّينَ, volume eight -- «قِصَّةُ سَيِّدِنَا شُعَيْبٍ» (Shuʿayb). The
// book shell the Library screen reads.
//
// Chapter numbering restarts at 1 in every Qaṣaṣ volume (see
// QASAS_AGENT_BRIEF.md §1), so each volume gets its own book id/shell rather
// than sharing one -- ch1 here is a different chapter from any other
// volume's ch1. Volume 8 begins printed page 213, right after volume 7's
// closing divider on page 212, and closes page 222 (no divider -- volume 9's
// own title graphic «قِصَّةُ سَيِّدِنَا دَاوُدَ، وَسَيِّدِنَا سُلَيْمَانَ» begins directly
// on page 223). Boundaries verified against QASAS_VOLUME_MAP.md and the
// scans directly (200-350dpi renders of pp.212-223).
//
// Structurally unusual among the Qaṣaṣ volumes: it opens with a two-chapter
// recap/transition (ch1 looks back on the six prophets already read --
// Ibrāhīm, Yūsuf, Nūḥ, Hūd, Ṣāliḥ, Mūsā -- and ch2 is the author's own essay
// on why the Qurʾān narrates some prophets' stories at length and others not
// at all) before the volume's own title graphic «قِصَّةُ سَيِّدِنَا شُعَيْبٍ»
// appears mid-book on page 215, immediately followed by a short bridging
// paragraph (still ch2's content -- see chapter-02.js's header comment) and
// then chapter 3, where the Shuʿayb narrative proper begins. Volume titled
// after Shuʿayb per the volume map's call, since 12 of the 14 chapters are
// his story.
//
// This volume quotes the Qurʾān far more densely than vols 1-3 (most of
// Sūrat Hūd 11:84-95 and Sūrat al-Aʿrāf 7:85-93, plus one fragment of Sūrat
// ash-Shuʿarāʾ 26:185-187) -- every ﴿﴾-bracketed quote is annotated with full
// tokens exactly like ordinary narration, per the house convention already
// established in qasas-v3 (see e.g. qasas-v3/chapter-16.js's header comment)
// rather than the older "keep Qurʾān quotes short and undrillable" idea
// floated in QASAS_AGENT_BRIEF.md §6/§9.1 -- that workaround was never
// actually adopted once v1-v3 shipped, so this volume follows the shipped
// precedent, not the superseded brief.
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
  id: 'qasas-v8',
  title: { ar: 'قِصَّةُ سَيِّدِنَا شُعَيْبٍ', en: 'The Story of Our Master Shuʿayb' },
  volumeLabel: 'Volume Eight',
  author: { ar: 'أَبُو الْحَسَنِ عَلِيٌّ النَّدْوِيُّ', en: 'Abū al-Ḥasan ʿAlī an-Nadwī' },
  blurb: "A short recap of the six prophets already read, then the story of Shuʿayb ﷺ, sent to the trading people of Madyan and the Aykah -- cheats of the scale and the highway who meet his patient, reasoned call with mockery, threats of exile, and finally the same fate as every people before them who denied their prophet.",
  chapters: [
    {
      id: 'ch1',
      number: 1,
      title: { ar: 'نَظْرَةٌ عَلَى الْقَصَصِ السَّابِقَةِ', en: 'A Look Back at the Previous Stories' },
      pages: [213],
      blurb: "A single warm, breathless sentence looking back on everything read so far -- Ibrāhīm, Yūsuf, Nūḥ, Hūd, Ṣāliḥ, and Mūsā at length -- and on how eagerly it was read, remembered, retold to younger siblings, and repeated to parents.",
      load: () => import('./chapter-01.js'),
    },
    {
      id: 'ch2',
      number: 2,
      title: { ar: 'قِصَّةُ صِرَاعٍ بَيْنَ الْحَقِّ وَالْبَاطِلِ', en: 'A Story of Struggle Between Truth and Falsehood' },
      pages: [213, 214, 215],
      blurb: "The author's own essay on why these are exactly the prophets' stories the Qurʾān tells: every one is a struggle between truth and falsehood, knowledge and ignorance, the strong and the weak -- a lesson and a reminder, sealed with the Qurʾān's own verse that these stories are no invention. A closing line notes the Qurʾān holds still other stories beyond these.",
      load: () => import('./chapter-02.js'),
    },
    {
      id: 'ch3',
      number: 3,
      title: { ar: 'وَإِلَى مَدْيَنَ أَخَاهُمْ شُعَيْبًا', en: 'And to Madyan, Their Brother Shuʿayb' },
      pages: [215, 216],
      blurb: "Madyan and the Aykah sat astride the great trade roads between Yemen and Syria, Iraq and Egypt, on the Red Sea coast -- a wealthy people who fell into shirk like every nation before them, and added their own signature sin: cheating the scale and the measure, robbing travelers on the road, and living as corruption on the earth.",
      load: () => import('./chapter-03.js'),
    },
    {
      id: 'ch4',
      number: 4,
      title: { ar: 'دَعْوَةُ شُعَيْبٍ', en: 'The Call of Shuʿayb' },
      pages: [216],
      blurb: "Allah sends them their own brother Shuʿayb, and his call is given word for word from the Qurʾān: worship Allah alone, do not shortchange the measure and the scale, and do not spread corruption on the earth after it has been set right.",
      load: () => import('./chapter-04.js'),
    },
    {
      id: 'ch5',
      number: 5,
      title: { ar: 'أَبٌ رَحِيمٌ وَمُعَلِّمٌ حَكِيمٌ', en: 'A Merciful Father and a Wise Teacher' },
      pages: [216, 217],
      blurb: "Shuʿayb speaks to them gently and unties the real knot in their hearts -- love of money -- reasoning that what remains lawful with Allah is better for them than any profit skimmed by fraud, and that he only ever asks what he himself already practices.",
      load: () => import('./chapter-05.js'),
    },
    {
      id: 'ch6',
      number: 6,
      title: { ar: 'جَوَابُ قَوْمِهِ', en: 'The Response of His People' },
      pages: [217, 218],
      blurb: "Their sharpest minds pick apart his call in mocking self-satisfaction, as if they had cracked a riddle, and answer him in the Qurʾān's own words: does your prayer command you to abandon our fathers' gods, or to stop doing as we please with our own money?",
      load: () => import('./chapter-06.js'),
    },
    {
      id: 'ch7',
      number: 7,
      title: { ar: 'شُعَيْبٌ يَشْرَحُ دَعْوَتَهُ', en: 'Shuʿayb Explains His Call' },
      pages: [218, 219],
      blurb: "Shuʿayb answers them with total patience, laying out that he acts on clear insight from his Lord, that he never asks them to abandon anything for the sake of ruining them, and that his only wish is to set things right as far as he is able, trusting Allah alone.",
      load: () => import('./chapter-07.js'),
    },
    {
      id: 'ch8',
      number: 8,
      title: { ar: 'ما نَفْقَهُ كَثِيراً مِمَّا تَقُولُ', en: '"We Do Not Understand Much of What You Say"' },
      pages: [220],
      blurb: "The people feign incomprehension, as if their own brother -- the clearest speaker among them -- were talking in a foreign tongue: the same excuse people always make once advice grows heavy and obedience grows hard.",
      load: () => import('./chapter-08.js'),
    },
    {
      id: 'ch9',
      number: 9,
      title: { ar: 'شُعَيْبٌ يَتَعَجَّبُ مِنْ قَوْمِهِ', en: 'Shuʿayb Is Astonished at His People' },
      pages: [220, 221],
      blurb: "They excuse their threats by his weakness and small clan -- were it not for his kinsmen, they would have stoned him -- and Shuʿayb marvels, in the Qurʾān's own words, that they hold his tribe dearer than Allah Himself, casting their Lord behind their backs.",
      load: () => import('./chapter-09.js'),
    },
    {
      id: 'ch10',
      number: 10,
      title: { ar: 'السَّهْمُ الأَخِيرُ', en: 'The Last Arrow' },
      pages: [221],
      blurb: "Their argument spent, the arrogant among them loose the same last arrow every proud nation fires at its prophet: leave our town, Shuʿayb, you and those who believed with you -- or return to our religion. \"Even if we hate it?\" he answers.",
      load: () => import('./chapter-10.js'),
    },
    {
      id: 'ch11',
      number: 11,
      title: { ar: 'حُجَّةٌ قَاطِعَةٌ', en: 'A Decisive Argument' },
      pages: [221, 222],
      blurb: "Shuʿayb answers as a man jealous for his own faith and conscience, quoted straight from the Qurʾān: we would be inventing a lie against Allah to return to your religion after He saved us from it -- our Lord's knowledge encompasses everything, and on Him alone we rely.",
      load: () => import('./chapter-11.js'),
    },
    {
      id: 'ch12',
      number: 12,
      title: { ar: 'بَلْ قَالُوا مِثْلَ مَا قَالَ الأَوَّلُونَ', en: 'Rather They Said Like Those Before Them' },
      pages: [222],
      blurb: "None of it moves them -- they fall back on the very same lines every rejecting nation before them used: you are only bewitched, you are nothing but a man like us, and if you are truthful, bring down a piece of the sky upon us.",
      load: () => import('./chapter-12.js'),
    },
    {
      id: 'ch13',
      number: 13,
      title: { ar: 'عَاقِبَةُ أُمَّةٍ كَذَّبَتْ نَبِيَّهَا', en: 'The Fate of a Nation That Denied Its Prophet' },
      pages: [222],
      blurb: "The ending is the one ending every nation that denies its prophet and disbelieves Allah's favor receives: the earthquake seizes them, and by morning they lie face-down in their homes as if they had never lived there at all.",
      load: () => import('./chapter-13.js'),
    },
    {
      id: 'ch14',
      number: 14,
      title: { ar: 'بَلَّغَ الرِّسَالَةَ وَأَدَّى الأَمَانَةَ', en: 'He Delivered the Message and Fulfilled the Trust' },
      pages: [222],
      blurb: "Shuʿayb's own end is the end of every prophet who delivers his message, fulfills his trust, and establishes the proof: he turns away from his ruined people with the Qurʾān's own closing words -- I conveyed to you my Lord's messages and I gave you sincere counsel, so how should I grieve for a disbelieving people?",
      load: () => import('./chapter-14.js'),
    },
  ],
};

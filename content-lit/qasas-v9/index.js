// قَصَصُ النَّبِيِّينَ, volume nine -- «قِصَّةُ سَيِّدِنَا دَاوُدَ، وَسَيِّدِنَا
// سُلَيْمَانَ» (Dāwūd & Sulaymān). The book shell the Library screen reads.
//
// Chapter numbering restarts at 1 in every Qaṣaṣ volume (see
// QASAS_AGENT_BRIEF.md §1), so each volume gets its own book id/shell rather
// than sharing one -- ch1 here is a different chapter from qasas-v1's,
// qasas-v2's, or qasas-v3's ch1. Volume 9 begins printed page 223,
// immediately after volume 8's Shuʿayb story closes on page 222 (per
// QASAS_VOLUME_MAP.md). It runs to page 236, where a triple-rosette divider
// closes it before volume 10 (Ayyūb & Yūnus) begins on page 237.
//
// Chapter titles were cross-checked against the book's own topical index
// (pp. 285-286); this corrects QASAS_VOLUME_MAP.md's ch3 title from the
// index's actual شُكْرُهُ عَلَى هَذِهِ النِّعْمَةِ (the map had شُكْرَةٌ).
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
  id: 'qasas-v9',
  title: { ar: 'قِصَّةُ سَيِّدِنَا دَاوُدَ، وَسَيِّدِنَا سُلَيْمَانَ', en: 'Dāwūd & Sulaymān' },
  volumeLabel: 'Volume Nine',
  author: { ar: 'أَبُو الْحَسَنِ عَلِيٌّ النَّدْوِيُّ', en: 'Abū al-Ḥasan ʿAlī an-Nadwī' },
  blurb: "The stories of Dāwūd and Sulaymān ﷺ, told in short vowelled pages of graded classical prose -- Allah's favours on both prophets, Sulaymān's dominion over wind, jinn, and the language of birds, the hoopoe's report of the Queen of Sabaʾ, her trial by throne and glass palace, and her submission to Allah -- closing with the Quran's own defence of Sulaymān against the charge of sorcery.",
  chapters: [
    {
      id: 'ch1',
      number: 1,
      title: { ar: 'الْقُرْآنُ يَتَحَدَّثُ عَنْ آلَاءِ اللَّهِ', en: 'The Quran Speaks of the Bounties of Allah' },
      pages: [223, 224],
      blurb: "The Quran does not limit itself to Allah's Days and the abuse His messengers suffered -- it recounts many favours granted to specific prophets, naming Dāwūd, Sulaymān, Ayyūb, Yūnus, Zakariyyā, and Yaḥyā, before Allah establishes Dāwūd and Sulaymān in the earth with dominion and knowledge no one else was given.",
      load: () => import('./chapter-01.js'),
    },
    {
      id: 'ch2',
      number: 2,
      title: { ar: 'نِعْمَةُ اللَّهِ عَلَى دَاوُدَ', en: "Allah's Blessing upon Dāwūd" },
      pages: [224],
      blurb: 'The mountains and birds echo his glorification of Allah, and iron is softened in his hand so he can craft coats of mail -- quoting Sūrat Sabaʾ and Sūrat al-Anbiyāʾ.',
      load: () => import('./chapter-02.js'),
    },
    {
      id: 'ch3',
      number: 3,
      title: { ar: 'شُكْرُهُ عَلَى هَذِهِ النِّعْمَةِ', en: 'His Gratitude for This Blessing' },
      pages: [225],
      blurb: 'Despite his wide dominion, Dāwūd remains a humble, penitent, ever-praying servant and a just ruler -- quoting Sūrat Ṣād, Allah\'s address making him a khalīfah on the express condition of judging by truth and never following desire.',
      load: () => import('./chapter-03.js'),
    },
    {
      id: 'ch4',
      number: 4,
      title: { ar: 'نِعْمَةُ اللَّهِ عَلَى سُلَيْمَانَ', en: "Allah's Blessing upon Sulaymān" },
      pages: [225, 226],
      blurb: 'The winds obey Sulaymān\'s command, and the strong and skilled among jinn and devils carry out his colossal building projects -- quoting four consecutive āyāt from Sūrat al-Anbiyāʾ and Sūrat Sabaʾ.',
      load: () => import('./chapter-04.js'),
    },
    {
      id: 'ch5',
      number: 5,
      title: { ar: 'فِقْهٌ دَقِيقٌ وَعِلْمٌ عَمِيقٌ', en: 'Precise Jurisprudence and Deep Knowledge' },
      pages: [226, 227],
      blurb: "A case of sheep straying into a vineyard is referred to Dāwūd; young Sulaymān's milder counter-ruling prevails, and the Quran confirms both prophets' judgment and understanding.",
      load: () => import('./chapter-05.js'),
    },
    {
      id: 'ch6',
      number: 6,
      title: { ar: 'سُلَيْمَانُ يَعْرِفُ لُغَةَ الطَّيْرِ وَالْحَيَوَانِ', en: 'Sulaymān Knows the Language of Birds and Animals' },
      pages: [227, 228],
      blurb: "Sulaymān reviews his army of jinn, humans, and birds; an ant, fearing her tribe would be crushed underfoot unnoticed, orders her people to safety -- and Sulaymān, understanding her, responds only with gratitude to Allah, not pride.",
      load: () => import('./chapter-06.js'),
    },
    {
      id: 'ch7',
      number: 7,
      title: { ar: 'قِصَّةُ هُدْهُدٍ', en: 'The Story of a Hoopoe' },
      pages: [228],
      blurb: "Sulaymān's scout the hoopoe goes missing from the review and is threatened, then returns with news no one else had: a great, wide kingdom -- Sabaʾ -- whose clever people nonetheless prostrate to the sun instead of Allah.",
      load: () => import('./chapter-07.js'),
    },
    {
      id: 'ch8',
      number: 8,
      title: { ar: 'سُلَيْمَانُ يَدْعُو مَلِكَةَ سَبَإٍ إِلَى دِينِهِ', en: 'Sulaymān Calls the Queen of Sheba to His Religion' },
      pages: [228, 229],
      blurb: 'Distressed that a neighbouring nation remains unreached by his call, Sulaymān writes the polytheist queen an eloquent letter calling her to Islam before ever marching troops on her land.',
      load: () => import('./chapter-08.js'),
    },
    {
      id: 'ch9',
      number: 9,
      title: { ar: 'الْمَلِكَةُ تَسْتَشِيرُ أَرْكَانَ دَوْلَتِهَا', en: 'The Queen Consults the Pillars of Her State' },
      pages: [229, 230],
      blurb: 'A fair character sketch of the Queen -- sensible and widely experienced, failed only in knowing the true God -- who refuses to decide alone and brings the extraordinary letter before her council.',
      load: () => import('./chapter-09.js'),
    },
    {
      id: 'ch10',
      number: 10,
      title: { ar: 'هَدِيَّةُ مُسَاوَمَةٍ', en: 'A Bargaining Gift' },
      pages: [230],
      blurb: "Refusing her courtiers' talk of military strength, the Queen decides on a test instead of war: gifts sent to Sulaymān -- accepted, he is only a king to be fought; refused, a Prophet to be followed.",
      load: () => import('./chapter-10.js'),
    },
    {
      id: 'ch11',
      number: 11,
      title: { ar: 'الْمَلِكَةُ تَأْتِي خَاضِعَةً', en: 'The Queen Comes Submissively' },
      pages: [231],
      blurb: "The Queen sets out to Sulaymān submissively with her troops; he has her own throne fetched and its features altered before her arrival, as a miracle testing her recognition and certainty.",
      load: () => import('./chapter-11.js'),
    },
    {
      id: 'ch12',
      number: 12,
      title: { ar: 'قَصْرٌ عَظِيمٌ مِنْ زُجَاجٍ', en: 'A Great Palace of Glass' },
      pages: [231, 232],
      blurb: 'Sulaymān has jinn and human builders raise a glass palace with water running beneath it, to expose the same perceptual error by which the Queen and her people mistake the sun for a god.',
      load: () => import('./chapter-12.js'),
    },
    {
      id: 'ch13',
      number: 13,
      title: { ar: 'وَأَسْلَمَتْ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ', en: 'And She Submitted with Sulaymān to Allah, Lord of the Worlds' },
      pages: [232, 233],
      blurb: 'Despite her shrewdness, the Queen mistakes the glass for water; Sulaymān corrects her, the veil lifts from her eyes, and she confesses her error in the Quran\'s own closing words of submission.',
      load: () => import('./chapter-13.js'),
    },
    {
      id: 'ch14',
      number: 14,
      title: { ar: 'الْقُرْآنُ يَحْكِي قِصَّةَ سُلَيْمَانَ', en: 'The Quran Narrates the Story of Sulaymān' },
      pages: [233, 234, 235],
      blurb: "The full direct Qur'an text of Sūrat an-Naml 27:20-44 -- the entire hoopoe/Sabaʾ narrative just retold across the previous chapters, now quoted verbatim as the corpus's own confirmation.",
      load: () => import('./chapter-14.js'),
    },
    {
      id: 'ch15',
      number: 15,
      title: { ar: 'وَمَا كَفَرَ سُلَيْمَانُ وَلَكِنَّ الشَّيَاطِينَ كَفَرُوا', en: 'Sulaymān Did Not Disbelieve, But the Devils Disbelieved' },
      pages: [235, 236],
      blurb: 'A closing defence: the Jews attributed magic and disbelief to Sulaymān, but Allah clears him in three āyāt from Sūrat al-Baqarah and Sūrat Ṣād, closing the volume.',
      load: () => import('./chapter-15.js'),
    },
  ],
};

// قَصَصُ النَّبِيِّينَ, volume three -- «سَفِينَةُ نُوحٍ» (Nūḥ). The book shell
// the Library screen reads.
//
// Chapter numbering restarts at 1 in every Qaṣaṣ volume (see
// QASAS_AGENT_BRIEF.md §1), so each volume gets its own book id/shell rather
// than sharing one -- ch1 here is a different chapter from qasas-v1's or
// qasas-v2's ch1. Volume 3 begins printed page 62, immediately after volume
// 2's closing divider on page 61 (see qasas-v2/chapter-25.js's header
// comment).
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
  id: 'qasas-v3',
  title: { ar: 'سَفِينَةُ نُوحٍ', en: "Nūḥ's Ark" },
  volumeLabel: 'Volume Three',
  author: { ar: 'أَبُو الْحَسَنِ عَلِيٌّ النَّدْوِيُّ', en: 'Abū al-Ḥasan ʿAlī an-Nadwī' },
  blurb: "The story of Nūḥ ﷺ, told in short vowelled pages of graded classical prose -- Adam's scattered descendants drifting into idolatry, the Devil's envy and long patience, and the prophet sent to call his people back before the flood.",
  chapters: [
    {
      id: 'ch1',
      number: 1,
      title: { ar: 'بَعْدَ آدَمَ', en: 'After Adam' },
      pages: [62],
      blurb: "Adam's descendants spread across the earth and build villages and houses -- still one nation, worshiping Allah alone.",
      load: () => import('./chapter-01.js'),
    },
    {
      id: 'ch2',
      number: 2,
      title: { ar: 'حَسَدُ الشَّيْطَانِ', en: "The Devil's Envy" },
      pages: [63],
      blurb: "Iblīs cannot bear that Adam's descendants remain united and faithful to Allah -- his jealous internal monologue builds to a resolve: he was cursed and expelled for refusing to bow to Adam, so he must take revenge on Adam's children.",
      load: () => import('./chapter-02.js'),
    },
    {
      id: 'ch3',
      number: 3,
      title: { ar: 'فِكْرَةُ الشَّيْطَانِ', en: "The Devil's Idea" },
      pages: [63, 64],
      blurb: "Iblīs settles on shirk as his weapon, since Allah forgives every sin but that one -- but when he tries calling people to it directly, they recoil and curse him to his face.",
      load: () => import('./chapter-03.js'),
    },
    {
      id: 'ch4',
      number: 4,
      title: { ar: 'حِيلَةُ الشَّيْطَانِ', en: "The Devil's Trick" },
      pages: [64, 65],
      blurb: "Unable to call people to shirk directly, Iblīs finds an indirect door: he waits for truly righteous, beloved men to die, then goes to the people and starts talking about them.",
      load: () => import('./chapter-04.js'),
    },
    {
      id: 'ch5',
      number: 5,
      title: { ar: 'صُوَرُ الصَّالِحِينَ', en: 'Images of the Righteous' },
      pages: [65],
      blurb: "The Devil walks the grieving people step by step to his proposal: since they can no longer see the righteous men themselves, let them make images to look at every morning instead.",
      load: () => import('./chapter-05.js'),
    },
    {
      id: 'ch6',
      number: 6,
      title: { ar: 'مِنَ الصُّوَرِ إِلَى التَّمَاثِيلِ', en: 'From Images to Statues' },
      pages: [66],
      blurb: "Flat images give way to carved statues in every house and mosque -- the people still worship Allah alone and know these are just stone, but revere them anyway as monuments to the righteous.",
      load: () => import('./chapter-06.js'),
    },
    {
      id: 'ch7',
      number: 7,
      title: { ar: 'مِنَ التَّمَاثِيلِ إِلَى الأَصْنَامِ', en: 'From Statues to Idols' },
      pages: [66, 67],
      blurb: "Once the generation that remembered the righteous men dies out, their children -- with no memory of why -- go further still: prostrating, praying, and sacrificing to the statues, which become outright gods with names of their own: Wadd, Suwāʿ, Yaghūth, Yaʿūq, and Nasr.",
      load: () => import('./chapter-07.js'),
    },
    {
      id: 'ch8',
      number: 8,
      title: { ar: 'غَضَبُ اللَّهِ', en: 'The Wrath of Allah' },
      pages: [67, 68],
      blurb: "The narrator turns to indignant rhetorical question: why wouldn't Allah be angry at a people who walk His earth, eat His provision, and repay Him with disbelief and shirk? His anger withholds their rain and shrinks their harvests -- but they neither reason nor repent.",
      load: () => import('./chapter-08.js'),
    },
    {
      id: 'ch9',
      number: 9,
      title: { ar: 'الرَّسُولُ', en: 'The Messenger' },
      pages: [68, 69],
      blurb: "A theological digression: why does Allah send a human messenger rather than speaking to everyone directly? Even kings, mere human beings, don't personally address every subject -- so Allah wills to send the people a messenger to speak to them and advise them.",
      load: () => import('./chapter-09.js'),
    },
    {
      id: 'ch10',
      number: 10,
      title: { ar: 'بَشَرٌ أَمْ مَلَكٌ', en: 'A Human or an Angel?' },
      pages: [69, 70],
      blurb: "Why must the messenger be human rather than an angel? Because a human messenger who eats, drinks, thirsts, sickens, and dies just as they do -- and still worships Allah constantly -- leaves people with no excuse left to make.",
      load: () => import('./chapter-10.js'),
    },
    {
      id: 'ch11',
      number: 11,
      title: { ar: 'نُوحٌ الرَّسُولُ', en: 'Nūḥ the Messenger' },
      pages: [70, 71],
      blurb: "Allah finally names His choice: not the rich or the powerful, but Nūḥ -- righteous, noble, wise, forbearing, an advisor, compassionate, truthful, trustworthy -- for only Allah knows who can truly bear a message and a trust. He reveals to Nūḥ to warn his people before a painful punishment reaches them, and Nūḥ rises among them declaring himself their honest messenger.",
      load: () => import('./chapter-11.js'),
    },
    {
      id: 'ch12',
      number: 12,
      title: { ar: 'مَاذَا أَجَابَهُ الْقَوْمُ؟', en: 'What Did the People Answer Him?' },
      pages: [71, 72],
      blurb: "Nūḥ declares himself Allah's messenger, and his people answer in four voices: ordinary folk baffled that a man among them claims prophethood overnight; his own childhood friends bewildered that their playmate received revelation; the rich and arrogant indignant that Allah chose a poor man; and the ignorant, quoting their own Qur'anic objection that a human messenger is beneath them. The chapter closes on the ugliest charge: that Nūḥ only wants power and status.",
      load: () => import('./chapter-12.js'),
    },
    {
      id: 'ch13',
      number: 13,
      title: { ar: 'بَيْنَ نُوحٍ وَقَوْمِهِ', en: 'Between Nūḥ and His People' },
      pages: [72, 73],
      blurb: "The people see idol-worship as truth and reason itself, echoing their fathers without question. Nūḥ sees the exact reverse: idol-worship is misguidance and folly, and even Adam, father of all fathers, never worshiped idols. The chapter closes with Nūḥ's declaration at the top of his voice, quoted straight from the Qur'an -- his call to worship Allah alone, the chiefs' charge that he is in plain error, and his reply that he is only a messenger from the Lord of the worlds.",
      load: () => import('./chapter-13.js'),
    },
    {
      id: 'ch14',
      number: 14,
      title: { ar: 'اتَّبَعَكَ الأَرْذَلُونَ', en: 'The Lowest Have Followed You' },
      pages: [73, 74],
      blurb: "Nūḥ strives hard for his people's faith, but only a handful of working believers respond -- the rich, too proud and too distracted by wealth and children, refuse and call themselves nobles against the believers' \"lowest of the low.\" When they demand Nūḥ expel the poor believers, he refuses in the Qur'an's own words: he will not drive away believers, his door is not a king's door, he is nothing but a plain warner -- and asks who would help him against Allah if he did.",
      load: () => import('./chapter-14.js'),
    },
    {
      id: 'ch15',
      number: 15,
      title: { ar: 'حُجَّةُ الأَغْنِيَاءِ', en: "The Rich Men's Argument" },
      pages: [74, 75],
      blurb: "The rich lay out their self-serving logic for rejecting Nūḥ: they're already first in every good thing -- the best food, the best clothes, everyone following their lead -- so if his religion were really good, it would have reached them before it reached the poor. The chapter closes by quoting their reasoning straight from the Qur'an.",
      load: () => import('./chapter-15.js'),
    },
    {
      id: 'ch16',
      number: 16,
      title: { ar: 'دَعْوَةُ نُوحٍ', en: "Nūḥ's Call" },
      pages: [75, 76],
      blurb: "Nūḥ prays and strives hard to counsel his people, delivering Allah's warning word for word from the Qur'an: worship Him, fear Him, obey His messenger, and He will forgive your sins and grant you respite -- but Allah's appointed term cannot be delayed once it comes. Allah has already withheld the rain and grown angry; Nūḥ pleads with them to believe so the punishment will lift, and appeals again and again to the signs around them -- the sky, the sun, the moon, the earth spread like a carpet -- but his people refuse to reason or believe, stopping their ears whenever he calls them.",
      load: () => import('./chapter-16.js'),
    },
    {
      id: 'ch17',
      number: 17,
      title: { ar: 'دُعَاءُ نُوحٍ', en: "Nūḥ's Supplication" },
      pages: [77, 78],
      blurb: "Nūḥ keeps calling his people for a thousand years save fifty, but they never believe or return to Allah -- until Allah reveals that no more of them ever will. When Nūḥ calls once more, the people answer him in the Qur'an's own words: you've argued with us long enough, so bring the punishment you keep promising, if you're telling the truth. Only then does Nūḥ finally grow angry for Allah's sake and pray that not a single disbeliever be left standing on the earth.",
      load: () => import('./chapter-17.js'),
    },
    {
      id: 'ch18',
      number: 18,
      title: { ar: 'السَّفِينَةُ', en: 'The Ship' },
      pages: [78, 79],
      blurb: "Allah answers Nūḥ's prayer -- resolving to drown his people while saving Nūḥ and the believers -- and orders him to build a great ship. As Nūḥ builds it, his people can't believe their eyes: since when did their old neighbor become a carpenter, and how is a ship supposed to travel in the middle of dry land -- carried by jinn, dragged by oxen, walking on sand, or climbing a mountain? Nūḥ bears every jeer patiently, answering them at times in the Qur'an's own words: mock us now, and we'll mock you back just the same.",
      load: () => import('./chapter-18.js'),
    },
    {
      id: 'ch19',
      number: 19,
      title: { ar: 'الطُّوفَانُ', en: 'The Flood' },
      pages: [79, 80],
      blurb: "Allah's promise arrives: the sky pours down rain without end and water gushes up from the earth, surrounding the people from every side. Allah tells Nūḥ to take aboard whoever has believed, his own family, and a mated pair of every animal and bird -- for the coming Flood is universal, and no human or animal will escape it. Nūḥ does exactly this, and the ship sails off riding waves like mountains, while the rest of the people scramble up onto every high place and hill, fleeing a punishment from which there is no refuge but Allah Himself.",
      load: () => import('./chapter-19.js'),
    },
    {
      id: 'ch20',
      number: 20,
      title: { ar: 'ابْنُ نُوحٍ', en: "Nūḥ's Son" },
      pages: [80, 81],
      blurb: "Nūḥ's own son stood with the disbelievers, and even as the Flood rose Nūḥ's call to him -- ride with us! -- goes unanswered: the son trusts a mountain to save him instead, and is swept away among the drowned. Nūḥ grieves for him and hopes he might still be saved from the Fire on the Day of Resurrection, reasoning that Allah's promise to save his family must be true -- and resolves to intercede for his son with Allah.",
      load: () => import('./chapter-20.js'),
    },
    {
      id: 'ch21',
      number: 21,
      title: { ar: 'لَيْسَ مِنْ أَهْلِكَ', en: 'He Is Not of Your Family' },
      pages: [81, 82],
      blurb: "Nūḥ pleads with his Lord in the Qur'an's own words that his son is of his family and Allah's promise is true -- but Allah alerts him directly: Allah judges by deeds, not lineage, and a polytheist is not of a prophet's family even if he is the prophet's own son, so Nūḥ must not ask about what he has no knowledge of. Nūḥ takes heed at once, turns back to Allah, and prays the Qur'an's own closing supplication for forgiveness and mercy.",
      load: () => import('./chapter-21.js'),
    },
    {
      id: 'ch22',
      number: 22,
      title: { ar: 'بَعْدَ الطُّوفَانِ', en: 'After the Flood' },
      pages: [82],
      blurb: "The sky holds back and the water recedes, and the ship comes to rest on Mount Jūdī; Nūḥ and the believers disembark in peace as the disbelievers among his people lie perished, unmourned by sky or earth. Allah blesses Nūḥ's offspring, who spread across the earth and fill it with nations, prophets, and kings -- and the story closes with the Qur'an's own salutation, printed twice: peace be upon Nūḥ among the worlds.",
      load: () => import('./chapter-22.js'),
    },
  ],
};

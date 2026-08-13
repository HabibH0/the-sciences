// قَصَصُ النَّبِيِّينَ, volume six -- Mūsā عليه السلام, part one (birth
// through the sorcerers' defeat and Pharaoh's decision to kill him). The
// book shell the Library screen reads.
//
// Chapter numbering restarts at 1 in every Qaṣaṣ volume (see
// QASAS_AGENT_BRIEF.md §1), so this volume gets its own book id/shell
// rather than sharing one -- ch1 here is a different chapter from every
// other qasas-vN's ch1. Volume 6 begins printed page 110, immediately
// after volume 5's closing divider on page 109.
//
// No volume-level title is printed on the page for this volume (basmala
// graphic only, no centered heading, and the book's own topical index
// doesn't bold-header it either) -- title.ar/title.en below are supplied
// for cataloguing purposes, per QASAS_VOLUME_MAP.md's note on this same
// point, and describe the volume's actual arc (birth -> Madyan -> return
// to Egypt -> the sorcerers' contest -> Pharaoh's kill order). Volume 7
// picks up directly where this one ends (the Exodus story proper).
//
// *** CORRECTION TO QASAS_VOLUME_MAP.md ***: that document lists this
// volume as ending at chapter 25 «وَعِيدُ فِرْعَوْنَ» (p.155-159). That is
// wrong. Chapter 25 itself ends on page 157, and a further, previously
// unmapped chapter 26 «سَفَاهَةُ فِرْعَوْنَ» runs pages 157-159 and is what
// actually closes the volume with the triple-rosette divider (verified
// directly against the scan: a title box "٢٦ - سَفَاهَةُ فِرْعَوْنَ" sits
// partway down page 157, and page 160 opens volume 7 cleanly with its own
// basmala + "١ - مُؤْمِنُ آلِ فِرْعَوْنَ"). This volume has 26 chapters, not
// 25. See chapter-25.js's and chapter-26.js's own header comments for the
// full detail. QASAS_VOLUME_MAP.md itself should be corrected to match.
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
  id: 'qasas-v6',
  title: { ar: 'مِنَ الْمَهْدِ إِلَى الْمُوَاجَهَةِ', en: 'From the Cradle to the Confrontation' },
  volumeLabel: 'Volume Six',
  author: { ar: 'أَبُو الْحَسَنِ عَلِيٌّ النَّدْوِيُّ', en: 'Abū al-Ḥasan ʿAlī an-Nadwī' },
  blurb: "The story of Mūsā ﷺ, part one: born under Pharaoh's death sentence, raised in the very palace decreed to fall because of him, fled to Madyan after a fatal blow, married and returned with a commission to confront the man who raised him -- ending as the sorcerers who were meant to defeat him fall down believing, and Pharaoh, out of arguments, resolves to kill him outright.",
  chapters: [
    {
      id: 'ch1',
      number: 1,
      title: { ar: 'مِنْ كِنْعَانَ إِلَى مِصْرَ', en: 'From Canaan to Egypt' },
      pages: [110, 111],
      blurb: "Yaʿqūb and his household relocate to Egypt now that his son Yūsuf rules it, and Yūsuf sends for his father's household from Canaan.",
      load: () => import('./chapter-01.js'),
    },
    {
      id: 'ch2',
      number: 2,
      title: { ar: 'بَعْدَ يُوسُفَ', en: 'After Yūsuf' },
      pages: [112, 113],
      blurb: "Yaʿqūb and then Yūsuf both die, and the Egyptians deliver a eulogy built on a six-fold \"he is the one who...\" refrain, promising Yūsuf's family they remain as honored as in his own lifetime.",
      load: () => import('./chapter-02.js'),
    },
    {
      id: 'ch3',
      number: 3,
      title: { ar: 'بَنُو إِسْرَائِيلَ فِي مِصْرَ', en: 'The Children of Israel in Egypt' },
      pages: [114, 115],
      blurb: "Generations pass: Banū Isrāʾīl's own character declines, their standing in Egypt sours from honored guests to resented outsiders, and Yūsuf's memory fades into indifference and contempt.",
      load: () => import('./chapter-03.js'),
    },
    {
      id: 'ch4',
      number: 4,
      title: { ar: 'فِرْعَوْنُ مِصْرَ', en: 'Pharaoh of Egypt' },
      pages: [115, 116, 117],
      blurb: "A new, tyrannical Pharaoh rises who sees Banū Isrāʾīl as a lesser class born to serve, treats them like beasts of burden, and claims divinity for himself -- and they refuse to worship him.",
      load: () => import('./chapter-04.js'),
    },
    {
      id: 'ch5',
      number: 5,
      title: { ar: 'ذَبْحُ الْأَطْفَالِ', en: 'The Slaughter of the Children' },
      pages: [117, 118, 119],
      blurb: "A priest's warning that a coming child will end his rule sends Pharaoh into a rage: he orders every newborn boy of Banū Isrāʾīl killed, while Nadwi notes bitterly that even wolves and scorpions were left in peace.",
      load: () => import('./chapter-05.js'),
    },
    {
      id: 'ch6',
      number: 6,
      title: { ar: 'وِلَادَةُ مُوسَى', en: 'The Birth of Mūsā' },
      pages: [119],
      blurb: "Allah decrees that the very child Pharaoh fears will end his rule, deliver Banū Isrāʾīl, and turn people from worshiping men to worshiping Allah alone -- and Mūsā is born under the shadow of the massacre.",
      load: () => import('./chapter-06.js'),
    },
    {
      id: 'ch7',
      number: 7,
      title: { ar: 'فِي النِّيلِ', en: 'In the Nile' },
      pages: [120, 121],
      blurb: "Unable to hide her nursing newborn any longer, Mūsā's mother is inspired to set him adrift on the Nile in a chest, trusting Allah's promise to return him to her.",
      load: () => import('./chapter-07.js'),
    },
    {
      id: 'ch8',
      number: 8,
      title: { ar: 'فِي قَصْرِ فِرْعَوْنَ', en: "In Pharaoh's Palace" },
      pages: [121, 122, 123],
      blurb: "Pharaoh's household finds the chest on the Nile; the queen falls in love with the child and intercedes for his life over a servant's objection, and Mūsā grows up in the very palace of the man decreed to lose his throne because of him.",
      load: () => import('./chapter-08.js'),
    },
    {
      id: 'ch9',
      number: 9,
      title: { ar: 'مَنْ يُرْضِعُ الطِّفْلَ؟', en: 'Who Will Nurse the Child?' },
      pages: [123, 124, 125],
      blurb: 'The beautiful new foundling charms the whole palace, but one wet-nurse after another fails: Allah has forbidden him every one of them, and no one knows why.',
      load: () => import('./chapter-09.js'),
    },
    {
      id: 'ch10',
      number: 10,
      title: { ar: 'فِي حِجْرِ أُمِّهِ', en: "In His Mother's Care" },
      pages: [125, 126, 127],
      blurb: "Mūsā's own sister tracks him to the palace and recommends \"a woman in town\" -- his real mother -- who he nurses from instantly, disarming Pharaoh's suspicion and fulfilling Allah's promise to return him to her.",
      load: () => import('./chapter-10.js'),
    },
    {
      id: 'ch11',
      number: 11,
      title: { ar: 'إِلَى قَصْرِ فِرْعَوْنَ', en: "To Pharaoh's Palace" },
      pages: [127, 128],
      blurb: "Weaned, Mūsā is returned to the palace and raised as a prince among princes -- and grows up, unlike his people, with no fear of kings or the wealthy.",
      load: () => import('./chapter-11.js'),
    },
    {
      id: 'ch12',
      number: 12,
      title: { ar: 'الضَّرْبَةُ الْقَاضِيَةُ', en: 'The Fatal Blow' },
      pages: [128, 129, 130],
      blurb: "Grown to manhood, Mūsā finds an Egyptian beating an Israelite and strikes the Egyptian a single blow that kills him -- a death he never intended, done for a stranger of his own people.",
      load: () => import('./chapter-12.js'),
    },
    {
      id: 'ch13',
      number: 13,
      title: { ar: 'يَظْهَرُ السِّرُّ', en: 'The Secret Is Revealed' },
      pages: [130, 131, 132, 133],
      blurb: "A second day's brawl and a frightened Israelite's slip of the tongue give away who killed the Egyptian; word reaches Pharaoh, and a warning sends Mūsā fleeing the city, fearful and watched.",
      load: () => import('./chapter-13.js'),
    },
    {
      id: 'ch14',
      number: 14,
      title: { ar: 'مِنْ مِصْرَ إِلَى مَدْيَنَ', en: 'From Egypt to Madyan' },
      pages: [133, 134],
      blurb: "With all of Egypt Pharaoh's kingdom, Allah inspires Mūsā toward Madyan -- a free desert land beyond Pharaoh's reach -- and Nadwi pauses on a reflection contrasting free poverty with enslaved comfort before Mūsā sets out, praying, alone.",
      load: () => import('./chapter-14.js'),
    },
    {
      id: 'ch15',
      number: 15,
      title: { ar: 'فِي مَدْيَنَ', en: 'In Madyan' },
      pages: [134, 135, 136],
      blurb: "Mūsā arrives at Madyan knowing no one, waters two strangers' flock out of pure compassion when they cannot reach the well themselves, then withdraws to the shade with nowhere to sleep and nothing but Allah to ask.",
      load: () => import('./chapter-15.js'),
    },
    {
      id: 'ch16',
      number: 16,
      title: { ar: 'الطَّلَبُ', en: 'The Request' },
      pages: [136, 137, 138],
      blurb: "The two women's father, impressed that his daughters came home early and unafraid, sends for the stranger and offers Mūsā work and shelter in exchange for tending his flock.",
      load: () => import('./chapter-16.js'),
    },
    {
      id: 'ch17',
      number: 17,
      title: { ar: 'الزَّوَاجُ', en: 'The Marriage' },
      pages: [138, 139, 140],
      blurb: "Madyan's old man offers Mūsā one of his daughters in marriage in exchange for eight or ten years of shepherding, and Mūsā agrees, settling into a decade of quiet, honest work far from Pharaoh.",
      load: () => import('./chapter-17.js'),
    },
    {
      id: 'ch18',
      number: 18,
      title: { ar: 'إِلَى مِصْرَ', en: 'To Egypt' },
      pages: [140, 141, 142],
      blurb: 'Years later, travelling back toward Egypt with his family, Mūsā spots a fire on the mountainside and is commissioned there as a prophet, given the staff and the white-hand miracle, and commanded to Pharaoh.',
      load: () => import('./chapter-18.js'),
    },
    {
      id: 'ch19',
      number: 19,
      title: { ar: 'اذْهَبْ إِلَى فِرْعَوْنَ إِنَّهُ طَغَى', en: '"Go to Pharaoh, He Has Transgressed"' },
      pages: [142, 143, 144],
      blurb: "Allah lays out Pharaoh's corruption in a fourfold refrain and orders Mūsā to confront him despite his fear of the killing and his stammer, sending Hārūn with him and commanding both to speak to Pharaoh gently.",
      load: () => import('./chapter-19.js'),
    },
    {
      id: 'ch20',
      number: 20,
      title: { ar: 'أَمَامَ فِرْعَوْنَ', en: 'Before Pharaoh' },
      pages: [144, 145, 146],
      blurb: "Mūsā and Hārūn stand in Pharaoh's own assembly calling him to Allah; Pharaoh sneers at the boy he once raised, and Mūsā answers with calm frankness, turning the upbringing favor back into an indictment of the massacre and enslavement behind it.",
      load: () => import('./chapter-20.js'),
    },
    {
      id: 'ch21',
      number: 21,
      title: { ar: 'الدَّعْوَةُ إِلَى اللَّهِ', en: 'The Call to Allah' },
      pages: [146, 147, 148],
      blurb: '"What is the Lord of the worlds?" Pharaoh demands -- Mūsā answers in three widening strokes (the worlds, your own fathers\' Lord, east and west), and Pharaoh escalates from calling him mad to threatening prison.',
      load: () => import('./chapter-21.js'),
    },
    {
      id: 'ch22',
      number: 22,
      title: { ar: 'مُعْجِزَاتُ مُوسَى', en: 'The Miracles of Mūsā' },
      pages: [148, 149, 150],
      blurb: "Mūsā offers proof: the staff becomes a serpent and the hand turns white without harm. Pharaoh calls it the work of a skilled sorcerer and challenges him to a contest of magicians, setting the appointed day.",
      load: () => import('./chapter-22.js'),
    },
    {
      id: 'ch23',
      number: 23,
      title: { ar: 'إِلَى الْمَيْدَانِ', en: 'To the Arena' },
      pages: [150, 151, 152],
      blurb: "All of Egypt streams to the arena -- sorcerers from every city arrive in vain, colorful pageantry, striking their bargain with Pharaoh for reward and rank, while Banū Isrāʾīl look on caught between despair and hope.",
      load: () => import('./chapter-23.js'),
    },
    {
      id: 'ch24',
      number: 24,
      title: { ar: 'بَيْنَ الْحَقِّ وَالْبَاطِلِ', en: 'Between Truth and Falsehood' },
      pages: [152, 153, 154, 155],
      blurb: "Mūsā's staff swallows every illusion the sorcerers cast; the very masters of the art are the first to recognize it is not sorcery at all, and fall down prostrating, believing in the Lord of Mūsā and Hārūn on the spot.",
      load: () => import('./chapter-24.js'),
    },
    {
      id: 'ch25',
      number: 25,
      title: { ar: 'وَعِيدُ فِرْعَوْنَ', en: "Pharaoh's Threat" },
      pages: [155, 156, 157],
      blurb: "Humiliated in front of all Egypt, Pharaoh accuses the newly-believing sorcerers of conspiracy and threatens to mutilate and crucify them all -- and they answer his threat with a defiant declaration of faith.",
      load: () => import('./chapter-25.js'),
    },
    {
      id: 'ch26',
      number: 26,
      title: { ar: 'سَفَاهَةُ فِرْعَوْنَ', en: "Pharaoh's Foolishness" },
      pages: [157, 158, 159],
      blurb: "Sleepless with rage, Pharaoh renews his genocidal order, declares himself the only god his people need, and has Hāmān build a tower to \"look upon\" Mūsā's God -- and when even that fails, resolves at last to simply kill him.",
      load: () => import('./chapter-26.js'),
    },
  ],
};

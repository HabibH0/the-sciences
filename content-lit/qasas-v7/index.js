// قَصَصُ النَّبِيِّينَ, volume seven -- Mūsā vs. Pharaoh through the Exodus.
// The book shell the Library screen reads.
//
// Chapter numbering restarts at 1 in every Qaṣaṣ volume (see
// QASAS_AGENT_BRIEF.md §1), so each volume gets its own book id/shell
// rather than sharing one -- ch1 here is a different chapter from any
// other volume's ch1. Volume 7 begins printed page 160 and runs to page
// 212 (QASAS_VOLUME_MAP.md), picking up the story of Mūsā mid-stream: he
// has already fled to Madyan and returned to confront Pharaoh by the time
// this volume opens (that earlier stretch is volume 6, mapped but not yet
// transcribed as of this writing).
//
// No printed volume title exists on the page for this volume (same
// situation as volume 6 -- a basmala graphic only, no centered heading,
// and the book's own topical index doesn't bold-header it either). The
// Arabic/English titles below are supplied for organizational purposes,
// matching how QASAS_VOLUME_MAP.md already labels this volume
// descriptively ("Mūsā, part 2 (vs. Pharaoh to Exodus)"). صِرَاعُ مُوسَى
// وَفِرْعَوْنَ ("The Struggle of Mūsā and Pharaoh") was chosen as a natural
// Arabic phrase capturing the volume's throughline -- confrontation,
// exodus, wilderness, law, and Mūsā's death -- since no single chapter
// title serves as well as vol. 3's «سَفِينَةُ نُوحٍ» did for that volume.
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
//
// KNOWN OPEN ITEM (flagged for review, not silently resolved): chapter 19
// («التَّأْوِيلُ», page 210 only) has only 3 buildable sentences against the
// documented 5-minimum (CHAPTER-FORMAT.md's build-stage requirement). This
// is a genuine property of the source -- the whole page is al-Khiḍr's own
// speech, almost entirely direct Qur'an quotation (Kahf 18:79-82) with only
// one short narrator sentence, and every candidate sentence is either a
// long ayah safely outside the 3-9 token buildable window (by design) or a
// narrator fragment whose only non-proper tokens are verbs (which carry no
// case) or too short/long to qualify. Fixing this would require either
// fragmenting a Qur'anic ayah at a point with no printed punctuation
// (against this project's explicit house instruction and without
// precedent elsewhere in the corpus) or fabricating content not in the
// source (unacceptable). See chapter-19.js's own header for the full
// token-by-token accounting. This mirrors QASAS_AGENT_BRIEF.md §9's own
// class of "decisions needed from Habib" -- surfaced here rather than
// worked around.
export const BOOK = {
  id: 'qasas-v7',
  title: { ar: 'صِرَاعُ مُوسَى وَفِرْعَوْنَ', en: 'The Struggle of Mūsā and Pharaoh' },
  volumeLabel: 'Volume Seven',
  author: { ar: 'أَبُو الْحَسَنِ عَلِيٌّ النَّدْوِيُّ', en: 'Abū al-Ḥasan ʿAlī an-Nadwī' },
  blurb: "Mūsā's confrontation with Pharaoh, told in short vowelled pages of graded classical prose -- a secret believer's plea, plagues and the parting sea, the Israelites' ingratitude in the wilderness, the Law and the Golden Calf, Mūsā's encounter with al-Khiḍr, and his death.",
  chapters: [
    {
      id: 'ch1',
      number: 1,
      title: { ar: 'مُؤْمِنُ آلِ فِرْعَوْنَ', en: "The Believer of Pharaoh's Household" },
      pages: [160, 161, 162, 163],
      blurb: "A secret believer from Pharaoh's own household pleads for Mūsā's life, warning his people of the Day of Judgment and reminding them how they mourned Yūsuf once he was gone.",
      load: () => import('./chapter-01.js'),
    },
    {
      id: 'ch2',
      number: 2,
      title: { ar: 'نَصِيحَةُ الرَّجُلِ', en: "The Man's Advice" },
      pages: [163, 164, 165],
      blurb: 'The believing man presses his counsel further -- this life is a fleeting dream, and no idol his people worship has ever sent a prophet or a book -- until Allah protects him from their plot.',
      load: () => import('./chapter-02.js'),
    },
    {
      id: 'ch3',
      number: 3,
      title: { ar: 'زَوْجُ فِرْعَوْنَ', en: "Pharaoh's Wife" },
      pages: [166, 167, 168, 169],
      blurb: "Pharaoh believes he rules every mind as much as every body -- yet faith enters his own house without his knowledge: his wife Āsiya comes to believe in Allah in secret, safe even from the husband closest to her.",
      load: () => import('./chapter-03.js'),
    },
    {
      id: 'ch4',
      number: 4,
      title: { ar: 'مِحْنَةُ بَنِي إِسْرَائِيلَ', en: 'The Ordeal of the Children of Israel' },
      pages: [169, 170],
      blurb: "The Children of Israel suffer fresh persecution every day and grow weary of it, but Mūsā tells them to seek help through patience -- the outcome belongs to the God-conscious -- as Pharaoh forbids them even to worship Allah.",
      load: () => import('./chapter-04.js'),
    },
    {
      id: 'ch5',
      number: 5,
      title: { ar: 'الْمَجَاعَاتُ', en: 'The Famines' },
      pages: [171, 172, 173, 174],
      blurb: 'Pharaoh, too stubborn to take a hint, is finally sent a sign he cannot ignore: the Nile itself dries up, bringing famine after famine to a people who believed their river made them independent of Allah.',
      load: () => import('./chapter-05.js'),
    },
    {
      id: 'ch6',
      number: 6,
      title: { ar: 'خَمْسُ آيَاتٍ', en: 'Five Signs' },
      pages: [174, 175, 176],
      blurb: 'Four more signs follow the famine in quick succession -- flood, locusts, lice, and frogs -- each one overwhelming Pharaoh\'s soldiers and police, yet every time the plague lifts, his people break their promise to believe.',
      load: () => import('./chapter-06.js'),
    },
    {
      id: 'ch7',
      number: 7,
      title: { ar: 'الْخُرُوجُ', en: 'The Exodus' },
      pages: [177, 178, 179, 180],
      blurb: "Allah commands Mūsā to lead the Children of Israel out of Egypt by night. A wrong turn brings them to the edge of the Red Sea with Pharaoh's army closing in behind -- until Mūsā strikes the sea with his staff and it splits into twelve dry paths.",
      load: () => import('./chapter-07.js'),
    },
    {
      id: 'ch8',
      number: 8,
      title: { ar: 'غَرَقُ فِرْعَوْنَ', en: 'The Drowning of Pharaoh' },
      pages: [180, 181, 182, 183],
      blurb: 'Pharaoh follows the Children of Israel into the parted sea, only for the waters to close over him and his army the moment Mūsā is safely across -- his last-minute claim of faith coming, famously, too late to save him.',
      load: () => import('./chapter-08.js'),
    },
    {
      id: 'ch9',
      number: 9,
      title: { ar: 'فِي الْبَرِّيَّةِ', en: 'In the Wilderness' },
      pages: [183, 184, 185],
      blurb: "Safe at last, the Children of Israel find the wilderness harsher than they expected -- Allah shades them with clouds, splits a rock into twelve springs when they thirst, and sends them manna and quails, Allah's own hospitality in the desert.",
      load: () => import('./chapter-09.js'),
    },
    {
      id: 'ch10',
      number: 10,
      title: { ar: 'كُفْرانُ بَنِي إِسْرَائِيلَ', en: 'The Ingratitude of the Children of Israel' },
      pages: [185, 186],
      blurb: 'Long slavery has spoiled the Children of Israel\'s taste for anything good -- tired of manna and quails, they demand Mūsā trade it for the humbler vegetables of ordinary farmland, astonishing him with their ingratitude.',
      load: () => import('./chapter-10.js'),
    },
    {
      id: 'ch11',
      number: 11,
      title: { ar: 'عِنَادُ بَنِي إِسْرَائِيلَ', en: 'The Obstinacy of the Children of Israel' },
      pages: [187, 188],
      blurb: 'Like obstinate children who do the opposite of whatever they are told, the Children of Israel invert Allah\'s own command when entering the holy town, and a murder among them sets up their most notorious act of stalling: the story of the Cow.',
      load: () => import('./chapter-11.js'),
    },
    {
      id: 'ch12',
      number: 12,
      title: { ar: 'الْبَقَرَةُ', en: 'The Cow' },
      pages: [188, 189, 190, 191],
      blurb: "Told simply to slaughter a cow to identify a murderer, the Children of Israel bury the command in question after question -- about its age, its color, its markings -- until the one cow that fits is almost impossible to find, and vastly overpriced.",
      load: () => import('./chapter-12.js'),
    },
    {
      id: 'ch13',
      number: 13,
      title: { ar: 'الشَّرِيعَةُ', en: 'The Law' },
      pages: [191, 192, 193, 194],
      blurb: 'Free at last to live like human beings rather than beasts, the Children of Israel need a divine law to govern them -- for without a prophet\'s light, the narrator argues, belief, knowledge, morals, and government all collapse into darkness.',
      load: () => import('./chapter-13.js'),
    },
    {
      id: 'ch14',
      number: 14,
      title: { ar: 'التَّوْرَاةُ', en: 'The Torah' },
      pages: [194, 195, 196, 197],
      blurb: "Mūsā fasts and climbs Mount Sinai to receive Allah's book, so eager to see his Lord that he asks directly -- and is answered when the mountain itself is leveled by a single manifestation of divine glory, and Mūsā falls unconscious.",
      load: () => import('./chapter-14.js'),
    },
    {
      id: 'ch15',
      number: 15,
      title: { ar: 'الْعِجْلُ', en: 'The Calf' },
      pages: [197, 198, 199],
      blurb: "Old habits from Egypt resurface the moment Mūsā is gone: the Children of Israel ask him for an idol before they've even crossed the sea, and in his absence at Sinai, a man called al-Sāmirī casts them a golden calf that lows like a real animal.",
      load: () => import('./chapter-15.js'),
    },
    {
      id: 'ch16',
      number: 16,
      title: { ar: 'الْعِقَابُ', en: 'The Punishment' },
      pages: [199, 200, 201],
      blurb: 'Mūsā returns in fury, confronts Hārūn and al-Sāmirī in turn, burns the calf and scatters its ashes into the sea, and orders the guiltless among his people to punish those who worshiped it -- and Allah accepts their repentance.',
      load: () => import('./chapter-16.js'),
    },
    {
      id: 'ch17',
      number: 17,
      title: { ar: 'جُبْنُ بَنِي إِسْرَائِيلَ', en: 'The Cowardice of the Children of Israel' },
      pages: [202, 203, 204],
      blurb: 'Generations of slavery have bred cowardice into the Children of Israel: told to enter the Holy Land, they refuse outright, daring Mūsā and his Lord to go and fight without them.',
      load: () => import('./chapter-17.js'),
    },
    {
      id: 'ch18',
      number: 18,
      title: { ar: 'فِي سَبِيلِ الْعِلْمِ', en: 'In Pursuit of Knowledge' },
      pages: [205, 206, 207, 208, 209],
      blurb: "Corrected by Allah for not attributing all knowledge to Him, Mūsā seeks out a servant more knowledgeable than himself -- al-Khiḍr -- and travels with him on condition of patience, only to watch him scuttle a ship, kill a boy, and mend a wall for free, each act more baffling than the last.",
      load: () => import('./chapter-18.js'),
    },
    {
      id: 'ch19',
      number: 19,
      title: { ar: 'التَّأْوِيلُ', en: 'The Interpretation' },
      pages: [210],
      blurb: "Al-Khiḍr finally explains himself: the ship was damaged to save it from a tyrant king, the boy's death spared believing parents a corrupted son, and the wall was mended to protect two orphans' hidden treasure -- none of it his own idea.",
      load: () => import('./chapter-19.js'),
    },
    {
      id: 'ch20',
      number: 20,
      title: { ar: 'بَنُو إِسْرَائِيلَ بَعْدَ مُوسى', en: 'The Children of Israel After Mūsā' },
      pages: [211, 212],
      blurb: 'Mūsā dies with his people still wandering in punishment for their own deeds, and the narrator closes the volume with a rhetorical reckoning of everything Allah did for them and everything they did to the gentlest man among them in return.',
      load: () => import('./chapter-20.js'),
    },
  ],
};

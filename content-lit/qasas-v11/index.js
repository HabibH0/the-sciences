// قَصَصُ النَّبِيِّينَ, volume eleven -- «قِصَّةُ سَيِّدِنَا زَكَرِيَّا» (Zakariyyā).
// The book shell the Library screen reads.
//
// Chapter numbering restarts at 1 in every Qaṣaṣ volume (see
// QASAS_AGENT_BRIEF.md §1 and QASAS_VOLUME_MAP.md), so this volume gets its
// own book id/shell rather than sharing one with qasas-v1/-v2/-v3 -- ch1 here
// is a different chapter from any other volume's ch1. Volume 11 begins
// printed page 243 (the volume-title page, opening straight into chapter 1
// with no separate blank divider), immediately after volume 10's (Ayyūb &
// Yūnus) closing rosette divider on page 242, and closes page 249 with its
// own rosette divider -- volume 12 (ʿĪsā ibn Maryam) begins fresh on p.250.
// See QASAS_VOLUME_MAP.md's "Volume 11" section for the full chapter table,
// independently verified against the book's own topical index (pp.281-288).
//
// Register shift from volumes 1-3: this volume's prose is markedly more
// literary/classical than the simple graded narrative of vols 1-3 (dense
// periodic sentences, several genuine Qur'anic quotations per chapter with
// full iʿrāb). See each chapter-NN.js's own header comment for how Qur'anic
// quotations are handled (they are fragmented into ≤2-token sentence units
// so the build-stage drill can never pull real Qur'anic wording as a
// construction exercise -- see QASAS_AGENT_BRIEF.md §6/§9, still an
// unresolved house workaround rather than a proper schema fix).
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
  id: 'qasas-v11',
  title: { ar: 'قِصَّةُ سَيِّدِنَا زَكَرِيَّا', en: 'The Story of Zakariyyā' },
  volumeLabel: 'Volume Eleven',
  author: { ar: 'أَبُو الْحَسَنِ عَلِيٌّ النَّدْوِيُّ', en: 'Abū al-Ḥasan ʿAlī an-Nadwī' },
  blurb: "The story of Zakariyyā ﷺ, told in denser, more literary classical prose than earlier volumes, with several Qur'anic quotations in full -- an aging prophet's prayer for a righteous heir, the parallel story of Maryam's mother and her vow, and the birth and character of Yaḥyā, given wisdom and the Book while still a child.",
  chapters: [
    {
      id: 'ch1',
      number: 1,
      title: { ar: 'دُعَاءُ زَكَرِيَّا لِوَلَدٍ صَالِحٍ', en: "Zakariyyā's Prayer for a Righteous Child" },
      pages: [243, 244],
      blurb: "An aging Zakariyyā, his strength failing and his wife long past childbearing, prays for a righteous heir who would carry on the family of Yaʿqūb and the call to Allah -- and Allah answers, showing him signs of His power over life, death, and provision.",
      load: () => import('./chapter-01.js'),
    },
    {
      id: 'ch2',
      number: 2,
      title: { ar: 'نَذْرُ امْرَأَةِ عِمْرَانَ', en: "The Vow of ʿImrān's Wife" },
      pages: [244],
      blurb: "A woman of Zakariyyā's own family vows that if she bears a son, she will dedicate him to Allah's service -- and asks that he grow up to be a caller to Allah and a leader of guidance.",
      load: () => import('./chapter-02.js'),
    },
    {
      id: 'ch3',
      number: 3,
      title: { ar: 'قَالَتْ رَبِّ إِنِّي وَضَعْتُهَا أُنْثَى', en: '"She Said: My Lord, I Have Delivered a Female"' },
      pages: [244, 245],
      blurb: "The child is a girl, not the son she expected -- yet this girl proves stronger in devotion than many young men, for Allah has decreed her for a different, still greater role: mother of a prophet, quoted in the Qur'an's own words.",
      load: () => import('./chapter-03.js'),
    },
    {
      id: 'ch4',
      number: 4,
      title: { ar: 'عِنَايَةُ اللَّهِ بِالْفَتَاةِ الصَّالِحَةِ', en: "Allah's Care for the Righteous Girl" },
      pages: [245, 246, 247],
      blurb: "Zakariyyā takes the girl -- Maryam -- into his care, and Allah honors her with fruit out of season, out of place: proof, in the Qur'an's own words, that Allah provides for whom He wills without reckoning.",
      load: () => import('./chapter-04.js'),
    },
    {
      id: 'ch5',
      number: 5,
      title: { ar: 'إِلْهَاماً مِنَ الرَّبِّ الرَّحِيمِ', en: 'An Inspiration from the Merciful Lord' },
      pages: [246, 247],
      blurb: "Zakariyyā reasons that the God who fed Maryam out of season can just as easily grant an old, barren couple a child -- and moved by hope, he pours out the prayer the Qur'an itself records.",
      load: () => import('./chapter-05.js'),
    },
    {
      id: 'ch6',
      number: 6,
      title: { ar: 'بِشَارَةُ وَلَدٍ', en: 'Glad Tidings of a Child' },
      pages: [247],
      blurb: "Allah answers the prayer, and -- impatient like all humankind -- Zakariyyā asks for a sign, which the Qur'an quotes directly: three days of silence but for gesture, from the same God who can strip speech from the eloquent and grant it to the mute.",
      load: () => import('./chapter-06.js'),
    },
    {
      id: 'ch7',
      number: 7,
      title: { ar: 'آيَاتُ اللَّهِ وَقُدْرَتُهُ', en: 'The Signs and Power of Allah' },
      pages: [248],
      blurb: "Yaḥyā is born, and the Qur'an itself narrates the story twice over -- briefly and in fuller detail -- ending on why this family's prayer was answered: they hastened to good deeds and called on Allah in hope and fear.",
      load: () => import('./chapter-07.js'),
    },
    {
      id: 'ch8',
      number: 8,
      title: { ar: 'يَحْيَى يَضْطَلِعُ بِأَعْبَاءِ الدَّعْوَةِ', en: 'Yaḥyā Shoulders the Burdens of the Call' },
      pages: [248, 249],
      blurb: "Yaḥyā grows into his role as heir to his father's call -- devoted to knowledge as a boy, adorned with piety as a young man, singled out among his peers for love and dutifulness -- and the Qur'an closes with Allah's own address to him, commanding him to hold fast to the Book.",
      load: () => import('./chapter-08.js'),
    },
  ],
};

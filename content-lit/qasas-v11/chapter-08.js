// قَصَصُ النَّبِيِّينَ, volume 11 «زَكَرِيَّا», chapter 8 -- يَحْيَى يَضْطَلِعُ
// بِأَعْبَاءِ الدَّعْوَةِ. Printed pages 248 (bottom) - 249. This is the LAST
// chapter of the volume: the page ends with the triple-rosette divider after
// this chapter, and volume 12 (عِيسَى ابْنُ مَرْيَمَ) begins fresh on page 250.
// Transcribed by hand from the text supplied in the task brief (hand-
// transcribed from the 300dpi scan; the Qur'an portion, Maryam 19:12-15, was
// cross-checked by the brief's author against the canonical Uthmani text) --
// no scan re-reading needed on my end -- against ../CHAPTER-FORMAT.md.
//
// One prose paragraph tracing Yaḥyā's growth from infancy -- the delight of
// Zakariyyā's old age, heir to his call, marked by excellence, learning,
// piety, and devotion to his parents from earliest childhood -- followed by
// Allah's own address to him, quoting Maryam 19:12-15 in full. This closes
// out the volume's arc: Zakariyyā's prayer in ch1 is answered by the son
// born in ch2/ch6, and here that son fully comes into his prophetic role.
//
// QUR'AN-FRAGMENTATION CONVENTION (house rule, followed identically by every
// chapter agent on this project): the reader's "build a sentence" drill pulls
// any 3-9 token sentence with a visible case ending as a drill source, with
// no filter distinguishing invented prose from real Qur'anic wording --
// undesirable to drill on Qur'anic text that casually. Workaround: the
// Qur'an quotation (Maryam 19:12-15) is split into fragments of AT MOST 2
// TOKENS each at natural pause points, guaranteeing non-buildability. The
// full flowing translation of all four āyāt is folded into the paragraph's
// own `en` field as connected prose; individual fragment `en` fields are the
// clause-sized gloss pieces. No pause marks (ۖ) or circled verse numbers are
// included in `ar`/`tokens`.
//   -- One deliberate adjustment to the brief's own suggested fragment list:
//      «يَـٰيَحْيَىٰ خُذِ» would be 3 tokens once يَـٰيَحْيَىٰ itself is split
//      into its two morphemes (per the brief's own instruction: vocative يَا
//      + proper يَحْيَىٰ, two separate tokens) -- three tokens breaks the
//      absolute 2-token cap. Split instead into two fragments: «يَـٰ يَحْيَىٰ»
//      (2 tokens) and «خُذِ» (1 token) on its own. The vocative's surface is
//      kept as the Uthmani ligature's own piece «يَـٰ» (ya + dagger alif);
//      lemma normalized to plain «يَا». Consequently a space appears in `ar`
//      at a point with no space in the Mushaf glyph (يَـٰيَحْيَىٰ is written
//      as one continuous shape) -- necessary so tokens[].surface joined by
//      spaces reproduces `ar` exactly, per the format's own self-check rule.
//      This yields 22 fragments total (not the brief's original 20).
//
// Grammar / lexical notes:
//   -- يَوْمَ (×3, qs-v11-c08-{028,029,030}) is tagged acc.constr each time:
//      ظرف زمان مضاف إلى جملة (a time adverbial construct to the clause that
//      follows it), the standard analysis for يَوْمَ + verb.
//   -- وُلِدَ / يُبْعَثُ are the passive of وَلَدَ (already taught, ch1/ch2/ch5
//      of this volume) and of بَعَثَ. Passive-perfect keeps the corpus's
//      established 'pass+perf.3ms' ordering (qs-v3-c01-005's قِيلَ);
//      passive-imperfect keeps the corpus's dominant 'impf.pass.3ms' ordering
//      (e.g. qs-v1-c05's يُقَالُ, qs-v2-c12's فَيُصْلَبُ) rather than the one
//      outlier 'pass+impf.2mp' (qs-v2-c19-301).
//   -- مُخَاطِباً (qs-v11-c08-009) is the اسم فاعل of the already-taught verb
//      خَاطَبَ (qasas-v3 ch9), tagged under that same lemma per the format's
//      "every form of a word must share one spelling" rule, pos 'noun' (a
//      derived nominal), functioning as حال (circumstantial accusative).
//   -- Shared-lexicon / cross-chapter coordination check, this volume
//      (qasas-v11 ch1-7 were already written by the time this file was
//      authored, so checked directly rather than assumed):
//        * اِضْطَلَعَ and عِبْء are ALREADY claimed new by ch3 (its title-
//          adjacent vocabulary) -- reused here with ch3's exact lemma
//          spelling (اِضْطَلَعَ, with hamzat waṣl) and glosses, NOT re-listed.
//        * وَلَدَ (verb), تَقْوَى، صَلَاح، حَنَان، بِرّ (noun) and بَرّ (adj,
//          "dutiful, devoted [to parents]" -- exactly the form وَبَرًّۢا
//          needs) are all already claimed new by ch1; تَقِيّ and كِتَاب are
//          ALSO already claimed new by ch1 (not obvious from the task brief,
//          which flagged them only for "verification" -- confirmed by
//          reading ch1 directly). None re-listed here.
//        * لَدُنْ is already claimed new by ch5 (qs-v11-c05, its own Qur'an
//          quotation's لَّدُنكَ) -- not re-listed; gloss reused.
//        * دَعْوَة is already taught (qasas-v1/2/3 generally, and ch1/ch7 of
//          this volume specifically).
//   -- Full-corpus shared-lexicon check (grepped content-lit/qasas-v1..v10):
//      اللَّه، فِي، عَلَى، عَنْ، إِلَى، مِنْ، لِ، ذَلِكَ، هُوَ، كَانَ، لَمْ، يَوْم، أَخَذَ
//      (imperative خُذِ), مَاتَ (يَمُوتُ), خَالِص، دِين، خَاطَبَ، قَالَ، غُلَام،
//      شَابّ، عِلْم، حُبّ، صِغَر، ظَهَرَ، عَيْن، سَلَام، حَيّ، آتَى، حُكْم،
//      قُوَّة, عَظِيم (independently confirmed via qasas-v1-v3 directly, not
//      just the wider corpus) are all already taught and are NOT re-listed
//      in newWords here.
//   -- REVIEW-PASS CORRECTIONS: أَثَر, خَلِيفَة, and بَعَثَ were originally
//      excluded here citing qasas-v4/-v5/-v9 -- volumes this project
//      cannot verify or pin the state of, being authored by other,
//      concurrent sessions. Only qasas-v1/-v2/-v3 are a reliable
//      "already known" baseline, and none of these three appear there, so
//      all three are put back as new vocabulary, introduced at their
//      first use in this volume (qs-v11-c08-004, -002, -030
//      respectively). تَعَالَى's token tag (qs-v11-c08-009) is changed from
//      pos:'verb'/features:'perf.3ms' to pos:'adv'/features:'adv',
//      matching the convention qasas-v11/chapter-01.js sets for this
//      recurring epithet (not re-added to newWords -- ch1 already teaches
//      it).
//
// 17 new words (قُرَّة، نَجَابَة، أَقْبَلَ، شَغَف، تَحَلَّى، امْتَازَ، قَرِين، بَنَان،
// أَشَارَ، مُنْذُ، صَبِيّ، زَكَاة، جَبَّار، عَصِيّ، أَثَر، خَلِيفَة، بَعَثَ).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch8',
  title: { ar: 'يَحْيَى يَضْطَلِعُ بِأَعْبَاءِ الدَّعْوَةِ', en: 'Yaḥyā Shoulders the Burdens of the Call' },
  newWords: [
    'قُرَّة', 'نَجَابَة', 'أَقْبَلَ', 'شَغَف', 'تَحَلَّى', 'امْتَازَ', 'قَرِين', 'بَنَان',
    'أَشَارَ', 'مُنْذُ', 'صَبِيّ', 'زَكَاة', 'جَبَّار', 'عَصِيّ', 'أَثَر', 'خَلِيفَة', 'بَعَثَ',
  ],
  lemmas: {
    'قُرَّة': { gloss: 'comfort, delight (of the eye)' },
    'نَجَابَة': { gloss: 'nobility of character, excellence' },
    'أَقْبَلَ': { gloss: 'to turn toward, apply oneself to' },
    'شَغَف': { gloss: 'eager passion, ardor' },
    'تَحَلَّى': { gloss: 'to adorn oneself (with a virtue)' },
    'امْتَازَ': { gloss: 'to be distinguished, stand out' },
    'قَرِين': { gloss: 'a peer, companion (pl. أَقْرَان)' },
    'بَنَان': { gloss: 'fingertips' },
    'أَشَارَ': { gloss: 'to point, indicate' },
    'مُنْذُ': { gloss: 'since' },
    'صَبِيّ': { gloss: 'a child, boy' },
    'زَكَاة': { gloss: 'purity (moral, not the later technical alms-tax sense)' },
    'جَبَّار': { gloss: 'a tyrant, overbearing person' },
    'عَصِيّ': { gloss: 'disobedient, rebellious' },
    'أَثَر': { gloss: 'a trace, mark' },
    'خَلِيفَة': { gloss: 'successor, heir' },
    'بَعَثَ': { gloss: 'to raise up, resurrect' },
  },
  paragraphs: [
    {
      en: "Yaḥyā is born, becoming the delight of his parents' eyes and successor to his great father, shouldering the burdens of the call to Allah and to the pure religion. The marks of excellence appear in him from childhood: he applies himself to knowledge with eagerness while still a boy, adorns himself with righteousness and piety while a youth, and stands out among his peers in love, tenderness, and devotion to his parents -- he is pointed to with the fingertips for it. Allah, exalted is He, says, addressing him: \"O Yaḥyā, hold fast to the Book with strength.\" And We gave him wisdom while yet a child, and tenderness from Our own presence, and purity; and he was righteous, and devoted to his parents, and was not a tyrant or disobedient. And peace be upon him the day he was born, and the day he dies, and the day he is raised alive.",
      sentences: [
        {
          id: 'qs-v11-c08-001',
          ar: 'وَيُولَدُ يَحْيَى فَيَكُونُ قُرَّةَ عَيْنٍ لِأَبَوَيْهِ،',
          en: "Yaḥyā is born, becoming the delight of his parents' eyes,",
          tokens: [
            { surface: 'وَيُولَدُ', lemma: 'وَلَدَ', pos: 'verb', features: 'conj+impf.pass.3ms', root: 'و ل د', gloss: 'to give birth; and is born' },
            { surface: 'يَحْيَى', lemma: 'يَحْيَى', pos: 'proper', gloss: 'Yaḥyā' },
            { surface: 'فَيَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ك و ن', gloss: 'to be; and becomes' },
            { surface: 'قُرَّةَ', lemma: 'قُرَّة', pos: 'noun', features: 'acc.constr', root: 'ق ر ر', gloss: 'the delight of' },
            { surface: 'عَيْنٍ', lemma: 'عَيْن', pos: 'noun', features: 'indef.gen', root: 'ع ي ن', gloss: 'an eye' },
            { surface: 'لِأَبَوَيْهِ', lemma: 'أَب', pos: 'noun', features: 'prep+du.gen+3ms', root: 'أ ب و', gloss: 'to his two parents' },
          ],
        },
        {
          id: 'qs-v11-c08-002',
          ar: 'وَخَلِيفَةً لِوَالِدِهِ الْعَظِيمِ،',
          en: 'and successor to his great father,',
          tokens: [
            { surface: 'وَخَلِيفَةً', lemma: 'خَلِيفَة', pos: 'noun', features: 'conj+indef.acc', gloss: 'and a successor' },
            { surface: 'لِوَالِدِهِ', lemma: 'وَالِد', pos: 'noun', features: 'prep+gen+3ms', root: 'و ل د', gloss: 'to his father' },
            { surface: 'الْعَظِيمِ', lemma: 'عَظِيم', pos: 'adj', features: 'def.gen', gloss: 'the great' },
          ],
        },
        {
          id: 'qs-v11-c08-003',
          ar: 'فَيَضْطَلِعُ بِأَعْبَاءِ الدَّعْوَةِ إِلَى اللَّهِ وَالدِّينِ الْخَالِصِ،',
          en: 'shouldering the burdens of the call to Allah and the pure religion,',
          tokens: [
            { surface: 'فَيَضْطَلِعُ', lemma: 'اِضْطَلَعَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ض ل ع', gloss: 'to shoulder, undertake; and shoulders' },
            { surface: 'بِأَعْبَاءِ', lemma: 'عِبْء', pos: 'noun', features: 'prep+pl.constr.gen', root: 'ع ب أ', gloss: 'the burdens of' },
            { surface: 'الدَّعْوَةِ', lemma: 'دَعْوَة', pos: 'noun', features: 'def.gen', root: 'د ع و', gloss: 'the call' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَالدِّينِ', lemma: 'دِين', pos: 'noun', features: 'conj+def.gen', root: 'د ي ن', gloss: 'and the religion' },
            { surface: 'الْخَالِصِ', lemma: 'خَالِص', pos: 'adj', features: 'def.gen', root: 'خ ل ص', gloss: 'the pure, sincere' },
          ],
        },
        {
          id: 'qs-v11-c08-004',
          ar: 'وَتَظْهَرُ فِيهِ آثَارُ النَّجَابَةِ مُنْذُ الصِّغَرِ،',
          en: 'the marks of excellence appear in him from childhood,',
          tokens: [
            { surface: 'وَتَظْهَرُ', lemma: 'ظَهَرَ', pos: 'verb', features: 'conj+impf.3fs', root: 'ظ ه ر', gloss: 'to appear; and appear' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'in him' },
            { surface: 'آثَارُ', lemma: 'أَثَر', pos: 'noun', features: 'pl.constr.nom', gloss: 'the marks, traces of' },
            { surface: 'النَّجَابَةِ', lemma: 'نَجَابَة', pos: 'noun', features: 'def.gen', gloss: 'excellence, nobility of character' },
            { surface: 'مُنْذُ', lemma: 'مُنْذُ', pos: 'prep', features: 'prep', gloss: 'since' },
            { surface: 'الصِّغَرِ', lemma: 'صِغَر', pos: 'noun', features: 'def.gen', root: 'ص غ ر', gloss: 'childhood, youth' },
          ],
        },
        {
          id: 'qs-v11-c08-005',
          ar: 'فَيُقْبِلُ عَلَى الْعِلْمِ بِشَغَفٍ وَهُوَ غُلَامٌ،',
          en: 'he applies himself to knowledge with eagerness while a boy,',
          tokens: [
            { surface: 'فَيُقْبِلُ', lemma: 'أَقْبَلَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ق ب ل', gloss: 'to turn toward, apply oneself to; and applies himself' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to, toward' },
            { surface: 'الْعِلْمِ', lemma: 'عِلْم', pos: 'noun', features: 'def.gen', gloss: 'knowledge' },
            { surface: 'بِشَغَفٍ', lemma: 'شَغَف', pos: 'noun', features: 'prep+indef.gen', gloss: 'with eagerness, ardor' },
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and he [is]' },
            { surface: 'غُلَامٌ', lemma: 'غُلَام', pos: 'noun', features: 'indef.nom', root: 'غ ل م', gloss: 'a boy' },
          ],
        },
        {
          id: 'qs-v11-c08-006',
          ar: 'وَيَتَحَلَّى بِالصَّلَاحِ وَالتَّقْوَى وَهُوَ شَابٌّ،',
          en: 'and adorns himself with righteousness and piety while a youth,',
          tokens: [
            { surface: 'وَيَتَحَلَّى', lemma: 'تَحَلَّى', pos: 'verb', features: 'conj+impf.3ms', root: 'ح ل ي', gloss: 'to adorn oneself (with a virtue); and adorns himself' },
            { surface: 'بِالصَّلَاحِ', lemma: 'صَلَاح', pos: 'noun', features: 'prep+def.gen', root: 'ص ل ح', gloss: 'with righteousness' },
            { surface: 'وَالتَّقْوَى', lemma: 'تَقْوَى', pos: 'noun', features: 'conj+def.gen', root: 'و ق ي', gloss: 'and piety' },
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and he [is]' },
            { surface: 'شَابٌّ', lemma: 'شَابّ', pos: 'noun', features: 'indef.nom', root: 'ش ب ب', gloss: 'a young man' },
          ],
        },
        {
          id: 'qs-v11-c08-007',
          ar: 'وَيَمْتَازُ عَنْ أَقْرَانِهِ فِي الْحُبِّ وَالْحَنَانِ وَالْبِرِّ بِالْأَبَوَيْنِ،',
          en: 'and stands out among his peers in love, tenderness, and devotion to his parents,',
          tokens: [
            { surface: 'وَيَمْتَازُ', lemma: 'امْتَازَ', pos: 'verb', features: 'conj+impf.3ms', root: 'م ي ز', gloss: 'to be distinguished, stand out; and stands out' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from, among' },
            { surface: 'أَقْرَانِهِ', lemma: 'قَرِين', pos: 'noun', features: 'pl.gen+3ms', root: 'ق ر ن', gloss: 'his peers' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْحُبِّ', lemma: 'حُبّ', pos: 'noun', features: 'def.gen', root: 'ح ب ب', gloss: 'the love' },
            { surface: 'وَالْحَنَانِ', lemma: 'حَنَان', pos: 'noun', features: 'conj+def.gen', root: 'ح ن ن', gloss: 'and the tenderness' },
            { surface: 'وَالْبِرِّ', lemma: 'بِرّ', pos: 'noun', features: 'conj+def.gen', root: 'ب ر ر', gloss: 'and the devotion, dutifulness' },
            { surface: 'بِالْأَبَوَيْنِ', lemma: 'أَب', pos: 'noun', features: 'prep+du.gen', root: 'أ ب و', gloss: 'to the two parents' },
          ],
        },
        {
          id: 'qs-v11-c08-008',
          ar: 'يُشَارُ فِي ذَلِكَ إِلَيْهِ بِالْبَنَانِ،',
          en: 'he is pointed to with the fingertips for it,',
          tokens: [
            { surface: 'يُشَارُ', lemma: 'أَشَارَ', pos: 'verb', features: 'impf.pass.3ms', root: 'ش و ر', gloss: 'to point, indicate; he is pointed to' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, for' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'بِالْبَنَانِ', lemma: 'بَنَان', pos: 'noun', features: 'prep+def.gen', gloss: 'with the fingertips' },
          ],
        },
        {
          id: 'qs-v11-c08-009',
          ar: 'يَقُولُ اللَّهُ تَعَالَى مُخَاطِباً لَهُ:',
          en: 'Allah, exalted is He, says, addressing him:',
          tokens: [
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', root: 'ق و ل', gloss: 'to say; says' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'adv', features: 'adv', gloss: 'Exalted is He, Most High' },
            { surface: 'مُخَاطِباً', lemma: 'خَاطَبَ', pos: 'noun', features: 'indef.acc', root: 'خ ط ب', gloss: 'addressing, one who addresses' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
          ],
        },
        {
          id: 'qs-v11-c08-010',
          ar: 'يَـٰ يَحْيَىٰ',
          en: 'O Yaḥyā,',
          tokens: [
            { surface: 'يَـٰ', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'يَحْيَىٰ', lemma: 'يَحْيَى', pos: 'proper', gloss: 'Yaḥyā' },
          ],
        },
        {
          id: 'qs-v11-c08-011',
          ar: 'خُذِ',
          en: 'take',
          tokens: [
            { surface: 'خُذِ', lemma: 'أَخَذَ', pos: 'verb', features: 'imp.2ms', root: 'أ خ ذ', gloss: 'to take; take' },
          ],
        },
        {
          id: 'qs-v11-c08-012',
          ar: 'ٱلْكِتَـٰبَ',
          en: 'the Book',
          tokens: [
            { surface: 'ٱلْكِتَـٰبَ', lemma: 'كِتَاب', pos: 'noun', features: 'def.acc', root: 'ك ت ب', gloss: 'the Book' },
          ],
        },
        {
          id: 'qs-v11-c08-013',
          ar: 'بِقُوَّةٍ',
          en: 'with strength,',
          tokens: [
            { surface: 'بِقُوَّةٍ', lemma: 'قُوَّة', pos: 'noun', features: 'prep+indef.gen', gloss: 'with strength' },
          ],
        },
        {
          id: 'qs-v11-c08-014',
          ar: 'وَءَاتَيْنَـٰهُ',
          en: 'and We gave him',
          tokens: [
            { surface: 'وَءَاتَيْنَـٰهُ', lemma: 'آتَى', pos: 'verb', features: 'conj+perf.1p+3ms', root: 'أ ت ي', gloss: 'to give; and We gave him' },
          ],
        },
        {
          id: 'qs-v11-c08-015',
          ar: 'ٱلْحُكْمَ',
          en: 'wisdom',
          tokens: [
            { surface: 'ٱلْحُكْمَ', lemma: 'حُكْم', pos: 'noun', features: 'def.acc', gloss: 'wisdom, sound judgment' },
          ],
        },
        {
          id: 'qs-v11-c08-016',
          ar: 'صَبِيًّا',
          en: 'while [still] a child,',
          tokens: [
            { surface: 'صَبِيًّا', lemma: 'صَبِيّ', pos: 'noun', features: 'indef.acc', root: 'ص ب و', gloss: 'a child, boy' },
          ],
        },
        {
          id: 'qs-v11-c08-017',
          ar: 'وَحَنَانًا مِّن',
          en: 'and tenderness from',
          tokens: [
            { surface: 'وَحَنَانًا', lemma: 'حَنَان', pos: 'noun', features: 'conj+indef.acc', root: 'ح ن ن', gloss: 'tenderness, compassion' },
            { surface: 'مِّن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
          ],
        },
        {
          id: 'qs-v11-c08-018',
          ar: 'لَّدُنَّا',
          en: 'Us,',
          tokens: [
            { surface: 'لَّدُنَّا', lemma: 'لَدُنْ', pos: 'noun', features: 'gen+1p', gloss: 'Our presence, Us' },
          ],
        },
        {
          id: 'qs-v11-c08-019',
          ar: 'وَزَكَوٰةً',
          en: 'and purity,',
          tokens: [
            { surface: 'وَزَكَوٰةً', lemma: 'زَكَاة', pos: 'noun', features: 'conj+indef.acc', root: 'ز ك و', gloss: 'purity' },
          ],
        },
        {
          id: 'qs-v11-c08-020',
          ar: 'وَكَانَ',
          en: 'and he was',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
          ],
        },
        {
          id: 'qs-v11-c08-021',
          ar: 'تَقِيًّا',
          en: 'righteous,',
          tokens: [
            { surface: 'تَقِيًّا', lemma: 'تَقِيّ', pos: 'adj', features: 'indef.acc', root: 'و ق ي', gloss: 'God-fearing, pious' },
          ],
        },
        {
          id: 'qs-v11-c08-022',
          ar: 'وَبَرًّۢا',
          en: 'devoted',
          tokens: [
            { surface: 'وَبَرًّۢا', lemma: 'بَرّ', pos: 'adj', features: 'conj+indef.acc', root: 'ب ر ر', gloss: 'dutiful, devoted (to his parents)' },
          ],
        },
        {
          id: 'qs-v11-c08-023',
          ar: 'بِوَٰلِدَيْهِ',
          en: 'to his parents,',
          tokens: [
            { surface: 'بِوَٰلِدَيْهِ', lemma: 'وَالِد', pos: 'noun', features: 'prep+du.gen+3ms', root: 'و ل د', gloss: 'to his two parents' },
          ],
        },
        {
          id: 'qs-v11-c08-024',
          ar: 'وَلَمْ يَكُن',
          en: 'and he was not',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَكُن', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; he was' },
          ],
        },
        {
          id: 'qs-v11-c08-025',
          ar: 'جَبَّارًا',
          en: 'tyrannical',
          tokens: [
            { surface: 'جَبَّارًا', lemma: 'جَبَّار', pos: 'adj', features: 'indef.acc', root: 'ج ب ر', gloss: 'tyrannical, overbearing' },
          ],
        },
        {
          id: 'qs-v11-c08-026',
          ar: 'عَصِيًّا',
          en: '[nor] disobedient.',
          tokens: [
            { surface: 'عَصِيًّا', lemma: 'عَصِيّ', pos: 'adj', features: 'indef.acc', root: 'ع ص ي', gloss: 'disobedient, rebellious' },
          ],
        },
        {
          id: 'qs-v11-c08-027',
          ar: 'وَسَلَـٰمٌ عَلَيْهِ',
          en: 'And peace be upon him',
          tokens: [
            { surface: 'وَسَلَـٰمٌ', lemma: 'سَلَام', pos: 'noun', features: 'conj+indef.nom', root: 'س ل م', gloss: 'peace' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'upon him' },
          ],
        },
        {
          id: 'qs-v11-c08-028',
          ar: 'يَوْمَ وُلِدَ',
          en: 'the day he was born,',
          tokens: [
            { surface: 'يَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'acc.constr', gloss: 'the day (of)' },
            { surface: 'وُلِدَ', lemma: 'وَلَدَ', pos: 'verb', features: 'pass+perf.3ms', root: 'و ل د', gloss: 'to give birth; he was born' },
          ],
        },
        {
          id: 'qs-v11-c08-029',
          ar: 'وَيَوْمَ يَمُوتُ',
          en: 'the day he dies,',
          tokens: [
            { surface: 'وَيَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the day (of)' },
            { surface: 'يَمُوتُ', lemma: 'مَاتَ', pos: 'verb', features: 'impf.3ms', root: 'م و ت', gloss: 'to die; he dies' },
          ],
        },
        {
          id: 'qs-v11-c08-030',
          ar: 'وَيَوْمَ يُبْعَثُ',
          en: 'and the day he is raised',
          tokens: [
            { surface: 'وَيَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the day (of)' },
            { surface: 'يُبْعَثُ', lemma: 'بَعَثَ', pos: 'verb', features: 'impf.pass.3ms', root: 'ب ع ث', gloss: 'to raise up, resurrect; he is raised' },
          ],
        },
        {
          id: 'qs-v11-c08-031',
          ar: 'حَيًّا',
          en: 'alive.',
          tokens: [
            { surface: 'حَيًّا', lemma: 'حَيّ', pos: 'adj', features: 'indef.acc', root: 'ح ي ي', gloss: 'alive, living' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا اِمْتَازَ يَحْيَى عَنْ أَقْرَانِهِ؟',
          options: ['بِالْحُبِّ وَالْحَنَانِ وَالْبِرِّ بِأَبَوَيْهِ', 'بِالْمَالِ وَالْجَاهِ', 'بِالْقُوَّةِ الْبَدَنِيَّةِ'],
          answer: 0,
          qEn: 'What did Yaḥyā stand out from his peers in?',
          optionsEn: ['Love, tenderness, and devotion to his parents', 'Wealth and status', 'Physical strength'],
        },
        {
          q: 'بِمَاذَا أَمَرَ اللَّهُ يَحْيَى فِي الْآيَاتِ؟',
          options: ['أَنْ يَأْخُذَ الْكِتَابَ بِقُوَّةٍ', 'أَنْ يَتْرُكَ قَوْمَهُ', 'أَنْ يُسَافِرَ بَعِيداً'],
          answer: 0,
          qEn: 'What did Allah command Yaḥyā to do in the verses?',
          optionsEn: ['To hold fast to the Book with strength', 'To leave his people', 'To travel far away'],
        },
        {
          q: 'اسْتِجَابَةً لِدُعَاءِ مَنْ وُلِدَ يَحْيَى؟',
          options: ['اسْتِجَابَةً لِدُعَاءِ زَكَرِيَّا رَبَّهُ أَنْ يَرْزُقَهُ وَلَداً', 'صُدْفَةً بِلَا دُعَاءٍ', 'اسْتِجَابَةً لِدُعَاءِ قَوْمِهِ'],
          answer: 0,
          qEn: 'Whose prayer was Yaḥyā the answer to?',
          optionsEn: ["Zakariyyā's prayer to his Lord to grant him a child", 'Pure chance, with no prayer at all', "His people's prayer"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَخَلِيفَةً لِوَالِدِهِ الْعَظِيمِ،',
        post: 'بِأَعْبَاءِ الدَّعْوَةِ إِلَى اللَّهِ وَالدِّينِ الْخَالِصِ،',
        en: 'and successor to his great father, shouldering the burdens of the call to Allah and the pure religion,',
        options: ['فَيَضْطَلِعُ', 'فَاضْطَلَعَ', 'فَتَضْطَلِعُ', 'فَنَضْطَلِعُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular imperfect -- he shoulders, matching the narrative chain of present-tense stages.',
          'Perfect tense -- he shouldered; wrong tense for this ongoing narrative chain.',
          '2nd masculine / 3rd feminine singular -- you or she shoulder; wrong person.',
          '1st person plural -- we shoulder; wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَيُقْبِلُ عَلَى الْعِلْمِ بِشَغَفٍ وَهُوَ غُلَامٌ،',
        post: 'بِالصَّلَاحِ وَالتَّقْوَى وَهُوَ شَابٌّ،',
        en: 'he applies himself to knowledge with eagerness while a boy, and adorns himself with righteousness and piety while a youth,',
        options: ['وَيَتَحَلَّى', 'وَتَحَلَّى', 'وَيَتَحَلَّوْنَ', 'وَأَتَحَلَّى'],
        answer: 0,
        rationales: [
          '3rd masculine singular imperfect -- and he adorns himself, continuing the chain of present-tense stages.',
          'Perfect tense -- and he adorned himself; wrong tense here.',
          '3rd masculine plural -- and they adorn themselves; wrong number.',
          '1st singular -- and I adorn myself; wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَيَتَحَلَّى بِالصَّلَاحِ وَالتَّقْوَى وَهُوَ شَابٌّ،',
        post: 'عَنْ أَقْرَانِهِ فِي الْحُبِّ وَالْحَنَانِ وَالْبِرِّ بِالْأَبَوَيْنِ،',
        en: 'and adorns himself with righteousness and piety while a youth, and stands out among his peers in love, tenderness, and devotion to his parents,',
        options: ['وَيَمْتَازُ', 'وَامْتَازَ', 'وَتَمْتَازُ', 'وَيَمْتَازُونَ'],
        answer: 0,
        rationales: [
          '3rd masculine singular imperfect -- and he stands out, the final stage in the chain.',
          'Perfect tense -- and he stood out; wrong tense.',
          '2nd masculine / 3rd feminine singular -- wrong person.',
          '3rd masculine plural -- wrong number.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَمْتَازُ عَنْ أَقْرَانِهِ فِي الْحُبِّ',
        pre: '',
        post: 'عَنْ أَقْرَانِهِ فِي الْحُبِّ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَمْتَازُ', 'يَمْتَازُ', 'تَمْتَازُ', 'نَمْتَازُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَمْتَازُ عَنْ أَقْرَانِهِ فِي الْحُبِّ',
        pre: '',
        post: 'عَنْ أَقْرَانِهِ فِي الْحُبِّ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَمْتَازُ', 'يَمْتَازُ', 'أَمْتَازُ', 'تَمْتَازُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '2nd masculine singular -- you (m.).',
        ],
      },
    ],
  },
};

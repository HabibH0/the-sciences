// قَصَصُ النَّبِيِّينَ, volume 6 (Mūsā, part 1), chapter 20 -- أَمَامَ
// فِرْعَوْنَ. Printed pages 144 (heading, partway down, right after ch19's
// closing Qur'an citation 20:44) - 145 - 146 (top only), ending right
// before ch21's heading «الدَّعْوَةُ إِلَى اللَّهِ» which opens partway down
// page 146 (already transcribed, see qasas-v6/chapter-21.js -- its own
// header notes this chapter continues directly out of ch20). Transcribed
// by hand from the scan (vision OCR, 200dpi render) against
// ../CHAPTER-FORMAT.md. Covers Sūrat ash-Shuʿarāʾ 26:18-22: Pharaoh's
// upbringing taunt and Mūsā's calm, then defiant, reply.
//
// Grammar / lexical notes:
//   -- قَعْتُ (qs-v6-c20-008) is Mūsā speaking of himself falling into
//      Pharaoh's hand ("لِمَاذَا وَقَعْتُ بِيَدِكَ") -- 1st person, not 2nd;
//      read carefully against the scan, since وَقَعْتَ/وَقَعْتُ differ only
//      by the final vowel's ḥaraka and the sense (Mūsā's own fate, not an
//      accusation about Pharaoh) confirms the 1st-person reading.
//   -- زَجْرَ الْكِلابِ / مُعَامَلَةَ الْحَمِيرِ وَالدَّوَابِّ (qs-v6-c20-011/012)
//      echo the exact idiom Nadwi already used narrating Pharaoh's
//      treatment of Banū Isrāʾīl in qasas-v6/ch4 -- Mūsā is quoting
//      Pharaoh's own crime back at him, not a new description.
//   -- Shared lexicon check (cross-checked against known_lemmas.json,
//      volumes 1-3 + this volume's chapters so far): جَاءَ, مُوسَى, هَارُون
//      (qasas-v6/ch19), إِلَى, فِرْعَوْن, قَامَ, فِي, مَجْلِس, دَعَا, اللَّه, غَضِبَ,
//      جَبَّار, مِنْ, قَالَ, كِبْر, مَنْ, كَانَ, أَيّ, شَابّ, حَتَّى, وَعَظَ, أَلَيْسَ,
//      ذَلِكَ, غُلَام, الَّذِي, اِلْتَقَطَ, بَحْر, أَلَمْ, رَبَّى, سَنَة, لَا, غَضِبَ,
//      كَافِر, بَلْ, أَجَابَ, وَقَار, إِذاً, فَرَّ, خَافَ, وَ, رَبّ, حُكْم, جَعَلَ,
//      إِنَّ, يَا, مَنَّ, عَلَى, نَظَرَ, لِمَاذَا, وَقَعَ, يَد, كَيْفَ, أَمْكَنَ, رَبَّى,
//      لَوْ, لَمْ, أَمَرَ, بِ, قَتَلَ, طِفْل, أَلْقَى, أُمّ, النِّيل, مَا, هَلْ, هَذِهِ,
//      عَدَّ, ذَكَرَ, ظُلْم, عَامَلَ (qasas-v6/ch4), قَوْم, كُلّ, حِمَار, دَابَّة,
//      سَامَ, سُوء, عَذَاب, فَضْل, طِفْل, عَنْ, أَيْضاً, بَنِي إِسْرَائِيلَ
//      are all already taught and are NOT re-listed in newWords here.
//
// 22 new words (عُلُوّ، جَرَاءَة، وَلِيد، لَبِثَ، عُمُر، فَعْلَة، كَذَبَ، جَحَدَ،
// اِعْتَذَرَ، صَرَاحَة، ضَالّ، وَهَبَ، مُرْسَل، تَرْبِيَة، نِعْمَة، جَنْب، قَسَاوَة،
// زَجَرَ، كَفَلَ، جَهْل، خَطَأ، عَبَّدَ -- a dense confrontation chapter, mostly
// direct speech). No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch20',
  title: { ar: 'أَمَامَ فِرْعَوْنَ', en: 'Before Pharaoh' },
  newWords: ['عُلُوّ', 'جَرَاءَة', 'وَلِيد', 'لَبِثَ', 'عُمُر', 'فَعْلَة', 'كَذَبَ', 'جَحَدَ', 'اِعْتَذَرَ', 'صَرَاحَة', 'ضَالّ', 'وَهَبَ', 'مُرْسَل', 'تَرْبِيَة', 'نِعْمَة', 'جَنْب', 'قَسَاوَة', 'زَجَرَ', 'كَفَلَ', 'جَهْل', 'خَطَأ', 'عَبَّدَ', 'نِيل'],
  lemmas: {
    نِيل: { gloss: 'the Nile' },
    عُلُوّ: { gloss: 'arrogance, haughtiness' },
    جَرَاءَة: { gloss: 'boldness, audacity' },
    وَلِيد: { gloss: 'newborn, infant' },
    لَبِثَ: { gloss: 'to remain, stay' },
    عُمُر: { gloss: 'lifetime, age' },
    فَعْلَة: { gloss: 'a deed, an act' },
    كَذَبَ: { gloss: 'to lie' },
    جَحَدَ: { gloss: 'to deny, disavow' },
    اِعْتَذَرَ: { gloss: 'to apologize, make excuse' },
    صَرَاحَة: { gloss: 'frankness, candor' },
    ضَالّ: { gloss: 'astray, misguided' },
    وَهَبَ: { gloss: 'to grant, bestow' },
    مُرْسَل: { gloss: 'one who is sent, a messenger' },
    تَرْبِيَة: { gloss: 'upbringing, rearing' },
    نِعْمَة: { gloss: 'favor, blessing' },
    جَنْب: { gloss: 'side (فِي جَنْبِ: alongside, compared to)' },
    قَسَاوَة: { gloss: 'cruelty, harshness' },
    زَجَرَ: { gloss: 'to drive off, rebuke' },
    كَفَلَ: { gloss: 'to sponsor, take charge of' },
    جَهْل: { gloss: 'ignorance' },
    خَطَأ: { gloss: 'error, mistake' },
    عَبَّدَ: { gloss: 'to enslave' },
  },
  paragraphs: [
    {
      en: "Mūsā and Hārūn came to Pharaoh and stood in his assembly, calling him to Allah. The tyrant grew angry at Mūsā's boldness and said, in arrogance and pride: \"Who are you, young man, that you should stand in my assembly and lecture me? Aren't you that boy we picked up from the sea?!\"",
      sentences: [
        {
          id: 'qs-v6-c20-001',
          ar: 'وَجَاءَ مُوسَى وَهَارُونُ إِلَى فِرْعَوْنَ وَقَامَا فِي مَجْلِسِهِ يَدْعُوَانِهِ إِلَى اللَّهِ.',
          en: "Mūsā and Hārūn came to Pharaoh and stood in his assembly, calling him to Allah.",
          tokens: [
            { surface: 'وَجَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to come; came' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'وَهَارُونُ', lemma: 'هَارُون', pos: 'proper', features: 'conj+nom', gloss: 'and Hārūn' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'وَقَامَا', lemma: 'قَامَ', pos: 'verb', features: 'conj+perf.3md', gloss: 'to stand; and stood' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مَجْلِسِهِ', lemma: 'مَجْلِس', pos: 'noun', features: 'gen+3ms', gloss: 'his assembly' },
            { surface: 'يَدْعُوَانِهِ', lemma: 'دَعَا', pos: 'verb', features: 'impf.3md+3ms', gloss: 'to call; calling him' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v6-c20-002',
          ar: 'وَغَضِبَ الْجَبَّارُ مِنْ جَرَاءَةِ مُوسَى وَقَالَ فِي عُلُوٍّ وَكِبْرٍ:',
          en: "The tyrant grew angry at Mūsā's boldness and said, in arrogance and pride:",
          tokens: [
            { surface: 'وَغَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to grow angry; and grew angry' },
            { surface: 'الْجَبَّارُ', lemma: 'جَبَّار', pos: 'noun', features: 'def.nom', gloss: 'the tyrant' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'جَرَاءَةِ', lemma: 'جَرَاءَة', pos: 'noun', features: 'constr.gen', root: 'ج ر أ', gloss: "the boldness of" },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'عُلُوٍّ', lemma: 'عُلُوّ', pos: 'noun', features: 'indef.gen', root: 'ع ل و', gloss: 'arrogance' },
            { surface: 'وَكِبْرٍ', lemma: 'كِبْر', pos: 'noun', features: 'conj+indef.gen', gloss: 'and pride' },
          ],
        },
        {
          id: 'qs-v6-c20-003',
          ar: 'مَنْ تَكُونُ أَيُّهَا الشَّابُّ حَتَّى تَقُومَ فِي مَجْلِسِي وَتَعِظُنِي؟ أَلَسْتَ ذَلِكَ الْغُلامُ الَّذِي الْتَقَطْنَاهُ مِنَ الْبَحْرِ؟!',
          en: 'Who are you, young man, that you should stand in my assembly and lecture me? Aren\'t you that boy we picked up from the sea?!',
          tokens: [
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'تَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.2ms', root: 'ك و ن', gloss: 'to be; are you' },
            { surface: 'أَيُّهَا', lemma: 'أَيُّهَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'الشَّابُّ', lemma: 'شَابّ', pos: 'noun', features: 'def.nom', gloss: 'young man' },
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'تَقُومَ', lemma: 'قَامَ', pos: 'verb', features: 'subj.2ms', gloss: 'stand' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مَجْلِسِي', lemma: 'مَجْلِس', pos: 'noun', features: 'gen+1s', gloss: 'my assembly' },
            { surface: 'وَتَعِظُنِي', lemma: 'وَعَظَ', pos: 'verb', features: 'conj+subj.2ms+1s', gloss: 'to admonish; and lecture me' },
            { surface: 'أَلَسْتَ', lemma: 'لَيْسَ', pos: 'verb', features: 'part+perf.2ms', gloss: "to not be; aren't you" },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
            { surface: 'الْغُلامُ', lemma: 'غُلَام', pos: 'noun', features: 'def.nom', gloss: 'the boy' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'whom' },
            { surface: 'الْتَقَطْنَاهُ', lemma: 'اِلْتَقَطَ', pos: 'verb', features: 'perf.1p+3ms', gloss: 'to pick up; we picked up' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ اسْتَقْبَلَ فِرْعَوْنُ مُوسَى وَهَارُونَ فِي مَجْلِسِهِ؟',
          options: ['غَضِبَ مِنْ جَرَاءَةِ مُوسَى وَتَكَبَّرَ عَلَيْهِ', 'رَحَّبَ بِهِمَا وَاسْتَمَعَ إِلَيْهِمَا', 'طَرَدَهُمَا فَوْراً دُونَ كَلَامٍ'],
          answer: 0,
          qEn: "How did Pharaoh receive Mūsā and Hārūn in his assembly?",
          optionsEn: ["He grew angry at Mūsā's boldness and was arrogant toward him", 'He welcomed them and listened to them', 'He expelled them at once without a word'],
        },
      ],
    },
    {
      en: '"Did we not raise you among us as a child, and you remained among us for years of your life, and you did the deed you did, while you were an ingrate?"',
      sentences: [
        {
          id: 'qs-v6-c20-004',
          ar: '﴿أَلَمْ نُرَبِّكَ فِينَا وَلِيداً وَلَبِثْتَ فِينَا مِنْ عُمُرِكَ سِنِينَ.',
          en: 'Did we not raise you among us as a child, and you remained among us for years of your life,',
          tokens: [
            { surface: 'أَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'part+neg', gloss: 'did not' },
            { surface: 'نُرَبِّكَ', lemma: 'رَبَّى', pos: 'verb', features: 'juss.1p+2ms', gloss: 'to raise; did we raise you' },
            { surface: 'فِينَا', lemma: 'فِي', pos: 'prep', features: 'prep+1p', gloss: 'among us' },
            { surface: 'وَلِيداً', lemma: 'وَلِيد', pos: 'noun', features: 'indef.acc', root: 'و ل د', gloss: 'as a child' },
            { surface: 'وَلَبِثْتَ', lemma: 'لَبِثَ', pos: 'verb', features: 'conj+perf.2ms', root: 'ل ب ث', gloss: 'to remain; and you remained' },
            { surface: 'فِينَا', lemma: 'فِي', pos: 'prep', features: 'prep+1p', gloss: 'among us' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'عُمُرِكَ', lemma: 'عُمُر', pos: 'noun', features: 'gen+2ms', root: 'ع م ر', gloss: 'your life' },
            { surface: 'سِنِينَ', lemma: 'سَنَة', pos: 'noun', features: 'indef.acc.pl', gloss: 'years' },
          ],
        },
        {
          id: 'qs-v6-c20-005',
          ar: 'وَفَعَلْتَ فَعْلَتَكَ الَّتِي فَعَلْتَ وَأَنتَ مِنَ الْكَافِرِينَ﴾.',
          en: 'and you did the deed you did, while you were an ingrate?"',
          tokens: [
            { surface: 'وَفَعَلْتَ', lemma: 'فَعَلَ', pos: 'verb', features: 'conj+perf.2ms', gloss: 'to do; and you did' },
            { surface: 'فَعْلَتَكَ', lemma: 'فَعْلَة', pos: 'noun', features: 'acc+2ms', root: 'ف ع ل', gloss: 'your deed' },
            { surface: 'الَّتِي', lemma: 'الَّتِي', pos: 'rel', features: 'rel.f', gloss: 'that' },
            { surface: 'فَعَلْتَ', lemma: 'فَعَلَ', pos: 'verb', features: 'perf.2ms', gloss: 'you did' },
            { surface: 'وَأَنتَ', lemma: 'أَنْتَ', pos: 'noun', features: 'conj+2ms', gloss: 'while you' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْكَافِرِينَ', lemma: 'كَافِر', pos: 'noun', features: 'def.gen.pl', gloss: 'the ungrateful' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا اتَّهَمَ فِرْعَوْنُ مُوسَى؟',
          options: ['بِأَنَّهُ رَبَّاهُ وَلِيداً فِي قَصْرِهِ ثُمَّ كَفَرَ بِنِعْمَتِهِ', 'بِأَنَّهُ سَرَقَ مِنْ خَزَائِنِهِ', 'بِأَنَّهُ كَذَبَ عَلَى النَّاسِ'],
          answer: 0,
          qEn: 'What did Pharaoh accuse Mūsā of?',
          optionsEn: ['That he had raised him as a child in his palace, and he repaid that favor with ingratitude', 'That he had stolen from his treasuries', 'That he had lied to the people'],
        },
      ],
    },
    {
      en: 'Mūsā did not grow angry, did not lie, did not deny it, and did not apologize -- rather he answered with frankness and dignity. "He said: I did it then, while I was astray. So I fled from you when I feared you, and my Lord granted me judgment and made me one of the messengers."',
      sentences: [
        {
          id: 'qs-v6-c20-006',
          ar: 'وَلَمْ يَغْضَبْ مُوسَى وَلَمْ يَكْذِبْ وَلَمْ يَجْحَدْ وَلَمْ يَعْتَذِرْ، بَلْ أَجَابَ فِي صَرَاحَةٍ وَوَقَارٍ.',
          en: 'Mūsā did not grow angry, did not lie, did not deny it, and did not apologize -- rather he answered with frankness and dignity.',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَغْضَبْ', lemma: 'غَضِبَ', pos: 'verb', features: 'juss.3ms', gloss: 'grow angry' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَكْذِبْ', lemma: 'كَذَبَ', pos: 'verb', features: 'juss.3ms', root: 'ك ذ ب', gloss: 'to lie; lie' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَجْحَدْ', lemma: 'جَحَدَ', pos: 'verb', features: 'juss.3ms', root: 'ج ح د', gloss: 'to deny; deny it' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَعْتَذِرْ', lemma: 'اِعْتَذَرَ', pos: 'verb', features: 'juss.3ms', root: 'ع ذ ر', gloss: 'to apologize; apologize' },
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'أَجَابَ', lemma: 'أَجَابَ', pos: 'verb', features: 'perf.3ms', gloss: 'to answer; answered' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'صَرَاحَةٍ', lemma: 'صَرَاحَة', pos: 'noun', features: 'indef.gen', root: 'ص ر ح', gloss: 'frankness' },
            { surface: 'وَوَقَارٍ', lemma: 'وَقَار', pos: 'noun', features: 'conj+indef.gen', gloss: 'and dignity' },
          ],
        },
        {
          id: 'qs-v6-c20-007',
          ar: '﴿قَالَ فَعَلْتُهَا إِذاً وَأَنَا مِنَ الضَّالِّينَ. فَفَرَرْتُ مِنكُمْ لَمَّا خِفْتُكُمْ فَوَهَبَ لِي رَبِّي حُكْماً وَجَعَلَنِي مِنَ الْمُرْسَلِينَ﴾.',
          en: 'He said: I did it then, while I was astray. So I fled from you when I feared you, and my Lord granted me judgment and made me one of the messengers.',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'فَعَلْتُهَا', lemma: 'فَعَلَ', pos: 'verb', features: 'perf.1s+3fs', gloss: 'I did it' },
            { surface: 'إِذاً', lemma: 'إِذاً', pos: 'adv', features: 'adv', gloss: 'then' },
            { surface: 'وَأَنَا', lemma: 'أَنَا', pos: 'noun', features: 'conj+1s', gloss: 'while I' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الضَّالِّينَ', lemma: 'ضَالّ', pos: 'noun', features: 'def.gen.pl', root: 'ض ل ل', gloss: 'the astray' },
            { surface: 'فَفَرَرْتُ', lemma: 'فَرَّ', pos: 'verb', features: 'conj+perf.1s', gloss: 'to flee; so I fled' },
            { surface: 'مِنكُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+2mp', gloss: 'from you' },
            { surface: 'لَمَّا', lemma: 'لَمَّا', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'خِفْتُكُمْ', lemma: 'خَافَ', pos: 'verb', features: 'perf.1s+2mp', gloss: 'I feared you' },
            { surface: 'فَوَهَبَ', lemma: 'وَهَبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'و ه ب', gloss: 'to grant; so granted' },
            { surface: 'لِي', lemma: 'لِ', pos: 'prep', features: 'prep+1s', gloss: 'to me' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', gloss: 'my Lord' },
            { surface: 'حُكْماً', lemma: 'حُكْم', pos: 'noun', features: 'indef.acc', gloss: 'judgment' },
            { surface: 'وَجَعَلَنِي', lemma: 'جَعَلَ', pos: 'verb', features: 'conj+perf.3ms+1s', gloss: 'to make; and made me' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْمُرْسَلِينَ', lemma: 'مُرْسَل', pos: 'noun', features: 'def.gen.pl', root: 'ر س ل', gloss: 'the messengers' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ رَدُّ فِعْلِ مُوسَى عَلَى اتِّهَامِ فِرْعَوْنَ؟',
          options: ['لَمْ يَغْضَبْ وَلَمْ يَكْذِبْ بَلْ أَجَابَ فِي صَرَاحَةٍ وَوَقَارٍ', 'غَضِبَ وَصَرَخَ فِي وَجْهِ فِرْعَوْنَ', 'صَمَتَ وَلَمْ يُجِبْ'],
          answer: 0,
          qEn: "How did Mūsā react to Pharaoh's accusation?",
          optionsEn: ['He did not grow angry or lie, but answered with frankness and dignity', "He grew angry and shouted in Pharaoh's face", 'He stayed silent and did not answer'],
        },
      ],
    },
    {
      en: '"Mūsā said: You, O Pharaoh, remind me of my upbringing, but you don\'t consider why I fell into your hand and how it was possible for you to raise me. If you had not ordered the killing of the children, my mother would not have thrown me into the Nile, and I would not have fallen into your hand. And is this a favor to be counted and mentioned alongside your injustice and cruelty?"',
      sentences: [
        {
          id: 'qs-v6-c20-008',
          ar: 'وَقَالَ مُوسَى: إِنَّكَ يَا فِرْعَوْنُ تَمُنُّ عَلَيَّ بِالتَّرْبِيَةِ وَلَكِنْ لا تَنْظُرُ لِمَاذَا وَقَعْتُ بِيَدِكَ وَكَيْفَ أَمْكَنَكَ أَنْ تُرَبِّيَنِي؟',
          en: "Mūsā said: You, O Pharaoh, remind me of my upbringing, but you don't consider why I fell into your hand and how it was possible for you to raise me.",
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'إِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'part+2ms', gloss: 'indeed you' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'تَمُنُّ', lemma: 'مَنَّ', pos: 'verb', features: 'impf.2ms', gloss: 'to remind of a favor; remind' },
            { surface: 'عَلَيَّ', lemma: 'عَلَى', pos: 'prep', features: 'prep+1s', gloss: 'me' },
            { surface: 'بِالتَّرْبِيَةِ', lemma: 'تَرْبِيَة', pos: 'noun', features: 'prep+def.gen', root: 'ر ب و', gloss: 'of my upbringing' },
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَنْظُرُ', lemma: 'نَظَرَ', pos: 'verb', features: 'impf.2ms', gloss: 'you consider' },
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'adv', gloss: 'why' },
            { surface: 'وَقَعْتُ', lemma: 'وَقَعَ', pos: 'verb', features: 'perf.1s', gloss: 'to fall; I fell' },
            { surface: 'بِيَدِكَ', lemma: 'يَد', pos: 'noun', features: 'prep+gen+2ms', gloss: 'into your hand' },
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'أَمْكَنَكَ', lemma: 'أَمْكَنَ', pos: 'verb', features: 'perf.3ms+2ms', gloss: 'was possible for you' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'تُرَبِّيَنِي', lemma: 'رَبَّى', pos: 'verb', features: 'subj.2ms+1s', gloss: 'you raise me' },
          ],
        },
        {
          id: 'qs-v6-c20-009',
          ar: 'إِنَّكَ لَوْ لَمْ تَأْمُرْ بِقَتْلِ الْأَطْفَالِ لَمَا أَلْقَتْنِي أُمِّي فِي النِّيلِ وَمَا وَقَعْتُ بِيَدِكَ.',
          en: 'If you had not ordered the killing of the children, my mother would not have thrown me into the Nile, and I would not have fallen into your hand.',
          tokens: [
            { surface: 'إِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'part+2ms', gloss: 'indeed you' },
            { surface: 'لَوْ', lemma: 'لَوْ', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَأْمُرْ', lemma: 'أَمَرَ', pos: 'verb', features: 'juss.2ms', gloss: 'order' },
            { surface: 'بِقَتْلِ', lemma: 'قَتَلَ', pos: 'noun', features: 'prep+constr.gen', gloss: 'the killing of' },
            { surface: 'الْأَطْفَالِ', lemma: 'طِفْل', pos: 'noun', features: 'def.gen.pl', gloss: 'the children' },
            { surface: 'لَمَا', lemma: 'مَا', pos: 'part', features: 'part+neg', gloss: 'then...not' },
            { surface: 'أَلْقَتْنِي', lemma: 'أَلْقَى', pos: 'verb', features: 'perf.3fs+1s', gloss: 'to throw; would have thrown me' },
            { surface: 'أُمِّي', lemma: 'أُمّ', pos: 'noun', features: 'nom+1s', gloss: 'my mother' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'into' },
            { surface: 'النِّيلِ', lemma: 'نِيل', pos: 'proper', features: 'def.gen', gloss: 'the Nile' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'وَقَعْتُ', lemma: 'وَقَعَ', pos: 'verb', features: 'perf.1s', gloss: 'would have fallen' },
            { surface: 'بِيَدِكَ', lemma: 'يَد', pos: 'noun', features: 'prep+gen+2ms', gloss: 'into your hand' },
          ],
        },
        {
          id: 'qs-v6-c20-010',
          ar: 'وَهَلْ هَذِهِ نِعْمَةٌ تُعَدُّ وَتُذْكَرُ فِي جَنْبِ ظُلْمِكَ وَقَسَاوَتِكَ؟',
          en: 'And is this a favor to be counted and mentioned alongside your injustice and cruelty?',
          tokens: [
            { surface: 'وَهَلْ', lemma: 'هَلْ', pos: 'part', features: 'conj+part', gloss: 'and is' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'نِعْمَةٌ', lemma: 'نِعْمَة', pos: 'noun', features: 'indef.nom', root: 'ن ع م', gloss: 'a favor' },
            { surface: 'تُعَدُّ', lemma: 'عَدَّ', pos: 'verb', features: 'pass+impf.3fs', gloss: 'to count; counted' },
            { surface: 'وَتُذْكَرُ', lemma: 'ذَكَرَ', pos: 'verb', features: 'conj+pass+impf.3fs', gloss: 'and mentioned' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'جَنْبِ', lemma: 'جَنْب', pos: 'noun', features: 'constr.gen', root: 'ج ن ب', gloss: 'the side of, alongside' },
            { surface: 'ظُلْمِكَ', lemma: 'ظُلْم', pos: 'noun', features: 'gen+2ms', gloss: 'your injustice' },
            { surface: 'وَقَسَاوَتِكَ', lemma: 'قَسَاوَة', pos: 'noun', features: 'conj+gen+2ms', root: 'ق س و', gloss: 'and your cruelty' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ سَبَبُ وُقُوعِ مُوسَى فِي يَدِ فِرْعَوْنَ حَسَبَ كَلَامِ مُوسَى نَفْسِهِ؟',
          options: ['أَمْرُ فِرْعَوْنَ بِقَتْلِ الْأَطْفَالِ الَّذِي جَعَلَ أُمَّهُ تُلْقِيهِ فِي النِّيلِ', 'رَغْبَةُ أُمِّهِ فِي أَنْ يَتَرَبَّى فِي الْقَصْرِ', 'أَمْرٌ مِنَ الْمَلِكَةِ مُبَاشَرَةً'],
          answer: 0,
          qEn: "According to Mūsā's own words, what caused him to fall into Pharaoh's hand?",
          optionsEn: ["Pharaoh's own order to kill the children, which made his mother throw him into the Nile", 'His mother\'s wish for him to be raised in the palace', "A direct order from the queen"],
        },
      ],
    },
    {
      en: '"You treated all my people the way one treats donkeys and beasts of burden. You used to drive them off the way one drives off dogs. You used to subject them to evil punishment. So what merit is it for you that you sponsored one child of theirs?! And that too was out of ignorance and error! \"And that is a favor you remind me of -- that you enslaved the Children of Israel.\""',
      sentences: [
        {
          id: 'qs-v6-c20-011',
          ar: 'إِنَّكَ عَامَلْتَ قَوْمِي كُلَّهُمْ مُعَامَلَةَ الْحَمِيرِ وَالدَّوَابِّ.',
          en: 'You treated all my people the way one treats donkeys and beasts of burden.',
          tokens: [
            { surface: 'إِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'part+2ms', gloss: 'indeed you' },
            { surface: 'عَامَلْتَ', lemma: 'عَامَلَ', pos: 'verb', features: 'perf.2ms', gloss: 'to treat; treated' },
            { surface: 'قَوْمِي', lemma: 'قَوْم', pos: 'noun', features: 'acc+1s', gloss: 'my people' },
            { surface: 'كُلَّهُمْ', lemma: 'كُلّ', pos: 'noun', features: 'acc+3mp', gloss: 'all of them' },
            { surface: 'مُعَامَلَةَ', lemma: 'عَامَلَ', pos: 'noun', features: 'acc', gloss: 'the treatment of' },
            { surface: 'الْحَمِيرِ', lemma: 'حِمَار', pos: 'noun', features: 'def.gen.pl', gloss: 'donkeys' },
            { surface: 'وَالدَّوَابِّ', lemma: 'دَابَّة', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and beasts of burden' },
          ],
        },
        {
          id: 'qs-v6-c20-012',
          ar: 'وَكُنْتَ تَزْجُرُهُمْ زَجْرَ الْكِلابِ.',
          en: 'You used to drive them off the way one drives off dogs.',
          tokens: [
            { surface: 'وَكُنْتَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.2ms', root: 'ك و ن', gloss: 'to be; and you used to' },
            { surface: 'تَزْجُرُهُمْ', lemma: 'زَجَرَ', pos: 'verb', features: 'impf.2ms+3mp', root: 'ز ج ر', gloss: 'to drive off; drive them off' },
            { surface: 'زَجْرَ', lemma: 'زَجَرَ', pos: 'noun', features: 'acc', root: 'ز ج ر', gloss: 'the driving off of' },
            { surface: 'الْكِلابِ', lemma: 'كَلْب', pos: 'noun', features: 'def.gen.pl', gloss: 'the dogs' },
          ],
        },
        {
          id: 'qs-v6-c20-013',
          ar: 'وَكُنْتَ تَسُومُهُمْ سُوءَ الْعَذَابِ.',
          en: 'You used to subject them to evil punishment.',
          tokens: [
            { surface: 'وَكُنْتَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.2ms', root: 'ك و ن', gloss: 'and you used to' },
            { surface: 'تَسُومُهُمْ', lemma: 'سَامَ', pos: 'verb', features: 'impf.2ms+3mp', gloss: 'to subject; subject them to' },
            { surface: 'سُوءَ', lemma: 'سُوء', pos: 'noun', features: 'acc.constr', gloss: 'the evil of' },
            { surface: 'الْعَذَابِ', lemma: 'عَذَاب', pos: 'noun', features: 'def.gen', gloss: 'the punishment' },
          ],
        },
        {
          id: 'qs-v6-c20-014',
          ar: 'فَأَيُّ فَضْلٍ لَكَ إِذَا كَفَلْتَ طِفْلاً مِنْهُمْ؟! وَذَلِكَ أَيْضاً عَنْ جَهْلٍ وَخَطَإٍ!',
          en: 'So what merit is it for you that you sponsored one child of theirs?! And that too was out of ignorance and error!',
          tokens: [
            { surface: 'فَأَيُّ', lemma: 'أَيّ', pos: 'noun', features: 'conj+constr', gloss: 'so what' },
            { surface: 'فَضْلٍ', lemma: 'فَضْل', pos: 'noun', features: 'indef.gen', gloss: 'merit' },
            { surface: 'لَكَ', lemma: 'لِ', pos: 'prep', features: 'prep+2ms', gloss: 'for you' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'adv', features: 'adv', gloss: 'that' },
            { surface: 'كَفَلْتَ', lemma: 'كَفَلَ', pos: 'verb', features: 'perf.2ms', root: 'ك ف ل', gloss: 'to sponsor; you sponsored' },
            { surface: 'طِفْلاً', lemma: 'طِفْل', pos: 'noun', features: 'indef.acc', gloss: 'a child' },
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'of them' },
            { surface: 'وَذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'conj+dem', gloss: 'and that' },
            { surface: 'أَيْضاً', lemma: 'أَيْضاً', pos: 'adv', features: 'adv', gloss: 'also' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'out of' },
            { surface: 'جَهْلٍ', lemma: 'جَهْل', pos: 'noun', features: 'indef.gen', root: 'ج ه ل', gloss: 'ignorance' },
            { surface: 'وَخَطَإٍ', lemma: 'خَطَأ', pos: 'noun', features: 'conj+indef.gen', root: 'خ ط أ', gloss: 'and error' },
          ],
        },
        {
          id: 'qs-v6-c20-015',
          ar: '﴿وَتِلْكَ نِعْمَةٌ تَمُنُّهَا عَلَيَّ أَنْ عَبَّدتَّ بَنِي إِسْرَائِيلَ﴾.',
          en: 'And that is a favor you remind me of -- that you enslaved the Children of Israel.',
          tokens: [
            { surface: 'وَتِلْكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'conj+dem.f', gloss: 'and that' },
            { surface: 'نِعْمَةٌ', lemma: 'نِعْمَة', pos: 'noun', features: 'indef.nom', root: 'ن ع م', gloss: 'a favor' },
            { surface: 'تَمُنُّهَا', lemma: 'مَنَّ', pos: 'verb', features: 'impf.2ms+3fs', gloss: 'you remind [me] of it' },
            { surface: 'عَلَيَّ', lemma: 'عَلَى', pos: 'prep', features: 'prep+1s', gloss: 'to me' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'عَبَّدتَّ', lemma: 'عَبَّدَ', pos: 'verb', features: 'perf.2ms', root: 'ع ب د', gloss: 'to enslave; you enslaved' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', root: 'ب ن و', gloss: 'the children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَتِ الْحُجَّةُ الْأَخِيرَةُ لِمُوسَى فِي رَدِّهِ عَلَى فِرْعَوْنَ؟',
          options: ['أَنَّ تَرْبِيَتَهُ لَهُ لَا تُقَارَنُ بِتَعْبِيدِهِ لِبَنِي إِسْرَائِيلَ كُلِّهِمْ', 'أَنَّهُ لَمْ يَطْلُبْ تِلْكَ التَّرْبِيَةَ', 'أَنَّهُ نَسِيَ كُلَّ شَيْءٍ عَنْ طُفُولَتِهِ'],
          answer: 0,
          qEn: "What was Mūsā's final argument in his reply to Pharaoh?",
          optionsEn: ["That his upbringing cannot compare to Pharaoh's enslavement of all of Banū Isrāʾīl", 'That he never asked for that upbringing', 'That he had forgotten everything about his childhood'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَلَمْ يَغْضَبْ مُوسَى وَلَمْ',
        post: 'وَلَمْ يَجْحَدْ وَلَمْ يَعْتَذِرْ.',
        en: 'Mūsā did not grow angry, did not lie, did not deny it, and did not apologize.',
        options: ['يَكْذِبْ', 'يَكْذِبُ', 'كَذَبَ', 'يَكْذِبَ'],
        answer: 0,
        rationales: [
          'Jussive -- required after لَمْ, matching the taught pattern (لَمْ + jussive = past negation).',
          'Indicative -- wrong mood; لَمْ requires the jussive.',
          'Perfect -- wrong; لَمْ negates the perfect meaning using the jussive of the imperfect, not the perfect itself.',
          'Subjunctive -- wrong mood; nothing here triggers the subjunctive.',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِنَّكَ لَوْ لَمْ تَأْمُرْ بِقَتْلِ الْأَطْفَالِ',
        post: 'أَلْقَتْنِي أُمِّي فِي النِّيلِ.',
        en: 'If you had not ordered the killing of the children, my mother would not have thrown me into the Nile.',
        options: ['لَمَا', 'فَمَا', 'وَمَا', 'إِنَّمَا'],
        answer: 0,
        rationales: [
          'لَ + مَا -- the required جواب لَوْ (response clause) marker fused with the negator, matching the taught pattern (see qasas-v3/ch1\'s identical construction).',
          'فَ + مَا -- wrong particle for a لَوْ-clause response.',
          'وَ + مَا -- wrong particle; not a coordinated negation.',
          '"only" -- wrong meaning entirely for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَعْتَذِرُ الرَّجُلُ عَنْ خَطَئِهِ',
        pre: '',
        post: 'عَنْ خَطَئِهِ',
        targetPerson: 'أَنْتِ',
        targetEn: 'you (f.)',
        options: ['تَعْتَذِرِينَ', 'يَعْتَذِرُ', 'تَعْتَذِرُ', 'أَعْتَذِرُ'],
        answer: 0,
        rationales: [
          '2nd feminine singular -- matches أَنْتِ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular / 3rd feminine singular -- wrong gender or missing the ي of the feminine form.',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'يَعْتَذِرُ الرَّجُلُ عَنْ خَطَئِهِ',
        pre: '',
        post: 'عَنْ خَطَئِهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَعْتَذِرُونَ', 'يَعْتَذِرُ', 'تَعْتَذِرُ', 'نَعْتَذِرُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular / 3rd feminine singular -- wrong number.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

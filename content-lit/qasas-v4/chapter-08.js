// قَصَصُ النَّبِيِّينَ, volume 4 «الْعَاصِفَةُ», chapter 8 -- حِكْمَةُ هُودٍ.
// Printed pages 90 (after ch7's closing نَاصِحٌ أَمِينٌ) - 91 (top, ending
// before ch9's heading إِيمَانُ هُودٍ). Transcribed by hand from a 200dpi
// render against ../CHAPTER-FORMAT.md.
//
// Hūd's tone shifts from confrontation to persuasion: he appeals to their
// old familiarity with him, denies any personal gain from his call, quotes
// the Qur'an on taking no wage, promises no loss (rather increase) from
// belief, and closes by explaining -- twice reinforced by direct Qur'anic
// quotation -- why Allah's messenger to any people is one of their own.
//
// Grammar / lexical notes:
//   -- مَا زَالَ (qs-v4-c08-001) is the already-taught negator مَا fused with
//      the already-taught kāna-sister زَالَ (qasas-v2 ch21) -- "never
//      ceased to", i.e. "kept on". Tagged as its ordinary conj+neg / perf
//      pair, no new atom needed.
//   -- Two Qur'anic quotations this chapter (11:51, 7:63) are split into
//      ≤2-token fragments per the house convention (see this volume's ch6
//      header note and QASAS_AGENT_BRIEF.md §6) -- one fragment (qs-v4-
//      c08-{008}, «إِلَّا عَلَى اللَّهِ») runs to 3 tokens but stays safe
//      because its only case-marked noun, اللَّهِ, is proper and therefore
//      excluded from the decoy pool by CHAPTER-FORMAT.md's own rule.
//   -- وَاللَّهِ (qs-v4-c08-010) is an oath ("By Allah!"), genitive, distinct
//      from the nominative وَاللَّهُ used as a plain subject elsewhere in
//      this volume -- tagged conj+gen.
//   -- أَلَا (qs-v4-c08-{004c... actually 002c}) fuses the interrogative
//      hamza onto the already-taught negator لَا, the same pattern
//      documented in qasas-v3 ch2's header note (أَلَا/أَلَمْ/أَئِنَّكَ) --
//      tagged part+neg.
//   -- أُنْقِصُ (qs-v4-c08-006) is from أَنْقَصَ (form IV, causative "to cause
//      to diminish"), a different lemma from the already-taught form I
//      نَقَصَ ('to lose, be diminished'; qasas-v1 ch2) even though the two
//      share a root -- CHAPTER-FORMAT.md lemmas are exact dictionary forms.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): هُود، نَصَحَ، قَوْم، دَعَا،
//      حِكْمَة، قَالَ، يَا، أَنَا، أَخ، صَدِيق، أَمْس، عَرَفَ، خَافَ، فَرَّ، مِنْ، إِنَّ،
//      شَيْء، سَأَلَ، مَال، عَلَى، أَجْر، إِلَّا، اللَّه، مَاذَا، آمَنَ، بِ، فَقَدَ، إِذَا،
//      بَلْ، بَارَكَ، رِزْق، زَادَ، قُوَّة، تَعَجَّبَ، رِسَالَة، كَلَّمَ، وَاحِد، خَاطَبَ،
//      كُلّ، أَحَد، فَعَلَ، كَذَا، أَرْسَلَ، رَجُل، جَاءَ، ذِكْر، رَبّ are all already
//      taught and NOT re-listed.
//
// 4 new words this chapter: رِفْق، عَجِبَ، أَنْذَرَ، أَنْقَصَ.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch8',
  title: { ar: 'حِكْمَةُ هُودٍ', en: 'The Wisdom of Hūd' },
  newWords: ['رِفْق', 'عَجِبَ', 'أَنْذَرَ', 'أَنْقَصَ'],
  lemmas: {
    'رِفْق': { gloss: 'gentleness, kindness' },
    'عَجِبَ': { gloss: 'to be amazed, wonder' },
    'أَنْذَرَ': { gloss: 'to warn' },
    'أَنْقَصَ': { gloss: 'to diminish, take away from' },
  },
  paragraphs: [
    {
      en: "Hūd kept on advising his people and calling them with wisdom and gentleness. Hūd said: 'O my people, I am your brother and friend of old! Do you not know me? O my brothers! Why do you fear me and flee from me, when I do not diminish your wealth in anything? And O my people, I do not ask you any wealth for it; my reward is not but upon Allah. O my people, what do you fear if you believe in Allah? By Allah, you will not lose anything of your wealth if you believe in Allah! Rather, Allah will bless you with provision and increase your strength. And O my people, why are you amazed at my message? Allah does not speak to people one by one! Allah does not address every single person, saying to him: Do this, do that! Indeed Allah sends to every people a man from among them who speaks to them and advises them. He has sent me to you, to speak to you and advise you: Do you wonder that there came to you a reminder from your Lord, upon a man among you, that he may warn you?'",
      sentences: [
        {
          id: 'qs-v4-c08-001',
          ar: 'وَمَا زَالَ هُودٌ يَنْصَحُ لِقَوْمِهِ وَيَدْعُوهُمْ بِحِكْمَةٍ وَرِفْقٍ.',
          en: 'Hūd kept on advising his people and calling them with wisdom and gentleness.',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'زَالَ', lemma: 'زَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to cease; ceased' },
            { surface: 'هُودٌ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
            { surface: 'يَنْصَحُ', lemma: 'نَصَحَ', pos: 'verb', features: 'impf.3ms', gloss: 'to advise; advising' },
            { surface: 'لِقَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'prep+gen+3ms', gloss: 'his people' },
            { surface: 'وَيَدْعُوهُمْ', lemma: 'دَعَا', pos: 'verb', features: 'conj+impf.3ms+3mp', gloss: 'to call; and calling them' },
            { surface: 'بِحِكْمَةٍ', lemma: 'حِكْمَة', pos: 'noun', features: 'prep+indef.gen', gloss: 'with wisdom' },
            { surface: 'وَرِفْقٍ', lemma: 'رِفْق', pos: 'noun', features: 'conj+indef.gen', gloss: 'and gentleness' },
          ],
        },
        {
          id: 'qs-v4-c08-002',
          ar: 'قَالَ هُودٌ:',
          en: 'Hūd said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'هُودٌ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
          ],
        },
        {
          id: 'qs-v4-c08-003',
          ar: 'يَا قَوْمِ أَنَا أَخُوكُمْ وَصَدِيقُكُمْ بِالأَمْسِ!',
          en: "'O my people, I am your brother and friend of old!",
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'قَوْمِ', lemma: 'قَوْم', pos: 'noun', features: '1s', gloss: 'my people' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'أَخُوكُمْ', lemma: 'أَخ', pos: 'noun', features: 'nom+2mp', gloss: 'your brother' },
            { surface: 'وَصَدِيقُكُمْ', lemma: 'صَدِيق', pos: 'noun', features: 'conj+nom+2mp', gloss: 'and your friend' },
            { surface: 'بِالأَمْسِ', lemma: 'أَمْس', pos: 'noun', features: 'prep+def.gen', gloss: 'of yesterday, of old' },
          ],
        },
        {
          id: 'qs-v4-c08-004',
          ar: 'أَلَا تَعْرِفُونَنِي؟',
          en: 'Do you not know me?',
          tokens: [
            { surface: 'أَلَا', lemma: 'لَا', pos: 'part', features: 'part+neg', gloss: 'do you not' },
            { surface: 'تَعْرِفُونَنِي', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.2mp+1s', gloss: 'to know; do you know me' },
          ],
        },
        {
          id: 'qs-v4-c08-005',
          ar: 'يَا إِخْوَانِي!',
          en: 'O my brothers!',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'إِخْوَانِي', lemma: 'أَخ', pos: 'noun', features: 'pl.nom+1s', gloss: 'my brothers' },
          ],
        },
        {
          id: 'qs-v4-c08-006',
          ar: 'لِمَاذَا تَخَافُونَنِي وَتَفِرُّونَ مِنِّي،',
          en: 'Why do you fear me and flee from me,',
          tokens: [
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'rel', features: 'rel', gloss: 'why' },
            { surface: 'تَخَافُونَنِي', lemma: 'خَافَ', pos: 'verb', features: 'impf.2mp+1s', gloss: 'to fear; do you fear me' },
            { surface: 'وَتَفِرُّونَ', lemma: 'فَرَّ', pos: 'verb', features: 'conj+impf.2mp', gloss: 'to flee; and flee' },
            { surface: 'مِنِّي', lemma: 'مِنْ', pos: 'prep', features: 'prep+1s', gloss: 'from me' },
          ],
        },
        {
          id: 'qs-v4-c08-007',
          ar: 'إِنِّي لَا أُنْقِصُ مِنْ مَالِكُمْ شَيْئاً.',
          en: 'when I do not diminish your wealth in anything?',
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أُنْقِصُ', lemma: 'أَنْقَصَ', pos: 'verb', features: 'impf.1s', gloss: 'to diminish; do not diminish' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'مَالِكُمْ', lemma: 'مَال', pos: 'noun', features: 'gen+2mp', gloss: 'your wealth' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
          ],
        },
        {
          id: 'qs-v4-c08-008',
          ar: '﴿وَيَا قَوْمِ',
          en: "'And O my people,",
          tokens: [
            { surface: 'وَيَا', lemma: 'يَا', pos: 'part', features: 'conj+part', gloss: 'and O' },
            { surface: 'قَوْمِ', lemma: 'قَوْم', pos: 'noun', features: '1s', gloss: 'my people' },
          ],
        },
        {
          id: 'qs-v4-c08-009',
          ar: 'لَا أَسْأَلُكُمْ',
          en: 'I do not ask you',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أَسْأَلُكُمْ', lemma: 'سَأَلَ', pos: 'verb', features: 'impf.1s+2mp', gloss: 'to ask; I ask you' },
          ],
        },
        {
          id: 'qs-v4-c08-010',
          ar: 'عَلَيْهِ مَالاً',
          en: 'for it any wealth;',
          tokens: [
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'for it' },
            { surface: 'مَالاً', lemma: 'مَال', pos: 'noun', features: 'indef.acc', gloss: 'wealth' },
          ],
        },
        {
          id: 'qs-v4-c08-011',
          ar: 'إِنْ أَجْرِيَ',
          en: 'my reward is not',
          tokens: [
            { surface: 'إِنْ', lemma: 'إِنْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أَجْرِيَ', lemma: 'أَجْر', pos: 'noun', features: '1s', gloss: 'my reward' },
          ],
        },
        {
          id: 'qs-v4-c08-012',
          ar: 'إِلَّا عَلَى اللَّهِ﴾.',
          en: "but upon Allah.'",
          tokens: [
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, but' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v4-c08-013',
          ar: 'يَا قَوْمِ مَاذَا تَخَافُونَ إِنْ آمَنْتُمْ بِاللَّهِ،',
          en: 'O my people, what do you fear if you believe in Allah?',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'قَوْمِ', lemma: 'قَوْم', pos: 'noun', features: '1s', gloss: 'my people' },
            { surface: 'مَاذَا', lemma: 'مَاذَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'تَخَافُونَ', lemma: 'خَافَ', pos: 'verb', features: 'impf.2mp', gloss: 'to fear; do you fear' },
            { surface: 'إِنْ', lemma: 'إِنْ', pos: 'part', features: 'part', gloss: 'if' },
            { surface: 'آمَنْتُمْ', lemma: 'آمَنَ', pos: 'verb', features: 'perf.2mp', gloss: 'to believe; you believe' },
            { surface: 'بِاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'in Allah' },
          ],
        },
        {
          id: 'qs-v4-c08-014',
          ar: 'وَاللَّهِ لَا تَفْقِدُونَ مِنْ أَمْوَالِكُمْ شَيْئاً إِذَا آمَنْتُمْ بِاللَّهِ!',
          en: 'By Allah, you will not lose anything of your wealth if you believe in Allah!',
          tokens: [
            { surface: 'وَاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'conj+gen', gloss: 'By Allah!' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَفْقِدُونَ', lemma: 'فَقَدَ', pos: 'verb', features: 'impf.2mp', gloss: 'to lose; you lose' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'أَمْوَالِكُمْ', lemma: 'مَال', pos: 'noun', features: 'pl.gen+2mp', gloss: 'your wealth' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'adv', features: 'adv', gloss: 'if, when' },
            { surface: 'آمَنْتُمْ', lemma: 'آمَنَ', pos: 'verb', features: 'perf.2mp', gloss: 'to believe; you believe' },
            { surface: 'بِاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'in Allah' },
          ],
        },
        {
          id: 'qs-v4-c08-015',
          ar: 'بَلْ يُبَارِكُ اللَّهُ لَكُمْ فِي الرِّزْقِ وَيَزِيدُ فِي قُوَّتِكُمْ.',
          en: 'Rather, Allah will bless you with provision and increase your strength.',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'يُبَارِكُ', lemma: 'بَارَكَ', pos: 'verb', features: 'impf.3ms', gloss: 'to bless; will bless' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الرِّزْقِ', lemma: 'رِزْق', pos: 'noun', features: 'def.gen', gloss: 'provision' },
            { surface: 'وَيَزِيدُ', lemma: 'زَادَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to increase; and increase' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'قُوَّتِكُمْ', lemma: 'قُوَّة', pos: 'noun', features: 'gen+2mp', gloss: 'your strength' },
          ],
        },
        {
          id: 'qs-v4-c08-016',
          ar: 'وَيَا قَوْمِ لِمَاذَا تَتَعَجَّبُونَ مِنْ رِسَالَتِي؟',
          en: 'And O my people, why are you amazed at my message?',
          tokens: [
            { surface: 'وَيَا', lemma: 'يَا', pos: 'part', features: 'conj+part', gloss: 'and O' },
            { surface: 'قَوْمِ', lemma: 'قَوْم', pos: 'noun', features: '1s', gloss: 'my people' },
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'rel', features: 'rel', gloss: 'why' },
            { surface: 'تَتَعَجَّبُونَ', lemma: 'تَعَجَّبَ', pos: 'verb', features: 'impf.2mp', gloss: 'to be amazed; are you amazed' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'رِسَالَتِي', lemma: 'رِسَالَة', pos: 'noun', features: 'gen+1s', gloss: 'my message' },
          ],
        },
        {
          id: 'qs-v4-c08-017',
          ar: 'إِنَّ اللَّهَ لَا يُكَلِّمُ وَاحِداً وَاحِداً!',
          en: 'Allah does not speak to people one by one!',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُكَلِّمُ', lemma: 'كَلَّمَ', pos: 'verb', features: 'impf.3ms', gloss: 'to speak to; speaks to' },
            { surface: 'وَاحِداً', lemma: 'وَاحِد', pos: 'noun', features: 'indef.acc', gloss: 'one' },
            { surface: 'وَاحِداً', lemma: 'وَاحِد', pos: 'noun', features: 'indef.acc', gloss: 'one (i.e. one by one)' },
          ],
        },
        {
          id: 'qs-v4-c08-018',
          ar: 'إِنَّ اللَّهَ لَا يُخَاطِبُ كُلَّ أَحَدٍ يَقُولُ لَهُ:',
          en: 'Allah does not address every single person, saying to him:',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُخَاطِبُ', lemma: 'خَاطَبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to address; addresses' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'أَحَدٍ', lemma: 'أَحَد', pos: 'noun', features: 'indef.gen', gloss: 'single person' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; saying' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
          ],
        },
        {
          id: 'qs-v4-c08-019',
          ar: 'افْعَلْ كَذَا،',
          en: 'Do this,',
          tokens: [
            { surface: 'افْعَلْ', lemma: 'فَعَلَ', pos: 'verb', features: 'imp.2ms', gloss: 'to do; do!' },
            { surface: 'كَذَا', lemma: 'كَذَا', pos: 'adv', features: 'adv', gloss: 'thus, such-and-such' },
          ],
        },
        {
          id: 'qs-v4-c08-020',
          ar: 'افْعَلْ كَذَا!',
          en: 'do that!',
          tokens: [
            { surface: 'افْعَلْ', lemma: 'فَعَلَ', pos: 'verb', features: 'imp.2ms', gloss: 'to do; do!' },
            { surface: 'كَذَا', lemma: 'كَذَا', pos: 'adv', features: 'adv', gloss: 'thus, such-and-such' },
          ],
        },
        {
          id: 'qs-v4-c08-021',
          ar: 'إِنَّ اللَّهَ يُرْسِلُ إِلَى كُلِّ قَوْمٍ رَجُلاً مِنْهُمْ',
          en: 'Indeed Allah sends to every people a man from among them',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'يُرْسِلُ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to send; sends' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'قَوْمٍ', lemma: 'قَوْم', pos: 'noun', features: 'indef.gen', gloss: 'a people' },
            { surface: 'رَجُلاً', lemma: 'رَجُل', pos: 'noun', features: 'indef.acc', gloss: 'a man' },
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'from among them' },
          ],
        },
        {
          id: 'qs-v4-c08-022',
          ar: 'يُكَلِّمُهُمْ وَيَنْصَحُ لَهُمْ.',
          en: 'who speaks to them and advises them.',
          tokens: [
            { surface: 'يُكَلِّمُهُمْ', lemma: 'كَلَّمَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to speak to; who speaks to them' },
            { surface: 'وَيَنْصَحُ', lemma: 'نَصَحَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to advise; and advises' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v4-c08-023',
          ar: 'وَقَدْ أَرْسَلَنِي إِلَيْكُمْ أُكَلِّمُكُمْ وَأَنْصَحُ لَكُمْ:',
          en: 'He has sent me to you, to speak to you and advise you:',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'أَرْسَلَنِي', lemma: 'أَرْسَلَ', pos: 'verb', features: 'perf.3ms+1s', gloss: 'to send; sent me' },
            { surface: 'إِلَيْكُمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+2mp', gloss: 'to you' },
            { surface: 'أُكَلِّمُكُمْ', lemma: 'كَلَّمَ', pos: 'verb', features: 'impf.1s+2mp', gloss: 'to speak to; I speak to you' },
            { surface: 'وَأَنْصَحُ', lemma: 'نَصَحَ', pos: 'verb', features: 'conj+impf.1s', gloss: 'to advise; and advise' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'you' },
          ],
        },
        {
          id: 'qs-v4-c08-024',
          ar: '﴿أَوَعَجِبْتُمْ',
          en: "'Do you wonder",
          tokens: [
            { surface: 'أَوَعَجِبْتُمْ', lemma: 'عَجِبَ', pos: 'verb', features: 'conj+perf.2mp', gloss: 'to be amazed; have you (also) wondered' },
          ],
        },
        {
          id: 'qs-v4-c08-025',
          ar: 'أَنْ جَاءَكُمْ',
          en: 'that there came to you',
          tokens: [
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'جَاءَكُمْ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms+2mp', gloss: 'to come; came to you' },
          ],
        },
        {
          id: 'qs-v4-c08-026',
          ar: 'ذِكْرٌ مِنْ',
          en: 'a reminder from',
          tokens: [
            { surface: 'ذِكْرٌ', lemma: 'ذِكْر', pos: 'noun', features: 'indef.nom', gloss: 'a reminder' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
          ],
        },
        {
          id: 'qs-v4-c08-027',
          ar: 'رَبِّكُمْ عَلَى',
          en: 'your Lord, upon',
          tokens: [
            { surface: 'رَبِّكُمْ', lemma: 'رَبّ', pos: 'noun', features: 'gen+2mp', gloss: 'your Lord' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
          ],
        },
        {
          id: 'qs-v4-c08-028',
          ar: 'رَجُلٍ مِنْكُمْ',
          en: 'a man among you,',
          tokens: [
            { surface: 'رَجُلٍ', lemma: 'رَجُل', pos: 'noun', features: 'indef.gen', gloss: 'a man' },
            { surface: 'مِنْكُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+2mp', gloss: 'among you' },
          ],
        },
        {
          id: 'qs-v4-c08-029',
          ar: 'لِيُنْذِرَكُمْ﴾؟',
          en: "that he may warn you?'",
          tokens: [
            { surface: 'لِيُنْذِرَكُمْ', lemma: 'أَنْذَرَ', pos: 'verb', features: 'part+impf.3ms+2mp', gloss: 'to warn; that he may warn you' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا كَانَ هُودٌ يَدْعُو قَوْمَهُ؟',
          options: ['بِحِكْمَةٍ وَرِفْقٍ', 'بِالْعُنْفِ وَالتَّهْدِيدِ', 'بِالْمَالِ وَالْهَدَايَا'],
          answer: 0,
          qEn: 'How did Hūd call his people?',
          optionsEn: ['With wisdom and gentleness', 'With violence and threats', 'With money and gifts'],
        },
        {
          q: 'مَاذَا قَالَ هُودٌ عَنْ أَجْرِهِ عَلَى الدَّعْوَةِ؟',
          options: ['إِنَّ أَجْرَهُ لَيْسَ إِلَّا عَلَى اللَّهِ', 'طَلَبَ مِنْهُمْ مَالاً كَثِيراً', 'طَلَبَ أَنْ يَكُونَ مَلِكاً عَلَيْهِمْ'],
          answer: 0,
          qEn: 'What did Hūd say about his reward for calling them?',
          optionsEn: ['That his reward was only upon Allah', 'He asked them for much money', 'He asked to become their king'],
        },
        {
          q: 'لِمَاذَا يُرْسِلُ اللَّهُ رَسُولاً مِنَ الْقَوْمِ أَنْفُسِهِمْ؟',
          options: ['لِأَنَّهُ يُكَلِّمُهُمْ وَيَنْصَحُ لَهُمْ وَيَفْهَمُونَ كَلَامَهُ', 'لِأَنَّ اللَّهَ لَا يَعْرِفُ غَيْرَهُمْ', 'لِأَنَّهُمْ أَغْنَى الأُمَمِ'],
          answer: 0,
          qEn: 'Why does Allah send a people a messenger from among themselves?',
          optionsEn: ['So he can speak to them, advise them, and be understood by them', 'Because Allah knows no one else', 'Because they are the richest of nations'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'يَا قَوْمِ مَاذَا تَخَافُونَ إِنْ',
        post: 'بِاللَّهِ؟',
        en: 'O my people, what do you fear if you believe in Allah?',
        options: ['آمَنْتُمْ', 'آمَنَ', 'تُؤْمِنُونَ', 'آمَنَّا'],
        answer: 0,
        rationales: [
          '2nd masculine plural, perfect -- matches قَوْم as the addressed group in a completed conditional clause.',
          '3rd masculine singular -- he; wrong person.',
          'Imperfect -- wrong tense; إِنْ here takes the perfect for the condition.',
          '1st plural -- wrong person; Hūd is addressing them, not including himself.',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِنَّ اللَّهَ يُرْسِلُ إِلَى كُلِّ قَوْمٍ',
        post: 'مِنْهُمْ.',
        en: 'Indeed Allah sends to every people a man from among them.',
        options: ['رَجُلاً', 'رَجُلٌ', 'رَجُلٍ', 'رِجَالاً'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- the direct object of يُرْسِلُ.',
          'Nominative -- wrong case; the object of a verb takes the accusative.',
          'Genitive -- wrong case.',
          'Plural -- wrong number; one messenger per people is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'بَلْ',
        post: 'اللَّهُ لَكُمْ في الرِّزْقِ.',
        en: 'Rather, Allah will bless you with provision.',
        options: ['يُبَارِكُ', 'بَارَكَ', 'يُبَارِكُونَ', 'بَارَكُوا'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine singular -- matches اللَّهُ and the promise of a future blessing.',
          'Perfect tense -- wrong; this is a promise about what will happen, not what already happened.',
          'Plural -- wrong number; اللَّهُ is singular.',
          'Perfect, plural -- wrong tense and wrong number.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَنْصَحُ الرَّجُلُ لِقَوْمِهِ',
        pre: '',
        post: 'الرَّجُلُ لِقَوْمِهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَنْصَحُ', 'يَنْصَحُ', 'تَنْصَحُ', 'نَنْصَحُ'],
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
        base: 'يَنْصَحُ الرَّجُلُ لِقَوْمِهِ',
        pre: '',
        post: 'الرَّجُلُ لِقَوْمِهِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَنْصَحُ', 'يَنْصَحُ', 'تَنْصَحُ', 'أَنْصَحُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'يَنْصَحُ الرَّجُلُ لِقَوْمِهِ',
        pre: '',
        post: 'الرَّجُلُ لِقَوْمِهِ',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you (m. pl.)',
        options: ['تَنْصَحُونَ', 'يَنْصَحُ', 'نَنْصَحُ', 'أَنْصَحُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches أَنْتُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '1st plural -- we.',
          '1st singular -- I.',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 9 -- مَوْعِظَةُ
// السِّجْنِ. Printed page 36 (from ch8's closing وَدَخَلَ يُوسُفُ السِّجْنَ,
// restated here with more detail) - 38 (ending before ch10's heading
// حِكْمَةُ يُوسُفَ). Transcribed by hand from the scan (vision OCR, 300dpi
// render) against ../CHAPTER-FORMAT.md.
//
// Two fellow prisoners bring Yūsuf their dreams; Yūsuf, learned in
// interpretation and himself a prophet, watches the prison's idol-worship
// and is moved to a short sermon in parallel rhetorical questions -- do
// not the people of the prison deserve admonition and mercy? Are they not
// servants of Allah, sons of Adam? One 11-token Qur'anic quotation (Sūrat
// Yūsuf 12:36) is split into <=2-token pieces per the house workaround
// (qasas-v1 ch11's header note); the second man's speech (6 tokens) is
// likewise split.
//
// Grammar / lexical notes:
//   -- qs-v2-c09-{006,010} (قَصَّا / رَجُلَانِ): this course's first dual verb
//      form, perf.3d (سَانَكْتَد the sanctioned undocumented person code
//      already used for dual pronoun suffixes since qasas-v2 ch2's
//      يُحِبُّهُمَا), paired with the dual noun رَجُلَانِ (du.indef.nom, same
//      atom already used for صَغِيرَانِ/ضَعِيفَانِ in ch2).
//   -- qs-v2-c09-{026,027,028,029} (أَلَا يَسْتَحِقُّ.../أَلَيْسَ...؟): أَلَا reuses
//      the fixed-idiom lemma already taught in qasas-v1 ch4 ("won't...?"),
//      gloss adjusted for its 3rd-person subject here. أَلَيْسَ is new to
//      this course but not a new lemma -- it is أَ (interrogative) fused
//      onto the already-taught verb لَيْسَ (qasas-v1 ch7), tagged
//      part+perf.3ms, extending the leading part+ fused-proclitic pattern
//      already used for لَامُ التَّعْلِيل in qasas-v2 ch7. لَيْسَ's predicate
//      stays accusative as always (عِبَادَ اللَّهِ, بَنِي آدَمَ).
//   -- qs-v2-c09-{030,031} (كَانَ...وَلَكِنَّهُ كَانَ...): plain كَانَ + accusative
//      predicate, contrastive وَلَكِنَّهُ already established (qasas-v2 ch5).
//   -- Distinct-lemma-despite-shared-root pairs, following the precedent
//      already set for جَوَاد (adj.) vs. جَادَ (verb) sharing ج و د, and now
//      joined by اِسْتَحَقَّ (verb, "to deserve") vs. حَقّ (noun, "truth")
//      sharing ح ق ق -- different parts of speech, kept as separate
//      lemmas rather than merged.
//   -- فَوْق and عِنْدِ (qs-v2-c09-{012,020}) are tagged pos:'adv',
//      features:'adv' bare, same as the already-taught locative عِنْدَ
//      (qasas-v2 ch5) -- the noun that follows a locative (رَأْسِي,
//      أَنْفُسِهِمْ) carries the visible genitive case marking instead.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): دَخَلَ, عَرَفَ, جَمِيع,
//      أَنَّ, شَابّ, كَرِيم, أَحَبَّ, فَرِحَ, رَجُل, سَأَلَ, عِلْم, قَلْب, كَانَ, نَبِيّ,
//      عَبَدَ, وَضَعَ, رَبّ, كَثِير, نَاس, رَأَى, أَكَلَ, ذَلِكَ, كُلّ, بَكَى, أَرَادَ,
//      قَدْ, اللَّه, لَكِنَّ, اِبْن, أَحَد, آخَر, عَنْ, رُؤْيَا, سِجْن, نَفْس are all
//      already taught and NOT re-listed in newWords here. أَهْل, despite
//      feeling like a basic word, checked genuinely new against the whole
//      corpus (qasas-v1, qiraah-v1, qasas-v2 ch1-8) and is listed.
//
// 37 new words (أَهْل، عَظِيم، صَدْر، رَحِيم، عَظَّمَ، قَصَّ، عَصَرَ، خَمْر، حَمَلَ،
// فَوْق، رَأْس، خُبْز، طَيْر، تَأْوِيل، عَالِم، زَمَان، غَيْر، بَرّ، بَحْر، رِزْق، مَطَر،
// ضَحِكَ، اِسْتَحَقَّ، مَوْعِظَة، رَحْمَة، عَبْد، آدَم، حُرّ، جَرِيء، فَقِير، جَوَاد، سَخِيّ،
// جَهَرَ، حَقّ، مَكَان، جَادَ، خَيْر).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch9',
  title: { ar: 'مَوْعِظَةُ السِّجْنِ', en: 'The Sermon of the Prison' },
  newWords: [
    'أَهْل', 'عَظِيم', 'صَدْر', 'رَحِيم', 'عَظَّمَ', 'قَصَّ', 'عَصَرَ', 'خَمْر',
    'حَمَلَ', 'فَوْق', 'رَأْس', 'خُبْز', 'طَيْر', 'تَأْوِيل', 'عَالِم', 'زَمَان',
    'غَيْر', 'بَرّ', 'بَحْر', 'رِزْق', 'مَطَر', 'ضَحِكَ', 'اِسْتَحَقَّ', 'مَوْعِظَة',
    'رَحْمَة', 'عَبْد', 'آدَم', 'حُرّ', 'جَرِيء', 'فَقِير', 'جَوَاد', 'سَخِيّ',
    'جَهَرَ', 'حَقّ', 'مَكَان', 'جَادَ', 'خَيْر',
  ],
  lemmas: {
    'أَهْل': { gloss: 'people (of), family' },
    'عَظِيم': { gloss: 'great, magnificent' },
    'صَدْر': { gloss: 'chest, breast' },
    'رَحِيم': { gloss: 'compassionate, merciful' },
    'عَظَّمَ': { gloss: 'to honor greatly, exalt' },
    'قَصَّ': { gloss: 'to narrate, tell (a story or dream)' },
    'عَصَرَ': { gloss: 'to press, squeeze' },
    'خَمْر': { gloss: 'wine' },
    'حَمَلَ': { gloss: 'to carry' },
    'فَوْق': { gloss: 'above, on top of' },
    'رَأْس': { gloss: 'head' },
    'خُبْز': { gloss: 'bread' },
    'طَيْر': { gloss: 'bird(s)' },
    'تَأْوِيل': { gloss: 'interpretation' },
    'عَالِم': { gloss: 'knowledgeable, learned' },
    'زَمَان': { gloss: 'time, age, era' },
    'غَيْر': { gloss: 'other than, besides' },
    'بَرّ': { gloss: 'land (as opposed to sea)' },
    'بَحْر': { gloss: 'sea' },
    'رِزْق': { gloss: 'provision, sustenance' },
    'مَطَر': { gloss: 'rain' },
    'ضَحِكَ': { gloss: 'to laugh' },
    'اِسْتَحَقَّ': { gloss: 'to deserve, be worthy of' },
    'مَوْعِظَة': { gloss: 'admonition, sermon' },
    'رَحْمَة': { gloss: 'mercy' },
    'عَبْد': { gloss: 'servant, slave' },
    'آدَم': { gloss: 'Adam' },
    'حُرّ': { gloss: 'free (not enslaved)' },
    'جَرِيء': { gloss: 'bold, daring' },
    'فَقِير': { gloss: 'poor' },
    'جَوَاد': { gloss: 'generous' },
    'سَخِيّ': { gloss: 'generous, openhanded' },
    'جَهَرَ': { gloss: 'to proclaim openly, speak aloud' },
    'حَقّ': { gloss: 'truth, right' },
    'مَكَان': { gloss: 'place' },
    'جَادَ': { gloss: 'to be generous, give generously' },
    'خَيْر': { gloss: 'good, goodness' },
  },
  paragraphs: [
    {
      en: 'Yūsuf entered the prison, and everyone in the prison came to know that Yūsuf was a noble young man. and that Yūsuf had great knowledge, and that in his breast was a compassionate heart. The people of the prison loved Yūsuf and honored him. The people rejoiced over Yūsuf and exalted him. Two men entered the prison with him, and they told him their dreams:',
      sentences: [
        {
          id: 'qs-v2-c09-001',
          ar: 'وَدَخَلَ يُوسُفُ السِّجْنَ، وَعَرَفَ أَهْلُ السِّجْنِ جَمِيعاً أَنَّ يُوسُفَ شَابٌّ كَرِيمٌ.',
          en: 'Yūsuf entered the prison, and everyone in the prison came to know that Yūsuf was a noble young man.',
          tokens: [
            { surface: 'وَدَخَلَ', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'د خ ل', gloss: 'to enter; and entered' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'السِّجْنَ', lemma: 'سِجْن', pos: 'noun', features: 'def.acc', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'وَعَرَفَ', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ر ف', gloss: 'to know; and came to know' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'nom.constr', root: 'أ ه ل', gloss: 'people of' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'جَمِيعاً', lemma: 'جَمِيع', pos: 'adv', features: 'indef.acc', root: 'ج م ع', gloss: 'all together' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'شَابٌّ', lemma: 'شَابّ', pos: 'noun', features: 'indef.nom', root: 'ش ب ب', gloss: 'a young man' },
            { surface: 'كَرِيمٌ', lemma: 'كَرِيم', pos: 'adj', features: 'indef.nom', root: 'ك ر م', gloss: 'noble, generous' },
          ],
        },
        {
          id: 'qs-v2-c09-002',
          ar: 'وَأَنَّ يُوسُفَ عِنْدَهُ عِلْمٌ عَظِيمٌ.',
          en: 'and that Yūsuf had great knowledge,',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'عِنْدَهُ', lemma: 'عِنْدَ', pos: 'adv', features: 'adv+3ms', gloss: 'with him, he had' },
            { surface: 'عِلْمٌ', lemma: 'عِلْم', pos: 'noun', features: 'indef.nom', gloss: 'knowledge' },
            { surface: 'عَظِيمٌ', lemma: 'عَظِيم', pos: 'adj', features: 'indef.nom', root: 'ع ظ م', gloss: 'great, magnificent' },
          ],
        },
        {
          id: 'qs-v2-c09-003',
          ar: 'وَأَنَّ يُوسُفَ فِي صَدْرِهِ قَلْبٌ رَحِيمٌ.',
          en: 'and that in his breast was a compassionate heart.',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'صَدْرِهِ', lemma: 'صَدْر', pos: 'noun', features: 'gen+3ms', root: 'ص د ر', gloss: 'his chest, breast' },
            { surface: 'قَلْبٌ', lemma: 'قَلْب', pos: 'noun', features: 'indef.nom', root: 'ق ل ب', gloss: 'a heart' },
            { surface: 'رَحِيمٌ', lemma: 'رَحِيم', pos: 'adj', features: 'indef.nom', root: 'ر ح م', gloss: 'compassionate, merciful' },
          ],
        },
        {
          id: 'qs-v2-c09-004',
          ar: 'وَأَحَبَّ أَهْلُ السِّجْنِ يُوسُفَ وَأَكْرَمُوهُ.',
          en: 'The people of the prison loved Yūsuf and honored him.',
          tokens: [
            { surface: 'وَأَحَبَّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'conj+perf.3ms', root: 'ح ب ب', gloss: 'to love; and loved' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'nom.constr', root: 'أ ه ل', gloss: 'people of' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'وَأَكْرَمُوهُ', lemma: 'أَكْرَمَ', pos: 'verb', features: 'conj+perf.3mp+3ms', root: 'ك ر م', gloss: 'to honor; and honored him' },
          ],
        },
        {
          id: 'qs-v2-c09-005',
          ar: 'وَفَرِحَ النَّاسُ بِيُوسُفَ وَعَظَّمُوهُ.',
          en: 'The people rejoiced over Yūsuf and exalted him.',
          tokens: [
            { surface: 'وَفَرِحَ', lemma: 'فَرِحَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ف ر ح', gloss: 'to rejoice; and rejoiced' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'the people' },
            { surface: 'بِيُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'prep+gen', gloss: 'over, because of Yūsuf' },
            { surface: 'وَعَظَّمُوهُ', lemma: 'عَظَّمَ', pos: 'verb', features: 'conj+perf.3mp+3ms', root: 'ع ظ م', gloss: 'to exalt, honor greatly; and exalted him' },
          ],
        },
        {
          id: 'qs-v2-c09-006',
          ar: 'وَدَخَلَ مَعَهُ السِّجْنَ رَجُلَانِ وَقَصَّا عَلَيْهِ رُؤْيَاهُمَا',
          en: 'Two men entered the prison with him, and they told him their dreams:',
          tokens: [
            { surface: 'وَدَخَلَ', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'د خ ل', gloss: 'to enter; and entered' },
            { surface: 'مَعَهُ', lemma: 'مَعَ', pos: 'adv', features: 'adv+3ms', gloss: 'with him' },
            { surface: 'السِّجْنَ', lemma: 'سِجْن', pos: 'noun', features: 'def.acc', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'رَجُلَانِ', lemma: 'رَجُل', pos: 'noun', features: 'du.indef.nom', root: 'ر ج ل', gloss: 'two men' },
            { surface: 'وَقَصَّا', lemma: 'قَصَّ', pos: 'verb', features: 'conj+perf.3d', root: 'ق ص ص', gloss: 'to narrate, tell; and the two of them told' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'رُؤْيَاهُمَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'acc+3d', root: 'ر أ ي', gloss: 'their two dreams' },
          ],
        },
      ],
      checks: [],
    },
    {
      lines: true,
      en: '\'One of them said, Indeed I see myself pressing wine.\' The other said, \'Indeed I see myself carrying on top of my head bread which the birds are eating from.\'',
      sentences: [
        {
          id: 'qs-v2-c09-007',
          ar: '﴿قَالَ أَحَدُهُمَا',
          en: "'One of them said,",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'أَحَدُهُمَا', lemma: 'أَحَد', pos: 'noun', features: 'nom+3d', root: 'أ ح د', gloss: 'one of the two of them' },
          ],
        },
        {
          id: 'qs-v2-c09-008',
          ar: 'إِنِّي أَرَانِي',
          en: 'Indeed I see myself',
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'أَرَانِي', lemma: 'رَأَى', pos: 'verb', features: 'impf.1s+1s', root: 'ر أ ي', gloss: 'to see; I see myself' },
          ],
        },
        {
          id: 'qs-v2-c09-009',
          ar: 'أَعْصِرُ خَمْرًا﴾.',
          en: "pressing wine.'",
          tokens: [
            { surface: 'أَعْصِرُ', lemma: 'عَصَرَ', pos: 'verb', features: 'impf.1s', root: 'ع ص ر', gloss: 'to press, squeeze; I press' },
            { surface: 'خَمْرًا', lemma: 'خَمْر', pos: 'noun', features: 'indef.acc', root: 'خ م ر', gloss: 'wine' },
          ],
        },
        {
          id: 'qs-v2-c09-010',
          ar: '﴿وَقَالَ الآخَرُ',
          en: 'The other said,',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'الآخَرُ', lemma: 'آخَر', pos: 'noun', features: 'def.nom', gloss: 'the other' },
          ],
        },
        {
          id: 'qs-v2-c09-011',
          ar: 'إِنِّي أَرَانِي',
          en: "'Indeed I see myself",
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'أَرَانِي', lemma: 'رَأَى', pos: 'verb', features: 'impf.1s+1s', root: 'ر أ ي', gloss: 'to see; I see myself' },
          ],
        },
        {
          id: 'qs-v2-c09-012',
          ar: 'أَحْمِلُ فَوْقَ',
          en: 'carrying on top',
          tokens: [
            { surface: 'أَحْمِلُ', lemma: 'حَمَلَ', pos: 'verb', features: 'impf.1s', root: 'ح م ل', gloss: 'to carry; I carry' },
            { surface: 'فَوْقَ', lemma: 'فَوْق', pos: 'adv', features: 'adv', root: 'ف و ق', gloss: 'above, on top of' },
          ],
        },
        {
          id: 'qs-v2-c09-013',
          ar: 'رَأْسِي خُبْزًا',
          en: 'of my head bread',
          tokens: [
            { surface: 'رَأْسِي', lemma: 'رَأْس', pos: 'noun', features: 'gen+1s', root: 'ر أ س', gloss: 'my head' },
            { surface: 'خُبْزًا', lemma: 'خُبْز', pos: 'noun', features: 'indef.acc', root: 'خ ب ز', gloss: 'bread' },
          ],
        },
        {
          id: 'qs-v2-c09-014',
          ar: 'تَأْكُلُ الطَّيْرُ',
          en: 'which the birds',
          tokens: [
            { surface: 'تَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3fs', root: 'أ ك ل', gloss: 'to eat; eat(s)' },
            { surface: 'الطَّيْرُ', lemma: 'طَيْر', pos: 'noun', features: 'def.nom', root: 'ط ي ر', gloss: 'the bird(s)' },
          ],
        },
        {
          id: 'qs-v2-c09-015',
          ar: 'مِنْهُ﴾.',
          en: "are eating from.'",
          tokens: [
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'from it' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا رَأَى أَحَدُ الرَّجُلَيْنِ فِي رُؤْيَاهُ؟',
          options: ['أَنَّهُ يَعْصِرُ خَمْرًا', 'أَنَّهُ يَبْنِي بَيْتًا', 'أَنَّهُ يَرْكَبُ حِصَانًا'],
          answer: 0,
          qEn: 'What did one of the two men see in his dream?',
          optionsEn: ['That he was pressing wine', 'That he was building a house', 'That he was riding a horse'],
        },
      ],
    },
    {
      en: 'The two of them asked Yūsuf about the interpretation. Yūsuf was learned in the interpretation of dreams. Yūsuf was a prophet among the prophets. In his time, the people used to worship other than Allah. and set up many gods of their own invention. saying: this one is lord of the land, this one lord of the sea, this one lord of provision, and this one lord of rain.',
      sentences: [
        {
          id: 'qs-v2-c09-016',
          ar: 'وَسَأَلَا يُوسُفَ عَنِ التَّأْوِيلِ.',
          en: 'The two of them asked Yūsuf about the interpretation.',
          tokens: [
            { surface: 'وَسَأَلَا', lemma: 'سَأَلَ', pos: 'verb', features: 'conj+perf.3d', gloss: 'to ask; and the two of them asked' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'about' },
            { surface: 'التَّأْوِيلِ', lemma: 'تَأْوِيل', pos: 'noun', features: 'def.gen', root: 'أ و ل', gloss: 'the interpretation' },
          ],
        },
        {
          id: 'qs-v2-c09-017',
          ar: 'وَكَانَ يُوسُفُ عَالِماً بِتَأْوِيلِ الرُّؤْيَا.',
          en: 'Yūsuf was learned in the interpretation of dreams.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'عَالِماً', lemma: 'عَالِم', pos: 'adj', features: 'indef.acc', root: 'ع ل م', gloss: 'knowledgeable, learned' },
            { surface: 'بِتَأْوِيلِ', lemma: 'تَأْوِيل', pos: 'noun', features: 'prep+gen.constr', root: 'أ و ل', gloss: 'in the interpretation of' },
            { surface: 'الرُّؤْيَا', lemma: 'رُؤْيَا', pos: 'noun', features: 'def.gen', root: 'ر أ ي', gloss: 'dreams, visions' },
          ],
        },
        {
          id: 'qs-v2-c09-018',
          ar: 'وَكَانَ يُوسُفُ نَبِيّاً مِنَ الأَنْبِيَاءِ.',
          en: 'Yūsuf was a prophet among the prophets.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'نَبِيّاً', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.acc', gloss: 'a prophet' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.def.gen', gloss: 'the prophets' },
          ],
        },
        {
          id: 'qs-v2-c09-019',
          ar: 'وَكَانَ النَّاسُ فِي زَمَانِهِ يَعْبُدُونَ غَيْرَ اللَّهِ.',
          en: 'In his time, the people used to worship other than Allah.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and were' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'the people' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'زَمَانِهِ', lemma: 'زَمَان', pos: 'noun', features: 'gen+3ms', root: 'ز م ن', gloss: 'his time' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to worship; used to worship' },
            { surface: 'غَيْرَ', lemma: 'غَيْر', pos: 'noun', features: 'acc.constr', root: 'غ ي ر', gloss: 'other than' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v2-c09-020',
          ar: 'وَوَضَعُوا أَرْبَاباً كَثِيرَةً مِنْ عِنْدِ أَنْفُسِهِمْ.',
          en: 'and set up many gods of their own invention.',
          tokens: [
            { surface: 'وَوَضَعُوا', lemma: 'وَضَعَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to place, set up; and set up' },
            { surface: 'أَرْبَاباً', lemma: 'رَبّ', pos: 'noun', features: 'pl.indef.acc', gloss: 'lords, gods' },
            { surface: 'كَثِيرَةً', lemma: 'كَثِير', pos: 'adj', features: 'indef.acc.f', gloss: 'many' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'عِنْدِ', lemma: 'عِنْدَ', pos: 'adv', features: 'adv', gloss: 'the presence of' },
            { surface: 'أَنْفُسِهِمْ', lemma: 'نَفْس', pos: 'noun', features: 'pl.gen+3mp', root: 'ن ف س', gloss: 'themselves' },
          ],
        },
        {
          id: 'qs-v2-c09-021',
          ar: 'وَقَالُوا هَذَا رَبُّ الْبَرِّ، وَهَذَا رَبُّ الْبَحْرِ، وَهَذَا رَبُّ الرِّزْقِ، وَهَذَا رَبُّ الْمَطَرِ.',
          en: 'saying: this one is lord of the land, this one lord of the sea, this one lord of provision, and this one lord of rain.',
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'رَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'nom.constr', gloss: 'lord of' },
            { surface: 'الْبَرِّ', lemma: 'بَرّ', pos: 'noun', features: 'def.gen', root: 'ب ر ر', gloss: 'the land' },
            { surface: 'وَهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'conj+dem.m', gloss: 'and this' },
            { surface: 'رَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'nom.constr', gloss: 'lord of' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', root: 'ب ح ر', gloss: 'the sea' },
            { surface: 'وَهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'conj+dem.m', gloss: 'and this' },
            { surface: 'رَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'nom.constr', gloss: 'lord of' },
            { surface: 'الرِّزْقِ', lemma: 'رِزْق', pos: 'noun', features: 'def.gen', root: 'ر ز ق', gloss: 'provision, sustenance' },
            { surface: 'وَهَذَا', lemma: 'هَذَا', pos: 'dem', features: 'conj+dem.m', gloss: 'and this' },
            { surface: 'رَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'nom.constr', gloss: 'lord of' },
            { surface: 'الْمَطَرِ', lemma: 'مَطَر', pos: 'noun', features: 'def.gen', root: 'م ط ر', gloss: 'the rain' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ يَعْبُدُ النَّاسُ فِي زَمَانِ يُوسُفَ؟',
          options: ['أَرْبَابًا كَثِيرَةً مِنْ عِنْدِ أَنْفُسِهِمْ', 'اللَّهَ وَحْدَهُ', 'الشَّمْسَ وَالْقَمَرَ فَقَطْ'],
          answer: 0,
          qEn: "What did the people worship in Yūsuf's time?",
          optionsEn: ['Many gods of their own invention', 'Allah alone', 'Only the sun and moon'],
        },
      ],
    },
    {
      en: 'Yūsuf would see all that and laugh, yet Yūsuf knew all that and wept, wanting to call them to Allah. And indeed Allah had willed that to be in the prison. Do not the people of the prison deserve admonition? Do not the people of the prison deserve mercy?',
      sentences: [
        {
          id: 'qs-v2-c09-022',
          ar: 'وَكَانَ يُوسُفُ يَرَى كُلَّ ذَلِكَ وَيَضْحَكُ.',
          en: 'Yūsuf would see all that and laugh,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and would' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', root: 'ر أ ي', gloss: 'to see; used to see' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', root: 'ك ل ل', gloss: 'all (of)' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'وَيَضْحَكُ', lemma: 'ضَحِكَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ض ح ك', gloss: 'to laugh; and laugh' },
          ],
        },
        {
          id: 'qs-v2-c09-023',
          ar: 'وَكَانَ يُوسُفُ يَعْلَمُ كُلَّ ذَلِكَ وَيَبْكِي.',
          en: 'yet Yūsuf knew all that and wept,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and would' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'يَعْلَمُ', lemma: 'عَلِمَ', pos: 'verb', features: 'impf.3ms', gloss: 'to know; used to know' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', root: 'ك ل ل', gloss: 'all (of)' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'وَيَبْكِي', lemma: 'بَكَى', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to weep, cry; and weep' },
          ],
        },
        {
          id: 'qs-v2-c09-024',
          ar: 'وَكَانَ يُوسُفُ يُرِيدُ أَنْ يَدْعُوَهُمْ إِلَى اللَّهِ.',
          en: 'wanting to call them to Allah.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'يُرِيدُ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.3ms', gloss: 'to want; wanted' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَدْعُوَهُمْ', lemma: 'دَعَا', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to call, invite; to call them' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v2-c09-025',
          ar: 'وَقَدْ أَرَادَ اللَّهُ أَنْ يَكُونَ ذَلِكَ فِي السِّجْنِ.',
          en: 'And indeed Allah had willed that to be in the prison.',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'أَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms', gloss: 'to want, will; willed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that, to' },
            { surface: 'يَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; to be' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
          ],
        },
        {
          id: 'qs-v2-c09-026',
          ar: 'أَلَا يَسْتَحِقُّ أَهْلُ السِّجْنِ الْمَوْعِظَةَ؟',
          en: 'Do not the people of the prison deserve admonition?',
          tokens: [
            { surface: 'أَلَا', lemma: 'أَلَا', pos: 'part', features: 'part', gloss: "don't ... deserve?" },
            { surface: 'يَسْتَحِقُّ', lemma: 'اِسْتَحَقَّ', pos: 'verb', features: 'impf.3ms', root: 'ح ق ق', gloss: 'to deserve, be worthy of; deserves' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'nom.constr', root: 'أ ه ل', gloss: 'people of' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'الْمَوْعِظَةَ', lemma: 'مَوْعِظَة', pos: 'noun', features: 'def.acc', root: 'و ع ظ', gloss: 'admonition, sermon' },
          ],
        },
        {
          id: 'qs-v2-c09-027',
          ar: 'أَلَا يَسْتَحِقُّ أَهْلُ السِّجْنِ الرَّحْمَةَ؟',
          en: 'Do not the people of the prison deserve mercy?',
          tokens: [
            { surface: 'أَلَا', lemma: 'أَلَا', pos: 'part', features: 'part', gloss: "don't ... deserve?" },
            { surface: 'يَسْتَحِقُّ', lemma: 'اِسْتَحَقَّ', pos: 'verb', features: 'impf.3ms', root: 'ح ق ق', gloss: 'to deserve, be worthy of; deserves' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'nom.constr', root: 'أ ه ل', gloss: 'people of' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'الرَّحْمَةَ', lemma: 'رَحْمَة', pos: 'noun', features: 'def.acc', root: 'ر ح م', gloss: 'mercy' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'Are not the people of the prison servants of Allah? Are not the people of the prison sons of Adam? Yūsuf was in the prison, yet he was free and bold. Yūsuf was poor, yet he was generous and openhanded. Indeed the prophets proclaim the truth openly in every place, and give generously of good in every age.',
      sentences: [
        {
          id: 'qs-v2-c09-028',
          ar: 'أَلَيْسَ أَهْلُ السِّجْنِ عِبَادَ اللَّهِ؟',
          en: 'Are not the people of the prison servants of Allah?',
          tokens: [
            { surface: 'أَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'part+perf.3ms', root: 'ل ي س', gloss: "isn't, aren't" },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'nom.constr', root: 'أ ه ل', gloss: 'people of' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'عِبَادَ', lemma: 'عَبْد', pos: 'noun', features: 'pl.acc.constr', root: 'ع ب د', gloss: 'servants of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v2-c09-029',
          ar: 'أَلَيْسَ أَهْلُ السِّجْنِ بَنِي آدَمَ؟',
          en: 'Are not the people of the prison sons of Adam?',
          tokens: [
            { surface: 'أَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'part+perf.3ms', root: 'ل ي س', gloss: "isn't, aren't" },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'nom.constr', root: 'أ ه ل', gloss: 'people of' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.acc.constr', root: 'ب ن ي', gloss: 'sons of' },
            { surface: 'آدَمَ', lemma: 'آدَم', pos: 'proper', features: 'gen', gloss: 'Adam' },
          ],
        },
        {
          id: 'qs-v2-c09-030',
          ar: 'كَانَ يُوسُفُ فِي السِّجْنِ وَلَكِنَّهُ كَانَ حُرًّا جَرِيئاً.',
          en: 'Yūsuf was in the prison, yet he was free and bold.',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'وَلَكِنَّهُ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part+3ms', gloss: 'but he' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'حُرًّا', lemma: 'حُرّ', pos: 'adj', features: 'indef.acc', root: 'ح ر ر', gloss: 'free' },
            { surface: 'جَرِيئاً', lemma: 'جَرِيء', pos: 'adj', features: 'indef.acc', root: 'ج ر أ', gloss: 'bold, daring' },
          ],
        },
        {
          id: 'qs-v2-c09-031',
          ar: 'كَانَ يُوسُفُ فَقِيراً وَلَكِنَّهُ كَانَ جَوَاداً سَخِيًّا.',
          en: 'Yūsuf was poor, yet he was generous and openhanded.',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'فَقِيراً', lemma: 'فَقِير', pos: 'adj', features: 'indef.acc', root: 'ف ق ر', gloss: 'poor' },
            { surface: 'وَلَكِنَّهُ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part+3ms', gloss: 'but he' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'جَوَاداً', lemma: 'جَوَاد', pos: 'adj', features: 'indef.acc', root: 'ج و د', gloss: 'generous' },
            { surface: 'سَخِيًّا', lemma: 'سَخِيّ', pos: 'adj', features: 'indef.acc', root: 'س خ و', gloss: 'generous, openhanded' },
          ],
        },
        {
          id: 'qs-v2-c09-032',
          ar: 'إِنَّ الأَنْبِيَاءَ يَجْهَرُونَ بِالْحَقِّ فِي كُلِّ مَكَانٍ.',
          en: 'Indeed the prophets proclaim the truth openly in every place,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'الأَنْبِيَاءَ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.def.acc', gloss: 'the prophets' },
            { surface: 'يَجْهَرُونَ', lemma: 'جَهَرَ', pos: 'verb', features: 'impf.3mp', root: 'ج ه ر', gloss: 'to proclaim openly; proclaim' },
            { surface: 'بِالْحَقِّ', lemma: 'حَقّ', pos: 'noun', features: 'prep+def.gen', root: 'ح ق ق', gloss: 'the truth' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', root: 'ك ل ل', gloss: 'every' },
            { surface: 'مَكَانٍ', lemma: 'مَكَان', pos: 'noun', features: 'indef.gen', root: 'ك و ن', gloss: 'place' },
          ],
        },
        {
          id: 'qs-v2-c09-033',
          ar: 'إِنَّ الأَنْبِيَاءَ يَجُودُونَ بِالْخَيْرِ فِي كُلِّ زَمَانٍ.',
          en: 'and give generously of good in every age.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'الأَنْبِيَاءَ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.def.acc', gloss: 'the prophets' },
            { surface: 'يَجُودُونَ', lemma: 'جَادَ', pos: 'verb', features: 'impf.3mp', root: 'ج و د', gloss: 'to be generous, give generously; give generously' },
            { surface: 'بِالْخَيْرِ', lemma: 'خَيْر', pos: 'noun', features: 'prep+def.gen', root: 'خ ي ر', gloss: 'good, goodness' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', root: 'ك ل ل', gloss: 'every' },
            { surface: 'زَمَانٍ', lemma: 'زَمَان', pos: 'noun', features: 'indef.gen', root: 'ز م ن', gloss: 'age, time' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ يُوسُفُ عَلَى الرَّغْمِ مِنْ سَجْنِهِ وَفَقْرِهِ؟',
          options: ['حُرًّا جَرِيئًا وَجَوَادًا سَخِيًّا', 'حَزِينًا ضَعِيفًا', 'غَاضِبًا كَئِيبًا'],
          answer: 0,
          qEn: 'How was Yūsuf despite his imprisonment and poverty?',
          optionsEn: ['Free and bold, generous and openhanded', 'Sad and weak', 'Angry and gloomy'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'كَانَ يُوسُفُ فِي السِّجْنِ وَلَكِنَّهُ كَانَ',
        post: '.',
        en: 'Yūsuf was in the prison, but he was free and bold.',
        options: ['حُرًّا', 'حُرٌّ', 'حُرٍّ', 'أَحْرَارًا'],
        answer: 0,
        rationales: [
          "Accusative, masculine singular -- predicate of كَانَ, agreeing with the masculine singular subject هُوَ.",
          'Nominative -- wrong case; كَانَ puts its predicate in the accusative.',
          'Genitive -- wrong case.',
          'Plural -- wrong number; the subject is a single person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'كَانَ يُوسُفُ فَقِيرًا وَلَكِنَّهُ كَانَ',
        post: '.',
        en: 'Yūsuf was poor, but he was generous.',
        options: ['جَوَادًا', 'جَوَادٌ', 'جَوَادٍ', 'أَجْوَادًا'],
        answer: 0,
        rationales: [
          "Accusative, masculine singular -- predicate of كَانَ, agreeing with the masculine singular subject هُوَ.",
          'Nominative -- wrong case; كَانَ puts its predicate in the accusative.',
          'Genitive -- wrong case.',
          'Plural -- wrong number; the subject is a single person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'أَلَيْسَ أَهْلُ السِّجْنِ',
        post: '؟',
        en: 'Are not the people of the prison servants of Allah?',
        options: ['عِبَادَ اللَّهِ', 'عِبَادُ اللَّهِ', 'عِبَادِ اللَّهِ', 'عَبْدَ اللَّهِ'],
        answer: 0,
        rationales: [
          'Accusative plural construct -- predicate of أَلَيْسَ (أَ + لَيْسَ), agreeing in number with the plural subject أَهْلُ السِّجْنِ.',
          'Nominative -- wrong case; لَيْسَ puts its predicate in the accusative.',
          'Genitive -- wrong case.',
          'Singular -- wrong number; أَهْلُ (the people) needs a plural predicate.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَجْهَرُ بِالْحَقِّ',
        pre: '',
        post: 'بِالْحَقِّ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَجْهَرُ', 'يَجْهَرُ', 'تَجْهَرُ', 'نَجْهَرُ'],
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
        base: 'يَجْهَرُ بِالْحَقِّ',
        pre: '',
        post: 'بِالْحَقِّ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَجْهَرُ', 'أَجْهَرُ', 'تَجْهَرُ', 'يَجْهَرُونَ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '1st singular -- I.',
          '2nd masculine singular -- you (m.).',
          '3rd masculine plural -- they (m.).',
        ],
      },
      {
        type: 'shift',
        base: 'يَجْهَرُ بِالْحَقِّ',
        pre: '',
        post: 'بِالْحَقِّ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَجْهَرُونَ', 'يَجْهَرُ', 'نَجْهَرُ', 'تَجْهَرُونَ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '1st plural -- we.',
          '2nd masculine plural -- you all (m.).',
        ],
      },
    ],
  },
};

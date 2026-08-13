// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 3 -- خُضُوعُ الْيَهُودِ لِلْأَسْبَابِ الظَّاهِرَةِ.
// Printed page 252 in full, ending at the top of page 253 (before ch4's
// heading اسْتِخْفَافٌ وَتَمَرُّدٌ, which opens partway down that page).
// Transcribed by hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md.
//
// Two dense paragraphs of social/psychological portraiture: the Jews'
// entrenched materialism (denying the soul, insisting everything has a
// visible mechanical cause) is what made ʿĪsā's miracles the exact remedy
// their age needed; then a much longer indictment of their fixation on
// outward form over substance, race-pride, hard-heartedness toward
// outsiders and the poor, and the hypocrisy/cunning/secrecy bred into them
// by centuries of Roman subjugation in Syria and Palestine.
//
// Grammar / lexical notes:
//   -- Every long printed sentence is split at its natural clause/comma
//      boundary into multiple shorter entries (house convention, matching
//      ch1/ch2 of this volume and qasas-v3 ch7/9/10/12/13/14) -- no
//      rewording, same printed text and order. The parenthetical aside in
//      s001 (بين شرطتين، وهم أمة كثر فيها الأنبياء) is kept inline as printed.
//   -- شَيْء is NOT listed in newWords despite being absent from the
//      cross-check file known-lemmas.txt -- it is already used repeatedly
//      as an ordinary token throughout volumes 1-3 (e.g. qasas-v2 ch8's
//      شَيْئاً) without ever being formally registered there; treating it as
//      new here would re-teach a word learners have already met many times
//      over. Flagged for the centralized volume-wide pass to apply this
//      same exception consistently (see qa-notes).
//   -- عَصْر and قُدْرَة are NOT re-listed as new -- both were already
//      introduced earlier in this volume (عَصْر: ch2; قُدْرَة: ch1).
//   -- وُقُوف، تَمَسُّك، تَشَبُّث، اِنْهِمَاك are tagged as their own noun
//      (maṣdar) lemmas rather than as the corresponding verbs (وَقَفَ،
//      تَمَسَّكَ، تَشَبَّثَ، اِنْهَمَكَ), since only the nominalized form is what
//      the page actually prints in s007/s008/s011; اِنْهَمَكَ itself IS used
//      as a finite verb at s011's own وَانْهَمَكُوا, so both the verb and its
//      maṣdar noun are tagged as distinct lemmas per the corpus's general
//      noun-beside-verb convention.
//   -- إِنْكَار (s002, "denial") and مُعَامَلَة (s016, "treatment") are tagged
//      as their own verbal-noun lemmas, distinct from their source verbs
//      أَنْكَرَ (already known) and عَامَلَ (new, this chapter) respectively --
//      same noun-beside-verb convention.
//   -- سَائِد (س001, "prevailing, dominant") is the active participle of
//      سَادَ, tagged as its own lemma per the participle-as-distinct-lemma
//      convention used throughout this corpus.
//   -- سُورِيّا and فِلَسْطِينَ (s023) are indeclinable proper nouns (place
//      names ending -ā/triptote-blocked); no case atom is meaningful on
//      the surface form, so features is left as a bare 'prep'-only string
//      or omitted where no case mark shows.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): خَضَعَ، أُمَّة، كَثُرَ،
//      نَبِيّ، عِلْم، أَنْكَرَ، كُلّ، رَأَى، أَكْرَمَ، عَقْل، حَاجَة، زَمَان، حَقِيقَة،
//      دَم، حُبّ، مَال، قَلْب، طَبِيعَة، ضَعِيف، فَقِير، جَرَى، حَيَوَان، كَلْب، أَوْ،
//      قَوِيّ، غَنِيّ، لَانَ، عَاشَ، حُكْم، مُدَّة، طَوِيل، عِنْدَ، عَصْر (ch2)، قُدْرَة
//      (ch1)، اللَّه، سَيِّد، عِيسَى (ch1)
//      are all already taught and are NOT re-listed in newWords here.
//
// 59 new words -- the densest chapter transcribed so far in this volume,
// almost entirely abstract/social vocabulary with no repeated recycling:
// اِشْتَهَرَ، رُوح، اِتَّصَلَ، اِعْتَادَ، فَسَّرَ، تَفْسِير، مَادِّيّ، وُجُود، إِمْكَان،
// حَادِث، سَبَب، عِلَّة، مُعْجِزَة، عِلَاج، ضَيِّق، نِدَاء، سَائِد، أَمْعَنَ، وُقُوف،
// ظَاهِر، تَمَسُّك، قِشْر، لُبَاب، تَشَبُّث، مَظْهَر، غَلَا، تَقْدِيس، عُنْصُر، مَادَّة،
// اِنْهَمَكَ، حَيَاة، اِنْهِمَاك، زَائِد، قَسَا، جَفَّ، رَقَّ، عَطَفَ، عَامَلَ، عِرْق،
// إِسْرَائِيلِيّ، مُعَامَلَة، جَمَاد، تَجَبَّرَ، صَغِير، عَجْز، وَلَّدَ، ذُلّ، عُبُودِيَّة،
// رُومَانِيّ، دَامَ، سُورِيَا، فِلَسْطِين، نِفَاق، خُنُوع، تَحَيُّل، دَهَاء، لُجُوء،
// مُؤَامَرَة، سِرِّيَّة.
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch3',
  title: { ar: 'خُضُوعُ الْيَهُودِ لِلْأَسْبَابِ الظَّاهِرَةِ', en: "The Jews' Submission to Outward Causes" },
  newWords: [
    'اِشْتَهَرَ', 'رُوح', 'اِتَّصَلَ', 'اِعْتَادَ', 'فَسَّرَ', 'تَفْسِير',
    'مَادِّيّ', 'وُجُود', 'إِمْكَان', 'حَادِث', 'سَبَب', 'عِلَّة',
    'مُعْجِزَة', 'عِلَاج', 'ضَيِّق', 'نِدَاء', 'سَائِد', 'أَمْعَنَ',
    'وُقُوف', 'ظَاهِر', 'تَمَسُّك', 'قِشْر', 'لُبَاب', 'تَشَبُّث',
    'مَظْهَر', 'غَلَا', 'تَقْدِيس', 'عُنْصُر', 'مَادَّة', 'اِنْهَمَكَ',
    'حَيَاة', 'اِنْهِمَاك', 'زَائِد', 'قَسَا', 'جَفَّ', 'رَقَّ',
    'عَطَفَ', 'عَامَلَ', 'عِرْق', 'إِسْرَائِيلِيّ', 'مُعَامَلَة', 'جَمَاد',
    'تَجَبَّرَ', 'صَغِير', 'عَجْز', 'وَلَّدَ', 'ذُلّ', 'عُبُودِيَّة',
    'رُومَانِيّ', 'دَامَ', 'سُورِيَا', 'فِلَسْطِين', 'نِفَاق', 'خُنُوع',
    'تَحَيُّل', 'دَهَاء', 'لُجُوء', 'مُؤَامَرَة', 'سِرِّيَّة',
  ],
  lemmas: {
    اِشْتَهَرَ: { gloss: 'to become well-known, notorious' },
    رُوح: { gloss: 'spirit, soul' },
    اِتَّصَلَ: { gloss: 'to be connected, related' },
    اِعْتَادَ: { gloss: 'to become accustomed to' },
    فَسَّرَ: { gloss: 'to interpret, explain' },
    تَفْسِير: { gloss: 'an interpretation' },
    مَادِّيّ: { gloss: 'material, materialistic' },
    وُجُود: { gloss: 'existence' },
    إِمْكَان: { gloss: 'possibility' },
    حَادِث: { gloss: 'an event, occurrence' },
    سَبَب: { gloss: 'a cause' },
    عِلَّة: { gloss: 'a cause, reason' },
    مُعْجِزَة: { gloss: 'a miracle' },
    عِلَاج: { gloss: 'a remedy, treatment' },
    ضَيِّق: { gloss: 'narrow, constricted' },
    نِدَاء: { gloss: 'a call, summons' },
    سَائِد: { gloss: 'prevailing, dominant' },
    أَمْعَنَ: { gloss: 'to go to extremes' },
    وُقُوف: { gloss: 'stopping, halting (at)' },
    ظَاهِر: { gloss: 'the outward, apparent' },
    تَمَسُّك: { gloss: 'clinging, holding fast (to)' },
    قِشْر: { gloss: 'a husk, shell' },
    لُبَاب: { gloss: 'the core, essence' },
    تَشَبُّث: { gloss: 'clinging, holding on (to)' },
    مَظْهَر: { gloss: 'an appearance, outward form' },
    غَلَا: { gloss: 'to go to excess' },
    تَقْدِيس: { gloss: 'sanctification, veneration' },
    عُنْصُر: { gloss: 'race, lineage' },
    مَادَّة: { gloss: 'matter, material substance' },
    اِنْهَمَكَ: { gloss: 'to be engrossed, absorbed' },
    حَيَاة: { gloss: 'life' },
    اِنْهِمَاك: { gloss: 'engrossment, absorption' },
    زَائِد: { gloss: 'excessive' },
    قَسَا: { gloss: 'to become hard, harsh' },
    جَفَّ: { gloss: 'to dry up' },
    رَقَّ: { gloss: 'to be tender, show mercy' },
    عَطَفَ: { gloss: 'to show compassion (to)' },
    عَامَلَ: { gloss: 'to treat, deal with' },
    عِرْق: { gloss: 'a vein' },
    إِسْرَائِيلِيّ: { gloss: 'Israelite' },
    مُعَامَلَة: { gloss: 'treatment, dealing' },
    جَمَاد: { gloss: 'an inanimate object' },
    تَجَبَّرَ: { gloss: 'to act tyrannically, lord it over' },
    صَغِير: { gloss: 'small, young' },
    عَجْز: { gloss: 'incapacity, powerlessness' },
    وَلَّدَ: { gloss: 'to generate, engender' },
    ذُلّ: { gloss: 'abasement, humiliation' },
    عُبُودِيَّة: { gloss: 'servitude, bondage' },
    رُومَانِيّ: { gloss: 'Roman' },
    دَامَ: { gloss: 'to last, endure' },
    سُورِيَا: { gloss: 'Syria' },
    فِلَسْطِين: { gloss: 'Palestine' },
    نِفَاق: { gloss: 'hypocrisy' },
    خُنُوع: { gloss: 'submissiveness, servility' },
    تَحَيُّل: { gloss: 'trickery, deception' },
    دَهَاء: { gloss: 'cunning, guile' },
    لُجُوء: { gloss: 'resorting (to), recourse' },
    مُؤَامَرَة: { gloss: 'conspiracy' },
    سِرِّيَّة: { gloss: 'secrecy' },
  },
  paragraphs: [
    {
      en: 'The Jews -- a nation among whom prophets had been many -- submitted to the sciences prevailing in their age, and denial of the soul and all connected to it became notorious among them; they grew accustomed to interpreting everything they saw in purely materialist terms, so that nothing existed for them and no event was possible except by cause and mechanism. The miracles with which Allah honored our master Isa were thus a remedy for this narrow materialist mind, and the very need and cry of the age.',
      sentences: [
        {
          id: 'qs-v12-c03-001',
          ar: 'وَخَضَعَ الْيَهُودُ ـ وَهُمْ أُمَّةٌ كَثُرَ فِيهَا الْأَنْبِيَاءُ ـ لِلْعُلُومِ السَّائِدَةِ فِي عَصْرِهِمْ،',
          en: 'The Jews -- a nation among whom prophets had been many -- submitted to the sciences prevailing in their age,',
          tokens: [
            { surface: 'وَخَضَعَ', lemma: 'خَضَعَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to submit, yield; and submitted' },
            { surface: 'الْيَهُودُ', lemma: 'يَهُود', pos: 'noun', features: 'def.nom.pl', gloss: 'the Jews' },
            { surface: 'وَهُمْ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3mp', gloss: 'and they (being)' },
            { surface: 'أُمَّةٌ', lemma: 'أُمَّة', pos: 'noun', features: 'indef.nom', gloss: 'a nation' },
            { surface: 'كَثُرَ', lemma: 'كَثُرَ', pos: 'verb', features: 'perf.3ms', gloss: 'to become many; were many' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'among whom' },
            { surface: 'الْأَنْبِيَاءُ', lemma: 'نَبِيّ', pos: 'noun', features: 'def.nom.pl', gloss: 'the prophets' },
            { surface: 'لِلْعُلُومِ', lemma: 'عِلْم', pos: 'noun', features: 'prep+def.gen.pl', gloss: 'to the sciences' },
            { surface: 'السَّائِدَةِ', lemma: 'سَائِد', pos: 'adj', features: 'def.gen.f', gloss: 'prevailing, dominant' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'عَصْرِهِمْ', lemma: 'عَصْر', pos: 'noun', features: 'gen+3mp', gloss: 'their age' },
          ],
        },
        {
          id: 'qs-v12-c03-002',
          ar: 'وَاشْتَهَرَ فِيهِمْ إِنْكَارُ الرُّوحِ وَمَا يَتَّصِلُ بِهَا،',
          en: 'and denial of the soul and all connected to it became notorious among them,',
          tokens: [
            { surface: 'وَاشْتَهَرَ', lemma: 'اِشْتَهَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to become notorious; and became notorious' },
            { surface: 'فِيهِمْ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'إِنْكَارُ', lemma: 'إِنْكَار', pos: 'noun', features: 'nom.constr', gloss: 'the denial of' },
            { surface: 'الرُّوحِ', lemma: 'رُوح', pos: 'noun', features: 'def.gen', gloss: 'the soul' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'rel', features: 'conj+rel', gloss: 'and what' },
            { surface: 'يَتَّصِلُ', lemma: 'اِتَّصَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be connected; is connected' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'to it' },
          ],
        },
        {
          id: 'qs-v12-c03-003',
          ar: 'وَاعْتَادُوا أَنْ يُفَسِّرُوا كُلَّ مَا يَرَوْنَهُ تَفْسِيراً مَادِّياً،',
          en: 'they grew accustomed to interpreting everything they saw in purely materialist terms,',
          tokens: [
            { surface: 'وَاعْتَادُوا', lemma: 'اِعْتَادَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to become accustomed; and grew accustomed' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يُفَسِّرُوا', lemma: 'فَسَّرَ', pos: 'verb', features: 'impf.3mp', gloss: 'to interpret; interpret' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'everything' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'that which' },
            { surface: 'يَرَوْنَهُ', lemma: 'رَأَى', pos: 'verb', features: 'impf.3mp+3ms', gloss: 'to see; they see' },
            { surface: 'تَفْسِيراً', lemma: 'تَفْسِير', pos: 'noun', features: 'indef.acc', gloss: 'an interpretation' },
            { surface: 'مَادِّياً', lemma: 'مَادِّيّ', pos: 'adj', features: 'indef.acc', gloss: 'materialist' },
          ],
        },
        {
          id: 'qs-v12-c03-004',
          ar: 'فَلَا وُجُودَ لِشَيْءٍ عِنْدَهُمْ وَلَا إِمْكَانَ لِحَادِثٍ إِلَّا بِالسَّبَبِ وَالْعِلَّةِ،',
          en: 'so that nothing existed for them and no event was possible except by cause and mechanism,',
          tokens: [
            { surface: 'فَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'so no' },
            { surface: 'وُجُودَ', lemma: 'وُجُود', pos: 'noun', features: 'acc', gloss: 'existence' },
            { surface: 'لِشَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'prep+indef.gen', gloss: 'for a thing' },
            { surface: 'عِنْدَهُمْ', lemma: 'عِنْدَ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and no' },
            { surface: 'إِمْكَانَ', lemma: 'إِمْكَان', pos: 'noun', features: 'acc', gloss: 'possibility' },
            { surface: 'لِحَادِثٍ', lemma: 'حَادِث', pos: 'noun', features: 'prep+indef.gen', gloss: 'for an event' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'بِالسَّبَبِ', lemma: 'سَبَب', pos: 'noun', features: 'prep+def.gen', gloss: 'by cause' },
            { surface: 'وَالْعِلَّةِ', lemma: 'عِلَّة', pos: 'noun', features: 'conj+def.gen', gloss: 'and mechanism' },
          ],
        },
        {
          id: 'qs-v12-c03-005',
          ar: 'فَكَانَتِ الْمُعْجِزَاتُ الَّتِي أَكْرَمَ اللَّهُ بِهَا سَيِّدُنَا عِيسَى عِلاجاً لِلْعَقْلِ الْمَادِّيِّ الضَّيِّقِ،',
          en: 'The miracles with which Allah honored our master Isa were thus a remedy for this narrow materialist mind,',
          tokens: [
            { surface: 'فَكَانَتِ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be; so were' },
            { surface: 'الْمُعْجِزَاتُ', lemma: 'مُعْجِزَة', pos: 'noun', features: 'def.nom.pl', gloss: 'the miracles' },
            { surface: 'الَّتِي', lemma: 'الَّذِي', pos: 'rel', features: 'f.rel', gloss: 'which' },
            { surface: 'أَكْرَمَ', lemma: 'أَكْرَمَ', pos: 'verb', features: 'perf.3ms', gloss: 'to honor; honored' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'with (them)' },
            { surface: 'سَيِّدُنَا', lemma: 'سَيِّد', pos: 'noun', features: 'nom+1p', gloss: 'our master' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'nom', gloss: 'Isa' },
            { surface: 'عِلاجاً', lemma: 'عِلَاج', pos: 'noun', features: 'indef.acc', gloss: 'a remedy' },
            { surface: 'لِلْعَقْلِ', lemma: 'عَقْل', pos: 'noun', features: 'prep+def.gen', gloss: 'for the mind' },
            { surface: 'الْمَادِّيِّ', lemma: 'مَادِّيّ', pos: 'adj', features: 'def.gen', gloss: 'materialist' },
            { surface: 'الضَّيِّقِ', lemma: 'ضَيِّق', pos: 'adj', features: 'def.gen', gloss: 'narrow' },
          ],
        },
        {
          id: 'qs-v12-c03-006',
          ar: 'وَحَاجَةَ الْعَصْرِ وَنِدَاءَ الزَّمَانِ.',
          en: 'and the very need and cry of the age.',
          tokens: [
            { surface: 'وَحَاجَةَ', lemma: 'حَاجَة', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the need of' },
            { surface: 'الْعَصْرِ', lemma: 'عَصْر', pos: 'noun', features: 'def.gen', gloss: 'the age' },
            { surface: 'وَنِدَاءَ', lemma: 'نِدَاء', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the call of' },
            { surface: 'الزَّمَانِ', lemma: 'زَمَان', pos: 'noun', features: 'def.gen', gloss: 'the times' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا احْتَاجَ الْيَهُودُ إِلَى مُعْجِزَاتِ عِيسَى؟',
          options: ['لِأَنَّهُمُ اعْتَادُوا التَّفْسِيرَ الْمَادِّيَّ وَلَمْ يُؤْمِنُوا إِلَّا بِالسَّبَبِ وَالْعِلَّةِ', 'لِأَنَّهُمْ لَمْ يَسْمَعُوا بِالْأَنْبِيَاءِ مِنْ قَبْلُ', 'لِأَنَّهُمْ كَانُوا قَوْماً بُسَطَاءَ لَا عِلْمَ لَهُمْ'],
          answer: 0,
          qEn: "Why did the Jews need Isa's miracles?",
          optionsEn: ['Because they had grown accustomed to materialist explanation and believed only in cause and mechanism', 'Because they had never heard of prophets before', 'Because they were a simple people with no learning'],
        },
        {
          q: 'كَيْفَ وَصَفَ الْكَاتِبُ عَقْلَ الْيَهُودِ فِي ذَلِكَ الْعَصْرِ؟',
          options: ['عَقْلاً مَادِّياً ضَيِّقاً', 'عَقْلاً وَاسِعاً مُنْفَتِحاً عَلَى الْغَيْبِ', 'عَقْلاً لَا يَهْتَمُّ بِالْعُلُومِ أَصْلاً'],
          answer: 0,
          qEn: "How did the author describe the Jews' mindset in that age?",
          optionsEn: ['A narrow, materialist mind', 'A broad mind, open to the unseen', 'A mind with no interest in learning at all'],
        },
      ],
    },
    {
      en: "The Jews went to extremes in stopping at the outward and clinging to husks rather than kernels, holding to appearances rather than reality; they went to excess in venerating race and blood, and in the love of wealth and material things, and immersed themselves in worldly life to excess. Their hearts grew hard and their natures grew dry: they showed no tenderness to the weak, no compassion to the poor, and treated anyone in whose veins Israelite blood did not run as they would treat animals and dogs, or lifeless objects with no soul in them. They submitted to the strong and the rich, yet lorded it over the small and the poor; they were harsh when they held power, and pliant when they were powerless. And the life of abasement and servitude they had lived under Roman rule -- which lasted a long time in Syria and Palestine -- bred in them hypocrisy and servility, cunning and guile, and recourse to conspiracy and secrecy.",
      sentences: [
        {
          id: 'qs-v12-c03-007',
          ar: 'وَأَمْعَنَ الْيَهُودُ فِي الْوُقُوفِ عِنْدَ الظَّاهِرِ وَالتَّمَسُّكِ بِالْقُشُورِ دُونَ اللُّبَابِ،',
          en: 'The Jews went to extremes in stopping at the outward and clinging to husks rather than kernels,',
          tokens: [
            { surface: 'وَأَمْعَنَ', lemma: 'أَمْعَنَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to go to extremes; and went to extremes' },
            { surface: 'الْيَهُودُ', lemma: 'يَهُود', pos: 'noun', features: 'def.nom.pl', gloss: 'the Jews' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْوُقُوفِ', lemma: 'وُقُوف', pos: 'noun', features: 'def.gen', gloss: 'the stopping' },
            { surface: 'عِنْدَ', lemma: 'عِنْدَ', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'الظَّاهِرِ', lemma: 'ظَاهِر', pos: 'noun', features: 'def.gen', gloss: 'the outward' },
            { surface: 'وَالتَّمَسُّكِ', lemma: 'تَمَسُّك', pos: 'noun', features: 'conj+def.gen', gloss: 'and the clinging' },
            { surface: 'بِالْقُشُورِ', lemma: 'قِشْر', pos: 'noun', features: 'prep+def.gen.pl', gloss: 'to husks' },
            { surface: 'دُونَ', lemma: 'دُونَ', pos: 'prep', features: 'prep', gloss: 'rather than' },
            { surface: 'اللُّبَابِ', lemma: 'لُبَاب', pos: 'noun', features: 'def.gen', gloss: 'the core' },
          ],
        },
        {
          id: 'qs-v12-c03-008',
          ar: 'وَالتَّشَبُّثِ بِالْمَظَاهِرِ دُونَ الْحَقِيقَةِ،',
          en: 'holding to appearances rather than reality,',
          tokens: [
            { surface: 'وَالتَّشَبُّثِ', lemma: 'تَشَبُّث', pos: 'noun', features: 'conj+def.gen', gloss: 'and the clinging' },
            { surface: 'بِالْمَظَاهِرِ', lemma: 'مَظْهَر', pos: 'noun', features: 'prep+def.gen.pl', gloss: 'to appearances' },
            { surface: 'دُونَ', lemma: 'دُونَ', pos: 'prep', features: 'prep', gloss: 'rather than' },
            { surface: 'الْحَقِيقَةِ', lemma: 'حَقِيقَة', pos: 'noun', features: 'def.gen', gloss: 'reality' },
          ],
        },
        {
          id: 'qs-v12-c03-009',
          ar: 'وَغَلَوْا فِي تَقْدِيسِ الْعُنْصُرِ وَالدَّمِ،',
          en: 'they went to excess in venerating race and blood,',
          tokens: [
            { surface: 'وَغَلَوْا', lemma: 'غَلَا', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to go to excess; and went to excess' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'تَقْدِيسِ', lemma: 'تَقْدِيس', pos: 'noun', features: 'constr.gen', gloss: 'the veneration of' },
            { surface: 'الْعُنْصُرِ', lemma: 'عُنْصُر', pos: 'noun', features: 'def.gen', gloss: 'race' },
            { surface: 'وَالدَّمِ', lemma: 'دَم', pos: 'noun', features: 'conj+def.gen', gloss: 'and blood' },
          ],
        },
        {
          id: 'qs-v12-c03-010',
          ar: 'وَفِي حُبِّ الْمَالِ وَالْمَادَّةِ،',
          en: 'and in the love of wealth and material things,',
          tokens: [
            { surface: 'وَفِي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'and in' },
            { surface: 'حُبِّ', lemma: 'حُبّ', pos: 'noun', features: 'constr.gen', gloss: 'the love of' },
            { surface: 'الْمَالِ', lemma: 'مَال', pos: 'noun', features: 'def.gen', gloss: 'wealth' },
            { surface: 'وَالْمَادَّةِ', lemma: 'مَادَّة', pos: 'noun', features: 'conj+def.gen', gloss: 'and material things' },
          ],
        },
        {
          id: 'qs-v12-c03-011',
          ar: 'وَانْهَمَكُوا فِي الْحَيَاةِ انْهِمَاكاً زَائِداً،',
          en: 'and immersed themselves in worldly life to excess.',
          tokens: [
            { surface: 'وَانْهَمَكُوا', lemma: 'اِنْهَمَكَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be engrossed; and immersed themselves' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْحَيَاةِ', lemma: 'حَيَاة', pos: 'noun', features: 'def.gen', gloss: 'life' },
            { surface: 'انْهِمَاكاً', lemma: 'اِنْهِمَاك', pos: 'noun', features: 'indef.acc', gloss: 'an engrossment' },
            { surface: 'زَائِداً', lemma: 'زَائِد', pos: 'adj', features: 'indef.acc', gloss: 'excessive' },
          ],
        },
        {
          id: 'qs-v12-c03-012',
          ar: 'وَقَسَتْ قُلُوبُهُمْ،',
          en: 'Their hearts grew hard,',
          tokens: [
            { surface: 'وَقَسَتْ', lemma: 'قَسَا', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to become hard; and grew hard' },
            { surface: 'قُلُوبُهُمْ', lemma: 'قَلْب', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their hearts' },
          ],
        },
        {
          id: 'qs-v12-c03-013',
          ar: 'وَجَفَّتْ طَبَائِعُهُمْ،',
          en: 'and their natures grew dry:',
          tokens: [
            { surface: 'وَجَفَّتْ', lemma: 'جَفَّ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to dry up; and grew dry' },
            { surface: 'طَبَائِعُهُمْ', lemma: 'طَبِيعَة', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their natures' },
          ],
        },
        {
          id: 'qs-v12-c03-014',
          ar: 'فَلَا يَرِقُّونَ لِلضَّعِيفِ،',
          en: 'they showed no tenderness to the weak,',
          tokens: [
            { surface: 'فَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'so not' },
            { surface: 'يَرِقُّونَ', lemma: 'رَقَّ', pos: 'verb', features: 'impf.3mp', gloss: 'to be tender; show tenderness' },
            { surface: 'لِلضَّعِيفِ', lemma: 'ضَعِيف', pos: 'noun', features: 'prep+def.gen', gloss: 'to the weak' },
          ],
        },
        {
          id: 'qs-v12-c03-015',
          ar: 'وَلَا يَعْطِفُونَ عَلَى الْفَقِيرِ،',
          en: 'no compassion to the poor,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَعْطِفُونَ', lemma: 'عَطَفَ', pos: 'verb', features: 'impf.3mp', gloss: 'to show compassion; show compassion' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْفَقِيرِ', lemma: 'فَقِير', pos: 'noun', features: 'def.gen', gloss: 'the poor' },
          ],
        },
        {
          id: 'qs-v12-c03-016',
          ar: 'وَيُعَامِلُونَ مَنْ لَا يَجْرِي فِي عُرُوقِهِ الدَّمُ الْإِسْرَائِيلِيُّ مُعَامَلَةَ الْحَيَوَانَاتِ وَالْكِلَابِ أَوِ الْجَمَادَاتِ الَّتِي لَا رُوحَ فِيهَا،',
          en: 'and treated anyone in whose veins Israelite blood did not run as they would treat animals and dogs, or lifeless objects with no soul in them,',
          tokens: [
            { surface: 'وَيُعَامِلُونَ', lemma: 'عَامَلَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to treat; and treat' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'whoever' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَجْرِي', lemma: 'جَرَى', pos: 'verb', features: 'impf.3ms', gloss: 'to run, flow; runs' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'عُرُوقِهِ', lemma: 'عِرْق', pos: 'noun', features: 'pl.gen+3ms', gloss: 'his veins' },
            { surface: 'الدَّمُ', lemma: 'دَم', pos: 'noun', features: 'def.nom', gloss: 'the blood' },
            { surface: 'الْإِسْرَائِيلِيُّ', lemma: 'إِسْرَائِيلِيّ', pos: 'adj', features: 'def.nom', gloss: 'Israelite' },
            { surface: 'مُعَامَلَةَ', lemma: 'مُعَامَلَة', pos: 'noun', features: 'acc.constr', gloss: 'the treatment of' },
            { surface: 'الْحَيَوَانَاتِ', lemma: 'حَيَوَان', pos: 'noun', features: 'def.gen.pl', gloss: 'animals' },
            { surface: 'وَالْكِلَابِ', lemma: 'كَلْب', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and dogs' },
            { surface: 'أَوِ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'الْجَمَادَاتِ', lemma: 'جَمَاد', pos: 'noun', features: 'def.gen.pl', gloss: 'inanimate objects' },
            { surface: 'الَّتِي', lemma: 'الَّذِي', pos: 'rel', features: 'f.rel', gloss: 'which' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'رُوحَ', lemma: 'رُوح', pos: 'noun', features: 'acc', gloss: 'soul' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in them' },
          ],
        },
        {
          id: 'qs-v12-c03-017',
          ar: 'وَيَخْضَعُونَ لِلْأَقْوِيَاءِ وَالْأَغْنِيَاءِ،',
          en: 'They submitted to the strong and the rich,',
          tokens: [
            { surface: 'وَيَخْضَعُونَ', lemma: 'خَضَعَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to submit; and submit' },
            { surface: 'لِلْأَقْوِيَاءِ', lemma: 'قَوِيّ', pos: 'noun', features: 'prep+def.gen.pl', gloss: 'to the strong' },
            { surface: 'وَالْأَغْنِيَاءِ', lemma: 'غَنِيّ', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the rich' },
          ],
        },
        {
          id: 'qs-v12-c03-018',
          ar: 'وَيَتَجَبَّرُونَ عَلَى الصِّغَارِ الْفُقَرَاءِ،',
          en: 'yet lorded it over the small and the poor;',
          tokens: [
            { surface: 'وَيَتَجَبَّرُونَ', lemma: 'تَجَبَّرَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to lord it over; and lord it over' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'الصِّغَارِ', lemma: 'صَغِير', pos: 'noun', features: 'def.gen.pl', gloss: 'the small' },
            { surface: 'الْفُقَرَاءِ', lemma: 'فَقِير', pos: 'adj', features: 'def.gen.pl', gloss: 'the poor' },
          ],
        },
        {
          id: 'qs-v12-c03-019',
          ar: 'وَيَقْسُونَ عِنْدَ الْقُدْرَةِ،',
          en: 'they were harsh when they held power,',
          tokens: [
            { surface: 'وَيَقْسُونَ', lemma: 'قَسَا', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to be harsh; and are harsh' },
            { surface: 'عِنْدَ', lemma: 'عِنْدَ', pos: 'prep', features: 'prep', gloss: 'at (the time of)' },
            { surface: 'الْقُدْرَةِ', lemma: 'قُدْرَة', pos: 'noun', features: 'def.gen', gloss: 'power' },
          ],
        },
        {
          id: 'qs-v12-c03-020',
          ar: 'وَيَلِينُونَ عِنْدَ الْعَجْزِ،',
          en: 'and pliant when they were powerless.',
          tokens: [
            { surface: 'وَيَلِينُونَ', lemma: 'لَانَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to soften, be pliant; and are pliant' },
            { surface: 'عِنْدَ', lemma: 'عِنْدَ', pos: 'prep', features: 'prep', gloss: 'at (the time of)' },
            { surface: 'الْعَجْزِ', lemma: 'عَجْز', pos: 'noun', features: 'def.gen', gloss: 'powerlessness' },
          ],
        },
        {
          id: 'qs-v12-c03-021',
          ar: 'وَقَدْ وَلَّدَتْ فِيهِمْ حَيَاةُ الذُّلِّ وَالْعُبُودِيَّةِ',
          en: 'And the life of abasement and servitude bred in them',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'وَلَّدَتْ', lemma: 'وَلَّدَ', pos: 'verb', features: 'perf.3fs', gloss: 'to generate, breed; bred' },
            { surface: 'فِيهِمْ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'in them' },
            { surface: 'حَيَاةُ', lemma: 'حَيَاة', pos: 'noun', features: 'nom.constr', gloss: 'the life of' },
            { surface: 'الذُّلِّ', lemma: 'ذُلّ', pos: 'noun', features: 'def.gen', gloss: 'abasement' },
            { surface: 'وَالْعُبُودِيَّةِ', lemma: 'عُبُودِيَّة', pos: 'noun', features: 'conj+def.gen', gloss: 'and servitude' },
          ],
        },
        {
          id: 'qs-v12-c03-022',
          ar: 'الَّتِي عَاشُوهَا فِي الْحُكْمِ الرُّومَانِيِّ',
          en: 'which they had lived under Roman rule',
          tokens: [
            { surface: 'الَّتِي', lemma: 'الَّذِي', pos: 'rel', features: 'f.rel', gloss: 'which' },
            { surface: 'عَاشُوهَا', lemma: 'عَاشَ', pos: 'verb', features: 'perf.3mp+3fs', gloss: 'to live; they lived' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'under' },
            { surface: 'الْحُكْمِ', lemma: 'حُكْم', pos: 'noun', features: 'def.gen', gloss: 'the rule' },
            { surface: 'الرُّومَانِيِّ', lemma: 'رُومَانِيّ', pos: 'adj', features: 'def.gen', gloss: 'Roman' },
          ],
        },
        {
          id: 'qs-v12-c03-023',
          ar: 'الَّذِي دَامَ مُدَّةً طَوِيلَةً فِي سُورِيّا وَفِلَسْطِينَ،',
          en: 'which lasted a long time in Syria and Palestine --',
          tokens: [
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'which' },
            { surface: 'دَامَ', lemma: 'دَامَ', pos: 'verb', features: 'perf.3ms', gloss: 'to last, endure; lasted' },
            { surface: 'مُدَّةً', lemma: 'مُدَّة', pos: 'noun', features: 'indef.acc', gloss: 'a period' },
            { surface: 'طَوِيلَةً', lemma: 'طَوِيل', pos: 'adj', features: 'indef.acc.f', gloss: 'long' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'سُورِيّا', lemma: 'سُورِيَا', pos: 'proper', features: 'gen', gloss: 'Syria' },
            { surface: 'وَفِلَسْطِينَ', lemma: 'فِلَسْطِين', pos: 'proper', features: 'conj+gen', gloss: 'and Palestine' },
          ],
        },
        {
          id: 'qs-v12-c03-024',
          ar: 'النِّفَاقَ وَالْخُنُوعَ،',
          en: 'hypocrisy and servility,',
          tokens: [
            { surface: 'النِّفَاقَ', lemma: 'نِفَاق', pos: 'noun', features: 'def.acc', gloss: 'hypocrisy' },
            { surface: 'وَالْخُنُوعَ', lemma: 'خُنُوع', pos: 'noun', features: 'conj+def.acc', gloss: 'and servility' },
          ],
        },
        {
          id: 'qs-v12-c03-025',
          ar: 'وَالتَّحَيُّلَ وَالدَّهَاءَ،',
          en: 'cunning and guile,',
          tokens: [
            { surface: 'وَالتَّحَيُّلَ', lemma: 'تَحَيُّل', pos: 'noun', features: 'conj+def.acc', gloss: 'and trickery' },
            { surface: 'وَالدَّهَاءَ', lemma: 'دَهَاء', pos: 'noun', features: 'conj+def.acc', gloss: 'and cunning' },
          ],
        },
        {
          id: 'qs-v12-c03-026',
          ar: 'وَاللجوءَ إِلَى الْمُؤَامَرَةِ وَالسِّرِّيَّةِ.',
          en: 'and recourse to conspiracy and secrecy.',
          tokens: [
            { surface: 'وَاللجوءَ', lemma: 'لُجُوء', pos: 'noun', features: 'conj+def.acc', gloss: 'and recourse' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْمُؤَامَرَةِ', lemma: 'مُؤَامَرَة', pos: 'noun', features: 'def.gen', gloss: 'conspiracy' },
            { surface: 'وَالسِّرِّيَّةِ', lemma: 'سِرِّيَّة', pos: 'noun', features: 'conj+def.gen', gloss: 'and secrecy' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ الْيَهُودُ يُعَامِلُونَ مَنْ لَيْسَ مِنْهُمْ؟',
          options: ['مُعَامَلَةَ الْحَيَوَانَاتِ وَالْكِلَابِ أَوِ الْجَمَادَاتِ الَّتِي لَا رُوحَ فِيهَا', 'بِرِفْقٍ وَرَحْمَةٍ كَمَا يُعَامِلُونَ أَنْفُسَهُمْ', 'بِعَدْلٍ تَامٍّ بَيْنَهُمْ وَبَيْنَ غَيْرِهِمْ'],
          answer: 0,
          qEn: 'How did the Jews treat those who were not of them?',
          optionsEn: ['As they would treat animals and dogs, or lifeless objects with no soul in them', 'With kindness and mercy, as they treated their own people', 'With complete fairness, no different from their own people'],
        },
        {
          q: 'مَاذَا وَلَّدَتْ فِيهِمْ حَيَاةُ الذُّلِّ فِي ظِلِّ الْحُكْمِ الرُّومَانِيِّ؟',
          options: ['النِّفَاقَ وَالْخُنُوعَ وَالتَّحَيُّلَ وَالدَّهَاءَ وَاللُّجُوءَ إِلَى الْمُؤَامَرَةِ', 'الشَّجَاعَةَ وَالْقُوَّةَ وَالثِّقَةَ بِالنَّفْسِ', 'الرِّضَا وَالطُّمَأْنِينَةَ'],
          answer: 0,
          qEn: 'What did the life of abasement under Roman rule breed in them?',
          optionsEn: ['Hypocrisy, servility, trickery, cunning, and recourse to conspiracy', 'Courage, strength, and self-confidence', 'Contentment and tranquility'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَلَا',
        post: 'لِلضَّعِيفِ، وَلَا يَعْطِفُونَ عَلَى الْفَقِيرِ.',
        en: 'They show no tenderness to the weak, nor compassion to the poor.',
        options: ['يَرِقُّونَ', 'رَقَّ', 'يَرِقُّ', 'رَقُّوا'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine plural -- matches the plural subject الْيَهُودُ, habitual present.',
          'Perfect, 3rd masculine singular -- wrong tense and number.',
          'Imperfect singular -- wrong number; the subject is plural.',
          'Perfect plural -- wrong tense; the sentence narrates a habitual present, not a past event.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَقَسَتْ',
        post: 'وَجَفَّتْ طَبَائِعُهُمْ.',
        en: 'Their hearts grew hard, and their natures grew dry.',
        options: ['قُلُوبُهُمْ', 'قَلْبُهُمْ', 'قُلُوبَهُمْ', 'قُلُوبِهِمْ'],
        answer: 0,
        rationales: [
          'Nominative plural -- subject of قَسَتْ, matching the printed sentence.',
          'Singular -- wrong number; the sentence speaks of "hearts," plural.',
          'Accusative -- wrong case; the subject of a verb takes the nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَيُعَامِلُونَ مَنْ لَا يَجْرِي فِي عُرُوقِهِ الدَّمُ الْإِسْرَائِيلِيُّ',
        post: 'الْحَيَوَانَاتِ وَالْكِلَابِ.',
        en: 'And they treat anyone with no Israelite blood as they would treat animals and dogs.',
        options: ['مُعَامَلَةَ', 'مُعَامَلَةً', 'مُعَامَلَةٌ', 'مُعَامَلَةِ'],
        answer: 0,
        rationales: [
          'Accusative, construct -- cognate object of يُعَامِلُونَ and first term of an iḍāfa with الْحَيَوَانَاتِ.',
          'Accusative, indefinite -- wrong state; a construct head takes no tanwīn.',
          'Nominative -- wrong case; a cognate object is accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَخْضَعُ الْيَهُودُ لِلْأَقْوِيَاءِ',
        pre: '',
        post: 'لِلْأَقْوِيَاءِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَخْضَعُ', 'يَخْضَعُ', 'تَخْضَعُ', 'نَخْضَعُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted.',
          '2nd masculine singular -- wrong person.',
          '1st plural -- wrong number; the target is singular.',
        ],
      },
      {
        type: 'shift',
        base: 'يَخْضَعُ الْيَهُودُ لِلْأَقْوِيَاءِ',
        pre: '',
        post: 'لِلْأَقْوِيَاءِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَخْضَعُ', 'يَخْضَعُ', 'تَخْضَعُ', 'أَخْضَعُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted.',
          '2nd masculine singular -- wrong person.',
          '1st singular -- wrong number; the target is "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَخْضَعُ الْيَهُودُ لِلْأَقْوِيَاءِ',
        pre: '',
        post: 'لِلْأَقْوِيَاءِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَخْضَعُ', 'يَخْضَعُ', 'أَخْضَعُ', 'نَخْضَعُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- the base form, not shifted.',
          '1st singular -- wrong person.',
          '1st plural -- wrong person and number.',
        ],
      },
    ],
  },
};

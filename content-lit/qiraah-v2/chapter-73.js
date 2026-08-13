// القراءة الراشدة, volume two, chapter 73 (printed heading "٧٣") --
// شِيْرُشَاه السُّوْرِيّ سُلْطَانُ الْهِنْدِ (٢) -- "Sher Shah al-Suri,
// Sultan of India (2)".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 241-242. Direct
// continuation of own ch72 (part 1): opens mid-topic on his great road-
// and-caravanserai building program (confirmed by inspecting p.241 itself,
// per own ch72's own header note), and closes with his death notice --
// the FINAL two pages of narrative content in the entire book. Printed
// pages 243-247 are the book's own back-of-book index/table of contents
// and are not chapter content; this is the last chapter of "al-Qira'atu
// ar-Rashida", volume two. The chapter ends with the book's own printed
// source citation, "(الإعلام بمن في تاريخ الهند من الأعلام) للعلامة عبد
// الحي الحسني" (naming this excerpt's source, al-'Allama 'Abd al-Hayy
// al-Hasani's "al-I'lam bi-man fi Tarikh al-Hind min al-A'lam"), followed
// by the "٭ ٭ ٭" divider -- neither the citation line nor the divider is
// tokenized, matching the project's standing convention for this same
// divider at the end of own ch68/ch72.
//
// Paragraphs: 3 blank-line-separated blocks, following the printed
// indentation exactly. P1 (his great road from Sonargaon, in Bengal, to
// Nilab on the Indus, with a caravanserai, mosque, and staffed postal
// relay at every kuroh, and fruit trees along it) is entirely on p.241.
// P2 (a second planted, garrisoned road from Agra to Mandu, and the
// proverbial security of his reign) opens on p.241 and finishes on
// p.242. P3 (his regret at having attained the throne only in old age,
// his unfulfilled wish to secure the pilgrim road to Mecca with Ottoman
// help, and his death on 12 Rabi' al-Awwal 952 AH) is entirely on p.242,
// and is the book's own closing paragraph of narrative prose.
//
// Sentence segmentation follows the project's standing convention of
// splitting at every ، . ؛ ! and ؟, never at a colon before reported
// speech: qr2-73-019 ("وَيَقُوْلُ: إِنْ سَاعَدَنِي الزَّمَانُ...") keeps
// the colon attached to the first clause of Sher Shah's own quoted wish,
// exactly as own ch72's two colon-introduced quotations were handled.
// That quotation (qr2-73-019 through qr2-73-022) is Sher Shah's own words
// wishing to enlist Ottoman ("Roman") naval help to clear the pilgrim
// road to Mecca of bandits -- not a Qur'an/hadith citation, so no
// sentence needed to be combined past the 9-token Build-stage window for
// that reason; it simply runs long on its own, same as own ch68's
// graveside-supplication precedent.
//
// Footnoted vocabulary (Nadwi's own glosses, captured as book_note):
// الأَوْبَاش (p.242 fn.2, "the riffraff, the rabble and lowlifes"). The
// two place-name footnotes on these pages -- آكْرَةْ/Agra (p.241 fn.1,
// identifying it as the later Mughal capital, home to the Taj Mahal) and
// مَنْدُوْ/Mandu (p.242 fn.1, former capital of the Ghuri dynasty) -- are
// folded into the token-level `gloss` on those proper nouns instead,
// matching how place-name footnotes were handled throughout own ch72 and
// own ch68.
//
// Reused from own ch72 (this chapter's direct predecessor, same subject):
// the proper noun شِيْرُشَاه itself; and the content lemmas سأل، أعطى،
// أرشد -> هدى family are not reused here, but عسكر، سلاح (unused)، سأل،
// ساعد->مساعدة، رتبة's root ر ت ب (see homograph note below), and the
// proper noun السِّنْد (own ch68's lemma, already reused once by own
// ch72) all recur as already-known vocabulary and are tagged but not
// re-added to newWords. غَرَسَ and مُثْمِر (own ch63/ch68) and شَجَر (own
// ch63) also recur here for the second planted road, again already known.
//
// Homograph (own-chapter suffix-2 convention, cf. own ch72's ورد٢/قال٢):
// عَيَّنَ "to appoint, designate" (qr2-73-010, lemma 'عين٢') is spelled
// identically to the عَيْن "spring" (and "eye") from own ch64's newWords
// -- unrelated sense, same root ع ي ن, tagged with the ٢ suffix to keep
// it a distinct dictionary entry. الْفُرْسِ "Persia, the Persians"
// (qr2-73-019, lemma 'فرس٢', pos proper) is likewise a homograph of the
// already-known common noun فَرَس "horse" (qr2-73-010's فَرَسَيْنِ uses
// the plain, already-known lemma 'فرس') -- an unrelated ethnonym sense,
// tagged separately as 'فرس٢' rather than reusing the noun's lemma so
// that "mark as unknown" tracking cannot conflate the two.
//
// Proper nouns: سُنَارْ كَاؤُنْ (Sonargaon, a historic city near Dhaka,
// medieval capital of Bengal, now in Bangladesh -- 2-word name, both
// words tagged with the same lemma per own ch72's جَوَنْ بُوْر
// convention), بَنْكَالَهْ (Bengal), نِيْلَاب (Nilab/Attock, a town on
// the Indus marking the road's far end, now in Pakistan), آكْرَةْ
// (Agra), مَنْدُوْ (Mandu), الرُّوْم (Rome/Byzantium -- by Sher Shah's
// day a standing byword in Indo-Persian usage for the Ottoman Sultan,
// who held the old Byzantine lands and the sea route to the Hijaz;
// glossed accordingly at the token), الْفُرْس (Persia, see homograph note
// above), رَبِيْع الأَوَّل (the third month of the Islamic calendar), and
// السِّنْد, الْهِنْد, مَكَّة (reused, already known).
//
// Content words checked against the 536-lemma index and own
// ch61/62/63/64/66/68/69/70/71/72's newWords but judged too marginal or
// transparent to add to the teaching list (still tagged correctly at the
// token level): عَهْد ("reign, era" -- appears once, low-yield), كِبَر
// (derived from the already-known كَبِيْر, "old age" in the idiom كِبَرِ
// سِنِّه), مَبْلَغ (derived from the already-known بَلَغَ, "an extent, a
// degree"), قَطَعَ (verb, "to cut off, waylay" -- own ch72 already taught
// the related noun قُطَّاع "highway robbers, road-cutters", so the plain
// verb here reuses that same concept rather than being separately
// taught), and the spelled-out compound numerals خَمْسُمِئَة/
// ثَلَاثِمِئَة (following the precedent set by own ch65/ch70, which
// tagged أَلْف and مِئَة at the token level without adding either to
// newWords).
export const CHAPTER = {
  id: 'ch73',
  number: 73,
  title: { ar: 'شِيْرُشَاه السُّوْرِيّ سُلْطَانُ الْهِنْدِ', en: 'Sher Shah Suri, Sultan of India (2)' },
  pages: [241, 242],
  newWords: [ 'كروه', 'رباط', 'رتب', 'هندك', 'مقرئ', 'عين٢',
    'سلطة', 'أوباش', 'مبارك', 'أمهل'
  ],
  lemmas: {
    'كروه': { gloss: 'a kuroh (a traditional South Asian unit of distance, roughly two miles)' },
    'رباط': { gloss: 'a caravanserai, a roadside hospice/inn for travelers' },
    'رتب': { gloss: 'to arrange, set in order; to provide, allocate' },
    'هندك': { gloss: 'Hindus, the non-Muslim population of India (sg. هِنْدَكِيّ)' },
    'مقرئ': { gloss: 'a Qur’an-reciter' },
    'عين٢': { gloss: 'to appoint, designate (homograph of عَيْن "eye, spring" from own ch64 -- unrelated sense, same root)' },
    'سلطة': { gloss: 'power, authority, rule' },
    'أوباش': { gloss: 'riffraff, rabble', book_note: 'الأَوْبَاش: الأَخْلَاط وَالسِّفْلَة.' },
    'مبارك': { gloss: 'blessed' },
    'أمهل': { gloss: 'to grant respite, allow time' }
  },
  paragraphs: [
    {
      en: 'Among his achievements was that he built a great road from Sonargaon -- the farthest reach of the lands of Bengal -- to the waters of Nilab in the land of Sindh, a distance of one thousand five hundred kuroh (a kuroh being, by the reckoning of the people of India, two miles). At every kuroh he founded a caravanserai and arranged food there for the people of Islam generally and for the Hindus especially; he founded a mosque of baked brick and plaster at every kuroh, and appointed a muezzin, a Qur’an-reciter, and an imam at every mosque; and he stationed two horses for the postal relay at every caravanserai, so that news would be conveyed to him every day, all the way from Nilab to the farthest reach of Bengal. He also planted fruit-bearing trees along both sides of the great road, so that the traveler could shade himself beneath them and eat from them.',
      sentences: [
        {
          id: 'qr2-73-001',
          ar: 'وَمِنْ مَآثِرِهِ أَنَّهُ أَسَّسَ شَارِعاً كَبِيْراً مِنْ «سُنَارْ كَاؤُنْ» أَقْصَىٰ بِلَادِ بَنْكَالَهْ ،',
          en: 'Among his achievements was that he built a great road from Sonargaon -- the farthest reach of the lands of Bengal,',
          tokens: [
            { surface: 'وَمِنْ', lemma: 'من', pos: 'prep', features: 'conj', gloss: 'and among' },
            { surface: 'مَآثِرِهِ', lemma: 'أثر', pos: 'noun', features: 'gen.pl+3ms', root: 'أ ث ر', gloss: 'his achievements, distinguishing marks' },
            { surface: 'أَنَّهُ', lemma: 'أن', pos: 'part', features: '3ms', gloss: 'that he' },
            { surface: 'أَسَّسَ', lemma: 'أسس', pos: 'verb', features: 'perf.3ms', root: 'أ س س', gloss: 'to found, establish' },
            { surface: 'شَارِعاً', lemma: 'شارع', pos: 'noun', features: 'indef.acc', gloss: 'a road, street' },
            { surface: 'كَبِيْراً', lemma: 'كبير', pos: 'adj', features: 'indef.acc', gloss: 'great, large' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'سُنَارْ', lemma: 'سنارکاؤن', pos: 'proper', gloss: 'Sonargaon (a historic city near Dhaka, medieval capital of Bengal, now in Bangladesh) -- 1st word of the name' },
            { surface: 'كَاؤُنْ', lemma: 'سنارکاؤن', pos: 'proper', gloss: '(name continued: "-gaon")' },
            { surface: 'أَقْصَىٰ', lemma: 'أقصى', pos: 'adj', features: 'gen.constr', root: 'ق ص و', gloss: 'the farthest, utmost extremity of' },
            { surface: 'بِلَادِ', lemma: 'بلد', pos: 'noun', features: 'gen.constr.pl', gloss: 'the lands of' },
            { surface: 'بَنْكَالَهْ', lemma: 'بنكاله', pos: 'proper', gloss: 'Bengal (a region of the Indian subcontinent)' },
          ],
        },
        {
          id: 'qr2-73-002',
          ar: 'إِلَىٰ مَاءِ «نِيْلَاب» مِنْ أَرْضِ السِّنْدِ ،',
          en: 'to the waters of Nilab in the land of Sindh,',
          tokens: [
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'مَاءِ', lemma: 'ماء', pos: 'noun', features: 'gen.constr', gloss: 'the water(s) of' },
            { surface: 'نِيْلَاب', lemma: 'نيلاب', pos: 'proper', gloss: 'Nilab (a town on the Indus River near Attock, now in Pakistan -- marking the road’s far northwestern end)' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'of, in' },
            { surface: 'أَرْضِ', lemma: 'أرض', pos: 'noun', features: 'gen.constr', gloss: 'the land of' },
            { surface: 'السِّنْدِ', lemma: 'سند', pos: 'proper', features: 'def.gen', gloss: 'Sindh (a region, now in Pakistan)' },
          ],
        },
        {
          id: 'qr2-73-003',
          ar: 'مَسَافَتُهَا أَلْفٌ وَخَمْسُمِئَةِ كُرُوْهٍ ،',
          en: 'a distance of one thousand five hundred kuroh,',
          tokens: [
            { surface: 'مَسَافَتُهَا', lemma: 'مسافة', pos: 'noun', features: 'nom+3fs', root: 'س ف ر', gloss: 'its distance' },
            { surface: 'أَلْفٌ', lemma: 'ألف', pos: 'num', features: 'indef.nom', gloss: 'a thousand' },
            { surface: 'وَخَمْسُمِئَةِ', lemma: 'خمسمئة', pos: 'num', features: 'conj+gen.constr', gloss: 'and five hundred' },
            { surface: 'كُرُوْهٍ', lemma: 'كروه', pos: 'noun', features: 'indef.gen', gloss: 'kuroh (unit of distance)' },
          ],
        },
        {
          id: 'qr2-73-004',
          ar: 'وَالْكُرُوْهُ فِيْ عُرْفِ أَهْلِ الْهِنْدِ مِيْلَانِ ،',
          en: '(a kuroh being, by the reckoning of the people of India, two miles),',
          tokens: [
            { surface: 'وَالْكُرُوْهُ', lemma: 'كروه', pos: 'noun', features: 'conj+def.nom', gloss: 'and the kuroh' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in, according to' },
            { surface: 'عُرْفِ', lemma: 'عرف', pos: 'noun', features: 'gen.constr', gloss: 'the custom, usage of' },
            { surface: 'أَهْلِ', lemma: 'أهل', pos: 'noun', features: 'gen.constr', gloss: 'the people of' },
            { surface: 'الْهِنْدِ', lemma: 'هند', pos: 'proper', features: 'def.gen', gloss: 'India' },
            { surface: 'مِيْلَانِ', lemma: 'ميل', pos: 'noun', features: 'indef.nom.du', gloss: 'two miles' },
          ],
        },
        {
          id: 'qr2-73-005',
          ar: 'وَأَسَّسَ فِيْ كُلِّ كُرُوْهٍ رِبَاطاً ،',
          en: 'At every kuroh he founded a caravanserai,',
          tokens: [
            { surface: 'وَأَسَّسَ', lemma: 'أسس', pos: 'verb', features: 'conj+perf.3ms', root: 'أ س س', gloss: 'to found, establish' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in, at' },
            { surface: 'كُلِّ', lemma: 'كل', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'كُرُوْهٍ', lemma: 'كروه', pos: 'noun', features: 'indef.gen', gloss: 'kuroh' },
            { surface: 'رِبَاطاً', lemma: 'رباط', pos: 'noun', features: 'indef.acc', root: 'ر ب ط', gloss: 'a caravanserai, roadside hospice' },
          ],
        },
        {
          id: 'qr2-73-006',
          ar: 'وَرَتَّبَ بِهِ طَعَاماً لِأَهْلِ الْإِسْلَامِ عَامَّةً وَلِلْهَنَادِكِ خَاصَّةً ،',
          en: 'and arranged food there for the people of Islam generally and for the Hindus especially,',
          tokens: [
            { surface: 'وَرَتَّبَ', lemma: 'رتب', pos: 'verb', features: 'conj+perf.3ms', root: 'ر ت ب', gloss: 'to arrange, set up, provide' },
            { surface: 'بِهِ', lemma: 'ب', pos: 'prep', features: '3ms', gloss: 'therein, with it' },
            { surface: 'طَعَاماً', lemma: 'طعام', pos: 'noun', features: 'indef.acc', gloss: 'food' },
            { surface: 'لِأَهْلِ', lemma: 'أهل', pos: 'noun', features: 'gen.constr', gloss: 'for the people of' },
            { surface: 'الْإِسْلَامِ', lemma: 'إسلام', pos: 'noun', features: 'def.gen', gloss: 'Islam' },
            { surface: 'عَامَّةً', lemma: 'عام', pos: 'adv', features: 'indef.acc', gloss: 'generally, universally' },
            { surface: 'وَلِلْهَنَادِكِ', lemma: 'هندك', pos: 'noun', features: 'conj+def.gen.pl', root: 'ه ن د', gloss: 'and for the Hindus' },
            { surface: 'خَاصَّةً', lemma: 'خاص', pos: 'adv', features: 'indef.acc', gloss: 'especially, particularly' },
          ],
        },
        {
          id: 'qr2-73-007',
          ar: 'وَأَسَّسَ مَسْجِداً فِيْ كُلِّ كُرُوْهٍ مِنَ الآجُرِّ وَالْجَصِّ ،',
          en: 'he founded a mosque of baked brick and plaster at every kuroh,',
          tokens: [
            { surface: 'وَأَسَّسَ', lemma: 'أسس', pos: 'verb', features: 'conj+perf.3ms', root: 'أ س س', gloss: 'to found, establish' },
            { surface: 'مَسْجِداً', lemma: 'مسجد', pos: 'noun', features: 'indef.acc', gloss: 'a mosque' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in, at' },
            { surface: 'كُلِّ', lemma: 'كل', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'كُرُوْهٍ', lemma: 'كروه', pos: 'noun', features: 'indef.gen', gloss: 'kuroh' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'of, from' },
            { surface: 'الآجُرِّ', lemma: 'آجر', pos: 'noun', features: 'def.gen', root: 'أ ج ر', gloss: 'baked brick' },
            { surface: 'وَالْجَصِّ', lemma: 'جص', pos: 'noun', features: 'conj+def.gen', root: 'ج ص ص', gloss: 'and plaster, gypsum' },
          ],
        },
        {
          id: 'qr2-73-008',
          ar: 'وَوَظَّفَ الْمُؤَذِّنَ ،',
          en: 'and appointed the muezzin,',
          tokens: [
            { surface: 'وَوَظَّفَ', lemma: 'وظف', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to appoint, employ' },
            { surface: 'الْمُؤَذِّنَ', lemma: 'مؤذن', pos: 'noun', features: 'def.acc', root: 'أ ذ ن', gloss: 'the muezzin' },
          ],
        },
        {
          id: 'qr2-73-009',
          ar: 'وَالْمُقْرِىءَ وَالإِمَامَ فِيْ كُلِّ مَسْجِدٍ ،',
          en: 'a Qur’an-reciter, and an imam at every mosque,',
          tokens: [
            { surface: 'وَالْمُقْرِىءَ', lemma: 'مقرئ', pos: 'noun', features: 'conj+def.acc', root: 'ق ر أ', gloss: 'and the Qur’an-reciter' },
            { surface: 'وَالإِمَامَ', lemma: 'إمام', pos: 'noun', features: 'conj+def.acc', gloss: 'and the imam' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'كُلِّ', lemma: 'كل', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'مَسْجِدٍ', lemma: 'مسجد', pos: 'noun', features: 'indef.gen', gloss: 'mosque' },
          ],
        },
        {
          id: 'qr2-73-010',
          ar: 'وَعَيَّنَ فِيْ كُلِّ رِبَاطٍ فَرَسَيْنِ لِلْبَرِيْدِ ،',
          en: 'and he stationed two horses for the postal relay at every caravanserai,',
          tokens: [
            { surface: 'وَعَيَّنَ', lemma: 'عين٢', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ي ن', gloss: 'to appoint, designate' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in, at' },
            { surface: 'كُلِّ', lemma: 'كل', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'رِبَاطٍ', lemma: 'رباط', pos: 'noun', features: 'indef.gen', gloss: 'caravanserai' },
            { surface: 'فَرَسَيْنِ', lemma: 'فرس', pos: 'noun', features: 'indef.acc.du', gloss: 'two horses' },
            { surface: 'لِلْبَرِيْدِ', lemma: 'بريد', pos: 'noun', features: 'def.gen', gloss: 'for the postal relay' },
          ],
        },
        {
          id: 'qr2-73-011',
          ar: 'فَكَانَ تُرْفَعُ إِلَيْهِ أَخْبَارُ نِيْلَاب إِلَىٰ أَقْصَىٰ بِلَادِ بَنْكَالَهْ كُلَّ يَوْمٍ ،',
          en: 'so that news would be conveyed to him every day, all the way from Nilab to the farthest reach of Bengal,',
          tokens: [
            { surface: 'فَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be (auxiliary: "would be")' },
            { surface: 'تُرْفَعُ', lemma: 'رفع', pos: 'verb', features: 'impf.pass.3fs', gloss: 'to be conveyed, raised' },
            { surface: 'إِلَيْهِ', lemma: 'إلى', pos: 'prep', features: '3ms', gloss: 'to him' },
            { surface: 'أَخْبَارُ', lemma: 'خبر', pos: 'noun', features: 'nom.constr.pl', gloss: 'the news of' },
            { surface: 'نِيْلَاب', lemma: 'نيلاب', pos: 'proper', gloss: 'Nilab' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to, as far as' },
            { surface: 'أَقْصَىٰ', lemma: 'أقصى', pos: 'adj', features: 'gen.constr', root: 'ق ص و', gloss: 'the farthest of' },
            { surface: 'بِلَادِ', lemma: 'بلد', pos: 'noun', features: 'gen.constr.pl', gloss: 'the lands of' },
            { surface: 'بَنْكَالَهْ', lemma: 'بنكاله', pos: 'proper', gloss: 'Bengal' },
            { surface: 'كُلَّ', lemma: 'كل', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'يَوْمٍ', lemma: 'يوم', pos: 'noun', features: 'indef.gen', gloss: 'day' },
          ],
        },
        {
          id: 'qr2-73-012',
          ar: 'وَغَرَسَ الأَشْجَارَ الْمُثْمِرَةَ بِجَانِبَيِ الشَّارِعِ الْكَبِيْرِ ،',
          en: 'He also planted fruit-bearing trees along both sides of the great road,',
          tokens: [
            { surface: 'وَغَرَسَ', lemma: 'غرس', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to plant' },
            { surface: 'الأَشْجَارَ', lemma: 'شجر', pos: 'noun', features: 'def.acc.pl', gloss: 'the trees' },
            { surface: 'الْمُثْمِرَةَ', lemma: 'مثمر', pos: 'adj', features: 'def.acc', gloss: 'fruit-bearing' },
            { surface: 'بِجَانِبَيِ', lemma: 'جانب', pos: 'noun', features: 'gen.constr.du', gloss: 'on the two sides of' },
            { surface: 'الشَّارِعِ', lemma: 'شارع', pos: 'noun', features: 'def.gen', gloss: 'the road' },
            { surface: 'الْكَبِيْرِ', lemma: 'كبير', pos: 'adj', features: 'def.gen', gloss: 'the great' },
          ],
        },
        {
          id: 'qr2-73-013',
          ar: 'فَيَسْتَظِلُّ بِهَا الْمُسَافِرُ وَيَأْكُلُ مِنْهَا .',
          en: 'so that the traveler could shade himself beneath them and eat from them.',
          tokens: [
            { surface: 'فَيَسْتَظِلُّ', lemma: 'استظل', pos: 'verb', features: 'conj+impf.3ms', root: 'ظ ل ل', gloss: 'to shade oneself, take shelter in the shade' },
            { surface: 'بِهَا', lemma: 'ب', pos: 'prep', features: '3fs', gloss: 'with them, by them' },
            { surface: 'الْمُسَافِرُ', lemma: 'سافر', pos: 'noun', features: 'def.nom', gloss: 'the traveler' },
            { surface: 'وَيَأْكُلُ', lemma: 'أكل', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to eat' },
            { surface: 'مِنْهَا', lemma: 'من', pos: 'prep', features: '3fs', gloss: 'from them' },
          ],
        },
      ],
      checks: [
        {
          q: 'مِنْ أَيْنَ إِلَىٰ أَيْنَ أَسَّسَ شِيْرُشَاهَ شَارِعاً كَبِيْراً؟',
          options: ['مِنْ سُنَارْ كَاؤُنْ إِلَىٰ نِيْلَاب', 'مِنْ دِهْلِيْ إِلَىٰ آكْرَةْ', 'مِنْ مَكَّةَ إِلَىٰ الْمَدِيْنَةِ'],
          answer: 0,
          qEn: 'From where to where did Sher Shah build a great road?',
          optionsEn: ['From Sonargaon to Nilab', 'From Delhi to Agra', 'From Mecca to Medina'],
        },
        {
          q: 'لِمَنْ رَتَّبَ شِيْرُشَاهَ الطَّعَامَ فِي الرِّبَاطَاتِ؟',
          options: ['لِأَهْلِ الْإِسْلَامِ عَامَّةً وَلِلْهَنَادِكِ خَاصَّةً', 'لِلْجُنُوْدِ فَقَطْ', 'لِلتُّجَّارِ فَقَطْ'],
          answer: 0,
          qEn: 'For whom did Sher Shah arrange food in the caravanserais?',
          optionsEn: ['For the Muslims generally and for the Hindus especially', 'For the soldiers only', 'For the merchants only'],
        },
      ],
    },
    {
      en: 'Likewise he planted fruit-bearing trees along the road from Agra to Mandu -- a distance of three hundred kuroh between them -- and founded caravanserais and mosques there too. Security reached such a degree in his reign that no one could stretch out a hand in the desert toward a lone old woman carrying her belongings.',
      sentences: [
        {
          id: 'qr2-73-014',
          ar: 'وَكَذٰلِكَ غَرَسَ الأَشْجَارَ الْمُثْمِرَةَ عَلَىٰ الطَّرِيْقِ مِنْ «آكْرَةْ» إِلَىٰ «مَنْدُوْ» ،',
          en: 'Likewise he planted fruit-bearing trees along the road from Agra to Mandu,',
          tokens: [
            { surface: 'وَكَذٰلِكَ', lemma: 'كذلك', pos: 'adv', features: 'conj', gloss: 'and likewise' },
            { surface: 'غَرَسَ', lemma: 'غرس', pos: 'verb', features: 'perf.3ms', gloss: 'to plant' },
            { surface: 'الأَشْجَارَ', lemma: 'شجر', pos: 'noun', features: 'def.acc.pl', gloss: 'the trees' },
            { surface: 'الْمُثْمِرَةَ', lemma: 'مثمر', pos: 'adj', features: 'def.acc', gloss: 'fruit-bearing' },
            { surface: 'عَلَىٰ', lemma: 'على', pos: 'prep', gloss: 'on, along' },
            { surface: 'الطَّرِيْقِ', lemma: 'طريق', pos: 'noun', features: 'def.gen', gloss: 'the road' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'آكْرَةْ', lemma: 'اكرة', pos: 'proper', gloss: 'Agra (a city in Uttar Pradesh, India, later the Mughal capital and site of the Taj Mahal)' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'مَنْدُوْ', lemma: 'مندو', pos: 'proper', gloss: 'Mandu (an old Indian city, former capital of the Ghuri dynasty, known for its splendid ruins, mosques, and tombs)' },
          ],
        },
        {
          id: 'qr2-73-015',
          ar: 'وَبَيْنَهُمَا مَسَافَةُ ثَلَاثِمِئَةِ كُرُوْهٍ ،',
          en: 'a distance of three hundred kuroh between them,',
          tokens: [
            { surface: 'وَبَيْنَهُمَا', lemma: 'بين', pos: 'prep', features: 'conj+3md', gloss: 'and between the two of them' },
            { surface: 'مَسَافَةُ', lemma: 'مسافة', pos: 'noun', features: 'nom.constr', root: 'س ف ر', gloss: 'the distance of' },
            { surface: 'ثَلَاثِمِئَةِ', lemma: 'ثلاثمئة', pos: 'num', features: 'gen.constr', gloss: 'three hundred' },
            { surface: 'كُرُوْهٍ', lemma: 'كروه', pos: 'noun', features: 'indef.gen', gloss: 'kuroh' },
          ],
        },
        {
          id: 'qr2-73-016',
          ar: 'وَأَسَّسَ الرِّبَاطَاتِ وَالْمَسَاجِدَ ،',
          en: 'and founded caravanserais and mosques there too,',
          tokens: [
            { surface: 'وَأَسَّسَ', lemma: 'أسس', pos: 'verb', features: 'conj+perf.3ms', root: 'أ س س', gloss: 'to found, establish' },
            { surface: 'الرِّبَاطَاتِ', lemma: 'رباط', pos: 'noun', features: 'def.acc.pl', gloss: 'the caravanserais' },
            { surface: 'وَالْمَسَاجِدَ', lemma: 'مسجد', pos: 'noun', features: 'conj+def.acc.pl', gloss: 'and the mosques' },
          ],
        },
        {
          id: 'qr2-73-017',
          ar: 'وَبَلَغَ الأَمْنُ وَالأَمَانُ فِيْ عَهْدِهِ مَبْلَغاً لَا يَسْتَطِيْعُ أَحَدٌ أَنْ يَمُدَّ يَدَهُ فِي الصَّحْرَاءِ إِلَىٰ عَجُوْزٍ تَحْمِلُ مَتَاعَهَا .',
          en: 'Security reached such a degree in his reign that no one could stretch out a hand in the desert toward a lone old woman carrying her belongings.',
          tokens: [
            { surface: 'وَبَلَغَ', lemma: 'بلغ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to reach, attain' },
            { surface: 'الأَمْنُ', lemma: 'أمن', pos: 'noun', features: 'def.nom', root: 'أ م ن', gloss: 'security' },
            { surface: 'وَالأَمَانُ', lemma: 'أمان', pos: 'noun', features: 'conj+def.nom', root: 'أ م ن', gloss: 'and safety' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'عَهْدِهِ', lemma: 'عهد', pos: 'noun', features: 'gen+3ms', gloss: 'his reign, era' },
            { surface: 'مَبْلَغاً', lemma: 'مبلغ', pos: 'noun', features: 'indef.acc', gloss: 'such an extent, a degree' },
            { surface: 'لَا', lemma: 'لا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَسْتَطِيْعُ', lemma: 'استطاع', pos: 'verb', features: 'impf.3ms', gloss: 'to be able' },
            { surface: 'أَحَدٌ', lemma: 'أحد', pos: 'noun', features: 'indef.nom', gloss: 'anyone, someone' },
            { surface: 'أَنْ', lemma: 'أن', pos: 'part', gloss: 'that' },
            { surface: 'يَمُدَّ', lemma: 'مد', pos: 'verb', features: 'subj.3ms', gloss: 'to extend, stretch out' },
            { surface: 'يَدَهُ', lemma: 'يد', pos: 'noun', features: 'acc+3ms', gloss: 'his hand' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'الصَّحْرَاءِ', lemma: 'صحراء', pos: 'noun', features: 'def.gen', gloss: 'the desert' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'toward' },
            { surface: 'عَجُوْزٍ', lemma: 'عجوز', pos: 'noun', features: 'indef.gen', root: 'ع ج ز', gloss: 'an old woman' },
            { surface: 'تَحْمِلُ', lemma: 'حمل', pos: 'verb', features: 'impf.3fs', gloss: 'to carry' },
            { surface: 'مَتَاعَهَا', lemma: 'متاع', pos: 'noun', features: 'acc+3fs', root: 'م ت ع', gloss: 'her belongings, goods' },
          ],
        },
      ],
      checks: [
        {
          q: 'إِلَىٰ أَيِّ حَدٍّ بَلَغَ الأَمْنُ فِيْ عَهْدِ شِيْرُشَاهَ؟',
          options: ['لَا يَسْتَطِيْعُ أَحَدٌ أَنْ يَمُدَّ يَدَهُ إِلَىٰ مَتَاعِ عَجُوْزٍ فِي الصَّحْرَاءِ', 'كَانَ النَّاسُ يَخَافُوْنَ السَّفَرَ لَيْلاً', 'كَانَ اللُّصُوْصُ كَثِيْرِيْنَ فِي الطُّرُقِ'],
          answer: 0,
          qEn: 'To what degree did security reach in Sher Shah’s reign?',
          optionsEn: ['No one could stretch out a hand toward an old woman’s belongings in the desert', 'People were afraid to travel at night', 'Robbers were numerous on the roads'],
        },
      ],
    },
    {
      en: 'Sher Shah used to lament that he had attained power only in his old age, and would say: "If time assists me, I will send a letter to the great one of Rome and ask him to march with his troops to the land of the Persians, while we march from here to that land; then, with the help of the King of Rome, we will drive off the worst of the rabble who waylay the pilgrims\' road, and open a safe road to blessed Mecca." But his appointed time gave him no respite, and he died before he could reach that wish -- and that was on the twelfth of Rabi\' al-Awwal, in the year 952 AH.',
      sentences: [
        {
          id: 'qr2-73-018',
          ar: 'وَكَانَ شِيْرُ شَاهَ يَتَأَسَّفُ عَلَىٰ أَنَّهُ نَالَ السُّلْطَةَ فِيْ كِبَرِ سِنِّهِ ،',
          en: 'Sher Shah used to lament that he had attained power only in his old age,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be (auxiliary: "used to")' },
            { surface: 'شِيْرُ', lemma: 'شيرشاه', pos: 'proper', gloss: 'Sher Shah -- 1st word of the name' },
            { surface: 'شَاهَ', lemma: 'شيرشاه', pos: 'proper', gloss: '(name continued: "Shah")' },
            { surface: 'يَتَأَسَّفُ', lemma: 'تأسف', pos: 'verb', features: 'impf.3ms', gloss: 'to regret, lament' },
            { surface: 'عَلَىٰ', lemma: 'على', pos: 'prep', gloss: 'over, that' },
            { surface: 'أَنَّهُ', lemma: 'أن', pos: 'part', features: '3ms', gloss: 'that he' },
            { surface: 'نَالَ', lemma: 'نال', pos: 'verb', features: 'perf.3ms', gloss: 'to attain' },
            { surface: 'السُّلْطَةَ', lemma: 'سلطة', pos: 'noun', features: 'def.acc', root: 'س ل ط', gloss: 'power, rule' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'كِبَرِ', lemma: 'كبر', pos: 'noun', features: 'gen.constr', gloss: 'the advanced age of' },
            { surface: 'سِنِّهِ', lemma: 'سن', pos: 'noun', features: 'gen+3ms', gloss: 'his age' },
          ],
        },
        {
          id: 'qr2-73-019',
          ar: 'وَيَقُوْلُ: إِنْ سَاعَدَنِي الزَّمَانُ أَبْعَثُ رِسَالَةً إِلَىٰ عَظِيْمِ الرَّوْمِ وَأَسْأَلُهُ أَنْ يَرْكَبَ بِعَسَاكِرِهِ إِلَىٰ بِلَادِ الْفُرْسِ ،',
          en: 'and would say: "If time assists me, I will send a letter to the great one of Rome and ask him to march with his troops to the land of the Persians,',
          tokens: [
            { surface: 'وَيَقُوْلُ', lemma: 'قال', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to say' },
            { surface: 'إِنْ', lemma: 'إن', pos: 'part', gloss: 'if' },
            { surface: 'سَاعَدَنِي', lemma: 'ساعد', pos: 'verb', features: 'perf.3ms+1s', gloss: 'to help, assist me' },
            { surface: 'الزَّمَانُ', lemma: 'زمان', pos: 'noun', features: 'def.nom', gloss: 'time, fate' },
            { surface: 'أَبْعَثُ', lemma: 'بعث', pos: 'verb', features: 'impf.1s', gloss: 'to send' },
            { surface: 'رِسَالَةً', lemma: 'رسالة', pos: 'noun', features: 'indef.acc', gloss: 'a letter, message' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'عَظِيْمِ', lemma: 'عظيم', pos: 'noun', features: 'gen.constr', gloss: 'the great one of' },
            { surface: 'الرَّوْمِ', lemma: 'روم', pos: 'proper', features: 'def.gen', gloss: 'Rome/Byzantium -- by this era a standing name in Indo-Persian usage for the Ottoman Sultan, who ruled the former Byzantine lands and the sea route toward the Hijaz' },
            { surface: 'وَأَسْأَلُهُ', lemma: 'سأل', pos: 'verb', features: 'conj+impf.1s+3ms', gloss: 'and ask him' },
            { surface: 'أَنْ', lemma: 'أن', pos: 'part', gloss: 'that' },
            { surface: 'يَرْكَبَ', lemma: 'ركب', pos: 'verb', features: 'subj.3ms', gloss: 'to ride out, march' },
            { surface: 'بِعَسَاكِرِهِ', lemma: 'عسكر', pos: 'noun', features: 'gen.pl+3ms', gloss: 'with his troops' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'بِلَادِ', lemma: 'بلد', pos: 'noun', features: 'gen.constr.pl', gloss: 'the land of' },
            { surface: 'الْفُرْسِ', lemma: 'فرس٢', pos: 'proper', features: 'def.gen', gloss: 'Persia, the Persians (homograph of the already-known فَرَس "horse" -- unrelated ethnonym sense)' },
          ],
        },
        {
          id: 'qr2-73-020',
          ar: 'وَنَحْنُ نَرْكَبُ مِنْ هَاهُنَا إِلَىٰ تِلْكَ الْبِلَادِ ،',
          en: 'while we march from here to that land,',
          tokens: [
            { surface: 'وَنَحْنُ', lemma: 'نحن', pos: 'part', features: 'conj', gloss: 'and we' },
            { surface: 'نَرْكَبُ', lemma: 'ركب', pos: 'verb', features: 'impf.1p', gloss: 'to ride out, march' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'هَاهُنَا', lemma: 'هنا', pos: 'adv', gloss: 'here' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'تِلْكَ', lemma: 'تلك', pos: 'dem', gloss: 'that (f.)' },
            { surface: 'الْبِلَادِ', lemma: 'بلد', pos: 'noun', features: 'def.gen.pl', gloss: 'the land' },
          ],
        },
        {
          id: 'qr2-73-021',
          ar: 'فَنَدْفَعُ بِمُسَاعَدَةِ مَلِكِ الرُّوْمِ شَرَّ الأَوْبَاشِ الَّذِيْنَ يَقْطَعُوْنَ طَرِيْقَ الْحُجَّاجِ ،',
          en: 'then, with the help of the King of Rome, we will drive off the worst of the rabble who waylay the pilgrims’ road,',
          tokens: [
            { surface: 'فَنَدْفَعُ', lemma: 'دفع', pos: 'verb', features: 'conj+impf.1p', gloss: 'to repel, drive off' },
            { surface: 'بِمُسَاعَدَةِ', lemma: 'ساعد', pos: 'noun', features: 'gen.constr', gloss: 'with the help of' },
            { surface: 'مَلِكِ', lemma: 'ملك', pos: 'noun', features: 'gen.constr', gloss: 'the king of' },
            { surface: 'الرُّوْمِ', lemma: 'روم', pos: 'proper', features: 'def.gen', gloss: 'Rome (i.e. the Ottoman Sultan)' },
            { surface: 'شَرَّ', lemma: 'شر', pos: 'noun', features: 'acc.constr', gloss: 'the worst, evil of' },
            { surface: 'الأَوْبَاشِ', lemma: 'أوباش', pos: 'noun', features: 'def.gen', root: 'و ب ش', gloss: 'the riffraff, rabble' },
            { surface: 'الَّذِيْنَ', lemma: 'الذي', pos: 'rel', gloss: 'who' },
            { surface: 'يَقْطَعُوْنَ', lemma: 'قطع', pos: 'verb', features: 'impf.3mp', gloss: 'to cut off, waylay' },
            { surface: 'طَرِيْقَ', lemma: 'طريق', pos: 'noun', features: 'acc.constr', gloss: 'the road of' },
            { surface: 'الْحُجَّاجِ', lemma: 'حاج', pos: 'noun', features: 'def.gen.pl', gloss: 'the pilgrims' },
          ],
        },
        {
          id: 'qr2-73-022',
          ar: 'وَنُحْدِثُ شَارِعاً آمِناً إِلَىٰ مَكَّةَ الْمُبَارَكَةِ ،',
          en: 'and open a safe road to blessed Mecca,"',
          tokens: [
            { surface: 'وَنُحْدِثُ', lemma: 'أحدث', pos: 'verb', features: 'conj+impf.1p', root: 'ح د ث', gloss: 'to bring about, institute, create anew' },
            { surface: 'شَارِعاً', lemma: 'شارع', pos: 'noun', features: 'indef.acc', gloss: 'a road' },
            { surface: 'آمِناً', lemma: 'آمن', pos: 'adj', features: 'indef.acc', gloss: 'safe, secure' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'مَكَّةَ', lemma: 'مكة', pos: 'proper', features: 'gen', gloss: 'Mecca' },
            { surface: 'الْمُبَارَكَةِ', lemma: 'مبارك', pos: 'adj', features: 'def.gen', root: 'ب ر ك', gloss: 'the blessed' },
          ],
        },
        {
          id: 'qr2-73-023',
          ar: 'وَلٰكِنَّ الأَجَلَ لَمْ يُمْهِلْهُ فَمَاتَ قَبْلَ بُلُوْغِهِ إِلَىٰ تِلْكَ الأُمْنِيَّةِ ،',
          en: 'But his appointed time gave him no respite, and he died before he could reach that wish,',
          tokens: [
            { surface: 'وَلٰكِنَّ', lemma: 'لكن', pos: 'part', features: 'conj', gloss: 'but, yet' },
            { surface: 'الأَجَلَ', lemma: 'أجل', pos: 'noun', features: 'def.acc', root: 'أ ج ل', gloss: 'the appointed term, fated time' },
            { surface: 'لَمْ', lemma: 'لم', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُمْهِلْهُ', lemma: 'أمهل', pos: 'verb', features: 'jussive.3ms+3ms', root: 'م ه ل', gloss: 'to grant respite, allow time' },
            { surface: 'فَمَاتَ', lemma: 'مات', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to die' },
            { surface: 'قَبْلَ', lemma: 'قبل', pos: 'prep', gloss: 'before' },
            { surface: 'بُلُوْغِهِ', lemma: 'بلغ', pos: 'noun', features: 'gen+3ms', gloss: 'his reaching, attainment' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'تِلْكَ', lemma: 'تلك', pos: 'dem', gloss: 'that (f.)' },
            { surface: 'الأُمْنِيَّةِ', lemma: 'أمنية', pos: 'noun', features: 'def.gen', root: 'م ن ي', gloss: 'the wish, aspiration' },
          ],
        },
        {
          id: 'qr2-73-024',
          ar: 'وَكَانَ ذٰلِكَ فِيْ ثَانِيْ عَشَرَ مِنْ رَبِيْعِ الأَوَّلِ سَنَةَ ٩٥٢ هـ .',
          en: 'and that was on the twelfth of Rabi’ al-Awwal, in the year 952 AH.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', pos: 'dem', gloss: 'that' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'on' },
            { surface: 'ثَانِيْ', lemma: 'ثاني', pos: 'num', features: 'gen.constr', gloss: 'the second of (with عَشَر, "ten" -- together "the twelfth")' },
            { surface: 'عَشَرَ', lemma: 'عشر', pos: 'num', gloss: 'ten' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'of' },
            { surface: 'رَبِيْعِ', lemma: 'ربيع', pos: 'proper', features: 'gen.constr', gloss: 'Rabi’ [al-Awwal] (the third month of the Islamic lunar calendar)' },
            { surface: 'الأَوَّلِ', lemma: 'أول', pos: 'adj', features: 'def.gen', gloss: 'the first' },
            { surface: 'سَنَةَ', lemma: 'سنة', pos: 'noun', features: 'acc.constr', gloss: 'in the year of' },
            { surface: '٩٥٢', lemma: '٩٥٢', pos: 'num', gloss: '952' },
            { surface: 'هـ', lemma: 'هـ', pos: 'noun', gloss: 'AH (abbreviation for "hijrī", the Islamic calendar era)' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ يَتَمَنَّىٰ شِيْرُشَاهَ لَوْ سَاعَدَهُ الزَّمَانُ؟',
          options: ['أَنْ يُؤَمِّنَ طَرِيْقَ الْحُجَّاجِ إِلَىٰ مَكَّةَ الْمُبَارَكَةِ', 'أَنْ يَغْزُوَ بِلَادَ الرُّوْمِ', 'أَنْ يَبْنِيَ قَصْراً جَدِيْداً فِيْ دِهْلِيْ'],
          answer: 0,
          qEn: 'What did Sher Shah wish for, if time would assist him?',
          optionsEn: ['To secure the pilgrims’ road to blessed Mecca', 'To invade the land of Rome', 'To build a new palace in Delhi'],
        },
        {
          q: 'مَتَىٰ مَاتَ شِيْرُشَاهَ؟',
          options: ['فِيْ ثَانِيْ عَشَرَ مِنْ رَبِيْعِ الأَوَّلِ سَنَةَ ٩٥٢ هـ', 'فِيْ شَهْرِ رَمَضَانَ سَنَةَ ٩٥٢ هـ', 'فِيْ سَنَةَ ٨٦٢ هـ'],
          answer: 0,
          qEn: 'When did Sher Shah die?',
          optionsEn: ['On the twelfth of Rabi’ al-Awwal, 952 AH', 'In the month of Ramadan, 952 AH', 'In the year 862 AH'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَمِنْ مَآثِرِهِ أَنَّهُ',
        post: 'شَارِعاً كَبِيْراً.',
        en: 'Among his achievements was that he founded a great road.',
        options: ['أَسَّسَ', 'أَسَّسَتْ', 'تُؤَسِّسُ', 'نُؤَسِّسُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular perfect -- matches "he" (Sher Shah).',
          'Perfect 3rd feminine singular, wrong gender.',
          '2nd/3rd feminine singular present, wrong tense/person.',
          '1st person plural, wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَبَلَغَ الأَمْنُ فِيْ عَهْدِهِ مَبْلَغاً لَا يَسْتَطِيْعُ أَحَدٌ أَنْ يَمُدَّ يَدَهُ فِي الصَّحْرَاءِ إِلَىٰ عَجُوْزٍ',
        post: 'مَتَاعَهَا.',
        en: 'Security reached such a degree in his reign that no one could stretch out his hand in the desert toward an old woman carrying her belongings.',
        options: ['تَحْمِلُ', 'حَمَلْتُ', 'يَحْمِلُوْنَ', 'نَحْمِلُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular present -- matches "an old woman" (عَجُوْز).',
          'Perfect 1st person singular, wrong person and tense.',
          '3rd masculine plural, wrong number and gender.',
          '1st person plural, wrong person.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَرْكَبَ بِعَسَاكِرِهِ',
        pre: '',
        post: 'بِعَسَاكِرِهِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَرْكَبُ', 'يَرْكَبُ', 'تَرْكَبُ', 'يَرْكَبُوْنَ'],
        answer: 0,
        rationales: ['1st person plural takes the prefix نَـ.', '', '', ''],
      },
      {
        type: 'shift',
        base: 'يَقْطَعُوْنَ طَرِيْقَ الْحُجَّاجِ',
        pre: '',
        post: 'طَرِيْقَ الْحُجَّاجِ',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['يَقْطَعُ', 'تَقْطَعُ', 'نَقْطَعُ', 'يَقْطَعْنَ'],
        answer: 0,
        rationales: ['3rd masculine singular takes the prefix يَـ with no plural suffix.', '', '', ''],
      },
    ],
  },
};

// Module 04 — المجرد والمزيد (The Bare Verb and the Augmented Verb)
//
// Covers Weeks 5–8 of the Advanced Sarf course: التقسيم الثالث للفعل, from
// شذا العرف في فن الصرف by أحمد الحملاوي. Definitions, أوزان, example verbs
// and شواهد are kept faithful to the source.
//
// Scope: the definitions of المجرد and المزيد; الأبواب الستة of the ثلاثي
// مجرد with the two combinations the language refuses; the single وزن of the
// رباعي مجرد, the منحوتة verbs, and its seven ملحقات with the doctrine of
// الإلحاق; and the twelve أوزان of the ثلاثي مزيد فيه, the أوزان of the رباعي
// مزيد with its ملحقات, and the two تنبيهان.
// معاني صيغ الزوائد follows in Module 05.
//
// Restyled 2026-08-12 to match content/'s (Advanced Nahw) revamped
// conventions: box titles are semantic (Definition/Example/Rule/Careful)
// rather than a blanket "Core Text", and every Arabic quote or example whose
// specific wording carries the point is immediately explained/translated in
// the following English prose, so the lesson can be followed without being
// able to read the Arabic — Arabic terms stay inline (wrapped in <bdi>) as
// supporting material, not load-bearing content. Quiz/bank questions were
// rebalanced toward important, testable concepts (definitions, the
// classification logic, the "why") and away from narrow dialectal or
// one-off-exception trivia — L2 in particular had leaned on rare dialect
// forms (لغة طيّئ, تداخل اللغات) and singleton exceptions (هَيُؤَ, نَهُوَ,
// لَبُبْتَ) that tested memorization over understanding; those were trimmed
// in favor of items that exercise the six-أبواب classification skill and
// the حلقي rule's one-way logic. No grammatical fact, وزن, example, or rule
// was changed from the prior version — only the prose, box structure, and
// question mix.
//
// Bank size runs ~20 items per lesson, matching Module 05, its sibling half
// of this division.

export default {
  id: 'as-04',
  title: 'المجرد والمزيد',
  heading: 'الفعل',
  blurb: 'الفعل divided by how many letters have been added to its أصول: the definitions, and the أوزان that division produces from ثلاثي to سداسي.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'المجرد والمزيد',
      subtitle: 'The Basic Division — the two definitions, their subdivisions, and how the ثلاثي مجرد comes to have exactly six أبواب',
      concepts: [
        // ---------------------------------------------------------------- concept 1
        {
          heading: 'تعريف المجرد والمزيد',
          lines: [
            { html: `The fourth division of <bdi>الفعل</bdi> asks a simple question of a verb: are all of its letters original to it, or has something been added? This division sorts every verb into <bdi>المجرد</bdi> (the bare verb) or <bdi>المزيد</bdi> (the augmented verb).`, list: false },
            { box: { title: 'Definition', lines: [
              `المُجَرَّد: ما كانَتْ جَمِيعُ حُرُوفِهِ أَصْلِيَّةً، لا يَسْقُطُ حَرْفٌ منها في تَصارِيفِ الكَلِمَةِ بِغَيْرِ عِلَّةٍ`,
              `المَزِيد: ما زِيدَ فيه حَرْفٌ أو أَكْثَرُ على حُرُوفِهِ الأَصْلِيَّةِ`,
            ] } },
            { html: `In plain English: <bdi>المجرد</bdi> is the verb all of whose letters are <bdi>أصلية</bdi> (original root letters) — none of them drops out across the word's conjugations without a cause. <bdi>المزيد</bdi> is the verb that has had one or more letters added on top of its original root letters.`, list: false },
            { html: `The qualifier <bdi>بِغَيْرِ عِلَّةٍ</bdi> (without a cause) in the first definition is doing real work: a مجرد verb can still lose a letter in some of its forms — قَالَ becomes قُلْتُ (I said) — but that loss happens for a reason belonging to <bdi>إعلال</bdi> (regular weak-letter change), never because the letter was a bolted-on addition to begin with. Losing a letter through إعلال never turns a مجرد verb into a مزيد one.`, list: false },
          ],
          exercise: {
            prompt: `قُلْتُ has lost the عين (the middle root letter) of قَالَ. Does that loss stop قَالَ from being classified as المجرد?`,
            kind: 'mcq',
            options: [`It depends on whether the تاء of قُلْتُ is counted as a root letter`, `No — the loss happens بِعِلَّةٍ (for a cause, through إعلال), and the definition of المجرد excludes only losses that happen without one`, `Yes — a مجرد verb can never lose a letter under any circumstance`, `Yes — any verb that loses a letter automatically becomes مزيد`],
            correct: 1,
          },
        },
        // ---------------------------------------------------------------- concept 2
        {
          heading: 'أقسام كل منهما',
          lines: [
            { html: `Each of the two categories just defined — <bdi>المجرد</bdi> and <bdi>المزيد</bdi> — splits further in two, giving four categories in total that organise everything the rest of this division covers.`, list: false },
            { table: { title: 'The Four Categories', headers: ['القسم (Category)', 'أقسامه (Its Subdivisions)'], rows: [
              ['المُجَرَّد (bare verb)', 'ثُلَاثِيّ (three root letters) ورُبَاعِيّ (four root letters)'],
              ['المَزِيد (augmented verb)', 'مَزِيدُ الثُلَاثِيّ (augmented from a three-letter root) ومَزِيدُ الرُّبَاعِيّ (augmented from a four-letter root)'],
            ] } },
            { html: `One combination is conspicuously missing: there is no <bdi>خماسي مجرد</bdi> — no bare verb with five original root letters. A bare verb's root runs to three letters or, at most, four; anything longer than four letters must have gotten there by <bdi>زيادة</bdi> (augmentation), which by definition makes the verb مزيد rather than مجرد.`, list: false },
          ],
          exercise: {
            prompt: `A verb is found to have five letters in total. What can be said about it with certainty, regardless of what it means?`,
            kind: 'mcq',
            options: [`Nothing can be said without first knowing its meaning`, `It must be مزيد, since a bare (مجرد) verb's root runs to three letters or four at most, never five`, `It must be a خماسي مجرد`, `It must be a رباعي مجرد`],
            correct: 1,
          },
        },
        // ---------------------------------------------------------------- concept 3
        {
          heading: 'أبواب الثلاثي باعتبار الماضي وحده',
          lines: [
            { html: `Taking just the <bdi>ماضي</bdi> (past-tense form) on its own, the <bdi>ثلاثي مجرد</bdi> (three-letter bare verb) falls into exactly <bdi>ثلاثة أبواب</bdi> — three chapters, or patterns. The reason there are only three: the verb's <bdi>فاء</bdi> (first root letter) is always <bdi>مفتوح</bdi> (carries a fatḥa, a short a vowel) in the ماضي, so the only letter free to vary is the <bdi>عين</bdi> (middle root letter) — and a single letter can carry only one of three short vowels.`, list: false },
            { table: { title: 'The Three Patterns of the عين in the الماضي', headers: ['حركة العين (Vowel on the عين)', 'أمثلة (Examples)', 'Meaning'], rows: [
              ['مفتوحة (fatḥa)', 'نَصَرَ، ضَرَبَ، فَتَحَ', 'to help/aid; to hit/strike; to open'],
              ['مضمومة (ḍamma)', 'كَرُمَ', 'to be noble/generous'],
              ['مكسورة (kasra)', 'فَرِحَ، حَسِبَ', 'to be happy/glad; to think/reckon'],
            ] } },
          ],
          exercise: {
            prompt: `Why does the ماضي of the ثلاثي مجرد yield exactly three أبواب, rather than some other number?`,
            kind: 'mcq',
            options: [`Because its فاء always carries a fatḥa, leaving only the عين free to vary, and the عين can take one of three vowels`, `Because its عين always carries a fatḥa, leaving only the فاء free to vary`, `Because only three of the theoretically possible vowel patterns happen to be attested in the language`, `Because there are exactly three حروف علة (weak letters) in Arabic`],
            correct: 0,
          },
        },
        // ---------------------------------------------------------------- concept 4
        {
          heading: 'ستة أبواب بالماضي مع المضارع',
          lines: [
            { html: `Bringing the <bdi>مضارع</bdi> (present/future-tense form) into the picture raises the count of أبواب — but not all the way to nine. The <bdi>عين المضارع</bdi> (the middle root letter of the present-tense form) can likewise carry a ضمة, فتحة, or كسرة. Pairing three possible ماضي vowels with three possible مضارع vowels gives <bdi>ثلاثة في ثلاثة بتسعة</bdi> — three by three is nine — theoretically possible combinations. But the language refuses two of those nine pairings outright.`, list: false },
            { table: { title: 'The Two Refused Combinations', headers: ['الممتنع (What Is Disallowed)', 'التفصيل (Detail)'], rows: [
              ['A كسرة on the عين in the ماضي together with a ضمة on it in the مضارع', 'فَعِلَ يَفْعُل'],
              ['A ضمة on the عين in the ماضي together with either a كسرة or a فتحة on it in the مضارع', 'فَعُلَ يَفْعِل ، فَعُلَ يَفْعَل'],
            ] } },
            { html: `In plain terms: a ماضي on the pattern فَعِلَ (kasra) never pairs with a مضارع on يَفْعُل (ḍamma), and a ماضي on the pattern فَعُلَ (ḍamma) never pairs with a مضارع on يَفْعِل (kasra) or يَفْعَل (fatḥa). Nine possible pairings, minus these refusals, leaves <bdi>ستة</bdi> (six) — and those six survivors are the six <bdi>أبواب الثلاثي</bdi> that every ثلاثي مجرد verb belongs to.`, list: false },
          ],
          clarification: `The arithmetic is worth doing slowly, because the two refusals above remove three pairings, not two. The first refusal removes exactly one: فَعِلَ paired with a مضارع on يَفْعُل. The second refusal is broader — a ضمة on the عين of the ماضي rules out both a كسرة and a فتحة on the عين of the مضارع — so it removes two: فَعُلَ يَفْعِل and فَعُلَ يَفْعَل. That leaves فَعُلَ with only يَفْعُل still available to it, which is why الباب الخامس (the fifth باب) is the one and only باب built on a ماضي carrying a ضمة. Three pairings removed from nine leaves six.`,
          exercise: {
            prompt: `A verb's ماضي is on the pattern فَعُلَ (a ضمة on the عين). Which vowel can its مضارع عين carry?`,
            kind: 'mcq',
            options: [`الكسرة only`, `Any of the three vowels`, `الضمة only — pairing فَعُلَ with a كسرة or a فتحة on the مضارع عين is refused`, `الفتحة only`],
            correct: 2,
          },
        },
      ],
      quiz: [
        { q: `What is the definition of المجرد؟`, options: [`One or more letters have been added beyond its original letters`, `Its root letters are free of أحرف العلة`, `Its عين and لام are of the same kind`, `All of its letters are original — none of them drops out in the word's conjugations without a cause`], correct: 3 },
        { q: `What is the definition of المزيد؟`, options: [`All of its letters are original`, `Its فاء is معتل (a weak letter)`, `It has more than three letters`, `One or more letters have been added beyond its original letters`], correct: 3 },
        { q: `Into what two categories does المجرد divide؟`, options: [`مزيد الثلاثي ومزيد الرباعي`, `صحيح ومعتل`, `ثلاثي ورباعي`, `ثلاثي وخماسي`], correct: 2 },
        { q: `Considering the ماضي alone, how many أبواب does the ثلاثي مجرد have؟`, options: [`ستة`, `تسعة`, `ثلاثة`, `أربعة`], correct: 2 },
        { q: `Considering the ماضي together with the مضارع, how many أبواب are there in total؟`, options: [`ستة`, `ثلاثة`, `تسعة`, `اثنا عشر`], correct: 0 },
        { q: `Which of the following ماضي+مضارع vowel pairings is refused by the language؟`, options: [`فَعَلَ الماضي مع يَفْعُل المضارع (فتحة ثم ضمة)`, `فَعَلَ الماضي مع يَفْعِل المضارع (فتحة ثم كسرة)`, `فَعِلَ الماضي مع يَفْعُل المضارع (كسرة ثم ضمة)`, `فَعَلَ الماضي مع يَفْعَل المضارع (فتحة ثم فتحة)`], correct: 2 },
      ],
      bank: [
        { title: `بغير علة`, kind: 'mcq', prompt: `The definition of المجرد adds the qualifier بغير علة (without a cause). What does that qualifier allow for؟`, options: [`Letter losses that occur through إعلال, which do not make the verb مزيد`, `Losses of زوائد (added letters)`, `Letter losses that occur in the مضارع only`, `Nothing — it is purely decorative wording`], correct: 0 },
        { title: `حرف أو أكثر`, kind: 'mcq', prompt: `How many letters must be added beyond the root for a verb to count as مزيد؟`, options: [`One or more`, `Two or more`, `Exactly three`, `It varies depending on the وزن`], correct: 0 },
        { title: `الحروف الأصلية`, kind: 'mcq', prompt: `Both definitions turn on a single distinction. What is it؟`, options: [`Whether the verb is ماضٍ or مضارع`, `Whether the verb is لازم or متعدٍّ`, `Whether a letter is أصلي (original) or زائد (added)`, `Whether a letter is صحيح or معتل`], correct: 2 },
        { title: `أربع فئات`, kind: 'mcq', prompt: `How many categories does this division produce once each half — المجرد and المزيد — is subdivided؟`, options: [`خمس`, `ست`, `أربع — ثلاثي مجرد، رباعي مجرد، مزيد ثلاثي، مزيد رباعي`, `ثلاث`], correct: 2 },
        { title: `لا خماسي مجرد`, kind: 'mcq', prompt: `Why is there no such thing as a خماسي مجرد (a bare verb with five original letters)؟`, options: [`Because خماسي verbs are all منحوتة (blended from two words)`, `A bare verb's root runs to three letters or four; anything longer must be مزيد`, `Because five letters are too heavy to pronounce in Arabic`, `Because the ميزان الصرفي only has four positions`], correct: 1 },
        { title: `فتح الفاء`, kind: 'mcq', prompt: `What is always true of the فاء (first root letter) of a ثلاثي مجرد verb in the ماضي؟`, options: [`It varies depending on the باب`, `It carries a fatḥa`, `It carries a kasra`, `It carries a ḍamma`], correct: 1 },
        { title: `نصر وضرب وفتح`, kind: 'mcq', prompt: `نَصَرَ، ضَرَبَ, and فَتَحَ all illustrate which vowelling of the عين in the ماضي؟`, options: [`مضمومة`, `مكسورة`, `ساكنة`, `مفتوحة`], correct: 3 },
        { title: `كرُم`, kind: 'mcq', prompt: `كَرُمَ illustrates which vowelling of the عين in the ماضي؟`, options: [`ساكنة`, `مضمومة`, `مفتوحة`, `مكسورة`], correct: 1 },
        { title: `فرِح وحسِب`, kind: 'mcq', prompt: `فَرِحَ and حَسِبَ illustrate which vowelling of the عين in the ماضي؟`, options: [`They differ from one another`, `مكسورة`, `مفتوحة`, `مضمومة`], correct: 1 },
        { title: `ثلاثة في ثلاثة`, kind: 'mcq', prompt: `Before accounting for the refusals, how many ماضٍ-plus-مضارع vowel combinations are theoretically available؟`, options: [`ستة`, `ثلاثة`, `اثنا عشر`, `تسعة`], correct: 3 },
        { title: `امتناع فعِل يفعُل`, kind: 'mcq', prompt: `Of the two refused ماضٍ+مضارع combinations, how many are ruled out by فَعِلَ (kasra) paired with يَفْعُل (ḍamma) alone؟`, options: [`None — it is not refused`, `One — فَعِلَ يَفْعُل`, `Two`, `Three`], correct: 1 },
        { title: `امتناع فعُل مع غير يفعُل`, kind: 'mcq', prompt: `A ضمة on the عين in the ماضي (فَعُلَ) together with either a كسرة or a فتحة on the عين in the مضارع is refused. How many combinations does that rule out؟`, options: [`Four`, `Two — فَعُلَ يَفْعِل and فَعُلَ يَفْعَل`, `One`, `Three`], correct: 1 },
        { title: `فعُل ومضارعه`, kind: 'mcq', prompt: `A verb whose ماضي is فَعُلَ has only one مضارع pattern open to it. Which one؟`, options: [`يَفْعِل`, `يَفْعَل`, `Any of the three`, `يَفْعُل`], correct: 3 },
        { title: `فعِل ومضارعه`, kind: 'mcq', prompt: `A verb whose ماضي is فَعِلَ has how many مضارع patterns open to it؟`, options: [`None`, `Two — يَفْعَل and يَفْعِل`, `One`, `Three`], correct: 1 },
        { title: `فعَل ومضارعه`, kind: 'mcq', prompt: `A verb whose ماضي is فَعَلَ has how many مضارع patterns open to it؟`, options: [`Three — يَفْعُل, يَفْعِل, and يَفْعَل`, `Two`, `One`, `Four`], correct: 0 },
        { title: `توزيع الأبواب`, kind: 'mcq', prompt: `How do the six أبواب distribute across the three ماضٍ patterns فَعَلَ، فَعِلَ، وفَعُلَ؟`, options: [`Four أبواب for فَعَلَ, and one each for the other two patterns`, `Three أبواب for فَعِلَ, two for فَعَلَ, and one for فَعُلَ`, `Three أبواب for فَعَلَ, two for فَعِلَ, and one for فَعُلَ`, `Two أبواب for each of the three patterns`], correct: 2 },
        { title: `مجرد أم مزيد`, kind: 'mcq', prompt: `اسْتَخْرَجَ has six letters, three of which are أصول (original root letters). What is it؟`, options: [`مزيد ثلاثي`, `مجرد رباعي`, `مزيد رباعي`, `مجرد ثلاثي`], correct: 0 },
        { title: `تدحرج`, kind: 'mcq', prompt: `تَدَحْرَجَ has five letters, four of which are أصول. What is it؟`, options: [`مزيد رباعي`, `مزيد ثلاثي`, `مجرد رباعي`, `مجرد خماسي`], correct: 0 },
        { title: `دحرج`, kind: 'mcq', prompt: `دَحْرَجَ has four letters, all of them أصول. What is it؟`, options: [`مزيد ثلاثي`, `مزيد رباعي`, `مجرد ثلاثي`, `مجرد رباعي`], correct: 3 },
        { title: `ترتيب النظر`, kind: 'mcq', prompt: `To place a verb correctly within this division, what should be established first؟`, options: [`Which of its letters are أصلية (original) and which are زائدة (added)`, `Whether it is ماضٍ or مضارع`, `Which vowel its عين carries`, `Whether it is لازم or متعدٍّ`], correct: 0 },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'أبواب الثلاثي المجرد الستة',
      subtitle: 'The Six Doors — each with its vowelling, its examples, and the meanings that gather in the fourth and fifth',
      concepts: [
        // ---------------------------------------------------------------- concept 1
        {
          heading: 'البابان الأول والثاني',
          lines: [
            { html: `Classical grammar sorts every ثلاثي مجرد verb (a three-letter verb with no added letters) into one of six <bdi>أبواب</bdi> — patterns fixed by the vowel sitting on the middle root letter, the <bdi>عين</bdi>, in the ماضي (past) and المضارع (present) forms. The first two أبواب share the same ماضي vowelling and differ only in the مضارع.`, list: false },
            { table: { title: 'فَعَلَ يَفْعُل و فَعَلَ يَفْعِل', headers: ['الباب (Door)', 'الضبط (Vowelling)', 'أمثلة (Examples)'], rows: [
              ['الأول: فَعَلَ يَفْعُل', 'فتحة on the عين in the ماضي, ضمة on it in the مضارع', 'نَصَرَ يَنْصُر، قَعَدَ يَقْعُد، أَخَذَ يَأْخُذ، بَرَأَ يَبْرُؤ، قَالَ يَقُول، غَزَا يَغْزُو، مَرَّ يَمُرُّ'],
              ['الثاني: فَعَلَ يَفْعِل', 'فتحة on the عين in the ماضي, كسرة on it in the مضارع', 'ضَرَبَ يَضْرِب، جَلَسَ يَجْلِس، وَعَدَ يَعِد، بَاعَ يَبِيع، رَمَى يَرْمِي، وَقَى يَقِي، طَوَى يَطْوِي، فَرَّ يَفِرُّ، أَتَى يَأْتِي، جَاءَ يَجِيء'],
            ] } },
            { html: `Both أبواب open the عين على فتحة in the ماضي; they part ways only in the مضارع, where the first takes a ضمة and the second a كسرة. Notice that each row's example list deliberately runs through the categories from the previous lesson — <bdi>صحيح</bdi> (sound), <bdi>مهموز</bdi> (hamzated), <bdi>أجوف</bdi> (hollow), <bdi>ناقص</bdi> (defective), <bdi>مضاعف</bdi> (doubled) — to make one point: which باب a verb belongs to is decided purely by its vowelling pattern, not by which letters happen to sit in its root.`, list: false },
          ],
          exercise: {
            prompt: `وَعَدَ يَعِد belongs to which باب؟`,
            kind: 'mcq',
            options: ['الثاني: فَعَلَ يَفْعِل', 'الأول: فَعَلَ يَفْعُل', 'الثالث: فَعَلَ يَفْعَل', 'الرابع: فَعِلَ يَفْعَل'],
            correct: 0,
          },
        },
        // ---------------------------------------------------------------- concept 2
        {
          heading: 'الباب الثالث وحروف الحلق',
          lines: [
            { box: { title: 'Definition', lines: [
              `الباب الثالث: فَعَلَ يَفْعَل، بالفتح فيهما`,
              `كفَتَحَ يَفْتَح، وذَهَبَ يَذْهَب، وسَعَى يَسْعَى، ووَضَعَ يَضَع، وسَأَلَ يَسْأَل، وقَرَأَ يَقْرَأ`,
            ] } },
            { html: `The third باب keeps a فتحة on the عين in both tenses — فَتَحَ يَفْتَح to open, ذَهَبَ يَذْهَب to go, سَعَى يَسْعَى to strive, وَضَعَ يَضَع to put, سَأَلَ يَسْأَل to ask, قَرَأَ يَقْرَأ to read. Unlike the first two أبواب, this one carries a condition on which letters its root may contain.`, list: false },
            { box: { title: 'Rule', lines: [
              `وكُلُّ ما كانَتْ عَيْنُهُ مَفْتُوحَةً في الماضي والمُضارِعِ، فهو حَلْقِيُّ العَيْنِ أو اللَّامِ. وليس كُلُّ ما كان حَلْقِيًّا مَفْتُوحًا فيهما`,
              `وحُرُوفُ الحَلْقِ سِتَّةٌ: الهَمْزَةُ والهاءُ، والحاءُ والخاءُ، والعَيْنُ والغَيْنُ`,
            ] } },
            { html: `In plain terms: every verb whose عين carries a فتحة in both the ماضي and the مضارع has a <bdi>حرف حلق</bdi> (throat letter) as its عين or its لام — but the reverse does not hold. Having a throat letter somewhere in the root does not, by itself, put a verb in this باب. The six حروف الحلق are همزة، هاء، حاء، خاء، عين، غين — sounds articulated in the throat. So the rule runs in one direction only: belonging to the third باب guarantees a throat letter in the عين or لام; having a throat letter guarantees nothing about which باب the verb is in.`, list: false },
            { box: { title: 'Careful', lines: [
              `وما جاءَ من هذا البابِ بِدُونِ حَرْفٍ حَلْقِيٍّ فشاذٌّ`,
            ] } },
            { html: `A verb that is مفتوح العين in both tenses like this باب, yet has no throat letter in its عين or لام, is judged شاذ (irregular) rather than simply reassigned. The standing example is أَبَى يَأْبَى (to refuse) — مفتوح in both tenses, but its همزة sits in the فاء position, which the rule does not count, so neither its عين nor its لام is a throat letter. A handful of other irregular or dialectal forms are recorded in the classical grammars, but أبى يأبى is the one worth fixing in memory, since it is exactly what the exception clause of the rule points to.`, list: false },
          ],
          clarification: `The direction of the rule is what trips people up. Every verb in the third باب has a throat letter in its عين or لام — that holds without exception among the regular cases. But the converse fails: a verb can contain a throat letter and still belong to a different باب altogether. So a throat letter is not what earns a verb membership here; it is only that its absence, in a verb that is otherwise شكل like this باب, is what marks that verb as شاذ.`,
          exercise: {
            prompt: `A verb is مفتوح العين in both ماضٍ and مضارع, and neither its عين nor its لام is a حرف حلق. What follows؟`,
            kind: 'mcq',
            options: ['It must belong to the fourth باب', 'Nothing — the rule concerns الحلقي only', 'It is شاذ, like أَبَى يَأْبَى', 'It cannot belong to the third باب'],
            correct: 2,
          },
        },
        // ---------------------------------------------------------------- concept 3
        {
          heading: 'الباب الرابع ومعانيه',
          lines: [
            { box: { title: 'Definition', lines: [
              `الباب الرابع: فَعِلَ يَفْعَل، بكسر العين في الماضي وفتحها في المضارع`,
              `كفَرِحَ يَفْرَح، وعَلِمَ يَعْلَم، ووَجِلَ يَوْجَل، ويَبِسَ يَيْبَس، وخَافَ يَخَاف، وهَابَ يَهَاب، ورَضِيَ يَرْضَى، وقَوِيَ يَقْوَى، وعَضَّ يَعَضّ، وأَمِنَ يَأْمَن، وسَئِمَ يَسْأَم، وصَدِئَ يَصْدَأ`,
            ] } },
            { html: `A كسرة sits on the عين in the ماضي, and a فتحة takes its place in the مضارع — as in فَرِحَ يَفْرَح to be joyful, عَلِمَ يَعْلَم to know, خَافَ يَخَاف to fear, رَضِيَ يَرْضَى to be pleased, spanning صحيح, مهموز, أجوف, ناقص and مضاعف roots alike. What marks this باب out, though, is not its vowelling alone but the four families of meaning that cluster in it.`, list: false },
            { table: { title: 'ما يأتي من هذا الباب (What Comes from This باب)', headers: ['المعنى (Meaning)', 'أمثلة (Examples)'], rows: [
              ['الفَرَح وتَوابِعُه — joy, and what follows from it', 'فَرِحَ، طَرِبَ، بَطِرَ، أَشِرَ، غَضِبَ، حَزِنَ'],
              ['الامْتِلاء والخُلُو — fullness and emptiness', 'شَبِعَ، رَوِيَ، سَكِرَ'],
              ['الأَلْوان والعُيُوب — colors and physical defects', 'عَطِشَ، ظَمِئَ، صَدِيَ، هَيِمَ، حَمِرَ، سَوِدَ، عَوِرَ، عَمِشَ، جَهِرَ'],
              ['الخِلَق الظاهرة — visible physical traits (mentioned in تَخْلِيَة, physical description within غَزَل poetry)', 'غَيِدَ، هَيِفَ، لَمِيَ'],
            ] } },
          ],
          exercise: {
            prompt: `A verb means to become one-eyed. Which باب would you expect it in؟`,
            kind: 'mcq',
            options: ['الرابع — الألوان والعيوب gather there', 'الأول', 'الثاني', 'السادس'],
            correct: 0,
          },
        },
        // ---------------------------------------------------------------- concept 4
        {
          heading: 'الباب الخامس',
          lines: [
            { box: { title: 'Definition', lines: [
              `الباب الخامس: فَعُلَ يَفْعُل، بضم العين فيهما`,
              `كشَرُفَ يَشْرُف، وحَسُنَ يَحْسُن، ووَسُمَ يَوْسُم، ويَمُنَ يَيْمُن، ولَؤُمَ يَلْؤُم، وجَرُؤَ يَجْرُؤ، وسَرُوَ يَسْرُو`,
            ] } },
            { html: `A ضمة sits on the عين in both tenses — شَرُفَ يَشْرُف to be noble, حَسُنَ يَحْسُن to be good, beautiful, جَرُؤَ يَجْرُؤ to be bold, among others. This is the only باب whose ماضي itself opens on a ضمة, and that unusual shape brings three restrictions on which roots may appear here:`, list: false },
            { html: `Nothing <bdi>يائي العين</bdi> (with a و or ي as its middle root letter) came from this باب except a single verb, <bdi>هَيُؤَ</bdi> — <bdi>صار ذا هَيْئَةٍ</bdi>, he took on a certain form.`, list: true, bullet: true },
            { html: `Nothing <bdi>يائي اللام</bdi> that is <bdi>مُتَصَرِّف</bdi> (inflecting through all forms, not frozen) came from it except <bdi>نَهُوَ</bdi>, from <bdi>النُّهْيَة</bdi>, intellect — so he became intelligent.`, list: true, bullet: true },
            { html: `Nothing <bdi>مضاعف</bdi> (doubled root) came from it except rarely — <bdi>شَرُرْتَ</bdi> and <bdi>لَبُبْتَ</bdi>, whose مضارع is <bdi>تَلَبُّ</bdi> with only a فتحة on the عين.`, list: true, bullet: true },
            { html: `Its meaning is as narrow as its shape:`, list: false },
            { box: { title: 'Rule', lines: [
              `وهذا البابُ لِلْأَوْصافِ الخِلْقِيَّةِ، وهي التي لها مُكْثٌ`,
            ] } },
            { html: `This باب is reserved for <bdi>أوصاف خِلقية</bdi> — innate, settled qualities, the kind that last rather than pass quickly. That core meaning opens onto two further, extended uses.`, list: false },
            { box: { title: 'Rule', lines: [
              `ولك أن تُحَوِّلَ كلَّ فِعْلٍ ثُلاثِيٍّ إلى هذا البابِ، لِلدَلالَةِ على أنَّ معناه صارَ كالغَرِيزَةِ في صاحِبِهِ`,
              `ورُبَّما اسْتُعْمِلَتْ أفعالُ هذا البابِ لِلتَعَجُّبِ، فَتَنْسَلِخُ عن الحَدَثِ`,
            ] } },
            { html: `First, any ثلاثي verb may be recast into this باب's pattern to say that its meaning has become instinctive in the person — جَهِلَ (he was ignorant, a passing event) becomes جَهُلَ (ignorance is simply his nature), and أَكَلَ (he ate) becomes أَكُلَ the same way. Second, verbs of this باب can be used for <bdi>التعجب</bdi> (expressing amazement), and when they are, the verb sheds its normal sense of reporting an event: ضَرُبَتْ يَدُهُ does not report that his hand struck something — it means ما أَضْرَبَهُ, how striking his hand is!, wonder at a quality rather than narration of an action.`, list: false },
          ],
          exercise: {
            prompt: `You take جَهِلَ and recast it as جَهُلَ, moving it to the fifth باب. What have you added to the meaning؟`,
            kind: 'mcq',
            options: ['That the action happened repeatedly', 'That the action was sought from him', 'That the verb has become متعدٍّ', 'That the meaning has become like an ingrained instinct in him'],
            correct: 3,
          },
        },
        // ---------------------------------------------------------------- concept 5
        {
          heading: 'الباب السادس',
          lines: [
            { box: { title: 'Definition', lines: [
              `الباب السادس: فَعِلَ يَفْعِل، بالكسر فيهما`,
              `كحَسِبَ يَحْسِب، ونَعِمَ يَنْعِم`,
              `وهو قَلِيلٌ في الصَحِيحِ، كَثِيرٌ في المُعْتَلِّ`,
            ] } },
            { html: `A كسرة sits on the عين in both tenses, as in حَسِبَ يَحْسِب to reckon, to think and نَعِمَ يَنْعِم to live comfortably, to be glad. This pattern is rare among <bdi>الصحيح</bdi> (sound roots) but common among <bdi>المعتل</bdi> (weak roots, where a و or ي sits in the عين or لام) — the classical grammars count twenty-four verbs of this shape among the معتل.`, list: false },
            { html: `That completes the set of six: (1) فَعَلَ يَفْعُل (2) فَعَلَ يَفْعِل (3) فَعَلَ يَفْعَل (4) فَعِلَ يَفْعَل (5) فَعُلَ يَفْعُل (6) فَعِلَ يَفْعِل.`, list: false },
          ],
          exercise: {
            prompt: `In which class of verb is the sixth باب said to be common؟`,
            kind: 'mcq',
            options: ['الصحيح', 'المهموز', 'المضاعف', 'المعتل — twenty-four verbs'],
            correct: 3,
          },
        },
      ],
      quiz: [
        { q: 'نَصَرَ يَنْصُر is the model of which باب؟', options: ['الأول', 'الثاني', 'الثالث', 'الخامس'], correct: 0 },
        { q: 'ضَرَبَ يَضْرِب is the model of which باب؟', options: ['الثاني', 'الأول', 'الرابع', 'السادس'], correct: 0 },
        { q: 'How many حروف حلق are there؟', options: ['Three', 'Six', 'Four', 'Five'], correct: 1 },
        { q: 'Which list gives حروف الحلق؟', options: ['الهمزة والهاء والحاء والخاء والعين والغين', 'الهمزة والألف والواو والياء والهاء والحاء', 'الحاء والخاء والعين والغين والقاف والكاف', 'الهمزة والهاء والعين والحاء'], correct: 0 },
        { q: 'The fifth باب is described as being reserved for:', options: ['Joy and what follows from it (الفرح وتوابعه)', 'Colors and physical defects (الألوان والعيوب)', 'Fullness and emptiness (الامتلاء والخلو)', 'Settled, enduring qualities (الأوصاف الخِلقية، وهي التي لها مُكْث)'], correct: 3 },
        { q: 'The sixth باب is قليل in الصحيح and كثير in:', options: ['الرباعي', 'المعتل', 'المهموز', 'المضاعف'], correct: 1 },
      ],
      bank: [
        { title: 'قال يقول', kind: 'mcq', prompt: 'قَالَ يَقُول falls under which باب؟', options: ['الرابع: فَعِلَ يَفْعَل', 'الخامس: فَعُلَ يَفْعُل', 'الأول: فَعَلَ يَفْعُل', 'الثاني: فَعَلَ يَفْعِل'], correct: 2 },
        { title: 'باع يبيع', kind: 'mcq', prompt: 'بَاعَ يَبِيع falls under which باب؟', options: ['الأول: فَعَلَ يَفْعُل', 'الثالث: فَعَلَ يَفْعَل', 'السادس: فَعِلَ يَفْعِل', 'الثاني: فَعَلَ يَفْعِل'], correct: 3 },
        { title: 'خاف يخاف', kind: 'mcq', prompt: 'خَافَ يَخَاف falls under which باب؟', options: ['الأول: فَعَلَ يَفْعُل', 'الخامس: فَعُلَ يَفْعُل', 'الرابع: فَعِلَ يَفْعَل', 'الثالث: فَعَلَ يَفْعَل'], correct: 2 },
        { title: 'شرُف يشرُف', kind: 'mcq', prompt: 'شَرُفَ يَشْرُف falls under which باب؟', options: ['الرابع: فَعِلَ يَفْعَل', 'الثاني: فَعَلَ يَفْعِل', 'الخامس: فَعُلَ يَفْعُل', 'الأول: فَعَلَ يَفْعُل'], correct: 2 },
        { title: 'حسِب يحسِب', kind: 'mcq', prompt: 'حَسِبَ يَحْسِب falls under which باب؟', options: ['الرابع: فَعِلَ يَفْعَل', 'الثاني: فَعَلَ يَفْعِل', 'الخامس: فَعُلَ يَفْعُل', 'السادس: فَعِلَ يَفْعِل'], correct: 3 },
        { title: 'تمييز البابين', kind: 'mcq', prompt: 'The first and second أبواب share their ماضي. Where do they part؟', options: ['In whether the verb is لازم or متعدٍّ', 'In the vowel on the عين of the مضارع — ḍamma against kasra', 'In the vowel on the فاء', 'In whether the verb is صحيح or معتل'], correct: 1 },
        { title: 'تنوع الأمثلة', kind: 'mcq', prompt: 'The examples for each باب run through صحيح, مهموز, أجوف, ناقص and مضاعف. What does that show؟', options: ['That the باب determines the وزن', 'That the باب is fixed by vowelling, not by which letters a verb has', 'That every باب contains one of each kind', 'That the معتل is barred from some أبواب'], correct: 1 },
        { title: 'اتجاه القاعدة', kind: 'mcq', prompt: 'What is the correct statement of the حلقي rule؟', options: ['Everything حلقي is in the third باب; not everything in it is حلقي', 'The two directions hold equally', 'Neither direction holds', 'Everything in the third باب is حلقي العين أو اللام; not everything حلقي is in the third باب'], correct: 3 },
        { title: 'فتح يفتح', kind: 'mcq', prompt: 'فَتَحَ يَفْتَح belongs to the third باب. Which of its root letters is the حرف حلق the rule points to؟', options: ['Its فاء — the ف', 'Its عين — the ت is not حلقي', 'Its لام — the ح', 'None of its letters is حلقي'], correct: 2 },
        { title: 'لزوم الحلقي', kind: 'mcq', prompt: 'A verb happens to have a حرف حلق as its عين. Does that by itself place the verb in the third باب؟', options: ['Yes — a throat letter in the عين is sufficient on its own', 'No — the vowelling must also be فتحة in both tenses; a throat letter alone does not decide the باب', 'Only if the لام is also حلقي', 'Only if the verb is معتل'], correct: 1 },
        { title: 'الشذوذ', kind: 'mcq', prompt: 'أَبَى يَأْبَى is مفتوح in both tenses, yet neither its عين nor its لام is a حرف حلق. How is it classed؟', options: ['It belongs to the fourth باب', 'شاذ', 'قياسي', 'فصيح but rare'], correct: 1 },
        { title: 'فرِح وطرِب', kind: 'mcq', prompt: 'فَرِحَ، طَرِبَ، بَطِرَ، أَشِرَ، غَضِبَ and حَزِنَ belong to which family of meaning؟', options: ['الفرح وتوابعه', 'الامتلاء والخلو', 'الألوان والعيوب', 'الخِلَق الظاهرة'], correct: 0 },
        { title: 'شبِع ورَوِي', kind: 'mcq', prompt: 'شَبِعَ، رَوِيَ and سَكِرَ belong to which family of meaning؟', options: ['الفرح وتوابعه', 'الألوان والعيوب', 'الأوصاف الخِلقية', 'الامتلاء والخلو'], correct: 3 },
        { title: 'عطش وظمئ', kind: 'mcq', prompt: 'عَطِشَ، ظَمِئَ and صَدِيَ — all describing forms of thirst — belong to which family of meaning in the fourth باب؟', options: ['الفرح وتوابعه', 'الامتلاء والخلو', 'الألوان والعيوب', 'الخِلَق الظاهرة'], correct: 2 },
        { title: 'غيِد وهيِف', kind: 'mcq', prompt: 'غَيِدَ، هَيِفَ and لَمِيَ are grouped as الخِلَق الظاهرة. In what context are they said to be mentioned؟', options: ['في وصف الحيوان', 'في الغَزَل — describing a person', 'في الرثاء', 'في المدح للملوك'], correct: 1 },
        { title: 'الأوصاف الخِلقية', kind: 'mcq', prompt: 'The fifth باب is said to be for الأوصاف الخِلقية, described as وهي التي لها مُكْث. What does that add؟', options: ['That the quality is physical rather than moral', 'That the quality is praised rather than blamed', 'That the quality is acquired rather than innate', 'That the quality is settled and enduring, not passing'], correct: 3 },
        { title: 'أكل وأكُل', kind: 'mcq', prompt: 'Recasting أَكَلَ as أَكُلَ, moving it into the fifth باب\'s pattern, signals what؟', options: ['That the eating happened once, decisively', 'That the meaning has become an ingrained trait in the person', 'That the verb is now used للتعجب', 'That the verb has become لازم'], correct: 1 },
        { title: 'ضرُبت يده', kind: 'mcq', prompt: 'ضَرُبَتْ يَدُهُ is cast in the fifth باب and glossed ما أَضْرَبَهُ. What is that use called؟', options: ['التعجب — and the verb sheds its حدث in the process', 'التعدية', 'المطاوعة', 'التكثير'], correct: 0 },
        { title: 'الرابع والسادس', kind: 'mcq', prompt: 'الباب الرابع (فَعِلَ يَفْعَل) and الباب السادس (فَعِلَ يَفْعِل) share the same ماضي vowelling. Where do they differ؟', options: ['In the vowel on the عين of the مضارع — فتحة against كسرة', 'In whether the verb is لازم or متعدٍّ', 'In the vowel on الفاء', 'They do not differ — they are the same باب'], correct: 0 },
        { title: 'ندرة السادس', kind: 'mcq', prompt: 'The sixth باب, فَعِلَ يَفْعِل, is said to be قليل (rare) among which category of verb؟', options: ['المعتل', 'الصحيح', 'المهموز فقط', 'المضاعف فقط'], correct: 1 },
        { title: 'ترتيب الأبواب', kind: 'mcq', prompt: 'Which sequence gives the six أبواب in order؟', options: ['فَعُلَ يَفْعُل، فَعَلَ يَفْعُل، فَعَلَ يَفْعِل، فَعَلَ يَفْعَل، فَعِلَ يَفْعَل، فَعِلَ يَفْعِل', 'فَعَلَ يَفْعُل، فَعَلَ يَفْعِل، فَعَلَ يَفْعَل، فَعِلَ يَفْعَل، فَعُلَ يَفْعُل، فَعِلَ يَفْعِل', 'فَعَلَ يَفْعُل، فَعِلَ يَفْعَل، فَعُلَ يَفْعُل، فَعَلَ يَفْعِل، فَعَلَ يَفْعَل، فَعِلَ يَفْعِل', 'فَعِلَ يَفْعَل، فَعَلَ يَفْعُل، فَعَلَ يَفْعِل، فَعُلَ يَفْعُل، فَعِلَ يَفْعِل، فَعَلَ يَفْعَل'], correct: 1 },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'الرباعي المجرد وملحقاته',
      subtitle: 'The Bare Quadriliteral — its single وزن, the verbs carved out of phrases, its seven ملحقات, and what الإلحاق actually is',
      concepts: [
        // ---------------------------------------------------------------- concept 1
        {
          heading: 'وزن الرباعي المجرد',
          lines: [
            { html: `Where the <bdi>ثلاثي مجرد</bdi> spread across six أبواب (six present-tense patterns), the <bdi>رباعي مجرد</bdi> — the four-letter bare verb — keeps to a single shape throughout.`, list: false },
            { box: { title: 'Definition', lines: [`وللرُّبَاعِيِّ المُجَرَّدِ وَزْنٌ واحِدٌ، وهو فَعْلَلَ`] } },
            { html: `The رباعي مجرد has exactly one وزن (pattern): <bdi>فَعْلَلَ</bdi> — four root letters set directly one after another, with nothing added and nothing doubled beyond what the root itself already contains.`, list: false },
            { box: { title: 'Example', lines: [`كدَحْرَجَ يُدَحْرِج، ودَرْبَخَ يُدَرْبِخ، وبَعْثَرَ يُبَعْثِر`] } },
            { html: `Three different roots, one pattern: <bdi>دَحْرَجَ</bdi> (he rolled something) — present <bdi>يُدَحْرِجُ</bdi>; <bdi>دَرْبَخَ</bdi> (he lowered his head submissively) — present <bdi>يُدَرْبِخُ</bdi>; <bdi>بَعْثَرَ</bdi> (he scattered things, turned them over) — present <bdi>يُبَعْثِرُ</bdi>. All three conjugate in the same shape.`, list: false },
            { box: { title: 'Rule', lines: [`ومنه الرُّبَاعِيُّ المُضاعَفُ، كزَلْزَلَ وعَسْعَسَ وحَصْحَصَ`] } },
            { html: `The doubled رباعي met earlier — <bdi>زَلْزَلَ</bdi> (he shook something violently), <bdi>عَسْعَسَ</bdi> (night drew near / darkened), <bdi>حَصْحَصَ</bdi> (the truth became plain) — is not a second وزن standing beside فَعْلَلَ. It is simply what فَعْلَلَ looks like when a root's first two letters repeat as its last two. One وزن only, covering both plain and doubled roots.`, list: false },
          ],
          exercise: {
            prompt: `How many أوزان does الرباعي مجرد have؟`,
            kind: 'mcq',
            options: ['One — فَعْلَلَ', 'Two — فَعْلَلَ and فَعْلَلِل', 'Three', 'Six, like the ثلاثي'],
            correct: 0,
          },
        },
        // ---------------------------------------------------------------- concept 2
        {
          heading: 'الأفعال المنحوتة',
          lines: [
            { html: `Not every فَعْلَلَ-shaped verb comes from a genuine four-letter root. Some are <bdi>نَحْت</bdi> — literally carving: the Arabs built them by taking a letter or more from each word of a common phrase and fusing the pieces into a single verb.`, list: false },
            { box: { title: 'Definition', lines: [`ومنه أَفْعالٌ نَحَتَتْها العَرَبُ من مُرَكَّباتٍ، فتُحْفَظُ ولا يُقاسُ عليها`] } },
            { html: `Each منحوت verb means he said the phrase it was carved from. Because these verbs are manufactured this way rather than derived by a general rule, the source is explicit: تُحفظ ولا يُقاس عليها — (1) each one is memorised individually, exactly as attested, and (2) their pattern is not licence to coin further verbs of your own on the same model.`, list: false },
            { table: { title: 'الأفعال المنحوتة', headers: ['الفعل (Verb)', 'إذا قال... (If He Said...)'], rows: [
              ['بَسْمَلَ', `بسم الله — "In the name of Allah"`],
              ['حَوْقَلَ', `لا حول ولا قوة إلا بالله — "There is no power nor strength except with Allah"`],
              ['طَلْبَقَ', `أطالَ اللهُ بَقاءَك — "May Allah prolong your life"`],
              ['دَمْعَزَ', `أدامَ اللهُ عِزَّكَ — "May Allah perpetuate your might"`],
              ['جَعْفَلَ', `جَعَلَني اللهُ فِداءَك — "May Allah make me a ransom for you"`],
              ['سَبْحَلَ', `سبحان الله — "Glory be to Allah"`],
              ['هَلَّلَ', `لا إله إلا الله — "There is no god but Allah"`],
              ['سَمْعَلَ', `السلام عليكم — "Peace be upon you"`],
              ['حَمْدَلَ', `الحمد لله — "Praise be to Allah"`],
            ] } },
            { html: `<bdi>بَسْمَلَ</bdi> and <bdi>حَمْدَلَ</bdi> show the mechanism clearly: بَسْمَلَ keeps a fragment of بِسْمِ and of the rest of the phrase, standing in for the whole of بسم الله; حَمْدَلَ does the same for الحمد لله. Every entry in the table works the same way.`, list: false },
          ],
          exercise: {
            prompt: `What does حَوْقَلَ mean؟`,
            kind: 'mcq',
            options: ['He said لا حول ولا قوة إلا بالله', 'He said الحمد لله', 'He said سبحان الله', 'He said بسم الله'],
            correct: 0,
          },
        },
        // ---------------------------------------------------------------- concept 3
        {
          heading: 'ملحقات الرباعي السبعة',
          lines: [
            { html: `Besides the true رباعي and the منحوت verbs, there is a third source of فَعْلَلَ-shaped verbs: the seven <bdi>ملحقات</bdi> — attachments. Each starts life as a genuine <bdi>ثلاثي</bdi> root, three letters only, and has one letter added so it can be remoulded onto a رباعي-shaped وزن.`, list: false },
            { box: { title: 'Definition', lines: [`ومُلْحَقاتُهُ سَبْعَةٌ، وهي أَفْعالٌ ثُلاثِيَّةٌ مَزِيدَةٌ`] } },
            { html: `Seven ملحقات, and they are ثلاثي verbs that have been augmented — three root letters plus one added letter, arranged onto seven distinct patterns so each conjugates the way a true رباعي does.`, list: false },
            { table: { title: 'The Seven', headers: ['#', 'الوزن (Pattern)', 'المثال (Example)', 'المعنى (Meaning)'], rows: [
              ['١', 'فَعْلَلَ (بتضعيف اللام)', 'جَلْبَبَ', 'he dressed him in the جِلْباب (garment)'],
              ['٢', 'فَوْعَلَ', 'جَوْرَبَ', 'he dressed him in the جَوْرَب (sock)'],
              ['٣', 'فَعْوَلَ', 'رَهْوَكَ في مِشْيَتِهِ', 'he hurried, in his gait'],
              ['٤', 'فَيْعَلَ', 'بَيْطَرَ ، شَيْطَنَ', 'he treated the animals (or: a veterinarian — مُعالِجُ الدَّوابّ)'],
              ['٥', 'فَعْيَلَ', 'شَرْيَفَ الزَّرْعَ', 'he cut its شِرْياف (the crop’s tassel)'],
              ['٦', 'فَعْلَى', 'سَلْقَى', 'he threw him onto his back'],
              ['٧', 'فَعْنَلَ', 'قَلْنَسَهُ', 'he dressed him in the قَلَنْسُوَة (cap)'],
            ] } },
            { html: `<bdi>جَلْبَبَ</bdi> shows the mechanism plainly. Its أصول (root letters) are ج-ل-ب; a second باء is added so the verb stands on four letters; it is then built on فَعْلَل <bdi>كي يَتَصَرَّفَ مِثْلَهُ</bdi> — so that it conjugates the way فَعْلَل does — giving <bdi>جَلْبَبَ يُجَلْبِبُ جَلْبَبَةً</bdi>, exactly parallel in shape to <bdi>دَحْرَجَ يُدَحْرِجُ دَحْرَجَةً</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `جَوْرَبَ is built on which of the seven ملحق patterns؟`,
            kind: 'mcq',
            options: ['فَعْوَلَ', 'فَيْعَلَ', 'فَعْنَلَ', 'فَوْعَلَ'],
            correct: 3,
          },
        },
        // ---------------------------------------------------------------- concept 4
        {
          heading: 'معنى الإلحاق والفرق بين الملحق والمزيد',
          lines: [
            { html: `The seven ملحقات raise an obvious question: what exactly is happening when a letter is added to a ثلاثي root to make it act like a رباعي؟ The source now defines the operation itself.`, list: false },
            { box: { title: 'Definition', lines: [`والإلْحاقُ: أن تَزِيدَ في البِناءِ زِيادَةً، لِتُلْحِقَهُ بِآخَرَ أَكْثَرَ منه، فَيَتَصَرَّفَ تَصَرُّفَهُ`] } },
            { html: `Put in English: <bdi>الإلحاق</bdi> is adding a letter (or more) to a word's <bdi>بناء</bdi> (structural shape) purely to bring it level — <bdi>لتلحقه</bdi>, to attach it — with a heavier بناء that has more letters, so that the word then conjugates <bdi>تصرف</bdi> the way that heavier بناء conjugates. Nothing about the word's meaning changes; only its conjugational behaviour is upgraded to match a bigger pattern.`, list: false },
            { html: `That leaves an obvious problem, since <bdi>المزيد</bdi> — the augmented verb, covered elsewhere in this module — also works by adding letters to a root. So what actually separates الإلحاق from المزيد؟`, list: false },
            { box: { title: 'Rule', lines: [`والمُلْحَقُ يَخْتَلِفُ عن المَزِيدِ، بأنَّ المُلْحَقَ فائِدَتُهُ لَفْظِيَّةٌ لا مَعْنَوِيَّةٌ، فلا يكونُ لِمَعْنًى جَدِيدٍ كالمَزِيدِ`] } },
            { html: `The whole distinction in one line: both add letters to a root, but for different payoffs. <bdi>المزيد</bdi>'s addition has a <bdi>فائدة معنوية</bdi> — a semantic payoff: it changes what the verb means, for example turning an intransitive verb transitive. <bdi>الملحق</bdi>'s addition has only a <bdi>فائدة لفظية</bdi> — a formal payoff: the meaning stays exactly what the bare root meant, and all that changes is which وزن (conjugation pattern) the verb now follows.`, list: false },
          ],
          clarification: `The pair to hold onto is جَلْبَبَ against أَكْرَمَ. Both start from a ثلاثي root and both add one letter, ending up longer than they began. But أَكْرَمَ's added همزة does real semantic work: it turns the لازم (intransitive) كَرُمَ into a متعدٍّ (transitive) verb — a meaning the bare root did not carry. جَلْبَبَ's added باء does no such work: جَلْبَبَ still just means he clothed him in a جلباب, the same sense its root already pointed to; there is no shorter form whose meaning it modifies. What the addition bought was purely formal — the right to conjugate جَلْبَبَ يُجَلْبِبُ جَلْبَبَةً on the pattern of دَحْرَجَ. Hence فائدته لفظية لا معنوية.

It also helps to contrast جَلْبَبَ with بَعْثَرَ, which is not الإلحاق at all. بَعْثَرَ's four letters (ب ع ث ر) are أصول from the start — a genuine رباعي root, nothing added. جَلْبَبَ only reaches four letters because a باء was supplied to a three-letter root. Both end up فَعْلَلَ in shape and conjugate identically, but only جَلْبَبَ got there by الإلحاق.`,
          exercise: {
            prompt: `What is the difference between a ملحق and a مزيد, both of which add letters؟`,
            kind: 'mcq',
            options: ['The ملحق’s benefit is لفظية — a conjugation pattern; the مزيد’s is معنوية — a new meaning', 'The ملحق adds one letter, the مزيد two or more', 'The ملحق is always ثلاثي in origin, the مزيد رباعي', 'There is none — the terms are interchangeable'],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `What is the وزن of the رباعي مجرد؟`, options: ['افْعَنْلَلَ', 'فَعْلَلَ', 'فَعَّلَ', 'فَعْلَلِل'], correct: 1 },
        { q: `زَلْزَلَ، عَسْعَسَ and حَصْحَصَ are best described as:`, options: ['أفعال منحوتة', 'أمثلة من مزيد الرباعي', 'الرباعي المضاعف — a case of the one وزن فَعْلَلَ, not a separate وزن', 'ملحقات of the رباعي'], correct: 2 },
        { q: `بَسْمَلَ, حَوْقَلَ and حَمْدَلَ belong to which category, and what governs how they are learned؟`, options: ['أفعال منحوتة من مركبات — memorised individually, not used as a pattern for new verbs', 'مزيد الثلاثي — verbs augmented for a new meaning', 'ملحقات الرباعي — ثلاثي roots remoulded onto a رباعي وزن', 'الرباعي المضاعف'], correct: 0 },
        { q: `Which of these best states the definition of الإلحاق؟`, options: [`Adding to a بناء for the sake of a new meaning`, `Removing a letter from a بناء`, `Coining a verb by نحت from a compound expression`, `Adding to a بناء so as to bring it level with a heavier بناء, so it conjugates the way that heavier بناء does`], correct: 3 },
        { q: `Both أَكْرَمَ and جَلْبَبَ add one letter to a three-letter root. What is the key difference between what each addition buys؟`, options: [`أَكْرَمَ's addition buys a new meaning (transitivity); جَلْبَبَ's buys only a new conjugation pattern`, `Both additions buy the exact same thing`, `أَكْرَمَ is ملحق and جَلْبَبَ is مزيد — the reverse of the truth`, `Neither addition changes anything at all`], correct: 0 },
        { q: `The benefit (فائدة) of a ملحق verb's added letter is described as:`, options: ['معنوية لا لفظية — a new meaning, not a new pattern', 'لفظية ومعنوية معًا — both at once', 'لا لفظية ولا معنوية — neither', 'لفظية لا معنوية — a new conjugation pattern only, no new meaning'], correct: 3 },
      ],
      bank: [
        { title: 'دحرج', kind: 'mcq', prompt: `دَحْرَجَ يُدَحْرِج pairs the verb with its present-tense form. What does this pairing illustrate؟`, options: ['That دحرج is منحوت', 'That دحرج is مضاعف', 'The single conjugation pattern that every رباعي مجرد follows', 'That دحرج is ملحق'], correct: 2 },
        { title: 'بعثر', kind: 'mcq', prompt: `بَعْثَرَ (he scattered / turned things over) is a رباعي مجرد. How many of its letters are أصول (root letters)؟`, options: ['أربعة — all four are root letters', 'ثلاثة, with one added', 'اثنان', 'It cannot be determined'], correct: 0 },
        { title: 'المضاعف الرباعي', kind: 'mcq', prompt: `Does الرباعي المضاعف (e.g. زَلْزَلَ, عَسْعَسَ) have a وزن of its own, separate from فَعْلَلَ؟`, options: ['Yes — فَعْلَلِل', 'Yes — افْعَنْلَلَ', 'No — it is simply فَعْلَلَ applied to a root whose letters repeat in pairs', 'Yes — فَعْفَلَ'], correct: 2 },
        { title: 'زلزل مقابل جلبب', kind: 'mcq', prompt: `زَلْزَلَ and جَلْبَبَ both weigh فَعْلَلَ. What actually distinguishes them at the level of أصول؟`, options: ['زلزل has four root letters outright; جلبب has three root letters plus one added for الإلحاق', 'جلبب has four root letters; زلزل has three', 'زلزل is منحوت, not رباعي at all', 'They do not differ — both are identical in structure'], correct: 0 },
        { title: 'النحت', kind: 'mcq', prompt: `In general, how is a منحوت verb formed from a phrase؟`, options: ['By adding a واو after the فاء', 'By prefixing a تاء to the phrase', 'By taking a letter or more from each word of the phrase and fusing them into one verb', 'By doubling the لام of a ثلاثي root'], correct: 2 },
        { title: 'تحفظ ولا يقاس عليها', kind: 'mcq', prompt: `The منحوتة verbs are described as تُحفظ ولا يُقاسُ عليها. What does that mean in practice؟`, options: ['They occur only in poetry, never in prose', 'Each one is memorised individually as attested, and their pattern may not be used to coin new verbs', 'They are pronounced but never written', 'They are all considered شاذ (irregular) and excluded from grammar'], correct: 1 },
        { title: 'دمعز', kind: 'mcq', prompt: `Which phrase does the منحوت verb دَمْعَزَ stand for؟`, options: [`أطال الله بقاءك — "May Allah prolong your life"`, `الحمد لله — "Praise be to Allah"`, `لا إله إلا الله — "There is no god but Allah"`, `أدام الله عزك — "May Allah perpetuate your might"`], correct: 3 },
        { title: 'أصل الملحقات', kind: 'mcq', prompt: `The seven ملحقات of the رباعي are described as أفعال ثلاثية مزيدة (augmented ثلاثي verbs). What does that tell you about their أصول؟`, options: ['Each has three root letters, with one letter added to reach four', 'Each has four root letters natively', 'Each has only two root letters', 'Their root-letter count varies from verb to verb'], correct: 0 },
        { title: 'جلبب', kind: 'mcq', prompt: `What are the أصول of جَلْبَبَ, and what letter was added to it؟`, options: ['The أصول are ج-ل-ب, and a second باء was added', 'The أصول are ج-ل-ب-ب, and nothing was added', 'The أصول are ج-ب-ب, and a لام was added', 'The أصول are ل-ب-ب, and a جيم was added'], correct: 0 },
        { title: 'تصريف جلبب', kind: 'mcq', prompt: `جَلْبَبَ conjugates as جَلْبَبَ يُجَلْبِبُ جَلْبَبَةً. Which verb's conjugation pattern is it following؟`, options: ['أَكْرَمَ يُكْرِمُ إكرامًا', 'كَتَبَ يَكْتُبُ كِتابَةً', 'اسْتَخْرَجَ يَسْتَخْرِجُ اسْتِخْراجًا', 'دَحْرَجَ يُدَحْرِجُ دَحْرَجَةً'], correct: 3 },
        { title: 'فَعْيَلَ وفَيْعَلَ', kind: 'mcq', prompt: `What distinguishes the ملحق pattern فَعْيَلَ from فَيْعَلَ؟`, options: ['The position of the added ياء — after the عين in one, after the فاء in the other', 'One adds a ياء, the other a واو', 'One is ملحق, the other مزيد', 'They are the same وزن, just written two different ways'], correct: 0 },
        { title: 'بيطر وشيطن', kind: 'mcq', prompt: `بَيْطَرَ and شَيْطَنَ, two of the seven ملحق examples, share which pattern؟`, options: ['فَوْعَلَ', 'فَعْوَلَ', 'فَيْعَلَ', 'فَعْيَلَ'], correct: 2 },
        { title: 'قلنسه', kind: 'mcq', prompt: `قَلْنَسَهُ is built on the ملحق pattern فَعْنَلَ. What does it mean؟`, options: ['He put a قَلَنْسُوَة (cap) on him', 'He put a جَوْرَب (sock) on him', 'He put a جِلْباب (garment) on him', 'He threw him down on his back'], correct: 0 },
        { title: 'غاية الإلحاق', kind: 'mcq', prompt: `What does a ملحق verb gain from its added letter؟`, options: ['The conjugation pattern of the heavier بناء it has been brought level with', 'A new meaning distinct from its root', 'Transitivity it did not have before', 'The ability to take نون التوكيد'], correct: 0 },
        { title: 'تعريف الإلحاق', kind: 'mcq', prompt: `Which of these best states the definition of الإلحاق؟`, options: ['Coining a new verb by نحت from a set phrase', 'Adding a letter to a root purely to raise its meaning to a new sense', 'Adding a letter to a بناء so as to bring it level with a heavier بناء, so it conjugates the way that heavier بناء does', `Doubling a root's middle letter to intensify its meaning`], correct: 2 },
        { title: 'الملحق مقابل المزيد', kind: 'mcq', prompt: `Both الملحق and المزيد add a letter to a bare root. What is the actual difference between them؟`, options: [`The ملحق's benefit is لفظية — only a conjugation pattern; the مزيد's benefit is معنوية — an actual new meaning`, 'The ملحق adds exactly one letter, the مزيد always adds two or more', 'The ملحق is always رباعي in origin, the مزيد always ثلاثي', 'There is no real difference — the two terms describe the same operation'], correct: 0 },
        { title: 'أكرم وجلبب', kind: 'mcq', prompt: `Both أَكْرَمَ and جَلْبَبَ add one letter to a three-letter root. What does each addition actually buy؟`, options: [`أَكْرَمَ's همزة buys a new meaning (it makes the verb متعدٍّ); جَلْبَبَ's باء buys only a conjugation pattern, with no change in meaning`, 'Both additions buy the same thing — a new meaning', 'Both additions buy the same thing — only a conjugation pattern', `أَكْرَمَ's addition is لفظية only; جَلْبَبَ's is معنوية`], correct: 0 },
        { title: 'بعثر مقابل جلبب', kind: 'mcq', prompt: `بَعْثَرَ and جَلْبَبَ both surface as four-letter, فَعْلَلَ-shaped verbs. Why is بعثر not an example of الإلحاق while جلبب is؟`, options: ['Because بعثر\'s four letters are all أصول from the start, while جلبب has only three أصول plus one letter added to reach four', 'Because بعثر is transitive and جلبب is not', 'Because بعثر is منحوت and جلبب is not', 'There is no difference — both are equally examples of الإلحاق'], correct: 0 },
        { title: 'فائدة الملحق', kind: 'mcq', prompt: `A grammar student says a given verb's added letter لم يُفِدْ معنى جديدًا، وإنما أفاد وزنًا جديدًا فقط (added no new meaning, only a new pattern). Which category does that put the verb in؟`, options: ['ملحق', 'مزيد لغرض معنوي', 'منحوت', 'مضاعف'], correct: 0 },
        { title: 'اختبار المعنى', kind: 'mcq', prompt: `To tell whether an added letter makes a verb ملحق or مزيد, what should you check؟`, options: [`Whether the verb's meaning changed from what the bare root meant, or only its conjugation pattern changed`, 'Whether the added letter is a حرف علة or not', `Whether the verb is used in the Qur'an`, 'Whether the verb has three or four syllables'], correct: 0 },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'أوزان الثلاثي المزيد فيه',
      subtitle: 'The Twelve Patterns — three with one letter added, five with two, four with three, and why six letters is the ceiling',
      concepts: [
        // ---------------------------------------------------------------- concept 1
        {
          heading: 'الأقسام الثلاثة والغاية',
          lines: [
            { html: `The ثلاثي مزيد فيه — a three-letter root that has had extra letters built onto it — is not one undifferentiated pile of forms. It splits into three divisions and twelve أوزان in total, and there is also a hard ceiling on how far that building-up can go.`, list: false },
            { box: { title: 'Definition', lines: [
              `الفِعْلُ الثُلاثِيُّ المَزِيدُ فيه ثَلاثَةُ أقسامٍ`,
            ] } },
            { html: `In plain terms: the ثلاثي مزيد فيه verb falls into three divisions. The split is purely a count of how many letters beyond the three root letters were added: (1) one letter added, (2) two letters added, (3) three letters added.`, list: false },
            { table: { headers: ['القسم (Division)', 'عدد الأبنية (Number of Patterns)'], rows: [
              ['ما زِيدَ فيه حَرْفٌ واحِدٌ — what has had one letter added', 'Three'],
              ['ما زِيدَ فيه حَرْفانِ — what has had two letters added', 'Five'],
              ['ما زِيدَ فيه ثَلاثَةُ أَحْرُفٍ — what has had three letters added', 'Four'],
            ] } },
            { html: `Beyond how many letters get grouped together, there is a separate limit on how many letters زيادة may add in total — and that limit is not the same for a verb as for a noun.`, list: false },
            { box: { title: 'Rule', lines: [
              `وغايَةُ ما يَبْلُغُ الفِعْلُ بالزِيادَةِ سِتَّةٌ؛ بِخِلافِ الاسْمِ، فإنَّه يَبْلُغُ بالزِيادَةِ سَبْعَةً (نحو اسْتِخْراج) لِثِقَلِ الفِعْلِ، وخِفَّةِ الاسْمِ`,
              `لأنَّ الفِعْلَ يَدُلُّ على شَيْئَيْنِ: الحَدَثِ وزَمانِهِ، وأمَّا الاسْمُ فَيَدُلُّ على مُسَمَّاهُ فقط دُونَ دَلالَةٍ على زَمانٍ`,
            ] } },
            { html: `In English: a verb may grow to at most six letters through زيادة (e.g. اسْتَخْرَجَ, six letters), while a noun may grow to seven (e.g. اسْتِخْراج, seven letters) — because the verb is heavier and the noun is lighter. The reason given is what each one has to carry: (1) a verb signals two things at once — the حَدَث, the event or action itself, and its زَمان, the time it happened in — so it is already loaded before any letters are added; (2) a noun signals only its مُسَمَّى, the thing it names, with no time reference at all, so it can absorb one extra letter of build-up that would overload a verb.`, list: false },
          ],
          exercise: {
            prompt: `A verb may reach six letters and a noun seven. What reason is given؟`,
            kind: 'mcq',
            options: ['The verb has fewer أصول', 'The noun accepts more حروف زيادة', 'The verb is heavier, since it indicates both an event and its time; the noun only its referent', 'The noun is used more often'],
            correct: 2,
          },
        },
        // ---------------------------------------------------------------- concept 2
        {
          heading: 'المزيد بحرف واحد',
          lines: [
            { html: `The first division — one letter added — comes in three أوزان, and the three differ in exactly which letter was added and where it went.`, list: false },
            { box: { title: 'Definition', lines: [
              `فالذي زِيدَ فيه حَرْفٌ واحِدٌ يَأْتِي على ثَلاثَةِ أَوْزانٍ`,
            ] } },
            { html: `That is: what has had a single letter added takes three patterns.`, list: false },
            { table: { headers: ['الوزن (Pattern)', 'أمثلة (Examples)'], rows: [
              ['أَفْعَلَ', 'أَكْرَمَ، أَوْلَى، أَعْطَى، أَقامَ، آتَى، آمَنَ، أَقَرَّ'],
              ['فَاعَلَ', 'قَاتَلَ، آخَذَ، وَالَى'],
              ['فَعَّلَ (بالتَضْعِيفِ — العين)', 'فَرَّحَ، زَكَّى، وَلَّى، بَرَّأَ'],
            ] } },
            { html: `The added letter is a different kind of thing in each: (1) أَفْعَلَ prefixes a هَمْزَة before the root, (2) فَاعَلَ inserts an أَلِف between the first and second root letters, (3) فَعَّلَ adds no new letter shape at all — it doubles the عَيْن, the middle root letter, instead.`, list: false },
          ],
          exercise: {
            prompt: `In فَعَّلَ, what exactly is the added letter؟`,
            kind: 'mcq',
            options: ['An ألف after the فاء', 'A repetition of the لام', 'A repetition of the عين', 'A prefixed همزة'],
            correct: 2,
          },
        },
        // ---------------------------------------------------------------- concept 3
        {
          heading: 'المزيد بحرفين',
          lines: [
            { html: `The second division — two letters added — has five أوزان.`, list: false },
            { box: { title: 'Definition', lines: [
              `والذي زِيدَ فيه حَرْفانِ يَأْتِي على خَمْسَةِ أَوْزانٍ`,
            ] } },
            { html: `That is: what has had two letters added takes five patterns.`, list: false },
            { table: { headers: ['الوزن (Pattern)', 'أمثلة (Examples)'], rows: [
              ['انْفَعَلَ', 'انْكَسَرَ، انْشَقَّ، انْقادَ، انْمَحَى'],
              ['افْتَعَلَ', 'اجْتَمَعَ، اشْتَقَّ، احْتارَ، ادَّعَى، اتَّصَلَ، اتَّقَى، اصْطَبَرَ، اضْطَرَبَ'],
              ['افْعَلَّ', 'احْمَرَّ، اصْفَرَّ، اعْوَرَّ'],
              ['تَفَعَّلَ', 'تَعَلَّمَ، تَزَكَّى'],
              ['تَفَاعَلَ', 'تَبَاعَدَ، تَشَاوَرَ'],
            ] } },
            { html: `Of these five, افْعَلَّ is marked as غالِبًا في الأَلْوانِ والعُيُوبِ — mostly used for colours and physical defects, the way احْمَرَّ means turned red and اعْوَرَّ means went blind in one eye. Outside that meaning it shows up only rarely, in isolated examples such as ارْفَضَّ عَرَقًا, اخْضَلَّ الرَّوْضُ, and ارْعَوَى.`, list: false },
            { html: `Two of the تَفَعَّلَ forms undergo إدغام — two letters close together in مَخْرَج (place of articulation) merging into a single doubled letter, for ease of pronunciation. اذَّكَرَ is one case: it comes from تَذَكَّرَ through the chain تَذَكَّرَ ← ذَذَكَّرَ (the ت shifts to match the ذ) ← ذَّكَّرَ (the two ذ's fuse into one doubled letter) ← اذَّكَر (a helper أَلِف is prefixed because the word can no longer open on a doubled consonant). اطَّهَّرَ works the same way, from تَطَهَّرَ. Under تَفَاعَلَ the identical merging happens in اثَّاقَلَ and ادَّارَكَ; تَبارَكَ and تَعالَى are classed under this وزن as well.`, list: false },
          ],
          exercise: {
            prompt: `اذَّكَرَ is said to come from تَذَكَّرَ. What produced the change؟`,
            kind: 'mcq',
            options: ['قلب of the تاء into a ذال for no reason', 'حذف of the تاء', 'The two are unrelated forms', 'إدغام of the تاء into the ذال, the two being close in مَخْرَج'],
            correct: 3,
          },
        },
        // ---------------------------------------------------------------- concept 4
        {
          heading: 'المزيد بثلاثة أحرف',
          lines: [
            { html: `The third and final division — three letters added — has four أوزان, closing out the full set of twelve.`, list: false },
            { box: { title: 'Definition', lines: [
              `والذي زِيدَ فيه ثَلاثَةُ أَحْرُفٍ يَأْتِي على أَرْبَعَةِ أَوْزانٍ`,
            ] } },
            { html: `That is: what has had three letters added takes four patterns. These example verbs are rare classical words, so each one's meaning is spelled out alongside it.`, list: false },
            { table: { headers: ['الوزن (Pattern)', 'المثال (Example)', 'المعنى (Meaning)'], rows: [
              ['اسْتَفْعَلَ', 'اسْتَخْرَجَ، اسْتَقامَ', 'to extract, draw out; to stand upright, be straight'],
              ['افْعَوْعَلَ', 'اغْدَوْدَنَ الشَّعْرُ، اعْشَوْشَبَ المَكانُ', 'the hair grew long; the place’s grass grew abundant'],
              ['افْعَالَّ', 'احْمارَّ، اشْهابَّ', 'its redness intensified; its greyness intensified'],
              ['افْعَوَّلَ', 'اجْلَوَّذَ، اعْلَوَّطَ', 'he hurried; he clung to the camel’s neck and rode it'],
            ] } },
            { html: `Three plus five plus four is twelve — the full count of أوزان for the ثلاثي مزيد فيه.`, list: false },
          ],
          exercise: {
            prompt: `اعْشَوْشَبَ المَكانُ (the place's grass grew abundant) is built on which وزن؟`,
            kind: 'mcq',
            options: ['اسْتَفْعَلَ', 'افْعَوْعَلَ', 'افْعَوَّلَ', 'افْعَالَّ'],
            correct: 1,
          },
        },
      ],
      quiz: [
        { q: 'How many أبنية does the ثلاثي مزيد فيه have in total؟', options: ['أربعة عشر', 'ستة', 'اثنا عشر', 'عشرة'], correct: 2 },
        { q: 'A verb maxes out at six letters after زيادة, while a noun such as اسْتِخْراج can reach seven. What explains the noun getting one more؟', options: ['The noun has more أصول to begin with', 'The verb indicates both الحدث and its زمان, adding weight, while the noun indicates only its referent', 'زيادة is simply forbidden past six letters in verbs, by convention alone', 'The noun’s letters are pronounced faster, so more of them fit'], correct: 1 },
        { q: 'How many أوزان belong to ما زيد فيه حرفان؟', options: ['أربعة', 'ستة', 'خمسة', 'ثلاثة'], correct: 2 },
        { q: 'Which of these is a وزن of ما زيد فيه حرف واحد؟', options: ['اسْتَفْعَلَ', 'تَفَاعَلَ', 'فَاعَلَ', 'انْفَعَلَ'], correct: 2 },
        { q: 'افْعَلَّ is said to occur غالبًا in:', options: ['الألوان والعيوب', 'المطاوعة', 'الطلب', 'التشارك'], correct: 0 },
        { q: 'اجْلَوَّذَ (he hurried) is built on which وزن؟', options: ['افْعَالَّ', 'افْعَنْلَلَ', 'افْعَوَّلَ', 'افْعَوْعَلَ'], correct: 2 },
      ],
      bank: [
        { title: 'ثلاثة أقسام', kind: 'mcq', prompt: 'On what basis is the ثلاثي مزيد فيه divided into three؟', options: ['On whether the verb is صحيح or معتل', 'On how many letters have been added — one, two or three', 'On the meaning the addition produces', 'On whether the verb is لازم or متعدٍّ'], correct: 1 },
        { title: 'ثقل الفعل', kind: 'mcq', prompt: 'Why is the verb described as heavier than the noun, in the doctrine that limits verb زيادة to six letters and noun زيادة to seven؟', options: ['It indicates two things — the حدث and its زمان — while the noun indicates only its referent', 'It has more أصول', 'It carries more حركات', 'It occurs more often in speech'], correct: 0 },
        { title: 'استخراج', kind: 'mcq', prompt: 'What does the noun اسْتِخْراج demonstrate؟', options: ['That اسْتَفْعَلَ is a verb pattern', 'That the ثلاثي may take three additions', 'That the مصدر is always longer than the verb', 'That a noun may reach seven letters by زيادة, where a verb stops at six'], correct: 3 },
        { title: 'أوزان الحرف الواحد', kind: 'mcq', prompt: 'Which three أوزان make up ما زيد فيه حرف واحد؟', options: ['فَاعَلَ، تَفَاعَلَ، اسْتَفْعَلَ', 'أَفْعَلَ، فَاعَلَ، فَعَّلَ', 'أَفْعَلَ، انْفَعَلَ، افْتَعَلَ', 'فَعَّلَ، تَفَعَّلَ، تَفَاعَلَ'], correct: 1 },
        { title: 'آمن وأقرّ', kind: 'mcq', prompt: 'آمَنَ and أَقَرَّ are listed under which وزن؟', options: ['فَعَّلَ', 'افْتَعَلَ', 'أَفْعَلَ', 'فَاعَلَ'], correct: 2 },
        { title: 'قاتل ووالى', kind: 'mcq', prompt: 'قَاتَلَ, آخَذَ and وَالَى are listed under which وزن؟', options: ['أَفْعَلَ', 'فَعَّلَ', 'تَفَاعَلَ', 'فَاعَلَ'], correct: 3 },
        { title: 'زكّى وولّى', kind: 'mcq', prompt: 'فَرَّحَ, زَكَّى, وَلَّى and بَرَّأَ are listed under which وزن؟', options: ['أَفْعَلَ', 'فَاعَلَ', 'تَفَعَّلَ', 'فَعَّلَ'], correct: 3 },
        { title: 'انقاد وانمحى', kind: 'mcq', prompt: 'انْكَسَرَ, انْشَقَّ, انْقادَ and انْمَحَى are listed under which وزن؟', options: ['اسْتَفْعَلَ', 'انْفَعَلَ', 'افْتَعَلَ', 'افْعَلَّ'], correct: 1 },
        { title: 'اتّصل واتّقى', kind: 'mcq', prompt: 'ادَّعَى, اتَّصَلَ, اتَّقَى, اصْطَبَرَ and اضْطَرَبَ all belong to which وزن؟', options: ['افْعَالَّ', 'افْتَعَلَ', 'انْفَعَلَ', 'تَفَعَّلَ'], correct: 1 },
        { title: 'احمرّ واصفرّ', kind: 'mcq', prompt: 'احْمَرَّ, اصْفَرَّ and اعْوَرَّ belong to which وزن؟', options: ['افْعَوْعَلَ', 'افْتَعَلَ', 'افْعَلَّ', 'افْعَالَّ'], correct: 2 },
        { title: 'ندرة افعلّ', kind: 'mcq', prompt: 'What do ارْفَضَّ عَرَقًا, اخْضَلَّ الرَّوْضُ and ارْعَوَى show about افْعَلَّ, given that its usual job is colours and defects؟', options: ['That it is a ملحق pattern', 'That it occurs outside الألوان والعيوب, though rarely', 'That it is confined to الألوان والعيوب', 'That it is always متعدٍّ'], correct: 1 },
        { title: 'تعلّم وتزكّى', kind: 'mcq', prompt: 'تَعَلَّمَ and تَزَكَّى belong to which وزن؟', options: ['افْتَعَلَ', 'انْفَعَلَ', 'تَفَعَّلَ', 'تَفَاعَلَ'], correct: 2 },
        { title: 'تباعد وتشاور', kind: 'mcq', prompt: 'تَبَاعَدَ and تَشَاوَرَ belong to which وزن؟', options: ['فَاعَلَ', 'افْتَعَلَ', 'تَفَاعَلَ', 'تَفَعَّلَ'], correct: 2 },
        { title: 'اطّهّر', kind: 'mcq', prompt: 'اطَّهَّرَ comes from تَطَهَّرَ. What happened to the تاء؟', options: ['It became a همزة', 'It was assimilated into the طاء, the two being close in مَخْرَج', 'It was dropped', 'It moved to the end of the word'], correct: 1 },
        { title: 'اثّاقل وادّارك', kind: 'mcq', prompt: 'اثَّاقَلَ and ادَّارَكَ are placed under which وزن؟', options: ['افْتَعَلَ', 'افْعَنْلَلَ', 'تَفَاعَلَ', 'تَفَعَّلَ'], correct: 2 },
        { title: 'تبارك وتعالى', kind: 'mcq', prompt: 'تَبَارَكَ and تَعَالَى are placed under which وزن؟', options: ['تَفَعَّلَ', 'فَاعَلَ', 'افْعَالَّ', 'تَفَاعَلَ'], correct: 3 },
        { title: 'اغدودن', kind: 'mcq', prompt: 'اغْدَوْدَنَ الشَّعْرُ means:', options: ['it grew long', 'its grass grew abundant', 'it went quickly', 'its redness intensified'], correct: 0 },
        { title: 'احمارّ واشهابّ', kind: 'mcq', prompt: 'احْمارَّ and اشْهابَّ are built on افْعَالَّ and glossed:', options: ['sought to become red / grey', 'removed its redness / greyness', 'its redness / greyness intensified', 'became possessed of redness / greyness'], correct: 2 },
        { title: 'اعلوّط', kind: 'mcq', prompt: 'اعْلَوَّطَ means:', options: ['its hair grew long', 'its grass grew abundant', 'clung to the camel’s neck and mounted it', 'hastened'], correct: 2 },
        { title: 'جمع الأوزان', kind: 'mcq', prompt: 'The ثلاثي مزيد فيه has three أوزان with one letter added, five with two letters added, and four with three letters added. What does the sum of those three counts give؟', options: ['أربعة — the أقسام of الفعل', 'اثنا عشر — the أبنية of الثلاثي مزيد فيه', 'ستة — the أبواب of الثلاثي مجرد', 'سبعة — the ملحقات of الرباعي'], correct: 1 },
      ],
    },
    // ---------------------------------------------------------------- L5
    {
      id: 'l5',
      title: 'الرباعي المزيد وملحقاته',
      subtitle: 'Augmenting the Quadriliteral — its three أوزان, its eight ملحقات, the احرنجم/اقعنسس distinction, and two closing تنبيهان',
      concepts: [
        // ---------------------------------------------------------------- concept 1
        {
          heading: 'أوزان الرباعي المزيد فيه',
          lines: [
            { html: `The <bdi>رباعي مجرد</bdi> (a four-root verb with nothing added) has a single وزن, <bdi>فَعْلَلَ</bdi>. Once letters are added to it, it becomes <bdi>الرباعي المزيد فيه</bdi>, and that augmented verb splits into two divisions, giving three أوزان in all.`, list: false },
            { box: { title: 'Definition', lines: [
              `يَنْقَسِمُ الرُّباعِيُّ المَزِيدُ إلى قِسْمَيْنِ: ما زِيدَ فيه حَرْفٌ واحِدٌ، وما زِيدَ فيه حَرْفانِ`,
            ] } },
            { html: `In words: the augmented quadriliteral divides into (1) what has had one letter added, and (2) what has had two letters added.`, list: false },
            { table: { headers: ['القسم (Division)', 'الوزن (Pattern)', 'المثال (Example)'], rows: [
              ['المزيد بحرف واحد — one letter added, one وزن', 'تَفَعْلَلَ', 'تَدَحْرَجَ to roll, tumble down ، تَزَلْزَلَ to shake, quake'],
              ['المزيد بحرفين — two letters added, first of two أوزان', 'افْعَنْلَلَ', 'احْرَنْجَمَ to gather, crowd together (= اجْتَمَعَ), from حَرْجَمَ meaning جَمَعَ (to gather)'],
              ['— second of the two; opens with a هَمْزَة وَصْل and doubles its second لام', 'افْعَلَلَّ', 'اقْشَعَرَّ to shudder ، اطْمَأَنَّ to feel at ease, reassured'],
            ] } },
            { html: `اقْشَعَرَّ is worth flagging: its bare root قَشْعَر is itself <bdi>غير مستعمل</bdi> — not actually used on its own. What speakers actually say for that meaning is a different مزيد form, <bdi>تَقَشْعَرَ</bdi>. So اقشعر is listed here by وزن even though its own unaugmented root never surfaces in speech.`, list: false },
          ],
          exercise: {
            prompt: `How many أوزان does الرباعي المزيد فيه have in all؟`,
            kind: 'mcq',
            options: ['Three — one for the single addition, two for the double addition', 'Two, one per division', 'Four, matching the four divisions of الفعل by مادة', 'Seven, one per باب'],
            correct: 0,
          },
        },
        // ---------------------------------------------------------------- concept 2
        {
          heading: 'ملحقات الرباعي المزيد',
          lines: [
            { html: `A <bdi>ملحق</bdi> is a verb reshaped onto a longer pattern's letter-count and vowelling purely so it conjugates the same way — not because a letter was truly added for a new meaning. الرباعي المزيد بحرف واحد has six such ملحقات.`, list: false },
            { box: { title: 'Definition', lines: [
              `والمُلْحَقُ بما زِيدَ فيه حَرْفٌ واحِدٌ يَأْتِي على سِتَّةِ أَوْزانٍ`,
            ] } },
            { html: `That is: what is likened (ملحق) to the singly-augmented quadriliteral comes on six أوزان.`, list: false },
            { html: `Each of the six prefixes a تاء to a ملحق pattern already met for the trilateral in the previous lesson — four of the six answer directly to patterns covered there. The fifth, <bdi>تَمَفْعَلَ</bdi> (as in تَمَسْكَنَ), answers to <bdi>مَفْعَلَ</bdi>, a pattern that was not among those four.`, list: false },
            { table: { headers: ['الوزن (Pattern)', 'المثال (Example)'], rows: [
              ['تَفَعْلَلَ', 'تَجَلْبَبَ to wrap oneself in a garment (جِلْبَاب)'],
              ['تَفَعْوَلَ', 'تَرَهْوَكَ to walk with a swaying, unsteady gait'],
              ['تَفَيْعَلَ', 'تَشَيْطَنَ to act like a devil (شَيْطَان), to misbehave wildly'],
              ['تَفَوْعَلَ', 'تَجَوْرَبَ to put on socks (جَوْرَب)'],
              ['تَمَفْعَلَ', 'تَمَسْكَنَ to feign poverty, to play the مِسْكِين'],
              ['تَفَعْلَى', 'تَسَلْقَى to stretch out lying on one\'s back'],
            ] } },
            { box: { title: 'Definition', lines: [
              `والمُلْحَقُ بما زِيدَ فيه حَرْفانِ، وَزْنانِ`,
            ] } },
            { html: `And what is likened to the doubly-augmented quadriliteral has two أوزان: <bdi>افْعَنْلَلَ</bdi>, as in اقْعَنْسَسَ to draw back stubbornly, to recoil, and <bdi>افْعَنْلَى</bdi>, as in اسْلَنْقَى to lie flat on one's back.`, list: false },
          ],
          exercise: {
            prompt: `How are the six ملحقات of the singly-augmented رباعي formed؟`,
            kind: 'mcq',
            options: ['By doubling the second لام of the root', 'By opening the verb with a همزة وصل', 'By inserting a نون after the عين', 'By prefixing a تاء to ملحق patterns already used for the trilateral'],
            correct: 3,
          },
        },
        // ---------------------------------------------------------------- concept 3
        {
          heading: 'الفرق بين احرنجم واقعنسس',
          lines: [
            { html: `احْرَنْجَمَ (to gather, crowd together) and اقْعَنْسَسَ (to draw back stubbornly) both weigh <bdi>افْعَنْلَلَ</bdi>, yet one counts as a true رباعي مزيد and the other only as a ملحق to one. The difference lies entirely in their two لام letters.`, list: false },
            { table: { headers: ['الفعل (Verb)', 'التصنيف (Classification)', 'لاماه (Its Two لام Letters)'], rows: [
              ['احْرَنْجَمَ', 'رباعي مزيد — a genuine augmented quadriliteral', 'Both letters are original root letters (أَصْلِيَّتان)'],
              ['اقْعَنْسَسَ', 'ملحق — likened to the doubly-augmented pattern', 'One of the two is added only to reach الإلحاق, the other is original'],
            ] } },
            { html: `The reason: حَرْجَمَ already exists as a رباعي root meaning جَمَعَ, so all four consonants of احرنجم — including both لام letters — are أصول. اقعنسس is different: its root قَعِسَ is only a ثلاثي (three root letters), so the second سين had to be repeated to reach the four-plus-two letter count that افعنللَ requires, and that repeated letter is زائدة للإلحاق, not أصلية.`, list: false },
            { box: { title: 'Example', lines: [
              `وهذا كالفَرْقِ بَيْنَ بَعْثَرَ وجَلْبَبَ`,
            ] } },
            { html: `The same pattern repeats one level down, among the bare quadriliterals: بَعْثَرَ (to scatter, turn things upside down) has four genuine root letters, while جَلْبَبَ has only three, with one letter repeated to fill out the وزن.`, list: false },
          ],
          clarification: `The pattern repeats at every level, which is why the comparison to بَعْثَرَ and جَلْبَبَ is exact. In both pairs, two verbs arrive at the same وزن by different routes: one because its root genuinely has that many letters, the other because a letter was repeated to reach the count. The وزن alone cannot tell you which — you have to know the root. حَرْجَمَ exists as a رباعي meaning جَمَعَ, so احْرَنْجَمَ's four consonants are all أصول; قَعِسَ is a ثلاثي, so the second سين in اقْعَنْسَسَ is a repetition put there for الإلحاق.`,
          exercise: {
            prompt: `احْرَنْجَمَ and اقْعَنْسَسَ share the وزن افْعَنْلَلَ. What separates them؟`,
            kind: 'mcq',
            options: ['They differ in the position of the نون', 'They differ only in meaning, not in structure', 'In اقعنسس one of the two لامان is زائدة للإلحاق; in احرنجم both are أصليتان', 'In احرنجم one لام is زائدة للإلحاق; in اقعنسس both are أصليتان'],
            correct: 2,
          },
        },
        // ---------------------------------------------------------------- concept 4
        {
          heading: 'التنبيه الأول: أقسام الفعل',
          lines: [
            { html: `With the أوزان of الرباعي المزيد complete, the whole discussion of المجرد والمزيد pauses to total up what has been covered — the same verb can be counted two different ways.`, list: false },
            { box: { title: 'Rule', lines: [
              `ظَهَرَ لك مما تَقَدَّمَ أنَّ الفِعْلَ باعْتِبارِ مادَّتِهِ أَرْبَعَةُ أَقْسامٍ: ثُلاثِيّ، ورُباعِيّ، وخُماسِيّ، وسُداسِيّ`,
              `أي: باعْتِبارِ عَدَدِ حُرُوفِهِ مُطْلَقًا الأَصْلِيَّةِ والزائِدَةِ`,
              `وباعْتِبارِ هَيْئَتِهِ الحاصِلَةِ من الحَرَكاتِ والسَّكَناتِ سَبْعَةٌ وثَلاثُونَ بابًا`,
            ] } },
            { html: `Counting by <bdi>المادَّة</bdi> means counting the total number of letters a verb has, root letters and added letters together — that gives only four divisions: ثلاثي، رباعي، خماسي، سداسي (three, four, five, or six letters). Counting by <bdi>الهَيْئَة</bdi> instead means counting the distinct patterns of حركات (vowels) and سكنات (quiescent letters) a verb's letters can carry — and by that measure the same material yields thirty-seven separate أبواب.`, list: false },
          ],
          exercise: {
            prompt: `Counting by هيئة rather than مادة, into how many أبواب does الفعل divide؟`,
            kind: 'mcq',
            options: ['ستة', 'سبعة وثلاثون', 'أربعة', 'اثنا عشر'],
            correct: 1,
          },
        },
        // ---------------------------------------------------------------- concept 5
        {
          heading: 'التنبيه الثاني: السماع والاستثناء',
          lines: [
            { html: `Knowing all the أوزان of المجرد and المزيد does not license generating any of them at will for any root. Three things are <em>not</em> guaranteed to exist just because the وزن exists:`, list: false },
            { box: { title: 'Rule', lines: [
              `لا يَلْزَمُ في كُلِّ مُجَرَّدٍ أن يُسْتَعْمَلَ له مَزِيدٌ`,
              `ولا في كُلِّ مَزِيدٍ أن يُسْتَعْمَلَ له مُجَرَّدٌ`,
              `ولا فيما اسْتُعْمِلَ فيه بَعْضُ المَزِيداتِ، أن يُسْتَعْمَلَ فيه البَعْضُ الآخَرُ`,
              `بَلِ المَدارُ في كُلِّ ذلك السَّماعُ`,
            ] } },
            { html: `Three separate denials: (1) a مجرد root need not have any مزيد form actually in use, (2) a مزيد verb need not have a bare مجرد in use alongside it — اِفْتَقَرَ to become poor, to be in need is a real, commonly used verb, yet there is no plain فَقَرَ used with that meaning, and (3) if some مزيد forms of a root are in use, the rest are not automatically in use too. In every one of these three cases, what actually exists is decided only by <bdi>السَّماع</bdi> — what has actually been heard from the Arabs — not by what the pattern would permit.`, list: false },
            { html: `One case is exempted from that reliance on hearing:`, list: false },
            { box: { title: 'Careful', lines: [
              `ويُسْتَثْنَى من ذلك الثُلاثِيُّ اللازِمُ، فَتَطَّرِدُ زِيادَةُ الهَمْزَةِ في أَوَّلِهِ لِلتَعْدِيَةِ، فيُقالُ في ذَهَبَ أَذْهَبَ، وفي خَرَجَ أَخْرَجَ`,
            ] } },
            { html: `For an intransitive ثلاثي (<bdi>ثلاثي لازم</bdi>), prefixing a همزة to make it transitive (<bdi>متعدٍّ</bdi>) is <bdi>قياسي</bdi> — regular and predictable — so you may form it for any لازم ثلاثي without first needing to hear that exact مزيد form used. ذَهَبَ to go becomes أَذْهَبَ to make go, to take away, and خَرَجَ to go out becomes أَخْرَجَ to take out, to expel.`, list: false },
          ],
          exercise: {
            prompt: `What does اِفْتَقَرَ illustrate in this تنبيه؟`,
            kind: 'mcq',
            options: ['A مجرد form that has no مزيد in use', 'A verb with two competing مزيد forms', 'A ثلاثي لازم made متعدٍّ by a همزة', 'A مزيد form in use with no bare مجرد form used alongside it'],
            correct: 3,
          },
        },
      ],
      quiz: [
        { q: 'How many أوزان does الرباعي المزيد فيه have overall, across both of its divisions؟', options: ['Two', 'Three: تَفَعْلَلَ for one letter added, and افْعَنْلَلَ and افْعَلَلَّ for two letters added', 'Four', 'Six'], correct: 1 },
        { q: 'احْرَنْجَمَ and اقْعَنْسَسَ share the وزن افْعَنْلَلَ but are classified differently. What does that pairing actually show؟', options: ['That اقعنسس is شاذ and should not be used', 'That the two verbs mean the same thing', 'That sharing a وزن does not settle which letters are أصول — you must know the root, since حرجم is a real رباعي root but قعس is only ثلاثي', 'That افعنللَ is not a real وزن'], correct: 2 },
        { q: 'Counting الفعل باعتبار مادته (by its total letter count), into how many أقسام does it divide؟', options: ['ثلاثة', 'ستة', 'اثنا عشر', 'أربعة: ثلاثي ورباعي وخماسي وسداسي'], correct: 3 },
        { q: 'Counting الفعل باعتبار هيئته (by the pattern of its حركات وسكنات), how many أبواب result؟', options: ['أربعة', 'سبعة وثلاثون', 'اثنا عشر', 'ستة'], correct: 1 },
        { q: 'According to the second تنبيه, what is said to be المدار (the deciding factor) in whether a given مجرد or مزيد form of a root is actually in use؟', options: ['السماع — what has actually been heard from the Arabs', 'القياس — pure analogical reasoning', 'الإجماع — scholarly consensus', 'الاشتقاق — derivation from a shared root'], correct: 0 },
        { q: 'Which single case is excepted from that reliance on السماع, and why؟', options: ['الرباعي المجرد, because it has only one وزن', 'المضاعف, because its two identical letters make it predictable', 'المهموز, because همزة never changes its form', 'الثلاثي اللازم, because adding a همزة to make it متعدٍّ is مطَّرِد (regular), as in ذهب/أذهب and خرج/أخرج'], correct: 3 },
      ],
      bank: [
        { title: 'تدحرج وتزلزل', kind: 'mcq', prompt: 'تَدَحْرَجَ to roll, tumble down and تَزَلْزَلَ to shake, quake are built on which وزن of الرباعي المزيد فيه؟', options: ['افْعَنْلَلَ', 'افْعَلَلَّ', 'تَفَعْوَلَ', 'تَفَعْلَلَ'], correct: 3 },
        { title: 'وزنا المزيد بحرفين', kind: 'mcq', prompt: 'Which two أوزان belong to الرباعي المزيد بحرفين (the quadriliteral augmented by two letters)؟', options: ['افْعَنْلَلَ وافْعَلَلَّ', 'تَفَعْلَلَ وافْعَنْلَلَ', 'افْعَلَلَّ وتَفَعْلَلَ', 'افْعَنْلَى وافْعَنْلَلَ'], correct: 0 },
        { title: 'ضبط افعلَلَّ', kind: 'mcq', prompt: 'The وزن افْعَلَلَّ opens with a هَمْزَة وصل and doubles its second لام. Which pair of verbs carries this pattern؟', options: ['احْرَنْجَمَ واقْعَنْسَسَ', 'تَدَحْرَجَ وتَزَلْزَلَ', 'احْمارَّ واشْهابَّ', 'اقْشَعَرَّ واطْمَأَنَّ'], correct: 3 },
        { title: 'قشعر', kind: 'mcq', prompt: 'What is said about قَشْعَر, the bare root that اقْشَعَرَّ (to shudder) is built from؟', options: ['It is itself a ملحق pattern', 'It is منحوت, coined by blending two words', 'It is غير مستعمل — not actually used; what is used instead is the مزيد form تَقَشْعَرَ', 'It is the commonest form of the root, more common than اقشعر itself'], correct: 2 },
        { title: 'تجلبب', kind: 'mcq', prompt: 'تَجَلْبَبَ (to wrap oneself in a garment) relates to جَلْبَبَ the same way which other pair relates to each other؟', options: ['اسْتَخْرَجَ to خَرَجَ', 'تَدَحْرَجَ to دَحْرَجَ — a تاء prefixed to a رباعي pattern', 'أَكْرَمَ to كَرُمَ', 'انْكَسَرَ to كَسَرَ'], correct: 1 },
        { title: 'تمسكن', kind: 'mcq', prompt: 'تَمَسْكَنَ (to feign poverty) is built on which of the six ملحق patterns of الرباعي المزيد بحرف واحد؟', options: ['تَفَيْعَلَ', 'تَفَعْلَى', 'تَمَفْعَلَ', 'تَفَعْلَلَ'], correct: 2 },
        { title: 'تسلقى', kind: 'mcq', prompt: 'تَسَلْقَى (to lie stretched out on one\'s back) is built on which pattern؟', options: ['تَمَفْعَلَ', 'تَفَوْعَلَ', 'تَفَعْلَى', 'تَفَعْوَلَ'], correct: 2 },
        { title: 'تشيطن وتجورب', kind: 'mcq', prompt: 'تَشَيْطَنَ (to act like a devil) and تَجَوْرَبَ (to put on socks) are built on which two patterns respectively؟', options: ['تَفَيْعَلَ وتَفَوْعَلَ', 'تَفَوْعَلَ وتَفَيْعَلَ', 'تَفَعْوَلَ وتَفَعْلَى', 'تَمَفْعَلَ وتَفَعْلَلَ'], correct: 0 },
        { title: 'اسلنقى', kind: 'mcq', prompt: 'اسْلَنْقَى (to lie flat on one\'s back) is built on which pattern؟', options: ['افْعَنْلَى', 'افْعَنْلَلَ', 'افْعَلَلَّ', 'تَفَعْلَى'], correct: 0 },
        { title: 'لاما اقعنسس', kind: 'mcq', prompt: 'In اقْعَنْسَسَ, what is the status of its two سينان (its two لام letters)؟', options: ['Both are أصليتان', 'Both are زائدتان', 'Neither is a لام of the word', 'One is أصلية and the other زائدة للإلحاق'], correct: 3 },
        { title: 'لاما احرنجم', kind: 'mcq', prompt: 'In احْرَنْجَمَ, what is the status of its two لامان؟', options: ['One is زائدة للإلحاق, the other أصلية', 'Both are زائدتان', 'They cannot be determined without more context', 'Both are أصليتان, because حرجم is itself an existing رباعي root'], correct: 3 },
        { title: 'الوزن لا يكفي', kind: 'mcq', prompt: 'احرنجم and اقعنسس share a وزن but are classified differently — one a true رباعي مزيد, the other only a ملحق. What general lesson does that teach؟', options: ['That the وزن alone does not settle which letters are original — you must know the underlying root', 'That the وزن of a verb is irrelevant to its classification', 'That one of the two verbs is شاذ and should be avoided', 'That both verbs must be ملحقات since they share a وزن'], correct: 0 },
        { title: 'بعثر وجلبب', kind: 'mcq', prompt: 'The احرنجم/اقعنسس distinction is compared to which earlier pair of quadriliterals؟', options: ['كَتَبَ واكْتَتَبَ', 'أَكْرَمَ وكَرُمَ', 'بَعْثَرَ وجَلْبَبَ — one with four genuine root letters, one with a repeated letter', 'دَحْرَجَ وزَلْزَلَ'], correct: 2 },
        { title: 'المادة', kind: 'mcq', prompt: 'When counting the أقسام of الفعل, what does باعتبار مادته (by its مادة) mean؟', options: ['By its total number of letters, أصلية and زائدة counted together', 'By the number of its root letters only, ignoring additions', 'By its pattern of حركات and سكنات', 'By whether it is لازم or متعدٍّ'], correct: 0 },
        { title: 'الهيئة', kind: 'mcq', prompt: 'What does باعتبار هيئته (by its هيئة) mean when counting أبواب الفعل؟', options: ['By whether it is لازم or متعدٍّ', 'By the pattern of حركات and سكنات its letters carry', 'By its total number of letters', 'By whether it is مجرد or مزيد'], correct: 1 },
        { title: 'سبعة وثلاثون بابا', kind: 'mcq', prompt: 'The figure سبعة وثلاثون بابًا for الفعل is reached by counting it according to which measure؟', options: ['الهيئة — its pattern of vowelling', 'المادة — its total letter count', 'المعنى — its meaning', 'عدد أصوله فقط — its root letters alone'], correct: 0 },
        { title: 'لا يلزم مزيد لكل مجرد', kind: 'mcq', prompt: 'The second تنبيه denies that every مجرد root must have a مزيد form in use. What settles whether it actually does؟', options: ['السماع alone — whether it has actually been heard used that way', 'القياس alone, since any مزيد وزن can be freely applied to any root', 'The meaning of the root', 'Whether the root is ثلاثي or رباعي'], correct: 0 },
        { title: 'افتقر بلا فقر', kind: 'mcq', prompt: 'اِفْتَقَرَ to become poor, to be in need is in common use, yet no plain مجرد فَقَرَ with that meaning is used alongside it. Which denial of the second تنبيه does this illustrate؟', options: ['That not every مزيد form requires a مجرد form to be in use alongside it', 'That not every مجرد form requires a مزيد form', 'That a ثلاثي لازم can always take a همزة', 'That some مزيد forms have no meaning at all'], correct: 0 },
        { title: 'بعض المزيدات', kind: 'mcq', prompt: 'The third denial concerns a root where only some of its possible مزيد forms are actually in use. What does it deny؟', options: ['That the root must be ثلاثي', 'That the remaining, unheard مزيد forms must also automatically be in use', 'That those forms carry any meaning at all', 'That the root can have a مجرد form'], correct: 1 },
        { title: 'همزة التعدية', kind: 'mcq', prompt: 'ذَهَبَ becomes أَذْهَبَ and خَرَجَ becomes أَخْرَجَ by prefixing a همزة. Why is this exempted from needing to be heard case by case؟', options: ['Because it is the only case of زيادة that exists in the language', 'Because it applies only to verbs that are already متعدٍّ', 'Because it is شاذ and memorized individually', 'Because prefixing a همزة to a ثلاثي لازم for تعدية is مطَّرِد — regular and predictable — rather than depending on السماع'], correct: 3 },
      ],
    },
  ],
};

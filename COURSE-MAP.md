# Advanced Nahw — Course Map

Module 01 (`content/module-01.js`) is generated from the live file — titles,
subtitles, and counts are read out of the module, not retyped. Everything
from Module 02 onward is a **proposal** until it has its own "authored"
entry below: modules 02-17 (old course, revamp-in-place) were deleted
2026-08-12 per explicit instruction, in favor of fully re-authoring the
course from `app-lessons/` module by module, the way Module 01 was done.
This file is now both the mapping shell (record `app-lessons` → lesson slot
decisions here, per `INSTRUCTIONS.md`) and the forward plan for what the
remaining modules should contain once each is actually written.

**Authoring order note (2026-08-12):** Modules 01-03 were authored in
order. Module 06 was then authored **out of order**, per explicit user
instruction, ahead of Module 05 (`app-lessons/022-025` — أفعال القلوب),
which is still only a proposal below, not yet written. Module 04
(`app-lessons/019-021` — اللزوم والتعدي) has since been authored too and is
now registered in `content/annahw.js` **before** `module-06.js` (array
position governs unlock order there, not the id string), so Module 06
currently unlocks right after Module 04. Module 07 (`app-lessons/028-032`
— كان وأخواتها) has also since been authored, likewise out of order, and is
registered directly after `module-06.js`. `content/module-08.js` and
`content/module-09.js` also already exist as authored content on disk but
are **not yet registered** in `content/annahw.js` — left for a later
merge pass. When Module 05 is authored, it slots in before `module-06.js`
in that array and Modules 06-07 move later in unlock order; nothing in
`module-06.js` or `module-07.js` themselves needs to change when that
happens. `content/module-16.js` (`app-lessons/089-091` — أحرف الجواب
والنفي والتأكيد) has also been authored out of order, well ahead of
Modules 10-15, since its three source files stand on their own regardless
of what precedes them in the الحرف غير العامل chapter; it too is **not
yet registered** in `content/annahw.js`, left for the same later merge
pass. `content/module-11.js` (`app-lessons/053-059` — زوائد حروف الجر
وحذفها، وإلا) has likewise been authored ahead of Module 10
(`app-lessons/047-052`, still only a proposal below), since 053-059 stand
on their own regardless of what precedes them within the حروف الجر group;
it too is **not yet registered** in `content/annahw.js`, left for the same
later merge pass.

Format per **authored** lesson: `lesson-id — Arabic title — English
subtitle — counts`. Format per **proposed** lesson (not yet authored):
`Arabic title — English subtitle — source file(s) — rough concept count`.
Proposed concept counts and lesson boundaries are estimates from a
file-by-file survey of `app-lessons/009` through `app-lessons/140` (every
file, done 2026-08-12) — expect them to shift somewhat during actual
authoring, the same way Module 01's own lesson boundaries were adjusted
once the source was read in full.

---

## Module 01 — الكلمة

`content/module-01.js` · 5 lessons

> الكلمة — its definition, its division into مفرد and مركب, and how to tell اسم, فعل, and حرف apart by their signs.

**2026-08-12: rewritten as new authorship, not a revamp.** Per explicit
user instruction, this module was written fresh from `app-lessons/`
without reading or reusing anything from the previous `content/module-01.js`
(old title "المقدمة", old scope: word → sentence → quasi-sentence →
governor/إعراب, old lesson count also 5). `app-lessons` turned out to be
far richer per topic than the old course could show in 5 lessons at that
scope, so this module was rescoped to cover only الكلمة itself —
definition, مفرد/مركب, the signs and kinds of الاسم, the signs of الفعل,
and الحرف. The old module's sentence-level topics (essential parts of a
sentence, nominal/verbal sentences, شبه الجملة, العامل والمعمول, الإعراب —
`app-lessons/009` onward) are covered by the **proposed** Modules 02-03
below.

- **l1** — الكلمة — The Word — لفظ, قول, and being مفرد rather than مركب
  (6 concepts, 6 quiz, 16 bank (0 تركيب, 16 mcq))
  → maps to: app-lessons/002-the-word-kalimah.md, app-lessons/003-mufrad-and-murakkab.md
- **l2** — الاسم: علاماته — Signs of the Noun — اسم's definition and the six signs that identify it
  (6 concepts, 6 quiz, 19 bank (2 تركيب, 17 mcq))
  → maps to: app-lessons/004-signs-of-the-noun.md
- **l3** — أقسام الاسم — Kinds of the Noun — الصريح vs المؤول, and اسم ذات vs اسم معنى vs اسم صفة
  (6 concepts, 6 quiz, 18 bank (3 تركيب, 15 mcq))
  → maps to: app-lessons/005-explicit-and-interpreted-nouns.md, app-lessons/006-nouns-according-to-meaning.md
- **l4** — الفعل — The Verb and Its Signs — the three meanings of a فعل, and every لفظي and معنوي sign that marks one
  (6 concepts, 6 quiz, 20 bank (1 تركيب, 19 mcq))
  → maps to: app-lessons/007-the-verb-and-its-signs.md
- **l5** — الحرف — The Particle — دلالته على معنى في غيره, and the four senses the word حرف carries
  (4 concepts, 6 quiz, 15 bank (1 تركيب, 14 mcq))
  → maps to: app-lessons/008-the-particle-harf.md

Note: `app-lessons/001-purpose-of-al-kubra.md` (front matter about the
book itself, not a grammar topic) is intentionally unmapped — out of
scope for this module and every other.

Bank counts are deliberately below the ~24/lesson density norm
(`content/README.md`): every prompt, option, and تركيب item here is
grounded only in what `app-lessons/002–008` actually states, per the "do
not invent grammar rules, examples, citations" instruction, and bank
تركيب items were only added where the source itself gives a genuine
parsed example sentence (not forced into lessons whose source is purely
definitional, e.g. l1).

---

## Module 02 — الجملة وشبه الجملة والكلام

`content/module-02.js` · 5 lessons

> الجملة’s division by إسناد into اسمية and فعلية, by meaning into خبرية and إنشائية, شبه الجملة’s two classifications, and الكلام vs الجملة.

**2026-08-12: authored as new authorship, following the same process as
Module 01.** The lesson boundaries below match the proposal that stood
in this file before authoring (l1 merges 009+010, l2 merges 011+012, l3
is 013 alone, l4 is 014 alone, l5 is 015 alone) — the survey held up once
the source was read in full, so no boundary changes were needed this
time.

- **l1** — الجملة: الإسناد والاسمية والفعلية — The Sentence — إسناد, its two essential parts, and جملة اسمية vs جملة فعلية
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/009-essential-parts-of-a-sentence.md, app-lessons/010-nominal-and-verbal-sentences.md
- **l2** — الجملة: الخبرية والإنشائية والكبرى والصغرى — Kinds of Meaning — خبر vs إنشاء, and جملة كبرى containing a جملة صغرى
  (5 concepts, 6 quiz, 24 bank (3 تركيب, 21 mcq))
  → maps to: app-lessons/011-sentences-according-to-meaning.md, app-lessons/012-major-and-minor-sentences.md
- **l3** — شبه الجملة: أقسامها بالبنية — شبه الجملة by Structure — الجار والمجرور vs الظرف والمضاف إليه
  (5 concepts, 6 quiz, 22 bank (2 تركيب, 20 mcq))
  → maps to: app-lessons/013-shibh-al-jumlah-by-structure.md
- **l4** — شبه الجملة: أقسامها بالعامل — شبه الجملة by Governor — الظرف اللغو vs الظرف المستقر
  (6 concepts, 6 quiz, 22 bank (2 تركيب, 20 mcq))
  → maps to: app-lessons/014-shibh-al-jumlah-by-amil.md (kept as one lesson, not split — its 6 `##` headings compressed into 6 concepts within the 4–6 range rather than forcing a second lesson)
- **l5** — الكلام: مفيد وموجب وغير موجب — الكلام — قول مفيد, and its division into موجب and غير موجب
  (5 concepts, 6 quiz, 22 bank (1 تركيب, 21 mcq))
  → maps to: app-lessons/015-kalam-affirmative-and-non-affirmative.md

تركيب counts taper across the module (6 → 3 → 2 → 2 → 1) because l1's
source is rich in parsed إعراب pairs while l2-l5 are mostly
definitional/classificatory — تركيب items were only added where the
source itself supplies a genuine parsed example sentence, the same
discipline Module 01 applied. Every Careful/Rule box whose app-lessons
source states the point in English prose (rather than a quoted Arabic
sentence) was distilled into a short Arabic box statement matching
Module 01's convention, with the full English explanation kept in the
surrounding prose — no new grammar content, only a restatement in the
box's established register.

---

## Module 03 — العامل والمعمول والإعراب: تمهيد

`content/module-03.js` · 3 lessons

> العامل and المعمول defined and paired, then الإعراب — its three لغوي senses and its three types, لفظي, تقديري, and محلي.

**2026-08-12: authored.** Registered as `MODULES[2]` in `content/annahw.js`,
after Module 02. l1 merges 016+017 (عامل and معمول are a matched pair — most
of 017 only makes sense against 016's definitions, and the two together
needed 7 concepts rather than the ~6 estimated, once every table and worked
example from both files was accounted for). l2 covers 018's opening
sections through الإعراب اللفظي; l3 covers التقديري and المحلي in full plus
their contrast — the 5/5 split of file 018 held, but l2 landed at 4
concepts rather than 5 (اللفظي's definition and worked example merged into
one concept, matching how Module 01 usually pairs a definition with its
example rather than splitting them).

- **l1** — العامل والمعمول — The Governor and the Governed — العامل, المعمول, غير العامل, and غير المعمول
  (7 concepts, 6 quiz, 25 bank (6 تركيب, 19 mcq))
  → maps to: app-lessons/016-amil-and-non-amil.md, app-lessons/017-mamul-and-non-mamul.md
- **l2** — الإعراب: تعريفه ومعانيه وأقسامه — الإعراب Defined — its three لغوي senses, its three أقسام, and الإعراب اللفظي
  (4 concepts, 6 quiz, 18 bank (2 تركيب, 16 mcq))
  → maps to: app-lessons/018-irab.md (part 1: معنى الإعراب through الإعراب اللفظي)
- **l3** — التقديري والمحلي — الإعراب التقديري and المحلي — where the sign is estimated, and where it belongs only to the محل
  (5 concepts, 6 quiz, 17 bank (2 تركيب, 15 mcq))
  → maps to: app-lessons/018-irab.md (part 2: الإعراب التقديري through الفرق بين التقديري والمحلي)

تركيب items in l1 (6) draw from every worked example in 016/017 — the two
example sentences with source-given tarkeeb tables (وَلَنْ نُشْرِكَ
بِرَبِّنَا أَحَدًا, مَا ضَلَّ صَاحِبُكُمْ), plus قَامَ زَيْدٌ and the three
short الاسم/الفعل examples 017 tables (جَاءَ زَيْدٌ, رَأَيْتُ زَيْدًا,
لَمْ يَفْعَلْ). l2 and l3 each carry only 2 تركيب items because 018's own
tarkeeb tables (يَجْتَهِدُ المُؤْمِنُ فِي الخَيْرِ, يَسْعَى الفَتَى إِلَى
الهُدَى, تَسْعَيْنَ أَنْتُنَّ إِلَيْهِـ) are the only genuinely parsed
examples the source supplies — one per concept covering each إعراب type,
plus a term-matching تركيب item in l2 for the العامل/المعمول/الإعراب chain.

---

## Module 04 — الفعل القياسي: اللزوم والتعدي

`content/module-04.js` · 4 lessons

> الفعل القياسي's split into اللازم, whose effect stops at its فاعل, and المتعدي, whose effect reaches one or more مفعول به — and how the same فعل can be لازم in direct إعراب while still متعدي in meaning through a حرف جر.

**2026-08-12: authored**, following the proposal below — `app-lessons/019-021`
covers the module's whole scope, and 020's suggested 2-lesson split held up
once the source was read in full. Registered in `content/annahw.js`
between `module-03.js` and `module-06.js` (Module 06 was authored out of
order before this module existed — see its own entry below); array
position, not the id string, governs unlock order, so Module 06 now
unlocks right after this module instead of right after Module 03. Module
05 (أفعال القلوب) remains unauthored and will slot in between this module
and Module 06 once written.

- **l1** — الفعل اللازم — The Intransitive Verb — لازم بنفسه, لازم بواسطة حرف الجر, and the complements it still allows
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/019-the-intransitive-verb.md
- **l2** — الفعل المتعدي: بنفسه وبواسطة الحرف — The Transitive Verb — متعدي بنفسه vs متعدي بواسطة حرف الجر, and reading the same verb from two angles
  (4 concepts, 6 quiz, 24 bank (3 تركيب, 21 mcq))
  → maps to: app-lessons/020-the-transitive-verb.md (part 1: definition through the two-angle لازم/متعدي discussion)
- **l3** — الفعل المتعدي: فعل واحد بتركيبين وأضرب المتعدي — One Verb, Two Structures — اهدنا vs وهداه, انتهاء الغاية, and how مفاعيل are counted
  (5 concepts, 6 quiz, 24 bank (3 تركيب, 21 mcq))
  → maps to: app-lessons/020-the-transitive-verb.md (part 2: the اهدنا/وهداه meaning contrast through متعدي إلى مفعول واحد)
- **l4** — المتعدي إلى مفعولين — The Two-Object Verb — أفعال العطاء, حذف المفعولين, أفعال الظن, and فعل الجارحة vs فعل القلب
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/021-two-object-transitive-verbs.md

l2 and l3's تركيب counts (3 each, not the usual 6) reflect 020's own source
material: only three genuinely quoted, parseable example sentences exist in
each half (حَفِظَ الطَّالِبُ الدَّرْسَ / أَذْهَبَ عَنَّا الحَزَنَ / ذَهَبَ
اللهُ بِنُورِهِمْ for l2; اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ / وَهَدَاهُ
إِلَى صِرَاطٍ مُسْتَقِيمٍ / خَلَقَ السَّمَاوَاتِ وَالأَرْضَ for l3) —
matching the discipline Modules 01-03 and 06 applied to their own thin
spots rather than forcing تركيب items onto sentences the source never
quotes in full.

---

## Module 06 — أفعال التحويل والتعليق والإلغاء

`content/module-06.js` · 3 lessons

> التحويل completing the two-object verb family; التعليق and الإلغاء closing out أفعال القلوب.

**2026-08-12: authored out of order**, per explicit user instruction — see
the authoring-order note at the top of this file. Registered in
`content/annahw.js` after Module 04 (array position, not the id string,
governs unlock order), so it currently unlocks right after Module 04.
Module 05 (`app-lessons/022-025`) remains a proposal below. The lesson
boundaries match the proposal that stood in this file before authoring
(l1 = 026 alone, l2/l3 split 027 in two) — the survey held up once the
source was read in full.

- **l1** — أفعال التحويل — Verbs of Transformation — صيّر، ردّ، ترك، تخذ/اتخذ، وهب، and the two faces of جعل
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/026-afal-al-tahweel.md
- **l2** — الأفعال الثلاثية المفعول والتعليق — Three-Object قلب Verbs and Suspension — how a جملة can fill both مفعولي فعل القلب, and what التعليق does to its عمل
  (5 concepts, 6 quiz, 24 bank (4 تركيب, 20 mcq))
  → maps to: app-lessons/027-taleeq-and-ilgha.md (part 1: verbs taking three مفاعيل, through الفعل الشبيه بفعل القلب)
- **l3** — المعلقات وأحكام الإلغاء والترجيح — What Triggers التعليق, and الإلغاء — the full list of صدارة particles, then when to cancel a فعل قلب's عمل entirely
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/027-taleeq-and-ilgha.md (part 2: تعليق مع مفعول واحد through الترجيح بين الإلغاء والإعمال)

l2's تركيب count (4, not the usual 6) reflects the source itself: only four
genuinely parseable worked examples exist for the اسم مؤول/جملة/الفعل
الشبيه material (يريهم, اعلموا أن الله, يبلوكم, سلهم) — the شهد example is
explicitly flagged in 027 as illustrating its point "less cleanly" and was
left out of the bank rather than forced in, matching the discipline
Modules 01-03 applied to their own thin spots.

---

## Module 07 — الأفعال الناقصة: كان وأخواتها

`content/module-07.js` · 6 lessons

> The ناقص فعل family: كان's own senses, its time-of-day and transformation sisters, continuation, and the two closing members.

**2026-08-12: authored out of order**, per explicit user instruction, at a
point where Module 06 was the newest authored module and Module 05
(`app-lessons/022-025`) was still only a proposal. By the time this module
was wired into `content/annahw.js`, Module 04 and Module 06 had already
been authored by concurrent sessions — see the authoring-order note at the
top of this file and `annahw.js`'s own header comment. Registered directly
after `module-06.js` (array position, not the id string, governs unlock
order), so Module 07 currently unlocks right after Module 06. Module 05
remains the one gap in the array; when it exists, it slots in between
`module-04.js` and `module-06.js` per the existing note, and does not
affect this module's position. The lesson boundaries below match the
proposal that stood in this file before authoring exactly (l1/l2 split
028 in two per the same part-1/part-2 pattern Module 03 used for 018; l3 =
029 alone; l4 = 030 alone; l5 = 031 alone; l6 = 032 alone) — the survey
held up once every source file was read in full, except that l1's "six
senses" estimate for كان undercounted: the source gives six tense-shades
plus two further senses (الانبغاء والقدرة), eight in total, so l1 covers
all eight rather than six.

- **l1** — الأفعال الناقصة: التعريف ومعاني كان — The Deficient Verb — why كان is called ناقص, and the eight senses it carries
  (6 concepts, 6 quiz, 21 bank (2 تركيب, 19 mcq))
  → maps to: app-lessons/028-afal-al-naqisa-kana.md (part 1: السماعي framework through معنى القدرة)
- **l2** — حذف نون كان وحذف كان مع اسمها — Dropping كان — the three conditions for حذف النون, and the Kufi/Basri split over حذف كان واسمها
  (5 concepts, 6 quiz, 17 bank (1 تركيب, 16 mcq))
  → maps to: app-lessons/028-afal-al-naqisa-kana.md (part 2: حذف نون كان through the Basri reading of ﴿فَآمِنُوا خَيْرًا لَكُمْ﴾)
- **l3** — أصبح وأضحى وأمسى وظل وبات — The Time-of-Day Sisters — كان's five sisters, distinguished only by the part of day each one fixes
  (6 concepts, 6 quiz, 24 bank (5 تركيب, 19 mcq))
  → maps to: app-lessons/029-asbaha-adha-amsa-zalla-bata.md
- **l4** — صار وأخواتها بمعناها — صار and Its Borrowed Meaning — تحول الذات and تحول الصفات, then which verbs can carry صار's sense
  (6 concepts, 6 quiz, 23 bank (6 تركيب, 17 mcq))
  → maps to: app-lessons/030-sara-and-afal-bi-mana-sara.md
- **l5** — أفعال الاستمرار: ما برح، ما انفك، ما زال، ما فتئ — The Continuity Verbs — four أخوات كان whose older, complete-verb meaning still works inside their ناقص use
  (6 concepts, 6 quiz, 24 bank (5 تركيب, 19 mcq))
  → maps to: app-lessons/031-afal-al-istimrar.md
- **l6** — ما دام وليس، وأحكام عامة للأفعال الناقصة — Closing the List — the last two أخوات كان, then word order and تامة usage across the whole family
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/032-ma-dama-and-laysa.md

l1 and l2's bank counts (21 and 17, below the ~24 norm) reflect 028's own
source material: many of the module's Rule/Careful boxes are general
principles (كثرة المبنى تدل على زيادة المعنى, the Kufi/Basri grammatical
dispute) rather than parsed example sentences, so bank تركيب items are
capped at what the source actually gives a full إعراب table for (2 in l1:
وَكَانُوا عَلَيْهِ شُهَدَاءَ, وَكَانَ الإِنْسَانُ عَجُولًا; 1 in l2: الْتَمِسْ
وَلَوْ خَاتَمًا مِنْ حَدِيدٍ, since فَآمِنُوا خَيْرًا لَكُمْ's own analysis
turns on an elided فعل and اسم that a drag-the-label تركيب item cannot
represent) — the same discipline Modules 01-03, 04, and 06 applied to
their own thin spots. l3-l6, by contrast, sit at or near the 24-item norm
with 5-6 تركيب items each, since 029-032 are unusually rich in short,
cleanly parsed قرآن and حديث examples with a source-given إعراب table for
nearly every one.

---

## Module 08 — الرجاء والمقاربة والشروع والمدح والذم والتعجب

`content/module-08.js` · 6 lessons

> أفعال الرجاء والمقاربة والشروع closing out الأفعال الناقصة, أفعال المدح والذم raising their own فاعل and مخصوص, and صيغ التعجب expressing wonder.

**2026-08-12: authored out of order**, following the same pattern as
Module 06 — see the authoring-order note at the top of this file. **NOT
YET registered** in `content/annahw.js`'s `MODULES` array: left unwired per
explicit instruction until Modules 05 and 07 exist and the array can be
rebuilt in id order, rather than slotting in at the wrong array position
under a correct id string. The lesson boundaries below match the proposal
that stood in this file before authoring — all six lessons held (l1=033,
l2=034+035, l3=036, l4=037, l5=038, l6=039) with no boundary changes
needed.

- **l1** — أفعال الرجاء — The Hope Verbs — عسى’s three senses, and اخلولق and حرى beside it
  (6 concepts, 6 quiz, 22 bank (5 تركيب, 17 mcq))
  → maps to: app-lessons/033-afal-al-raja.md
- **l2** — أفعال المقاربة — The Nearness Verbs — كاد’s affirmative and negated senses, and كرب and أوشك beside it
  (6 concepts, 6 quiz, 22 bank (5 تركيب, 17 mcq))
  → maps to: app-lessons/034-kada.md, app-lessons/035-karaba-and-awshaka.md
- **l3** — أفعال الشروع — The Verbs of Beginning — قياسية members like جعل، أخذ، and طفق, and the شروط on their خبر
  (5 concepts, 6 quiz, 16 bank (2 تركيب, 14 mcq))
  → maps to: app-lessons/036-afal-al-shuru.md
- **l4** — أفعال المدح والذم — Verbs of Praise and Blame — نعم، حبذا، بئس، ساء and لا حبذا, and how they raise فاعل and مخصوص
  (6 concepts, 6 quiz, 22 bank (5 تركيب, 17 mcq))
  → maps to: app-lessons/037-afal-al-madh-wal-dham.md
- **l5** — أحكام تكميلية لأفعال المدح والذم — Further Rulings on Praise and Blame — ما after نعم/بئس, حذف المخصوص, and حبذا’s منصوب companion
  (5 concepts, 6 quiz, 19 bank (4 تركيب, 15 mcq))
  → maps to: app-lessons/038-afal-al-madh-wal-dham-rulings.md
- **l6** — صيغ التعجب — Forms of Wonder — ما أفعله and أفعل به, and the سماعي expressions that borrow their sense from context
  (6 concepts, 6 quiz, 22 bank (5 تركيب, 17 mcq))
  → maps to: app-lessons/039-sighat-al-tajajub.md

l3's bank count (16, below the ~22-24 norm) reflects the source itself:
036 supplies only two genuinely parsed worked examples (طَفِقَا يَخْصِفَانِ
and فَطَفِقَ مَسْحًا), so its تركيب items are capped at 2 rather than forced
to a flat 6 — the same discipline Modules 01-03 and 06 applied to their
own thin spots. l3 is also the only lesson in this module with 5 rather
than 6 concepts, matching COURSE-MAP's own ~4-concept estimate for 036
once the source (definitional, with no dense worked-example clusters) was
read in full.

---

## Module 11 — زوائد حروف الجر وحذفها، وإلا

`content/module-11.js` · 6 lessons

> The أحرف صِلَة family — الباء، مِن، اللام، and الكاف in their meaning-free زائدة role, plus the handful of words some grammarians add as حرف جر — then حذف حرف الجر, and إلا as the bridge from حروف الجر into الاستثناء.

**2026-08-12: authored out of order**, ahead of Module 10 (`app-lessons/047-052`
— the rest of the أصلية حروف الجر, plus أحرف القسم، مذ/منذ، ورُبَّ), since
053-059 stand on their own regardless of what precedes them — the same
reasoning Module 08's and Module 16's out-of-order authoring used; see the
authoring-order note at the top of this file. **NOT YET registered** in
`content/annahw.js`'s `MODULES` array — that registry is shared with
concurrent sessions authoring other modules, and Module 10 does not yet
exist to fill the array slot before this one, so wiring both in is left for
a later merge pass. The lesson boundaries below match the proposal that
stood in this file before authoring (l1=053, l2=054, l3=055, l4=056+057,
l5=058, l6=059) — the survey held up once every source file was read in
full, except that l6 (059/إلا) covers only 4 concepts rather than the ~4
already estimated (matching), while l1 and l3 landed at 6 concepts (not the
~5 estimated) since 053 (الباء الزائدة) and 055 (اللام الزائدة) are each
dense enough — five قياسية/سماعية positions for الباء, four named
positions across three settings for اللام — that compressing either below
6 would have meant dropping a genuinely distinct position rather than
condensing prose.

- **l1** — الباء الزائدة — الباء الزائدة — its قياسية and سماعية positions, and how it differs from الباء الأصلية
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/053-al-ba-al-zaida.md
- **l2** — مِنْ الزائدة — مِنْ الزائدة — its role on تمييز كم الخبرية, its condition of كلام غير موجب, and the debate over كلام موجب
  (4 concepts, 6 quiz, 20 bank (4 تركيب, 16 mcq))
  → maps to: app-lessons/054-min-al-zaida.md
- **l3** — اللام الزائدة — اللام الزائدة — لام الجحود على خبر كان المنفي, لام التبيين على الفاعل, ولام التقوية على المعمول الضعيف الصلة
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/055-al-lam-al-zaida.md
- **l4** — الكاف الزائدة، وحروف عند البعض — الكاف الزائدة closing the أحرف صلة, then لعلّ، خلا/عدا، متى، وكي — words a minority additionally treat as حرف جر
  (5 concepts, 6 quiz, 18 bank (3 تركيب, 15 mcq))
  → maps to: app-lessons/056-al-kaf-al-zaida.md, app-lessons/057-huruf-jarr-inda-al-bad.md
- **l5** — حذف حرف الجر — حذف حرف الجر — قياسا قبل أنْ وأنّ, سماعا elsewhere, and the noun that survives the drop as منصوب بنزع الخافض
  (4 concepts, 6 quiz, 18 bank (3 تركيب, 15 mcq))
  → maps to: app-lessons/058-hadhf-harf-al-jarr.md
- **l6** — إلّا — إلّا — the one particle giving نصب to a single noun, and its role in الاستثناء المتصل and المنقطع
  (4 concepts, 6 quiz, 14 bank (2 تركيب, 12 mcq))
  → maps to: app-lessons/059-illa.md

تركيب counts taper across l2, l4, l5, and l6 (4, 3, 3, 2, against the
~6/lesson norm l1 and l3 hit) because those source files are genuinely
thinner in fully quoted, single-reading worked examples — the same
discipline every prior module applied to its own thin spots. l2 (054)
supplies five candidate آيات but one (﴿يَغْفِرْ لَكُمْ مِنْ ذُنُوبِكُمْ﴾) is
explicitly a live دلالة dispute between two readings, not a single-answer
تركيب; l4 (056+057) has only one worked example for الكاف itself and three
more spread across four unrelated minority-view particles, one of which
(متى بلغة هذيل) is an archaic poetry line too dense to reduce to a clean
words[]/labels[] pair; l5 (058) supplies exactly three fully quoted
sentence pairs across its قياسا and سماعا rules; l6 (059) supplies exactly
two — 059 is the thinnest source file in this module, being mostly
definitional/classificatory (الاستثناء المتصل/المنقطع, the two-view عامل
debate) rather than built around further worked examples.

---

## Module 12 — إنّ وأخواتها

`content/module-12.js` · 6 lessons

> حروف تنصب الاسم وترفع الخبر — where إنّ takes كسر, where أنّ takes فتح, the positions where either reading works, supplementary rulings on both, and three more of the seven أخوات: كأنّ، لكنّ، لعلّ.

**2026-08-12: authored**, following the proposal that stood in this file
before authoring — `app-lessons/060-066` covers the module's whole scope.
**NOT YET registered** in `content/annahw.js`'s `MODULES` array, per the
same reasoning as Modules 09-11: that registry is shared with concurrent
sessions authoring other modules, so wiring it in is left for a later
merge pass. The lesson boundaries below match the proposal exactly (l1/l2
split 060's twelve كسر contexts in half — six contexts each: l1 covers
الابتداء حقيقةً وحكماً, جواب القسم, مقول القول, واو الحال, and حتى
الابتدائية; l2 covers الصلة, النعت, تعليق العامل اللفظي باللام المزحلقة,
إلا للحصر, حيث, and خبر اسم عين; l3 = 061 whole; l4 = 062 whole; l5 = 063
whole; l6 = 064+065+066 together) — the survey held up once every source
file was read in full, with no boundary changes needed. app-lessons/067
(ليت) and 068 (لِمَ سُمّيت هذه الحروف مشبهة بالفعل) belong to Module 13,
already authored separately — see its own entry above — not to this
module.

- **l1** — إنّ: مواقع كسر الهمزة (الأولى) — إنّ — the first of the seven حروف تنصب الاسم وترفع الخبر, and where the الابتداء, القسم, and القول contexts keep its همزة مكسورة
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/060-inna-mawaqi-al-maksura.md (part 1: المقدمة وقاعدة إنّ أم أنّ through حتى الابتدائية)
- **l2** — إنّ: مواقع كسر الهمزة (تتمة) — إنّ — the remaining كسر contexts: الصلة, النعت, تعليق العامل اللفظي, إلا للحصر, حيث, and خبر اسم عين
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/060-inna-mawaqi-al-maksura.md (part 2: في الصلة through في خبر اسم عين)
- **l3** — أنّ: مواقع فتح الهمزة — أنّ — the second of the seven, and the twelve مواضع مفرد where its همزة is فتح
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/061-anna-mawaqi-al-maftuha.md
- **l4** — مواضع جواز إنّ وأنّ معًا — Five positions where either إنّ or أنّ works — علة سابقة, فاء الجزاء, لا جرم, عطف بعد جملة ومفرد, and إذا الفجائية
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/062-mawadi-jawaz-inna-anna.md
- **l5** — أحكام تكميلية لإنّ وأنّ — What their اسم can be, where their خبر can sit, how عطف works around them, and two extensions of أنّ
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/063-ahkam-inna-anna-takmiliyya.md
- **l6** — كأنّ ولكنّ ولعلّ — Three more of the seven — the حرف تشبيه, the حرف استدراك, and the حرف توقع — closing this module short of ليت
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/064-kaanna-harf-tashbih.md, app-lessons/065-lakinna-harf-istidrak.md, app-lessons/066-laalla-harf-tawaqqu.md

Every lesson in this module holds the full 24-item/6-تركيب norm, unlike
several neighboring modules that taper for thin source material. l6 merges
three individually-thin files, but 064-066 together still supply eight
genuinely quoted worked examples (one for كأنّ, two for لكنّ, five for
لعلّ) — enough تركيب candidates for the full six without forcing anything
the source doesn't give. تركيب items across the module draw only on آيات
and constructed examples app-lessons itself quotes in full — the same
discipline every prior module in this course applied.

---

## Module 15 — أحرف العطف

`content/module-15.js` · 6 lessons

> أحرف العطف — the nine coordinating particles that join two items under one حكم without touching either one's إعراب, from واو's bare جمع through حتّى's غاية, أم's وأو's context-shifting senses, لا's وبل's reversals, and closing with إمّا and لكن.

**2026-08-12: authored as new authorship, following the same process as Modules
01-03 and 09.** Registered on disk as `content/module-15.js` but **NOT YET
registered** in `content/annahw.js`'s `MODULES` array — left unwired per the
same precedent as `content/module-08.js` and `content/module-09.js`, since
that registry is shared with concurrent sessions authoring Modules 05 and
10-14 right now. (Note on placement: Module 09's own authored write-up lives
further down this file, as a `###` entry nested under "Chapter: العامل وغير
العامل — الحرف العامل" inside the still-forming Proposed Modules survey,
rather than up here alongside Modules 01-04/06-08. This entry is placed here
instead, as a clean top-level `##` authored entry directly before the
Proposed Modules section, matching Modules 01-04/06-08's convention; Module
09's own placement is left untouched, as it belongs to other sessions'
history, not this one.) The lesson boundaries below match the proposal that
stood in this file before authoring exactly (l1 = 079 alone; l2 = 080+081;
l3 = 082 alone; l4 = 083+084; l5 = 085+086; l6 = 087+088) — the survey held
up once every source file was read in full, so no lesson-boundary changes
were needed. Concept counts landed slightly denser than the ~5 estimated in
three lessons: l1 grew to 6 (the chapter-opening الحرف غير العامل/أحرف
العطف framing earned its own concept before الواو's material begins), and
l3/l4 grew to 6 (082 is confirmed as the densest file in the range, with two
nested شروط plus the عاطفة/جارّة contrast needing full room; 083+084
combined supply enough distinct material — أم's التعيين/التسوية split and
three معادل shapes, أو's three clause-type senses — that compressing below 6
would drop source content). l3 (حتّى) held at one lesson rather than
splitting, the same way module-09.js's denser single-حرف lessons absorbed
extra material into 6 concepts instead of forcing a second lesson.

تركيب counts track how many genuinely parsed, single-reading example
sentences each source lesson supplies, the same discipline every prior
module applied: l1 (الواو) and l6 (إمّا ولكن) are the thinnest, landing at 4
apiece — 079 is mostly discursive prose around a handful of quoted clauses,
and 087/088 are each short, single-topic files with only two clean worked
examples apiece. l2-l5 each reach 6, supplied by 080-081's several
stand-alone آيات and أحاديث, 082's six distinct worked example sentences,
083-084's four معادل shapes plus three clause-type أو examples, and
085-086's نعت/حال repetitions plus بل's mirror-image pair.

- **l1** — الواو — الواو — لِلْجَمْعِ مُطْلَقًا, and how قرينة alone supplies any order or simultaneity it never asserts
  (6 concepts, 6 quiz, 24 bank (4 تركيب, 20 mcq))
  → maps to: app-lessons/079-atf-waw.md
- **l2** — ثمّ والفاء — ثمّ and الفاء — both assert order, but تراخي vs تعقيب, and each carries three senses of its own between جمل
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/080-atf-thumma.md, app-lessons/081-atf-fa.md
- **l3** — حتّى العاطفة — حتّى — غاية and تدريج, its two شروط as عاطفة, and how to tell it apart from حتّى الجارّة
  (6 concepts, 6 quiz, 25 bank (6 تركيب, 19 mcq))
  → maps to: app-lessons/082-atf-hatta.md
- **l4** — أم وأو — أم — restricted to الاستفهام, for طلب التعيين or التسوية — and أو, whose sense shifts with خبر, أمر, or نفي/نهي
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/083-atf-am.md, app-lessons/084-atf-aw.md
- **l5** — لا وبل — لا — نفي الحكم عن المعطوف, its شرائط and its تكرار — and بل, whose mechanism flips between إبطال and تقرير
  (5 concepts, 6 quiz, 23 bank (6 تركيب, 17 mcq))
  → maps to: app-lessons/085-atf-la.md, app-lessons/086-atf-bal.md
- **l6** — إمّا ولكن — إمّا — not actually a حرف عطف على الأصح, though it behaves like أو/أم — and لكن, the ninth and last, whose عمل depends on a preceding واو
  (5 concepts, 6 quiz, 23 bank (4 تركيب, 19 mcq))
  → maps to: app-lessons/087-imma.md, app-lessons/088-atf-lakin.md

---

## Module 14 — النواصب والجوازم

`content/module-14.js` · 6 lessons

> حروف تنصب الفعل المضارع — أنْ، كَيْ، لَنْ، وإِذَنْ — then حروف تجزمه — لَمْ، لَمّا، لام الأمر، لا الناهية، وإنْ الشرطية بأخواتها.

**2026-08-12: authored, following the same process as Modules 01-03, 09,
10, and 15.** **NOT YET registered** in `content/annahw.js`: that registry
file is shared with concurrent sessions authoring other modules, so wiring
it in is left for a later merge pass, per the same reasoning already used
for Modules 08, 09, 10, 11, 13, 15, and 16. The lesson boundaries below
match the proposal that stood in this file before authoring exactly (l1/l2
split 073 in two, the same part-1/part-2 pattern Module 03 used for 018
and Module 13 used for 069; l3 pairs 074+075; l4 covers 076; l5 covers
077; l6 covers 078) — the survey held up once every source file was read
in full, with only l1 growing from ~5 to 5 concepts as estimated and no
lesson needing a further split, including l6 (078), which the proposal
below flagged as dense enough to possibly need one — it did not.

- **l1** — أنْ: الناصبة والمضمرة جوازًا — أنْ — يقين vs ظنّ distinction, and the 2 جوازًا positions
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/073-huruf-tansib-mudari-an.md (part 1: تعريف أنْ through the two جوازًا positions)
- **l2** — أنْ: المضمرة وجوبًا — أنْ — the 5 وجوبًا positions (حتى، لام الجحود، أو، واو المعية، فاء السببية), and the 3 attested سماعي drops
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/073-huruf-tansib-mudari-an.md (part 2: the 5 وجوبًا positions through إضمار أنْ سماعًا)
- **l3** — كَيْ ولَنْ — كَيْ and لَنْ — both individually thin, pairing naturally: كَيْ's تعليل and the ناصبة/جارة test, then لَنْ's تأكيد النفي and its rarer تأبيد reading
  (5 concepts, 6 quiz, 20 bank (4 تركيب, 16 mcq))
  → maps to: app-lessons/074-huruf-tansib-kay.md, app-lessons/075-huruf-tansib-lan.md
- **l4** — إذن، وخلاصة النواصب الأربعة — إِذَنْ — حرف/اسم debate, its 3 شروط العمل, its رسم عثماني spelling, and a recap of all four نواصب
  (4 concepts, 6 quiz, 18 bank (3 تركيب, 15 mcq))
  → maps to: app-lessons/076-huruf-tansib-idhan.md
- **l5** — جوازم تجزم فعلا واحدا — لَمْ، لَمّا، لام الأمر، لا الناهية — the four single-فعل جوازم, closing with the أمر/نهي pairing in ﴿فَلْيَعْمَلْ ... وَلا يُشْرِكْ﴾
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/077-jawazim-fil-wahid.md
- **l6** — إنْ الشرطية — إنْ الشرطية — إنْ مقدّرة بعد طلب, ما الزائدة, the 4 tense-combination patterns, معنى إنْ vs إذا, الفاء في الجواب, and إذما
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/078-in-shartiyya.md

l3 and l4's bank counts (20 and 18, below the ~24 norm) reflect 074-076's
own source material: 074 (كَيْ) and 075 (لَنْ) together supply only four
genuinely clean, fully quoted example sentences (فَرَجَعْناكَ إلى أُمِّكَ
كَيْ تَقَرَّ عَيْنُها, لِكَيْ لا يَعْلَمَ بَعْدَ عِلْمٍ شَيْئًا, فَلَنْ
أُكَلِّمَ اليَوْمَ إِنسِيًّا, لَنْ يَخْلُقوا ذُبابًا), and 076 (إِذَنْ)
supplies only three (إِذَنْ تَدْخُلَ الجَنَّةَ and its two variants under
the شروط discussion) — تركيب items were capped at what each source
genuinely gives, the same discipline every prior module applied to its own
thin spots. Several Careful Boxes across this range state their point in
English prose rather than a quoted Arabic sentence (073's بَلاغة note and
its عقيدة note on ﴿وَلَمّا يَعْلَمِ اللَّهُ﴾, 076's حرف/اسم note, and 078's
ماضٍ/مضارع دلالة note and its note on when الفاء is required); each was
distilled into a short Arabic box statement per the convention Module 02
established, with the full English explanation kept in the surrounding
prose. The long Lut/آوي three-وجوه discussion in 073 (l1) was carried as
ordinary prose with the آيات quoted inline rather than forced into a
single box, since it branches into three distinct readings rather than
stating one point.

---

## Module 24 — الفاعل ونائب الفاعل والمبتدأ

`content/module-24.js` · 3 lessons

> الفاعل and نائب الفاعل — a matched pair distinguished only by معلوم/مجهول فاعله — then المبتدأ opening الجملة الاسمية: its two types, لام الابتداء, when a نكرة may open it, and the four positions where it must be dropped.

**2026-08-12: authored out of order**, per the same 2026-08-12 direction used throughout this course — other sessions were authoring Modules 20-23 concurrently at the time of writing, so this module (opening the chapter المعمول وغير المعمول — الاسم والفعل, `app-lessons/124-140`) was written ahead of them, the same reasoning Modules 06-19 each used in their turn. **NOT YET registered** in `content/annahw.js`'s `MODULES` array — that file is shared with the sessions authoring Modules 20-23, and those modules don't exist yet to fill the array slots before this one, so wiring it in is left for a later merge pass, per the precedent Modules 08-19 all used. The lesson boundaries below match the proposal that stood in this file before authoring (l1 = 124 alone; l2 = 125 + 126 part 1, through حذف المبتدأ جوازًا; l3 = 126 part 2, حذف المبتدأ وجوبًا) — the survey held up once every source file was read in full, except that l1 grew from the ~6 concepts estimated to 7: 124's third and fourth headings (تقديم الفاعل على المفعول به, تقديم المفعول به على الفاعل) each carry enough distinct sub-rules — the بصريون/كوفيون dispute over زيد قام, two obligatory-fronting conditions, two permitted-reordering قرائن, then جوازًا vs three وجوبًا conditions on the other side — that compressing either heading into one concept would have dropped a genuinely separate rule, the same overflow Module 03's l1 and Module 07's l1 hit for the same reason. l2 and l3 held at the 6/5 concepts already estimated.

- **l1** — الفاعل — The Subject — its definition, when it appears مجرور لفظًا, and its word order with المفعول به
  (7 concepts, 6 quiz, 26 bank (6 تركيب, 20 mcq))
  → maps to: app-lessons/124-al-fail.md
- **l2** — نائب الفاعل والمبتدأ — The Subject-Substitute and the Topic — نائب الفاعل's mirror definition, المبتدأ's two types, لام الابتداء, and when a نكرة may open a sentence
  (6 concepts, 6 quiz, 29 bank (6 تركيب, 23 mcq))
  → maps to: app-lessons/125-naib-al-fail.md, app-lessons/126-al-mubtada.md (part 1: تعريف المبتدأ وأنواعه through حذف المبتدأ جوازًا)
- **l3** — حذف المبتدأ وجوبًا — When the Topic Must Be Dropped — the four positions where leaving المبتدأ in place would itself be wrong
  (5 concepts, 6 quiz, 21 bank (5 تركيب, 16 mcq))
  → maps to: app-lessons/126-al-mubtada.md (part 2: حذف المبتدأ وجوبًا)

l1 and l2 both sit above the ~24-item bank norm (26 and 29) because 124-126 are unusually rich in short, fully quoted, single-reading worked examples — 124 alone supplies thirteen, and 125-126 together supply seventeen — enough that capping تركيب at the usual 6 per lesson (and l2's mcq count following the same richness) reflects the source rather than padding it; l3 lands slightly below norm (21, with 5 تركيب) since 126's حذف وجوبًا material is thinner — six distinct examples across four مواضع, one of them (نعم/بئس's مخصوص) already stretched across two bank items to cover both نعم and بئس separately — the same tapering discipline every prior module applied to its own thin and rich spots alike.

---

# Proposed Modules 04+ (not yet authored)

Chapter groupings below are **the same chapter labels and order the old
course used** (المقدمة → العامل وغير العامل: الفعل → الحرف العامل → الحرف
غير العامل → [new: الاسم] → خاتم → المعمول وغير المعمول), per 2026-08-12
direction: keep the groupings, let each chapter expand into as many
modules as the richer `app-lessons` source actually needs, rather than
forcing it back into the old 17-module count.

One chapter is new — **العامل وغير العامل — الاسم** (`app-lessons/104-113`,
nominal governors: مصدر, اسم الفاعل/المفعول, الصفة المشبهة, اسم التفضيل, اسم
الفعل, الإضافة) — the old course never isolated this as its own chapter;
app-lessons treats it as a distinct step in the العامل survey (فعل → حرف
عامل → حرف غير عامل → **اسم عامل** → خاتم), so it gets its own chapter
here instead of being force-fitted into an old label that doesn't
describe it.

**Coverage boundary — read before starting Module 24+.** `app-lessons`
(140 files) covers the old course's topics only from المقدمة through
معمول الاسم والفعل (ending at النعت, file 140). It does **not** currently
contain source material for: the old "الجملة وشبه الجملة" chapter's
advanced topics (الجملة ذات المحل ومواضعها, أحكام الواو في الجملة الحالية,
القسم — distinct from the introductory جملة/شبه جملة classification in
Modules 02-03 below, which app-lessons does cover); the old "الإعراب"
chapter's detailed علامات الإعراب والبناء treatment; the rest of التوابع
beyond العطف and النعت (no البدل, عطف البيان, or التوكيد اللفظي/المعنوي
files exist); or any of the old "الخاتمة" chapter (الضمير, المعرفة والنكرة,
التذكير والتأنيث, التثنية والجمع, العدد, خاتمة الفعل, الرسم والوصل والوقف,
وجوه الكلمات). Do not invent modules for these — they stay old content
(already deleted, so currently just absent) until new source material
arrives.

## Chapter: المقدمة

### Module 02 (proposed) — الجملة وشبه الجملة والكلام

`app-lessons/009–015` · ~5 lessons

> الجملة's classification by إسناد and by معنى, شبه الجملة's two classifications, and الكلام vs الجملة.

- الجملة: الإسناد والاسمية والفعلية — what makes a string of words a جملة (إسناد, عمدة/فضلة), then اسمية vs فعلية classification by opening word
  → app-lessons/009-essential-parts-of-a-sentence.md, app-lessons/010-nominal-and-verbal-sentences.md · ~6 concepts
- الجملة: الخبرية والإنشائية، والكبرى والصغرى — خبر/إنشاء classification (incl. لفظ/معنى mismatches), then a جملة nested inside another as a single مفرد slot
  → app-lessons/011-sentences-according-to-meaning.md, app-lessons/012-major-and-minor-sentences.md · ~6 concepts
- شبه الجملة: أقسامها بالبنية — جار ومجرور vs ظرف+مضاف إليه, and why جار ومجرور is loosely called ظرف
  → app-lessons/013-shibh-al-jumlah-by-structure.md · ~5 concepts
- شبه الجملة: أقسامها بالعامل — الظرف اللغو vs المستقر, and where مستقر appears (خبر, حال, نعت, صلة, اعتماد)
  → app-lessons/014-shibh-al-jumlah-by-amil.md · ~6 concepts (source is dense — 8 `##` headings; may need its own split)
- الكلام: مفيد، موجب، وغير موجب — الكلام vs الجملة, then موجب/غير موجب (نفي، نهي، استفهام)
  → app-lessons/015-kalam-affirmative-and-non-affirmative.md · ~5 concepts

## Chapter: العامل وغير العامل — الفعل

**Module 04 — الفعل القياسي: اللزوم والتعدي — already authored**, see its
entry in the authored section above rather than here.

### Module 05 (proposed) — أفعال القلوب: اليقين والظن

`app-lessons/022–025` · ~5 lessons

> The certainty and probability sub-classes of أفعال القلوب, and the omission rules spanning the whole family.

- أفعال اليقين: وجد وألفى ورأى — including رأى's three uses (بصرية/قلبية/منامية)
  → app-lessons/022-afal-al-yaqeen.md (part 1) · ~5 concepts
- أفعال اليقين: علم وعرف ودرى وتعلم — disambiguating علم vs عرف
  → app-lessons/022-afal-al-yaqeen.md (part 2) · ~5 concepts
- أفعال الظن: ظن وحسب وزعم وجعل — the probability group and علم البديهي/النظري
  → app-lessons/023-afal-al-zann.md (part 1) · ~5 concepts
- أفعال الظن: سلّم التوكيد وبقية الأفعال — the أنّ/أنْ/two-object تأكيد scale, حجا وعد وهب وخال
  → app-lessons/023-afal-al-zann.md (part 2) · ~5 concepts
- ألم ترَ وأرأيت، وقواعد الحذف — the two رأى-based idioms, plus اختصار vs اقتصار (omission rules spanning all أفعال القلوب)
  → app-lessons/024-alam-tara-and-arayta.md, app-lessons/025-omission-rules-afal-al-qulub.md · ~5 concepts

(022 and 023 are both very example-rich — 022 has 7 `##`+3 `###`, 023 has
8 `##`+2 `###` — confirm the halves balance once authored. 024+025 are
individually thin and pair naturally per the source survey.)

**Module 06 — أفعال التحويل والتعليق والإلغاء — already authored**, out of
order per explicit 2026-08-12 instruction; see its entry in the authored
section above the "Proposed Modules" heading rather than here.

**Module 07 — الأفعال الناقصة: كان وأخواتها — already authored**, out of
order per the same 2026-08-12 direction as Module 06; see its entry in the
authored section above the "Proposed Modules" heading rather than here.

**Module 08 — الرجاء والمقاربة والشروع والمدح والذم والتعجب — already
authored**, out of order per the same 2026-08-12 direction as Module 06;
see its entry in the authored section above the "Proposed Modules" heading
rather than here.

## Chapter: العامل وغير العامل — الحرف العامل

### Module 13 — ليت، والحروف المشبهة بالفعل، وتخفيفها

`content/module-13.js` · 6 lessons

> The last of the six حروف تنصب الاسم وترفع الخبر (ليت), the five وجوه that earn the whole group the name مشبهة بالفعل, تخفيف across the family, and the two remaining نواسخ — لا لنفي الجنس and الحروف المشبهة بليس.

**2026-08-12: authored out of order**, per the same direction already used for Modules 04, 06, 07, and 08 — Modules 10-12 (بقية حروف الجر, إنّ وأخواتها) were still unauthored proposals below when this module was written. **NOT YET registered** in `content/annahw.js`: that file is shared with concurrent sessions authoring the modules before this one, so wiring it in is left for a later merge pass, per the same reasoning already used for Modules 08 and 09. The lesson boundaries below adjust the proposal that stood in this file before authoring: 069 (تخفيف) splits at its own seam (تخفيف إنّ/أنّ vs تخفيف كأنّ/ما الكافّة) rather than the originally proposed part-1/part-2 line, and 072 (خلاصة النواسخ) is kept as a genuine sixth lesson rather than folded into l5, since it usefully closes the whole النواسخ arc spanning Modules 05-07 and this module — but its concept count (4) and bank (no تركيب, since 072 supplies no worked example sentences of its own) stay deliberately leaner than the other five lessons, matching the thin-source discipline Module 01 established.

- **l1** — ليت والحروف المشبهة بالفعل — ليت and Why the Family Is "مشبهة بالفعل" — the last of six حروف, and the five ways they all resemble a verb
  (6 concepts, 6 quiz, 23 bank (5 تركيب, 18 mcq))
  → maps to: app-lessons/067-layta-harf-tamanni.md, app-lessons/068-huruf-mushabbaha-bilfil.md
- **l2** — تخفيف إنّ وأنّ — Lightening إنّ and أنّ — the five-قراءة ayah, اللام الفارقة, and the dropped ضمير الشأن
  (6 concepts, 6 quiz, 21 bank (3 تركيب, 18 mcq))
  → maps to: app-lessons/069-takhfif-inna-anna-kaanna.md (part 1: القاعدة العامة through خبر أنّ المخففة)
- **l3** — تخفيف كأنّ وما الكافّة — كأنّ under تخفيف, and How ما الكافّة Neutralizes the Whole Family
  (5 concepts, 6 quiz, 18 bank (3 تركيب, 15 mcq))
  → maps to: app-lessons/069-takhfif-inna-anna-kaanna.md (part 2: تخفيف كأنّ through the closing خلاصة/table)
- **l4** — لا النافية للجنس — لا Negating the Whole جنس — the seventh حرف تنصب الاسم وترفع الخبر, its two names, and when it stops governing
  (6 concepts, 6 quiz, 23 bank (6 تركيب, 17 mcq))
  → maps to: app-lessons/070-la-nafiya-lil-jins.md
- **l5** — الحروف المشبهة بليس — Particles Resembling لَيْسَ — ما الحجازية, لا الشعرية, لاتَ, and إنْ عند أهل العالية
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/071-huruf-mushabbaha-bilaysa.md
- **l6** — خلاصة النواسخ — Closing النواسخ — the five families that override a plain مبتدأ + خبر, and which side of the sentence each one moves to النصب
  (4 concepts, 6 quiz, 18 bank (0 تركيب, 18 mcq))
  → maps to: app-lessons/072-nawasikh-khulasa.md

تركيب counts track how many genuinely single-reading worked examples each source lesson supplies, the discipline every prior module applied: l2 stays at 3 because 069's main worked example (the وَإِنْ كُلًّا لَمَّا... ayah) carries five competing قراءات and is deliberately kept as concept-level discussion rather than forced into a single-answer تركيب item, the same treatment Module 04 gave its own multi-وجه examples. l4 and l5 reach 6 each because 070 and 071 are unusually rich in short, cleanly parsed Qur'anic and poetic examples with an unambiguous single reading. l6 carries no تركيب items at all — 072 is a pure recap that cites no new example sentences of its own, every ayah it could reference having already appeared earlier in this module or in Modules 05-07.

### Module 09 — حروف الجر: التمهيد والأكثر شيوعا

`content/module-09.js` · 6 lessons

> حروف الجر — what they are, why they carry three different names, the متعلق/مفعول به debate over الجار والمجرور, and the first six of the thirteen حروف: الباء، مِن، إلى، عَن، على، اللام.

**2026-08-12: authored as new authorship, following the same process as
Modules 01-03.** Registered in `content/module-09.js` (not yet added to
`content/annahw.js`'s `MODULES` array — that registry file is shared with
concurrent sessions authoring Modules 04-08, so wiring it in is left for a
later merge pass rather than risking a conflicting edit). The lesson
boundaries below match the proposal that stood in this file before
authoring exactly (l1 = 040 alone; l2 = 041 alone; l3 = 042 alone; l4 =
043+044; l5 = 045 alone; l6 = 046 alone) — the survey held up once every
source file was read in full. l2, l3, l4, and l6 each landed at 6 concepts
rather than the 5-6 estimated, since 041 (الباء), 042 (مِن), 044 (عَن),
and 046 (اللام) are all dense enough — multiple Careful-box digressions,
several roles tables, more than one worked Qur'anic case study — that
compressing them below 6 would have meant dropping source material rather
than condensing it. l1 (040, purely definitional, no worked example
sentence) and l5 (045) held at 5.

- **l1** — حروف الجر: التمهيد وأضربها — Introducing حروف الجر — what they do, their three names, and whether الجار والمجرور is a متعلق or a مفعول به
  (5 concepts, 6 quiz, 20 bank (0 تركيب, 20 mcq))
  → maps to: app-lessons/040-huruf-al-jarr-intro.md
- **l2** — حرف الجر الأول: الباء — الباء — root meaning الإلصاق, and every role it can carry across its مجرور
  (6 concepts, 6 quiz, 26 bank (8 تركيب, 18 mcq))
  → maps to: app-lessons/041-harf-al-jarr-al-ba.md
- **l3** — حرف الجر الثاني: مِنْ — مِنْ — root meaning ابتداء الغاية, its own roles, and what it reveals about الإضافة
  (6 concepts, 6 quiz, 25 bank (6 تركيب, 19 mcq))
  → maps to: app-lessons/042-harf-al-jarr-min.md
- **l4** — حرفا الجر الثالث والرابع: إِلَى وعَنْ — إِلَى — the mirror image of مِنْ — and عَنْ, whose root meaning المجاوزة takes three distinct shapes
  (6 concepts, 6 quiz, 28 bank (7 تركيب, 21 mcq))
  → maps to: app-lessons/043-harf-al-jarr-ila.md, app-lessons/044-harf-al-jarr-an.md
- **l5** — حرف الجر الخامس: عَلَى — عَلَى — الاستعلاء حقيقي or معنوي, and the pronoun that decides whether حبه means مفعول معه or مفعول له
  (5 concepts, 6 quiz, 23 bank (5 تركيب, 18 mcq))
  → maps to: app-lessons/045-harf-al-jarr-ala.md
- **l6** — حرف الجر السادس: اللام — اللام — three root senses at once, لام التبليغ, and the difference between لام التعليل and لام العاقبة
  (6 concepts, 6 quiz, 25 bank (6 تركيب, 19 mcq))
  → maps to: app-lessons/046-harf-al-jarr-lam.md

تركيب counts track how many genuinely parsed examples each source lesson
supplies, the same discipline Modules 01-03 applied: 040 is pure
definition and rule with no worked sentence, so its bank carries none;
041-046 each quote several full آيات with a stated grammatical role, and
those became the تركيب pool, one item per clean single-reading example
(ambiguous multi-وجه cases like فسبح بحمد ربك and يطعمون الطعام على حبه
were kept as concept-level worked discussion instead of forced into a
single-answer تركيب item).

### Module 10 — حروف الجر: الباقية وأحرف القسم ورُبَّ

`content/module-10.js` · 6 lessons

> في through حتى, then أحرف القسم, مذ/منذ, and رُبَّ — closing the الحروف الشبيهة بالزائد with مِن التبعيضية وحاشا.

**2026-08-12: authored, following the same process as Modules 01-03 and
09.** **NOT YET registered** in `content/annahw.js`: that registry file is
shared with concurrent sessions authoring other modules, so wiring it in
is left for a later merge pass, per the same reasoning already used for
Modules 08, 09, and 13. The six-lesson plan proposed below held: l1 = 047
alone; l2 merges 048+049 (048 is thin on its own); l3 = 050 alone; l4 =
051 alone; l5 and l6 split 052. COURSE-MAP's own note on 052 (10 `##`
headings, "effectively 3 lessons' worth," floating a possible third slot)
did not hold up once the file was read in full — its actual heading count
is 4 `##` (رُبَّ, مِن التبعيضية, حاشا, and the closing فائدة on الكاف),
with رُبَّ alone carrying 7 `###` subheadings. Those 7 compress cleanly
into l5's 6 concepts by grouping the closing three — تخفيف رُبَّ, حذف رُبَّ,
and مِمّا بمعنى رُبَّ — under one concept, the same way module-09's l2
grouped several minor roles of الباء under one table+commentary concept;
l6 then covers مِن التبعيضية, حاشا, and the الكاف-classification فائدة at
4 concepts, honestly thinner than l5 since that material is genuinely
thin in the source. Six lessons held, with no third slot needed.

- **l1** — حرف الجر السابع: فِي — في — root meaning الظرفية, and every role it can carry across its مجرور
  (5 concepts, 6 quiz, 24 bank (5 تركيب, 19 mcq))
  → maps to: app-lessons/047-harf-al-jarr-fi.md
- **l2** — الكاف وحتى — الكاف — its one solitary role — and حتى — rank-extremes and its stricter endpoint condition against إلى
  (6 concepts, 6 quiz, 24 bank (5 تركيب, 19 mcq))
  → maps to: app-lessons/048-harf-al-jarr-kaf.md, app-lessons/049-harf-al-jarr-hatta.md
- **l3** — أحرف القسم — واو، تاء، وباء — the three oath particles, and how sharply their conditions diverge
  (5 concepts, 6 quiz, 20 bank (5 تركيب, 15 mcq))
  → maps to: app-lessons/050-huruf-al-qasam.md
- **l4** — مُذْ ومُنْذُ — the twelfth and thirteenth حروف الجر — nearly identical, apart from one narrow point of إعراب
  (6 concepts, 6 quiz, 23 bank (6 تركيب, 17 mcq))
  → maps to: app-lessons/051-mudh-wa-mundhu.md
- **l5** — رُبَّ: التكثير والتقليل وأحكامها — حرف الجر الشبيه بالزائد opens with رُبَّ — real meaning, without the syntactic tie الأصلي particles require
  (6 concepts, 6 quiz, 27 bank (6 تركيب, 21 mcq))
  → maps to: app-lessons/052-rubba-min-tabidiyya-hasha.md (part 1: التعريف through رُبَّ's own seven subsections)
- **l6** — مِن التبعيضية وحاشا — the second and third حروف شبيهة بالزائد, closing with a lingering question about الكاف's own classification
  (4 concepts, 6 quiz, 17 bank (3 تركيب, 14 mcq))
  → maps to: app-lessons/052-rubba-min-tabidiyya-hasha.md (part 2: مِن التبعيضية through the closing فائدة on الكاف)

تركيب counts taper honestly rather than sitting at a flat 6: l1-l3 carry 5
each (047's six-role table, 048/049's shorter examples, and 050's four
particle-behaviour contrasts each supply five clean, single-reading
parseable sentences); l4 and l5 reach 6, the fullest in the module, since
051's constructed examples and 052's رُبَّ material are both unusually
rich in short, cleanly parsed sentences; l6 drops to 3, reflecting how
thin 052's مِن التبعيضية/حاشا/الكاف-classification material actually is on
its own. A handful of multi-وجه or structurally compound examples were
kept as concept-level discussion only, the same discipline module-09
applied to فسبح بحمد ربك and يطعمون الطعام على حبه: ﴿قَالَتْ فَذَلِكُنَّ
الَّذِي لُمْتُنَّنِي فِيهِ﴾ (a pronoun-only مجرور with no separable
تركيب chip), ﴿وَاذْكُرُوهُ كَمَا هَدَاكُمْ﴾ (genuinely two-وجه, and the
source itself says the choice isn't always resolvable), ﴿وَقَاتِلُوهُمْ
حَتَّى لَا تَكُونَ فِتْنَةٌ﴾ (حتى here governs a مصدر مؤول with أن مضمرة,
not a single مجرور اسم), يَا رُبَّ كَاسِيَاتٍ فِي الدُّنْيَا عَارِيَاتٍ فِي
الآخِرَةِ (its two في phrases and حال/خبر ambiguity suit prose discussion
better than a drag-the-label item), كَانَ ﷺ مِمَّا يُحَرِّكُ شَفَتَيْهِ
(two competing analyses in the source itself), and العلم كالنور (a genuine
أصلي/شبيه بالزائد classification debate, not a single-answer إعراب).

**Module 11 — زوائد حروف الجر وحذفها، وإلا — already authored**, out of
order ahead of Module 10, per the same reasoning Module 08's and Module
16's out-of-order authoring used; see its entry in the authored section
above the "Proposed Modules" heading rather than here.

**Module 12 — إنّ وأخواتها — already authored**, following the same process
as Modules 01-03 and 09-11; see its entry above, before this "Proposed
Modules" section, rather than here.

**Module 13 — ليت، والحروف المشبهة بالفعل، وتخفيفها — already authored**, out
of order per the same 2026-08-12 direction as Modules 06-08; see its entry
in the authored section above the "Proposed Modules" heading rather than
here.

**Module 14 — النواصب والجوازم — already authored**, following the same
process as Modules 01-03, 09, and 15; see its entry above, before this
"Proposed Modules" section, rather than here.

## Chapter: العامل وغير العامل — الحرف غير العامل

**Module 15 — أحرف العطف — already authored**, following the same process
as Modules 01-03 and 09; see its entry above, before this "Proposed
Modules" section, rather than here.

### Module 16 — أحرف الجواب والنفي والتأكيد

`content/module-16.js` · 6 lessons

> أحرف الجواب answering a question or statement in one word, حرفا النفي — لا وكلّا — with كلّا’s layered senses, and the five أحرف التأكيد that add emphasis without changing a sentence’s basic meaning.

**2026-08-12: authored out of order**, per the same pattern Modules 04/06/07/08/09 followed — see the authoring-order note at the top of this file. **NOT YET registered** in `content/annahw.js`'s `MODULES` array: left unwired per the same reasoning as Modules 08/09, since that registry file is shared with concurrent sessions authoring the earlier modules. The lesson boundaries below match the proposal that stood in this file before authoring exactly (l1/l2 split 089 in two per the نعم/بلى-vs-the-other-four density split already proposed; l3/l4 split 090 in two per the same زجر-vs-مجازي split; l5/l6 split 091 in two per the same three-لامات-vs-نونان/قد split) — the survey held up once every source file was read in full, with no boundary changes needed.

- **l1** — أحرف الجواب: نَعَمْ وبَلَى — Affirmative Response Particles — نعم confirms a question's own polarity, بلى flips a negative one
  (5 concepts, 6 quiz, 22 bank (4 تركيب, 18 mcq))
  → maps to: app-lessons/089-ahruf-al-ijab.md (part 1: التمهيد through بَلَى)
- **l2** — أحرف الجواب الأقل شيوعا — إي، أجل، إنّه، وجير — the four rarer أحرف الإيجاب, each with its own strict condition
  (5 concepts, 6 quiz, 18 bank (2 تركيب, 16 mcq))
  → maps to: app-lessons/089-ahruf-al-ijab.md (part 2: إِي through the closing summary table)
- **l3** — لا وكَلَّا: المعنى الأصلي — لا wholly neutral, كلّا carrying الزجر والردع
  (5 concepts, 6 quiz, 20 bank (3 تركيب, 17 mcq))
  → maps to: app-lessons/090-huruf-al-nafi.md (part 1: لا through the Makkan-only Careful box)
- **l4** — كَلَّا: المعاني المجازية وأحكام الوقف — التصديق and الاستفتاح beyond الردع, وقف rules, and how to read an ambiguous كلّا
  (6 concepts, 6 quiz, 22 bank (2 تركيب, 20 mcq))
  → maps to: app-lessons/090-huruf-al-nafi.md (part 2: المعاني الفرعية through the closing مُقَدَّر Careful box)
- **l5** — ثلاثة من أحرف التأكيد — لام الابتداء على المبتدأ، اللام المزحلقة على خبر إنّ، ولام جواب القسم
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/091-ahruf-al-takid.md (part 1: التمهيد through اللام في جواب القسم)
- **l6** — نونا التأكيد وقَدْ — the two forms of an emphatic ن, and قَدْ — always تحقيق with الماضي, usually تقليل with المضارع
  (5 concepts, 6 quiz, 22 bank (5 تركيب, 17 mcq))
  → maps to: app-lessons/091-ahruf-al-takid.md (part 2: نونا التأكيد through the closing summary table)

l2's bank count (18, below the ~24 norm) reflects 089's own source material: each of its four rarer أحرف الإيجاب (إي، أجل، إنّه، جير) is backed by only one short worked exchange, so تركيب items are capped at 2 rather than forced to a flat 6 — the same discipline earlier modules applied to their own thin spots. l3's تركيب count (3) is similarly capped by how few genuinely parseable multi-word examples 090's لا/زجر material supplies without reaching into grammar (لعلّ's عمل, أدوات الجزم) this course has not formally taught yet — several of this module's worked examples sit inside such constructions, so تركيب labels throughout name only what this module itself teaches (the response, negation, or emphasis particle's own role) plus already-established basics from Modules 01-03, rather than asserting جزم/نصب mechanics from modules not yet written. l1, l4, l5, and l6 sit at or near the 22-24 norm since نعم/بلى, كلّا's مجازي senses, and أحرف التأكيد are each rich in distinct worked examples with genuine multi-word structure.

**Module 17 — أحرف الشرط غير العاملة — already authored**, out of order
per the same 2026-08-12 direction as Modules 06-10/13/16 — see the
authoring-order note at the top of this file. `content/module-17.js`,
3 lessons: l1 لَوْ (092), l2 لَوْلا ولَوْما (093), l3 أَمّا (094). **NOT
YET registered** in `content/annahw.js`'s `MODULES` array: that registry
file is shared with concurrent sessions authoring the modules before this
one (10-16 remain gaps), so wiring it in is left for a later merge pass,
per the same reasoning already used for Modules 08/09/10/13/16. The
lesson boundaries below match the proposal that stood in this file before
authoring — a leaner module (3 lessons), since 093 is genuinely thin and
092/094 are each already full lessons on their own.

- **l1** — لَوْ — Ibn Hishām's corrected definition (امتناع الشرط +
  استلزام, not امتناع الجواب), the "multiplicity of causes" point behind
  it, tense-flipping, the لام on جوابها, its تمني sense, and the اسم
  صريح/مؤول that can follow it
  (7 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/092-law-shartiyya.md
- **l2** — لَوْلا ولَوْما — the opposite polarity from لَوْ (امتناع الجواب
  لوجود الشرط), and the fixed اسمية-بخبر-محذوف + فعلية two-clause
  structure both particles share
  (5 concepts, 6 quiz, 18 bank (2 تركيب, 16 mcq))
  → maps to: app-lessons/093-lawla-lawma.md
- **l3** — أَمّا — triple identity (شرط + تفصيل + توكيد), Sībawayh's
  three-stage derivation, تكرار for تفصيل vs its omission, what can sit
  between أَمّا and its فاء, and how تكرار decides which of تفصيل/توكيد
  dominates
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/094-amma-shartiyya.md

l1 landed at 7 concepts rather than the ~6 estimated — 092's own text
calls لَوْ "the richest of the four," and once the traditional definition,
its critique, both worked examples for تعدد الأسباب, the open صهيب
example, زمن+لام, تمني, and the اسم بعد لو material were each accounted
for, splitting زمن/لام into one concept and اشتغال/مؤول بأنّ into another
kept every point intact rather than cramming two dense sub-topics into
one — the same kind of overflow Module 03's l1 and Module 07's l1 hit for
the same reason. l2's تركيب count (2, not the usual 6) reflects 093's own
source material: only two genuinely worked example sentences exist for
لَوْلا/لَوْما (the ﴿وَلَوْلا فَضْلُ اللهِ...﴾ ayah and the لَوْما
التَّوْفيقُ sentence) — the same discipline earlier modules applied to
their own thin spots. l1 and l3 are both rich in fully-worked, explicitly
labelled example sentences, so both carry the full 6 تركيب items.

### Module 18 — التوبيخ والتنبيه والمصدر والنفي والزيادة

`content/module-18.js` · 5 lessons

> أحرف التوبيخ والتحضيض, أحرف التنبيه, the non-governing أحرف المصدر and أحرف النفي, and أحرف الزيادة (أحرف الصلة) — five families of غير عامل particles told apart by tense, by a deletion test, or by who is speaking to whom, not by form alone.

**2026-08-12: authored**, following the same process as Modules 01-03, 09,
10, and 19. **NOT YET registered** in `content/annahw.js`'s `MODULES`
array — that registry file is shared with concurrent sessions authoring
earlier modules (10-17 remain gaps at the time of writing), so wiring it
in is left for a later merge pass, the same choice Modules 08, 09, 10, 13,
16, 17, and 19 all made. The lesson boundaries below match the proposal
that stood in this file before authoring exactly — one lesson per source
file, l1-l5 — the survey held up once every source file was read in full.
The previously open note on 095 is resolved: the file's own opening line
states it "focuses on the first three of the five" التوبيخ/التحضيض
particles, and none of 096-099 (all read in full for this module) or
Module 19's 100-103 revisit the other two — app-lessons simply does not
cover them, so l1 teaches only هلّا، ألّا، ولولا, matching the source
exactly rather than inventing the missing pair.

- **l1** — أحرف التوبيخ والتحضيض — Reproach and Incitement — هلا، ألا، and لولا's tense-governed and rank-governed senses
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/095-tawbikh-tahdid.md
- **l2** — أحرف التنبيه — The Attention Particles — ألا، أما، and ها across four sites of attachment
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/096-ahruf-tanbih.md
- **l3** — أحرف المصدر غير العاملة — The Non-Governing Nominalizing Particles — ما، لو بعد ودّ، وهمزة التسوية
  (4 concepts, 6 quiz, 16 bank (4 تركيب, 12 mcq))
  → maps to: app-lessons/097-ahruf-masdar.md
- **l4** — أحرف النفي غير العاملة — The Non-Governing Negators — ما، لا، وإنْ, and where each attaches
  (4 concepts, 6 quiz, 18 bank (5 تركيب, 13 mcq))
  → maps to: app-lessons/098-ahruf-nafi.md
- **l5** — أحرف الزيادة — The Extra Particles (أحرف الصلة) — إنْ، أنْ، ما، ولا, extra in الإعراب but never in المعنى
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/099-ahruf-ziyada.md

l3 and l4 sit below the ~24-item bank norm (16 and 18) because both
sources are genuinely thin: 097 supplies only four distinct worked
examples across its three particles (ما دُمْتُ حَيًّا, عَلَى مَا كُذِّبوا,
وَدّوا لَوْ تَكْفُرونَ, and the همزة التسوية ayah), so its تركيب items are
capped at 4 rather than forced to 6; 098 supplies nine across its three,
enough for 5 تركيب items but not a full 24-item bank once distractor
variety is respected. l1, l2, and l5 each reach the 24-item norm with a
full 6 تركيب items, since 095 (dense with three ayat illustrating لولا's
three-way توبيخ/تمني/تعجب split alone), 096 (four distinct sites for ها),
and 099 (the richest file of the five, with ما الزائدة's seven example
environments) all supply enough clean, single-reading worked examples to
support it — the same discipline every prior module applied to its own
thin and rich spots alike. 097, 099, and Module 19's l2 (حرفا التفسير)
together form a "disambiguate أَنْ's several faces" thread per the source
survey — worth cross-referencing across lessons even though each stays a
separate concept cluster.

### Module 19 — الاستفهام والاستقبال والتفسير والتنوين

`content/module-19.js` · 3 lessons

> حرفا الاستفهام (الهمزة وهل), حرفا الاستقبال (السين وسوف), حرفا التفسير (أيْ وأنْ), then التنوين and its four أقسام, closing out الحرف غير العامل.

**2026-08-12: authored**, following the same process as Modules 01-03 and
09. **NOT YET registered** in `content/annahw.js`'s `MODULES` array — that
registry file is shared with concurrent sessions authoring earlier modules
(01-09 and beyond), so wiring it in is left for a later merge pass, the
same choice Module 08 and Module 09 made. The lesson boundaries below match
the proposal that stood in this file before authoring exactly (l1 merges
100+101, l2 is 102 alone, l3 is 103 alone) — the survey held up once every
source file was read in full.

- **l1** — حرفا الاستفهام وحرفا الاستقبال — The Two Interrogatives and the Two Futurizers — الهمزة وهل's تصديق vs تصوّر, and السين وسوف's near vs far future
  (6 concepts, 6 quiz, 26 bank (5 تركيب, 21 mcq))
  → maps to: app-lessons/100-harfay-istifham.md, app-lessons/101-harfay-istiqbal.md
- **l2** — حرفا التفسير — The Two Explanatory Particles — أيْ explaining مفرد or جملة, and أنْ restricted to جملة under strict شروط
  (5 concepts, 6 quiz, 23 bank (5 تركيب, 18 mcq))
  → maps to: app-lessons/102-harfa-tafsir.md
- **l3** — التنوين وأقسامه — Nunation — why it counts as a حرف, and its four أقسام: تمكين, تنكير, مقابلة, تعويض
  (6 concepts, 6 quiz, 21 bank (2 تركيب, 19 mcq))
  → maps to: app-lessons/103-tanwin.md

l3's تركيب count (2, well below the ~24-item norm's usual 6) reflects
103's own source material: its worked examples are almost entirely
single-word contrasts (زَيْدٌ vs بَيْتٌ, صَهْ vs صَهٍ, سيبَوَيْه vs
سيبَوَيْهٍ, كِتَابٌ vs كِتَابُ) that a word-to-label تركيب item cannot
meaningfully represent — only its two تعويض عن كلمة/جملة examples (كُلٌّ
آمَنَ, وَيَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنونَ) are genuine multi-word
constructions, the same discipline every prior module applied to its own
thin spots. l1 and l2, by contrast, sit at or slightly above the norm (5
تركيب each), since 100-102 are dense in short, cleanly contrastable آيات
that the source itself analyses.

## Chapter: العامل وغير العامل — الاسم *(new — see note above)*

### Module 20 — العامل من الأسماء المشتقة

`content/module-20.js` · 6 lessons

> المصدر, then the derived-noun governors: اسم الفاعل, اسم المفعول, الصفة المشبهة, اسم التفضيل, اسم الفعل.

**2026-08-12: authored**, following the same process as Modules 01-03, 09,
10, 15, 18, and 19. Registered in `content/annahw.js` directly after
`module-19.js` — every module through 19 was already registered in id
order by a concurrent session by the time this one was authored, so
Module 20 continues that same straight-line registration rather than
being left for a later merge pass.

Lesson boundaries adjust the ~6-lesson proposal that stood in this file
before authoring: 105 (اسم الفاعل واسم المفعول) is kept as **one lesson**
rather than split in two — 105's own اسم المفعول section is genuinely
thin on its own (one rule box, one example, one contrastive careful box,
well under the 4-concept floor other lessons hold to), while اسم الفاعل's
شروط العمل material is dense enough that combining the two lands at a
full 6 concepts rather than a lopsided 5-concept/1-concept pair, the same
discipline several earlier modules applied to their own thin spots (e.g.
Module 06's l1). 108 (اسم الفعل) is split into two lessons instead,
matching this file's own earlier flag that it is "the densest file in
this module — 8 `##` headings": l5 covers its definition, عمل, and the
زمان/أصل classifications; l6 closes with the thinner nuance/exception
material (تنوين قلب المعنى, هلم's missing مفعول, the one قياسي pattern,
and تقديم المعمول). Net lesson count holds at 6, matching the original
estimate — the two adjustments offset each other.

- **l1** — المصدر — The Verbal Noun — governing its معمول through إضافة or تنوين, and its two exceptions among أسماء عاملة
  (5 concepts, 6 quiz, 21 bank (6 تركيب, 15 mcq))
  → maps to: app-lessons/104-al-masdar.md
- **l2** — اسم الفاعل واسم المفعول — Active and Passive Derived Nouns — عمل عمل الفعل المعلوم أو المجهول, the شروط for a نكرة to govern, and متصل vs منفصل معمول
  (6 concepts, 6 quiz, 24 bank (5 تركيب, 19 mcq))
  → maps to: app-lessons/105-ism-al-fail-wal-mafool.md
- **l3** — الصفة المشبهة — The Adjective Resembling اسم الفاعل — formed from لازم verbs, yet its معمول can still take رفع, نصب, or جر بالإضافة
  (4 concepts, 6 quiz, 20 bank (5 تركيب, 15 mcq))
  → maps to: app-lessons/106-sifa-mushabbaha.md
- **l4** — اسم التفضيل — The Noun of Comparison — its three أركان, مسألة الكُحل's lone exception, and how مِنْ, الإضافة, and أل decide إفراد or مطابقة
  (6 concepts, 6 quiz, 19 bank (5 تركيب, 14 mcq))
  → maps to: app-lessons/107-ism-al-tafdil.md
- **l5** — اسم الفعل: تعريفه وعمله وأقسامه — The Verb-Noun — governing like its underlying verb, its three tenses, and مرتجلة vs منقولة origin
  (5 concepts, 6 quiz, 20 bank (5 تركيب, 15 mcq))
  → maps to: app-lessons/108-ism-al-fil.md (part 1: تعريف اسم الفعل through تصرّف)
- **l6** — اسم الفعل: أحكام تكميلية — Closing اسم الفعل — تنوين flipping بله/رويد's meaning, هلم's missing مفعول به, the one قياسي pattern, and why its معمول can never front
  (4 concepts, 6 quiz, 18 bank (5 تركيب, 13 mcq))
  → maps to: app-lessons/108-ism-al-fil.md (part 2: تنوين يقلب المعنى through تقديم معمول اسم الفعل)

Every lesson in this module sits below the ~24-item bank norm to some
degree, l2 aside — a straightforward consequence of authoring six lessons
from five source files without padding the mcq pool past what each
source's own worked examples and rule-contrasts genuinely support, the
same discipline every prior module applied rather than a special
justification unique to this one. l4 (اسم التفضيل) dips to 5 تركيب because
مسألة الكحل's own worked example is too internally complex — الكحل
compared to itself under two اعتبارات in one sentence — for a clean
word-to-label تركيب item, so it stays concept-level discussion only. l5
and l6 (اسم الفعل) run thinnest overall because اسم الفعل's own worked
examples are mostly single-word idioms (هيهات, صه, مه, آمين) that a
word-by-word تركيب item cannot meaningfully represent — only the handful
of two-word constructions (هيهات لِما توعدون, بله الشر, هلم شهداءكم, دونك
الكتاب, عليك بسنتي, بلهًا أخاك, أمهلهم رويدًا, نزالِ alone, عليك زيدًا,
تراك ذنبًا) supplied genuine تركيب material.

### Module 21 — بقية الأسماء العاملة والإضافة

`content/module-21.js` · 6 lessons

> Three leftover verb-like nouns closing out أسماء تعمل عمل الفعل, then الإضافة — معنوية and لفظية — plus أسماء الشرط and the three أعمال معنوية that govern with no spoken governor at all.

**2026-08-12: authored**, following the same process as Modules 01-03, 09,
10, 15, and 18-19. **NOT YET registered** in `content/annahw.js`'s `MODULES`
array: Module 20 (`app-lessons/104-108`) does not exist on disk yet, and
module unlock order is array-position-based, so wiring this in ahead of it
would create an id/position mismatch — left for a later merge pass once
Module 20 is written, the same reasoning already used for Modules 08-11 and
13. The lesson boundaries below match the proposal that stood in this file
before authoring almost exactly (l1 = 109 alone; l2/l3 split 110 in two,
the same part-1/part-2 pattern Module 03 used for 018; l4 = 111 alone; l5 =
112 alone) — with one change: l6 (113) was flagged in the proposal as a
"strong candidate to split into 2 lessons" given its density (8 `##`
headings, not 7 as estimated, once read in full). It was kept as a single
lesson instead, the same discipline Module 02's l4 and Module 14's l6 used
for their own flagged-as-dense single files, per `content/README.md`'s
instruction to combine related material into 4-6 concepts per app lesson
rather than force a split — every heading, table, and worked example from
113 is still covered, compressed into 6 concepts by pairing closely related
material (تقدير الانفصال with متى تكون لفظية; الاستثناء المعنوية with اسم
الفاعل بمعنى الصفة المشبهة; الفصل بين المضاف والمضاف إليه with ما يلزم
الإضافة أبدا).

- **l1** — باقية الأسماء العاملة — Remaining Governing Nouns — الظرف المستقر, الاسم المنسوب, and الاسم الجامد المؤول بمعنى المشتق
  (4 concepts, 6 quiz, 18 bank (3 تركيب, 15 mcq))
  → maps to: app-lessons/109-baqiyyat-al-asma-al-amila.md
- **l2** — الإضافة المعنوية: الحروف المقدرة — Implicit Iḍāfa — the elided اللام, مِن, or في hiding behind every plain possessive إضافة
  (4 concepts, 6 quiz, 20 bank (5 تركيب, 15 mcq))
  → maps to: app-lessons/110-al-idafa-al-manawiyya.md (part 1: الإضافة اثنان through متى يجب ذكر الحرف المقدر)
- **l3** — الإضافة المعنوية: أحكام أخرى — Further Rulings on Implicit Iḍāfa — dropping المضاف إليه, بناء على الضم, تنوين العوض, and borrowed gender
  (4 concepts, 6 quiz, 18 bank (4 تركيب, 14 mcq))
  → maps to: app-lessons/110-al-idafa-al-manawiyya.md (part 2: حذف المضاف إليه through اكتساب المضاف التذكير أو التأنيث)
- **l4** — أسماء الشرط — The Conditional Nouns — eleven أسماء that جزم two أفعال each, unlike the إعراب-free حرف الشرط
  (5 concepts, 6 quiz, 21 bank (6 تركيب, 15 mcq))
  → maps to: app-lessons/111-asma-al-shart.md
- **l5** — العامل المعنوي — The Notional Governor — الابتداء, خلوّ المضارع, and the six word-classes that hide the meaning of a فعل
  (5 concepts, 6 quiz, 22 bank (6 تركيب, 16 mcq))
  → maps to: app-lessons/112-al-amil-al-manawi.md
- **l6** — الإضافة اللفظية — Lexical Iḍāfa — where المضاف is a مشتق still carrying a فعل, and المضاف إليه is its فاعل or مفعول
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/113-al-idafa-al-lafziyya.md

l1 and l3 taper below the ~24-item bank norm (18 each) because 109 and
110's second half are both genuinely thin: 109's three leftover categories
and 110's حذف/بناء/تنوين عوض/اكتساب rulings are each illustrated by short
constructed phrases rather than dense worked passages, so تركيب items are
capped at 3-4 rather than forced to 6 — the same discipline every prior
module applied to its own thin spots. l2 sits close to the norm at 20 (5
تركيب) since 110's first half supplies five distinct worked examples across
its تقدير اللام/من/في and وجوب الإظهار material. l4-l6 reach the full
24-item norm (l4 and l5 close at 21-22) with 6 تركيب items each, since
أسماء الشرط, العامل المعنوي, and الإضافة اللفظية are all rich in short,
cleanly parsed Qur'anic and constructed examples.

## Chapter: العامل وغير العامل — خاتم

### Module 22 — حذف العامل

`content/module-22.js` · 4 lessons

> التنازع — two governors competing for one معمول — then every قياسي and سماعي pattern where a governor is obligatorily dropped: المفعول المطلق, التحذير والإغراء والاختصاص, الاشتغال, and الحال.

**2026-08-12: authored**, following the proposal that stood in this file before authoring — `app-lessons/114-119, 123` covers the module's whole scope, opening الخاتِمَة (the book's closing section on العامل, itself closing the whole العامل وغير العامل chapter). `app-lessons/120-122` (النداء وملحقاته) belong to Module 23, already authored separately — see its own entry directly below — not to this module. **NOT YET registered** in `content/annahw.js`'s `MODULES` array: that registry file is shared with concurrent sessions authoring other modules (21 remains a gap at the time of writing), so wiring it in is left for a later merge pass, per the same reasoning already used for Modules 08-11, 13, 15-19. The lesson boundaries below match the proposal that stood in this file before authoring exactly (l1 merges 114+115; l2 merges 116-118; l3 is 119 alone; l4 is 123 alone) — the survey held up once every source file was read in full, with all four concept-count estimates (~5, ~6, ~6, ~5) also holding exactly.

- **l1** — التنازع وحذف عامل المفعول المطلق — Two Governors, One معمول — التنازع's إيجاز, then the four قياسي patterns and the سماعي phrases where المفعول المطلق's governor is obligatorily dropped
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/114-al-tanazu.md, app-lessons/115-hadhf-amil-al-masdar.md
- **l2** — التحذير والإغراء والاختصاص — Warning, Encouragement, and Pinning Down a Pronoun — three of the خمسة مواضع under حذف عامل المفعول به, each a noun made منصوب by a permanently dropped verb
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/116-al-tahdhir.md, app-lessons/117-al-ighra.md, app-lessons/118-al-ikhtisas.md
- **l3** — الاشتغال — The Fourth موضع — a fronted noun whose verb governs a pronoun referring back to it instead of the noun itself
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/119-al-ishtighal.md
- **l4** — حذف عامل الحال — The Third ضرب of حذف العامل المعنوي — four قياسي situations where الحال survives without its governing verb, and a سماعي handful besides
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/123-hadhf-amil-al-hal.md

Every lesson in this module reaches the full 24-item/6-تركيب bank norm, unlike several neighboring modules that taper for thin source material — 114-119 and 123 are all unusually rich in short, cleanly parsed worked examples, several of them already short enough (اللهَ اللهَ, الصَّبْرَ الصَّبْرَ, سالِمًا غانِمًا) to serve as تركيب chips with no adaptation needed. l2 merges three individually short source files (116-118), but التحذير and الإغراء's explicit mirror-pair structure (four parallel أركان, three parallel وجوه/شروط, matching سماعي-بلا-حذف-الفعل asides) meant every one of the six concepts could pair genuine content from at least one of the three files without padding.

### Module 23 — النداء وملحقاته

`content/module-23.js` · 4 lessons

> النداء built around a dropped أدعو, its three أركان and seven أحرف, the إعراب of المنادى, then its three named extensions — الاستغاثة, نداء التعجب, and الندبة.

**2026-08-12: authored**, opening the خاتم sub-chapter of العامل وغير العامل. **NOT YET registered** in `content/annahw.js`'s `MODULES` array: Modules 20-22 (العامل من الأسماء المشتقة, بقية الأسماء العاملة والإضافة, حذف العامل) remain unauthored proposals at the time of writing, and that registry file is shared with concurrent sessions authoring them, so wiring Module 23 in is left for a later merge pass, per the same reasoning already used for every other out-of-order module in this course. The lesson boundaries below match the proposal that stood in this file before authoring exactly (l1/l2 split 120 in two — l1 through حذف حرف النداء, l2 from إعراب المنادى onward; l3 = 121 whole; l4 = 122 whole) — the survey held up once every source file was read in full, except that l1's أركان/أحرف framing absorbed حذف حرف النداء as its own two concepts (يجوز/يمنع) rather than the ~5 concepts collapsing تحت one heading, and l3 grew one concept richer than estimated by giving أحكام المستغاث's معطوف rule (تكرار يا vs its absence) its own concept rather than folding it into the لام/ألف concept — landing at 5 concepts rather than 4.

- **l1** — النداء: أركانه وأحرفه — The Construction of Calling Out — a dropped أدعو, its three أركان, and the seven أحرف that stand in its place
  (5 concepts, 6 quiz, 20 bank (3 تركيب, 17 mcq))
  → maps to: app-lessons/120-al-nida.md (part 1: تعريف النداء through حذف حرف النداء)
- **l2** — النداء: إعراب المنادى وأحكامه — The إعراب of المنادى — منصوب لفظًا vs مبني cases, المضاف لياء المتكلم, ترخيم, and اللهم
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/120-al-nida.md (part 2: إعراب المنادى through اللهم)
- **l3** — الاستغاثة ونداء التعجب — Calling Out for Rescue and in Astonishment — الاستغاثة's three أركان, its فتحة/كسرة contrast, and نداء التعجب reusing the same skeleton
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/121-al-istighatha-nidaa-tajub.md
- **l4** — الندبة — Calling Out in Grief — the two أحرف الندبة, the same إعراب as ordinary نداء, and ألف الندبة with هاء السكت
  (4 concepts, 6 quiz, 18 bank (4 تركيب, 14 mcq))
  → maps to: app-lessons/122-al-nudba.md

l1's تركيب count (3, below the ~6 norm) reflects 120's own material before إعراب المنادى begins: only يا عَبْدَ اللهِ (from the أحرف النداء table) and the two حذف حرف النداء examples (اِعْمَلُوا آلَ داوُدَ شُكْرًا, يوسُفُ أَعْرِضْ عَنْ هَذا) are genuine multi-word worked examples at that point in the lesson, and l1's own تركيب labels deliberately stay at the أركان-النداء level (حرف نداء / منادى, plus already-established basics like فعل أمر، فاعل، مضاف إليه) rather than asserting l2's finer منصوب-لفظا/مبني classification, which a learner hitting l1's bank in isolation via Practice Mode has not yet met — the same discipline every prior module applied when a bank item's grammar depends on material the lesson itself hasn't taught. l2 and l3 reach the full 24-item/6-تركيب norm, since 120's إعراب section and 121 both supply enough genuinely worked, single-reading examples (يا زَيْدُ, يا مُسْلِمونَ, ﴿يا عِبادِ فَاتَّقونِ﴾ for l2; يا لَلَّهِ لِلْمُسْلِمينَ, the معطوف pair, يا لَلْقُرْآنِ for l3). l4 tapers to 18/4, reflecting 122's own thin material — الندبة's intro explicitly calls it "grammatically the simplest" of النداء's four faces, and its worked examples are largely single-word transformations (وا أَبَتاهُ, وا زَيْدُ, وارَأْساهْ) rather than the richer multi-clause constructions 120-121 supply.

Each source file's closing "Summary table" is not reproduced verbatim in any of the four lessons — its content is already folded into the concept tables and prose that precede it (أحرف النداء's three groups, حالات النصب لفظا الثلاث, ياء المتكلم's four treatments, and so on), and a literal restatement would just duplicate material the lesson already teaches, the same call Module 01 made for its own denser concepts.

## Chapter: المعمول وغير المعمول — الاسم والفعل

`app-lessons/124–140` — covers الفاعل through النعت. Does **not** reach
the old chapter's التوابع beyond العطف/النعت (no بدل, عطف بيان, or
توكيد source exists) — see the coverage-boundary note above.

**Module 24 — الفاعل ونائب الفاعل والمبتدأ — already authored**, out of
order per the same 2026-08-12 direction as Modules 06-19 — see its entry
above, before this "Proposed Modules" section, rather than here.

### Module 25 — الخبر والمفعول المطلق

`content/module-25.js` · 3 lessons

> الخبر's تعدد, ترتيب, and the three obligatory plus two common optional cases of حذف, then its مطابقة with المبتدأ and the seven ways a bare مبتدأ can carry معنى الشرط — closing with المفعول المطلق, the first منصوب, its two forms, its seven substitutes, its three أغراض, and its نيابة عن فعله المحذوف.

**2026-08-12: authored**, following the same process as Modules 01-03, 09,
10, 15, and 18-19. `app-lessons/127–128` covers the module's whole scope,
and the proposal's part-1/part-2 split of 127 held exactly (l1 = تعريف
الخبر through جواز حذف الخبر; l2 = مطابقة الخبر through the seven أسباب
of تضمن المبتدأ معنى الشرط); l3 = 128 whole. **NOT YET registered** in
`content/annahw.js`'s `MODULES` array: Modules 20-24 are still gaps at
the time of writing (that registry file is shared with concurrent
sessions authoring them), so wiring this module in is left for a later
merge pass, per the same reasoning already used for Modules 08-11,
13, and 16-19. Concept counts landed exactly as estimated (5, 5, 6);
l1 ended up denser than a plain per-heading split would suggest, since
127's وجوب حذف الخبر section alone covers three distinct triggers
(جواب القسم, لولا, واو نصّ في المعية) — these were kept as one concept
with an (1)(2)(3) marker, the same way Module 01's l1 handled its own
multi-part تنبيهات concept, rather than forced into three separate slots.

- **l1** — الخبر: تعدده وترتيبه وحذفه — The Predicate — تعدد الخبر, ترتيب المبتدأ والخبر, and where حذف الخبر is وجوب or جواز
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/127-al-khabar.md (part 1: تعريف الخبر through جواز حذف الخبر)
- **l2** — الخبر: مطابقته والمبتدأ المتضمن معنى الشرط — Agreement and the Conditional المبتدأ — when الخبر must match, and the seven situations that license فَ on الخبر
  (5 concepts, 6 quiz, 22 bank (4 تركيب, 18 mcq))
  → maps to: app-lessons/127-al-khabar.md (part 2: مطابقة الخبر للمبتدأ through تضمن المبتدأ معنى الشرط)
- **l3** — المفعول المطلق — The Absolute Object — the مصدر that reinforces, specifies, or counts its فعل, and what can stand in its place
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/128-al-mafool-al-mutlaq.md

l2's تركيب count (4, not the usual 6) reflects 127's own source material:
once the three مطابقة examples (إِنَّهُمْ هُمُ الْمُفْسِدونَ, its contrast
نَحْنُ فِتْنَةٌ, and فَذٰنِكَ بُرْهانانِ مِنْ رَبِّكَ) are used, the seven
تضمن معنى الشرط triggers supply only one genuinely clean, fully quoted
multi-word example without reaching into grammar this module doesn't
teach (وَلَدٌ حَفِظَ القُرْآنَ فَلَهُ اَجْرٌ) — several of the source's own
ayah examples for the other six triggers turn on مبني للمجهول, نواسخ
chains, or إضافة depth that would overload a تركيب item built for this
lesson's own scope, so they stayed concept-level worked discussion
instead, the same discipline every prior module applied to its own thin
spots. l1 and l3 both hit the full 24-item/6-تركيب norm, since 127's
وجوب/جواز حذف material and 128's substitutes/نيابة material are each
unusually rich in short, cleanly parsed آيات with a single reading.

### Module 26 — بقية المفعولات

`content/module-26.js` · 4 lessons

> المفعول به's جوازًا and وجوبًا fronting rules, المفعول فيه (الظرف) split by زمان/مكان and مبهم/محدود, المفعول له and the four شروط that let it take direct نصب, and المفعول معه's واو المعية — four منصوبات closing out the family that opened with المفعول المطلق (Module 25).

**2026-08-12: authored out of order**, per the same precedent used throughout this course (Modules 04/06/07/08/09/10/11/13/15/16/17/18/19) — Modules 20-25 are not yet authored, but `app-lessons/129-132` stand on their own regardless of what precedes them in the المعمول وغير المعمول chapter. **NOT YET registered** in `content/annahw.js`'s `MODULES` array: that registry is shared with concurrent sessions authoring earlier modules, so wiring it in is left for a later merge pass, per the same reasoning already used for Modules 08/09/10/11/13/15/16/17/18/19. The lesson boundaries below match the proposal that stood in this file before authoring exactly (one lesson per source file, l1-l4) — the survey held up once every source file was read in full, with concept counts landing at 5/6/6/5 rather than the ~4/5/4/4 estimated, since all four files turned out denser than the initial file-by-file skim suggested (each supplies enough distinct rules and worked examples — 129's جوازًا/وجوبًا split alone covers three separate triggers — to earn a full concept rather than being compressed into fewer, larger ones).

- **l1** — المفعول به: تقديمه وتأخيره — The Direct Object's Word Order — إياك نعبد's جوازًا fronting, and the وجوبًا fronting that صدارة الكلام forces
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/129-al-mafool-bihi-taqdim.md
- **l2** — المفعول فيه: الظرف — The Locative and Temporal Object — ظرف زمان vs مكان, each مبهم or محدود, and what stands in for a ظرف
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/130-al-mafool-fihi-zarf.md
- **l3** — المفعول له — The Object of Reason — مفعول لأجله, and the four شروط that let it take نصب without a لام
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/131-al-mafool-lahu.md
- **l4** — المفعول معه — The Object of Accompaniment — واو المعية after a فعل or شبه فعل, and when النصب becomes the only option
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/132-al-mafool-maahu.md

Every lesson in this module holds the full 24-item/6-تركيب norm — unusually consistent for this course, since all four source files turned out rich in fully quoted, single-reading worked examples: 129 supplies five clean ayat (اعبدوا ربكم, إياك نعبد, أيا ما تدعوا, فأي آيات الله تنكرون, وكم أرسلنا من نبي) plus the source's own default-order example (يعبد العبد ربه); 130 is the richest of the four, with fifteen distinct quotable examples across its زمان/مكان × مبهم/محدود grid and its two exceptional-نصب cases, of which six were chosen for تركيب and the rest folded into mcq angle variety; 131 supplies five ayat/constructed examples spanning all four شروط plus the لتركبوها وزينة dual-إعراب case; 132 supplies five (يفنى المال ويبقى ابن آدم وعمله, أنا سائر والنهر, كل امرئ وشأنه, بعثت والساعة كهاتين, حضر الأب وولده under both readings), with the last one split into two تركيب items — نصب and رفع — to keep جواز الوجهين concrete rather than only described in prose.

### Module 27 — الحال

`content/module-27.js` · 3 lessons

> الحال — the sixth of the منصوبات: its definition, صاحبها, when either one may be نكرة, مشتقة vs جامدة, and the six independent axes — ثبات، استقلال، زمن، قصد، تعدد، ومتعلَّق — a single حال is classified along all at once.

**2026-08-12: authored out of order**, per the same pattern already used
for Modules 04/06-11/13/16-19/28 — see the authoring-order note at the top
of this file. Modules 20-26 (العامل من الأسماء المشتقة onward) remain
unauthored proposals below. **NOT YET registered** in `content/annahw.js`'s
`MODULES` array, for the same reason as Module 28: registering it now would
occupy the wrong array position while the 20-26 gap is still open, so
wiring it in is left for the merge pass that fills that gap. The
three-lesson split below matches the proposal that stood in this file
before authoring exactly (l1 = the definitional material through
اشتقاق الحال; l2 = the first three of the six أقسام axes, باعتبار الثبات،
الاستقلال، والزمن; l3 = the remaining three, باعتبار القصد، التعدد،
والمتعلَّق) — the survey held up once the source was read in full, though
l1 grew from the ~5 concepts estimated to 6 (اشتقاق الحال alone, once
مشتقة الأصل and both جامدة families were each given room, needed two
concepts rather than one), and l2/l3 each add one bridging or capstone
concept beyond their three taught axes (l2 closes on the source's own reuse
of ﴿وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ﴾ as the worked example for two
different axes at once, to make the axes' independence explicit; l3 closes
on the source's own full summary table, once every axis it lists has
actually been taught) — 133 was already flagged above as the richest file
surveyed in the whole corpus, so both additions draw on material the source
itself provides rather than inventing anything new.

- **l1** — الحال: تعريفه وصاحبه واشتقاقه — Defining الحال — صاحب الحال, when ذو الحال or الحال itself may be نكرة, and مشتقة vs جامدة
  (6 concepts, 6 quiz, 23 bank (6 تركيب, 17 mcq))
  → maps to: app-lessons/133-al-hal.md (part 1: تعريف الحال through اشتقاق الحال)
- **l2** — أقسام الحال: الثبات والاستقلال والزمن — Three Classification Axes — متنقلة/لازمة, مؤسِّسة/مؤكِّدة, and محكية/مقارِنة/مقدَّرة
  (4 concepts, 6 quiz, 20 bank (5 تركيب, 15 mcq))
  → maps to: app-lessons/133-al-hal.md (part 2: باعتبار الثبات والزوال through باعتبار الزمن)
- **l3** — أقسام الحال: القصد والتعدد والمتعلَّق — The Remaining Axes — مقصودة/موطِّئة, تعدد الحال, and حقيقية/سببية
  (4 concepts, 6 quiz, 19 bank (4 تركيب, 15 mcq))
  → maps to: app-lessons/133-al-hal.md (part 3: باعتبار القصد through باعتبار المتعلَّق, plus the closing summary table)

l2's تركيب count (5, not the usual 6) reflects 133's own source material:
its one محكية (narrated/past) example, ﴿قَالَ رَبِّ أَنَّىٰ يَكُونُ لِي
غُلَامٌ وَقَدْ بَلَغَنِيَ الْكِبَرُ﴾, is a حال جملة embedded inside a longer
quoted speech rather than a short, cleanly bounded phrase, so it is
discussed in concept prose and tested in quiz/bank mcq items but left out
of the word-to-label تركيب pool — the same discipline every prior module
applied to its own thin spots. l3 caps its تركيب items at 4 for the same
reason: its متداخلة example spans two verses, and 133 supplies no further
clean multi-word constructions for this lesson beyond the four used
(موطِّئة, مترادفة, متداخلة, سببية — one per axis taught).

### Module 28 — التمييز

`content/module-28.js` · 2 lessons

> التمييز — the seventh of the منصوبات, lifting ambiguity from either a single مفرد word (a number or a measure) or a vague نسبة between two sides of a sentence, and the several places where, despite its name, it actually comes مجرور instead.

**2026-08-12: authored out of order**, per the same pattern already used for Modules 04/06-11/13/16-19 — see the authoring-order note at the top of this file. Modules 20-27 (العامل من الأسماء المشتقة onward) remain unauthored proposals below. **NOT YET registered** in `content/annahw.js`'s `MODULES` array: registering it now would occupy the wrong array position while the 20-27 gap is still open, so wiring it in is left for the merge pass that fills that gap, the same choice every other out-of-order-authored module in this course made. The lesson boundaries below match the proposal that stood in this file before authoring exactly (l1 = تمييز المفرد, l2 = تمييز النسبة وإعراب العدد) — the survey held up once the source was read in full, though both lessons landed at the top of their estimated range (l1 at 5 concepts, l2 at 6) rather than ~5 each, since 134 is genuinely dense once every Rule/Careful box and worked example is accounted for — this file was already flagged above as unusually rich for a single source.

- **l1** — تمييز المفرد — Specifying a Single Word — عدد صريح and مبهم, المقدار, and what resembles or extends it
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/134-al-tamyiz.md (part 1: التمهيد وتعريف التمييز through ما هو فرع للتمييز)
- **l2** — تمييز النسبة وإعراب العدد — Specifying a Relation, and How to إعراب a Number — غير محوّل vs محوّل, and كم الخبرية
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/134-al-tamyiz.md (part 2: تمييز النسبة through the closing summary table)

Both lessons hold the full 24-item/6-تركيب norm rather than tapering for a thin source: 134 is unusually rich in short, cleanly parsed worked examples across both تمييز المفرد (اثنا عشر كوكبا, لتر لبنا, مثقال ذرة خيرا, جريب نخلا, خاتم فضة, ولو جئنا بمثله مددا) and تمييز النسبة/إعراب العدد (لله دره فارسا, واشتعل الرأس شيبا, أنا أكثر منك مالا, ثلاثة أيام, كم أهلكنا قبلهم من القرون, إن عدة الشهور عند الله اثنا عشر شهرا) — every تركيب item above is quoted verbatim from one of 134's own Example or Rule boxes, the same discipline every prior module in this course applied. One example, مَا فِي السَّمَاءِ قَدْرُ رَاحَةٍ سَحَابًا, was kept as concept-level discussion only rather than forced into a تركيب item, since its multi-word شبه جملة structure (فِي السَّمَاءِ) doesn't reduce cleanly to single-word chips the way this course's other تركيب items do.

### Module 29 — المستثنى

`content/module-29.js` · 3 lessons

> المستثنى — the eighth of the منصوبات, its three أركان, its split into التام/غير التام and المتصل/المنقطع, the three grammatical types of أداة الاستثناء, and how إعراب المستثنى shifts across كلام موجب, غير موجب, تقديم, فعل استثناء, حاشا, and المنقطع.

**2026-08-12: authored out of order**, following the same pattern
Modules 04/06-11/13/16-19/28 used — see the authoring-order note at the
top of this file. At the time of writing, only Modules 24 and 28 existed
on disk among 20-28 (concurrent sessions were still authoring the rest of
the العامل وغير العامل — الاسم and المعمول وغير المعمول — الاسم والفعل
chapters, with 20-23 and 25-27 still gaps), so this module lands ahead of
several still-unauthored modules earlier in unlock order, the same way
Module 28 itself landed ahead of 20-27. **NOT YET registered** in
`content/annahw.js`'s `MODULES` array — that array is shared with
concurrent sessions authoring the rest of 20-28, and slotting 29 in ahead
of them would put it at the wrong array position
(array position, not id, drives unlock order in `isModuleUnlocked`);
wiring it in is left for a later merge pass once the 20-28 range is
complete, the same choice Module 28 made. Shape was checked by temporarily adding it to
`MODULES`, running `npm run validate` (passed cleanly), then reverting
the registration — so the file is validated but genuinely unwired, not
merely untested.

`app-lessons/135` is the most heading-dense file in the entire corpus (15
`##` headings) — this is where الاستثناء proper is treated (see Module
11's note on `app-lessons/059` for the earlier, narrower إلا-as-حرف
lesson). The three-lesson split proposed below held exactly once the
source was read in full: l1 = headings 1-5 (تعريف، أركان، تام/غير تام،
متصل/منقطع); l2 = headings 6-10 (أحكام المستثنى منه، أدوات الاستثناء،
أحكام المستثنى، إعراب المتصل بشقيه، المستثنى المقدم); l3 = headings 11-16
(إعراب بعد فعل استثناء، إعراب غير، إعراب المنقطع، حاشا، غير بمعنى إلا
وإلا بمعنى غير، مسألة اللهم). No boundary changes were needed.

- **l1** — المستثنى: أركانه وأنواعه — The Excepted Noun — its three أركان, then التام vs غير التام and المتصل vs المنقطع
  (5 concepts, 6 quiz, 24 bank (5 تركيب, 19 mcq))
  → maps to: app-lessons/135-al-mustathna.md (part 1: تعريف المستثنى through أقسام الاستثناء التام: متصل ومنقطع)
- **l2** — أدوات الاستثناء وإعرابه — The Tools of Exception — أداة الاستثناء as حرف, فعل, or اسم, and إعراب المستثنى across موجب, غير موجب, and تقديم
  (6 concepts, 6 quiz, 23 bank (6 تركيب, 17 mcq))
  → maps to: app-lessons/135-al-mustathna.md (part 2: أحكام المستثنى منه through المستثنى المقدَّم)
- **l3** — أحكام خاصة: حاشا وغير واللهم — Special Rulings — فعل استثناء, حاشا, the غير/إلا interchange, and المستثنى in المنقطع
  (6 concepts, 6 quiz, 18 bank (3 تركيب, 15 mcq))
  → maps to: app-lessons/135-al-mustathna.md (part 3: إعراب المستثنى بعد فعل استثناء through مسألة مجيء اللهم قبل إلا)

l3's bank is intentionally leaner (3 تركيب rather than 5-6) than l1/l2:
its six concepts lean on narrow special-case rulings (فعل استثناء, غير,
حاشا) plus two Careful-box digressions the source itself flags as
extending beyond المتن (المنقطع's بدل exception at بنو تميم's hands, لا
إله إلا الله's two readings) and one Example-box curiosity (اللهم قبل
إلا) — genuinely single-reading, cleanly parseable worked sentences run
out faster there than in l1/l2, the same discipline every prior module in
this course applied to its own thin spots rather than forcing تركيب items
the source doesn't support. l2's تركيب count reaches the full 6 because
the متصل/غير موجب material alone supplies two distinct worked ayat (وجه
النصب and وجه البدل), on top of the أحكام المستثنى منه, أحكام المستثنى,
and المستثنى المقدَّم examples.

## Module 30 — خبر النواسخ والمجرور والنعت

`content/module-30.js` · 4 lessons

> خبر الأفعال الناقصة and خبر الحروف المشبهة بليس closing out the نواسخ family, اسم لا النافية للجنس, المجرور's two types, and النعت opening التوابع as this course's closing lesson.

**2026-08-12: authored**, following the same process as every other module in this course. Closes out the app-lessons corpus as it currently stands — 140's own opening line calls النعت "the closing lesson of this entire course." **NOT YET registered** in `content/annahw.js`'s `MODULES` array: Modules 20-29 don't exist yet on disk, and that registry is shared with concurrent sessions authoring the modules before this one, so wiring it in is left for a later merge pass, the same choice every out-of-order module in this course has made. The lesson boundaries below match the proposal that stood in this file before authoring (l1 merges 136+137, l2 = 138, l3 = 139, l4 = 140) — the survey held up once every source file was read in full, except l3 grew from the ~3 concepts estimated to 4, by splitting the closing Rule Box (المجرور لفظًا، ...) into two concepts — one per worked example (فاعل مرفوع محلًّا / مفعول به منصوب محلًّا) — rather than covering both in one concept, matching the 4-6 concept floor every other lesson in this course holds to.

Two source ambiguities were worked around rather than silently resolved: 136/137's "ninth"/"tenth of the منصوبات" framing depends on an ordinal count running through Modules 20-29, which aren't authored yet, so that framing was dropped from the lesson prose rather than asserted to a learner who hasn't been taught the count. 138's own intro line calls اسم لا النافية للجنس "the twelfth and final of the deferred مرفوعات," which contradicts both its own content (اسم لا is never مرفوع) and 136/137's "منصوبات" framing for the same sequence — read as a likely typo in the source itself, so this specific ordinal claim was not carried into the lesson. 138's five-وجوه table also lists وجه ٢ ("رفع الثاني") against an example (لا حَوْلَ ولا قوةَ إلا بالله) whose diacritic reads as بناء rather than رفع; reproduced exactly as the source gives it, with no bank item built around that particular diacritic.

- **l1** — خبر الأفعال الناقصة وخبر الحروف المشبهة بليس — The Predicate of the Deficient Verbs and Their Sisters — كان's خبر, its freedom of word order, and the three حروف that borrow ليس's own عمل
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/136-khabar-al-afaal-al-naqisa.md, app-lessons/137-khabar-al-huroof-al-mushabbaha-bi-laysa.md
- **l2** — اسم لا النافية للجنس — The Noun Governed by لا النافية للجنس — منصوب لفظًا when مضاف or شبيه بالمضاف, مبني elsewhere, and what تكرار and حذف do to it
  (5 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/138-ism-la-al-nafiya-lil-jins.md
- **l3** — المجرور — The Genitive Noun — its two types, and how a زائد حرف جر can wrap a word in الجر لفظًا while its true role stays مرفوع or منصوب محلًّا
  (4 concepts, 6 quiz, 17 bank (3 تركيب, 14 mcq))
  → maps to: app-lessons/139-al-majroor.md
- **l4** — النعت — The Adjectival التابع — what qualifies as a نعت, حقيقي vs سببي, and how the described noun can vanish and leave the نعت standing alone
  (6 concepts, 6 quiz, 24 bank (6 تركيب, 18 mcq))
  → maps to: app-lessons/140-al-naat.md

l3's bank count (17, below the ~24 norm) reflects 139's own source material: the file is deliberately narrow (two types plus one زائد-حرف phenomenon), supplying exactly four fully quoted worked examples across its whole span, capping تركيب items at 3 rather than forcing a flat 6 — the same discipline every prior thin-source lesson in this course applied. l1, l2, and l4 all reach the 24-item/6-تركيب norm: 136+137 combined supply eight genuinely parseable worked examples between them once both files are read in full, 138 is dense with its five-وجوه table and multiple سورة citations, and 140 is the richest file in the module (11 distinct نعت-related worked examples across مشتق, مشابه للمشتق's six subtypes, حقيقي/سببي, and حذف المنعوت).

---

**Totals if this plan holds:** Modules 01-30, roughly 135-140 lessons —
against the old course's 17 modules/101 lessons. The expansion is
concentrated where `app-lessons` is genuinely richer (حروف الجر alone
goes from 1 module/6 lessons to effectively 3 modules/18 lessons); a few
spots stay lean where the source itself is lean (Modules 17, 19, 28).
Every number above is a planning estimate — expect it to move once a
module is actually read closely and authored, the way Module 01's did.

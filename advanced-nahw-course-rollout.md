# Advanced Nahw course presentation rollout

Local implementation complete, 10 September 2026. No commits or publishing.

The approved first ten lessons remain the baseline. The remaining 128 lessons
are authored in `js/learning/nahw-course/module-XX.js`. Original course
data remains untouched. Each plan specifies complete source references,
deliberate comparison groups, concise display copy, checks and recaps.

## Verification record

| Module | Authored lessons | Source/integration | Responsive audit | Real app flows |
| --- | ---: | --- | --- | --- |
| 03 | 3 | Passed | 5 viewports, 3 fonts, 3 preferences passed | 3 lessons, 22 corrections and reloads passed |
| 04 | 4 | Passed | 5 viewports, 3 fonts, 3 preferences passed; misplaced visual corrected and rechecked | 4 lessons, 29 corrections and reloads passed |
| 05 | 5 | Passed | 16,155 states across 5 viewports, 3 fonts, 3 preferences passed | 5 lessons, 35 corrections and reloads passed |
| 06 | 3 | Passed | 10,620 states across 5 viewports, 3 fonts, 3 preferences passed | 3 lessons, 23 corrections and reloads passed |
| 07 | 6 | Passed | 22,500 states across 5 viewports, 3 fonts, 3 preferences passed | 6 lessons, 46 corrections and reloads passed |
| 08 | 6 | Passed | 20,340 states across 5 viewports, 3 fonts, 3 preferences passed; short-desktop panel corrected and rechecked | 6 lessons, 46 corrections and reloads passed |
| 09 | 6 | Passed | 20,475 states across 5 viewports, 3 fonts, 3 preferences passed | 6 lessons, 45 corrections and reloads passed |
| 10 | 6 | Passed | 19,800 states across 5 viewports, 3 fonts, 3 preferences passed | 6 lessons, 44 corrections and reloads passed |
| 11 | 6 | Passed; quiz target sentence corrected with original answer identities and key | 18,405 states across 5 viewports, 3 fonts, 3 preferences passed after local copy corrections | 6 lessons, 41 corrections and reloads passed |
| 12 | 6 | Passed | 20,700 states across 5 viewports, 3 fonts, 3 preferences passed | 6 lessons, 46 corrections and reloads passed |
| 13 | 6 | Source and bidi checks passed | 19,125 states across 5 viewports, 3 fonts, 3 preferences passed | 6 lessons, 42 corrections and reloads passed |
| 14 | 6 | Source and bidi checks passed | 19,485 states across 5 viewports, 3 fonts, 3 preferences passed | 6 lessons, 42 corrections and reloads passed |
| 15 | 6 | Source/integration checks passed | 20,655 states across 5 viewports, 3 fonts, 3 preferences passed | 6 lessons, 45 corrections and reloads passed |
| 16 | 6 | Source/integration/bidi checks passed | 18,585 states across 5 viewports, 3 fonts, 3 preferences passed | 6 lessons, 43 corrections and reloads passed |
| 17 | 3 | Source/integration checks passed | 11,070 states across 5 viewports, 3 fonts, 3 preferences passed | 3 lessons, 24 corrections and reloads passed |
| 18 | 5 | Source/integration/bidi/build checks passed | 16,380 states across 5 viewports, 3 fonts, 3 preferences passed | 5 lessons, 36 corrections and reloads passed |
| 19 | 3 | Source/integration/bidi/build checks passed | 10,440 states across 5 viewports, 3 fonts, 3 preferences passed | 3 lessons, 23 corrections and reloads passed |
| 20 | 6 | Source checks passed | 19,665 states across 5 viewports, 3 fonts, 3 preferences passed | 6 lessons, 42 corrections and reloads passed |
| 21 | 6 | Source/integration/bidi checks passed | 20,160 states across 5 viewports, 3 fonts, 3 preferences passed | 6 lessons, 40 corrections and reloads passed |
| 22 | 4 | Source/integration/bidi/build checks passed | 14,040 states across 5 viewports, 3 fonts, 3 preferences passed | 4 lessons, 30 corrections and reloads passed |
| 23 | 4 | Source checks passed | 12,915 states across 5 viewports, 3 fonts, 3 preferences passed | 4 lessons, 28 corrections and reloads passed |
| 24 | 3 | Source/integration/bidi checks passed | 10,755 states across 5 viewports, 3 fonts, 3 preferences passed | 3 lessons, 24 corrections and reloads passed |
| 25 | 3 | Source/integration/bidi checks passed | 10,665 states across 5 viewports, 3 fonts, 3 preferences passed | 3 lessons, 22 corrections and reloads passed |
| 26 | 4 | Source checks passed | 13,095 states across 5 viewports, 3 fonts, 3 preferences passed | 4 lessons, 30 corrections and reloads passed |
| 27 | 3 | Source checks passed | 9,630 states across 5 viewports, 3 fonts, 3 preferences passed | 3 lessons, 20 corrections and reloads passed |
| 28 | 2 | Source checks passed | 6,930 states across 5 viewports, 3 fonts, 3 preferences passed | 2 lessons, 15 corrections and reloads passed |
| 29 | 3 | Source/integration/bidi/build checks passed | 10,170 states across 5 viewports, 3 fonts, 3 preferences passed | 3 lessons, 23 corrections and reloads passed |
| 30 | 4 | Source/integration/bidi/build checks passed | 12,600 states across 5 viewports, 3 fonts, 3 preferences passed | 4 lessons, 28 corrections and reloads passed |

Modules 03 and 04 together passed 23,085 responsive states. Dense teaching
cards in all 15 lessons of modules 03–06 were also inspected visually in
mobile and desktop screenshots. All six module 07 lessons also received this
visual review. Modules 03–06 passed the 320px font/preference matrix again
after the shared parsing feedback improvement.
The six module 08 lessons received mobile and desktop visual review as well.
All six module 09 lessons received the same visual review.
All six module 10 lessons received mobile and desktop visual review.
All six module 11 lessons received mobile and desktop visual review.
All six module 12 lessons received mobile and desktop visual review.
All six module 13 lessons received mobile and desktop visual review. The final
13/l4 comparison was additionally inspected at 320px after tightening its
heading and repetition while keeping both full Arabic examples together.
Source/integration/bidi checks, content validation and the web build passed
after module 11; validation retains five existing literature advisories.

Audit selection is shared across render, browser and real-app tools. Pass
`modules=03,04` or `course=1` to select registered plans. The default still
checks the original first ten. Audit reports are local ignored artifacts.

New full parsing exercises retain their original stored answer values and
grades. Authored display labels can remove repeated wording without dropping
grammatical distinctions. After submission, fields show the first attempt;
the feedback gives expected roles. Correction mode edits the current attempt;
after completion the original attempt is shown again beside the expected
roles. This avoids listing each initial answer twice. Typography is fixed.

Expected parsing roles now form a numbered, wrapping sequence rather than
one large block per answer. Five-part exercises fit the small phone while
retaining the first attempt and all expected roles. Stored values are unchanged.
English explanation panels use the fixed prose style; standalone Arabic uses
the fixed quotation style. The audit checks every element in each role, not
just the first element found on a card.

The Notes dialog now constrains its grid track and minimum width. Long source
tables scroll within Notes instead of moving the Close button off the screen.

## Source corrections in the presentation

Verified corrections are applied to teaching copy and displayed exercise labels.
Canonical source content, answer identities and grading keys remain unchanged;
full original wording remains in Notes with the established punctuation cleanup.
Correcting a display label does not change the stored answer it represents.

- `04/l1`, bank item 18: the source calls the subject of `يَحْزَنُونَ` hidden;
  the displayed correct answer now identifies `واو الجماعة`. The competing
  wrong answer now names `نون النسوة`, and a second valid مبتدأ distractor
  is replaced with an incorrect role. All stored identities and keys remain
  unchanged. Small-phone font/preference checks, desktop exercise checks and
  the real correction/reload flow passed after this correction.
- `03/l3`, bank item 16: two different stored choices had acquired the same
  shortened label. Their displayed case-mark distinctions are now explicit.
  The source verifier rejects duplicate display choices in every active
  parsing exercise. Layout and correction/reload checks passed again.
- `05/l5`, concept 2 line 2: the original describes Shaytan as the grammatical
  subject of `أرأيتك`. He is the speaker; the form addresses the addressee.
  The display describes him as the speaker. Original wording remains in Notes.
- `06/l1`, concept 5 line 3: the source describes the referent of
  `فجعلناه هباء منثورا` as mountains, although the verse concerns deeds.
  Display copy explains the transformation without repeating that referent.
  Original wording remains in Notes.
- `08/l4`, concept 0 introduction: it calls شروع سماعي, contradicting the
  explicit قياسي rule in `08/l3`. The display follows that explicit rule.
- `08/l2`, concept 3: يتجرعه is before, not after, ولا يكاد يسيغه in the
  quotation. Display copy describes the contextual relationship without the
  erroneous order claim.
- `09/l3`, concept 4: the source incorrectly gives definiteness to إضافة
  whose second noun is indefinite. Display explicitly states that such إضافة
  specifies but does not make the head definite; it contrasts كتاب زيد,
  كتاب لزيد, خاتم ذهب and سفر من العذاب. Original remains in Notes.
- `09/l4`, concept 2: display retains the source's three movement categories
  while making explicit that ما in وما ينطق عن الهوى denies that source
  of speech. It avoids saying the Prophet's speech began in desire.
- `10/l6`, concept 1: the source's حاشا example prints العالمَ while
  teaching حاشا as حرف جر. The displayed preposition example uses العالمِ.
  Source text and all stored answer keys remain unchanged.
- `11/l1`, introduction and first check: the source wrongly says the noun
  after an added preposition has no syntactic role, then explicitly calls
  such nouns فاعل, مبتدأ and خبر later in the lesson. Display makes the
  distinction between no separate تعلق and the noun's retained role. The
  check tests the intended تعلق contrast with unchanged identities/indices.
- `11/l3`, concept 2 and quiz item 3: the source reverses the semantic roles
  in ما أحب رسول الله إليّ. إلى marks the semantic lover, so the speaker
  remains the lover in both compared expressions. Teaching/table display
  corrects the roles. The quiz now contrasts ما أحبني لرسول الله with
  ما أحبني إلى رسول الله, a valid role swap for the original answers and
  original key. Both original teaching examples remain in the table. This
  resolves the display exercise without changing any stored answer identity
  or grade. The 320px full matrix and all eight correction/reload flows passed
  again. Compare the primary grammar
  discussion in [الدر المصون, 2:237](https://tafsir.app/aldur-almasoon/2/237).
- `11/l4`: the purported English double negative is garbled; display uses
  actual dialectal negative concord. It also avoids the source's unsupported
  claim that every grammarian accepts only one analysis of كمثله.
  In ما خلا and ما عدا, ما is مصدرية, not negation; the display and the
  verb-classification answer clarify this without changing its index.
- `11/l5`: omitted-preposition meaning can remain while surface جر does
  not. Display reconciles the source introduction with its own later
  منصوب بنزع الخافض explanation and states the clarity condition.
- `11/l6`: the verb-governor account does not make زيدا an ordinary direct
  object of intransitive جاء. Display distinguishes governor from role,
  retains both presented accounts, and scopes broad agreement claims to
  this course's presentation. Iblis is included among the command's
  addressees without asserting he is an angel.
- `12/l2`, concept 5: the source incorrectly explains the second إنّ by
  referring to الله as a concrete subject. The second clause is the خبر of
  the first إنّ, whose اسم names the groups of people. Display distinguishes
  these two levels. The classification questions retain their intended
  اسم عين versus اسم معنى answers with an accurate referent.
- `12/l3`, concept 2: the source confuses the outer omitted خبر of the
  مصدر مؤول after لو with the stated inner خبر أنّ, آمنوا واتقوا.
  Display and the question make the outer/inner distinction explicit.
- `12/l4`, conditional answer: the second noun-equivalent analysis restores
  an omitted outer مبتدأ (الأمر); the source incorrectly says both that
  مبتدأ and its خبر are omitted. The displayed restoration is explicit.
- `12/l5`: display distinguishes conditional من from a possible relative
  reading and scopes the indefinite phrase-predicate ordering rule to the
  simple pattern shown. This avoids forbidding valid different constructions.
- `13/l1`: display describes تمنّي as beyond realistic hope, without
  incorrectly limiting every wish to absolute impossibility. نون الوقاية
  is not obligatory after every particle; إني is included alongside إنني.
  The word-length comparison counts doubled consonants and recognises
  لكنّ's pronounced, unwritten ألف rather than declaring four a maximum.
- `13/l2–l3`: لعلّ has a shaddah. It is outside the particular ن-lightening
  pattern, not a particle that lacks doubling. Display wording and the
  affected quiz explanation now make that distinction with unchanged keys.
- `13/l2`: Abu Amr's Hud 11:111 reading has strong إنّ and light لَمَا,
  not neglected light إنْ. The displayed recitation table and representative
  Hafs example have been corrected. The alternative omitted-verb analysis
  is retained separately, without the incorrect reader attribution. See
  [كتاب سيبويه, annotated volume 2](https://d1.islamhouse.com/data/ar/ih_books/chain_01/Ktab_Sibouih/ar_02_ktab_sibouih.pdf)
  and [أبو شامة's شرح الشاطبية, quoted text](https://mazameer.com/vb/threads/43346/page-3).
  The source also wrongly excludes any distinguishing لام with working إنْ;
  display explains its role in resolving ambiguity without that exclusion.
- `13/l2`: Nafi's prayer-verb example is أنْ غَضِبَ اللهُ, not the
  printed strong أنَّ plus noun غضبَ اللهِ. See the primary text of
  [تفسير النسفي, 24:9](https://www.islamweb.net/ar/library/content/206/2782/).
- `13/l3`: ليْتما keeps a nominal construction even with إهمال. The general
  verb-entry claim is now scoped to forms such as إنما, with the exception
  made explicit.
- `13/l4`: the correct name is لا التبرئة, not لام التبرئة. The word
  analysed in بلا is لا, not a supposed additional لام. Display distinguishes
  the two noun/particle accounts. It also states the indefinite-اسم condition.
- `13/l5`: the source wrongly claims إنْ must govern when إلا appears and
  cites إن يقولون إلا كذبا. In that actual example إنْ is non-governing;
  يقولون has its own government. Display and the check correct that claim
  while retaining the answer index and all saved grades. The earlier
  العالية example restricts a circumstance, rather than introducing the
  predicate with إلا. لات's common omission is not stated as an absolute.
- `13/l6`: the final guided check now explicitly asks for a particle family,
  resolving its ambiguous wording that also allowed the incomplete-verb
  distractor. Original answer identities and key are retained.

Reorganised comparison tables can supply `tableHeaders` for their screen-reader
column labels. Existing tables keep their original headers by default. This
avoids announcing obsolete column meanings when a displayed table is reorganised.

Long source paragraphs containing multiple complete arguments can use explicitly
authored `copyParts` and `part(line, index)` references. This is content authoring,
not automatic pagination. Coverage checks require every nonempty argument exactly
once; browser checks compare each rendered argument. The first use is 14/l1's
long final source paragraph, which contains distinct analyses of Lut's wish.
Each resulting card explains a complete interpretation. Original Notes retain
the full paragraph. Module 14 is now registered and these arguments passed
the full browser matrix. All six lessons received mobile and desktop screenshot
review. Source and bidi checks passed after the batch.

Module 14 content review corrected the displayed causal-fاء definition (cause
before, result after in the subjunctive construction), the spelling يحفرَ in
the exceptional omission example, and the corrupt poetry quotation before
أو تستقيما. The source's paraphrase is retained and labelled as such. Compare
[أوضح المسالك](https://ablibrary.net/book_content/11404/158).
The raised ويعلمُ reading is a separate clause, not simple coordination with
a preceding مجزوم verb; see [القرطبي, 3:142](https://quran.ksu.edu.sa/tafseer/qortobi/sura3-aya142.html).
Further display clarifications distinguish disputed emphasis with لن, nominal
and particle accounts of إذن, contextual meanings of conditional tense, and
the criterion for linking فاء (a bare past answer does not require it merely
because it lacks a visible جزم ending). All original data and stored keys remain.
Some source parsing distractors duplicated correct roles in different words.
For the active module 14 exercises, those display labels now describe distinct
incorrect roles while keeping their original stored values, indices and grades.

All module 15 lessons received mobile/desktop screenshot review. Source,
integration, content validation and web build passed after the batch. The
integration coverage assertion now understands explicit paragraph arguments,
matching the existing source and browser checks without relaxing coverage.
The shared analysis prompt supports a lesson-specific qualifier: 15/l6 asks
for the preferred analysis, because it explicitly teaches another grammatical
account that remains a distractor under the original answer key.

Module 15 display corrections include the case ending يومِ الفطر after
prepositional حتى, masculine Ramadan pronouns, Asr's being a time within the
day, and context-dependent inclusion of a prepositional endpoint. The أم
restriction now explicitly concerns أم المتصلة. Repeated ولا is distinguished
from bare coordinating لا; absence of repetition is not declared to guarantee
permission for each separate item. After an affirmative item, بل withdraws
the first assertion without necessarily asserting its opposite; see
[ابن هشام, مغني اللبيب](https://alhawzaonline.com/almaktaba-almakroaa/book/410-logha-arabiya/0003-moghni-labib/01/03.htm).
In ولكن رسول الله, an affirmative clause with understood كان is coordinated,
not رسول simply sharing أبا's negation. The display and quiz retain the
original answer index while making the clause analysis explicit; compare
[the quoted مغني اللبيب passage](https://jamharah.net/archive/index.php/t-15633.html).
Module 14's exceptional مره يحفرَها was additionally confirmed against
[شرح ابن عقيل](https://maknoon.org/ai/view.php?bk=shakeel4&p=24).

## Remaining work

Module 16 received mobile and desktop screenshot review, including the
confirmed distinction between نعم and بلى. Display corrections qualify
أجل's disputed range, the traditional Makkan association of كلا, and the
interpretive arguments about its confirming/opening uses. Heavy and light
emphatic نون have different pronunciation; their derivational relationship
is disputed. The shifted لام's restriction on a bare conjugatable past is
qualified by قد and fixed-verb exceptions. References include
[مغني اللبيب on أجل](https://ablibrary.net/book_content/b/3447/20),
[القرطبي on 83](https://quranpedia.net/surah/1/83/book/366),
[ابن عاشور on 96:6](https://tafsir.app/ibn-aashoor/96/6), and
[شرح ابن عقيل](https://www.alhawzaonline.com/almaktaba-almakroaa/book/410-logha-arabiya/0001-ebn-aqil/01/09.htm).

Module 17's teaching distinguishes the traditional لو definition from Ibn
Hisham's refinement, including the independently true answer. The source's
repentance comparison row contradicted its own explanation and is corrected
in display. The saying about Suhayb is retained as a grammatical example,
without treating its attribution as established; compare
[تدريب الراوي](https://islamweb.net/ar/library/content/88/356/النوع-الثلاثون-المشهور).
The past-time and لام rules are scoped to the constructions and rhetorical
interpretation taught. لولا's omitted خبر rule is scoped to general
existence; see [شرح ابن عقيل](https://www.alhawzaonline.com/almaktaba-almakroaa/book/410-logha-arabiya/0001-ebn-aqil/01/06.htm).
The favour-and-mercy verse does not assert universal actual purification.
أمّا's source expansion is corrected to remove the duplicated يكن, and the
خبر in فلهم جنات المأوى is the entire clause, not جنات alone. The
source's relative prominence of detail/emphasis remains labelled opinion.

Per-item `analysisItemLabels` resolve ambiguous distractors without changing
stored answer strings, option indices or grading. The same string can be
correct in one exercise and an ambiguous distractor in another; overrides
therefore key by the stable bank-item id. `diagramLabels` can correct or
clarify a displayed grammatical role while preserving original Notes.
Duplicate example sentences with only vocalization or quotation-mark
differences are shown once when the full diagram shares the card. This
comparison is limited to the new course plans. No typography changes.

Module 18 source review corrected the conflation of the plural request in
4:77 with the singular deathbed plea to Allah in 63:10. Compare
[ابن عاشور, 4:77](https://tafsir.app/ibn-aashoor/4/77) and
[63:10](https://tafsir.app/ibn-aashoor/63/10). Written tense and speaker rank
are contextual clues, not infallible tests. A conditional جواب can be
omitted, and the malformed reading-warning example is labelled and repaired.
Removing inviting ألا preserves grammar but loses the invitation. The
normal vocative restriction is qualified by exceptions such as يا الله.
Relative ما may have an omitted عائد. The source reading of future لو and
همزة التسوية as مصدر particles is explicitly an adopted analysis.

Module 18's زيادة section corrects a nonexistent first-day Quran quotation
in the Musa comparison: 28:15 says فوكزه موسى فقضى عليه; 28:19 has
فلما أن أراد. Hesitation/time-gap claims remain interpretive. Compare
[ابن عاشور, 28:19](https://tafsir.app/ibn-aashoor/28/19).
The first لا in لئلا يعلم and the negative لا before يقدرون are
distinguished; see [57:29](https://tafsir.app/ibn-aashoor/57/29).
The resurrection interpretation of وحرام...لا يرجعون is not presented as
the only account; see [21:95](https://tafsir.app/ibn-aashoor/21/95).
Non-cancelling ما after الباء is distinguished from ما الكافّة. All original
source data, keys and Notes remain intact.

Modules 17–19 received mobile and desktop screenshot review. An English row
heading overlapped its adjacent text despite fitting the outer card; the
heading is now the short Arabic term توبة, and the corrected screenshot
was reviewed. Source, integration, bidi, content validation and build passed
after module 19. The five literature validation advisories are unchanged.

Module 19 qualifies the disputed near/far account of س/سوف and the proposed
لا/لن counterparts; see [مغني اللبيب](https://ablibrary.net/book_content/10716/141).
Question forms are distinguished from rhetorical purpose. The exercise's
خير is displayed correctly as a predicate, and a duplicate valid predicate
distractor is changed to an incorrect role without changing stored indices.
The preposition condition on أنْ التفسيرية concerns the preposition governing
that clause, not any preposition elsewhere in the preceding sentence.
Tanwin review corrects the definition of an open rhyme and the account of
تنوين الترنم replacing the lengthening letter; compare
[شرح ابن عقيل](https://www.masaha.org/book/view/3374/page/119).
The غواشٍ comparison no longer starts from an already nunated غواشيٌ.
Fixed-name tanwin marks indefiniteness; the comparison with a great grammarian
is contextual. Neither absent tanwin nor an omitted visible pronoun is made
an infallible grammatical test.

All 30 modules are complete. Each batch received source review, authored cards,
small-phone checks, font/viewport matrices, screenshots and real-app
correction/resume checks. The first-ten baseline was rechecked after shared
changes. Final source integrity, integration, bidi, content validation, build
and diff checks passed.

Module 20 received all five viewport/font/preference checks and mobile/desktop
screenshot review. Three crowded cards were tightened through headings and
recap wording, preserving complete examples and fixed type. Its source review
distinguishes passive deputy subjects, genuine participle objects, and the
semantic bearer of a resembling adjective. Per-item display labels correct
المطيع أباه to active participle/object while preserving its original stored
answer strings and keys. This follows the same presentation correction used
for other misleading labels; original Notes remain verbatim apart from the
established punctuation normalization.

The مصدر with أل account is qualified as less common/disputed, rather than
an exhaustive assertion of a single poem and no Quran occurrence. The
fronted معه / السعي analysis is marked as disputed; compare
[الكشاف](https://shamela.org/gen/2cdd8b237444d35d77f45a8620c8c0bd_gen.pdf).
اسم التفضيل rules distinguish actual syntax from semantic comparison roles,
qualify definite إضافة, and explain that الكحل recurs through a pronoun.
اسم الفعل review distinguishes transferred رويد/بله, dialectal هلم, address
endings, and productive فعال from eligible triliteral verbs. Compare
[شرح الأشموني](https://www.almerja.net/more.php?idm=5106).
The adopted مصدر analysis of رويدًا is specified in questions rather than
grading other grammatical accounts as universally wrong.

The original first-ten baseline was rerun after shared rendering changes:
32,220 states across five viewports, three fonts and three saved preferences
passed. This used an isolated browser and did not move the learner's preview.

Module 21 source review corrects باخ to the Quran's بأخ لكم (12:59), and
corrects تنوين إذ: it replaces the following clause, not إذ itself.
Meaning-only omission is distinguished from intended wording and absolute
use in قبل/بعد; ordinary إضافة semantics are not restricted to underived
nouns. Compare [عناية النحو](https://www.dawateislami.net/bookslibrary/ar/inayat-ul-nahw-ala-hidaya-tun-nahw/page-114).
The nisba account uses منسوب, not حسن, and semantic relations do not change
actual genitive case into رفع محلي. Both analyses of أفي الله شك are retained.

The conditional inventory no longer teaches eleven distinct jussive nouns:
إذا ما is non-jussive, أينما extends أين, and أيّ has variable syntax.
Temporal مهما is disputed, not compatible with an unqualified “never ظرف”
rule. Compare [الفرح الكامل](https://data2.dawateislami.net/Data/Books/Download/ar/pdf/2012/659-1.pdf).
ما in حيثما prevents ordinary addition to a clause; مبني never meant unable
to form إضافة. Past خاطبهم is مبني, not مرفوع. The معنوي section distinguishes
an omitted لفظي governor from genuinely grammatical/implicit government.

Verbal إضافة review corrects the confusion between definiteness through
إضافة and actual أل, does not make every stable quality معنوية, and keeps
the severe-punishment adjective's competing analyses explicit. Compare
[مغني اللبيب](https://athar.arthurarchive.com/book/mughni-al-labib/في-خروج-إذا-عن-الشرطية--pages-736-775).
The source reverses Basran/Kufan attribution for descriptive إضافة; the
display corrects that and the incorrectly vocalized وللدار example, using
ولدار الآخرة from 12:109. Separation rules are qualified against the broader
licensed constructions recorded in [التوضيح quotation](https://bukhari-pedia.net/book/talqih/5402).

Modules 21–23 received the full mobile/desktop screenshot review. Module 22
qualifies التنازع, ordinary and obligatory omission, and the example of
Satan after sudden إذا: its object pronoun does not return to الشيطان.
أعدّ takes عذابا directly, so the explanatory omitted verb must fit the
fronted people. Compare [البحر المحيط](https://www.islamicbook.ws/qbook/albhr-046.html)
and [ابن عقيل on الاشتغال](https://www.alhawzaonline.com/almaktaba-almakroaa/book/410-logha-arabiya/0001-ebn-aqil/01/12.htm).
The warning section distinguishes التحذير from التوبيخ without a rigid tense
rule; أهل البيت in 11:73 refers to Ibrahim's household. Omitted verbs remain
لفظي governors. The source's ناقصة account of يكون is compared with the
complete-verb analysis in [السندي's commentary](https://hadithprophet.com/hadith-53741.html).
The confirming حال reading of مصدقا is qualified against the objection in
[بدائع التفسير](https://tafsir.app/ibn-alqayyim/2/91).

Module 23 corrects the exclusion of زينب from ترخيم and the explanation of
which vowel remains. Compare [شرح قطر الندى](https://ns2.almerja.com/more.php?idm=4906).
It preserves ordinary omission restrictions while recording rare vocative
omissions and the special اللهم substitution. Nafi's retained ياء in 43:68
is displayed with سكون; compare [إتحاف فضلاء البشر](https://s2.ketabonline.com/uploads/2020/04/2974055998788686739.pdf).
The coordinated helper's kasrah is not incorrectly claimed to distinguish
it from a beneficiary's identical kasrah. Pronoun لام exceptions and the
two amazed-call accounts follow [النحو الوافي](https://www.masaha.org/book/view/2505/page/503).
The lamented referent must be known; هاء السكت is pronounced without a
following vowel. Compare [ابن عقيل](https://almerja.com/more.php?idm=4924).
A narrowly scoped per-exercise text display map corrects أبتاهُ to أبتاهْ
in the live exercise and its accessible labels. Original source, word arrays,
answer values and grades remain unchanged and are explicitly checked.

Module 24 distinguishes grammatical voice from actual knowledge of an agent,
and مصدر إضافة's genitive construction from its semantic subject. The
source's رفع محلا terminology for the latter is retained as an attributed
account; see [شرح الفاعل](https://afaqattaiseer.net/vb/showthread.php?t=495).
The returning-pronoun condition is about a referent later in both wording
and rank; تنكرون has واو الجماعة, not a hidden subject. الكمثرى means pear.
The تلك دعواهم ordering account is qualified against the recorded alternative
in [اللباب](https://www.islamicbook.ws/qbook/allbab-050.html).
The indefinite مبتدأ example uses خيرٌ with non-operating ما, and distinguishes
the source's accusative alternative. لام الابتداء and oath-response لام are
not collapsed. The cut-description example distinguishes genitive لام from
إضافة and supplies an omitted أذم without a redundant object. فصبر جميل
has competing analyses, recorded in [اللباب](https://tafsir.app/lubab/12/16).
The two نعم/بئس accounts are kept separate, without inventing an extra hidden
subject inside the later-مبتدأ account.

Modules 24 and 25 received mobile/desktop screenshot review. Module 25
distinguishes general from particular existence after لولا, following
[النحو الوافي](https://www.masaha.org/book/view/2502/page/473).
ضيعتُه in كل رجل وضيعته is coordinated and raised, not a مفعول معه with
an incompatible visible ending. The source's alternative companionship
accounts remain explained; compare [الأشموني](https://islamport.com/l/nhw/5242/199.htm).
خرجت has an attached subject, not a hidden one. Agreement is qualified by
meaning, including نحن for two speakers and the demonstrative counterexample
هؤلاء ضيفي. Conditional فاء requires the conditional/result interpretation,
not merely any relative or descriptive clause. The source's أم يتيم تأتيـني
does not make the feminine verb describe يتيم; the intended pattern uses
يأتيني. All original wording remains in Notes.

The absolute-object lesson preserves every substitute and example while
distinguishing the two ـه referents in 5:115. The source's ban on dual/plural
kind-describing مصادر is qualified against the disagreement recorded in
[ابن عقيل](https://upload.wikimedia.org/wikisource/ar/6/6c/شرح_ابن_عقيل_على_الألفية.pdf).
The prohibition question now explicitly targets لا جزعا rather than calling
the command صبرا a prohibition. Original answer indices remain intact.

Module 26 distinguishes an implied meaning of في from a preposition actually
assigning نصب. Place-noun categories do not coincide with definiteness, and
the entered-place example has genuine competing analyses. Compare
[شرح سيبويه](https://lib.rafed.net/view.php?b_id=2782&page=274&type=c_fbook)
and [تيسير ابن عقيل](https://lib.rafed.net/view.php?b_id=2733&page=248&type=c_fbook).
آيتك is corrected in the displayed duration example. The purpose lesson
uses لتركبوها to demonstrate differing agents and qualifies inward-motive
terminology; the parsed الأرض is governed by an omitted explanatory verb
in الاشتغال, preserving the original stored answer identity.
The accompaniment lesson distinguishes coordination from simultaneity and
corrects the unsupported claim that the Hour hadith has no valid رفع reading.
It records the pronoun reinforcement issue and passive نائب الفاعل, following
[إرشاد الساري](https://hadithportal.com/index.php?all_sharh=full&book=33&h_id=5015&sharh=200000&show=hadith&uid=0).


Modules 26–28 received mobile and desktop screenshot review. The six-part
27/l3 exercise retains six distinct answer identities, all state descriptions,
and 44px select controls. Short screens use narrower gaps and less panel
padding; font sizes remain unchanged. All short-phone and short-desktop
phases passed after this adjustment.

Module 27 corrects the bearer of يبكون to the arriving sons, the attached
subject of جاءوا, rather than أباهم. Per-item display labels eliminate valid
alternative distractors that classified the same حال on a different axis.
The indefinite bearer in the أمرا example is أمر specified by حكيم; see
[روح المعاني](https://www.greattafsirs.com/Tafsir_Library.aspx?AyahNo=5&MadhabNo=7&SoraNo=44&TafsirNo=52).
قرآنا is the preparatory noun, عربيا its adjective. The resulting-form
example distinguishes وتنحتون الجبال بيوتا from the source's construction
with من; see [إعراب 7:74](https://irobquran.com/al-araaf/74) and
[إعراب 26:149](https://surahquran.org/e3rab-aya-149-sora-26.html).
The timing category محكية is explicitly disputed rather than inferred
from a past-tense verb alone, following
[النحو الوافي](https://www.masaha.org/book/view/2503/page/360).
The seven comparison rows are not all applicable to every حال.

Module 28 distinguishes measurement units from measuring instruments,
and material specifications from vague claims that any noun needs a تمييز.
The reconstructed subject in اشتعل الرأس شيبا uses اشتعل شيب الرأس; see
[شرح شذور الذهب](https://kutub.nur.nu/Arabic-Language/Shudhur-al-dhahab-sharh.pdf).
The جدلا comparison retains its between-creatures meaning, with the
corresponding اسم كان analysis in
[التبيان](https://irobquran.com/al-kahf/54).
Separated كم الخبرية does not universally require من: accusative patterns
are recorded too. The source's hidden-preposition account is qualified
against the إضافة account; compare
[الإنصاف](https://islamport.com/l/nhw/5391/244.htm) and
[النحو الوافي](https://www.masaha.org/book/view/2505/page/541).
The original broad count rule is restricted to the actual number ranges.

Module 29 distinguishes membership from actual obedience in the exception
examples. Indefinite-reference restrictions are taught as usefulness-based
source conventions, not blanket bans; compare
[جامع الدروس العربية](https://www.almerja.net/more.php?idm=4500).
The خلا/عدا/حاشا government accounts and the source's unanimity claim
are qualified against [همع الهوامع](https://almerja.com/more.php?idm=4499).
ليس and لا يكون have accusative predicates, not direct objects; compare
[لسان العرب](https://ar.wikisource.org/wiki/لسان_العرب/لام_-).
Prohibitive لا and the visible واو الجماعة are identified correctly.
The fronting rule records the alternative reported by
[ابن عقيل](https://alhawzaonline.com/almaktaba-almakroaa/book/410-logha-arabiya/0001-ebn-aqil/01/14.htm).
The Tamim منقطع pattern remains alongside the source's Hijazi main rule.
Competing analyses of لا إله إلا الله are kept distinct, following the
[critical edition of بيان الإعراب والاستثناء](https://asjp.cerist.dz/en/article/95199).
Teaching maxims and expanded grammatical illustrations are not presented
as authenticated hadith quotations. اللهم إلا retains its rare-qualification
function and invocatory origin.

Modules 29 and 30 received mobile and desktop screenshot review. The final
module's repeated لا patterns and six-part correction panel were also
inspected at 320px. The six-part layout keeps 44px controls and complete
feedback without changing any text role's size.

Module 30 distinguishes predicate fronting before نافية ما from fronting
before ordinary لا in لا يزال, following
[النحو الوافي](https://www.masaha.org/book/view/2502/page/515) and
[النحو العربي](https://books.rafed.net/view/1942/page/368).
The ما دام restriction concerns crossing the مصدرية clause boundary, rather
than banning all internal reordering. Fronting before ليس is marked disputed.
The individual conditions on ليس-like particles remain distinct.

The لا النافية للجنس lesson corrects the source's reversed government:
its اسم has نصب and its خبر has رفع. Definite nouns after inoperative لا
are subjects, not built اسم لا forms. The five repeated لا patterns now have
the corresponding vowel endings, including رفع رفث and فسوق with فتح جدال
in the cited reading; compare
[القرطبي on 2:197](https://quran-tafsir.net/qortoby/sura2-aya197.html).
The no-separator rule concerns each لا and its اسم. The omitted noun in
لا عليك is taught as a limited attested construction, following
[المفصل](https://www.islamicbook.ws/adab/la/almfsl-fi-snat-aliarab-001.html)
and [معجم القواعد العربية](https://almougem.com/search.php?mdatabase=lmougem&query=لا).

The genitive lesson distinguishes direct government from dependent case
agreement and retains the syntactic role of a noun after an augmenting
preposition. المكيال is an object with a coordinated noun, not the first
of two separately governed objects; the exercise's display is corrected.

The description lesson qualifies the source's governor claim and distinguishes
word-form descriptions from the wider category of clausal descriptions.
The source's بهتان كاذبين fragment is retained but is not used as evidence
for a مصدر functioning as نعت; the complete رجل عدل pattern supplies that
example. Compare the [University of Basrah lecture](https://un.uobasrah.edu.iq/lectures/16977.pdf)
and [شرح ابن عثيمين](https://islamport.com/l/nhw/5564/539.htm).
سببي normally remains singular while matching the related noun's gender;
see [جامع الدروس](https://www.fatihsyuhud.org/2025/02/jami-durus-3.html).
An اسم مفعول description has an understood deputy subject, not an active
subject. العقاب in شديد العقاب is genitive by إضافة in the presented account;
competing analyses are acknowledged, as in [اللباب](https://tafsir.app/lubab/40/4).
مكة المكرمة is labelled an ordinary honorific example, not a Quran quotation.
The recoverable عملا in واعملوا صالحا is explained with the resulting
substitute absolute-object role. Original source wording remains in Notes.

## Final verification

All 138 lessons have an authored presentation, including 1,585 teaching steps.
Source coverage includes all 738 concepts, 3,715 source blocks, 101 diagrams
and 205 tables. The 267 active parsing items and 828 lesson-check questions
retain original answer identities and grading. Notes preserve the original
content sequence, with the requested punctuation normalization.

The combined passing audit records cover 460,665 states: 92,133 at each of
320×568, 390×844, 430×932, 1024×600 and 1280×800. Each viewport includes
Naskh, Traditional and Uthmani fonts and saved preferences of 85%, 100%
and 130%. Lesson role sizes remain fixed within a viewport regardless of
those saved preferences. These are incremental batch checks plus targeted
rechecks after fixes, not a claim of one uninterrupted course-wide run.
The ignored `artifacts/nahw-foundations/course-audit-summary.json` identifies
the passing report selected for every viewport. Earlier failing reports are
retained alongside their successful rechecks for diagnosis.

Checks cover complete-card fit, element bounds, visible navigation, Arabic
chunk order, inline Arabic sizing, hints, first attempts, wrong answers,
correction mode, corrected answers and lesson-check states. Dense teaching
cards from every newly authored lesson received mobile and desktop visual
review. Across the 128 newly authored lessons, real app flows checked 934
corrections and reloads, plus original Notes, quiz grading and completion.
The opening lesson-check flow also tested failure and retry. All browser
storage was isolated from the learner's profile.

Final `verify-nahw`, `verify-mizan`, `verify-bidi`, content validation,
`build:web` and `git diff --check` passed. Content validation retains five
existing literature advisories. The integration suite also exercises all
498 app lessons and saved-progress migration. Canonical course content has
no Git diff. Nothing has been committed or published.

The local live-reload regression passed with eight simultaneous iframe
previews, CSS updates without lesson reload, JavaScript reload, server restart
recovery and preserved drafts. Local previews remain on port 4173. All audit
browsers use temporary profiles and leave the learner's live position intact.
The actual desktop lesson and mobile iframe also loaded without JavaScript
errors. Changing between all three phone widths and reloading the mobile
preview retained the selected card in the isolated check.

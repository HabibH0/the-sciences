# Advanced Sarf authored presentation

All 56 lessons authored locally, 10 September 2026. No commits or publishing.

The reference is the approved Advanced Nahw Lesson 1 and its completed course
rollout. Advanced Sarf has 56 lessons in 15 modules: 240 concepts, 1,206 source
blocks, 55 clarifications, 136 tables, 336 quiz questions and 1,186 bank items.

Each module receives source review, deliberate cards containing complete
learning ideas, concise checks, and a recap. Original wording stays in Notes;
stored question identities, grading and saved progress remain compatible.
No automatic pagination or text resizing is used for registered lessons.

Shared presentation changes are restricted to the course-aware header,
authored source references, exercise display and existing fixed typography.
Explicitly grouped source lists keep related points together. Sarf's matching
exercises retain the original cues, options and keys behind display labels.
Clarifications have their own source references and saved-position mapping.

For each batch: verify complete source coverage and grading, audit all teaching
and exercise phases at 320×568, 390×844, 430×932, 1024×600 and 1280×800,
with Naskh, Traditional and Uthmani fonts and saved preferences 85/100/130.
Inspect mobile/desktop screenshots and run actual correction, Notes, quiz and
refresh flows in isolated Chromium profiles. Recheck Nahw after shared changes.

## Module record

| Module | Lessons | Source | Layout | Visual and app flows |
| --- | ---: | --- | --- | --- |
| 01 | 4 | Passed | 11,745 states passed | Mobile/desktop reviewed; 4 lessons, 25 corrections/reloads, Notes and quizzes passed |
| 02 | 3 | Passed | 8,595 states passed | Mobile/desktop reviewed; 3 lessons, 19 corrections/reloads, Notes and quizzes passed |
| 03 | 4 | Passed | 11,340 states passed | Mobile/desktop reviewed; 4 lessons, 25 corrections/reloads, Notes and quizzes passed |
| 04 | 5 | Passed | 15,075 states passed | Mobile/desktop reviewed, including the complete 12-example family; 5 lessons, 32 corrections/reloads, Notes and quizzes passed |
| 05 | 4 | Passed | 13,500 states passed | Mobile/desktop reviewed; 4 lessons, 27 corrections/reloads, Notes and quizzes passed |
| 06 | 3 | Passed | 8,730 states passed | Mobile/desktop reviewed; 3 lessons, 18 corrections/reloads, Notes and quizzes passed |
| 07 | 4 | Passed | 11,745 states passed | Mobile/desktop reviewed; 4 lessons, 24 corrections/reloads, Notes and quizzes passed |
| 08 | 3 | Passed | 8,460 states passed | Mobile/desktop reviewed; 3 lessons, 18 corrections/reloads, Notes and quizzes passed |
| 09 | 3 | Passed | 9,000 states passed | Mobile/desktop reviewed; 3 lessons, 18 corrections/reloads, Notes and quizzes passed |
| 10 | 3 | Passed | 8,730 states passed | Mobile/desktop reviewed; 3 lessons, 18 corrections/reloads, Notes and quizzes passed |
| 11 | 5 | Passed | 16,245 states passed | Mobile/desktop reviewed; required example families checked on both; 5 lessons, 32 corrections/reloads, Notes and quizzes passed |
| 12 | 4 | Passed | 15,840 states passed | Mobile/desktop reviewed; 4 lessons, 30 corrections/reloads, Notes and quizzes passed |
| 13 | 4 | Passed | 11,700 states passed | Mobile/desktop reviewed; 4 lessons, 24 corrections/reloads, Notes and quizzes passed |
| 14 | 3 | Passed | 8,910 states passed | Mobile/desktop reviewed; 3 lessons, 18 corrections/reloads, Notes and quizzes passed |
| 15 | 4 | Passed | 11,925 states passed | Mobile/desktop reviewed; 4 lessons, 24 corrections/reloads, Notes and quizzes passed |

The audit scripts accept `subject=sarf&modules=01`. Reports and screenshots
are ignored local artifacts in `artifacts/sarf-course/`. Learner previews and
storage are not used by the audit browser.

## Completion checks

All 75 module/viewport reports are present and pass, covering 171,540 states.
The final shared-renderer regression checks every one of the 636 Sarf teaching
cards at 320×568 and 1280×800 with all three fonts and all three saved text
preferences: another 11,448 states. This includes required-example visibility,
fixed typography, navigation, source-box parts and English gloss direction.
The first ten Nahw lessons also pass their complete two-viewport regression,
12,888 states. All 56 Sarf lessons pass actual Notes, correction, refresh,
quiz grading and completion flows, including 352 correction/reload cycles.

Source preservation and all 56 authored plans pass `verify:sarf`. The full
app integration suite, `verify:nahw`, `verify:bidi`, content validation and
the local web build pass. Validation retains five pre-existing literature
advisories, with no Sarf or Nahw validation failures. No source course file
was edited; display corrections keep original question identities and keys.

`verify-mobile-preview.mjs` checks the actual Sarf wrapper at 320, 390 and
430px. It caught and fixed a two-pixel border deduction from the advertised
viewport. Width changes now preserve both the live iframe and saved card;
refresh restores the same card. The local live-reload server remains on 4173.

Review URLs:

- Desktop: http://localhost:4173/#/module/as-01/l1
- Mobile: http://localhost:4173/scripts/preview-mobile.html?lesson=as-01/l1

## Source and presentation notes

Module 01 was compared with the opening chapters of
[الحملاوي, شذا العرف في فن الصرف](https://www.scribd.com/doc/7168009/Shaadh-Sarf).
The source's حِمْل example corrects the course transcription جِمْل in teaching
and the displayed matching cue. Its stored identity is unchanged. The two
senses of بناء are distinguished, and attribution of the discipline's founder
and its stated religious ruling remain attributed to the source.

The noun-sign passage distinguishes an إضافة reading of منشئ الخلق from
the participle reading with a direct object. It preserves both explanations
with compatible endings and identifies tanwīn in connected speech. أل already
appears in the first witness; the Ibrāhīm witness adds نداء. Testing acceptance
is distinguished from looking for a marker already present. The source's
eight-category grouping combines س and سوف. Quran references are retained.

Weighing examples explicitly distinguish root positions from written-letter
positions, original quadriliterals from repeated triliterals, and additions
from original letters that happen to belong to سألتمونيها. The permitted
alternative attributed to الرضي remains. Underlying-form accounting is not
misrepresented as exclusive to تاء الافتعال.

Word/وزن pairs use an explicitly authored `patternTables` schema. The source
word is on the right, its scale on the left, with a full-width explanation
below. Both Arabic forms use the same fixed standalone display role across
cards; prose remains the shared Nahw body style. Crowded cards were tightened
by removing repeated wording, keeping the examples together.

Module 02 separates grammatical form from time reference. The past-tense gift
in al-Kawthar is presented as the source's rhetorical reading, alongside the
possibility of good already bestowed, consistent with
[Ibn Ashur on 108:1](https://tafsir.app/ibn-aashoor/108/1).
Default tense clues do not override explicit context. The denial in لم يلد
ولم يولد is not restricted to a temporary past state. Shared command markers
are taught with direct request meaning, distinguishing a command form from
a مضارع used with a requesting particle.

Module 03 follows the definitions and examples in the book's second division.
It identifies the source's use of لين, distinguishes hamza from weak letters,
and separates original roots from added alif. Weak-letter deletion and
substitution are not described as processes impossible for all other letters.
The nicknames ذو الثلاثة and ذو الأربعة count the illustrated forms with
subject ت, not all suffixes or the number of surviving roots. The noun يُمْن
is corrected in the display while its original matching identity is retained.

Module 04 is checked against the book's third division. Root counts are
separated from conjugational endings; two exclusion rules remove three vowel
pairs. The thirst examples are placed with emptiness rather than colours.
يائي العين refers to yāʾ, not wāw; the 24-verb total combines lists including
sound roots. إلحاق is not taught as a guarantee of unchanged lexical meaning
in a used shorter verb. هلّل is identified as فعّل within the wider list of
phrase verbs. Complete verb families use an explicitly authored two-column
example collection with the same fixed Arabic display role.

Module 05 qualifies generalisations about added meaning, distinguishes a
contest from expressing who prevailed, and separates the intransitivity of
انفعل from the broader meaning of مطاوعة. The latter can occur with an object
in other patterns, as illustrated in
[Ibn Hisham's discussion](https://athar.arthurarchive.com/book/mughni-al-labib/%D9%81%D9%8A-%D8%AE%D8%B1%D9%88%D8%AC-%D8%A5%D8%B0%D8%A7-%D8%B9%D9%86-%D8%A7%D9%84%D8%B4%D8%B1%D8%B7%D9%8A%D8%A9--pages-656-695).
The ordinary meaning of أفلس is distinguished from the source's فلوس-based
analysis, checked against the
[Cairo Arabic Language Academy dictionary](https://www.arabicacademy.gov.eg/ar/search_engine/roots/%D9%81%D9%84%D8%B3).
The combined learning/forbearance/understanding quotation remains attributed
to the course's wording; it is not newly certified as an exact prophetic
report. Recorded versions differ, including the
[Muawiya report](https://dorar.net/h/O8Jp8am5?osoul=1).

Module 06 distinguishes tense-form restrictions from person/number endings
and from other lexical senses. The supplementary table's يبغي is corrected:
ordinary بغى يبغي is conjugating, as the طلب sense in
[Ibn Faris's dictionary](https://www.islamweb.net/ar/library/content/124/323/) confirms.
Continuation auxiliaries are taught with their negative context. Command
formation starts from the addressed jussive, and همزة الوصل is distinguished
from the restored همزة القطع of أكرم. Sukūn is not described as silence.

Module 07 distinguishes direct objects from cognate accusatives and preserves
the proposition within two-object cognitive constructions. The three-object
reading of 2:167 is attributed to the source; the sensory reading can make
حسرات a حال. Regular preposition omission includes the clarity condition.
لام التقوية does not destroy the underlying object relation, consistent with
[the discussion of strengthening لام](https://usul.ai/ar/t/the-wonder-at-the-action-of-the-object-between-prohibitors-and-permitters).
مطاوعة is not treated as universally objectless. Poetic licence remains a
reported construction rather than a productive prose rule.

Module 08 restores the missing condition on Sībawayh's priority rule: a direct
object is available. This is explicit in
[al-Suyuti's discussion](https://lib.rafed.net/view.php?b_id=2016&page=166&type=c_fbook).
Passive past and imperfect rules distinguish underlying vowels from إدغام,
and reported dialectal readings from the general model. The vowel-transfer
exercise clears فاء's vowel before transferring عين's kasra. Nominal تصرف
is distinguished from verb conjugation, and اختصاص from grammatical
definiteness. مِن عند is acknowledged as a restricted adverbial use, following
[al-Nahw al-Wafi's explanation](https://www.masaha.org/book/view/2503/page/452).

Module 09 treats the six emphasis states as rules of construction, not a scale
of future certainty. Past-form future reference does not itself permit نون;
reported poetic anomalies remain explicit. Failure of the four obligatory
oath conditions does not invalidate the independently licensed request cases.
The source's negative reading of 8:25 is distinguished from other analyses.
The rare ربما example is qualified by the book's reported disagreement.
The present-time witness at 75:1 is corrected to the cited reading لَأُقْسِمُ,
without the alif of لا, as documented in
[al-Durr al-Masun](https://www.islamweb.net/ar/library/content/215/4177/).

Module 10 distinguishes bare noun patterns from lexical categories, counts
doubled roots explicitly, and separates the theoretical 12 vowel combinations
from the source's attested inventory. بِلِز has an attested lexical basis,
checked in [Lisan al-Arab](https://www.islamweb.net/ar/library/content/122/633/).
حُطَم describes a rough driver, not a rank of breaking. Reported حِبُك has
two analyses and is not presented as the ordinary reading of 51:7. Compact
repeated ل notation is expanded for four- and five-root nouns so learners do
not double an actual root incorrectly. Root counts exclude compensatory ة.

Module 11 distinguishes concrete entities from events and the restricted
derived-noun inventory from broader linguistic derivation. The Baṣran مصدر
account is attributed. Regular triliteral مصدر tendencies do not erase
recorded forms. جَمَحَ جِماحًا corrects جمع جماعا; مَشَى بطنه means that his
bowels became loose, not that his stomach inflated. This is recorded in
[Lisan al-Arab, مشي](https://wiki.dorar-aliraq.net/lisan-alarab/مشي).
Every one of the 29 exceptional verb/مصدر pairs is visible on mobile and
desktop through required example collections, not optional desktop visuals.
Final compensatory ة remains an added letter; تفعيل and تفعلة can both be
attested for one verb. Quadriliteral مضاعف repeats two root pairs. Explicit
source-box parts preserve complete grammatical arguments without repeating
the unsplit box on multiple cards.

Module 12 corrects واقٍ, بايِع and موقوي, distinguishes grammatical subjecthood
from deliberate action, and separates active meaning from intensity. مُورِس
is attested in [Lisan al-Arab, ورس](https://www.islamweb.net/ar/library/content/122/8992/),
so the book's exclusion is attributed. الصفة المشبهة presents a settled
quality without claiming it can never change. Comparative conditions apply
to direct regular formation; neither every excluded verb nor every noun can
use the same workaround. The reference is شرح الكافية, and ذات النحيين
refers to butter containers. يزيد بن الوليد بن عبد الملك corrects the cited
name. The comparative witness at 12:8 retains منا. In the place-noun list,
مبطخة means a melon-growing place. مُكْحُلَة names the kohl container. The
three selected modern instrument patterns are not an exhaustive modern list,
as the [Cairo Academy's instrument discussion](https://www.arabicacademy.gov.eg/ar/items/مساله_في_اوزان_اسم_الاله)
confirms. The longer source arguments remain complete and explicitly grouped.

Module 13 separates grammatical gender from biological sex, and formal
feminine marking from the gender of a male name such as طلحة. حِر does not
mean womb. Figurative feminine nouns need not be visibly unmarked. Number
polarity uses the singular noun's gender. Descriptions such as مرضع cannot
be taught with an absolute ban on ة: actual-event مرضعة is distinguished in
[al-Sirafi's commentary](https://books.rafed.net/view/2846/page/133).
عانس is also used of men, as [Lisan al-Arab](https://www.islamweb.net/ar/library/content/122/5757/)
records. The source's علامة passage means increased intensity, not a
functionless suffix. حُبْلَى and شَبْعَى correct transcription errors.
ذِكرى is not a third plural on فِعْلَى. The eight and ten pattern entries
are selections, not exhaustive counts. سِبَطْرَى has four consonants, not
a doubled actual ط or ر. The extended-alif variants retain their vowels,
examples and meanings; English glosses have an explicit LTR base direction
so a hidden Arabic accessibility label cannot reverse their punctuation.

Module 14 corrects المنادي to the caller, distinguishes a fixed lexical
ending from a changing case letter, and acknowledges the ن after a dual's
case alif. The underlying ي of قاضٍ remains relevant despite its omission
in spelling. A ممدود requires an added alif, not necessarily an added hamza.
The [book's noun-ending definitions](https://ablibrary.net/book_content/10698/103)
support these distinctions. Sound-final counterparts need not have wholly
sound roots. قِرَب belongs to the فِعَل comparison; قُرَب belongs to فُعَل.
Fatḥa precedes the weak final root; it is not placed on that root to produce
alif. Both مقصور and ممدود contain long ā. Their cited lexical pairs differ
by final hamza, not a short versus long vowel. سماعي lacks the particular
required formation counterpart, not all grammar or any possible resemblance.

Module 15 distinguishes singular number from the five nouns' case class,
regular dual formation from lexical two-words, and the indeclinable singular
bases of هذان and اللذان from disputed analyses of those forms themselves.
Names can refer to multiple bearers before the resulting dual/plural is made
definite. The source's six-plus-five condition count is explained rather
than applied mechanically to incompatible readings of proper naming.
طلحون is restricted in the book's account; Kufan permission is recorded in
[al-Nahw al-Wafi](https://www.masaha.org/book/view/2502/page/165).
The [Cairo Academy permits sound plurals of active فعول](https://www.arabicacademy.gov.eg/ar/items/جمع_فَعول_جمع_مذكر_سالمًا),
so the classical صبور restriction is not universal modern usage.
The ات inventory corrects قُلَة and جُبيل, counts the doubled consonant in
حمّام, and separates suffix formation from a word's eligibility. Feminine
reference is explicit for مصطفَيات and قرّاءات. A منقوص loses its root ي
before both ون and ين. A مقصور loses alif before masculine-plural endings;
the و is the suffix, not a transformed alif. The corrected quiz retains its
historical correct-answer index. Feminine hamza changing to و is not a return
to a root و. هِجان corrects كهجان; the ك was a comparison particle. The
estimated plural change does not alter pronunciation. غلمان removes one
alif and adds another in a different position, as well as ن. Broken plurals
have productive subrules despite the source's general سماعي label, discussed
in [al-Nahw al-Wafi's pattern account](https://almerja.com/reading.php?i=6&id=244&ida=475&idm=11164).
The 27-pattern inventory and both قلة/كثرة accounts remain attributed.

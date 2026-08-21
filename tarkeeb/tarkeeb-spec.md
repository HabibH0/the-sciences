# Tarkeeb table spec

How to build a traditional tarkeeb (تَرْكِيْب) table: a right-to-left grid that parses an
Arabic sentence word by word, labelling the role of every word and every phrase.

The authority for layout, labelling and colour is **First Steps to Understanding Arabic**
(FSTU, Hashim Mohamed, Al-Qalam Institute, 2024). Part 1 states the model. Part 2 gives the
JSON the builder reads and writes. Part 3 is a catalogue of worked FSTU tables, one per
construction. Part 4 covers the separate job of reading a Quranic Arabic Corpus dependency
graph and its syntax-and-morphology table into this format.

FSTU's own words on what the exercise is:

> In Arabic grammar, we analyse sentences by breaking them down word by word to understand
> the meaning and function of each word. This is called تَرْكِيْب (parsing). (p64)

> We have adopted the concept of tarkib, popular within the Indian subcontinent, in a colour
> coded, diagrammatic form. When understood as an equivalent of classical irab its flaws are
> clear … however, our intent is in line with parsing; grouping words together to understand
> their role in translation, and not irab. (p12)

That last point governs every judgement call below. The table groups words to expose
meaning. It is not classical إعراب and does not have to satisfy it.

---

# Part 1 — The FSTU model

## 1.1 Anatomy

A tarkeeb table is a stack of full-width rows. Reading top to bottom:

```
  sentence-name row     optional, only for named sentence types (نِدَاء, شَرْط, نَهْي …)
  main-slot row         the main parts of the sentence
  WORD BAND             the Arabic text, pink
  phrase rows           parts of phrases, green
  embedded-clause rows  slots of a جُمْلَة صُغْرَى, blue
  translation row       optional, unfilled
```

Every row is divided into cells. A cell covers one or more word columns and is drawn as a
filled block sitting over (or under) exactly those columns. Columns with nothing to say in a
given row are left as empty cells, not collapsed.

The single most important structural fact, and the one that separates this from a Corpus
dependency table: **labels above the words describe the main sentence; labels below the
words describe what is inside its parts.**

> In tarkib, the parts of a phrase are labelled under the word in green ink. (p137)

> The text is written in black ink and the label of the main parts of the sentence in blue
> above it. (p64)

## 1.2 Ink and fill

| element | ink / fill |
|---|---|
| the words themselves | black text on a pink band |
| main parts of the sentence | blue |
| parts of a phrase | green |
| slots of an embedded clause (جُمْلَة صُغْرَى) | blue |
| a حَرْف that does not become a main part | black text, **no fill** |
| the translation row | no fill |
| the عَائِد | underlined, in red |
| an emphasised part | underlined, in red (p117) |

Fill is meaning here, not decoration. An unfilled label is a positive statement: *this
particle occupies no slot*. Do not fill a cell to make a row look tidy.

## 1.3 What takes a slot and what does not

Particles that carry a label but **no fill**, because they take no slot:

| particle | label | page |
|---|---|---|
| مَا / لَا / لَمْ negating | حَرْفُ نَفْي | 68, 85 |
| لَ of emphasis on the مُبْتَدَأ | لَامُ الِابْتِدَاءِ | 75 |
| إِلَّا in exclusion | حَرْفُ الاسْتِثْنَاءِ | 108 |
| إِلَّا after a negative | حَرْفُ حَصْر | 119 |
| مِنْ as a redundant preposition | حَرْفُ صِلَة | 282, 283 |
| هُوَ / هُمْ separating مُبْتَدَأ from خَبَر | ضَمِيْرُ الْفَصْلِ | 342 |
| هَلْ / أ | حَرْفُ اسْتِفْهَام | 353 |
| فَ joining a result clause | فَاءُ السَّبَبِ | 591 |
| فَ before a خَبَر | زَائِدَة | 484 |
| لَ answering لَوْ | لَامُ الْجَوَابِ | 583 |
| فَ joining a مَفْعُوْل فِيْهِ | فَاء رَابِطَة | 451 |
| إِذَا / إِذْ of surprise | الْفُجَائِيَّةُ | 452, 454 |
| حَرْفُ عَطْف between two sentences | حَرْفُ عَطْف | 171 |

Elements that are **not labelled at all**, getting an empty cell:

- إِنْ introducing a real conditional: *"In tarkib, إِنْ is not labelled."* (p573) — though FSTU
  does label it حَرْفُ شَرْط in the لَوْ tables and in the second p573 table; follow the source
  table you are copying.
- The ﷺ after a name: no column, no cell.
- The default state of a verb. *"If it is مَعْلُوْم, it is not necessary to label it as
  مَعْلُوْم as this is the default state."* (p93) A مَجْهُوْل verb, by contrast, must be
  labelled فِعْل مَجْهُوْل and its subject نَائِبُ الْفَاعِلِ.
- A hidden مَنْعُوْت. *"It is not necessary to indicate the hidden مَنْعُوْت."* (p143) No empty
  column is drawn for it.

## 1.4 Rows above the words

**Main-slot row.** One cell per main part: مُبْتَدَأ / خَبَر for a nominal sentence,
فِعْل / فَاعِل / مَفْعُوْل … for a verbal one. A main part made of more than one word takes a
single cell spanning all of them — the whole phrase, including its own internal dependents.
فَاعِل over ذَلِكَ الرَّجُلُ is one cell of span 2 (p150); مَفْعُوْل بِهِ over
اَلَّذِيْ آمَنَ is one cell of span 2 (p484).

**Sentence-name row.** Named sentence types get an extra row above the main-slot row naming
the clauses. *"The name of each sentence is written at the very top."* (p564)

- نِدَاء / جَوَابُ النِّدَاءِ (p564)
- شَرْط / جَوَابُ الشَّرْطِ (p573, p583)
- نَهْي / جَوَابُ النَّهْيِ (p591); likewise أَمْر / جَوَابُ الْأَمْرِ (p589)

Its cells span whole clauses. The main-slot row beneath then breaks each clause into its own
فِعْل / فَاعِل / مُبْتَدَأ / خَبَر.

## 1.5 Rows below the words

Rows below the words are ordered by **containment, innermost first**. A row describing a
constituent sits below every row describing a constituent contained inside it. Width is a
good proxy but not the rule — what decides is which constituent encloses which.

- p421: رَحْمَتُهُ is one word containing an إضافة, so مُضَاف، مُضَاف إِلَيْهِ sits directly
  under it (green), and the slots of the جُمْلَة صُغْرَى (مُبْتَدَأ / خَبَر) sit below that (blue).
  *"In tarkib, the slots of the جُمْلَة صُغْرَى are written at the very bottom in blue ink. The
  phrases of the جُمْلَة صُغْرَى are written above its main slots."* (p421)
- p445, p484, p512: the green phrase label spans a whole embedded clause
  (مُضَاف إِلَيْهِ over the clause, صِلَة over the clause), so it sits **below** that clause's
  own blue slot row.

So "phrases in green above, clause slots in blue below" and "clause slots in blue above,
phrases in green below" are both correct FSTU tables. What decides the order is scope, not
colour.

**Nesting.** One phrase inside another gets one green row each, inner above outer:

```
p221   هَذَا الْوَلَدُ الصَّالِحُ صَادِقٌ
       green row 1   مَنْعُوْت | نَعْت              over الْوَلَدُ, الصَّالِحُ
       green row 2   اِسْمُ الْإِشَارَةِ | مُشَارٌ إِلَيْهِ   over هَذَا, then span 2
```

## 1.6 Column splitting

One column per meaningful unit, not per orthographic word.

- A prefixed particle that takes its own label splits off: لَ | زَيْدٌ (p75),
  لَ | نَجَحْتَ (p583), فَ | لَهُ (p484), وَ | الْإِسْلَامَ (p166).
- A prefixed particle that takes **no** label of its own is left attached:
  لَا تَكْسَلْ is one column (p591); وَإِمَّا is one column (p156).
- A verb with an attached pronoun subject stays one column and names the pronoun in
  brackets inside the label: فِعْل وَفَاعِل (تُ), فِعْل وَنَائِبُ الْفَاعِلِ (تُمْ) — p309, p445.
- An elided pronoun is likewise bracketed in the label rather than given a column:
  فِعْل وَفَاعِل (هُوَ), فِعْلُ أَمْر وَفَاعِل (أَنْتَ) — p484, p564, p573.

## 1.7 Named conventions to reproduce exactly

**Fronting.** When a شِبْهُ الْجُمْلَةِ or an adverb precedes the subject in a nominal sentence,
the labels change name: خَبَر مُقَدَّم and مُبْتَدَأ مُؤَخَّر (p248). Likewise فَاعِل مُؤَخَّر
after حَرْفُ حَصْر (p120) and مَفْعُوْل بِهِ مُقَدَّم when the object is fronted (p117).

**A جَار ومَجْرُور is split and doubly labelled.** Green جَارّ | مَجْرُور underneath, and above
it a single main-slot cell spanning both. Which slot depends on meaning:
مَفْعُوْل فِيْهِ غَيْرُ صَرِيْح for time or place (p260), مَفْعُوْل لَهُ غَيْرُ صَرِيْح for reason
(p265), مَفْعُوْل بِهِ غَيْرُ صَرِيْح for an indirect object (p512), خَبَر مُقَدَّم when it fronts
a nominal sentence (p248).

**Separated pairs.** When a مَعْطُوْف عَلَيْهِ and its مَعْطُوْف are not adjacent, the shared slot
is split into two cells and marked with an ellipsis: the earlier cell takes a trailing `…`,
the later cell a leading `…`. Each pair is then tagged with a letter.

> In tarkib, each مَعْطُوْف عَلَيْهِ should be labelled with a letter (أ، ب) and the
> corresponding مَعْطُوْف with the same letter. (p166)

**The عَائِد is underlined** in red inside the word band whenever a جُمْلَة صُغْرَى refers back
to a word outside it (p421).

**Two sentences joined by a حَرْفُ عَطْف are parsed independently.** *"In tarkib, each sentence
will be labelled independently."* (p171) The حَرْفُ عَطْف itself gets an unfilled cell.

**Numbers.** One and two become the نَعْت of the مَعْدُوْد (p197); from three upward the
counted noun is the مُمَيَّز (p203); ordinals become the نَعْت (p217).

**Exclusion.** The element excluded from must be named:
مُسْتَثْنًى مِنَ الْفَاعِلِ, مُسْتَثْنًى مِنَ الْمُبْتَدَإِ, and so on (p108).

---

# Part 2 — Spec format

The builder reads and writes this shape. `words` runs **right to left**: index 0 is the
rightmost word. Every row's spans must total `words.length`.

```json
{
  "words": ["..."],
  "above": [ [ {"span": 1, "a": "label", "b": "", "color": "blue"} ] ],
  "below": [ [ {"span": 1, "a": "label", "b": "", "color": "green"} ] ],
  "underline": [ {"word": 0, "text": "هُ"} ]
}
```

- `a` is the label; `b` an optional second label in the same cell.
- `color` is one of `blue`, `green`, `pink`, `none`. `none` means an unfilled cell — either a
  particle taking no slot, an empty column, or the translation row.
- An empty column is a real cell: `{"span":1,"a":"","b":"","color":"none"}`.
- `above` runs **coarsest first**: sentence-name row, then main-slot row.
- `below` runs **innermost first, widening downward** (see 1.5). A translation row, if
  present, is the last row of `below`. FSTU's own printed tables carry no translation row;
  it is an addition for readers.
- `underline` is optional and marks the عَائِد or an emphasised part. `word` is an index into
  `words`; `text` is the substring to underline.

---

# Part 3 — FSTU worked examples

Each example names the point it settles. Page numbers are FSTU 2024.

## 3.1 Nominal sentence — the base case (p64)

Two words, one row. Everything else in this spec is an elaboration of this.

```json
{
  "words": ["النَّبِيَّانِ","صَادِقَانِ"],
  "above": [
    [{"span":1,"a":"مُبْتَدَأ","b":"","color":"blue"},
     {"span":1,"a":"خَبَر","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"The two prophets","b":"","color":"none"},
     {"span":1,"a":"are truthful.","b":"","color":"none"}]
  ]
}
```

## 3.2 فِعْل نَاقِص, and an unfilled particle (p69)

Settles: a negating particle gets a label but no fill, while its word cell stays pink.

```json
{
  "words": ["لَا","يَكُوْنُ","زَيْدٌ","مَرِيْضًا"],
  "above": [
    [{"span":1,"a":"حَرْفُ نَفْي","b":"","color":"none"},
     {"span":1,"a":"فِعْل نَاقِص","b":"","color":"blue"},
     {"span":1,"a":"اِسْمُ كَانَ","b":"","color":"blue"},
     {"span":1,"a":"خَبَرُ كَانَ","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":2,"a":"Zaid will not be","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"ill.","b":"","color":"none"}]
  ]
}
```

## 3.3 لَامُ الِابْتِدَاءِ — a prefix that splits off (p75)

Settles: a prefixed particle taking its own label becomes its own column, even though it is
written joined.

```json
{
  "words": ["لَ","زَيْدٌ","صَادِقٌ"],
  "above": [
    [{"span":1,"a":"لَامُ الِابْتِدَاءِ","b":"","color":"none"},
     {"span":1,"a":"مُبْتَدَأ","b":"","color":"blue"},
     {"span":1,"a":"خَبَر","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":2,"a":"Zaid is certainly","b":"","color":"none"},
     {"span":1,"a":"truthful.","b":"","color":"none"}]
  ]
}
```

## 3.4 Verbal sentence with two objects (p90)

Settles: the ﷺ gets no column; a second object is مَفْعُوْل بِهِ ثَانٍ.

```json
{
  "words": ["جَعَلَ","اللهُ","مُحَمَّدًا","نَبِيًّا"],
  "above": [
    [{"span":1,"a":"فِعْل","b":"","color":"blue"},
     {"span":1,"a":"فَاعِل","b":"","color":"blue"},
     {"span":1,"a":"مَفْعُوْل بِهِ","b":"","color":"blue"},
     {"span":1,"a":"مَفْعُوْل بِهِ ثَانٍ","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"Allah made","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"Muhammad ﷺ","b":"","color":"none"},
     {"span":1,"a":"a prophet.","b":"","color":"none"}]
  ]
}
```

## 3.5 مَجْهُوْل (p93)

Settles: a passive verb must be labelled; an active one need not be. The فَاعِل column simply
disappears — no empty column is kept for it.

```json
{
  "words": ["سُمِعَ","الْقُرْآنُ"],
  "above": [
    [{"span":1,"a":"فِعْل مَجْهُوْل","b":"","color":"blue"},
     {"span":1,"a":"نَائِبُ الْفَاعِلِ","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"The Quran","b":"","color":"none"},
     {"span":1,"a":"was heard.","b":"","color":"none"}]
  ]
}
```

## 3.6 The adverbial slots (p96, p102, p104)

Same one-row shape, different third label. Kept together because the only variable is which
name the last cell takes.

```json
{
  "words": ["جَاءَ","الضُّيُوْفُ","الْبَارِحَةَ"],
  "above": [
    [{"span":1,"a":"فِعْل","b":"","color":"blue"},
     {"span":1,"a":"فَاعِل","b":"","color":"blue"},
     {"span":1,"a":"مَفْعُوْل فِيْهِ","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"The guests came","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"last night.","b":"","color":"none"}]
  ]
}
```

يَصُوْمُ الرَّجُلُ احْتِسَابًا takes مَفْعُوْل لَهُ in that slot (p102);
جَاءَ الرَّجُلُ رَاكِبًا takes حَال (p104). Nothing else changes.

## 3.7 Exclusion (p108)

Settles: إِلَّا is unfilled, and the excluded-from element is named in the label.

```json
{
  "words": ["جَاءَ","الطُّلَّابُ","إِلَّا","زَيْدًا"],
  "above": [
    [{"span":1,"a":"فِعْل","b":"","color":"blue"},
     {"span":1,"a":"فَاعِل","b":"","color":"blue"},
     {"span":1,"a":"حَرْفُ الاسْتِثْنَاءِ","b":"","color":"none"},
     {"span":1,"a":"مُسْتَثْنًى مِنَ الْفَاعِلِ","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":2,"a":"The students came","b":"","color":"none"},
     {"span":1,"a":"except","b":"","color":"none"},
     {"span":1,"a":"Zaid.","b":"","color":"none"}]
  ]
}
```

In a nominal sentence the label becomes مُسْتَثْنًى مِنَ الْمُبْتَدَإِ.

## 3.8 حَرْفُ حَصْر and فَاعِل مُؤَخَّر (p120)

Settles: two unfilled cells in one row, and a slot renamed because of word order.

```json
{
  "words": ["لَا","يَعْبُدُ","اللهَ","إِلَّا","مُؤْمِنٌ"],
  "above": [
    [{"span":1,"a":"حَرْفُ نَفْي","b":"","color":"none"},
     {"span":1,"a":"فِعْل","b":"","color":"blue"},
     {"span":1,"a":"مَفْعُوْل بِهِ","b":"","color":"blue"},
     {"span":1,"a":"حَرْفُ حَصْر","b":"","color":"none"},
     {"span":1,"a":"فَاعِل مُؤَخَّر","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"Only","b":"","color":"none"},
     {"span":1,"a":"worships","b":"","color":"none"},
     {"span":1,"a":"Allah","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"a believer.","b":"","color":"none"}]
  ]
}
```

## 3.9 A bare phrase — labels below only (p137)

Settles: a phrase standing alone has no main-slot row at all. The green labels sit under the
words.

```json
{
  "words": ["عَبْد","صَالِح"],
  "above": [],
  "below": [
    [{"span":1,"a":"مَنْعُوْت","b":"","color":"green"},
     {"span":1,"a":"نَعْت","b":"","color":"green"}],
    [{"span":1,"a":"a pious","b":"","color":"none"},
     {"span":1,"a":"servant","b":"","color":"none"}]
  ]
}
```

## 3.10 A phrase inside a sentence (p150)

Settles: the main-slot cell spans the whole phrase; the green row labels only the phrase's
own columns and leaves the rest empty.

```json
{
  "words": ["يُصَلِّي","ذَلِكَ","الرَّجُلُ","لَيْلًا"],
  "above": [
    [{"span":1,"a":"فِعْل","b":"","color":"blue"},
     {"span":2,"a":"فَاعِل","b":"","color":"blue"},
     {"span":1,"a":"مَفْعُوْل فِيْهِ","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"اِسْمُ الْإِشَارَةِ","b":"","color":"green"},
     {"span":1,"a":"مُشَارٌ إِلَيْهِ","b":"","color":"green"},
     {"span":1,"a":"","b":"","color":"none"}],
    [{"span":1,"a":"prays","b":"","color":"none"},
     {"span":2,"a":"That man","b":"","color":"none"},
     {"span":1,"a":"at night.","b":"","color":"none"}]
  ]
}
```

## 3.11 Conjunctive phrase filling one slot (p156)

Settles: a four-word خَبَر is one blue cell of span 4, broken up only by the green row.

```json
{
  "words": ["الْفِعْلُ","إِمَّا","مُثْبَتٌ","وَإِمَّا","مَنْفِيٌّ"],
  "above": [
    [{"span":1,"a":"مُبْتَدَأ","b":"","color":"blue"},
     {"span":4,"a":"خَبَر","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"حَرْفُ عَطْف","b":"","color":"green"},
     {"span":1,"a":"مَعْطُوْف عَلَيْهِ","b":"","color":"green"},
     {"span":1,"a":"حَرْفُ عَطْف","b":"","color":"green"},
     {"span":1,"a":"مَعْطُوْف","b":"","color":"green"}],
    [{"span":1,"a":"A verb is","b":"","color":"none"},
     {"span":1,"a":"either","b":"","color":"none"},
     {"span":1,"a":"affirmative","b":"","color":"none"},
     {"span":1,"a":"or","b":"","color":"none"},
     {"span":1,"a":"negative.","b":"","color":"none"}]
  ]
}
```

Note وَإِمَّا stays one column: the وَ carries no separate label here.

## 3.12 Separated مَعْطُوْف — ellipsis and letters (p166)

Settles the hardest layout in the book. The two objects and their two counterparts are not
adjacent, so each slot is split across two cells, marked `…` on the side the pair continues,
and tagged (أ) / (ب).

```json
{
  "words": ["جَعَلَ","الله","مُحَمَّدًا","نَبِيًّا","وَ","الْإِسْلَامَ","دِينًا"],
  "above": [
    [{"span":1,"a":"فِعْل","b":"","color":"blue"},
     {"span":1,"a":"فَاعِل","b":"","color":"blue"},
     {"span":1,"a":"… مَفْعُوْل بِهِ","b":"","color":"blue"},
     {"span":1,"a":"… مَفْعُوْل بِهِ ثَانٍ","b":"","color":"blue"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"مَفْعُوْل بِهِ …","b":"","color":"blue"},
     {"span":1,"a":"مَفْعُوْل بِهِ ثَانٍ …","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"مَعْطُوْف عَلَيْهِ (أ)","b":"","color":"green"},
     {"span":1,"a":"مَعْطُوْف عَلَيْهِ (ب)","b":"","color":"green"},
     {"span":1,"a":"حَرْفُ عَطْف","b":"","color":"green"},
     {"span":1,"a":"مَعْطُوْف (أ)","b":"","color":"green"},
     {"span":1,"a":"مَعْطُوْف (ب)","b":"","color":"green"}],
    [{"span":2,"a":"Allah made","b":"","color":"none"},
     {"span":1,"a":"Muhammad ﷺ","b":"","color":"none"},
     {"span":1,"a":"a prophet","b":"","color":"none"},
     {"span":1,"a":"and","b":"","color":"none"},
     {"span":1,"a":"Islam","b":"","color":"none"},
     {"span":1,"a":"a religion.","b":"","color":"none"}]
  ]
}
```

The ellipsis is written on the side facing the other half of the pair. Because the table runs
right to left, the right-hand cells carry the ellipsis at their left edge and vice versa;
render it as a plain `…` in the label string and let the RTL layout place it.

## 3.13 Appositive (p174)

```json
{
  "words": ["أَرْسَلَ","الله","النَّبِيَّ","مُحَمَّدًا"],
  "above": [
    [{"span":1,"a":"فِعْل","b":"","color":"blue"},
     {"span":1,"a":"فَاعِل","b":"","color":"blue"},
     {"span":2,"a":"مَفْعُوْل بِهِ","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"مُبْدَل مِنْهُ","b":"","color":"green"},
     {"span":1,"a":"بَدَل","b":"","color":"green"}],
    [{"span":2,"a":"Allah sent","b":"","color":"none"},
     {"span":1,"a":"the Prophet,","b":"","color":"none"},
     {"span":1,"a":"Muhammad ﷺ.","b":"","color":"none"}]
  ]
}
```

## 3.14 Possessive phrase, and مَفْعُوْل مُطْلَق (p179)

```json
{
  "words": ["يَدْعُوْ","الْعَبْدُ","الله","دُعَاءَ","الْمِسْكِيْنِ"],
  "above": [
    [{"span":1,"a":"فِعْل","b":"","color":"blue"},
     {"span":1,"a":"فَاعِل","b":"","color":"blue"},
     {"span":1,"a":"مَفْعُوْل بِهِ","b":"","color":"blue"},
     {"span":2,"a":"مَفْعُوْل مُطْلَق","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"مُضَاف","b":"","color":"green"},
     {"span":1,"a":"مُضَاف إِلَيْهِ","b":"","color":"green"}],
    [{"span":1,"a":"supplicates","b":"","color":"none"},
     {"span":1,"a":"The servant","b":"","color":"none"},
     {"span":1,"a":"to Allah","b":"","color":"none"},
     {"span":2,"a":"like a poor person.","b":"","color":"none"}]
  ]
}
```

## 3.15 Nested phrases — two green rows (p221)

Settles: inner phrase directly under the words, outer phrase below it, its cell spanning the
inner phrase's columns.

```json
{
  "words": ["هَذَا","الْوَلَدُ","الصَّالِحُ","صَادِقٌ"],
  "above": [
    [{"span":3,"a":"مُبْتَدَأ","b":"","color":"blue"},
     {"span":1,"a":"خَبَر","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"مَنْعُوْت","b":"","color":"green"},
     {"span":1,"a":"نَعْت","b":"","color":"green"},
     {"span":1,"a":"","b":"","color":"none"}],
    [{"span":1,"a":"اِسْمُ الْإِشَارَةِ","b":"","color":"green"},
     {"span":2,"a":"مُشَارٌ إِلَيْهِ","b":"","color":"green"},
     {"span":1,"a":"","b":"","color":"none"}],
    [{"span":3,"a":"This pious boy","b":"","color":"none"},
     {"span":1,"a":"is truthful.","b":"","color":"none"}]
  ]
}
```

## 3.16 Two phrases conjoined inside one slot (p221)

Settles: a مَعْطُوْف عَلَيْهِ / مَعْطُوْف pair whose members are themselves phrases. Each member's
internal phrase is labelled in the upper green row; the conjunction row sits below, spanning
each member whole.

```json
{
  "words": ["صَدِيْقُ","خَالِدٍ","و","هٰذَا","الرَّجُلُ","قَوِيَّانِ"],
  "above": [
    [{"span":5,"a":"مُبْتَدَأ","b":"","color":"blue"},
     {"span":1,"a":"خَبَر","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"مُضَاف","b":"","color":"green"},
     {"span":1,"a":"مُضَاف إِلَيْهِ","b":"","color":"green"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"اِسْمُ الْإِشَارَةِ","b":"","color":"green"},
     {"span":1,"a":"مُشَارٌ إِلَيْهِ","b":"","color":"green"},
     {"span":1,"a":"","b":"","color":"none"}],
    [{"span":2,"a":"مَعْطُوْف عَلَيْهِ","b":"","color":"green"},
     {"span":1,"a":"حَرْفُ عَطْف","b":"","color":"green"},
     {"span":2,"a":"مَعْطُوْف","b":"","color":"green"},
     {"span":1,"a":"","b":"","color":"none"}],
    [{"span":2,"a":"Khalid's friend","b":"","color":"none"},
     {"span":1,"a":"and","b":"","color":"none"},
     {"span":2,"a":"this man","b":"","color":"none"},
     {"span":1,"a":"are strong.","b":"","color":"none"}]
  ]
}
```

## 3.17 شِبْهُ الْجُمْلَةِ fronted (p248)

Settles: the جَار ومَجْرُور splits into two green cells, and one blue cell spans both. Fronting
renames both main slots.

```json
{
  "words": ["فِي","الْقُرْآنِ","آيَاتٌ"],
  "above": [
    [{"span":2,"a":"خَبَر مُقَدَّم","b":"","color":"blue"},
     {"span":1,"a":"مُبْتَدَأ مُؤَخَّر","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"جَارّ","b":"","color":"green"},
     {"span":1,"a":"مَجْرُوْر","b":"","color":"green"},
     {"span":1,"a":"","b":"","color":"none"}],
    [{"span":2,"a":"In the Quran","b":"","color":"none"},
     {"span":1,"a":"there are signs.","b":"","color":"none"}]
  ]
}
```

## 3.18 غَيْرُ صَرِيْح (p260)

Settles: the same جَار ومَجْرُور shape taking an adverbial slot instead.

```json
{
  "words": ["صَلَّى","الرَّجُلُ","فِي","اللَّيْلِ"],
  "above": [
    [{"span":1,"a":"فِعْل","b":"","color":"blue"},
     {"span":1,"a":"فَاعِل","b":"","color":"blue"},
     {"span":2,"a":"مَفْعُوْل فِيْهِ غَيْرُ صَرِيْح","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"جَارّ","b":"","color":"green"},
     {"span":1,"a":"مَجْرُوْر","b":"","color":"green"}],
    [{"span":1,"a":"prayed","b":"","color":"none"},
     {"span":1,"a":"The man","b":"","color":"none"},
     {"span":2,"a":"at night.","b":"","color":"none"}]
  ]
}
```

Replace the top label with مَفْعُوْل لَهُ غَيْرُ صَرِيْح for reason (p265) or
مَفْعُوْل بِهِ غَيْرُ صَرِيْح for an indirect object.

## 3.19 حَرْفُ صِلَة (p283)

Settles: a redundant preposition is unfilled and its noun still takes the main slot directly,
with no جَارّ / مَجْرُور row.

```json
{
  "words": ["مَا","جَاءَ","مِنْ","رَجُلٍ"],
  "above": [
    [{"span":1,"a":"حَرْفُ نَفْي","b":"","color":"none"},
     {"span":1,"a":"فِعْل","b":"","color":"blue"},
     {"span":1,"a":"حَرْفُ صِلَة","b":"","color":"none"},
     {"span":1,"a":"فَاعِل","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":2,"a":"There did not come","b":"","color":"none"},
     {"span":2,"a":"any man.","b":"","color":"none"}]
  ]
}
```

## 3.20 A whole sentence in one word (p309)

Settles: an attached pronoun is named in brackets inside the label, not given a column.

```json
{
  "words": ["هُدِيْتُمْ"],
  "above": [
    [{"span":1,"a":"فِعْل وَنَائِبُ الْفَاعِلِ (تُمْ)","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"You were guided.","b":"","color":"none"}]
  ]
}
```

## 3.21 ضَمِيْرُ الْفَصْلِ (p342)

Settles: an unfilled cell sitting *between* two main slots rather than at an edge.

```json
{
  "words": ["أُولٰئِكَ","هُمُ","الْفَاسِقُوْنَ"],
  "above": [
    [{"span":1,"a":"مُبْتَدَأ","b":"","color":"blue"},
     {"span":1,"a":"ضَمِيْرُ الْفَصْلِ","b":"","color":"none"},
     {"span":1,"a":"خَبَر","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"Those","b":"","color":"none"},
     {"span":1,"a":"are they,","b":"","color":"none"},
     {"span":1,"a":"the disobedient.","b":"","color":"none"}]
  ]
}
```

## 3.22 جُمْلَة صُغْرَى as خَبَر, with the عَائِد underlined (p421)

Settles the vertical order when the phrase is word-internal: green phrase row directly under
the word, blue clause-slot row beneath it.

```json
{
  "words": ["اللهُ","رَحْمَتُهُ","وَاسِعَةٌ"],
  "above": [
    [{"span":1,"a":"مُبْتَدَأ","b":"","color":"blue"},
     {"span":2,"a":"خَبَر","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"مُضَاف، مُضَاف إِلَيْهِ","b":"","color":"green"},
     {"span":1,"a":"","b":"","color":"none"}],
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"مُبْتَدَأ","b":"","color":"blue"},
     {"span":1,"a":"خَبَر","b":"","color":"blue"}],
    [{"span":1,"a":"Allah,","b":"","color":"none"},
     {"span":1,"a":"His mercy","b":"","color":"none"},
     {"span":1,"a":"is vast.","b":"","color":"none"}]
  ],
  "underline": [{"word":1,"text":"هُ"}]
}
```

Note the single green cell carrying two labels at once, مُضَاف، مُضَاف إِلَيْهِ, because both
sit inside one written word. Use `a` and `b` if the builder should stack them.

## 3.23 A clause as مُضَاف إِلَيْهِ (p445)

Settles the opposite vertical order: because the green label spans the whole embedded clause,
it sits *below* that clause's blue slot row.

```json
{
  "words": ["صَلَّيْتُ","لَمَّا","سَمِعْتُ","الْأَذَانَ"],
  "above": [
    [{"span":1,"a":"فِعْل وَفَاعِل (تُ)","b":"","color":"blue"},
     {"span":3,"a":"مَفْعُوْل فِيْهِ","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"فِعْل وَفَاعِل","b":"","color":"blue"},
     {"span":1,"a":"مَفْعُوْل بِهِ","b":"","color":"blue"}],
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"مُضَاف","b":"","color":"green"},
     {"span":2,"a":"مُضَاف إِلَيْهِ","b":"","color":"green"}],
    [{"span":1,"a":"I prayed","b":"","color":"none"},
     {"span":1,"a":"when","b":"","color":"none"},
     {"span":1,"a":"I heard","b":"","color":"none"},
     {"span":1,"a":"the athan.","b":"","color":"none"}]
  ]
}
```

## 3.24 اِسْم مَوْصُوْل with صِلَة, and a زَائِدَة فَ (p484)

Settles: two independent embedded clauses share one row below the words; the صِلَة label spans
the relative clause and sits at the bottom; فَ is split off and unfilled.

```json
{
  "words": ["اَلَّذِيْ","آمَنَ","فَ","لَهُ","أَجْرٌ"],
  "above": [
    [{"span":2,"a":"مُبْتَدَأ","b":"","color":"blue"},
     {"span":1,"a":"زَائِدَة","b":"","color":"none"},
     {"span":2,"a":"خَبَر","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"فِعْل وَفَاعِل (هُوَ)","b":"","color":"blue"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"خَبَر مُقَدَّم","b":"","color":"blue"},
     {"span":1,"a":"مُبْتَدَأ مُؤَخَّر","b":"","color":"blue"}],
    [{"span":1,"a":"اِسْم مَوْصُوْل","b":"","color":"green"},
     {"span":1,"a":"صِلَة","b":"","color":"green"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"}],
    [{"span":1,"a":"The one who","b":"","color":"none"},
     {"span":1,"a":"believes,","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"for him","b":"","color":"none"},
     {"span":1,"a":"is a reward.","b":"","color":"none"}]
  ]
}
```

## 3.25 اِسْم مُؤَوَّل with أَنْ (p512)

Settles: حَرْف مَوْصُوْل plus صِلَة spanning the rest, under a single مَفْعُوْل بِهِ of span 4.

```json
{
  "words": ["أَرْجُوْ","أَنْ","يَغْفِرَ","اللهُ","لِيْ"],
  "above": [
    [{"span":1,"a":"فِعْل وَفَاعِل (أَنَا)","b":"","color":"blue"},
     {"span":4,"a":"مَفْعُوْل بِهِ","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"فِعْل","b":"","color":"blue"},
     {"span":1,"a":"فَاعِل","b":"","color":"blue"},
     {"span":1,"a":"مَفْعُوْل بِهِ غَيْرُ صَرِيْح","b":"","color":"blue"}],
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"حَرْف مَوْصُوْل","b":"","color":"green"},
     {"span":3,"a":"صِلَة","b":"","color":"green"}],
    [{"span":1,"a":"I hope","b":"","color":"none"},
     {"span":1,"a":"that","b":"","color":"none"},
     {"span":1,"a":"forgives","b":"","color":"none"},
     {"span":1,"a":"Allah","b":"","color":"none"},
     {"span":1,"a":"me.","b":"","color":"none"}]
  ]
}
```

## 3.26 Verbal phrase — two label rows, none above (p536)

Settles: a مَصْدَر phrase is labelled twice, once as an إضافة (green) and once for the role its
مُضَاف إِلَيْهِ plays with respect to the مَصْدَر (blue). Both rows sit below the words.

```json
{
  "words": ["فَهْمُ","الطَّالِبِ"],
  "above": [],
  "below": [
    [{"span":1,"a":"مُضَاف","b":"","color":"green"},
     {"span":1,"a":"مُضَاف إِلَيْهِ","b":"","color":"green"}],
    [{"span":1,"a":"مَصْدَر","b":"","color":"blue"},
     {"span":1,"a":"فَاعِل","b":"","color":"blue"}],
    [{"span":1,"a":"the understanding","b":"","color":"none"},
     {"span":1,"a":"of the student","b":"","color":"none"}]
  ]
}
```

فَهْمُ الدَّرْسِ takes مَفْعُوْل بِهِ in the bottom-left cell; قِيَامُ اللَّيْلِ takes
مَفْعُوْل فِيْهِ. Nothing else changes.

## 3.27 Vocative — the sentence-name row (p564)

Settles: a two-row `above` stack, the top row naming the clauses.

```json
{
  "words": ["يَا","زَيْدُ","قُمْ"],
  "above": [
    [{"span":2,"a":"نِدَاء","b":"","color":"blue"},
     {"span":1,"a":"جَوَابُ النِّدَاءِ","b":"","color":"blue"}],
    [{"span":1,"a":"حَرْفُ النِّدَاءِ","b":"","color":"blue"},
     {"span":1,"a":"مُنَادَى","b":"","color":"blue"},
     {"span":1,"a":"فِعْلُ أَمْر وَفَاعِل (أَنْتَ)","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":2,"a":"O Zaid,","b":"","color":"none"},
     {"span":1,"a":"stand.","b":"","color":"none"}]
  ]
}
```

Note حَرْفُ النِّدَاءِ *is* filled — it is part of the نِدَاء, not a slotless particle.

## 3.28 Conditional with اِسْمُ الشَّرْطِ (p573)

Settles: the شرط word carries a main slot of its own (مُبْتَدَأ), and the condition verb's
clause slot goes in a blue row below the words.

```json
{
  "words": ["مَنْ","يَجْتَهِدْ","يَنْجَحْ"],
  "above": [
    [{"span":2,"a":"شَرْط","b":"","color":"blue"},
     {"span":1,"a":"جَوَابُ الشَّرْطِ","b":"","color":"blue"}],
    [{"span":1,"a":"مُبْتَدَأ","b":"","color":"blue"},
     {"span":1,"a":"خَبَر","b":"","color":"blue"},
     {"span":1,"a":"فِعْل وَفَاعِل (هُوَ)","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"فِعْل وَفَاعِل (هُوَ)","b":"","color":"blue"},
     {"span":1,"a":"","b":"","color":"none"}],
    [{"span":1,"a":"Whoever","b":"","color":"none"},
     {"span":1,"a":"works hard","b":"","color":"none"},
     {"span":1,"a":"will succeed.","b":"","color":"none"}]
  ]
}
```

## 3.29 Conditional with حَرْفُ الشَّرْطِ (p573)

Settles: with a particle rather than a noun, no clause row is needed; the particle is
unfilled and the two verbs take the two slots directly.

```json
{
  "words": ["إِنْ","تَجْتَهِدْ","تَنْجَحْ"],
  "above": [
    [{"span":2,"a":"شَرْط","b":"","color":"blue"},
     {"span":1,"a":"جَوَابُ الشَّرْطِ","b":"","color":"blue"}],
    [{"span":1,"a":"حَرْفُ شَرْط","b":"","color":"none"},
     {"span":1,"a":"فِعْل وَفَاعِل (أَنْتَ)","b":"","color":"blue"},
     {"span":1,"a":"فِعْل وَفَاعِل (أَنْتَ)","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"If","b":"","color":"none"},
     {"span":1,"a":"you work hard,","b":"","color":"none"},
     {"span":1,"a":"you will succeed.","b":"","color":"none"}]
  ]
}
```

## 3.30 Unreal conditional with لَامُ الْجَوَابِ (p583)

Settles: two unfilled particles in the same row, and a prefixed لَ splitting off from its verb.

```json
{
  "words": ["لَوْ","اجْتَهَدتَّ","لَ","نَجَحْتَ"],
  "above": [
    [{"span":2,"a":"شَرْط","b":"","color":"blue"},
     {"span":2,"a":"جَوَابُ شَرْط","b":"","color":"blue"}],
    [{"span":1,"a":"حَرْفُ شَرْط","b":"","color":"none"},
     {"span":1,"a":"فِعْل وَفَاعِل (تَ)","b":"","color":"blue"},
     {"span":1,"a":"لَامُ الْجَوَابِ","b":"","color":"none"},
     {"span":1,"a":"فِعْل وَفَاعِل (تَ)","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":2,"a":"If you had worked hard,","b":"","color":"none"},
     {"span":2,"a":"you would have been successful.","b":"","color":"none"}]
  ]
}
```

## 3.31 جَوَابُ النَّهْيِ with فَاءُ السَّبَبِ (p591)

Settles: a top row with a genuinely empty middle cell — the فَ belongs to neither named
clause — and a negative verb kept in one column because لَا takes no label of its own here.

```json
{
  "words": ["لَا تَكْسَلْ","فَ","تَنْدَمَ"],
  "above": [
    [{"span":1,"a":"نَهْي","b":"","color":"blue"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"جَوَابُ النَّهْيِ","b":"","color":"blue"}],
    [{"span":1,"a":"فِعْلُ نَهْي وَفَاعِل (أَنْتَ)","b":"","color":"blue"},
     {"span":1,"a":"فَاءُ السَّبَبِ","b":"","color":"none"},
     {"span":1,"a":"فِعْل وَفَاعِل (أَنْتَ)","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"Do not be lazy,","b":"","color":"none"},
     {"span":1,"a":"lest","b":"","color":"none"},
     {"span":1,"a":"you regret it.","b":"","color":"none"}]
  ]
}
```

---
# Part 4 — Building a table from a Quranic Corpus graph

The Quranic Arabic Corpus gives two artefacts per verse chunk: a **dependency graph** and a
**syntax and morphology table**. Neither is a tarkeeb table. This part is the conversion.

## 4.1 The inputs

**The graph.** Words left to right in reverse reading order, each with its POS tags (REM, EXL,
COND, RSLT, REL, CONJ, P, N, V, PRON). Arrows carry Arabic relation labels (شرط, جواب شرط,
تفصيل, صلة, متعلق, مجرور, مضاف إليه, خبر, فاعل, مفعول به, مفعول لأجله, معطوف, بدل).
Horizontal brackets mark phrase nodes (PP, NS, VS). Words outside the current chunk appear
greyed.

**The table.** One block per word giving the English translation, the transliteration, the tag
glosses in English, and the Arabic entry under "syntax and morphology" — e.g.
`اسم منصوب`, `اسم موصول`, `فعل ماض والتاء ضمير متصل في محل رفع فاعل`, `جار ومجرور`.

## 4.2 Columns

One column per displayed segment. A word splits into two or more columns when an arrow
attaches to part of it, or when the table gives it more than one Arabic entry.

Splits seen so far: `فَ | أَمَّا`, `فَ | يَتَّبِعُونَ`, `مِنْ | هُ`, `قُلُوبِ | هِمْ`,
`وَ | ٱبْتِغَآءَ`, `تَأْوِيلِ | هِ`.

Where the table gives a combined entry covering two segments, split it:
`جار ومجرور` becomes `جارّ` over مِنْ and `مجرور` over هُ.

**Elided elements get no column.** The graph shows them as `(*)` and `(هُوَ)`. FSTU does not
give them columns — an elided pronoun is named in brackets inside its verb's label
(`فعل وفاعل (هو)`, §1.6), and a hidden منعوت or خبر is simply not indicated (p143). Drop the
parenthesised nodes and fold them into the neighbouring label.

## 4.3 Above or below

This is the whole conversion. The Corpus graph is flat — every relation is an arrow of equal
status. FSTU is two-tier. Sort each Corpus arrow label into one of three destinations:

| Corpus arrow | goes | as |
|---|---|---|
| فاعل, مفعول به, مفعول لأجله, مفعول فيه, خبر, حال, تمييز | above, blue | the main-slot row |
| شرط, جواب شرط, تفصيل | above, blue | the sentence-name row (§1.4) |
| متعلق (a PP attaching to a verb) | above, blue | as the PP's slot name — مفعول فيه / لأجله / به **غير صريح** (§1.7) |
| مضاف إليه | below, green | paired with مضاف over the head |
| مجرور | below, green | paired with جارّ over the preposition |
| صلة | below, green | paired with اسم موصول / حرف موصول over the relative |
| معطوف | below, green | with حرف عطف and مَعْطُوْف عَلَيْهِ |
| بدل | below, green | paired with مبدل منه |
| نعت | below, green | paired with منعوت |
| the internals of an embedded clause | below, blue | the جملة صغرى slot row |

A main-slot cell spans the **whole constituent**, including that constituent's own dependents —
مفعول به covers مَا together with its entire صلة, four columns rather than one.

## 4.4 Arrow label beats morphology entry

Where a word is the target of an arrow, its cell carries the arrow label, not its own entry
from the Corpus table. ٱلْفِتْنَةِ shows مضاف إليه, not اسم مجرور. هِمْ shows مضاف إليه, not
«هم» ضمير متصل في محل جر بالاضافة.

A word's own morphology entry surfaces only where that word is the *source* of a relation.
تَأْوِيلِ therefore appears twice: inside the مضاف إليه span of the phrase above it, and as
مضاف in the row below where it heads its own إضافة.

No row is created for an arrow whose target sits inside a word whose entry already covers it.
The فاعل arrow from يَتَّبِعُونَ to its own و is dropped, because the label
`فعل وفاعل (و)` already states it.

## 4.5 Rows are ordered by containment, not by drawing order

Restating §1.5 in graph terms: a row describing a constituent sits **below** every row
describing a constituent contained inside it. Compute containment from the graph's spans, not
from the order the arrows happen to appear in.

## 4.6 Source fidelity

Only labels attested in the two Corpus artefacts, or in FSTU's own vocabulary for the same
construction, are used. Nothing is renamed, reworded, or supplied from outside them. Words
carried over from an earlier chunk keep the labels already established for them.

## 4.7 Worked conversion — 3:7:14 to 19

فَأَمَّا ٱلَّذِينَ فِى قُلُوبِهِمْ زَيْغٌ فَيَتَّبِعُونَ

The Corpus graph makes ٱلَّذِينَ an اسم شرط with فِى قُلُوبِهِمْ زَيْغٌ as its شرط. FSTU has a
ready template for exactly this shape at p484 — اَلَّذِيْ آمَنَ فَلَهُ أَجْرٌ عَظِيْمٌ — where
ٱلَّذِي is the مُبْتَدَأ, the following clause is its صِلَة, and the فَ before the answer is
زَائِدَة. Follow p484.

```json
{
  "words": ["فَ","أَمَّا","ٱلَّذِينَ","فِى","قُلُوبِ","هِمْ","زَيْغٌ","فَ","يَتَّبِعُونَ"],
  "above": [
    [{"span":1,"a":"الفاء استئنافية","b":"","color":"none"},
     {"span":1,"a":"حرف تفصيل","b":"","color":"none"},
     {"span":5,"a":"مُبْتَدَأ","b":"","color":"blue"},
     {"span":1,"a":"زَائِدَة","b":"","color":"none"},
     {"span":1,"a":"خَبَر","b":"","color":"blue"}]
  ],
  "below": [
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":3,"a":"خَبَر مُقَدَّم","b":"","color":"blue"},
     {"span":1,"a":"مُبْتَدَأ مُؤَخَّر","b":"","color":"blue"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"فِعْل وَفَاعِل (و)","b":"","color":"blue"}],
    [{"span":3,"a":"","b":"","color":"none"},
     {"span":1,"a":"جَارّ","b":"","color":"green"},
     {"span":2,"a":"مَجْرُوْر","b":"","color":"green"},
     {"span":3,"a":"","b":"","color":"none"}],
    [{"span":4,"a":"","b":"","color":"none"},
     {"span":1,"a":"مُضَاف","b":"","color":"green"},
     {"span":1,"a":"مُضَاف إِلَيْهِ","b":"","color":"green"},
     {"span":3,"a":"","b":"","color":"none"}],
    [{"span":2,"a":"","b":"","color":"none"},
     {"span":1,"a":"اِسْم مَوْصُوْل","b":"","color":"green"},
     {"span":4,"a":"صِلَة","b":"","color":"green"},
     {"span":2,"a":"","b":"","color":"none"}],
    [{"span":2,"a":"Then as for","b":"","color":"none"},
     {"span":1,"a":"those","b":"","color":"none"},
     {"span":1,"a":"in","b":"","color":"none"},
     {"span":2,"a":"their hearts","b":"","color":"none"},
     {"span":1,"a":"(is) perversity —","b":"","color":"none"},
     {"span":2,"a":"[so] they follow","b":"","color":"none"}]
  ],
  "underline": [{"word":5,"text":"هِمْ"}]
}
```

Read the four rows below the words as a containment ladder: the جملة صغرى slots first, then
the جار ومجرور inside the خبر مقدم, then the إضافة inside the مجرور, then the صلة that
encloses the lot. The عائد هِمْ is underlined because the صلة clause refers back to ٱلَّذِينَ.

---

# Part 5 — Legacy Corpus-layout examples

The three examples below predate the decision to make FSTU the authority. They put **every**
label above the words, in stacked rows, with fill used as a banding cue rather than as
meaning. They are kept because they record real Corpus data and the segmentation decisions
made for it, but their layout is superseded by Parts 1–4. Convert them with §4.3 before use:
move صلة, مضاف إليه, مجرور and معطوف rows below the words in green, keep فاعل, مفعول به,
مفعول لأجله and خبر above in blue, and drop the `(*)` and `(هُوَ)` columns.

## 5.1 3:7:14 to 18 — legacy

```json
{
  "words": ["فَ","أَمَّا","ٱلَّذِينَ","فِى","قُلُوبِ","هِمْ","(*)","زَيْغٌ"],
  "above": [
    [{"span":1,"a":"الفاء استئنافية","b":"","color":"none"},
     {"span":1,"a":"حرف تفصيل","b":"","color":"blue"},
     {"span":6,"a":"تفصيل","b":"","color":"blue"}],
    [{"span":2,"a":"","b":"","color":"none"},
     {"span":1,"a":"اسم شرط","b":"","color":"blue"},
     {"span":5,"a":"شرط","b":"","color":"blue"}],
    [{"span":3,"a":"","b":"","color":"none"},
     {"span":3,"a":"متعلق","b":"","color":"blue"},
     {"span":1,"a":"N","b":"","color":"blue"},
     {"span":1,"a":"خبر","b":"","color":"blue"}],
    [{"span":3,"a":"","b":"","color":"none"},
     {"span":1,"a":"حرف جر","b":"","color":"green"},
     {"span":2,"a":"مجرور","b":"","color":"green"},
     {"span":2,"a":"","b":"","color":"none"}],
    [{"span":4,"a":"","b":"","color":"none"},
     {"span":1,"a":"اسم مجرور","b":"","color":"green"},
     {"span":1,"a":"مضاف إليه","b":"","color":"green"},
     {"span":2,"a":"","b":"","color":"none"}]
  ],
  "below": [
    [{"span":2,"a":"Then as for","b":"","color":"none"},
     {"span":1,"a":"those","b":"","color":"none"},
     {"span":1,"a":"in","b":"","color":"none"},
     {"span":2,"a":"their hearts","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"(is) perversity -","b":"","color":"none"}]
  ]
}
```

## 5.2 3:7:19 to 22 — legacy

Points this example settles: مفعول به spans مَا plus its whole صلة; مِنْهُ splits so حرف جر
and مجرور each take a column; the فاعل arrow inside يَتَّبِعُونَ gets no row.

```json
{
  "words": ["فَ","أَمَّا","ٱلَّذِينَ","فَ","يَتَّبِعُونَ","مَا","تَشَٰبَهَ","(هُوَ)","مِنْ","هُ"],
  "above": [
    [{"span":1,"a":"الفاء استئنافية","b":"","color":"none"},
     {"span":1,"a":"حرف تفصيل","b":"","color":"blue"},
     {"span":8,"a":"تفصيل","b":"","color":"blue"}],
    [{"span":2,"a":"","b":"","color":"none"},
     {"span":1,"a":"اسم شرط","b":"","color":"blue"},
     {"span":7,"a":"جواب شرط","b":"","color":"blue"}],
    [{"span":3,"a":"","b":"","color":"none"},
     {"span":1,"a":"الفاء واقعة في جواب الشرط","b":"","color":"blue"},
     {"span":1,"a":"فعل مضارع والواو ضمير متصل في محل رفع فاعل","b":"","color":"blue"},
     {"span":5,"a":"مفعول به","b":"","color":"blue"}],
    [{"span":5,"a":"","b":"","color":"none"},
     {"span":1,"a":"اسم موصول","b":"","color":"blue"},
     {"span":4,"a":"صلة","b":"","color":"blue"}],
    [{"span":6,"a":"","b":"","color":"none"},
     {"span":1,"a":"فعل ماض","b":"","color":"blue"},
     {"span":1,"a":"فاعل","b":"","color":"blue"},
     {"span":2,"a":"متعلق","b":"","color":"blue"}],
    [{"span":8,"a":"","b":"","color":"none"},
     {"span":1,"a":"حرف جر","b":"","color":"green"},
     {"span":1,"a":"مجرور","b":"","color":"green"}]
  ],
  "below": [
    [{"span":2,"a":"Then as for","b":"","color":"none"},
     {"span":1,"a":"those","b":"","color":"none"},
     {"span":2,"a":"[so] they follow","b":"","color":"none"},
     {"span":1,"a":"what","b":"","color":"none"},
     {"span":1,"a":"(is) allegorical","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":2,"a":"of it,","b":"","color":"none"}]
  ]
}
```

## 5.3 3:7:23 to 26 — legacy

Points this example settles: وَ stays outside معطوف because الواو عاطفة sits in the same row;
ٱلْفِتْنَةِ takes مضاف إليه rather than its own اسم مجرور.

```json
{
  "words": ["فَ","يَتَّبِعُونَ","ٱبْتِغَآءَ","ٱلْفِتْنَةِ","وَ","ٱبْتِغَآءَ","تَأْوِيلِ","هِ"],
  "above": [
    [{"span":1,"a":"الفاء واقعة في جواب الشرط","b":"","color":"none"},
     {"span":1,"a":"فعل مضارع والواو ضمير متصل في محل رفع فاعل","b":"","color":"blue"},
     {"span":6,"a":"مفعول لأجله","b":"","color":"blue"}],
    [{"span":2,"a":"","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"الواو عاطفة","b":"","color":"none"},
     {"span":3,"a":"معطوف","b":"","color":"green"}],
    [{"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"اسم منصوب","b":"","color":"green"},
     {"span":1,"a":"مضاف إليه","b":"","color":"green"},
     {"span":1,"a":"","b":"","color":"none"},
     {"span":1,"a":"اسم منصوب","b":"","color":"green"},
     {"span":2,"a":"مضاف إليه","b":"","color":"green"}],
    [{"span":6,"a":"","b":"","color":"none"},
     {"span":1,"a":"اسم مجرور","b":"","color":"green"},
     {"span":1,"a":"مضاف إليه","b":"","color":"green"}]
  ],
  "below": [
    [{"span":2,"a":"[so] they follow","b":"","color":"none"},
     {"span":1,"a":"seeking","b":"","color":"none"},
     {"span":1,"a":"[the] discord","b":"","color":"none"},
     {"span":2,"a":"and seeking","b":"","color":"none"},
     {"span":2,"a":"its interpretation.","b":"","color":"none"}]
  ]
}
```

---

# Part 6 — Open questions

Settled since the first draft:

- **Do PP / NS / VS bracket names ever appear as labels?** No. They are constituent brackets,
  not labels. They are encoded as cell spans and otherwise discarded.
- **Where do phrase labels go?** Below the words, in green (FSTU p137). Superseding the old
  all-above layout.
- **What happens to elided elements?** No column. Bracketed inside the neighbouring label, or
  omitted entirely (FSTU p143, p484).

Still open:

- How far context words should be carried when a chunk sits deep in a long verse. FSTU never
  faces this because it parses complete sentences; the Corpus chunks arbitrarily.
- Whether an unbroken table for a whole verse is preferable to chunked tables that repeat
  context columns.
- FSTU has no convention for a جار ومجرور whose meaning is partitive rather than adverbial
  (مِنْهُ in 3:7:22). The legacy examples label it متعلق from the graph; FSTU would want a
  named slot. Unresolved.
- FSTU labels إِنْ as حَرْفُ شَرْط in some tables and leaves it unlabelled in others (p573).
  Pick one and apply it consistently within a document.

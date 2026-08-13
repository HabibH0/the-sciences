// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ»,
// chapter 33 -- رَفْعُ عِيسَى إِلَى السَّمَاءِ. Printed page 270 only -- the
// entire chapter is a single sentence sitting between ch32's closing line
// (and footnote) and ch34's heading الْقُرْآنُ يَتَحَدَّثُ عَنِ الْقِصَّةِ, which
// begins just a few lines further down the same page. Transcribed by hand
// from the scan (vision OCR, 150dpi render) against ../CHAPTER-FORMAT.md.
//
// The shortest chapter in this batch, and possibly in the whole volume: one
// compound sentence stating the book's actual thesis before the Qur'an's own
// words are quoted in full in ch34 -- Allah saved ʿĪsā from the Jews'
// plotting and raised him to Himself, honored and purified from the
// disbelievers. It functions as a one-line pivot between the narrative
// misdirection just recounted (ch31-32) and the Qur'anic proof-text that
// follows.
//
// FLAG for review -- buildable-sentence count: this chapter's printed text
// is only 19 words. Splitting it at every legitimate clause/phrase boundary
// (respecting idafa/appositive integrity -- سَيِّدُنَا عِيسَى ابْنُ مَرْيَمَ
// cannot be broken up, nor can كَيْدِ الْيَهُودِ) yields at most 4 sentences,
// and by concentrating the six case-marked, non-proper anchor words
// (سَيِّدُنَا، ابْنُ، كَيْدِ، الْيَهُودِ، مُكَرَّماً، مُطَهَّراً) one per sentence, all
// 4 of those are buildable (3-9 tokens, visible case mark) -- but the format
// spec's "at least five buildable sentences" floor cannot be reached from
// this chapter's own authentic text without fabricating wording or splitting
// mid-construct-phrase (e.g. severing ابْنُ from مَرْيَمَ), which would be
// grammatically false. Rather than distort the Arabic to hit the number,
// this chapter is left at 4 buildable sentences and flagged here for a
// second look -- e.g. whether the validator should treat it as a known,
// documented exception, or whether ch33 should be merged with ch34's reading
// flow at the assembly stage. Workshop is omitted for the same underlying
// reason: with only 19 words split across 4 clauses, there is no genuinely
// *recurring* grammatical frame within this chapter's own text to build
// cloze/shift items from (CHAPTER-FORMAT.md's workshop is optional and the
// task brief is explicit that drills must come from real repetition, not be
// invented).
//
// Grammar / lexical notes:
//   -- نَجَّى (qs-v12-c33-002, form II "to save, rescue") is kept distinct
//      from the already-taught نَجَا (form I "to escape, survive"), per the
//      distinct-lemma-per-derived-verb-form convention.
//   -- مُكَرَّم and مُطَهَّر (qs-v12-c33-003/004) are the passive participles of
//      أَكْرَمَ and طَهَّرَ; both are new, standalone lemmas (طَهَّرَ itself is not
//      independently attested yet in this corpus, so only the participle is
//      recorded).
//   -- تَعَالَى, first used here, is tagged pos:'verb' with features
//      'perf.3ms' (root ع ل و) rather than as an invariable adjective: it is
//      morphologically a frozen form-VI perfect verb ("He is exalted") used
//      as a fixed epithet after اللَّه, matching its true grammatical origin.
//   -- عِيسَى and مَرْيَم, this volume's two central proper names, are
//      genuinely new to this batch of chapters (see the task brief: they
//      were almost certainly introduced earlier in volume 12, in chapters
//      this agent did not transcribe, and will be deduplicated centrally).
//   -- Known-lemmas.txt discrepancy carried over from ch31/ch32: أَمَّا، قَدْ،
//      مِنْ، إِلَى، اللَّه، كَانَ, etc. are treated as already known despite the
//      supplied list's gaps -- see ch31's header comment for the full
//      rationale.
//   -- Shared lexicon check: أَمَّا، سَيِّد، اِبْن، قَدْ، رَفَعَ، الَّذِي، كَفَرَ are all
//      already taught and are NOT re-listed in newWords. يَهُود is reused
//      from ch32 (already new within this batch) and is not re-listed here.
//
// 7 new words (عِيسَى، مَرْيَم، نَجَّى، كَيْد، مُكَرَّم، مُطَهَّر، تَعَالَى).
//
// No page footnotes (book_note) attached to this chapter's own text.
export const CHAPTER = {
  id: 'ch33',
  title: { ar: 'رَفْعُ عِيسَى إِلَى السَّمَاءِ', en: 'The Raising of Isa to Heaven' },
  newWords: [
    'نَجَّى', 'مُكَرَّم', 'مُطَهَّر',
  ],
  lemmas: {
    عِيسَى: { gloss: 'Isa (Jesus)' },
    مَرْيَم: { gloss: 'Maryam (Mary)' },
    نَجَّى: { gloss: 'to save, rescue' },
    كَيْد: { gloss: 'plotting, scheming' },
    مُكَرَّم: { gloss: 'honored (passive participle)' },
    مُطَهَّر: { gloss: 'purified (passive participle)' },
    تَعَالَى: { gloss: 'Most High (epithet)' },
  },
  paragraphs: [
    {
      en: 'As for our master ʿĪsā, son of Maryam, Allah Most High saved him from the plotting of the Jews, and raised him to Himself, honored, purified from those who disbelieved.',
      sentences: [
        {
          id: 'qs-v12-c33-001',
          ar: 'أَمَّا سَيِّدُنَا عِيسَى ابْنُ مَرْيَمَ',
          en: 'As for our master ʿĪsā, son of Maryam,',
          tokens: [
            { surface: 'أَمَّا', lemma: 'أَمَّا', pos: 'part', features: 'part', gloss: 'as for' },
            { surface: 'سَيِّدُنَا', lemma: 'سَيِّد', pos: 'noun', features: 'nom+1p', gloss: 'our master' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'nom', gloss: 'Isa (Jesus)' },
            { surface: 'ابْنُ', lemma: 'اِبْن', pos: 'noun', features: 'nom.constr', gloss: 'son of' },
            { surface: 'مَرْيَمَ', lemma: 'مَرْيَم', pos: 'proper', features: 'gen', gloss: 'Maryam (Mary)' },
          ],
        },
        {
          id: 'qs-v12-c33-002',
          ar: 'فَقَدْ نَجَّاهُ اللَّهُ تَعَالَى مِنْ كَيْدِ الْيَهُودِ',
          en: 'Allah, Most High, saved him from the plotting of the Jews,',
          tokens: [
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'indeed' },
            { surface: 'نَجَّاهُ', lemma: 'نَجَّى', pos: 'verb', features: 'perf.3ms+3ms', root: 'ن ج و', gloss: 'to save; saved him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', root: 'ع ل و', gloss: 'to be exalted; Most High' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'كَيْدِ', lemma: 'كَيْد', pos: 'noun', features: 'constr.gen', root: 'ك ي د', gloss: 'the plotting of' },
            { surface: 'الْيَهُودِ', lemma: 'يَهُود', pos: 'noun', features: 'def.gen.pl', gloss: 'the Jews' },
          ],
        },
        {
          id: 'qs-v12-c33-003',
          ar: 'وَرَفَعَهُ إِلَيْهِ مُكَرَّماً',
          en: 'and raised him to Himself, honored,',
          tokens: [
            { surface: 'وَرَفَعَهُ', lemma: 'رَفَعَ', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to raise; and raised him' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to Himself' },
            { surface: 'مُكَرَّماً', lemma: 'مُكَرَّم', pos: 'adj', features: 'indef.acc', root: 'ك ر م', gloss: 'honored' },
          ],
        },
        {
          id: 'qs-v12-c33-004',
          ar: 'مُطَهَّراً مِنَ الَّذِينَ كَفَرُوا.',
          en: 'purified from those who disbelieved.',
          tokens: [
            { surface: 'مُطَهَّراً', lemma: 'مُطَهَّر', pos: 'adj', features: 'indef.acc', root: 'ط ه ر', gloss: 'purified' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'pl.rel', gloss: 'those who' },
            { surface: 'كَفَرُوا', lemma: 'كَفَرَ', pos: 'verb', features: 'perf.3mp', gloss: 'to disbelieve; disbelieved' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ اللَّهُ بِعِيسَى ابْنِ مَرْيَمَ؟',
          options: ['نَجَّاهُ مِنْ كَيْدِ الْيَهُودِ وَرَفَعَهُ إِلَيْهِ', 'تَرَكَهُ لِلْيَهُودِ', 'أَنزَلَ عَلَيْهِ عَذَاباً'],
          answer: 0,
          qEn: 'What did Allah do with ʿĪsā, son of Maryam?',
          optionsEn: ['He saved him from the plotting of the Jews and raised him to Himself', 'He left him to the Jews', 'He sent down a punishment upon him'],
        },
        {
          q: 'كَيْفَ كَانَ عِيسَى حِينَ رَفَعَهُ اللَّهُ إِلَيْهِ؟',
          options: ['مُكَرَّماً مُطَهَّراً مِنَ الَّذِينَ كَفَرُوا', 'ذَلِيلاً مَهْزُوماً', 'مَجْهُولاً لَا يَعْرِفُهُ أَحَدٌ'],
          answer: 0,
          qEn: 'In what state was ʿĪsā when Allah raised him to Himself?',
          optionsEn: ['Honored, purified from those who disbelieved', 'Humiliated and defeated', 'Unknown, recognized by no one'],
        },
      ],
    },
  ],
};

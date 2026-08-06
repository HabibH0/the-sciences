// HTML-escaping helpers shared by every module that builds markup as a string.
export function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function escAttr(str) {
  return esc(str).replace(/"/g, '&quot;');
}

// --- Bidi isolation -------------------------------------------------------
// Almost every string in this app is English prose with Arabic terms and
// Quranic phrases dropped into it. Left alone, the Unicode bidi algorithm
// pulls the neutral characters between two Arabic runs -- brackets, commas,
// the full stop at the end of a sentence -- into the RTL run, so "(1) x,
// (2) y." comes out with the numbers reversed and the period on the wrong
// end. Wrapping each Arabic run in an isolate pins the punctuation to the
// surrounding English instead.
//
// Runs deliberately span the spaces *between* Arabic words (isolating each
// word on its own would reverse a multi-word phrase) and include Arabic
// punctuation such as ، and ؛, which should travel with the Arabic, as well
// as a ":" sandwiched between two Arabic chars, e.g. "(أي: تَثْبُتُ)" --
// without that, "أي" and "تَثْبُتُ" become two separate isolates with the
// bare ":" stranded between them, and since both neighbours of that neutral
// are then RTL isolates, the bidi algorithm resolves the ":" itself as RTL
// too, reversing the two halves' order.
//
// A "(...)" that wraps only Arabic (plus the connectors above) is matched
// as one whole isolate *including* both parens, rather than treating "("
// and ")" as connectors themselves. Parens can legitimately separate two
// unrelated Arabic runs (e.g. "فِعْلٌ وَفَاعِلٌ (هِيَ)", where "(هِيَ)" is
// its own aside, not glued to the phrase before it), so a bare "(" has to
// seed a fresh, self-contained run rather than bridge into the previous
// one. A self-contained "(Arabic)" isolate mirrors and reverses as a unit,
// which cancels out and displays with the parens the right way round --
// unlike a lone "(" or ")" stranded between two separate isolates, which
// has nothing to anchor its direction and gets pulled into whichever RTL
// neighbour is adjacent (the reversed-bracket bug this is guarding
// against).

const AR = '\\u0600-\\u06FF\\u0750-\\u077F\\u08A0-\\u08FF\\uFB50-\\uFDFF\\uFE70-\\uFEFF';
const CONNECTOR = ' \\t\\u200f:';
const AR_WORD = `[${AR}](?:[${AR}${CONNECTOR}]*[${AR}])?`;
const AR_RUN = new RegExp(`\\(${AR_WORD}\\)|${AR_WORD}`, 'g');

export function isolateArabic(text) {
  return String(text ?? '').replace(AR_RUN, (run) => `<span class="ar" dir="auto">${run}</span>`);
}

// esc() plus isolation -- for plain strings that mix English and Arabic.
export function escBidi(str) {
  return isolateArabic(esc(str));
}

// Same, for a string that already contains markup. Text inside <bdi> is left
// alone: that element is an isolate already, and re-wrapping would strip the
// styling that marks a grammatical term.
export function isolateArabicHtml(html) {
  let depth = 0;
  return String(html ?? '')
    .split(/(<[^>]+>)/)
    .map((part) => {
      if (part.startsWith('<')) {
        if (/^<bdi[\s>]/i.test(part)) depth += 1;
        else if (/^<\/bdi\s*>/i.test(part)) depth = Math.max(0, depth - 1);
        return part;
      }
      return depth > 0 ? part : isolateArabic(part);
    })
    .join('');
}

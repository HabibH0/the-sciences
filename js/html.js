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
// English prose owns its punctuation. In "with النحو: إعراب and بناء", the
// colon separates two terms; putting both inside one RTL isolate swaps them
// visually. Spaces within an Arabic phrase still belong to that phrase.
// Tight compounds (مذ/منذ, مُضَافٌ–مُضَافٌ إِلَيْهِ) remain single units.
//
// A wholly Arabic field, a quoted Arabic passage, or an explicit RTL element
// owns its internal punctuation instead. Authors can use <bdi dir="rtl"> for
// an Arabic passage embedded in English, including passages with inline markup.
// Do not try to infer that scope from punctuation alone.
const AR_CHAR = '(?=\\p{Script_Extensions=Arabic})[\\p{L}\\p{M}\\p{N}]';
const AR_WORD = `${AR_CHAR}(?:${AR_CHAR}|[\\u200c\\u200d\\u200f])*`;
const AR_PHRASE = `${AR_WORD}(?:(?:\\s+|[-\\u2013/+])${AR_WORD})*`;
const AR_RUN = new RegExp(AR_PHRASE, 'gu');
const QUOTED = /\([^()]*\)|\[[^\[\]]*\]|«[^«»]*»|“[^“”]*”|‘[^‘’]*’|"[^"]*"|﴿[^﴿﴾]*﴾/gu;
const HTML_PARTS = /(<!--[\s\S]*?-->|<\/?[a-zA-Z](?:"[^"]*"|'[^']*'|[^'">])*>)/g;
const VOID_TAG = /^(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;

function isArabicScope(tag, name) {
  if (name === 'bdi') return true;
  // Consume whole attributes so a title containing `dir="rtl"` is not mistaken
  // for the element's actual direction, and data-dir does not count as dir.
  for (const match of tag.matchAll(/\s+([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g)) {
    const key = match[1].toLowerCase();
    const value = match[2] ?? match[3] ?? match[4] ?? '';
    if (key === 'dir' && value.toLowerCase() === 'rtl') return true;
    if (key === 'class' && value.split(/\s+/).includes('ar')) return true;
  }
  return false;
}

// Keep the literal Unicode isolates as well as CSS isolation. They preserve
// multi-word runs, including repeated terms, when a line wraps in Chromium.
const RLI = '\u2067';
const PDI = '\u2069';

function arabicOnly(text) {
  // Entity names are markup, not English words. Escaping still happens at the
  // boundary; this is only a language check, never an HTML/entity decoder.
  const letters = String(text).replace(/&(?:#x[\da-f]+|#\d+|[a-z]+);/gi, '').match(/\p{L}/gu) || [];
  return letters.length > 0 && letters.every(letter => /\p{Script_Extensions=Arabic}/u.test(letter));
}

function arabicSpan(text) {
  return `<span class="ar" lang="ar" dir="rtl">${RLI}${text}${PDI}</span>`;
}

function isolateRuns(text) {
  return text.replace(AR_RUN, arabicSpan);
}

// Input is escaped text, not markup. A caller rendering one text node from a
// larger English paragraph must pass 'ltr', even if that node is Arabic-only.
export function isolateArabic(text, direction = arabicOnly(text) ? 'rtl' : 'ltr') {
  const value = String(text ?? '');
  if (direction === 'rtl' && arabicOnly(value)) {
    return value.replace(/^(\s*)([\s\S]*?)(\s*)$/, (_match, before, body, after) => `${before}${arabicSpan(body)}${after}`);
  }
  let end = 0;
  let html = '';
  for (const match of value.matchAll(QUOTED)) {
    html += isolateRuns(value.slice(end, match.index));
    html += arabicOnly(match[0]) ? arabicSpan(match[0]) : isolateRuns(match[0]);
    end = match.index + match[0].length;
  }
  return html + isolateRuns(value.slice(end));
}

export function escBidi(str) {
  return isolateArabic(esc(str));
}

// Trusted inline HTML only (this is not a sanitizer). Resolve language from the
// whole fragment, not each text node: <strong>النحو</strong>: إعراب still belongs
// to the surrounding English sentence. Respect authored and generated isolates,
// including their descendants, and never inspect attributes as prose.
export function isolateArabicHtml(html) {
  const value = String(html ?? '');
  const parts = value.split(HTML_PARTS);
  const isTag = part => part.startsWith('<');
  const rtl = arabicOnly(parts.filter(part => !isTag(part)).join(''));
  if (!parts.some(isTag)) return isolateArabic(value);

  const stack = [];
  let scopedRoot = false;
  let rootClosed = false;
  const result = parts.map(part => {
    if (!part) return part;
    if (!isTag(part)) {
      if (!stack.length && part.trim()) {
        scopedRoot = false;
        rootClosed = true;
      }
      return stack.some(entry => entry.isolate) ? part : isolateArabic(part, 'ltr');
    }
    const tag = part.match(/^<\s*(\/?)\s*([a-z\d]+)/i);
    if (!tag) return part;
    const name = tag[2].toLowerCase();
    if (tag[1]) {
      const index = stack.findLastIndex(entry => entry.name === name);
      if (index >= 0) stack.length = index;
      if (!stack.length) rootClosed = true;
    } else if (!VOID_TAG.test(name) && !/\/\s*>$/.test(part)) {
      const isolate = isArabicScope(part, name);
      if (!stack.length) scopedRoot = !rootClosed && isolate;
      stack.push({ name, isolate });
    }
    return part;
  }).join('');

  // Preserve RTL order across formatting tags in an entirely Arabic fragment.
  // No .ar class on this outer scope: the inner runs already have Arabic sizing.
  return rtl && !scopedRoot ? `<span lang="ar" dir="rtl">${RLI}${result}${PDI}</span>` : result;
}

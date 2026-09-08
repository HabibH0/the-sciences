import assert from 'node:assert/strict';
import { esc, escAttr, escBidi, isolateArabicHtml } from '../js/html.js';
import { bidiCases } from './bidi-cases.mjs';
import { COURSES, ensureCoursesLoaded } from '../content/index.js';

const plain = html => html.replace(/<[^>]*>/g, '').replace(/[\u2067\u2069]/g, '')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const isolates = html => [...html.matchAll(/<span class="ar"[^>]*>\u2067([\s\S]*?)\u2069<\/span>/g)].map(match => match[1]);

const reported = bidiCases[0].text;
assert.deepEqual(isolates(escBidi(reported)), ['النحو', 'إعراب', 'بناء', 'النحو']);
assert.deepEqual(isolates(escBidi('In مضاف\u00a0إليه: كتاب belongs here.')), ['مضاف\u00a0إليه', 'كتاب']);
for (const separator of [':', ',', '.', ';', ' — ', ' – ', ' / ', ' + ', '،', '؛', '?', '!']) {
  assert.deepEqual(isolates(escBidi(`Compare النحو${separator} إعراب here.`)), ['النحو', 'إعراب'], separator);
}
for (const phrase of ['الكلمة: قول مفرد', 'جاء زيد. خرج عمرو.', '(أي: تثبت)', 'مُضَافٌ–مُضَافٌ إِلَيْهِ', 'مذ/منذ']) {
  assert.deepEqual(isolates(escBidi(phrase)), [phrase], phrase);
}
for (const test of bidiCases) {
  const output = test.html ? isolateArabicHtml(test.html) : escBidi(test.text);
  assert.equal(plain(output), plain(test.html || esc(test.text)), `${test.name}: text preserved`);
  assert.equal(isolateArabicHtml(output), output, `${test.name}: safe to process an existing isolate`);
}

// Shared helpers stay safe at the innerHTML boundary, with no double escaping.
assert.equal(esc('<>&'), '&lt;&gt;&amp;');
assert.equal(escAttr('"<>&'), '&quot;&lt;&gt;&amp;');
const unsafe = 'النحو: <img src=x onerror="alert(1)"> & إعراب';
assert(!escBidi(unsafe).includes('<img'));
assert.equal(plain(escBidi(unsafe)), unsafe);
assert.equal(escBidi(null), '');
assert.equal(escBidi(42), '42');
assert.equal(escBidi('Plain English: punctuation stays here.'), 'Plain English: punctuation stays here.');
for (const html of [
  '<bdi dir="rtl">أي: <strong>تثبت</strong></bdi>',
  '<span dir="rtl">أي: <em>تثبت</em></span>',
  '<span class="ar" dir="auto">أي: تثبت</span>',
]) assert.equal(isolateArabicHtml(html), html, 'Respect the authored RTL scope');
const attributed = '<strong title="النحو > الصرف" data-dir="rtl" class="ar-label">النحو</strong>: إعراب belongs here.';
const attributedOutput = isolateArabicHtml(attributed);
assert(attributedOutput.includes('<strong title="النحو > الصرف" data-dir="rtl" class="ar-label">'));
assert.deepEqual(isolates(attributedOutput), ['النحو', 'إعراب']);
assert.deepEqual(isolates(isolateArabicHtml('<span title="Use dir=rtl for Arabic" data-dir="rtl">النحو: إعراب</span> belong here.')), ['النحو', 'إعراب']);
assert.deepEqual(isolates(isolateArabicHtml('<strong>النحو</strong>: إعراب and بناء belong here.')), ['النحو', 'إعراب', 'بناء']);
console.log(`Passed ${bidiCases.length} bidi fixtures, punctuation boundaries, markup scopes, and escaping checks.`);

// Exercise the real course strings too: changing direction must never lose or
// duplicate words, punctuation, diacritics, or saved-answer text.
await ensureCoursesLoaded(COURSES.map(course => course.id));
let strings = 0;
function verifyStrings(value) {
  if (typeof value === 'string' && /\p{Script=Arabic}/u.test(value)) {
    assert.equal(plain(escBidi(value)), value, 'Course text survives escaping and isolation unchanged');
    strings++;
  } else if (Array.isArray(value)) value.forEach(verifyStrings);
  else if (value && typeof value === 'object') Object.values(value).forEach(verifyStrings);
}
for (const course of COURSES) verifyStrings(course.modules);
console.log(`Preserved ${strings.toLocaleString()} Arabic-bearing course strings.`);

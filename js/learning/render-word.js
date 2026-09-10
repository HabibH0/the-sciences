import { esc, escAttr, escBidi, isolateArabicHtml } from '../html.js';
import { WORD_IDEAS } from './nahw.js';
import { foundationPlan } from './nahw-foundations.js';

export function wordHeaderHtml(mod, lesson, position, total, quiz = false) {
  if (lesson.learningModel === 'mizan') return `<header class="mz-study-head mz-word-head"><button class="mz-study-exit" data-action="openModule" data-module-id="${escAttr(mod.id)}" aria-label="Save and return to ${escAttr(mod.title)}">←</button><div class="mz-study-title"><span>Logic · ${esc(mod.title)}</span><h1>${escBidi(lesson.title)}</h1></div><span class="mz-word-step-count" aria-label="Card ${position} of ${total}">${position} / ${total}</span><button class="mz-text-button" data-action="openStudyNotes">Notes</button><div class="mz-meter" role="progressbar" aria-label="Lesson progress" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${position}"><span style="width:${position / total * 100}%"></span></div></header>`;
  const plan = foundationPlan(lesson);
  const courseName = lesson.learningModel === 'mizan-sarf' ? 'Advanced Sarf' : 'Advanced Nahw';
  return `<header class="mz-study-head mz-word-head"><button class="mz-study-exit" data-action="${quiz ? 'backToLesson' : 'openModule'}" ${quiz ? '' : `data-module-id="${escAttr(mod.id)}"`} aria-label="${quiz ? 'Back to the lesson' : `Save and return to ${courseName}`}">←</button><div class="mz-study-title"><span>${courseName} · ${quiz ? 'Lesson check' : `Lesson ${plan?.number || 1}`}</span><h1>${plan ? `<span class="mz-foundation-title-en">${esc(plan.title)} · </span>${escBidi(lesson.title)}` : `The Word <span aria-hidden="true">·</span> ${escBidi(lesson.title)}`}</h1></div><span class="mz-word-step-count" aria-label="${quiz ? 'Question' : 'Card'} ${position} of ${total}">${position}<span aria-hidden="true"> / </span>${total}</span>${quiz ? '' : '<button class="mz-text-button" data-action="openStudyNotes">Notes</button>'}<div class="mz-meter" role="progressbar" aria-label="${quiz ? 'Lesson check' : 'Lesson'} progress" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${position}"><span style="width:${position / total * 100}%"></span></div></header>`;
}

// The screen footer owns exercise actions, leaving the card for the question,
// choices and feedback. The same data actions retain the existing grading flow.
export function wordFooterHtml({ backAction = 'studyBack', backDisabled = false, nextAction = 'studyNext', nextLabel = 'Continue', record = null, complete = false, correct = false, checkAction = 'studyCheck', correctionAction = 'studyCorrect', hint = false, message = 'Your progress is saved as you learn.' }) {
  const answering = record && (!record.submitted || record.correcting);
  const correction = record?.submitted && !correct && !record.correcting && !record.corrected;
  const secondary = correction ? `<button class="btn btn-ghost" data-action="${correctionAction}">Try correction</button>` : answering && hint && !record.hintShown && !record.submitted ? '<button class="mz-text-button" data-action="studyHint">Hint</button>' : `<span>${esc(message)}</span>`;
  return `<footer class="mz-study-foot"><button class="btn btn-ghost mz-word-foot-back" data-action="${backAction}" ${backDisabled ? 'disabled' : ''} aria-label="Back">←<span> Back</span></button>${secondary}<button class="btn btn-primary" data-action="${answering ? checkAction : nextAction}" ${answering && !complete ? 'disabled' : ''}>${answering ? record.correcting ? 'Check correction' : 'Check answer' : `${esc(nextLabel)} →`}</button></footer>`;
}

// Concise teaching copy, mapped to the original blocks. Arabic definitions
// and core quotations remain verbatim; the full source is also in Notes.
export const WORD_COPY = [
  {
    0: 'Define a word before classifying it as اسم, فعل or حرف. Begin with لفظ.',
    2: 'لفظ is any sound from a person’s mouth, including a cough or a small child’s babbling. The term conveys “throwing something out”.',
    3: 'لفظ موضوع is coined for a meaning; لفظ مهمل has no recognised meaning. Grammar studies only موضوع. مهمل is named so you recognise it in other books.',
  },
  {
    0: 'Meaningful speech is لفظ, but not every لفظ is meaningful.',
    2: 'قول is لفظ tied to a meaning: the same لفظ موضوع, described by its function rather than its coining.',
    3: 'رَجُلٌ (“a man”) is قول because it has a known meaning. Random noise without that connection is not.',
  },
  {
    0: 'With لفظ and قول defined, we can define الكلمة.',
    3: 'كلمة is a single meaningful utterance. قول excludes meaningless sounds; مفرد excludes constructions of separate meaningful parts.',
    4: 'Only after defining a word can later chapters classify it as اسم, فعل or حرف.',
  },
  {
    0: 'مفرد is the second half of الكلمة’s definition.',
    2: 'رَجُلٌ means “a man” as a whole. Its letters ر، ج، ل carry no separate parts of that meaning.',
    3: 'Most words contain several letters. Test whether the parts independently carry meaning, not how many letters there are.',
  },
  {
    2: 'كِتَابُ الوَلَدِ (“the boy’s book”) is مركب: كتاب and الولد each carry meaning.',
    3: 'مركب ناقص is a phrase, such as مضاف with مضاف إليه, or منعوت with نعت. مركب تام forms a complete جملة.',
    4: 'كتاب is مضاف; الولد is مضاف إليه. Together they form a phrase, مركب ناقص.',
  },
  {
    0: 'The sense of مفرد depends on the discussion.',
    1: 'In الكلمة’s definition, مفرد means “not مركب”. For number, it means “singular”, opposed to مثنى and جمع.',
    3: 'رِجَالٌ (“men”) is one word: مفرد by construction, but جمع by number. Always identify the discussion.',
    4: 'Compounds whose parts once had separate meanings can be treated differently: (1) تركيب المزج: بَعْلَبَكَّ (Baalbek) acts as مفرد here, though it appears to be two words; (2) تركيب العدد: eleven to nineteen, such as أَحَدَ عَشَرَ (eleven), are treated as تركيب مزج; (3) تركيب العطف: أَحَدٌ وَعِشْرُونَ (twenty-one) is تركيب عطف because و joins its parts.',
  },
];

function meaningVisual(index) {
  const token = (word, meaning, role = '') => `<div class="mz-meaning-token"><strong>${escBidi(word)}</strong><span>${esc(meaning)}</span>${role ? `<small>${escBidi(role)}</small>` : ''}</div>`;
  if (index === 0) return `<figure class="mz-meaning-visual mz-word-desktop-map"><figcaption>From sound to meaning</figcaption><div class="mz-meaning-parts">${token('موضوع', 'A recognised meaning', 'Studied in grammar')}${token('مهمل', 'No recognised meaning', 'Named for recognition')}</div></figure>`;
  if (index === 1) return `<figure class="mz-meaning-visual mz-word-desktop-map"><figcaption>The meaning is the link</figcaption><div class="mz-word-meaning-link">${token('رَجُلٌ', 'spoken expression')}<span aria-hidden="true">→</span><span>a man</span></div><p>A known meaning makes it ${escBidi('قول')}.</p></figure>`;
  if (index === 3) return `<figure class="mz-meaning-visual mz-meaning-single"><figcaption>One meaning, three letters</figcaption>${token('رَجُلٌ', 'a man', 'مفرد')}<div class="mz-letter-parts" dir="rtl">${['ر', 'ج', 'ل'].map(letter => `<span>${escBidi(letter)}</span>`).join('')}</div></figure>`;
  if (index === 4) return `<figure class="mz-meaning-visual"><figcaption>Two meaningful parts</figcaption><div class="mz-meaning-parts" dir="rtl">${token('كِتَابُ', 'book', 'مضاف')}${token('الوَلَدِ', 'the boy', 'مضاف إليه')}</div></figure>`;
  if (index === 5) return `<figure class="mz-meaning-visual"><figcaption>Two different questions</figcaption>${token('رِجَالٌ', 'men')}<dl class="mz-meaning-context"><div><dt>Construction</dt><dd>${escBidi('مفرد')}<span>One word</span></dd></div><div><dt>Number</dt><dd>${escBidi('جمع')}<span>Plural</span></dd></div></dl></figure>`;
  return '';
}

const WORD_SECTION_LABELS = [
  { 2: 'What counts as a sound', 3: 'Meaning makes the distinction' },
  { 2: 'A connection to meaning', 3: 'See the difference' },
  { 3: 'Two conditions', 4: 'What comes next' },
  { 2: 'Read the whole word', 3: 'Use this test' },
  { 2: 'Two meaningful parts', 3: 'Phrase or sentence?', 4: 'Apply the distinction' },
  { 1: 'Two senses of the same term', 3: 'Keep the context in view' },
];

export function wordTeachingHtml(lesson, step, helpers, state) {
  const idea = WORD_IDEAS[step.ideaIndex];
  const concept = lesson.concepts[step.conceptIndex];
  const renderLine = index => {
    const line = WORD_COPY[step.conceptIndex]?.[index] ? { html: WORD_COPY[step.conceptIndex][index] } : concept.lines[index];
    const html = line.html ? `<p class="concept-line">${isolateArabicHtml(line.html)}</p>` : helpers.prose({ lines: [line] }, '', null, true, state.tarkeebLabelsBlue);
    return `<div class="mz-word-source" data-source-line="${step.conceptIndex}:${index}">${html}</div>`;
  };
  const heading = `<p class="mz-eyebrow">Idea ${step.ideaIndex + 1} of ${WORD_IDEAS.length} <span aria-hidden="true">/</span> ${escBidi(idea.term)}</p><h2>${esc(idea.title)}</h2>`;
  if (step.ideaIndex === 6) {
    const [intro, ...cases] = WORD_COPY[5][4].split(/(?=\([123]\))/);
    return `<article class="mz-teaching mz-nahw-teaching mz-word-card"><div class="mz-teaching-copy"><header class="mz-word-card-head">${heading}</header><div class="mz-word-cases mz-prose" data-source-line="5:4"><p class="concept-line mz-case-intro">${isolateArabicHtml(intro)}</p><div class="mz-word-case-list">${cases.map(text => { const split = text.indexOf(':') + 1; return `<section><h3>${escBidi(text.slice(0, split))}</h3><p class="concept-line">${isolateArabicHtml(text.slice(split).trim())}</p></section>`; }).join('')}</div></div></div></article>`;
  }
  const leadIndex = step.lineIndices[0];
  const boxes = step.lineIndices.filter(index => concept.lines[index].box);
  const explanation = step.lineIndices.filter(index => index !== leadIndex && !boxes.includes(index));
  return `<article class="mz-teaching mz-nahw-teaching mz-word-card"><div class="mz-teaching-copy"><header class="mz-word-card-head">${heading}<div class="mz-word-lead mz-prose">${renderLine(leadIndex)}</div></header><div class="mz-word-board"><div class="mz-word-anchor">${boxes.map(renderLine).join('')}${meaningVisual(step.ideaIndex)}</div><div class="mz-word-explanation mz-prose">${explanation.map(index => `<section><h3>${esc(WORD_SECTION_LABELS[step.conceptIndex][index])}</h3>${renderLine(index)}</section>`).join('')}</div></div></div></article>`;
}

export function wordSummaryHtml() {
  const rows = [
    ['لفظ', 'Any sound from the mouth.', 'With or without meaning.'],
    ['قول', 'A sound with meaning.', 'The لفظ grammar studies.'],
    ['كلمة', 'قول مفرد: one meaningful utterance.', 'Its parts have no separate meanings.'],
    ['مركب', 'Parts with their own meanings.', 'ناقص: phrase. تام: complete sentence.'],
  ];
  return `<article class="mz-teaching mz-word-card"><div class="mz-teaching-copy"><p class="mz-eyebrow">Lesson recap</p><h2>From sound to word</h2><p class="mz-word-summary-intro">Ask where the meaning lives.</p><dl class="mz-word-recap">${rows.map(([term, meaning, detail]) => `<div><dt>${escBidi(term)}</dt><dd>${escBidi(meaning)}<span>${escBidi(detail)}</span></dd></div>`).join('')}</dl><aside class="mz-word-recap-note"><strong>Keep the context in view</strong><p>${escBidi('رِجَالٌ')} is one word in construction and plural in number. ${escBidi('بَعْلَبَكَّ')} functions as a combined name; eleven to nineteen are treated as ${escBidi('تركيب مزج')}; ${escBidi('أَحَدٌ وَعِشْرُونَ')} uses ${escBidi('تركيب عطف')} because of the joining ${escBidi('و')}.</p></aside></div></article>`;
}

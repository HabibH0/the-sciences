import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { COURSE } from '../content-mantiq/course.js';
import { gradeResponse } from '../server/grading.js';
import { logicFieldGroups } from '../js/learning/render-logic.js';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const args = new URLSearchParams(process.argv[2] || '');
const width = Number(args.get('width')) || 320, height = Number(args.get('height')) || 568;
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
await fs.mkdir('artifacts/logic-course', { recursive: true });
try {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.route('**/__dev/version', route => route.abort());
  const errors = [];
  page.on('pageerror', e => errors.push(e.stack));
  await page.goto('http://localhost:4173/scripts/verify-logic-layout.html');
  await page.waitForFunction(() => window.logicAudit);
  let cases = await page.evaluate(() => window.logicAudit.teaching.flatMap(t => [{ ...t, visual: undefined }, ...(t.lesson === 'lesson_hypothetical_syllogisms' && t.step === 'section_0' ? [{ ...t, layout: { group: 1 } }] : []), ...(t.visual ? Object.keys(window.logicAudit.visuals[t.visual.kind].variants).map(k => ({ ...t, visual: { primary: t.visual.kind === 'proposition' ? Number(k.split('|')[0]) : k.split('|')[0], secondary: k.split('|')[1] }, layout: { view: 'diagram' } })) : [])]));
  if (args.has('exercises')) {
    const source = JSON.parse(await fs.readFile(new URL('../server/content/mantiq.json', import.meta.url), 'utf8'));
    let items = COURSE.items;
    if (args.has('sample')) items = Object.values(Object.groupBy(items, i => `${i.interaction}/${i.fields.map(f => f.path).join('|')}`)).flatMap(group => [group[0], ...group.toSorted((a, b) => JSON.stringify(b).length - JSON.stringify(a).length).slice(0, 2)]);
    if (args.has('item')) items = items.filter(i => i.id === args.get('item'));
    const answers = new Map(source.items.map(i => [i.id, i.answer]));
    cases = items.flatMap(item => {
      const response = answers.get(item.id), grade = gradeResponse({ courseId: 'mantiq', itemId: item.id, response, hintsUsed: 0 });
      const wrong = gradeResponse({ courseId: 'mantiq', itemId: item.id, response: null, hintsUsed: 0 });
      const base = { lesson: 'lesson_sound_definitions', itemId: item.id };
      return [
        { ...base, phase: 'initial' },
        ...logicFieldGroups(item).map((_, group) => ({ ...base, phase: `answer-${group}`, draft: { response }, layout: { group } })),
        { ...base, phase: 'hint', draft: { response, hintsUsed: item.hints.length }, layout: { view: 'hint' } },
        { ...base, phase: 'wrong', draft: { response, originalResponse: response, grade: wrong } },
        { ...base, phase: 'failed-correction', draft: { response, grade: wrong, correcting: true, correctionGrade: wrong }, layout: { view: 'correctionFeedback' } },
        { ...base, phase: 'network-error', draft: { response, error: 'Your answer could not be checked. Your response is kept here; try again.' } },
        ...['expected', 'original'].flatMap(view => logicFieldGroups(item).map((_, group) => ({ ...base, phase: `${view}-${group}`, draft: { response, originalResponse: response, grade: wrong }, layout: { view, group } }))),
        ...logicFieldGroups(item).map((_, group) => ({ ...base, phase: `correction-${group}`, draft: { response, originalResponse: null, grade: wrong, correcting: true }, layout: { group } })),
        { ...base, phase: 'corrected', draft: { response, grade: wrong, correctionGrade: grade } },
        { ...base, phase: 'correct', draft: { response, grade } },
      ];
    });
  }
  if (!args.has('exercises')) cases = cases.flatMap(c => c.visual && ['lesson_quality_quantity', 'lesson_aeio_forms', 'lesson_distribution', 'lesson_venn_representation'].includes(c.lesson) ? [c, { ...c, layout: { ...c.layout, detail: 'meaning' } }] : [c]);
  const report = { viewport: [width, height], states: 0, typography: {}, failures: [], errors };
  const selected = cases.filter(c => (!args.has('lesson') || c.lesson === args.get('lesson')) && (!args.has('step') || c.step === args.get('step')));
  for (const font of args.has('full') ? ['naskh', 'traditional', 'uthmani'] : ['naskh']) for (const scale of args.has('full') ? [85, 100, 130] : [100]) for (const entry of selected) {
    const result = await page.evaluate(c => window.logicAudit.show(c), { ...entry, font, scale });
    report.states++;
    for (const [role, size] of Object.entries(result.typography || {})) if (size) {
      if (report.typography[role] && report.typography[role] !== size) result.failures.push(`${role} font size changes between cards or saved preferences`);
      report.typography[role] = size;
    }
    if (result.failures.length) report.failures.push({ ...entry, font, scale, ...result });
    if (args.has('shot')) await page.screenshot({ path: `artifacts/logic-course/${entry.itemId ? entry.itemId.replace(/[^a-z0-9_-]/gi, '-') + '-' + entry.phase : entry.lesson + '-' + entry.step + '-' + (entry.visual ? Object.values(entry.visual).join('-') : 'text')}-${width}.png` });
  }
  const selection = args.has('item') ? `-${args.get('item').split('::')[0]}` : args.has('lesson') ? `-${args.get('lesson')}` : '';
  await fs.writeFile(`artifacts/logic-course/${args.has('exercises') ? 'exercises' : 'teaching'}-${width}x${height}${args.has('sample') ? '-sample' : ''}${args.has('full') ? '-full' : ''}${selection}.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ viewport: report.viewport, states: report.states, failures: report.failures.length, details: report.failures.slice(0, 3), errors }));
  if (report.failures.length || errors.length) process.exitCode = 1;
} finally { await browser.close(); }

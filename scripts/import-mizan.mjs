// Import the authored prototype without introducing its framework into the
// production browser. Run with Node 24+: node scripts/import-mizan.mjs <mizan root>.
// The prototype's installed renderer is used only to compile safe Markdown
// and all interactive diagram states to static HTML. No answers ship publicly.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { createRequire, stripTypeScriptTypes } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = process.argv[2] && path.resolve(process.argv[2]);
if (!source || !fs.existsSync(path.join(source, 'app/src/content/adapter.ts'))) {
  throw new Error('Pass the Mīzān prototype root containing app/ and mantiq_content_starter/.');
}
const app = path.join(source, 'app');
const require = createRequire(path.join(app, 'package.json'));
const write = (name, text) => {
  const target = path.join(root, name);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, text);
};
const domainFiles = [
  'content/adapter', 'content/stimulus', 'content/arabic',
  'course/engine', 'course/lesson-player', 'course/sessions',
  'mastery/engine', 'progress/model',
  'exercises/validator', 'exercises/interaction-model',
];
const hashes = {};
for (const name of domainFiles) {
  const original = fs.readFileSync(path.join(app, `src/${name}.ts`), 'utf8');
  hashes[name] = createHash('sha256').update(original).digest('hex');
  const js = stripTypeScriptTypes(original, { mode: 'transform' })
    .replace(/(from\s+['"])(\.[^'"]+)(['"])/g, '$1$2.js$3');
  write(`js/mizan/${name}.js`, `// Ported from Mīzān src/${name}.ts by scripts/import-mizan.mjs.\n${js}`);
}

const rawPath = path.join(app, 'content/mantiq/course.runtime.json');
const rawText = fs.readFileSync(rawPath, 'utf8');
const raw = JSON.parse(rawText);
const { adapt } = await import(pathToFileURL(path.join(root, 'js/mizan/content/adapter.js')));
const course = adapt(raw);
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { default: ReactMarkdown } = await import(pathToFileURL(require.resolve('react-markdown')));
const { default: remarkGfm } = await import(pathToFileURL(require.resolve('remark-gfm')));
const { arabicTypography } = await import(pathToFileURL(path.join(root, 'js/mizan/content/arabic.js')));
const markdown = text => renderToStaticMarkup(React.createElement(ReactMarkdown, {
  remarkPlugins: [remarkGfm, arabicTypography], skipHtml: true,
  components: {
    h1: ({ children }) => React.createElement('h2', {}, children),
    table: ({ children }) => React.createElement('div', { className: 'table-scroll' }, React.createElement('table', {}, children)),
    a: ({ href, children }) => React.createElement('a', { href, rel: 'noopener noreferrer' }, children),
  },
}, text));
for (const lesson of Object.values(course.lessons)) {
  lesson.notesHtml = markdown(lesson.markdown);
  for (const step of lesson.learning_steps) {
    if (step.kind === 'teach') step.html = markdown(step.markdown);
  }
}

// Pre-render the original diagrams in every selectable state. The small
// delegated browser handler selects these states; every original control
// remains usable with a keyboard, with no React runtime or iframe.
const ts = require('typescript');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'mizan-diagrams-'));
for (const name of ['VennDiagram', 'LessonVisual', 'StudyEmblem']) {
  const relative = name === 'StudyEmblem' ? `src/components/${name}.tsx` : `src/components/diagrams/${name}.tsx`;
  let code = fs.readFileSync(path.join(app, relative), 'utf8');
  if (name === 'LessonVisual') {
    code = code.replace("import { useState, useId } from 'react';", "import { useState as reactState, useId } from 'react';\nlet choices = []; export function setRenderState(next) { choices = [...next]; }\nfunction useState(value) { return reactState(choices.length ? choices.shift() : value); }");
    code = code.replace('onClick={() => onChange(v.id)}', 'data-action="setStudyVisual" data-visual-group={label} data-visual-value={v.id} onClick={() => onChange(v.id)}');
    code = code.replace('onClick={() => setActive(i)}', 'data-action="setStudyVisual" data-visual-group="Proposition part" data-visual-value={i} onClick={() => setActive(i)}');
  }
  let js = ts.transpileModule(code, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  js = js.replace(/(from\s+['"])([^'"]+)(['"])/g, (_, a, spec, b) => {
    const resolved = spec.startsWith('.') ? pathToFileURL(path.join(tmp, `${path.basename(spec)}.mjs`)).href : pathToFileURL(require.resolve(spec)).href;
    return a + resolved + b;
  });
  fs.writeFileSync(path.join(tmp, `${name}.mjs`), js);
}
const { LessonVisual, setRenderState } = await import(pathToFileURL(path.join(tmp, 'LessonVisual.mjs')));
const { StudyEmblem } = await import(pathToFileURL(path.join(tmp, 'StudyEmblem.mjs')));
const visualChoices = {
  definition: [['narrow', 'sound', 'broad', 'circular'], ['']],
  relations: [['equal', 'disjoint', 'subset', 'overlap'], ['']],
  categorical: [['A', 'E', 'I', 'O'], ['', 'subject_only', 'overlap', 'predicate_only']],
  proposition: [[0, 1, 2, 3], ['']],
  square: [['contrary', 'contradictory', 'subcontrary', 'subaltern'], ['']],
  syllogism: [['1', '2', '3', '4'], ['M', 'S', 'P']],
};
const visuals = {};
for (const [kind, [primary, secondary]] of Object.entries(visualChoices)) {
  visuals[kind] = { primary, secondary, variants: {} };
  for (const a of primary) for (const b of secondary) {
    setRenderState([a, b]);
    visuals[kind].variants[`${a}|${b}`] = renderToStaticMarkup(React.createElement(LessonVisual, {
      spec: { kind, title: '', caption: '', initial: String(a) },
    }));
  }
}
write('content-mantiq/visuals.js', `// Generated from the original Mīzān diagrams.\nexport const VISUALS = ${JSON.stringify(visuals)};\n`);
write('js/learning/emblems.js', `// Generated from Mīzān StudyEmblem.\nexport const EMBLEMS = ${JSON.stringify(Array.from({ length: 4 }, (_, variant) => renderToStaticMarkup(React.createElement(StudyEmblem, { variant }))))};\n`);

const known = new Set();
const assigned = new Set();
const modules = course.units.map(u => ({
  id: `logic-${u.unit.id}`, title: u.unit.title.en, language: 'en',
  arabicTitle: u.unit.title.ar || '', blurb: u.topics.map(t => t.title).join(' · '),
  lessons: u.topics.map(topic => {
    const l = course.lessons[topic.lesson_id];
    l.metadata.concepts.forEach(c => known.add(c));
    const bank = course.items.filter(i => !i.reflection && !assigned.has(i.id)
      && i.concepts.some(c => l.metadata.concepts.includes(c)) && i.concepts.every(c => known.has(c)))
      .map(i => { assigned.add(i.id); return { kind: 'mizan', logicItemId: i.id, title: topic.title, prompt: i.prompt }; });
    return {
      id: topic.lesson_id, title: l.metadata.title, language: 'en', subtitle: u.unit.title.en,
      sourceRef: l.metadata.source?.pages?.length ? `Source pages ${l.metadata.source.pages.join(', ')}` : '',
      learningModel: 'mizan', logicLessonId: topic.lesson_id,
      concepts: l.metadata.concepts.map(id => ({ heading: course.concepts[id].title.en, lines: [typeof course.concepts[id].definition === 'string' ? course.concepts[id].definition : course.concepts[id].definition?.en || course.concepts[id].title.en] })),
      quiz: [], bank,
    };
  }),
}));
// Any multi-concept item becomes available only once all of its prerequisites
// have been encountered. Attach remaining scored items to the final lesson.
modules.at(-1).lessons.at(-1).bank.push(...course.items.filter(i => !i.reflection && !assigned.has(i.id)).map(i => ({ kind: 'mizan', logicItemId: i.id, title: 'Logic review', prompt: i.prompt })));
write('content-mantiq/course.js', `// Compiled from the authored Mīzān curriculum; answer keys are server-only.\nexport const COURSE = ${JSON.stringify(course)};\n`);
write('content-mantiq/index.js', `// Generated by scripts/import-mizan.mjs.\nimport { registerLogicCourse } from '../js/learning/logic-course.js';\nimport { COURSE } from './course.js';\nimport { VISUALS } from './visuals.js';\nregisterLogicCourse(COURSE, VISUALS);\nexport const MODULES = ${JSON.stringify(modules)};\n`);
const usable = new Set(course.items.map(i => i.id));
write('server/content/mantiq.json', JSON.stringify({ id: course.id, version: course.version, items: raw.practice_items.filter(i => usable.has(i.id)) }));
write('curriculum/mantiq/import-manifest.json', JSON.stringify({ version: course.version, runtimeSha256: createHash('sha256').update(rawText).digest('hex'), domainSources: hashes, lessons: Object.keys(course.lessons).length, usableItems: course.items.length, excludedItems: course.issues }, null, 2));
write('server/validator.js', fs.readFileSync(path.join(root, 'js/mizan/exercises/validator.js'), 'utf8'));
const authoring = path.join(source, 'mantiq_content_starter');
for (const name of fs.readdirSync(authoring)) {
  if (['dist', '__pycache__', '.venv', 'runtime'].includes(name)) continue;
  fs.cpSync(path.join(authoring, name), path.join(root, 'curriculum/mantiq', name), {
    recursive: true, filter: file => !file.split(path.sep).includes('__pycache__'),
  });
}
// Keep copied text content intact while avoiding trailing empty lines in the
// newly tracked source files. Ordinary builds do not rerun this import.
const authoringTarget = path.join(root, 'curriculum/mantiq');
for (const entry of fs.readdirSync(authoringTarget, { recursive: true, withFileTypes: true })) {
  if (!entry.isFile() || !/\.(md|yaml|json|py|txt)$/.test(entry.name)) continue;
  const file = path.join(entry.parentPath, entry.name);
  const original = fs.readFileSync(file, 'utf8');
  const normalized = original.replace(/(?:\r?\n)+$/, '\n');
  if (original !== normalized) fs.writeFileSync(file, normalized);
}
console.log(`Imported ${Object.keys(course.lessons).length} lessons, ${course.items.length} usable exercises, ${Object.keys(visuals).length} interactive diagram families.`);

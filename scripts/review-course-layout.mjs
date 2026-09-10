// Screenshots in an isolated profile, assembled for manual visual review.
import fs from 'node:fs/promises';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { auditLessons, auditCourse } from './nahw-audit-lessons.mjs';
import { foundationPlan } from '../js/learning/nahw-foundations.js';
import { grammarSteps } from '../js/learning/study.js';
import { foundationTeachingHtml } from '../js/learning/render-foundations.js';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const args = new URLSearchParams(process.argv[2] || '');
const lessons = auditLessons(args).filter(foundationPlan);
const out = new URL(`../artifacts/${auditCourse(args).artifacts}/`, import.meta.url);
await fs.mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
try {
  for (const [width, height] of [[390, 844], [1280, 800]]) {
    const page = await browser.newPage({ viewport: { width, height } });
    await page.route('**/__dev/version', route => route.abort());
    const shots = [];
    for (const lesson of lessons) {
      const steps = grammarSteps(lesson).filter(s => s.kind === 'teach');
      const step = args.has('step') ? steps.find(s => s.id === args.get('step')) : steps.reduce((largest, current) => foundationTeachingHtml(lesson, current).replace(/<[^>]*>/g, '').length > foundationTeachingHtml(lesson, largest).replace(/<[^>]*>/g, '').length ? current : largest);
      if (!step) throw new Error(`No teaching step for ${lesson.learningKey}`);
      const query = new URLSearchParams({ auto: '1', lesson: lesson.learningKey, step: step.id, phase: 'initial', font: 'naskh', scale: '100' });
      await page.goto(`http://localhost:4173/scripts/verify-word-layout.html?${query}`);
      await page.locator('#result[data-status="passed"], #result[data-status="failed"]').waitFor();
      const report = JSON.parse(await page.locator('#result').textContent());
      await page.locator('#audit').evaluate(node => node.remove());
      const name = `review-${lesson.learningKey.replace('/', '-')}-${width}-${step.id.replaceAll(':', '-')}.png`;
      const bytes = await page.screenshot({ path: fileURLToPath(new URL(name, out)) });
      shots.push({ title: `${lesson.learningKey} · ${step.id}`, image: bytes.toString('base64') });
      console.log(JSON.stringify({ lesson: lesson.learningKey, step: step.id, width, failures: report.failures.length, image: name }));
    }
    await page.close();
    const columns = width < 960 ? 3 : 2;
    for (let i = 0; i < shots.length; i += columns) {
      const group = shots.slice(i, i + columns);
      const sheet = await browser.newPage({ viewport: { width: width * group.length, height: height + 32 }, deviceScaleFactor: 1 });
      await sheet.setContent(`<body style="margin:0;display:flex;background:#eee">${group.map(s => `<figure style="margin:0;width:${width}px"><figcaption style="height:32px;box-sizing:border-box;padding:6px;font:14px sans-serif">${s.title}</figcaption><img width="${width}" height="${height}" src="data:image/png;base64,${s.image}"></figure>`).join('')}</body>`);
      await sheet.locator('img').evaluateAll(images => Promise.all(images.map(img => img.decode())));
      await sheet.screenshot({ path: fileURLToPath(new URL(`review-sheet-${args.get('modules') || 'selected'}-${width}-${i / columns + 1}.png`, out)) });
      await sheet.close();
    }
  }
} finally { await browser.close(); }

// Run in an isolated, temporary browser context. Never uses the live profile.
// PLAYWRIGHT_MODULE may point to a bundled playwright/index.mjs when the
// workspace deliberately has no browser-testing dependency in package.json.
import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { auditLessons, auditCourse } from './nahw-audit-lessons.mjs';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const args = new URLSearchParams(process.argv[2] || '');
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
const output = new URL(`../artifacts/${auditCourse(args).artifacts}/`, import.meta.url);
await fs.mkdir(output, { recursive: true });
try {
  const page = await browser.newPage({ viewport: { width: Number(args.get('width')) || 1280, height: Number(args.get('height')) || 800 } });
  // A live editor must not reset an isolated audit midway through a state.
  await page.route('**/__dev/version', route => route.abort());
  const errors = [];
  page.on('pageerror', error => errors.push(error.stack));
  const lessonKeys = auditLessons(args).map(lesson => lesson.learningKey);
  const results = [];
  for (const lesson of lessonKeys) {
    const query = new URLSearchParams(args);
    query.set('auto', '1'); query.set('lesson', lesson);
    if (!query.has('full')) { query.set('font', query.get('font') || 'naskh'); query.set('scale', query.get('scale') || '100'); }
    await page.goto(`http://localhost:4173/scripts/verify-word-layout.html?${query}`, { waitUntil: 'networkidle' });
    await page.locator('#result[data-status="passed"], #result[data-status="failed"]').waitFor({ timeout: 120000 });
    const report = JSON.parse(await page.locator('#result').textContent());
    results.push(report);
    console.log(JSON.stringify({ lesson, viewport: report.viewport, states: report.states, failures: report.failures.length, details: report.failures.slice(0, 12) }));
    if (args.has('step')) {
      await page.locator('#audit').evaluate(node => node.remove());
      await page.screenshot({ path: new URL(`${lesson.replace('/', '-')}-${report.viewport.join('x')}.png`, output).pathname.replace(/^\/([A-Z]:)/, '$1'), fullPage: true });
    }
  }
  const focus = args.has('step') ? `-step-${args.get('step').replace(/[^a-z0-9-]/gi, '-')}` : args.has('teaching') ? '-teaching' : '';
  const selection = args.has('modules') ? `-modules-${args.get('modules').replace(/[^0-9,]/g, '').replaceAll(',', '-')}` : args.has('lesson') ? `-${args.get('lesson').replace('/', '-')}` : args.has('course') ? '-course' : '';
  await fs.writeFile(new URL(`audit-${args.get('width') || 1280}x${args.get('height') || 800}${args.has('full') ? '-full' : ''}${selection}${focus}.json`, output), JSON.stringify({ results, errors }, null, 2));
  if (errors.length || results.some(r => r.failures.length)) process.exitCode = 1;
} finally { await browser.close(); }

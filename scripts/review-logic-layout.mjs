// Contact sheets from the rendered app, for visual review after geometry checks.
import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { COURSE } from '../content-mantiq/course.js';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
await fs.mkdir('artifacts/logic-course/review', { recursive: true });
try {
  const page = await browser.newPage();
  await page.route('**/__dev/version', route => route.abort());
  await page.goto('http://localhost:4173/scripts/verify-logic-layout.html');
  await page.waitForFunction(() => window.logicAudit);
  const cards = Object.entries(COURSE.lessons).map(([lesson, l]) => ({ lesson, step: l.learning_steps.filter(s => s.kind === 'teach').toSorted((a, b) => b.html.replace(/<[^>]+>/g, '').length - a.html.replace(/<[^>]+>/g, '').length)[0].id }));
  cards.push(...Object.entries(COURSE.lessons).flatMap(([lesson, l]) => l.learning_steps.filter(s => s.visual).map(s => ({ lesson, step: s.id, layout: { view: 'diagram' }, visual: { primary: s.visual.initial, secondary: s.visual.kind === 'categorical' ? 'subject_only' : undefined } }))));
  for (const [width, height] of [[320, 568], [1280, 800]]) {
    await page.setViewportSize({ width, height });
    const shots = [];
    for (const [index, card] of cards.entries()) {
      const result = await page.evaluate(c => window.logicAudit.show(c), card);
      const file = `${width}-${index}.png`;
      const png = await page.screenshot({ path: `artifacts/logic-course/review/${file}` });
      shots.push({ title: `${card.lesson.replace('lesson_', '')} · ${card.layout ? 'diagram' : card.step}`, png: png.toString('base64'), failures: result.failures });
    }
    const contact = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
    for (let i = 0; i < shots.length; i += 8) {
      await contact.setContent(`<style>body{margin:0;background:#dce5df;font:12px system-ui}main{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:12px}figure{margin:0;text-align:center}img{width:100%;max-height:560px;object-fit:contain}figcaption{padding:4px;font-size:11px}</style><main>${shots.slice(i, i + 8).map(s => `<figure><img src="data:image/png;base64,${s.png}"><figcaption>${s.title}${s.failures.length ? ' · CHECK' : ''}</figcaption></figure>`).join('')}</main>`);
      await contact.screenshot({ path: `artifacts/logic-course/review/contact-${width}-${i / 8 + 1}.png`, fullPage: true });
    }
    await contact.close();
    console.log(`${width}: ${shots.length} representative lesson and diagram screenshots`);
  }
} finally { await browser.close(); }

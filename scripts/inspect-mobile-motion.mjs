// A short, sequential reproduction in a disposable profile. Always close it.
import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
const out = 'artifacts/study-catalog/mobile-jitter';
await fs.mkdir(out, { recursive: true });
const reports = [];
const deadline = setTimeout(() => browser.close(), 90000);
try {
  const context = await browser.newContext({ viewport: { width: 1100, height: 800 }, reducedMotion: process.argv.includes('--reduce') ? 'reduce' : 'no-preference' });
  await context.addInitScript(() => {
    if (location.origin === 'http://localhost:4173' && !localStorage.getItem('the-sciences-progress')) localStorage.setItem('the-sciences-progress', JSON.stringify({ progress: { courseId: 'mantiq', mizanVersion: 1, forceUnlockAll: true, theme: 'mizan', accent: 'emerald' }, meta: { version: 1, updatedAt: new Date().toISOString(), deviceId: 'isolated-jitter-reproduction' } }));
  });
  const page = await context.newPage();
  const profiler = process.argv.includes('--profile') ? await context.newCDPSession(page) : null;
  if (profiler) await profiler.send('Profiler.enable');
  const tracer = process.argv.includes('--trace') ? await context.newCDPSession(page) : null;
  const fontRequests = [];
  page.on('response', response => { if (/\.(woff2?|ttf)/.test(response.url())) fontRequests.push({ url: response.url(), at: Date.now() }); });
  page.on('pageerror', e => console.log('PAGE ERROR', e.message));
  await page.route('**/__dev/version', route => route.abort());
  await page.goto('http://localhost:4173/scripts/preview-mobile.html?lesson=logic-terms/lesson_sound_definitions');
  const frame = await page.locator('iframe').elementHandle().then(el => el.contentFrame());
  await frame.locator('#root .mz-study').waitFor();
  await frame.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(700);
  if (profiler || tracer) console.log(JSON.stringify({ fonts: await frame.evaluate(() => [...document.fonts].map(f => ({ family: f.family, status: f.status }))), fontRequests }));
  async function inspect(action, label) {
    if (tracer) await tracer.send('Tracing.start', { categories: 'devtools.timeline,disabled-by-default-devtools.timeline', transferMode: 'ReturnAsStream' });
    if (profiler) await profiler.send('Profiler.start');
    const result = await frame.evaluate(async ({ action, label }) => {
      const root = document.querySelector('#root');
      const start = performance.now(), frames = [], tasks = [];
      const observer = new PerformanceObserver(list => tasks.push(...list.getEntries().map(e => ({ start: e.startTime - start, duration: e.duration }))));
      observer.observe({ type: 'longtask' });
      let swaps = 0;
      const mutations = new MutationObserver(() => swaps++);
      mutations.observe(root, { childList: true });
      const rect = el => { const r = el?.getBoundingClientRect(); return r ? [r.x, r.y, r.width, r.height].map(n => Math.round(n * 10) / 10) : null; };
      const before = performance.now();
      root.querySelector(`[data-action="${action}"]`).click();
      const handlerMs = performance.now() - before;
      const animationTargets = document.getAnimations().map(a => ({ target: a.effect.target.getAttribute('class'), duration: a.effect.getTiming().duration, delay: a.effect.getTiming().delay }));
      await new Promise(resolve => {
        const sample = now => {
          const body = root.querySelector('[data-study-step]');
          frames.push({ time: Math.round(now - start), body: rect(body), content: rect(body?.firstElementChild), heading: rect(root.querySelector('.mz-word-card-head')), ghost: rect(document.querySelector('.mz-motion-layer [data-study-step]')), scroll: body?.scrollLeft || 0 });
          if (now - start < 650) requestAnimationFrame(sample); else resolve();
        };
        requestAnimationFrame(sample);
      });
      observer.disconnect(); mutations.disconnect();
      const intervals = frames.slice(1).map((f, i) => f.time - frames[i].time).sort((a, b) => a - b);
      return { label, handlerMs, swaps, tasks, p95FrameMs: intervals[Math.floor(intervals.length * .95)], maxFrameMs: Math.max(...intervals), animationTargets, frames };
    }, { action, label });
    reports.push(result);
    if (tracer) {
      const completion = new Promise(resolve => tracer.once('Tracing.tracingComplete', resolve));
      await tracer.send('Tracing.end');
      const { stream } = await completion;
      let text = '', chunk;
      do { chunk = await tracer.send('IO.read', { handle: stream }); text += chunk.data; } while (!chunk.eof);
      await tracer.send('IO.close', { handle: stream });
      await fs.writeFile(`${out}/${label}.trace.json`, text);
      const events = JSON.parse(text).traceEvents.filter(e => e.dur > 1000 && ['Layout', 'UpdateLayoutTree', 'Paint', 'FunctionCall'].includes(e.name));
      console.log(JSON.stringify({ label, expensive: events.map(e => ({ name: e.name, ms: e.dur / 1000, args: e.args })).sort((a,b) => b.ms - a.ms).slice(0, 10) }));
    }
    if (profiler) {
      const { profile } = await profiler.send('Profiler.stop');
      await fs.writeFile(`${out}/${label}.cpuprofile`, JSON.stringify(profile));
      const nodes = new Map(profile.nodes.map(node => [node.id, node]));
      const totals = new Map();
      profile.samples?.forEach((id, i) => totals.set(id, (totals.get(id) || 0) + profile.timeDeltas[i]));
      result.profile = [...totals].sort((a, b) => b[1] - a[1]).slice(0, 18).map(([id, us]) => ({ ms: us / 1000, ...nodes.get(id).callFrame }));
    }
    console.log(JSON.stringify({ label, handlerMs: result.handlerMs, swaps: result.swaps, p95: result.p95FrameMs, max: result.maxFrameMs, tasks: result.tasks }));
  }
  await inspect('studyNext', 'next');
  await inspect('logicLayout', 'diagram');
  await inspect('openStudyNotes', 'notes-open');
  await inspect('closeStudyNotes', 'notes-close');
  await inspect('studyBack', 'back');
  await page.screenshot({ path: `${out}/settled.png` });
} finally {
  clearTimeout(deadline);
  await fs.writeFile(`${out}/${process.argv[2] || 'baseline'}.json`, JSON.stringify(reports, null, 2));
  await browser.close();
}

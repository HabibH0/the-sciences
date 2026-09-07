// Run before promoting the frontend: a static host cannot provide /api/grade.
import fs from 'node:fs';
import { setTimeout as delay } from 'node:timers/promises';
const base = process.env.MIZAN_BACKEND_URL || 'https://the-sciences.onrender.com';
const curriculum = JSON.parse(fs.readFileSync(new URL('../server/content/mantiq.json', import.meta.url)));
const item = curriculum.items.find(i => i.interaction !== 'free_response_normalized');
const tries = process.argv.includes('--wait') ? 30 : 1;
let last = '';
for (let n = 0; n < tries; n++) {
  try {
    const health = await fetch(`${base}/health`, { signal: AbortSignal.timeout(30000) });
    const info = await health.json();
    if (info.grading?.version !== curriculum.version || info.grading?.items !== curriculum.items.length) throw new Error('The Logic grading service has not updated yet.');
    const result = await fetch(`${base}/api/grade`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.timeout(20000),
      body: JSON.stringify({ courseId: curriculum.id, itemId: item.id, response: item.answer }) });
    if (!result.ok || (await result.json()).correct !== true) throw new Error('The deployed Logic grader did not pass its check.');
    console.log('The deployed Logic grader is ready for the frontend release.');
    process.exit(0);
  } catch (error) { last = error.message; }
  if (n + 1 < tries) { console.log(`Waiting for the grading service (${n + 1}/${tries})…`); await delay(20000); }
}
throw new Error(`${last} The existing frontend has been left live. Update the Render service before publishing Mīzān.`);

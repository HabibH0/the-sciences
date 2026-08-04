// TEMPORARY: step through every Practice Mode question (MCQ tab, then
// تركيب tab) and check it renders sanely.
const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');

const APP = path.join(__dirname, '..');
const done = (...ids) => Object.fromEntries(ids.map((i) => [i, '2026-08-02']));
fs.writeFileSync(path.join(APP, 'save-data.json'), JSON.stringify({
  completed: { '01': done('l1', 'l2', 'l3', 'l4', 'l5') },
  quizScores: {}, exStates: {}, revealState: {}, lessonPos: {}, practiceHistory: {},
  streak: 1, lastVisit: new Date().toISOString().slice(0, 10),
  nav: { view: 'module', moduleId: '01', lessonId: null },
}, null, 2));

const problems = [];
const notes = [];
let win;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const js = (c) => win.webContents.executeJavaScript(`(() => { ${c} })()`);
const count = (s) => js(`return document.querySelectorAll(${JSON.stringify(s)}).length;`);
const click = (s) => js(`const e=document.querySelector(${JSON.stringify(s)}); if(!e) return false; e.click(); return true;`);
const text = (s) => js(`const e=document.querySelector(${JSON.stringify(s)}); return e ? e.textContent.trim() : null;`);
const expect = (c, m) => (c ? notes.push(m) : problems.push(`FAILED: ${m}`));

// Fills every تركيب slot with whatever chip is next available (correctness
// doesn't matter here -- this only checks the widget renders without
// overflowing, not that the answer is right).
async function fillTarkeeb() {
  for (let guard = 0; guard < 20; guard++) {
    const slotsLeft = await count('.tarkeeb-slot:not(.filled)');
    if (slotsLeft === 0) break;
    const chipOk = await click('.tarkeeb-chip:not(.used)');
    if (!chipOk) break;
    await click('.tarkeeb-slot:not(.filled)');
  }
}

async function readCard(kind, i) {
  const info = await js(`
    const card = document.querySelector('.exercise-card');
    if (!card) return null;
    const kicker = card.querySelector('.card-kicker');
    const row = card.querySelector('.tarkeeb-row');
    let colMax = 0, slots = 0;
    if (row) {
      const cols = row.querySelectorAll('.tarkeeb-col');
      slots = cols.length;
      cols.forEach(c => { colMax = Math.max(colMax, c.getBoundingClientRect().width); });
    }
    const de = document.documentElement;
    return {
      title: kicker ? kicker.textContent.trim() : '',
      tarkeeb: !!row,
      options: card.querySelectorAll('.mcq-option').length,
      chips: card.querySelectorAll('.tarkeeb-chip').length,
      slots,
      colMax: Math.round(colMax),
      rowW: row ? Math.round(row.getBoundingClientRect().width) : 0,
      pageOverflow: de.scrollWidth > de.clientWidth + 1,
    };`);
  if (!info) { problems.push(`${kind} item ${i}: no card rendered`); return null; }
  if (!info.title) problems.push(`${kind} item ${i}: blank title`);
  if (!info.tarkeeb && info.options < 2) problems.push(`${kind} item ${i} "${info.title}": ${info.options} options`);
  if (info.tarkeeb && info.chips <= info.slots) problems.push(`${kind} item ${i} "${info.title}": no spare chips`);
  if (info.pageOverflow) problems.push(`${kind} item ${i} "${info.title}": page overflow`);
  if (info.tarkeeb && info.colMax > info.rowW) problems.push(`${kind} item ${i} "${info.title}": col ${info.colMax}>${info.rowW}`);
  return info;
}

async function runKind(kind) {
  await click('[data-action="openPractice"]');
  await sleep(150);
  if (kind === 'tarkeeb') await click('[data-action="setPracticeTab"][data-kind="tarkeeb"]');
  await sleep(150);

  const poolLabel = await text(kind === 'tarkeeb' ? '.practice-tab:nth-child(2)' : '.practice-tab:nth-child(1)');
  const poolCount = +((poolLabel || '').split('·')[1] || 0);
  if (poolCount === 0) { notes.push(`${kind}: no unlocked pool, skipping`); return; }

  const started = await click('.practice-count-grid .practice-count-btn:last-child');
  expect(started, `${kind}: "All" button starts a session`);
  await sleep(250);

  let widest = { w: 0, i: -1 };
  let rendered = 0;
  for (let i = 0; i < poolCount; i++) {
    const info = await readCard(kind, i);
    if (info) {
      rendered += 1;
      if (kind === 'tarkeeb' && info.colMax > widest.w) {
        widest = { w: info.colMax, i, title: info.title };
      }
    }
    if (kind === 'tarkeeb') {
      await fillTarkeeb();
      await click('[data-action="checkTarkeeb"]');
    } else {
      await click('.mcq-option');
      await click('[data-action="checkPractice"]');
    }
    await sleep(150);
    if (kind === 'tarkeeb' && widest.i === i) {
      fs.writeFileSync(path.join(__dirname, 'tarkeeb-widest.png'), (await win.webContents.capturePage()).toPNG());
    }
    await click('[data-action="nextPracticeQuestion"]');
    await sleep(200);
  }

  expect(rendered === poolCount, `${kind}: every one of ${poolCount} items renders (got ${rendered})`);
  const reviewRows = await count('.review-row');
  expect(reviewRows === poolCount, `${kind}: session review lists all ${poolCount} answers (got ${reviewRows})`);
  await click('[data-action="closePracticeReview"]');
  await sleep(150);
}

app.whenReady().then(async () => {
  win = new BrowserWindow({
    width: 1280, height: 860, show: true,
    webPreferences: { nodeIntegration: true, contextIsolation: false, sandbox: false, backgroundThrottling: false },
  });
  win.webContents.on('console-message', (_e, l, m, ln, s) => {
    if (l >= 2 && !/Content-Security-Policy/.test(m)) problems.push(`console: ${m} (${s}:${ln})`);
  });
  win.webContents.on('render-process-gone', (_e, d) => problems.push(`renderer gone: ${JSON.stringify(d)}`));

  await win.loadFile(path.join(APP, 'index.html'));
  await sleep(1500);

  await runKind('mcq');
  await runKind('tarkeeb');

  console.log('SMOKE_PROBLEMS ' + JSON.stringify(problems.slice(0, 8)));
  console.log('SMOKE_OK ' + notes.length + ' notes');
  app.exit(problems.length ? 1 : 0);
});

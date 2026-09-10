import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
const out = 'artifacts/study-catalog/motion';
await fs.mkdir(out, { recursive: true });
const results = [], errors = [];
try {
  const cases = [[390, 844, false, 'naskh'], [1280, 800, false, 'amiri'], [320, 568, false, 'scheherazade'], [430, 932, false, 'amiri'], [1024, 600, false, 'naskh'], [320, 568, true, 'naskh']];
  for (const [width, height, reduce, face] of process.argv.includes('--first') ? cases.slice(0, 1) : cases) {
    const context = await browser.newContext({ viewport: { width, height }, reducedMotion: reduce ? 'reduce' : 'no-preference', recordVideo: reduce || !process.argv.includes('--video') ? undefined : { dir: out, size: { width, height } } });
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.stack));
    await page.route('**/__dev/version', route => route.abort());
    await page.addInitScript(face => {
      if (location.origin === 'http://localhost:4173' && !localStorage.getItem('the-sciences-progress')) localStorage.setItem('the-sciences-progress', JSON.stringify({ progress: { courseId: 'mantiq', mizanVersion: 1, forceUnlockAll: true, theme: 'mizan', accent: 'emerald', arabicFace: face, lessonTextScale: 140 }, meta: { version: 1, updatedAt: new Date().toISOString(), deviceId: 'isolated-spatial-motion' } }));
    }, face);
    const root = page.locator('#root');
    const settle = async () => {
      await page.evaluate(() => Promise.allSettled(document.getAnimations().filter(a => a.effect?.getTiming().iterations !== Infinity).map(a => a.finished)));
      await page.waitForFunction(() => !document.querySelector('.mz-motion-layer, .mz-motion-backdrop'));
    };
    const motions = () => page.evaluate(() => document.getAnimations().filter(a => a.playState === 'running').map(a => ({ name: a.animationName || 'waapi', target: a.effect?.target?.getAttribute('class') || '', duration: a.effect?.getTiming().duration, delay: a.effect?.getTiming().delay, frames: a.effect?.getKeyframes().map(k => ({ transform: k.transform, height: k.height, opacity: k.opacity })) })));
    const next = () => root.locator('[data-action="studyNext"]');
    const horizontalScroll = () => root.evaluate(el => [...el.querySelectorAll('*')].filter(n => n.scrollLeft !== 0).map(n => n.className));
    await page.goto('http://localhost:4173/#/course/mantiq');
    await root.locator('.mz-hub').waitFor();
    if (!reduce) {
      const entrance = await motions();
      assert(entrance.some(a => a.target.includes('mz-hub-heading')), 'The course heading and statistics arrive together');
      assert(entrance.some(a => a.target === 'mz-hub-resume'), 'The study action arrives as a coherent group');
      assert(!entrance.some(a => /mz-hub-book|mz-hub-statistics|mz-hub-resume-copy|mz-hub-continue/.test(a.target)), 'Pieces of a course section do not move separately');
      assert(entrance.some(a => a.delay > 0), 'Initial page elements follow a closely spaced sequence');
      assert(!entrance.some(a => a.frames.some(f => f.opacity != null)), 'Reading groups do not crossfade');
    }
    await settle();
    const unit = root.locator('.mz-hub-module').nth(1), summary = unit.locator(':scope > summary');
    const closedHeight = (await unit.boundingBox()).height;
    await summary.click();
    if (!reduce) {
      const running = await motions();
      assert(running.some(a => a.frames.some(k => k.height)), 'The unit must animate height');
      await page.waitForTimeout(70);
      await summary.evaluate(el => el.click());
      await settle();
      assert.equal(await unit.getAttribute('open'), null, 'Reversal closes the unit');
      assert(Math.abs((await unit.boundingBox()).height - closedHeight) <= 1);
      await summary.click();
    }
    await settle();
    await root.locator('.mz-hub-resume button').click();
    await root.locator('.mz-study').waitFor();
    if (!reduce) assert((await motions()).some(a => a.duration === 380 && a.frames.some(f => f.transform?.includes('translateX'))), 'Page arrival slides');
    await settle();
    const chrome = await root.locator('.mz-study').evaluate(el => ({ head: el.querySelector('.mz-word-head').getBoundingClientRect().toJSON(), foot: el.querySelector('.mz-study-foot').getBoundingClientRect().toJSON() }));
    const before = Number(await root.locator('.mz-study').getAttribute('data-step'));
    await next().click();
    const forward = await motions();
    if (!reduce) {
      assert(forward.some(a => a.duration === 340 && a.frames.some(f => f.transform?.includes('translateX'))), 'Card turn slides');
      assert(!forward.some(a => ['m-push-in', 'm-step-in', 'm-screen-in'].includes(a.name)), 'No old page/card effects run on top');
      const headingMotion = forward.find(a => a.target.includes('mz-word-card-head'));
      const proseMotion = forward.find(a => a.target.includes('mz-logic-prose'));
      assert(headingMotion?.frames.some(f => f.transform?.includes('translateX')), 'The heading follows the direction of its card');
      assert(proseMotion?.duration > headingMotion.duration && proseMotion.delay === 0 && headingMotion.delay === 0, 'The explanation settles after the heading without a delayed restart');
      await next().evaluate(el => { el.click(); el.click(); el.click(); });
      assert.equal(Number(await root.locator('.mz-study').getAttribute('data-step')), before + 1, 'Rapid repeated taps do not skip unseen cards');
      assert.deepEqual(await horizontalScroll(), [], 'Focus must not scroll toward the animated heading');
      await page.screenshot({ path: `${out}/card-moving-${width}.png` });
    }
    await settle();
    assert.deepEqual(await horizontalScroll(), [], 'The settled card has no hidden sideways scroll');
    const afterChrome = await root.locator('.mz-study').evaluate(el => ({ head: el.querySelector('.mz-word-head').getBoundingClientRect().toJSON(), foot: el.querySelector('.mz-study-foot').getBoundingClientRect().toJSON() }));
    assert.deepEqual(afterChrome, chrome, 'The lesson header and footer remain anchored');
    await root.locator('[data-action="studyBack"]').click();
    if (!reduce) assert((await motions()).some(a => a.duration === 340 && a.frames.some(f => /translateX\(-/.test(f.transform || ''))), 'Back reverses the slide');
    await settle();
    const retainedBody = await root.locator('.mz-study-body').elementHandle();
    await root.locator('[data-action="openStudyNotes"]').click();
    assert(await retainedBody.evaluate(el => el === document.querySelector('#root .mz-study-body')), 'Opening Notes preserves the lesson surface');
    if (!reduce) assert((await motions()).some(a => a.target.includes('mz-notes-modal') && a.frames.some(f => f.transform?.includes(width < 700 ? 'translateY' : 'translateX'))), 'Notes enter spatially');
    await settle();
    assert(await root.getByRole('dialog').isVisible());
    await page.keyboard.press('Escape');
    if (!reduce) assert(await page.locator('.mz-motion-layer.is-overlay').count(), 'Notes retain an outgoing visual during close');
    await settle();
    assert.equal(await root.getByRole('dialog').count(), 0);
    assert(await retainedBody.evaluate(el => el === document.querySelector('#root .mz-study-body')), 'Closing Notes preserves the lesson surface');
    assert.equal(await root.locator('[data-action="openStudyNotes"]').evaluate(el => document.activeElement === el), true, 'Escape restores Notes trigger focus');
    if (!reduce) {
      await root.locator('[data-action="openStudyNotes"]').click(); await settle();
      await page.keyboard.press('Escape');
      await root.locator('[data-action="openStudyNotes"]').evaluate(el => el.click());
      await settle();
      assert(await root.getByRole('dialog').isVisible(), 'Notes can reopen during their exit');
      await page.keyboard.press('Escape'); await settle();
      // A reversal and a viewport/preference change must retire every stale
      // animation without letting its completion replace the current card.
      await next().evaluate(el => el.click());
      await root.locator('[data-action="studyBack"]').evaluate(el => el.click());
      await settle();
      assert.equal(Number(await root.locator('.mz-study').getAttribute('data-step')), before);
      await next().evaluate(el => el.click());
      await page.setViewportSize({ width: width + 1, height });
      await settle();
      await page.setViewportSize({ width, height });
      await root.locator('[data-action="studyBack"]').click(); await settle();
      // A smaller panel transition must never block leaving the card.
      await next().click(); await settle();
      const diagram = root.locator('.mz-logic-visual-toggle:visible');
      if (await diagram.count()) {
        await diagram.evaluate(el => el.click());
        await next().evaluate(el => el.click());
        assert.equal(Number(await root.locator('.mz-study').getAttribute('data-step')), before + 2, 'Continue can interrupt a diagram transition');
        await settle();
        await root.locator('[data-action="studyBack"]').click(); await settle();
      }
      await root.locator('[data-action="studyBack"]').click(); await settle();
      await next().evaluate(el => el.click());
      await page.emulateMedia({ reducedMotion: 'reduce' }); await settle();
      assert.equal((await motions()).length, 0, 'Preference changes cancel in-flight movement');
      await page.emulateMedia({ reducedMotion: 'no-preference' });
      await root.locator('[data-action="studyBack"]').click(); await settle();
    }
    await next().click(); await settle();
    const position = await root.locator('.mz-study').getAttribute('data-step');
    await page.reload();
    await root.locator('.mz-study').waitFor(); await settle();
    assert.equal(await root.locator('.mz-study').getAttribute('data-step'), position, 'Reload preserves position');
    await root.locator('.mz-study-exit').click();
    await root.locator('.mz-hub-module-page').waitFor(); await settle();
    await root.locator('[data-action="openDashboard"]').click();
    await root.locator('.mz-hub').waitFor(); await settle();
    await page.goBack();
    await root.locator('.mz-hub-module-page').waitFor(); await settle();
    await page.goForward();
    await root.locator('.mz-hub').waitFor(); await settle();
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    assert.equal(await page.locator('.mz-motion-layer, .mz-motion-backdrop').count(), 0);
    if (reduce) assert.equal((await motions()).length, 0);
    results.push({ width, height, reducedMotion: reduce, arabicFace: face, passed: true });
    const video = page.video();
    await context.close();
    if (video) await video.saveAs(`${out}/flow-${width}.webm`);
    console.log(JSON.stringify(results.at(-1)));
  }
  assert.deepEqual(errors, []);
} finally {
  await fs.writeFile(`${out}/report.json`, JSON.stringify({ results, errors }, null, 2));
  await browser.close();
}

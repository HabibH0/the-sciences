// Exercise the real preview wrapper in an isolated profile, preserving the
// learner's open browser and storage. Width changes must not reload the lesson.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const logicVisual = process.argv.includes('--logic-visual');
const logic = process.argv.includes('--logic') || logicVisual;
const courseId = logic ? 'mantiq' : 'adv-sarf', courseName = logic ? 'Logic' : 'Advanced Sarf';
const lesson = logicVisual ? 'logic-propositions/lesson_quality_quantity' : logic ? 'logic-terms/lesson_sound_definitions' : 'as-15/l3';
const sessionKey = `${courseId}/${lesson}`, artifacts = logic ? 'logic-course' : 'sarf-course';
const browser = await chromium.launch({ headless:true, ...(process.env.CHROMIUM_EXECUTABLE ? {executablePath:process.env.CHROMIUM_EXECUTABLE} : {}) });
try {
  const page = await browser.newPage({viewport:{width:1280,height:950}});
  const errors=[];
  page.on('pageerror', error=>errors.push(error.stack));
  await page.route('**/__dev/version', route=>route.abort());
  await page.addInitScript(courseId=>{
    if(location.origin==='http://localhost:4173' && !localStorage.getItem('the-sciences-progress')) localStorage.setItem('the-sciences-progress',JSON.stringify({progress:{courseId,forceUnlockAll:true,mizanVersion:1},meta:{version:1,updatedAt:new Date().toISOString(),deviceId:'isolated-mobile-preview-test'}}));
  }, courseId);
  await page.goto(`http://localhost:4173/scripts/preview-mobile.html?lesson=${lesson}`);
  const frame=page.frameLocator('iframe');
  await frame.locator('.mz-word-lesson').waitFor();
  assert.equal(await page.title(),`${courseName} · Mobile preview`);
  assert((await page.locator('a').getAttribute('href')).endsWith(`#/module/${lesson}`));
  if (logicVisual) {
    await frame.locator('[data-action="logicLayout"][data-view="diagram"]').click();
    await frame.locator('[data-action="logicLayout"][data-detail="meaning"]').click();
    await frame.locator('[data-logic-visual-select]').selectOption('E');
    await page.waitForFunction(key => JSON.parse(localStorage.getItem('the-sciences-progress'))?.progress.studySessions?.[key]?.visualState?.section_0?.primary === 'E', sessionKey);
  } else {
    await frame.locator('[data-action="studyNext"]').click();
    await frame.locator('[data-action="studyNext"]').click();
  }
  const position=await frame.locator('.mz-study').getAttribute('data-step');
  await page.waitForFunction(([key,expected])=>JSON.parse(localStorage.getItem('the-sciences-progress'))?.progress.studySessions?.[key]?.stepIndex===Number(expected),[sessionKey,position]);
  const snapshot=await frame.locator('.mz-study').evaluate(()=>localStorage.getItem('the-sciences-progress'));
  const token=await frame.locator('.mz-study').evaluate(()=>window.__previewIdentity=crypto.randomUUID());
  await fs.mkdir(`artifacts/${artifacts}`,{recursive:true});
  for(const [width,height] of [[320,568],[390,844],[430,932]]) {
    await page.getByLabel('Phone viewport').selectOption(`${width},${height}`);
    await frame.locator('body').evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
    const metrics=await frame.locator('.mz-study').evaluate(node=>({width:innerWidth,height:innerHeight,step:node.dataset.step,token:window.__previewIdentity,saved:localStorage.getItem('the-sciences-progress'),bodyWidth:document.documentElement.scrollWidth,footer:node.querySelector('.mz-study-foot').getBoundingClientRect().bottom,overflow:node.querySelector('.mz-study-body').scrollHeight-node.querySelector('.mz-study-body').clientHeight}));
    assert.equal(metrics.width,width); assert.equal(metrics.height,height);
    assert.equal(metrics.step,position); assert.equal(metrics.token,token); assert.equal(metrics.saved,snapshot);
    assert(metrics.bodyWidth<=width+1 && metrics.footer<=height+1 && metrics.overflow<=1);
    await page.screenshot({path:`artifacts/${artifacts}/mobile-wrapper-${width}.png`});
  }
  await page.reload();
  await frame.locator('.mz-word-lesson').waitFor();
  assert.equal(await frame.locator('.mz-study').getAttribute('data-step'),position);
  if (logicVisual) {
    assert.equal(await frame.locator('.mz-logic-card').getAttribute('data-logic-detail'), 'meaning');
    assert.equal(await frame.locator('[data-logic-visual-select]').inputValue(), 'E');
    await frame.locator('[data-action="logicLayout"][data-detail="diagram"]').click();
    assert(await frame.locator('.visual-categorical .logic-svg').isVisible());
    assert((await frame.locator('.visual-categorical .logic-svg').boundingBox()).height >= 130);
  }
  assert.deepEqual(errors,[]);
  console.log(`Mobile wrapper passed: ${courseName} route, 320/390/430 widths, visible navigation, unchanged saved position, no iframe reload on resizing, refresh recovery.`);
} finally {await browser.close();}

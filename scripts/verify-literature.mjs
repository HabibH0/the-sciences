// The course tests replace the old fixed-phase/one-session mastery contract.
import './verify-literature-course.mjs';
import assert from 'node:assert/strict';
import {LIT_BOOKS,loadChapter} from '../content-lit/index.js';
import {adaptLiteratureSource,enrichmentDraft,ALL_SESSIONS} from '../content-lit/learning/index.js';
import {courseProgress} from '../js/literature/model.js';
let count=0;
for(const book of LIT_BOOKS)for(const shell of book.chapters){
  const chapter=await loadChapter(book.id,shell.id),before=JSON.stringify(chapter);
  const source=adaptLiteratureSource(book,shell,chapter);
  assert.equal(source.legacy,chapter);
  assert.equal(source.vocabularyNotes,chapter.lemmas);
  assert.equal(source.text,chapter.paragraphs.flatMap(p=>p.sentences).map(s=>s.ar).join(' '));
  assert.equal(source.translation,chapter.paragraphs.flatMap(p=>p.sentences).map(s=>s.en).join(' '));
  assert.equal(JSON.stringify(chapter),before);
  assert.equal(enrichmentDraft(book,shell,chapter).status,'needs-authoring');
  count++;
}
assert.equal(count,292);
assert.equal(courseProgress(ALL_SESSIONS,[],{litProgress:{'qiraah-v1/ch1':{done:true}}}).completed.length,0);
console.log('All 292 source chapters, translations, lemma notes and legacy exercises preserved.');

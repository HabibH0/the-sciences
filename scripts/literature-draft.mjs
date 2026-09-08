import { getLitBook, getChapterShell, loadChapter } from '../content-lit/index.js';
import { enrichmentDraft } from '../content-lit/learning/index.js';

const [bookId, chapterId, ...sentenceIds] = process.argv.slice(2);
const book = getLitBook(bookId), shell = getChapterShell(bookId, chapterId);
if (!book || !shell) {
  console.error('Usage: node scripts/literature-draft.mjs <book-id> <chapter-id> [sentence-id ...]');
  process.exitCode = 1;
} else {
  try {
    const chapter = await loadChapter(bookId, chapterId);
    console.log(JSON.stringify(enrichmentDraft(book, shell, chapter, sentenceIds.length ? sentenceIds : null), null, 2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

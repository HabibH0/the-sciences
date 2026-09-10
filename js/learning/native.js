import { conceptKey, lessonExerciseItemKey } from '../../content/index.js';
import { nahwAnalysisItems, nahwCheckItem } from './nahw.js';
import { sarfAnalysisItems, sarfPracticeItems, sarfCheckItem, sarfPracticeDisplay } from './sarf.js';
import { introNahwAnalysisItems, introNahwPracticeItems } from './intro-nahw.js';
import { introSarfAnalysisItems, introSarfPracticeItems } from './intro-sarf.js';

export function guidedGrammar(lesson) {
  return ['mizan-nahw', 'mizan-sarf', 'mizan-intro-nahw', 'mizan-intro-sarf'].includes(lesson?.learningModel);
}

export function nativeAnalysisItems(lesson) {
  if (lesson.learningModel === 'mizan-intro-sarf') return introSarfAnalysisItems(lesson);
  if (lesson.learningModel === 'mizan-intro-nahw') return introNahwAnalysisItems(lesson);
  return lesson.learningModel === 'mizan-sarf' ? sarfAnalysisItems(lesson) : nahwAnalysisItems(lesson);
}

export function nativePracticeItems(lesson) {
  if (lesson.learningModel === 'mizan-intro-sarf') return introSarfPracticeItems(lesson);
  if (lesson.learningModel === 'mizan-intro-nahw') return introNahwPracticeItems(lesson);
  return lesson.learningModel === 'mizan-sarf' ? sarfPracticeItems(lesson) : lesson.exercise?.items || [];
}

export function nativeItem(lesson, step) {
  if (step.kind === 'analysis') return nativeAnalysisItems(lesson)[step.analysisIndex];
  if (step.kind === 'check') return lesson.learningModel === 'mizan-nahw' ? nahwCheckItem(lesson, step.conceptIndex)
    : lesson.learningModel === 'mizan-sarf' ? sarfCheckItem(lesson, step.conceptIndex) : lesson.concepts[step.conceptIndex].exercise;
  if (lesson.learningModel === 'mizan-sarf') return sarfPracticeDisplay(lesson, step.practiceIndex ?? step.exerciseIndex);
  return nativePracticeItems(lesson)[step.practiceIndex ?? step.exerciseIndex];
}

export function nativeItemKey(mod, lesson, step) {
  if (step.kind === 'analysis') return `${mod.id}_${lesson.id}_analysis_${nativeItem(lesson, step).id}`;
  if (step.kind === 'check') return conceptKey(mod.id, lesson.id, step.conceptIndex);
  return step.practiceIndex != null ? `${mod.id}_${lesson.id}_practice_${nativeItem(lesson, step).id}` : lessonExerciseItemKey(mod.id, lesson.id, step.exerciseIndex);
}

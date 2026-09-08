import { conceptKey, lessonExerciseItemKey } from '../../content/index.js';
import { nahwAnalysisItems, nahwCheckItem } from './nahw.js';
import { sarfAnalysisItems, sarfPracticeItems } from './sarf.js';

export function guidedGrammar(lesson) {
  return ['mizan-nahw', 'mizan-sarf'].includes(lesson?.learningModel);
}

export function nativeAnalysisItems(lesson) {
  return lesson.learningModel === 'mizan-sarf' ? sarfAnalysisItems(lesson) : nahwAnalysisItems(lesson);
}

export function nativeItem(lesson, step) {
  if (step.kind === 'analysis') return nativeAnalysisItems(lesson)[step.analysisIndex];
  if (step.kind === 'check') return lesson.learningModel === 'mizan-nahw' ? nahwCheckItem(lesson, step.conceptIndex) : lesson.concepts[step.conceptIndex].exercise;
  return lesson.learningModel === 'mizan-sarf' ? sarfPracticeItems(lesson)[step.practiceIndex] : lesson.exercise.items[step.exerciseIndex];
}

export function nativeItemKey(mod, lesson, step) {
  if (step.kind === 'analysis') return `${mod.id}_${lesson.id}_analysis_${nativeItem(lesson, step).id}`;
  if (step.kind === 'check') return conceptKey(mod.id, lesson.id, step.conceptIndex);
  return lesson.learningModel === 'mizan-sarf' ? `${mod.id}_${lesson.id}_practice_${nativeItem(lesson, step).id}` : lessonExerciseItemKey(mod.id, lesson.id, step.exerciseIndex);
}

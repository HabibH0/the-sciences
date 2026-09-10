import { MODULES } from '../content/annahw.js';
import { MODULES as SARF_MODULES } from '../content-sarf/index.js';
import { foundationPlan } from '../js/learning/nahw-foundations.js';

export function auditCourse(params) {
  const sarf = params.get('subject') === 'sarf' || params.get('lesson')?.startsWith('as-');
  return { courseId: sarf ? 'adv-sarf' : 'adv-nahw', modules: sarf ? SARF_MODULES : MODULES,
    defaultLesson: sarf ? 'as-01/l1' : '01/l1', artifacts: sarf ? 'sarf-course' : 'nahw-foundations' };
}

// Shared selection keeps render and interaction audits on the same authored set.
export function auditLessons(params) {
  const course = auditCourse(params);
  const modules = params.has('modules') ? params.get('modules').split(',') : null;
  const lessons = course.modules.flatMap(mod => mod.lessons);
  const selected = lessons.filter(lesson => params.has('lesson')
    ? lesson.learningKey === params.get('lesson')
    : modules ? modules.includes(lesson.learningKey.split('/')[0].replace(/^as-/, ''))
      : params.has('course') ? lesson.learningKey === '01/l1' || foundationPlan(lesson)
        : course.courseId === 'adv-sarf' ? !!foundationPlan(lesson) : ['01', '02'].includes(lesson.learningKey.split('/')[0]));
  if (!selected.length) throw new Error('No lessons selected for audit');
  for (const lesson of selected) if (lesson.learningKey !== '01/l1' && !foundationPlan(lesson)) throw new Error(`No authored plan for ${lesson.learningKey}`);
  return selected;
}

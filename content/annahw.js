// Modules 02-17 removed 2026-08-12: the old advanced Nahw content is being
// fully re-authored from app-lessons/ (see COURSE-MAP.md), module by
// module, rather than revamped in place. content/path-advanced.js's
// GROUP_MODULE_RANGES and section-size math are still built for the OLD
// 17-module course and are known-broken against this course (now 30
// modules) until it's rebuilt to match -- deliberately left alone per
// 2026-08-12 direction, not an oversight. It needs attention before the
// Advanced Path feature can be trusted with this course.
//
// Many modules were authored out of their final unlock order at various
// points on 2026-08-12, by concurrent sessions each working a different
// slice of COURSE-MAP.md's plan -- see each module's own header comment
// and COURSE-MAP.md for the id-vs-authoring-order history of each one.
// All 30 modules planned in COURSE-MAP.md are now written and registered
// here in straight id order, which is also unlock order (array position,
// not id, drives isModuleUnlocked in content/index.js): 01 الكلمة -> 02
// الجملة وشبه الجملة والكلام -> 03 العامل والمعمول والإعراب -> 04 الفعل
// القياسي: اللزوم والتعدي -> 05 أفعال القلوب: اليقين والظن -> 06 أفعال
// التحويل والتعليق والإلغاء -> 07 الأفعال الناقصة: كان وأخواتها -> 08
// الرجاء والمقاربة والشروع والمدح والذم والتعجب -> 09 حروف الجر: التمهيد
// والأكثر شيوعا -> 10 حروف الجر: الباقية وأحرف القسم ورُبَّ -> 11 زوائد
// حروف الجر وحذفها، وإلا -> 12 إنّ وأخواتها -> 13 ليت، والحروف المشبهة
// بالفعل، وتخفيفها -> 14 النواصب والجوازم -> 15 أحرف العطف -> 16 أحرف
// الجواب والنفي والتأكيد -> 17 أحرف الشرط غير العاملة -> 18 التوبيخ
// والتنبيه والمصدر والنفي والزيادة -> 19 الاستفهام والاستقبال والتفسير
// والتنوين (closing الحرف غير العامل chapter) -> 20 العامل من الأسماء
// المشتقة -> 21 بقية الأسماء العاملة والإضافة (closing العامل وغير
// العامل: الاسم) -> 22 حذف العامل -> 23 النداء وملحقاته (closing خاتم,
// and the whole العامل وغير العامل chapter) -> 24 الفاعل ونائب الفاعل
// والمبتدأ -> 25 الخبر والمفعول المطلق -> 26 بقية المفعولات -> 27 الحال
// -> 28 التمييز -> 29 المستثنى -> 30 خبر النواسخ والمجرور والنعت (closing
// المعمول وغير المعمول: الاسم والفعل, and the app-lessons corpus as it
// currently stands). `npm run build:web` must be re-run after registering
// a new module here, to regenerate `content/meta.js`'s per-module shell
// data (id/title/lesson list).
import m01 from './module-01.js';
import m02 from './module-02.js';
import m03 from './module-03.js';
import m04 from './module-04.js';
import m05 from './module-05.js';
import m06 from './module-06.js';
import m07 from './module-07.js';
import m08 from './module-08.js';
import m09 from './module-09.js';
import m10 from './module-10.js';
import m11 from './module-11.js';
import m12 from './module-12.js';
import m13 from './module-13.js';
import m14 from './module-14.js';
import m15 from './module-15.js';
import m16 from './module-16.js';
import m17 from './module-17.js';
import m18 from './module-18.js';
import m19 from './module-19.js';
import m20 from './module-20.js';
import m21 from './module-21.js';
import m22 from './module-22.js';
import m23 from './module-23.js';
import m24 from './module-24.js';
import m25 from './module-25.js';
import m26 from './module-26.js';
import m27 from './module-27.js';
import m28 from './module-28.js';
import m29 from './module-29.js';
import m30 from './module-30.js';

export const MODULES = [m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21, m22, m23, m24, m25, m26, m27, m28, m29, m30];
